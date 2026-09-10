# O nas (`/dlaczego-my`) — koncepcja strony

Strona: `src/pages/dlaczego-my.astro`. **Wersja 5, napisana od zera 08.09.2026.**
Adres i linki zostają bez zmian; zmienia się tożsamość strony — z „dlaczego my"
na **„o nas, pisane o kliencie"**.

| Wersja | Czym była | Dlaczego odpadła |
|---|---|---|
| v1 · 29.08 | dziewięć sekcji: metryczka firmy, porównanie dostawców, pięć ról, roster 22 twarzy, org-chart grupy, sześć zasad, drabinka etapów, protokół przekazania, cytat i kafle liczbowe | „zbyt ciężka, zbyt wiele niepotrzebnych informacji, wygląda jak AI slop" |
| v3 · 30.08 | ta sama treść w samej typografii | „mam wrażenie, że tak jest gorsza" |
| v4 · 07.09 | strona o mechanizmie: kto trzyma klawiaturę, szyna trzech układów, karta code review, krajobraz alternatyw | „trochę dziwna — to powinno iść bardziej w stronę »O nas«, ale pisane językiem mówiącym cały czas o kliencie" |
| **v5 — obecna** | o nas, z regułą: żaden fakt o nas nie stoi sam | — |

Kopie: `docs/_kopie/dlaczego-my-przed-v4.astro` (v1),
`docs/_kopie/dlaczego-my-v4-uklady.astro` (v4),
`src/pages/dlaczego-my-v3.astro` (v3, dalej w repo).

Wysokość: v1 — 11 571 px, v4 — 6 816 px, **v5 — 7 820 px**. Wróciło to, co
buduje zaufanie (twarze), wypadło to, co było katalogiem.

---

## Skąd się wzięła v5

v4 była poprawną stroną o **mechanizmie**: kto pisze kod, jak działa code
review, gdzie wygrywa konkurencja. Wszystko prawdziwe i wszystko zimne —
czytało się jak dokumentacja systemu, a nie jak poznawanie ludzi, którym ma się
powierzyć firmę. Kupujący na tym etapie nie sprawdza architektury, tylko szuka
odpowiedzi na dwa pytania: *czy oni rozumieją, jak u mnie jest* i *czy mogę im
zaufać*.

v5 odwraca porządek: **najpierw rozpoznanie sytuacji czytelnika, potem my** —
i każdy fakt o nas ma dopisane, co z niego wynika u niego.

---

## Reguła redakcyjna całej strony

> **Żadne zdanie o nas nie stoi samo.** Jeśli do faktu o nas nie da się dopisać
> skutku po stronie klienta, ten fakt na tę stronę nie wchodzi.

Tak wypadły: historia firmy na osi czasu, lista technologii, „nasze wartości",
liczba wdrożeń podana bez wniosku.

Siedem par, w kolejności: jedno studio bez podwykonawców → Wise Group →
dwieście wdrożeń → WiseStack → **własny produkt appto.ai** → prowadzenie
zespołów, które budują same → własność repozytorium i kluczy. Produkt dostał
własny wiersz (był wcześniej wtrąceniem w wierszu o WiseStacku), bo to jedyny
fakt na stronie, który mówi, że skutki własnych decyzji ponosimy na własnym
rachunku.

Sekcja `#kim` jest wyrazem tej reguły **także w typografii**: fakt o nas leży
na lewym marginesie mniejszym stopniem, a to, co z niego wynika u klienta,
stoi obok w stopniu 21–34 px. Margines był początkowo za drobny i za jasny
(14 px, `#8b968d`) — dziś ma 15,5 px i `#5f6d64`, bo to nie jest przypis,
tylko materiał dowodowy pod każdym zdaniem. Układ wykonuje brief: strona o nas, czytana jako
strona o kliencie. Na telefonie kolejność się odwraca (`order: -1`) — duże
zdanie idzie pierwsze, fakt pod nim.

---

## Układ sekcji i rytm tła

| # | Sekcja | Tło | Nośnik |
|---|---|---|---|
| 1 | hero | biel + poświata | H1 o czytelniku, portret **Piotra Wojciuka** i jego zdanie o pierwszej rozmowie |
| 2 | `#slyszymy` | `#f4f8f2` | pięć zdań, które słyszymy w pierwszych rozmowach |
| 3 | `#kim` | biel | siedem par: fakt o nas na marginesie, skutek u klienta w dużym stopniu |
| 4 | `#ludzie` | `#0e2b1d` | opis po lewej, **pionowe spoty na zdjęcia** przez całą wysokość pasa |
| 5 | `#opinie` | `#f4f8f2` | **cudze zdania po wdrożeniu** — jeden duży cytat, jeden mniejszy, pas logotypów |
| 6 | kontakt | `GcCta` | wezwanie stoi **nad** FAQ |
| 7 | FAQ | `#f4f8f2` | cztery pytania |

Ciemny pas pada raz i bierze ludzi. Na stronie o zaufaniu najcięższym
argumentem są twarze z nazwiskami, nie zdanie o sobie.

---

## Trzy rzeczy, na których stoi zaufanie

**1 · Rozpoznanie przed argumentem (`#slyszymy`).** Pięć zdań w cudzysłowach,
bez ani jednego słowa o nas: *„Mam na biurku trzy oferty i każda mówi dokładnie
to samo"*. Czytelnik ma znaleźć tu własne zdanie, zanim usłyszy nasze.
Sekcja kończy się linijką, która nazywa regułę całej strony: *„Dalej piszemy
o sobie — z dopiskiem przy każdym zdaniu, co z niego wynika u Ciebie"*.

**Zdania są świadomie bez przypisania do osób i firm.** To parafrazy tego, co
pada w rozmowach; metryczka („dyrektor operacyjny, produkcja") zrobiłaby z nich
cytaty klientów, a wtedy muszą być prawdziwe.

**2 · Ludzie, do których masz bezpośredni dostęp.** Ciemny pas ma opis po lewej
i **pionowe spoty na zdjęcia po prawej**, biegnące przez całą wysokość pasa.
Narracja przechodziła trzy stany, wszystkie odrzucone przez Szymona:
**odpowiedzialność** („kto podpisuje umowę, odpowiada za stan projektu" —
brzmiało jak deklaracja prawna), potem **dostęp i ciągłość** („rozmawiasz
z nimi od pierwszego spotkania", „skład poznajesz przed umową") — *„to nie
jest prawda"*: pierwsza rozmowa idzie przez new business, a składu przed umową
się nie zna.

Dziś sekcja mówi o **doświadczeniu przeniesionym między firmami**: *„To ludzie,
którzy prowadzą studio i mają za sobą dziesiątki wdrożeń — w firmach różnej
wielkości i z różnych branż"*, a dalej — że podobny problem zwykle był już
gdzieś rozwiązany, razem z tym, co przy nim nie zadziałało, i że **te wnioski
wchodzą do zasad, według których powstaje każdy projekt**. To zgadza się z tym,
co mówi `/wisestack`, i jest jedyną rzeczą, którą te osoby faktycznie robią
wspólnie.

Pierwsze zdanie robi jeszcze jedną robotę: **wprost zdejmuje sugestię, że to
komplet zespołu** — czyli dokładnie to, od czego zaczęły się poprawki tej
sekcji.

**3 · Cudze zdanie na końcu (`#opinie`).** Do tego miejsca wszystko, co padło
na stronie, powiedzieliśmy o sobie sami. Sekcja domyka **klamrę z `#slyszymy`**:
tamta pokazuje zdania, od których rozmowa się zaczyna, ta — te, które padają po
wdrożeniu. Ten sam gatunek, odwrócone znaczenie, i dopiero tu pojawia się
metryczka: imię, nazwisko, firma.

Pod cytatami stał przez chwilę dopisek *„Wszystkie te zdania padły po
wdrożeniu. O tym, kiedy odradzamy start, mówimy w pierwszej rozmowie"* —
zdjęty na prośbę Szymona. **Granica nie znika ze strony**: mówi ją Piotr
w hero (*„jeśli okaże się, że nie jesteśmy dla Ciebie dobrym wyborem,
usłyszysz to jeszcze w tej samej rozmowie"*) i punkty modułu kontaktowego
(*„razem ze wskazaniem, gdzie zrobią to taniej"*, *„albo informacją, że lepiej
wrócić za kwartał"*). Sekcja z cytatami zostaje sama sobą.

---

## Warstwa wizualna — ciepło zamiast rysunku

**Na tej stronie nie ma ani jednego wykresu i to jest decyzja.** Nośnikami są
ludzie i cudze zdania. Wszystkie mechanizmy rysunkowe są zajęte przez
rodzeństwo i żaden tu nie wraca:

| Strona | Zajęte |
|---|---|
| `/wisestack` | paski modeli, pasek bramek, pas 100% |
| `/guided-coding/bez-dzialu-it` | makieta panelu z kursorem, słupki miesięcy, siatka dni |
| `/inspiracje` | delta „dziś → po" |
| `/systemy-procesowe` | oś czasu sprawy |
| v4 tej strony | szyna układów, karta code review |

Szczegóły, które musiały być poprawione po pierwszym zrzucie:

- **Zdania w `#slyszymy` bez cudzysłowów** czytały się jak nasze tezy, a nie
  jak cudze zdania. Cudzysłów jest tu całą różnicą.
- **`aspect-ratio` bez `height:auto`** nie działa, kiedy `<img>` ma atrybuty
  `width` i `height` — portret w hero rozpychał się do 1210 px wysokości.
- **Zdjęcia w `public/team/` mają wpisany jasny krążek na kwadratowym płótnie**
  i tylko 140×140 px — do dużych kadrów się nie nadają. Stąd w sekcji o ludziach
  zostały wyłącznie pliki z katalogu głównego `public/`.
- **Link w marginesie `#kim`** musi być `display:block`, bo jako `inline-block`
  doklejał się do zdania.

---

## Portret w hero: Piotr, nie Szymon

Pierwsza wersja miała w hero portret założyciela. `GcCta` — moduł kontaktowy
na dole każdej podstrony — używa **tego samego pliku** `/szymon-kita.jpg`, więc
ta sama fotografia stała na stronie dwa razy.

Zamiana na Piotra Wojciuka jest lepsza także treściowo: hero pokazuje osobę,
z którą klient rozmawia **jako pierwszą**, a założyciel zaprasza na końcu.
Zdanie Piotra niesie zrozumienie („zaczynam od pytań o proces"), a moduł
kontaktowy — zaufanie.

Przez chwilę Piotr był dopisany do `src/data/zespol.js`, bo sekcja `#ludzie`
obiecywała wtedy, że **każda** osoba przy projekcie jest na liście. Po zmianie
z 08.09 tej obietnicy nie ma, więc dopisek został cofnięty — wspólny rejestr
zostaje nietknięty (22 osoby), a ta strona nie importuje go w ogóle.

---

## Trzy podejścia do sekcji o ludziach

Ta jedna sekcja była przerabiana trzy razy i warto zapamiętać dlaczego.

| Podejście | Co to było | Dlaczego odpadło |
|---|---|---|
| 1 · rejestr | 22 twarze po 66 px, „każda osoba przy projekcie jest na tej liście" | zmuszało stronę do pokazania kompletu, a zespół po redukcji jest mniejszy |
| 2 · czwórka | cztery portrety po 172 px w jednym rzędzie, „Ludzie, którzy to budują" | *„od razu widać, że to jest jakby czteroosobowa rzecz"* — rząd portretów zawsze czyta się jako komplet |
| 3 · właściciel | jeden duży kadr, jedno zdanie, podpis | forma dobra, ale cytat zamiast opisu i miejsce tylko na jedną osobę |
| **4 · spoty** | opis po lewej, pionowe spoty na zdjęcia po prawej | — |

**Reguła, która z tego wynika:** dowolna siatka portretów odpowiada na pytanie
„ilu was jest", niezależnie od tego, co mówi nagłówek. **Pas spotów tego nie
robi** — czyta się jak kadr redakcyjny, a nie jak zespół do policzenia, i mieści
kilka osób bez deklarowania, że to komplet. Dlatego sekcja nazywa się
**„Kto stoi za Let's automate"**, a nie „kto to buduje" ani „z kim będziesz
rozmawiać" — mówi o odpowiedzialności, nie o składzie.

Cytat wypadł na rzecz opisu: dwa akapity o tym, kto podejmuje decyzje i gdzie
zostaje odpowiedzialność, robią tę samą robotę bez zawężania sekcji do jednej
osoby.

Konsekwencje:

- **Dopisek o Warszawie zdjęty.** Zaproszenie do biura ciągnęło sekcję z powrotem
  w stronę „poznaj nasz zespół".
- **Zdjęcia są czarno-białe.** `GcCta` na dole strony używa tego samego pliku
  `/szymon-kita.jpg` w kolorze; monochromatyczny kadr czyta się jak portret
  redakcyjny, a nie jak powtórka.
- **Spot jest wysoki i wąski** (ok. 1:2,4), więc potrzebuje pionowego kadru
  co najmniej 700×1600 px. Pliki z `public/team/` mają 140×140 px i się nie
  nadają — dlatego pozycje bez zdjęcia renderują się jako **oznaczone miejsce
  do podmiany**, a nie jako rozmyty portret.
- **Liczba spotów wynika z tablicy `LUDZIE`** (`--spoty` w stylach), więc
  dołożenie czwartej osoby to jeden wpis.
- **Pierwsza wersja szła do krawędzi okna** i pas czytał się jako szerszy od
  reszty strony. Dziś sekcja nie ma paddingu pionowego (stąd „przez całą
  wysokość"), ale poziomo trzyma ten sam kontener 1440 px co pozostałe sekcje.
- **O kadrze decyduje pozioma pozycja** (`poz` przy osobie): slot jest węższy
  niż każde ze źródeł, więc przycinana jest szerokość, nie wysokość. Zdjęcie
  Marcela (kwadrat, patrzy w lewo) ma `57% 50%`.
### Kadry są wyliczone, nie dobrane okiem

**Kadru w spocie nie da się ustawić CSS-em.** Slot jest węższy od każdego
źródła, więc `object-fit: cover` przycina szerokość i pokazuje **całą wysokość
pliku** — o tym, gdzie wypada twarz, decyduje wyłącznie proporcja pliku.
`object-position` steruje tylko przesunięciem w poziomie.

Cztery portrety są więc znormalizowane w plikach, do dwóch wspólnych wartości:

| | plik | rola |
|---|---|---|
| Szymon Kita | `szymon-kita-spot.jpg` 870×1376 | CEO & współwłaściciel |
| Marcel Bilski | `marcel-bilski.jpg` 1200×2526 | Tech Lead |
| Szymon Negacz | `szymon-negacz-spot.jpg` 1100×888 | Współwłaściciel |
| Jakub Markiewicz | `jakub-markiewicz.jpg` 512×500 | AI Consultant & Developer |

- **linia oczu na 30% wysokości kadru** — to ona daje wrażenie równego poziomu;
- **twarz (oczy → broda) na 16% wysokości kadru** — to ona wyrównuje wielkość.

**Automatyczny pomiar zawiódł i nie warto do niego wracać.** Detekcja szerokości
głowy przy zdjęciach do pasa łapała ramiona (Negacz), detekcja skóry gubiła
brodę (Bilski), a szukanie oczu po ciemnych plamach trafiało we włosy i oprawki.
Metoda, która zadziałała, jest prostsza: skrypt składa **arkusz kontrolny** —
cztery kadry obok siebie w proporcji slotu, z siatką co 2% wysokości — z niego
odczytuje się linię oczu i brodę, a potem jedno przeliczenie ustawia wszystkie
pliki. Dwa przebiegi wystarczyły.

Doklejanie tła u góry jest bezszwowe (górny pas ma odchylenie 3–5). Dół
Marcela trzeba dorabiać, bo jego zdjęcie to ciasny portret — pod brodą nie ma
materiału na tak wysoki kadr. Dwie pułapki:

- **Ostry rozciągnięty pas** zostawiał pionowe smugi na koszuli. Rozmycie
  gaussowskie przed rozciągnięciem czyta się jak nieostre tło.
- **Sam rozmyty pas dawał widoczny szew.** Przejście musi zaczynać się
  **jeszcze w prawdziwym zdjęciu**: od 16% wysokości kadru nad stykiem obraz
  przechodzi po krzywej smoothstep w wersję rozmytą i przyciemnioną.

Na koniec **każdy plik dostaje to samo wygaszenie dołu** (od 52% wysokości,
smoothstep do 28% jasności). Bez tego spoty kończyły się różnie: u Negacza pod
podpisem zostawało jasne tło, u pozostałych ciemne ubranie.

**Szymon ma własny plik `-spot`**: `/szymon-kita.jpg` używa `GcCta` na każdej
podstronie i nie wolno go przekadrować.

**Poniżej 760 px** cztery kolumny ścinają podpisy, więc siatka schodzi do 2×2
ze sztywną proporcją 1:2,2 — węższą niż najwęższy plik (Bilski 0,475), dzięki
czemu kadr dalej przycina szerokość i twarze zostają na tej samej wysokości.

**Przy kolejnym zdjęciu trzeba powtórzyć ten rachunek** — inaczej twarze
rozjadą się w pionie albo wielkością.

---|---|---|---|
| Szymon Kita | `szymon-kita-spot.jpg` 870×1243 | 0,345 | **0,33** |
| Marcel Bilski | `marcel-bilski.jpg` 1200×1813 | 0,410 | **0,355** |

**Linia oczu decyduje o wrażeniu równego poziomu.** Marcel ma ją 2,5% kadru
niżej, bo jest niższy od Szymona — przy identycznej wartości para wyglądała
sztucznie. Wysokości głów też są celowo różne: Marcel ma bujniejsze włosy,
więc przy równym „pudełku głowy" twarz Szymona czytała się większa.

Skrypt dokleja tło u góry (pas tła jest jednolity — odchylenie 3,4 i 4,7 —
więc powielony pierwszy wiersz nie zostawia szwu) i dociąga dół rozciągniętym
pasem z ostatnich 60 wierszy. Dwie pułapki po drodze:

- **Ostry pas zostawiał pionowe smugi** na koszuli. Rozmycie gaussowskie przed
  rozciągnięciem czyta się jak nieostre tło.
- **Sam rozmyty pas dawał widoczny szew** — nad stykiem ostra tkanina, pod nim
  płaska plama. Rozwiązaniem jest przejście, które **zaczyna się jeszcze
  w prawdziwym zdjęciu**: od 16% wysokości kadru nad stykiem obraz przechodzi
  po krzywej smoothstep w wersję rozmytą, a od styku w dół dokłada się
  przyciemnienie. Twardej linii nie ma, a dolny gradient CSS domyka resztę.

**Szymon ma własny plik `-spot`**: `/szymon-kita.jpg` używa `GcCta` na każdej
podstronie i nie wolno go przekadrować.

Plik Marcela przyszedł jako 3891×3891 px i 18 MB; na stronie leży 173 kB.
**Przy kolejnym zdjęciu trzeba powtórzyć ten rachunek** — inaczej twarze
rozjadą się w pionie.

### Piąte miejsce w układzie — trzy podejścia i wniosek

| Podejście | Co to było | Dlaczego odpadło |
|---|---|---|
| 1 | „Czego możesz się po nas spodziewać": pięć akapitów `<b>tytuł.</b> opis` na kreskach | ściana drobnego tekstu bez hierarchii — *„nieestetyczna"* |
| 2 | to samo z dużym tytułem po lewej i etykietą przy prawej krawędzi | tekst pływał w poziomie — *„okropna pod kątem wyglądu"* |
| 3 | to samo w zamkniętym białym panelu z dwiema kolumnami | forma się zgadzała, treść dalej nie — *„do wyrzucenia"* |
| **4 · cudze zdania** | jeden duży cytat, jeden mniejszy, pas logotypów | — |

**Wniosek, który przyszedł dopiero przy trzeciej próbie: problemem nie była
forma, tylko treść.** Z pięciu obietnic cztery powtarzały to, co już mówi hero
(„jedna osoba od pierwszej rozmowy") albo FAQ („stała cena za etap",
„prowizji nie bierzemy"). Sekcja nie miała czego powiedzieć, więc żadna oprawa
nie mogła jej uratować.

Zamiast szóstej wersji listy o sobie weszło **jedyne, czego nie da się napisać
samemu**: dwa prawdziwe cytaty z nazwiskiem i firmą (przeniesione 1:1 z tablicy
`OPINIE` w `index.astro`) plus pas pięciu logotypów klientów i „140+ firm" —
te same, co na stronie głównej, ale statycznie, bez pętli.

Nierówna waga cytatów jest celowa: duży niesie odpowiedzialność i drugi projekt,
mniejszy — zrozumienie potrzeb. Dwa równe kafle zrobiłyby ścianę opinii, której
playbook zabrania.

**Jedyny fakt z kasowanej sekcji bez odpowiednika gdzie indziej** — repozytorium,
klucze i dane na kontach klienta — przeszedł do `#kim` jako szósty wiersz.

Pułapka złapana po drodze: `filter` na kontenerze logotypów izoluje mieszanie,
więc `mix-blend-mode: multiply` nie wygaszało białych prostokątów wpisanych
w pliki SVG. Filtr musi siedzieć na samym `<img>`.

Rytm tła: biel → `#f4f8f2` → biel → `#0e2b1d` → `#f4f8f2` → biel (CTA) →
`#f4f8f2` (FAQ). Wysokość strony: 7 820 → **7 444 px**.



---

## Copy

**Osoba: „Ty"**, jak strona główna i `/guided-coding/bez-dzialu-it`. Bez czasu
przeszłego w drugiej osobie („zbudowałeś"), bo jest rodzajowy.

**Jedna oferta wejścia w całym serwisie:** bezpłatna diagnoza, 30 minut.
Pierwsza wersja tej strony mówiła „bezpłatna rozmowa" — cieplej, ale rozjeżdżało
się to z pozostałymi podstronami.

Wyłapane i przepisane przy przeglądzie: *„Obie odpowiedzi padają przed umową,
nie po niej"* → *„Obie odpowiedzi padają jeszcze przed umową"*. Nagłówki bez
kropek; pytajniki tylko w FAQ.

---

## Do potwierdzenia przed publikacją

- **Zdanie Piotra w hero** jest zobowiązaniem handlowym („jeśli nie jesteśmy
  dobrym wyborem, usłyszysz to jeszcze w tej samej rozmowie").
- **Pięć zdań w `#slyszymy`** — parafrazy. Do przejrzenia, czy brzmią jak to,
  co realnie pada w rozmowach.
- **„Jedna osoba od pierwszej rozmowy do wdrożenia"**, **„stała cena za etap"**,
  **„prowizji od dostawców nie bierzemy"** — deklaracje handlowe, powtórzone
  za stroną główną.
- **Tytuły w tablicy `LUDZIE`** rozjeżdżają się z `src/data/zespol.js`:
  Marcel Bilski ma tam „Automation Developer" (tu „Tech Lead"), Szymon Negacz
  „Business Advisor & Investor" (tu „Współwłaściciel"), a Jakub Markiewicz
  nie występuje w rejestrze w ogóle. Wszystkie tytuły na tej stronie pochodzą
  od Szymona (08.09) — rejestr do ujednolicenia.
- **Zdjęcie Jakuba Markiewicza** to awatar ze Slacka, 512×512 px. Wystarcza,
  bo slot przycina szerokość, ale przy okazji sesji warto je podmienić.
- **Na stronie nie pada żadna liczba osób** — strona główna mówi „30+", a tu
  czytelnik liczyłby twarze. Po redukcji zespołu warto sprawdzić, czy „30+"
  na stronie głównej i 22 wpisy w `src/data/zespol.js` są jeszcze aktualne.
- **„Ponad dwieście wdrożeń dla ponad stu czterdziestu firm"** — za stroną
  główną.
- **`/og/dlaczego-my.png`** — strona dziedziczy `/og/hub.png`.

## Otwarte

- **Nazwa pozycji w nawigacji.** `<title>` mówi już „O nas", a menu i stopka
  dalej „Dlaczego my". Adres `/dlaczego-my` warto zostawić (linki, sitemap,
  odesłanie ze strony głównej), ale etykietę w `Nawigacja.astro` i `Stopka.astro`
  można zmienić na „O nas" jedną linijką.
- **Dowód klientem.** Dalej nie ma na stronie ani jednego logotypu i ani jednego
  cytatu z nazwiskiem. Naturalne miejsce to cichy pas logotypów pod sekcją
  `#slyszymy` — ten sam, co na stronie głównej, bez nowej sekcji.

## Jak podglądać

Strona nie ma animacji z własnym zegarem, więc do zrzutów wystarczy
`--force-prefers-reduced-motion`. Widok telefonu wymaga `<iframe>` o szerokości
390 px, bo minimalna szerokość okna w headless to ~500 px. `npx astro build`
czyści `dist/`, więc strony pomocnicze trzeba odtwarzać po każdym budowaniu.
