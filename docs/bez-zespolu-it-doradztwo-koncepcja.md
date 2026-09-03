# /guided-coding/bez-zespolu-it — przesunięcie w stronę doradztwa

Wprowadzone 02.09.2026. Zapis decyzji i zmian.

Kierunek: doradzamy, mówimy co robić i dlaczego, w ramach usługi robimy
**code review według naszych wypracowanych zasad**, ale nie bierzemy
odpowiedzialności za efekt. Zastrzeżenia z korekty briefu:

- **bez pojęcia „bramki”** — rzecz nazywa się code review;
- **bez osłabiania wydźwięku sprzedażowego**;
- **bez bloku „Czego nie robimy”**;
- **bez nowego FAQ**;
- **poprawki mogą zostać po naszej stronie**, zależnie od zakresu.

---

## Wniosek z tych zastrzeżeń

Granica odpowiedzialności ma powstać **przez to, czego nie obiecujemy**, a nie
przez zdanie, które ją ogłasza. To jest mocniejsze sprzedażowo niż disclaimer
i zdejmuje potrzebę osobnego bloku.

W praktyce zmienia się jedno: **przestajemy ręczyć za stan aplikacji, zaczynamy
nazywać to, co realnie robimy** — czytamy każdą zmianę zasadami wypracowanymi
na dwustu wdrożeniach i mówimy, co poprawić najpierw. Poprawki zostają
w zakresie, więc kalendarz miesiąca, tabela wyboru i cena są nietknięte.

Do wymiany zostaje **jedno zdanie obowiązkowo** i sześć miejsc, w których
warto nazwać rzecz po imieniu.

---

## Zdanie, które musi wypaść

`#czym-jest`, akapit trzeci:

> ~~My **bierzemy odpowiedzialność za jej stan**~~ i mówimy o nim wprost, także
> wtedy, kiedy jest niewygodny.

To jedyne miejsce na stronie sprzeczne wprost z kierunkiem. Propozycja całego
akapitu:

> Aplikacja zostaje Wasza razem z kodem, dostępami i decyzjami o tym, co idzie
> do ludzi. My mówimy, w jakim jest stanie i co poprawić najpierw — także
> wtedy, kiedy odpowiedź jest niewygodna. Zajęć ani zadań domowych tu nie ma;
> pracujemy na tym, co i tak powstaje w tym tygodniu.

„Decyzjami o tym, co idzie do ludzi” robi całą robotę graniczną, a czyta się
jak korzyść — bo strona i tak sprzedaje to, że wszystko zostaje u klienta.

---

## Nagłówek — zostaje bez zmian

Decyzja Szymona, 02.09: *„Budujecie dalej sami. My pilnujemy, żeby to było
bezpieczne i nie przestało działać”* zostaje.

Rozróżnienie, na którym to stoi: **„pilnujemy” jest czynnością, „bierzemy
odpowiedzialność za stan” jest zobowiązaniem.** Zdjęcie drugiego wystarczy,
żeby strona przestała ręczyć za efekt, a hero nie traci ani grama siły
sprzedażowej.

Ponieważ nagłówek zostaje, zdanie w dużym stopniu pisma w `#czym-jest` może
w całości zamienić „nasze ręce” na code review, bez ryzyka powtórzenia:

> Każda zmiana przechodzi przez code review, zanim zobaczą ją ludzie. To
> jedyny moment, w którym da się zatrzymać rzecz, która kosztowałaby Was
> tydzień — i dlatego odpowiadamy tego samego dnia.

---

## Sześć miejsc, w których nazywamy rzecz po imieniu

Wszystkie **wzmacniają** ofertę, bo zamieniają ogólne „review kodu” na produkt
z nazwą i z rodowodem.

**1 · Lead hero**

> było: Stała opieka nad tym, co budujecie w Claude Code bez działu IT: analiza
> i review kodu, poprawki po naszej stronie, pomoc przy trudniejszych rzeczach.
>
> jest: Stała opieka nad tym, co budujecie w Claude Code bez działu IT. Code
> review według zasad wypracowanych na dwustu wdrożeniach, poprawki po naszej
> stronie i pomoc przy trudniejszych rzeczach.

**2 · `#czym-jest`, karta 02**

> tytuł: ~~Każda zmiana przechodzi przez nasze ręce~~ → **Każda zmiana
> przechodzi przez code review**
>
> treść: Zanim zobaczą ją ludzie, sprawdzamy ją zasadami wypracowanymi na
> dwustu wdrożeniach. Nie musicie wybierać, co jest ważne — od tego jesteśmy my.

Karta 03 („Zmiana trafia do ludzi tego samego dnia”) zostaje bez zmian —
mówi o naszym tempie, czyli o czymś, co kontrolujemy.

**3 · `#sklad`, pozycja o narzędziu**

> było: **Autorskie narzędzie do analizy kodu** — Nasze, zbudowane na know-how
> z ponad dwustu wdrożeń. Czyta każdą nową wersję, zanim zrobi to człowiek.
>
> jest: **AI code review według naszych zasad** — Nasze narzędzie, zbudowane na
> know-how z ponad dwustu wdrożeń. Podpinamy je do miejsca, w którym trzymacie
> kod, a reguły, których pilnuje, zapisujemy w Waszym repozytorium. Czyta każdą
> nową wersję, zanim zrobi to człowiek.

Zdanie o regułach zostających w repozytorium stoi dziś dopiero w FAQ —
tu jest mu bliżej do rzeczy, której dotyczy, i sprzedaje mocniej.

**4 · `#wybor`, ostatni wiersz tabeli**

> ~~Review każdej zmiany~~ → **Code review każdej zmiany**, poprawki po naszej
> stronie i ludzie, którzy z miesiąca na miesiąc umieją więcej.

**5 · `#kontakt`, pierwszy punkt**

> ~~Każda nowa wersja przeczytana~~ → **Code review każdej wersji** — zielone
> światło albo poprawka tego samego dnia.

**6 · `<meta description>`**

Zawiera dziś „Zanim zobaczą to ludzie, czytamy każdą nową wersję”. Do
uzgodnienia z nowym nagłówkiem.

---

## Czego nie ruszam

- **Poprawki po naszej stronie** — zostają wszędzie: w leadzie hero, w karcie
  03, w `#miesiac`, w `#wybor`, w punkcie kontaktowym i w FAQ. Pięć dni
  w kalendarzu miesiąca bez zmian.
- **Kalendarz miesiąca, sześć obaw, `#wisestack`, `#start`, `#dla-kogo`,
  cena** — bez zmian.
- **FAQ** — żadnego nowego pytania. Istniejące zostają; „Poprawiacie sami czy
  tylko mówicie, co zrobić?” dalej jest prawdziwe, bo poprawki zostają
  w zakresie.
- **Żadnego bloku granicznego.** Granicę niesie akapit z `#czym-jest`
  i nieobecność obietnicy w nagłówku.

## Uwaga obok

W `docs/dla-zespolow-doradztwo-koncepcja.md` leży propozycja przesunięcia
`/guided-coding/dla-zespolow` w tę samą stronę, napisana przed korektą briefu.
Jeśli ta strona wejdzie w życie w powyższym kształcie, tamtą trzeba przepisać
pod te same zastrzeżenia — w szczególności wyrzucić z niej blok
„Za co odpowiadamy”, który jest dokładnie tym, czego tutaj nie robimy.

---

## Co zostało wprowadzone

Dziesięć podmian w `src/pages/guided-coding/bez-zespolu-it.astro`:

1. Lead hero — „analiza i review kodu” → „Code review według zasad
   wypracowanych na dwustu wdrożeniach”.
2. `#czym-jest`, akapit 3 — zdjęte „bierzemy odpowiedzialność za jej stan”,
   dopisane „i decyzjami o tym, co idzie do ludzi”.
3. `#czym-jest`, linia w dużym stopniu pisma — „nasze ręce” → „code review”.
4. Karta 02 — tytuł i treść na code review z rodowodem.
5. `#sklad` — „Autorskie narzędzie do analizy kodu” → „AI code review według
   naszych zasad”, z podpięciem do repozytorium klienta i regułami, które w nim
   zostają.
6. `#wybor`, ostatni wiersz — „Review każdej zmiany” → „Code review każdej
   zmiany”.
7. `#kontakt`, pierwszy punkt — „Każda nowa wersja przeczytana” → „Code review
   każdej wersji”.
8–10. Spójność nazwy: `aria-label` przepływu, `aria-label` znaku narzędzia
   i odwołanie w FAQ o wypowiedzeniu.

Nietknięte zgodnie z briefem: nagłówek, poprawki po naszej stronie (wszystkie
sześć miejsc, w tym pięć dni w kalendarzu miesiąca), FAQ, cena, `#miesiac`,
`#problemy`, `#wisestack`, `#start`, `#dla-kogo`. Bez bloku granicznego.

`meta description` zostawiona — „czytamy każdą nową wersję, a to, co wymaga
poprawki, najczęściej poprawiamy od ręki” jest dalej prawdziwe.
