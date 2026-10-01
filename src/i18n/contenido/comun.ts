/**
 * Datos que no cambian con el idioma: nombres propios, coordenadas, fechas y
 * claves de fotos. Cada idioma pone solo las palabras (contenido/{es,en,fr,de}.ts).
 */

export const idsMovimientos = [
  'obertura',
  'quienes',
  'diferencial',
  'intermezzo',
  'producciones',
  'colaboraciones',
  'trayectoria',
  'lazos',
  'agenda',
  'fundacion',
  'contacto',
] as const;
export type IdMovimiento = (typeof idsMovimientos)[number];

export const numerales = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'] as const;

/** Tempos: italiano de partitura, iguales en todos los idiomas. */
export const tempos = [
  'Maestoso',
  'Andante',
  'Allegro vivace',
  'Adagio',
  'Andante con moto',
  'Cantabile',
  'Allegro',
  'Moderato',
  'Vivace',
  'Tranquillo',
  'Finale',
] as const;

export type Rol = 'director' | 'directora' | 'violinista' | 'cantautor' | 'banda';

/**
 * Los rostros de Colaboraciones. Solo quien tiene una foto con licencia libre o
 * del propio archivo de La Joven (src/lib/fotos.json guarda fuente y licencia).
 */
export const destacados: { nombre: string; rol: Rol; foto: string }[] = [
  { nombre: 'Hilary Hahn', rol: 'violinista', foto: 'colaboraciones/artistas/hilary-hahn' },
  { nombre: 'Andrés Orozco-Estrada', rol: 'director', foto: 'colaboraciones/artistas/orozco-estrada' },
  { nombre: 'Rafael Payare', rol: 'director', foto: 'colaboraciones/artistas/rafael-payare' },
  { nombre: 'Carlos Miguel Prieto', rol: 'director', foto: 'colaboraciones/artistas/carlos-miguel-prieto' },
  { nombre: 'Andrés Cepeda', rol: 'cantautor', foto: 'colaboraciones/artistas/andres-cepeda' },
  { nombre: 'Morat', rol: 'banda', foto: 'colaboraciones/artistas/morat' },
  { nombre: 'Diego Torres', rol: 'cantautor', foto: 'colaboraciones/artistas/diego-torres' },
];

export const directores = [
  'Andrés Orozco-Estrada', 'Carlos Miguel Prieto', 'Matthew Hazelwood', 'Carlos Izcaray',
  'Reinaldo Alessandrini', 'Adrián Chamorro', 'Juan Felipe Molano', 'Lawrence Renes',
  'Paolo Bortolameolli', 'Rafael Payare', 'Tatiana Pérez-Hernández', 'Lina González-Granados',
  'Claudio Cruz', 'Juan Pablo Valencia', 'Carlos Ágreda', 'Andrew Gourlay', 'Alejandro Posada',
  'David William Holland', 'Ricardo Jaramillo', 'Carlos Andrés Botero', 'Germán Gutiérrez',
  'David Greilsammer',
];
export const solistas = ['Hilary Hahn'];
export const populares = ['Andrés Cepeda', 'Morat', 'Diego Torres'];

/** Sin enlaces: no hay URL oficial confirmada por el cliente para ninguna. */
export const agrupaciones: { nombre: string; logo: string }[] = [
  { nombre: 'Quatuor Debussy', logo: 'quatuor-debussy' },
  { nombre: 'Compañía Cuerpo de Indias', logo: 'cuerpo-de-indias' },
  { nombre: 'La Ventana Producciones', logo: 'la-ventana' },
];

export type Ciudad =
  | 'hamburgo' | 'berlin' | 'viena' | 'amsterdam' | 'paris' | 'frankfurt' | 'zurich'
  | 'dortmund' | 'friburgo' | 'colonia' | 'berna' | 'saopaulo' | 'dallas' | 'houston'
  | 'miami' | 'bogota' | 'bucaramanga' | 'dusseldorf' | 'madrid' | 'barcelona';

export type Pais =
  | 'alemania' | 'austria' | 'suiza' | 'francia' | 'espana'
  | 'paisesbajos' | 'brasil' | 'eeuu' | 'colombia';

/** El país de cada ciudad con sala o fecha. */
export const paisDe: Record<Ciudad, Pais> = {
  hamburgo: 'alemania', berlin: 'alemania', frankfurt: 'alemania', dortmund: 'alemania',
  friburgo: 'alemania', colonia: 'alemania', dusseldorf: 'alemania',
  viena: 'austria', zurich: 'suiza', berna: 'suiza', paris: 'francia',
  amsterdam: 'paisesbajos', madrid: 'espana', barcelona: 'espana',
  saopaulo: 'brasil', dallas: 'eeuu', houston: 'eeuu', miami: 'eeuu',
  bogota: 'colombia', bucaramanga: 'colombia',
};

/** [lon, lat] de cada ciudad con sala. Bogotá es la casa: de ahí salen los arcos. */
export const coordenadas: Partial<Record<Ciudad, [number, number]>> = {
  bogota: [-74.07, 4.71],
  bucaramanga: [-73.12, 7.12],
  miami: [-80.19, 25.76],
  houston: [-95.37, 29.76],
  dallas: [-96.8, 32.78],
  saopaulo: [-46.63, -23.55],
  paris: [2.35, 48.86],
  amsterdam: [4.9, 52.37],
  colonia: [6.96, 50.94],
  dortmund: [7.47, 51.51],
  hamburgo: [9.99, 53.55],
  berlin: [13.4, 52.52],
  frankfurt: [8.68, 50.11],
  friburgo: [7.85, 47.99],
  zurich: [8.54, 47.37],
  berna: [7.45, 46.95],
  viena: [16.37, 48.21],
};

/** Las dieciocho salas, en el orden en que el mapa las enciende: primero América, luego el salto a Europa. */
export const salas: { sala: string; ciudad: Ciudad }[] = [
  { sala: 'Teatro Colón', ciudad: 'bogota' },
  { sala: 'Teatro Santander', ciudad: 'bucaramanga' },
  { sala: 'New World Center', ciudad: 'miami' },
  { sala: 'Jones Hall', ciudad: 'houston' },
  { sala: 'Meyerson Hall', ciudad: 'dallas' },
  { sala: 'Sala São Paulo', ciudad: 'saopaulo' },
  { sala: 'Philharmonie', ciudad: 'paris' },
  { sala: 'Concertgebouw', ciudad: 'amsterdam' },
  { sala: 'Philharmonie', ciudad: 'colonia' },
  { sala: 'Konzerthaus', ciudad: 'dortmund' },
  { sala: 'Elbphilharmonie', ciudad: 'hamburgo' },
  { sala: 'Berliner Philharmonie', ciudad: 'berlin' },
  { sala: 'Konzerthaus', ciudad: 'berlin' },
  { sala: 'Alte Oper', ciudad: 'frankfurt' },
  { sala: 'Konzerthaus', ciudad: 'friburgo' },
  { sala: 'Tonhalle', ciudad: 'zurich' },
  { sala: 'Casino Bern', ciudad: 'berna' },
  { sala: 'Musikverein', ciudad: 'viena' },
];

export const fechasAgenda: [string, Ciudad, Pais][] = [
  ['2027-02-19', 'dortmund', 'alemania'],
  ['2027-02-20', 'colonia', 'alemania'],
  ['2027-02-22', 'viena', 'austria'],
  ['2027-02-24', 'hamburgo', 'alemania'],
  ['2027-02-25', 'dusseldorf', 'alemania'],
  ['2027-02-26', 'friburgo', 'alemania'],
  ['2027-02-28', 'frankfurt', 'alemania'],
  ['2027-03-01', 'zurich', 'suiza'],
  ['2027-03-02', 'paris', 'francia'],
  ['2027-03-03', 'madrid', 'espana'],
  ['2027-03-04', 'barcelona', 'espana'],
];

export const cifras = [
  { n: 16, sufijo: '' },
  { n: 8, sufijo: '' },
  { n: 22, sufijo: '' },
  { n: 210, sufijo: '+' },
  { n: 700, sufijo: '+' },
  { n: 25, sufijo: '' },
  { n: 41, sufijo: '' },
];

export const urlFundacion = 'https://www.fundacionbolivardavivienda.org/';
