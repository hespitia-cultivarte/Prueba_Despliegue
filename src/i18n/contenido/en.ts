import type { Contenido } from './tipos';

export const en: Contenido = {
  nombresMovimientos: [
    'Overture',
    'Who we are',
    'What sets us apart',
    'Intermezzo',
    'Productions',
    'Collaborations',
    'Track record',
    'Creando Lazos',
    'What comes next',
    'The Foundation',
    'Encore',
  ],

  obertura: {
    beatDos: 'A hundred musicians aged 16 to 24, from every region of Colombia.',
    makingOf: 'Watch the making of',
    cineTitulo: 'Making of · European Tour 2023 · Youth Philharmonic of Colombia',
  },

  quienes: [
    {
      foto: 'quienes/postura',
      titulo: 'What moves us',
      texto:
        'We are an orchestra that understands music as a living experience. We do not come on stage only to perform scores.',
      enfasis: 'We come to inhabit them.',
      alt: 'A La Joven musician with arms raised on the stage of the Berliner Philharmonie.',
    },
    {
      foto: 'quienes/comunidad',
      titulo: 'Where we come from',
      texto:
        'We are young musicians aged 16 to 24 from every region of Colombia. We come from cities, villages, mountains and coasts. We have different stories, different paths and different ways of understanding the world.',
      enfasis: '',
      alt: 'Members of La Joven celebrate together with their instruments at the end of a concert.',
    },
    {
      foto: 'quienes/identidad',
      titulo: 'What happens on stage',
      texto:
        'We are restless, passionate, rigorous. We are young people who are not content to reproduce a tradition; we want to converse with it, question it and keep it alive.',
      enfasis: '',
      alt: 'A young violinist plays in deep concentration, lit in the middle of the orchestra.',
    },
  ],

  diferencial: {
    antetitulo: 'Beyond the concert',
    titulo: 'Music as a point of departure',
    bajada: 'La Joven expands the symphonic experience.',
    bloques: [
      {
        foto: 'diferencial/narrativa',
        titulo: 'Stage narrative',
        texto: 'Each production builds a world of its own out of concepts, dramaturgy and emotional journeys.',
        alt: 'A large red cloth rises over the orchestra mid-performance.',
      },
      {
        foto: 'diferencial/movimiento',
        titulo: 'Movement and body language',
        texto: 'The musicians expand the language of performance through movement, expressiveness and stage action.',
        alt: 'Jugglers toss clubs into the air among musicians holding their instruments.',
      },
      {
        foto: 'diferencial/luz',
        titulo: 'Visual design and lighting',
        texto: 'Light, space, atmosphere and visual elements are part of the artistic experience.',
        alt: 'Beams of light fall through haze onto a figure in a monumental costume surrounded by musicians.',
      },
      {
        foto: 'diferencial/mirada',
        titulo: 'A contemporary outlook',
        texto:
          'La Joven engages with the questions, emotions and tensions of the present, bringing the symphonic language closer to new ways of connecting with audiences.',
        alt: 'La Joven violinists play wearing colourful masks.',
      },
    ],
    cierreAntetitulo: 'Six productions',
    cierreTexto: 'See it on stage',
  },

  frase: {
    primera: 'We are not trying to make concerts more spectacular.',
    segunda: 'We are trying to build experiences that mean more.',
    alt: 'The Teatro Metropolitano in Medellín in darkness: audience and orchestra hold lit candles while the conductor, lit from above, conducts from the podium.',
  },

  producciones: {
    titulo: 'Artistic productions',
    bajada: 'Stage worlds built from the music.',
    verObra: 'See the work',
    dossierSolicitud: 'Technical dossier on request',
    solicitarDossier: 'Request the technical dossier',
    indice: [
      { id: 'consagracion', titulo: 'The Rite of Spring' },
      {
        id: 'petrushka',
        titulo: 'Petrushka',
        acto: {
          foto: 'producciones/petrushka-1',
          alt: 'The orchestra under blue light in the Berliner Philharmonie, seen from high in the hall.',
          sinopsis:
            'This staging of Petrushka sets out to recover the most rebellious and defiant spirit of Igor Stravinsky’s work, bringing the movement of the whole orchestra, conductor included, into the language of the performance. Beyond the story of a puppet, Petrushka embodies the universal longing for freedom in the face of the power structures and conventions that constrain us.',
          ficha: [
            ['Work', 'Igor Stravinsky, Petrushka'],
            ['Conductor', 'Andrés Orozco-Estrada'],
            ['Venue', 'Berliner Philharmonie, Berlin'],
            ['Tour', 'European Tour 2023'],
          ],
          galeria: [
            { foto: 'producciones/petrushka-2', alt: 'Winds and brass play wearing golden masks.' },
            { foto: 'producciones/petrushka-3', alt: 'The full orchestra raises its arms under blue light.' },
          ],
        },
      },
      { id: 'shostakovich', titulo: 'Shostakovich’s Fifth' },
      {
        id: 'cuerpos',
        titulo: 'Bodies in Motion',
        acto: {
          foto: 'producciones/cuerpos-1',
          alt: 'Beams of light cut through the haze over musicians and dancers on stage.',
          ficha: [
            ['Format', '#LaJoven String Camerata'],
            ['With', 'Quatuor Debussy and Compañía Cuerpo de Indias'],
            ['Year', '2024'],
          ],
          galeria: [
            { foto: 'producciones/cuerpos-2', alt: 'The camerata plays standing under a ceiling of lights and smoke.' },
            { foto: 'producciones/cuerpos-3', alt: 'Barefoot violinists play standing on the dark stage.' },
          ],
        },
      },
      {
        id: 'equilibrios',
        titulo: 'Sonic Balances',
        acto: {
          foto: 'producciones/equilibrios-1',
          alt: 'Musicians and dancers share the stage under blue light at the 2025 Bogotá performance.',
          video: { clip: 'equilibrios' },
          ficha: [
            ['Format', 'La Joven String Camerata'],
            ['With', 'Quatuor Debussy and La Ventana Producciones'],
            ['Year', '2025'],
          ],
          galeria: [
            { foto: 'producciones/equilibrios-2', alt: 'Cellists and performers in colourful hats amid smoke and light.' },
            { foto: 'producciones/equilibrios-3', alt: 'A cellist plays while a dancer leans against his back.' },
          ],
        },
      },
      { id: 'pajaro', titulo: 'The Firebird' },
    ],
  },

  colaboraciones: {
    titulo: 'Artists who have resonated with La Joven',
    testimonio: {
      texto:
        'With the Youth Philharmonic of Colombia I can give myself 100%, because what I get back is not just music: it is joy, laughter, focus and the dedication of all these young people.',
      cierre: 'It is a beautiful experience!',
      autor: 'Andrés Orozco-Estrada',
      rol: 'Principal guest conductor',
      foto: 'colaboraciones/orozco',
      alt: 'Andrés Orozco-Estrada conducts the orchestra, whose musicians play wearing red masks.',
    },
    segundo: {
      texto: 'There is something extraordinary here: a rare balance between artistic rigour and humanity.',
      autor: 'Paolo Bortolameolli',
    },
    roles: {
      director: 'Conductor',
      directora: 'Conductor',
      violinista: 'Violinist',
      cantautor: 'Singer-songwriter',
      banda: 'Band',
    },
    directores: 'Conductors',
    solistas: 'Soloists',
    populares: 'Popular artists',
    agrupaciones: 'Ensembles and companies',
  },

  trayectoria: {
    titulo: 'A story that can also be measured',
    cifras: [
      'Years',
      'International tours',
      'National tours',
      'Concerts',
      'Young musicians supported',
      'Conductors',
      'Soloists',
    ],
    salasTitulo: 'Stages that have resonated with La Joven',
    mapaAlt: 'Map of the Americas and Europe with arcs of light running from Bogotá to the eighteen halls where La Joven has played.',
    origen: 'Bogotá, home of La Joven',
  },

  lazos: {
    titulo: 'Beyond the stage',
    programa: '#LaJoven Creando Lazos',
    apertura: 'Our experience does not end when the curtain falls.',
    parrafos: [
      'We take what we live inside the orchestra to different regions of Colombia, sharing knowledge, supporting music programmes and building long-term relationships with communities, teachers and cultural organisations.',
      'That is how #LaJoven Creando Lazos (Building Bonds) was born: an initiative that makes music a space for shared learning and for strengthening Colombia’s music ecosystem.',
    ],
  },

  agenda: {
    titulo: 'What comes next',
    produccion: 'The Firebird',
    gira: 'European tour · 2027',
  },

  fundacion: {
    titulo: 'La Joven, a commitment of the Fundación Bolívar Davivienda',
    parrafos: [
      'The Fundación Bolívar Davivienda leads the social commitment of Grupo Bolívar, driving programmes that build capabilities in people, communities and organisations to create lasting opportunities for the country. Its work spans education, entrepreneurship, organisational strengthening and artistic development, with a focus on social innovation.',
      'Within that framework the Youth Philharmonic of Colombia was born: the Foundation’s orchestra, which for more than 16 years has been nurturing young musical talent.',
    ],
    boton: 'Learn more about the Foundation',
    nuevaPestana: '(opens in a new tab)',
  },

  contacto: {
    titulo: 'Let’s take meaningful experiences to new stages',
    parrafos: [
      'Music can open questions, spark encounters and build memorable experiences.',
      'If you would like to know more about the productions of the Youth Philharmonic of Colombia, explore touring possibilities or start an artistic conversation, let’s talk.',
    ],
    asuntoLeyenda: 'What are you writing about?',
    asuntos: ['Artistic programming', 'Press', 'Partnerships', 'General information'],
    campos: { nombre: 'Full name', correo: 'Email address', mensaje: 'Message' },
    enviar: 'Send',
    error: 'Please check the highlighted fields: your name, a valid email and your message.',
    pendiente:
      'Sending is not connected yet: the team’s email addresses per category are still missing. Nothing you write is stored or sent.',
    continua: 'The conversation continues',
    continuaTexto:
      'Receive news about new productions, tours, collaborations and projects that keep expanding La Joven’s artistic experience.',
    fbd: 'Orchestra of the Fundación Bolívar Davivienda',
    legal: '© 2026 Fundación Bolívar Davivienda',
  },

  ciudades: {
    hamburgo: 'Hamburg',
    berlin: 'Berlin',
    viena: 'Vienna',
    amsterdam: 'Amsterdam',
    paris: 'Paris',
    frankfurt: 'Frankfurt',
    zurich: 'Zurich',
    dortmund: 'Dortmund',
    friburgo: 'Freiburg',
    colonia: 'Cologne',
    berna: 'Bern',
    saopaulo: 'São Paulo',
    dallas: 'Dallas',
    houston: 'Houston',
    miami: 'Miami',
    bogota: 'Bogotá',
    bucaramanga: 'Bucaramanga',
    dusseldorf: 'Düsseldorf',
    madrid: 'Madrid',
    barcelona: 'Barcelona',
  },
  paises: {
    alemania: 'Germany',
    austria: 'Austria',
    suiza: 'Switzerland',
    francia: 'France',
    espana: 'Spain',
    paisesbajos: 'Netherlands',
    brasil: 'Brazil',
    eeuu: 'United States',
    colombia: 'Colombia',
  },
};
