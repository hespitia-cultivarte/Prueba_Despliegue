# Handoff: lajoven.com — Landing one-page de La Joven (Filarmónica Joven de Colombia)

## Overview
Landing one-page multiidioma (ES/EN/FR/DE) para presentar a La Joven ante programadores internacionales, prensa y aliados. Un solo scroll narrativo, secciones 6.1 → 6.11 del brief funcional, sin subpáginas. Objetivos duros: carga < 3 s, WCAG AA, CMS editable para producciones/agenda/media.

## About the Design Files
Los HTML de este paquete son **referencias de diseño** (prototipos que muestran el look y el comportamiento previsto), no código de producción. La tarea es **recrear estos diseños en el entorno real del proyecto**. No existe codebase todavía: recomendación de stack — sitio estático (Astro o Next.js con SSG) + CDN, CMS headless (p. ej. Sanity/Decap) para producciones, agenda, galerías y Media Center, YouTube con carga diferida como único origen de video. Si el equipo elige otro stack, las decisiones de diseño no cambian.

## Fidelity
**Hi-fi en dirección visual** (colores, tipografía, escala, espaciado y composición son finales y deben respetarse) **pero con contenido placeholder**: todas las imágenes/videos son marcadores rayados con su especificación escrita encima; parte del copy está pendiente de aprobación (marcado en los archivos). El SVG del ala y el lockup FJC+FBD no fueron entregados: aparecen como cajas punteadas "SVG ALA" / "SVG LOCKUP".

## Files
- `Entrega 3 - Desktop.dc.html` — **la landing completa en desktop, un solo scroll.** Fuente principal de implementación.
- `Entrega 2 - Mobile.dc.html` — las mismas secciones a 390 px (14 pantallas en canvas), incl. menú overlay, lightbox y prueba en alemán.
- `Entrega 1 - Direccion.dc.html` — racional de dirección: territorios, sistema tipográfico, tokens, linaje de marca, preguntas abiertas.
- Los `.dc.html` abren directo en navegador (requieren `support.js` junto a ellos, incluido). El markup relevante está dentro de `<x-dc>`; los datos repetidos (salas, producciones, agenda…) están en la clase `Component` del `<script data-dc-script>` de cada archivo.

## Design Tokens
Colores:
- `--lj-sala: #14100D` — fondo dominante (negro tintado cálido; nunca #000)
- `--lj-foso: #241C16` — superficies elevadas, separadores
- `--lj-papel: #F2EDE6` — tinta sobre oscuro; fondo de secciones de lectura (6.5)
- `--lj-luz: #F5C77E` — acento único de la orquesta (etiquetas, subrayados, CTA primario)
- `--lj-senal: #2E8C86` — interacción: focus, enlaces, estados activos (sobre claro usar `#186E68`)
- `--fbd-vinculo: #FF671B` — naranja de la Fundación. SOLO en la sección 6.9 y en el pie
- Secundarios usados: `#0D0A08` (negro de la frase 6.3b y pie), `#EDE7DC` (fondo 6.7), `#FFFFFF` (6.9), tintas suaves `#EDE5DA #CFC5B8 #B4A996 #9A9083 #8E8578`, claros `#3A322B #6B6157 #C9BFB1`

Tipografía (Google Fonts):
- **Archivo** (variable, con `font-stretch: expanded`) — display y UI. Titulares: 800 expanded, letter-spacing −0.03/−0.045em, line-height 0.82–0.92. Hero "LA JOVEN": `clamp(96px, 13vw, 200px)`.
- **Newsreader** — serif de "voz": testimonios, sinopsis, relato. Light 300 / itálica real. Cuerpos 17–24px, line-height 1.45–1.5.
- **Jost** — etiquetas, fichas, datos, botones (reemplazo aprobado de Sansation, sin licencia web). 500/600, caja alta, letter-spacing .1–.2em, 10.5–13.5px.
- Mono (IBM Plex Mono) aparece solo en anotaciones de maqueta — **no llevarlo a producción**.

Espaciado y forma:
- Contenedor máx. 1440px, padding lateral 40px (desktop) / 22px (mobile).
- Separaciones de sección 110–130px. Separadores `1px rgba(242,237,230,.12–.18)` sobre oscuro, `#C9BFB1` sobre claro.
- Sin border-radius salvo pills (botón Contáctenos `999px`). Sin sombras decorativas.
- Hit targets ≥ 44px. Campos de formulario 48px, subrayado en vez de caja.

## Screens / Views (orden del scroll, Desktop)
1. **Header fijo** — gradiente a transparente; ala SVG sola (izq); ES EN FR DE + botón pill "Contáctenos" + hamburguesa (der). El lockup "Bolívar Davivienda" NUNCA va en el header (excepción aprobada por el cliente).
2. **Nav de puntos** — fijo, borde derecho, 10 anclas; punto activo 8px ámbar, resto 5px al 40%; tooltip con nombre al hover/focus; navegable por teclado.
3. **6.1 Hero** — video loop 15s 16:9 sin sonido (corte a negro 600ms), "LA JOVEN" abajo-izquierda, regla ámbar 54×2px + bajada, hint "Deslice ⌄". Móvil usa recorte 9:16.
4. **6.2 Quiénes somos** — 3 filas foto 4:5 (560px alto) + texto, alternando lado (grid con `direction: rtl` en la fila 2). Etiquetas "01 — Postura / 02 — Comunidad / 03 — Identidad". Copy en Newsreader 23px; frase "Venimos a habitarlas." en itálica ámbar. Cero cifras aquí.
5. **6.3 Diferencial** — titular expanded gigante + grid de 4 tarjetas (foto 300px + número ámbar + título 27px + cuerpo serif), separadas por líneas de 1px (grid con gap 1px sobre fondo rgba).
6. **6.3b Frase** — pantalla completa `#0D0A08`, sin imagen ni header visible. Línea 1 en Newsreader 300 `#8E8578`; línea 2 en itálica `#F2EDE6` más grande; regla ámbar 70×2px. Comportamiento: scroll se frena ~900ms y la segunda línea entra por peso/opacidad. Con `prefers-reduced-motion`: todo visible estático.
7. **6.4 Producciones** — índice tipográfico clicable de 6 títulos (numerados, los "En repertorio" en `#9A9083`), luego cada acto completo: imagen 21:9 a sangre (78vh) con degradado inferior y título 88px, CTA ámbar "Solicitar dossier técnico →", dos columnas: sinopsis serif 24px + ficha técnica (tabla 150px/1fr), y teaser (póster propio, iframe de YouTube creado SOLO al clic) + galería 8 thumbs con "+N". 3 actos completos; las otras 3 producciones solo póster + ficha en fila de tres. Lightbox: navegación teclado/flechas, Esc cierra, crédito de fotógrafo obligatorio (campo CMS requerido).
8. **6.5 Colaboraciones** — fondo `#F2EDE6`. Testimonio de Orozco-Estrada como pieza editorial (serif 26–36px, sin comillas decorativas ni tarjeta) junto a retrato 4:5. Debajo, muro de categorías (Directores 22, Solistas 41, Artistas populares 3, Compositores, Interdisciplinarios) en grid 2 col.
9. **6.6 Trayectoria** — cifras pequeñas en fila (número 30px ámbar + etiqueta uppercase); luego las 18 salas a escala de titular (24–34px) en grid de 2 columnas con ciudad en etiqueta. Sin acordeón.
10. **6.7 Creando Lazos** — fondo `#EDE7DC`, acento `#186E68`, foto luz natural sin tratamiento ámbar, sin rostro de menores (restricción legal asumida). Texto + chips de territorios (`white-space: nowrap`) + 4 filas Metodología/Territorios/Indicadores/Resultados.
11. **6.8 Agenda** — tabs Próximas/Pasadas; filas grid `170px 1fr auto auto`: fecha ámbar, lugar 24–34px + ciudad serif, badge de estado (Confirmado ámbar / En gestión `#B4A996`), CTA externo. 100% informativa, boletería siempre de terceros. Estado vacío: cae a "Pasadas" + enlace a contacto.
12. **6.9 La organización** — fondo blanco, kicker `#FF671B`, lockup completo FJC+FBD, botón naranja a la web de la Fundación (externo, nueva pestaña). Único lugar (además del pie) con el naranja institucional.
13. **6.10 Contacto** — titular expanded + chips de asunto (Programación artística / Prensa / Alianzas / Información general) que enrutan a correos por confirmar; formulario de 3 campos con subrayado; focus visible: label y subrayado 2px en `#2E8C86`. Confirmación inline, antispam sin captcha visible.
14. **6.11 Cierre + pie** — suscripción La Joven News (nombre, apellido, correo, país, checkbox de política de datos con enlace), redes (Spotify y Podcast condicionales: si están vacíos, se quitan), Media Center como enlace del pie que abre panel lateral de descargas (fotos, logos, press kit, dossier) — no es sección del scroll; lockup completo + © + política + selector de idioma.

## Interactions & Behavior
- Scroll suave por anclas; los puntos y el menú hamburguesa (overlay con 11 destinos numerados + idiomas + Media Center) apuntan a las mismas anclas.
- Reveals por scroll = cambios de luz (opacity/transform sutiles), nunca parallax ni stagger largos. Todo desactivable con `prefers-reduced-motion`.
- Video/YouTube: facade pattern — póster propio + botón; el iframe se inyecta al primer clic.
- Idiomas: URLs localizadas `/`, `/en/`, `/fr/`, `/de/` con `hreflang`; "LA JOVEN" no se traduce; etiquetas dimensionadas con +35% de holgura (probado en alemán en Entrega 2); en mobile la etiqueta de estado nunca comparte línea con el título.
- Imágenes: tratamiento único — negros levantados a #14100D, saturación −18%, ámbar solo en altas, grano fino; EXCEPTO 6.7 (luz natural). Lazy-load todo bajo el fold; hero preload.
- Performance: objetivo < 3s — AVIF/WebP con srcset, fonts subset + `font-display: swap`, video del hero ≤ 2–3MB o poster-first en conexiones lentas.

## State Management / CMS
Colecciones editables: Producciones (título, estado acto/repertorio, año, sinopsis, ficha técnica, póster, galería con crédito obligatorio, URL YouTube), Agenda (fecha, lugar, ciudad, estado, URL boletería), Testimonios, Territorios, Media Center (archivos agrupados), textos por idioma. El resto del layout es fijo en código.

## Assets pendientes (bloqueantes, pedidos al cliente)
SVG del ala + lockup FJC+FBD, video loop del hero (rodaje 20 oct; plan B documentado en Entrega 1), fotos por sección según especificación de Entrega 1, testimonios adicionales, correos del staff, URL de política de datos, traducciones (transcrear, no traducir, las 4 frases listadas en Entrega 1).
