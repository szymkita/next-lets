# Nawigacja — decyzje i rzeczy schowane

## Rozwiązania — ZAKŁADKA SCHOWANA (29.08.2026)

W `src/pages/index-v4.astro` pozycja „Rozwiązania" jest zakomentowana w `.nav-menu`.
Markup został w pliku w całości — wystarczy zdjąć komentarz, żeby wróciła.

**Dlaczego schowana:** za zakładką nie stała żadna treść. Osiem pozycji prowadziło do
dwóch kotwic na tej samej stronie głównej (`#dowody`, `#oferta`), więc każdy, kto tam
kliknął, wracał tam, skąd wyszedł. Do tego grupa „według systemu" (CRM, portal i panel
klienta, panel operacyjny, integracje) dublowała pion „Budujemy aplikacje" z menu Usługi.

**Kiedy wraca:** gdy powstaną realne podstrony. Ustalony kierunek docelowy to
**katalog procesów, które przejmujemy**, ułożony po działach:

- Sprzedaż — ofertowanie i wyceny, kwalifikacja leadów, follow-up
- Obsługa klienta — zgłoszenia i maile, status zamówień, reklamacje
- Operacje — obieg dokumentów, zamówienia i logistyka, harmonogramy
- Finanse i dane — obieg faktur, raportowanie zarządcze, kontrola kosztów

Powód: klient szuka nazwy swojego procesu („obieg faktur"), a nie nazwy systemu
(„panel operacyjny"). Trzy z tych procesów mają już case'y na stronie głównej.

**Do przeniesienia przy okazji:** grupa „według systemu" ma trafić do zakładki
**Inspiracje**, razem z realizacjami — pokazuje realne rzeczy, więc tam pasuje.

## Know-how — do rozstrzygnięcia

Ten sam problem: Baza wiedzy, Playbooki, Webinary i Słownik AI prowadzą donikąd.
Wg ustaleń z Szymonem Negaczem know-how to druga faza, po publikacji nowej komunikacji.
Rozważyć zwinięcie do jednego linku albo schowanie do czasu pierwszych treści.

## Know-how — UPROSZCZONE (03.09.2026)

Zakładka zostaje (nie chowamy jej), ale megamenu jest przebudowane:

- **Zeszły nagłówki sekcji** „Metoda", „Produkty", „Wiedza" — mono, wersaliki, rozstrzelone.
  Trzy takie etykiety nad dziewięcioma linkami krzyczały głośniej niż same pozycje.
  Podział niosą teraz dwie kolumny i cienka pionowa kreska między nimi.
- **Wise AI Score zszedł z karty po prawej do listy**, pod pozycje metody
  (WiseStack, AI Adoption Framework). Po prawej nie ma już wyróżnionej karty.
- **Panel zwęził się z 940px do 640px** — bez karty szerokość nie miała pokrycia w treści.

Lewa kolumna: WiseStack, AI Adoption Framework, Wise AI Score. Prawa bez zmian
(Baza wiedzy, Playbooki, Webinary, Słownik AI) — nadal prowadzi na `#dowody`,
bo treści jeszcze nie ma.

### Produkty — Deskto zdjęte, Appto wyżej (03.09.2026)

- **Deskto.ai usunięte z nawigacji w całości.** Za wczesny etap, żeby wysyłać tam ruch
  ze strony głównej. Wraca, gdy produkt będzie gotowy na odwiedzających — markup
  do odtworzenia leży w kopii nawigacji obok.
- **Appto.ai wyszło z megamenu na belkę** jako osobna pozycja `Appto ↗`, między
  Know-how a Inspiracjami. Otwiera się w nowej karcie (`target="_blank"`), bo
  wyprowadza poza serwis — strzałka ↗ i tak to zapowiada.
- Bez tych dwóch pozycji panel Know-how zwęził się dalej, z 640px do 600px.
- **`.nav-item` Know-how dostał `position:relative`.** Bez tego `.mega-wrap`
  (`left:50%`) kotwiczy się do `.site-header`, bo `.nav-item` jest `static`,
  a sticky header to najbliższy pozycjonowany przodek — panel centrował się
  więc na ekranie, 130px obok swojej pozycji. Przy szerokości 940px nie było
  tego widać, przy 600px już tak. Mega Usługi zostaje bez zmian: przy 940px
  wyśrodkowanie na ekranie jest tam zamierzone.

**Pełny markup sprzed zmiany:** `docs/_kopie/nawigacja-przed-uproszczeniem-know-how.html`
(cała nawigacja, więc razem z mega Usługi i zakomentowanym mega Rozwiązania).

### Wiedza — zwinięta do jednej pozycji (03.09.2026)

Playbooki i guide'y, Webinary i nagrania oraz Słownik AI **usunięte**. Powód ten sam,
co przy Rozwiązaniach: prowadziły na `#dowody`, czyli z powrotem na tę samą stronę.
Różnica jest taka, że tutaj stały obok Bazy wiedzy — jedynej pozycji, za którą stanie
treść. Trzy martwe linki obok jednego żywego psują ten żywy: kto kliknie Playbooki
i wróci donikąd, drugi raz nie kliknie już Bazy wiedzy.

Po wycięciu megamenu Know-how to **jedna kolumna, cztery pozycje**:
WiseStack, AI Adoption Framework, Wise AI Score, Baza wiedzy (`/baza-wiedzy`).
Zniknęła druga kolumna i kreska rozdzielająca, panel zwęził się z 600px do 340px.

**Do zrobienia:** podstrona `/baza-wiedzy` jeszcze nie istnieje — link czeka na treść.

**Kiedy wracają:** przy pierwszym realnym playbooku. Dokładanie pozycji to jedna
linijka w tej samej kolumnie, bez przestawiania układu. Markup starej wersji
(dwie kolumny + cztery pozycje wiedzy) jest w kopii nawigacji obok.
