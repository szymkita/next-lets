# -*- coding: utf-8 -*-
"""Migracja bloga z letsautomate.pl (Webflow) do kolekcji `artykuly`."""
import re, os, glob, json, html as H, datetime, urllib.parse, collections

OUT = '/Users/szymonkita/next-lets/src/content/artykuly'
IMGDIR = '/Users/szymonkita/next-lets/public/uploads/blog'

# ---- stare adresy → nowe -------------------------------------------------
# Podstrony ofertowe starego serwisu nie mają odpowiednika 1:1; wskazuję
# najbliższą nową usługę. Tabela jest w docs/baza-wiedzy-koncepcja.md.
MAPA = {
    '/blog': '/baza-wiedzy',
    '/darmowa-konsultacja': '/darmowa-konsultacja',
    '/o-nas': '/dlaczego-my',
    '/kontakt': '/darmowa-konsultacja',
    '/automatyzacja-w-obsludze-klienta': '/systemy-dla-klientow',
    '/automatyzacja-w-sprzedazy-i-marketingu': '/automatyzacje-integracje',
    '/automatyzacja-w-rekrutacji-oraz-hr': '/automatyzacje-integracje',
    '/automatyzacja-w-dashboardach-i-danych': '/automatyzacje-integracje',
    '/automatyzacja-w-administracji': '/automatyzacje-integracje',
    '/automatyzacja-oraz-ai-w-nietypowych-procesach': '/rozwiazania-ai',
    '/automatyzacja-ofertowania-case-study': '/inspiracje',
    '/zautomatyzowany-dzial-sprzedazy': '/systemy-procesowe',
    '/aplikacje-wewnetrzne-i-systemy-automatyzujace': '/systemy-procesowe',
    '/automatyzacja-procesow-i-zadan': '/automatyzacje-integracje',
    '/sztuczna-inteligencja-w-biznesie': '/rozwiazania-ai',
    '/integracja-i-rozbudowa-narzedzi': '/automatyzacje-integracje',
    '/doradztwo-w-sztucznej-inteligencji-i-automatyzacji': '/strategia-ai',
    '/szkolenia-z-sztucznej-inteligencji-i-automatyzacji-procesow': '/szkolenia-ai',
    '/': '/',
}
NIEZMAPOWANE = collections.Counter()

def przepisz_link(u):
    u = H.unescape(u).strip()
    if u.startswith('#'):
        return None
    m = re.match(r'https?://(?:www\.)?letsautomate\.pl(/.*)?$', u)
    if not m:
        return u                       # link zewnętrzny zostaje bez zmian
    sciezka = (m.group(1) or '/').rstrip('/') or '/'
    if sciezka.startswith('/post/'):
        return '/baza-wiedzy/' + sciezka[len('/post/'):]
    if sciezka in MAPA:
        return MAPA[sciezka]
    NIEZMAPOWANE[sciezka] += 1
    return None

# ---- HTML → markdown ----------------------------------------------------
def inline(s, obrazy):
    s = re.sub(r'<br\s*/?>', '\n', s)
    s = re.sub(r'<(strong|b)\b[^>]*>(.*?)</\1>', lambda m: '**' + m.group(2).strip() + '**' if m.group(2).strip() else '', s, flags=re.S)
    s = re.sub(r'<(em|i)\b[^>]*>(.*?)</\1>', lambda m: '*' + m.group(2).strip() + '*' if m.group(2).strip() else '', s, flags=re.S)
    s = re.sub(r'<sup\b[^>]*>(.*?)</sup>', r'\1', s, flags=re.S)
    def img(m):
        src = re.search(r'src="([^"]*)"', m.group(0))
        alt = re.search(r'alt="([^"]*)"', m.group(0))
        if not src: return ''
        lok = obrazy.get(H.unescape(src.group(1)), '')
        return f'![{H.unescape(alt.group(1)) if alt else ""}]({lok})' if lok else ''
    s = re.sub(r'<img\b[^>]*>', img, s)
    def a(m):
        u = przepisz_link(re.search(r'href="([^"]*)"', m.group(0)).group(1))
        t = re.sub(r'<[^>]+>', '', m.group(2)).strip()
        return f'[{t}]({u})' if u and t else t
    s = re.sub(r'<a\b([^>]*)>(.*?)</a>', a, s, flags=re.S)
    s = re.sub(r'<[^>]+>', '', s)
    s = H.unescape(s).replace('\xa0', ' ')
    # markdown zjadłby gwiazdkę i podkreślnik z tekstu
    s = re.sub(r'[ \t]+', ' ', s)
    return s.strip()

def figura(w, obrazy):
    """<figure> z richtextu: obrazek z podpisem albo osadzony film."""
    if 'iframe' in w:
        src = re.search(r'src="([^"]*)"', w)
        yt = re.search(r'youtube\.com/embed/([\w-]+)', src.group(1)) if src else None
        if not yt: return ''
        return (f'<div class="film"><iframe src="https://www.youtube-nocookie.com/embed/{yt.group(1)}"'
                ' title="Nagranie na YouTube" loading="lazy" allowfullscreen></iframe></div>')
    cap = re.search(r'<figcaption[^>]*>(.*?)</figcaption>', w, re.S)
    obraz = inline(re.sub(r'<figcaption.*?</figcaption>', '', w, flags=re.S), obrazy)
    podpis = inline(cap.group(1), obrazy) if cap else ''
    if not obraz: return ''
    return obraz + ('\n\n*' + podpis + '*' if podpis else '')

def na_markdown(body, obrazy, poziomy):
    out = []
    body = re.sub(r'<div class="w-embed">\s*<hr\s*/?>\s*</div>', '<hr>', body)

    for m in re.finditer(r'<(h[1-6]|p|ul|ol|blockquote|figure|div)\b[^>]*>(.*?)</\1>|<hr\s*/?>', body, re.S):
        if m.group(0).startswith('<hr'):
            out.append('---'); continue
        tag, w = m.group(1).lower(), m.group(2)
        if tag.startswith('h'):
            t = inline(w, obrazy)
            if t: out.append('#' * poziomy.get(tag, 2) + ' ' + t.rstrip('.').strip() if False else '#' * poziomy.get(tag, 2) + ' ' + t)
        elif tag == 'p':
            t = inline(w, obrazy)
            if t: out.append(t)
        elif tag in ('ul', 'ol'):
            pkt = re.findall(r'<li\b[^>]*>(.*?)</li>', w, re.S)
            znak = (lambda i: f'{i+1}.') if tag == 'ol' else (lambda i: '-')
            lin = [f'{znak(i)} {inline(p, obrazy)}' for i, p in enumerate(pkt) if inline(p, obrazy)]
            if lin: out.append('\n'.join(lin))
        elif tag == 'blockquote':
            t = inline(w, obrazy)
            if t: out.append('> ' + t.replace('\n', '\n> '))
        elif tag == 'figure':
            t = figura(w, obrazy)
            if t: out.append(t)
        elif tag == 'div':
            t = inline(w, obrazy)
            if t: out.append(t)
    tekst = '\n\n'.join(out)
    return re.sub(r'\n{3,}', '\n\n', tekst).strip()

# ---- wyciąganie z HTML --------------------------------------------------
def richtext(h):
    m = re.search(r'<div class="blog w-richtext">', h)
    if not m: return None
    i, depth = m.end(), 1
    for t in re.finditer(r'<(/?)div\b[^>]*?(/?)>', h[i:]):
        if t.group(2) == '/': continue
        depth += -1 if t.group(1) else 1
        if depth == 0: return h[i:i + t.start()]
    return None

def czysty(s): return re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', s)).strip()

# Webflow nazywa pliki identyfikatorem ObjectID — pierwsze cztery bajty to
# znacznik czasu wgrania. Dla wpisu bloga to najbliższa dostępna data
# publikacji: w serwisie nie ma jej nigdzie w HTML-u, nie ma RSS-a,
# a Internet Archive był w trakcie migracji niedostępny.
def data_z_pliku(url):
    m = re.search(r'/([0-9a-f]{8})[0-9a-f]{16}_', url)
    if not m: return None
    return datetime.date.fromtimestamp(int(m.group(1), 16))

# Stare kategorie zostają — to taksonomia, którą redakcja realnie stosowała
# na 49 wpisach. Klucz jest w adresie filtra.
KAT = {
    'Podstawy': 'podstawy', 'Firma': 'firma', 'Poradniki': 'poradniki',
    'Sprzedaż': 'sprzedaz', 'Marketing': 'marketing',
    'Obsługa klienta': 'obsluga-klienta', 'Narzędzia': 'narzedzia',
}
# Wpis, w którym Webflow nie wyrenderował kategorii — przypisana z treści.
KAT_RECZNIE = {'ranking-narzedzi-do-automatyzacji-jakie-platformy-no-code-wybrac-w-2024-roku': 'narzedzia'}

def yaml_str(s):
    return '"' + s.replace('\\', '\\\\').replace('"', '\\"') + '"'

os.makedirs(IMGDIR, exist_ok=True)
do_pobrania = {}
wpisy = []

for f in sorted(glob.glob('posts/*.html')):
    h = open(f, encoding='utf-8').read()
    slug = os.path.basename(f)[:-5]
    body = richtext(h)
    tytul = H.unescape(czysty(re.search(r'<h1[^>]*>(.*?)</h1>', h, re.S).group(1)))
    kat_m = re.search(r'class="text-389">(.*?)</div>', h, re.S)
    kat = KAT_RECZNIE.get(slug) or KAT.get(czysty(kat_m.group(1)) if kat_m else '', 'podstawy')
    opis = re.search(r'<meta content="([^"]*)" name="description"', h) or re.search(r'<meta name="description" content="([^"]*)"', h)
    lead = H.unescape(opis.group(1)).strip() if opis else ''
    hero_m = re.search(r'<img[^>]+class="image-147"[^>]*>', h)
    hero = H.unescape(re.search(r'src="([^"]+)"', hero_m.group(0)).group(1)) if hero_m else None
    czas = re.findall(r'class="text-390">(.*?)</div>', h, re.S)

    # poziomy nagłówków: część wpisów używa h2+h4, część tylko h3 —
    # normalizuję do ## / ### / ####, żeby spis treści zawsze miał z czego powstać
    uzyte = sorted(set(int(x) for x in re.findall(r'<h([1-6])\b', body)))
    poziomy = {f'h{p}': 2 + i for i, p in enumerate(uzyte)}

    # obrazy: hero + te w treści
    obrazy = {}
    if hero:
        ext = os.path.splitext(urllib.parse.urlparse(hero).path)[1].lower() or '.png'
        nazwa = f'{slug}{ext}'
        do_pobrania[hero] = nazwa
        obrazy[hero] = f'/uploads/blog/{nazwa}'
    for n, m in enumerate(re.finditer(r'<img\b[^>]*src="([^"]+)"[^>]*>', body), 1):
        u = H.unescape(m.group(1))
        if u in obrazy: continue
        ext = os.path.splitext(urllib.parse.urlparse(u).path)[1].lower() or '.png'
        nazwa = f'{slug}-{n}{ext}'
        do_pobrania[u] = nazwa
        obrazy[u] = f'/uploads/blog/{nazwa}'

    md = na_markdown(body, obrazy, poziomy)
    data = data_z_pliku(hero) if hero else None
    wpisy.append(dict(slug=slug, tytul=tytul, lead=lead, kat=kat, data=data,
                      hero=obrazy.get(hero), md=md, czas=czas[1] if len(czas) > 1 else None))

print('wpisów:', len(wpisy))
print('bez daty:', [w['slug'] for w in wpisy if not w['data']])
print('bez hero:', [w['slug'] for w in wpisy if not w['hero']])
print('kategorie:', collections.Counter(w['kat'] for w in wpisy))
print('daty:', collections.Counter(w['data'].year for w in wpisy if w['data']))
print('niezmapowane linki:', dict(NIEZMAPOWANE))
print('obrazów do pobrania:', len(do_pobrania))
json.dump({'wpisy': [{**w, 'data': str(w['data'])} for w in wpisy], 'obrazy': do_pobrania},
          open('gotowe.json', 'w'), ensure_ascii=False)
