# Let’s Shift — koncepcja podstrony (25.10.2026)

Szymon: „podstrona Let’s Shift, skierowana do małych, średnich i dużych
firm, które mają wypracowany sposób działania i chcą przenieść się do czasów
AI, czyli wdrożyć typowy program transformacyjny, który wymienia technologie
na dopasowane do dzisiejszych czasów”.

Plik: `src/robocze/lets-shift.astro` → `/lets-shift` (tylko `npm run dev`,
noindex, bez bloku w menu, dopóki Szymon nie zdecyduje). Wygląd: system
z `/lets-up-v6` (`src/components/lu/LuStyl.astro`, `LuSkrypty.astro`),
ale **własny pomysł**: zob. „Mapa całości” w
`docs/podstrony-w-stylu-lets-up.md` i uwagę Szymona o hero „na jedno
kopyto”. Telefonu, przełącznika „Dziś / Z …”, rzędu „Brzmi znajomo?”
i taśmy zlecenia z Let’s Up tu nie ma.

## Czym Let’s Shift różni się od sąsiadów

| | Let’s Up | Let’s Shift | Strategia AI |
|---|---|---|---|
| Kto | mikro- i małe firmy, którym przybywa pracy | małe, średnie i duże firmy z wypracowanym sposobem działania i systemami zbieranymi latami | zarząd, który musi wybrać kolejność inicjatyw |
| Po co | obsłużyć więcej tym samym zespołem | przenieść firmę na systemy z czasów AI, nie tracąc tego, co działa | wiedzieć, od czego zacząć i ile to zwróci |
| Forma | program wokół jednego ograniczenia | program w etapach przez wszystkie systemy firmy, z prowadzącym | trzy tygodnie, dokument i decyzja |

Strategia może być wejściem do Let’s Shift (etap 0 robi jej pracę dla
całej mapy systemów). Pojedyncze usługi (systemy procesowe, integracje,
automatyzacja procesów z AI, narzędzia AI, szkolenia) są klockami fal.

## Słownik rysunków: mapa systemów

Jeden obraz niesie stronę: **mapa systemów firmy**. Kafle to narzędzia,
z których firma dziś korzysta (nazwane zwykłymi słowami, z rokiem:
„ERP z 2009 r.”, „37 arkuszy ofert”, „Access w magazynie”), linie to
przepływ danych, a tam, gdzie dane przenosi człowiek, zamiast linii stoi
zdjęcie osoby z podpisem („przepisuje zamówienia”). Przy każdym kaflu
zapada jedna z czterech decyzji, pisana małymi literami jak pieczątka
ołówkiem (bez wersalików): **zostaje**, **łączymy**, **wymieniamy**,
**wyłączamy**. Potem mapa przesuwa się do układu docelowego w warstwach:
dane w jednym miejscu → systemy procesów → AI w pracy → ludzie decydują.

Kolory decyzji (jedne dla całej strony): zostaje — szary grafit,
łączymy — niebieskawy turkus, wymieniamy — zieleń marki, wyłączamy —
bursztyn z przekreśleniem.

## Przykład przez całą stronę (PRZYKŁADOWY, do potwierdzenia)

Producent i dystrybutor armatury, 320 osób, od 1994 r., dwa zakłady
i magazyn centralny. Na mapie 24 elementy:

- zostaje (7): księgowość, system kadrowo-płacowy, ERP jako księga (ale
  połączony), sklep B2B, poczta firmowa, dysk firmowy, telefonia;
- łączymy (6): ERP z resztą, sklep B2B z magazynem, poczta zamówień,
  kurierzy, bank, system jakości;
- wymieniamy (7): 37 arkuszy ofert → system ofert i zamówień; Access
  w magazynie → moduł magazynu; papierowe karty produkcji → aplikacja na
  hali; raport zarządu z czterech arkuszy → raport z jednej bazy;
  reklamacje w mailach → obieg reklamacji z AI; cenniki w plikach → jeden
  cennik; harmonogram w tablicy korkowej → plan hali;
- wyłączamy (4): CRM kupiony w 2019 r. (dane z jednego kwartału), intranet,
  drugi program magazynowy, skrzynka „zamowienia2@”.

Ludzie na mapie (zdjęcia z `/makieta`): Kasia przepisuje zamówienia
z maila do ERP, Michał co piątek eksportuje raport, Ewa jedyna zna arkusz
cen, Tomasz nosi karty produkcji z hali do biura.

Etapy (kwartały liczone od startu):

| Etap | Kiedy | Co | Co się wyłącza |
|---|---|---|---|
| 0 · mapa | 6 tygodni | inwentaryzacja 24 elementów, decyzja przy każdym, architektura docelowa, plan etapów i kosztów, decyzja zarządu | — |
| 1 · proces, na którym firma zarabia | kw. 1–2 | jedna baza klientów i produktów, system ofert i zamówień połączony z ERP, asystent ofert | 37 arkuszy ofert (po 3 tygodniach pracy równoległej), skrzynka „zamowienia2@” |
| 2 · magazyn i hala | kw. 3–4 | moduł magazynu, aplikacja na hali, plan hali, sklep B2B ze stanami | Access w magazynie, drugi program magazynowy, papierowe karty |
| 3 · zarząd i obsługa | kw. 5–6 | raport zarządu z jednej bazy codziennie, obieg reklamacji z AI, adopcja w ostatnich działach | CRM z 2019 r., intranet, arkusz raportu |
| po programie | — | firma rozwija narzędzia z bieżącym wsparciem, kolejne zmiany według tych samych zasad | — |

## Kolejność sekcji i teksty

Copy według pamięci projektu (bez triad, antytez „X, a nie Y”, obietnic
w 2. osobie, dopisków; nagłówki bez kropki; „Wy”). Teksty niżej to wersja
robocza do dopracowania w pliku.

### 1. Hero — „To samo zamówienie: dziś i po programie” (wariant B)

Stan z 25.10.2026: Szymon o pierwszym hero (mapa systemów niżej): „fajnie,
ale nie rozumiem tego”. Z trzech nowych wariantów wybrał B i poprosił
o „dużo więcej problemów, dużo większy bałagan”, a stronę „po” na
poziomie produktu („zautomatyzowane, AI, agenci”). Hero strony to
`src/robocze/_lets-shift/HeroB.astro`; poprzednie hero A (`HeroA.astro`)
oraz warianty C (rejestr wymian) i D (mapa w prostej wersji) stoją na
`/lets-shift-hero`.

- Ta sama etykieta, H1 i Piotr pod przyciskiem. Lead: „Przechodzimy przez
  wszystkie narzędzia firmy i zmieniamy je etapami, dział po dziale. Tak
  wygląda jedno zamówienie przed programem i po nim.”
- Rysunek (trzecia wersja, 25.10.2026; Szymon do drugiej: „realniejsze
  daj, może bez tej stopki; zrób to jako pulpit, realistyczniej, mniej
  AI”): jedno zamówienie Hydro-Tech (400 zaworów DN50) na pulpicie tego
  samego komputera, dwa stany rozdzielone pionowym suwakiem (mysz, dotyk,
  klawiatura; raz przejeżdża sam). Obie strony mają tę samą spokojną
  tapetę i pasek zadań w stylu Windows 11; bez pasków podsumowania, tylko
  małe etykiety „Dziś” i „Po programie” w górnych rogach.
  DZIŚ (czwartek, 10:14): pasek zadań zatłoczony (Outlook z 47, Teams,
  pięć okien Excela, ERP, Access, zdjęcie karty). Problemy widać
  w samych aplikacjach: oflagowany wątek „RE: RE: FW: Zamówienie DN50 —
  pilne!!” (3 wiadomości), arkusz ofert „Tylko do odczytu. Plik edytuje:
  Ewa Lis” z #N/D! i #ADR!, folder 37 cenników, stary ERP z błędem zapisu
  i „Próba zapisu: 3” (użytkownik KLIS), Access z danymi z 21.10, zdjęcie
  karty bez podpisu, raport Michała z #ADR!, powiadomienia (3 nieodebrane
  od klienta, SMS kierowcy bez CMR, błąd zapisu Excela). Ludzie jako
  ślady: nadawca maila, wiadomości w Teams, autor pliku, pismo na karcie.
  Karteczki na monitorze.
  PO PROGRAMIE (poniedziałek, 9:53): na pasku trzy aplikacje. System
  zamówień firmy w przeglądarce jak dojrzała aplikacja biznesowa
  (nawigacja modułów, lista zamówień ze statusami, otwarte ZS-2026-0412
  z polami, pozycją, dokumentami i zakładką „Historia”, w której
  automatyzacja to zwykłe wpisy z etykietą „automatycznie”, a człowiek ma
  nazwisko). Jedyny wyjątek jako pasek w zamówieniu: „Klient prosi
  o dostawę 28.10 — decyzja: Kasia Lis”. Obok Outlook z tym samym wątkiem
  i wysłanym potwierdzeniem, w rogu powiadomienie „Zamówienie
  ZS-2026-0412 zapisane w ERP”. Bez twarzy agentów, iskierek i poświat.
  Bez JS i przy ograniczonym ruchu stan końcowy. Na telefonie przełącznik
  dwóch pełnych widoków.

### 1a. Pierwsze hero (wariant A, poprzedni) — ciemna plansza z mapą

- Etykieta jak w programach (rodzina z Let’s Up): **Let’s Shift** |
  „Program transformacji dla małych, średnich i dużych firm”.
- H1: „Przenosimy firmę do czasów AI <span>razem z tym, co w niej działa</span>”.
- Lead: „Let’s Shift to program dla firm, które mają wypracowany sposób
  działania i systemy zbierane latami. Przechodzimy przez wszystkie
  narzędzia firmy i przy każdym decydujemy, czy zostaje, łączymy je,
  wymieniamy czy wyłączamy. Zmiany wdrażamy etapami, dział po dziale, a po
  programie firma pracuje na danych w jednym miejscu, z AI w codziennej
  pracy.”
- Przycisk „Umów rozmowę”, link „Zobaczcie, jak idą etapy zmian →”, linia
  z twarzą Piotra (`.u6-tw`, wersja na ciemne tło).
- Rysunek pod tekstem, na całą szerokość, wystaje poza dolną krawędź
  planszy: **mapa systemów w ruchu**. Stan 1 „dziś”: kafle porozrzucane,
  splątane linie, zdjęcia ludzi w miejscach ręcznego przenoszenia danych.
  Stan 2: kolejno pojawiają się pieczątki decyzji. Stan 3 „po trzech
  etapach”: kafle przesuwają się do warstw (FLIP / transform), wymieniane
  zmieniają nazwę (stara przekreślona → nowa), wyłączane zjeżdżają do
  szuflady „wyłączone” z liczbą 4, ludzie przechodzą z linii do warstwy
  „ludzie decydują” z nowym podpisem („Kasia: wyjątki w zamówieniach”).
  Nad mapą podpis „Mapa systemów · producent armatury, 320 osób”, pod
  mapą oś „dziś · etap 1 · etap 2 · etap 3”. Pętla tylko w kadrze; bez JS
  i przy ograniczonym ruchu stan 3 z widocznymi pieczątkami.

### 2. Loga (komponent)

### 3. „Systemy zbierane latami” — spis z natury (zamiast „Brzmi znajomo?”)

- Nagłówek: „Systemy zbierane <span>latami</span>”, pod nim: „Każdy powstał
  z dobrego powodu. Razem sprawiają, że AI nie ma się do czego podłączyć:
  dane są w kilku miejscach, a zasady w głowach kilku osób.”
- Rysunek: kartka „Spis z natury” na podkładce (clipboard), osiem pozycji
  z rokiem i notatką ołówkiem przy każdej, np. „ERP z 2009 r. — nikt nie
  chce go ruszać”, „37 arkuszy ofert — wersję aktualną zna Ewa”, „CRM
  z 2019 r. — dane z jednego kwartału”, „Raport dla zarządu — dwa dni
  klejenia co miesiąc”, „Karty produkcji na papierze”, „Access w magazynie
  — napisał go pracownik, który odszedł w 2016 r.”, „Wyjątki w cenach —
  zna je trzech handlowców”, „Druga skrzynka zamówień — od awarii
  w 2021 r.”. Obok, większym stopniem, zdanie-teza.

### 4. „Czym jest Let’s Shift?” — definicja zapalana słowami (`data-u2d`)

„Let’s Shift to program Let’s automate dla firm z wypracowanym sposobem
działania, który przenosi firmę na systemy z czasów AI w kolejnych etapach,
bez zatrzymywania pracy. Zaczynamy od mapy wszystkich systemów i decyzji
przy każdym z nich, a kończymy na firmie, która sama rozwija swoje
narzędzia.” (wyróżnione: „przenosi firmę na systemy z czasów AI”).

### 5. Sekcja-podpis: „Etapy zmian, a firma pracuje dalej” — ciemna plansza, opowieść przyklejona do przewijania

- Rysunek po lewej: u góry linia „zamówienia w tygodniu” przez 6 kwartałów
  bez przerwy (spokojnie falująca, bez spadku), pod nią **wstęgi systemów**
  w czasie: stare (szare) kończą się, nowe (zielone) zaczynają, a na
  styku kreskowany odcinek „praca równoległa”. Pionowy kursor przesuwa się
  z krokami. Mała mapa z hero w rogu pokazuje, która część mapy się
  zmienia w tej etapu.
- Kroki (prawa kolumna):
  1. „Mapa: 24 elementy, przy każdym decyzja” — sześć tygodni,
     inwentaryzacja, architektura docelowa, plan etapów i kosztów, decyzja
     zarządu. „Po mapie możecie zakończyć, a plan zostaje u Was.”
  2. „Etap 1: proces, na którym firma zarabia” — oferty i zamówienia,
     jedna baza klientów i produktów, asystent ofert; arkusze ofert
     wyłączamy po trzech tygodniach pracy równoległej.
  3. „Etap 2: magazyn i hala” — moduł magazynu, aplikacja na hali, sklep
     B2B ze stanami; Access i papierowe karty znikają.
  4. „Etap 3: zarząd i obsługa klienta” — raport z jednej bazy codziennie,
     obieg reklamacji z AI, ostatnie działy; CRM z 2019 r. i intranet
     wyłączone.
  5. „Po programie firma rozwija narzędzia sama” — zasady, dokumentacja,
     konta po Waszej stronie, bieżące wsparcie, jeśli chcecie.
- Na końcu małe wezwanie z twarzą (`.u6-mc`): „Narysujemy mapę Waszej
  firmy”.

### 6. „Co prowadzimy przez cały program” — stos przyklejanych kart (każda inny obraz)

1. **Mapa i rejestr decyzji** — wydruk rejestru 24 elementów z pieczątkami,
   zgrupowany po decyzjach, z kolumną „powód”.
2. **Architektura docelowa** — rysunek techniczny (kreska na granatowo-
   zielonym tle z siatką, jak plan), warstwy i połączenia, podpis
   architekta.
3. **Wdrożenia w etapach** — prawdziwe znaki narzędzi (`/appto/brands/*`)
   i nowe systemy przy etapu, w której wchodzą; obok kalendarz kwartałów.
4. **Ludzie i nowe role** — zdjęcia osób z mapy z podpisem „było → jest”
   (Kasia: z przepisywania zamówień do wyjątków; Ewa: arkusz cen → właściciel
   jednego cennika; Tomasz: karty → plan hali); szkolenia na zadaniach
   działu.
5. **Przegląd zarządu co kwartał** — strona z prezentacji zarządu: wynik
   etapu na miarach z mapy, koszt w planie, decyzja „rozwijamy / poprawiamy
   / zatrzymujemy” z podpisem sponsora.

### 7. „Kto prowadzi program” — twarze po obu stronach stołu

- Po Waszej stronie: sponsor w zarządzie i właściciel każdej etapu
  (zdjęcia z `/makieta`).
- Po naszej: prowadzący programu (jedna osoba przez cały program),
  architekt, analitycy procesów, zespół wdrożeń, trener adopcji (zdjęcia
  z `/team`, role DO POTWIERDZENIA). Jeden zespół bez podwykonawców
  (fakt z /dlaczego-my).

### 8. Zielony pas (Pas, Piotr) — w połowie strony

„Jeśli wystarczy Wam jedna zmiana, powiemy to na pierwszej rozmowie”
(albo inne zdanie-werdykt).

### 9. „Na czym budujemy” — technologia i własność

- Teza WiseStack: „Cały kod pisze AI. Wszystkie decyzje podejmuje
  człowiek.” z linkiem do `/wisestack`.
- „Wszystko stoi na Waszych kontach”: konta projektu, od repozytorium po
  klucze do modeli AI, na Waszą firmę; po współpracy nie potrzebujecie
  od nas licencji (z /dlaczego-my).
- Appto jako jedna z możliwości dla asystentów firmy, nie warunek.

### 10. Wyniki i opinie (prawdziwe, ze strony głównej; karuzela)

### 11. „Ile kosztuje Let’s Shift?” — rachunek i plan kosztów

- Rachunek „tak liczymy koszt programu”: mapa — stała cena przed startem;
  każda etap — stała cena przed jej startem; prowadzenie programu —
  opłata miesięczna; licencje i utrzymanie — osobno, w planie kosztów;
  wyłączane systemy — ich koszt znika z planu w kwartale wyłączenia.
- Obok rysunek planu kosztów w kwartałach (słupki warstwowe bez kwot:
  prowadzenie, etapy, licencje nowych systemów; pod osią koszt starych
  systemów, który maleje przy wyłączeniach). Bez wykresu „nożyce”
  z Let’s Up.
- Pod spodem `CtaPasek`.

### 12. „Dla kogo” — dwie listy

Ma sens: firma ma wypracowany sposób działania i chce go zachować;
systemów jest kilkanaście i część przestała nadążać; jest sponsor
w zarządzie; firma może prowadzić zmianę przez kilka kwartałów.
Nie ma sensu: wystarczy Wam jedna zmiana (→ usługa, np. integracje albo
systemy dopasowane do firmy); najpierw musicie wybrać kolejność
inicjatyw (→ strategia AI); firma jest w trakcie zmiany modelu
biznesowego; mikro- i mała firma, której przybywa pracy (→ Let’s Up).

### 13. Kontakt (`.u6-kon` + Kontakt) i FAQ (ostatnie)

Kontakt: „Zacznijmy od mapy Waszych systemów”, pytanie formularza „Jakie
systemy dziś prowadzą firmę i co chcecie zmienić?”.

FAQ (szkic): Czy musimy wymienić ERP? · Ile trwa program? · Czy firma
zatrzyma się na czas zmian? · Czy możemy zakończyć po mapie albo po
pierwszej etapu? · Kto jest właścicielem kodu i danych? · Co z ludźmi,
których praca się zmieni? · Czym Let’s Shift różni się od strategii AI
i od Let’s Up? · Czy musimy korzystać z Appto? · Jak liczycie koszt?

## DO POTWIERDZENIA PRZED PUBLIKACJĄ

- Nazwa i grupa docelowa („małe, średnie i duże firmy”), opis programu.
- Model handlowy: stała cena mapy i każdej etapu, miesięczna opłata za
  prowadzenie, licencje osobno (propozycja z dokumentu o ofercie
  z 24.10.2026, nie potwierdzony cennik); „po mapie możecie zakończyć”.
- Długość etapów i programu (kwartały w przykładzie), praca równoległa.
- Role i zdjęcia zespołu po naszej stronie.
- Cały przykład producenta armatury jest poglądowy.
- Blok w megamenu: od 25.10.2026 druga karta obok Let’s Up (Nawigacja.astro,
  LETS_SHIFT; miniatura: pasek 24 systemów w kolorach decyzji), widoczna
  tylko w `npm run dev` (POKAZ.letsShift). Przy publikacji: flaga na true.

## Stan po uwagach z 26.10.2026

- „Fale” w całej stronie i w tym dokumencie nazywamy „etapami” (Szymon:
  „nie możemy po prostu nazwać tego etapem?”). Kroki jednego zamówienia
  w opowieści to „kroki”.
- Hero B: bez linii z Piotrem; strona „po programie” to Appto w widoku
  Inbox AI (wzorzec `public/produkty/slajdy/ap-1-inbox.webp`): grupy „W toku”,
  „Do przejrzenia” (prośba klienta o dostawę 28.10, decyzja Kasi), „Zrobione
  dziś”, twarze agentów (przyjęć zamówień, ofert, ERP, planowania,
  statusów), panel zamówienia ZS-2026-0412 z historią „kto zrobił”. Obok
  Outlook z potwierdzeniem i powiadomienie Appto.
- „Czym jest”: dokument „Program w skrócie” (oś: Mapa · 6 tygodni → Etap 1
  → Etap 2 → Etap 3 → Rozwój, rubryki, podpis prowadzącego). Pas czterech
  decyzji usunięty (zostają w rejestrze).
- Opowieść o zamówieniu: wycinki prawdziwych ekranów zamiast kafelków
  z ikonami.
- „Z czego składa się program”: piąta karta to wiedza firmy (segregatory
  z właścicielami, karta źródła „w Appto: Kontekst › Sprzedaż”).
- „Co możemy dla Was zbudować”: własny system, Appto i agenci AI,
  integracje, wiedza firmy, szkolenia i adopcja (bez Ofert AI i Wingmana);
  WiseGroup jako „Razem z całą WiseGroup” z Finerto.
- „Jak pracujemy razem”: kanał programu w Slacku i lista osób.
- Koszty: schody z ceną przy każdym kroku (rozmowa bezpłatnie → mapa stała
  cena przed startem → etap 1 i kolejne, stała cena podana po mapie →
  utrzymanie i rozwój miesięcznie), rachunek i zdanie, od czego zależy
  kwota; bez wykresu w kwartałach.

## Stan po drugiej rundzie uwag z 26.10.2026

- „Jedno zamówienie” → „Jedna sprawa, dziś i po programie”: przełącznik
  trzech przykładów (zamówienie u producenta; zgłoszenie serwisowe w firmie
  usługowej; projekt dla klienta B2B), po sześć kroków. Zamiast
  scrollytellingu przebieg, który odtwarza się sam w kadrze (pauza pod
  kursorem, strzałki, klik w krok). Wiersz kroku: dziś (kto, co ręcznie,
  narzędzie, czas) i po programie (agent: wejście → wynik, czas, ptaszek);
  jeden krok w przykładzie to decyzja człowieka ze zdjęciem. Bez dopisków
  o etapie programu. Wezwanie na końcu: „Zacznijmy od bezpłatnej diagnozy
  Waszej firmy”.
- „Co dostajecie w programie”: stos kart bez numeracji, równe wysokości.
- „Co możemy dla Was zbudować”: własny system, Appto i agenci AI,
  integracje; opis zakładki obok okna (mieści się w ekranie 1440 × 900).
- WiseGroup → „Kompetencje do całej transformacji”: klocki wokół
  Let’s automate (SellWise: strategia i doradztwo biznesowe, AdWise:
  marketing, HireWise: ludzie i rekrutacja, Finerto: finanse i prawo).
- Schody przeniesione do „Jak przebiega program” (bez cen). „Ile kosztuje”:
  oferta na mapę (jedna strona) i fragment planu etapów z zamazanymi
  kwotami; licencje osobno, w planie kosztów.

## Stan po trzeciej rundzie uwag z 26.10.2026

- „Jedna sprawa, dziś i po programie”: powrót do opowieści przyklejonej do
  przewijania (pasek kroków, panele „Dziś” i „Po programie”, kroki po
  prawej) z przełącznikiem trzech przykładów nad nią. „Dziś” to wycinki
  prawdziwych narzędzi (Outlook, Excel z #N/D!, stary ERP z błędem, zdjęcie
  kartki, Teams, ekran telefonu), „Po programie” to wycinki Appto i systemu,
  na których widać wynik (rekord z uzupełnionymi polami, wiersz Inbox AI
  z ptaszkiem, wysłana wiadomość, decyzja człowieka), pod każdym jedno
  zdanie. Bez dopisków o etapach.
- „Co robimy w programie”: nagłówki kart mówią o efekcie dla firmy,
  etykieta nad nimi o tym, co robimy. Zielony pas z Piotrem stoi zaraz po
  tej sekcji.
- „Co możemy dla Was zbudować”: wyśrodkowany nagłówek, zakładki nad
  oknem (własny system, Appto i agenci AI, integracje), niższe okno, opis
  pod nim; bez zdania o mapie. Integracje jako rejestr połączeń ze
  znakami narzędzi, przebiegami z 24 godzin i właścicielami.
- „Jak pracujemy razem” → „Ile czasu zajmie to Waszym ludziom?”: tydzień
  programu w Kalendarzu Google (kilka bloków, reszta wolna), czas na
  tydzień na rolę (do potwierdzenia) i prowadzący po naszej stronie.

## Stan po czwartej rundzie uwag z 26.10.2026

- Hero B, strona „po”: zamiast Appto własny system firmy „Armatura”
  (`src/robocze/_lets-shift/SysArmatura.astro`, Inter, jeden akcent marki
  klienta): widok zamówienia ZS-2026-0412 z krokami, osią aktywności, w której
  obok ludzi pracują agenci AI (twarze z agent-face.ts), kartą decyzji Kasi,
  pozycjami, dokumentami i panelem „Agenci firmy” w menu. Ten sam komponent
  stoi w pierwszej zakładce „Co możemy dla Was zbudować”.
- „Po programie” → „Po zmianie” (tytuł sekcji, etykiety paneli, suwak).
  Wycinki „Po zmianie” w opowieści mają wygląd systemu firmy (rekord
  z uzupełnionymi polami, wynik z osią aktywności, decyzja), z marką każdej
  firmy z przykładu.
- „Co robimy w programie”: stos kart przykleja się już od 620 px wysokości
  okna (sprawdzone przy 680, 760 i 900 px).
- „Co możemy dla Was zbudować”: pięć zakładek (własny system firmy, Appto
  i agenci AI, integracje, kompetencje zespołu, szyte na miarę), opis nad
  oknem, okno do 1180 px. „Szyte na miarę” to animacja: szkic z warsztatu
  → moduły systemu → połączenia → agenci → działa.
- Od „Ile czasu zajmie to Waszym ludziom?” do „Dla kogo” ciągłe tło.
- Narracja dla firm z historią: „działają od lat i mają sprawdzony sposób
  pracy” w hero, „Czym jest”, metryczce i „Dla kogo”; zdania o prowadzeniu
  (co tydzień prowadzący mówi, co trzeba przygotować po stronie firmy);
  prostsze słowa zamiast „rejestru” i „architektury docelowej”; nowe pytanie
  w FAQ o firmy bez działu IT i doświadczenia z AI.

## Stan po piątej rundzie uwag z 26.10.2026

- „Ile czasu zajmie to Waszym ludziom?” → „Ekspertyza po naszej stronie,
  decyzje po Waszej” (Szymon: cała ekspertyza po naszej stronie, firma
  potrzebna do decyzji i do opowiedzenia, jak pracuje; bez wrażenia braku
  kontroli). Duża ciemna kolumna: nasz zespół (prowadzący, architekt,
  analitycy, wdrożenia, trener) i siedem rzeczy, które robimy (przegląd,
  rozmowy i pomiar, analiza, projekt zmian, budowa i wdrożenie, szkolenia,
  dokumentacja). Wąska kolumna po stronie firmy: opowiedzieć, jak pracuje
  (kilka rozmów na początku), decyzje (sponsor, ok. 1 h w tygodniu),
  odbiór każdego etapu (właściciel etapu, ok. 3 h w tygodniu) — godziny DO
  POTWIERDZENIA — i karta odbioru etapu 1 z podpisem właścicielki etapu.
  Na dole cztery punkty kontroli: zakres i cena akceptowane przez zarząd
  przed każdym etapem, nic nie trafia do zespołu bez odbioru, cotygodniowy
  status, wszystko na kontach firmy. Kalendarz Google zastąpiony kartą
  odbioru, bo pokazuje decyzję i podpis firmy, a nie tylko czas.

## Stan po szóstej rundzie uwag z 26.10.2026

- „Ekspertyza po naszej stronie, decyzje po Waszej” przebudowana na wzór
  #zespol z nowej wersji „Dlaczego my?” (src/robocze/dlaczego-my-v11.astro;
  Szymon: „jest lepiej, ale nie podoba mi się… już jest dużo takich kart”).
  Tło papieru jak sąsiednie sekcje. Nagłówek .v8-gl: tytuł po lewej,
  po prawej akapit — przegląd, rozmowy, analiza, projekt, wdrożenie,
  szkolenia i dokumentacja po naszej stronie, bez podwykonawców; po
  stronie firmy kilka rozmów na początku, potem decyzje i odbiory etapów
  (sponsor ok. 1 h, właściciel etapu ok. 3 h w tygodniu — DO
  POTWIERDZENIA). Pod spodem pięć portretów schodkowo (te same osoby,
  role i kadry co w v11, z Piotrem Wojciukiem w środku) i ciemna wstęga
  z sygnetem: zarząd akceptuje zakres i cenę przed każdym etapem,
  cotygodniowy status, wszystko na kontach firmy; pogrubione sedno „Nowe
  narzędzia wchodzą do pracy po Waszym odbiorze.” CSS 1:1 z v11
  (.dm7-lu/.dm7-lk/.dm7-lu-st → .sh-lu/.sh-lk/.sh-lu-st), także mobile.
- Usunięte: karta z siedmioma pozycjami, kolumna ról z awatarami, kolumna
  „Po Waszej stronie”, karta odbioru etapu z podpisem i pasek czterech
  punktów kontroli. Kartę odbioru zastąpiło zdanie we wstędze.

## 26.10.2026 — strona produkcyjna i odchudzenie

- Szymon: strona produkcyjna, liczby prawdziwe, bez oznaczeń przykład/demo.
  Zmienione: wstęp „Jedna sprawa” („Trzy firmy różnego rodzaju:
  produkcyjna i dwie usługowe…”), etykieta przełącznika („Firmy”),
  strzałki pokazu („Poprzednia/Następna zakładka”), dwie odpowiedzi FAQ
  (i JSON-LD): „u producenta armatury z tej strony”. Awatary osób z kopii
  w /lets-shift/ (ścieżka /makieta znikała z HTML). Grep zbudowanej strony
  po „przykład/poglądow/demo/makiet/fikcyj”: 0.
- Odchudzenie bez zmian wyglądu: firmy 2 i 3 w „Jedna sprawa”, panele
  kroków 2–6 pierwszej firmy, sceny kart „Co robimy w programie”
  i zakładki 3–5 „Co możemy dla Was zbudować” w <template> (wstawiane przy
  pierwszym wyborze albo tuż przed kadrem); zakładka 1 klonuje okno
  Armatury z hero; twarze agentów jako <use> jednego zestawu symboli
  (_lets-shift/twarze.ts); zamiast LuStyl _lets-shift/ShiftStyl.astro
  z używanymi regułami; mniejsze pliki zdjęć zespołu i Piotra w kółku.
  Treść <template> zawsze jako komponent (SprawaTresc, SprawaPanel,
  ProgramScena, BudujemyZakladka): kompilator Astro psuje <i>, <em>, <s>,
  <small> wpisane wprost w <template>.
