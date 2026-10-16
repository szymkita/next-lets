# Wingman AI — koncepcja strony produktu i nowego wyglądu aplikacji

Strona: `src/pages/produkty/wingman.astro` (`/produkty/wingman`).
Pierwsza wersja 15.10.2026, tego samego dnia dwie rundy poprawek Szymona.
Opublikowana 16.10.2026 (bez `noindex`, w sitemapie); menu i stopka prowadzą
tu zamiast na `/produkty#wingman`, opis w menu jak w stopce („Podpowiedzi
i notatki w trakcie rozmowy”). Sekcja Wingmana na `/produkty` dalej obiecuje
ofertowanie i ocenę jakości — do poprawienia.

---

## Skąd fakty

- **gowingman.app**: macOS 26.2+, BYOK (OpenRouter i Soniox),
  przechowujemy tylko e-mail, klucz licencji i ID płyty głównej, licencje
  po 149 zł netto na rok przez hello@letsautomate.pl;
- **film „Wprowadzenie do Wingman AI”** (youtu.be/2QVSDz-aANY): pasek nad
  spotkaniem (Odpowiedź ⇧⌘↵, Follow up, Fact check, „Zadaj pytanie”,
  nagrywanie, ikony mikrofonu, ekranu, zapisu, planu, notatki, ustawień),
  karta pod paskiem, zapis mikrofonu i dźwięku połączenia, podsumowania co
  5 minut i na żądanie, HubSpot i Pipedrive (deale, karta deala, notatka),
  asystenci pod typy rozmów, kontekst przed rozmową, modele per zadanie
  (Gemini 3 Flash, generacja Gemini 3.1 Pro, dłuższe myślenie),
  przezroczystość i ukrywanie paska przy udostępnianiu, zapisy lokalnie;
- **Szymon, 15.10.2026**: jest już wersja na Windows.

Strona celowo **nie wspomina** o bezpłatnej licencji dla uczestników
szkolenia AI Sales (decyzja Szymona). **Ofertowania i oceny jakości
rozmów** nie ma w filmie ani na gowingman.app, więc strona ich nie obiecuje;
opis w megamenu jest z nimi sprzeczny.

---

## Teza

> Asystent, który nie zna klienta, odpowiada ogólnikami. Wingman zna
> klienta z CRM-a i plan rozmowy, zanim padnie pierwsze pytanie.

Wzięta z filmu: odpowiedzi są tak dobre, jak kontekst ustawiony przed
rozmową (w filmie Fact-check bez kontekstu pomylił Wingmana z innym
produktem). Niesie ją jeden rysunek: to samo pytanie i ten sam model, raz
bez kontekstu, raz z asystentem i dealem z Pipedrive'a. Wraca w „Dla kogo”
(„Macie czas przygotować kontekst”) i w pierwszej zakładce sceny.

### Co wypadło i dlaczego (15.10.2026, druga runda)

- **Rysunek z dziewięcioma ustaleniami i dwiema notatkami.** Pokazywał
  notatkę Wingmana jako kartę z polami, a w filmie są podsumowania co
  5 minut; łańcuch „zła notatka → oferta z montażem za 212 tys.” był
  dopisany, nie wynikał z produktu.
- **Schemat „Którędy idzie rozmowa”.** Cały rysunek dla jednej informacji;
  prywatność została w porównaniu (wiersz „Dane”) i w FAQ.
- **Teza o notatce** i zdanie „Wingman robi to obok niego, zanim klient się
  rozłączy” (Szymon: „jak to w ogóle brzmi”).
- **Karta AI Sales w cenniku i zdanie w FAQ.**
- **Cena w zielonym pasie przy twarzy Szymona.** Pas mówi teraz o pomocy przy
  konfiguracji (w filmie: „gdyby były jakieś problemy, śmiało piszcie”).

## Dostawcy na stronie

Uwaga Szymona: nie artykułować dostawców co chwilę. OpenRouter pada tam,
gdzie mówimy, czego aplikacja wymaga (sekcja „Licencja i wymagania”, FAQ).
Soniox tylko raz, w FAQ „Czego potrzeba, żeby zacząć?” (aplikacja wymaga
obu kluczy). Gdzie indziej: „dostawcy modeli”, „Wasze klucze API”.

---

## Nowy wygląd aplikacji (propozycja)

Układ jak w aplikacji: **pasek nad spotkaniem, karta pod nim, okno ustawień
z bocznym menu**. Zmienia się warstwa wizualna:

| Element | Dziś (film) | Propozycja |
|---|---|---|
| Znak | biały na czarnym | ten sam rysunek skrzydła w zieleni Let's automate na grafitowym kwadracie |
| Pasek | ciemnoszary, wszystkie przyciski jednakowe | grafitowe szkło; „Odpowiedź” jedynym zielonym przyciskiem, Follow-up i Fact-check w drugim planie |
| Nagrywanie | czerwona kropka i czas | czerwona kapsuła z czasem w mono |
| Aktywny widok | brak oznaczenia | zielona kreska pod ikoną |
| Karta | tytuł, treść w markdownie | tryb i model w nagłówku, pytanie klienta cytatem, odpowiedź dużym stopniem, wynik Fact-checku w ramce; wysokość zmienia się płynnie |
| Ustawienia | ciemne okno, kolorowe ikony jak w iOS | jasne okno, jednokolorowe ikony, wiersze w panelach, zieleń tylko dla stanu „włączone” |

Karta nie pokazuje źródeł odpowiedzi ani podpowiedzi „Dopytaj”, a plan
rozmowy nie ma godzin ani wykrywania „jeszcze nie padło”: w filmie tego
nie ma, makieta nie może obiecywać funkcji.

Hero i widok „Po rozmowie” stoją na pulpicie Maca: pasek menu, tapeta ze
wzgórzami w zieleniach, Dock z uruchomionym komunikatorem i Wingmanem.
Ikony w Docku są ogólne, bez znaków cudzych marek.

---

## Układ i tła

| # | Sekcja | Tło | Nośnik |
|---|---|---|---|
| 1 | hero | ciemna plansza | pulpit: okno spotkania, pasek i karta w pętli (zapis → Odpowiedź → plan → Fact-check) |
| 2 | czym jest | papier | definicja + indeks czterech funkcji (Dziś / Z Wingmanem) |
| 3 | zielony pas | biel | „Wingman pomaga prowadzić klienta przez całą rozmowę, a po spotkaniu zostawia gotową notatkę”, Szymon |
| 4 | skąd Wingman wie, co odpowiedzieć | biel | teza + to samo pytanie bez kontekstu i z kontekstem |
| 5 | przed rozmową i po niej | ciemna scena | trzy zakładki: kontekst, podsumowanie → Pipedrive, modele |
| 6 | porównanie | papier | `Metoda`: notatnik AI w chmurze kontra Wingman |
| 7 | licencja i wymagania | biel | karta 149 zł + „Czego potrzeba” (system, klucze API, CRM) |
| 8 | dla kogo | papier | `DlaKogo` |
| 9 | kontakt | papier | `Kontakt` (Piotr Wojciuk) |
| 10 | FAQ | papier | `GcFaq` |

Jedna rozmowa przez stronę: Anna Kowal i Michał Rudnik z Nordisu, pon
14.09.2026, 32:14. Pytanie o serwis (18:10) i odpowiedź 1 850 zł za linię są
te same w hero i w sekcji 4.

## Do potwierdzenia

Pełna lista w nagłówku pliku strony. Najważniejsze: „działa z każdym
komunikatorem, bez bota” (wniosek z zapisu dźwięku systemowego), kto
odhacza plan rozmowy, notatka do HubSpota, zdanie w FAQ o informowaniu
rozmówcy o nagrywaniu, wymagania wersji Windowsa, twarze w pasie
i w kontakcie, opis Wingmana w megamenu.

## Uwagi do komponentów wspólnych

- `Kontakt.astro` ma na sztywno „Rozmowa trwa 30 minut, online albo
  telefonicznie.” pod przyciskiem; przy zamówieniu licencji nie pasuje.
- `Metoda.astro` ma na sztywno sygnet i nazwę Let's automate w nagłówku
  ciemnej kolumny.
- Ikony spoza `ikony.ts` siedzą w stałej `IK` w pliku strony.
