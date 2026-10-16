# Weryfikacja portu stron: widoczna treść starej strony (bez menu, stopki,
# pasa WiseGroup i sekcji z formularzem) vs wyrenderowana nowa strona
# (bez nawigacji, stopki, banera zgód i modułu kontaktowego).
#   python3 -I docs/_migracja/strony-webflow-weryfikacja.py <katalog z HTML> <repo>
import sys, os, re, json, difflib, collections, html as H
from html.parser import HTMLParser
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
WEJ, REPO = sys.argv[1], sys.argv[2]
src = open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'strony-webflow.py'), encoding='utf-8').read()
src = src.split('# ---------- linki ----------')[0].split("WEJ, STARE, REPO = sys.argv[1], sys.argv[2], sys.argv[3]")[1]
exec(src)   # Drzewo, W, znajdz, wszystkie, tekst, czysty, elementy
BLOK = {'p','div','h1','h2','h3','h4','h5','h6','li','ul','ol','section','a','summary','details','figure','blockquote','br','td','th','tr','header','article','span'}
def tekst_b(w, pomin):
    if isinstance(w, str): return w
    if w.tag in POMIN or w.a.get('data-ukryte') == '1' or pomin(w): return ' '
    s = ''.join(tekst_b(x, pomin) for x in w.dzieci)
    return f' {s} ' if w.tag in BLOK else s
def slowa(t):
    t = ZWJ.sub('', H.unescape(t)).replace('\xa0', ' ')
    t = re.sub(r'[„”“"«»]', '"', t).replace('’', "'")
    return [x for x in re.split(r'\s+', t) if x]
def stare(plik):
    d = Drzewo(); d.feed(open(plik, encoding='utf-8').read())
    m = znajdz(d.korzen, lambda x: x.tag == 'main')
    if m: kand = elementy(m)
    else:
        body = znajdz(d.korzen, lambda x: x.tag == 'body')
        kand = [x for x in elementy(body) if not re.search(r'navbar|w-nav\b|footer', x.cls)]
    out = []
    for s in kand:
        if s.tag in ('nav', 'footer'): continue
        if 'section_laczy_nas' in s.cls and len(czysty(tekst(s)).split()) < 30: continue
        if wszystkie(s, lambda x: x.tag == 'form' and x.a.get('data-ukryte') != '1'): continue
        out += slowa(tekst_b(s, lambda x: False))
    return out
def nowe(plik):
    d = Drzewo(); d.feed(open(plik, encoding='utf-8').read())
    body = znajdz(d.korzen, lambda x: x.tag == 'body')
    pomin = lambda x: x.tag in ('nav', 'footer', 'header') or x.a.get('id') == 'kontakt' or 'data-zgody' in x.a or 'gc-sek' in x.cls or re.search(r'\bsG|stopka|nav-', x.cls or '') is not None
    return slowa(tekst_b(body, pomin))
wynik = {}
for plik in sorted(f for f in os.listdir(WEJ) if f.endswith('.html')):
    adres = '/' + plik[:-5].replace('__', '/')
    a, b = stare(os.path.join(WEJ, plik)), nowe(os.path.join(REPO, 'dist' + adres, 'index.html'))
    sm = difflib.SequenceMatcher(None, a, b, autojunk=False)
    brak = collections.Counter(a) - collections.Counter(b)
    nadm = collections.Counter(b) - collections.Counter(a)
    wynik[adres] = {'stare': len(a), 'nowe': len(b), 'zgodnosc': round(sm.ratio(), 4), 'brakuje': sum(brak.values()), 'nadmiar': sum(nadm.values()),
                    'brak_slowa': brak.most_common(25), 'nadm_slowa': nadm.most_common(25),
                    'rozne': [(op, ' '.join(a[i1:i2])[:160], ' '.join(b[j1:j2])[:160]) for op, i1, i2, j1, j2 in sm.get_opcodes() if op != 'equal'][:12]}
    w = wynik[adres]
    print(f"{adres:62} słów {w['stare']:>5} → {w['nowe']:>5}  kolejność {w['zgodnosc']:.3f}  brakuje {w['brakuje']:>3}  nadmiar {w['nadmiar']:>3}")
json.dump(wynik, open(os.path.join(WEJ, '..', 'weryfikacja-stron.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
