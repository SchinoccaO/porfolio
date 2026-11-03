// Reveal slides on scroll and a light transform-only parallax. No-ops under reduced motion.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const els = Array.from(document.querySelectorAll<HTMLElement>('.c-reveal'));
if (!reduce && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('c-anim');
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  );
  els.forEach((el) => io.observe(el));

  const px = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
    for (const el of px) {
      const r = el.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) continue;
      const k = parseFloat(el.dataset.parallax || '0');
      const delta = (r.top + r.height / 2 - vh / 2) * k;
      el.style.setProperty('--py', `${delta.toFixed(1)}px`);
    }
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
}
