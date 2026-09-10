import json, os, re, html as H
d=json.load(open('gotowe.json')); imgmap=json.load(open('img-map.json'))
OUT='/Users/szymonkita/next-lets/src/content/artykuly'
RECZNIE={'jakie-sygnaly-swiadcza-o-tym-ze-warto-zautomatyzowac-proces':'podstawy'}
POWIAZANE={
 'podstawy':[('Strategia transformacji AI','/strategia-ai'),('Bezpłatna diagnoza','/darmowa-konsultacja')],
 'firma':[('Strategia transformacji AI','/strategia-ai'),('Bezpłatna diagnoza','/darmowa-konsultacja')],
 'poradniki':[('Automatyzacje i integracje','/automatyzacje-integracje'),('Inspiracje — co budujemy','/inspiracje')],
 'sprzedaz':[('Systemy dla kluczowych procesów','/systemy-procesowe'),('Automatyzacje i integracje','/automatyzacje-integracje')],
 'marketing':[('Automatyzacje i integracje','/automatyzacje-integracje'),('Indywidualne rozwiązania AI','/rozwiazania-ai')],
 'obsluga-klienta':[('Systemy dla Waszych klientów','/systemy-dla-klientow'),('Indywidualne rozwiązania AI','/rozwiazania-ai')],
 'narzedzia':[('Systemy dla kluczowych procesów','/systemy-procesowe'),('Guided Coding','/guided-coding')],
}
def y(s): return '"' + s.replace('\\','\\\\').replace('"','\\"') + '"'
bodies=json.load(open('bodies.json'))
def slowa(t): return len(re.findall(r'\w+', t, re.U))

n=0; braki=[]
for w in d['wpisy']:
    slug=w['slug']; kat=RECZNIE.get(slug, w['kat'])
    tytul=w['tytul'].strip()
    if tytul.endswith('.') and not tytul.endswith('..'): tytul=tytul[:-1]
    lead=re.sub(r'\s+',' ',w['lead']).strip()
    md=w['md']
    for stara,nowa in imgmap.items():
        md=md.replace('/uploads/blog/'+stara,'/uploads/blog/'+nowa)
    hero='/uploads/blog/'+imgmap.get(os.path.basename(w['hero']), os.path.basename(w['hero'])) if w['hero'] else None
    # kontrola kompletności: ile słów źródła nie trafiło do markdownu
    zrodlo=slowa(H.unescape(re.sub(r'<[^>]+>',' ',bodies[slug])))
    wynik=slowa(md)
    if wynik < zrodlo*0.95: braki.append((slug, zrodlo, wynik))
    pw='\n'.join(f'  - {{ t: {y(t)}, h: "{h}" }}' for t,h in POWIAZANE[kat])
    fm=['---',f'tytul: {y(tytul)}',f'lead: {y(lead)}',f'data: {w["data"]}',f'kategoria: {kat}',"autor: \"Zespół Let's automate\""]
    if hero: fm+=[f'obraz: "{hero}"', f'obrazAlt: {y(tytul)}']
    fm+=['powiazane:',pw,'---','']
    open(os.path.join(OUT,slug+'.md'),'w',encoding='utf-8').write('\n'.join(fm)+'\n'+md+'\n')
    n+=1
print('zapisane:',n)
print('wpisy z ubytkiem treści >5%:')
for s,z,wy in braki: print(f'  {s}: źródło {z} słów → markdown {wy}')
