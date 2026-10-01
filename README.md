<<<<<<< HEAD
[![CI](https://img.shields.io/github/actions/workflow/status/sb-talentohumano-ia/landing-page-fjc/ci.yml?branch=main&style=flat-square&logo=githubactions&logoColor=white&label=CI)](https://github.com/sb-talentohumano-ia/landing-page-fjc/actions/workflows/ci.yml)
[![Astro](https://img.shields.io/badge/Astro-7-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Node.js](https://img.shields.io/badge/Node.js-22.12+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![sharp](https://img.shields.io/badge/imágenes-sharp-99CC00?style=flat-square&logo=sharp&logoColor=white)](https://sharp.pixelplumbing.com)
[![i18n](https://img.shields.io/badge/i18n-ES%20%7C%20EN%20%7C%20FR%20%7C%20DE-555555?style=flat-square)](#editar-el-contenido)
[![Licencia](https://img.shields.io/badge/licencia-privado-lightgrey?style=flat-square)](#)

# La Joven — Filarmónica Joven de Colombia

Landing one-page de la Filarmónica Joven de Colombia (**La Joven**), la
orquesta de la Fundación Bolívar Davivienda. Sitio estático en cuatro idiomas
(ES/EN/FR/DE), con una narrativa de scroll propia: un motor de scroll a la
medida (`public/scrollcraft/`, sin modificar), un globo 3D de las salas donde
la orquesta ha tocado, y todo el contenido editorial traducido y tipado.

**Proyecto privado de la Fundación Bolívar Davivienda.** Todos los derechos
reservados; no distribuir fuera del equipo del proyecto.

---

## Stack

- **[Astro 7](https://astro.build)**, `output: 'static'` — HTML en build, cero
  JavaScript de framework en el cliente.
- **i18n nativo de Astro**: `es` (por defecto, en `/`), `en`, `fr`, `de` (en
  `/en/`, `/fr/`, `/de/`).
- **`@astrojs/sitemap`** para el `sitemap-index.xml`.
- **`sharp`** para las imágenes responsivas (`astro:assets`) y para los
  scripts de generación de retratos y og-images.
- Motor de scroll propio, `public/scrollcraft/` — vendido tal cual por la
  skill que lo originó; **no se edita**, se tematiza solo por variables CSS
  (`src/styles/tokens.css`, `src/styles/landing.css`).
- Globo 3D de las salas (Trayectoria, sección VII): canvas 2D con una
  proyección propia, sin librerías de mapas en el cliente.

## Requisitos

- Node **≥ 22.12** (ver `engines` en `package.json`).
- Para regenerar imágenes u og-images: nada adicional, todo corre con `sharp`
  (ya en `devDependencies`).
- Para los scripts de ingesta históricos (`scripts/*.py`): Python 3.12+,
  `numpy`, `scipy`, `Pillow`, `rembg`. No hace falta para desarrollar ni para
  compilar el sitio; ver [Scripts](#scripts) más abajo.

## Empezar

```bash
npm install
npm run dev       # http://localhost:4321
```

```bash
npm run build     # genera dist/
npm run preview   # sirve dist/ en local, igual que producción
npm run check     # astro check — tipos y diagnósticos del proyecto
```

## Estructura del proyecto

```
src/
├── components/
│   ├── chrome/         Header (botón ☰, programa de mano) y Mandos (audio/video)
│   ├── media/           Bucle (video en loop) y MapaSalas (el globo 3D)
│   ├── sections/        Los once movimientos de la página, I a XI
│   └── ui/               Seo.astro (meta, Open Graph, JSON-LD)
├── i18n/
│   ├── contenido/        Todo el texto editorial, tipado y por idioma
│   │   ├── tipos.ts       La forma de Contenido (interfaz TypeScript)
│   │   ├── comun.ts       Lo que NO cambia con el idioma: nombres, coordenadas,
│   │   │                  fechas, claves de fotos
│   │   ├── es.ts / en.ts / fr.ts / de.ts   El texto en cada idioma
│   │   └── index.ts       getContenido(locale) — arma movimientos + contenido
│   ├── ui.ts              Locales, rutaLocalizada(), useTranslations()
│   └── {es,en,fr,de}.json UI suelta (botones, aria-label, meta título/descripción)
├── layouts/Base.astro     El shell: <html>, fonts, ScrollCraft.mount()
├── lib/
│   ├── foto.ts            Carga imágenes por clave (import.meta.glob)
│   ├── fotos.json         Registro interno de crédito/licencia por foto (no se
│   │                      renderiza: ver /creditos/)
│   └── llms.ts            Genera /llms.txt y /llms-full.txt desde el contenido
├── pages/
│   ├── index.astro        ES (ruta /)
│   ├── {en,fr,de}/index.astro
│   ├── creditos.astro     Créditos fotográficos (noindex, fuera del sitemap)
│   └── llms{,-full}.txt.ts
└── styles/
    ├── tokens.css          Paleta y espaciado de marca
    └── landing.css         Todo el resto: tematiza el motor de scroll

public/
├── scrollcraft/           El motor de scroll — NO EDITAR
├── media/                 Videos en loop, pósters, audio, datos del globo
└── og/                    Imágenes para compartir (una por idioma)

scripts/                   Ver «Scripts» abajo
docs/brief-original/       El brief y los prototipos de diseño originales
DESIGN.md                  Sistema de diseño: color, tipografía, tokens, reglas
PRODUCT.md                 Plataforma, stack, audiencia
```

## Editar el contenido

Todo el texto de la página vive en `src/i18n/contenido/{es,en,fr,de}.ts`, tipado
contra `src/i18n/contenido/tipos.ts`. Para cambiar una frase, un título o un
párrafo: se edita ahí, en los cuatro archivos si aplica a los cuatro idiomas.

Lo que **no** cambia con el idioma —nombres propios, coordenadas de las salas,
fechas de la gira, claves de fotos— vive en `src/i18n/contenido/comun.ts`
(`directores`, `solistas`, `agrupaciones`, `salas`, `fechasAgenda`, `cifras`,
`destacados`…). Un componente de sección nunca importa el idioma directamente:
llama a `getContenido(locale)` y listo.

Las etiquetas de interfaz que no son contenido editorial (botones, `aria-label`,
título y descripción de `<meta>`) están en `src/i18n/{es,en,fr,de}.json`.

## Scripts

Scripts en Node (`.mjs`), reproducibles con lo que ya está en el repositorio:

| Script | Qué hace | Cuándo correrlo |
|---|---|---|
| `scripts/retratos.mjs` | Recorta a 4:5 y genera la versión duotono + color de cada retrato de Colaboraciones. Fuentes en `scripts/fuentes/retratos/` (Wikimedia Commons con licencia libre, o archivo propio de La Joven). | Al agregar o cambiar un retrato. |
| `scripts/og.mjs` | Genera `public/og/{es,en,fr,de}.jpg`, la imagen para compartir en redes. | Al cambiar el hero o la bajada del `<meta>`. |
| `scripts/globo.mjs` | Calcula los puntos de tierra del globo 3D (`public/media/globo.bin` y `globo-europa.bin`, una malla más fina para las once salas europeas). | Casi nunca — solo si cambia la resolución o el encuadre del globo. |
| `scripts/logos.py` | Vectoriza los logos entregados por el cliente a SVG de un color. | Al recibir un logo nuevo del cliente o de una agrupación. |

Scripts de ingesta históricos, en Python — **ya ejecutados**, no hace falta
volver a correrlos salvo que cambie el material fuente:

| Script | Qué hace |
|---|---|
| `scripts/ingest_photos.py` | Ingesta y gradúa las fotos reales del Drive del cliente hacia `src/assets/img/`. |
| `scripts/candles.py` | Detecta las velas de la foto del Intermezzo para animarlas con el scroll. |
| `scripts/hero_planes.py` | Recorta los planos del hero anterior (guardado, sin usar hoy). |
| `scripts/videos.py` | Corta y codifica los videos del cliente a los loops mudos de `public/media/`. |

Estos cuatro requieren Python 3.12+ (`numpy`, `scipy`, `Pillow`, `rembg`) y el
material crudo del Drive del cliente, que **no está en este repositorio** (ver
siguiente sección).

## Material fuente y activos pendientes

- **El Drive crudo del cliente** (fotos y videos originales, varios GB) no se
  versiona: el cliente ya lo tiene en su propio Drive, y todo lo que el sitio
  necesita de ahí ya está procesado en `src/assets/img/`, `public/media/` y
  `scripts/fuentes/retratos/`. Si hay que reingestar algo, se necesita ese
  Drive en local, en `.handoff/drive-download-.../` (fuera de git).
- **`public/media/making-of.mp4` (≈ 210 MB) no está en este repositorio**:
  supera el límite de 100 MB de GitHub. El código ya está preparado para un
  video alojado externamente — ver el comentario en
  `src/components/media/Cine.astro`. Pendiente: subirlo a YouTube o Vimeo (no
  listado) y reemplazar la etiqueta `<source>` por el embed; eso además
  resuelve los subtítulos, que la interpretación en español no trae todavía
  (WCAG 1.2.2). El póster (`making-of.jpg`) sí está versionado.
- **`public/media/banda-sonora.m4a` (≈ 57 MB, dura ~60 min)** sí está en el
  repositorio (queda por debajo del límite de GitHub), pero conviene revisar
  si se puede recortar o recodificar a un bitrate menor: es pesado para un
  fondo musical de la página.

## Créditos fotográficos y licencias

Varios retratos de Colaboraciones vienen de Wikimedia Commons con licencia
Creative Commons (CC BY / CC BY‑SA), que exige atribución. Por pedido del
cliente esa atribución no va sobre la foto: vive en `/creditos/`
(`src/pages/creditos.astro`), fuera del índice de buscadores y enlazada
discretamente desde el panel del programa. El registro completo —autor,
licencia, URL de origen— está en `src/lib/fotos.json`.

## Documentación relacionada

- **[`DESIGN.md`](DESIGN.md)** — el sistema de diseño: color, tipografía,
  tokens, reglas de la marca (qué va y qué no va en cada sección).
- **[`PRODUCT.md`](PRODUCT.md)** — plataforma, stack, audiencia.
- **[`docs/brief-original/`](docs/brief-original/)** — el brief funcional y
  los prototipos de dirección visual (`.dc.html`) que el cliente entregó al
  inicio del proyecto, y el manual de marca de la Fundación.

## Despliegue

Es un sitio 100 % estático (`output: 'static'`): el resultado de `npm run
build` es la carpeta `dist/`, servible desde cualquier hosting estático
(Netlify, Vercel, Cloudflare Pages, o el servidor propio de la Fundación). No
requiere Node en producción, solo en build.

**El dominio final todavía no está definido por el cliente.** `astro.config.mjs`
usa por ahora `site: 'https://example.com'` como marcador — de ese único valor
salen el sitemap, `/robots.txt`, `/llms.txt`, y las URLs absolutas de
`Seo.astro` (canonical, hreflang, og:image, JSON‑LD). En cuanto se decida el
dominio real, se reemplaza ese valor y todo lo demás se actualiza solo.

## Pendientes con el cliente

- [ ] Definir el dominio final y reemplazar el marcador `https://example.com`
      en `site` (`astro.config.mjs`).
- [ ] Correos del equipo por categoría, para conectar el formulario de
      contacto (`src/components/sections/Bis.astro`): hoy no envía nada, lo
      declara en pantalla.
- [ ] Logos oficiales de las tres agrupaciones (Quatuor Debussy, Compañía
      Cuerpo de Indias, La Ventana Producciones) para
      `src/assets/img/colaboraciones/logos/`; hoy se ven como placas
      tipográficas.
- [ ] Confirmar las cifras de Trayectoria: el texto del cliente dice 25
      directores y 41 solistas; la lista de nombres en `comun.ts` tiene 22 y 1.
- [ ] Revisión humana (hablante nativo) de las traducciones EN/FR/DE.
- [ ] Decidir dónde alojar el making of completo (ver arriba) y confirmar que
      las fechas de gira 2027 (`Agenda.astro`) son publicables.
=======
# Prueba_Despliegue
>>>>>>> 02c96dbf017cc627f8d6a3299cb5a5e5ecd6b5a8
