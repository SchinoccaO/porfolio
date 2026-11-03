import { useEffect, useRef } from 'react';
import { site } from '../../content/site';

export function burstPoints(n: number, ro: number, ri: number) {
  const pts: string[] = [];
  for (let i = 0; i < n * 2; i++) {
    const r = i % 2 === 0 ? ro : ri;
    const a = (Math.PI * i) / n - Math.PI / 2;
    pts.push(`${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`);
  }
  return pts.join(' ');
}

const BURST = burstPoints(14, 49, 36);
const BARS = [0.5, 0.9, 0.35, 1, 0.65, 0.8, 0.4, 0.95, 0.55];

export default function Hero() {
  const h = site.hero;
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!fine.matches || calm.matches) return;
    let raf = 0;
    const host = el.parentElement!;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
        const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
        el.style.setProperty('--tx', Math.max(-1, Math.min(1, x)).toFixed(3));
        el.style.setProperty('--ty', Math.max(-1, Math.min(1, y)).toFixed(3));
      });
    };
    const leave = () => {
      el.style.setProperty('--tx', '0');
      el.style.setProperty('--ty', '0');
    };
    host.addEventListener('pointermove', move);
    host.addEventListener('pointerleave', leave);
    return () => {
      cancelAnimationFrame(raf);
      host.removeEventListener('pointermove', move);
      host.removeEventListener('pointerleave', leave);
    };
  }, []);

  const [before, after] = h.title.split(h.scribbleWord);

  return (
    <header className="d-hero">
      <div className="d-top">
        <a className="d-top__handle" href="#contacto">{site.handle}</a>
        <nav className="d-top__nav" aria-label="Secciones">
          {site.nav.map((n) => (
            <a key={n.id} href={`#${n.id}`}>{n.label}</a>
          ))}
        </nav>
      </div>

      <div className="d-stage" ref={stage}>
        <svg className="d-burst" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
          <polygon points={BURST} />
        </svg>
        <div className="d-giant" aria-hidden="true">{h.giantWord}</div>
        <img
          className="d-cut"
          src="/d/oriana.webp"
          width={1228}
          height={1449}
          alt={h.photoAlt}
          fetchPriority="high"
        />
        <span className="d-w d-w--pin">{h.stickers[0]}</span>
        <span className="d-w d-w--round">{h.stickers[1]}</span>
        <div className="d-w d-w--wave" aria-hidden="true">
          <span className="d-play" />
          <span className="d-bars">
            {BARS.map((b, i) => (
              <i key={i} style={{ ['--h' as string]: b, animationDelay: `${i * 0.11}s` }} />
            ))}
          </span>
          <span className="d-w__txt">{site.handle}</span>
        </div>
      </div>

      <div className="d-copy">
        <h1 className="d-h1">
          {before}
          <span className="d-mark">{h.scribbleWord}</span>
          {after}
        </h1>
        <p className="d-sub">{h.sub}</p>
        <a className="d-btn" href={h.cta.href}>
          {h.cta.label}
          <span aria-hidden="true" className="d-btn__arr">→</span>
        </a>
      </div>
    </header>
  );
}
