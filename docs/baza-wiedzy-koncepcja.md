# Baza wiedzy — koncepcja

`/blog` + `/post/<slug>` + `/blog-categories/<adres>` (08.09.2026, adresy
przestawione na stare 15.10.2026 — patrz niżej).

Prośba brzmiała: „baza wiedzy z artykułami, ale też z linkami do filmów na
YouTube, przede wszystkim na razie artykuły — ładnie, prosto, zgodnie z resztą
brandingu".

---

## Tylko wpisy ze starego bloga, filmy z kanału (16.10.2026)

**Sześć tekstów napisanych w studiu usuniętych** (koszt procesu, pilot AI,
umowa na wdrożenie, dołek adopcji, gotowe narzędzie czy własna aplikacja,
aplikacja z Lovable). Były przykładowe, a na starym blogu ich nie było. Na
`/blog` zostaje 49 wpisów przeniesionych z Webflow; na górze stoi najnowszy
z nich, tak jak na starym serwisie. Pięć tekstów jest w historii gita
(commit 8af6a20), szósty miał jeszcze niezacommitowane zmiany w `powiazane`.

**Pas nagrań podpięty do kanału Automatyzacja Biznesu**
(`@automatyzacjabiznesu` — ten sam, do którego linkował stary serwis).
W `src/data/filmy.js` stoją wszystkie 23 filmy od najnowszego, z długością
z YouTube'a. Tytuły są te z kanału, bez wersalików i emoji; zdania pod nimi
napisane z opisów filmów. Strona pokazuje osiem klatek, resztę odsłania
przycisk. Klatka linkuje do filmu na YouTubie, w nowej karcie.

---

## Adresy ze starego bloga (15.10.2026)

Baza wiedzy stoi pod tymi samymi adresami co blog na Webflow, zamiast
przekierowywać na nowe:

| co | adres |
|---|---|
| lista | `/blog` |
| artykuł | `/post/<slug>` |
| kategoria | `/blog-categories/<adres>` — adres ze słownika `KATEGORIE`, łącznie z `podstawy-copy` |

Przekierowania 301 idą teraz w drugą stronę: `/baza-wiedzy → /blog`,
`/baza-wiedzy/:slug → /post/:slug`, a `/blog-categories/wszystko` (duplikat
listy na starym serwisie) → `/blog`. Nazwa w menu zostaje „Baza wiedzy" —
tak samo było na starym serwisie.

**Treść 49 wpisów przekonwertowana drugi raz.** Pierwsza konwersja obcinała
spacje wewnątrz pogrubień i linków, przez co w ok. 100 miejscach słowa się
skleiły. Druga zachowuje też poziomy nagłówków, linki wewnętrzne i numerację
tak jak w oryginale. Zweryfikowana na zbudowanym serwisie: tekst, nagłówki,
pogrubienia, linki i obrazy zgadzają się z żywą stroną we wszystkich 49
wpisach (`docs/_migracja/README.md`).

**Kotwice `#toc-…` jak na starym blogu.** Google pokazuje je w wynikach jako
„Przejdź do" (sam wpis o automatyzacji procesów biznesowych ma na nich ponad
100 tys. wyświetleń rocznie). Nadaje je `src/lib/rehype-artykuly.mjs` wzorem
przepisanym ze skryptu Webflow.

**`smartypants` wyłączony**, bo zamieniał proste „Let's" i "cudzysłowy" na
drukarskie. Nowe teksty wpisują typografię wprost („…”).

**Canonical bez ukośnika na końcu** (`LaBase`). Build zapisuje strony jako
katalogi, więc wcześniej canonical wskazywał `/post/x/` — inny adres niż ten
w indeksie Google i niż w sitemapie.

**Kolejność listy jak na starym `/blog`.** Siedem odtworzonych dat
przesuniętych o kilka dni, żeby lista szła w tej samej kolejności co na
starym serwisie (paginacja `?1a7e265b_page=N`).

---

## Migracja bloga z letsautomate.pl (08.09.2026)

> Adresy i treść z tej sekcji są nieaktualne od 15.10.2026 (sekcja wyżej).
> Zostaje jako zapis pierwszej migracji.

Czterdzieści dziewięć wpisów ze starego serwisu (Webflow, adresy `/post/<slug>`)
przeniesionych do kolekcji. Razem z sześcioma tekstami napisanymi w studiu daje
to **55 artykułów**.

**Slug zostaje bez zmian**, więc stary adres mapuje się na nowy jeden do
jednego. Przekierowania 301 stoją w `vercel.json`:
`/post/:slug → /baza-wiedzy/:slug`, `/blog → /baza-wiedzy`,
`/blog-categories/:slug → /baza-wiedzy`.

**Taksonomia jest ze starego bloga**, nie wymyślona od nowa: Podstawy, Firma,
Poradniki, Sprzedaż, Marketing, Obsługa klienta, Narzędzia. Redakcja stosowała
ją realnie na 49 wpisach, więc sześć tekstów studia dopasowałem do niej,
a nie odwrotnie (koszt procesu i umowa → Firma, pilot i dołek adopcji →
Poradniki, wybór narzędzia i aplikacja z Lovable → Narzędzia).

**Daty są odtworzone, nie przepisane.** Stary serwis nie pokazuje daty
publikacji nigdzie w HTML-u, nie ma RSS-a, a Internet Archive był w trakcie
migracji niedostępny. Data każdego wpisu pochodzi więc ze znacznika czasu
w nazwie pliku obrazu otwierającego — Webflow nazywa pliki identyfikatorem
ObjectID, którego pierwsze cztery bajty to moment wgrania. Rozkład wychodzi
sensownie (2022: 20, 2023: 13, 2024: 16), ale **to jest przybliżenie i przed
publikacją warto je przejrzeć** — kolejność na liście zależy wyłącznie od tych
dat.

**Co jeszcze przeszło:** oryginalne opisy meta jako `lead`, obrazy otwierające
i osiem obrazów w treści (przeskalowane do 1200 px i przekonwertowane na WebP,
23 MB → 2,3 MB, leżą w `public/uploads/blog/`), jedno osadzone nagranie
z YouTube'a, listy, wyróżnienia, poziome kreski i wszystkie linki.

**Co zmieniło się w treści:** kropka na końcu tytułu (reguła serwisu),
poziomy nagłówków znormalizowane do `##`/`###` (część wpisów używała `h2` + `h4`,
część samego `h3` — bez tego spis treści nie miałby z czego powstać) oraz
adresy linków wewnętrznych. Poza tym ani jednego zdania nie ruszałem: teksty
są w starym głosie marki (druga osoba liczby pojedynczej, zwroty SEO-owe) i to
jest świadome — przepisanie 49 wpisów to osobna decyzja, nie część migracji.

**Linki wewnętrzne przepisane na nowy serwis** (tabela z `convert.py`):

| stary adres | nowy |
|---|---|
| `/post/<slug>` | `/baza-wiedzy/<slug>` |
| `/blog` | `/baza-wiedzy` |
| `/o-nas` | `/dlaczego-my` |
| `/kontakt` | `/darmowa-konsultacja` |
| `/automatyzacja-w-obsludze-klienta` | `/systemy-dla-klientow` |
| `/automatyzacja-w-sprzedazy-i-marketingu`, `/automatyzacja-w-rekrutacji-oraz-hr`, `/automatyzacja-w-dashboardach-i-danych` | `/automatyzacje-integracje` |
| `/automatyzacja-oraz-ai-w-nietypowych-procesach` | `/rozwiazania-ai` |
| `/automatyzacja-ofertowania-case-study` | `/inspiracje` |
| `/zautomatyzowany-dzial-sprzedazy` | `/systemy-procesowe` |

Podstrony ofertowe starego serwisu nie mają odpowiednika jeden do jednego —
to są dopasowania po sensie i warto je przejrzeć. Linki zewnętrzne (w tym
partnerskie do Make, n8n i Airtable) zostały bez zmian.

---

## Czym się różni od rodzeństwa

Wszystkie dotychczasowe podstrony coś sprzedają i każda ma własny mechanizm
wizualny niosący argument (łuki, przekrój warstw, oś czasu sprawy, showreel
ekranów). Ta nie sprzedaje niczego i dlatego **świadomie nie ma własnego
rysunku**. Ma jedno zadanie: pokazać, co w środku jest warte czterech minut,
i pozwolić to znaleźć.

Wniosek z playbooka, który tu obowiązuje na odwrót: przy stronie usługowej
brak rysunku byłby wadą, przy spisie tekstów rysunek byłby ozdobą.

## Układ

| # | Sekcja | Tło | Forma |
|---|---|---|---|
| 1 | hero | biel | nagłówek, zdanie, trzy liczby |
| 2 | wyróżniony artykuł | biel | wcięcie + duży stopień pisma + kartka ze spisem treści |
| 3 | lista | `#f4f8f2` | wiersze na liniach, filtr kategorii w jednej linii, przycisk rozwijający |
| 4 | nagrania | `#0e2b1d` | osiem klatek 16:9, reszta przyciskiem |
| 5 | kontakt | biel | wspólny `GcCta` |

Rytm tła zgodny z playbookiem: ciemny pas pada raz i bierze rzecz najcięższą
wizualnie (wideo). Kafle są tylko w tej jednej sekcji — przy nagraniu klatka
jest treścią, nie pojemnikiem na akapit.

Momenty, które ratują stronę przed monotonią spisu:
- **kontrast skali** — tytuł wyróżnionego tekstu w 50 px przy 25 px na liście
- **asymetria** — wyróżniony blok wcięty, obok kartka szerokości 330 px
- **kartka ze spisem treści** — pokazuje, o czym jest tekst, przed kliknięciem;
  bierze się z nagłówków `##` w markdownie, więc nie ma czego utrzymywać

## Strona artykułu

Kolumna tekstu 720 px ze spisem treści przyklejonym po lewej (znika poniżej
1080 px). Pod tekstem: linki do usług z pola `powiazane`, dwa kolejne teksty
i wąski ciemny pas z wezwaniem. Pełny moduł `GcCta` byłby pod artykułem
cięższy od samego artykułu, więc został na stronie zbiorczej.

Typografia treści: 17,5 px / 1,75, punktor przy `ul` jako akcentowa krecha
(kropka gubi się w tym stopniu pisma), numeracja `ol` w monospace, cytat
blokowy jako zdanie domykające na akcentowej kresce — bez kursywy i bez
cudzysłowów.

## Architektura

```
src/content/config.ts                       schemat + słownik KATEGORIE (z adresami)
src/content/artykuly/*.md                   treść (nazwa pliku = adres)
src/data/filmy.js                           lista nagrań + identyfikatory YouTube
src/lib/rehype-artykuly.mjs                 kotwice #toc-…, numeracja list, linki zewnętrzne
src/components/baza-wiedzy/                 lista, filtr kategorii, adresy, czas czytania
src/pages/blog/index.astro                  /blog
src/pages/blog-categories/[kategoria].astro /blog-categories/<adres>
src/pages/post/[slug].astro                 /post/<slug>
```

Decyzje, które warto pamiętać:

- **czas czytania liczy się z tekstu**, nie stoi we froncie — inaczej po
  dopisaniu dwóch akapitów zostawałby nieaktualny
- **artykuły dopisują się do `sitemap.xml.js` same**; `lastmod` bierze datę
  publikacji, nie datę builda
- **`szkic: true`** zdejmuje tekst z listy i z sitemapy, ale zostawia adres
  i dokłada `noindex` — po to, żeby dało się wysłać link do przeczytania
- **`wyrozniony: true`** wskazuje tekst na górze; bez niego wchodzi najnowszy
- **filtr chowa wiersze atrybutem `hidden`**, zamiast je usuwać — wyszukiwarki
  widzą w źródle pełną listę
- **odmiana liczebników** przez funkcję `odmiana()` (1 artykuł / 3 artykuły /
  6 artykułów) — licznik zmienia się z każdym nowym tekstem

## Filmy

Nagrania nie są kolekcją treści, bo cała zawartość leży na YouTubie. Zostają
tytuł, zdanie, długość i identyfikator; miniatura leci z serwera YouTube'a
(`hqdefault.jpg`, przycięta do 16:9). Nowy film dopisuje się na początek
tablicy w `src/data/filmy.js` — licznik w hero i przycisk „Pokaż starsze
nagrania” przeliczają się same.

## Czego świadomie nie ma

- **wyszukiwarki** — filtr po kategorii plus rozwijana lista wystarczają;
  pole wyszukiwania dokładać, gdy wpisów będzie ponad sto
- **paginacji z osobnymi adresami** — lista pokazuje dwanaście najnowszych
  wierszy i rośnie na miejscu przyciskiem. Adres zostaje jeden, a wyszukiwarki
  widzą w źródle wszystkie wiersze naraz
- **miniatur przy wierszach listy** — przeniesione wpisy mają grafiki
  z trzech różnych okresów; rząd niedobranych miniatur wygląda gorzej niż sam
  tekst
- **siatki kafli z artykułami** — spis czyta się wierszami; kafle zostały tam,
  gdzie służą porównaniu wzrokiem, czyli przy wideo
- **tagów obok kategorii** — cztery kategorie na kilkanaście tekstów to i tak
  dużo; tagi dokładać dopiero, gdy któraś kategoria przekroczy dziesięć wpisów
- **dat aktualizacji** — dopóki nikt nie wraca do starych tekstów, drugie pole
  z datą tylko myli

## Do potwierdzenia przed publikacją

- **Daty 49 przeniesionych wpisów** — odtworzone z metadanych plików Webflow
  (patrz sekcja o migracji). To one ustawiają kolejność na liście.
- **Dopasowania linków wewnętrznych** do podstron ofertowych — tabela wyżej.
- **Zdania pod filmami** w `src/data/filmy.js` — napisane z opisów na
  YouTubie, do przejrzenia.
- **`/og/baza-wiedzy.png`** — strona i artykuły dziedziczą `/og/hub.png`.
  Docelowo artykuł powinien mieć własny obrazek z tytułem.
- **Autor** — wszystkie teksty są podpisane Szymonem Kitą (pole `autor`
  we froncie, domyślna wartość ze schematu).

## Jak dopisać artykuł

Nowy plik w `src/content/artykuly/`, nazwa pliku bez polskich znaków — ona jest
adresem. Front:

```yaml
---
tytul: "Tytuł bez kropki na końcu"
lead: "Zdanie, które musi się obronić bez reszty tekstu — idzie na listę i do meta description."
data: 2026-09-08
kategoria: firma    # podstawy | firma | poradniki | sprzedaz | marketing | obsluga-klienta | narzedzia
powiazane:
  - { t: "Nazwa usługi", h: "/adres" }
---
```

Nagłówki drugiego stopnia (`##`) budują spis treści po lewej i kartkę przy
wyróżnionym tekście — warto pisać je tak, żeby dało się z nich odczytać, o czym
jest tekst.
