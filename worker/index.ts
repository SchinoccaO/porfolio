// Cloudflare Worker: serves the static site (ASSETS) and handles POST /api/contacto, emailing the form to Oriana via Resend.
// Env (Worker > Settings > Variables and secrets): RESEND_API_KEY (secret), CONTACT_TO, CONTACT_FROM.

interface Env {
  ASSETS: { fetch: (req: Request) => Promise<Response> };
  RESEND_API_KEY: string;
  CONTACT_TO: string;
  CONTACT_FROM: string;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const ESCAPES: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ESCAPES[c]);

const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

// Argentine mobile numbers -> digits for wa.me (54 9 + area + number). Returns '' if it doesn't look valid.
function normalizePhone(raw: string): string {
  let d = raw.replace(/\D/g, '').replace(/^00/, '');
  if (!d) return '';
  if (!d.startsWith('54')) d = '54' + d.replace(/^0/, '');
  if (!d.startsWith('549')) d = '549' + d.slice(2);
  return d.length >= 12 && d.length <= 14 ? d : '';
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  let raw: Record<string, unknown>;
  try {
    raw = await request.json();
  } catch {
    return json({ error: 'bad_request' }, 400);
  }

  // Honeypot: bots fill it, people never see it. Answer 200 so they move on.
  if (clean(raw.website, 100)) return json({ ok: true });

  const name = clean(raw.name, 80);
  const email = clean(raw.email, 120);
  const problem = clean(raw.problem, 1500);
  const type = clean(raw.type, 80);
  const deadline = clean(raw.deadline, 80);
  const phone = normalizePhone(clean(raw.phone, 20));

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !problem) return json({ error: 'invalid' }, 422);

  const wa = phone ? `https://wa.me/${phone}` : '';
  const html = `
    <h2>Nuevo contacto desde la web</h2>
    <p><b>Nombre:</b> ${esc(name) || '-'}</p>
    <p><b>Email:</b> ${esc(email)}</p>
    <p><b>WhatsApp:</b> ${wa ? `<a href="${wa}">+${phone}</a>` : '-'}</p>
    <p><b>Proyecto:</b> ${esc(type) || '-'}</p>
    <p><b>Plazo (referencia):</b> ${esc(deadline) || '-'}</p>
    <p><b>Mensaje:</b></p>
    <p style="white-space:pre-wrap">${esc(problem)}</p>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY.trim()}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env.CONTACT_FROM.trim(),
      to: [env.CONTACT_TO.trim()],
      reply_to: email,
      subject: `Nuevo contacto: ${name || email}`,
      html,
    }),
  });

  if (!res.ok) console.error('resend_failed', res.status, await res.text());
  return res.ok ? json({ ok: true }) : json({ error: 'send_failed' }, 502);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === '/api/contacto') {
      return request.method === 'POST' ? handleContact(request, env) : json({ error: 'method_not_allowed' }, 405);
    }
    return env.ASSETS.fetch(request);
  },
};
