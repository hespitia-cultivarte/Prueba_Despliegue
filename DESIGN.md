# Design

Sistema destilado de `.handoff/` (Entregas 1–3 de Claude Design), del manual de
marca de la Fundación Bolívar Davivienda y de los wireframes del PDF de
storytelling.

**Regla de precedencia.** El handoff manda sobre el manual de marca donde el
handoff ya resolvió la tensión de forma explícita; esas resoluciones están
marcadas como `EXCEPCIÓN`. Donde el handoff calla, manda el manual. Donde
ninguno decide, hay un `HUECO` y no se rellena con supuestos.

Territorio adoptado: **A — «Sala oscura»**. La página es la sala antes de que
suba la luz. Reveals por scroll que son cambios de luz, no animaciones. Un solo
préstamo del territorio C (composición tipográfica en movimiento) en la frase de
cierre de 6.3. El territorio B (papel, programa impreso) queda reservado para
press kit y Media Center, fuera del scroll.

---

## 1 · Color

### Tokens de la orquesta

| Token | Hex | Rol |
|---|---|---|
| `--lj-sala` | `#14100D` | Fondo dominante. Negro tintado cálido. **Nunca `#000`.** |
| `--lj-foso` | `#241C16` | Superficies elevadas, separadores, fichas técnicas. |
| `--lj-papel` | `#F2EDE6` | Tinta sobre oscuro; fondo de las secciones de lectura. |
| `--lj-luz` | `#F5C77E` | Luz de escena. Acento único: etiquetas, subrayados, CTA primario. |
| `--lj-senal` | `#2E8C86` | Interacción: foco, enlaces, estados activos. Sobre claro usar `#186E68`. |
| `--fbd-vinculo` | `#FF671B` | Naranja de la Fundación. **Solo en 6.9 y en el pie.** |

### Secundarios en uso

`#0D0A08` negro de la frase de 6.3b y del pie · `#EDE7DC` fondo de 6.7 ·
`#FFFFFF` fondo de 6.9.

Tintas sobre oscuro: `#EDE5DA` `#CFC5B8` `#B4A996` `#9A9083` `#8E8578`.
Tintas sobre claro: `#3A322B` `#6B6157` `#C9BFB1`.

### Linaje frente al manual de marca

| | Decisión | Razón registrada en el handoff |
|---|---|---|
| Hereda | Negro y blancos del manual como base | Los principales del manual ya son negro, blancos y grises; mantener esa economía cromática permite un solo acento. |
| Hereda | `#FF671B` intacto | Se respeta el naranja pero se le asigna una función: señalar el vínculo institucional, no vestir la orquesta. |
| Extiende | `#F5C77E` derivado del ámbar secundario `#FDBC3D` / `#FDD2B2` | Rebajado en croma y subido en luminosidad para leerse sobre negro como luz de sala, no como naranja corporativo. |
| Extiende | `#2E8C86` derivado del turquesa secundario `#4CC1BB` | Oscurecido hasta cumplir 4.5:1 sobre papel; da color de interacción que no compite con el ámbar ni cita al naranja. |
| `EXCEPCIÓN` | Modo oscuro dominante frente al blanco institucional | El sistema de la Fundación está pensado para reporte y territorio; La Joven se presenta desde la sala. |

Paleta del manual, para referencia:
principales `#FF671B` `#E18535` `#E1C150` `#78787B` `#A7A9AB` `#EFEFEF`
`#FFFFFF` `#000000`; secundarios relevantes `#FDBC3D` `#FFCF01` `#E1AA25`
`#4CC1BB` `#00A669` `#D58434`.

### `HUECO` de color

- No hay tema claro alternativo ni token de `:focus-visible` sobre fondo ámbar.
- No hay tokens de error, éxito ni advertencia para los estados del formulario.
  Los formularios de 6.10 y 6.11 los necesitan.
- No está resuelto el contraste del texto de hero sobre video: el handoff
  especifica gradiente pero no su opacidad ni su parada.

---

## 2 · Tipografía

### Familias

**Archivo** — display y UI. Variable, ejes `wght` 100–900 y `wdth` 62–125.
OFL 1.1, Omnibus-Type, con itálicas reales.
Titulares: 800 con `font-stretch: expanded`, `letter-spacing` −0.03 a −0.045em,
`line-height` 0.82–0.92.

**Newsreader** — voz. Serif variable, ejes `opsz` 6–72 y `wght`, con itálicas
reales. OFL. Light 300 / Regular 400. Cuerpos 17–24 px, `line-height` 1.45–1.5.
Todo lo que es voz humana —testimonios, sinopsis, relato de territorio— va aquí.

**Jost** — etiquetas, fichas, datos, botones. OFL.
`EXCEPCIÓN`: sustituye a Sansation del manual, que no tiene licencia web fiable.
Hereda su función, no su forma. 500/600, caja alta, `letter-spacing` .1–.2em,
10.5–13.5 px.

**IBM Plex Mono** — solo anotaciones de maqueta. **No pasa a producción.**

### Advertencia técnica sobre el `wdth` de Archivo

Las tres entregas del handoff cargan Archivo desde Google Fonts con la URL
`family=Archivo:ital,wght@…` y luego aplican `font-stretch: expanded`. Esa URL
sirve una variable **solo de peso**: el eje `wdth` no viene, así que
`font-stretch` no hace nada y el titular se está viendo en ancho normal.

Lo que el handoff describe —«el eje expanded me deja sostener LA JOVEN sin
recurrir a una condensada»— exige el archivo completo con `wdth`. En producción
se autoaloja el variable de Omnibus-Type con ambos ejes y se declara
`font-variation-settings: "wdth" 125, "wght" 800`. Verificar contra la comp que
la escala tipográfica no cambia al aplicarlo.

### Escala, medida en las comps de desktop

| Uso | Tamaño |
|---|---|
| Hero «LA JOVEN» | `clamp(96px, 13vw, 200px)` |
| Título de acto de producción | `clamp(52px, 7vw, 110px)` |
| Titular de sección grande | `clamp(52px, 6.4vw, 100px)` · `clamp(48px, 5.6vw, 88px)` |
| Titular de sección | `clamp(44px, 5vw, 80px)` · `clamp(44px, 4.8vw, 76px)` |
| Titular menor | `clamp(40px, 4.4vw, 64px)` · `clamp(38px, 4vw, 60px)` |
| Nombre de sala / lugar de agenda | `clamp(24px, 2.4vw, 34px)` |
| Testimonio editorial | `clamp(26px, 2.6vw, 36px)` |
| Sinopsis serif | 24 px |
| Cuerpo serif de 6.2 | 23 px |
| Título de tarjeta de 6.3 | 27 px |
| Cifra de trayectoria | 30 px |
| Etiqueta Jost | 10–13.5 px, caja alta |

`line-height` recurrentes: `.86` `.88` `.9` `1.05` para display; `1.45` `1.48`
`1.5` para serif; `1.8` para fichas técnicas.
`letter-spacing` recurrentes: `−.045` `−.04` `−.035` `−.03` `−.025` `−.02` `−.01`
en display; `.06` `.08` `.1` `.12` `.14` `.18` `.2` em en etiquetas.

### Presión del alemán

Medida en Entrega 1 sobre la bajada del hero:

- ES es la línea más corta de las cuatro. **Diseñar con ES rompe todo lo demás.**
- FR crece ~12 %. El problema no es el titular sino los botones: «Nous
  contacter», «Faites défiler».
- DE crece ~30 % con palabras que no se pueden partir
  («Jugendphilharmonie Kolumbiens»). La bajada se maqueta a 26–27 caracteres por
  línea y cuatro líneas; el titular usa el eje `expanded`, no un cuerpo mayor.
- Excepción favorable: en alemán la etiqueta de contacto es «Kontakt», la más
  corta de las cuatro. El header alemán es el más holgado.
- Toda etiqueta se dimensiona con **+35 % de holgura** sobre el español.
- En móvil, la etiqueta de estado **nunca comparte línea** con el título
  («Im Repertoire» es 5 caracteres más largo que «En repertorio»).

### `HUECO` de tipografía

- No hay escala tipográfica definida para móvil como sistema; las comps de
  Entrega 2 dan valores por pantalla, no una escala.
- No hay tratamiento tipográfico definido para los mensajes de error del
  formulario ni para los estados vacíos fuera de 6.8.
- Falta decidir subsets: FR y DE exigen diacríticos y `ß`/umlauts. Nadie ha
  fijado si se usa `latin` o `latin-ext`.

---

## 3 · Espaciado y forma

- Contenedor máximo **1440 px**.
- Padding lateral **40 px** desktop · **22 px** móvil (canvas de 390 px).
- Separaciones de sección **110–130 px**. Padding de sección observado:
  `130px 40px 0` · `120px 40px` · `80px 40px` · `60px 40px 44px`.
- Separadores: `1px rgba(242,237,230,.12–.18)` sobre oscuro, `#C9BFB1` sobre
  claro.
- **Sin `border-radius`** salvo pills: el botón «Contáctenos» usa `999px`.
- **Sin sombras decorativas.**
- Hit targets ≥ **44 px**. Campos de formulario **48 px**, con subrayado en vez
  de caja.
- Medidas de texto: `44ch` `48ch` para cuerpos; `16ch` para titulares.
- La grilla de 4 tarjetas de 6.3 se separa con `gap: 1px` sobre un fondo
  `rgba(...)`, no con bordes.

### `HUECO` de espaciado

- No existe una escala de espaciado nombrada. Los valores están sueltos en las
  comps (8, 12, 14, 16, 22, 30, 40, 56, 64, 70 px). Hay que fijar una escala y
  mapear cada valor, o se pierde la consistencia en cuanto entren componentes
  nuevos.
- No hay definición de breakpoints. Solo existen dos anchos comp: 390 px y
  1440 px. Tablet no está diseñado y el brief lo exige.

---

## 4 · Tratamiento de imagen

**Receta única**, porque cuatro años de material de muchos fotógrafos no se
unifica eligiendo bien:

- Base cálida neutra.
- Negros levantados a `#14100D`, nunca a 0.
- Saturación **−18 %**.
- Un solo tono de luz ámbar en las altas.
- Grano fino constante.
- Recorte que deja el cuerpo entero o el gesto completo. Nunca el plano medio
  institucional.

**Excepción 6.7 Creando Lazos:** luz natural, contraste bajo, **sin ámbar**,
para que no se confunda escena con comunidad.

Relaciones de aspecto por sección:
6.2 → 4:5 vertical, 560 px de alto en desktop ·
6.3 → 3:2 horizontal a sangre, 300 px de alto en la tarjeta ·
6.4 acto → 21:9 a sangre, 78vh; póster 4:5 ·
6.5 → retrato 4:5 ·
6.6 → panorámica con sala reconocible ·
6.7 → mezcla 4:5 y 3:2.

Carga: `lazy` todo bajo el fold, `preload` del hero.
Formatos: AVIF/WebP con `srcset`.

### `HUECO` de imagen

La receta está descrita en prosa, no en parámetros reproducibles. No hay LUT,
ni curva, ni valores de grano, ni punto negro numérico más allá de `#14100D`.
Dos personas aplicándola obtienen resultados distintos. Hay que convertirla en
un preset de Lightroom o en una cadena de `sharp` verificable antes de tocar la
primera foto.

---

## 5 · Movimiento

- Los reveals por scroll son **cambios de luz**: opacidad y transform sutiles.
  Nunca parallax, nunca stagger largos.
- **Nada de easing tipo bounce o elastic.**
- La frase de 6.3b tiene su propio momento de scroll: el scroll se frena ~900 ms
  y la segunda línea entra por peso y opacidad. El indicador de puntos se oculta
  ahí.
- Con `prefers-reduced-motion`, **todo visible y estático**, sin excepción. La
  frase de 6.3b simplemente está ahí, a plena escala.
- El hero hace corte a negro de **600 ms** en la cola del loop; el punto de loop
  es invisible porque empieza y termina en el mismo nivel de luz.

### `HUECO` y objeción de movimiento

El frenado de scroll de 900 ms es **hijack de scroll**. Rompe la expectativa de
control del usuario, pelea con los lectores de pantalla y con la navegación por
teclado, y no existe en las comps más que como anotación. Alternativa que
conserva el efecto sin secuestrar el scroll: sección `position: sticky` de
~180vh con animación ligada al progreso de scroll. Registrado aquí como
objeción abierta, no resuelto.

No hay definidas: duraciones, curvas de easing concretas, ni el comportamiento
del punto activo del nav durante el scroll.

---

## 6 · Componentes y su estado en el handoff

| # | Sección | Comp desktop | Comp móvil | Estado |
|---|---|---|---|---|
| — | Header fijo | Sí | Sí | Resuelto. Gradiente a transparente, ala sola a la izquierda, ES/EN/FR/DE + pill «Contáctenos» + hamburguesa. `EXCEPCIÓN`: el lockup «Bolívar Davivienda» nunca va en el header. |
| — | Nav de puntos | Sí | — | Resuelto en desktop. Fijo al borde derecho, 10 anclas, punto activo 8 px ámbar, resto 5 px al 40 %, tooltip al hover/focus, navegable por teclado. **Sin comp móvil.** |
| — | Menú overlay | — | Sí | Resuelto en móvil. 11 destinos numerados como movimientos + idiomas + Media Center. |
| 6.1 | Hero | Sí | Sí | Resuelto como composición. El activo no existe. |
| 6.2 | Quiénes somos | Sí | Sí | Resuelto. 3 filas foto 4:5 + texto alternando lado (`direction: rtl` en la fila 2). |
| 6.3 | El diferencial | Sí | Sí | Resuelto. Titular expanded + grid de 4 tarjetas. |
| 6.3b | La frase | Sí | Sí | Composición resuelta, comportamiento en disputa (ver §5). |
| 6.4 | Producciones | Parcial | Parcial | **A medias.** Solo el acto 01 está desplegado; los actos 02 y 03 dicen «repiten esta plantilla». La fila de tres «en repertorio» no está dibujada. |
| 6.4b | Lightbox | — | Sí | Resuelto en móvil. Teclado y flechas, Esc cierra, crédito de fotógrafo obligatorio. **Sin comp desktop.** |
| 6.5 | Colaboraciones | Sí | Sí | Resuelto para un testimonio. El muro de 5 categorías tiene contenido solo en «Directores». |
| 6.6 | Trayectoria | Sí | Sí | Resuelto. Cifras pequeñas en fila, 18 salas a escala de titular en 2 columnas. |
| 6.7 | Creando Lazos | Sí | Sí | Resuelto visualmente. El copy es placeholder marcado como tal. |
| 6.8 | Agenda | Sí | Sí | **Diseñado contra el supuesto equivocado.** Ver §7. |
| 6.9 | La organización | Sí | Sí | Resuelto. Fondo blanco, kicker naranja, lockup completo, botón externo. |
| 6.10 | Contacto | Sí | Sí | Resuelto. Chips de asunto primero, 3 campos con subrayado, foco 2 px en `#2E8C86`. |
| 6.11 | Cierre + pie | Sí | Sí | Resuelto. Suscripción, redes, Media Center como enlace de pie. |
| — | Media Center | — | — | **No existe comp.** Solo la decisión: panel lateral desde el pie, con fotos, logos, press kit y dossier. |
| — | Estados de formulario | — | — | **No existe comp.** Ni error, ni envío, ni confirmación inline. |
| — | Tablet | — | — | **No existe comp.** El brief lo exige. |
| — | 404 / error | — | — | **No existe comp.** |

---

## 7 · Divergencias entre el handoff y el PDF de storytelling

El copy real del PDF de storytelling está **dentro de imágenes de wireframe**,
no como texto. `pdftotext` solo extrae los objetivos de cada sección. Quien
escribió el handoff aparentemente tampoco pudo leerlo, y por eso inventó donde
ya había material. Registradas cuatro divergencias:

1. **Agenda.** El handoff asume que no hay fechas confirmadas y diseña un estado
   vacío con cuatro filas inventadas (Costa Rica, gira Francia, Bogotá,
   audiciones). El PDF tiene una gira europea real y publicable: **Pájaro de
   Fuego, 19 feb – 4 mar 2027**, once ciudades, con botón «TICKETS» por fila y
   agrupación **por producción**, no lista plana. Es el argumento de venta más
   fuerte del sitio y está subdiseñado. **Manda el PDF.**
2. **Copy de 6.2, bloque 03.** El handoff lo marca «copy nuevo, pendiente de
   aprobación · el PDF 1 no traía este bloque escrito». Sí lo traía: *«Somos
   inquietos, apasionados, rigurosos. Somos jóvenes que no se conforman con
   reproducir una tradición, sino que buscan dialogar con ella, cuestionarla y
   mantenerla viva.»* **Manda el PDF.**
3. **Testimonios.** El handoff diseña con «un solo testimonio confirmado». Hay
   dos: Orozco-Estrada y **Paolo Bortolameolli** — *«Hay algo extraordinario
   aquí: un equilibrio poco común entre rigor artístico y humanidad.»*
4. **Descarga en el lightbox.** El PDF pone un botón de descarga en cada foto de
   galería. El handoff no lo recoge. Es decisión de derechos, no de diseño:
   queda **abierta**.

Divergencia deliberada y bien argumentada, que se conserva: el PDF lista las
producciones como **acordeón con vista de detalle**; el handoff lo convierte en
**actos a sangre dentro del mismo scroll**, con índice tipográfico clicable
arriba. Se mantiene el orden y el contenido del PDF, cambia el mecanismo.

---

## 8 · Frases que se transcrean, no se traducen

Marcadas por el handoff; las decide el traductor oficial, no el equipo técnico.

- «No venimos al escenario únicamente a interpretar partituras. **Venimos a
  habitarlas.**» — *habitar una partitura* no existe en alemán ni en inglés sin
  sonar místico.
- «Experiencias **significativas**» — *meaningful* / *bedeutungsvoll* arrastran
  tono de ONG; la sección 6.7 se leería como RSE, justo lo que el brief prohíbe.
- «#LaJoven **Creando Lazos**» — se propone dejarlo sin traducir, como nombre de
  programa, con una glosa de una línea.
- «Una historia que también puede **medirse**» — el juego entre relato y cifra no
  sobrevive literal.

---

## 9 · Assets: lo que hay y lo que falta

### Inventario verificado

146 archivos de imagen, 1,94 GB, en
`.handoff/drive-download-20260923T153910Z-1-003/`.
116 horizontales, 12 verticales, 18 con ruta demasiado larga para las
herramientas de Windows (>260 caracteres). Mediana 9,4 MP.

| Carpeta | N.º | Fotógrafo | Lectura |
|---|---|---|---|
| Petrushka · Berliner Philharmonie 2023 | 11 | © Peter Adamik (EXIF) | **Lo mejor del archivo.** Máscaras, sala reconocible, prueba internacional real. |
| Shostakovich 5 · Ginebra 2023 | 36 | — | **No son fotografías: son capturas de video.** 3840×2160 RGBA, ~40 MB cada una, sin EXIF de cámara. Varias casi negras e inservibles. Sirven como frames, no como foto. |
| Cuerpos en Movimiento 2024 | 5 | — | Exactamente en brief (danza + cuerdas, luz dramática). **Solo 5**, contra las 8–12 que pide una galería. |
| Festival Ilumina 2024 | 17 | Nathalia Mateus Briceño | Luz natural, pabellón de bambú. Pero son **fotos grupales de festival**, justo lo que el handoff prohíbe para 6.7, con muchos rostros visibles. |
| Gira Inquebrantables 2024 | 17 | A. F. Patiño, A. Martínez, L. Velosa | Proyecciones, selfies de grupo, cobertura de concierto correcta. |
| Bogotá · Teatro Mayor 2025 | 18 | © Juan Diego Castillo (EXIF) | Tela roja, vendas. **Las 18 se dispararon en 70 segundos**: variedad mínima. 2500×1667, justo para un 21:9 a sangre en pantalla 2×. |
| Medellín · Metropolitano 2025 | 10 | Marcela Gómez (EXIF) | Velas, planos generales, tela roja. |
| Equilibrios Sonoros 2025 | 11 | **sin crédito** | Malabares, danza, circo. El material interdisciplinario más claro que existe. |
| Cartagena 2026 | 9 | Akiro Palacio | Cruce con música popular sobre escena. |
| Colisionantes 2026 | 12 | Marcela Gómez (EXIF) | Concierto limpio, buen director. |

### Problemas que obligan a decisiones

- **Orientación.** 116 de 146 son horizontales. Las secciones 6.2, 6.4 (póster) y
  6.5 piden **4:5 vertical**. Recortar un 3:2 a 4:5 descarta el 55 % del ancho.
  O se recorta a mano con criterio, o se cambia la relación de aspecto de esas
  secciones.
- **Crédito obligatorio.** 47 archivos —los 36 de Ginebra y los 11 de
  Equilibrios— no tienen fotógrafo identificable. Un tercio del archivo no puede
  entrar en una galería cuyo campo de crédito es obligatorio.
- **Rutas largas.** 18 archivos superan el límite de 260 caracteres de Windows y
  rompen herramientas. El pipeline de ingesta tiene que renombrar y normalizar.
- **Ginebra en PNG RGBA.** 1,4 GB de los 1,94 GB totales son 36 capturas de
  video guardadas como PNG con canal alfa. Peso absurdo, calidad de frame.

### Lo que no existe

- Video: **cero archivos.** No hay loop de hero, ni teasers, ni conciertos.
- Audio: **cero archivos.**
- Marca: no hay SVG del ala ni del lockup FJC + FBD. En las comps aparecen como
  cajas punteadas «SVG ALA» / «SVG LOCKUP». El ala **sí se ve dibujada** en los
  wireframes del PDF, así que el arte existe en algún lado.
- Retratos de artista para 6.5. Orozco-Estrada solo aparece en planos generales.
- Fotografía de territorio con músico enseñando, para 6.7.
- Material etiquetado de **Pájaro de Fuego** y de **Consagración de la
  Primavera**, dos de los tres «actos completos» del catálogo.
- Fotografía dentro de Elbphilharmonie, Musikverein o Concertgebouw. La lista de
  18 salas no tiene prueba visual salvo Berliner Philharmonie.
- Sala vacía o montaje técnico, que es justo lo que le habla a un programador.
- Licencia web o `woff2` de Sansation. Se asume sustituida por Jost.

### Plan B del hero, si el rodaje del 20 de octubre no llega

En este orden, según Entrega 1:
1. Tres tomas de archivo de 4–5 s encadenadas con corte a negro. Funciona porque
   el loop es de luz, no de acción continua.
2. Una sola fotografía a sangre con movimiento lentísimo de escala del 4 % y la
   tipografía entrando.

Lo que **no** se hace: un collage de clips cortos. Delata falta de material.

---

## 10 · Decisiones de arquitectura visual que el handoff toma y defiende

1. **Media Center fuera del scroll.** Enlace persistente en el pie que abre un
   panel lateral con descargas agrupadas. Su único usuario es prensa y el
   programador que ya decidió; en el recorrido narrativo interrumpe el
   argumento. Además le da al CMS un solo lugar donde subir archivos.
2. **Los puntos del borde derecho son el único mapa.** El hamburguesa abre las
   mismas anclas. Sin subpáginas, sin migas, sin menú jerárquico.
3. **La frase de 6.3 tiene su propia pantalla.** Negro pleno, sin imagen, sin
   header visible.
4. **Las salas se componen como cartel.** Dieciocho nombres a escala de titular.
   Las cifras van antes, pequeñas y en fila: el número apoya, el nombre de la
   sala convence. Sin acordeón.
5. **Selector de idioma sin banderas, persistente.** ES · EN · FR · DE en Jost
   caja alta, con `hreflang` y URL localizada (`/de/`).
6. **Video con póster propio, nunca UI de YouTube.** El iframe se crea al primer
   clic. Los conciertos completos de Berlín, París y Bogotá salen como enlace
   externo.

---

## 11 · Resumen de huecos, ordenado por lo que bloquea

**Bloquean la construcción:**
- Comp de tablet. El brief lo exige y no existe.
- Comp de estados de formulario: error, envío, confirmación.
- Comp del panel del Media Center.
- Comp desktop del lightbox.
- Comp del nav de puntos en móvil.
- Escala de espaciado nombrada y breakpoints.

**Bloquean la calidad visual:**
- La receta fotográfica como parámetros, no como prosa.
- Los actos 02 y 03 de producciones, y la fila de tres «en repertorio».
- Gradiente y contraste del texto de hero sobre video, con valores.
- Duraciones y curvas de easing.

**Bloquean el contenido:**
- Todo lo de §9 «Lo que no existe».
- Traducciones a EN, FR y DE.
- Las cuatro divergencias de §7, para saber qué copy manda.

**Decisiones de negocio pendientes:**
- La excepción del header, por escrito, desde marca.
- Descarga de fotos en el lightbox: sí o no.
- Política sobre imagen de menores.
- Correos del staff y URL de política de datos.

---

## 12 · Rediseño con scroll-craft (24 sep 2026): lo que cambia sobre este documento

Pedido explícito del usuario: página premium con la skill scroll-craft y las fotos
reales del Drive. Brief, curva y gramática en `scrollcraft/builds/lajoven/BRIEF.md`.
Estas decisiones **sustituyen** lo dicho arriba donde choquen:

- **Dos familias, no tres.** El piso de scroll-craft limita a dos. Quedan Archivo
  (titulares, etiquetas, UI) y Newsreader (la voz). Jost sale: el vínculo con
  Sansation se pierde; se registra como costo.
- **Presupuesto de fuentes corregido con datos.** Archivo variable subseteado =
  152 KB (no 30–45 KB como estimaba el plan). Solo Archivo se precarga.
- **Nav de puntos → programa de mano.** La barra muestra el movimiento en curso y
  abre el programa (11 movimientos con su tempo).
- **Sin "Deslice ⌄".** Los indicadores de scroll están prohibidos por la skill.
- **Hero:** ya no es video ni placeholder: cuatro planos de una foto real
  (Colisionantes 2026, © Marcela Gómez) con el titular entre el fondo y el director.
- **Frase de 6.3b:** ya no es una pantalla negra aislada ni frena el scroll; es el
  pico (intermezzo): la sala de Medellín se enciende vela por vela.
- **Parallax:** permitido solo en los planos del hero (§5 decía "nunca"; el usuario
  pidió los estilos de scroll-craft, que exigen profundidad en el hero).
- **Agenda:** usa la gira real de Pájaro de Fuego 2027 del PDF (§7), no el estado vacío.
- **x-default = inglés** e idioma automático: ES/EN/FR/DE según el idioma principal
  del navegador; cualquier otro, inglés; la elección manual se recuerda.
- **Gradeo fotográfico como código:** `scripts/ingest_photos.py` (negro → #14100D,
  saturación −10 %). La receta completa de §4 (ámbar en altas, grano) sigue pendiente.
