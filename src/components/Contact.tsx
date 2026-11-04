import { site } from '../content/site';
import ContactForm from './ContactForm';

export default function Contact() {
  const c = site.contact;
  // TODO channels (email, whatsapp, linkedin) stay hidden until the real values exist.
  const channels = c.channels.filter((ch) => !ch.value.startsWith('TODO'));
  return (
    <section id="contacto" className="sec contact" aria-labelledby="h-contact">
      <div className="wrap contact__grid">
        <div>
          <h2 id="h-contact" className="h2">{c.title}</h2>
          <p className="contact__intro">{c.intro}</p>
          <ul className="channels">
            {channels.map((ch) => (
              <li key={ch.label}>
                <span>{ch.label}</span> {ch.value}
              </li>
            ))}
            <li>
              <span>Instagram</span>{' '}
              <a href={`https://instagram.com/${site.handle.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
                {site.handle}
              </a>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
