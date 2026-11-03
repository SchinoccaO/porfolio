import About from './About';
import Contact from './Contact';
import Header from './Header';
import Hero from './Hero';
import Motofix from './Motofix';
import Process from './Process';
import Services from './Services';
import StatementBlock from './StatementBlock';
import StatementStrip from './StatementStrip';
import StickyCta from './StickyCta';
import Works from './Works';
import { site } from '../content/site';

/** Page composition. Section order is fixed by the owner. */
export default function SiteApp() {
  return (
    <>
      <a className="skip" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Hero />
        <StatementStrip />
        <About />
        <Motofix />
        <Works />
        <Services />
        <Process />
        <StatementBlock />
        <Contact />
      </main>
      <footer className="foot">
        <p className="mono">{site.footer}</p>
        <p className="mono">{site.handle}</p>
      </footer>
      <StickyCta />
    </>
  );
}
