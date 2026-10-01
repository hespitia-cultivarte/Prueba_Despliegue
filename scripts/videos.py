"""
Corta, gradúa y codifica los dos videos del cliente para la web.

  py -3.14 scripts/videos.py preview   # hoja con inicio/medio/fin de cada tramo elegido
  py -3.14 scripts/videos.py           # codifica todo en public/media/

Fuentes (en ~/Downloads, fuera del repositorio):
  Making of - Gira Europa 2023 - Filarmónica Joven de Colombia.mov   4K 25p, 9:54, AAC
  Equilibrios Sonoros - Filarmónica Joven de Colombia - Bogotá 2025.mp4   4K 23.976p, 60:50, AAC

Salidas:
  <clip>.mp4 / <clip>-m.mp4   montajes mudos en bucle, 16:9 1600×900 y 9:16 540×960
  <clip>.jpg / <clip>-m.jpg   póster = primer fotograma, ya graduado
  making-of.mp4               el making of completo con su sonido, 1080p
  banda-sonora.m4a            el audio de Equilibrios desde el segundo 20 (pedido del cliente)

La gradación es la misma receta de las fotos (scripts/ingest_photos.py): negros
levantados al color de la sala #14100D y saturación −10 %. Los bucles abren y
cierran en ese mismo color para que el empalme no se vea.
"""
import subprocess
import sys
from pathlib import Path

BIN = Path.home() / r"AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0.2-full_build\bin"
FFMPEG = str(BIN / "ffmpeg.exe")
DESCARGAS = Path.home() / "Downloads"
MAKING = DESCARGAS / "Making of - Gira Europa 2023 - Filarmónica Joven de Colombia.mov"
EQUILIBRIOS = DESCARGAS / "Equilibrios Sonoros - Filarmónica Joven de Colombia - Bogotá 2025.mp4"
RAIZ = Path(__file__).resolve().parent.parent
SALIDA = RAIZ / "public" / "media"

SALA = (20, 16, 13)
GRADO = (
    "eq=saturation=0.9,"
    f"lutrgb=r='val*{1 - SALA[0] / 255:.4f}+{SALA[0]}':"
    f"g='val*{1 - SALA[1] / 255:.4f}+{SALA[1]}':"
    f"b='val*{1 - SALA[2] / 255:.4f}+{SALA[2]}'"
)

# (inicio, fin, x del recorte vertical 0–1). Tiempos en segundos de la fuente.
CLIPS = {
    # I · Obertura: la orquesta tocando, de cerca. Sin entrevistas ni rótulos.
    "obertura": (MAKING, [
        (71.0, 75.5, 0.5),    # violines y la sala a oscuras
        (153.6, 156.6, 0.45),  # violines, luz dorada
        (115.6, 118.8, 0.5),  # manos en el piano
        (161.8, 164.8, 0.5),  # director
        (110.4, 114.8, 0.5),  # atriles
    ]),
    # VII · Trayectoria: las salas de la gira, abiertas.
    "salas": (MAKING, [
        (304.0, 310.5, 0.5),
        (349.3, 352.4, 0.5),
        (481.5, 488.5, 0.5),
        (489.6, 493.0, 0.5),
        (243.0, 245.8, 0.5),
    ]),
    # XI · Bis: la celebración después del concierto.
    "bis": (MAKING, [
        (449.4, 454.2, 0.5),
        (569.8, 573.3, 0.5),
        (578.3, 582.3, 0.5),
    ]),
    # V · Producciones, acto Equilibrios Sonoros: la obra en escena.
    "equilibrios": (EQUILIBRIOS, [
        (1985.0, 1995.0, 0.5),
        (2100.0, 2108.0, 0.5),
        (2590.0, 2598.0, 0.5),
    ]),
}


def ff(*args: str) -> None:
    subprocess.run([FFMPEG, "-v", "error", "-y", *args], check=True)


def preview() -> None:
    from PIL import Image, ImageDraw

    tmp = SALIDA / "_preview"
    tmp.mkdir(parents=True, exist_ok=True)
    filas = []
    for nombre, (src, tramos) in CLIPS.items():
        for k, (a, b, _) in enumerate(tramos):
            fila = []
            for j, t in enumerate((a + 0.1, (a + b) / 2, b - 0.15)):
                p = tmp / f"{nombre}-{k}-{j}.jpg"
                ff("-ss", f"{t:.2f}", "-i", str(src), "-frames:v", "1", "-vf", "scale=320:-2", str(p))
                im = Image.open(p)
                ImageDraw.Draw(im).text((4, 4), f"{nombre} {k} @{t:.1f}", fill="yellow")
                fila.append(im)
            filas.append(fila)
    hoja = Image.new("RGB", (320 * 3, 180 * len(filas)))
    for i, fila in enumerate(filas):
        for j, im in enumerate(fila):
            hoja.paste(im, (320 * j, 180 * i))
    hoja.save(tmp / "hoja.jpg", quality=85)
    print(tmp / "hoja.jpg")


def montaje(nombre: str, src: Path, tramos: list, movil: bool) -> None:
    # Van siempre debajo de un velo y de texto: 1600 px y CRF 28 no se distinguen
    # de 1080p a CRF 25 en pantalla, y pesan menos de la mitad.
    ancho, alto = (540, 960) if movil else (1600, 900)
    # Una entrada por tramo, con búsqueda antes de -i: decodificar desde el
    # principio una hora de 4K para llegar al minuto 43 no tiene sentido.
    entradas, partes, etiquetas = [], [], []
    for k, (a, b, x) in enumerate(tramos):
        entradas += ["-ss", f"{a}", "-t", f"{b - a}", "-i", str(src)]
        recorte = f"crop=ih*9/16:ih:(iw-ih*9/16)*{x}:0," if movil else ""
        partes.append(
            f"[{k}:v]setpts=PTS-STARTPTS,fps=25,{recorte}"
            f"scale={ancho}:{alto}:flags=lanczos,setsar=1[v{k}]"
        )
        etiquetas.append(f"[v{k}]")
    total = sum(b - a for a, b, _ in tramos)
    color = "0x{:02X}{:02X}{:02X}".format(*SALA)
    grafo = ";".join(partes) + (
        f";{''.join(etiquetas)}concat=n={len(tramos)}:v=1:a=0,{GRADO},"
        f"fade=t=in:st=0:d=0.6:color={color},"
        f"fade=t=out:st={total - 0.7:.2f}:d=0.7:color={color},format=yuv420p[out]"
    )
    sufijo = "-m" if movil else ""
    destino = SALIDA / f"{nombre}{sufijo}.mp4"
    # GOP de 1 s: el bucle salta limpio y el navegador puede buscar sin arrastrar.
    ff(
        *entradas,
        "-filter_complex", grafo,
        "-map", "[out]", "-an",
        "-c:v", "libx264", "-preset", "slow", "-crf", "28",
        "-profile:v", "high", "-g", "25", "-movflags", "+faststart",
        str(destino),
    )
    ff("-ss", "0.7", "-i", str(destino), "-frames:v", "1", "-q:v", "4", str(destino.with_suffix(".jpg")))
    print(f"{destino.name}: {total:.1f} s, {destino.stat().st_size / 1e6:.1f} MB")


def making_completo() -> None:
    destino = SALIDA / "making-of.mp4"
    ff(
        "-i", str(MAKING), "-map", "0:v:0", "-map", "0:a:0",
        "-vf", "scale=1920:-2:flags=lanczos,format=yuv420p",
        "-c:v", "libx264", "-preset", "slow", "-crf", "24", "-maxrate", "6M", "-bufsize", "12M",
        "-c:a", "aac", "-b:a", "160k", "-movflags", "+faststart",
        str(destino),
    )
    ff("-ss", "70", "-i", str(MAKING), "-frames:v", "1", "-vf", f"scale=1280:-2,{GRADO}", "-q:v", "4",
       str(SALIDA / "making-of.jpg"))
    print(f"{destino.name}: {destino.stat().st_size / 1e6:.1f} MB")


def banda_sonora() -> None:
    destino = SALIDA / "banda-sonora.m4a"
    # Música de fondo: se comprime la dinámica lo justo para que un fortissimo
    # no salte por encima del resto (hay un pico de −4 LUFS hacia 6:45).
    ff(
        "-ss", "20", "-i", str(EQUILIBRIOS), "-vn",
        "-af", "acompressor=threshold=-18dB:ratio=3:attack=20:release=400,loudnorm=I=-20:LRA=9:TP=-2",
        "-ar", "48000", "-c:a", "aac", "-b:a", "128k", "-movflags", "+faststart",
        str(destino),
    )
    print(f"{destino.name}: {destino.stat().st_size / 1e6:.1f} MB")


def main() -> None:
    SALIDA.mkdir(parents=True, exist_ok=True)
    que = sys.argv[1] if len(sys.argv) > 1 else "todo"
    if que == "preview":
        return preview()
    if que in ("todo", "clips"):
        for nombre, (src, tramos) in CLIPS.items():
            montaje(nombre, src, tramos, movil=False)
            montaje(nombre, src, tramos, movil=True)
    if que in ("todo", "audio"):
        banda_sonora()
    if que in ("todo", "making"):
        making_completo()


if __name__ == "__main__":
    main()
