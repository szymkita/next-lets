---
tytul: "Zespół zbudował aplikację w Lovable. Co dalej?"
lead: "Działa, ludzie z niej korzystają i nikt nie wie, czy można ją pokazać klientowi. Lista dziewięciu rzeczy do sprawdzenia i trzy możliwe decyzje na koniec."
data: 2026-08-05
kategoria: narzedzia
powiazane:
  - { t: "Guided Coding bez działu IT", h: "/guided-coding/bez-dzialu-it" }
  - { t: "Guided Coding dla zespołów", h: "/guided-coding/dla-zespolow" }
---

Ktoś w firmie zbudował w weekend narzędzie, które rozwiązało prawdziwy problem. Po miesiącu korzysta z niego dwanaście osób, po trzech leżą tam dane klientów, a pytanie „czy to jest bezpieczne" nie ma adresata.

To dobra sytuacja. Powstała rzecz, której nikt by nie zlecił, bo była za mała na projekt, i okazała się potrzebna. Zła jest tylko jedna rzecz: nikt nie sprawdził, czym ta aplikacja jest od środka.

Poniżej lista, którą przechodzimy na pierwszym spotkaniu. Zajmuje dwie godziny i kończy się jedną z trzech decyzji.

## Dziewięć rzeczy do sprawdzenia

**1. Klucze API.** Najczęstszy i najgroźniejszy błąd: klucz do modelu językowego albo do zewnętrznego systemu siedzi w kodzie strony i widzi go każdy, kto otworzy podgląd źródła. Rachunek za cudze użycie potrafi przyjść w ciągu jednej doby.

**2. Kto może zobaczyć czyje dane.** Generatory dobrze robią ekrany i słabo robią uprawnienia. Typowa aplikacja z pierwszego podejścia pokazuje wszystkie rekordy każdemu zalogowanemu, a rozdział ról istnieje wyłącznie w interfejsie — wystarczy zmienić adres, żeby go ominąć.

**3. Dane osobowe.** Czy w bazie są dane klientów albo pracowników? Gdzie fizycznie stoi ta baza? Czy dostawca ma umowę powierzenia? To trzy pytania, po których zwykle okazuje się, że aplikacja wymaga wpisu do rejestru czynności przetwarzania.

**4. Kopie zapasowe.** Nie „czy dostawca robi backupy", tylko: czy ktoś kiedykolwiek odtworzył dane z kopii. Kopia, której nie sprawdzono, jest deklaracją.

**5. Co się stanie przy zmianie.** Jeśli poprawka wymaga poproszenia modelu o przepisanie ekranu i nikt nie umie odczytać, co się zmieniło, każda zmiana jest ruletką. Tu przebiega granica między prototypem a oprogramowaniem.

**6. Historia zmian.** Czy kod jest w repozytorium, do którego ma dostęp firma, czy wyłącznie na koncie osoby, która to zbudowała? To zwykle najszybsza do naprawienia pozycja z całej listy i jedna z ważniejszych.

**7. Koszt w skali.** Aplikacja obsługująca dwanaście osób i taka sama przy stu dwudziestu to dwa różne rachunki — za hosting, za bazę i za każde zapytanie do modelu. Warto policzyć, zanim wolumen wzrośnie.

**8. Co się dzieje przy błędzie.** Czy ktokolwiek dowiaduje się o awarii inaczej niż od użytkownika? Aplikacja, która cicho przestaje zapisywać dane, jest gorsza od takiej, której nie ma.

**9. Kto to utrzyma za pół roku.** Jeśli odpowiedź brzmi „Marcin z controllingu, po godzinach", to jest to ryzyko operacyjne, nie techniczne — i trzeba je nazwać wprost przed zarządem.

## Trzy decyzje na koniec

Po przejściu listy sytuacja układa się zwykle w jeden z trzech scenariuszy.

**Zostawić jako narzędzie wewnętrzne.** Aplikacja pracuje na danych, które nie są wrażliwe, obsługuje kilka osób i nikt nie zbuduje na niej procesu krytycznego. Wystarczy naprawić klucze, wrzucić kod do firmowego repozytorium i wpisać ją do rejestru narzędzi. Koszt: jeden dzień.

**Dociągnąć do produkcji.** Rzecz jest potrzebna szerzej i wchodzi na dane klientów. Zostaje to samo podejście do budowy, dochodzą uprawnienia, kopie, monitoring i zasady, według których powstają kolejne zmiany. Kod nadal pisze zespół, który go zaczął — i to jest sens [Guided Codingu](/guided-coding).

**Zbudować od nowa z tą wiedzą.** Rzadziej, niż się wydaje, i prawie zawsze wtedy, gdy aplikacja ma zastąpić proces obsługujący klientów zewnętrznych. Prototyp nie idzie do kosza: staje się najlepszą specyfikacją, jaką można mieć, bo pokazuje działający przepływ zamiast opisywać go w dokumencie.

## Czego nie robić

Nie kasować tego, co powstało, w ramach porządków. W firmie, w której ktoś zbudował działające narzędzie z własnej inicjatywy, jest dokładnie ten rodzaj energii, którego nie da się kupić — a zablokowanie pierwszej takiej aplikacji zamyka temat na dwa lata.

Sensowniejsza reakcja to ustalić zasady, według których wolno budować dalej: gdzie stoi kod, jakie dane wolno wprowadzić bez zgody, co wymaga przeglądu przed pokazaniem komukolwiek z zewnątrz. Trzy strony tekstu wystarczą.
