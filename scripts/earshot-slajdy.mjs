// Slajdy Earshot AI na hub /produkty i karta do hero — zrzuty okien
// z makiety src/robocze/produkty/earshot-makieta.astro (docs/produkty-koncepcja.md).
//
// Użycie (przy działającym `npm run dev`):
//   node scripts/earshot-slajdy.mjs
//   ADRES=http://localhost:4322 node scripts/earshot-slajdy.mjs
//
// Okna mają te same proporcje co slajdy Appto, Wingmana i Ofert AI
// (src/components/produkty/Slajdy.astro): pulpit 1100 × 688 zapisany jako
// 1400 × 876, telefon 346 × 519 jako 692 × 1038, WebP z przezroczystymi
// rogami do public/produkty/slajdy/. Karta z oceną idzie do
// public/produkty/hero/earshot-karta.webp (2×, przezroczyste tło).
import { spawn } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const ADRES = process.env.ADRES || 'http://localhost:4321';
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PUB = new URL('../public/produkty/', import.meta.url).pathname;

// [element, plik, skala]
const EKRANY = ['rozmowa', 'transkrypcja', 'standard', 'rozmowy', 'wgraj'];
const ZRZUTY = [
  ...EKRANY.flatMap((e, i) => [
    [`#ek-${e}`, `slajdy/es-${i + 1}-${e}.webp`, 1400 / 1100],
    [`#ek-${e}-tel`, `slajdy/es-${i + 1}-${e}-tel.webp`, 2],
  ]),
  ['#ek-karta', 'hero/earshot-karta.webp', 2],
];

const profil = mkdtempSync(join(tmpdir(), 'cdp-earshot-'));
const port = 9500 + Math.floor(Math.random() * 300);
const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${profil}`, '--no-first-run', '--no-default-browser-check', '--hide-scrollbars', '--force-prefers-reduced-motion', 'about:blank'], { stdio: 'ignore' });
const sprzataj = () => { try { chrome.kill('SIGKILL'); } catch {} try { rmSync(profil, { recursive: true, force: true }); } catch {} };
process.on('exit', sprzataj);
const czekaj = (ms) => new Promise((r) => setTimeout(r, ms));

try {
  let ws;
  for (let i = 0; i < 60 && !ws; i++) {
    try { ws = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find((t) => t.type === 'page')?.webSocketDebuggerUrl; } catch {}
    if (!ws) await czekaj(250);
  }
  const s = new WebSocket(ws);
  await new Promise((r) => s.addEventListener('open', r));
  let id = 0; const ocz = new Map();
  s.addEventListener('message', (e) => { const m = JSON.parse(e.data); if (m.id && ocz.has(m.id)) { ocz.get(m.id)(m); ocz.delete(m.id); } });
  const cmd = (method, params = {}) => new Promise((r) => { const i = ++id; ocz.set(i, r); s.send(JSON.stringify({ id: i, method, params })); });
  const ev = async (expression) => (await cmd('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })).result?.result?.value;
  await cmd('Emulation.setDeviceMetricsOverride', { width: 2600, height: 1600, deviceScaleFactor: 1, mobile: false });
  await cmd('Emulation.setDefaultBackgroundColorOverride', { color: { r: 0, g: 0, b: 0, a: 0 } });
  await cmd('Page.navigate', { url: `${ADRES}/produkty/earshot-makieta` });
  for (let i = 0; i < 80 && (await ev('document.readyState')) !== 'complete'; i++) await czekaj(250);
  await ev('document.fonts.ready.then(() => true)');
  await ev(`(()=>{const st=document.createElement('style');st.textContent='html,body{background:transparent!important}astro-dev-toolbar{display:none!important}';document.head.appendChild(st);})()`);
  await czekaj(800);
  for (const [sel, plik, skala] of ZRZUTY) {
    const b = await ev(`(()=>{const e=document.querySelector(${JSON.stringify(sel)});if(!e)return null;const r=e.getBoundingClientRect();return {x:r.left+scrollX,y:r.top+scrollY,w:r.width,h:r.height};})()`);
    if (!b) { console.log(`BRAK ${sel}`); process.exitCode = 1; continue; }
    const clip = { x: b.x, y: b.y, width: b.w, height: b.h, scale: skala };
    const r = await cmd('Page.captureScreenshot', { format: 'webp', quality: 90, clip, captureBeyondViewport: true });
    writeFileSync(PUB + plik, Buffer.from(r.result.data, 'base64'));
    console.log(`${plik}  ${Math.round(b.w * skala)}×${Math.round(b.h * skala)}`);
  }
  s.close();
} catch (e) { console.error(e); process.exitCode = 1; } finally { sprzataj(); }
