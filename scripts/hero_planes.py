"""
Planos del hero a partir de UNA foto real: Gira Nacional Colisionantes 2026,
Medellín, © Marcela Gómez. Sin generación de imagen: solo recorte y máscaras.

Orden de atrás hacia adelante (el HTML pone "LA JOVEN" entre far y scene):

  far    negro de sala + neblina: lo pinta el CSS. La foto original ya tiene
         fondo negro, así que el "clean plate" es negro y no deja hueco.
  scene  director (recorte con alfa real, rembg isnet) UNIDO a los músicos
         (llave de luminancia: el fondo es negro puro). Transparente en el
         vacío, para que el titular se vea detrás y el brazo y la batuta lo
         crucen por delante.
  near   franja de atriles y partituras en primer plano, sólida por debajo
         de su silueta. La escena se recorta ahí para no duplicarse.

Uso:  py -3.12 scripts/hero_planes.py
"""
import os, glob
import numpy as np
from PIL import Image, ImageFilter
from rembg import remove, new_session
from scipy import ndimage

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = glob.glob(os.path.join(ROOT, ".handoff", "drive-download-*", "2026",
                             "Gira Nacional Colisionantes 2026", "Medellín",
                             "*-2082.jpg"))[0]
OUT = os.path.join(ROOT, "src", "assets", "img", "hero")
os.makedirs(OUT, exist_ok=True)
W = 2560

im = Image.open(SRC).convert("RGB")
im = im.resize((W, round(im.height * W / im.width)), Image.LANCZOS)
H = im.height
# mismo gradeo que scripts/ingest_photos.py: negro -> color de sala (#14100D),
# para que la franja opaca y los bordes de la llave se fundan con el fondo.
SALA = np.array([20, 16, 13], dtype=np.float32)
rgb = np.array(im).astype(np.float32)
rgb = (SALA + rgb * (255 - SALA) / 255).round().astype(np.uint8)

# --- director: recorte real, solo el componente mayor (incluye la batuta) --
cut = remove(im, session=new_session("isnet-general-use"), post_process_mask=True)
a_dir = np.array(cut.split()[-1]).astype(np.float32) / 255.0
lab, n = ndimage.label(a_dir > 0.5)
if n:
    sizes = ndimage.sum(np.ones_like(lab), lab, range(1, n + 1))
    keep = lab == (np.argmax(sizes) + 1)
    keep = ndimage.binary_dilation(keep, iterations=6)
    a_dir = a_dir * keep

# --- músicos: llave de luminancia sobre el negro de sala -------------------
lum = np.array(im.convert("L").filter(ImageFilter.GaussianBlur(2))).astype(np.float32) / 255.0
a_lum = np.clip((lum - 0.035) / (0.10 - 0.035), 0, 1)
yy = (np.arange(H)[:, None] / H) * np.ones((1, W))
a_lum = a_lum * (yy > 0.42)                       # el vacío superior queda limpio
a_scene = np.maximum(a_dir, a_lum)

# --- primer plano: franja inferior, con una curva que baja en el centro ----
xs = np.linspace(-1, 1, W)
edge = H * (0.915 + 0.03 * (1 - xs ** 2))         # sube en los bordes, baja al centro
near = (np.arange(H)[:, None] >= edge[None, :]).astype(np.float32)
near = np.array(Image.fromarray((near * 255).astype(np.uint8))
                .filter(ImageFilter.GaussianBlur(10))).astype(np.float32) / 255.0
a_scene = a_scene * (1 - np.clip(near * 1.4, 0, 1))  # la escena no se duplica bajo la franja

def save(name, a):
    Image.fromarray(np.dstack([rgb, (np.clip(a, 0, 1) * 255).astype(np.uint8)]), "RGBA") \
         .save(os.path.join(OUT, name), optimize=True)
    print(name, W, H)

save("hero-scene.png", a_scene)
save("hero-near.png", near)
Image.fromarray(rgb).save(os.path.join(OUT, "hero-poster.jpg"), quality=88, optimize=True)
for old in ("hero-mid.png",):
    p = os.path.join(OUT, old)
    if os.path.exists(p): os.remove(p)
print("ok")
