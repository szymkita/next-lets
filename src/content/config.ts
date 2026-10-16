// KOLEKCJA ARTYKUŁÓW — /blog
//
// Artykuły są markdownem w `src/content/artykuly/*.md`. Nazwa pliku jest
// adresem: `czy-automatyzacja-sie-oplaca.md` → `/post/czy-automatyzacja-sie-oplaca`.
//
// ADRESY SĄ ZE STAREGO BLOGA (15.10.2026)
// Czterdzieści dziewięć wpisów przeniesionych z letsautomate.pl (Webflow)
// stoi pod tymi samymi adresami co tam: `/post/<slug>`, lista pod `/blog`,
// kategorie pod `/blog-categories/<adres>`. Nie przekierowujemy, tylko
// odpowiadamy tą samą treścią pod tym samym adresem — tak ruch z wyszukiwarki
// nie musi przechodzić przez 301. Szczegóły: docs/baza-wiedzy-koncepcja.md.
//
// Czego tu celowo NIE MA:
// · pola `czasCzytania` — liczy się z długości tekstu,
//   więc nie da się go zapomnieć zaktualizować po dopisaniu akapitu
// · osobnej kolekcji na filmy — te siedzą w `src/data/filmy.js`, bo nie mają
//   treści do renderowania, tylko metadane i identyfikator YouTube
import { defineCollection, z } from 'astro:content';

// Taksonomia przeniesiona ze starego bloga — te siedem kategorii redakcja
// stosowała realnie na 49 wpisach, więc nie wymyślam nowej. Klucz siedzi we
// froncie artykułu, `nazwa` na stronie, a `adres` w `/blog-categories/<adres>`.
// Adres jest skopiowany ze starego serwisu razem z wpadką Webflow
// (`podstawy-copy`), bo to pod nim Google zna tę kategorię.
export const KATEGORIE = {
  podstawy: { nazwa: 'Podstawy', adres: 'podstawy-copy', opis: 'Czym jest automatyzacja i kiedy się opłaca' },
  firma: { nazwa: 'Firma', adres: 'firma', opis: 'Koszty, zespół, bezpieczeństwo, umowy' },
  poradniki: { nazwa: 'Poradniki', adres: 'poradniki', opis: 'Krok po kroku, od wyboru procesu do wdrożenia' },
  sprzedaz: { nazwa: 'Sprzedaż', adres: 'sprzedaz', opis: 'CRM, lejek, ofertowanie' },
  marketing: { nazwa: 'Marketing', adres: 'marketing', opis: 'Kampanie, treści, lead nurturing' },
  'obsluga-klienta': { nazwa: 'Obsługa klienta', adres: 'obsluga-klienta', opis: 'Zgłoszenia, onboarding, samoobsługa' },
  narzedzia: { nazwa: 'Narzędzia', adres: 'narzedzia', opis: 'Czym budować i co wybrać' },
};

const artykuly = defineCollection({
  type: 'content',
  schema: z.object({
    tytul: z.string(),
    // Zdanie spod tytułu. Idzie też do <meta name="description"> i na listę,
    // więc musi się bronić bez reszty tekstu. Przy wpisach przeniesionych
    // z Webflow to oryginalny opis meta ze starej strony.
    lead: z.string(),
    data: z.date(),
    kategoria: z.enum(['podstawy', 'firma', 'poradniki', 'sprzedaz', 'marketing', 'obsluga-klienta', 'narzedzia']),
    autor: z.string().default('Szymon Kita'),
    // Obraz otwierający — wpisy przeniesione z bloga mają swój z Webflow,
    // teksty pisane u nas nie mają żadnego i to jest w porządku.
    obraz: z.string().optional(),
    obrazAlt: z.string().optional(),
    // Jeden artykuł stoi na górze /blog w dużym stopniu pisma.
    // Kiedy `wyrozniony` nie stoi przy żadnym, bierze się najnowszy.
    wyrozniony: z.boolean().default(false),
    // Szkic zostaje poza listą i poza sitemapą, ale renderuje się pod adresem.
    szkic: z.boolean().default(false),
    // Powiązane usługi — wiersz linków pod tekstem. Ścieżki bezwzględne.
    powiazane: z.array(z.object({ t: z.string(), h: z.string() })).default([]),
  }),
});

// Strony przeniesione 1:1 ze starego serwisu (Webflow) pod te same adresy —
// treść czeka tu na zastąpienie nową stroną. Pliki generuje
// docs/_migracja/strony-webflow.py; renderuje je src/pages/[...stara].astro.
// Lista adresów i decyzji: docs/stare-adresy.md.
const stareStrony = defineCollection({
  type: 'data',
  schema: z.object({
    adres: z.string(),
    tytul: z.string(),
    opis: z.string(),
    zrodlo: z.string(),
    // Sekcje starej strony w kolejności; bloki: h, p, lista, img, cta, grupa
    // (karty, kroki, zakładki, faq). Opis formatu w skrypcie konwersji.
    sekcje: z.array(z.object({ klasa: z.string(), formularz: z.boolean(), bloki: z.array(z.any()) })),
  }),
});

export const collections = { artykuly, 'stare-strony': stareStrony };
