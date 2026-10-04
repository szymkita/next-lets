# Poprawki podstron usługowych — 22.09.2026

Realizacja briefu po audycie treści i przeglądzie interfejsu. Zapis decyzji,
żeby nie trzeba było ich odtwarzać z diffa.

Zakres: dziewięć podstron usługowych, wspólne komponenty (`GcCta`, `Nawigacja`,
`Stopka`), plus strona główna, `/darmowa-konsultacja` i `/automatyzacja-w-sprzedazy-i-marketingu`
jako kontrola zmian wspólnych.

---

## P0 · Rzeczy, które blokowały ruch

### 1 · Formularze naprawdę wysyłają

`GcCta` — moduł stojący na **22 stronach** — miał pola bez `<form>`, bez atrybutów
`name` i przycisk będący linkiem `<a href="#kontakt">`. Klient wypełniał go
w przekonaniu, że coś wysyła.

Komponent przepisany na prawdziwy formularz z POST na `/api/kontakt` (ten sam
endpoint, którego używa `FormularzLead` na `/darmowa-konsultacja`):

- walidacja z etykietami powiązanymi przez `for`/`id`, komunikaty przy polach,
  fokus na pierwszym błędnym polu;
- stany: wysyłanie (przycisk zablokowany, napis „Wysyłam…”), sukces, awaria;
- **blokada podwójnej wysyłki** — flaga `wysylam` plus `disabled`;
- przy błędzie dane zostają w polach, a obok staje mail z gotową treścią
  i telefon;
- endpoint rozróżnia „brak skonfigurowanego odbiorcy” (503) od „kanał odpadł”
  (502) i klient dostaje dwa różne komunikaty — przy 503 ponawianie nic nie da;
- **nigdy nie ma fałszywego sukcesu**: ekran potwierdzenia pokazuje się dopiero
  po odpowiedzi 200.

Do zgłoszenia idzie `zrodlo` w postaci `Nazwa usługi · /sciezka`, więc w Make
albo na Slacku widać, z której podstrony przyszło.

**Strona główna** miała własną kopię tej samej atrapy (sekcja S8, przycisk
prowadził do `#diagnoza`). Zastąpiona komponentem z `id="diagnoza"`, żeby
kotwica z nawigacji i z treści dalej działała.

Konfiguracja odbiorcy (`WEBHOOK_URL` / `SLACK_WEBHOOK_URL` / `RESEND_API_KEY`
+ `LEAD_TO`) **nie jest ustawiona w tym repo** — patrz lista niżej.

### 2 · Polityka prywatności

Link przy zgodzie i w stopce prowadził do `#`. Dokument istnieje: stoi na
produkcji pod `letsautomate.pl/polityka-prywatnosci` (wersja z 11.04.2023).
Przeniesiony 1:1 jako `/polityka-prywatnosci`; poprawione zostały wyłącznie
sklejki z eksportu HTML (numery punktów zlepione z poprzednim zdaniem,
przestawiona kolejność słów w 4.1.2, zgubione śródtytuły) i adresy zamienione
na linki. Żadnego zdania nie napisano od nowa.

Pozycja **„RODO” w stopce została zdjęta** — takiego dokumentu nie ma, a link
prowadził donikąd. Obowiązki informacyjne pokrywa rozdział 10 polityki.

### 3 · Placeholdery na `/guided-coding/transfer-know-how`

Trzynaście nawiasów kwadratowych na produkcji. Nagłówek pliku od początku
mówił, że **wszystkie** są hipotezą, więc żadnej nie dało się po prostu
odnawiasować. Każde zdanie przepisane tak, żeby działało bez niepotwierdzonej
liczby (`[3–5 dni]` → „kilka dni roboczych”, `[do sześciu]` → kryterium
„tyle, ile widzi jeden ekran”, itd.). Wyjątek: liczby w **przykładowej
agendzie** straciły nawiasy, bo nota pod nią mówi wprost, że to przykład
z pozmienianymi danymi.

Rozstrzygnięte przy okazji dwie sprzeczności, na które wskazywał brief:

- **przegląd**: strona mówiła jednocześnie „wyceniany osobno” i „koszt
  przeczytania kodu siedzi w stawce”. Teraz: przegląd to jedyna osobna pozycja,
  płatna raz; w stawce programu siedzą narzędzia i czytanie kodu **między
  sesjami**;
- **liczba sesji**: „Siedem sesji to siedem rzeczy naprawionych” kłóciło się
  z „wykreślony temat znika razem z sesją”. Teraz: „Każda sesja kończy się
  jedną rzeczą naprawioną”. Siódemka została tam, gdzie jest przykładem
  (hero, agenda).

Kwoty w nawiasach z huba (`od [8 000] zł`, `od [25 000] zł`) zamienione na
„wycena po rozmowie”.

---

## P1 · Jasność i perswazja

### Pierwsze ekrany

| Strona | Co się zmieniło |
|---|---|
| `/strategia-ai` | H1 nazywa czas i rezultat; lead nazywa usługę („przegląd strategiczny dla zarządu”) i **podaje widełki 5–20 tys. zł**, które stały dotąd w FAQ i w pasie w połowie strony |
| `/rozwiazania-ai` | lead otwierają trzy zastosowania: obsługa faktur, kwalifikacja zgłoszeń, przygotowanie ofert |
| `/systemy-dla-klientow` | H1 nazywa produkt („Portal klienta, w którym odbiorca sprawdza…”) |
| `/szkolenia-ai` | H1 nazywa AI; lead mówi od razu, że w pakiecie jest warsztat, dyżur, powroty i pomiar |
| `/guided-coding/transfer-know-how` | lead nazywa formę: **zamknięty program, nie abonament** |
| `/guided-coding/bez-dzialu-it` | lead nazywa formę: **stałe prowadzenie miesięczne**; przy okazji zdjęta triada „ustawiamy, przekazujemy, wspieramy” |
| `/guided-coding/dla-zespolow` | lead nazywa formę: stałe prowadzenie zespołu inżynieryjnego |

### Warunki zakupu pod pierwszym ekranem

Nowy komponent `WarunkiZakupu.astro` — trzy wiersze na liniach (nie kafle, bo
trójka równych kart powtarzałaby szkielet, którego na tych stronach jest już
dosyć). Stoi na siedmiu stronach.

**Każdy wiersz jest skrótem zdania, które już stoi niżej na tej samej stronie**
(zwykle w FAQ o cenie i o czasie zespołu). Nic tu nie jest nową obietnicą.
`/strategia-ai` paska nie ma — jej warunki weszły do leadu.

### Dowody

- **94% / 6%** na `/rozwiazania-ai` dostało podpis: udział w czasie budowy,
  z naszych wdrożeń, proporcje przesuwają się między projektami.
- **Cztery pary przed/po na `/guided-coding/dla-zespolow`** (22→78%, 34→81%,
  3,1→9,4, 9→3%) **zdjęte**. Nagłówek pliku mówił, że są „proporcją
  z obserwacji, nie z pomiaru”, a sekcja pokazywała je jak zmierzony wynik —
  obok zdania „stan wyjściowy mierzymy”. Zostały definicje czterech wskaźników
  (co liczymy, na czym, w którą stronę ma iść) plus zdanie, dlaczego wartości
  docelowej tu nie ma.
- **Referencja NARS** („wziął pełną odpowiedzialność za projekt”) dotyczy
  wdrożenia projektowego. Na `/szkolenia-ai` i `/guided-coding/dla-zespolow`
  czytała się jak ocena tego programu — dostała przypis mówiący, czego dotyczy
  i czym mierzymy tę konkretną usługę. Na stronach budowlanych zostaje bez zmian.

### Porównania z alternatywami

- `/systemy-dla-klientow`: zdanie „sklep z półki zakłada jeden cennik dla
  wszystkich” było nieprawdziwe — gotowe platformy B2B (Shopify i podobne)
  prowadzą dziś katalogi i cenniki per klient. Poprawione w dwóch miejscach
  (sekcja „dla kogo” i FAQ). Argument przeniesiony na to, co rozstrzyga
  naprawdę: czy warunki da się zapisać regułami platformy i czy stan trzeba
  brać na żywo z ERP-a.
- `/automatyzacje-integracje`: z hero zdjęte „reszta rynku sprzedaje sam
  scenariusz” — twierdzenie o rynku bez pokrycia. Akcent przesunięty na
  zgodność danych między systemami.

### Powtórzone formuły

„Zakresem do wyceny” jako trzeci punkt stało identycznie na czterech stronach.
Kanoniczne brzmienie zostaje na `/rozwiazania-ai`; pozostałe nazywają swoją
rzecz. Nadtytuł „Z pierwszej rozmowy wychodzicie z” rozjechany na dwóch stronach.

---

## P2 · Czytelność i pomiar

1. **CTA w nawigacji** — rotujący maszynopis („Bezpłatna diagnoza” / „Wyceń
   projekt” / „Umów rozmowę”) zastąpiony stałym napisem „Bezpłatna diagnoza”,
   a poniżej 560 px „Diagnoza”. Usunięty skrypt rotacji i martwe style w
   `Nawigacja`, `LaBase`, `index`, `index-v3`, `darmowa-konsultacja`.
2. **Kontrast** — `#8b968d` (3,07:1), `#7c877e` (3,73:1) i `#95a196` (2,69:1)
   w drobnych tekstach zamienione na `#637066`, który daje ≥4,84:1 na każdym
   jasnym tle serwisu. Na ciemnej zieleni `rgba(255,255,255,0.42–0.5)` (3,9–4,9:1)
   podniesione do `0.62` (6,65:1). Razem 361 deklaracji w 55 plikach.
3. **Telefon** — moduł kontaktowy ma teraz kolejność: nagłówek → pola → lista
   korzyści (robi to `display:contents` w media query). Po kliknięciu CTA przy
   390 px sekcja ląduje 42 px pod nawigacją, a pierwsze pole jest w kadrze
   (509 px przy 844 px wysokości).
4. **Zdarzenia pomiarowe** — `cta_klik`, `formularz_start`, `formularz_blad`
   (z powodem), `formularz_sukces`, każde z nazwą usługi i ścieżką. Idą do
   `window.dataLayer` i jako zdarzenie DOM `la:pomiar`. **Serwis nie ma wpiętego
   żadnego narzędzia analitycznego i ta zmiana go nie dokłada** — dopóki nikt
   nie wepnie menedżera tagów, nic nie wychodzi poza przeglądarkę. Do zdarzeń
   nie wchodzi treść formularza ani dane kontaktowe.

---

## Czego nie zrobiono i dlaczego

- **Trzy typy hero / warianty `GcCta`** z przeglądu designu — to przebudowa
  wizualna całego serwisu, nie mieści się w tym briefie.
- **Cele dotykowe** poniżej 32 px: przycisk w pasku Wise Group (13 px), logo
  w nawigacji (22 px), linki w akapitach FAQ (19 px). Stopka poprawiona;
  reszty nie ruszałem, bo zapas w pionie przy linkach wewnątrz akapitu
  zachodzi na sąsiednie wiersze.
- **Kwoty**, których nie ma z czego wziąć — patrz lista niżej.

---

## Do potwierdzenia (blokuje albo wprowadza ryzyko)

| # | Rzecz | Gdzie | Dlaczego pytam |
|---|---|---|---|
| 1 | Konfiguracja odbiorcy zgłoszeń | `WEBHOOK_URL` / `SLACK_WEBHOOK_URL` / `RESEND_API_KEY`+`LEAD_TO` w Vercelu | Bez tego endpoint zwraca 503 i **każdy formularz w serwisie pokazuje awarię**. To jedyna rzecz, która wciąż blokuje ruch. |
| 2 | Aktualizacja polityki prywatności | `/polityka-prywatnosci` | pkt 1.5 wskazuje stary adres serwisu; pkt 12.1.4 powołuje się na Privacy Shield (unieważniony w 2020, wyrok Schrems II); lista partnerów i narzędzi pochodzi ze starego serwisu (Hotjar, wtyczki społecznościowe); dokument nie wymienia Resend/Make/Slacka, przez które idą dziś zgłoszenia. |
| 3 | Czy powstanie osobny dokument „RODO” | stopka | Pozycja zdjęta; wróci, gdy będzie co podlinkować. |
| 4 | Stawka `od 2900 zł / mies.` | `/guided-coding/bez-dzialu-it` | Nagłówek pliku mówi „kwota jest hipotezą”, a brief każe ją pokazać wyżej. Pokazana — do potwierdzenia albo zdjęcia. |
| 5 | Cena przeglądu i diagnostic sprintu | `/guided-coding` (hub) | `[8 000]` i `[25 000]` zamienione na „wycena po rozmowie”. |
| 6 | Cztery liczby przed/po | `/guided-coding/dla-zespolow` | Zdjęte. Żeby wróciły, potrzebne: okres pomiaru, liczba wdrożeń, definicja każdego wskaźnika i informacja, czy to jeden projekt, czy wynik zbiorczy. |
| 7 | Skąd 94% / 6% | `/rozwiazania-ai` | Podpis mówi „z naszych wdrożeń”. Jeśli to szacunek, a nie pomiar — trzeba przeformułować. |
| 8 | Krzywa „zaczęliśmy od pięciu procent” | `/guided-coding/dla-zespolow` | W kodzie stoi „WSZYSTKIE WARTOŚCI DO POTWIERDZENIA”. Nie ruszana w tej rundzie. |
| 9 | „Ponad dwieście wdrożeń” kontra „czterdzieści projektów” | `/guided-coding/*` kontra `/wisestack` | Sprzeczność odnotowana wcześniej, nadal nierozstrzygnięta. |
| 10 | Kadencja transferu know-how | `/guided-coding/transfer-know-how` | Ile sesji, jak często, ile osób, ile trwa przegląd — wszystko opisane jakościowo. Liczby wracają po decyzji. |
| 11 | Telefon obowiązkowy w formularzu | `GcCta` | Endpoint go nie wymaga, formularz tak. Zostawiony jako wymagany (tak było). Jeśli to nie wynika z procesu sprzedaży, warto sprawdzić wariant z polem nieobowiązkowym. |
| 12 | Czy „diagnoza” jest bezpłatna przy każdej usłudze | nawigacja, stopka | CTA w nawigacji mówi „Bezpłatna diagnoza” na każdej stronie serwisu. Potwierdzone dla pierwszej rozmowy; jeśli gdzieś tak nie jest, trzeba rozdzielić. |

---

## Hipotezy konwersyjne do sprawdzenia

Do zmierzenia dopiero po wpięciu menedżera tagów. Kolejność wg spodziewanego
zysku na jednostkę pracy.

1. **Działający formularz** podniesie liczbę zgłoszeń z zera do czegokolwiek.
   To nie jest hipoteza, tylko naprawa — ale daje pierwszy stan wyjściowy.
2. **Warunki zakupu pod hero** obniżą odsetek wyjść z pierwszego ekranu na
   stronach, gdzie cena stała w FAQ. Miara: udział sesji, które schodzą poniżej
   pierwszego ekranu.
3. **Kolejność na telefonie** (pola przed listą korzyści) podniesie udział
   `formularz_start` wśród `cta_klik` na urządzeniach mobilnych.
4. **„Wyślij zapytanie” zamiast „Umów rozmowę”** na przycisku obniży liczbę
   zgłoszeń, ale podniesie ich jakość — ludzie wiedzą, że nie rezerwują terminu.
   Do sprawdzenia razem z punktem 5.
5. **Zdjęcie czterech liczb przed/po** na `/guided-coding/dla-zespolow` może
   obniżyć konwersję strony. Jeśli tak, argumentem za ich powrotem jest pomiar,
   nie przywrócenie starych wartości.

### Jak mierzyć jakość, nie kliknięcia

Sam wzrost `formularz_sukces` niczego nie rozstrzyga. Minimalny zestaw:

- w Make (albo tam, gdzie ląduje webhook) dopisywać do każdego zgłoszenia pole
  `zrodlo` — **ono już przychodzi** — i ręcznie jeden status: `kwalifikowane` /
  `niekwalifikowane` / `brak odpowiedzi`, uzupełniany przy pierwszym kontakcie;
- raz w miesiącu przejść listę: ile zgłoszeń, ile rozmów, ile z nich skończyło
  się wyceną, w rozbiciu na `zrodlo`;
- dopiero ten stosunek („zgłoszenia → rozmowy → wyceny” per usługa) mówi, czy
  strona przyciąga właściwych ludzi. Przy obecnym wolumenie nie ma sensu
  budować pod to narzędzia — arkusz wystarczy na kilka kwartałów.
