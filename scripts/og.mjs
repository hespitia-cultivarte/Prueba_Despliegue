/**
 * Imágenes para compartir (Open Graph / Twitter), una por idioma, 1200×630.
 * La foto del hero, velada hacia la izquierda, con el logo de La Joven y la
 * bajada del idioma. Salen a public/og/<locale>.jpg.
 *
 *   node scripts/og.mjs
 */
import sharp from 'sharp';
import fs from 'node:fs';

const W = 1200;
const H = 630;
const bajadas = {
  es: ['Cien músicos de 16 a 24 años', 'Orquesta de la Fundación Bolívar Davivienda'],
  en: ['A hundred musicians aged 16 to 24', 'Orchestra of the Fundación Bolívar Davivienda'],
  fr: ['Cent musiciens de 16 à 24 ans', 'Orchestre de la Fundación Bolívar Davivienda'],
  de: ['Hundert Musiker*innen von 16 bis 24 Jahren', 'Orchester der Fundación Bolívar Davivienda'],
};

const logo = fs
  .readFileSync('src/assets/marca/lajoven.svg', 'utf8')
  .replace('fill="currentColor"', 'fill="#f2ede6"')
  .replace('<svg ', '<svg width="230" height="249" ');
const logoPng = await sharp(Buffer.from(logo)).png().toBuffer();

const foto = await sharp('src/assets/img/hero/hero-poster.jpg')
  .resize(W, H, { fit: 'cover', position: 'attention' })
  .modulate({ brightness: 0.85 })
  .toBuffer();

const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;');
fs.mkdirSync('public/og', { recursive: true });

for (const [locale, [linea1, linea2]] of Object.entries(bajadas)) {
  const capa = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="v" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0" stop-color="#14100d" stop-opacity="0.94"/>
        <stop offset="0.55" stop-color="#14100d" stop-opacity="0.55"/>
        <stop offset="1" stop-color="#14100d" stop-opacity="0.05"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#v)"/>
    <rect x="72" y="392" width="54" height="3" fill="#f5c77e"/>
    <text x="72" y="450" font-family="Georgia, 'Times New Roman', serif" font-size="40" fill="#f2ede6">${esc(linea1)}</text>
    <text x="72" y="500" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="26" fill="#b4a996">${esc(linea2)}</text>
  </svg>`;
  await sharp(foto)
    .composite([
      { input: Buffer.from(capa), left: 0, top: 0 },
      { input: logoPng, left: 72, top: 96 },
    ])
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(`public/og/${locale}.jpg`);
  console.log('✓', locale);
}
