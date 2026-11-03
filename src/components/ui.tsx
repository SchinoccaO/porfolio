// Shared building blocks: motion hooks, scroll reveal, marquee and hand-made decorations.
import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode, type RefObject } from 'react';

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);
  return reduced;
}

type RevealProps = {
  as?: ElementType;
  anim?: string; // animate.css name without the prefix, e.g. "fadeInUp"
  delay?: number; // ms
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  [key: string]: unknown;
};

/**
 * Scroll reveal. Adds `animate__animated animate__<anim>` once the element enters the
 * viewport. Content stays visible without JS and with reduced motion (see `.js .rv` in CSS).
 */
export function Reveal({ as: Tag = 'div', anim = 'fadeInUp', delay = 0, className = '', style, children, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  const cls = ['rv', shown ? `rv-in${reduced ? '' : ` animate__animated animate__${anim}`}` : '', className]
    .filter(Boolean)
    .join(' ');
  return (
    <Tag ref={ref} className={cls} style={{ ...style, animationDelay: delay ? `${delay}ms` : undefined }} {...rest}>
      {children}
    </Tag>
  );
}

/** Infinite marquee. The duplicated row is hidden from assistive tech. */
export function Marquee({ phrase }: { phrase: string }) {
  const row = (hidden: boolean) => (
    <ul className="mq-row" aria-hidden={hidden || undefined}>
      {[0, 1, 2].map((i) => (
        <li key={i}>
          {phrase}
          <span className="mq-dot" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="mq" role="presentation">
      <div className="mq-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

const SCRIBBLES = {
  // Rough loop around a word.
  circle: 'M8 38 C 4 14, 60 2, 150 5 C 240 8, 296 20, 292 42 C 288 66, 200 76, 140 74 C 70 72, 6 62, 12 34 C 16 16, 70 8, 120 8',
  // Double marker underline.
  underline: 'M4 18 C 70 8, 160 24, 296 10 M14 38 C 90 28, 190 44, 290 30',
  // Cross-out stroke.
  strike: 'M4 52 C 80 36, 180 20, 296 6 M10 64 C 100 46, 200 34, 292 22',
} as const;

/** Hand-drawn marker stroke that draws itself (stroke-dashoffset). Decorative only. */
export function Scribble({ kind = 'circle', className = '' }: { kind?: keyof typeof SCRIBBLES; className?: string }) {
  return (
    <svg className={`scribble scribble--${kind} ${className}`} viewBox="0 0 300 80" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      {SCRIBBLES[kind].split(' M').map((d, i) => (
        <path key={i} d={i === 0 ? d : `M${d}`} style={{ '--d': `${i * 0.35}s` } as CSSProperties} />
      ))}
    </svg>
  );
}

/** Torn paper edge: deterministic jagged band, meant to sit on a section boundary. */
export function Torn({ seed = 1, className = '' }: { seed?: number; className?: string }) {
  const pts: string[] = [];
  let s = seed * 9301;
  const rand = () => ((s = (s * 49297 + 233280) % 233280) / 233280);
  const w = 360;
  for (let x = 0; x <= w; x += 8) pts.push(`${x},${(3 + rand() * 11).toFixed(1)}`);
  const d = `M0,24 L${pts.join(' L')} L${w},24 Z`;
  return (
    <svg className={`torn ${className}`} viewBox="0 0 360 24" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d={d} />
    </svg>
  );
}

/** Round sticker with a slow float. Purely decorative. */
export function Sticker({ children, className = '', style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <span className={`sticker ${className}`} style={style} aria-hidden="true">
      <span className="sticker__in">{children}</span>
    </span>
  );
}

/** Auto-advancing scroll-snap carousel; pauses on interaction and with reduced motion. */
export function useAutoScroll(ref: RefObject<HTMLElement | null>, ms = 3800) {
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    let paused = false;
    const pause = () => (paused = true);
    const resume = () => (paused = false);
    const evs: [string, () => void][] = [
      ['pointerdown', pause],
      ['pointerup', resume],
      ['mouseenter', pause],
      ['mouseleave', resume],
      ['focusin', pause],
      ['focusout', resume],
      ['touchstart', pause],
    ];
    evs.forEach(([e, f]) => el.addEventListener(e, f, { passive: true }));
    const t = window.setInterval(() => {
      if (paused || document.hidden) return;
      const first = el.firstElementChild as HTMLElement | null;
      if (!first || el.scrollWidth <= el.clientWidth + 4) return;
      const step = first.offsetWidth + 16;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + step, behavior: 'smooth' });
    }, ms);
    return () => {
      window.clearInterval(t);
      evs.forEach(([e, f]) => el.removeEventListener(e, f));
    };
  }, [ref, ms, reduced]);
}
