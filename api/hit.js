// letsautomate.pl · jedno zdarzenie statystyk z public/staty.js (sendBeacon, JSON jako text/plain).
// Bez cookies: odwiedzający = skrót dnia, soli, IP i przeglądarki (IP nie jest zapisywane). Baza: Neon „lets-staty-db” (fra1).
import { zapisz, visitor, device, isBot, sql } from './_staty.js';

const cut = (v, n) => (v == null ? null : String(v).slice(0, n));
const NAME = /^[a-z0-9_]{1,40}$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const ua = String(req.headers['user-agent'] || '');
  if (isBot(ua)) return res.status(204).end();
  let b = req.body;
  try { if (typeof b === 'string') b = JSON.parse(b); } catch (e) { return res.status(400).end(); }
  if (!b || !NAME.test(b.e || '')) return res.status(400).end();
  let ref = cut(b.r, 300);
  try { if (ref && new URL(ref).hostname.endsWith('letsautomate.pl')) ref = null; } catch (e) { ref = null; }
  const p = b.p && typeof b.p === 'object' && JSON.stringify(b.p).length < 600 ? b.p : null;
  try {
    await zapisz({
      vid: visitor(req), uid: cut(b.i, 40) || null, e: b.e, path: cut(b.u, 200), ref,
      src: cut(b.s, 100), med: cut(b.m, 100), kamp: cut(b.c, 150), tresc: cut(b.t, 150),
      kraj: cut(req.headers['x-vercel-ip-country'], 4), urz: device(ua), w: Number.isFinite(+b.w) ? Math.round(+b.w) : null, p,
    });
    // sprzątanie: zdarzenia starsze niż 14 miesięcy (średnio raz na 500 zapisów, bez osobnego crona)
    if (Math.random() < 0.002) await sql("DELETE FROM zdarzenia WHERE ts < now() - interval '14 months'");
  } catch (e) { console.error('staty', e.message); }
  res.status(204).end();
}
