# Przegląd tekstów podstron usługowych

31.08.2026. Czytane z wyrenderowanego HTML (nie ze źródła), jako klient, który
wchodzi z Google, ma dziesięć minut i chce wiedzieć cztery rzeczy: co to jest,
czy to dla mnie, ile kosztuje, co dostanę.

Zakres: dziesięć stron z `sitemap.xml.js`.

---

## Wniosek

Zapychacze nie siedzą głównie w pojedynczych zdaniach. Siedzą w **formułach
powtórzonych między stronami** i w **tezach wypowiadanych po trzy–cztery razy
na jednej stronie**. Klient, który otworzy dwie podstrony, widzi ten sam
szkielet retoryczny i ten sam rytm — i to jest moment, w którym tekst zaczyna
brzmieć na wygenerowany, choć każde zdanie z osobna jest dobre.

Serwis dzieli się na dwa poziomy:

- **sześć stron pionu „Wdrażamy AI"** — napisane mocno, prawie każda sekcja
  niesie fakt. Najwięcej do wycięcia na `/systemy-procesowe`
  i `/systemy-dla-klientow`, najmniej na `/automatyzacje-integracje`
  i `/szkolenia-ai`.
- **cztery strony Guided Coding** — inna polszczyzna, inne tempo, kropki po
  nagłówkach, powtarzane zapewnienia i **osiemnaście widocznych na produkcji
  placeholderów w nawiasach kwadratowych, w tym trzy ceny.**

---

## A · Formuły powtórzone między stronami

To jedno przejście grepem przez sześć stron. Największy zysk na jednostkę pracy
w całym przeglądzie.

| Formuła | Ile stron | Co z tym zrobić |
|---|---|---|
| „Pierwsze z nich zadaje prawie każdy zarząd / dział IT / dyrektor, więc zostaje otwarte" | 6 | Zostawić na jednej. Akordeon działa bez zapowiedzi. |
| „W żadnym z nich nie zeszliśmy do zera i w żadnym nie było to celem" | 4 | Mocny ruch z playbooku §6, ale czwarte powtórzenie zamienia go w tik. Zostawić na jednej, na resztę wystarczy zdanie o tym, skąd liczba (`rozwiazania-ai` ma już „Pokrycie liczone po pierwszym kwartale na produkcji"). |
| „Cenę ruszają trzy rzeczy: A, B oraz to, czy C" | 5 | Ta sama składnia w pięciu odpowiedziach FAQ. Na trzech wypisać czynniki bez formuły. |
| „Napiszcie w dwóch zdaniach, …" | 9 z 10 | Zostawić na trzech. Gdzie się da, prosić o rzecz konkretną — `/systemy-dla-klientow` robi to lepiej („Wymieńcie trzy pytania, które Wasza obsługa słyszy najczęściej"). |
| „Z pierwszej rozmowy wychodzicie z" + trzy punkty, trzeci zawsze „Zakresem do wyceny" | 6 | Komponent zostaje, ale trzeci punkt jest na trzech stronach identyczny co do słowa. |
| „…i powiemy to na pierwszej rozmowie" | 6 | Zostawić na dwóch–trzech. |
| FAQ „Ile czasu zajmie to naszemu zespołowi?" → odpowiedź otwarta przez „Najwięcej na starcie:" | 5 | Pytanie zostaje (pada naprawdę), otwarcia odpowiedzi rozjechać. |
| Tytuł sekcji dowodów: „Trzy firmy / trzy zespoły / trzy portale / trzy procesy / trzy rozwiązania i…" | 5 | Dwa tytuły na inne. |
| „Repozytorium … Wasze od pierwszego dnia … umowa wypowiadalna z miesięcznym terminem" | 5 | To fakt handlowy i **ma** się powtarzać między stronami. Problem jest inny: na `/rozwiazania-ai` i `/automatyzacje-integracje` stoi dwa razy na tej samej stronie — raz w sekcji, raz w FAQ. |

---

## B · Strona po stronie

### 1 · `/strategia-ai`

Działa: macierz w hero, pięć problemów, przebieg tygodniowy, FAQ.

**Do wycięcia**

- **Hero, `strategia-ai.astro:831`** — „To kilkanaście projektów rozłożonych na
  miesiące albo lata. Strategia ustala plan gry: co powstaje pierwsze i który
  cel ma poruszyć." „Plan gry" nie mówi nic, a zdanie nie podaje ani czasu, ani
  produktu — obie te rzeczy są mocne i stoją dopiero pół ekranu niżej.
  → *„Transformacja AI to kilkanaście projektów rozłożonych na lata. W trzy
  tygodnie ustalamy, który idzie pierwszy i którą liczbę z planu zarządu ma
  poruszyć."*

- **`:933`** — „Siedem zasad… **Każda bierze się z jednego z problemów
  powyżej**." Problemów jest pięć, zasad siedem, a problem 02 („człowiek
  poprawia po modelu") nie ma swojej zasady. Klient, który liczy — a to jest
  strona dla klientów, którzy liczą — łapie to od razu.
  → pięć zasad w parze 1:1 z pięcioma problemami.

- **`:1033`** „Procesy zbudowane wokół technologii, nadzorowane przez ludzi" —
  jedyna pozycja listy bez treści sprawdzalnej, powtórzona niemal dosłownie
  w FAQ „Czym jest transformacja AI w firmie?". Wypada z listy.

- **`:1241`** sekcja „Co jest w dokumencie" — trzy akapity, z czego pierwszy
  jest spisem treści kartki, która stoi obok. „Z nami, Waszym zespołem albo
  z inną firmą" stoi już w sekcji definicyjnej; „dwa pierwsze wdrożenia opisane
  na tyle dokładnie, żeby dało się je wycenić" — w TYDZIEŃ 3. Zostaje jeden
  akapit.

**Zmiana strukturalna.** Dwa formularze na stronie: `#rozmowa` (z Piotrem,
w środku) i `#kontakt` (na końcu). Ten w środku wnosi jedną rzecz, której nie
ma nigdzie indziej — widełki 5–20 tys. Zostawić widełki i jeden przycisk jako
wąski pas, formularz jeden na stronę.

---

### 2 · `/rozwiazania-ai`

Działa: 6% modelu, próg pewności z paskami, zapis o odstąpieniu w umowie.
Jedna z dwóch najmocniejszych stron serwisu.

**Do wycięcia**

- **Sekcja `#wlasnosc` („Co zostaje u Was", cztery bloki, ~230 słów)** jest
  w większości powtórzeniem czterech odpowiedzi z FAQ — „Kto to utrzyma za
  rok?", „Czy nasze dane trafią do OpenAI…?", „Budujecie od zera czy na
  gotowych platformach?". Klient czyta to samo dwa razy w odstępie ekranu.
  → skrócić do czterech zdań (jedno na blok) albo wyciąć i zostawić FAQ.

- Teza o modelu jako najmniejszej części pada **cztery razy**: hero („tyle waży
  sam model"), `#czym-jest` akapit 3, opis warstwy „Model 6%", FAQ.
  Zostawić hero i warstwę.

**Bez zmian:** `#kiedy` („Kiedy nie warto tego budować") stoi wysoko i jest
najlepszą sekcją strony — dwie z trzech dróg prowadzą klienta gdzie indziej.

---

### 3 · `/szkolenia-ai`

Najczystsza strona serwisu. Prawie nie ma czego ruszać.

- „Dzień warsztatu jest jednym punktem z dwunastu tygodni" — `#czym-jest`
  i pierwsze FAQ, dosłownie.
- „Czynność, która działa tylko wtedy, kiedy wykonuje ją entuzjasta, nie jest
  zmianą w procesie" — dwa razy w tej samej sekcji, dwa akapity od siebie.
  Druga wersja jest lepsza („znika razem z jej urlopem"), pierwsza do skrócenia.

---

### 4 · `/systemy-procesowe`

Działa: hero z czasem sprawy, cztery ekrany systemu, trzy uruchomienia.
Najdłuższa strona serwisu i tu jest najwięcej powietrza.

**Do wycięcia**

- **Teza strony pada trzy razy**, zanim jeszcze padnie argument:
  1. `#czym-jest`, akapit 3: „W systemie ląduje Wasz sposób ich prowadzenia —
     ten, którego nie ma w żadnym pudełku."
  2. `#dlaczego`, nagłówek-teza: „Gotowe narzędzie zawiera średnią rynku.
     Wasza przewaga leży dokładnie w tym, czym się od tej średniej różnicie."
  3. `#dlaczego`, blok: „Wasza przewaga zwykle nie mieści się w konfiguracji."

  Wersja 2 jest najmocniejsza i ma własne miejsce w rytmie (playbook §3).
  Wersja 1 zdradza pointę o ekran za wcześnie — wypada. Wersja 3 zostaje jako
  jedyne rozwinięcie.

- **„Wiedza siedzi w kilku głowach"** — trzy razy: koniec `#dlaczego`,
  `#dla-kogo 02`, plus echo w `#czym-jest`. Zostawić `#dla-kogo 02`, bo tam jest
  kryterium zakupowe, a nie ozdoba.

Po tych cięciach strona schodzi o mniej więcej jeden ekran bez utraty treści.

---

### 5 · `/systemy-dla-klientow`

Playbook §14b nazywa ją najsłabszą z sześciu i to się zgadza także po stronie
tekstu.

**Do wycięcia**

- **Hero, `systemy-dla-klientow.astro:505`** — „Firma, u której klient sam
  sprawdzi wszystko o dwudziestej drugiej, jest firmą, z którą łatwiej się
  pracuje — i to zostaje w pamięci przy przedłużaniu umowy." Jedyne zdanie
  w hero, którego nic nie sprawdza, powtórzone dosłownie jako `#dla-kogo 04`.
  Obok stoi liczba 631 z 855 — zdanie ją rozwadnia.
  → *„Budujemy portal wokół pytań, które Wasza obsługa odbiera najczęściej.
  Zakres bierze się z wyciągu ze skrzynki i z rejestru rozmów za ostatni
  kwartał."*

- **Nagłówek hero** „Klient sprawdza wszystko sam, o dowolnej porze, bez
  dzwonienia do Was" — trzeci okolicznik mówi to samo, co pierwszy.
  → *„Klient sprawdza wszystko sam, o dowolnej porze"*.

- **„Mierzymy pytania, nie logowania"** — cztery razy: podpis panelu
  w `#jak-wyglada`, akapit w `#wejscia`, FAQ „Skąd będziemy wiedzieć, że
  zadziałało", plus wstęp do `#dowody`. Zostawić dwa.

- **„Portal, który zmusza do samoobsługi, przegrywa"** — dwa razy w odstępie
  jednego ekranu.

**Zmiana strukturalna.** `#wejscia` (rozkład pierwszych logowań: 46% z linku
w potwierdzeniu zamówienia, 3% z pamięci) to najlepsza sekcja strony i jedyna,
która odpowiada na pytanie zadawane jako pierwsze — „czy ktokolwiek z tego
skorzysta". Stoi za nisko, za „Kiedy to nie ma sensu". Warto ją podnieść nad
`#dla-kogo`.

---

### 6 · `/automatyzacje-integracje`

Najlepiej napisana strona serwisu i najkrótsza. Dwa powtórzenia:

- „To najtańsza rzecz, jaką u nas kupicie, i jedyna, po której wynik widać
  w kilka tygodni" — trzy razy dosłownie (`#czym-jest`, `#dla-kogo 04`, FAQ
  o cenie). Zostawić w `#czym-jest`.
- „Plątanina bierze się z połączeń, których nikt nie opisał, a nie z ich
  liczby" — dwa razy dosłownie (`#karta`, FAQ).

---

### 7 · `/guided-coding` (hub)

Największe skupisko zapychaczy w serwisie.

**Trzy razy strona zapewnia, że klient niczego nie schrzanił**

- `index.astro:122` — „To nie jest wina AI ani Waszych ludzi."
- `:188` — „Żadna z tych rzeczy nie znaczy, że zrobiliście coś źle."
- `:427` — „Żadna z tych rzeczy nie jest katastrofą i żadna nie znaczy, że ktoś
  schrzanił robotę."

Zostawić jedno — `:427`, bo tam lista jest najbardziej niewygodna i zapewnienie
ma co robić.

**Trzy razy „nie chodzi o X, chodzi o Y"**

- `:172`, podpis pod wykresem: „Nie chodzi o to, żeby zacząć szybciej. Chodzi
  o to, żeby dziesiąta zmiana szła tak samo sprawnie jak pierwsza."
  To powtórzenie hero słowo w słowo („Pierwsza wersja powstaje w weekend.
  Dziesiąta zmiana zajmuje miesiąc"). Cały podpis do wycięcia.
- definicja guided codingu: „prowadzone przez specyfikację, ograniczenia
  i weryfikację, a nie przez wyczucie" — przy okazji trójka rzeczowników.
- koniec `#droga`: „Nie chodzi o to, żeby wybrać stronę — chodzi o to, żeby
  wiedzieć, na którym pasie się właśnie jest."

**Sekcja `#droga` do wycięcia w całości.** Wprowadza „Wise AI Score"
i „AI-NATIVE SCORE" — miarę, której strona nie definiuje i której nie ma nigdzie
indziej w serwisie. Odpowiada na pytanie, którego klient nie zadaje („czy to
inna droga niż budowanie przez Was"). Strona skraca się o ekran i nic nie traci.

**`#rozpoznanie`** — sześć równych kafli z wersalikowymi etykietami (TEMPO,
ZAUFANIE, PRZEKAZANIE, POWTARZALNOŚĆ, POMIAR, GRANICE). Dokładnie ten szkielet,
który na stronach AI został wycięty. Cztery pierwsze niosą treść, POMIAR
i GRANICE są ogólnikami („nie ma na to intuicji").

**Ceny w nawiasach kwadratowych są na produkcji:** „Przegląd 5 dni od
**[8 000]** zł", „Diagnostic sprint 2 tygodnie od **[25 000]** zł".

**Nagłówki z kropką:** pięć z sześciu.

**Zmiana strukturalna.** Hub ma dziś siedem sekcji i sprzedaje samą kategorię.
Wystarczą cztery: co się psuje (`#rozpoznanie` skrócone do czterech pozycji),
rozwidlenie ścieżek, kiedy warto zakładać szyny (`#rygor` — najlepsza sekcja
strony, z trzecią kolumną „Tego nie buduj wcale"), obserwacje z przeglądów.

---

### 8 · `/guided-coding/bez-zespolu-it`

**Sprzeczność liczbowa z siostrzaną stroną.** Wykres podaje „Bez metody 5,5
dnia / Z WiseStackiem 2,3 dnia", a podpis pod nim mówi: *„Dopóki okno się nie
domknie, liczby stoją w nawiasach"* — a nie stoją. Na `/guided-coding/dla-zespolow`
ta sama teza jest opisana odwrotnie: *„Do tego czasu nie wstawiamy tu
szacunków. Na stronie, która namawia Was na mierzenie, byłoby to zdanie
przeciwko samemu sobie."* Dwie strony tej samej usługi mówią o tym samym
dowodzie co innego. Do rozstrzygnięcia handlowego, nie redakcyjnego.

**Sześć razy to samo zdanie o review:** „Nic nie idzie do ludzi bez przejścia
przez nasze ręce" (`#czym-jest`), „Każda zmiana przechodzi przez nasze ręce"
(karta 2), „Zmiana trafia do ludzi tego samego dnia" (karta 3), „Zmiana idzie
do nas, zanim zobaczą ją ludzie" (`#problemy`), „Każda nowa wersja przeczytana"
(`#kontakt`), „Widzimy każdą nową wersję" (FAQ). To rdzeń usługi, więc
powtórzenie jest zamierzone — ale sześć razy w jednym przebiegu czyta się jak
wypełniacz. Zostawić trzy: definicja, karta, FAQ.

**Hero.** Pełen ekran TypeScriptu na stronie, której nagłówek brzmi „bez działu
IT". Diff jest dobry (klucz w kodzie → zmienna środowiskowa), ale odczyta go
tylko ktoś techniczny — a strona mówi wprost, że takich osób u klienta nie ma.
Albo jedno zdanie obok, które nazywa, co się na ekranie dzieje, albo inny
rysunek.

**„To nie jest kurs — nie ma zajęć ani zadań domowych. Nie jest to też
podwykonawstwo"** — definicja przez dwa zaprzeczenia, powtórzona na obu
pozostałych stronach GC.

**Placeholdery na produkcji** w tabeli porównawczej, czyli dokładnie tam, gdzie
klient porównuje koszty: „[15–25 tys.] zł / mies.", „[2–4] miesiące rekrutacji".

---

### 9 · `/guided-coding/dla-zespolow`

**Inna polszczyzna niż reszta serwisu.** baseline, lead time, change failure
rate, rework rate, deliverable, diff, merge, flaky testy, stack, roadmapa,
spec-driven development. Część to nieunikniony żargon CTO, ale „Deliverable"
jako etykieta sekcji obok numerków „01/02/03" i „Sedno" w tej samej liście to
już niekonsekwencja wewnątrz jednego ekranu.

**Zmiana osoby w środku strony.** `dla-zespolow.astro:386` — „Ze sprintu
**wychodzisz** z", FAQ — „**znajdziesz** ją niżej na tej stronie", przy
„Napiszcie", „Wasze", „Mierzymy" w całym pozostałym serwisie.

**Siedem nagłówków z kropką**, m.in. „Ile prędkości zostaje na każdym etapie.",
„Cztery rzeczy na wyjściu. Jedna z nich jest najważniejsza.", „Pytania, które
zadaje CTO."

**Powtórzenia**

- `:192` „Wina nie leży po stronie ludzi ani narzędzi. Leży w procesie, którego
  nikt nie zaktualizował, kiedy zmieniło się tempo" → FAQ „Mamy seniorów":
  „To nie jest luka w kompetencjach, tylko w procesie, którego nikt nie
  zaktualizował, kiedy zmieniło się tempo."
- „Bez stanu wyjściowego każda zmiana procesu jest kwestią wiary" — dwa razy
  (`#gdzie-ucieka 04` i wstęp do `#wynik`).

**„Czego tu jeszcze nie ma"** — sto słów o tym, dlaczego nie ma wykresu.
Uczciwość jest tu wartością, ale sto słów o nieobecności to sto słów.
Wystarczą dwa zdania.

**Placeholdery na produkcji:** „od [25 000] zł" (cena) i „Progi wg raportu DORA
[rok — do uzupełnienia]" (przypis pod tabelą metryk, czyli pod jedynym dowodem
na stronie).

**Uwaga.** W repo leży `dla-zespolow-v2.astro` z dzisiaj, niepodpięty do
nawigacji ani do sitemapy, pisany pod uwagę „bardziej technicznie". Jeśli to on
ma zastąpić stronę, tę pozycję trzeba przejrzeć jeszcze raz na v2.

---

### 10 · `/guided-coding/transfer-know-how`

Najlepsza z czterech stron GC. Hero z siedmioma tematami i agenda z kolumną
„skąd się wziął" robią dokładnie to, co powinny.

- **Trzynaście widocznych placeholderów na produkcji**, w tym w zdaniach
  nośnych: „[pięć z siedmiu] tematów", „[dwa tematy z siedmiu]", „po [dwóch
  godzinach]", „[3–5 dni]", „[40 osób, aplikacja do zamówień]". Strona, której
  teza brzmi „liczby biorą się z Waszego kodu", pokazuje własne liczby
  w nawiasach roboczych.

- **Teza „agendy nie da się napisać przed obejrzeniem aplikacji" pada cztery
  razy:** „Katalogu tematów nie mamy" (`#czym-jest`), „Nie musicie mieć listy
  tematów" (`#dla-kogo`), „u nas nie ma czego wysłać przed przeglądem"
  (`#program`), „Tam agenda istnieje przed Wami" (FAQ). Zostawić dwie —
  `#program`, bo tam stoi z uzasadnieniem, i FAQ.

- „Program ma koniec" — dwa razy dosłownie (`#czym-jest`, FAQ).

---

## C · Kolejność prac

1. **Placeholdery i ceny w nawiasach na czterech stronach GC.** Osiemnaście
   miejsc, w tym trzy ceny i jeden przypis pod tabelą metryk. To widzi klient.
2. **Sprzeczność liczb WiseStack** między `bez-zespolu-it` a `dla-zespolow` —
   decyzja, czy liczby stoją, czy ich nie ma.
3. **`/guided-coding`**: wyciąć `#droga`, zostawić jedno z trzech zapewnień,
   zdjąć kropki z nagłówków. Największy zysk na jednostkę pracy.
4. **Formuły z tabeli A** — jedno przejście przez sześć stron pionu AI.
5. **Powtórzenia wewnątrz stron**: `systemy-procesowe` (teza ×3),
   `rozwiazania-ai` (`#wlasnosc` kontra FAQ), `systemy-dla-klientow` (hero).
6. `/szkolenia-ai` i `/automatyzacje-integracje` — po dwa drobiazgi.

---

## D · Co zostało wprowadzone (31.08.2026)

Hub `/guided-coding` świadomie pominięty — do osobnej decyzji o kształcie
całej sekcji. Poniżej zmiany wprowadzone na dziewięciu podstronach usługowych.

### Formuły powtarzane między stronami

| Formuła | Było | Jest |
|---|---|---|
| „…więc zostaje otwarte” | 6 stron | 2 (`/strategia-ai` bez zmian, `/szkolenia-ai` z konkretem: „Pierwsze porównuje nas z dniem szkolenia za trzy tysiące złotych”) |
| „W żadnym nie było to celem” | 4 | 1 (`/szkolenia-ai`; pozostałe dostały zdanie o metodzie pomiaru) |
| „Cenę ruszają trzy rzeczy: A, B oraz C” | 5 | 2 |
| „Napiszcie w dwóch zdaniach” | 8 | 2 |

Lead w `GcFaq` jest teraz opcjonalny (`{lead && …}`), więc na trzech stronach
nagłówek FAQ stoi sam, bez wypełniacza pod spodem.

### `/strategia-ai`

- Hero: wyleciał „plan gry”, weszły trzy tygodnie i cel z planu zarządu.
- **Naprawiona fałszywa obietnica** „siedem zasad, każda bierze się z jednego
  z problemów powyżej” (problemów było pięć). Lead mówi teraz o sprawdzalności,
  a nie o mapowaniu 1:1.
- Zasada „Koszt utrzymania…” przepisana na „Do rachunku wchodzi czas na
  sprawdzenie wyniku” — domyka problem 02, który dotąd nie miał odpowiedzi.
- Zasada o procesach wokół technologii przestała powtarzać FAQ; mówi teraz,
  co zapisujemy przy pozycji.
- „Odrzucamy więcej pozycji…” — treść zamieniona z czwartego powtórzenia
  „lista odrzuconych z powodem” na kryterium, które zaskakuje.
- „Co jest w dokumencie”: trzy akapity → dwa, bez spisu treści kartki obok.
- **Drugi formularz zdjęty.** Pas z Piotrem zostaje razem z widełkami
  5–20 tys., ale prowadzi przyciskiem do `#kontakt`. Usunięte 78 linii
  martwej walidacji.

### `/rozwiazania-ai`

- `#wlasnosc` skrócone o akapity, które słowo w słowo powtarzały FAQ
  (prowizje, co opuszcza sieć, wypowiedzenie umowy utrzymaniowej).
- Teza o modelu jako najmniejszej części: 4 wystąpienia → 2.

### `/szkolenia-ai`

- „Dzień warsztatu jest jednym punktem z dwunastu tygodni” — zdjęte z FAQ,
  zostaje w sekcji definicyjnej.
- „Czynność, która działa tylko przy entuzjaście” — drugie wystąpienie
  zamienione na to, co program z tym robi.

### `/systemy-procesowe`

- Teza o średniej rynku: 3 wystąpienia → 2. Wersja z `#czym-jest` zdradzała
  pointę ekran przed argumentem.
- „Wiedza w kilku głowach”: 3 → 2. Zdjęta domknięcie `#dlaczego`; sekcja
  kończy się teraz na „Im mocniejsza przewaga, tym większy ten arkusz”.

### `/systemy-dla-klientow`

- **`#wejscia` przeniesione nad `#dla-kogo`.** Rozkład pierwszych logowań
  odpowiada na pierwsze pytanie klienta („czy ktokolwiek z tego skorzysta”),
  a stał za „Kiedy to nie ma sensu”. Rytm tła sprawdzony na zrzucie.
- Hero: zdjęte niesprawdzalne zdanie o przedłużaniu umowy (dublowało
  `#dla-kogo 04`), nagłówek skrócony o trzeci okolicznik.
- „Mierzymy pytania, nie logowania”: 4 → 2. FAQ „Skąd będziemy wiedzieć”
  opisuje teraz metodę zliczania zamiast powtarzać tezę.

### `/automatyzacje-integracje`

- „Najtańsza rzecz, jaką u nas kupicie”: 3 → 1.
- „Plątanina bierze się…”: 2 → 1.

### `/guided-coding/bez-zespolu-it` — WSZYSTKO WYCOFANE 03.09

Strona wróciła do stanu sprzed 31.08, sprawdzone diffem wyrenderowanej treści:
zero różnic. Wycofane zostały zarówno zmiany z korekty tekstu (31.08), jak
i przesunięcie w doradztwo (02.09).

Powód wycofania korekty z 31.08 — cztery miejsca, w których dopisałem
twierdzenia, których na stronie nie było i których nie miałem skąd wziąć:

- **„Okno domyka się w tym roku”** w przypisie pod wykresem WiseStack.
  Oryginał podawał warunek bez terminu. To była publiczna deklaracja, kiedy
  zostaną opublikowane wyniki pomiaru.
- **„i ile to zajmie”** przy powrocie do poprzedniej wersji.
- **„sami pytamy, kiedy czegoś nie rozumiemy z samego kodu”** w FAQ.
- **„pracujemy na tym, co i tak powstaje w tym tygodniu”** w sekcji definicyjnej.

Do tego jedno cięcie za daleko: przy dedupie tezy o review (6 wystąpień → 3)
wyciąłem „Zmiana idzie do nas, zanim zobaczą ją ludzie” z odpowiedzi na „Boję
się kliknąć publikuj”. Tam nie było to powtórzenie dla ozdoby, tylko
bezpośrednia odpowiedź na lęk klienta.

I jedna wpadka wbrew regule z tej samej sesji: w FAQ wstawiłem antytezę
„to jest nasza robota, a nie Wasza”.

**Wniosek na przyszłość.** Dedup i skracanie są bezpieczne. Dopisywanie zdań,
które brzmią jak fakt o usłudze, nie jest — nawet jeśli pasuje do rytmu
akapitu. Wszystko, czego nie ma w źródle, musi iść do listy „do potwierdzenia”,
a nie do treści.

### `/guided-coding/dla-zespolow`

- **Siedem nagłówków straciło kropkę.**
- „Ze sprintu wychodzisz z” → „wychodzicie”; „znajdziesz ją niżej” → „stoi
  niżej”. Cała strona jest teraz w tej samej osobie co reszta serwisu.
- „Deliverable” jako etykieta sekcji → „Co zostaje w repozytorium”.
- „…procesu, którego nikt nie zaktualizował” i „kwestią wiary” — po jednym
  wystąpieniu zamiast dwóch.
- „Czego tu jeszcze nie ma” skrócone do jednego akapitu. Zdanie o niewstawianiu
  szacunków wyleciało, bo po zmianie na `bez-zespolu-it` obie strony mówią
  o tym samym dowodzie zgodnie.

### `/guided-coding/transfer-know-how`

- Teza „agendy nie da się napisać przed obejrzeniem aplikacji”: 4 → 3.
- „Program ma koniec”: 2 → 1.
- Zdjęte nawiasy z `[pięć z siedmiu]` i `[dwa tematy z siedmiu]` — te liczby
  stoją już bez nawiasów w hero i w agendzie, więc były nieaktualne.

---

## E · Zostaje do decyzji Szymona

Liczby, których nie mogę ustalić za Ciebie. Wszystkie widoczne na produkcji.

**Kwoty**

- `/guided-coding` — `od [8 000] zł` (przegląd), `od [25 000] zł`
  (diagnostic sprint)
- `/guided-coding/dla-zespolow` — `od [25 000] zł`
- `/guided-coding/bez-zespolu-it` — `[15–25 tys.] zł / mies.` i
  `[2–4] miesiące rekrutacji` w tabeli porównawczej

**Kształt usługi na `/guided-coding/transfer-know-how`** (13 miejsc)

`[3–5 dni]` przeglądu · `[2–4 rozmowy]` · `[2 godziny]` sesji ·
`[dwadzieścia minut]` pokazu · `[do sześciu]` / `[sześciu uczestników]` ·
`[6 tygodni]` · `[4 osoby]` · `[dwóch godzin tygodniowo przez sześć tygodni]` ·
`[40 osób, aplikacja do zamówień]` · `[trzech miejscach]` w przykładzie agendy

**Pozostałe**

- `/guided-coding/dla-zespolow` — `raportu DORA [rok — do uzupełnienia]`,
  przypis pod tabelą metryk w hero
- `LaBase.astro` — `KRS [do uzupełnienia]` w stopce, na każdej stronie serwisu
- Liczby WiseStacku (5,5 → 2,3 dnia) stoją teraz w nawiasach. Zdjęcie nawiasów
  to jedna zmiana w `dni()` w nagłówku pliku, do zrobienia razem z publikacją
  wyników pomiaru.
