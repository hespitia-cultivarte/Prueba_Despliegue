import type { Ciudad, Pais, Rol } from './comun';

export interface Movimiento {
  id: string;
  numero: string;
  nombre: string;
  tempo: string;
}

export interface Produccion {
  id: string;
  titulo: string;
  acto?: {
    foto: string;
    alt: string;
    /** Montaje en bucle de public/media/ que reemplaza a la foto del telón. */
    video?: { clip: string };
    galeria: { foto: string; alt: string }[];
    sinopsis?: string;
    ficha: [string, string][];
  };
}

/** Todo el texto editorial de la página en un idioma. Los nombres propios viven en comun.ts. */
export interface Contenido {
  /** Nombre de cada movimiento, en el orden de idsMovimientos. */
  nombresMovimientos: string[];

  obertura: {
    beatDos: string;
    makingOf: string;
    cineTitulo: string;
  };

  quienes: { foto: string; titulo: string; texto: string; enfasis: string; alt: string }[];

  diferencial: {
    antetitulo: string;
    titulo: string;
    bajada: string;
    bloques: { foto: string; titulo: string; texto: string; alt: string }[];
    cierreAntetitulo: string;
    cierreTexto: string;
  };

  frase: { primera: string; segunda: string; alt: string };

  producciones: {
    titulo: string;
    bajada: string;
    verObra: string;
    dossierSolicitud: string;
    solicitarDossier: string;
    indice: Produccion[];
  };

  colaboraciones: {
    titulo: string;
    testimonio: { texto: string; cierre: string; autor: string; rol: string; foto: string; alt: string };
    segundo: { texto: string; autor: string };
    roles: Record<Rol, string>;
    directores: string;
    solistas: string;
    populares: string;
    agrupaciones: string;
  };

  trayectoria: {
    titulo: string;
    cifras: string[];
    salasTitulo: string;
    mapaAlt: string;
    origen: string;
  };

  lazos: { titulo: string; programa: string; apertura: string; parrafos: string[] };

  agenda: { titulo: string; produccion: string; gira: string };

  fundacion: { titulo: string; parrafos: string[]; boton: string; nuevaPestana: string };

  contacto: {
    titulo: string;
    parrafos: string[];
    asuntoLeyenda: string;
    asuntos: string[];
    campos: { nombre: string; correo: string; mensaje: string };
    enviar: string;
    error: string;
    pendiente: string;
    continua: string;
    continuaTexto: string;
    fbd: string;
    legal: string;
  };

  ciudades: Record<Ciudad, string>;
  paises: Record<Pais, string>;
}
