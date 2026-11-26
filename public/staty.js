// letsautomate.pl · własne statystyki odwiedzin bez cookies (zapis: /api/hit → baza Neon „lets-staty-db”, Frankfurt).
// Mierzy: wejścia ze źródłem (UTM, fbclid, adres odsyłający), przewinięcie co 10%, gdzie ludzie się zatrzymują
// (sekundy na każdym 5-procentowym pasie strony i w każdej sekcji), kiedy i skąd wychodzą, każde kliknięcie
// (mapa kliknięć, martwe i wściekłe kliknięcia), przyciski i linki, formularze (start, pola, stan pól bez ich treści, próba i wynik wysyłki, porzucenie),
// kopiowanie tekstu, filmy. Stały identyfikator (powroty z innych dni) tylko po zgodzie na statystyki w banerze.
(function () {
  if (navigator.webdriver || /[?&]mapa=1/.test(location.search) || /bot|crawl|spider|headless|lighthouse/i.test(navigator.userAgent)) { window.laStat = function () {}; return; }
  var q = new URLSearchParams(location.search);
  var base = { u: location.pathname, w: window.innerWidth, s: q.get('utm_source') || '', m: q.get('utm_medium') || '', c: q.get('utm_campaign') || '', t: q.get('utm_content') || '' };
  if (q.get('fbclid') && !base.s) base.s = 'fb-klik';
  if (q.get('gclid') && !base.s) base.s = 'google-klik';
  if (q.get('li_fat_id') && !base.s) base.s = 'linkedin-klik';
  function uid() {
    try {
      var z = JSON.parse(localStorage.getItem('consentMode') || 'null');
      if (!z || z.analytics_storage !== 'granted') { localStorage.removeItem('laId'); return ''; }
      var id = localStorage.getItem('laId');
      if (!id) { id = Math.random().toString(36).slice(2, 10) + Date.now().toString(36); localStorage.setItem('laId', id); }
      return id;
    } catch (x) { return ''; }
  }
  function wyslij(e, p, extra) {
    var b = { e: e, u: base.u, w: base.w, s: base.s, m: base.m, c: base.c, t: base.t, i: uid() };
    if (extra) for (var k in extra) b[k] = extra[k];
    if (p) b.p = p;
    var d = JSON.stringify(b);
    try { if (navigator.sendBeacon && navigator.sendBeacon('/api/hit', d)) return; } catch (x) {}
    try { fetch('/api/hit', { method: 'POST', body: d, keepalive: true, headers: { 'Content-Type': 'text/plain' } }); } catch (x) {}
  }
  window.laStat = function (e, p) { wyslij(e, p); };
  var H = function () { return Math.max(document.documentElement.scrollHeight, 1); };
  wyslij('wejscie', { h: H(), vh: window.innerHeight }, { r: document.referrer || '' });

  // ---- przewinięcie co 10% ----
  var maks = 0, progi = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  function proc() { var h = H() - window.innerHeight; return h > 0 ? Math.min(100, Math.round(window.scrollY / h * 100)) : 100; }
  function przewin() { var p = proc(); if (p > maks) maks = p; while (progi.length && maks >= progi[0]) wyslij('przewiniecie', { proc: progi.shift() }); }
  window.addEventListener('scroll', przewin, { passive: true });

  // ---- uwaga: co sekundę (karta widoczna) dopisujemy sekundę pasom strony, które są na ekranie ----
  // pas = 5% wysokości dokumentu; liczymy tylko, gdy od ostatniego przewinięcia minęła ≥1 s (ktoś czyta, nie przelatuje)
  var pasy = {}, sekcjeCzas = {}, ostPrzew = Date.now(), widocznaMs = 0, startWid = document.visibilityState === 'visible' ? Date.now() : 0, ostAkt = Date.now();
  window.addEventListener('scroll', function () { ostPrzew = Date.now(); ostAkt = ostPrzew; }, { passive: true });
  ['mousemove', 'keydown', 'touchstart', 'click'].forEach(function (t) { document.addEventListener(t, function () { ostAkt = Date.now(); }, { passive: true }); });
  var SEK = [];
  setInterval(function () {
    if (document.visibilityState !== 'visible') return;
    var teraz = Date.now();
    if (teraz - ostPrzew < 1000 || teraz - ostAkt > 30000) return; // przewija albo odszedł od komputera
    var h = H(), od = window.scrollY, doo = od + window.innerHeight;
    for (var b = Math.floor(od / h * 20); b <= Math.min(19, Math.floor((doo - 1) / h * 20)); b++) pasy[b * 5] = (pasy[b * 5] || 0) + 1;
    var srodek = od + window.innerHeight / 2;
    for (var i = 0; i < SEK.length; i++) { var r = SEK[i].el.getBoundingClientRect(); var g = r.top + od, d = r.bottom + od; if (srodek >= g && srodek < d) { sekcjeCzas[SEK[i].id] = (sekcjeCzas[SEK[i].id] || 0) + 1; break; } }
  }, 1000);

  // ---- wyjście: kiedy (sekundy) i skąd (pozycja, sekcja na środku ekranu) ----
  var koniec = false;
  function sekcjaTeraz() { var srodek = window.innerHeight / 2; for (var i = 0; i < SEK.length; i++) { var r = SEK[i].el.getBoundingClientRect(); if (r.top <= srodek && r.bottom > srodek) return SEK[i].id; } return ''; }
  function wyjdz() {
    if (startWid) { widocznaMs += Date.now() - startWid; startWid = 0; }
    if (koniec) return; koniec = true;
    wyslij('wyjscie', { sek: Math.round(widocznaMs / 1000), przew: maks, poz: proc(), sekcja: sekcjaTeraz(), h: H() });
    if (Object.keys(pasy).length) wyslij('uwaga', { pasy: pasy, h: H() });
    var sc = {}, n = 0; Object.keys(sekcjeCzas).sort(function (a, b) { return sekcjeCzas[b] - sekcjeCzas[a]; }).forEach(function (k) { if (n++ < 25) sc[k.slice(0, 30)] = sekcjeCzas[k]; });
    if (n) wyslij('czas_sekcji', { s: sc });
  }
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') wyjdz();
    else { startWid = Date.now(); if (koniec) { koniec = false; pasy = {}; sekcjeCzas = {}; widocznaMs = 0; wyslij('powrot_karty', { poz: proc() }); } }
  });
  window.addEventListener('pagehide', wyjdz);

  // ---- sekcje: obejrzane (≥40% na ekranie) ----
  function idSekcji(s, i) {
    if (s.id) return s.id;
    var h = s.querySelector('h1,h2,h3'); var t = h ? h.textContent.replace(/\s+/g, ' ').trim().slice(0, 28) : '';
    return 's' + (i + 1) + (t ? ' ' + t : '');
  }
  function sekcje() {
    var lista = [].slice.call(document.querySelectorAll('main section, body > section, section[id]'));
    lista = lista.filter(function (s, i) { return lista.indexOf(s) === i && s.offsetHeight > 120 && !s.parentElement.closest('section'); });
    SEK = lista.map(function (s, i) { return { el: s, id: idSekcji(s, i) }; });
    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (x) { if (x.isIntersecting) { io.unobserve(x.target); var z = SEK.filter(function (k) { return k.el === x.target; })[0]; if (z) wyslij('sekcja', { id: z.id }); } });
    }, { threshold: 0.4 });
    SEK.forEach(function (k) { io.observe(k.el); });
  }

  // ---- kliknięcia: mapa (x w % szerokości, y w px od góry, wysokość dokumentu), martwe i wściekłe ----
  function opis(el) {
    if (!el || !el.tagName) return '';
    var t = el.tagName.toLowerCase(), c = (el.getAttribute('class') || '').trim().split(/\s+/)[0];
    var txt = (el.getAttribute('aria-label') || el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 40);
    return t + (el.id ? '#' + el.id : '') + (c ? '.' + c : '') + (txt ? ' „' + txt + '”' : '');
  }
  var AKT = 'a,button,label,input,select,textarea,summary,details,[role=button],[onclick],[data-akcja],video,mux-player,iframe';
  var ostatnie = [];
  document.addEventListener('click', function (ev) {
    var W = document.documentElement.clientWidth;
    var akt = ev.target.closest && ev.target.closest(AKT);
    var cel = akt || ev.target;
    var sek = ''; for (var i = 0; i < SEK.length; i++) if (SEK[i].el.contains(ev.target)) { sek = SEK[i].id; break; }
    wyslij('klik', { x: Math.round(ev.pageX / W * 1000) / 10, y: Math.round(ev.pageY), h: H(), el: opis(cel), sek: sek, martwy: akt ? 0 : 1 });
    var teraz = Date.now(); ostatnie = ostatnie.filter(function (k) { return teraz - k.t < 1000 && Math.abs(k.x - ev.pageX) < 30 && Math.abs(k.y - ev.pageY) < 30; });
    ostatnie.push({ t: teraz, x: ev.pageX, y: ev.pageY });
    if (ostatnie.length === 3) wyslij('klik_zlosc', { el: opis(cel), sek: sek });
    if (akt) {
      var href = akt.getAttribute('href') || '', tekst = (akt.textContent || '').replace(/\s+/g, ' ').replace('→', '').trim().slice(0, 60);
      if (/^tel:/.test(href)) wyslij('klik_telefon', { tekst: tekst });
      else if (/^mailto:/.test(href)) wyslij('klik_mail', { tekst: tekst });
      else if (href.charAt(0) === '#' && href.length > 1) wyslij('klik_kotwica', { do: href.slice(1, 60), tekst: tekst, sek: sek });
      else if (/^https?:/.test(href) && href.indexOf(location.host) < 0) wyslij('klik_wyjscie', { do: href.slice(0, 120), tekst: tekst });
      else if (href && href.charAt(0) === '/') wyslij('klik_link', { do: href.split('?')[0].slice(0, 100), tekst: tekst, sek: sek });
      else if (akt.tagName === 'BUTTON' || akt.getAttribute('role') === 'button') wyslij('klik_przycisk', { tekst: tekst, sek: sek });
    }
  }, true);

  // ---- formularze: tylko stan pól, nigdy ich treść ----
  // start (pierwsze kliknięcie w pole), kolejne pola, stan pola po wyjściu z niego (pusty / niepełny / poprawny,
  // długość opisu w przedziałach), próba wysłania i jej wynik (odrzucona przez formularz: które pola i jaki komunikat;
  // wysłana: odpowiedź serwera), a przy zamknięciu strony porzucony formularz (stan pól, ostatnie pole, czas).
  // Wartości pól nie wychodzą poza przeglądarkę. Zgłoszenie zapisuje też serwer (/api/kontakt).
  function nazwaFormularza(f) { return (f.getAttribute('data-zrodlo') || f.id || f.getAttribute('name') || (f.closest('section') && f.closest('section').id) || 'formularz').slice(0, 40); }
  function formOf(el) { return el && (el.form || (el.closest && el.closest('form'))); }
  function nazwaPola(el) { return (el.name || el.id || '').slice(0, 30); }
  function liczone(el) {
    if (!el || !el.tagName || !/^(INPUT|TEXTAREA)$/.test(el.tagName)) return false;
    if (/^(hidden|submit|button|radio|file|password)$/.test(el.type)) return false;
    if (/kontrola|firma_www|honeypot|^hp$/i.test(el.name || '') || el.closest('[aria-hidden="true"]')) return false; // pułapka na boty
    return !!nazwaPola(el);
  }
  function stanPola(el) {
    if (el.type === 'checkbox') return el.checked ? 'zaznaczone' : 'puste';
    var v = String(el.value || '').trim();
    if (!v) return 'puste';
    var n = (el.name || '') + ' ' + (el.id || '') + ' ' + el.type;
    if (/mail/i.test(n) || (/kontakt/i.test(n) && /@/.test(v))) return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? 'poprawny mail' : 'niepełny mail';
    if (/tel|phone/i.test(n) || (/kontakt/i.test(n) && /^[\d\s()+-]+$/.test(v))) { var c = v.replace(/\D/g, '').length; return c >= 9 ? 'poprawny telefon' : 'za krótki telefon'; }
    var d = v.length; return d <= 20 ? 'tekst 1–20' : d <= 100 ? 'tekst 21–100' : 'tekst 100+';
  }
  var FS = []; // stan formularzy na tej stronie
  function stanForm(f) {
    for (var i = 0; i < FS.length; i++) if (FS[i].f === f) return FS[i];
    var z = { f: f, nf: nazwaFormularza(f), pola: [], stany: {}, start: Date.now(), ost: '', proby: 0, wyslany: false, porzucony: false };
    FS.push(z); return z;
  }
  function stanyPol(z) {
    var o = {}, n = 0; [].slice.call(z.f.elements || []).forEach(function (el) { if (liczone(el) && n < 8) { o[nazwaPola(el).slice(0, 20)] = stanPola(el); n++; } }); return o;
  }
  // /api/hit przyjmuje p do 600 znaków: najpierw tniemy komunikaty, potem stany pól
  function zmiesc(p) { if (JSON.stringify(p).length > 560) p.komunikaty = (p.komunikaty || []).slice(0, 1); if (JSON.stringify(p).length > 560) delete p.stany; return p; }
  document.addEventListener('focusin', function (ev) {
    var pole = ev.target, f = formOf(pole);
    if (!f || !liczone(pole) && !/SELECT/.test(pole.tagName || '')) return;
    var z = stanForm(f), np = nazwaPola(pole); if (!np) return;
    if (!f.dataset.laStart) { f.dataset.laStart = '1'; z.start = Date.now(); wyslij('formularz_start', { f: z.nf }); }
    z.ost = np;
    if (z.pola.indexOf(np) < 0) { z.pola.push(np); wyslij('pole', { f: z.nf, pole: np, nr: z.pola.length }); }
  });
  function poWyjsciuZPola(ev) {
    var el = ev.target, f = formOf(el); if (!f || !liczone(el)) return;
    var z = stanForm(f), np = nazwaPola(el), st = stanPola(el);
    if (z.stany[np] === st) return; // bez powtórek, tylko zmiana stanu
    if (z.stany[np] === undefined && st === 'puste') { z.stany[np] = st; return; } // kliknął i wyszedł bez wpisywania: widać po „pole”
    z.stany[np] = st; wyslij('pole_stan', { f: z.nf, pole: np, stan: st });
  }
  document.addEventListener('focusout', poWyjsciuZPola, true);
  document.addEventListener('change', function (ev) { if (ev.target && ev.target.type === 'checkbox') poWyjsciuZPola(ev); }, true);

  // Wysyłka: formularze mają własną walidację (novalidate), więc po kliknięciu „wyślij” patrzymy, czy poszło
  // zapytanie do /api/kontakt. Jeśli nie, formularz odrzucił wysłanie: zapisujemy stan pól i komunikaty (nasze, nie wpisy osoby).
  var ostWysylany = null;
  var _fetch = window.fetch;
  if (_fetch) window.fetch = function (u, o) {
    var url = String(u && u.url || u || ''), z = /\/api\/kontakt/.test(url) ? (ostWysylany || FS[FS.length - 1] || null) : null;
    var r = _fetch.apply(this, arguments);
    if (z) {
      z.wyslany = true; var t0 = Date.now();
      r.then(function (res) { wyslij('formularz_odpowiedz', { f: z.nf, status: res.status, ms: Date.now() - t0 }); },
             function () { wyslij('formularz_odpowiedz', { f: z.nf, status: 'siec', ms: Date.now() - t0 }); });
    }
    return r;
  };
  function komunikaty(f) {
    var out = [];
    [].slice.call(f.querySelectorAll('[aria-invalid="true"], .err, .error, .is-invalid, [class*="-err"], [class*="blad"]')).forEach(function (el) {
      if (out.length >= 3) return;
      var r = el.getBoundingClientRect(); if (r.width < 2 || r.height < 2 || /^(INPUT|TEXTAREA|SELECT|LABEL)$/.test(el.tagName) || el.querySelector('input,textarea,select,label')) return; // sam komunikat, bez pola i etykiety
      var t = (el.textContent || '').replace(/\s+/g, ' ').trim();
      if (t && t.length <= 80 && out.indexOf(t) < 0 && !/@|\d{6,}/.test(t)) out.push(t.slice(0, 60));
    });
    return out;
  }
  document.addEventListener('submit', function (ev) {
    var f = ev.target; if (!f || f.tagName !== 'FORM') return;
    var z = stanForm(f); z.proby++; ostWysylany = z;
    var przed = z.wyslany;
    wyslij('formularz_wyslij', { f: z.nf, pola: z.pola.length, proba: z.proby });
    setTimeout(function () {
      if (z.wyslany && !przed) return; // zapytanie poszło, wynik przyjdzie w „formularz_odpowiedz”
      var st = stanyPol(z), zle = Object.keys(st).filter(function (k) { return !/^poprawny|^zaznaczone|^tekst/.test(st[k]); });
      var el = f.querySelector('[aria-invalid="true"]');
      wyslij('formularz_odrzucony', zmiesc({ f: z.nf, proba: z.proby, zle: zle.slice(0, 6), stany: st, komunikaty: komunikaty(f), fokus: el ? nazwaPola(el) : '' }));
    }, 700);
  }, true);
  document.addEventListener('invalid', function (ev) { var p = ev.target; if (p && p.form) wyslij('pole_blad', { f: nazwaFormularza(p.form), pole: nazwaPola(p) }); }, true);
  // Porzucony: przy zamknięciu albo schowaniu strony, gdy formularz był zaczęty i nic nie poszło.
  function porzucone() {
    FS.forEach(function (z) {
      if (z.wyslany || z.porzucony || !(z.f.dataset.laStart || z.proby || Object.keys(z.stany).length)) return;
      z.porzucony = true;
      wyslij('formularz_porzucony', zmiesc({ f: z.nf, stany: stanyPol(z), ostatnie: z.ost, sek: Math.round((Date.now() - z.start) / 1000), proby: z.proby }));
    });
  }
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') porzucone(); });
  window.addEventListener('pagehide', porzucone);

  // ---- kopiowanie (np. maila, telefonu) i filmy ----
  document.addEventListener('copy', function () { var t = String(window.getSelection() || '').trim(); wyslij('kopiowanie', { dl: t.length, co: /@/.test(t) ? 'mail' : /\d{3}.?\d{3}.?\d{3}/.test(t) ? 'telefon' : 'tekst' }); });
  var filmy = new WeakMap();
  function film(ev) {
    var v = ev.target; if (!v || !v.tagName) return;
    var t = v.tagName.toLowerCase(); if (t !== 'mux-player' && t !== 'video') return;
    if (v.muted && v.autoplay) return; // tło bez dźwięku
    var st = filmy.get(v); if (!st) { st = { start: false, pr: [25, 50, 75, 95] }; filmy.set(v, st); }
    var nazwa = (v.getAttribute('metadata-video-title') || v.getAttribute('title') || v.getAttribute('playback-id') || v.currentSrc || '').slice(-40);
    if (ev.type === 'play' && !st.start) { st.start = true; wyslij('film_start', { film: nazwa }); }
    if (ev.type === 'timeupdate' && v.duration) { var p = Math.round(v.currentTime / v.duration * 100); while (st.pr.length && p >= st.pr[0]) wyslij('film_postep', { film: nazwa, proc: st.pr.shift() }); }
  }
  document.addEventListener('play', film, true);
  document.addEventListener('timeupdate', film, true);

  function start() { sekcje(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
