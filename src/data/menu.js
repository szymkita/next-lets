// Pozycje schowane na start produkcji (16.10.2026) — w menu (Nawigacja.astro)
// i w stopce (stopka-v2/StopkaG.astro). Szymon: „schowaj z menu produkty,
// inspiracje i know-how, zostaw tę samą bazę wiedzy, potem to przywrócimy”,
// a potem „stopkę też odchudź”. Strony działają dalej pod swoimi adresami
// i są w sitemapie, znika tylko link. Przywrócenie: true.
// 19.10.2026: produkty z powrotem (Szymon: „podepnij produkty do nawigacji”) —
// zwykły link do huba /produkty, bez rozwijanej listy (PRODUKTY_LISTA w Nawigacja.astro).
export const POKAZ = { produkty: true, knowhow: false, inspiracje: false };
