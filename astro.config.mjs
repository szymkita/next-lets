import { defineConfig } from 'astro/config';
import rehypeArtykuly from './src/lib/rehype-artykuly.mjs';

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
  // Markdown w serwisie to tylko artykuły bazy wiedzy — kotwice ze starego
  // bloga, numeracja list i linki zewnętrzne (opis w samym pliku).
  // `smartypants` wyłączony, bo 49 wpisów z Webflow ma stać znak w znak jak
  // na starym blogu (proste „Let's”, "cudzysłowy"). Nowe teksty wpisują
  // typografię wprost: „…”, –, ’.
  markdown: { rehypePlugins: [rehypeArtykuly], smartypants: false },
});
