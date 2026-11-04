// Single source of copy (Spanish es-AR). Every component reads from here.
// Rules: no prices, no testimonials, no invented metrics.

export const site = {
  lang: 'es',
  title: 'Oriana Schinocca | Desarrolladora full stack y analista funcional',
  description:
    'Oriana Schinocca: desarrolladora full stack y analista funcional de Córdoba. Fundadora de Motofix. Sitios web hechos a tu medida.',
  name: 'Oriana Schinocca',
  handle: '@_orischinocca',
  hero: {
    title: 'Instagram no es una web. Y tus clientes lo saben.',
    // Word wrapped by the hand-drawn scribble in the title.
    scribbleWord: 'web.',
    sub: 'El mejor momento para estar online fue ayer. El segundo es hoy.',
    cta: { label: 'Quiero mi web', href: '#contacto' },
    identity: 'Oriana Schinocca · Desarrolladora full stack y analista funcional · @_orischinocca',
    giantWord: 'Oriana',
    edition: 'EDICIÓN 2026',
    plate: 'LÁMINA 01/07',
    photoAlt: 'Retrato de Oriana Schinocca, desarrolladora full stack, de tres cuartos y mirando a cámara.',
    stickers: ['Córdoba', 'motera'],
  },
  statement: ['Cualquiera arma una web.', 'Yo armo una que tus clientes entienden.'],
  statementScribble: 'entienden.',
  story: 'Tu web no muestra solo productos, cuenta tu historia.',
  // Owner's own copy (written by her, light spelling fixes only).
  offer: {
    title: 'Qué te doy',
    lead: 'Primero entiendo qué necesitás. Después lo hago realidad, con criterio técnico y sin vueltas.',
    own: 'Tu dominio propio, modelos de web que se adaptan a tu negocio y, si necesitás más, una hecha a tu medida. Con personalidad, para que se note quién sos.',
    inpi: 'Me encargo del registro de tu marca en el INPI, para que tu nombre sea tuyo de verdad.',
    logicTitle: 'Si tu negocio necesita más que una web',
    logic: 'Formularios, calendario de reservas, control de stock y tienda online (podemos usar Tiendanube). Lo armo según cómo trabaja tu negocio.',
    logicItems: ['Formularios', 'Calendario de reservas', 'Control de stock', 'Tienda virtual'],
  },
  nav: [
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'motofix', label: 'Motofix' },
    { id: 'trabajos', label: 'Trabajos' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'contacto', label: 'Contacto' },
  ],
  about: {
    title: 'Sobre mí',
    paragraphs: [
      'Soy de Córdoba, soy motera y me gusta construir. No miro cómo otros crean: me tiro al vacío y lo hago.',
      'Estudio Ingeniería en Sistemas en la UTN FRC y la Tecnicatura en Programación en la UTN San Francisco. Por eso tengo fundamento teórico además de práctica.',
    ],
    skillsTitle: 'Con qué trabajo',
    skills: ['React', 'Node', 'Express', 'Python', 'SQL'],
    // Plain-language tech block. Text between ** ** is rendered in bold.
    tech: {
      title: 'Con qué trabajo, en simple',
      items: [
        'Programo tu web y todo lo que va por dentro con **React, Node.js, Express y Python**. Eso hace que funcione rápido y sin vueltas.',
        'Guardo la información de tu negocio (clientes, turnos, stock) de forma ordenada con bases de datos: **SQL, SQL Server y MongoDB**.',
        'Uso **inteligencia artificial** todos los días, con **Claude Code y Grok**, para automatizar tareas repetitivas y entregarte más rápido.',
      ],
      more: 'Y también TypeScript, Tailwind, Astro, Git y GitHub.',
    },
    sheetTitle: 'Ficha de personaje',
    inventoryTitle: 'Inventario',
    sheet: [
      { k: 'Clase', v: 'Full stack + analista funcional' },
      { k: 'Base', v: 'Córdoba, Argentina' },
      { k: 'Vehículo', v: 'Moto (motera)' },
      { k: 'Estudios', v: 'UTN FRC · UTN San Francisco' },
      { k: 'Atributo', v: 'Perseverante' },
    ],
  },
  motofix: {
    title: 'Motofix',
    kicker: 'Mi prueba de que hago lo que digo',
    lead: 'Una plataforma para que motociclistas encuentren talleres, mecánicos, gomerías, casas de repuestos y grúas de confianza. Soy la fundadora y la construí de punta a punta.',
    summary:
      'Búsqueda de negocios por rubro y zona, un panel para cada negocio, suscripciones con Mercado Pago y presencia en Google.',
    cta: { label: 'Visitar motofix.ar', href: 'https://motofix.ar/' },
  },
  works: {
    title: 'Trabajos',
    items: [
      {
        name: 'Motofix',
        kind: 'Producto propio',
        desc: 'Producto, backend, frontend, infraestructura y SEO.',
        href: 'https://motofix.ar/',
        soon: false,
      },
      {
        name: 'Próximamente',
        kind: 'Lugar libre',
        desc: 'Acá va el próximo trabajo.',
        href: '',
        soon: true,
      },
      {
        name: 'Próximamente',
        kind: 'Lugar libre',
        desc: 'Acá va el próximo trabajo.',
        href: '',
        soon: true,
      },
    ],
  },
  services: {
    title: 'Servicios',
    intro: 'Dos caminos para tener tu web andando. Elegí según cuánto necesitás personalizar.',
    plans: [
      {
        name: 'Plantilla',
        pitch: 'Rápida y con precio accesible.',
        desc: 'Solo cambian la tipografía y los colores. La estructura es fija.',
        items: [
          'Landing de presentación',
          'Turnos y reservas',
          'Portfolio',
        ],
      },
      {
        name: 'Personalizado',
        pitch: 'Tu estructura y tu diseño.',
        desc: 'Se construye a medida de tu problema. Mayor inversión y más tiempo.',
        items: [
          'Estructura propia',
          'Diseño propio',
          'CRM',
          'Tienda online (Mercado Pago o Tiendanube)',
        ],
      },
    ],
    price: 'Consultá presupuesto',
    extrasTitle: 'Extras',
    extras: [
      'SEO',
      'Dominio',
      'Hosting y publicación (gratis, con arranque más lento, o premium)',
      'Registro de marca en el INPI',
    ],
    notesTitle: 'Para que sea claro',
    notes: [
      'El código fuente no se vende: se vende la web funcionando.',
      'Diseñador, fotógrafo, bases de datos, servidores y servicios pagos los paga el cliente.',
    ],
  },
  process: {
    title: 'Cómo trabajo',
    steps: [
      { title: 'Entiendo tu negocio', text: 'Primero escucho y pregunto hasta entender qué necesitás.' },
      { title: 'Te propongo la solución', text: 'Te cuento qué voy a hacer y cómo, sin vueltas.' },
      { title: 'La construyo y te la entrego', text: 'Recibís tu web publicada y lista para usar.' },
    ],
  },
  contact: {
    title: 'Contacto',
    headline: 'Contame de tu negocio. Lo demás lo resolvemos juntos.',
    intro: 'Contame qué necesitás y te respondo.',
    // TODO: form has no backend yet. Wire it (Formspree, Resend, own API) before launch.
    todoNote: 'TODO: el formulario todavía no envía nada.',
    fields: {
      reach: 'Cómo te contacto (email o WhatsApp)',
      reachPlaceholder: 'tu email o tu número',
      type: 'Tipo de proyecto',
      typeOptions: [
        'Landing de presentación',
        'Turnos y reservas',
        'Portfolio',
        'CRM',
        'Tienda online simple (Mercado Pago o Tiendanube)',
        'Personalizado',
        'No sé todavía',
      ],
      deadline: 'Plazo',
      deadlinePlaceholder: 'Ej: en un mes',
      problem: 'Qué problema querés resolver',
      problemPlaceholder: 'Contame en pocas líneas',
      submit: 'Enviar',
    },
    // TODO: replace placeholders with real contact channels.
    channels: [
      { label: 'Email', value: 'TODO: email' },
      { label: 'WhatsApp', value: 'TODO: whatsapp' },
      { label: 'LinkedIn', value: 'TODO: linkedin' },
    ],
  },
  footer: '© Oriana Schinocca. Hecho en Córdoba.',
} as const;

export type Site = typeof site;
