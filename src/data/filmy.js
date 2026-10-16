// FILMY — pas wideo na /blog (baza wiedzy)
//
// Filmy nie są kolekcją treści, bo nie mamy czego renderować: cała zawartość
// leży na YouTubie, a u nas zostaje tytuł, zdanie i identyfikator. Stąd zwykła
// tablica zamiast markdownu.
//
// ŹRÓDŁO: kanał Automatyzacja Biznesu (@automatyzacjabiznesu), wszystkie
// 23 filmy stan na 16.10.2026, od najnowszego. Tytuły są te z YouTube'a, bez
// wersalików i emoji; zdania pod nimi są napisane z opisów filmów.
// Nowy film dopisuje się na początek tablicy — strona pokazuje pierwsze
// osiem, resztę odsłania przyciskiem.
export const KANAL_YT = 'https://www.youtube.com/@automatyzacjabiznesu';

// `yt`   — identyfikator z adresu filmu (fragment po `watch?v=`)
// `t`    — tytuł nagrania
// `d`    — jedno zdanie o tym, co w nim jest
// `czas` — długość, pokazywana w rogu klatki
export const FILMY = [
  {
    yt: 'd8TZnj4UuQA',
    t: 'Jak zacząć wdrożenie AI w firmie? (bez miesięcy przygotowań)',
    d: 'Od jednego procesu i tylko tych informacji, których on potrzebuje — na przykładzie firmy, która od ośmiu miesięcy mapuje procesy i nie wdrożyła żadnego.',
    czas: '14:38',
  },
  {
    yt: 'UZq6YtyznIA',
    t: 'Jak buduje się aplikację AI dla firm? Rozmowa z CTO appto',
    d: 'Marcel, CTO appto i tech lead w Let’s automate, o decyzjach przy budowie aplikacji i o tym, co zaskoczyło zespół w zachowaniu użytkowników.',
    czas: '43:53',
  },
  {
    yt: 'io3o--qSWok',
    t: 'Jak zostać mistrzem egzekucji procesów w Twojej firmie dzięki AI?',
    d: 'Test czterech pytań o to, jak firma naprawdę pracuje, i pokaz w appto: nowa zasada upsellu, według której cały zespół pracuje od tej samej chwili.',
    czas: '17:33',
  },
  {
    yt: '6CVTF9KlhLQ',
    t: 'Dlaczego wdrożenia AI upadają po cichu?',
    d: 'Cztery miny wdrożenia i test jednego pytania, który sprawdza, czy AI cokolwiek w firmie zmieniło.',
    czas: '8:44',
  },
  {
    yt: 'vYveJ-WHhwE',
    t: 'System dla firmy serwisowej: od chaosu w papierach do automatycznych płac',
    d: 'Pokaz systemu z trasami układanymi przez AI, kartą urządzenia na kod QR, magazynem w samochodach techników i raportami płacowymi liczonymi z wykonanej pracy.',
    czas: '15:16',
  },
  {
    yt: 'RhrclKA5dpw',
    t: 'Jak usunąć maile z Twojego procesu i zwiększyć zyski? Panel klienta zamiast automatyzacji',
    d: 'Panel klienta na przykładzie kancelarii prawnej: klient widzi status sprawy na bieżąco, więc nie dzwoni z pytaniem, co z nią.',
    czas: '12:27',
  },
  {
    yt: 'cTYMxRsU3nA',
    t: '2 poziomy automatyzacji: dlaczego backoffice to za mało, by skalować biznes?',
    d: 'Piramida automatyzacji i dwa przykłady z wdrożeń, w tym firma produkcyjna, która skróciła przygotowanie wyceny z trzech dni do trzech minut.',
    czas: '8:29',
  },
  {
    yt: 'S0opzysVt4Y',
    t: 'Większość firm źle używa AI. Nie wpadnij w pułapkę „gadżeciarza”',
    d: 'Dlaczego ChatGPT w rękach pojedynczych pracowników nie daje przewagi, skoro ma go też konkurencja, i co się zmienia, gdy AI staje się częścią procesów firmy.',
    czas: '8:57',
  },
  {
    yt: 'wQSJRl3W0YI',
    t: 'Czy Twoja firma jest gotowa na automatyzację? Sprawdź te 5 obszarów!',
    d: 'Rozmowa z Alkiem Żaboklickim, który nadzorował kilkadziesiąt wdrożeń, o przygotowaniu firmy przed pierwszą linijką kodu, od roli zarządu po obawy pracowników.',
    czas: '29:33',
  },
  {
    yt: 'Iw6ETsDCwxQ',
    t: 'Czy Twoja firma jest gotowa na AI? Jak technologia tworzy dziś przepaść między liderami a resztą?',
    d: 'Daniel Angielczyk, deweloper Let’s automate, o tym, kiedy narzędzia no-code zaczynają hamować rosnącą firmę i dlaczego bez porządku w danych AI nie zadziała.',
    czas: '29:09',
  },
  {
    yt: 'NJkQpegpbSQ',
    t: 'Oto najważniejszy etap w automatyzacji procesów, którego nie można pominąć — rozmowa z analitykiem',
    d: 'Damian Trzciński, analityk biznesowo-systemowy Let’s automate, o analizie przed wdrożeniem, czyli etapie, którego sens klienci podważają najczęściej.',
    czas: '19:52',
  },
  {
    yt: 'RRTzr90dTrs',
    t: 'Wszystko, co stoi za udaną automatyzacją biznesu. Wnioski z dziesiątek wdrożonych projektów',
    d: 'Prawie trzy kwadranse z Alkiem Żaboklickim, który nadzorował ponad 45 projektów w Let’s automate, o celach firm i ograniczeniach typowych automatyzacji.',
    czas: '44:35',
  },
  {
    yt: 'Jg7dRNIOe_Q',
    t: 'Od czego zaczyna się automatyzacja biznesu? Rozmowa z konsultantem i architektem automatyzacji',
    d: 'Michał Langowski, architekt automatyzacji z ponad piętnastoletnim doświadczeniem jako deweloper, o tym, jakie firmy decydują się na automatyzację i jakie problemy da się nią rozwiązać.',
    czas: '32:59',
  },
  {
    yt: '4JY_2Rmy5Ok',
    t: '10 bolesnych pułapek, na które musisz uważać, automatyzując firmę',
    d: 'Dziesięć pułapek, przez które projekt automatyzacji się wydłuża albo drożeje.',
    czas: '12:00',
  },
  {
    yt: 'iUtwUGEMe_I',
    t: 'Co zrobić, aby zautomatyzować firmę niższym kosztem? Upraszczaj procesy',
    d: 'Każdy wyjątek w procesie trzeba osobno przemyśleć i obsłużyć, więc mniej wariantów przed automatyzacją to krótszy projekt i tańsze utrzymanie.',
    czas: '7:22',
  },
  {
    yt: 'CUWws0fOYfI',
    t: 'Jak skutecznie przygotować swój zespół na automatyzację firmy?',
    d: 'Jak mówić zespołowi wprost o zmianie i znaleźć w nim ludzi, którzy pomogą ją przeprowadzić.',
    czas: '13:59',
  },
  {
    yt: 'U1twROg-L38',
    t: 'Zautomatyzuj sprzedaż! 8 obszarów, które możesz skutecznie zautomatyzować w obszarze sprzedaży',
    d: 'Osiem miejsc w procesie sprzedaży, w których automatyzacja oddaje każdemu handlowcowi kilkadziesiąt godzin pracy w miesiącu.',
    czas: '19:47',
  },
  {
    yt: 'IyJa5zYhl7U',
    t: 'Wdrażasz AI w swojej firmie? Oto 9 ważnych zasad, o których musisz pamiętać',
    d: 'Dziewięć zasad wdrażania AI, spisanych z doświadczeń przy pracy z klientami Let’s automate.',
    czas: '24:52',
  },
  {
    yt: 'tT2acSCALeo',
    t: 'Połącz bank z Twoją firmą, aby automatycznie sprawdzać, kto już zapłacił!',
    d: 'Jak działa połączenie z kontem bankowym i pokaz automatyzacji, która sama oznacza przelewy jako opłacone, a przy okazji wystawia proformy i faktury.',
    czas: '19:55',
  },
  {
    yt: 'fZGq8URaDpI',
    t: 'Czym naprawdę jest automatyzacja biznesu?',
    d: 'Automatyzacja wytłumaczona na praktycznym przykładzie, dla właścicieli i menedżerów, którym podręcznikowe definicje niewiele mówią.',
    czas: '9:07',
  },
  {
    yt: 'KZXnpkFAZlc',
    t: 'Jak dowiedzieć się wszystkiego o kliencie dzięki automatyzacji?',
    d: 'Jakie dane o nowych potencjalnych klientach da się zebrać automatycznie i jak to wygląda w praktyce.',
    czas: '16:19',
  },
  {
    yt: 'CVpDq3JBr4A',
    t: 'Myślisz o automatyzacji firmy? Koniecznie zobacz, gdzie warto zacząć!',
    d: 'Obszary firmy, od których zwykle zaczyna się automatyzację, z plusami i minusami każdego z nich.',
    czas: '18:32',
  },
  {
    yt: 'FQML-2nFGIc',
    t: 'Dowolna umowa w 10 sekund. Automatyzacja umożliwiająca generowanie umów B2B w firmie',
    d: 'Krótki pokaz umowy B2B generowanej jednym kliknięciem, bez formularzy i ręcznego uzupełniania wzoru.',
    czas: '2:41',
  },
];

export const miniatura = (yt) => `https://i.ytimg.com/vi/${yt}/hqdefault.jpg`;
export const adresFilmu = (yt) => `https://www.youtube.com/watch?v=${yt}`;
