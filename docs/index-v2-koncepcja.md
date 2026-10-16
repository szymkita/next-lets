# Strona główna — wersja druga (`/index-v2`)

> **Ocena Szymona, 16.10.2026:** wersja zostaje zapisana, ale nie będzie
> używana. Strona główna zostaje w obecnym kształcie. Podobały się dwie rzeczy
> i obie przeszły do `/index-v4`: sekcja usług (trzy drogi, zdania z pierwszych
> rozmów, termin albo cena przy usłudze) oraz „Czym jest Let’s automate?”,
> połączone z wykresem z obecnej strony głównej. Reszta tej wersji (tory,
> protokół, metoda, przykłady, zespół) jest według Szymona przekombinowana
> i nic nie wnosi.

Powstała 15.10.2026, po analizie spójności serwisu. Plik:
`src/pages/index-v2.astro`, `noindex`, poza menu i sitemapą. Obecna strona
główna (`/`) zostaje bez zmian do decyzji „podmień".

## Dlaczego nowa narracja

Obecna strona główna sprzedaje cel: „Zmienimy Twoją firmę w biznes napędzany
przez AI", krzywa dojrzałości na około 12 miesięcy, „Firma napędzana AI to nie
zespół, który używa ChatGPT". Ta opowieść powstała przed nowym podziałem
oferty i dziś się z nim kłóci:

- menu dzieli usługi według sytuacji klienta (trzy drogi), a strona główna
  według etapów dojrzałości (pięć kroków i, osobno, cztery etapy);
- „Narzędzia AI dla całej firmy" wdrażają właśnie ChatGPT i Copilota;
- FAQ mówi „Żadnych abonamentów w ciemno", a Bieżące wsparcie jest
  abonamentem;
- terminy i ceny na stronie głównej nie zgadzają się z podstronami.

Każda nowa podstrona usługowa kończy się natomiast tak samo: liczbą zmierzoną
na danych klienta (czas sprawy, osoby pracujące nowym sposobem, próg jakości,
wersje wracające z uwagą). To jest wspólny mianownik dziewięciu usług i z niego
jest teza strony głównej.

**Teza:** wprowadzamy AI do codziennej pracy firm i mierzymy, co to zmieniło.
Zaczynamy od sytuacji klienta i jednej liczby, tę samą liczbę sprawdzamy po
wdrożeniu.

**Zadanie strony:** w półtora ekranu pozwolić rozpoznać własną sytuację
i trafić do właściwej usługi. Dalej pokazać, że w każdej drodze pracujemy tak
samo, i doprowadzić do jednej rozmowy.

## Przebieg strony

| # | Sekcja | Co robi | Skąd treść |
|---|---|---|---|
| 1 | Hero | Teza i trzy obiekty, po jednym na drogę: strona dokumentu strategii, okno systemu, przegląd zmiany z plikiem zasad. Pod obiektami nazwy dróg z menu, każda kolumna to link | dane z hero `/strategia-ai`, `/systemy-procesowe`, `/guided-coding` |
| 2 | Czym jest + zdania z pierwszych rozmów | Definicja pod modele językowe. Pod nią dziewięć zdań, które klienci mówią na początku rozmowy, przy każdym usługa z menu i jej termin albo cena | terminy i ceny słowo w słowo z podstron |
| 3 | Zielony pas | „Jeśli wystarczy Wam to, co już macie, powiemy to na pierwszej rozmowie” | formuła z podstron |
| 4 | Dlaczego | Teza: licencje kupione, pilot się podobał, a praca idzie tak samo. Blok 1: trzy tory, czyli gdzie wdrożenie staje (bursztyn) i co dalej (zieleń). Blok 2: protokół przekazania, czyli wszystko po stronie klienta | liczby z `/szkolenia-ai`, `/rozwiazania-ai`, `/guided-coding/biezace-wsparcie`; zdania z `/dlaczego-my` |
| 5 | Metoda | Typowa firma „od AI” wobec nas. Sześć faz od pierwszej rozmowy do opieki | FAQ i metody podstron |
| 6 | Przykłady | Cztery wyniki z obecnej strony głównej (realne wdrożenia), przy każdym usługa. Pod nimi cytat NARS i krótkie wezwanie | `/#dowody` |
| 7 | Zespół (ciemna) | Pięć osób ze zdjęciami. Do tego 200+ / 140+ / 30+, Wise Group i własne produkty | `/dlaczego-my`, obecna strona główna |
| 8 | Dla kogo | Trzy warunki i „Kiedy to nie ma sensu” | podstrony usługowe |
| 9 | Kontakt | „Zacznijmy od Waszej sytuacji”, trzy pola | komponent `Kontakt` |
| 10 | FAQ | Osiem pytań: od czego zacząć, ceny, Copilot i ChatGPT, dane, pierwszy efekt, wyjście ze współpracy, zespoły budujące same, kim jesteśmy | podstrony usługowe |

Odstępstwa od standardu podstron, wszystkie ze względu na rolę strony głównej:

- metoda stoi przed przykładami (najpierw „czym się różnicie”, potem dowód);
- zamiast sceny z produktem jest ciemna sekcja z ludźmi, bo strona główna nie
  ma jednego produktu;
- pasek Wise Group nad menu zostaje, bo ma go tylko strona główna.

## Rozjazdy z analizy rozstrzygnięte na tej stronie

- **Forma:** wszędzie „Wy”. Nagłówki bez kropek.
- **Pierwszy kontakt:** wszędzie „rozmowa”, 30 minut, „Umów rozmowę”.
  Na stronie nie ma słów „diagnoza” ani „konsultacja”.
- **Liczby o firmie:** 200+ wdrożeń, 140+ firm, 30+ osób.
- **Pozycja wobec narzędzi:** wdrażamy też Copilota i ChatGPT (FAQ), wybór
  po próbie, bez prowizji. Appto występuje jako nasz produkt.
- **Abonament:** opieka i Bieżące wsparcie są abonamentem z miesięcznym
  wypowiedzeniem. Stała kwota dotyczy etapów budowy.
- **Nazwy usług:** jak w menu, bez starych nazw („Strategia transformacji
  AI”, „Indywidualne rozwiązania AI”).

## Do potwierdzenia przed podmianą

- 200+ czy 140+ wdrożeń. Pięć podstron usługowych ma w metodzie „140+
  wdrożeń”.
- Cztery wyniki w „Przykładach”: są przepisane z obecnej strony głównej jako
  realne.
- Zdania z pierwszych rozmów: dwa są z `/dlaczego-my`, siedem to parafrazy
  sytuacji z podstron.
- Rola Szymona Kity („Założyciel” jak w module kontaktu, a na `/dlaczego-my`
  „CEO & współwłaściciel”). Szymon Negacz jako twarz pasa.
- Firmy i osoby w obiektach hero i w protokole są zmyślone (Stalprofil
  i producent mebli jak na podstronach).

## Czego ta strona nie rusza (wspólne komponenty)

- Przycisk w menu dalej rotuje „Bezpłatna diagnoza / Wyceń projekt / Umów
  rozmowę”, a stopka ma „Umów diagnozę”. To zmiana w `Nawigacja.astro`
  i `Stopka.astro`, a nad stopką pracuje osobna sesja.
- Obrazek OG z `LaBase` to wciąż baner Guided Codingu. Strona główna
  potrzebuje własnego.
