# Indywidualne rozwiązania AI — koncepcja strony

Strona: `src/pages/rozwiazania-ai.astro`. Utworzona 30.08.2026.
Druga podstrona usługowa z pionu **Wdrażamy AI**, po `/strategia-ai`.
Wzorzec konstrukcyjny wzięty stamtąd, zawartość i warstwa wizualna — nie.

## Dlaczego to nie jest kalka strategii

`/strategia-ai` sprzedaje dokument, więc odpowiada na jedno pytanie: skąd
wiadomo, że kolejność wdrożeń jest dobra. Tutaj sprzedajemy działający system
i lista pytań zakupowych jest inna:

1. co ja właściwie dostaję, skoro dostęp do modelu kosztuje 20 dolarów
2. co się stanie, kiedy model się pomyli
3. czy to wejdzie w nasz ERP, czy stanie obok
4. gdzie lądują nasze dane
5. kto to utrzyma za rok

Sekcje idą dokładnie w tej kolejności. Wszystko, co nie odpowiadało na żadne
z tych pytań, wypadło jeszcze przed pierwszym szkicem — stąd brak sekcji
o zespole, brak ściany opinii i brak paska logotypów.

## Decyzja pozycjonująca

Rynek sprzedaje „wdrożenie AI" jako dostęp do modelu i okno do rozmowy. Nasza
teza: **model jest najmniejszą częścią roboty**, a o tym, czy rozwiązanie
zadziała, rozstrzygają warstwy wokół niego. Cała strona stoi na tej proporcji
i dlatego niesie ją rysunek, nie zdanie — przekrój w hero pokazuje siedem
warstw o grubości równej udziałowi w czasie budowy, a warstwa modelu ma 6%.

Konsekwencja pozycjonowania: jeśli model jest tanią częścią, to sprzedaż
przenosi się na to, co się dzieje przy jego pomyłce. Stąd ciemny pas
o progu pewności zamiast sekcji o technologii.

## Trzy rzeczy sprawdzalne przed podpisaniem umowy

Odpowiednik „trzech mechanizmów" ze `/strategia-ai`. Bez nich strona jest
zwykłą ofertą, którą przepisze każdy:

1. **Próg jakości mierzony na sprawach klienta przed budową**, zapisany
   w umowie razem z warunkiem odstąpienia. Sekcja `#pomiar`.
2. **Ścieżka wyjątku projektowana razem z główną.** Stoi w ciemnym pasie
   jako rysunek, a dwie z pięciu spraw na nim idą do człowieka — lista,
   na której wszystko przechodzi, wygląda jak materiał sprzedażowy.
3. **Klucze do dostawcy modelu po stronie klienta i zero prowizji.**
   To samo zdanie, co w FAQ na `/strategia-ai`; tutaj ma własną sekcję,
   bo przy budowie waży więcej niż przy dokumencie.

Czwarty, słabszy: **sekcja „Kiedy nie warto tego budować"**, w której dwie
z trzech dróg odsyłają klienta do czegoś tańszego. To ta sama figura, co
„kiedy nas nie wybierać" na `/dlaczego-my`, tylko dotyczy pieniędzy.

## Warstwa wizualna — świadomie inny słownik

`/strategia-ai` ma: koła wypełniane łukiem, przewijany strumień 32 wierszy,
siatkę stu kwadratów, kreskowe scenki w bento, kartkę ze skanem. Żaden z tych
mechanizmów nie wraca. Trzy rysunki tej strony:

| Rysunek | Gdzie | Co niesie | Ruch |
|---|---|---|---|
| **Przekrój rozwiązania** | hero | siedem warstw, grubość = udział w czasie budowy; kolor rozdziela to, co budujemy my (94%), od modelu dostawcy (6%) | warstwy składają się od góry, potem przekrój rozsuwa się wachlarzem dokładnie na warstwie modelu i wychodzi przypis „tyle waży sam model" |
| **Próg pewności** | ciemny pas | jedna sprawa naraz, w powiększeniu: pasek pewności, kreska progu, werdykt z powodem | pięć spraw w pętli, pasek dojeżdża do wartości, werdykt wchodzi dopiero po jego zatrzymaniu |
| **Harmonogram dwutorowy** | przebieg | dziewięć tygodni w dwóch torach: nasz i klienta — bo drugie pytanie po „ile to trwa" brzmi „ile z tego jest po naszej stronie" | **sterowany scrollem**: głowica idzie po osi razem z ruchem strony, bloki wypełniają się w miarę jej przejścia |

Trzeci rysunek jest jedyną animacją w całym serwisie, która nie chodzi
z własnego zegara. To była osobna prośba („nowe podejście do animacji")
i celowo została użyta raz — sterowanie scrollem w kilku miejscach naraz
robi ze strony karuzelę.

Czasy w przekroju i w progu liczy nagłówek pliku z danych (udziały warstw,
wartości pewności), a nie ręcznie wpisane klatki. Po zmianie liczby animacja
przelicza się sama.

Wszystkie trzy mają stan końcowy czytelny przy `prefers-reduced-motion`.
Przy wyłączonym ruchu przekrój stoi złożony z podświetloną warstwą modelu,
z pięciu spraw zostaje ta, która idzie do człowieka (bo to ona niesie
argument sekcji), a harmonogram stoi wypełniony bez głowicy.

## Układ sekcji i rytm tła

| # | Sekcja | Tło | Nośnik | Szkielet nagłówka |
|---|--------|-----|--------|-------------------|
| 1 | Hero | biel + poświata | **przekrój rozwiązania** | H1 + akapit |
| 2 | Czym to jest | biel | definicja + 7 warstw w wierszach | podział 2-kolumnowy |
| 3 | Kiedy nie warto | `#f4f8f2` | 3 wiersze, trzeci wcięty z krechą | podział 2-kolumnowy |
| 4 | Próg pewności | `#0e2b1d` | **rysunek progu** w ramce | podział 2-kolumnowy, ciemna |
| 5 | Pomiar przed budową | biel | duże zdanie + wcięta kartka z zapisem umowy | zdanie zamiast nagłówka |
| 6 | Jak powstaje | `#f4f8f2` | **harmonogram dwutorowy** + 5 wierszy | podział 2-kolumnowy |
| 6b | Pas wezwania | `#16211a` | jedno zdanie i przycisk | — |
| 7 | Co zostaje u Was | biel | cztery bloki prozy w dwóch kolumnach | pełna szerokość |
| 8 | Przykłady | `#f4f8f2` | 3 wiersze z paskiem pokrycia | podział 2-kolumnowy |
| 9 | Cytat / FAQ / kontakt | biel / `#f4f8f2` | `GcFaq`, `GcCta` | — |

Trzy różne szkielety nagłówka i jedno miejsce bez nagłówka w ogóle (sekcja 5).
Kafli nie ma nigdzie poza `GcCta`; wiersze na liniach niosą trzy sekcje,
ale każda ma inną liczbę kolumn i inną hierarchię, więc nie czytają się jak
ten sam moduł powtórzony.

Dwa momenty asymetrii: wcięty trzeci wiersz w sekcji 3 i wcięta kartka
z zapisem umowy w sekcji 5.

## Czego świadomie nie ma

- **Kwoty.** Na `/strategia-ai` podanie widełek jest przewagą, tutaj nie mam
  danych, żeby jakąkolwiek liczbę obronić. Miejsce na nią jest przygotowane
  w FAQ „Ile kosztuje" — wchodzi jednym zdaniem, kiedy będzie potwierdzona.
- **Sekcji o narzędziach i modelach.** Ten sam błąd, który wywalił v2
  `/strategia-ai`: sekcja z logotypami dostawców robi z nas odsprzedawcę
  licencji. Zamiast niej stoi zdanie o braku prowizji.
- **Formularza w środku strony.** Pełny moduł kontaktowy w połowie robił
  z podstrony dwie strony sklejone. Został wąski pas z jednym zdaniem.
- **Sekcji o bezpieczeństwie danych jako osobnego bloku.** Zeszła do jednej
  kolumny w „Co zostaje u Was" i do odpowiedzi w FAQ.

## Do potwierdzenia przed publikacją

- **Udziały warstw (22/18/14/6/15/15/10)** — proporcja z naszych projektów,
  nie z pomiaru. Sam kształt (model najcieńszy) jest pewny, liczby są do
  sprawdzenia. Suma jest pilnowana w kodzie, więc edycja nie rozjedzie rysunku.
- **Dziewięć tygodni od warsztatu do produkcji** — założenie o kształcie usługi.
- **Zapis „poniżej progu nie płacicie za wdrożenie"** — decyzja handlowa,
  nie moja. Bez niej sekcja 5 traci ostrze i zostaje opisem metody.
- **Próg 92% w rysunku** — wartość przykładowa, dobrana tak, żeby sprawa
  z pewnością 93% przechodziła o włos.
- **Trzy przykłady w sekcji 8** są PRZYKŁADOWE, do podmiany na potwierdzone
  wdrożenia razem z liczbami pokrycia.
- **`/og/rozwiazania-ai.png`** — strona dziedziczy `/og/hub.png`. Naturalny
  kadr to przekrój z hero w stanie rozsuniętym.

## Zmiany poza samą stroną

- `LaBase.astro` — pozycja „Indywidualne rozwiązania AI" w megamenu prowadzi
  do `/rozwiazania-ai`; „Wdrożenia AI" w stopce też.
- `index.astro` — to samo w megamenu oraz w drugim wierszu warstwy
  „Wdrażamy AI" w sekcji S4. Atrybut `data-krok-link` zdjęty z pozycji
  w megamenu, bo prowadzi teraz poza stronę główną.
- `sitemap.xml.js` — nowy wpis z priorytetem 0.9, obok strategii.

## Jak podglądać animacje

Headless Chrome robi zrzut wcześniej, niż wskazuje `--virtual-time-budget`,
więc zwykły zrzut łapie animację w losowym miejscu. Do przeglądu faz
stawiałem tymczasową stronę w `dist/`, która ładuje `/rozwiazania-ai`
w `<iframe>` i wstrzykuje do niego
`*{animation-delay:-Xs !important;animation-play-state:paused !important}`
(ten sam origin, więc `contentDocument` jest dostępny). Pauza plus ujemne
opóźnienie daje dokładnie tę klatkę, o którą chodzi, niezależnie od timingu
zrzutu. Harmonogram sterowany scrollem sprawdza się drugą taką stroną, która
tylko ustawia `scrollTo` w iframie. Obie kasowane po robocie.

Stan przy wyłączonym ruchu: `--force-prefers-reduced-motion`.
Widoki węższe niż 500 px mierzy się przez `<iframe>` o zadanej szerokości,
bo tyle wynosi minimalna szerokość okna w headless.

## Pułapka, na którą straciłem czas

Wypełnienie bloków w harmonogramie liczyło się początkowo w CSS:
`clamp(0, (var(--p) * 9 - var(--s)) / var(--d), 1)`. Chrome nie liczy
dzielenia przez `var()` w `calc()` i cicho odrzuca całą deklarację — bloki
zostawały puste, bez żadnego błędu. Ułamek idzie teraz z JS, a CSS zostaje
przy pozycjonowaniu (`left` i `width` dzielą się przez literał).

---

## Korekta tekstu 31.08.2026

Przegląd wszystkich podstron usługowych pod kątem zapychaczy i formuł
powtarzanych między stronami. Co dokładnie zmienione i dlaczego:
`docs/przeglad-tekstow-podstron.md`, sekcja D.
