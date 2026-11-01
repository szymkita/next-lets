# Guided coding — nazwa, układ pasa i adresy

Stan na 1.11.2026. Dokument zbiera decyzje, żeby przy publikacji nie wracać
do nich drugi raz. Część oznaczona **DO DECYZJI** czeka na Szymona.

**Opublikowane 1.11.2026** (Szymon: „wrzuć na produkcję ten guided”):
guided coding pod `/guided-coding` (src/pages/guided-coding/index.astro),
301 z `/guided-coding/biezace-wsparcie`, `bez-dzialu-it` i `dla-zespolow`;
hub → src/robocze/guided-coding-old3.astro; stara strona wsparcia →
src/robocze/guided-coding/biezace-wsparcie-old3.astro; menu (Guided coding
pierwszy), stopka, strona główna (kolejność pozycji bez zmian — tam pas
idzie od problemu klienta), linki z analizy, warsztatów, Inspiracji i bloga,
sitemap, okruszki analizy i warsztatów (dwa poziomy). **Jeszcze nie:**
przeniesienie analizy i warsztatów na nowe adresy (§4) i ich tytuły (§4.5).

## 1. Skąd ta zmiana

- Szymon chce, żeby „guided coding” było własnym pojęciem Let’s automate,
  takim, które się niesie. Ma domenę guidedcoding.com.
- Od 1.11 trzeci pas w menu nazywa się „Budujecie własne aplikacje z AI”,
  podpis: „Prowadzimy Was od pomysłu po rozwój” (na produkcji, bez commita).
- Ustalenie z 30.08.2026 (pamięć: usługa docelowa, nie wejście): guided
  coding to **abonament** — przegląd zmian, praca w parze, dyżur na pytania,
  przegląd miesiąca, zasady dla AI, dokładani ludzie (analityk, PM,
  projektant). Wejście ma dwa warianty: przegląd tego, co zespół zbudował,
  albo cele i narzędzia, zanim powstanie pierwsza linia.
- Obecny układ od tego odszedł: trzy usługi stoją obok siebie jak równe
  opcje, analiza wygląda na główny produkt, a abonament nazywa się „Bieżące
  wsparcie”.

## 2. Co znaczy „guided coding” (decyzja)

Rozważone dwa modele:

| | Model A: guided coding = abonament | Model B: guided coding = cała droga |
|---|---|---|
| Co nazywa | usługę, którą się kupuje | metodę; analiza i warsztaty są jej częściami |
| Menu | pozycja „Guided coding” w pasie | nazwa pasa albo nic w menu |
| Adresy | `/guided-coding` = abonament, reszta płasko | wszystko pod `/guided-coding/…` |
| Ryzyko | — | nazwa bez rzeczy do kupienia; hub nazwany „guided” (Szymon: bez sensu) |

**Wybrany model A.** Pojęcie ma się kojarzyć z jedną konkretną rzeczą: stałym
prowadzeniem zespołu, który buduje z AI. Analiza to wejście do guided
codingu, warsztaty to droga dla zespołu, który chce dalej iść sam.
guidedcoding.com mówi o tej samej rzeczy.

Definicja robocza (strona, guidedcoding.com, LinkedIn — zawsze ta sama):
> Guided coding to miesięczny abonament dla firmy, która sama buduje
> aplikacje z AI: raz w miesiącu ustalamy z zespołem, co budować dalej,
> doradzamy przy decyzjach biznesowych i technicznych, sprawdzamy większe
> zmiany i pomagamy tego samego dnia, kiedy ktoś utknie. Decyzje zostają
> po stronie firmy.

Pisownia: w zdaniu małymi literami, odmieniane jak polski rzeczownik
(„guided codingu”, „z guided codingiem”); wielka litera tylko na początku
zdania i jako nazwa pozycji w menu, nagłówkach i tabelach. Nie „Guided
Coding”.

## 3. Pas w menu

```
Budujecie własne aplikacje z AI
Prowadzimy Was od pomysłu po rozwój
  Guided coding           Abonament: doradztwo i opieka przy rozwoju aplikacji
  Analiza aplikacji       Bezpieczeństwo aplikacji i plan jej rozwoju
  Warsztaty dla zespołu   Sesje, po których zespół pracuje z AI jak my
```

- **Guided coding pierwszy.** Podpis pasa mówi „prowadzimy” i pierwsza
  pozycja to właśnie prowadzenie; to też usługa docelowa (MRR). Analiza
  jako druga czyta się jak wejście, nie jak główny produkt.
- **Opis pozycji** mówi, czym usługa jest (pamięć: opisy usług), i nie
  powtarza „prowadzimy” z podpisu pasa. Warianty do porównania w odpowiedzi
  z 1.11; rekomendacja jak wyżej. **DO DECYZJI.**
- **Bez czwartej pozycji „Start”.** Wszystkie pasy mają po trzy pozycje.
  Firma, która dopiero zaczyna, trafia na guided coding: strona mówi
  w hero i w sekcji „Na start”, że zamiast analizy są dwa dni na cele
  i narzędzia. Osobna strona „Start” ma sens dopiero, gdy będzie ruch.
- Na stronie głównej (sekcja usług, `index.astro` ~198) ten sam nagłówek,
  podpis i kolejność co w menu. W stopce (`stopka-v2/dane.ts`) też.

## 4. Adresy

### Docelowo

| Strona | Dziś | Docelowo |
|---|---|---|
| Guided coding (abonament) | `/guided-coding/biezace-wsparcie` | `/guided-coding` |
| Analiza aplikacji | `/guided-coding/audyt-aplikacji` | `/analiza-aplikacji` |
| Warsztaty dla zespołu | `/guided-coding/transfer-know-how` | `/warsztaty-budowania-z-ai` **DO DECYZJI** |
| Strona zbiorcza pasa | `/guided-coding` | znika z produkcji (pkt 4.3) |

Dlaczego tak:
- `/guided-coding` jest najkrótszym i najmocniejszym adresem — dostaje go
  rzecz, która nazywa się guided coding. Adres zostaje ten sam, zmienia się
  tylko to, co pod nim stoi, więc nie trzeba przekierowania.
- Analiza i warsztaty płasko, jak pozostałe usługi (`/strategia-ai`,
  `/systemy-procesowe`). Zagnieżdżone pod `/guided-coding/` wyglądałyby jak
  podstrony abonamentu, a analizę da się kupić osobno.
- Stare końcówki są nieaktualne: „audyt” zastąpiła 29.10 „analiza”,
  „transfer know-how” zastąpiły „warsztaty dla zespołu”. Zmieniamy raz,
  wszystko naraz.
- Warsztaty: adres musi odróżniać je od „Szkoleń z AI” (`/szkolenia-ai`,
  praca z AI w codziennych sprawach). Warsztaty uczą **budować** aplikacje
  z AI. Inne możliwości: `/warsztaty-dla-zespolu` (krótko, ale myli się ze
  szkoleniami), `/warsztaty-claude-code` (nazwa narzędzia, wyklucza Codexa).

### Dlaczego teraz

Adresy `/guided-coding/*` są na letsautomate.pl dopiero od 16.10.2026
(wcześniej tylko na podglądzie), a starego serwisu na Webflow tu nie było
(docs/seo-migracja-analiza.md: „guided coding” to nowy język). Historia
w Google jest dwutygodniowa — każda późniejsza zmiana będzie droższa.

### 4.1 Przekierowania 301 (vercel.json)

```
/guided-coding/biezace-wsparcie   → /guided-coding
/guided-coding/audyt-aplikacji    → /analiza-aplikacji
/guided-coding/transfer-know-how  → /warsztaty-budowania-z-ai
/guided-coding/bez-dzialu-it      → /guided-coding        (dziś → /biezace-wsparcie: spłaszczyć łańcuch)
/guided-coding/dla-zespolow       → /guided-coding        (jw.)
```

Wstrzymanie przekierowań z 16.10 dotyczy starych adresów Webflow; tu
przenosimy własne strony, jak przy `bez-dzialu-it` w październiku. Mimo to
publikacja wymaga zgody Szymona.

### 4.2 Linki do przepięcia (stan 1.11)

- `src/components/Nawigacja.astro` — trzy pozycje pasa 3 (+ kolejność, opis);
- `src/components/stopka-v2/dane.ts` — trzy pozycje; `StopkaG.astro`
  dokłada do kolumny „Wdrażamy AI” pierwszą pozycję pasa 3 (komentarz
  „+ Guided coding”) — po zmianie kolejności to będzie znów guided coding,
  dziś omyłkowo „Analiza aplikacji”. Sprawdzić, czy ma tam zostać;
- `src/pages/index.astro` ~198–201 — pas i trzy pozycje;
- `src/pages/wisestack.astro` — 2 linki do warsztatów;
- `src/pages/inspiracje.astro` ~202 — link „bieżące wsparcie” w FAQ;
- strony pasa nawzajem: analiza → wsparcie i warsztaty (`audyt-aplikacji`
  ~186, kolumna „Z bieżącym wsparciem” ~184), warsztaty → wsparcie (~378,
  ~408) i analiza (~398), wsparcie → analiza i warsztaty;
- blog: `aplikacja-zbudowana-z-ai-co-sprawdzic.md` (linie 9–11, 84, 93),
  `ranking-narzedzi-…-2024-roku.md:11` („Guided Coding” → `/guided-coding`:
  po zmianie adres się zgadza, nazwa do poprawki pisowni);
- `src/pages/sitemap.xml.js` — cztery adresy;
- okruszki i JSON-LD trzech stron (pkt 4.3).

### 4.3 Strona zbiorcza pasa

Dziś `/guided-coding` (`src/pages/guided-coding/index.astro`) — hub z trzema
usługami. Nie ma do niej linku z menu (pasy nieklikalne od 21.10), tylko
z okruszków i sitemapy.

Decyzja: hub schodzi z produkcji (plik do `src/robocze/` jako
`guided-coding-old3.astro`), a jego adres przejmuje guided coding. Powody:
- w modelu A guided coding jest stroną główną pasa: mówi o wejściu
  (analiza / dwa dni na start) i o warsztatach jako drugiej drodze;
- dwa pozostałe huby (`/wdrazamy-ai`, `/budujemy-za-was`) też nie są
  opublikowane. Jeśli kiedyś wrócą, hub pasa 3 dostaje adres
  `/budujecie-aplikacje-z-ai` (nazwa pasa, jak pozostałe dwa), nie
  „guided”.

Okruszki: dwa poziomy, bez huba — „Strona główna → Guided coding”,
„Strona główna → Analiza aplikacji”, „Strona główna → Warsztaty…”.

### 4.4 guidedcoding.com

Do czasu, aż powstanie osobna strona pojęcia: przekierowanie 301 na
`https://www.letsautomate.pl/guided-coding`. Domena od razu działa
w materiałach i na LinkedInie, a cała wiarygodność zostaje na głównym
serwisie. Osobna strona (definicja, zasady, test) — osobny temat.

### 4.5 SEO: krótki adres, słowa w tytule

Decyzja (1.11): adres zostaje krótki, `/guided-coding`. Słowa w adresie mało
ważą dla Google; liczą się title, nagłówki, treść i linki. Krótki adres
niesie nazwę (slajdy, LinkedIn, guidedcoding.com → 301), a wydłużenie teraz
oznaczałoby drugą zmianę, gdy nazwa się przyjmie.

„Guided coding” nikt jeszcze nie wyszukuje, więc frazy, które ludzie
wpisują, stoją w title, nagłówkach i FAQ:

| Strona | Title (propozycja) |
|---|---|
| Guided coding | Guided coding: opieka i doradztwo przy aplikacji zbudowanej z AI \| Let's automate (w v7) |
| Analiza | Analiza aplikacji zbudowanej z AI — audyt bezpieczeństwa i plan rozwoju \| Let's automate |
| Warsztaty | Warsztaty Claude Code dla zespołu — budowanie aplikacji z AI tak jak my \| Let's automate |

- „Audyt” zostaje w title i description analizy: na stronie mówimy
  „analiza” (ton), a ludzie wyszukują raczej „audyt aplikacji” —
  hipoteza do sprawdzenia w Planerze słów kluczowych albo Search Console.
- Warsztaty: dziś title nie ma żadnej frazy, którą ktoś wpisze; „Claude
  Code” i „budowanie aplikacji z AI” odróżniają je od Szkoleń z AI. Codex
  zostaje w description.
- Zwroty do nagłówków i FAQ: aplikacja zbudowana z AI, vibe coding,
  Claude Code, Codex, bezpieczeństwo aplikacji.
- Ruch z pytań łapie blog (np. „Aplikacja zbudowana z AI — co
  sprawdzić”) i przekazuje do usług linkami z „Powiązanych”.

## 5. Treść strony guided codingu (wersja robocza)

Plik: `src/robocze/guided-coding/biezace-wsparcie-v7.astro`
(dev: `/guided-coding/biezace-wsparcie-v7`). Baza: produkcyjna strona
wsparcia (runda v6) — układ, historia hurtowni i ceny bez zmian. Zmiany:

- nazwa i definicja: „Guided coding” w h1/etykiecie, „Czym jest guided
  coding?”, definicja jak w pkt 2;
- firmy na starcie: w leadzie i w „Na start” obok analizy dwa dni na cele
  i narzędzia (było tylko w FAQ i małej ramce);
- „Co robimy przez cały miesiąc”: szósta pozycja z sierpnia — ludzie
  dokładani na miesiące, w których są potrzebni (analityk, projektant, PM);
- etykiety w scenach: „Sami” / „Z guided codingiem” zamiast „Bez wsparcia /
  Z abonamentem”;
- FAQ: pytanie o różnicę z vibe codingiem (pojęcie potrzebuje punktu
  odniesienia);
- zgłoszenia z formularza: źródło „Guided coding”.

## 6. Otwarte, ale niezależne od publikacji

- **WiseStack.** `/wisestack` opisuje „sposób, w jaki realizujemy
  projekty” i odsyła do warsztatów. Guided coding nie może być drugą nazwą
  tej samej metody. Propozycja: WiseStack = nasza metoda i narzędzia;
  guided coding = usługa, w której prowadzimy według niej zespół klienta.
  Strona WiseStack jest schowana w menu, więc to nie blokuje publikacji.
- Ceny analizy (zakresy nachodzą na siebie) — bez zmian, dalej do
  potwierdzenia.
- Nazwa „Warsztaty dla zespołu” obok „Szkoleń z AI” w pasie 1 — w menu
  rozróżnia je pas; w Google tylko adres i title.

## 7. Kolejność publikacji (po „podmień”)

1. Pliki: `biezace-wsparcie-v7` → `src/pages/guided-coding.astro`
   (albo `guided-coding/index.astro`); analiza → `src/pages/analiza-aplikacji.astro`;
   warsztaty → `src/pages/warsztaty-budowania-z-ai.astro`; stare
   produkcyjne do `src/robocze/` jako `-old3`.
2. Przekierowania z pkt 4.1.
3. Linki z pkt 4.2, okruszki, JSON-LD, sitemap.
4. Menu, stopka, strona główna: kolejność i opis z pkt 3.
5. `npm run build`, sprawdzenie, że żaden link nie prowadzi do starego
   adresu (`grep -rn "guided-coding/" src --exclude-dir=robocze`).
6. guidedcoding.com → 301 na `/guided-coding` (w panelu domeny).
