import type { APIRoute } from 'astro';

/**
 * Generado, no estático: así el Sitemap sigue automáticamente al dominio de
 * `site` en astro.config.mjs, sin quedar quemado aparte.
 */
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${site!.origin}/sitemap-index.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
