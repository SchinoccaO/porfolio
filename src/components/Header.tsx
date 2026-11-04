import { useEffect, useState } from 'react';
import { site } from '../content/site';

/** Sticky top bar. Mobile: brand + menu button opening a full-screen panel. Desktop: inline links + CTA. */
// Section ids must match the sections in SiteApp. Labels come from the content file.
const NAV = [
  { id: 'que-te-doy', label: site.offer.title },
  { id: 'servicios', label: site.services.title },
  { id: 'motofix', label: site.motofix.title },
  { id: 'sobre-mi', label: site.about.title },
  { id: 'contacto', label: site.contact.title },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('menu-open');
    };
  }, [open]);

  return (
    <header className="top">
      <a className="top__brand" href="#top" onClick={() => setOpen(false)}>
        <span className="top__name">{site.name}</span>
      </a>
      <button
        type="button"
        className="top__burger"
        aria-expanded={open}
        aria-controls="menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="top__burger-label">{open ? 'Cerrar' : 'Menú'}</span>
        <span className="top__burger-bars" aria-hidden="true" />
      </button>
      <nav id="menu" className={`top__nav${open ? ' is-open' : ''}`} aria-label="Secciones">
        <ul>
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} onClick={() => setOpen(false)}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="btn btn--lemon top__cta" href={site.hero.cta.href} onClick={() => setOpen(false)}>
          {site.hero.cta.label}
        </a>
      </nav>
    </header>
  );
}
