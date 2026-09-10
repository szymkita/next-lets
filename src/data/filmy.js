// FILMY — pas wideo na /baza-wiedzy
//
// Filmy nie są kolekcją treści, bo nie mamy czego renderować: cała zawartość
// leży na YouTubie, a u nas zostaje tytuł, zdanie i identyfikator. Stąd zwykła
// tablica zamiast markdownu.
//
// ===================================================================
// !! DO PODMIANY PRZED PUBLIKACJĄ !!
// Pola `yt` są zaślepkami. Wstawcie tu jedenastoznakowe identyfikatory
// z adresu filmu (fragment po `watch?v=`), a strona sama zaciągnie miniaturę
// z YouTube'a i podepnie link. Do tego czasu każdy kafel rysuje się sam:
// ciemna klatka ze znakiem odtwarzania i tytułem, bez linku donikąd.
// Tytuły i opisy poniżej są robocze — do przejrzenia razem z listą nagrań.
// ===================================================================
//
// KANAŁ: adres w KANAL_YT trafia na przycisk pod pasem. Zmienić na właściwy.
export const KANAL_YT = 'https://www.youtube.com/@letsautomate';

// `yt`   — identyfikator z YouTube'a (11 znaków) albo null, dopóki go nie ma
// `t`    — tytuł nagrania
// `d`    — jedno zdanie o tym, co w nim jest
// `czas` — długość, pokazywana w rogu klatki
export const FILMY = [
  {
    yt: null,
    t: 'Jak liczymy koszt procesu przed wdrożeniem',
    d: 'Przejście przez arkusz z dwudziestoma sprawami, na żywo, z komentarzem przy każdej kolumnie.',
    czas: '18:42',
  },
  {
    yt: null,
    t: 'Aplikacja firmowa w tydzień — cała budowa',
    d: 'Rejestr zleceń od pustego repozytorium do wdrożenia u pierwszych użytkowników.',
    czas: '31:05',
  },
  {
    yt: null,
    t: 'Przegląd aplikacji zbudowanej przez zespół nietechniczny',
    d: 'Dziewięć punktów kontrolnych na prawdziwej aplikacji, z pokazaniem, co znaleźliśmy.',
    czas: '24:17',
  },
  {
    yt: null,
    t: 'Co zmienia agent głosowy w obsłudze zgłoszeń',
    d: 'Nagranie rozmowy z agentem i to, co po niej ląduje w systemie.',
    czas: '12:30',
  },
];

// Miniatura leci z serwera YouTube'a dopiero wtedy, gdy identyfikator wygląda
// na prawdziwy — inaczej kafel zostałby z połamanym obrazkiem.
export const jestId = (yt) => typeof yt === 'string' && /^[A-Za-z0-9_-]{11}$/.test(yt);
export const miniatura = (yt) => `https://i.ytimg.com/vi/${yt}/hqdefault.jpg`;
export const adresFilmu = (yt) => `https://www.youtube.com/watch?v=${yt}`;
