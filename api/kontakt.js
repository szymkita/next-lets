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
import { createHash } from 'node:crypto';
import { zapisz, visitor, device } from './_staty.js';

// Meta Conversions API: po przyjętym zgłoszeniu wysyłamy Lead z serwera na
// piksel letsautomate.pl, z tym samym event_id, z którym Lead wysyła
// przeglądarka (Zgody.astro), więc Meta liczy jedno zgłoszenie. Tylko gdy
// ktoś zgodził się w banerze na marketing (`meta.zgoda`) i jest token
// META_CAPI_TOKEN (Vercel env, production; z Menedżera zdarzeń piksela).
// Błąd Mety nigdy nie psuje zgłoszenia: najwyżej wpis w logu.
const META_PIKSEL = '419937373267135';
const SHA = (v) => createHash('sha256').update(v).digest('hex');

async function wyslijDoMety(req, { email, telefon, zrodlo, meta }) {
  const token = process.env.META_CAPI_TOKEN;
  if (!token || !meta || meta.zgoda !== true) return;
  const id = CZYSC(meta.event_id, 80);
  if (!id) return;
  const cyfry = telefon.replace(/\D/g, '');
  const ph = cyfry.length === 9 ? '48' + cyfry : cyfry.replace(/^00/, '');
  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  const user_data = {
    em: [SHA(email.trim().toLowerCase())],
    ...(ph.length >= 9 ? { ph: [SHA(ph)] } : {}),
    ...(ip ? { client_ip_address: ip } : {}),
    ...(req.headers['user-agent'] ? { client_user_agent: CZYSC(req.headers['user-agent'], 500) } : {}),
    ...(meta.fbp ? { fbp: CZYSC(meta.fbp, 200) } : {}),
    ...(meta.fbc ? { fbc: CZYSC(meta.fbc, 500) } : {}),
  };
  const url = CZYSC(meta.url, 500);
  const cialo = {
    data: [{
      event_name: 'Lead',
      event_time: Math.floor(Date.now() / 1000),
      event_id: id,
      action_source: 'website',
      ...(/^https:\/\/(www\.)?letsautomate\.pl\//.test(url) ? { event_source_url: url } : {}),
      user_data,
      custom_data: { content_name: zrodlo.split(' · ')[0].slice(0, 120) },
    }],
    ...(meta.test ? { test_event_code: CZYSC(meta.test, 40) } : {}),
  };
  try {
    const odp = await fetch(`https://graph.facebook.com/v27.0/${META_PIKSEL}/events`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(cialo),
      signal: AbortSignal.timeout(3000),
    });
    if (!odp.ok) console.error('[kontakt] Meta CAPI:', odp.status, (await odp.text()).slice(0, 400));
  } catch (e) {
    console.error('[kontakt] Meta CAPI nie odpowiada:', e && e.message);
  }
}


const CZYSC = (v, max) => String(v == null ? '' : v).replace(/\s+/g, ' ').trim().slice(0, max);
const MAIL_OK = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

// Własne statystyki (api/_staty.js): zgłoszenie i błąd formularza jako zdarzenia, bez danych osoby
// (tylko źródło, strona i to, czy podano telefon). Ten sam identyfikator odwiedzającego co w /api/hit.
function stat(req, e, dane, p) {
  let path = null;
  try { path = new URL(String(dane?.meta?.url || '')).pathname.slice(0, 200); } catch {}
  const ua = String(req.headers['user-agent'] || '');
  return zapisz({ vid: visitor(req), e, path, urz: device(ua), kraj: String(req.headers['x-vercel-ip-country'] || '').slice(0, 4) || null, p })
    .catch((x) => console.error('[kontakt] staty:', x.message));
}

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

  if (!MAIL_OK.test(email)) { await stat(req, 'zgloszenie_blad', dane, { powod: 'email', zrodlo: zrodlo.split(' · ')[0].slice(0, 60) }); return res.status(422).json({ blad: 'email' }); }
  if (telefon && telefon.replace(/\D/g, '').length < 9) { await stat(req, 'zgloszenie_blad', dane, { powod: 'telefon', zrodlo: zrodlo.split(' · ')[0].slice(0, 60) }); return res.status(422).json({ blad: 'telefon' }); }

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
    await stat(req, 'zgloszenie_blad', dane, { powod: 'dostarczenie', zrodlo: zrodlo.split(' · ')[0].slice(0, 60) });
    return res.status(502).json({ blad: 'dostarczenie' });
  }
  // Część kanałów padła (np. webhook), ale zgłoszenie jest zapisane gdzie indziej.
  if (padly.length) console.error('[kontakt] nie wszystkie kanały zadziałały:', padly);

  await Promise.all([
    wyslijDoMety(req, { email, telefon, zrodlo, meta: dane.meta && typeof dane.meta === 'object' ? dane.meta : null }),
    stat(req, 'zgloszenie', dane, { zrodlo: zrodlo.split(' · ')[0].slice(0, 60), miejsce: zrodlo.split(' · ').slice(-1)[0].slice(0, 60), telefon: !!telefon }),
  ]);

  return res.status(200).json({ ok: true });
}
