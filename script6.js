'use strict';

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* Barre de progression */
(function() {
  const bar = $('#progressBar');
  window.addEventListener('scroll', () => {
    const s = window.scrollY, d = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (d > 0 ? (s / d) * 100 : 0).toFixed(1) + '%';
  }, { passive: true });
})();

/* Bouton retour en haut */
(function() {
  const btn = $('#scrollTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 300);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* Reveal au scroll */
(function() {
  const els = $$('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));

  if (window.innerWidth <= 640) {
    $$('.reveal', $('#sidebar')).forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 100));
  }
})();

/* Barres de langues */
(function() {
  const fills = $$('.lang-fill');
  let done = false;
  function run() {
    if (done) return; done = true;
    fills.forEach((f, i) => setTimeout(() => f.style.width = (f.dataset.width || 0) + '%', i * 150));
  }
  const langBlock = $('.languages-block');
  if (langBlock) {
    const obs = new IntersectionObserver(e => { if (e[0].isIntersecting) { run(); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(langBlock);
  }
  if (window.innerWidth <= 640) setTimeout(run, 600);
})();

/* Timeline décalée */
(function() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      $$('.timeline-item', entry.target).forEach((item, i) => {
        item.style.cssText = 'opacity:0;transform:translateX(-18px);transition:opacity .6s ease,transform .6s ease;transition-delay:' + (i * 0.12) + 's';
        requestAnimationFrame(() => requestAnimationFrame(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        }));
      });
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.1 });
  $$('.section').forEach(s => obs.observe(s));
})();

/* Typewriter titre */
(function() {
  const el = $('.title-tag');
  if (!el) return;
  const txt = 'Ingénieure en informatique';
  let i = 0;
  function type() { if (i < txt.length) { el.textContent += txt[i++]; setTimeout(type, 55); } }
  setTimeout(type, 800);
})();

/* Ripple badges & tags */
(function() {
  $$('.badge, .tag').forEach(b => {
    b.addEventListener('click', e => {
      const r = b.getBoundingClientRect();
      const sz = Math.max(r.width, r.height);
      const rip = document.createElement('span');
      rip.style.cssText =
        'position:absolute;' +
        'width:' + sz + 'px;height:' + sz + 'px;' +
        'left:' + (e.clientX - r.left - sz / 2) + 'px;' +
        'top:' + (e.clientY - r.top - sz / 2) + 'px;' +
        'background:rgba(255,255,255,.35);border-radius:50%;' +
        'transform:scale(0);animation:ripple-anim .5s ease-out forwards;pointer-events:none;';
      b.style.position = 'relative';
      b.style.overflow = 'hidden';
      b.appendChild(rip);
      rip.addEventListener('animationend', () => rip.remove());
    });
  });
})();