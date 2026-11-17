// Dónde están los audios, imágenes y videos.
// En internet salen de Cloudflare R2 (GitHub Pages solo permite 1 GB); en la computadora, de las carpetas
// del proyecto. scripts/subir_medios.py sube a R2 lo nuevo antes de cada publicación.
// La usan js/app.js (para armar cada dirección) y sw.js (para guardarlos en el celular).
const MEDIA_R2 = "https://pub-409d7f74e7f14381a345a990008210f9.r2.dev/";
const MEDIA_URL = /github\.io$/.test(self.location.hostname) ? MEDIA_R2 : "";

// "images/temas/…/x.jpg" → dirección completa. Lo de images/app y la bandera de entrada se quedan en la app.
function mediaUrl(path) {
  if (!path || !MEDIA_URL || /^(https?:|data:|blob:)/.test(path) || path.startsWith("images/app/")) return path;
  return MEDIA_URL + path;
}
