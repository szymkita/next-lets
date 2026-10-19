// Sitemapa pisana ręcznie zamiast @astrojs/sitemap: lista jest krótka,
// a warianty robocze mają z niej wypaść bez dodatkowej konfiguracji.
//
// Wyjątkiem są artykuły z bazy wiedzy i jej kategorie oraz strony przeniesione
// ze starego serwisu — dopisują się same z kolekcji i ze słownika KATEGORIE. Szkice (`szkic: true`) zostają poza
// sitemapą. Adresy (/blog, /post/*, /blog-categories/*) są ze starego bloga.
import { getCollection } from 'astro:content';
import { KATEGORIE } from '../content/config';
import { adresArtykulu, adresKategorii } from '../components/baza-wiedzy/wspolne.js';

const STRONY = [
  { u: '/', p: '1.0' },
  { u: '/strategia-ai', p: '0.9' },
  { u: '/wdrozenie-ai', p: '0.9' },
  { u: '/rozwiazania-ai', p: '0.9' },
  { u: '/szkolenia-ai', p: '0.9' },
  { u: '/systemy-procesowe', p: '0.9' },
  { u: '/systemy-dla-klientow', p: '0.9' },
  { u: '/automatyzacje-integracje', p: '0.9' },
  { u: '/produkty', p: '0.9' },
  { u: '/inspiracje', p: '0.9' },
  { u: '/blog', p: '0.8' },
  { u: '/guided-coding', p: '0.8' },
  { u: '/guided-coding/audyt-aplikacji', p: '0.7' },
  { u: '/guided-coding/biezace-wsparcie', p: '0.7' },
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
  { u: '/kontakt', p: '0.6' },
  { u: '/polityka-prywatnosci', p: '0.2' },
];

export const GET = async ({ site }) => {
  const dzis = new Date().toISOString().slice(0, 10);
  const artykuly = (await getCollection('artykuly', (a) => !a.data.szkic)).map((a) => ({
    u: adresArtykulu(a.slug),
    p: '0.6',
    // Przy artykule `lastmod` to data publikacji, nie data wygenerowania
    // sitemapy — inaczej każdy build odświeżałby wszystkie wpisy naraz.
    d: a.data.data.toISOString().slice(0, 10),
  }));
  const kategorie = Object.keys(KATEGORIE).map((k) => ({ u: adresKategorii(k), p: '0.5' }));
  // Strony przeniesione 1:1 ze starego serwisu, dopóki nie dostaną następców.
  const stare = (await getCollection('stare-strony')).map((s) => ({ u: s.data.adres, p: s.data.adres.startsWith('/pd-') ? '0.2' : '0.5' }));
  const lista = [...STRONY, ...kategorie, ...artykuly, ...stare];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${lista.map((s) => `  <url><loc>${new URL(s.u, site).href}</loc><lastmod>${s.d || dzis}</lastmod><priority>${s.p}</priority></url>`).join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
