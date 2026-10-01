// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Dominio provisional: el cliente todavía no ha definido el dominio final
  // (¿lajoven.com? ¿un subdominio de la Fundación?). Reemplazar aquí en
  // cuanto se decida — de este único valor salen el sitemap, el hreflang,
  // el og:image/canonical de Seo.astro, /robots.txt y /llms.txt.
  site: 'https://example.com',
  output: 'static',
  trailingSlash: 'always',

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr', 'de'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  image: {
    responsiveStyles: true,
    layout: 'constrained',
    objectFit: 'cover',
    objectPosition: 'center',
  },

  // Autoalojadas desde src/assets/fonts (subseteadas latin + latin-ext, ejes
  // recortados al rango que el diseño usa). Dos familias, como pide el piso de
  // scroll-craft: Archivo (titulares, etiquetas, UI) y Newsreader (la voz:
  // testimonios, sinopsis, relato). Provider `local`, no `google`: la comp
  // cargaba Archivo sin el eje `wdth` y el "expanded" de los titulares no hacía
  // nada (DESIGN.md §2).
  //
  // `preload` en un <Font> precarga TODAS las variantes declaradas aquí.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Archivo',
      cssVariable: '--font-archivo',
      fallbacks: ['system-ui', 'sans-serif'],
      optimizedFallbacks: true,
      options: {
        variants: [
          { weight: '400 800', style: 'normal', src: ['./src/assets/fonts/Archivo.woff2'] },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Newsreader',
      cssVariable: '--font-newsreader',
      fallbacks: ['Georgia', 'serif'],
      optimizedFallbacks: true,
      options: {
        variants: [
          { weight: '300 500', style: 'normal', src: ['./src/assets/fonts/Newsreader.woff2'] },
          { weight: '300 500', style: 'italic', src: ['./src/assets/fonts/Newsreader-Italic.woff2'] },
        ],
      },
    },
  ],

  integrations: [
    sitemap({
      // La página de créditos es noindex: fuera del sitemap.
      filter: (page) => !page.includes('/creditos/'),
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es', en: 'en', fr: 'fr', de: 'de' },
      },
    }),
  ],

  // Vite rechaza por defecto cualquier Host que no sea localhost (protección
  // contra DNS rebinding). El túnel de cloudflared expone el dev server bajo
  // un subdominio *.trycloudflare.com que cambia en cada arranque; se permite
  // el dominio entero en vez de anotar cada URL nueva. Solo afecta a
  // `astro dev`, nunca al build de producción.
  vite: {
    server: {
      allowedHosts: ['.trycloudflare.com'],
    },
  },
});
