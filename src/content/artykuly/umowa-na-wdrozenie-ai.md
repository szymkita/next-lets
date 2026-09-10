---
tytul: "Co powinno stać w umowie na wdrożenie AI"
lead: "Siedem zapisów, które przesuwają ryzyko z klienta na dostawcę. Każdy z nich da się sprawdzić po dostawie, więc każdy jest niewygodny dla drugiej strony — łącznie z nami."
data: 2026-07-29
kategoria: firma
powiazane:
  - { t: "Strategia transformacji AI", h: "/strategia-ai" }
  - { t: "Indywidualne rozwiązania AI", h: "/rozwiazania-ai" }
---

Umowa na wdrożenie AI wygląda zwykle jak umowa na dowolny projekt IT: zakres, harmonogram, płatności, kary za opóźnienie. Brakuje w niej odpowiedzi na jedyne pytanie, które przy AI jest naprawdę trudne — co się dzieje, kiedy system działa, ale nie tak dobrze, jak miał.

Poniżej siedem zapisów, które tę lukę zamykają. Nie są przyjazne dostawcy i to jest ich zadaniem.

## 1. Próg jakości mierzony na Waszych sprawach, przed budową

Zapis brzmi mniej więcej tak: „na zbiorze 200 spraw wskazanych przez Zamawiającego, wybranych przed rozpoczęciem prac, system osiąga skuteczność X% według definicji z załącznika".

Trzy elementy są tu istotne. Sprawy są Wasze, nie z materiałów dostawcy. Zbiór jest ustalony przed budową, więc nie da się go dobrać pod wynik. Definicja skuteczności jest w załączniku, bo „skuteczność 90%" bez definicji nie znaczy nic — trzeba wiedzieć, co jest błędem, co jest brakiem odpowiedzi i jak liczy się przypadek częściowo poprawny.

## 2. Co się dzieje poniżej progu

Sam próg jest połową zapisu. Druga połowa: co ma zrobić system ze sprawą, przy której nie jest pewny. Rozwiązanie zatrzymujące się i pytające człowieka przy 8% spraw jest zwykle lepsze od takiego, które przy 4% odpowiada źle, bo błędy drugiego rodzaju wychodzą dopiero u klienta.

W umowie powinno stać, jaki jest oczekiwany rozkład: ile spraw przechodzi automatycznie, ile trafia do człowieka, ile system odrzuca. I gdzie te sprawy lądują.

## 3. Warunek odstąpienia powiązany z progiem

Bez tego próg jest deklaracją. Zapis mówi, co się dzieje, gdy przy odbiorze wynik jest poniżej: ile trwa poprawa, ile podejść przysługuje dostawcy i co się dzieje potem — zwrot części wynagrodzenia, rozwiązanie umowy albo przejście do węższego zakresu.

To najbardziej niewygodny punkt każdej negocjacji i najlepszy test intencji dostawcy. Firma, która ma za sobą dwadzieścia podobnych wdrożeń, wie, gdzie postawić próg, żeby móc go dotrzymać.

## 4. Repozytorium, klucze i dostępy od pierwszego dnia

Nie po odbiorze — od pierwszego dnia. Kod powstaje w repozytorium należącym do Zamawiającego, konta u dostawców chmury i modeli są zakładane na Zamawiającego, a dostawca dostaje do nich dostęp.

Sprawdzian jest prosty: gdyby dostawca zniknął jutro, czy da się dokończyć pracę z kimś innym bez odtwarzania czegokolwiek od zera. Kiedy odpowiedź brzmi „nie", umowa opisuje zależność, nie projekt.

## 5. Dane: gdzie stoją i czy uczy się na nich model

Trzy pytania, każde z odpowiedzią w umowie:

- w jakim regionie fizycznie leżą dane i przez jakie systemy przechodzą po drodze
- czy dostawca modelu ma prawo uczyć się na Waszych danych (przy ofercie biznesowej większości dostawców odpowiedź brzmi „nie", ale musi to być zapisane)
- kto jest podwykonawcą przetwarzania i czy lista może się zmienić bez Waszej zgody

Do tego umowa powierzenia jako załącznik, nie jako obietnica dosłania.

## 6. Utrzymanie jako osobna umowa

Budowa i utrzymanie to dwa różne zobowiązania i wiązanie ich w jedno działa na korzyść dostawcy. Osobna umowa na utrzymanie, wypowiadalna z rozsądnym terminem, oznacza, że po roku możecie wziąć kogoś innego bez ruszania tego, co już powstało.

W tej samej umowie warto zapisać czas reakcji przy awarii i to, kto płaci za rachunki od dostawców zewnętrznych — koszt zapytań do modelu potrafi urosnąć razem z wolumenem i lepiej, żeby był przewidywalny.

## 7. Oświadczenie o braku prowizji od dostawców

Jedno zdanie: dostawca oświadcza, że nie pobiera wynagrodzenia od producentów narzędzi rekomendowanych w projekcie. Przy wyborze między platformami to zdanie jest warte więcej niż cała sekcja o metodyce, bo bez niego rekomendacja technologiczna ma drugie dno.

## Czego w umowie mieć nie musicie

Dwie rzeczy, o które klienci proszą najczęściej i które zwykle nie pomagają.

**Kary za opóźnienie jako główny mechanizm.** Przy projektach na kilka miesięcy kara zwykle jest niższa od kosztu sporu i kończy się negocjacją, nie wypłatą. Próg jakości z warunkiem odstąpienia działa mocniej, bo dotyczy tego, po co projekt powstał.

**Szczegółowy opis architektury w załączniku.** Zamraża decyzje techniczne w momencie, w którym wiadomo o projekcie najmniej. Lepiej opisać wymagania i gwarancje niż konkretne komponenty.
