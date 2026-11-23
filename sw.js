// Modo sin internet de la app publicada (solo funciona en https o en localhost).
// - La app (html, css, js) se guarda al instalar y se pide primero a internet, para que las
//   actualizaciones lleguen en cuanto haya señal.
// - Imágenes, audios y videos se guardan la primera vez que se usan y desde ahí salen del celular.
// - Cada versión nueva borra lo guardado de la anterior; js/app.js recarga la página cuando llega.
// Cambiar VERSION en cada publicación para renovar lo guardado.
importScripts("js/medios.js"); // MEDIA_URL: dónde están audios, imágenes y videos (Cloudflare R2)
const VERSION = "20261123-0956-49cddffd";
const SHELL_CACHE = `app-${VERSION}`;
const MEDIA_CACHE = `media-${VERSION}`;
// En la computadora (versión "dev", sin publicar) no se guarda nada: siempre se ven los archivos del momento.
const DEV = VERSION === "dev";
const MEDIA_ORIGIN = MEDIA_URL ? new URL(MEDIA_URL).origin : self.location.origin;
const SHELL = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "css/styles.css",
  "js/medios.js",
  "js/ubicacion.js",
  "js/temas-a1.js",
  "js/temas-a2.js",
  "js/temas-b1.js",
  "js/temas-b2.js",
  "js/temas-c1.js",
  "js/temas-c2.js",
  "js/imagenes.js",
  "js/portadas.js",
  "js/audio-base.js",
  "js/app.js",
  "images/app/icon-192.png",
  "images/app/portada.jpg",
];

self.addEventListener("install", (e) => {
  if (DEV) return self.skipWaiting();
  e.waitUntil(
    caches
      .open(SHELL_CACHE)
      .then((c) => c.addAll(SHELL.map((url) => new Request(url, { cache: "reload" }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => DEV || (k !== SHELL_CACHE && k !== MEDIA_CACHE)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== "GET" || (url.origin !== location.origin && url.origin !== MEDIA_ORIGIN)) return;
  if (DEV) return e.respondWith(fetch(req, { cache: "no-store" }));
  if (/\/(audio|images|videos)\//.test(url.pathname)) e.respondWith(media(req));
  else e.respondWith(shell(req));
});

async function shell(req) {
  const cache = await caches.open(SHELL_CACHE);
  try {
    const res = await fetch(req, { cache: "no-cache" }); // sin la caché del navegador: siempre la versión publicada
    if (res.ok) cache.put(req, res.clone());
    return res;
  } catch {
    return (await cache.match(req, { ignoreSearch: true })) || (await cache.match("index.html")) || Response.error();
  }
}

async function media(req) {
  const cache = await caches.open(MEDIA_CACHE);
  const key = new Request(req.url); // sin el encabezado Range, para guardar el archivo completo
  let res = await cache.match(key);
  if (!res) {
    try {
      res = await fetch(key, { cache: "no-cache" }); // una imagen reemplazada con el mismo nombre llega nueva
      if (res.ok) await cache.put(key, res.clone());
    } catch {
      // Sin señal, o R2 sin permiso CORS: se pide tal cual, sin guardarlo.
      return fetch(req).catch(() => Response.error());
    }
  }
  return req.headers.has("range") ? partial(req, res) : res;
}

// iPhone pide los audios por partes (Range) y solo los reproduce si recibe una respuesta 206.
async function partial(req, res) {
  const buf = await res.arrayBuffer();
  const m = /bytes=(\d*)-(\d*)/.exec(req.headers.get("range") || "");
  const start = m && m[1] ? Number(m[1]) : 0;
  const end = m && m[2] ? Math.min(Number(m[2]), buf.byteLength - 1) : buf.byteLength - 1;
  return new Response(buf.slice(start, end + 1), {
    status: 206,
    headers: {
      "Content-Type": res.headers.get("Content-Type") || "audio/mp4",
      "Content-Range": `bytes ${start}-${end}/${buf.byteLength}`,
      "Content-Length": String(end - start + 1),
      "Accept-Ranges": "bytes",
    },
  });
}
