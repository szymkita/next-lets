# Bezpłatna konsultacja — koncepcja strony `/darmowa-konsultacja-v3`

Wersja z 09.09.2026. Powstała ze złożenia dwóch poprzednich, a po pierwszej
korekcie Szymona stoi na prawdziwym przebiegu usługi i na rezultatach
współpracy. Obie starsze wersje zostają nietknięte do porównania; strona jest
`noindex` do czasu decyzji o podmianie.

---

## 1 · Przebieg, który strona opisuje

Ustalenia z 09.09.2026:

1. **Telefon albo mail po formularzu** — krótko: o czym jest sprawa i czy
   wstępnie umiemy pomóc. Kiedy nie umiemy, spotkania nie umawiamy.
2. **Do 45 minut bezpłatnej konsultacji** — wejście w problem głębiej.
3. **Plan działania**, kiedy widzimy, że pomożemy: pomysł na rozwiązanie,
   kolejne kroki i **cena kolejnego etapu**. Plan zostaje u klienta
   niezależnie od tego, czy zaczniemy współpracę.

To trzecie zdarzenie jest produktem tej strony. Poprzednie wersje sprzedawały
spotkanie („30 minut rozmowy"); ta sprzedaje wynik, z którym się z niego
wychodzi — stąd nagłówek zgięcia i lista „z czym wychodzisz z konsultacji"
zamiast listy „co ustalimy".

---

## 2 · Treść stamtąd, design nasz

Z dzisiejszej `/darmowa-konsultacja` na letsautomate.pl bierzemy **treść
i zestaw tematów**, nie warstwę wizualną: co klient zyskuje z rozmowy,
„jak działamy", „jak przygotować się do konsultacji" z twarzą osoby, która
dzwoni, opinie z nazwiskami i FAQ. Stary słownik wizualny (czarne karty,
mięta, gwiazdki, szewrony wokół nadnagłówków) **zostaje na starej stronie** —
nowy serwis ma własny design i ta podstrona jest jego częścią.

Design jest ten sam co na `/dlaczego-my` i pozostałych nowych podstronach:
biel z poświatą w prawym górnym rogu, duże nagłówki `.h-sec`, wiersze na
włoskowych liniach, tło `#f4f8f2`, ciemnozielony pas `#0e2b1d` z promieniem
26, portret z cytatem przy zielonej kresce, przyciski `#16211a` i `.btn-accent`.

### Elementy podpatrzone u SellWise (`sellwise.pl/bezplatna-konsultacja`)

| Ich element | Nasza wersja |
|---|---|
| pigułki z liczbami w zgięciu (`> 5`, `30min.`) | dwie pigułki: „1 dzień roboczy — tyle czekasz na telefon" i „do 45 minut — tyle trwa konsultacja" |
| pasek gwarancji pod przyciskiem formularza | trzy zdania z zieloną fajką: bezpłatnie i bez zobowiązań, odzywamy się w jeden dzień roboczy, po konsultacji decydujesz Ty |
| „Nie wiesz, o co zapytać?" — dymki z pytaniami z rozmów | sekcja „Nie wiesz, od czego zacząć rozmowę?" z pięcioma zdaniami, które naprawdę słyszymy — tymi samymi, które stoją na `/dlaczego-my`; dymki białe i ciemnozielone, nasz kolor |
| ścieżka „jak rozpocząć współpracę" — numerowane kroki na kropkowanej linii, pod każdym pigułka czasu | ta sama forma: cztery kroki (formularz → telefon → konsultacja → plan), kółka z numerami na kropkowanej linii, pigułki „minuta", „1 dzień roboczy", „do 45 minut", „po konsultacji" |
| „Co zyskujesz dzięki bezpłatnej konsultacji?" — trzy karty z makietą | trzy karty z rysunkiem w HTML: plan z ceną etapu, przekazanie telefon → konsultacja, wybór „nie teraz / zaczynamy" |
| „Biuro → Ekspert" — kto dzwoni, a kto prowadzi rozmowę | druga karta pokazuje to wprost: telefon od Piotra, konsultacja z osobą od wdrożenia |
| nagłówek „Wypełnij formularz" nad polami | to samo, w naszej skali typografii |

Czego z SellWise nie bierzemy: ściany logo klientów (nie mamy w repo ani
plików, ani zgód), kafli branżowych i linków do regulaminu bezpłatnej
konsultacji oraz obowiązku informacyjnego — takich dokumentów jeszcze nie ma.

Rytm teł: biel (zgięcie) → `#f4f8f2` (zdania z rozmów) → biel (ścieżka)
→ `#f4f8f2` (co zyskujesz) → biel (przed konsultacją) → `#f4f8f2` (rezultaty)
→ ciemny pas na bieli → biel (opinie) → `#f4f8f2` (FAQ) → biel (domknięcie).

**Zgięcie.** Po lewej nagłówek z akcentem na „planem działania i ceną",
akapit i wiersz „po wysłaniu formularza dzwoni Piotr". Po prawej karta
formularza 560 px z nagłówkiem w środku. Pod obiema kolumnami pasek zaufania:
twarze zespołu, odznaka OpenAI Select Partner, liczby i przynależność do
grupy. Świadomie nie ma tu nadnagłówka (nagłówek zaczyna się od tych samych
słów), pigułek z liczbami ani rzędu zielonych ptaszków — gwarancje są jedną
szarą linią pod przyciskiem.

Drobiazgi UX: `scroll-margin-top` na sekcji formularza (skok spod przyklejonej
nawigacji), ustawienie kursora w polu e-mail po kliknięciu odnośnika do
formularza, „nieobowiązkowe" przy polu opisu sprawy, etykiety „przed"/„po"
przy rezultatach na telefonie i ciemniejszy drobny druk (kontrast).

---

## 3 · Rezultaty zamiast opisu spotkania

Sekcja „Po czym poznać, że to miało sens" bierze czwórkę ze strony głównej:
99,7% skuteczności księgowania, −80% czasu oferty, 65 h odzyskane miesięcznie,
−90% zapytań obsługiwanych ręcznie. Liczby są te same co na `/`, więc zmiana
w jednym miejscu wymaga zmiany w drugim.

Forma inna niż na stronie głównej: tam cztery równe kafle, tu wiersze na
liniach z kolumnami „przed" i „po". Zdanie nad tabelą wiąże rezultat
z konsultacją: rozmowa jest po to, żeby ustalić, który z tych wyników jest
u klienta do wzięcia najszybciej.

---

## 4 · Czego świadomie nie ma i dlaczego

- **Przykładowego maila po rozmowie** (koperta z wymyśloną treścią z v2)
  i obietnicy „przyjdzie mail". Miejsce wyniku zajął plan działania z ceną.
- **Paska 5/15/7/3 minuty** i zdania „20 z 30 minut mówisz Ty" — proporcje
  były z oka; rysunek udający pomiar kosztuje wiarygodność reszty strony.
- **Sekcji „kiedy nie warto się umawiać"** — prawdziwa granica stoi teraz
  w pierwszym wierszu czarnej karty („spotkania na siłę").
- **Zdjęć z banku obrazów przy opiniach** — v1 stawiała twarze z Pexels przy
  prawdziwych nazwiskach klientów.

---

## 5 · Co zostało z poprzednich wersji

Treść: przebieg usługi (punkt 1), lista „co zyskasz" w czarnej karcie,
czarna karta „czego na tej konsultacji nie będzie", FAQ przepisane na dwa
kontakty i 45 minut, komponent formularza z prawdziwą wysyłką na
`/api/kontakt`. Zdanie Piotra pod listą pytań jest tym samym, które stoi
w hero `/dlaczego-my`.

---

## 6 · Formularz

`src/components/FormularzLead.astro`, dwa wystąpienia: ciemne pudło w prawej
kolumnie zgięcia i jasne w domknięciu. Pola są dokładnie tymi, które przyjmuje
`api/kontakt.js` (`email`, `telefon`, `wiadomosc`, `zrodlo` + pułapka
`firma_www`). Jeden skrypt w stronie obsługuje oba formularze przez
`[data-lead]`.

Komponent dostał dwie rzeczy:

- prop `kroki` — trzy zdania na ekranie po wysłaniu; domyślne zostają dla
  stron, które ich nie podają (czyli dla v2), v3 podstawia własne:
  telefon → do 45 minut → plan i cena,
- wariant `jasny` w wąskiej kolumnie: pola idą jedno pod drugim
  (`#formularz .fk-para{grid-template-columns:1fr}`), bo przy dwóch
  kolumnach na 468 px robiły się ciasne.

`portret` jest wyłączony: twarzą strony jest portret Piotra w sekcji
„przed konsultacją".

Gdy endpoint odpowie błędem (503 przy braku zmiennych środowiskowych), karta
nie udaje wysyłki — pokazuje mail i telefon z gotowym `mailto`.

Podgląd ekranu po wysłaniu bez wysyłki: `/darmowa-konsultacja-v3?sukces=1`.

---

## 7 · Do potwierdzenia przed publikacją

1. **Czas konsultacji** — strona mówi „do 45 minut", dzisiejszy
   letsautomate.pl obiecuje „pełną godzinę", strona główna 30 minut. Jedna
   liczba na cały serwis.
2. **Kto prowadzi konsultacje** — pierwszy telefon: Piotr Wojciuk (jest na
   stronie). Kto siedzi na samej konsultacji, zostaje do potwierdzenia.
3. **Cztery rezultaty** — czy liczby ze strony głównej są aktualne i czy
   można je pokazywać bez nazw firm.
4. **Skład paska twarzy zespołu** — dziś sześć osób z `/public/team`.
5. **Cztery zdania z czarnej karty** — to deklaracje handlowe, nie fakty
   techniczne.
6. **Adres `/polityka-prywatnosci`** — link stoi w zgodzie formularza.
7. **Druga zgoda, marketingowa** — `api/kontakt.js` nie zapisuje zgód osobno.

---

## 8 · Podmiana na `/darmowa-konsultacja`

1. kopia obecnej strony do `docs/_kopie/darmowa-konsultacja-przed-v3.astro`
2. `darmowa-konsultacja-v3.astro` → `darmowa-konsultacja.astro`, zdjęte
   `noindex`, poprawione `zrodlo` w obu formularzach
3. `sitemap.xml.js` ma już wpis `/darmowa-konsultacja`
4. linki ze stopki i z bazy wiedzy zaczną działać same
5. do decyzji: czy CTA na podstronach usługowych (dziś kotwice `#kontakt`,
   `#diagnoza`, `#formularz`) mają prowadzić na tę stronę
6. do przeliczenia: strona główna i pozostałe podstrony mówią „30 minut"
   i „diagnoza" — po decyzji z punktu 7.1 trzeba je zrównać
