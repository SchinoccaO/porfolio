// Scroll reveals + form no-op. Only toggles classes; CSS animates transform/opacity/stroke.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const targets = Array.from(
  document.querySelectorAll<HTMLElement>('.b-reveal, .b-path, .b-statement, .b-hero'),
);
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
document
  .querySelectorAll('form[data-b-form]')
  .forEach((f) => f.addEventListener('submit', (ev) => ev.preventDefault()));
