# Port stron ze starego letsautomate.pl (Webflow) 1:1 pod te same adresy.
#
# Wejście: HTML stron wyrenderowanych w przeglądarce, z elementami
# niewidocznymi oznaczonymi `data-ukryte="1"` (zakładki, odpowiedzi FAQ
# i slajdy zostają, bo są schowane tylko do kliknięcia), oraz stare.json
# z tytułem i opisem meta każdej strony.
# Wyjście: src/content/stare-strony/<nazwa>.json (sekcje → bloki) i obrazy
# w public/uploads/stare/<nazwa>/ (WebP, maks. 1600 px szerokości).
#
#   python3 -I docs/_migracja/strony-webflow.py <katalog z HTML> <stare.json> <repo>
#
# Co przechodzi: nagłówki z tymi samymi poziomami, akapity z pogrubieniami
# i linkami, listy, obrazy-treść, przyciski, karty (powtarzalne bloki
# rodzeństwa), kroki, zakładki i FAQ. Formularz zostaje zastąpiony
# formularzem nowej strony (GcCta), z nagłówkiem i leadem starej sekcji.
# Co nie przechodzi: menu, stopka, pas WiseGroup (nowa strona ma własne),
# ikony SVG i ozdobniki.
import json, re, sys, os, io, html as H, urllib.parse, urllib.request
from html.parser import HTMLParser

WEJ, STARE, REPO = sys.argv[1], sys.argv[2], sys.argv[3]

# ---------- drzewo HTML ----------
VOID = {'img', 'br', 'hr', 'meta', 'link', 'input', 'source', 'wbr', 'area', 'col', 'embed', 'param', 'track'}
class W:
    __slots__ = ('tag', 'a', 'rodzic', 'dzieci')
    def __init__(s, tag, a=None, rodzic=None): s.tag, s.a, s.rodzic, s.dzieci = tag, dict(a or []), rodzic, []
    @property
    def cls(s): return s.a.get('class') or ''
class Drzewo(HTMLParser):
    def __init__(s): super().__init__(convert_charrefs=True); s.korzen = W('#root'); s.b = s.korzen
    def handle_starttag(s, t, a):
        w = W(t, a, s.b); s.b.dzieci.append(w)
        if t not in VOID: s.b = w
    def handle_startendtag(s, t, a): s.b.dzieci.append(W(t, a, s.b))
    def handle_endtag(s, t):
        w = s.b
        while w is not s.korzen and w.tag != t: w = w.rodzic
        if w is not s.korzen: s.b = w.rodzic
    def handle_data(s, x): s.b.dzieci.append(x)
def znajdz(w, f):
    if isinstance(w, str): return None
    if f(w): return w
    for x in w.dzieci:
        r = znajdz(x, f)
        if r: return r
def wszystkie(w, f, out=None):
    out = [] if out is None else out
    if isinstance(w, str): return out
    if f(w): out.append(w)
    for x in w.dzieci: wszystkie(x, f, out)
    return out
POMIN = {'script', 'style', 'noscript', 'svg', 'template', 'iframe', 'input', 'select', 'textarea', 'button', 'label'}
ZWJ = re.compile('[​‌‍﻿]')
def tekst(w):
    if isinstance(w, str): return w
    if w.tag in POMIN or w.a.get('data-ukryte') == '1': return ''
    return ''.join(tekst(x) for x in w.dzieci)
def czysty(t): return re.sub(r'\s+', ' ', ZWJ.sub('', t)).strip()
def elementy(w): return [x for x in w.dzieci if isinstance(x, W) and x.a.get('data-ukryte') != '1' and x.tag not in POMIN]

# ---------- linki ----------
NOWE = set()          # adresy nowej strony, uzupełniane w main()
MAPA = {'/kontakt': '/darmowa-konsultacja'}   # stary serwis sam przekierowywał /kontakt
def mapuj(href):
    h = H.unescape(href or '').strip()
    if not h or h == '#': return '#kontakt'
    if h.startswith('#') or h.startswith('mailto:') or h.startswith('tel:'): return h
    m = re.match(r'^(?:https?://(?:www\.)?letsautomate\.pl)?(/[^?#]*)?([?#].*)?$', h)
    if m and (h.startswith('/') or re.match(r'^https?://(www\.)?letsautomate\.pl', h)):
        p = (m.group(1) or '/').rstrip('/') or '/'
        p = MAPA.get(p, p)
        return p if p in NOWE else None     # adres, którego nowa strona nie ma: zostaje sam tekst
    return h

# ---------- inline ----------
INLINE = {'strong', 'b', 'em', 'i', 'a', 'span', 'br', 'sup', 'sub', 'u', 'small', 'code', 'mark', 'font'}
def guzik(w):
    return w.tag == 'a' and (re.search(r'button|btn|w-button|cta', w.cls) or any(isinstance(x, W) and x.tag == 'div' for x in w.dzieci))
def tylko_inline(w):
    for x in w.dzieci:
        if isinstance(x, str): continue
        if x.tag in POMIN or x.a.get('data-ukryte') == '1': continue
        if x.tag == 'img':
            if obraz_tresci(x): return False   # zdjęcie to treść, nie ozdobnik akapitu
            continue
        if x.tag not in INLINE or guzik(x) or not tylko_inline(x): return False
    return True
def inline(w):
    if isinstance(w, str): return H.escape(re.sub(r'\s+', ' ', ZWJ.sub('', w)), quote=False)
    if w.tag in POMIN or w.a.get('data-ukryte') == '1' or w.tag == 'img': return ''
    if w.tag == 'br': return '<br>'
    srodek = ''.join(inline(x) for x in w.dzieci)
    if not czysty(re.sub(r'<[^>]+>', '', srodek)): return '<br>' if '<br>' in srodek else ''
    if w.tag in ('strong', 'b'): return f'<strong>{srodek}</strong>'
    if w.tag in ('em', 'i'): return f'<em>{srodek}</em>'
    if w.tag == 'a':
        h = mapuj(w.a.get('href'))
        if not h or h == '#kontakt': return srodek
        zew = ' target="_blank" rel="noopener"' if h.startswith('http') else ''
        return f'<a href="{H.escape(h)}"{zew}>{srodek}</a>'
    return srodek
def porzadek(h):
    h = re.sub(r'\s+', ' ', h)
    # spacje wychodzą poza znaczniki, żeby słowa się nie sklejały ani nie dublowały
    for _ in range(3):
        h = re.sub(r'<(strong|em)>(\s+)', r'\2<\1>', h)
        h = re.sub(r'(\s+)</(strong|em)>', r'</\2>\1', h)
    h = re.sub(r'(<br>\s*){3,}', '<br><br>', h)
    h = re.sub(r'^(\s*<br>\s*)+|(\s*<br>\s*)+$', '', h)
    h = re.sub(r'</strong><strong>', '', h)
    return h.strip()

# ---------- obrazy ----------
OZDOBNIK = re.compile(r'linkedin\.com|grid%20|gradient|group%20\(6\)|group%20\(7\)|lines\.png|icons8-|yt_zielone|\.svg(\?|$)', re.I)
OBRAZY = {}
def obraz_tresci(w):
    src = w.a.get('src', '')
    return bool(src) and not OZDOBNIK.search(src) and not re.search(r'avatar_01|gradient', w.cls)
def obraz(w, nazwa):
    src = w.a.get('src', '')
    if not obraz_tresci(w): return None
    plik = urllib.parse.unquote(src.rsplit('/', 1)[1].split('?')[0])
    plik = re.sub(r'^[0-9a-f]{24}_', '', plik)
    baza = re.sub(r'[^a-z0-9]+', '-', plik.rsplit('.', 1)[0].lower()).strip('-') or 'obraz'
    lok = f'/uploads/stare/{nazwa}/{baza}.webp'
    i = 2
    while lok in OBRAZY.values() and OBRAZY.get(src) != lok:
        lok = f'/uploads/stare/{nazwa}/{baza}-{i}.webp'; i += 1
    OBRAZY[src] = lok
    return {'t': 'img', 'src': lok, 'alt': czysty(w.a.get('alt', '')), 'zrodlo': src}

# ---------- bloki ----------
def bloki(w, nazwa):
    if isinstance(w, str):
        t = czysty(w)
        return [{'t': 'p', 'html': H.escape(t, quote=False)}] if t else []
    if w.tag in POMIN or w.a.get('data-ukryte') == '1': return []
    if w.tag == 'form': return [{'t': 'formularz'}]
    if re.fullmatch(r'h[1-6]', w.tag):
        h = porzadek(inline(w))
        return [{'t': 'h', 'n': int(w.tag[1]), 'html': h}] if h else []
    if w.tag == 'img':
        o = obraz(w, nazwa)
        return [o] if o else []
    if w.tag in ('ul', 'ol'):
        items = [porzadek(inline(li)) if tylko_inline(li) else porzadek(' '.join(b.get('html', '') for b in bloki_dzieci(li, nazwa))) for li in elementy(w) if li.tag == 'li']
        items = [x for x in items if czysty(re.sub(r'<[^>]+>', '', x))]
        return [{'t': 'lista', 'typ': w.tag, 'items': items}] if items else []
    if 'w-tabs' in w.cls.split():
        menu = znajdz(w, lambda x: 'w-tab-menu' in x.cls.split())
        tresc = znajdz(w, lambda x: 'w-tab-content' in x.cls.split())
        tytuly = [czysty(tekst(a)) for a in elementy(menu)] if menu else []
        panele = [x for x in elementy(tresc)] if tresc else []
        items = []
        for i, pnl in enumerate(panele):
            b = bloki_dzieci(pnl, nazwa)
            if i < len(tytuly) and tytuly[i]: b = [{'t': 'h', 'n': 3, 'html': H.escape(tytuly[i], quote=False), 'zakladka': True}] + b
            if b: items.append(b)
        return [{'t': 'grupa', 'rodzaj': 'zakladki', 'items': items}] if items else []
    if guzik(w):
        t = czysty(tekst(w))
        h = mapuj(w.a.get('href'))
        if t: return [{'t': 'cta', 'tekst': t, 'href': h or '#kontakt'}]
        return []
    if w.tag not in INLINE and tylko_inline(w) or w.tag in ('p', 'blockquote') and tylko_inline(w):
        h = porzadek(inline(w))
        return [{'t': 'p', 'html': h}] if czysty(re.sub(r'<[^>]+>', '', h)) else []
    if w.tag in INLINE and tylko_inline(w):
        h = porzadek(inline(w))
        return [{'t': 'p', 'html': h}] if czysty(re.sub(r'<[^>]+>', '', h)) else []
    return bloki_dzieci(w, nazwa)

def zlozony(b):
    return len(b) >= 2 or any(x['t'] in ('img', 'h', 'grupa', 'lista') for x in b)

def bloki_dzieci(w, nazwa):
    wyniki = []
    for x in w.dzieci:
        if isinstance(x, str):
            t = czysty(x)
            if t: wyniki.append((None, [{'t': 'p', 'html': H.escape(t, quote=False)}]))
            continue
        b = bloki(x, nazwa)
        if b: wyniki.append((x, b))
    out, i = [], 0
    klucz = lambda x: (x.tag, (x.cls.split() or [''])[0]) if x is not None else None
    while i < len(wyniki):
        el, b = wyniki[i]
        j = i
        while j + 1 < len(wyniki) and wyniki[j + 1][0] is not None and el is not None and klucz(wyniki[j + 1][0]) == klucz(el): j += 1
        seria = wyniki[i:j + 1]
        if len(seria) >= 2 and el is not None and el.tag not in ('li',) and all(zlozony(bb) for _, bb in seria) and not any(bb[0]['t'] == 'formularz' for _, bb in seria):
            out.append(grupa([bb for _, bb in seria], el))
            i = j + 1
        else:
            out.extend(b); i += 1
    return out

def grupa(items, el):
    k = el.cls.lower()
    if re.search(r'question|faq|accordion', k): rodzaj = 'faq'
    elif all(it[0]['t'] == 'p' and re.fullmatch(r'0?\d{1,2}\.?', czysty(re.sub(r'<[^>]+>', '', it[0]['html']))) for it in items):
        rodzaj = 'kroki'
        items = [it[1:] for it in items]
    else: rodzaj = 'karty'
    return {'t': 'grupa', 'rodzaj': rodzaj, 'items': items}

# ---------- strona ----------
def sekcje_strony(korzen):
    m = znajdz(korzen, lambda x: x.tag == 'main')
    if m:
        kandydaci = elementy(m)
    else:
        body = znajdz(korzen, lambda x: x.tag == 'body')
        kandydaci = [x for x in elementy(body) if not re.search(r'navbar|w-nav\b|footer', x.cls)]
    out = []
    for s in kandydaci:
        if s.tag in ('nav', 'footer'): continue
        slowa = len(czysty(tekst(s)).split())
        if 'section_laczy_nas' in s.cls and slowa < 30: continue   # pas WiseGroup — nowa strona ma własny
        out.append(s)
    return out

def splaszcz_teksty(b):
    for x in b:
        if x['t'] in ('p', 'h'): yield czysty(re.sub(r'<[^>]+>', ' ', H.unescape(x['html'])))
        elif x['t'] == 'lista':
            for it in x['items']: yield czysty(re.sub(r'<[^>]+>', ' ', H.unescape(it)))
        elif x['t'] == 'cta': yield x['tekst']
        elif x['t'] == 'grupa':
            for it in x['items']: yield from splaszcz_teksty(it)

def main():
    stare = json.load(open(STARE, encoding='utf-8'))
    for r, _, f in os.walk(os.path.join(REPO, 'dist')):
        if 'index.html' in f:
            p = '/' + os.path.relpath(r, os.path.join(REPO, 'dist')); NOWE.add('/' if p == '/.' else p)
    pliki = sorted(x for x in os.listdir(WEJ) if x.endswith('.html'))
    adresy = {x: '/' + x[:-5].replace('__', '/') for x in pliki}
    NOWE.update(adresy.values())
    os.makedirs(os.path.join(REPO, 'src/content/stare-strony'), exist_ok=True)
    for plik in pliki:
        adres = adresy[plik]
        nazwa = plik[:-5].replace('__', '-')
        d = Drzewo(); d.feed(open(os.path.join(WEJ, plik), encoding='utf-8').read())
        sekcje = []
        for s in sekcje_strony(d.korzen):
            b = bloki(s, nazwa)
            if not b: continue
            form = any(x['t'] == 'formularz' for x in b)
            b = [x for x in b if x['t'] != 'formularz']
            sekcje.append({'klasa': s.cls.split()[0] if s.cls else s.tag, 'formularz': form, 'bloki': b})
        w = stare[adres]
        dane = {
            'adres': adres,
            'tytul': w.get('title') or '',
            'opis': w.get('desc') or '',
            'zrodlo': f'https://www.letsautomate.pl{adres}',
            'sekcje': sekcje,
        }
        json.dump(dane, open(os.path.join(REPO, f'src/content/stare-strony/{nazwa}.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
        slow = sum(len(t.split()) for s in sekcje for t in splaszcz_teksty(s['bloki']))
        print(f'{adres:62} sekcji {len(sekcje):>2}  słów {slow:>5}')
    # obrazy
    from PIL import Image
    for src, lok in OBRAZY.items():
        cel = os.path.join(REPO, 'public' + lok)
        os.makedirs(os.path.dirname(cel), exist_ok=True)
        if os.path.exists(cel): continue
        dane = urllib.request.urlopen(urllib.request.Request(src, headers={'User-Agent': 'Mozilla/5.0'}), timeout=30).read()
        im = Image.open(io.BytesIO(dane))
        im = im.convert('RGBA') if im.mode in ('P', 'LA', 'RGBA') else im.convert('RGB')
        if im.width > 1600: im = im.resize((1600, round(im.height * 1600 / im.width)))
        im.save(cel, 'WEBP', quality=82, method=6)
    print('obrazów:', len(OBRAZY))

main()
