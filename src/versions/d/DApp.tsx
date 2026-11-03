import { useEffect } from 'react';
import { site } from '../../content/site';
import Hero from './Hero';
import Process from './Process';
import Services from './Services';
import Works from './Works';
import Motofix from './Motofix';
import About from './About';
import Marquee from './Marquee';
import Contact from './Contact';

export default function DApp() {
  // One observer for every reveal / draw-on-scroll element.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.d-rv, .d-draw'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('d-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('d-in');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -6% 0px' },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  return (
    <div className="d-root">
      <Hero />
      <main>
        <Process />
        <Services />
        <Works />
        <Motofix />
        <About />
        <Marquee />
        <Contact />
      </main>
      <footer className="d-foot">{site.footer}</footer>
    </div>
  );
}
