# Dlaczego my — koncepcja strony

Strona: `src/pages/dlaczego-my.astro`. Utworzona 29.08.2026.

## Problem, który ta strona rozwiązuje

Sekcja `#dlaczego-my` na stronie głównej to cztery zalety w ciemnej ramce.
Rozciągnięcie jej do osobnej strony dałoby dziesięć zalet zamiast czterech i ani
grama wiarygodności więcej — każdy konkurent z branży napisze u siebie dokładnie
te same zdania („doświadczony zespół", „partnerskie podejście", „end-to-end").

Czytelnik tej strony jest późno w lejku. Wie już, co robimy. Ma na biurku kilka
ofert i cztery pytania, których nie zada wprost:

1. czy oni to dowiozą,
2. czy zrozumieją mój biznes, czy tylko kod,
3. co się stanie, gdy skończymy współpracę,
4. czy budżet nie spuchnie po drodze.

Strona odpowiada na nie mechanizmami, nie przymiotnikami. Każdy blok jest
sprawdzalny przed podpisaniem umowy i to jest jej jedyna obietnica.

## Trzy rzeczy, których konkurencja nie skopiuje

Reszta jest wymienna. Te trzy niosą całą stronę:

1. **Krajobraz alternatyw z uczciwym „najlepszy wybór, gdy"** — cztery typy
   dostawców (software house, agencja od AI, duże doradztwo, wewnętrzne IT),
   przy każdym sytuacja, w której to on wygrywa.
2. **Nasz kafel ma to samo pole „typowy zgrzyt", co cudze.** Piszemy tam, że
   przy jednym prostym scenariuszu jesteśmy za drodzy, i że odsyłamy do
   integratorów no-code. Konkurencja tego nie przepisze, bo nie może sobie
   pozwolić na przyznanie, że gdzieś przegrywa.
3. **Sekcja „kiedy nas nie wybierać"** — cztery sytuacje, w których odsyłamy
   gdzie indziej albo prosimy o powrót później. Jedyny blok na stronie, który
   nic nie sprzedaje, i dlatego sprzedaje najwięcej.

## Układ sekcji i rytm tła

| # | Sekcja | Tło | Nośnik wizualny |
|---|--------|-----|-----------------|
| 1 | Hero | biel + zielona poświata | **metryczka firmy** zamiast makiety produktu |
| 2 | Z kim nas porównujecie | ciemne `#0e2b1d` | 4 kafle + wyróżniony kafel „my" |
| 3 | Kto siada do projektu | biel | 5 ról + roster 22 twarzy studia |
| 4 | Za studiem stoi grupa | `#f4f8f2` | klamra org-chartu nad 4 spółkami |
| 5 | Zasady + etapy | biel | 6 punktów + drabinka 4 etapów ze wspólną osią |
| 6 | Co zostaje u Was | `#f4f8f2` | **protokół przekazania** na papierze |
| 7 | Drugi projekt | biel | cytat NARS + 3 kafle liczbowe |
| 8 | Kiedy nas nie wybierać | biel, ciepła karta | `--la-risk`, spokojnie, bez dramatu |
| 9 | FAQ / 10 · Kontakt | `GcFaq` / `GcCta` | jak na podstronach Guided Coding |

Ciemne tło pada raz, na sekcji porównania — bo to ona jest centrum ciężkości
strony, a nie „dlaczego my" w ogóle.

## Dwa nawiązania do strony głównej

- **Metryczka w hero** rymuje się z rachunkiem za status quo: ten sam monospace,
  ta sama logika „sucha lista faktów do sprawdzenia".
- **Protokół przekazania** to ten sam papierowy motyw, odwrócony znaczeniowo.
  Na stronie głównej kartka liczy koszt nicnierobienia. Tutaj wylicza, co
  zostaje po zakończeniu współpracy. Kartka jest obrócona w drugą stronę
  (+0.9° zamiast −1.2°), żeby czytało się jako nawiązanie, nie jako kopia.

## Czego świadomie nie ma

- **Osi czasu historii firmy.** Kupujący nie kupuje naszej przeszłości.
- **Wartości** („rzetelność, partnerstwo, innowacyjność"). Nieweryfikowalne,
  więc puste — a strona stoi na weryfikowalności.
- **Stockowych twarzy.** Zdjęcia w rosterze są prawdziwe (przeniesione
  z `letsautomate.pl/o-nas`). Pięć ról projektowych wyżej zostaje na inicjałach,
  bo nie wiem, kto faktycznie obsadza które stanowisko w projekcie —
  przypisanie konkretnych osób do ról wymaga decyzji Szymona.
- **Osobnej sekcji o appto.ai.** Własny produkt jest argumentem w metryczce i w
  kaflu porównania; osobna sekcja przeciągałaby stronę w stronę autoprezentacji.

## Copy — czego pilnowałem

Zero triad czasownikowych, zero antytez „X, a nie Y", zero obietnic otwieranych
drugą osobą. Przy pierwszym przejściu wpadło ich siedem (m.in. „Proces ma zostać
przebudowany, a nie tylko obsłużony kodem", „Wiecie z nazwiska, kto poprowadzi
projekt") — wszystkie przepisane na zdania nazywające aktora i czynność.

## Do uzupełnienia przed publikacją

- **Odsetek klientów zamawiających drugi projekt** — kafel w sekcji 7 stoi na
  `[·]%` z dopiskiem `[do uzupełnienia]`. To najmocniejsza liczba na tej stronie
  i warto ją policzyć.
- **`/og/dlaczego-my.png`** — na razie strona dziedziczy `/og/hub.png`.
- **Obsada pięciu ról projektowych** — dziś są to same nazwy ról na inicjałach.
  Przypisanie konkretnych osób z rosteru podniesie wiarygodność najmocniej ze
  wszystkich pozostałych zmian, ale wymaga wiedzy, kto realnie wchodzi na
  projekt. W rejestrze nie ma nikogo z tytułem QA, a rola QA jest na stronie
  (i na stronie głównej) wymieniona — do rozstrzygnięcia.
- **Rozjazd 22 vs „30+ osób"** — roster pokazuje 22 twarze, metryczka mówi
  „30+ osób". Nie jest to sprzeczność (rejestr publiczny bywa niepełny), ale
  uważny czytelnik policzy.

## Skład studia (roster)

22 osoby przeniesione z `letsautomate.pl/o-nas` 29.08.2026 — nazwiska, tytuły
stanowisk i zdjęcia. Pliki leżą w `public/team/*.png`, dane w tablicy `zespol`
w nagłówku strony.

Kolejność jest ta sama, co w rejestrze na starej stronie (zarząd → doradcy →
rozwój biznesu → project management → analiza → development → design). Świadomie
nie grupuję tego we własne kategorie: porządek z rejestru sam pokazuje strukturę
studia, a wymyślone nagłówki („Analiza i projekty") byłyby moją interpretacją.
Tytuły stanowisk zostają w oryginalnym, angielskim brzmieniu — to realne nazwy
z ich wizytówek, nie do tłumaczenia.

Cztery zdjęcia przyszły w oryginalnych rozmiarach (Michał Kita 845 kB,
Marcel Bilski 554 kB, Kamil Górski 349 kB, Adam Szarzanowicz 288 kB) —
przeskalowane do 280 px. Całość zeszła z 2,2 MB do 391 kB. `TeamAvatar` dostał
`loading="lazy"`, bo roster to 22 obrazki pod zgięciem.

## Zmiany poza samą stroną

- `LaBase.astro` — nowy prop `nav` (`'uslugi' | 'dlaczego-my'`) steruje klasą
  `nav-here`; wcześniej „Usługi" były podświetlone na sztywno na każdej
  podstronie. Link „Dlaczego my" w nawigacji i stopce prowadzi do `/dlaczego-my`.
- `LaBase.astro` — dopisane zwijanie `.s2-grid` i `.s9-grid` przy 1024 px.
  `.s9-grid` (ciemna karta kontaktowa z `GcCta`) miało `1fr 760px` bez żadnej
  reguły responsywnej, więc na wąskich ekranach rozjeżdżało się także na
  podstronach Guided Coding. Naprawione przy okazji.
- `index.astro` — sekcja `#dlaczego-my` kończy się zejściem do pełnej wersji.

---

# Wersja 3 — `/dlaczego-my-v3` (wariant wizualny)

Ta sama treść co `/dlaczego-my`, inna warstwa wizualna. Obie stoją równolegle
do porównania — skoro treść jest identyczna, różnica, którą widać, jest
wyłącznie różnicą projektu.

## Skąd się wzięła

Uwaga od Szymona do v1: „ten design wygląda jak wygenerowany przez AI".
Zrzut przez headless Chrome to potwierdził liczbami — v1 ma **pięć razy ten sam
szkielet sekcji** (eyebrow + H2 po lewej + akapit po prawej + siatka równych
kart), **dwanaście zaokrąglonych kafli z ramką** i wersaliki monospace przy
każdym module.

## Co v3 robi inaczej

| Element | v1 | v3 |
|---|---|---|
| Szkielet nagłówków | 5× ten sam podział | 1× podział, reszta pełną szerokością |
| Porównanie dostawców | 4 równe kafle + piąty pod spodem | 4 ciche wiersze na liniach + nasz z akcentową krechą |
| Skład studia | 6 kolumn, awatary wyśrodkowane | 11 w rzędzie, do lewej, drobny stopień |
| Role projektowe | zielone kółka z inicjałami (samo „Q") | numery 01–05 monospace |
| Kafle Wise Group | 4 karty z ramkami + zielona pigułka | bez ramek, ciemne wypełnienie zamiast pigułki |
| „Co daje zaplecze" | 3 zaokrąglone karty | 3 kolumny na pionowych liniach |
| Liczby w dowodach | 3 karty, w tym jedna ciemna | wiersze na liniach, liczba w skali 58px |
| Hero | rząd zielonych ptaszków z hasłami | jedna cicha linijka z separatorami |
| Metryczka | radius 20px + duży cień | radius 5px, bez cienia |
| „Jedyna w Polsce…" | 15px szary, wyśrodkowany | 31px, do lewej |
| „Kiedy nie my" | do lewej jak wszystko | wcięte o kolumnę |

W liczbach: `sec-head` 5 → 1, wersaliki 4 → 2, zaokrąglone karty 12 → 6.

## Status

**Nierozstrzygnięte.** Pierwsza reakcja na v3: „mam wrażenie, że tak jest
gorsza". `/dlaczego-my` wróciło do stanu sprzed przeglądu, v3 stoi obok do
porównania i dalszych iteracji.

Warto to potraktować jako sygnał, że problemem nie były same kafle. Wersja
sprowadzona do linii i typografii jest spokojniejsza, ale traci czytelność
skanowania — cztery kafle obok siebie porównuje się wzrokiem szybciej niż
cztery wiersze pod sobą. Następna próba powinna raczej **różnicować** ciężar
sekcji (zostawić kafle tam, gdzie służą porównaniu, a rozbić je tam, gdzie są
tylko pojemnikiem na tekst) niż usuwać je wszędzie.
