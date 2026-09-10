# Podstrony obszarowe — koncepcja

Sześć adresów przeniesionych ze starego serwisu, poza menu głównym.
Zbudowane 10.09.2026 z jednego szablonu (`src/components/ObszarStrona.astro`)
i sześciu zestawów danych w plikach stron.

---

## Po co one są

Z `seo-migracja-analiza.md`: sześć podstron działowych daje razem **390 kliknięć
i 70 165 wyświetleń rocznie** na pozycjach 11,5–16,7. To jedyne miejsce w całym
serwisie, gdzie intencja niemarkowa spotyka się z komercyjną. Nowy serwis nie
miał dla nich odpowiednika, a `/automatyzacja-oraz-ai-w-nietypowych-procesach`
było **drugą najczęściej klikaną stroną starego serwisu po stronie głównej** —
więcej niż `/o-nas` i więcej niż którykolwiek artykuł.

| adres | klik/rok | wyśw/rok | poz |
|---|---:|---:|---:|
| `/automatyzacja-oraz-ai-w-nietypowych-procesach` | 300 | 25 687 | 16,7 |
| `/automatyzacja-w-rekrutacji-oraz-hr` | 30 | 10 389 | 14,8 |
| `/automatyzacja-w-sprzedazy-i-marketingu` | 22 | 13 116 | 14,5 |
| `/automatyzacja-w-obsludze-klienta` | 17 | 15 113 | 11,8 |
| `/automatyzacja-w-administracji` | 15 | 2 818 | 13,9 |
| `/automatyzacja-w-dashboardach-i-danych` | 6 | 3 042 | 11,5 |

Adresy zostały **bez zmiany**. Pięć z sześciu stron nie miało na starym
serwisie opisu meta.

---

## Dwie osie oferty

Podstrony usługowe dzielą ofertę według **rodzaju rezultatu** (strategia,
system, szkolenie). Te dzielą ją według **działu klienta** — czyli według osi,
którą ludzie wpisują w wyszukiwarkę.

Stąd bierze się puenta każdej z nich: sekcja „Która usługa odpowiada na to
u Was" z trzema wierszami prowadzącymi do podstron usługowych. Obszar jest
pytaniem klienta, usługa odpowiedzią. To także jedyny sposób, w jaki ten ruch
przechodzi dalej w serwisie.

---

## Decyzja o formacie

Szymon wybrał **jeden szablon i sześć zestawów danych** zamiast sześciu stron
pisanych osobno po `podstrony-uslugowe-playbook.md`. Powód: to strony warte
razem 390 kliknięć rocznie, stojące poza menu — sześciu osobnych warstw
wizualnych nikt by nie utrzymał.

Konsekwencja, którą trzeba było odrobić w zamian: skoro rytm sekcji powtarza
się sześć razy, to **szablon nie może być siatką równych kart**. Stąd cztery
różne kształty na jednej stronie:

| sekcja | kształt |
|---|---|
| hero | rachunek działu — tabelka z paskiem udziału przy każdym wierszu |
| czym jest | definicja plus kolumna wierszy na liniach |
| zastosowania | wiersze na liniach, trzy kolumny |
| ciemny pas | dwie kolumny jednej sprawy, kroki znikające przekreślone |
| która usługa | wiersze-odnośniki, dwie kolumny plus strzałka |
| kiedy nie warto | wcięty blok z krechą — jeden moment asymetrii |

Powtarza się rytm, nie forma. Tła idą biel → biel → `#f4f8f2` → `#0e2b1d` →
biel → biel → `#f4f8f2`; ciemny pas pada raz.

---

## Miara powtórzona przez stronę

Każda strona ma jedną miarę i trzyma się jej od hero do ciemnego pasa:

| strona | miara | co pokazuje ciemny pas |
|---|---|---|
| sprzedaż i marketing | czas od pytania klienta do oferty | zapytanie ofertowe, 4 h 20 min → 14 min |
| obsługa klienta | powtórzone pytanie | reklamacja mailem, 2 dni → 3 h 10 min |
| administracja | liczba par rąk na dokumencie | faktura kosztowa, 6 dni → 1 dzień |
| rekrutacja i HR | dni, przez które kandydat czeka | aplikacja → rozmowa, 9 dni → 2 dni |
| dashboardy i dane | zaufanie do liczby | sprzedaż miesięczna, 2 dni → 4 min |
| nietypowe procesy | koszt obejścia | wycena z rysunku, 7 dni → 1 dzień |

**Rachunek w hero liczy się z danych.** `wiersze` podają liczbę powtórzeń
i minuty, godziny i sumę liczy szablon, a pasek udziału bierze się z proporcji
do najdłuższej pozycji. Po zmianie liczby w tablicy wszystko przelicza się samo.

W każdym ciemnym pasie **największa pozycja to czekanie**, nie praca. To jest
wspólny argument całej szóstki i stoi w nocie pod każdym rysunkiem: pracy
własnej ubywa mniej, niż się wydaje, a różnicę robi to, że sprawa przestaje
leżeć.

---

## Co jest sprawdzalne

Trzecia kolumna w sekcji zastosowań („co zostaje sprawdzalne") istnieje po to,
żeby lista nie osunęła się w katalog życzeń, jakim była na starym serwisie.
Przy każdej pozycji stoi rzecz, którą klient może sprawdzić w systemie po
wdrożeniu — data pierwszej odpowiedzi, udział spraw zamkniętych bez człowieka,
wersja reguły przy rozliczeniu.

Każda strona ma też sekcję „Kiedy nie warto tego robić" z trzema albo czterema
prawdziwymi granicami, w tym odesłaniami do tańszych rozwiązań poza nami
(odczyt wbudowany w system księgowy, gotowe narzędzie analityczne, narzędzie
z półki przy nietypowym słownictwie).

---

## Teza strony o nietypowych procesach

Najważniejszy adres z szóstki dostał tezę z własnym miejscem w rytmie —
osobny akapit wyróżniony w sekcji definicyjnej:

> **Nietypowy jest zwykle jeden krok z całego procesu.**

Jest prawdziwa, różnicująca i niewygodna do skopiowania, bo prowadzi do
mniejszego zlecenia. Konkurencja tego nie powie. Stara strona miała w tym
miejscu pustą sekcję „Przykłady rozwiązań" — sam nagłówek, zero przykładów.

---

## Podpięcie

1. **Stopka** — nowa kolumna `OBSZARY` (`Stopka.astro`). Świadomie **nie ma ich
   w menu głównym**: oferta dzieli się według rodzaju rezultatu i ta oś zostaje
   jedyną w nawigacji. Stopka jest jedynym wewnętrznym wejściem, więc ta
   kolumna jest warunkiem, żeby adresy w ogóle się indeksowały.
   Siatka stopki urosła z pięciu kolumn do sześciu, próg zawijania z 1180 na 1320 px.
2. **Sitemapa** — sześć wpisów, nietypowe procesy z priorytetem 0.8, reszta 0.7.
3. **Dane strukturalne** — `Service`, `FAQPage` i `BreadcrumbList` na każdej,
   składane przez szablon z danych strony.

### Pułapka: przekierowania

`seo-migracja-analiza.md` zawiera **gotowy do wklejenia blok `vercel.json`**,
a w nim tymczasowe przekierowania dla tej szóstki (`/automatyzacja-w-*` →
`/automatyzacje-integracje` itd.). **Te przekierowania przesłoniłyby nowe
strony.** Zostały z tamtego bloku usunięte razem z komentarzem wyjaśniającym.
Dziś w `vercel.json` ich nie ma i nie mogą tam trafić.

---

## Czego świadomie nie ma

- **Menu głównego.** Decyzja Szymona: oferta ma jedną oś w nawigacji.
- **Strony zbiorczej `/obszary`.** Sześć adresów wchodzi z wyszukiwarki
  i ze stopki; strona-katalog byłaby siódmym adresem bez własnej intencji.
- **Kwot.** Zgodnie z regułą z playbooka kwota stoi wyłącznie na
  `/strategia-ai`, gdzie widełki są potwierdzone. W FAQ każdej strony jest
  miejsce na nią w pytaniu „Ile to kosztuje".
- **Animacji.** Rachunek jest statyczny. Przy sześciu stronach z jednego
  szablonu ruch nie niósłby argumentu, tylko koszt utrzymania.
- **Zdjęć i logotypów klientów.** Żadna z sześciu nie dokłada obrazów
  z cudzych serwerów — punkt 3 listy przed przełączeniem domeny zostaje czysty.

---

## Do potwierdzenia przed publikacją

- **Wszystkie rachunki w hero są przykładowe** i każda strona mówi to wprost
  w nocie pod tabelką. Liczby pochodzą z obserwacji, nie z pomiaru.
- **Czasy w ciemnych pasach** to założenia — do zderzenia z prawdziwym wdrożeniem.
- **Przykład wyceny z rysunku technicznego** (nietypowe procesy) jest zmyślony
  jako ilustracja. Do podmiany na prawdziwe wdrożenie, kiedy będzie zgoda klienta.
- **Podział rodzajów nietypowości** to nasza obserwacja, nie badanie.
- **Próg „siedem na dziesięć pytań powtarza się"** (obsługa klienta) — do potwierdzenia.
- **Deklaracja o niesortowaniu kandydatów przez model** (HR) — wynika z przepisów
  o decyzjach zautomatyzowanych, ale jako obietnica handlowa jest decyzją Szymona.
- **`/og/obszary.png` nie istnieje** — sześć stron dziedziczy `/og/hub.png`.
- **Formularz w `GcCta` nadal nie ma endpointu**, tak jak na pozostałych podstronach.
