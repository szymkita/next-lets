# Oferty AI — koncepcja strony produktu

Strona: `src/pages/produkty/oferty.astro` (`/produkty/oferty`), `noindex`,
pierwsza wersja 15.10.2026. Analogiczna do `/produkty/wingman` (ten sam
standard, ta sama rama), osobny produkt — bez łączenia z Wingmanem.
Nie jest podpięta do menu ani sitemapy.

> **19.10.2026:** plik leży w `src/robocze/produkty/oferty.astro` (od 16.10,
> „na razie bez ofert”). Szymon kazał dodać System ofert do nowego huba
> (`src/robocze/produkty/index-new.astro`), więc przy publikacji huba ta
> strona musi wrócić do `src/pages/produkty/`. Poprawione pod zasady z 16.10:
> przycisk w nawigacji bez własnej kotwicy (prowadzi na `/darmowa-konsultacja`),
> Szymon w pasie podpisany „CEO Let’s automate”. Reszta bez zmian.
>
> **19.10.2026, później:** nazwa **„Oferty AI”** (Szymon: „nazwij to Oferty
> AI”) i nowa oferta przykładowa (Szymon: „tam ma być jakaś wystrzelona
> w kosmos pod kątem designu oferta”). Szczegóły w sekcji „Oferta w makiecie”
> niżej. Poprzednia wersja strony jest w historii gita.

---

## Skąd fakty

Wyłącznie z repo `~/oferty-aisales` (GitHub `szymkita/aisales-oferty`),
sprawdzone w kodzie i w lokalnie uruchomionej aplikacji (tryb plikowy, bez
bazy produkcyjnej):

- **skill `create-offer`** (Claude Code): oferta z transkrypcji rozmów albo
  z krótkiej notatki; przed pisaniem powrót do handlowca z „Co zrozumiałem /
  Co proponuję / O co pytam” (wszystkie pytania naraz, z propozycją
  odpowiedzi); bez publikacji przed odpowiedzią; liczby i cytaty tylko
  z materiału; całość w 2–3 minuty; publikacja jednym żądaniem;
- **schemat** (`src/schema`): sekcje, termin ważności w nagłówku, ton, dostęp
  po e-mailu albo haśle; zła treść wraca z nazwą pola, inne oferty działają;
- **moduły i biblioteka**: jedna cena w całym dokumencie; opinie i obiekcje
  wybierane po identyfikatorze, bez przepisywania;
- **u klienta**: pasek „Akceptuję ofertę” (z potwierdzeniem), „Chcę
  porozmawiać”, „Zapytaj AI o ofertę”; czat zadokowany, odpowiada z treści
  oferty; akceptacja i rozmowa → Make → Slack;
- **panel**: tablica (Szkic, Wysłana, Otwarta i Zaakceptowana same,
  Odrzucona), lista ze stanem i wykresem uwagi, mapa czytania (uwaga i zasięg
  na osobnych osiach), lejek sekcji, sesje ze skokiem do ceny, podsumowanie
  pytań do czatu (generowane na żądanie, z liczbą nowych pytań).

Nie ma w repo: nazwy produktu na zewnątrz, ceny, modelu sprzedaży. Funkcja
PDF ma zdarzenie w bazie, ale nie ma przycisku — strona o niej nie mówi.

## Oferta w makiecie (19.10.2026)

Dokument jest osobnym komponentem, `src/components/produkty/OfertaNordis.astro`,
i stoi na stronie trzy razy:

1. **hero** — okno przeglądarki z pętlą: nagłówek → „Co zrozumieliśmy” →
   plan (paski rosną) → cena (pasek budżetu się wypełnia) → czat → akceptacja
   z potwierdzeniem → powiadomienie u sprzedawcy;
2. **mapa czytania** — pomniejszone sekcje dokumentu w kolumnie „Dokument”
   obok uwagi i zasięgu (jak podgląd oferty w panelu, `heatmap-overlay.tsx`;
   bez koloru nałożonego na treść, bo panel z niego zrezygnował);
3. **„Z czego składa się oferta”** — te same sekcje jako warstwy w rzucie,
   rozsunięte przy wejściu w kadr; kolor krawędzi warstwy mówi, skąd sekcja
   się bierze (zieleń: pisze Claude, grafit: moduł, piasek: biblioteka).
   Na telefonie warstwy leżą płasko jedna pod drugą. Zastąpiło siedem
   kolorowych kafli.

Sprzedawca jest zmyślony: **Termaro**, firma od ogrzewania hal, znak
wschodzącego słońca, kolor pomarańczowy. Oferta wychodzi w barwach firmy,
która ją wysyła — schemat ma `accentColor`, logo firmy i zdjęcie autora —
więc makieta różni się kolorem od strony Let's automate celowo. Duże słońce
z falami ciepła w nagłówku to znak sprzedawcy w dużej skali.

Sekcje odpowiadają typom ze schematu: hero + highlights, situation z cytatem,
process/timeline (wykres terminów od zamówienia 25.09 do ciepła 1.11),
pricing (ciemna karta, pasek budżetu zarządu 180 tys. zł), faq i opinia
z biblioteki, next-steps. Ton „Państwo”, bo tak handlowiec odpowiedział
w koncepcji (zakładka „Koncepcja przed ofertą”). Teksty czatu, potwierdzenia
i podziękowania wzięte z `offer-actions.tsx` („Asystent oferty”, „Odpowiada
wyłącznie z treści tego dokumentu”, „Uwagi (opcjonalnie)”).

Wygląd dokumentu to **propozycja nowej warstwy wizualnej**, nie zrzut
dzisiejszej aplikacji (dziś: zielony gradient w nagłówku, karty etapów,
ciemna sekcja ceny) — tak jak przy Wingmanie.

## Teza

> Po wysłaniu oferty zwykle zapada cisza. Panel pokazuje, do której sekcji
> klient doszedł i o co pytał czat.

Niesie ją jeden rysunek: mapa czytania oferty dla Nordisu (przykładowe dane,
pięć sesji) — sekcje w skali dokumentu, uwaga jako czas, zasięg jako kropki
sesji. Dwie osie osobno, tak jak w panelu, bo mają różne mianowniki.

## Przykład

Ta sama sprawa co na stronie Wingmana (firma od ogrzewania hal, Nordis,
rozmowa 14 września), ale strona nie łączy produktów. Oferta: 157 300 zł
netto bez montażu, ważna do 18 września (posiedzenie zarządu). Czat
odpowiada, co wchodzi w cenę; trzy pytania do czatu dotyczą montażu,
a podsumowanie radzi przenieść zdanie o montażu pod kwotę.

## Układ i tła

| # | Sekcja | Tło | Nośnik |
|---|---|---|---|
| 1 | hero | ciemna plansza | oferta Termaro w przeglądarce: przewijanie, plan, cena, czat, akceptacja, powiadomienie |
| 2 | czym jest | papier | definicja + indeks pięciu funkcji |
| 3 | zielony pas | biel | „Handlowiec zatwierdza koncepcję oferty, a resztę pisze Claude”, Szymon |
| 4 | co się dzieje po wysłaniu | biel | teza + mapa czytania z pomniejszonymi sekcjami oferty |
| 5 | od rozmowy do decyzji | ciemna scena | koncepcja przed ofertą, panel ofert, pytania klientów |
| 6 | porównanie | papier | `Metoda`: oferta w edytorze i PDF-ie kontra system |
| 7 | z czego składa się oferta | biel | warstwy oferty w rzucie, krawędź w kolorze źródła |
| 8 | dla kogo | papier | `DlaKogo` |
| 9 | kontakt | papier | `Kontakt` (Piotr Wojciuk) |
| 10 | FAQ | papier | `GcFaq` |

## Do potwierdzenia

- adres `/produkty/oferty` (nazwa „Oferty AI” ustalona 19.10.2026);
- wygląd oferty w makiecie jako kierunek dla aplikacji;
- model sprzedaży i cena (strona bez ceny, wezwanie „Umów pokaz”);
- Claude wprost na stronie (skill działa w Claude Code);
- przykład z ogrzewaniem sugeruje typy ofert i moduły pod firmę klienta;
  dziś w repo są typy i moduły Let's automate;
- domena w pasku adresu (adres oferty `/oferta/nordis` od 19.10.2026);
- kontakt: „Pokażemy system na przykładowej ofercie”;
- Szymon w pasie, Piotr w kontakcie; liczby w mapie czytania i panelu.
