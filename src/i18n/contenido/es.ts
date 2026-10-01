/**
 * Contenido en español: la fuente. Transcrito de los wireframes del PDF de
 * storytelling del cliente (LaJoven.com.pdf) más datos del material del Drive.
 * Nada inventado: donde no hay dato (redes, boletería, correos), no aparece.
 */
import type { Contenido } from './tipos';

export const es: Contenido = {
  nombresMovimientos: [
    'Obertura',
    'Quiénes somos',
    'El diferencial',
    'Intermezzo',
    'Producciones',
    'Colaboraciones',
    'Trayectoria',
    'Creando Lazos',
    'Lo que viene',
    'La Fundación',
    'Bis',
  ],

  obertura: {
    beatDos: 'Cien músicos de 16 a 24 años, de todas las regiones de Colombia.',
    makingOf: 'Ver el making of',
    cineTitulo: 'Making of · Gira Europa 2023 · Filarmónica Joven de Colombia',
  },

  quienes: [
    {
      foto: 'quienes/postura',
      titulo: 'Lo que nos mueve',
      texto:
        'Somos una orquesta que entiende la música como una experiencia viva. No venimos al escenario únicamente a interpretar partituras.',
      enfasis: 'Venimos a habitarlas.',
      alt: 'Un músico de La Joven con los brazos en alto sobre el escenario de la Berliner Philharmonie.',
    },
    {
      foto: 'quienes/comunidad',
      titulo: 'De dónde venimos',
      texto:
        'Somos jóvenes músicos de entre 16 y 24 años provenientes de todas las regiones de Colombia. Venimos de ciudades, pueblos, montañas y costas. Tenemos historias distintas, trayectorias distintas y formas distintas de entender el mundo.',
      enfasis: '',
      alt: 'Integrantes de La Joven celebran juntos con sus instrumentos al final de un concierto.',
    },
    {
      foto: 'quienes/identidad',
      titulo: 'Lo que sucede en escena',
      texto:
        'Somos inquietos, apasionados, rigurosos. Somos jóvenes que no se conforman con reproducir una tradición, sino que buscan dialogar con ella, cuestionarla y mantenerla viva.',
      enfasis: '',
      alt: 'Una violinista joven toca concentrada, iluminada en medio de la orquesta.',
    },
  ],

  diferencial: {
    antetitulo: 'Más allá del concierto',
    titulo: 'La música como punto de partida',
    bajada: 'La Joven amplía la experiencia sinfónica.',
    bloques: [
      {
        foto: 'diferencial/narrativa',
        titulo: 'Narrativa escénica',
        texto: 'Cada producción construye un universo propio a partir de conceptos, dramaturgia y recorridos emocionales.',
        alt: 'Una gran tela roja se levanta sobre la orquesta en plena función.',
      },
      {
        foto: 'diferencial/movimiento',
        titulo: 'Movimiento y lenguaje corporal',
        texto: 'Los músicos expanden el lenguaje interpretativo a través del movimiento, la expresividad y la acción escénica.',
        alt: 'Malabaristas lanzan clavas al aire entre músicos con sus instrumentos.',
      },
      {
        foto: 'diferencial/luz',
        titulo: 'Diseño visual e iluminación',
        texto: 'La luz, el espacio, la atmósfera y los elementos visuales hacen parte de la experiencia artística.',
        alt: 'Haces de luz caen entre la niebla sobre una figura con un vestuario monumental rodeada de músicos.',
      },
      {
        foto: 'diferencial/mirada',
        titulo: 'Una mirada contemporánea',
        texto:
          'La Joven dialoga con preguntas, emociones y tensiones del presente, acercando el lenguaje sinfónico a nuevas formas de conexión con las audiencias.',
        alt: 'Violinistas de La Joven tocan con antifaces de colores.',
      },
    ],
    cierreAntetitulo: 'Seis producciones',
    cierreTexto: 'Verlo en escena',
  },

  frase: {
    primera: 'No buscamos hacer conciertos más espectaculares.',
    segunda: 'Buscamos construir experiencias más significativas.',
    alt: 'El Teatro Metropolitano de Medellín a oscuras: el público y la orquesta sostienen velas encendidas mientras el director, iluminado, dirige desde el podio.',
  },

  producciones: {
    titulo: 'Producciones artísticas',
    bajada: 'Universos escénicos construidos desde la música.',
    verObra: 'Ver la obra',
    dossierSolicitud: 'Dossier técnico a solicitud',
    solicitarDossier: 'Solicitar dossier técnico',
    indice: [
      { id: 'consagracion', titulo: 'Consagración de la Primavera' },
      {
        id: 'petrushka',
        titulo: 'Petrushka',
        acto: {
          foto: 'producciones/petrushka-1',
          alt: 'La orquesta bajo luz azul en la Berliner Philharmonie, vista desde lo alto de la sala.',
          sinopsis:
            'Esta propuesta escénica de Petrushka busca recuperar la esencia más rebelde y desafiante de la obra de Ígor Stravinsky, integrando el movimiento de toda la orquesta, incluido el director, como parte del lenguaje interpretativo. Más allá de la historia de una marioneta, Petrushka encarna el anhelo universal de libertad frente a las estructuras de poder y las convenciones que limitan al ser humano.',
          ficha: [
            ['Obra', 'Ígor Stravinsky, Petrushka'],
            ['Dirección', 'Andrés Orozco-Estrada'],
            ['Escenario', 'Berliner Philharmonie, Berlín'],
            ['Gira', 'Gira Europea 2023'],
          ],
          galeria: [
            { foto: 'producciones/petrushka-2', alt: 'Vientos y metales tocan con antifaces dorados.' },
            { foto: 'producciones/petrushka-3', alt: 'La orquesta completa levanta los brazos bajo luz azul.' },
          ],
        },
      },
      { id: 'shostakovich', titulo: '5ta de Shostakovich' },
      {
        id: 'cuerpos',
        titulo: 'Cuerpos en Movimiento',
        acto: {
          foto: 'producciones/cuerpos-1',
          alt: 'Haces de luz atraviesan la niebla sobre músicos y bailarines en el escenario.',
          ficha: [
            ['Formato', 'Camerata de Cuerdas de #LaJoven'],
            ['Con', 'Quatuor Debussy y Compañía Cuerpo de Indias'],
            ['Año', '2024'],
          ],
          galeria: [
            { foto: 'producciones/cuerpos-2', alt: 'La camerata toca de pie bajo un techo de luces y humo.' },
            { foto: 'producciones/cuerpos-3', alt: 'Violinistas descalzos tocan de pie sobre el escenario oscuro.' },
          ],
        },
      },
      {
        id: 'equilibrios',
        titulo: 'Equilibrios Sonoros',
        acto: {
          foto: 'producciones/equilibrios-1',
          alt: 'Músicos y bailarines comparten el escenario bajo luz azul, en la función de Bogotá 2025.',
          video: { clip: 'equilibrios' },
          ficha: [
            ['Formato', 'Camerata de Cuerdas La Joven'],
            ['Con', 'Quatuor Debussy y La Ventana Producciones'],
            ['Año', '2025'],
          ],
          galeria: [
            { foto: 'producciones/equilibrios-2', alt: 'Chelistas y artistas con sombreros de colores entre humo y luz.' },
            { foto: 'producciones/equilibrios-3', alt: 'Un chelista toca mientras una bailarina se apoya en su espalda.' },
          ],
        },
      },
      { id: 'pajaro', titulo: 'Pájaro de Fuego' },
    ],
  },

  colaboraciones: {
    titulo: 'Artistas que han resonado con La Joven',
    testimonio: {
      texto:
        'Con la Filarmónica Joven de Colombia puedo entregarme al 100 %, porque lo que recibo a cambio no es solo música: es alegría, risas, concentración y la entrega de todos estos jóvenes.',
      cierre: '¡Es una experiencia bellísima!',
      autor: 'Andrés Orozco-Estrada',
      rol: 'Director principal invitado',
      foto: 'colaboraciones/orozco',
      alt: 'Andrés Orozco-Estrada dirige a la orquesta, que toca con antifaces rojos.',
    },
    segundo: {
      texto: 'Hay algo extraordinario aquí: un equilibrio poco común entre rigor artístico y humanidad.',
      autor: 'Paolo Bortolameolli',
    },
    roles: {
      director: 'Director',
      directora: 'Directora',
      violinista: 'Violinista',
      cantautor: 'Cantautor',
      banda: 'Banda',
    },
    directores: 'Directores orquestales',
    solistas: 'Solistas',
    populares: 'Artistas populares',
    agrupaciones: 'Agrupaciones y compañías',
  },

  trayectoria: {
    titulo: 'Una historia que también puede medirse',
    cifras: [
      'Años',
      'Giras internacionales',
      'Giras nacionales',
      'Conciertos',
      'Jóvenes músicos beneficiados',
      'Directores',
      'Solistas',
    ],
    salasTitulo: 'Escenarios que han resonado con La Joven',
    mapaAlt: 'Mapa de América y Europa con arcos de luz que salen de Bogotá hacia las dieciocho salas donde ha tocado La Joven.',
    origen: 'Bogotá, casa de La Joven',
  },

  lazos: {
    titulo: 'Más allá del escenario',
    programa: '#LaJoven Creando Lazos',
    apertura: 'Nuestra experiencia no termina cuando baja el telón.',
    parrafos: [
      'Llevamos lo que vivimos dentro de la orquesta a distintos territorios de Colombia, compartiendo conocimiento, acompañando procesos musicales y construyendo relaciones de largo plazo con comunidades, docentes y organizaciones culturales.',
      'Así nace #LaJoven Creando Lazos, una iniciativa que hace de la música un espacio para el aprendizaje compartido y el fortalecimiento del ecosistema musical colombiano.',
    ],
  },

  agenda: {
    titulo: 'Lo que viene',
    produccion: 'Pájaro de Fuego',
    gira: 'Gira europea · 2027',
  },

  fundacion: {
    titulo: 'La Joven, una apuesta de la Fundación Bolívar Davivienda',
    parrafos: [
      'La Fundación Bolívar Davivienda lidera la apuesta social del Grupo Bolívar, impulsando programas que desarrollan capacidades en personas, comunidades y organizaciones para generar oportunidades sostenibles para el país. Su trabajo abarca iniciativas en educación, emprendimiento, fortalecimiento organizacional y desarrollo artístico, con un enfoque de innovación social.',
      'En ese marco nace la Filarmónica Joven de Colombia, la orquesta de la Fundación que, desde hace más de 16 años, impulsa el desarrollo del talento musical joven.',
    ],
    boton: 'Conozca más sobre la Fundación',
    nuevaPestana: '(se abre en una pestaña nueva)',
  },

  contacto: {
    titulo: 'Llevemos experiencias significativas a nuevos escenarios',
    parrafos: [
      'La música puede abrir preguntas, provocar encuentros y construir experiencias memorables.',
      'Si quiere conocer más sobre las producciones de la Filarmónica Joven de Colombia, explorar posibilidades de circulación o abrir una conversación artística, conversemos.',
    ],
    asuntoLeyenda: '¿Sobre qué nos escribe?',
    asuntos: ['Programación artística', 'Prensa', 'Alianzas', 'Información general'],
    campos: { nombre: 'Nombre y apellido', correo: 'Correo electrónico', mensaje: 'Mensaje' },
    enviar: 'Enviar',
    error: 'Revise los campos marcados: nombre, un correo válido y su mensaje.',
    pendiente:
      'El envío todavía no está conectado: faltan los correos del equipo por categoría. Nada de lo que escriba se guarda ni se envía.',
    continua: 'La conversación continúa',
    continuaTexto:
      'Reciba información sobre nuevas producciones, giras, colaboraciones y proyectos que siguen ampliando la experiencia artística de La Joven.',
    fbd: 'Orquesta de la Fundación Bolívar Davivienda',
    legal: '© 2026 Fundación Bolívar Davivienda',
  },

  ciudades: {
    hamburgo: 'Hamburgo',
    berlin: 'Berlín',
    viena: 'Viena',
    amsterdam: 'Ámsterdam',
    paris: 'París',
    frankfurt: 'Frankfurt',
    zurich: 'Zúrich',
    dortmund: 'Dortmund',
    friburgo: 'Friburgo',
    colonia: 'Colonia',
    berna: 'Berna',
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
    alemania: 'Alemania',
    austria: 'Austria',
    suiza: 'Suiza',
    francia: 'Francia',
    espana: 'España',
    paisesbajos: 'Países Bajos',
    brasil: 'Brasil',
    eeuu: 'Estados Unidos',
    colombia: 'Colombia',
  },
};
