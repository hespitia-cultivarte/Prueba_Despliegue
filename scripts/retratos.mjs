/**
 * Retratos de Colaboraciones: recorta cada foto fuente a 4:5 con un encuadre
 * elegido a mano y genera dos versiones.
 *   <slug>.jpg        duotono de la sala (#14100d → #f5c77e): todas las fotos,
 *                     vengan de donde vengan, se ven como una sola sesión.
 *   <slug>-color.jpg  el original, que aparece al pasar el cursor o el foco.
 *
 * Fuentes: scripts/fuentes/retratos/ (descargadas de Wikimedia Commons o
 * copiadas del archivo de La Joven). Autor y licencia de cada una:
 * src/lib/fotos.json.
 *
 *   node scripts/retratos.mjs
 */
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const FUENTE = 'scripts/fuentes/retratos';
const DESTINO = 'src/assets/img/colaboraciones/artistas';
const ANCHO = 720;
const ALTO = 900;

// Encuadre en píxeles de la fuente: x, y y ancho; el alto sale de la proporción 4:5.
const retratos = {
  'hilary-hahn': { src: 'hilary-hahn.jpg', x: 0, y: 0, w: 1920 },
  'orozco-estrada': { src: 'orozco-handoff.jpg', x: 2250, y: 200, w: 1100 },
  'rafael-payare': { src: 'rafael-payare.jpg', x: 420, y: 150, w: 900 },
  'carlos-miguel-prieto': { src: 'carlos-miguel-prieto.jpg', x: 0, y: 0, w: 579 },
  'andres-cepeda': { src: 'andres-cepeda.jpg', x: 0, y: 0, w: 1920 },
  morat: { src: 'morat.jpg', x: 460, y: 14, w: 1000 },
  'diego-torres': { src: 'diego-torres.jpg', x: 250, y: 100, w: 1500 },
};

// Rampa del duotono: sombra de la sala, un medio tostado y la luz ámbar de la marca.
const rampa = [
  [0, [20, 16, 13]],
  [0.55, [138, 104, 72]],
  [1, [245, 222, 180]],
];
const lut = Array.from({ length: 256 }, (_, i) => {
  const t = i / 255;
  let k = 0;
  while (k < rampa.length - 2 && t > rampa[k + 1][0]) k++;
  const [t0, c0] = rampa[k];
  const [t1, c1] = rampa[k + 1];
  const u = (t - t0) / (t1 - t0);
  return c0.map((v, j) => Math.round(v + (c1[j] - v) * u));
});

fs.mkdirSync(DESTINO, { recursive: true });

for (const [slug, r] of Object.entries(retratos)) {
  const h = Math.round(r.w * 1.25);
  const base = sharp(path.join(FUENTE, r.src))
    .extract({ left: r.x, top: r.y, width: r.w, height: h })
    .resize(ANCHO, ALTO, { fit: 'cover' });

  await base.clone().jpeg({ quality: 86, mozjpeg: true }).toFile(path.join(DESTINO, `${slug}-color.jpg`));

  const { data } = await base
    .clone()
    .grayscale()
    .normalise({ lower: 2, upper: 98 })
    .raw()
    .toBuffer({ resolveWithObject: true });
  const rgb = Buffer.alloc(ANCHO * ALTO * 3);
  for (let i = 0; i < ANCHO * ALTO; i++) {
    const c = lut[data[i]];
    rgb[i * 3] = c[0];
    rgb[i * 3 + 1] = c[1];
    rgb[i * 3 + 2] = c[2];
  }
  await sharp(rgb, { raw: { width: ANCHO, height: ALTO, channels: 3 } })
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(path.join(DESTINO, `${slug}.jpg`));
  console.log('✓', slug);
}
