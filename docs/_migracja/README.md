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
