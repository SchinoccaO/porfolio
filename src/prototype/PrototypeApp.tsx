// PROTOTYPE (throwaway): picks a design variant from ?v=1|2.
import { useEffect, useState } from 'react';
import 'animate.css/animate.min.css';
import './shared.css';
import VariantScrapbook from './VariantScrapbook';
import VariantFluid from './VariantFluid';

const variants = [
  { id: 1, label: 'Scrapbook', Component: VariantScrapbook },
  { id: 2, label: 'Fluid', Component: VariantFluid },
];

function readVariant(): number {
  const v = Number(new URLSearchParams(window.location.search).get('v'));
  return variants.some((x) => x.id === v) ? v : 1;
}

export default function PrototypeApp() {
  // Render variant 1 on the server/first paint, then sync with the URL.
  const [active, setActive] = useState(1);
  useEffect(() => setActive(readVariant()), []);

  const select = (id: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set('v', String(id));
    window.history.replaceState(null, '', url);
    setActive(id);
    window.scrollTo(0, 0);
  };

  const Current = variants.find((v) => v.id === active)!.Component;

  return (
    <>
      <Current key={active} />
      <nav
        aria-label="Prototype switcher"
        style={{
          position: 'fixed',
          bottom: 12,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          display: 'flex',
          gap: 4,
          padding: 4,
          borderRadius: 999,
          background: '#111',
          border: '1px solid #444',
          font: '500 13px system-ui, sans-serif',
          boxShadow: '0 4px 16px rgba(0,0,0,.35)',
        }}
      >
        {variants.map((v) => (
          <button
            key={v.id}
            onClick={() => select(v.id)}
            aria-pressed={active === v.id}
            style={{
              border: 0,
              borderRadius: 999,
              padding: '8px 14px',
              cursor: 'pointer',
              background: active === v.id ? '#fff' : 'transparent',
              color: active === v.id ? '#111' : '#ddd',
              font: 'inherit',
            }}
          >
            {v.id} · {v.label}
          </button>
        ))}
      </nav>
    </>
  );
}
