// Sitemapa pisana ręcznie zamiast @astrojs/sitemap: lista jest krótka,
// a warianty robocze mają z niej wypaść bez dodatkowej konfiguracji.
const STRONY = [
  { u: '/', p: '1.0' },
  { u: '/strategia-ai', p: '0.9' },
  { u: '/rozwiazania-ai', p: '0.9' },
  { u: '/szkolenia-ai', p: '0.9' },
  { u: '/systemy-procesowe', p: '0.9' },
  { u: '/systemy-dla-klientow', p: '0.9' },
  { u: '/automatyzacje-integracje', p: '0.9' },
  { u: '/guided-coding', p: '0.8' },
  { u: '/guided-coding/bez-dzialu-it', p: '0.7' },
  { u: '/guided-coding/dla-zespolow', p: '0.7' },
  { u: '/guided-coding/transfer-know-how', p: '0.7' },
  { u: '/dlaczego-my', p: '0.7' },
  { u: '/darmowa-konsultacja', p: '0.6' },
];

export const GET = ({ site }) => {
  const dzis = new Date().toISOString().slice(0, 10);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${STRONY.map((s) => `  <url><loc>${new URL(s.u, site).href}</loc><lastmod>${dzis}</lastmod><priority>${s.p}</priority></url>`).join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
