// Pozycje schowane na start produkcji (16.10.2026) — w menu (Nawigacja.astro)
// i w stopce (stopka-v2/StopkaG.astro). Szymon: „schowaj z menu produkty,
// inspiracje i know-how, zostaw tę samą bazę wiedzy, potem to przywrócimy”,
// a potem „stopkę też odchudź”. Strony działają dalej pod swoimi adresami
// i są w sitemapie, znika tylko link. Przywrócenie: true.
export const POKAZ = { produkty: false, knowhow: false, inspiracje: false };
