# -*- coding: utf-8 -*-
"""Ponowna konwersja bloga z letsautomate.pl (Webflow) do markdownu, 1:1.

Użycie: python3 -I konwertuj.py <katalog z posts/*.html> <src/content/artykuly> [--zapisz]

Front matter zostaje z istniejących plików (tytuł, kategoria, data, obraz,
powiązane). Podmieniana jest tylko treść pod front matterem.

Różnice względem pierwszej migracji (08.09.2026):
· białe znaki na granicach <strong>/<em>/<a> wychodzą poza znaczniki, zamiast
  być obcinane — stąd brały się sklejone słowa („ZapieriMake”)
· poziomy nagłówków jak w oryginale (h2/h3/h4/h5), bez normalizacji
· linki wewnętrzne zostają pod starymi adresami (/post/<slug>, /blog,
  podstrony działowe); przepisane są tylko te, których nowy serwis nie ma
"""
import sys, os, re, html as H
from html.parser import HTMLParser

LIVE, REPO = sys.argv[1], sys.argv[2]
ZAPISZ = '--zapisz' in sys.argv

# ---- linki -----------------------------------------------------------------
# Stare adresy, których nowy serwis nie ma i które nie mają przekierowania.
# Reszta linków wewnętrznych zostaje bez zmian, bo strony stoją pod tymi
# samymi adresami (/post/*, /blog, sześć podstron działowych, konsultacja).
MAPA = {
    '/automatyzacja-ofertowania-case-study': '/inspiracje',
    '/zautomatyzowany-dzial-sprzedazy': '/systemy-procesowe',
}
ISTNIEJA = {
    '/', '/blog', '/darmowa-konsultacja',
    '/automatyzacja-oraz-ai-w-nietypowych-procesach', '/automatyzacja-w-dashboardach-i-danych',
    '/automatyzacja-w-obsludze-klienta', '/automatyzacja-w-rekrutacji-oraz-hr',
    '/automatyzacja-w-sprzedazy-i-marketingu', '/automatyzacja-w-administracji',
}
NIEZNANE = set()

def link(u):
    u = H.unescape(u).strip()
    if not u or u.startswith('#'):
        return None
    m = re.match(r'^(?:https?://(?:www\.)?letsautomate\.pl)?(/[^?#]*)?([?#].*)?$', u)
    if m and (u.startswith('/') or 'letsautomate.pl' in u):
        sciezka = (m.group(1) or '/').rstrip('/') or '/'
        if sciezka.startswith('/post/'):
            return sciezka
        if sciezka in MAPA:
            return MAPA[sciezka]
        if sciezka in ISTNIEJA:
            return sciezka
        NIEZNANE.add(sciezka)
        return sciezka
    return u

# ---- drzewo HTML -------------------------------------------------------------
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
    return None

def tekst(w):
    if isinstance(w, str): return w
    return ''.join(tekst(d) for d in w.dzieci)

# ---- inline ------------------------------------------------------------------
# Treść inline buduję jako listę tokenów: ('t', tekst) albo ('m', id, znacznik,
# 'open'|'close'). Dopiero przy składaniu wiadomo, co stoi obok znacznika,
# więc dopiero wtedy decyduję, czy `**` zadziała w CommonMarku, czy trzeba
# napisać <strong> — inaczej pogrubienie po przecinku nie zamknęłoby się.

ZWJ = re.compile('[​‌‍﻿]')

def esc(s):
    s = s.replace('\\', '\\\\')
    s = re.sub(r'([*_`\[\]~])', r'\\\1', s)
    s = re.sub(r'<(?=[A-Za-z/!?])', r'\\<', s)
    s = re.sub(r'&(?=#?\w+;)', r'\\&', s)
    return s

licznik = [0]
def nowy_id():
    licznik[0] += 1; return licznik[0]

def inline(w, w_naglowku=False):
    """Zwraca listę tokenów dla dzieci węzła."""
    out = []
    for d in w.dzieci:
        if isinstance(d, str):
            t = ZWJ.sub('', d)
            t = re.sub(r'[ \t\r\n]+', ' ', t)
            if t: out.append(['t', t])
            continue
        tag = d.tag
        if tag in ('strong', 'b', 'em', 'i'):
            srodek = inline(d, w_naglowku)
            if w_naglowku and tag in ('strong', 'b'):
                out += srodek; continue
            if not ''.join(x[1] for x in srodek if x[0] == 't').strip():
                out += [x for x in srodek]; continue
            znak = '**' if tag in ('strong', 'b') else '*'
            html = 'strong' if tag in ('strong', 'b') else 'em'
            i = nowy_id()
            out.append(['m', i, znak, 'open', html]); out += srodek; out.append(['m', i, znak, 'close', html])
        elif tag == 'a':
            u = link(d.attrs.get('href', ''))
            srodek = inline(d, w_naglowku)
            if not u:
                out += srodek; continue
            i = nowy_id()
            out.append(['a', i, 'open', u]); out += srodek; out.append(['a', i, 'close', u])
        elif tag == 'br':
            out.append(['raw', '<br>'])
        elif tag == 'sup':
            out.append(['raw', '<sup>']); out += inline(d, w_naglowku); out.append(['raw', '</sup>'])
        elif tag == 'span' or tag == 'div':
            out += inline(d, w_naglowku)
        elif tag == 'img':
            raise ValueError('obraz w treści inline — nieobsłużony')
        else:
            raise ValueError(f'nieobsłużony znacznik inline: {tag}')
    return out

def wypchnij_biale(tok):
    """Spacje z brzegów pogrubienia, kursywy i linku wychodzą na zewnątrz."""
    zmiana = True
    while zmiana:
        zmiana = False
        for k in range(len(tok) - 1):
            a, b = tok[k], tok[k + 1]
            # znacznik otwierający, po nim tekst zaczynający się spacją
            if a[0] in ('m', 'a') and a[-2 if a[0] == 'm' else 2] == 'open' and b[0] == 't' and b[1][:1] == ' ':
                tok[k], tok[k + 1] = ['t', ' '], a
                if b[1][1:]: tok.insert(k + 2, ['t', b[1][1:]])
                zmiana = True; break
            # tekst kończący się spacją, po nim znacznik zamykający
            if b[0] in ('m', 'a') and b[-2 if b[0] == 'm' else 2] == 'close' and a[0] == 't' and a[1][-1:] == ' ':
                tok[k] = b; tok[k + 1] = ['t', ' ']
                if a[1][:-1]: tok.insert(k, ['t', a[1][:-1]])
                zmiana = True; break
    # usuń puste pary (znacznik otwarty i od razu zamknięty)
    wynik = []
    for x in tok:
        if wynik and x[0] in ('m', 'a') and wynik[-1][0] == x[0] and wynik[-1][1] == x[1]:
            wynik.pop(); continue
        wynik.append(x)
    return wynik

PUNKT = re.compile(r'[!-/:-@\[-`{-~‐-‧¡-¿“-‟‘-‛„”“…–—]')

def biale(c): return c == '' or c.isspace()
def interp(c): return bool(c) and bool(PUNKT.match(c))

def zloz(tok):
    """Składa tokeny w markdown, z <strong>/<em> tam, gdzie `**`/`*` by nie zadziałały."""
    tok = wypchnij_biale(tok)
    # Najpierw wersja z gwiazdkami, żeby znać sąsiedztwo każdego znacznika.
    def render(html_ids):
        czesci = []; pozycje = {}
        for x in tok:
            if x[0] == 't':
                czesci.append(esc(x[1]))
            elif x[0] == 'raw':
                czesci.append(x[1])
            elif x[0] == 'm':
                _, i, znak, kier, html = x
                if i in html_ids:
                    czesci.append(f'<{html}>' if kier == 'open' else f'</{html}>')
                else:
                    pozycje[(i, kier)] = (len(''.join(czesci)), len(znak))
                    czesci.append(znak)
            elif x[0] == 'a':
                _, i, kier, u = x
                czesci.append('[' if kier == 'open' else f']({u})')
        return ''.join(czesci), pozycje
    html_ids = set()
    for _ in range(20):
        s, poz = render(html_ids)
        zle = set()
        for (i, kier), (p, n) in poz.items():
            przed = s[p - 1] if p > 0 else ''
            po = s[p + n] if p + n < len(s) else ''
            if kier == 'open':
                # lewostronnie flankujący: po nim nie biały, a jeśli interpunkcja,
                # to przed nim biały albo interpunkcja
                ok = not biale(po) and (not interp(po) or biale(przed) or interp(przed))
                ok = ok and przed != '*' and po != '*'
            else:
                ok = not biale(przed) and (not interp(przed) or biale(po) or interp(po))
                ok = ok and przed != '*' and po != '*'
            if not ok: zle.add(i)
        if not zle - html_ids:
            return s
        html_ids |= zle
    raise RuntimeError('nie da się złożyć inline')

def linia(tok):
    s = zloz(tok).strip()
    s = re.sub(r' {2,}', ' ', s)
    # znaki, które na początku linii zmieniłyby blok
    s = re.sub(r'^(#{1,6})(?=\s|$)', lambda m: '\\' + m.group(1), s)
    s = re.sub(r'^([>+\-])(?=\s)', r'\\\1', s)
    s = re.sub(r'^(\d+)([.)])(?=\s)', r'\1\\\2', s)
    return s

# ---- bloki -------------------------------------------------------------------
def figura(w, obrazy, slug):
    iframe = znajdz(w, lambda x: x.tag == 'iframe')
    if iframe:
        yt = re.search(r'youtube\.com/embed/([\w-]+)', iframe.attrs.get('src', ''))
        if not yt: raise ValueError('iframe spoza YouTube')
        return (f'<div class="film"><iframe src="https://www.youtube-nocookie.com/embed/{yt.group(1)}"'
                ' title="Nagranie na YouTube" loading="lazy" allowfullscreen></iframe></div>')
    img = znajdz(w, lambda x: x.tag == 'img')
    a = znajdz(w, lambda x: x.tag == 'a')
    lok = obrazy.pop(0)
    alt = img.attrs.get('alt', '') or ''
    styl = w.attrs.get('style', '')
    if '50%' in styl:
        # Logotypy w rankingu narzędzi stały w połowie szerokości kolumny.
        obraz = f'<img src="{lok}" alt="{H.escape(alt)}" loading="lazy" decoding="async">'
        if a: obraz = f'<a href="{H.escape(link(a.attrs["href"]))}" target="_blank" rel="noopener">{obraz}</a>'
        return f'<figure class="obraz-pol">{obraz}</figure>'
    obraz = f'![{esc(alt)}]({lok})'
    if a: obraz = f'[{obraz}]({link(a.attrs["href"])})'
    return obraz

def bloki(korzen, obrazy, slug):
    out = []; poprzedni = None
    for w in korzen.dzieci:
        if isinstance(w, str):
            if ZWJ.sub('', w).strip(): raise ValueError(f'luźny tekst: {w!r}')
            continue
        t = w.tag
        if t == 'p':
            s = linia(inline(w))
            if not re.sub(r'(<br>|\s)+', '', s): continue      # pusty akapit z Webflow
            s = re.sub(r'^(<br>\s*)+|(\s*<br>)+$', '', s)
            out.append(s); poprzedni = 'p'
        elif re.fullmatch(r'h[1-6]', t):
            poziom = max(2, int(t[1]))                       # h1 w treści → h2
            s = linia(inline(w, w_naglowku=True))
            s = re.sub(r'^(<br>\s*)+|(\s*<br>)+$', '', s)
            if not s: continue
            s = re.sub(r'^\\(#{1,6})', r'\1', s)              # w nagłówku # na początku jest bezpieczne
            if s.endswith('#'): s = s[:-1] + '\\#'
            out.append('#' * poziom + ' ' + s); poprzedni = 'h'
        elif t in ('ul', 'ol'):
            if poprzedni == t: out.append('<!-- -->')
            start = w.attrs.get('start') or ''
            n = int(start) if start.isdigit() else 1
            wiersze = []
            for li in w.dzieci:
                if isinstance(li, str):
                    if li.strip(): raise ValueError('tekst w liście')
                    continue
                if li.tag != 'li': raise ValueError(f'{li.tag} w liście')
                if znajdz(li, lambda x: x.tag in ('ul', 'ol', 'p')) is not li and znajdz(li, lambda x: x.tag in ('ul', 'ol', 'p')):
                    raise ValueError('zagnieżdżony blok w punkcie listy')
                s = linia(inline(li))
                s = re.sub(r'^(<br>\s*)+|(\s*<br>)+$', '', s)
                znacznik = f'{n}.' if t == 'ol' else '-'
                wiersze.append(f'{znacznik} {s}'); n += 1
            out.append('\n'.join(wiersze)); poprzedni = t
        elif t == 'figure':
            out.append(figura(w, obrazy, slug)); poprzedni = 'f'
        elif t == 'div' and 'w-embed' in w.attrs.get('class', ''):
            if znajdz(w, lambda x: x.tag == 'hr'): out.append('---'); poprzedni = 'hr'
            else: raise ValueError('nieznany embed')
        elif t == 'blockquote':
            out.append('> ' + linia(inline(w))); poprzedni = 'q'
        else:
            raise ValueError(f'nieobsłużony blok: {t}')
    return '\n\n'.join(out) + '\n'

# ---- pliki -------------------------------------------------------------------
def richtext(s):
    d = Drzewo(); d.feed(s)
    return znajdz(d.korzen, lambda x: x.tag == 'div' and 'w-richtext' in x.attrs.get('class', '').split())

wyniki = {}
for plik in sorted(os.listdir(LIVE)):
    slug = plik[:-5]
    s = open(os.path.join(LIVE, plik), encoding='utf-8').read()
    rt = richtext(s)
    sciezka = os.path.join(REPO, slug + '.md')
    stary = open(sciezka, encoding='utf-8').read()
    m = re.match(r'^(---\n.*?\n---\n)', stary, flags=re.S)
    front = m.group(1)
    obrazy = re.findall(r'!\[[^\]]*\]\(([^)]*)\)', stary[len(front):])
    ile_obrazow = len(obrazy)
    tresc = bloki(rt, obrazy, slug)
    if obrazy: raise ValueError(f'{slug}: zostały nieużyte obrazy {obrazy}')
    nowy = front + '\n' + tresc
    wyniki[slug] = nowy
    if ZAPISZ:
        open(sciezka, 'w', encoding='utf-8').write(nowy)
    print(f'{slug}: {len(tresc.split())} słów, obrazów {ile_obrazow}')

if NIEZNANE: print('NIEZNANE ADRESY:', NIEZNANE)
