# Transfer know-how — koncepcja strony

Strona: `src/pages/guided-coding/transfer-know-how.astro`. Utworzona 31.08.2026.
Trzecie drzwi Guided Codingu, po `/bez-zespolu-it` i `/dla-zespolow`. Pozycja
w megamenu („Szkolenia i transfer know-how") prowadziła dotąd na hub.

## Kierunek od Szymona

Trzy odpowiedzi przed pierwszym szkicem:

1. **Odbiorcą są obie grupy**, a podział wobec dwóch pozostałych drzwi idzie
   **po celu, nie po typie zespołu**. Tamte dzielą po tym, czy jest dział IT;
   te po tym, że chcecie przestać nas potrzebować.
2. **Kształt usługi**: „one są budowane pod klienta, indywidualnie
   projektujemy szkolenie".
3. **Żadna z trzech zaproponowanych tez nie przeszła** — teza wyszła dopiero
   z punktu drugiego.

## Dlaczego to nie jest kalka rodzeństwa

| Strona | Produkt | Główne pytanie zakupowe |
|---|---|---|
| `/bez-zespolu-it` | stała opieka | kto pilnuje, żeby to nie wybuchło |
| `/dla-zespolow` | stała opieka nad zespołem | ile z obiecywanego przyspieszenia dociera |
| `/szkolenia-ai` | zmiana zachowania ludzi | co z tego zostanie za trzy miesiące |
| **transfer know-how** | **program projektowany pod jedną firmę** | **czy to będzie o nas, czy o modelu w ogóle** |

To jedyne drzwi Guided Codingu, które **sprzedają własny koniec**. Dwa
abonamenty obok mają trwać; ten program ma się skończyć i dlatego nie
kanibalizuje tamtych. Zdanie domykające stoi w sekcji definicyjnej:
*„Program ma koniec. Po ostatniej sesji zasady zostają w Waszym repozytorium
i działają bez nas."*

## Teza

> Kategoria sprzedaje program — ten sam u każdego. Nasz nie istnieje, dopóki
> nie przeczytamy Waszego kodu.

W dużym stopniu pisma, w osobnym pasie między sekcją o powstawaniu programu
a ciemnym pasem:

> **Agendę, którą można wysłać przed obejrzeniem Waszej aplikacji, dało się
> napisać bez Was**

Teza jest niewygodna do skopiowania, bo kosztuje: żeby ją utrzymać, przed
programem musi iść płatny przegląd, a przed pierwszą rozmową nie ma czego
wysłać. Konkurencja wysyła PDF z agendą w godzinę.

## Jedna miara przez całą stronę

**Skąd wziął się każdy temat.** Liczby są spięte i wracają w trzech miejscach:

- **9 znalezisk** wychodzi z przeglądu
- **2** naprawiamy sami, bo nie ma z nich czego uczyć (jednorazowa robota)
- **7 tematów** układa program, z czego **2 wychodzą u każdego** i **5 tylko
  z Waszego kodu**

Hero pokazuje dokładnie te dziewięć wierszy. Ciemny pas rozpisuje te same
siedem sesji z uzasadnieniem i to samo oznaczenie przy dwóch powtarzalnych.
FAQ powtarza „[pięć z siedmiu]". **Zmiana którejkolwiek liczby wymaga
przeliczenia pozostałych.**

## Warstwa wizualna — czwarty osobny słownik w Guided Codingu

| Strona | Mechanizm |
|---|---|
| `/guided-coding` | krzywa tempa, dwa pasy zbiegające się, tabela vibe kontra guided |
| `/bez-zespolu-it` | lupa nad przewijającym się kodem, kalendarz dwudziestu dni, przepływ z kropką, pary słupków |
| `/dla-zespolow` | drabina sześciu poziomów z paskami i licznikiem, bramka jako karta sprawdzeń |
| **transfer know-how** | **lista, która się przestawia** + **agenda z uzasadnieniem jako artefakt** |

Para zgodna z lekcją z `/systemy-dla-klientow`: **jedna animacja z prawdziwym
ruchem i jeden artefakt**, nie dwa rysunki tego samego gatunku.

### Hero — lista, która się przestawia

Cztery akty w pętli 16,3 s:

1. **Przegląd** (0,55–2,3 s) — dziewięć znalezisk wchodzi pojedynczo z lewej,
   w kolejności, w jakiej wyszły z czytania kodu.
2. **Układanie** (3,1–5,6 s) — wiersze są **podnoszone** (biała karta, cień,
   `scale(1.014)`) i odkładane na swoich miejscach. Program układa się od góry,
   bo start liczy się z pozycji docelowej.
3. **Program** (5,8–6,9 s) — po lewej wyrasta akcentowa szyna, pod siedmioma
   pierwszymi wierszami wchodzi delikatny blok, kreska rysuje się od lewej,
   kropki zamieniają się w numery sesji, znaczniki dojeżdżają z prawej,
   dwa odrzucone wiersze bledną.
4. **Zejście** (15,0–15,8 s) — lista schodzi **od dołu**: najpierw to, co
   wypadło z programu, na końcu pierwsza sesja.

**Nic nie zdradza pointy z góry.** Do trzeciego aktu wszystkie dziewięć
wierszy wygląda identycznie: ten sam szary punkt przy każdym, ten sam kolor
tekstu, żadnych znaczników. Pierwsza wersja miała odrzucone wiersze szare od
startu — dokładnie ten błąd, który playbook wymienia po pulsie
z `/automatyzacje-integracje`.

**Uczciwość rysunku:** dwa tematy wychodzą u każdego klienta i są tak
podpisane. Bez tego rysunek byłby przechwałką, a strona, na której wszystko
jest wyjątkowe, czyta się jak materiał sprzedażowy.

**Podział ról w markupie:** zewnętrzne `.tk-w` robi wyłącznie przejazd
w pionie, wewnętrzne `.tk-in` wjazd z lewej, podniesienie i zejście. Na
jednym elemencie transformy by się nadpisały.

**Skalowanie:** wiersze siedzą absolutnie na siatce o wysokości `--rh`, więc
przejazd to całkowita wielokrotność wiersza. Rysunek skaluje się razem
z ekranem — bez `transform: scale()` na całej scenie i bez pudełka
o przeskalowanych wymiarach.

### Ciemny pas — agenda z uzasadnieniem

To jest **artefakt, nie ilustracja**: dokładnie ten dokument klient dostaje
po przeglądzie i przed decyzją. Cztery kolumny: numer, temat sesji, skąd się
wziął (miejsce w aplikacji), co po niej zostaje w aplikacji. Dwie pierwsze
pozycje mają plakietkę „wychodzi u każdego".

Reguła z playbooka o pokazywaniu produktu: kupujący szkolenie chce zobaczyć,
jak wygląda to, co kupuje. Tutaj produktem jest agenda, więc agenda jest
narysowana, a nie opisana.

## Trzy rzeczy sprawdzalne przed podpisaniem umowy

1. **Agenda z uzasadnieniem przed decyzją.** Przy każdym temacie stoi miejsce
   w Waszej aplikacji, z którego wynika. Możecie wykreślić dowolną pozycję —
   wtedy znika razem z sesją, a program robi się krótszy i tańszy.
2. **Każda sesja kończy się zmianą w aplikacji.** Widać ją w historii zmian
   z datą. Siedem sesji to siedem rzeczy naprawionych.
3. **Ostatnią sesję prowadzi Wasza osoba**, my siedzimy cicho.

Do tego zdanie o **braku prowizji od dostawców** i o tym, że kod, klucze
i konta są klienta od pierwszego dnia.

## Układ sekcji i rytm tła

| # | Sekcja | Tło | Nośnik | Szkielet nagłówka |
|---|--------|-----|--------|-------------------|
| 1 | Hero | biel + poświata | **lista, która się przestawia** | H1 lewostronny, rysunek pod spodem pełną szerokością |
| 2 | Czym jest transfer know-how | `#f4f8f2` | definicja w dużym stopniu + kolumna na kresce | H2 pełną szerokością |
| 3 | Dla kogo + czego nie musicie mieć | biel | dwie kolumny + pas na kresce | `sec-head` lewo/prawo |
| 4 | Jak powstaje program | `#f4f8f2` | cztery numerowane wiersze z kolumną kadencji | `sec-head` lewo/prawo |
| 4b | **Teza** | biel | zdanie w dużym stopniu pisma | **bez nagłówka** |
| 5 | Jak wygląda jedna sesja | biel | cztery bloki prozy na liniach | H2 pełną szerokością |
| 6 | Agenda z uzasadnieniem | `#0e2b1d` | **artefakt** | `sec-head`, ciemna |
| 7 | Co zostaje u Was | `#f4f8f2` | trzy kolumny pod grubą kreską | H2 pełną szerokością |
| 8 | Kto prowadzi sesje | biel | podział 2-kolumnowy, lista z plusami | nagłówek wewnątrz kolumny |
| 9 | Od czego zaczynamy | `#f4f8f2` | dwie **równorzędne** karty z własnymi CTA | `sec-head` lewo/prawo |
| 10 | Kiedy to nie ma sensu + cena | biel | trzy kolumny + pas ceny | `sec-head` lewo/prawo |
| 11 | CTA / FAQ | — | `GcCta`, `GcFaq` | — |

Rytm tła: biel → zielone → biel → zielone → biel → biel → **ciemny** →
zielone → biel → zielone → biel. Ciemny pas pada raz i bierze najcięższy
argument. Nigdzie nie ma trzech jasnych bloków pod rząd.

**Jeden moment asymetrii:** pas z tezą jest dosunięty do prawej i wsparty na
akcentowej kresce, z pustą lewą połową.

## Sekcja, która niczego nie sprzedaje

Jedna, sekcja 10, trzy prawdziwe granice:

- **Brak czasu w kalendarzu** — program potrzebuje [dwóch godzin tygodniowo
  przez sześć tygodni] od tych samych osób; bez tego uczciwiej jest wziąć
  prowadzenie. **Odsyła linkiem na `/bez-zespolu-it`.**
- **Aplikacja idzie do przepisania** — najpierw ta decyzja.
- **Wolicie oddać to komuś w całości** — powiemy, która nasza usługa to jest.

Trzy nagłówki celowo nie zaczynają się tym samym słowem; pierwsza wersja
miała trzy razy „Kiedy" i czytała się jak szablon.

## Czego świadomie nie ma

- **Kwoty.** Jak na wszystkich podstronach poza `/strategia-ai`. Cena zależy
  od liczby sesji i osób, więc podajemy ją po przeglądzie — a strona, która
  mówi o liczeniu, nie może zaczynać od zmyślonej liczby.
- **Agendy godzinowej.** Nikt jej nie czyta przed rozmową, a wygląda jak
  oferta na przetarg. Agenda na ciemnym pasie jest listą tematów
  z uzasadnieniem, bez godzin.
- **Certyfikatów i poziomów zaawansowania.** To miara uczestnictwa.
- **Ściany opinii i logotypów.**
- **Sekcji o dołku adopcji** — to jest własność `/szkolenia-ai` i powtórzenie
  jej tutaj zabrałoby tamtej stronie jej jedyny mocny rysunek.
- **Podziału zespołu na tych, którzy przejmą, i tych, którzy zostaną przy
  starym** — z tego samego powodu.

## Słownik, którego pilnujemy

Ten sam, co na `/bez-zespolu-it`: „zanim zobaczą to ludzie" zamiast produkcji,
„miejsce, gdzie leży kod aplikacji" zamiast repozytorium. Dodatkowo na tej
stronie:

| Zamiast | Piszemy |
|---|---|
| moduł szkoleniowy | sesja |
| uczestnicy | Wasi ludzie / Wasza osoba |
| materiały poszkoleniowe | nagrania sesji |
| standard pracy | zasady w Waszym repozytorium |

## Do potwierdzenia przed publikacją

- **Wszystkie liczby w nawiasach kwadratowych** — długość sesji [2 godziny],
  liczba sesji [7], czas przeglądu [3–5 dni], liczba osób [do sześciu],
  długość programu [6 tygodni], kadencja [2 godziny tygodniowo]. To są
  zobowiązania umowne.
- **Czy przegląd jest płatny osobno** — strona mówi „wyceniane osobno", żeby
  dało się po nim podziękować. Tak samo jak na `/bez-zespolu-it`.
- **Zdanie „ostatnią sesję prowadzi Wasza osoba"** — decyzja o kształcie
  usługi.
- **Agenda w ciemnym pasie** jest złożona z rzeczy, które w przeglądach
  widzimy najczęściej; nota pod nią mówi o tym wprost. Sprawdzić, czy nie
  przypomina sytuacji konkretnego klienta.
- **Rozszerzenia** (druga osoba przy większej grupie, analityk biznesowy,
  projektant, zbudowanie trudniejszego kawałka) — czy tak ma wyglądać model.
- **`/og/transfer-know-how.png`** — strona dziedziczy `/og/hub.png`. Naturalny
  kadr to hero w stanie końcowym, z numerami i znacznikami.

## Zmiany poza samą stroną

- `LaBase.astro` — pozycja „Szkolenia i transfer know-how" w megamenu prowadzi
  już na tę stronę zamiast na hub; doszła też pozycja w stopce.
- `index.astro` — to samo w megamenu oraz w trzecim wierszu warstwy Guided
  Coding w sekcji S4.
- `sitemap.xml.js` — nowy wpis z priorytetem 0.7.

Po tej zmianie **cały pion Guided Codingu w megamenu prowadzi na własne
podstrony** — żadna z trzech pozycji nie wraca już na hub.

## Jak podglądać animacje

Ta strona **nie używa `animation-delay`** — wszystkie czasy są zapieczone
w wygenerowanych klatkach. Dzięki temu działa najprostsza metoda: kopia
strony w `dist/` z wstrzykniętym

```css
.tk-scena *{animation-delay:-Ts !important;animation-play-state:paused !important}
```

daje dokładnie klatkę `T`, bo animacja startuje wstrzymana i nic nie zdąża
upłynąć. Do tego `.rv{opacity:1 !important;transform:none !important}`, bo
`--force-prefers-reduced-motion` w tym Chrome nie działa.

Sprawdzone przy okazji:

- **`--virtual-time-budget` nie jest wiarygodnym zegarem animacji.** Kadry
  wychodzą różne, ale nie odpowiadają zadanemu czasowi. `getAnimations()`
  wywołane z rodzica na dokumencie w `<iframe>` też nie zadziałało.
- **Minimalna szerokość okna w headless to 500 px.** Węższe widoki mierzy się
  przez `<iframe>` o zadanej szerokości; zrzut 390 px zrobiony wprost jest
  renderowany przy 500 px i przycięty, co wygląda jak przepełnienie poziome,
  którego nie ma.
- **`npx astro build` czyści `dist/`** razem ze stronami pomocniczymi.
  Odtwarzać po każdym budowaniu.

---

## Korekta tekstu 31.08.2026

Przegląd wszystkich podstron usługowych pod kątem zapychaczy i formuł
powtarzanych między stronami. Co dokładnie zmienione i dlaczego:
`docs/przeglad-tekstow-podstron.md`, sekcja D.

---

## Korekta układu 08.09.2026 — hero na dwie kolumny, agenda naprawiona

Strona szła jako jedyna z trzech drzwi bez `hero-split`: nagłówek stał
w bloku `max-width:900px`, a rysunek leżał pod nim na całą szerokość.
Skutki, obejrzane na zrzutach przy 1440 i 1280 px:

- **prawa połowa hero była pusta** — sam gradient, żadnej treści;
- **wiersz listy rozciągał się na 1440 px**, więc między tytułem („klucz do
  API w kodzie") a znacznikiem przy prawej krawędzi zostawało ponad tysiąc
  pikseli pustki. Rysunek czytał się jak pusta kartka w linie, a nie jak
  lista, która się przestawia.

Zmienione:

- hero na `hero-split` `1.04fr 1fr`, jak `/bez-zespolu-it` i `/dla-zespolow` —
  tekst po lewej, lista po prawej. Mechanizm animacji bez zmian: czasy
  liczą się z `RUCH`, pozycje z `--rh` i `--d`, więc węższa kolumna niczego
  nie przelicza. Nota `.tk-pod` zeszła pod rysunek, do prawej kolumny.
- `.tk-pod` bez `max-width:74ch` (kolumna sama trzyma miarę) i 14,5 px.

W ciemnym pasie trzy osobne usterki:

- **plakietka „wychodzi u każdego" doklejała się do ostatniego słowa
  tytułu**, kiedy tytuł się łamał (wiersz 1 i 4 poniżej 1440 px), a przy
  tytule jednowierszowym stawała pod nim. `.ag-t` jest teraz `display:block`.
- **`.ag-r` bez `align-items`** rozciągało komórki do najdłuższej, przez co
  numer sesji odjeżdżał od tytułu, do którego należy. Teraz `start`.
- **`.sec-head` spychało lead pod nagłówek**: nagłówek bez łamania ma ponad
  1300 px, więc flex nie mieścił obu w wierszu. Zamiast niego `.tk-agh` —
  siatka `1fr / 400px` wyrównana do dolnej linii tytułu.

Kolumny tabeli przeważone z `1,05 / 1,15 / 1,15` na `0,95 / 1,2 / 1,2`
i numer z 44 na 38 px: tytuły są krótkie, zdania obok długie, a poprzedni
podział dawał odwrotnie.
