// robots.txt składany z Astro.site, żeby adres sitemapy zawsze zgadzał się
// z domeną produkcyjną (na Vercelu bierze ją VERCEL_PROJECT_PRODUCTION_URL).
export const GET = ({ site }) => {
  const tresc = [
    'User-agent: *',
    'Allow: /',
    '',
    '# warianty roboczne — poza indeksem',
    'Disallow: /strategia-ai-v2',
    'Disallow: /strategia-ai-v3',
    'Disallow: /dlaczego-my-v3',
    'Disallow: /index-v3',
    '',
    `Sitemap: ${new URL('sitemap.xml', site).href}`,
    '',
  ].join('\n');
  return new Response(tresc, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
