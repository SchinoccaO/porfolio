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
    sticky.querySelector('a')?.setAttribute('tabindex', on ? '0' : '-1');
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

// ---- contact form: POST to the Cloudflare Pages Function ----
document.querySelectorAll<HTMLFormElement>('form[data-e-form]').forEach((form) => {
  const msg = form.querySelector<HTMLElement>('[data-e-msg]')!;
  const btn = form.querySelector<HTMLButtonElement>('button[type=submit]')!;
  const label = btn.querySelector<HTMLElement>('[data-e-label]')!;
  // Fields appear one step at a time; Send unlocks only when email, type and message are valid.
  const emailEl = form.querySelector<HTMLInputElement>('input[name=email]')!;
  const typeEl = form.querySelector<HTMLSelectElement>('select[name=type]')!;
  const problemEl = form.querySelector<HTMLTextAreaElement>('textarea[name=problem]')!;
  const stepRest = form.querySelector<HTMLElement>('[data-e-more]')!;
  const emailOk = () => /^\S+@\S+\.\S+$/.test(emailEl.value);
  // Send unlocks only once the message has a minimum length; the counter tells the visitor why.
  const countEl = form.querySelector<HTMLElement>('[data-e-count]')!;
  const min = Number(countEl.dataset.min);
  const complete = () => emailOk() && typeEl.value !== '' && problemEl.value.trim().length >= min;
  const sync = () => {
    if (emailOk() && typeEl.value !== '') stepRest.classList.add('is-open');
    const len = problemEl.value.trim().length;
    countEl.textContent = len >= min
      ? countEl.dataset.done ?? ''
      : (countEl.dataset.more ?? '').replace('{n}', String(min)).replace('{left}', String(min - len));
    btn.disabled = !complete();
  };
  form.addEventListener('input', sync);
  form.addEventListener('change', sync);
  const show = (kind: 'ok' | 'error' | 'invalid') => {
    msg.textContent = msg.dataset[kind] ?? '';
    msg.dataset.state = kind;
  };
  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    if (!/^\S+@\S+\.\S+$/.test(data.email ?? '') || !(data.problem ?? '').trim()) return show('invalid');
    btn.disabled = true;
    label.textContent = btn.dataset.sending ?? '';
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      sync();
      show('ok');
    } catch {
      show('error');
    } finally {
      btn.disabled = !complete();
      label.textContent = btn.dataset.label ?? '';
    }
  });
});

// ---- AI details: closing from the bottom keeps the toggle reachable ----
document.querySelectorAll('.e-ai__close').forEach((b) => b.addEventListener('click', () => {
  const d = b.closest('details');
  if (!d) return;
  d.open = false;
  d.scrollIntoView({ block: 'center', behavior: 'smooth' });
}));

// ---- MotoFIX mock: tapping a pill types its word into the search field ----
const mfField = document.querySelector<HTMLElement>('.mf-search__field');
const mfTyped = mfField?.querySelector<HTMLElement>('.mf-typed');
if (mfField && mfTyped) {
  let timer = 0;
  document.querySelectorAll<HTMLButtonElement>('[data-mf-chip]').forEach((chip) => chip.addEventListener('click', () => {
    const word = chip.textContent?.trim() ?? '';
    window.clearInterval(timer);
    mfField.classList.add('is-filled');
    mfTyped.textContent = '';
    document.querySelectorAll('[data-mf-chip]').forEach((c) => c.classList.toggle('is-on', c === chip));
    let i = 0;
    timer = window.setInterval(() => {
      i += 1;
      mfTyped.textContent = word.slice(0, i);
      if (i >= word.length) window.clearInterval(timer);
    }, 70);
  }));
}
