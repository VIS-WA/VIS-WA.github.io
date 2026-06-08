/* ============================================================
   site.js — interactions for the static site
   (independent of the React tweaks layer)
   ============================================================ */
(function () {
  const root = document.documentElement;

  /* ---- keep the sticky news ticker pinned just under the nav ---- */
  (function navHeight() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    const set = () => root.style.setProperty('--nav-h', nav.offsetHeight + 'px');
    set();
    window.addEventListener('resize', set);
    if (window.ResizeObserver) new ResizeObserver(set).observe(nav);
  })();

  /* ---- accent hue map (data-accent -> oklch hue) ---- */
  const ACCENT_HUE = { blue: 248, teal: 195, violet: 292, green: 150, amber: 70 };
  function applyAccent(name) {
    const h = ACCENT_HUE[name] != null ? ACCENT_HUE[name] : ACCENT_HUE.blue;
    root.style.setProperty('--ah', h);
  }
  // expose for the tweaks layer
  window.__applyAccent = applyAccent;
  applyAccent(root.getAttribute('data-accent') || 'blue');

  /* ---- theme: persist + toggle ---- */
  const THEME_KEY = 'svk-theme';
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) root.setAttribute('data-theme', saved);
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      root.setAttribute('data-theme', 'dark');
    }
  } catch (e) {}

  const themeBtn = document.getElementById('themeBtn');
  function setTheme(mode) {
    root.setAttribute('data-theme', mode);
    try { localStorage.setItem(THEME_KEY, mode); } catch (e) {}
    window.dispatchEvent(new CustomEvent('svk-theme', { detail: mode }));
  }
  window.__setTheme = setTheme;
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  /* ---- mobile nav ---- */
  const burger = document.getElementById('navBurger');
  const navLinks = document.getElementById('navLinks');
  if (burger && navLinks) {
    burger.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => navLinks.classList.remove('open')));
  }

  /* ---- email assembly (anti-scrape; NUS address, +tag tracks the source) ---- */
  // Parts kept split so scrapers can't lift a literal address from the source.
  const eUser = 'viswanadh', eDom = 'u.nus.edu';
  const eShown = eUser + ' [at] ' + eDom;   // human-readable (domain dots kept), scraper-resistant
  const eSend  = eUser + '+web@' + eDom;                              // +web = "came from the website"
  const el = document.getElementById('emailLink');
  if (el) {
    el.setAttribute('href', 'mailto:' + eSend);
    const txt = el.querySelector('.email-text');
    if (txt) txt.textContent = eShown;
  }

  /* ---- render publications from data/publications.js ---- */
  (function renderPublications() {
    const list = document.getElementById('pubsList');
    if (!list || !window.SITE_PUBLICATIONS) return;
    const me = window.SITE_ME || '';
    list.innerHTML = window.SITE_PUBLICATIONS.map((p) => {
      let authors = p.authors || '';
      if (me) authors = authors.split(me).join('<span class="me">' + me + '</span>');
      const links = (p.links || []).map((l) =>
        `<a href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join('');
      const fig = p.img ? `<figure class="pub-fig"><img src="${p.img}" alt="${p.title}" loading="lazy" /></figure>` : '';
      return `<article class="pub reveal">
        <div class="p-year">${p.year}</div>
        <div>
          <span class="p-venue">${p.venue}</span>
          <h3>${p.title}</h3>
          <p class="authors">${authors}</p>
          <div class="p-actions">${links}</div>
          ${fig}
        </div>
      </article>`;
    }).join('');
  })();

  /* ---- render featured posts from data/posts.js ---- */
  (function renderPosts() {
    const list = document.getElementById('postsList');
    if (!list || !window.SITE_POSTS) return;
    const fmtYear = (iso) => (new Date(iso + 'T00:00:00').getFullYear() || iso);
    const items = window.SITE_POSTS.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
    list.innerHTML = items.map((p) =>
      `<article class="pub reveal">
        <div class="p-year">${fmtYear(p.date)}</div>
        <div>
          <span class="p-venue">${p.source}</span>
          <h3>${p.title}</h3>
          ${p.desc ? `<p class="authors">${p.desc}</p>` : ''}
          <div class="p-actions"><a href="${p.href}" target="_blank" rel="noopener">READ ↗</a></div>
        </div>
      </article>`).join('');
  })();

  /* ---- news + ticker from data/news.js ---- */
  function fmtNewsDate(iso) {
    const d = new Date(iso + 'T00:00:00');
    if (isNaN(d)) return iso;
    return d.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  }
  const NEWS = (window.SITE_NEWS || []).slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  (function renderNews() {
    const grid = document.getElementById('newsGrid');
    if (!grid || !NEWS.length) return;
    const now = Date.now();
    const NEW_MS = 100 * 24 * 3600 * 1000;   // ~3 months → "is-new" dot
    grid.innerHTML = NEWS.map((n) => {
      const isNew = (now - new Date(n.date).getTime()) < NEW_MS;
      return `<div class="news-item${isNew ? ' is-new' : ''} reveal">
        <time datetime="${n.date}">${fmtNewsDate(n.date)}</time>
        <p>${n.html}</p>
      </div>`;
    }).join('');
  })();

  (function buildTicker() {
    const track = document.getElementById('tickerTrack');
    const bar = document.getElementById('ticker');
    if (!track || !bar || !NEWS.length) return;
    const now = new Date();
    const yearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
    let recent = NEWS.filter((n) => new Date(n.date) >= yearAgo);
    if (recent.length < 3) recent = NEWS.slice(0, 3);     // never look empty
    const make = () => recent.map((n) =>
      `<span class="ticker-item"><time>${fmtNewsDate(n.date)}</time><span>${n.html}</span></span>`
    ).join('');
    // duplicate the run so the marquee loops seamlessly (-50% translate)
    track.innerHTML = make() + make();
    track.style.setProperty('--marquee-dur', Math.max(24, recent.length * 9) + 's');
    bar.hidden = false;
  })();

  /* ---- CV link: injected via JS so crawlers/scrapers don't index the file,
         while a real visitor sees it in the nav + contact. Clicking downloads
         the PDF directly (relative path, served from the repo). ---- */
  const CV_PDF = 'assets/pdf/Viswanadh_resume.pdf';   // ← your CV PDF in the repo
  (function injectCV() {
    const nav = document.getElementById('navLinks');
    if (nav && !nav.querySelector('[data-cv]')) {
      const a = document.createElement('a');
      a.href = CV_PDF; a.textContent = 'cv';
      a.setAttribute('data-cv', ''); a.setAttribute('rel', 'nofollow');
      a.setAttribute('download', ''); a.setAttribute('target', '_blank');
      a.addEventListener('click', () => nav.classList.remove('open'));
      const contact = nav.querySelector('a[href="#contact"]');
      nav.insertBefore(a, contact || null);
    }
    const socials = document.querySelector('.socials');
    if (socials && !socials.querySelector('[data-cv]')) {
      const a = document.createElement('a');
      a.href = CV_PDF; a.setAttribute('data-cv', ''); a.setAttribute('rel', 'nofollow');
      a.setAttribute('download', ''); a.setAttribute('target', '_blank');
      a.innerHTML = '<span>Curriculum Vitae (PDF)</span><span class="arr">↓</span>';
      socials.insertBefore(a, socials.firstChild);
    }
  })();

  /* ---- hero ambient: a few packets drifting up the grid ---- */
  (function heroAmbient() {
    const amb = document.getElementById('heroAmb');
    if (!amb) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const N = 8;
    for (let i = 0; i < N; i++) {
      const dot = document.createElement('i');
      const left = 50 + Math.random() * 48;          // right-ish, where the grid shows
      const top = 55 + Math.random() * 40;
      const drift = (Math.random() * 2 - 1) * 40;
      dot.style.left = left + '%';
      dot.style.top = top + '%';
      dot.style.setProperty('--tx', drift + 'px');
      dot.style.setProperty('--ty', '-' + (180 + Math.random() * 160) + 'px');
      dot.style.setProperty('--dur', (7 + Math.random() * 6) + 's');
      dot.style.setProperty('--delay', (Math.random() * 7) + 's');
      amb.appendChild(dot);
    }
  })();

  /* ---- "last updated" stamp (auto: reflects the file's last-modified date) ---- */
  (function lastEdited() {
    const el = document.getElementById('lastEdited');
    if (!el) return;
    let d = new Date(document.lastModified);
    if (isNaN(d)) d = new Date();
    el.textContent = 'Last updated · ' +
      d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  })();

  /* ---- scroll reveal (scroll-handler based; works in every iframe) ---- */
  const reveals = Array.from(document.querySelectorAll('.reveal'));
  reveals.forEach((r, i) => {
    r.style.transitionDelay = (Math.min(i % 4, 3) * 55) + 'ms';
  });
  let ticking = false;
  function checkReveals() {
    ticking = false;
    const vh = window.innerHeight;
    for (let i = reveals.length - 1; i >= 0; i--) {
      const r = reveals[i];
      if (r.getBoundingClientRect().top < vh * 0.92) {
        r.classList.add('in');
        reveals.splice(i, 1);
      }
    }
    if (reveals.length === 0) {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    }
  }
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(checkReveals); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  checkReveals();
  // safety: ensure nothing stays hidden if layout settles late
  setTimeout(checkReveals, 300);
})();
