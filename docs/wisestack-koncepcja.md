# WiseStack — koncepcja strony

Strona: `src/pages/wisestack.astro`, adres `/wisestack`. Pion **Know-how**
(megamenu: Know-how → Metoda). Trzy wersje w dwa dni; kopie poprzednich leżą
w `docs/_kopie/`.

| Wersja | Czym była | Dlaczego odpadła |
|---|---|---|
| v1 · `wisestack-v1-czas-do-sygnalu.astro` | whitepaper o czasie powrotu sygnału o błędzie, „dobieramy następny krok" | metoda opisana jako proces decyzyjny brzmi jak brak decyzji; język błędów zamiast możliwości |
| v2 · `wisestack-v2-manifest.astro` | manifest z sześcioma wykresami | wykresy w hero przeszkadzały, sekcja porównania była brzydka, nadtytuły i podtytuły niczego nie wnosiły |
| **v3 — obecna** | manifest z **jednym** porównaniem i sekcją o jakości | — |

## Co ma wybrzmieć

1. **To jest gotowy zestaw wyborów.** Dwanaście decyzji podjętych raz,
   wnoszonych do każdego projektu. Nie metoda dobierania kroku.
2. **Obejmuje całą drogę** — poukładanie procesu przed kodem i wszystko po
   wdrożeniu.
3. **Cały kod pisze AI, wszystkie decyzje człowiek.** Zdanie, po które sięga
   się przy cytowaniu tej strony.
4. **Jakość i bezpieczeństwo przestają zależeć od czyjejś pamięci.**

## Teza

> Cały kod pisze AI. Wszystkie decyzje podejmuje człowiek.

Pierwsze zdanie robi wrażenie, drugie zdejmuje zarzut, który po nim
przychodzi. Stoi w leadzie hero i wraca jako nagłówek ciemnego pasa.

## Układ

| # | Sekcja | Tło | Nośnik |
|---|---|---|---|
| 1 | hero | biel + poświata | nagłówek, zdanie, dwa wezwania, cztery liczby |
| 2 | `#manifest` | biel | cztery zdania z numerami |
| 3 | `#porownanie` | `#f4f8f2` | cztery wiersze z paskiem czasu |
| 4 | `#wybory` | biel | trzy kolumny po cztery wybory |
| 5 | `#convex` | biel | pas: lokup `Let's automate × Convex` + zdanie |
| 6 | `#jakosc` | `#f4f8f2` | pasek bramek + dwie kolumny konkretów |
| 6 | `#ai` | `#0e2b1d` | pasek 100% z punktami decyzji |
| 7 | `#zmiany` | biel | trzy pary „przed → dziś" |
| 8 | `#drogi` | `#f4f8f2` | rozwidlenie na pół, oba z wezwaniem |
| 9 | kontakt | biel | `GcCta` |
| 10 | FAQ | `#f4f8f2` | akordeon |

Wezwanie stoi **nad** FAQ.

## Reguły redakcyjne tej strony

Trzy rzeczy, których na tej stronie **nie ma** i nie powinno wrócić:

- **Nadtytuły wersalikami** przy nagłówkach sekcji (`EFEKTY`, `PORÓWNANIE`,
  `SKĄD BIERZE SIĘ RÓŻNICA`). Nagłówek stoi sam.
- **Podtytuły w prawej kolumnie nagłówka.** Gdzie potrzebne jest zdanie, stoi
  pod nagłówkiem, w normalnym stopniu pisma, i mówi coś konkretnego.
- **Podpisy „dane poglądowe" i „zakres porównania".** Zdjęte na wyraźną
  prośbę — konsekwencja jest taka, że **liczby na stronie muszą być prawdziwe
  albo ich nie ma**. Lista do podmiany stoi w nagłówku pliku.

Plus reguły z pamięci projektu: zero triad czasownikowych, zero antytez
„X, a nie Y", nagłówki bez kropek, żadnych siatek równych kart.

## Jedyne porównanie na stronie

Cztery drogi do tej samej aplikacji, cztery wiersze, jeden pasek na wiersz.
Wiersz WiseStacku leży na własnym paśmie z zieloną obwódką.

| Model | Czas |
|---|---|
| Klasyczny development · zespół bez AI | 30 tyg. |
| **Development z AI · bez spisanych zasad** | 15 tyg. |
| No-code · do granic platformy | 9 tyg. |
| WiseStack | 5 tyg. |

**Drugi wiersz jest całą stroną.** Klient nie zestawia nas z zespołem bez AI,
tylko z własnym zespołem, które używa AI bez spisanych zasad.

Dwie rzeczy, które z tego porównania **wypadły i nie powinny wrócić bez
powodu**:

- **„Ten sam stack z AI"** — nieprawda. Stoimy na Convexie, a typowy zespół
  nie, więc „ten sam stos" było obietnicą nie do obrony. Zostaje sam fakt,
  który ma znaczenie: AI bez zasad.
- **Druga miara w wierszu** („kolejna zmiana: 4 → 21 godzin") i zdanie
  wyjaśniające pod wykresem. Wiersz ma nieść jedną liczbę. Argument o rosnącym
  koszcie zmiany jest mocny i wart osobnego miejsca, ale nie jako dopisek
  drobnym drukiem przy pasku.

Wcześniej porównania były trzy (paski w hero, wykres faz, słupki grupowane
plus macierz) i biły się ze sobą. Wykres faz — projekt rozbity na trzy odcinki
z zielonym środkiem — wypadł jako niejasny, mimo że niósł najlepszy argument.
Jeśli kiedyś wróci, to jako osobna sekcja z własnym nagłówkiem, nie jako
dopisek do porównania.

## Ciemny pas — rysunek 100%

Pasek to jedna funkcjonalność, w całości zielona. Na nim sześć **numerowanych
białych kropek** w miejscach, gdzie rozstrzyga człowiek, a **podpisy stoją przy
swoich punktach — naprzemiennie nad i pod paskiem**. Naprzemienność jest tu
całym rozwiązaniem: sześć podpisów w jednym rzędzie nachodzi na siebie, trzy
i trzy mają po ~35% szerokości na sztukę i mieszczą się jeszcze przy 940 px.

Trzy podejścia, zanim to zadziałało:

1. Podpisy nad paskiem, wszystkie w jednym rzędzie, na cienkich kreskach —
   nieczytelne, chowały się jedna za drugą.
2. Numerowane kropki na pasku, nazwy pod spodem jako spis w trzech kolumnach —
   czytelne, ale ocenione jako **krok w tył**: podpis ma stać przy punkcie.
3. Naprzemiennie nad i pod, kreski osobno od podpisów (żeby skrajne etykiety
   dało się przesunąć do środka, a kreska została na punkcie).

Napis „Kod pisany przez AI · 100%" stoi **nad** paskiem jako linia z krechą —
na środku paska wchodził pod kropki trzecią i czwartą.

Poniżej 900 px podpisy przy osi nie mają prawa się zmieścić: zostają same
kropki, a nazwy schodzą pod pasek jako numerowany spis.

Lista „Co robi człowiek" wypadła: powtarzała te same sześć decyzji innymi
słowami.

## Pas partnerski z Convexem

Domyka sekcję dwunastu wyborów — to tam pada nazwa Convexa jako element stosu,
a tu stoi powód, dla którego ta nazwa ma wagę. **Pas, nie sekcja**, około
150 px wysokości.

Po lewej **lokup dwóch znaków**: `logo-2.svg` (nasz) × `convex-logo.svg`
(kolorowa wersja z oficjalnego zestawu, skopiowana do `public/uploads/`).
Proporcje znaków są różne — nasz jest szeroki i niski (237×41), Convex prawie
kwadratowy (382×146) — więc równe wysokości wyglądałyby źle. Dobrane optycznie:
nasz 30 px, Convex 54 px.

Po prawej: zdanie o partnerstwie zwykłym krojem (wersaliki w monospace robiły
z niego stopkę), tytuł i akapit.

Dwie rzeczy, które musiały zniknąć z pierwszej wersji:

- **Ciemny kafel z wordmarkiem tekstowym i trzy punkty** — za dużo miejsca jak
  na fakt, który potrzebuje dwóch zdań.
- **„Convex jest warstwą danych w każdym systemie, który budujemy"** —
  nieprawda. Convex stoi pod systemami, które stawiamy **na naszym stosie**,
  a nie pod wszystkim, co robimy. Dzisiejsze zdanie mówi to wprost.

Treść jest sformułowana **ostrożnie**: bez terminów reakcji, bez nazwisk i bez
obietnicy, że cokolwiek załatwimy szybciej. Mimo to jest deklaracją handlową
i musi zostać potwierdzona razem z samym zakresem partnerstwa.

## Sekcja o jakości i bezpieczeństwie

Argument: jedno i drugie przestaje zależeć od dyscypliny, bo bramki są wpisane
w projekt. Sześć bramek w poziomym pasku (typy → testy → skan → przegląd
produktu → przegląd inżynierski → **zgoda człowieka**, ostatnia na czarno),
pod nimi dwie kolumny konkretów. Bezpieczeństwo mówi o kluczach poza kodem,
imiennym dostępie, retencji danych osobowych i kopiach odtwarzanych próbnie —
rzeczach sprawdzalnych, nie o „najwyższych standardach".

## Rozwidlenie na końcu

Dwie połowy, jedna krecha między nimi, oba wyjścia kończą się wezwaniem:

- **Zlecacie nam aplikację** → powstanie w WiseStacku, bez proszenia i dopłaty
  → `#kontakt`
- **Budujecie sami** → wdrażamy WiseStack w Waszym zespole → `/guided-coding`

## Do podmiany przed publikacją

- **Wszystkie liczby**: `MODELE` (30 / 15 / 9 / 5 tygodni), `STATY`, `ZMIANY`.
  Krotności w hero muszą wychodzić z `MODELE` bez zaokrąglania: 15/5 = 3×,
  30/5 = 6×. Tygodnie w porównaniu są tu wartością **wtórną** wobec krotności
  w hero — przy podmianie zaczynać od tego, co ma stać w hero, i dopiero
  z tego liczyć tygodnie.
- **`ZMIANY`** — cztery liczby główne wyliczone z par: 41→9 to −78%,
  2,6→8,8 to 3,4×, 40→3 to −93%, 15→2 to −87%. Po zmianie pary przeliczyć
  liczbę główną, bo to ona jest tym, co ktoś sprawdzi.
- **„40+ projektów zbudowanych w WiseStacku"** w hero. **Uwaga na sprzeczność:**
  `/guided-coding`, `/guided-coding/dla-zespolow` i `/guided-coding/bez-dzialu-it`
  mówią, że WiseStack „rozwijamy od ponad 200 wdrożeń". Obie liczby mogą być
  prawdziwe (200 wdrożeń w ogóle, 40 projektów w tym stosie), ale czytane obok
  siebie wyglądają na pomyłkę. Do ujednolicenia jedną decyzją.
- **Partnerstwo z Convexem** — zakres i trzy punkty w `CONVEX`. Dziś przykładowe, a na stronie nie ma już podpisu, który
  by to sygnalizował.
- **„100% kodu pisze AI"** — deklaracja, nie pomiar.
- **Bramki i punkty bezpieczeństwa** — opisują nasz stos; do przejrzenia przez
  zespół, zanim staną się obietnicą handlową.
- **`/og/wisestack.png`** — strona dziedziczy `/og/hub.png`.

## Sekcja „Co zmieniło się u nas"

Pierwsza wersja pokazywała pary „przed → dziś" (~~9 dni~~ → 1 dzień) i została
oceniona jako słaba: pary czasów niczego nie ważą, dopóki nie wiadomo, ile to
jest w skali. Dziś każda pozycja ma **liczbę główną w procentach albo
krotności** ustawioną w wielkim stopniu pisma po lewej, a para „skąd → dokąd"
stoi pod etykietą jako dowód, że liczba skądś się wzięła.

Cztery pozycje: spadek błędów docierających do użytkowników, ile dowozi jeden
programista, czas naprawy zgłoszenia i czas wejścia nowej osoby w projekt.

Druga poprawka: **wszystkie cztery stoją w jednym rzędzie**, rozdzielone
pionowymi krechami. Wersja z czterema wierszami i liczbą w stopniu 76 px
zajmowała pół ekranu, a mówiła dokładnie tyle samo. Na tablecie schodzi do
dwóch kolumn, na telefonie do jednej.

## Pułapki złapane po drodze

- **Kontener z `overflow-x:auto` nie kurczy się bez `min-width:0`** — tabela
  rozpychała stronę do 680 px na telefonie. (Tabela już nie istnieje, ale
  reguła zostaje.)
- **Etykiety wyśrodkowane transformem wychodzą poza kadr na krańcach osi.**
  Podpisy decyzji w ciemnym pasie mają osobną warstwę kropek i chowają się na
  telefonie, wracając jako lista pod paskiem.
- **Wycinanie bloku stylów zabiera reguły używane gdzie indziej** — przy
  usuwaniu starego wykresu poleciała klasa `.pogl-j` i nic nie zgłosiło błędu.
- **Jednostka doklejana automatem daje „1 dni"** — wartości z liczebnikiem
  trzymamy jako gotowy tekst.
- **Punkty kontrolne Béziera na środku odcinka robią falę** — przy krzywych
  używać Catmull-Rom (uchwyty z różnicy sąsiadów przez sześć).

## Jak podglądać

Wszystko odsłania się raz, przy wejściu w kadr (`data-anim` + `.on`), więc do
zrzutów wystarczy `--force-prefers-reduced-motion`.
