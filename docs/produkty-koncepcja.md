# Produkty — koncepcja huba i podstrony Appto

Strony: `src/pages/produkty/index.astro` (hub `/produkty`) oraz
`src/pages/produkty/appto.astro` (`/produkty/appto`). Pierwsza wersja,
09.09.2026. Do serwisu doszła też zakładka **Produkty** w nawigacji
i kolumna **PRODUKTY** w stopce.

> **19.10.2026 — nowy hub (propozycja):** `src/robocze/produkty/index-new.astro`,
> lokalnie pod `/produkty/index-new`, w standardzie podstron
> (`docs/uslugi-standard.md`). Obecny hub poniżej opisuje Wingmana z
> ofertowaniem i oceną jakości rozmów (tych funkcji nie ma), obiecuje „pokaz
> pół godziny” i wdrożenie Wingmana przez nasz zespół. Nowy układ: hero bez
> rysunku → Appto (tekst + film) → Wingman (makieta z jego strony + tekst,
> kolumny odwrócone) → „Kiedy gotowy produkt nie wystarczy” z trzema
> usługami „Budujemy za Was” → kontakt „Zacznijmy od pokazu” → FAQ. Obraz
> Wingmana to zrzut makiety z `/produkty/wingman`
> (`public/produkty/wingman-pulpit.webp`, na telefonie `wingman-pasek.webp`).
> Tego samego dnia (prośba Szymona „dodaj tam ten system do ofert”) doszedł
> trzeci produkt, System ofert (tekst + oferta u klienta z czatem, link do
> `/produkty/oferty`), a w hero spis trzech produktów zamiast rozwijanej
> listy w menu (`docs/nawigacja-decyzje.md`). Tła: Appto biel, Wingman
> papier, System ofert biel, „Kiedy gotowy produkt nie wystarczy” papier,
> bo kontakt potrzebuje papieru nad planszą.
> Później tego dnia produkt dostał nazwę **Oferty AI**. Pojedyncze obrazy
> przy Wingmanie i Ofertach AI zastąpiły **slajdy** (prośba Szymona: „dodaj
> jakieś slajdy, które pokazują kilka ekranów systemu do ofert, przy wingman
> w sumie też warto”): po sześć ekranów z makiet na stronach produktów,
> komponent `src/components/produkty/Slajdy.astro`, pliki
> `public/produkty/slajdy/` (pulpit 1400 px i osobne zrzuty wersji na
> telefon). Ekrany stoją na ciemnej scenie, pod nią opis i kreski z czasem
> do następnego slajdu; pokaz rusza sam w kadrze, staje po najechaniu
> i kończy się przy pierwszym kliknięciu albo geście.
>
> **19.10.2026, kolejna runda (uwagi Szymona):**
> - **Hero** mówi o tym, co aplikacje dają zespołowi klienta: „Gotowe
>   aplikacje AI do pracy z klientem i w całej firmie” (wcześniej „które
>   piszemy i rozwijamy sami” — skupienie na nas). Pod tekstem kompozycja:
>   okno Appto (makieta Inbox AI ze strony głównej appto.ai), pasek Wingmana
>   z kartą odpowiedzi, telefon klienta z ofertą z Ofert AI. Elementy są
>   kotwicami do sekcji, zamiast spisu produktów.
> - **Bez podstron produktów** na razie: przyciski „Umów pokaz …” prowadzą do
>   kontaktu, a nazwa produktu trafia na początek pola zapytania. Linki
>   zewnętrzne: appto.ai, film o Appto, gowingman.app.
> - **Slajdy** przy wszystkich trzech produktach, bez ciemnej sceny; każde okno
>   w tych samych proporcjach (1100 × 688, na telefonie 346 × 519). Appto:
>   makiety z appto.ai (Inbox AI w dwóch stanach, Agenci, Baza wiedzy, Czat,
>   Rutyny) zamiast filmu. Oferty AI: panel i mapa czytania to prawdziwy
>   interfejs aplikacji uruchomionej lokalnie na przykładowych danych.
> - **Logo Appto** prawdziwe (`public/appto/appto-logo-full.svg`).
>
> **Później 19.10.2026:** w Appto film wrócił jako pierwszy slajd (miniatura,
> odtwarzanie na miejscu), ekranów trzy (Inbox AI, asystent, baza wiedzy) —
> Szymon dorzuci kolejne. Wiersze pod opisem mówią, co produkt robi: Appto —
> Zadania, Wiedza, Narzędzia, Kontrola (zamiast Dla kogo / Wdrożenie / Start /
> Dane); Wingman — Przed rozmową, W trakcie, Po rozmowie, Licencja. Link
> `/produkty?produkt=oferty#kontakt` (albo `appto`, `wingman`) wpisuje produkt
> w formularz — do kampanii, póki nie ma podstron.
>
> **Jeszcze później 19.10.2026:** przyciski otwierają panel z boku (na
> telefonie od dołu) z krótkim formularzem pod produkt
> (`src/components/produkty/PokazPanel.astro`, ten sam `/api/kontakt` i te same
> zdarzenia co `Kontakt.astro`, źródło „Produkty · <produkt>”); klient zostaje
> przy produkcie. Słowo „demo” zamiast „pokaz” (Szymon): „Umów demo Appto”,
> „Umów demo Ofert AI”, przy Wingmanie „Chcę dowiedzieć się więcej” (warunki
> licencji). Link z kampanii: `/produkty?demo=oferty`. Formularz na dole: „Nie
> wiecie, od której zacząć?”. Appto opisane jako standard pracy z AI i sposób
> na wprowadzenie AI do firmy; Wingman z transkrypcją na żywo. Etykiety-pigułki
> w hero zastąpił podpis pod sceną (znak, nazwa, jedno zdanie). W „Kiedy gotowy
> produkt nie wystarczy” doszły Strategia AI i Szkolenia z AI. Bez linku do
> gowingman.app.
>
> Podpisy wróciły do grafik w hero (Szymon: podpis pod sceną wyglądał
> gorzej): sam tekst na planszy, nazwa i jedno zdanie, cienka linia do
> krawędzi elementu zakończona punktem; podpis Wingmana w ciemnym pasie po
> lewej od okna Appto. Na telefonie rząd nazw pod sceną. Oferty AI mają cenę:
> **8 900 zł netto jednorazowo za wdrożenie**, zmiany i dopasowanie
> rozliczane godzinowo, jeśli potrzebne (stawki godzinowej strona nie podaje).
> Reszta tego dokumentu opisuje hub z 09.09.2026.
>
> **25.10.2026 — czwarty produkt: Earshot AI** (prośba Szymona: produkt do
> kontroli jakości rozmów handlowych i obsługi klienta, „wymyśl dla niego
> nazwę”). Pierwsza propozycja, Odsłuch AI, z jasnym panelem i tabelą,
> odpadła („zmień nazwę, najlepiej jakoś anglojęzyczną… design wygląda
> strasznie standardowo”). Earshot to ang. „zasięg słuchu”; nazwa do
> akceptacji. Fakty od Szymona: aplikacja połączona z centralką telefoniczną,
> nagrania można też wgrać, ocenia rozmowy według standardów firmy na
> podstawie całej transkrypcji i ocenia przebieg rozmowy.
>
> Sekcja `#earshot` po Ofertach AI (papier, kolumny odwrócone jak u Wingmana),
> przez co „Kiedy gotowy produkt nie wystarczy” przeszła na biel, a kontakt
> leży na granicy bieli i papieru. W hero karta z rozmową w ciemnym pasie po
> lewej (na telefonie tylko nazwa w rzędzie pod sceną), w panelu demo klucz
> `earshot` (`/produkty?demo=earshot`).
>
> Wygląd aplikacji (czwarta wersja). Odpadły: jasny panel z tabelą
> („strasznie standardowo”), ciemne okno z poświatą, Geist i kursywą
> Instrument Serif („font zwebcodowany… zupełnie inny design niż na stronie…
> bez typowych standardów AI-owych”) i natywny program na Maca ze ścieżkami
> jak w programie do nagrań („przesadziłeś… to jednak aplikacja webowa…
> to nie jest program dźwiękowy”). Obecna: aplikacja webowa w oknie
> przeglądarki, krój systemowy (jak GitHub czy Notion), monochrom z czarnym
> przyciskiem głównym, kolor tylko w ocenach, bez gradientów i kafli
> w kaflach. Rozmowa na osi to prosty pasek z etapami i dwoma znacznikami,
> bez fali. Pięć ekranów jednej rozmowy (Anna Kowal z Termaro i Hurtownia
> Bielik, 5 z 7): ocena (lista kryteriów, rozwinięte niespełnione, obok
> fragment transkrypcji), transkrypcja z uwagami pod zdaniami jak komentarze
> w przeglądzie kodu, standard z dokumentem źródłowym i przykładem, lista
> rozmów, okno wgrywania nagrań.
> Makieta: `src/robocze/produkty/earshot-makieta.astro`, zrzuty
> `node scripts/earshot-slajdy.mjs` przy działającym `npm run dev`.
> Do potwierdzenia: nazwa, cena i model sprzedaży, obsługiwane centralki,
> miejsce nagrań; etapy, kluczowy moment, uwagi przy zdaniach, kryteria
> wskazane w dokumencie i „odtwórz od” pochodzą z makiety.

---

## Po co ta zakładka

Do 09.09.2026 Appto istniało w belce jako jeden link `Appto ↗` wyprowadzający
poza serwis, a Wingman nie istniał nigdzie. Produkty są drugą nogą przychodu
obok usług i mają rosnąć — hub jest miejscem, do którego dokłada się kolejne
pozycje bez przebudowy nawigacji.

**Podział ról między stronami:**

| Strona | Odpowiada na pytanie |
|---|---|
| `/produkty` | co mamy gotowego, skąd to się wzięło i kiedy to nie wystarczy |
| `/produkty/appto` | dlaczego wynik z Appto jest dobry i co trzeba zrobić, żeby taki był |

---

## Teza pozycjonująca

> **Produkt, którego sami nie używamy codziennie, nie trafia do naszej oferty.**

Prawdziwa, różnicująca i niewygodna do skopiowania: konkurencja odsprzedaje
cudze licencje, my obsługujemy własną firmę tym, co sprzedajemy. Stoi
w osobnej linii w dużym stopniu pisma w sekcji 2 huba, a nie jako trzeci
akapit.

Teza podstrony Appto jest inna i węższa:

> **Agent jest tyle wart, ile wie, zanim zacznie.**

To ona ustawia całą stronę: sekcja o kontekście stoi przed sekcją o agentach,
a nie odwrotnie, i to ona tłumaczy, czemu wdrożenie kosztuje pracę.

---

## Alfabet wizualny — ósmy i dziewiąty osobny słownik w serwisie

Zajęte wcześniej:

- `/strategia-ai` — łuki, przewijany strumień, siatka stu kwadratów
- `/rozwiazania-ai` — przekrój warstw, próg pewności, tory harmonogramu
- `/szkolenia-ai` — jednostki do policzenia: ludzie, minuty
- `/systemy-procesowe` — oś czasu sprawy, poziomy pas czterech okien
- `/systemy-dla-klientow` — lista pytań
- `/automatyzacje-integracje` — puls
- `/guided-coding` — krzywa tempa, dwie ścieżki

Nowe:

- **`/produkty` — artefakt.** Kartka, która wróciła zrobiona. Hero to stos
  trzech takich kartek z trzech różnych produktów (kaskada, każda pokazuje
  pasek i tytuł), dalej ten sam alfabet w środku aplikacji: Inbox Appto
  z wynikami i notatka z rozmowy w Wingmanie.
- **`/produkty/appto` — karta agenta.** Rola, wiedza, narzędzia i **granica**.
  Wraca w hero, przy rutynach i w tabeli agentów pod role. Wiersz „oddaje
  człowiekowi" jest w niej zawsze — to on odpowiada na pytanie, które pada
  w każdej rozmowie o AI, i robi z rysunku argument, a nie ozdobę.

**Jedna sprawa przechodzi przez obie strony.** Oferta dla Stalprofilu na halę
42 × 18 m stoi w hero huba (kartka), w Inboksie Appto na hubie (wiersz),
w hero podstrony (karta agenta), w widoku zadania ZL-118 (kroki 9:12 → 9:26)
i w wątku na Slacku. Godziny się spinają: zlecone 9:12, gotowe 9:26.
Notatka z rozmowy z 14 września pochodzi z Wingmana i jest wymieniona jako
źródło w karcie agenta — dwa produkty spinają się jedną sprawą.

---

## Układ i rytm tła

**`/produkty`**

| # | Sekcja | Tło | Nośnik |
|---|---|---|---|
| 1 | hero | biel + poświata | stos trzech kartek, dwa wezwania |
| 2 | skąd się biorą | biel | nagłówek pełną szerokością, teza, trzy wiersze |
| 3 | `#appto` | `#f4f8f2` | lokup + wiersze specyfikacji + okno Inboksu |
| 4 | `#wingman` | biel | okno po lewej, moduły w wierszach po prawej |
| 5 | pierwsze tygodnie | `#0e2b1d` | cztery numerowane wiersze |
| 6 | granica | biel | dwie kolumny: akapit i trzy odnośniki do usług |
| 7 | FAQ | `#f4f8f2` | akordeon (GcFaq) |
| 8 | kontakt | biel | GcCta |

**`/produkty/appto`**

| # | Sekcja | Tło | Nośnik |
|---|---|---|---|
| 1 | hero | biel + poświata | karta agenta z odsłanianymi wierszami |
| 2 | czym jest | biel | definicja + teza w dużym stopniu pisma |
| 3 | `#kontekst` | `#f4f8f2` | cztery numerowane wiersze + nota uczciwości |
| 4 | dwa tryby | biel | okno zadania ZL-118 i dwie karty rutyn |
| 5 | `#agenci` | biel | cztery wiersze: rola, robota, co wraca, granica |
| 6 | Coworker | `#f4f8f2` | wątek na Slacku + trzy wiersze klucz→wartość |
| 7 | `#dane` | `#0e2b1d` | sześć pozycji w dwóch kolumnach |
| 8 | start | biel | dwie karty: sami / z nami |
| 9 | FAQ + kontakt | `#f4f8f2` + biel | GcFaq, GcCta |

Ciemny pas pada raz na stronę i bierze najcięższy argument: na hubie —
„samo konto niczego nie zmienia", na podstronie — „gdzie leżą Wasze dane".

---

## Czego świadomie nie ma

- **Siatki równych kafli produktowych.** Appto i Wingman mają różne układy
  (tekst → okno, okno → tekst), różne tła i różne formy listy. Trzeci produkt
  dokłada się jako kolejna sekcja o własnym ciężarze, nie jako trzeci kafel.
- **Cen.** Cennik Appto żyje na appto.ai i tam zostaje; przepisany tutaj
  rozjechałby się przy pierwszej zmianie. Wingman nie ma publicznej ceny.
- **Liczby integracji.** appto.ai podaje w dwóch miejscach różne wielkości,
  więc strona wymienia narzędzia z nazwy i nie podaje liczby.
- **Porównania z konkurencją w tabeli.** Pytanie „czym to się różni od
  ChatGPT" stoi w FAQ, gdzie faktycznie pada.
- **Sekcji o zespole i opinii klientów.** Obie żyją na `/dlaczego-my`
  i na stronie głównej.

## Sekcja, która niczego nie sprzedaje

Na hubie: **„Kiedy gotowy produkt nie wystarczy"** — razem ze zdaniem
odwrotnym („przychodzi zapytanie o system szyty na miarę, a po rozmowie
mówimy, że wystarczy Appto z dwiema rutynami"). Raz na stronę.

Na podstronie Appto tę rolę pełni nota pod sekcją o kontekście: zebranie
kontekstu to kilka dni roboty i bez tego kroku narzędzie odpowiada
ogólnikami. To jest wada produktu powiedziana wprost i to ona sprzedaje
wdrożenie.

---

## Do potwierdzenia przed publikacją

Pełne listy stoją w nagłówkach obu plików. Najważniejsze:

1. **Wingman** — cały opis powstał z jednego zdania: „nagrywanie i wsparcie
   w rozmowach, do tego ofertowanie i AI QA do rozmów". Nazwy trzech modułów,
   treść notatki z rozmowy i zdanie o kryteriach jakości są propozycją.
   Status „dostępny" wzięty z ustalenia z 09.09.2026.
2. **„14 min"** przy ofercie w karcie agenta — przykład z naszego użycia,
   nie pomiar na próbie.
3. **Kadencja wydań** — strona mówi „regularnie". Jeśli Appto wydaje co
   tydzień, wpisać to wprost; to mocniejszy argument.
4. **Fakty produktowe Appto** wzięte z appto.ai 09.09.2026 (zespoły 10–500,
   dane w UE, szyfrowanie, osobna przestrzeń, DPA, brak treningu na danych,
   konto bez karty, pay-as-you-go albo kredyty, lista integracji).
5. **Zdanie „obydwie aplikacje stoją na tym samym stosie"** — prawdziwe dla
   Appto; przy Wingmanie do potwierdzenia.

---

## Podpięcie

1. `src/components/Nawigacja.astro` — zakładka **Produkty** między Usługami
   a Know-how (megamenu 392 px: dwie pozycje z sygnetami + „Wszystkie
   produkty"), ta sama lista w panelu mobilnym. Pozycja `Appto ↗` zdjęta
   z belki.
2. `src/components/Stopka.astro` — nowa kolumna **PRODUKTY**; siatka stopki
   ma pięć kolumn i schodzi do trzech poniżej 1180 px.
3. `src/pages/sitemap.xml.js` — `/produkty` (0.9) i `/produkty/appto` (0.8).
4. `docs/nawigacja-decyzje.md` — wpis o zakładce.

## Jak podglądać

Animacje odsłaniają się przy wejściu w kadr (`[data-anim]` → klasa `.on`,
`.rv` → `.in` z layoutu). Stan końcowy łapie się przez
`--force-prefers-reduced-motion`; do zrzutów kawałków strony służy
`dist/_shot.html` z iframem (odtworzyć po każdym `npx astro build`, bo build
czyści `dist/`).
