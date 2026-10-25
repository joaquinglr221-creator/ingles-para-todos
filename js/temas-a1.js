// Temas del nivel A1 (docs/plan-de-estudios.md). Los que todavía no tienen contenido solo llevan título.
// Partes de cada tema: explicación (español e inglés), vocabulario, ejemplos, listening, lectura,
// escritura y examen final. "imagen" es la idea de qué mostrar en la imagen de Canva
// (scripts/listas_imagenes.py). En las preguntas de opción múltiple la primera opción es la correcta.
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
      { "en": "Hello", "es": "Hola", "imagen": "Una persona sonriendo y saludando con la mano" },
      { "en": "Hi", "es": "Hola (informal)", "imagen": "Dos amigos jóvenes saludándose con la mano de forma casual" },
      { "en": "Good morning", "es": "Buenos días", "imagen": "Persona estirándose junto a una ventana con el sol saliendo" },
      { "en": "Good afternoon", "es": "Buenas tardes", "imagen": "Dos vecinos saludándose en la calle a media tarde" },
      { "en": "Good evening", "es": "Buenas noches (al llegar)", "imagen": "Persona llegando a una cena por la noche y saludando" },
      { "en": "Good night", "es": "Buenas noches (al despedirse)", "imagen": "Niño en la cama despidiéndose antes de dormir, luna en la ventana" },
      { "en": "Goodbye", "es": "Adiós", "imagen": "Persona en la puerta diciendo adiós con la mano" },
      { "en": "See you later", "es": "Hasta luego", "imagen": "Dos compañeros despidiéndose al salir del trabajo" },
      { "en": "How are you?", "es": "¿Cómo estás?", "imagen": "Dos amigos encontrándose en la calle, uno pregunta con gesto amable" },
      { "en": "I'm fine, thank you", "es": "Estoy bien, gracias", "imagen": "Persona sonriente con el pulgar arriba" },
      { "en": "My name is…", "es": "Me llamo…", "imagen": "Persona con un gafete de nombre, presentándose" },
      { "en": "Nice to meet you", "es": "Mucho gusto", "imagen": "Dos personas dándose la mano al conocerse" },
      { "en": "This is my friend", "es": "Te presento a mi amigo / amiga", "imagen": "Persona presentando a su amigo a otra persona" },
      { "en": "Where are you from?", "es": "¿De dónde eres?", "imagen": "Personas de distintos países junto a un globo terráqueo o mapa" },
      { "en": "I'm from Mexico", "es": "Soy de México", "imagen": "Persona sonriendo junto a la bandera de México" },
      { "en": "years old", "es": "años (de edad)", "imagen": "Pastel de cumpleaños con velas de números" }
    ],
    "ejemplos": [
      { "en": "Hi! I'm Sofia.", "es": "¡Hola! Soy Sofía.", "imagen": "Mujer joven saludando y presentándose" },
      { "en": "I'm from Mexico.", "es": "Soy de México.", "imagen": "Persona señalando México en un mapa" },
      { "en": "You're very kind.", "es": "Eres muy amable.", "imagen": "Persona ayudando a otra a cargar bolsas, ambas sonriendo" },
      { "en": "He's a doctor.", "es": "Él es doctor.", "imagen": "Hombre con bata blanca y estetoscopio" },
      { "en": "She's my sister.", "es": "Ella es mi hermana.", "imagen": "Dos hermanas abrazadas" },
      { "en": "It's a nice day.", "es": "Es un día bonito.", "imagen": "Parque soleado con cielo azul" },
      { "en": "We're students.", "es": "Somos estudiantes.", "imagen": "Grupo de estudiantes con mochilas y libros" },
      { "en": "They're from Canada.", "es": "Son de Canadá.", "imagen": "Pareja de turistas con la bandera de Canadá" },
      { "en": "I'm thirty years old.", "es": "Tengo treinta años.", "imagen": "Persona adulta frente a un pastel con velas del número 30" },
      { "en": "We're tired today.", "es": "Hoy estamos cansados.", "imagen": "Dos personas cansadas bostezando en un sofá" }
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
  {
    "id": "a1-02",
    "num": 2,
    "titulo": "Verbo to be: negativo y preguntas",
    "contexto": "Datos personales (nombre, edad, país)",
    "explicacion": {
      "es": [
        "Para hacer una oración **negativa** se agrega **not** después de *am, is, are*: *I am not tired* (no estoy cansado), *She is not from Spain* (ella no es de España).",
        "Al hablar se usan las contracciones: **I'm not**, **isn't** (is not) y **aren't** (are not).",
        "Para hacer una **pregunta** se cambia el orden: el verbo va **antes** del sujeto. *You are from Peru* → **Are you** from Peru?",
        "Las **respuestas cortas** solo llevan el sujeto y el verbo: *Yes, I am.* / *No, I'm not.*"
      ],
      "tabla": {
        "columnas": [
          "Afirmativo",
          "Negativo",
          "Pregunta",
          "Respuesta corta"
        ],
        "filas": [
          [
            "I am",
            "I'm not",
            "Am I…?",
            "Yes, I am. / No, I'm not."
          ],
          [
            "you are",
            "you aren't",
            "Are you…?",
            "Yes, you are. / No, you aren't."
          ],
          [
            "he is",
            "he isn't",
            "Is he…?",
            "Yes, he is. / No, he isn't."
          ],
          [
            "she is",
            "she isn't",
            "Is she…?",
            "Yes, she is. / No, she isn't."
          ],
          [
            "it is",
            "it isn't",
            "Is it…?",
            "Yes, it is. / No, it isn't."
          ],
          [
            "we are",
            "we aren't",
            "Are we…?",
            "Yes, we are. / No, we aren't."
          ],
          [
            "they are",
            "they aren't",
            "Are they…?",
            "Yes, they are. / No, they aren't."
          ]
        ]
      },
      "ojo": [
        "Con el verbo *to be* **no** se usa *do*: **Are you** a student? (no *Do you are a student?*).",
        "En la respuesta corta afirmativa **no** hay contracción: *Yes, she is* (no *Yes, she's*).",
        "La edad se pregunta con **How old**: *How old are you?* — *I'm 25.* (no *How many years do you have?*).",
        "*I am not* se contrae solo como **I'm not** (no existe *I amn't*)."
      ],
      "en": [
        "To make the verb **to be** negative, add **not**: I am not, he is not, they are not.",
        "Short forms: **I'm not**, **isn't** and **aren't**.",
        "To make a question, put the verb before the subject: **Are you** happy? **Is she** a nurse?",
        "Short answers: Yes, I am. No, I'm not. Yes, she is. No, she isn't."
      ]
    },
    "vocabulario": [
      {
        "en": "What's your name?",
        "es": "¿Cómo te llamas?",
        "imagen": "Persona llenando un formulario en una oficina mientras otra le pregunta amablemente"
      },
      {
        "en": "first name",
        "es": "nombre (de pila)",
        "imagen": "Gafete de identificación con la foto de una persona sonriente"
      },
      {
        "en": "last name",
        "es": "apellido",
        "imagen": "Familia de tres generaciones posando junta para una foto"
      },
      {
        "en": "How old are you?",
        "es": "¿Cuántos años tienes?",
        "imagen": "Niño mostrando con los dedos cuántos años tiene"
      },
      {
        "en": "age",
        "es": "edad",
        "imagen": "Tres personas de distintas edades juntas: un niño, un adulto y un anciano"
      },
      {
        "en": "country",
        "es": "país",
        "imagen": "Globo terráqueo sobre un escritorio"
      },
      {
        "en": "nationality",
        "es": "nacionalidad",
        "imagen": "Pasaporte junto a varias banderas pequeñas de distintos países"
      },
      {
        "en": "phone number",
        "es": "número de teléfono",
        "imagen": "Persona dictando su número mientras otra lo guarda en su celular"
      },
      {
        "en": "email address",
        "es": "correo electrónico",
        "imagen": "Persona escribiendo en una laptop con un sobre de correo flotando en la pantalla"
      },
      {
        "en": "address",
        "es": "dirección (domicilio)",
        "imagen": "Fachada de una casa con buzón junto a la puerta"
      },
      {
        "en": "married",
        "es": "casado / casada",
        "imagen": "Pareja de recién casados mostrando sus anillos"
      },
      {
        "en": "single",
        "es": "soltero / soltera",
        "imagen": "Persona joven sola y feliz tomando café en una cafetería"
      },
      {
        "en": "job",
        "es": "trabajo, empleo",
        "imagen": "Varias personas con uniformes de distintos trabajos"
      },
      {
        "en": "Are you…?",
        "es": "¿Eres…? / ¿Estás…?",
        "imagen": "Persona con cara de duda haciendo una pregunta"
      },
      {
        "en": "Yes, I am.",
        "es": "Sí (lo soy / lo estoy).",
        "imagen": "Persona asintiendo con la cabeza y sonriendo"
      },
      {
        "en": "No, I'm not.",
        "es": "No (no lo soy / no lo estoy).",
        "imagen": "Persona negando con la cabeza y con la mano"
      }
    ],
    "ejemplos": [
      {
        "en": "I'm not from Spain. I'm from Chile.",
        "es": "No soy de España. Soy de Chile.",
        "imagen": "Persona sonriente sosteniendo la bandera de Chile"
      },
      {
        "en": "She isn't married. She's single.",
        "es": "Ella no está casada. Es soltera.",
        "imagen": "Mujer joven feliz caminando sola por la ciudad"
      },
      {
        "en": "They aren't brothers. They're friends.",
        "es": "No son hermanos. Son amigos.",
        "imagen": "Dos amigos de aspecto muy distinto riendo juntos"
      },
      {
        "en": "Are you a student? Yes, I am.",
        "es": "¿Eres estudiante? Sí.",
        "imagen": "Estudiante con mochila respondiendo con una sonrisa"
      },
      {
        "en": "Is he your teacher? No, he isn't.",
        "es": "¿Él es tu maestro? No.",
        "imagen": "Hombre joven junto a un pizarrón en un salón de clases"
      },
      {
        "en": "How old are you? I'm eighteen.",
        "es": "¿Cuántos años tienes? Tengo dieciocho.",
        "imagen": "Joven sonriendo frente a un pastel de cumpleaños"
      },
      {
        "en": "What's your phone number?",
        "es": "¿Cuál es tu número de teléfono?",
        "imagen": "Dos personas intercambiando números con sus celulares"
      },
      {
        "en": "Where are you from? I'm from Japan.",
        "es": "¿De dónde eres? Soy de Japón.",
        "imagen": "Persona sonriendo frente al monte Fuji"
      },
      {
        "en": "It isn't cold today.",
        "es": "Hoy no hace frío.",
        "imagen": "Personas en manga corta paseando por un parque soleado"
      },
      {
        "en": "We aren't late.",
        "es": "No llegamos tarde.",
        "imagen": "Dos personas llegando a tiempo y mirando el reloj tranquilas"
      }
    ],
    "listening": [
      {
        "audio": "Are you from Brazil? No, I'm not. I'm from Portugal.",
        "pregunta": "¿De dónde es la persona que responde?",
        "opciones": [
          "De Portugal",
          "De Brasil",
          "De España",
          "De Argentina"
        ]
      },
      {
        "audio": "My sister isn't a teacher. She's a nurse.",
        "pregunta": "¿Cuál es el trabajo de la hermana?",
        "opciones": [
          "Es enfermera",
          "Es maestra",
          "Es doctora",
          "Es estudiante"
        ]
      },
      {
        "audio": "Is Peter married? Yes, he is. His wife is from Italy.",
        "pregunta": "¿Peter está casado?",
        "opciones": [
          "Sí, y su esposa es de Italia",
          "No, es soltero",
          "Sí, y su esposa es de India",
          "No, pero tiene novia"
        ]
      },
      {
        "audio": "How old is your son? He's seven.",
        "pregunta": "¿Cuántos años tiene el hijo?",
        "opciones": [
          "7",
          "11",
          "17",
          "70"
        ]
      },
      {
        "audio": "We aren't tired. We're hungry!",
        "pregunta": "¿Cómo están?",
        "opciones": [
          "Tienen hambre",
          "Están cansados",
          "Tienen frío",
          "Están aburridos"
        ]
      }
    ],
    "lectura": {
      "titulo": "A new student",
      "texto": "Hello! My name is Kenji Sato. Kenji is my first name and Sato is my last name. I'm 22 years old. I'm not from China. I'm from Japan. I'm a student at a language school in London. I'm not married. My teacher is Mrs. Brown. She's very nice. She isn't English. She's Irish!",
      "preguntas": [
        {
          "pregunta": "¿Cuál es el apellido de Kenji?",
          "opciones": [
            "Sato",
            "Kenji",
            "Brown",
            "Tanaka"
          ]
        },
        {
          "pregunta": "¿De dónde es Kenji?",
          "opciones": [
            "De Japón",
            "De China",
            "De Inglaterra",
            "De Irlanda"
          ]
        },
        {
          "pregunta": "¿Kenji está casado?",
          "opciones": [
            "No, no está casado",
            "Sí, está casado",
            "Sí, y tiene dos hijos",
            "El texto no lo dice"
          ]
        },
        {
          "pregunta": "¿De dónde es la maestra?",
          "opciones": [
            "De Irlanda",
            "De Inglaterra",
            "De Japón",
            "De Escocia"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Escribe la oración en negativo.",
        "pregunta": "She is a doctor.",
        "respuestas": [
          "She isn't a doctor",
          "She is not a doctor",
          "She's not a doctor"
        ]
      },
      {
        "instruccion": "Escribe la oración en negativo.",
        "pregunta": "They are from Peru.",
        "respuestas": [
          "They aren't from Peru",
          "They are not from Peru",
          "They're not from Peru"
        ]
      },
      {
        "instruccion": "Escribe la oración en negativo.",
        "pregunta": "I am tired.",
        "respuestas": [
          "I'm not tired",
          "I am not tired"
        ]
      },
      {
        "instruccion": "Convierte en pregunta.",
        "pregunta": "You are a teacher.",
        "respuestas": [
          "Are you a teacher"
        ]
      },
      {
        "instruccion": "Convierte en pregunta.",
        "pregunta": "He is from Canada.",
        "respuestas": [
          "Is he from Canada"
        ]
      },
      {
        "instruccion": "Convierte en pregunta.",
        "pregunta": "It is cold.",
        "respuestas": [
          "Is it cold"
        ]
      },
      {
        "instruccion": "Completa la respuesta corta.",
        "pregunta": "Are you married? — No, ___.",
        "respuestas": [
          "I'm not",
          "I am not"
        ]
      },
      {
        "instruccion": "Completa la respuesta corta.",
        "pregunta": "Is she your sister? — Yes, ___.",
        "respuestas": [
          "she is"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Cuántos años tienes?",
        "respuestas": [
          "How old are you"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "No somos de aquí.",
        "respuestas": [
          "We aren't from here",
          "We are not from here",
          "We're not from here"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "She ___ from Spain. She's from Mexico.",
        "opciones": [
          "isn't",
          "aren't",
          "not",
          "don't"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ you a student?",
        "opciones": [
          "Are",
          "Is",
          "Do",
          "Am"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Is he your brother? — No, he ___.",
        "opciones": [
          "isn't",
          "aren't",
          "not",
          "doesn't"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Are they at home? — Yes, they ___.",
        "opciones": [
          "are",
          "is",
          "'re",
          "do"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cómo preguntas la edad de alguien?",
        "opciones": [
          "How old are you?",
          "How many years do you have?",
          "What age you have?",
          "How years are you?"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I ___ hungry. I'm fine, thanks.",
        "opciones": [
          "'m not",
          "isn't",
          "aren't",
          "not"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Is Anna from Germany? No, she isn't. She's from Austria.",
        "pregunta": "¿De dónde es Anna?",
        "opciones": [
          "De Austria",
          "De Alemania",
          "De Australia",
          "De Suiza"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Are you married? No, I'm not. I'm single.",
        "pregunta": "¿La persona que responde está casada?",
        "opciones": [
          "No, es soltera",
          "Sí, está casada",
          "Está divorciada",
          "No lo dice"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Completa en negativo: We ___ from Canada.",
        "respuestas": [
          "aren't",
          "are not"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¿Eres de México?",
        "respuestas": [
          "Are you from Mexico"
        ]
      }
    ]
  },
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
