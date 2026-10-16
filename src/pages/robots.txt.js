// robots.txt składany z Astro.site, żeby adres sitemapy zawsze zgadzał się
// z domeną produkcyjną (astro.config.mjs).
//
// Bez wpisów Disallow dla wariantów roboczych: każdy z nich ma `noindex`
// (LaBase), a zablokowany robot nie zobaczyłby tego znacznika i adres mógłby
// zostać w indeksie bez opisu.
export const GET = ({ site }) => {
  const tresc = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${new URL('sitemap.xml', site).href}`,
    '',
  ].join('\n');
  return new Response(tresc, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
