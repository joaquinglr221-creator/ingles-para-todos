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
        "Las cleft sentences son útiles para **corregir** a alguien: *No, **it wasn't** Pedro who called, **it was** Luis.*",
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
            "en": "It wasn't Pedro, it was Luis.",
            "es": "no fue Pedro, fue Luis",
            "imagen": "Dos hombres parecidos, uno señalado",
            "ejemplo": [
              "It wasn't Pedro who called, it was Luis.",
              "No fue Pedro quien llamó, fue Luis."
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
  { "id": "c1-07", "num": 7, "titulo": "El futuro en el pasado (was going to, was about to, would)", "contexto": "Planes que no se cumplieron" },
  { "id": "c1-08", "num": 8, "titulo": "El subjuntivo (I suggest that he be…, It's essential that…)", "contexto": "Recomendaciones formales" },
  { "id": "c1-09", "num": 9, "titulo": "Elipsis y sustitución (so, not, do so, one)", "contexto": "Evitar repeticiones" },
  { "id": "c1-10", "num": 10, "titulo": "Énfasis con auxiliares e intensificadores", "contexto": "Expresar sentimientos con fuerza" },
  { "id": "c1-11", "num": 11, "titulo": "Anteposición (fronting)", "contexto": "Estilo y énfasis" },
  { "id": "c1-12", "num": 12, "titulo": "Oraciones de relativo avanzadas (whereby, which referido a toda la oración)", "contexto": "Textos académicos" },
  { "id": "c1-13", "num": 13, "titulo": "Pasado irreal (It's high time, I'd rather you…, as if / as though)", "contexto": "Situaciones hipotéticas" },
  { "id": "c1-14", "num": 14, "titulo": "Lenguaje prudente (hedging: It would appear that…, seem, tend to)", "contexto": "Hablar con cautela" },
  { "id": "c1-15", "num": 15, "titulo": "Marcadores del discurso avanzados", "contexto": "Conversación y escritura fluida" },
  { "id": "c1-16", "num": 16, "titulo": "Nominalización", "contexto": "Escritura formal y académica" },
  { "id": "c1-17", "num": 17, "titulo": "Frases nominales complejas", "contexto": "Informes y descripciones" },
  { "id": "c1-18", "num": 18, "titulo": "Registro formal e informal", "contexto": "Correos, cartas y redes sociales" },
  { "id": "c1-19", "num": 19, "titulo": "Expresiones idiomáticas y collocations avanzadas", "contexto": "Inglés natural" },
  { "id": "c1-20", "num": 20, "titulo": "Escritura académica y profesional", "contexto": "Informes, propuestas y reseñas" }
];
