# /guided-coding/dla-zespolow — przesunięcie w stronę doradztwa

Propozycja, 02.09.2026. Nie wdrożona — do decyzji.

Kierunek od Szymona: *„doradzamy, mówimy co mają robić i dlaczego, i w ramach
usługi konfigurujemy np. AI code review, ale nie bierzemy odpowiedzialności
za efekt"*. Z zastrzeżeniem „nie za bardzo" — więc kręgosłup strony
(pomiar przepływu, progi DORA, bramki) zostaje. Zmienia się to, **czyj jest
wynik**.

---

## Co dziś obiecuje odpowiedzialność za efekt

Strona nigdzie nie mówi wprost „odpowiadamy za wynik", ale trzy miejsca
tak działają:

1. **`#wynik`, punkt 01** — „Ten sam pomiar powtarzamy po programie adopcji —
   i dopiero to jest dowód, że coś się zmieniło". Drugi pomiar jest tu naszym
   dowodem na skuteczność naszego programu.
2. **`#adopcja`, blok „Na końcu ten sam pomiar co na starcie"** — „…jedyny
   sposób, żeby po kwartale wiedzieć, czy **program się zwrócił**". Zwrot
   z programu to nasza miara, nie klienta.
3. **Sama nazwa „program adopcji".** Adopcja to zobowiązanie do zmiany
   zachowania zespołu — dokładnie to, co sprzedaje `/szkolenia-ai`, gdzie
   stoi gwarancja „jeśli liczba nie ruszy, wracamy na własny koszt".

Do tego strona **nie ma sekcji granicznej**, którą ma każda inna podstrona
usługowa („Kiedy to nie ma sensu", „Jeszcze nie, jeśli"). To jest miejsce,
w którym granica odpowiedzialności powinna stać.

I **nigdzie nie mówi, co konfigurujemy własnymi rękami.** Jedyny ślad to
„Bramki jakości — skonfigurowane, nie opisane w dokumencie". AI code review
nie pada ani razu.

---

## Zmiany, strona z góry na dół

### 1 · Hero

**Etykieta nad nagłówkiem**

- było: `Diagnostic sprint dla zespołów inżynieryjnych`
- jest: `Doradztwo dla zespołów inżynieryjnych`

Sprint zostaje nazwą wejścia i tak działa w CTA. Etykieta ma nazywać usługę.

**Trzecie zdanie leadu** — dziś kończy się na „pokazujemy, co robią zespoły,
u których zostaje mniej", czyli na obserwacji. Ma nazwać podział pracy:

> Mierzymy, ile prędkości zostaje po drodze, i układamy kolejność zmian, które
> to odwracają. Konfigurację ustawiamy my, resztę wprowadza Wasz zespół.

Nagłówek i trzy plakietki (`2 tygodnie · mierzymy przepływ, nie ludzi ·
baseline do porównania za kwartał) bez zmian.

### 2 · `#wynik` — punkt 01

- było: „Ten sam pomiar powtarzamy po programie adopcji — i dopiero to jest
  dowód, że coś się zmieniło, a nie wrażenie, że chyba idzie sprawniej."
- jest: „Ten sam pomiar da się powtórzyć za kwartał, u Was albo z nami. Wtedy
  widać, które z wprowadzonych zmian ruszyły liczbę i o ile."

Pomiar przechodzi na własność klienta. Przy okazji znika antyteza „X, a nie Y".

### 3 · `#wynik` — punkt 03, czyli produkt doradczy

Dziś nazywa się „Roadmapa" i jest opisany najsłabiej ze wszystkich czterech,
choć w usłudze doradczej to **on jest towarem**.

- tytuł: `Roadmapa` → **`Kolejność zmian z uzasadnieniem`**
- treść: „Przy każdej pozycji stoi, ile czasu odzyskuje, ile kosztuje
  wdrożenie, kto ją u Was wprowadza i którą metrykę ma poruszyć. Część pozycji
  odradzamy i przy każdej piszemy powód."

Zdanie o odradzaniu jest tu najważniejsze — to ono odróżnia doradcę od
dostawcy.

### 4 · `#adopcja` — przebudowa sekcji

**Nazwa produktu w całym serwisie:** `program adopcji` → **`wdrożenie zaleceń`**
(trzy miejsca: nagłówek sekcji, podpis pod ceną, odpowiedź FAQ o cenie).

**Nagłówek sekcji**

- było: `Program adopcji: wychodzicie z własnym stackiem`
- jest: **`Co konfigurujemy po sprincie`**

**Lead** — dziś trzy zaprzeczenia pod rząd („nie z naszym frameworkiem, nie
z licencją i nie z zależnością od nas"). Zamiast tego podział pracy:

> Zalecenia z listy wchodzą po kolei. Te, które są konfiguracją, ustawiamy my —
> na Waszych repozytoriach i Waszymi regułami. Te, które są zmianą w sposobie
> pracy zespołu, wprowadzacie Wy.

**Blok „Na końcu ten sam pomiar co na starcie" wypada.** Jego treść wraca
w punkcie 01 sekcji `#wynik` (patrz wyżej) już bez „czy program się zwrócił".
Na jego miejsce wchodzi granica odpowiedzialności (punkt 5).

**Cztery pozycje `Co zostaje w repozytorium` rozbić na dwie kolumny.**

Konfigurujemy my:

| | |
|---|---|
| **AI code review na każdym PR** | Bot czyta zmianę pod regułami spisanymi z Wami: rozmiar diffa, brak testu na ścieżce krytycznej, ruch w miejscach objętych zgodnością. Progi siedzą w Waszym repozytorium, więc zmienia je Wasz zespół bez nas. |
| **Reguły agentów** | Wersjonowane w repozytorium, wspólne między projektami, z trybem wprowadzania zmian. *(bez zmian)* |
| **Bramki jakości w CI** | To, co realnie blokuje merge i deploy. Ustawiamy je tak, żeby przebieg skrócił się razem z nimi — bramka wydłużająca pipeline o dwadzieścia minut zostanie obejściem w drugim tygodniu. |
| **Pulpit czterech metryk** | Te same liczby co w baseline, odświeżane same. Drugi pomiar nie wymaga wtedy drugiego sprintu. |

Zostaje po Waszej stronie:

- **Definicja gotowości produkcyjnej** — projekt możemy napisać, ale podpisuje
  go zespół i osoba odpowiadająca za zgodność.
- **Standardy pracy z agentami** — składamy je razem, na Waszych przykładach;
  utrzymuje je Wasz zespół.
- **Decyzja, które zalecenia wchodzą i w jakiej kolejności.**
- **Egzekwowanie.** Bramka, którą da się wyłączyć jednym klikiem, po miesiącu
  bywa wyłączona.

Ostatni punkt jest tym niewygodnym, który uwiarygodnia resztę.

### 5 · Nowy blok: za co odpowiadamy

Na końcu `#adopcja`, w miejscu po bloku o powtórzonym pomiarze. Osobnej sekcji
nie robię — rytm tła (`jasny → #f4f8f2 → biel → ciemny → biel → #f4f8f2`) jest
policzony i ciemny pas ma paść raz.

> **Za co odpowiadamy**
>
> Odpowiadamy za pomiar zrobiony tą samą metodą przed i po, za powód i koszt
> zapisany przy każdym zaleceniu oraz za konfigurację, która działa w dniu
> odbioru i którą umiecie zmienić bez nas.
>
> Za wynik nie odpowiadamy. Tempo zespołu zmienia się od tego, ile zaleceń
> wejdzie i czy bramki zostaną włączone — a to dzieje się po Waszej stronie,
> przez miesiące, w których nas już nie ma.
>
> Najczęstszy sposób, w jaki taka współpraca się marnuje: sprint kończy się
> listą, po kwartale nikt jej nie otworzył, a drugi pomiar pokazuje to samo,
> co pierwszy. Dlatego przed startem pytamy, kto u Was tę listę weźmie i kiedy
> ma na nią czas w kalendarzu.

### 6 · FAQ

**Poprawka konieczna** — dzisiejsza odpowiedź „Czy to nie jest kolejny
framework?" zaczyna się od „Nie, bo **nic Wam nie instalujemy**". Po dołożeniu
AI code review, bramek i pulpitu to przestaje być prawdą.

> Nie. Konfigurujemy narzędzia, które już macie albo które wybierzecie,
> i wszystko zostaje w Waszych repozytoriach: reguły, bramki i definicja
> gotowości produkcyjnej, w Waszej terminologii. Nie ma tu licencji, SaaS-a
> ani zależności od nas — jeśli jutro przestaniemy istnieć, konfiguracja
> pracuje dalej.

**Nowe pytanie, na pierwszym miejscu** (dziś otwarte jest „Mamy już Cursora"):

> **Co, jeśli po kwartale liczby nie drgną?**
>
> Najczęściej z jednego powodu: zalecenia nie weszły. Drugi pomiar pokazuje
> wtedy dokładnie, które pozycje zostały nieruszone, bo przy każdej stoi
> metryka, którą miała poruszyć. Pieniędzy za to nie zwracamy, bo sprzedajemy
> pomiar, kolejność i konfigurację. Jeśli po Waszej stronie nie ma nikogo, kto
> tę listę poprowadzi, powiemy to przed sprintem.

**Drugie nowe pytanie:**

> **Kto po naszej stronie musi się w to zaangażować?**
>
> Jedna osoba z prawem decyzji o procesie — tech lead albo head of engineering.
> Do tego dostęp read-only do repozytoriów i CI oraz po pół godziny
> z czterema–pięcioma osobami z zespołu. Bez tej jednej osoby lista zaleceń nie
> ma komu wejść do kalendarza i sprint zostaje raportem.

---

## Czego świadomie nie ruszam

- **Kręgosłup pomiarowy** — tabela metryk w hero, progi DORA, wykres etapów,
  cztery rzeczy na wyjściu. To jest tożsamość strony i jej dowód.
- **`#zakres`** — sześć obszarów sprintu. Zakres diagnozy nie zmienia się
  od tego, kto odpowiada za wdrożenie.
- **Cena i jej konstrukcja** — stała za sprint, wdrożenie wyceniane po nim.
  Pasuje do doradztwa lepiej niż do usługi wynikowej.
- **`#wisestack`** — „nie sprzedajemy praktyki, której sami nie stosujemy"
  działa w obu ramach.

---

## Do rozstrzygnięcia przed wdrożeniem

**1. Kolizja z `/szkolenia-ai`.** Tamta strona obiecuje wprost: *„Jeśli liczba
nie ruszy, wracamy na własny koszt"*. Ta powie: *„Za wynik nie odpowiadamy"*.
Obie usługi mają pomiar przed i po. Różnica jest realna — tam prowadzimy
program przez dwanaście tygodni i sami wykonujemy robotę adopcyjną, tu
oddajemy listę — ale klient, który przeczyta obie, może zapytać. Warto
zdecydować, czy to zostaje bez komentarza, czy gdzieś pada zdanie o różnicy.

**2. Kolizja z `/guided-coding/bez-zespolu-it`.** Tam bierzemy odpowiedzialność
wprost: *„Bierzemy odpowiedzialność za jej stan"*, *„Nic nie idzie do ludzi bez
przejścia przez nasze ręce"*. Po tej zmianie dwie strony Guided Coding staną po
przeciwnych stronach. **To jest zaleta, jeśli zostanie nazwane** — u zespołu
bez działu IT czytamy każdą wersję my, u zespołu inżynieryjnego czyta ją
skonfigurowany przez nas bot i Wasi ludzie. Bez nazwania wygląda
na niekonsekwencję.

**3. Hub `/guided-coding`** opisuje te drzwi jako *„Chcecie wycisnąć z AI
wszystko"* — to obietnica wyniku. Do poprawienia razem z hubem.

**4. `dla-zespolow-v2.astro`** leży w repo niepodpięty, pisany pod uwagę
„bardziej technicznie". Jeśli to on ma zastąpić stronę, te zmiany trzeba
przenieść tam, a nie na wersję żywą.

**5. Tytuł strony** — `Guided Coding dla zespołów — ile z AI realnie do Was
dociera`. Można zostawić; jeśli etykieta w hero zmienia się na „Doradztwo",
warto rozważyć to samo w `<title>`.
