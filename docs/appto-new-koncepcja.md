# Appto — nowa strona produktu (propozycja)

Strona: `src/pages/produkty/appto-new.astro` (`/produkty/appto-new`),
`noindex`. Obecna `/produkty/appto` (w menu) i `appto-v2` zostają bez zmian,
dopóki Szymon nie powie „podmień”. Kanon w JSON-LD wskazuje `/produkty/appto`.

## Historia

- **15.10.2026, wersja 1:** strona funkcji (agenci, rutyny, kontekst,
  drabinka modeli i kredytów, cennik) z makietami odtworzonymi z dokumentu UI.
- **16.10.2026, wersja 2:** uwaga Szymona — „mniej o produkcie,
  a bardziej o tym, co daje i po co powstał. Do stricte produktowych rzeczy
  odeślij na appto.ai, a design weź faktyczny, a nie taki trochę naokoło”.

## Wersja 4 (16.10.2026, obecna)

Uwaga Szymona: „Uprość tę stronę, usuń informacje o tych wydaniach, usuń też
kwestię związaną z ofertą dla klienta i mailem do klienta, który się
rozmyślił. To jest brzydkie i bez sensu. Skup się na tym, że poza appką to
jest też nasza metoda wdrożenia, i na razie tyle.”

Zeszły: oś wydań, blok „To samo zlecenie”, blok z pięcioma mailami i tabela
porównania. Zostało:

| # | Sekcja | Tło | Nośnik |
|---|---|---|---|
| 1 | hero | ciemna plansza | „Platforma AI dla całej firmy razem z metodą wdrożenia” + film „Poznaj appto” |
| 2 | czym jest | papier | definicja (platforma i metoda) + „Powstało z naszych wdrożeń”, „Pracujemy na nim sami” |
| 3 | zielony pas | biel | „Na Appto pracujemy sami…”, Szymon |
| 4 | metoda | biel | teza („Samo konto w narzędziu AI niczego w firmie nie zmienia…”), dziesięć kroków na jednej linii, trzy sposoby przejścia (samodzielnie, z opiekunem — szerszy, w grupie firm) |
| 5 | dla kogo | papier | `DlaKogo` |
| 6 | kontakt | papier | `Kontakt` (Piotr Wojciuk) |
| 7 | FAQ | papier | sześć pytań, w tym „Na czym polega metoda wdrożenia?” |

Dziesięć kroków i trzy sposoby są z `src/data/home.ts` na appto.ai
(`method`, `rollout`, `rolloutTexts`); „use-case’ów” zamienione na
„zastosowań”. Jedyne wyjście na appto.ai: „Załóż konto” przy drodze
samodzielnej.

Do potwierdzenia: opiekun „z ponad 100 wdrożeń” (appto.ai) a „140+ firm”
(serwis) i kohorta 6 czy 8 tygodni — strona bez liczb; Szymon w pasie,
Piotr w kontakcie.

---

# Wersja 3 (zastąpiona)



Dwie kolejne uwagi Szymona: w hero film „Poznaj appto” z YouTube
(youtu.be/uSPPN1-unaI) zamiast makiety oraz „usuń sekcję, co zmieni dla
twojej roli; wiele rzeczy jest bez sensu, jak linkowanie do poszczególnych
stron na appto; dopracuj i pokaż, dlaczego appto jest tak dobre”.

- **Hero:** film jako podgląd z miniaturą; odtwarzacz youtube-nocookie
  ładuje się po kliknięciu, bez JS link prowadzi na YouTube. W danych
  strukturalnych `VideoObject` z datą publikacji z YouTube (25.08.2026).
- **Bez list odesłań:** zostaje jedno wyjście na appto.ai — „Załóż konto”.
  Kit interfejsu z wersji 2 zszedł ze strony (pliki w `public/appto/kit/`
  zostały).
- **Argument „dlaczego Appto”**, wszystko ze źródła appto.ai:
  - teza: modele są te same co w ChatGPT czy Copilocie, różnicę robi to, co
    Appto wie o firmie i co samo zrobi w jej narzędziach;
  - blok 1 „To samo zlecenie, pięć kroków mniej” — porównanie ze strony
    Inbox AI: oferta dla VeloPol, zwykły czat 7 kroków (szkic + 6 ręcznych),
    Appto 2 kroki;
  - blok 2 „Pięć osób, jeden standard” — maile z artykułu akademii;
  - ciemna scena „Osiem wydań w dwa miesiące” — changelog 14.08–13.10.2026
    na osi dni, nagłówki wydań przepisane prostszym językiem;
  - tabela „Appto obok ChatGPT, Copilota i własnego projektu” — wariant A
    z `/pl/dlaczego-appto`, wartości 1:1, kolumna Appto na ciemnej karcie.

## Układ (wersja 3)

| # | Sekcja | Tło | Nośnik |
|---|---|---|---|
| 1 | hero | ciemna plansza | film „Poznaj appto” |
| 2 | czym jest | papier | definicja + „Powstało z naszych wdrożeń” i „Pracujemy na nim sami” |
| 3 | zielony pas | biel | „Na Appto pracujemy sami…”, Szymon |
| 4 | dlaczego Appto | biel | teza + dwa bloki z rysunkami |
| 5 | osiem wydań | ciemna scena | oś dni + osiem wydań |
| 6 | porównanie | papier | tabela czterech dróg |
| 7 | sami albo z nami | biel | trzy drogi + „Załóż konto na appto.ai” |
| 8 | dla kogo | papier | `DlaKogo` |
| 9 | kontakt | papier | `Kontakt` (Piotr Wojciuk) |
| 10 | FAQ | papier | `GcFaq`, bez linków do podstron |

## Do potwierdzenia (wersja 3)

- tabela pochodzi ze strony wariantów na appto.ai (szkic), nie z wersji
  w nawigacji;
- „setki wdrożeń” a „140+ firm” — strona bez liczby;
- piąty mail i treść maili w rysunku;
- „wydajemy nowe wersje mniej więcej co tydzień” — wniosek z ośmiu wydań
  w dwa miesiące (z przerwą 27.08–18.09);
- Szymon w pasie, Piotr w kontakcie.

---

# Wersja 2 (zastąpiona)

## Zasady wersji 2

- **Treść:** po co Appto powstało i co zmienia dla ról w firmie. Funkcje,
  cennik, bezpieczeństwo, integracje i changelog — tylko odesłania do
  appto.ai (sekcja „Funkcje, cennik i bezpieczeństwo opisujemy na appto.ai”).
- **Design:** interfejs w hero to kit z filmu „Dokumenty”
  (`~/.claude/skills/appto-feature-film/kit/world.html`, zaakceptowany
  10.10.2026). CSS i markup wstawione dosłownie, razem z danymi przykładu
  (VeloPol, Norda Systems, Marta Zielińska); czcionki i znaki w
  `public/appto/kit/`. Kit ma 1920 × 1080 px i skaluje się do szerokości
  ramki (`--k` z JS, przybliżenia w CSS bez JS); na telefonie widać kolumnę
  rozmowy (0–776 px). Strona dokłada tylko pętlę: kroki pojawiają się po
  kolei, a pola szablonu wypełniają się w ich takt.

## Skąd fakty

Repo `ApptoAI/landing-page` (źródło appto.ai, stan z 13.10.2026):
- po co powstało: `/pl/czym-jest-appto` („po setkach wdrożeń, w których
  wracało to samo: pięć osób, pięć czatów, firmowe dane w cudzym AI, zero
  kontroli”) i artykuł akademii `w03-piec-osob` („pięć osób, pięć jakości,
  tyle że szybciej”, eksperyment z mailem do klienta, który się rozmyślił);
- co daje: cztery role ze strony głównej (Specjalista, Manager, Zarząd,
  Administrator);
- konto bez rozmowy z nami, 10–500 osób, trzy drogi startu, dane w UE.

## Teza

> Kiedy pięć osób pracuje z AI po swojemu, firma dostaje pięć różnych
> jakości, tyle że szybciej. Appto powstało, żeby wiedza i sposób pracy
> z AI były wspólne dla całego zespołu.

Rysunek: eksperyment z artykułu — pięć maili do klienta, który się
rozmyślił (przeprosiny, pytanie, rabat w pierwszym akapicie, trzy razy za
długo, ton innej firmy), pod spodem te same osoby z jednym standardem
(ta sama budowa, inny adresat).

## Układ i tła

| # | Sekcja | Tło | Nośnik |
|---|---|---|---|
| 1 | hero | ciemna plansza | prawdziwy interfejs Appto (kit), pola wypełniane w pętli |
| 2 | czym jest + co daje | papier | definicja z genezą + indeks czterech ról (Dziś / Z Appto) |
| 3 | zielony pas | biel | „Na Appto pracujemy sami…”, Szymon |
| 4 | po co powstało | biel | teza + pięć maili |
| 5 | szczegóły na appto.ai | papier | pięć wierszy z odesłaniem + „Załóż konto” |
| 6 | sami albo z nami | biel | trzy drogi startu, odesłanie do /wdrozenie-ai |
| 7 | dla kogo | papier | `DlaKogo` |
| 8 | kontakt | papier | `Kontakt` (Piotr Wojciuk) |
| 9 | FAQ | papier | `GcFaq`, odpowiedzi produktowe z linkiem do appto.ai |

## Do potwierdzenia

- „setki wdrożeń” (appto.ai) a „140+ firm” (serwis) — strona bez liczby;
- piąty mail („ton jak z innej firmy”) i treść maili — artykuł opisuje
  cztery różnice;
- kohorta: sześć czy osiem tygodni — strona bez liczby;
- Szymon w pasie, Piotr w kontakcie.
