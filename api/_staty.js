// letsautomate.pl · own visit statistics (same code as agent2.pl) without cookies (Neon Postgres over HTTP, no driver).
// Visitor = sha256(day + salt + IP + user agent), cut to 16 chars: changes every day, IP is never stored.
import { createHash } from 'node:crypto';

const URL_DB = () => process.env.DATABASE_URL || process.env.POSTGRES_URL || '';
const BOT = /bot|crawl|spider|slurp|headless|lighthouse|pingdom|uptime|monitor|preview|facebookexternalhit|whatsapp|telegram|slack|discord|linkedinbot|embedly|vercel|curl|wget|python|node-fetch|axios|go-http/i;

export const isBot = ua => !ua || BOT.test(ua);

export function visitor(req) {
  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  const ua = String(req.headers['user-agent'] || '');
  const day = new Date().toLocaleDateString('sv-SE', { timeZone: 'Europe/Warsaw' });
  const salt = process.env.STATY_SALT || createHash('sha256').update('lets|' + URL_DB()).digest('hex');
  return createHash('sha256').update(`${day}|${salt}|${ip}|${ua}`).digest('hex').slice(0, 16);
}

export function device(ua = '') {
  if (/iPad|Tablet|(Android(?!.*Mobile))/i.test(ua)) return 'tablet';
  if (/Mobi|iPhone|Android/i.test(ua)) return 'telefon';
  return 'komputer';
}

export async function sql(query, params = []) {
  const conn = URL_DB();
  if (!conn) return null;
  const host = new URL(conn.replace(/^postgres(ql)?:/, 'https:')).host;
  const r = await fetch(`https://${host}/sql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Neon-Connection-String': conn },
    body: JSON.stringify({ query, params }),
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(j.message || `neon ${r.status}`);
  return j;
}

const SCHEMA = `CREATE TABLE IF NOT EXISTS zdarzenia (
  id bigserial PRIMARY KEY, ts timestamptz NOT NULL DEFAULT now(), vid text, uid text, e text NOT NULL, path text,
  ref text, src text, med text, kamp text, tresc text, kraj text, urz text, w int, p jsonb)`;

// one row per event; creates the table on first use
export async function zapisz(row) {
  const cols = ['vid', 'uid', 'e', 'path', 'ref', 'src', 'med', 'kamp', 'tresc', 'kraj', 'urz', 'w', 'p'];
  const vals = cols.map(c => (c === 'p' ? (row.p ? JSON.stringify(row.p) : null) : row[c] ?? null));
  const q = `INSERT INTO zdarzenia (${cols.join(',')}) VALUES (${cols.map((_, i) => '$' + (i + 1)).join(',')})`;
  try { return await sql(q, vals); }
  catch (e) {
    if (!/does not exist/.test(e.message)) throw e;
    await sql(SCHEMA);
    await sql('CREATE INDEX IF NOT EXISTS zdarzenia_ts ON zdarzenia (ts)');
    return sql(q, vals);
  }
}
