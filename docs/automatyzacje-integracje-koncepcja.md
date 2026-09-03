# Automatyzacje i integracje — koncepcja strony

Strona: `src/pages/automatyzacje-integracje.astro`. Utworzona 30.08.2026.
Trzecia i ostatnia podstrona z pionu **Budujemy aplikacje**. Komplet zamknięty:
sześć podstron usługowych, trzy piony.

## Lekcja z poprzedniej strony

`/systemy-dla-klientow` została oceniona jako najsłabsza z pięciu. Dwie
przyczyny, obie do naprawienia tutaj:

1. **Dwa rysunki tego samego gatunku.** Lista słupków w hero i lista słupków
   w ciemnym pasie. Motyw powtórzony to dobra zasada, ale nie wtedy, kiedy
   powtórzeniu ulega także *forma* — wtedy zamienia się w monotonię.
2. **Teza była wypowiedziana, nie pokazana.** Zdanie o tym, że portal musi
   być szybszy od telefonu, stało w tekście, a żaden rysunek go nie dowodził.

Tutaj: **jedna animacja z prawdziwym ruchem i jeden artefakt** — dwa różne
rejestry. I teza pokazana zamiast opisanej: w hero trzecia linia po prostu
przestaje pulsować, a alarm zapala się dopiero po chwili ciszy.

## Czym się różni od reszty pionu

| | Co buduje | Miara |
|---|---|---|
| `/systemy-procesowe` | system prowadzi proces wewnątrz firmy | czas sprawy |
| `/systemy-dla-klientow` | system stoi po stronie klienta | liczba pytań, które przestają przychodzić |
| **tutaj** | dane przechodzą między systemami | **czy wiadomo, kiedy przestaną przechodzić** |

To jest **podłoga tego pionu**: najtańsza rzecz, jaką można u nas kupić,
i jedyna, po której wynik widać w kilka tygodni. Bywa całą potrzebną zmianą,
a bywa warunkiem wstępnym — zanim system poprowadzi proces, dane muszą być
w jednym miejscu i aktualne. FAQ mówi to wprost i linkuje w obie strony.

## Decyzja pozycjonująca

**1 · Rola.** Integracja kosztuje dni, nie miesiące, i widać po niej szybko,
czy warto iść dalej. To jest argument dla firmy, która nie jest gotowa na
duży projekt, a chce sprawdzić, czy współpraca ma sens.

**2 · Teza.** *Automatyzacja, o której awarii nikt się nie dowiaduje, jest
gorsza od jej braku* — bo ludzie już przestali robić to ręcznie, a system
przestał robić to za nich. Kategoria sprzedaje scenariusze w Make'u czy n8n;
**my sprzedajemy to, że o awarii dowiadujecie się w minutach.**

Konsekwencja: sam scenariusz jest na tej stronie nazwany „najprostszą częścią
pracy". Trudne jest to, co wokół niego — zachowanie przy błędzie, próg alarmu,
imienny właściciel.

## Trzy rzeczy sprawdzalne przed podpisaniem umowy

1. **Karta przy każdym połączeniu** — pokazana w ciemnym pasie w całości,
   nie opisana. Klient widzi, co dostanie, zanim cokolwiek zamówi.
2. **Alarm z progiem czasowym**, nie „monitoring" w ogólności: osiem minut
   ciszy i wiadomość idzie do imiennie wskazanej osoby.
3. **Odsyłamy do zrobienia samemu**, kiedy chodzi o jedno połączenie i ktoś
   u klienta umie kliknąć scenariusz. To pierwsza pozycja w bloku o tym,
   kiedy to nie ma sensu, i pierwsze zdanie odpowiedzi w FAQ.

## Warstwa wizualna — szósty osobny słownik

- `/strategia-ai` — łuki, przewijany strumień, siatka stu kwadratów
- `/rozwiazania-ai` — przekrój warstw, próg pewności, tory harmonogramu
- `/szkolenia-ai` — jednostki do policzenia: ludzie, minuty
- `/systemy-procesowe` — oś czasu sprawy: praca kontra czekanie
- `/systemy-dla-klientow` — lista pytań
- **tutaj — puls**

**Hero: cztery automatyzacje bijące we własnym rytmie.** Każda ma inny odstęp
między przebiegami (0,41 s do 0,86 s), więc rytmy widocznie się rozjeżdżają
i całość czyta się jak żywy monitoring. Trzecia linia — *nowy klient w CRM →
księgowość*, czyli ta, której braku nikt nie zauważa — milknie w połowie osi.
Dopiero po dwóch sekundach ciszy pojawiają się bursztynowe znaczniki
brakujących przebiegów, status przełącza się na „stanęła 03:12" i wchodzi
alarm.

**Ruch jest tu argumentem.** Cisza jednej linii na tle bijących pozostałych
jest dokładnie tym, czego w prawdziwej firmie nikt nie zauważa — i żadne
zdanie tego nie zastąpi.

Dwie rzeczy pilnowane przy tym rysunku:

- **nic nie zdradza pointy z góry.** Status trzeciej linii pokazuje na
  początku zwykłe „420 / mies.", a znaczniki brakujących przebiegów mają
  opacity 0 aż do chwili ciszy. Pierwsza wersja miała oba stany widoczne od
  startu i psuła cały efekt.
- **kreski dzielą jedną klatkę** i różnią się wyłącznie `animation-delay`.
  Przy równym czasie cyklu układ powtarza się co obieg, bez rozjazdu — 120
  wygenerowanych klatek byłoby nie do utrzymania.

**Ciemny pas: karta połączenia, w całości.** Artefakt, nie wykres — świadomie
z innego gatunku niż hero. Osiem wierszy, z czego trzy wyróżnione zielenią:
zachowanie przy błędzie, próg alarmu, imienny właściciel. To one są całą
różnicą między połączeniem, które ktoś sklikał, a takim, które da się
utrzymać.

**Trzeciego rysunku nie ma i to jest decyzja.** Automatyzacje nie mają
interfejsu do pokazania, a trzeci pas z widokami byłby powtórką z dwóch
poprzednich stron. Strona jest przez to najkrótsza z sześciu — co pasuje do
najtańszej usługi.

## Układ sekcji i rytm tła

| # | Sekcja | Tło | Nośnik |
|---|--------|-----|--------|
| 1 | Hero | biel + poświata | **puls czterech automatyzacji** |
| 2 | Czym to jest | biel | definicja + kolumna „co najczęściej łączymy" |
| 3 | Dlaczego umierają po cichu | `#f4f8f2` | teza w dużym stopniu pisma + 3 powody |
| 4 | Każde połączenie dostaje kartę | `#0e2b1d` | **karta połączenia** + 3 akapity |
| 5 | Dla jakich firm | biel | 4 warunki z numerami + wcięty blok „kiedy nie" |
| 5b | Pas wezwania | biel, na liniach | zdanie i przycisk |
| 6 | Przykłady | `#f4f8f2` | 3 wiersze: wolumen + **liczba alarmów** |
| 7 | Cytat / FAQ / kontakt | biel / `#f4f8f2` | `GcFaq`, `GcCta` |

**W sekcji dowodów druga liczba jest ważniejsza od pierwszej** i dlatego stoi
w tej samej kolumnie, nie w przypisie: *„4 alarmy w kwartale, każdy zamknięty
tego samego dnia"*. Połączenia się psują — pytanie brzmi, czy ktoś się o tym
dowiaduje. Sekcja, w której nic się nie psuje, podważałaby całą stronę.

## Czego świadomie nie ma

- **Kwoty.** Jak na pozostałych podstronach usługowych poza `/strategia-ai`.
- **Listy narzędzi z logotypami.** Odpowiedź poszła do FAQ jednym akapitem:
  platforma tam, gdzie liczy się szybkość zmiany, kod tam, gdzie dotyka reguł.
- **Pasa z widokami interfejsu.** Patrz wyżej — nie ma czego pokazywać,
  a powtórka komponentu po raz trzeci byłaby zmęczona.
- **Obietnicy stuprocentowej niezawodności.** Strona mówi odwrotnie: rzeczy
  się psują, a produktem jest to, że wiadomo kiedy.

## Do potwierdzenia przed publikacją

- **Zawartość karty połączenia** — kształt pewny, wartości przykładowe.
- **Próg alarmu (osiem minut ciszy) i trzy próby co pięć minut** — założenie
  o standardzie. Jeśli ma być obietnicą handlową, wymaga potwierdzenia,
  bo pada w hero, w karcie i w FAQ.
- **Zdanie o odsyłaniu do zrobienia samemu w Make'u** — decyzja Szymona.
- **Trzy przykłady w sekcji dowodów** są PRZYKŁADOWE, razem z liczbami alarmów.
- **`/og/automatyzacje-integracje.png`** — strona dziedziczy `/og/hub.png`.
  Naturalny kadr to monitoring z hero w stanie po awarii.

## Zmiany poza samą stroną

- `LaBase.astro` i `index.astro` — megamenu oraz trzeci wiersz warstwy
  „Budujemy aplikacje" w sekcji S4; `data-krok-link` zdjęty.
- `sitemap.xml.js` — wpis z priorytetem 0.9.

**Po tej zmianie żadna pozycja megamenu nie prowadzi już na `/#oferta`.**
Wszystkie trzy piony mają komplet podstron.

## Pułapka, na którą straciłem czas

Technika podglądania klatek przez wstrzyknięcie
`animation-delay:-Xs !important` **nie działa na tej stronie**, bo to właśnie
`animation-delay` fazuje tu każdą kreskę — wstrzyknięcie zrównuje je wszystkie
i niszczy rysunek.

Zamiast tego zegar przewija się przez Web Animations API:

```js
iframe.contentDocument.getAnimations().forEach(a => {
  a.currentTime = T * 1000;
  a.pause();
});
```

`currentTime` liczy się od startu animacji razem z jej opóźnieniem, a wszystkie
startują przy załadowaniu strony, więc ustawienie jednej wartości wszystkim
odtwarza dokładnie klatkę z chwili T. To jest ogólniejsza i pewniejsza metoda
od wstrzykiwania opóźnienia — warto jej używać domyślnie.

---

## Korekta tekstu 31.08.2026

Przegląd wszystkich podstron usługowych pod kątem zapychaczy i formuł
powtarzanych między stronami. Co dokładnie zmienione i dlaczego:
`docs/przeglad-tekstow-podstron.md`, sekcja D.
