# Strategia AI — koncepcja strony

Strona: `src/pages/strategia-ai.astro`. Utworzona 29.08.2026.
Pierwsza podstrona usługowa z pionu **Wdrażamy AI** — wzorzec dla dwóch kolejnych
(Indywidualne rozwiązania AI, Szkolenia i adopcja AI).

## Co pokazał research

**Kategoria jest zajęta przez dokument.** Polski rynek sprzedaje ten sam produkt
pod tą samą nazwą: audyt AI → mapa okazji → mapa drogowa → ROI. Condictor bierze
za to 2–6 tys. zł i 1–2 tygodnie, Tenesys tłumaczy różnicę „DLACZEGO/CO" kontra
„JAK", Agisona i Techguys obiecują „mapę drogową wdrożeń z najwyższym ROI".
Każda z tych stron ma warsztat, listę uszeregowaną po wartości i FAQ o tym, czy
opłata odlicza się od wdrożenia. Kolejna strona z tym samym zestawem nie ma czym
wygrać.

**Rynek zachodni płaci za to samo dziesięć razy więcej i też sprzedaje dokument.**
Assessment 5–20 tys. USD, strategia z mapą drogową 15–50 tys. USD, retainer
3–15 tys. USD miesięcznie. Reguła, która się powtarza u wszystkich: produkt
o określonym zakresie i cenie („dwutygodniowy assessment za 7 500 USD") sprzedaje
się nieporównanie lepiej niż „zajmujemy się doradztwem AI".

**Dokument jako produkt końcowy traci grunt.** Badanie MIT NANDA (2025, 300
wdrożeń) pokazało, że 95% pilotaży GenAI nie zmienia wyniku finansowego — powodem
jest integracja i proces, nie modele. To samo badanie: wdrożenia prowadzone razem
z zewnętrznym zespołem kończą się powodzeniem w 67% przypadków, robione wyłącznie
przez wewnętrzne IT — w 22%. Branżowe podsumowania roku 2026 mówią wprost, że
wygrywają ci, którzy na drugie spotkanie przychodzą z działającym prototypem.

**Z CRO:** nagłówek o wyniku zamiast opisu usługi, jedno główne wezwanie do
działania, dowód liczbowy blisko przycisku, formularz do pięciu pól. Mediana
konwersji B2B to 2,9%, dobrze zaprojektowane strony robią 5–7%.

## Decyzja pozycjonująca

Skoro dokument jest towarem, o który konkuruje kilkanaście firm w cenie 2–6 tys.
zł, to jedyną rzeczą, której one nie skopiują, jest **zespół potrafiący wdrożyć**.
Studio ma 30+ osób, własny produkt (appto.ai) i realizacje na stronie głównej.

Stąd kształt oferty: **strategia kończy się uruchomionym procesem**, nie
prezentacją. Trzeci tydzień to wdrożenie pierwszej pozycji z listy na danych
klienta. To zamyka najdroższe pytanie sprzedażowe („czy to w ogóle u nas
zadziała") jeszcze przed rozmową o dużym budżecie i wyprowadza usługę z półki,
na której leżą audyty za 3 tys. zł.

## Trzy mechanizmy, które niosą stronę

Reszta jest wymienna. Te trzy są sprawdzalne przed podpisaniem umowy i to jest
cała ich wartość:

1. **Arkusz wyliczeń z kolumną „skąd".** Sekcja 5 pokazuje jedną pozycję
   rozłożoną na czynniki: 1 240 faktur × 6,5 min = 134 h, minus 12% wyjątków,
   × 68 zł = 96 300 zł rocznie, przy nakładzie 68 000 zł daje 1,4× w pierwszym
   roku. Przy każdej liczbie wejściowej stoi jej źródło. Deklaracja, że
   benchmarków z internetu w pliku nie ma, jest sprawdzalna po dostawie.
2. **Piąte kryterium kwalifikacji: „czy regułą albo integracją taniej?".**
   Publikujemy warunek, przy którym sami odradzamy model. Konkurencja tego nie
   przepisze, bo nie może sobie pozwolić na przyznanie, że część zapytań
   powinna skończyć się integracją za mniejsze pieniądze.
3. **Uczciwe liczby w przykładzie.** W hero jedna pozycja zwraca 0,5×
   w pierwszym roku, a jedna dostaje etykietę „odradzamy teraz". Cztery pozycje
   z mnożnikiem 4× wyglądałyby jak materiał sprzedażowy; ta lista wygląda jak
   wynik liczenia.

Czwarty, słabszy, ale ważny: **specyfikacja opisana tak, żeby wycenił ją inny
dostawca**. Zdanie „możecie wdrożyć wszystko z kimś innym i nie odezwać się
więcej" jest tu tym samym chwytem, co sekcja „kiedy nas nie wybierać" na
`/dlaczego-my`.

## Warstwa wizualna — przejście v2 (29.08.2026)

Pierwsza wersja została złożona z tych samych klocków, co reszta serwisu:
wiersze na liniach, kafle, wersaliki, jeden dokument w hero. Reakcja: „strasznie
nudna ta podstrona, czuję się jakby każda nasza strona była taka sama, brak
customowych grafik, animacji, designów". Sprawiedliwa — unikanie tików
generatora zeszło do unikania rysowania czegokolwiek.

Odpowiedzią jest pięć rysunków zrobionych pod tę stronę. Każdy niesie argument,
którego akapit nie uniesie:

| Rysunek | Gdzie | Co pokazuje | Animacja |
|---|---|---|---|
| **Ścieżka procesu** (od 29.08, zastąpiła macierz) | hero | obieg faktury po przestawieniu: cztery decyzje w środku procesu, przy każdej część spraw schodzi odgałęzieniem do człowieka | zielona kometa jedzie w pętli po torze, węzły pulsują dokładnie w chwili, gdy głowica je mija (opóźnienia policzone z długości odcinków: 1,24 s / 3,15 s / 5,28 s / 7,32 s przy cyklu 11 s) |
| **Siatka stu pilotaży** | sekcja 2 | 95 szarych kwadratów i 5 zielonych — statystyka MIT jako rzecz, na którą się patrzy | szara fala wchodzi kwadrat po kwadracie, pięć zielonych zapala się na końcu |
| **Arkusz z suwakami** | sekcja 5 | stawka godzinowa i wolumen do przesunięcia, cała kolumna przelicza się na żywo | bez animacji — liczy naprawdę |
| **Sito kryteriów** | sekcja 6 | dwanaście kropek wpada, osiem zostaje na bramkach, jedna odbija w bok na piątym kryterium (integracja zamiast modelu), trzy wychodzą dołem | kropki spadają z opóźnieniem, odbita skręca po ruchu w dół |
| **Pasek trzech tygodni** | sekcja 7 | szerokość odcinka to długość etapu, nasycenie zieleni to czas po stronie klienta — widać, że najdroższy jest tydzień pierwszy | odcinki rozsuwają się od lewej |

Do tego kreska pod „już działa" w H1 (rysowana `stroke-dashoffset`, nie
podkreślenie tekstu) i liczniki, które dobijają do wartości w sekcji dowodów.

**Zmiany 29.08 wieczorem — dwa podejścia.** Najpierw macierz zwrot × gotowość
wypadła z hero (wymagała czytania osi), a na jej miejsce weszła ścieżka
procesu — obieg faktury z czterema decyzjami. Odrzucone: **pokazywało jeden
konkretny proces, a hero ma mówić o strategii, nie o proceduralnym detalu.**

Na jej miejscu stoi dziś **pole przewag**: około 120 rozproszonych punktów
(aktywność firmy), przez które przechodzi światło. Pięć miejsc zapala się
w kolejności, w jakiej dosięga je światło, i zostaje z aurą oraz falą sonaru,
a na koniec domyka się między nimi obszar. Zero podpisów, zero ramki, zero tła —
karta z hero zniknęła, lista kolejności przeniosła się do sekcji „Co zostaje".

Czasy zapłonu, aury, sonaru i domykania obszaru **są generowane w nagłówku
pliku z pozycji punktów** (`zaplon(x) = x / szerokość × 0,66`), a nie wpisywane
ręcznie — po przesunięciu punktu animacja sama się przelicza. Domknięty kształt
liczy `domkniety()` (Catmull-Rom po punktach uporządkowanych kątowo wokół
środka ciężkości), więc krzywa nigdy się nie zapętla.

**Jak podglądać klatki.** Headless Chrome robi zrzut wcześniej, niż wskazuje
`--virtual-time-budget`, więc zwykły zrzut łapie animację w losowym miejscu.
Do przeglądu faz stawiałem tymczasową stronę z pięcioma `<iframe>` na
`/strategia-ai` i wstrzykiwałem do nich `animation-delay:-Xs !important`
(ten sam origin, więc `contentDocument` jest dostępny). Po robocie kasowana.
Wszystko ma wyłącznik pod `prefers-reduced-motion` i stan końcowy czytelny
bez ruchu.

**Jak to weryfikować zrzutem.** Headless Chrome łapie kadr, zanim przejścia CSS
dobiegną końca, więc zrzut „po animacji" trzeba robić flagą
`--force-prefers-reduced-motion` (stan końcowy od razu). Minimalna szerokość
okna w headless to 500 px — węższe widoki mierzy się przez `<iframe>`
o zadanej szerokości.

## Układ sekcji i rytm tła

| # | Sekcja | Tło | Nośnik | Szkielet nagłówka |
|---|--------|-----|--------|-------------------|
| 1 | Hero | biel + poświata | **macierz priorytetyzacji** + kolejność pod nią | H1 + akapit |
| 2 | Na czym to się wykłada | `#f4f8f2` | **siatka stu pilotaży** + 3 wiersze + dwa paski 67/22 | podział 2-kolumnowy |
| 3 | Kiedy to ma sens | biel | 3 wiersze + **wcięta karta „kiedy zbędna"** | podział 2-kolumnowy |
| 4 | Co zostaje | `#f4f8f2` | ciemny pas z pilotem + 5 wierszy | pełna szerokość |
| 5 | Arkusz | biel | **arkusz z suwakami** (papier, monospace, liczy na żywo) | podział + artefakt |
| 6 | Kryteria | `#f4f8f2` | 6 wierszy + **sito kryteriów** obok | pełna szerokość |
| 7 | Przebieg | biel | **pasek trzech tygodni** + 5 wierszy z paskiem czasu | podział 2-kolumnowy |
| 8 | Dowody | `#0e2b1d` | 4 wiersze, liczby 58 px | pełna szerokość, ciemna |
| 9 | Cena | biel | ciemny kafel z kwotą + zakres | H2 w prawej kolumnie |
| 10 | Co dalej | `#f4f8f2` | 3 wiersze z kolumną meta | podział 2-kolumnowy |
| 11 | FAQ / 12 · Kontakt | `GcFaq` / `GcCta` | jak na podstronach Guided Coding | — |

Ciemne tło pada dwa razy: na pasie z pilotem (sekcja 4) i na dowodach (sekcja 8).
Oba miejsca niosą różnicę wobec konkurencji, więc dostają największy ciężar.

## Nawiązania do reszty serwisu

- **Arkusz wyliczeń** to odwrócony rachunek ze strony głównej. Rachunek liczy
  koszt nicnierobienia, arkusz liczy zwrot z jednej pozycji. Forma jest inna
  (kolumny i linijka sumy zamiast paragonu z kodem kreskowym), żeby czytało się
  jako nawiązanie, a nie kopia.
- **Skala czterech etapów** ze strony głównej zostaje niewymieniona wprost, ale
  kolejność wdrożeń jest narzędziem, które umieszcza firmę na tej skali.
- **Dowody** to te same cztery liczby, co w sekcji S6 na stronie głównej.
  Tam stoją w kaflach, tutaj w wierszach na ciemnym tle — ta sama treść czyta
  się inaczej i nie wygląda na przeklejoną.

## Czego świadomie nie ma

- **Sekcji o zespole.** Roster i role projektowe stoją na `/dlaczego-my`,
  a przypisanie osób do ról wymaga decyzji Szymona. Powielanie tego tutaj
  wydłużyłoby stronę bez jednego nowego argumentu.
- **Logotypów klientów i case study w całości.** Do potwierdzenia, które nazwy
  wolno pokazać przy tej usłudze.
- **Kalkulatora ROI liczącego „ile zaoszczędzi Twoja firma".** Suwaki w arkuszu
  robią coś innego: przeliczają **przykład z podpisanymi źródłami**, a nie
  obietnicę dla dowolnego odwiedzającego. Kalkulator na benchmarku podważałby
  zdanie, na którym stoi cała strona.
- **Słowa „transformacja" w nagłówkach.** Zostaje w stopce jako opis studia.

## Copy — czego pilnowałem

Zero triad czasownikowych, zero antytez „X, a nie Y", zero obietnic otwieranych
drugą osobą. Wpadki z pierwszego przejścia, przepisane: „przejście przez procesy,
policzenie zwrotu i uruchomienie pierwszego" (triada rzeczownikowa w leadzie
hero) oraz „Wychodzicie z listą…" jako otwarcie H1.

Test na slop w warstwie wizualnej wypada tak: pięć nagłówków pełną szerokością
kontra trzy w podziale na kolumny, osiem zaokrąglonych pojemników (z czego sześć
to artefakty: dokument, arkusz, kafel ceny), trzy dekoracyjne wersaliki. Dla
porównania odrzucona wersja `/dlaczego-my` v1 miała pięć razy ten sam szkielet,
dwanaście kafli i wersaliki przy każdym module. Wcięcie karty „kiedy strategia
jest zbędna" o jedną kolumnę jest jedynym asymetrycznym momentem strony.

## Do potwierdzenia przed publikacją

- **`[29 000] zł`** — hipoteza wyprowadzona z rynku (polskie audyty 2–6 tys. zł
  za sam dokument, zachodnie assessments 5–20 tys. USD), powiększona o tydzień
  wdrożeniowy. Nie jest to potwierdzona stawka.
- **Kształt usługi: trzy tygodnie i pilot w cenie.** To założenie robocze i to
  ono niesie całą stronę. Jeśli uruchomienie procesu nie mieści się w tej cenie,
  patrz „Wariant bez pilota" niżej.
- **Zdanie „w zeszłym roku wypadło tak przy co czwartym kandydacie"** (sekcja 6)
  — liczba do policzenia albo do usunięcia. Reszta zdania działa bez niej.
- **Liczba 312 dokumentów w pasie z pilotem** — przykład, do podmiany na wynik
  z realnego pierwszego uruchomienia, gdy taki będzie.
- **`/og/strategia-ai.png`** — strona dziedziczy `/og/hub.png`. Naturalny kadr
  to macierz z hero.
- **Formularz w `GcCta` nadal nie ma endpointu**, tak samo jak na pozostałych
  podstronach.

## Wariant bez pilota

Gdyby uruchomienie procesu miało wypaść z zakresu, do zdjęcia są: ciemny pas
w sekcji 4 (razem z kafelkiem pomiaru), etap „Tydzień 3" w sekcji 7, trzeci
punkt w liście `items` przy `GcCta` i drugi wiersz zakresu w sekcji ceny.
H1 wraca wtedy do wersji opisowej („Kolejność wdrożeń z policzonym zwrotem
z każdego kroku"), a strona schodzi do poziomu, na którym konkuruje ceną
z audytami za 2–6 tys. zł. Dlatego rekomendacja jest odwrotna: utrzymać pilot
i podnieść cenę.

## Zmiany poza samą stroną

- `LaBase.astro` — pozycja „Strategia AI" w megamenu prowadzi do
  `/strategia-ai` zamiast do `/#oferta`.
- `index.astro` — to samo w megamenu oraz w wierszu oferty w sekcji S4
  (pierwszy wiersz warstwy „Wdrażamy AI"). Atrybut `data-krok-link` zdjęty
  z pozycji w megamenu, bo prowadzi teraz poza stronę główną.

## Źródła

- MIT NANDA / GenAI Divide (2025) — 95% pilotaży bez wpływu na P&L, 67% vs 22%
  przy wsparciu zewnętrznym.
- Pickaxe, „AI Strategy Consulting: The 2026 Playbook" — przedziały cenowe,
  reguła produktu o stałym zakresie, prototyp na drugim spotkaniu.
- Condictor „Audyt AI", Tenesys „Doradztwo strategiczne AI", Techguys, Agisona —
  polski krajobraz kategorii i przedziały cenowe.
- Directive Consulting, „B2B Conversion Rate Optimization: 2026 CRO Playbook" —
  benchmarki konwersji, liczba pól formularza, kolejność typów dowodu.

---

# Wersja 2 — `/strategia-ai-v2` · lekcje z sellwise.pl/wdrozenie-ai

Sellwise to spółka z tej samej grupy, więc ich strona wdrożeniowa jest
najbliższym punktem odniesienia, jaki mamy. Stoi obok `/strategia-ai`
do porównania; treść mechanizmów jest ta sama, różnice są wypisane niżej.

## Co Sellwise robi lepiej i co z tego wzięliśmy

| Ich rozwiązanie | Nasza v1 | Co robi v2 |
|---|---|---|
| Główne wezwanie: **bezpłatna analiza, 30 minut**, cena nigdzie nie pada | jedyne wejście to faktura na [29 000] zł | wezwanie to 30 bezpłatnych minut; cena zostaje widoczna w pasku faktów i w sekcji cennika — bo jej podanie to nadal nasza przewaga |
| **Trzy formularze i siedem przycisków** rozłożonych po stronie | jeden formularz po 12 000 pikselach | blok z formularzem i twarzą Szymona wchodzi w jednej trzeciej strony (`#rozmowa`), dwa pola |
| **„Zobacz, co AI zmienia w każdym dziale"** — 6 działów × 3 konkrety | procesy tylko jako nazwy w środku wykresu | sekcja `#dzialy` z przełącznikiem: 6 działów, 18 zdań, każde o czynności, którą czytelnik wykonuje dziś ręcznie |
| **Nazwane narzędzia z logotypami** (ChatGPT, Claude, Gemini, Appto) | zero konkretu narzędziowego | sekcja `#narzedzia`; Appto z własnym sygnetem, reszta wordmarkami — podmiana na oficjalne pliki to dopisanie `logo:` w tablicy |
| **Bezpieczeństwo danych jako osobny blok** z logotypami zgodności | jedna odpowiedź w FAQ | sekcja `#bezpieczenstwo` z rysunkiem granicy infrastruktury i trzema zdaniami o tym, co wychodzi na zewnątrz |
| **Osiem twarzy z nazwiskami** („każdy etap ma swojego opiekuna") | zero twarzy poza stopką | pięć osób z rejestru studia, z prawdziwymi tytułami; obsada projektu nadal zapada na rozmowie |
| **Cztery opinie z nazwiskiem, stanowiskiem i firmą** + ściana logo | cztery anonimowe liczby | trzy prawdziwe opinie (Finerto, NARS Polska, X2O) pod liczbami + pasek klientów pod hero |
| **Sekcja mitów** osobno od FAQ | wszystko w FAQ | sekcja `#mity`: pięć obiekcji emocjonalnych, FAQ zostaje przy operacyjnych |

## Czego świadomie nie przepisujemy

- **Copy na antytezach.** Ich strona stoi na figurze „X, nie Y" („nie na
  uniwersalnym szablonie", „nie dopiero na samym końcu") — kilkadziesiąt
  wystąpień. U nas to odrzucona konstrukcja, patrz pamięć projektu.
- **Pożyczony benchmark jako dowód.** „Pracownicy odzyskują 11 godzin
  tygodniowo, badanie LSE" jest dokładnie tym, czego nasz arkusz zabrania.
  Nasza liczba ma pochodzić z pomiaru u klienta.
- **Ukryta cena.** Nigdzie u nich nie pada kwota. Podanie ceny przed rozmową
  jest jedną z trzech rzeczy, które nas odróżniają od całej półki.
- **Ilustracje dekoracyjne.** Ich rysunki są zrobione porządnie i w jednym
  stylu, ale nie niosą informacji: prostokąty podpisane „Sprint 1", robot
  w kółku, logotypy narzędzi w orbicie. Nasze rysunki mają nieść dane.

## Uczciwa ocena ich warstwy graficznej

Mają **rysunek przy prawie każdej sekcji**, w tym komplet pięciu ilustracji do
pięciu etapów wdrożenia, plus tła z delikatnym wzorem i trzy zdjęcia ludzi.
To robi wrażenie strony zaprojektowanej, a nie złożonej. Nasza przewaga leży
w tym, że nasze pięć rysunków coś liczy; ich przewaga w tym, że nie ma u nich
długich odcinków samego tekstu. v2 dokłada dwa rysunki (granica danych) i dwa
bloki wizualne (twarze, narzędzia) właśnie po to, żeby zamknąć tę lukę.

## Do rozstrzygnięcia

- **Czy bezpłatne 30 minut wchodzi do oferty.** Cała v2 stoi na tym wejściu.
  Jeśli nie wchodzi, wracamy do wezwania „Umów rozmowę" i sekcja `#rozmowa`
  traci trzy punkty o braku zobowiązań.
- **Logotypy narzędzi.** Dziś wordmarki tekstowe. Oficjalne pliki (OpenAI,
  Anthropic, Google, n8n, Make) wymagają sprawdzenia warunków użycia znaku.
- **Logotypy klientów.** Mamy opinie z nazwiskami, nie mamy zgód na znaki.
  Pasek pod hero jest dziś tekstowy.
- **Case studies z linkiem „zobacz, jak to osiągnęliśmy".** Sellwise ma cztery,
  my zero. To największa pojedyncza dziura, jaka została po tym porównaniu.

---

# Wersja 3 — `/strategia-ai-v3` · cięcie

Uwaga do v2: „strasznie długa, nic nie mówi, nie tłumaczy dobrze, wrzuciłeś
tam rzeczy, których nie potrzebujemy — przecież my nie wdrażamy gotowych
narzędzi jak Gemini".

## Błąd, który to wywołał

Sekcja „Czym pracujemy" z ChatGPT, Claude i Gemini była przepisana wprost
z Sellwise'u — **razem z ich modelem biznesowym**. Sellwise wdraża gotowe
narzędzia AI i sprzedaje ich adopcję. Let's automate projektuje i buduje
systemy pod proces klienta. Przeniesienie ich sekcji zrobiło z nas
odsprzedawcę licencji. Wypada w całości; zamiast niej w FAQ i w sekcji
„dlaczego my" stoi teraz zdanie, że nie mamy prowizji od żadnego dostawcy.

Wniosek na przyszłość: z porównania z konkurencją bierze się **mechanikę**
(gdzie stoi formularz, jak konkretny jest język), a nie **zawartość** —
ta wynika z tego, co się sprzedaje.

## Co jeszcze wypadło i dlaczego

| Element z v2 | Powód usunięcia |
|---|---|
| Macierz zwrot × gotowość w hero | wymagała czytania osi; dokument z paskami mówi to samo bez wysiłku |
| Siatka stu pilotaży (95%) | pożyczony benchmark, dokładnie ten gatunek dowodu, który sami odrzucamy |
| Lejek kryteriów | ładny rysunek dla pytania drugorzędnego; reguła została jednym akapitem |
| Przełącznik sześciu działów | 18 zdań na sekcję; zostało sześć procesów w jednej liście |
| Diagram bezpieczeństwa | zeszedł do odpowiedzi w FAQ, skąd przyszedł |
| Twarze zespołu, ściana opinii, mity | trzy sekcje, które nie odpowiadały na żadne pytanie z listy zakupowej |
| Blok konwersji w środku strony | przy stronie o połowę krótszej formularz na końcu jest w zasięgu |

## Co zostało

Dziewięć sekcji zamiast osiemnastu, około 8 500 pikseli zamiast 17 000.
Nagłówek nazywa produkt („Kolejność wdrożeń AI z kwotą przy każdej pozycji")
zamiast pozycjonować studio. Pod nim cztery liczby, które odpowiadają na całą
listę pierwszych pytań: ile trwa, ile kosztuje czasu, ile kosztuje pieniędzy,
co jest na końcu.

Dwa rysunki, oba tłumaczące bez instrukcji obsługi:

1. **Dokument w hero** — cztery pozycje, pasek o długości rocznej oszczędności,
   kwota i termin startu. Ostatnia pozycja ma najwyższy potencjał i odpada.
2. **Arkusz z suwakami** — bez zmian względem v2, bo to jedyna rzecz na stronie,
   której nie da się skopiować akapitem.

## Sekcja „Co jest w dokumencie" (30.08.2026)

Największa dziura na tej stronie: usługa sprzedaje dokument strategii,
harmonogram mówi, co „zostaje po etapie", a czytelnik ani razu tego dokumentu
nie widział. Sekcja stoi między harmonogramem a dowodami — proces kończy się
dokumentem, więc dokument pokazujemy zaraz po procesie.

Pierwsze podejście było wierną makietą jednej pozycji: cel, miara, arkusz
wyliczeń z przypisem przy każdej liczbie, werdykt, trzy zakładki do
przełączania. Odpadło z dwóch powodów. Po pierwsze, wymagało wymyślenia
kompletu liczb, których nie mamy — rachunek się spinał, ale był fikcją
podpisaną jak prawda. Po drugie, sprowadzało dokument do jednej pozycji,
podczas gdy strategia wyznacza całą drogę: kolejność na miesiące, ryzyka,
rachunek i plan pierwszego kwartału.

Zostaje artefakt, nie eksponat. Kartka pokazuje **spis części dokumentu**,
zielona linia przejeżdża w dół strony i po drodze wyostrza kolejne nagłówki —
ten sam gest, co strumień kandydatów w hero. Reszta strony zostaje nieostra,
bo treść dokumentu jest własnością klienta. Pod spodem trzy dalsze kartki
w stosie, żeby było widać, że dokument ma więcej niż jedną stronę.

Copy po lewej niesie całość: droga i kolejność, rachunek z założeniami,
ryzyka z warunkami wejścia, plan pierwszego kwartału z podziałem pracy.

Geometria animacji liczona jest w nagłówku strony (`BLOK`, `SKAN`, `WYS`),
więc opóźnienie każdego nagłówka wynika z jego pozycji na kartce i pozostaje
zsynchronizowane z linią, gdy dojdzie albo zniknie któraś część.

## Formularz w pasie konwersji (30.08.2026)

Formularz był atrapą: trzy pola bez `<form>`, przycisk jako link do kotwicy,
zero walidacji i żadnej strony po wysłaniu.

Teraz: prawdziwy `<form>` z walidacją po stronie przeglądarki (e-mail
wymagany, telefon opcjonalny ale sprawdzany na liczbę cyfr, komunikaty pod
polami), stan „Wysyłamy…" na przycisku, pułapka na boty i przekierowanie na
`/dziekujemy` po powodzeniu. Gdy wysyłka się nie uda, formularz pokazuje
telefon i adres mailowy zamiast udawać, że wszystko poszło.

Odbiór stoi w `api/kontakt.js` (funkcja Vercela obok statycznego builda).
Walidacja powtórzona po stronie serwera, bo ta w przeglądarce jest tylko
dla wygody. Kanały wysyłki włączają się zmiennymi środowiskowymi:
`WEBHOOK_URL` (docelowo scenariusz w Make), `SLACK_WEBHOOK_URL`,
`RESEND_API_KEY` + `LEAD_TO`. Dopóki żadna nie jest ustawiona, funkcja
zwraca 503 — zgłoszenie nie ma prawa zniknąć po cichu.

**Do zrobienia:** podpiąć webhook z Make i ustawić `WEBHOOK_URL` w projekcie
na Vercelu. Do tego czasu formularz kieruje na telefon i mail.
Drugi formularz na stronie (`GcCta`) nadal nie ma podpięcia — komponent jest
wspólny dla kilku podstron, więc to osobna zmiana.

---

## Korekta tekstu 31.08.2026

Przegląd wszystkich podstron usługowych pod kątem zapychaczy i formuł
powtarzanych między stronami. Co dokładnie zmienione i dlaczego:
`docs/przeglad-tekstow-podstron.md`, sekcja D.
