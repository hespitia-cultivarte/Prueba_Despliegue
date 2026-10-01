import type { Contenido } from './tipos';

// U+00AD (guion suave, invisible): punto de corte para las palabras largas de los títulos
// grandes. No se ve salvo que la palabra no quepa en la línea.
export const de: Contenido = {
  nombresMovimientos: [
    'Ouvertüre',
    'Wer wir sind',
    'Was uns ausmacht',
    'Intermezzo',
    'Produktionen',
    'Kooperationen',
    'Werdegang',
    'Creando Lazos',
    'Was kommt',
    'Die Stiftung',
    'Zugabe',
  ],

  obertura: {
    beatDos: 'Hundert Musiker*innen zwischen 16 und 24 Jahren aus allen Regionen Kolumbiens.',
    makingOf: 'Making-of ansehen',
    cineTitulo: 'Making-of · Europatournee 2023 · Jugendphilharmonie Kolumbiens',
  },

  quienes: [
    {
      foto: 'quienes/postura',
      titulo: 'Was uns bewegt',
      texto:
        'Wir sind ein Orchester, das Musik als lebendige Erfahrung versteht. Wir betreten die Bühne nicht nur, um Partituren zu spielen.',
      enfasis: 'Wir kommen, um sie zu bewohnen.',
      alt: 'Ein Musiker von La Joven mit erhobenen Armen auf der Bühne der Berliner Philharmonie.',
    },
    {
      foto: 'quienes/comunidad',
      titulo: 'Woher wir kommen',
      texto:
        'Wir sind junge Musiker*innen zwischen 16 und 24 Jahren aus allen Regionen Kolumbiens. Wir kommen aus Städten, Dörfern, Bergen und von den Küsten. Wir haben unterschiedliche Geschichten, unterschiedliche Wege und unterschiedliche Arten, die Welt zu verstehen.',
      enfasis: '',
      alt: 'Mitglieder von La Joven feiern gemeinsam mit ihren Instrumenten am Ende eines Konzerts.',
    },
    {
      foto: 'quienes/identidad',
      titulo: 'Was auf der Bühne geschieht',
      texto:
        'Wir sind unruhig, leidenschaftlich, anspruchsvoll. Wir sind junge Menschen, die sich nicht damit begnügen, eine Tradition nachzuspielen, sondern mit ihr ins Gespräch kommen, sie hinterfragen und lebendig halten wollen.',
      enfasis: '',
      alt: 'Eine junge Geigerin spielt konzentriert, beleuchtet inmitten des Orchesters.',
    },
  ],

  diferencial: {
    antetitulo: 'Mehr als ein Konzert',
    titulo: 'Musik als Ausgangs­punkt',
    bajada: 'La Joven erweitert das symphonische Erlebnis.',
    bloques: [
      {
        foto: 'diferencial/narrativa',
        titulo: 'Szenische Erzählung',
        texto: 'Jede Produktion erschafft aus Konzepten, Dramaturgie und emotionalen Wegen ein eigenes Universum.',
        alt: 'Ein großes rotes Tuch hebt sich mitten in der Aufführung über das Orchester.',
      },
      {
        foto: 'diferencial/movimiento',
        titulo: 'Bewegung und Körpersprache',
        texto: 'Die Musiker*innen erweitern die interpretatorische Sprache durch Bewegung, Ausdruck und szenisches Handeln.',
        alt: 'Jongleure werfen Keulen in die Luft, zwischen Musiker*innen mit ihren Instrumenten.',
      },
      {
        foto: 'diferencial/luz',
        titulo: 'Visuelles Design und Licht',
        texto: 'Licht, Raum, Atmosphäre und visuelle Elemente sind Teil des künstlerischen Erlebnisses.',
        alt: 'Lichtstrahlen fallen durch den Nebel auf eine Figur in monumentalem Kostüm, umgeben von Musiker*innen.',
      },
      {
        foto: 'diferencial/mirada',
        titulo: 'Ein zeitgenössischer Blick',
        texto:
          'La Joven setzt sich mit den Fragen, Gefühlen und Spannungen der Gegenwart auseinander und öffnet die symphonische Sprache für neue Formen der Begegnung mit dem Publikum.',
        alt: 'Geiger*innen von La Joven spielen mit bunten Masken.',
      },
    ],
    cierreAntetitulo: 'Sechs Produktionen',
    cierreTexto: 'Auf der Bühne erleben',
  },

  frase: {
    primera: 'Wir wollen keine spektakuläreren Konzerte machen.',
    segunda: 'Wir wollen bedeutsamere Erlebnisse schaffen.',
    alt: 'Das Teatro Metropolitano in Medellín im Dunkeln: Publikum und Orchester halten brennende Kerzen, während der Dirigent im Licht vom Pult aus dirigiert.',
  },

  producciones: {
    titulo: 'Künst­lerische Produk­tionen',
    bajada: 'Bühnenwelten, aus der Musik heraus gebaut.',
    verObra: 'Zum Werk',
    dossierSolicitud: 'Technisches Dossier auf Anfrage',
    solicitarDossier: 'Technisches Dossier anfordern',
    indice: [
      { id: 'consagracion', titulo: 'Le Sacre du printemps' },
      {
        id: 'petrushka',
        titulo: 'Petruschka',
        acto: {
          foto: 'producciones/petrushka-1',
          alt: 'Das Orchester in blauem Licht in der Berliner Philharmonie, von oben aus dem Saal gesehen.',
          sinopsis:
            'Diese Inszenierung von Petruschka will den rebellischsten und herausforderndsten Kern von Igor Strawinskys Werk zurückgewinnen, indem sie die Bewegung des gesamten Orchesters, den Dirigenten eingeschlossen, zum Teil der interpretatorischen Sprache macht. Jenseits der Geschichte einer Marionette verkörpert Petruschka die universelle Sehnsucht nach Freiheit gegenüber Machtstrukturen und Konventionen, die den Menschen einengen.',
          ficha: [
            ['Werk', 'Igor Strawinsky, Petruschka'],
            ['Dirigent', 'Andrés Orozco-Estrada'],
            ['Spielort', 'Berliner Philharmonie, Berlin'],
            ['Tournee', 'Europatournee 2023'],
          ],
          galeria: [
            { foto: 'producciones/petrushka-2', alt: 'Holz- und Blechbläser spielen mit goldenen Masken.' },
            { foto: 'producciones/petrushka-3', alt: 'Das ganze Orchester hebt die Arme in blauem Licht.' },
          ],
        },
      },
      { id: 'shostakovich', titulo: 'Schostakowitschs Fünfte' },
      {
        id: 'cuerpos',
        titulo: 'Körper in Bewegung',
        acto: {
          foto: 'producciones/cuerpos-1',
          alt: 'Lichtstrahlen durchdringen den Nebel über Musiker*innen und Tänzer*innen auf der Bühne.',
          ficha: [
            ['Format', 'Streicher-Camerata von #LaJoven'],
            ['Mit', 'Quatuor Debussy und Compañía Cuerpo de Indias'],
            ['Jahr', '2024'],
          ],
          galeria: [
            { foto: 'producciones/cuerpos-2', alt: 'Die Camerata spielt im Stehen unter einer Decke aus Licht und Rauch.' },
            { foto: 'producciones/cuerpos-3', alt: 'Barfüßige Geiger*innen spielen im Stehen auf der dunklen Bühne.' },
          ],
        },
      },
      {
        id: 'equilibrios',
        titulo: 'Klangliche Gleich­gewichte',
        acto: {
          foto: 'producciones/equilibrios-1',
          alt: 'Musiker*innen und Tänzer*innen teilen sich die Bühne in blauem Licht, bei der Aufführung in Bogotá 2025.',
          video: { clip: 'equilibrios' },
          ficha: [
            ['Format', 'Streicher-Camerata La Joven'],
            ['Mit', 'Quatuor Debussy und La Ventana Producciones'],
            ['Jahr', '2025'],
          ],
          galeria: [
            { foto: 'producciones/equilibrios-2', alt: 'Cellist*innen und Artist*innen mit bunten Hüten zwischen Rauch und Licht.' },
            { foto: 'producciones/equilibrios-3', alt: 'Ein Cellist spielt, während sich eine Tänzerin an seinen Rücken lehnt.' },
          ],
        },
      },
      { id: 'pajaro', titulo: 'Der Feuervogel' },
    ],
  },

  colaboraciones: {
    titulo: 'Künst­ler*innen, die mit La Joven in Reso­nanz getreten sind',
    testimonio: {
      texto:
        'Mit der Jugendphilharmonie Kolumbiens kann ich mich zu 100 % hingeben, denn was ich zurückbekomme, ist nicht nur Musik: Es ist Freude, Lachen, Konzentration und die Hingabe all dieser jungen Menschen.',
      cierre: 'Es ist eine wunderschöne Erfahrung!',
      autor: 'Andrés Orozco-Estrada',
      rol: 'Erster Gastdirigent',
      foto: 'colaboraciones/orozco',
      alt: 'Andrés Orozco-Estrada dirigiert das Orchester, das mit roten Masken spielt.',
    },
    segundo: {
      texto: 'Hier gibt es etwas Außergewöhnliches: ein seltenes Gleichgewicht zwischen künstlerischer Strenge und Menschlichkeit.',
      autor: 'Paolo Bortolameolli',
    },
    roles: {
      director: 'Dirigent',
      directora: 'Dirigentin',
      violinista: 'Geigerin',
      cantautor: 'Singer-Songwriter',
      banda: 'Band',
    },
    directores: 'Dirigent*innen',
    solistas: 'Solist*innen',
    populares: 'Popkünstler*innen',
    agrupaciones: 'Ensembles und Kompanien',
  },

  trayectoria: {
    titulo: 'Eine Geschich­te, die sich auch messen lässt',
    cifras: [
      'Jahre',
      'Internationale Tourneen',
      'Nationale Tourneen',
      'Konzerte',
      'Geförderte junge Musiker*innen',
      'Dirigent*innen',
      'Solist*innen',
    ],
    salasTitulo: 'Bühnen, die mit La Joven in Resonanz getreten sind',
    mapaAlt: 'Karte von Amerika und Europa mit Lichtbögen, die von Bogotá zu den achtzehn Sälen führen, in denen La Joven gespielt hat.',
    origen: 'Bogotá, Heimat von La Joven',
  },

  lazos: {
    titulo: 'Jenseits der Bühne',
    programa: '#LaJoven Creando Lazos',
    apertura: 'Unsere Erfahrung endet nicht, wenn der Vorhang fällt.',
    parrafos: [
      'Wir tragen, was wir im Orchester erleben, in verschiedene Regionen Kolumbiens: Wir teilen Wissen, begleiten musikalische Prozesse und bauen langfristige Beziehungen zu Gemeinschaften, Lehrkräften und Kulturorganisationen auf.',
      'So entstand #LaJoven Creando Lazos (Verbindungen schaffen), eine Initiative, die Musik zu einem Raum für gemeinsames Lernen und zur Stärkung des kolumbianischen Musik-Ökosystems macht.',
    ],
  },

  agenda: {
    titulo: 'Was kommt',
    produccion: 'Der Feuervogel',
    gira: 'Europatournee · 2027',
  },

  fundacion: {
    titulo: 'La Joven, ein Engage­ment der Fundación Bolívar Davi­vienda',
    parrafos: [
      'Die Fundación Bolívar Davivienda trägt das soziale Engagement der Grupo Bolívar und fördert Programme, die Menschen, Gemeinschaften und Organisationen befähigen, nachhaltige Chancen für das Land zu schaffen. Ihre Arbeit umfasst Bildung, Unternehmertum, Organisationsentwicklung und künstlerische Förderung, mit einem Schwerpunkt auf sozialer Innovation.',
      'In diesem Rahmen entstand die Jugendphilharmonie Kolumbiens, das Orchester der Stiftung, das seit mehr als 16 Jahren junge musikalische Talente fördert.',
    ],
    boton: 'Mehr über die Stiftung',
    nuevaPestana: '(öffnet in einem neuen Tab)',
  },

  contacto: {
    titulo: 'Bringen wir bedeut­same Erleb­nisse auf neue Bühnen',
    parrafos: [
      'Musik kann Fragen öffnen, Begegnungen stiften und unvergessliche Erlebnisse schaffen.',
      'Wenn Sie mehr über die Produktionen der Jugendphilharmonie Kolumbiens erfahren, Tourneemöglichkeiten ausloten oder ein künstlerisches Gespräch beginnen möchten: Sprechen wir miteinander.',
    ],
    asuntoLeyenda: 'Worum geht es in Ihrer Nachricht?',
    asuntos: ['Künstlerische Programmplanung', 'Presse', 'Partnerschaften', 'Allgemeine Informationen'],
    campos: { nombre: 'Vor- und Nachname', correo: 'E-Mail-Adresse', mensaje: 'Nachricht' },
    enviar: 'Senden',
    error: 'Bitte prüfen Sie die markierten Felder: Name, eine gültige E-Mail-Adresse und Ihre Nachricht.',
    pendiente:
      'Der Versand ist noch nicht angebunden: Die E-Mail-Adressen des Teams je Kategorie fehlen noch. Nichts, was Sie schreiben, wird gespeichert oder versendet.',
    continua: 'Das Gespräch geht weiter',
    continuaTexto:
      'Erhalten Sie Neuigkeiten zu Produktionen, Tourneen, Kooperationen und Projekten, die das künstlerische Erlebnis von La Joven weiter ausbauen.',
    fbd: 'Orchester der Fundación Bolívar Davivienda',
    legal: '© 2026 Fundación Bolívar Davivienda',
  },

  ciudades: {
    hamburgo: 'Hamburg',
    berlin: 'Berlin',
    viena: 'Wien',
    amsterdam: 'Amsterdam',
    paris: 'Paris',
    frankfurt: 'Frankfurt',
    zurich: 'Zürich',
    dortmund: 'Dortmund',
    friburgo: 'Freiburg',
    colonia: 'Köln',
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
    alemania: 'Deutschland',
    austria: 'Österreich',
    suiza: 'Schweiz',
    francia: 'Frankreich',
    espana: 'Spanien',
    paisesbajos: 'Niederlande',
    brasil: 'Brasilien',
    eeuu: 'USA',
    colombia: 'Kolumbien',
  },
};
