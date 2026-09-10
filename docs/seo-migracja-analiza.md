# SEO — stary letsautomate.pl a nowy serwis

09.09.2026. Podstawa: eksport z Search Console za 12 miesięcy (07.09.2025 –
06.09.2026, właściwość domenowa, surowe pliki w `docs/_dane/gsc/`), pobrana
sitemapa starego serwisu, crawl 101 stron spoza bloga i zbudowany `dist/`
nowego serwisu.

Skala, o której mowa: **7 020 kliknięć i 397 700 wyświetleń w rok**, średnio
19 wejść dziennie. 98% ruchu z Polski, 80% wyświetleń z komputera.

---

## Trzy liczby, od których zależy reszta

**Po pierwsze: 3 417 z 7 020 kliknięć to zapytania markowe.** „lets automate"
samo w sobie daje 1 945 kliknięć. Reszta odmian marki dokłada resztę. Serwis
ma 397 tysięcy wyświetleń rocznie i zamienia je na 980 kliknięć niemarkowych
w top 1000 zapytań. Widoczność jest, wejść z niej nie ma.

**Po drugie: blog to 74% wyświetleń całego serwisu** — 465 659 wyświetleń
i 1 643 kliknięcia na 94 adresach. Cała reszta serwisu razem ma 164 tysiące
wyświetleń. To znaczy, że migracja bloga, która jest już zrobiona jeden do
jednego, zabezpieczyła największy pojedynczy kawałek widoczności.

**Po trzecie: Google zaindeksował wersję z `www`, nie tę bez.**

| host | kliknięcia | wyświetlenia |
|---|---:|---:|
| `https://www.letsautomate.pl` | 5 841 | 611 930 |
| `https://letsautomate.pl` | 1 067 | 6 475 |
| `http://www.letsautomate.pl` | 168 | 11 268 |

(Sumy są wyższe niż całość, bo ten sam adres liczy się osobno dla każdego hosta.)

Wersja z `www` ma 97% wyświetleń. Adres bez `www` zbiera 1 067 kliknięć przy
6 475 wyświetleniach, czyli CTR 16% — to sygnatura zapytań markowych, ktoś
wpisuje nazwę firmy i klika. Cały ruch tematyczny siedzi na `www`.

To odwraca zalecenie, które wydawało się oczywiste przed danymi. **Nowy serwis
powinien stanąć na `www.letsautomate.pl`**, a adres bez `www` przekierowywać na
niego, nie odwrotnie. Nie dlatego, że `www` jest ładniejsze — dlatego, że przy
przebudowie całego serwisu nie warto zmieniać dwóch zmiennych naraz. Jeśli
docelowo ma być adres bez `www`, to jest osobna operacja do zrobienia kwartał
po tym, jak migracja się ustabilizuje. Na marginesie: `TopbarWiseGroup.astro:24`
już dziś linkuje do wersji z `www`.

---

## Co stoi na starym serwisie i ile to daje

| grupa | adresów | kliknięć | wyświetleń |
|---|---:|---:|---:|
| strona główna (wszystkie hosty) | 1 | 4 353 | 31 460 |
| artykuły `/post/*` | 94 | 1 643 | 465 659 |
| 6 podstron działowych | 6 | 390 | 70 165 |
| usługi, firmowe, kampanie | 40 | 621 | 44 144 |
| `/blog` i kategorie | 10 | 46 | 10 768 |
| adresy z parametrem `?…_page=N` | 94 | 11 | 5 821 |
| **atrapy Webflow** | **52** | **18** | **11 659** |

Pięćdziesiąt dwa adresy to zawartość demonstracyjna, której nikt nie podmienił:
`/automatyzacje/avengers`, `/automatyzacje/frozen`, `/case-studies/case-study-14`
z nagłówkiem „The Benefits of Employee Training Programs". Wszystkie mają ten
sam angielski lorem i H1 „Heading". Siedzą w sitemapie, więc Google je zna —
i przez rok dały **18 kliknięć**. Można je przekierować hurtem bez namysłu.

Osobna sprawa: 94 adresy z parametrem `?3664cb2d_page=N`. To pozostałość po
paginacji Webflow, każdy duplikuje istniejący artykuł. Przekierowanie
`/post/:slug` złapie je razem z parametrem, a `LaBase` liczy canonical
ze ścieżki bez zapytania, więc duplikat sam się zamknie.

## Stan techniczny starego serwisu

**Ani jednej etykiety canonical** na 101 sprawdzonych stron. Stąd rozjazd
`www` i adresu bez `www` — Google wybrał sam.

**Zero wyników rozszerzonych.** Raport „Wygląd w wyszukiwarce" jest pusty:
żadnego FAQ, żadnych okruszków, żadnych linków dodatkowych. Serwis nie ma
danych strukturalnych.

**Dwanaście realnych stron bez opisu meta**, w tym pięć z sześciu głównych
podstron usługowych: `/automatyzacja-procesow-i-zadan`,
`/integracja-i-rozbudowa-narzedzi`, `/doradztwo-w-sztucznej-inteligencji-i-automatyzacji`,
`/szkolenia-z-sztucznej-inteligencji-i-automatyzacji-procesow`,
`/sztuczna-inteligencja-w-biznesie`. Artykuły opisy mają.

**Znacznik title zaczyna się od nazwy firmy.** Wszystkie artykuły noszą
„Let's automate - <tytuł>", więc w wyniku wyszukiwania temat jest przesunięty
w prawo, a przy dłuższych tytułach ucięty. Przy CTR 1,77% w skali serwisu
to nie jest drobiazg.

**Powielone title:** 51 stron nosi „Let's automate - mądrzejsza praca dzięki AI
i automatyzacji" (atrapy), do tego dwie pary realnych stron mają identyczne
title przy różnej treści.

**Trzy adresy pod jedną stroną konsultacji:** `/darmowa-konsultacja`,
`/kontakt` i `/warsztat-strategiczny-raport-ai` — ten sam H1, ten sam opis,
praktycznie ta sama treść.

**Ruch spada.** Kwartał do kwartału, licząc od września 2025:

| okres | kliknięcia | wyświetlenia | śr. pozycja |
|---|---:|---:|---:|
| IX–XII 2025 | 2 088 | 99 716 | 11,0 |
| XII 2025 – III 2026 | 1 782 | 105 074 | 11,5 |
| III–VI 2026 | 1 763 | 103 397 | 10,7 |
| VI–IX 2026 | 1 383 | 88 736 | 13,6 |

−34% kliknięć rok do roku przy stabilnych wyświetleniach do ostatniego
kwartału. Serwis osuwa się sam z siebie, więc przebudowa nie startuje z
poziomu, który trzeba za wszelką cenę utrzymać.

---

## Na czym ten serwis naprawdę stoi

Zapytania niemarkowe w top 1000, pogrupowane:

| klaster | kliknięć | wyświetleń | fraz |
|---|---:|---:|---:|
| automatyzacja procesów (wszystkie odmiany) | 273 | 61 742 | 138 |
| automatyzacja + AI | 192 | 15 833 | 76 |
| **mapowanie procesów** | **117** | **42 692** | **58** |
| automatyzacja w konkretnym dziale | 29 | 24 301 | 80 |
| narzędzia (make, n8n, zapier, no-code) | 3 | 1 107 | 21 |
| aplikacja / system na zamówienie | 0 | 1 384 | 17 |
| agenci AI, chatboty | 0 | 0 | 0 |

Czternaście najmocniejszych fraz:

| zapytanie | klik | wyśw | poz |
|---|---:|---:|---:|
| automatyzacja procesów biznesowych | 116 | 11 389 | 3,3 |
| automatyzacja procesów | 95 | 9 375 | 9,6 |
| automatyzacje dla firm | 95 | 1 740 | 14,2 |
| automatyzacje ai | 82 | 2 547 | 6,5 |
| automatyzacja ai | 60 | 5 167 | 7,4 |
| automatyzacje | 54 | 2 281 | 8,1 |
| **mapa procesu** | **40** | **4 874** | **1,8** |
| automatyzacja | 32 | 13 036 | 10,0 |
| automatyzacja firmy | 21 | 2 583 | 8,2 |
| automatyzacja procesów w firmie | 18 | 5 132 | 13,8 |
| **mapa procesów** | **16** | **3 040** | **2,9** |
| automatyzacja biznesu | 13 | 2 935 | 8,8 |
| **mapowanie procesów** | **11** | **7 543** | **7,3** |
| **mapa procesu przykład** | **9** | **428** | **1,0** |

Dwie rzeczy z tej tabeli.

**Klaster „mapowanie procesów" to niespodzianka.** Pozycje 1,0–2,9 na
`mapa procesu`, `mapa procesów`, `mapa procesu przykład`, `mapa procesow`.
Ponad 42 tysiące wyświetleń rocznie. Cała ta widoczność siedzi w jednym
artykule — `/post/mapowanie-procesow-automatyzacja`, 62 773 wyświetlenia.
Nikt tego nie planował i nikt tego nie obsługuje: intencja jest edukacyjna
(„pokażcie mi przykład mapy procesu"), a artykuł nie prowadzi donikąd.

**Reszta to dokładnie te słowa, których nowy serwis nie używa.**

## Zmiana, która kosztuje najwięcej, jest językowa

Wystąpienia na stronach ofertowych obu serwisów, bez bloga:

| fraza | stary | nowy |
|---|---:|---:|
| automatyzacja procesów / procesu | 119 | **0** |
| sztuczna inteligencja (odmiany) | 65 | 1 |
| „automatyzacj" (rdzeń, wszystkie odmiany) | 1253 | 68 |
| integracja (rdzeń) | 187 | 86 |
| CRM | 92 | 31 |

Stary serwis zbiera 273 kliknięcia rocznie na frazie „automatyzacja procesów"
i jej odmianach. Nowy serwis nie ma tej frazy na żadnej stronie ofertowej.

Fraza nie znika z serwisu — w `/baza-wiedzy` pada 184 razy, bo przeszła razem
z artykułami. Ale to znaczy tylko tyle, że blog nadal złapie ruch informacyjny
i **nie będzie miał go gdzie przekazać**. Żadna podstrona ofertowa nie
odpowiada dziś na intencję „szukam firmy od automatyzacji procesów".

Nowy język („transformacja AI", „systemy", „guided coding") jest lepszy jako
pozycjonowanie marki i nie ma powodu go zmieniać. Rzecz w tym, że tych słów
nikt jeszcze nie wpisuje w wyszukiwarkę — a te, które wpisuje, zniknęły
z oferty.

---

## Ile ten kanał w ogóle może dać

Pozycje nie są złe. 421 zapytań niemarkowych stoi w pierwszej dziesiątce,
razem 155 tysięcy wyświetleń rocznie. Kliknięć z tego: 809.

CTR jest około dziesięciokrotnie poniżej normy **na każdej pozycji**, nie
tylko na dalekich:

| pozycja | fraz | wyświetleń | kliknięć | CTR | CTR typowy | brakujące kliknięcia |
|---|---:|---:|---:|---:|---:|---:|
| 1–2 | 75 | 15 990 | 111 | 0,69% | ~18% | 2 819 |
| 3–4 | 86 | 26 605 | 175 | 0,66% | ~8,9% | 2 203 |
| 5–7 | 141 | 43 534 | 234 | 0,54% | ~4,3% | 1 646 |
| 8–10 | 119 | 69 260 | 289 | 0,42% | ~2,7% | 1 600 |
| 11–20 | 187 | 73 599 | 148 | 0,20% | ~1,0% | 567 |
| **razem** | **995** | **271 458** | **980** | **0,36%** | **~3,6%** | **8 874** |

### Dlaczego CTR jest tak niski

Bo część „pozycji 1" to nie są niebieskie linki.

| zapytanie | pozycja | wyświetleń | kliknięć |
|---|---:|---:|---:|
| make | 1,3 | 258 | 0 |
| no code | 1,0 | 131 | 0 |
| mapping | 1,1 | 218 | 0 |
| mapa procesów w organizacji | 1,0 | 1 025 | 1 |
| mapa procesów w firmie produkcyjnej | 1,6 | 519 | 0 |

Serwis nie rankuje pierwszy na „make" ani na „no code" — to marki cudzych
produktów. Rankują **obrazy**. Artykuł
`/baza-wiedzy/ranking-narzedzi-do-automatyzacji…` ma w treści logotypy Zapiera,
Make.com, Airtable i SmartSuite; `/baza-wiedzy/mapowanie-procesow-automatyzacja`
ma diagram mapy procesu. Te grafiki wchodzą do bloku obrazów na górze wyników,
liczą się jako wyświetlenie na pozycji 1 i nie prowadzą do wejścia na stronę.

**To koryguje jedną z rekomendacji z tego dokumentu.** Klaster „mapowanie
procesów" wyglądał na najtańszą wygraną: 42 tysiące wyświetleń, pozycje 1–3.
W rzeczywistości daje 117 kliknięć rocznie i w dużej części są to wyświetlenia
obrazów. Nadal warto dać temu artykułowi wyjście, ale to jest robota za dwie
godziny, nie filar planu.

Do sprawdzenia w GSC jednym kliknięciem: **Typ wyszukiwania → Obrazy**.
Jeśli hipoteza jest trafna, klaster „mapa procesu" tam się w większości powtórzy.

### Ile jest popytu komercyjnego

Zapytania rozbite według intencji:

| intencja | fraz | wyświetleń | kliknięć | CTR |
|---|---:|---:|---:|---:|
| ogólna, niejasna („automatyzacja", „mapowanie") | 683 | 230 535 | 783 | 0,34% |
| informacyjna („co to", „jak", „przykład") | 125 | 20 140 | 33 | 0,16% |
| narzędziowa („czym to zrobić") | 103 | 10 831 | 10 | 0,09% |
| **komercyjna („szukam wykonawcy")** | **84** | **9 952** | **154** | **1,55%** |

Cały popyt komercyjny w tej niszy to **9 952 wyświetlenia rocznie**, czyli
27 dziennie. „agencja automatyzacja procesów" — 100 wyświetleń rocznie.
„firma automatyzacja procesów" — 142. „usługi automatyzacji procesów
biznesowych" — 443.

Te 397 tysięcy wyświetleń to prawie w całości popyt definicyjny: ktoś sprawdza,
co to jest automatyzacja, i wraca do pracy.

### Klaster AI wygląda podobnie

100 fraz, 20 226 wyświetleń, 205 kliknięć, CTR 1,01%. Czterdzieści pięć fraz
stoi w pierwszej dziesiątce. Najlepsza pozycja to `automatyzacje ai` — 6,5,
82 kliknięcia, CTR 3,2%, czyli najzdrowszy wynik w całym serwisie.

Problemem nie jest pozycja, tylko rozmiar. 20 tysięcy wyświetleń rocznie na
całym klastrze AI to 55 dziennie.

### Sufit

Gdyby wszystko komercyjne i cały klaster AI stanęły na pozycjach 1–3
i klikały się normalnie:

| | wyświetleń/rok | kliknięć przy CTR 15% |
|---|---:|---:|
| komercyjne | 9 952 | 1 493 |
| AI, poza komercyjnymi | 17 431 | 2 615 |
| **razem** | **27 383** | **4 108** |
| dziś z obu | | **323** |
| dla porównania: sama marka dziś | | **3 417** |

Idealny rok SEO w tej niszy podwaja ruch serwisu i dokłada około czterech
tysięcy wejść. To jest sufit, nie prognoza — zakłada pierwsze miejsca na
wszystkim naraz i CTR bez bloków obrazów i bez odpowiedzi generowanych
w wynikach.

### Co z tego wynika dla planu

SEO jest tu **kanałem higienicznym, nie wzrostowym**. Warto zrobić migrację
czysto, bo utrata tego, co jest, kosztuje realnie, a dane strukturalne
i naprawione znaczniki title to darmowa poprawa. Nie warto budować wokół tego
programu treści — popyt, do którego można dojść, jest za mały.

Sześć podstron działowych zostaje najlepszym zagraniem SEO, bo to jedyne
miejsce, gdzie intencja niemarkowa spotyka się z komercyjną. Ale ich wartość
to rząd 400–800 kliknięć rocznie po naprawie, nie tysiące.

---

## Czego brakuje na nowym serwisie

Kolejność jest teraz z danych, nie z oceny tekstów.

### 1. Sześć podstron działowych — ZROBIONE 10.09.2026

| adres | klik | wyśw | poz | słów |
|---|---:|---:|---:|---:|
| `/automatyzacja-oraz-ai-w-nietypowych-procesach` | 300 | 25 687 | 16,7 | 1 588 |
| `/automatyzacja-w-rekrutacji-oraz-hr` | 30 | 10 389 | 14,8 | 1 855 |
| `/automatyzacja-w-sprzedazy-i-marketingu` | 22 | 13 116 | 14,5 | 2 293 |
| `/automatyzacja-w-obsludze-klienta` | 17 | 15 113 | 11,8 | 2 180 |
| `/automatyzacja-w-administracji` | 15 | 2 818 | 13,9 | 1 890 |
| `/automatyzacja-w-dashboardach-i-danych` | 6 | 3 042 | 11,5 | 1 836 |

`/automatyzacja-oraz-ai-w-nietypowych-procesach` to **druga najczęściej
klikana strona serwisu po stronie głównej** — więcej niż `/o-nas` i więcej niż
którykolwiek artykuł. Nowy serwis nie ma dla niej odpowiednika.

Pięć pozostałych ma razem 90 kliknięć przy 44 tysiącach wyświetleń, czyli
siedzą na pozycjach 11–15 i zbierają wyświetlenia bez wejść. To jest dokładnie
ten rodzaj strony, który po przepisaniu pod nowy standard przesuwa się o kilka
pozycji i zaczyna dowozić.

Sześć podstron odbudowanych pod tymi samymi adresami, z jednego szablonu
i sześciu zestawów danych — `docs/obszary-koncepcja.md`. Nowa oferta dzieli się
według rodzaju rezultatu, stara dzieliła się według działu klienta — obie osie
są sensowne, a druga jest tą, którą ludzie wpisują. Każda ze stron kończy się
sekcją prowadzącą do właściwej podstrony usługowej, więc obie osie się spinają.
Linkowane ze stopki (kolumna `OBSZARY`), świadomie poza menu głównym.

### 2. Klaster „mapowanie procesów" bez obsługi

42 692 wyświetlenia rocznie na pozycjach 1–3, ale tylko 117 kliknięć — bo
znaczna część tych wyświetleń to blok obrazów, nie wynik tekstowy (patrz
sekcja o sufitcie). Artykuł jest już przeniesiony
(`/baza-wiedzy/mapowanie-procesow-automatyzacja`), więc pozycja zostaje.

Warto dać mu wyjście — szablon mapy procesu do pobrania albo prosty formularz —
bo to dwie godziny pracy przy treści, która już rankuje. Nie warto traktować
tego jako filaru planu; realny zarobek to rząd stu kilkudziesięciu wejść rocznie.

### 3. Polityka prywatności i regulamin

**Stopka linkuje w `#`** (`Stopka.astro:107-108`). Serwis zbiera dane
formularzem, więc te strony muszą istnieć przed uruchomieniem, pod starymi
adresami `/polityka-prywatnosci` i `/regulamin`. `/regulamin` ma zresztą własne
7 kliknięć.

Osobno do rozstrzygnięcia: `/pd-dane-o-firmie-privacy-notes`
i `/pd-dane-o-firmie-terms-of-service` — strony wymagane przez marketplace
Pipedrive. Jeśli aplikacja tam nadal wisi, zostają pod tymi adresami.

### 4. Strona kontaktowa

`/o-nas` zbiera **326 kliknięć na pozycji 4,6** — trzecia strona serwisu.
Przekierowanie na `/dlaczego-my` jest właściwe, ale nowy serwis nie ma
w ogóle adresu z danymi firmy: adres, NIP, telefon, mail są tylko w danych
strukturalnych, nigdzie na stronie. Stary `/kontakt` był w indeksie.

### 5. Case study jako format

`/automatyzacja-ofertowania-case-study` (kancelaria Zaprawieni, 1 633 słowa)
daje 15 kliknięć — mało, ale to jedyne prawdziwe wdrożenie opisane na starym
serwisie i jedyny materiał, którego brakuje w formacie „jedna firma, jeden
proces, przed i po". Nowe `/inspiracje` pokazuje dwanaście ekranów z liczbą
przy każdym, co jest czymś innym.

### 6. Kategorie bazy wiedzy bez adresów

Stary blog miał siedem adresów kategorii, razem 46 kliknięć —
`/blog-categories/narzedzia` rankuje na pozycji 2,6. Nowa `/baza-wiedzy`
filtruje przyciskami w JS, bez zmiany adresu. Nie da się podlinkować
„Narzędzi", nie ma czego zaindeksować, nie ma dokąd przekierować siedmiu
adresów poza stroną główną bazy. Sam filtr jest w porządku, brakuje adresu
obok niego.

### 7. Strony branżowe i newsletter

`/branze/dealerzy-samochodowi` daje 15 kliknięć z jednej strony w zaczętej
i nieskończonej sekcji. `/newsletter` był osobnym punktem wejścia; na nowym
serwisie jedyną konwersją jest umówienie rozmowy, więc przy 55 artykułach nie
ma nic dla kogoś, kto jeszcze nie chce rozmawiać. Obie pozycje to decyzja
biznesowa, nie ratowanie ruchu.

### Czego odbudowywać nie trzeba

Atrapy Webflow (52 adresy, 18 kliknięć), `/sklep` i `/koszyk` (23 kliknięcia),
`/automatyczna-notatka-ai` (18), `/kurs`, webinary i strony podziękowań.
Razem poniżej 100 kliknięć rocznie na trzydziestu kilku adresach.

---

## Przekierowania

Warunek wstępny: nowy serwis staje **pod tą samą domeną, na hoście z `www`**
(patrz sekcja o hostach na górze). Adres bez `www` i `http://` przekierowują
na niego — to ustawienie po stronie Vercela, nie `vercel.json`.

### Usługi — mapowanie mocne

| stary adres | klik/rok | nowy |
|---|---:|---|
| `/o-nas` | 326 | `/dlaczego-my` |
| `/doradztwo-w-sztucznej-inteligencji-i-automatyzacji` | 79 | `/strategia-ai` |
| `/szkolenia-z-sztucznej-inteligencji-i-automatyzacji-procesow` | 74 | `/szkolenia-ai` |
| `/aplikacje-wewnetrzne-i-systemy-automatyzujace` | 13 | `/systemy-procesowe` |
| `/automatyzacja-procesow-i-zadan` | 7 | `/automatyzacje-integracje` |
| `/quick-wins-automation-program` | 5 | `/strategia-ai` |
| `/integracja-i-rozbudowa-narzedzi` | 2 | `/automatyzacje-integracje` |
| `/sztuczna-inteligencja-w-biznesie` | 1 | `/rozwiazania-ai` |

### Podstrony działowe — ZROBIONE, bez przekierowań

**Nieaktualne od 10.09.2026.** Wszystkie sześć stoi pod własnymi adresami
(`docs/obszary-koncepcja.md`), więc przekierowań nie ma i mieć nie może —
przesłoniłyby nowe strony. Tabelka niżej zostaje jako zapis tego, co było
planem awaryjnym, gdyby odbudowa nie doszła do skutku.

| stary adres | klik/rok | nowy (tymczasowo) |
|---|---:|---|
| `/automatyzacja-oraz-ai-w-nietypowych-procesach` | 300 | `/rozwiazania-ai` |
| `/automatyzacja-w-rekrutacji-oraz-hr` | 30 | `/automatyzacje-integracje` |
| `/automatyzacja-w-sprzedazy-i-marketingu` | 22 | `/automatyzacje-integracje` |
| `/automatyzacja-w-obsludze-klienta` | 17 | `/systemy-dla-klientow` |
| `/automatyzacja-w-administracji` | 15 | `/automatyzacje-integracje` |
| `/branze/dealerzy-samochodowi` | 15 | `/strategia-ai` |
| `/automatyzacja-w-dashboardach-i-danych` | 6 | `/systemy-procesowe` |

### Kampanie, sklep, podziękowania

| stary adres | nowy |
|---|---|
| `/kontakt`, `/konsultacja-webinar` | `/darmowa-konsultacja` |
| `/warsztat-strategiczny-raport-ai` | `/strategia-ai` |
| `/kurs` | `/szkolenia-ai` |
| `/sklep`, `/koszyk`, `/automatyczna-notatka-ai` | `/rozwiazania-ai` |
| `/automatyczne-powiadomienia-sprzedazowe` | `/automatyzacje-integracje` |
| `/webinar`, `/automatyzacja-dokumentacji-webinar`, `/zautomatyzowany-dzial-sprzedazy`, `/newsletter`, `/search` | `/baza-wiedzy` |
| `/thank-you`, `/webinar-dziekuje`, `/webinar-pobierz-dziekuje`, `/dziekuje-darmowa-paczka` | `/dziekujemy` |
| `/automatyzacja-ofertowania-case-study`, `/case-study-katalog` | `/inspiracje` |
| `/untitled`, `/old-home` | `/` |

### Atrapy

`/case-studies/*` (30 adresów, 2 kliknięcia) i `/automatyzacje/*` (21 adresów,
0 kliknięć) — jednym wzorcem na `/inspiracje`. Nie ma tam nic do przeniesienia;
chodzi tylko o to, żeby nie zostawić pięćdziesięciu jeden błędów 404.

### Gotowe do wklejenia

> **Sześciu adresów `/automatyzacja-w-*` w tym bloku nie ma i nie może być.**
> Od 10.09.2026 stoją pod nimi prawdziwe strony; przekierowanie przesłoniłoby je
> i skasowało jedyne miejsce, gdzie intencja niemarkowa spotyka komercyjną.

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "redirects": [
    { "source": "/post/:slug", "destination": "/baza-wiedzy/:slug", "permanent": true },
    { "source": "/blog", "destination": "/baza-wiedzy", "permanent": true },
    { "source": "/blog-categories/:slug", "destination": "/baza-wiedzy", "permanent": true },

    { "source": "/automatyzacja-procesow-i-zadan", "destination": "/automatyzacje-integracje", "permanent": true },
    { "source": "/integracja-i-rozbudowa-narzedzi", "destination": "/automatyzacje-integracje", "permanent": true },
    { "source": "/aplikacje-wewnetrzne-i-systemy-automatyzujace", "destination": "/systemy-procesowe", "permanent": true },
    { "source": "/doradztwo-w-sztucznej-inteligencji-i-automatyzacji", "destination": "/strategia-ai", "permanent": true },
    { "source": "/sztuczna-inteligencja-w-biznesie", "destination": "/rozwiazania-ai", "permanent": true },
    { "source": "/szkolenia-z-sztucznej-inteligencji-i-automatyzacji-procesow", "destination": "/szkolenia-ai", "permanent": true },
    { "source": "/quick-wins-automation-program", "destination": "/strategia-ai", "permanent": true },
    { "source": "/o-nas", "destination": "/dlaczego-my", "permanent": true },

    { "source": "/branze/:slug", "destination": "/strategia-ai", "permanent": true },

    { "source": "/kontakt", "destination": "/darmowa-konsultacja", "permanent": true },
    { "source": "/konsultacja-webinar", "destination": "/darmowa-konsultacja", "permanent": true },
    { "source": "/warsztat-strategiczny-raport-ai", "destination": "/strategia-ai", "permanent": true },
    { "source": "/kurs", "destination": "/szkolenia-ai", "permanent": true },
    { "source": "/sklep", "destination": "/rozwiazania-ai", "permanent": true },
    { "source": "/koszyk", "destination": "/rozwiazania-ai", "permanent": true },
    { "source": "/automatyczna-notatka-ai", "destination": "/rozwiazania-ai", "permanent": true },
    { "source": "/automatyczne-powiadomienia-sprzedazowe", "destination": "/automatyzacje-integracje", "permanent": true },
    { "source": "/webinar", "destination": "/baza-wiedzy", "permanent": true },
    { "source": "/automatyzacja-dokumentacji-webinar", "destination": "/baza-wiedzy", "permanent": true },
    { "source": "/zautomatyzowany-dzial-sprzedazy", "destination": "/baza-wiedzy", "permanent": true },
    { "source": "/newsletter", "destination": "/baza-wiedzy", "permanent": true },
    { "source": "/search", "destination": "/baza-wiedzy", "permanent": true },

    { "source": "/thank-you", "destination": "/dziekujemy", "permanent": true },
    { "source": "/webinar-dziekuje", "destination": "/dziekujemy", "permanent": true },
    { "source": "/webinar-pobierz-dziekuje", "destination": "/dziekujemy", "permanent": true },
    { "source": "/dziekuje-darmowa-paczka", "destination": "/dziekujemy", "permanent": true },

    { "source": "/automatyzacja-ofertowania-case-study", "destination": "/inspiracje", "permanent": true },
    { "source": "/case-study-katalog", "destination": "/inspiracje", "permanent": true },
    { "source": "/case-studies/:slug", "destination": "/inspiracje", "permanent": true },
    { "source": "/automatyzacje/:slug", "destination": "/inspiracje", "permanent": true },

    { "source": "/untitled", "destination": "/", "permanent": true },
    { "source": "/old-home", "destination": "/", "permanent": true }
  ]
}
```

Adresy, które **muszą zostać bez przekierowania**, bo mają odpowiadać tą samą
treścią: `/darmowa-konsultacja` (jest), `/polityka-prywatnosci` i `/regulamin`
(do odtworzenia), ewentualnie dwie strony Pipedrive.

---

## Do zrobienia przed przełączeniem domeny

Kolejność ma znaczenie — pierwsze cztery punkty psują serwis, jeśli przejdą
niezauważone.

**1. Ustalić host i sprawdzić, co zwraca `Astro.site`.** `astro.config.mjs`
bierze domenę z `VERCEL_PROJECT_PRODUCTION_URL`. Dopóki do projektu
`next-lets` nie jest podpięta domena, wszystkie etykiety canonical, adresy
w sitemapie i obrazy OG wskazują na `next-lets.vercel.app`. Wypuszczenie
w tym stanie ustawia kanoniczny adres całego serwisu na cudzą domenę.
Domena do podpięcia to ta z `www` — tam siedzi 97% widoczności.

**2. Strona główna nie ma opisu meta ani canonical.** `index.astro`
i `darmowa-konsultacja.astro` nie korzystają z `LaBase` i mają własny `<head>`
z samym `<title>` i favikoną. Brakuje: `meta description`, `canonical`,
wszystkich znaczników OG i Twittera, danych strukturalnych `Organization`.
Strona główna to 4 353 kliknięcia rocznie, 62% całego ruchu. Albo przenieść
obie na `LaBase`, albo skopiować blok z `LaBase.astro:52-77`.

**3. 75 obrazów wisi na CDN starego Webflow.** `cdn.prod.website-files.com`
w `index.astro`, `dlaczego-my.astro` i trzech podstronach guided codingu,
w tym logotypy klientów. Po wygaszeniu subskrypcji Webflow znikną ze strony
głównej. Do tego 17 zdjęć z `images.pexels.com`. Wszystko do ściągnięcia
lokalnie przed przełączeniem.

**4. Warianty robocze poza deploy.** `robots.txt` blokuje cztery
(`/strategia-ai-v2`, `-v3`, `/dlaczego-my-v3`, `/index-v3`), część ma `noindex`
w `LaBase`, a `/guided-coding/bez-dzialu-it-v2` nie ma ani jednego, ani
drugiego — pełny duplikat `/guided-coding/bez-dzialu-it` z identycznym title,
dostępny dla wyszukiwarki.

Do tego `Disallow` i `noindex` na tej samej stronie wykluczają się nawzajem:
zablokowany robot nie zobaczy `noindex` i adres może zostać w indeksie bez
opisu. Najprościej — warianty nie wchodzą na produkcję. Jeśli mają wchodzić,
zostaje sam `noindex`, bez wpisu w `robots.txt`.

**5. Dane strukturalne to jedyna wygrana dostępna od pierwszego dnia.**
Raport „Wygląd w wyszukiwarce" na starym serwisie jest pusty — zero wyników
rozszerzonych przy 397 tysiącach wyświetleń. Nowe podstrony usługowe mają
`Service`, `FAQPage` i `BreadcrumbList` i to jest zrobione dobrze. Nie mają ich
`/`, `/dlaczego-my`, `/guided-coding`, `/guided-coding/transfer-know-how`
i `/darmowa-konsultacja`. Na stronie głównej brakuje też `WebSite` oraz
`sameAs` z profilem na LinkedIn w `Organization`.

**6. Znaczniki title są już naprawione i to widać w liczbach.** Stary serwis
zaczynał każdy title od nazwy firmy („Let's automate - Co to jest
automatyzacja…"), przez co temat był przesunięty w prawo. Nowy stawia temat
z przodu. Przy CTR 1,77% w skali serwisu i 465 tysiącach wyświetleń na samym
blogu każdy punkt procentowy CTR to około 4 600 wejść rocznie.

**7. Sitemapa i `robots.txt` wskazują na siebie poprawnie** i pomijają szkice
oraz `/dziekujemy` — bez zastrzeżeń. Po uruchomieniu zgłosić nową sitemapę
w Search Console i zostawić starą do wygaśnięcia; Google potrzebuje jej,
żeby przejść po przekierowaniach.

**8. Drobne.** 515 znaczników `img` bez `loading="lazy"`. Strona główna waży
152 KB w HTML (24 KB po kompresji), styl jest wpisany w każdą stronę osobno —
przy szesnastu stronach do przyjęcia, ale nic się nie cache'uje między
podstronami.

**9. Subdomeny.** `kariera.letsautomate.pl` i `help.letsautomate.pl` żyją
własnym życiem (6 kliknięć razem). Nie kolidują z migracją, ale warto wiedzieć,
że są.

---

## Kolejność prac

| kiedy | co | dlaczego w tym miejscu |
|---|---|---|
| przed przełączeniem | punkty 1–4, przekierowania w `vercel.json`, polityka prywatności i regulamin | bez tego traci się ruch, którego nie trzeba tracić |
| przed przełączeniem | `WebSite` i `sameAs` na stronie głównej, dane strukturalne na pięciu stronach bez nich | 397 tys. wyświetleń bez ani jednego wyniku rozszerzonego |
| ~~pierwszy miesiąc po~~ **zrobione 10.09** | sześć podstron działowych pod starymi adresami | 390 kliknięć i 70 tys. wyświetleń — odbudowane, przekierowań nie dodawać |
| pierwszy miesiąc po | wyjście z klastra „mapowanie procesów" — szablon albo narzędzie | 42 tys. wyświetleń na pozycjach 1–3, zero konwersji |
| pierwszy miesiąc po | adresy dla kategorii bazy wiedzy | siedem adresów bez celu przekierowania |
| pierwszy kwartał po | strona kontaktowa z danymi firmy, pierwsze prawdziwe case study | `/o-nas` daje 326 kliknięć, nowy serwis nie ma gdzie ich przyjąć |
| pierwszy kwartał po | decyzja o osi branżowej i o newsletterze | oba to rozwój, nie ratowanie ruchu |
| przez trzy miesiące po | monitoring 404 i pozycji w GSC | tu wychodzi, co przekierowanie zgubiło |
| za kwartał, osobno | ewentualne przejście z `www` na adres bez `www` | jedna zmienna naraz |

## Czego te dane nie mówią

Eksport z interfejsu jest ucięty do 1000 zapytań — pokrywają 4 397 z 7 020
kliknięć. Pozostałe 2 623 to długi ogon i zapytania ukryte przez Google
ze względu na prywatność. Nie widać też, **które zapytania trafiają na którą
stronę** — przypisanie klastra „mapowanie procesów" do jednego artykułu wynika
z tego, że ma 62 773 wyświetlenia i nic innego w serwisie o tym nie mówi,
a nie z bezpośredniego pomiaru.

Brakuje raportu linków przychodzących. Przy przekierowaniach to jedyna rzecz,
która mogłaby zmienić priorytety: strona z 15 kliknięciami, ale z linkiem
z branżowego portalu, jest warta więcej niż strona z 300 kliknięciami bez
żadnego. Eksport jest w Search Console pod **Linki → Eksportuj**.
