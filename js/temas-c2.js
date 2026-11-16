// Temas del nivel C2 (docs/plan-de-estudios.md). Los que todavía no tienen contenido solo llevan título.
// Partes de cada tema: explicación (español e inglés), vocabulario, ejemplos, listening, lectura,
// escritura y examen final. "grupos" (opcional) es vocabulario extra por temas, cada uno con su patrón de uso
// "frases" (opcional) son oraciones largas para practicar la pronunciación; "acepta" son otras formas
// válidas de decir una palabra al practicar la pronunciación (p. ej. "20" para twenty).
// "explicacion.video" (opcional) es un video con la explicación narrada (scripts/generar_video_explicacion.py).
// "ejemplo" (opcional) es una oración con la palabra: [inglés, español].
// "imagen" es la idea de qué mostrar en la imagen de Canva
// (scripts/listas_imagenes.py). En las preguntas de opción múltiple la primera opción es la correcta.
// En escritura y en el examen, "respuestas" son todas las formas aceptadas (sin importar mayúsculas ni puntuación).
// Después del "=" el contenido debe ser JSON válido: scripts/generar_audios.py lo lee para grabar los audios.
const TEMAS_C2 = [
  { "id": "c2-01", "num": 1, "titulo": "Matices de los tiempos verbales (presente histórico, pasado de cortesía)", "contexto": "Narrativa y cortesía" },
  { "id": "c2-02", "num": 2, "titulo": "Inversión y anteposición con fines de estilo", "contexto": "Literatura y discursos" },
  { "id": "c2-03", "num": 3, "titulo": "Estructuras subjuntivas y fijas (Be that as it may, Come what may)", "contexto": "Expresiones formales" },
  { "id": "c2-04", "num": 4, "titulo": "Condicionales sin if (But for…, Otherwise, Supposing, Given that)", "contexto": "Argumentación avanzada" },
  { "id": "c2-05", "num": 5, "titulo": "Modalidad compleja (may well, might as well, could hardly)", "contexto": "Probabilidad y actitud" },
  { "id": "c2-06", "num": 6, "titulo": "Construcciones impersonales y pasivas avanzadas", "contexto": "Prensa y textos científicos" },
  { "id": "c2-07", "num": 7, "titulo": "Oraciones sustantivas (whoever, whatever, the fact that…)", "contexto": "Ideas abstractas" },
  { "id": "c2-08", "num": 8, "titulo": "Elipsis avanzada", "contexto": "Conversación natural" },
  { "id": "c2-09", "num": 9, "titulo": "Formación de palabras (prefijos, sufijos, compuestos)", "contexto": "Ampliar el vocabulario" },
  { "id": "c2-10", "num": 10, "titulo": "Modismos, refranes y lenguaje figurado", "contexto": "Cultura y humor" },
  { "id": "c2-11", "num": 11, "titulo": "Registro, estilo y tono", "contexto": "Adaptar el mensaje al público" },
  { "id": "c2-12", "num": 12, "titulo": "Variedades del inglés (EE. UU., Reino Unido, Australia…)", "contexto": "Acentos y diferencias" },
  { "id": "c2-13", "num": 13, "titulo": "Recursos retóricos y persuasión", "contexto": "Debates y discursos" },
  { "id": "c2-14", "num": 14, "titulo": "Interpretación de textos literarios y periodísticos", "contexto": "Lectura crítica" }
];
