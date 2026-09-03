# Bez zespołu IT — wersja 2

Strona: `src/pages/guided-coding/bez-zespolu-it-v2.astro`.
Wariant do porównania; **oryginał zostaje bez zmian** pod
`/guided-coding/bez-zespolu-it`. v2 ma `noindex`, żeby warianty nie
konkurowały ze sobą w wyszukiwarce.

## Jak zmieniał się kierunek (30.08.2026)

Cztery korekty Szymona, jedna po drugiej — zapisane, bo każda zdejmowała
błąd, który łatwo popełnić drugi raz.

**1 · To jest usługa abonamentowa.**
> „usługa guided coding to jest de facto abonamentowa usługa, ona się zaczyna
> od review tego co juz zrobili albo od ustalenia celów (i wtedy mamy wpływ
> na np. stack), ale my tam utrzymujemy biezace code review, jest pairing
> miedzy nimi a nami" · „ta strona ma się skupić na docelowej usłudze, to od
> czego zaczynamy to co najwyżej jedna sekcja"

**2 · Bez zwężania usługi do jednego mechanizmu.**
> „oryginalna opcja robiła duzo rzeczy lepiej, lepiej tłumaczyła czym jest ta
> usługa, bardziej holistycznie traktowała to wsparcie"

Wróciły z v1: rozpoznanie odbiorcy z „czego nie musicie mieć", sekcja
definicyjna, pięć osi jako zakres opieki i „co zostaje u Was" razem ze
zdaniem o braku prowizji od dostawców.

**3 · Język zakłada wiedzę, której klient nie ma.** Z uwag do wersji
abonamentowej: „zmiana wchodzi na produkcję", „code review", „sesje
pairingu", „bramka przed produkcją", „repozytorium" — osoba, która buduje
w Claude Code, nie myśli „wdrażam zmianę na produkcję", tylko „poprawiłem
apkę i kliknąłem publish". Do tego brakowało odpowiedzi na pytanie **„jak to
fizycznie działa u mnie we wtorek"**, a nazw części usługi było osiem, więc
czytelnik gubił, co jest usługą, a co jej elementem.

**5 · Wtorek dublował miesiąc, a brakowało definicji.** Osobna sekcja
„jak to wygląda u Was w zwykły wtorek" mówiła to samo co sekcja o rytmie
miesiąca, a nigdzie nie było zdania, czym guided coding właściwie jest dla
zespołu nietechnicznego. Mechanika zwinęła się do trzech kroków obok
definicji.

**6 · Rozszerzenia usługi.** Poza analitykiem, PM-em i projektantem:
**analityk biznesowy**, **zastępstwo na czas urlopu albo odejścia** Waszej
osoby i **budowanie trudniejszych elementów** po naszej stronie.

**8 · Ciemny pas: WiseStack zamiast artefaktu.** Sekcja z jedną poprawką
ustąpiła miejsca dowodom przewagi: trzy pary słupków (udział AI
w wytwarzaniu, tempo, błędy dochodzące do użytkownika) plus liczby
doświadczenia. Kolory słupków są **zwalidowane** — `#1FA968` i `#7f8f84`
przechodzą testy jasności, kontrastu i rozróżnialności przy daltonizmie na
ciemnym tle; firmowy `#00CD77` ich nie przechodzi. Każda wartość jest
podpisana wprost, więc nic nie zależy wyłącznie od koloru.

**Uwaga na spójność.** `/guided-coding/dla-zespolow` obiecuje publikację
wyników po domknięciu okna sześciu miesięcy. Dopóki tak jest, liczby na tej
stronie stoją w nawiasach kwadratowych i mówi o tym wprost nota pod
wykresami.

**9 · Co zostaje u Was — bez rzeczy, które nie zostają.** Review odpada, bo
dzieje się z nami; opis uruchomienia aplikacji odpadł jako sztuczny; blok
„czego nie ma" zniknął, a zdanie o kodzie, dostępach i braku prowizji stoi
teraz zwykłym akapitem pod siatką.

**10 · Dwie drogi wejścia są równorzędne** — dwie takie same karty, każda
z własnym przyciskiem. Wcześniej pierwsza była wyróżniona i to sugerowało,
że druga jest gorsza.

**11 · Koszty narzędzi i analizy kodu są w stawce.** Mówi to sekcja o cenie,
wiersz w rytmie miesiąca i osobne pytanie w FAQ — bo to jest pierwsza rzecz,
o którą pyta ktoś, kto płacił już za tokeny.

**7 · Narracja: usługa to wsparcie, analiza i review kodu, nie „czytanie
i pisanie".** Strona zaczęła brzmieć, jakbyśmy tylko czytali i odpisywali.
Doszła też sekcja **„Jakie problemy rozwiązujemy"** — sześć zdań, które
klient mówi sam sobie („wyciekną nam klucze", „stanie, kiedy przyjdzie
więcej ludzi", „trzeba będzie napisać to od nowa"), i nasza odpowiedź przy
każdym. Zastąpiła listę pięciu osi, bo mówiła to samo językiem dostawcy.

**4 · My też poprawiamy od ręki.** Usługa nie kończy się na komentarzu:
drobne rzeczy naprawiamy u siebie tego samego dnia. Narzędzia: **Claude Code
i Codex** — nie Make, nie n8n, nie Lovable.

**12 · Bóle, zyski i alternatywy** (feedback z przeglądu strony). Trzy braki
i co je domknęło:

- **Bóle były hipotetyczne** — „wycieknie", „stanie", „trzeba przepisać" to
  sprzedaż ubezpieczenia. Przed nimi stoją teraz trzy bóle, które czytelnik
  czuje w czwartek o 22:00, oznaczone plakietką „teraz": strach przed
  kliknięciem „publikuj", AI kręcące się w kółko trzeci wieczór i to, że
  nikt nigdy nie widział tego, co zbudował.
- **Zyski były tylko unikniętymi stratami.** Sekcja o rytmie miesiąca kończy
  się pasem „Co się zmienia po trzech miesiącach": wypuszczanie bez trzymania
  kciuków, możliwość obiecania terminu, rosnąca samodzielność Waszej osoby.
- **Nie było alternatyw.** Nad ceną stoi zestawienie czterech dróg: etat
  ([15–25 tys.]/mies. plus rekrutacja), software house (klawiatura wychodzi
  z firmy), nic (0 zł do pierwszej awarii) i prowadzenie. Dopiero obok nich
  [4 500] zł ma sens.
- **Nadmiar list.** „Trzy szóstki" rozbite: czynności w miesiącu z sześciu na
  cztery, „co zostaje u Was" z sześciu na trzy pozycje.

**13 · Hero bez ozdobników.** Zeszły eyebrow „Prowadzenie zespołu · abonament"
i pasek faktów pod przyciskami. Próba postawienia w nagłówku samego bólu
(„Duża zmiana, czwartek wieczór…") została odrzucona jako nieprofesjonalna —
nagłówek wrócił do wersji o pilnowaniu bezpieczeństwa i ciągłości działania.

**14 · Każda zmiana przechodzi przez review.** Zdanie „nie musicie na nas
czekać" wypadło, bo przeczyło mechanice: nic nie idzie do ludzi bez przejścia
przez nasze ręce, a bramka nie jest wąskim gardłem dzięki odpowiedzi tego
samego dnia. Zniknęło też „nikt nie trzyma Waszych ludzi za rękę" — przecież
właśnie ich wspieramy.

## Teza

Kategoria sprzedaje godziny wsparcia w miesiącu. My sprzedajemy liczbę,
która ma spadać: jak często musimy wejść w to, co budujecie.

> Opieka, przy której w dwunastym miesiącu wchodzimy w to tak samo często
> jak w pierwszym, jest źle ustawiona.

Domyka ją zdanie z sekcji o cenie: *„Po roku większość zespołów schodzi na
mniejszy zakres. To jest dobry znak i zwykle sami go proponujemy."*
Mechanizm, który tę liczbę obniża: co trzecia poprawka kończy się zasadą,
która zostaje u klienta i której pilnuje jego własne narzędzie.

## Słownik, którego pilnujemy

| Zamiast | Piszemy |
|---|---|
| zmiana wchodzi na produkcję | zanim zobaczą to ludzie / nowa wersja |
| code review | czytamy to, co zbudowaliście |
| sesja pairingu | siadamy razem przy jednym ekranie |
| bramka przed produkcją | narzędzie, które samo pilnuje zasad |
| repozytorium | miejsce, gdzie leży kod aplikacji |
| dyżur | odpowiadamy na pytania w trakcie pracy |
| przegląd miesiąca | podsumowanie (słowo „przegląd" zostaje tylko dla wejścia) |

Nazw części usługi jest cztery i wszystkie są czasownikami: poprawiamy,
siadamy, odpowiadamy, spisujemy.

## Hero — lupa nad kodem

Kod aplikacji (TypeScript) przewija się sam i **poza lupą jest blady** —
dokładnie tak wygląda dla osoby, która nie programuje. Nad nim wędruje lupa;
pod nią kod robi się ostry. Zatrzymuje się kolejno na trzech miejscach:
klucz wpisany wprost w kod (czerwone), zapytanie bez limitu (bursztynowe),
plik z danymi klientów wysyłany mailem (bursztynowe). Każde podkreślenie po
chwili **robi się zielone** — bo to my je poprawiamy.

Podkreślenie nie tylko zmienia kolor — **wiersz zmienia się na poprawiony**:
klucz znika z kodu i wchodzi na jego miejsce zmienna środowiskowa, zapytanie
dostaje limit, wysyłka pliku mailem zamienia się w link. Zielony klucz
zostawiony w kodzie byłby błędem merytorycznym, który każdy programista
wytknąłby w pierwszej sekundzie.

Żadnych dymków z tekstem: cała opowieść jest w kolorze. To jest usługa
w jednym rysunku — ktoś czyta kod, którego Wy nie czytacie, i od razu go
poprawia.

Techniczne: powiększenie to druga kopia tego samego kodu przycięta do koła.
Obie kopie mają tę samą animację przewijania, więc nie mają jak się
rozjechać. Kompensacja: `translate(r − k·cx, r − k·cy) scale(k)` — punkt
`(cx, cy)` sceny ląduje w środku koła. Odcinki, w których lupa śledzi
przewijający się wiersz, **muszą być liniowe** (`animation-timing-function`
w klatce); przy easingu lupa rozjeżdżała się z wierszem o pół linijki.
Pozycja poziomą liczy się z długości tekstu (Menlo: 0,6021 em na znak).

## Układ sekcji

| # | Sekcja | Tło | Rola |
|---|--------|-----|---|
| 1 | Hero — lupa nad kodem | biel + poświata | teza pokazana ruchem |
| 2 | Czym jest guided coding dla zespołu bez działu IT | `#f4f8f2` | definicja plus trzy kroki mechaniki |
| 3 | Dla kogo to jest + czego nie musicie mieć | biel | rozpoznanie i zdjęcie bariery |
| 4 | Jak wygląda miesiąc | `#f4f8f2` | kalendarz dwudziestu dni roboczych + pięć czynności |
| 5 | Jakie problemy rozwiązujemy | biel | sześć obaw klienta i nasza odpowiedź + teza w dużym stopniu pisma |
| 6 | Mamy własną metodę — WiseStack | `#0e2b1d` | trzy pary słupków i liczby doświadczenia |
| 7 | Co zostaje u Was | `#f4f8f2` | odpowiedź na „czy się uzależnimy" |
| 8 | Kto po naszej stronie i co można dołożyć | biel | prowadzący i automat w abonamencie; analityk biznesowy, zastępstwo na urlop, trudniejsze elementy, PM, projektant |
| 9 | Od czego zaczynamy | `#f4f8f2` | dwie **równorzędne** drogi wejścia, każda z własnym CTA |
| 10 | Ile to kosztuje + kiedy to nie ma sensu | biel | cena, koszty narzędzi w stawce, jedyne miejsce, które niczego nie sprzedaje |
| 11 | FAQ / kontakt | `#f4f8f2` / biel | pierwsze pytanie jest tym najniewygodniejszym |

Formy się nie powtarzają: dwie kolumny (dla kogo), numerowane kroki (wtorek),
kalendarz plus lista z plakietkami kadencji (miesiąc), numer i dwie kolumny
(osie), artefakt (ciemny pas), siatka tekstowa bez pudełek (co zostaje).

## Do potwierdzenia przed publikacją

- **`[4 500] zł/mies.` i `[8 000] zł` za wejście** — obie kwoty są hipotezą.
- **Czy przegląd wchodzi w pierwszy miesiąc, czy jest płatny osobno.**
  Strona mówi dziś „wyceniane osobno", żeby dało się po nim podziękować.
- **Liczby w kalendarzu i w ciemnym pasie** (dwa spotkania po 90 minut,
  godzina podsumowania, odpowiedź tego samego dnia, poprawka w ciągu dnia
  roboczego) — to są zobowiązania umowne.
- **Kod w hero** jest przykładem, ale wygląda jak prawdziwy — warto sprawdzić,
  czy nie przypomina kodu konkretnego klienta.
- **Rozszerzenia** (analityk, kierownik projektu, projektant) — dokładane na
  konkretne miesiące i zmieniające stawkę. Do potwierdzenia, czy tak ma
  wyglądać model.

## Pułapki, które kosztowały czas

- **Podmiana bloku markupu zjadła `</section>`.** Sekcje wpadły do środka
  hero i wszystkie pełnowymiarowe tła zrobiły się wcięte o padding hero.
  Po każdej podmianie większego bloku sprawdzać w `dist/`, czy następna
  sekcja jest rodzeństwem, a nie dzieckiem.
- **Podmiana bloku CSS zjadła sąsiedni blok.** Sekcja miesięczna została
  bez stylów i wyglądała jak surowe divy. Szybki audyt:
  wypisać klasy użyte w markupie i porównać z zadeklarowanymi w `<style>`.
- **Zmienne CSS na wewnętrznym elemencie.** `--w`/`--h` siedziały na
  `.lu-ram`, a wysokość liczyło pudełko wokół — dziedziczenie idzie w dół,
  więc pudełko miało zerową wysokość i rysunek wychodził na sekcję niżej.
- **Skalowanie `transform: scale()` nie zmniejsza pudełka w układzie.**
  Scena 540 px rozpychała stronę na telefonie; potrzebne jest pudełko
  o wymiarach przeskalowanych (`calc(var(--w) * var(--s))`).
- **Podglądanie klatek** przez wstrzyknięcie
  `*{animation-delay:-Xs !important;animation-play-state:paused !important}`
  działa tylko zaraz po załadowaniu: pauza zatrzymuje animację na czasie,
  który zdążył upłynąć, i dopiero do niego dodaje ujemne opóźnienie.
- **`.rv` psuje zrzuty** — `--force-prefers-reduced-motion` nie działa w tym
  Chrome, więc do zrzutów trzeba wstrzyknąć
  `.rv{opacity:1 !important;transform:none !important;transition:none !important}`.
- **`npx astro build` czyści `dist/`** razem ze stroną pomocniczą do zrzutów.
