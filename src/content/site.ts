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
  statement: ['No hago webs lindas.', 'Hago webs que venden.'],
  statementScribble: 'venden.',
  sub: 'Entiendo el problema antes de escribir código.',
  // Owner's own copy (written by her, light spelling fixes only).
  offer: {
    title: 'Qué te doy',
    lead: 'Antes que nada: comprensión. Entiendo tus necesidades y las pongo en práctica. Con mi toque de conocimiento, podemos hacer realidad tu web.',
    own: 'Te ofrezco tu propio dominio, tu marca registrada y modelos de web que se adapten a tu negocio. Y si querés más, una web personalizada solo para vos. Me encargo de que tu web tenga personalidad y conecte con la gente.',
    inpi: 'Me encargo del registro de tu marca en el INPI, para que tu nombre sea tuyo de verdad.',
    logicTitle: 'Para los más audaces',
    logic: 'Genero toda la lógica que tu negocio necesita: creo tus formularios, armo tu calendario de reservas, llevo el control de tu stock y desarrollo tu tienda virtual (podemos usar Tiendanube).',
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
      'Soy de Córdoba, soy motera y me gusta hacer cosas. No me quedo mirando cómo otros crean: me tiro al vacío y lo hago.',
      'Estudio Ingeniería en Sistemas en la UTN FRC y la Tecnicatura en Programación en la UTN San Francisco. Por eso tengo fundamento teórico además de práctica.',
      'Antes de abrir el editor, entiendo qué problema hay que resolver. Después lo construyo de punta a punta.',
    ],
    skillsTitle: 'Con qué trabajo',
    skills: ['React', 'Node', 'Express', 'Python', 'SQL'],
    place: 'Córdoba, Argentina',
    sheetTitle: 'Ficha de personaje',
    inventoryTitle: 'Inventario',
    sheet: [
      { k: 'Clase', v: 'Full stack + analista funcional' },
      { k: 'Base', v: 'Córdoba, Argentina' },
      { k: 'Vehículo', v: 'Moto (motera)' },
      { k: 'Estudios', v: 'UTN FRC · UTN San Francisco' },
      { k: 'Atributo', v: 'Perseverante' },
    ],
    smallLine: 'Dejá de consumir. Empezá a crear.',
  },
  motofix: {
    title: 'Motofix',
    kicker: 'Mi prueba de que hago lo que digo',
    lead: 'Una plataforma para que motociclistas encuentren talleres, mecánicos, gomerías, casas de repuestos y grúas de confianza. Soy la fundadora y la construí de punta a punta.',
    why: 'Une a motociclistas con negocios que los cuidan y arma comunidad alrededor de la moto. Menos scroll, más gente real.',
    status: 'En etapa previa al lanzamiento. Todavía no hay métricas.',
    builtTitle: 'Lo que construí',
    built: [
      'Frontend en React',
      'Búsqueda de negocios',
      'Perfiles y paneles para cada negocio',
      'Alta con validación de documentación según el rubro',
      'Suscripciones con Mercado Pago',
      'Arnés de calidad de búsqueda con 230 consultas',
      'SEO técnico',
      'Código QR por negocio',
      'Bots de Telegram',
    ],
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
          'CRM',
          'Tienda online simple (Mercado Pago o Tiendanube)',
        ],
      },
      {
        name: 'Personalizado',
        pitch: 'Tu estructura y tu diseño.',
        desc: 'Se construye a medida de tu problema. Mayor inversión y más tiempo.',
        items: ['Estructura propia', 'Diseño propio', 'Pensado para tu caso'],
      },
    ],
    price: 'Consultá presupuesto',
    extrasTitle: 'Extras',
    extras: [
      'SEO',
      'Dominio',
      'Hosting y deploy (gratis con demora o premium)',
      'Registro de marca en el INPI',
    ],
    notesTitle: 'Para que sea claro',
    notes: [
      'El código fuente no se vende: se vende la web funcionando.',
      'Los costos de terceros (diseñador, fotógrafo, bases de datos, servidores y servicios pagos) los paga el cliente.',
    ],
  },
  process: {
    title: 'Cómo trabajo',
    steps: [
      { title: 'Entiendo tu negocio', text: 'Primero escucho y pregunto hasta entender qué necesitás.' },
      { title: 'Te propongo la solución', text: 'Te cuento qué voy a hacer y cómo, sin vueltas.' },
      { title: 'La construyo y te la entrego andando', text: 'Recibís la web funcionando, lista para usar.' },
    ],
  },
  contact: {
    title: 'Contacto',
    intro: 'Contame qué necesitás y te respondo.',
    // TODO: form has no backend yet. Wire it (Formspree, Resend, own API) before launch.
    todoNote: 'TODO: el formulario todavía no envía nada.',
    fields: {
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
