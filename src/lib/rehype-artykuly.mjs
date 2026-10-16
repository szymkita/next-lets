// Rehype dla artykułów z src/content/artykuly (podpięty w astro.config.mjs).
//
// 1. KOTWICE h2 JAK NA STARYM BLOGU. Webflow nadawał je skryptem w stopce
//    wpisu: `toc-` + tekst nagłówka małymi literami, białe znaki zamienione
//    na `-`, a wszystko spoza [A-Za-z0-9_-] wycięte — polskie litery też,
//    stąd `toc-jak-dziaa-automatyzacja-procesw-biznesowych`. Google zna te
//    kotwice i pokazuje je w wynikach jako „Przejdź do” (dziesiątki tysięcy
//    wyświetleń rocznie na jednym wpisie), więc odtwarzamy je co do znaku.
//    Wzór poniżej jest przepisany ze skryptu Webflow bez zmian.
//    Astro nadaje własne `id` tylko nagłówkom, które go jeszcze nie mają,
//    więc spis treści w [slug].astro dostaje te same kotwice.
// 2. LISTA NUMEROWANA Z `start` — style numerują licznikiem CSS, który
//    o atrybucie nie wie, więc licznik ustawiamy w stylu inline.
// 3. LINKI ZEWNĘTRZNE otwierają się w nowej karcie, jak na starym blogu.
const kotwica = (t) => `toc-${t.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')}`;

const tekst = (w) => (w.type === 'text' ? w.value : (w.children || []).map(tekst).join(''));

const zewnetrzny = (h) => /^https?:\/\//.test(h) && !/^https?:\/\/(www\.)?letsautomate\.pl(\/|$)/.test(h);

export default function rehypeArtykuly() {
  return (drzewo) => {
    const odwiedz = (w) => {
      if (w.type === 'element') {
        const p = (w.properties ||= {});
        if (w.tagName === 'h2' && !p.id) p.id = kotwica(tekst(w));
        if (w.tagName === 'ol' && Number(p.start) > 1) p.style = `counter-reset:pkt ${Number(p.start) - 1}`;
        if (w.tagName === 'a' && typeof p.href === 'string' && zewnetrzny(p.href)) {
          p.target = '_blank';
          p.rel = ['noopener'];
        }
      }
      (w.children || []).forEach(odwiedz);
    };
    odwiedz(drzewo);
  };
}
