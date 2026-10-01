import type { APIRoute } from 'astro';
import { llmsCompleto } from '../lib/llms';

export const GET: APIRoute = ({ site }) =>
  new Response(llmsCompleto(site!.origin), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
