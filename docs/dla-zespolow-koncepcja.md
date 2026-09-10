# /guided-coding/dla-zespolow — koncepcja

Strona: `src/pages/guided-coding/dla-zespolow.astro`, adres
`/guided-coding/dla-zespolow`. Drzwi B Guided Codingu, podpięte w megamenu,
w rozwidleniu huba i w sitemapie. **Wersja żywa od 08.09.2026.**

| Wersja | Czym była | Dlaczego odpadła |
|---|---|---|
| poprzednia żywa (`docs/_kopie/dla-zespolow-przed-v3.astro`) | diagnostic sprint, progi DORA, bramki, roadmapa | sprzedawała wejście zamiast usługi i nie mówiła, po co komu ten stos |
| pierwsze podejście do przebudowy (`docs/_kopie/dla-zespolow-v2-przed-know-how.astro`) | pomiar przepływu, bramka przed merge'em, review zmian przecinających moduły, cztery metryki DORA | sprzedawała nadzór: hero pokazywało nasz komentarz pod cudzym pull requestem, sekcja „co naprawiamy" była listą rzeczy, które u klienta nie działają |
| **obecna** | przeniesienie know-how: pętla poprawek, stary sposób planowania pracy, WiseStack w repozytorium klienta | — |

Kierunek od Szymona (08.09.2026): *„Ich problemem jest to, że obecnie generują
zbyt mało z AI. Wymaga to wielu poprawek, a oni nie mają poukładanego procesu
pracy z AI. Trzymają się starego procesu rozliczenia. To nie jest tak, że
robimy im przegląd kodu. Nie nadzorujemy ich, nie sprawdzamy, ani nie
kontrolujemy. Chcemy im dać więcej know-how, opierając się na naszym
WiseStacku."*

---

## Teza

> Nikt nie odda agentowi większego kawałka roboty, dopóki po każdym trzeba
> poprawiać.

Stoi we własnej linii w dużym stopniu pisma na końcu sekcji `#petla`, pod
czterema wierszami, które ją dowodzą. To ona odwraca sens całej kategorii:
reguły, testy i sprawdzenia przestają być kontrolą jakości, a stają się
warunkiem, żeby dało się oddać agentowi więcej.

Drugie zdanie, które strona musi zostawić w głowie: **udział AI rośnie sam,
kiedy pierwsze podejście przestaje wracać.**

## Co ma wybrzmieć

1. **Zespół nie jest winny.** Lead hero zaczyna od „Nie dlatego, że zespół
   czegoś nie umie". Bez tego cała strona czyta się jak audyt kompetencji.
2. **Kod powstaje z agentem w jednej trzeciej, a mógłby w całości.**
   To jest diagnoza i niesie ją rysunek, nie zdanie.
3. **Druga połowa problemu leży poza kodem** — w tym, jak planuje się
   i rozlicza pracę.
4. **Know-how przychodzi gotowe i zostaje jako rzecz**, nie jako
   prezentacja. Stąd drzewo plików zamiast opisu metody.
5. **Nie nadzorujemy.** Osobna sekcja graniczna mówi to wprost.

## Miara przez całą stronę

Para liczb, zawsze razem: **ile roboty trafia do agenta** i **ile z tego
wchodzi bez rundy poprawek**. Druga ciągnie pierwszą i to jest cały mechanizm
sprzedażowy tej strony.

Liczą ją cztery miejsca:

| Miejsce | Co pokazuje |
|---|---|
| hero, `KOLA` | ile kodu powstaje z agentem: 100% w WiseStacku (łuk zewnętrzny), 31% bez spisanych zasad (wewnętrzny) |
| `#petla`, kolumna „co trafia do agenta" | cała warstwa → jedna funkcja → jedna metoda → poprawka w gotowym kodzie |
| `#efekt`, `EFEKT` | 22% → 78% udziału i 34% → 81% bez poprawek |
| `#u-nas`, `NASZ` | ta sama liczba u nas, kwartał po kwartale, do 100% |

Sufit stoi pod wykresem, nie w nagłówku: udział zatrzymuje się w okolicach
czterech na pięć, reszta zostaje przy człowieku. Bez tego zdania sekcja czyta
się jak materiał sprzedażowy.

## Słownik wizualny

Pięć różnych gatunków rysunku, żadnego wspólnego z drzwiami A (tam: panel
narzędzia klienta, kursor, kolejka zgłoszeń, paski dni):

1. **Dwa łuki na wspólnym środku** (hero) — ile kodu powstaje z agentem
   w typowym zespole z narzędziami i bez spisanych zasad, a ile u zespołu
   w WiseStacku. Łuki dorysowują się po kolei, więc różnicę widać jako
   ruch. Wartości docelowe stoją też jako `stroke-dashoffset` w stylu
   elementu, więc zdjęcie animacji nie zabiera razem z nią danych.

   Dwie wersje odrzucone po drodze: **dwa osobne kółka obok siebie
   w białej karcie z cieniem** („bardzo brzydki, to nie może tak działać")
   — karta odcinała się od poświaty hero jak wklejony widget, a dwa
   równorzędne kółka czytały się jak kafelki z dashboardu. Rysunek leży
   teraz wprost na tle, bez ramki i bez cienia, a porównanie jest jednym
   obiektem. Przy pierwszym podejściu wewnętrzny łuk (`#c3d2c5`) ginął
   na śladzie (`#e9efe7`) — kolory muszą różnić się wyraźnie, a prześwit
   między pierścieniami wynosi 38 px przy grubości 14.
2. **Pętla poprawek** (`#petla`) — spis czterech obrotów z numerami na
   pionowej krechę i krechą wracającą z dołu do góry po lewej stronie.
   Krecha jest zwykłym `border` z `border-radius`, grot to obrócony róg
   pseudoelementu.
3. **Drzewo plików** (ciemny pas) — okno z paskiem tytułu i dwunastoma
   wierszami: katalogi na zielono, pliki na biało, opis w prawej kolumnie.
   Cały `.rp-l` jest jednym gridem `auto / 1fr`, żeby nazwy stały w jednej
   kolumnie.
4. **Cztery pary przed/po** (`#efekt`) — jedyna forma przeniesiona
   z poprzedniej wersji, przesunięta z ciemnego pasa na zielone tło.
5. **Krzywa sześciu kwartałów** (`#u-nas`) — udział AI w naszym własnym
   kodzie, kończący się tam, gdzie stoi prawe koło w hero.

## Typografia i nadtytuły

Na całej stronie **nie ma nadtytułów sekcji**. Monospace'owe wersaliki nad
każdym nagłówkiem były tikiem generatora (ta sama uwaga stoi
w `docs/wisestack-koncepcja.md`: „Nagłówek stoi sam"). Razem z nimi wypadły
pigułki wersalikami przy drogach wejścia i etykiety kroków; tam, gdzie
etykieta niesie treść (`Mierzymy`, `Przenosimy`, `Prowadzimy`), stoi zwykłym
krojem w zieleni.

Jedyny nadtytuł na stronie stoi w hero i jest złożony **tym samym krojem
co reszta serwisu** (Schibsted Grotesk), wyróżniony samą skalą, wagą 600
i zielenią. Dwie próby z obcym krojem zostały odrzucone: **Instrument
Serif** („szeryf nie przystoi do bezszeryfowej reszty") i **Bricolage
Grotesque** („nie jest w ogóle dostosowany do reszty"). Reguła na przyszłość:
nadtytuł hero wyróżnia się skalą i kolorem, nie obcym krojem — serwis stoi
na jednym kroju i to jest decyzja, nie brak pomysłu.

## Układ

| # | Sekcja | Tło | Nośnik |
|---|---|---|---|
| 1 | hero | biel + poświata | treść po lewej, dwa łuki na wspólnym środku po prawej, bez karty i bez podpisu |
| 1b | pas dowodu | biel | logotypy, „140+ firm" |
| 2 | `#petla` | biel | cztery wiersze z krechą wracającą + teza w dużym stopniu |
| 3 | `#rozliczenie` | `#f4f8f2` | pięć wierszy w dwóch kolumnach + blok „Co z tym robimy" z akcentową krechą |
| 4 | `#czym-jest` | biel | nagłówek po lewej, definicja po prawej, trzy kolumny z górną krechą + wiersz kadencji |
| 5 | `#wisestack` | `#0e2b1d` | drzewo plików w oknie |
| 6 | głos klienta | biel | cytat NARS |
| 7 | `#efekt` | `#f4f8f2` | cztery pary przed/po + zdanie o suficie |
| 8 | `#u-nas` | biel | krzywa sześciu kwartałów + trzy liczby, nagłówek bez podtytułu |
| 9 | `#sklad` | `#f4f8f2` | dwie pozycje z awatarami |
| 10 | `#granica` | biel | trzy „nie robimy" + kartka „Kiedy nie warto zaczynać" |
| 11 | `#start` | `#f4f8f2` | dwie drogi wejścia, tabela alternatyw, rozliczenie |
| 12 | kontakt | biel | `GcCta` |
| 13 | FAQ | `#f4f8f2` | `GcFaq`, siedem pytań |

Ciemny pas pada raz i bierze WiseStack. Nigdzie nie ma trzech jasnych bloków
pod rząd.

Hero trzyma układ całego serwisu: treść po lewej, grafika po prawej.
Wersja z nagłówkiem po lewej i zdaniem po prawej, bez grafiki obok, została
odrzucona — rozbijała rytm wszystkich pozostałych podstron.

## Czego świadomie nie ma i nie powinno wrócić

- **Review zmiany po zmianie jako produkt.** To jest oferta drzwi A.
  Tu bramka należy do zespołu i istnieje po to, żeby dało się oddać agentowi
  większy kawałek bez czytania wszystkiego.
- **Nasze narzędzie skanujące cudzy kod** w sekcji o składzie. Zastąpione
  kanałem do zespołu, który pracuje w WiseStacku.
- **Lista „co u Was nie działa"** bez podania powodu. Poprzednia wersja miała
  sześć takich wierszy pod nagłówkiem „co naprawiamy".
- **Ekran pull requesta w hero.** Był najlepszym rysunkiem poprzedniej wersji
  i jednocześnie obrazem nadzoru.
- **Nazwiska w czymkolwiek, co oddajemy.** Pada dwa razy: w `#granica`
  i w FAQ.
- **Dokładanie architekta, platform engineera i zastępstwa** w sekcji
  o składzie. To jest oferta drzwi A: zespół inżynierski ma własnego
  architekta i własny platform engineering, więc sprzedawanie mu ich
  brzmiało jak nieporozumienie. Zostaje prowadzący inżynier i kanał
  do reszty zespołu.
- **Osobna sekcja z kadencją miesiąca.** Zajmowała cały ekran, a mieści się
  w czterech zwrotach pod definicją. Miejsce po niej wzięła sekcja dowodowa
  `#u-nas`.
- **Nadtytuły sekcji** i pigułki wersalikami — patrz „Typografia".

## Sekcja, która niczego nie sprzedaje

`#granica`, pada raz. Trzy rzeczy, których nie robimy, plus kartka „Kiedy nie
warto zaczynać": jeśli po stronie klienta nie ma nikogo z prawem decyzji
o tym, jak kroi się i odbiera zadania, reguły wylądują w repozytorium i nic
się nie zmieni. Poprzednia wersja tej sekcji nie miała w ogóle — brak był
wytknięty już w `docs/dla-zespolow-doradztwo-koncepcja.md`.

## Do potwierdzenia przed publikacją

- **`CYKL`** — udziały „ile tego etapu robi dziś AI" (12 / 9 / 64 / 14 / 7 /
  10) są proporcją z obserwacji. Kształt pewny, liczby do podmiany. Pod
  rysunkiem stoi zdanie mówiące, skąd są. Liczba „jeden etap z sześciu"
  wylicza się z tablicy (`HC_PONAD`), więc po podmianie zmienia się sama.
- **`EFEKT`** — cztery pary przed/po, to samo zastrzeżenie.
- **`KOLA`** — 31% i 100% w hero. Prawa liczba jest deklaracją spójną
  z `/wisestack` („cały kod pisze AI"), lewa to proporcja z obserwacji.
- **`NASZ`** — sześć kwartałów udziału AI w naszym kodzie: 5, 10, 20, 40,
  90, 100 procent. Liczby podane przez Szymona (09.09.2026), nie z pomiaru
  narzędziem. Ostatni kwartał musi się zgadzać z zewnętrznym łukiem w hero.
- **`NASZ_LICZBY`** — `3×`, `5 tyg.`, `0`. „5 tygodni zamiast piętnastu"
  ma się zgadzać z tablicą `MODELE` na `/wisestack`.
- **„ponad dwustu wdrożeń"** przy WiseStacku — powtórzone z drzwi A i huba,
  a `/wisestack` mówi o czterdziestu projektach w tym stosie. Obie liczby
  mogą być prawdziwe, ale wymagają jednej decyzji.
- **Kadencja** — sesja co tydzień, odpowiedź tego samego dnia roboczego,
  godzina liczb w miesiącu. To zobowiązanie umowne.
- **Ceny nie ma.** Hub obiecuje przy tych drzwiach „Diagnostic sprint ·
  2 tygodnie · od [25 000] zł", a ta strona zaczyna od bezpłatnej diagnozy
  i dwóch tygodni pomiaru jako jednej z dwóch dróg. Do uzgodnienia razem
  z hubem.
- **Formularz nie ma endpointu**, jak wszędzie w serwisie.

## Co zostało do zrobienia po podmianie

1. ~~Przenieść plik na `dla-zespolow.astro`~~ — zrobione 09.09.2026,
   poprzednia wersja leży w `docs/_kopie/dla-zespolow-przed-v3.astro`.
2. Poprawić hub `/guided-coding`: kafel drzwi B mówi „Chcecie wycisnąć z AI
   wszystko" i podaje diagnostic sprint jako wejście. Nowa obietnica to
   know-how i większy udział agentów, wejście jest bezpłatną diagnozą.
3. Poprawić `Nawigacja.astro` — dziś opis brzmi „Dział IT dowozi szybciej
   i bezpieczniej", co pasuje, ale warto sprawdzić razem z hubem.
4. ~~`sitemap.xml.js`~~ — bez zmian, adres się nie zmienił.
5. Sprawdzić, czy `/szkolenia-ai` („jeśli liczba nie ruszy, wracamy na własny
   koszt") nie bije się z `#granica`, które mówi, że za wydania nie
   odpowiadamy.

## Jak podglądać animacje

Koła w hero chodzą z własnego zegara (`KO.c = 10s`), krzywa w `#u-nas`
odsłania się raz, przy wejściu w kadr. Do zrzutów:

- **stan końcowy** → `--force-prefers-reduced-motion`;
- **konkretna klatka** → strona pomocnicza w `dist/` z `<iframe>`, w której
  po `onload` leci `doc.getAnimations().forEach(a => { a.currentTime = T*1000;
  a.pause(); })`;
- **odsłonięcia `.rv`** nie odpalają się w headless przez `<iframe>` —
  w stronie pomocniczej trzeba dopisać klasę `in` ręcznie, inaczej paski
  w `#efekt` mają zerową szerokość.

## Pułapki złapane po drodze

- **Trzecie dziecko gridu spada pod numer.** W `.pt-r` przy zwężeniu do
  dwóch kolumn kolumna „co trafia do agenta" lądowała w pierwszej kolumnie,
  pod kółkiem z numerem. Potrzebne jawne `grid-column:2` w media query.
- **Jedne klatki plus `animation-delay` dają podwójne opóźnienie**, jeśli
  klatki są wyrażone w procentach całego cyklu. Przy elementach wchodzących
  po kolei generować osobne `@keyframes` na indeks.
- **`pathLength="1"` plus `stroke-dasharray:1` zawodzi przy
  `preserveAspectRatio="none"`.** Niejednorodne skalowanie zmienia
  rzeczywistą długość ścieżki, więc krzywa urywa się przed ostatnim punktem.
  Odsłanianie zrobione `clip-path: inset(0 100% 0 0)` jest odporne na skalę.
- **Rozciągane SVG robi z kropek elipsy.** Punkty i etykiety krzywej siedzą
  w warstwie HTML pozycjonowanej procentami, nie w SVG.
- **Etykiety w gridzie nie stoją pod punktami.** Grid sześciu równych kolumn
  centruje podpisy w komórkach (8,3%, 25%…), a punkty leżą na 0%, 20%, 40%…
  Etykiety muszą używać tego samego `--x` co punkty.
- **`npx astro build` czyści `dist/`** razem ze stroną pomocniczą do zrzutów.
  Odtwarzać po każdym budowaniu, inaczej iframe łapie 404.
- **Awatary powtórzone w dwóch pozycjach obok siebie** czytają się jak błąd
  składu. Kanał do zespołu dostał własną czwórkę twarzy (`KANAL`).
