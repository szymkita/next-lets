// Skopiowane 24.10.2026 z ~/appto-hub/src/lib/agent-face.ts (landing Appto, port 1:1
// z produktu ApptoAI/appto-ai). Używane w makietach Appto na stronach Let’s automate,
// żeby asystenci wyglądali jak w aplikacji. Zmiany wprowadzać w źródle i kopiować.

/**
 * Twarze agentów — port 1:1 z produktu (ApptoAI/appto-ai, packages/agent-avatar
 * + packages/ui/src/components/appto-agent). Ta sama geometria kształtów, ta sama
 * paleta, te same ścinki z seeda i te same oczy, więc agent na landingu wygląda
 * dokładnie jak w aplikacji.
 *
 * Funkcja zwraca gotowy <svg> z klasami-zaczepami pod animacje stanów w CSS
 * (styles/landing/styles.css, blok „TWARZE AGENTÓW"): .agf-b ciało, .agf-eyes
 * para oczu, .agf-e oko, .agf-sweep przebłysk pracy, .agf-st iskry po skończeniu.
 * Stan ustawia atrybut data-state na <svg> (idle | working | done | spawn | rest).
 */

type Point = readonly [number, number];

export type AgentShape = 'squircle' | 'octagon' | 'diamond' | 'blob' | 'flower' | 'logo';
export type AgentColor =
  | 'sand' | 'amber' | 'orange' | 'pink' | 'coral' | 'red'
  | 'lavender' | 'sky' | 'violet' | 'lime' | 'teal' | 'mint';
export type AgentEyes = 'light' | 'dark';
export type AgentAvatar = { shape: AgentShape; color: AgentColor; eyes: AgentEyes; seed: number };
export type AgentState = 'idle' | 'working' | 'done' | 'spawn' | 'rest';

const BOX = 100;
const CENTER = BOX / 2;

const PALETTE: Record<AgentColor, string> = {
  sand: '#F3E5C3', amber: '#F5C242', orange: '#F08A24', pink: '#F2A0C4',
  coral: '#F07A55', red: '#C8382E', lavender: '#C4BFEF', sky: '#4EC0F0',
  violet: '#8E44AD', lime: '#CBD24A', teal: '#3E8F82', mint: '#5EB8A6',
};
const EYE_FILL: Record<AgentEyes, string> = { light: '#FFFFFF', dark: '#1B1B1F' };
const EYE = { width: 12, height: 17, rx: 4, y: 41, leftX: 31, rightX: 57 };

/** Wise — ogólny agent appto: sygnet w kolorze teal, białe oczy. */
export const WISE: AgentAvatar = { shape: 'logo', color: 'teal', eyes: 'light', seed: 7 };

/* ── geometria (packages/agent-avatar/src/geometry.ts) ─────────────── */

const fmt = (value: number) => Number(value.toFixed(2));
const fmtPoint = (p: Point) => `${fmt(p[0])} ${fmt(p[1])}`;

function cyclic(points: Point[]) {
  const count = points.length;
  return (index: number) => points[((index % count) + count) % count] as Point;
}

function towards(from: Point, to: Point, distance: number): Point {
  const dx = to[0] - from[0];
  const dy = to[1] - from[1];
  const length = Math.hypot(dx, dy) || 1;
  return [from[0] + (dx / length) * distance, from[1] + (dy / length) * distance];
}

function regularPolygon(sides: number, radius: number, rotationDeg = 0): Point[] {
  return Array.from({ length: sides }, (_, index) => {
    const angle = ((-90 + rotationDeg + (index * 360) / sides) * Math.PI) / 180;
    return [CENTER + radius * Math.cos(angle), CENTER + radius * Math.sin(angle)];
  });
}

function radialPolygon(radii: number[], rotationDeg = 0): Point[] {
  return radii.map((radius, index) => {
    const angle = ((-90 + rotationDeg + (index * 360) / radii.length) * Math.PI) / 180;
    return [CENTER + radius * Math.cos(angle), CENTER + radius * Math.sin(angle)];
  });
}

function roundedPolygonPath(points: Point[], corner: number): string {
  const at = cyclic(points);
  const start = (i: number) => towards(at(i), at(i - 1), corner);
  const end = (i: number) => towards(at(i), at(i + 1), corner);
  let path = `M ${fmtPoint(start(0))}`;
  for (let i = 0; i < points.length; i += 1) {
    path += ` Q ${fmtPoint(at(i))} ${fmtPoint(end(i))} L ${fmtPoint(start(i + 1))}`;
  }
  return `${path} Z`;
}

function smoothClosedPath(points: Point[], tension = 0.5): string {
  const at = cyclic(points);
  const path = [`M ${fmtPoint(at(0))}`];
  for (let i = 0; i < points.length; i += 1) {
    const p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2);
    const c1: Point = [p1[0] + ((p2[0] - p0[0]) * tension) / 3, p1[1] + ((p2[1] - p0[1]) * tension) / 3];
    const c2: Point = [p2[0] - ((p3[0] - p1[0]) * tension) / 3, p2[1] - ((p3[1] - p1[1]) * tension) / 3];
    path.push(`C ${fmtPoint(c1)} ${fmtPoint(c2)} ${fmtPoint(p2)}`);
  }
  return `${path.join(' ')} Z`;
}

/* ── kształty (packages/agent-avatar/src/shapes.ts) ────────────────── */

const LOGO_PATH =
  'M567 674L567 820L1 674L1 0L567 146L567 0L900 146L900 0L1064 147L1064 820L900 674L900 820L567 674Z';

const OUTLINES: Record<AgentShape, string> = {
  squircle: '<rect x="3" y="3" width="94" height="94" rx="27"/>',
  octagon: `<path d="${roundedPolygonPath(regularPolygon(8, 48, 22.5), 9)}"/>`,
  diamond: `<path d="${roundedPolygonPath(regularPolygon(4, 49, 0), 11)}"/>`,
  blob: `<path d="${smoothClosedPath(radialPolygon([47, 41, 46, 40, 47, 42], 12))}"/>`,
  flower: [
    `<circle cx="${CENTER}" cy="${CENTER}" r="35"/>`,
    ...regularPolygon(8, 31, 0).map(([cx, cy]) => `<circle cx="${fmt(cx)}" cy="${fmt(cy)}" r="17"/>`),
  ].join(''),
  logo: `<path d="${LOGO_PATH}" transform="translate(4 14.5) scale(0.0865)"/>`,
};

/* ── ścinki światła z seeda (packages/agent-avatar/src/facets.ts) ──── */

function seededRandom(seed: number) {
  let state = seed | 0;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let value = Math.imul(state ^ (state >>> 15), 1 | state);
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

const OVERSCAN = 12;
const LAYERS = [
  { fill: '#FFFFFF', opacity: 0.18 },
  { fill: '#FFFFFF', opacity: 0.11 },
  { fill: '#000000', opacity: 0.1 },
];

function facets(seed: number) {
  const random = seededRandom(seed);
  const edgePoint = (side: number): Point => {
    const along = random() * (BOX + OVERSCAN * 2) - OVERSCAN;
    switch (side % 4) {
      case 0: return [along, -OVERSCAN];
      case 1: return [BOX + OVERSCAN, along];
      case 2: return [along, BOX + OVERSCAN];
      default: return [-OVERSCAN, along];
    }
  };
  return LAYERS.map((layer) => {
    const first = Math.floor(random() * 4);
    const second = first + 1 + Math.floor(random() * 2);
    const corners = [edgePoint(first), edgePoint(first), edgePoint(second), edgePoint(second)];
    return `<polygon points="${corners.map(([x, y]) => `${fmt(x)},${fmt(y)}`).join(' ')}" fill="${layer.fill}" fill-opacity="${layer.opacity}"/>`;
  }).join('');
}

/* ── dodatki stanów (packages/ui/.../appto-agent/extras.tsx) ───────── */

const STAR = 'M0,-6 L1.6,-1.6 L6,0 L1.6,1.6 L0,6 L-1.6,1.6 L-6,0 L-1.6,-1.6 Z';
const SPARKS = [
  { x: 10, y: 14, delay: 0 },
  { x: 92, y: 10, delay: 0.18 },
  { x: 6, y: 78, delay: 0.32 },
  { x: 94, y: 86, delay: 0.1 },
];

let uid = 0;

export function agentFaceSvg(
  avatar: AgentAvatar,
  { size = 32, state = 'rest', id, className = '' }: { size?: number; state?: AgentState; id?: string; className?: string } = {},
): string {
  uid += 1;
  const clip = `agf-c${uid}`;
  const floor = `agf-f${uid}`;
  const eye = EYE_FILL[avatar.eyes];
  const eyes = [['l', EYE.leftX], ['r', EYE.rightX]]
    .map(([side, x]) => `<rect class="agf-e agf-e--${side}" x="${x}" y="${EYE.y}" width="${EYE.width}" height="${EYE.height}" rx="${EYE.rx}" fill="${eye}"/>`)
    .join('');
  const sparks = SPARKS
    .map((s) => `<g transform="translate(${s.x} ${s.y})"><path class="agf-st" d="${STAR}" fill="${eye}" style="animation-delay:${s.delay}s"/></g>`)
    .join('');
  const body =
    `<g class="agf-b">` +
    `<g clip-path="url(#${clip})"><rect width="${BOX}" height="${BOX}" fill="${PALETTE[avatar.color]}"/>${facets(avatar.seed)}` +
    `<polygon class="agf-sweep" points="-30,0 -10,0 30,${BOX} 10,${BOX}" fill="${eye}" fill-opacity="0.22"/></g>` +
    `<g class="agf-eyes">${eyes}</g><g class="agf-sparks">${sparks}</g></g>`;
  // Wyłanianie się (spawn): agent wspina się z dziury, której krawędź tnie go
  // poniżej y = 97. Podłoga tylko w tym stanie — inaczej podskok po skończeniu
  // (skala 1,18) zostałby ucięty od dołu.
  const stage =
    state === 'spawn'
      ? `<ellipse class="agf-hole" cx="${CENTER}" cy="${BOX - 3}" rx="44" ry="6" fill="currentColor" fill-opacity="0.35"/><g clip-path="url(#${floor})">${body}</g>`
      : body;
  return (
    `<svg class="agf ${className}"${id ? ` id="${id}"` : ''} data-state="${state}" viewBox="0 0 ${BOX} ${BOX}" width="${size}" height="${size}" overflow="visible" aria-hidden="true">` +
    `<defs><clipPath id="${clip}">${OUTLINES[avatar.shape]}</clipPath>` +
    (state === 'spawn' ? `<clipPath id="${floor}"><rect x="-40" y="-80" width="${BOX + 80}" height="${BOX - 3 + 80}"/></clipPath>` : '') +
    `</defs>${stage}</svg>`
  );
}
