# Bezpłatna konsultacja — koncepcja strony `/darmowa-konsultacja-v2`

Wersja robocza z 08.09.2026. Obecna `/darmowa-konsultacja` zostaje nietknięta
do porównania. Strona jest `noindex` do czasu decyzji o podmianie.

---

## 1 · Czym się różni od dotychczasowej

| | `/darmowa-konsultacja` | `/darmowa-konsultacja-v2` |
|---|---|---|
| Zgięcie | split: argumenty po lewej, formularz w prawej kolumnie | nagłówek pełną szerokością, pod nim sam formularz |
| Oś strony | lista zalet rozmowy | oś czasu zgłoszenia: wysyłka → kontakt → rozmowa → mail |
| Dowód produktu | brak | przykładowy mail po rozmowie, rysowany w HTML |
| Rozmowa | „30 minut" jako obietnica | pasek 5/15/7/3 minuty, z którego widać, że 20 z 30 minut mówi klient |
| Granica | brak | „Kiedy nie warto się umawiać" w ciemnym pasie |
| Formularz | jeden, u góry | dwa (u góry i w domknięciu), jeden komponent i jeden skrypt |
| Wysyłka | `FORM_ENDPOINT = ''`, tylko droga awaryjna | POST na `/api/kontakt`, droga awaryjna gdy endpoint odpowie błędem |
| Rusztowanie | własny `<head>`, własna kopia stylów bazowych i FAQ | `LaBase` jak pozostałe podstrony |

Inspiracja z dzisiejszego letsautomate.pl: kolejność „benefity → formularz →
jak działamy → jak się przygotować → ekspert → opinie → FAQ". Zostały z tego
trzy rzeczy — sekcja przygotowania (u nas: pytania, które padną), twarz osoby
prowadzącej rozmowę i FAQ. Reszta kolejności jest przestawiona pod jedno
pytanie: co się wydarzy po kliknięciu.

---

## 2 · Teza

**Mail po rozmowie zostaje u klienta niezależnie od tego, czy zaczniemy
współpracę.** Kategoria sprzedaje „bezpłatną konsultację", czyli rozmowę
sprzedażową pod inną nazwą. Tego zdania nie przepisze konkurent, który nic
po rozmowie nie wysyła.

Teza ma własne miejsce: sekcja S2 z artefaktem i zdaniem w dużym stopniu
pisma, a nie akapit w wyliczance (playbook, krok 3).

---

## 3 · Rzeczy sprawdzalne

- odpowiedź w **jeden dzień roboczy** — klient sprawdza to sam, następnego dnia
- **mail po rozmowie** w kilka dni roboczych, z pierwszym krokiem opisanym
  tak, żeby dało się go zlecić komuś innemu
- **rząd wielkości kosztu** w tym samym mailu; pełna wycena dopiero przy znanym
  zakresie
- do konsultacji **nie potrzebujemy dostępu do żadnego systemu klienta**

---

## 4 · Warstwa wizualna

Słownik osobny od rodzeństwa (playbook, krok 5):

| Strona | Mechanizm |
|---|---|
| `/strategia-ai` | łuki, strumień wierszy, siatka stu kwadratów |
| `/rozwiazania-ai` | przekrój warstw, próg pewności |
| `/szkolenia-ai` | jednostki do policzenia |
| `/systemy-procesowe` | oś czasu sprawy: praca kontra czekanie |
| **`/darmowa-konsultacja-v2`** | **oś czasu zgłoszenia + pasek jednej rozmowy + koperta** |

Jedna miara przez całą stronę: **czas klienta**. Cztery punkty osi (dziś,
jeden dzień, 30 minut, kilka dni), pasek tych samych 30 minut i mail, który
przychodzi po ostatnim punkcie osi. Liczby się spinają — ostatni punkt osi
mówi „przychodzi mail", a następna sekcja ten mail pokazuje.

Rytm teł: biel (formularz) → `#f4f8f2` (oś) → biel (mail) → `#f4f8f2`
(rozmowa) → `#0e2b1d` (czego nie będzie) → biel (opinie) → `#f4f8f2` (FAQ)
→ biel (domknięcie). Ciemny pas pada raz i bierze najcięższy argument.

Szkielety nagłówków, żeby żaden się nie powtórzył: pełna szerokość bez
akapitu (oś), dwie kolumny z tezą (mail), nagłówek + zdanie po prawej
(rozmowa), nagłówek w ciemnej karcie (czego nie będzie), wąska kolumna
z liczbami (opinie), środek (domknięcie).

Czego świadomie nie ma:
- rzędu zielonych ptaszków z hasłami pod przyciskiem — to był konkretny
  zarzut przy poprzednich stronach
- siatki trzech równych kafli na „jak to działa" — zastąpiona osią
- karuzeli opinii — trzy cytaty na liniach, bo strona ma być krótka
- drugiego ciemnego pudła w domknięciu — dolny formularz jest jasny

---

## 5 · Rysunki i to, co z nich wynika

**Pasek 30 minut** (`AGENDA` w nagłówku pliku). Proporcje są daną: segment
„jak to wygląda dziś" zajmuje połowę paska, a zdanie pod spodem — „20 z 30
minut mówisz Ty" — liczy się z tej samej tablicy. Zmiana minut przelicza
i pasek, i zdanie.

**Koperta** (S2). Rysowana w HTML, nie wklejona jako obrazek. Jedna sprawa
przechodzi przez wszystkie wiersze (ofertowanie), a wiersz „czego bym teraz
nie ruszał" mówi rzecz niewygodną handlowo — to on uwiarygodnia resztę.
Pod spodem stoi zdanie, że treść jest zmyślona.

**Oś zgłoszenia** (S1). Punkt „30 minut" jest jedynym z akcentem, bo to
jedyne miejsce, w którym po drugiej stronie siedzi człowiek.

---

## 6 · Formularz

Komponent `src/components/FormularzLead.astro`, dwa warianty tła
(ciemny w zgięciu, jasny w domknięciu). Pola są dokładnie tymi, które
przyjmuje `api/kontakt.js`: `email`, `telefon`, `wiadomosc`, `zrodlo`
plus pułapka `firma_www`. Każde dodatkowe pole endpoint wyrzuci.

- walidacja po stronie strony: e-mail, telefon (min. 9 cyfr), zgoda
- POST JSON na `/api/kontakt`; `zrodlo` mówi, z którego formularza przyszło
- **gdy endpoint odpowie błędem** (503 przy braku zmiennych środowiskowych),
  strona nie udaje wysyłki — pokazuje mail i telefon, z gotowym `mailto`
  wypełnionym treścią zgłoszenia
- po wysłaniu karta zamienia się w ekran „Mamy Twoje zgłoszenie" z echem
  adresu (klient od razu widzi literówkę) i trzema krokami „co dalej"
- podgląd tego ekranu bez wysyłki: `/darmowa-konsultacja-v2?sukces=1`

Żeby wysyłka zaczęła działać na produkcji, `api/kontakt.js` potrzebuje
przynajmniej jednej zmiennej: `WEBHOOK_URL`, `SLACK_WEBHOOK_URL` albo
`RESEND_API_KEY` + `LEAD_TO`.

---

## 7 · Do potwierdzenia przed publikacją

Pełna lista stoi w nagłówku pliku strony. Najważniejsze:

1. **30 minut czy godzina** — obecny letsautomate.pl obiecuje „pełną
   godzinę", strona główna i ta strona mówią 30 minut. Jedna liczba na cały
   serwis; od niej zależy pasek w S3.
2. **Podział minut** (5/15/7/3) i zdanie „20 z 30 minut mówisz Ty".
3. **Treść przykładowego maila** — czy tak wygląda to, co wysyłamy.
4. **Kto prowadzi rozmowy** (strona pokazuje Szymona; na dzisiejszym
   letsautomate.pl jest Michał Langowski).
5. **Granice w ciemnym pasie** — obie są decyzją handlową.
6. Adres `/polityka-prywatnosci` i druga zgoda (marketingowa), której
   `api/kontakt.js` dziś nie zapisuje osobno.

---

## 8 · Podmiana na `/darmowa-konsultacja`

Gdy wersja zostanie przyjęta:

1. kopia obecnej strony do `docs/_kopie/darmowa-konsultacja-przed-v2.astro`
2. `src/pages/darmowa-konsultacja-v2.astro` → `darmowa-konsultacja.astro`,
   zdjęte `noindex`, poprawiony adres w komentarzu nagłówka i w `zrodlo`
   obu formularzy
3. `sitemap.xml.js` — wpis `/darmowa-konsultacja` już tam jest, nic nie
   trzeba dopisywać
4. `Stopka.astro` i wpisy w bazie wiedzy prowadzą na `/darmowa-konsultacja`,
   więc linki zaczną działać same

---

## 9 · Jak podglądać

- pełna strona: `npx astro build`, potem serwer na `dist/`
- widok telefonu: strona pomocnicza w `dist/` z `<iframe width="390">` —
  headless Chrome ma minimalną szerokość okna około 500 px i zrzut 390 px
  wychodzi ucięty
- stany formularza (błędy, droga awaryjna): strona pomocnicza z iframem,
  która wypełnia pola i wywołuje `submit`
- stan końcowy animacji: `--force-prefers-reduced-motion`
