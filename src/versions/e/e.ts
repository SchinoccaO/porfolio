// Scroll reveals, light hero parallax and mobile menu. Only toggles classes and CSS variables;
// CSS animates transform/opacity. Everything degrades to a static page.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---- reveals ----
const targets = Array.from(document.querySelectorAll<HTMLElement>('.e-reveal, .e-path'));
if (reduce || !('IntersectionObserver' in window)) {
  targets.forEach((t) => t.classList.add('is-in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  );
  targets.forEach((t) => io.observe(t));
}

// ---- parallax (photo only) ----
if (!reduce) {
  const px = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
    for (const el of px) {
      const r = el.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) continue;
      const k = parseFloat(el.dataset.parallax || '0');
      el.style.setProperty('--py', `${((r.top + r.height / 2 - vh / 2) * k).toFixed(1)}px`);
    }
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
}

// ---- mobile menu ----
const top = document.querySelector<HTMLElement>('[data-e-top]');
const toggle = document.querySelector<HTMLButtonElement>('[data-e-toggle]');
if (top && toggle) {
  const setOpen = (open: boolean) => {
    top.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('e-menu-open', open);
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  top.querySelectorAll('nav a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') setOpen(false); });
}

// ---- sticky CTA: shown once the hero CTA has scrolled above the viewport, hidden near the contact section ----
const sticky = document.querySelector<HTMLElement>('[data-e-sticky]');
const heroCta = document.querySelector<HTMLElement>('[data-e-hero-cta]');
const contact = document.getElementById('contacto');
if (sticky && heroCta && contact && 'IntersectionObserver' in window) {
  let pastHero = false;
  let atContact = false;
  const render = () => {
    const on = pastHero && !atContact;
    sticky.classList.toggle('is-on', on);
    if (on) sticky.removeAttribute('tabindex');
    else sticky.setAttribute('tabindex', '-1');
    sticky.setAttribute('aria-hidden', String(!on));
  };
  new IntersectionObserver(([en]) => {
    // Past the hero only when the CTA is out of view AND above the viewport (user scrolled down).
    pastHero = !en.isIntersecting && en.boundingClientRect.bottom < 0;
    render();
  }).observe(heroCta);
  new IntersectionObserver(([en]) => { atContact = en.isIntersecting; render(); }, { threshold: 0.15 }).observe(contact);
  render();
}

// ---- form: no backend yet ----
document.querySelectorAll('form[data-e-form]').forEach((f) => f.addEventListener('submit', (ev) => ev.preventDefault()));
