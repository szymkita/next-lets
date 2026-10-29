// Podgląd zgłoszeń z formularzy zapisanych w prywatnym Vercel Blob
// („zgloszenia-strona”, zapisuje je api/kontakt.js).
//
// Użycie (token z projektu Vercela pobiera `vercel env pull .env.local`):
//   npm run zgloszenia              — ostatnie 20 zgłoszeń
//   npm run zgloszenia -- 50        — ostatnie 50
//   npm run zgloszenia -- 2026-10   — wszystkie z danego miesiąca
//   npm run zgloszenia -- odrzucone — złapane przez pułapkę na boty (pole
//                                     kontrola); działa też z liczbą i miesiącem
//
// Dane kontaktowe wypisują się tylko w terminalu; skrypt niczego nie zapisuje.
import { readFileSync } from 'node:fs';
import { list, get } from '@vercel/blob';

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  try {
    const env = readFileSync(new URL('../.env.local', import.meta.url), 'utf8');
    const m = env.match(/^BLOB_READ_WRITE_TOKEN="?([^"\n]+)"?/m);
    if (m) process.env.BLOB_READ_WRITE_TOKEN = m[1];
  } catch {}
}
if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.error('Brak BLOB_READ_WRITE_TOKEN. Uruchomcie najpierw: vercel env pull .env.local');
  process.exit(1);
}

const odrzucone = process.argv[2] === 'odrzucone';
const arg = (odrzucone ? process.argv[3] : process.argv[2]) || '';
const miesiac = /^\d{4}-\d{2}$/.test(arg) ? arg : '';
const ile = miesiac ? Infinity : Number(arg) || 20;

const pliki = [];
let cursor;
do {
  const strona = await list({ prefix: `${odrzucone ? 'odrzucone' : 'zgloszenia'}/${miesiac}`, cursor, limit: 1000 });
  pliki.push(...strona.blobs);
  cursor = strona.hasMore ? strona.cursor : undefined;
} while (cursor);

pliki.sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt));
const wybrane = pliki.slice(0, ile);
if (!wybrane.length) { console.log('Brak zgłoszeń.'); process.exit(0); }

for (const p of wybrane) {
  const { stream } = await get(p.pathname, { access: 'private' });
  const z = JSON.parse(await new Response(stream).text());
  console.log(`\n${z.kiedy}  ·  ${z.zrodlo}`);
  console.log(`  ${z.email}  ·  ${z.telefon || '—'}${z.referrer ? `  ·  ref: ${z.referrer}` : ''}`);
  if (z.pulapka) console.log(`  pułapka: ${z.pulapka}`);
  console.log(`  ${(z.wiadomosc || '(bez wiadomości)').replace(/\n/g, '\n  ')}`);
}
console.log(`\n${wybrane.length} z ${pliki.length} zgłoszeń${miesiac ? ` z ${miesiac}` : ''}.`);
