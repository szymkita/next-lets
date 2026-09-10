---
tytul: "Dlaczego pilot AI nie wchodzi na produkcję"
lead: "Pilot działa na demo, zbiera dobre opinie i na tym się kończy. Sześć powodów, przez które to się dzieje, i moment, w którym każdy z nich da się jeszcze odwrócić."
data: 2026-08-19
kategoria: poradniki
powiazane:
  - { t: "Indywidualne rozwiązania AI", h: "/rozwiazania-ai" }
  - { t: "Strategia transformacji AI", h: "/strategia-ai" }
---

Pilot kończy się prezentacją, wszyscy kiwają głowami, a potem przez cztery miesiące nic. Zwykle nie stoi za tym ani technologia, ani brak budżetu. Stoi jedna z sześciu rzeczy poniżej, ustawionych w kolejności, w jakiej najczęściej przesądzają o wyniku.

## 1. Pilot nie miał właściciela po stronie procesu

Sponsorem był zarząd, wykonawcą dostawca, a dział, którego proces dotyczył, dowiedział się o pilocie na prezentacji. Nikt z ludzi, którzy tę pracę wykonują codziennie, nie miał prawa rozstrzygnąć wątpliwości ani obowiązku dowieźć wyniku.

Właściciel to zwykle kierownik działu — osoba, która zna wyjątki w procesie i może zdecydować, że od przyszłego tygodnia robimy inaczej. Bez tej osoby pilot jest ciekawostką, którą można zignorować bez konsekwencji.

**Kiedy da się to odwrócić:** przed startem. Później zaczyna się przekonywanie ludzi do gotowego rozwiązania i to jest już zupełnie inna, dużo droższa rozmowa.

## 2. Próg jakości ustalono po pokazie, nie przed nim

Model wyciąga dane z faktury z dokładnością 91%. Dobrze to czy źle? Bez ustalonego wcześniej progu każdy odpowiada z brzucha, a dyskusja przenosi się na przykłady, w których model się pomylił.

Próg ustala się na sprawach klienta, przed budową, i zapisuje w umowie razem z tym, co się dzieje, gdy nie zostanie osiągnięty. Wtedy pokaz kończy się liczbą i decyzją, nie wrażeniem.

Drugi element tego samego zapisu jest ważniejszy: **co robi system z przypadkami, których nie umie**. Rozwiązanie, które przy 8% spraw zatrzymuje się i pyta człowieka, bywa lepsze od takiego, które przy 4% odpowiada źle i nikt tego nie zauważa.

## 3. Pilot działał na danych przygotowanych ręcznie

Do pilota ktoś wyciągnął dwieście dokumentów, poukładał je w folderze, poprawił dwa uszkodzone skany. Na produkcji te dokumenty przychodzą pocztą, mają cztery różne układy, część to zdjęcia telefonem, a jeden dostawca wysyła załącznik w formacie, którego nie otwiera nic poza jego systemem.

Różnica między jednym a drugim to zwykle większość pracy wdrożeniowej. Pilot, który jej nie dotknął, nie powiedział nic o tym, ile kosztuje wersja produkcyjna.

**Kiedy da się to odwrócić:** w każdej chwili, ale za każdym razem drożej. Najtaniej wychodzi wziąć do pilota surowy tydzień danych, ze wszystkimi śmieciami.

## 4. Wybrano proces, który był najciekawszy

Pilot idzie tam, gdzie technologia wygląda najefektowniej. Miejsce, w którym firma naprawdę krwawi, zostaje pominięte, bo wygląda nudno. Efekt bywa udany technicznie i bez znaczenia biznesowo — po wdrożeniu nikt nie czuje różnicy, więc nikt nie walczy o kolejny krok.

Wybór procesu robi się liczbami: czas sprawy, wolumen, koszt opóźnienia. Opisaliśmy to w tekście o [koszcie procesu przed wdrożeniem](/baza-wiedzy/koszt-status-quo).

## 5. Nikt nie zaplanował, kto to utrzyma

Pilot stoi na koncie dostawcy, na jego kluczach API i na skrypcie, który uruchamia jedna osoba. Pytanie „co się stanie, jak to przestanie działać w czwartek o 17" nie ma odpowiedzi, więc dział IT blokuje wejście na produkcję. Słusznie.

Odpowiedź musi istnieć przed budową i składa się z czterech rzeczy: gdzie to stoi, kto ma dostęp, co się dzieje przy awarii i kto płaci za utrzymanie w drugim roku.

## 6. Sukces pilota nie miał definicji operacyjnej

„Pilot się udał" znaczy dla zarządu, że technologia działa, dla działu — że przestali robić coś ręcznie, a dla IT — że nic się nie pali. Trzy różne definicje sukcesu przy jednym projekcie kończą się tym, że żadna nie zostaje spełniona.

Definicja operacyjna to zdanie, które da się sprawdzić bez dyskusji: „w listopadzie 80% faktur kosztowych trafia do systemu bez przepisywania ręcznego, a mediana czasu od wpłynięcia do zaksięgowania spada z trzech dni do jednego".

## Jak wygląda pilot, który wchodzi dalej

Cztery rzeczy odróżniają go od reszty i wszystkie ustala się na początku:

- ma właściciela w dziale, którego dotyczy
- działa na surowych danych z jednego prawdziwego tygodnia
- ma próg jakości i opisaną ścieżkę dla spraw poniżej progu
- ma zapisane, kto go utrzymuje po wdrożeniu i z jakiego budżetu

Wszystkie cztery są nudne i żadna nie dotyczy modelu. To jest właśnie ta część wdrożenia, która przesądza o wyniku.
