// OKNA PULPITU macOS z reklamy Stories pk3 (~/filmy/appto-stories/build_pk3.py):
// Podgląd, Finder, TextEdit, Chrome, Numbers, Kalendarz. Znaczniki jako tekst
// dla hero (PulpitMontaz); style okien (klasy pm-*) są w PulpitMontaz.astro.
export const TL = '<span class="pm-tl"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i></span>';
const FOLDER = '<svg viewBox="0 0 24 20" class="pm-ic"><path d="M1 3.5C1 2.4 1.9 1.5 3 1.5h6l2 2.5h10c1.1 0 2 .9 2 2V17c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2z" fill="#6aa9e9"/><path d="M1 7h22v10c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2z" fill="#86bdf3"/></svg>';
const DOC = '<svg viewBox="0 0 20 24" class="pm-ic"><path d="M2 1h11l5 5v17H2z" fill="#fff" stroke="#a2a2aa" stroke-width="1.4"/><path d="M13 1v5h5" fill="none" stroke="#a2a2aa" stroke-width="1.4"/></svg>';
const XLS = '<svg viewBox="0 0 20 24" class="pm-ic"><path d="M2 1h11l5 5v17H2z" fill="#fff" stroke="#a2a2aa" stroke-width="1.4"/><rect x="5" y="10" width="10" height="9" rx="1" fill="#1f9d55"/></svg>';
const BIGDOC = '<svg viewBox="0 0 64 80" class="pm-bigdoc"><path d="M4 2h38l18 18v58H4z" fill="#fff" stroke="#b9b9c0" stroke-width="2"/><path d="M42 2v18h18" fill="#f1f1f3" stroke="#b9b9c0" stroke-width="2"/><text x="32" y="60" text-anchor="middle" font-family="InterApp,sans-serif" font-weight="700" font-size="13" fill="#8a8a92">MD</text></svg>';
// Okładka instrukcji: lista kroków z polami do odhaczenia (v3: bez motywu montażu).
const LISTA = '<svg viewBox="0 0 200 150" class="pm-box">' + [0, 1, 2, 3].map((i) => `<rect x="6" y="${8 + i * 36}" width="22" height="22" rx="4" fill="#fff" stroke="#0a0a0b" stroke-width="5"/><path d="M44 ${19 + i * 36}H${i % 2 ? 150 : 190}" stroke="#0a0a0b" stroke-width="6" stroke-linecap="round"/>`).join('') + '<path d="M11 19l5 5 9-10" fill="none" stroke="#0a0a0b" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const win = (kind: string, title: string, body: string) => kind === 'chr'
  ? `<div class="pm-mw ${kind}">${body}</div>`
  : `<div class="pm-mw ${kind}"><div class="pm-tbar">${TL}<span class="pm-tt">${title}</span></div>${body}</div>`;
const SIDEBAR = '<div class="pm-sb"><div class="pm-sbh">Ulubione</div>' + ['AirDrop', 'Ostatnie', 'Aplikacje', 'Biurko', 'Dokumenty', 'Pobrane'].map((n) => `<div class="pm-sbi${n === 'Dokumenty' ? ' on' : ''}">${n}</div>`).join('') + '<div class="pm-sbh">iCloud</div><div class="pm-sbi">iCloud Drive</div></div>';
const finder = (rows: string[][]) => `<div class="pm-fd">${SIDEBAR}<div class="pm-fl"><div class="pm-lh"><span>Nazwa</span><span>Data modyfikacji</span><span>Rozmiar</span></div>` +
  rows.map(([ic, n, d, s], i) => `<div class="pm-lr${i % 2 ? ' z' : ''}"><span>${ic}${n}</span><span>${d}</span><span>${s}</span></div>`).join('') + '</div></div>';
const chrome = (tab: string, url: string, body: string) => `<div class="pm-cbar">${TL}<span class="pm-ctab">${tab}</span><span class="pm-ctab2">+</span></div><div class="pm-curl"><span class="pm-nav">‹ ›</span><span class="pm-addr">${url}</span></div><div class="pm-cpg">${body}</div>`;
const preview = (title: string, page: string, pg: string) => win('pv', title, `<div class="pm-pvtool"><span>${pg}</span></div><div class="pm-pvbg"><div class="pm-page">${page}</div></div>`);

export const W: Record<string, string> = {
  p0: preview('Instrukcja wdrożenia AI.pdf', `${LISTA}<h3>Instrukcja<br>wdrożenia AI</h3><p>64 kroki · wersja 7</p>`, 'Strona 1 z 64'),
  w1: win('fn', 'Kontekst firmy', finder([
    [FOLDER, 'Cenniki 2026', 'dziś, 9:02', '—'], [FOLDER, 'Umowy ramowe', 'wczoraj, 16:40', '—'],
    [FOLDER, 'Procedury obsługi', '12 lis 2026', '—'], [XLS, 'cennik_FINAL_v7.xlsx', '12 lis 2026', '88 KB'],
    [DOC, 'rabaty_stare_NIE_UZYWAC.docx', '3 mar 2025', '41 KB'], [DOC, 'notatki_ze_spotkan.txt', '2 lis 2026', '6 KB']])),
  w2: win('te', 'instrukcje.txt', '<div class="pm-txt">Jesteś asystentem działu sprzedaży.<br>Zawsze licz rabat z cennika 2026.<br>———————————————<br>Gdy klient pyta o zwrot, sprawdź umowę ramową.<br>Nie obiecuj terminów, jeśli magazyn…<br>———————————————<br>Odpowiadaj krótko, w tonie firmy.<br>Jeśli nie wiesz, zapytaj…</div>'),
  w3: win('fn', 'skille', '<div class="pm-grid">' + ['skill-oferty.md', 'skill-rabaty.md', 'skill-reklamacje.md', 'skill-umowy.md', 'skill-zwroty.md', 'skill-maile.md'].map((n) => `<div class="pm-gi">${BIGDOC}<span>${n}</span></div>`).join('') + '</div>'),
  w4: win('chr', '', chrome('Integracje', 'ustawienia / integracje', [
    ['brand-gmail.svg', 'Gmail', 'Błąd autoryzacji', 'er'], ['kit/brand-hubspot.svg', 'HubSpot', 'Brak klucza API', 'er'],
    ['brand-googledrive.svg', 'Dysk Google', 'Nie połączono', 'mu']].map(([f, n, s, c]) => `<div class="pm-ir"><img src="/pod-klucz/${f}" alt=""><b>${n}</b><span class="${c}">${s}</span></div>`).join(''))),
  w5: win('nm', 'testy.numbers', '<table class="pm-sh"><tr><th></th><th>Przypadek</th><th>Wynik</th></tr>' + [
    ['Oferta na 40 szt. Ergo Pro', 'zła cena', 'bad'], ['Rabat dla dystrybutora', '12% zamiast 4%', 'bad'],
    ['Zwrot po 34 dniach', 'OK', 'ok'], ['Termin dostawy', 'zmyślony', 'bad'], ['Reklamacja Lift 140', 'brak umowy', 'bad']]
    .map(([n, r, c], i) => `<tr><td class="rn">${i + 1}</td><td>${n}</td><td class="${c}">${r}</td></tr>`).join('') + '</table><div class="pm-sum">Zaliczone: 6 z 20</div>'),
  w6: win('cal', 'Kalendarz', '<div class="pm-wk"><div class="pm-dh"><span>Pon 23</span><span>Wt 24</span><span>Śr 25</span></div><div class="pm-dc">' + [
    [[10, 120, 'Szkolenie z promptów', 'Sprzedaż · 9:00–12:00']],
    [[10, 120, 'Szkolenie z promptów', 'Obsługa · 9:00–12:00'], [140, 60, 'Poprawki agenta', '13:00']],
    [[10, 120, 'Szkolenie z promptów', 'Magazyn · 9:00–12:00']]]
    .map((evs) => '<div class="pm-col">' + evs.map(([t, h, a, b]) => `<div class="pm-evt" style="top:${t}px;height:${h}px"><b>${a}</b>${b}</div>`).join('') + '</div>').join('') + '</div></div>'),
  w7: win('chr', '', chrome('Uprawnienia agentów', 'ustawienia / uprawnienia', '<table class="pm-pm"><tr><th></th><th>Cenniki</th><th>Umowy</th><th>Maile</th></tr>' + [
    ['Sprzedaż', '1?1'], ['Magazyn', '010'], ['Zarząd', '11?'], ['Księgowość', '?0?']]
    .map(([r, v]) => `<tr><td>${r}</td>` + v.split('').map((c) => ({ '1': '<td><span class="pm-dot on"></span></td>', '0': '<td><span class="pm-dot"></span></td>', '?': '<td class="q">?</td>' } as Record<string, string>)[c]).join('') + '</tr>').join('') + '</table>')),
  w8: win('te', 'instrukcje_v7_FINAL.txt', '<div class="pm-txt"><s>Zawsze licz rabat z cennika 2026.</s><br>Licz rabat z cennika, chyba że klient ma umowę…<br><s>Nie obiecuj terminów.</s><br>Obiecuj termin tylko, gdy magazyn potwierdzi…<br><s>Odpowiadaj krótko.</s><br>Odpowiadaj krótko, ale…</div>'),
  // Strona instrukcji z krokiem 9, który czeka na wcześniejsze (v3: zamiast „Brakuje części C”).
  w9: preview('Instrukcja wdrożenia AI.pdf', '<div class="pm-krok"><small>Krok 9 z 64</small><b>Zbuduj agenta ofert</b><span>Zanim zaczniesz, dokończ kroki 2, 4 i 5.</span><i></i><i></i><i class="kr"></i></div>', 'Strona 18 z 64'),
};

