/**
 * Los puntos de tierra del globo (Trayectoria, VII). Reparte puntos uniformes
 * sobre la esfera (espiral de Fibonacci), se queda con los que caen en tierra
 * (Natural Earth 50m, paquete world-atlas) y los guarda como pares Int16
 * (lon·100, lat·100) en public/media/globo.bin: ~42 KB que el navegador pide
 * solo cuando el globo se acerca a la pantalla.
 *
 *   node scripts/globo.mjs
 */
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { geoContains } from 'd3-geo';
import { feature } from 'topojson-client';

const requerir = createRequire(import.meta.url);
const topo = requerir('world-atlas/land-50m.json');
const tierra = feature(topo, topo.objects.land);

const N = 40000;
const oro = Math.PI * (3 - Math.sqrt(5));
const pares = [];
for (let i = 0; i < N; i++) {
  const y = 1 - (2 * (i + 0.5)) / N;
  const lat = (Math.asin(y) * 180) / Math.PI;
  let lon = (((i * oro * 180) / Math.PI) % 360) - 180;
  if (lon < -180) lon += 360;
  // Fuera la Antártida: nunca está de frente y solo suma puntos.
  if (lat < -60) continue;
  if (geoContains(tierra, [lon, lat])) pares.push(Math.round(lon * 100), Math.round(lat * 100));
}

const buf = Buffer.from(new Int16Array(pares).buffer);
fs.writeFileSync('public/media/globo.bin', buf);
console.log(`${pares.length / 2} puntos, ${(buf.length / 1024).toFixed(1)} KB`);

// Europa de cerca: una malla más fina (0,4°) solo para la región donde se
// concentran once salas. El globo la funde encima cuando la cámara se acerca.
const europa = [];
for (let lat = 35; lat <= 61; lat += 0.4) {
  const paso = 0.4 / Math.cos((lat * Math.PI) / 180);
  for (let lon = -12; lon <= 27; lon += paso) {
    if (geoContains(tierra, [lon, lat])) europa.push(Math.round(lon * 100), Math.round(lat * 100));
  }
}
const bufE = Buffer.from(new Int16Array(europa).buffer);
fs.writeFileSync('public/media/globo-europa.bin', bufE);
console.log(`Europa: ${europa.length / 2} puntos, ${(bufE.length / 1024).toFixed(1)} KB`);
