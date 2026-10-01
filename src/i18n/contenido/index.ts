import type { Locale } from '../ui';
import type { Contenido, Movimiento } from './tipos';
import { idsMovimientos, numerales, tempos } from './comun';
import { es } from './es';
import { en } from './en';
import { fr } from './fr';
import { de } from './de';

export type { Contenido, Movimiento, Produccion } from './tipos';
export * from './comun';

const porIdioma: Record<Locale, Contenido> = { es, en, fr, de };

/** El contenido de un idioma más los once movimientos ya armados (id, numeral, nombre, tempo). */
export function getContenido(locale: Locale): Contenido & { movimientos: Movimiento[] } {
  const c = porIdioma[locale] ?? es;
  const movimientos = idsMovimientos.map((id, i) => ({
    id,
    numero: numerales[i]!,
    nombre: c.nombresMovimientos[i]!,
    tempo: tempos[i]!,
  }));
  return { ...c, movimientos };
}
