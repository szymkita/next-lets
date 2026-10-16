# Weryfikacja: wyrenderowany dist/post/<slug>/index.html vs żywy wpis z Webflow.
import sys, os, re, json, collections, html as H
from html.parser import HTMLParser

LIVE, DIST, OUT = sys.argv[1], sys.argv[2], sys.argv[3]

VOID = {'img', 'br', 'hr', 'meta', 'link', 'input', 'source', 'wbr'}
class Wezel:
    def __init__(self, tag, attrs=None, rodzic=None):
        self.tag, self.attrs, self.rodzic, self.dzieci = tag, dict(attrs or []), rodzic, []
class Drzewo(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.korzen = Wezel('#root'); self.biezacy = self.korzen
    def handle_starttag(self, t, a):
        w = Wezel(t, a, self.biezacy); self.biezacy.dzieci.append(w)
        if t not in VOID: self.biezacy = w
    def handle_startendtag(self, t, a):
        self.biezacy.dzieci.append(Wezel(t, a, self.biezacy))
    def handle_endtag(self, t):
        w = self.biezacy
        while w is not self.korzen and w.tag != t: w = w.rodzic
        if w is not self.korzen: self.biezacy = w.rodzic
    def handle_data(self, d):
        self.biezacy.dzieci.append(d)

def znajdz(w, pred):
    if isinstance(w, str): return None
    if pred(w): return w
    for d in w.dzieci:
        r = znajdz(d, pred)
        if r: return r
def wszystkie(w, pred, out=None):
    out = [] if out is None else out
    if isinstance(w, str): return out
    if pred(w): out.append(w)
    for d in w.dzieci: wszystkie(d, pred, out)
    return out
def tekst(w):
    return w if isinstance(w, str) else ''.join(tekst(d) for d in w.dzieci)
def w_naglowku(w):
    while w is not None:
        if isinstance(w, Wezel) and re.fullmatch(r'h[1-6]', w.tag): return True
        w = w.rodzic
    return False

BLOK = {'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'ul', 'ol', 'div', 'figure', 'blockquote', 'br', 'hr'}
def tekst_blokowy(w):
    if isinstance(w, str): return w
    s = ''.join(tekst_blokowy(d) for d in w.dzieci)
    return f' {s} ' if w.tag in BLOK else s

def norm(s):
    s = re.sub('[​‌‍﻿]', '', s).replace('\xa0', ' ')
    return re.sub(r'\s+', ' ', s).strip()

MAPA = {'/automatyzacja-ofertowania-case-study': '/inspiracje', '/zautomatyzowany-dzial-sprzedazy': '/systemy-procesowe'}
def mapuj(u):
    u = H.unescape(u).strip()
    if not u or u.startswith('#'): return None
    m = re.match(r'^(?:https?://(?:www\.)?letsautomate\.pl)?(/[^?#]*)?([?#].*)?$', u)
    if m and (u.startswith('/') or 'letsautomate.pl' in u):
        sc = (m.group(1) or '/').rstrip('/') or '/'
        return MAPA.get(sc, sc)
    return u

def opis(korzen):
    d = {}
    d['slowa'] = norm(tekst_blokowy(korzen)).split(' ')
    d['naglowki'] = [(min(max(int(h.tag[1]), 2), 6), norm(tekst(h))) for h in wszystkie(korzen, lambda x: re.fullmatch(r'h[1-6]', x.tag) is not None)]
    d['naglowki'] = [x for x in d['naglowki'] if x[1]]
    d['bold'] = sorted(norm(tekst(x)) for x in wszystkie(korzen, lambda x: x.tag in ('strong', 'b')) if not w_naglowku(x) and norm(tekst(x)))
    d['em'] = sorted(norm(tekst(x)) for x in wszystkie(korzen, lambda x: x.tag in ('em', 'i')) if norm(tekst(x)))
    linki = []
    for a in wszystkie(korzen, lambda x: x.tag == 'a'):
        u = mapuj(a.attrs.get('href', ''))
        if u: linki.append((norm(tekst(a)), u))
    d['linki'] = linki
    d['obrazy'] = [(i.attrs.get('alt') or '') for i in wszystkie(korzen, lambda x: x.tag == 'img')]
    d['filmy'] = [re.search(r'embed/([\w-]+)', f.attrs.get('src', '')).group(1) for f in wszystkie(korzen, lambda x: x.tag == 'iframe')]
    d['listy'] = [(l.tag, len([c for c in l.dzieci if isinstance(c, Wezel) and c.tag == 'li'])) for l in wszystkie(korzen, lambda x: x.tag in ('ul', 'ol'))]
    d['hr'] = len(wszystkie(korzen, lambda x: x.tag == 'hr'))
    d['h2_tekst'] = [tekst(h) for h in wszystkie(korzen, lambda x: x.tag == 'h2')]
    d['h2_id'] = [h.attrs.get('id') for h in wszystkie(korzen, lambda x: x.tag == 'h2')]
    return d

wynik = {}; bledy = collections.Counter()
for plik in sorted(os.listdir(LIVE)):
    slug = plik[:-5]
    dl = Drzewo(); dl.feed(open(os.path.join(LIVE, plik), encoding='utf-8').read())
    rt = znajdz(dl.korzen, lambda x: x.tag == 'div' and 'w-richtext' in x.attrs.get('class', '').split())
    dd = Drzewo(); dd.feed(open(os.path.join(DIST, slug, 'index.html'), encoding='utf-8').read())
    pr = znajdz(dd.korzen, lambda x: x.tag == 'div' and 'proza' in x.attrs.get('class', '').split())
    L, R = opis(rt), opis(pr)
    r = {}
    for k in ('slowa', 'naglowki', 'bold', 'em', 'linki', 'obrazy', 'filmy', 'listy', 'hr'):
        if L[k] != R[k]:
            r[k] = True; bledy[k] += 1
    # tytuł strony i nagłówek h1
    h1 = norm(tekst(znajdz(dd.korzen, lambda x: x.tag == 'h1')))
    h1l = norm(tekst(znajdz(dl.korzen, lambda x: x.tag == 'h1' and 'text-388' in x.attrs.get('class', ''))))
    wynik[slug] = {'roznice': list(r), 'live': L, 'repo': R, 'h1': [h1l, h1]}
    if h1 != h1l: bledy['h1'] += 1
    # odpowiedni tekst h2 z żywej strony do policzenia kotwic w node
json.dump(wynik, open(OUT, 'w', encoding='utf-8'), ensure_ascii=False)
print('wpisów:', len(wynik), '| rozbieżności wg rodzaju:', dict(bledy))
for s, w in wynik.items():
    if w['roznice']: print(' ', s, w['roznice'])
