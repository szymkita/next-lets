import { defineConfig } from 'astro/config';

// Absolutny adres jest potrzebny do og:image — scrapery (LinkedIn, Slack)
// nie rozwiązują ścieżek względnych. Na Vercelu bierzemy domenę produkcyjną
// projektu, lokalnie zostaje localhost.
const site = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:4321';

export default defineConfig({
  site,
  server: { port: 4321 },
});
