import type { Contenido } from './tipos';

export const fr: Contenido = {
  nombresMovimientos: [
    'Ouverture',
    'Qui sommes-nous',
    'Notre différence',
    'Intermezzo',
    'Productions',
    'Collaborations',
    'Parcours',
    'Creando Lazos',
    'À venir',
    'La Fondation',
    'Bis',
  ],

  obertura: {
    beatDos: 'Cent musiciens de 16 à 24 ans, venus de toutes les régions de Colombie.',
    makingOf: 'Voir le making of',
    cineTitulo: 'Making of · Tournée européenne 2023 · Philharmonique des Jeunes de Colombie',
  },

  quienes: [
    {
      foto: 'quienes/postura',
      titulo: 'Ce qui nous anime',
      texto:
        'Nous sommes un orchestre qui conçoit la musique comme une expérience vivante. Nous ne montons pas sur scène seulement pour interpréter des partitions.',
      enfasis: 'Nous venons les habiter.',
      alt: 'Un musicien de La Joven, les bras levés, sur la scène de la Berliner Philharmonie.',
    },
    {
      foto: 'quienes/comunidad',
      titulo: 'D’où nous venons',
      texto:
        'Nous sommes de jeunes musiciens de 16 à 24 ans, venus de toutes les régions de Colombie. Nous venons des villes, des villages, des montagnes et des côtes. Nous avons des histoires différentes, des parcours différents et des manières différentes de comprendre le monde.',
      enfasis: '',
      alt: 'Des membres de La Joven célèbrent ensemble, instruments en main, à la fin d’un concert.',
    },
    {
      foto: 'quienes/identidad',
      titulo: 'Ce qui se passe sur scène',
      texto:
        'Nous sommes curieux, passionnés, exigeants. Nous sommes des jeunes qui ne se contentent pas de reproduire une tradition : nous voulons dialoguer avec elle, la questionner et la garder vivante.',
      enfasis: '',
      alt: 'Une jeune violoniste joue, concentrée, éclairée au milieu de l’orchestre.',
    },
  ],

  diferencial: {
    antetitulo: 'Au-delà du concert',
    titulo: 'La musique comme point de départ',
    bajada: 'La Joven élargit l’expérience symphonique.',
    bloques: [
      {
        foto: 'diferencial/narrativa',
        titulo: 'Narration scénique',
        texto: 'Chaque production construit un univers propre à partir de concepts, d’une dramaturgie et de parcours émotionnels.',
        alt: 'Un grand tissu rouge se soulève au-dessus de l’orchestre en pleine représentation.',
      },
      {
        foto: 'diferencial/movimiento',
        titulo: 'Mouvement et langage corporel',
        texto: 'Les musiciens élargissent le langage de l’interprétation par le mouvement, l’expressivité et l’action scénique.',
        alt: 'Des jongleurs lancent des massues en l’air parmi des musiciens tenant leurs instruments.',
      },
      {
        foto: 'diferencial/luz',
        titulo: 'Conception visuelle et lumière',
        texto: 'La lumière, l’espace, l’atmosphère et les éléments visuels font partie de l’expérience artistique.',
        alt: 'Des faisceaux de lumière traversent la brume sur une silhouette au costume monumental entourée de musiciens.',
      },
      {
        foto: 'diferencial/mirada',
        titulo: 'Un regard contemporain',
        texto:
          'La Joven dialogue avec les questions, les émotions et les tensions du présent, et rapproche le langage symphonique de nouvelles façons de toucher le public.',
        alt: 'Des violonistes de La Joven jouent avec des loups colorés.',
      },
    ],
    cierreAntetitulo: 'Six productions',
    cierreTexto: 'Le voir sur scène',
  },

  frase: {
    primera: 'Nous ne cherchons pas à rendre les concerts plus spectaculaires.',
    segunda: 'Nous cherchons à créer des expériences plus porteuses de sens.',
    alt: 'Le Teatro Metropolitano de Medellín dans l’obscurité : le public et l’orchestre tiennent des bougies allumées tandis que le chef, éclairé, dirige depuis le podium.',
  },

  producciones: {
    titulo: 'Productions artistiques',
    bajada: 'Des univers scéniques construits à partir de la musique.',
    verObra: 'Voir l’œuvre',
    dossierSolicitud: 'Dossier technique sur demande',
    solicitarDossier: 'Demander le dossier technique',
    indice: [
      { id: 'consagracion', titulo: 'Le Sacre du printemps' },
      {
        id: 'petrushka',
        titulo: 'Petrouchka',
        acto: {
          foto: 'producciones/petrushka-1',
          alt: 'L’orchestre sous une lumière bleue à la Berliner Philharmonie, vu du haut de la salle.',
          sinopsis:
            'Cette mise en scène de Petrouchka cherche à retrouver l’esprit le plus rebelle et provocateur de l’œuvre d’Igor Stravinsky, en intégrant le mouvement de tout l’orchestre, chef compris, au langage de l’interprétation. Au-delà de l’histoire d’une marionnette, Petrouchka incarne l’aspiration universelle à la liberté face aux structures de pouvoir et aux conventions qui limitent l’être humain.',
          ficha: [
            ['Œuvre', 'Igor Stravinsky, Petrouchka'],
            ['Direction', 'Andrés Orozco-Estrada'],
            ['Salle', 'Berliner Philharmonie, Berlin'],
            ['Tournée', 'Tournée européenne 2023'],
          ],
          galeria: [
            { foto: 'producciones/petrushka-2', alt: 'Bois et cuivres jouent avec des loups dorés.' },
            { foto: 'producciones/petrushka-3', alt: 'Tout l’orchestre lève les bras sous une lumière bleue.' },
          ],
        },
      },
      { id: 'shostakovich', titulo: 'La Cinquième de Chostakovitch' },
      {
        id: 'cuerpos',
        titulo: 'Corps en mouvement',
        acto: {
          foto: 'producciones/cuerpos-1',
          alt: 'Des faisceaux de lumière traversent la brume au-dessus de musiciens et de danseurs sur scène.',
          ficha: [
            ['Format', 'Camerata à cordes de #LaJoven'],
            ['Avec', 'Quatuor Debussy et Compañía Cuerpo de Indias'],
            ['Année', '2024'],
          ],
          galeria: [
            { foto: 'producciones/cuerpos-2', alt: 'La camerata joue debout sous un plafond de lumières et de fumée.' },
            { foto: 'producciones/cuerpos-3', alt: 'Des violonistes pieds nus jouent debout sur la scène sombre.' },
          ],
        },
      },
      {
        id: 'equilibrios',
        titulo: 'Équilibres sonores',
        acto: {
          foto: 'producciones/equilibrios-1',
          alt: 'Musiciens et danseurs partagent la scène sous une lumière bleue, lors de la représentation de Bogotá 2025.',
          video: { clip: 'equilibrios' },
          ficha: [
            ['Format', 'Camerata à cordes La Joven'],
            ['Avec', 'Quatuor Debussy et La Ventana Producciones'],
            ['Année', '2025'],
          ],
          galeria: [
            { foto: 'producciones/equilibrios-2', alt: 'Violoncellistes et artistes coiffés de chapeaux colorés entre fumée et lumière.' },
            { foto: 'producciones/equilibrios-3', alt: 'Un violoncelliste joue tandis qu’une danseuse s’appuie sur son dos.' },
          ],
        },
      },
      { id: 'pajaro', titulo: 'L’Oiseau de feu' },
    ],
  },

  colaboraciones: {
    titulo: 'Des artistes qui ont résonné avec La Joven',
    testimonio: {
      texto:
        'Avec la Philharmonique des Jeunes de Colombie, je peux me donner à 100 %, parce que ce que je reçois en retour n’est pas seulement de la musique : c’est de la joie, des rires, de la concentration et l’engagement de tous ces jeunes.',
      cierre: 'C’est une expérience magnifique !',
      autor: 'Andrés Orozco-Estrada',
      rol: 'Premier chef invité',
      foto: 'colaboraciones/orozco',
      alt: 'Andrés Orozco-Estrada dirige l’orchestre, dont les musiciens jouent avec des loups rouges.',
    },
    segundo: {
      texto: 'Il y a ici quelque chose d’extraordinaire : un équilibre rare entre exigence artistique et humanité.',
      autor: 'Paolo Bortolameolli',
    },
    roles: {
      director: 'Chef d’orchestre',
      directora: 'Cheffe d’orchestre',
      violinista: 'Violoniste',
      cantautor: 'Auteur-compositeur-interprète',
      banda: 'Groupe',
    },
    directores: 'Chefs d’orchestre',
    solistas: 'Solistes',
    populares: 'Artistes populaires',
    agrupaciones: 'Ensembles et compagnies',
  },

  trayectoria: {
    titulo: 'Une histoire qui se mesure aussi',
    cifras: [
      'Années',
      'Tournées internationales',
      'Tournées nationales',
      'Concerts',
      'Jeunes musiciens accompagnés',
      'Chefs d’orchestre',
      'Solistes',
    ],
    salasTitulo: 'Des scènes qui ont résonné avec La Joven',
    mapaAlt: 'Carte des Amériques et de l’Europe avec des arcs de lumière partant de Bogotá vers les dix-huit salles où La Joven s’est produite.',
    origen: 'Bogotá, maison de La Joven',
  },

  lazos: {
    titulo: 'Au-delà de la scène',
    programa: '#LaJoven Creando Lazos',
    apertura: 'Notre expérience ne s’arrête pas quand le rideau tombe.',
    parrafos: [
      'Nous portons ce que nous vivons au sein de l’orchestre dans différents territoires de Colombie, en partageant nos savoirs, en accompagnant des projets musicaux et en tissant des liens durables avec des communautés, des enseignants et des organisations culturelles.',
      'Ainsi est né #LaJoven Creando Lazos (Tisser des liens), une initiative qui fait de la musique un espace d’apprentissage partagé et de renforcement de l’écosystème musical colombien.',
    ],
  },

  agenda: {
    titulo: 'À venir',
    produccion: 'L’Oiseau de feu',
    gira: 'Tournée européenne · 2027',
  },

  fundacion: {
    titulo: 'La Joven, un engagement de la Fundación Bolívar Davivienda',
    parrafos: [
      'La Fundación Bolívar Davivienda porte l’engagement social du Grupo Bolívar, en soutenant des programmes qui développent les capacités des personnes, des communautés et des organisations afin de créer des opportunités durables pour le pays. Son action couvre l’éducation, l’entrepreneuriat, le renforcement des organisations et le développement artistique, avec une approche d’innovation sociale.',
      'C’est dans ce cadre qu’est née la Philharmonique des Jeunes de Colombie, l’orchestre de la Fondation qui, depuis plus de 16 ans, accompagne le développement des jeunes talents musicaux.',
    ],
    boton: 'En savoir plus sur la Fondation',
    nuevaPestana: '(s’ouvre dans un nouvel onglet)',
  },

  contacto: {
    titulo: 'Portons des expériences porteuses de sens sur de nouvelles scènes',
    parrafos: [
      'La musique peut ouvrir des questions, susciter des rencontres et créer des expériences mémorables.',
      'Si vous souhaitez en savoir plus sur les productions de la Philharmonique des Jeunes de Colombie, explorer des possibilités de tournée ou ouvrir une conversation artistique, parlons-en.',
    ],
    asuntoLeyenda: 'À quel sujet nous écrivez-vous ?',
    asuntos: ['Programmation artistique', 'Presse', 'Partenariats', 'Informations générales'],
    campos: { nombre: 'Prénom et nom', correo: 'Adresse e-mail', mensaje: 'Message' },
    enviar: 'Envoyer',
    error: 'Vérifiez les champs signalés : votre nom, une adresse e-mail valide et votre message.',
    pendiente:
      'L’envoi n’est pas encore connecté : il manque les adresses de l’équipe par catégorie. Rien de ce que vous écrivez n’est enregistré ni envoyé.',
    continua: 'La conversation continue',
    continuaTexto:
      'Recevez des nouvelles des productions, tournées, collaborations et projets qui continuent d’élargir l’expérience artistique de La Joven.',
    fbd: 'Orchestre de la Fundación Bolívar Davivienda',
    legal: '© 2026 Fundación Bolívar Davivienda',
  },

  ciudades: {
    hamburgo: 'Hambourg',
    berlin: 'Berlin',
    viena: 'Vienne',
    amsterdam: 'Amsterdam',
    paris: 'Paris',
    frankfurt: 'Francfort',
    zurich: 'Zurich',
    dortmund: 'Dortmund',
    friburgo: 'Fribourg-en-Brisgau',
    colonia: 'Cologne',
    berna: 'Berne',
    saopaulo: 'São Paulo',
    dallas: 'Dallas',
    houston: 'Houston',
    miami: 'Miami',
    bogota: 'Bogotá',
    bucaramanga: 'Bucaramanga',
    dusseldorf: 'Düsseldorf',
    madrid: 'Madrid',
    barcelona: 'Barcelone',
  },
  paises: {
    alemania: 'Allemagne',
    austria: 'Autriche',
    suiza: 'Suisse',
    francia: 'France',
    espana: 'Espagne',
    paisesbajos: 'Pays-Bas',
    brasil: 'Brésil',
    eeuu: 'États-Unis',
    colombia: 'Colombie',
  },
};
