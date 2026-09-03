# Systemy dla Waszych klientów — koncepcja strony

Strona: `src/pages/systemy-dla-klientow.astro`. Utworzona 30.08.2026.
Druga podstrona z pionu **Budujemy aplikacje**, po `/systemy-procesowe`.
Portal klienta, platforma B2B, samoobsługa.

## Czym się różni od `/systemy-procesowe`

To najbliższy sąsiad — ten sam pion, podobna technologia, łatwo o kalkę.
Granica jest ostra i biegnie po **mierze**:

| | `/systemy-procesowe` | `/systemy-dla-klientow` |
|---|---|---|
| Gdzie stoi system | wewnątrz firmy | po stronie klienta |
| Miara | **czas sprawy** od wejścia do zamknięcia | **liczba pytań**, które przestają przychodzić |
| Główny strach kupującego | projekt na dwa lata, po którym nic nie działa | portal, do którego nikt się nie loguje |
| Ciężar ciemnego pasa | kolejne uruchomienia | skąd klient trafia do środka |

Jeden bywa fundamentem drugiego: portal wie, na jakim etapie jest zamówienie,
tylko wtedy, kiedy istnieje rejestr, który to wie. FAQ mówi to wprost i linkuje
w tę stronę — **portal podpięty do niepewnych danych pokaże klientowi
nieprawdę**, więc czasem trzeba zacząć od procesu.

## Decyzja pozycjonująca

Dwa argumenty, w tej kolejności (układ sprawdzony na `/systemy-procesowe`).

**1 · Przewaga.** Firma, u której klient sam sprawdzi wszystko o dwudziestej
drugiej, jest firmą, z którą łatwiej się pracuje. To jest powód, dla którego
klient zostaje, kiedy ktoś inny da dwa procent taniej. Portal nie jest
oszczędnością na obsłudze, tylko **argumentem przy przedłużaniu umowy** —
i tak jest napisany w hero oraz w czwartym warunku sekcji o firmach.
Wygoda pracy jest trudniejsza do podrobienia niż rabat.

**2 · Mechanizm.** *Portal wygrywa z telefonem tylko wtedy, kiedy jest od
telefonu szybszy.* Telefon ma jeden krok: wybierz numer. Wszystko dłuższe
przegrywa — i dlatego większość portali stoi pusta. To zdanie stoi jako
osobna linia w dużym stopniu pisma pod nagłówkiem sekcji trzeciej, nie jako
akapit.

Konsekwencja dla całej strony: **nie sprzedajemy portalu, sprzedajemy trzy
pierwsze pozycje z listy pytań.** Stąd hero, stąd pierwszy ekran w widokach,
stąd zdanie o tym, od czego zaczynamy.

## Trzy rzeczy sprawdzalne przed podpisaniem umowy

1. **Zaczynamy od policzonej listy pytań**, wyciągniętej ze skrzynki obsługi
   i z rejestru rozmów za ostatni kwartał. Portal obsługuje pierwsze trzy
   pozycje, nie dwadzieścia. Klient może tę listę zobaczyć przed wyceną.
2. **Mierzymy pytania, nie logowania.** Punkt wyjścia przed startem, pomiar
   po kwartale. Logowanie mówi tylko, że ktoś zajrzał.
3. **Numeru telefonu klientowi nie zabieramy.** Przy każdej sprawie w portalu
   stoi przycisk do opiekuna. Portal, który zmusza do samoobsługi, przegrywa
   z tym, do którego klient wraca sam. To jest widoczne także na rysunku —
   przycisk stoi na drugim ekranie widoków.

## Warstwa wizualna — piąty osobny słownik w serwisie

- `/strategia-ai` — łuki, przewijany strumień, siatka stu kwadratów
- `/rozwiazania-ai` — przekrój warstw, próg pewności, tory harmonogramu
- `/szkolenia-ai` — jednostki do policzenia: ludzie, minuty
- `/systemy-procesowe` — oś czasu sprawy: praca kontra czekanie
- `/systemy-dla-klientow` — **lista pytań**

Alfabetem tej strony jest **pytanie jako jednostka**. Wszystko mierzy się tu
liczbą pytań: hero liczy te, które przychodzą, panel w widokach te, które
przestały, sekcja dowodów zestawia dwie liczby na firmę.

| Rysunek | Gdzie | Co niesie | Ruch |
|---|---|---|---|
| **Lista pytań** | hero | siedem pytań klientów uszeregowanych po liczbie; zielona część paska to udział, który przejmuje portal | pętla: wiersze wchodzą od góry, potem dorastają zielone części, na końcu suma |
| **Wejścia** | ciemny pas | rozkład pierwszych logowań; ostatnia pozycja bursztynowa | paski dojeżdżają do wartości przy wejściu w kadr |
| **Widoki portalu** | pas z przewijaniem | trzy ekrany klienta i jeden panel zespołu | przewijanie w bok, strzałki gasną na krańcach |

**Uczciwość hero.** Ogon listy zostaje prawie w całości szary: reklamacja
w 20%, sprawy spoza katalogu w 0%. Z 855 pytań portal zdejmuje 631, a 224
rozmowy zostają — i podpis nazywa je *tymi, w których naprawdę jesteście
potrzebni*. Lista, na której portal bierze wszystko, czytałaby się jak
materiał sprzedażowy. Sumy liczy kod z tablicy, nie ja.

**Pointa ciemnego pasa** to ostatni wiersz rozkładu wejść: *klient wpisał
adres portalu z pamięci — 3%*. Bursztynowy, bo to on tłumaczy całą sekcję.
Wniosek stoi zaraz pod listą: wejście wkłada się w wiadomości, które i tak
do klienta idą.

**Czwarty widok jest z drugiej strony lady.** Trzy ekrany pokazują portal
oczami klienta, czwarty — panel zespołu z liczbą pytań przed i po. Domyka
argument o mierzeniu i jest jedyną rzeczą, której nie ma na
`/systemy-procesowe`, mimo że komponent jest ten sam.

## Układ sekcji i rytm tła

| # | Sekcja | Tło | Nośnik | Szkielet nagłówka |
|---|--------|-----|--------|-------------------|
| 1 | Hero | biel + poświata | **lista pytań** | H1 + akapit |
| 2 | Czym to jest | biel | definicja + kolumna „co klient robi sam" | H2 pełną szerokością, pod nim 2 kolumny |
| 3 | Dlaczego portale stoją puste | biel | teza w dużym stopniu pisma + 3 powody | H2 + linia + akapit |
| 4 | Jak to wygląda | `#f4f8f2` | **pas czterech widoków** | nagłówek + strzałki po prawej |
| 5 | Dla jakich firm | biel | 4 warunki z numerami + wcięty blok „kiedy nie" | podział 2-kolumnowy |
| 6 | Skąd klient wchodzi | `#0e2b1d` | **rozkład wejść** + pointa + 2 kolumny zamknięcia | podział 2-kolumnowy, ciemna |
| 6b | Pas wezwania | biel, na liniach | zdanie i przycisk | — |
| 7 | Przykłady | `#f4f8f2` | 3 wiersze „1200 → 380" | podział 2-kolumnowy |
| 8 | Cytat / FAQ / kontakt | biel / `#f4f8f2` | `GcFaq`, `GcCta` | — |

## Czego świadomie nie ma

- **Kwoty.** Jak na wszystkich podstronach usługowych poza `/strategia-ai`.
  Wyceniamy pierwsze uruchomienie, a nie portal — i to jest w FAQ.
- **Sekcji o technologii i logowaniu.** Sposób logowania klientów jest
  wymieniony jako jeden z trzech czynników ceny i tyle. Przed decyzją nikt
  tego nie czyta.
- **Obietnicy procentu adopcji.** Liczby w hero i w dowodach są opisane jako
  przykłady; obiecujemy sposób liczenia, nie wynik.
- **Zrzutów z cudzych portali.** Widoki są rysowane w HTML i podpisane jako
  poglądowe.

## Do potwierdzenia przed publikacją

- **Cała lista pytań i liczby** (855 pytań, 631 obsłużonych, 224 zostaje) —
  kształt jest pewny, liczby są przykładem z jednego rozkładu. Do podmiany
  na pomiar u klienta. Sumy liczy kod, więc edycja tablicy przelicza rysunek.
- **Udziały wejść (46/24/19/8/3%)** — proporcja z obserwacji, nie z pomiaru.
  Sama pointa, czyli że prawie nikt nie wpisuje adresu z pamięci, jest pewna.
- **Trzy przykłady w sekcji dowodów** są PRZYKŁADOWE, razem z tym, co przy
  każdym zostało przy telefonie.
- **`/og/systemy-dla-klientow.png`** — strona dziedziczy `/og/hub.png`.
  Naturalny kadr to lista pytań z hero w stanie pełnym.

## Zmiany poza samą stroną

- `LaBase.astro` i `index.astro` — pozycja w megamenu i drugi wiersz warstwy
  „Budujemy aplikacje" w sekcji S4 prowadzą do `/systemy-dla-klientow`;
  `data-krok-link` zdjęty.
- `sitemap.xml.js` — wpis z priorytetem 0.9.

Stan pionów po tej zmianie: **Wdrażamy AI** ma komplet trzech podstron,
**Budujemy aplikacje** dwie z trzech (zostaje „Automatyzacje i integracje"),
**Guided Coding** miał swoje od początku.

## Pułapka, na którą straciłem czas

Szerokości pasków w hero siedziały wyłącznie w wygenerowanych klatkach
animacji. Przy `prefers-reduced-motion` reguła `animation: none` zdejmowała
animację, a wraz z nią jedyne miejsce, w którym stały liczby — **cały wykres
był pusty i nie dawał żadnego błędu**. Szerokości wchodzą teraz jako zmienne
`--w` i `--z` w stylu wiersza, a blok reduced-motion je czyta.

Reguła ogólna: jeśli animacja jest jedynym nośnikiem danych, blok
`prefers-reduced-motion` musi mieć własne źródło tych samych liczb.

---

## Korekta tekstu 31.08.2026

Przegląd wszystkich podstron usługowych pod kątem zapychaczy i formuł
powtarzanych między stronami. Co dokładnie zmienione i dlaczego:
`docs/przeglad-tekstow-podstron.md`, sekcja D.
