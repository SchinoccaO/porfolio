// PROTOTYPE (throwaway): pieces shared by both variants.
import { useEffect, useRef, useState, type ElementType, type ReactNode, type CSSProperties } from 'react';
import { site } from '../content/site';

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
 * Scroll reveal: adds `animate__animated animate__<anim>` once the element enters
 * the viewport (IntersectionObserver). With reduced motion it shows statically.
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
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  const cls = [
    'rv',
    shown ? `rv-in${reduced ? '' : ` animate__animated animate__${anim}`}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <Tag ref={ref} className={cls} style={{ ...style, animationDelay: delay ? `${delay}ms` : undefined }} {...rest}>
      {children}
    </Tag>
  );
}

/** Per-letter wave (transform only). Screen readers get the plain text. */
export function WaveText({ text, step = 70 }: { text: string; step?: number }) {
  let n = 0;
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="wave">
        {text.split(' ').map((word, w) => (
          <span key={w} className="wave-w">
            {Array.from(word).map((ch, i) => (
              <span key={i} className="wave-ch" style={{ animationDelay: `${n++ * step}ms` }}>
                {ch}
              </span>
            ))}{' '}
          </span>
        ))}
      </span>
    </>
  );
}

/** Infinite marquee; the duplicate is hidden from assistive tech. */
export function Marquee({ words }: { words: readonly string[] }) {
  const row = (hidden: boolean) => (
    <ul className="mq-row" aria-hidden={hidden || undefined}>
      {words.map((w, i) => (
        <li key={i}>
          {w}
          <span className="mq-dot" aria-hidden="true">
            ✦
          </span>
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

/** Torn paper edge as an SVG band with a deterministic jagged path. */
export function Torn({ color, flip = false, seed = 1 }: { color: string; flip?: boolean; seed?: number }) {
  const pts: string[] = [];
  let s = seed * 9301;
  const rand = () => ((s = (s * 49297 + 233280) % 233280) / 233280);
  const w = 360;
  for (let x = 0; x <= w; x += 9) pts.push(`${x},${(4 + rand() * 12).toFixed(1)}`);
  const d = `M0,24 L0,${pts[0].split(',')[1]} L${pts.join(' L')} L${w},24 Z`;
  return (
    <svg
      className="torn"
      viewBox="0 0 360 24"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      style={{ transform: flip ? 'scaleY(-1)' : undefined }}
    >
      <path d={d} fill={color} />
    </svg>
  );
}

/** Static form (no backend yet: see the TODO in site.ts). */
export function ContactForm() {
  const f = site.contact.fields;
  return (
    <form className="cf" onSubmit={(e) => e.preventDefault()}>
      <label>
        <span>{f.type}</span>
        <select name="type" defaultValue="">
          <option value="" disabled>
            Elegí una opción
          </option>
          {f.typeOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>
      <label>
        <span>{f.deadline}</span>
        <input name="deadline" type="text" placeholder={f.deadlinePlaceholder} />
      </label>
      <label>
        <span>{f.problem}</span>
        <textarea name="problem" rows={4} placeholder={f.problemPlaceholder} />
      </label>
      <button type="submit" className="btn">
        {f.submit}
      </button>
      <p className="cf-todo">{site.contact.todoNote}</p>
      <ul className="cf-channels">
        {site.contact.channels.map((c) => (
          <li key={c.label}>
            <strong>{c.label}:</strong> {c.value}
          </li>
        ))}
      </ul>
    </form>
  );
}

/** Auto-advancing scroll-snap carousel (paused on interaction / reduced motion). */
export function useAutoScroll(ref: React.RefObject<HTMLElement | null>, ms = 3500) {
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    let paused = false;
    const pause = () => (paused = true);
    const resume = () => (paused = false);
    el.addEventListener('pointerdown', pause);
    el.addEventListener('pointerup', resume);
    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);
    el.addEventListener('focusin', pause);
    el.addEventListener('focusout', resume);
    const t = window.setInterval(() => {
      if (paused || document.hidden) return;
      const first = el.firstElementChild as HTMLElement | null;
      if (!first) return;
      const step = first.offsetWidth + 16;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + step, behavior: 'smooth' });
    }, ms);
    return () => {
      window.clearInterval(t);
      el.removeEventListener('pointerdown', pause);
      el.removeEventListener('pointerup', resume);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
      el.removeEventListener('focusin', pause);
      el.removeEventListener('focusout', resume);
    };
  }, [ref, ms, reduced]);
}
