// Temas del nivel A1 (docs/plan-de-estudios.md). Los que todavía no tienen contenido solo llevan título.
// Partes de cada tema: explicación (español e inglés), vocabulario, ejemplos, listening, lectura,
// escritura y examen final. En las preguntas de opción múltiple la primera opción es la correcta.
// En escritura y en el examen, "respuestas" son todas las formas aceptadas (sin importar mayúsculas ni puntuación).
// Después del "=" el contenido debe ser JSON válido: scripts/generar_audios.py lo lee para grabar los audios.
const TEMAS_A1 = [
  {
    "id": "a1-01",
    "num": 1,
    "titulo": "Verbo to be: afirmativo",
    "contexto": "Saludos y presentaciones",
    "explicacion": {
      "es": [
        "El verbo **to be** significa **ser** o **estar**. En inglés es un solo verbo para las dos ideas: *I am a teacher* (soy maestro) y *I am tired* (estoy cansado).",
        "Tiene tres formas en presente: **am** (solo con *I*), **is** (con *he, she, it*) y **are** (con *you, we, they*).",
        "Al hablar casi siempre se usan las **contracciones**: *I'm, you're, he's, she's, it's, we're, they're*.",
        "Lo usamos para decir nuestro nombre, de dónde somos, nuestra edad, nuestro trabajo y cómo nos sentimos."
      ],
      "tabla": {
        "columnas": ["Sujeto", "Forma completa", "Contracción", "Ejemplo"],
        "filas": [
          ["I (yo)", "I am", "I'm", "I'm Sofia."],
          ["you (tú / usted)", "you are", "you're", "You're my friend."],
          ["he (él)", "he is", "he's", "He's from Peru."],
          ["she (ella)", "she is", "she's", "She's a doctor."],
          ["it (eso, cosa o animal)", "it is", "it's", "It's a nice day."],
          ["we (nosotros)", "we are", "we're", "We're students."],
          ["you (ustedes)", "you are", "you're", "You're welcome here."],
          ["they (ellos / ellas)", "they are", "they're", "They're my parents."]
        ]
      },
      "ojo": [
        "En inglés **siempre** se dice el sujeto: *Es doctora* = **She's** a doctor (no *Is a doctor*).",
        "La edad se dice con *to be*, no con *have*: *Tengo 25 años* = **I'm 25** o **I'm 25 years old** (no *I have 25 years*).",
        "Con las profesiones se usa **a** o **an**: *Soy enfermera* = I'm **a** nurse."
      ],
      "en": [
        "The verb **to be** has three forms in the present: **am**, **is** and **are**.",
        "I **am**. He, she, it **is**. You, we, they **are**.",
        "We use it to say our name, where we are from, our age, our job and how we feel.",
        "In conversation we usually use short forms: *I'm, you're, he's, she's, it's, we're, they're*."
      ]
    },
    "vocabulario": [
      { "en": "Hello", "es": "Hola" },
      { "en": "Hi", "es": "Hola (informal)" },
      { "en": "Good morning", "es": "Buenos días" },
      { "en": "Good afternoon", "es": "Buenas tardes" },
      { "en": "Good evening", "es": "Buenas noches (al llegar)" },
      { "en": "Good night", "es": "Buenas noches (al despedirse)" },
      { "en": "Goodbye", "es": "Adiós" },
      { "en": "See you later", "es": "Hasta luego" },
      { "en": "How are you?", "es": "¿Cómo estás?" },
      { "en": "I'm fine, thank you", "es": "Estoy bien, gracias" },
      { "en": "My name is…", "es": "Me llamo…" },
      { "en": "Nice to meet you", "es": "Mucho gusto" },
      { "en": "This is my friend", "es": "Te presento a mi amigo / amiga" },
      { "en": "Where are you from?", "es": "¿De dónde eres?" },
      { "en": "I'm from Mexico", "es": "Soy de México" },
      { "en": "years old", "es": "años (de edad)" }
    ],
    "ejemplos": [
      { "en": "Hi! I'm Sofia.", "es": "¡Hola! Soy Sofía." },
      { "en": "I'm from Mexico.", "es": "Soy de México." },
      { "en": "You're very kind.", "es": "Eres muy amable." },
      { "en": "He's a doctor.", "es": "Él es doctor." },
      { "en": "She's my sister.", "es": "Ella es mi hermana." },
      { "en": "It's a nice day.", "es": "Es un día bonito." },
      { "en": "We're students.", "es": "Somos estudiantes." },
      { "en": "They're from Canada.", "es": "Son de Canadá." },
      { "en": "I'm thirty years old.", "es": "Tengo treinta años." },
      { "en": "We're tired today.", "es": "Hoy estamos cansados." }
    ],
    "listening": [
      {
        "audio": "Hi, I'm Tom. I'm from Australia.",
        "pregunta": "¿De dónde es Tom?",
        "opciones": ["De Australia", "De Austria", "De Argentina", "De Inglaterra"]
      },
      {
        "audio": "This is Maria. She's my teacher.",
        "pregunta": "¿Quién es Maria?",
        "opciones": ["La maestra de quien habla", "Su hermana", "Una estudiante", "Su doctora"]
      },
      {
        "audio": "My name is Ken. I'm twenty-five years old.",
        "pregunta": "¿Cuántos años tiene Ken?",
        "opciones": ["25", "35", "20", "52"]
      },
      {
        "audio": "Good evening! We're the Smiths. We're your new neighbors.",
        "pregunta": "¿Quiénes son los Smith?",
        "opciones": ["Los nuevos vecinos", "Los nuevos maestros", "Unos doctores", "Unos turistas"]
      },
      {
        "audio": "They're my friends, Ana and Luis. They're very nice.",
        "pregunta": "¿Cómo son Ana y Luis?",
        "opciones": ["Muy simpáticos", "Muy altos", "Muy jóvenes", "Muy serios"]
      }
    ],
    "lectura": {
      "titulo": "My new life",
      "texto": "Hello! My name is Daniel. I'm 28 years old and I'm from Colombia. I'm a nurse. This is my wife, Julia. She's from Brazil. She's a teacher. We're in Toronto now. It's a big city and we're very happy here.",
      "preguntas": [
        { "pregunta": "¿De dónde es Daniel?", "opciones": ["De Colombia", "De Brasil", "De Canadá", "De México"] },
        { "pregunta": "¿Cuál es el trabajo de Julia?", "opciones": ["Es maestra", "Es enfermera", "Es doctora", "Es estudiante"] },
        { "pregunta": "¿Cuántos años tiene Daniel?", "opciones": ["28", "18", "38", "82"] },
        { "pregunta": "¿Cómo se sienten en Toronto?", "opciones": ["Muy felices", "Cansados", "Tristes", "Preocupados"] }
      ]
    },
    "escritura": [
      { "instruccion": "Completa con am, is o are.", "pregunta": "I ___ from Peru.", "respuestas": ["am", "'m"] },
      { "instruccion": "Completa con am, is o are.", "pregunta": "She ___ a doctor.", "respuestas": ["is", "'s"] },
      { "instruccion": "Completa con am, is o are.", "pregunta": "They ___ my friends.", "respuestas": ["are", "'re"] },
      { "instruccion": "Escribe la contracción.", "pregunta": "we are", "respuestas": ["we're"] },
      { "instruccion": "Escribe la contracción.", "pregunta": "he is", "respuestas": ["he's"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "Soy estudiante.", "respuestas": ["I'm a student", "I am a student"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "Él es de Canadá.", "respuestas": ["He's from Canada", "He is from Canada"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "Mucho gusto.", "respuestas": ["Nice to meet you", "Pleased to meet you"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "Hola, me llamo Ana.", "respuestas": ["Hi my name is Ana", "Hello my name is Ana", "Hi I'm Ana", "Hello I'm Ana", "Hi I am Ana", "Hello I am Ana"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "Tengo veinte años.", "respuestas": ["I'm twenty", "I am twenty", "I'm twenty years old", "I am twenty years old", "I'm 20", "I am 20", "I'm 20 years old", "I am 20 years old"] }
    ],
    "examen": [
      { "tipo": "opcion", "pregunta": "I ___ happy today.", "opciones": ["am", "is", "are", "be"] },
      { "tipo": "opcion", "pregunta": "My parents ___ from Chile.", "opciones": ["are", "is", "am", "be"] },
      { "tipo": "opcion", "pregunta": "Hi, ___ Paula. Nice to meet you.", "opciones": ["I'm", "I", "Me", "My"] },
      { "tipo": "opcion", "pregunta": "It ___ a beautiful day.", "opciones": ["is", "are", "am", "be"] },
      { "tipo": "opcion", "pregunta": "¿Cómo se dice «Tengo 20 años»?", "opciones": ["I'm 20 years old.", "I have 20 years old.", "I have 20 years.", "Me 20 years old."] },
      { "tipo": "opcion", "pregunta": "Alguien te dice «Nice to meet you». ¿Qué respondes?", "opciones": ["Nice to meet you too.", "Good night.", "I'm fine.", "Goodbye."] },
      {
        "tipo": "listening",
        "audio": "Good morning! I'm Mr. Brown, your English teacher.",
        "pregunta": "¿Quién habla?",
        "opciones": ["El maestro de inglés", "Un estudiante", "Un doctor", "Un vecino"]
      },
      {
        "tipo": "listening",
        "audio": "We're from Japan, but we're in Mexico on vacation.",
        "pregunta": "¿De dónde son?",
        "opciones": ["De Japón", "De México", "De China", "De Canadá"]
      },
      { "tipo": "escribir", "pregunta": "Completa: You ___ my best friend.", "respuestas": ["are", "'re"] },
      { "tipo": "escribir", "pregunta": "Traduce: Ella es maestra.", "respuestas": ["She's a teacher", "She is a teacher"] }
    ]
  },
  { "id": "a1-02", "num": 2, "titulo": "Verbo to be: negativo y preguntas", "contexto": "Datos personales (nombre, edad, país)" },
  { "id": "a1-03", "num": 3, "titulo": "Pronombres personales (sujeto)", "contexto": "Personas a mi alrededor" },
  { "id": "a1-04", "num": 4, "titulo": "Artículos a / an / the", "contexto": "Objetos de la casa y del salón de clases" },
  { "id": "a1-05", "num": 5, "titulo": "Plurales regulares e irregulares", "contexto": "Cosas que tengo" },
  { "id": "a1-06", "num": 6, "titulo": "Demostrativos this / that / these / those", "contexto": "De compras: ¿qué es esto?" },
  { "id": "a1-07", "num": 7, "titulo": "Adjetivos posesivos y posesivo 's", "contexto": "La familia" },
  { "id": "a1-08", "num": 8, "titulo": "Have / have got", "contexto": "Mis pertenencias y mascotas" },
  { "id": "a1-09", "num": 9, "titulo": "Adjetivos (lugar en la oración)", "contexto": "Describir personas y cosas" },
  { "id": "a1-10", "num": 10, "titulo": "There is / there are", "contexto": "Mi casa y mi barrio" },
  { "id": "a1-11", "num": 11, "titulo": "Preposiciones de lugar", "contexto": "¿Dónde está?" },
  { "id": "a1-12", "num": 12, "titulo": "Números, la hora y las fechas", "contexto": "Horarios, cumpleaños y calendario" },
  { "id": "a1-13", "num": 13, "titulo": "Preposiciones de tiempo (in, on, at)", "contexto": "Citas y fechas importantes" },
  { "id": "a1-14", "num": 14, "titulo": "Presente simple: afirmativo", "contexto": "La rutina diaria" },
  { "id": "a1-15", "num": 15, "titulo": "Presente simple: negativo y preguntas", "contexto": "Trabajos y estudios" },
  { "id": "a1-16", "num": 16, "titulo": "Adverbios de frecuencia", "contexto": "Hábitos y tiempo libre" },
  { "id": "a1-17", "num": 17, "titulo": "Preguntas con Wh-", "contexto": "Conocer a alguien" },
  { "id": "a1-18", "num": 18, "titulo": "Pronombres de objeto (me, him, them…)", "contexto": "Amigos y familia" },
  { "id": "a1-19", "num": 19, "titulo": "Can / can't", "contexto": "Habilidades y deportes" },
  { "id": "a1-20", "num": 20, "titulo": "Imperativo", "contexto": "Instrucciones, recetas y señales" },
  { "id": "a1-21", "num": 21, "titulo": "Presente continuo", "contexto": "¿Qué está pasando ahora? La ropa y el clima" },
  { "id": "a1-22", "num": 22, "titulo": "Contables e incontables; some / any", "contexto": "Comida y bebida" },
  { "id": "a1-23", "num": 23, "titulo": "Like / love / hate + -ing; would like", "contexto": "Gustos, preferencias y pedir en un restaurante" },
  { "id": "a1-24", "num": 24, "titulo": "Was / were y conectores and, but, or, because", "contexto": "Ayer, la semana pasada y mi infancia" }
];
