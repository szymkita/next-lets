// Dane wspólne dla wariantów stopki do porównania (15.10.2026): A, C, combo E
// i G (E z krótszą listą linków). B, D i F odrzucone i usunięte.
// Strona porównawcza: /stopka-v2. Od 16.10.2026 wariant G jest żywą stopką
// (Stopka.astro renderuje StopkaG pod pasem grupy) — tych plików nie usuwać.
//
// UKŁAD TREŚCI — wspólny dla wszystkich wariantów
// Stara stopka miała sześć kolumn, z czego „Budujecie sami" mieszała guided
// coding z bazą wiedzy, inspiracjami i „Dlaczego my". Tu treść dzieli się tak:
// - usługi według tych samych trzech dróg co w megamenu, bez opisów;
//   „Systemy dla klientów" (nie ma jej w menu) trafia do „Budujemy za Was",
// - produkty bez „Wszystkie produkty" i „appto.ai ↗" — oba prowadziły tam,
//   gdzie prowadzą już Appto i Wingman,
// - firma i wiedza w osobnej grupie, razem z WiseStackiem, którego stopka
//   wcześniej nie miała,
// - obszary zostają w komplecie: stopka jest ich jedynym wewnętrznym wejściem,
// - mail i telefon wracają do stopki — wcześniej był tylko adres.
import fs from 'node:fs';
import path from 'node:path';

export const DROGI = [
  {
    pas: 'Wdrażamy AI',
    sub: 'Gdy firma zaczyna pracować z AI',
    poz: [
      { t: 'Strategia AI', h: '/strategia-ai' },
      { t: 'Narzędzia AI dla całej firmy', h: '/wdrozenie-ai' },
      { t: 'Szkolenia z AI', h: '/szkolenia-ai' },
    ],
  },
  {
    pas: 'Budujemy za Was',
    sub: 'Gdy gotowe programy nie pasują',
    poz: [
      { t: 'Systemy dopasowane do firmy', h: '/systemy-procesowe' },
      { t: 'Automatyzacja procesów z AI', h: '/rozwiazania-ai' },
      { t: 'Integracje systemów', h: '/automatyzacje-integracje' },
      { t: 'Systemy dla klientów', h: '/systemy-dla-klientow' },
    ],
  },
  {
    pas: 'Budujecie sami z AI',
    sub: 'Gdy Wasz zespół tworzy własne aplikacje',
    poz: [
      { t: 'Guided coding', h: '/guided-coding' },
      { t: 'Audyt aplikacji', h: '/guided-coding/audyt-aplikacji' },
      { t: 'Bieżące wsparcie', h: '/guided-coding/biezace-wsparcie' },
      { t: 'Warsztaty dla zespołu', h: '/guided-coding/transfer-know-how' },
    ],
  },
];

export const PRODUKTY = [
  { t: 'Appto', d: 'Agenci AI dla całej firmy', h: '/produkty/appto' },
  { t: 'Wingman', d: 'Podpowiedzi i notatki w trakcie rozmowy', h: '/produkty#wingman' },
];

export const FIRMA = [
  { t: 'Dlaczego my', h: '/dlaczego-my' },
  { t: 'Inspiracje', h: '/inspiracje' },
  { t: 'WiseStack', h: '/wisestack' },
  { t: 'Baza wiedzy', h: '/blog' },
];

export const OBSZARY = [
  { t: 'Sprzedaż i marketing', h: '/automatyzacja-w-sprzedazy-i-marketingu' },
  { t: 'Obsługa klienta', h: '/automatyzacja-w-obsludze-klienta' },
  { t: 'Administracja i dokumenty', h: '/automatyzacja-w-administracji' },
  { t: 'Rekrutacja i HR', h: '/automatyzacja-w-rekrutacji-oraz-hr' },
  { t: 'Dashboardy i dane', h: '/automatyzacja-w-dashboardach-i-danych' },
  { t: 'Nietypowe procesy i AI', h: '/automatyzacja-oraz-ai-w-nietypowych-procesach' },
];

// Pozostałe marki grupy (bez nas — stoimy na własnej stronie).
export const GRUPA = [
  { nazwa: 'SellWise', url: 'https://www.sellwise.pl', logo: '/uploads/wisegroup/wg-sellwise.svg' },
  { nazwa: 'AdWise', url: 'https://adwise.pl', logo: '/uploads/wisegroup/wg-adwise.svg' },
  { nazwa: 'HireWise', url: 'https://hirewise.pl', logo: '/uploads/wisegroup/wg-hirewise.svg' },
  { nazwa: 'Finerto', url: 'https://finerto.pl', logo: '/uploads/wisegroup/wg-finerto.svg' },
  { nazwa: 'IRSM', url: 'https://irsm.pl', logo: '/uploads/wisegroup/wg-irsm.svg' },
];

export const KONTAKT = {
  email: 'hello@letsautomate.pl',
  tel: '+48 571 399 932',
  telHref: 'tel:+48571399932',
  linkedin: 'https://www.linkedin.com/company/letsautomate-io',
};

export const SPOLKA = {
  nazwa: "Let's automate sp. z o.o.",
  ulica: 'ul. Nowy Świat 33/13',
  miasto: '00-029 Warszawa',
  nip: '5252908405',
  krs: '0000972542',
};

// Logo wstawiane w treść, nie jako <img>: na ciemnym tle napis ma być biały,
// a sygnet zostać zielony. Filtr na <img> (jak w starej stopce) wybielał
// oba. Plik czytamy przy budowaniu, więc źródłem nadal jest logo-2.svg.
const LOGO = fs.readFileSync(path.join(process.cwd(), 'public/uploads/logo-2.svg'), 'utf8');
export function logo(napis: string, id: string) {
  return LOGO.replaceAll('#0A0A0A', napis)
    .replaceAll('clip0_4016_1321', `clip-${id}`)
    .replace('<svg ', '<svg aria-hidden="true" focusable="false" ');
}

// Sygnet (sam znak „K") — do wariantu z neonem.
export const SYGNET =
  'M31.1674 0.5V17.4327C29.7901 11.2307 26.1381 0.5 26.1381 0.5H17.1107C18.599 6.44658 20.7794 12.7694 21.6328 16.7405H21.6193C20.7291 14.2443 18.7435 10.4076 14.2919 4.60213C13.1564 3.12389 12.0275 1.72963 11.0029 0.5H0C6.53453 7.53847 13.5092 17.1168 13.5092 20.5C13.5092 23.8832 6.53453 33.4614 0 40.5H11.0029C12.0309 39.2705 13.1597 37.8762 14.2919 36.3979C18.636 30.7301 20.635 26.9405 21.5522 24.4409C20.6484 28.4254 18.4176 34.6543 16.8822 40.5H25.9298C25.9298 40.5 29.6389 30.4245 31.1035 24.3636L30.8349 40.5H39.6641L39.9966 20.5538V0.5H31.1674Z';

export const IKONA_LINKEDIN =
  'M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-4.86c0-1.16-.02-2.65-1.77-2.65-1.77 0-2.04 1.26-2.04 2.57V21H9z';
