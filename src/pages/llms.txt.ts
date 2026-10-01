import type { APIRoute } from 'astro';
import { llmsIndice } from '../lib/llms';

export const GET: APIRoute = ({ site }) =>
  new Response(llmsIndice(site!.origin), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
