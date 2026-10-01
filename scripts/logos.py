"""
Vectoriza los dos logos que entregó el cliente (PNG blanco sobre negro, sin
fondo transparente) a SVG de un solo color con fill="currentColor", para que
la misma pieza sirva clara sobre la sala y oscura sobre el blanco de la
Fundación, nítida a cualquier tamaño.

  py -3.12 scripts/logos.py

Entrada:  ~/Downloads/logo-lajoven.png      (468×491, ala + FILARMÓNICA JOVEN DE COLOMBIA)
          ~/Downloads/logo-lajoven-bd.png   (231×98, el mismo logo + «Bolívar Davivienda»)
Salida:   src/assets/marca/{lajoven,lajoven-bd,ala}.svg (se incrustan con ?raw)
          public/favicon.svg (el ala sobre la sala)

Los originales son raster pequeños: se reescalan ×8 antes de trazar para que
las curvas salgan de la forma y no de los píxeles. No es el arte original de
la marca; cuando llegue el SVG oficial, reemplaza a estos dos archivos.
"""
from pathlib import Path

import numpy as np
import potrace
from PIL import Image, ImageFilter

RAIZ = Path(__file__).resolve().parent.parent
ORIGEN = Path.home() / "Downloads"
DESTINO = RAIZ / "src" / "assets" / "marca"
ESCALA = 8

PIEZAS = {
    "logo-lajoven.png": ("lajoven.svg", "Filarmónica Joven de Colombia"),
    "logo-lajoven-bd.png": ("lajoven-bd.svg", "Filarmónica Joven de Colombia · Bolívar Davivienda"),
}


def trazar(ruta: Path, recorte: tuple[int, int, int, int] | None = None) -> tuple[str, int, int]:
    gris = Image.open(ruta).convert("L")
    if recorte:
        gris = gris.crop(recorte)
    grande = gris.resize((gris.width * ESCALA, gris.height * ESCALA), Image.LANCZOS)
    grande = grande.filter(ImageFilter.GaussianBlur(ESCALA * 0.35))
    a = np.asarray(grande) > 118

    ys, xs = np.nonzero(a)
    pad = ESCALA * 2
    y0, y1 = max(ys.min() - pad, 0), min(ys.max() + pad, a.shape[0])
    x0, x1 = max(xs.min() - pad, 0), min(xs.max() + pad, a.shape[1])
    a = a[y0:y1, x0:x1]

    # potracer toma los píxeles en False como tinta (convención de PIL modo "1").
    curvas = potrace.Bitmap(~a).trace(
        turdsize=ESCALA * ESCALA,
        turnpolicy=potrace.POTRACE_TURNPOLICY_MINORITY,
        alphamax=1.0,
        opticurve=True,
        opttolerance=0.2,
    )

    f = lambda p: f"{p.x:.0f} {p.y:.0f}"
    partes = []
    for c in curvas:
        partes.append(f"M{f(c.start_point)}")
        for s in c.segments:
            if s.is_corner:
                partes.append(f"L{f(s.c)}L{f(s.end_point)}")
            else:
                partes.append(f"C{f(s.c1)} {f(s.c2)} {f(s.end_point)}")
        partes.append("Z")
    return "".join(partes), a.shape[1], a.shape[0]


def main() -> None:
    DESTINO.mkdir(parents=True, exist_ok=True)
    for origen, (salida, titulo) in PIEZAS.items():
        d, w, h = trazar(ORIGEN / origen)
        svg = (
            f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" '
            f'role="img" aria-label="{titulo}" fill="currentColor">'
            f'<path fill-rule="evenodd" d="{d}"/></svg>\n'
        )
        (DESTINO / salida).write_text(svg, encoding="utf-8")
        print(f"{salida}: {w}×{h} (÷{ESCALA} = {w/ESCALA:.0f}×{h/ESCALA:.0f}), {len(svg)/1024:.1f} KB")

    # El ala sola (la franja superior del logo): la barra, según la excepción de
    # marca del handoff (DESIGN.md §6), y el favicon.
    d, w, h = trazar(ORIGEN / "logo-lajoven.png", (60, 0, 468, 235))
    ala = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" '
        f'aria-hidden="true" focusable="false" fill="currentColor">'
        f'<path fill-rule="evenodd" d="{d}"/></svg>\n'
    )
    (DESTINO / "ala.svg").write_text(ala, encoding="utf-8")
    print(f"ala.svg: {w}×{h}, {len(ala)/1024:.1f} KB")
    lado = max(w, h) * 1.25
    ox, oy = (lado - w) / 2, (lado - h) / 2
    favicon = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {lado:.0f} {lado:.0f}">'
        f'<rect width="100%" height="100%" rx="{lado * 0.18:.0f}" fill="#14100D"/>'
        f'<path transform="translate({ox:.0f} {oy:.0f})" fill="#F2EDE6" fill-rule="evenodd" d="{d}"/></svg>\n'
    )
    (RAIZ / "public" / "favicon.svg").write_text(favicon, encoding="utf-8")
    print(f"favicon.svg: {len(favicon)/1024:.1f} KB")


if __name__ == "__main__":
    main()
