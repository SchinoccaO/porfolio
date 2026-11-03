// PROTOTYPE (throwaway): picks a design variant from ?v=1|2|3.
import { useEffect, useState } from 'react';
import VariantTechnical from './VariantTechnical';
import VariantEditorial from './VariantEditorial';
import VariantPlayful from './VariantPlayful';

const variants = [
  { id: 1, label: 'Técnico', Component: VariantTechnical },
  { id: 2, label: 'Editorial', Component: VariantEditorial },
  { id: 3, label: 'Juguetón', Component: VariantPlayful },
];

function readVariant(): number {
  const v = Number(new URLSearchParams(window.location.search).get('v'));
  return v >= 1 && v <= 3 ? v : 1;
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
      <Current />
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
