// Generator scen w narzędziach klienta (Gmail, Slack, Arkusze, HubSpot) dla landingu
// „Wdrożenie AI pod klucz”. Bierze CSS i buildery z kitu web apps
// (~/.claude/skills/appto-feature-film/kit/v2/webapps/compositions/wa-demo.html),
// uruchamia je w Node i zapisuje gotowy HTML do src/components/pod-klucz/narzedzia.ts
// oraz CSS do NarzedziaStyl.astro. Dane: świat Wolsenty z filmu.
import fs from 'node:fs';
import vm from 'node:vm';

const KIT = '/Users/szymonkita/.claude/skills/appto-feature-film/kit/v2/webapps/compositions/wa-demo.html';
const OUT = '/Users/szymonkita/next-lets-pod-klucz/src/components/pod-klucz/';
const src = fs.readFileSync(KIT, 'utf8');

// ---- CSS: wszystkie sekcje WA poza fontami, pulpitem i Chrome (okno daje Przegladarka.astro)
let css = src.slice(src.indexOf('<style>') + 7, src.indexOf('</style>'));
css = css.replace(/\/\* ==WA:FONTS:CSS==[\s\S]*?==\/WA:FONTS:CSS== \*\//, '');
css = css.replace(/\/\* ==WA:DESK:CSS==[\s\S]*?==\/WA:DESK:CSS== \*\//, '');
css = css.replace(/\[data-composition-id="wa-demo"\][^\n]*\n/g, '');
css = css.replace(/"Geist"/g, '"GeistApp"').replace(/"Inter"/g, '"InterApp"');
css = css.replace(/url\("assets\//g, 'url("/pod-klucz/kit/');

// ---- JS: wszystko przed DEMO:JS, z eksportem builderów
let js = src.slice(src.indexOf('(function () {', src.indexOf('<script')) + '(function () {'.length, src.indexOf('/* ==WA:DEMO:JS=='));
js = 'var LANG = "pl";\n' + js + '\nreturn { GMAIL, GNAV, GLIST, GDRAFTS, GMSG, GDRAFT, SHEET, SCELL, CAL, CEV, SLACK, SMSG, SAV, SAPPAV, SNAME, SDIV, STHR, STRC, HUBSPOT, HSREC, hsNav, hsTop, hsActs, hsProps, hsMid, hsCard, hsAssoc, hsTask, hsSelect, hsMenu, hi, gi, gav, U, FAV };';
const stubTl = new Proxy({}, { get: () => () => stubTl });
const ctx = { document: { querySelector: () => ({ querySelector: () => null, querySelectorAll: () => [] }) }, gsap: { timeline: () => stubTl, set() {}, to() {} }, console };
const K = vm.runInNewContext('(function(){' + js + '})()', ctx);
const A = (s) => s.replace(/(src|href)="assets\/brand-gmail\.svg"/g, '$1="/pod-klucz/brand-gmail.svg"').replace(/(src|href)="assets\//g, '$1="/pod-klucz/kit/');
const n = (html, id, k) => html.replace(`id="${id}"`, `id="${id}" data-n="${k}"`);

const ME_M = ['MZ', '#00A36C'];
const LAB = [['Klienci', '#16A765', '#E3F4EA', '#0F5F37'], ['Dostawcy', '#F2A600', '#FEF1D0', '#7A5300'], ['Zaksięgowane', '#4A86E8', '#E3ECFC', '#1A4E9C']];
const G = K.U.gm;
const cfg = (me, extra) => Object.assign({ me, org: 'Wolsenta', inboxN: '3', draftsN: '1', labels: LAB, range: '1–50 z 1 184', one: '1 z 1 184', drange: '1–1 z 1' }, extra || {});

// ---------- 1. Reklamacja: szkic odpowiedzi w Gmailu (Ania) ----------
function reklamacja(pref, me) {
  const d = {
    subj: 'Reklamacja – jednostka 14, biurowiec C', chips: ['Odebrane', 'Klienci'],
    orig: ['Joanna Krawiec', 'JK', '#8E3A59', 'Dzień dobry, jednostka 14 w biurowcu C znowu nie chłodzi. To drugie zgłoszenie w tym miesiącu. Proszę o pilną wizytę…', '9:12'],
    to: 'Joanna Krawiec',
    body: [
      `<p id="${pref}-p1">Dzień dobry Pani Joanno,</p>`,
      `<p id="${pref}-p2">przepraszamy za kłopot z jednostką 14. Serwisant przyjedzie w czwartek o 8:00,<br>a wymiana sprężarki jest w ramach umowy serwisowej, bez dodatkowej opłaty.</p>`,
      `<p id="${pref}-p3">W załączniku protokół z ostatniego przeglądu tej jednostki.</p>`,
      `<p id="${pref}-p4" style="margin:0">Pozdrawiam serdecznie,</p>`,
      `<p class="sg" id="${pref}-p5" style="margin:4px 0 0">Ania Wysocka<br>Obsługa klienta · Wolsenta</p>`,
    ],
    att: ['Protokol_przegladu_jednostka14.pdf', '(186 KB)'],
  };
  let h = K.GMAIL(K.GNAV(`${pref}-nav`, 'in', G, cfg(me)), K.GDRAFT(`${pref}-v`, d, G, cfg(me)), G, cfg(me));
  for (let i = 1; i <= 5; i++) h = n(h, `${pref}-p${i}`, i);
  h = h.replace('<div class="wa-g-ach"', '<div class="wa-g-ach" data-n="6"');
  return A(h);
}

// ---------- 2. Pytania o zamówienia: odpowiedź w Slacku ze statusem z ERP ----------
function slack(pref, me, ch, msgs, pyta, odp) {
  const WISE = '/pod-klucz/kit/wise-avatar.svg';
  let m = K.SDIV(0, 'Dzisiaj');
  let top = 40;
  msgs.forEach((x) => { m += K.SMSG(null, top, K.SAV(x[0], x[1]), K.SNAME(x[2], x[3]), x[4]); top += 40 + 22 * x[4].length; });
  m += K.SMSG(`${pref}-ask`, top, K.SAV(pyta[0], pyta[1]), K.SNAME(pyta[2], pyta[3]), pyta[4]); top += 40 + 22 * pyta[4].length;
  m += K.SMSG(`${pref}-wise`, top, K.SAPPAV(WISE), K.SNAME('Wise', odp[0], K.U.sl.app), odp[1]);
  let h = K.SLACK({ ws: 'Wolsenta', ch, channels: ['ogólny', 'serwis', 'obsługa-klienta', 'sprzedaż', 'magazyn'], unread: [], dms: [['Kamil Nowak', 'KN', '#2F7BE8'], ['Marta Zielińska', 'MZ', '#00A36C'], ['Tomek Kowal', 'TK', '#E0922F']], app: { name: 'Wise', img: WISE }, members: '8', memAv: [['TK', '#E0922F'], ['AW', '#8B5CF6'], ['KN', '#2F7BE8']], me }, K.U.sl, m, null);
  h = n(h, `${pref}-ask`, 1);
  h = n(h, `${pref}-wise`, 2);
  return A(h);
}

// ---------- 3. Raport tygodniowy w Arkuszach ----------
function raport(pref, me) {
  const data = [
    ['Pozycja', 'Tydzień 47', 'Tydzień 46', 'Zmiana'],
    ['Przeglądy wykonane', '38 z 40', '35 z 40', '+3'],
    ['Zgłoszenia awarii', '12', '9', '+3'],
    ['Awarie zamknięte', '11', '9', '+2'],
    ['Średni czas reakcji', '6 h', '7 h', '−1 h'],
    ['Oferty wysłane', '9', '7', '+2'],
    ['Oferty przyjęte', '4', '3', '+1'],
    ['Faktury wystawione', '27', '24', '+3'],
  ];
  const W = [230, 130, 130, 110, 100, 100, 100, 100, 100, 100];
  let h = '<div class="wa-vp" style="background:#F9FBFD">' + K.SHEET(`${pref}-s`, 'Raport tygodniowy – tydzień 47', data, W, { right: [1, 2, 3], head: '#D9EAD3', tabs: ['Tydzień 47', 'Tydzień 46', 'Dane z ERP'], sels: [[1, 2]] }, K.U.sh, me[0]) + '</div>';
  // wiersze 2–8 wchodzą po kolei: komórki danych dostają data-n po numerze wiersza
  const S_CHH = 20, S_RH = 21;
  for (let r = 2; r <= 8; r++) {
    const top = S_CHH + (r - 1) * S_RH;
    h = h.replace(new RegExp(`(<div class="wa-gc[^"]*" style="left:\\d+px;top:${top}px;width:\\d+px;[^"]*">)(?=[^<])`, 'g'), (m0) => m0.replace('<div ', `<div data-n="${r - 1}" `));
  }
  return A(h);
}

// ---------- 4. Faktury kosztowe: etykiety w Gmailu ----------
function faktury(pref, me) {
  const rows = [
    [`${pref}-r1`, 1, 'Filtry-Serwis sp. z o.o.', 'Faktura FV/11/2026/0418', 'W załączniku faktura za filtry F7, 84 szt.', '8:41', 1, [1]],
    [`${pref}-r2`, 1, 'Orlen Paliwa', 'Faktura za paliwo – październik', 'Faktura zbiorcza za karty flotowe.', '8:20', 1, [1]],
    [`${pref}-r3`, 1, 'Chłodtech Hurt', 'FV 2026/11/7731', 'Sprężarka Danfoss, 1 szt. Termin płatności 14 dni.', '7:55', 1, [1]],
    [`${pref}-r4`, 0, 'Biuro rachunkowe', 'Zestawienie kosztów – listopad', 'Prosimy o komplet faktur do 5 grudnia.', 'wczoraj', 0, []],
    [`${pref}-r5`, 0, 'Netia', 'Faktura e-faktura 11/2026', 'Usługi telekomunikacyjne za listopad.', 'wczoraj', 1, [1]],
    [`${pref}-r6`, 0, 'Leasing Plus', 'Rata leasingowa – auto serwisowe', 'Harmonogram spłat w załączniku.', '17 lis', 1, [1]],
    [`${pref}-r7`, 0, 'Joanna Krawiec', 'Re: Oferta serwisowa 2027', 'Dziękuję, wracam z decyzją w piątek.', '17 lis', 0, [0]],
  ];
  let h = K.GMAIL(K.GNAV(`${pref}-nav`, 'in', G, cfg(me)), K.GLIST(`${pref}-v`, rows, G, cfg(me)), G, cfg(me));
  // etykieta „Zaksięgowane” wchodzi po kolei przy fakturach
  let k = 0;
  h = h.replace(/(<div class="wa-gr[^"]*" id="([^"]+)"[\s\S]*?<span class="wa-gr-tx">)/g, (m0, a, id) => {
    const row = rows.find((r) => 'wa-gr-' + r[0] === id);
    if (!row || row[7][0] !== 1) return m0;
    k += 1;
    return m0 + `<span class="wa-g-lc" data-n="${k}" style="background:${LAB[2][2]};color:${LAB[2][3]}">${LAB[2][0]}</span>`;
  });
  return A(h);
}

// ---------- 5. CRM po spotkaniu: rekord w HubSpocie ----------
function crm(pref, me) {
  const H = K.U.hs;
  const left = '<div class="wa-hs-bk">' + K.hi('chevl') + H.deals + '<span class="r">' + H.actions + K.hi('chev') + '</span></div>' +
    '<div class="wa-hs-id"><span class="ph sq">' + K.hi('deal') + '</span><b>Biurowce Prosta – serwis 2027</b><small style="top:28px">Kwota: 38 900 zł</small><small style="top:45px">Data zamknięcia: 15.12.2026</small></div>' +
    K.hsActs(H) + '<div class="wa-hs-sec" style="top:212px">' + K.hi('chev') + H.aboutD + '<span class="r">' + H.actions + '</span></div>' +
    K.hsProps(266, [['Właściciel transakcji', 'Marta Zielińska', 'ow'], ['Lejek', 'Lejek sprzedaży'], ['Etap transakcji', 'Kwalifikacja do zakupu'], ['Następny krok', 'Oferta do 25.11']], me);
  const note = ['note', 'Notatka', 'utworzona przez Appto', 'dziś o 11:02', ['<div>Spotkanie z działem administracji, 20 listopada</div>', '<div class="li">Dwa biurowce przy Prostej, 30 jednostek klimatyzacji</div>', '<div class="li">Budżet na 2027 zatwierdzony, decyzja w grudniu</div>', '<div class="li">Prośba: przegląd co kwartał i reakcja na awarię do 24 h</div>'], 'przed chwilą'];
  const task = ['Przygotować ofertę serwisową', 'Zadanie · Marta Zielińska', 'Termin: śr., 25 lis 2026'];
  const mid = K.hsMid(H, 1, '<div class="wa-hs-mh" style="top:0">' + H.upcoming + '</div>' + K.hsTask(`${pref}-t`, 30, task) + '<div class="wa-hs-mh" style="top:125px">Listopad 2026</div>' + K.hsCard(`${pref}-n`, 155, note, H));
  const right = K.hsAssoc(12, H.contacts, 1, H, '<div class="wa-hs-ac"><b>Paweł Lis</b>Kierownik administracji<br>p.lis@biurowce-prosta.example</div>') +
    K.hsAssoc(142, H.companies, 1, H, '<div class="wa-hs-ac"><b>Biurowce Prosta</b>2 budynki · 30 jednostek</div>');
  let h = K.HUBSPOT(H, 'Wolsenta', me, 1, K.HSREC(`${pref}-rec`, left, mid, right));
  h = n(h, `${pref}-n`, 1);
  h = n(h, `${pref}-t`, 2);
  return A(h);
}

const SCENY = {
  reklamacja: reklamacja('nzr', ['AW', '#8B5CF6']),
  zamowienia: slack('nzz', ['AW', '#8B5CF6'], 'obsługa-klienta', [
    ['KN', '#2F7BE8', 'Kamil Nowak', '8:05', ['Jadę na przegląd do Strelano, biurowiec B.']],
  ], ['AW', '#8B5CF6', 'Ania Wysocka', '9:14', ['<span class="wa-s-at">@Wise</span> klient z Grand Office pyta o zamówienie ZM/2026/3381. Co z nim?']],
  ['9:14', ['Zamówienie ZM/2026/3381 według ERP:', '• filtry F7, 24 szt. wyjechały wczoraj, dostawa jutro do 12:00,', '• numer przesyłki: 0098 4471 2210.', 'Odpisałem klientowi z tymi danymi.']]),
  raport: raport('nzs', ['MZ', '#00A36C']),
  faktury: faktury('nzf', ['EL', '#C2410C']),
  crm: crm('nzh', ME_M),
  tomek: slack('nzt', ['TK', '#E0922F'], 'serwis', [
    ['AW', '#8B5CF6', 'Ania Wysocka', '13:40', ['Strelano zgłasza: jednostka 7 w biurowcu B nie chłodzi, w serwerowni robi się ciepło.']],
  ], ['TK', '#E0922F', 'Tomek Kowal', '13:42', ['<span class="wa-s-at">@Wise</span> kto może dziś pojechać do Strelano, biurowiec B?']],
  ['13:42', ['Najbliżej jest Kamil Nowak, kończy przegląd na Mokotowie o 14:30.', '• dojazd do biurowca B: ok. 20 minut,', '• części do jednostki 7 ma w aucie (filtry, czujnik).', 'Wpisałem mu wizytę na 15:00 i dałem znać Joannie Krawiec.']]),
  ania: reklamacja('nza', ['AW', '#8B5CF6']),
};

const FAV = { gmail: A(K.FAV.gmail), sheets: K.FAV.sheets, slack: K.FAV.slack, hubspot: A(K.FAV.hubspot) };
fs.writeFileSync(OUT + 'narzedzia.ts', `// WYGENEROWANE skryptem scripts/pod-klucz-narzedzia.mjs z kitu web apps
// ~/.claude/skills/appto-feature-film/kit/v2/webapps (Gmail, Slack, Arkusze Google, HubSpot,
// wierne UI z filmów appto). Elementy z data-n wchodzą po kolei (klasy .f1…
// nadaje skrypt strony). Dane: świat Wolsenty z filmu, nazwy do potwierdzenia.
export const SCENY: Record<string, string> = ${JSON.stringify(SCENY, null, 1)};
export const FAV: Record<string, string> = ${JSON.stringify(FAV, null, 1)};
`);
fs.writeFileSync(OUT + 'NarzedziaStyl.astro', `---
// Style narzędzi klienta (Gmail, Slack, Arkusze, HubSpot) z kitu web apps filmów appto.
// WYGENEROWANE skryptem scripts/pod-klucz-narzedzia.mjs; kroje GeistApp/InterApp z KitStyl.astro.
---
<style is:global>
${css}
</style>
`);
console.log('ok', Object.keys(SCENY).map((k) => k + ':' + SCENY[k].length).join(' '), 'css', css.length);
