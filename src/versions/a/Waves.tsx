import { useEffect, useRef } from 'react';
import { createNoise2D } from 'simplex-noise';

type Props = {
  /** stroke color of the lines */
  color?: string;
  className?: string;
};

const SVG_NS = 'http://www.w3.org/2000/svg';

/**
 * Interactive wave lines: thin vertical polylines built from a grid of points,
 * displaced by drifting simplex noise plus a pointer force that pushes nearby
 * points along the pointer movement angle and springs back.
 * Light variant (no pointer, no loop) on small / coarse-pointer screens and
 * when the user prefers reduced motion. Pauses when off-screen or tab hidden.
 */
export default function Waves({ color = '#2748D8', className }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const svg = svgRef.current;
    if (!wrap || !svg) return;

    const noise = createNoise2D();
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mqCoarse = window.matchMedia('(pointer: coarse)');

    let W = 0;
    let H = 0;
    let cols = 0;
    let rows = 0;
    let xGap = 16;
    let yGap = 8;
    let light = false;
    let paths: SVGPathElement[] = [];
    // per-point state
    let ox = new Float32Array(0);
    let oy = new Float32Array(0);
    let vx = new Float32Array(0);
    let vy = new Float32Array(0);
    let raf = 0;
    let visible = true;
    let running = false;
    let t0 = performance.now();
    let frame = 0;

    const ptr = { x: -9999, y: -9999, px: -9999, py: -9999, vx: 0, vy: 0, active: false, last: 0 };

    const isLight = () => mqReduce.matches || mqCoarse.matches || window.innerWidth < 768;

    function build() {
      const rect = wrap!.getBoundingClientRect();
      W = Math.max(1, Math.round(rect.width));
      H = Math.max(1, Math.round(rect.height));
      light = isLight();
      xGap = light ? 24 : 14;
      yGap = light ? 24 : 8;
      cols = Math.ceil(W / xGap) + 2;
      rows = Math.ceil(H / yGap) + 2;
      const n = cols * rows;
      ox = new Float32Array(n);
      oy = new Float32Array(n);
      vx = new Float32Array(n);
      vy = new Float32Array(n);
      svg!.setAttribute('viewBox', `0 0 ${W} ${H}`);
      while (svg!.firstChild) svg!.removeChild(svg!.firstChild);
      paths = [];
      for (let c = 0; c < cols; c++) {
        const p = document.createElementNS(SVG_NS, 'path');
        svg!.appendChild(p);
        paths.push(p);
      }
    }

    function draw(time: number) {
      const px = ptr.active;
      const R = 160;
      const R2 = R * R;
      if (px && !light) {
        // apply the pointer force once per frame, then decay its velocity
        const ang = Math.atan2(ptr.vy, ptr.vx);
        const speed = Math.min(Math.hypot(ptr.vx, ptr.vy), 60);
        const fx = Math.cos(ang) * speed * 0.08;
        const fy = Math.sin(ang) * speed * 0.08;
        for (let c = 0; c < cols; c++) {
          const bx = (c - 1) * xGap;
          if (Math.abs(bx - ptr.x) > R) continue;
          for (let r = 0; r < rows; r++) {
            const by = (r - 1) * yGap;
            const dx = bx - ptr.x;
            const dy = by - ptr.y;
            const d2 = dx * dx + dy * dy;
            if (d2 > R2) continue;
            const f = 1 - Math.sqrt(d2) / R;
            const i = c * rows + r;
            vx[i] += fx * f;
            vy[i] += fy * f;
          }
        }
        ptr.vx *= 0.8;
        ptr.vy *= 0.8;
      }

      for (let c = 0; c < cols; c++) {
        const bx = (c - 1) * xGap;
        let d = '';
        for (let r = 0; r < rows; r++) {
          const by = (r - 1) * yGap;
          const i = c * rows + r;
          if (!light) {
            // spring back to rest
            vx[i] += -ox[i] * 0.04;
            vy[i] += -oy[i] * 0.04;
            vx[i] *= 0.9;
            vy[i] *= 0.9;
            ox[i] += vx[i];
            oy[i] += vy[i];
          }
          const n = noise(bx * 0.0035 + time * 0.00005, by * 0.0028 - time * 0.00003);
          const n2 = noise(bx * 0.006 - time * 0.00004 + 50, by * 0.005 + 20);
          const x = bx + n * 26 + n2 * 9 + ox[i];
          const y = by + n2 * 6 + oy[i];
          d += (r === 0 ? 'M' : 'L') + x.toFixed(1) + ' ' + y.toFixed(1);
        }
        paths[c].setAttribute('d', d);
      }
    }

    function loop(now: number) {
      raf = 0;
      if (!running) return;
      frame++;
      draw(now - t0);
      raf = requestAnimationFrame(loop);
    }

    function start() {
      if (running || light || mqReduce.matches) return;
      running = true;
      raf = requestAnimationFrame(loop);
    }
    function stop() {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    }
    function sync() {
      if (visible && !document.hidden) start();
      else stop();
    }

    function onMove(e: PointerEvent) {
      if (light) return;
      const rect = wrap!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < -50 || y < -50 || x > rect.width + 50 || y > rect.height + 50) {
        ptr.active = false;
        return;
      }
      if (ptr.px > -9000) {
        ptr.vx = x - ptr.px;
        ptr.vy = y - ptr.py;
      }
      ptr.x = x;
      ptr.y = y;
      ptr.px = x;
      ptr.py = y;
      ptr.active = true;
      ptr.last = performance.now();
    }
    function onLeave() {
      ptr.active = false;
      ptr.px = -9999;
    }

    const rebuild = () => {
      stop();
      build();
      draw(0);
      sync();
    };

    build();
    draw(0);

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
        sync();
      },
      { threshold: 0 }
    );
    io.observe(wrap);

    let lastW = W;
    const ro = new ResizeObserver(() => {
      const w = Math.round(wrap.getBoundingClientRect().width);
      // ignore height-only jitter (mobile URL bar)
      if (Math.abs(w - lastW) > 1) {
        lastW = w;
        rebuild();
      }
    });
    ro.observe(wrap);

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    document.addEventListener('visibilitychange', sync);
    mqReduce.addEventListener('change', rebuild);
    mqCoarse.addEventListener('change', rebuild);
    sync();

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', sync);
      mqReduce.removeEventListener('change', rebuild);
      mqCoarse.removeEventListener('change', rebuild);
    };
  }, []);

  return (
    <div ref={wrapRef} className={className} aria-hidden="true">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        fill="none"
        stroke={color}
        strokeWidth="1"
        style={{ display: 'block' }}
      />
    </div>
  );
}
