import { site } from '../content/site';
import ContactForm from './ContactForm';
import { Reveal } from './ui';

export default function Contact() {
  const c = site.contact;
  return (
    <section id="contacto" className="sec sec--ink contact" aria-labelledby="h-contact">
      <div className="wrap contact__grid">
        <div>
          <Reveal as="p" className="label mono">07 / {c.title}</Reveal>
          <Reveal as="h2" id="h-contact" anim="fadeInLeft" className="h2">{c.title}</Reveal>
          <Reveal as="p" className="body body--lead">{c.intro}</Reveal>
          <ul className="channels">
            {c.channels.map((ch) => (
              <li key={ch.label}>
                <span className="mono">{ch.label}</span> {ch.value}
              </li>
            ))}
            <li>
              <span className="mono">Instagram</span> {site.handle}
            </li>
          </ul>
        </div>
        <Reveal anim="fadeInUp" className="contact__form">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
