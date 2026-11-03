// Single source of copy (Spanish es-AR). All prototype variants render this.

export const site = {
  lang: 'es',
  title: 'Oriana Schinocca | Desarrolladora full stack y analista funcional',
  description:
    'Oriana Schinocca: desarrolladora full stack y analista funcional. Creadora de Motofix. Sitios web rápidos y a medida para quienes ya saben lo que quieren.',
  name: 'Oriana Schinocca',
  role: 'Desarrolladora full stack y analista funcional',
  bio: [
    'Diseño y construyo productos web de punta a punta: desde el análisis funcional hasta el código y el despliegue.',
    'Soy la fundadora y desarrolladora de Motofix, una plataforma argentina que conecta a motociclistas con talleres, gomerías, repuestos y grúas.',
    'Hago sitios rápidos y de bajo costo para personas y negocios que ya saben lo que quieren.',
  ],
  nav: [
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'motofix', label: 'Motofix' },
    { id: 'trabajos', label: 'Trabajos' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'contacto', label: 'Contacto' },
  ],
  aboutTitle: 'Sobre mí',
  skillsTitle: 'Tecnologías',
  skills: ['React JS', 'Node', 'Express', 'Python', 'SQL'],
  motofix: {
    title: 'Motofix',
    tagline:
      'Plataforma argentina para talleres, mecánicos, gomerías, casas de repuestos y grúas de motos. Nació en Córdoba y apunta a todo el país.',
    status: 'En etapa previa al lanzamiento: todavía sin métricas de uso.',
    builtTitle: 'Lo que construí',
    built: [
      'Búsqueda y perfiles de negocios',
      'Panel para cada negocio y panel de administración',
      'Alta con validación de documentación según el rubro',
      'Suscripciones con Mercado Pago (PRO y PRO+)',
      'Arnés de calidad de búsqueda con 230 consultas',
      'SEO técnico: SSR, datos estructurados y blog por barrio',
      'Código QR por negocio',
      'Bots de Telegram para CRM y alertas',
      'Flujo de trabajo con IA multi-agente',
    ],
    stackTitle: 'Infraestructura',
    stack: [
      'Node.js',
      'Oracle Cloud VPS',
      'PM2',
      'Nginx',
      'Cloudflare (DNS, R2)',
      'Mercado Pago',
      'Meta Pixel',
      'GitHub',
    ],
    extra: 'Marca registrada en el INPI (clase 42).',
    cta: { label: 'Visitar motofix.ar', href: 'https://motofix.ar/' },
  },
  works: {
    title: 'Trabajos',
    items: [
      {
        name: 'Motofix',
        kind: 'Producto propio',
        desc: 'Plataforma completa: producto, backend, frontend, infraestructura y SEO.',
        href: 'https://motofix.ar/',
        placeholder: false,
      },
      {
        name: 'Tu proyecto acá',
        kind: 'Próximamente',
        desc: 'Espacio reservado para un próximo trabajo.',
        href: '',
        placeholder: true,
      },
      {
        name: 'Tu proyecto acá',
        kind: 'Próximamente',
        desc: 'Espacio reservado para un próximo trabajo.',
        href: '',
        placeholder: true,
      },
    ],
  },
  offers: {
    title: 'Servicios',
    intro: 'Dos formas de trabajar. Elegís según cuánto necesitás personalizar.',
    plans: [
      {
        name: 'Plantilla',
        summary: 'Más rápido y más económico.',
        points: [
          'Solo se personalizan tipografía y colores',
          'La estructura es fija',
          'Ideal si querés estar online ya',
        ],
        price: 'Consultá presupuesto',
      },
      {
        name: 'Personalizado',
        summary: 'Estructura y diseño propios.',
        points: [
          'Diseño y estructura a medida',
          'Pensado para tu marca y tu contenido',
          'Mayor tiempo y mayor inversión',
        ],
        price: 'Consultá presupuesto',
      },
    ],
    notesTitle: 'Cómo funciona',
    notes: [
      'El código fuente no se vende: comprás el sitio funcionando.',
      'Yo me encargo del dominio, el hosting y el despliegue.',
      'Hosting gratuito (con demora al arrancar) o premium, que se suma al precio.',
      'Los costos de terceros (diseñador, fotógrafo, bases de datos o servidores pagos, servicios externos) los cubre el cliente.',
    ],
    extraTitle: 'Servicio adicional',
    extra: 'Gestión de registro de marca en el INPI.',
  },
  contact: {
    title: 'Contacto',
    intro: 'Contame qué necesitás y te respondo con un presupuesto.',
    // TODO: replace placeholders with real contact data.
    items: [
      { label: 'Email', value: 'TODO: email', href: '' },
      { label: 'WhatsApp', value: 'TODO: whatsapp', href: '' },
      { label: 'LinkedIn', value: 'TODO: linkedin', href: '' },
    ],
  },
  footer: '© Oriana Schinocca',
} as const;

export type Site = typeof site;
