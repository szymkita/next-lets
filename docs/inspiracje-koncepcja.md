# Inspiracje — koncepcja strony

Strona: `src/pages/inspiracje.astro`. Szósta wersja, 09.09.2026.

## Pięć odrzuconych wersji i czego uczą

| Wersja | Co to było | Reakcja |
|---|---|---|
| v1 katalog | histogram wag, 64 wiersze z filtrami | „to jest do zrzucenia całkowicie, to ma być wizualne" |
| v2 galeria | dziesięć interfejsów, każdy w osobnej sekcji | „tu nie ma żadnej wartości, żadnej inspiracji" |
| v3 przemiany | 28 delt „przed → po", bez ani jednego ekranu | „powinna być oparta o ekrany aplikacji, które rozwiązują jakieś zadania" |
| v4 showreel | playlista ośmiu ekranów w hero | „design tych przykładów wygląda jak wygenerowany przez AI"; „hero niech będzie hero" |
| v5 makiety jednej marki | dwanaście ekranów, jeden zestaw zieleni i szarości | „grafika jest poniżej hero"; „te dwanaście rzeczy wygląda jak pełny AI slop"; „wymyśl brandingi poszczególnych firm" |

Kopie leżą w `docs/_kopie/inspiracje-v1…v4` oraz
`docs/_kopie/inspiracje-v5-przed-przeprojektowaniem.astro`.

**Wniosek po pięciu podejściach:** ekran bez zadania jest ozdobą, zadanie bez
ekranu jest ulotką, ekran narysowany na skróty psuje jedno i drugie —
a dwanaście ekranów w jednej palecie psuje wszystko naraz, bo wygląda jak
jeden szablon pomalowany dwanaście razy.

---

## Sedno szóstej wersji: siedem marek zamiast jednej

To jest cała odpowiedź na zarzut o AI slop. Wcześniej każdy z dwunastu ekranów
miał tę samą zieleń, tę samą szarość, ten sam promień narożnika i ten sam krój.
Teraz każdy ekran **należy do konkretnej, wymyślonej firmy**, a firma ma własną
tożsamość wizualną:

| Marka | Branża | Akcent | Szarość | Kanty | Znak | Osobliwość |
|---|---|---|---|---|---|---|
| **Weldon** | konstrukcje stalowe, montaże | kobalt `#3358ea` | chłodna, niebieskawa | 5 / 6 / 11 px | kwadrat ze ściętym rogiem | pełny boczny pasek, rdzeń „systemu firmy" |
| **Nordis** | dystrybucja techniki grzewczej | terakota `#cf5510` | ciepła, piaskowa | 2 / 3 / 6 px | sześciokąt | pasek ikon zamiast szerokiego, liczby monospace |
| **Kalter** | zakład produkcyjny | limonka `#b9f45c` | ciemna | 3 / 4 / 10 px | kwadrat | motyw ciemny, ekran na ścianę |
| **Aeris** | serwis klimatyzacji | turkus `#0898b4` | chłodna, morska | 8 / 11 / 18 px | koło | najbardziej miękkie kanty, telefon technika |
| **Medira** | sieć przychodni | fiolet `#7549e8` | zimna, liliowa | 7 / 9 / 14 px | obły kwadrat | grafik zmian, siatka dyżurów |
| **Rejent** | kancelaria | bordo `#ab2f38` | ciepła, papierowa | 1 / 2 / 4 px | ostry kwadrat | **szeryf** w nagłówkach i w odpowiedzi |
| **Vantis** | grupa usługowa | grafit + głęboka zieleń `#0f8571` | neutralna | 7 / 9 / 12 px | koło | **monospace** we wszystkich liczbach |

Podział ekranów: Weldon 01, 02, 05, 08 (jeden system z czterech miejsc) ·
Nordis 03, 10 · Vantis 04, 12 · Kalter 06 · Aeris 07 · Medira 09 · Rejent 11.

### Jak to jest zrobione

Jedna biblioteka kontrolek (`.nv`, `.tp`, `.tb`, `.mt`, `.gd`, `.hl`, `.fn`…),
która **nie zna żadnego koloru na sztywno** — czyta wyłącznie zmienne:

```
--n0…--n6   rampa szarości (u Kaltera odwrócona)
--ac        akcent na tekst      --ac2  akcent na wypełnienie
--acm       ton pośredni         --acs / --acs2  tinty
--acr       „r,g,b" akcentu do rgba()
--am / --ams / --amb  to, czego wymaga się od człowieka
--ink       firmowa czerń        --mkbg / --mkfg / --mkr  znak firmy
--r1 / --r2 / --r3    promienie  --ffh / --ffn  krój nagłówków / liczb
--st1 / --st2         scena pod ekranem
--shr       barwa cienia
```

Klasy marek `.b-wel` … `.b-van` podmieniają cały ten zestaw. Klasa siedzi
zarówno na `.rl-e` (żeby działała w makietach bez `.ap`, jak portal klienta
i telefon technika), jak i na samej `.ap`.

**Scena pod ekranem też bierze kolor od marki.** Warstwa tła siedzi w slajdzie
(`.rl-e::before`, `inset` w minus o wartość paddingu sceny), więc przy zmianie
pozycji przenika razem z makietą — a hala Kaltera przyciemnia całą planszę.
Pułapka: `::before` jest pozycjonowany, więc bez `.rl-e > *{position:relative}`
przykrywa makietę.

### Treść poszła za marką

Nordis sprzedaje pompy ciepła i bufory, nie moduły montażowe. Aeris robi
przeglądy klimatyzacji (szczelność, wymiennik, filtry), nie odbiory montażu.
Medirze brakuje diagnosty z uprawnieniem RTG, nie elektryka z SEP. Każda firma
ma własnych ludzi i własnych klientów — a Weldon przestał być klientem samego
siebie, co było wpadką poprzedniej wersji.

---

## Hero

Makieta w v5 lądowała **pod** hero, ale nie z układu — z błędu. Brakowało
`</style>` przed drugim blokiem stylów, więc `<style is:global slot="head">`
wylądowało w treści pierwszego jako śmieć CSS i połknęło regułę
`.hr{display:grid}`. Cały arkusz makiet i strony jest teraz **jednym blokiem**.

Co jest w hero teraz:

- ekran Weldona na **własnej scenie** w barwach marki, wychodzącej poza prawy
  margines strony (`margin-right:calc(-1 * var(--gut))`, `--gut` ustawione na
  sekcji tą samą wartością, co jej padding);
- ekran jest **szerszy niż widoczna scena** (`width:max(100%,880px)` powyżej
  1040 px), żeby kolumny nie ściskały tekstu wielokropkiem;
- karta „Zatwierdzone · 14:06" wychodzi poza lewy dolny róg sceny;
- przyciski: **Umów rozmowę** (ciemny) i **Obejrzyj wdrożenia** z licznikiem
  `12` — zamiast płaskiego „Zobacz dwanaście ekranów", które „w ogóle nie
  zachęcało";
- pasek pod przyciskami zaczyna się od siedmiu kolorowych znaczników marek:
  „7 firm, 12 ekranów".

Poświata zieleni przeniosła się na lewą stronę, żeby nie biła się z chłodną
sceną po prawej.

---

## Showreel

- **Lista** pokazuje przy każdej pozycji kolorową kropkę marki i drugą linię
  „firma · pokrój". Dwanaście szarych wierszy z dwunastoma różnymi kropkami
  mówi jednym rzutem oka, że to nie jest jeden system.
- **Podpis pod sceną** zaczyna się od plakietki: znak, nazwa firmy, branża,
  pokrój — potem zdanie o zadaniu i miara „przed → po".
- Playlista przechodzi co 5,6 s; kliknięcie zatrzymuje obieg na dobre.
- Ekrany leżą w jednej komórce siatki, więc scena ma wysokość najwyższego
  z nich i nie skacze. Na telefonie widoczny jest tylko bieżący.

## Dwanaście ekranów

| # | Ekran | Firma | Pokrój |
|---|---|---|---|
| 01 | Rejestr zleceń | Weldon | panel · rdzeń systemu |
| 02 | Karta sprawy | Weldon | panel · widok szczegółu |
| 03 | Generator ofert | Nordis | kreator dokumentu |
| 04 | Akceptacja kosztów | Vantis | skrzynka decyzji |
| 05 | Planer obłożenia | Weldon | tablica planowania |
| 06 | Tablica na hali | Kalter | ekran na ścianie, motyw ciemny |
| 07 | Aplikacja technika | Aeris | telefon + ta sama sprawa w biurze |
| 08 | Portal klienta | Weldon | widok dla klienta, bez powłoki systemu |
| 09 | Grafik zmian | Medira | kalendarz zespołu |
| 10 | Rejestr reklamacji | Nordis | panel · odliczanie terminu ustawowego |
| 11 | Baza wiedzy | Rejent | wyszukiwarka z odpowiedzią i źródłem |
| 12 | Kokpit zarządu | Vantis | panel · liczby i marża z linią zera |

**Każdy ekran pokazuje coś, co nie wychodzi:** zlecenie stojące trzeci dzień,
kolizja podnośnika, wniosek czekający na zarząd, dziura w obsadzie, reklamacja
z terminem mijającym dziś, klient pod kreską, protokół zapisany offline.

## Telefon

Makiety się nie ściskają, tylko upraszczają: boczny pasek i wyszukiwarka
wypadają, kolumny drugorzędne znikają, siatki planera i grafiku gęstnieją,
dwukolumnowe układy przechodzą w jedną kolumnę (`.mst`). Scena hero rozlewa się
na całą szerokość, a karta decyzji ląduje pod ekranem.

**Pułapka złapana wcześniej:** Astro potrafi odwrócić kolejność dwóch osobnych
bloków `<style is:global>`. Dlatego cały arkusz jest w jednym bloku, a reguły
mobilne stoją w nim po regułach bazowych.

---

## !! DO PODMIANY PRZED PUBLIKACJĄ !!

**Wszystkie liczby są robocze.** Mają pochodzić z prawdziwych,
zanonimizowanych wdrożeń — branża i wielkość firmy, bez nazw.

| Gdzie | Co podmienić |
|---|---|
| `APLIKACJE` | pola `a`, `b`, `c` przy każdym z dwunastu ekranów |
| `UMIEJETNOSCI` | pola `a`, `b` przy 21 przykładach |
| `SCHODY` | rok w jednej firmie: pięć pozycji i cztery wartości miary |

Do potwierdzenia osobno:

- **pola `z`** — czy zadanie przy każdym ekranie jest opisane tak, jak mówi
  o nim klient;
- **siedem marek** — Weldon, Nordis, Kalter, Aeris, Medira, Rejent, Vantis są
  wymyślone razem ze znakami i kolorami; do sprawdzenia, czy żadna nie zderza
  się z istniejącą firmą z Waszego rynku (i tak samo klienci na ekranach:
  Prima Logistics, Zakład Kowalski, Fabryka Wschód, Termex, Delta Chłodnie,
  Instal-Bud, Hurtownia Rawa, Ciepło-Serwis, Spółdzielnia Zacisze, Osiedle
  Nadrzeczna);
- czy dwanaście ekranów to właściwy wybór i we właściwej kolejności.

## Jak podglądać

Stan końcowy: `--force-prefers-reduced-motion` (showreel staje na pierwszym
ekranie). Konkretny ekran: strona pomocnicza z `<iframe>`, która po załadowaniu
wywołuje `document.querySelectorAll('.rl-i')[N].click()` — plik roboczy, nie
trzymamy go w `public/`. Widoki poniżej 500 px: `<iframe>` o zadanej szerokości
(sam `--window-size` w headless Chrome nie zejdzie na macOS poniżej ~500 px).
Preview serwuje stronę pod `/inspiracje/` ze slashem.
