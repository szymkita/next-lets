# Let’s Up — koncepcja podstrony i bloku w megamenu

## v6 (25.10.2026) — `/lets-up-v6`

Uwagi Szymona do v5 i odpowiedzi w v6:

- „Gdzie znika czas”: przyklejony rysunek stoi niżej (dalej od menu).
  Kroki opowiadają, na czym polega usługa: pomiar → połączone narzędzia
  (ich część paska podświetla się i znika, 6 h 24 min → 4 h 35 min) → AI
  (2 h 34 min) → spisane zasady akceptacji → wynik (223 → 557 zleceń).
  Czynności mają ogólne nazwy („Dobór podwykonawcy”, „Przepisywanie danych
  między narzędziami”), a pod nagłówkiem zdanie, że w innych branżach
  liczymy je tak samo. Na końcu małe wezwanie z twarzą Piotra.
- „Pięć części”: każda karta w innym języku obrazu, bez okien aplikacji:
  raport z analizy, mapa procesu w czterech torach (klient, asystent AI,
  spedytor, właściciel) z decyzją „marża od 12%?”, prawdziwe narzędzia
  firmy (Gmail, Arkusze, Dysk, Slack, ifirma, GPS) wokół systemu zleceń,
  ściąga przyklejona taśmą z karteczkami pytań zespołu, wykres z przeglądu
  po miesiącu.
- „System… z AI w środku”: trzy różne okna na płótnie 1920 × 1040
  skalowanym do slajdu. Appto z kitu produktu
  (~/.claude/skills/appto-feature-film/kit/world.html): pływająca pigułka
  nawigacji przy lewej krawędzi, czat z krokami „Appto używa Gmail /
  Arkuszy Google / czyta Kontekst”, panel dokumentu wyceny; bez
  przełącznika aplikacji, którego w produkcie nie ma w tej formie. Gmail
  z kitu webapps (WEBAPPS.md) z wersją roboczą odpowiedzi i panelem
  dodatku. Własny system jako tablica zleceń w osobnym wyglądzie.
- Opinie: cztery prawdziwe cytaty ze strony głównej w karuzeli ze
  strzałkami.
- Schody: ceny etapów w jednym białym wierszu tuż pod stopniami, opisy
  niżej (wcześniej skakały góra-dół).
- „Ile to kosztuje?”: rachunek mówi, co obejmuje cena analizy
  i wdrożenia oraz co jest poza ceną etapu; pod panelem pasek z twarzami.
- Nowa sekcja „Więcej klientów, kiedy firma jest na nich gotowa”: AdWise,
  SellWise, Let’s Up, HireWise jako droga zlecenia; pozycja w „Program nie
  ma sensu, gdy” i pytanie w FAQ odsyłają do grupy.
- Zielony pas wyżej, po wynikach i opiniach (historia miejsc: v2 pod
  opowieścią, v3 po „Brzmi znajomo?” — za wcześnie; v4 przy kosztach, v5
  po „Dla kogo” — za nisko). Piotr także pod przyciskiem w hero. Kontakt
  nad FAQ, nagłówek „Sprawdźmy, czy Let’s Up jest dla Was” w trzech
  wierszach.
- Megamenu i panel mobilny: jasna karta jak hero programu, nagłówek
  „Firma rośnie szybciej niż zespół”, jedno zdanie i miniatura taśmy
  zlecenia (6 h 24 min dziś, 2 h 34 min po zmianach, przykład) zamiast
  abstrakcyjnego wykresu.

Do sprawdzenia przed publikacją: tablica zleceń i panel dodatku Gmaila to
makiety (fikcyjne dane); dodatek do Gmaila nie jest istniejącym produktem.

## v5 (25.10.2026) — `/lets-up-v5`

Uwagi Szymona do v4 i odpowiedzi w v5:

- Telefon „Z Let’s Up”: jedno zbiorcze powiadomienie asystenta i jedna
  decyzja zamiast czterech kart.
- Pod tytułem wyjaśnienie, czym jest program; nazwa „mikro- i małych firm”
  (bez „mikrofirm”); bez „firma spedycyjna, 14 osób” i bez liczb w hero.
- „Brzmi znajomo?”: osiem sytuacji w przesuwanym rzędzie ze strzałkami.
- Tło: papier od „Czym jest” pod planszą opowieści i pod kartami, chowa
  się pod planszą „System…”, pod nią biel.
- „Gdzie znika czas”: ta sama forma, spokojniej (bez karty wokół rysunku,
  płaskie paski, siatka godzin); mniej okrągłe wartości i mocniejsza
  redukcja: 6 h 24 min → 2 h 34 min, AI i system w każdej czynności.
  Rachunek na końcu: ten sam zespół obsłuży 557 zleceń zamiast 223.
- Karta „Narzędzia i AI”: asystenci firmy i połączone narzędzia; karta
  „Zespół”: osiem osób ze stanem, dwa tygodnie, opiekunka zmiany.
- Okna „System… z AI w środku” w proporcjach prawdziwego Appto (zrzut
  ap-1-inbox.webp): ramka z adresem, duży nagłówek, skrzynka, panel
  szczegółów jako karta; bez pochylenia; bez dopisku o przykładach.
- Schody: bez pigułek pod spodem; wyjście po analizie i powrót z pomiaru
  w opisach stopni, prowadzący jako klamra pod stopniami 2–5.
- „Ile to kosztuje?” bez „Przykład z kalkulacji”.
- Zielony pas: „Jeśli Let’s Up nie jest dla Was, powiemy to na pierwszej
  rozmowie”, bardzo późno (po „Dla kogo”); kontakt po FAQ.

Model przykładu zmieniony: po zmianach firma nie zatrudnia nikogo przy
320 zleceniach (wcześniej +1). Menu (tylko dev) prowadzi do `/lets-up-v5`.

## v4 (24.10.2026, noc) — `/lets-up-v4`

Uwagi Szymona do v3 i odpowiedzi w v4:

- „Gdzie znika czas” w v2 był „dużo lepiej pokazany” → wróciła forma z v2
  (taśma, legenda, kolejka do właściciela, rachunek) z modelem z v3.
- Zielony pas „za wcześnie, zbyt wysoko” → stoi po „Ile to kosztuje?”.
- Karty „Pięć części” „jak AI slop” → bez wielkich numerów, po prawej
  sceny z aplikacjami: raport z analizy, obieg w oknie systemu, wycinki
  (poczta ze szkicem AI, zlecenie, status), zespół, przegląd miesiąca.
- „System… z AI w środku” wyglądało „jak zwypkodowane” → okna w wyglądzie
  Appto, wzięte z kodu: tokeny z ApptoAI/appto-ai
  (packages/ui/src/styles/globals.css), elementy z landingu appto.ai
  (~/appto-hub, makieta „mk”), twarze agentów skopiowane do
  `src/lib/agent-face.ts` (port 1:1 z produktu), pismo Geist z
  public/appto/kit/fonts. Slajd Appto ma przełącznik aplikacji jak
  w produkcie (app-switcher.tsx): Chat → lista → „Zlecenia”.
- „Te same zmiany w naszych wdrożeniach” niezrozumiałe → „Wyniki z naszych
  wdrożeń” i nowy podtytuł, karty z wyrównanymi wierszami.
- Schody i koszty dopracowane wizualnie: stopnie w jednej bryle z zielonym
  wierzchem; koszty na jasnozielonym panelu z rachunkiem „tak liczymy cenę”.
- „mikro- i małych firm” → „mikrofirm i małych firm” (strona, menu).
- Kontakt na tym samym papierze co „Dla kogo”, bez drugiego pasa tła.

Menu (tylko dev) prowadzi teraz do `/lets-up-v4`.

## v3 (24.10.2026, wieczorem) — `/lets-up-v3`

Uwagi Szymona do v2 i odpowiedzi w v3:

- Hero „ciężki”, pigułka nad nagłówkiem „widać AI”, grafika do poprawy,
  „temat z telefonem jest fantastyczny” → jasna plansza, nazwa programu
  zwykłym wierszem, po prawej duży telefon właściciela w dwóch stanach:
  „Dziś” (wiadomości od zespołu i klientów) i „Z Let’s Up” (21 spraw
  obsłużonych bez właściciela, dwie decyzje). Przełącznik działa ręcznie.
- „Brzmi znajomo?” bez drugiego telefonu: cztery sytuacje z wiadomością.
- „Gdzie znika czas” uproszczone do czterech kroków; AI i system przejmują
  część pracy w sześciu z ośmiu czynności. Model przykładu przeliczony:
  zlecenie 6 h 30 min → 4 h 30 min, 210 → 320 zleceń (+52%), +5 osób
  obecnym sposobem, +1 po zmianach, 2 h × 320 = 640 h.
- Zielony pas przeniesiony za „Brzmi znajomo?” (wcześniej dwie plansze
  o tym samym kształcie stały obok siebie).
- Karty „Pięć części programu” lżejsze: jedna prosta rzecz na kartę.
- Sekcja Appto → „System, na którym działa firma, z AI w środku”:
  przesuwany pokaz trzech okien (własny system firmy, AI w poczcie,
  Appto), z tym samym pochyleniem.
- „Dla mikro- i małych firm, którym przybywa pracy” w dwóch wierszach.
- Pytanie o koszty → sekcja „Ile to kosztuje?”: stała cena każdego etapu
  przed zamówieniem, co liczymy w kalkulacji, wykres „nożyce” z przykładu.
  Kwot nadal nie ma (brief §7.6, §9); jeśli mają się pojawić, potrzebna
  decyzja o modelu (np. udział w koszcie zatrudnienia z briefu §9).

Menu (tylko dev) prowadzi teraz do `/lets-up-v3`.

## v2 (24.10.2026, później) — `/lets-up-v2`

Szymon o v1: „Ja bym to znacząco poprawił wizualnie. To musi być wręcz
rewolucyjne… to wszystko jest tutaj bardzo zachowawcze” oraz „nie nazywaj
tego od 4 do 40 osób, tylko dla mikro- i małych firm”.

- Nazwa grupy docelowej wszędzie: **dla mikro- i małych firm** (strona v2,
  megamenu, panel mobilny, JSON-LD, FAQ). „4–40 osób” zniknęło.
- `src/robocze/lets-up-v2.astro` porzuca szkielet podstrony usługowej.
  Strona opowiada jedną historię w ruchu: hero z nagłówkiem ogromnym
  stopniem („Firma rośnie szybciej niż zespół”) i wykresem „nożyce”
  (zlecenia +33%, zespół +3 obecnym sposobem / +1 po zmianach); telefon
  właściciela z wiadomościami od zespołu i klientów („Brzmi znajomo?”);
  definicja zapalana słowo po słowie przy przewijaniu; opowieść przewijana
  „Gdzie znika czas jednego zlecenia” (rysunek przyklejony, pięć kroków);
  pięć części programu jako stos przyklejanych dokumentów; okno Appto
  pochylone w głąb, które prostuje się przy przewijaniu; ściana dużych
  liczb z prawdziwych wdrożeń; droga jako „pięć stopni w górę”; „Dla kogo”
  jako dwie listy obok siebie. Liczby i przykład jak w v1.
- Blok w megamenu: większa nazwa, mały wykres „nożyce” zamiast ikonki,
  zielony przycisk; na czas porównania prowadzi do `/lets-up-v2`.
- v1 zostaje pod `/lets-up` do porównania.

Publikacja v2: plik do `src/pages/lets-up.astro` (v1 do `src/robocze/lets-up-old.astro`),
zdjąć `noindex`, `POKAZ.letsUp = true`, `LETS_UP.h = '/lets-up'` w Nawigacja.astro,
wpis w sitemapie.

## v1

24.10.2026. Źródło: brief „Let’s Up — brief programu i wdrożenia na stronie
Let’s Automate” (Codex, 24.10.2026). Szymon: założenia z briefu przyjmujemy
na razie jako potwierdzone.

## Co powstało

| Gdzie | Co | Stan |
|---|---|---|
| `src/robocze/lets-up.astro` | podstrona `/lets-up` | robocza: tylko `npm run dev`, `noindex` |
| `src/components/Nawigacja.astro` | blok Let’s Up pod trzema pasami megamenu Usług i ciemna karta na końcu usług w panelu mobilnym | widoczne tylko w `npm run dev` |
| `src/data/menu.js` | `POKAZ.letsUp = import.meta.env.DEV` | przełącznik publikacji |

Na produkcji nic się nie zmienia, dopóki Szymon nie powie „publikujemy”.

## Megamenu

Program łączy kompetencje z trzech pasów, więc nie stoi w żadnym z nich,
tylko pod nimi, na całą szerokość panelu (brief §6). To jedyny ciemny obiekt
w panelu, bo jest innym rodzajem pozycji niż usługi. Treść:

- **Let’s Up** + „Program dla firm od 4 do 40 osób” (nazwa nigdy bez objaśnienia),
- „Więcej klientów i zleceń bez proporcjonalnego zwiększania zespołu. Analiza,
  wdrożenia i zmiana sposobu pracy w jednym programie.”,
- „Poznaj program →”; cały blok jest linkiem do `/lets-up`.

Kafelek z rysunkiem: linia zleceń idzie w górę, linia zespołu prawie płasko.
Względem roboczego tekstu z briefu: bez wersalików i bez trybu rozkazującego
(„Obsługuj więcej…”), bo megamenu mówi opisami, a do klienta „Wy”.
W panelu mobilnym karta stoi po trzech grupach usług, przed resztą menu.
Nowej pozycji na najwyższym poziomie nawigacji nie ma (brief §6).

## Podstrona: układ

Standard podstron usługowych z odstępstwami zapisanymi w nagłówku pliku:

1. Hero „obok”: „Firma rośnie. Zespół nie musi rosnąć w tym samym tempie”;
   karta z rokiem w przykładowej firmie spedycyjnej (210 → 280 zleceń,
   +3 osoby obecnym sposobem, +1 po zmianach).
2. Czym jest Let’s Up? + cztery sytuacje z briefu §4 (co pokazuje pomiar,
   co może się zmienić — nie zawsze aplikacja).
3. Zielony pas z Piotrem: „Jeśli analiza nie ma u Was sensu, powiemy to na
   pierwszej rozmowie”.
4. Dlaczego zaczynamy od pomiaru: zlecenie na osi godzin (85 min
   przepisywania i statusów) i kolejka akceptacji właściciela.
5. Scena „Co zostaje w firmie po pierwszym etapie”: analiza (warianty A/B/C
   z liczbą osób), obieg zlecenia z wyjątkami i zespołem, połączenia
   narzędzi, przegląd po miesiącu (brief §7.3).
6. „AI i aplikacje do Waszej pracy w jednym miejscu”: okno Appto z czatem
   i aplikacją Zlecenia, oznaczone jako przykład wariantu C (brief §7.5).
7. Przykłady: cztery prawdziwe wyniki ze strony głównej i cytat Finerto,
   podpisane jako projekty sprzed programu (brief §7.7).
8. Metoda: porównanie z typowym projektem wdrożeniowym.
9. Przebieg: pięć etapów z ceną przed każdym dużym etapem, wyjście po
   analizie, pętla pomiar → kolejne wdrożenie, jeden prowadzący; pod torem
   kalkulacja opłacalności bez kwot (brief §7.4, §7.6).
10. Dla kogo i kiedy to nie ma sensu, kontakt, FAQ (brief §7.8, tylko
    pytania, na które jest odpowiedź).

## Odstępstwa od briefu

- **Formularz**: brief §8 proponuje pięć pól. Został wspólny moduł Kontakt
  (e-mail, telefon, opis) zgodnie z decyzją o prostych CTA z 12.10.2026.
  Pytanie z briefu („Co dziś ogranicza obsługę większej liczby klientów lub
  zleceń?”) stoi nad polem opisu, a podpowiedź prowadzi do wielkości
  zespołu i planów zatrudnienia. Zgłoszenie idzie przez `/api/kontakt`
  ze źródłem „Let’s Up · /lets-up”. Jeśli pola z briefu są potrzebne, trzeba
  rozszerzyć moduł dla wszystkich stron albo zrobić formularz tylko tu.
- **Przycisk formularza** ma wspólne „Wyślij zapytanie”; hasło z briefu
  („Sprawdź dopasowanie…”) jest w nagłówku modułu kontaktu.
- **Pierwsza osoba**: brief pisze „Twoja firma”, strona mówi „Wy” jak reszta
  serwisu.
- **Strona główna i inne podstrony**: blok na głównej, zdanie o mniejszych
  firmach i odesłania z systemów, wdrożeń AI i szkoleń (brief §6) nie
  zostały zrobione w tym kroku.

## Czego na stronie celowo nie ma

70% kosztu zatrudnienia, płatności za efekt, gwarancji wzrostu, liczby
zastąpionych osób, cen, dat naboru i pilotażu, długości programu, deklaracji
o własności rozwiązania i licencjach w Appto (brief §5, §7.6, §9).

## Otwarte sprawy przed publikacją

1. Cena analizy i warunki zakończenia po analizie (strona mówi, że można
   skończyć z planem i że cenę analizy zna się przed startem).
2. Rola prowadzącego: kto, jak często przeglądy, co obejmuje (strona mówi
   tylko „jeden prowadzący” i „stały rytm”).
3. Model ekonomiczny z briefu §9 (podstawa porównania, 70%, harmonogram,
   koszty licencji i utrzymania) — dopóki nie jest gotowy, strona pokazuje
   tylko, co liczymy po obu stronach.
4. Co po programie: utrzymanie, licencje, własność aplikacji w Appto —
   do FAQ, kiedy będzie odpowiedź.
5. Przykład spedycyjny jest w całości poglądowy; docelowo studium przypadku
   z wolumenem, czasem, jakością i kosztami przed i po (brief §7.7).
6. Awatary z `/makieta` w rysunkach to zdjęcia ilustracyjne.

## Publikacja

1. `git mv src/robocze/lets-up.astro src/pages/lets-up.astro` (importy mają
   tę samą głębokość), zdjąć `noindex`.
2. `POKAZ.letsUp = true` w `src/data/menu.js`.
3. Dopisać `/lets-up` do `STRONY` w `src/pages/sitemap.xml.js`.
4. Opcjonalnie: blok na stronie głównej przed katalogiem usług i zdanie
   o ścieżce dla firm 4–40 osób (brief §6).
