// Rzeczy wspólne dla /blog, /blog-categories/<adres> i /post/<slug>.
//
// Adresy są ze starego bloga na Webflow i mają takie zostać — patrz
// komentarz na górze src/content/config.ts. Wszystkie linki do artykułów
// i kategorii budujemy przez te dwie funkcje, żeby nigdzie nie został
// wpisany ręcznie inny wzór adresu.
import { KATEGORIE } from '../../content/config';

export const adresArtykulu = (slug) => `/post/${slug}`;
export const adresKategorii = (klucz) => `/blog-categories/${KATEGORIE[klucz].adres}`;

// Czas czytania liczy się z tekstu, nie z pola we froncie — inaczej po
// dopisaniu dwóch akapitów zostawałby nieaktualny. 180 słów na minutę to
// tempo czytania tekstu fachowego po polsku, zaokrąglone w dół dla ostrożności.
export const czasCzytania = (tresc) => Math.max(3, Math.round(tresc.trim().split(/\s+/).length / 180));

// Polszczyzna ma trzy formy przy liczebniku (1 artykuł / 3 artykuły /
// 6 artykułów), a liczniki zmieniają się z każdym nowym tekstem.
export const odmiana = (n, [jeden, kilka, wiele]) => {
  const d = n % 10, s = n % 100;
  if (n === 1) return jeden;
  if (d >= 2 && d <= 4 && (s < 10 || s >= 20)) return kilka;
  return wiele;
};

export const najnowszePierwsze = (a, b) => b.data.data - a.data.data;
