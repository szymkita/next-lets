// KOLEKCJA ARTYKUŁÓW — /baza-wiedzy
//
// Artykuły są markdownem w `src/content/artykuly/*.md`. Nazwa pliku jest
// adresem: `koszt-status-quo.md` → `/baza-wiedzy/koszt-status-quo`.
//
// MIGRACJA (08.09.2026)
// Czterdzieści dziewięć wpisów przeniesionych z bloga na letsautomate.pl
// (Webflow, adresy `/post/<slug>`). Slugi zostały bez zmian, więc stare
// adresy przekierowują się jeden do jednego — patrz `vercel.json`.
// Szczegóły migracji: docs/baza-wiedzy-koncepcja.md.
//
// Czego tu celowo NIE MA:
// · pola `czasCzytania` — liczy się z długości tekstu w [slug].astro,
//   więc nie da się go zapomnieć zaktualizować po dopisaniu akapitu
// · osobnej kolekcji na filmy — te siedzą w `src/data/filmy.js`, bo nie mają
//   treści do renderowania, tylko metadane i identyfikator YouTube
import { defineCollection, z } from 'astro:content';

// Taksonomia przeniesiona ze starego bloga — te siedem kategorii redakcja
// stosowała realnie na 49 wpisach, więc nie wymyślam nowej. Klucz jest
// w adresie filtra, `nazwa` na stronie.
export const KATEGORIE = {
  podstawy: { nazwa: 'Podstawy', opis: 'Czym jest automatyzacja i kiedy się opłaca' },
  firma: { nazwa: 'Firma', opis: 'Koszty, zespół, bezpieczeństwo, umowy' },
  poradniki: { nazwa: 'Poradniki', opis: 'Krok po kroku, od wyboru procesu do wdrożenia' },
  sprzedaz: { nazwa: 'Sprzedaż', opis: 'CRM, lejek, ofertowanie' },
  marketing: { nazwa: 'Marketing', opis: 'Kampanie, treści, lead nurturing' },
  'obsluga-klienta': { nazwa: 'Obsługa klienta', opis: 'Zgłoszenia, onboarding, samoobsługa' },
  narzedzia: { nazwa: 'Narzędzia', opis: 'Czym budować i co wybrać' },
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
    // Jeden artykuł stoi na górze /baza-wiedzy w dużym stopniu pisma.
    // Kiedy `wyrozniony` nie stoi przy żadnym, bierze się najnowszy.
    wyrozniony: z.boolean().default(false),
    // Szkic zostaje poza listą i poza sitemapą, ale renderuje się pod adresem.
    szkic: z.boolean().default(false),
    // Powiązane usługi — wiersz linków pod tekstem. Ścieżki bezwzględne.
    powiazane: z.array(z.object({ t: z.string(), h: z.string() })).default([]),
  }),
});

export const collections = { artykuly };
