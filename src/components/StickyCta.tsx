import { useEffect, useState } from 'react';
import { site } from '../content/site';

/** Mobile bottom bar with the main CTA: hidden while the hero CTA is on screen and over the contact section. */
export default function StickyCta() {
  const [heroVisible, setHeroVisible] = useState(true);
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('.hero__cta');
    const contact = document.getElementById('contacto');
    if (!hero || !contact || typeof IntersectionObserver === 'undefined') return;
    const a = new IntersectionObserver(([e]) => setHeroVisible(e.isIntersecting));
    const b = new IntersectionObserver(([e]) => setAtContact(e.isIntersecting), { threshold: 0.25 });
    a.observe(hero);
    b.observe(contact);
    return () => {
      a.disconnect();
      b.disconnect();
    };
  }, []);

  const show = !heroVisible && !atContact;
  return (
    <div className={`sticky-cta${show ? ' is-on' : ''}`} aria-hidden={!show || undefined}>
      <a className="btn btn--ink btn--xl" href={site.hero.cta.href} tabIndex={show ? 0 : -1}>
        {site.hero.cta.label}
        <span aria-hidden="true" className="btn__arrow">→</span>
      </a>
    </div>
  );
}
