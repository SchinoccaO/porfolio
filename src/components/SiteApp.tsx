import About from './About';
import Contact from './Contact';
import Header from './Header';
import Hero from './Hero';
import Motofix from './Motofix';
import Offer from './Offer';
import Process from './Process';
import Services from './Services';
import Statement from './Statement';
import StickyCta from './StickyCta';
import { site } from '../content/site';

/** Page composition. Order: hero, statement, offer, services, process, Motofix, about, contact. */
export default function SiteApp() {
  return (
    <>
      <a className="skip" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Hero />
        <Statement />
        <Offer />
        <Services />
        <Process />
        <Motofix />
        <About />
        <Contact />
      </main>
      <footer className="foot">
        <p>{site.footer}</p>
        <p>{site.handle}</p>
      </footer>
      <StickyCta />
    </>
  );
}
