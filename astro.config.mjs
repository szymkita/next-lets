import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import rehypeArtykuly from './src/lib/rehype-artykuly.mjs';

// Strony robocze (src/robocze/): poprzednie wersje podstron i warianty do
// porównania. Serwer deweloperski (npm run dev) pokazuje je pod dawnymi
// adresami (np. /index-v4, /produkty/appto-old), spis jest pod /robocze.
// Build ich nie widzi, więc na produkcji i w podglądach Vercela nie mają
// adresu. Pliki z podkreślnikiem na początku to części stron, nie strony.
const robocze = {
  name: 'strony-robocze',
  hooks: {
    'astro:config:setup': ({ command, injectRoute }) => {
      if (command !== 'dev') return;
      for (const plik of readdirSync(new URL('./src/robocze', import.meta.url), { recursive: true })) {
        if (!plik.endsWith('.astro') || /(^|\/)_/.test(plik)) continue;
        const adres = `/${plik.replace(/\.astro$/, '')}`;
        injectRoute({ pattern: adres === '/index' ? '/robocze' : adres, entrypoint: `./src/robocze/${plik}` });
      }
    },
  },
};

// Komentarze HTML (<!-- … -->) w plikach .astro trafiają do gotowych stron
// słowo w słowo, a jest w nich kuchnia projektu: decyzje, „DO POTWIERDZENIA”,
// ścieżki do docs/. Po buildzie wycinamy je ze wszystkich stron w dist;
// w źródłach zostają dla zespołu. Zawartość <script>, <style>, <textarea>
// i <pre> zostaje nietknięta. Serwer deweloperski pokazuje je dalej.
// Uwaga: komentarze // w skryptach is:inline idą na stronę bez zmian.
const BEZ_KOMENTARZY = /(<(script|style|textarea|pre)\b[\s\S]*?<\/\2>)|<!--[\s\S]*?-->/gi;
const bezKomentarzy = {
  name: 'bez-komentarzy-html',
  hooks: {
    'astro:build:done': ({ dir, logger }) => {
      const katalog = fileURLToPath(dir);
      let strony = 0;
      for (const plik of readdirSync(katalog, { recursive: true })) {
        if (!plik.endsWith('.html')) continue;
        const sciezka = `${katalog}/${plik}`;
        const html = readFileSync(sciezka, 'utf8');
        const czysty = html.replace(BEZ_KOMENTARZY, (_, blok) => blok || '');
        if (czysty !== html) { writeFileSync(sciezka, czysty); strony++; }
      }
      logger.info(`komentarze HTML usunięte z ${strony} stron`);
    },
  },
};

// Adres serwisu idzie do canonical, sitemapy, robots.txt i og:image.
// Na Vercelu wpisany na sztywno: www.letsautomate.pl, bo tam stary serwis
// ma 97% widoczności w Google. Wcześniej brany był z
// VERCEL_PROJECT_PRODUCTION_URL, ale ta zmienna wskazuje najkrótszą domenę
// projektu (czyli letsautomate.pl bez www, która ma przekierowywać na www),
// a przed podpięciem domeny — next-lets.vercel.app. Lokalnie localhost.
const site = process.env.VERCEL ? 'https://www.letsautomate.pl' : 'http://localhost:4321';

export default defineConfig({
  site,
  server: { port: 4321 },
  integrations: [robocze, bezKomentarzy],
  // Markdown w serwisie to tylko artykuły bazy wiedzy — kotwice ze starego
  // bloga, numeracja list i linki zewnętrzne (opis w samym pliku).
  // `smartypants` wyłączony, bo 49 wpisów z Webflow ma stać znak w znak jak
  // na starym blogu (proste „Let's”, "cudzysłowy"). Nowe teksty wpisują
  // typografię wprost: „…”, –, ’.
  markdown: { rehypePlugins: [rehypeArtykuly], smartypants: false },
});
