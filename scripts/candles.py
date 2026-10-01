"""
Detecta las velas en la foto de la sala de Medellín (Gira 15 años, © Marcela
Gómez) y escribe sus posiciones normalizadas a src/lib/velas.json. La página
enciende cada vela al hacer scroll: la luz es la de la foto, no inventada.
Uso: py -3.12 scripts/candles.py
"""
import os, glob, json
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = glob.glob(os.path.join(ROOT, ".handoff", "drive-download-*", "2025", "1. Gira*",
                             "Medellín_ Teatro Metropolitano", "*-2088.jpg"))[0]
im = Image.open(SRC).convert("RGB")
W = 1600
im = im.resize((W, round(im.height * W / im.width)), Image.LANCZOS)
H = im.height
a = np.array(im).astype(np.float32) / 255
r, g, b = a[..., 0], a[..., 1], a[..., 2]
lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
warm = (r > b + 0.08)                               # llama cálida, no pantallas de celular
mask = (lum > 0.55) & warm
lab, n = ndimage.label(mask)
pts = []
for i, sl in enumerate(ndimage.find_objects(lab), 1):
    area = int((lab[sl] == i).sum())
    if area < 3 or area > 900:
        continue
    cy, cx = ndimage.center_of_mass(lab == i)
    pts.append({"x": round(cx / W, 4), "y": round(cy / H, 4), "s": round(min(1, area / 120), 3)})
# fuera: reflejos del director y los atriles (esa zona la enciende la luz de escena)
pts = [q for q in pts if not (0.44 < q["x"] < 0.62 and 0.34 < q["y"] < 0.62)]
# fusiona detecciones duplicadas de una misma llama
merged = []
for q in sorted(pts, key=lambda q: -q["s"]):
    if all(((q["x"] - m["x"]) * W) ** 2 + ((q["y"] - m["y"]) * H) ** 2 > 14 ** 2 for m in merged):
        merged.append(q)
pts = merged
# el atril del director: la luz cenital del escenario, se enciende al final
stage = {"x": 0.534, "y": 0.555, "s": 1.0, "stage": True}
# orden de encendido: desde el escenario hacia afuera, como una sala que se contagia
cx, cy = 0.534, 0.52
pts.sort(key=lambda p: (p["x"] - cx) ** 2 + ((p["y"] - cy) * 0.66) ** 2)
out = {"source": "Gira Nacional #LaJoven 15 Años, Teatro Metropolitano de Medellín. Foto: Marcela Gómez",
       "aspect": round(W / H, 4), "candles": pts, "stage": stage}
dst = os.path.join(ROOT, "src", "lib", "velas.json")
json.dump(out, open(dst, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(len(pts), "velas ->", dst)
