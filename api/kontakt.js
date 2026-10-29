// Odbiór zgłoszeń z formularzy na stronie. Funkcja Vercela (katalog /api
// działa obok statycznego builda Astro).
//
// Każde zgłoszenie zapisuje się najpierw w prywatnym magazynie Vercel Blob
// „zgloszenia-strona” (fra1, podłączony do projektu 19.10.2026, zmienna
// BLOB_READ_WRITE_TOKEN), jako plik zgloszenia/RRRR-MM/<czas>.json. To kopia
// na wypadek, gdyby webhook nie był ustawiony albo padł. Podgląd zgłoszeń:
// `npm run zgloszenia` (scripts/zgloszenia.mjs).
//
// Dalej zgłoszenie idzie kanałami ze zmiennych środowiskowych:
//   WEBHOOK_URL        — dowolny webhook przyjmujący JSON (Make, n8n, Zapier).
//                        Docelowy kanał: scenariusz w Make.
//   SLACK_WEBHOOK_URL  — webhook przychodzący na kanał Slacka,
//   RESEND_API_KEY + LEAD_TO (+ LEAD_FROM) — mail przez Resend.
// Można ustawić kilka naraz. Zgłoszenie uznajemy za przyjęte, gdy zadziałał
// choć jeden kanał (zapis w Blob też się liczy). Gdy nie ma żadnego albo
// wszystkie padły, funkcja zwraca 503/502, a formularz pokazuje telefon
// i adres mailowy — zgłoszenie nie ginie po cichu.
import { put } from '@vercel/blob';


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

  const email = CZYSC(dane.email, 160);
  const telefon = CZYSC(dane.telefon, 40);
  const wiadomosc = CZYSC(dane.wiadomosc, 4000);
  // 240 znaków, bo /darmowa-konsultacja dopisuje do źródła przycisk (?z=)
  // i stronę, z której ktoś przyszedł — adresy wpisów bywają długie.
  const zrodlo = CZYSC(dane.zrodlo, 240) || 'nieznane';
  // Kod polecającego z `?ref=` w adresie (zapamiętany w przeglądarce, jak
  // na starym serwisie) — puste, gdy nikt nie polecił.
  const referrer = CZYSC(dane.referrer, 120);

  const kiedy = new Date().toISOString();

  // Pułapka na boty: pole ukryte w formularzu, człowiek go nie wypełni.
  // Do 29.10.2026 nazywało się firma_www i autouzupełnianie przeglądarki mogło
  // je wypełnić za człowieka (zgłoszenie z 29.10 12:57 przepadło bez śladu).
  // Dlatego odrzucone zgłoszenie nie ginie: trafia do Blob pod odrzucone/
  // i do logu. Podgląd: `npm run zgloszenia -- odrzucone`.
  const pulapka = CZYSC(dane.firma_www, 200);
  if (pulapka) {
    console.warn('[kontakt] odrzucone przez pułapkę:', JSON.stringify({ email, telefon, zrodlo, pulapka, wiadomosc: wiadomosc.slice(0, 300) }));
    if (process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID) {
      const plik = `odrzucone/${kiedy.slice(0, 7)}/${kiedy.replace(/[:.]/g, '-')}.json`;
      await put(plik, JSON.stringify({ email, telefon, wiadomosc, zrodlo, referrer, kiedy, pulapka }, null, 2), {
        access: 'private',
        addRandomSuffix: true,
        contentType: 'application/json',
      }).catch((e) => console.error('[kontakt] zapis odrzuconego nie wyszedł:', e));
    }
    return res.status(200).json({ ok: true });
  }

  if (!MAIL_OK.test(email)) return res.status(422).json({ blad: 'email' });
  if (telefon && telefon.replace(/\D/g, '').length < 9) return res.status(422).json({ blad: 'telefon' });

  const tresc = [
    `E-mail: ${email}`,
    telefon ? `Telefon: ${telefon}` : 'Telefon: —',
    `Skąd: ${zrodlo}`,
    referrer ? `Polecenie (ref): ${referrer}` : null,
    `Kiedy: ${kiedy}`,
    '',
    wiadomosc || '(bez wiadomości)',
  ].filter((x) => x !== null).join('\n');

  const wysylki = [];
  const kanaly = [];
  if (process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID) {
    kanaly.push('blob');
    const plik = `zgloszenia/${kiedy.slice(0, 7)}/${kiedy.replace(/[:.]/g, '-')}.json`;
    wysylki.push(
      put(plik, JSON.stringify({ email, telefon, wiadomosc, zrodlo, referrer, kiedy }, null, 2), {
        access: 'private',
        addRandomSuffix: true,
        contentType: 'application/json',
      }).then(() => ({ ok: true }))
    );
  }

  if (process.env.WEBHOOK_URL) {
    kanaly.push('webhook');
    wysylki.push(
      fetch(process.env.WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, telefon, wiadomosc, zrodlo, referrer, kiedy }),
      })
    );
  }

  if (process.env.SLACK_WEBHOOK_URL) {
    kanaly.push('slack');
    wysylki.push(
      fetch(process.env.SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: `*Nowe zgłoszenie ze strony*\n\`\`\`${tresc}\`\`\`` }),
      })
    );
  }

  if (process.env.RESEND_API_KEY && process.env.LEAD_TO) {
    kanaly.push('resend');
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
  const dziala = (w) => w.status === 'fulfilled' && w.value && w.value.ok;
  const padly = wyniki.map((w, i) => (dziala(w) ? null : `${kanaly[i]}: ${w.reason || (w.value && w.value.status)}`)).filter(Boolean);
  if (padly.length === wyniki.length) {
    console.error('[kontakt] wszystkie kanały odpadły:', padly);
    return res.status(502).json({ blad: 'dostarczenie' });
  }
  // Część kanałów padła (np. webhook), ale zgłoszenie jest zapisane gdzie indziej.
  if (padly.length) console.error('[kontakt] nie wszystkie kanały zadziałały:', padly);

  return res.status(200).json({ ok: true });
}
