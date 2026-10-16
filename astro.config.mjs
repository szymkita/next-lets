import { readdirSync } from 'node:fs';
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
  integrations: [robocze],
  // Markdown w serwisie to tylko artykuły bazy wiedzy — kotwice ze starego
  // bloga, numeracja list i linki zewnętrzne (opis w samym pliku).
  // `smartypants` wyłączony, bo 49 wpisów z Webflow ma stać znak w znak jak
  // na starym blogu (proste „Let's”, "cudzysłowy"). Nowe teksty wpisują
  // typografię wprost: „…”, –, ’.
  markdown: { rehypePlugins: [rehypeArtykuly], smartypants: false },
});
