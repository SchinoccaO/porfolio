// Single source of copy (Spanish es-AR). Every component reads from here.
// Rules: no prices, no testimonials, no invented metrics.

export const site = {
  lang: "es",
  title: "Oriana Schinocca | Desarrolladora full stack y analista funcional",
  description:
    "Oriana Schinocca: desarrolladora full stack y analista funcional de Córdoba. Fundadora de MotoFIX. Sitios web hechos a tu medida.",
  name: "Oriana Schinocca",
  handle: "@_orischinocca",
  hero: {
    title: "Instagram no es una web. Y tus clientes lo saben.",
    // Word wrapped by the hand-drawn scribble in the title.
    scribbleWord: "web.",
    sub: "El mejor momento para estar online fue ayer. El segundo es hoy.",
    cta: { label: "Empezá ahora", href: "#contacto" },
    identity:
      "Oriana Schinocca · Desarrolladora full stack y analista funcional · @_orischinocca",
    giantWord: "Oriana",
    edition: "EDICIÓN 2026",
    plate: "01/07",
    photoAlt:
      "Retrato de Oriana Schinocca, desarrolladora full stack, de tres cuartos y mirando a cámara.",
    stickers: ["Córdoba", "motera"],
  },
  statement: [
    "Cualquiera arma una web.",
    "Yo armo una que tus clientes entienden.",
  ],
  statementScribble: "entienden.",
  story: "Tu página no muestra solo productos, cuenta tu historia.",
  // Owner's own copy (written by her, light spelling fixes only).
  offer: {
    title: "Qué te ofrezco",
    lead: "Primero escucho qué necesita tu negocio. Después lo convierto en una web que funciona, con criterio técnico y atención al detalle.",
    // Punchy list; text between ** ** gets the lemon highlight.
    ownItems: [
      {
        big: "Tu **dominio propio**.",
        small:
          "El nombre de tu negocio en un link profesional y seguro, para que te encuentren desde cualquier buscador o IA.",
      },
      {
        big: "Modelos que **se adaptan** a tu negocio.",
        small:
          "Elegís un diseño, adaptamos tus colores y tu logo, y listo. Funciona en celular y compu.",
      },
      {
        big: "¿Querés algo **único**?",
        small:
          "Creo tu web desde cero, con diseño responsivo, creativo y funcional. Así tu negocio se destaca y se recuerda.",
      },
      {
        big: "Con **personalidad**, para que se note quién sos.",
        small:
          "Tu web es tu cartelera online. Que se vea y se sienta como vos, para que tus clientes confíen y vuelvan.",
      },
    ],
    inpi: "También te acompaño con el registro de tu marca en el INPI, para que tu nombre sea legalmente tuyo.",
    logicTitle: "Si tu negocio necesita más que una web",
    logicLead:
      "Algunas cositas que puedo armarte de manera personalizada además de la web, según cómo trabaja tu negocio:",
    logicItems: [
      "Calendario de reservas",
      "Control de stock",
      "Tienda online (Mercado Pago o Tiendanube)",
      "CRM para seguir a tus clientes",
      "Panel para administrar tu negocio",
      "Avisos y tareas automáticas",
    ],
    // Reserved slot for a future, separate service. Keep the claim modest.
    ai: {
      title: "Equipo de IA para tu negocio",
      tag: "¡Próximamente!",
      text: "Asistentes que se encargan de las tareas repetitivas de tu negocio. Cada uno se personaliza según lo que necesite tu sistema. Vos solo revisás y aprobás.",
      more: "Ver más",
      less: "Ver menos",
      detailLead:
        "Cada asistente se arma a medida de lo que necesite tu sistema. Algunos ejemplos de tareas que puede hacer, todos los días:",
      detailItems: [
        "Un resumen cada mañana por Telegram con lo pendiente.",
        "Tus documentos, tareas y propuestas ordenados en Notion.",
        "Borradores de publicaciones con tu forma de hablar.",
        "Revisa el trabajo y te avisa si algo no cumple tus reglas.",
      ],
      detailClose:
        "Nada se publica sin tu aprobación. Lo pruebo primero en mi propio negocio, MotoFIX, donde ya funciona.",
      soon: "Es una propuesta tentativa y todavía la estoy armando. Si querés ser de los primeros, escribime.",
    },
  },
  nav: [
    { id: "sobre-mi", label: "Sobre mí" },
    { id: "motofix", label: "MotoFIX" },
    { id: "trabajos", label: "Trabajos" },
    { id: "servicios", label: "Servicios" },
    { id: "contacto", label: "Contacto" },
  ],
  about: {
    // Plain-language tech block. Text between ** ** is rendered in bold.

    title: "Sobre mí",
    paragraphs: [
      "Soy de Córdoba, me apasiona construir y diseñar soluciones eficientes a todo tipo de problemas. **No espero a que se den las oportunidades: las creo.**",
      "Estudiante avanzada de Ingeniería en Sistemas y de la Tecnicatura en Programación en la UTN. Estoy en constante aprendizaje.",
    ],
    ovalAlt:
      "Oriana sonriendo de costado a la cámara, con el pelo largo y lacio, sentada en su espacio de trabajo.",
    skillsTitle: "Con qué trabajo",
    skills: ["React", "Node", "Express", "Python", "SQL"],
    // Plain-language tech block. Text between ** ** is rendered in bold.
    tech: {
      title: "Con qué trabajo, en pocas palabras",
      items: [
        "Programo tu web, junto con todo lo que va por dentro, con tecnologías como **React, Node.js, Express y Python**. Elijo la que mejor encaja con tu proyecto, para que funcione rápido y sea eficiente.",
        "**También diseño.** Pienso cómo se ve y cómo se usa tu web para que tus clientes encuentren rápido lo que buscan, en el celular o en la compu.",
        "La información de tu negocio (clientes, turnos, stock) queda ordenada en bases de datos como **SQL, SQL Server y MongoDB**, según lo que necesites.",
        "Hago que la **inteligencia artificial** te sea útil de verdad: armo asistentes que se ocupan de tareas repetitivas de tu negocio, como responder consultas, ordenar información o recordarte lo pendiente, sin que tengas que aprender nada técnico.",
      ],
      more: "Y también TypeScript, Tailwind, Astro, Git, GitHub, Claude Code y Grok.",
    },
    sheetTitle: "Ficha de personaje",
    inventoryTitle: "Inventario",
    sheet: [
      { k: "Clase", v: "Full stack + analista funcional" },
      { k: "Base", v: "Córdoba, Argentina" },
      { k: "Vehículo", v: "Moto (motera)" },
      { k: "Estudios", v: "UTN FRC · UTN San Francisco" },
      { k: "Atributo", v: "Perseverante" },
    ],
  },
  motofix: {
    title: "MotoFIX",
    kicker: "La prueba de que hago lo que digo",
    lead: "Una plataforma que une motociclistas y talleres, gomerías, casas de repuestos y grúas de confianza. Soy la fundadora y la construí de punta a punta.",
    summary:
      "Búsqueda de negocios por rubro y zona, un panel para cada negocio, suscripciones con Mercado Pago y presencia en Google.",
    cta: { label: "Visitar motofix.ar", href: "https://motofix.ar/" },
    // Mini mock of the real MotoFIX home, drawn in CSS (decorative).
    mock: {
      url: "motofix.ar",
      eyebrow: "Hecho para moteros",
      headline: "Todo para tu moto, cerca y",
      accent: "con reseñas de otros moteros",
      placeholder: "¿Qué le pasa a tu moto?",
      button: "Buscar",
      chips: ["Talleres", "Mecánicos", "Gomerías", "Grúas", "Repuestos"],
    },
  },
  works: {
    title: "Trabajos",
    items: [
      {
        name: "MotoFIX",
        kind: "Producto propio",
        desc: "Producto, backend, frontend, infraestructura y SEO.",
        href: "https://motofix.ar/",
        soon: false,
      },
      {
        name: "Próximamente",
        kind: "Lugar libre",
        desc: "Acá va el próximo trabajo.",
        href: "",
        soon: true,
      },
      {
        name: "Próximamente",
        kind: "Lugar libre",
        desc: "Acá va el próximo trabajo.",
        href: "",
        soon: true,
      },
    ],
  },
  services: {
    title: "Servicios",
    intro:
      "Dos caminos para tener tu web andando. Elegí según cuánto necesitás personalizar.",
    plans: [
      {
        name: "Plantilla",
        pitch: "Rápida y con precio accesible.",
        desc: "Solo cambian la tipografía y los colores. La estructura es fija.",
        items: [
          "Landing de presentación + formulario de contacto",
          "Turnos y reservas",
          "Portfolio",
        ],
      },
      {
        name: "Personalizado",
        pitch: "Tu estructura y tu diseño.",
        desc: "Se construye a medida de tu problema. Mayor inversión y más tiempo.",
        items: [
          "Estructura propia",
          "Diseño propio",
          "CRM",
          "Tienda online (Mercado Pago o Tiendanube)",
        ],
      },
    ],
    price: "Consultá presupuesto",
    extrasTitle: "Extras de mi servicio como desarrolladora",
    extrasIntro:
      "Los tengo en cuenta tanto en las plantillas como en las personalizadas.",
    extras: [
      "SEO",
      "Dominio",
      "Hosting y publicación (gratis o premium)",
      "Diseño pensado para celular y compu",
      "Botón de contacto por WhatsApp",
      "Formulario de contacto",
    ],
    notesTitle: "Para que sea claro",
    notes: [
      "El código fuente no se vende: se vende la web funcionando.",
      "Diseñador, fotógrafo, bases de datos, servidores y servicios pagos los paga el cliente.",
    ],
  },
  process: {
    title: "Cómo trabajo",
    steps: [
      {
        title: "Entiendo tu negocio",
        text: "Primero escucho y pregunto hasta entender qué necesitás y cómo funciona tu sistema.",
      },
      {
        title: "Te propongo la solución",
        text: "Te cuento qué voy a hacer y cómo, estableciendo un tiempo de entrega y un presupuesto.",
      },
      {
        title: "Desarrollo tu web",
        text: "La construyo y te voy mostrando cómo avanza.",
      },
      {
        title: "La revisás y ajustamos",
        text: "Hacemos los cambios necesarios. Recibís tu web publicada y lista para usar.",
      },
    ],
  },
  contact: {
    title: "Contacto",
    headline: "Contame de tu negocio. Lo demás lo resolvemos juntos.",
    intro: "Contame qué necesitás y te respondo.",
    fields: {
      name: "Tu nombre",
      namePlaceholder: "Cómo te llamás",
      email: "Email",
      emailPlaceholder: "tu@email.com",
      phone: "WhatsApp (opcional)",
      phonePlaceholder: "351 555 1234",
      phoneHint: "Sin 0 ni 15. Solo si preferís que te escriba por ahí.",
      type: "Tipo de proyecto",
      typePlaceholder: "Elegí uno",
      typeOptions: [
        "Landing de presentación",
        "Turnos y reservas",
        "Portfolio",
        "CRM",
        "Tienda online",
        "Sistema de GrokBOT",
        "Asistente con IA",
        "Asistente de WhatsApp Business",
        "Personalizado",
        "No sé todavía",
      ],
      deadline: "¿Para cuándo la necesitás?",
      deadlinePlaceholder: "Elegí una referencia (opcional)",
      deadlineHint: "Es una referencia. El plazo real lo acordamos juntos.",
      deadlineOptions: [
        "Lo antes posible",
        "En 1 mes",
        "En 2 o 3 meses",
        "Sin apuro",
      ],
      problem: "Qué problema querés resolver",
      problemPlaceholder: "Contame en pocas líneas",
      problemMin: 10,
      problemHintMore: "Escribí al menos {n} letras para poder enviar. Te faltan {left}.",
      problemHintDone: "Listo, ya podés enviar.",
      submit: "Enviar",
      sending: "Enviando…",
      ok: "¡Gracias! Recibí tu mensaje y te respondo pronto.",
      error: "No se pudo enviar. Probá de nuevo o escribime por WhatsApp.",
      invalid: "Revisá el email y el mensaje: son obligatorios.",
    },
    // WhatsApp button shows only when number is set (digits with country code, e.g. 5493510000000).
    whatsapp: {
      number: "5493513730075",
      label: "Mejor escribime por WhatsApp",
      text: "Hola Oriana, vi tu web y quiero la mía.",
    },
    // TODO: replace placeholders with real contact channels.
    channels: [
      { label: "Email", value: "orianaschinocca@gmail.com" },
      { label: "WhatsApp", value: "3513740075" },
      { label: "LinkedIn", value: "TODO: linkedin" },
    ],
  },
  footer: "© Oriana Schinocca. Hecho en Córdoba.",
} as const;

export type Site = typeof site;
