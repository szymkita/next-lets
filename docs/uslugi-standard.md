# Podstrony usługowe — standard (wzorzec: `/systemy-procesowe`)

Spisane 12.10.2026 po piętnastu wariantach `/systemy-procesowe` (v2–v15).
Ten dokument mówi, **jak wygląda i jak jest zbudowana** każda podstrona
usługowa. **Co na niej napisać** — pytania zakupowe, teza, rzeczy
sprawdzalne, uczciwy rysunek — nadal mówi `docs/podstrony-uslugowe-playbook.md`
(rozdziały 2–4, 6, 9–12 obowiązują bez zmian). Tam, gdzie playbook mówi coś
innego o układzie, wygrywa ten dokument (lista na końcu).

Wzorzec do podglądania: `src/pages/systemy-procesowe.astro`.
Od 13.10.2026 wszystkie podstrony usługowe z menu stoją w tym standardzie
pod właściwymi adresami; poprzednie wersje są pod `<adres>-old` (noindex,
poza menu i sitemapą).
Wspólne części: `src/components/usluga/`.

---

## 1 · Plik strony

Przebudowa istniejącej strony powstaje obok niej jako `<adres>-new.astro`
z `noindex`; po akceptacji nowa wersja przechodzi na właściwy adres, a stara
na `<adres>-old.astro` z `noindex` (tak zrobiono 13.10.2026). Nowa usługa
od razu pod swoim adresem. Szkielet:

```astro
---
// <NAZWA USŁUGI> — /<adres>
// Co jest na stronie i skąd (2–6 linijek). Rysunki tej usługi: …
// DO POTWIERDZENIA PRZED PUBLIKACJĄ: liczby przykładowe, osoby, decyzje handlowe.
import LaBase from '../layouts/LaBase.astro';
import GcFaq from '../components/GcFaq.astro';
import Styl from '../components/usluga/Styl.astro';
import Anim from '../components/usluga/Anim.astro';
import Hero from '../components/usluga/Hero.astro';
// …pozostałe komponenty z src/components/usluga/
import { HI } from '../components/usluga/ikony';
// dane strony (tablice) + JSON-LD (Service + BreadcrumbList + FAQPage)
---
<LaBase topbar={false} title={title} description={description} ctaHref="#kontakt" ctaLabel="Umów rozmowę" nav="uslugi">
<script type="application/ld+json" is:inline set:html={JSON.stringify(dane)} slot="head"></script>
<style is:global slot="head">/* tylko rysunki tej usługi */</style>
<div class="v3">
<Styl />
<Anim />
…sekcje…
</div>
<GcFaq heading="Pytania, które padają przed decyzją" ctaLabel="Zadajcie nam swoje →" items={faq} />
<script>/* tylko zachowania rysunków tej usługi */</script>
</LaBase>
```

- `topbar={false}` — pasek „Jesteśmy częścią" jest tylko na stronie głównej.
- Wszystko, co wspólne, bierze się z komponentów. Strona trzyma tylko
  swoje rysunki (style z prefiksem własnym dla rysunku, np. `.tor-`, `.ur13-`).
- Nie zmieniamy komponentów wspólnych ani `GcCta`, `GcFaq`, `LaBase`,
  `Nawigacja` przy pisaniu jednej strony. Brakuje czegoś w komponencie —
  zapisać to w raporcie, nie łatać lokalnie.

---

## 2 · Kolejność sekcji i tła

| # | Sekcja | Tło | Komponent / wzorzec |
|---|---|---|---|
| 1 | Hero: ciemna plansza, h1 z zielonym akcentem, lead, „Umów rozmowę" + link do sekcji z produktem; rysunek wisi na dolnej krawędzi planszy | biel, plansza | `Hero` (+ `Loga` w środku) |
| 2 | Czym jest: podpis z kreską + definicja dużym stopniem; pod nią indeks rozwijany | papier | znaczniki `.v3-def`, `Procesy` |
| 3 | Zielony pas z twarzą — **pierwsze wezwanie**, ok. dwa ekrany pod hero | biel, plansza | `Pas` |
| 4 | Dlaczego: podpis + teza na całą szerokość (pierwsza połowa szara), pod nią **dwa bloki** o tej samej budowie | biel | `.dl-blok` (sekcja 4 niżej) |
| 5 | Jak to wygląda: produkt w akcji (widoki z zakładkami) | ciemna scena na całą szerokość | `.v3-scena`, `.v3-zak`, rysunek własny |
| 6 | Przykłady: karty „Przed / Po" + cytat + krótkie wezwanie | biel | `Dowody` + `Cytat` + `CtaPasek` w slocie |
| 7 | Metoda (USP): porównanie z typowym projektem, nasza kolumna na ciemnej karcie | papier | `Metoda` |
| 8 | Wdrożenie w czasie / pierwszy efekt: rysunek właściwy usłudze | biel | rysunek własny |
| 9 | Dla kogo + „Kiedy to nie ma sensu" (jedyne miejsce, gdzie odsyłamy) | papier | `DlaKogo` |
| 10 | Kontakt: ciemna plansza z formularzem na ciemnym tle i portretem | papier wokół planszy | `Kontakt` |
| 11 | FAQ | papier | `GcFaq` |

Kolejność wolno zmienić tylko wtedy, gdy pytania zakupowe tej usługi
(playbook §2) idą inaczej — i trzeba to zapisać w nagłówku pliku. Sekcji
5 i 8 może nie być, jeśli usługa nie ma produktu do pokazania albo
wdrożenia rozłożonego w czasie; wtedy wypada też rysunek, nie zostaje pusta
sekcja. Dwie jasne sekcje tego samego tła nie mogą stać obok siebie
(poza papierem wokół planszy kontaktu).

### Forma idzie za treścią (13.10.2026)

Stała jest **rama**: hero z wezwaniem, zielony pas po pierwszej sekcji,
przykłady z cytatem i krótkim wezwaniem, „Dla kogo", kontakt, FAQ, tokeny,
typografia i nagłówki. **Środek strony i rysunki nie kopiują kształtów
z `/systemy-procesowe`.** Uwaga Szymona po pierwszym przejściu: „za bardzo
trzymasz się formy… wrzucasz wszystko w ten jeden kształt". Hero z oknem
aplikacji wygląda dobrze tylko tam, gdzie jest aplikacja do pokazania;
ciemna scena z zakładkami ma sens dla produktu, nie dla szkolenia czy
strategii. Przy każdej sekcji pytanie: jaki obiekt najlepiej niesie TEN
argument (dokument, ludzie, kalendarz, kod, rozmowa, mapa) — i dopiero do
niego dobierać formę.

### Hero: trzy warianty (`<Hero wariant=…>`)

| Wariant | Kiedy | Jak |
|---|---|---|
| `okno` (domyślny) | usługa ma aplikację do pokazania (systemy, automatyzacja z AI, integracje, wsparcie kodu) | ciemna plansza, nagłówek u góry na całą szerokość, makieta wisi na dolnej krawędzi |
| `obok` | artefakt albo ludzie na ciemnym tle | tekst po lewej, rysunek po prawej w środku planszy, nic nie wisi |
| `jasny` | wynik to dokument albo zmiana w zespole (strategia, szkolenia, audyt) | jasna plansza (papier), ciemny druk, rysunek po prawej |

Rysunek w `obok` i `jasny` nie jest oknem aplikacji: to obiekt (wydruk,
teczka, kartki, zdjęcia ludzi, kalendarz, tablica), z głębią i prawdziwą
treścią, w ruchu tam, gdzie pokazuje proces.

---

## 3 · Nagłówki: trzy układy, każdy z określonym miejscem

1. **Sekcja z treścią na całą szerokość** (Jak wygląda, Przykłady, Metoda,
   sekcja 8): `div.v8-gl` — tytuł `h2.v3-h2` po lewej, podtytuł `p.v3-sub`
   po prawej, dolne krawędzie równo.
2. **Sekcja dwukolumnowa** (Dla kogo, Kontakt, FAQ): tytuł i podtytuł jeden
   pod drugim w lewej kolumnie.
3. **Sekcja argumentu** (Czym jest, Dlaczego): podpis `h2.v3-h2m` (krótka
   zielona kreska + zdanie) i duże zdanie zamiast tytułu.

Nagłówki bez kropki (pytanie — ze znakiem zapytania). Podtytuł: jedno–dwa
zdania, bez zapowiadania tego, co widać niżej.

---

## 4 · Bloki „Dlaczego"

Oba bloki w sekcji Dlaczego są zbudowane tak samo:

```html
<div class="dl-blok">
  <div class="dl-gl"><h3>Tytuł bloku</h3><p>Opis, 2–3 zdania.</p></div>
  <figure class="dl-kafel …" data-anim data-gra>
    <div class="ts4-gl"><b>Podpis rysunku w rogu</b>…</div>
    …rysunek…
  </figure>
</div>
```

Kreska nad nagłówkiem bloku, rysunek w papierowym kaflu z podpisem w lewym
górnym rogu. Tytuł bloku nazywa to, co rysunek pokazuje (nie hasło obok:
„Narzędzia ze sobą nie rozmawiają", nie „Każdy dział kupuje osobno").

---

## 5 · Rysunki

- **Każda usługa ma własne rysunki.** Wspólna jest rama (kafel, podpis,
  kolory), nie gatunek rysunku. Lista zajętych gatunków — playbook §1 i §5,
  plus z `/systemy-procesowe`: tor procesu góra–dół między systemem
  a arkuszami, pięć okien narzędzi z drogą sprawy, makieta z kursorami
  w hero, wykres schodkowy w tygodniach.
- **Rysunek pokazuje, jak to działa, a nie ilustruje zdanie.** Najlepiej
  przyjęte: ruch, który da się prześledzić (kropka sprawy idzie przez
  narzędzia, wynik liczy się w arkuszu i wraca przepisany ręcznie), licznik,
  który rośnie tylko w przerwach.
- **Koncepcji nie rysujemy jako okna aplikacji** („wygląda jak
  vibecodowany"). Okno aplikacji tylko tam, gdzie pokazujemy prawdziwy
  produkt — wtedy bogate, z gotowym dokumentem w środku, z ludźmi,
  bez metryk-kafelków.
- **Bez legend, jeśli rysunek tłumaczy się sam.** Podpis przy elemencie
  zamiast legendy pod spodem.
- **Kolory mają jedną rolę na całej stronie:** kreskowany bursztyn
  (`.czk-j`) = czekanie, stan „przed"; zieleń = system, praca, stan „po".
- **Elementy jednego typu w jednym kolorze.** Karty ofert, karty typów
  zespołu, kafle porównania: żadna nie jest ciemna „bo ważniejsza".
  Usługę docelową wyróżnia szerokość albo miejsce w kolejności (hub
  `/guided-coding`: środkowa karta szersza). Ciemne jest tylko to, co jest
  innym obiektem niż sąsiedzi (scena, kolumna „Let's automate" w Metodzie).
- **Liczby się spinają** między rysunkami (playbook §5). Czego nie wiemy —
  w nagłówku pliku jako DO POTWIERDZENIA.
- Wszystko, co jest tylko dla urody (kafel bez danych, ikona bez funkcji),
  wypada.

### Ruch

- Wejście w kadr: `data-anim` (dostaje `.on` raz). Jeśli CSS chowa stan
  startowy, element ma też `data-gra` (dostaje `.gra` od razu) — stany
  startowe pisać tylko pod `.gra`, żeby bez JS i przy ograniczonym ruchu
  było widać stan końcowy.
- Pętla tylko w rysunku, który pokazuje proces; pauza, kiedy rysunek nie
  jest w kadrze; na wąskim ekranie rysunek może być statyczny.
- `prefers-reduced-motion`: stan końcowy, wszystkie liczby widoczne.

---

## 6 · Wezwania do rozmowy

| Gdzie | Co |
|---|---|
| hero | przycisk „Umów rozmowę" + link do sekcji z produktem |
| po pierwszej sekcji treści | zielony pas z twarzą (`Pas`) |
| pod przykładami, po cytacie | krótki pasek z dwiema twarzami (`CtaPasek`) |
| koniec strony | kontakt (`Kontakt`) |
| zawsze | przycisk w nawigacji |

- Dwa wezwania nigdy obok siebie; nie częściej niż co ok. 3 ekrany.
- Zdanie w pasie to werdykt albo obietnica z pierwszej rozmowy, nie prośba
  o kontakt. Formularz prosty: e-mail, telefon, jedno pole opisowe.
- Pas i plansza kontaktu mają nad i pod sobą równą ramę (pas — białą,
  kontakt — papier, bo sąsiedzi są papierowi).

---

## 7 · Copy

Wszystko z playbooka §10 i z pamięci projektu:

- zero triad, zero antytez „X, a nie Y" / „Nie chodzi o…", zero obietnic
  otwieranych drugą osobą;
- **zero dopisków, które nic nie wnoszą**: „Wasz proces nazywa się pewnie
  inaczej", „Widoki są poglądowe…", zdania o tym, co widać niżej, notki
  zajmujące miejsce w pionie;
- strona sprzedaje wynik usługi docelowej, nie przebieg spotkania;
- pierwsze zdanie definicji: podmiot = nazwa usługi (pod modele językowe);
- liczby tylko prawdziwe albo oznaczone jako przykładowe.

---

## 8 · Komponenty (`src/components/usluga/`)

| Komponent | Props | Uwagi |
|---|---|---|
| `Styl` | — | wspólny CSS; raz na stronę |
| `Anim` | — | wejście w kadr (`data-anim`, `data-gra`); raz na stronę |
| `Hero` | `lead`, `cta?`, `link?`, `wariant?` (`okno` / `obok` / `jasny`), `bezRysunku?`, `loga?`; slot `h1`, slot domyślny = rysunek z klasą `.hero-wid` | `<Fragment slot="h1">… <span>akcent</span></Fragment>`; wariant według §2 |
| `Loga` | — | w `Hero` |
| `Procesy` | `tytul`, `pozycje[{t, a, b, przyklad?{f, przed, po, href?}}]`, `etykietaA?`, `etykietaB?` | indeks rozwijany pod definicją |
| `Pas` | `tekst`, `foto`, `fotoW`, `fotoH`, `alt`, `imie`, `rola`, `href?`, `cta?` | zielony pas |
| `Dowody` | `tytul` (HTML), `sub`, `przyklady[{p, f, m, d, przed, po, przedD, poD}]`, `skala?`, `miara?`, `link?`, `id?`; slot | karty „Przed / Po", strzałki |
| `Cytat` | `cytat`, `logo?`, `logoAlt?`, `logoW?`, `logoH?`, `imie`, `rola` | w slocie `Dowody`; bez pliku znaku — bez logo |
| `CtaPasek` | `tytul`, `pod?`, `href?`, `cta?` | w slocie `Dowody` |
| `Metoda` | `tytul` (HTML), `sub`, `wiersze[{k, ik?, ikSvg?, r, t, m}]`, `typowy?`, `liczba?`, `podpis?`, `stopka?`, `id?`; slot | `ik` = klucz z `HI`, `ikSvg` = własna ścieżka; `podpis` domyślnie „według WiseStacka", `''` chowa |
| `DlaKogo` | `tytul?`, `sub`, `warunki[{t, d}]`, `nieTytul?`, `nie[]` (HTML), `id?` | odesłanie w „Kiedy to nie ma sensu" może być linkiem |
| `Kontakt` | `tytul`, `lead`, `zrodlo`, `pytanie`, `podpowiedz`, `osoba?`, `po?` | prawdziwy formularz (`/api/kontakt`); `po` = zdanie pod przyciskiem, domyślnie „Rozmowa trwa 30 minut…” |
| `ikony.ts` | `HI`, `SYGNET`, `ZNAK_WS`, `IBELKA` | Heroicons Micro 16; brakującą ikonę dopisać do `HI` (i zgłosić) |

Klasy wspólne do własnych sekcji: `.v3-sek`, `.v3-papier`, `.v8-gl`,
`.v3-h2`, `.v3-h2m`, `.v3-sub`, `.v3-teza`, `.v3-def`, `.dl-blok`, `.dl-gl`,
`.dl-kafel`, `.ts4-gl` (podpis kafla), `.ts4-licz` (licznik obok podpisu), `.ts4-znow` (przycisk „jeszcze raz", widoczny pod `.gra`), `.v3-scena`, `.v3-zak`, `.v3-jw-dol`,
`.v3-btn` (`.ciemny`), `.czk-j`, `.rv` (odsłonięcie z `LaBase`).

### Przykłady, gdy miara nie jest „przed / po"

`Dowody` liczy dwa paski w jednej skali. Usługi, których wynik jest inny
(liczba osób z N w szkoleniach, etap decyzji w strategii, alarmy w kwartale
w integracjach, udział spraw zamkniętych bez człowieka w rozwiązaniach AI),
budują własne karty na wspólnym rzędzie: `section#dowody.v3-sek` → `.v8-gl`
→ `div.v4-dw.dw-sc[data-dw-sc]` z `article.dw4-k` → `.dw-dol` ze
strzałkami (`data-dw-wstecz`, `data-dw-dalej`) → `Cytat` → `CtaPasek`.
Skrypt strzałek trzeba wtedy mieć w stronie (kopia z `Dowody.astro`).
Usługa bez potwierdzonych przypadków może przykłady pominąć — lepiej niż
liczby wymyślone dla kilku firm.

### Ton i liczby wspólne dla serwisu

- Do klienta mówimy „Wy" (megamenu, wszystkie podstrony usługowe).
- Liczba wdrożeń w metodzie musi być ta sama na każdej stronie; dziś
  rozjeżdża się („140+", „200+", „140+ firm" w logotypach) — DO DECYZJI.
- Twarz w zielonym pasie dobrana do usługi; ta sama osoba może stać na kilku
  stronach, ale z prawdziwą rolą.

---

## 9 · Sprawdzenie przed oddaniem

1. Szerokości 320, 390, 768, 1024, 1280, 1440: nic nie wychodzi poza ekran
   (`scrollWidth` = szerokość okna), także po przewinięciu całej strony.
2. Konsola bez błędów, także przy `prefers-reduced-motion`.
3. Formularz: pusty → błędy; poprawny → potwierdzenie; zgłoszenie ma
   `zrodlo` z nazwą usługi.
4. Zrzuty całej strony na 1440 i 390 w stanie końcowym; rysunki obejrzane
   osobno w trakcie ruchu.
5. Grep copy: triady, „a nie", „Nie chodzi o", kropki w nagłówkach,
   dopiski bez treści.
6. `npx astro build` — raz, na koniec (równoległe buildy czyszczą `dist/`).

Narzędzia do zrzutów (headless Chrome) muszą po sobie sprzątać: zamknąć
Chrome i skasować profil (`--user-data-dir`) także przy błędzie. Przy
siedmiu agentach naraz porzucone profile w `/tmp/cdp-*` zajęły kilkanaście
GB i zapełniły dysk. Przy pracy równoległej każdy proces ma własny zakres
portów i czeka na selektor, a nie na stały czas — serwer deweloperski
pod obciążeniem ładuje skrypty kilka sekund.

---

## 10 · Co zmienia się względem playbooka

- Playbook §8 („co najmniej trzy różne szkielety nagłówka", „ciemny pas
  raz") → zastąpione przez §2–3 tutaj: trzy układy nagłówka, każdy
  w swoim miejscu, i stała kolejność teł.
- Playbook §11 („pod spodem zdanie, że widoki są poglądowe") → bez tego
  zdania.
- Playbook §15 (podpięcie): megamenu prowadzi na właściwe adresy, więc
  podmiana pliku wystarcza; nowa usługa — dopisać do `Nawigacja.astro`
  i `sitemap.xml.js`.
