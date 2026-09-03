# Podstrony usługowe — jak je robię

Zapis metody wypracowanej przy czterech podstronach: `/strategia-ai`,
`/rozwiazania-ai`, `/szkolenia-ai`, `/systemy-procesowe` (30.08.2026).
Kolejność kroków ma znaczenie — przeskoczenie któregoś zawsze kończyło się
cofaniem pracy.

---

## 1 · Najpierw czytam rodzeństwo, nie brief

Zanim napiszę zdanie, przechodzę istniejące podstrony i **wypisuję, co jest
zajęte**: jakie mechanizmy wizualne, jakie szkielety sekcji, jakie figury
retoryczne, jakie artefakty. Bez tej listy każda kolejna strona zbiega do
średniej z poprzednich — a to jest dokładnie ta wada, od której zaczęła się
przebudowa `/strategia-ai` („czuję się, jakby każda nasza strona była taka
sama").

Wynikiem jest tabela „czego nie wolno powtórzyć". Przy czwartej stronie
wyglądała tak:

| Strona | Słownik wizualny |
|---|---|
| `/strategia-ai` | łuki wypełniane po okręgu, przewijany strumień wierszy, siatka stu kwadratów, kartka ze skanem |
| `/rozwiazania-ai` | przekrój warstw, próg pewności, dwutorowy harmonogram |
| `/szkolenia-ai` | jednostki do policzenia: ludzie w kresce, minuty w kostce |
| `/systemy-procesowe` | oś czasu sprawy: praca kontra czekanie |

---

## 2 · Lista pytań zakupowych dla TEJ usługi

Nie ogólna lista B2B, tylko pytania, które padają przy tym konkretnym
produkcie, w kolejności, w jakiej padają. To ona układa sekcje — nie odwrotnie.

Przykłady, jak bardzo się różnią:

- **strategia** (produkt: dokument) → skąd wiem, że kolejność jest dobra
- **rozwiązania AI** (produkt: system) → co się stanie, kiedy model się pomyli
- **szkolenia** (produkt: zmiana zachowania) → co zostanie po trzech miesiącach
- **systemy** (produkt: aplikacja) → czy nie utoniemy w projekcie na dwa lata

Wszystko, co nie odpowiada na żadne pytanie z listy, wypada przed pierwszym
szkicem. Tak wyleciały: sekcja o zespole, ściana opinii, sekcja mitów,
diagram architektury, agenda godzinowa szkolenia.

---

## 3 · Teza pozycjonująca: jedno zdanie, którego konkurencja nie przepisze

Szukam rzeczy, która jest **prawdziwa, różnicująca i niewygodna do skopiowania**.
Zwykle leży w tym, co konkurencja przemilcza, bo brzmi jak wada.

| Strona | Teza |
|---|---|
| strategia | kategoria sprzedaje dokument; jedyne, czego nie skopiują, to zespół, który potrafi wdrożyć |
| rozwiązania AI | model to 6% pracy; o wyniku decyduje siedem warstw wokół niego |
| szkolenia | kategoria sprzedaje dzień warsztatu; my sprzedajemy dwunasty tydzień |
| systemy | gotowe narzędzie zawiera średnią rynku; przewaga leży w tym, czym się od niej różnicie |

**Teza musi mieć własne miejsce w rytmie strony.** Zdanie o średniej rynku
najpierw wylądowało jako trzeci akapit sekcji definicyjnej i zginęło — po
uwadze Szymona dostało osobną linię w dużym stopniu pisma pod nagłówkiem.
Reguła: *argument, który ma być zapamiętany, nie może być akapitem trzecim.*

---

## 4 · Dwie–trzy rzeczy sprawdzalne przed podpisaniem umowy

Bez nich strona jest zwykłą ofertą. Sprawdzalne znaczy: klient może po
dostawie zweryfikować, czy dotrzymaliśmy słowa.

- strategia → arkusz z kolumną „skąd" przy każdej liczbie
- rozwiązania AI → próg jakości mierzony na sprawach klienta **przed** budową,
  zapisany w umowie razem z warunkiem odstąpienia
- szkolenia → definicja adopcji spisana przed warsztatem (czynność na
  prawdziwej sprawie, nie logowanie do narzędzia)
- systemy → pomiar czasu sprawy przed startem; kolejne uruchomienia

Do tego zawsze jedno zdanie o **braku prowizji od dostawców** i o tym, że
repozytorium i klucze są klienta od pierwszego dnia.

---

## 5 · Osobny słownik wizualny + jeden motyw, który niesie stronę

Dwie zasady:

**a) Żaden mechanizm z rodzeństwa się nie powtarza.** Nie chodzi o inne
kolory — chodzi o inny rodzaj rysunku. Łuk, strumień, przekrój, kreska
do policzenia, oś czasu.

**b) Jedna miara powtórzona przez całą stronę.** To ona robi z zestawu
rysunków jedną argumentację:

- `/szkolenia-ai` — wszystko da się policzyć wzrokiem: ludzie w hero,
  ludzie w ciemnym pasie, ludzie w dowodach, minuty w sekcji o dołku
- `/systemy-procesowe` — czas sprawy: hero mierzy nim jedną ofertę, ciemny
  pas efekt każdego uruchomienia, sekcja dowodów trzy wdrożenia

Liczby między rysunkami **muszą się spinać**. Na `/szkolenia-ai` 5 + 7 osób
z ciemnego pasa to dokładnie te 12 z 14, które stoją w hero. Na
`/systemy-procesowe` kokpit pokazuje 1,5 dnia, czyli wynik po drugim
uruchomieniu z ciemnego pasa. Czytelnik ogląda jedno wdrożenie, nie zestaw
przypadkowych ekranów.

---

## 6 · Rysunek ma nieść argument, nie ozdabiać

Test: **czy da się z rysunku odczytać liczbę albo proporcję, której nie ma
w tekście obok?** Jeśli nie — to ilustracja i wypada.

Najlepsze rysunki z tych czterech stron niosą fakt, którego konkurencja nie
powie, bo brzmi jak wada produktu:

- **dołek adopcji w trzecim tygodniu** (`/szkolenia-ai`) — narysowany,
  nie ukryty; to on sprzedaje resztę programu
- **pierwsze podejście trwa dłużej niż stary sposób** (`/szkolenia-ai`) —
  65 minut kontra 40; dopiero to tłumaczy, po co jest powrót
- **dwie z pięciu spraw idą do człowieka** (`/rozwiazania-ai`)
- **praca skraca się tylko o osiemnaście minut** (`/systemy-procesowe`) —
  cała reszta różnicy to czekanie

**Uczciwość rysunku jest przewagą.** Wersja, w której wszystko wychodzi,
czyta się jak materiał sprzedażowy.

---

## 7 · Czasy animacji liczone z danych, nie wpisywane ręcznie

Wszystkie cztery hero mają tablicę w nagłówku pliku i funkcję zamieniającą
sekundy na procenty cyklu. Po zmianie liczby animacja przelicza się sama.

Najlepszy przypadek: hero `/systemy-procesowe`, gdzie **czas animacji jest
zarazem daną**. Głowica jedzie przez obie osie ze stałą prędkością, więc
krótsza kończy się w ułamku czasu dłuższej. Tego argumentu nie da się
zrobić zdaniem.

Podział ruchu, sprawdzony:

- **hero** — pętla z własnego zegara, długie przytrzymanie stanu końcowego
- **sekcje** — odsłonięcie raz, przy wejściu w kadr (`data-anim` + `.on`)
- **maksymalnie jedna** animacja sterowana scrollem na stronę; więcej robi
  z niej karuzelę

Każda ma stan końcowy czytelny przy `prefers-reduced-motion`.

---

## 8 · Rytm: szkielety sekcji i tła

Z pamięci projektu: ten sam szkielet powtórzony pięć razy czyta się jak
wygenerowany. Na każdej stronie pilnuję **co najmniej trzech różnych
szkieletów nagłówka** i jednego miejsca bez nagłówka w ogóle (zdanie w dużym
stopniu pisma zamiast tytułu).

Tła: biel → `#f4f8f2` → biel → `#0e2b1d` → biel. **Ciemny pas pada raz**
i bierze najcięższy argument strony. Dwa jasne bloki pod rząd są dopuszczalne,
trzy nie — przy dokładaniu sekcji zawsze przeliczam cały rytm od nowa.

Formy: wiersze na liniach są formą domową i wolno je powtarzać, ale **każde
wystąpienie ma inną liczbę kolumn i inną hierarchię**. Kafle zostają tam,
gdzie służą porównaniu wzrokiem, znikają tam, gdzie są tylko pojemnikiem
na akapit.

Jeden moment asymetrii na stronę: wcięty wiersz z akcentową krechą, wcięta
kartka, blok rozpięty na dwie kolumny.

---

## 9 · Sekcja, która niczego nie sprzedaje

Każda z czterech stron ma miejsce, w którym odsyłamy klienta gdzie indziej
albo przyznajemy się do granicy. To ono uwiarygodnia resztę.

- strategia → „jeszcze nie, jeśli"
- rozwiązania AI → „kiedy nie warto tego budować" (dwie z trzech dróg są tańsze)
- szkolenia → „dwie osoby zostaną przy starym sposobie i to jest w planie"
- systemy → „kiedy to nie ma sensu"

**Ale tylko raz na stronę.** Przy `/systemy-procesowe` ta sama figura stała
w trzech miejscach naraz (kolumna przy definicji, blok w sekcji o firmach,
FAQ) — jedno z nich było zmarnowaną przestrzenią i wyleciało.

I **granica musi być prawdziwa**. Zdanie „nie zastępujemy ERP-a ani CRM-a"
brzmiało skromnie i było fałszywe: CRM budujemy często. Fałszywa skromność
kosztuje wiarygodność tak samo jak przechwałka.

---

## 10 · Copy: czego pilnuję przy każdym zdaniu

Z pamięci projektu, sprawdzane grepem przed oddaniem:

- **zero triad czasownikowych** („czyta, decyduje i odpowiada")
- **zero antytez „X, a nie Y"** — to najczęstsza wpadka, przy każdej stronie
  wychodziło ich po pięć–sześć w przeglądzie końcowym
- **zero obietnic otwieranych drugą osobą** („Wiesz, co wdrożyć…")
- **nagłówki bez kropki**, chyba że są pytaniem
- **żargonu nie da się ukryć w prostej polszczyźnie.** „Odcinek" wyglądał na
  zwykłe słowo, a był wewnętrzną nazwą etapu i nic nie mówił klientowi.
  Zastąpiony przez „uruchomienie" — nazwę zdarzenia, na którym klientowi
  zależy. Test: czy klient użyłby tego słowa, opowiadając o tym koledze?
- **nagłówek sekcji sprzedaje przyrost, nie wyjście.** „Po każdym odcinku
  możecie przestać" oddawało tytuł gwarancji rezygnacji. Gwarancja została,
  ale jako fakt handlowy na końcu sekcji; tytuł mówi teraz, co przybywa.

Pierwsze zdanie sekcji definicyjnej piszę jako definicję z podmiotem równym
nazwie usługi — po ten fragment sięgają modele językowe i wyróżnione
odpowiedzi w wyszukiwarce. Nie rozbijać go na dwa zdania.

---

## 11 · Pokazać produkt, jeśli strona sprzedaje produkt

Na `/systemy-procesowe` świadomie nie było zrzutów — uzasadnienie („każdy
system wygląda inaczej") było prawdziwe, ale wniosek zły. **Kupujący
oprogramowanie chce zobaczyć oprogramowanie.**

Jak to zrobiłem, żeby nie było slopem:

- **interfejs rysowany w HTML**, nie wklejony jako obrazek: nie udaje cudzego
  wdrożenia, skaluje się, poprawka to edycja tablicy w nagłówku pliku
- **każdy ekran dowodzi tezy**, która pada gdzie indziej na stronie —
  podpisy nie opowiadają o interfejsie
- **jedna sprawa przechodzi przez wszystkie ekrany** (ten sam numer
  w karcie i w rejestrze)
- **poziomy pas z przewijaniem**, nie siatka: cztery widoki kosztują tyle
  wysokości, co jeden, a dołożenie piątego nie kosztuje nic
- pod spodem zdanie, że widoki są poglądowe

Reguła ogólna: **wysokość strony jest walutą.** Jeśli sekcja ma być dowodem,
a nie rozdziałem, szuka się układu, który mieści ją w jednym ekranie.

---

## 12 · Wszystko, czego nie wiem, jest oznaczone

W nagłówku każdego pliku stoi blok „DO POTWIERDZENIA PRZED PUBLIKACJĄ":
liczby wzięte z obserwacji zamiast z pomiaru, założenia o kształcie usługi,
zdania będące decyzją handlową Szymona, przykładowe wdrożenia do podmiany.

Osobno: **kwoty nie ma na żadnej stronie poza `/strategia-ai`**, gdzie
widełki są potwierdzone. Wymyślona liczba podważyłaby wszystko, co strona
mówi o liczeniu.

Przy każdym rysunku, który w czymś ustępuje prawdzie, stoi komentarz —
np. paski pracy w hero `/systemy-procesowe` mają `min-width: 7px`, bo przy
prawdziwej skali zajmowałyby ułamek piksela.

---

## 13 · Weryfikacja zrzutem

Headless Chrome łapie kadr, zanim przejścia CSS dobiegną końca, więc:

- **stan końcowy** → `--force-prefers-reduced-motion`
- **konkretna klatka animacji** → tymczasowa strona w `dist/`, która ładuje
  podstronę w `<iframe>` i wstrzykuje
  `*{animation-delay:-Xs !important;animation-play-state:paused !important}`;
  pauza plus ujemne opóźnienie daje dokładnie tę klatkę, niezależnie od
  timingu zrzutu
- **animacja sterowana scrollem** → druga taka strona, która tylko ustawia
  `scrollTo` w iframie
- **widoki poniżej 500 px** → `<iframe>` o zadanej szerokości, bo tyle wynosi
  minimalna szerokość okna w headless

Zawsze przechodzę całą stronę w kawałkach po ~1200 px, a potem osobno
telefon. Połowa błędów w tej sesji wyszła dopiero na zrzucie.

---

## 14 · Pułapki, które kosztowały czas

- **`<span>` bez `display:block`** — `height` nie ma na co działać, pasek
  jest niewidoczny, zero błędów w konsoli. Złapane trzy razy. Przy każdym
  nowym pasku sprawdzać to jako pierwsze.
- **Animacja jako jedyny nośnik danych.** Jeśli szerokości albo wartości stoją
  wyłącznie w wygenerowanych klatkach, blok `prefers-reduced-motion` z regułą
  `animation: none` zdejmuje razem z animacją także liczby — wykres jest pusty
  i nic nie zgłasza błędu. Te same wartości muszą wchodzić drugą drogą, jako
  zmienne w stylu elementu, które blok reduced-motion czyta.
- **`animation: none` nie wystarczy, jeśli nie obejmie wszystkich elementów.**
  Działająca animacja nadpisuje zwykłe deklaracje opacity i transform, więc
  każdy element niosący stan musi być wymieniony w regule reduced-motion.
- **Podglądanie klatek przez `animation-delay:-Xs !important` psuje strony,
  które same używają `animation-delay` do fazowania.** Pewniejsza metoda,
  dobra wszędzie: `doc.getAnimations().forEach(a => { a.currentTime = T*1000;
  a.pause(); })` w stronie pomocniczej z iframem.
- **dzielenie przez `var()` w `calc()`** — Chrome cicho odrzuca całą
  deklarację. Ułamek liczyć w JS, w CSS zostawić pozycjonowanie.
- **`npx astro build` czyści `dist/`** — kasuje strony pomocnicze do zrzutów.
  Odtwarzać po każdym budowaniu, inaczej iframe łapie 404 i zrzut jest pusty.
- **badge jako `inline-flex` w wierszu `flex`** — cyfra rozjeżdża się
  z kółkiem. `inline-block` + `line-height` równe wysokości.

## 14b · Czego nauczyła najsłabsza strona

`/systemy-dla-klientow` wypadła najsłabiej z sześciu. Dwie przyczyny warte
zapamiętania:

- **Powtórzony motyw to zaleta, powtórzona forma to monotonia.** Ta strona
  miała listę słupków w hero i listę słupków w ciemnym pasie. Jedna miara
  przez całą stronę — tak; ten sam gatunek rysunku dwa razy — nie.
  Sprawdzona para: **jedna animacja z prawdziwym ruchem i jeden artefakt**.
- **Teza musi być pokazana, nie wypowiedziana.** Zdanie o tym, że portal musi
  być szybszy od telefonu, stało w tekście i żaden rysunek go nie dowodził.
  Dla porównania na `/automatyzacje-integracje` teza brzmi „automatyzacja,
  o której awarii nikt się nie dowiaduje, jest gorsza od jej braku" — i hero
  po prostu pokazuje linię, która milknie.
- **Nic nie może zdradzać pointy z góry.** Jeśli rysunek ma coś ujawnić
  w połowie, wszystkie ślady tego muszą mieć `opacity: 0` do właściwej chwili:
  etykiety stanu, znaczniki, kolory. Pierwsza wersja pulsu miała status
  „stanęła 03:12" widoczny od startu i cała dramaturgia znikała.

## 15 · Na koniec: podpięcie i zapis decyzji

Każda podstrona kończy się tym samym:

1. megamenu w `LaBase.astro` i w `index.astro`, wiersz oferty w sekcji S4,
   zdjęty `data-krok-link` (pozycja prowadzi teraz poza stronę główną)
2. wpis w `sitemap.xml.js`
3. **`docs/<strona>-koncepcja.md`** — czym się różni od rodzeństwa, teza,
   mechanizmy sprawdzalne, warstwa wizualna, układ sekcji, czego świadomie
   nie ma, co do potwierdzenia, jak podglądać animacje

Dokument koncepcji piszę **razem ze stroną, nie po niej**, i dopisuję do
niego każdą korektę razem z powodem. Przy czwartej stronie to on był
najszybszym sposobem sprawdzenia, czy nie powtarzam czegoś z trzeciej.
