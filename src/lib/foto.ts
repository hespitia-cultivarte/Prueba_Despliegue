import type { ImageMetadata } from 'astro';

const archivos = import.meta.glob<{ default: ImageMetadata }>('../assets/img/**/*.{jpg,png}', {
  eager: true,
});

/**
 * La fuente, el autor y la licencia de cada foto viven en fotos.json como registro
 * interno: la página no muestra créditos sobre las imágenes (pedido del cliente).
 */

/** Devuelve la imagen importada por clave (`producciones/petrushka-1`). Falla en build si no existe. */
export function foto(clave: string): ImageMetadata {
  const mod = archivos[`../assets/img/${clave}.jpg`] ?? archivos[`../assets/img/${clave}.png`];
  if (!mod) throw new Error(`Foto no encontrada: ${clave}`);
  return mod.default;
}

