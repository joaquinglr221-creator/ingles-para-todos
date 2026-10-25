const $ = (sel, root = document) => root.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// ---------- Datos guardados en el celular de cada alumno ----------
const store = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      if (value === null) localStorage.removeItem(key);
      else localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  },
};

// ---------- Niveles (docs/plan-de-estudios.md) ----------
const NIVELES = [
  { code: "A1", nombre: "Principiante", temas: 24, desc: "Presentarte, hablar de tu familia, tu casa y tu rutina." },
  { code: "A2", nombre: "Básico", temas: 24, desc: "Contar lo que hiciste, hacer planes y comparar." },
  { code: "B1", nombre: "Intermedio", temas: 28, desc: "Experiencias, opiniones, condicionales y voz pasiva." },
  { code: "B2", nombre: "Intermedio alto", temas: 28, desc: "Argumentar, matizar y hablar con naturalidad." },
  { code: "C1", nombre: "Avanzado", temas: 20, desc: "Inglés formal, académico y profesional." },
  { code: "C2", nombre: "Dominio", temas: 14, desc: "Estilo, matices y lectura crítica." },
];

// ---------- Voz en inglés ----------
// Voces de efectos o muy robóticas que traen macOS/iOS; nunca se eligen solas.
const NOVELTY_VOICES = /^(Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Wobble|Fred|Good News|Jester|Junior|Kathy|Organ|Superstar|Ralph|Trinoids|Whisper|Zarvox|Grandma|Grandpa|Rocko|Eddy|Flo|Reed|Sandy|Shelley)\b/i;
const GOOD_VOICES = /^(Ava|Samantha|Allison|Susan|Zoe|Evan|Nathan|Tom|Joelle|Noelle|Serena|Daniel|Karen|Moira|Tessa)\b/i;

function voiceScore(v) {
  let score = 0;
  if (NOVELTY_VOICES.test(v.name)) score -= 1000;
  if (/natural|neural|online/i.test(v.name)) score += 100;
  if (/google/i.test(v.name)) score += 90;
  if (/premium/i.test(v.name)) score += 80;
  if (/enhanced|mejorada/i.test(v.name)) score += 70;
  if (GOOD_VOICES.test(v.name)) score += 50;
  if (v.lang.replace("_", "-") === "en-US") score += 10;
  return score;
}

let englishVoice = null;
function loadVoices() {
  if (!("speechSynthesis" in window)) return;
  englishVoice =
    speechSynthesis
      .getVoices()
      .filter((v) => v.lang.toLowerCase().startsWith("en"))
      .sort((a, b) => voiceScore(b) - voiceScore(a))[0] || null; // solo si falta algún audio grabado
}
if ("speechSynthesis" in window) {
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
}

// Audios pregrabados con la voz Ava (Premium); los genera scripts/generar_audios.py. La voz del
// celular solo suena si a una frase le faltara su audio grabado.
const RECORDED = typeof AUDIO_FILES !== "undefined" ? AUDIO_FILES : {};
let currentAudio = null;

// Hash FNV-1a del texto: es el nombre del archivo de audio (scripts/generar_audios.py usa esta misma función).
function audioKey(text) {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, "0");
}

function speak(text, slow = false) {
  if (currentAudio) currentAudio.pause();
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  const key = audioKey(text);
  if (RECORDED[key]) {
    currentAudio = new Audio(`audio/${RECORDED[key]}/${key}.m4a`);
    currentAudio.playbackRate = slow ? 0.7 : 1;
    // Si falla (mala señal), se reintenta la grabación antes de recurrir a la voz del celular.
    const audio = currentAudio;
    audio.play().catch(() =>
      setTimeout(() => {
        if (currentAudio !== audio) return;
        audio.load();
        audio.play().catch(() => speakWithDevice(text, slow));
      }, 400)
    );
    return;
  }
  speakWithDevice(text, slow);
}

function speakWithDevice(text, slow) {
  if (!("speechSynthesis" in window)) {
    alert("Este navegador no puede leer en voz alta.");
    return;
  }
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  if (englishVoice) u.voice = englishVoice;
  u.rate = slow ? 0.65 : 0.95;
  speechSynthesis.speak(u);
}

const speakButtons = (text) => `
  <button class="icon-btn" data-speak="${esc(text)}" aria-label="Escuchar">🔊</button>
  <button class="icon-btn" data-speak="${esc(text)}" data-slow aria-label="Escuchar despacio">🐢</button>`;

// ---------- Inicio ----------
function viewHome() {
  const res = store.get("ubicacion", null);
  const enCurso = store.get("ubicacion-en-curso", null);
  const examen = res
    ? `<div class="card tip">
        <h2>Tu nivel: ${res.nivel} · ${esc(NIVELES.find((n) => n.code === res.nivel).nombre)}</h2>
        <p class="muted">Según tu examen de ubicación del ${esc(new Date(res.fecha).toLocaleDateString("es-MX"))}.</p>
        ${TEMAS[res.nivel]?.some(tieneContenido) ? `<a class="btn full center" href="#/nivel/${res.nivel}">Ir al nivel ${res.nivel}</a>` : ""}
        <a class="btn ghost full center" href="#/ubicacion/resultado">Ver resultado</a>
      </div>`
    : `<div class="card tip">
        <h2>¿Por dónde empiezo?</h2>
        <p>Haz el examen de ubicación y la app te dirá en qué nivel empezar.</p>
        <a class="btn full center" href="#/ubicacion">${enCurso ? "Continuar el examen" : "Hacer el examen de ubicación"}</a>
      </div>`;
  const niveles = NIVELES.map((n) => {
    const listos = (TEMAS[n.code] || []).filter(tieneContenido).length;
    const inner = `
        <div class="level-code">${n.code}</div>
        <div class="grow">
          <strong>${esc(n.nombre)}</strong> <span class="muted">· ${n.temas} temas</span>
          <p class="muted">${esc(n.desc)}</p>
        </div>
        ${listos ? "" : `<span class="muted">Pronto</span>`}`;
    const cls = `level${res && res.nivel === n.code ? " mine" : ""}`;
    return listos ? `<a class="${cls}" href="#/nivel/${n.code}">${inner}</a>` : `<div class="${cls} off">${inner}</div>`;
  }).join("");
  return `
    <div class="hero">
      <h1>Inglés para todos</h1>
      <p>De principiante (A1) a dominio (C2), a tu ritmo.</p>
    </div>
    ${examen}
    <h2>Niveles</h2>
    <div class="levels">${niveles}</div>`;
}

// ---------- Examen de ubicación ----------
// Se avanza nivel por nivel; el examen termina en el primer nivel con menos de UBICACION_MINIMO aciertos.
// El avance se guarda en el celular para poder continuar si se cierra la app.
const NO_SE = "No lo sé";

function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let exam = null; // { nivel, pregunta, aciertos: [por nivel], orden: [opciones revueltas], elegida, pausa }
const saveExam = () => store.set("ubicacion-en-curso", exam);

function startExam() {
  exam = { nivel: 0, pregunta: 0, aciertos: [0], orden: null, elegida: null, pausa: false };
  saveExam();
}

function viewExamIntro() {
  return `
    <a class="back" href="#/">‹ Inicio</a>
    <h1>Examen de ubicación</h1>
    <div class="card">
      <p>Empiezas con preguntas fáciles (nivel A1) y, si respondes bien, subes de nivel.</p>
      <p>Cada nivel tiene <strong>10 preguntas</strong>: gramática, vocabulario, una lectura y un audio para escuchar.
      Necesitas <strong>${UBICACION_MINIMO} aciertos</strong> para pasar al siguiente nivel.</p>
      <p>Si no sabes una respuesta, elige <em>${NO_SE}</em>: adivinar haría que empieces en un nivel muy difícil.</p>
      <p class="muted">Duración: de 5 a 25 minutos, según tu nivel. Ten a la mano audífonos o sube el volumen.</p>
    </div>
    <button class="btn full" data-action="start-exam">Empezar</button>`;
}

function viewQuestion() {
  const nivel = UBICACION[exam.nivel];
  const q = nivel.preguntas[exam.pregunta];
  if (!exam.orden) {
    exam.orden = shuffle(q.opciones);
    saveExam();
  }
  const done = exam.nivel * 10 + exam.pregunta;
  const total = UBICACION.length * 10;
  const pregunta = esc(q.pregunta).replace("___", '<span class="blank">&nbsp;</span>');
  const extra =
    q.tipo === "lectura"
      ? `<div class="card"><span class="tag">Lee el texto</span><p class="reading" style="margin-top:8px">${esc(q.texto)}</p></div>`
      : q.tipo === "listening"
        ? `<div class="card"><span class="tag">Escucha el audio</span>
            <div class="row">${speakButtons(q.audio)}<span class="muted">Puedes escucharlo las veces que quieras.</span></div></div>`
        : `<p class="muted">Elige la opción que completa la oración.</p>`;
  const opciones = [...exam.orden, NO_SE]
    .map(
      (o) =>
        `<button class="option${o === NO_SE ? " unknown" : ""}${exam.elegida === o ? " selected" : ""}" data-option="${esc(o)}">${esc(o)}</button>`
    )
    .join("");
  return `
    <div class="row between">
      <a class="back" href="#/">‹ Salir</a>
      <span class="tag">Nivel ${nivel.nivel} · ${exam.pregunta + 1} de 10</span>
    </div>
    <div class="progress"><div style="width:${(done / total) * 100}%"></div></div>
    ${extra}
    <p class="question">${pregunta}</p>
    <div class="options">${opciones}</div>
    <button class="btn full" data-action="next" ${exam.elegida ? "" : "disabled"}>Siguiente</button>`;
}

// Pantalla entre niveles: el alumno aprobó y pasa al siguiente.
function viewLevelPassed() {
  const prev = UBICACION[exam.nivel - 1];
  const next = UBICACION[exam.nivel];
  return `
    <div class="hero">
      <h1>¡Muy bien!</h1>
      <p>Nivel ${prev.nivel}: ${exam.aciertos[exam.nivel - 1]} de 10 aciertos.</p>
    </div>
    <div class="card">
      <p>Sigue el nivel <strong>${next.nivel} · ${esc(next.nombre)}</strong>. Las preguntas serán un poco más difíciles.</p>
    </div>
    <button class="btn full" data-action="continue">Continuar</button>
    <button class="btn ghost full" data-action="finish">Terminar aquí</button>`;
}

function answer() {
  const q = UBICACION[exam.nivel].preguntas[exam.pregunta];
  if (exam.elegida === q.opciones[0]) exam.aciertos[exam.nivel]++;
  exam.elegida = null;
  exam.orden = null;
  exam.pregunta++;
  if (exam.pregunta < 10) return saveExam();
  const aprobado = exam.aciertos[exam.nivel] >= UBICACION_MINIMO;
  if (aprobado && exam.nivel < UBICACION.length - 1) {
    exam.nivel++;
    exam.pregunta = 0;
    exam.aciertos.push(0);
    exam.pausa = true;
    return saveExam();
  }
  finishExam();
}

// Nivel recomendado: el primero que no aprobó; si aprobó todos, C2. Si termina en la pausa entre
// niveles, el nivel siguiente (sin preguntas respondidas) cuenta como no aprobado.
function finishExam() {
  const fallado = exam.aciertos.findIndex((a) => a < UBICACION_MINIMO);
  const nivel = fallado === -1 ? UBICACION.length - 1 : fallado;
  store.set("ubicacion", { fecha: new Date().toISOString(), nivel: UBICACION[nivel].nivel, aciertos: exam.aciertos.slice(0, exam.pausa ? -1 : undefined) });
  store.set("ubicacion-en-curso", null);
  exam = null;
  location.hash = "#/ubicacion/resultado";
}

function viewResult() {
  const res = store.get("ubicacion", null);
  if (!res) return viewExamIntro();
  const n = NIVELES.find((x) => x.code === res.nivel);
  const filas = res.aciertos
    .map((a, i) => {
      const ok = a >= UBICACION_MINIMO;
      return `<div class="score-row ${ok ? "ok" : "bad"}">
        <strong>${UBICACION[i].nivel}</strong>
        <div class="progress"><div style="width:${a * 10}%"></div></div>
        <span class="muted">${a}/10</span>
      </div>`;
    })
    .join("");
  const todos = res.aciertos.length === UBICACION.length && res.aciertos.every((a) => a >= UBICACION_MINIMO);
  return `
    <a class="back" href="#/">‹ Inicio</a>
    <div class="hero">
      <p>Tu nivel para empezar</p>
      <h1 style="font-size:2.6rem">${n.code}</h1>
      <p>${esc(n.nombre)}</p>
    </div>
    <div class="card">
      <p>${
        todos
          ? "¡Excelente! Aprobaste todos los niveles. Te recomendamos el nivel C2 para pulir los detalles."
          : `Empieza en el nivel <strong>${n.code}</strong>: ${esc(n.desc.charAt(0).toLowerCase() + n.desc.slice(1))}`
      }</p>
    </div>
    <div class="card">
      <h2>Aciertos por nivel</h2>
      <div class="scores">${filas}</div>
      <p class="muted" style="margin-top:10px">Se necesitan ${UBICACION_MINIMO} de 10 para pasar de nivel.</p>
    </div>
    <button class="btn ghost full" data-action="restart-exam">Repetir el examen</button>`;
}

function viewExam() {
  if (!exam) exam = store.get("ubicacion-en-curso", null);
  if (!exam) return viewExamIntro();
  return exam.pausa ? viewLevelPassed() : viewQuestion();
}

// ---------- Temas ----------
const TEMAS = { A1: typeof TEMAS_A1 !== "undefined" ? TEMAS_A1 : [] };
const findTema = (id) => Object.values(TEMAS).flat().find((t) => t.id === id);
const nivelDe = (tema) => Object.keys(TEMAS).find((k) => TEMAS[k].includes(tema));
const tieneContenido = (t) => !!t.explicacion;
const EXAMEN_MINIMO = 8; // aciertos (de 10) para aprobar el examen final del tema

const SECCIONES = [
  { id: "explicacion", nombre: "Explicación", icon: "📖" },
  { id: "vocabulario", nombre: "Vocabulario y ejemplos", icon: "🗣️" },
  { id: "listening", nombre: "Listening", icon: "🎧" },
  { id: "lectura", nombre: "Lectura", icon: "📄" },
  { id: "escritura", nombre: "Escritura", icon: "✍️" },
  { id: "examen", nombre: "Examen final", icon: "🏁" },
];

// Avance del alumno: { "a1-01": { explicacion: true, …, examen: 9 } }
let progreso = store.get("progreso", {});
function marcar(temaId, seccion, valor = true) {
  const p = (progreso[temaId] = progreso[temaId] || {});
  if (seccion === "examen") valor = Math.max(p.examen || 0, valor);
  else if (p[seccion]) return;
  p[seccion] = valor;
  store.set("progreso", progreso);
}
const aprobado = (temaId) => (progreso[temaId]?.examen || 0) >= EXAMEN_MINIMO;
const partesHechas = (temaId) => SECCIONES.filter((s) => (s.id === "examen" ? aprobado(temaId) : progreso[temaId]?.[s.id])).length;

// **negritas** y *cursivas* en las explicaciones; plain() es el texto que se lee en voz alta.
const md = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>");
const plain = (s) => s.replace(/\*/g, "");
// Para comparar lo que escribe el alumno: sin mayúsculas, puntuación ni espacios de más.
const normalize = (s) => s.toLowerCase().replace(/[’‘`´]/g, "'").replace(/[.,!?¡¿;:"«»]/g, "").replace(/\s+/g, " ").trim();
const esCorrecta = (texto, respuestas) => respuestas.some((r) => normalize(r) === normalize(texto));
const conHueco = (s) => esc(s).replace("___", '<span class="blank">&nbsp;</span>');

function viewLevel(code) {
  const nivel = NIVELES.find((n) => n.code === code);
  const temas = TEMAS[code] || [];
  const filas = temas
    .map((t) => {
      const listo = tieneContenido(t);
      const estado = aprobado(t.id) ? `<span class="tag ok">✓ ${progreso[t.id].examen}/10</span>` : listo ? `<span class="muted">${partesHechas(t.id)}/6</span>` : `<span class="muted">Pronto</span>`;
      const inner = `
        <div class="level-code small">${t.num}</div>
        <div class="grow"><strong>${esc(t.titulo)}</strong><p class="muted">${esc(t.contexto)}</p></div>
        ${estado}`;
      return listo ? `<a class="level" href="#/tema/${t.id}">${inner}</a>` : `<div class="level off">${inner}</div>`;
    })
    .join("");
  return `
    <a class="back" href="#/">‹ Inicio</a>
    <div class="hero"><h1>${code} · ${esc(nivel.nombre)}</h1><p>${esc(nivel.desc)}</p></div>
    <div class="levels">${filas}</div>`;
}

function viewTopic(tema) {
  const code = nivelDe(tema);
  const filas = SECCIONES.map((s) => {
    const hecho = s.id === "examen" ? aprobado(tema.id) : progreso[tema.id]?.[s.id];
    const extra = s.id === "examen" && progreso[tema.id]?.examen != null ? `<span class="muted">${progreso[tema.id].examen}/10</span>` : "";
    return `<a class="level" href="#/tema/${tema.id}/${s.id}">
      <div class="level-code small">${s.icon}</div>
      <div class="grow"><strong>${s.nombre}</strong></div>
      ${extra}<span class="check${hecho ? " on" : ""}">${hecho ? "✓" : ""}</span>
    </a>`;
  }).join("");
  const siguiente = SECCIONES.find((s) => !(s.id === "examen" ? aprobado(tema.id) : progreso[tema.id]?.[s.id]));
  return `
    <a class="back" href="#/nivel/${code}">‹ Nivel ${code}</a>
    <div class="hero">
      <p>Tema ${tema.num} · ${code}</p>
      <h1>${esc(tema.titulo)}</h1>
      <p>${esc(tema.contexto)}</p>
    </div>
    <div class="levels">${filas}</div>
    ${siguiente ? `<a class="btn full center" href="#/tema/${tema.id}/${siguiente.id}">${partesHechas(tema.id) ? "Continuar" : "Empezar"}: ${siguiente.nombre}</a>` : `<p class="center muted">¡Terminaste este tema! 🎉</p>`}`;
}

// Encabezado y botón "Siguiente" de cada parte del tema.
function sectionHeader(tema, sec) {
  const i = SECCIONES.findIndex((s) => s.id === sec);
  return `
    <div class="row between">
      <a class="back" href="#/tema/${tema.id}">‹ ${esc(tema.titulo)}</a>
      <span class="tag">${i + 1} de ${SECCIONES.length}</span>
    </div>
    <h1>${SECCIONES[i].icon} ${SECCIONES[i].nombre}</h1>`;
}
function sectionNext(tema, sec) {
  const i = SECCIONES.findIndex((s) => s.id === sec);
  const next = SECCIONES[i + 1];
  return `<a class="btn full center" href="#/tema/${tema.id}/${next.id}">Siguiente: ${next.nombre}</a>`;
}

function viewExplicacion(tema) {
  const x = tema.explicacion;
  const tabla = `<div class="table-wrap"><table>
    <thead><tr>${x.tabla.columnas.map((c) => `<th>${esc(c)}</th>`).join("")}</tr></thead>
    <tbody>${x.tabla.filas.map((f) => `<tr>${f.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
  </table></div>`;
  return `
    <div class="card prose">${x.es.map((p) => `<p>${md(p)}</p>`).join("")}</div>
    <div class="card">${tabla}</div>
    <div class="card warn"><h2>¡Ojo!</h2><ul>${x.ojo.map((p) => `<li>${md(p)}</li>`).join("")}</ul></div>
    <div class="card"><h2>In English</h2>
      ${x.en.map((p) => `<div class="line"><p class="grow">${md(p)}</p>${speakButtons(plain(p))}</div>`).join("")}
    </div>`;
}

// Imágenes de Canva (scripts/importar_imagenes_canva.py), por texto en inglés.
const FOTOS = typeof IMAGENES !== "undefined" ? IMAGENES : {};

function viewVocabulario(tema) {
  const foto = (w) => (FOTOS[w.en] ? `<img class="thumb" src="${esc(FOTOS[w.en])}" alt="" loading="lazy" data-zoom="${esc(w.en)}">` : "");
  const fila = (w) => `<div class="line">${foto(w)}<div class="grow"><p class="en">${esc(w.en)}</p><p class="es">${esc(w.es)}</p></div>${speakButtons(w.en)}</div>`;
  // Vocabulario extra por temas: cada grupo se abre y se cierra para no alargar la pantalla.
  const grupos = (tema.grupos || [])
    .map(
      (g) => `<details class="card group">
        <summary><span class="group-icon">${g.icono}</span><strong class="grow">${esc(g.titulo)}</strong><span class="muted">${g.palabras.length}</span></summary>
        <div class="pattern">${g.patron.map((p) => `<div class="line"><p class="grow en">${esc(p)}</p>${speakButtons(p)}</div>`).join("")}</div>
        ${g.palabras.map(fila).join("")}
      </details>`
    )
    .join("");
  return `
    <div class="card"><h2>Vocabulario</h2>${tema.vocabulario.map(fila).join("")}</div>
    ${grupos ? `<h2 style="margin:18px 0 10px">Más vocabulario con <em>to be</em></h2>${grupos}` : ""}
    <div class="card"><h2>Ejemplos</h2>${tema.ejemplos.map(fila).join("")}</div>`;
}

// Práctica de opción múltiple (listening y lectura): al tocar una opción se ve si es correcta.
let practica = { key: null, resp: {}, orden: {} };
function usePractica(key) {
  if (practica.key !== key) practica = { key, resp: {}, orden: {} };
  return practica;
}

function viewOpciones(tema, sec, preguntas) {
  const p = usePractica(`${tema.id}/${sec}`);
  const tarjetas = preguntas
    .map((q, i) => {
      if (!p.orden[i]) p.orden[i] = shuffle(q.opciones);
      const elegida = p.resp[i];
      const opciones = p.orden[i]
        .map((o) => {
          const cls = elegida == null ? "" : o === q.opciones[0] ? " correct" : o === elegida ? " wrong" : "";
          return `<button class="option${cls}" data-mc="${i}" data-value="${esc(o)}">${esc(o)}</button>`;
        })
        .join("");
      const feedback =
        elegida == null
          ? ""
          : `<p class="feedback ${elegida === q.opciones[0] ? "ok" : "bad"}">${elegida === q.opciones[0] ? "✓ ¡Correcto!" : `✗ La respuesta es: ${esc(q.opciones[0])}`}</p>
             ${q.audio ? `<p class="muted">Audio: “${esc(q.audio)}”</p>` : ""}`;
      return `<div class="card">
        ${q.audio ? `<div class="row" style="margin:0 0 10px">${speakButtons(q.audio)}</div>` : ""}
        <p class="question small">${i + 1}. ${esc(q.pregunta)}</p>
        <div class="options">${opciones}</div>
        ${feedback}
      </div>`;
    })
    .join("");
  const hechas = Object.keys(p.resp).length;
  let resumen = "";
  if (hechas === preguntas.length) {
    marcar(tema.id, sec);
    const bien = preguntas.filter((q, i) => p.resp[i] === q.opciones[0]).length;
    resumen = `<div class="card tip center"><p class="big">${bien} de ${preguntas.length} correctas</p>
      <button class="btn ghost full" data-action="practica-reset">Repetir</button></div>`;
  }
  return tarjetas + resumen;
}

function viewListening(tema) {
  return `<p class="muted" style="margin-bottom:12px">Escucha cada audio (🐢 para oírlo despacio) y elige la respuesta.</p>${viewOpciones(tema, "listening", tema.listening)}`;
}

function viewLectura(tema) {
  const l = tema.lectura;
  return `
    <div class="card">
      <div class="row between" style="margin:0 0 8px"><h2 style="margin:0">${esc(l.titulo)}</h2><div class="row" style="margin:0">${speakButtons(l.texto)}</div></div>
      <p class="reading">${esc(l.texto)}</p>
    </div>
    ${viewOpciones(tema, "lectura", l.preguntas)}`;
}

function viewEscritura(tema) {
  const p = usePractica(`${tema.id}/escritura`);
  const items = tema.escritura
    .map((q, i) => {
      const r = p.resp[i];
      const estado = r ? (r.ok ? "ok" : "bad") : "";
      return `<div class="card">
        <p class="muted">${i + 1}. ${esc(q.instruccion)}</p>
        <p class="question small">${conHueco(q.pregunta)}</p>
        <input class="answer ${estado}" data-w="${i}" value="${esc(r ? r.valor : "")}" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Escribe aquí">
        ${r ? `<p class="feedback ${estado}">${r.ok ? "✓ ¡Correcto!" : `✗ Respuesta: ${esc(q.respuestas[0])}`}</p>` : ""}
      </div>`;
    })
    .join("");
  const revisadas = Object.keys(p.resp).length === tema.escritura.length;
  const bien = Object.values(p.resp).filter((r) => r.ok).length;
  return `
    <p class="muted" style="margin-bottom:12px">Escribe tus respuestas y luego toca <strong>Revisar</strong>. No importan las mayúsculas ni los signos de puntuación.</p>
    ${items}
    ${revisadas ? `<div class="card tip center"><p class="big">${bien} de ${tema.escritura.length} correctas</p><p class="muted">Corrige las que fallaste y vuelve a revisar.</p></div>` : ""}
    <button class="btn full" data-action="check-writing">Revisar</button>`;
}

function checkWriting(tema) {
  const p = usePractica(`${tema.id}/escritura`);
  document.querySelectorAll("[data-w]").forEach((input) => {
    const i = Number(input.dataset.w);
    if (input.value.trim()) p.resp[i] = { valor: input.value, ok: esCorrecta(input.value, tema.escritura[i].respuestas) };
  });
  if (Object.keys(p.resp).length === tema.escritura.length) marcar(tema.id, "escritura");
}

// Examen final del tema: una pregunta a la vez y la calificación al final.
let examenTema = null; // { id, i, resp: [], orden, elegida, fin }

function viewExamenTema(tema) {
  const preguntas = tema.examen;
  if (!examenTema || examenTema.id !== tema.id) {
    const prev = progreso[tema.id]?.examen;
    return `
      <div class="card">
        <p>${preguntas.length} preguntas: gramática, vocabulario, listening y escritura.</p>
        <p>Necesitas <strong>${EXAMEN_MINIMO} aciertos</strong> para aprobar el tema. Al final verás tus errores.</p>
        ${prev != null ? `<p class="muted">Tu mejor calificación: ${prev}/10.</p>` : ""}
      </div>
      <button class="btn full" data-action="tex-start">${prev != null ? "Volver a presentar" : "Empezar el examen"}</button>`;
  }
  if (examenTema.fin) return viewExamenResultado(tema);
  const q = preguntas[examenTema.i];
  if (q.tipo !== "escribir" && !examenTema.orden) examenTema.orden = shuffle(q.opciones);
  const cuerpo =
    q.tipo === "escribir"
      ? `<p class="question">${conHueco(q.pregunta)}</p>
         <input class="answer" id="tex-input" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Escribe tu respuesta">`
      : `${q.audio ? `<div class="card"><span class="tag">Escucha el audio</span><div class="row">${speakButtons(q.audio)}</div></div>` : ""}
         <p class="question">${conHueco(q.pregunta)}</p>
         <div class="options">${examenTema.orden
           .map((o) => `<button class="option${examenTema.elegida === o ? " selected" : ""}" data-tex="${esc(o)}">${esc(o)}</button>`)
           .join("")}</div>`;
  return `
    <div class="row between"><span class="tag">Pregunta ${examenTema.i + 1} de ${preguntas.length}</span></div>
    <div class="progress"><div style="width:${(examenTema.i / preguntas.length) * 100}%"></div></div>
    ${cuerpo}
    <button class="btn full" data-action="tex-next" ${q.tipo === "escribir" || examenTema.elegida ? "" : "disabled"}>Siguiente</button>`;
}

function examenNext(tema) {
  const q = tema.examen[examenTema.i];
  const valor = q.tipo === "escribir" ? $("#tex-input").value : examenTema.elegida;
  if (!valor || !valor.trim()) return;
  examenTema.resp.push(valor);
  examenTema.elegida = null;
  examenTema.orden = null;
  examenTema.i++;
  if (examenTema.i === tema.examen.length) {
    examenTema.fin = true;
    marcar(tema.id, "examen", tema.examen.filter((q, i) => examenCorrecta(q, examenTema.resp[i])).length);
  }
}
const examenCorrecta = (q, valor) => (q.tipo === "escribir" ? esCorrecta(valor, q.respuestas) : valor === q.opciones[0]);

function viewExamenResultado(tema) {
  const bien = tema.examen.filter((q, i) => examenCorrecta(q, examenTema.resp[i])).length;
  const ok = bien >= EXAMEN_MINIMO;
  const errores = tema.examen
    .map((q, i) => ({ q, r: examenTema.resp[i] }))
    .filter(({ q, r }) => !examenCorrecta(q, r))
    .map(
      ({ q, r }) => `<div class="line"><div class="grow">
        <p>${conHueco(q.pregunta)}${q.audio ? ` <span class="muted">(audio: “${esc(q.audio)}”)</span>` : ""}</p>
        <p class="feedback bad">✗ Tu respuesta: ${esc(r)}</p>
        <p class="feedback ok">✓ Correcta: ${esc(q.tipo === "escribir" ? q.respuestas[0] : q.opciones[0])}</p>
      </div></div>`
    )
    .join("");
  const code = nivelDe(tema);
  return `
    <div class="hero">
      <p>${ok ? "¡Aprobaste el tema!" : "Todavía no apruebas"}</p>
      <h1 style="font-size:2.6rem">${bien}/10</h1>
      <p>${ok ? "Muy bien, puedes pasar al siguiente tema." : `Necesitas ${EXAMEN_MINIMO}. Repasa y vuelve a intentarlo.`}</p>
    </div>
    ${errores ? `<div class="card"><h2>Tus errores</h2>${errores}</div>` : ""}
    ${ok ? `<a class="btn full center" href="#/nivel/${code}">Volver al nivel ${code}</a>` : `<a class="btn full center" href="#/tema/${tema.id}">Repasar el tema</a>`}
    <button class="btn ghost full" data-action="tex-start">Volver a presentar</button>`;
}

function viewSection(tema, sec) {
  const body = {
    explicacion: viewExplicacion,
    vocabulario: viewVocabulario,
    listening: viewListening,
    lectura: viewLectura,
    escritura: viewEscritura,
    examen: viewExamenTema,
  }[sec];
  if (!body) return viewTopic(tema);
  if (sec === "explicacion" || sec === "vocabulario") marcar(tema.id, sec);
  return sectionHeader(tema, sec) + body(tema) + (sec === "examen" ? "" : sectionNext(tema, sec));
}

// ---------- Navegación ----------
function render() {
  const route = location.hash.replace(/^#\/?/, "");
  const [a, b, c] = route.split("/");
  const tema = a === "tema" && findTema(b);
  const html =
    route === "ubicacion"
      ? viewExam()
      : route === "ubicacion/resultado"
        ? viewResult()
        : a === "nivel" && TEMAS[b]
          ? viewLevel(b)
          : tema && tieneContenido(tema)
            ? c
              ? viewSection(tema, c)
              : viewTopic(tema)
            : viewHome();
  $("#app").innerHTML = html;
}

const temaActual = () => findTema(location.hash.replace(/^#\/?/, "").split("/")[1]);

document.addEventListener("input", (e) => {
  if (e.target.id === "tex-input") $('[data-action="tex-next"]').disabled = !e.target.value.trim();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.id === "tex-input") $('[data-action="tex-next"]').click();
});

document.addEventListener("click", (e) => {
  const speakBtn = e.target.closest("[data-speak]");
  if (speakBtn) return speak(speakBtn.dataset.speak, speakBtn.hasAttribute("data-slow"));

  // Imagen en grande: se abre al tocar la miniatura y se cierra al tocar cualquier parte.
  const zoom = e.target.closest("[data-zoom]");
  if (zoom) {
    const box = document.createElement("div");
    box.className = "zoom";
    box.innerHTML = `<img src="${esc(FOTOS[zoom.dataset.zoom])}" alt=""><p>${esc(zoom.dataset.zoom)}</p>`;
    document.body.appendChild(box);
    speak(zoom.dataset.zoom);
    return;
  }
  const abierta = e.target.closest(".zoom");
  if (abierta) return abierta.remove();

  const mc = e.target.closest("[data-mc]");
  if (mc) {
    if (practica.resp[mc.dataset.mc] == null) practica.resp[mc.dataset.mc] = mc.dataset.value;
    return render();
  }

  const tex = e.target.closest("[data-tex]");
  if (tex && examenTema) {
    examenTema.elegida = tex.dataset.tex;
    return render();
  }

  const opt = e.target.closest("[data-option]");
  if (opt && exam) {
    exam.elegida = opt.dataset.option;
    saveExam();
    return render();
  }

  const action = e.target.closest("[data-action]")?.dataset.action;
  if (!action) return;
  if (action === "start-exam") {
    startExam();
  } else if (action === "next" && exam?.elegida) {
    answer();
    window.scrollTo(0, 0);
  } else if (action === "continue") {
    exam.pausa = false;
    saveExam();
  } else if (action === "finish") {
    return finishExam();
  } else if (action === "restart-exam") {
    store.set("ubicacion", null);
    startExam();
    location.hash = "#/ubicacion";
    return;
  } else if (action === "practica-reset") {
    practica = { key: null, resp: {}, orden: {} };
  } else if (action === "check-writing") {
    checkWriting(temaActual());
  } else if (action === "tex-start") {
    examenTema = { id: temaActual().id, i: 0, resp: [], orden: null, elegida: null, fin: false };
    window.scrollTo(0, 0);
  } else if (action === "tex-next") {
    examenNext(temaActual());
    window.scrollTo(0, 0);
  }
  render();
});

window.addEventListener("hashchange", () => {
  render();
  window.scrollTo(0, 0);
});
render();

if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
