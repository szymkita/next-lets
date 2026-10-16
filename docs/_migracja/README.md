# Migracja bloga z letsautomate.pl → /baza-wiedzy

Skrypty jednorazowe, uruchomione 08.09.2026. Leżą tu, żeby dało się powtórzyć
przeniesienie albo sprawdzić, skąd wzięła się konkretna wartość we froncie
artykułu. Do bieżącej pracy z serwisem nie są potrzebne.

Kolejność:

1. `curl` po `sitemap.xml` starego serwisu → 49 adresów `/post/<slug>`,
   każdy zapisany jako `posts/<slug>.html`
2. `blog-webflow.py` — wyciąga z HTML-u tytuł, kategorię, opis meta, obraz
   otwierający i treść z `div.blog.w-richtext`, zamienia ją na markdown,
   przepisuje linki wewnętrzne (tabela `MAPA` w pliku) i odtwarza datę
   publikacji ze znacznika czasu w nazwie pliku Webflow
3. `blog-webflow-zapis.py` — zapisuje pliki `.md` do `src/content/artykuly/`
   i sprawdza, czy do markdownu trafiło co najmniej 95% słów ze źródła
4. obrazy pobrane osobno, przeskalowane do 1200 px i zapisane jako WebP
   w `public/uploads/blog/`

Decyzje i to, co zostało do przejrzenia: `docs/baza-wiedzy-koncepcja.md`.

## Druga konwersja — 15.10.2026

Pierwsza konwersja obcinała spacje wewnątrz pogrubień i linków, przez co
w ok. 100 miejscach słowa się skleiły („ZapieriMake”, „jakoLet's
automatechętnie”). Treść 49 wpisów jest przekonwertowana od nowa, a wpisy
stoją z powrotem pod starymi adresami `/post/<slug>`.

1. `curl` po `/post/<slug>` z żywego letsautomate.pl → `posts/<slug>.html`
2. `blog-webflow-v2.py <posts> src/content/artykuly --zapisz` — podmienia
   treść pod front matterem, front matter zostaje. Spacje na brzegach
   `<strong>`/`<em>`/`<a>` wychodzą poza znacznik; tam, gdzie `**` nie
   zamknąłby się w CommonMarku, wpisuje `<strong>`. Poziomy nagłówków,
   linki wewnętrzne i loga w połowie szerokości jak w oryginale.
3. `npm run build`, potem
   `blog-webflow-weryfikacja.py <posts> dist/post <wynik.json>` — porównuje
   wyrenderowany HTML z żywym: tekst słowo w słowo, nagłówki, pogrubienia,
   kursywy, linki, obrazy, film, listy, linie poziome.

Wynik z 15.10.2026: 49/49 zgodnych we wszystkich kategoriach. Jedyna
różnica to kropka na końcu pięciu tytułów (reguła serwisu: nagłówek bez
kropki). Kotwice `#toc-…`: 210/210 z oryginału, 44/44 z Search Console.

## Strony spoza bloga — 16.10.2026

Dziesięć stron starego serwisu z ruchem i bez następcy na nowej stronie
stoi pod tymi samymi adresami z treścią przeniesioną 1:1: `/o-nas`, sześć
stron usług (doradztwo, szkolenia, aplikacje wewnętrzne, automatyzacja
procesów, integracje, AI w biznesie), case study kancelarii Zaprawieni
i dwie strony aplikacji w marketplace Pipedrive (`/pd-dane-o-firmie-…`).
Lista wszystkich 150 starych adresów z decyzjami: `docs/stare-adresy.md`.

1. Strony renderowane w Chrome (1440 px), z elementami niewidocznymi
   oznaczonymi `data-ukryte="1"` — ukrywanie w Webflow siedzi w CSS,
   nie w HTML. Zakładki, odpowiedzi FAQ i slajdy zostają, bo są schowane
   tylko do kliknięcia.
2. `strony-webflow.py <html> <stare.json> .` — sekcje → bloki (nagłówki
   z tymi samymi poziomami, akapity, listy, obrazy-treść, przyciski, karty,
   kroki, zakładki, FAQ) w `src/content/stare-strony/*.json`, obrazy jako
   WebP w `public/uploads/stare/`. Formularz zastępuje moduł kontaktowy
   nowej strony z nagłówkiem i leadem starej sekcji. Renderuje
   `src/pages/[...stara].astro`.
3. `npm run build`, potem `strony-webflow-weryfikacja.py <html> .` —
   słowa widocznej treści starej strony vs nowej (bez menu, stopki
   i formularza).

Wynik: każda strona zgodna słowo w słowo; różnice to numery kroków „01–04”
(rysowane przez CSS), strzałki przy przyciskach i kolejność tytułów
zakładek (stoją teraz nad swoją treścią). Tytuły i opisy meta bez zmian;
sześć stron usług nie miało h1 — pierwszy nagłówek wejścia jest teraz h1.

Nie przeniesione: `/branze/dealerzy-samochodowi` i
`/quick-wins-automation-program` mają w kodzie `window.location.href = "/"`
— stary serwis przekierowuje z nich skryptem na stronę główną, tak samo
jak ze sklepu, koszyka, newslettera i webinarów (razem 10 adresów).
