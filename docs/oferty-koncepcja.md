# System ofert — koncepcja strony produktu

Strona: `src/pages/produkty/oferty.astro` (`/produkty/oferty`), `noindex`,
pierwsza wersja 15.10.2026. Analogiczna do `/produkty/wingman` (ten sam
standard, ta sama rama), osobny produkt — bez łączenia z Wingmanem.
Nie jest podpięta do menu ani sitemapy.

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
| 1 | hero | ciemna plansza | oferta w przeglądarce: przewijanie, czat, akceptacja, powiadomienie |
| 2 | czym jest | papier | definicja + indeks pięciu funkcji |
| 3 | zielony pas | biel | „Handlowiec zatwierdza koncepcję oferty, a resztę pisze Claude”, Szymon |
| 4 | co się dzieje po wysłaniu | biel | teza + mapa czytania |
| 5 | od rozmowy do decyzji | ciemna scena | koncepcja przed ofertą, panel ofert, pytania klientów |
| 6 | porównanie | papier | `Metoda`: oferta w edytorze i PDF-ie kontra system |
| 7 | z czego składa się oferta | biel | przepis jednej oferty: pisze Claude / moduł / biblioteka |
| 8 | dla kogo | papier | `DlaKogo` |
| 9 | kontakt | papier | `Kontakt` (Piotr Wojciuk) |
| 10 | FAQ | papier | `GcFaq` |

## Do potwierdzenia

- nazwa („System ofert”; aplikacja: „Oferty”) i adres `/produkty/oferty`;
- model sprzedaży i cena (strona bez ceny, wezwanie „Umów pokaz”);
- Claude wprost na stronie (skill działa w Claude Code);
- przykład z ogrzewaniem sugeruje typy ofert i moduły pod firmę klienta;
  dziś w repo są typy i moduły Let's automate;
- domena w pasku adresu i slug przykładowy;
- kontakt: „Pokażemy system na przykładowej ofercie”;
- Szymon w pasie, Piotr w kontakcie; liczby w mapie czytania i panelu.
