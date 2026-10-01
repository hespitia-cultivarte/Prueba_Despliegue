"""
Ingesta de fotografía real desde el Drive del handoff a src/assets/img.

- Nombres deterministas, sin tildes ni rutas de >260 caracteres.
- Un solo gradeo para cuatro años y diez fotógrafos (DESIGN.md §4): negros
  levantados al color de sala #14100D, para que la foto se funda con el fondo
  de la página sin halo, y saturación -10 %. Nada de filtros CSS encima.
- Crédito obligatorio: se escribe a src/lib/fotos.json. Donde el archivo no
  trae autor (ni en el nombre ni en EXIF) queda "Crédito por confirmar".

Uso: python scripts/ingest_photos.py
"""
import os, glob, json
from PIL import Image, ImageEnhance

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DRIVE = glob.glob(os.path.join(ROOT, ".handoff", "drive-download-*"))[0]
OUT = os.path.join(ROOT, "src", "assets", "img")
SALA = (20, 16, 13)

PET = "2023/GIRA EUROPEA 2023 - ANDRÉS OROZCO-ESTRADA & HILARY HAHN/Petrushka_ Berliner Philharmonie"
CUE = "2024/CUERPOS EN MOVIMIENTO - CAMERATA DE CUERDAS DE #LAJOVEN, QUATUOR DEBUSSY & COMPAÑÍA CUERPO DE INDIAS"
EQU = "2025/2. Equilibrios Sonoros_ Camerata de Cuerdas La Joven, Quatuor Debussy & La Ventana Producciones/FOTOS"
MED = "2025/1. Gira Nacional_ #LaJoven 15 Años_ juntos orquestamos esta historia/Medellín_ Teatro Metropolitano"
COL = "2026/Gira Nacional Colisionantes 2026/Medellín"
INQ = "2024/GIRA NACIONAL _INQUEBRANTABLES_"

ADAMIK = "Peter Adamik"
GOMEZ = "Marcela Gómez"
VEGA = "Diego Vega"
PATINO = "Andrés Felipe Patiño"
SIN = "Crédito por confirmar"

#  destino                      carpeta  patrón              crédito  contexto
FOTOS = [
    ("peak/sala-velas",            MED, "*-2088.jpg",        GOMEZ,  "Gira Nacional 15 Años · Teatro Metropolitano, Medellín · 2025"),
    ("quienes/postura",            PET, "*ADA_2856.jpg",     ADAMIK, "Petrushka · Berliner Philharmonie · 2023"),
    ("quienes/comunidad",          INQ, "13. *",             PATINO, "Gira Nacional Inquebrantables · 2024"),
    ("quienes/identidad",          COL, "*-2368.jpg",        GOMEZ,  "Gira Nacional Colisionantes · Medellín · 2026"),
    ("diferencial/narrativa",      MED, "*-2026.jpg",        GOMEZ,  "Gira Nacional 15 Años · Medellín · 2025"),
    ("diferencial/movimiento",     EQU, "DSC04764.JPG",      SIN,    "Equilibrios Sonoros"),
    ("diferencial/luz",            CUE, "2. Cuerpos*",       VEGA,   "Cuerpos en Movimiento · 2024"),
    ("diferencial/mirada",         PET, "*ADZ7697.jpg",      ADAMIK, "Petrushka · Berliner Philharmonie · 2023"),
    ("producciones/petrushka-1",   PET, "*ADA_3343.jpg",     ADAMIK, "Petrushka · Berliner Philharmonie · 2023"),
    ("producciones/petrushka-2",   PET, "*ADA_3282.jpg",     ADAMIK, "Petrushka · Berliner Philharmonie · 2023"),
    ("producciones/petrushka-3",   PET, "*ADA_3360.jpg",     ADAMIK, "Petrushka · Berliner Philharmonie · 2023"),
    ("producciones/cuerpos-1",     CUE, "3. Cuerpos*",       VEGA,   "Cuerpos en Movimiento · 2024"),
    ("producciones/cuerpos-2",     CUE, "4. Cuerpos*",       VEGA,   "Cuerpos en Movimiento · 2024"),
    ("producciones/cuerpos-3",     CUE, "5. Cuerpos*",       VEGA,   "Cuerpos en Movimiento · 2024"),
    ("producciones/equilibrios-1", EQU, "_DSC9634.jpg",      SIN,    "Equilibrios Sonoros · 2025"),
    ("producciones/equilibrios-2", EQU, "DSC04921.JPG",      SIN,    "Equilibrios Sonoros"),
    ("producciones/equilibrios-3", EQU, "_DSC9661.jpg",      SIN,    "Equilibrios Sonoros · 2025"),
    ("colaboraciones/orozco",      PET, "*ADZ7692.jpg",      ADAMIK, "Andrés Orozco-Estrada · Petrushka · Berliner Philharmonie · 2023"),
    ("trayectoria/berlin",         PET, "*AD12635.jpg",      ADAMIK, "Berliner Philharmonie · 2023"),
    ("cierre/ovacion",             MED, "*-2310.jpg",        GOMEZ,  "Gira Nacional 15 Años · Medellín · 2025"),
]

def grade(im):
    im = ImageEnhance.Color(im).enhance(0.9)
    lut = []
    for c in SALA:                              # punto negro -> color de sala
        lut += [round(c + v * (255 - c) / 255) for v in range(256)]
    return im.point(lut)

registro = {}
for dest, carpeta, patron, credito, contexto in FOTOS:
    src = glob.glob(os.path.join(DRIVE, carpeta, patron))
    if not src:
        raise SystemExit(f"no encontrado: {carpeta}/{patron}")
    im = Image.open(src[0]).convert("RGB")
    im.thumbnail((2400, 2400), Image.LANCZOS)
    im = grade(im)
    path = os.path.join(OUT, dest + ".jpg")
    os.makedirs(os.path.dirname(path), exist_ok=True)
    im.save(path, quality=86, optimize=True, progressive=True)
    registro[dest] = {"credito": credito, "contexto": contexto, "w": im.width, "h": im.height}
    print(f"{dest:30} {im.width}x{im.height}  {credito}")

json.dump(registro, open(os.path.join(ROOT, "src", "lib", "fotos.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
print(len(registro), "fotos")
