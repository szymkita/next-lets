// Pozycje schowane na start produkcji (16.10.2026) — w menu (Nawigacja.astro)
// i w stopce (stopka-v2/StopkaG.astro). Szymon: „schowaj z menu produkty,
// inspiracje i know-how, zostaw tę samą bazę wiedzy, potem to przywrócimy”,
// a potem „stopkę też odchudź”. Strony działają dalej pod swoimi adresami
// i są w sitemapie, znika tylko link. Przywrócenie: true.
// 19.10.2026: produkty z powrotem (Szymon: „podepnij produkty do nawigacji”) —
// zwykły link do huba /produkty, bez rozwijanej listy (PRODUKTY_LISTA w Nawigacja.astro).
// 24.10.2026: Let’s Up — program dla mikro- i małych firm (brief z 24.10.2026),
// blok pod trzema pasami Usług w megamenu i w panelu mobilnym. Strona
// /lets-up czeka w src/robocze/, więc do publikacji blok widać tylko
// w `npm run dev`. Publikacja: true (i plik do src/pages/).
// 25.10.2026: Let’s Shift — program transformacji dla małych, średnich
// i dużych firm (docs/lets-shift-koncepcja.md), druga karta obok Let’s Up.
// Tak samo tylko w `npm run dev`, dopóki strona czeka w src/robocze/.
// 26.10.2026: obie strony opublikowane (/lets-up, /lets-shift), karty w menu widać wszędzie.
export const POKAZ = { produkty: true, knowhow: false, inspiracje: false, letsUp: true, letsShift: true };
