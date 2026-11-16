// Temas del nivel C1 (docs/plan-de-estudios.md). Los que todavía no tienen contenido solo llevan título.
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
const TEMAS_C1 = [
  {
    "id": "c1-01",
    "num": 1,
    "titulo": "Inversión tras adverbios negativos (Never have I…, Not only…, Hardly… when, No sooner… than)",
    "contexto": "Énfasis en relatos",
    "explicacion": {
      "es": [
        "Cuando una oración empieza con un **adverbio negativo o restrictivo**, el sujeto y el auxiliar **se invierten**, como en una pregunta. Esto da **énfasis** y suena **formal o literario**: ***Never have I seen** such a beautiful place.* (Nunca había visto un lugar tan hermoso.)",
        "Los más comunes: ***Never / Rarely / Seldom*** (nunca, rara vez), ***Not only… but also*** (no solo… sino también), ***Not until*** (no fue sino hasta), ***Under no circumstances*** (bajo ninguna circunstancia), ***Little*** (poco): ***Little did she know** that…* (Poco sabía ella que…)",
        "Para dos acciones seguidas: ***Hardly / Scarcely… when*** y ***No sooner… than*** (apenas… cuando), con **pasado perfecto**: ***No sooner had we sat down than** the phone rang.* (Apenas nos habíamos sentado cuando sonó el teléfono.)",
        "Si no hay auxiliar, se usa ***do / does / did***: ***Rarely does he** call me.* ***Only then did I** understand.* (Solo entonces entendí.) Con ***Only after / Only when*** la inversión va en la **segunda** parte."
      ],
      "tabla": {
        "columnas": [
          "Normal",
          "Con inversión"
        ],
        "filas": [
          [
            "I have never seen anything like it.",
            "Never have I seen anything like it."
          ],
          [
            "He not only lied, but he also stole.",
            "Not only did he lie, but he also stole."
          ],
          [
            "We had just arrived when it rained.",
            "Hardly had we arrived when it rained."
          ],
          [
            "She didn't know the truth.",
            "Little did she know the truth."
          ],
          [
            "You must not open this door.",
            "Under no circumstances must you open this door."
          ],
          [
            "I understood only later.",
            "Only later did I understand."
          ]
        ]
      },
      "ojo": [
        "Sin inversión es un error: *Never I have seen* ❌ → ***Never have I seen*** ✅.",
        "***Hardly*** va con ***when***; ***No sooner*** va con ***than***: *No sooner had… **than*** ✅ (no *No sooner… when* ❌).",
        "La inversión es **formal**: en conversación normal se dice *I've never seen…*; en relatos, discursos y escritura da **dramatismo**.",
        "***Not until*** + tiempo/oración, y la inversión después: ***Not until** midnight **did** they arrive.*",
        "***Only by / Only if / Only when*** también invierten: ***Only by working** together **can we** solve this.*"
      ],
      "en": [
        "After negative adverbs at the beginning, we invert the subject and the auxiliary: Never have I seen such a beautiful place.",
        "Not only did he lie, but he also stole. Little did she know the truth.",
        "No sooner had we sat down than the phone rang. Hardly had we arrived when it started to rain.",
        "Only then did I understand."
      ]
    },
    "vocabulario": [
      {
        "en": "Never have I seen",
        "es": "nunca había visto",
        "imagen": "Persona asombrada frente a una cascada enorme",
        "ejemplo": [
          "Never have I seen such a beautiful sunset.",
          "Nunca había visto un atardecer tan hermoso."
        ]
      },
      {
        "en": "Not only did he",
        "es": "no solo él",
        "imagen": "Hombre con cara culpable frente a una oficina desordenada",
        "ejemplo": [
          "Not only did he arrive late, but he also forgot the documents.",
          "No solo llegó tarde, sino que también olvidó los documentos."
        ]
      },
      {
        "en": "No sooner had we",
        "es": "apenas habíamos",
        "imagen": "Familia sentándose a cenar mientras suena el teléfono",
        "ejemplo": [
          "No sooner had we sat down than the phone rang.",
          "Apenas nos habíamos sentado cuando sonó el teléfono."
        ]
      },
      {
        "en": "Hardly had I",
        "es": "apenas había",
        "imagen": "Persona llegando y empezando a llover",
        "ejemplo": [
          "Hardly had I left the house when it started to rain.",
          "Apenas había salido de casa cuando empezó a llover."
        ]
      },
      {
        "en": "Little did she know",
        "es": "poco sabía ella",
        "imagen": "Mujer sonriendo sin saber que hay una fiesta sorpresa detrás",
        "ejemplo": [
          "Little did she know that her friends were planning a surprise.",
          "Poco sabía ella que sus amigos planeaban una sorpresa."
        ]
      },
      {
        "en": "Rarely does he",
        "es": "rara vez él",
        "imagen": "Hombre ocupado ignorando su celular",
        "ejemplo": [
          "Rarely does he answer his phone.",
          "Rara vez contesta el teléfono."
        ]
      },
      {
        "en": "Under no circumstances",
        "es": "bajo ninguna circunstancia",
        "imagen": "Puerta con un candado grande y una señal roja",
        "ejemplo": [
          "Under no circumstances should you open this door.",
          "Bajo ninguna circunstancia debe abrir esta puerta."
        ]
      },
      {
        "en": "Only then did I",
        "es": "solo entonces",
        "imagen": "Persona entendiendo algo de repente",
        "ejemplo": [
          "Only then did I realize my mistake.",
          "Solo entonces me di cuenta de mi error."
        ]
      },
      {
        "en": "Not until",
        "es": "no fue sino hasta",
        "imagen": "Reloj marcando la medianoche y una puerta abriéndose",
        "ejemplo": [
          "Not until midnight did they arrive.",
          "No fue sino hasta la medianoche que llegaron."
        ]
      },
      {
        "en": "Seldom have we",
        "es": "pocas veces hemos",
        "imagen": "Equipo celebrando un triunfo histórico",
        "ejemplo": [
          "Seldom have we had such a successful year.",
          "Pocas veces hemos tenido un año tan exitoso."
        ]
      },
      {
        "en": "Only after",
        "es": "solo después de",
        "imagen": "Estudiante recibiendo su título tras años de estudio",
        "ejemplo": [
          "Only after years of study did she become a doctor.",
          "Solo después de años de estudio se convirtió en doctora."
        ]
      },
      {
        "en": "At no time",
        "es": "en ningún momento",
        "imagen": "Persona negando con firmeza frente a un juez",
        "ejemplo": [
          "At no time did I say that.",
          "En ningún momento dije eso."
        ]
      },
      {
        "en": "Not once",
        "es": "ni una sola vez",
        "imagen": "Persona esperando junto a un teléfono que no suena",
        "ejemplo": [
          "Not once did he call me.",
          "Ni una sola vez me llamó."
        ]
      },
      {
        "en": "In no way",
        "es": "de ninguna manera",
        "imagen": "Persona levantando las manos rechazando algo",
        "ejemplo": [
          "In no way is this acceptable.",
          "De ninguna manera es esto aceptable."
        ]
      },
      {
        "en": "Only by",
        "es": "solo mediante",
        "imagen": "Equipo uniendo piezas de un rompecabezas",
        "ejemplo": [
          "Only by working together can we solve this problem.",
          "Solo trabajando juntos podemos resolver este problema."
        ]
      },
      {
        "en": "On no account",
        "es": "por ningún motivo",
        "imagen": "Señal de advertencia en un laboratorio",
        "ejemplo": [
          "On no account must you touch these chemicals.",
          "Por ningún motivo debe tocar estas sustancias."
        ]
      }
    ],
    "grupos": [
      {
        "id": "relatos",
        "titulo": "Relatos dramáticos",
        "icono": "📖",
        "patron": [
          "Little did they know…",
          "No sooner had… than…",
          "Never before had…"
        ],
        "palabras": [
          {
            "en": "Never before had",
            "es": "nunca antes había",
            "imagen": "Explorador frente a una cueva desconocida",
            "ejemplo": [
              "Never before had anyone entered that cave.",
              "Nunca antes alguien había entrado a esa cueva."
            ]
          },
          {
            "en": "Scarcely had",
            "es": "apenas había",
            "imagen": "Tren saliendo justo cuando alguien llega",
            "ejemplo": [
              "Scarcely had he reached the station when the train left.",
              "Apenas había llegado a la estación cuando salió el tren."
            ]
          },
          {
            "en": "So great was",
            "es": "tan grande era",
            "imagen": "Multitud enorme en una plaza",
            "ejemplo": [
              "So great was the crowd that we couldn't move.",
              "Tan grande era la multitud que no podíamos movernos."
            ]
          },
          {
            "en": "Such was",
            "es": "tal era",
            "imagen": "Persona temblando de miedo en una casa oscura",
            "ejemplo": [
              "Such was her fear that she couldn't speak.",
              "Tal era su miedo que no podía hablar."
            ]
          },
          {
            "en": "Little did they suspect",
            "es": "poco sospechaban",
            "imagen": "Ladrones sonriendo sin ver a la policía detrás",
            "ejemplo": [
              "Little did they suspect that the police were watching.",
              "Poco sospechaban que la policía los observaba."
            ]
          },
          {
            "en": "Nowhere else",
            "es": "en ningún otro lugar",
            "imagen": "Pueblo colonial único con calles de colores",
            "ejemplo": [
              "Nowhere else will you find such friendly people.",
              "En ningún otro lugar encontrarás gente tan amable."
            ]
          }
        ]
      },
      {
        "id": "formal",
        "titulo": "Avisos y discursos formales",
        "icono": "🎤",
        "patron": [
          "Under no circumstances…",
          "Only if…",
          "Not only… but also…"
        ],
        "palabras": [
          {
            "en": "Only if",
            "es": "solo si",
            "imagen": "Persona firmando un contrato con condiciones",
            "ejemplo": [
              "Only if you sign the contract can you start working.",
              "Solo si firmas el contrato puedes empezar a trabajar."
            ]
          },
          {
            "en": "Only when",
            "es": "solo cuando",
            "imagen": "Semáforo cambiando a verde",
            "ejemplo": [
              "Only when the light turns green may you cross.",
              "Solo cuando el semáforo esté en verde puede cruzar."
            ]
          },
          {
            "en": "Not only… but also",
            "es": "no solo… sino también",
            "imagen": "Atleta con dos medallas",
            "ejemplo": [
              "Not only is she a great athlete, but she is also an excellent student.",
              "No solo es una gran atleta, sino también una excelente estudiante."
            ]
          },
          {
            "en": "In no case",
            "es": "en ningún caso",
            "imagen": "Documento oficial con un sello",
            "ejemplo": [
              "In no case will the money be refunded.",
              "En ningún caso se reembolsará el dinero."
            ]
          },
          {
            "en": "Rarely, if ever",
            "es": "rara vez, si acaso",
            "imagen": "Calendario con un solo día marcado",
            "ejemplo": [
              "Rarely, if ever, does the director attend these meetings.",
              "Rara vez, si acaso, asiste el director a estas juntas."
            ]
          },
          {
            "en": "Nor",
            "es": "ni / tampoco",
            "imagen": "Persona negando dos cosas con las manos",
            "ejemplo": [
              "I don't like coffee, nor do I like tea.",
              "No me gusta el café, ni tampoco el té."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Never have I seen such a beautiful sunset.",
        "es": "Nunca había visto un atardecer tan hermoso."
      },
      {
        "en": "Not only did he arrive late, but he also forgot the documents.",
        "es": "No solo llegó tarde, sino que también olvidó los documentos."
      },
      {
        "en": "No sooner had we sat down than the phone rang.",
        "es": "Apenas nos habíamos sentado cuando sonó el teléfono."
      },
      {
        "en": "Little did she know that her friends were planning a surprise.",
        "es": "Poco sabía ella que sus amigos planeaban una sorpresa."
      },
      {
        "en": "Under no circumstances should you open this door.",
        "es": "Bajo ninguna circunstancia debe abrir esta puerta."
      },
      {
        "en": "Only then did I realize my mistake.",
        "es": "Solo entonces me di cuenta de mi error."
      },
      {
        "en": "Not until midnight did they arrive.",
        "es": "No fue sino hasta la medianoche que llegaron."
      },
      {
        "en": "At no time did I say that.",
        "es": "En ningún momento dije eso."
      },
      {
        "en": "So great was the crowd that we couldn't move.",
        "es": "Tan grande era la multitud que no podíamos movernos."
      },
      {
        "en": "Only by working together can we solve this problem.",
        "es": "Solo trabajando juntos podemos resolver este problema."
      }
    ],
    "frases": [
      {
        "en": "Never in my life have I been so frightened as on the night of the earthquake.",
        "es": "Nunca en mi vida había tenido tanto miedo como la noche del terremoto.",
        "imagen": "Personas en la calle de noche después de un sismo"
      },
      {
        "en": "Not only did the storm destroy the crops, but it also cut off the village for a week.",
        "es": "La tormenta no solo destruyó las cosechas, sino que también dejó incomunicado al pueblo una semana.",
        "imagen": "Pueblo inundado con caminos cortados"
      },
      {
        "en": "Hardly had the concert begun when the power went out and the stadium was left in darkness.",
        "es": "Apenas había comenzado el concierto cuando se fue la luz y el estadio quedó a oscuras.",
        "imagen": "Estadio a oscuras con luces de celulares"
      },
      {
        "en": "Little did the young musician know that, ten years later, he would be playing in the world's greatest concert halls.",
        "es": "Poco sabía el joven músico que, diez años después, tocaría en las mejores salas de concierto del mundo.",
        "imagen": "Violinista joven practicando en un cuarto pequeño"
      },
      {
        "en": "No sooner had the company launched the product than its competitors copied it.",
        "es": "Apenas la empresa había lanzado el producto cuando sus competidores lo copiaron.",
        "imagen": "Dos productos idénticos en un aparador"
      },
      {
        "en": "Only after the doctor had explained the risks did my father agree to the operation.",
        "es": "Solo después de que el doctor explicó los riesgos aceptó mi padre la operación.",
        "imagen": "Doctor explicando algo a un paciente mayor y su familia"
      },
      {
        "en": "Rarely do we see such dedication in someone so young.",
        "es": "Rara vez vemos tanta dedicación en alguien tan joven.",
        "imagen": "Joven estudiando tarde en una biblioteca"
      },
      {
        "en": "Under no circumstances should passengers leave their luggage unattended.",
        "es": "Bajo ninguna circunstancia deben los pasajeros dejar su equipaje sin vigilancia.",
        "imagen": "Maleta sola en una sala de espera de aeropuerto"
      },
      {
        "en": "So beautiful was the view from the top that we forgot how tired we were.",
        "es": "Tan hermosa era la vista desde la cima que olvidamos lo cansados que estábamos.",
        "imagen": "Excursionistas en la cima de una montaña al amanecer"
      },
      {
        "en": "Not until I lived abroad did I truly appreciate my own culture.",
        "es": "No fue sino hasta que viví en el extranjero que valoré de verdad mi propia cultura.",
        "imagen": "Persona extrañando su país mirando una foto de su ciudad"
      }
    ],
    "listening": [
      {
        "audio": "Never have I tasted such delicious mole. Who made it?",
        "pregunta": "¿Qué opina del mole?",
        "opciones": [
          "Nunca había probado uno tan delicioso",
          "Está muy picante",
          "No le gusta",
          "Ya lo había probado"
        ]
      },
      {
        "audio": "No sooner had I paid for the car than it broke down.",
        "pregunta": "¿Cuándo se descompuso el carro?",
        "opciones": [
          "Apenas lo pagó",
          "Un año después",
          "Antes de comprarlo",
          "Nunca"
        ]
      },
      {
        "audio": "Not only did she win the race, but she also broke the national record.",
        "pregunta": "¿Qué logró además de ganar?",
        "opciones": [
          "Romper el récord nacional",
          "Ganar dinero",
          "Clasificar a otra carrera",
          "Nada más"
        ]
      },
      {
        "audio": "Under no circumstances should you share your password with anyone.",
        "pregunta": "¿Qué no se debe hacer nunca?",
        "opciones": [
          "Compartir la contraseña",
          "Cambiar la contraseña",
          "Olvidar la contraseña",
          "Usar la computadora"
        ]
      },
      {
        "audio": "Only when I got home did I realize I had left my wallet at the restaurant.",
        "pregunta": "¿Cuándo se dio cuenta?",
        "opciones": [
          "Al llegar a casa",
          "En el restaurante",
          "Al día siguiente",
          "En el taxi"
        ]
      }
    ],
    "lectura": {
      "titulo": "The night of the storm",
      "texto": "Never had the small fishing village of San Blas experienced a storm like the one that hit in September. The weather service had warned of strong winds, but little did the villagers know how serious it would be. No sooner had the fishermen tied up their boats than the sea began to rise. Hardly had the families reached the church on the hill when the first waves crashed into the houses near the beach. Not only did the storm destroy dozens of homes, but it also knocked down the only bridge that connected the village to the highway. For three days, nobody could get in or out. Only when the army arrived with helicopters did the villagers receive food and medicine. Yet, remarkably, at no time did anyone lose hope. Rarely has a community shown such solidarity: neighbors shared their food, and young people helped the elderly. Six months later, the village was rebuilt, stronger than ever.",
      "preguntas": [
        {
          "pregunta": "¿Qué no sabían los habitantes?",
          "opciones": [
            "Qué tan grave sería la tormenta",
            "Que venía una tormenta",
            "Dónde estaba la iglesia",
            "Cómo amarrar las lanchas"
          ]
        },
        {
          "pregunta": "¿A dónde fueron las familias?",
          "opciones": [
            "A la iglesia en la colina",
            "A la playa",
            "A la carretera",
            "A otra ciudad"
          ]
        },
        {
          "pregunta": "¿Qué destruyó la tormenta además de las casas?",
          "opciones": [
            "El único puente a la carretera",
            "La iglesia",
            "El hospital",
            "Las lanchas"
          ]
        },
        {
          "pregunta": "¿Cómo se comportó la comunidad?",
          "opciones": [
            "Con gran solidaridad",
            "Con egoísmo",
            "Abandonaron el pueblo",
            "Se pelearon"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con la inversión.",
        "pregunta": "Never ___ I seen such a big dog. (have)",
        "respuestas": [
          "have"
        ]
      },
      {
        "instruccion": "Completa con la inversión.",
        "pregunta": "Not only ___ she sing, but she also dances.",
        "respuestas": [
          "does"
        ]
      },
      {
        "instruccion": "Completa con than o when.",
        "pregunta": "No sooner had I arrived ___ the meeting started.",
        "respuestas": [
          "than"
        ]
      },
      {
        "instruccion": "Completa con than o when.",
        "pregunta": "Hardly had we left ___ it began to snow.",
        "respuestas": [
          "when"
        ]
      },
      {
        "instruccion": "Completa con la inversión.",
        "pregunta": "Little ___ he know what was waiting for him.",
        "respuestas": [
          "did"
        ]
      },
      {
        "instruccion": "Completa con la inversión.",
        "pregunta": "Only then ___ I understand the problem.",
        "respuestas": [
          "did"
        ]
      },
      {
        "instruccion": "Reescribe con inversión.",
        "pregunta": "I have never felt so happy. → Never ___ so happy.",
        "respuestas": [
          "have I felt"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "bajo ninguna circunstancia",
        "respuestas": [
          "under no circumstances"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Ni una sola vez me llamó.",
        "respuestas": [
          "Not once did he call me",
          "Not once did she call me"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "Never I have eaten so much.",
        "respuestas": [
          "Never have I eaten so much"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "Rarely ___ such a talented student.",
        "opciones": [
          "have I met",
          "I have met",
          "I met",
          "met I"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "No sooner had she left ___ he arrived.",
        "opciones": [
          "than",
          "when",
          "that",
          "then"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Not only ___ late, but he also forgot the tickets.",
        "opciones": [
          "was he",
          "he was",
          "he did",
          "did he was"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Under no circumstances ___ the alarm.",
        "opciones": [
          "should you touch",
          "you should touch",
          "touch you",
          "you touch"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Little ___ that she would become famous.",
        "opciones": [
          "did she know",
          "she knew",
          "she did know",
          "knew she"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es correcta?",
        "opciones": [
          "Only later did I realize.",
          "Only later I realized did.",
          "Only later realized I.",
          "Only later I did realize."
        ]
      },
      {
        "tipo": "listening",
        "audio": "Seldom have I met someone so generous. He gave all his savings to the school.",
        "pregunta": "¿Qué hizo el hombre?",
        "opciones": [
          "Donó todos sus ahorros a la escuela",
          "Abrió una escuela",
          "Ganó la lotería",
          "Se fue del país"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Not until the end of the movie did we understand who the killer was.",
        "pregunta": "¿Cuándo entendieron quién era el asesino?",
        "opciones": [
          "Al final de la película",
          "Al principio",
          "A la mitad",
          "Nunca"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Nunca había visto algo así.",
        "respuestas": [
          "Never have I seen anything like it",
          "Never had I seen anything like it",
          "I had never seen anything like it",
          "I have never seen anything like it"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Solo entonces entendí.",
        "respuestas": [
          "Only then did I understand",
          "Only then did I realize"
        ]
      }
    ]
  },
  {
    "id": "c1-02",
    "num": 2,
    "titulo": "Inversión en condicionales (Had I known…, Should you need…, Were I to…)",
    "contexto": "Lenguaje formal",
    "explicacion": {
      "es": [
        "En **inglés formal**, se puede quitar *if* e **invertir** el sujeto y el auxiliar. Es común en correos de negocios, contratos y avisos oficiales.",
        "**Primer condicional** → ***Should*** + sujeto + verbo: *If you need help… → **Should you need** any help, please contact us.* (Si necesita ayuda, contáctenos.)",
        "**Segundo condicional** → ***Were*** + sujeto + ***to*** + verbo (o ***Were*** + sujeto con *be*): *If I were in your position… → **Were I** in your position, I would accept.* *If the price rose… → **Were the price to rise**, sales would fall.*",
        "**Tercer condicional** → ***Had*** + sujeto + participio: *If I had known… → **Had I known**, I would have called you.* (De haberlo sabido, te habría llamado.) El negativo va **sin contracción**: ***Had I not** seen it…, **Should you not** wish to…*"
      ],
      "tabla": {
        "columnas": [
          "Con if",
          "Con inversión (formal)"
        ],
        "filas": [
          [
            "If you have any questions, …",
            "Should you have any questions, …"
          ],
          [
            "If I were you, …",
            "Were I you, …"
          ],
          [
            "If they offered me the job, …",
            "Were they to offer me the job, …"
          ],
          [
            "If I had known, …",
            "Had I known, …"
          ],
          [
            "If she hadn't helped us, …",
            "Had she not helped us, …"
          ]
        ]
      },
      "ojo": [
        "El negativo **no** se contrae: ***Had I not*** ✅ (no *Hadn't I* ❌). ***Were it not for*** = si no fuera por.",
        "***Should you require*** y ***Should you need*** son fórmulas clásicas en correos de atención al cliente.",
        "Solo se invierten ***had, should, were***. Con otros verbos no: *Did I know…* ❌.",
        "***Were it not for*** / ***Had it not been for*** = si no fuera / si no hubiera sido por: ***Had it not been for** your help, we would have failed.*",
        "En la conversación diaria esto suena muy formal; úsalo en **escritura profesional** o discursos."
      ],
      "en": [
        "In formal English, we can drop if and invert the subject and auxiliary.",
        "Should you need any help, please contact us.",
        "Were I in your position, I would accept the offer.",
        "Had I known, I would have called you. Had it not been for your help, we would have failed."
      ]
    },
    "vocabulario": [
      {
        "en": "Should you need any help",
        "es": "si necesita ayuda",
        "imagen": "Recepcionista sonriendo junto a un teléfono",
        "ejemplo": [
          "Should you need any help, please contact our team.",
          "Si necesita ayuda, por favor contacte a nuestro equipo."
        ]
      },
      {
        "en": "Should you have any questions",
        "es": "si tiene alguna pregunta",
        "imagen": "Correo formal en una pantalla, sin texto legible",
        "ejemplo": [
          "Should you have any questions, do not hesitate to call.",
          "Si tiene alguna pregunta, no dude en llamar."
        ]
      },
      {
        "en": "Were I in your position",
        "es": "si yo estuviera en su lugar",
        "imagen": "Asesora dando un consejo en una oficina",
        "ejemplo": [
          "Were I in your position, I would accept the offer.",
          "Si yo estuviera en su lugar, aceptaría la oferta."
        ]
      },
      {
        "en": "Were they to offer me the job",
        "es": "si me ofrecieran el trabajo",
        "imagen": "Persona leyendo una oferta de trabajo con interés",
        "ejemplo": [
          "Were they to offer me the job, I would move to Canada.",
          "Si me ofrecieran el trabajo, me mudaría a Canadá."
        ]
      },
      {
        "en": "Had I known",
        "es": "de haberlo sabido",
        "imagen": "Persona lamentándose frente a un evento que ya pasó",
        "ejemplo": [
          "Had I known, I would have come earlier.",
          "De haberlo sabido, habría venido antes."
        ]
      },
      {
        "en": "Had it not been for",
        "es": "si no hubiera sido por",
        "imagen": "Rescatista ayudando a una persona en el agua",
        "ejemplo": [
          "Had it not been for the lifeguard, he would have drowned.",
          "Si no hubiera sido por el salvavidas, se habría ahogado."
        ]
      },
      {
        "en": "Were it not for",
        "es": "si no fuera por",
        "imagen": "Abuela sonriendo rodeada de su familia",
        "ejemplo": [
          "Were it not for my family, I would be lost.",
          "Si no fuera por mi familia, estaría perdido."
        ]
      },
      {
        "en": "Had she not helped us",
        "es": "si ella no nos hubiera ayudado",
        "imagen": "Voluntaria repartiendo comida a una familia",
        "ejemplo": [
          "Had she not helped us, we would have lost everything.",
          "Si ella no nos hubiera ayudado, lo habríamos perdido todo."
        ]
      },
      {
        "en": "Should the flight be delayed",
        "es": "en caso de que el vuelo se retrase",
        "imagen": "Pantalla de aeropuerto con un vuelo retrasado",
        "ejemplo": [
          "Should the flight be delayed, passengers will receive a meal.",
          "En caso de que el vuelo se retrase, los pasajeros recibirán comida."
        ]
      },
      {
        "en": "Should you wish to cancel",
        "es": "si desea cancelar",
        "imagen": "Persona llenando un formulario en línea",
        "ejemplo": [
          "Should you wish to cancel, please inform us in writing.",
          "Si desea cancelar, infórmenos por escrito."
        ]
      },
      {
        "en": "Were the price to rise",
        "es": "si el precio subiera",
        "imagen": "Gráfica con una flecha subiendo",
        "ejemplo": [
          "Were the price to rise, sales would fall.",
          "Si el precio subiera, las ventas bajarían."
        ]
      },
      {
        "en": "Had we left earlier",
        "es": "si hubiéramos salido antes",
        "imagen": "Personas corriendo por un aeropuerto",
        "ejemplo": [
          "Had we left earlier, we wouldn't have missed the flight.",
          "Si hubiéramos salido antes, no habríamos perdido el vuelo."
        ]
      },
      {
        "en": "Should you require",
        "es": "si requiere",
        "imagen": "Persona en un escritorio de servicio al cliente",
        "ejemplo": [
          "Should you require further information, visit our website.",
          "Si requiere más información, visite nuestro sitio web."
        ]
      },
      {
        "en": "Were you to ask me",
        "es": "si me preguntara",
        "imagen": "Persona pensativa respondiendo una entrevista",
        "ejemplo": [
          "Were you to ask me, I would say no.",
          "Si me lo preguntara, diría que no."
        ]
      },
      {
        "en": "Had the government acted",
        "es": "si el gobierno hubiera actuado",
        "imagen": "Edificio de gobierno con manifestantes afuera",
        "ejemplo": [
          "Had the government acted sooner, the crisis could have been avoided.",
          "Si el gobierno hubiera actuado antes, la crisis se habría podido evitar."
        ]
      },
      {
        "en": "Should anything go wrong",
        "es": "si algo saliera mal",
        "imagen": "Técnico revisando una máquina con atención",
        "ejemplo": [
          "Should anything go wrong, call this number immediately.",
          "Si algo saliera mal, llame a este número de inmediato."
        ]
      }
    ],
    "grupos": [
      {
        "id": "correos",
        "titulo": "Correos profesionales",
        "icono": "📧",
        "patron": [
          "Should you have any questions…",
          "Please do not hesitate to…",
          "I look forward to…"
        ],
        "palabras": [
          {
            "en": "Please do not hesitate to contact me",
            "es": "no dude en contactarme",
            "imagen": "Persona escribiendo un correo formal",
            "ejemplo": [
              "Please do not hesitate to contact me.",
              "No dude en contactarme."
            ]
          },
          {
            "en": "I am writing to inform you",
            "es": "le escribo para informarle",
            "imagen": "Carta formal con sello sobre un escritorio",
            "ejemplo": [
              "I am writing to inform you about the changes.",
              "Le escribo para informarle sobre los cambios."
            ]
          },
          {
            "en": "Please find attached",
            "es": "adjunto encontrará",
            "imagen": "Clip sujetando documentos",
            "ejemplo": [
              "Please find attached the contract.",
              "Adjunto encontrará el contrato."
            ]
          },
          {
            "en": "at your earliest convenience",
            "es": "en cuanto le sea posible",
            "imagen": "Reloj junto a una agenda abierta",
            "ejemplo": [
              "Please reply at your earliest convenience.",
              "Por favor responda en cuanto le sea posible."
            ]
          },
          {
            "en": "I would be grateful if",
            "es": "le agradecería que",
            "imagen": "Persona escribiendo con cortesía",
            "ejemplo": [
              "I would be grateful if you could send me the report.",
              "Le agradecería que me enviara el reporte."
            ]
          },
          {
            "en": "Kind regards",
            "es": "saludos cordiales",
            "imagen": "Firma al final de una carta formal",
            "ejemplo": [
              "Kind regards, María López.",
              "Saludos cordiales, María López."
            ]
          }
        ]
      },
      {
        "id": "avisos",
        "titulo": "Avisos y contratos",
        "icono": "📜",
        "patron": [
          "Should the tenant…",
          "Were the company to…",
          "Had the client…"
        ],
        "palabras": [
          {
            "en": "the tenant",
            "es": "el inquilino",
            "imagen": "Persona recibiendo llaves de un departamento",
            "ejemplo": [
              "Should the tenant damage the property, he must pay for repairs.",
              "Si el inquilino daña la propiedad, debe pagar las reparaciones."
            ]
          },
          {
            "en": "the terms and conditions",
            "es": "los términos y condiciones",
            "imagen": "Documento largo con letras pequeñas",
            "ejemplo": [
              "Please read the terms and conditions carefully.",
              "Por favor lea con cuidado los términos y condiciones."
            ]
          },
          {
            "en": "a refund",
            "es": "un reembolso",
            "imagen": "Cliente recibiendo dinero en una caja",
            "ejemplo": [
              "Should the product be faulty, you will receive a full refund.",
              "Si el producto está defectuoso, recibirá un reembolso completo."
            ]
          },
          {
            "en": "a penalty",
            "es": "una penalización",
            "imagen": "Documento con un sello rojo",
            "ejemplo": [
              "Were the company to break the contract, it would pay a penalty.",
              "Si la empresa rompiera el contrato, pagaría una penalización."
            ]
          },
          {
            "en": "in writing",
            "es": "por escrito",
            "imagen": "Persona firmando una carta",
            "ejemplo": [
              "Any changes must be made in writing.",
              "Cualquier cambio debe hacerse por escrito."
            ]
          },
          {
            "en": "null and void",
            "es": "nulo y sin efecto",
            "imagen": "Contrato roto a la mitad",
            "ejemplo": [
              "Should either party fail to pay, the contract will be null and void.",
              "Si alguna de las partes no paga, el contrato será nulo."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Should you need any help, please contact our team.",
        "es": "Si necesita ayuda, por favor contacte a nuestro equipo."
      },
      {
        "en": "Were I in your position, I would accept the offer.",
        "es": "Si yo estuviera en su lugar, aceptaría la oferta."
      },
      {
        "en": "Had I known, I would have come earlier.",
        "es": "De haberlo sabido, habría venido antes."
      },
      {
        "en": "Had it not been for the lifeguard, he would have drowned.",
        "es": "Si no hubiera sido por el salvavidas, se habría ahogado."
      },
      {
        "en": "Were it not for my family, I would be lost.",
        "es": "Si no fuera por mi familia, estaría perdido."
      },
      {
        "en": "Should the flight be delayed, passengers will receive a meal.",
        "es": "En caso de que el vuelo se retrase, los pasajeros recibirán comida."
      },
      {
        "en": "Should you require further information, visit our website.",
        "es": "Si requiere más información, visite nuestro sitio web."
      },
      {
        "en": "Please find attached the contract.",
        "es": "Adjunto encontrará el contrato."
      },
      {
        "en": "I would be grateful if you could send me the report.",
        "es": "Le agradecería que me enviara el reporte."
      },
      {
        "en": "Should anything go wrong, call this number immediately.",
        "es": "Si algo saliera mal, llame a este número de inmediato."
      }
    ],
    "frases": [
      {
        "en": "Should you have any further questions about your order, please do not hesitate to contact our customer service team.",
        "es": "Si tiene más preguntas sobre su pedido, no dude en contactar a nuestro equipo de atención al cliente.",
        "imagen": "Agente de servicio al cliente con audífonos sonriendo"
      },
      {
        "en": "Had the engineers checked the bridge more carefully, the accident could have been prevented.",
        "es": "Si los ingenieros hubieran revisado el puente con más cuidado, se habría podido evitar el accidente.",
        "imagen": "Ingenieros inspeccionando un puente dañado"
      },
      {
        "en": "Were the government to raise taxes again, many small businesses would have to close.",
        "es": "Si el gobierno volviera a subir los impuestos, muchos pequeños negocios tendrían que cerrar.",
        "imagen": "Pequeña tienda con un letrero de cierre sin texto"
      },
      {
        "en": "Had it not been for my teacher's encouragement, I would never have applied for the scholarship.",
        "es": "Si no hubiera sido por el ánimo de mi maestra, nunca habría solicitado la beca.",
        "imagen": "Maestra animando a una alumna con una solicitud"
      },
      {
        "en": "Should the weather conditions worsen, the outdoor ceremony will be moved inside.",
        "es": "En caso de que empeore el clima, la ceremonia al aire libre se trasladará al interior.",
        "imagen": "Jardín preparado para una ceremonia con nubes de tormenta"
      },
      {
        "en": "Were I to win the lottery, I would build a school in my hometown.",
        "es": "Si me ganara la lotería, construiría una escuela en mi pueblo.",
        "imagen": "Escuela nueva en un pueblo con niños entrando"
      },
      {
        "en": "Had we known about the strike, we would have taken a different route.",
        "es": "De haber sabido de la huelga, habríamos tomado otra ruta.",
        "imagen": "Calle bloqueada por una manifestación"
      },
      {
        "en": "Should the tenant fail to pay the rent for two months, the landlord may end the contract.",
        "es": "Si el inquilino no paga la renta durante dos meses, el arrendador puede terminar el contrato.",
        "imagen": "Contrato de arrendamiento sobre una mesa con llaves"
      },
      {
        "en": "Were it not for the volunteers, the festival would not be possible.",
        "es": "Si no fuera por los voluntarios, el festival no sería posible.",
        "imagen": "Voluntarios con playeras iguales organizando un festival"
      },
      {
        "en": "Had she accepted the job in London, her life would have been completely different.",
        "es": "Si hubiera aceptado el trabajo en Londres, su vida habría sido completamente distinta.",
        "imagen": "Mujer mirando una foto de Londres con nostalgia"
      }
    ],
    "listening": [
      {
        "audio": "Should you need a taxi, the reception can call one for you.",
        "pregunta": "¿Qué ofrece la recepción?",
        "opciones": [
          "Llamar un taxi",
          "Prestar un carro",
          "Reservar un vuelo",
          "Dar un mapa"
        ]
      },
      {
        "audio": "Had I known it was your birthday, I would have brought a present.",
        "pregunta": "¿Por qué no llevó regalo?",
        "opciones": [
          "No sabía que era su cumpleaños",
          "No tenía dinero",
          "Lo olvidó en casa",
          "No quiso"
        ]
      },
      {
        "audio": "Were it not for the scholarship, I could never have studied abroad.",
        "pregunta": "¿Qué le permitió estudiar en el extranjero?",
        "opciones": [
          "Una beca",
          "Sus papás",
          "Un préstamo",
          "Su trabajo"
        ]
      },
      {
        "audio": "Should the product arrive damaged, please contact us within forty-eight hours.",
        "pregunta": "¿En cuánto tiempo hay que avisar?",
        "opciones": [
          "En cuarenta y ocho horas",
          "En una semana",
          "En veinticuatro horas",
          "En un mes"
        ]
      },
      {
        "audio": "Had the firefighters arrived five minutes later, the whole building would have burned.",
        "pregunta": "¿Qué habría pasado si los bomberos tardaban más?",
        "opciones": [
          "Se habría quemado todo el edificio",
          "Nada",
          "Habría llovido",
          "Habrían cerrado la calle"
        ]
      }
    ],
    "lectura": {
      "titulo": "A formal letter",
      "texto": "Dear Mr. Hernández, I am writing to inform you of some changes to your rental agreement, which will come into effect on the first of March. Firstly, the monthly rent will increase by five percent, in line with inflation. Should you wish to discuss this increase, please contact our office before the fifteenth of February. Secondly, the building will undergo maintenance work during the month of April. Were the work to cause any serious inconvenience, we would be happy to offer you a temporary discount. We are aware that last year's repairs took longer than expected. Had we been informed of the problems with the elevator earlier, we would have acted more quickly, and we apologize for any trouble this caused. Should you require any further information, please do not hesitate to contact me. Please find attached a copy of the updated agreement, which we would be grateful if you could sign and return at your earliest convenience. Kind regards, Laura Méndez, Property Manager.",
      "preguntas": [
        {
          "pregunta": "¿Cuánto subirá la renta?",
          "opciones": [
            "Cinco por ciento",
            "Quince por ciento",
            "Diez por ciento",
            "No subirá"
          ]
        },
        {
          "pregunta": "¿Cuándo habrá trabajos de mantenimiento?",
          "opciones": [
            "En abril",
            "En marzo",
            "En febrero",
            "En mayo"
          ]
        },
        {
          "pregunta": "¿Qué ofrecen si las obras causan molestias graves?",
          "opciones": [
            "Un descuento temporal",
            "Otro departamento",
            "Un reembolso total",
            "Nada"
          ]
        },
        {
          "pregunta": "¿Qué le piden al señor Hernández?",
          "opciones": [
            "Firmar y devolver el contrato actualizado",
            "Mudarse",
            "Pagar las reparaciones",
            "Llamar al elevador"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Reescribe con inversión.",
        "pregunta": "If you need anything, call me. → ___ you need anything, call me.",
        "respuestas": [
          "Should"
        ]
      },
      {
        "instruccion": "Reescribe con inversión.",
        "pregunta": "If I had known, I would have helped. → ___ I known, I would have helped.",
        "respuestas": [
          "Had"
        ]
      },
      {
        "instruccion": "Reescribe con inversión.",
        "pregunta": "If I were you, I would wait. → ___ I you, I would wait.",
        "respuestas": [
          "Were"
        ]
      },
      {
        "instruccion": "Completa el negativo.",
        "pregunta": "Had she ___ called, we wouldn't have known.",
        "respuestas": [
          "not"
        ]
      },
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "Had it not ___ for you, I would have failed.",
        "respuestas": [
          "been"
        ]
      },
      {
        "instruccion": "Completa la fórmula del correo.",
        "pregunta": "Please do not ___ to contact me.",
        "respuestas": [
          "hesitate"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "De haberlo sabido, habría venido.",
        "respuestas": [
          "Had I known, I would have come",
          "If I had known, I would have come",
          "Had I known, I'd have come"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Si necesita ayuda (formal)",
        "respuestas": [
          "Should you need help",
          "Should you need any help",
          "If you need help",
          "If you need any help"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "adjunto encontrará",
        "respuestas": [
          "please find attached",
          "find attached"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "Hadn't I seen it, I wouldn't believe it.",
        "respuestas": [
          "Had I not seen it, I wouldn't believe it",
          "Had I not seen it, I would not believe it",
          "Had I not seen it, I wouldn't have believed it"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "___ you have any problems, call us.",
        "opciones": [
          "Should",
          "Had",
          "Were",
          "Would"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ I known about the party, I would have gone.",
        "opciones": [
          "Had",
          "Should",
          "Were",
          "Did"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ I rich, I would travel the world.",
        "opciones": [
          "Were",
          "Had",
          "Should",
          "Was"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Had it not ___ for the rain, we would have won.",
        "opciones": [
          "been",
          "be",
          "being",
          "was"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es correcta?",
        "opciones": [
          "Had I not seen it, I wouldn't believe it.",
          "Hadn't I seen it, I wouldn't believe it.",
          "Did I not see it, I wouldn't believe it.",
          "Had not I seen it, I wouldn't believe it."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Should you require assistance» significa:",
        "opciones": [
          "Si requiere ayuda",
          "Debería pedir ayuda",
          "Requiere ayuda",
          "No requiere ayuda"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Were the company to move to Monterrey, half of the employees would resign.",
        "pregunta": "¿Qué pasaría si la empresa se muda?",
        "opciones": [
          "La mitad de los empleados renunciaría",
          "Todos se mudarían",
          "Contratarían más gente",
          "Nada"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Should you wish to change your seat, please speak to a member of the staff.",
        "pregunta": "¿Qué hacer para cambiar de asiento?",
        "opciones": [
          "Hablar con el personal",
          "Llamar por teléfono",
          "Ir a la recepción",
          "Escribir un correo"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Si no fuera por ti, …",
        "respuestas": [
          "Were it not for you",
          "If it weren't for you",
          "If it were not for you",
          "If it wasn't for you"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: saludos cordiales",
        "respuestas": [
          "kind regards",
          "best regards",
          "warm regards"
        ]
      }
    ]
  },
  {
    "id": "c1-03",
    "num": 3,
    "titulo": "Oraciones enfáticas (cleft sentences: It was… that; What I need is…)",
    "contexto": "Destacar información",
    "explicacion": {
      "es": [
        "Las **cleft sentences** (oraciones escindidas) **dividen** una oración para **destacar** una parte. Con ***It is / It was … that / who***: *Ana broke the vase → **It was Ana who** broke the vase.* (Fue Ana quien rompió el jarrón.)",
        "Se puede destacar cualquier parte: la persona (***It was my brother who** called*), el lugar (***It was in Oaxaca that** we met*), el momento (***It was only last year that** I learned to swim*) o la razón (***It was because of the rain that** we stayed home*).",
        "Con ***What*** + sujeto + verbo + ***is / was***: *I need a holiday → **What I need is** a holiday.* (Lo que necesito son unas vacaciones.) *She hates lies → **What she hates is** lies.* ***What happened was that**…* (Lo que pasó fue que…)",
        "Otras formas: ***All I want is…*** (Lo único que quiero es…), ***The thing that… is…***, ***The reason why… is that…***, ***The person who… is…***, ***The place where… is…***"
      ],
      "tabla": {
        "columnas": [
          "Oración normal",
          "Oración enfática"
        ],
        "filas": [
          [
            "My sister found the keys.",
            "It was my sister who found the keys."
          ],
          [
            "We met in Paris.",
            "It was in Paris that we met."
          ],
          [
            "I need more time.",
            "What I need is more time."
          ],
          [
            "The noise bothers me.",
            "What bothers me is the noise."
          ],
          [
            "I only want to sleep.",
            "All I want is to sleep."
          ],
          [
            "He left because he was tired.",
            "The reason why he left is that he was tired."
          ]
        ]
      },
      "ojo": [
        "Con *It was* la persona puede ir con ***who*** o ***that***; las cosas, lugares y momentos con ***that***.",
        "Con *What*… el verbo *be* va en **singular** aunque siga un plural: ***What I need is** two weeks off.*",
        "Si después de *What … do* va un verbo, se usa el **infinitivo sin to** o *to*: ***What I did was (to) call** the police.*",
        "Las cleft sentences son útiles para **corregir** a alguien: *No, **it wasn't** Pedro who called, **it was** Carlos.*",
        "En español es igual: «**Fue** Ana **quien**…», «**Lo que** necesito **es**…»."
      ],
      "en": [
        "Cleft sentences divide a sentence to emphasize one part: It was Ana who broke the vase.",
        "It was in Oaxaca that we met. It was only last year that I learned to swim.",
        "What I need is a holiday. What happened was that the car broke down.",
        "All I want is to sleep."
      ]
    },
    "vocabulario": [
      {
        "en": "It was Ana who",
        "es": "fue Ana quien",
        "imagen": "Niña señalada junto a un jarrón roto",
        "ejemplo": [
          "It was Ana who broke the vase, not me.",
          "Fue Ana quien rompió el jarrón, no yo."
        ]
      },
      {
        "en": "It was in Oaxaca that",
        "es": "fue en Oaxaca donde",
        "imagen": "Pareja paseando por una calle de Oaxaca",
        "ejemplo": [
          "It was in Oaxaca that we first met.",
          "Fue en Oaxaca donde nos conocimos."
        ]
      },
      {
        "en": "What I need is",
        "es": "lo que necesito es",
        "imagen": "Persona agotada mirando una foto de la playa",
        "ejemplo": [
          "What I need is a long holiday.",
          "Lo que necesito son unas largas vacaciones."
        ]
      },
      {
        "en": "What bothers me is",
        "es": "lo que me molesta es",
        "imagen": "Persona molesta tapándose los oídos",
        "ejemplo": [
          "What bothers me is the noise at night.",
          "Lo que me molesta es el ruido en la noche."
        ]
      },
      {
        "en": "All I want is",
        "es": "lo único que quiero es",
        "imagen": "Persona exhausta abrazando una almohada",
        "ejemplo": [
          "All I want is to sleep for twelve hours.",
          "Lo único que quiero es dormir doce horas."
        ]
      },
      {
        "en": "What happened was that",
        "es": "lo que pasó fue que",
        "imagen": "Persona explicando un accidente con las manos",
        "ejemplo": [
          "What happened was that the car broke down.",
          "Lo que pasó fue que el carro se descompuso."
        ]
      },
      {
        "en": "It was only last year that",
        "es": "fue apenas el año pasado que",
        "imagen": "Adulto aprendiendo a nadar en una alberca",
        "ejemplo": [
          "It was only last year that I learned to swim.",
          "Fue apenas el año pasado que aprendí a nadar."
        ]
      },
      {
        "en": "The reason why",
        "es": "la razón por la que",
        "imagen": "Persona explicando algo con seriedad",
        "ejemplo": [
          "The reason why I'm late is that the subway stopped.",
          "La razón por la que llegué tarde es que el metro se detuvo."
        ]
      },
      {
        "en": "It wasn't me who",
        "es": "no fui yo quien",
        "imagen": "Persona negando con las manos frente a un desastre",
        "ejemplo": [
          "It wasn't me who ate the cake!",
          "¡No fui yo quien se comió el pastel!"
        ]
      },
      {
        "en": "What I love about",
        "es": "lo que me encanta de",
        "imagen": "Persona sonriendo en un mercado mexicano",
        "ejemplo": [
          "What I love about Mexico is the food.",
          "Lo que me encanta de México es la comida."
        ]
      },
      {
        "en": "The thing that surprised me",
        "es": "lo que me sorprendió",
        "imagen": "Turista sorprendido viendo una ciudad",
        "ejemplo": [
          "The thing that surprised me most was the traffic.",
          "Lo que más me sorprendió fue el tráfico."
        ]
      },
      {
        "en": "It was because of",
        "es": "fue por",
        "imagen": "Partido cancelado bajo la lluvia",
        "ejemplo": [
          "It was because of the rain that the game was canceled.",
          "Fue por la lluvia que se canceló el partido."
        ]
      },
      {
        "en": "What we did was",
        "es": "lo que hicimos fue",
        "imagen": "Familia acampando bajo las estrellas",
        "ejemplo": [
          "What we did was sleep in a tent.",
          "Lo que hicimos fue dormir en una tienda de campaña."
        ]
      },
      {
        "en": "The person who",
        "es": "la persona que",
        "imagen": "Maestra querida rodeada de alumnos",
        "ejemplo": [
          "The person who helped me most was my teacher.",
          "La persona que más me ayudó fue mi maestra."
        ]
      },
      {
        "en": "The place where",
        "es": "el lugar donde",
        "imagen": "Café pequeño con una mesa junto a la ventana",
        "ejemplo": [
          "This is the place where I wrote my first book.",
          "Este es el lugar donde escribí mi primer libro."
        ]
      },
      {
        "en": "What matters is",
        "es": "lo que importa es",
        "imagen": "Familia abrazada después de un accidente sin heridos",
        "ejemplo": [
          "What matters is that everybody is safe.",
          "Lo que importa es que todos están a salvo."
        ]
      }
    ],
    "grupos": [
      {
        "id": "corregir",
        "titulo": "Corregir y aclarar",
        "icono": "✏️",
        "patron": [
          "It wasn't… it was…",
          "What I meant was…",
          "It's not that…, it's that…"
        ],
        "palabras": [
          {
            "en": "What I meant was",
            "es": "lo que quise decir fue",
            "imagen": "Persona aclarando un malentendido con calma",
            "ejemplo": [
              "What I meant was that we need more time.",
              "Lo que quise decir fue que necesitamos más tiempo."
            ]
          },
          {
            "en": "It's not that",
            "es": "no es que",
            "imagen": "Persona explicando con las manos abiertas",
            "ejemplo": [
              "It's not that I don't like you; it's that I'm busy.",
              "No es que no me caigas bien; es que estoy ocupado."
            ]
          },
          {
            "en": "It wasn't Pedro, it was Carlos.",
            "es": "no fue Pedro, fue Carlos",
            "imagen": "Dos hombres parecidos, uno señalado",
            "ejemplo": [
              "It wasn't Pedro who called, it was Carlos.",
              "No fue Pedro quien llamó, fue Carlos."
            ]
          },
          {
            "en": "What I'm trying to say",
            "es": "lo que trato de decir",
            "imagen": "Persona buscando las palabras correctas",
            "ejemplo": [
              "What I'm trying to say is that I'm sorry.",
              "Lo que trato de decir es que lo siento."
            ]
          },
          {
            "en": "The problem is that",
            "es": "el problema es que",
            "imagen": "Persona preocupada frente a una computadora con error",
            "ejemplo": [
              "The problem is that nobody knows the password.",
              "El problema es que nadie sabe la contraseña."
            ]
          },
          {
            "en": "The point is",
            "es": "el punto es",
            "imagen": "Persona señalando una idea clave en un pizarrón",
            "ejemplo": [
              "The point is that we have to decide today.",
              "El punto es que tenemos que decidir hoy."
            ]
          }
        ]
      },
      {
        "id": "sentimientos",
        "titulo": "Destacar sentimientos",
        "icono": "💬",
        "patron": [
          "What I really miss is…",
          "What annoys me is…",
          "What I like most is…"
        ],
        "palabras": [
          {
            "en": "What I really miss",
            "es": "lo que de verdad extraño",
            "imagen": "Persona mirando fotos de su pueblo con nostalgia",
            "ejemplo": [
              "What I really miss is my mother's cooking.",
              "Lo que de verdad extraño es la comida de mi mamá."
            ]
          },
          {
            "en": "What annoys me",
            "es": "lo que me molesta",
            "imagen": "Persona irritada en una fila larga",
            "ejemplo": [
              "What annoys me is when people cut in line.",
              "Lo que me molesta es cuando la gente se mete en la fila."
            ]
          },
          {
            "en": "What I like most",
            "es": "lo que más me gusta",
            "imagen": "Persona disfrutando una tarde tranquila en un parque",
            "ejemplo": [
              "What I like most about my job is the people.",
              "Lo que más me gusta de mi trabajo es la gente."
            ]
          },
          {
            "en": "What worries me",
            "es": "lo que me preocupa",
            "imagen": "Persona preocupada revisando cuentas",
            "ejemplo": [
              "What worries me is the cost of living.",
              "Lo que me preocupa es el costo de vida."
            ]
          },
          {
            "en": "What makes me happy",
            "es": "lo que me hace feliz",
            "imagen": "Persona riendo con su perro en el pasto",
            "ejemplo": [
              "What makes me happy is spending time with my dog.",
              "Lo que me hace feliz es pasar tiempo con mi perro."
            ]
          },
          {
            "en": "What I can't stand",
            "es": "lo que no soporto",
            "imagen": "Persona tapándose la nariz en el tráfico",
            "ejemplo": [
              "What I can't stand is people who are rude to waiters.",
              "Lo que no soporto es la gente grosera con los meseros."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "It was Ana who broke the vase, not me.",
        "es": "Fue Ana quien rompió el jarrón, no yo."
      },
      {
        "en": "It was in Oaxaca that we first met.",
        "es": "Fue en Oaxaca donde nos conocimos."
      },
      {
        "en": "What I need is a long holiday.",
        "es": "Lo que necesito son unas largas vacaciones."
      },
      {
        "en": "All I want is to sleep for twelve hours.",
        "es": "Lo único que quiero es dormir doce horas."
      },
      {
        "en": "What happened was that the car broke down.",
        "es": "Lo que pasó fue que el carro se descompuso."
      },
      {
        "en": "The reason why I'm late is that the subway stopped.",
        "es": "La razón por la que llegué tarde es que el metro se detuvo."
      },
      {
        "en": "What I love about Mexico is the food.",
        "es": "Lo que me encanta de México es la comida."
      },
      {
        "en": "What matters is that everybody is safe.",
        "es": "Lo que importa es que todos están a salvo."
      },
      {
        "en": "It's not that I don't like you; it's that I'm busy.",
        "es": "No es que no me caigas bien; es que estoy ocupado."
      },
      {
        "en": "What I really miss is my mother's cooking.",
        "es": "Lo que de verdad extraño es la comida de mi mamá."
      }
    ],
    "frases": [
      {
        "en": "It was my grandmother who taught me to cook, and it was in her kitchen that I fell in love with Mexican food.",
        "es": "Fue mi abuela quien me enseñó a cocinar, y fue en su cocina donde me enamoré de la comida mexicana.",
        "imagen": "Abuela y nieta cocinando juntas en una cocina tradicional"
      },
      {
        "en": "What surprised me most about living in Japan was how quiet the trains were.",
        "es": "Lo que más me sorprendió de vivir en Japón fue lo silenciosos que eran los trenes.",
        "imagen": "Vagón de tren japonés silencioso y ordenado"
      },
      {
        "en": "All we need now is a good plan and a little bit of luck.",
        "es": "Lo único que necesitamos ahora es un buen plan y un poco de suerte.",
        "imagen": "Equipo revisando un plan en una mesa"
      },
      {
        "en": "It wasn't until I lost my job that I realized how much I had been working.",
        "es": "No fue sino hasta que perdí mi trabajo que me di cuenta de lo mucho que había estado trabajando.",
        "imagen": "Persona pensativa en su casa un día entre semana"
      },
      {
        "en": "What really matters is not how much money you earn, but how you treat other people.",
        "es": "Lo que de verdad importa no es cuánto dinero ganas, sino cómo tratas a los demás.",
        "imagen": "Persona ayudando a un anciano a cruzar la calle"
      },
      {
        "en": "The reason why so many people move to Querétaro is that it offers good jobs and safety.",
        "es": "La razón por la que tanta gente se muda a Querétaro es que ofrece buenos empleos y seguridad.",
        "imagen": "Ciudad moderna con edificios y áreas verdes"
      },
      {
        "en": "What I can't understand is why they canceled the project after investing so much money.",
        "es": "Lo que no puedo entender es por qué cancelaron el proyecto después de invertir tanto dinero.",
        "imagen": "Persona confundida frente a planos abandonados"
      },
      {
        "en": "It was only when I became a father that I understood my own parents.",
        "es": "Fue solo cuando me convertí en padre que entendí a mis propios papás.",
        "imagen": "Papá cargando a su bebé con emoción"
      },
      {
        "en": "What we decided to do was rent a small house by the lake instead of going to a crowded beach.",
        "es": "Lo que decidimos hacer fue rentar una casita junto al lago en vez de ir a una playa llena.",
        "imagen": "Casita de madera junto a un lago tranquilo"
      },
      {
        "en": "The person I admire most is my mother, who raised four children on her own.",
        "es": "La persona que más admiro es mi mamá, que crió sola a cuatro hijos.",
        "imagen": "Mamá con sus cuatro hijos adultos sonriendo"
      }
    ],
    "listening": [
      {
        "audio": "It was my brother who found the dog, not me.",
        "pregunta": "¿Quién encontró al perro?",
        "opciones": [
          "Su hermano",
          "La persona que habla",
          "Su mamá",
          "Un vecino"
        ]
      },
      {
        "audio": "What I need right now is a strong cup of coffee.",
        "pregunta": "¿Qué necesita?",
        "opciones": [
          "Un café cargado",
          "Dormir",
          "Comer algo",
          "Un descanso"
        ]
      },
      {
        "audio": "It was in Guadalajara that I saw my first mariachi concert.",
        "pregunta": "¿Dónde vio su primer concierto de mariachi?",
        "opciones": [
          "En Guadalajara",
          "En la Ciudad de México",
          "En Monterrey",
          "En Oaxaca"
        ]
      },
      {
        "audio": "What happened was that I forgot my keys inside the car.",
        "pregunta": "¿Qué pasó?",
        "opciones": [
          "Dejó las llaves dentro del carro",
          "Perdió el carro",
          "Le robaron las llaves",
          "Chocó"
        ]
      },
      {
        "audio": "All I want for my birthday is to spend the day with my family.",
        "pregunta": "¿Qué quiere para su cumpleaños?",
        "opciones": [
          "Pasar el día con su familia",
          "Un regalo caro",
          "Una fiesta",
          "Viajar"
        ]
      }
    ],
    "lectura": {
      "titulo": "What changed my life",
      "texto": "People often ask me how I became a chef. The truth is that it wasn't a cooking school that changed my life; it was a small accident. When I was nineteen, I was studying accounting, and what I wanted most was a stable job in a bank. Then my grandmother broke her arm, and someone had to cook for the family. It was me who volunteered, mostly because nobody else could. What happened next surprised everyone. I discovered that what I really loved wasn't numbers, but flavors. It was in my grandmother's kitchen, following her instructions while she sat on a chair, that I learned to make mole, tamales and pozole. The reason why my restaurant is successful today is not the decoration or the location; it's those recipes. What I try to do every day is cook the way she taught me: slowly, with love, and with good ingredients. All I hope is that she would be proud.",
      "preguntas": [
        {
          "pregunta": "¿Qué estudiaba el narrador a los diecinueve?",
          "opciones": [
            "Contabilidad",
            "Cocina",
            "Medicina",
            "Derecho"
          ]
        },
        {
          "pregunta": "¿Qué cambió su vida?",
          "opciones": [
            "Que su abuela se rompió el brazo y él cocinó",
            "Una escuela de cocina",
            "Un viaje",
            "Perder su trabajo"
          ]
        },
        {
          "pregunta": "¿Qué descubrió que amaba?",
          "opciones": [
            "Los sabores",
            "Los números",
            "Los bancos",
            "La decoración"
          ]
        },
        {
          "pregunta": "¿A qué atribuye el éxito de su restaurante?",
          "opciones": [
            "A las recetas de su abuela",
            "A la decoración",
            "A la ubicación",
            "A la publicidad"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Reescribe con It was … who.",
        "pregunta": "My sister called you. → It was my sister ___ called you.",
        "respuestas": [
          "who",
          "that"
        ]
      },
      {
        "instruccion": "Reescribe con It was … that.",
        "pregunta": "We met in Lima. → It was in Lima ___ we met.",
        "respuestas": [
          "that"
        ]
      },
      {
        "instruccion": "Reescribe con What.",
        "pregunta": "I need a break. → What I need ___ a break.",
        "respuestas": [
          "is"
        ]
      },
      {
        "instruccion": "Reescribe con What.",
        "pregunta": "The heat bothers me. → What bothers me is ___ heat.",
        "respuestas": [
          "the"
        ]
      },
      {
        "instruccion": "Completa con All.",
        "pregunta": "___ I want is a quiet weekend.",
        "respuestas": [
          "All"
        ]
      },
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "What ___ was that the bus didn't come. (pasó)",
        "respuestas": [
          "happened"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Lo que necesito es dormir.",
        "respuestas": [
          "What I need is to sleep",
          "What I need is sleep",
          "What I need is some sleep"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Fue mi mamá quien me enseñó.",
        "respuestas": [
          "It was my mother who taught me",
          "It was my mom who taught me",
          "It was my mother that taught me",
          "It was my mum who taught me"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Lo que importa es que estás bien.",
        "respuestas": [
          "What matters is that you're OK",
          "What matters is that you are OK",
          "What matters is that you're okay",
          "What matters is that you're fine",
          "What matters is that you're all right"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "What I need are more time.",
        "respuestas": [
          "What I need is more time"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "It was my father ___ built this house.",
        "opciones": [
          "who",
          "which",
          "what",
          "where"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ I need is a good night's sleep.",
        "opciones": [
          "What",
          "That",
          "Which",
          "It"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "It was in 2010 ___ they got married.",
        "opciones": [
          "that",
          "when it",
          "what",
          "who"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "All I want ___ to go home.",
        "opciones": [
          "is",
          "are",
          "be",
          "am"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«It wasn't me who called» significa:",
        "opciones": [
          "No fui yo quien llamó",
          "No me llamaron",
          "Yo llamé",
          "Nadie llamó"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The reason why I left ___ that I was bored.",
        "opciones": [
          "is",
          "was because",
          "it's",
          "being"
        ]
      },
      {
        "tipo": "listening",
        "audio": "What I love about this neighborhood is that everybody knows each other.",
        "pregunta": "¿Qué le encanta de la colonia?",
        "opciones": [
          "Que todos se conocen",
          "Que es tranquila",
          "Que es barata",
          "Que tiene parques"
        ]
      },
      {
        "tipo": "listening",
        "audio": "It wasn't the price that made me buy it; it was the color.",
        "pregunta": "¿Por qué lo compró?",
        "opciones": [
          "Por el color",
          "Por el precio",
          "Por la marca",
          "Por la calidad"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Lo que pasó fue que…",
        "respuestas": [
          "What happened was that",
          "What happened was"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: lo único que quiero es",
        "respuestas": [
          "all I want is"
        ]
      }
    ]
  },
  {
    "id": "c1-04",
    "num": 4,
    "titulo": "Oraciones de participio (Having finished…, Built in 1900…)",
    "contexto": "Escritura concisa",
    "explicacion": {
      "es": [
        "Las **oraciones de participio** permiten **acortar** dos oraciones con el mismo sujeto. Con **participio presente** (*-ing*) para acciones **simultáneas** o causas: ***Walking** home, I saw an accident.* (= *While I was walking home…*) ***Feeling** tired, she went to bed.* (= *Because she felt tired…*)",
        "Con ***Having*** + participio para una acción **anterior**: ***Having finished** his homework, he went out to play.* (Después de haber terminado la tarea, salió a jugar.)",
        "Con **participio pasado** para un sentido **pasivo**: ***Built** in 1900, the house is the oldest in the street.* (= *The house, which was built in 1900, …*) ***Written** in simple English, the book is easy to read.*",
        "También después de **conjunciones**: ***After** finishing…, **Before** leaving…, **While** waiting…, **When** asked…, **If** stored correctly…* Es un estilo **conciso** muy usado en textos escritos, noticias e informes."
      ],
      "tabla": {
        "columnas": [
          "Oración larga",
          "Oración de participio"
        ],
        "filas": [
          [
            "While I was walking home, I saw a fox.",
            "Walking home, I saw a fox."
          ],
          [
            "Because she felt sick, she stayed at home.",
            "Feeling sick, she stayed at home."
          ],
          [
            "After he had finished, he left.",
            "Having finished, he left."
          ],
          [
            "The bridge, which was built in 1890, is still used.",
            "Built in 1890, the bridge is still used."
          ],
          [
            "When they were asked, they refused to answer.",
            "When asked, they refused to answer."
          ]
        ]
      },
      "ojo": [
        "El sujeto de las dos partes **debe ser el mismo**. *Walking home, **the rain** started* ❌ (¡la lluvia no caminaba!). → *Walking home, **I** got caught in the rain* ✅.",
        "Negativo: ***Not*** al principio: ***Not knowing** what to do, I called my mother.* (Sin saber qué hacer…)",
        "***Having been*** + participio para pasivo anterior: ***Having been warned** about the traffic, we left early.*",
        "Es más **escrito** que hablado; en conversación usamos más *because, when, after*.",
        "Típico en noticias: ***Located** in the center, the museum… / **Founded** in 1910, the university…*"
      ],
      "en": [
        "Participle clauses make sentences shorter: Walking home, I saw an accident. Feeling tired, she went to bed.",
        "Having finished his homework, he went out to play.",
        "Built in 1900, the house is the oldest in the street.",
        "After finishing, before leaving, when asked."
      ]
    },
    "vocabulario": [
      {
        "en": "Walking home",
        "es": "caminando a casa",
        "imagen": "Persona caminando por una calle al atardecer",
        "ejemplo": [
          "Walking home, I saw an old friend.",
          "Caminando a casa, vi a un viejo amigo."
        ]
      },
      {
        "en": "Feeling tired",
        "es": "sintiéndose cansado",
        "imagen": "Persona bostezando camino a la cama",
        "ejemplo": [
          "Feeling tired, she went to bed early.",
          "Como se sentía cansada, se fue a dormir temprano."
        ]
      },
      {
        "en": "Having finished",
        "es": "después de haber terminado",
        "imagen": "Estudiante cerrando su cuaderno con satisfacción",
        "ejemplo": [
          "Having finished his homework, he went out to play.",
          "Después de terminar la tarea, salió a jugar."
        ]
      },
      {
        "en": "Built in 1900",
        "es": "construido en 1900",
        "imagen": "Casa antigua de cantera con fecha en la fachada",
        "ejemplo": [
          "Built in 1900, the house is the oldest in the street.",
          "Construida en 1900, la casa es la más antigua de la calle."
        ]
      },
      {
        "en": "Written in simple English",
        "es": "escrito en inglés sencillo",
        "imagen": "Libro abierto con ilustraciones claras",
        "ejemplo": [
          "Written in simple English, the book is easy to read.",
          "Escrito en inglés sencillo, el libro es fácil de leer."
        ]
      },
      {
        "en": "Not knowing what to do",
        "es": "sin saber qué hacer",
        "imagen": "Persona confundida frente a una puerta cerrada",
        "ejemplo": [
          "Not knowing what to do, I called my mother.",
          "Sin saber qué hacer, le llamé a mi mamá."
        ]
      },
      {
        "en": "When asked",
        "es": "cuando se le preguntó",
        "imagen": "Político frente a micrófonos sin responder",
        "ejemplo": [
          "When asked about the money, he refused to answer.",
          "Cuando le preguntaron por el dinero, se negó a responder."
        ]
      },
      {
        "en": "Located in the center",
        "es": "ubicado en el centro",
        "imagen": "Museo en una plaza del centro histórico",
        "ejemplo": [
          "Located in the city center, the museum is easy to reach.",
          "Ubicado en el centro, el museo es fácil de llegar."
        ]
      },
      {
        "en": "Founded in 1910",
        "es": "fundada en 1910",
        "imagen": "Edificio universitario antiguo con jardines",
        "ejemplo": [
          "Founded in 1910, the university is one of the oldest in the country.",
          "Fundada en 1910, la universidad es una de las más antiguas del país."
        ]
      },
      {
        "en": "After leaving school",
        "es": "después de dejar la escuela",
        "imagen": "Joven con mochila saliendo de una preparatoria",
        "ejemplo": [
          "After leaving school, she worked in a bakery.",
          "Después de dejar la escuela, trabajó en una panadería."
        ]
      },
      {
        "en": "Before signing",
        "es": "antes de firmar",
        "imagen": "Persona leyendo un contrato con atención",
        "ejemplo": [
          "Before signing the contract, read it carefully.",
          "Antes de firmar el contrato, léelo con cuidado."
        ]
      },
      {
        "en": "While waiting",
        "es": "mientras esperaba",
        "imagen": "Persona leyendo en una sala de espera",
        "ejemplo": [
          "While waiting for the doctor, I read a magazine.",
          "Mientras esperaba al doctor, leí una revista."
        ]
      },
      {
        "en": "Having lived abroad",
        "es": "habiendo vivido en el extranjero",
        "imagen": "Persona con maletas y sellos de pasaporte",
        "ejemplo": [
          "Having lived abroad for years, he speaks three languages.",
          "Habiendo vivido años en el extranjero, habla tres idiomas."
        ]
      },
      {
        "en": "Surrounded by mountains",
        "es": "rodeado de montañas",
        "imagen": "Pueblo en un valle rodeado de montañas",
        "ejemplo": [
          "Surrounded by mountains, the village is very peaceful.",
          "Rodeado de montañas, el pueblo es muy tranquilo."
        ]
      },
      {
        "en": "If stored correctly",
        "es": "si se almacena correctamente",
        "imagen": "Frascos de conservas en una alacena",
        "ejemplo": [
          "If stored correctly, the honey lasts for years.",
          "Si se almacena correctamente, la miel dura años."
        ]
      },
      {
        "en": "Having been warned",
        "es": "habiendo sido advertidos",
        "imagen": "Familia saliendo temprano con maletas antes de una tormenta",
        "ejemplo": [
          "Having been warned about the storm, we left early.",
          "Como nos habían advertido de la tormenta, salimos temprano."
        ]
      }
    ],
    "grupos": [
      {
        "id": "descripciones",
        "titulo": "Descripciones concisas",
        "icono": "🏛️",
        "patron": [
          "Built in…",
          "Located…",
          "Known as…"
        ],
        "palabras": [
          {
            "en": "Known as",
            "es": "conocido como",
            "imagen": "Ciudad colonial con edificios de cantera rosa",
            "ejemplo": [
              "Known as the pink city, Morelia is full of colonial buildings.",
              "Conocida como la ciudad rosa, Morelia está llena de edificios coloniales."
            ]
          },
          {
            "en": "Designed by",
            "es": "diseñado por",
            "imagen": "Casa moderna con colores intensos",
            "ejemplo": [
              "Designed by Luis Barragán, the house is now a museum.",
              "Diseñada por Luis Barragán, la casa es ahora un museo."
            ]
          },
          {
            "en": "Made from",
            "es": "hecho de",
            "imagen": "Artesanía de barro negro en un mercado",
            "ejemplo": [
              "Made from black clay, these pots are typical of Oaxaca.",
              "Hechas de barro negro, estas ollas son típicas de Oaxaca."
            ]
          },
          {
            "en": "Painted in bright colors",
            "es": "pintado con colores vivos",
            "imagen": "Casas de colores en una colina",
            "ejemplo": [
              "Painted in bright colors, the houses look beautiful from the sea.",
              "Pintadas con colores vivos, las casas se ven preciosas desde el mar."
            ]
          },
          {
            "en": "Situated on a hill",
            "es": "situado en una colina",
            "imagen": "Iglesia en lo alto de una colina",
            "ejemplo": [
              "Situated on a hill, the church has amazing views.",
              "Situada en una colina, la iglesia tiene vistas increíbles."
            ]
          },
          {
            "en": "Inspired by",
            "es": "inspirado en",
            "imagen": "Pintura inspirada en tradiciones mexicanas",
            "ejemplo": [
              "Inspired by Mexican traditions, the artist painted huge murals.",
              "Inspirado en tradiciones mexicanas, el artista pintó murales enormes."
            ]
          }
        ]
      },
      {
        "id": "acciones",
        "titulo": "Acciones en secuencia",
        "icono": "⏩",
        "patron": [
          "Having…, …",
          "After…-ing, …",
          "On arriving, …"
        ],
        "palabras": [
          {
            "en": "On arriving",
            "es": "al llegar",
            "imagen": "Viajero entrando a una estación con maleta",
            "ejemplo": [
              "On arriving at the station, we realized the train had left.",
              "Al llegar a la estación, nos dimos cuenta de que el tren se había ido."
            ]
          },
          {
            "en": "Having saved enough",
            "es": "habiendo ahorrado suficiente",
            "imagen": "Pareja recibiendo las llaves de su casa",
            "ejemplo": [
              "Having saved enough money, they bought a house.",
              "Después de ahorrar suficiente dinero, compraron una casa."
            ]
          },
          {
            "en": "Having lost his keys",
            "es": "habiendo perdido sus llaves",
            "imagen": "Hombre sentado frente a su puerta de noche",
            "ejemplo": [
              "Having lost his keys, he had to sleep at a friend's house.",
              "Como perdió sus llaves, tuvo que dormir en casa de un amigo."
            ]
          },
          {
            "en": "Opening the door",
            "es": "al abrir la puerta",
            "imagen": "Persona sorprendida abriendo una puerta",
            "ejemplo": [
              "Opening the door, she found a big surprise.",
              "Al abrir la puerta, encontró una gran sorpresa."
            ]
          },
          {
            "en": "Hearing the news",
            "es": "al oír la noticia",
            "imagen": "Persona emocionada al teléfono",
            "ejemplo": [
              "Hearing the news, everybody started to cry.",
              "Al oír la noticia, todos empezaron a llorar."
            ]
          },
          {
            "en": "Having graduated",
            "es": "después de graduarse",
            "imagen": "Graduada con su título frente a una empresa",
            "ejemplo": [
              "Having graduated in June, she started working in August.",
              "Después de graduarse en junio, empezó a trabajar en agosto."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Walking home, I saw an old friend.",
        "es": "Caminando a casa, vi a un viejo amigo."
      },
      {
        "en": "Feeling tired, she went to bed early.",
        "es": "Como se sentía cansada, se fue a dormir temprano."
      },
      {
        "en": "Having finished his homework, he went out to play.",
        "es": "Después de terminar la tarea, salió a jugar."
      },
      {
        "en": "Built in 1900, the house is the oldest in the street.",
        "es": "Construida en 1900, la casa es la más antigua de la calle."
      },
      {
        "en": "Not knowing what to do, I called my mother.",
        "es": "Sin saber qué hacer, le llamé a mi mamá."
      },
      {
        "en": "When asked about the money, he refused to answer.",
        "es": "Cuando le preguntaron por el dinero, se negó a responder."
      },
      {
        "en": "Before signing the contract, read it carefully.",
        "es": "Antes de firmar el contrato, léelo con cuidado."
      },
      {
        "en": "Having lived abroad for years, he speaks three languages.",
        "es": "Habiendo vivido años en el extranjero, habla tres idiomas."
      },
      {
        "en": "On arriving at the station, we realized the train had left.",
        "es": "Al llegar a la estación, nos dimos cuenta de que el tren se había ido."
      },
      {
        "en": "Hearing the news, everybody started to cry.",
        "es": "Al oír la noticia, todos empezaron a llorar."
      }
    ],
    "frases": [
      {
        "en": "Founded in 1551, the Royal University of Mexico was one of the first universities in the Americas.",
        "es": "Fundada en 1551, la Real Universidad de México fue una de las primeras universidades de América.",
        "imagen": "Edificio colonial universitario con patio central"
      },
      {
        "en": "Having worked as a waiter for ten years, he decided to open his own restaurant.",
        "es": "Después de trabajar diez años como mesero, decidió abrir su propio restaurante.",
        "imagen": "Hombre orgulloso en la puerta de su restaurante"
      },
      {
        "en": "Not wanting to wake the baby, they spoke in whispers all evening.",
        "es": "Como no querían despertar al bebé, hablaron en susurros toda la noche.",
        "imagen": "Pareja susurrando junto a una cuna"
      },
      {
        "en": "Located on the shores of Lake Pátzcuaro, the small island of Janitzio attracts thousands of visitors.",
        "es": "Ubicada en el lago de Pátzcuaro, la pequeña isla de Janitzio atrae a miles de visitantes.",
        "imagen": "Isla con una estatua enorme en medio de un lago"
      },
      {
        "en": "Having been delayed for three hours, the passengers were given free meals.",
        "es": "Como el vuelo se retrasó tres horas, a los pasajeros les dieron comida gratis.",
        "imagen": "Pasajeros recibiendo comida en una sala del aeropuerto"
      },
      {
        "en": "Looking out of the window, I noticed that it had started to snow.",
        "es": "Al mirar por la ventana, noté que había empezado a nevar.",
        "imagen": "Persona mirando la nieve caer por la ventana"
      },
      {
        "en": "Written more than four hundred years ago, the novel is still read all over the world.",
        "es": "Escrita hace más de cuatrocientos años, la novela se sigue leyendo en todo el mundo.",
        "imagen": "Libro antiguo con páginas amarillentas"
      },
      {
        "en": "After spending a week in the jungle, we were happy to sleep in a real bed again.",
        "es": "Después de pasar una semana en la selva, estábamos felices de volver a dormir en una cama de verdad.",
        "imagen": "Viajeros cansados llegando a una casa después de acampar"
      },
      {
        "en": "Having read the reviews, I decided not to buy the phone.",
        "es": "Después de leer las reseñas, decidí no comprar el celular.",
        "imagen": "Persona leyendo reseñas negativas en la laptop"
      },
      {
        "en": "Surprised by the sudden rain, people ran to find shelter.",
        "es": "Sorprendidas por la lluvia repentina, las personas corrieron a buscar refugio.",
        "imagen": "Personas corriendo bajo la lluvia hacia un portal"
      }
    ],
    "listening": [
      {
        "audio": "Having finished the exam early, she went for a coffee.",
        "pregunta": "¿Qué hizo después del examen?",
        "opciones": [
          "Fue por un café",
          "Se fue a casa",
          "Estudió más",
          "Esperó a sus amigos"
        ]
      },
      {
        "audio": "Built in the sixteenth century, the cathedral took more than two hundred years to finish.",
        "pregunta": "¿Cuánto tardaron en terminar la catedral?",
        "opciones": [
          "Más de doscientos años",
          "Dieciséis años",
          "Cien años",
          "Veinte años"
        ]
      },
      {
        "audio": "Not having a car, I had to take three buses to get to work.",
        "pregunta": "¿Cuántos camiones tomaba?",
        "opciones": [
          "Tres",
          "Uno",
          "Dos",
          "Cuatro"
        ]
      },
      {
        "audio": "When asked about his plans, the singer said he would take a long break.",
        "pregunta": "¿Qué planea el cantante?",
        "opciones": [
          "Tomar un descanso largo",
          "Sacar un disco",
          "Hacer una gira",
          "Retirarse para siempre"
        ]
      },
      {
        "audio": "Walking along the beach, we found a baby turtle trying to reach the sea.",
        "pregunta": "¿Qué encontraron?",
        "opciones": [
          "Una tortuga bebé",
          "Un cangrejo",
          "Una concha",
          "Un pez"
        ]
      }
    ],
    "lectura": {
      "titulo": "A historic building",
      "texto": "Located in the heart of Mexico City, the Palacio de Bellas Artes is one of the most beautiful buildings in the country. Designed by the Italian architect Adamo Boari, it was begun in 1904. Having started during the government of Porfirio Díaz, the project was interrupted by the Mexican Revolution and was not completed until 1934. Built mainly of white marble, the building is so heavy that it has sunk several meters into the soft ground of the city. Inside, visitors can admire famous murals painted by artists such as Diego Rivera, José Clemente Orozco and David Alfaro Siqueiros. Having been restored several times, the palace still hosts concerts, operas and ballet performances. Known for its impressive glass curtain made by Tiffany in New York, the main theater attracts thousands of people every year. Walking out of the building at sunset, many tourists stop to take photos of its golden dome.",
      "preguntas": [
        {
          "pregunta": "¿Quién diseñó el Palacio de Bellas Artes?",
          "opciones": [
            "Adamo Boari",
            "Diego Rivera",
            "Porfirio Díaz",
            "Tiffany"
          ]
        },
        {
          "pregunta": "¿Por qué se interrumpió la construcción?",
          "opciones": [
            "Por la Revolución Mexicana",
            "Por un terremoto",
            "Por falta de dinero",
            "Por una inundación"
          ]
        },
        {
          "pregunta": "¿Qué le pasó al edificio por su peso?",
          "opciones": [
            "Se ha hundido varios metros",
            "Se cayó",
            "Se agrietó",
            "Nada"
          ]
        },
        {
          "pregunta": "¿Qué es famoso en el teatro principal?",
          "opciones": [
            "Su telón de cristal hecho por Tiffany",
            "Su escenario giratorio",
            "Sus butacas de oro",
            "Su órgano"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Reescribe con una oración de participio.",
        "pregunta": "Because I felt sick, I stayed home. → ___ sick, I stayed home.",
        "respuestas": [
          "Feeling"
        ]
      },
      {
        "instruccion": "Reescribe con Having.",
        "pregunta": "After she had finished, she left. → ___ finished, she left.",
        "respuestas": [
          "Having"
        ]
      },
      {
        "instruccion": "Reescribe con participio pasado.",
        "pregunta": "The bridge, which was built in 1890, is old. → ___ in 1890, the bridge is old.",
        "respuestas": [
          "Built"
        ]
      },
      {
        "instruccion": "Completa con Not.",
        "pregunta": "___ knowing the answer, he stayed quiet.",
        "respuestas": [
          "Not"
        ]
      },
      {
        "instruccion": "Completa con -ing.",
        "pregunta": "While ___ (wait) for the bus, I read the news.",
        "respuestas": [
          "waiting"
        ]
      },
      {
        "instruccion": "Completa con el participio.",
        "pregunta": "When ___ (ask) about the accident, she started to cry.",
        "respuestas": [
          "asked"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Sin saber qué hacer, …",
        "respuestas": [
          "Not knowing what to do",
          "Not knowing what to do,"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Construido en 1900, …",
        "respuestas": [
          "Built in 1900",
          "Built in 1900,"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "antes de firmar",
        "respuestas": [
          "before signing"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "Having finish my work, I went home.",
        "respuestas": [
          "Having finished my work, I went home",
          "Having finished my work I went home"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "___ the door, she saw a strange man.",
        "opciones": [
          "Opening",
          "Opened",
          "Having open",
          "To open"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ his homework, he watched TV.",
        "opciones": [
          "Having finished",
          "Finishing been",
          "Finished having",
          "Have finished"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ in 1960, the stadium needs repairs.",
        "opciones": [
          "Built",
          "Building",
          "Having build",
          "Build"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ what to say, I stayed silent.",
        "opciones": [
          "Not knowing",
          "Knowing not",
          "Don't knowing",
          "No knowing"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es incorrecta (sujeto equivocado)?",
        "opciones": [
          "Walking to school, the rain started.",
          "Walking to school, I got wet.",
          "Feeling hungry, he ate a taco.",
          "Having lost my keys, I called a locksmith."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«When asked» significa:",
        "opciones": [
          "Cuando se le preguntó",
          "Cuando pregunta",
          "Cuando pidió",
          "Cuando contestó"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Having lived in Japan for five years, my cousin speaks Japanese fluently.",
        "pregunta": "¿Por qué habla japonés con fluidez?",
        "opciones": [
          "Vivió cinco años en Japón",
          "Lo estudió en la escuela",
          "Su mamá es japonesa",
          "Ve anime"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Surrounded by forests, the cabin is the perfect place to relax.",
        "pregunta": "¿Qué rodea la cabaña?",
        "opciones": [
          "Bosques",
          "El mar",
          "Montañas nevadas",
          "Edificios"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Después de terminar, se fue.",
        "respuestas": [
          "Having finished, he left",
          "Having finished, she left",
          "After finishing, he left",
          "After finishing, she left"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: mientras esperaba",
        "respuestas": [
          "while waiting",
          "while I was waiting"
        ]
      }
    ]
  },
  {
    "id": "c1-05",
    "num": 5,
    "titulo": "Pasiva avanzada (infinitivo y gerundio pasivos, get pasivo)",
    "contexto": "Textos formales",
    "explicacion": {
      "es": [
        "El **infinitivo pasivo** es ***to be*** + participio. Se usa después de verbos como ***want, expect, need, hope, would like***: *I don't **want to be disturbed**.* (No quiero que me molesten.) *The work **needs to be finished** by Friday.*",
        "El **infinitivo pasivo perfecto** (***to have been*** + participio) habla de algo **anterior**: *She **is said to have been born** in a small village.* *He **claims to have been robbed**.*",
        "El **gerundio pasivo** es ***being*** + participio. Se usa después de verbos o preposiciones que piden *-ing*: *I hate **being told** what to do.* (Odio que me digan qué hacer.) *She's afraid of **being left** alone.* ***Having been*** + participio para algo anterior: *After **having been interviewed** three times, he got the job.*",
        "La **pasiva con *get*** (*get* + participio) es **informal** y suele indicar algo **inesperado o negativo**: *He **got fired** last week. Our car **got stolen**. They **got married** in June.*"
      ],
      "tabla": {
        "columnas": [
          "Forma",
          "Ejemplo",
          "Significado"
        ],
        "filas": [
          [
            "to be + participio",
            "I want to be informed.",
            "Quiero que me informen."
          ],
          [
            "to have been + participio",
            "He seems to have been injured.",
            "Parece que lo lastimaron."
          ],
          [
            "being + participio",
            "I don't like being ignored.",
            "No me gusta que me ignoren."
          ],
          [
            "having been + participio",
            "Having been warned, we left.",
            "Como nos advirtieron, nos fuimos."
          ],
          [
            "get + participio",
            "She got promoted.",
            "La ascendieron."
          ]
        ]
      },
      "ojo": [
        "Muchas veces el español usa una **oración con *que***: *I hate **being interrupted*** = Odio **que me interrumpan**.",
        "Después de *need* también se usa ***-ing*** con sentido pasivo: *The car **needs washing*** = *The car **needs to be washed***.",
        "La pasiva con *get* **no** se usa con verbos de estado: *He **got killed** in an accident* ✅, pero no *The answer got known* ❌.",
        "En textos formales: ***It is essential for the form to be completed…*** / ***Applicants expect to be contacted within ten days.***",
        "Expresiones útiles con *get*: ***get paid, get hurt, get lost, get caught, get dressed, get invited, get elected***."
      ],
      "en": [
        "The passive infinitive is to be plus participle: I don't want to be disturbed. The work needs to be finished by Friday.",
        "She is said to have been born in a small village.",
        "The passive gerund is being plus participle: I hate being told what to do.",
        "The get passive is informal: He got fired. Our car got stolen."
      ]
    },
    "vocabulario": [
      {
        "en": "I don't want to be disturbed.",
        "es": "no quiero que me molesten",
        "imagen": "Persona con un letrero de no molestar en la puerta, sin texto",
        "ejemplo": [
          "I'm working. I don't want to be disturbed.",
          "Estoy trabajando. No quiero que me molesten."
        ]
      },
      {
        "en": "It needs to be finished.",
        "es": "tiene que terminarse",
        "imagen": "Persona apurada con un proyecto y un calendario",
        "ejemplo": [
          "The report needs to be finished by Friday.",
          "El reporte tiene que terminarse para el viernes."
        ]
      },
      {
        "en": "I hate being told what to do.",
        "es": "odio que me digan qué hacer",
        "imagen": "Adolescente cruzado de brazos frente a su mamá",
        "ejemplo": [
          "I hate being told what to do.",
          "Odio que me digan qué hacer."
        ]
      },
      {
        "en": "afraid of being left alone",
        "es": "con miedo a que lo dejen solo",
        "imagen": "Perro mirando por la ventana triste",
        "ejemplo": [
          "My dog is afraid of being left alone.",
          "A mi perro le da miedo que lo dejen solo."
        ]
      },
      {
        "en": "He got fired.",
        "es": "lo corrieron",
        "imagen": "Hombre saliendo de una oficina con una caja",
        "ejemplo": [
          "He got fired for arriving late every day.",
          "Lo corrieron por llegar tarde todos los días."
        ]
      },
      {
        "en": "Our car got stolen.",
        "es": "nos robaron el carro",
        "imagen": "Lugar de estacionamiento vacío con vidrios en el piso",
        "ejemplo": [
          "Our car got stolen last night.",
          "Anoche nos robaron el carro."
        ]
      },
      {
        "en": "She got promoted.",
        "es": "la ascendieron",
        "imagen": "Mujer recibiendo felicitaciones en la oficina",
        "ejemplo": [
          "She got promoted to manager last month.",
          "La ascendieron a gerente el mes pasado."
        ]
      },
      {
        "en": "She is said to have been born",
        "es": "se dice que nació",
        "imagen": "Pueblo pequeño con una casa natal",
        "ejemplo": [
          "She is said to have been born in a small village.",
          "Se dice que nació en un pueblito."
        ]
      },
      {
        "en": "I expect to be paid",
        "es": "espero que me paguen",
        "imagen": "Persona revisando su cuenta bancaria",
        "ejemplo": [
          "I expect to be paid on time.",
          "Espero que me paguen a tiempo."
        ]
      },
      {
        "en": "being interviewed",
        "es": "ser entrevistado",
        "imagen": "Candidato nervioso frente a un panel",
        "ejemplo": [
          "I don't like being interviewed on camera.",
          "No me gusta que me entrevisten frente a la cámara."
        ]
      },
      {
        "en": "Having been warned",
        "es": "habiendo sido advertidos",
        "imagen": "Personas saliendo de una zona con una alerta",
        "ejemplo": [
          "Having been warned about the storm, we stayed home.",
          "Como nos advirtieron de la tormenta, nos quedamos en casa."
        ]
      },
      {
        "en": "to be informed",
        "es": "ser informado",
        "imagen": "Persona leyendo una notificación en su celular",
        "ejemplo": [
          "I'd like to be informed of any changes.",
          "Me gustaría que me informaran de cualquier cambio."
        ]
      },
      {
        "en": "He got hurt.",
        "es": "se lastimó",
        "imagen": "Jugador en el pasto sujetándose la rodilla",
        "ejemplo": [
          "He got hurt during the game.",
          "Se lastimó durante el partido."
        ]
      },
      {
        "en": "They got married.",
        "es": "se casaron",
        "imagen": "Pareja recién casada saliendo de una iglesia",
        "ejemplo": [
          "They got married in a small church in Oaxaca.",
          "Se casaron en una pequeña iglesia de Oaxaca."
        ]
      },
      {
        "en": "to have been injured",
        "es": "haber resultado herido",
        "imagen": "Ambulancia en el lugar de un accidente",
        "ejemplo": [
          "He seems to have been injured in the accident.",
          "Parece que resultó herido en el accidente."
        ]
      },
      {
        "en": "I appreciate being asked",
        "es": "agradezco que me pregunten",
        "imagen": "Persona sonriendo en una reunión al ser consultada",
        "ejemplo": [
          "I appreciate being asked for my opinion.",
          "Agradezco que me pidan mi opinión."
        ]
      }
    ],
    "grupos": [
      {
        "id": "get",
        "titulo": "Pasiva con get",
        "icono": "🔄",
        "patron": [
          "got caught",
          "got lost",
          "got paid"
        ],
        "palabras": [
          {
            "en": "got caught",
            "es": "lo atraparon",
            "imagen": "Ladrón siendo detenido por un policía",
            "ejemplo": [
              "The thief got caught by the police.",
              "Atraparon al ladrón."
            ]
          },
          {
            "en": "got lost",
            "es": "se perdió",
            "imagen": "Turista confundido con un mapa",
            "ejemplo": [
              "We got lost in the old part of the city.",
              "Nos perdimos en el centro histórico."
            ]
          },
          {
            "en": "got paid",
            "es": "le pagaron",
            "imagen": "Persona feliz revisando su sueldo",
            "ejemplo": [
              "I got paid yesterday.",
              "Ayer me pagaron."
            ]
          },
          {
            "en": "got invited",
            "es": "lo invitaron",
            "imagen": "Persona recibiendo una invitación elegante",
            "ejemplo": [
              "I got invited to a wedding in Cancun.",
              "Me invitaron a una boda en Cancún."
            ]
          },
          {
            "en": "got elected",
            "es": "fue elegido",
            "imagen": "Candidato celebrando con sus seguidores",
            "ejemplo": [
              "She got elected mayor of her town.",
              "Fue elegida alcaldesa de su pueblo."
            ]
          },
          {
            "en": "got damaged",
            "es": "se dañó",
            "imagen": "Carro con el parabrisas roto por granizo",
            "ejemplo": [
              "My car got damaged in the hailstorm.",
              "Mi carro se dañó con el granizo."
            ]
          }
        ]
      },
      {
        "id": "sentimientos",
        "titulo": "Lo que nos gusta que nos hagan",
        "icono": "💭",
        "patron": [
          "I love being…",
          "I hate being…",
          "Nobody likes being…"
        ],
        "palabras": [
          {
            "en": "being ignored",
            "es": "que te ignoren",
            "imagen": "Persona hablando sola mientras otros miran el celular",
            "ejemplo": [
              "Nobody likes being ignored.",
              "A nadie le gusta que lo ignoren."
            ]
          },
          {
            "en": "being interrupted",
            "es": "que te interrumpan",
            "imagen": "Persona molesta mientras otra le habla encima",
            "ejemplo": [
              "I hate being interrupted when I'm speaking.",
              "Odio que me interrumpan cuando hablo."
            ]
          },
          {
            "en": "being praised",
            "es": "que te elogien",
            "imagen": "Empleado recibiendo aplausos de su equipo",
            "ejemplo": [
              "Everybody enjoys being praised for good work.",
              "A todos les gusta que los elogien por un buen trabajo."
            ]
          },
          {
            "en": "being lied to",
            "es": "que te mientan",
            "imagen": "Persona desconfiada frente a otra",
            "ejemplo": [
              "I can't stand being lied to.",
              "No soporto que me mientan."
            ]
          },
          {
            "en": "being treated fairly",
            "es": "que te traten con justicia",
            "imagen": "Juez escuchando a dos personas",
            "ejemplo": [
              "Workers want to be treated fairly.",
              "Los trabajadores quieren que los traten con justicia."
            ]
          },
          {
            "en": "being surprised",
            "es": "que te sorprendan",
            "imagen": "Persona sorprendida en una fiesta sorpresa",
            "ejemplo": [
              "I love being surprised on my birthday.",
              "Me encanta que me sorprendan en mi cumpleaños."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I'm working. I don't want to be disturbed.",
        "es": "Estoy trabajando. No quiero que me molesten."
      },
      {
        "en": "The report needs to be finished by Friday.",
        "es": "El reporte tiene que terminarse para el viernes."
      },
      {
        "en": "I hate being told what to do.",
        "es": "Odio que me digan qué hacer."
      },
      {
        "en": "He got fired for arriving late every day.",
        "es": "Lo corrieron por llegar tarde todos los días."
      },
      {
        "en": "Our car got stolen last night.",
        "es": "Anoche nos robaron el carro."
      },
      {
        "en": "She is said to have been born in a small village.",
        "es": "Se dice que nació en un pueblito."
      },
      {
        "en": "I'd like to be informed of any changes.",
        "es": "Me gustaría que me informaran de cualquier cambio."
      },
      {
        "en": "Having been warned about the storm, we stayed home.",
        "es": "Como nos advirtieron de la tormenta, nos quedamos en casa."
      },
      {
        "en": "Nobody likes being ignored.",
        "es": "A nadie le gusta que lo ignoren."
      },
      {
        "en": "The thief got caught by the police.",
        "es": "Atraparon al ladrón."
      }
    ],
    "frases": [
      {
        "en": "All applications need to be submitted online before the end of the month.",
        "es": "Todas las solicitudes deben enviarse en línea antes de fin de mes.",
        "imagen": "Persona enviando una solicitud desde su laptop"
      },
      {
        "en": "The singer is believed to have been inspired by her grandmother's songs.",
        "es": "Se cree que la cantante se inspiró en las canciones de su abuela.",
        "imagen": "Cantante joven con una foto de su abuela"
      },
      {
        "en": "I really hate being kept waiting, especially when I've arrived on time.",
        "es": "Odio de verdad que me hagan esperar, sobre todo cuando yo llegué puntual.",
        "imagen": "Persona impaciente mirando su reloj en una oficina"
      },
      {
        "en": "Having been rejected by three publishers, the book finally became a bestseller.",
        "es": "Tras haber sido rechazado por tres editoriales, el libro finalmente se volvió un éxito de ventas.",
        "imagen": "Escritor firmando libros en una librería llena"
      },
      {
        "en": "My brother got caught cheating on the exam, so he has to repeat the course.",
        "es": "A mi hermano lo cacharon copiando en el examen, así que tiene que repetir el curso.",
        "imagen": "Maestro descubriendo un acordeón en un examen"
      },
      {
        "en": "The documents are expected to be signed by both parties next week.",
        "es": "Se espera que ambas partes firmen los documentos la próxima semana.",
        "imagen": "Dos personas firmando documentos en una mesa"
      },
      {
        "en": "Children usually love being read to before they go to sleep.",
        "es": "A los niños normalmente les encanta que les lean antes de dormir.",
        "imagen": "Papá leyendo un cuento a sus hijos en la cama"
      },
      {
        "en": "The old bridge is going to be replaced, as it seems to have been damaged by the earthquake.",
        "es": "Van a reemplazar el puente viejo, ya que parece que el sismo lo dañó.",
        "imagen": "Puente con grietas y señales de cierre"
      },
      {
        "en": "She got promoted after only one year, which surprised everybody in the office.",
        "es": "La ascendieron después de solo un año, lo cual sorprendió a todos en la oficina.",
        "imagen": "Mujer celebrando su ascenso con colegas"
      },
      {
        "en": "I appreciate being given the chance to explain my point of view.",
        "es": "Agradezco que me den la oportunidad de explicar mi punto de vista.",
        "imagen": "Persona hablando con calma en una junta"
      }
    ],
    "listening": [
      {
        "audio": "I don't want to be disturbed until three o'clock. I have an important call.",
        "pregunta": "¿Hasta qué hora no quiere que lo molesten?",
        "opciones": [
          "Hasta las tres",
          "Hasta las dos",
          "Toda la tarde",
          "Hasta las cinco"
        ]
      },
      {
        "audio": "My sister got promoted, so we're having a party on Saturday.",
        "pregunta": "¿Por qué hacen una fiesta?",
        "opciones": [
          "Ascendieron a su hermana",
          "Es su cumpleaños",
          "Se casó",
          "Se graduó"
        ]
      },
      {
        "audio": "He hates being photographed, so he always hides when we take pictures.",
        "pregunta": "¿Qué odia?",
        "opciones": [
          "Que le tomen fotos",
          "Que le hablen",
          "Que lo ignoren",
          "Que lo interrumpan"
        ]
      },
      {
        "audio": "The car needs to be repaired before we can drive to the beach.",
        "pregunta": "¿Qué necesita el carro?",
        "opciones": [
          "Que lo reparen",
          "Que lo laven",
          "Gasolina",
          "Llantas nuevas"
        ]
      },
      {
        "audio": "We got lost on the way to the party and arrived two hours late.",
        "pregunta": "¿Por qué llegaron tarde?",
        "opciones": [
          "Se perdieron",
          "Había tráfico",
          "El carro se descompuso",
          "Salieron tarde"
        ]
      }
    ],
    "lectura": {
      "titulo": "Customer complaint",
      "texto": "Dear Customer Service Manager, I am writing to complain about the service I received at your store on the fifth of March. I had ordered a refrigerator, which was expected to be delivered between nine and twelve. However, I was kept waiting all day, and nobody informed me of the delay. When I called the store, I was told that the order seemed to have been lost. I do not appreciate being treated in this way, especially as I had taken a day off work to receive it. Having been promised a new delivery date, I waited again on the seventh, and the refrigerator finally arrived, but it had been damaged during transport. I would like the refrigerator to be replaced as soon as possible, and I expect to be compensated for the two days of work I have lost. I hope this matter will be dealt with quickly. Should you require any further information, please contact me. Yours faithfully, Ricardo Gómez.",
      "preguntas": [
        {
          "pregunta": "¿Qué había pedido Ricardo?",
          "opciones": [
            "Un refrigerador",
            "Una lavadora",
            "Una televisión",
            "Una estufa"
          ]
        },
        {
          "pregunta": "¿Qué le dijeron por teléfono?",
          "opciones": [
            "Que el pedido parecía haberse perdido",
            "Que ya iba en camino",
            "Que se había cancelado",
            "Que no tenían refrigeradores"
          ]
        },
        {
          "pregunta": "¿En qué estado llegó el refrigerador?",
          "opciones": [
            "Dañado",
            "Perfecto",
            "Incompleto",
            "Sucio"
          ]
        },
        {
          "pregunta": "¿Qué pide Ricardo?",
          "opciones": [
            "Que le cambien el refrigerador y lo compensen",
            "Su dinero de vuelta",
            "Una disculpa por escrito",
            "Hablar con el gerente"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con el infinitivo pasivo.",
        "pregunta": "I want ___ (inform) about the results.",
        "respuestas": [
          "to be informed"
        ]
      },
      {
        "instruccion": "Completa con el gerundio pasivo.",
        "pregunta": "I hate ___ (interrupt).",
        "respuestas": [
          "being interrupted"
        ]
      },
      {
        "instruccion": "Completa con get pasivo.",
        "pregunta": "He ___ (fire) last week.",
        "respuestas": [
          "got fired"
        ]
      },
      {
        "instruccion": "Completa con el infinitivo pasivo.",
        "pregunta": "The form needs ___ (sign) by your parents.",
        "respuestas": [
          "to be signed"
        ]
      },
      {
        "instruccion": "Completa con el infinitivo pasivo perfecto.",
        "pregunta": "He seems ___ (injure) in the accident.",
        "respuestas": [
          "to have been injured"
        ]
      },
      {
        "instruccion": "Completa con el gerundio pasivo.",
        "pregunta": "Nobody likes ___ (ignore).",
        "respuestas": [
          "being ignored"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "No quiero que me molesten.",
        "respuestas": [
          "I don't want to be disturbed",
          "I do not want to be disturbed",
          "I don't want to be bothered"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Nos robaron el carro.",
        "respuestas": [
          "Our car got stolen",
          "Our car was stolen",
          "We had our car stolen"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Odio que me mientan.",
        "respuestas": [
          "I hate being lied to"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I don't like be told what to do.",
        "respuestas": [
          "I don't like being told what to do",
          "I don't like to be told what to do"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "I'd like ___ when the package arrives.",
        "opciones": [
          "to be told",
          "being told",
          "to tell",
          "be told"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She hates ___ in public.",
        "opciones": [
          "being criticized",
          "to criticize",
          "criticizing",
          "be criticized"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "My phone ___ on the bus.",
        "opciones": [
          "got stolen",
          "got steal",
          "was stealing",
          "get stolen yesterday"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The thief is believed ___ the country.",
        "opciones": [
          "to have left",
          "to leave yesterday",
          "having left",
          "left"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«I appreciate being asked» significa:",
        "opciones": [
          "Agradezco que me pregunten",
          "Me gusta preguntar",
          "Aprecio las preguntas",
          "Pregunto mucho"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The house needs ___.",
        "opciones": [
          "painting",
          "to paint",
          "being paint",
          "painted"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The new employees expect to be trained during their first week.",
        "pregunta": "¿Qué esperan los empleados nuevos?",
        "opciones": [
          "Que los capaciten la primera semana",
          "Que les paguen más",
          "Que los asciendan",
          "Tener vacaciones"
        ]
      },
      {
        "tipo": "listening",
        "audio": "My grandfather got hurt when he fell off a ladder, but he's fine now.",
        "pregunta": "¿Cómo se lastimó el abuelo?",
        "opciones": [
          "Se cayó de una escalera",
          "En un accidente de carro",
          "Jugando fútbol",
          "En el trabajo"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: La ascendieron.",
        "respuestas": [
          "She got promoted",
          "She was promoted"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Tiene que terminarse hoy.",
        "respuestas": [
          "It needs to be finished today",
          "It has to be finished today",
          "It must be finished today"
        ]
      }
    ]
  },
  {
    "id": "c1-06",
    "num": 6,
    "titulo": "Needn't have vs. didn't need to; usos avanzados de modales",
    "contexto": "Matices de obligación",
    "explicacion": {
      "es": [
        "***Didn't need to*** + verbo = **no era necesario** hacerlo, y normalmente **no lo hicimos**: *I **didn't need to** buy bread, so I went straight home.* (No tuve que comprar pan.)",
        "***Needn't have*** + participio = **no era necesario, pero lo hicimos** (fue un esfuerzo inútil): *I **needn't have bought** bread. There was plenty at home.* (No tenía que haber comprado pan; había mucho.)",
        "Otros matices: ***be supposed to*** (se supone que, obligación esperada): *You**'re supposed to** wear a helmet.* ***Be bound to*** (seguro que va a): *It**'s bound to** rain.* ***Be to*** (instrucciones oficiales o planes formales): *All visitors **are to** report to reception.*",
        "***Was / were supposed to*** expresa algo que **debía pasar pero no pasó**: *The train **was supposed to** arrive at eight.* ***Ought to*** = *should*, un poco más formal: *You **ought to** apologize.*"
      ],
      "tabla": {
        "columnas": [
          "Forma",
          "Significado",
          "Ejemplo"
        ],
        "filas": [
          [
            "didn't need to + verbo",
            "no era necesario (y no lo hice)",
            "I didn't need to wait."
          ],
          [
            "needn't have + participio",
            "no era necesario (pero lo hice)",
            "You needn't have waited for me."
          ],
          [
            "be supposed to",
            "se supone que",
            "We're supposed to be there at six."
          ],
          [
            "was supposed to",
            "debía (pero no pasó)",
            "He was supposed to call me."
          ],
          [
            "be bound to",
            "seguro que",
            "Prices are bound to go up."
          ],
          [
            "be to",
            "instrucción oficial / plan",
            "The president is to visit the city."
          ]
        ]
      },
      "ojo": [
        "*You **needn't have cooked**!* = cocinaste, pero no hacía falta (a menudo es amable: «no te hubieras molestado»).",
        "*Didn't need to* también puede usarse cuando **sí** se hizo, si el contexto lo aclara, pero *needn't have* siempre implica que se hizo.",
        "***Be supposed to*** también expresa reputación: *This restaurant **is supposed to be** the best in town.* (Dicen que es el mejor.)",
        "***Be to*** suena muy **formal**, típico de noticias y reglamentos: *Students **are not to** use phones during the exam.*",
        "***Be allowed to*** (tener permiso) ≠ ***be supposed to*** (deber, según las reglas o lo esperado)."
      ],
      "en": [
        "Didn't need to means it wasn't necessary, and usually we didn't do it: I didn't need to buy bread.",
        "Needn't have means it wasn't necessary, but we did it: I needn't have bought bread.",
        "Be supposed to, be bound to, be to: You're supposed to wear a helmet. It's bound to rain.",
        "The train was supposed to arrive at eight."
      ]
    },
    "vocabulario": [
      {
        "en": "I didn't need to buy bread.",
        "es": "no tuve que comprar pan",
        "imagen": "Persona pasando de largo frente a una panadería",
        "ejemplo": [
          "I didn't need to buy bread, so I went straight home.",
          "No tuve que comprar pan, así que me fui directo a casa."
        ]
      },
      {
        "en": "I needn't have bought bread.",
        "es": "no tenía que haber comprado pan",
        "imagen": "Cocina con dos bolsas de pan repetidas",
        "ejemplo": [
          "I needn't have bought bread. There was plenty at home.",
          "No tenía que haber comprado pan. Había mucho en casa."
        ]
      },
      {
        "en": "You needn't have waited.",
        "es": "no tenías que haber esperado",
        "imagen": "Persona esperando en la puerta tarde en la noche",
        "ejemplo": [
          "You needn't have waited for me. I had a key.",
          "No tenías que haberme esperado. Tenía llave."
        ]
      },
      {
        "en": "You needn't have brought anything.",
        "es": "no te hubieras molestado",
        "imagen": "Anfitriona recibiendo un regalo con sorpresa",
        "ejemplo": [
          "Thank you! You needn't have brought anything.",
          "¡Gracias! No te hubieras molestado."
        ]
      },
      {
        "en": "You're supposed to wear a helmet.",
        "es": "se supone que debes usar casco",
        "imagen": "Ciclista con casco en una ciclovía",
        "ejemplo": [
          "You're supposed to wear a helmet on a motorbike.",
          "Se supone que debes usar casco en una moto."
        ]
      },
      {
        "en": "He was supposed to call me.",
        "es": "se suponía que me iba a llamar",
        "imagen": "Persona esperando una llamada que no llega",
        "ejemplo": [
          "He was supposed to call me, but he didn't.",
          "Se suponía que me iba a llamar, pero no lo hizo."
        ]
      },
      {
        "en": "It's bound to rain.",
        "es": "seguro que va a llover",
        "imagen": "Nubes negras sobre la ciudad",
        "ejemplo": [
          "Take an umbrella. It's bound to rain.",
          "Lleva paraguas. Seguro que va a llover."
        ]
      },
      {
        "en": "Prices are bound to go up.",
        "es": "seguro que suben los precios",
        "imagen": "Gráfica subiendo con monedas",
        "ejemplo": [
          "Prices are bound to go up next year.",
          "Seguro que los precios suben el próximo año."
        ]
      },
      {
        "en": "All visitors are to report to reception.",
        "es": "todos los visitantes deben presentarse en recepción",
        "imagen": "Recepción de un edificio con visitantes registrándose",
        "ejemplo": [
          "All visitors are to report to reception.",
          "Todos los visitantes deben presentarse en recepción."
        ]
      },
      {
        "en": "The president is to visit the city.",
        "es": "el presidente visitará la ciudad",
        "imagen": "Plaza preparada con escenario y banderas",
        "ejemplo": [
          "The president is to visit the city next week.",
          "El presidente visitará la ciudad la próxima semana."
        ]
      },
      {
        "en": "You ought to apologize.",
        "es": "deberías disculparte",
        "imagen": "Persona aconsejando a un amigo con seriedad",
        "ejemplo": [
          "You ought to apologize to your sister.",
          "Deberías disculparte con tu hermana."
        ]
      },
      {
        "en": "We didn't have to wait.",
        "es": "no tuvimos que esperar",
        "imagen": "Personas entrando directo a un museo sin fila",
        "ejemplo": [
          "We didn't have to wait. There was no line.",
          "No tuvimos que esperar. No había fila."
        ]
      },
      {
        "en": "It's supposed to be the best.",
        "es": "dicen que es el mejor",
        "imagen": "Restaurante con fila de clientes afuera",
        "ejemplo": [
          "This restaurant is supposed to be the best in town.",
          "Dicen que este restaurante es el mejor de la ciudad."
        ]
      },
      {
        "en": "Students are not to use phones.",
        "es": "los alumnos no deben usar celulares",
        "imagen": "Salón de examen con celulares guardados en una caja",
        "ejemplo": [
          "Students are not to use phones during the exam.",
          "Los alumnos no deben usar celulares durante el examen."
        ]
      },
      {
        "en": "You needn't worry.",
        "es": "no tienes por qué preocuparte",
        "imagen": "Doctora tranquilizando a un paciente",
        "ejemplo": [
          "You needn't worry. It's nothing serious.",
          "No tienes por qué preocuparte. No es nada grave."
        ]
      },
      {
        "en": "We were supposed to leave at six.",
        "es": "se suponía que saldríamos a las seis",
        "imagen": "Familia todavía haciendo maletas a las siete",
        "ejemplo": [
          "We were supposed to leave at six, but we're still packing.",
          "Se suponía que saldríamos a las seis, pero todavía estamos empacando."
        ]
      }
    ],
    "grupos": [
      {
        "id": "esfuerzo",
        "titulo": "Esfuerzos innecesarios",
        "icono": "😅",
        "patron": [
          "You needn't have…",
          "I needn't have…",
          "There was no need to…"
        ],
        "palabras": [
          {
            "en": "I needn't have worried.",
            "es": "no tenía por qué haberme preocupado",
            "imagen": "Persona aliviada leyendo buenos resultados",
            "ejemplo": [
              "I needn't have worried. The exam was easy.",
              "No tenía por qué haberme preocupado. El examen estuvo fácil."
            ]
          },
          {
            "en": "I needn't have hurried.",
            "es": "no tenía que haberme apurado",
            "imagen": "Persona llegando corriendo a una junta vacía",
            "ejemplo": [
              "I needn't have hurried. The meeting started late.",
              "No tenía que haberme apurado. La junta empezó tarde."
            ]
          },
          {
            "en": "You needn't have cooked so much.",
            "es": "no tenías que haber cocinado tanto",
            "imagen": "Mesa llena de comida con pocos invitados",
            "ejemplo": [
              "You needn't have cooked so much. There are only four of us.",
              "No tenías que haber cocinado tanto. Somos solo cuatro."
            ]
          },
          {
            "en": "There was no need to",
            "es": "no había necesidad de",
            "imagen": "Persona con paraguas en un día soleado",
            "ejemplo": [
              "There was no need to bring an umbrella.",
              "No había necesidad de traer paraguas."
            ]
          },
          {
            "en": "I needn't have booked.",
            "es": "no tenía que haber reservado",
            "imagen": "Restaurante casi vacío",
            "ejemplo": [
              "I needn't have booked a table. The restaurant was empty.",
              "No tenía que haber reservado mesa. El restaurante estaba vacío."
            ]
          },
          {
            "en": "It was unnecessary",
            "es": "fue innecesario",
            "imagen": "Persona cargando una maleta enorme para un viaje corto",
            "ejemplo": [
              "Taking such a big suitcase was unnecessary.",
              "Llevar una maleta tan grande fue innecesario."
            ]
          }
        ]
      },
      {
        "id": "reglas",
        "titulo": "Reglas y expectativas",
        "icono": "📏",
        "patron": [
          "You're supposed to…",
          "You're not allowed to…",
          "…is to…"
        ],
        "palabras": [
          {
            "en": "You're not allowed to",
            "es": "no tienes permiso de",
            "imagen": "Señal de prohibido fumar en un hospital",
            "ejemplo": [
              "You're not allowed to smoke in the hospital.",
              "No se permite fumar en el hospital."
            ]
          },
          {
            "en": "You're supposed to",
            "es": "se supone que",
            "imagen": "Persona separando basura en botes de colores",
            "ejemplo": [
              "You're supposed to separate the garbage.",
              "Se supone que debes separar la basura."
            ]
          },
          {
            "en": "It's compulsory",
            "es": "es obligatorio",
            "imagen": "Estudiantes con uniforme en la escuela",
            "ejemplo": [
              "Wearing a uniform is compulsory.",
              "Usar uniforme es obligatorio."
            ]
          },
          {
            "en": "It's optional",
            "es": "es opcional",
            "imagen": "Persona eligiendo actividades en una lista",
            "ejemplo": [
              "The trip is optional. You don't have to go.",
              "El viaje es opcional. No tienes que ir."
            ]
          },
          {
            "en": "You're expected to",
            "es": "se espera que",
            "imagen": "Empleado llegando puntual a la oficina",
            "ejemplo": [
              "You're expected to arrive on time.",
              "Se espera que llegues puntual."
            ]
          },
          {
            "en": "It's forbidden",
            "es": "está prohibido",
            "imagen": "Señal roja de prohibido en un museo",
            "ejemplo": [
              "It's forbidden to take photos with flash.",
              "Está prohibido tomar fotos con flash."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I didn't need to buy bread, so I went straight home.",
        "es": "No tuve que comprar pan, así que me fui directo a casa."
      },
      {
        "en": "I needn't have bought bread. There was plenty at home.",
        "es": "No tenía que haber comprado pan. Había mucho en casa."
      },
      {
        "en": "Thank you! You needn't have brought anything.",
        "es": "¡Gracias! No te hubieras molestado."
      },
      {
        "en": "He was supposed to call me, but he didn't.",
        "es": "Se suponía que me iba a llamar, pero no lo hizo."
      },
      {
        "en": "Take an umbrella. It's bound to rain.",
        "es": "Lleva paraguas. Seguro que va a llover."
      },
      {
        "en": "All visitors are to report to reception.",
        "es": "Todos los visitantes deben presentarse en recepción."
      },
      {
        "en": "This restaurant is supposed to be the best in town.",
        "es": "Dicen que este restaurante es el mejor de la ciudad."
      },
      {
        "en": "I needn't have worried. The exam was easy.",
        "es": "No tenía por qué haberme preocupado. El examen estuvo fácil."
      },
      {
        "en": "You ought to apologize to your sister.",
        "es": "Deberías disculparte con tu hermana."
      },
      {
        "en": "You're expected to arrive on time.",
        "es": "Se espera que llegues puntual."
      }
    ],
    "frases": [
      {
        "en": "I needn't have taken so many clothes on the trip. I wore the same three T-shirts all week.",
        "es": "No tenía que haber llevado tanta ropa al viaje. Usé las mismas tres playeras toda la semana.",
        "imagen": "Maleta enorme abierta con ropa sin usar"
      },
      {
        "en": "We didn't need to take a taxi, because my cousin offered to drive us to the airport.",
        "es": "No tuvimos que tomar taxi, porque mi primo se ofreció a llevarnos al aeropuerto.",
        "imagen": "Primo cargando maletas en su carro"
      },
      {
        "en": "The concert was supposed to start at nine, but the band didn't appear until eleven.",
        "es": "Se suponía que el concierto empezaría a las nueve, pero la banda no apareció hasta las once.",
        "imagen": "Público esperando frente a un escenario vacío"
      },
      {
        "en": "With so many people traveling for the holidays, the roads are bound to be busy.",
        "es": "Con tanta gente viajando en vacaciones, seguro que las carreteras estarán llenas.",
        "imagen": "Carretera llena de carros en temporada vacacional"
      },
      {
        "en": "You needn't have paid for dinner. I invited you, remember?",
        "es": "No tenías que haber pagado la cena. Yo te invité, ¿te acuerdas?",
        "imagen": "Amigos discutiendo en broma por la cuenta en un restaurante"
      },
      {
        "en": "Employees are to wear their ID badges at all times inside the building.",
        "es": "Los empleados deben portar su gafete en todo momento dentro del edificio.",
        "imagen": "Empleados con gafetes en un vestíbulo"
      },
      {
        "en": "This beach is supposed to be one of the most beautiful in the Caribbean.",
        "es": "Dicen que esta playa es una de las más hermosas del Caribe.",
        "imagen": "Playa caribeña de arena blanca y agua turquesa"
      },
      {
        "en": "I didn't need to study much for the test, because we had practiced everything in class.",
        "es": "No tuve que estudiar mucho para el examen, porque habíamos practicado todo en clase.",
        "imagen": "Estudiante tranquilo contestando un examen"
      },
      {
        "en": "You ought to see a doctor about that pain before it gets worse.",
        "es": "Deberías ir al doctor por ese dolor antes de que empeore.",
        "imagen": "Persona con dolor de espalda y su amiga preocupada"
      },
      {
        "en": "I needn't have worried about the interview. They offered me the job the same day.",
        "es": "No tenía por qué haberme preocupado por la entrevista. Me ofrecieron el trabajo el mismo día.",
        "imagen": "Persona feliz estrechando la mano de una gerente"
      }
    ],
    "listening": [
      {
        "audio": "You needn't have washed the dishes. I was going to do it later.",
        "pregunta": "¿Qué quiere decir?",
        "opciones": [
          "No hacía falta que lavara los trastes",
          "Tiene que lavar los trastes",
          "No lavó los trastes",
          "Los trastes siguen sucios"
        ]
      },
      {
        "audio": "We didn't need to book a table, because the restaurant was almost empty.",
        "pregunta": "¿Por qué no reservaron?",
        "opciones": [
          "El restaurante estaba casi vacío",
          "Estaba cerrado",
          "No había teléfono",
          "No tenían tiempo"
        ]
      },
      {
        "audio": "The package was supposed to arrive yesterday, but it still hasn't come.",
        "pregunta": "¿Qué pasó con el paquete?",
        "opciones": [
          "Todavía no llega",
          "Llegó ayer",
          "Llegó dañado",
          "Se canceló"
        ]
      },
      {
        "audio": "With all this traffic, we're bound to be late.",
        "pregunta": "¿Qué creen que pasará?",
        "opciones": [
          "Seguro llegarán tarde",
          "Llegarán temprano",
          "No irán",
          "Tomarán otra ruta"
        ]
      },
      {
        "audio": "All passengers are to remain seated until the plane has stopped.",
        "pregunta": "¿Qué deben hacer los pasajeros?",
        "opciones": [
          "Quedarse sentados hasta que el avión se detenga",
          "Pararse de inmediato",
          "Apagar el celular",
          "Abrocharse el cinturón al aterrizar"
        ]
      }
    ],
    "lectura": {
      "titulo": "A wasted effort",
      "texto": "Last Saturday was my parents' fortieth wedding anniversary, and my sister and I had planned a surprise party. We were supposed to meet at their house at five o'clock to decorate the garden while they were at the cinema. I spent the whole morning cooking enormous amounts of food: tamales, rice, mole and three different desserts. Then I drove across the city to buy flowers. When I arrived, I discovered that I needn't have done any of it. My sister had ordered everything from a restaurant, and the flowers had already been delivered! We hadn't talked properly, and both of us had prepared the party. My first reaction was frustration, but my sister laughed. Well, she said, the guests are bound to be hungry. In the end, we didn't need to worry about leftovers: the forty guests ate absolutely everything. My parents said it was the best party they had ever had. Next year, though, we are to make a written plan.",
      "preguntas": [
        {
          "pregunta": "¿Qué celebraban?",
          "opciones": [
            "El aniversario de bodas número cuarenta de los papás",
            "Un cumpleaños",
            "Una graduación",
            "Navidad"
          ]
        },
        {
          "pregunta": "¿Qué descubrió el narrador al llegar?",
          "opciones": [
            "Que su hermana ya había pedido todo",
            "Que la fiesta se canceló",
            "Que sus papás ya estaban ahí",
            "Que no había invitados"
          ]
        },
        {
          "pregunta": "¿Por qué pasó el problema?",
          "opciones": [
            "No se habían comunicado bien",
            "Se equivocaron de día",
            "El restaurante falló",
            "Los papás lo sabían"
          ]
        },
        {
          "pregunta": "¿Qué pasó con la comida?",
          "opciones": [
            "Los invitados se comieron todo",
            "Sobró mucha",
            "La tiraron",
            "La regalaron"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con needn't have o didn't need to.",
        "pregunta": "I ___ bought milk. There was a full bottle in the fridge.",
        "respuestas": [
          "needn't have",
          "need not have"
        ]
      },
      {
        "instruccion": "Completa con needn't have o didn't need to.",
        "pregunta": "I ___ go to work yesterday, so I stayed in bed.",
        "respuestas": [
          "didn't need to",
          "did not need to",
          "didn't have to"
        ]
      },
      {
        "instruccion": "Completa con supposed.",
        "pregunta": "You're ___ to switch off your phone in the cinema.",
        "respuestas": [
          "supposed"
        ]
      },
      {
        "instruccion": "Completa con bound.",
        "pregunta": "It's ___ to rain. Look at those clouds.",
        "respuestas": [
          "bound"
        ]
      },
      {
        "instruccion": "Completa con was supposed to.",
        "pregunta": "She ___ arrive at ten, but she was late.",
        "respuestas": [
          "was supposed to"
        ]
      },
      {
        "instruccion": "Completa con ought.",
        "pregunta": "You ___ to tell her the truth.",
        "respuestas": [
          "ought"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "No te hubieras molestado (trajiste algo).",
        "respuestas": [
          "You needn't have brought anything",
          "You shouldn't have",
          "You didn't have to"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Seguro que va a llover.",
        "respuestas": [
          "It's bound to rain",
          "It is bound to rain",
          "It's sure to rain"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Se suponía que me iba a llamar.",
        "respuestas": [
          "He was supposed to call me",
          "She was supposed to call me"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "You needn't to have waited for me.",
        "respuestas": [
          "You needn't have waited for me",
          "You need not have waited for me"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "You ___ cooked. I've already eaten.",
        "opciones": [
          "needn't have",
          "didn't need",
          "mustn't have",
          "don't need to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I ___ take the bus because Ana drove me.",
        "opciones": [
          "didn't need to",
          "needn't have",
          "mustn't",
          "shouldn't have"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The movie ___ be very good. Everybody says so.",
        "opciones": [
          "is supposed to",
          "is bound",
          "ought",
          "needn't"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "With this traffic, we're ___ to miss the flight.",
        "opciones": [
          "bound",
          "supposed",
          "ought",
          "need"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«You needn't have bought it» significa:",
        "opciones": [
          "Lo compraste pero no hacía falta",
          "No lo compraste",
          "Tienes que comprarlo",
          "No lo puedes comprar"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Students ___ to leave the room during the exam.",
        "opciones": [
          "are not",
          "are not supposed",
          "needn't",
          "ought not"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I needn't have brought my laptop. The office had computers for everyone.",
        "pregunta": "¿Por qué no necesitaba su laptop?",
        "opciones": [
          "La oficina tenía computadoras para todos",
          "No tenía que trabajar",
          "Se le descompuso",
          "No había internet"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The new subway line is to open in December, according to the government.",
        "pregunta": "¿Cuándo abrirá la línea del metro?",
        "opciones": [
          "En diciembre",
          "En enero",
          "Ya abrió",
          "No se sabe"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: No tienes por qué preocuparte.",
        "respuestas": [
          "You needn't worry",
          "You don't need to worry",
          "You don't have to worry",
          "There's no need to worry"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Dicen que es el mejor.",
        "respuestas": [
          "It's supposed to be the best",
          "It is supposed to be the best",
          "They say it's the best"
        ]
      }
    ]
  },
  {
    "id": "c1-07",
    "num": 7,
    "titulo": "El futuro en el pasado (was going to, was about to, would)",
    "contexto": "Planes que no se cumplieron",
    "explicacion": {
      "es": [
        "El **futuro en el pasado** describe algo que, **desde un momento del pasado**, iba a pasar después. ***Was / were going to*** + verbo = **iba a** (plan o intención), muchas veces **no se cumplió**: *I **was going to call** you, but I forgot.* (Te iba a llamar, pero se me olvidó.)",
        "***Was / were about to*** + verbo = **estaba a punto de**: *I **was about to leave** when the phone rang.* ***Was on the point of / on the verge of*** + *-ing* es más enfático: *She **was on the verge of** quitting.*",
        "***Would*** + verbo = el futuro visto **desde el pasado** (en narraciones y estilo indirecto): *I knew she **would** be a great doctor.* (Sabía que sería una gran doctora.) *Little did they know that they **would** never see each other again.*",
        "***Was / were to*** + verbo = **destino** (formal, literario): *He **was to become** the most famous painter of his time.* (Llegaría a ser…) ***Was to have*** + participio = algo planeado que **no pasó**: *The wedding **was to have taken** place in June.*"
      ],
      "tabla": {
        "columnas": [
          "Forma",
          "Significado",
          "Ejemplo"
        ],
        "filas": [
          [
            "was going to + verbo",
            "iba a (plan)",
            "We were going to travel, but we couldn't."
          ],
          [
            "was about to + verbo",
            "estaba a punto de",
            "I was about to call you."
          ],
          [
            "would + verbo",
            "futuro desde el pasado",
            "She said she would come."
          ],
          [
            "was to + verbo",
            "destino (formal)",
            "They were to meet again years later."
          ],
          [
            "was to have + participio",
            "plan que no se cumplió",
            "The match was to have been played today."
          ]
        ]
      },
      "ojo": [
        "*I **was going to** buy it, but…* casi siempre implica que **no** lo hiciste. Es perfecto para **excusas**.",
        "***Was about to*** + verbo base; ***on the point of*** + *-ing*: *I was **about to say** it / I was **on the point of saying** it.*",
        "En estilo indirecto, *will* pasa a ***would***: *«I'll help you» → She said she **would** help me.*",
        "***Was supposed to*** también expresa planes no cumplidos: *The bus **was supposed to** arrive at six.*",
        "En español: «**iba a** + infinitivo», «**estaba a punto de**», «**llegaría a**»."
      ],
      "en": [
        "The future in the past describes plans from a past point of view: I was going to call you, but I forgot.",
        "I was about to leave when the phone rang.",
        "I knew she would be a great doctor.",
        "He was to become the most famous painter of his time."
      ]
    },
    "vocabulario": [
      {
        "en": "I was going to call you",
        "es": "te iba a llamar",
        "imagen": "Persona apenada mirando su celular de noche",
        "ejemplo": [
          "I was going to call you, but I forgot.",
          "Te iba a llamar, pero se me olvidó."
        ]
      },
      {
        "en": "We were going to travel",
        "es": "íbamos a viajar",
        "imagen": "Maletas listas junto a la puerta y una pareja triste",
        "ejemplo": [
          "We were going to travel to Peru, but my father got sick.",
          "Íbamos a viajar a Perú, pero mi papá se enfermó."
        ]
      },
      {
        "en": "I was about to leave",
        "es": "estaba a punto de irme",
        "imagen": "Persona con la mano en la perilla mientras suena el teléfono",
        "ejemplo": [
          "I was about to leave when the phone rang.",
          "Estaba a punto de irme cuando sonó el teléfono."
        ]
      },
      {
        "en": "on the verge of",
        "es": "a punto de / al borde de",
        "imagen": "Persona con una carta de renuncia en la mano",
        "ejemplo": [
          "She was on the verge of quitting her job.",
          "Estaba a punto de renunciar a su trabajo."
        ]
      },
      {
        "en": "I knew she would",
        "es": "sabía que ella",
        "imagen": "Graduada de medicina con su familia orgullosa",
        "ejemplo": [
          "I knew she would be a great doctor.",
          "Sabía que sería una gran doctora."
        ]
      },
      {
        "en": "He was to become",
        "es": "llegaría a ser",
        "imagen": "Foto antigua de un joven pintor en su taller",
        "ejemplo": [
          "He was to become the most famous painter of his time.",
          "Llegaría a ser el pintor más famoso de su tiempo."
        ]
      },
      {
        "en": "The wedding was to have taken place",
        "es": "la boda iba a celebrarse",
        "imagen": "Salón de bodas decorado pero vacío",
        "ejemplo": [
          "The wedding was to have taken place in June.",
          "La boda iba a celebrarse en junio."
        ]
      },
      {
        "en": "She said she would come",
        "es": "dijo que vendría",
        "imagen": "Mesa con un lugar vacío en una cena",
        "ejemplo": [
          "She said she would come, but she never arrived.",
          "Dijo que vendría, pero nunca llegó."
        ]
      },
      {
        "en": "They would never see each other again",
        "es": "nunca volverían a verse",
        "imagen": "Dos personas despidiéndose en una estación antigua",
        "ejemplo": [
          "Little did they know that they would never see each other again.",
          "Poco sabían que nunca volverían a verse."
        ]
      },
      {
        "en": "I was on the point of giving up",
        "es": "estaba a punto de rendirme",
        "imagen": "Persona agotada a mitad de una montaña",
        "ejemplo": [
          "I was on the point of giving up when I saw the top.",
          "Estaba a punto de rendirme cuando vi la cima."
        ]
      },
      {
        "en": "We were just about to eat",
        "es": "estábamos a punto de comer",
        "imagen": "Familia sentada a la mesa cuando suena el timbre",
        "ejemplo": [
          "We were just about to eat when the guests arrived.",
          "Estábamos a punto de comer cuando llegaron los invitados."
        ]
      },
      {
        "en": "I was going to say",
        "es": "iba a decir",
        "imagen": "Persona levantando un dedo para hablar",
        "ejemplo": [
          "I was going to say the same thing!",
          "¡Iba a decir lo mismo!"
        ]
      },
      {
        "en": "It was going to be a surprise",
        "es": "iba a ser sorpresa",
        "imagen": "Pastel escondido detrás de la espalda",
        "ejemplo": [
          "It was going to be a surprise, but my brother told her.",
          "Iba a ser sorpresa, pero mi hermano le dijo."
        ]
      },
      {
        "en": "the plan was to",
        "es": "el plan era",
        "imagen": "Mapa con una ruta marcada sobre una mesa",
        "ejemplo": [
          "The plan was to leave at six, but we overslept.",
          "El plan era salir a las seis, pero nos quedamos dormidos."
        ]
      },
      {
        "en": "I thought it would rain",
        "es": "pensé que llovería",
        "imagen": "Persona con paraguas en un día soleado",
        "ejemplo": [
          "I thought it would rain, so I brought an umbrella.",
          "Pensé que llovería, así que traje paraguas."
        ]
      },
      {
        "en": "They were supposed to arrive",
        "es": "se suponía que llegarían",
        "imagen": "Andén vacío con un reloj marcando la hora",
        "ejemplo": [
          "They were supposed to arrive at noon.",
          "Se suponía que llegarían al mediodía."
        ]
      }
    ],
    "grupos": [
      {
        "id": "excusas",
        "titulo": "Excusas y planes fallidos",
        "icono": "🙈",
        "patron": [
          "I was going to…, but…",
          "I meant to…",
          "I intended to…"
        ],
        "palabras": [
          {
            "en": "I meant to tell you",
            "es": "quería decirte",
            "imagen": "Persona apenada hablando con su amiga",
            "ejemplo": [
              "I meant to tell you, but I didn't have time.",
              "Quería decírtelo, pero no tuve tiempo."
            ]
          },
          {
            "en": "I intended to finish it",
            "es": "tenía la intención de terminarlo",
            "imagen": "Proyecto a medias sobre un escritorio",
            "ejemplo": [
              "I intended to finish it yesterday, but I got sick.",
              "Tenía la intención de terminarlo ayer, pero me enfermé."
            ]
          },
          {
            "en": "something came up",
            "es": "surgió algo",
            "imagen": "Persona contestando una llamada urgente",
            "ejemplo": [
              "I was going to come, but something came up.",
              "Iba a ir, pero surgió algo."
            ]
          },
          {
            "en": "I didn't get around to it",
            "es": "no me dio tiempo",
            "imagen": "Lista de pendientes sin tachar",
            "ejemplo": [
              "I wanted to fix the door, but I didn't get around to it.",
              "Quería arreglar la puerta, pero no me dio tiempo."
            ]
          },
          {
            "en": "it fell through",
            "es": "se cayó / no se concretó",
            "imagen": "Contrato roto sobre una mesa",
            "ejemplo": [
              "We were going to buy the house, but the deal fell through.",
              "Íbamos a comprar la casa, pero el trato se cayó."
            ]
          },
          {
            "en": "change of plans",
            "es": "cambio de planes",
            "imagen": "Persona tachando un plan en un calendario",
            "ejemplo": [
              "There's been a change of plans. We're staying home.",
              "Hubo un cambio de planes. Nos quedamos en casa."
            ]
          }
        ]
      },
      {
        "id": "destino",
        "titulo": "El destino en las historias",
        "icono": "🔮",
        "patron": [
          "He was to…",
          "Little did she know she would…",
          "Years later, …"
        ],
        "palabras": [
          {
            "en": "years later",
            "es": "años después",
            "imagen": "Persona mayor regresando a su pueblo natal",
            "ejemplo": [
              "Years later, she would return to the village as a doctor.",
              "Años después, regresaría al pueblo como doctora."
            ]
          },
          {
            "en": "fate",
            "es": "el destino",
            "imagen": "Camino que se pierde entre la niebla",
            "ejemplo": [
              "Fate had other plans for him.",
              "El destino tenía otros planes para él."
            ]
          },
          {
            "en": "a turning point",
            "es": "un punto de inflexión",
            "imagen": "Persona en un cruce de caminos",
            "ejemplo": [
              "That meeting was to be a turning point in her life.",
              "Ese encuentro sería un punto de inflexión en su vida."
            ]
          },
          {
            "en": "destined to",
            "es": "destinado a",
            "imagen": "Niño mirando las estrellas con un telescopio",
            "ejemplo": [
              "He seemed destined to become a scientist.",
              "Parecía destinado a convertirse en científico."
            ]
          },
          {
            "en": "little did he know",
            "es": "poco sabía él",
            "imagen": "Joven sonriendo sin saber lo que le espera",
            "ejemplo": [
              "Little did he know that his life was about to change.",
              "Poco sabía que su vida estaba a punto de cambiar."
            ]
          },
          {
            "en": "it would turn out",
            "es": "resultaría",
            "imagen": "Persona leyendo una carta con sorpresa",
            "ejemplo": [
              "It would turn out to be the best decision of her life.",
              "Resultaría ser la mejor decisión de su vida."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I was going to call you, but I forgot.",
        "es": "Te iba a llamar, pero se me olvidó."
      },
      {
        "en": "I was about to leave when the phone rang.",
        "es": "Estaba a punto de irme cuando sonó el teléfono."
      },
      {
        "en": "I knew she would be a great doctor.",
        "es": "Sabía que sería una gran doctora."
      },
      {
        "en": "He was to become the most famous painter of his time.",
        "es": "Llegaría a ser el pintor más famoso de su tiempo."
      },
      {
        "en": "She said she would come, but she never arrived.",
        "es": "Dijo que vendría, pero nunca llegó."
      },
      {
        "en": "It was going to be a surprise, but my brother told her.",
        "es": "Iba a ser sorpresa, pero mi hermano le dijo."
      },
      {
        "en": "The plan was to leave at six, but we overslept.",
        "es": "El plan era salir a las seis, pero nos quedamos dormidos."
      },
      {
        "en": "I was going to come, but something came up.",
        "es": "Iba a ir, pero surgió algo."
      },
      {
        "en": "We were going to buy the house, but the deal fell through.",
        "es": "Íbamos a comprar la casa, pero el trato se cayó."
      },
      {
        "en": "Little did he know that his life was about to change.",
        "es": "Poco sabía que su vida estaba a punto de cambiar."
      }
    ],
    "frases": [
      {
        "en": "We were going to spend the summer in Europe, but the flights were too expensive, so we went to Chiapas instead.",
        "es": "Íbamos a pasar el verano en Europa, pero los vuelos estaban carísimos, así que fuimos a Chiapas.",
        "imagen": "Familia feliz en una cascada de Chiapas"
      },
      {
        "en": "I was just about to send the email when I noticed a terrible mistake in the first line.",
        "es": "Estaba a punto de mandar el correo cuando noté un error terrible en la primera línea.",
        "imagen": "Persona con el dedo sobre el botón de enviar y cara de horror"
      },
      {
        "en": "When I met him at university, I had no idea that he would become my husband.",
        "es": "Cuando lo conocí en la universidad, no tenía idea de que se convertiría en mi esposo.",
        "imagen": "Pareja mayor mirando una foto de cuando eran estudiantes"
      },
      {
        "en": "The concert was to have taken place in the main square, but it was canceled because of the storm.",
        "es": "El concierto iba a celebrarse en la plaza principal, pero se canceló por la tormenta.",
        "imagen": "Escenario vacío bajo la lluvia en una plaza"
      },
      {
        "en": "She was on the verge of giving up her studies when she received a scholarship.",
        "es": "Estaba a punto de dejar sus estudios cuando recibió una beca.",
        "imagen": "Estudiante emocionada leyendo una carta de beca"
      },
      {
        "en": "I meant to buy you a present, but I didn't get around to it. I'm so sorry!",
        "es": "Quería comprarte un regalo, pero no me dio tiempo. ¡Lo siento mucho!",
        "imagen": "Persona disculpándose con las manos vacías en un cumpleaños"
      },
      {
        "en": "At the age of twenty, Frida Kahlo had no idea that she was to become a symbol of Mexican culture.",
        "es": "A los veinte años, Frida Kahlo no tenía idea de que llegaría a ser un símbolo de la cultura mexicana.",
        "imagen": "Retrato pintado de una mujer con flores en el pelo en una galería"
      },
      {
        "en": "The doctor told us that the operation would take about three hours.",
        "es": "El doctor nos dijo que la operación duraría unas tres horas.",
        "imagen": "Familia esperando en la sala de un hospital"
      },
      {
        "en": "We were about to give up looking for the dog when we heard barking in the garden.",
        "es": "Estábamos a punto de dejar de buscar al perro cuando oímos ladridos en el jardín.",
        "imagen": "Perro saliendo de unos arbustos y una familia aliviada"
      },
      {
        "en": "That trip to Japan was to be the beginning of a lifelong passion for the country.",
        "es": "Ese viaje a Japón sería el comienzo de una pasión de toda la vida por ese país.",
        "imagen": "Turista mirando un templo japonés con asombro"
      }
    ],
    "listening": [
      {
        "audio": "I was going to make lasagna, but I didn't have any cheese.",
        "pregunta": "¿Por qué no hizo lasaña?",
        "opciones": [
          "No tenía queso",
          "No tenía tiempo",
          "Se quemó",
          "No le gusta"
        ]
      },
      {
        "audio": "We were about to go to bed when there was an earthquake.",
        "pregunta": "¿Qué pasó cuando iban a dormir?",
        "opciones": [
          "Hubo un temblor",
          "Llegó alguien",
          "Se fue la luz",
          "Sonó el teléfono"
        ]
      },
      {
        "audio": "She promised she would help me move, but she didn't come.",
        "pregunta": "¿Qué prometió?",
        "opciones": [
          "Ayudarle con la mudanza",
          "Prestarle dinero",
          "Ir a su fiesta",
          "Llamarle"
        ]
      },
      {
        "audio": "The match was to have been played on Sunday, but it was postponed.",
        "pregunta": "¿Qué pasó con el partido?",
        "opciones": [
          "Se pospuso",
          "Se jugó el domingo",
          "Se canceló para siempre",
          "Se jugó el sábado"
        ]
      },
      {
        "audio": "I was on the point of selling my guitar when I got my first job as a musician.",
        "pregunta": "¿Qué estaba a punto de hacer?",
        "opciones": [
          "Vender su guitarra",
          "Comprar una guitarra",
          "Dejar la música",
          "Mudarse"
        ]
      }
    ],
    "lectura": {
      "titulo": "The trip that never happened",
      "texto": "For years, my grandparents had been planning a trip to Spain. My grandfather was going to show my grandmother the village where his own father had been born. They were going to visit Madrid, eat paella in Valencia and dance flamenco in Seville. They had saved money for almost a decade, and in March 2020 they were about to buy the tickets. Then the pandemic arrived. The trip that was to have been the adventure of their lives was postponed again and again. My grandfather kept saying they would go the following year. Sadly, he passed away before that happened. Last summer, my grandmother finally decided to make the journey, and she asked me to go with her. We visited the small village, and an old woman told us she remembered my great-grandfather. My grandmother cried and said: This is what your grandfather was going to show me. Little did I know that it would become the most meaningful trip of my life.",
      "preguntas": [
        {
          "pregunta": "¿Qué iba a mostrar el abuelo a la abuela?",
          "opciones": [
            "El pueblo donde nació su padre",
            "Su casa de la infancia",
            "Una playa",
            "Un museo"
          ]
        },
        {
          "pregunta": "¿Por qué no hicieron el viaje en 2020?",
          "opciones": [
            "Llegó la pandemia",
            "No tenían dinero",
            "El abuelo se enfermó",
            "Perdieron los boletos"
          ]
        },
        {
          "pregunta": "¿Con quién viajó la abuela al final?",
          "opciones": [
            "Con su nieto, el narrador",
            "Sola",
            "Con su hija",
            "Con amigas"
          ]
        },
        {
          "pregunta": "¿Qué les contó la señora del pueblo?",
          "opciones": [
            "Que recordaba al bisabuelo",
            "Que la casa se había vendido",
            "Dónde comer paella",
            "Cómo bailar flamenco"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con was going to.",
        "pregunta": "I ___ call you, but I fell asleep.",
        "respuestas": [
          "was going to"
        ]
      },
      {
        "instruccion": "Completa con about to.",
        "pregunta": "We were ___ leave when it started to rain.",
        "respuestas": [
          "about to",
          "just about to"
        ]
      },
      {
        "instruccion": "Completa con would.",
        "pregunta": "I knew you ___ like this movie.",
        "respuestas": [
          "would"
        ]
      },
      {
        "instruccion": "Completa con verge.",
        "pregunta": "She was on the ___ of tears.",
        "respuestas": [
          "verge"
        ]
      },
      {
        "instruccion": "Completa con was to have.",
        "pregunta": "The meeting was to ___ taken place today.",
        "respuestas": [
          "have"
        ]
      },
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "I was going to come, but something came ___.",
        "respuestas": [
          "up"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Te iba a llamar.",
        "respuestas": [
          "I was going to call you"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Estaba a punto de irme.",
        "respuestas": [
          "I was about to leave",
          "I was about to go",
          "I was just about to leave"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Dijo que vendría.",
        "respuestas": [
          "She said she would come",
          "He said he would come",
          "She said she'd come",
          "He said he'd come"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I was about to leaving when you called.",
        "respuestas": [
          "I was about to leave when you called"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "I ___ buy you a present, but I forgot.",
        "opciones": [
          "was going to",
          "am going to",
          "will",
          "would have"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We were ___ to start dinner when he arrived.",
        "opciones": [
          "about",
          "going",
          "on point",
          "verge"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She told me she ___ help me tomorrow.",
        "opciones": [
          "would",
          "will be",
          "is going",
          "was about"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "He was on the point of ___ up.",
        "opciones": [
          "giving",
          "give",
          "to give",
          "gave"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«He was to become president» significa:",
        "opciones": [
          "Llegaría a ser presidente",
          "Tenía que ser presidente",
          "Era presidente",
          "No fue presidente"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«The deal fell through» significa:",
        "opciones": [
          "El trato no se concretó",
          "El trato se cerró",
          "El trato se cayó al piso",
          "El trato fue un éxito"
        ]
      },
      {
        "tipo": "listening",
        "audio": "We were going to paint the house blue, but we changed our minds and chose white.",
        "pregunta": "¿De qué color pintaron la casa?",
        "opciones": [
          "Blanca",
          "Azul",
          "Amarilla",
          "Verde"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I knew that day would change my life forever.",
        "pregunta": "¿Qué sabía?",
        "opciones": [
          "Que ese día cambiaría su vida",
          "Que llovería",
          "Que perdería",
          "Que sería aburrido"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Iba a ser sorpresa.",
        "respuestas": [
          "It was going to be a surprise"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: surgió algo",
        "respuestas": [
          "something came up"
        ]
      }
    ]
  },
  {
    "id": "c1-08",
    "num": 8,
    "titulo": "El subjuntivo (I suggest that he be…, It's essential that…)",
    "contexto": "Recomendaciones formales",
    "explicacion": {
      "es": [
        "El **subjuntivo** en inglés casi no se nota, pero existe en el **lenguaje formal**. Después de verbos como ***suggest, recommend, insist, demand, propose, request, require***, el verbo de la oración con *that* va en **forma base**, **sin -s** y para todas las personas: *I **suggest that he see** a doctor.* (Sugiero que vea a un doctor.)",
        "También después de adjetivos como ***essential, vital, important, necessary, crucial, imperative***: ***It is essential that** every student **attend** the meeting.* (Es esencial que todos los alumnos asistan.)",
        "Con *be* se usa ***be*** (no *is / are*): *The doctor recommended **that she be** careful.* *It is vital **that the documents be** signed today.* Negativo: ***not*** + verbo base: *I insist **that he not be** told.*",
        "En inglés británico también se usa ***should*** + verbo: *I suggest that he **should** see a doctor.* Y en lenguaje **informal** se usa el presente normal: *I suggest he **sees** a doctor.* En textos formales, el subjuntivo es lo más elegante."
      ],
      "tabla": {
        "columnas": [
          "Estructura",
          "Ejemplo"
        ],
        "filas": [
          [
            "suggest / recommend that + sujeto + verbo base",
            "I recommend that she apply for the job."
          ],
          [
            "insist / demand that + sujeto + verbo base",
            "They demanded that the manager resign."
          ],
          [
            "It is essential / vital that + sujeto + verbo base",
            "It is vital that he be informed."
          ],
          [
            "… that + sujeto + not + verbo base",
            "We requested that they not smoke inside."
          ],
          [
            "Británico: should + verbo",
            "I suggest that he should rest."
          ]
        ]
      },
      "ojo": [
        "*I suggest that he **sees*** (informal) vs. *I suggest that he **see*** (formal). En exámenes y textos formales, usa la **forma base**.",
        "*Suggest* **nunca** lleva persona + *to*: *I suggest **him to go*** ❌ → *I suggest **that he go*** ✅ o *I suggest **going*** ✅.",
        "Expresiones fijas con subjuntivo: ***God save the Queen / Long live…***, ***Be that as it may*** (sea como sea), ***Suffice it to say*** (baste decir).",
        "En español también usamos subjuntivo: «Sugiero que **vea**», «Es esencial que **asistan**».",
        "Muy común en reglamentos, correos de trabajo, informes médicos y legales."
      ],
      "en": [
        "After verbs like suggest, recommend and insist, the verb in the that clause is in the base form: I suggest that he see a doctor.",
        "It is essential that every student attend the meeting.",
        "With be: It is vital that the documents be signed today.",
        "In informal English we often say: I suggest he sees a doctor."
      ]
    },
    "vocabulario": [
      {
        "en": "I suggest that he see a doctor.",
        "es": "sugiero que vea a un doctor",
        "imagen": "Persona preocupada hablando con un amigo enfermo",
        "ejemplo": [
          "I suggest that he see a doctor immediately.",
          "Sugiero que vea a un doctor de inmediato."
        ]
      },
      {
        "en": "It is essential that",
        "es": "es esencial que",
        "imagen": "Sala de juntas con un documento importante",
        "ejemplo": [
          "It is essential that every employee attend the training.",
          "Es esencial que todos los empleados asistan a la capacitación."
        ]
      },
      {
        "en": "I recommend that she apply",
        "es": "recomiendo que presente su solicitud",
        "imagen": "Persona llenando una solicitud de trabajo",
        "ejemplo": [
          "I recommend that she apply for the position.",
          "Recomiendo que presente su solicitud para el puesto."
        ]
      },
      {
        "en": "They demanded that he resign",
        "es": "exigieron que renunciara",
        "imagen": "Manifestantes con pancartas sin texto frente a un edificio",
        "ejemplo": [
          "The workers demanded that the director resign.",
          "Los trabajadores exigieron que el director renunciara."
        ]
      },
      {
        "en": "It is vital that he be informed",
        "es": "es vital que se le informe",
        "imagen": "Persona entregando una carta urgente",
        "ejemplo": [
          "It is vital that he be informed before the meeting.",
          "Es vital que se le informe antes de la junta."
        ]
      },
      {
        "en": "I insist that you stay",
        "es": "insisto en que te quedes",
        "imagen": "Anfitrión deteniendo con cariño a un invitado",
        "ejemplo": [
          "I insist that you stay for dinner.",
          "Insisto en que te quedes a cenar."
        ]
      },
      {
        "en": "The doctor recommended that she rest",
        "es": "el doctor recomendó que descansara",
        "imagen": "Doctora dando indicaciones a una paciente",
        "ejemplo": [
          "The doctor recommended that she rest for two weeks.",
          "La doctora recomendó que descansara dos semanas."
        ]
      },
      {
        "en": "It is important that",
        "es": "es importante que",
        "imagen": "Maestra señalando un punto en el pizarrón",
        "ejemplo": [
          "It is important that everyone be on time.",
          "Es importante que todos lleguen puntuales."
        ]
      },
      {
        "en": "We request that",
        "es": "solicitamos que",
        "imagen": "Aviso formal en un restaurante sin texto legible",
        "ejemplo": [
          "We request that guests not smoke inside.",
          "Solicitamos a los clientes que no fumen adentro."
        ]
      },
      {
        "en": "It is necessary that",
        "es": "es necesario que",
        "imagen": "Persona firmando un documento oficial",
        "ejemplo": [
          "It is necessary that the form be completed in English.",
          "Es necesario que el formulario se llene en inglés."
        ]
      },
      {
        "en": "They proposed that",
        "es": "propusieron que",
        "imagen": "Equipo presentando una propuesta en una junta",
        "ejemplo": [
          "They proposed that the meeting be held online.",
          "Propusieron que la junta se hiciera en línea."
        ]
      },
      {
        "en": "It is crucial that",
        "es": "es crucial que",
        "imagen": "Médicos trabajando en una sala de emergencias",
        "ejemplo": [
          "It is crucial that the patient receive treatment today.",
          "Es crucial que el paciente reciba tratamiento hoy."
        ]
      },
      {
        "en": "I suggest that we leave",
        "es": "sugiero que nos vayamos",
        "imagen": "Persona mirando el reloj en una fiesta",
        "ejemplo": [
          "I suggest that we leave before the traffic gets worse.",
          "Sugiero que nos vayamos antes de que empeore el tráfico."
        ]
      },
      {
        "en": "The law requires that",
        "es": "la ley exige que",
        "imagen": "Libro de leyes y un mazo de juez",
        "ejemplo": [
          "The law requires that drivers wear a seatbelt.",
          "La ley exige que los conductores usen cinturón."
        ]
      },
      {
        "en": "It is imperative that",
        "es": "es imperativo que",
        "imagen": "Rescatistas trabajando con urgencia",
        "ejemplo": [
          "It is imperative that we act now.",
          "Es imperativo que actuemos ya."
        ]
      },
      {
        "en": "Be that as it may",
        "es": "sea como sea",
        "imagen": "Persona encogiéndose de hombros con determinación",
        "ejemplo": [
          "Be that as it may, we still have to finish the project.",
          "Sea como sea, todavía tenemos que terminar el proyecto."
        ]
      }
    ],
    "grupos": [
      {
        "id": "verbos",
        "titulo": "Verbos que piden subjuntivo",
        "icono": "📝",
        "patron": [
          "suggest that…",
          "insist that…",
          "demand that…"
        ],
        "palabras": [
          {
            "en": "advise that",
            "es": "aconsejar que",
            "imagen": "Asesor financiero hablando con un cliente",
            "ejemplo": [
              "The bank advised that he open a savings account.",
              "El banco le aconsejó que abriera una cuenta de ahorro."
            ]
          },
          {
            "en": "ask that",
            "es": "pedir que",
            "imagen": "Persona haciendo una petición formal",
            "ejemplo": [
              "The family asked that their privacy be respected.",
              "La familia pidió que se respetara su privacidad."
            ]
          },
          {
            "en": "urge that",
            "es": "instar a que",
            "imagen": "Líder hablando con firmeza en un podio",
            "ejemplo": [
              "The minister urged that people stay at home.",
              "El ministro instó a la gente a quedarse en casa."
            ]
          },
          {
            "en": "prefer that",
            "es": "preferir que",
            "imagen": "Persona señalando amablemente una silla",
            "ejemplo": [
              "I would prefer that you not call after ten.",
              "Preferiría que no llamaras después de las diez."
            ]
          },
          {
            "en": "command that",
            "es": "ordenar que",
            "imagen": "Capitán dando una orden a su tripulación",
            "ejemplo": [
              "The captain commanded that the ship return to port.",
              "El capitán ordenó que el barco regresara al puerto."
            ]
          },
          {
            "en": "move that",
            "es": "proponer formalmente que",
            "imagen": "Miembro de un comité levantando la mano",
            "ejemplo": [
              "I move that the meeting be adjourned.",
              "Propongo que se levante la sesión."
            ]
          }
        ]
      },
      {
        "id": "adjetivos",
        "titulo": "Adjetivos que piden subjuntivo",
        "icono": "⚠️",
        "patron": [
          "It is essential that…",
          "It is vital that…",
          "It is advisable that…"
        ],
        "palabras": [
          {
            "en": "advisable",
            "es": "recomendable",
            "imagen": "Persona revisando el pronóstico antes de salir",
            "ejemplo": [
              "It is advisable that you book in advance.",
              "Es recomendable que reserve con anticipación."
            ]
          },
          {
            "en": "urgent",
            "es": "urgente",
            "imagen": "Reloj y documentos con un sello rojo",
            "ejemplo": [
              "It is urgent that the bridge be repaired.",
              "Es urgente que se repare el puente."
            ]
          },
          {
            "en": "desirable",
            "es": "deseable",
            "imagen": "Equipo diverso trabajando en armonía",
            "ejemplo": [
              "It is desirable that all parties agree.",
              "Es deseable que todas las partes estén de acuerdo."
            ]
          },
          {
            "en": "fundamental",
            "es": "fundamental",
            "imagen": "Base de un edificio en construcción",
            "ejemplo": [
              "It is fundamental that children learn to read early.",
              "Es fundamental que los niños aprendan a leer pronto."
            ]
          },
          {
            "en": "preferable",
            "es": "preferible",
            "imagen": "Persona eligiendo entre dos opciones",
            "ejemplo": [
              "It is preferable that the meeting be held in the morning.",
              "Es preferible que la junta sea en la mañana."
            ]
          },
          {
            "en": "recommended",
            "es": "recomendado",
            "imagen": "Doctor sosteniendo un folleto de salud",
            "ejemplo": [
              "It is recommended that adults sleep at least seven hours.",
              "Se recomienda que los adultos duerman al menos siete horas."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I suggest that he see a doctor immediately.",
        "es": "Sugiero que vea a un doctor de inmediato."
      },
      {
        "en": "It is essential that every employee attend the training.",
        "es": "Es esencial que todos los empleados asistan a la capacitación."
      },
      {
        "en": "The workers demanded that the director resign.",
        "es": "Los trabajadores exigieron que el director renunciara."
      },
      {
        "en": "It is vital that he be informed before the meeting.",
        "es": "Es vital que se le informe antes de la junta."
      },
      {
        "en": "I insist that you stay for dinner.",
        "es": "Insisto en que te quedes a cenar."
      },
      {
        "en": "We request that guests not smoke inside.",
        "es": "Solicitamos a los clientes que no fumen adentro."
      },
      {
        "en": "The law requires that drivers wear a seatbelt.",
        "es": "La ley exige que los conductores usen cinturón."
      },
      {
        "en": "It is imperative that we act now.",
        "es": "Es imperativo que actuemos ya."
      },
      {
        "en": "Be that as it may, we still have to finish the project.",
        "es": "Sea como sea, todavía tenemos que terminar el proyecto."
      },
      {
        "en": "It is recommended that adults sleep at least seven hours.",
        "es": "Se recomienda que los adultos duerman al menos siete horas."
      }
    ],
    "frases": [
      {
        "en": "The committee recommends that the new policy be introduced gradually over the next two years.",
        "es": "El comité recomienda que la nueva política se introduzca gradualmente en los próximos dos años.",
        "imagen": "Comité reunido en una mesa larga revisando documentos"
      },
      {
        "en": "It is essential that all passengers have a valid passport before they arrive at the airport.",
        "es": "Es esencial que todos los pasajeros tengan un pasaporte vigente antes de llegar al aeropuerto.",
        "imagen": "Pasajeros mostrando pasaportes en un mostrador"
      },
      {
        "en": "My doctor insisted that I stop working at night and get more sleep.",
        "es": "Mi doctor insistió en que dejara de trabajar de noche y durmiera más.",
        "imagen": "Doctor hablando con seriedad a un paciente cansado"
      },
      {
        "en": "The parents demanded that the school provide more information about the trip.",
        "es": "Los papás exigieron que la escuela diera más información sobre la excursión.",
        "imagen": "Papás en una junta escolar con preguntas"
      },
      {
        "en": "It is vital that the patient not eat anything for twelve hours before the operation.",
        "es": "Es vital que el paciente no coma nada doce horas antes de la operación.",
        "imagen": "Enfermera explicando instrucciones a un paciente"
      },
      {
        "en": "I would suggest that you read the contract carefully before you sign anything.",
        "es": "Le sugeriría que lea el contrato con cuidado antes de firmar cualquier cosa.",
        "imagen": "Persona leyendo un contrato con una lupa"
      },
      {
        "en": "The judge ordered that the company pay compensation to all the workers.",
        "es": "El juez ordenó que la empresa pagara una indemnización a todos los trabajadores.",
        "imagen": "Juez con mazo en un tribunal"
      },
      {
        "en": "It is important that every member of the team understand the goals of the project.",
        "es": "Es importante que cada miembro del equipo entienda los objetivos del proyecto.",
        "imagen": "Equipo mirando una presentación con objetivos"
      },
      {
        "en": "The residents proposed that the empty land be turned into a community park.",
        "es": "Los vecinos propusieron que el terreno baldío se convirtiera en un parque comunitario.",
        "imagen": "Terreno baldío con vecinos imaginando un parque"
      },
      {
        "en": "Be that as it may, I still believe that we made the right decision.",
        "es": "Sea como sea, sigo creyendo que tomamos la decisión correcta.",
        "imagen": "Persona pensativa mirando por la ventana con convicción"
      }
    ],
    "listening": [
      {
        "audio": "The doctor suggested that my father walk thirty minutes every day.",
        "pregunta": "¿Qué sugirió el doctor?",
        "opciones": [
          "Que el papá caminara treinta minutos diarios",
          "Que tomara medicina",
          "Que dejara de trabajar",
          "Que bajara de peso rápido"
        ]
      },
      {
        "audio": "It is essential that you bring your ID to the exam.",
        "pregunta": "¿Qué es esencial llevar?",
        "opciones": [
          "Identificación",
          "Una calculadora",
          "Un lápiz",
          "Un diccionario"
        ]
      },
      {
        "audio": "The neighbors demanded that the factory stop working at night.",
        "pregunta": "¿Qué exigieron los vecinos?",
        "opciones": [
          "Que la fábrica no trabajara de noche",
          "Que cerrara",
          "Que contratara gente",
          "Que limpiara la calle"
        ]
      },
      {
        "audio": "We request that all mobile phones be switched off during the ceremony.",
        "pregunta": "¿Qué se pide?",
        "opciones": [
          "Apagar los celulares",
          "Guardar silencio",
          "Llegar temprano",
          "No tomar fotos"
        ]
      },
      {
        "audio": "I insist that you take the day off. You look exhausted.",
        "pregunta": "¿Qué insiste en que haga?",
        "opciones": [
          "Que se tome el día libre",
          "Que trabaje más",
          "Que vaya al doctor",
          "Que duerma en la oficina"
        ]
      }
    ],
    "lectura": {
      "titulo": "Recommendations from the health committee",
      "texto": "Following the recent increase in respiratory infections in the city, the regional health committee has published a series of recommendations for schools and workplaces. The committee recommends that all classrooms and offices be ventilated regularly, at least every two hours. It is essential that anyone with a fever or a persistent cough stay at home until they have fully recovered. The committee also suggests that employers allow staff to work from home whenever possible. In schools, it is vital that children wash their hands frequently, and the committee has requested that soap and clean water be available in every bathroom. Furthermore, it is advisable that elderly people and those with chronic illnesses avoid crowded places during the winter months. Finally, the committee insists that the public not panic: the situation is under control, and these measures are preventive. It is important that everyone follow official information and not share unverified news on social media.",
      "preguntas": [
        {
          "pregunta": "¿Cada cuánto se recomienda ventilar los salones?",
          "opciones": [
            "Al menos cada dos horas",
            "Una vez al día",
            "Cada semana",
            "Solo en la mañana"
          ]
        },
        {
          "pregunta": "¿Qué deben hacer las personas con fiebre?",
          "opciones": [
            "Quedarse en casa hasta recuperarse",
            "Ir a trabajar con cubrebocas",
            "Ir al hospital de inmediato",
            "Tomar antibióticos"
          ]
        },
        {
          "pregunta": "¿Qué deben evitar los adultos mayores?",
          "opciones": [
            "Lugares concurridos en invierno",
            "Salir de casa",
            "Comer fuera",
            "Viajar en carro"
          ]
        },
        {
          "pregunta": "¿Qué pide el comité al público?",
          "opciones": [
            "Que no entre en pánico",
            "Que se quede en casa siempre",
            "Que compre medicinas",
            "Que deje de ir a la escuela"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con el subjuntivo.",
        "pregunta": "I suggest that he ___ (call) her.",
        "respuestas": [
          "call"
        ]
      },
      {
        "instruccion": "Completa con el subjuntivo.",
        "pregunta": "It is essential that she ___ (be) on time.",
        "respuestas": [
          "be"
        ]
      },
      {
        "instruccion": "Completa con el subjuntivo.",
        "pregunta": "They demanded that the manager ___ (apologize).",
        "respuestas": [
          "apologize",
          "apologise"
        ]
      },
      {
        "instruccion": "Completa con el subjuntivo negativo.",
        "pregunta": "We request that guests ___ smoke in the rooms.",
        "respuestas": [
          "not"
        ]
      },
      {
        "instruccion": "Completa con el subjuntivo.",
        "pregunta": "It is vital that the documents ___ (sign) today.",
        "respuestas": [
          "be signed"
        ]
      },
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "Be that as it ___, we must continue.",
        "respuestas": [
          "may"
        ]
      },
      {
        "instruccion": "Traduce al inglés (formal).",
        "pregunta": "Sugiero que vea a un doctor.",
        "respuestas": [
          "I suggest that he see a doctor",
          "I suggest that she see a doctor",
          "I suggest that you see a doctor",
          "I suggest he see a doctor",
          "I suggest she see a doctor"
        ]
      },
      {
        "instruccion": "Traduce al inglés (formal).",
        "pregunta": "Es esencial que asistan.",
        "respuestas": [
          "It is essential that they attend",
          "It's essential that they attend"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "sea como sea",
        "respuestas": [
          "be that as it may",
          "whatever the case"
        ]
      },
      {
        "instruccion": "Corrige la oración (formal).",
        "pregunta": "I recommend him to take a break.",
        "respuestas": [
          "I recommend that he take a break",
          "I recommend that he should take a break",
          "I recommend taking a break"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "The teacher insisted that he ___ the exam again.",
        "opciones": [
          "take",
          "takes",
          "took",
          "taking"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "It is important that everyone ___ informed.",
        "opciones": [
          "be",
          "is",
          "are",
          "being"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I suggest that she ___ a lawyer.",
        "opciones": [
          "consult",
          "consults",
          "consulted",
          "to consult"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We ask that visitors ___ touch the paintings.",
        "opciones": [
          "not",
          "don't",
          "doesn't",
          "no"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es incorrecta?",
        "opciones": [
          "I suggest him to rest.",
          "I suggest that he rest.",
          "I suggest resting.",
          "I suggest that he should rest."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«It is imperative that…» significa:",
        "opciones": [
          "Es imperativo que…",
          "Es posible que…",
          "Es raro que…",
          "Es imposible que…"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The lawyer recommended that we not sign anything until next week.",
        "pregunta": "¿Qué recomendó el abogado?",
        "opciones": [
          "No firmar nada hasta la próxima semana",
          "Firmar de inmediato",
          "Cambiar de abogado",
          "Ir a juicio"
        ]
      },
      {
        "tipo": "listening",
        "audio": "It is crucial that the children be vaccinated before the school year starts.",
        "pregunta": "¿Qué es crucial?",
        "opciones": [
          "Que vacunen a los niños antes del ciclo escolar",
          "Que compren útiles",
          "Que se inscriban",
          "Que lleguen temprano"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Insisto en que te quedes.",
        "respuestas": [
          "I insist that you stay",
          "I insist you stay"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Es vital que se le informe.",
        "respuestas": [
          "It is vital that he be informed",
          "It is vital that she be informed",
          "It's vital that he be informed",
          "It's vital that she be informed"
        ]
      }
    ]
  },
  {
    "id": "c1-09",
    "num": 9,
    "titulo": "Elipsis y sustitución (so, not, do so, one)",
    "contexto": "Evitar repeticiones",
    "explicacion": {
      "es": [
        "En inglés se evita **repetir** palabras usando **sustitutos**. ***So*** y ***not*** sustituyen una oración completa después de ***think, hope, expect, suppose, believe, be afraid***: *Will it rain? — I **hope not**.* (Espero que no.) *Is she coming? — I **think so**.* (Creo que sí.)",
        "***One / ones*** sustituyen un **sustantivo contable**: *I don't like this shirt. I prefer the blue **one**.* (Prefiero la azul.) *These shoes are nicer than the old **ones**.*",
        "***Do / does / did*** y ***do so*** sustituyen un **verbo con su complemento**: *She speaks French, and so **does** her brother.* *I asked him to leave, and he **did so** immediately.* (formal)",
        "La **elipsis** consiste en **omitir** palabras que se entienden por el contexto: *I'd like to come, but I can't* (omitimos *come*). *You can go if you want **to*** (omitimos el verbo después de *to*). *Coffee? — Yes, please.*"
      ],
      "tabla": {
        "columnas": [
          "Sustituto",
          "Ejemplo",
          "Significado"
        ],
        "filas": [
          [
            "I think so / I hope so",
            "Is it open? — I think so.",
            "Creo que sí."
          ],
          [
            "I'm afraid not / I hope not",
            "Is it expensive? — I'm afraid so.",
            "Me temo que sí."
          ],
          [
            "one / ones",
            "I'll take the red one.",
            "Me llevo el rojo."
          ],
          [
            "do / does / did",
            "She loves jazz, and so do I.",
            "Y yo también."
          ],
          [
            "do so (formal)",
            "If you wish to cancel, you may do so online.",
            "puede hacerlo en línea"
          ],
          [
            "elipsis con to",
            "I didn't want to go, but I had to.",
            "pero tuve que (ir)"
          ]
        ]
      },
      "ojo": [
        "Negativo con *think*: lo natural es ***I don't think so*** (no *I think not*, que suena formal). Con *hope* y *be afraid*: ***I hope not, I'm afraid not***.",
        "***One*** no se usa con incontables: *I want some water, the cold **one*** ❌ → *the cold water* o *some cold* ✅.",
        "***So do I / Neither do I*** para estar de acuerdo: *I love tacos. — **So do I**.* *I can't swim. — **Neither can I**.*",
        "Respuestas cortas con auxiliar: *Are you tired? — Yes, I **am**. Have you finished? — No, I **haven't**.*",
        "En conversación se omite mucho al inicio: ***Sounds good.*** (*That sounds good*). ***Never mind.*** ***Want some?*** (*Do you want some?*)"
      ],
      "en": [
        "So and not replace a whole clause: Will it rain? I hope not. Is she coming? I think so.",
        "One and ones replace a countable noun: I prefer the blue one.",
        "Do and do so replace a verb phrase: She speaks French, and so does her brother.",
        "Ellipsis omits words: I'd like to come, but I can't. You can go if you want to."
      ]
    },
    "vocabulario": [
      {
        "en": "I think so.",
        "es": "creo que sí",
        "imagen": "Persona asintiendo con la mano en la barbilla",
        "ejemplo": [
          "Is the store open today? I think so.",
          "¿Abre la tienda hoy? Creo que sí."
        ]
      },
      {
        "en": "I hope not.",
        "es": "espero que no",
        "imagen": "Persona mirando nubes negras con preocupación",
        "ejemplo": [
          "Will it rain tomorrow? I hope not.",
          "¿Lloverá mañana? Espero que no."
        ]
      },
      {
        "en": "I'm afraid so.",
        "es": "me temo que sí",
        "imagen": "Persona dando una mala noticia con cara de pena",
        "ejemplo": [
          "Is the flight canceled? I'm afraid so.",
          "¿Se canceló el vuelo? Me temo que sí."
        ]
      },
      {
        "en": "I don't think so.",
        "es": "creo que no",
        "imagen": "Persona negando con la cabeza suavemente",
        "ejemplo": [
          "Is he coming to the party? I don't think so.",
          "¿Viene a la fiesta? Creo que no."
        ]
      },
      {
        "en": "the blue one",
        "es": "el azul",
        "imagen": "Dos camisas, una azul y una roja",
        "ejemplo": [
          "I don't like this shirt. I prefer the blue one.",
          "No me gusta esta camisa. Prefiero la azul."
        ]
      },
      {
        "en": "the old ones",
        "es": "los viejos",
        "imagen": "Tenis nuevos junto a unos viejos",
        "ejemplo": [
          "These shoes are more comfortable than the old ones.",
          "Estos zapatos son más cómodos que los viejos."
        ]
      },
      {
        "en": "So do I.",
        "es": "yo también",
        "imagen": "Dos amigos chocando las manos",
        "ejemplo": [
          "I love Mexican food. So do I!",
          "Me encanta la comida mexicana. ¡A mí también!"
        ]
      },
      {
        "en": "Neither can I.",
        "es": "yo tampoco",
        "imagen": "Dos personas mirando una piscina sin saber nadar",
        "ejemplo": [
          "I can't swim. Neither can I.",
          "No sé nadar. Yo tampoco."
        ]
      },
      {
        "en": "and so does her brother",
        "es": "y su hermano también",
        "imagen": "Hermanos conversando con un turista francés",
        "ejemplo": [
          "She speaks French, and so does her brother.",
          "Ella habla francés, y su hermano también."
        ]
      },
      {
        "en": "He did so immediately.",
        "es": "lo hizo de inmediato",
        "imagen": "Persona saliendo rápido de una sala",
        "ejemplo": [
          "I asked him to leave, and he did so immediately.",
          "Le pedí que se fuera, y lo hizo de inmediato."
        ]
      },
      {
        "en": "if you want to",
        "es": "si quieres",
        "imagen": "Persona invitando a otra con un gesto amable",
        "ejemplo": [
          "You can come with us if you want to.",
          "Puedes venir con nosotros si quieres."
        ]
      },
      {
        "en": "but I can't",
        "es": "pero no puedo",
        "imagen": "Persona disculpándose frente a una invitación",
        "ejemplo": [
          "I'd love to help, but I can't.",
          "Me encantaría ayudar, pero no puedo."
        ]
      },
      {
        "en": "I suppose so.",
        "es": "supongo que sí",
        "imagen": "Persona encogiéndose de hombros",
        "ejemplo": [
          "Do we have to go? I suppose so.",
          "¿Tenemos que ir? Supongo que sí."
        ]
      },
      {
        "en": "Sounds good.",
        "es": "suena bien",
        "imagen": "Persona sonriendo con el pulgar arriba",
        "ejemplo": [
          "Dinner at eight? Sounds good.",
          "¿Cena a las ocho? Suena bien."
        ]
      },
      {
        "en": "Never mind.",
        "es": "no importa",
        "imagen": "Persona haciendo un gesto de dejarlo pasar",
        "ejemplo": [
          "Never mind, I'll do it myself.",
          "No importa, lo hago yo."
        ]
      },
      {
        "en": "which one?",
        "es": "¿cuál?",
        "imagen": "Persona señalando varios pasteles en una vitrina",
        "ejemplo": [
          "I want a cake. Which one?",
          "Quiero un pastel. ¿Cuál?"
        ]
      }
    ],
    "grupos": [
      {
        "id": "respuestas",
        "titulo": "Respuestas cortas",
        "icono": "💬",
        "patron": [
          "I think so.",
          "I hope not.",
          "So do I."
        ],
        "palabras": [
          {
            "en": "I believe so.",
            "es": "creo que sí",
            "imagen": "Persona pensativa respondiendo con calma",
            "ejemplo": [
              "Is this the right train? I believe so.",
              "¿Es este el tren correcto? Creo que sí."
            ]
          },
          {
            "en": "I guess not.",
            "es": "supongo que no",
            "imagen": "Persona encogiéndose de hombros con resignación",
            "ejemplo": [
              "Are they still open? I guess not.",
              "¿Siguen abiertos? Supongo que no."
            ]
          },
          {
            "en": "I expect so.",
            "es": "supongo que sí",
            "imagen": "Persona mirando el reloj con confianza",
            "ejemplo": [
              "Will they be late? I expect so.",
              "¿Llegarán tarde? Supongo que sí."
            ]
          },
          {
            "en": "Nor do I.",
            "es": "ni yo",
            "imagen": "Dos personas negando a la vez",
            "ejemplo": [
              "I don't understand this. Nor do I.",
              "No entiendo esto. Ni yo."
            ]
          },
          {
            "en": "Me too.",
            "es": "yo también",
            "imagen": "Dos amigos levantando la mano a la vez",
            "ejemplo": [
              "I'm hungry. Me too.",
              "Tengo hambre. Yo también."
            ]
          },
          {
            "en": "Of course not.",
            "es": "claro que no",
            "imagen": "Persona negando con una sonrisa",
            "ejemplo": [
              "Did you tell anyone? Of course not!",
              "¿Le dijiste a alguien? ¡Claro que no!"
            ]
          }
        ]
      },
      {
        "id": "one",
        "titulo": "One y ones",
        "icono": "👉",
        "patron": [
          "this one",
          "the big ones",
          "a cheaper one"
        ],
        "palabras": [
          {
            "en": "this one",
            "es": "este",
            "imagen": "Mano señalando un producto en un estante",
            "ejemplo": [
              "I'll take this one, please.",
              "Me llevo este, por favor."
            ]
          },
          {
            "en": "that one",
            "es": "ese",
            "imagen": "Persona señalando un pastel en una vitrina",
            "ejemplo": [
              "Not that one, the one with strawberries.",
              "Ese no, el de fresas."
            ]
          },
          {
            "en": "a cheaper one",
            "es": "uno más barato",
            "imagen": "Persona comparando precios de dos celulares",
            "ejemplo": [
              "This phone is too expensive. Do you have a cheaper one?",
              "Este celular está muy caro. ¿Tiene uno más barato?"
            ]
          },
          {
            "en": "the big ones",
            "es": "los grandes",
            "imagen": "Montón de naranjas grandes en un mercado",
            "ejemplo": [
              "I'd like some oranges. The big ones, please.",
              "Quisiera unas naranjas. Las grandes, por favor."
            ]
          },
          {
            "en": "the one on the left",
            "es": "el de la izquierda",
            "imagen": "Dos carros estacionados, uno señalado",
            "ejemplo": [
              "My car is the one on the left.",
              "Mi carro es el de la izquierda."
            ]
          },
          {
            "en": "the ones I bought",
            "es": "los que compré",
            "imagen": "Libros nuevos sobre una mesa",
            "ejemplo": [
              "These are the ones I bought yesterday.",
              "Estos son los que compré ayer."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Is the store open today? I think so.",
        "es": "¿Abre la tienda hoy? Creo que sí."
      },
      {
        "en": "Will it rain tomorrow? I hope not.",
        "es": "¿Lloverá mañana? Espero que no."
      },
      {
        "en": "Is the flight canceled? I'm afraid so.",
        "es": "¿Se canceló el vuelo? Me temo que sí."
      },
      {
        "en": "I don't like this shirt. I prefer the blue one.",
        "es": "No me gusta esta camisa. Prefiero la azul."
      },
      {
        "en": "I love Mexican food. So do I!",
        "es": "Me encanta la comida mexicana. ¡A mí también!"
      },
      {
        "en": "She speaks French, and so does her brother.",
        "es": "Ella habla francés, y su hermano también."
      },
      {
        "en": "You can come with us if you want to.",
        "es": "Puedes venir con nosotros si quieres."
      },
      {
        "en": "I'd love to help, but I can't.",
        "es": "Me encantaría ayudar, pero no puedo."
      },
      {
        "en": "This phone is too expensive. Do you have a cheaper one?",
        "es": "Este celular está muy caro. ¿Tiene uno más barato?"
      },
      {
        "en": "Never mind, I'll do it myself.",
        "es": "No importa, lo hago yo."
      }
    ],
    "frases": [
      {
        "en": "Do you think the museum will be crowded on Sunday? I'm afraid so, it's free that day.",
        "es": "¿Crees que el museo estará lleno el domingo? Me temo que sí, ese día es gratis.",
        "imagen": "Fila larga en la entrada de un museo un domingo"
      },
      {
        "en": "I wanted to buy the red dress, but they didn't have it in my size, so I bought the black one.",
        "es": "Quería comprar el vestido rojo, pero no lo tenían en mi talla, así que compré el negro.",
        "imagen": "Persona eligiendo un vestido negro en una tienda"
      },
      {
        "en": "My sister has visited twenty countries, and so has her husband.",
        "es": "Mi hermana ha visitado veinte países, y su esposo también.",
        "imagen": "Pareja con un mapa lleno de pines"
      },
      {
        "en": "If you wish to change your reservation, you can do so on our website.",
        "es": "Si desea cambiar su reservación, puede hacerlo en nuestro sitio web.",
        "imagen": "Persona modificando una reservación en su laptop"
      },
      {
        "en": "I didn't want to go to the meeting, but I had to.",
        "es": "No quería ir a la junta, pero tuve que hacerlo.",
        "imagen": "Persona entrando con desgano a una sala de juntas"
      },
      {
        "en": "Is the new manager going to change everything? I hope not, we've just got used to the old system.",
        "es": "¿El nuevo gerente va a cambiar todo? Espero que no, apenas nos acostumbramos al sistema anterior.",
        "imagen": "Empleados preocupados viendo entrar a un nuevo jefe"
      },
      {
        "en": "These apples are delicious. Can I have another one?",
        "es": "Estas manzanas están deliciosas. ¿Me das otra?",
        "imagen": "Persona mordiendo una manzana roja"
      },
      {
        "en": "He said he would help us, and he did, even though he was very busy.",
        "es": "Dijo que nos ayudaría, y lo hizo, aunque estaba muy ocupado.",
        "imagen": "Amigo ayudando a cargar cajas a pesar de estar ocupado"
      },
      {
        "en": "I don't usually drink coffee in the afternoon, but today I will, because I'm exhausted.",
        "es": "Normalmente no tomo café en la tarde, pero hoy sí, porque estoy agotado.",
        "imagen": "Persona cansada sirviéndose café en la oficina"
      },
      {
        "en": "Are you coming to the beach with us? I'd like to, but I have to work.",
        "es": "¿Vienes a la playa con nosotros? Me gustaría, pero tengo que trabajar.",
        "imagen": "Persona en la oficina mirando fotos de amigos en la playa"
      }
    ],
    "listening": [
      {
        "audio": "Is the bank open on Saturdays? I think so, but only in the morning.",
        "pregunta": "¿Cuándo abre el banco los sábados?",
        "opciones": [
          "Solo en la mañana",
          "Todo el día",
          "No abre",
          "En la tarde"
        ]
      },
      {
        "audio": "I can't stand horror movies. Neither can I. Let's watch a comedy.",
        "pregunta": "¿Qué van a ver?",
        "opciones": [
          "Una comedia",
          "Una de terror",
          "Un documental",
          "Nada"
        ]
      },
      {
        "audio": "Which jacket do you prefer? The leather one. It looks warmer.",
        "pregunta": "¿Cuál chamarra prefiere?",
        "opciones": [
          "La de piel",
          "La de mezclilla",
          "La azul",
          "La más barata"
        ]
      },
      {
        "audio": "Will we arrive before the show starts? I hope so, but the traffic is terrible.",
        "pregunta": "¿Por qué tiene dudas?",
        "opciones": [
          "Por el tráfico",
          "Por la lluvia",
          "Porque salieron tarde",
          "Porque no tienen boletos"
        ]
      },
      {
        "audio": "My brother loves cooking, and so does my father. My mother doesn't.",
        "pregunta": "¿A quién no le gusta cocinar?",
        "opciones": [
          "A la mamá",
          "Al papá",
          "Al hermano",
          "A nadie"
        ]
      }
    ],
    "lectura": {
      "titulo": "Shopping with my grandmother",
      "texto": "Last weekend I went shopping with my grandmother, who needed a new coat. We entered the first store, and she tried on a brown one. Do you like it? she asked. I think so, I said, but maybe a lighter one would be better. She tried on a beige one, and then a grey one. Is it too expensive? she asked the shop assistant. I'm afraid so, said the young man, it's made of real wool. My grandmother doesn't like spending a lot of money, and neither do I, so we left. In the second store, she found exactly what she wanted: a warm, dark blue coat. It was cheaper than the others, and she said it was the most comfortable one she had ever worn. Shall we get something to eat? she asked. I'd love to, I replied. We went to a small café, where she ordered a hot chocolate, and so did I. Will you come shopping with me again? she asked. I hope so, I said.",
      "preguntas": [
        {
          "pregunta": "¿Qué necesitaba la abuela?",
          "opciones": [
            "Un abrigo nuevo",
            "Zapatos",
            "Un vestido",
            "Una bolsa"
          ]
        },
        {
          "pregunta": "¿Por qué no compraron en la primera tienda?",
          "opciones": [
            "Era demasiado caro",
            "No le gustó el color",
            "No había su talla",
            "Estaba cerrada"
          ]
        },
        {
          "pregunta": "¿De qué color era el abrigo que compró?",
          "opciones": [
            "Azul oscuro",
            "Café",
            "Gris",
            "Beige"
          ]
        },
        {
          "pregunta": "¿Qué pidió el narrador en el café?",
          "opciones": [
            "Un chocolate caliente",
            "Un café",
            "Un té",
            "Nada"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con so o not.",
        "pregunta": "Is it going to rain? I hope ___.",
        "respuestas": [
          "not"
        ]
      },
      {
        "instruccion": "Completa con so o not.",
        "pregunta": "Is she at home? I think ___.",
        "respuestas": [
          "so"
        ]
      },
      {
        "instruccion": "Completa con one u ones.",
        "pregunta": "I don't want the small shoes. I want the big ___.",
        "respuestas": [
          "ones"
        ]
      },
      {
        "instruccion": "Completa con one u ones.",
        "pregunta": "This cake is delicious. Can I have another ___?",
        "respuestas": [
          "one"
        ]
      },
      {
        "instruccion": "Completa con do, does o did.",
        "pregunta": "She likes jazz, and so ___ her husband.",
        "respuestas": [
          "does"
        ]
      },
      {
        "instruccion": "Completa con neither o so.",
        "pregunta": "I can't drive. ___ can I.",
        "respuestas": [
          "Neither",
          "Nor"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Me temo que sí.",
        "respuestas": [
          "I'm afraid so",
          "I am afraid so"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Creo que no.",
        "respuestas": [
          "I don't think so",
          "I do not think so"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Me llevo el rojo.",
        "respuestas": [
          "I'll take the red one",
          "I will take the red one"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I want a water cold one.",
        "respuestas": [
          "I want some cold water",
          "I want a cold water",
          "I want cold water"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "Will the shop be open? I ___ so.",
        "opciones": [
          "think",
          "think not",
          "don't think",
          "not think"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Is it expensive? I'm afraid ___.",
        "opciones": [
          "so",
          "it",
          "yes",
          "that"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I like the green car, but my wife prefers the white ___.",
        "opciones": [
          "one",
          "ones",
          "it",
          "this"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I love swimming. — So ___ I.",
        "opciones": [
          "do",
          "am",
          "can",
          "have"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "You can leave early if you want ___.",
        "opciones": [
          "to",
          "it",
          "so",
          "that"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Neither can I» significa:",
        "opciones": [
          "Yo tampoco puedo",
          "Yo sí puedo",
          "Nadie puede",
          "Ninguno puede"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Did you lock the door? I think so, but I'm not completely sure.",
        "pregunta": "¿Cerró la puerta?",
        "opciones": [
          "Cree que sí, pero no está seguro",
          "Sí, seguro",
          "No",
          "No se acuerda para nada"
        ]
      },
      {
        "tipo": "listening",
        "audio": "If you would like to make a complaint, you may do so in writing.",
        "pregunta": "¿Cómo se puede presentar una queja?",
        "opciones": [
          "Por escrito",
          "Por teléfono",
          "En persona",
          "No se puede"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Espero que no.",
        "respuestas": [
          "I hope not"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¿Tiene uno más barato?",
        "respuestas": [
          "Do you have a cheaper one",
          "Have you got a cheaper one"
        ]
      }
    ]
  },
  {
    "id": "c1-10",
    "num": 10,
    "titulo": "Énfasis con auxiliares e intensificadores",
    "contexto": "Expresar sentimientos con fuerza",
    "explicacion": {
      "es": [
        "En oraciones **afirmativas** se puede añadir ***do / does / did*** antes del verbo para dar **énfasis**, contradecir o insistir: *I **do** love you!* (¡De verdad te quiero!) *She **does** work hard, even if you don't see it.* *I **did** call you, but you didn't answer.* (¡Sí te llamé!)",
        "Con otros auxiliares, el énfasis está en la **voz**: se pronuncian **fuerte** y sin contracción: *I **AM** listening!* (¡Sí te estoy escuchando!) *You **HAVE** been working hard.*",
        "Los **intensificadores** refuerzan adjetivos. Con adjetivos normales: ***very, really, extremely, incredibly, terribly***. Con adjetivos **extremos** (*amazing, terrible, exhausted, freezing*) se usa ***absolutely, completely, totally, utterly***: *It was **absolutely** amazing.* (no *very amazing* ❌)",
        "Otras formas de énfasis: ***the very*** (justo, el mismísimo): *at **the very** beginning*; ***such*** / ***so***: *It was **such** a relief!*; ***on earth / ever*** en preguntas: *What **on earth** are you doing?* (¿Qué rayos estás haciendo?) ***Whatever / at all*** en negativas: *I have no idea **whatsoever**.*"
      ],
      "tabla": {
        "columnas": [
          "Recurso",
          "Ejemplo",
          "Español"
        ],
        "filas": [
          [
            "do / does / did + verbo",
            "I did tell you!",
            "¡Sí te dije!"
          ],
          [
            "auxiliar acentuado",
            "I AM trying!",
            "¡Sí estoy intentando!"
          ],
          [
            "absolutely + adjetivo extremo",
            "It's absolutely freezing.",
            "Hace un frío espantoso."
          ],
          [
            "really / extremely + adjetivo normal",
            "She's extremely kind.",
            "Es amabilísima."
          ],
          [
            "on earth / ever",
            "Why on earth did you do that?",
            "¿Por qué rayos hiciste eso?"
          ],
          [
            "the very",
            "This is the very thing I needed.",
            "Es justo lo que necesitaba."
          ]
        ]
      },
      "ojo": [
        "*Very amazing* ❌ → ***absolutely amazing*** ✅. *Absolutely good* ❌ → ***really good*** ✅.",
        "***Do*** enfático solo en **afirmativo** y en presente o pasado simple: *I **do** like it* ✅.",
        "***Do*** al inicio de un imperativo suena **cálido e insistente**: ***Do** come in! **Do** sit down!* (¡Pásale, siéntate!)",
        "***Whatsoever*** y ***at all*** refuerzan negativas: *There's no reason **whatsoever** to worry.*",
        "***Quite*** cambia de sentido: con adjetivo normal = **bastante** (*quite good*); con extremo = **totalmente** (*quite amazing*)."
      ],
      "en": [
        "We add do, does or did for emphasis: I do love you! I did call you, but you didn't answer.",
        "With other auxiliaries, we stress them in speech: I am listening!",
        "With extreme adjectives use absolutely: It was absolutely amazing.",
        "What on earth are you doing? This is the very thing I needed."
      ]
    },
    "vocabulario": [
      {
        "en": "I do love you!",
        "es": "¡de verdad te quiero!",
        "imagen": "Pareja abrazándose con emoción",
        "ejemplo": [
          "I do love you, even if I don't say it often.",
          "De verdad te quiero, aunque no lo diga seguido."
        ]
      },
      {
        "en": "I did call you!",
        "es": "¡sí te llamé!",
        "imagen": "Persona mostrando su historial de llamadas",
        "ejemplo": [
          "I did call you, but you didn't answer!",
          "¡Sí te llamé, pero no contestaste!"
        ]
      },
      {
        "en": "She does work hard.",
        "es": "ella sí trabaja duro",
        "imagen": "Mujer trabajando concentrada en su oficina",
        "ejemplo": [
          "She does work hard, even if you don't see it.",
          "Ella sí trabaja duro, aunque no lo veas."
        ]
      },
      {
        "en": "Do come in!",
        "es": "¡pásale!",
        "imagen": "Anfitriona abriendo la puerta con una sonrisa",
        "ejemplo": [
          "Do come in and make yourself at home!",
          "¡Pásale y siéntete como en tu casa!"
        ]
      },
      {
        "en": "absolutely amazing",
        "es": "absolutamente increíble",
        "imagen": "Personas maravilladas frente a una aurora boreal",
        "ejemplo": [
          "The concert was absolutely amazing.",
          "El concierto fue absolutamente increíble."
        ]
      },
      {
        "en": "absolutely freezing",
        "es": "haciendo un frío espantoso",
        "imagen": "Persona temblando con bufanda en la nieve",
        "ejemplo": [
          "It's absolutely freezing outside!",
          "¡Afuera hace un frío espantoso!"
        ]
      },
      {
        "en": "completely exhausted",
        "es": "completamente agotado",
        "imagen": "Persona dormida sobre su escritorio",
        "ejemplo": [
          "After the trip, I was completely exhausted.",
          "Después del viaje, estaba completamente agotado."
        ]
      },
      {
        "en": "extremely kind",
        "es": "amabilísimo",
        "imagen": "Vecina ayudando a cargar bolsas",
        "ejemplo": [
          "Our neighbor is extremely kind.",
          "Nuestra vecina es amabilísima."
        ]
      },
      {
        "en": "What on earth",
        "es": "¿qué rayos…?",
        "imagen": "Mamá sorprendida viendo una cocina desordenada",
        "ejemplo": [
          "What on earth are you doing?",
          "¿Qué rayos estás haciendo?"
        ]
      },
      {
        "en": "Why on earth",
        "es": "¿por qué rayos…?",
        "imagen": "Persona confundida con las manos en la cabeza",
        "ejemplo": [
          "Why on earth did you buy that?",
          "¿Por qué rayos compraste eso?"
        ]
      },
      {
        "en": "the very thing",
        "es": "justo lo que",
        "imagen": "Persona feliz abriendo un regalo",
        "ejemplo": [
          "This is the very thing I needed.",
          "Esto es justo lo que necesitaba."
        ]
      },
      {
        "en": "at the very beginning",
        "es": "justo al principio",
        "imagen": "Persona en la línea de salida de una carrera",
        "ejemplo": [
          "I made a mistake at the very beginning.",
          "Cometí un error justo al principio."
        ]
      },
      {
        "en": "no idea whatsoever",
        "es": "ni la menor idea",
        "imagen": "Persona encogiéndose de hombros confundida",
        "ejemplo": [
          "I have no idea whatsoever.",
          "No tengo ni la menor idea."
        ]
      },
      {
        "en": "not at all",
        "es": "para nada",
        "imagen": "Persona negando con una sonrisa",
        "ejemplo": [
          "I'm not tired at all.",
          "No estoy nada cansado."
        ]
      },
      {
        "en": "terribly sorry",
        "es": "terriblemente apenado",
        "imagen": "Persona disculpándose con las manos juntas",
        "ejemplo": [
          "I'm terribly sorry for the delay.",
          "Lamento muchísimo el retraso."
        ]
      },
      {
        "en": "utterly ridiculous",
        "es": "completamente ridículo",
        "imagen": "Persona riéndose incrédula",
        "ejemplo": [
          "That idea is utterly ridiculous.",
          "Esa idea es completamente ridícula."
        ]
      }
    ],
    "grupos": [
      {
        "id": "extremos",
        "titulo": "Adjetivos extremos",
        "icono": "🔥",
        "patron": [
          "absolutely furious",
          "totally exhausted",
          "completely delighted"
        ],
        "palabras": [
          {
            "en": "furious",
            "es": "furioso",
            "imagen": "Persona muy enojada con la cara roja",
            "ejemplo": [
              "My boss was absolutely furious.",
              "Mi jefe estaba absolutamente furioso."
            ]
          },
          {
            "en": "delighted",
            "es": "encantado",
            "imagen": "Persona radiante abriendo un regalo",
            "ejemplo": [
              "I'm absolutely delighted with the result.",
              "Estoy encantadísimo con el resultado."
            ]
          },
          {
            "en": "starving",
            "es": "muerto de hambre",
            "imagen": "Persona devorando un plato de tacos",
            "ejemplo": [
              "I'm absolutely starving. Let's eat.",
              "Me muero de hambre. Vamos a comer."
            ]
          },
          {
            "en": "boiling",
            "es": "hirviendo / un calor terrible",
            "imagen": "Persona sudando bajo el sol",
            "ejemplo": [
              "It's absolutely boiling today.",
              "Hoy hace un calor terrible."
            ]
          },
          {
            "en": "hilarious",
            "es": "chistosísimo",
            "imagen": "Amigos llorando de risa",
            "ejemplo": [
              "The movie was absolutely hilarious.",
              "La película fue chistosísima."
            ]
          },
          {
            "en": "terrified",
            "es": "aterrado",
            "imagen": "Persona escondida detrás de un cojín",
            "ejemplo": [
              "She was absolutely terrified of the dog.",
              "Estaba aterrada del perro."
            ]
          }
        ]
      },
      {
        "id": "insistir",
        "titulo": "Insistir y contradecir",
        "icono": "❗",
        "patron": [
          "I do…",
          "I did…",
          "I am…"
        ],
        "palabras": [
          {
            "en": "I do understand",
            "es": "sí entiendo",
            "imagen": "Persona asintiendo con empatía",
            "ejemplo": [
              "I do understand how you feel.",
              "Sí entiendo cómo te sientes."
            ]
          },
          {
            "en": "I did warn you",
            "es": "sí te advertí",
            "imagen": "Persona señalando con un \"te lo dije\"",
            "ejemplo": [
              "I did warn you about the traffic!",
              "¡Sí te advertí del tráfico!"
            ]
          },
          {
            "en": "He does care",
            "es": "sí le importa",
            "imagen": "Papá preocupado mirando a su hijo de lejos",
            "ejemplo": [
              "He does care about you, he just doesn't show it.",
              "Sí le importas, solo que no lo demuestra."
            ]
          },
          {
            "en": "I am trying",
            "es": "sí estoy intentando",
            "imagen": "Persona esforzándose con una tarea difícil",
            "ejemplo": [
              "I am trying! It's just really difficult.",
              "¡Sí estoy intentando! Es que está muy difícil."
            ]
          },
          {
            "en": "Do sit down",
            "es": "siéntese, por favor",
            "imagen": "Anfitrión señalando una silla con amabilidad",
            "ejemplo": [
              "Do sit down, the food is almost ready.",
              "Siéntese, la comida ya casi está."
            ]
          },
          {
            "en": "You do look tired",
            "es": "sí te ves cansado",
            "imagen": "Persona con ojeras en la oficina",
            "ejemplo": [
              "You do look tired. Go home early.",
              "Sí te ves cansado. Vete temprano."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I do love you, even if I don't say it often.",
        "es": "De verdad te quiero, aunque no lo diga seguido."
      },
      {
        "en": "I did call you, but you didn't answer!",
        "es": "¡Sí te llamé, pero no contestaste!"
      },
      {
        "en": "Do come in and make yourself at home!",
        "es": "¡Pásale y siéntete como en tu casa!"
      },
      {
        "en": "The concert was absolutely amazing.",
        "es": "El concierto fue absolutamente increíble."
      },
      {
        "en": "It's absolutely freezing outside!",
        "es": "¡Afuera hace un frío espantoso!"
      },
      {
        "en": "What on earth are you doing?",
        "es": "¿Qué rayos estás haciendo?"
      },
      {
        "en": "This is the very thing I needed.",
        "es": "Esto es justo lo que necesitaba."
      },
      {
        "en": "I have no idea whatsoever.",
        "es": "No tengo ni la menor idea."
      },
      {
        "en": "I'm absolutely starving. Let's eat.",
        "es": "Me muero de hambre. Vamos a comer."
      },
      {
        "en": "I did warn you about the traffic!",
        "es": "¡Sí te advertí del tráfico!"
      }
    ],
    "frases": [
      {
        "en": "I know you think I wasn't paying attention, but I did listen to everything you said.",
        "es": "Sé que crees que no estaba poniendo atención, pero sí escuché todo lo que dijiste.",
        "imagen": "Persona repitiendo instrucciones a su amiga sorprendida"
      },
      {
        "en": "The view from the top of the volcano was absolutely breathtaking.",
        "es": "La vista desde la cima del volcán era absolutamente impresionante.",
        "imagen": "Excursionistas en la cima de un volcán al amanecer"
      },
      {
        "en": "Why on earth would anyone want to live in such a noisy neighborhood?",
        "es": "¿Por qué rayos querría alguien vivir en una colonia tan ruidosa?",
        "imagen": "Calle muy ruidosa con tráfico y bocinas"
      },
      {
        "en": "We do appreciate your help, and we'd like to thank you with a small gift.",
        "es": "De verdad apreciamos tu ayuda y queremos agradecerte con un pequeño regalo.",
        "imagen": "Familia entregando un regalo a un vecino"
      },
      {
        "en": "After walking for eight hours, we were completely exhausted and absolutely starving.",
        "es": "Después de caminar ocho horas, estábamos completamente agotados y muertos de hambre.",
        "imagen": "Excursionistas cansados comiendo en un refugio"
      },
      {
        "en": "I'm terribly sorry, but there's absolutely nothing we can do about it now.",
        "es": "Lo siento muchísimo, pero ahora no hay absolutamente nada que podamos hacer.",
        "imagen": "Empleado disculpándose con un cliente en un mostrador"
      },
      {
        "en": "She does speak English, she's just a bit shy when there are many people around.",
        "es": "Sí habla inglés, solo que es un poco tímida cuando hay mucha gente.",
        "imagen": "Joven tímida hablando con un extranjero"
      },
      {
        "en": "At the very end of the movie, we finally found out who the killer was.",
        "es": "Justo al final de la película, por fin supimos quién era el asesino.",
        "imagen": "Público sorprendido en una sala de cine"
      },
      {
        "en": "There is no evidence whatsoever that the product works.",
        "es": "No hay ninguna prueba en absoluto de que el producto funcione.",
        "imagen": "Persona desconfiada leyendo la etiqueta de un producto milagro"
      },
      {
        "en": "Do let me know if there's anything I can do to help.",
        "es": "Por favor avísame si hay algo en que pueda ayudar.",
        "imagen": "Persona ofreciendo ayuda con sinceridad a un amigo"
      }
    ],
    "listening": [
      {
        "audio": "I did send you the email. Check your spam folder.",
        "pregunta": "¿Qué dice la persona?",
        "opciones": [
          "Que sí mandó el correo",
          "Que no mandó el correo",
          "Que lo mandará",
          "Que no tiene correo"
        ]
      },
      {
        "audio": "The food at that restaurant was absolutely delicious. We'll definitely go back.",
        "pregunta": "¿Cómo estaba la comida?",
        "opciones": [
          "Deliciosa",
          "Regular",
          "Mala",
          "Muy cara"
        ]
      },
      {
        "audio": "What on earth happened to your car? It's completely destroyed!",
        "pregunta": "¿Cómo está el carro?",
        "opciones": [
          "Completamente destruido",
          "Un poco rayado",
          "Perfecto",
          "Sucio"
        ]
      },
      {
        "audio": "I'm not hungry at all. I had a huge breakfast.",
        "pregunta": "¿Por qué no tiene hambre?",
        "opciones": [
          "Desayunó mucho",
          "Está enfermo",
          "Está a dieta",
          "No le gusta la comida"
        ]
      },
      {
        "audio": "Do sit down. Would you like some coffee?",
        "pregunta": "¿Qué le ofrece?",
        "opciones": [
          "Café",
          "Té",
          "Agua",
          "Comida"
        ]
      }
    ],
    "lectura": {
      "titulo": "A misunderstanding",
      "texto": "Last month my best friend Carla was absolutely furious with me. She thought I had forgotten her birthday, because I didn't go to her party. But I did remember! In fact, I had been planning a surprise for weeks. What happened was that I had booked a table at her favorite restaurant for the following Saturday, and I wanted to give her the present there. When she called me on Sunday, she said: Why on earth didn't you come? Everybody was asking about you. I told her I was terribly sorry and that I did have a good reason, but she didn't want to listen. She said she had no interest whatsoever in my excuses. On Saturday, I sent her a message: Do come to the restaurant at eight. Trust me. She came, still angry, but when she saw all her friends and the cake, she started crying. It was the very thing she needed after a difficult year. Now we laugh about it, but I've learned my lesson: next time, I'll go to the party too.",
      "preguntas": [
        {
          "pregunta": "¿Por qué estaba furiosa Carla?",
          "opciones": [
            "Creyó que su amigo olvidó su cumpleaños",
            "Su amigo le mintió",
            "Perdió un regalo",
            "Nadie fue a su fiesta"
          ]
        },
        {
          "pregunta": "¿Qué había planeado el narrador?",
          "opciones": [
            "Una cena sorpresa en su restaurante favorito",
            "Un viaje",
            "Una fiesta en su casa",
            "Nada"
          ]
        },
        {
          "pregunta": "¿Cómo reaccionó Carla en el restaurante?",
          "opciones": [
            "Empezó a llorar de emoción",
            "Se fue enojada",
            "No dijo nada",
            "Se rió"
          ]
        },
        {
          "pregunta": "¿Qué lección aprendió el narrador?",
          "opciones": [
            "Ir también a la fiesta la próxima vez",
            "No hacer sorpresas",
            "Reservar antes",
            "Llamar más seguido"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Añade énfasis con do, does o did.",
        "pregunta": "I ___ remember your birthday! (pasado)",
        "respuestas": [
          "did"
        ]
      },
      {
        "instruccion": "Añade énfasis con do, does o did.",
        "pregunta": "She ___ like you. She's just shy. (presente)",
        "respuestas": [
          "does"
        ]
      },
      {
        "instruccion": "Completa con absolutely o very.",
        "pregunta": "The movie was ___ fantastic.",
        "respuestas": [
          "absolutely",
          "totally",
          "utterly"
        ]
      },
      {
        "instruccion": "Completa con absolutely o very.",
        "pregunta": "The movie was ___ good.",
        "respuestas": [
          "very",
          "really",
          "extremely"
        ]
      },
      {
        "instruccion": "Completa con on earth.",
        "pregunta": "Where on ___ have you been?",
        "respuestas": [
          "earth"
        ]
      },
      {
        "instruccion": "Completa con whatsoever.",
        "pregunta": "I have no idea ___.",
        "respuestas": [
          "whatsoever",
          "at all"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¡Sí te dije!",
        "respuestas": [
          "I did tell you",
          "I told you"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Me muero de hambre.",
        "respuestas": [
          "I'm starving",
          "I'm absolutely starving",
          "I am starving"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "justo lo que necesitaba",
        "respuestas": [
          "the very thing I needed",
          "just what I needed",
          "exactly what I needed"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "The view was very amazing.",
        "respuestas": [
          "The view was absolutely amazing",
          "The view was amazing",
          "The view was really amazing",
          "The view was totally amazing"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "I ___ like your new haircut. It looks great!",
        "opciones": [
          "do",
          "am",
          "did to",
          "does"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "It was ___ freezing in the mountains.",
        "opciones": [
          "absolutely",
          "very",
          "a bit",
          "quite more"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "What ___ is that noise?",
        "opciones": [
          "on earth",
          "in earth",
          "the earth",
          "at earth"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "He ___ study for the exam, but he still failed.",
        "opciones": [
          "did",
          "does",
          "was",
          "had"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Do come in!» significa:",
        "opciones": [
          "¡Pásale, por favor!",
          "¿Entras?",
          "No entres",
          "Entra rápido"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es incorrecta?",
        "opciones": [
          "It was very delicious.",
          "It was absolutely delicious.",
          "It was really good.",
          "It was extremely good."
        ]
      },
      {
        "tipo": "listening",
        "audio": "I'm absolutely delighted to announce that we've won the national prize.",
        "pregunta": "¿Qué anuncia?",
        "opciones": [
          "Que ganaron el premio nacional",
          "Que perdieron",
          "Que cerrarán la empresa",
          "Que habrá vacaciones"
        ]
      },
      {
        "tipo": "listening",
        "audio": "You do look tired. Why don't you go home and rest?",
        "pregunta": "¿Qué le sugiere?",
        "opciones": [
          "Irse a casa a descansar",
          "Tomar café",
          "Trabajar más",
          "Ir al doctor"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¿Qué rayos estás haciendo?",
        "respuestas": [
          "What on earth are you doing"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: No estoy nada cansado.",
        "respuestas": [
          "I'm not tired at all",
          "I am not tired at all"
        ]
      }
    ]
  },
  {
    "id": "c1-11",
    "num": 11,
    "titulo": "Anteposición (fronting)",
    "contexto": "Estilo y énfasis",
    "explicacion": {
      "es": [
        "La **anteposición** (*fronting*) consiste en poner **al principio** una parte de la oración que normalmente iría después, para darle **énfasis** o para conectar mejor con lo anterior: *I can't stand his attitude → **His attitude** I can't stand.* (Su actitud no la soporto.)",
        "Con **adjetivos** y ***as / though*** expresa concesión: ***Tired as she was**, she kept working.* (Por muy cansada que estaba, siguió trabajando.) ***Strange though it may seem**, I enjoy doing my taxes.*",
        "Con **expresiones de lugar** y verbos de movimiento o posición, el verbo va **antes** del sujeto (inversión): ***On the hill stood** an old church.* (En la colina se alzaba una iglesia vieja.) ***Here comes** the bus! **There goes** my money!*",
        "Con **so / such**: ***So beautiful was** the view **that** we stayed for hours.* ***Such was** her talent **that** she won every competition.* Es un estilo **literario o enfático**, muy útil para escribir con elegancia."
      ],
      "tabla": {
        "columnas": [
          "Normal",
          "Con anteposición"
        ],
        "filas": [
          [
            "I don't like the food, but I love the music.",
            "The food I don't like, but the music I love."
          ],
          [
            "Although she was tired, she kept working.",
            "Tired as she was, she kept working."
          ],
          [
            "An old church stood on the hill.",
            "On the hill stood an old church."
          ],
          [
            "The bus comes here!",
            "Here comes the bus!"
          ],
          [
            "The view was so beautiful that…",
            "So beautiful was the view that…"
          ]
        ]
      },
      "ojo": [
        "Con lugar + verbo de movimiento, **sustantivo** después del verbo: ***Here comes the bus*** ✅; con **pronombre**, sin inversión: ***Here it comes*** ✅ (no *Here comes it* ❌).",
        "***Adjetivo + as / though + sujeto + verbo*** = por muy… que: ***Rich as he is**, he isn't happy.*",
        "***Try as I might*** = por más que lo intenté: ***Try as I might**, I couldn't open the door.*",
        "La anteposición de objeto es común en **contrastes**: ***Some** things I can forgive; **lies** I cannot.*",
        "No abuses: en conversación diaria suena **dramático**; úsalo en relatos, discursos y escritura."
      ],
      "en": [
        "Fronting puts part of the sentence at the beginning for emphasis: His attitude I can't stand.",
        "Tired as she was, she kept working.",
        "On the hill stood an old church. Here comes the bus!",
        "So beautiful was the view that we stayed for hours."
      ]
    },
    "vocabulario": [
      {
        "en": "Tired as she was",
        "es": "por muy cansada que estaba",
        "imagen": "Enfermera agotada atendiendo a un paciente de noche",
        "ejemplo": [
          "Tired as she was, she kept working.",
          "Por muy cansada que estaba, siguió trabajando."
        ]
      },
      {
        "en": "Strange though it may seem",
        "es": "por raro que parezca",
        "imagen": "Persona sonriendo mientras llena formularios",
        "ejemplo": [
          "Strange though it may seem, I enjoy doing paperwork.",
          "Por raro que parezca, disfruto hacer trámites."
        ]
      },
      {
        "en": "On the hill stood",
        "es": "en la colina se alzaba",
        "imagen": "Iglesia antigua en lo alto de una colina",
        "ejemplo": [
          "On the hill stood an old church.",
          "En la colina se alzaba una iglesia vieja."
        ]
      },
      {
        "en": "Here comes the bus!",
        "es": "¡ahí viene el camión!",
        "imagen": "Autobús acercándose a una parada",
        "ejemplo": [
          "Hurry up! Here comes the bus!",
          "¡Apúrate! ¡Ahí viene el camión!"
        ]
      },
      {
        "en": "There goes my money!",
        "es": "¡ahí se va mi dinero!",
        "imagen": "Persona viendo cómo se lleva su dinero el viento",
        "ejemplo": [
          "There goes my money for the month!",
          "¡Ahí se va mi dinero del mes!"
        ]
      },
      {
        "en": "So beautiful was the view",
        "es": "tan hermosa era la vista",
        "imagen": "Mirador con vista a un valle verde",
        "ejemplo": [
          "So beautiful was the view that we stayed for hours.",
          "Tan hermosa era la vista que nos quedamos horas."
        ]
      },
      {
        "en": "Such was her talent",
        "es": "tal era su talento",
        "imagen": "Joven pianista tocando en un gran teatro",
        "ejemplo": [
          "Such was her talent that she won every competition.",
          "Tal era su talento que ganaba todos los concursos."
        ]
      },
      {
        "en": "Try as I might",
        "es": "por más que lo intenté",
        "imagen": "Persona intentando abrir un frasco con mucho esfuerzo",
        "ejemplo": [
          "Try as I might, I couldn't open the jar.",
          "Por más que lo intenté, no pude abrir el frasco."
        ]
      },
      {
        "en": "Rich as he is",
        "es": "por muy rico que sea",
        "imagen": "Hombre solo en una mansión enorme",
        "ejemplo": [
          "Rich as he is, he isn't happy.",
          "Por muy rico que sea, no es feliz."
        ]
      },
      {
        "en": "Into the room walked",
        "es": "a la sala entró",
        "imagen": "Persona elegante entrando a una sala llena",
        "ejemplo": [
          "Into the room walked a tall woman in a red dress.",
          "A la sala entró una mujer alta con vestido rojo."
        ]
      },
      {
        "en": "Down came the rain",
        "es": "cayó la lluvia",
        "imagen": "Lluvia fuerte cayendo de repente en una plaza",
        "ejemplo": [
          "Down came the rain, and everybody ran for shelter.",
          "Cayó la lluvia y todos corrieron a refugiarse."
        ]
      },
      {
        "en": "What she said, I'll never forget",
        "es": "lo que dijo nunca lo olvidaré",
        "imagen": "Abuela hablando con cariño a su nieta",
        "ejemplo": [
          "What she said that day, I'll never forget.",
          "Lo que dijo ese día nunca lo olvidaré."
        ]
      },
      {
        "en": "Much as I like him",
        "es": "por mucho que me caiga bien",
        "imagen": "Persona dudando frente a un amigo que pide dinero",
        "ejemplo": [
          "Much as I like him, I can't lend him more money.",
          "Por mucho que me caiga bien, no le puedo prestar más dinero."
        ]
      },
      {
        "en": "Next to the window sat",
        "es": "junto a la ventana estaba sentado",
        "imagen": "Anciano sentado junto a una ventana leyendo",
        "ejemplo": [
          "Next to the window sat an old man reading a newspaper.",
          "Junto a la ventana estaba sentado un anciano leyendo el periódico."
        ]
      },
      {
        "en": "This I can promise you",
        "es": "esto te lo puedo prometer",
        "imagen": "Persona con la mano en el corazón",
        "ejemplo": [
          "This I can promise you: I will never lie to you.",
          "Esto te lo puedo prometer: nunca te mentiré."
        ]
      },
      {
        "en": "Off they went",
        "es": "allá se fueron",
        "imagen": "Niños corriendo hacia el mar",
        "ejemplo": [
          "The kids grabbed their towels, and off they went to the beach.",
          "Los niños tomaron sus toallas y allá se fueron a la playa."
        ]
      }
    ],
    "grupos": [
      {
        "id": "concesion",
        "titulo": "Por muy… que",
        "icono": "💪",
        "patron": [
          "… as it may seem",
          "… as I was",
          "Try as I might…"
        ],
        "palabras": [
          {
            "en": "Difficult as it was",
            "es": "por difícil que fue",
            "imagen": "Alpinista en la cima tras gran esfuerzo",
            "ejemplo": [
              "Difficult as it was, we reached the top.",
              "Por difícil que fue, llegamos a la cima."
            ]
          },
          {
            "en": "Hard as I tried",
            "es": "por más que me esforcé",
            "imagen": "Estudiante frustrado frente a un problema",
            "ejemplo": [
              "Hard as I tried, I couldn't solve the problem.",
              "Por más que me esforcé, no pude resolver el problema."
            ]
          },
          {
            "en": "Young as she is",
            "es": "por muy joven que sea",
            "imagen": "Niña dirigiendo una orquesta",
            "ejemplo": [
              "Young as she is, she already conducts an orchestra.",
              "Por muy joven que sea, ya dirige una orquesta."
            ]
          },
          {
            "en": "Exciting as it sounds",
            "es": "por emocionante que suene",
            "imagen": "Persona dudando frente a un paracaídas",
            "ejemplo": [
              "Exciting as it sounds, I won't try skydiving.",
              "Por emocionante que suene, no probaré el paracaidismo."
            ]
          },
          {
            "en": "Expensive as it is",
            "es": "por caro que sea",
            "imagen": "Persona admirando un reloj en un aparador",
            "ejemplo": [
              "Expensive as it is, the trip is worth every peso.",
              "Por caro que sea, el viaje vale cada peso."
            ]
          },
          {
            "en": "Unlikely as it seems",
            "es": "por improbable que parezca",
            "imagen": "Persona sorprendida con un boleto ganador",
            "ejemplo": [
              "Unlikely as it seems, he won the lottery twice.",
              "Por improbable que parezca, ganó la lotería dos veces."
            ]
          }
        ]
      },
      {
        "id": "lugares",
        "titulo": "Escenas con lugar al inicio",
        "icono": "🏞️",
        "patron": [
          "At the end of the street was…",
          "In the corner sat…",
          "Here comes…"
        ],
        "palabras": [
          {
            "en": "At the end of the street was",
            "es": "al final de la calle había",
            "imagen": "Calle empedrada con una casa azul al fondo",
            "ejemplo": [
              "At the end of the street was a small blue house.",
              "Al final de la calle había una casita azul."
            ]
          },
          {
            "en": "In the corner sat",
            "es": "en la esquina estaba sentado",
            "imagen": "Gato sentado en la esquina de una habitación",
            "ejemplo": [
              "In the corner sat a black cat.",
              "En la esquina estaba sentado un gato negro."
            ]
          },
          {
            "en": "Here she comes",
            "es": "ahí viene",
            "imagen": "Novia llegando a la iglesia",
            "ejemplo": [
              "Everybody stand up. Here she comes!",
              "Todos de pie. ¡Ahí viene!"
            ]
          },
          {
            "en": "Out jumped",
            "es": "saltó afuera",
            "imagen": "Perro saliendo de una caja de regalo",
            "ejemplo": [
              "I opened the box, and out jumped a puppy!",
              "Abrí la caja, ¡y saltó un perrito!"
            ]
          },
          {
            "en": "Behind the house lay",
            "es": "detrás de la casa se extendía",
            "imagen": "Huerto grande detrás de una casa de campo",
            "ejemplo": [
              "Behind the house lay a beautiful garden.",
              "Detrás de la casa se extendía un jardín precioso."
            ]
          },
          {
            "en": "Up went the prices",
            "es": "subieron los precios",
            "imagen": "Gráfica con flecha disparada hacia arriba",
            "ejemplo": [
              "Up went the prices after the storm.",
              "Después de la tormenta subieron los precios."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Tired as she was, she kept working.",
        "es": "Por muy cansada que estaba, siguió trabajando."
      },
      {
        "en": "On the hill stood an old church.",
        "es": "En la colina se alzaba una iglesia vieja."
      },
      {
        "en": "Hurry up! Here comes the bus!",
        "es": "¡Apúrate! ¡Ahí viene el camión!"
      },
      {
        "en": "So beautiful was the view that we stayed for hours.",
        "es": "Tan hermosa era la vista que nos quedamos horas."
      },
      {
        "en": "Try as I might, I couldn't open the jar.",
        "es": "Por más que lo intenté, no pude abrir el frasco."
      },
      {
        "en": "Rich as he is, he isn't happy.",
        "es": "Por muy rico que sea, no es feliz."
      },
      {
        "en": "Into the room walked a tall woman in a red dress.",
        "es": "A la sala entró una mujer alta con vestido rojo."
      },
      {
        "en": "Much as I like him, I can't lend him more money.",
        "es": "Por mucho que me caiga bien, no le puedo prestar más dinero."
      },
      {
        "en": "I opened the box, and out jumped a puppy!",
        "es": "Abrí la caja, ¡y saltó un perrito!"
      },
      {
        "en": "At the end of the street was a small blue house.",
        "es": "Al final de la calle había una casita azul."
      }
    ],
    "frases": [
      {
        "en": "Strange as it may sound, I actually enjoy getting up at five in the morning.",
        "es": "Por raro que suene, de verdad disfruto levantarme a las cinco de la mañana.",
        "imagen": "Persona tomando café sonriente al amanecer"
      },
      {
        "en": "In the middle of the square stood a huge Christmas tree covered in lights.",
        "es": "En medio de la plaza se alzaba un enorme árbol de Navidad cubierto de luces.",
        "imagen": "Árbol navideño gigante iluminado en una plaza de noche"
      },
      {
        "en": "Such was the noise from the party next door that nobody in the building could sleep.",
        "es": "Tal era el ruido de la fiesta de al lado que nadie en el edificio podía dormir.",
        "imagen": "Vecinos despiertos en sus ventanas por una fiesta ruidosa"
      },
      {
        "en": "Hard as it was to say goodbye, I knew that moving abroad was the right decision.",
        "es": "Por difícil que fuera despedirme, sabía que mudarme al extranjero era la decisión correcta.",
        "imagen": "Persona abrazando a su familia en el aeropuerto"
      },
      {
        "en": "His jokes I can tolerate, but his rudeness to the waiters I simply cannot accept.",
        "es": "Sus chistes los tolero, pero su grosería con los meseros simplemente no la acepto.",
        "imagen": "Persona molesta en un restaurante mirando a un compañero grosero"
      },
      {
        "en": "Down the mountain came the rescue team, carrying the injured climber on a stretcher.",
        "es": "Montaña abajo bajó el equipo de rescate cargando al alpinista herido en una camilla.",
        "imagen": "Rescatistas bajando una montaña con una camilla"
      },
      {
        "en": "Young as he was, the boy showed incredible courage during the flood.",
        "es": "Por muy joven que era, el niño mostró una valentía increíble durante la inundación.",
        "imagen": "Niño ayudando a evacuar a vecinos en una calle inundada"
      },
      {
        "en": "So tired were we after the hike that we fell asleep before dinner.",
        "es": "Tan cansados estábamos después de la caminata que nos dormimos antes de cenar.",
        "imagen": "Excursionistas dormidos en un sofá con las botas puestas"
      },
      {
        "en": "Much as I would love to come, I'm afraid I have to work this weekend.",
        "es": "Por mucho que me encantaría ir, me temo que tengo que trabajar este fin de semana.",
        "imagen": "Persona en la oficina mirando una invitación con tristeza"
      },
      {
        "en": "Here comes the most important part of the story, so listen carefully.",
        "es": "Aquí viene la parte más importante de la historia, así que escuchen con atención.",
        "imagen": "Abuelo contando una historia a nietos atentos"
      }
    ],
    "listening": [
      {
        "audio": "Tired as I was, I couldn't fall asleep because of the noise.",
        "pregunta": "¿Por qué no podía dormir?",
        "opciones": [
          "Por el ruido",
          "Por el calor",
          "Por estrés",
          "Por el café"
        ]
      },
      {
        "audio": "Here comes the taxi! Grab your bags.",
        "pregunta": "¿Qué está llegando?",
        "opciones": [
          "El taxi",
          "El camión",
          "Un amigo",
          "El tren"
        ]
      },
      {
        "audio": "Try as I might, I couldn't remember her name.",
        "pregunta": "¿Qué no pudo hacer?",
        "opciones": [
          "Recordar su nombre",
          "Abrir la puerta",
          "Encontrar sus llaves",
          "Llegar a tiempo"
        ]
      },
      {
        "audio": "So delicious was the food that we ordered a second round.",
        "pregunta": "¿Por qué pidieron otra ronda?",
        "opciones": [
          "La comida estaba deliciosa",
          "Tenían mucha hambre",
          "Era barata",
          "Llegaron más amigos"
        ]
      },
      {
        "audio": "At the top of the stairs stood my grandfather, smiling at us.",
        "pregunta": "¿Dónde estaba el abuelo?",
        "opciones": [
          "Arriba de las escaleras",
          "En la puerta",
          "En el jardín",
          "En la cocina"
        ]
      }
    ],
    "lectura": {
      "titulo": "The old house",
      "texto": "At the end of a narrow street in Guanajuato stood an old yellow house that everybody in the neighborhood called the house of the musician. In it lived Don Aurelio, a retired violinist who was almost ninety. Old as he was, he played his violin every evening at sunset, and down the street came the neighbors to listen. Such was the beauty of his music that tourists sometimes stopped and cried without knowing why. One evening, the music didn't start. Worried, his neighbor Lupita knocked on the door. Try as she might, she couldn't get an answer. Into the house went two young men, and there, in his favorite chair, sat Don Aurelio, asleep, with the violin on his knees. He was fine, only very tired. The next day, back came the music, stronger than ever. Strange as it may seem, the neighbors say that since that night he has played even more beautifully, as if he knew that every sunset was a gift.",
      "preguntas": [
        {
          "pregunta": "¿Cómo llamaban a la casa?",
          "opciones": [
            "La casa del músico",
            "La casa amarilla",
            "La casa vieja",
            "La casa de Lupita"
          ]
        },
        {
          "pregunta": "¿Cuándo tocaba Don Aurelio?",
          "opciones": [
            "Cada tarde al atardecer",
            "En las mañanas",
            "Los domingos",
            "En las fiestas"
          ]
        },
        {
          "pregunta": "¿Qué pasó la noche que no hubo música?",
          "opciones": [
            "Don Aurelio estaba dormido en su silla",
            "Se había ido de viaje",
            "Se rompió el violín",
            "Estaba enfermo en el hospital"
          ]
        },
        {
          "pregunta": "¿Qué dicen los vecinos desde esa noche?",
          "opciones": [
            "Que toca aún más bonito",
            "Que dejó de tocar",
            "Que toca menos",
            "Que se mudó"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con as.",
        "pregunta": "Tired ___ she was, she finished the race.",
        "respuestas": [
          "as",
          "though"
        ]
      },
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "Try ___ I might, I couldn't find it.",
        "respuestas": [
          "as"
        ]
      },
      {
        "instruccion": "Completa con comes o goes.",
        "pregunta": "Look! Here ___ the bus!",
        "respuestas": [
          "comes"
        ]
      },
      {
        "instruccion": "Completa con so o such.",
        "pregunta": "___ was her talent that everyone admired her.",
        "respuestas": [
          "Such"
        ]
      },
      {
        "instruccion": "Completa con so o such.",
        "pregunta": "___ cold was the water that nobody swam.",
        "respuestas": [
          "So"
        ]
      },
      {
        "instruccion": "Ordena con pronombre.",
        "pregunta": "Here comes the bus. → Here ___ comes. (it)",
        "respuestas": [
          "it"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¡Ahí viene el camión!",
        "respuestas": [
          "Here comes the bus",
          "Here comes the bus!"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Por más que lo intenté, …",
        "respuestas": [
          "Try as I might",
          "Hard as I tried",
          "No matter how hard I tried"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "por raro que parezca",
        "respuestas": [
          "strange as it may seem",
          "strange though it may seem",
          "strange as it seems"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "Here comes it!",
        "respuestas": [
          "Here it comes",
          "Here it comes!"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "___ as he is, he never shows off.",
        "opciones": [
          "Rich",
          "Richly",
          "So rich",
          "Richer"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "On the table ___ a mysterious letter.",
        "opciones": [
          "lay",
          "it lay",
          "lying",
          "was lie"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "So ___ was the storm that the flights were canceled.",
        "opciones": [
          "strong",
          "strongly",
          "much strong",
          "stronger"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Look, there ___ my bus! I've missed it.",
        "opciones": [
          "goes",
          "go",
          "going",
          "it goes"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Much as I like her…» significa:",
        "opciones": [
          "Por mucho que me caiga bien…",
          "Como me cae bien…",
          "Me cae muy bien…",
          "No me cae bien…"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es correcta?",
        "opciones": [
          "Here she comes!",
          "Here comes she!",
          "Here she come!",
          "Comes here she!"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Expensive as it was, the trip to Japan was the best decision we ever made.",
        "pregunta": "¿Qué piensan del viaje?",
        "opciones": [
          "Fue la mejor decisión aunque caro",
          "Fue un error",
          "Fue barato",
          "No lo hicieron"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Out of the cake jumped a little girl, and everybody started to laugh.",
        "pregunta": "¿Qué salió del pastel?",
        "opciones": [
          "Una niña",
          "Un perro",
          "Un payaso",
          "Globos"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: por muy cansado que estaba",
        "respuestas": [
          "tired as I was",
          "tired though I was",
          "tired as he was",
          "tired as she was"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¡Ahí se va mi dinero!",
        "respuestas": [
          "There goes my money"
        ]
      }
    ]
  },
  {
    "id": "c1-12",
    "num": 12,
    "titulo": "Oraciones de relativo avanzadas (whereby, which referido a toda la oración)",
    "contexto": "Textos académicos",
    "explicacion": {
      "es": [
        "***Whereby*** (formal) significa **por el cual / mediante el cual**, y se usa para describir **sistemas, procesos o acuerdos**: *The company introduced a system **whereby** employees can work from home.* (un sistema mediante el cual los empleados pueden…)",
        "***Which*** puede referirse a **toda la oración anterior**, siempre con coma (= *lo cual*): *Prices went up, **which** made many people angry.* También con preposición: *He might lose his job, **in which case** he'll move back home.* (en cuyo caso…)",
        "En lenguaje académico se usan ***preposición + which / whom***: ***the extent to which*** (la medida en que), ***the period during which*** (el periodo durante el cual), ***the reason for which***, ***the people with whom***.",
        "Para **cantidades**: ***some / many / most / none / all + of which / of whom***: *The study included 500 people, **most of whom** were students.* ***The latter / the former*** (este último / el primero) también ayudan a evitar repeticiones."
      ],
      "tabla": {
        "columnas": [
          "Estructura",
          "Ejemplo"
        ],
        "filas": [
          [
            "whereby",
            "a process whereby plants make food"
          ],
          [
            "…, which (toda la oración)",
            "He failed, which surprised everyone."
          ],
          [
            "in which case",
            "It may rain, in which case we'll stay in."
          ],
          [
            "the extent to which",
            "We measured the extent to which stress affects sleep."
          ],
          [
            "most of whom / some of which",
            "200 people answered, most of whom were women."
          ],
          [
            "at which point",
            "The price dropped, at which point we bought shares."
          ]
        ]
      },
      "ojo": [
        "No uses *that* después de preposición ni en explicativas: *the house **in which** she lived* ✅ (no *in that* ❌).",
        "***Whereby*** es **muy formal**; en conversación se dice *a system where* o *a system that lets…*",
        "*Which* referido a toda la oración **siempre** lleva coma antes.",
        "***Whose*** también se usa con cosas en textos formales: *a country **whose** economy depends on oil*.",
        "***Whichever / whoever*** = cualquiera que: *Choose **whichever** option you prefer.*"
      ],
      "en": [
        "Whereby means by which: a system whereby employees can work from home.",
        "Which can refer to the whole previous clause: Prices went up, which made many people angry.",
        "In which case, the extent to which, the period during which.",
        "The study included five hundred people, most of whom were students."
      ]
    },
    "vocabulario": [
      {
        "en": "a system whereby",
        "es": "un sistema mediante el cual",
        "imagen": "Diagrama de un proceso con flechas, sin texto",
        "ejemplo": [
          "They created a system whereby customers can pay with their phones.",
          "Crearon un sistema mediante el cual los clientes pueden pagar con el celular."
        ]
      },
      {
        "en": "which made people angry",
        "es": "lo cual enojó a la gente",
        "imagen": "Manifestantes molestos en una plaza",
        "ejemplo": [
          "Prices went up, which made many people angry.",
          "Los precios subieron, lo cual enojó a mucha gente."
        ]
      },
      {
        "en": "in which case",
        "es": "en cuyo caso",
        "imagen": "Persona revisando el pronóstico con duda",
        "ejemplo": [
          "It may rain, in which case the event will be moved inside.",
          "Puede llover, en cuyo caso el evento se moverá al interior."
        ]
      },
      {
        "en": "the extent to which",
        "es": "la medida en que",
        "imagen": "Gráfica con escala de medición",
        "ejemplo": [
          "We studied the extent to which stress affects sleep.",
          "Estudiamos la medida en que el estrés afecta el sueño."
        ]
      },
      {
        "en": "most of whom",
        "es": "la mayoría de los cuales",
        "imagen": "Grupo de estudiantes respondiendo una encuesta",
        "ejemplo": [
          "500 people took part, most of whom were students.",
          "Participaron 500 personas, la mayoría estudiantes."
        ]
      },
      {
        "en": "some of which",
        "es": "algunos de los cuales",
        "imagen": "Pila de documentos antiguos",
        "ejemplo": [
          "The museum has thousands of objects, some of which are very rare.",
          "El museo tiene miles de objetos, algunos de ellos muy raros."
        ]
      },
      {
        "en": "at which point",
        "es": "momento en el cual",
        "imagen": "Gráfica con un punto de cambio marcado",
        "ejemplo": [
          "The price fell to ten dollars, at which point we bought it.",
          "El precio bajó a diez dólares, momento en el cual lo compramos."
        ]
      },
      {
        "en": "the period during which",
        "es": "el periodo durante el cual",
        "imagen": "Calendario con un rango de fechas marcado",
        "ejemplo": [
          "This was the period during which the city grew fastest.",
          "Este fue el periodo durante el cual la ciudad creció más rápido."
        ]
      },
      {
        "en": "the reason for which",
        "es": "la razón por la cual",
        "imagen": "Persona explicando una decisión en una junta",
        "ejemplo": [
          "That is the reason for which the project was canceled.",
          "Esa es la razón por la cual se canceló el proyecto."
        ]
      },
      {
        "en": "the people with whom",
        "es": "las personas con las que",
        "imagen": "Equipo de investigación trabajando juntos",
        "ejemplo": [
          "These are the people with whom I worked for ten years.",
          "Estas son las personas con las que trabajé diez años."
        ]
      },
      {
        "en": "a country whose economy",
        "es": "un país cuya economía",
        "imagen": "Plataforma petrolera en el mar",
        "ejemplo": [
          "It is a country whose economy depends on oil.",
          "Es un país cuya economía depende del petróleo."
        ]
      },
      {
        "en": "none of which",
        "es": "ninguno de los cuales",
        "imagen": "Varias cajas vacías abiertas",
        "ejemplo": [
          "We tried three solutions, none of which worked.",
          "Probamos tres soluciones, ninguna de las cuales funcionó."
        ]
      },
      {
        "en": "the former",
        "es": "el primero (de dos)",
        "imagen": "Dos opciones en una pantalla, la primera resaltada",
        "ejemplo": [
          "Between tea and coffee, I prefer the former.",
          "Entre té y café, prefiero el primero."
        ]
      },
      {
        "en": "the latter",
        "es": "el último (de dos)",
        "imagen": "Dos opciones en una pantalla, la segunda resaltada",
        "ejemplo": [
          "Between Lima and Bogotá, I've only visited the latter.",
          "Entre Lima y Bogotá, solo he visitado la segunda."
        ]
      },
      {
        "en": "whichever you prefer",
        "es": "el que prefieras",
        "imagen": "Persona ofreciendo dos postres a elegir",
        "ejemplo": [
          "Choose whichever option you prefer.",
          "Elige la opción que prefieras."
        ]
      },
      {
        "en": "by which time",
        "es": "para entonces",
        "imagen": "Reloj de arena casi vacío",
        "ejemplo": [
          "The ambulance arrived an hour later, by which time he had recovered.",
          "La ambulancia llegó una hora después, para entonces ya se había recuperado."
        ]
      }
    ],
    "grupos": [
      {
        "id": "academico",
        "titulo": "Lenguaje académico",
        "icono": "🎓",
        "patron": [
          "the extent to which…",
          "a process whereby…",
          "the degree to which…"
        ],
        "palabras": [
          {
            "en": "the degree to which",
            "es": "el grado en que",
            "imagen": "Escala de medición en una gráfica científica",
            "ejemplo": [
              "The degree to which people trust the news varies by age.",
              "El grado en que la gente confía en las noticias varía según la edad."
            ]
          },
          {
            "en": "a process whereby",
            "es": "un proceso mediante el cual",
            "imagen": "Hoja verde con rayos de sol (fotosíntesis)",
            "ejemplo": [
              "Photosynthesis is a process whereby plants produce food.",
              "La fotosíntesis es un proceso mediante el cual las plantas producen alimento."
            ]
          },
          {
            "en": "the means by which",
            "es": "el medio por el cual",
            "imagen": "Diagrama de comunicación entre personas",
            "ejemplo": [
              "Language is the means by which we share ideas.",
              "El lenguaje es el medio por el cual compartimos ideas."
            ]
          },
          {
            "en": "the conditions under which",
            "es": "las condiciones en las que",
            "imagen": "Laboratorio controlado con instrumentos",
            "ejemplo": [
              "We described the conditions under which the experiment was done.",
              "Describimos las condiciones en las que se hizo el experimento."
            ]
          },
          {
            "en": "the context in which",
            "es": "el contexto en el que",
            "imagen": "Libro de historia abierto con mapas",
            "ejemplo": [
              "It's important to understand the context in which the book was written.",
              "Es importante entender el contexto en el que se escribió el libro."
            ]
          },
          {
            "en": "a factor which",
            "es": "un factor que",
            "imagen": "Gráfica con varios factores destacados",
            "ejemplo": [
              "Diet is a factor which strongly affects health.",
              "La dieta es un factor que afecta mucho la salud."
            ]
          }
        ]
      },
      {
        "id": "cantidades",
        "titulo": "Cantidad + of which / of whom",
        "icono": "🔢",
        "patron": [
          "most of whom",
          "half of which",
          "neither of whom"
        ],
        "palabras": [
          {
            "en": "half of which",
            "es": "la mitad de los cuales",
            "imagen": "Gráfica de pastel dividida a la mitad",
            "ejemplo": [
              "The city has twenty parks, half of which need repairs.",
              "La ciudad tiene veinte parques, la mitad de los cuales necesita reparaciones."
            ]
          },
          {
            "en": "all of whom",
            "es": "todos los cuales",
            "imagen": "Grupo de graduados con sus títulos",
            "ejemplo": [
              "She has three sons, all of whom are engineers.",
              "Tiene tres hijos, todos ingenieros."
            ]
          },
          {
            "en": "neither of whom",
            "es": "ninguno de los dos",
            "imagen": "Dos personas negando con la cabeza",
            "ejemplo": [
              "I asked two teachers, neither of whom knew the answer.",
              "Les pregunté a dos maestros, y ninguno sabía la respuesta."
            ]
          },
          {
            "en": "many of which",
            "es": "muchos de los cuales",
            "imagen": "Estante con muchos libros antiguos",
            "ejemplo": [
              "He wrote forty books, many of which were translated.",
              "Escribió cuarenta libros, muchos de los cuales se tradujeron."
            ]
          },
          {
            "en": "each of whom",
            "es": "cada uno de los cuales",
            "imagen": "Empleados recibiendo un sobre cada uno",
            "ejemplo": [
              "We hired ten people, each of whom received training.",
              "Contratamos a diez personas, cada una recibió capacitación."
            ]
          },
          {
            "en": "a few of which",
            "es": "unos pocos de los cuales",
            "imagen": "Varias fotos antiguas, pocas en buen estado",
            "ejemplo": [
              "We found old photos, a few of which were in good condition.",
              "Encontramos fotos viejas, unas pocas en buen estado."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "They created a system whereby customers can pay with their phones.",
        "es": "Crearon un sistema mediante el cual los clientes pueden pagar con el celular."
      },
      {
        "en": "Prices went up, which made many people angry.",
        "es": "Los precios subieron, lo cual enojó a mucha gente."
      },
      {
        "en": "It may rain, in which case the event will be moved inside.",
        "es": "Puede llover, en cuyo caso el evento se moverá al interior."
      },
      {
        "en": "500 people took part, most of whom were students.",
        "es": "Participaron 500 personas, la mayoría estudiantes."
      },
      {
        "en": "We tried three solutions, none of which worked.",
        "es": "Probamos tres soluciones, ninguna de las cuales funcionó."
      },
      {
        "en": "Between Lima and Bogotá, I've only visited the latter.",
        "es": "Entre Lima y Bogotá, solo he visitado la segunda."
      },
      {
        "en": "It is a country whose economy depends on oil.",
        "es": "Es un país cuya economía depende del petróleo."
      },
      {
        "en": "Photosynthesis is a process whereby plants produce food.",
        "es": "La fotosíntesis es un proceso mediante el cual las plantas producen alimento."
      },
      {
        "en": "She has three sons, all of whom are engineers.",
        "es": "Tiene tres hijos, todos ingenieros."
      },
      {
        "en": "Choose whichever option you prefer.",
        "es": "Elige la opción que prefieras."
      }
    ],
    "frases": [
      {
        "en": "The government introduced a scheme whereby families with low incomes receive free school meals.",
        "es": "El gobierno introdujo un programa mediante el cual las familias de bajos ingresos reciben comida escolar gratuita.",
        "imagen": "Niños comiendo en un comedor escolar"
      },
      {
        "en": "The study involved two thousand participants, the majority of whom were between twenty and thirty.",
        "es": "El estudio incluyó a dos mil participantes, la mayoría de los cuales tenía entre veinte y treinta años.",
        "imagen": "Investigadores revisando datos de una encuesta"
      },
      {
        "en": "The flight was delayed for six hours, which meant that we missed our connection in Madrid.",
        "es": "El vuelo se retrasó seis horas, lo cual significó que perdimos nuestra conexión en Madrid.",
        "imagen": "Pasajeros cansados en un aeropuerto de noche"
      },
      {
        "en": "This essay examines the extent to which social media influences political opinions.",
        "es": "Este ensayo examina la medida en que las redes sociales influyen en las opiniones políticas.",
        "imagen": "Persona leyendo noticias políticas en el celular"
      },
      {
        "en": "The company may decide to close the factory, in which case three hundred people would lose their jobs.",
        "es": "La empresa podría decidir cerrar la fábrica, en cuyo caso trescientas personas perderían su empleo.",
        "imagen": "Fábrica con trabajadores preocupados a la salida"
      },
      {
        "en": "Mexico has more than sixty indigenous languages, some of which are spoken by very few people.",
        "es": "México tiene más de sesenta lenguas indígenas, algunas de las cuales tienen muy pocos hablantes.",
        "imagen": "Anciana indígena conversando con su nieta"
      },
      {
        "en": "The professor under whom I wrote my thesis was extremely demanding but very fair.",
        "es": "El profesor con quien escribí mi tesis era muy exigente pero muy justo.",
        "imagen": "Profesor revisando una tesis con un estudiante"
      },
      {
        "en": "We waited at the station until midnight, by which time all the trains had left.",
        "es": "Esperamos en la estación hasta la medianoche, para entonces ya se habían ido todos los trenes.",
        "imagen": "Estación de tren vacía de noche"
      },
      {
        "en": "The two candidates, neither of whom had experience in politics, surprised the experts.",
        "es": "Los dos candidatos, ninguno de los cuales tenía experiencia política, sorprendieron a los expertos.",
        "imagen": "Dos candidatos en un debate televisado"
      },
      {
        "en": "It was a period during which many people moved from the countryside to the cities.",
        "es": "Fue un periodo durante el cual mucha gente se mudó del campo a las ciudades.",
        "imagen": "Foto antigua de familias llegando a una ciudad con maletas"
      }
    ],
    "listening": [
      {
        "audio": "The bank has a system whereby you can open an account online in ten minutes.",
        "pregunta": "¿Qué permite el sistema del banco?",
        "opciones": [
          "Abrir una cuenta en línea en diez minutos",
          "Pedir un préstamo",
          "Cambiar dinero",
          "Pagar con efectivo"
        ]
      },
      {
        "audio": "He arrived two hours late, which made his girlfriend very angry.",
        "pregunta": "¿Qué enojó a la novia?",
        "opciones": [
          "Que llegara dos horas tarde",
          "Que no llegara",
          "Que olvidara su cumpleaños",
          "Que llegara temprano"
        ]
      },
      {
        "audio": "Forty people applied for the job, most of whom had a master's degree.",
        "pregunta": "¿Qué tenía la mayoría de los candidatos?",
        "opciones": [
          "Una maestría",
          "Experiencia en el extranjero",
          "Doctorado",
          "Nada especial"
        ]
      },
      {
        "audio": "The match might be canceled, in which case you'll get your money back.",
        "pregunta": "¿Qué pasaría si se cancela el partido?",
        "opciones": [
          "Les regresarán el dinero",
          "Se jugará otro día",
          "No pasa nada",
          "Les darán otros boletos"
        ]
      },
      {
        "audio": "Between the train and the bus, I prefer the former because it's faster.",
        "pregunta": "¿Qué prefiere?",
        "opciones": [
          "El tren",
          "El camión",
          "El avión",
          "El carro"
        ]
      }
    ],
    "lectura": {
      "titulo": "A study on sleep and screens",
      "texto": "A recent study carried out by a Mexican university examined the extent to which the use of screens before bedtime affects the quality of sleep. The researchers worked with 1,200 volunteers, most of whom were between eighteen and thirty-five years old. Participants were divided into two groups, the first of which used their phones normally at night, while the second stopped using screens one hour before going to bed. The results showed that the second group slept, on average, forty minutes longer, which surprised even the researchers. Moreover, participants in this group reported feeling less tired during the day. The study also identified a mechanism whereby the blue light from screens reduces the production of melatonin, a hormone that helps us sleep. The authors suggest that schools and companies introduce programs to educate people about digital habits. However, they recognize some limitations, the most important of which is that participants reported their own sleep times, which may not always be accurate.",
      "preguntas": [
        {
          "pregunta": "¿Qué estudió la universidad?",
          "opciones": [
            "Cómo afectan las pantallas antes de dormir a la calidad del sueño",
            "Cuánto tiempo pasan en redes sociales",
            "Qué comen antes de dormir",
            "Por qué la gente trabaja de noche"
          ]
        },
        {
          "pregunta": "¿Cuánto más durmió el segundo grupo?",
          "opciones": [
            "Cuarenta minutos en promedio",
            "Dos horas",
            "Diez minutos",
            "Lo mismo"
          ]
        },
        {
          "pregunta": "¿Qué reduce la luz azul de las pantallas?",
          "opciones": [
            "La producción de melatonina",
            "La vista",
            "El apetito",
            "El estrés"
          ]
        },
        {
          "pregunta": "¿Cuál es la principal limitación del estudio?",
          "opciones": [
            "Los participantes reportaron sus propios horarios de sueño",
            "Fueron pocos participantes",
            "Solo participaron niños",
            "Duró muy poco"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con which, whom o whereby.",
        "pregunta": "He lost his keys, ___ was a disaster.",
        "respuestas": [
          "which"
        ]
      },
      {
        "instruccion": "Completa con which, whom o whereby.",
        "pregunta": "We have three cousins, all of ___ live in Spain.",
        "respuestas": [
          "whom"
        ]
      },
      {
        "instruccion": "Completa con which, whom o whereby.",
        "pregunta": "It is a system ___ workers share their profits.",
        "respuestas": [
          "whereby",
          "in which"
        ]
      },
      {
        "instruccion": "Completa con which.",
        "pregunta": "It may snow, in ___ case the school will close.",
        "respuestas": [
          "which"
        ]
      },
      {
        "instruccion": "Completa con to which.",
        "pregunta": "We measured the extent to ___ the medicine works.",
        "respuestas": [
          "which"
        ]
      },
      {
        "instruccion": "Completa con former o latter.",
        "pregunta": "I like cats and dogs, but I prefer the ___. (los perros)",
        "respuestas": [
          "latter"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "lo cual sorprendió a todos",
        "respuestas": [
          "which surprised everyone",
          "which surprised everybody"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "en cuyo caso",
        "respuestas": [
          "in which case"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "la mayoría de los cuales",
        "respuestas": [
          "most of whom",
          "most of which",
          "the majority of whom",
          "the majority of which"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "This is the house in that I was born.",
        "respuestas": [
          "This is the house in which I was born",
          "This is the house where I was born",
          "This is the house that I was born in",
          "This is the house I was born in"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "She passed the exam, ___ made her parents very proud.",
        "opciones": [
          "which",
          "that",
          "what",
          "who"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "They signed an agreement ___ both companies share the costs.",
        "opciones": [
          "whereby",
          "whom",
          "which of",
          "whose of"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I met many people there, some of ___ became good friends.",
        "opciones": [
          "whom",
          "who",
          "them",
          "which"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The train might be late, in ___ case I'll call you.",
        "opciones": [
          "which",
          "what",
          "that",
          "whose"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«The extent to which» significa:",
        "opciones": [
          "La medida en que",
          "La extensión de",
          "El fin del cual",
          "El lugar donde"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Between Paris and Rome, I loved ___ more: it was so lively.",
        "opciones": [
          "the latter",
          "the later",
          "the last",
          "the late"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The researchers interviewed eighty families, half of which had at least three children.",
        "pregunta": "¿Cuántas familias tenían al menos tres hijos?",
        "opciones": [
          "La mitad",
          "Todas",
          "Ninguna",
          "Ocho"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The internet went down at noon, at which point everybody went for lunch.",
        "pregunta": "¿Qué hicieron cuando se cayó el internet?",
        "opciones": [
          "Se fueron a comer",
          "Se fueron a casa",
          "Llamaron al técnico",
          "Siguieron trabajando"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ninguno de los cuales funcionó",
        "respuestas": [
          "none of which worked"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: un sistema mediante el cual",
        "respuestas": [
          "a system whereby",
          "a system by which",
          "a system in which"
        ]
      }
    ]
  },
  {
    "id": "c1-13",
    "num": 13,
    "titulo": "Pasado irreal (It's high time, I'd rather you…, as if / as though)",
    "contexto": "Situaciones hipotéticas",
    "explicacion": {
      "es": [
        "En inglés, a veces usamos un **tiempo pasado** para hablar de algo **irreal o hipotético en el presente**. Esto pasa con ***wish, if only, it's (high) time, would rather, as if / as though, suppose / imagine***.",
        "***It's (high / about) time*** + sujeto + **pasado** = ya es hora de que (con crítica): ***It's high time** the government **did** something about pollution.*",
        "***Would rather*** + otra persona + **pasado** = preferiría que: *I**'d rather you didn't** tell anyone.* Para el pasado: ***had*** + participio: *I'd rather you **had asked** me first.* (Hubiera preferido que me preguntaras.)",
        "***As if / as though*** + **pasado** = como si (algo que no es real): *He talks **as if he knew** everything.* (Habla como si lo supiera todo.) *She looked **as though she had seen** a ghost.* Si puede ser verdad, se usa presente: *It looks **as if** it**'s** going to rain.*"
      ],
      "tabla": {
        "columnas": [
          "Estructura",
          "Ejemplo",
          "Español"
        ],
        "filas": [
          [
            "It's high time + pasado",
            "It's high time you got a job.",
            "Ya es hora de que consigas trabajo."
          ],
          [
            "would rather + persona + pasado",
            "I'd rather you stayed.",
            "Preferiría que te quedaras."
          ],
          [
            "would rather + persona + had + part.",
            "I'd rather you had told me.",
            "Hubiera preferido que me dijeras."
          ],
          [
            "as if + pasado (irreal)",
            "He acts as if he were the boss.",
            "Actúa como si fuera el jefe."
          ],
          [
            "as if + had + part.",
            "She looked as if she had cried.",
            "Parecía que había llorado."
          ],
          [
            "Suppose / Imagine + pasado",
            "Suppose you won the lottery…",
            "Imagina que ganaras la lotería…"
          ]
        ]
      },
      "ojo": [
        "Con *be* en lo irreal, lo más formal es ***were*** para todas las personas: *as if he **were** the boss*.",
        "*It's time **to go*** (neutral) ≠ *It's time **we went*** (ya deberíamos habernos ido, tono de reproche).",
        "***As if!*** solo, en conversación, significa **¡ni loco! / ¡ni que!**: *Me, apologize to him? As if!*",
        "***Supposing / What if*** + pasado para hipótesis: ***What if** you **lost** your job? What would you do?*",
        "En español se usa el **subjuntivo**: *como si **supiera**, preferiría que **vinieras**, ya es hora de que **hicieras***."
      ],
      "en": [
        "We use a past tense for unreal situations in the present: It's high time the government did something.",
        "I'd rather you didn't tell anyone. I'd rather you had asked me first.",
        "He talks as if he knew everything. She looked as though she had seen a ghost.",
        "Suppose you won the lottery. What would you do?"
      ]
    },
    "vocabulario": [
      {
        "en": "It's high time you got a job.",
        "es": "ya es hora de que consigas trabajo",
        "imagen": "Mamá seria hablando con su hijo adulto en el sofá",
        "ejemplo": [
          "You're thirty. It's high time you got a job.",
          "Tienes treinta. Ya es hora de que consigas trabajo."
        ]
      },
      {
        "en": "It's about time we left.",
        "es": "ya es hora de que nos vayamos",
        "imagen": "Reloj marcando la medianoche en una fiesta",
        "ejemplo": [
          "It's about time we left. It's almost midnight.",
          "Ya es hora de que nos vayamos. Es casi medianoche."
        ]
      },
      {
        "en": "I'd rather you didn't",
        "es": "preferiría que no",
        "imagen": "Persona levantando la mano con amabilidad para detener algo",
        "ejemplo": [
          "I'd rather you didn't smoke in the car.",
          "Preferiría que no fumaras en el carro."
        ]
      },
      {
        "en": "I'd rather you had asked me",
        "es": "hubiera preferido que me preguntaras",
        "imagen": "Persona molesta mirando algo cambiado sin permiso",
        "ejemplo": [
          "I'd rather you had asked me before using my laptop.",
          "Hubiera preferido que me preguntaras antes de usar mi laptop."
        ]
      },
      {
        "en": "as if he knew everything",
        "es": "como si lo supiera todo",
        "imagen": "Hombre hablando con arrogancia en una junta",
        "ejemplo": [
          "He talks as if he knew everything.",
          "Habla como si lo supiera todo."
        ]
      },
      {
        "en": "as though she had seen a ghost",
        "es": "como si hubiera visto un fantasma",
        "imagen": "Mujer pálida y asustada en un pasillo",
        "ejemplo": [
          "She looked as though she had seen a ghost.",
          "Parecía que había visto un fantasma."
        ]
      },
      {
        "en": "as if he were the boss",
        "es": "como si fuera el jefe",
        "imagen": "Empleado dando órdenes a sus compañeros",
        "ejemplo": [
          "He acts as if he were the boss.",
          "Actúa como si fuera el jefe."
        ]
      },
      {
        "en": "It looks as if it's going to rain.",
        "es": "parece que va a llover",
        "imagen": "Nubes negras sobre la ciudad",
        "ejemplo": [
          "It looks as if it's going to rain.",
          "Parece que va a llover."
        ]
      },
      {
        "en": "Suppose you won the lottery",
        "es": "imagina que ganaras la lotería",
        "imagen": "Persona soñando despierta con un boleto",
        "ejemplo": [
          "Suppose you won the lottery. What would you do?",
          "Imagina que ganaras la lotería. ¿Qué harías?"
        ]
      },
      {
        "en": "What if you lost your job?",
        "es": "¿y si perdieras tu trabajo?",
        "imagen": "Persona preocupada pensando en su futuro",
        "ejemplo": [
          "What if you lost your job? Would you move?",
          "¿Y si perdieras tu trabajo? ¿Te mudarías?"
        ]
      },
      {
        "en": "As if!",
        "es": "¡ni loco! / ¡ni que…!",
        "imagen": "Adolescente poniendo los ojos en blanco",
        "ejemplo": [
          "Me, clean his room? As if!",
          "¿Yo, limpiar su cuarto? ¡Ni loco!"
        ]
      },
      {
        "en": "It's time we went home.",
        "es": "ya deberíamos irnos a casa",
        "imagen": "Familia cansada en un parque al atardecer",
        "ejemplo": [
          "It's late. It's time we went home.",
          "Es tarde. Ya deberíamos irnos a casa."
        ]
      },
      {
        "en": "I'd rather we stayed in.",
        "es": "preferiría que nos quedáramos en casa",
        "imagen": "Pareja en el sofá con cobijas y palomitas",
        "ejemplo": [
          "It's raining. I'd rather we stayed in tonight.",
          "Está lloviendo. Preferiría que nos quedáramos en casa hoy."
        ]
      },
      {
        "en": "He spends money as if it grew on trees.",
        "es": "gasta como si el dinero creciera en los árboles",
        "imagen": "Persona derrochando billetes en una tienda",
        "ejemplo": [
          "He spends money as if it grew on trees.",
          "Gasta como si el dinero creciera en los árboles."
        ]
      },
      {
        "en": "Imagine you lived in Paris",
        "es": "imagina que vivieras en París",
        "imagen": "Persona en un balcón con vista a la Torre Eiffel",
        "ejemplo": [
          "Imagine you lived in Paris. Where would you work?",
          "Imagina que vivieras en París. ¿Dónde trabajarías?"
        ]
      },
      {
        "en": "It's high time they fixed the road.",
        "es": "ya es hora de que arreglen la calle",
        "imagen": "Calle llena de baches",
        "ejemplo": [
          "It's high time they fixed this road.",
          "Ya es hora de que arreglen esta calle."
        ]
      }
    ],
    "grupos": [
      {
        "id": "asif",
        "titulo": "Como si…",
        "icono": "🎭",
        "patron": [
          "as if…",
          "as though…",
          "like…"
        ],
        "palabras": [
          {
            "en": "as if nothing had happened",
            "es": "como si nada hubiera pasado",
            "imagen": "Persona sonriendo tranquila junto a un desastre",
            "ejemplo": [
              "He walked in as if nothing had happened.",
              "Entró como si nada hubiera pasado."
            ]
          },
          {
            "en": "as if he owned the place",
            "es": "como si fuera el dueño",
            "imagen": "Hombre con los pies sobre una mesa ajena",
            "ejemplo": [
              "He behaves as if he owned the place.",
              "Se comporta como si fuera el dueño."
            ]
          },
          {
            "en": "as if she were a child",
            "es": "como si fuera una niña",
            "imagen": "Adulta siendo regañada como niña",
            "ejemplo": [
              "They treat her as if she were a child.",
              "La tratan como si fuera una niña."
            ]
          },
          {
            "en": "as though he hadn't slept",
            "es": "como si no hubiera dormido",
            "imagen": "Hombre con ojeras profundas",
            "ejemplo": [
              "He looks as though he hadn't slept for days.",
              "Se ve como si no hubiera dormido en días."
            ]
          },
          {
            "en": "as if by magic",
            "es": "como por arte de magia",
            "imagen": "Mesa que aparece llena de comida",
            "ejemplo": [
              "As if by magic, the food appeared on the table.",
              "Como por arte de magia, la comida apareció en la mesa."
            ]
          },
          {
            "en": "feel as if",
            "es": "sentir como si",
            "imagen": "Persona feliz con los brazos abiertos en una montaña",
            "ejemplo": [
              "I feel as if I could fly.",
              "Siento como si pudiera volar."
            ]
          }
        ]
      },
      {
        "id": "hipotesis",
        "titulo": "Hipótesis",
        "icono": "💭",
        "patron": [
          "Suppose…",
          "What if…?",
          "Imagine…"
        ],
        "palabras": [
          {
            "en": "Supposing",
            "es": "suponiendo que",
            "imagen": "Persona pensativa con un signo de interrogación",
            "ejemplo": [
              "Supposing you had a million pesos, what would you buy?",
              "Suponiendo que tuvieras un millón de pesos, ¿qué comprarías?"
            ]
          },
          {
            "en": "What if",
            "es": "¿y si…?",
            "imagen": "Amigos imaginando planes en una mesa",
            "ejemplo": [
              "What if we moved to the beach?",
              "¿Y si nos mudáramos a la playa?"
            ]
          },
          {
            "en": "Imagine",
            "es": "imagina",
            "imagen": "Persona soñando con los ojos cerrados",
            "ejemplo": [
              "Imagine you could speak ten languages.",
              "Imagina que pudieras hablar diez idiomas."
            ]
          },
          {
            "en": "Let's say",
            "es": "digamos que",
            "imagen": "Persona explicando un ejemplo con las manos",
            "ejemplo": [
              "Let's say you missed the flight. What would you do?",
              "Digamos que perdieras el vuelo. ¿Qué harías?"
            ]
          },
          {
            "en": "In theory",
            "es": "en teoría",
            "imagen": "Pizarrón con fórmulas",
            "ejemplo": [
              "In theory, it should work.",
              "En teoría, debería funcionar."
            ]
          },
          {
            "en": "hypothetically",
            "es": "hipotéticamente",
            "imagen": "Persona levantando un dedo al hablar",
            "ejemplo": [
              "Hypothetically, if you could live anywhere, where would you go?",
              "Hipotéticamente, si pudieras vivir en cualquier lugar, ¿a dónde irías?"
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "You're thirty. It's high time you got a job.",
        "es": "Tienes treinta. Ya es hora de que consigas trabajo."
      },
      {
        "en": "I'd rather you didn't smoke in the car.",
        "es": "Preferiría que no fumaras en el carro."
      },
      {
        "en": "I'd rather you had asked me before using my laptop.",
        "es": "Hubiera preferido que me preguntaras antes de usar mi laptop."
      },
      {
        "en": "He talks as if he knew everything.",
        "es": "Habla como si lo supiera todo."
      },
      {
        "en": "She looked as though she had seen a ghost.",
        "es": "Parecía que había visto un fantasma."
      },
      {
        "en": "It looks as if it's going to rain.",
        "es": "Parece que va a llover."
      },
      {
        "en": "Suppose you won the lottery. What would you do?",
        "es": "Imagina que ganaras la lotería. ¿Qué harías?"
      },
      {
        "en": "Me, clean his room? As if!",
        "es": "¿Yo, limpiar su cuarto? ¡Ni loco!"
      },
      {
        "en": "He walked in as if nothing had happened.",
        "es": "Entró como si nada hubiera pasado."
      },
      {
        "en": "What if we moved to the beach?",
        "es": "¿Y si nos mudáramos a la playa?"
      }
    ],
    "frases": [
      {
        "en": "It's high time the city invested in public transport instead of building more highways.",
        "es": "Ya es hora de que la ciudad invierta en transporte público en lugar de construir más autopistas.",
        "imagen": "Avenida congestionada con un metro en construcción al fondo"
      },
      {
        "en": "My boss talks to us as if we were children who couldn't think for ourselves.",
        "es": "Mi jefe nos habla como si fuéramos niños que no pueden pensar por sí mismos.",
        "imagen": "Jefe hablando con condescendencia a su equipo"
      },
      {
        "en": "I'd rather you didn't mention this to anyone until the contract is signed.",
        "es": "Preferiría que no le comentaras esto a nadie hasta que se firme el contrato.",
        "imagen": "Dos personas hablando en voz baja en una oficina"
      },
      {
        "en": "He came back from his vacation looking as though he had slept for a month.",
        "es": "Regresó de sus vacaciones con cara de haber dormido un mes.",
        "imagen": "Hombre descansado y bronceado entrando a la oficina"
      },
      {
        "en": "Supposing the flight were canceled, would we have enough money to stay another night?",
        "es": "Suponiendo que se cancelara el vuelo, ¿tendríamos suficiente dinero para quedarnos otra noche?",
        "imagen": "Pareja revisando su cartera en un aeropuerto"
      },
      {
        "en": "What if you didn't have to work? How would you spend your days?",
        "es": "¿Y si no tuvieras que trabajar? ¿Cómo pasarías tus días?",
        "imagen": "Persona en una hamaca leyendo con calma"
      },
      {
        "en": "It's about time we told the children the truth about the house.",
        "es": "Ya es hora de que les digamos a los niños la verdad sobre la casa.",
        "imagen": "Padres preocupados conversando en la cocina"
      },
      {
        "en": "She spent the money as if there were no tomorrow.",
        "es": "Gastó el dinero como si no hubiera un mañana.",
        "imagen": "Mujer saliendo de tiendas con muchas bolsas"
      },
      {
        "en": "I'd rather you had told me the truth from the beginning, even if it hurt.",
        "es": "Hubiera preferido que me dijeras la verdad desde el principio, aunque doliera.",
        "imagen": "Persona herida hablando con sinceridad con su amigo"
      },
      {
        "en": "Imagine you could travel back in time. Which period would you visit?",
        "es": "Imagina que pudieras viajar en el tiempo. ¿Qué época visitarías?",
        "imagen": "Persona frente a un reloj antiguo gigante"
      }
    ],
    "listening": [
      {
        "audio": "It's high time you cleaned your room. It's a disaster!",
        "pregunta": "¿Qué debería hacer ya?",
        "opciones": [
          "Limpiar su cuarto",
          "Hacer la tarea",
          "Conseguir trabajo",
          "Dormir"
        ]
      },
      {
        "audio": "I'd rather you didn't use my car this weekend. I need it.",
        "pregunta": "¿Qué le pide?",
        "opciones": [
          "Que no use su carro",
          "Que le preste su carro",
          "Que lave el carro",
          "Que maneje con cuidado"
        ]
      },
      {
        "audio": "He was so calm. He acted as if nothing had happened.",
        "pregunta": "¿Cómo actuó?",
        "opciones": [
          "Como si nada hubiera pasado",
          "Muy nervioso",
          "Enojado",
          "Triste"
        ]
      },
      {
        "audio": "Suppose you could live in any city. Which one would you choose?",
        "pregunta": "¿Qué le preguntan?",
        "opciones": [
          "En qué ciudad viviría",
          "Dónde vive",
          "A dónde viajó",
          "Dónde nació"
        ]
      },
      {
        "audio": "It looks as if they're going to close the restaurant. There's no one inside.",
        "pregunta": "¿Qué parece?",
        "opciones": [
          "Que van a cerrar el restaurante",
          "Que está lleno",
          "Que abrirán otro",
          "Que hay una fiesta"
        ]
      }
    ],
    "lectura": {
      "titulo": "Dear Aunt Sofía",
      "texto": "Dear Aunt Sofía, I need your advice. My brother Andrés is twenty-eight, and he still lives with my parents. He doesn't pay rent, he doesn't help with the housework, and he spends his salary as if money grew on trees. Last week he bought a new phone, even though his old one worked perfectly. My parents treat him as if he were still a teenager, and I think it's high time he moved out. The problem is that when I say something, he looks at me as though I had insulted him. I'd rather my parents talked to him, but they say they don't want to cause problems. What should I do? — Mariana. Dear Mariana, I understand your frustration. However, I'd rather you didn't confront your brother directly; it will probably make him defensive. Suppose you invited him for a coffee and asked him about his plans for the future? Sometimes people need someone to ask them the right question. And remember: it's his life, not yours. — Aunt Sofía.",
      "preguntas": [
        {
          "pregunta": "¿Qué edad tiene Andrés?",
          "opciones": [
            "Veintiocho",
            "Dieciocho",
            "Treinta y ocho",
            "Veinte"
          ]
        },
        {
          "pregunta": "¿Cómo gasta su dinero?",
          "opciones": [
            "Como si creciera en los árboles",
            "Con mucho cuidado",
            "Lo ahorra todo",
            "Lo da a sus papás"
          ]
        },
        {
          "pregunta": "¿Cómo tratan los papás a Andrés?",
          "opciones": [
            "Como si fuera un adolescente",
            "Muy estrictamente",
            "Como a un adulto",
            "No le hablan"
          ]
        },
        {
          "pregunta": "¿Qué le sugiere la tía a Mariana?",
          "opciones": [
            "Invitarlo a un café y preguntarle por sus planes",
            "Enfrentarlo directamente",
            "Hablar con sus papás",
            "Ignorarlo"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con el pasado.",
        "pregunta": "It's high time you ___ (start) studying.",
        "respuestas": [
          "started"
        ]
      },
      {
        "instruccion": "Completa con el pasado.",
        "pregunta": "I'd rather you ___ (not / call) me at work.",
        "respuestas": [
          "didn't call",
          "did not call"
        ]
      },
      {
        "instruccion": "Completa con were.",
        "pregunta": "He talks as if he ___ the president.",
        "respuestas": [
          "were",
          "was"
        ]
      },
      {
        "instruccion": "Completa con had + participio.",
        "pregunta": "She looked as if she ___ (cry).",
        "respuestas": [
          "had cried",
          "had been crying"
        ]
      },
      {
        "instruccion": "Completa con had + participio.",
        "pregunta": "I'd rather you ___ (tell) me before.",
        "respuestas": [
          "had told"
        ]
      },
      {
        "instruccion": "Completa la hipótesis.",
        "pregunta": "What ___ you lost your passport?",
        "respuestas": [
          "if"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Ya es hora de que nos vayamos.",
        "respuestas": [
          "It's time we left",
          "It's high time we left",
          "It's about time we left",
          "It's time we went"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "como si nada hubiera pasado",
        "respuestas": [
          "as if nothing had happened",
          "as though nothing had happened"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Preferiría que no lo hicieras.",
        "respuestas": [
          "I'd rather you didn't do it",
          "I would rather you didn't do it",
          "I'd rather you didn't"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "It's high time you get a job.",
        "respuestas": [
          "It's high time you got a job",
          "It is high time you got a job"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "It's about time you ___ to bed.",
        "opciones": [
          "went",
          "go",
          "will go",
          "going"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I'd rather you ___ here.",
        "opciones": [
          "didn't smoke",
          "don't smoke",
          "not smoke",
          "won't smoke"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She speaks English as if she ___ born in London.",
        "opciones": [
          "had been",
          "has been",
          "was being",
          "is"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Suppose you ___ invisible. What would you do?",
        "opciones": [
          "were",
          "are",
          "will be",
          "have been"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«As if!» en conversación significa:",
        "opciones": [
          "¡Ni loco! / ¡Ni que…!",
          "Como si…",
          "¡Claro que sí!",
          "Tal vez"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "It looks as if it ___ going to snow. (es posible)",
        "opciones": [
          "is",
          "were",
          "had been",
          "be"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I'd rather you had invited me to the meeting. I had some important ideas.",
        "pregunta": "¿Qué hubiera preferido?",
        "opciones": [
          "Que lo invitaran a la junta",
          "No ir a la junta",
          "Que cancelaran la junta",
          "Llegar temprano"
        ]
      },
      {
        "tipo": "listening",
        "audio": "She dances as if nobody were watching. It's beautiful.",
        "pregunta": "¿Cómo baila?",
        "opciones": [
          "Como si nadie la viera",
          "Con miedo",
          "Muy mal",
          "Muy rápido"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Habla como si lo supiera todo.",
        "respuestas": [
          "He talks as if he knew everything",
          "She talks as if she knew everything",
          "He talks as though he knew everything",
          "She talks as though she knew everything"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¿Y si nos mudáramos?",
        "respuestas": [
          "What if we moved"
        ]
      }
    ]
  },
  {
    "id": "c1-14",
    "num": 14,
    "titulo": "Lenguaje prudente (hedging: It would appear that…, seem, tend to)",
    "contexto": "Hablar con cautela",
    "explicacion": {
      "es": [
        "El **lenguaje prudente** (*hedging*) sirve para **suavizar** lo que decimos, mostrar que **no estamos 100% seguros** o evitar sonar demasiado directos. Es esencial en textos **académicos**, **profesionales** y en situaciones **delicadas**.",
        "Verbos que suavizan: ***seem / appear*** (parecer), ***tend to*** (tender a), ***suggest*** (sugerir): *The results **seem to** indicate that…* *People **tend to** spend more in December.* ***It would appear that**…* (Al parecer…)",
        "Modales y adverbios de probabilidad: ***may, might, could, possibly, probably, perhaps, likely, unlikely, apparently***: *This **could possibly** explain the problem.* *It is **likely** that prices will rise.*",
        "Expresiones que suavizan opiniones: ***To some extent***, ***In some cases***, ***It could be argued that***, ***I'm not entirely sure, but…***, ***There is some evidence that…***, ***As far as I know…*** (hasta donde sé)."
      ],
      "tabla": {
        "columnas": [
          "Directo",
          "Prudente"
        ],
        "filas": [
          [
            "This is the cause.",
            "This may be one of the causes."
          ],
          [
            "People spend more in December.",
            "People tend to spend more in December."
          ],
          [
            "The plan will fail.",
            "It seems unlikely that the plan will succeed."
          ],
          [
            "You're wrong.",
            "I'm not entirely sure that's correct."
          ],
          [
            "Prices will rise.",
            "It would appear that prices are likely to rise."
          ]
        ]
      },
      "ojo": [
        "En español también suavizamos: «**al parecer**», «**tiende a**», «**es probable que**», «**hasta cierto punto**».",
        "En correos de trabajo el *hedging* evita sonar **grosero**: *There **seems to be** a mistake in the invoice* (mejor que *There is a mistake*).",
        "No exageres: demasiados *maybe, perhaps, possibly* juntos hacen que suenes **inseguro**.",
        "***Likely / unlikely*** + ***to***: *He **is likely to** win.* / ***It is likely that** he will win.*",
        "Verbos de reporte prudentes en textos académicos: ***suggest, indicate, imply, point to***, en vez de *prove* (probar)."
      ],
      "en": [
        "Hedging makes our statements softer and more cautious, especially in academic and professional texts.",
        "The results seem to indicate that people tend to spend more in December.",
        "It would appear that prices are likely to rise.",
        "To some extent, it could be argued that this is true."
      ]
    },
    "vocabulario": [
      {
        "en": "It would appear that",
        "es": "al parecer",
        "imagen": "Analista revisando gráficas con cautela",
        "ejemplo": [
          "It would appear that the problem is more serious than we thought.",
          "Al parecer el problema es más grave de lo que pensábamos."
        ]
      },
      {
        "en": "seem to indicate",
        "es": "parecen indicar",
        "imagen": "Gráfica con una tendencia ligera",
        "ejemplo": [
          "The results seem to indicate a small improvement.",
          "Los resultados parecen indicar una pequeña mejora."
        ]
      },
      {
        "en": "tend to",
        "es": "tender a",
        "imagen": "Personas comprando regalos en diciembre",
        "ejemplo": [
          "People tend to spend more money in December.",
          "La gente tiende a gastar más dinero en diciembre."
        ]
      },
      {
        "en": "it is likely that",
        "es": "es probable que",
        "imagen": "Pronóstico del clima con nubes",
        "ejemplo": [
          "It is likely that prices will rise next year.",
          "Es probable que los precios suban el próximo año."
        ]
      },
      {
        "en": "it is unlikely that",
        "es": "es poco probable que",
        "imagen": "Persona dudando frente a un plan",
        "ejemplo": [
          "It is unlikely that the project will finish on time.",
          "Es poco probable que el proyecto termine a tiempo."
        ]
      },
      {
        "en": "there seems to be",
        "es": "parece que hay",
        "imagen": "Persona revisando una factura con duda",
        "ejemplo": [
          "There seems to be a mistake in the invoice.",
          "Parece que hay un error en la factura."
        ]
      },
      {
        "en": "to some extent",
        "es": "hasta cierto punto",
        "imagen": "Persona inclinando la mano en señal de más o menos",
        "ejemplo": [
          "To some extent, I agree with you.",
          "Hasta cierto punto, estoy de acuerdo contigo."
        ]
      },
      {
        "en": "in some cases",
        "es": "en algunos casos",
        "imagen": "Doctor revisando expedientes de pacientes",
        "ejemplo": [
          "In some cases, the treatment can cause side effects.",
          "En algunos casos, el tratamiento puede causar efectos secundarios."
        ]
      },
      {
        "en": "as far as I know",
        "es": "hasta donde sé",
        "imagen": "Persona pensativa respondiendo con cautela",
        "ejemplo": [
          "As far as I know, the meeting is still on Monday.",
          "Hasta donde sé, la junta sigue siendo el lunes."
        ]
      },
      {
        "en": "I'm not entirely sure",
        "es": "no estoy del todo seguro",
        "imagen": "Persona con gesto de duda",
        "ejemplo": [
          "I'm not entirely sure that's correct.",
          "No estoy del todo seguro de que eso sea correcto."
        ]
      },
      {
        "en": "apparently",
        "es": "al parecer / según parece",
        "imagen": "Persona contando un rumor con cautela",
        "ejemplo": [
          "Apparently, the store is closing next month.",
          "Al parecer, la tienda cierra el próximo mes."
        ]
      },
      {
        "en": "could possibly",
        "es": "podría posiblemente",
        "imagen": "Científico observando un experimento",
        "ejemplo": [
          "This could possibly explain the problem.",
          "Esto podría posiblemente explicar el problema."
        ]
      },
      {
        "en": "there is some evidence that",
        "es": "hay algunos indicios de que",
        "imagen": "Documentos de investigación sobre una mesa",
        "ejemplo": [
          "There is some evidence that exercise improves memory.",
          "Hay algunos indicios de que el ejercicio mejora la memoria."
        ]
      },
      {
        "en": "it could be argued that",
        "es": "se podría argumentar que",
        "imagen": "Persona debatiendo con calma",
        "ejemplo": [
          "It could be argued that technology makes us lonelier.",
          "Se podría argumentar que la tecnología nos hace más solitarios."
        ]
      },
      {
        "en": "relatively",
        "es": "relativamente",
        "imagen": "Balanza casi equilibrada",
        "ejemplo": [
          "The risk is relatively low.",
          "El riesgo es relativamente bajo."
        ]
      },
      {
        "en": "somewhat",
        "es": "algo / un tanto",
        "imagen": "Persona ligeramente decepcionada",
        "ejemplo": [
          "I was somewhat disappointed with the results.",
          "Me decepcionaron un tanto los resultados."
        ]
      }
    ],
    "grupos": [
      {
        "id": "academico",
        "titulo": "En textos académicos",
        "icono": "📑",
        "patron": [
          "The data suggest that…",
          "It may be the case that…",
          "This appears to…"
        ],
        "palabras": [
          {
            "en": "The data suggest",
            "es": "los datos sugieren",
            "imagen": "Investigadora presentando gráficas",
            "ejemplo": [
              "The data suggest that young people read less than before.",
              "Los datos sugieren que los jóvenes leen menos que antes."
            ]
          },
          {
            "en": "It may be the case that",
            "es": "puede ser que",
            "imagen": "Persona considerando varias hipótesis",
            "ejemplo": [
              "It may be the case that the sample was too small.",
              "Puede ser que la muestra fuera demasiado pequeña."
            ]
          },
          {
            "en": "appears to be",
            "es": "parece ser",
            "imagen": "Microscopio con una muestra",
            "ejemplo": [
              "The virus appears to be less dangerous than expected.",
              "El virus parece ser menos peligroso de lo esperado."
            ]
          },
          {
            "en": "a possible explanation",
            "es": "una posible explicación",
            "imagen": "Pizarrón con varias ideas conectadas",
            "ejemplo": [
              "A possible explanation is that the weather was unusually hot.",
              "Una posible explicación es que el clima fue inusualmente caluroso."
            ]
          },
          {
            "en": "further research is needed",
            "es": "se necesita más investigación",
            "imagen": "Científicos trabajando en un laboratorio",
            "ejemplo": [
              "Further research is needed to confirm these results.",
              "Se necesita más investigación para confirmar estos resultados."
            ]
          },
          {
            "en": "generally speaking",
            "es": "en general",
            "imagen": "Persona dando una conferencia con calma",
            "ejemplo": [
              "Generally speaking, older people sleep less.",
              "En general, las personas mayores duermen menos."
            ]
          }
        ]
      },
      {
        "id": "trabajo",
        "titulo": "Suavizar en el trabajo",
        "icono": "💼",
        "patron": [
          "There seems to be…",
          "I was wondering if…",
          "Perhaps we could…"
        ],
        "palabras": [
          {
            "en": "Perhaps we could",
            "es": "quizás podríamos",
            "imagen": "Equipo proponiendo ideas en una junta",
            "ejemplo": [
              "Perhaps we could discuss this next week.",
              "Quizás podríamos hablar de esto la próxima semana."
            ]
          },
          {
            "en": "I was wondering if",
            "es": "me preguntaba si",
            "imagen": "Persona pidiendo algo con cortesía",
            "ejemplo": [
              "I was wondering if you could help me with this report.",
              "Me preguntaba si podrías ayudarme con este reporte."
            ]
          },
          {
            "en": "It might be better to",
            "es": "tal vez sería mejor",
            "imagen": "Persona sugiriendo un cambio con amabilidad",
            "ejemplo": [
              "It might be better to wait until Monday.",
              "Tal vez sería mejor esperar hasta el lunes."
            ]
          },
          {
            "en": "I'm afraid that",
            "es": "me temo que",
            "imagen": "Persona dando una mala noticia con tacto",
            "ejemplo": [
              "I'm afraid that we can't accept your offer.",
              "Me temo que no podemos aceptar su oferta."
            ]
          },
          {
            "en": "a slight problem",
            "es": "un pequeño problema",
            "imagen": "Persona señalando un detalle en una pantalla",
            "ejemplo": [
              "There's a slight problem with the schedule.",
              "Hay un pequeño problema con el horario."
            ]
          },
          {
            "en": "not quite what we expected",
            "es": "no exactamente lo que esperábamos",
            "imagen": "Equipo revisando resultados con duda",
            "ejemplo": [
              "The results were not quite what we expected.",
              "Los resultados no fueron exactamente lo que esperábamos."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "It would appear that the problem is more serious than we thought.",
        "es": "Al parecer el problema es más grave de lo que pensábamos."
      },
      {
        "en": "People tend to spend more money in December.",
        "es": "La gente tiende a gastar más dinero en diciembre."
      },
      {
        "en": "It is likely that prices will rise next year.",
        "es": "Es probable que los precios suban el próximo año."
      },
      {
        "en": "There seems to be a mistake in the invoice.",
        "es": "Parece que hay un error en la factura."
      },
      {
        "en": "To some extent, I agree with you.",
        "es": "Hasta cierto punto, estoy de acuerdo contigo."
      },
      {
        "en": "As far as I know, the meeting is still on Monday.",
        "es": "Hasta donde sé, la junta sigue siendo el lunes."
      },
      {
        "en": "There is some evidence that exercise improves memory.",
        "es": "Hay algunos indicios de que el ejercicio mejora la memoria."
      },
      {
        "en": "The data suggest that young people read less than before.",
        "es": "Los datos sugieren que los jóvenes leen menos que antes."
      },
      {
        "en": "Further research is needed to confirm these results.",
        "es": "Se necesita más investigación para confirmar estos resultados."
      },
      {
        "en": "I was wondering if you could help me with this report.",
        "es": "Me preguntaba si podrías ayudarme con este reporte."
      }
    ],
    "frases": [
      {
        "en": "The results of the survey seem to suggest that most people would prefer to work from home at least two days a week.",
        "es": "Los resultados de la encuesta parecen sugerir que la mayoría preferiría trabajar desde casa al menos dos días a la semana.",
        "imagen": "Persona trabajando en casa con su laptop"
      },
      {
        "en": "It would appear that the new policy has had a somewhat negative effect on small businesses.",
        "es": "Al parecer la nueva política ha tenido un efecto un tanto negativo en los pequeños negocios.",
        "imagen": "Dueño de una tienda pequeña revisando cuentas preocupado"
      },
      {
        "en": "Children who read every day tend to have a wider vocabulary than those who don't.",
        "es": "Los niños que leen todos los días tienden a tener un vocabulario más amplio que los que no.",
        "imagen": "Niño leyendo un libro en la cama"
      },
      {
        "en": "There seems to have been a misunderstanding about the delivery date.",
        "es": "Parece que hubo un malentendido con la fecha de entrega.",
        "imagen": "Persona hablando por teléfono con calma sobre un pedido"
      },
      {
        "en": "It is unlikely that the government will approve the project before the elections.",
        "es": "Es poco probable que el gobierno apruebe el proyecto antes de las elecciones.",
        "imagen": "Edificio de gobierno con banderas"
      },
      {
        "en": "To some extent, social media can help people stay in touch, but it can also cause anxiety.",
        "es": "Hasta cierto punto, las redes sociales pueden ayudar a la gente a mantenerse en contacto, pero también pueden causar ansiedad.",
        "imagen": "Persona preocupada mirando su celular en la noche"
      },
      {
        "en": "As far as I know, nobody has complained about the new schedule yet.",
        "es": "Hasta donde sé, nadie se ha quejado todavía del nuevo horario.",
        "imagen": "Oficina tranquila con empleados trabajando"
      },
      {
        "en": "A possible explanation for the decrease in sales is the arrival of a new competitor.",
        "es": "Una posible explicación de la baja en las ventas es la llegada de un nuevo competidor.",
        "imagen": "Gráfica de ventas bajando con una tienda nueva al fondo"
      },
      {
        "en": "I'm not entirely sure, but I think the museum might be closed on Mondays.",
        "es": "No estoy del todo seguro, pero creo que el museo podría estar cerrado los lunes.",
        "imagen": "Turistas frente a un museo con la puerta cerrada"
      },
      {
        "en": "Further research is needed before we can say that the treatment is completely safe.",
        "es": "Se necesita más investigación antes de poder decir que el tratamiento es completamente seguro.",
        "imagen": "Investigadores revisando muestras en un laboratorio"
      }
    ],
    "listening": [
      {
        "audio": "It would appear that the train is delayed again. Apparently, there's a problem with the tracks.",
        "pregunta": "¿Cuál parece ser el problema?",
        "opciones": [
          "Un problema con las vías",
          "Mal clima",
          "Una huelga",
          "No hay conductor"
        ]
      },
      {
        "audio": "People tend to sleep less when they're stressed.",
        "pregunta": "¿Qué tiende a pasar con el estrés?",
        "opciones": [
          "La gente duerme menos",
          "La gente come más",
          "La gente trabaja mejor",
          "La gente duerme más"
        ]
      },
      {
        "audio": "There seems to be a small mistake in your bill. You've charged us twice for the coffee.",
        "pregunta": "¿Cuál es el error?",
        "opciones": [
          "Les cobraron dos veces el café",
          "No les cobraron",
          "Falta un plato",
          "El total es menor"
        ]
      },
      {
        "audio": "As far as I know, the store opens at ten on Sundays.",
        "pregunta": "¿A qué hora abre la tienda los domingos?",
        "opciones": [
          "A las diez, hasta donde sabe",
          "A las nueve",
          "No abre",
          "A las once"
        ]
      },
      {
        "audio": "It is unlikely that it will rain tomorrow, so we can go to the beach.",
        "pregunta": "¿Qué es poco probable?",
        "opciones": [
          "Que llueva mañana",
          "Que vayan a la playa",
          "Que haga calor",
          "Que haya tráfico"
        ]
      }
    ],
    "lectura": {
      "titulo": "Does coffee make you live longer?",
      "texto": "In recent years, several studies have suggested that people who drink moderate amounts of coffee tend to live slightly longer than those who don't. However, scientists are careful not to say that coffee itself is the reason. It may be the case that coffee drinkers share other habits that are good for their health. For example, there is some evidence that they are more likely to have active social lives, which is known to be beneficial. Moreover, most studies rely on people reporting how much coffee they drink, which may not always be accurate. It would appear that two or three cups a day are not harmful for most adults, but in some cases, coffee can cause problems, especially for people with anxiety or heart conditions. As one researcher explained: The data seem to indicate a positive relationship, but we cannot say that coffee causes a longer life. Further research is needed. In other words, enjoy your coffee, but don't expect it to make you live forever.",
      "preguntas": [
        {
          "pregunta": "¿Qué sugieren varios estudios?",
          "opciones": [
            "Que quienes toman café moderado tienden a vivir un poco más",
            "Que el café es peligroso",
            "Que el café cura enfermedades",
            "Que hay que tomar mucho café"
          ]
        },
        {
          "pregunta": "¿Por qué los científicos son cautelosos?",
          "opciones": [
            "Los que toman café pueden tener otros hábitos saludables",
            "El café es caro",
            "No hicieron estudios",
            "Solo estudiaron a niños"
          ]
        },
        {
          "pregunta": "¿A quién le puede causar problemas el café?",
          "opciones": [
            "A personas con ansiedad o problemas del corazón",
            "A todos",
            "A los niños solamente",
            "A nadie"
          ]
        },
        {
          "pregunta": "¿Cuál es la conclusión del texto?",
          "opciones": [
            "Disfrutar el café sin esperar que alargue la vida para siempre",
            "Dejar el café",
            "Tomar más café",
            "El café causa una vida más larga"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Suaviza con tend to.",
        "pregunta": "People spend more in December. → People ___ to spend more in December.",
        "respuestas": [
          "tend"
        ]
      },
      {
        "instruccion": "Suaviza con seem.",
        "pregunta": "There is a mistake. → There ___ to be a mistake.",
        "respuestas": [
          "seems"
        ]
      },
      {
        "instruccion": "Completa con likely o unlikely.",
        "pregunta": "It is ___ that it will snow in Cancun. (poco probable)",
        "respuestas": [
          "unlikely"
        ]
      },
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "As far as I ___, the shop is closed today.",
        "respuestas": [
          "know"
        ]
      },
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "To some ___, I agree with you.",
        "respuestas": [
          "extent"
        ]
      },
      {
        "instruccion": "Completa la expresión académica.",
        "pregunta": "Further research is ___.",
        "respuestas": [
          "needed",
          "required",
          "necessary"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "al parecer",
        "respuestas": [
          "apparently",
          "it would appear that",
          "it seems that"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Parece que hay un error.",
        "respuestas": [
          "There seems to be a mistake",
          "There seems to be an error",
          "It seems there's a mistake"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "No estoy del todo seguro.",
        "respuestas": [
          "I'm not entirely sure",
          "I am not entirely sure",
          "I'm not completely sure"
        ]
      },
      {
        "instruccion": "Hazlo más prudente.",
        "pregunta": "This is the cause of the problem. → This ___ be one of the causes of the problem.",
        "respuestas": [
          "may",
          "might",
          "could"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "Children ___ to learn languages faster than adults.",
        "opciones": [
          "tend",
          "seem that",
          "likely",
          "appear that"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "It would ___ that the meeting has been canceled.",
        "opciones": [
          "appear",
          "seem to",
          "tend",
          "likely"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The results ___ to show a small improvement.",
        "opciones": [
          "seem",
          "are seem",
          "seems that",
          "appears that"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "It is ___ that he will come. He's very busy.",
        "opciones": [
          "unlikely",
          "unlike",
          "not like",
          "dislike"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es más prudente?",
        "opciones": [
          "There seems to be a problem with your order.",
          "Your order is wrong.",
          "You made a mistake.",
          "This is a disaster."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«To some extent» significa:",
        "opciones": [
          "Hasta cierto punto",
          "En exceso",
          "Completamente",
          "Nunca"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The data suggest that unemployment may fall slightly next year.",
        "pregunta": "¿Qué sugieren los datos?",
        "opciones": [
          "Que el desempleo podría bajar un poco",
          "Que el desempleo subirá mucho",
          "Que no habrá cambios",
          "Que habrá una crisis"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I'm not entirely sure, but I think the flight leaves from terminal two.",
        "pregunta": "¿De qué terminal cree que sale el vuelo?",
        "opciones": [
          "De la terminal dos",
          "De la terminal uno",
          "No sabe nada",
          "De la terminal tres"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: hasta donde sé",
        "respuestas": [
          "as far as I know"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Es probable que llueva.",
        "respuestas": [
          "It is likely that it will rain",
          "It's likely to rain",
          "It's likely that it will rain",
          "It is likely to rain"
        ]
      }
    ]
  },
  {
    "id": "c1-15",
    "num": 15,
    "titulo": "Marcadores del discurso avanzados",
    "contexto": "Conversación y escritura fluida",
    "explicacion": {
      "es": [
        "Los **marcadores del discurso** organizan lo que decimos y muestran la **relación** entre las ideas. En la **conversación** sirven para ganar tiempo, cambiar de tema o mostrar actitud: ***Anyway*** (en fin), ***By the way*** (por cierto), ***Actually*** (de hecho / en realidad), ***Mind you*** (aunque, eso sí).",
        "Para **aclarar o reformular**: ***In other words*** (en otras palabras), ***That is to say*** (es decir), ***What I mean is…***, ***To put it another way…***",
        "Para **mostrar actitud**: ***Admittedly*** (hay que admitir), ***Frankly / To be honest*** (francamente), ***Surprisingly*** (sorprendentemente), ***Needless to say*** (está de más decir), ***Of course***.",
        "En **escritura** formal: ***Consequently / As a result*** (en consecuencia), ***Nevertheless / Nonetheless*** (no obstante), ***Furthermore / Moreover*** (además), ***In contrast / Conversely*** (en cambio), ***Ultimately*** (en última instancia), ***With regard to / As for*** (en cuanto a)."
      ],
      "tabla": {
        "columnas": [
          "Función",
          "Marcadores"
        ],
        "filas": [
          [
            "Cambiar de tema",
            "By the way, Anyway, Speaking of…"
          ],
          [
            "Corregir / precisar",
            "Actually, In fact, As a matter of fact"
          ],
          [
            "Reformular",
            "In other words, That is to say, What I mean is"
          ],
          [
            "Concesión",
            "Admittedly, Mind you, Granted"
          ],
          [
            "Consecuencia (formal)",
            "Consequently, Therefore, Hence"
          ],
          [
            "Contraste (formal)",
            "Nevertheless, Conversely, In contrast"
          ]
        ]
      },
      "ojo": [
        "***Actually*** ≠ *actualmente*. *Actually* = **en realidad / de hecho**. *Actualmente* = ***currently / nowadays***.",
        "***Eventually*** ≠ *eventualmente*. *Eventually* = **finalmente / con el tiempo**.",
        "***Anyway*** cierra un tema o regresa al principal: *Anyway, as I was saying…* (En fin, como te decía…)",
        "***Mind you*** (británico, informal) añade una idea que matiza: *The food was great. Mind you, it was expensive.*",
        "No llenes cada oración de marcadores: úsalos para **guiar** al lector, no para decorar."
      ],
      "en": [
        "Discourse markers organize what we say. In conversation: anyway, by the way, actually.",
        "To reformulate: in other words, that is to say, what I mean is.",
        "To show attitude: admittedly, frankly, needless to say.",
        "In formal writing: consequently, nevertheless, conversely, ultimately."
      ]
    },
    "vocabulario": [
      {
        "en": "Anyway",
        "es": "en fin",
        "imagen": "Persona retomando una conversación con un gesto",
        "ejemplo": [
          "Anyway, as I was saying, the meeting is on Monday.",
          "En fin, como te decía, la junta es el lunes."
        ]
      },
      {
        "en": "By the way",
        "es": "por cierto",
        "imagen": "Amiga recordando algo de repente en un café",
        "ejemplo": [
          "By the way, did you call your mother?",
          "Por cierto, ¿le llamaste a tu mamá?"
        ]
      },
      {
        "en": "Actually",
        "es": "en realidad / de hecho",
        "imagen": "Persona corrigiendo amablemente a otra",
        "ejemplo": [
          "Actually, I'm not from Monterrey. I'm from Saltillo.",
          "En realidad no soy de Monterrey. Soy de Saltillo."
        ]
      },
      {
        "en": "In other words",
        "es": "en otras palabras",
        "imagen": "Maestra explicando algo de otra forma",
        "ejemplo": [
          "In other words, we need to start again.",
          "En otras palabras, tenemos que empezar de nuevo."
        ]
      },
      {
        "en": "That is to say",
        "es": "es decir",
        "imagen": "Persona explicando con un pizarrón",
        "ejemplo": [
          "The course lasts a semester, that is to say, six months.",
          "El curso dura un semestre, es decir, seis meses."
        ]
      },
      {
        "en": "Admittedly",
        "es": "hay que admitir que",
        "imagen": "Persona concediendo un punto en un debate",
        "ejemplo": [
          "Admittedly, the plan has some weaknesses.",
          "Hay que admitir que el plan tiene algunas debilidades."
        ]
      },
      {
        "en": "Frankly",
        "es": "francamente",
        "imagen": "Persona hablando con honestidad directa",
        "ejemplo": [
          "Frankly, I don't think it's a good idea.",
          "Francamente, no creo que sea buena idea."
        ]
      },
      {
        "en": "Needless to say",
        "es": "está de más decir",
        "imagen": "Persona con una sonrisa obvia",
        "ejemplo": [
          "Needless to say, we were very happy.",
          "Está de más decir que estábamos muy felices."
        ]
      },
      {
        "en": "Consequently",
        "es": "en consecuencia",
        "imagen": "Gráfica con causa y efecto",
        "ejemplo": [
          "Sales fell. Consequently, the company closed two stores.",
          "Las ventas bajaron. En consecuencia, la empresa cerró dos tiendas."
        ]
      },
      {
        "en": "Nevertheless",
        "es": "no obstante",
        "imagen": "Equipo celebrando a pesar de un mal resultado",
        "ejemplo": [
          "The weather was bad. Nevertheless, the event was a success.",
          "El clima fue malo. No obstante, el evento fue un éxito."
        ]
      },
      {
        "en": "Conversely",
        "es": "a la inversa / en cambio",
        "imagen": "Dos flechas en direcciones opuestas",
        "ejemplo": [
          "Some people love the city; conversely, others prefer the countryside.",
          "A algunos les encanta la ciudad; en cambio, otros prefieren el campo."
        ]
      },
      {
        "en": "Ultimately",
        "es": "en última instancia",
        "imagen": "Persona tomando una decisión final",
        "ejemplo": [
          "Ultimately, it's your decision.",
          "En última instancia, es tu decisión."
        ]
      },
      {
        "en": "As for",
        "es": "en cuanto a",
        "imagen": "Persona revisando una lista de temas",
        "ejemplo": [
          "As for the budget, we'll discuss it tomorrow.",
          "En cuanto al presupuesto, lo vemos mañana."
        ]
      },
      {
        "en": "Mind you",
        "es": "aunque / eso sí",
        "imagen": "Persona añadiendo un detalle con una sonrisa",
        "ejemplo": [
          "The food was great. Mind you, it was expensive.",
          "La comida estaba buenísima. Eso sí, estaba cara."
        ]
      },
      {
        "en": "As a matter of fact",
        "es": "de hecho",
        "imagen": "Persona revelando un dato sorprendente",
        "ejemplo": [
          "As a matter of fact, I've been there twice.",
          "De hecho, he ido dos veces."
        ]
      },
      {
        "en": "Speaking of",
        "es": "hablando de",
        "imagen": "Amigos cambiando de tema mientras comen",
        "ejemplo": [
          "Speaking of food, are you hungry?",
          "Hablando de comida, ¿tienes hambre?"
        ]
      }
    ],
    "grupos": [
      {
        "id": "conversacion",
        "titulo": "En la conversación",
        "icono": "💬",
        "patron": [
          "Anyway…",
          "Actually…",
          "You know what I mean?"
        ],
        "palabras": [
          {
            "en": "Well",
            "es": "bueno",
            "imagen": "Persona pensando antes de responder",
            "ejemplo": [
              "Well, it depends on the price.",
              "Bueno, depende del precio."
            ]
          },
          {
            "en": "I mean",
            "es": "o sea / quiero decir",
            "imagen": "Persona aclarando lo que dijo",
            "ejemplo": [
              "It was good. I mean, it wasn't perfect, but it was good.",
              "Estuvo bien. O sea, no fue perfecto, pero estuvo bien."
            ]
          },
          {
            "en": "You know",
            "es": "sabes / ya sabes",
            "imagen": "Persona hablando relajada con un amigo",
            "ejemplo": [
              "It's that café near the park, you know, the one with the blue door.",
              "Es el café cerca del parque, ya sabes, el de la puerta azul."
            ]
          },
          {
            "en": "Let me think",
            "es": "déjame pensar",
            "imagen": "Persona con la mano en la barbilla",
            "ejemplo": [
              "Let me think. Yes, I think it was in 2015.",
              "Déjame pensar. Sí, creo que fue en 2015."
            ]
          },
          {
            "en": "To be honest",
            "es": "para ser honesto",
            "imagen": "Persona confesando algo con sinceridad",
            "ejemplo": [
              "To be honest, I didn't like the movie.",
              "Para ser honesto, no me gustó la película."
            ]
          },
          {
            "en": "Come to think of it",
            "es": "ahora que lo pienso",
            "imagen": "Persona recordando algo de pronto",
            "ejemplo": [
              "Come to think of it, I haven't seen her for weeks.",
              "Ahora que lo pienso, no la he visto en semanas."
            ]
          }
        ]
      },
      {
        "id": "escritura",
        "titulo": "En la escritura formal",
        "icono": "✍️",
        "patron": [
          "Consequently…",
          "With regard to…",
          "In contrast…"
        ],
        "palabras": [
          {
            "en": "With regard to",
            "es": "con respecto a",
            "imagen": "Documento formal con varios puntos",
            "ejemplo": [
              "With regard to your request, we are pleased to inform you that it has been approved.",
              "Con respecto a su solicitud, nos complace informarle que ha sido aprobada."
            ]
          },
          {
            "en": "In contrast",
            "es": "en contraste",
            "imagen": "Dos ciudades opuestas lado a lado",
            "ejemplo": [
              "In contrast, rural areas have fewer services.",
              "En contraste, las zonas rurales tienen menos servicios."
            ]
          },
          {
            "en": "Hence",
            "es": "de ahí que / por ende",
            "imagen": "Diagrama con una flecha de conclusión",
            "ejemplo": [
              "The roads were closed; hence the delay.",
              "Las carreteras estaban cerradas; de ahí el retraso."
            ]
          },
          {
            "en": "Notably",
            "es": "en particular / notablemente",
            "imagen": "Gráfica con un punto destacado",
            "ejemplo": [
              "Several countries, notably Brazil and Mexico, increased exports.",
              "Varios países, en particular Brasil y México, aumentaron sus exportaciones."
            ]
          },
          {
            "en": "On the whole",
            "es": "en general",
            "imagen": "Persona evaluando un informe con aprobación",
            "ejemplo": [
              "On the whole, the results were positive.",
              "En general, los resultados fueron positivos."
            ]
          },
          {
            "en": "Thus",
            "es": "así / por lo tanto",
            "imagen": "Ecuación con un resultado final",
            "ejemplo": [
              "The costs were reduced, thus increasing profits.",
              "Se redujeron los costos, aumentando así las ganancias."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Anyway, as I was saying, the meeting is on Monday.",
        "es": "En fin, como te decía, la junta es el lunes."
      },
      {
        "en": "By the way, did you call your mother?",
        "es": "Por cierto, ¿le llamaste a tu mamá?"
      },
      {
        "en": "Actually, I'm not from Monterrey. I'm from Saltillo.",
        "es": "En realidad no soy de Monterrey. Soy de Saltillo."
      },
      {
        "en": "In other words, we need to start again.",
        "es": "En otras palabras, tenemos que empezar de nuevo."
      },
      {
        "en": "Admittedly, the plan has some weaknesses.",
        "es": "Hay que admitir que el plan tiene algunas debilidades."
      },
      {
        "en": "Needless to say, we were very happy.",
        "es": "Está de más decir que estábamos muy felices."
      },
      {
        "en": "Sales fell. Consequently, the company closed two stores.",
        "es": "Las ventas bajaron. En consecuencia, la empresa cerró dos tiendas."
      },
      {
        "en": "The food was great. Mind you, it was expensive.",
        "es": "La comida estaba buenísima. Eso sí, estaba cara."
      },
      {
        "en": "Come to think of it, I haven't seen her for weeks.",
        "es": "Ahora que lo pienso, no la he visto en semanas."
      },
      {
        "en": "The roads were closed; hence the delay.",
        "es": "Las carreteras estaban cerradas; de ahí el retraso."
      }
    ],
    "frases": [
      {
        "en": "I've been working on this project for months. Anyway, that's not why I called you.",
        "es": "Llevo meses trabajando en este proyecto. En fin, no es por eso que te llamé.",
        "imagen": "Persona hablando por teléfono mientras camina por la oficina"
      },
      {
        "en": "Many people think that Mexico City is dangerous. Actually, some neighborhoods are safer than many cities in the United States.",
        "es": "Mucha gente cree que la Ciudad de México es peligrosa. En realidad, algunas colonias son más seguras que muchas ciudades de Estados Unidos.",
        "imagen": "Colonia tranquila con familias paseando en un parque"
      },
      {
        "en": "The company lost its biggest client. Consequently, fifty employees were laid off.",
        "es": "La empresa perdió a su cliente más grande. En consecuencia, despidieron a cincuenta empleados.",
        "imagen": "Empleados saliendo con cajas de una oficina"
      },
      {
        "en": "Admittedly, the new system is difficult to use at first. Nevertheless, it saves a lot of time in the long run.",
        "es": "Hay que admitir que el nuevo sistema es difícil de usar al principio. No obstante, ahorra mucho tiempo a largo plazo.",
        "imagen": "Persona aprendiendo a usar un programa nuevo"
      },
      {
        "en": "By the way, speaking of trips, have you decided where to go this summer?",
        "es": "Por cierto, hablando de viajes, ¿ya decidiste a dónde ir este verano?",
        "imagen": "Amigas planeando un viaje en un café"
      },
      {
        "en": "In big cities, people often live alone; conversely, in small towns, extended families tend to live together.",
        "es": "En las ciudades grandes la gente suele vivir sola; en cambio, en los pueblos las familias extensas suelen vivir juntas.",
        "imagen": "Contraste entre un departamento pequeño y una casa familiar grande"
      },
      {
        "en": "With regard to the complaints we received last month, we have taken several measures.",
        "es": "Con respecto a las quejas que recibimos el mes pasado, hemos tomado varias medidas.",
        "imagen": "Gerente presentando un plan de mejora"
      },
      {
        "en": "To be honest, I don't think we're ready to launch the product yet. In other words, we need more time.",
        "es": "Para ser honesto, no creo que estemos listos para lanzar el producto. En otras palabras, necesitamos más tiempo.",
        "imagen": "Equipo revisando un prototipo con dudas"
      },
      {
        "en": "Needless to say, after walking for ten hours, we slept like babies.",
        "es": "Está de más decir que, después de caminar diez horas, dormimos como bebés.",
        "imagen": "Excursionistas dormidos en sus casas de campaña"
      },
      {
        "en": "Ultimately, the success of the project will depend on the commitment of the whole team.",
        "es": "En última instancia, el éxito del proyecto dependerá del compromiso de todo el equipo.",
        "imagen": "Equipo unido con las manos juntas"
      }
    ],
    "listening": [
      {
        "audio": "By the way, I saw your sister at the supermarket yesterday.",
        "pregunta": "¿A quién vio en el súper?",
        "opciones": [
          "A su hermana",
          "A su mamá",
          "A un amigo",
          "A su jefe"
        ]
      },
      {
        "audio": "Actually, the restaurant isn't Italian. It's Spanish.",
        "pregunta": "¿De qué tipo es el restaurante?",
        "opciones": [
          "Español",
          "Italiano",
          "Mexicano",
          "Francés"
        ]
      },
      {
        "audio": "The apartment was small. Mind you, the view was amazing.",
        "pregunta": "¿Qué tenía de bueno el departamento?",
        "opciones": [
          "La vista",
          "El tamaño",
          "El precio",
          "La ubicación"
        ]
      },
      {
        "audio": "It rained all week. Consequently, the harvest was much smaller than usual.",
        "pregunta": "¿Qué consecuencia tuvo la lluvia?",
        "opciones": [
          "La cosecha fue más pequeña",
          "La cosecha fue mayor",
          "No pasó nada",
          "Subieron los precios"
        ]
      },
      {
        "audio": "Come to think of it, I haven't paid the electricity bill.",
        "pregunta": "¿Qué recordó?",
        "opciones": [
          "Que no ha pagado la luz",
          "Que tiene una cita",
          "Que olvidó las llaves",
          "Que es su aniversario"
        ]
      }
    ],
    "lectura": {
      "titulo": "Working from home: a summary",
      "texto": "Over the past few years, working from home has become much more common in Mexico. Admittedly, not every job can be done remotely; doctors, factory workers and drivers, for instance, still need to be physically present. Nevertheless, for many office workers, remote work has changed daily life considerably. On the one hand, people save time and money on transport. In Mexico City, as a matter of fact, some workers used to spend more than three hours a day commuting. Consequently, many say they now have more time for their families and for exercise. On the other hand, working from home can be isolating, and some people find it difficult to separate their work from their personal life. In other words, the office is now in the living room, and it never closes. As for companies, many have reduced their costs by renting smaller offices. Ultimately, it seems that the future of work will be hybrid: that is to say, a combination of days at home and days at the office.",
      "preguntas": [
        {
          "pregunta": "¿Qué trabajos no se pueden hacer desde casa?",
          "opciones": [
            "Los de doctores, obreros y choferes",
            "Los de oficina",
            "Los de diseñadores",
            "Ninguno"
          ]
        },
        {
          "pregunta": "¿Cuánto tiempo hacían algunos trabajadores en traslados?",
          "opciones": [
            "Más de tres horas al día",
            "Media hora",
            "Una hora a la semana",
            "Diez minutos"
          ]
        },
        {
          "pregunta": "¿Cuál es una desventaja del trabajo en casa?",
          "opciones": [
            "Puede aislar y es difícil separar trabajo y vida personal",
            "Es más caro",
            "Se gana menos",
            "No hay internet"
          ]
        },
        {
          "pregunta": "¿Cómo parece que será el futuro del trabajo?",
          "opciones": [
            "Híbrido",
            "Solo en oficina",
            "Solo en casa",
            "Sin trabajo"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con el marcador.",
        "pregunta": "___ the way, have you seen my keys? (por cierto)",
        "respuestas": [
          "By"
        ]
      },
      {
        "instruccion": "Completa con el marcador.",
        "pregunta": "In other ___, we have to start again.",
        "respuestas": [
          "words"
        ]
      },
      {
        "instruccion": "Completa con el marcador.",
        "pregunta": "___ to say, we were delighted. (está de más decir)",
        "respuestas": [
          "Needless"
        ]
      },
      {
        "instruccion": "Completa con actually o currently.",
        "pregunta": "I ___ live in Puebla, but I was born in Veracruz. (actualmente)",
        "respuestas": [
          "currently"
        ]
      },
      {
        "instruccion": "Completa con actually o currently.",
        "pregunta": "I thought it was easy, but ___ it was very hard. (en realidad)",
        "respuestas": [
          "actually",
          "in fact"
        ]
      },
      {
        "instruccion": "Completa con el marcador formal.",
        "pregunta": "Sales dropped. ___, two stores closed. (en consecuencia)",
        "respuestas": [
          "Consequently",
          "As a result",
          "Therefore"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "en fin",
        "respuestas": [
          "anyway"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "ahora que lo pienso",
        "respuestas": [
          "come to think of it",
          "now that I think about it"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "con respecto a",
        "respuestas": [
          "with regard to",
          "regarding",
          "with respect to",
          "as for",
          "as regards"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "Actually I live in Lima. (quieres decir: actualmente)",
        "respuestas": [
          "Currently I live in Lima",
          "I currently live in Lima",
          "Nowadays I live in Lima",
          "At the moment I live in Lima"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "___, as I was saying, the project is almost finished.",
        "opciones": [
          "Anyway",
          "Actually",
          "Hence",
          "Conversely"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Actually» significa:",
        "opciones": [
          "En realidad / de hecho",
          "Actualmente",
          "Eventualmente",
          "Finalmente"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The bridge was closed; ___ the long delay.",
        "opciones": [
          "hence",
          "anyway",
          "by the way",
          "mind you"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___, the plan is not perfect, but it's the best we have.",
        "opciones": [
          "Admittedly",
          "Consequently",
          "Conversely",
          "Thus"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Eventually» significa:",
        "opciones": [
          "Finalmente / con el tiempo",
          "Eventualmente / a veces",
          "De vez en cuando",
          "Nunca"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Para cambiar de tema en una conversación:",
        "opciones": [
          "By the way…",
          "Consequently…",
          "Hence…",
          "Thus…"
        ]
      },
      {
        "tipo": "listening",
        "audio": "To be honest, I'd rather stay at home tonight. I'm exhausted.",
        "pregunta": "¿Qué prefiere?",
        "opciones": [
          "Quedarse en casa",
          "Salir",
          "Ir al cine",
          "Trabajar"
        ]
      },
      {
        "tipo": "listening",
        "audio": "As for the new manager, nobody has met her yet.",
        "pregunta": "¿Qué se dice de la nueva gerente?",
        "opciones": [
          "Nadie la conoce todavía",
          "Es muy estricta",
          "Ya renunció",
          "Es muy amable"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: por cierto",
        "respuestas": [
          "by the way"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: en otras palabras",
        "respuestas": [
          "in other words"
        ]
      }
    ]
  },
  {
    "id": "c1-16",
    "num": 16,
    "titulo": "Nominalización",
    "contexto": "Escritura formal y académica",
    "explicacion": {
      "es": [
        "La **nominalización** consiste en convertir **verbos o adjetivos en sustantivos**. Es típica del inglés **formal y académico**, porque hace el texto más **objetivo, conciso e impersonal**: *The government decided to… → **The government's decision** to…*",
        "Sufijos comunes para hacer sustantivos de **verbos**: ***-tion / -sion*** (*decide → decision, reduce → reduction*), ***-ment*** (*develop → development*), ***-ance / -ence*** (*perform → performance, exist → existence*), ***-al*** (*arrive → arrival, refuse → refusal*).",
        "De **adjetivos**: ***-ness*** (*aware → awareness, happy → happiness*), ***-ity*** (*possible → possibility, available → availability*), ***-ance / -ence*** (*important → importance, independent → independence*).",
        "Compara: *Prices **increased** rapidly, which **worried** consumers.* (estilo verbal, informal) → ***The rapid increase** in prices **caused concern** among consumers.* (estilo nominal, formal)"
      ],
      "tabla": {
        "columnas": [
          "Estilo verbal",
          "Estilo nominal (formal)"
        ],
        "filas": [
          [
            "They arrived late, so the meeting was delayed.",
            "Their late arrival delayed the meeting."
          ],
          [
            "The company is developing quickly.",
            "The company's rapid development…"
          ],
          [
            "People are not aware of the problem.",
            "There is a lack of awareness of the problem."
          ],
          [
            "We analyzed the data carefully.",
            "A careful analysis of the data…"
          ],
          [
            "If the product is available…",
            "The availability of the product…"
          ]
        ]
      },
      "ojo": [
        "No abuses: demasiada nominalización hace el texto **pesado**. En conversación, usa **verbos**.",
        "Muchas nominalizaciones van con **preposiciones fijas**: ***an increase in***, ***a decrease in***, ***a decision to***, ***the importance of***, ***an improvement in***, ***a lack of***.",
        "Los adjetivos se convierten en **adverbios** antes de un verbo, y en **adjetivos** antes de un sustantivo: *prices **rose rapidly*** → *a **rapid rise** in prices*.",
        "Verbos que acompañan a sustantivos: ***make a decision, carry out an analysis, reach an agreement, cause concern, take into consideration***.",
        "Algunos sustantivos tienen la misma forma que el verbo: *increase, decrease, change, rise, fall, demand, use, report*."
      ],
      "en": [
        "Nominalization turns verbs and adjectives into nouns, which is typical of formal and academic English.",
        "Decide becomes decision, develop becomes development, aware becomes awareness.",
        "Prices increased rapidly, which worried consumers, becomes: the rapid increase in prices caused concern among consumers.",
        "Use common phrases like an increase in, a lack of, the importance of."
      ]
    },
    "vocabulario": [
      {
        "en": "decide, decision",
        "es": "decidir, decisión",
        "imagen": "Persona firmando un documento importante",
        "ejemplo": [
          "The board's decision surprised everyone.",
          "La decisión del consejo sorprendió a todos."
        ]
      },
      {
        "en": "develop, development",
        "es": "desarrollar, desarrollo",
        "imagen": "Ciudad moderna creciendo con grúas",
        "ejemplo": [
          "The development of the region took twenty years.",
          "El desarrollo de la región tomó veinte años."
        ]
      },
      {
        "en": "reduce, reduction",
        "es": "reducir, reducción",
        "imagen": "Gráfica bajando con un signo de menos",
        "ejemplo": [
          "There has been a reduction in crime.",
          "Ha habido una reducción en la delincuencia."
        ]
      },
      {
        "en": "increase, an increase in",
        "es": "aumentar, un aumento de",
        "imagen": "Gráfica con una flecha subiendo",
        "ejemplo": [
          "There was a sharp increase in prices.",
          "Hubo un fuerte aumento de precios."
        ]
      },
      {
        "en": "arrive, arrival",
        "es": "llegar, llegada",
        "imagen": "Avión aterrizando en la pista",
        "ejemplo": [
          "The arrival of the flight was delayed.",
          "La llegada del vuelo se retrasó."
        ]
      },
      {
        "en": "aware, awareness",
        "es": "consciente, conciencia",
        "imagen": "Campaña informativa en una plaza",
        "ejemplo": [
          "We need to raise awareness of climate change.",
          "Necesitamos crear conciencia sobre el cambio climático."
        ]
      },
      {
        "en": "important, importance",
        "es": "importante, importancia",
        "imagen": "Persona señalando un punto clave",
        "ejemplo": [
          "Nobody doubts the importance of education.",
          "Nadie duda de la importancia de la educación."
        ]
      },
      {
        "en": "possible, possibility",
        "es": "posible, posibilidad",
        "imagen": "Puerta entreabierta con luz",
        "ejemplo": [
          "There is a possibility that the event will be canceled.",
          "Existe la posibilidad de que se cancele el evento."
        ]
      },
      {
        "en": "available, availability",
        "es": "disponible, disponibilidad",
        "imagen": "Estantes con productos en un almacén",
        "ejemplo": [
          "The availability of the product depends on the region.",
          "La disponibilidad del producto depende de la región."
        ]
      },
      {
        "en": "analyze, analysis",
        "es": "analizar, análisis",
        "imagen": "Científico revisando datos en pantallas",
        "ejemplo": [
          "A careful analysis of the data is needed.",
          "Se necesita un análisis cuidadoso de los datos."
        ]
      },
      {
        "en": "improve, improvement",
        "es": "mejorar, mejora",
        "imagen": "Gráfica con una línea en ascenso",
        "ejemplo": [
          "There has been a clear improvement in the results.",
          "Ha habido una clara mejora en los resultados."
        ]
      },
      {
        "en": "fail, failure",
        "es": "fracasar, fracaso",
        "imagen": "Proyecto abandonado en una oficina vacía",
        "ejemplo": [
          "The failure of the project was a surprise.",
          "El fracaso del proyecto fue una sorpresa."
        ]
      },
      {
        "en": "refuse, refusal",
        "es": "negarse, negativa",
        "imagen": "Persona rechazando con la mano un contrato",
        "ejemplo": [
          "Her refusal to sign the contract caused problems.",
          "Su negativa a firmar el contrato causó problemas."
        ]
      },
      {
        "en": "lack",
        "es": "falta / carecer",
        "imagen": "Estantes vacíos en una tienda",
        "ejemplo": [
          "The lack of rain has affected the crops.",
          "La falta de lluvia ha afectado los cultivos."
        ]
      },
      {
        "en": "grow, growth",
        "es": "crecer, crecimiento",
        "imagen": "Planta creciendo en etapas",
        "ejemplo": [
          "The economy showed strong growth last year.",
          "La economía mostró un fuerte crecimiento el año pasado."
        ]
      },
      {
        "en": "independent, independence",
        "es": "independiente, independencia",
        "imagen": "Bandera mexicana ondeando",
        "ejemplo": [
          "Mexico celebrates its independence on September sixteenth.",
          "México celebra su independencia el dieciséis de septiembre."
        ]
      }
    ],
    "grupos": [
      {
        "id": "sufijos",
        "titulo": "Sufijos para formar sustantivos",
        "icono": "🔤",
        "patron": [
          "explanation",
          "agreement",
          "kindness"
        ],
        "palabras": [
          {
            "en": "explain, explanation",
            "es": "explicar, explicación",
            "imagen": "Maestra explicando frente a un pizarrón",
            "ejemplo": [
              "Her explanation was very clear.",
              "Su explicación fue muy clara."
            ]
          },
          {
            "en": "agree, agreement",
            "es": "acordar, acuerdo",
            "imagen": "Dos personas estrechando la mano",
            "ejemplo": [
              "Both sides reached an agreement.",
              "Ambas partes llegaron a un acuerdo."
            ]
          },
          {
            "en": "kind, kindness",
            "es": "amable, amabilidad",
            "imagen": "Vecino ayudando a una anciana",
            "ejemplo": [
              "Thank you for your kindness.",
              "Gracias por tu amabilidad."
            ]
          },
          {
            "en": "responsible, responsibility",
            "es": "responsable, responsabilidad",
            "imagen": "Persona con muchas tareas en una lista",
            "ejemplo": [
              "It's our responsibility to protect the environment.",
              "Es nuestra responsabilidad proteger el medio ambiente."
            ]
          },
          {
            "en": "perform, performance",
            "es": "desempeñar, desempeño",
            "imagen": "Atleta en plena competencia",
            "ejemplo": [
              "The team's performance was excellent.",
              "El desempeño del equipo fue excelente."
            ]
          },
          {
            "en": "pollute, pollution",
            "es": "contaminar, contaminación",
            "imagen": "Ciudad con smog",
            "ejemplo": [
              "Air pollution is a serious problem.",
              "La contaminación del aire es un problema grave."
            ]
          }
        ]
      },
      {
        "id": "colocaciones",
        "titulo": "Verbo + sustantivo formal",
        "icono": "🧩",
        "patron": [
          "make a decision",
          "carry out research",
          "reach an agreement"
        ],
        "palabras": [
          {
            "en": "make a decision",
            "es": "tomar una decisión",
            "imagen": "Ejecutivos reunidos en una sala",
            "ejemplo": [
              "The committee will make a decision next week.",
              "El comité tomará una decisión la próxima semana."
            ]
          },
          {
            "en": "carry out research",
            "es": "llevar a cabo una investigación",
            "imagen": "Investigadores en un laboratorio",
            "ejemplo": [
              "They carried out research on sleep and memory.",
              "Llevaron a cabo una investigación sobre el sueño y la memoria."
            ]
          },
          {
            "en": "reach an agreement",
            "es": "llegar a un acuerdo",
            "imagen": "Negociadores estrechando la mano",
            "ejemplo": [
              "The two countries reached an agreement.",
              "Los dos países llegaron a un acuerdo."
            ]
          },
          {
            "en": "cause concern",
            "es": "causar preocupación",
            "imagen": "Personas preocupadas leyendo noticias",
            "ejemplo": [
              "The rise in prices has caused concern.",
              "El aumento de precios ha causado preocupación."
            ]
          },
          {
            "en": "take into consideration",
            "es": "tomar en cuenta",
            "imagen": "Persona revisando varios factores",
            "ejemplo": [
              "We must take the costs into consideration.",
              "Debemos tomar en cuenta los costos."
            ]
          },
          {
            "en": "make an improvement",
            "es": "hacer una mejora",
            "imagen": "Técnico mejorando una máquina",
            "ejemplo": [
              "We've made several improvements to the app.",
              "Hicimos varias mejoras a la app."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "The board's decision surprised everyone.",
        "es": "La decisión del consejo sorprendió a todos."
      },
      {
        "en": "There was a sharp increase in prices.",
        "es": "Hubo un fuerte aumento de precios."
      },
      {
        "en": "We need to raise awareness of climate change.",
        "es": "Necesitamos crear conciencia sobre el cambio climático."
      },
      {
        "en": "There is a possibility that the event will be canceled.",
        "es": "Existe la posibilidad de que se cancele el evento."
      },
      {
        "en": "A careful analysis of the data is needed.",
        "es": "Se necesita un análisis cuidadoso de los datos."
      },
      {
        "en": "The lack of rain has affected the crops.",
        "es": "La falta de lluvia ha afectado los cultivos."
      },
      {
        "en": "Her refusal to sign the contract caused problems.",
        "es": "Su negativa a firmar el contrato causó problemas."
      },
      {
        "en": "Both sides reached an agreement.",
        "es": "Ambas partes llegaron a un acuerdo."
      },
      {
        "en": "We must take the costs into consideration.",
        "es": "Debemos tomar en cuenta los costos."
      },
      {
        "en": "The economy showed strong growth last year.",
        "es": "La economía mostró un fuerte crecimiento el año pasado."
      }
    ],
    "frases": [
      {
        "en": "The rapid growth of the city has led to an increase in traffic and pollution.",
        "es": "El rápido crecimiento de la ciudad ha provocado un aumento del tráfico y la contaminación.",
        "imagen": "Ciudad en expansión con avenidas congestionadas"
      },
      {
        "en": "The government's decision to raise taxes caused widespread concern among small businesses.",
        "es": "La decisión del gobierno de subir los impuestos causó preocupación generalizada entre los pequeños negocios.",
        "imagen": "Dueños de pequeños negocios reunidos con preocupación"
      },
      {
        "en": "There has been a significant improvement in the quality of public education.",
        "es": "Ha habido una mejora significativa en la calidad de la educación pública.",
        "imagen": "Salón de clases moderno con estudiantes participando"
      },
      {
        "en": "The lack of affordable housing is one of the main problems in large cities.",
        "es": "La falta de vivienda accesible es uno de los principales problemas de las grandes ciudades.",
        "imagen": "Edificios de departamentos caros en una ciudad"
      },
      {
        "en": "The arrival of new technology has transformed the way we work and communicate.",
        "es": "La llegada de nuevas tecnologías ha transformado nuestra forma de trabajar y comunicarnos.",
        "imagen": "Oficina moderna con personas usando tecnología"
      },
      {
        "en": "A detailed analysis of the results revealed several important differences between the two groups.",
        "es": "Un análisis detallado de los resultados reveló varias diferencias importantes entre los dos grupos.",
        "imagen": "Investigadores comparando dos gráficas"
      },
      {
        "en": "The importance of a good night's sleep is often underestimated.",
        "es": "La importancia de dormir bien suele subestimarse.",
        "imagen": "Persona durmiendo plácidamente"
      },
      {
        "en": "His refusal to cooperate with the investigation raised many questions.",
        "es": "Su negativa a cooperar con la investigación generó muchas preguntas.",
        "imagen": "Hombre negándose a hablar frente a periodistas"
      },
      {
        "en": "Raising awareness of mental health is essential for reducing discrimination.",
        "es": "Crear conciencia sobre la salud mental es esencial para reducir la discriminación.",
        "imagen": "Campaña sobre salud mental en una escuela"
      },
      {
        "en": "The failure of the negotiations means that the strike will continue.",
        "es": "El fracaso de las negociaciones significa que la huelga continuará.",
        "imagen": "Trabajadores en huelga frente a una fábrica"
      }
    ],
    "listening": [
      {
        "audio": "There has been a sharp increase in the price of tortillas this year.",
        "pregunta": "¿Qué ha aumentado?",
        "opciones": [
          "El precio de las tortillas",
          "El precio de la gasolina",
          "Los sueldos",
          "La renta"
        ]
      },
      {
        "audio": "The lack of communication between departments caused serious delays.",
        "pregunta": "¿Qué causó retrasos?",
        "opciones": [
          "La falta de comunicación",
          "El mal clima",
          "La falta de dinero",
          "Una huelga"
        ]
      },
      {
        "audio": "After a long discussion, both companies reached an agreement.",
        "pregunta": "¿Qué pasó al final?",
        "opciones": [
          "Llegaron a un acuerdo",
          "Se pelearon",
          "Cancelaron todo",
          "Siguieron discutiendo"
        ]
      },
      {
        "audio": "The improvement in his English was amazing after six months in Canada.",
        "pregunta": "¿Qué mejoró?",
        "opciones": [
          "Su inglés",
          "Su salud",
          "Su sueldo",
          "Su francés"
        ]
      },
      {
        "audio": "The availability of the product varies from one store to another.",
        "pregunta": "¿Qué varía entre tiendas?",
        "opciones": [
          "La disponibilidad del producto",
          "El precio",
          "La calidad",
          "El color"
        ]
      }
    ],
    "lectura": {
      "titulo": "Water scarcity in northern Mexico",
      "texto": "In recent years, the scarcity of water has become one of the most serious challenges in northern Mexico. The rapid growth of cities such as Monterrey, combined with a significant decrease in rainfall, has put enormous pressure on water supplies. In 2022, the situation reached a critical point, with the temporary suspension of water service in many neighborhoods. The lack of investment in infrastructure and the excessive use of water by some industries have been identified as key factors. Experts recommend a reduction in water consumption, the improvement of the pipe network, and the construction of new reservoirs. Furthermore, they emphasize the importance of raising awareness among citizens: small changes in daily habits, such as shorter showers and the repair of leaks, can make a significant difference. The authorities have announced the development of a long-term plan, although its implementation will require cooperation between the government, companies and the population.",
      "preguntas": [
        {
          "pregunta": "¿Cuál es el problema principal descrito?",
          "opciones": [
            "La escasez de agua en el norte de México",
            "La contaminación del aire",
            "El tráfico",
            "La falta de empleos"
          ]
        },
        {
          "pregunta": "¿Qué pasó en 2022?",
          "opciones": [
            "Se suspendió temporalmente el servicio de agua en muchas colonias",
            "Llovió mucho",
            "Se construyó una presa",
            "Se cerraron las industrias"
          ]
        },
        {
          "pregunta": "¿Qué recomiendan los expertos?",
          "opciones": [
            "Reducir el consumo, mejorar las tuberías y construir presas",
            "Mudarse al sur",
            "Comprar agua embotellada",
            "Nada"
          ]
        },
        {
          "pregunta": "¿Qué requerirá la aplicación del plan?",
          "opciones": [
            "Cooperación entre gobierno, empresas y población",
            "Mucho dinero extranjero",
            "Solo al gobierno",
            "Diez años"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Escribe el sustantivo.",
        "pregunta": "decide → ___",
        "respuestas": [
          "decision"
        ]
      },
      {
        "instruccion": "Escribe el sustantivo.",
        "pregunta": "develop → ___",
        "respuestas": [
          "development"
        ]
      },
      {
        "instruccion": "Escribe el sustantivo.",
        "pregunta": "aware → ___",
        "respuestas": [
          "awareness"
        ]
      },
      {
        "instruccion": "Escribe el sustantivo.",
        "pregunta": "possible → ___",
        "respuestas": [
          "possibility"
        ]
      },
      {
        "instruccion": "Escribe el sustantivo.",
        "pregunta": "arrive → ___",
        "respuestas": [
          "arrival"
        ]
      },
      {
        "instruccion": "Completa con la preposición.",
        "pregunta": "There was an increase ___ unemployment.",
        "respuestas": [
          "in"
        ]
      },
      {
        "instruccion": "Completa con la preposición.",
        "pregunta": "We are worried about the lack ___ water.",
        "respuestas": [
          "of"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "llegar a un acuerdo",
        "respuestas": [
          "reach an agreement",
          "to reach an agreement",
          "come to an agreement"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "crear conciencia",
        "respuestas": [
          "raise awareness",
          "to raise awareness"
        ]
      },
      {
        "instruccion": "Reescribe en estilo nominal.",
        "pregunta": "Prices increased. → There was an ___ in prices.",
        "respuestas": [
          "increase"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "The ___ of the new hospital will take two years.",
        "opciones": [
          "construction",
          "construct",
          "constructive",
          "constructing of"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "There has been a ___ in crime this year.",
        "opciones": [
          "reduction",
          "reduce",
          "reductive",
          "reducing"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Thank you for your ___.",
        "opciones": [
          "kindness",
          "kind",
          "kindly",
          "kindity"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We must take this ___ consideration.",
        "opciones": [
          "into",
          "in",
          "to",
          "on"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es más formal?",
        "opciones": [
          "The rapid increase in prices caused concern.",
          "Prices went up fast and people got worried.",
          "Prices are going up, so people are worried.",
          "Wow, prices went up!"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«A lack of» significa:",
        "opciones": [
          "Una falta de",
          "Un lago de",
          "Mucho",
          "Un exceso de"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The government announced the development of a new national park in Chiapas.",
        "pregunta": "¿Qué anunció el gobierno?",
        "opciones": [
          "El desarrollo de un nuevo parque nacional",
          "Una carretera",
          "Un aeropuerto",
          "Un hospital"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Her refusal to accept the offer surprised everyone in the company.",
        "pregunta": "¿Qué sorprendió a todos?",
        "opciones": [
          "Que rechazó la oferta",
          "Que aceptó la oferta",
          "Que renunció",
          "Que la ascendieron"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: la importancia de la educación",
        "respuestas": [
          "the importance of education"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: un análisis cuidadoso",
        "respuestas": [
          "a careful analysis"
        ]
      }
    ]
  },
  {
    "id": "c1-17",
    "num": 17,
    "titulo": "Frases nominales complejas",
    "contexto": "Informes y descripciones",
    "explicacion": {
      "es": [
        "Una **frase nominal compleja** agrupa mucha información **alrededor de un sustantivo**. Es típica de **informes, noticias y textos técnicos**: *a **recently published** government **report on** youth unemployment*.",
        "**Antes** del sustantivo pueden ir: determinante + **adverbio + adjetivo** + **sustantivo que funciona como adjetivo** (*noun modifier*): *a **highly successful family** business* / *the **new city** council **building***. El sustantivo modificador va en **singular**: *a **ten-year** plan, a **three-day** trip*.",
        "**Después** del sustantivo pueden ir: **frases con preposición** (*a house **with a garden***), **participios** (*the people **living** here, the cars **made** in Mexico*), **infinitivos** (*the first person **to arrive***) y **oraciones de relativo** (*the book **that I lent you***).",
        "El orden de adjetivos sigue un patrón: **opinión → tamaño → edad → forma → color → origen → material → propósito**: *a **beautiful old Mexican wooden** table*."
      ],
      "tabla": {
        "columnas": [
          "Parte",
          "Ejemplo"
        ],
        "filas": [
          [
            "adverbio + adjetivo",
            "a highly qualified engineer"
          ],
          [
            "sustantivo + sustantivo",
            "a city council meeting"
          ],
          [
            "número + sustantivo singular",
            "a five-star restaurant, a two-hour delay"
          ],
          [
            "participio después",
            "the students taking the exam"
          ],
          [
            "infinitivo después",
            "the last person to leave"
          ],
          [
            "frase con preposición",
            "a report on climate change"
          ]
        ]
      },
      "ojo": [
        "Con números: *a ten-**year**-old boy* ✅ (no *ten-years-old* ❌), *a two-**hour** meeting* ✅.",
        "En español el orden suele ir **al revés**: *city council meeting* = **reunión del concejo municipal**. Lee las frases **de derecha a izquierda**.",
        "Los participios reducen oraciones de relativo: *the people **who live** here* → *the people **living** here*; *cars **which are made** in Mexico* → *cars **made** in Mexico*.",
        "Demasiados sustantivos seguidos confunden: *the city council road safety improvement plan* es correcto pero **difícil de leer**; a veces conviene usar *of*.",
        "Orden de adjetivos: *a **lovely little old** house* ✅ (no *an old little lovely house* ❌)."
      ],
      "en": [
        "A complex noun phrase groups a lot of information around a noun: a recently published government report on youth unemployment.",
        "Before the noun: a highly successful family business. A ten-year plan.",
        "After the noun: the people living here, the first person to arrive, a house with a garden.",
        "Adjective order: opinion, size, age, shape, color, origin, material, purpose."
      ]
    },
    "vocabulario": [
      {
        "en": "a highly qualified engineer",
        "es": "una ingeniera altamente calificada",
        "imagen": "Ingeniera con casco revisando planos",
        "ejemplo": [
          "The company hired a highly qualified engineer.",
          "La empresa contrató a una ingeniera altamente calificada."
        ]
      },
      {
        "en": "a family business",
        "es": "un negocio familiar",
        "imagen": "Panadería familiar con padres e hijos trabajando",
        "ejemplo": [
          "My grandparents started a small family business.",
          "Mis abuelos iniciaron un pequeño negocio familiar."
        ]
      },
      {
        "en": "a ten-year plan",
        "es": "un plan a diez años",
        "imagen": "Calendario con una línea de tiempo larga",
        "ejemplo": [
          "The city approved a ten-year plan for public transport.",
          "La ciudad aprobó un plan a diez años para el transporte público."
        ]
      },
      {
        "en": "a two-hour delay",
        "es": "un retraso de dos horas",
        "imagen": "Pantalla de aeropuerto con un vuelo demorado",
        "ejemplo": [
          "We had a two-hour delay at the airport.",
          "Tuvimos un retraso de dos horas en el aeropuerto."
        ]
      },
      {
        "en": "a five-star restaurant",
        "es": "un restaurante de cinco estrellas",
        "imagen": "Restaurante elegante con mesas iluminadas",
        "ejemplo": [
          "They celebrated their anniversary at a five-star restaurant.",
          "Celebraron su aniversario en un restaurante de cinco estrellas."
        ]
      },
      {
        "en": "the people living here",
        "es": "la gente que vive aquí",
        "imagen": "Vecinos platicando en una calle de colonia",
        "ejemplo": [
          "The people living here are very friendly.",
          "La gente que vive aquí es muy amable."
        ]
      },
      {
        "en": "cars made in Mexico",
        "es": "carros fabricados en México",
        "imagen": "Línea de producción de carros",
        "ejemplo": [
          "Many cars made in Mexico are exported to the United States.",
          "Muchos carros fabricados en México se exportan a Estados Unidos."
        ]
      },
      {
        "en": "the last person to leave",
        "es": "la última persona en salir",
        "imagen": "Persona apagando las luces de una oficina vacía",
        "ejemplo": [
          "The last person to leave must turn off the lights.",
          "La última persona en salir debe apagar las luces."
        ]
      },
      {
        "en": "a report on climate change",
        "es": "un informe sobre el cambio climático",
        "imagen": "Documento con gráficas del clima",
        "ejemplo": [
          "They published a report on climate change.",
          "Publicaron un informe sobre el cambio climático."
        ]
      },
      {
        "en": "a city council meeting",
        "es": "una reunión del concejo municipal",
        "imagen": "Funcionarios reunidos en una sala municipal",
        "ejemplo": [
          "The decision was made at a city council meeting.",
          "La decisión se tomó en una reunión del concejo municipal."
        ]
      },
      {
        "en": "a beautiful old wooden table",
        "es": "una hermosa mesa antigua de madera",
        "imagen": "Mesa de madera antigua en un comedor",
        "ejemplo": [
          "We bought a beautiful old wooden table at the market.",
          "Compramos una hermosa mesa antigua de madera en el mercado."
        ]
      },
      {
        "en": "a ten-year-old boy",
        "es": "un niño de diez años",
        "imagen": "Niño sonriendo con una mochila escolar",
        "ejemplo": [
          "A ten-year-old boy won the national chess competition.",
          "Un niño de diez años ganó el concurso nacional de ajedrez."
        ]
      },
      {
        "en": "recently published",
        "es": "publicado recientemente",
        "imagen": "Libro nuevo en el aparador de una librería",
        "ejemplo": [
          "It's a recently published novel by a young author.",
          "Es una novela publicada recientemente por un joven autor."
        ]
      },
      {
        "en": "the students taking the exam",
        "es": "los estudiantes que presentan el examen",
        "imagen": "Estudiantes concentrados en un examen",
        "ejemplo": [
          "The students taking the exam must turn off their phones.",
          "Los estudiantes que presentan el examen deben apagar sus celulares."
        ]
      },
      {
        "en": "a house with a large garden",
        "es": "una casa con un jardín grande",
        "imagen": "Casa con un jardín amplio y árboles",
        "ejemplo": [
          "They live in a house with a large garden.",
          "Viven en una casa con un jardín grande."
        ]
      },
      {
        "en": "a widely used method",
        "es": "un método muy utilizado",
        "imagen": "Personas usando el mismo programa en computadoras",
        "ejemplo": [
          "It is a widely used method in schools.",
          "Es un método muy utilizado en las escuelas."
        ]
      }
    ],
    "grupos": [
      {
        "id": "compuestos",
        "titulo": "Sustantivo + sustantivo",
        "icono": "🧱",
        "patron": [
          "a bus stop",
          "a job interview",
          "a safety rule"
        ],
        "palabras": [
          {
            "en": "a job interview",
            "es": "una entrevista de trabajo",
            "imagen": "Candidata frente a un panel de entrevistadores",
            "ejemplo": [
              "I have a job interview tomorrow.",
              "Mañana tengo una entrevista de trabajo."
            ]
          },
          {
            "en": "a safety rule",
            "es": "una norma de seguridad",
            "imagen": "Trabajador con casco frente a una señal",
            "ejemplo": [
              "Wearing a helmet is a basic safety rule.",
              "Usar casco es una norma de seguridad básica."
            ]
          },
          {
            "en": "a price increase",
            "es": "un aumento de precio",
            "imagen": "Etiqueta con precio subiendo",
            "ejemplo": [
              "Customers complained about the price increase.",
              "Los clientes se quejaron del aumento de precio."
            ]
          },
          {
            "en": "a train station",
            "es": "una estación de tren",
            "imagen": "Estación de tren con andenes",
            "ejemplo": [
              "Let's meet at the train station.",
              "Veámonos en la estación de tren."
            ]
          },
          {
            "en": "a customer service team",
            "es": "un equipo de atención al cliente",
            "imagen": "Agentes con audífonos en una oficina",
            "ejemplo": [
              "The customer service team works twenty-four hours a day.",
              "El equipo de atención al cliente trabaja las veinticuatro horas."
            ]
          },
          {
            "en": "a water shortage",
            "es": "una escasez de agua",
            "imagen": "Personas haciendo fila con cubetas",
            "ejemplo": [
              "The city is facing a serious water shortage.",
              "La ciudad enfrenta una grave escasez de agua."
            ]
          }
        ]
      },
      {
        "id": "orden",
        "titulo": "Orden de los adjetivos",
        "icono": "📐",
        "patron": [
          "a lovely little house",
          "an old Italian car",
          "a big black leather bag"
        ],
        "palabras": [
          {
            "en": "a lovely little house",
            "es": "una casita encantadora",
            "imagen": "Casita colorida con flores en las ventanas",
            "ejemplo": [
              "They live in a lovely little house near the beach.",
              "Viven en una casita encantadora cerca de la playa."
            ]
          },
          {
            "en": "an old Italian car",
            "es": "un carro italiano viejo",
            "imagen": "Carro clásico italiano estacionado",
            "ejemplo": [
              "My uncle drives an old Italian car.",
              "Mi tío maneja un carro italiano viejo."
            ]
          },
          {
            "en": "a big black leather bag",
            "es": "una bolsa grande de piel negra",
            "imagen": "Bolsa de piel negra sobre una silla",
            "ejemplo": [
              "She was carrying a big black leather bag.",
              "Llevaba una bolsa grande de piel negra."
            ]
          },
          {
            "en": "a round wooden table",
            "es": "una mesa redonda de madera",
            "imagen": "Mesa redonda de madera con sillas",
            "ejemplo": [
              "We need a round wooden table for the kitchen.",
              "Necesitamos una mesa redonda de madera para la cocina."
            ]
          },
          {
            "en": "a delicious Mexican breakfast",
            "es": "un delicioso desayuno mexicano",
            "imagen": "Plato de chilaquiles con frijoles y café",
            "ejemplo": [
              "We had a delicious Mexican breakfast.",
              "Tomamos un delicioso desayuno mexicano."
            ]
          },
          {
            "en": "a small blue plastic box",
            "es": "una caja pequeña de plástico azul",
            "imagen": "Cajita azul de plástico sobre un escritorio",
            "ejemplo": [
              "The keys are in a small blue plastic box.",
              "Las llaves están en una cajita azul de plástico."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "The company hired a highly qualified engineer.",
        "es": "La empresa contrató a una ingeniera altamente calificada."
      },
      {
        "en": "My grandparents started a small family business.",
        "es": "Mis abuelos iniciaron un pequeño negocio familiar."
      },
      {
        "en": "We had a two-hour delay at the airport.",
        "es": "Tuvimos un retraso de dos horas en el aeropuerto."
      },
      {
        "en": "The people living here are very friendly.",
        "es": "La gente que vive aquí es muy amable."
      },
      {
        "en": "The last person to leave must turn off the lights.",
        "es": "La última persona en salir debe apagar las luces."
      },
      {
        "en": "A ten-year-old boy won the national chess competition.",
        "es": "Un niño de diez años ganó el concurso nacional de ajedrez."
      },
      {
        "en": "We bought a beautiful old wooden table at the market.",
        "es": "Compramos una hermosa mesa antigua de madera en el mercado."
      },
      {
        "en": "I have a job interview tomorrow.",
        "es": "Mañana tengo una entrevista de trabajo."
      },
      {
        "en": "The city is facing a serious water shortage.",
        "es": "La ciudad enfrenta una grave escasez de agua."
      },
      {
        "en": "She was carrying a big black leather bag.",
        "es": "Llevaba una bolsa grande de piel negra."
      }
    ],
    "frases": [
      {
        "en": "A recently published government report on youth unemployment shows a worrying increase in rural areas.",
        "es": "Un informe del gobierno publicado recientemente sobre el desempleo juvenil muestra un aumento preocupante en las zonas rurales.",
        "imagen": "Joven buscando empleo en un pueblo"
      },
      {
        "en": "The students taking part in the exchange program will spend six months at a university in Canada.",
        "es": "Los estudiantes que participan en el programa de intercambio pasarán seis meses en una universidad de Canadá.",
        "imagen": "Estudiantes con maletas frente a una universidad canadiense"
      },
      {
        "en": "We stayed in a charming little colonial house with a beautiful garden full of flowers.",
        "es": "Nos quedamos en una encantadora casita colonial con un hermoso jardín lleno de flores.",
        "imagen": "Casa colonial con un patio lleno de flores"
      },
      {
        "en": "The first woman to win the prize was a young scientist from Guadalajara.",
        "es": "La primera mujer en ganar el premio fue una joven científica de Guadalajara.",
        "imagen": "Científica recibiendo un premio en un escenario"
      },
      {
        "en": "Products made in this factory are sold in more than thirty countries.",
        "es": "Los productos fabricados en esta planta se venden en más de treinta países.",
        "imagen": "Cajas de productos en una bodega lista para exportar"
      },
      {
        "en": "The city council approved a five-year plan to improve public parks.",
        "es": "El concejo municipal aprobó un plan a cinco años para mejorar los parques públicos.",
        "imagen": "Parque renovado con familias y áreas verdes"
      },
      {
        "en": "There was a three-kilometer traffic jam on the highway after the accident.",
        "es": "Hubo un embotellamiento de tres kilómetros en la carretera después del accidente.",
        "imagen": "Fila larga de carros en una carretera"
      },
      {
        "en": "The people affected by the floods are receiving help from volunteers.",
        "es": "Las personas afectadas por las inundaciones están recibiendo ayuda de voluntarios.",
        "imagen": "Voluntarios repartiendo comida en una zona inundada"
      },
      {
        "en": "She bought a stunning handmade Oaxacan wool rug for her living room.",
        "es": "Compró un impresionante tapete de lana oaxaqueño hecho a mano para su sala.",
        "imagen": "Tapete de lana colorido en el piso de una sala"
      },
      {
        "en": "It is a widely respected organization working to protect endangered species.",
        "es": "Es una organización muy respetada que trabaja para proteger especies en peligro.",
        "imagen": "Biólogos liberando una tortuga marina en la playa"
      }
    ],
    "listening": [
      {
        "audio": "There's a two-hour delay on all flights to Monterrey because of the fog.",
        "pregunta": "¿De cuánto es el retraso?",
        "opciones": [
          "Dos horas",
          "Media hora",
          "Una hora",
          "Cuatro horas"
        ]
      },
      {
        "audio": "The last person to leave the office must lock the door.",
        "pregunta": "¿Qué debe hacer la última persona?",
        "opciones": [
          "Cerrar la puerta con llave",
          "Apagar las computadoras",
          "Llamar al guardia",
          "Limpiar"
        ]
      },
      {
        "audio": "We're looking for a highly motivated sales manager with five years of experience.",
        "pregunta": "¿Cuánta experiencia piden?",
        "opciones": [
          "Cinco años",
          "Un año",
          "Diez años",
          "Ninguna"
        ]
      },
      {
        "audio": "A ten-year-old girl from Puebla has won the national spelling competition.",
        "pregunta": "¿Qué edad tiene la ganadora?",
        "opciones": [
          "Diez años",
          "Doce años",
          "Ocho años",
          "Quince años"
        ]
      },
      {
        "audio": "I bought a beautiful old leather jacket at the flea market.",
        "pregunta": "¿Qué compró?",
        "opciones": [
          "Una chamarra de piel vieja",
          "Una bolsa nueva",
          "Unos zapatos",
          "Un sombrero"
        ]
      }
    ],
    "lectura": {
      "titulo": "A new urban park",
      "texto": "The city council has approved an ambitious ten-year plan to transform a former industrial area into the largest urban park in the region. The project, designed by a highly respected team of Mexican architects, will include a three-kilometer cycling path, several sports fields, a children's playground and a small botanical garden containing more than two hundred native plant species. According to a recently published environmental report, the park could reduce the average temperature of the surrounding neighborhoods by up to two degrees. The people living near the site have welcomed the news, although some local business owners have expressed concern about the long construction period. The first stage, costing approximately three hundred million pesos, is expected to be completed within two years. The mayor described it as a once-in-a-generation opportunity to improve the quality of life of thousands of families.",
      "preguntas": [
        {
          "pregunta": "¿Qué se va a transformar en parque?",
          "opciones": [
            "Una antigua zona industrial",
            "Un aeropuerto",
            "Un estacionamiento",
            "Un bosque"
          ]
        },
        {
          "pregunta": "¿Cuánto mide la ciclovía?",
          "opciones": [
            "Tres kilómetros",
            "Diez kilómetros",
            "Dos kilómetros",
            "Un kilómetro"
          ]
        },
        {
          "pregunta": "¿Cuánto podría bajar la temperatura?",
          "opciones": [
            "Hasta dos grados",
            "Diez grados",
            "Medio grado",
            "Nada"
          ]
        },
        {
          "pregunta": "¿Quiénes expresaron preocupación?",
          "opciones": [
            "Algunos dueños de negocios locales",
            "Los vecinos",
            "Los arquitectos",
            "El alcalde"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con la forma correcta.",
        "pregunta": "It was a ten-___ trip. (year)",
        "respuestas": [
          "year"
        ]
      },
      {
        "instruccion": "Completa con la forma correcta.",
        "pregunta": "We had a two-___ meeting. (hour)",
        "respuestas": [
          "hour"
        ]
      },
      {
        "instruccion": "Completa con el participio.",
        "pregunta": "The people ___ (live) here are very kind.",
        "respuestas": [
          "living"
        ]
      },
      {
        "instruccion": "Completa con el participio.",
        "pregunta": "Cars ___ (make) in Mexico are exported.",
        "respuestas": [
          "made"
        ]
      },
      {
        "instruccion": "Completa con el infinitivo.",
        "pregunta": "She was the first woman ___ (win) the race.",
        "respuestas": [
          "to win"
        ]
      },
      {
        "instruccion": "Ordena los adjetivos.",
        "pregunta": "a (wooden / old / beautiful) table → a ___ table",
        "respuestas": [
          "beautiful old wooden"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "un niño de diez años",
        "respuestas": [
          "a ten-year-old boy",
          "a ten year old boy"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "una entrevista de trabajo",
        "respuestas": [
          "a job interview"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "la última persona en salir",
        "respuestas": [
          "the last person to leave"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "He is a ten-years-old boy.",
        "respuestas": [
          "He is a ten-year-old boy",
          "He's a ten-year-old boy"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "We went on a ___ trip to the mountains.",
        "opciones": [
          "three-day",
          "three-days",
          "three days'",
          "three-day's"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The students ___ the exam must stay quiet.",
        "opciones": [
          "taking",
          "taken",
          "to take",
          "took"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "He was the first person ___ the news.",
        "opciones": [
          "to hear",
          "hearing",
          "heard",
          "hear"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál tiene el orden correcto?",
        "opciones": [
          "a lovely small old house",
          "an old small lovely house",
          "a small old lovely house",
          "a house lovely small old"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«A city council meeting» significa:",
        "opciones": [
          "Una reunión del concejo municipal",
          "Un concejo de reuniones de la ciudad",
          "Una ciudad de reuniones",
          "Una reunión de ciudades"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "It's a ___ method.",
        "opciones": [
          "widely used",
          "wide using",
          "widely using",
          "used widely of"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The products sold in this store are all made by local artisans.",
        "pregunta": "¿Quién hace los productos?",
        "opciones": [
          "Artesanos locales",
          "Una fábrica china",
          "Una empresa extranjera",
          "Estudiantes"
        ]
      },
      {
        "tipo": "listening",
        "audio": "They live in a lovely little house with a garden full of fruit trees.",
        "pregunta": "¿Qué tiene el jardín?",
        "opciones": [
          "Árboles frutales",
          "Una alberca",
          "Flores",
          "Un huerto de verduras"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: un negocio familiar",
        "respuestas": [
          "a family business"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: un retraso de dos horas",
        "respuestas": [
          "a two-hour delay",
          "a two hour delay"
        ]
      }
    ]
  },
  {
    "id": "c1-18",
    "num": 18,
    "titulo": "Registro formal e informal",
    "contexto": "Correos, cartas y redes sociales",
    "explicacion": {
      "es": [
        "El **registro** es el nivel de **formalidad** del lenguaje. No es lo mismo escribirle a tu jefe que a tu mejor amigo. El registro **formal** se usa en documentos oficiales, correos de trabajo y con desconocidos; el **informal**, con amigos, familia y en redes sociales.",
        "El estilo **formal** usa: **frases completas**, **sin contracciones** (*I am, do not*), **vocabulario de origen latino** (*require, purchase, inform, assist*), **pasiva** y fórmulas fijas (*Dear Sir or Madam, I am writing to…, Yours sincerely*).",
        "El estilo **informal** usa: **contracciones** (*I'm, don't*), ***phrasal verbs*** (*find out, get, put off*), palabras cortas (*need, buy, tell, help*), preguntas directas, abreviaturas y expresiones coloquiales (*Hey! What's up? Cheers! See ya!*).",
        "Comparación: *We **regret to inform** you that your **application** has **not been successful**.* (formal) / *Sorry, **you didn't get** the job.* (informal). El error más común es **mezclar** registros en un mismo texto."
      ],
      "tabla": {
        "columnas": [
          "Formal",
          "Informal"
        ],
        "filas": [
          [
            "purchase",
            "buy"
          ],
          [
            "require",
            "need"
          ],
          [
            "inform",
            "tell"
          ],
          [
            "assist",
            "help"
          ],
          [
            "commence",
            "start"
          ],
          [
            "I would be grateful if you could…",
            "Could you…?"
          ],
          [
            "Yours sincerely / Kind regards",
            "Cheers / Take care / See you"
          ]
        ]
      },
      "ojo": [
        "***Dear Sir or Madam*** + ***Yours faithfully*** (no sabes el nombre). ***Dear Mr. López*** + ***Yours sincerely*** (sí lo sabes). En Estados Unidos es muy común ***Sincerely*** o ***Best regards***.",
        "En correos de trabajo **neutrales** (ni muy formales ni muy informales): ***Hi Ana, Thanks for your email. Best, Luis.***",
        "Evita en formal: ***gonna, wanna, kinda, stuff, things like that, a lot of*** (mejor *a great deal of, numerous*).",
        "En redes sociales se aceptan abreviaturas: ***BTW*** (by the way), ***ASAP***, ***FYI***, ***IMO*** (in my opinion), pero **nunca** en textos formales.",
        "El tono también importa: en formal se suaviza con ***would, could, might***: *Could you possibly…? I was wondering whether…*"
      ],
      "en": [
        "Register is the level of formality. Formal language is used in official documents and work emails; informal language with friends and on social media.",
        "Formal style uses full forms and words like require, purchase, inform.",
        "Informal style uses contractions, phrasal verbs and short words like need, buy, tell.",
        "We regret to inform you that your application has not been successful. Sorry, you didn't get the job."
      ]
    },
    "vocabulario": [
      {
        "en": "purchase, buy",
        "es": "adquirir, comprar",
        "imagen": "Persona pagando en una tienda",
        "ejemplo": [
          "You can purchase tickets online.",
          "Puede adquirir sus boletos en línea."
        ]
      },
      {
        "en": "require, need",
        "es": "requerir, necesitar",
        "imagen": "Formulario con campos obligatorios",
        "ejemplo": [
          "All applicants require a valid passport.",
          "Todos los solicitantes requieren un pasaporte vigente."
        ]
      },
      {
        "en": "inform, tell",
        "es": "informar, decir",
        "imagen": "Carta formal sobre un escritorio",
        "ejemplo": [
          "We will inform you of any changes.",
          "Le informaremos de cualquier cambio."
        ]
      },
      {
        "en": "assist, help",
        "es": "asistir, ayudar",
        "imagen": "Empleado ayudando a un cliente",
        "ejemplo": [
          "How may I assist you?",
          "¿En qué puedo ayudarle?"
        ]
      },
      {
        "en": "commence, start",
        "es": "comenzar, empezar",
        "imagen": "Ceremonia formal a punto de comenzar",
        "ejemplo": [
          "The ceremony will commence at ten o'clock.",
          "La ceremonia comenzará a las diez."
        ]
      },
      {
        "en": "Dear Sir or Madam",
        "es": "Estimado señor o señora",
        "imagen": "Carta formal con encabezado",
        "ejemplo": [
          "Dear Sir or Madam, I am writing to complain about…",
          "Estimado señor o señora: le escribo para quejarme de…"
        ]
      },
      {
        "en": "Yours sincerely",
        "es": "atentamente",
        "imagen": "Firma al final de una carta formal",
        "ejemplo": [
          "Yours sincerely, Ana Gómez.",
          "Atentamente, Ana Gómez."
        ]
      },
      {
        "en": "I am writing to",
        "es": "le escribo para",
        "imagen": "Persona redactando una carta en su escritorio",
        "ejemplo": [
          "I am writing to apply for the position of manager.",
          "Le escribo para solicitar el puesto de gerente."
        ]
      },
      {
        "en": "We regret to inform you",
        "es": "lamentamos informarle",
        "imagen": "Carta de rechazo sobre una mesa",
        "ejemplo": [
          "We regret to inform you that your application has not been successful.",
          "Lamentamos informarle que su solicitud no ha sido aceptada."
        ]
      },
      {
        "en": "Hey, what's up?",
        "es": "¡quiubo! / ¿qué onda?",
        "imagen": "Amigos saludándose en la calle",
        "ejemplo": [
          "Hey, what's up? Long time no see!",
          "¡Quiubo! ¡Cuánto tiempo sin verte!"
        ]
      },
      {
        "en": "Cheers!",
        "es": "¡gracias! / ¡salud!",
        "imagen": "Amigos brindando con vasos",
        "ejemplo": [
          "Thanks for the help. Cheers!",
          "Gracias por la ayuda. ¡Te pasas!"
        ]
      },
      {
        "en": "See ya!",
        "es": "¡nos vemos!",
        "imagen": "Amigo despidiéndose con la mano",
        "ejemplo": [
          "Gotta go. See ya!",
          "Me tengo que ir. ¡Nos vemos!"
        ]
      },
      {
        "en": "I would be grateful if",
        "es": "le agradecería que",
        "imagen": "Persona escribiendo un correo formal",
        "ejemplo": [
          "I would be grateful if you could send me the invoice.",
          "Le agradecería que me enviara la factura."
        ]
      },
      {
        "en": "Thanks a lot!",
        "es": "¡muchas gracias!",
        "imagen": "Persona sonriendo y agradeciendo",
        "ejemplo": [
          "Thanks a lot for the ride!",
          "¡Muchas gracias por el aventón!"
        ]
      },
      {
        "en": "Please do not hesitate to contact us",
        "es": "no dude en contactarnos",
        "imagen": "Agente de atención al cliente sonriendo",
        "ejemplo": [
          "Please do not hesitate to contact us if you have any questions.",
          "No dude en contactarnos si tiene alguna pregunta."
        ]
      },
      {
        "en": "Let me know",
        "es": "avísame",
        "imagen": "Persona escribiendo un mensaje en el celular",
        "ejemplo": [
          "Let me know if you need anything.",
          "Avísame si necesitas algo."
        ]
      }
    ],
    "grupos": [
      {
        "id": "correos",
        "titulo": "Correos de trabajo",
        "icono": "📧",
        "patron": [
          "Dear…",
          "I look forward to…",
          "Kind regards"
        ],
        "palabras": [
          {
            "en": "Further to our conversation",
            "es": "en relación con nuestra conversación",
            "imagen": "Persona escribiendo un correo después de una llamada",
            "ejemplo": [
              "Further to our conversation, I attach the report.",
              "En relación con nuestra conversación, adjunto el reporte."
            ]
          },
          {
            "en": "Please find attached",
            "es": "adjunto encontrará",
            "imagen": "Clip con documentos",
            "ejemplo": [
              "Please find attached the invoice.",
              "Adjunto encontrará la factura."
            ]
          },
          {
            "en": "I apologize for the delay",
            "es": "disculpe la demora",
            "imagen": "Persona disculpándose en un correo",
            "ejemplo": [
              "I apologize for the delay in my reply.",
              "Disculpe la demora en mi respuesta."
            ]
          },
          {
            "en": "at your earliest convenience",
            "es": "en cuanto le sea posible",
            "imagen": "Reloj junto a una agenda",
            "ejemplo": [
              "Please reply at your earliest convenience.",
              "Por favor responda en cuanto le sea posible."
            ]
          },
          {
            "en": "I look forward to hearing from you",
            "es": "quedo en espera de su respuesta",
            "imagen": "Persona enviando un correo formal",
            "ejemplo": [
              "I look forward to hearing from you.",
              "Quedo en espera de su respuesta."
            ]
          },
          {
            "en": "Best regards",
            "es": "saludos cordiales",
            "imagen": "Firma de correo electrónico en una pantalla",
            "ejemplo": [
              "Best regards, Luis Martínez.",
              "Saludos cordiales, Luis Martínez."
            ]
          }
        ]
      },
      {
        "id": "redes",
        "titulo": "Redes sociales y mensajes",
        "icono": "📱",
        "patron": [
          "BTW…",
          "LOL",
          "ASAP"
        ],
        "palabras": [
          {
            "en": "BTW",
            "es": "por cierto",
            "imagen": "Mensaje de chat en un celular",
            "ejemplo": [
              "BTW, are you coming to the party?",
              "Por cierto, ¿vas a venir a la fiesta?"
            ]
          },
          {
            "en": "ASAP",
            "es": "lo antes posible",
            "imagen": "Persona escribiendo un mensaje urgente",
            "ejemplo": [
              "Call me ASAP.",
              "Llámame lo antes posible."
            ]
          },
          {
            "en": "FYI",
            "es": "para tu información",
            "imagen": "Persona reenviando un mensaje",
            "ejemplo": [
              "FYI, the meeting has been moved to Friday.",
              "Para tu información, la junta se cambió al viernes."
            ]
          },
          {
            "en": "IMO",
            "es": "en mi opinión",
            "imagen": "Persona comentando en redes sociales",
            "ejemplo": [
              "IMO, the first movie was better.",
              "En mi opinión, la primera película fue mejor."
            ]
          },
          {
            "en": "LOL",
            "es": "jajaja",
            "imagen": "Persona riéndose frente a su celular",
            "ejemplo": [
              "That video is hilarious, LOL!",
              "¡Ese video está chistosísimo, jajaja!"
            ]
          },
          {
            "en": "No worries",
            "es": "no te preocupes / no hay problema",
            "imagen": "Persona sonriendo y haciendo un gesto relajado",
            "ejemplo": [
              "Sorry I'm late! No worries.",
              "¡Perdón por llegar tarde! No hay problema."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "You can purchase tickets online.",
        "es": "Puede adquirir sus boletos en línea."
      },
      {
        "en": "How may I assist you?",
        "es": "¿En qué puedo ayudarle?"
      },
      {
        "en": "The ceremony will commence at ten o'clock.",
        "es": "La ceremonia comenzará a las diez."
      },
      {
        "en": "We regret to inform you that your application has not been successful.",
        "es": "Lamentamos informarle que su solicitud no ha sido aceptada."
      },
      {
        "en": "Hey, what's up? Long time no see!",
        "es": "¡Quiubo! ¡Cuánto tiempo sin verte!"
      },
      {
        "en": "I would be grateful if you could send me the invoice.",
        "es": "Le agradecería que me enviara la factura."
      },
      {
        "en": "Let me know if you need anything.",
        "es": "Avísame si necesitas algo."
      },
      {
        "en": "I apologize for the delay in my reply.",
        "es": "Disculpe la demora en mi respuesta."
      },
      {
        "en": "FYI, the meeting has been moved to Friday.",
        "es": "Para tu información, la junta se cambió al viernes."
      },
      {
        "en": "Sorry I'm late! No worries.",
        "es": "¡Perdón por llegar tarde! No hay problema."
      }
    ],
    "frases": [
      {
        "en": "Dear Mr. Ramírez, I am writing to inform you that your order has been dispatched and will arrive within three working days.",
        "es": "Estimado señor Ramírez: le escribo para informarle que su pedido ha sido enviado y llegará en un plazo de tres días hábiles.",
        "imagen": "Paquete saliendo de un almacén en un camión"
      },
      {
        "en": "Hey Ana! Just wanted to tell you that the party's on Saturday. Can't wait to see you!",
        "es": "¡Hola, Ana! Solo quería decirte que la fiesta es el sábado. ¡Muero por verte!",
        "imagen": "Mensaje de chat con emojis de fiesta en un celular"
      },
      {
        "en": "We would be grateful if you could confirm your attendance before the fifteenth of March.",
        "es": "Le agradeceríamos que confirmara su asistencia antes del quince de marzo.",
        "imagen": "Invitación formal sobre una mesa con un sobre"
      },
      {
        "en": "Thanks so much for helping me move last weekend. I owe you one!",
        "es": "¡Muchas gracias por ayudarme con la mudanza el fin de semana! ¡Te debo una!",
        "imagen": "Amigos sentados entre cajas de mudanza riendo"
      },
      {
        "en": "Please be advised that the office will be closed on Monday due to the public holiday.",
        "es": "Le informamos que la oficina permanecerá cerrada el lunes por el día festivo.",
        "imagen": "Puerta de oficina cerrada con un aviso sin texto"
      },
      {
        "en": "Sorry, can't make it tonight. Something came up at work. Rain check?",
        "es": "Perdón, no puedo hoy en la noche. Surgió algo en el trabajo. ¿Lo dejamos para otro día?",
        "imagen": "Persona escribiendo un mensaje desde la oficina"
      },
      {
        "en": "In response to your inquiry, we are pleased to offer you a ten percent discount.",
        "es": "En respuesta a su consulta, nos complace ofrecerle un descuento del diez por ciento.",
        "imagen": "Agente de ventas escribiendo una respuesta formal"
      },
      {
        "en": "BTW, did you see the game last night? It was crazy!",
        "es": "Por cierto, ¿viste el partido anoche? ¡Estuvo de locos!",
        "imagen": "Amigos comentando un partido en el celular"
      },
      {
        "en": "Should you require any further assistance, please do not hesitate to contact our team.",
        "es": "Si requiere más ayuda, no dude en contactar a nuestro equipo.",
        "imagen": "Agentes de atención al cliente con audífonos"
      },
      {
        "en": "Got your message. I'll call you back in five. Cheers!",
        "es": "Recibí tu mensaje. Te llamo en cinco. ¡Gracias!",
        "imagen": "Persona respondiendo rápido un mensaje mientras camina"
      }
    ],
    "listening": [
      {
        "audio": "Good morning. How may I assist you today?",
        "pregunta": "¿Qué registro usa?",
        "opciones": [
          "Formal",
          "Informal",
          "Muy grosero",
          "De chat"
        ]
      },
      {
        "audio": "Hey, what's up? Wanna grab a coffee later?",
        "pregunta": "¿Qué propone?",
        "opciones": [
          "Tomar un café más tarde",
          "Ir a trabajar",
          "Ver una película",
          "Comer juntos"
        ]
      },
      {
        "audio": "We regret to inform you that the event has been postponed until further notice.",
        "pregunta": "¿Qué pasó con el evento?",
        "opciones": [
          "Se pospuso hasta nuevo aviso",
          "Se canceló para siempre",
          "Empezó antes",
          "Cambió de lugar"
        ]
      },
      {
        "audio": "No worries, I'll send it to you ASAP.",
        "pregunta": "¿Cuándo lo mandará?",
        "opciones": [
          "Lo antes posible",
          "Mañana",
          "La próxima semana",
          "Nunca"
        ]
      },
      {
        "audio": "I would be grateful if you could send me a copy of the contract.",
        "pregunta": "¿Qué pide?",
        "opciones": [
          "Una copia del contrato",
          "Una factura",
          "Una cita",
          "Dinero"
        ]
      }
    ],
    "lectura": {
      "titulo": "Two emails, two styles",
      "texto": "Last week, Daniela had to write two very different emails about the same thing. The first was to the manager of the venue where her company was organizing a conference. She wrote: Dear Mr. Torres, I am writing to inform you that the number of participants has increased to one hundred and fifty. I would be grateful if you could confirm whether the main room can accommodate this number. Please do not hesitate to contact me should you require any further information. I look forward to hearing from you. Kind regards, Daniela Ruiz. The second email was to her colleague and friend Pablo: Hi Pablo! Guess what? We've got 150 people now! Can you check if the big room's OK? Let me know ASAP. Thanks a lot! Dani. Both emails gave the same information, but the tone, the vocabulary and the structure were completely different. Knowing when to use each style is one of the most important skills in professional English.",
      "preguntas": [
        {
          "pregunta": "¿A cuántos participantes aumentó la conferencia?",
          "opciones": [
            "Ciento cincuenta",
            "Cincuenta",
            "Cien",
            "Doscientos"
          ]
        },
        {
          "pregunta": "¿A quién le escribió el correo formal?",
          "opciones": [
            "Al gerente del lugar del evento",
            "A su amigo Pablo",
            "A su jefe",
            "A los participantes"
          ]
        },
        {
          "pregunta": "¿Cómo firmó el correo a Pablo?",
          "opciones": [
            "Dani",
            "Daniela Ruiz",
            "Kind regards",
            "No firmó"
          ]
        },
        {
          "pregunta": "¿Qué cambió entre los dos correos?",
          "opciones": [
            "El tono, el vocabulario y la estructura",
            "La información",
            "El número de participantes",
            "Nada"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Escribe la versión formal.",
        "pregunta": "buy → ___",
        "respuestas": [
          "purchase",
          "acquire"
        ]
      },
      {
        "instruccion": "Escribe la versión formal.",
        "pregunta": "help → ___",
        "respuestas": [
          "assist"
        ]
      },
      {
        "instruccion": "Escribe la versión formal.",
        "pregunta": "tell → ___",
        "respuestas": [
          "inform"
        ]
      },
      {
        "instruccion": "Escribe la versión informal.",
        "pregunta": "require → ___",
        "respuestas": [
          "need"
        ]
      },
      {
        "instruccion": "Completa la fórmula formal.",
        "pregunta": "Dear Sir or ___,",
        "respuestas": [
          "Madam"
        ]
      },
      {
        "instruccion": "Completa la fórmula formal.",
        "pregunta": "I look forward to ___ from you.",
        "respuestas": [
          "hearing"
        ]
      },
      {
        "instruccion": "Traduce al inglés (formal).",
        "pregunta": "¿En qué puedo ayudarle?",
        "respuestas": [
          "How may I assist you",
          "How may I help you",
          "How can I help you"
        ]
      },
      {
        "instruccion": "Traduce al inglés (informal).",
        "pregunta": "Avísame.",
        "respuestas": [
          "Let me know"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "lo antes posible",
        "respuestas": [
          "as soon as possible",
          "ASAP"
        ]
      },
      {
        "instruccion": "Hazlo formal.",
        "pregunta": "Can you send me the invoice? → I would be ___ if you could send me the invoice.",
        "respuestas": [
          "grateful"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es más formal?",
        "opciones": [
          "We regret to inform you that…",
          "Sorry, but…",
          "Bad news…",
          "Guess what…"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Si no sabes el nombre del destinatario, empiezas con:",
        "opciones": [
          "Dear Sir or Madam,",
          "Hey there!",
          "Hi guys,",
          "What's up?"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Equivalente formal de «start»:",
        "opciones": [
          "commence",
          "kick off",
          "get going",
          "begin up"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«FYI» significa:",
        "opciones": [
          "Para tu información",
          "Por cierto",
          "Lo antes posible",
          "En mi opinión"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál NO se usa en un correo formal?",
        "opciones": [
          "gonna",
          "I would be grateful",
          "Kind regards",
          "Please find attached"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«No worries» significa:",
        "opciones": [
          "No hay problema",
          "Sin trabajo",
          "No te preocupes por mí",
          "Nada de nada"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Please be advised that the building will be closed this Saturday for maintenance.",
        "pregunta": "¿Por qué cerrará el edificio?",
        "opciones": [
          "Por mantenimiento",
          "Por un día festivo",
          "Por una huelga",
          "Por una fiesta"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Can't make it tonight, sorry! Rain check?",
        "pregunta": "¿Qué propone la persona?",
        "opciones": [
          "Dejarlo para otro día",
          "Ir con lluvia",
          "Cancelar para siempre",
          "Llegar tarde"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: atentamente (carta formal)",
        "respuestas": [
          "Yours sincerely",
          "Yours faithfully",
          "Sincerely",
          "Kind regards",
          "Best regards"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Disculpe la demora.",
        "respuestas": [
          "I apologize for the delay",
          "I apologise for the delay",
          "Sorry for the delay"
        ]
      }
    ]
  },
  {
    "id": "c1-19",
    "num": 19,
    "titulo": "Expresiones idiomáticas y collocations avanzadas",
    "contexto": "Inglés natural",
    "explicacion": {
      "es": [
        "Las **expresiones idiomáticas** (*idioms*) tienen un significado que **no se deduce** de las palabras sueltas: ***It's a piece of cake*** no habla de pastel, significa **es facilísimo**. Usarlas bien hace que tu inglés suene **natural**.",
        "Muchas tienen **equivalentes** en español, aunque con otras imágenes: ***kill two birds with one stone*** = matar dos pájaros de un tiro; ***break the ice*** = romper el hielo; ***cost an arm and a leg*** = costar un ojo de la cara.",
        "Las **collocations avanzadas** son combinaciones fijas más sofisticadas: ***bitterly disappointed*** (profundamente decepcionado), ***a heated debate*** (un debate acalorado), ***a golden opportunity*** (una oportunidad de oro), ***to meet a deadline*** (cumplir un plazo), ***to pose a threat*** (representar una amenaza).",
        "Consejo: aprende los idioms **en contexto**, fíjate en el **registro** (muchos son informales) y no los fuerces: un idiom mal usado suena raro. Es mejor dominar 20 bien que mencionar 100 mal."
      ],
      "tabla": {
        "columnas": [
          "Idiom",
          "Significado",
          "Equivalente"
        ],
        "filas": [
          [
            "It's a piece of cake.",
            "es facilísimo",
            "Está pan comido."
          ],
          [
            "It costs an arm and a leg.",
            "es carísimo",
            "Cuesta un ojo de la cara."
          ],
          [
            "Break the ice",
            "romper el hielo",
            "Romper el hielo."
          ],
          [
            "Kill two birds with one stone",
            "resolver dos cosas a la vez",
            "Matar dos pájaros de un tiro."
          ],
          [
            "Once in a blue moon",
            "muy rara vez",
            "De vez en cuando / cada muerte de obispo"
          ],
          [
            "Under the weather",
            "un poco enfermo",
            "Medio malito"
          ]
        ]
      },
      "ojo": [
        "No traduzcas idioms palabra por palabra: *estar en las nubes* = ***to have your head in the clouds***, no *to be in the clouds*.",
        "Muchos idioms son **informales**: no los uses en un ensayo académico ni en una carta formal.",
        "Los idioms tienen **forma fija**: *It's raining cats and dogs* ✅ (no *dogs and cats* ❌).",
        "Collocations de intensidad: ***deeply moved, bitterly cold, highly unlikely, utterly ridiculous, painfully slow***.",
        "Verbos fijos con sustantivos: ***pay a compliment, run a risk, draw a conclusion, raise a question, strike a balance***."
      ],
      "en": [
        "Idioms have a meaning you can't guess from the words: It's a piece of cake means it's very easy.",
        "Kill two birds with one stone. Break the ice. It costs an arm and a leg.",
        "Advanced collocations: bitterly disappointed, a heated debate, a golden opportunity.",
        "Learn idioms in context and be careful with register."
      ]
    },
    "vocabulario": [
      {
        "en": "It's a piece of cake.",
        "es": "está pan comido",
        "imagen": "Persona resolviendo un problema con facilidad y sonriendo",
        "ejemplo": [
          "The exam was a piece of cake.",
          "El examen estuvo pan comido."
        ]
      },
      {
        "en": "It costs an arm and a leg.",
        "es": "cuesta un ojo de la cara",
        "imagen": "Persona sorprendida frente a un precio altísimo",
        "ejemplo": [
          "That car costs an arm and a leg.",
          "Ese carro cuesta un ojo de la cara."
        ]
      },
      {
        "en": "break the ice",
        "es": "romper el hielo",
        "imagen": "Personas riendo en el inicio de una reunión",
        "ejemplo": [
          "He told a joke to break the ice.",
          "Contó un chiste para romper el hielo."
        ]
      },
      {
        "en": "kill two birds with one stone",
        "es": "matar dos pájaros de un tiro",
        "imagen": "Persona haciendo dos tareas a la vez eficientemente",
        "ejemplo": [
          "I visited my aunt and went shopping. I killed two birds with one stone.",
          "Visité a mi tía y fui de compras. Maté dos pájaros de un tiro."
        ]
      },
      {
        "en": "once in a blue moon",
        "es": "muy rara vez",
        "imagen": "Luna llena azulada en el cielo nocturno",
        "ejemplo": [
          "I only eat fast food once in a blue moon.",
          "Solo como comida rápida muy de vez en cuando."
        ]
      },
      {
        "en": "under the weather",
        "es": "un poco enfermo",
        "imagen": "Persona con cobija y té en el sofá",
        "ejemplo": [
          "I'm feeling a bit under the weather today.",
          "Hoy me siento un poco malito."
        ]
      },
      {
        "en": "hit the nail on the head",
        "es": "dar en el clavo",
        "imagen": "Martillo golpeando un clavo perfectamente",
        "ejemplo": [
          "You hit the nail on the head with that comment.",
          "Diste en el clavo con ese comentario."
        ]
      },
      {
        "en": "the last straw",
        "es": "la gota que derramó el vaso",
        "imagen": "Vaso de agua derramándose",
        "ejemplo": [
          "Being late again was the last straw.",
          "Volver a llegar tarde fue la gota que derramó el vaso."
        ]
      },
      {
        "en": "let the cat out of the bag",
        "es": "soltar la sopa / revelar un secreto",
        "imagen": "Persona tapándose la boca después de decir algo",
        "ejemplo": [
          "My brother let the cat out of the bag about the party.",
          "Mi hermano soltó la sopa de la fiesta."
        ]
      },
      {
        "en": "on cloud nine",
        "es": "en las nubes de felicidad",
        "imagen": "Persona saltando de felicidad",
        "ejemplo": [
          "She's been on cloud nine since she got engaged.",
          "Está feliz de la vida desde que se comprometió."
        ]
      },
      {
        "en": "a golden opportunity",
        "es": "una oportunidad de oro",
        "imagen": "Puerta dorada abierta con luz",
        "ejemplo": [
          "This job is a golden opportunity.",
          "Este trabajo es una oportunidad de oro."
        ]
      },
      {
        "en": "bitterly disappointed",
        "es": "profundamente decepcionado",
        "imagen": "Aficionado triste en un estadio vacío",
        "ejemplo": [
          "The fans were bitterly disappointed.",
          "Los aficionados quedaron profundamente decepcionados."
        ]
      },
      {
        "en": "a heated debate",
        "es": "un debate acalorado",
        "imagen": "Personas discutiendo intensamente en una mesa",
        "ejemplo": [
          "There was a heated debate about the new law.",
          "Hubo un debate acalorado sobre la nueva ley."
        ]
      },
      {
        "en": "meet a deadline",
        "es": "cumplir un plazo",
        "imagen": "Persona entregando un proyecto justo a tiempo",
        "ejemplo": [
          "We worked all night to meet the deadline.",
          "Trabajamos toda la noche para cumplir el plazo."
        ]
      },
      {
        "en": "pose a threat",
        "es": "representar una amenaza",
        "imagen": "Nubes de tormenta sobre una ciudad costera",
        "ejemplo": [
          "The hurricane poses a serious threat to the coast.",
          "El huracán representa una grave amenaza para la costa."
        ]
      },
      {
        "en": "draw a conclusion",
        "es": "sacar una conclusión",
        "imagen": "Persona pensativa frente a un tablero de datos",
        "ejemplo": [
          "It's too early to draw a conclusion.",
          "Es demasiado pronto para sacar una conclusión."
        ]
      }
    ],
    "grupos": [
      {
        "id": "trabajo",
        "titulo": "Idioms del trabajo",
        "icono": "💼",
        "patron": [
          "to be on the same page",
          "to think outside the box",
          "to call it a day"
        ],
        "palabras": [
          {
            "en": "on the same page",
            "es": "en la misma sintonía",
            "imagen": "Equipo asintiendo en una junta",
            "ejemplo": [
              "Let's make sure we're all on the same page.",
              "Asegurémonos de que todos estemos en la misma sintonía."
            ]
          },
          {
            "en": "think outside the box",
            "es": "pensar de forma creativa",
            "imagen": "Persona saliendo de una caja dibujada",
            "ejemplo": [
              "We need to think outside the box to solve this.",
              "Necesitamos pensar de forma creativa para resolver esto."
            ]
          },
          {
            "en": "call it a day",
            "es": "dar por terminado el día",
            "imagen": "Persona cerrando la laptop al atardecer",
            "ejemplo": [
              "It's late. Let's call it a day.",
              "Ya es tarde. Démoslo por terminado."
            ]
          },
          {
            "en": "get the ball rolling",
            "es": "poner manos a la obra",
            "imagen": "Persona empujando una pelota grande",
            "ejemplo": [
              "Let's get the ball rolling on the new project.",
              "Pongamos manos a la obra con el nuevo proyecto."
            ]
          },
          {
            "en": "back to square one",
            "es": "volver a empezar de cero",
            "imagen": "Tablero de juego con una ficha en la casilla inicial",
            "ejemplo": [
              "The client rejected the design, so we're back to square one.",
              "El cliente rechazó el diseño, así que volvemos a empezar de cero."
            ]
          },
          {
            "en": "cut corners",
            "es": "hacer las cosas al aventón",
            "imagen": "Construcción mal hecha con grietas",
            "ejemplo": [
              "Don't cut corners. Do it properly.",
              "No hagas las cosas al aventón. Hazlo bien."
            ]
          }
        ]
      },
      {
        "id": "emociones",
        "titulo": "Idioms de emociones",
        "icono": "😊",
        "patron": [
          "over the moon",
          "down in the dumps",
          "get cold feet"
        ],
        "palabras": [
          {
            "en": "over the moon",
            "es": "feliz de la vida",
            "imagen": "Persona celebrando con los brazos arriba",
            "ejemplo": [
              "They were over the moon with the news.",
              "Estaban felices de la vida con la noticia."
            ]
          },
          {
            "en": "down in the dumps",
            "es": "con el ánimo por los suelos",
            "imagen": "Persona triste mirando por la ventana con lluvia",
            "ejemplo": [
              "He's been down in the dumps since he lost his job.",
              "Anda con el ánimo por los suelos desde que perdió su trabajo."
            ]
          },
          {
            "en": "get cold feet",
            "es": "echarse para atrás",
            "imagen": "Novio nervioso mirando la puerta de la iglesia",
            "ejemplo": [
              "He got cold feet the day before the wedding.",
              "Se echó para atrás el día antes de la boda."
            ]
          },
          {
            "en": "a blessing in disguise",
            "es": "no hay mal que por bien no venga",
            "imagen": "Persona sonriendo después de perder un camión y encontrar a un amigo",
            "ejemplo": [
              "Losing that job was a blessing in disguise.",
              "Perder ese trabajo fue una bendición disfrazada."
            ]
          },
          {
            "en": "bite your tongue",
            "es": "morderse la lengua",
            "imagen": "Persona apretando los labios para no hablar",
            "ejemplo": [
              "I had to bite my tongue during the meeting.",
              "Tuve que morderme la lengua durante la junta."
            ]
          },
          {
            "en": "keep your chin up",
            "es": "ánimo / no te desanimes",
            "imagen": "Amigo animando a otro con una palmada",
            "ejemplo": [
              "Keep your chin up. Things will get better.",
              "Ánimo. Las cosas van a mejorar."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "The exam was a piece of cake.",
        "es": "El examen estuvo pan comido."
      },
      {
        "en": "That car costs an arm and a leg.",
        "es": "Ese carro cuesta un ojo de la cara."
      },
      {
        "en": "He told a joke to break the ice.",
        "es": "Contó un chiste para romper el hielo."
      },
      {
        "en": "I only eat fast food once in a blue moon.",
        "es": "Solo como comida rápida muy de vez en cuando."
      },
      {
        "en": "I'm feeling a bit under the weather today.",
        "es": "Hoy me siento un poco malito."
      },
      {
        "en": "Being late again was the last straw.",
        "es": "Volver a llegar tarde fue la gota que derramó el vaso."
      },
      {
        "en": "My brother let the cat out of the bag about the party.",
        "es": "Mi hermano soltó la sopa de la fiesta."
      },
      {
        "en": "We worked all night to meet the deadline.",
        "es": "Trabajamos toda la noche para cumplir el plazo."
      },
      {
        "en": "It's late. Let's call it a day.",
        "es": "Ya es tarde. Démoslo por terminado."
      },
      {
        "en": "Losing that job was a blessing in disguise.",
        "es": "Perder ese trabajo fue una bendición disfrazada."
      }
    ],
    "frases": [
      {
        "en": "I was nervous before the presentation, but once I started, it was a piece of cake.",
        "es": "Estaba nervioso antes de la presentación, pero una vez que empecé, fue pan comido.",
        "imagen": "Presentador relajado frente a un público atento"
      },
      {
        "en": "Living in the center of the city costs an arm and a leg, so we moved to the suburbs.",
        "es": "Vivir en el centro cuesta un ojo de la cara, así que nos mudamos a las afueras.",
        "imagen": "Familia mudándose a una casa en las afueras"
      },
      {
        "en": "Getting fired was a blessing in disguise, because it gave me the courage to start my own business.",
        "es": "Que me corrieran fue una bendición disfrazada, porque me dio el valor de poner mi propio negocio.",
        "imagen": "Persona abriendo su propio negocio con orgullo"
      },
      {
        "en": "We were planning a surprise party, but my little sister let the cat out of the bag.",
        "es": "Estábamos planeando una fiesta sorpresa, pero mi hermanita soltó la sopa.",
        "imagen": "Niña tapándose la boca frente a su mamá sorprendida"
      },
      {
        "en": "The new policy poses a serious threat to small businesses in the area.",
        "es": "La nueva política representa una grave amenaza para los pequeños negocios de la zona.",
        "imagen": "Dueños de pequeños negocios preocupados en una calle comercial"
      },
      {
        "en": "She was bitterly disappointed when she didn't get the scholarship, but she kept her chin up and applied again.",
        "es": "Quedó profundamente decepcionada cuando no le dieron la beca, pero no se desanimó y volvió a solicitarla.",
        "imagen": "Estudiante llenando una solicitud con determinación"
      },
      {
        "en": "Let's make sure we're all on the same page before we present the plan to the client.",
        "es": "Asegurémonos de estar todos en la misma sintonía antes de presentar el plan al cliente.",
        "imagen": "Equipo revisando un plan juntos antes de una junta"
      },
      {
        "en": "After the client rejected our proposal, we were back to square one.",
        "es": "Después de que el cliente rechazó nuestra propuesta, volvimos a empezar de cero.",
        "imagen": "Equipo frustrado frente a un pizarrón vacío"
      },
      {
        "en": "There was a heated debate in Congress about the new education law.",
        "es": "Hubo un debate acalorado en el Congreso sobre la nueva ley de educación.",
        "imagen": "Legisladores discutiendo en una sesión"
      },
      {
        "en": "I only see my cousins from Tijuana once in a blue moon, so this reunion is very special.",
        "es": "Solo veo a mis primos de Tijuana muy de vez en cuando, así que esta reunión es muy especial.",
        "imagen": "Primos abrazándose en una reunión familiar"
      }
    ],
    "listening": [
      {
        "audio": "The new phone costs an arm and a leg, so I'm keeping my old one.",
        "pregunta": "¿Por qué no compra el celular nuevo?",
        "opciones": [
          "Es carísimo",
          "No le gusta",
          "No hay en la tienda",
          "Es muy grande"
        ]
      },
      {
        "audio": "I'm feeling under the weather, so I won't come to the office today.",
        "pregunta": "¿Por qué no va a la oficina?",
        "opciones": [
          "Se siente un poco enfermo",
          "Hace mal tiempo",
          "Tiene vacaciones",
          "Está de viaje"
        ]
      },
      {
        "audio": "The test was a piece of cake. I finished in twenty minutes.",
        "pregunta": "¿Cómo estuvo el examen?",
        "opciones": [
          "Facilísimo",
          "Muy difícil",
          "Largo",
          "Aburrido"
        ]
      },
      {
        "audio": "She's been on cloud nine since she got the promotion.",
        "pregunta": "¿Cómo se siente?",
        "opciones": [
          "Feliz de la vida",
          "Triste",
          "Nerviosa",
          "Cansada"
        ]
      },
      {
        "audio": "We got stuck in traffic and missed the meeting. That was the last straw.",
        "pregunta": "¿Qué significa «the last straw»?",
        "opciones": [
          "La gota que derramó el vaso",
          "La última pajilla",
          "El último intento",
          "La mejor parte"
        ]
      }
    ],
    "lectura": {
      "titulo": "My first week as a teacher",
      "texto": "When I started teaching English at a secondary school, I thought it would be a piece of cake. After all, I had studied for years and I loved the language. I was wrong. On the first day, the students were silent and serious, so I tried to break the ice with a game. It worked, more or less. By Wednesday, I realized that preparing classes every night cost me hours of sleep, and I was feeling under the weather. On Thursday, a student asked me a question I couldn't answer, and I wanted the earth to swallow me. Then on Friday, my principal told me that the parents would visit my class the following week. That was the last straw! I almost got cold feet and considered quitting. But my mentor, an experienced teacher, told me to keep my chin up. You're doing better than you think, she said. Rome wasn't built in a day. She was right. Three years later, I can honestly say that becoming a teacher was the best decision of my life.",
      "preguntas": [
        {
          "pregunta": "¿Qué pensaba el narrador sobre dar clases?",
          "opciones": [
            "Que sería pan comido",
            "Que sería imposible",
            "Que sería aburrido",
            "Que no le gustaría"
          ]
        },
        {
          "pregunta": "¿Cómo intentó romper el hielo?",
          "opciones": [
            "Con un juego",
            "Con un chiste",
            "Con un examen",
            "Con música"
          ]
        },
        {
          "pregunta": "¿Qué fue la gota que derramó el vaso?",
          "opciones": [
            "Que los papás visitarían su clase",
            "Que un alumno se quejó",
            "Que se enfermó",
            "Que perdió sus notas"
          ]
        },
        {
          "pregunta": "¿Qué le dijo su mentora?",
          "opciones": [
            "Que no se desanimara",
            "Que renunciara",
            "Que cambiara de escuela",
            "Que estudiara más"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa el idiom.",
        "pregunta": "The exam was a piece of ___.",
        "respuestas": [
          "cake"
        ]
      },
      {
        "instruccion": "Completa el idiom.",
        "pregunta": "That house costs an arm and a ___.",
        "respuestas": [
          "leg"
        ]
      },
      {
        "instruccion": "Completa el idiom.",
        "pregunta": "He told a joke to break the ___.",
        "respuestas": [
          "ice"
        ]
      },
      {
        "instruccion": "Completa el idiom.",
        "pregunta": "I only go to the cinema once in a blue ___.",
        "respuestas": [
          "moon"
        ]
      },
      {
        "instruccion": "Completa la collocation.",
        "pregunta": "We worked hard to ___ the deadline.",
        "respuestas": [
          "meet"
        ]
      },
      {
        "instruccion": "Completa la collocation.",
        "pregunta": "It's a golden ___. Don't miss it!",
        "respuestas": [
          "opportunity"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "matar dos pájaros de un tiro",
        "respuestas": [
          "kill two birds with one stone",
          "to kill two birds with one stone"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "la gota que derramó el vaso",
        "respuestas": [
          "the last straw",
          "the straw that broke the camel's back"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Démoslo por terminado.",
        "respuestas": [
          "Let's call it a day"
        ]
      },
      {
        "instruccion": "Corrige el idiom.",
        "pregunta": "It's raining dogs and cats.",
        "respuestas": [
          "It's raining cats and dogs",
          "It is raining cats and dogs"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "«It's a piece of cake» significa:",
        "opciones": [
          "Es facilísimo",
          "Es un pastel",
          "Es delicioso",
          "Es un pedazo"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«I'm under the weather» significa:",
        "opciones": [
          "Me siento un poco enfermo",
          "Hace mal tiempo",
          "Estoy afuera",
          "Estoy feliz"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We need to think outside the ___.",
        "opciones": [
          "box",
          "house",
          "room",
          "door"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The fans were ___ disappointed.",
        "opciones": [
          "bitterly",
          "strongly",
          "heavily",
          "hardly"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«He got cold feet» significa:",
        "opciones": [
          "Se echó para atrás",
          "Le dio frío en los pies",
          "Se enfermó",
          "Se fue corriendo"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Equivalente de «cuesta un ojo de la cara»:",
        "opciones": [
          "It costs an arm and a leg.",
          "It costs an eye of the face.",
          "It's very cheap.",
          "It costs a piece of cake."
        ]
      },
      {
        "tipo": "listening",
        "audio": "Let's make sure we're all on the same page before the meeting with the client.",
        "pregunta": "¿Qué quiere asegurar?",
        "opciones": [
          "Que todos estén de acuerdo",
          "Que lean la misma página",
          "Que lleguen temprano",
          "Que traigan sus notas"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Missing the bus was a blessing in disguise. I met my future wife while I was waiting for the next one.",
        "pregunta": "¿Por qué fue bueno perder el camión?",
        "opciones": [
          "Conoció a su futura esposa",
          "Encontró dinero",
          "Llegó temprano",
          "Le dieron un trabajo"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: romper el hielo",
        "respuestas": [
          "break the ice",
          "to break the ice"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: una oportunidad de oro",
        "respuestas": [
          "a golden opportunity"
        ]
      }
    ]
  },
  {
    "id": "c1-20",
    "num": 20,
    "titulo": "Escritura académica y profesional",
    "contexto": "Informes, propuestas y reseñas",
    "explicacion": {
      "es": [
        "Un **informe** (*report*) presenta información de forma **objetiva y organizada**: **título**, **introducción** (propósito), **secciones con subtítulos**, **hallazgos** y **recomendaciones**. Frases útiles: ***The purpose of this report is to…, It was found that…, It is recommended that…***",
        "Una **propuesta** (*proposal*) intenta **convencer** a alguien de aprobar una idea: describe la **situación actual**, el **problema**, la **solución propuesta**, los **beneficios** y el **costo**. Frases: ***I would like to propose…, This would allow us to…, The main benefit would be…***",
        "Una **reseña** (*review*) da una **opinión fundamentada** sobre un libro, película, restaurante o producto: **descripción breve**, **puntos fuertes**, **puntos débiles** y **recomendación final**. Frases: ***What stands out is…, The only drawback is…, I would highly recommend it to…***",
        "En todos: **párrafos claros**, **conectores** (*furthermore, however, consequently*), **lenguaje prudente** (*it appears that*), **nominalización** cuando convenga y **sin contracciones** si es formal. ¡Y siempre **revisa** antes de entregar!"
      ],
      "tabla": {
        "columnas": [
          "Tipo de texto",
          "Propósito",
          "Frases clave"
        ],
        "filas": [
          [
            "Report",
            "informar objetivamente",
            "The aim of this report is… / It was found that…"
          ],
          [
            "Proposal",
            "convencer de una idea",
            "I would like to propose… / This would enable…"
          ],
          [
            "Review",
            "opinar con argumentos",
            "What stands out is… / I would recommend…"
          ],
          [
            "Essay",
            "argumentar una postura",
            "In this essay, I will argue… / In conclusion…"
          ],
          [
            "Formal email",
            "comunicar con cortesía",
            "I am writing regarding… / I look forward to…"
          ]
        ]
      },
      "ojo": [
        "En informes, usa **pasiva e impersonal** para sonar objetivo: ***It was observed that…, A survey was carried out…***",
        "En propuestas, usa ***would*** para describir el futuro posible: *This **would** reduce costs by 20%.*",
        "En reseñas puedes ser más **personal** y usar adjetivos fuertes: ***gripping*** (atrapante), ***disappointing***, ***outstanding***, ***overrated***.",
        "Usa **subtítulos** (*headings*) en informes y propuestas: facilitan la lectura.",
        "Evita repetir *very* e *I think*: varía con ***highly, remarkably, particularly***, ***in my view, it seems to me***."
      ],
      "en": [
        "A report presents information objectively: The purpose of this report is to… It is recommended that…",
        "A proposal tries to persuade: I would like to propose… This would allow us to…",
        "A review gives a reasoned opinion: What stands out is… I would highly recommend it.",
        "Use clear paragraphs, connectors and formal language."
      ]
    },
    "vocabulario": [
      {
        "en": "The purpose of this report is to",
        "es": "el propósito de este informe es",
        "imagen": "Documento con portada y gráficas",
        "ejemplo": [
          "The purpose of this report is to analyze customer satisfaction.",
          "El propósito de este informe es analizar la satisfacción del cliente."
        ]
      },
      {
        "en": "It was found that",
        "es": "se encontró que",
        "imagen": "Investigador presentando resultados",
        "ejemplo": [
          "It was found that most customers prefer online payment.",
          "Se encontró que la mayoría de los clientes prefiere pagar en línea."
        ]
      },
      {
        "en": "It is recommended that",
        "es": "se recomienda que",
        "imagen": "Gerente señalando recomendaciones en una pantalla",
        "ejemplo": [
          "It is recommended that the company hire more staff.",
          "Se recomienda que la empresa contrate más personal."
        ]
      },
      {
        "en": "I would like to propose",
        "es": "me gustaría proponer",
        "imagen": "Persona presentando una idea en una junta",
        "ejemplo": [
          "I would like to propose a new training program.",
          "Me gustaría proponer un nuevo programa de capacitación."
        ]
      },
      {
        "en": "This would allow us to",
        "es": "esto nos permitiría",
        "imagen": "Diagrama de un plan con beneficios",
        "ejemplo": [
          "This would allow us to reduce costs.",
          "Esto nos permitiría reducir costos."
        ]
      },
      {
        "en": "The main benefit would be",
        "es": "el principal beneficio sería",
        "imagen": "Persona señalando un beneficio con el pulgar arriba",
        "ejemplo": [
          "The main benefit would be better communication.",
          "El principal beneficio sería una mejor comunicación."
        ]
      },
      {
        "en": "What stands out is",
        "es": "lo que destaca es",
        "imagen": "Lector entusiasmado con un libro",
        "ejemplo": [
          "What stands out is the incredible acting.",
          "Lo que destaca es la actuación increíble."
        ]
      },
      {
        "en": "The only drawback is",
        "es": "la única desventaja es",
        "imagen": "Restaurante bonito con precios altos",
        "ejemplo": [
          "The only drawback is the price.",
          "La única desventaja es el precio."
        ]
      },
      {
        "en": "I would highly recommend it",
        "es": "lo recomendaría ampliamente",
        "imagen": "Persona dando cinco estrellas en una app",
        "ejemplo": [
          "I would highly recommend it to anyone who loves history.",
          "Lo recomendaría ampliamente a cualquiera que ame la historia."
        ]
      },
      {
        "en": "findings",
        "es": "hallazgos",
        "imagen": "Hoja de resultados con datos resaltados",
        "ejemplo": [
          "The findings of the survey were surprising.",
          "Los hallazgos de la encuesta fueron sorprendentes."
        ]
      },
      {
        "en": "a survey was carried out",
        "es": "se llevó a cabo una encuesta",
        "imagen": "Personas contestando una encuesta en tabletas",
        "ejemplo": [
          "A survey was carried out among five hundred employees.",
          "Se llevó a cabo una encuesta entre quinientos empleados."
        ]
      },
      {
        "en": "gripping",
        "es": "atrapante",
        "imagen": "Persona leyendo un libro sin poder soltarlo",
        "ejemplo": [
          "It's a gripping novel from beginning to end.",
          "Es una novela atrapante de principio a fin."
        ]
      },
      {
        "en": "outstanding",
        "es": "sobresaliente",
        "imagen": "Atleta con medalla de oro",
        "ejemplo": [
          "The service was outstanding.",
          "El servicio fue sobresaliente."
        ]
      },
      {
        "en": "overrated",
        "es": "sobrevalorado",
        "imagen": "Persona aburrida en un lugar de moda",
        "ejemplo": [
          "In my opinion, the restaurant is overrated.",
          "En mi opinión, el restaurante está sobrevalorado."
        ]
      },
      {
        "en": "in conclusion",
        "es": "en conclusión",
        "imagen": "Persona escribiendo el último párrafo",
        "ejemplo": [
          "In conclusion, the project would benefit the whole community.",
          "En conclusión, el proyecto beneficiaría a toda la comunidad."
        ]
      },
      {
        "en": "to sum up",
        "es": "en resumen",
        "imagen": "Diapositiva final de una presentación",
        "ejemplo": [
          "To sum up, the results were positive.",
          "En resumen, los resultados fueron positivos."
        ]
      }
    ],
    "grupos": [
      {
        "id": "informe",
        "titulo": "Informes y propuestas",
        "icono": "📊",
        "patron": [
          "Introduction",
          "Findings",
          "Recommendations"
        ],
        "palabras": [
          {
            "en": "introduction",
            "es": "introducción",
            "imagen": "Primera página de un informe",
            "ejemplo": [
              "The introduction explains the aim of the report.",
              "La introducción explica el objetivo del informe."
            ]
          },
          {
            "en": "recommendations",
            "es": "recomendaciones",
            "imagen": "Lista numerada de recomendaciones",
            "ejemplo": [
              "The report ends with three recommendations.",
              "El informe termina con tres recomendaciones."
            ]
          },
          {
            "en": "the current situation",
            "es": "la situación actual",
            "imagen": "Gráfica del estado actual de un proyecto",
            "ejemplo": [
              "The current situation is not sustainable.",
              "La situación actual no es sostenible."
            ]
          },
          {
            "en": "a cost estimate",
            "es": "un presupuesto estimado",
            "imagen": "Hoja de cálculo con costos",
            "ejemplo": [
              "We have included a cost estimate for the project.",
              "Incluimos un presupuesto estimado del proyecto."
            ]
          },
          {
            "en": "to implement",
            "es": "implementar",
            "imagen": "Equipo poniendo en marcha un nuevo sistema",
            "ejemplo": [
              "The changes will be implemented next month.",
              "Los cambios se implementarán el próximo mes."
            ]
          },
          {
            "en": "feasible",
            "es": "factible",
            "imagen": "Ingeniero aprobando un plan",
            "ejemplo": [
              "The plan is both cheap and feasible.",
              "El plan es barato y factible."
            ]
          }
        ]
      },
      {
        "id": "resena",
        "titulo": "Reseñas",
        "icono": "⭐",
        "patron": [
          "What stands out is…",
          "However, …",
          "Overall, …"
        ],
        "palabras": [
          {
            "en": "the plot",
            "es": "la trama",
            "imagen": "Libro abierto con ilustraciones de personajes",
            "ejemplo": [
              "The plot is simple but very moving.",
              "La trama es sencilla pero muy conmovedora."
            ]
          },
          {
            "en": "the cast",
            "es": "el reparto",
            "imagen": "Actores en una alfombra roja",
            "ejemplo": [
              "The cast includes several famous Mexican actors.",
              "El reparto incluye a varios actores mexicanos famosos."
            ]
          },
          {
            "en": "moving",
            "es": "conmovedor",
            "imagen": "Persona llorando en el cine",
            "ejemplo": [
              "It's a deeply moving film.",
              "Es una película profundamente conmovedora."
            ]
          },
          {
            "en": "disappointing",
            "es": "decepcionante",
            "imagen": "Persona saliendo del cine con cara de aburrimiento",
            "ejemplo": [
              "The ending was a little disappointing.",
              "El final fue un poco decepcionante."
            ]
          },
          {
            "en": "value for money",
            "es": "buena relación calidad-precio",
            "imagen": "Plato abundante con un precio razonable",
            "ejemplo": [
              "The restaurant offers excellent value for money.",
              "El restaurante tiene una excelente relación calidad-precio."
            ]
          },
          {
            "en": "Overall",
            "es": "en general",
            "imagen": "Persona dando una calificación final",
            "ejemplo": [
              "Overall, it was a very pleasant experience.",
              "En general, fue una experiencia muy agradable."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "The purpose of this report is to analyze customer satisfaction.",
        "es": "El propósito de este informe es analizar la satisfacción del cliente."
      },
      {
        "en": "It was found that most customers prefer online payment.",
        "es": "Se encontró que la mayoría de los clientes prefiere pagar en línea."
      },
      {
        "en": "It is recommended that the company hire more staff.",
        "es": "Se recomienda que la empresa contrate más personal."
      },
      {
        "en": "I would like to propose a new training program.",
        "es": "Me gustaría proponer un nuevo programa de capacitación."
      },
      {
        "en": "This would allow us to reduce costs.",
        "es": "Esto nos permitiría reducir costos."
      },
      {
        "en": "What stands out is the incredible acting.",
        "es": "Lo que destaca es la actuación increíble."
      },
      {
        "en": "The only drawback is the price.",
        "es": "La única desventaja es el precio."
      },
      {
        "en": "A survey was carried out among five hundred employees.",
        "es": "Se llevó a cabo una encuesta entre quinientos empleados."
      },
      {
        "en": "The restaurant offers excellent value for money.",
        "es": "El restaurante tiene una excelente relación calidad-precio."
      },
      {
        "en": "Overall, it was a very pleasant experience.",
        "es": "En general, fue una experiencia muy agradable."
      }
    ],
    "frases": [
      {
        "en": "The aim of this report is to evaluate the impact of the new working hours on employee productivity.",
        "es": "El objetivo de este informe es evaluar el impacto del nuevo horario en la productividad de los empleados.",
        "imagen": "Equipo revisando un informe con gráficas"
      },
      {
        "en": "It was found that employees who work from home two days a week are, on average, more satisfied with their jobs.",
        "es": "Se encontró que los empleados que trabajan desde casa dos días a la semana están, en promedio, más satisfechos con su trabajo.",
        "imagen": "Empleada contenta trabajando desde casa"
      },
      {
        "en": "I would like to propose the creation of a small library in the office, where employees could borrow books.",
        "es": "Me gustaría proponer la creación de una pequeña biblioteca en la oficina, donde los empleados puedan pedir libros prestados.",
        "imagen": "Rincón de lectura en una oficina con libreros"
      },
      {
        "en": "The main benefit of this proposal would be an improvement in team communication.",
        "es": "El principal beneficio de esta propuesta sería una mejora en la comunicación del equipo.",
        "imagen": "Equipo conversando animadamente en una sala"
      },
      {
        "en": "What stands out in this novel is the way the author describes life in a small town in the 1950s.",
        "es": "Lo que destaca en esta novela es la forma en que el autor describe la vida en un pueblo en los años cincuenta.",
        "imagen": "Libro abierto con una ilustración de un pueblo antiguo"
      },
      {
        "en": "The food was outstanding; however, the service was painfully slow and the music was too loud.",
        "es": "La comida fue sobresaliente; sin embargo, el servicio fue lentísimo y la música estaba muy fuerte.",
        "imagen": "Restaurante lleno con meseros apurados"
      },
      {
        "en": "It is therefore recommended that the company invest in training before introducing the new software.",
        "es": "Por lo tanto, se recomienda que la empresa invierta en capacitación antes de introducir el nuevo programa.",
        "imagen": "Empleados en una capacitación frente a computadoras"
      },
      {
        "en": "Overall, the museum offers a fascinating journey through Mexican history and is excellent value for money.",
        "es": "En general, el museo ofrece un fascinante recorrido por la historia de México y tiene una excelente relación calidad-precio.",
        "imagen": "Visitantes en una sala de museo con piezas prehispánicas"
      },
      {
        "en": "The proposed changes could be implemented gradually over a period of six months.",
        "es": "Los cambios propuestos podrían implementarse gradualmente en un periodo de seis meses.",
        "imagen": "Calendario con un plan de seis meses"
      },
      {
        "en": "In conclusion, I would highly recommend this course to anyone who wants to improve their professional English.",
        "es": "En conclusión, recomendaría ampliamente este curso a cualquiera que quiera mejorar su inglés profesional.",
        "imagen": "Estudiantes adultos en una clase de inglés profesional"
      }
    ],
    "listening": [
      {
        "audio": "The purpose of this report is to examine why sales have fallen in the north.",
        "pregunta": "¿Qué examina el informe?",
        "opciones": [
          "Por qué bajaron las ventas en el norte",
          "Los sueldos",
          "El clima",
          "La competencia en el sur"
        ]
      },
      {
        "audio": "I would like to propose that we offer free coffee to all employees.",
        "pregunta": "¿Qué propone?",
        "opciones": [
          "Café gratis para todos los empleados",
          "Más vacaciones",
          "Un aumento de sueldo",
          "Trabajar desde casa"
        ]
      },
      {
        "audio": "What stands out about this restaurant is the view of the sea.",
        "pregunta": "¿Qué destaca del restaurante?",
        "opciones": [
          "La vista al mar",
          "La comida",
          "El precio",
          "El servicio"
        ]
      },
      {
        "audio": "The only drawback of the apartment is that it doesn't have parking.",
        "pregunta": "¿Cuál es la desventaja del departamento?",
        "opciones": [
          "No tiene estacionamiento",
          "Es caro",
          "Es pequeño",
          "Está lejos"
        ]
      },
      {
        "audio": "It is recommended that the bridge be closed until it is repaired.",
        "pregunta": "¿Qué se recomienda?",
        "opciones": [
          "Cerrar el puente hasta repararlo",
          "Usar el puente con cuidado",
          "Construir otro puente",
          "Nada"
        ]
      }
    ],
    "lectura": {
      "titulo": "Book review: «Pedro Páramo»",
      "texto": "Published in 1955, Pedro Páramo by Juan Rulfo is considered one of the most important novels in Latin American literature. The story begins when Juan Preciado travels to the town of Comala to find his father, a man called Pedro Páramo. However, he soon discovers that Comala is a ghost town, full of whispers and voices of the dead. What stands out about this short novel is its unique structure: the story is told in fragments, jumping between different times and narrators. At first, this can be confusing, and some readers may find it difficult to follow. Nevertheless, once you get used to the style, the book becomes absolutely gripping. Rulfo's language is simple but deeply poetic, and his portrait of rural Mexico, marked by poverty, violence and loneliness, is unforgettable. The only drawback, for some readers, may be the lack of a clear, linear plot. Overall, I would highly recommend it to anyone interested in Mexican culture or in literature that challenges the reader. It is a book that deserves to be read more than once.",
      "preguntas": [
        {
          "pregunta": "¿Cuándo se publicó Pedro Páramo?",
          "opciones": [
            "En 1955",
            "En 1975",
            "En 1935",
            "En 1965"
          ]
        },
        {
          "pregunta": "¿A qué va Juan Preciado a Comala?",
          "opciones": [
            "A buscar a su padre",
            "A trabajar",
            "A estudiar",
            "A visitar a su madre"
          ]
        },
        {
          "pregunta": "¿Qué destaca de la novela?",
          "opciones": [
            "Su estructura en fragmentos",
            "Su longitud",
            "Sus ilustraciones",
            "Su final feliz"
          ]
        },
        {
          "pregunta": "¿Cuál puede ser la desventaja para algunos lectores?",
          "opciones": [
            "La falta de una trama lineal",
            "Es muy larga",
            "El lenguaje es difícil",
            "Es muy cara"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa la frase de informe.",
        "pregunta": "The ___ of this report is to analyze the results.",
        "respuestas": [
          "purpose",
          "aim"
        ]
      },
      {
        "instruccion": "Completa la frase de informe.",
        "pregunta": "It was ___ that most students prefer online classes.",
        "respuestas": [
          "found"
        ]
      },
      {
        "instruccion": "Completa la frase de propuesta.",
        "pregunta": "I would like to ___ a new schedule.",
        "respuestas": [
          "propose",
          "suggest"
        ]
      },
      {
        "instruccion": "Completa la frase de propuesta.",
        "pregunta": "This ___ allow us to save money.",
        "respuestas": [
          "would"
        ]
      },
      {
        "instruccion": "Completa la frase de reseña.",
        "pregunta": "What ___ out is the beautiful photography.",
        "respuestas": [
          "stands"
        ]
      },
      {
        "instruccion": "Completa la frase de reseña.",
        "pregunta": "The only ___ is the long waiting time.",
        "respuestas": [
          "drawback",
          "disadvantage",
          "problem"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Se recomienda que…",
        "respuestas": [
          "It is recommended that",
          "It's recommended that"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "lo recomendaría ampliamente",
        "respuestas": [
          "I would highly recommend it",
          "I'd highly recommend it"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "buena relación calidad-precio",
        "respuestas": [
          "good value for money",
          "value for money",
          "excellent value for money"
        ]
      },
      {
        "instruccion": "Hazlo más formal.",
        "pregunta": "We found out that people like it. → It was ___ that people like it.",
        "respuestas": [
          "found",
          "discovered",
          "observed"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "Para empezar un informe:",
        "opciones": [
          "The purpose of this report is to…",
          "Hey everyone!",
          "Guess what…",
          "I'm gonna tell you…"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Para una propuesta:",
        "opciones": [
          "I would like to propose…",
          "It was found that…",
          "Once upon a time…",
          "What stands out is…"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Para una reseña:",
        "opciones": [
          "What stands out is…",
          "The purpose of this report is…",
          "Dear Sir or Madam…",
          "Please find attached…"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Overrated» significa:",
        "opciones": [
          "Sobrevalorado",
          "Excelente",
          "Barato",
          "Nuevo"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Feasible» significa:",
        "opciones": [
          "Factible",
          "Fácil",
          "Feo",
          "Famoso"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es más objetiva para un informe?",
        "opciones": [
          "It was observed that sales increased.",
          "I think sales went up a lot!",
          "Sales were super good.",
          "Wow, sales!"
        ]
      },
      {
        "tipo": "listening",
        "audio": "A survey was carried out among three hundred customers last month.",
        "pregunta": "¿A cuántos clientes se encuestó?",
        "opciones": [
          "Trescientos",
          "Treinta",
          "Tres mil",
          "Trece"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Overall, the restaurant offers excellent value for money.",
        "pregunta": "¿Qué ofrece el restaurante?",
        "opciones": [
          "Excelente relación calidad-precio",
          "Comida cara",
          "Mal servicio",
          "Música en vivo"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: hallazgos",
        "respuestas": [
          "findings"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: en general",
        "respuestas": [
          "overall",
          "on the whole",
          "in general"
        ]
      }
    ]
  }
];
