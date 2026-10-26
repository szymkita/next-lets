// TWARZE AGENTÓW NA /lets-shift (26.10.2026, odchudzenie strony).
// Każda twarz z src/lib/agent-face.ts to ok. 25 elementów SVG, a strona
// pokazuje ich kilkadziesiąt. Tu każdy agent jest rysowany raz, jako
// <symbol> w niewidocznym zestawie (zestawTwarzy, wstawiany raz na stronie,
// przed hero), a w treści stoi tylko <svg class="agf"><use/></svg>.
// Wygląd 1:1 z agentFaceSvg (ten sam kształt, kolor, ścinki, oczy i iskry);
// klasa „agf ” na zewnętrznym <svg> zostaje, więc style rozmiaru działają.
// Zestawu nie ukrywamy przez display:none — clipPath w ukrytym <svg> potrafi
// przestać działać; ma zerowy rozmiar i stoi poza układem.
import { agentFaceSvg } from '../../lib/agent-face';
import type { AgentAvatar } from '../../lib/agent-face';

export const AGENCI: Record<string, AgentAvatar> = {
  prz: { shape: 'blob', color: 'sky', eyes: 'dark', seed: 4021 },
  of: { shape: 'flower', color: 'amber', eyes: 'dark', seed: 913 },
  erp: { shape: 'octagon', color: 'violet', eyes: 'light', seed: 5530 },
  plan: { shape: 'squircle', color: 'mint', eyes: 'dark', seed: 2207 },
  st: { shape: 'diamond', color: 'coral', eyes: 'dark', seed: 3310 },
  zg: { shape: 'blob', color: 'lavender', eyes: 'dark', seed: 1187 },
  prd: { shape: 'squircle', color: 'lime', eyes: 'dark', seed: 6612 },
  prot: { shape: 'flower', color: 'pink', eyes: 'dark', seed: 2741 },
  mag: { shape: 'octagon', color: 'teal', eyes: 'light', seed: 8830 },
  roz: { shape: 'diamond', color: 'sand', eyes: 'dark', seed: 4470 },
  zap: { shape: 'blob', color: 'orange', eyes: 'dark', seed: 5122 },
  um: { shape: 'squircle', color: 'violet', eyes: 'light', seed: 3091 },
  god: { shape: 'flower', color: 'mint', eyes: 'dark', seed: 7716 },
};

export const jestAgent = (k: string) => k in AGENCI;

// Jedna twarz w treści: odwołanie do symbolu z zestawu.
export const twarz = (k: string, s = 28) =>
  `<svg class="agf " viewBox="0 0 100 100" width="${s}" height="${s}" overflow="visible" aria-hidden="true"><use href="#agf-${k}"/></svg>`;

// Iskry (cztery gwiazdki w rogach, w spoczynku widoczne) jedną ścieżką:
// ta sama gwiazdka przesunięta w cztery miejsca, ten sam kolor. Opakowania
// <g class="agf-b|agf-eyes|agf-sparks"> bez stylów na tej stronie, więc
// rysunek bez nich jest ten sam, a elementów o połowę mniej.
function iskry(rys: string): string {
  let d = '';
  let fill = '';
  const bez = rys.replace(/<g class="agf-sparks">([\s\S]*?)<\/g><\/g>$/, (_, w: string) => {
    for (const m of w.matchAll(/<g transform="translate\(([\d.-]+) ([\d.-]+)\)"><path class="agf-st" d="([^"]+)" fill="([^"]+)"[^>]*\/><\/g>/g)) {
      const x = Number(m[1]), y = Number(m[2]);
      fill = m[4];
      d += m[3].replace(/(-?[\d.]+),(-?[\d.]+)/g, (_s, a: string, b: string) => `${+(Number(a) + x).toFixed(2)},${+(Number(b) + y).toFixed(2)}`);
    }
    return '</g>';
  });
  return bez
    .replace(/^<g class="agf-b">/, '').replace(/<\/g>$/, '')
    .replace(/<g class="agf-eyes">([\s\S]*?)<\/g>/, '$1')
    + (d ? `<path d="${d}" fill="${fill}"/>` : '');
}

// Zestaw symboli: clipPath każdego agenta w jednym <defs>, rysunek w <symbol>.
export function zestawTwarzy(): string {
  let defs = '';
  let sym = '';
  for (const [k, a] of Object.entries(AGENCI)) {
    const svg = agentFaceSvg(a, { size: 100 });
    const d = svg.match(/<defs>([\s\S]*?)<\/defs>/);
    if (d) defs += d[1];
    const rys = svg.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '').replace(/<defs>[\s\S]*?<\/defs>/, '');
    sym += `<symbol id="agf-${k}" viewBox="0 0 100 100" overflow="visible">${iskry(rys)}</symbol>`;
  }
  return `<svg width="0" height="0" aria-hidden="true" focusable="false" style="position:absolute;width:0;height:0;overflow:hidden"><defs>${defs}</defs>${sym}</svg>`;
}
