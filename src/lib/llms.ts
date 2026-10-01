/**
 * llms.txt (llmstxt.org): un resumen en Markdown para modelos de lenguaje,
 * generado desde el mismo contenido que la página para que nunca se desfase.
 *
 * El dominio no se asume aquí: lo pasan los endpoints (src/pages/llms*.txt.ts)
 * a partir de `Astro.site` (astro.config.mjs), así que basta con fijarlo ahí
 * cuando el cliente decida el dominio final.
 */
import { getContenido, salas, directores, solistas, populares, agrupaciones, cifras, fechasAgenda } from '../i18n/contenido';
import { locales, rutaLocalizada, type Locale } from '../i18n/ui';

const nombresIdioma: Record<Locale, string> = { es: 'Español', en: 'English', fr: 'Français', de: 'Deutsch' };

/** El índice corto: qué es, dónde está cada cosa y en qué idiomas. */
export function llmsIndice(sitio: string): string {
  const url = (l: Locale, ancla = '') => `${sitio}${rutaLocalizada(l)}${ancla ? `#${ancla}` : ''}`;
  const en = getContenido('en');
  const es = getContenido('es');
  const lineas = [
    '# La Joven, Youth Philharmonic of Colombia (Filarmónica Joven de Colombia)',
    '',
    '> The orchestra of the Fundación Bolívar Davivienda: a hundred musicians aged 16 to 24 from every region of Colombia, with eight international tours and a stage language of its own (narrative, movement, light and design built around the music). Official one-page website, available in Spanish, English, French and German.',
    '',
    `Full editorial text for language models: [llms-full.txt](${sitio}/llms-full.txt)`,
    '',
    '## Languages',
    '',
    ...locales.map((l) => `- [${nombresIdioma[l]}](${url(l)})`),
    '',
    '## Sections',
    '',
    ...en.movimientos.map((m, i) => `- [${m.nombre} / ${es.movimientos[i]!.nombre}](${url('en', m.id)})`),
    '',
    '## Key facts',
    '',
    ...cifras.map((c, i) => `- ${en.trayectoria.cifras[i]}: ${c.n}${c.sufijo}`),
    `- Venues: ${salas.map((s) => `${s.sala} (${en.ciudades[s.ciudad]})`).join(', ')}`,
    `- Conductors: ${directores.join(', ')}`,
    `- Soloists: ${solistas.join(', ')}`,
    `- Popular artists: ${populares.join(', ')}`,
    `- Ensembles and companies: ${agrupaciones.map((a) => a.nombre).join(', ')}`,
    '',
    '## Contact',
    '',
    `- [Contact form](${url('en', 'contacto')}): artistic programming, press, partnerships, general information.`,
    `- [Fundación Bolívar Davivienda](https://www.fundacionbolivardavivienda.org/)`,
    '',
  ];
  return lineas.join('\n');
}

/** Todo el texto editorial de un idioma, en Markdown. */
function textoCompleto(sitio: string, l: Locale): string {
  const url = (loc: Locale, ancla = '') => `${sitio}${rutaLocalizada(loc)}${ancla ? `#${ancla}` : ''}`;
  const C = getContenido(l);
  const m = C.movimientos;
  const fmt = new Intl.DateTimeFormat(l, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  const out: string[] = [`# ${nombresIdioma[l]} · ${url(l)}`, ''];
  out.push(`## ${m[1]!.nombre}`, '', ...C.quienes.flatMap((q) => [`### ${q.titulo}`, '', `${q.texto} ${q.enfasis}`.trim(), '']));
  out.push(`## ${m[2]!.nombre}: ${C.diferencial.titulo}`, '', C.diferencial.bajada, '');
  out.push(...C.diferencial.bloques.flatMap((b) => [`### ${b.titulo}`, '', b.texto, '']));
  out.push(`## ${m[3]!.nombre}`, '', `${C.frase.primera} ${C.frase.segunda}`, '');
  out.push(`## ${m[4]!.nombre}: ${C.producciones.titulo}`, '', C.producciones.bajada, '');
  for (const p of C.producciones.indice) {
    out.push(`### ${p.titulo}`, '');
    if (p.acto?.sinopsis) out.push(p.acto.sinopsis, '');
    if (p.acto) out.push(...p.acto.ficha.map(([k, v]) => `- ${k}: ${v}`), '');
  }
  const c = C.colaboraciones;
  out.push(`## ${m[5]!.nombre}: ${c.titulo}`, '');
  out.push(`> ${c.testimonio.texto} ${c.testimonio.cierre}`, `> (${c.testimonio.autor}, ${c.testimonio.rol})`, '');
  out.push(`> ${c.segundo.texto}`, `> (${c.segundo.autor})`, '');
  out.push(`- ${c.directores}: ${directores.join(', ')}`, `- ${c.solistas}: ${solistas.join(', ')}`);
  out.push(`- ${c.populares}: ${populares.join(', ')}`, `- ${c.agrupaciones}: ${agrupaciones.map((a) => a.nombre).join(', ')}`, '');
  out.push(`## ${m[6]!.nombre}: ${C.trayectoria.titulo}`, '', ...cifras.map((x, i) => `- ${C.trayectoria.cifras[i]}: ${x.n}${x.sufijo}`), '');
  out.push(`### ${C.trayectoria.salasTitulo}`, '', ...salas.map((s) => `- ${s.sala}, ${C.ciudades[s.ciudad]}`), '');
  out.push(`## ${m[7]!.nombre}: ${C.lazos.titulo}`, '', C.lazos.apertura, '', ...C.lazos.parrafos.flatMap((p) => [p, '']));
  out.push(`## ${m[8]!.nombre}: ${C.agenda.produccion}`, '', C.agenda.gira, '');
  out.push(...fechasAgenda.map(([iso, ci, pa]) => `- ${fmt.format(new Date(`${iso}T00:00:00Z`))}: ${C.ciudades[ci]}, ${C.paises[pa]}`), '');
  out.push(`## ${m[9]!.nombre}: ${C.fundacion.titulo}`, '', ...C.fundacion.parrafos.flatMap((p) => [p, '']));
  out.push(`## ${m[10]!.nombre}: ${C.contacto.titulo}`, '', ...C.contacto.parrafos.flatMap((p) => [p, '']));
  return out.join('\n');
}

export function llmsCompleto(sitio: string): string {
  return [
    '# La Joven, Youth Philharmonic of Colombia: full text',
    '',
    `> Complete editorial content of ${sitio} in English and Spanish (the site is also available in French and German).`,
    '',
    textoCompleto(sitio, 'en'),
    textoCompleto(sitio, 'es'),
  ].join('\n');
}
