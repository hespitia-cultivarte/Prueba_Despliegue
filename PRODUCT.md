# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro. Decisión del usuario, tomada explícitamente al abrir el proyecto y
reafirmada en sesión. No fue delegada.

## Users

**Primaria — programadores artísticos internacionales.** Festivales, teatros,
temporadas sinfónicas y mercados culturales, sobre todo en Europa. Abren el
sitio una sola vez, desde escritorio, probablemente en alemán o francés, y
deciden en menos de dos minutos si vale la pena escribir un correo. No llegan
buscando información institucional: llegan evaluando si la agrupación tiene
algo propio que decir antes de evaluar si es buena.

**Secundaria — patrocinadores, aliados, embajadas y medios especializados de
música clásica.** Empresas, fundaciones, cooperantes, entidades públicas,
academia, otros artistas sinfónicos (directores, solistas, agrupaciones).

**Terciaria — público general.** Incluye un flujo estacional real y no buscado:
músicos aspirantes en temporada de audiciones. La interna actual de FJC dentro
del sitio de la Fundación recibe cerca de 200 mil visitas en esos tres meses;
el sitio nuevo no persigue ese volumen, pero lo va a recibir.

## Product Purpose

Esta landing es el sitio propio de la Filarmónica Joven de Colombia, orquesta
de la Fundación Bolívar Davivienda (el dominio final aún no está definido).
Existe para desbloquear invitaciones a giras y
festivales internacionales.

Hoy la orquesta vive dentro del sitio institucional de la Fundación, con una
navegación diseñada para aspirantes a audiciones. Los promotores, directores y
solistas internacionales no la encuentran. El éxito se mide en correos de
programadores, no en tráfico.

KPIs acordados con el cliente, instrumentados sobre Google Analytics, Search
Console y Tag Manager: tráfico y sesiones, fuentes de tráfico, porcentaje de
scroll, reproducciones del material audiovisual y clics en el formulario de
contacto.

## Positioning

Página de artista, no página institucional. La formulación del cliente: *«no
debe sentirse como una organización explicando quién es, sino como una
propuesta artística que deja clara una identidad, un lenguaje escénico y un
valor diferencial»*.

El mecanismo que un vecino no podría copiar con honestidad: cien músicos
colombianos de 16 a 24 años que montan repertorio sinfónico cruzado con circo,
danza contemporánea y títeres, y que además enseñan en los territorios donde
tocan. Es la única orquesta del mundo sostenida por un grupo privado.

## Operating Context

- **Una sola página, scroll continuo.** Sin subpáginas, sin mapa de navegación
  jerárquico. El menú solo hace anclas. Decisión del cliente, literal en el
  brief y confirmada en la reunión del 22 de septiembre de 2026.
- **Cuatro idiomas: ES · EN · FR · DE**, con traductores oficiales externos y
  administración centralizada. La traducción no la hace el equipo técnico.
- **Lanzamiento tentativo: diciembre de 2026.**
- **El video del hero se graba el 20 de octubre de 2026.** Hasta esa fecha el
  sitio tiene que funcionar con un sustituto.
- **Los videos viven en YouTube** por gestión de derechos de autor. Los
  conciertos completos de Berlín, París y Bogotá van como enlaces externos, no
  embebidos.
- **Boletería siempre de terceros.** El sitio es 100 % informativo, nunca
  transaccional.
- **Transferencia de conocimiento comprometida** a Holman Andrés Espitia
  Ramírez y David Santiago Güisa, del área de tecnología de la Fundación.
  El proyecto entrega manual de administración, manual técnico y manual de
  despliegue.

## Capabilities and Constraints

**Confirmado:**

- Carga objetivo por debajo de 3 segundos con uso intensivo de foto y video.
- Cumplimiento de buenas prácticas WCAG.
- CMS operable por un equipo sin conocimientos técnicos: textos, imágenes y
  logos de aliados. Colecciones administrables: producciones, colaboraciones,
  agenda, media center.
- SEO internacional: sitemap XML, metadatos, Open Graph, schema markup,
  hreflang.
- Seguridad: SSL, protección antispam, backups automáticos.
- El formulario de contacto enruta por categoría —programación artística,
  prensa, alianzas, información general— a correos del staff.

**Sin decidir, y no se debe inventar:**

- **Infraestructura y despliegue.** La Fundación declaró no tener presupuesto,
  servidores ni infraestructura para alojar el sitio. La definición se aplazó
  para revisarla con el área de tecnología. Es el bloqueo de mayor gravedad del
  proyecto y condiciona CMS, formatos de imagen y el compromiso de <3 s.
- **Correos del staff por categoría.** Mencionados nominalmente en la reunión
  (Carlos Buitrago, Alejandro, Juan Andrés); las direcciones no están
  confirmadas.
- **URL de la política de tratamiento de datos** de la Fundación, requerida por
  el checkbox de suscripción.
- **Política sobre imagen de menores de edad** en fotografía de territorio.
- **Si Spotify y el podcast tienen contenido activo.**

## Brand Commitments

- El nombre **«LA JOVEN» no se traduce nunca.** Es nombre propio y ancla de
  marca. Lo que se traduce es la bajada.
- El manual de marca de la Fundación Bolívar Davivienda es la marca madre.
  Fija naranja `#FF671B` como principal, y Sansation / Corbel / Calibri como
  sistema tipográfico.
- El manual exige que el logo de la orquesta y el texto «Bolívar Davivienda»
  aparezcan **siempre juntos**. El handoff de diseño pide una excepción: ala
  sola en el header, lockup completo en el pie y en la sección de la
  organización. **La excepción está registrada como aprobada por el cliente en
  el handoff, pero no hay constancia escrita de marca.**
- Sansation no tiene licencia web fiable. El handoff la reemplaza por Jost en
  su misma función (etiquetas, fichas, datos). Es una excepción formal al
  manual.
- Debe existir un botón que enlace a la web de la Fundación Bolívar Davivienda.

## Evidence on Hand

**Real y verificado en `.handoff/`:**

- 16 años de trayectoria · 100 músicos de 16 a 24 años · 8 giras
  internacionales · 22 giras nacionales · 210+ conciertos · 700+ músicos
  beneficiados · 25 directores · 41 solistas · 3 artistas populares.
- 18 salas nombradas, entre ellas Elbphilharmonie (Hamburgo), Berliner
  Philharmonie, Musikverein (Viena), Concertgebouw (Ámsterdam), Philharmonie de
  Paris, Alte Oper (Frankfurt), Tonhalle (Zúrich).
- 22 directores invitados con nombre y apellido.
- Dos testimonios reales: Andrés Orozco-Estrada (director principal invitado) y
  Paolo Bortolameolli. Ambos transcritos en los wireframes del PDF de
  storytelling.
- Una gira europea con once fechas publicables, **Pájaro de Fuego, 19 de
  febrero a 4 de marzo de 2027**: Dortmund, Colonia, Viena, Hamburgo,
  Düsseldorf, Friburgo, Frankfurt, Zúrich, París, Madrid, Barcelona.
- Seis producciones nombradas: Consagración de la Primavera, Petrushka, 5ta de
  Shostakovich, Cuerpos en Movimiento, Equilibrios Sonoros, Pájaro de Fuego.
- Copy final en español para prácticamente todas las secciones, contenido en
  los wireframes del PDF de storytelling (en forma de imagen, no de texto
  extraíble).
- **146 fotografías**, 1,94 GB, 2023–2026, en
  `.handoff/drive-download-20260923T153910Z-1-003/`. Inventario detallado y
  brechas en `DESIGN.md`.

**Ausencias que el trabajo futuro no debe fabricar:**

- Cero video y cero audio. No existe el loop del hero, ni teasers, ni pósters
  de producción.
- Cero archivos de marca: no hay SVG del ala ni del lockup FJC + FBD.
- Cero retratos de artista y cero fotografía de territorio con músico enseñando.
- Sin material fotográfico de Pájaro de Fuego ni de Consagración de la
  Primavera etiquetado como tal.
- Sin fotografía dentro de Elbphilharmonie, Musikverein o Concertgebouw: la
  lista de salas no tiene prueba visual salvo Berliner Philharmonie.
- Traducciones a EN, FR y DE: no existen.

## Product Principles

1. **Identidad antes que cifras.** El programador evalúa si la orquesta tiene
   algo propio que decir antes de evaluar si es buena. Las cifras entran
   después de la identidad, nunca antes, y entran pequeñas.
2. **Todo elemento se defiende como decisión escénica.** Una cifra, un logo o un
   acordeón que no se pueda defender así entra después y entra subordinado.
3. **El sitio es informativo, nunca transaccional.** Boletería, donaciones y
   audiciones salen a terceros.
4. **Se diseña en alemán.** El idioma más largo define la escala de los
   titulares y la holgura de las etiquetas. Si rompe en alemán, se rediseña; no
   se encoge.
5. **No se fabrica contenido.** Donde falte material, se marca el vacío y se
   pide. Nunca foto de relleno, testimonio inventado ni cifra estimada.

## Accessibility & Inclusion

- Cumplimiento de buenas prácticas WCAG, declarado como requisito en el brief.
  Meta de trabajo: **WCAG 2.2 nivel AA**.
- Contraste legible sobre video y fotografía, no solo sobre color plano.
- Navegación completa por teclado del scroll, del menú de anclas, de la galería
  y del lightbox.
- `prefers-reduced-motion` respetado sin excepción, incluido el momento de
  scroll de la frase de cierre.
- Restricción legal asumida, pendiente de confirmar: **sin rostro identificable
  de menores de edad** en fotografía de territorio. Hay músicos desde los 16
  años y niños en el programa Creando Lazos.
