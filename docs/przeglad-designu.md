# Przegląd designu serwisu

13.09.2026. Oglądane z wyrenderowanych stron, nie ze źródła: pełne zrzuty
23 adresów z `sitemap.xml.js` przy 1440 px i przy 390 px, plus przejście
grepem przez `src/` tam, gdzie zrzut czegoś nie rozstrzygał.

Metoda zrzutu: headless Chrome przez CDP, `Page.captureScreenshot` z `clip`
na pełnej wysokości dokumentu, wcześniej przewinięcie stroną krokami co 2,5%
wysokości, żeby wszystkie `IntersectionObserver` zdążyły odpalić. Bez tego
przewijania połowa rysunków zostaje pusta i zrzut kłamie.

---

## Wniosek

Pojedyncza strona broni się dobrze. Typografia jest spokojna, siatka równa,
teksty gęste od faktów, a rysunki liczą prawdziwe rzeczy. Wrażenie
„wygenerowane" nie bierze się z żadnej z tych stron z osobna — bierze się
z tego, co widać dopiero, kiedy położy się je obok siebie.

**Serwis ma jeden projekt strony, rozegrany dwadzieścia trzy razy.** Ten sam
hero, ta sama poświata w prawym górnym rogu, ten sam rytm „nagłówek z lewej,
akapit z prawej", to samo zakończenie z ciemną kartą i tym samym portretem.
Klient, który otworzy dwie podstrony z megamenu, widzi dwa razy to samo
z podmienionym tekstem. To jest cała diagnoza; reszta tego dokumentu to
dowody i kolejność napraw.

Druga rzecz: **serwis nie ma ani jednego własnego zdjęcia**. Na dwudziestu
trzech stronach są cztery fotografie, jedno zdjęcie stockowe z Pexels
i pięć logotypów zaciąganych z CDN-a poprzedniej strony.

Poziom wykonania rozkłada się nierówno:

- **`/inspiracje`** — najmocniejsza strona serwisu. Ekrany wychodzą poza kadr,
  jest indeks z numeracją, są dwa dodatkowe kolory w wykresach. Jedyne
  miejsce, gdzie układ robi coś, czego nie robi nigdzie indziej.
- **sześć podstron usługowych** — porządne, ale identyczne w budowie.
- **sześć podstron obszarowych** — jeden szablon, sześć zestawów danych, zero
  ruchu i cztery warianty tej samej formy „wiersze na liniach".
- **`/dlaczego-my`, `/wisestack`, `/produkty`, `/produkty/appto`** — zero
  animacji, zero rysunku, sam tekst w siatce.
- **`/baza-wiedzy`** — spis bez jednej miniatury, przy 49 działających
  okładkach leżących w repozytorium.

---

## A · Jeden szkielet na siedemnaście stron

Największa pojedyncza przyczyna wrażenia sloptu. Siedemnaście z dwudziestu
trzech żywych adresów otwiera się dokładnie tak samo:

```
nadtytuł wersalikami →  h1 w trzech wierszach, waga 800, tracking −0.03em
                     →  akapit prowadzący
                     →  dwa przyciski (ciemny + obrysowany)
                     →  artefakt w prawej kolumnie, na białym
```

Klasa nazywa się `hero-split` (`strategia-ai`, `rozwiazania-ai`,
`szkolenia-ai`, `systemy-procesowe`, `systemy-dla-klientow`,
`automatyzacje-integracje`, `produkty/appto`, trzy strony Guided Codingu,
`ObszarStrona` = sześć obszarów), na `/produkty` to samo pod nazwą
`.prod-grid`.

Do tego **ta sama poświata w tym samym rogu**. Grep po `radial-gradient`
zwraca trzydzieści wystąpień jednego rysunku z minimalnie przesuwanymi
liczbami:

```
radial-gradient(900px 640px at 86% 2%,  rgba(0,205,119,0.13), transparent 64%)
radial-gradient(880px 520px at 88% -6%, rgba(0,205,119,0.13), transparent 62%)
radial-gradient(820px 460px at 88% 0%,  rgba(0,205,119,0.14), transparent 58%)
radial-gradient(900px 420px at 88% 4%,  rgba(0,205,119,0.16), transparent 62%)
```

To jedyny zabieg atmosferyczny w całym systemie i pada na każdej stronie,
w tym samym miejscu.

**Zakończenie jest jeszcze bardziej powtarzalne.** `GcCta` stoi na
szesnastu stronach bezpośrednio i na sześciu przez `ObszarStrona` — czyli na
wszystkich poza stroną główną, która ma własną kopię tego samego modułu.
Za każdym razem: ciemna karta `#0e2b1d`, formularz po prawej, ten sam kadr
`/szymon-kita.jpg`, te same trzy odznaki („Twoje dane bezpieczne / NDA przed
startem / Kod zostaje Wasz"), pod spodem FAQ.

Co z tym zrobić:

1. **Trzy typy hero zamiast jednego.** Propozycja podziału: *hero z artefaktem*
   (strony usługowe), *hero z pełnokadrowym ekranem wychodzącym poza siatkę*
   (produkty, inspiracje, systemy), *hero typograficzny bez rysunku*
   (obszary, baza wiedzy, dlaczego-my). Reguła: dwie sąsiadujące pozycje
   w megamenu nie mają prawa dostać tego samego typu.
2. **Poświata zostaje na jednej stronie w pionie**, reszta dostaje inny
   sposób odróżnienia góry strony — pełne tło, linia siatki, kolorowy pas.
3. **`GcCta` dostaje trzy warianty kompozycji** przy tej samej treści:
   formularz na całą szerokość bez portretu, portret po lewej z formularzem
   na ciemnym, wersja jednokolumnowa. Portret Szymona na dwudziestu dwóch
   stronach pod rząd przestaje być twarzą, a zaczyna być teksturą.

---

## B · Grafiki

> Poprawka z 13.09.2026, po uwadze Szymona („porównaj sobie strony funkcji na
> appto.ai"). Pierwsza wersja tego punktu traktowała grafiki jako higienę:
> wyrzucić stock, dorobić zdjęcia zespołu. To było źle postawione. Po
> zmierzeniu obu serwisów tym samym skryptem widać, że **brak własnego języka
> graficznego jest problemem numer jeden**, a porządki w kolorach i szkieletach
> są dopiero konsekwencją. Sekcja B2 niżej to rozstrzyga; kolejność napraw
> na końcu dokumentu jest już poprawiona.

### B1 · Inwentarz

Pełny inwentarz obrazów podlinkowanych z żywych podstron:

| Plik | Gdzie | Uwaga |
|---|---|---|
| `images.pexels.com/photos/2559941` | hero `/`, 2200 px, obrócone o −3° | zdjęcie stockowe wybrzeża, zaciągane z cudzego CDN-a przy każdym wejściu |
| `cdn.prod.website-files.com/625be9db…` × 5 | pasek logotypów `/` | logotypy klientów z CDN-a **poprzedniej strony na Webflow** |
| `/szymon-kita.jpg` | `GcCta` + strona główna | jeden kadr, 22 strony |
| `/piotr-wojciuk.jpg`, `/uploads/portret-oferta.jpg` | dlaczego-my, konsultacja | |
| `/uploads/openai-select-partner.png`, `/uploads/convex-logo.svg` | wisestack | |

Trzy rzeczy warte osobnego zdania:

**Zdjęcie z Pexels jest najbardziej „AI-slopowym" elementem serwisu.**
Wybrzeże z lotu ptaka pod nagłówkiem o oprogramowaniu to dokładnie ten sam
ruch, który robi każdy generator stron. Na telefonie zajmuje pół pierwszego
ekranu i jest pierwszą rzeczą, którą widzi klient (`src/pages/index.astro:314`).

**Logotypy klientów wiszą na CDN-ie starej strony.** Osiem `<img>` z
`cdn.prod.website-files.com` (`index.astro:449–456`). Jeśli tamten projekt
Webflow kiedyś zniknie, pasek zaufania znika razem z nim. Do tego napis mówi
„140+ firm", a logotypów jest pięć i lecą w pętli, w której przy szerokości
1440 px widać ten sam znak dwa razy w jednym kadrze.

**Nie ma ani jednego zdjęcia z pracy.** Dwadzieścia dwa portrety zespołu leżą
w `public/team/`, ale żywe podstrony nie używają żadnego poza dwoma. Firma,
która sprzedaje warsztaty, przeglądy i wdrożenia, nie pokazuje ani jednej
sali, ani jednej tablicy, ani jednego ekranu z prawdziwego spotkania.

Najprostsze porządki, niezależne od reszty punktu:

1. **Wyrzucić Pexels** (patrz B2 — to zdjęcie przegrywa nawet z własnym
   gatunkiem, bo appto używa fotografii jako rekwizytu, nie jako tapety).
2. **Przenieść logotypy do `public/uploads/klienci/`** i dołożyć tyle, ile
   naprawdę da się pokazać. Przy pięciu znakach lepiej wypada wiersz
   statyczny niż pętla, która zdradza, że to pięć.

### B2 · Porównanie z appto.ai

Zmierzone tym samym skryptem, 1440 px, po przewinięciu całej strony
(żeby odsłonić wszystko, co zasłania `IntersectionObserver`):

| Strona | % wysokości „rysowanej" | barw nasyconych | rodzin odcieni |
|---|---|---|---|
| **LA** `/szkolenia-ai` | 15% | 7 | 3 |
| **LA** `/rozwiazania-ai` | 20% | 6 | 3 |
| **LA** `/obsluga-klienta` | 29% | 5 | 2 |
| **LA** `/strategia-ai` | 29% | 7 | 3 |
| **LA** `/produkty` | 30% | 5 | 2 |
| **LA** `/inspiracje` | 35% | **32** | **8** |
| **LA** `/` | 54% | 9 | 3 |
| **appto** `/funkcje/rutyny` | 23% | 4 | 3 |
| **appto** `/funkcje/kontekst` | 22% | 7 | 5 |
| **appto** `/funkcje/projekty` | 49% | 10 | 7 |
| **appto** `/funkcje/inbox-ai` | 50% | 17 | 8 |
| **appto** `/funkcje/agenci` | 52% | 15 | 8 |
| **appto** `/` | 31% | **72** | **12** |

„% wysokości rysowanej" liczy pasma po 100 px, w których stoi obraz, SVG
albo panel z własnym tłem i cieniem lub ramką. „Barwy nasycone" to unikalne
kolory o nasyceniu powyżej 0,28, faktycznie wyrenderowane (tło, tekst, `fill`,
`stroke`, obramowanie).

**Liczba kolorów jest tu ważniejsza od procentu.** Podstrona usługowa
Let's automate renderuje pięć–siedem nasyconych barw w dwóch–trzech rodzinach
odcieni: zieleń, czasem pomarańcz plakietki, czasem niebieski. Strona funkcji
appto renderuje kilkanaście w ośmiu rodzinach, a strona główna 72 w dwunastu.
To jest różnica, którą oko czyta jako „tamto jest zaprojektowane, a to jest
złożone".

Znamienne, że jedyny wyłom po naszej stronie to `/inspiracje` — 32 barwy,
8 rodzin — i to jest zarazem jedyna podstrona, którą przy przeglądzie
zrzutów ocenia się najwyżej. Dowód, że sprawa jest do zrobienia w tym samym
stosie, bez zmiany technologii.

**Skąd u appto bierze się kolor.** Z trzech rzeczy, z których żadnej nie
mamy:

1. **Cudze znaki firmowe w pełnym kolorze.** Gmail, Dysk Google, Slack,
   HubSpot, Notion, Dropbox, Kalendarz, a przy modelach Claude, Gemini,
   Llama, Mistral, Grok. Każdy wnosi własny kolor i własną wiarygodność.
   Nasz serwis pokazuje logo dostawcy dokładnie raz, na `/wisestack`
   (OpenAI, Convex), i nigdzie indziej — choć piszemy o wpinaniu AI
   w cudze systemy na sześciu podstronach.
2. **Rodzina obiektów z własną tożsamością.** Na `/funkcje/agenci` każdy
   agent ma kafel z innym pastelowym gradientem, własnym glifem i doczepionymi
   plakietkami narzędzi. Dziewięć kafli obok siebie czyta się jak katalog
   postaci. Nasz odpowiednik takiej sekcji to wiersze na liniach.
3. **Żółty blok jako przerywnik.** Wraca na każdej stronie funkcji raz,
   zwykle przy wezwaniu. Jedna barwa spoza palety bazowej wystarcza, żeby
   strona przestała być biało-szara.

**Gatunek rysunku, nie ilość.** To jest sedno. Nasze rysunki są prawie
wyłącznie **tabelami i wykresami** — rachunek godzin, paski udziału, oś
czasu sprawy, siatka stu kwadratów. Rysunki appto są w połowie **scenami
i obiektami**:

- `/funkcje/kontekst` — zdanie „appto działa jak drogowskaz" jest narysowane
  jako **prawdziwy drogowskaz**: czarne tabliczki-strzałki na słupie, każda
  z ikoną narzędzia i prawdziwą ścieżką pliku („Dysk zespołu / Sprzedaż /
  Cennik 2026.xlsx").
- `/` — hero to **pulpit macOS**: tapeta z Yosemite, ikony folderów i plików
  (`raport.xlsx`, `oferta.pdf`, `spotkanie.docx`) rozrzucone po biurku,
  a na środku okno przeglądarki z konfiguracją agenta.
- `/funkcje/agenci` — sekwencja trzech paneli **ZLECENIE → W TLE → WYNIK**,
  z godzinami 18:04 i 18:45 w rogach.

Warto zauważyć, że **appto też używa zdjęcia góry** — tyle że jako tapety
pulpitu, czyli rekwizytu, który coś znaczy. Nasze zdjęcie z Pexels leży pod
nagłówkiem i nie znaczy nic. Ten sam gatunek materiału, dwa różne użycia.

**Nawet we wspólnym gatunku appto dokłada warstwę.** Sekcja „Nie musicie
tego oglądać" na `/funkcje/inbox-ai` to dokładnie ten sam pomysł, co nasza
oś czasu sprawy na `/systemy-procesowe`: dwa tory, praca kontra czekanie.
Różnica w wykonaniu: tam czekanie ma **teksturę w ukośne paski**, bloki mają
podpisy w środku („piszecie", „czekacie", „kopiujecie"), pod spodem stoi
legenda z próbkami, a w drugim torze siedzi pływająca plakietka „robicie
swoje — appto pracuje w tle". U nas te same dwa tory to płaskie zielone paski.

### B2a · Wariant do porównania: `/rozwiazania-ai-v2`

Szkic trzech gatunków na jednej stronie (14.09.2026). `noindex`, poza
sitemapą, stoi obok v1 pod `/rozwiazania-ai-v2`.

**Treść jest identyczna** — te same nagłówki, akapity, warstwy, próg,
harmonogram, przykłady i FAQ. Zmienia się wyłącznie język graficzny, żeby
porównanie miało jedną zmienną.

| | v1 | v2 |
|---|---|---|
| barw nasyconych | 6 | **24** |
| rodzin odcieni | 3 | **8** |
| % wysokości „rysowanej" | 20% | 24% |
| gatunki rysunku | pomiar ×4 | scena, ekran, pomiar |

Co się zmieniło:

- **Hero — scena.** Przekrój warstw zamieniony w „szafę rozwiązania":
  siedem modułów o wysokości równej udziałowi w czasie budowy, a model jako
  **wyjmowany kartridż**. Jeden rysunek niesie teraz trzy zdania, które w v1
  były rozrzucone po stronie: model to 6% roboty, siedzi za własnym
  interfejsem, wymienia się go w dzień. Na listwie u góry wtyczki do
  systemów klienta — pierwsze miejsce w serwisie, gdzie widać, w co to się
  wpina.
- **Ciemny pas — ekran.** Zamiast pięciu pasków pewności: okno aplikacji
  z jedną sprawą poniżej progu, z kolumną źródeł („skąd system wziął dane"),
  blokiem konfliktu („czego nie rozstrzygnął") i dwoma przyciskami
  z konsekwencją. To jest zarazem jedyne miejsce, gdzie pokazujemy produkt.
- **Druga barwa z rolą.** Bursztyn znaczy „ta sprawa idzie do człowieka",
  zieleń „system zamyka ją sam". W kolejce widać proporcję dwie z pięciu
  bez czytania etykiet; w v1 obie drogi były zielone.

**Czego ten szkic nie załatwia.** Procent wysokości rysowanej podniósł się
tylko o cztery punkty, bo świadomie zostawiłem osiem sekcji bez zmian.
U appto rysunek stoi w **każdej** sekcji; u nas nadal w dwóch z dziesięciu.
Gatunek jest naprawiony, gęstość nie — i to jest następna decyzja, nie
kolejna poprawka tej strony.

### B3 · Co z tego wynika dla nas

Nie chodzi o to, żeby przemalować serwis na kolorowo. Chodzi o to, że
**nie mamy zdefiniowanego języka graficznego** — mamy jeden gatunek rysunku
(tabela mierząca czas) powtórzony na wszystkich podstronach, w jednym kolorze.

Co trzeba rozstrzygnąć, zanim cokolwiek się narysuje:

1. **Trzy gatunki rysunku zamiast jednego.** Propozycja: *pomiar* (to, co
   mamy dzisiaj — tabele, paski, osie czasu), *scena* (obiekt albo metafora
   z copy narysowana dosłownie, jak drogowskaz u appto), *ekran* (fragment
   prawdziwego interfejsu, jak na `/inspiracje`). Reguła: na jednej stronie
   co najmniej dwa gatunki, a sekcja dowodów i hero nigdy w tym samym.
2. **Znaki narzędzi wchodzą do serwisu.** Sprzedajemy wpinanie AI w cudze
   systemy — pokazanie, w które, kosztuje tyle, co pobranie SVG. To
   najtańszy kolor, jaki możemy dostać, i jedyny, który przy okazji
   podnosi wiarygodność.
3. **Jeden kolor przerywnika poza zielenią.** U appto to żółty. U nas ta
   rola jest wolna: pomarańcz z plakietek jest najbliżej, ale nie ma
   zapisanej reguły.
4. **Rodzina obiektów dla usług.** Sześć usług z megamenu nie ma dziś
   żadnego znaku rozpoznawczego. Sześć kafli z własnym glifem i własnym
   odcieniem załatwiłoby naraz: megamenu, sekcję oferty na stronie głównej,
   nagłówki podstron i routing na podstronach obszarowych.

---

## C · Kolor: 385 wartości, zero systemu

Grep po `#rrggbb` w `src/pages`, `src/components` i `src/layouts`:

- **385 unikalnych wartości hex**
- **259 z nich to neutralne** (nasycenie < 0,18)
- zmiennych CSS jest **dwie**: `--la-accent` i `--la-risk`
- atrybutów `style="` w markupie: **3 043**

Osiem szarości na tekst, których nikt nie odróżni, ale które znaczą, że
systemu nie ma: `#8b968d`, `#7c877e`, `#808b83`, `#a9b3aa`, `#a3ada4`,
`#98a49a`, `#9aa69c`, `#6d786f`. Analogicznie sześć wariantów jasnej linii:
`#e7ece4`, `#e2e9e0`, `#e4ebe2`, `#dde7db`, `#e3e7e0`, `#eef1ec`.

Z drugiej strony **paleta jest za wąska tam, gdzie liczy się czytanie**.
Poza zielenią serwis zna trzy kolory i używa ich bez reguły: pomarańcz
w plakietkach („większość firm startuje tu", „czeka 3 dni"), niebieski
w wykresach na `/inspiracje`, czerwień jako `--la-risk`. Nigdzie nie jest
zapisane, co znaczą.

Skutek praktyczny: cały serwis to biel, dwie zielone szarości i jedna
zieleń akcentu. Na zrzucie stykowym z siedmiu stron obok siebie nie da się
rozróżnić, która jest która.

Co z tym zrobić:

1. **Warstwa tokenów w `LaBase.astro`** — dwanaście–piętnaście zmiennych
   (`--tekst`, `--tekst-2`, `--tekst-3`, `--linia`, `--linia-mocna`, `--tlo`,
   `--tlo-2`, `--ciemny`, `--akcent`, `--akcent-ciemny`, `--uwaga`, `--ryzyko`).
   Bez tego każde podniesienie poziomu wizualnego to edycja w 3 043 miejscach.
2. **Drugi kolor z rolą.** Zieleń niesie dziś wszystko: wynik, akcent, ramkę,
   wykres, przycisk. Wystarczy jeden kolor drugorzędny z twardą regułą
   („liczby stanu wyjściowego", „to, co dziś kosztuje"), żeby rysunki
   zaczęły się od siebie różnić.

---

## D · Rytm sekcji: trzy formy powtórzone dwadzieścia razy

Na każdej podstronie usługowej powtarza się ten sam ciąg:

1. **`sec-head`** — nagłówek z lewej, akapit z prawej, wyrównane do dołu.
   Cztery wystąpienia na `/index`, `/strategia-ai`, `/szkolenia-ai`,
   `/systemy-procesowe`, `/systemy-dla-klientow`, trzy na `/rozwiazania-ai`
   i `/automatyzacje-integracje`.
2. **wiersze na liniach** — dwie albo trzy kolumny tekstu rozdzielone
   kreską 1 px, zwykle z numeracją `01 02 03` albo `Problem 01–05`.
3. **ciemny pas** z tym samym gradientem i tym samym układem wewnątrz.

Playbook (§8) mówi „co najmniej trzy różne szkielety nagłówka na stronę
i jedno miejsce bez nagłówka w ogóle". Na zrzutach tego nie widać —
`sec-head` niesie prawie wszystko.

Najostrzejsze przykłady:

- **`/automatyzacja-w-obsludze-klienta`, sekcja „Co konkretnie robimy"** —
  siedem wierszy × trzy kolumny tekstu, każdy wiersz o tej samej wadze.
  Ekran i pół jednolitej szarości. Ta sama forma wraca dwie sekcje niżej
  w routingu do usług.
- **`/szkolenia-ai`, sekcja „Co dokładnie zmienia się w pracy"** —
  piąty blok jest celowo rozpięty na dwie kolumny (komentarz w kodzie mówi,
  że to „jedyny asymetryczny moment"), ale przez to jego druga pozycja ląduje
  w prawej kolumnie bez nagłówka. Czyta się jak usterka siatki, nie jak
  zamierzona asymetria. `src/pages/szkolenia-ai.astro:566–574`.
- **`/index`, sekcja ścieżek** — pięć równych kart `KROK 01–05`
  w `repeat(5,1fr)` pod wykresem. Dokładnie ta „siatka równych kart",
  której unika reszta serwisu.
- **Puste prawe połowy.** `/baza-wiedzy` ma hero, w którym prawa połowa jest
  pusta na całą wysokość. `/automatyzacja-w-obsludze-klienta` ma sekcję
  „Kiedy nie warto tego robić" wciętą w lewą kolumnę z pustą prawą stroną
  na 500 px wysokości. To nie oddech, to dziura.

Co z tym zrobić:

1. **Limit: `sec-head` najwyżej dwa razy na stronę.** Reszta sekcji dostaje
   inny wstęp — nagłówek na całą szerokość, nagłówek wciągnięty w siatkę
   treści, sekcja otwarta zdaniem w dużym stopniu pisma bez tytułu.
2. **Wiersze na liniach, tam gdzie jest ich siedem, dzielić na dwa rytmy** —
   trzy pierwsze jako pozycje z wagą, cztery kolejne jako zwarta lista.
   Siedem równych wierszy nikt nie czyta do końca.
3. **Pusta prawa połowa dostaje robotę albo znika.** Jeśli sekcja nie ma
   rysunku, niech nagłówek i tekst wejdą na pełną szerokość z węższą miarą.

---

## E · Ruch: jedna strona ma czterdzieści animacji, dziesięć nie ma żadnej

| Strona | `@keyframes` | `animation:` |
|---|---|---|
| `/strategia-ai` | 40 | 41 |
| `/rozwiazania-ai` | 9 | 10 |
| `/automatyzacje-integracje` | 8 | 9 |
| `/systemy-procesowe` | 7 | 8 |
| `/` | 6 | 9 |
| `/szkolenia-ai` | 4 | 5 |
| `/systemy-dla-klientow` | 4 | 5 |
| `/inspiracje` | 2 | 6 |
| `/wisestack` | 0 | 0 |
| `/dlaczego-my` | 0 | 0 |
| `/produkty`, `/produkty/appto` | 0 | 0 |
| sześć podstron obszarowych (`ObszarStrona`) | 0 | 0 |

Dziesięć żywych adresów nie ma ani jednej animacji. Wchodzi się na nie
z `/strategia-ai`, gdzie rusza się wszystko — i różnica jest natychmiastowa.

Osobno: **jedyny ruch na dziesięciu stronach to `.rv`** (przesunięcie o 16 px
plus opacity przy wejściu w kadr) i `.lift` (uniesienie karty o 4 px przy
najechaniu). Obie rzeczy są dziś domyślnym efektem generatorów stron i nie
wnoszą nic poza „coś się ruszyło".

Wykres na stronie głównej wart jest osobnej uwagi. Krzywa „WISE AI SCORE"
idzie gładko w górę od 14 do 93 przez pięć etapów. To najbardziej ogólny
rysunek biznesowy, jaki istnieje, a liczby pod nim niczego nie mierzą.
Playbook §6 mówi: rysunek ma nieść liczbę albo proporcję, której nie ma
w tekście obok. Ten niesie kształt, który każdy widział tysiąc razy.

Co z tym zrobić:

1. **Jeden prawdziwy ruch na stronę, nawet na stronach bez animacji.**
   Sześć podstron obszarowych ma w hero tabelkę z policzonymi godzinami —
   wystarczy, żeby paski dojeżdżały raz, przy wejściu, ze wspólnego zegara.
   To jedna funkcja w `ObszarStrona.astro`, wchodzi od razu na sześć stron.
2. **Wykres na stronie głównej albo mierzy coś prawdziwego, albo wypada.**
3. **`.rv` na 16 px zostawić tylko tam, gdzie sekcja ma coś odsłaniać.**
   Wszędzie indziej treść może po prostu stać.

---

## F · Nagłówki: dwie formuły niosą 60% sekcji

110 unikalnych `<h2>` na osiemnastu żywych stronach:

- **46 (42%)** zaczyna się od pytajnika treści: *Co…, Jak…, Kiedy…, Czym…,
  Kto…, Dlaczego…, Czego…, Gdzie…*
- **20 (18%)** zaczyna się od liczebnika: *Dwie…, Trzy…, Cztery…, Pięć…,
  Dwanaście…, Trzydzieści…*

Najostrzejszy przypadek — sekcja dowodów na pięciu podstronach usługowych:

```
Trzy firmy i alarmy, które się u nich odezwały
Trzy portale i pytania, które przestały przychodzić
Trzy procesy i ich czas sprawy
Trzy rozwiązania i to, co przy nich zostało ludziom
Trzy zespoły i to, co się w nich nie przyjęło
```

Ta sama składnia, pięć razy, w tym samym miejscu strony. Podobnie FAQ:
dwadzieścia tytułów, wszystkie zaczynają się od słowa „Pytania" —
*Pytania, które padają przed decyzją* (4 strony), *Pytania, które słyszymy
najczęściej* (4), *Pytania, które padają najczęściej* (2), *Pytania, które
padają przy…* (7 wariantów).

Drobiazg, który zdradza wiek strony: **kropki po nagłówkach** stoją jeszcze
na trzech starszych adresach — `/` (5 nagłówków), `/darmowa-konsultacja` (6),
`/guided-coding` (6). Wszystkie podstrony pisane po playbooku mają zero.

Co z tym zrobić:

1. **Sekcja dowodów dostaje pięć różnych tytułów.** Najprościej: tytuł mówi,
   co tam stoi, w języku klienta, bez liczebnika z przodu.
2. **Limit: na jednej stronie najwyżej dwa nagłówki otwarte pytajnikiem.**
3. **FAQ — cztery różne tytuły na dwadzieścia stron** zamiast dwudziestu
   wariantów jednego.
4. **Zdjąć kropki z trzech starszych stron** (jedno przejście, dwadzieścia
   minut).

---

## G · Baza wiedzy

Dwie rzeczy, które trzeba rozstrzygnąć razem.

**Spis nie ma ani jednej miniatury.** Komentarz w `baza-wiedzy/index.astro:24`
uzasadnia to tak: „połowa wpisów nie ma obrazu, a druga połowa ma grafiki
z czterech różnych okresów". Pierwsza połowa tego zdania jest już nieprawdą —
**49 z 55 artykułów ma działającą okładkę** (sprawdzone plik po pliku).

**Druga połowa zdania jest prawdą i jest gorsza, niż brzmi.** 57 okładek
w `public/uploads/blog/` rozkłada się na cztery światy kolorystyczne:

| Dominanta | Ile | Uwaga |
|---|---|---|
| zielona | 19 | jedyna zgodna z marką |
| niebieska | 16 | |
| **czerwona** | **14** | duotony w kolorze, którego marka używa jako `--la-risk` |
| neutralna | 8 | |

Wszystkie to zdjęcia stockowe pod mocnym duotonem, z czasów poprzedniego
serwisu. I te obrazy **są pokazywane — tylko w złym miejscu**: spis ich nie
używa, a strona artykułu owszem (`baza-wiedzy/[slug].astro:191`). Efekt:
artykuł o automatyzacji księgowości otwiera jaskrawoczerwone zdjęcie kobiety
z laptopem na kanapie, na całą szerokość kolumny, w serwisie, którego
kolorem jest zieleń.

Co z tym zrobić — jedna z dwóch dróg, nie obie:

- **Droga tania:** zdjąć `art-obraz` ze strony artykułu i zostawić bazę
  wiedzy bez zdjęć w ogóle. Spójne, bezpieczne, zajmuje kwadrans.
- **Droga lepsza:** przepuścić 49 okładek przez jeden filtr (duoton
  `#0e2b1d` → `#00CD77` albo sam stopień szarości z zieloną dominantą),
  wtedy działają i w spisie, i w artykule. To jedno przejście skryptem.

Przy okazji: teksty najstarszych artykułów są z innej epoki niż reszta
serwisu („Dowiedz się jak ją wdrożyć!", „Wszystkiego dowiesz się w tym
artykule."). To już nie design, ale widać to w tym samym kadrze.

---

## H · Drobne rzeczy zauważone przy okazji

- **Przekreślenie „ChatGPT" w nagłówku strony głównej** czyta się przy
  pierwszym spojrzeniu jak błąd renderowania: szary tekst, zielona linia
  w poprzek, pod spodem kropka. Efekt jest dobry w zamyśle i zły w odbiorze.
- **Trzy pierścienie „100%" w hero `/strategia-ai`** przy zatrzymanej
  animacji pokazują trzy razy tę samą liczbę, a lista pod nimi to szare
  belki placeholdera. Stan spoczynkowy tego rysunku wygląda jak ekran,
  któremu nie doładowały się dane.
- **Ikonki w kartach „Co robimy, żeby tak się nie stało"** (`/strategia-ai`)
  są abstrakcyjne do stopnia, w którym nic nie znaczą: kółko z kropką,
  zielony prostokącik nad kreską. Lepiej bez nich niż z nimi.
- **Miara tekstu w ciemnych pasach przekracza 100 znaków.** Zmierzone
  w przeglądarce, najdłuższe wiersze na ciemnym tle: 105 znaków przy 14,5 px
  (`/automatyzacja-w-obsludze-klienta`), 103 znaki przy 13 px
  (`/rozwiazania-ai`), 98 znaków przy 15,5 px (`/szkolenia-ai`). Jasny tekst
  na ciemnym tle jest najtrudniejszym wariantem do czytania i akurat tam
  miara jest najszersza w całym serwisie.
- **`/dlaczego-my` i `/wisestack` nie mają `sec-head` w ogóle** — i wcale
  nie wyglądają przez to gorzej. Warto to potraktować jako dowód, że limit
  z punktu D jest wykonalny.

---

## Co bym zrobił najpierw

Kolejność poprawiona po porównaniu z appto.ai. Wcześniejsza wersja stawiała
na pierwszym miejscu porządki (stock, tokeny, szkielety) — a to jest robota
usuwająca wady, nie dodająca poziomu. Serwis bez własnego języka graficznego
po takim sprzątaniu dalej będzie czysty i pusty.

**Najpierw decyzja projektowa, bez której reszta jest kosmetyką:**

1. **Trzy gatunki rysunku — pomiar, scena, ekran — i reguła, że na stronie
   stoją co najmniej dwa** (punkt B3). To jedyna zmiana, po której serwis
   przestanie wyglądać na złożony z jednego szablonu.
2. **Znaki narzędzi w pełnym kolorze** tam, gdzie piszemy o wpinaniu AI
   w cudze systemy — sześć podstron usługowych plus `/wisestack`.
   Najtańszy kolor w całym zestawieniu.
3. **Rodzina sześciu obiektów dla sześciu usług** — jeden zestaw glifów
   i odcieni wchodzi naraz w megamenu, stronę główną, hero podstron
   i routing na podstronach obszarowych.
4. **Jeden kolor przerywnika poza zielenią**, z zapisaną rolą.

**Potem robota, która te decyzje utrwala:**

5. **Warstwa tokenów kolorystycznych w `LaBase.astro`.** Po punktach 1–4
   będzie co tokenizować; przed nimi zamroziłaby dzisiejszą monochromię.
6. **Trzy typy hero** i reguła, że sąsiedzi w megamenu nie dostają tego samego.
7. **Trzy warianty `GcCta`.** Jeden plik, efekt na dwudziestu dwóch stronach.
8. **Ruch w `ObszarStrona`** — jedna funkcja, sześć stron przestaje być
   martwych.

**Na końcu porządki, które można robić kiedykolwiek, bo od niczego nie
zależą:**

9. Zdjąć zdjęcie z Pexels, przenieść logotypy klientów na własny serwer.
10. Okładki bazy wiedzy — jedna z dwóch dróg z punktu G.
11. Przejście po nagłówkach: kropki, formuła „Trzy X i Y", tytuły FAQ.

Punkty 9–11 nie wymagają żadnej decyzji. Punkt 1 wymaga jej w całości i jest
jedyną rzeczą w tym dokumencie, której nie da się zamknąć grepem ani
zmierzyć skryptem.
