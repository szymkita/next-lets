// Sitemapa pisana ręcznie zamiast @astrojs/sitemap: lista jest krótka,
// a warianty robocze mają z niej wypaść bez dodatkowej konfiguracji.
//
// Wyjątkiem są artykuły z bazy wiedzy — tych przybywa, więc dopisują się same
// z kolekcji. Szkice (`szkic: true`) zostają poza sitemapą.
import { getCollection } from 'astro:content';

const STRONY = [
  { u: '/', p: '1.0' },
  { u: '/strategia-ai', p: '0.9' },
  { u: '/rozwiazania-ai', p: '0.9' },
  { u: '/szkolenia-ai', p: '0.9' },
  { u: '/systemy-procesowe', p: '0.9' },
  { u: '/systemy-dla-klientow', p: '0.9' },
  { u: '/automatyzacje-integracje', p: '0.9' },
  { u: '/produkty', p: '0.9' },
  { u: '/produkty/appto', p: '0.8' },
  { u: '/inspiracje', p: '0.9' },
  { u: '/baza-wiedzy', p: '0.8' },
  { u: '/guided-coding', p: '0.8' },
  { u: '/guided-coding/bez-dzialu-it', p: '0.7' },
  { u: '/guided-coding/dla-zespolow', p: '0.7' },
  { u: '/guided-coding/transfer-know-how', p: '0.7' },
  { u: '/wisestack', p: '0.8' },
  { u: '/dlaczego-my', p: '0.7' },
  // Podstrony obszarowe — poza menu głównym, ale w sitemapie: to adresy
  // przeniesione ze starego serwisu i to z wyszukiwarki żyją.
  { u: '/automatyzacja-oraz-ai-w-nietypowych-procesach', p: '0.8' },
  { u: '/automatyzacja-w-sprzedazy-i-marketingu', p: '0.7' },
  { u: '/automatyzacja-w-obsludze-klienta', p: '0.7' },
  { u: '/automatyzacja-w-rekrutacji-oraz-hr', p: '0.7' },
  { u: '/automatyzacja-w-administracji', p: '0.7' },
  { u: '/automatyzacja-w-dashboardach-i-danych', p: '0.7' },
  { u: '/darmowa-konsultacja', p: '0.6' },
];

export const GET = async ({ site }) => {
  const dzis = new Date().toISOString().slice(0, 10);
  const artykuly = (await getCollection('artykuly', (a) => !a.data.szkic)).map((a) => ({
    u: `/baza-wiedzy/${a.slug}`,
    p: '0.6',
    // Przy artykule `lastmod` to data publikacji, nie data wygenerowania
    // sitemapy — inaczej każdy build odświeżałby wszystkie wpisy naraz.
    d: a.data.data.toISOString().slice(0, 10),
  }));
  const lista = [...STRONY, ...artykuly];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${lista.map((s) => `  <url><loc>${new URL(s.u, site).href}</loc><lastmod>${s.d || dzis}</lastmod><priority>${s.p}</priority></url>`).join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
