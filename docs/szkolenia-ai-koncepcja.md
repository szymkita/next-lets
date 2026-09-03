# Szkolenia i adopcja AI — koncepcja strony

Strona: `src/pages/szkolenia-ai.astro`. Utworzona 30.08.2026.
Trzecia i ostatnia podstrona usługowa z pionu **Wdrażamy AI**, po
`/strategia-ai` i `/rozwiazania-ai`. Komplet zamknięty.

## Dlaczego to nie jest kalka dwóch poprzednich

Trzy usługi sprzedają trzy różne rzeczy i dlatego mają trzy różne strony:

| Usługa | Produkt | Główne pytanie zakupowe |
|---|---|---|
| Strategia | dokument | skąd wiem, że kolejność jest dobra |
| Rozwiązania | działający system | co się stanie, kiedy model się pomyli |
| **Szkolenia** | **zmiana zachowania ludzi** | **co z tego zostanie za trzy miesiące** |

Ta jest jedyną z trzech, której **wynik może się cofnąć**. Dokument raz
napisany zostaje napisany, system raz uruchomiony chodzi dalej — a nawyk
znika sam z siebie w trzecim tygodniu. Cała strona jest zbudowana wokół tego
jednego faktu.

## Decyzja pozycjonująca

Kategoria sprzedaje **dzień warsztatu**. Polski rynek ma dziesiątki ofert
„szkolenie z ChatGPT dla firm", jeden dzień, kilka tysięcy złotych, i wszystkie
kończą się w dniu, w którym się odbywają.

My sprzedajemy **dwunasty tydzień**. Znany kształt porażki tej kategorii:
po warsztacie próbują wszyscy, w trzecim tygodniu zostaje garstka. Zamiast
udawać, że u nas tak nie będzie, **rysujemy ten dołek w hero** i sprzedajemy
to, co dzieje się po nim. Rysunek robi tu robotę, której nie zrobi żadne
zdanie: przyznanie się do dołka jest wiarygodne dopiero wtedy, kiedy jest
narysowane w skali.

Konsekwencja: dzień warsztatu jest na tej stronie jednym z pięciu wierszy
harmonogramu, a nie produktem.

## Trzy rzeczy sprawdzalne przed podpisaniem umowy

Odpowiednik „trzech mechanizmów" z dwóch poprzednich stron:

1. **Definicja adopcji spisana przed warsztatem.** Sekcja `#pomiar`: adopcja
   to wskazana czynność wykonana nowym sposobem, na prawdziwej sprawie, przez
   konkretną osobę, w danym tygodniu. Trzy warunki są wypisane, więc po
   dostawie da się sprawdzić, czy liczba była liczona uczciwie. Statystyki
   narzędzia są tu jawnie odrzucone jako miara.
2. **Punkt wyjścia mierzony przed warsztatem.** Bez niego w dwunastym tygodniu
   nie ma czego porównać — to ten sam argument, co „pomiar punktu wyjścia"
   na `/strategia-ai`, ale tutaj dotyczy ludzi.
3. **Trzecia grupa w zespole wpisana w plan.** Ciemny pas mówi wprost, że
   część ludzi zostanie przy starym sposobie, i podaje liczbę. To jedyne
   miejsce na stronie, które niczego nie sprzedaje.

## Warstwa wizualna — trzeci osobny słownik w serwisie

Pilnowane od początku: każda z trzech podstron ma własny alfabet i żaden
mechanizm się nie powtarza.

- `/strategia-ai` — łuki wypełniane po okręgu, przewijany strumień wierszy,
  siatka stu kwadratów, kreskowe scenki, kartka ze skanem
- `/rozwiazania-ai` — przekrój warstw, próg pewności, tory harmonogramu
- `/szkolenia-ai` — **jednostki do policzenia**

Alfabetem tej strony jest **liczenie wzrokiem**. Wszystko, co niesie liczbę,
jest narysowane jako policzalne kreski: ludzie w hero, ludzie w ciemnym pasie,
ludzie w dowodach, minuty w sekcji o dołku. Czytelnik nigdy nie musi wierzyć
liczbie na słowo — może ją przeliczyć.

| Rysunek | Gdzie | Co niesie | Ruch |
|---|---|---|---|
| **Krzywa adopcji** | hero | dwanaście tygodni, w każdym tyle kresek, ilu ludzi z czternastu pracuje nowym sposobem; trzeci tydzień na bursztynowo | pętla z własnego zegara: kolumny wchodzą od lewej, podpis dołka po trzeciej, suma „12 z 14" po ostatniej |
| **Trzy podejścia** | sekcja o dołku | ta sama czynność w kostkach po pięć minut; kreska odniesienia stoi tam, gdzie kończy się stary sposób, a pierwsze podejście ją przekracza | odsłania się raz przy wejściu w kadr, kostka po kostce |
| **Podział zespołu** | ciemny pas | trzy rzędy kresek: 5, 7 i 2 osoby | jak wyżej, z opóźnieniem rzędami |

**Rysunek trzech podejść** jest najważniejszy merytorycznie. Niesie fakt,
którego nikt w tej kategorii nie mówi na sprzedaży, bo brzmi jak wada
produktu: **pierwsze podejścia nowym sposobem trwają dłużej niż stary sposób**.
Dopiero to tłumaczy, po co jest powrót w czwartym tygodniu — bez tego cały
program wygląda na dosprzedaż godzin.

**Spójność liczb między rysunkami jest zamierzona.** W ciemnym pasie
5 + 7 = 12, czyli dokładnie te dwanaście osób, które stoi w hero jako
„12 z 14". Dlatego dwie pierwsze grupy są zielone, a trzecia przygaszona.

Hero chodzi w pętli (jak hero na dwóch pozostałych podstronach), dwa
pozostałe rysunki odsłaniają się raz przy wejściu w kadr. Wszystkie mają
stan końcowy czytelny przy `prefers-reduced-motion`.

## Układ sekcji i rytm tła

| # | Sekcja | Tło | Nośnik | Szkielet nagłówka |
|---|--------|-----|--------|-------------------|
| 1 | Hero | biel + poświata | **krzywa adopcji** | H1 + akapit |
| 2 | Czym to jest | biel | definicja w dużym stopniu + dwie kolumny prozy | H2 pełną szerokością |
| 3 | Trzeci tydzień | `#f4f8f2` | **trzy podejścia** + 3 powody | podział 2-kolumnowy |
| 4 | Role | biel | 5 bloków, ostatni na dwie kolumny | H2 pełną szerokością |
| 4b | Pas wezwania | biel, na liniach | zdanie i przycisk | — |
| 5 | Program | `#f4f8f2` | 5 wierszy z kolumną „zostaje" | podział 2-kolumnowy |
| 6 | Podział zespołu | `#0e2b1d` | **trzy rzędy kresek** | podział 2-kolumnowy, ciemna |
| 7 | Definicja adopcji | biel | duże zdanie + 3 warunki obok siebie | bez nagłówka |
| 8 | Przykłady | `#f4f8f2` | 3 wiersze z liczbą i kreskami | podział 2-kolumnowy |
| 9 | Cytat / FAQ / kontakt | biel / `#f4f8f2` | `GcFaq`, `GcCta` | — |

Cztery różne szkielety nagłówka, w tym jedna sekcja bez nagłówka w ogóle
(7, gdzie definicja jest nagłówkiem). Asymetria: piąty blok w sekcji ról
rozpina się na dwie kolumny, więc siatka nie domyka się równym prostokątem.

**Pas wezwania jest tu jasny i postawiony na liniach**, a nie ciemny jak na
`/rozwiazania-ai` — powtórzenie tamtego bloku byłoby kalką z sąsiedniej
podstrony w tym samym pionie usług.

## Czego świadomie nie ma

- **Kwoty.** Tak jak na `/rozwiazania-ai`: nie mam danych, żeby obronić
  liczbę. Miejsce na nią czeka w FAQ „Ile kosztuje".
- **Nazw narzędzi i logotypów dostawców.** Ten sam błąd, który wywalił v2
  `/strategia-ai`. Zamiast tego w FAQ stoi odpowiedź o tym, że rutyna jest
  opisana na poziomie czynności, więc podmiana modelu to poprawka w jednym
  akapicie.
- **Programu szkolenia w formie agendy godzinowej.** Nikt tego nie czyta
  przed rozmową, a wygląda jak oferta na przetarg.
- **Certyfikatów i „poziomów zaawansowania".** Kategoria to lubi, ale to
  jest miara uczestnictwa, a strona sprzedaje miarę adopcji.
- **Obietnicy procentu adopcji na stronie.** Liczby w hero i w dowodach są
  opisane jako przykłady; jedyne, co obiecujemy, to sposób liczenia.

## Do potwierdzenia przed publikacją

- **Krzywa adopcji (14 → 7 → 12 z 14)** — kształt jest pewny, liczby są
  przykładem. Do podmiany na wynik z realnego programu, gdy taki będzie.
- **Podział 5/7/2** w ciemnym pasie — proporcja z obserwacji, nie z pomiaru.
  Jeśli się zmieni, trzeba przeliczyć też sumę w hero (5 + 7 = 12).
- **Dwanaście tygodni i cztery wejścia** — założenie o kształcie usługi.
- **Zdanie „jeśli liczba nie ruszy, wracamy na własny koszt"** — decyzja
  handlowa Szymona. Bez niej sekcja `#pomiar` zostaje opisem metody.
- **Czasy w rysunku trzech podejść (65 / 40 / 15 min)** — przykład dobrany
  tak, żeby pierwsze podejście wyraźnie przekraczało kreskę odniesienia.
- **Trzy zespoły w sekcji dowodów** są PRZYKŁADOWE, do podmiany razem
  z tym, co się w nich nie przyjęło.
- **Lista czynności w sekcji ról** — do wymiany na te, które faktycznie
  przechodzimy najczęściej.
- **`/og/szkolenia-ai.png`** — strona dziedziczy `/og/hub.png`. Naturalny
  kadr to krzywa adopcji z hero, w stanie pełnym.

## Zmiany poza samą stroną

- `LaBase.astro` — pozycja „Szkolenia i adopcja AI" w megamenu prowadzi do
  `/szkolenia-ai`.
- `index.astro` — to samo w megamenu oraz w trzecim wierszu warstwy
  „Wdrażamy AI" w sekcji S4. Atrybut `data-krok-link` zdjęty, bo pozycja
  prowadzi teraz poza stronę główną.
- `sitemap.xml.js` — nowy wpis z priorytetem 0.9.

Po tej zmianie **cały pion „Wdrażamy AI" w megamenu prowadzi na własne
podstrony** — żadna z trzech pozycji nie wraca już na `/#oferta`.

## Powiązania między trzema podstronami

FAQ na tej stronie odsyła do dwóch pozostałych i robi to w jedną stronę:
strategia układa kolejność, kiedy kandydatów jest kilkanaście; szkolenia
dotyczą pracy wykonywanej dzisiaj ręcznie; a jeśli po pomiarze wyjdzie, że
czynność opłaca się zdjąć z ludzi, to jest już indywidualne rozwiązanie AI.
To jest naturalna ścieżka sprzedażowa między trzema usługami i warto ją
utrzymać przy każdej edycji.

## Jak podglądać animacje

Tak samo jak przy `/rozwiazania-ai`: tymczasowa strona w `dist/`, która
ładuje podstronę w `<iframe>` i wstrzykuje
`*{animation-delay:-Xs !important;animation-play-state:paused !important}`.
Pauza plus ujemne opóźnienie daje dokładnie tę klatkę, o którą chodzi.
Stan bez ruchu: `--force-prefers-reduced-motion`. Widoki węższe niż 500 px
mierzy się przez `<iframe>` o zadanej szerokości.

---

## Korekta tekstu 31.08.2026

Przegląd wszystkich podstron usługowych pod kątem zapychaczy i formuł
powtarzanych między stronami. Co dokładnie zmienione i dlaczego:
`docs/przeglad-tekstow-podstron.md`, sekcja D.
