// Odbiór zgłoszeń z formularzy na stronie. Funkcja Vercela (katalog /api
// działa obok statycznego builda Astro).
//
// Dokąd trafia zgłoszenie, decydują zmienne środowiskowe:
//   WEBHOOK_URL        — dowolny webhook przyjmujący JSON (Make, n8n, Zapier).
//                        Docelowy kanał: scenariusz w Make.
//   SLACK_WEBHOOK_URL  — webhook przychodzący na kanał Slacka,
//   RESEND_API_KEY + LEAD_TO (+ LEAD_FROM) — mail przez Resend.
// Można ustawić kilka naraz. Dopóki nie ma żadnej, funkcja zwraca 503,
// a formularz pokazuje telefon i adres mailowy — zgłoszenie nie ginie po cichu.

const CZYSC = (v, max) => String(v == null ? '' : v).replace(/\s+/g, ' ').trim().slice(0, max);
const MAIL_OK = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ blad: 'metoda' });
  }

  let dane = req.body;
  if (typeof dane === 'string') {
    try { dane = JSON.parse(dane); } catch { dane = null; }
  }
  if (!dane || typeof dane !== 'object') return res.status(400).json({ blad: 'brak-danych' });

  // Pułapka na boty: pole ukryte w formularzu, człowiek go nie wypełni.
  if (CZYSC(dane.firma_www, 200)) return res.status(200).json({ ok: true });

  const email = CZYSC(dane.email, 160);
  const telefon = CZYSC(dane.telefon, 40);
  const wiadomosc = CZYSC(dane.wiadomosc, 4000);
  const zrodlo = CZYSC(dane.zrodlo, 120) || 'nieznane';

  if (!MAIL_OK.test(email)) return res.status(422).json({ blad: 'email' });
  if (telefon && telefon.replace(/\D/g, '').length < 9) return res.status(422).json({ blad: 'telefon' });

  const kiedy = new Date().toISOString();
  const tresc = [
    `E-mail: ${email}`,
    telefon ? `Telefon: ${telefon}` : 'Telefon: —',
    `Skąd: ${zrodlo}`,
    `Kiedy: ${kiedy}`,
    '',
    wiadomosc || '(bez wiadomości)',
  ].join('\n');

  const wysylki = [];

  if (process.env.WEBHOOK_URL) {
    wysylki.push(
      fetch(process.env.WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, telefon, wiadomosc, zrodlo, kiedy }),
      })
    );
  }

  if (process.env.SLACK_WEBHOOK_URL) {
    wysylki.push(
      fetch(process.env.SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: `*Nowe zgłoszenie ze strony*\n\`\`\`${tresc}\`\`\`` }),
      })
    );
  }

  if (process.env.RESEND_API_KEY && process.env.LEAD_TO) {
    wysylki.push(
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.LEAD_FROM || 'strona@letsautomate.pl',
          to: process.env.LEAD_TO.split(',').map((x) => x.trim()),
          reply_to: email,
          subject: `Zgłoszenie ze strony — ${email}`,
          text: tresc,
        }),
      })
    );
  }

  if (!wysylki.length) {
    console.error('[kontakt] brak konfiguracji odbiorcy, zgłoszenie nieprzekazane:', tresc);
    return res.status(503).json({ blad: 'brak-konfiguracji' });
  }

  const wyniki = await Promise.allSettled(wysylki);
  const udane = wyniki.filter((w) => w.status === 'fulfilled' && w.value && w.value.ok);
  if (!udane.length) {
    console.error('[kontakt] wszystkie kanały odpadły:', wyniki.map((w) => w.reason || (w.value && w.value.status)));
    return res.status(502).json({ blad: 'dostarczenie' });
  }

  return res.status(200).json({ ok: true });
}
