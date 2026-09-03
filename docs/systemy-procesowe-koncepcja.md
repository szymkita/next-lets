# Systemy dla kluczowych procesów — koncepcja strony

Strona: `src/pages/systemy-procesowe.astro`. Utworzona 30.08.2026.
**Pierwsza podstrona z pionu „Budujemy aplikacje"** — trzy poprzednie
(`/strategia-ai`, `/rozwiazania-ai`, `/szkolenia-ai`) należą do pionu
„Wdrażamy AI". Zmienia się tu nie tylko usługa, ale i pion, więc zmienia się
też cała lista pytań zakupowych.

## Czym się różni od `/rozwiazania-ai`

To najbliższy sąsiad i najłatwiejsza pomyłka. Granica:

| | `/rozwiazania-ai` | `/systemy-procesowe` |
|---|---|---|
| Co budujemy | **rozstrzygnięcie** wewnątrz procesu | **przebieg**: rejestr, obieg, akceptacje, integracje |
| Gdzie siedzi wartość | model podejmuje decyzję zamiast człowieka | przekazania między działami przestają istnieć |
| Miara | udział spraw zamykanych bez człowieka | **czas sprawy** od wejścia do zamknięcia |
| Rola AI | temat całej strony | element systemu, jeśli akurat się opłaca |

Rozwiązanie AI może siedzieć w takim systemie jako jeden krok — i FAQ tak
to opisuje, z linkiem — ale strona tego nie udaje i nie sprzedaje modelu
tam, gdzie wystarczy integracja.

## Decyzja pozycjonująca

Dwa argumenty, w tej kolejności. **Pierwsza wersja strony miała tylko drugi**,
przez co sprzedawała oszczędność czasu zamiast przewagi — uwaga Szymona,
słuszna, poprawione 30.08.

**1 · Przewaga.** Kluczowe procesy to te, na których firma zarabia. Wasz
sposób ich prowadzenia — reguła wyceny w głowie technologa, kolejność decyzji
wypracowana latami, wyjątki, których konkurencja nie bierze — jest przewagą,
której nie da się kupić w pudełku. **Gotowe narzędzie zawiera średnią rynku;
przewaga leży w tym, czym się od tej średniej różnicie.** System zamyka to
know-how w oprogramowaniu, więc przestaje ono zależeć od tego, kto akurat
jest w pracy, i zaczyna się skalować razem ze sprzedażą.

To zdanie o średniej rynku stoi na stronie jako **osobna linia w dużym stopniu
pisma**, zaraz pod nagłówkiem sekcji o gotowych narzędziach. Nie jest akapitem
w ścianie tekstu i nie ma być — to jest teza całej strony.

**2 · Mechanizm, czyli dowód dla argumentu pierwszego.** Gotowe narzędzia
kupuje się per dział, a proces biegnie w poprzek nich. Przekazania zostają na
ludziach i to w nich, nie w samej pracy, siedzi większość czasu sprawy. Hero
pokazuje tę cenę w dniach.

Konsekwencja dla copy: nigdzie nie mówimy, że gotowe narzędzia są słabe.
Mówimy, że są kupowane wzdłuż innej osi i że ich producent nie zna Waszych
wyjątków. To jest sprawdzalne i nie obraża nikogo, kto właśnie wdrożył ERP-a.

## Trzy rzeczy sprawdzalne przed podpisaniem umowy

1. **Pomiar czasu sprawy przed startem.** Nie czasu pracy — czasu od wejścia
   do zamknięcia, razem z całym czekaniem. Bez tej liczby nie ma czego
   porównać po wdrożeniu, a to ona, a nie godziny, jest tu produktem.
2. **Kolejne uruchomienia.** Każde wchodzi na produkcję i skraca czas
   sprawy, a po każdym można się zatrzymać bez straty tego, co działa.
   Odpowiedź na jedyny realny strach przy dedykowanym systemie: projekt na
   dwa lata, po którym nic nie stoi na produkcji. Wyceniamy jedno
   uruchomienie naraz, bo następne da się uczciwie wycenić dopiero po nim.
3. **Reguły, progi, kroki obiegu i formularze w konfiguracji.** Razem z listą
   tego, co Wasz człowiek zmienia bez nas, przechodzoną na żywo przy odbiorze.
   Druga obawa po „projekcie na dwa lata" brzmi: system zamieni się w klatkę,
   do której przy każdej zmianie trzeba wołać wykonawcę.

## Warstwa wizualna — czwarty osobny słownik w serwisie

- `/strategia-ai` — łuki, przewijany strumień, siatka stu kwadratów
- `/rozwiazania-ai` — przekrój warstw, próg pewności, tory harmonogramu
- `/szkolenia-ai` — jednostki do policzenia (ludzie, minuty)
- `/systemy-procesowe` — **czas sprawy**

Alfabetem tej strony jest **jedna oś czasu, ta sama we wszystkich rysunkach**.
Hero mierzy nią jedną ofertę, ciemny pas mierzy nią efekt każdego odcinka,
sekcja dowodów mierzy nią trzy wdrożenia. Czytelnik dostaje jedną miarę
i widzi ją trzy razy.

| Rysunek | Gdzie | Co niesie | Ruch |
|---|---|---|---|
| **Oś czasu sprawy** | hero | sześć dni roboczych od zapytania do oferty, z czego godzina to praca; pod spodem ta sama sprawa po przebudowie, **w tej samej skali** | pętla: głowica jedzie przez obie osie ze **stałą prędkością**, więc krótsza kończy się w ułamku czasu dłuższej |
| **Silosy** | sekcja o gotowych narzędziach | pięć narzędzi stoi w pionie, proces biegnie w poprzek, a cztery przerwy między nimi są bursztynowe i podpisane | odsłania się raz przy wejściu w kadr, słupek po słupku |
| **Uruchomienia** | ciemny pas | ten sam pasek czasu sprawy, kurczący się po każdym uruchomieniu | paski dojeżdżają do wartości z opóźnieniem wierszami |
| **Widoki systemu** | sekcja „Jak taki system wygląda" | cztery ekrany w poziomym pasie: karta sprawy, rejestr, kokpit, reguły | przewijanie w bok, strzałki gasną na krańcach |

**Mechanizm animacji hero jest tu zarazem danymi.** Czasy przejazdu wynikają
z tablicy `KROKI` w nagłówku pliku: postoje w dniach roboczych, praca
w minutach. Głowica jedzie liniowo, więc pełzanie przez postoje i przeskok
przez pracę nie są efektem — są proporcją. Druga oś ma 8% szerokości
pierwszej i przejeżdża ją w 8% czasu. Tego argumentu nie da się zrobić
zdaniem.

**Uczciwość rysunku.** Praca po przebudowie skraca się tylko o osiemnaście
minut, bo znika przepisywanie do arkusza — i tak jest to napisane pod
rysunkiem. Cała reszta różnicy to czekanie. Wersja, w której praca też
magicznie przyspiesza, byłaby materiałem sprzedażowym.

**Uwaga techniczna.** Kroki pracy mają `min-width: 7px`, bo przy prawdziwej
skali zajmowałyby ułamek piksela. Kosztuje to około czterech procent
szerokości ponad ich udział — to jedyne miejsce, w którym rysunek kłamie,
i jest opisane w kodzie.

## Widoki systemu — korekta z 30.08.2026

Pierwsza wersja strony nie miała ani jednego miejsca, w którym widać sam
produkt. Uzasadnienie („każdy taki system wygląda inaczej") było prawdziwe,
ale prowadziło do złego wniosku: **na stronie pionu „Budujemy aplikacje"
kupujący chce zobaczyć, co dostaje**, i żaden wykres czasu tego nie zastąpi.

**Druga korekta, tego samego dnia.** Pierwsze podejście postawiło jeden duży
ekran z czterema ponumerowanymi opisami obok i dwa mniejsze pod spodem —
razem około 1300 pikseli wysokości na sekcję, która ma być dowodem, a nie
rozdziałem. Uwaga: „zajmuje mega dużo miejsca, może jakaś karuzela w prawo".
Trafna. Cztery widoki leżą teraz w **poziomym pasie z przewijaniem** i zajmują
tyle wysokości, co jeden — około 640 pikseli razem z nagłówkiem i notą.

### Dlaczego pas, a nie siatka

- **Wysokość jest tu walutą.** Strona ma już cztery inne rysunki; sekcja
  z widokami nie może kosztować tyle, co dwie sekcje treści.
- **Poziomy pas skaluje się na ilość.** Dołożenie piątego i szóstego widoku
  nie kosztuje ani piksela wysokości.
- **Przewijanie działa bez JS.** `overflow-x` plus `scroll-snap` niosą całość;
  strzałki w nagłówku są dodatkiem dla myszy i gasną na krańcach. Poniżej
  900 px znikają, bo palec i tak przewija.
- **Pas wychodzi poza prawą krawędź kolumny treści** i następna karta wystaje
  zza krawędzi ekranu. To jedyny potrzebny sygnał, że jest dalej.

### Interfejs jest rysowany w HTML, nie wklejony jako obrazek

- nie udaje cudzego wdrożenia — nie ma ryzyka, że ktoś odczyta to jako zrzut
  z systemu konkretnego klienta;
- skaluje się i zostaje ostry na każdym ekranie, a poprawka nazwy pola to
  edycja tablicy w nagłówku pliku, nie nowy plik graficzny;
- składa się z tych samych tokenów, co reszta serwisu.

**To jest rozwiązanie tymczasowe.** Właściwe UI systemów powstaje osobno,
jako projekt sam w sobie. Kiedy będzie gotowe, podmienia się zawartość
czterech `<figure class="ui-poz">` — pas, podpisy, sterowanie i cała reszta
sekcji zostają bez zmian.

### Cztery widoki, każdy pod jedną tezę ze strony

| Widok | Co dowodzi | Gdzie ta teza stoi |
|---|---|---|
| Karta sprawy | dane przychodzą z systemów; widać, kto trzyma sprawę i od ilu godzin | silosy, hero, definicja |
| Rejestr spraw | stan wszystkich spraw w jednym miejscu, z czasem oczekiwania | powód drugi w sekcji o gotowych narzędziach |
| Kokpit | czas sprawy liczony na żywo i krok, na którym sprawy stoją | hero, ciemny pas z odcinkami |
| Ekran reguł | to zmienia Wasz człowiek bez nas | sekcja „Co zmienia Wasz człowiek" |

Podpisy pod widokami **nie opowiadają o interfejsie** — każdy jest dowodem
na twierdzenie ze strony. To jest różnica między prezentacją produktu
a argumentem. Ponumerowane opisy z pierwszej wersji wypadły razem z nią:
w pasie nie mają gdzie stać, a podpis pod kartą niesie to samo krócej.

**Spójność między widokami jest zamierzona.** Sprawa z karty (ZP-2484,
Stalprofil, czeka 4 godziny) stoi w pierwszym wierszu rejestru z tym samym
czasem oczekiwania. Kokpit pokazuje 1,5 dnia — czyli wynik po drugim odcinku
z ciemnego pasa. Proces jest ten sam, co w hero: ofertowanie u producenta
konstrukcji stalowych. Czytelnik ogląda jedno wdrożenie, nie cztery
przypadkowe ekrany.

**Uczciwość.** Pod pasem stoi zdanie, że widoki są poglądowe i że u klienta
interfejs będzie wyglądał inaczej, bo pola i kroki biorą się z jego procesu.

**Wyrównanie wysokości.** Karty rozciągają się do najwyższej (karta sprawy),
więc rejestr, kokpit i reguły mają tyle wierszy, żeby nie świecić pustym
dołem. Przy podmianie treści trzeba na to zerknąć.

**Rytm tła po zmianie.** Sekcja wzięła miętę, a sekcja o silosach zeszła na
biel — inaczej trzy jasne sekcje stałyby pod rząd. Słupki narzędzi dostały
przy tym `#fbfcfa` i jaśniejszą ramkę, żeby na bieli nie znikły. Drugi
przycisk w hero prowadzi do widoków.

## Układ sekcji i rytm tła

| # | Sekcja | Tło | Nośnik | Szkielet nagłówka |
|---|--------|-----|--------|-------------------|
| 1 | Hero | biel + poświata | **oś czasu sprawy** | H1 + akapit |
| 2 | Czym to jest | biel | definicja + kolumna z nazwanymi procesami | H2 pełną szerokością, pod nim 2 kolumny |
| 3 | Dlaczego gotowe tego nie domykają | biel | **silosy** + 3 powody | podział 2-kolumnowy |
| 3b | Jak taki system wygląda | `#f4f8f2` | **pas czterech widoków** z podpisami | nagłówek + strzałki po prawej |
| 3c | Dla jakich firm | biel | 4 warunki z numerami + wcięty blok o tym, kiedy nie | podział 2-kolumnowy |
| 4 | Uruchomienia | `#0e2b1d` | **kurczący się pasek** + co znika przy każdym | podział 2-kolumnowy, ciemna |
| 4b | Pas wezwania | biel, na liniach | zdanie i przycisk | — |
| 5 | Co zmienia Wasz człowiek | biel | 4 pozycje konfiguracji w dwóch kolumnach | podział 2-kolumnowy |
| 6 | Przykłady | `#f4f8f2` | 3 wiersze z „6 dni → 4 godziny" | podział 2-kolumnowy |
| 7 | Cytat / FAQ / kontakt | biel / `#f4f8f2` | `GcFaq`, `GcCta` | — |

Sekcja 2 ma po prawej stronie listę nazwanych procesów z działami, przez
które biegną — patrz „Granica zakresu" niżej. Czytelnik ma tam rozpoznać
swój proces w tej samej chwili, w której czyta definicję.

## Słownictwo i narracja ciemnego pasa — korekta z 30.08.2026

Pierwsza wersja nazywała etapy **odcinkami**, a nagłówek sekcji brzmiał
*Po każdym odcinku możecie przestać*. Oba do wymiany:

- **Odcinek to żargon w przebraniu prostej polszczyzny.** Brzmi jak fragment
  drogi albo serialu i nie mówi nic o wartości. Zastąpione przez
  **uruchomienie** — to nazwa zdarzenia, na którym klientowi zależy: coś
  wchodzi na produkcję. *Pierwsze uruchomienie po sześciu tygodniach* jest
  konkretne i pożądane; *odcinek 1* jest tylko numerem.
- **Nagłówek sprzedawał rezygnację.** Obietnica wyjścia stała w miejscu,
  w którym powinien stać przyrost. Przy narracji opartej na przewadze brzmi
  to szczególnie źle. Nowy nagłówek — **Każde uruchomienie skraca czas
  sprawy** — mówi to, co rysunek i tak pokazuje, i układa sekwencję jako
  narastającą korzyść.
- **Gwarancja zatrzymania się nie znika**, tylko schodzi z nagłówka do
  zamknięcia sekcji, obok wyceny. Jako fakt handlowy działa; jako tytuł
  psuła całą sekcję.
- Przy każdym uruchomieniu stoi teraz **to, co znika z pracy ludzi**
  (*znika telefon do magazynu przy każdej wycenie*) zamiast markera wyjścia.
  Te trzy zdania odsyłają wprost do bursztynowych przerw w rysunku silosów.

## Rozłożenie treści — korekta z 30.08.2026

Po dopisaniu argumentu o przewadze sekcja o tym, czym są systemy dla
kluczowych procesów, urosła do pięciu akapitów i zrobiła się ścianą.
Poprawione przez rozłożenie, nie przez skracanie:

| Treść | Gdzie trafiła | Dlaczego tam |
|---|---|---|
| definicja i czym są kluczowe procesy | zostaje w sekcji 2 | to kotwica dla modeli językowych i wyróżnionych odpowiedzi |
| **średnia rynku kontra Wasza przewaga** | sekcja 3, jako osobna linia w dużym stopniu pisma | to teza strony, w akapicie ginęła |
| know-how przestaje zależeć od jednej głowy | zamknięcie sekcji 3, po trzech powodach | jest wnioskiem z tych powodów, nie wstępem |
| procesy wspierające i automatyzacje | zamknięcie ciemnego pasa | to jest odpowiedź na pytanie, co dalej, więc należy do sekwencji uruchomień |

Reguła na przyszłość: **argument, który ma być zapamiętany, nie może być
akapitem trzecim**. Albo dostaje własny stopień pisma, albo własne miejsce
w rytmie strony.

## Sekcja o tym, dla jakich firm to jest — dodana 30.08.2026

Strona nie miała kwalifikacji, a to jedyna z czterech podstron usługowych,
w której czytelnik nie mógł sprawdzić, czy mowa o nim. Cztery warunki
z dużymi numerami, każdy sprawdzalny bez naszej pomocy:

1. zarabiacie na procesie, który przechodzi przez kilka działów
2. robicie w nim coś, czego konkurencja nie robi
3. wolumen jest taki, że dzień czekania widać w wyniku
4. sprzedaż rośnie szybciej niż zespół, który to obsługuje

**Kwalifikacja stoi na przewadze, nie na wielkości firmy.** Liczba osób
niczego tu nie rozstrzyga — rozstrzyga to, czy firma ma czym się różnić
i czy ta różnica siedzi dziś w kilku głowach. Dlatego zamiast widełek
zatrudnienia (jak na `/strategia-ai`) padają branże: produkcja, dystrybucja,
usługi.

Pod spodem wcięty, przygaszony blok o tym, kiedy to nie ma sensu — trzy
sytuacje, w tym *model biznesowy jeszcze się szuka*. Niczego nie sprzedaje
i dlatego trzyma wiarygodność czterech punktów nad sobą.

## Granica zakresu — dwie korekty z 30.08.2026

**Pierwsza: treść była nieprawdziwa.** Kolumna obok definicji mówiła, że
system *nie zastępuje ERP-a, CRM-a ani księgowości*. CRM budujemy często,
a przy ERP-ach bywamy alternatywą dla tej części, którą proces realnie
prowadzi. Zdanie psuło też tezę strony: skoro przewaga leży w tym, czym
firma się różni, to nie może być z góry wyłączona z zakresu przez nazwę
systemu, który dziś w tym miejscu stoi.

Prawdziwa granica biegnie **po przewadze, nie po kategoriach systemów**:
nie budujemy księgowości, kadr i płac, bo tam liczy się zgodność z przepisami,
a nie sposób pracy firmy. Przy reszcie decyduje to, czy dany kawałek jest
przewagą — jeśli jest nią sposób prowadzenia sprzedaży, budujemy CRM.

**Druga: to miejsce było zmarnowane.** Ta sama figura (*czego nie robimy*)
stała na stronie w trzech miejscach naraz: w kolumnie przy definicji,
w bloku o tym, kiedy to nie ma sensu, i w FAQ. Trzy powtórzenia jednego
chwytu, z czego to w kolumnie było najsłabsze — przygaszony tekst obok
najważniejszego akapitu na stronie, którego nikt nie czyta.

Kolumna niesie teraz **listę nazwanych procesów z działami, przez które
biegną**:

| Proces | Działy |
|---|---|
| Od zapytania do oferty | handel · technolog · magazyn |
| Od zamówienia do wysyłki | sprzedaż · produkcja · logistyka |
| Obieg zlecenia serwisowego | serwis · części · rozliczenia |
| Reklamacje i zwroty | obsługa · jakość · finanse |
| Od projektu do rozliczenia | sprzedaż · realizacja · finanse |

Robi trzy rzeczy naraz: czytelnik **rozpoznaje swój proces**, łańcuszki
działów **dowodzą tezy o przechodzeniu w poprzek** jeszcze przed rysunkiem
silosów, a nazwy procesów są długim ogonem dla wyszukiwarki. Przy okazji
akapit definicyjny stracił wyliczankę trzech procesów i zrobił się krótszy.

Granica zakresu została w dwóch miejscach, w których naprawdę pracuje:
w bloku o tym, kiedy to nie ma sensu (jako punkt o księgowości, kadrach
i płacach) oraz w odpowiedzi FAQ o kupowaniu gotowego systemu.

## Czego świadomie nie ma

- **Kwoty.** Tak jak na dwóch poprzednich podstronach usługowych. Miejsce
  na nią czeka w FAQ „Ile kosztuje", przy czym tutaj wycenia się **odcinek**,
  a nie całość — i to jest część oferty, nie unik.
- **Zrzutów ekranu.** Widoki są, ale rysowane w HTML — patrz sekcja niżej.
  Zrzut z cudzego wdrożenia odpada, bo sprzedawałby wygląd zamiast mechanizmu
  i udawał, że to konkretne wdrożenie.
- **Listy technologii z logotypami.** Odpowiedź poszła do FAQ jednym zdaniem:
  powszechne technologie, żeby przejęcie przez inny zespół było zwykłą
  rekrutacją.
- **Diagramu architektury.** Kusiło, ale niczego nie rozstrzyga na etapie
  zakupu. Silosy mówią to samo w języku klienta.
- **Sekcji o metodyce.** Odcinki są metodyką i mają własny ciemny pas.

## Do potwierdzenia przed publikacją

- **Cały przykład procesu** (od zapytania do oferty) i wszystkie czasy:
  sześć dni roboczych, sześćdziesiąt minut pracy, cztery godziny i czterdzieści
  dwie minuty po przebudowie. Kształt jest pewny, liczby są przykładem.
  Zmiana jednej pozycji w tablicy `KROKI` przelicza rysunek i animację.
- **Uruchomienia 6 / +5 / +4 tygodnie** oraz ich efekty (3 dni / 1,5 dnia /
  4 godziny) — założenie o kształcie usługi. Efekty są liczone tą samą skalą,
  co hero, więc muszą się z nim zgadzać.
- **Zdanie o możliwości zatrzymania się po każdym uruchomieniu** — decyzja
  handlowa Szymona. Bez niej ciemny pas zostaje opisem harmonogramu.
- **Trzy systemy w sekcji dowodów** są PRZYKŁADOWE, do podmiany razem
  z tym, co przy każdym zostało u ludzi.
- **`/og/systemy-procesowe.png`** — strona dziedziczy `/og/hub.png`.
  Naturalny kadr to obie osie czasu z hero, w stanie pełnym.

## Zmiany poza samą stroną

- `LaBase.astro` — pozycja „Systemy dla kluczowych procesów" w megamenu
  prowadzi do `/systemy-procesowe`.
- `index.astro` — to samo w megamenu oraz w pierwszym wierszu warstwy
  „Budujemy aplikacje" w sekcji S4. Atrybut `data-krok-link` zdjęty, bo
  pozycja prowadzi teraz poza stronę główną.
- `sitemap.xml.js` — nowy wpis z priorytetem 0.9.

Stan megamenu po tej zmianie: pion **„Wdrażamy AI" ma komplet trzech
podstron**, pion **„Budujemy aplikacje" ma pierwszą z trzech** (zostają
„Systemy dla Waszych klientów" i „Automatyzacje i integracje"), pion
**Guided Coding** miał swoje podstrony od początku.

## Jak podglądać animacje

Tak samo jak przy dwóch poprzednich: tymczasowa strona w `dist/`, która
ładuje podstronę w `<iframe>` i wstrzykuje
`*{animation-delay:-Xs !important;animation-play-state:paused !important}`.
Warte sprawdzenia klatki dla hero: **3,5 s** (głowica w połowie pierwszego
postoju), **8,5 s** (koniec pierwszej osi), **10,2 s** (druga oś w trakcie).

**Uwaga na pułapkę:** `npx astro build` czyści `dist/`, więc kasuje też
stronę pomocniczą. Trzeba ją odtwarzać po każdym budowaniu, inaczej iframe
łapie 404 i zrzut wychodzi pusty.

Stan bez ruchu: `--force-prefers-reduced-motion`. Widoki węższe niż 500 px
mierzy się przez `<iframe>` o zadanej szerokości.

## Pułapka, na którą straciłem czas

Trzy paski (`.od-os`, `.px-os` i wcześniej `.px-tor` na `/rozwiazania-ai`)
były `<span>`-ami bez `display:block`, więc `height` nie miał na co działać
i paski były niewidoczne — bez żadnego błędu. Przy każdym nowym pasku
sprawdzić to jako pierwsze.

---

## Korekta tekstu 31.08.2026

Przegląd wszystkich podstron usługowych pod kątem zapychaczy i formuł
powtarzanych między stronami. Co dokładnie zmienione i dlaczego:
`docs/przeglad-tekstow-podstron.md`, sekcja D.
