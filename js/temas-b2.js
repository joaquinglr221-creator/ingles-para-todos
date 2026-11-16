// Temas del nivel B2 (docs/plan-de-estudios.md). Los que todavía no tienen contenido solo llevan título.
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
const TEMAS_B2 = [
  {
    "id": "b2-01",
    "num": 1,
    "titulo": "Tiempos narrativos (pasado simple, continuo, perfecto y perfecto continuo)",
    "contexto": "Contar anécdotas",
    "explicacion": {
      "es": [
        "Para contar una **anécdota** se combinan cuatro tiempos del pasado. El **pasado simple** cuenta los **hechos principales** en orden: *I **got** on the bus, **sat** down and **fell** asleep.*",
        "El **pasado continuo** describe el **fondo** o una acción **en progreso** que se interrumpe: *It **was raining** and everybody **was rushing** home when I **saw** her.*",
        "El **pasado perfecto** cuenta algo que pasó **antes** del momento de la historia: *When I got to the station, the train **had** already **left**.*",
        "El **pasado perfecto continuo** subraya una actividad **larga** que venía pasando **antes** de otro momento, y muchas veces **explica** una situación: *I was exhausted because I**'d been working** for twelve hours.*"
      ],
      "tabla": {
        "columnas": [
          "Tiempo",
          "Función en la historia",
          "Ejemplo"
        ],
        "filas": [
          [
            "Pasado simple",
            "hechos principales, en orden",
            "She opened the door and screamed."
          ],
          [
            "Pasado continuo",
            "escena, acción interrumpida",
            "The wind was blowing hard."
          ],
          [
            "Pasado perfecto",
            "algo anterior",
            "Someone had broken the window."
          ],
          [
            "Pasado perfecto continuo",
            "actividad larga anterior",
            "She had been waiting for an hour."
          ]
        ]
      },
      "ojo": [
        "No abuses del pasado perfecto: si los hechos van **en orden**, basta el pasado simple: *I woke up, had a shower and left.*",
        "*When I arrived, she **left*** (se fue al llegar yo) ≠ *she **was leaving*** (iba saliendo) ≠ *she **had left*** (ya se había ido).",
        "Expresiones para anécdotas: ***It all started when… / The funny thing is… / To cut a long story short… / In the end… / Believe it or not…***",
        "Verbos de estado no van en continuo: *I **had known** her for years* ✅ (no *had been knowing*).",
        "***Just as*** = justo cuando: ***Just as** I was leaving, the phone rang.*"
      ],
      "en": [
        "To tell an anecdote, we use the past simple for the main events: I got on the bus, sat down and fell asleep.",
        "The past continuous describes the background: It was raining and everybody was rushing home.",
        "The past perfect describes something earlier: The train had already left.",
        "The past perfect continuous describes a long earlier activity: I was exhausted because I'd been working for twelve hours."
      ]
    },
    "vocabulario": [
      {
        "en": "It all started when",
        "es": "todo empezó cuando",
        "imagen": "Persona contando una historia a sus amigos alrededor de una mesa",
        "ejemplo": [
          "It all started when I lost my phone.",
          "Todo empezó cuando perdí mi celular."
        ]
      },
      {
        "en": "Believe it or not",
        "es": "aunque no lo creas",
        "imagen": "Persona con cara de asombro contando algo increíble",
        "ejemplo": [
          "Believe it or not, I met the president at the airport.",
          "Aunque no lo creas, conocí al presidente en el aeropuerto."
        ]
      },
      {
        "en": "To cut a long story short",
        "es": "en resumen / para no hacerla larga",
        "imagen": "Persona haciendo un gesto con la mano para resumir",
        "ejemplo": [
          "To cut a long story short, we missed the flight.",
          "Para no hacerla larga, perdimos el vuelo."
        ]
      },
      {
        "en": "The funny thing is",
        "es": "lo chistoso es que",
        "imagen": "Amigos riéndose de una anécdota",
        "ejemplo": [
          "The funny thing is that nobody noticed.",
          "Lo chistoso es que nadie se dio cuenta."
        ]
      },
      {
        "en": "just as",
        "es": "justo cuando",
        "imagen": "Persona a punto de salir cuando suena el teléfono",
        "ejemplo": [
          "Just as I was leaving, the phone rang.",
          "Justo cuando iba saliendo, sonó el teléfono."
        ]
      },
      {
        "en": "had already left",
        "es": "ya se había ido",
        "imagen": "Andén vacío con un tren alejándose",
        "ejemplo": [
          "When I arrived, the train had already left.",
          "Cuando llegué, el tren ya se había ido."
        ]
      },
      {
        "en": "had been waiting",
        "es": "había estado esperando",
        "imagen": "Persona impaciente sentada en una banca de la estación",
        "ejemplo": [
          "She had been waiting for over an hour.",
          "Llevaba más de una hora esperando."
        ]
      },
      {
        "en": "was pouring with rain",
        "es": "llovía a cántaros",
        "imagen": "Calle bajo una lluvia torrencial con paraguas",
        "ejemplo": [
          "It was pouring with rain when we left the party.",
          "Llovía a cántaros cuando salimos de la fiesta."
        ]
      },
      {
        "en": "all of a sudden",
        "es": "de repente",
        "imagen": "Persona sobresaltada en la oscuridad",
        "ejemplo": [
          "All of a sudden, the lights went out.",
          "De repente, se fue la luz."
        ]
      },
      {
        "en": "I couldn't believe my eyes",
        "es": "no podía creer lo que veía",
        "imagen": "Persona boquiabierta frente a un auto nuevo con un moño",
        "ejemplo": [
          "I couldn't believe my eyes when I saw the car.",
          "No podía creer lo que veía cuando vi el carro."
        ]
      },
      {
        "en": "it turned out",
        "es": "resultó que",
        "imagen": "Persona sorprendida leyendo un mensaje",
        "ejemplo": [
          "It turned out that she was my cousin's best friend.",
          "Resultó que era la mejor amiga de mi prima."
        ]
      },
      {
        "en": "I was about to",
        "es": "estaba a punto de",
        "imagen": "Persona con la mano en la perilla de la puerta",
        "ejemplo": [
          "I was about to leave when she called.",
          "Estaba a punto de irme cuando llamó."
        ]
      },
      {
        "en": "in the end",
        "es": "al final",
        "imagen": "Personas celebrando con alivio al final de un día largo",
        "ejemplo": [
          "In the end, everything was fine.",
          "Al final, todo salió bien."
        ]
      },
      {
        "en": "by the time",
        "es": "para cuando",
        "imagen": "Restaurante vacío con sillas sobre las mesas",
        "ejemplo": [
          "By the time we arrived, the kitchen had closed.",
          "Para cuando llegamos, la cocina ya había cerrado."
        ]
      },
      {
        "en": "I'd been working all day",
        "es": "había trabajado todo el día",
        "imagen": "Persona agotada quitándose los zapatos al llegar a casa",
        "ejemplo": [
          "I'd been working all day, so I fell asleep on the sofa.",
          "Había trabajado todo el día, así que me dormí en el sofá."
        ]
      },
      {
        "en": "I'll never forget",
        "es": "nunca olvidaré",
        "imagen": "Persona sonriendo con nostalgia mirando una foto",
        "ejemplo": [
          "I'll never forget the day I met my wife.",
          "Nunca olvidaré el día que conocí a mi esposa."
        ]
      }
    ],
    "grupos": [
      {
        "id": "reacciones",
        "titulo": "Reaccionar a una anécdota",
        "icono": "😲",
        "patron": [
          "No way!",
          "What happened next?",
          "You must have been…"
        ],
        "palabras": [
          {
            "en": "No way!",
            "es": "¡no inventes!",
            "imagen": "Amiga con la mano en la boca de sorpresa",
            "ejemplo": [
              "You met him at the supermarket? No way!",
              "¿Lo conociste en el súper? ¡No inventes!"
            ]
          },
          {
            "en": "What happened next?",
            "es": "¿y luego qué pasó?",
            "imagen": "Persona inclinada hacia adelante escuchando con interés",
            "ejemplo": [
              "And then? What happened next?",
              "¿Y luego? ¿Qué pasó después?"
            ]
          },
          {
            "en": "You're kidding!",
            "es": "¡estás bromeando!",
            "imagen": "Persona riéndose incrédula",
            "ejemplo": [
              "You won the lottery? You're kidding!",
              "¿Te ganaste la lotería? ¡Estás bromeando!"
            ]
          },
          {
            "en": "How embarrassing!",
            "es": "¡qué vergüenza!",
            "imagen": "Persona cubriéndose la cara riendo",
            "ejemplo": [
              "You called her by the wrong name? How embarrassing!",
              "¿Le dijiste otro nombre? ¡Qué vergüenza!"
            ]
          },
          {
            "en": "That's hilarious!",
            "es": "¡qué chistoso!",
            "imagen": "Amigos riendo a carcajadas",
            "ejemplo": [
              "That's hilarious! I can't stop laughing.",
              "¡Qué chistoso! No puedo parar de reír."
            ]
          },
          {
            "en": "Lucky you!",
            "es": "¡qué suerte!",
            "imagen": "Persona mostrando un boleto ganador",
            "ejemplo": [
              "You got free tickets? Lucky you!",
              "¿Te dieron boletos gratis? ¡Qué suerte!"
            ]
          },
          {
            "en": "That must have been scary.",
            "es": "debió de dar miedo",
            "imagen": "Persona escuchando con cara de preocupación",
            "ejemplo": [
              "That must have been really scary.",
              "Debió de dar mucho miedo."
            ]
          },
          {
            "en": "Go on!",
            "es": "¡sigue!",
            "imagen": "Persona animando a otra a seguir contando",
            "ejemplo": [
              "Go on! I want to know the end.",
              "¡Sigue! Quiero saber el final."
            ]
          }
        ]
      },
      {
        "id": "secuencia",
        "titulo": "Ordenar la historia",
        "icono": "🧩",
        "patron": [
          "At first…",
          "Meanwhile…",
          "Eventually…"
        ],
        "palabras": [
          {
            "en": "at first",
            "es": "al principio",
            "imagen": "Persona nerviosa en su primer día",
            "ejemplo": [
              "At first, I didn't recognize him.",
              "Al principio no lo reconocí."
            ]
          },
          {
            "en": "meanwhile",
            "es": "mientras tanto",
            "imagen": "Pantalla dividida con dos personas haciendo cosas distintas",
            "ejemplo": [
              "Meanwhile, my wife was looking for me everywhere.",
              "Mientras tanto, mi esposa me buscaba por todos lados."
            ]
          },
          {
            "en": "eventually",
            "es": "finalmente / con el tiempo",
            "imagen": "Persona llegando por fin a la cima de una montaña",
            "ejemplo": [
              "Eventually, we found the right road.",
              "Finalmente encontramos el camino correcto."
            ]
          },
          {
            "en": "the moment",
            "es": "en el momento en que",
            "imagen": "Persona abriendo la puerta y viendo una sorpresa",
            "ejemplo": [
              "The moment I opened the door, everybody shouted.",
              "En el momento en que abrí la puerta, todos gritaron."
            ]
          },
          {
            "en": "a few minutes later",
            "es": "unos minutos después",
            "imagen": "Reloj de pared avanzando",
            "ejemplo": [
              "A few minutes later, the police arrived.",
              "Unos minutos después, llegó la policía."
            ]
          },
          {
            "en": "as soon as",
            "es": "en cuanto",
            "imagen": "Persona corriendo hacia la salida al sonar la campana",
            "ejemplo": [
              "As soon as I saw her, I knew something was wrong.",
              "En cuanto la vi, supe que algo andaba mal."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "It all started when I lost my phone.",
        "es": "Todo empezó cuando perdí mi celular."
      },
      {
        "en": "Just as I was leaving, the phone rang.",
        "es": "Justo cuando iba saliendo, sonó el teléfono."
      },
      {
        "en": "When I arrived, the train had already left.",
        "es": "Cuando llegué, el tren ya se había ido."
      },
      {
        "en": "She had been waiting for over an hour.",
        "es": "Llevaba más de una hora esperando."
      },
      {
        "en": "All of a sudden, the lights went out.",
        "es": "De repente, se fue la luz."
      },
      {
        "en": "It turned out that she was my cousin's best friend.",
        "es": "Resultó que era la mejor amiga de mi prima."
      },
      {
        "en": "By the time we arrived, the kitchen had closed.",
        "es": "Para cuando llegamos, la cocina ya había cerrado."
      },
      {
        "en": "You met him at the supermarket? No way!",
        "es": "¿Lo conociste en el súper? ¡No inventes!"
      },
      {
        "en": "To cut a long story short, we missed the flight.",
        "es": "Para no hacerla larga, perdimos el vuelo."
      },
      {
        "en": "I'd been working all day, so I fell asleep on the sofa.",
        "es": "Había trabajado todo el día, así que me dormí en el sofá."
      }
    ],
    "frases": [
      {
        "en": "I was walking home late one night when I noticed that someone had been following me for several blocks.",
        "es": "Iba caminando a casa una noche cuando me di cuenta de que alguien me había estado siguiendo varias cuadras.",
        "imagen": "Calle de noche con una persona caminando y una sombra detrás"
      },
      {
        "en": "We'd been driving for six hours when the car suddenly broke down in the middle of the desert.",
        "es": "Llevábamos seis horas manejando cuando de repente el carro se descompuso en medio del desierto.",
        "imagen": "Carro descompuesto en una carretera del desierto con el cofre abierto"
      },
      {
        "en": "By the time the firefighters arrived, the neighbors had already put out the fire with buckets of water.",
        "es": "Para cuando llegaron los bomberos, los vecinos ya habían apagado el fuego con cubetas de agua.",
        "imagen": "Vecinos con cubetas junto a una casa con humo"
      },
      {
        "en": "It was pouring with rain, and I hadn't brought an umbrella, so I arrived at the interview completely soaked.",
        "es": "Llovía a cántaros y no había llevado paraguas, así que llegué a la entrevista empapado.",
        "imagen": "Persona empapada entrando a una oficina elegante"
      },
      {
        "en": "Believe it or not, the man I had been sitting next to on the plane turned out to be my new boss.",
        "es": "Aunque no lo creas, el hombre que se había sentado junto a mí en el avión resultó ser mi nuevo jefe.",
        "imagen": "Dos personas reconociéndose con sorpresa en una oficina"
      },
      {
        "en": "I'd never been so nervous in my life: my hands were shaking and my heart was beating fast.",
        "es": "Nunca había estado tan nervioso en mi vida: me temblaban las manos y el corazón me latía rápido.",
        "imagen": "Persona nerviosa detrás del escenario antes de salir"
      },
      {
        "en": "Just as we were sitting down to eat, the doorbell rang and twelve relatives walked in.",
        "es": "Justo cuando nos sentábamos a comer, sonó el timbre y entraron doce parientes.",
        "imagen": "Familia sorprendida en la mesa con muchos parientes entrando"
      },
      {
        "en": "She had been studying for months, so when she failed the exam, she couldn't believe it.",
        "es": "Llevaba meses estudiando, así que cuando reprobó el examen, no lo podía creer.",
        "imagen": "Estudiante desilusionada mirando sus resultados"
      },
      {
        "en": "To cut a long story short, we got lost, ran out of gas and spent the night in a tiny village.",
        "es": "Para no hacerla larga, nos perdimos, nos quedamos sin gasolina y pasamos la noche en un pueblito.",
        "imagen": "Carro estacionado en la plaza de un pueblito de noche"
      },
      {
        "en": "In the end, it was the best trip we'd ever had, and we still laugh about it.",
        "es": "Al final, fue el mejor viaje que habíamos tenido y todavía nos reímos de él.",
        "imagen": "Amigos riendo mientras ven fotos de un viaje"
      }
    ],
    "listening": [
      {
        "audio": "I'd been looking for my glasses all morning, and then I realized they were on my head.",
        "pregunta": "¿Dónde estaban los lentes?",
        "opciones": [
          "En su cabeza",
          "En el carro",
          "En la cocina",
          "En su bolsa"
        ]
      },
      {
        "audio": "When we got to the cinema, the movie had already started, so we watched it from the back.",
        "pregunta": "¿Por qué vieron la película desde atrás?",
        "opciones": [
          "Ya había empezado",
          "No había lugares",
          "Les gusta atrás",
          "Llegaron muy temprano"
        ]
      },
      {
        "audio": "Just as I was getting into the shower, the water stopped.",
        "pregunta": "¿Qué pasó?",
        "opciones": [
          "Se cortó el agua",
          "Se fue la luz",
          "Sonó el teléfono",
          "Tocaron la puerta"
        ]
      },
      {
        "audio": "It turned out that the man I'd been talking to was the owner of the restaurant.",
        "pregunta": "¿Quién era el hombre?",
        "opciones": [
          "El dueño del restaurante",
          "Un mesero",
          "Un cliente",
          "El cocinero"
        ]
      },
      {
        "audio": "We had been planning the trip for months, but in the end we had to cancel it because my father got sick.",
        "pregunta": "¿Por qué cancelaron el viaje?",
        "opciones": [
          "El papá se enfermó",
          "No tenían dinero",
          "Perdieron el vuelo",
          "Hubo una tormenta"
        ]
      }
    ],
    "lectura": {
      "titulo": "The day I met my hero",
      "texto": "I'll never forget the summer of 2019. I had been saving money for two years to go to a concert by my favorite band in Mexico City. The night before, I hadn't slept at all because I was so excited. On the day of the concert, it was pouring with rain, and the traffic was terrible. By the time I arrived at the stadium, the first band had already finished, and I was soaking wet. I was looking for my seat when, all of a sudden, a security guard stopped me. I thought I had done something wrong. It turned out that he had been watching me dance in the rain and wanted to know if I was a real fan. He asked me three questions about the band, and I answered them all correctly. Then he took me backstage! To cut a long story short, I met the lead singer, who signed my wet T-shirt. I still have it, of course, framed on my bedroom wall.",
      "preguntas": [
        {
          "pregunta": "¿Cuánto tiempo había ahorrado para el concierto?",
          "opciones": [
            "Dos años",
            "Dos meses",
            "Un año",
            "Seis meses"
          ]
        },
        {
          "pregunta": "¿Por qué llegó empapado?",
          "opciones": [
            "Llovía a cántaros",
            "Se cayó en una fuente",
            "Lo mojaron en el concierto",
            "Sudó mucho"
          ]
        },
        {
          "pregunta": "¿Por qué lo detuvo el guardia?",
          "opciones": [
            "Quería saber si era un verdadero fan",
            "Había hecho algo malo",
            "No tenía boleto",
            "Estaba en el lugar equivocado"
          ]
        },
        {
          "pregunta": "¿Dónde está ahora la playera firmada?",
          "opciones": [
            "Enmarcada en la pared de su cuarto",
            "En un museo",
            "La vendió",
            "La perdió"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con el tiempo narrativo correcto.",
        "pregunta": "When I arrived, the party ___ (already / finish).",
        "respuestas": [
          "had already finished"
        ]
      },
      {
        "instruccion": "Completa con el tiempo narrativo correcto.",
        "pregunta": "It ___ (snow) when we left the house.",
        "respuestas": [
          "was snowing"
        ]
      },
      {
        "instruccion": "Completa con el tiempo narrativo correcto.",
        "pregunta": "She was tired because she ___ (run) for an hour.",
        "respuestas": [
          "had been running",
          "'d been running"
        ]
      },
      {
        "instruccion": "Completa con el tiempo narrativo correcto.",
        "pregunta": "I ___ (open) the door and saw a strange man.",
        "respuestas": [
          "opened"
        ]
      },
      {
        "instruccion": "Completa con el tiempo narrativo correcto.",
        "pregunta": "Just as I ___ (leave), my boss called me.",
        "respuestas": [
          "was leaving"
        ]
      },
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "To cut a long ___ short, we got married.",
        "respuestas": [
          "story"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Cuando llegué, ya se había ido.",
        "respuestas": [
          "When I arrived, she had already left",
          "When I arrived, he had already left",
          "When I got there, she had already left",
          "When I got there, he had already left"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "aunque no lo creas",
        "respuestas": [
          "believe it or not"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Llevaba una hora esperando.",
        "respuestas": [
          "I had been waiting for an hour",
          "I'd been waiting for an hour",
          "She had been waiting for an hour",
          "He had been waiting for an hour"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I had been knowing him for years.",
        "respuestas": [
          "I had known him for years",
          "I'd known him for years"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "While I ___ dinner, the lights went out.",
        "opciones": [
          "was cooking",
          "cooked",
          "had cooked",
          "have cooked"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "By the time the police came, the thief ___.",
        "opciones": [
          "had escaped",
          "escaped",
          "was escaping",
          "has escaped"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Her eyes were red because she ___.",
        "opciones": [
          "had been crying",
          "cried",
          "has cried",
          "was cry"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I got up, ___ a shower and left.",
        "opciones": [
          "had",
          "was having",
          "had had",
          "have had"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«It turned out that…» significa:",
        "opciones": [
          "Resultó que…",
          "Se apagó…",
          "Dio la vuelta…",
          "Se convirtió…"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Para reaccionar con sorpresa:",
        "opciones": [
          "No way!",
          "In the end.",
          "At first.",
          "Meanwhile."
        ]
      },
      {
        "tipo": "listening",
        "audio": "I had been living in Tijuana for ten years when I finally visited San Diego.",
        "pregunta": "¿Cuánto tiempo llevaba en Tijuana?",
        "opciones": [
          "Diez años",
          "Dos años",
          "Un año",
          "Veinte años"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The moment I saw the dog, I knew it was the one we had lost two years before.",
        "pregunta": "¿Cuándo habían perdido al perro?",
        "opciones": [
          "Dos años antes",
          "Dos días antes",
          "La semana anterior",
          "Dos meses antes"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: De repente, se fue la luz.",
        "respuestas": [
          "All of a sudden, the lights went out",
          "Suddenly, the lights went out",
          "All of a sudden the lights went out",
          "Suddenly the power went out"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Estaba a punto de irme.",
        "respuestas": [
          "I was about to leave",
          "I was about to go"
        ]
      }
    ]
  },
  {
    "id": "b2-02",
    "num": 2,
    "titulo": "Pasado perfecto continuo",
    "contexto": "Lo que había estado pasando",
    "explicacion": {
      "es": [
        "El **pasado perfecto continuo** (*had been* + *-ing*) habla de una actividad que **había estado pasando durante un tiempo** antes de otro momento del pasado: *When I met her, she **had been living** in Madrid for three years.* (Cuando la conocí, llevaba tres años viviendo en Madrid.)",
        "Se usa mucho para **explicar causas**: lo que se veía o sentía era el resultado de una actividad anterior: *The ground was wet. It **had been raining**.* *He was out of breath because he **had been running**.*",
        "Va con ***for, since, all day, how long***: ***How long had** you **been waiting** when the bus came?* Negativo: ***hadn't been** + -ing*: *I **hadn't been sleeping** well, so I went to the doctor.*",
        "Compara con el **pasado perfecto simple**, que se fija en el **resultado o la cantidad**: *She **had written** three chapters* (resultado) / *She **had been writing** all morning* (actividad, duración)."
      ],
      "tabla": {
        "columnas": [
          "Forma",
          "Uso",
          "Ejemplo"
        ],
        "filas": [
          [
            "had been + -ing",
            "duración antes de un momento pasado",
            "We had been driving for hours."
          ],
          [
            "had been + -ing",
            "causa de una situación pasada",
            "Her eyes were red. She had been crying."
          ],
          [
            "had + participio",
            "resultado o cantidad",
            "I had read five books by June."
          ],
          [
            "How long had…been…?",
            "pregunta",
            "How long had he been working there?"
          ]
        ]
      },
      "ojo": [
        "En español: *llevaba / había estado + gerundio*. «Llevaba dos horas esperando» = ***I had been waiting for two hours***.",
        "Verbos de estado (*know, have, believe, want*) van en pasado perfecto simple: *I **had known** him since school* ✅.",
        "No lo uses si la acción fue **corta**: *I **had lost** my keys* ✅ (no *had been losing*).",
        "Se contrae ***I'd been, she'd been, they'd been***: *We**'d been** dating for a year when he proposed.*",
        "Es muy común en **estilo indirecto**: *«I've been working hard» → She said she **had been working** hard.*"
      ],
      "en": [
        "The past perfect continuous describes an activity that had been happening before a moment in the past: When I met her, she had been living in Madrid for three years.",
        "It often explains causes: The ground was wet. It had been raining.",
        "How long had you been waiting when the bus came?",
        "Compare: She had written three chapters. She had been writing all morning."
      ]
    },
    "vocabulario": [
      {
        "en": "It had been raining.",
        "es": "había estado lloviendo",
        "imagen": "Calle mojada con charcos y el sol saliendo",
        "ejemplo": [
          "The streets were wet. It had been raining all night.",
          "Las calles estaban mojadas. Había llovido toda la noche."
        ]
      },
      {
        "en": "She had been crying.",
        "es": "había estado llorando",
        "imagen": "Mujer con los ojos rojos sosteniendo un pañuelo",
        "ejemplo": [
          "Her eyes were red. She had been crying.",
          "Tenía los ojos rojos. Había estado llorando."
        ]
      },
      {
        "en": "He had been running.",
        "es": "había estado corriendo",
        "imagen": "Hombre sudado respirando agitado en un parque",
        "ejemplo": [
          "He was out of breath because he had been running.",
          "Estaba sin aliento porque había estado corriendo."
        ]
      },
      {
        "en": "We had been waiting for hours.",
        "es": "llevábamos horas esperando",
        "imagen": "Pasajeros cansados en una sala de espera",
        "ejemplo": [
          "We had been waiting for hours when they canceled the flight.",
          "Llevábamos horas esperando cuando cancelaron el vuelo."
        ]
      },
      {
        "en": "They had been dating for a year.",
        "es": "llevaban un año saliendo",
        "imagen": "Pareja joven en una cena romántica",
        "ejemplo": [
          "They had been dating for a year when he proposed.",
          "Llevaban un año saliendo cuando él le propuso matrimonio."
        ]
      },
      {
        "en": "I'd been working too hard.",
        "es": "había estado trabajando demasiado",
        "imagen": "Persona agotada con la cabeza sobre el escritorio",
        "ejemplo": [
          "I got sick because I'd been working too hard.",
          "Me enfermé porque había estado trabajando demasiado."
        ]
      },
      {
        "en": "How long had you been living there?",
        "es": "¿cuánto tiempo llevabas viviendo ahí?",
        "imagen": "Persona mirando una casa antigua con nostalgia",
        "ejemplo": [
          "How long had you been living there when you moved?",
          "¿Cuánto tiempo llevabas viviendo ahí cuando te mudaste?"
        ]
      },
      {
        "en": "I hadn't been sleeping well.",
        "es": "no había estado durmiendo bien",
        "imagen": "Persona despierta en la cama mirando el techo",
        "ejemplo": [
          "I hadn't been sleeping well, so I went to the doctor.",
          "No había estado durmiendo bien, así que fui al doctor."
        ]
      },
      {
        "en": "The kids had been playing in the mud.",
        "es": "los niños habían estado jugando en el lodo",
        "imagen": "Niños llenos de lodo en el jardín",
        "ejemplo": [
          "The kids were dirty. They had been playing in the mud.",
          "Los niños estaban sucios. Habían estado jugando en el lodo."
        ]
      },
      {
        "en": "She had been saving for years.",
        "es": "llevaba años ahorrando",
        "imagen": "Mujer contando ahorros en un frasco de vidrio",
        "ejemplo": [
          "She had been saving for years to buy a house.",
          "Llevaba años ahorrando para comprar una casa."
        ]
      },
      {
        "en": "He'd been drinking coffee all day.",
        "es": "había tomado café todo el día",
        "imagen": "Varias tazas vacías junto a una laptop",
        "ejemplo": [
          "He couldn't sleep because he'd been drinking coffee all day.",
          "No podía dormir porque había tomado café todo el día."
        ]
      },
      {
        "en": "They had been arguing.",
        "es": "habían estado discutiendo",
        "imagen": "Pareja con caras serias en la cocina",
        "ejemplo": [
          "You could tell they had been arguing.",
          "Se notaba que habían estado discutiendo."
        ]
      },
      {
        "en": "We'd been driving all night.",
        "es": "habíamos manejado toda la noche",
        "imagen": "Carro llegando al amanecer a una playa",
        "ejemplo": [
          "We'd been driving all night, so we were exhausted.",
          "Habíamos manejado toda la noche, así que estábamos agotados."
        ]
      },
      {
        "en": "I had been studying English for two years.",
        "es": "llevaba dos años estudiando inglés",
        "imagen": "Persona estudiando con libros y audífonos",
        "ejemplo": [
          "I had been studying English for two years before I traveled to London.",
          "Llevaba dos años estudiando inglés antes de viajar a Londres."
        ]
      },
      {
        "en": "The phone had been ringing.",
        "es": "el teléfono había estado sonando",
        "imagen": "Teléfono fijo sobre una mesa con luz parpadeante",
        "ejemplo": [
          "The phone had been ringing for ages before anyone answered.",
          "El teléfono llevaba rato sonando antes de que alguien contestara."
        ]
      },
      {
        "en": "He had been working there since 1990.",
        "es": "trabajaba ahí desde 1990",
        "imagen": "Empleado mayor recibiendo un reconocimiento",
        "ejemplo": [
          "He had been working there since 1990 when he retired.",
          "Trabajaba ahí desde 1990 cuando se jubiló."
        ]
      }
    ],
    "grupos": [
      {
        "id": "pistas",
        "titulo": "Pistas y causas",
        "icono": "🔍",
        "patron": [
          "…because she had been…",
          "It was obvious that…",
          "You could tell that…"
        ],
        "palabras": [
          {
            "en": "covered in paint",
            "es": "lleno de pintura",
            "imagen": "Persona con manchas de pintura en la ropa",
            "ejemplo": [
              "He was covered in paint because he had been painting the fence.",
              "Estaba lleno de pintura porque había estado pintando la barda."
            ]
          },
          {
            "en": "out of breath",
            "es": "sin aliento",
            "imagen": "Persona recargada en una pared respirando fuerte",
            "ejemplo": [
              "I was out of breath because I'd been climbing the stairs.",
              "Estaba sin aliento porque había estado subiendo las escaleras."
            ]
          },
          {
            "en": "sunburned",
            "es": "quemado por el sol",
            "imagen": "Persona con la piel roja en la playa",
            "ejemplo": [
              "She was sunburned because she'd been lying on the beach all day.",
              "Estaba quemada porque había estado acostada en la playa todo el día."
            ]
          },
          {
            "en": "exhausted",
            "es": "agotado",
            "imagen": "Persona dormida en el sofá con la ropa del trabajo",
            "ejemplo": [
              "They were exhausted because they'd been moving furniture.",
              "Estaban agotados porque habían estado moviendo muebles."
            ]
          },
          {
            "en": "You could tell",
            "es": "se notaba",
            "imagen": "Persona con la cara roja de vergüenza",
            "ejemplo": [
              "You could tell she had been crying.",
              "Se notaba que había estado llorando."
            ]
          },
          {
            "en": "It was obvious",
            "es": "era obvio",
            "imagen": "Cocina desordenada con harina por todos lados",
            "ejemplo": [
              "It was obvious that the kids had been baking.",
              "Era obvio que los niños habían estado horneando."
            ]
          }
        ]
      },
      {
        "id": "duracion",
        "titulo": "Duración",
        "icono": "⏳",
        "patron": [
          "for ages",
          "all along",
          "since early morning"
        ],
        "palabras": [
          {
            "en": "for ages",
            "es": "desde hacía siglos",
            "imagen": "Persona sacudiendo una guitarra empolvada",
            "ejemplo": [
              "I hadn't played the guitar for ages.",
              "Hacía siglos que no tocaba la guitarra."
            ]
          },
          {
            "en": "all morning",
            "es": "toda la mañana",
            "imagen": "Persona con muchas llamadas en la oficina",
            "ejemplo": [
              "She had been on the phone all morning.",
              "Había estado en el teléfono toda la mañana."
            ]
          },
          {
            "en": "since early morning",
            "es": "desde temprano",
            "imagen": "Amanecer con un pescador ya en su lancha",
            "ejemplo": [
              "He had been fishing since early morning.",
              "Había estado pescando desde temprano."
            ]
          },
          {
            "en": "for a while",
            "es": "desde hacía un rato",
            "imagen": "Persona esperando en la sala con una revista",
            "ejemplo": [
              "I had been waiting for a while when she arrived.",
              "Llevaba un rato esperando cuando ella llegó."
            ]
          },
          {
            "en": "nonstop",
            "es": "sin parar",
            "imagen": "Ventana con lluvia intensa",
            "ejemplo": [
              "It had been raining nonstop for three days.",
              "Llevaba tres días lloviendo sin parar."
            ]
          },
          {
            "en": "over the previous months",
            "es": "durante los meses anteriores",
            "imagen": "Calendario con varios meses marcados",
            "ejemplo": [
              "She had been training hard over the previous months.",
              "Había entrenado duro durante los meses anteriores."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "The streets were wet. It had been raining all night.",
        "es": "Las calles estaban mojadas. Había llovido toda la noche."
      },
      {
        "en": "Her eyes were red. She had been crying.",
        "es": "Tenía los ojos rojos. Había estado llorando."
      },
      {
        "en": "We had been waiting for hours when they canceled the flight.",
        "es": "Llevábamos horas esperando cuando cancelaron el vuelo."
      },
      {
        "en": "They had been dating for a year when he proposed.",
        "es": "Llevaban un año saliendo cuando él le propuso matrimonio."
      },
      {
        "en": "I hadn't been sleeping well, so I went to the doctor.",
        "es": "No había estado durmiendo bien, así que fui al doctor."
      },
      {
        "en": "He couldn't sleep because he'd been drinking coffee all day.",
        "es": "No podía dormir porque había tomado café todo el día."
      },
      {
        "en": "You could tell she had been crying.",
        "es": "Se notaba que había estado llorando."
      },
      {
        "en": "It had been raining nonstop for three days.",
        "es": "Llevaba tres días lloviendo sin parar."
      },
      {
        "en": "She had written three chapters by Friday.",
        "es": "Para el viernes había escrito tres capítulos.",
        "imagen": "Escritora con una pila de hojas escritas"
      },
      {
        "en": "How long had you been living there when you moved?",
        "es": "¿Cuánto tiempo llevabas viviendo ahí cuando te mudaste?"
      }
    ],
    "frases": [
      {
        "en": "When the doctor finally saw me, I had been sitting in the waiting room for almost three hours.",
        "es": "Cuando por fin me atendió el doctor, llevaba casi tres horas sentado en la sala de espera.",
        "imagen": "Sala de espera de un hospital con pacientes cansados"
      },
      {
        "en": "They had been living in the same house for forty years, so leaving it was very hard.",
        "es": "Llevaban cuarenta años viviendo en la misma casa, así que dejarla fue muy difícil.",
        "imagen": "Pareja mayor mirando su casa vacía antes de mudarse"
      },
      {
        "en": "The kitchen smelled delicious because my grandmother had been cooking since six in the morning.",
        "es": "La cocina olía delicioso porque mi abuela había estado cocinando desde las seis de la mañana.",
        "imagen": "Abuela con varias ollas humeantes en la estufa"
      },
      {
        "en": "He failed the test, even though he had been studying for weeks.",
        "es": "Reprobó el examen, aunque había estado estudiando por semanas.",
        "imagen": "Estudiante frustrado con un examen reprobado y libros alrededor"
      },
      {
        "en": "We had been walking for hours in the mountains when we finally saw the lake.",
        "es": "Llevábamos horas caminando en las montañas cuando por fin vimos el lago.",
        "imagen": "Excursionistas en la cima viendo un lago azul"
      },
      {
        "en": "I could tell that my son had been playing video games instead of doing his homework.",
        "es": "Me di cuenta de que mi hijo había estado jugando videojuegos en lugar de hacer la tarea.",
        "imagen": "Adolescente escondiendo un control mientras su mamá entra"
      },
      {
        "en": "The company had been losing money for years before it finally closed.",
        "es": "La empresa llevaba años perdiendo dinero antes de cerrar por fin.",
        "imagen": "Fábrica cerrada con la cortina abajo"
      },
      {
        "en": "By the time she won the gold medal, she had been training every day for eight years.",
        "es": "Para cuando ganó la medalla de oro, llevaba ocho años entrenando todos los días.",
        "imagen": "Atleta en el podio con una medalla de oro"
      },
      {
        "en": "They were tired and dirty because they had been helping the neighbors after the flood.",
        "es": "Estaban cansados y sucios porque habían estado ayudando a los vecinos después de la inundación.",
        "imagen": "Voluntarios limpiando lodo de una casa"
      },
      {
        "en": "How long had you been working at the bank before you decided to start your own business?",
        "es": "¿Cuánto tiempo llevabas trabajando en el banco antes de decidir poner tu propio negocio?",
        "imagen": "Persona abriendo su propio café después de dejar una oficina"
      }
    ],
    "listening": [
      {
        "audio": "When I arrived, my sister was furious. She had been waiting for me for forty minutes.",
        "pregunta": "¿Por qué estaba furiosa la hermana?",
        "opciones": [
          "Llevaba cuarenta minutos esperando",
          "Perdió su celular",
          "Llovía",
          "Llegó tarde"
        ]
      },
      {
        "audio": "The grass was wet because the neighbors had been watering their garden.",
        "pregunta": "¿Por qué estaba mojado el pasto?",
        "opciones": [
          "Los vecinos habían regado",
          "Había llovido",
          "Se rompió una tubería",
          "Lavaron el carro"
        ]
      },
      {
        "audio": "He had been working at the factory for thirty years when it closed.",
        "pregunta": "¿Cuánto tiempo llevaba en la fábrica?",
        "opciones": [
          "Treinta años",
          "Trece años",
          "Tres años",
          "Veinte años"
        ]
      },
      {
        "audio": "I hadn't been feeling well for days, so finally I went to the hospital.",
        "pregunta": "¿Qué hizo al final?",
        "opciones": [
          "Fue al hospital",
          "Se quedó en casa",
          "Llamó a su mamá",
          "Tomó vacaciones"
        ]
      },
      {
        "audio": "We'd been planning the party for weeks, but nobody came because of the storm.",
        "pregunta": "¿Por qué no llegó nadie?",
        "opciones": [
          "Por la tormenta",
          "Se equivocaron de día",
          "No los invitaron",
          "Había tráfico"
        ]
      }
    ],
    "lectura": {
      "titulo": "The long wait",
      "texto": "In 1998, María left her small town in Zacatecas to work in Chicago. She had been dreaming of a better life for her children, but leaving them with their grandmother was the hardest decision she had ever made. For years, she worked in a restaurant kitchen during the day and cleaned offices at night. She had been sending money home every month, and she had been saving a little for the future. Her children grew up talking to her on the phone every Sunday. By 2010, she had been living in Chicago for twelve years, and she had finally saved enough to open her own small restaurant back in Mexico. When she arrived at the bus station in Zacatecas, her children, now adults, were waiting for her. They had been preparing a surprise party for weeks. Her daughter later said that her mother had been crying with happiness for the whole evening.",
      "preguntas": [
        {
          "pregunta": "¿Por qué se fue María a Chicago?",
          "opciones": [
            "Buscaba una vida mejor para sus hijos",
            "Para estudiar",
            "Por su esposo",
            "Para conocer el mundo"
          ]
        },
        {
          "pregunta": "¿Con quién se quedaron sus hijos?",
          "opciones": [
            "Con su abuela",
            "Con su papá",
            "Con una tía",
            "Se fueron con ella"
          ]
        },
        {
          "pregunta": "¿Cuántos años llevaba en Chicago en 2010?",
          "opciones": [
            "Doce",
            "Diez",
            "Ocho",
            "Veinte"
          ]
        },
        {
          "pregunta": "¿Qué hicieron sus hijos para su regreso?",
          "opciones": [
            "Una fiesta sorpresa",
            "Le compraron una casa",
            "Abrieron el restaurante",
            "Nada"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con el pasado perfecto continuo.",
        "pregunta": "The ground was wet. It ___ (rain).",
        "respuestas": [
          "had been raining",
          "'d been raining"
        ]
      },
      {
        "instruccion": "Completa con el pasado perfecto continuo.",
        "pregunta": "We ___ (wait) for an hour when the bus arrived.",
        "respuestas": [
          "had been waiting",
          "'d been waiting"
        ]
      },
      {
        "instruccion": "Completa con el pasado perfecto continuo.",
        "pregunta": "She was tired because she ___ (work) all night.",
        "respuestas": [
          "had been working",
          "'d been working"
        ]
      },
      {
        "instruccion": "Completa la pregunta.",
        "pregunta": "How long had you ___ studying before the exam?",
        "respuestas": [
          "been"
        ]
      },
      {
        "instruccion": "Elige simple o continuo.",
        "pregunta": "I ___ (know) her for years before we became friends.",
        "respuestas": [
          "had known",
          "'d known"
        ]
      },
      {
        "instruccion": "Escribe en negativo.",
        "pregunta": "I had been sleeping well. → I ___ sleeping well.",
        "respuestas": [
          "hadn't been",
          "had not been"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Llevaba dos horas esperando.",
        "respuestas": [
          "I had been waiting for two hours",
          "I'd been waiting for two hours"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Había estado llorando.",
        "respuestas": [
          "She had been crying",
          "He had been crying",
          "She'd been crying",
          "He'd been crying",
          "I had been crying"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "se notaba que",
        "respuestas": [
          "you could tell that",
          "you could tell",
          "it was obvious that"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I had been losing my keys, so I couldn't get in.",
        "respuestas": [
          "I had lost my keys, so I couldn't get in",
          "I'd lost my keys, so I couldn't get in"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "His hands were dirty because he ___ in the garden.",
        "opciones": [
          "had been working",
          "has been working",
          "was work",
          "had work"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "How long ___ you been living there?",
        "opciones": [
          "had",
          "have had",
          "did",
          "were"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "By June, she ___ five chapters.",
        "opciones": [
          "had written",
          "had been writing",
          "has written",
          "was writing"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I ___ him since we were kids.",
        "opciones": [
          "had known",
          "had been knowing",
          "was knowing",
          "knew been"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Llevaba años ahorrando» =",
        "opciones": [
          "She had been saving for years.",
          "She saved years ago.",
          "She has saved for years ago.",
          "She was save for years."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«You could tell that…» significa:",
        "opciones": [
          "Se notaba que…",
          "Podías decir que…",
          "Me contaste que…",
          "No sabías que…"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The baby was finally asleep. He had been crying since midnight.",
        "pregunta": "¿Desde cuándo lloraba el bebé?",
        "opciones": [
          "Desde la medianoche",
          "Desde la mañana",
          "Desde el mediodía",
          "Toda la tarde"
        ]
      },
      {
        "tipo": "listening",
        "audio": "They had been traveling for six months when they decided to come back home.",
        "pregunta": "¿Cuánto tiempo llevaban viajando?",
        "opciones": [
          "Seis meses",
          "Seis semanas",
          "Un año",
          "Dos meses"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Había estado lloviendo.",
        "respuestas": [
          "It had been raining",
          "It'd been raining"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: No había estado durmiendo bien.",
        "respuestas": [
          "I hadn't been sleeping well",
          "I had not been sleeping well"
        ]
      }
    ]
  },
  {
    "id": "b2-03",
    "num": 3,
    "titulo": "Presente perfecto simple vs. continuo",
    "contexto": "Proyectos en curso",
    "explicacion": {
      "es": [
        "El **presente perfecto simple** (*have / has* + participio) se fija en el **resultado**, en lo **terminado** o en **cuántos / cuántas veces**: *I**'ve written** three reports this week.* (Ya escribí tres reportes.)",
        "El **presente perfecto continuo** (*have / has been* + *-ing*) se fija en la **actividad** y su **duración**, muchas veces **sin terminar**: *I**'ve been writing** reports all week.* (Me he pasado la semana escribiendo reportes.)",
        "Por eso, con ***how many / how much*** se usa el simple, y con ***how long*** normalmente el continuo: *How many emails **have** you **answered**? / How long **have** you **been working** on this project?*",
        "El continuo también explica **evidencias del presente**: *Your hands are dirty. **Have** you **been gardening**?* Y suena más **temporal**: *I**'ve been living** with my parents* (por ahora) vs. *I**'ve lived** here all my life* (permanente)."
      ],
      "tabla": {
        "columnas": [
          "Simple (resultado)",
          "Continuo (actividad)"
        ],
        "filas": [
          [
            "I've painted the kitchen. (ya terminé)",
            "I've been painting the kitchen. (todavía no termino / estoy lleno de pintura)"
          ],
          [
            "She's read 200 pages.",
            "She's been reading for two hours."
          ],
          [
            "We've finished phase one.",
            "We've been working on phase two since May."
          ],
          [
            "How many calls have you made?",
            "How long have you been calling clients?"
          ]
        ]
      },
      "ojo": [
        "Con números o cantidades, **simple**: *I've **sent** fifty emails* ✅ (no *I've been sending fifty emails* ❌).",
        "Verbos de estado (*know, have, own, believe, understand*) solo en **simple**: *I've **known** him for years* ✅.",
        "*Live, work, study* sirven en los dos casi igual: *I've lived / I've been living here for five years.*",
        "Vocabulario de proyectos: ***deadline*** (fecha límite), ***progress*** (avance), ***on track*** (en tiempo), ***behind schedule*** (atrasado), ***milestone*** (etapa clave).",
        "***So far*** (hasta ahora) y ***lately*** (últimamente) son típicos: *So far we**'ve completed** two stages. Lately I**'ve been working** from home.*"
      ],
      "en": [
        "The present perfect simple focuses on the result: I've written three reports this week.",
        "The present perfect continuous focuses on the activity and its duration: I've been writing reports all week.",
        "How many emails have you answered? How long have you been working on this project?",
        "Your hands are dirty. Have you been gardening?"
      ]
    },
    "vocabulario": [
      {
        "en": "I've finished the report.",
        "es": "ya terminé el reporte",
        "imagen": "Persona entregando un reporte engargolado a su jefa",
        "ejemplo": [
          "I've finished the report. Here it is.",
          "Ya terminé el reporte. Aquí está."
        ]
      },
      {
        "en": "I've been working on it all week.",
        "es": "me he pasado la semana trabajando en eso",
        "imagen": "Persona rodeada de papeles y tazas de café",
        "ejemplo": [
          "I've been working on this project all week.",
          "Me he pasado toda la semana trabajando en este proyecto."
        ]
      },
      {
        "en": "We've completed phase one.",
        "es": "completamos la primera fase",
        "imagen": "Equipo celebrando frente a una pizarra con un plan",
        "ejemplo": [
          "We've completed phase one of the project.",
          "Completamos la primera fase del proyecto."
        ]
      },
      {
        "en": "How long have you been doing this?",
        "es": "¿cuánto tiempo llevas haciendo esto?",
        "imagen": "Artesano trabajando en su taller",
        "ejemplo": [
          "How long have you been doing this job?",
          "¿Cuánto tiempo llevas haciendo este trabajo?"
        ]
      },
      {
        "en": "How many have you sold?",
        "es": "¿cuántos has vendido?",
        "imagen": "Vendedor con pocas piezas en su puesto",
        "ejemplo": [
          "How many tickets have you sold so far?",
          "¿Cuántos boletos has vendido hasta ahora?"
        ]
      },
      {
        "en": "We're behind schedule.",
        "es": "vamos atrasados",
        "imagen": "Gerente preocupado señalando un calendario",
        "ejemplo": [
          "We're behind schedule because of the rain.",
          "Vamos atrasados por la lluvia."
        ]
      },
      {
        "en": "We're on track.",
        "es": "vamos en tiempo",
        "imagen": "Equipo sonriendo frente a una gráfica de avance",
        "ejemplo": [
          "Don't worry, we're on track to finish in May.",
          "No te preocupes, vamos en tiempo para terminar en mayo."
        ]
      },
      {
        "en": "the deadline",
        "es": "la fecha límite",
        "imagen": "Calendario con un día marcado en rojo",
        "ejemplo": [
          "The deadline is next Friday.",
          "La fecha límite es el próximo viernes."
        ]
      },
      {
        "en": "She's been training for months.",
        "es": "lleva meses entrenando",
        "imagen": "Atleta corriendo en una pista al amanecer",
        "ejemplo": [
          "She's been training for the marathon for months.",
          "Lleva meses entrenando para el maratón."
        ]
      },
      {
        "en": "They've been renovating the house.",
        "es": "han estado remodelando la casa",
        "imagen": "Casa en obra con andamios y trabajadores",
        "ejemplo": [
          "They've been renovating the house since January.",
          "Han estado remodelando la casa desde enero."
        ]
      },
      {
        "en": "I've sent fifty emails today.",
        "es": "hoy he enviado cincuenta correos",
        "imagen": "Pantalla con una bandeja de salida llena",
        "ejemplo": [
          "I've sent fifty emails today!",
          "¡Hoy he enviado cincuenta correos!"
        ]
      },
      {
        "en": "Have you been gardening?",
        "es": "¿has estado en el jardín?",
        "imagen": "Persona con guantes llenos de tierra",
        "ejemplo": [
          "Your hands are dirty. Have you been gardening?",
          "Tienes las manos sucias. ¿Has estado trabajando en el jardín?"
        ]
      },
      {
        "en": "progress",
        "es": "avance",
        "imagen": "Barra de progreso casi completa en una pantalla",
        "ejemplo": [
          "We've made a lot of progress this month.",
          "Hemos avanzado mucho este mes."
        ]
      },
      {
        "en": "I've been meaning to call you.",
        "es": "he querido llamarte",
        "imagen": "Persona mirando el contacto de un amigo en su celular",
        "ejemplo": [
          "I've been meaning to call you for weeks.",
          "Llevo semanas queriendo llamarte."
        ]
      },
      {
        "en": "We've raised half the money.",
        "es": "juntamos la mitad del dinero",
        "imagen": "Termómetro de recaudación a la mitad en una escuela",
        "ejemplo": [
          "We've raised half the money for the new library.",
          "Juntamos la mitad del dinero para la nueva biblioteca."
        ]
      },
      {
        "en": "It's been going well.",
        "es": "ha ido bien",
        "imagen": "Persona sonriendo en una videollamada de trabajo",
        "ejemplo": [
          "The new job has been going really well.",
          "El trabajo nuevo ha ido muy bien."
        ]
      }
    ],
    "grupos": [
      {
        "id": "proyecto",
        "titulo": "Hablar de un proyecto",
        "icono": "📊",
        "patron": [
          "So far we've…",
          "We've been working on…",
          "We still haven't…"
        ],
        "palabras": [
          {
            "en": "a milestone",
            "es": "una etapa clave",
            "imagen": "Equipo celebrando con confeti en una oficina",
            "ejemplo": [
              "Launching the app was a big milestone.",
              "Lanzar la app fue una etapa clave."
            ]
          },
          {
            "en": "a setback",
            "es": "un contratiempo",
            "imagen": "Persona frustrada frente a una computadora con error",
            "ejemplo": [
              "We've had a few setbacks, but we're still on track.",
              "Hemos tenido algunos contratiempos, pero seguimos en tiempo."
            ]
          },
          {
            "en": "the budget",
            "es": "el presupuesto",
            "imagen": "Hoja de cálculo con números y una calculadora",
            "ejemplo": [
              "We've already spent most of the budget.",
              "Ya gastamos casi todo el presupuesto."
            ]
          },
          {
            "en": "a team meeting",
            "es": "una junta de equipo",
            "imagen": "Equipo reunido alrededor de una mesa",
            "ejemplo": [
              "We've been having team meetings every Monday.",
              "Hemos tenido juntas de equipo cada lunes."
            ]
          },
          {
            "en": "a draft",
            "es": "un borrador",
            "imagen": "Documento con correcciones en rojo",
            "ejemplo": [
              "I've written the first draft.",
              "Ya escribí el primer borrador."
            ]
          },
          {
            "en": "feedback",
            "es": "retroalimentación / comentarios",
            "imagen": "Jefa dando comentarios a un empleado",
            "ejemplo": [
              "We've been getting very positive feedback.",
              "Hemos recibido comentarios muy positivos."
            ]
          }
        ]
      },
      {
        "id": "evidencia",
        "titulo": "Evidencias del presente",
        "icono": "👀",
        "patron": [
          "You look…",
          "Have you been…?",
          "I've been…"
        ],
        "palabras": [
          {
            "en": "You look tired. Have you been working late?",
            "es": "te ves cansado, ¿has estado trabajando tarde?",
            "imagen": "Persona con ojeras frente a la computadora",
            "ejemplo": [
              "You look tired. Have you been working late?",
              "Te ves cansado. ¿Has estado trabajando hasta tarde?"
            ]
          },
          {
            "en": "The kitchen smells amazing.",
            "es": "la cocina huele increíble",
            "imagen": "Cocina con pan recién horneado",
            "ejemplo": [
              "The kitchen smells amazing. Have you been baking?",
              "La cocina huele increíble. ¿Has estado horneando?"
            ]
          },
          {
            "en": "Your eyes are red.",
            "es": "tienes los ojos rojos",
            "imagen": "Persona frotándose los ojos frente a una pantalla",
            "ejemplo": [
              "Your eyes are red. Have you been looking at screens all day?",
              "Tienes los ojos rojos. ¿Te has pasado el día viendo pantallas?"
            ]
          },
          {
            "en": "You're all wet!",
            "es": "¡estás empapado!",
            "imagen": "Persona empapada entrando a casa",
            "ejemplo": [
              "You're all wet! Yes, I've been walking in the rain.",
              "¡Estás empapado! Sí, estuve caminando bajo la lluvia."
            ]
          },
          {
            "en": "You sound hoarse.",
            "es": "estás ronco",
            "imagen": "Persona tocándose la garganta",
            "ejemplo": [
              "You sound hoarse. Have you been singing?",
              "Estás ronco. ¿Has estado cantando?"
            ]
          },
          {
            "en": "There's sawdust everywhere.",
            "es": "hay aserrín por todos lados",
            "imagen": "Taller con aserrín en el piso y una mesa a medio hacer",
            "ejemplo": [
              "There's sawdust everywhere. I've been making a table.",
              "Hay aserrín por todos lados. He estado haciendo una mesa."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I've finished the report. Here it is.",
        "es": "Ya terminé el reporte. Aquí está."
      },
      {
        "en": "I've been working on this project all week.",
        "es": "Me he pasado toda la semana trabajando en este proyecto."
      },
      {
        "en": "How many tickets have you sold so far?",
        "es": "¿Cuántos boletos has vendido hasta ahora?"
      },
      {
        "en": "How long have you been doing this job?",
        "es": "¿Cuánto tiempo llevas haciendo este trabajo?"
      },
      {
        "en": "We're behind schedule because of the rain.",
        "es": "Vamos atrasados por la lluvia."
      },
      {
        "en": "Your hands are dirty. Have you been gardening?",
        "es": "Tienes las manos sucias. ¿Has estado trabajando en el jardín?"
      },
      {
        "en": "I've been meaning to call you for weeks.",
        "es": "Llevo semanas queriendo llamarte."
      },
      {
        "en": "We've had a few setbacks, but we're still on track.",
        "es": "Hemos tenido algunos contratiempos, pero seguimos en tiempo."
      },
      {
        "en": "I've written the first draft.",
        "es": "Ya escribí el primer borrador."
      },
      {
        "en": "The new job has been going really well.",
        "es": "El trabajo nuevo ha ido muy bien."
      }
    ],
    "frases": [
      {
        "en": "We've been building the new school since March, and so far we've finished the classrooms and the library.",
        "es": "Llevamos desde marzo construyendo la nueva escuela y hasta ahora hemos terminado los salones y la biblioteca.",
        "imagen": "Escuela en construcción con trabajadores y salones terminados"
      },
      {
        "en": "I've been learning Japanese for two years, and I've read three novels in Japanese.",
        "es": "Llevo dos años aprendiendo japonés y he leído tres novelas en japonés.",
        "imagen": "Persona leyendo un libro en japonés con un diccionario"
      },
      {
        "en": "The team has been working overtime because the deadline is next week.",
        "es": "El equipo ha estado trabajando horas extra porque la fecha límite es la próxima semana.",
        "imagen": "Oficina de noche con un equipo concentrado"
      },
      {
        "en": "She's lost ten kilos since she started running, and she's been feeling much better.",
        "es": "Ha bajado diez kilos desde que empezó a correr y se ha sentido mucho mejor.",
        "imagen": "Mujer sonriente corriendo en un parque"
      },
      {
        "en": "How many times have I told you to close the door when you leave?",
        "es": "¿Cuántas veces te he dicho que cierres la puerta cuando salgas?",
        "imagen": "Mamá señalando una puerta abierta con cara de paciencia"
      },
      {
        "en": "They've been arguing about money for weeks, and they still haven't found a solution.",
        "es": "Llevan semanas discutiendo por dinero y todavía no encuentran una solución.",
        "imagen": "Pareja seria revisando cuentas en la mesa"
      },
      {
        "en": "I've been trying to reach the manager all morning, but he hasn't answered any of my calls.",
        "es": "Toda la mañana he tratado de comunicarme con el gerente, pero no ha contestado ninguna llamada.",
        "imagen": "Persona frustrada colgando el teléfono en una oficina"
      },
      {
        "en": "We've made a lot of progress, but we've also had some unexpected setbacks.",
        "es": "Hemos avanzado mucho, pero también hemos tenido algunos contratiempos inesperados.",
        "imagen": "Gerente mostrando una gráfica con altibajos al equipo"
      },
      {
        "en": "My neighbors have been renovating their apartment for six months, and the noise is driving me crazy.",
        "es": "Mis vecinos llevan seis meses remodelando su departamento y el ruido me está volviendo loco.",
        "imagen": "Persona tapándose los oídos mientras se oye un taladro"
      },
      {
        "en": "I've been meaning to tell you: we've decided to move to Canada next year.",
        "es": "Te he querido decir: decidimos mudarnos a Canadá el próximo año.",
        "imagen": "Pareja contando una noticia a sus amigos en la sala"
      }
    ],
    "listening": [
      {
        "audio": "We've been working on the new website for three months, and we've finished about eighty percent.",
        "pregunta": "¿Cuánto del sitio han terminado?",
        "opciones": [
          "Como el ochenta por ciento",
          "Todo",
          "La mitad",
          "El treinta por ciento"
        ]
      },
      {
        "audio": "Have you been crying? No, I've been cutting onions!",
        "pregunta": "¿Por qué tiene los ojos así?",
        "opciones": [
          "Ha estado picando cebolla",
          "Ha estado llorando",
          "Tiene alergia",
          "No ha dormido"
        ]
      },
      {
        "audio": "How many people have signed up for the course so far? Twenty-five.",
        "pregunta": "¿Cuántas personas se han inscrito?",
        "opciones": [
          "Veinticinco",
          "Quince",
          "Cincuenta",
          "Doce"
        ]
      },
      {
        "audio": "I've been feeling much better since I stopped drinking soda.",
        "pregunta": "¿Qué dejó de hacer?",
        "opciones": [
          "Tomar refresco",
          "Fumar",
          "Comer carne",
          "Trabajar de noche"
        ]
      },
      {
        "audio": "We're behind schedule because the materials haven't arrived yet.",
        "pregunta": "¿Por qué van atrasados?",
        "opciones": [
          "No han llegado los materiales",
          "Falta personal",
          "Llovió mucho",
          "No hay dinero"
        ]
      }
    ],
    "lectura": {
      "titulo": "Project update",
      "texto": "Dear team, I'm writing to give you an update on the community garden project. We've been working on it since February, and I'm very happy with the progress we've made. So far, we've cleaned the land, built twelve raised beds, and installed a simple irrigation system. The volunteers have been coming every Saturday, and some of them have been working during the week too. However, we've had a couple of setbacks. The tools we ordered still haven't arrived, so we've been borrowing them from neighbors. Also, it hasn't rained for weeks, and we've been using more water than we expected. We've raised about seventy percent of the budget, and the local hardware store has offered to donate seeds. If everything goes well, we'll be able to plant the first vegetables next month. Thank you all for your hard work! Best, Gabriela.",
      "preguntas": [
        {
          "pregunta": "¿Desde cuándo trabajan en el huerto?",
          "opciones": [
            "Desde febrero",
            "Desde enero",
            "Desde hace un año",
            "Desde el mes pasado"
          ]
        },
        {
          "pregunta": "¿Cuántas camas de cultivo han construido?",
          "opciones": [
            "Doce",
            "Veinte",
            "Seis",
            "Diez"
          ]
        },
        {
          "pregunta": "¿Qué hacen mientras llegan las herramientas?",
          "opciones": [
            "Las piden prestadas a los vecinos",
            "Esperan sin trabajar",
            "Compran otras",
            "Usan las manos"
          ]
        },
        {
          "pregunta": "¿Qué ofreció la ferretería?",
          "opciones": [
            "Donar semillas",
            "Donar herramientas",
            "Prestar dinero",
            "Instalar el riego"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Elige simple o continuo.",
        "pregunta": "I ___ (write) three emails this morning.",
        "respuestas": [
          "have written",
          "'ve written"
        ]
      },
      {
        "instruccion": "Elige simple o continuo.",
        "pregunta": "I ___ (write) emails all morning.",
        "respuestas": [
          "have been writing",
          "'ve been writing"
        ]
      },
      {
        "instruccion": "Elige simple o continuo.",
        "pregunta": "She ___ (know) him for ten years.",
        "respuestas": [
          "has known",
          "'s known"
        ]
      },
      {
        "instruccion": "Elige simple o continuo.",
        "pregunta": "You're wet! Have you ___ (swim)?",
        "respuestas": [
          "been swimming"
        ]
      },
      {
        "instruccion": "Completa la pregunta.",
        "pregunta": "How ___ pages have you read?",
        "respuestas": [
          "many"
        ]
      },
      {
        "instruccion": "Completa la pregunta.",
        "pregunta": "How ___ have you been learning English?",
        "respuestas": [
          "long"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Vamos atrasados.",
        "respuestas": [
          "We're behind schedule",
          "We are behind schedule",
          "We're behind"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Llevo semanas queriendo llamarte.",
        "respuestas": [
          "I've been meaning to call you for weeks",
          "I have been meaning to call you for weeks",
          "I've been wanting to call you for weeks"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "la fecha límite",
        "respuestas": [
          "the deadline"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I've been sending forty emails today.",
        "respuestas": [
          "I've sent forty emails today",
          "I have sent forty emails today"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "I ___ this book three times.",
        "opciones": [
          "'ve read",
          "'ve been reading",
          "was reading",
          "read been"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She's tired because she ___ all day.",
        "opciones": [
          "'s been cleaning",
          "'s cleaned",
          "cleaned been",
          "is cleaned"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "How long ___ you been waiting?",
        "opciones": [
          "have",
          "has",
          "did",
          "are"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I ___ my car for six years.",
        "opciones": [
          "'ve had",
          "'ve been having",
          "'m having",
          "had been"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«We're on track» significa:",
        "opciones": [
          "Vamos en tiempo",
          "Vamos atrasados",
          "Estamos en las vías",
          "Ya terminamos"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "So far we ___ two hundred tickets.",
        "opciones": [
          "'ve sold",
          "'ve been selling",
          "sell",
          "were selling"
        ]
      },
      {
        "tipo": "listening",
        "audio": "They've been repairing the bridge since April, and it still isn't open.",
        "pregunta": "¿Desde cuándo reparan el puente?",
        "opciones": [
          "Desde abril",
          "Desde agosto",
          "Desde hace un año",
          "Desde ayer"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I've called the bank five times, and nobody has answered.",
        "pregunta": "¿Cuántas veces ha llamado al banco?",
        "opciones": [
          "Cinco",
          "Tres",
          "Diez",
          "Una"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¿Cuánto tiempo llevas trabajando aquí?",
        "respuestas": [
          "How long have you been working here",
          "How long have you worked here"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Ya terminé.",
        "respuestas": [
          "I've finished",
          "I have finished",
          "I've already finished",
          "I'm done",
          "I already finished"
        ]
      }
    ]
  },
  {
    "id": "b2-04",
    "num": 4,
    "titulo": "Futuro continuo y futuro perfecto",
    "contexto": "Dentro de diez años",
    "explicacion": {
      "es": [
        "El **futuro continuo** (*will be* + *-ing*) describe una acción **en progreso** en un momento del futuro: *This time tomorrow, I**'ll be flying** to Lima.* (Mañana a esta hora estaré volando a Lima.)",
        "También se usa para **planes que seguro pasarán** (sonando neutral) y para **preguntar con cortesía** por planes: ***Will** you **be using** the car tonight?* (¿Vas a usar el carro hoy en la noche?)",
        "El **futuro perfecto** (*will have* + participio) habla de algo que **ya habrá terminado** antes de un momento futuro: ***By** 2035, I**'ll have finished** paying my house.* (Para 2035 ya habré terminado de pagar mi casa.)",
        "La palabra clave del futuro perfecto es ***by*** (para / antes de): ***by** Friday, **by** the time you arrive, **by** the end of the year*. Negativo: *I **won't have finished** by six.*"
      ],
      "tabla": {
        "columnas": [
          "Forma",
          "Significado",
          "Ejemplo"
        ],
        "filas": [
          [
            "will be + -ing",
            "en progreso en el futuro",
            "At 9 p.m. I'll be watching the game."
          ],
          [
            "will be + -ing",
            "pregunta cortés por planes",
            "Will you be coming to the party?"
          ],
          [
            "will have + participio",
            "terminado antes de un momento futuro",
            "By 2030, I'll have retired."
          ],
          [
            "won't have + participio",
            "no habrá terminado",
            "I won't have finished by noon."
          ]
        ]
      },
      "ojo": [
        "*By Monday* = **a más tardar el lunes** (antes o ese día). *Until Monday* = **hasta el lunes** (sigue pasando hasta ese día).",
        "En español: «estaré + gerundio» (*estaré trabajando*) y «habré + participio» (*habré terminado*).",
        "Con ***by the time*** + presente: *By the time you **arrive**, I'll have cooked dinner* (no *will arrive*).",
        "También existe el **futuro perfecto continuo** para la duración: *In June, I**'ll have been working** here for ten years.*",
        "Expresiones de tiempo útiles: ***in ten years' time, this time next year, by the end of the decade***."
      ],
      "en": [
        "The future continuous describes an action in progress in the future: This time tomorrow, I'll be flying to Lima.",
        "It is also a polite way to ask about plans: Will you be using the car tonight?",
        "The future perfect describes something finished before a future moment: By 2035, I'll have finished paying my house.",
        "The key word is by: by Friday, by the time you arrive."
      ]
    },
    "vocabulario": [
      {
        "en": "I'll be flying to Lima.",
        "es": "estaré volando a Lima",
        "imagen": "Avión volando sobre las nubes al atardecer",
        "ejemplo": [
          "This time tomorrow, I'll be flying to Lima.",
          "Mañana a esta hora estaré volando a Lima."
        ]
      },
      {
        "en": "I'll be working.",
        "es": "estaré trabajando",
        "imagen": "Persona trabajando en una oficina con vista a la ciudad",
        "ejemplo": [
          "Don't call at ten. I'll be working.",
          "No llames a las diez. Estaré trabajando."
        ]
      },
      {
        "en": "Will you be using the car?",
        "es": "¿vas a usar el carro?",
        "imagen": "Persona mostrando las llaves del carro a su pareja",
        "ejemplo": [
          "Will you be using the car tonight?",
          "¿Vas a usar el carro hoy en la noche?"
        ]
      },
      {
        "en": "I'll have finished.",
        "es": "habré terminado",
        "imagen": "Persona estirándose feliz frente a un proyecto terminado",
        "ejemplo": [
          "I'll have finished the report by Friday.",
          "Habré terminado el reporte para el viernes."
        ]
      },
      {
        "en": "by the end of the year",
        "es": "para fin de año",
        "imagen": "Calendario con diciembre marcado",
        "ejemplo": [
          "By the end of the year, we'll have saved enough.",
          "Para fin de año habremos ahorrado suficiente."
        ]
      },
      {
        "en": "in ten years' time",
        "es": "dentro de diez años",
        "imagen": "Persona mirando el horizonte con optimismo",
        "ejemplo": [
          "In ten years' time, I'll be living by the sea.",
          "Dentro de diez años estaré viviendo junto al mar."
        ]
      },
      {
        "en": "They'll have gotten married.",
        "es": "se habrán casado",
        "imagen": "Pareja de novios celebrando en un jardín",
        "ejemplo": [
          "By next summer, they'll have gotten married.",
          "Para el próximo verano se habrán casado."
        ]
      },
      {
        "en": "I won't have finished.",
        "es": "no habré terminado",
        "imagen": "Persona estresada con muchos papeles a medianoche",
        "ejemplo": [
          "I won't have finished by Monday. I need more time.",
          "No habré terminado para el lunes. Necesito más tiempo."
        ]
      },
      {
        "en": "We'll be living in a new house.",
        "es": "estaremos viviendo en una casa nueva",
        "imagen": "Familia frente a una casa recién construida",
        "ejemplo": [
          "Next year we'll be living in a new house.",
          "El próximo año estaremos viviendo en una casa nueva."
        ]
      },
      {
        "en": "She'll have graduated.",
        "es": "se habrá graduado",
        "imagen": "Graduada con toga y diploma",
        "ejemplo": [
          "By 2028, my daughter will have graduated.",
          "Para 2028, mi hija se habrá graduado."
        ]
      },
      {
        "en": "this time next year",
        "es": "el año que entra a esta hora",
        "imagen": "Persona imaginándose en una playa",
        "ejemplo": [
          "This time next year, I'll be traveling around Asia.",
          "El año que entra a esta hora estaré viajando por Asia."
        ]
      },
      {
        "en": "I'll have retired.",
        "es": "me habré jubilado",
        "imagen": "Señor mayor pescando tranquilo en un lago",
        "ejemplo": [
          "In fifteen years, I'll have retired.",
          "En quince años me habré jubilado."
        ]
      },
      {
        "en": "robots will be doing",
        "es": "los robots estarán haciendo",
        "imagen": "Robot trabajando en una fábrica moderna",
        "ejemplo": [
          "In twenty years, robots will be doing many of our jobs.",
          "En veinte años los robots estarán haciendo muchos de nuestros trabajos."
        ]
      },
      {
        "en": "by the time you arrive",
        "es": "para cuando llegues",
        "imagen": "Mesa servida lista para la cena",
        "ejemplo": [
          "By the time you arrive, I'll have cooked dinner.",
          "Para cuando llegues, ya habré hecho la cena."
        ]
      },
      {
        "en": "I'll have been working here for ten years.",
        "es": "llevaré diez años trabajando aquí",
        "imagen": "Empleado recibiendo un reconocimiento por antigüedad",
        "ejemplo": [
          "In June, I'll have been working here for ten years.",
          "En junio llevaré diez años trabajando aquí."
        ]
      },
      {
        "en": "Will you be coming to the party?",
        "es": "¿vas a venir a la fiesta?",
        "imagen": "Invitación de fiesta sobre una mesa",
        "ejemplo": [
          "Will you be coming to the party on Saturday?",
          "¿Vas a venir a la fiesta el sábado?"
        ]
      }
    ],
    "grupos": [
      {
        "id": "futuro",
        "titulo": "El mundo en el futuro",
        "icono": "🚀",
        "patron": [
          "By 2050…",
          "People will be…",
          "Scientists will have…"
        ],
        "palabras": [
          {
            "en": "cure diseases",
            "es": "curar enfermedades",
            "imagen": "Científica observando cultivos en un laboratorio",
            "ejemplo": [
              "By 2050, scientists will have cured many diseases.",
              "Para 2050, los científicos habrán curado muchas enfermedades."
            ]
          },
          {
            "en": "electric cars",
            "es": "carros eléctricos",
            "imagen": "Carro eléctrico cargándose en la calle",
            "ejemplo": [
              "Most people will be driving electric cars.",
              "La mayoría de la gente estará manejando carros eléctricos."
            ]
          },
          {
            "en": "work from home",
            "es": "trabajar desde casa",
            "imagen": "Persona en videollamada desde su sala",
            "ejemplo": [
              "More people will be working from home.",
              "Más gente estará trabajando desde casa."
            ]
          },
          {
            "en": "run out of",
            "es": "agotarse",
            "imagen": "Pozo petrolero abandonado",
            "ejemplo": [
              "We will have run out of oil by the end of the century.",
              "Para fin de siglo se nos habrá acabado el petróleo."
            ]
          },
          {
            "en": "live on Mars",
            "es": "vivir en Marte",
            "imagen": "Base espacial en el paisaje rojo de Marte",
            "ejemplo": [
              "People might be living on Mars.",
              "Puede que haya gente viviendo en Marte."
            ]
          },
          {
            "en": "disappear",
            "es": "desaparecer",
            "imagen": "Glaciar derritiéndose en el mar",
            "ejemplo": [
              "Some animals will have disappeared.",
              "Algunos animales habrán desaparecido."
            ]
          }
        ]
      },
      {
        "id": "metas",
        "titulo": "Mis metas",
        "icono": "🎯",
        "patron": [
          "By the time I'm forty…",
          "In five years…",
          "I hope I'll have…"
        ],
        "palabras": [
          {
            "en": "pay off my mortgage",
            "es": "terminar de pagar mi hipoteca",
            "imagen": "Persona feliz con documentos de una casa pagada",
            "ejemplo": [
              "I hope I'll have paid off my mortgage by fifty.",
              "Espero haber pagado mi hipoteca para los cincuenta."
            ]
          },
          {
            "en": "start a family",
            "es": "formar una familia",
            "imagen": "Pareja joven con un bebé en un parque",
            "ejemplo": [
              "By thirty-five, I'd like to have started a family.",
              "Para los treinta y cinco me gustaría haber formado una familia."
            ]
          },
          {
            "en": "be fluent",
            "es": "dominar un idioma",
            "imagen": "Persona hablando con confianza con extranjeros",
            "ejemplo": [
              "In two years, I'll be fluent in English.",
              "En dos años dominaré el inglés."
            ]
          },
          {
            "en": "get a promotion",
            "es": "conseguir un ascenso",
            "imagen": "Empleada estrechando la mano de su jefe",
            "ejemplo": [
              "By then, I'll have gotten a promotion.",
              "Para entonces habré conseguido un ascenso."
            ]
          },
          {
            "en": "travel the world",
            "es": "viajar por el mundo",
            "imagen": "Mochilero con un mapa del mundo",
            "ejemplo": [
              "I'll be traveling the world when I retire.",
              "Estaré viajando por el mundo cuando me jubile."
            ]
          },
          {
            "en": "own my business",
            "es": "tener mi propio negocio",
            "imagen": "Dueña orgullosa frente a su tienda",
            "ejemplo": [
              "In ten years, I'll be running my own business.",
              "En diez años estaré dirigiendo mi propio negocio."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "This time tomorrow, I'll be flying to Lima.",
        "es": "Mañana a esta hora estaré volando a Lima."
      },
      {
        "en": "Don't call at ten. I'll be working.",
        "es": "No llames a las diez. Estaré trabajando."
      },
      {
        "en": "Will you be using the car tonight?",
        "es": "¿Vas a usar el carro hoy en la noche?"
      },
      {
        "en": "I'll have finished the report by Friday.",
        "es": "Habré terminado el reporte para el viernes."
      },
      {
        "en": "In ten years' time, I'll be living by the sea.",
        "es": "Dentro de diez años estaré viviendo junto al mar."
      },
      {
        "en": "I won't have finished by Monday. I need more time.",
        "es": "No habré terminado para el lunes. Necesito más tiempo."
      },
      {
        "en": "By the time you arrive, I'll have cooked dinner.",
        "es": "Para cuando llegues, ya habré hecho la cena."
      },
      {
        "en": "In June, I'll have been working here for ten years.",
        "es": "En junio llevaré diez años trabajando aquí."
      },
      {
        "en": "By 2050, scientists will have cured many diseases.",
        "es": "Para 2050, los científicos habrán curado muchas enfermedades."
      },
      {
        "en": "I hope I'll have paid off my mortgage by fifty.",
        "es": "Espero haber pagado mi hipoteca para los cincuenta."
      }
    ],
    "frases": [
      {
        "en": "In ten years' time, I'll probably be working for an international company, and I'll have bought my own apartment.",
        "es": "Dentro de diez años probablemente estaré trabajando en una empresa internacional y habré comprado mi propio departamento.",
        "imagen": "Profesionista en la terraza de un departamento con vista a la ciudad"
      },
      {
        "en": "Don't worry about the kids. By the time you get home, they'll have finished their homework and gone to bed.",
        "es": "No te preocupes por los niños. Para cuando llegues, habrán terminado la tarea y se habrán dormido.",
        "imagen": "Niños dormidos en sus camas con mochilas listas"
      },
      {
        "en": "This time next week, we'll be lying on a beach in the Caribbean, drinking coconut water.",
        "es": "La próxima semana a esta hora estaremos acostados en una playa del Caribe tomando agua de coco.",
        "imagen": "Pareja en camastros en una playa caribeña con cocos"
      },
      {
        "en": "By 2040, the city will have built three new subway lines, and traffic will be much better.",
        "es": "Para 2040, la ciudad habrá construido tres nuevas líneas del metro y el tráfico estará mucho mejor.",
        "imagen": "Metro moderno elevado atravesando la ciudad"
      },
      {
        "en": "Will you be passing by the supermarket on your way home? We need milk.",
        "es": "¿Vas a pasar por el súper de camino a casa? Necesitamos leche.",
        "imagen": "Persona revisando un mensaje mientras maneja hacia casa"
      },
      {
        "en": "By the end of this course, you will have learned more than two thousand words.",
        "es": "Al final de este curso habrás aprendido más de dos mil palabras.",
        "imagen": "Estudiante feliz con un certificado de inglés"
      },
      {
        "en": "At midnight, I'll still be studying, because the exam is at eight in the morning.",
        "es": "A medianoche todavía estaré estudiando, porque el examen es a las ocho de la mañana.",
        "imagen": "Estudiante con una lámpara encendida de noche"
      },
      {
        "en": "Next year my parents will have been married for fifty years, so we're planning a big party.",
        "es": "El próximo año mis papás cumplirán cincuenta años de casados, así que estamos planeando una gran fiesta.",
        "imagen": "Pareja mayor cortando un pastel de aniversario"
      },
      {
        "en": "I'm afraid I won't have read the whole document by tomorrow's meeting.",
        "es": "Me temo que no habré leído todo el documento para la junta de mañana.",
        "imagen": "Persona hojeando un documento muy grueso con preocupación"
      },
      {
        "en": "In twenty years, many people will be working with artificial intelligence every day.",
        "es": "En veinte años mucha gente estará trabajando con inteligencia artificial todos los días.",
        "imagen": "Oficina futurista con personas trabajando con hologramas"
      }
    ],
    "listening": [
      {
        "audio": "Don't call me between two and four. I'll be taking an exam.",
        "pregunta": "¿Qué estará haciendo entre dos y cuatro?",
        "opciones": [
          "Presentando un examen",
          "Trabajando",
          "Durmiendo",
          "Manejando"
        ]
      },
      {
        "audio": "By the time we get to the stadium, the game will have started.",
        "pregunta": "¿Qué habrá pasado cuando lleguen?",
        "opciones": [
          "El partido habrá empezado",
          "Se habrán acabado los boletos",
          "El partido habrá terminado",
          "Lloverá"
        ]
      },
      {
        "audio": "Will you be using your laptop this afternoon? Mine is broken.",
        "pregunta": "¿Por qué pregunta por la laptop?",
        "opciones": [
          "La suya está descompuesta",
          "Quiere comprarla",
          "No tiene internet",
          "Quiere ver una película"
        ]
      },
      {
        "audio": "In five years, I'll have finished my medical degree, and I'll be working in a hospital.",
        "pregunta": "¿Qué estudia la persona?",
        "opciones": [
          "Medicina",
          "Derecho",
          "Ingeniería",
          "Enfermería"
        ]
      },
      {
        "audio": "This time next month, we'll be living in Monterrey.",
        "pregunta": "¿Dónde vivirán el próximo mes?",
        "opciones": [
          "En Monterrey",
          "En Guadalajara",
          "En la Ciudad de México",
          "En el extranjero"
        ]
      }
    ],
    "lectura": {
      "titulo": "A letter to my future self",
      "texto": "Dear me, today is my twenty-fifth birthday, and my teacher asked us to write a letter to ourselves in ten years. So, here are my predictions. In ten years' time, I'll be thirty-five. I hope I'll have finished my master's degree in architecture, and I'll be designing houses that use solar energy. I'll probably be living in Guadalajara, because that's where my partner's family lives. By then, we'll have gotten married and, who knows, maybe we'll have had a baby. I'll have traveled to at least five new countries; Japan will definitely be one of them. I'm sure I'll still be playing soccer on Sundays with my friends, although maybe not as well! I hope I won't be working twelve hours a day like my father did. And I'll have learned to cook something better than eggs. Don't forget who you are. With love, your twenty-five-year-old self.",
      "preguntas": [
        {
          "pregunta": "¿Qué edad tendrá en diez años?",
          "opciones": [
            "Treinta y cinco",
            "Veinticinco",
            "Cuarenta",
            "Treinta"
          ]
        },
        {
          "pregunta": "¿Qué tipo de casas estará diseñando?",
          "opciones": [
            "Casas que usen energía solar",
            "Casas de lujo",
            "Edificios altos",
            "Casas de madera"
          ]
        },
        {
          "pregunta": "¿Por qué vivirá en Guadalajara?",
          "opciones": [
            "Ahí vive la familia de su pareja",
            "Por su trabajo",
            "Le gusta el clima",
            "Ahí nació"
          ]
        },
        {
          "pregunta": "¿Qué espera haber aprendido?",
          "opciones": [
            "A cocinar algo mejor que huevos",
            "Japonés",
            "A jugar fútbol",
            "A manejar"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con el futuro continuo.",
        "pregunta": "At 8 p.m. I ___ (watch) the game.",
        "respuestas": [
          "'ll be watching",
          "will be watching"
        ]
      },
      {
        "instruccion": "Completa con el futuro perfecto.",
        "pregunta": "By Friday, I ___ (finish) the project.",
        "respuestas": [
          "'ll have finished",
          "will have finished"
        ]
      },
      {
        "instruccion": "Completa con el futuro perfecto.",
        "pregunta": "By 2030, they ___ (build) the new airport.",
        "respuestas": [
          "'ll have built",
          "will have built"
        ]
      },
      {
        "instruccion": "Completa con by o until.",
        "pregunta": "I'll have finished ___ six o'clock.",
        "respuestas": [
          "by"
        ]
      },
      {
        "instruccion": "Completa con by o until.",
        "pregunta": "I'll be working ___ six o'clock.",
        "respuestas": [
          "until",
          "till"
        ]
      },
      {
        "instruccion": "Completa la pregunta cortés.",
        "pregunta": "Will you ___ using the car tonight?",
        "respuestas": [
          "be"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Mañana a esta hora estaré volando.",
        "respuestas": [
          "This time tomorrow I'll be flying",
          "This time tomorrow, I'll be flying",
          "This time tomorrow I will be flying"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Habré terminado para el lunes.",
        "respuestas": [
          "I'll have finished by Monday",
          "I will have finished by Monday"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "dentro de diez años",
        "respuestas": [
          "in ten years' time",
          "in ten years",
          "ten years from now"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "By the time you will arrive, I'll have cooked.",
        "respuestas": [
          "By the time you arrive, I'll have cooked",
          "By the time you arrive, I will have cooked",
          "By the time you arrive I'll have cooked"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "At noon tomorrow, I ___ in a meeting.",
        "opciones": [
          "'ll be sitting",
          "'ll have sat",
          "sit",
          "am sat"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "By next year, she ___ her degree.",
        "opciones": [
          "'ll have finished",
          "'ll be finishing",
          "finishes",
          "has finished"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ you be coming to the meeting?",
        "opciones": [
          "Will",
          "Are",
          "Do",
          "Have"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "By the time you ___, we'll have eaten.",
        "opciones": [
          "arrive",
          "will arrive",
          "arrived",
          "are arriving to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«I won't have finished by Monday» significa:",
        "opciones": [
          "No habré terminado para el lunes",
          "No terminaré el lunes",
          "No empezaré el lunes",
          "Terminé el lunes"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "In June, I ___ here for ten years.",
        "opciones": [
          "'ll have been working",
          "'ll be work",
          "work",
          "have working"
        ]
      },
      {
        "tipo": "listening",
        "audio": "By the end of the month, we'll have sold more than a thousand cars.",
        "pregunta": "¿Cuántos carros habrán vendido?",
        "opciones": [
          "Más de mil",
          "Cien",
          "Diez mil",
          "Quinientos"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Call me after nine. I'll be driving until then.",
        "pregunta": "¿Por qué no puede hablar antes de las nueve?",
        "opciones": [
          "Estará manejando",
          "Estará durmiendo",
          "Estará en el cine",
          "Estará trabajando"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Estaré trabajando.",
        "respuestas": [
          "I'll be working",
          "I will be working"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: para fin de año",
        "respuestas": [
          "by the end of the year"
        ]
      }
    ]
  },
  {
    "id": "b2-05",
    "num": 5,
    "titulo": "Tercer condicional",
    "contexto": "Arrepentimientos y oportunidades perdidas",
    "explicacion": {
      "es": [
        "El **tercer condicional** habla de situaciones **imaginarias en el pasado**: algo que **no pasó** y su resultado imaginario: ***If** I **had studied**, I **would have passed**.* (Si hubiera estudiado, habría aprobado.) En realidad no estudié y no aprobé.",
        "Forma: ***If*** + **pasado perfecto** (*had* + participio), ***would have*** + **participio**. También ***could have*** (habría podido) y ***might have*** (tal vez habría): *If we had left earlier, we **could have caught** the train.*",
        "Sirve para **arrepentimientos**, **críticas** y **oportunidades perdidas**: *If I **hadn't eaten** so much, I **wouldn't have felt** sick.* *If you **had told** me, I **would have helped** you.*",
        "Contracciones: ***I'd*** = *I had* (en la parte del *if*) o *I would* (en el resultado): *If **I'd** known, **I'd** have come.* Al hablar, *would have* suena **«would've»** o **«woulda»**."
      ],
      "tabla": {
        "columnas": [
          "Parte con if (pasado perfecto)",
          "Resultado (would / could / might have + participio)"
        ],
        "filas": [
          [
            "If I had known,",
            "I would have called you."
          ],
          [
            "If she hadn't missed the bus,",
            "she wouldn't have been late."
          ],
          [
            "If we had saved more,",
            "we could have bought the house."
          ],
          [
            "If it hadn't rained,",
            "we might have won the game."
          ]
        ]
      },
      "ojo": [
        "No pongas *would* en la parte del *if*: *If I **had** known* ✅, no *If I would have known* ❌.",
        "*If I'd known, I'd have come*: el primer *'d* es ***had***, el segundo es ***would***.",
        "En español: «si **hubiera** + participio, **habría** + participio».",
        "Para lamentarse también se usa ***I wish I had…*** (tema 8): *I wish I had studied more.*",
        "***Had*** al principio, sin *if*, es más formal: ***Had I known**, I would have come.*"
      ],
      "en": [
        "The third conditional talks about imaginary situations in the past: If I had studied, I would have passed.",
        "Form: if plus past perfect, would have plus participle.",
        "It's used for regrets and missed opportunities: If you had told me, I would have helped you.",
        "If I'd known, I'd have come."
      ]
    },
    "vocabulario": [
      {
        "en": "If I had known",
        "es": "si lo hubiera sabido",
        "imagen": "Persona llevándose la mano a la frente con arrepentimiento",
        "ejemplo": [
          "If I had known, I would have called you.",
          "Si lo hubiera sabido, te habría llamado."
        ]
      },
      {
        "en": "I would have helped you.",
        "es": "te habría ayudado",
        "imagen": "Amigo ofreciendo ayuda demasiado tarde",
        "ejemplo": [
          "If you had told me, I would have helped you.",
          "Si me hubieras dicho, te habría ayudado."
        ]
      },
      {
        "en": "If I had studied more",
        "es": "si hubiera estudiado más",
        "imagen": "Estudiante lamentándose frente a un examen reprobado",
        "ejemplo": [
          "If I had studied more, I would have passed.",
          "Si hubiera estudiado más, habría aprobado."
        ]
      },
      {
        "en": "We would have caught the train.",
        "es": "habríamos alcanzado el tren",
        "imagen": "Personas viendo un tren alejarse del andén",
        "ejemplo": [
          "If we had left earlier, we would have caught the train.",
          "Si hubiéramos salido antes, habríamos alcanzado el tren."
        ]
      },
      {
        "en": "I wouldn't have been late.",
        "es": "no habría llegado tarde",
        "imagen": "Persona llegando tarde a una junta, apenada",
        "ejemplo": [
          "If I hadn't missed the bus, I wouldn't have been late.",
          "Si no hubiera perdido el camión, no habría llegado tarde."
        ]
      },
      {
        "en": "She could have won.",
        "es": "pudo haber ganado",
        "imagen": "Atleta llegando en segundo lugar por poco",
        "ejemplo": [
          "If she hadn't fallen, she could have won.",
          "Si no se hubiera caído, pudo haber ganado."
        ]
      },
      {
        "en": "It might have been different.",
        "es": "tal vez habría sido diferente",
        "imagen": "Persona pensativa mirando una foto antigua",
        "ejemplo": [
          "If we had met earlier, it might have been different.",
          "Si nos hubiéramos conocido antes, tal vez habría sido diferente."
        ]
      },
      {
        "en": "If I hadn't eaten so much",
        "es": "si no hubiera comido tanto",
        "imagen": "Persona llena tocándose el estómago después de una comida",
        "ejemplo": [
          "If I hadn't eaten so much, I wouldn't have felt sick.",
          "Si no hubiera comido tanto, no me habría sentido mal."
        ]
      },
      {
        "en": "a missed opportunity",
        "es": "una oportunidad perdida",
        "imagen": "Persona viendo partir un barco desde el muelle",
        "ejemplo": [
          "Not taking that job was a missed opportunity.",
          "No aceptar ese trabajo fue una oportunidad perdida."
        ]
      },
      {
        "en": "I regret",
        "es": "me arrepiento",
        "imagen": "Persona sentada sola con cara de arrepentimiento",
        "ejemplo": [
          "I regret not going to university.",
          "Me arrepiento de no haber ido a la universidad."
        ]
      },
      {
        "en": "If it hadn't rained",
        "es": "si no hubiera llovido",
        "imagen": "Partido suspendido bajo la lluvia",
        "ejemplo": [
          "If it hadn't rained, we would have played.",
          "Si no hubiera llovido, habríamos jugado."
        ]
      },
      {
        "en": "I'd have come.",
        "es": "habría venido",
        "imagen": "Persona mirando fotos de una fiesta a la que no fue",
        "ejemplo": [
          "If I'd known about the party, I'd have come.",
          "Si hubiera sabido de la fiesta, habría venido."
        ]
      },
      {
        "en": "If we hadn't met",
        "es": "si no nos hubiéramos conocido",
        "imagen": "Pareja recordando cómo se conocieron",
        "ejemplo": [
          "If we hadn't met at that party, we wouldn't be together.",
          "Si no nos hubiéramos conocido en esa fiesta, no estaríamos juntos."
        ]
      },
      {
        "en": "had I known",
        "es": "de haberlo sabido",
        "imagen": "Persona leyendo una noticia con sorpresa",
        "ejemplo": [
          "Had I known, I would have acted differently.",
          "De haberlo sabido, habría actuado diferente."
        ]
      },
      {
        "en": "it would have been a disaster",
        "es": "habría sido un desastre",
        "imagen": "Carro detenido a centímetros de un poste",
        "ejemplo": [
          "Without the seatbelt, it would have been a disaster.",
          "Sin el cinturón, habría sido un desastre."
        ]
      },
      {
        "en": "I should have listened",
        "es": "debí haber escuchado",
        "imagen": "Persona apenada frente a su mamá",
        "ejemplo": [
          "I should have listened to my mother.",
          "Debí haberle hecho caso a mi mamá."
        ]
      }
    ],
    "grupos": [
      {
        "id": "arrepentimientos",
        "titulo": "Arrepentimientos",
        "icono": "😔",
        "patron": [
          "If only I had…",
          "I regret…",
          "Looking back…"
        ],
        "palabras": [
          {
            "en": "looking back",
            "es": "viéndolo en retrospectiva",
            "imagen": "Persona mayor mirando fotos de su juventud",
            "ejemplo": [
              "Looking back, I should have studied abroad.",
              "Viéndolo en retrospectiva, debí haber estudiado en el extranjero."
            ]
          },
          {
            "en": "if only",
            "es": "si tan solo",
            "imagen": "Persona mirando por la ventana con nostalgia",
            "ejemplo": [
              "If only I had saved more money!",
              "¡Si tan solo hubiera ahorrado más dinero!"
            ]
          },
          {
            "en": "I regret not doing it",
            "es": "me arrepiento de no haberlo hecho",
            "imagen": "Persona mirando un folleto de viaje viejo",
            "ejemplo": [
              "I regret not traveling when I was young.",
              "Me arrepiento de no haber viajado cuando era joven."
            ]
          },
          {
            "en": "it's too late now",
            "es": "ya es demasiado tarde",
            "imagen": "Reloj marcando la medianoche",
            "ejemplo": [
              "I wanted to apologize, but it's too late now.",
              "Quería disculparme, pero ya es demasiado tarde."
            ]
          },
          {
            "en": "a second chance",
            "es": "una segunda oportunidad",
            "imagen": "Persona tocando una puerta con esperanza",
            "ejemplo": [
              "Everyone deserves a second chance.",
              "Todos merecen una segunda oportunidad."
            ]
          },
          {
            "en": "learn from your mistakes",
            "es": "aprender de tus errores",
            "imagen": "Persona escribiendo notas con determinación",
            "ejemplo": [
              "The important thing is to learn from your mistakes.",
              "Lo importante es aprender de tus errores."
            ]
          }
        ]
      },
      {
        "id": "suerte",
        "titulo": "Por poco",
        "icono": "🍀",
        "patron": [
          "…would have…",
          "It was a close call.",
          "Thank goodness…"
        ],
        "palabras": [
          {
            "en": "a close call",
            "es": "por poco / se salvó de milagro",
            "imagen": "Ciclista frenando justo antes de un carro",
            "ejemplo": [
              "That was a close call!",
              "¡Eso estuvo cerca!"
            ]
          },
          {
            "en": "thank goodness",
            "es": "gracias a Dios",
            "imagen": "Persona aliviada con la mano en el pecho",
            "ejemplo": [
              "Thank goodness you were wearing a helmet.",
              "Gracias a Dios llevabas casco."
            ]
          },
          {
            "en": "just in time",
            "es": "justo a tiempo",
            "imagen": "Persona subiendo al tren justo cuando cierran las puertas",
            "ejemplo": [
              "We arrived just in time.",
              "Llegamos justo a tiempo."
            ]
          },
          {
            "en": "by chance",
            "es": "por casualidad",
            "imagen": "Dos amigos encontrándose sorprendidos en la calle",
            "ejemplo": [
              "We met by chance at the airport.",
              "Nos encontramos por casualidad en el aeropuerto."
            ]
          },
          {
            "en": "a lucky escape",
            "es": "un escape afortunado",
            "imagen": "Persona saliendo ilesa de un carro chocado",
            "ejemplo": [
              "It was a lucky escape. Nobody was hurt.",
              "Fue un escape afortunado. Nadie salió herido."
            ]
          },
          {
            "en": "it could have been worse",
            "es": "pudo haber sido peor",
            "imagen": "Persona con un brazo enyesado sonriendo",
            "ejemplo": [
              "I broke my arm, but it could have been worse.",
              "Me rompí el brazo, pero pudo haber sido peor."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "If I had known, I would have called you.",
        "es": "Si lo hubiera sabido, te habría llamado."
      },
      {
        "en": "If you had told me, I would have helped you.",
        "es": "Si me hubieras dicho, te habría ayudado."
      },
      {
        "en": "If we had left earlier, we would have caught the train.",
        "es": "Si hubiéramos salido antes, habríamos alcanzado el tren."
      },
      {
        "en": "If she hadn't fallen, she could have won.",
        "es": "Si no se hubiera caído, pudo haber ganado."
      },
      {
        "en": "If I'd known about the party, I'd have come.",
        "es": "Si hubiera sabido de la fiesta, habría venido."
      },
      {
        "en": "I regret not traveling when I was young.",
        "es": "Me arrepiento de no haber viajado cuando era joven."
      },
      {
        "en": "If only I had saved more money!",
        "es": "¡Si tan solo hubiera ahorrado más dinero!"
      },
      {
        "en": "I broke my arm, but it could have been worse.",
        "es": "Me rompí el brazo, pero pudo haber sido peor."
      },
      {
        "en": "We met by chance at the airport.",
        "es": "Nos encontramos por casualidad en el aeropuerto."
      },
      {
        "en": "Without the seatbelt, it would have been a disaster.",
        "es": "Sin el cinturón, habría sido un desastre."
      }
    ],
    "frases": [
      {
        "en": "If I had accepted that job in Monterrey, I would never have met my wife.",
        "es": "Si hubiera aceptado ese trabajo en Monterrey, nunca habría conocido a mi esposa.",
        "imagen": "Pareja feliz recordando cómo se conocieron en un café"
      },
      {
        "en": "If the doctor hadn't noticed the problem, my father might not have survived.",
        "es": "Si el doctor no hubiera notado el problema, tal vez mi papá no habría sobrevivido.",
        "imagen": "Doctor hablando con una familia aliviada en el hospital"
      },
      {
        "en": "We would have arrived on time if there hadn't been so much traffic on the highway.",
        "es": "Habríamos llegado a tiempo si no hubiera habido tanto tráfico en la carretera.",
        "imagen": "Carretera con muchos carros detenidos"
      },
      {
        "en": "If you had asked me, I would have lent you the money without any problem.",
        "es": "Si me lo hubieras pedido, te habría prestado el dinero sin problema.",
        "imagen": "Amigos conversando con sinceridad en una banca"
      },
      {
        "en": "If I hadn't gone to that concert, I wouldn't have discovered my favorite band.",
        "es": "Si no hubiera ido a ese concierto, no habría descubierto mi banda favorita.",
        "imagen": "Joven emocionado en un concierto"
      },
      {
        "en": "Looking back, I should have studied engineering instead of law.",
        "es": "Viéndolo en retrospectiva, debí haber estudiado ingeniería en vez de derecho.",
        "imagen": "Persona pensativa frente a libros de derecho"
      },
      {
        "en": "If we had booked the tickets earlier, we could have saved a lot of money.",
        "es": "Si hubiéramos reservado los boletos antes, habríamos podido ahorrar mucho dinero.",
        "imagen": "Pareja mirando precios altos de vuelos en la laptop"
      },
      {
        "en": "Had I known that the restaurant was closed, I wouldn't have driven all the way there.",
        "es": "De haber sabido que el restaurante estaba cerrado, no habría manejado hasta allá.",
        "imagen": "Persona frente a un restaurante cerrado de noche"
      },
      {
        "en": "If my grandparents hadn't emigrated, I would have grown up in a very different country.",
        "es": "Si mis abuelos no hubieran emigrado, habría crecido en un país muy diferente.",
        "imagen": "Foto antigua de una familia con maletas en un puerto"
      },
      {
        "en": "It was a close call: if I hadn't braked, I would have hit the dog.",
        "es": "Estuvo cerca: si no hubiera frenado, habría atropellado al perro.",
        "imagen": "Carro frenando con un perro cruzando la calle"
      }
    ],
    "listening": [
      {
        "audio": "If I had brought my umbrella, I wouldn't have gotten so wet.",
        "pregunta": "¿Qué le pasó?",
        "opciones": [
          "Se mojó mucho",
          "Perdió su paraguas",
          "Se enfermó",
          "Llegó tarde"
        ]
      },
      {
        "audio": "If we hadn't stopped for coffee, we would have caught the earlier flight.",
        "pregunta": "¿Por qué perdieron el vuelo anterior?",
        "opciones": [
          "Se pararon por un café",
          "Había tráfico",
          "Llegaron al aeropuerto equivocado",
          "Olvidaron los pasaportes"
        ]
      },
      {
        "audio": "If she had told me it was her birthday, I would have bought her a present.",
        "pregunta": "¿Qué habría hecho?",
        "opciones": [
          "Comprarle un regalo",
          "Llamarle",
          "Hacerle una fiesta",
          "Invitarla a cenar"
        ]
      },
      {
        "audio": "Looking back, I regret not learning English when I was a child.",
        "pregunta": "¿De qué se arrepiente?",
        "opciones": [
          "De no aprender inglés de niño",
          "De no viajar",
          "De no estudiar",
          "De mudarse"
        ]
      },
      {
        "audio": "It could have been worse. If he hadn't been wearing a helmet, he would have been badly hurt.",
        "pregunta": "¿Qué lo protegió?",
        "opciones": [
          "El casco",
          "El cinturón",
          "Un amigo",
          "La suerte"
        ]
      }
    ],
    "lectura": {
      "titulo": "The interview I almost missed",
      "texto": "Five years ago, I had an interview for my dream job at an engineering company in Querétaro. The night before, I set two alarms, but there was a power cut and my phone didn't charge. If the neighbor's dog hadn't started barking at seven, I would have slept until noon. I jumped out of bed, but I couldn't find my car keys. If I had left them in the usual place, I wouldn't have wasted twenty minutes looking for them. I finally took a taxi, and of course, there was a traffic jam. I arrived fifteen minutes late, sweating and nervous. I was sure they wouldn't even see me. But the manager smiled and said that he had been late too, because of the same traffic. The interview went perfectly. Looking back, if any small detail had been different, my life might have been completely different. And yes, I bought that dog a big bag of treats.",
      "preguntas": [
        {
          "pregunta": "¿Por qué no sonaron las alarmas?",
          "opciones": [
            "Se fue la luz y el celular no cargó",
            "Se le olvidó ponerlas",
            "El celular se rompió",
            "Las apagó dormido"
          ]
        },
        {
          "pregunta": "¿Qué lo despertó?",
          "opciones": [
            "El perro del vecino",
            "Su mamá",
            "Una llamada",
            "El tráfico"
          ]
        },
        {
          "pregunta": "¿Por qué el gerente no se enojó?",
          "opciones": [
            "Él también había llegado tarde por el tráfico",
            "No se dio cuenta",
            "Le cayó bien",
            "La entrevista se pospuso"
          ]
        },
        {
          "pregunta": "¿Qué le compró al perro?",
          "opciones": [
            "Una bolsa grande de premios",
            "Un juguete",
            "Una cama",
            "Nada"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con el tercer condicional.",
        "pregunta": "If I ___ (know), I would have told you.",
        "respuestas": [
          "had known",
          "'d known"
        ]
      },
      {
        "instruccion": "Completa con el tercer condicional.",
        "pregunta": "If she had studied, she ___ (pass).",
        "respuestas": [
          "would have passed",
          "'d have passed",
          "would've passed"
        ]
      },
      {
        "instruccion": "Completa con el tercer condicional.",
        "pregunta": "We ___ (not / miss) the bus if we had left earlier.",
        "respuestas": [
          "wouldn't have missed",
          "would not have missed"
        ]
      },
      {
        "instruccion": "Completa con el tercer condicional.",
        "pregunta": "If it ___ (not / rain), we would have gone to the beach.",
        "respuestas": [
          "hadn't rained",
          "had not rained"
        ]
      },
      {
        "instruccion": "Completa con could have.",
        "pregunta": "If I had had money, I ___ (buy) it.",
        "respuestas": [
          "could have bought",
          "could've bought"
        ]
      },
      {
        "instruccion": "¿Qué significa «'d» aquí? If I'd known… (had / would)",
        "pregunta": "If I'd known → 'd = ___",
        "respuestas": [
          "had"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Si lo hubiera sabido, habría venido.",
        "respuestas": [
          "If I had known, I would have come",
          "If I'd known, I'd have come",
          "If I had known, I'd have come",
          "If I'd known, I would have come"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Pudo haber sido peor.",
        "respuestas": [
          "It could have been worse",
          "It could've been worse"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Me arrepiento de no haber estudiado.",
        "respuestas": [
          "I regret not studying",
          "I regret not having studied"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "If I would have known, I would have called.",
        "respuestas": [
          "If I had known, I would have called",
          "If I'd known, I would have called",
          "If I had known, I'd have called"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "If we ___ earlier, we wouldn't have missed the start.",
        "opciones": [
          "had left",
          "left",
          "would leave",
          "have left"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "If you had asked, I ___ you.",
        "opciones": [
          "would have helped",
          "would help",
          "had helped",
          "helped"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "If she hadn't been so tired, she ___ to the party.",
        "opciones": [
          "might have gone",
          "might go",
          "had gone",
          "will have gone"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ I known, I would have come.",
        "opciones": [
          "Had",
          "Have",
          "If had",
          "Would"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«If I had studied, I would have passed» significa que:",
        "opciones": [
          "No estudié y no aprobé",
          "Estudié y aprobé",
          "Voy a estudiar",
          "Estudio siempre"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«It was a close call» significa:",
        "opciones": [
          "Estuvo cerca / por poco",
          "Fue una llamada corta",
          "Cerraron la llamada",
          "Llamaron de cerca"
        ]
      },
      {
        "tipo": "listening",
        "audio": "If I hadn't taken that photography class, I would never have become a photographer.",
        "pregunta": "¿Qué lo hizo fotógrafo?",
        "opciones": [
          "Una clase de fotografía",
          "Su papá",
          "Un viaje",
          "Un concurso"
        ]
      },
      {
        "tipo": "listening",
        "audio": "We could have won the final if our best player hadn't been injured.",
        "pregunta": "¿Por qué perdieron la final?",
        "opciones": [
          "Su mejor jugador estaba lesionado",
          "Llegaron tarde",
          "El árbitro se equivocó",
          "Llovió"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Si me hubieras dicho, te habría ayudado.",
        "respuestas": [
          "If you had told me, I would have helped you",
          "If you'd told me, I'd have helped you",
          "If you had told me, I'd have helped you"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: justo a tiempo",
        "respuestas": [
          "just in time"
        ]
      }
    ]
  },
  {
    "id": "b2-06",
    "num": 6,
    "titulo": "Condicionales mixtos",
    "contexto": "Si las cosas hubieran sido diferentes…",
    "explicacion": {
      "es": [
        "Los **condicionales mixtos** combinan tiempos porque la condición y el resultado están en **momentos distintos**. El más común: **pasado → presente**: ***If** I **had taken** that job, I **would be** rich now.* (Si hubiera aceptado ese trabajo, ahora sería rico.)",
        "Forma 1 (pasado → presente): ***If*** + **pasado perfecto**, ***would*** + **verbo base** (+ *now, today*): *If I **hadn't missed** the flight, I **would be** in Cancun now.*",
        "Forma 2 (presente → pasado): ***If*** + **pasado simple** (algo que es así siempre), ***would have*** + **participio**: *If I **spoke** English, I **would have gotten** that job last year.* (Si hablara inglés, me habrían dado ese trabajo el año pasado.)",
        "Ayuda pensar en **qué es verdad realmente**: *If I had studied medicine, I would be a doctor now* = no estudié medicina → **no** soy doctor."
      ],
      "tabla": {
        "columnas": [
          "Tipo",
          "Forma",
          "Ejemplo"
        ],
        "filas": [
          [
            "Pasado → presente",
            "If + had + participio, would + verbo",
            "If I had saved money, I would have a car now."
          ],
          [
            "Presente → pasado",
            "If + pasado simple, would have + participio",
            "If I weren't so shy, I would have talked to her."
          ],
          [
            "Tercer condicional (comparar)",
            "If + had + participio, would have + participio",
            "If I had saved money, I would have bought a car."
          ],
          [
            "Segundo condicional (comparar)",
            "If + pasado, would + verbo",
            "If I had money, I would buy a car."
          ]
        ]
      },
      "ojo": [
        "Fíjate en la palabra ***now***: casi siempre indica resultado en **presente**: *…I **would be** happier **now**.*",
        "Con *be* en la parte presente se usa ***were***: *If I **were** braver, I **would have** told him the truth.*",
        "No pongas *would* en la parte del *if*: *If I **had** studied* ✅, no *If I would have studied* ❌.",
        "Español: «si **hubiera** estudiado, **sería**…» (pasado → presente) / «si **fuera** más valiente, **habría**…» (presente → pasado).",
        "También con ***could*** y ***might***: *If I had learned to drive, I **could** drive you now.*"
      ],
      "en": [
        "Mixed conditionals combine different times. Past to present: If I had taken that job, I would be rich now.",
        "If I hadn't missed the flight, I would be in Cancun now.",
        "Present to past: If I spoke English, I would have gotten that job last year.",
        "If I had studied medicine, I would be a doctor now."
      ]
    },
    "vocabulario": [
      {
        "en": "I would be rich now.",
        "es": "ahora sería rico",
        "imagen": "Persona soñando despierta con una mansión",
        "ejemplo": [
          "If I had invested in that company, I would be rich now.",
          "Si hubiera invertido en esa empresa, ahora sería rico."
        ]
      },
      {
        "en": "I would be in Cancun now.",
        "es": "ahora estaría en Cancún",
        "imagen": "Persona en el aeropuerto mirando un vuelo perdido",
        "ejemplo": [
          "If I hadn't missed the flight, I would be in Cancun now.",
          "Si no hubiera perdido el vuelo, ahora estaría en Cancún."
        ]
      },
      {
        "en": "If I had studied medicine",
        "es": "si hubiera estudiado medicina",
        "imagen": "Persona mirando a un doctor con admiración",
        "ejemplo": [
          "If I had studied medicine, I would be a doctor now.",
          "Si hubiera estudiado medicina, ahora sería doctor."
        ]
      },
      {
        "en": "If I spoke English",
        "es": "si hablara inglés",
        "imagen": "Persona frustrada en una entrevista en inglés",
        "ejemplo": [
          "If I spoke English, I would have gotten that job.",
          "Si hablara inglés, me habrían dado ese trabajo."
        ]
      },
      {
        "en": "If I weren't so shy",
        "es": "si no fuera tan tímido",
        "imagen": "Persona tímida mirando de lejos a alguien en una fiesta",
        "ejemplo": [
          "If I weren't so shy, I would have asked her to dance.",
          "Si no fuera tan tímido, la habría invitado a bailar."
        ]
      },
      {
        "en": "I wouldn't be so tired.",
        "es": "no estaría tan cansado",
        "imagen": "Persona bostezando en el trabajo",
        "ejemplo": [
          "If I had gone to bed earlier, I wouldn't be so tired.",
          "Si me hubiera dormido más temprano, no estaría tan cansado."
        ]
      },
      {
        "en": "We would still be together.",
        "es": "seguiríamos juntos",
        "imagen": "Pareja mirando una foto antigua de los dos",
        "ejemplo": [
          "If we hadn't moved, we would still be together.",
          "Si no nos hubiéramos mudado, seguiríamos juntos."
        ]
      },
      {
        "en": "I would know the answer.",
        "es": "sabría la respuesta",
        "imagen": "Estudiante confundido frente a un examen",
        "ejemplo": [
          "If I had paid attention, I would know the answer.",
          "Si hubiera puesto atención, sabría la respuesta."
        ]
      },
      {
        "en": "If she were more organized",
        "es": "si ella fuera más organizada",
        "imagen": "Escritorio desordenado con papeles por todos lados",
        "ejemplo": [
          "If she were more organized, she wouldn't have lost the documents.",
          "Si fuera más organizada, no habría perdido los documentos."
        ]
      },
      {
        "en": "I could drive you.",
        "es": "te podría llevar",
        "imagen": "Persona mirando su licencia de manejo vencida",
        "ejemplo": [
          "If I had renewed my license, I could drive you now.",
          "Si hubiera renovado mi licencia, te podría llevar ahora."
        ]
      },
      {
        "en": "we would live in Spain",
        "es": "viviríamos en España",
        "imagen": "Calle de una ciudad española con balcones",
        "ejemplo": [
          "If my grandparents hadn't left, we would live in Spain.",
          "Si mis abuelos no se hubieran ido, viviríamos en España."
        ]
      },
      {
        "en": "If he weren't so stubborn",
        "es": "si no fuera tan terco",
        "imagen": "Hombre cruzado de brazos negándose a escuchar",
        "ejemplo": [
          "If he weren't so stubborn, he would have listened to the doctor.",
          "Si no fuera tan terco, le habría hecho caso al doctor."
        ]
      },
      {
        "en": "I'd have a better job.",
        "es": "tendría un mejor trabajo",
        "imagen": "Persona soñando con una oficina moderna",
        "ejemplo": [
          "If I had finished my degree, I'd have a better job.",
          "Si hubiera terminado mi carrera, tendría un mejor trabajo."
        ]
      },
      {
        "en": "If I didn't love her",
        "es": "si no la quisiera",
        "imagen": "Persona entregando flores con nervios",
        "ejemplo": [
          "If I didn't love her, I wouldn't have waited for her for so long.",
          "Si no la quisiera, no la habría esperado tanto tiempo."
        ]
      },
      {
        "en": "it would be finished by now",
        "es": "ya estaría terminado",
        "imagen": "Casa a medio construir con andamios",
        "ejemplo": [
          "If they had started on time, the house would be finished by now.",
          "Si hubieran empezado a tiempo, la casa ya estaría terminada."
        ]
      },
      {
        "en": "I wouldn't be here.",
        "es": "no estaría aquí",
        "imagen": "Persona agradecida abrazando a un rescatista",
        "ejemplo": [
          "If you hadn't helped me, I wouldn't be here today.",
          "Si no me hubieras ayudado, hoy no estaría aquí."
        ]
      }
    ],
    "grupos": [
      {
        "id": "vidas",
        "titulo": "Vidas diferentes",
        "icono": "🔀",
        "patron": [
          "If I had…, I would be…",
          "I'd be… now",
          "Things would be different."
        ],
        "palabras": [
          {
            "en": "Things would be different.",
            "es": "las cosas serían diferentes",
            "imagen": "Camino que se divide en dos direcciones",
            "ejemplo": [
              "If I had stayed in my town, things would be different.",
              "Si me hubiera quedado en mi pueblo, las cosas serían diferentes."
            ]
          },
          {
            "en": "a different path",
            "es": "otro camino",
            "imagen": "Persona en un cruce de caminos en el bosque",
            "ejemplo": [
              "If I had chosen a different path, where would I be now?",
              "Si hubiera elegido otro camino, ¿dónde estaría ahora?"
            ]
          },
          {
            "en": "I'd be married.",
            "es": "estaría casado",
            "imagen": "Anillo de compromiso en una cajita",
            "ejemplo": [
              "If I had said yes, I'd be married now.",
              "Si hubiera dicho que sí, ahora estaría casado."
            ]
          },
          {
            "en": "I'd be living abroad.",
            "es": "estaría viviendo en el extranjero",
            "imagen": "Persona con maletas frente a un aeropuerto internacional",
            "ejemplo": [
              "If I had accepted the scholarship, I'd be living abroad.",
              "Si hubiera aceptado la beca, estaría viviendo en el extranjero."
            ]
          },
          {
            "en": "I wouldn't have met you.",
            "es": "no te habría conocido",
            "imagen": "Pareja abrazada sonriendo",
            "ejemplo": [
              "If I weren't so curious, I wouldn't have met you.",
              "Si no fuera tan curioso, no te habría conocido."
            ]
          },
          {
            "en": "no regrets",
            "es": "sin arrepentimientos",
            "imagen": "Persona feliz mirando el atardecer",
            "ejemplo": [
              "I made my choices, and I have no regrets.",
              "Tomé mis decisiones y no me arrepiento."
            ]
          }
        ]
      },
      {
        "id": "personalidad",
        "titulo": "Por cómo soy",
        "icono": "🧑",
        "patron": [
          "If I weren't so…",
          "If I were more…",
          "…would have…"
        ],
        "palabras": [
          {
            "en": "lazy",
            "es": "flojo",
            "imagen": "Persona acostada en el sofá con el control de la tele",
            "ejemplo": [
              "If I weren't so lazy, I would have finished the project.",
              "Si no fuera tan flojo, habría terminado el proyecto."
            ]
          },
          {
            "en": "impatient",
            "es": "impaciente",
            "imagen": "Persona tamborileando los dedos en una fila",
            "ejemplo": [
              "If she weren't so impatient, she wouldn't have left the line.",
              "Si no fuera tan impaciente, no se habría salido de la fila."
            ]
          },
          {
            "en": "forgetful",
            "es": "olvidadizo",
            "imagen": "Persona buscando sus llaves con notas adhesivas por todos lados",
            "ejemplo": [
              "If I weren't so forgetful, I would have remembered your birthday.",
              "Si no fuera tan olvidadizo, me habría acordado de tu cumpleaños."
            ]
          },
          {
            "en": "brave",
            "es": "valiente",
            "imagen": "Persona a punto de saltar en paracaídas",
            "ejemplo": [
              "If I were braver, I would have tried skydiving.",
              "Si fuera más valiente, habría probado el paracaidismo."
            ]
          },
          {
            "en": "careful",
            "es": "cuidadoso",
            "imagen": "Persona cargando una caja frágil con cuidado",
            "ejemplo": [
              "If he were more careful, he wouldn't have broken his phone.",
              "Si fuera más cuidadoso, no habría roto su celular."
            ]
          },
          {
            "en": "generous",
            "es": "generoso",
            "imagen": "Persona donando ropa a una casa hogar",
            "ejemplo": [
              "If they weren't so generous, they wouldn't have helped so many people.",
              "Si no fueran tan generosos, no habrían ayudado a tanta gente."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "If I had invested in that company, I would be rich now.",
        "es": "Si hubiera invertido en esa empresa, ahora sería rico."
      },
      {
        "en": "If I hadn't missed the flight, I would be in Cancun now.",
        "es": "Si no hubiera perdido el vuelo, ahora estaría en Cancún."
      },
      {
        "en": "If I spoke English, I would have gotten that job.",
        "es": "Si hablara inglés, me habrían dado ese trabajo."
      },
      {
        "en": "If I weren't so shy, I would have asked her to dance.",
        "es": "Si no fuera tan tímido, la habría invitado a bailar."
      },
      {
        "en": "If I had gone to bed earlier, I wouldn't be so tired.",
        "es": "Si me hubiera dormido más temprano, no estaría tan cansado."
      },
      {
        "en": "If you hadn't helped me, I wouldn't be here today.",
        "es": "Si no me hubieras ayudado, hoy no estaría aquí."
      },
      {
        "en": "If they had started on time, the house would be finished by now.",
        "es": "Si hubieran empezado a tiempo, la casa ya estaría terminada."
      },
      {
        "en": "If I weren't so forgetful, I would have remembered your birthday.",
        "es": "Si no fuera tan olvidadizo, me habría acordado de tu cumpleaños."
      },
      {
        "en": "I made my choices, and I have no regrets.",
        "es": "Tomé mis decisiones y no me arrepiento."
      },
      {
        "en": "If I had chosen a different path, where would I be now?",
        "es": "Si hubiera elegido otro camino, ¿dónde estaría ahora?"
      }
    ],
    "frases": [
      {
        "en": "If my parents hadn't moved to Monterrey in the nineties, I would probably be living in a small town in Zacatecas now.",
        "es": "Si mis papás no se hubieran mudado a Monterrey en los noventa, probablemente ahora estaría viviendo en un pueblito de Zacatecas.",
        "imagen": "Pueblo pequeño de Zacatecas con casas de cantera"
      },
      {
        "en": "If I were better at saving money, I would have bought a house years ago.",
        "es": "Si fuera mejor para ahorrar, habría comprado una casa hace años.",
        "imagen": "Persona mirando una alcancía vacía frente a anuncios de casas"
      },
      {
        "en": "If she hadn't broken her leg last month, she would be competing in the national championship today.",
        "es": "Si no se hubiera roto la pierna el mes pasado, hoy estaría compitiendo en el campeonato nacional.",
        "imagen": "Atleta con muletas viendo una competencia por la tele"
      },
      {
        "en": "If we had planted the trees ten years ago, the park would be full of shade now.",
        "es": "Si hubiéramos plantado los árboles hace diez años, el parque ahora estaría lleno de sombra.",
        "imagen": "Parque con árboles pequeños bajo el sol intenso"
      },
      {
        "en": "If he weren't afraid of flying, he would have visited his daughter in Canada last Christmas.",
        "es": "Si no le diera miedo volar, habría visitado a su hija en Canadá la Navidad pasada.",
        "imagen": "Señor mirando aviones despegar con nostalgia"
      },
      {
        "en": "If I had learned to cook when I was young, I wouldn't be eating instant noodles every night.",
        "es": "Si hubiera aprendido a cocinar de joven, no estaría comiendo sopa instantánea todas las noches.",
        "imagen": "Persona comiendo sopa instantánea sola en su cocina"
      },
      {
        "en": "If the government had invested in public transport, the traffic wouldn't be so terrible today.",
        "es": "Si el gobierno hubiera invertido en transporte público, el tráfico hoy no sería tan terrible.",
        "imagen": "Avenida congestionada sin transporte público"
      },
      {
        "en": "If you were a more careful driver, you wouldn't have gotten three tickets this year.",
        "es": "Si fueras un conductor más cuidadoso, no te habrían puesto tres multas este año.",
        "imagen": "Agente de tránsito entregando una multa a un conductor"
      },
      {
        "en": "If I hadn't taken that English course, I wouldn't be working for this international company now.",
        "es": "Si no hubiera tomado ese curso de inglés, ahora no estaría trabajando en esta empresa internacional.",
        "imagen": "Persona en una junta internacional hablando con confianza"
      },
      {
        "en": "If they had listened to the warnings, they wouldn't be in this difficult situation now.",
        "es": "Si hubieran hecho caso a las advertencias, ahora no estarían en esta situación difícil.",
        "imagen": "Personas preocupadas frente a una casa dañada por una inundación"
      }
    ],
    "listening": [
      {
        "audio": "If I had bought that apartment ten years ago, it would be worth twice as much now.",
        "pregunta": "¿Cuánto valdría ahora el departamento?",
        "opciones": [
          "El doble",
          "Lo mismo",
          "La mitad",
          "Diez veces más"
        ]
      },
      {
        "audio": "If I weren't so busy, I would have gone to your party.",
        "pregunta": "¿Por qué no fue a la fiesta?",
        "opciones": [
          "Está muy ocupado",
          "No lo invitaron",
          "Estaba enfermo",
          "Se le olvidó"
        ]
      },
      {
        "audio": "If we hadn't sold the car, we could drive to the beach this weekend.",
        "pregunta": "¿Por qué no pueden manejar a la playa?",
        "opciones": [
          "Vendieron el carro",
          "El carro está descompuesto",
          "No tienen licencia",
          "Hay mucho tráfico"
        ]
      },
      {
        "audio": "If she had taken the medicine, she wouldn't be sick today.",
        "pregunta": "¿Qué no hizo?",
        "opciones": [
          "Tomarse la medicina",
          "Ir al doctor",
          "Descansar",
          "Comer bien"
        ]
      },
      {
        "audio": "If I spoke French, I would have understood the movie.",
        "pregunta": "¿Por qué no entendió la película?",
        "opciones": [
          "No habla francés",
          "El sonido era malo",
          "Se durmió",
          "Llegó tarde"
        ]
      }
    ],
    "lectura": {
      "titulo": "Two roads",
      "texto": "When Javier was eighteen, he had two options. His uncle offered him a job in his car repair shop, and at the same time, he got a scholarship to study music in Mexico City. Everybody told him to take the job, because music wasn't a real career. Javier thought about it for weeks and finally chose music. Today, at forty, he plays the violin in a national orchestra and teaches children on weekends. He sometimes wonders: if I had accepted my uncle's job, I would probably own the shop now, and I would have more money. But I wouldn't be doing what I love. His cousin Pedro took the job instead. If Pedro weren't so good with engines, he wouldn't have turned the small shop into a big business with three branches. Both of them are happy. As Javier says: there isn't a right or wrong road, only the one you choose and the way you walk it.",
      "preguntas": [
        {
          "pregunta": "¿Qué dos opciones tenía Javier?",
          "opciones": [
            "Trabajar en el taller o estudiar música",
            "Estudiar medicina o ingeniería",
            "Irse al extranjero o quedarse",
            "Casarse o estudiar"
          ]
        },
        {
          "pregunta": "¿Qué hace Javier ahora?",
          "opciones": [
            "Toca el violín en una orquesta y da clases",
            "Tiene un taller",
            "Es mecánico",
            "Vende instrumentos"
          ]
        },
        {
          "pregunta": "¿Qué pasaría si hubiera aceptado el trabajo?",
          "opciones": [
            "Sería dueño del taller y tendría más dinero",
            "Sería músico famoso",
            "Viviría en el extranjero",
            "Estaría desempleado"
          ]
        },
        {
          "pregunta": "¿Qué logró Pedro?",
          "opciones": [
            "Convertir el taller en un negocio con tres sucursales",
            "Estudiar música",
            "Vender el taller",
            "Mudarse a la capital"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa el condicional mixto (pasado → presente).",
        "pregunta": "If I had saved money, I ___ (have) a car now.",
        "respuestas": [
          "would have",
          "'d have"
        ]
      },
      {
        "instruccion": "Completa el condicional mixto (pasado → presente).",
        "pregunta": "If she hadn't missed the bus, she ___ (be) here now.",
        "respuestas": [
          "would be",
          "'d be"
        ]
      },
      {
        "instruccion": "Completa el condicional mixto (presente → pasado).",
        "pregunta": "If I ___ (be) braver, I would have told him.",
        "respuestas": [
          "were",
          "was"
        ]
      },
      {
        "instruccion": "Completa el condicional mixto (presente → pasado).",
        "pregunta": "If he spoke English, he ___ (get) the job last year.",
        "respuestas": [
          "would have gotten",
          "would have got",
          "'d have gotten"
        ]
      },
      {
        "instruccion": "Completa la condición.",
        "pregunta": "If I ___ (go) to bed earlier, I wouldn't be tired now.",
        "respuestas": [
          "had gone",
          "'d gone"
        ]
      },
      {
        "instruccion": "Completa con could.",
        "pregunta": "If I had learned to swim, I ___ swim with you now.",
        "respuestas": [
          "could"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Si hubiera estudiado medicina, ahora sería doctor.",
        "respuestas": [
          "If I had studied medicine, I would be a doctor now",
          "If I'd studied medicine, I'd be a doctor now",
          "If I had studied medicine, I'd be a doctor now"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Si no fuera tan tímido, la habría invitado.",
        "respuestas": [
          "If I weren't so shy, I would have invited her",
          "If I wasn't so shy, I would have invited her",
          "If I weren't so shy, I'd have invited her",
          "If I weren't so shy, I would have asked her"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "no me arrepiento",
        "respuestas": [
          "I have no regrets",
          "I don't regret it",
          "no regrets"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "If I would have studied, I would be a doctor now.",
        "respuestas": [
          "If I had studied, I would be a doctor now",
          "If I'd studied, I'd be a doctor now",
          "If I had studied, I'd be a doctor now"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "If I had taken the job, I ___ in Canada now.",
        "opciones": [
          "would be living",
          "would have lived",
          "will live",
          "had lived"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "If she ___ so shy, she would have spoken at the meeting.",
        "opciones": [
          "weren't",
          "hadn't been",
          "isn't",
          "wouldn't be"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "If we had left earlier, we ___ stuck in traffic now.",
        "opciones": [
          "wouldn't be",
          "wouldn't have been",
          "won't be",
          "hadn't been"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«If I had studied medicine, I would be a doctor» significa:",
        "opciones": [
          "No estudié medicina y no soy doctor",
          "Estudié medicina y soy doctor",
          "Voy a estudiar medicina",
          "Soy doctor pero no estudié"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "If he weren't so stubborn, he ___ to the doctor last week.",
        "opciones": [
          "would have gone",
          "would go",
          "will go",
          "had gone"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es correcta?",
        "opciones": [
          "If I had saved, I would be rich now.",
          "If I would save, I had been rich.",
          "If I saved, I would have been rich now ago.",
          "If I have saved, I would rich."
        ]
      },
      {
        "tipo": "listening",
        "audio": "If I hadn't lost my passport, I would be in Paris right now.",
        "pregunta": "¿Dónde estaría ahora?",
        "opciones": [
          "En París",
          "En casa",
          "En el aeropuerto",
          "En Madrid"
        ]
      },
      {
        "tipo": "listening",
        "audio": "If my brother were more responsible, my parents would have lent him the car.",
        "pregunta": "¿Por qué no le prestaron el carro?",
        "opciones": [
          "No es responsable",
          "No tiene licencia",
          "El carro estaba descompuesto",
          "Lo necesitaban ellos"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Si no me hubieras ayudado, no estaría aquí.",
        "respuestas": [
          "If you hadn't helped me, I wouldn't be here",
          "If you had not helped me, I would not be here"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: las cosas serían diferentes",
        "respuestas": [
          "things would be different"
        ]
      }
    ]
  },
  {
    "id": "b2-07",
    "num": 7,
    "titulo": "Unless, as long as, provided that, in case",
    "contexto": "Condiciones y precauciones",
    "explicacion": {
      "es": [
        "Además de *if*, hay otras formas de poner **condiciones**. ***Unless*** = **a menos que / si no**: *I won't go **unless** you come with me.* (No voy a menos que vengas conmigo.)",
        "***As long as***, ***provided that*** y ***providing*** = **siempre y cuando / con tal de que** (condición necesaria): *You can borrow my car **as long as** you bring it back tonight.* *Provided that* es más formal.",
        "***In case*** = **por si acaso**: es una **precaución** para algo que **podría** pasar: *Take an umbrella **in case** it rains.* (Llévate paraguas por si llueve.) ¡No es lo mismo que *if*!",
        "Con todos estos conectores, cuando hablamos del futuro, se usa **presente** después de ellos: *as long as you **are** careful* (no *will be*). También ***even if*** = **aunque / incluso si**: *I'll go **even if** it rains.*"
      ],
      "tabla": {
        "columnas": [
          "Conector",
          "Significado",
          "Ejemplo"
        ],
        "filas": [
          [
            "unless",
            "a menos que",
            "We'll lose unless we train harder."
          ],
          [
            "as long as",
            "siempre y cuando",
            "You can stay as long as you're quiet."
          ],
          [
            "provided that",
            "con la condición de que (formal)",
            "You'll get a discount provided that you pay in cash."
          ],
          [
            "in case",
            "por si (precaución)",
            "Write it down in case you forget."
          ],
          [
            "even if",
            "aunque / incluso si",
            "I'll finish it even if it takes all night."
          ]
        ]
      },
      "ojo": [
        "*Take a coat **in case** it gets cold* (llévalo de todos modos, por si acaso) ≠ *Take a coat **if** it gets cold* (solo si hace frío).",
        "***Unless*** ya es negativo: *unless you **study*** ✅, no *unless you don't study* ❌.",
        "Después de estos conectores, presente para el futuro: *in case it **rains*** ✅, no *in case it will rain* ❌.",
        "***Just in case*** (por si las dudas) también va solo al final: *I'll bring some cash, **just in case**.*",
        "***Otherwise*** = **si no, de lo contrario**: *Hurry up, **otherwise** we'll miss the bus.*"
      ],
      "en": [
        "Unless means if not: I won't go unless you come with me.",
        "As long as and provided that mean only if: You can borrow my car as long as you bring it back tonight.",
        "In case is a precaution: Take an umbrella in case it rains.",
        "Even if means it doesn't matter: I'll go even if it rains."
      ]
    },
    "vocabulario": [
      {
        "en": "unless you come with me",
        "es": "a menos que vengas conmigo",
        "imagen": "Amiga convenciendo a otra de ir a una fiesta",
        "ejemplo": [
          "I won't go unless you come with me.",
          "No voy a menos que vengas conmigo."
        ]
      },
      {
        "en": "as long as you're careful",
        "es": "siempre y cuando tengas cuidado",
        "imagen": "Papá entregando las llaves del carro a su hija",
        "ejemplo": [
          "You can take the car as long as you're careful.",
          "Puedes llevarte el carro siempre y cuando tengas cuidado."
        ]
      },
      {
        "en": "provided that you pay in cash",
        "es": "con la condición de que pague en efectivo",
        "imagen": "Cliente pagando con billetes en una tienda",
        "ejemplo": [
          "You'll get a discount provided that you pay in cash.",
          "Le damos descuento con la condición de que pague en efectivo."
        ]
      },
      {
        "en": "in case it rains",
        "es": "por si llueve",
        "imagen": "Persona metiendo un paraguas en su mochila",
        "ejemplo": [
          "Take an umbrella in case it rains.",
          "Llévate paraguas por si llueve."
        ]
      },
      {
        "en": "just in case",
        "es": "por si las dudas",
        "imagen": "Persona guardando una lámpara en el carro",
        "ejemplo": [
          "I'll bring some extra water, just in case.",
          "Voy a llevar agua de más, por si las dudas."
        ]
      },
      {
        "en": "even if it rains",
        "es": "aunque llueva",
        "imagen": "Corredores en un maratón bajo la lluvia",
        "ejemplo": [
          "The race will happen even if it rains.",
          "La carrera se hará aunque llueva."
        ]
      },
      {
        "en": "otherwise",
        "es": "si no / de lo contrario",
        "imagen": "Persona corriendo a la parada del camión",
        "ejemplo": [
          "Hurry up, otherwise we'll miss the bus.",
          "Apúrate, si no vamos a perder el camión."
        ]
      },
      {
        "en": "on condition that",
        "es": "con la condición de que",
        "imagen": "Contrato sobre una mesa con una pluma",
        "ejemplo": [
          "They hired him on condition that he moves to Monterrey.",
          "Lo contrataron con la condición de que se mude a Monterrey."
        ]
      },
      {
        "en": "in case of emergency",
        "es": "en caso de emergencia",
        "imagen": "Extintor rojo en la pared de un pasillo",
        "ejemplo": [
          "In case of emergency, use the stairs.",
          "En caso de emergencia, use las escaleras."
        ]
      },
      {
        "en": "unless it's urgent",
        "es": "a menos que sea urgente",
        "imagen": "Persona con audífonos concentrada en su trabajo",
        "ejemplo": [
          "Don't call me unless it's urgent.",
          "No me llames a menos que sea urgente."
        ]
      },
      {
        "en": "as long as it's cheap",
        "es": "con tal de que sea barato",
        "imagen": "Persona revisando precios en un mercado",
        "ejemplo": [
          "I don't mind the color, as long as it's cheap.",
          "No me importa el color, con tal de que sea barato."
        ]
      },
      {
        "en": "in case you get hungry",
        "es": "por si te da hambre",
        "imagen": "Mamá metiendo un sándwich en la mochila de su hijo",
        "ejemplo": [
          "I put a sandwich in your bag in case you get hungry.",
          "Te puse un sándwich en la mochila por si te da hambre."
        ]
      },
      {
        "en": "supposing",
        "es": "suponiendo que",
        "imagen": "Persona pensativa haciendo cuentas",
        "ejemplo": [
          "Supposing you won the lottery, what would you do?",
          "Suponiendo que te ganaras la lotería, ¿qué harías?"
        ]
      },
      {
        "en": "whether or not",
        "es": "ya sea que… o no",
        "imagen": "Persona decidida con la mochila lista",
        "ejemplo": [
          "I'm going whether or not you come.",
          "Voy a ir, vengas o no."
        ]
      },
      {
        "en": "only if",
        "es": "solo si",
        "imagen": "Persona levantando un dedo como condición",
        "ejemplo": [
          "I'll help you, but only if you help me too.",
          "Te ayudo, pero solo si tú también me ayudas."
        ]
      },
      {
        "en": "providing",
        "es": "siempre que",
        "imagen": "Agente de viajes mostrando un folleto",
        "ejemplo": [
          "Providing the weather is good, the boat leaves at nine.",
          "Siempre que el clima sea bueno, la lancha sale a las nueve."
        ]
      }
    ],
    "grupos": [
      {
        "id": "precauciones",
        "titulo": "Precauciones",
        "icono": "🧳",
        "patron": [
          "…in case…",
          "Just in case.",
          "…otherwise…"
        ],
        "palabras": [
          {
            "en": "a first aid kit",
            "es": "un botiquín",
            "imagen": "Botiquín rojo abierto con vendas",
            "ejemplo": [
              "Take a first aid kit in case someone gets hurt.",
              "Lleva un botiquín por si alguien se lastima."
            ]
          },
          {
            "en": "a spare key",
            "es": "una llave de repuesto",
            "imagen": "Llave escondida bajo una maceta",
            "ejemplo": [
              "Leave a spare key with your neighbor in case you lose yours.",
              "Deja una llave de repuesto con tu vecino por si pierdes la tuya."
            ]
          },
          {
            "en": "a power bank",
            "es": "una batería portátil",
            "imagen": "Celular conectado a una batería portátil",
            "ejemplo": [
              "I always carry a power bank in case my phone dies.",
              "Siempre traigo una batería portátil por si se me acaba la pila."
            ]
          },
          {
            "en": "travel insurance",
            "es": "seguro de viaje",
            "imagen": "Persona revisando documentos antes de viajar",
            "ejemplo": [
              "Buy travel insurance in case you get sick abroad.",
              "Compra seguro de viaje por si te enfermas en el extranjero."
            ]
          },
          {
            "en": "back up your files",
            "es": "respaldar tus archivos",
            "imagen": "Disco duro externo conectado a una laptop",
            "ejemplo": [
              "Back up your files in case your computer breaks.",
              "Respalda tus archivos por si se descompone tu computadora."
            ]
          },
          {
            "en": "a raincoat",
            "es": "un impermeable",
            "imagen": "Impermeable amarillo colgado en la puerta",
            "ejemplo": [
              "Pack a raincoat in case it rains in the mountains.",
              "Empaca un impermeable por si llueve en las montañas."
            ]
          }
        ]
      },
      {
        "id": "condiciones",
        "titulo": "Poner condiciones",
        "icono": "🤝",
        "patron": [
          "Only if…",
          "As long as…",
          "On one condition:"
        ],
        "palabras": [
          {
            "en": "on one condition",
            "es": "con una condición",
            "imagen": "Mamá levantando un dedo mientras sonríe",
            "ejemplo": [
              "You can go to the party on one condition: be home by midnight.",
              "Puedes ir a la fiesta con una condición: estar en casa a medianoche."
            ]
          },
          {
            "en": "it's a deal",
            "es": "trato hecho",
            "imagen": "Dos personas estrechando la mano",
            "ejemplo": [
              "You cook and I'll wash the dishes. It's a deal!",
              "Tú cocinas y yo lavo los trastes. ¡Trato hecho!"
            ]
          },
          {
            "en": "the terms",
            "es": "las condiciones",
            "imagen": "Contrato con letras pequeñas y una lupa",
            "ejemplo": [
              "Read the terms before you sign.",
              "Lee las condiciones antes de firmar."
            ]
          },
          {
            "en": "no matter what",
            "es": "pase lo que pase",
            "imagen": "Persona abrazando a su amigo con apoyo",
            "ejemplo": [
              "I'll be there for you, no matter what.",
              "Estaré contigo, pase lo que pase."
            ]
          },
          {
            "en": "it depends on",
            "es": "depende de",
            "imagen": "Persona mirando el pronóstico del clima",
            "ejemplo": [
              "Whether we go or not depends on the weather.",
              "Si vamos o no depende del clima."
            ]
          },
          {
            "en": "fair enough",
            "es": "me parece justo",
            "imagen": "Persona asintiendo con una sonrisa",
            "ejemplo": [
              "You pay for dinner and I'll pay for the movie. Fair enough.",
              "Tú pagas la cena y yo el cine. Me parece justo."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I won't go unless you come with me.",
        "es": "No voy a menos que vengas conmigo."
      },
      {
        "en": "You can take the car as long as you're careful.",
        "es": "Puedes llevarte el carro siempre y cuando tengas cuidado."
      },
      {
        "en": "Take an umbrella in case it rains.",
        "es": "Llévate paraguas por si llueve."
      },
      {
        "en": "I'll bring some extra water, just in case.",
        "es": "Voy a llevar agua de más, por si las dudas."
      },
      {
        "en": "The race will happen even if it rains.",
        "es": "La carrera se hará aunque llueva."
      },
      {
        "en": "Hurry up, otherwise we'll miss the bus.",
        "es": "Apúrate, si no vamos a perder el camión."
      },
      {
        "en": "Don't call me unless it's urgent.",
        "es": "No me llames a menos que sea urgente."
      },
      {
        "en": "In case of emergency, use the stairs.",
        "es": "En caso de emergencia, use las escaleras."
      },
      {
        "en": "I'm going whether or not you come.",
        "es": "Voy a ir, vengas o no."
      },
      {
        "en": "You can go to the party on one condition: be home by midnight.",
        "es": "Puedes ir a la fiesta con una condición: estar en casa a medianoche."
      }
    ],
    "frases": [
      {
        "en": "You can borrow my laptop as long as you don't eat or drink near it.",
        "es": "Puedes usar mi laptop siempre y cuando no comas ni bebas cerca.",
        "imagen": "Persona usando una laptop prestada con cuidado"
      },
      {
        "en": "I always keep some cash in my wallet in case the card machine doesn't work.",
        "es": "Siempre traigo algo de efectivo en la cartera por si no sirve la terminal.",
        "imagen": "Persona sacando billetes en un puesto del mercado"
      },
      {
        "en": "We won't finish the project on time unless we get more people to help us.",
        "es": "No terminaremos el proyecto a tiempo a menos que consigamos más gente que nos ayude.",
        "imagen": "Equipo pequeño agobiado con mucho trabajo"
      },
      {
        "en": "The bank will lend you the money provided that you have a stable job.",
        "es": "El banco te prestará el dinero con la condición de que tengas un trabajo estable.",
        "imagen": "Persona firmando un préstamo en un banco"
      },
      {
        "en": "Write down my number in case you need anything while I'm away.",
        "es": "Anota mi número por si necesitas algo mientras no estoy.",
        "imagen": "Persona apuntando un número en un papel junto al refrigerador"
      },
      {
        "en": "I'll support your decision even if I don't agree with it.",
        "es": "Apoyaré tu decisión aunque no esté de acuerdo.",
        "imagen": "Padre abrazando a su hijo que se va a otra ciudad"
      },
      {
        "en": "You'd better book a table, otherwise we won't get in. It's always full on Fridays.",
        "es": "Mejor reserva una mesa, si no, no vamos a entrar. Los viernes siempre está lleno.",
        "imagen": "Restaurante lleno con gente esperando afuera"
      },
      {
        "en": "Supposing the flight is canceled, do you have a plan B?",
        "es": "Suponiendo que se cancele el vuelo, ¿tienes un plan B?",
        "imagen": "Pasajeros mirando una pantalla con vuelos cancelados"
      },
      {
        "en": "The kids can play outside as long as they stay where I can see them.",
        "es": "Los niños pueden jugar afuera siempre y cuando se queden donde los pueda ver.",
        "imagen": "Niños jugando en el jardín con su mamá mirando desde la ventana"
      },
      {
        "en": "Leave a spare key with the neighbors in case you get locked out again.",
        "es": "Deja una llave de repuesto con los vecinos por si te vuelves a quedar afuera.",
        "imagen": "Persona sentada afuera de su puerta cerrada"
      }
    ],
    "listening": [
      {
        "audio": "You can watch TV as long as you finish your homework first.",
        "pregunta": "¿Qué tiene que hacer primero?",
        "opciones": [
          "Terminar la tarea",
          "Cenar",
          "Bañarse",
          "Limpiar su cuarto"
        ]
      },
      {
        "audio": "Take some snacks in case the restaurant is closed.",
        "pregunta": "¿Por qué debe llevar algo de comer?",
        "opciones": [
          "Por si el restaurante está cerrado",
          "Porque tiene hambre",
          "Porque es barato",
          "Porque no hay comida"
        ]
      },
      {
        "audio": "We won't go camping unless the weather improves.",
        "pregunta": "¿Qué tiene que pasar para que acampen?",
        "opciones": [
          "Que mejore el clima",
          "Que llueva",
          "Que consigan una tienda",
          "Que tengan vacaciones"
        ]
      },
      {
        "audio": "I'll come to the wedding even if I have to drive all night.",
        "pregunta": "¿Qué hará?",
        "opciones": [
          "Irá a la boda aunque tenga que manejar toda la noche",
          "No irá a la boda",
          "Irá en avión",
          "Llegará tarde"
        ]
      },
      {
        "audio": "You'll get a ten percent discount provided that you show your student card.",
        "pregunta": "¿Qué necesita para el descuento?",
        "opciones": [
          "Su credencial de estudiante",
          "Pagar en efectivo",
          "Comprar dos",
          "Ser cliente frecuente"
        ]
      }
    ],
    "lectura": {
      "titulo": "Camping rules",
      "texto": "Before our camping trip to the Nevado de Toluca, our guide, Ernesto, gave us some important rules. First, nobody walks alone unless they have a radio. Second, we can light a fire as long as it's in the special area and someone watches it all the time. He told us to pack warm clothes in case the temperature drops below zero at night, which happens even in spring. We had to bring a flashlight and extra batteries, just in case. He also said that we would climb to the top of the volcano provided that the weather was good; otherwise, we would stay near the lake. Some people complained that it was too many rules, but Ernesto smiled and said: The mountain is beautiful, but it doesn't forgive mistakes. On the second night, the temperature fell to minus five degrees, and we were all very grateful for our extra sweaters.",
      "preguntas": [
        {
          "pregunta": "¿Cuándo se puede caminar solo?",
          "opciones": [
            "Solo si se lleva un radio",
            "Nunca",
            "De día",
            "Con permiso del guía"
          ]
        },
        {
          "pregunta": "¿Por qué debían llevar ropa abrigadora?",
          "opciones": [
            "Por si la temperatura bajaba de cero",
            "Porque llovía",
            "Para la fogata",
            "Para dormir en el lago"
          ]
        },
        {
          "pregunta": "¿De qué dependía subir a la cima?",
          "opciones": [
            "Del clima",
            "Del guía",
            "Del dinero",
            "De la hora"
          ]
        },
        {
          "pregunta": "¿A cuánto bajó la temperatura la segunda noche?",
          "opciones": [
            "Menos cinco grados",
            "Cero grados",
            "Cinco grados",
            "Menos quince grados"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con unless, as long as o in case.",
        "pregunta": "Take a jacket ___ it gets cold.",
        "respuestas": [
          "in case"
        ]
      },
      {
        "instruccion": "Completa con unless, as long as o in case.",
        "pregunta": "I won't go ___ you come with me.",
        "respuestas": [
          "unless"
        ]
      },
      {
        "instruccion": "Completa con unless, as long as o in case.",
        "pregunta": "You can stay ___ you're quiet.",
        "respuestas": [
          "as long as",
          "so long as",
          "provided that",
          "providing"
        ]
      },
      {
        "instruccion": "Completa con even if u otherwise.",
        "pregunta": "I'll finish it ___ it takes all night.",
        "respuestas": [
          "even if"
        ]
      },
      {
        "instruccion": "Completa con even if u otherwise.",
        "pregunta": "Study hard, ___ you'll fail.",
        "respuestas": [
          "otherwise",
          "or"
        ]
      },
      {
        "instruccion": "Completa con el verbo en presente.",
        "pregunta": "I'll bring an umbrella in case it ___ (rain).",
        "respuestas": [
          "rains"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "por si las dudas",
        "respuestas": [
          "just in case"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "No me llames a menos que sea urgente.",
        "respuestas": [
          "Don't call me unless it's urgent",
          "Don't call me unless it is urgent",
          "Do not call me unless it's urgent"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "pase lo que pase",
        "respuestas": [
          "no matter what",
          "whatever happens"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I won't help you unless you don't apologize.",
        "respuestas": [
          "I won't help you unless you apologize",
          "I will not help you unless you apologize"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "Bring a sweater ___ it gets cold.",
        "opciones": [
          "in case",
          "unless",
          "as long as",
          "otherwise"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "You can use my phone ___ you don't call abroad.",
        "opciones": [
          "as long as",
          "in case",
          "unless",
          "even if"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We'll be late ___ we leave now.",
        "opciones": [
          "unless",
          "as long as",
          "in case",
          "provided"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I'll go to the beach ___ it rains. Nothing will stop me!",
        "opciones": [
          "even if",
          "unless",
          "in case",
          "provided that"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Take a map in case you get lost» significa:",
        "opciones": [
          "Lleva un mapa por si te pierdes",
          "Lleva un mapa solo si te pierdes",
          "No lleves mapa",
          "Piérdete con el mapa"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I'll buy it provided that it ___ too expensive.",
        "opciones": [
          "isn't",
          "won't be",
          "wasn't",
          "not is"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Keep this number in case you have any problems with the apartment.",
        "pregunta": "¿Para qué es el número?",
        "opciones": [
          "Por si tiene problemas con el departamento",
          "Para pagar la renta",
          "Para pedir comida",
          "Para llamar al vecino"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The concert will go ahead unless there's a storm.",
        "pregunta": "¿Qué cancelaría el concierto?",
        "opciones": [
          "Una tormenta",
          "La lluvia ligera",
          "El frío",
          "Pocos boletos vendidos"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: siempre y cuando tengas cuidado",
        "respuestas": [
          "as long as you're careful",
          "as long as you are careful",
          "provided that you're careful",
          "so long as you're careful"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: aunque llueva",
        "respuestas": [
          "even if it rains"
        ]
      }
    ]
  },
  {
    "id": "b2-08",
    "num": 8,
    "titulo": "Wish / if only (presente, pasado y would)",
    "contexto": "Deseos y lamentos",
    "explicacion": {
      "es": [
        "***Wish*** + **pasado simple** expresa un deseo sobre el **presente** que no es real: *I **wish** I **had** more time.* (Ojalá tuviera más tiempo.) *I wish I **were** taller.* (Con *be* se usa ***were***.)",
        "***Wish*** + **pasado perfecto** expresa un **lamento** sobre el **pasado**: *I **wish** I **had studied** harder.* (Ojalá hubiera estudiado más.) *She wishes she **hadn't said** that.*",
        "***Wish*** + ***would*** expresa **molestia** por algo que otra persona hace y que quisiéramos que cambiara: *I **wish** you **would stop** interrupting me.* (Ojalá dejaras de interrumpirme.) No se usa con *I*.",
        "***If only*** es igual que *wish*, pero **más fuerte y emocional**: ***If only** I **knew** the answer! **If only** I **hadn't lost** my keys!* (¡Si tan solo…!)"
      ],
      "tabla": {
        "columnas": [
          "Tiempo del deseo",
          "Forma",
          "Ejemplo"
        ],
        "filas": [
          [
            "Presente",
            "wish + pasado simple",
            "I wish I lived near the beach."
          ],
          [
            "Presente (be)",
            "wish + were",
            "I wish it were Friday."
          ],
          [
            "Pasado",
            "wish + had + participio",
            "I wish I had gone to the party."
          ],
          [
            "Molestia / cambio",
            "wish + would + verbo",
            "I wish it would stop raining."
          ],
          [
            "Más fuerte",
            "If only + …",
            "If only I had more money!"
          ]
        ]
      },
      "ojo": [
        "Para deseos **posibles** del futuro se usa ***hope***, no *wish*: *I **hope** you **pass** the exam* ✅ (no *I wish you pass* ❌).",
        "*I wish I **could**…* = ojalá pudiera: *I wish I **could** speak Japanese.*",
        "No uses *would* con el mismo sujeto: *I wish I **would** have…* ❌ → *I wish I **had**…* ✅.",
        "Fórmulas fijas con *wish* + sustantivo: ***I wish you a happy birthday. We wish you a merry Christmas. Best wishes!***",
        "Español: «ojalá + **pretérito de subjuntivo**» (*ojalá tuviera*) = *wish* + pasado; «ojalá + **pluscuamperfecto**» (*ojalá hubiera*) = *wish* + *had* + participio."
      ],
      "en": [
        "Wish plus past simple is a wish about the present: I wish I had more time. I wish I were taller.",
        "Wish plus past perfect is a regret about the past: I wish I had studied harder.",
        "Wish plus would shows annoyance: I wish you would stop interrupting me.",
        "If only is stronger: If only I hadn't lost my keys!"
      ]
    },
    "vocabulario": [
      {
        "en": "I wish I had more time.",
        "es": "ojalá tuviera más tiempo",
        "imagen": "Persona estresada con muchas tareas y un reloj",
        "ejemplo": [
          "I wish I had more time for my hobbies.",
          "Ojalá tuviera más tiempo para mis pasatiempos."
        ]
      },
      {
        "en": "I wish I were taller.",
        "es": "ojalá fuera más alto",
        "imagen": "Persona estirándose para alcanzar un estante alto",
        "ejemplo": [
          "I wish I were taller. I can't reach the top shelf.",
          "Ojalá fuera más alto. No alcanzo el estante de arriba."
        ]
      },
      {
        "en": "I wish I had studied harder.",
        "es": "ojalá hubiera estudiado más",
        "imagen": "Estudiante mirando un examen reprobado",
        "ejemplo": [
          "I wish I had studied harder for the exam.",
          "Ojalá hubiera estudiado más para el examen."
        ]
      },
      {
        "en": "I wish you would stop.",
        "es": "ojalá dejaras de…",
        "imagen": "Persona molesta tapándose los oídos mientras otro habla",
        "ejemplo": [
          "I wish you would stop interrupting me.",
          "Ojalá dejaras de interrumpirme."
        ]
      },
      {
        "en": "If only I knew!",
        "es": "¡si tan solo supiera!",
        "imagen": "Persona confundida rascándose la cabeza",
        "ejemplo": [
          "If only I knew the answer!",
          "¡Si tan solo supiera la respuesta!"
        ]
      },
      {
        "en": "I wish I could speak Japanese.",
        "es": "ojalá pudiera hablar japonés",
        "imagen": "Persona en Tokio mirando letreros en japonés",
        "ejemplo": [
          "I wish I could speak Japanese.",
          "Ojalá pudiera hablar japonés."
        ]
      },
      {
        "en": "I wish it would stop raining.",
        "es": "ojalá dejara de llover",
        "imagen": "Niños mirando la lluvia por la ventana",
        "ejemplo": [
          "I wish it would stop raining. I want to go out.",
          "Ojalá dejara de llover. Quiero salir."
        ]
      },
      {
        "en": "She wishes she hadn't said that.",
        "es": "se arrepiente de haber dicho eso",
        "imagen": "Mujer tapándose la boca con arrepentimiento",
        "ejemplo": [
          "She wishes she hadn't said that to her friend.",
          "Se arrepiente de haberle dicho eso a su amiga."
        ]
      },
      {
        "en": "I wish I lived near the beach.",
        "es": "ojalá viviera cerca de la playa",
        "imagen": "Persona en la oficina mirando una foto de la playa",
        "ejemplo": [
          "I wish I lived near the beach.",
          "Ojalá viviera cerca de la playa."
        ]
      },
      {
        "en": "If only I hadn't lost my keys!",
        "es": "¡si tan solo no hubiera perdido mis llaves!",
        "imagen": "Persona sentada frente a su puerta cerrada",
        "ejemplo": [
          "If only I hadn't lost my keys!",
          "¡Si tan solo no hubiera perdido mis llaves!"
        ]
      },
      {
        "en": "I hope you pass.",
        "es": "espero que apruebes",
        "imagen": "Amiga deseando suerte con los dedos cruzados",
        "ejemplo": [
          "Good luck tomorrow! I hope you pass.",
          "¡Suerte mañana! Espero que apruebes."
        ]
      },
      {
        "en": "I wish it were Friday.",
        "es": "ojalá fuera viernes",
        "imagen": "Persona aburrida en la oficina un lunes",
        "ejemplo": [
          "I wish it were Friday already.",
          "Ojalá ya fuera viernes."
        ]
      },
      {
        "en": "I wish I hadn't eaten so much.",
        "es": "ojalá no hubiera comido tanto",
        "imagen": "Persona llena recargada en la silla",
        "ejemplo": [
          "I wish I hadn't eaten so much cake.",
          "Ojalá no hubiera comido tanto pastel."
        ]
      },
      {
        "en": "I wish my neighbors would be quieter.",
        "es": "ojalá mis vecinos hicieran menos ruido",
        "imagen": "Persona despierta de noche por el ruido de una fiesta",
        "ejemplo": [
          "I wish my neighbors would be quieter at night.",
          "Ojalá mis vecinos hicieran menos ruido en la noche."
        ]
      },
      {
        "en": "Best wishes!",
        "es": "¡mis mejores deseos!",
        "imagen": "Tarjeta de felicitación con flores",
        "ejemplo": [
          "Congratulations on your wedding. Best wishes!",
          "Felicidades por tu boda. ¡Mis mejores deseos!"
        ]
      },
      {
        "en": "I wish you all the best.",
        "es": "te deseo lo mejor",
        "imagen": "Amigos despidiéndose con un abrazo en el aeropuerto",
        "ejemplo": [
          "Good luck in Canada. I wish you all the best.",
          "Suerte en Canadá. Te deseo lo mejor."
        ]
      }
    ],
    "grupos": [
      {
        "id": "lamentos",
        "titulo": "Lamentos",
        "icono": "😩",
        "patron": [
          "I wish I hadn't…",
          "If only I had…",
          "I should have…"
        ],
        "palabras": [
          {
            "en": "I wish I hadn't bought it.",
            "es": "ojalá no lo hubiera comprado",
            "imagen": "Persona mirando un aparato caro sin usar",
            "ejemplo": [
              "I wish I hadn't bought this expensive phone.",
              "Ojalá no hubiera comprado este celular tan caro."
            ]
          },
          {
            "en": "I wish I had listened.",
            "es": "ojalá hubiera escuchado",
            "imagen": "Persona apenada frente a sus papás",
            "ejemplo": [
              "I wish I had listened to my parents.",
              "Ojalá les hubiera hecho caso a mis papás."
            ]
          },
          {
            "en": "If only I had known.",
            "es": "si tan solo lo hubiera sabido",
            "imagen": "Persona leyendo una carta con tristeza",
            "ejemplo": [
              "If only I had known that she was sick.",
              "Si tan solo hubiera sabido que estaba enferma."
            ]
          },
          {
            "en": "I wish I had taken photos.",
            "es": "ojalá hubiera tomado fotos",
            "imagen": "Persona mirando un paisaje sin cámara",
            "ejemplo": [
              "I wish I had taken more photos on the trip.",
              "Ojalá hubiera tomado más fotos en el viaje."
            ]
          },
          {
            "en": "I wish I hadn't quit.",
            "es": "ojalá no hubiera renunciado",
            "imagen": "Persona viendo ofertas de trabajo con preocupación",
            "ejemplo": [
              "I wish I hadn't quit my job so quickly.",
              "Ojalá no hubiera renunciado tan rápido a mi trabajo."
            ]
          },
          {
            "en": "I wish I had said goodbye.",
            "es": "ojalá me hubiera despedido",
            "imagen": "Persona mirando un tren que ya se fue",
            "ejemplo": [
              "I wish I had said goodbye to my grandmother.",
              "Ojalá me hubiera despedido de mi abuela."
            ]
          }
        ]
      },
      {
        "id": "molestias",
        "titulo": "Lo que me molesta",
        "icono": "🙄",
        "patron": [
          "I wish you would…",
          "I wish you wouldn't…",
          "I wish it would…"
        ],
        "palabras": [
          {
            "en": "I wish you wouldn't leave your clothes everywhere.",
            "es": "ojalá no dejaras tu ropa por todos lados",
            "imagen": "Ropa tirada por toda la recámara",
            "ejemplo": [
              "I wish you wouldn't leave your clothes everywhere.",
              "Ojalá no dejaras tu ropa por todos lados."
            ]
          },
          {
            "en": "I wish he would call.",
            "es": "ojalá llamara",
            "imagen": "Persona esperando junto al teléfono",
            "ejemplo": [
              "I wish he would call me back.",
              "Ojalá me regresara la llamada."
            ]
          },
          {
            "en": "I wish the bus would come.",
            "es": "ojalá llegara el camión",
            "imagen": "Personas impacientes en una parada",
            "ejemplo": [
              "I wish the bus would come. We've been waiting for ages.",
              "Ojalá llegara el camión. Llevamos siglos esperando."
            ]
          },
          {
            "en": "I wish you would listen.",
            "es": "ojalá escucharas",
            "imagen": "Mamá hablando y su hijo con audífonos",
            "ejemplo": [
              "I wish you would listen to me for once.",
              "Ojalá me escucharas por una vez."
            ]
          },
          {
            "en": "I wish people wouldn't litter.",
            "es": "ojalá la gente no tirara basura",
            "imagen": "Basura tirada en un parque",
            "ejemplo": [
              "I wish people wouldn't throw trash in the park.",
              "Ojalá la gente no tirara basura en el parque."
            ]
          },
          {
            "en": "I wish it would get warmer.",
            "es": "ojalá hiciera más calor",
            "imagen": "Persona temblando con bufanda",
            "ejemplo": [
              "I wish it would get warmer. I'm tired of winter.",
              "Ojalá hiciera más calor. Ya me cansé del invierno."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I wish I had more time for my hobbies.",
        "es": "Ojalá tuviera más tiempo para mis pasatiempos."
      },
      {
        "en": "I wish I were taller. I can't reach the top shelf.",
        "es": "Ojalá fuera más alto. No alcanzo el estante de arriba."
      },
      {
        "en": "I wish I had studied harder for the exam.",
        "es": "Ojalá hubiera estudiado más para el examen."
      },
      {
        "en": "I wish you would stop interrupting me.",
        "es": "Ojalá dejaras de interrumpirme."
      },
      {
        "en": "If only I hadn't lost my keys!",
        "es": "¡Si tan solo no hubiera perdido mis llaves!"
      },
      {
        "en": "Good luck tomorrow! I hope you pass.",
        "es": "¡Suerte mañana! Espero que apruebes."
      },
      {
        "en": "I wish I could speak Japanese.",
        "es": "Ojalá pudiera hablar japonés."
      },
      {
        "en": "She wishes she hadn't said that to her friend.",
        "es": "Se arrepiente de haberle dicho eso a su amiga."
      },
      {
        "en": "I wish you wouldn't leave your clothes everywhere.",
        "es": "Ojalá no dejaras tu ropa por todos lados."
      },
      {
        "en": "Good luck in Canada. I wish you all the best.",
        "es": "Suerte en Canadá. Te deseo lo mejor."
      }
    ],
    "frases": [
      {
        "en": "I wish I lived closer to my family, because I only see them twice a year.",
        "es": "Ojalá viviera más cerca de mi familia, porque solo los veo dos veces al año.",
        "imagen": "Persona en videollamada con su familia en otra ciudad"
      },
      {
        "en": "My grandfather wishes he had traveled more when he was young and healthy.",
        "es": "Mi abuelo desearía haber viajado más cuando era joven y sano.",
        "imagen": "Abuelo mirando un globo terráqueo con nostalgia"
      },
      {
        "en": "If only we had left the house ten minutes earlier, we wouldn't have missed the flight!",
        "es": "¡Si tan solo hubiéramos salido de casa diez minutos antes, no habríamos perdido el vuelo!",
        "imagen": "Familia frustrada en el aeropuerto mirando un avión despegar"
      },
      {
        "en": "I wish my boss would give us clearer instructions. Nobody knows what to do.",
        "es": "Ojalá mi jefe nos diera instrucciones más claras. Nadie sabe qué hacer.",
        "imagen": "Equipo confundido en una junta mirando a su jefe"
      },
      {
        "en": "She wishes she could change jobs, but she needs the money right now.",
        "es": "Quisiera cambiar de trabajo, pero ahorita necesita el dinero.",
        "imagen": "Mujer mirando ofertas de trabajo desde su escritorio"
      },
      {
        "en": "I wish I hadn't sent that message. Now everybody knows my secret.",
        "es": "Ojalá no hubiera mandado ese mensaje. Ahora todos saben mi secreto.",
        "imagen": "Persona horrorizada mirando su celular"
      },
      {
        "en": "I hope it doesn't rain tomorrow, because we're having the party in the garden.",
        "es": "Espero que no llueva mañana, porque vamos a hacer la fiesta en el jardín.",
        "imagen": "Jardín decorado para una fiesta con cielo nublado"
      },
      {
        "en": "I wish it were possible to work from home every day, but my company doesn't allow it.",
        "es": "Ojalá se pudiera trabajar desde casa todos los días, pero mi empresa no lo permite.",
        "imagen": "Persona trabajando en casa con su gato al lado"
      },
      {
        "en": "If only I could go back in time, I would tell my younger self to save more money.",
        "es": "Si tan solo pudiera regresar en el tiempo, le diría a mi yo joven que ahorrara más.",
        "imagen": "Persona joven y persona mayor frente a frente como en un reflejo"
      },
      {
        "en": "I wish you wouldn't drive so fast. It really scares me.",
        "es": "Ojalá no manejaras tan rápido. De verdad me da miedo.",
        "imagen": "Copiloto asustado agarrado al asiento del carro"
      }
    ],
    "listening": [
      {
        "audio": "I wish I had brought my jacket. It's freezing!",
        "pregunta": "¿Qué olvidó?",
        "opciones": [
          "Su chamarra",
          "Su paraguas",
          "Sus llaves",
          "Su celular"
        ]
      },
      {
        "audio": "I wish my brother would stop borrowing my clothes without asking.",
        "pregunta": "¿Qué le molesta?",
        "opciones": [
          "Que su hermano tome su ropa sin pedirla",
          "Que su hermano haga ruido",
          "Que su hermano no limpie",
          "Que su hermano llegue tarde"
        ]
      },
      {
        "audio": "If only I had bought the tickets yesterday. Now they're sold out.",
        "pregunta": "¿Qué pasó con los boletos?",
        "opciones": [
          "Se agotaron",
          "Subieron de precio",
          "Los perdió",
          "Se cancelaron"
        ]
      },
      {
        "audio": "I hope you have a wonderful trip. Send me lots of photos!",
        "pregunta": "¿Qué le pide?",
        "opciones": [
          "Que le mande muchas fotos",
          "Que le traiga un regalo",
          "Que le llame",
          "Que regrese pronto"
        ]
      },
      {
        "audio": "I wish I could come to your wedding, but I'll be working abroad.",
        "pregunta": "¿Por qué no puede ir a la boda?",
        "opciones": [
          "Estará trabajando en el extranjero",
          "Está enfermo",
          "No tiene dinero",
          "No lo invitaron"
        ]
      }
    ],
    "lectura": {
      "titulo": "Letters of regret",
      "texto": "A nurse who worked with elderly people for many years once wrote about the most common regrets her patients shared at the end of their lives. The first one was: I wish I had lived the life I wanted, not the life others expected of me. Many people said they wished they hadn't worked so much and had spent more time with their children. Others wished they had had the courage to express their feelings, instead of staying quiet to keep the peace. Some regretted losing contact with old friends: If only I had called them more often, they said. And many wished they had let themselves be happier, because they realized too late that happiness is a choice. Reading her words, I made a decision. I don't want to say I wish I had… when I'm old. So this year I'm calling my friends, taking that painting class, and leaving work on time.",
      "preguntas": [
        {
          "pregunta": "¿Con quién trabajaba la enfermera?",
          "opciones": [
            "Con personas mayores",
            "Con niños",
            "Con deportistas",
            "Con estudiantes"
          ]
        },
        {
          "pregunta": "¿Cuál era el primer arrepentimiento?",
          "opciones": [
            "No haber vivido la vida que querían",
            "No haber ganado más dinero",
            "No haber viajado",
            "No haber estudiado"
          ]
        },
        {
          "pregunta": "¿Qué decían sobre el trabajo?",
          "opciones": [
            "Que habrían deseado trabajar menos",
            "Que habrían deseado trabajar más",
            "Que les encantaba su trabajo",
            "Nada"
          ]
        },
        {
          "pregunta": "¿Qué decidió hacer el autor?",
          "opciones": [
            "Llamar a sus amigos, tomar clases de pintura y salir a tiempo del trabajo",
            "Cambiar de trabajo",
            "Mudarse",
            "Ser enfermero"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con wish + pasado (presente).",
        "pregunta": "I wish I ___ (have) a car.",
        "respuestas": [
          "had"
        ]
      },
      {
        "instruccion": "Completa con wish + were.",
        "pregunta": "I wish it ___ (be) summer.",
        "respuestas": [
          "were",
          "was"
        ]
      },
      {
        "instruccion": "Completa con wish + pasado perfecto.",
        "pregunta": "I wish I ___ (not / eat) so much.",
        "respuestas": [
          "hadn't eaten",
          "had not eaten"
        ]
      },
      {
        "instruccion": "Completa con wish + would.",
        "pregunta": "I wish you ___ (stop) shouting.",
        "respuestas": [
          "would stop",
          "'d stop"
        ]
      },
      {
        "instruccion": "Completa con wish o hope.",
        "pregunta": "I ___ you have a great time in Spain!",
        "respuestas": [
          "hope"
        ]
      },
      {
        "instruccion": "Completa con could.",
        "pregunta": "I wish I ___ swim.",
        "respuestas": [
          "could"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Ojalá tuviera más dinero.",
        "respuestas": [
          "I wish I had more money",
          "If only I had more money"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Ojalá hubiera ido.",
        "respuestas": [
          "I wish I had gone",
          "I wish I'd gone",
          "If only I had gone"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Te deseo lo mejor.",
        "respuestas": [
          "I wish you all the best",
          "I wish you the best"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I wish I would have more time.",
        "respuestas": [
          "I wish I had more time"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "I wish I ___ the answer.",
        "opciones": [
          "knew",
          "know",
          "will know",
          "would know"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I wish I ___ to the concert last night.",
        "opciones": [
          "had gone",
          "went",
          "would go",
          "have gone"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I wish my neighbor ___ his music down.",
        "opciones": [
          "would turn",
          "turns",
          "had turn",
          "will turn"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I ___ you enjoy your vacation.",
        "opciones": [
          "hope",
          "wish",
          "would",
          "wished"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "If only I ___ so tired!",
        "opciones": [
          "weren't",
          "am not",
          "won't be",
          "wouldn't"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«I wish I hadn't said that» significa:",
        "opciones": [
          "Ojalá no hubiera dicho eso",
          "Ojalá diga eso",
          "Quiero decir eso",
          "No dije eso"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I wish I had learned to play an instrument when I was a child.",
        "pregunta": "¿De qué se lamenta?",
        "opciones": [
          "De no haber aprendido a tocar un instrumento",
          "De no haber estudiado",
          "De no haber viajado",
          "De haber dejado la escuela"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I wish the people upstairs wouldn't walk around in high heels at midnight.",
        "pregunta": "¿Qué le molesta?",
        "opciones": [
          "Los vecinos de arriba caminando con tacones a medianoche",
          "La música fuerte",
          "Los perros",
          "La televisión"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Ojalá pudiera ayudarte.",
        "respuestas": [
          "I wish I could help you"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¡Si tan solo lo hubiera sabido!",
        "respuestas": [
          "If only I had known",
          "If only I'd known"
        ]
      }
    ]
  },
  {
    "id": "b2-09",
    "num": 9,
    "titulo": "Voz pasiva: todos los tiempos y con modales",
    "contexto": "Noticias y medios de comunicación",
    "explicacion": {
      "es": [
        "La **voz pasiva** se forma con ***be*** **en el tiempo que necesites** + **participio**. Lo que cambia es solo el verbo *be*: *is built, was built, is being built, has been built, had been built, will be built*.",
        "**Continuos:** ***is / was being*** + participio: *The road **is being repaired**.* (Están reparando la carretera.) **Perfectos:** ***has / had been*** + participio: *Three people **have been arrested**.* (Han arrestado a tres personas.)",
        "**Futuro y modales:** ***will / can / must / should / might*** + ***be*** + participio: *The results **will be announced** tomorrow. This medicine **must be kept** in the fridge. It **could be done** better.*",
        "En las **noticias** la pasiva es muy común porque lo importante es **lo que pasó**, no quién lo hizo: *A new hospital **has been opened** in Puebla. The match **was postponed** because of the rain.*"
      ],
      "tabla": {
        "columnas": [
          "Tiempo",
          "Pasiva",
          "Ejemplo"
        ],
        "filas": [
          [
            "Presente simple",
            "is / are + participio",
            "The news is watched by millions."
          ],
          [
            "Presente continuo",
            "is / are being + participio",
            "The bridge is being repaired."
          ],
          [
            "Presente perfecto",
            "has / have been + participio",
            "The suspect has been arrested."
          ],
          [
            "Pasado continuo",
            "was / were being + participio",
            "The house was being painted."
          ],
          [
            "Pasado perfecto",
            "had been + participio",
            "The money had been stolen."
          ],
          [
            "Futuro / modales",
            "will / can / must + be + participio",
            "The winner will be announced today."
          ]
        ]
      },
      "ojo": [
        "Usa *by* solo si es **importante** quién lo hizo: *The film was directed **by** Guillermo del Toro.*",
        "Con modales en pasado: ***should have been*** + participio: *The problem **should have been fixed** months ago.*",
        "Titulares de periódico: omiten *be*: *«Three arrested after robbery»* = *Three people **were** arrested…*",
        "Verbos con dos objetos: *They gave **me** a prize* → ***I was given** a prize* (más natural que *A prize was given to me*).",
        "***Get*** + participio es una pasiva informal: *He **got fired**. My car **got stolen**.*"
      ],
      "en": [
        "The passive is formed with be in any tense plus the participle: is built, was being built, has been built, will be built.",
        "The road is being repaired. Three people have been arrested.",
        "With modals: The results will be announced tomorrow. This medicine must be kept in the fridge.",
        "In the news: A new hospital has been opened in Puebla."
      ]
    },
    "vocabulario": [
      {
        "en": "has been arrested",
        "es": "ha sido arrestado",
        "imagen": "Policía llevando a un hombre esposado a una patrulla",
        "ejemplo": [
          "A suspect has been arrested.",
          "Han arrestado a un sospechoso."
        ]
      },
      {
        "en": "is being repaired",
        "es": "está siendo reparado",
        "imagen": "Trabajadores reparando un puente con maquinaria",
        "ejemplo": [
          "The bridge is being repaired.",
          "Están reparando el puente."
        ]
      },
      {
        "en": "will be announced",
        "es": "será anunciado",
        "imagen": "Conferencia de prensa con micrófonos",
        "ejemplo": [
          "The winner will be announced tomorrow.",
          "El ganador se anunciará mañana."
        ]
      },
      {
        "en": "was postponed",
        "es": "fue pospuesto",
        "imagen": "Estadio vacío bajo la lluvia",
        "ejemplo": [
          "The game was postponed because of the storm.",
          "El partido se pospuso por la tormenta."
        ]
      },
      {
        "en": "must be kept",
        "es": "debe mantenerse",
        "imagen": "Medicina en la puerta del refrigerador",
        "ejemplo": [
          "This medicine must be kept in the fridge.",
          "Esta medicina debe guardarse en el refrigerador."
        ]
      },
      {
        "en": "had been stolen",
        "es": "había sido robado",
        "imagen": "Caja fuerte abierta y vacía",
        "ejemplo": [
          "The money had been stolen during the night.",
          "El dinero había sido robado durante la noche."
        ]
      },
      {
        "en": "was being interviewed",
        "es": "estaba siendo entrevistado",
        "imagen": "Político hablando frente a cámaras de televisión",
        "ejemplo": [
          "The minister was being interviewed when the lights went out.",
          "Estaban entrevistando al ministro cuando se fue la luz."
        ]
      },
      {
        "en": "can be seen",
        "es": "se puede ver",
        "imagen": "Cometa brillando en el cielo nocturno",
        "ejemplo": [
          "The comet can be seen without a telescope.",
          "El cometa se puede ver sin telescopio."
        ]
      },
      {
        "en": "should have been fixed",
        "es": "debió haberse arreglado",
        "imagen": "Bache enorme en una calle con un carro",
        "ejemplo": [
          "This hole should have been fixed months ago.",
          "Este bache debió haberse arreglado hace meses."
        ]
      },
      {
        "en": "has been launched",
        "es": "ha sido lanzado",
        "imagen": "Cohete despegando con humo",
        "ejemplo": [
          "A new satellite has been launched.",
          "Se ha lanzado un nuevo satélite."
        ]
      },
      {
        "en": "are being evacuated",
        "es": "están siendo evacuados",
        "imagen": "Personas saliendo de edificios con ayuda de rescatistas",
        "ejemplo": [
          "Residents are being evacuated because of the floods.",
          "Están evacuando a los habitantes por las inundaciones."
        ]
      },
      {
        "en": "was directed by",
        "es": "fue dirigida por",
        "imagen": "Director de cine detrás de una cámara en un set",
        "ejemplo": [
          "The film was directed by a Mexican director.",
          "La película fue dirigida por un director mexicano."
        ]
      },
      {
        "en": "will be built",
        "es": "será construido",
        "imagen": "Terreno con maquinaria y planos de construcción",
        "ejemplo": [
          "A new hospital will be built next year.",
          "El próximo año se construirá un hospital nuevo."
        ]
      },
      {
        "en": "I was given a prize.",
        "es": "me dieron un premio",
        "imagen": "Estudiante recibiendo un trofeo en un escenario",
        "ejemplo": [
          "I was given a prize for my project.",
          "Me dieron un premio por mi proyecto."
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
        "en": "might be canceled",
        "es": "podría cancelarse",
        "imagen": "Pantalla del aeropuerto con vuelos en rojo",
        "ejemplo": [
          "The flight might be canceled because of the snow.",
          "El vuelo podría cancelarse por la nieve."
        ]
      }
    ],
    "grupos": [
      {
        "id": "medios",
        "titulo": "Medios de comunicación",
        "icono": "📺",
        "patron": [
          "the headline",
          "a reporter",
          "breaking news"
        ],
        "palabras": [
          {
            "en": "a headline",
            "es": "un titular",
            "imagen": "Periódico con un titular grande, sin texto legible",
            "ejemplo": [
              "The headline was about the elections.",
              "El titular era sobre las elecciones."
            ]
          },
          {
            "en": "breaking news",
            "es": "noticia de último momento",
            "imagen": "Presentadora en un noticiero con gráficos rojos",
            "ejemplo": [
              "Breaking news: a strong earthquake has been reported.",
              "Última hora: se ha reportado un sismo fuerte."
            ]
          },
          {
            "en": "a reporter",
            "es": "un reportero",
            "imagen": "Reportera con micrófono frente a un edificio",
            "ejemplo": [
              "The reporter was interviewing witnesses.",
              "La reportera entrevistaba a los testigos."
            ]
          },
          {
            "en": "a press conference",
            "es": "una conferencia de prensa",
            "imagen": "Personas frente a un podio con muchos micrófonos",
            "ejemplo": [
              "The mayor gave a press conference this morning.",
              "El alcalde dio una conferencia de prensa esta mañana."
            ]
          },
          {
            "en": "fake news",
            "es": "noticias falsas",
            "imagen": "Persona dudando frente a una noticia en el celular",
            "ejemplo": [
              "Fake news is shared very quickly on social media.",
              "Las noticias falsas se comparten muy rápido en redes sociales."
            ]
          },
          {
            "en": "the front page",
            "es": "la primera plana",
            "imagen": "Persona leyendo la primera plana de un periódico",
            "ejemplo": [
              "The story was published on the front page.",
              "La historia se publicó en primera plana."
            ]
          },
          {
            "en": "a source",
            "es": "una fuente",
            "imagen": "Periodista tomando notas en una libreta",
            "ejemplo": [
              "The information was confirmed by two sources.",
              "La información fue confirmada por dos fuentes."
            ]
          },
          {
            "en": "live coverage",
            "es": "cobertura en vivo",
            "imagen": "Camarógrafo transmitiendo desde un estadio",
            "ejemplo": [
              "The event was shown with live coverage.",
              "El evento se transmitió con cobertura en vivo."
            ]
          }
        ]
      },
      {
        "id": "titulares",
        "titulo": "Titulares típicos",
        "icono": "📰",
        "patron": [
          "… have been rescued",
          "… has been closed",
          "… will be held"
        ],
        "palabras": [
          {
            "en": "have been rescued",
            "es": "han sido rescatados",
            "imagen": "Rescatistas sacando personas de una cueva",
            "ejemplo": [
              "Twelve miners have been rescued.",
              "Han rescatado a doce mineros."
            ]
          },
          {
            "en": "has been closed",
            "es": "ha sido cerrado",
            "imagen": "Carretera cerrada con conos y una patrulla",
            "ejemplo": [
              "The highway has been closed due to an accident.",
              "La autopista se cerró por un accidente."
            ]
          },
          {
            "en": "will be held",
            "es": "se llevará a cabo",
            "imagen": "Estadio preparado para un evento",
            "ejemplo": [
              "The final will be held in Mexico City.",
              "La final se llevará a cabo en la Ciudad de México."
            ]
          },
          {
            "en": "were injured",
            "es": "resultaron heridos",
            "imagen": "Ambulancias en el lugar de un accidente",
            "ejemplo": [
              "Five people were injured in the crash.",
              "Cinco personas resultaron heridas en el choque."
            ]
          },
          {
            "en": "has been found",
            "es": "ha sido encontrado",
            "imagen": "Perro rescatado en brazos de un bombero",
            "ejemplo": [
              "The missing dog has been found safe.",
              "Encontraron sano y salvo al perro perdido."
            ]
          },
          {
            "en": "is expected",
            "es": "se espera",
            "imagen": "Meteorólogo señalando un mapa con lluvias",
            "ejemplo": [
              "Heavy rain is expected this weekend.",
              "Se esperan lluvias fuertes este fin de semana."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "A suspect has been arrested.",
        "es": "Han arrestado a un sospechoso."
      },
      {
        "en": "The bridge is being repaired.",
        "es": "Están reparando el puente."
      },
      {
        "en": "The winner will be announced tomorrow.",
        "es": "El ganador se anunciará mañana."
      },
      {
        "en": "This medicine must be kept in the fridge.",
        "es": "Esta medicina debe guardarse en el refrigerador."
      },
      {
        "en": "The money had been stolen during the night.",
        "es": "El dinero había sido robado durante la noche."
      },
      {
        "en": "This hole should have been fixed months ago.",
        "es": "Este bache debió haberse arreglado hace meses."
      },
      {
        "en": "I was given a prize for my project.",
        "es": "Me dieron un premio por mi proyecto."
      },
      {
        "en": "He got fired for arriving late every day.",
        "es": "Lo corrieron por llegar tarde todos los días."
      },
      {
        "en": "Breaking news: a strong earthquake has been reported.",
        "es": "Última hora: se ha reportado un sismo fuerte."
      },
      {
        "en": "The final will be held in Mexico City.",
        "es": "La final se llevará a cabo en la Ciudad de México."
      }
    ],
    "frases": [
      {
        "en": "The new subway line is being built right now, and it will be opened to the public next year.",
        "es": "La nueva línea del metro se está construyendo ahorita y se abrirá al público el próximo año.",
        "imagen": "Obra del metro con trabajadores y grúas"
      },
      {
        "en": "More than two hundred people have been evacuated from their homes because of the volcano.",
        "es": "Más de doscientas personas han sido evacuadas de sus casas por el volcán.",
        "imagen": "Volcán echando ceniza con personas evacuando un pueblo"
      },
      {
        "en": "The museum was being renovated when the fire started, so fortunately nobody was inside.",
        "es": "Estaban renovando el museo cuando empezó el incendio, así que por suerte no había nadie adentro.",
        "imagen": "Edificio con andamios y bomberos apagando un fuego"
      },
      {
        "en": "All passengers must be checked before they can board the plane.",
        "es": "Todos los pasajeros deben ser revisados antes de poder abordar el avión.",
        "imagen": "Pasajeros pasando por un control de seguridad"
      },
      {
        "en": "The story was first published by a local newspaper and then shared by millions on social media.",
        "es": "La historia fue publicada primero por un periódico local y luego compartida por millones en redes sociales.",
        "imagen": "Periódico local junto a un celular con muchas reacciones"
      },
      {
        "en": "The suspect had already been released when new evidence was found.",
        "es": "Ya habían liberado al sospechoso cuando se encontraron nuevas pruebas.",
        "imagen": "Detectives examinando pruebas sobre una mesa"
      },
      {
        "en": "These problems could have been avoided if the warnings had been taken seriously.",
        "es": "Estos problemas se habrían podido evitar si se hubieran tomado en serio las advertencias.",
        "imagen": "Calle inundada con señales de advertencia ignoradas"
      },
      {
        "en": "The results of the elections will be announced on Sunday night.",
        "es": "Los resultados de las elecciones se anunciarán el domingo en la noche.",
        "imagen": "Pantalla gigante con gráficas en una plaza"
      },
      {
        "en": "I was told that the meeting had been canceled, but nobody had informed the clients.",
        "es": "Me dijeron que la junta se había cancelado, pero nadie les había avisado a los clientes.",
        "imagen": "Clientes esperando en una sala de juntas vacía"
      },
      {
        "en": "Millions of plastic bottles are thrown away every day, and only a few of them are recycled.",
        "es": "Cada día se tiran millones de botellas de plástico y solo unas pocas se reciclan.",
        "imagen": "Montaña de botellas de plástico en un centro de reciclaje"
      }
    ],
    "listening": [
      {
        "audio": "The road to the airport is being repaired, so expect long delays.",
        "pregunta": "¿Por qué habrá retrasos?",
        "opciones": [
          "Están reparando la carretera",
          "Hay un accidente",
          "Llueve mucho",
          "Hay una marcha"
        ]
      },
      {
        "audio": "Three people have been arrested after the robbery at the jewelry store.",
        "pregunta": "¿Cuántas personas fueron arrestadas?",
        "opciones": [
          "Tres",
          "Dos",
          "Cinco",
          "Ninguna"
        ]
      },
      {
        "audio": "The concert has been postponed until next month because the singer is sick.",
        "pregunta": "¿Qué pasó con el concierto?",
        "opciones": [
          "Se pospuso un mes",
          "Se canceló",
          "Cambió de lugar",
          "Será gratis"
        ]
      },
      {
        "audio": "Passengers are reminded that bags must not be left unattended.",
        "pregunta": "¿Qué no deben hacer los pasajeros?",
        "opciones": [
          "Dejar maletas solas",
          "Usar el celular",
          "Comer en la sala",
          "Fumar"
        ]
      },
      {
        "audio": "A new species of frog has been discovered in the jungle of Chiapas.",
        "pregunta": "¿Qué se descubrió?",
        "opciones": [
          "Una nueva especie de rana",
          "Una pirámide",
          "Un río",
          "Una cueva"
        ]
      }
    ],
    "lectura": {
      "titulo": "Local hero saves family",
      "texto": "A family of five was rescued from a burning house in Guadalajara last night. The fire is believed to have started in the kitchen at around two in the morning. By the time the firefighters arrived, the family had already been taken out of the house by a neighbor, Carlos Méndez, a twenty-four-year-old student. Carlos was woken up by the smoke and saw flames coming from the windows. He broke the door and helped the parents carry the three children outside. Two of the children were taken to hospital with minor injuries, but they are expected to make a full recovery. The house was badly damaged, and it will have to be rebuilt. An investigation is being carried out to find the cause of the fire. Meanwhile, money is being collected by the community to help the family. Carlos has been invited by the mayor to receive a special award next week.",
      "preguntas": [
        {
          "pregunta": "¿Dónde se cree que empezó el incendio?",
          "opciones": [
            "En la cocina",
            "En la recámara",
            "En la cochera",
            "En la casa de al lado"
          ]
        },
        {
          "pregunta": "¿Quién sacó a la familia?",
          "opciones": [
            "Un vecino, Carlos",
            "Los bomberos",
            "La policía",
            "El papá"
          ]
        },
        {
          "pregunta": "¿Cómo están los niños que fueron al hospital?",
          "opciones": [
            "Tienen lesiones leves y se recuperarán",
            "Están graves",
            "Ya murieron",
            "No fueron al hospital"
          ]
        },
        {
          "pregunta": "¿Qué recibirá Carlos?",
          "opciones": [
            "Un premio especial del alcalde",
            "Dinero",
            "Una casa",
            "Un trabajo"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con la pasiva en el tiempo indicado (presente continuo).",
        "pregunta": "The road ___ (repair) right now.",
        "respuestas": [
          "is being repaired"
        ]
      },
      {
        "instruccion": "Completa con la pasiva (presente perfecto).",
        "pregunta": "Two suspects ___ (arrest).",
        "respuestas": [
          "have been arrested"
        ]
      },
      {
        "instruccion": "Completa con la pasiva (futuro).",
        "pregunta": "The results ___ (announce) tomorrow.",
        "respuestas": [
          "will be announced"
        ]
      },
      {
        "instruccion": "Completa con la pasiva (modal).",
        "pregunta": "This form must ___ (sign) by your parents.",
        "respuestas": [
          "be signed"
        ]
      },
      {
        "instruccion": "Completa con la pasiva (pasado perfecto).",
        "pregunta": "When we arrived, the cake ___ (eat).",
        "respuestas": [
          "had been eaten",
          "had already been eaten"
        ]
      },
      {
        "instruccion": "Completa con la pasiva (pasado continuo).",
        "pregunta": "The house ___ (paint) when it started to rain.",
        "respuestas": [
          "was being painted"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Están reparando el puente.",
        "respuestas": [
          "The bridge is being repaired",
          "They are repairing the bridge",
          "They're repairing the bridge"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Me dieron un premio.",
        "respuestas": [
          "I was given a prize",
          "They gave me a prize",
          "I was given an award"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "noticia de último momento",
        "respuestas": [
          "breaking news"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "The thief has been arrest.",
        "respuestas": [
          "The thief has been arrested"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "The new stadium ___ at the moment.",
        "opciones": [
          "is being built",
          "is built being",
          "has building",
          "was build"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The winners ___ next Monday.",
        "opciones": [
          "will be announced",
          "will announce",
          "are announcing",
          "will be announce"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "This problem should ___ last year.",
        "opciones": [
          "have been solved",
          "be solved",
          "been solved",
          "have solved"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Two people ___ in the accident.",
        "opciones": [
          "were injured",
          "injured",
          "have injured",
          "were injure"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«The missing girl has been found» significa:",
        "opciones": [
          "Encontraron a la niña desaparecida",
          "La niña encontró algo",
          "La niña sigue perdida",
          "Buscan a la niña"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Forma más natural:",
        "opciones": [
          "I was offered a job.",
          "A job was offered to me by them.",
          "I offered a job.",
          "Was offered me a job."
        ]
      },
      {
        "tipo": "listening",
        "audio": "The match will be played behind closed doors, without fans.",
        "pregunta": "¿Cómo se jugará el partido?",
        "opciones": [
          "Sin aficionados",
          "Con muchos aficionados",
          "En otro estadio",
          "De noche"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The old bridge had been closed for years before it was finally replaced.",
        "pregunta": "¿Qué pasó con el puente viejo?",
        "opciones": [
          "Estuvo cerrado años y luego lo reemplazaron",
          "Se cayó",
          "Lo pintaron",
          "Sigue abierto"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Se anunciará mañana.",
        "respuestas": [
          "It will be announced tomorrow"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Han arrestado a un sospechoso.",
        "respuestas": [
          "A suspect has been arrested",
          "They have arrested a suspect",
          "They've arrested a suspect"
        ]
      }
    ]
  },
  {
    "id": "b2-10",
    "num": 10,
    "titulo": "Pasiva impersonal (It is said that… / He is thought to…)",
    "contexto": "Rumores y reportajes",
    "explicacion": {
      "es": [
        "La **pasiva impersonal** sirve para contar lo que **la gente dice, cree o piensa**, sin decir quién. Es muy típica de las **noticias** y los **reportajes**: ***It is said that** the old house is haunted.* (Se dice que la casa vieja está embrujada.)",
        "Forma 1: ***It is*** + participio (*said, thought, believed, reported, known, expected*) + ***that*** + oración: ***It is believed that** the thief escaped by car.* (Se cree que el ladrón escapó en carro.)",
        "Forma 2: **sujeto** + ***is*** + participio + ***to*** + verbo: *The thief **is believed to have escaped** by car.* *She **is said to be** the richest woman in the country.* (Se dice que es la mujer más rica del país.)",
        "Si la acción es **anterior**, se usa ***to have*** + participio: *He **is thought to have left** the country.* (Se cree que salió del país.) Si es **ahora**: ***to be*** + *-ing*: *They **are reported to be negotiating**.*"
      ],
      "tabla": {
        "columnas": [
          "Forma con it",
          "Forma con sujeto"
        ],
        "filas": [
          [
            "It is said that he is very rich.",
            "He is said to be very rich."
          ],
          [
            "It is believed that she left last night.",
            "She is believed to have left last night."
          ],
          [
            "It is reported that they are negotiating.",
            "They are reported to be negotiating."
          ],
          [
            "It was thought that the earth was flat.",
            "The earth was thought to be flat."
          ],
          [
            "It is expected that prices will rise.",
            "Prices are expected to rise."
          ]
        ]
      },
      "ojo": [
        "No olvides el ***to*** en la forma con sujeto: *He is said **to be*** ✅, no *He is said be* ❌.",
        "Para algo **pasado**: ***to have*** + participio: *She is said **to have won** the lottery* (se dice que ganó).",
        "En el pasado: ***It was believed that…*** / *The ship **was thought to have** sunk.*",
        "Verbos más comunes: ***say, think, believe, know, report, expect, consider, claim, rumor***.",
        "Para rumores informales: ***Rumor has it that…*** (Dicen que… / Corre el rumor de que…)"
      ],
      "en": [
        "The impersonal passive reports what people say or believe: It is said that the old house is haunted.",
        "It is believed that the thief escaped by car. The thief is believed to have escaped by car.",
        "She is said to be the richest woman in the country.",
        "Prices are expected to rise."
      ]
    },
    "vocabulario": [
      {
        "en": "It is said that",
        "es": "se dice que",
        "imagen": "Personas cuchicheando en una plaza de pueblo",
        "ejemplo": [
          "It is said that the old house is haunted.",
          "Se dice que la casa vieja está embrujada."
        ]
      },
      {
        "en": "It is believed that",
        "es": "se cree que",
        "imagen": "Detective revisando pistas en un tablero",
        "ejemplo": [
          "It is believed that the thief escaped by car.",
          "Se cree que el ladrón escapó en carro."
        ]
      },
      {
        "en": "He is thought to be",
        "es": "se piensa que es",
        "imagen": "Hombre misterioso con gafas oscuras en un aeropuerto",
        "ejemplo": [
          "He is thought to be in Europe now.",
          "Se piensa que ahora está en Europa."
        ]
      },
      {
        "en": "She is said to be very rich.",
        "es": "se dice que es muy rica",
        "imagen": "Mujer elegante bajando de un carro de lujo",
        "ejemplo": [
          "She is said to be the richest woman in the country.",
          "Se dice que es la mujer más rica del país."
        ]
      },
      {
        "en": "Prices are expected to rise.",
        "es": "se espera que suban los precios",
        "imagen": "Gráfica con flecha subiendo y monedas",
        "ejemplo": [
          "Gas prices are expected to rise next month.",
          "Se espera que el precio de la gasolina suba el próximo mes."
        ]
      },
      {
        "en": "It is reported that",
        "es": "se informa que",
        "imagen": "Reportera frente a una cámara en la calle",
        "ejemplo": [
          "It is reported that the president will visit the city.",
          "Se informa que el presidente visitará la ciudad."
        ]
      },
      {
        "en": "He is believed to have left the country.",
        "es": "se cree que salió del país",
        "imagen": "Avión despegando de noche",
        "ejemplo": [
          "The suspect is believed to have left the country.",
          "Se cree que el sospechoso salió del país."
        ]
      },
      {
        "en": "It is known that",
        "es": "se sabe que",
        "imagen": "Libro de historia abierto con mapas antiguos",
        "ejemplo": [
          "It is known that the Mayans were great astronomers.",
          "Se sabe que los mayas eran grandes astrónomos."
        ]
      },
      {
        "en": "Rumor has it that",
        "es": "dicen que / corre el rumor de que",
        "imagen": "Dos compañeras cuchicheando junto a la cafetera",
        "ejemplo": [
          "Rumor has it that the boss is leaving.",
          "Dicen que el jefe se va."
        ]
      },
      {
        "en": "It was thought that",
        "es": "se pensaba que",
        "imagen": "Mapa antiguo con la tierra plana",
        "ejemplo": [
          "It was once thought that the earth was flat.",
          "Antes se pensaba que la Tierra era plana."
        ]
      },
      {
        "en": "They are reported to be negotiating.",
        "es": "se informa que están negociando",
        "imagen": "Personas trajeadas en una mesa de negociación",
        "ejemplo": [
          "The two companies are reported to be negotiating.",
          "Se informa que las dos empresas están negociando."
        ]
      },
      {
        "en": "It is estimated that",
        "es": "se calcula que",
        "imagen": "Multitud enorme en una plaza vista desde arriba",
        "ejemplo": [
          "It is estimated that a million people attended.",
          "Se calcula que asistió un millón de personas."
        ]
      },
      {
        "en": "She is considered to be",
        "es": "se le considera",
        "imagen": "Pintora frente a su obra en una galería",
        "ejemplo": [
          "She is considered to be one of the best painters in Latin America.",
          "Se le considera una de las mejores pintoras de América Latina."
        ]
      },
      {
        "en": "It is claimed that",
        "es": "se afirma que",
        "imagen": "Anuncio de un producto milagroso",
        "ejemplo": [
          "It is claimed that this tea helps you lose weight.",
          "Se afirma que este té ayuda a bajar de peso."
        ]
      },
      {
        "en": "allegedly",
        "es": "supuestamente",
        "imagen": "Persona señalada en una noticia con un signo de interrogación",
        "ejemplo": [
          "The money was allegedly stolen by an employee.",
          "Supuestamente un empleado robó el dinero."
        ]
      },
      {
        "en": "according to",
        "es": "según",
        "imagen": "Persona leyendo un informe con gráficas",
        "ejemplo": [
          "According to the report, unemployment has fallen.",
          "Según el informe, el desempleo ha bajado."
        ]
      }
    ],
    "grupos": [
      {
        "id": "rumores",
        "titulo": "Rumores",
        "icono": "🗣️",
        "patron": [
          "Rumor has it…",
          "Apparently…",
          "I heard that…"
        ],
        "palabras": [
          {
            "en": "apparently",
            "es": "al parecer",
            "imagen": "Persona encogiéndose de hombros mientras cuenta algo",
            "ejemplo": [
              "Apparently, they're getting divorced.",
              "Al parecer, se van a divorciar."
            ]
          },
          {
            "en": "gossip",
            "es": "chisme",
            "imagen": "Vecinas platicando por encima de la barda",
            "ejemplo": [
              "Don't believe everything. It's just gossip.",
              "No creas todo. Es puro chisme."
            ]
          },
          {
            "en": "I heard that",
            "es": "oí que",
            "imagen": "Persona contando algo en voz baja en un café",
            "ejemplo": [
              "I heard that the café on the corner is closing.",
              "Oí que el café de la esquina va a cerrar."
            ]
          },
          {
            "en": "a rumor",
            "es": "un rumor",
            "imagen": "Grupo de personas pasándose un secreto al oído",
            "ejemplo": [
              "There's a rumor that the team will sign a famous player.",
              "Hay un rumor de que el equipo va a fichar a un jugador famoso."
            ]
          },
          {
            "en": "spread",
            "es": "difundirse",
            "imagen": "Celular con un mensaje reenviado muchas veces",
            "ejemplo": [
              "The story spread very quickly.",
              "La historia se difundió muy rápido."
            ]
          },
          {
            "en": "it turned out to be false",
            "es": "resultó ser falso",
            "imagen": "Persona aliviada leyendo una aclaración",
            "ejemplo": [
              "The rumor turned out to be false.",
              "El rumor resultó ser falso."
            ]
          }
        ]
      },
      {
        "id": "reportajes",
        "titulo": "Lenguaje de reportajes",
        "icono": "📝",
        "patron": [
          "According to…",
          "Experts believe…",
          "It is estimated…"
        ],
        "palabras": [
          {
            "en": "experts",
            "es": "expertos",
            "imagen": "Científicos discutiendo frente a una pantalla",
            "ejemplo": [
              "Experts believe the drought will continue.",
              "Los expertos creen que la sequía continuará."
            ]
          },
          {
            "en": "a survey",
            "es": "una encuesta",
            "imagen": "Persona contestando una encuesta en una tablet",
            "ejemplo": [
              "According to a survey, most people prefer working from home.",
              "Según una encuesta, la mayoría prefiere trabajar desde casa."
            ]
          },
          {
            "en": "the authorities",
            "es": "las autoridades",
            "imagen": "Funcionarios dando una conferencia de prensa",
            "ejemplo": [
              "The authorities have confirmed the news.",
              "Las autoridades confirmaron la noticia."
            ]
          },
          {
            "en": "a spokesperson",
            "es": "un vocero",
            "imagen": "Vocera hablando frente a micrófonos",
            "ejemplo": [
              "A spokesperson said the company would not comment.",
              "Un vocero dijo que la empresa no comentaría."
            ]
          },
          {
            "en": "witnesses",
            "es": "testigos",
            "imagen": "Personas hablando con un policía en la calle",
            "ejemplo": [
              "Witnesses say the car was going very fast.",
              "Los testigos dicen que el carro iba muy rápido."
            ]
          },
          {
            "en": "an investigation",
            "es": "una investigación",
            "imagen": "Detectives con lupa en una escena del crimen",
            "ejemplo": [
              "An investigation is being carried out.",
              "Se está llevando a cabo una investigación."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "It is said that the old house is haunted.",
        "es": "Se dice que la casa vieja está embrujada."
      },
      {
        "en": "It is believed that the thief escaped by car.",
        "es": "Se cree que el ladrón escapó en carro."
      },
      {
        "en": "She is said to be the richest woman in the country.",
        "es": "Se dice que es la mujer más rica del país."
      },
      {
        "en": "Gas prices are expected to rise next month.",
        "es": "Se espera que el precio de la gasolina suba el próximo mes."
      },
      {
        "en": "The suspect is believed to have left the country.",
        "es": "Se cree que el sospechoso salió del país."
      },
      {
        "en": "Rumor has it that the boss is leaving.",
        "es": "Dicen que el jefe se va."
      },
      {
        "en": "It was once thought that the earth was flat.",
        "es": "Antes se pensaba que la Tierra era plana."
      },
      {
        "en": "It is estimated that a million people attended.",
        "es": "Se calcula que asistió un millón de personas."
      },
      {
        "en": "According to the report, unemployment has fallen.",
        "es": "Según el informe, el desempleo ha bajado."
      },
      {
        "en": "The rumor turned out to be false.",
        "es": "El rumor resultó ser falso."
      }
    ],
    "frases": [
      {
        "en": "It is said that a hidden treasure was buried under the old church, but nobody has ever found it.",
        "es": "Se dice que hay un tesoro escondido bajo la iglesia vieja, pero nadie lo ha encontrado.",
        "imagen": "Iglesia antigua de pueblo con un mapa del tesoro dibujado"
      },
      {
        "en": "The famous painting is believed to have been stolen by an international gang.",
        "es": "Se cree que el famoso cuadro fue robado por una banda internacional.",
        "imagen": "Marco vacío en la pared de un museo"
      },
      {
        "en": "It is expected that more than fifty thousand tourists will visit the festival this year.",
        "es": "Se espera que más de cincuenta mil turistas visiten el festival este año.",
        "imagen": "Festival lleno de gente con decoraciones de colores"
      },
      {
        "en": "The singer is reported to be recording a new album in Los Angeles.",
        "es": "Se informa que la cantante está grabando un nuevo disco en Los Ángeles.",
        "imagen": "Cantante en un estudio de grabación con audífonos"
      },
      {
        "en": "Rumor has it that our company is going to be bought by a Japanese firm.",
        "es": "Dicen que nuestra empresa va a ser comprada por una firma japonesa.",
        "imagen": "Empleados cuchicheando en un pasillo de oficina"
      },
      {
        "en": "It was once believed that eating carrots helped you see in the dark.",
        "es": "Antes se creía que comer zanahorias ayudaba a ver en la oscuridad.",
        "imagen": "Plato de zanahorias junto a una vela encendida"
      },
      {
        "en": "The two leaders are said to have had a very tense meeting.",
        "es": "Se dice que los dos líderes tuvieron una reunión muy tensa.",
        "imagen": "Dos políticos dándose la mano con caras serias"
      },
      {
        "en": "It is estimated that only ten percent of plastic is recycled worldwide.",
        "es": "Se calcula que solo el diez por ciento del plástico se recicla en el mundo.",
        "imagen": "Montaña de plástico en un relleno sanitario"
      },
      {
        "en": "According to witnesses, the driver ran away before the police arrived.",
        "es": "Según los testigos, el conductor huyó antes de que llegara la policía.",
        "imagen": "Carro chocado vacío con la puerta abierta"
      },
      {
        "en": "The new law is thought to be one of the most important changes in decades.",
        "es": "Se piensa que la nueva ley es uno de los cambios más importantes en décadas.",
        "imagen": "Congreso en sesión con legisladores votando"
      }
    ],
    "listening": [
      {
        "audio": "It is said that the ghost of a woman walks through the old hospital at night.",
        "pregunta": "¿Qué se dice del hospital viejo?",
        "opciones": [
          "Que lo recorre el fantasma de una mujer",
          "Que lo van a cerrar",
          "Que es muy moderno",
          "Que tiene un tesoro"
        ]
      },
      {
        "audio": "The storm is expected to reach the coast on Thursday morning.",
        "pregunta": "¿Cuándo se espera que llegue la tormenta?",
        "opciones": [
          "El jueves en la mañana",
          "El martes en la noche",
          "Hoy",
          "El fin de semana"
        ]
      },
      {
        "audio": "Rumor has it that our teacher is getting married in December.",
        "pregunta": "¿Cuál es el rumor?",
        "opciones": [
          "La maestra se casa en diciembre",
          "La maestra se va de la escuela",
          "Habrá vacaciones largas",
          "Cambiarán de salón"
        ]
      },
      {
        "audio": "The thieves are believed to have entered through the roof.",
        "pregunta": "¿Por dónde se cree que entraron?",
        "opciones": [
          "Por el techo",
          "Por la puerta",
          "Por la ventana",
          "Por el sótano"
        ]
      },
      {
        "audio": "According to the survey, seventy percent of young people use social media every day.",
        "pregunta": "¿Qué porcentaje usa redes sociales diario?",
        "opciones": [
          "Setenta por ciento",
          "Diecisiete por ciento",
          "Cincuenta por ciento",
          "Noventa por ciento"
        ]
      }
    ],
    "lectura": {
      "titulo": "The legend of the silver mine",
      "texto": "In the mountains near Taxco, there is an abandoned silver mine that is surrounded by legends. It is said that, in the eighteenth century, the mine was the richest in the region. The owner, a Spanish nobleman, is believed to have hidden part of his silver inside the mountain before he returned to Spain. It was thought that he would come back for it, but he died during the trip. Since then, many adventurers have searched for the treasure. In the 1950s, a group of miners claimed to have found a secret tunnel, but they are said to have run away after hearing strange noises. Today, the mine is considered to be dangerous, and entry is not allowed. However, rumor has it that, on some nights, lights can be seen moving inside. Experts believe that the lights are simply reflections, but the local people are not so sure.",
      "preguntas": [
        {
          "pregunta": "¿Qué se dice de la mina en el siglo XVIII?",
          "opciones": [
            "Era la más rica de la región",
            "Estaba abandonada",
            "Era de oro",
            "Estaba embrujada"
          ]
        },
        {
          "pregunta": "¿Qué se cree que hizo el dueño?",
          "opciones": [
            "Escondió parte de su plata en la montaña",
            "Vendió la mina",
            "Regresó por la plata",
            "Cerró la mina"
          ]
        },
        {
          "pregunta": "¿Qué dicen que hicieron los mineros en los cincuenta?",
          "opciones": [
            "Huyeron al oír ruidos extraños",
            "Encontraron el tesoro",
            "Abrieron un museo",
            "Se quedaron a vivir"
          ]
        },
        {
          "pregunta": "¿Qué creen los expertos sobre las luces?",
          "opciones": [
            "Que son reflejos",
            "Que son fantasmas",
            "Que son mineros",
            "Que son linternas"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa la pasiva impersonal.",
        "pregunta": "It is ___ (say) that he is a millionaire.",
        "respuestas": [
          "said"
        ]
      },
      {
        "instruccion": "Completa la pasiva impersonal.",
        "pregunta": "She is believed ___ (be) in Paris.",
        "respuestas": [
          "to be"
        ]
      },
      {
        "instruccion": "Completa la pasiva impersonal (pasado).",
        "pregunta": "The thief is thought ___ (escape) through the window.",
        "respuestas": [
          "to have escaped"
        ]
      },
      {
        "instruccion": "Completa la pasiva impersonal.",
        "pregunta": "Prices are expected ___ (rise).",
        "respuestas": [
          "to rise"
        ]
      },
      {
        "instruccion": "Reescribe con sujeto.",
        "pregunta": "It is said that she is very kind. → She is said ___ very kind.",
        "respuestas": [
          "to be"
        ]
      },
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "Rumor ___ it that they're breaking up.",
        "respuestas": [
          "has"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Se dice que la casa está embrujada.",
        "respuestas": [
          "It is said that the house is haunted",
          "It's said that the house is haunted",
          "The house is said to be haunted"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "según el informe",
        "respuestas": [
          "according to the report"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "supuestamente",
        "respuestas": [
          "allegedly",
          "supposedly",
          "apparently"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "He is said be very rich.",
        "respuestas": [
          "He is said to be very rich",
          "He's said to be very rich"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "It is ___ that the earthquake was felt in three states.",
        "opciones": [
          "reported",
          "report",
          "reporting",
          "to report"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She is said ___ the best chef in the city.",
        "opciones": [
          "to be",
          "be",
          "being",
          "that she is"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The ship is believed ___ in the storm.",
        "opciones": [
          "to have sunk",
          "to sink yesterday",
          "sank",
          "that sank"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The company is expected ___ new workers.",
        "opciones": [
          "to hire",
          "hire",
          "hiring",
          "that hire"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Rumor has it that…» significa:",
        "opciones": [
          "Dicen que… / corre el rumor de que…",
          "El rumor tiene…",
          "Es seguro que…",
          "Nadie sabe que…"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "It ___ thought that the sun went around the earth.",
        "opciones": [
          "was once",
          "is once",
          "has once",
          "will once"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The missing climbers are thought to be sheltering in a cave.",
        "pregunta": "¿Dónde se cree que están los alpinistas?",
        "opciones": [
          "En una cueva",
          "En la cima",
          "En el pueblo",
          "En el hospital"
        ]
      },
      {
        "tipo": "listening",
        "audio": "It is estimated that the repairs will cost two million pesos.",
        "pregunta": "¿Cuánto costarán las reparaciones?",
        "opciones": [
          "Dos millones de pesos",
          "Doscientos mil pesos",
          "Veinte millones",
          "Dos mil pesos"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Se cree que escapó.",
        "respuestas": [
          "It is believed that he escaped",
          "He is believed to have escaped",
          "It is believed that she escaped",
          "She is believed to have escaped"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Se espera que suban los precios.",
        "respuestas": [
          "Prices are expected to rise",
          "It is expected that prices will rise",
          "Prices are expected to go up"
        ]
      }
    ]
  },
  {
    "id": "b2-11",
    "num": 11,
    "titulo": "Forma causativa (have / get something done)",
    "contexto": "Servicios y reparaciones",
    "explicacion": {
      "es": [
        "La **forma causativa** sirve para decir que **otra persona hace algo por nosotros**, normalmente un servicio que pagamos: *I **had my hair cut** yesterday.* (Ayer me corté el pelo; en realidad me lo cortaron.)",
        "Forma: ***have*** + **objeto** + **participio**: *We**'re having the kitchen painted**.* (Nos están pintando la cocina.) *She **has her nails done** every month.* El verbo *have* cambia de tiempo; el participio no.",
        "***Get*** + objeto + participio significa lo mismo, pero es **más informal**: *I need to **get my car fixed**.* (Tengo que llevar a arreglar mi carro.)",
        "También se usa para **cosas malas que nos pasaron** (no por decisión nuestra): *She **had her bag stolen** on the subway.* (Le robaron la bolsa en el metro.)"
      ],
      "tabla": {
        "columnas": [
          "Tiempo",
          "Ejemplo",
          "Significado"
        ],
        "filas": [
          [
            "Presente",
            "I have my car washed every week.",
            "Me lavan el carro cada semana."
          ],
          [
            "Pasado",
            "She had her hair dyed.",
            "Se pintó el pelo (en la estética)."
          ],
          [
            "Presente continuo",
            "We're having the roof repaired.",
            "Nos están arreglando el techo."
          ],
          [
            "Futuro",
            "I'll get the TV fixed tomorrow.",
            "Mañana llevo a arreglar la tele."
          ],
          [
            "Mala experiencia",
            "He had his phone stolen.",
            "Le robaron el celular."
          ]
        ]
      },
      "ojo": [
        "*I cut my hair* = yo mismo me lo corté. *I **had** my hair cut* = me lo cortaron en la estética.",
        "El orden es **have + cosa + participio**: *I had **my car** repaired* ✅, no *I had repaired my car* ❌ (eso significa que tú lo reparaste).",
        "Preguntas: ***Where do** you **have** your hair cut? **Did** you **get** your passport renewed?*",
        "***Have someone do something*** (verbo base) = **pedirle a alguien que haga algo**: *I'll **have my assistant call** you.*",
        "***Get someone to do something*** = **convencer / conseguir que alguien haga algo**: *I **got my brother to help** me.*"
      ],
      "en": [
        "The causative means someone does something for us: I had my hair cut yesterday.",
        "Form: have plus object plus participle. We're having the kitchen painted.",
        "Get is more informal: I need to get my car fixed.",
        "It is also used for bad experiences: She had her bag stolen on the subway."
      ]
    },
    "vocabulario": [
      {
        "en": "I had my hair cut.",
        "es": "me corté el pelo (en la estética)",
        "imagen": "Persona en la silla de una estética con el estilista",
        "ejemplo": [
          "I had my hair cut yesterday.",
          "Ayer me corté el pelo."
        ]
      },
      {
        "en": "I need to get my car fixed.",
        "es": "tengo que llevar a arreglar mi carro",
        "imagen": "Mecánico revisando un carro en un taller",
        "ejemplo": [
          "I need to get my car fixed before the trip.",
          "Tengo que llevar a arreglar mi carro antes del viaje."
        ]
      },
      {
        "en": "We're having the kitchen painted.",
        "es": "nos están pintando la cocina",
        "imagen": "Pintor pintando la pared de una cocina",
        "ejemplo": [
          "We're having the kitchen painted this week.",
          "Esta semana nos están pintando la cocina."
        ]
      },
      {
        "en": "She had her bag stolen.",
        "es": "le robaron la bolsa",
        "imagen": "Mujer preocupada en el metro sin su bolsa",
        "ejemplo": [
          "She had her bag stolen on the subway.",
          "Le robaron la bolsa en el metro."
        ]
      },
      {
        "en": "I get my nails done.",
        "es": "me arreglo las uñas",
        "imagen": "Manicurista pintando las uñas de una clienta",
        "ejemplo": [
          "I get my nails done every two weeks.",
          "Me arreglo las uñas cada dos semanas."
        ]
      },
      {
        "en": "He had his eyes tested.",
        "es": "le revisaron la vista",
        "imagen": "Oftalmólogo revisando los ojos de un paciente",
        "ejemplo": [
          "He had his eyes tested and now he needs glasses.",
          "Le revisaron la vista y ahora necesita lentes."
        ]
      },
      {
        "en": "We had the roof repaired.",
        "es": "nos arreglaron el techo",
        "imagen": "Trabajadores reparando un techo de teja",
        "ejemplo": [
          "We had the roof repaired before the rainy season.",
          "Nos arreglaron el techo antes de la temporada de lluvias."
        ]
      },
      {
        "en": "I'm getting my passport renewed.",
        "es": "estoy renovando mi pasaporte",
        "imagen": "Persona en una oficina de gobierno con documentos",
        "ejemplo": [
          "I'm getting my passport renewed next week.",
          "La próxima semana renuevo mi pasaporte."
        ]
      },
      {
        "en": "They had the house cleaned.",
        "es": "mandaron a limpiar la casa",
        "imagen": "Equipo de limpieza trabajando en una sala",
        "ejemplo": [
          "They had the house cleaned before the party.",
          "Mandaron a limpiar la casa antes de la fiesta."
        ]
      },
      {
        "en": "I had my teeth cleaned.",
        "es": "me hicieron una limpieza dental",
        "imagen": "Dentista limpiando los dientes de un paciente",
        "ejemplo": [
          "I had my teeth cleaned at the dentist's.",
          "Me hicieron una limpieza dental en el dentista."
        ]
      },
      {
        "en": "She's having a dress made.",
        "es": "le están haciendo un vestido",
        "imagen": "Costurera tomando medidas a una clienta",
        "ejemplo": [
          "She's having a dress made for the wedding.",
          "Le están haciendo un vestido para la boda."
        ]
      },
      {
        "en": "He had his phone screen replaced.",
        "es": "le cambiaron la pantalla del celular",
        "imagen": "Técnico cambiando la pantalla de un celular",
        "ejemplo": [
          "He had his phone screen replaced.",
          "Le cambiaron la pantalla del celular."
        ]
      },
      {
        "en": "We get the newspaper delivered.",
        "es": "nos traen el periódico",
        "imagen": "Repartidor dejando un periódico en la puerta",
        "ejemplo": [
          "We get the newspaper delivered every morning.",
          "Nos traen el periódico cada mañana."
        ]
      },
      {
        "en": "I'll have my assistant call you.",
        "es": "le diré a mi asistente que le llame",
        "imagen": "Ejecutivo dando instrucciones a su asistente",
        "ejemplo": [
          "I'll have my assistant call you this afternoon.",
          "Le diré a mi asistente que le llame esta tarde."
        ]
      },
      {
        "en": "I got my brother to help me.",
        "es": "conseguí que mi hermano me ayudara",
        "imagen": "Hermanos cargando un sofá juntos",
        "ejemplo": [
          "I got my brother to help me move.",
          "Conseguí que mi hermano me ayudara con la mudanza."
        ]
      },
      {
        "en": "Where do you get your hair cut?",
        "es": "¿dónde te cortas el pelo?",
        "imagen": "Persona admirando el corte de pelo de su amigo",
        "ejemplo": [
          "Your hair looks great! Where do you get it cut?",
          "¡Tu pelo se ve genial! ¿Dónde te lo cortas?"
        ]
      }
    ],
    "grupos": [
      {
        "id": "servicios",
        "titulo": "Servicios",
        "icono": "🛠️",
        "patron": [
          "a plumber",
          "an electrician",
          "a mechanic"
        ],
        "palabras": [
          {
            "en": "a plumber",
            "es": "un plomero",
            "imagen": "Plomero arreglando una tubería bajo el fregadero",
            "ejemplo": [
              "We had the leak fixed by a plumber.",
              "Un plomero nos arregló la fuga."
            ]
          },
          {
            "en": "an electrician",
            "es": "un electricista",
            "imagen": "Electricista revisando cables en un tablero",
            "ejemplo": [
              "We need to get the wiring checked by an electrician.",
              "Necesitamos que un electricista revise la instalación."
            ]
          },
          {
            "en": "a locksmith",
            "es": "un cerrajero",
            "imagen": "Cerrajero cambiando la chapa de una puerta",
            "ejemplo": [
              "I had the locks changed by a locksmith.",
              "Un cerrajero me cambió las chapas."
            ]
          },
          {
            "en": "a dry cleaner's",
            "es": "una tintorería",
            "imagen": "Ropa en ganchos con bolsas de plástico",
            "ejemplo": [
              "I get my suits cleaned at the dry cleaner's.",
              "Mando mis trajes a la tintorería."
            ]
          },
          {
            "en": "a tailor",
            "es": "un sastre",
            "imagen": "Sastre ajustando un saco con alfileres",
            "ejemplo": [
              "I had my pants shortened by a tailor.",
              "El sastre me acortó los pantalones."
            ]
          },
          {
            "en": "a carpenter",
            "es": "un carpintero",
            "imagen": "Carpintero cortando madera en su taller",
            "ejemplo": [
              "We're having new shelves made by a carpenter.",
              "Un carpintero nos está haciendo repisas nuevas."
            ]
          }
        ]
      },
      {
        "id": "problemas",
        "titulo": "Cosas que nos pasaron",
        "icono": "😣",
        "patron": [
          "I had my … stolen",
          "He had his … broken",
          "We had our … canceled"
        ],
        "palabras": [
          {
            "en": "had my wallet stolen",
            "es": "me robaron la cartera",
            "imagen": "Persona revisando su bolsillo vacío en la calle",
            "ejemplo": [
              "I had my wallet stolen at the market.",
              "Me robaron la cartera en el mercado."
            ]
          },
          {
            "en": "had his car towed",
            "es": "se llevaron su carro con la grúa",
            "imagen": "Grúa llevándose un carro estacionado",
            "ejemplo": [
              "He had his car towed for parking illegally.",
              "La grúa se llevó su carro por estacionarse mal."
            ]
          },
          {
            "en": "had our flight canceled",
            "es": "nos cancelaron el vuelo",
            "imagen": "Pasajeros frustrados frente a una pantalla del aeropuerto",
            "ejemplo": [
              "We had our flight canceled at the last minute.",
              "Nos cancelaron el vuelo de último momento."
            ]
          },
          {
            "en": "had her account hacked",
            "es": "le hackearon la cuenta",
            "imagen": "Persona preocupada mirando su laptop con un aviso",
            "ejemplo": [
              "She had her email account hacked.",
              "Le hackearon la cuenta de correo."
            ]
          },
          {
            "en": "had my windows broken",
            "es": "me rompieron las ventanas",
            "imagen": "Ventana rota con un balón en el piso",
            "ejemplo": [
              "We had our windows broken by the storm.",
              "La tormenta nos rompió las ventanas."
            ]
          },
          {
            "en": "had his license suspended",
            "es": "le suspendieron la licencia",
            "imagen": "Agente de tránsito revisando una licencia",
            "ejemplo": [
              "He had his license suspended for speeding.",
              "Le suspendieron la licencia por exceso de velocidad."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I had my hair cut yesterday.",
        "es": "Ayer me corté el pelo."
      },
      {
        "en": "I need to get my car fixed before the trip.",
        "es": "Tengo que llevar a arreglar mi carro antes del viaje."
      },
      {
        "en": "We're having the kitchen painted this week.",
        "es": "Esta semana nos están pintando la cocina."
      },
      {
        "en": "She had her bag stolen on the subway.",
        "es": "Le robaron la bolsa en el metro."
      },
      {
        "en": "He had his eyes tested and now he needs glasses.",
        "es": "Le revisaron la vista y ahora necesita lentes."
      },
      {
        "en": "I'll have my assistant call you this afternoon.",
        "es": "Le diré a mi asistente que le llame esta tarde."
      },
      {
        "en": "I got my brother to help me move.",
        "es": "Conseguí que mi hermano me ayudara con la mudanza."
      },
      {
        "en": "Your hair looks great! Where do you get it cut?",
        "es": "¡Tu pelo se ve genial! ¿Dónde te lo cortas?"
      },
      {
        "en": "I had my wallet stolen at the market.",
        "es": "Me robaron la cartera en el mercado."
      },
      {
        "en": "We had our flight canceled at the last minute.",
        "es": "Nos cancelaron el vuelo de último momento."
      }
    ],
    "frases": [
      {
        "en": "We're having the whole house renovated, so we're living with my parents for three months.",
        "es": "Nos están remodelando toda la casa, así que vivimos con mis papás tres meses.",
        "imagen": "Casa en remodelación con andamios y trabajadores"
      },
      {
        "en": "I need to get my phone repaired, because the screen broke when I dropped it.",
        "es": "Tengo que llevar a arreglar mi celular, porque se le rompió la pantalla cuando se me cayó.",
        "imagen": "Celular con la pantalla estrellada en el mostrador de un técnico"
      },
      {
        "en": "She had her wedding dress made by a famous designer in Mexico City.",
        "es": "Le hizo su vestido de novia un diseñador famoso de la Ciudad de México.",
        "imagen": "Diseñador ajustando un vestido de novia en su taller"
      },
      {
        "en": "Before selling the car, we had it washed, polished and checked by a mechanic.",
        "es": "Antes de vender el carro, lo mandamos a lavar, pulir y revisar con un mecánico.",
        "imagen": "Carro brillante recién lavado en un taller"
      },
      {
        "en": "My grandmother has her groceries delivered because she can't carry heavy bags.",
        "es": "A mi abuela le traen el mandado porque no puede cargar bolsas pesadas.",
        "imagen": "Repartidor entregando bolsas del súper a una señora mayor"
      },
      {
        "en": "I got my landlord to fix the heater after I complained three times.",
        "es": "Conseguí que mi casero arreglara el calentador después de quejarme tres veces.",
        "imagen": "Casero arreglando un calentador de agua"
      },
      {
        "en": "He had his bike stolen outside the library, so now he always uses two locks.",
        "es": "Le robaron la bici afuera de la biblioteca, así que ahora siempre usa dos candados.",
        "imagen": "Bicicleta con dos candados en un poste"
      },
      {
        "en": "How often do you have your car serviced? Every six months.",
        "es": "¿Cada cuánto le das servicio a tu carro? Cada seis meses.",
        "imagen": "Mecánico cambiando el aceite de un carro"
      },
      {
        "en": "We're getting solar panels installed next month to save on electricity.",
        "es": "El próximo mes nos van a instalar paneles solares para ahorrar luz.",
        "imagen": "Técnicos instalando paneles solares en un techo"
      },
      {
        "en": "I'll have the documents sent to your office by courier tomorrow morning.",
        "es": "Mañana en la mañana le mando los documentos a su oficina por mensajería.",
        "imagen": "Mensajero en moto con un sobre de documentos"
      }
    ],
    "listening": [
      {
        "audio": "I'm having my wisdom teeth removed on Friday, so I won't be at work.",
        "pregunta": "¿Qué le van a hacer el viernes?",
        "opciones": [
          "Le van a sacar las muelas del juicio",
          "Le van a cortar el pelo",
          "Le van a operar la rodilla",
          "Le van a revisar la vista"
        ]
      },
      {
        "audio": "We had the walls painted blue, but now we don't like the color.",
        "pregunta": "¿De qué color pintaron las paredes?",
        "opciones": [
          "Azul",
          "Blanco",
          "Verde",
          "Amarillo"
        ]
      },
      {
        "audio": "She had her purse stolen while she was having coffee.",
        "pregunta": "¿Qué le robaron?",
        "opciones": [
          "Su bolsa",
          "Su celular",
          "Su carro",
          "Su chamarra"
        ]
      },
      {
        "audio": "Where can I get my shoes repaired? There's a little shop next to the market.",
        "pregunta": "¿Dónde le pueden arreglar los zapatos?",
        "opciones": [
          "En una tiendita junto al mercado",
          "En el centro comercial",
          "En la zapatería del centro",
          "En ningún lado"
        ]
      },
      {
        "audio": "I'll get the technician to check the internet connection this afternoon.",
        "pregunta": "¿Qué va a revisar el técnico?",
        "opciones": [
          "La conexión de internet",
          "La luz",
          "El agua",
          "El gas"
        ]
      }
    ],
    "lectura": {
      "titulo": "A very expensive month",
      "texto": "This month has been a disaster for my wallet. It started when we had a leak in the bathroom, and we had to call a plumber. He said the pipes were very old, so we had them all replaced. That cost us eight thousand pesos. Then, the next week, my car started making a strange noise. I took it to the mechanic, and I had the brakes changed and the oil checked. Another five thousand. As if that weren't enough, my daughter had her phone stolen at school, so we had to buy her a new one. And yesterday, my husband decided it was the perfect time to have his teeth whitened for our cousin's wedding! I told him he could get it done next year, but he didn't listen. The only good news is that we got our neighbor, who is an electrician, to fix the lights for free. Next month, I'm not having anything done.",
      "preguntas": [
        {
          "pregunta": "¿Por qué llamaron al plomero?",
          "opciones": [
            "Había una fuga en el baño",
            "No había agua",
            "Se tapó el fregadero",
            "Para pintar"
          ]
        },
        {
          "pregunta": "¿Qué le cambiaron al carro?",
          "opciones": [
            "Los frenos",
            "Las llantas",
            "El motor",
            "Los espejos"
          ]
        },
        {
          "pregunta": "¿Qué le pasó a la hija?",
          "opciones": [
            "Le robaron el celular en la escuela",
            "Se rompió un brazo",
            "Perdió su mochila",
            "Reprobó un examen"
          ]
        },
        {
          "pregunta": "¿Quién arregló la luz gratis?",
          "opciones": [
            "El vecino electricista",
            "El esposo",
            "El plomero",
            "El mecánico"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con la forma causativa.",
        "pregunta": "I ___ my hair cut yesterday. (have)",
        "respuestas": [
          "had",
          "got"
        ]
      },
      {
        "instruccion": "Completa con la forma causativa.",
        "pregunta": "We're having the house ___ (paint).",
        "respuestas": [
          "painted"
        ]
      },
      {
        "instruccion": "Completa con la forma causativa.",
        "pregunta": "I need to get my car ___ (fix).",
        "respuestas": [
          "fixed",
          "repaired"
        ]
      },
      {
        "instruccion": "Completa con la forma causativa.",
        "pregunta": "She had her phone ___ (steal).",
        "respuestas": [
          "stolen"
        ]
      },
      {
        "instruccion": "Ordena: my / I / had / repaired / watch",
        "pregunta": "___",
        "respuestas": [
          "I had my watch repaired"
        ]
      },
      {
        "instruccion": "Completa con to o nada.",
        "pregunta": "I got my sister ___ help me.",
        "respuestas": [
          "to"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Me corté el pelo (en la estética).",
        "respuestas": [
          "I had my hair cut",
          "I got my hair cut",
          "I had a haircut"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Le robaron la cartera.",
        "respuestas": [
          "He had his wallet stolen",
          "She had her wallet stolen",
          "His wallet was stolen",
          "Her wallet was stolen"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "un plomero",
        "respuestas": [
          "a plumber"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I had repaired my car at the garage. (lo arregló el mecánico)",
        "respuestas": [
          "I had my car repaired at the garage",
          "I got my car repaired at the garage"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "I ___ my car washed every Saturday.",
        "opciones": [
          "have",
          "make",
          "do",
          "am"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We had the windows ___.",
        "opciones": [
          "cleaned",
          "clean",
          "cleaning",
          "to clean"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She ___ her hair dyed red last week.",
        "opciones": [
          "had",
          "has",
          "was",
          "did"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«I cut my hair» vs. «I had my hair cut». La segunda significa:",
        "opciones": [
          "Alguien me cortó el pelo",
          "Yo mismo me corté el pelo",
          "No me corté el pelo",
          "Me voy a cortar el pelo"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "He had his laptop ___ at the airport.",
        "opciones": [
          "stolen",
          "stole",
          "steal",
          "stealing"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I'll get the mechanic ___ the brakes.",
        "opciones": [
          "to check",
          "check",
          "checked",
          "checking"
        ]
      },
      {
        "tipo": "listening",
        "audio": "We're having a new kitchen installed, so we're eating out every night.",
        "pregunta": "¿Por qué comen fuera todas las noches?",
        "opciones": [
          "Les están instalando una cocina nueva",
          "No saben cocinar",
          "Están de vacaciones",
          "Se descompuso la estufa"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I had my eyes tested, and the doctor said I need glasses for driving.",
        "pregunta": "¿Para qué necesita lentes?",
        "opciones": [
          "Para manejar",
          "Para leer",
          "Para la computadora",
          "No necesita"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Tengo que llevar a arreglar mi celular.",
        "respuestas": [
          "I need to get my phone fixed",
          "I have to get my phone fixed",
          "I need to have my phone repaired",
          "I need to get my phone repaired",
          "I have to get my phone repaired"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Nos están pintando la casa.",
        "respuestas": [
          "We're having the house painted",
          "We are having the house painted",
          "We're getting the house painted"
        ]
      }
    ]
  },
  {
    "id": "b2-12",
    "num": 12,
    "titulo": "Estilo indirecto: preguntas y órdenes",
    "contexto": "Entrevistas",
    "explicacion": {
      "es": [
        "Para **reportar preguntas** se usa ***asked*** (o *wanted to know, wondered*) y la pregunta pasa a **orden de afirmación**, con el tiempo hacia atrás: *«Where do you live?» → She **asked me where I lived**.* (Me preguntó dónde vivía.)",
        "Desaparecen ***do / does / did*** y el signo de interrogación: *«What did you study?» → He asked me **what I had studied**.* *«Why are you leaving?» → They asked **why I was leaving**.*",
        "Las preguntas de **sí / no** se reportan con ***if*** o ***whether***: *«Do you speak English?» → She asked me **if I spoke** English.* *«Can you start on Monday?» → He asked **whether I could** start on Monday.*",
        "Las **órdenes y peticiones** se reportan con ***tell / ask*** + persona + ***to*** + verbo: *«Sit down.» → She **told me to sit** down.* Negativo: ***not to***: *«Don't be late.» → He **told us not to be** late.*"
      ],
      "tabla": {
        "columnas": [
          "Directo",
          "Indirecto"
        ],
        "filas": [
          [
            "«Where do you work?»",
            "She asked me where I worked."
          ],
          [
            "«Have you ever managed a team?»",
            "He asked if I had ever managed a team."
          ],
          [
            "«Can you speak French?»",
            "They asked whether I could speak French."
          ],
          [
            "«Please send your CV.»",
            "She asked me to send my CV."
          ],
          [
            "«Don't call before Monday.»",
            "He told me not to call before Monday."
          ]
        ]
      },
      "ojo": [
        "*She asked me where **did I live*** ❌ → *She asked me where **I lived*** ✅.",
        "Sin signo de interrogación al final: *He asked me what my name was**.***",
        "*Told me **to*** + verbo para órdenes: *She told me **to wait*** ✅ (no *She told me that wait* ❌).",
        "***Ask*** es más amable (petición); ***tell*** es más directo (orden): *She **asked** me to help / She **told** me to help.*",
        "Cambios de tiempo y lugar igual que en afirmaciones: *tomorrow → the next day, here → there, this → that*."
      ],
      "en": [
        "To report questions, use asked and statement word order: Where do you live? She asked me where I lived.",
        "Do, does and did disappear: He asked me what I had studied.",
        "Yes or no questions use if or whether: She asked me if I spoke English.",
        "Orders use tell plus person plus to: She told me to sit down. He told us not to be late."
      ]
    },
    "vocabulario": [
      {
        "en": "She asked me where I lived.",
        "es": "me preguntó dónde vivía",
        "imagen": "Entrevistadora tomando notas frente a un candidato",
        "ejemplo": [
          "She asked me where I lived and how I would get to work.",
          "Me preguntó dónde vivía y cómo llegaría al trabajo."
        ]
      },
      {
        "en": "He asked me if I spoke English.",
        "es": "me preguntó si hablaba inglés",
        "imagen": "Entrevistador conversando con una candidata en una oficina",
        "ejemplo": [
          "He asked me if I spoke English fluently.",
          "Me preguntó si hablaba inglés con fluidez."
        ]
      },
      {
        "en": "They wanted to know",
        "es": "querían saber",
        "imagen": "Panel de entrevistadores escuchando con atención",
        "ejemplo": [
          "They wanted to know why I had left my last job.",
          "Querían saber por qué había dejado mi último trabajo."
        ]
      },
      {
        "en": "She told me to sit down.",
        "es": "me dijo que me sentara",
        "imagen": "Entrevistadora señalando una silla con amabilidad",
        "ejemplo": [
          "She smiled and told me to sit down.",
          "Sonrió y me dijo que me sentara."
        ]
      },
      {
        "en": "He told us not to be late.",
        "es": "nos dijo que no llegáramos tarde",
        "imagen": "Jefe señalando el reloj frente a su equipo",
        "ejemplo": [
          "He told us not to be late for the meeting.",
          "Nos dijo que no llegáramos tarde a la junta."
        ]
      },
      {
        "en": "She asked me to send my CV.",
        "es": "me pidió que mandara mi currículum",
        "imagen": "Persona enviando un correo con un archivo adjunto",
        "ejemplo": [
          "She asked me to send my CV by email.",
          "Me pidió que mandara mi currículum por correo."
        ]
      },
      {
        "en": "whether I could start on Monday",
        "es": "si podía empezar el lunes",
        "imagen": "Calendario con el lunes marcado",
        "ejemplo": [
          "He asked whether I could start on Monday.",
          "Me preguntó si podía empezar el lunes."
        ]
      },
      {
        "en": "what my strengths were",
        "es": "cuáles eran mis fortalezas",
        "imagen": "Candidato hablando con seguridad en una entrevista",
        "ejemplo": [
          "They asked me what my strengths were.",
          "Me preguntaron cuáles eran mis fortalezas."
        ]
      },
      {
        "en": "how much I expected to earn",
        "es": "cuánto esperaba ganar",
        "imagen": "Persona pensando frente a una oferta de sueldo",
        "ejemplo": [
          "She asked me how much I expected to earn.",
          "Me preguntó cuánto esperaba ganar."
        ]
      },
      {
        "en": "He wondered why",
        "es": "se preguntaba por qué",
        "imagen": "Persona pensativa mirando por la ventana",
        "ejemplo": [
          "He wondered why nobody had called him.",
          "Se preguntaba por qué nadie le había llamado."
        ]
      },
      {
        "en": "She reminded me to bring",
        "es": "me recordó que trajera",
        "imagen": "Persona señalando una lista de documentos",
        "ejemplo": [
          "She reminded me to bring my ID.",
          "Me recordó que trajera mi identificación."
        ]
      },
      {
        "en": "They ordered us to leave.",
        "es": "nos ordenaron salir",
        "imagen": "Guardias señalando la salida de un edificio",
        "ejemplo": [
          "The police ordered us to leave the building.",
          "La policía nos ordenó salir del edificio."
        ]
      },
      {
        "en": "He asked me what I had studied.",
        "es": "me preguntó qué había estudiado",
        "imagen": "Entrevistador revisando un título universitario",
        "ejemplo": [
          "He asked me what I had studied at university.",
          "Me preguntó qué había estudiado en la universidad."
        ]
      },
      {
        "en": "She advised me to",
        "es": "me aconsejó que",
        "imagen": "Mentora dando un consejo a una joven",
        "ejemplo": [
          "She advised me to take more risks.",
          "Me aconsejó que tomara más riesgos."
        ]
      },
      {
        "en": "They asked me to wait.",
        "es": "me pidieron que esperara",
        "imagen": "Recepcionista indicando una sala de espera",
        "ejemplo": [
          "They asked me to wait in the lobby.",
          "Me pidieron que esperara en el vestíbulo."
        ]
      },
      {
        "en": "He invited me to",
        "es": "me invitó a",
        "imagen": "Persona estrechando la mano en una oficina",
        "ejemplo": [
          "He invited me to visit the factory.",
          "Me invitó a visitar la fábrica."
        ]
      }
    ],
    "grupos": [
      {
        "id": "entrevista",
        "titulo": "Preguntas de entrevista",
        "icono": "💼",
        "patron": [
          "Tell me about yourself.",
          "Why do you want this job?",
          "Where do you see yourself in five years?"
        ],
        "palabras": [
          {
            "en": "Tell me about yourself.",
            "es": "háblame de ti",
            "imagen": "Entrevistadora sonriendo con un currículum en la mano",
            "ejemplo": [
              "Let's start. Tell me about yourself.",
              "Empecemos. Háblame de ti."
            ]
          },
          {
            "en": "Why do you want this job?",
            "es": "¿por qué quieres este trabajo?",
            "imagen": "Candidato pensando la respuesta en una oficina",
            "ejemplo": [
              "Why do you want this job?",
              "¿Por qué quieres este trabajo?"
            ]
          },
          {
            "en": "What are your weaknesses?",
            "es": "¿cuáles son tus debilidades?",
            "imagen": "Entrevistador con cara seria tomando notas",
            "ejemplo": [
              "What are your main weaknesses?",
              "¿Cuáles son tus principales debilidades?"
            ]
          },
          {
            "en": "Where do you see yourself in five years?",
            "es": "¿dónde te ves en cinco años?",
            "imagen": "Persona imaginando su futuro en una oficina moderna",
            "ejemplo": [
              "Where do you see yourself in five years?",
              "¿Dónde te ves en cinco años?"
            ]
          },
          {
            "en": "Do you have any questions for us?",
            "es": "¿tienes alguna pregunta para nosotros?",
            "imagen": "Panel de entrevistadores terminando una entrevista",
            "ejemplo": [
              "Finally, do you have any questions for us?",
              "Por último, ¿tienes alguna pregunta para nosotros?"
            ]
          },
          {
            "en": "When can you start?",
            "es": "¿cuándo puedes empezar?",
            "imagen": "Gerente estrechando la mano de un candidato",
            "ejemplo": [
              "When can you start? Next Monday.",
              "¿Cuándo puedes empezar? El próximo lunes."
            ]
          }
        ]
      },
      {
        "id": "reportar",
        "titulo": "Verbos para reportar",
        "icono": "📢",
        "patron": [
          "She asked me…",
          "He told me to…",
          "They wanted to know…"
        ],
        "palabras": [
          {
            "en": "asked",
            "es": "preguntó / pidió",
            "imagen": "Persona levantando la mano en una conferencia",
            "ejemplo": [
              "She asked me what time it was.",
              "Me preguntó qué hora era."
            ]
          },
          {
            "en": "wanted to know",
            "es": "quería saber",
            "imagen": "Periodista haciendo preguntas a un político",
            "ejemplo": [
              "He wanted to know where I had been.",
              "Quería saber dónde había estado."
            ]
          },
          {
            "en": "told",
            "es": "dijo (a alguien) / ordenó",
            "imagen": "Maestra dando instrucciones a la clase",
            "ejemplo": [
              "The teacher told us to open our books.",
              "La maestra nos dijo que abriéramos los libros."
            ]
          },
          {
            "en": "wondered",
            "es": "se preguntó",
            "imagen": "Persona pensativa con la mano en la barbilla",
            "ejemplo": [
              "I wondered if I had made the right decision.",
              "Me pregunté si había tomado la decisión correcta."
            ]
          },
          {
            "en": "reminded",
            "es": "recordó",
            "imagen": "Persona pegando una nota adhesiva en la computadora de otro",
            "ejemplo": [
              "My mom reminded me to call my grandmother.",
              "Mi mamá me recordó que le llamara a mi abuela."
            ]
          },
          {
            "en": "warned",
            "es": "advirtió",
            "imagen": "Guardavidas señalando una bandera roja",
            "ejemplo": [
              "The lifeguard warned us not to swim there.",
              "El salvavidas nos advirtió que no nadáramos ahí."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "She asked me where I lived and how I would get to work.",
        "es": "Me preguntó dónde vivía y cómo llegaría al trabajo."
      },
      {
        "en": "He asked me if I spoke English fluently.",
        "es": "Me preguntó si hablaba inglés con fluidez."
      },
      {
        "en": "They wanted to know why I had left my last job.",
        "es": "Querían saber por qué había dejado mi último trabajo."
      },
      {
        "en": "She smiled and told me to sit down.",
        "es": "Sonrió y me dijo que me sentara."
      },
      {
        "en": "He told us not to be late for the meeting.",
        "es": "Nos dijo que no llegáramos tarde a la junta."
      },
      {
        "en": "She asked me to send my CV by email.",
        "es": "Me pidió que mandara mi currículum por correo."
      },
      {
        "en": "He asked whether I could start on Monday.",
        "es": "Me preguntó si podía empezar el lunes."
      },
      {
        "en": "They asked me what my strengths were.",
        "es": "Me preguntaron cuáles eran mis fortalezas."
      },
      {
        "en": "The lifeguard warned us not to swim there.",
        "es": "El salvavidas nos advirtió que no nadáramos ahí."
      },
      {
        "en": "My mom reminded me to call my grandmother.",
        "es": "Mi mamá me recordó que le llamara a mi abuela."
      }
    ],
    "frases": [
      {
        "en": "At the interview, they asked me why I wanted to work for an international company and what I knew about them.",
        "es": "En la entrevista me preguntaron por qué quería trabajar en una empresa internacional y qué sabía de ellos.",
        "imagen": "Candidata respondiendo con seguridad frente a un panel"
      },
      {
        "en": "The doctor told me to rest for a week and not to lift anything heavy.",
        "es": "El doctor me dijo que descansara una semana y que no cargara nada pesado.",
        "imagen": "Doctor dando indicaciones a un paciente en el consultorio"
      },
      {
        "en": "My boss asked me whether I could travel to Monterrey the following week.",
        "es": "Mi jefe me preguntó si podía viajar a Monterrey la semana siguiente.",
        "imagen": "Jefe y empleado revisando una agenda de viaje"
      },
      {
        "en": "The journalist asked the singer how she had felt when she won her first award.",
        "es": "El periodista le preguntó a la cantante cómo se había sentido cuando ganó su primer premio.",
        "imagen": "Periodista entrevistando a una cantante con un trofeo"
      },
      {
        "en": "The flight attendant asked us to fasten our seatbelts and turn off our phones.",
        "es": "La sobrecargo nos pidió que nos abrocháramos el cinturón y apagáramos los celulares.",
        "imagen": "Sobrecargo dando indicaciones en el pasillo de un avión"
      },
      {
        "en": "My grandmother always asked me if I was eating well and if I had a girlfriend.",
        "es": "Mi abuela siempre me preguntaba si estaba comiendo bien y si tenía novia.",
        "imagen": "Abuela sirviendo comida a su nieto con una sonrisa"
      },
      {
        "en": "The police officer told the driver to get out of the car and show his license.",
        "es": "El policía le dijo al conductor que se bajara del carro y mostrara su licencia.",
        "imagen": "Policía de tránsito hablando con un conductor"
      },
      {
        "en": "She wanted to know how long I had been studying English and where I had learned it.",
        "es": "Quería saber cuánto tiempo llevaba estudiando inglés y dónde lo había aprendido.",
        "imagen": "Entrevistadora interesada escuchando a un candidato"
      },
      {
        "en": "They told me not to worry, because they would call me before Friday.",
        "es": "Me dijeron que no me preocupara, porque me llamarían antes del viernes.",
        "imagen": "Persona saliendo optimista de una entrevista"
      },
      {
        "en": "At the end of the interview, the manager asked me if I had any questions for them.",
        "es": "Al final de la entrevista, el gerente me preguntó si tenía alguna pregunta para ellos.",
        "imagen": "Gerente sonriendo al final de una entrevista"
      }
    ],
    "listening": [
      {
        "audio": "The interviewer asked me if I had ever worked in a team before.",
        "pregunta": "¿Qué le preguntaron?",
        "opciones": [
          "Si había trabajado en equipo",
          "Cuánto quería ganar",
          "Dónde vivía",
          "Qué había estudiado"
        ]
      },
      {
        "audio": "My teacher told me to read the instructions more carefully.",
        "pregunta": "¿Qué le dijo la maestra?",
        "opciones": [
          "Que leyera las instrucciones con más cuidado",
          "Que estudiara más",
          "Que llegara temprano",
          "Que hablara menos"
        ]
      },
      {
        "audio": "She asked me where I had bought my shoes because she loved them.",
        "pregunta": "¿Por qué le preguntó por los zapatos?",
        "opciones": [
          "Le encantaron",
          "Eran feos",
          "Eran caros",
          "Eran de ella"
        ]
      },
      {
        "audio": "The guide told us not to touch the paintings.",
        "pregunta": "¿Qué les dijo el guía?",
        "opciones": [
          "Que no tocaran las pinturas",
          "Que tomaran fotos",
          "Que guardaran silencio",
          "Que esperaran afuera"
        ]
      },
      {
        "audio": "They wanted to know when I could start, so I said the following Monday.",
        "pregunta": "¿Cuándo dijo que podía empezar?",
        "opciones": [
          "El lunes siguiente",
          "Ese mismo día",
          "En un mes",
          "El viernes"
        ]
      }
    ],
    "lectura": {
      "titulo": "My first job interview in English",
      "texto": "Last month I had my first job interview completely in English, for a marketing position at a Canadian company. I was very nervous. The interviewer, a friendly woman named Sarah, asked me to tell her about myself. Then she wanted to know why I was interested in the company and what I knew about their products. Luckily, I had done my research. She asked me if I had ever managed a social media campaign, and I told her about a project I had led at university. Then came the difficult question: she asked me what my biggest weakness was. I said I sometimes worked too slowly because I wanted everything to be perfect. She smiled and told me not to worry, because that was a common answer. At the end, she asked whether I had any questions. I asked her what a typical day was like. Two days later, she called and told me they wanted me to start the following week!",
      "preguntas": [
        {
          "pregunta": "¿Para qué puesto era la entrevista?",
          "opciones": [
            "Marketing",
            "Ventas",
            "Contabilidad",
            "Diseño"
          ]
        },
        {
          "pregunta": "¿Qué le preguntó sobre redes sociales?",
          "opciones": [
            "Si había manejado una campaña",
            "Si tenía muchos seguidores",
            "Cuál red usaba más",
            "Si sabía programar"
          ]
        },
        {
          "pregunta": "¿Cuál dijo que era su debilidad?",
          "opciones": [
            "Trabajar lento por perfeccionista",
            "Llegar tarde",
            "No hablar inglés bien",
            "Ser tímido"
          ]
        },
        {
          "pregunta": "¿Qué preguntó él al final?",
          "opciones": [
            "Cómo era un día típico",
            "Cuánto le pagarían",
            "Cuándo empezaba",
            "Dónde estaba la oficina"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Pasa a estilo indirecto.",
        "pregunta": "«Where do you live?» → She asked me where I ___.",
        "respuestas": [
          "lived"
        ]
      },
      {
        "instruccion": "Pasa a estilo indirecto.",
        "pregunta": "«Do you like coffee?» → He asked me ___ I liked coffee.",
        "respuestas": [
          "if",
          "whether"
        ]
      },
      {
        "instruccion": "Pasa a estilo indirecto.",
        "pregunta": "«What did you do?» → They asked me what I ___ done.",
        "respuestas": [
          "had"
        ]
      },
      {
        "instruccion": "Pasa a estilo indirecto.",
        "pregunta": "«Sit down.» → She told me ___ sit down.",
        "respuestas": [
          "to"
        ]
      },
      {
        "instruccion": "Pasa a estilo indirecto.",
        "pregunta": "«Don't be late.» → He told us ___ be late.",
        "respuestas": [
          "not to"
        ]
      },
      {
        "instruccion": "Pasa a estilo indirecto.",
        "pregunta": "«Can you help me?» → She asked if I ___ help her.",
        "respuestas": [
          "could"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Me preguntó dónde vivía.",
        "respuestas": [
          "She asked me where I lived",
          "He asked me where I lived"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Me dijo que esperara.",
        "respuestas": [
          "She told me to wait",
          "He told me to wait"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Háblame de ti.",
        "respuestas": [
          "Tell me about yourself"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "He asked me where did I work.",
        "respuestas": [
          "He asked me where I worked"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "«Are you married?» → She asked me ___.",
        "opciones": [
          "if I was married",
          "if was I married",
          "am I married",
          "that I was married"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Where are you going?» → He asked me where ___.",
        "opciones": [
          "I was going",
          "was I going",
          "I am go",
          "did I go"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Close the door, please.» → She asked me ___ the door.",
        "opciones": [
          "to close",
          "close",
          "closing",
          "that close"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Don't touch it!» → He told me ___ it.",
        "opciones": [
          "not to touch",
          "don't touch",
          "to not touching",
          "not touch"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«When did you arrive?» → They asked when I ___.",
        "opciones": [
          "had arrived",
          "did arrive",
          "arrive",
          "have arrived"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es correcta?",
        "opciones": [
          "She asked me what my name was.",
          "She asked me what was my name?",
          "She asked me what is my name.",
          "She asked to me my name was."
        ]
      },
      {
        "tipo": "listening",
        "audio": "The receptionist asked me to wait in the lobby until my name was called.",
        "pregunta": "¿Dónde le pidieron que esperara?",
        "opciones": [
          "En el vestíbulo",
          "En la oficina",
          "Afuera",
          "En la cafetería"
        ]
      },
      {
        "tipo": "listening",
        "audio": "My father asked me whether I had finished my homework before going out.",
        "pregunta": "¿Qué le preguntó su papá?",
        "opciones": [
          "Si había terminado la tarea",
          "A dónde iba",
          "Con quién salía",
          "A qué hora regresaba"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Nos dijo que no llegáramos tarde.",
        "respuestas": [
          "He told us not to be late",
          "She told us not to be late",
          "He told us not to arrive late",
          "She told us not to arrive late"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¿Cuándo puedes empezar?",
        "respuestas": [
          "When can you start"
        ]
      }
    ]
  },
  {
    "id": "b2-13",
    "num": 13,
    "titulo": "Verbos para reportar (suggest, advise, deny, admit…)",
    "contexto": "Resumir conversaciones",
    "explicacion": {
      "es": [
        "En lugar de repetir siempre *said* y *told*, en inglés se usan **verbos que resumen la intención** de lo que alguien dijo: *«I didn't take the money!» → He **denied** taking the money.* (Negó haber tomado el dinero.)",
        "Cada verbo tiene su **estructura**. Con **verbo + *to***: ***agree, refuse, offer, promise, threaten***: *She **offered to help** me. He **refused to pay**.* Con **verbo + persona + *to***: ***advise, warn, remind, persuade, encourage, invite***: *The doctor **advised me to rest**.*",
        "Con **verbo + *-ing***: ***admit, deny, suggest, recommend***: *She **admitted breaking** the vase. He **suggested going** to the beach.* Con **verbo + preposición + *-ing***: ***apologize for, insist on, accuse someone of, thank someone for***: *He **apologized for being** late.*",
        "Con **verbo + *that***: ***explain, complain, mention, insist, suggest***: *She **complained that** the food was cold. He **suggested that** we should leave early.*"
      ],
      "tabla": {
        "columnas": [
          "Estructura",
          "Verbos",
          "Ejemplo"
        ],
        "filas": [
          [
            "verbo + to",
            "agree, refuse, offer, promise",
            "He refused to sign the contract."
          ],
          [
            "verbo + persona + to",
            "advise, warn, remind, persuade",
            "She warned me not to go out."
          ],
          [
            "verbo + -ing",
            "admit, deny, suggest, recommend",
            "He admitted lying."
          ],
          [
            "verbo + prep. + -ing",
            "apologize for, insist on, accuse of",
            "They accused him of stealing."
          ],
          [
            "verbo + that",
            "explain, complain, mention",
            "She explained that she was sick."
          ]
        ]
      },
      "ojo": [
        "***Suggest*** **nunca** lleva persona + *to*: *He suggested **me to go*** ❌ → *He suggested **going*** ✅ o *He suggested **that I go*** ✅.",
        "***Deny*** + *-ing* (no *to*): *She denied **stealing*** ✅ (no *denied to steal* ❌).",
        "***Apologize for*** + *-ing*: *I apologized **for being** late* ✅.",
        "***Accuse someone of*** + *-ing*: *They accused her **of lying*** ✅.",
        "En negativo con *to*: *She warned me **not to** touch it. He promised **not to** tell anyone.*"
      ],
      "en": [
        "Reporting verbs summarize what someone said: He denied taking the money.",
        "Verb plus to: She offered to help me. Verb plus person plus to: The doctor advised me to rest.",
        "Verb plus ing: She admitted breaking the vase. He suggested going to the beach.",
        "Verb plus preposition: He apologized for being late."
      ]
    },
    "vocabulario": [
      {
        "en": "He denied taking the money.",
        "es": "negó haber tomado el dinero",
        "imagen": "Empleado negando con las manos frente a su jefe",
        "ejemplo": [
          "He denied taking the money from the office.",
          "Negó haber tomado el dinero de la oficina."
        ]
      },
      {
        "en": "She admitted breaking the vase.",
        "es": "admitió haber roto el jarrón",
        "imagen": "Niña apenada junto a un jarrón roto",
        "ejemplo": [
          "She admitted breaking the vase.",
          "Admitió haber roto el jarrón."
        ]
      },
      {
        "en": "He suggested going to the beach.",
        "es": "sugirió ir a la playa",
        "imagen": "Amigos planeando un viaje con un mapa",
        "ejemplo": [
          "He suggested going to the beach for the weekend.",
          "Sugirió ir a la playa el fin de semana."
        ]
      },
      {
        "en": "The doctor advised me to rest.",
        "es": "el doctor me aconsejó descansar",
        "imagen": "Doctora dando indicaciones a un paciente",
        "ejemplo": [
          "The doctor advised me to rest for a few days.",
          "El doctor me aconsejó descansar unos días."
        ]
      },
      {
        "en": "She offered to help me.",
        "es": "se ofreció a ayudarme",
        "imagen": "Vecina ofreciendo ayuda con unas bolsas pesadas",
        "ejemplo": [
          "She offered to help me with the boxes.",
          "Se ofreció a ayudarme con las cajas."
        ]
      },
      {
        "en": "He refused to pay.",
        "es": "se negó a pagar",
        "imagen": "Cliente cruzado de brazos frente a la caja",
        "ejemplo": [
          "He refused to pay for the broken glass.",
          "Se negó a pagar el vaso roto."
        ]
      },
      {
        "en": "She warned me not to go out.",
        "es": "me advirtió que no saliera",
        "imagen": "Mamá señalando la tormenta por la ventana",
        "ejemplo": [
          "She warned me not to go out in the storm.",
          "Me advirtió que no saliera en la tormenta."
        ]
      },
      {
        "en": "He apologized for being late.",
        "es": "se disculpó por llegar tarde",
        "imagen": "Persona disculpándose al entrar a una junta",
        "ejemplo": [
          "He apologized for being late again.",
          "Se disculpó por llegar tarde otra vez."
        ]
      },
      {
        "en": "They accused him of lying.",
        "es": "lo acusaron de mentir",
        "imagen": "Grupo señalando a un hombre con desconfianza",
        "ejemplo": [
          "They accused him of lying about his age.",
          "Lo acusaron de mentir sobre su edad."
        ]
      },
      {
        "en": "She insisted on paying.",
        "es": "insistió en pagar",
        "imagen": "Amiga sacando su tarjeta insistente en un restaurante",
        "ejemplo": [
          "She insisted on paying for dinner.",
          "Insistió en pagar la cena."
        ]
      },
      {
        "en": "He promised to call.",
        "es": "prometió llamar",
        "imagen": "Persona despidiéndose con el celular en la mano",
        "ejemplo": [
          "He promised to call me every day.",
          "Prometió llamarme todos los días."
        ]
      },
      {
        "en": "She reminded me to buy milk.",
        "es": "me recordó comprar leche",
        "imagen": "Nota pegada en el refrigerador",
        "ejemplo": [
          "She reminded me to buy milk on the way home.",
          "Me recordó comprar leche de camino a casa."
        ]
      },
      {
        "en": "They agreed to meet on Monday.",
        "es": "quedaron en verse el lunes",
        "imagen": "Dos personas estrechando la mano en una oficina",
        "ejemplo": [
          "They agreed to meet again on Monday.",
          "Quedaron en volver a verse el lunes."
        ]
      },
      {
        "en": "He complained that the room was dirty.",
        "es": "se quejó de que el cuarto estaba sucio",
        "imagen": "Cliente señalando una mesa sucia a un empleado",
        "ejemplo": [
          "He complained that the room was dirty.",
          "Se quejó de que el cuarto estaba sucio."
        ]
      },
      {
        "en": "She persuaded me to come.",
        "es": "me convenció de venir",
        "imagen": "Amiga jalando del brazo a otra hacia una fiesta",
        "ejemplo": [
          "She persuaded me to come to the party.",
          "Me convenció de venir a la fiesta."
        ]
      },
      {
        "en": "He thanked me for helping.",
        "es": "me agradeció por ayudar",
        "imagen": "Persona agradeciendo con un abrazo",
        "ejemplo": [
          "He thanked me for helping him move.",
          "Me agradeció por ayudarle con la mudanza."
        ]
      }
    ],
    "grupos": [
      {
        "id": "resumir",
        "titulo": "Resumir una conversación",
        "icono": "📝",
        "patron": [
          "In short…",
          "Basically, she said…",
          "The main point was…"
        ],
        "palabras": [
          {
            "en": "basically",
            "es": "básicamente",
            "imagen": "Persona resumiendo algo con las manos",
            "ejemplo": [
              "Basically, she said she wanted a new job.",
              "Básicamente, dijo que quería otro trabajo."
            ]
          },
          {
            "en": "in short",
            "es": "en resumen",
            "imagen": "Persona cerrando una libreta de notas",
            "ejemplo": [
              "In short, the meeting was a waste of time.",
              "En resumen, la junta fue una pérdida de tiempo."
            ]
          },
          {
            "en": "the main point",
            "es": "el punto principal",
            "imagen": "Persona señalando una idea en un pizarrón",
            "ejemplo": [
              "The main point was that we need more staff.",
              "El punto principal fue que necesitamos más personal."
            ]
          },
          {
            "en": "to sum up",
            "es": "para resumir",
            "imagen": "Persona escribiendo una conclusión",
            "ejemplo": [
              "To sum up, everybody agreed to try again.",
              "Para resumir, todos acordaron intentarlo de nuevo."
            ]
          },
          {
            "en": "she made it clear",
            "es": "dejó claro",
            "imagen": "Jefa hablando con firmeza en una junta",
            "ejemplo": [
              "She made it clear that she wouldn't change her mind.",
              "Dejó claro que no cambiaría de opinión."
            ]
          },
          {
            "en": "he pointed out",
            "es": "señaló / hizo notar",
            "imagen": "Persona señalando un error en un documento",
            "ejemplo": [
              "He pointed out that the numbers were wrong.",
              "Señaló que los números estaban mal."
            ]
          }
        ]
      },
      {
        "id": "mas",
        "titulo": "Más verbos para reportar",
        "icono": "🗨️",
        "patron": [
          "She threatened to…",
          "He encouraged me to…",
          "They recommended…"
        ],
        "palabras": [
          {
            "en": "threatened to",
            "es": "amenazó con",
            "imagen": "Persona enojada señalando con el dedo",
            "ejemplo": [
              "The neighbor threatened to call the police.",
              "El vecino amenazó con llamar a la policía."
            ]
          },
          {
            "en": "encouraged me to",
            "es": "me animó a",
            "imagen": "Maestra animando a un alumno tímido",
            "ejemplo": [
              "My teacher encouraged me to enter the competition.",
              "Mi maestra me animó a entrar al concurso."
            ]
          },
          {
            "en": "recommended",
            "es": "recomendó",
            "imagen": "Persona recomendando un libro en una librería",
            "ejemplo": [
              "She recommended trying the tacos al pastor.",
              "Recomendó probar los tacos al pastor."
            ]
          },
          {
            "en": "begged me to",
            "es": "me rogó que",
            "imagen": "Niño suplicando con las manos juntas",
            "ejemplo": [
              "My son begged me to buy him a puppy.",
              "Mi hijo me rogó que le comprara un perrito."
            ]
          },
          {
            "en": "explained that",
            "es": "explicó que",
            "imagen": "Profesor explicando frente a un pizarrón",
            "ejemplo": [
              "She explained that the bus had broken down.",
              "Explicó que el camión se había descompuesto."
            ]
          },
          {
            "en": "congratulated me on",
            "es": "me felicitó por",
            "imagen": "Persona estrechando la mano y felicitando",
            "ejemplo": [
              "My boss congratulated me on the promotion.",
              "Mi jefe me felicitó por el ascenso."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "He denied taking the money from the office.",
        "es": "Negó haber tomado el dinero de la oficina."
      },
      {
        "en": "She admitted breaking the vase.",
        "es": "Admitió haber roto el jarrón."
      },
      {
        "en": "He suggested going to the beach for the weekend.",
        "es": "Sugirió ir a la playa el fin de semana."
      },
      {
        "en": "The doctor advised me to rest for a few days.",
        "es": "El doctor me aconsejó descansar unos días."
      },
      {
        "en": "She warned me not to go out in the storm.",
        "es": "Me advirtió que no saliera en la tormenta."
      },
      {
        "en": "He apologized for being late again.",
        "es": "Se disculpó por llegar tarde otra vez."
      },
      {
        "en": "She insisted on paying for dinner.",
        "es": "Insistió en pagar la cena."
      },
      {
        "en": "Basically, she said she wanted a new job.",
        "es": "Básicamente, dijo que quería otro trabajo."
      },
      {
        "en": "My teacher encouraged me to enter the competition.",
        "es": "Mi maestra me animó a entrar al concurso."
      },
      {
        "en": "My boss congratulated me on the promotion.",
        "es": "Mi jefe me felicitó por el ascenso."
      }
    ],
    "frases": [
      {
        "en": "At first he denied breaking the window, but in the end he admitted doing it and apologized.",
        "es": "Al principio negó haber roto la ventana, pero al final admitió haberlo hecho y pidió perdón.",
        "imagen": "Niño apenado frente a una ventana rota con su papá"
      },
      {
        "en": "My doctor advised me to stop drinking soda and suggested walking for thirty minutes a day.",
        "es": "Mi doctor me aconsejó dejar el refresco y sugirió caminar treinta minutos al día.",
        "imagen": "Doctor hablando con un paciente sobre hábitos saludables"
      },
      {
        "en": "The neighbors complained that our dog barked all night and threatened to call the police.",
        "es": "Los vecinos se quejaron de que nuestro perro ladraba toda la noche y amenazaron con llamar a la policía.",
        "imagen": "Vecino molesto tocando la puerta de noche"
      },
      {
        "en": "She offered to drive me to the airport, but I insisted on taking a taxi.",
        "es": "Se ofreció a llevarme al aeropuerto, pero insistí en tomar un taxi.",
        "imagen": "Persona subiendo una maleta a un taxi"
      },
      {
        "en": "The manager refused to give us a refund, so we complained to the head office.",
        "es": "El gerente se negó a darnos un reembolso, así que nos quejamos con la oficina central.",
        "imagen": "Clientes discutiendo con un gerente en una tienda"
      },
      {
        "en": "My friends persuaded me to try skydiving, and it was the best experience of my life.",
        "es": "Mis amigos me convencieron de probar el paracaidismo y fue la mejor experiencia de mi vida.",
        "imagen": "Paracaidista sonriendo en caída libre"
      },
      {
        "en": "The teacher reminded us to bring our dictionaries and warned us not to be late for the exam.",
        "es": "La maestra nos recordó traer el diccionario y nos advirtió que no llegáramos tarde al examen.",
        "imagen": "Maestra dando indicaciones antes de un examen"
      },
      {
        "en": "The minister was accused of hiding information from the public.",
        "es": "Acusaron al ministro de ocultar información al público.",
        "imagen": "Político frente a reporteros con micrófonos"
      },
      {
        "en": "In short, everybody agreed to work an extra hour until the project was finished.",
        "es": "En resumen, todos acordaron trabajar una hora más hasta terminar el proyecto.",
        "imagen": "Equipo trabajando unido en una oficina de noche"
      },
      {
        "en": "He thanked us for coming and promised to send the photos the next day.",
        "es": "Nos agradeció por venir y prometió mandar las fotos al día siguiente.",
        "imagen": "Anfitrión despidiendo a los invitados en la puerta"
      }
    ],
    "listening": [
      {
        "audio": "My sister denied eating the last piece of cake, but she had chocolate on her face.",
        "pregunta": "¿Qué negó la hermana?",
        "opciones": [
          "Haberse comido el último pedazo de pastel",
          "Haber roto algo",
          "Haber llegado tarde",
          "Haber tomado dinero"
        ]
      },
      {
        "audio": "The mechanic advised me to change the tires before the trip.",
        "pregunta": "¿Qué le aconsejó el mecánico?",
        "opciones": [
          "Cambiar las llantas",
          "Vender el carro",
          "Cambiar el aceite",
          "No viajar"
        ]
      },
      {
        "audio": "He apologized for forgetting my birthday and invited me to dinner.",
        "pregunta": "¿Por qué se disculpó?",
        "opciones": [
          "Por olvidar su cumpleaños",
          "Por llegar tarde",
          "Por no llamar",
          "Por romper algo"
        ]
      },
      {
        "audio": "She suggested meeting at the café near the station.",
        "pregunta": "¿Dónde sugirió verse?",
        "opciones": [
          "En el café cerca de la estación",
          "En su casa",
          "En el parque",
          "En la oficina"
        ]
      },
      {
        "audio": "The landlord refused to fix the heater, so we bought a new one ourselves.",
        "pregunta": "¿Qué hicieron al final?",
        "opciones": [
          "Compraron un calentador nuevo",
          "Se mudaron",
          "Llamaron a la policía",
          "Esperaron al casero"
        ]
      }
    ],
    "lectura": {
      "titulo": "The family meeting",
      "texto": "Last Sunday, my family had a meeting to decide where to go on vacation. My father suggested going to the mountains, because he wanted to relax. My mother immediately refused to spend another vacation in a cold cabin and insisted on going to the beach. My little brother begged my parents to take him to a theme park. My sister, who is always practical, pointed out that we didn't have much money this year and recommended staying somewhere closer. Then my grandmother, who had been quiet the whole time, offered to pay for the trip if we went to visit her hometown in Veracruz. Everyone agreed immediately! My brother complained that there wouldn't be any roller coasters, but my grandmother promised to take him to the aquarium. In short, it was the shortest family meeting we have ever had. My father later admitted that he had secretly wanted to go to Veracruz all along.",
      "preguntas": [
        {
          "pregunta": "¿Qué sugirió el papá?",
          "opciones": [
            "Ir a las montañas",
            "Ir a la playa",
            "Ir a un parque de diversiones",
            "Quedarse en casa"
          ]
        },
        {
          "pregunta": "¿Qué recomendó la hermana?",
          "opciones": [
            "Quedarse en algún lugar más cerca",
            "Ir al extranjero",
            "No ir de vacaciones",
            "Rentar una cabaña"
          ]
        },
        {
          "pregunta": "¿Qué ofreció la abuela?",
          "opciones": [
            "Pagar el viaje si iban a su pueblo",
            "Cocinar",
            "Cuidar al hermano",
            "Prestar su carro"
          ]
        },
        {
          "pregunta": "¿Qué admitió el papá después?",
          "opciones": [
            "Que en secreto quería ir a Veracruz",
            "Que no quería ir a ningún lado",
            "Que no tenía dinero",
            "Que prefería la montaña"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con la forma correcta.",
        "pregunta": "He denied ___ (steal) the car.",
        "respuestas": [
          "stealing",
          "having stolen"
        ]
      },
      {
        "instruccion": "Completa con la forma correcta.",
        "pregunta": "She offered ___ (help) me.",
        "respuestas": [
          "to help"
        ]
      },
      {
        "instruccion": "Completa con la forma correcta.",
        "pregunta": "The doctor advised me ___ (drink) more water.",
        "respuestas": [
          "to drink"
        ]
      },
      {
        "instruccion": "Completa con la forma correcta.",
        "pregunta": "He apologized for ___ (be) rude.",
        "respuestas": [
          "being"
        ]
      },
      {
        "instruccion": "Completa con la forma correcta.",
        "pregunta": "They suggested ___ (go) to a museum.",
        "respuestas": [
          "going"
        ]
      },
      {
        "instruccion": "Completa con la preposición.",
        "pregunta": "They accused him ___ cheating.",
        "respuestas": [
          "of"
        ]
      },
      {
        "instruccion": "Reporta: «I'll help you, I promise.»",
        "pregunta": "She promised ___ me.",
        "respuestas": [
          "to help"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Se negó a pagar.",
        "respuestas": [
          "He refused to pay",
          "She refused to pay"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Insistió en pagar.",
        "respuestas": [
          "She insisted on paying",
          "He insisted on paying"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "He suggested me to take a taxi.",
        "respuestas": [
          "He suggested taking a taxi",
          "He suggested that I take a taxi",
          "He suggested that I should take a taxi"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "She admitted ___ the documents.",
        "opciones": [
          "losing",
          "to lose",
          "lose",
          "that lose"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "He refused ___ the contract.",
        "opciones": [
          "to sign",
          "signing",
          "sign",
          "for signing"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "My mom reminded me ___ my keys.",
        "opciones": [
          "to take",
          "taking",
          "take",
          "of taking"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "They thanked us ___ the flowers.",
        "opciones": [
          "for",
          "of",
          "to",
          "on"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es correcta?",
        "opciones": [
          "She suggested going home.",
          "She suggested me to go home.",
          "She suggested to go home me.",
          "She suggested going me home."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«I didn't do it!» → He ___ doing it.",
        "opciones": [
          "denied",
          "admitted",
          "offered",
          "agreed"
        ]
      },
      {
        "tipo": "listening",
        "audio": "My boss persuaded me to stay in the company for another year.",
        "pregunta": "¿De qué lo convenció su jefe?",
        "opciones": [
          "De quedarse otro año",
          "De cambiar de puesto",
          "De mudarse",
          "De renunciar"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The lifeguard warned the children not to swim beyond the flags.",
        "pregunta": "¿Qué advirtió el salvavidas?",
        "opciones": [
          "Que no nadaran más allá de las banderas",
          "Que salieran del agua",
          "Que usaran bloqueador",
          "Que no corrieran"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Me aconsejó descansar.",
        "respuestas": [
          "He advised me to rest",
          "She advised me to rest"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Se disculpó por llegar tarde.",
        "respuestas": [
          "He apologized for being late",
          "She apologized for being late",
          "He apologized for arriving late",
          "She apologized for arriving late"
        ]
      }
    ]
  },
  {
    "id": "b2-14",
    "num": 14,
    "titulo": "Oraciones de relativo explicativas y con preposición",
    "contexto": "Biografías y descripciones detalladas",
    "explicacion": {
      "es": [
        "Las **oraciones explicativas** (*non-defining*) añaden **información extra** que no es necesaria para identificar a la persona o cosa. Van **entre comas**: *Frida Kahlo, **who was born in Coyoacán**, is one of Mexico's most famous painters.*",
        "En ellas se usa ***who*** (personas), ***which*** (cosas), ***whose*** (posesión), ***where*** (lugares) y ***when*** (momentos). **Nunca** se usa ***that***, y el relativo **no se puede omitir**: *My car, **which** I bought in 2015, still works perfectly.*",
        "***Which*** también puede referirse a **toda la oración anterior**: *He passed all his exams, **which** surprised everybody.* (lo cual sorprendió a todos)",
        "Con **preposición**, en estilo **formal** la preposición va **antes** del relativo: *the person **to whom** I spoke, the house **in which** she lived*. En estilo **informal** va **al final**: *the person **I spoke to**, the house **she lived in***."
      ],
      "tabla": {
        "columnas": [
          "Tipo",
          "Ejemplo"
        ],
        "filas": [
          [
            "Especificativa (sin comas)",
            "The woman who lives next door is a doctor."
          ],
          [
            "Explicativa (con comas)",
            "My neighbor, who is a doctor, works at night."
          ],
          [
            "Which = lo cual",
            "It rained all week, which ruined our vacation."
          ],
          [
            "Preposición formal",
            "The company for which I work is Japanese."
          ],
          [
            "Preposición informal",
            "The company I work for is Japanese."
          ],
          [
            "Cantidad + of whom / which",
            "I have two brothers, both of whom live abroad."
          ]
        ]
      },
      "ojo": [
        "En las explicativas **no** se usa *that*: *My mother, **that** is a teacher…* ❌ → *My mother, **who** is a teacher…* ✅.",
        "Las **comas** cambian el significado: *My brother **who lives in Canada*** (tengo varios hermanos) / *My brother, **who lives in Canada**,* (solo tengo uno).",
        "Después de preposición: ***whom*** (personas) y ***which*** (cosas), nunca *who* ni *that*: *to **whom**, in **which***.",
        "***Some of whom, most of which, all of whom***: *She has many books, **most of which** are in English.*",
        "En biografías es muy útil: *…**where** he spent his childhood, …**when** she was only twenty, …**whose** paintings are famous worldwide*."
      ],
      "en": [
        "Non-defining relative clauses add extra information between commas: Frida Kahlo, who was born in Coyoacán, is one of Mexico's most famous painters.",
        "We never use that in these clauses.",
        "Which can refer to a whole sentence: He passed all his exams, which surprised everybody.",
        "With prepositions: the company for which I work, or informally, the company I work for."
      ]
    },
    "vocabulario": [
      {
        "en": "who was born in",
        "es": "que nació en",
        "imagen": "Casa azul colonial en Coyoacán",
        "ejemplo": [
          "Frida Kahlo, who was born in Coyoacán, painted many self-portraits.",
          "Frida Kahlo, que nació en Coyoacán, pintó muchos autorretratos."
        ]
      },
      {
        "en": "which I bought in 2015",
        "es": "que compré en 2015",
        "imagen": "Carro viejo pero bien cuidado",
        "ejemplo": [
          "My car, which I bought in 2015, still works perfectly.",
          "Mi carro, que compré en 2015, todavía funciona perfecto."
        ]
      },
      {
        "en": "which surprised everybody",
        "es": "lo cual sorprendió a todos",
        "imagen": "Personas con caras de sorpresa",
        "ejemplo": [
          "He passed all his exams, which surprised everybody.",
          "Aprobó todos sus exámenes, lo cual sorprendió a todos."
        ]
      },
      {
        "en": "whose paintings are famous",
        "es": "cuyas pinturas son famosas",
        "imagen": "Galería con murales de colores",
        "ejemplo": [
          "Diego Rivera, whose murals are famous worldwide, was born in Guanajuato.",
          "Diego Rivera, cuyos murales son famosos en todo el mundo, nació en Guanajuato."
        ]
      },
      {
        "en": "where he spent his childhood",
        "es": "donde pasó su infancia",
        "imagen": "Pueblo pequeño con calles empedradas",
        "ejemplo": [
          "He returned to Zacatecas, where he had spent his childhood.",
          "Regresó a Zacatecas, donde había pasado su infancia."
        ]
      },
      {
        "en": "when she was only twenty",
        "es": "cuando tenía solo veinte años",
        "imagen": "Foto antigua de una joven con un premio",
        "ejemplo": [
          "In 1990, when she was only twenty, she won her first prize.",
          "En 1990, cuando tenía solo veinte años, ganó su primer premio."
        ]
      },
      {
        "en": "the person to whom I spoke",
        "es": "la persona con quien hablé",
        "imagen": "Persona hablando con un empleado en una ventanilla",
        "ejemplo": [
          "The person to whom I spoke was very helpful.",
          "La persona con quien hablé fue muy servicial."
        ]
      },
      {
        "en": "the company I work for",
        "es": "la empresa para la que trabajo",
        "imagen": "Edificio de oficinas moderno",
        "ejemplo": [
          "The company I work for is opening an office in Lima.",
          "La empresa para la que trabajo va a abrir una oficina en Lima."
        ]
      },
      {
        "en": "both of whom",
        "es": "los dos / ambos",
        "imagen": "Dos hermanos adultos con sus familias en el extranjero",
        "ejemplo": [
          "I have two brothers, both of whom live abroad.",
          "Tengo dos hermanos y los dos viven en el extranjero."
        ]
      },
      {
        "en": "most of which",
        "es": "la mayoría de los cuales",
        "imagen": "Librero lleno de libros en inglés",
        "ejemplo": [
          "She has hundreds of books, most of which are in English.",
          "Tiene cientos de libros, la mayoría en inglés."
        ]
      },
      {
        "en": "the house in which she lived",
        "es": "la casa en la que vivió",
        "imagen": "Casa antigua convertida en museo",
        "ejemplo": [
          "This is the house in which the writer lived.",
          "Esta es la casa en la que vivió el escritor."
        ]
      },
      {
        "en": "my grandmother, who is ninety",
        "es": "mi abuela, que tiene noventa años",
        "imagen": "Abuela sonriendo con su pastel de cumpleaños",
        "ejemplo": [
          "My grandmother, who is ninety, still cooks every day.",
          "Mi abuela, que tiene noventa años, todavía cocina todos los días."
        ]
      },
      {
        "en": "the town I grew up in",
        "es": "el pueblo donde crecí",
        "imagen": "Plaza de un pueblo con kiosco",
        "ejemplo": [
          "The town I grew up in has changed a lot.",
          "El pueblo donde crecí ha cambiado mucho."
        ]
      },
      {
        "en": "some of whom",
        "es": "algunos de los cuales",
        "imagen": "Grupo de estudiantes de distintos países",
        "ejemplo": [
          "There were fifty students, some of whom came from Asia.",
          "Había cincuenta estudiantes, algunos de los cuales venían de Asia."
        ]
      },
      {
        "en": "which was a shame",
        "es": "lo cual fue una lástima",
        "imagen": "Persona decepcionada mirando un concierto cancelado",
        "ejemplo": [
          "The concert was canceled, which was a shame.",
          "El concierto se canceló, lo cual fue una lástima."
        ]
      },
      {
        "en": "the reason why",
        "es": "la razón por la que",
        "imagen": "Persona explicando algo con las manos",
        "ejemplo": [
          "That's the reason why I moved to Querétaro.",
          "Esa es la razón por la que me mudé a Querétaro."
        ]
      }
    ],
    "grupos": [
      {
        "id": "biografia",
        "titulo": "Vocabulario de biografías",
        "icono": "📜",
        "patron": [
          "was born in…",
          "grew up in…",
          "is best known for…"
        ],
        "palabras": [
          {
            "en": "is best known for",
            "es": "es conocido sobre todo por",
            "imagen": "Escritor firmando libros a una fila de lectores",
            "ejemplo": [
              "He is best known for his novels about the Mexican Revolution.",
              "Es conocido sobre todo por sus novelas sobre la Revolución Mexicana."
            ]
          },
          {
            "en": "early life",
            "es": "primeros años",
            "imagen": "Foto antigua de un niño en un pueblo",
            "ejemplo": [
              "In his early life, he worked on his father's farm.",
              "En sus primeros años trabajó en el rancho de su padre."
            ]
          },
          {
            "en": "rose to fame",
            "es": "se hizo famoso",
            "imagen": "Cantante en un escenario frente a miles",
            "ejemplo": [
              "She rose to fame in the 1990s.",
              "Se hizo famosa en los noventa."
            ]
          },
          {
            "en": "a breakthrough",
            "es": "un gran avance / un éxito decisivo",
            "imagen": "Científica celebrando un descubrimiento",
            "ejemplo": [
              "Her first movie was a breakthrough.",
              "Su primera película fue su gran éxito."
            ]
          },
          {
            "en": "achievements",
            "es": "logros",
            "imagen": "Vitrina con trofeos y medallas",
            "ejemplo": [
              "His achievements include two Olympic medals.",
              "Entre sus logros hay dos medallas olímpicas."
            ]
          },
          {
            "en": "passed away",
            "es": "falleció",
            "imagen": "Ramo de flores junto a un retrato",
            "ejemplo": [
              "The famous actor passed away last year.",
              "El famoso actor falleció el año pasado."
            ]
          },
          {
            "en": "legacy",
            "es": "legado",
            "imagen": "Biblioteca con el nombre de un escritor, sin texto legible",
            "ejemplo": [
              "Her legacy lives on in her books.",
              "Su legado sigue vivo en sus libros."
            ]
          },
          {
            "en": "was raised by",
            "es": "fue criado por",
            "imagen": "Abuela con su nieto pequeño en una cocina",
            "ejemplo": [
              "He was raised by his grandparents.",
              "Fue criado por sus abuelos."
            ]
          }
        ]
      },
      {
        "id": "descripciones",
        "titulo": "Descripciones detalladas",
        "icono": "🔎",
        "patron": [
          "…, which…",
          "…, who…",
          "…, where…"
        ],
        "palabras": [
          {
            "en": "which overlooks the sea",
            "es": "que tiene vista al mar",
            "imagen": "Casa blanca sobre un acantilado frente al mar",
            "ejemplo": [
              "We stayed in a small house, which overlooks the sea.",
              "Nos quedamos en una casita con vista al mar."
            ]
          },
          {
            "en": "whose owner is Italian",
            "es": "cuyo dueño es italiano",
            "imagen": "Restaurante pequeño con un chef en la puerta",
            "ejemplo": [
              "We had lunch at a restaurant whose owner is Italian.",
              "Comimos en un restaurante cuyo dueño es italiano."
            ]
          },
          {
            "en": "where the best tacos are",
            "es": "donde están los mejores tacos",
            "imagen": "Taquería llena de gente de noche",
            "ejemplo": [
              "Let's go to the market, where the best tacos are.",
              "Vamos al mercado, donde están los mejores tacos."
            ]
          },
          {
            "en": "which dates back to",
            "es": "que data de",
            "imagen": "Catedral colonial de piedra",
            "ejemplo": [
              "The cathedral, which dates back to the 16th century, is beautiful.",
              "La catedral, que data del siglo dieciséis, es preciosa."
            ]
          },
          {
            "en": "which was built by",
            "es": "que fue construido por",
            "imagen": "Acueducto antiguo de piedra",
            "ejemplo": [
              "The aqueduct, which was built by the Spanish, is still standing.",
              "El acueducto, que fue construido por los españoles, sigue en pie."
            ]
          },
          {
            "en": "who everybody loves",
            "es": "a quien todos quieren",
            "imagen": "Maestro rodeado de alumnos felices",
            "ejemplo": [
              "Mr. Ruiz, who everybody loves, is retiring.",
              "El maestro Ruiz, a quien todos quieren, se va a jubilar."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Frida Kahlo, who was born in Coyoacán, painted many self-portraits.",
        "es": "Frida Kahlo, que nació en Coyoacán, pintó muchos autorretratos."
      },
      {
        "en": "My car, which I bought in 2015, still works perfectly.",
        "es": "Mi carro, que compré en 2015, todavía funciona perfecto."
      },
      {
        "en": "He passed all his exams, which surprised everybody.",
        "es": "Aprobó todos sus exámenes, lo cual sorprendió a todos."
      },
      {
        "en": "The company I work for is opening an office in Lima.",
        "es": "La empresa para la que trabajo va a abrir una oficina en Lima."
      },
      {
        "en": "I have two brothers, both of whom live abroad.",
        "es": "Tengo dos hermanos y los dos viven en el extranjero."
      },
      {
        "en": "She has hundreds of books, most of which are in English.",
        "es": "Tiene cientos de libros, la mayoría en inglés."
      },
      {
        "en": "My grandmother, who is ninety, still cooks every day.",
        "es": "Mi abuela, que tiene noventa años, todavía cocina todos los días."
      },
      {
        "en": "The concert was canceled, which was a shame.",
        "es": "El concierto se canceló, lo cual fue una lástima."
      },
      {
        "en": "He is best known for his novels about the Mexican Revolution.",
        "es": "Es conocido sobre todo por sus novelas sobre la Revolución Mexicana."
      },
      {
        "en": "The cathedral, which dates back to the 16th century, is beautiful.",
        "es": "La catedral, que data del siglo dieciséis, es preciosa."
      }
    ],
    "frases": [
      {
        "en": "Octavio Paz, who won the Nobel Prize in Literature in 1990, was born in Mexico City in 1914.",
        "es": "Octavio Paz, que ganó el Premio Nobel de Literatura en 1990, nació en la Ciudad de México en 1914.",
        "imagen": "Biblioteca antigua con libros de poesía"
      },
      {
        "en": "We visited Guanajuato, where we walked through the famous tunnels and narrow streets.",
        "es": "Visitamos Guanajuato, donde caminamos por los famosos túneles y callejones.",
        "imagen": "Callejón colorido de Guanajuato con turistas"
      },
      {
        "en": "My best friend, whose father is a pilot, has traveled to more than forty countries.",
        "es": "Mi mejor amigo, cuyo papá es piloto, ha viajado a más de cuarenta países.",
        "imagen": "Joven con un mapa del mundo lleno de pines"
      },
      {
        "en": "The project, which took three years to finish, was finally presented last week.",
        "es": "El proyecto, que tardó tres años en terminarse, por fin se presentó la semana pasada.",
        "imagen": "Equipo presentando un proyecto en un auditorio"
      },
      {
        "en": "She invited thirty people to her party, most of whom she had never met before.",
        "es": "Invitó a treinta personas a su fiesta, a la mayoría de las cuales nunca había visto.",
        "imagen": "Fiesta con muchos invitados desconocidos entre sí"
      },
      {
        "en": "I finally found the book I had been looking for, which made me very happy.",
        "es": "Por fin encontré el libro que había estado buscando, lo cual me hizo muy feliz.",
        "imagen": "Persona feliz sosteniendo un libro en una librería de viejo"
      },
      {
        "en": "The engineer to whom we spoke explained the problem very clearly.",
        "es": "El ingeniero con quien hablamos explicó el problema muy claramente.",
        "imagen": "Ingeniero mostrando planos a unos clientes"
      },
      {
        "en": "In 1985, when the earthquake hit Mexico City, my parents had just moved there.",
        "es": "En 1985, cuando el sismo golpeó la Ciudad de México, mis papás acababan de mudarse ahí.",
        "imagen": "Foto antigua de edificios dañados en una ciudad"
      },
      {
        "en": "The band, whose first album was a huge success, is touring Latin America this year.",
        "es": "La banda, cuyo primer disco fue un éxito enorme, está de gira por Latinoamérica este año.",
        "imagen": "Banda tocando en un estadio lleno"
      },
      {
        "en": "The village where my grandfather was born has only two hundred inhabitants.",
        "es": "El pueblo donde nació mi abuelo tiene solo doscientos habitantes.",
        "imagen": "Pueblo pequeño en la sierra con casas de adobe"
      }
    ],
    "listening": [
      {
        "audio": "My uncle, who lives in Chicago, is coming to visit us in December.",
        "pregunta": "¿Dónde vive el tío?",
        "opciones": [
          "En Chicago",
          "En diciembre",
          "En México",
          "En Nueva York"
        ]
      },
      {
        "audio": "We had dinner at a restaurant whose chef had worked in Paris.",
        "pregunta": "¿Dónde había trabajado el chef?",
        "opciones": [
          "En París",
          "En Roma",
          "En Madrid",
          "En Nueva York"
        ]
      },
      {
        "audio": "It rained all weekend, which meant we couldn't go to the beach.",
        "pregunta": "¿Qué no pudieron hacer?",
        "opciones": [
          "Ir a la playa",
          "Salir a cenar",
          "Ir al cine",
          "Visitar a la familia"
        ]
      },
      {
        "audio": "I have three cousins, all of whom are doctors.",
        "pregunta": "¿A qué se dedican los primos?",
        "opciones": [
          "Todos son doctores",
          "Uno es doctor",
          "Son maestros",
          "Son ingenieros"
        ]
      },
      {
        "audio": "The town I grew up in is famous for its pottery.",
        "pregunta": "¿Por qué es famoso el pueblo?",
        "opciones": [
          "Por su alfarería",
          "Por su comida",
          "Por sus playas",
          "Por su música"
        ]
      }
    ],
    "lectura": {
      "titulo": "A remarkable life",
      "texto": "Rodolfo Neri Vela, who was born in Chilpancingo, Guerrero, in 1952, was the first Mexican to travel to space. As a child, he loved science and spent hours reading about planets and stars, which was unusual in his small town. He studied mechanical and electrical engineering at the National University, where he graduated with honors. Later he continued his studies in England, where he earned a doctorate. In 1985, when he was thirty-three, he was chosen from hundreds of candidates to join a NASA mission. On board the space shuttle Atlantis, he carried out several experiments, some of which were designed by Mexican universities. He also became famous for taking tortillas into space, which made headlines around the world. After his return, he dedicated his life to teaching and writing books about science, most of which are written for young people. His story, which still inspires many students, shows that big dreams can start in small places.",
      "preguntas": [
        {
          "pregunta": "¿Dónde nació Neri Vela?",
          "opciones": [
            "En Chilpancingo, Guerrero",
            "En la Ciudad de México",
            "En Inglaterra",
            "En Monterrey"
          ]
        },
        {
          "pregunta": "¿Dónde obtuvo su doctorado?",
          "opciones": [
            "En Inglaterra",
            "En Estados Unidos",
            "En México",
            "En Francia"
          ]
        },
        {
          "pregunta": "¿Qué llevó al espacio que salió en las noticias?",
          "opciones": [
            "Tortillas",
            "Una bandera",
            "Una guitarra",
            "Chiles"
          ]
        },
        {
          "pregunta": "¿A qué se dedicó después?",
          "opciones": [
            "A enseñar y escribir libros de ciencia",
            "A ser político",
            "A otra misión espacial",
            "A la agricultura"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con who, which, whose, where o when.",
        "pregunta": "My sister, ___ lives in Spain, is a nurse.",
        "respuestas": [
          "who"
        ]
      },
      {
        "instruccion": "Completa con who, which, whose, where o when.",
        "pregunta": "This phone, ___ I bought last year, is already broken.",
        "respuestas": [
          "which"
        ]
      },
      {
        "instruccion": "Completa con who, which, whose, where o when.",
        "pregunta": "We visited Oaxaca, ___ we ate amazing mole.",
        "respuestas": [
          "where"
        ]
      },
      {
        "instruccion": "Completa con who, which, whose, where o when.",
        "pregunta": "The singer, ___ songs I love, is giving a concert here.",
        "respuestas": [
          "whose"
        ]
      },
      {
        "instruccion": "Completa con which (= lo cual).",
        "pregunta": "He forgot my birthday, ___ made me sad.",
        "respuestas": [
          "which"
        ]
      },
      {
        "instruccion": "Completa con whom o which.",
        "pregunta": "I have two sisters, both of ___ are teachers.",
        "respuestas": [
          "whom"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "la empresa para la que trabajo (informal)",
        "respuestas": [
          "the company I work for",
          "the company that I work for"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "lo cual fue una lástima",
        "respuestas": [
          "which was a shame",
          "which was a pity"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "es conocido sobre todo por",
        "respuestas": [
          "is best known for"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "My mother, that is a doctor, works at night.",
        "respuestas": [
          "My mother, who is a doctor, works at night"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "Mexico City, ___ is one of the biggest cities in the world, has many museums.",
        "opciones": [
          "which",
          "that",
          "who",
          "where"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "My father, ___ is retired, loves fishing.",
        "opciones": [
          "who",
          "that",
          "which",
          "whose"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She failed the test, ___ was a surprise.",
        "opciones": [
          "which",
          "that",
          "what",
          "who"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The man to ___ I gave the money was not the owner.",
        "opciones": [
          "whom",
          "who",
          "that",
          "which"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "He has many friends, most of ___ are musicians.",
        "opciones": [
          "whom",
          "who",
          "them",
          "which"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«My brother who lives in Canada» (sin comas) indica que:",
        "opciones": [
          "Tengo varios hermanos",
          "Solo tengo un hermano",
          "No tengo hermanos",
          "Mi hermano no vive en Canadá"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The museum, which opened in 1964, receives thousands of visitors every day.",
        "pregunta": "¿Cuándo abrió el museo?",
        "opciones": [
          "En 1964",
          "En 1946",
          "En 1994",
          "En 1974"
        ]
      },
      {
        "tipo": "listening",
        "audio": "My grandparents, both of whom are over eighty, still dance every Saturday.",
        "pregunta": "¿Qué hacen los abuelos los sábados?",
        "opciones": [
          "Bailan",
          "Cocinan",
          "Pasean",
          "Juegan cartas"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: donde pasó su infancia",
        "respuestas": [
          "where he spent his childhood",
          "where she spent her childhood"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: el pueblo donde crecí",
        "respuestas": [
          "the town where I grew up",
          "the town I grew up in",
          "the village where I grew up",
          "the village I grew up in"
        ]
      }
    ]
  },
  {
    "id": "b2-15",
    "num": 15,
    "titulo": "Modales de deducción en pasado (must have, can't have, might have)",
    "contexto": "Resolver misterios",
    "explicacion": {
      "es": [
        "Para hacer **deducciones sobre el pasado** se usa **modal** + ***have*** + **participio**. ***Must have*** = **seguro que sí pasó**: *The streets are wet. It **must have rained** last night.* (Debió de llover anoche.)",
        "***Can't have / couldn't have*** = **seguro que no pasó**, es imposible: *She **can't have seen** me. She wasn't wearing her glasses.* (No pudo haberme visto.)",
        "***Might have / may have / could have*** = **tal vez pasó**, es posible: *He's late. He **might have missed** the bus.* (Tal vez perdió el camión.)",
        "Para algo que **estaba pasando**: modal + ***have been*** + *-ing*: *She didn't answer. She **must have been sleeping**.* (Debía de estar dormida.)"
      ],
      "tabla": {
        "columnas": [
          "Seguridad",
          "Forma",
          "Ejemplo"
        ],
        "filas": [
          [
            "Casi seguro que sí",
            "must have + participio",
            "He must have forgotten."
          ],
          [
            "Posible",
            "might / may / could have + participio",
            "They might have gotten lost."
          ],
          [
            "Casi seguro que no",
            "can't / couldn't have + participio",
            "She can't have finished already."
          ],
          [
            "Acción en progreso",
            "must have been + -ing",
            "He must have been driving."
          ]
        ]
      },
      "ojo": [
        "Lo contrario de *must have* es ***can't have***, **no** *mustn't have*: *He **can't have** stolen it* ✅.",
        "Al hablar, *have* suena débil: *must have* = «**must've**», *might have* = «**might've**», *could have* = «**could've**». ¡No se escribe *must of*!",
        "***Could have*** también significa **habría podido** (crítica u oportunidad): *You **could have** called me!* (¡Me hubieras llamado!) El contexto lo aclara.",
        "Para preguntar: ***What could have happened? Where might he have gone?***",
        "Vocabulario de misterio: ***clue, evidence, suspect, witness, alibi, fingerprints, motive***."
      ],
      "en": [
        "Must have plus participle means I'm sure it happened: It must have rained last night.",
        "Can't have means I'm sure it didn't happen: She can't have seen me.",
        "Might have, may have and could have mean it's possible: He might have missed the bus.",
        "For actions in progress: She must have been sleeping."
      ]
    },
    "vocabulario": [
      {
        "en": "It must have rained.",
        "es": "debió de llover",
        "imagen": "Calle mojada con charcos en la mañana",
        "ejemplo": [
          "The streets are wet. It must have rained last night.",
          "Las calles están mojadas. Debió de llover anoche."
        ]
      },
      {
        "en": "She can't have seen me.",
        "es": "no pudo haberme visto",
        "imagen": "Mujer sin lentes mirando a lo lejos",
        "ejemplo": [
          "She can't have seen me. She wasn't wearing her glasses.",
          "No pudo haberme visto. No traía lentes."
        ]
      },
      {
        "en": "He might have missed the bus.",
        "es": "tal vez perdió el camión",
        "imagen": "Parada de camión vacía con un autobús alejándose",
        "ejemplo": [
          "He's late. He might have missed the bus.",
          "Llega tarde. Tal vez perdió el camión."
        ]
      },
      {
        "en": "They must have left.",
        "es": "ya se debieron de ir",
        "imagen": "Casa con las luces apagadas y sin carro",
        "ejemplo": [
          "The lights are off. They must have left.",
          "Las luces están apagadas. Ya se debieron de ir."
        ]
      },
      {
        "en": "Someone must have taken it.",
        "es": "alguien se lo debió llevar",
        "imagen": "Escritorio vacío donde había una laptop",
        "ejemplo": [
          "My laptop isn't here. Someone must have taken it.",
          "Mi laptop no está. Alguien se la debió llevar."
        ]
      },
      {
        "en": "She must have been sleeping.",
        "es": "debía de estar dormida",
        "imagen": "Persona dormida con el celular vibrando",
        "ejemplo": [
          "She didn't answer. She must have been sleeping.",
          "No contestó. Debía de estar dormida."
        ]
      },
      {
        "en": "He could have gotten lost.",
        "es": "pudo haberse perdido",
        "imagen": "Persona mirando un mapa en un cruce de caminos",
        "ejemplo": [
          "He doesn't know the city. He could have gotten lost.",
          "No conoce la ciudad. Pudo haberse perdido."
        ]
      },
      {
        "en": "It can't have been him.",
        "es": "no pudo haber sido él",
        "imagen": "Hombre mostrando un boleto de avión como coartada",
        "ejemplo": [
          "It can't have been him. He was in Cancun.",
          "No pudo haber sido él. Estaba en Cancún."
        ]
      },
      {
        "en": "You must have been tired.",
        "es": "debiste de estar cansado",
        "imagen": "Persona dormida en el sofá con la ropa del trabajo",
        "ejemplo": [
          "You slept twelve hours! You must have been tired.",
          "¡Dormiste doce horas! Debiste de estar cansado."
        ]
      },
      {
        "en": "They may have forgotten.",
        "es": "tal vez se les olvidó",
        "imagen": "Calendario con una cita marcada y una silla vacía",
        "ejemplo": [
          "They may have forgotten about the meeting.",
          "Tal vez se les olvidó la junta."
        ]
      },
      {
        "en": "What could have happened?",
        "es": "¿qué pudo haber pasado?",
        "imagen": "Personas preocupadas frente a una puerta forzada",
        "ejemplo": [
          "The door is open. What could have happened?",
          "La puerta está abierta. ¿Qué pudo haber pasado?"
        ]
      },
      {
        "en": "a clue",
        "es": "una pista",
        "imagen": "Lupa sobre una huella digital",
        "ejemplo": [
          "The detective found a clue under the window.",
          "El detective encontró una pista bajo la ventana."
        ]
      },
      {
        "en": "fingerprints",
        "es": "huellas digitales",
        "imagen": "Huellas digitales sobre un vaso de vidrio",
        "ejemplo": [
          "The police found fingerprints on the glass.",
          "La policía encontró huellas digitales en el vaso."
        ]
      },
      {
        "en": "a motive",
        "es": "un móvil / un motivo",
        "imagen": "Detective pensativo frente a un tablero de pistas",
        "ejemplo": [
          "Nobody had a motive to steal the painting.",
          "Nadie tenía motivo para robar el cuadro."
        ]
      },
      {
        "en": "an alibi",
        "es": "una coartada",
        "imagen": "Hombre mostrando un ticket de cine con fecha",
        "ejemplo": [
          "He has a perfect alibi.",
          "Tiene una coartada perfecta."
        ]
      },
      {
        "en": "She must have been joking.",
        "es": "debía de estar bromeando",
        "imagen": "Amiga riéndose después de decir algo increíble",
        "ejemplo": [
          "She must have been joking when she said she'd quit.",
          "Debía de estar bromeando cuando dijo que renunciaría."
        ]
      }
    ],
    "grupos": [
      {
        "id": "misterio",
        "titulo": "La escena del crimen",
        "icono": "🕵️",
        "patron": [
          "The thief must have…",
          "He can't have…",
          "Someone might have…"
        ],
        "palabras": [
          {
            "en": "a suspect",
            "es": "un sospechoso",
            "imagen": "Silueta de hombre en un interrogatorio",
            "ejemplo": [
              "The police are questioning three suspects.",
              "La policía está interrogando a tres sospechosos."
            ]
          },
          {
            "en": "a witness",
            "es": "un testigo",
            "imagen": "Testigo hablando con una detective",
            "ejemplo": [
              "A witness saw a car leaving at midnight.",
              "Un testigo vio un carro salir a medianoche."
            ]
          },
          {
            "en": "evidence",
            "es": "pruebas",
            "imagen": "Bolsas de evidencia etiquetadas en una mesa",
            "ejemplo": [
              "There isn't enough evidence to arrest him.",
              "No hay suficientes pruebas para arrestarlo."
            ]
          },
          {
            "en": "broke in",
            "es": "se metió / entró a la fuerza",
            "imagen": "Ventana forzada con vidrios rotos",
            "ejemplo": [
              "The thief must have broken in through the window.",
              "El ladrón debió de meterse por la ventana."
            ]
          },
          {
            "en": "footprints",
            "es": "huellas de pisadas",
            "imagen": "Huellas de botas en el lodo",
            "ejemplo": [
              "The footprints must have been made by a man.",
              "Las huellas debieron de ser de un hombre."
            ]
          },
          {
            "en": "a detective",
            "es": "un detective",
            "imagen": "Detective con gabardina y libreta",
            "ejemplo": [
              "The detective solved the case in two days.",
              "El detective resolvió el caso en dos días."
            ]
          }
        ]
      },
      {
        "id": "explicaciones",
        "titulo": "Buscar explicaciones",
        "icono": "🤔",
        "patron": [
          "Maybe she…",
          "It's possible that…",
          "There must be…"
        ],
        "palabras": [
          {
            "en": "there must be an explanation",
            "es": "debe de haber una explicación",
            "imagen": "Persona pensativa frente a algo extraño",
            "ejemplo": [
              "There must be an explanation for this.",
              "Debe de haber una explicación para esto."
            ]
          },
          {
            "en": "it's possible that",
            "es": "es posible que",
            "imagen": "Persona levantando los hombros con duda",
            "ejemplo": [
              "It's possible that he didn't get the message.",
              "Es posible que no le haya llegado el mensaje."
            ]
          },
          {
            "en": "I bet",
            "es": "apuesto a que",
            "imagen": "Amigo sonriendo seguro de algo",
            "ejemplo": [
              "I bet she forgot.",
              "Apuesto a que se le olvidó."
            ]
          },
          {
            "en": "no wonder",
            "es": "con razón",
            "imagen": "Persona entendiendo algo de repente",
            "ejemplo": [
              "No wonder you're tired. You worked all night!",
              "Con razón estás cansado. ¡Trabajaste toda la noche!"
            ]
          },
          {
            "en": "it doesn't make sense",
            "es": "no tiene sentido",
            "imagen": "Persona confundida mirando papeles",
            "ejemplo": [
              "It doesn't make sense. Why would he lie?",
              "No tiene sentido. ¿Por qué mentiría?"
            ]
          },
          {
            "en": "I have no idea",
            "es": "no tengo idea",
            "imagen": "Persona encogiéndose de hombros",
            "ejemplo": [
              "I have no idea where she could have gone.",
              "No tengo idea de a dónde pudo haber ido."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "The streets are wet. It must have rained last night.",
        "es": "Las calles están mojadas. Debió de llover anoche."
      },
      {
        "en": "She can't have seen me. She wasn't wearing her glasses.",
        "es": "No pudo haberme visto. No traía lentes."
      },
      {
        "en": "He's late. He might have missed the bus.",
        "es": "Llega tarde. Tal vez perdió el camión."
      },
      {
        "en": "My laptop isn't here. Someone must have taken it.",
        "es": "Mi laptop no está. Alguien se la debió llevar."
      },
      {
        "en": "She didn't answer. She must have been sleeping.",
        "es": "No contestó. Debía de estar dormida."
      },
      {
        "en": "It can't have been him. He was in Cancun.",
        "es": "No pudo haber sido él. Estaba en Cancún."
      },
      {
        "en": "The door is open. What could have happened?",
        "es": "La puerta está abierta. ¿Qué pudo haber pasado?"
      },
      {
        "en": "The thief must have broken in through the window.",
        "es": "El ladrón debió de meterse por la ventana."
      },
      {
        "en": "No wonder you're tired. You worked all night!",
        "es": "Con razón estás cansado. ¡Trabajaste toda la noche!"
      },
      {
        "en": "There must be an explanation for this.",
        "es": "Debe de haber una explicación para esto."
      }
    ],
    "frases": [
      {
        "en": "The window was broken from the outside, so the thief must have come in through the garden.",
        "es": "La ventana estaba rota desde afuera, así que el ladrón debió de entrar por el jardín.",
        "imagen": "Ventana rota con vidrios dentro de la casa y el jardín al fondo"
      },
      {
        "en": "She can't have finished the whole report already. She only started an hour ago!",
        "es": "No puede haber terminado todo el reporte. ¡Empezó hace apenas una hora!",
        "imagen": "Persona entregando un reporte con cara de orgullo"
      },
      {
        "en": "My keys aren't in my bag. I might have left them in the taxi, or they could have fallen out at the restaurant.",
        "es": "Mis llaves no están en mi bolsa. Tal vez las dejé en el taxi o se me pudieron caer en el restaurante.",
        "imagen": "Persona vaciando su bolsa en una mesa buscando llaves"
      },
      {
        "en": "The dinosaurs must have disappeared because of a huge asteroid that hit the earth.",
        "es": "Los dinosaurios debieron de desaparecer por un asteroide enorme que golpeó la Tierra.",
        "imagen": "Ilustración de un asteroide cayendo sobre la Tierra prehistórica"
      },
      {
        "en": "He can't have been driving the car, because he doesn't even have a license.",
        "es": "No pudo haber estado manejando el carro, porque ni siquiera tiene licencia.",
        "imagen": "Joven sin licencia mirando un carro estacionado"
      },
      {
        "en": "The ancient Mayans must have had excellent knowledge of mathematics to build these pyramids.",
        "es": "Los antiguos mayas debieron de tener un conocimiento excelente de matemáticas para construir estas pirámides.",
        "imagen": "Pirámide maya con escalinatas bajo el sol"
      },
      {
        "en": "You look happy! You must have received some good news.",
        "es": "¡Te ves feliz! Debiste de recibir buenas noticias.",
        "imagen": "Persona radiante mirando su celular"
      },
      {
        "en": "The cake has disappeared. The dog might have eaten it, but it could also have been my brother.",
        "es": "El pastel desapareció. Tal vez se lo comió el perro, aunque también pudo haber sido mi hermano.",
        "imagen": "Perro con migajas en el hocico junto a un plato vacío"
      },
      {
        "en": "They must have been arguing, because they weren't speaking to each other at dinner.",
        "es": "Debieron de estar discutiendo, porque no se hablaban en la cena.",
        "imagen": "Pareja seria en una mesa sin mirarse"
      },
      {
        "en": "There's no answer at the office. Everybody must have gone home already.",
        "es": "Nadie contesta en la oficina. Todos ya se debieron de ir a casa.",
        "imagen": "Oficina vacía con las luces apagadas"
      }
    ],
    "listening": [
      {
        "audio": "The grass is wet. It must have rained during the night.",
        "pregunta": "¿Qué deducen?",
        "opciones": [
          "Que llovió en la noche",
          "Que regaron el jardín",
          "Que nevó",
          "Que hay una fuga"
        ]
      },
      {
        "audio": "He can't have stolen the money. He was with me all evening.",
        "pregunta": "¿Por qué no pudo robar el dinero?",
        "opciones": [
          "Estuvo con la persona toda la tarde",
          "No tenía llaves",
          "Estaba de viaje",
          "Estaba dormido"
        ]
      },
      {
        "audio": "She's not answering her phone. She might have left it at home.",
        "pregunta": "¿Qué creen que pasó?",
        "opciones": [
          "Tal vez dejó el celular en casa",
          "Se le rompió",
          "Está enojada",
          "Se quedó dormida"
        ]
      },
      {
        "audio": "The museum guard must have fallen asleep, because nobody saw the thieves.",
        "pregunta": "¿Qué creen que hizo el guardia?",
        "opciones": [
          "Se quedó dormido",
          "Ayudó a los ladrones",
          "Salió a comer",
          "Llamó a la policía"
        ]
      },
      {
        "audio": "You got a hundred on the exam? You must have studied a lot!",
        "pregunta": "¿Qué deduce?",
        "opciones": [
          "Que estudió mucho",
          "Que copió",
          "Que el examen era fácil",
          "Que tuvo suerte"
        ]
      }
    ],
    "lectura": {
      "titulo": "The mystery of the empty office",
      "texto": "On Monday morning, the employees of a small design company in Puebla arrived and found something strange: all the computers were on, the coffee machine was still warm, and there were open sandwiches on the kitchen table. But nobody was there. The security guard said that nobody had entered the building after Friday. It can't have been the cleaning team, said the manager, they only come on Wednesdays. Someone suggested that the night guard might have been playing a joke on them. Others thought a group of thieves must have broken in, but nothing had been stolen. Then the youngest designer noticed a small detail: the sandwiches had the logo of the bakery next door. The mystery was solved an hour later. The owner of the company, who had been working on a secret project all weekend with two colleagues, had forgotten to tell anyone. They must have been very tired, because they left without turning anything off.",
      "preguntas": [
        {
          "pregunta": "¿Qué encontraron los empleados el lunes?",
          "opciones": [
            "Computadoras prendidas, café caliente y sándwiches abiertos",
            "Ventanas rotas",
            "Todo robado",
            "La oficina cerrada"
          ]
        },
        {
          "pregunta": "¿Por qué no pudo ser el equipo de limpieza?",
          "opciones": [
            "Solo van los miércoles",
            "Estaban de vacaciones",
            "No tienen llaves",
            "Llegaron tarde"
          ]
        },
        {
          "pregunta": "¿Qué pista notó la diseñadora más joven?",
          "opciones": [
            "El logo de la panadería de al lado en los sándwiches",
            "Unas huellas",
            "Una nota",
            "Una cámara"
          ]
        },
        {
          "pregunta": "¿Quién había estado en la oficina?",
          "opciones": [
            "El dueño con dos colegas",
            "Unos ladrones",
            "El guardia nocturno",
            "Un cliente"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con must have, can't have o might have.",
        "pregunta": "The car is gone. He ___ left already. (seguro)",
        "respuestas": [
          "must have",
          "must've"
        ]
      },
      {
        "instruccion": "Completa con must have, can't have o might have.",
        "pregunta": "She ___ written this. She doesn't speak German. (imposible)",
        "respuestas": [
          "can't have",
          "couldn't have",
          "cannot have"
        ]
      },
      {
        "instruccion": "Completa con must have, can't have o might have.",
        "pregunta": "I'm not sure. They ___ gone to the beach. (posible)",
        "respuestas": [
          "might have",
          "may have",
          "could have",
          "might've"
        ]
      },
      {
        "instruccion": "Completa con el participio.",
        "pregunta": "He must have ___ (forget) about the meeting.",
        "respuestas": [
          "forgotten"
        ]
      },
      {
        "instruccion": "Completa con been + -ing.",
        "pregunta": "She didn't hear the phone. She must have ___ (sleep).",
        "respuestas": [
          "been sleeping"
        ]
      },
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "No ___ you're tired! (Con razón)",
        "respuestas": [
          "wonder"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Debió de llover.",
        "respuestas": [
          "It must have rained",
          "It must've rained"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "No pudo haber sido él.",
        "respuestas": [
          "It can't have been him",
          "It couldn't have been him",
          "It cannot have been him"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "una pista",
        "respuestas": [
          "a clue"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "He must of forgotten my number.",
        "respuestas": [
          "He must have forgotten my number",
          "He must've forgotten my number"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "The floor is wet. Somebody ___ water.",
        "opciones": [
          "must have spilled",
          "can't have spilled",
          "must spill",
          "might spills"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She ___ the email. She hasn't opened her laptop all day.",
        "opciones": [
          "can't have read",
          "must have read",
          "might have read",
          "must read"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I'm not sure where he is. He ___ home.",
        "opciones": [
          "might have gone",
          "must go",
          "can't go",
          "mustn't have gone"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "They didn't hear the doorbell. They must ___ music.",
        "opciones": [
          "have been listening to",
          "be listened",
          "have listen",
          "listening"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Lo contrario de «He must have known» es:",
        "opciones": [
          "He can't have known.",
          "He mustn't have known.",
          "He must not know.",
          "He might known."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«No wonder» significa:",
        "opciones": [
          "Con razón",
          "No sé",
          "Sin duda",
          "No importa"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The dog is wet and muddy. He must have been playing in the garden.",
        "pregunta": "¿Qué deducen del perro?",
        "opciones": [
          "Estuvo jugando en el jardín",
          "Se bañó",
          "Se escapó",
          "Está enfermo"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Ana can't have gone to work today. Her car is still in the garage.",
        "pregunta": "¿Por qué creen que Ana no fue a trabajar?",
        "opciones": [
          "Su carro sigue en la cochera",
          "Está enferma",
          "Es día festivo",
          "Lo dijo ella"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Tal vez se perdió.",
        "respuestas": [
          "He might have gotten lost",
          "She might have gotten lost",
          "He may have gotten lost",
          "She may have gotten lost",
          "He might have got lost",
          "She might have got lost"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Debiste de estar cansado.",
        "respuestas": [
          "You must have been tired",
          "You must've been tired"
        ]
      }
    ]
  },
  {
    "id": "b2-16",
    "num": 16,
    "titulo": "Should have / could have / would have (crítica y arrepentimiento)",
    "contexto": "Errores y lecciones aprendidas",
    "explicacion": {
      "es": [
        "***Should have*** + participio expresa **arrepentimiento** o **crítica**: algo era lo correcto, pero **no se hizo**: *I **should have studied** more.* (Debí haber estudiado más.) *You **shouldn't have said** that.* (No debiste decir eso.)",
        "***Could have*** + participio expresa una **posibilidad que no se aprovechó**: *We **could have won**, but we made too many mistakes.* (Pudimos haber ganado.) También una **crítica**: *You **could have told** me!* (¡Me hubieras dicho!)",
        "***Would have*** + participio expresa lo que **habría pasado** o **habríamos hecho** en otra situación (como en el tercer condicional): *I **would have helped** you, but I didn't know.* (Te habría ayudado, pero no sabía.)",
        "Las formas negativas son muy comunes: ***shouldn't have*** (no debí), ***couldn't have*** (no habría podido / imposible), ***wouldn't have*** (no habría). Al hablar suenan ***should've, could've, would've***."
      ],
      "tabla": {
        "columnas": [
          "Forma",
          "Uso",
          "Ejemplo"
        ],
        "filas": [
          [
            "should have",
            "arrepentimiento / crítica",
            "I should have called her."
          ],
          [
            "shouldn't have",
            "no era correcto",
            "You shouldn't have eaten so much."
          ],
          [
            "could have",
            "posibilidad perdida / crítica",
            "You could have hurt yourself!"
          ],
          [
            "would have",
            "resultado imaginario",
            "I would have come, but I was sick."
          ],
          [
            "wouldn't have",
            "no habría pasado",
            "I wouldn't have bought it if I'd known."
          ]
        ]
      },
      "ojo": [
        "No se escribe *should of* ni *could of*: se dice «should've», pero se escribe ***should have***.",
        "*You **could have** told me* (crítica: ¡me hubieras dicho!) ≠ *You **should have** told me* (era tu obligación decirme).",
        "*Couldn't have* + comparativo es un elogio: *It **couldn't have been** better!* (¡No pudo haber salido mejor!)",
        "Para aprender de errores: ***lesson learned, next time I'll…, in hindsight*** (en retrospectiva).",
        "***Needn't have*** = **no hacía falta, pero lo hice**: *You **needn't have brought** a present.* (No tenías que traer regalo.)"
      ],
      "en": [
        "Should have expresses regret or criticism: I should have studied more. You shouldn't have said that.",
        "Could have expresses a missed possibility: We could have won. You could have told me!",
        "Would have expresses an imaginary result: I would have helped you, but I didn't know.",
        "It couldn't have been better!"
      ]
    },
    "vocabulario": [
      {
        "en": "I should have studied more.",
        "es": "debí haber estudiado más",
        "imagen": "Estudiante mirando un examen reprobado",
        "ejemplo": [
          "I failed. I should have studied more.",
          "Reprobé. Debí haber estudiado más."
        ]
      },
      {
        "en": "You shouldn't have said that.",
        "es": "no debiste decir eso",
        "imagen": "Persona apenada frente a su amiga ofendida",
        "ejemplo": [
          "You shouldn't have said that to your mother.",
          "No debiste decirle eso a tu mamá."
        ]
      },
      {
        "en": "We could have won.",
        "es": "pudimos haber ganado",
        "imagen": "Equipo triste después de perder por un gol",
        "ejemplo": [
          "We could have won, but we missed a penalty.",
          "Pudimos haber ganado, pero fallamos un penal."
        ]
      },
      {
        "en": "You could have told me!",
        "es": "¡me hubieras dicho!",
        "imagen": "Persona molesta mostrando su celular",
        "ejemplo": [
          "You were in town? You could have told me!",
          "¿Estabas en la ciudad? ¡Me hubieras dicho!"
        ]
      },
      {
        "en": "I would have helped you.",
        "es": "te habría ayudado",
        "imagen": "Amigo ofreciendo ayuda demasiado tarde",
        "ejemplo": [
          "I would have helped you, but I didn't know.",
          "Te habría ayudado, pero no sabía."
        ]
      },
      {
        "en": "I wouldn't have bought it.",
        "es": "no lo habría comprado",
        "imagen": "Persona arrepentida con un aparato caro",
        "ejemplo": [
          "I wouldn't have bought it if I'd known the price.",
          "No lo habría comprado si hubiera sabido el precio."
        ]
      },
      {
        "en": "You could have hurt yourself!",
        "es": "¡te pudiste haber lastimado!",
        "imagen": "Niño trepando una barda alta y su mamá asustada",
        "ejemplo": [
          "Get down! You could have hurt yourself!",
          "¡Bájate! ¡Te pudiste haber lastimado!"
        ]
      },
      {
        "en": "It couldn't have been better.",
        "es": "no pudo haber salido mejor",
        "imagen": "Pareja feliz celebrando su boda",
        "ejemplo": [
          "The wedding was perfect. It couldn't have been better.",
          "La boda fue perfecta. No pudo haber salido mejor."
        ]
      },
      {
        "en": "I shouldn't have eaten so much.",
        "es": "no debí comer tanto",
        "imagen": "Persona llena recostada después de una comida",
        "ejemplo": [
          "I shouldn't have eaten so much at the party.",
          "No debí comer tanto en la fiesta."
        ]
      },
      {
        "en": "You needn't have brought a present.",
        "es": "no tenías que traer regalo",
        "imagen": "Anfitriona recibiendo un regalo con sorpresa",
        "ejemplo": [
          "Thank you! You needn't have brought a present.",
          "¡Gracias! No tenías que traer regalo."
        ]
      },
      {
        "en": "lesson learned",
        "es": "lección aprendida",
        "imagen": "Persona anotando algo en una libreta con determinación",
        "ejemplo": [
          "I lost all my files. Lesson learned: always make backups.",
          "Perdí todos mis archivos. Lección aprendida: siempre hay que respaldar."
        ]
      },
      {
        "en": "in hindsight",
        "es": "en retrospectiva",
        "imagen": "Persona mirando hacia atrás en un camino",
        "ejemplo": [
          "In hindsight, I should have accepted the offer.",
          "En retrospectiva, debí haber aceptado la oferta."
        ]
      },
      {
        "en": "next time",
        "es": "la próxima vez",
        "imagen": "Persona prometiendo algo con la mano levantada",
        "ejemplo": [
          "Next time I'll check the weather before going out.",
          "La próxima vez revisaré el clima antes de salir."
        ]
      },
      {
        "en": "I should have listened to you.",
        "es": "debí hacerte caso",
        "imagen": "Persona apenada frente a su amigo",
        "ejemplo": [
          "You were right. I should have listened to you.",
          "Tenías razón. Debí hacerte caso."
        ]
      },
      {
        "en": "They should have warned us.",
        "es": "nos debieron avisar",
        "imagen": "Turistas frente a un museo cerrado sin aviso",
        "ejemplo": [
          "They should have warned us that the museum was closed.",
          "Nos debieron avisar que el museo estaba cerrado."
        ]
      },
      {
        "en": "It would have been easier.",
        "es": "habría sido más fácil",
        "imagen": "Persona cargando muebles sola con dificultad",
        "ejemplo": [
          "It would have been easier with a truck.",
          "Habría sido más fácil con una camioneta."
        ]
      }
    ],
    "grupos": [
      {
        "id": "errores",
        "titulo": "Errores comunes",
        "icono": "❌",
        "patron": [
          "I should have…",
          "I shouldn't have…",
          "Next time I'll…"
        ],
        "palabras": [
          {
            "en": "backed up my files",
            "es": "respaldé mis archivos",
            "imagen": "Laptop con una pantalla de error",
            "ejemplo": [
              "I should have backed up my files.",
              "Debí haber respaldado mis archivos."
            ]
          },
          {
            "en": "read the contract",
            "es": "leí el contrato",
            "imagen": "Persona leyendo letras pequeñas con lupa",
            "ejemplo": [
              "I should have read the contract more carefully.",
              "Debí haber leído el contrato con más cuidado."
            ]
          },
          {
            "en": "left earlier",
            "es": "salí más temprano",
            "imagen": "Persona atrapada en el tráfico mirando el reloj",
            "ejemplo": [
              "We should have left earlier to avoid the traffic.",
              "Debimos salir más temprano para evitar el tráfico."
            ]
          },
          {
            "en": "trusted him",
            "es": "confié en él",
            "imagen": "Persona decepcionada mirando a otra de espaldas",
            "ejemplo": [
              "I shouldn't have trusted him with my secret.",
              "No debí confiarle mi secreto."
            ]
          },
          {
            "en": "spent so much",
            "es": "gasté tanto",
            "imagen": "Persona mirando una cuenta de tarjeta muy alta",
            "ejemplo": [
              "I shouldn't have spent so much on clothes.",
              "No debí gastar tanto en ropa."
            ]
          },
          {
            "en": "checked the weather",
            "es": "revisé el clima",
            "imagen": "Personas empapadas en una playa con tormenta",
            "ejemplo": [
              "We should have checked the weather before the trip.",
              "Debimos revisar el clima antes del viaje."
            ]
          }
        ]
      },
      {
        "id": "reaccionar",
        "titulo": "Reaccionar ante un error",
        "icono": "🙏",
        "patron": [
          "Don't worry about it.",
          "It could have been worse.",
          "It happens."
        ],
        "palabras": [
          {
            "en": "Don't worry about it.",
            "es": "no te preocupes",
            "imagen": "Amigo tranquilizando a otro con la mano en el hombro",
            "ejemplo": [
              "You broke a glass? Don't worry about it.",
              "¿Rompiste un vaso? No te preocupes."
            ]
          },
          {
            "en": "It could have been worse.",
            "es": "pudo haber sido peor",
            "imagen": "Persona con un raspón sonriendo",
            "ejemplo": [
              "It's just a scratch. It could have been worse.",
              "Es solo un raspón. Pudo haber sido peor."
            ]
          },
          {
            "en": "It happens.",
            "es": "pasa / le pasa a cualquiera",
            "imagen": "Persona encogiéndose de hombros con una sonrisa",
            "ejemplo": [
              "You forgot? It happens.",
              "¿Se te olvidó? Le pasa a cualquiera."
            ]
          },
          {
            "en": "I owe you an apology.",
            "es": "te debo una disculpa",
            "imagen": "Persona disculpándose sinceramente",
            "ejemplo": [
              "I owe you an apology for yesterday.",
              "Te debo una disculpa por lo de ayer."
            ]
          },
          {
            "en": "It won't happen again.",
            "es": "no volverá a pasar",
            "imagen": "Empleado prometiendo frente a su jefe",
            "ejemplo": [
              "I'm sorry I was late. It won't happen again.",
              "Perdón por llegar tarde. No volverá a pasar."
            ]
          },
          {
            "en": "we all make mistakes",
            "es": "todos cometemos errores",
            "imagen": "Grupo de compañeros sonriendo comprensivos",
            "ejemplo": [
              "Don't be so hard on yourself. We all make mistakes.",
              "No seas tan duro contigo. Todos cometemos errores."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I failed. I should have studied more.",
        "es": "Reprobé. Debí haber estudiado más."
      },
      {
        "en": "You shouldn't have said that to your mother.",
        "es": "No debiste decirle eso a tu mamá."
      },
      {
        "en": "We could have won, but we missed a penalty.",
        "es": "Pudimos haber ganado, pero fallamos un penal."
      },
      {
        "en": "You were in town? You could have told me!",
        "es": "¿Estabas en la ciudad? ¡Me hubieras dicho!"
      },
      {
        "en": "I would have helped you, but I didn't know.",
        "es": "Te habría ayudado, pero no sabía."
      },
      {
        "en": "The wedding was perfect. It couldn't have been better.",
        "es": "La boda fue perfecta. No pudo haber salido mejor."
      },
      {
        "en": "Thank you! You needn't have brought a present.",
        "es": "¡Gracias! No tenías que traer regalo."
      },
      {
        "en": "In hindsight, I should have accepted the offer.",
        "es": "En retrospectiva, debí haber aceptado la oferta."
      },
      {
        "en": "It's just a scratch. It could have been worse.",
        "es": "Es solo un raspón. Pudo haber sido peor."
      },
      {
        "en": "I'm sorry I was late. It won't happen again.",
        "es": "Perdón por llegar tarde. No volverá a pasar."
      }
    ],
    "frases": [
      {
        "en": "I should have bought the tickets online, because when we arrived, they were sold out.",
        "es": "Debí haber comprado los boletos en línea, porque cuando llegamos ya se habían agotado.",
        "imagen": "Taquilla cerrada con gente decepcionada"
      },
      {
        "en": "You shouldn't have driven after drinking. You could have had a terrible accident.",
        "es": "No debiste manejar después de tomar. Pudiste haber tenido un accidente terrible.",
        "imagen": "Llaves de carro junto a una copa vacía"
      },
      {
        "en": "If you had asked me, I would have lent you the money, but you never said anything.",
        "es": "Si me hubieras pedido, te habría prestado el dinero, pero nunca dijiste nada.",
        "imagen": "Amigos conversando seriamente en una mesa"
      },
      {
        "en": "We could have saved a lot of money if we had booked the flights three months earlier.",
        "es": "Pudimos haber ahorrado mucho dinero si hubiéramos reservado los vuelos tres meses antes.",
        "imagen": "Pareja mirando precios de vuelos con sorpresa"
      },
      {
        "en": "The company should have listened to its customers before changing the product.",
        "es": "La empresa debió escuchar a sus clientes antes de cambiar el producto.",
        "imagen": "Clientes quejándose en redes sociales"
      },
      {
        "en": "I shouldn't have stayed up so late. Now I can't keep my eyes open at work.",
        "es": "No debí desvelarme tanto. Ahora no puedo mantener los ojos abiertos en el trabajo.",
        "imagen": "Persona cabeceando frente a la computadora"
      },
      {
        "en": "In hindsight, we should have hired a professional instead of doing it ourselves.",
        "es": "En retrospectiva, debimos contratar a un profesional en vez de hacerlo nosotros.",
        "imagen": "Pared mal pintada con manchas y una brocha"
      },
      {
        "en": "You needn't have cooked so much food. Only six people came to the party!",
        "es": "No tenías que cocinar tanta comida. ¡Solo vinieron seis personas a la fiesta!",
        "imagen": "Mesa llena de comida con pocos invitados"
      },
      {
        "en": "The government could have prevented the floods if it had cleaned the drains.",
        "es": "El gobierno pudo haber evitado las inundaciones si hubiera limpiado las coladeras.",
        "imagen": "Calle inundada con coladeras tapadas de basura"
      },
      {
        "en": "Lesson learned: next time I'll read the instructions before I start building the furniture.",
        "es": "Lección aprendida: la próxima vez leeré las instrucciones antes de armar el mueble.",
        "imagen": "Persona rodeada de piezas de un mueble sin armar"
      }
    ],
    "listening": [
      {
        "audio": "I should have brought a jacket. It's much colder than I expected.",
        "pregunta": "¿De qué se arrepiente?",
        "opciones": [
          "De no llevar chamarra",
          "De salir",
          "De no llevar paraguas",
          "De llegar tarde"
        ]
      },
      {
        "audio": "You could have called me! I waited for you for two hours.",
        "pregunta": "¿Cuánto tiempo esperó?",
        "opciones": [
          "Dos horas",
          "Veinte minutos",
          "Media hora",
          "Una hora"
        ]
      },
      {
        "audio": "I would have gone to the concert, but I had to work late.",
        "pregunta": "¿Por qué no fue al concierto?",
        "opciones": [
          "Tuvo que trabajar tarde",
          "No tenía boleto",
          "Estaba enfermo",
          "No le gusta la banda"
        ]
      },
      {
        "audio": "We shouldn't have taken the highway. There's a huge traffic jam.",
        "pregunta": "¿Cuál es el problema?",
        "opciones": [
          "Hay un embotellamiento enorme",
          "Se perdieron",
          "No hay gasolina",
          "La carretera está cerrada"
        ]
      },
      {
        "audio": "The trip was amazing. It couldn't have been better!",
        "pregunta": "¿Cómo estuvo el viaje?",
        "opciones": [
          "Perfecto",
          "Regular",
          "Muy malo",
          "Aburrido"
        ]
      }
    ],
    "lectura": {
      "titulo": "Lessons from my first business",
      "texto": "When I was twenty-three, I opened a small coffee shop near my university. I was full of enthusiasm, but I made many mistakes. First, I should have done more research about the area. I didn't realize that during the summer vacation, the students left and the streets were empty. I could have saved a lot of money if I had closed for those months. Second, I shouldn't have hired my friends. They were fun, but they often arrived late, and I couldn't tell them anything. Third, I spent too much on decoration. I would have done better if I had invested in a good coffee machine instead. After two years, I had to close the business. At first, I felt like a failure. But in hindsight, it was the best school I could have had. Five years later, I opened a second coffee shop, and this time I did everything differently. It has been open for eight years now.",
      "preguntas": [
        {
          "pregunta": "¿Por qué debió investigar más la zona?",
          "opciones": [
            "En vacaciones de verano no había estudiantes",
            "Había mucha competencia",
            "La renta era cara",
            "No había estacionamiento"
          ]
        },
        {
          "pregunta": "¿Cuál fue el problema de contratar a sus amigos?",
          "opciones": [
            "Llegaban tarde y no podía decirles nada",
            "No sabían hacer café",
            "Le robaban",
            "Eran muy serios"
          ]
        },
        {
          "pregunta": "¿En qué gastó demasiado?",
          "opciones": [
            "En decoración",
            "En publicidad",
            "En sueldos",
            "En la renta"
          ]
        },
        {
          "pregunta": "¿Cuánto tiempo lleva abierto su segundo café?",
          "opciones": [
            "Ocho años",
            "Dos años",
            "Cinco años",
            "Un año"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con should have o shouldn't have.",
        "pregunta": "I'm so tired. I ___ gone to bed earlier.",
        "respuestas": [
          "should have",
          "should've"
        ]
      },
      {
        "instruccion": "Completa con should have o shouldn't have.",
        "pregunta": "My stomach hurts. I ___ eaten so many tacos.",
        "respuestas": [
          "shouldn't have",
          "should not have"
        ]
      },
      {
        "instruccion": "Completa con could have.",
        "pregunta": "Why didn't you ask? I ___ helped you!",
        "respuestas": [
          "could have",
          "would have",
          "could've"
        ]
      },
      {
        "instruccion": "Completa con would have.",
        "pregunta": "I ___ come to your party, but I was sick.",
        "respuestas": [
          "would have",
          "would've"
        ]
      },
      {
        "instruccion": "Completa con el participio.",
        "pregunta": "You should have ___ (tell) me the truth.",
        "respuestas": [
          "told"
        ]
      },
      {
        "instruccion": "Completa con needn't have.",
        "pregunta": "You ___ bought flowers. Thank you anyway!",
        "respuestas": [
          "needn't have",
          "need not have",
          "didn't need to have"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Debí haber estudiado más.",
        "respuestas": [
          "I should have studied more",
          "I should've studied more"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¡Me hubieras dicho!",
        "respuestas": [
          "You could have told me",
          "You should have told me",
          "You could've told me"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "No volverá a pasar.",
        "respuestas": [
          "It won't happen again",
          "It will not happen again"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I should of called you.",
        "respuestas": [
          "I should have called you",
          "I should've called you"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "I'm lost. I ___ a map.",
        "opciones": [
          "should have brought",
          "should brought",
          "should bring yesterday",
          "must have bring"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "You ___ shouted at him. He's only a child.",
        "opciones": [
          "shouldn't have",
          "should have",
          "could have",
          "would have"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Be careful! You ___ fallen!",
        "opciones": [
          "could have",
          "should have",
          "must",
          "would"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I ___ you, but my phone was dead.",
        "opciones": [
          "would have called",
          "should call",
          "would call yesterday",
          "must have called"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«It couldn't have been better» significa:",
        "opciones": [
          "No pudo haber salido mejor",
          "No pudo ser peor",
          "Pudo ser mejor",
          "No salió bien"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«In hindsight» significa:",
        "opciones": [
          "En retrospectiva",
          "A la vista",
          "Por adelantado",
          "Por dentro"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I should have checked the oven. The cake is completely burned.",
        "pregunta": "¿Qué le pasó al pastel?",
        "opciones": [
          "Se quemó",
          "Se cayó",
          "No subió",
          "Quedó crudo"
        ]
      },
      {
        "tipo": "listening",
        "audio": "They should have told us the meeting was online. We drove for an hour for nothing.",
        "pregunta": "¿Por qué manejaron una hora para nada?",
        "opciones": [
          "La junta era en línea",
          "La junta se canceló",
          "Se equivocaron de lugar",
          "Llegaron tarde"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: No debiste decir eso.",
        "respuestas": [
          "You shouldn't have said that",
          "You should not have said that"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Te habría ayudado.",
        "respuestas": [
          "I would have helped you",
          "I'd have helped you",
          "I would've helped you"
        ]
      }
    ]
  },
  {
    "id": "b2-17",
    "num": 17,
    "titulo": "Be used to / get used to vs. used to",
    "contexto": "Adaptarse a un cambio (mudanzas, nuevos trabajos)",
    "explicacion": {
      "es": [
        "***Used to*** + **verbo base** habla de **hábitos del pasado** que ya no existen: *I **used to live** in a small town.* (Antes vivía en un pueblo.)",
        "***Be used to*** + ***-ing*** o sustantivo = **estar acostumbrado**: *I**'m used to getting up** early.* (Estoy acostumbrado a levantarme temprano.) *She **isn't used to** the cold.* (No está acostumbrada al frío.)",
        "***Get used to*** + ***-ing*** o sustantivo = **acostumbrarse** (el proceso): *It took me months to **get used to driving** on the left.* (Me tardé meses en acostumbrarme a manejar por la izquierda.) *You'll **get used to** it.* (Ya te acostumbrarás.)",
        "*Be used to* y *get used to* van con **cualquier tiempo**: *I **was used to**…, I'**m getting used to**…, I'**ve gotten used to**…, I'**ll get used to**…* ¡La clave es que después va ***-ing***!"
      ],
      "tabla": {
        "columnas": [
          "Forma",
          "Significado",
          "Ejemplo"
        ],
        "filas": [
          [
            "used to + verbo",
            "antes (ya no)",
            "I used to smoke."
          ],
          [
            "be used to + -ing",
            "estar acostumbrado",
            "I'm used to working at night."
          ],
          [
            "get used to + -ing",
            "acostumbrarse",
            "I'm getting used to living alone."
          ],
          [
            "be used to + sustantivo",
            "estar acostumbrado a algo",
            "She's used to the noise."
          ],
          [
            "didn't use to",
            "antes no",
            "I didn't use to like coffee."
          ]
        ]
      },
      "ojo": [
        "*I'm used to **work** at night* ❌ → *I'm used to **working** at night* ✅. Después de *be / get used to* va ***-ing***, porque *to* es preposición.",
        "*I used to work* (antes trabajaba) ≠ *I'm used to working* (estoy acostumbrado a trabajar).",
        "Frases útiles: ***You'll get used to it. / I can't get used to… / It takes time to get used to…***",
        "Para preguntar: ***Are you used to** the food yet? **Have you gotten used to** the new schedule?*",
        "***Adapt to*** y ***adjust to*** son sinónimos más formales de *get used to*: *It took him a while to **adjust to** the new culture.*"
      ],
      "en": [
        "Used to plus verb talks about past habits: I used to live in a small town.",
        "Be used to plus ing means to be accustomed: I'm used to getting up early.",
        "Get used to means to become accustomed: It took me months to get used to driving on the left.",
        "After be used to and get used to, use the ing form."
      ]
    },
    "vocabulario": [
      {
        "en": "I'm used to getting up early.",
        "es": "estoy acostumbrado a levantarme temprano",
        "imagen": "Persona tomando café al amanecer con energía",
        "ejemplo": [
          "I'm used to getting up early, so it isn't a problem.",
          "Estoy acostumbrado a levantarme temprano, así que no es problema."
        ]
      },
      {
        "en": "She isn't used to the cold.",
        "es": "no está acostumbrada al frío",
        "imagen": "Mujer temblando con abrigo en una calle nevada",
        "ejemplo": [
          "She's from Mérida, so she isn't used to the cold.",
          "Es de Mérida, así que no está acostumbrada al frío."
        ]
      },
      {
        "en": "You'll get used to it.",
        "es": "ya te acostumbrarás",
        "imagen": "Amiga animando a otra en su primer día de trabajo",
        "ejemplo": [
          "Don't worry. You'll get used to it.",
          "No te preocupes. Ya te acostumbrarás."
        ]
      },
      {
        "en": "I'm getting used to living alone.",
        "es": "me estoy acostumbrando a vivir solo",
        "imagen": "Persona cocinando sola en un departamento pequeño",
        "ejemplo": [
          "I'm slowly getting used to living alone.",
          "Poco a poco me estoy acostumbrando a vivir solo."
        ]
      },
      {
        "en": "I can't get used to the noise.",
        "es": "no me acostumbro al ruido",
        "imagen": "Persona tapándose los oídos en una ciudad ruidosa",
        "ejemplo": [
          "I can't get used to the noise of the city.",
          "No me acostumbro al ruido de la ciudad."
        ]
      },
      {
        "en": "I used to live in a small town.",
        "es": "antes vivía en un pueblo",
        "imagen": "Pueblo pequeño con calles empedradas",
        "ejemplo": [
          "I used to live in a small town in Jalisco.",
          "Antes vivía en un pueblo de Jalisco."
        ]
      },
      {
        "en": "It took me months to get used to it.",
        "es": "me tardé meses en acostumbrarme",
        "imagen": "Persona manejando por la izquierda en Inglaterra",
        "ejemplo": [
          "It took me months to get used to driving on the left.",
          "Me tardé meses en acostumbrarme a manejar por la izquierda."
        ]
      },
      {
        "en": "Are you used to the food yet?",
        "es": "¿ya te acostumbraste a la comida?",
        "imagen": "Extranjero probando comida picante con duda",
        "ejemplo": [
          "Are you used to the spicy food yet?",
          "¿Ya te acostumbraste a la comida picante?"
        ]
      },
      {
        "en": "I've gotten used to working from home.",
        "es": "ya me acostumbré a trabajar desde casa",
        "imagen": "Persona trabajando cómoda en su sala con su gato",
        "ejemplo": [
          "I've gotten used to working from home.",
          "Ya me acostumbré a trabajar desde casa."
        ]
      },
      {
        "en": "He was used to a slower pace.",
        "es": "estaba acostumbrado a un ritmo más tranquilo",
        "imagen": "Pueblo tranquilo con un señor sentado en una banca",
        "ejemplo": [
          "He was used to a slower pace of life.",
          "Estaba acostumbrado a un ritmo de vida más tranquilo."
        ]
      },
      {
        "en": "a culture shock",
        "es": "un choque cultural",
        "imagen": "Persona sorprendida en un mercado extranjero",
        "ejemplo": [
          "Moving to Japan was a culture shock.",
          "Mudarme a Japón fue un choque cultural."
        ]
      },
      {
        "en": "homesick",
        "es": "extrañar la casa",
        "imagen": "Estudiante mirando fotos de su familia en el celular",
        "ejemplo": [
          "I felt homesick during my first months abroad.",
          "Extrañé mi casa los primeros meses en el extranjero."
        ]
      },
      {
        "en": "settle in",
        "es": "adaptarse / instalarse",
        "imagen": "Persona acomodando cosas en su nuevo departamento",
        "ejemplo": [
          "How are you settling in?",
          "¿Cómo te estás adaptando?"
        ]
      },
      {
        "en": "adjust to",
        "es": "adaptarse a",
        "imagen": "Persona estudiando un mapa de una ciudad nueva",
        "ejemplo": [
          "It took him a while to adjust to the new culture.",
          "Le tomó tiempo adaptarse a la nueva cultura."
        ]
      },
      {
        "en": "a new routine",
        "es": "una nueva rutina",
        "imagen": "Agenda con horarios nuevos marcados",
        "ejemplo": [
          "I'm still getting used to my new routine.",
          "Todavía me estoy acostumbrando a mi nueva rutina."
        ]
      },
      {
        "en": "It feels strange.",
        "es": "se siente raro",
        "imagen": "Persona en una casa vacía después de una mudanza",
        "ejemplo": [
          "It feels strange to wake up without my kids at home.",
          "Se siente raro despertar sin mis hijos en casa."
        ]
      }
    ],
    "grupos": [
      {
        "id": "mudanza",
        "titulo": "Mudarse a otro país",
        "icono": "✈️",
        "patron": [
          "I'm not used to…",
          "I'm getting used to…",
          "I miss…"
        ],
        "palabras": [
          {
            "en": "the weather",
            "es": "el clima",
            "imagen": "Persona con paraguas bajo la lluvia en Londres",
            "ejemplo": [
              "I'm still not used to the weather here. It rains every day.",
              "Todavía no me acostumbro al clima de aquí. Llueve todos los días."
            ]
          },
          {
            "en": "the time difference",
            "es": "la diferencia de horario",
            "imagen": "Dos relojes con horas distintas",
            "ejemplo": [
              "I can't get used to the time difference with my family.",
              "No me acostumbro a la diferencia de horario con mi familia."
            ]
          },
          {
            "en": "the language",
            "es": "el idioma",
            "imagen": "Persona leyendo letreros en otro idioma",
            "ejemplo": [
              "Getting used to the language was the hardest part.",
              "Acostumbrarme al idioma fue lo más difícil."
            ]
          },
          {
            "en": "the food",
            "es": "la comida",
            "imagen": "Plato de comida extranjera desconocida",
            "ejemplo": [
              "I'm getting used to the food, but I miss tacos.",
              "Me estoy acostumbrando a la comida, pero extraño los tacos."
            ]
          },
          {
            "en": "public transport",
            "es": "el transporte público",
            "imagen": "Tren moderno en una estación extranjera",
            "ejemplo": [
              "I'm used to taking the train everywhere now.",
              "Ya estoy acostumbrado a tomar el tren a todos lados."
            ]
          },
          {
            "en": "making new friends",
            "es": "hacer nuevos amigos",
            "imagen": "Grupo internacional de personas riendo en un café",
            "ejemplo": [
              "Making new friends takes time.",
              "Hacer nuevos amigos lleva tiempo."
            ]
          }
        ]
      },
      {
        "id": "trabajo",
        "titulo": "Un trabajo nuevo",
        "icono": "💼",
        "patron": [
          "I'm used to…",
          "I had to get used to…",
          "It's taking me a while…"
        ],
        "palabras": [
          {
            "en": "the night shift",
            "es": "el turno de noche",
            "imagen": "Enfermera trabajando en un hospital de noche",
            "ejemplo": [
              "It took me a long time to get used to the night shift.",
              "Me tardé mucho en acostumbrarme al turno de noche."
            ]
          },
          {
            "en": "working in a team",
            "es": "trabajar en equipo",
            "imagen": "Equipo colaborando alrededor de una mesa",
            "ejemplo": [
              "I'm used to working alone, not in a team.",
              "Estoy acostumbrado a trabajar solo, no en equipo."
            ]
          },
          {
            "en": "a long commute",
            "es": "un trayecto largo",
            "imagen": "Persona dormida en el metro de camino al trabajo",
            "ejemplo": [
              "I'm getting used to a long commute.",
              "Me estoy acostumbrando a un trayecto largo."
            ]
          },
          {
            "en": "wearing a uniform",
            "es": "usar uniforme",
            "imagen": "Empleado ajustándose el uniforme frente al espejo",
            "ejemplo": [
              "I wasn't used to wearing a uniform.",
              "No estaba acostumbrado a usar uniforme."
            ]
          },
          {
            "en": "a strict boss",
            "es": "un jefe estricto",
            "imagen": "Jefe serio revisando el reloj",
            "ejemplo": [
              "I'm not used to having such a strict boss.",
              "No estoy acostumbrado a tener un jefe tan estricto."
            ]
          },
          {
            "en": "speaking English every day",
            "es": "hablar inglés todos los días",
            "imagen": "Persona en una junta internacional hablando",
            "ejemplo": [
              "I'm slowly getting used to speaking English every day.",
              "Poco a poco me acostumbro a hablar inglés todos los días."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I'm used to getting up early, so it isn't a problem.",
        "es": "Estoy acostumbrado a levantarme temprano, así que no es problema."
      },
      {
        "en": "She's from Mérida, so she isn't used to the cold.",
        "es": "Es de Mérida, así que no está acostumbrada al frío."
      },
      {
        "en": "Don't worry. You'll get used to it.",
        "es": "No te preocupes. Ya te acostumbrarás."
      },
      {
        "en": "I can't get used to the noise of the city.",
        "es": "No me acostumbro al ruido de la ciudad."
      },
      {
        "en": "I used to live in a small town in Jalisco.",
        "es": "Antes vivía en un pueblo de Jalisco."
      },
      {
        "en": "It took me months to get used to driving on the left.",
        "es": "Me tardé meses en acostumbrarme a manejar por la izquierda."
      },
      {
        "en": "I've gotten used to working from home.",
        "es": "Ya me acostumbré a trabajar desde casa."
      },
      {
        "en": "Moving to Japan was a culture shock.",
        "es": "Mudarme a Japón fue un choque cultural."
      },
      {
        "en": "How are you settling in?",
        "es": "¿Cómo te estás adaptando?"
      },
      {
        "en": "I'm getting used to the food, but I miss tacos.",
        "es": "Me estoy acostumbrando a la comida, pero extraño los tacos."
      }
    ],
    "frases": [
      {
        "en": "When I moved to Canada, it took me a whole winter to get used to temperatures of minus twenty.",
        "es": "Cuando me mudé a Canadá, me tardé todo un invierno en acostumbrarme a temperaturas de menos veinte.",
        "imagen": "Persona abrigada en una calle nevada de Canadá"
      },
      {
        "en": "I used to hate cooking, but now that I live alone, I've gotten used to making my own meals.",
        "es": "Antes odiaba cocinar, pero ahora que vivo solo me acostumbré a hacer mi propia comida.",
        "imagen": "Persona cocinando feliz en su pequeña cocina"
      },
      {
        "en": "My grandmother still isn't used to using a smartphone, so she calls me every time she wants to send a photo.",
        "es": "Mi abuela todavía no se acostumbra a usar el celular, así que me llama cada vez que quiere mandar una foto.",
        "imagen": "Abuela mirando confundida un celular"
      },
      {
        "en": "Nurses who work at night have to get used to sleeping during the day.",
        "es": "Las enfermeras que trabajan de noche tienen que acostumbrarse a dormir de día.",
        "imagen": "Enfermera durmiendo de día con antifaz"
      },
      {
        "en": "At first, the silence of the countryside was strange, but now I'm used to it and I love it.",
        "es": "Al principio el silencio del campo era raro, pero ahora estoy acostumbrado y me encanta.",
        "imagen": "Casa de campo tranquila al amanecer"
      },
      {
        "en": "He's used to working under pressure, so the deadline doesn't worry him.",
        "es": "Está acostumbrado a trabajar bajo presión, así que la fecha límite no le preocupa.",
        "imagen": "Persona trabajando tranquila con muchos papeles"
      },
      {
        "en": "Are you used to the altitude yet? Mexico City is more than two thousand meters high.",
        "es": "¿Ya te acostumbraste a la altura? La Ciudad de México está a más de dos mil metros.",
        "imagen": "Turista respirando profundo en una calle de la ciudad"
      },
      {
        "en": "I can't get used to waking up without hearing the birds like in my old house.",
        "es": "No me acostumbro a despertar sin oír los pájaros como en mi casa anterior.",
        "imagen": "Persona mirando por la ventana de un edificio en la ciudad"
      },
      {
        "en": "My kids are getting used to their new school, and they've already made some friends.",
        "es": "Mis hijos se están acostumbrando a su nueva escuela y ya hicieron algunos amigos.",
        "imagen": "Niños jugando con nuevos compañeros en el recreo"
      },
      {
        "en": "In my country we didn't use to eat dinner so early, so it was hard to get used to eating at six.",
        "es": "En mi país no cenábamos tan temprano, así que me costó acostumbrarme a cenar a las seis.",
        "imagen": "Familia cenando temprano con el sol todavía afuera"
      }
    ],
    "listening": [
      {
        "audio": "I'm not used to wearing a suit every day. In my old job I wore jeans.",
        "pregunta": "¿Qué usaba en su trabajo anterior?",
        "opciones": [
          "Jeans",
          "Traje",
          "Uniforme",
          "Pants"
        ]
      },
      {
        "audio": "It took my dog a few weeks to get used to the new house.",
        "pregunta": "¿Cuánto tardó el perro en acostumbrarse?",
        "opciones": [
          "Unas semanas",
          "Un día",
          "Un año",
          "No se acostumbró"
        ]
      },
      {
        "audio": "I used to play tennis every weekend, but I stopped after my knee injury.",
        "pregunta": "¿Por qué dejó el tenis?",
        "opciones": [
          "Por una lesión en la rodilla",
          "Por falta de tiempo",
          "Porque se mudó",
          "Porque se aburrió"
        ]
      },
      {
        "audio": "Living in the city is hard at first, but you'll get used to the traffic.",
        "pregunta": "¿A qué se acostumbrará?",
        "opciones": [
          "Al tráfico",
          "Al frío",
          "A la comida",
          "Al idioma"
        ]
      },
      {
        "audio": "After ten years in London, I'm used to the rain. I don't even notice it anymore.",
        "pregunta": "¿A qué se acostumbró?",
        "opciones": [
          "A la lluvia",
          "Al frío",
          "A la comida",
          "Al ruido"
        ]
      }
    ],
    "lectura": {
      "titulo": "A new life in Montreal",
      "texto": "Two years ago, Fernanda moved from Veracruz to Montreal to study a master's degree. The first months were very difficult. She wasn't used to the cold at all; in Veracruz, she used to wear sandals all year round! In January, the temperature fell to minus thirty, and she spent most weekends at home. She also had to get used to speaking French, because she had only studied English before. At the supermarket, she couldn't find the ingredients she was used to cooking with, so she felt very homesick. Little by little, however, things changed. She joined a Latin American students' group, where she made great friends. She learned to ice skate, and she even started to enjoy the snow. Now she's used to the long winters, and she has gotten used to eating dinner at six. When she goes back to Veracruz for vacation, she says she has to get used to the heat again!",
      "preguntas": [
        {
          "pregunta": "¿Qué usaba Fernanda todo el año en Veracruz?",
          "opciones": [
            "Sandalias",
            "Botas",
            "Abrigos",
            "Tenis"
          ]
        },
        {
          "pregunta": "¿Qué idioma tuvo que aprender?",
          "opciones": [
            "Francés",
            "Inglés",
            "Alemán",
            "Portugués"
          ]
        },
        {
          "pregunta": "¿Qué la ayudó a sentirse mejor?",
          "opciones": [
            "Un grupo de estudiantes latinoamericanos",
            "Su familia",
            "Su jefe",
            "Un curso de cocina"
          ]
        },
        {
          "pregunta": "¿A qué se tiene que reacostumbrar en Veracruz?",
          "opciones": [
            "Al calor",
            "A la comida",
            "Al idioma",
            "Al ruido"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con -ing o el verbo base.",
        "pregunta": "I'm used to ___ (work) at night.",
        "respuestas": [
          "working"
        ]
      },
      {
        "instruccion": "Completa con -ing o el verbo base.",
        "pregunta": "I used to ___ (work) at night, but now I work days.",
        "respuestas": [
          "work"
        ]
      },
      {
        "instruccion": "Completa con -ing o el verbo base.",
        "pregunta": "She's getting used to ___ (live) in the city.",
        "respuestas": [
          "living"
        ]
      },
      {
        "instruccion": "Completa con be o get.",
        "pregunta": "Don't worry, you'll ___ used to it.",
        "respuestas": [
          "get"
        ]
      },
      {
        "instruccion": "Completa con be o get.",
        "pregunta": "I ___ used to the noise now. It doesn't bother me. (estoy)",
        "respuestas": [
          "am",
          "'m"
        ]
      },
      {
        "instruccion": "Completa la pregunta.",
        "pregunta": "Have you ___ used to the new schedule?",
        "respuestas": [
          "gotten",
          "got"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Ya te acostumbrarás.",
        "respuestas": [
          "You'll get used to it",
          "You will get used to it"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "No estoy acostumbrado al frío.",
        "respuestas": [
          "I'm not used to the cold",
          "I am not used to the cold"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "un choque cultural",
        "respuestas": [
          "a culture shock",
          "culture shock"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I'm used to get up early.",
        "respuestas": [
          "I'm used to getting up early",
          "I am used to getting up early"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "I'm used to ___ spicy food.",
        "opciones": [
          "eating",
          "eat",
          "ate",
          "eaten"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "When I was a child, I ___ climb trees.",
        "opciones": [
          "used to",
          "was used to",
          "am used to",
          "get used to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "It took her a year to ___ used to the new job.",
        "opciones": [
          "get",
          "be",
          "used",
          "make"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "He isn't used ___ a uniform.",
        "opciones": [
          "to wearing",
          "to wear",
          "wearing",
          "wear"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«I used to work at night» significa:",
        "opciones": [
          "Antes trabajaba de noche",
          "Estoy acostumbrado a trabajar de noche",
          "Me acostumbro a trabajar de noche",
          "Trabajo de noche"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«How are you settling in?» significa:",
        "opciones": [
          "¿Cómo te estás adaptando?",
          "¿Dónde te sientas?",
          "¿Cuándo te mudas?",
          "¿Cómo estás de salud?"
        ]
      },
      {
        "tipo": "listening",
        "audio": "My son is getting used to sleeping in his own room, but sometimes he still comes to our bed.",
        "pregunta": "¿A qué se está acostumbrando el hijo?",
        "opciones": [
          "A dormir en su propio cuarto",
          "A la escuela",
          "A un perro",
          "A comer verduras"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I'll never get used to paying so much for rent in this city.",
        "pregunta": "¿A qué nunca se acostumbrará?",
        "opciones": [
          "A pagar tanto de renta",
          "Al tráfico",
          "Al clima",
          "A la comida"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Me estoy acostumbrando a vivir solo.",
        "respuestas": [
          "I'm getting used to living alone",
          "I am getting used to living alone",
          "I'm getting used to living on my own"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Antes vivía en un pueblo.",
        "respuestas": [
          "I used to live in a town",
          "I used to live in a village",
          "I used to live in a small town"
        ]
      }
    ]
  },
  {
    "id": "b2-18",
    "num": 18,
    "titulo": "Would para hábitos pasados",
    "contexto": "Recuerdos de la infancia",
    "explicacion": {
      "es": [
        "***Would*** + verbo base también sirve para hablar de **acciones repetidas en el pasado**, sobre todo al **recordar** con nostalgia: *Every Sunday, my grandmother **would make** tamales.* (Cada domingo, mi abuela hacía tamales.)",
        "Es parecido a ***used to***, pero ***would*** **solo** funciona con **acciones**, no con **estados**: *We **used to have** a dog* ✅ (estado), pero *We would have a dog* ❌. *I **used to be** shy* ✅, pero *I would be shy* ❌ (con sentido de hábito).",
        "Normalmente se empieza con ***used to*** o con el pasado para situar la historia, y luego se sigue con ***would*** para los detalles: *When I was a kid, we **used to** spend the summers in Acapulco. We **would** wake up early and we**'d** run to the beach.*",
        "Se contrae ***'d***: *We**'d** play until dark.* Para hábitos molestos se usa ***would always***: *My brother **would always** take my toys.*"
      ],
      "tabla": {
        "columnas": [
          "",
          "used to",
          "would"
        ],
        "filas": [
          [
            "Acciones repetidas",
            "We used to play outside.",
            "We would play outside."
          ],
          [
            "Estados (be, have, like, live)",
            "I used to live in Puebla.",
            "No se usa."
          ],
          [
            "Una sola vez",
            "No se usa.",
            "No se usa (pasado simple)."
          ],
          [
            "Tono",
            "neutral",
            "nostálgico, narrativo"
          ]
        ]
      },
      "ojo": [
        "*I **would live** in Puebla* ❌ (estado) → *I **used to live** in Puebla* ✅.",
        "Para una sola vez, pasado simple: *One summer, we **went** to Cancun* (no *would go*).",
        "*Would* aquí **no** es condicional: depende del contexto de pasado. *Every summer we'd go…* = íbamos.",
        "Vocabulario de infancia: ***hide and seek*** (escondidillas), ***tag*** (las traes), ***marbles*** (canicas), ***jump rope*** (saltar la cuerda), ***spinning top*** (trompo).",
        "Frases para recordar: ***I remember… / When I was little… / Back then… / Those were the days!***"
      ],
      "en": [
        "Would plus verb can describe repeated actions in the past: Every Sunday, my grandmother would make tamales.",
        "Would is only for actions, not states: We used to have a dog, not we would have a dog.",
        "We often start with used to and continue with would: We used to spend the summers in Acapulco. We would wake up early.",
        "Those were the days!"
      ]
    },
    "vocabulario": [
      {
        "en": "my grandmother would make tamales",
        "es": "mi abuela hacía tamales",
        "imagen": "Abuela preparando tamales en una cocina tradicional",
        "ejemplo": [
          "Every Sunday, my grandmother would make tamales.",
          "Cada domingo, mi abuela hacía tamales."
        ]
      },
      {
        "en": "we would play until dark",
        "es": "jugábamos hasta que oscurecía",
        "imagen": "Niños jugando en la calle al atardecer",
        "ejemplo": [
          "We would play in the street until dark.",
          "Jugábamos en la calle hasta que oscurecía."
        ]
      },
      {
        "en": "we'd run to the beach",
        "es": "corríamos a la playa",
        "imagen": "Niños corriendo hacia el mar",
        "ejemplo": [
          "Every morning we'd run to the beach.",
          "Cada mañana corríamos a la playa."
        ]
      },
      {
        "en": "my dad would read to us",
        "es": "mi papá nos leía",
        "imagen": "Papá leyendo un cuento a sus hijos en la cama",
        "ejemplo": [
          "At night, my dad would read to us.",
          "En la noche, mi papá nos leía."
        ]
      },
      {
        "en": "he would always take my toys",
        "es": "siempre me quitaba los juguetes",
        "imagen": "Hermano mayor quitándole un juguete al menor",
        "ejemplo": [
          "My brother would always take my toys.",
          "Mi hermano siempre me quitaba los juguetes."
        ]
      },
      {
        "en": "back then",
        "es": "en aquel entonces",
        "imagen": "Foto antigua de una calle de los ochenta",
        "ejemplo": [
          "Back then, there were no cell phones.",
          "En aquel entonces no había celulares."
        ]
      },
      {
        "en": "Those were the days!",
        "es": "¡qué tiempos aquellos!",
        "imagen": "Amigos adultos mirando fotos de su juventud",
        "ejemplo": [
          "We had no worries. Those were the days!",
          "No teníamos preocupaciones. ¡Qué tiempos aquellos!"
        ]
      },
      {
        "en": "when I was little",
        "es": "cuando era chiquito",
        "imagen": "Niño pequeño con un helado en la plaza",
        "ejemplo": [
          "When I was little, I was afraid of clowns.",
          "Cuando era chiquito, me daban miedo los payasos."
        ]
      },
      {
        "en": "hide and seek",
        "es": "escondidillas",
        "imagen": "Niño escondido detrás de un árbol",
        "ejemplo": [
          "We'd play hide and seek in my grandmother's garden.",
          "Jugábamos a las escondidillas en el jardín de mi abuela."
        ]
      },
      {
        "en": "marbles",
        "es": "canicas",
        "imagen": "Canicas de colores en la tierra",
        "ejemplo": [
          "My brothers would play marbles for hours.",
          "Mis hermanos jugaban canicas durante horas."
        ]
      },
      {
        "en": "a spinning top",
        "es": "un trompo",
        "imagen": "Trompo de madera girando en el piso",
        "ejemplo": [
          "My grandfather taught me to spin a top.",
          "Mi abuelo me enseñó a bailar el trompo."
        ]
      },
      {
        "en": "jump rope",
        "es": "saltar la cuerda",
        "imagen": "Niñas saltando la cuerda en el patio",
        "ejemplo": [
          "The girls would jump rope during recess.",
          "Las niñas saltaban la cuerda en el recreo."
        ]
      },
      {
        "en": "I remember",
        "es": "me acuerdo",
        "imagen": "Persona sonriendo con los ojos cerrados recordando",
        "ejemplo": [
          "I remember the smell of my grandmother's kitchen.",
          "Me acuerdo del olor de la cocina de mi abuela."
        ]
      },
      {
        "en": "we used to have a dog",
        "es": "teníamos un perro",
        "imagen": "Niño abrazando a un perro en una foto antigua",
        "ejemplo": [
          "We used to have a big dog called Firulais.",
          "Teníamos un perro grande que se llamaba Firulais."
        ]
      },
      {
        "en": "the ice cream man",
        "es": "el paletero",
        "imagen": "Paletero con su carrito en una calle",
        "ejemplo": [
          "We'd wait for the ice cream man every afternoon.",
          "Esperábamos al paletero todas las tardes."
        ]
      },
      {
        "en": "recess",
        "es": "el recreo",
        "imagen": "Niños jugando en el patio de una escuela",
        "ejemplo": [
          "At recess, we would trade stickers.",
          "En el recreo intercambiábamos estampas."
        ]
      }
    ],
    "grupos": [
      {
        "id": "juegos",
        "titulo": "Juegos de antes",
        "icono": "🪀",
        "patron": [
          "We'd play…",
          "We used to…",
          "I'll never forget…"
        ],
        "palabras": [
          {
            "en": "tag",
            "es": "las traes",
            "imagen": "Niños persiguiéndose en un parque",
            "ejemplo": [
              "We'd play tag in the park after school.",
              "Jugábamos a las traes en el parque después de la escuela."
            ]
          },
          {
            "en": "a kite",
            "es": "un papalote",
            "imagen": "Niño volando un papalote en un campo",
            "ejemplo": [
              "Every March, we'd fly kites on the hill.",
              "Cada marzo volábamos papalotes en el cerro."
            ]
          },
          {
            "en": "a yo-yo",
            "es": "un yoyo",
            "imagen": "Niño haciendo trucos con un yoyo",
            "ejemplo": [
              "I'd practice with my yo-yo for hours.",
              "Practicaba con mi yoyo durante horas."
            ]
          },
          {
            "en": "hopscotch",
            "es": "el avión (juego)",
            "imagen": "Dibujo de gis en la banqueta para jugar avión",
            "ejemplo": [
              "We'd draw hopscotch on the sidewalk.",
              "Dibujábamos el avión en la banqueta."
            ]
          },
          {
            "en": "stickers",
            "es": "estampas",
            "imagen": "Álbum de estampas de fútbol",
            "ejemplo": [
              "We'd trade soccer stickers at recess.",
              "Intercambiábamos estampas de fútbol en el recreo."
            ]
          },
          {
            "en": "a piñata",
            "es": "una piñata",
            "imagen": "Niños rompiendo una piñata de estrella",
            "ejemplo": [
              "At every birthday, we'd break a piñata.",
              "En cada cumpleaños rompíamos una piñata."
            ]
          }
        ]
      },
      {
        "id": "recuerdos",
        "titulo": "Recuerdos",
        "icono": "📷",
        "patron": [
          "I remember…",
          "I'll never forget…",
          "It reminds me of…"
        ],
        "palabras": [
          {
            "en": "I'll never forget",
            "es": "nunca olvidaré",
            "imagen": "Persona mirando una foto con cariño",
            "ejemplo": [
              "I'll never forget my first day at school.",
              "Nunca olvidaré mi primer día de escuela."
            ]
          },
          {
            "en": "it reminds me of",
            "es": "me recuerda a",
            "imagen": "Persona oliendo pan dulce con nostalgia",
            "ejemplo": [
              "This smell reminds me of my grandmother's house.",
              "Este olor me recuerda a la casa de mi abuela."
            ]
          },
          {
            "en": "childhood memories",
            "es": "recuerdos de infancia",
            "imagen": "Caja con fotos antiguas y juguetes viejos",
            "ejemplo": [
              "I have very happy childhood memories.",
              "Tengo recuerdos de infancia muy felices."
            ]
          },
          {
            "en": "nostalgic",
            "es": "nostálgico",
            "imagen": "Persona mirando por la ventana con una sonrisa triste",
            "ejemplo": [
              "Old songs always make me feel nostalgic.",
              "Las canciones viejas siempre me ponen nostálgico."
            ]
          },
          {
            "en": "the good old days",
            "es": "los buenos tiempos",
            "imagen": "Amigos mayores riendo mientras recuerdan",
            "ejemplo": [
              "My dad always talks about the good old days.",
              "Mi papá siempre habla de los buenos tiempos."
            ]
          },
          {
            "en": "my hometown",
            "es": "mi pueblo natal",
            "imagen": "Pueblo con iglesia y montañas al fondo",
            "ejemplo": [
              "I go back to my hometown every Christmas.",
              "Regreso a mi pueblo natal cada Navidad."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Every Sunday, my grandmother would make tamales.",
        "es": "Cada domingo, mi abuela hacía tamales."
      },
      {
        "en": "We would play in the street until dark.",
        "es": "Jugábamos en la calle hasta que oscurecía."
      },
      {
        "en": "At night, my dad would read to us.",
        "es": "En la noche, mi papá nos leía."
      },
      {
        "en": "My brother would always take my toys.",
        "es": "Mi hermano siempre me quitaba los juguetes."
      },
      {
        "en": "Back then, there were no cell phones.",
        "es": "En aquel entonces no había celulares."
      },
      {
        "en": "We had no worries. Those were the days!",
        "es": "No teníamos preocupaciones. ¡Qué tiempos aquellos!"
      },
      {
        "en": "We used to have a big dog called Firulais.",
        "es": "Teníamos un perro grande que se llamaba Firulais."
      },
      {
        "en": "Every March, we'd fly kites on the hill.",
        "es": "Cada marzo volábamos papalotes en el cerro."
      },
      {
        "en": "This smell reminds me of my grandmother's house.",
        "es": "Este olor me recuerda a la casa de mi abuela."
      },
      {
        "en": "I'll never forget my first day at school.",
        "es": "Nunca olvidaré mi primer día de escuela."
      }
    ],
    "frases": [
      {
        "en": "When I was a kid, we used to live near a river, and in the summer we'd go swimming every afternoon.",
        "es": "Cuando era niño vivíamos cerca de un río y en verano íbamos a nadar todas las tardes.",
        "imagen": "Niños saltando a un río desde una roca"
      },
      {
        "en": "My grandfather would wake up at five, drink a cup of coffee and go to work in the fields.",
        "es": "Mi abuelo se levantaba a las cinco, se tomaba un café y se iba a trabajar al campo.",
        "imagen": "Campesino al amanecer con una taza de café junto a su milpa"
      },
      {
        "en": "On Christmas Eve, the whole family would meet at my aunt's house, and we'd stay up until three.",
        "es": "En Nochebuena, toda la familia se reunía en casa de mi tía y nos quedábamos despiertos hasta las tres.",
        "imagen": "Familia grande reunida en una cena navideña"
      },
      {
        "en": "After school, my sister and I would watch cartoons while my mom cooked dinner.",
        "es": "Después de la escuela, mi hermana y yo veíamos caricaturas mientras mi mamá hacía la cena.",
        "imagen": "Niños frente a una tele antigua viendo caricaturas"
      },
      {
        "en": "We didn't have much money, but my parents would always find a way to make our birthdays special.",
        "es": "No teníamos mucho dinero, pero mis papás siempre encontraban la forma de hacer especiales nuestros cumpleaños.",
        "imagen": "Fiesta sencilla con un pastel casero y globos"
      },
      {
        "en": "Every Saturday, my father would take us to the market and buy us fresh fruit juice.",
        "es": "Cada sábado, mi papá nos llevaba al mercado y nos compraba jugo de fruta fresca.",
        "imagen": "Puesto de jugos en un mercado con niños tomando"
      },
      {
        "en": "I remember that we'd sit on the roof at night and look at the stars with my uncle.",
        "es": "Me acuerdo de que nos sentábamos en la azotea de noche a ver las estrellas con mi tío.",
        "imagen": "Niños y un adulto acostados en una azotea mirando estrellas"
      },
      {
        "en": "My mom would always sing old songs while she was cleaning the house.",
        "es": "Mi mamá siempre cantaba canciones viejas mientras limpiaba la casa.",
        "imagen": "Mamá cantando mientras barre la sala"
      },
      {
        "en": "In those days, children would walk to school alone, even when they were very young.",
        "es": "En esos tiempos los niños caminaban solos a la escuela, aunque fueran muy chiquitos.",
        "imagen": "Niños con mochilas caminando solos por una calle de pueblo"
      },
      {
        "en": "Whenever it rained, we would run outside and jump in the puddles.",
        "es": "Cada vez que llovía, salíamos corriendo a brincar en los charcos.",
        "imagen": "Niños brincando en charcos bajo la lluvia"
      }
    ],
    "listening": [
      {
        "audio": "Every summer, we'd visit my grandparents in Oaxaca and help them with the animals.",
        "pregunta": "¿Qué hacían cada verano?",
        "opciones": [
          "Visitaban a los abuelos y ayudaban con los animales",
          "Iban a la playa",
          "Viajaban al extranjero",
          "Iban a un campamento"
        ]
      },
      {
        "audio": "My father would always tell us stories about ghosts before bed.",
        "pregunta": "¿Qué historias contaba el papá?",
        "opciones": [
          "De fantasmas",
          "De piratas",
          "De princesas",
          "De la guerra"
        ]
      },
      {
        "audio": "We used to have a parrot that would say good morning to everybody.",
        "pregunta": "¿Qué decía el perico?",
        "opciones": [
          "Buenos días",
          "Hola",
          "Adiós",
          "Te quiero"
        ]
      },
      {
        "audio": "During recess, we'd play soccer with a ball made of old socks.",
        "pregunta": "¿De qué estaba hecho el balón?",
        "opciones": [
          "De calcetines viejos",
          "De papel",
          "De plástico",
          "De cuero"
        ]
      },
      {
        "audio": "This song reminds me of my first school dance. Those were the days!",
        "pregunta": "¿Qué le recuerda la canción?",
        "opciones": [
          "Su primer baile escolar",
          "Su boda",
          "Un viaje",
          "Su graduación"
        ]
      }
    ],
    "lectura": {
      "titulo": "Summers at the ranch",
      "texto": "When I was a child, my parents used to send my brothers and me to my grandparents' ranch in Zacatecas every summer. Those two months were the happiest of my childhood. We would wake up with the sound of the roosters, and my grandmother would already be making fresh tortillas on the comal. After breakfast, my grandfather would take us to milk the cows. I was a bit afraid of them at first, but I got used to it. In the afternoons, when it was too hot to work, we'd lie under the big mesquite tree and my grandfather would tell us stories about the Revolution. At night, there was no electricity, so we would sit around a fire and look at the stars. Back then, I didn't realize how special those summers were. My grandparents passed away years ago, and the ranch was sold. But whenever I smell fresh tortillas, I'm a child again.",
      "preguntas": [
        {
          "pregunta": "¿Dónde estaba el rancho?",
          "opciones": [
            "En Zacatecas",
            "En Oaxaca",
            "En Jalisco",
            "En Sonora"
          ]
        },
        {
          "pregunta": "¿Qué hacía la abuela en las mañanas?",
          "opciones": [
            "Tortillas frescas en el comal",
            "Pan",
            "Café",
            "Ordeñar vacas"
          ]
        },
        {
          "pregunta": "¿Qué contaba el abuelo bajo el árbol?",
          "opciones": [
            "Historias de la Revolución",
            "Cuentos de fantasmas",
            "Chistes",
            "Historias de su juventud en la ciudad"
          ]
        },
        {
          "pregunta": "¿Qué le hace sentir niño otra vez?",
          "opciones": [
            "El olor de las tortillas frescas",
            "Ver vacas",
            "Las estrellas",
            "Los gallos"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con would o used to (estado).",
        "pregunta": "We ___ have a cat called Michi.",
        "respuestas": [
          "used to"
        ]
      },
      {
        "instruccion": "Completa con would (acción).",
        "pregunta": "Every Sunday, we ___ go to the park.",
        "respuestas": [
          "would",
          "used to",
          "'d"
        ]
      },
      {
        "instruccion": "Completa con would o used to.",
        "pregunta": "I ___ be very shy when I was little.",
        "respuestas": [
          "used to"
        ]
      },
      {
        "instruccion": "Completa con would always.",
        "pregunta": "My sister ___ always borrow my clothes.",
        "respuestas": [
          "would"
        ]
      },
      {
        "instruccion": "Completa con el pasado simple (una sola vez).",
        "pregunta": "One summer, we ___ (go) to Cancun.",
        "respuestas": [
          "went"
        ]
      },
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "Those were the ___!",
        "respuestas": [
          "days"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Mi abuela hacía tamales cada domingo.",
        "respuestas": [
          "My grandmother would make tamales every Sunday",
          "My grandmother used to make tamales every Sunday",
          "Every Sunday my grandmother would make tamales"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "en aquel entonces",
        "respuestas": [
          "back then",
          "in those days",
          "at that time"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "escondidillas",
        "respuestas": [
          "hide and seek",
          "hide-and-seek"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "When I was a child, I would live in Puebla.",
        "respuestas": [
          "When I was a child, I used to live in Puebla",
          "When I was a child, I lived in Puebla"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "Every summer, we ___ go camping.",
        "opciones": [
          "would",
          "will",
          "would have",
          "are used to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I ___ have long hair when I was a teenager.",
        "opciones": [
          "used to",
          "would",
          "was used to",
          "get used to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "My grandfather ___ tell us funny stories.",
        "opciones": [
          "would always",
          "would always to",
          "always would to",
          "was always"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es incorrecta?",
        "opciones": [
          "We would have a big house.",
          "We used to have a big house.",
          "We would play outside.",
          "We used to play outside."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Back then» significa:",
        "opciones": [
          "En aquel entonces",
          "Regresa",
          "Detrás",
          "Otra vez"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«It reminds me of my childhood» significa:",
        "opciones": [
          "Me recuerda a mi infancia",
          "Me acuerdo de mi infancia siempre",
          "Olvidé mi infancia",
          "Mi infancia fue feliz"
        ]
      },
      {
        "tipo": "listening",
        "audio": "On Fridays, my mom would make pizza, and we'd watch a movie together.",
        "pregunta": "¿Qué hacían los viernes?",
        "opciones": [
          "Pizza y una película",
          "Ir al cine",
          "Comer fuera",
          "Visitar a los abuelos"
        ]
      },
      {
        "tipo": "listening",
        "audio": "We didn't have video games, so we'd invent our own games with sticks and stones.",
        "pregunta": "¿Con qué inventaban juegos?",
        "opciones": [
          "Con palos y piedras",
          "Con videojuegos",
          "Con juguetes caros",
          "Con libros"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Jugábamos hasta que oscurecía.",
        "respuestas": [
          "We would play until dark",
          "We'd play until dark",
          "We used to play until dark",
          "We would play until it got dark",
          "We used to play until it got dark"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¡Qué tiempos aquellos!",
        "respuestas": [
          "Those were the days"
        ]
      }
    ]
  },
  {
    "id": "b2-19",
    "num": 19,
    "titulo": "Gerundio e infinitivo con cambio de significado (remember, stop, try, forget)",
    "contexto": "Memoria y hábitos",
    "explicacion": {
      "es": [
        "Algunos verbos **cambian de significado** según vayan con ***-ing*** o con ***to***. ***Remember / forget + -ing*** = recordar u olvidar algo que **ya pasó**: *I **remember meeting** her at a party.* (Me acuerdo de haberla conocido.)",
        "***Remember / forget + to*** = acordarse u olvidarse de **hacer algo que había que hacer**: ***Remember to lock** the door.* (Acuérdate de cerrar con llave.) *I **forgot to call** my mom.* (Se me olvidó llamarle a mi mamá.)",
        "***Stop + -ing*** = **dejar de** hacer algo: *I **stopped smoking** two years ago.* ***Stop + to*** = **detenerse para** hacer otra cosa: *We **stopped to buy** gas.* (Nos paramos a cargar gasolina.)",
        "***Try + -ing*** = **probar** algo para ver si funciona: ***Try drinking** chamomile tea if you can't sleep.* ***Try + to*** = **intentar / esforzarse** (algo difícil): *I **tried to open** the jar, but I couldn't.*"
      ],
      "tabla": {
        "columnas": [
          "Verbo",
          "+ -ing",
          "+ to"
        ],
        "filas": [
          [
            "remember",
            "recordar algo pasado: I remember visiting Paris.",
            "acordarse de hacer: Remember to buy bread."
          ],
          [
            "forget",
            "olvidar algo pasado: I'll never forget seeing the sea.",
            "olvidarse de hacer: I forgot to pay."
          ],
          [
            "stop",
            "dejar de: She stopped eating meat.",
            "parar para: We stopped to rest."
          ],
          [
            "try",
            "probar: Try restarting the computer.",
            "intentar: I tried to lift it."
          ],
          [
            "regret",
            "arrepentirse: I regret saying that.",
            "lamentar informar: We regret to inform you…"
          ]
        ]
      },
      "ojo": [
        "*I forgot **buying** milk* (olvidé que lo compré) ≠ *I forgot **to buy** milk* (no lo compré).",
        "*He stopped **talking*** (se calló) ≠ *He stopped **to talk*** (se detuvo para platicar).",
        "***Go on + -ing*** = seguir haciendo lo mismo; ***go on + to*** = pasar a otra cosa: *After her degree, she went on **to study** medicine.*",
        "***Need + -ing*** = necesita ser… (pasivo): *The car **needs washing**.* (El carro necesita lavarse.)",
        "Trucos para la memoria: ***jog my memory*** (refrescar la memoria), ***it slipped my mind*** (se me pasó), ***on the tip of my tongue*** (en la punta de la lengua)."
      ],
      "en": [
        "Remember and forget plus ing refer to the past: I remember meeting her at a party.",
        "Remember and forget plus to refer to things you have to do: Remember to lock the door. I forgot to call my mom.",
        "Stop smoking means you don't smoke anymore. Stop to buy gas means you stop in order to buy gas.",
        "Try drinking tea means test it. Try to open the jar means make an effort."
      ]
    },
    "vocabulario": [
      {
        "en": "I remember meeting her.",
        "es": "me acuerdo de haberla conocido",
        "imagen": "Persona sonriendo al recordar una fiesta",
        "ejemplo": [
          "I remember meeting her at a wedding.",
          "Me acuerdo de haberla conocido en una boda."
        ]
      },
      {
        "en": "Remember to lock the door.",
        "es": "acuérdate de cerrar con llave",
        "imagen": "Mano girando una llave en la cerradura",
        "ejemplo": [
          "Remember to lock the door when you leave.",
          "Acuérdate de cerrar con llave cuando salgas."
        ]
      },
      {
        "en": "I forgot to call my mom.",
        "es": "se me olvidó llamarle a mi mamá",
        "imagen": "Persona apenada mirando su celular de noche",
        "ejemplo": [
          "I forgot to call my mom on her birthday.",
          "Se me olvidó llamarle a mi mamá en su cumpleaños."
        ]
      },
      {
        "en": "I'll never forget seeing the sea.",
        "es": "nunca olvidaré haber visto el mar",
        "imagen": "Niño frente al mar con los brazos abiertos",
        "ejemplo": [
          "I'll never forget seeing the sea for the first time.",
          "Nunca olvidaré haber visto el mar por primera vez."
        ]
      },
      {
        "en": "I stopped smoking.",
        "es": "dejé de fumar",
        "imagen": "Persona rompiendo un cigarro",
        "ejemplo": [
          "I stopped smoking two years ago.",
          "Dejé de fumar hace dos años."
        ]
      },
      {
        "en": "We stopped to buy gas.",
        "es": "nos paramos a cargar gasolina",
        "imagen": "Carro en una gasolinera en la carretera",
        "ejemplo": [
          "We stopped to buy gas on the way to Puebla.",
          "Nos paramos a cargar gasolina camino a Puebla."
        ]
      },
      {
        "en": "Try drinking chamomile tea.",
        "es": "prueba tomar té de manzanilla",
        "imagen": "Taza de té de manzanilla junto a la cama",
        "ejemplo": [
          "If you can't sleep, try drinking chamomile tea.",
          "Si no puedes dormir, prueba tomar té de manzanilla."
        ]
      },
      {
        "en": "I tried to open the jar.",
        "es": "intenté abrir el frasco",
        "imagen": "Persona esforzándose para abrir un frasco",
        "ejemplo": [
          "I tried to open the jar, but it was too tight.",
          "Intenté abrir el frasco, pero estaba muy apretado."
        ]
      },
      {
        "en": "Try restarting the computer.",
        "es": "prueba reiniciar la computadora",
        "imagen": "Persona presionando el botón de encendido de una laptop",
        "ejemplo": [
          "If it doesn't work, try restarting the computer.",
          "Si no funciona, prueba reiniciar la computadora."
        ]
      },
      {
        "en": "I regret saying that.",
        "es": "me arrepiento de haber dicho eso",
        "imagen": "Persona con la mano en la boca arrepentida",
        "ejemplo": [
          "I regret saying that to my friend.",
          "Me arrepiento de haberle dicho eso a mi amigo."
        ]
      },
      {
        "en": "We regret to inform you",
        "es": "lamentamos informarle",
        "imagen": "Carta formal sobre un escritorio, sin texto legible",
        "ejemplo": [
          "We regret to inform you that the flight has been canceled.",
          "Lamentamos informarle que el vuelo ha sido cancelado."
        ]
      },
      {
        "en": "She went on to study medicine.",
        "es": "después pasó a estudiar medicina",
        "imagen": "Joven con bata médica en una universidad",
        "ejemplo": [
          "After her degree in biology, she went on to study medicine.",
          "Después de biología, pasó a estudiar medicina."
        ]
      },
      {
        "en": "The car needs washing.",
        "es": "el carro necesita lavarse",
        "imagen": "Carro lleno de polvo y lodo",
        "ejemplo": [
          "The car needs washing after the trip.",
          "El carro necesita lavarse después del viaje."
        ]
      },
      {
        "en": "It slipped my mind.",
        "es": "se me pasó",
        "imagen": "Persona dándose una palmada en la frente",
        "ejemplo": [
          "Sorry, your birthday slipped my mind.",
          "Perdón, se me pasó tu cumpleaños."
        ]
      },
      {
        "en": "It's on the tip of my tongue.",
        "es": "lo tengo en la punta de la lengua",
        "imagen": "Persona pensando con los ojos cerrados",
        "ejemplo": [
          "What's his name? It's on the tip of my tongue!",
          "¿Cómo se llama? ¡Lo tengo en la punta de la lengua!"
        ]
      },
      {
        "en": "He stopped talking.",
        "es": "se calló / dejó de hablar",
        "imagen": "Persona callándose de repente en una junta",
        "ejemplo": [
          "When the boss came in, everybody stopped talking.",
          "Cuando entró el jefe, todos dejaron de hablar."
        ]
      }
    ],
    "grupos": [
      {
        "id": "memoria",
        "titulo": "La memoria",
        "icono": "🧠",
        "patron": [
          "I remember…",
          "I can't remember…",
          "It slipped my mind."
        ],
        "palabras": [
          {
            "en": "a good memory",
            "es": "buena memoria",
            "imagen": "Persona recitando números de memoria",
            "ejemplo": [
              "My grandmother has a very good memory.",
              "Mi abuela tiene muy buena memoria."
            ]
          },
          {
            "en": "forgetful",
            "es": "olvidadizo",
            "imagen": "Persona buscando sus lentes que tiene en la cabeza",
            "ejemplo": [
              "I'm so forgetful. I always lose my keys.",
              "Soy muy olvidadizo. Siempre pierdo mis llaves."
            ]
          },
          {
            "en": "remind",
            "es": "recordarle a alguien",
            "imagen": "Persona pegando una nota adhesiva en una puerta",
            "ejemplo": [
              "Can you remind me to buy bread?",
              "¿Me recuerdas comprar pan?"
            ]
          },
          {
            "en": "jog my memory",
            "es": "refrescarme la memoria",
            "imagen": "Persona mirando fotos para recordar",
            "ejemplo": [
              "Show me the photo. It might jog my memory.",
              "Enséñame la foto. Tal vez me refresque la memoria."
            ]
          },
          {
            "en": "memorize",
            "es": "memorizar",
            "imagen": "Estudiante repitiendo notas con los ojos cerrados",
            "ejemplo": [
              "I have to memorize fifty words for the test.",
              "Tengo que memorizar cincuenta palabras para el examen."
            ]
          },
          {
            "en": "a reminder",
            "es": "un recordatorio",
            "imagen": "Celular con una alarma de recordatorio",
            "ejemplo": [
              "I set a reminder on my phone.",
              "Puse un recordatorio en mi celular."
            ]
          }
        ]
      },
      {
        "id": "habitos",
        "titulo": "Cambiar hábitos",
        "icono": "🔄",
        "patron": [
          "I've stopped…",
          "I'm trying to…",
          "Try…-ing"
        ],
        "palabras": [
          {
            "en": "stopped eating sugar",
            "es": "dejé de comer azúcar",
            "imagen": "Persona rechazando un pastel y tomando fruta",
            "ejemplo": [
              "I stopped eating sugar a month ago.",
              "Hace un mes dejé de comer azúcar."
            ]
          },
          {
            "en": "trying to sleep more",
            "es": "tratando de dormir más",
            "imagen": "Persona apagando el celular antes de dormir",
            "ejemplo": [
              "I'm trying to sleep at least seven hours.",
              "Estoy tratando de dormir por lo menos siete horas."
            ]
          },
          {
            "en": "try walking",
            "es": "prueba caminar",
            "imagen": "Persona caminando en un parque arbolado",
            "ejemplo": [
              "Try walking to work. It's good for you.",
              "Prueba caminar al trabajo. Te hace bien."
            ]
          },
          {
            "en": "quit social media",
            "es": "dejar las redes sociales",
            "imagen": "Persona borrando una app del celular",
            "ejemplo": [
              "She quit social media for a month.",
              "Dejó las redes sociales un mes."
            ]
          },
          {
            "en": "break a habit",
            "es": "romper un hábito",
            "imagen": "Persona tirando a la basura una cajetilla de cigarros",
            "ejemplo": [
              "It takes time to break a bad habit.",
              "Toma tiempo romper un mal hábito."
            ]
          },
          {
            "en": "keep doing",
            "es": "seguir haciendo",
            "imagen": "Corredora sonriente entrenando bajo la lluvia",
            "ejemplo": [
              "Keep doing exercise, even when you're busy.",
              "Sigue haciendo ejercicio, aunque estés ocupado."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I remember meeting her at a wedding.",
        "es": "Me acuerdo de haberla conocido en una boda."
      },
      {
        "en": "Remember to lock the door when you leave.",
        "es": "Acuérdate de cerrar con llave cuando salgas."
      },
      {
        "en": "I forgot to call my mom on her birthday.",
        "es": "Se me olvidó llamarle a mi mamá en su cumpleaños."
      },
      {
        "en": "I stopped smoking two years ago.",
        "es": "Dejé de fumar hace dos años."
      },
      {
        "en": "We stopped to buy gas on the way to Puebla.",
        "es": "Nos paramos a cargar gasolina camino a Puebla."
      },
      {
        "en": "If you can't sleep, try drinking chamomile tea.",
        "es": "Si no puedes dormir, prueba tomar té de manzanilla."
      },
      {
        "en": "I tried to open the jar, but it was too tight.",
        "es": "Intenté abrir el frasco, pero estaba muy apretado."
      },
      {
        "en": "Sorry, your birthday slipped my mind.",
        "es": "Perdón, se me pasó tu cumpleaños."
      },
      {
        "en": "What's his name? It's on the tip of my tongue!",
        "es": "¿Cómo se llama? ¡Lo tengo en la punta de la lengua!"
      },
      {
        "en": "When the boss came in, everybody stopped talking.",
        "es": "Cuando entró el jefe, todos dejaron de hablar."
      }
    ],
    "frases": [
      {
        "en": "I remember going to the market with my grandmother every Saturday when I was little.",
        "es": "Me acuerdo de ir al mercado con mi abuela cada sábado cuando era chiquito.",
        "imagen": "Abuela y nieto caminando entre puestos de un mercado"
      },
      {
        "en": "Don't forget to take your medicine after breakfast. The doctor was very clear.",
        "es": "No olvides tomarte la medicina después del desayuno. El doctor fue muy claro.",
        "imagen": "Pastillas junto a un plato de desayuno"
      },
      {
        "en": "I stopped drinking coffee in the afternoon, and now I sleep much better.",
        "es": "Dejé de tomar café en la tarde y ahora duermo mucho mejor.",
        "imagen": "Persona durmiendo tranquila con una taza de té en el buró"
      },
      {
        "en": "On the way to the beach, we stopped to buy fresh coconuts from a man on the road.",
        "es": "De camino a la playa nos paramos a comprar cocos frescos a un señor en la carretera.",
        "imagen": "Vendedor de cocos en la orilla de una carretera tropical"
      },
      {
        "en": "I tried to explain the problem in English, but I couldn't find the right words.",
        "es": "Traté de explicar el problema en inglés, pero no encontraba las palabras.",
        "imagen": "Persona frustrada intentando explicar algo con las manos"
      },
      {
        "en": "If the baby won't sleep, try singing her a song or taking her for a walk.",
        "es": "Si la bebé no se duerme, prueba cantarle una canción o sacarla a pasear.",
        "imagen": "Papá arrullando a su bebé mientras canta"
      },
      {
        "en": "I'll never forget arriving in New York and seeing the city lights for the first time.",
        "es": "Nunca olvidaré llegar a Nueva York y ver las luces de la ciudad por primera vez.",
        "imagen": "Persona maravillada mirando rascacielos iluminados"
      },
      {
        "en": "I don't remember saying that. Are you sure it was me?",
        "es": "No me acuerdo de haber dicho eso. ¿Seguro que fui yo?",
        "imagen": "Persona confundida con la mano en el pecho"
      },
      {
        "en": "Please remember to turn off the lights and close the windows before you leave the office.",
        "es": "Por favor acuérdense de apagar las luces y cerrar las ventanas antes de salir de la oficina.",
        "imagen": "Persona apagando las luces de una oficina al salir"
      },
      {
        "en": "After working as a waiter for years, he went on to open three successful restaurants.",
        "es": "Después de trabajar años como mesero, pasó a abrir tres restaurantes exitosos.",
        "imagen": "Dueño orgulloso frente a su restaurante"
      }
    ],
    "listening": [
      {
        "audio": "Did you remember to buy the tortillas? Oh no, I completely forgot!",
        "pregunta": "¿Qué olvidó comprar?",
        "opciones": [
          "Las tortillas",
          "El pan",
          "La leche",
          "Los huevos"
        ]
      },
      {
        "audio": "We stopped to take photos of the volcano on our way to Puebla.",
        "pregunta": "¿Para qué se pararon?",
        "opciones": [
          "Para tomar fotos del volcán",
          "Para comer",
          "Para cargar gasolina",
          "Para descansar"
        ]
      },
      {
        "audio": "My father stopped working when he was sixty-five, but he still goes to the office to visit his friends.",
        "pregunta": "¿Cuándo dejó de trabajar el papá?",
        "opciones": [
          "A los sesenta y cinco",
          "A los cincuenta y cinco",
          "A los setenta",
          "Sigue trabajando"
        ]
      },
      {
        "audio": "If your phone is slow, try deleting the apps you don't use.",
        "pregunta": "¿Qué le recomienda?",
        "opciones": [
          "Borrar las apps que no usa",
          "Comprar otro celular",
          "Apagarlo",
          "Cargarlo"
        ]
      },
      {
        "audio": "I remember seeing that movie when I was ten. It scared me a lot.",
        "pregunta": "¿Qué recuerda?",
        "opciones": [
          "Haber visto la película a los diez años",
          "El nombre del actor",
          "Dónde la vio",
          "Con quién la vio"
        ]
      }
    ],
    "lectura": {
      "titulo": "Tips for a better memory",
      "texto": "Do you often forget to send important emails or to buy things at the supermarket? You're not alone. Experts say that stress and lack of sleep are two of the main reasons why we forget things. Here are some tips. First, try writing things down. Many people stop using notebooks because they have phones, but writing by hand helps the brain remember. Second, remember to sleep at least seven hours; during sleep, the brain organizes the information of the day. Third, if you can't remember a name, try thinking about the place where you met the person. This often jogs your memory. Fourth, stop doing many things at the same time. When we try to do three things at once, we don't pay attention to any of them. Finally, keep learning new things, like a language or an instrument. Older people who never stop learning usually have a better memory. And don't forget to drink water!",
      "preguntas": [
        {
          "pregunta": "¿Cuáles son dos razones principales por las que olvidamos?",
          "opciones": [
            "El estrés y la falta de sueño",
            "La edad y la comida",
            "El celular y la tele",
            "El café y el azúcar"
          ]
        },
        {
          "pregunta": "¿Por qué ayuda escribir a mano?",
          "opciones": [
            "Ayuda al cerebro a recordar",
            "Es más rápido",
            "Es más bonito",
            "Ahorra batería"
          ]
        },
        {
          "pregunta": "¿Qué hacer si no recuerdas un nombre?",
          "opciones": [
            "Pensar en el lugar donde conociste a la persona",
            "Preguntar a alguien",
            "Buscar en el celular",
            "Dormir"
          ]
        },
        {
          "pregunta": "¿Qué pasa cuando hacemos tres cosas a la vez?",
          "opciones": [
            "No ponemos atención a ninguna",
            "Terminamos más rápido",
            "Recordamos más",
            "Nos da sueño"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con -ing o to + verbo.",
        "pregunta": "Remember ___ (buy) milk on your way home.",
        "respuestas": [
          "to buy"
        ]
      },
      {
        "instruccion": "Completa con -ing o to + verbo.",
        "pregunta": "I remember ___ (visit) this town as a child.",
        "respuestas": [
          "visiting"
        ]
      },
      {
        "instruccion": "Completa con -ing o to + verbo.",
        "pregunta": "He stopped ___ (smoke) last year. (ya no fuma)",
        "respuestas": [
          "smoking"
        ]
      },
      {
        "instruccion": "Completa con -ing o to + verbo.",
        "pregunta": "We stopped ___ (eat) at a small restaurant. (para comer)",
        "respuestas": [
          "to eat"
        ]
      },
      {
        "instruccion": "Completa con -ing o to + verbo.",
        "pregunta": "I tried ___ (move) the sofa, but it was too heavy.",
        "respuestas": [
          "to move"
        ]
      },
      {
        "instruccion": "Completa con -ing o to + verbo.",
        "pregunta": "If you have a headache, try ___ (drink) more water.",
        "respuestas": [
          "drinking"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Se me olvidó pagar.",
        "respuestas": [
          "I forgot to pay"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Dejé de comer carne.",
        "respuestas": [
          "I stopped eating meat",
          "I quit eating meat"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Lo tengo en la punta de la lengua.",
        "respuestas": [
          "It's on the tip of my tongue",
          "It is on the tip of my tongue"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "Don't forget locking the door.",
        "respuestas": [
          "Don't forget to lock the door",
          "Do not forget to lock the door"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "Did you remember ___ the plants?",
        "opciones": [
          "to water",
          "watering",
          "water",
          "watered"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I'll never forget ___ my first salary.",
        "opciones": [
          "receiving",
          "to receive",
          "receive",
          "received"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We were tired, so we stopped ___ a coffee.",
        "opciones": [
          "to have",
          "having",
          "have",
          "had"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The neighbors stopped ___ when I asked them.",
        "opciones": [
          "shouting",
          "to shout",
          "shout",
          "shouted"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Try turning it off and on again» significa:",
        "opciones": [
          "Prueba apagarlo y prenderlo",
          "Intenta con esfuerzo apagarlo",
          "No lo apagues",
          "Apágalo para siempre"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«It slipped my mind» significa:",
        "opciones": [
          "Se me pasó / se me olvidó",
          "Me resbalé",
          "Me cambió la mente",
          "Lo recordé"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I tried to call you three times, but your phone was off.",
        "pregunta": "¿Cuántas veces intentó llamar?",
        "opciones": [
          "Tres",
          "Dos",
          "Cinco",
          "Una"
        ]
      },
      {
        "tipo": "listening",
        "audio": "She stopped eating sugar, and now she has much more energy.",
        "pregunta": "¿Qué dejó de comer?",
        "opciones": [
          "Azúcar",
          "Carne",
          "Pan",
          "Grasa"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Acuérdate de llamarme.",
        "respuestas": [
          "Remember to call me",
          "Don't forget to call me"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Me acuerdo de haberlo visto.",
        "respuestas": [
          "I remember seeing him",
          "I remember seeing it",
          "I remember having seen him"
        ]
      }
    ]
  },
  {
    "id": "b2-20",
    "num": 20,
    "titulo": "Cuantificadores avanzados (each, every, all, none, whole)",
    "contexto": "Encuestas y estadísticas",
    "explicacion": {
      "es": [
        "***Every*** y ***each*** van con sustantivo **singular** y verbo **singular**. ***Every*** ve al grupo **como un todo** (*todos*): ***Every** student **has** a laptop.* ***Each*** se fija en **cada uno por separado**: ***Each** participant **received** a gift.* Con dos cosas solo se usa ***each***: *She had a ring on **each** hand.*",
        "***All*** va con **plural o incontable**: ***All** the students passed. **All** the water is clean.* ***The whole*** + **singular** = **todo / entero**: *I read **the whole book** in one day.* (todo el libro)",
        "***None (of)*** = **ninguno**: ***None of** the participants **knew** the answer.* ***No*** + sustantivo: *There are **no** tickets left.* ***Most (of)*** = **la mayoría**: ***Most** people prefer…*",
        "En **estadísticas** se usan mucho: ***a third of, half of, the majority of, a minority of, nearly all, hardly any, every other day*** (un día sí y uno no)."
      ],
      "tabla": {
        "columnas": [
          "Palabra",
          "Con qué va",
          "Ejemplo"
        ],
        "filas": [
          [
            "every",
            "singular (todo el grupo)",
            "Every room has a balcony."
          ],
          [
            "each",
            "singular (uno por uno)",
            "Each person paid 200 pesos."
          ],
          [
            "all (of)",
            "plural / incontable",
            "All of my friends came."
          ],
          [
            "the whole",
            "singular",
            "We spent the whole day at the beach."
          ],
          [
            "none of",
            "plural o incontable",
            "None of them answered."
          ],
          [
            "most (of)",
            "plural / incontable",
            "Most of the people agreed."
          ]
        ]
      },
      "ojo": [
        "*Every students* ❌ → ***Every student*** ✅ (singular).",
        "***All day*** = ***the whole day*** (todo el día). *Every day* = cada día (todos los días). ¡No es lo mismo!",
        "***Each of*** + plural pero verbo singular: ***Each of** the rooms **has** a TV.*",
        "***None of*** + plural acepta verbo singular o plural: *None of the students **was / were** late.* El singular es más formal.",
        "***Everyone / everybody*** van con verbo **singular**: *Everyone **likes** music.*"
      ],
      "en": [
        "Every and each go with singular nouns: Every student has a laptop. Each participant received a gift.",
        "All goes with plural or uncountable nouns: All the students passed. The whole means entire: I read the whole book.",
        "None of means not one: None of the participants knew the answer.",
        "In statistics: a third of, half of, the majority of, hardly any."
      ]
    },
    "vocabulario": [
      {
        "en": "every student",
        "es": "todos los estudiantes / cada estudiante",
        "imagen": "Salón de clases con laptops en cada banca",
        "ejemplo": [
          "Every student has a laptop in this school.",
          "En esta escuela todos los estudiantes tienen laptop."
        ]
      },
      {
        "en": "each participant",
        "es": "cada participante",
        "imagen": "Persona entregando bolsas de regalo una por una",
        "ejemplo": [
          "Each participant received a gift.",
          "Cada participante recibió un regalo."
        ]
      },
      {
        "en": "all the students",
        "es": "todos los estudiantes",
        "imagen": "Grupo de graduados lanzando birretes",
        "ejemplo": [
          "All the students passed the exam.",
          "Todos los estudiantes aprobaron el examen."
        ]
      },
      {
        "en": "the whole day",
        "es": "todo el día",
        "imagen": "Familia en la playa del amanecer al atardecer",
        "ejemplo": [
          "We spent the whole day at the beach.",
          "Pasamos todo el día en la playa."
        ]
      },
      {
        "en": "none of them",
        "es": "ninguno de ellos",
        "imagen": "Grupo de personas encogiéndose de hombros",
        "ejemplo": [
          "I asked five people, but none of them knew the answer.",
          "Le pregunté a cinco personas, pero ninguna sabía la respuesta."
        ]
      },
      {
        "en": "most people",
        "es": "la mayoría de la gente",
        "imagen": "Gráfica de pastel con una gran porción de color",
        "ejemplo": [
          "Most people prefer to work from home.",
          "La mayoría de la gente prefiere trabajar desde casa."
        ]
      },
      {
        "en": "half of",
        "es": "la mitad de",
        "imagen": "Gráfica de pastel dividida a la mitad",
        "ejemplo": [
          "Half of the participants were women.",
          "La mitad de los participantes eran mujeres."
        ]
      },
      {
        "en": "a third of",
        "es": "un tercio de",
        "imagen": "Gráfica con un tercio resaltado",
        "ejemplo": [
          "A third of the population lives in big cities.",
          "Un tercio de la población vive en ciudades grandes."
        ]
      },
      {
        "en": "the majority of",
        "es": "la mayoría de",
        "imagen": "Grupo grande de personas levantando la mano",
        "ejemplo": [
          "The majority of young people use social media every day.",
          "La mayoría de los jóvenes usa redes sociales todos los días."
        ]
      },
      {
        "en": "hardly any",
        "es": "casi ningún / casi nada",
        "imagen": "Estante de tienda casi vacío",
        "ejemplo": [
          "There were hardly any people at the concert.",
          "Casi no había gente en el concierto."
        ]
      },
      {
        "en": "every other day",
        "es": "un día sí y uno no",
        "imagen": "Calendario con días alternos marcados",
        "ejemplo": [
          "I go to the gym every other day.",
          "Voy al gimnasio un día sí y uno no."
        ]
      },
      {
        "en": "nearly all",
        "es": "casi todos",
        "imagen": "Estadio casi lleno con pocos asientos vacíos",
        "ejemplo": [
          "Nearly all the tickets have been sold.",
          "Ya se vendieron casi todos los boletos."
        ]
      },
      {
        "en": "a survey",
        "es": "una encuesta",
        "imagen": "Persona contestando preguntas en una tablet",
        "ejemplo": [
          "According to the survey, most people sleep less than seven hours.",
          "Según la encuesta, la mayoría duerme menos de siete horas."
        ]
      },
      {
        "en": "respondents",
        "es": "encuestados",
        "imagen": "Personas contestando una encuesta en la calle",
        "ejemplo": [
          "Sixty percent of the respondents said yes.",
          "El sesenta por ciento de los encuestados dijo que sí."
        ]
      },
      {
        "en": "on each side",
        "es": "de cada lado",
        "imagen": "Calle con árboles a ambos lados",
        "ejemplo": [
          "There are trees on each side of the street.",
          "Hay árboles de cada lado de la calle."
        ]
      },
      {
        "en": "the whole country",
        "es": "todo el país",
        "imagen": "Mapa de México iluminado",
        "ejemplo": [
          "The news spread across the whole country.",
          "La noticia se difundió por todo el país."
        ]
      }
    ],
    "grupos": [
      {
        "id": "estadisticas",
        "titulo": "Hablar de estadísticas",
        "icono": "📊",
        "patron": [
          "According to…",
          "…percent of…",
          "The results show that…"
        ],
        "palabras": [
          {
            "en": "percent",
            "es": "por ciento",
            "imagen": "Gráfica de barras con porcentajes",
            "ejemplo": [
              "Seventy percent of Mexicans have a smartphone.",
              "El setenta por ciento de los mexicanos tiene teléfono inteligente."
            ]
          },
          {
            "en": "the results show",
            "es": "los resultados muestran",
            "imagen": "Presentación con gráficas en una pantalla",
            "ejemplo": [
              "The results show that people are reading less.",
              "Los resultados muestran que la gente lee menos."
            ]
          },
          {
            "en": "an increase",
            "es": "un aumento",
            "imagen": "Gráfica con una flecha subiendo",
            "ejemplo": [
              "There has been an increase in online shopping.",
              "Ha habido un aumento en las compras en línea."
            ]
          },
          {
            "en": "a decrease",
            "es": "una disminución",
            "imagen": "Gráfica con una flecha bajando",
            "ejemplo": [
              "There was a decrease in the number of smokers.",
              "Hubo una disminución en el número de fumadores."
            ]
          },
          {
            "en": "on average",
            "es": "en promedio",
            "imagen": "Persona calculando con una calculadora",
            "ejemplo": [
              "On average, people check their phones eighty times a day.",
              "En promedio, la gente revisa su celular ochenta veces al día."
            ]
          },
          {
            "en": "the vast majority",
            "es": "la gran mayoría",
            "imagen": "Multitud enorme en una plaza",
            "ejemplo": [
              "The vast majority of respondents were happy.",
              "La gran mayoría de los encuestados estaba contenta."
            ]
          }
        ]
      },
      {
        "id": "todo",
        "titulo": "Todo, cada, ninguno",
        "icono": "🔢",
        "patron": [
          "everyone",
          "each of us",
          "no one"
        ],
        "palabras": [
          {
            "en": "everyone",
            "es": "todos / todo el mundo",
            "imagen": "Grupo de amigos sonriendo a la cámara",
            "ejemplo": [
              "Everyone was invited to the party.",
              "Todos fueron invitados a la fiesta."
            ]
          },
          {
            "en": "each of us",
            "es": "cada uno de nosotros",
            "imagen": "Amigos dividiendo la cuenta en un restaurante",
            "ejemplo": [
              "Each of us paid three hundred pesos.",
              "Cada uno de nosotros pagó trescientos pesos."
            ]
          },
          {
            "en": "no one",
            "es": "nadie",
            "imagen": "Sala de cine vacía",
            "ejemplo": [
              "No one came to the meeting.",
              "Nadie vino a la junta."
            ]
          },
          {
            "en": "both of them",
            "es": "los dos",
            "imagen": "Dos hermanos idénticos sonriendo",
            "ejemplo": [
              "Both of them are engineers.",
              "Los dos son ingenieros."
            ]
          },
          {
            "en": "all day long",
            "es": "todo el santo día",
            "imagen": "Persona trabajando en su escritorio con la luz cambiando",
            "ejemplo": [
              "It rained all day long.",
              "Llovió todo el santo día."
            ]
          },
          {
            "en": "every single",
            "es": "cada uno de los / absolutamente todos",
            "imagen": "Persona revisando cada documento de una pila",
            "ejemplo": [
              "I checked every single email.",
              "Revisé absolutamente todos los correos."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Every student has a laptop in this school.",
        "es": "En esta escuela todos los estudiantes tienen laptop."
      },
      {
        "en": "Each participant received a gift.",
        "es": "Cada participante recibió un regalo."
      },
      {
        "en": "We spent the whole day at the beach.",
        "es": "Pasamos todo el día en la playa."
      },
      {
        "en": "I asked five people, but none of them knew the answer.",
        "es": "Le pregunté a cinco personas, pero ninguna sabía la respuesta."
      },
      {
        "en": "Most people prefer to work from home.",
        "es": "La mayoría de la gente prefiere trabajar desde casa."
      },
      {
        "en": "There were hardly any people at the concert.",
        "es": "Casi no había gente en el concierto."
      },
      {
        "en": "I go to the gym every other day.",
        "es": "Voy al gimnasio un día sí y uno no."
      },
      {
        "en": "Nearly all the tickets have been sold.",
        "es": "Ya se vendieron casi todos los boletos."
      },
      {
        "en": "On average, people check their phones eighty times a day.",
        "es": "En promedio, la gente revisa su celular ochenta veces al día."
      },
      {
        "en": "Each of us paid three hundred pesos.",
        "es": "Cada uno de nosotros pagó trescientos pesos."
      }
    ],
    "frases": [
      {
        "en": "According to the survey, the majority of young people would like to work abroad at some point.",
        "es": "Según la encuesta, la mayoría de los jóvenes quisiera trabajar en el extranjero en algún momento.",
        "imagen": "Jóvenes con maletas mirando un mapa del mundo"
      },
      {
        "en": "Every room in the house has a window, but none of them has air conditioning.",
        "es": "Cada cuarto de la casa tiene ventana, pero ninguno tiene aire acondicionado.",
        "imagen": "Casa con ventanas abiertas en un día caluroso"
      },
      {
        "en": "I spent the whole weekend studying, so I hardly saw any of my friends.",
        "es": "Me pasé todo el fin de semana estudiando, así que casi no vi a mis amigos.",
        "imagen": "Estudiante rodeado de libros un sábado"
      },
      {
        "en": "Each employee will receive a bonus at the end of the year.",
        "es": "Cada empleado recibirá un bono a fin de año.",
        "imagen": "Jefa entregando sobres a sus empleados"
      },
      {
        "en": "About half of the respondents said they read fewer than two books a year.",
        "es": "Cerca de la mitad de los encuestados dijo que lee menos de dos libros al año.",
        "imagen": "Librería con pocos clientes"
      },
      {
        "en": "Not all the students agreed with the new rules, but most of them accepted them.",
        "es": "No todos los estudiantes estuvieron de acuerdo con las nuevas reglas, pero la mayoría las aceptó.",
        "imagen": "Asamblea estudiantil con alumnos votando"
      },
      {
        "en": "A third of the food produced in the world is wasted every year.",
        "es": "Un tercio de la comida producida en el mundo se desperdicia cada año.",
        "imagen": "Bote de basura lleno de fruta y pan"
      },
      {
        "en": "The whole family came to my graduation, even my grandparents from Sonora.",
        "es": "Toda la familia vino a mi graduación, hasta mis abuelos de Sonora.",
        "imagen": "Familia grande abrazando a una graduada"
      },
      {
        "en": "Nearly all the people who answered the survey said they use their phones in bed.",
        "es": "Casi todas las personas que contestaron la encuesta dijeron que usan el celular en la cama.",
        "imagen": "Persona en la cama iluminada por la pantalla del celular"
      },
      {
        "en": "None of the restaurants in the area were open after ten, so we cooked at home.",
        "es": "Ninguno de los restaurantes de la zona estaba abierto después de las diez, así que cocinamos en casa.",
        "imagen": "Calle con restaurantes cerrados de noche"
      }
    ],
    "listening": [
      {
        "audio": "Sixty percent of the people we interviewed said they don't sleep enough.",
        "pregunta": "¿Qué porcentaje no duerme suficiente?",
        "opciones": [
          "Sesenta por ciento",
          "Dieciséis por ciento",
          "Seis por ciento",
          "Noventa por ciento"
        ]
      },
      {
        "audio": "Each student must bring a photo and a copy of their birth certificate.",
        "pregunta": "¿Qué debe llevar cada estudiante?",
        "opciones": [
          "Una foto y una copia de su acta de nacimiento",
          "Un cuaderno",
          "Dinero",
          "Una carta"
        ]
      },
      {
        "audio": "None of my friends could come to the party, so I celebrated with my family.",
        "pregunta": "¿Con quién celebró?",
        "opciones": [
          "Con su familia",
          "Con sus amigos",
          "Solo",
          "Con sus compañeros de trabajo"
        ]
      },
      {
        "audio": "We worked the whole night to finish the project on time.",
        "pregunta": "¿Cuánto tiempo trabajaron?",
        "opciones": [
          "Toda la noche",
          "Una hora",
          "Toda la semana",
          "Medio día"
        ]
      },
      {
        "audio": "I water the plants every other day, but in summer I water them every day.",
        "pregunta": "¿Cada cuándo riega en verano?",
        "opciones": [
          "Todos los días",
          "Un día sí y uno no",
          "Cada semana",
          "Dos veces al día"
        ]
      }
    ],
    "lectura": {
      "titulo": "How do Mexicans spend their free time?",
      "texto": "A recent survey asked two thousand Mexicans how they spend their free time. The results were interesting. The vast majority of respondents, about eighty percent, said that they watch TV or streaming services every day. More than half of them use social media for at least two hours a day. However, only a third of the people said they practice a sport regularly, and hardly any of them read books for pleasure. Interestingly, nearly all the respondents said that spending time with their family is their favorite activity. Most people meet their relatives every weekend, and each family has its own traditions, from Sunday barbecues to long lunches at grandma's house. Young people are different, though: none of the respondents under twenty-five said that family time was their favorite activity. They preferred going out with friends. On average, Mexicans have about four hours of free time a day.",
      "preguntas": [
        {
          "pregunta": "¿Cuántas personas contestaron la encuesta?",
          "opciones": [
            "Dos mil",
            "Doscientas",
            "Veinte mil",
            "Mil"
          ]
        },
        {
          "pregunta": "¿Qué porcentaje ve televisión o streaming diario?",
          "opciones": [
            "Alrededor del ochenta por ciento",
            "La mitad",
            "Un tercio",
            "Casi nadie"
          ]
        },
        {
          "pregunta": "¿Cuál es la actividad favorita de casi todos?",
          "opciones": [
            "Pasar tiempo con la familia",
            "Ver la tele",
            "Hacer deporte",
            "Leer"
          ]
        },
        {
          "pregunta": "¿Qué prefieren los menores de veinticinco?",
          "opciones": [
            "Salir con amigos",
            "Estar con la familia",
            "Leer",
            "Hacer deporte"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con every, each o all.",
        "pregunta": "___ student needs a dictionary.",
        "respuestas": [
          "Every",
          "Each"
        ]
      },
      {
        "instruccion": "Completa con every, each o all.",
        "pregunta": "___ the guests arrived on time.",
        "respuestas": [
          "All"
        ]
      },
      {
        "instruccion": "Completa con every, each o all.",
        "pregunta": "She wore a bracelet on ___ wrist.",
        "respuestas": [
          "each"
        ]
      },
      {
        "instruccion": "Completa con whole o all.",
        "pregunta": "I ate the ___ pizza.",
        "respuestas": [
          "whole"
        ]
      },
      {
        "instruccion": "Completa con none o no.",
        "pregunta": "___ of my friends lives near me.",
        "respuestas": [
          "None"
        ]
      },
      {
        "instruccion": "Completa con is o are.",
        "pregunta": "Every room ___ clean.",
        "respuestas": [
          "is"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "la mayoría de la gente",
        "respuestas": [
          "most people",
          "the majority of people"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "un día sí y uno no",
        "respuestas": [
          "every other day"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Pasamos todo el día en la playa.",
        "respuestas": [
          "We spent the whole day at the beach",
          "We spent all day at the beach"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "Every students have a book.",
        "respuestas": [
          "Every student has a book",
          "All students have a book",
          "All the students have a book"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "___ child received a present.",
        "opciones": [
          "Each",
          "All",
          "Both",
          "Most"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I stayed in bed ___ morning.",
        "opciones": [
          "the whole",
          "every",
          "each",
          "all of"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ of the restaurants were open. We went home hungry.",
        "opciones": [
          "None",
          "No",
          "Every",
          "Each"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ people think that the city is too expensive.",
        "opciones": [
          "Most",
          "Most of",
          "Every",
          "Each"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Hardly any» significa:",
        "opciones": [
          "Casi ningún / casi nada",
          "Muchos",
          "Todos",
          "Algunos"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Everyone ___ to be happy.",
        "opciones": [
          "wants",
          "want",
          "are wanting",
          "wanting"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The majority of the employees voted for a four-day week.",
        "pregunta": "¿Por qué votó la mayoría?",
        "opciones": [
          "Por una semana de cuatro días",
          "Por más sueldo",
          "Por trabajar desde casa",
          "Por más vacaciones"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Every single seat on the plane was taken, so I had to wait for the next flight.",
        "pregunta": "¿Por qué esperó el siguiente vuelo?",
        "opciones": [
          "Todos los asientos estaban ocupados",
          "Llegó tarde",
          "Se canceló",
          "Perdió su boleto"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ninguno de ellos",
        "respuestas": [
          "none of them"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: en promedio",
        "respuestas": [
          "on average"
        ]
      }
    ]
  },
  {
    "id": "b2-21",
    "num": 21,
    "titulo": "Comparativos avanzados (the more… the more, far / much / a bit + comparativo)",
    "contexto": "Tendencias y cambios",
    "explicacion": {
      "es": [
        "***The*** + comparativo, ***the*** + comparativo expresa que **dos cosas cambian juntas**: ***The more** you practice, **the better** you get.* (Entre más practicas, mejor te vuelves.) ***The sooner, the better.*** (Entre más pronto, mejor.)",
        "Para decir **cuánto** más, se pone un modificador antes del comparativo. **Mucho más:** ***much, far, a lot, considerably***: *Mexico City is **far bigger** than Puebla.* **Un poco más:** ***a bit, a little, slightly***: *Today is **slightly warmer** than yesterday.*",
        "Para un **cambio progresivo** se repite el comparativo: ***bigger and bigger*** (cada vez más grande), ***more and more expensive*** (cada vez más caro), ***less and less*** (cada vez menos): *Houses are getting **more and more expensive**.*",
        "Para comparar cantidades y diferencias: ***twice as … as*** (el doble de…), ***nowhere near as … as*** (ni de cerca tan…), ***nothing like as*** (para nada tan…): *My salary is **nowhere near as** high as yours.*"
      ],
      "tabla": {
        "columnas": [
          "Estructura",
          "Significado",
          "Ejemplo"
        ],
        "filas": [
          [
            "the + comp., the + comp.",
            "entre más…, más…",
            "The older I get, the happier I am."
          ],
          [
            "much / far / a lot + comp.",
            "mucho más",
            "This phone is much faster."
          ],
          [
            "a bit / slightly + comp.",
            "un poco más",
            "It's a bit cheaper online."
          ],
          [
            "comp. + and + comp.",
            "cada vez más",
            "It's getting hotter and hotter."
          ],
          [
            "twice as … as",
            "el doble de",
            "Rent is twice as expensive as ten years ago."
          ],
          [
            "nowhere near as … as",
            "ni de cerca tan",
            "It's nowhere near as good as the book."
          ]
        ]
      },
      "ojo": [
        "No uses ***very*** con comparativos: *very bigger* ❌ → ***much bigger*** ✅.",
        "Con *more and more* para adjetivos largos: *more and more **popular*** ✅ (no *popularer and popularer* ❌).",
        "En *the more… the more* **no** se omite *the*: ***The more** I sleep, **the more** tired I feel.*",
        "Verbos de cambio útiles: ***increase / rise / go up*** (aumentar), ***decrease / fall / drop / go down*** (disminuir), ***double*** (duplicarse), ***remain stable*** (mantenerse).",
        "Modificadores de tendencia: ***sharply / dramatically*** (drásticamente), ***steadily*** (de manera constante), ***slightly*** (ligeramente)."
      ],
      "en": [
        "The more you practice, the better you get. The sooner, the better.",
        "Much, far and a lot mean a big difference: Mexico City is far bigger than Puebla.",
        "A bit and slightly mean a small difference: Today is slightly warmer.",
        "Houses are getting more and more expensive."
      ]
    },
    "vocabulario": [
      {
        "en": "The more you practice, the better you get.",
        "es": "entre más practicas, mejor te vuelves",
        "imagen": "Músico practicando violín con constancia",
        "ejemplo": [
          "The more you practice, the better you get.",
          "Entre más practicas, mejor te vuelves."
        ]
      },
      {
        "en": "The sooner, the better.",
        "es": "entre más pronto, mejor",
        "imagen": "Reloj y persona apurada con una carpeta",
        "ejemplo": [
          "Send me the report. The sooner, the better.",
          "Mándame el reporte. Entre más pronto, mejor."
        ]
      },
      {
        "en": "far bigger",
        "es": "mucho más grande",
        "imagen": "Ciudad enorme junto a un pueblo pequeño",
        "ejemplo": [
          "Mexico City is far bigger than Puebla.",
          "La Ciudad de México es mucho más grande que Puebla."
        ]
      },
      {
        "en": "slightly warmer",
        "es": "un poco más cálido",
        "imagen": "Termómetro subiendo ligeramente",
        "ejemplo": [
          "Today is slightly warmer than yesterday.",
          "Hoy está un poco más cálido que ayer."
        ]
      },
      {
        "en": "more and more expensive",
        "es": "cada vez más caro",
        "imagen": "Etiquetas de precios cambiando a números más altos",
        "ejemplo": [
          "Houses are getting more and more expensive.",
          "Las casas están cada vez más caras."
        ]
      },
      {
        "en": "hotter and hotter",
        "es": "cada vez más caliente",
        "imagen": "Sol abrasador sobre una ciudad",
        "ejemplo": [
          "Summers are getting hotter and hotter.",
          "Los veranos son cada vez más calurosos."
        ]
      },
      {
        "en": "twice as expensive",
        "es": "el doble de caro",
        "imagen": "Dos tickets, uno con el doble de precio",
        "ejemplo": [
          "Rent is twice as expensive as ten years ago.",
          "La renta está el doble de cara que hace diez años."
        ]
      },
      {
        "en": "nowhere near as good",
        "es": "ni de cerca tan bueno",
        "imagen": "Persona decepcionada saliendo del cine",
        "ejemplo": [
          "The movie is nowhere near as good as the book.",
          "La película no es ni de cerca tan buena como el libro."
        ]
      },
      {
        "en": "much faster",
        "es": "mucho más rápido",
        "imagen": "Tren bala pasando a toda velocidad",
        "ejemplo": [
          "The new train is much faster than the bus.",
          "El tren nuevo es mucho más rápido que el camión."
        ]
      },
      {
        "en": "a bit cheaper",
        "es": "un poco más barato",
        "imagen": "Comparación de precios en un celular",
        "ejemplo": [
          "It's a bit cheaper if you buy it online.",
          "Es un poco más barato si lo compras en línea."
        ]
      },
      {
        "en": "less and less",
        "es": "cada vez menos",
        "imagen": "Gráfica bajando poco a poco",
        "ejemplo": [
          "People read newspapers less and less.",
          "La gente lee el periódico cada vez menos."
        ]
      },
      {
        "en": "The older I get, the happier I am.",
        "es": "entre más grande soy, más feliz soy",
        "imagen": "Persona mayor sonriendo en un jardín",
        "ejemplo": [
          "The older I get, the happier I am.",
          "Entre más años tengo, más feliz soy."
        ]
      },
      {
        "en": "prices have risen sharply",
        "es": "los precios subieron drásticamente",
        "imagen": "Gráfica con una línea subiendo de golpe",
        "ejemplo": [
          "Prices have risen sharply this year.",
          "Los precios han subido drásticamente este año."
        ]
      },
      {
        "en": "steadily",
        "es": "de manera constante",
        "imagen": "Escalera de crecimiento en una gráfica",
        "ejemplo": [
          "The number of visitors has grown steadily.",
          "El número de visitantes ha crecido de manera constante."
        ]
      },
      {
        "en": "the number has doubled",
        "es": "el número se duplicó",
        "imagen": "Dos columnas, una del doble de altura",
        "ejemplo": [
          "The number of electric cars has doubled.",
          "El número de carros eléctricos se ha duplicado."
        ]
      },
      {
        "en": "considerably better",
        "es": "considerablemente mejor",
        "imagen": "Persona sonriendo frente a un examen con mejor calificación",
        "ejemplo": [
          "My English is considerably better than last year.",
          "Mi inglés está considerablemente mejor que el año pasado."
        ]
      }
    ],
    "grupos": [
      {
        "id": "tendencias",
        "titulo": "Describir tendencias",
        "icono": "📈",
        "patron": [
          "…has increased…",
          "…has dropped…",
          "…remained stable"
        ],
        "palabras": [
          {
            "en": "increase",
            "es": "aumentar",
            "imagen": "Gráfica de barras creciendo",
            "ejemplo": [
              "The population of the city has increased a lot.",
              "La población de la ciudad ha aumentado mucho."
            ]
          },
          {
            "en": "decrease",
            "es": "disminuir",
            "imagen": "Gráfica de barras bajando",
            "ejemplo": [
              "The number of smokers has decreased.",
              "El número de fumadores ha disminuido."
            ]
          },
          {
            "en": "drop",
            "es": "caer / bajar",
            "imagen": "Flecha cayendo en una gráfica",
            "ejemplo": [
              "Temperatures dropped suddenly last night.",
              "Las temperaturas bajaron de repente anoche."
            ]
          },
          {
            "en": "remain stable",
            "es": "mantenerse estable",
            "imagen": "Línea recta en una gráfica",
            "ejemplo": [
              "Prices remained stable for six months.",
              "Los precios se mantuvieron estables seis meses."
            ]
          },
          {
            "en": "a trend",
            "es": "una tendencia",
            "imagen": "Personas usando ropa de moda similar",
            "ejemplo": [
              "Working from home is a growing trend.",
              "Trabajar desde casa es una tendencia en aumento."
            ]
          },
          {
            "en": "dramatically",
            "es": "drásticamente",
            "imagen": "Gráfica con un salto enorme",
            "ejemplo": [
              "Online sales grew dramatically during the pandemic.",
              "Las ventas en línea crecieron drásticamente durante la pandemia."
            ]
          }
        ]
      },
      {
        "id": "cambios",
        "titulo": "Cambios en la ciudad",
        "icono": "🏙️",
        "patron": [
          "…is getting more and more…",
          "The more…, the more…",
          "…far more…"
        ],
        "palabras": [
          {
            "en": "more crowded",
            "es": "más lleno de gente",
            "imagen": "Metro lleno de pasajeros",
            "ejemplo": [
              "The subway is getting more and more crowded.",
              "El metro está cada vez más lleno."
            ]
          },
          {
            "en": "more polluted",
            "es": "más contaminado",
            "imagen": "Ciudad con smog sobre los edificios",
            "ejemplo": [
              "The bigger the city, the more polluted the air.",
              "Entre más grande la ciudad, más contaminado el aire."
            ]
          },
          {
            "en": "safer",
            "es": "más seguro",
            "imagen": "Parque iluminado con familias de noche",
            "ejemplo": [
              "The neighborhood is much safer than before.",
              "La colonia es mucho más segura que antes."
            ]
          },
          {
            "en": "greener",
            "es": "más verde",
            "imagen": "Calle con muchos árboles y bicicletas",
            "ejemplo": [
              "The city is becoming greener and greener.",
              "La ciudad es cada vez más verde."
            ]
          },
          {
            "en": "the cost of living",
            "es": "el costo de vida",
            "imagen": "Persona revisando cuentas con preocupación",
            "ejemplo": [
              "The cost of living has risen sharply.",
              "El costo de vida ha subido drásticamente."
            ]
          },
          {
            "en": "traffic",
            "es": "el tráfico",
            "imagen": "Avenida congestionada de carros",
            "ejemplo": [
              "The traffic is far worse than it used to be.",
              "El tráfico está mucho peor que antes."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "The more you practice, the better you get.",
        "es": "Entre más practicas, mejor te vuelves."
      },
      {
        "en": "Send me the report. The sooner, the better.",
        "es": "Mándame el reporte. Entre más pronto, mejor."
      },
      {
        "en": "Mexico City is far bigger than Puebla.",
        "es": "La Ciudad de México es mucho más grande que Puebla."
      },
      {
        "en": "Houses are getting more and more expensive.",
        "es": "Las casas están cada vez más caras."
      },
      {
        "en": "Summers are getting hotter and hotter.",
        "es": "Los veranos son cada vez más calurosos."
      },
      {
        "en": "The movie is nowhere near as good as the book.",
        "es": "La película no es ni de cerca tan buena como el libro."
      },
      {
        "en": "It's a bit cheaper if you buy it online.",
        "es": "Es un poco más barato si lo compras en línea."
      },
      {
        "en": "People read newspapers less and less.",
        "es": "La gente lee el periódico cada vez menos."
      },
      {
        "en": "The number of electric cars has doubled.",
        "es": "El número de carros eléctricos se ha duplicado."
      },
      {
        "en": "The traffic is far worse than it used to be.",
        "es": "El tráfico está mucho peor que antes."
      }
    ],
    "frases": [
      {
        "en": "The more I learn about climate change, the more worried I am about the future.",
        "es": "Entre más aprendo sobre el cambio climático, más me preocupa el futuro.",
        "imagen": "Persona leyendo noticias sobre el clima con preocupación"
      },
      {
        "en": "My new apartment is slightly smaller than the old one, but it's much closer to my office.",
        "es": "Mi nuevo departamento es un poco más pequeño que el anterior, pero está mucho más cerca de mi oficina.",
        "imagen": "Persona caminando de su edificio a la oficina"
      },
      {
        "en": "Online shopping is becoming more and more popular, especially among young people.",
        "es": "Comprar en línea es cada vez más popular, sobre todo entre los jóvenes.",
        "imagen": "Joven recibiendo un paquete en la puerta"
      },
      {
        "en": "The price of avocados has risen sharply, and now they're almost twice as expensive as last year.",
        "es": "El precio del aguacate subió drásticamente y ahora cuesta casi el doble que el año pasado.",
        "imagen": "Aguacates en un mercado con un precio alto"
      },
      {
        "en": "The longer you wait to see a doctor, the worse the problem can get.",
        "es": "Entre más esperas para ir al doctor, peor puede ponerse el problema.",
        "imagen": "Paciente preocupado en una sala de espera"
      },
      {
        "en": "Life in a small town is nowhere near as stressful as life in a big city.",
        "es": "La vida en un pueblo no es ni de cerca tan estresante como en una ciudad grande.",
        "imagen": "Pueblo tranquilo contrastado con una ciudad caótica"
      },
      {
        "en": "The number of tourists visiting Oaxaca has grown steadily over the last ten years.",
        "es": "El número de turistas que visitan Oaxaca ha crecido de manera constante en los últimos diez años.",
        "imagen": "Turistas en la plaza de Oaxaca con edificios coloniales"
      },
      {
        "en": "My grandmother says that the world is changing faster and faster, and she can't keep up.",
        "es": "Mi abuela dice que el mundo cambia cada vez más rápido y no puede seguirle el paso.",
        "imagen": "Abuela confundida rodeada de aparatos electrónicos"
      },
      {
        "en": "This year's sales were considerably better than we expected.",
        "es": "Las ventas de este año fueron considerablemente mejores de lo que esperábamos.",
        "imagen": "Equipo celebrando frente a una gráfica de ventas al alza"
      },
      {
        "en": "The cheaper the flight, the less comfortable the seats usually are.",
        "es": "Entre más barato el vuelo, normalmente menos cómodos son los asientos.",
        "imagen": "Pasajero incómodo en un asiento estrecho de avión"
      }
    ],
    "listening": [
      {
        "audio": "The more coffee I drink, the less I sleep.",
        "pregunta": "¿Qué pasa cuando toma más café?",
        "opciones": [
          "Duerme menos",
          "Duerme más",
          "Trabaja mejor",
          "Se siente mejor"
        ]
      },
      {
        "audio": "Rent in this neighborhood is twice as expensive as it was five years ago.",
        "pregunta": "¿Cuánto ha subido la renta?",
        "opciones": [
          "Al doble",
          "Un poco",
          "Al triple",
          "No ha subido"
        ]
      },
      {
        "audio": "The weather is getting colder and colder. Winter is coming.",
        "pregunta": "¿Cómo está el clima?",
        "opciones": [
          "Cada vez más frío",
          "Cada vez más caliente",
          "Igual",
          "Lluvioso"
        ]
      },
      {
        "audio": "The new version of the app is much faster, but it's slightly more difficult to use.",
        "pregunta": "¿Qué tiene de malo la nueva versión?",
        "opciones": [
          "Es un poco más difícil de usar",
          "Es más lenta",
          "Es más cara",
          "No funciona"
        ]
      },
      {
        "audio": "The number of people who cycle to work has doubled since the new bike lanes opened.",
        "pregunta": "¿Qué pasó con los ciclistas?",
        "opciones": [
          "Se duplicaron",
          "Disminuyeron",
          "Se mantuvieron igual",
          "Desaparecieron"
        ]
      }
    ],
    "lectura": {
      "titulo": "A changing city",
      "texto": "My hometown, Querétaro, has changed dramatically in the last twenty years. When I was a child, it was a quiet city where everybody seemed to know each other. Today, it's far bigger and much more modern. Thousands of people have moved here from other states because of the growing industry, and the population has almost doubled. As a result, houses have become more and more expensive, and the traffic is considerably worse than it used to be. On the other hand, there are many more opportunities. There are new universities, better hospitals, and a lot more restaurants and cultural events. My parents complain that the city is nowhere near as peaceful as it was before. They say: the bigger the city gets, the less we like it. But for young people like me, the more the city grows, the more chances we have to find good jobs without moving away.",
      "preguntas": [
        {
          "pregunta": "¿Cómo era Querétaro hace veinte años?",
          "opciones": [
            "Una ciudad tranquila donde todos se conocían",
            "Una ciudad enorme",
            "Un pueblo sin gente",
            "Una ciudad industrial"
          ]
        },
        {
          "pregunta": "¿Por qué se ha mudado mucha gente?",
          "opciones": [
            "Por la industria en crecimiento",
            "Por el clima",
            "Por las playas",
            "Por las escuelas"
          ]
        },
        {
          "pregunta": "¿Qué ha pasado con la población?",
          "opciones": [
            "Casi se duplicó",
            "Disminuyó",
            "Se mantuvo estable",
            "Se triplicó"
          ]
        },
        {
          "pregunta": "¿Qué opina el narrador del crecimiento?",
          "opciones": [
            "Le da más oportunidades de trabajo",
            "Lo odia",
            "No le importa",
            "Prefiere irse"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con the … the.",
        "pregunta": "The more you read, ___ more you learn.",
        "respuestas": [
          "the"
        ]
      },
      {
        "instruccion": "Completa con much o a bit.",
        "pregunta": "A Ferrari is ___ faster than a bicycle. (mucho)",
        "respuestas": [
          "much",
          "far",
          "a lot"
        ]
      },
      {
        "instruccion": "Completa con el comparativo progresivo.",
        "pregunta": "It's getting ___ (cold). (cada vez más frío)",
        "respuestas": [
          "colder and colder"
        ]
      },
      {
        "instruccion": "Completa con el comparativo progresivo.",
        "pregunta": "Phones are becoming ___ (expensive). (cada vez más caros)",
        "respuestas": [
          "more and more expensive"
        ]
      },
      {
        "instruccion": "Completa con twice.",
        "pregunta": "This house is ___ as big as mine.",
        "respuestas": [
          "twice"
        ]
      },
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "The sooner, the ___.",
        "respuestas": [
          "better"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "cada vez más caro",
        "respuestas": [
          "more and more expensive"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Entre más practicas, mejor te vuelves.",
        "respuestas": [
          "The more you practice, the better you get",
          "The more you practise, the better you get",
          "The more you practice the better you get",
          "The more you practice, the better you become"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "un poco más barato",
        "respuestas": [
          "a bit cheaper",
          "a little cheaper",
          "slightly cheaper"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "This car is very faster than mine.",
        "respuestas": [
          "This car is much faster than mine",
          "This car is far faster than mine",
          "This car is a lot faster than mine"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "___ you study, the better your grades will be.",
        "opciones": [
          "The more",
          "More",
          "The most",
          "Much more"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Today is ___ colder than yesterday. Just one degree.",
        "opciones": [
          "slightly",
          "far",
          "very",
          "much more"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The city is getting ___.",
        "opciones": [
          "bigger and bigger",
          "big and bigger",
          "more big and big",
          "biggest and biggest"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "His house is ___ as mine.",
        "opciones": [
          "twice as big",
          "twice bigger",
          "two times big",
          "double big as"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«It's nowhere near as good» significa:",
        "opciones": [
          "No es ni de cerca tan bueno",
          "Es casi igual de bueno",
          "Es mejor",
          "Está cerca"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Prices have risen ___ this year.",
        "opciones": [
          "sharply",
          "sharp",
          "more sharp",
          "sharper and"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The longer I live abroad, the more I miss Mexican food.",
        "pregunta": "¿Qué extraña cada vez más?",
        "opciones": [
          "La comida mexicana",
          "A su familia",
          "El clima",
          "Su trabajo"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Sales dropped slightly in January but rose sharply in February.",
        "pregunta": "¿Qué pasó en febrero?",
        "opciones": [
          "Las ventas subieron mucho",
          "Bajaron un poco",
          "Se mantuvieron",
          "Bajaron mucho"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: mucho mejor",
        "respuestas": [
          "much better",
          "far better",
          "a lot better"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Entre más pronto, mejor.",
        "respuestas": [
          "The sooner, the better",
          "The sooner the better"
        ]
      }
    ]
  },
  {
    "id": "b2-22",
    "num": 22,
    "titulo": "Conectores de contraste y concesión (despite, in spite of, whereas, nevertheless)",
    "contexto": "Ventajas y desventajas",
    "explicacion": {
      "es": [
        "***Despite / in spite of*** (a pesar de) van seguidos de **sustantivo** o ***-ing***: ***Despite the price**, the phone sells very well. **In spite of being** tired, she went to the gym.* Con oración completa: ***despite the fact that***: *Despite the fact that it was raining, we went out.*",
        "***Although / even though / though*** (aunque) van seguidos de una **oración** con sujeto y verbo: ***Although** the city is expensive, it offers many opportunities.* *Though* también puede ir al **final** en lenguaje informal: *It's expensive. I love it, **though**.*",
        "***However / nevertheless / nonetheless*** (sin embargo, no obstante) unen **dos oraciones** y suelen ir al principio con coma: *The job pays well. **However**, the hours are long.* *Nevertheless* es más **formal**.",
        "***Whereas / while*** (mientras que) **comparan** dos cosas opuestas: *Living in the city is exciting, **whereas** the countryside is peaceful.* ***On the other hand*** (por otro lado) presenta el otro lado de un argumento."
      ],
      "tabla": {
        "columnas": [
          "Conector",
          "Va seguido de",
          "Ejemplo"
        ],
        "filas": [
          [
            "despite / in spite of",
            "sustantivo o -ing",
            "Despite the rain, we played."
          ],
          [
            "despite the fact that",
            "oración",
            "Despite the fact that it rained, we played."
          ],
          [
            "although / even though",
            "oración",
            "Although it rained, we played."
          ],
          [
            "however / nevertheless",
            "nueva oración (con coma)",
            "It rained. However, we played."
          ],
          [
            "whereas / while",
            "oración (contraste)",
            "I love coffee, whereas my wife prefers tea."
          ]
        ]
      },
      "ojo": [
        "*Despite **of*** ❌ → ***despite*** ✅ o ***in spite of*** ✅.",
        "*Despite **it was raining*** ❌ → *Despite **the rain*** ✅ / *Although **it was raining*** ✅.",
        "*Although… **but*** ❌: no se usan los dos juntos. *Although it was late, **we** went out* ✅.",
        "***However*** puede ir en medio entre comas: *The apartment, **however**, was very small.*",
        "Para hablar de pros y contras: ***the main advantage / drawback is…, on the plus side…, the downside is…***"
      ],
      "en": [
        "Despite and in spite of are followed by a noun or ing: Despite the price, the phone sells very well.",
        "Although and even though are followed by a clause: Although the city is expensive, it offers many opportunities.",
        "However and nevertheless start a new sentence: The job pays well. However, the hours are long.",
        "Whereas compares two opposite things: The city is exciting, whereas the countryside is peaceful."
      ]
    },
    "vocabulario": [
      {
        "en": "despite the price",
        "es": "a pesar del precio",
        "imagen": "Fila de clientes comprando un celular caro",
        "ejemplo": [
          "Despite the price, the phone sells very well.",
          "A pesar del precio, el celular se vende muy bien."
        ]
      },
      {
        "en": "in spite of being tired",
        "es": "a pesar de estar cansado",
        "imagen": "Persona cansada entrando al gimnasio",
        "ejemplo": [
          "In spite of being tired, she went to the gym.",
          "A pesar de estar cansada, fue al gimnasio."
        ]
      },
      {
        "en": "despite the fact that",
        "es": "a pesar de que",
        "imagen": "Personas jugando fútbol bajo la lluvia",
        "ejemplo": [
          "Despite the fact that it was raining, they kept playing.",
          "A pesar de que llovía, siguieron jugando."
        ]
      },
      {
        "en": "even though",
        "es": "aunque",
        "imagen": "Persona enferma trabajando en su escritorio",
        "ejemplo": [
          "She went to work even though she had a fever.",
          "Fue a trabajar aunque tenía fiebre."
        ]
      },
      {
        "en": "however",
        "es": "sin embargo",
        "imagen": "Persona comparando dos opciones en una balanza",
        "ejemplo": [
          "The job pays well. However, the hours are long.",
          "El trabajo paga bien. Sin embargo, el horario es largo."
        ]
      },
      {
        "en": "nevertheless",
        "es": "no obstante",
        "imagen": "Equipo celebrando a pesar de una derrota",
        "ejemplo": [
          "We lost the game. Nevertheless, we played very well.",
          "Perdimos el partido. No obstante, jugamos muy bien."
        ]
      },
      {
        "en": "whereas",
        "es": "mientras que",
        "imagen": "Ciudad animada junto a un campo tranquilo",
        "ejemplo": [
          "The city is exciting, whereas the countryside is peaceful.",
          "La ciudad es emocionante, mientras que el campo es tranquilo."
        ]
      },
      {
        "en": "on the other hand",
        "es": "por otro lado",
        "imagen": "Persona señalando dos opciones con ambas manos",
        "ejemplo": [
          "On the other hand, living alone can be lonely.",
          "Por otro lado, vivir solo puede ser solitario."
        ]
      },
      {
        "en": "the main advantage",
        "es": "la principal ventaja",
        "imagen": "Persona con el pulgar arriba",
        "ejemplo": [
          "The main advantage is the location.",
          "La principal ventaja es la ubicación."
        ]
      },
      {
        "en": "a drawback",
        "es": "una desventaja",
        "imagen": "Persona con el pulgar abajo",
        "ejemplo": [
          "The only drawback is the noise.",
          "La única desventaja es el ruido."
        ]
      },
      {
        "en": "on the plus side",
        "es": "lo bueno es que",
        "imagen": "Persona sonriendo mientras mira algo positivo",
        "ejemplo": [
          "On the plus side, it's very close to the subway.",
          "Lo bueno es que está muy cerca del metro."
        ]
      },
      {
        "en": "the downside",
        "es": "lo malo",
        "imagen": "Persona haciendo una mueca de duda",
        "ejemplo": [
          "The downside is that it's very expensive.",
          "Lo malo es que es muy caro."
        ]
      },
      {
        "en": "though",
        "es": "aunque (al final)",
        "imagen": "Persona disfrutando un café caro",
        "ejemplo": [
          "It's expensive. I love it, though.",
          "Es caro. Me encanta, aunque."
        ]
      },
      {
        "en": "while",
        "es": "mientras que",
        "imagen": "Dos hermanos con personalidades opuestas",
        "ejemplo": [
          "My brother is very tidy, while I'm quite messy.",
          "Mi hermano es muy ordenado, mientras que yo soy bastante desordenado."
        ]
      },
      {
        "en": "pros and cons",
        "es": "pros y contras",
        "imagen": "Lista con dos columnas en un cuaderno",
        "ejemplo": [
          "Let's look at the pros and cons of each option.",
          "Veamos los pros y contras de cada opción."
        ]
      },
      {
        "en": "it's worth it",
        "es": "vale la pena",
        "imagen": "Excursionistas en la cima con una vista increíble",
        "ejemplo": [
          "The trip is long, but it's worth it.",
          "El viaje es largo, pero vale la pena."
        ]
      }
    ],
    "grupos": [
      {
        "id": "proscontras",
        "titulo": "Ventajas y desventajas",
        "icono": "⚖️",
        "patron": [
          "One advantage is…",
          "The main drawback is…",
          "On balance…"
        ],
        "palabras": [
          {
            "en": "an advantage",
            "es": "una ventaja",
            "imagen": "Persona sonriendo con una lista de beneficios",
            "ejemplo": [
              "One advantage of working from home is flexibility.",
              "Una ventaja de trabajar desde casa es la flexibilidad."
            ]
          },
          {
            "en": "a disadvantage",
            "es": "una desventaja",
            "imagen": "Persona frustrada con una lista de problemas",
            "ejemplo": [
              "A disadvantage is that you can feel isolated.",
              "Una desventaja es que te puedes sentir aislado."
            ]
          },
          {
            "en": "benefit",
            "es": "beneficio",
            "imagen": "Persona saludable haciendo ejercicio",
            "ejemplo": [
              "Exercise has many benefits for your health.",
              "El ejercicio tiene muchos beneficios para la salud."
            ]
          },
          {
            "en": "on balance",
            "es": "en general / sopesándolo todo",
            "imagen": "Balanza equilibrada",
            "ejemplo": [
              "On balance, I think it's a good decision.",
              "En general, creo que es una buena decisión."
            ]
          },
          {
            "en": "outweigh",
            "es": "superar / pesar más",
            "imagen": "Balanza con un lado más pesado",
            "ejemplo": [
              "The advantages outweigh the disadvantages.",
              "Las ventajas superan a las desventajas."
            ]
          },
          {
            "en": "a trade-off",
            "es": "un compromiso / un sacrificio",
            "imagen": "Persona eligiendo entre tiempo y dinero",
            "ejemplo": [
              "Living far away is a trade-off: cheaper rent, but longer trips.",
              "Vivir lejos es un sacrificio: renta más barata, pero trayectos más largos."
            ]
          }
        ]
      },
      {
        "id": "temas",
        "titulo": "Temas para debatir",
        "icono": "💬",
        "patron": [
          "Although…, …",
          "Despite…, …",
          "…, whereas…"
        ],
        "palabras": [
          {
            "en": "living in the city",
            "es": "vivir en la ciudad",
            "imagen": "Avenida iluminada de una gran ciudad",
            "ejemplo": [
              "Living in the city is convenient, although it's stressful.",
              "Vivir en la ciudad es práctico, aunque estresante."
            ]
          },
          {
            "en": "owning a car",
            "es": "tener carro",
            "imagen": "Carro estacionado frente a una casa",
            "ejemplo": [
              "Owning a car is useful. However, it's expensive.",
              "Tener carro es útil. Sin embargo, es caro."
            ]
          },
          {
            "en": "studying abroad",
            "es": "estudiar en el extranjero",
            "imagen": "Estudiante con maletas frente a una universidad extranjera",
            "ejemplo": [
              "Despite the cost, studying abroad is a great experience.",
              "A pesar del costo, estudiar en el extranjero es una gran experiencia."
            ]
          },
          {
            "en": "working for yourself",
            "es": "trabajar por tu cuenta",
            "imagen": "Persona trabajando en su propio taller",
            "ejemplo": [
              "Working for yourself gives you freedom, whereas a job gives you security.",
              "Trabajar por tu cuenta te da libertad, mientras que un empleo te da seguridad."
            ]
          },
          {
            "en": "online classes",
            "es": "clases en línea",
            "imagen": "Estudiante en videollamada con su maestro",
            "ejemplo": [
              "Online classes are flexible. Nevertheless, some students miss the classroom.",
              "Las clases en línea son flexibles. No obstante, algunos alumnos extrañan el salón."
            ]
          },
          {
            "en": "renting vs. buying",
            "es": "rentar o comprar",
            "imagen": "Pareja comparando dos casas",
            "ejemplo": [
              "Renting is flexible, whereas buying is an investment.",
              "Rentar es flexible, mientras que comprar es una inversión."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Despite the price, the phone sells very well.",
        "es": "A pesar del precio, el celular se vende muy bien."
      },
      {
        "en": "In spite of being tired, she went to the gym.",
        "es": "A pesar de estar cansada, fue al gimnasio."
      },
      {
        "en": "She went to work even though she had a fever.",
        "es": "Fue a trabajar aunque tenía fiebre."
      },
      {
        "en": "The job pays well. However, the hours are long.",
        "es": "El trabajo paga bien. Sin embargo, el horario es largo."
      },
      {
        "en": "We lost the game. Nevertheless, we played very well.",
        "es": "Perdimos el partido. No obstante, jugamos muy bien."
      },
      {
        "en": "The city is exciting, whereas the countryside is peaceful.",
        "es": "La ciudad es emocionante, mientras que el campo es tranquilo."
      },
      {
        "en": "The only drawback is the noise.",
        "es": "La única desventaja es el ruido."
      },
      {
        "en": "It's expensive. I love it, though.",
        "es": "Es caro. Me encanta, aunque."
      },
      {
        "en": "The advantages outweigh the disadvantages.",
        "es": "Las ventajas superan a las desventajas."
      },
      {
        "en": "The trip is long, but it's worth it.",
        "es": "El viaje es largo, pero vale la pena."
      }
    ],
    "frases": [
      {
        "en": "Although public transport in Mexico City is cheap, it's often very crowded during rush hour.",
        "es": "Aunque el transporte público en la Ciudad de México es barato, suele ir muy lleno en hora pico.",
        "imagen": "Andén del metro lleno de gente en hora pico"
      },
      {
        "en": "Despite having a good salary, he decided to quit his job to travel around the world.",
        "es": "A pesar de tener un buen sueldo, decidió renunciar a su trabajo para viajar por el mundo.",
        "imagen": "Persona con mochila mirando un mapa del mundo"
      },
      {
        "en": "Working from home saves time and money. On the other hand, it can be difficult to separate work and personal life.",
        "es": "Trabajar desde casa ahorra tiempo y dinero. Por otro lado, puede ser difícil separar el trabajo de la vida personal.",
        "imagen": "Persona trabajando en la mesa del comedor con sus hijos jugando"
      },
      {
        "en": "My sister loves big parties, whereas I prefer quiet dinners with a few friends.",
        "es": "A mi hermana le encantan las fiestas grandes, mientras que yo prefiero cenas tranquilas con pocos amigos.",
        "imagen": "Contraste entre una fiesta llena y una cena íntima"
      },
      {
        "en": "The apartment is small and a bit old. Nevertheless, it has a beautiful view of the mountains.",
        "es": "El departamento es pequeño y algo viejo. No obstante, tiene una vista preciosa a las montañas.",
        "imagen": "Ventana de un departamento con vista a montañas"
      },
      {
        "en": "In spite of the bad weather, thousands of people came to the festival.",
        "es": "A pesar del mal tiempo, miles de personas vinieron al festival.",
        "imagen": "Festival al aire libre con gente con impermeables"
      },
      {
        "en": "Even though I've lived here for ten years, I still get lost in the old part of the city.",
        "es": "Aunque llevo diez años viviendo aquí, todavía me pierdo en el centro histórico.",
        "imagen": "Persona confundida en un callejón colonial"
      },
      {
        "en": "The main advantage of electric cars is that they don't pollute; the downside is that they're still expensive.",
        "es": "La principal ventaja de los carros eléctricos es que no contaminan; lo malo es que todavía son caros.",
        "imagen": "Carro eléctrico cargándose en una estación"
      },
      {
        "en": "Despite the fact that she had never cooked before, her first dinner was delicious.",
        "es": "A pesar de que nunca había cocinado, su primera cena estuvo deliciosa.",
        "imagen": "Persona orgullosa sirviendo una cena casera"
      },
      {
        "en": "On balance, I think moving to a smaller town was the right decision for our family.",
        "es": "En general, creo que mudarnos a un pueblo más pequeño fue la decisión correcta para la familia.",
        "imagen": "Familia feliz frente a una casa en un pueblo"
      }
    ],
    "listening": [
      {
        "audio": "Despite the traffic, we arrived at the airport on time.",
        "pregunta": "¿Llegaron a tiempo?",
        "opciones": [
          "Sí, a pesar del tráfico",
          "No, por el tráfico",
          "No llegaron",
          "Llegaron muy temprano"
        ]
      },
      {
        "audio": "The apartment was beautiful. However, it was too far from the center.",
        "pregunta": "¿Cuál era el problema?",
        "opciones": [
          "Estaba muy lejos del centro",
          "Era feo",
          "Era caro",
          "Era pequeño"
        ]
      },
      {
        "audio": "My brother loves spicy food, whereas I can't eat anything with chili.",
        "pregunta": "¿Qué no puede comer la persona?",
        "opciones": [
          "Nada con chile",
          "Nada dulce",
          "Carne",
          "Pescado"
        ]
      },
      {
        "audio": "Even though he studied a lot, he didn't pass the exam.",
        "pregunta": "¿Aprobó el examen?",
        "opciones": [
          "No, aunque estudió mucho",
          "Sí",
          "No estudió",
          "No presentó"
        ]
      },
      {
        "audio": "The main drawback of this job is that you have to work on weekends.",
        "pregunta": "¿Cuál es la desventaja del trabajo?",
        "opciones": [
          "Trabajar los fines de semana",
          "El sueldo bajo",
          "El horario nocturno",
          "La distancia"
        ]
      }
    ],
    "lectura": {
      "titulo": "City or countryside?",
      "texto": "More and more young Mexicans are asking themselves whether they should live in a big city or move to a smaller town. Both options have advantages and drawbacks. Big cities like Mexico City, Guadalajara or Monterrey offer more job opportunities, better universities and a wide range of cultural activities. However, the cost of living is high, and people often spend two or three hours a day in traffic. In spite of these problems, many young people prefer the city because of its energy and diversity. Small towns, on the other hand, are quieter, safer and much cheaper. Houses cost a fraction of the price, and people know their neighbors. Nevertheless, there are fewer jobs, and some services, such as specialized hospitals, can be far away. Although remote work has made it easier to live outside the city, not every job can be done online. On balance, the decision depends on what each person values most.",
      "preguntas": [
        {
          "pregunta": "¿Qué ventajas ofrecen las ciudades grandes?",
          "opciones": [
            "Más trabajo, mejores universidades y cultura",
            "Casas baratas",
            "Tranquilidad",
            "Menos tráfico"
          ]
        },
        {
          "pregunta": "¿Cuál es un problema de las ciudades?",
          "opciones": [
            "El costo de vida y el tráfico",
            "Pocas universidades",
            "No hay hospitales",
            "No hay diversión"
          ]
        },
        {
          "pregunta": "¿Cuál es una desventaja de los pueblos?",
          "opciones": [
            "Menos trabajos y servicios lejanos",
            "Son caros",
            "Son peligrosos",
            "Hay mucho tráfico"
          ]
        },
        {
          "pregunta": "¿De qué depende la decisión, según el texto?",
          "opciones": [
            "De lo que cada persona valora más",
            "Del dinero",
            "De la familia",
            "Del trabajo remoto"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con despite o although.",
        "pregunta": "___ the rain, we went to the beach.",
        "respuestas": [
          "Despite",
          "In spite of"
        ]
      },
      {
        "instruccion": "Completa con despite o although.",
        "pregunta": "___ it was raining, we went to the beach.",
        "respuestas": [
          "Although",
          "Even though",
          "Though"
        ]
      },
      {
        "instruccion": "Completa con however o whereas.",
        "pregunta": "The car is old. ___, it works perfectly.",
        "respuestas": [
          "However",
          "Nevertheless",
          "Nonetheless"
        ]
      },
      {
        "instruccion": "Completa con however o whereas.",
        "pregunta": "I like the city, ___ my wife prefers the countryside.",
        "respuestas": [
          "whereas",
          "while"
        ]
      },
      {
        "instruccion": "Completa con -ing.",
        "pregunta": "In spite of ___ (be) sick, he came to work.",
        "respuestas": [
          "being"
        ]
      },
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "Despite the ___ that it was late, they kept working.",
        "respuestas": [
          "fact"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "a pesar del precio",
        "respuestas": [
          "despite the price",
          "in spite of the price"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "sin embargo",
        "respuestas": [
          "however",
          "nevertheless",
          "nonetheless"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "pros y contras",
        "respuestas": [
          "pros and cons"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "Despite of the cold, we went swimming.",
        "respuestas": [
          "Despite the cold, we went swimming",
          "In spite of the cold, we went swimming"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "___ his age, he runs marathons.",
        "opciones": [
          "Despite",
          "Although",
          "However",
          "Whereas"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ she was nervous, she gave a great speech.",
        "opciones": [
          "Although",
          "Despite",
          "In spite of",
          "However"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The test was hard. ___, most students passed.",
        "opciones": [
          "Nevertheless",
          "Although",
          "Despite",
          "Whereas"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I'm a morning person, ___ my husband loves staying up late.",
        "opciones": [
          "whereas",
          "despite",
          "however",
          "in spite of"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es correcta?",
        "opciones": [
          "Despite being tired, she finished.",
          "Despite she was tired, she finished.",
          "Despite of being tired, she finished.",
          "Although being tired she finished."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«The advantages outweigh the disadvantages» significa:",
        "opciones": [
          "Las ventajas superan a las desventajas",
          "Hay más desventajas",
          "Son iguales",
          "No hay ventajas"
        ]
      },
      {
        "tipo": "listening",
        "audio": "In spite of the cold, the children played outside all afternoon.",
        "pregunta": "¿Qué hicieron los niños?",
        "opciones": [
          "Jugaron afuera toda la tarde",
          "Se quedaron adentro",
          "Se enfermaron",
          "Durmieron"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Renting is more flexible, whereas buying a house is a long-term investment.",
        "pregunta": "¿Qué se dice de comprar casa?",
        "opciones": [
          "Es una inversión a largo plazo",
          "Es más flexible",
          "Es más barato",
          "Es mala idea"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: aunque tenía fiebre",
        "respuestas": [
          "even though she had a fever",
          "even though he had a fever",
          "although she had a fever",
          "although he had a fever",
          "even though I had a fever",
          "although I had a fever"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Vale la pena.",
        "respuestas": [
          "It's worth it",
          "It is worth it"
        ]
      }
    ]
  },
  {
    "id": "b2-23",
    "num": 23,
    "titulo": "Oraciones de finalidad (so that, in order to, so as to)",
    "contexto": "Metas y propósitos",
    "explicacion": {
      "es": [
        "Para expresar la **finalidad** (*para / para que*) lo más sencillo es ***to*** + verbo: *I'm saving money **to buy** a house.* (Ahorro para comprar una casa.)",
        "***In order to*** y ***so as to*** + verbo significan lo mismo pero son **más formales**: *We left early **in order to avoid** the traffic.* Para el negativo: ***in order not to / so as not to***: *I wrote it down **so as not to forget** it.* (Lo anoté para no olvidarlo.)",
        "***So that*** + sujeto + verbo (***can, could, will, would***) se usa cuando la finalidad tiene **otro sujeto** o necesita un modal: *I'll explain it again **so that** everybody **can** understand.* (para que todos puedan entender)",
        "***For*** + **sustantivo** expresa la finalidad de un objeto o actividad: *This knife is **for cutting** bread. I went to the store **for some milk**.* ¡Pero no *for* + verbo base! *I came **for to see** you* ❌ → *I came **to see** you* ✅."
      ],
      "tabla": {
        "columnas": [
          "Forma",
          "Ejemplo",
          "Español"
        ],
        "filas": [
          [
            "to + verbo",
            "I study to get a better job.",
            "para conseguir"
          ],
          [
            "in order to + verbo (formal)",
            "We met in order to discuss the budget.",
            "con el fin de"
          ],
          [
            "so as not to + verbo",
            "I left quietly so as not to wake the baby.",
            "para no despertar"
          ],
          [
            "so that + sujeto + can / will",
            "Speak louder so that we can hear you.",
            "para que podamos"
          ],
          [
            "for + sustantivo / -ing",
            "This app is for learning English.",
            "sirve para"
          ]
        ]
      },
      "ojo": [
        "*I came here **for learn** English* ❌ → *I came here **to learn** English* ✅.",
        "Con *so that* en pasado: ***could / would***: *I gave her my number **so that** she **could** call me.*",
        "*In order to* es más común al **principio** de la oración en textos formales: ***In order to** apply, you must be over eighteen.*",
        "***Not to*** (no *to not*) en estilo formal: *in order **not to** be late*.",
        "Vocabulario de metas: ***achieve a goal, set a goal, aim to, be determined to, make progress***."
      ],
      "en": [
        "To express purpose, use to plus verb: I'm saving money to buy a house.",
        "In order to and so as to are more formal: We left early in order to avoid the traffic. I wrote it down so as not to forget it.",
        "So that is used with a subject and a modal: I'll explain it again so that everybody can understand.",
        "For plus noun: This knife is for cutting bread."
      ]
    },
    "vocabulario": [
      {
        "en": "I'm saving money to buy a house.",
        "es": "ahorro para comprar una casa",
        "imagen": "Pareja metiendo dinero en una alcancía con forma de casa",
        "ejemplo": [
          "I'm saving money to buy a house next year.",
          "Ahorro para comprar una casa el próximo año."
        ]
      },
      {
        "en": "in order to avoid the traffic",
        "es": "con el fin de evitar el tráfico",
        "imagen": "Persona saliendo de casa al amanecer",
        "ejemplo": [
          "We left early in order to avoid the traffic.",
          "Salimos temprano para evitar el tráfico."
        ]
      },
      {
        "en": "so as not to forget",
        "es": "para no olvidar",
        "imagen": "Persona anotando algo en una libreta",
        "ejemplo": [
          "I wrote it down so as not to forget it.",
          "Lo anoté para no olvidarlo."
        ]
      },
      {
        "en": "so that everybody can understand",
        "es": "para que todos puedan entender",
        "imagen": "Maestra explicando con calma frente al grupo",
        "ejemplo": [
          "I'll explain it again so that everybody can understand.",
          "Lo explico otra vez para que todos puedan entender."
        ]
      },
      {
        "en": "so that she could call me",
        "es": "para que pudiera llamarme",
        "imagen": "Persona escribiendo su número en un papel",
        "ejemplo": [
          "I gave her my number so that she could call me.",
          "Le di mi número para que pudiera llamarme."
        ]
      },
      {
        "en": "This knife is for cutting bread.",
        "es": "este cuchillo es para cortar pan",
        "imagen": "Cuchillo de pan junto a una hogaza",
        "ejemplo": [
          "This knife is for cutting bread.",
          "Este cuchillo es para cortar pan."
        ]
      },
      {
        "en": "I came here to learn English.",
        "es": "vine a aprender inglés",
        "imagen": "Estudiante adulto llegando a una escuela de idiomas",
        "ejemplo": [
          "I came here to learn English.",
          "Vine aquí a aprender inglés."
        ]
      },
      {
        "en": "so as not to wake the baby",
        "es": "para no despertar al bebé",
        "imagen": "Papá caminando de puntitas cerca de una cuna",
        "ejemplo": [
          "I closed the door quietly so as not to wake the baby.",
          "Cerré la puerta despacio para no despertar al bebé."
        ]
      },
      {
        "en": "set a goal",
        "es": "ponerse una meta",
        "imagen": "Persona escribiendo metas en un pizarrón",
        "ejemplo": [
          "It's important to set a goal and work toward it.",
          "Es importante ponerse una meta y trabajar para lograrla."
        ]
      },
      {
        "en": "achieve a goal",
        "es": "lograr una meta",
        "imagen": "Corredora cruzando la meta con los brazos arriba",
        "ejemplo": [
          "She trained for a year to achieve her goal.",
          "Entrenó un año para lograr su meta."
        ]
      },
      {
        "en": "I aim to",
        "es": "mi objetivo es",
        "imagen": "Arquero apuntando a un blanco",
        "ejemplo": [
          "I aim to finish my degree in two years.",
          "Mi objetivo es terminar mi carrera en dos años."
        ]
      },
      {
        "en": "determined to",
        "es": "decidido a",
        "imagen": "Persona con mirada decidida en un gimnasio",
        "ejemplo": [
          "She's determined to run a marathon.",
          "Está decidida a correr un maratón."
        ]
      },
      {
        "en": "make progress",
        "es": "avanzar / progresar",
        "imagen": "Persona marcando pasos en una lista",
        "ejemplo": [
          "I'm making progress with my English.",
          "Estoy avanzando con mi inglés."
        ]
      },
      {
        "en": "in order to apply",
        "es": "para presentar una solicitud",
        "imagen": "Persona llenando una solicitud en línea",
        "ejemplo": [
          "In order to apply, you must be over eighteen.",
          "Para presentar la solicitud, debes ser mayor de dieciocho."
        ]
      },
      {
        "en": "for some milk",
        "es": "por leche",
        "imagen": "Persona entrando a una tienda",
        "ejemplo": [
          "I went to the store for some milk.",
          "Fui a la tienda por leche."
        ]
      },
      {
        "en": "so that I won't be late",
        "es": "para no llegar tarde",
        "imagen": "Persona poniendo dos alarmas en el celular",
        "ejemplo": [
          "I set two alarms so that I won't be late.",
          "Puse dos alarmas para no llegar tarde."
        ]
      }
    ],
    "grupos": [
      {
        "id": "metas",
        "titulo": "Metas personales",
        "icono": "🎯",
        "patron": [
          "My goal is to…",
          "I'm working hard to…",
          "…so that I can…"
        ],
        "palabras": [
          {
            "en": "get a promotion",
            "es": "conseguir un ascenso",
            "imagen": "Empleada recibiendo felicitaciones de su jefa",
            "ejemplo": [
              "I'm taking a course in order to get a promotion.",
              "Estoy tomando un curso para conseguir un ascenso."
            ]
          },
          {
            "en": "lose weight",
            "es": "bajar de peso",
            "imagen": "Persona midiéndose la cintura sonriendo",
            "ejemplo": [
              "She walks every day to lose weight.",
              "Camina diario para bajar de peso."
            ]
          },
          {
            "en": "save for retirement",
            "es": "ahorrar para el retiro",
            "imagen": "Pareja mayor revisando sus ahorros",
            "ejemplo": [
              "They save every month so that they can retire early.",
              "Ahorran cada mes para poder jubilarse temprano."
            ]
          },
          {
            "en": "learn a new skill",
            "es": "aprender una nueva habilidad",
            "imagen": "Persona aprendiendo carpintería en un taller",
            "ejemplo": [
              "I joined a workshop to learn a new skill.",
              "Me inscribí a un taller para aprender una nueva habilidad."
            ]
          },
          {
            "en": "be more productive",
            "es": "ser más productivo",
            "imagen": "Persona trabajando concentrada con una lista de tareas",
            "ejemplo": [
              "I wake up early so as to be more productive.",
              "Me levanto temprano para ser más productivo."
            ]
          },
          {
            "en": "spend more time with my kids",
            "es": "pasar más tiempo con mis hijos",
            "imagen": "Papá jugando con sus hijos en el parque",
            "ejemplo": [
              "I changed jobs so that I could spend more time with my kids.",
              "Cambié de trabajo para poder pasar más tiempo con mis hijos."
            ]
          }
        ]
      },
      {
        "id": "objetos",
        "titulo": "¿Para qué sirve?",
        "icono": "🔧",
        "patron": [
          "It's for…",
          "It's used to…",
          "You use it to…"
        ],
        "palabras": [
          {
            "en": "a corkscrew",
            "es": "un sacacorchos",
            "imagen": "Sacacorchos junto a una botella",
            "ejemplo": [
              "A corkscrew is for opening bottles.",
              "Un sacacorchos sirve para abrir botellas."
            ]
          },
          {
            "en": "a stapler",
            "es": "una engrapadora",
            "imagen": "Engrapadora sobre un escritorio",
            "ejemplo": [
              "You use a stapler to join papers.",
              "Usas una engrapadora para unir hojas."
            ]
          },
          {
            "en": "a thermometer",
            "es": "un termómetro",
            "imagen": "Termómetro digital marcando la temperatura",
            "ejemplo": [
              "A thermometer is used to measure temperature.",
              "Un termómetro se usa para medir la temperatura."
            ]
          },
          {
            "en": "a blender",
            "es": "una licuadora",
            "imagen": "Licuadora con fruta preparando un licuado",
            "ejemplo": [
              "I use the blender to make smoothies.",
              "Uso la licuadora para hacer licuados."
            ]
          },
          {
            "en": "a ladder",
            "es": "una escalera de mano",
            "imagen": "Escalera de aluminio junto a una pared",
            "ejemplo": [
              "You need a ladder to change that light bulb.",
              "Necesitas una escalera para cambiar ese foco."
            ]
          },
          {
            "en": "a charger",
            "es": "un cargador",
            "imagen": "Cargador conectado a un celular",
            "ejemplo": [
              "This cable is for charging your phone.",
              "Este cable es para cargar tu celular."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I'm saving money to buy a house next year.",
        "es": "Ahorro para comprar una casa el próximo año."
      },
      {
        "en": "We left early in order to avoid the traffic.",
        "es": "Salimos temprano para evitar el tráfico."
      },
      {
        "en": "I wrote it down so as not to forget it.",
        "es": "Lo anoté para no olvidarlo."
      },
      {
        "en": "I'll explain it again so that everybody can understand.",
        "es": "Lo explico otra vez para que todos puedan entender."
      },
      {
        "en": "I gave her my number so that she could call me.",
        "es": "Le di mi número para que pudiera llamarme."
      },
      {
        "en": "I came here to learn English.",
        "es": "Vine aquí a aprender inglés."
      },
      {
        "en": "I closed the door quietly so as not to wake the baby.",
        "es": "Cerré la puerta despacio para no despertar al bebé."
      },
      {
        "en": "In order to apply, you must be over eighteen.",
        "es": "Para presentar la solicitud, debes ser mayor de dieciocho."
      },
      {
        "en": "I changed jobs so that I could spend more time with my kids.",
        "es": "Cambié de trabajo para poder pasar más tiempo con mis hijos."
      },
      {
        "en": "A thermometer is used to measure temperature.",
        "es": "Un termómetro se usa para medir la temperatura."
      }
    ],
    "frases": [
      {
        "en": "I'm studying English every day so that I can apply for a job at an international company.",
        "es": "Estudio inglés todos los días para poder solicitar trabajo en una empresa internacional.",
        "imagen": "Persona estudiando inglés con su laptop en la mañana"
      },
      {
        "en": "The government built new bike lanes in order to reduce traffic and pollution.",
        "es": "El gobierno construyó nuevas ciclovías para reducir el tráfico y la contaminación.",
        "imagen": "Ciclovía moderna con ciclistas en la ciudad"
      },
      {
        "en": "We spoke very quietly so as not to disturb the people in the library.",
        "es": "Hablamos muy bajito para no molestar a la gente en la biblioteca.",
        "imagen": "Estudiantes susurrando en una biblioteca silenciosa"
      },
      {
        "en": "My parents worked very hard so that my brothers and I could go to university.",
        "es": "Mis papás trabajaron muy duro para que mis hermanos y yo pudiéramos ir a la universidad.",
        "imagen": "Padres orgullosos en la graduación de sus hijos"
      },
      {
        "en": "She set a goal to read fifty books this year, and she's already read thirty.",
        "es": "Se puso la meta de leer cincuenta libros este año y ya leyó treinta.",
        "imagen": "Persona junto a una pila de libros leídos"
      },
      {
        "en": "In order to get a visa, you need a valid passport and a bank statement.",
        "es": "Para obtener una visa necesitas un pasaporte vigente y un estado de cuenta.",
        "imagen": "Persona organizando documentos en una carpeta"
      },
      {
        "en": "I left a key with my neighbor so that she could feed the cat while I was away.",
        "es": "Le dejé una llave a mi vecina para que pudiera darle de comer al gato mientras no estaba.",
        "imagen": "Vecina dándole de comer a un gato en una cocina"
      },
      {
        "en": "He's determined to finish the marathon, so he trains every morning before work.",
        "es": "Está decidido a terminar el maratón, así que entrena cada mañana antes del trabajo.",
        "imagen": "Corredor entrenando al amanecer"
      },
      {
        "en": "We bought a bigger table so as to have enough space for the whole family at Christmas.",
        "es": "Compramos una mesa más grande para tener espacio para toda la familia en Navidad.",
        "imagen": "Familia grande cenando alrededor de una mesa larga"
      },
      {
        "en": "I record my English lessons so that I can listen to them again on the bus.",
        "es": "Grabo mis clases de inglés para poder escucharlas otra vez en el camión.",
        "imagen": "Persona con audífonos en un autobús"
      }
    ],
    "listening": [
      {
        "audio": "I'm learning Portuguese so that I can talk to my wife's family in Brazil.",
        "pregunta": "¿Para qué aprende portugués?",
        "opciones": [
          "Para hablar con la familia de su esposa",
          "Para su trabajo",
          "Para viajar",
          "Para estudiar"
        ]
      },
      {
        "audio": "We turned off the lights in order to save electricity.",
        "pregunta": "¿Por qué apagaron las luces?",
        "opciones": [
          "Para ahorrar luz",
          "Para dormir",
          "Para ver una película",
          "Porque se fundió un foco"
        ]
      },
      {
        "audio": "I put the cake in the fridge so as not to forget it on the table.",
        "pregunta": "¿Dónde puso el pastel?",
        "opciones": [
          "En el refrigerador",
          "En la mesa",
          "En el horno",
          "En una caja"
        ]
      },
      {
        "audio": "She moved closer to her office so that she wouldn't spend hours in traffic.",
        "pregunta": "¿Por qué se mudó?",
        "opciones": [
          "Para no pasar horas en el tráfico",
          "Para estar cerca de su familia",
          "Porque era más barato",
          "Porque cambió de trabajo"
        ]
      },
      {
        "audio": "This app is for practicing pronunciation. You record your voice and compare it.",
        "pregunta": "¿Para qué sirve la app?",
        "opciones": [
          "Para practicar pronunciación",
          "Para traducir",
          "Para aprender vocabulario",
          "Para ver videos"
        ]
      }
    ],
    "lectura": {
      "titulo": "A plan to change my life",
      "texto": "Last January, Daniela decided to change her life. She was thirty-two, she worked in a job she didn't like, and she always felt tired. She sat down and wrote three goals. First, she wanted to get fit, so she started walking to work instead of taking the bus. In order to have more energy, she also stopped drinking soda. Second, she wanted to change careers and become a graphic designer. She enrolled in an online course and studied every night so that she could finish it in six months. She even sold her TV so as not to waste time watching series! Third, she wanted to save money in order to travel to Peru. She opened a special savings account and put ten percent of her salary into it every month. A year later, she had lost eight kilos, she had a new job at a design studio, and she was finally standing in front of Machu Picchu.",
      "preguntas": [
        {
          "pregunta": "¿Qué hizo para estar en forma?",
          "opciones": [
            "Caminar al trabajo en vez de tomar el camión",
            "Ir al gimnasio",
            "Nadar",
            "Bailar"
          ]
        },
        {
          "pregunta": "¿Por qué vendió su televisión?",
          "opciones": [
            "Para no perder tiempo viendo series",
            "Necesitaba dinero",
            "Estaba descompuesta",
            "Se mudó"
          ]
        },
        {
          "pregunta": "¿Cuánto ahorraba cada mes?",
          "opciones": [
            "El diez por ciento de su sueldo",
            "La mitad de su sueldo",
            "Mil pesos",
            "Nada"
          ]
        },
        {
          "pregunta": "¿Dónde estaba un año después?",
          "opciones": [
            "Frente a Machu Picchu",
            "En su antiguo trabajo",
            "En la universidad",
            "En Brasil"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con to, in order to o so that.",
        "pregunta": "I went to the bank ___ get some money.",
        "respuestas": [
          "to",
          "in order to"
        ]
      },
      {
        "instruccion": "Completa con to, in order to o so that.",
        "pregunta": "Speak slowly ___ everybody can understand.",
        "respuestas": [
          "so that",
          "so"
        ]
      },
      {
        "instruccion": "Completa con so as not to.",
        "pregunta": "I took notes so as ___ forget anything.",
        "respuestas": [
          "not to"
        ]
      },
      {
        "instruccion": "Completa con can o could.",
        "pregunta": "I lent him my car so that he ___ go to the airport.",
        "respuestas": [
          "could"
        ]
      },
      {
        "instruccion": "Completa con for o to.",
        "pregunta": "This brush is ___ painting walls.",
        "respuestas": [
          "for"
        ]
      },
      {
        "instruccion": "Completa con for o to.",
        "pregunta": "I came here ___ see you.",
        "respuestas": [
          "to"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Ahorro para comprar una casa.",
        "respuestas": [
          "I'm saving to buy a house",
          "I'm saving money to buy a house",
          "I save to buy a house",
          "I save money to buy a house"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "para que puedan entender",
        "respuestas": [
          "so that they can understand",
          "so they can understand"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "lograr una meta",
        "respuestas": [
          "achieve a goal",
          "reach a goal"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I study English for get a better job.",
        "respuestas": [
          "I study English to get a better job",
          "I study English in order to get a better job"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "We left early ___ catch the first train.",
        "opciones": [
          "in order to",
          "so that",
          "for",
          "for to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I'll write it down ___ I don't forget.",
        "opciones": [
          "so that",
          "in order to",
          "so as to",
          "for"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She whispered so as ___ the others.",
        "opciones": [
          "not to wake",
          "to not waking",
          "not waking",
          "don't wake"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "This machine is ___ making coffee.",
        "opciones": [
          "for",
          "to",
          "so that",
          "in order"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I gave him the address so that he ___ find the house.",
        "opciones": [
          "could",
          "can to",
          "to",
          "for"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«I aim to finish this year» significa:",
        "opciones": [
          "Mi objetivo es terminar este año",
          "Apunto a terminar el año",
          "Ya terminé este año",
          "No terminaré este año"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I installed an app in order to control how much money I spend.",
        "pregunta": "¿Para qué instaló la app?",
        "opciones": [
          "Para controlar sus gastos",
          "Para ganar dinero",
          "Para comprar en línea",
          "Para pagar la renta"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The teacher repeated the instructions so that nobody would make mistakes.",
        "pregunta": "¿Por qué repitió las instrucciones?",
        "opciones": [
          "Para que nadie se equivocara",
          "Porque nadie la oyó",
          "Porque era nueva",
          "Para perder tiempo"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Vine a aprender.",
        "respuestas": [
          "I came to learn",
          "I came here to learn"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: para no olvidarlo",
        "respuestas": [
          "so as not to forget it",
          "in order not to forget it",
          "so that I don't forget it",
          "so I don't forget it"
        ]
      }
    ]
  },
  {
    "id": "b2-24",
    "num": 24,
    "titulo": "Had better, would rather, it's time",
    "contexto": "Recomendaciones y preferencias",
    "explicacion": {
      "es": [
        "***Had better*** (*'d better*) + **verbo base** da un **consejo fuerte** o una **advertencia** para una situación concreta: si no lo haces, habrá un problema: *You**'d better take** an umbrella.* (Más te vale llevar paraguas.) Negativo: ***'d better not***: *You**'d better not be** late.*",
        "***Would rather*** (*'d rather*) + **verbo base** expresa **preferencia**: *I**'d rather stay** home tonight.* (Prefiero quedarme en casa.) Para comparar: ***would rather … than***: *I'd rather walk **than** take the bus.*",
        "***Would rather*** + **otra persona** + **pasado** = **preferiría que alguien hiciera algo**: *I'd rather you **didn't smoke** here.* (Preferiría que no fumaras aquí.) Es una forma muy **amable** de pedir algo.",
        "***It's time*** + ***to*** + verbo = **ya es hora de**: *It's time **to go**.* ***It's (high / about) time*** + sujeto + **pasado** = **ya era hora de que…** (crítica): ***It's about time** you **got** a job!* (¡Ya es hora de que consigas trabajo!)"
      ],
      "tabla": {
        "columnas": [
          "Forma",
          "Significado",
          "Ejemplo"
        ],
        "filas": [
          [
            "'d better + verbo",
            "más te vale / será mejor que",
            "We'd better hurry."
          ],
          [
            "'d better not + verbo",
            "más vale que no",
            "You'd better not tell anyone."
          ],
          [
            "'d rather + verbo (than)",
            "prefiero (en vez de)",
            "I'd rather have tea than coffee."
          ],
          [
            "'d rather + persona + pasado",
            "preferiría que alguien…",
            "I'd rather you called me first."
          ],
          [
            "it's time to + verbo",
            "ya es hora de",
            "It's time to say goodbye."
          ],
          [
            "it's high time + pasado",
            "ya es hora de que (crítica)",
            "It's high time we left."
          ]
        ]
      },
      "ojo": [
        "*Had better* es **presente o futuro**, aunque tenga *had*: *You'd better go **now*** ✅.",
        "Sin *to*: *You'd better **go*** ✅ (no *had better to go* ❌). *I'd rather **stay*** ✅ (no *would rather to stay* ❌).",
        "*I'd better* = *I **had** better*; *I'd rather* = *I **would** rather*.",
        "***Prefer*** + *-ing* / *to*: *I **prefer walking** to driving.* Es otra forma de preferencia, más general.",
        "Preguntas: ***Would you rather** go to the beach or to the mountains?* (¿Qué preferirías…?)"
      ],
      "en": [
        "Had better gives strong advice: You'd better take an umbrella. You'd better not be late.",
        "Would rather expresses preference: I'd rather stay home tonight. I'd rather walk than take the bus.",
        "I'd rather you didn't smoke here is a polite request.",
        "It's time to go. It's about time you got a job!"
      ]
    },
    "vocabulario": [
      {
        "en": "You'd better take an umbrella.",
        "es": "más te vale llevar paraguas",
        "imagen": "Nubes negras sobre la ciudad y una persona saliendo",
        "ejemplo": [
          "You'd better take an umbrella. It's going to rain.",
          "Más te vale llevar paraguas. Va a llover."
        ]
      },
      {
        "en": "We'd better hurry.",
        "es": "será mejor que nos apuremos",
        "imagen": "Personas caminando rápido mirando el reloj",
        "ejemplo": [
          "We'd better hurry or we'll miss the train.",
          "Será mejor que nos apuremos o perderemos el tren."
        ]
      },
      {
        "en": "You'd better not be late.",
        "es": "más te vale no llegar tarde",
        "imagen": "Jefa señalando el reloj seriamente",
        "ejemplo": [
          "You'd better not be late for the interview.",
          "Más te vale no llegar tarde a la entrevista."
        ]
      },
      {
        "en": "I'd rather stay home.",
        "es": "prefiero quedarme en casa",
        "imagen": "Persona en pijama en el sofá con una cobija",
        "ejemplo": [
          "I'm tired. I'd rather stay home tonight.",
          "Estoy cansado. Prefiero quedarme en casa hoy."
        ]
      },
      {
        "en": "I'd rather walk than take the bus.",
        "es": "prefiero caminar que tomar el camión",
        "imagen": "Persona caminando feliz junto a un camión lleno",
        "ejemplo": [
          "I'd rather walk than take a crowded bus.",
          "Prefiero caminar que tomar un camión lleno."
        ]
      },
      {
        "en": "I'd rather you didn't smoke here.",
        "es": "preferiría que no fumaras aquí",
        "imagen": "Persona señalando amablemente un letrero de no fumar",
        "ejemplo": [
          "I'd rather you didn't smoke in the house.",
          "Preferiría que no fumaras en la casa."
        ]
      },
      {
        "en": "It's time to go.",
        "es": "ya es hora de irnos",
        "imagen": "Persona tomando su abrigo al final de una fiesta",
        "ejemplo": [
          "It's late. It's time to go.",
          "Es tarde. Ya es hora de irnos."
        ]
      },
      {
        "en": "It's about time you got a job.",
        "es": "ya es hora de que consigas trabajo",
        "imagen": "Mamá hablando seriamente con su hijo adulto en el sofá",
        "ejemplo": [
          "You're twenty-five. It's about time you got a job!",
          "Tienes veinticinco años. ¡Ya es hora de que consigas trabajo!"
        ]
      },
      {
        "en": "It's high time we left.",
        "es": "ya es hora de que nos vayamos",
        "imagen": "Reloj marcando la medianoche en una reunión",
        "ejemplo": [
          "It's high time we left. Everybody is tired.",
          "Ya es hora de que nos vayamos. Todos están cansados."
        ]
      },
      {
        "en": "Would you rather…?",
        "es": "¿qué preferirías…?",
        "imagen": "Dos amigos eligiendo entre dos destinos",
        "ejemplo": [
          "Would you rather go to the beach or to the mountains?",
          "¿Preferirías ir a la playa o a las montañas?"
        ]
      },
      {
        "en": "I prefer walking to driving.",
        "es": "prefiero caminar que manejar",
        "imagen": "Persona caminando por un parque arbolado",
        "ejemplo": [
          "I prefer walking to driving in the city.",
          "Prefiero caminar que manejar en la ciudad."
        ]
      },
      {
        "en": "I'd better go.",
        "es": "mejor me voy",
        "imagen": "Persona despidiéndose y mirando el reloj",
        "ejemplo": [
          "It's getting dark. I'd better go.",
          "Ya está oscureciendo. Mejor me voy."
        ]
      },
      {
        "en": "You'd better see a doctor.",
        "es": "más vale que vayas al doctor",
        "imagen": "Persona tosiendo y su amiga preocupada",
        "ejemplo": [
          "That cough sounds bad. You'd better see a doctor.",
          "Esa tos suena mal. Más vale que vayas al doctor."
        ]
      },
      {
        "en": "I'd rather not say.",
        "es": "prefiero no decirlo",
        "imagen": "Persona sonriendo y negando con la cabeza",
        "ejemplo": [
          "How much did it cost? I'd rather not say.",
          "¿Cuánto costó? Prefiero no decirlo."
        ]
      },
      {
        "en": "It's time for bed.",
        "es": "es hora de dormir",
        "imagen": "Niño en pijama junto a su cama",
        "ejemplo": [
          "Come on, kids. It's time for bed.",
          "Ándale, niños. Es hora de dormir."
        ]
      },
      {
        "en": "We'd better book a table.",
        "es": "mejor reservamos una mesa",
        "imagen": "Persona llamando a un restaurante",
        "ejemplo": [
          "It's Friday. We'd better book a table.",
          "Es viernes. Mejor reservamos una mesa."
        ]
      }
    ],
    "grupos": [
      {
        "id": "preferencias",
        "titulo": "Preferencias",
        "icono": "❤️",
        "patron": [
          "I'd rather…",
          "I prefer… to…",
          "Would you rather…?"
        ],
        "palabras": [
          {
            "en": "I'd rather have tea.",
            "es": "prefiero té",
            "imagen": "Taza de té junto a una taza de café",
            "ejemplo": [
              "Coffee? No, thanks. I'd rather have tea.",
              "¿Café? No, gracias. Prefiero té."
            ]
          },
          {
            "en": "I'd rather not go.",
            "es": "prefiero no ir",
            "imagen": "Persona negando una invitación educadamente",
            "ejemplo": [
              "It's raining. I'd rather not go out.",
              "Está lloviendo. Prefiero no salir."
            ]
          },
          {
            "en": "I prefer the country to the city.",
            "es": "prefiero el campo a la ciudad",
            "imagen": "Casa de campo con montañas",
            "ejemplo": [
              "I prefer the country to the city.",
              "Prefiero el campo a la ciudad."
            ]
          },
          {
            "en": "Would you rather cook or wash up?",
            "es": "¿prefieres cocinar o lavar los trastes?",
            "imagen": "Pareja negociando en la cocina",
            "ejemplo": [
              "Would you rather cook or wash up?",
              "¿Prefieres cocinar o lavar los trastes?"
            ]
          },
          {
            "en": "Either is fine.",
            "es": "cualquiera está bien",
            "imagen": "Persona encogiéndose de hombros con una sonrisa",
            "ejemplo": [
              "Pizza or tacos? Either is fine.",
              "¿Pizza o tacos? Cualquiera está bien."
            ]
          },
          {
            "en": "I don't mind.",
            "es": "me da igual",
            "imagen": "Persona relajada dejando decidir a otro",
            "ejemplo": [
              "Where do you want to eat? I don't mind.",
              "¿Dónde quieres comer? Me da igual."
            ]
          }
        ]
      },
      {
        "id": "advertencias",
        "titulo": "Consejos y advertencias",
        "icono": "⚠️",
        "patron": [
          "You'd better…",
          "You'd better not…",
          "If I were you…"
        ],
        "palabras": [
          {
            "en": "You'd better slow down.",
            "es": "más vale que bajes la velocidad",
            "imagen": "Velocímetro de carro marcando alta velocidad",
            "ejemplo": [
              "There are police on this road. You'd better slow down.",
              "Hay policías en esta carretera. Más vale que bajes la velocidad."
            ]
          },
          {
            "en": "You'd better not touch that.",
            "es": "más vale que no toques eso",
            "imagen": "Niño a punto de tocar una estufa",
            "ejemplo": [
              "That's hot! You'd better not touch it.",
              "¡Está caliente! Más vale que no lo toques."
            ]
          },
          {
            "en": "We'd better leave now.",
            "es": "mejor nos vamos ya",
            "imagen": "Personas tomando sus bolsas en un café",
            "ejemplo": [
              "We'd better leave now if we want to get there on time.",
              "Mejor nos vamos ya si queremos llegar a tiempo."
            ]
          },
          {
            "en": "You'd better apologize.",
            "es": "más vale que te disculpes",
            "imagen": "Persona apenada frente a su amiga molesta",
            "ejemplo": [
              "She's really upset. You'd better apologize.",
              "Está muy molesta. Más vale que te disculpes."
            ]
          },
          {
            "en": "I'd better check.",
            "es": "mejor reviso",
            "imagen": "Persona revisando la estufa antes de salir",
            "ejemplo": [
              "Did I turn off the stove? I'd better check.",
              "¿Apagué la estufa? Mejor reviso."
            ]
          },
          {
            "en": "You'd better save some money.",
            "es": "más vale que ahorres",
            "imagen": "Persona metiendo monedas en una alcancía",
            "ejemplo": [
              "You'd better save some money for emergencies.",
              "Más vale que ahorres algo para emergencias."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "You'd better take an umbrella. It's going to rain.",
        "es": "Más te vale llevar paraguas. Va a llover."
      },
      {
        "en": "We'd better hurry or we'll miss the train.",
        "es": "Será mejor que nos apuremos o perderemos el tren."
      },
      {
        "en": "I'm tired. I'd rather stay home tonight.",
        "es": "Estoy cansado. Prefiero quedarme en casa hoy."
      },
      {
        "en": "I'd rather walk than take a crowded bus.",
        "es": "Prefiero caminar que tomar un camión lleno."
      },
      {
        "en": "I'd rather you didn't smoke in the house.",
        "es": "Preferiría que no fumaras en la casa."
      },
      {
        "en": "You're twenty-five. It's about time you got a job!",
        "es": "Tienes veinticinco años. ¡Ya es hora de que consigas trabajo!"
      },
      {
        "en": "Would you rather go to the beach or to the mountains?",
        "es": "¿Preferirías ir a la playa o a las montañas?"
      },
      {
        "en": "That cough sounds bad. You'd better see a doctor.",
        "es": "Esa tos suena mal. Más vale que vayas al doctor."
      },
      {
        "en": "How much did it cost? I'd rather not say.",
        "es": "¿Cuánto costó? Prefiero no decirlo."
      },
      {
        "en": "Did I turn off the stove? I'd better check.",
        "es": "¿Apagué la estufa? Mejor reviso."
      }
    ],
    "frases": [
      {
        "en": "You'd better book the tickets now, because the concert will probably sell out in a few hours.",
        "es": "Más vale que reserves los boletos ya, porque seguramente el concierto se agotará en unas horas.",
        "imagen": "Persona comprando boletos en el celular con prisa"
      },
      {
        "en": "I'd rather spend my money on traveling than on expensive clothes.",
        "es": "Prefiero gastar mi dinero en viajes que en ropa cara.",
        "imagen": "Persona con mochila en un mirador frente a una tienda de ropa"
      },
      {
        "en": "It's time you started thinking seriously about your future.",
        "es": "Ya es hora de que empieces a pensar en serio en tu futuro.",
        "imagen": "Papá hablando con su hijo adolescente en la mesa"
      },
      {
        "en": "We'd better not make any noise. The baby has just fallen asleep.",
        "es": "Mejor no hagamos ruido. El bebé se acaba de dormir.",
        "imagen": "Papás caminando de puntitas frente a una cuna"
      },
      {
        "en": "Would you rather live in a big apartment far from work or in a small one near the office?",
        "es": "¿Preferirías vivir en un departamento grande lejos del trabajo o en uno pequeño cerca de la oficina?",
        "imagen": "Dos departamentos comparados en una pantalla"
      },
      {
        "en": "I'd rather you told me the truth, even if it hurts.",
        "es": "Preferiría que me dijeras la verdad, aunque duela.",
        "imagen": "Persona hablando con sinceridad a su pareja"
      },
      {
        "en": "It's about time the city fixed this road. It's been full of holes for years.",
        "es": "Ya es hora de que la ciudad arregle esta calle. Lleva años llena de baches.",
        "imagen": "Calle llena de baches con un carro esquivándolos"
      },
      {
        "en": "You'd better charge your phone before the trip. There's no electricity at the cabin.",
        "es": "Más vale que cargues tu celular antes del viaje. En la cabaña no hay luz.",
        "imagen": "Cabaña en el bosque sin cables eléctricos"
      },
      {
        "en": "My grandmother would rather cook for twenty people than eat at a restaurant.",
        "es": "Mi abuela prefiere cocinar para veinte personas que comer en un restaurante.",
        "imagen": "Abuela cocinando en ollas grandes para una familia"
      },
      {
        "en": "It's late and we have to work tomorrow. I think it's time to go home.",
        "es": "Es tarde y mañana trabajamos. Creo que ya es hora de irnos a casa.",
        "imagen": "Amigos despidiéndose en la puerta de una casa de noche"
      }
    ],
    "listening": [
      {
        "audio": "You'd better wear a jacket. It's going to be cold tonight.",
        "pregunta": "¿Qué le aconseja?",
        "opciones": [
          "Ponerse chamarra",
          "Llevar paraguas",
          "Quedarse en casa",
          "Salir temprano"
        ]
      },
      {
        "audio": "Do you want to go to the cinema? I'd rather watch a movie at home.",
        "pregunta": "¿Qué prefiere?",
        "opciones": [
          "Ver una película en casa",
          "Ir al cine",
          "Salir a cenar",
          "Dormir"
        ]
      },
      {
        "audio": "It's high time you cleaned your room. It's a disaster!",
        "pregunta": "¿Qué debe hacer?",
        "opciones": [
          "Limpiar su cuarto",
          "Hacer la tarea",
          "Dormir",
          "Comer"
        ]
      },
      {
        "audio": "I'd rather you didn't use my laptop without asking.",
        "pregunta": "¿Qué le pide?",
        "opciones": [
          "Que no use su laptop sin pedirla",
          "Que le preste su laptop",
          "Que compre otra laptop",
          "Que la apague"
        ]
      },
      {
        "audio": "We'd better leave now. There's a lot of traffic on Fridays.",
        "pregunta": "¿Por qué deben irse ya?",
        "opciones": [
          "Hay mucho tráfico los viernes",
          "Va a llover",
          "Cierra el lugar",
          "Tienen hambre"
        ]
      }
    ],
    "lectura": {
      "titulo": "Advice for a new student",
      "texto": "Dear Pablo, I'm so happy that you're starting university next month! Since I graduated last year, here's some advice. First, you'd better choose your classes carefully; some professors are much stricter than others, so ask older students. Second, you'd better not leave your assignments until the last minute. Believe me, I did that many times, and I would rather never feel that stress again! Third, about where to live: I know you'd rather live alone than share an apartment, but rent near the campus is very expensive. In my opinion, it's better to share and save money for other things. Fourth, it's time you learned to cook. You can't eat tacos every day for four years! Finally, don't forget to have fun. University isn't only about studying; it's also about meeting people and discovering what you love. And, of course, call your mother. She'd rather you called once a week than once a month! Good luck! Your cousin, Elena.",
      "preguntas": [
        {
          "pregunta": "¿Por qué debe elegir sus clases con cuidado?",
          "opciones": [
            "Algunos profesores son más estrictos",
            "Son caras",
            "Hay pocas",
            "Son muy temprano"
          ]
        },
        {
          "pregunta": "¿Qué preferiría Pablo sobre dónde vivir?",
          "opciones": [
            "Vivir solo",
            "Compartir departamento",
            "Vivir con sus papás",
            "Vivir en el campus"
          ]
        },
        {
          "pregunta": "¿Qué dice Elena que ya es hora de que aprenda?",
          "opciones": [
            "A cocinar",
            "A manejar",
            "Inglés",
            "A ahorrar"
          ]
        },
        {
          "pregunta": "¿Qué preferiría la mamá?",
          "opciones": [
            "Que la llame una vez a la semana",
            "Que la visite",
            "Que le escriba cartas",
            "Que no la llame"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con had better o would rather.",
        "pregunta": "You'd ___ hurry. The bus is coming.",
        "respuestas": [
          "better"
        ]
      },
      {
        "instruccion": "Completa con had better o would rather.",
        "pregunta": "I'd ___ have pizza than pasta.",
        "respuestas": [
          "rather"
        ]
      },
      {
        "instruccion": "Completa con not.",
        "pregunta": "You'd better ___ tell anyone about this.",
        "respuestas": [
          "not"
        ]
      },
      {
        "instruccion": "Completa con el pasado.",
        "pregunta": "I'd rather you ___ (not / call) me so late.",
        "respuestas": [
          "didn't call",
          "did not call"
        ]
      },
      {
        "instruccion": "Completa con el pasado.",
        "pregunta": "It's about time you ___ (find) a job.",
        "respuestas": [
          "found"
        ]
      },
      {
        "instruccion": "Completa con to + verbo.",
        "pregunta": "It's time ___ (go) to bed.",
        "respuestas": [
          "to go"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Prefiero quedarme en casa.",
        "respuestas": [
          "I'd rather stay home",
          "I would rather stay home",
          "I'd rather stay at home",
          "I prefer to stay home",
          "I prefer to stay at home"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Más te vale llevar paraguas.",
        "respuestas": [
          "You'd better take an umbrella",
          "You had better take an umbrella",
          "You'd better bring an umbrella"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Ya es hora de irnos.",
        "respuestas": [
          "It's time to go",
          "It's time to leave",
          "It is time to go",
          "It's time we left",
          "It's time for us to go"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "You had better to see a doctor.",
        "respuestas": [
          "You had better see a doctor",
          "You'd better see a doctor"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "It's late. We'd better ___.",
        "opciones": [
          "go",
          "to go",
          "going",
          "went"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I'd rather ___ by train than by plane.",
        "opciones": [
          "travel",
          "to travel",
          "traveling",
          "traveled"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I'd rather you ___ the door. It's cold.",
        "opciones": [
          "closed",
          "close",
          "to close",
          "closing"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "It's high time you ___ to the dentist.",
        "opciones": [
          "went",
          "go",
          "going",
          "to go"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«I'd better» significa:",
        "opciones": [
          "I had better (más me vale)",
          "I would better",
          "I did better",
          "I'm better"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ you rather have a dog or a cat?",
        "opciones": [
          "Would",
          "Had",
          "Do",
          "Are"
        ]
      },
      {
        "tipo": "listening",
        "audio": "You'd better not eat that cheese. It's been in the fridge for two weeks.",
        "pregunta": "¿Por qué no debe comer el queso?",
        "opciones": [
          "Lleva dos semanas en el refrigerador",
          "Es muy caro",
          "Es de otra persona",
          "Es picante"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I'd rather work on Saturday than stay late every day this week.",
        "pregunta": "¿Qué prefiere?",
        "opciones": [
          "Trabajar el sábado",
          "Quedarse tarde toda la semana",
          "No trabajar",
          "Trabajar el domingo"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Prefiero no decirlo.",
        "respuestas": [
          "I'd rather not say",
          "I would rather not say",
          "I'd rather not say it"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Mejor me voy.",
        "respuestas": [
          "I'd better go",
          "I had better go",
          "I'd better leave"
        ]
      }
    ]
  },
  {
    "id": "b2-25",
    "num": 25,
    "titulo": "Phrasal verbs de tres partes y con varios significados",
    "contexto": "Relaciones y trabajo",
    "explicacion": {
      "es": [
        "Los **phrasal verbs de tres partes** tienen verbo + partícula + preposición y **nunca se separan**: *I **get on with** my boss.* (Me llevo bien con mi jefe.) *We've **run out of** coffee.* (Se nos acabó el café.)",
        "Los más comunes: ***get on / along with*** (llevarse bien con), ***look forward to*** (esperar con ganas), ***come up with*** (ocurrírsele, proponer), ***put up with*** (aguantar, tolerar), ***catch up with*** (ponerse al día con), ***look up to*** (admirar), ***get away with*** (salirse con la suya), ***cut down on*** (reducir).",
        "Muchos phrasal verbs tienen **varios significados** según el contexto: ***take off*** = despegar (avión) / quitarse (ropa) / tener éxito de repente. ***Pick up*** = recoger / aprender sin estudiar / mejorar. ***Turn up*** = subir el volumen / aparecer, llegar.",
        "Con ***look forward to*** el verbo va en ***-ing***: *I look forward to **hearing** from you.* (Quedo en espera de su respuesta.) Es la despedida típica de los correos formales."
      ],
      "tabla": {
        "columnas": [
          "Phrasal verb",
          "Significado",
          "Ejemplo"
        ],
        "filas": [
          [
            "get on with",
            "llevarse bien con",
            "She gets on well with her colleagues."
          ],
          [
            "put up with",
            "aguantar",
            "I can't put up with this noise anymore."
          ],
          [
            "come up with",
            "proponer, idear",
            "He came up with a great idea."
          ],
          [
            "look forward to",
            "esperar con ganas",
            "I'm looking forward to the weekend."
          ],
          [
            "catch up with",
            "ponerse al día con",
            "Let's meet and catch up with each other."
          ],
          [
            "take off",
            "despegar / quitarse / tener éxito",
            "Her career really took off last year."
          ]
        ]
      },
      "ojo": [
        "No se separan: *I get **on well with** him* ✅ (se puede poner *well* en medio, pero no el objeto).",
        "*Look forward to **see** you* ❌ → *Look forward to **seeing** you* ✅.",
        "***Fall out with*** = pelearse con; ***make up with*** = reconciliarse con; ***break up with*** = terminar con (pareja).",
        "En el trabajo: ***take on*** (contratar / asumir), ***lay off*** (despedir por recorte), ***carry out*** (llevar a cabo), ***fill in for*** (suplir a alguien).",
        "Aprende los phrasal verbs **con ejemplos y contexto**, no solos: el significado depende de la situación."
      ],
      "en": [
        "Three-part phrasal verbs never separate: I get on with my boss. We've run out of coffee.",
        "Common ones: put up with, come up with, look forward to, catch up with, look up to.",
        "Many phrasal verbs have several meanings: take off can mean leave the ground, remove clothes, or become successful.",
        "I look forward to hearing from you."
      ]
    },
    "vocabulario": [
      {
        "en": "get on with",
        "es": "llevarse bien con",
        "imagen": "Compañeros de oficina riendo juntos",
        "ejemplo": [
          "I get on really well with my boss.",
          "Me llevo muy bien con mi jefe."
        ]
      },
      {
        "en": "put up with",
        "es": "aguantar / tolerar",
        "imagen": "Persona tapándose los oídos por el ruido de una obra",
        "ejemplo": [
          "I can't put up with this noise anymore.",
          "Ya no aguanto este ruido."
        ]
      },
      {
        "en": "come up with",
        "es": "proponer / idear",
        "imagen": "Persona con un foco de idea en una lluvia de ideas",
        "ejemplo": [
          "She came up with a brilliant idea.",
          "Se le ocurrió una idea brillante."
        ]
      },
      {
        "en": "look forward to",
        "es": "esperar con ganas",
        "imagen": "Persona marcando los días en un calendario hacia vacaciones",
        "ejemplo": [
          "I'm looking forward to the holidays.",
          "Estoy esperando con ganas las vacaciones."
        ]
      },
      {
        "en": "catch up with",
        "es": "ponerse al día con",
        "imagen": "Amigos platicando en un café después de mucho tiempo",
        "ejemplo": [
          "Let's have coffee and catch up.",
          "Tomemos un café y nos ponemos al día."
        ]
      },
      {
        "en": "look up to",
        "es": "admirar",
        "imagen": "Niño mirando con admiración a su hermano mayor",
        "ejemplo": [
          "I've always looked up to my older sister.",
          "Siempre he admirado a mi hermana mayor."
        ]
      },
      {
        "en": "run out of",
        "es": "quedarse sin",
        "imagen": "Taza vacía y una cafetera sin café",
        "ejemplo": [
          "We've run out of coffee.",
          "Se nos acabó el café."
        ]
      },
      {
        "en": "cut down on",
        "es": "reducir",
        "imagen": "Persona apartando un plato de pan dulce",
        "ejemplo": [
          "I'm trying to cut down on sugar.",
          "Estoy tratando de reducir el azúcar."
        ]
      },
      {
        "en": "get away with",
        "es": "salirse con la suya",
        "imagen": "Niño escondiendo galletas con una sonrisa",
        "ejemplo": [
          "He always gets away with everything.",
          "Siempre se sale con la suya."
        ]
      },
      {
        "en": "fall out with",
        "es": "pelearse con",
        "imagen": "Dos amigas dándose la espalda",
        "ejemplo": [
          "She fell out with her best friend.",
          "Se peleó con su mejor amiga."
        ]
      },
      {
        "en": "make up with",
        "es": "reconciliarse con",
        "imagen": "Dos amigos abrazándose tras una discusión",
        "ejemplo": [
          "He made up with his brother after years.",
          "Se reconcilió con su hermano después de años."
        ]
      },
      {
        "en": "take on",
        "es": "contratar / asumir",
        "imagen": "Gerente dando la bienvenida a nuevos empleados",
        "ejemplo": [
          "The company is taking on twenty new workers.",
          "La empresa va a contratar a veinte trabajadores nuevos."
        ]
      },
      {
        "en": "lay off",
        "es": "despedir (por recorte)",
        "imagen": "Empleados saliendo tristes de una fábrica",
        "ejemplo": [
          "The factory laid off two hundred people.",
          "La fábrica despidió a doscientas personas."
        ]
      },
      {
        "en": "carry out",
        "es": "llevar a cabo",
        "imagen": "Científicos haciendo pruebas en un laboratorio",
        "ejemplo": [
          "They carried out a survey of a thousand people.",
          "Llevaron a cabo una encuesta a mil personas."
        ]
      },
      {
        "en": "fill in for",
        "es": "suplir a",
        "imagen": "Compañera sentándose en el escritorio de otro",
        "ejemplo": [
          "Can you fill in for me tomorrow?",
          "¿Me puedes suplir mañana?"
        ]
      },
      {
        "en": "took off",
        "es": "despegó / tuvo éxito",
        "imagen": "Gráfica de ventas subiendo de golpe",
        "ejemplo": [
          "Her business really took off last year.",
          "Su negocio despegó el año pasado."
        ]
      }
    ],
    "grupos": [
      {
        "id": "significados",
        "titulo": "Un verbo, varios significados",
        "icono": "🔀",
        "patron": [
          "take off",
          "pick up",
          "turn up"
        ],
        "palabras": [
          {
            "en": "The plane took off.",
            "es": "el avión despegó",
            "imagen": "Avión despegando de la pista",
            "ejemplo": [
              "The plane took off an hour late.",
              "El avión despegó una hora tarde."
            ]
          },
          {
            "en": "Take off your shoes.",
            "es": "quítate los zapatos",
            "imagen": "Persona quitándose el abrigo al entrar",
            "ejemplo": [
              "Take off your shoes, please.",
              "Quítate los zapatos, por favor."
            ]
          },
          {
            "en": "I'll pick you up.",
            "es": "paso por ti",
            "imagen": "Papá recogiendo a su hija en la escuela",
            "ejemplo": [
              "I'll pick you up at six.",
              "Paso por ti a las seis."
            ]
          },
          {
            "en": "Kids pick up languages.",
            "es": "los niños aprenden idiomas sin estudiar",
            "imagen": "Niño hablando inglés con otros niños en un parque",
            "ejemplo": [
              "Kids pick up languages very quickly.",
              "Los niños aprenden idiomas muy rápido."
            ]
          },
          {
            "en": "Turn up the radio!",
            "es": "¡súbele al radio!",
            "imagen": "Mano subiendo el volumen de una bocina",
            "ejemplo": [
              "Turn up the radio! I love this song.",
              "¡Súbele al radio! Me encanta esta canción."
            ]
          },
          {
            "en": "He turned up late.",
            "es": "llegó tarde",
            "imagen": "Amigo llegando tarde a una fiesta",
            "ejemplo": [
              "He turned up two hours late.",
              "Apareció dos horas tarde."
            ]
          }
        ]
      },
      {
        "id": "relaciones",
        "titulo": "Relaciones personales",
        "icono": "💞",
        "patron": [
          "break up with…",
          "go out with…",
          "settle down"
        ],
        "palabras": [
          {
            "en": "go out with",
            "es": "salir con (pareja)",
            "imagen": "Pareja joven en una cita en un restaurante",
            "ejemplo": [
              "She's going out with a guy from work.",
              "Está saliendo con un chavo del trabajo."
            ]
          },
          {
            "en": "break up with",
            "es": "terminar con",
            "imagen": "Pareja triste sentada lejos en una banca",
            "ejemplo": [
              "He broke up with his girlfriend last week.",
              "Terminó con su novia la semana pasada."
            ]
          },
          {
            "en": "settle down",
            "es": "sentar cabeza",
            "imagen": "Pareja con un bebé frente a su casa",
            "ejemplo": [
              "He wants to settle down and have a family.",
              "Quiere sentar cabeza y tener una familia."
            ]
          },
          {
            "en": "grow apart",
            "es": "distanciarse",
            "imagen": "Dos amigos caminando en direcciones opuestas",
            "ejemplo": [
              "We used to be close, but we grew apart.",
              "Éramos muy cercanos, pero nos distanciamos."
            ]
          },
          {
            "en": "count on",
            "es": "contar con",
            "imagen": "Amigo poniendo la mano en el hombro de otro",
            "ejemplo": [
              "You can always count on me.",
              "Siempre puedes contar conmigo."
            ]
          },
          {
            "en": "let down",
            "es": "decepcionar / fallar",
            "imagen": "Persona esperando sola en un restaurante",
            "ejemplo": [
              "He promised to come, but he let me down.",
              "Prometió venir, pero me falló."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I get on really well with my boss.",
        "es": "Me llevo muy bien con mi jefe."
      },
      {
        "en": "I can't put up with this noise anymore.",
        "es": "Ya no aguanto este ruido."
      },
      {
        "en": "She came up with a brilliant idea.",
        "es": "Se le ocurrió una idea brillante."
      },
      {
        "en": "I'm looking forward to the holidays.",
        "es": "Estoy esperando con ganas las vacaciones."
      },
      {
        "en": "I've always looked up to my older sister.",
        "es": "Siempre he admirado a mi hermana mayor."
      },
      {
        "en": "I'm trying to cut down on sugar.",
        "es": "Estoy tratando de reducir el azúcar."
      },
      {
        "en": "The factory laid off two hundred people.",
        "es": "La fábrica despidió a doscientas personas."
      },
      {
        "en": "Kids pick up languages very quickly.",
        "es": "Los niños aprenden idiomas muy rápido."
      },
      {
        "en": "He turned up two hours late.",
        "es": "Apareció dos horas tarde."
      },
      {
        "en": "You can always count on me.",
        "es": "Siempre puedes contar conmigo."
      }
    ],
    "frases": [
      {
        "en": "I look forward to hearing from you and to discussing the project in more detail.",
        "es": "Quedo en espera de su respuesta y de comentar el proyecto con más detalle.",
        "imagen": "Persona escribiendo un correo formal en su laptop"
      },
      {
        "en": "My neighbor plays loud music every night, and I don't know how much longer I can put up with it.",
        "es": "Mi vecino pone música fuerte todas las noches y no sé cuánto tiempo más lo voy a aguantar.",
        "imagen": "Persona despierta en la cama con la almohada en la cabeza"
      },
      {
        "en": "After the meeting, the team came up with a new plan to increase sales.",
        "es": "Después de la junta, el equipo propuso un nuevo plan para aumentar las ventas.",
        "imagen": "Equipo trabajando con notas adhesivas en una pared"
      },
      {
        "en": "I haven't seen my cousins for years, so I'm looking forward to catching up with them at the wedding.",
        "es": "No veo a mis primos desde hace años, así que tengo muchas ganas de ponerme al día con ellos en la boda.",
        "imagen": "Primos abrazándose en una boda"
      },
      {
        "en": "The company had to lay off fifty employees because sales had fallen dramatically.",
        "es": "La empresa tuvo que despedir a cincuenta empleados porque las ventas habían caído drásticamente.",
        "imagen": "Empleados con cajas saliendo de una oficina"
      },
      {
        "en": "My doctor told me to cut down on salt and to take up a sport.",
        "es": "Mi doctor me dijo que redujera la sal y que empezara algún deporte.",
        "imagen": "Doctor hablando con un paciente sobre su dieta"
      },
      {
        "en": "She fell out with her business partner, but a few months later they made up and opened a new store.",
        "es": "Se peleó con su socio, pero unos meses después se reconciliaron y abrieron otra tienda.",
        "imagen": "Socios estrechando la mano frente a una tienda nueva"
      },
      {
        "en": "My nephew picked up English by watching cartoons and playing video games online.",
        "es": "Mi sobrino aprendió inglés viendo caricaturas y jugando videojuegos en línea.",
        "imagen": "Niño jugando videojuegos con audífonos"
      },
      {
        "en": "The little café opened two years ago, and since then it has really taken off.",
        "es": "El cafecito abrió hace dos años y desde entonces ha tenido muchísimo éxito.",
        "imagen": "Café pequeño con fila de clientes afuera"
      },
      {
        "en": "I've always looked up to my grandfather, who worked hard all his life and never complained.",
        "es": "Siempre he admirado a mi abuelo, que trabajó duro toda su vida y nunca se quejó.",
        "imagen": "Abuelo trabajando en su taller con su nieto mirándolo"
      }
    ],
    "listening": [
      {
        "audio": "I don't get on with my new roommate. He never cleans the kitchen.",
        "pregunta": "¿Por qué no se lleva bien con su compañero?",
        "opciones": [
          "Nunca limpia la cocina",
          "Hace ruido",
          "No paga la renta",
          "Fuma"
        ]
      },
      {
        "audio": "We've run out of milk. Can you buy some on your way home?",
        "pregunta": "¿Qué se acabó?",
        "opciones": [
          "La leche",
          "El pan",
          "El café",
          "Los huevos"
        ]
      },
      {
        "audio": "Our manager came up with a plan to reduce costs without laying anyone off.",
        "pregunta": "¿Qué propuso el gerente?",
        "opciones": [
          "Reducir costos sin despedir a nadie",
          "Despedir gente",
          "Subir precios",
          "Cerrar una tienda"
        ]
      },
      {
        "audio": "I'm really looking forward to seeing my grandparents this summer.",
        "pregunta": "¿Qué espera con ganas?",
        "opciones": [
          "Ver a sus abuelos",
          "Ir a la playa",
          "Terminar la escuela",
          "Su cumpleaños"
        ]
      },
      {
        "audio": "My business partner let me down. He promised to invest, but he never did.",
        "pregunta": "¿Qué hizo su socio?",
        "opciones": [
          "Le falló: no invirtió",
          "Invirtió mucho",
          "Abrió otro negocio",
          "Se fue del país"
        ]
      }
    ],
    "lectura": {
      "titulo": "A new job, a new team",
      "texto": "Three months ago, Andrea was taken on as a project manager at a technology company in Guadalajara. At first, it wasn't easy. The previous manager had been laid off, and some people in the team didn't get on with each other. Two of the developers had fallen out over a project, and they weren't speaking. Andrea decided she couldn't put up with that situation. She organized a meeting where everybody could say what they thought, and together they came up with new rules for working as a team. She also carried out short weekly meetings to catch up on each project. Little by little, the atmosphere improved, and the two developers made up. Now the team gets on really well, and their latest app has really taken off; it has been downloaded more than a hundred thousand times. Andrea says she's looking forward to the next challenge, but first she needs a vacation.",
      "preguntas": [
        {
          "pregunta": "¿Qué le había pasado al gerente anterior?",
          "opciones": [
            "Lo despidieron",
            "Renunció",
            "Se jubiló",
            "Lo ascendieron"
          ]
        },
        {
          "pregunta": "¿Cuál era el problema entre los dos desarrolladores?",
          "opciones": [
            "Se habían peleado por un proyecto",
            "No sabían programar",
            "Llegaban tarde",
            "No hablaban inglés"
          ]
        },
        {
          "pregunta": "¿Qué hicieron en la reunión?",
          "opciones": [
            "Propusieron nuevas reglas para trabajar en equipo",
            "Despidieron a alguien",
            "Cambiaron de oficina",
            "Celebraron"
          ]
        },
        {
          "pregunta": "¿Cuántas veces se ha descargado la app?",
          "opciones": [
            "Más de cien mil",
            "Diez mil",
            "Mil",
            "Un millón"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa el phrasal verb.",
        "pregunta": "I get ___ well with my colleagues.",
        "respuestas": [
          "on",
          "along"
        ]
      },
      {
        "instruccion": "Completa el phrasal verb.",
        "pregunta": "I can't put ___ with his attitude anymore.",
        "respuestas": [
          "up"
        ]
      },
      {
        "instruccion": "Completa el phrasal verb.",
        "pregunta": "She came up ___ a fantastic idea.",
        "respuestas": [
          "with"
        ]
      },
      {
        "instruccion": "Completa con -ing.",
        "pregunta": "I look forward to ___ (meet) you.",
        "respuestas": [
          "meeting"
        ]
      },
      {
        "instruccion": "Completa el phrasal verb.",
        "pregunta": "We've run out ___ sugar.",
        "respuestas": [
          "of"
        ]
      },
      {
        "instruccion": "Completa el phrasal verb.",
        "pregunta": "I'm trying to cut down ___ coffee.",
        "respuestas": [
          "on"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Siempre puedes contar conmigo.",
        "respuestas": [
          "You can always count on me"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Se le ocurrió una idea.",
        "respuestas": [
          "She came up with an idea",
          "He came up with an idea"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Quedo en espera de su respuesta.",
        "respuestas": [
          "I look forward to hearing from you",
          "I'm looking forward to hearing from you"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I'm looking forward to see you.",
        "respuestas": [
          "I'm looking forward to seeing you",
          "I am looking forward to seeing you"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "How do you ___ with your new boss?",
        "opciones": [
          "get on",
          "get off",
          "get up",
          "get over"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We need to ___ a solution quickly.",
        "opciones": [
          "come up with",
          "come down with",
          "come across",
          "come on"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I'm looking forward to ___ on vacation.",
        "opciones": [
          "going",
          "go",
          "went",
          "to go"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The company is going to ___ fifty new employees.",
        "opciones": [
          "take on",
          "take off",
          "lay off",
          "put off"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Her career took off» significa:",
        "opciones": [
          "Su carrera despegó / tuvo éxito",
          "Se quitó la carrera",
          "Su carrera terminó",
          "Su avión despegó"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«I can't put up with it» significa:",
        "opciones": [
          "No lo aguanto",
          "No lo puedo levantar",
          "No lo puedo poner",
          "No lo encuentro"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The plane took off on time, but we had to land in Monterrey because of a storm.",
        "pregunta": "¿Dónde tuvieron que aterrizar?",
        "opciones": [
          "En Monterrey",
          "En su destino",
          "En Guadalajara",
          "No aterrizaron"
        ]
      },
      {
        "tipo": "listening",
        "audio": "My grandmother picked up a lot of English when she lived in Texas.",
        "pregunta": "¿Dónde aprendió inglés la abuela?",
        "opciones": [
          "En Texas",
          "En la escuela",
          "En un curso en línea",
          "En Canadá"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Me llevo bien con él.",
        "respuestas": [
          "I get on well with him",
          "I get along well with him",
          "I get along with him",
          "I get on with him"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Se nos acabó el café.",
        "respuestas": [
          "We've run out of coffee",
          "We have run out of coffee",
          "We ran out of coffee"
        ]
      }
    ]
  },
  {
    "id": "b2-26",
    "num": 26,
    "titulo": "Collocations (combinaciones naturales de palabras)",
    "contexto": "Hablar con naturalidad",
    "explicacion": {
      "es": [
        "Las **collocations** son **palabras que suelen ir juntas**. No hay una regla lógica: simplemente así lo dicen los hablantes nativos. Por ejemplo, se dice ***make a mistake*** (cometer un error), no *do a mistake*, y ***heavy rain*** (lluvia fuerte), no *strong rain*.",
        "***Make*** se usa para **crear o producir**: *make a decision, make money, make a plan, make friends, make an effort, make a phone call*. ***Do*** se usa para **tareas y actividades**: *do homework, do the dishes, do business, do exercise, do someone a favor, do your best*.",
        "***Have*** y ***take*** también forman muchas: *have a good time, have a look, have breakfast, have an argument*; *take a photo, take a break, take a risk, take care, take a seat, take part in*.",
        "También hay **adjetivo + sustantivo** (*strong coffee, heavy traffic, a high salary, a close friend*) y **adverbio + adjetivo** (*deeply sorry, highly recommended, fully aware, totally different*). Aprenderlas hace que tu inglés suene **natural**."
      ],
      "tabla": {
        "columnas": [
          "Verbo",
          "Collocations"
        ],
        "filas": [
          [
            "make",
            "a mistake, a decision, money, friends, an effort, progress, noise"
          ],
          [
            "do",
            "homework, the dishes, business, exercise, a favor, your best, research"
          ],
          [
            "have",
            "a good time, a look, a shower, an argument, a baby, fun"
          ],
          [
            "take",
            "a photo, a break, a risk, a seat, part in, advantage of"
          ],
          [
            "get",
            "married, lost, ready, a job, better, angry"
          ],
          [
            "pay",
            "attention, a visit, a compliment, the bill"
          ]
        ]
      },
      "ojo": [
        "*Do a mistake* ❌ → ***make a mistake*** ✅. *Make homework* ❌ → ***do homework*** ✅.",
        "*Strong rain* ❌ → ***heavy rain*** ✅. *Big traffic* ❌ → ***heavy traffic*** ✅. *High person* ❌ → ***tall person*** ✅.",
        "***Pay attention*** (poner atención), no *put attention* ❌.",
        "***Take a decision*** también existe en inglés británico, pero ***make a decision*** es lo más común.",
        "Para aprender collocations: anótalas **completas** en tu cuaderno, no palabras sueltas."
      ],
      "en": [
        "Collocations are words that usually go together: make a mistake, heavy rain.",
        "Make is for creating: make a decision, make money. Do is for tasks: do homework, do the dishes.",
        "Have a good time, take a photo, take a break, pay attention.",
        "Adjective and noun: strong coffee, heavy traffic, a close friend."
      ]
    },
    "vocabulario": [
      {
        "en": "make a mistake",
        "es": "cometer un error",
        "imagen": "Persona tachando un error en una hoja",
        "ejemplo": [
          "Everybody makes mistakes.",
          "Todos cometemos errores."
        ]
      },
      {
        "en": "make a decision",
        "es": "tomar una decisión",
        "imagen": "Persona frente a dos caminos pensando",
        "ejemplo": [
          "I need to make a decision by Friday.",
          "Necesito tomar una decisión antes del viernes."
        ]
      },
      {
        "en": "do your homework",
        "es": "hacer la tarea",
        "imagen": "Niño haciendo la tarea en la mesa",
        "ejemplo": [
          "Do your homework before you play.",
          "Haz la tarea antes de jugar."
        ]
      },
      {
        "en": "do me a favor",
        "es": "hacerme un favor",
        "imagen": "Persona pidiendo ayuda a un vecino",
        "ejemplo": [
          "Can you do me a favor?",
          "¿Me puedes hacer un favor?"
        ]
      },
      {
        "en": "heavy rain",
        "es": "lluvia fuerte",
        "imagen": "Lluvia torrencial sobre una calle",
        "ejemplo": [
          "Heavy rain caused floods in the city.",
          "La lluvia fuerte causó inundaciones en la ciudad."
        ]
      },
      {
        "en": "heavy traffic",
        "es": "tráfico pesado",
        "imagen": "Avenida completamente congestionada",
        "ejemplo": [
          "There's heavy traffic on the highway.",
          "Hay tráfico pesado en la autopista."
        ]
      },
      {
        "en": "strong coffee",
        "es": "café cargado",
        "imagen": "Taza de café negro muy oscuro",
        "ejemplo": [
          "I need a strong coffee this morning.",
          "Necesito un café bien cargado esta mañana."
        ]
      },
      {
        "en": "pay attention",
        "es": "poner atención",
        "imagen": "Estudiantes atentos escuchando a su maestra",
        "ejemplo": [
          "Please pay attention to the instructions.",
          "Por favor pongan atención a las instrucciones."
        ]
      },
      {
        "en": "take a break",
        "es": "tomar un descanso",
        "imagen": "Persona estirándose lejos de su escritorio",
        "ejemplo": [
          "Let's take a break and have a coffee.",
          "Tomemos un descanso y un café."
        ]
      },
      {
        "en": "take a risk",
        "es": "arriesgarse",
        "imagen": "Persona saltando entre dos rocas",
        "ejemplo": [
          "Sometimes you have to take a risk.",
          "A veces tienes que arriesgarte."
        ]
      },
      {
        "en": "have a good time",
        "es": "pasarla bien",
        "imagen": "Amigos riendo en una fiesta",
        "ejemplo": [
          "Did you have a good time at the party?",
          "¿La pasaste bien en la fiesta?"
        ]
      },
      {
        "en": "make friends",
        "es": "hacer amigos",
        "imagen": "Niños nuevos jugando juntos en el recreo",
        "ejemplo": [
          "My son makes friends very easily.",
          "Mi hijo hace amigos muy fácilmente."
        ]
      },
      {
        "en": "a close friend",
        "es": "un amigo cercano",
        "imagen": "Dos amigas abrazadas sonriendo",
        "ejemplo": [
          "She's a close friend of mine.",
          "Es una amiga cercana."
        ]
      },
      {
        "en": "highly recommended",
        "es": "muy recomendado",
        "imagen": "Restaurante con clientes felices",
        "ejemplo": [
          "This restaurant is highly recommended.",
          "Este restaurante está muy recomendado."
        ]
      },
      {
        "en": "deeply sorry",
        "es": "profundamente apenado",
        "imagen": "Persona disculpándose con sinceridad",
        "ejemplo": [
          "I'm deeply sorry for your loss.",
          "Lamento profundamente tu pérdida."
        ]
      },
      {
        "en": "take part in",
        "es": "participar en",
        "imagen": "Corredores en una carrera con números",
        "ejemplo": [
          "Thousands of people took part in the marathon.",
          "Miles de personas participaron en el maratón."
        ]
      }
    ],
    "grupos": [
      {
        "id": "makedo",
        "titulo": "Make o do",
        "icono": "🛠️",
        "patron": [
          "make money",
          "do the dishes",
          "make an effort"
        ],
        "palabras": [
          {
            "en": "make money",
            "es": "ganar dinero",
            "imagen": "Persona contando billetes",
            "ejemplo": [
              "It's hard to make money with a small business.",
              "Es difícil ganar dinero con un negocio pequeño."
            ]
          },
          {
            "en": "make an effort",
            "es": "hacer un esfuerzo",
            "imagen": "Persona levantando algo pesado con esfuerzo",
            "ejemplo": [
              "You need to make an effort to improve.",
              "Necesitas hacer un esfuerzo para mejorar."
            ]
          },
          {
            "en": "make noise",
            "es": "hacer ruido",
            "imagen": "Niños tocando tambores en la sala",
            "ejemplo": [
              "Don't make noise. The baby is sleeping.",
              "No hagan ruido. El bebé está dormido."
            ]
          },
          {
            "en": "do the dishes",
            "es": "lavar los trastes",
            "imagen": "Persona lavando trastes en el fregadero",
            "ejemplo": [
              "It's your turn to do the dishes.",
              "Te toca lavar los trastes."
            ]
          },
          {
            "en": "do exercise",
            "es": "hacer ejercicio",
            "imagen": "Persona haciendo ejercicio en un parque",
            "ejemplo": [
              "I try to do exercise every morning.",
              "Trato de hacer ejercicio cada mañana."
            ]
          },
          {
            "en": "do your best",
            "es": "hacer tu mejor esfuerzo",
            "imagen": "Atleta concentrado antes de una carrera",
            "ejemplo": [
              "Don't worry about the result. Just do your best.",
              "No te preocupes por el resultado. Haz tu mejor esfuerzo."
            ]
          }
        ]
      },
      {
        "id": "adjetivos",
        "titulo": "Adjetivo + sustantivo",
        "icono": "🔗",
        "patron": [
          "a high salary",
          "a heavy smoker",
          "a narrow escape"
        ],
        "palabras": [
          {
            "en": "a high salary",
            "es": "un sueldo alto",
            "imagen": "Persona revisando un recibo de nómina con sonrisa",
            "ejemplo": [
              "She has a very high salary.",
              "Tiene un sueldo muy alto."
            ]
          },
          {
            "en": "a heavy smoker",
            "es": "un fumador empedernido",
            "imagen": "Cenicero lleno de colillas",
            "ejemplo": [
              "My grandfather was a heavy smoker.",
              "Mi abuelo fumaba muchísimo."
            ]
          },
          {
            "en": "a narrow escape",
            "es": "un escape por poco",
            "imagen": "Persona aliviada junto a un carro que casi la atropella",
            "ejemplo": [
              "It was a narrow escape.",
              "Se salvó por poco."
            ]
          },
          {
            "en": "a busy street",
            "es": "una calle muy transitada",
            "imagen": "Calle llena de gente y carros",
            "ejemplo": [
              "We live on a very busy street.",
              "Vivimos en una calle muy transitada."
            ]
          },
          {
            "en": "a tough decision",
            "es": "una decisión difícil",
            "imagen": "Persona preocupada con la cabeza entre las manos",
            "ejemplo": [
              "Leaving my country was a tough decision.",
              "Dejar mi país fue una decisión difícil."
            ]
          },
          {
            "en": "fast food",
            "es": "comida rápida",
            "imagen": "Hamburguesa con papas fritas",
            "ejemplo": [
              "I try not to eat fast food.",
              "Trato de no comer comida rápida."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Everybody makes mistakes.",
        "es": "Todos cometemos errores."
      },
      {
        "en": "I need to make a decision by Friday.",
        "es": "Necesito tomar una decisión antes del viernes."
      },
      {
        "en": "Can you do me a favor?",
        "es": "¿Me puedes hacer un favor?"
      },
      {
        "en": "Heavy rain caused floods in the city.",
        "es": "La lluvia fuerte causó inundaciones en la ciudad."
      },
      {
        "en": "Please pay attention to the instructions.",
        "es": "Por favor pongan atención a las instrucciones."
      },
      {
        "en": "Let's take a break and have a coffee.",
        "es": "Tomemos un descanso y un café."
      },
      {
        "en": "Did you have a good time at the party?",
        "es": "¿La pasaste bien en la fiesta?"
      },
      {
        "en": "This restaurant is highly recommended.",
        "es": "Este restaurante está muy recomendado."
      },
      {
        "en": "It's your turn to do the dishes.",
        "es": "Te toca lavar los trastes."
      },
      {
        "en": "Leaving my country was a tough decision.",
        "es": "Dejar mi país fue una decisión difícil."
      }
    ],
    "frases": [
      {
        "en": "I made a lot of mistakes in my first job, but I learned from every one of them.",
        "es": "Cometí muchos errores en mi primer trabajo, pero aprendí de cada uno.",
        "imagen": "Joven en su primer trabajo revisando su trabajo con atención"
      },
      {
        "en": "There was heavy traffic on the way to the airport, so we nearly missed our flight.",
        "es": "Había tráfico pesado camino al aeropuerto, así que casi perdemos el vuelo.",
        "imagen": "Carretera al aeropuerto congestionada"
      },
      {
        "en": "If you want to make friends in a new city, take part in local activities.",
        "es": "Si quieres hacer amigos en una ciudad nueva, participa en actividades locales.",
        "imagen": "Grupo de personas en un taller comunitario"
      },
      {
        "en": "After working for four hours, I always take a short break and go for a walk.",
        "es": "Después de trabajar cuatro horas, siempre tomo un descanso corto y salgo a caminar.",
        "imagen": "Persona caminando en un parque cerca de su oficina"
      },
      {
        "en": "My father made a tough decision when he left his job to start his own business.",
        "es": "Mi papá tomó una decisión difícil cuando dejó su trabajo para poner su propio negocio.",
        "imagen": "Hombre abriendo su propio taller"
      },
      {
        "en": "You should pay more attention in class instead of looking at your phone.",
        "es": "Deberías poner más atención en clase en lugar de ver tu celular.",
        "imagen": "Estudiante distraído con el celular en clase"
      },
      {
        "en": "Doing exercise regularly is one of the best things you can do for your health.",
        "es": "Hacer ejercicio con regularidad es de lo mejor que puedes hacer por tu salud.",
        "imagen": "Personas haciendo ejercicio juntas en un parque"
      },
      {
        "en": "She's a close friend of mine, so I'd do anything to help her.",
        "es": "Es una amiga cercana, así que haría lo que fuera por ayudarla.",
        "imagen": "Dos amigas apoyándose en un momento difícil"
      },
      {
        "en": "I'm making a real effort to cut down on fast food and eat more vegetables.",
        "es": "Estoy haciendo un esfuerzo real por reducir la comida rápida y comer más verduras.",
        "imagen": "Persona eligiendo verduras en el mercado"
      },
      {
        "en": "It was a narrow escape: the tree fell just a few seconds after we had walked past it.",
        "es": "Nos salvamos por poco: el árbol cayó unos segundos después de que pasamos.",
        "imagen": "Árbol caído en una calle con personas asustadas cerca"
      }
    ],
    "listening": [
      {
        "audio": "Could you do me a favor and pick up my kids from school?",
        "pregunta": "¿Qué favor le pide?",
        "opciones": [
          "Recoger a sus hijos de la escuela",
          "Prestarle dinero",
          "Cuidar a su perro",
          "Llevarlo al aeropuerto"
        ]
      },
      {
        "audio": "The museum is highly recommended. You should definitely visit it.",
        "pregunta": "¿Qué dice del museo?",
        "opciones": [
          "Está muy recomendado",
          "Está cerrado",
          "Es caro",
          "Es aburrido"
        ]
      },
      {
        "audio": "We had a great time at the wedding. We danced all night.",
        "pregunta": "¿Cómo la pasaron en la boda?",
        "opciones": [
          "Muy bien, bailaron toda la noche",
          "Mal",
          "Se aburrieron",
          "Se fueron temprano"
        ]
      },
      {
        "audio": "Heavy rain is expected this afternoon, so take an umbrella.",
        "pregunta": "¿Qué se espera esta tarde?",
        "opciones": [
          "Lluvia fuerte",
          "Mucho calor",
          "Nieve",
          "Viento"
        ]
      },
      {
        "audio": "I made a big mistake. I sent the email to the wrong person.",
        "pregunta": "¿Qué error cometió?",
        "opciones": [
          "Mandó el correo a la persona equivocada",
          "Olvidó una junta",
          "Perdió un archivo",
          "Llegó tarde"
        ]
      }
    ],
    "lectura": {
      "titulo": "Sounding natural",
      "texto": "When Luis started working for an American company, his English was grammatically correct, but something didn't sound right. His colleagues understood him, but they sometimes smiled when he spoke. One day, his manager, Karen, explained the problem: collocations. Luis used to say things like do a mistake, strong rain or put attention. Karen told him that native speakers say make a mistake, heavy rain and pay attention, and that there's no logical rule. Luis decided to make an effort to learn them. Every time he read an article or watched a series, he wrote down whole expressions, not single words: take a risk, a tough decision, highly recommended. He also took part in conversation clubs at lunchtime. After six months, he had made a lot of progress. Now his colleagues say that his English sounds natural, and Karen has asked him to give a presentation to new employees about how to learn English at work.",
      "preguntas": [
        {
          "pregunta": "¿Cuál era el problema del inglés de Luis?",
          "opciones": [
            "No usaba las combinaciones naturales de palabras",
            "Tenía mala gramática",
            "No lo entendían",
            "Hablaba muy lento"
          ]
        },
        {
          "pregunta": "¿Cómo aprendió Luis las collocations?",
          "opciones": [
            "Anotando expresiones completas",
            "Memorizando palabras sueltas",
            "Con un maestro particular",
            "Viendo solo películas"
          ]
        },
        {
          "pregunta": "¿En qué participó a la hora de la comida?",
          "opciones": [
            "En clubes de conversación",
            "En un equipo de fútbol",
            "En clases de cocina",
            "En juntas"
          ]
        },
        {
          "pregunta": "¿Qué le pidió Karen al final?",
          "opciones": [
            "Dar una presentación sobre aprender inglés en el trabajo",
            "Cambiar de puesto",
            "Tomar un curso",
            "Escribir un libro"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con make o do.",
        "pregunta": "I always ___ my homework after dinner.",
        "respuestas": [
          "do"
        ]
      },
      {
        "instruccion": "Completa con make o do.",
        "pregunta": "Don't worry. Everybody ___ mistakes.",
        "respuestas": [
          "makes"
        ]
      },
      {
        "instruccion": "Completa con make o do.",
        "pregunta": "Could you ___ me a favor?",
        "respuestas": [
          "do"
        ]
      },
      {
        "instruccion": "Completa con take o have.",
        "pregunta": "Let's ___ a break. I'm tired.",
        "respuestas": [
          "take",
          "have"
        ]
      },
      {
        "instruccion": "Completa con la palabra correcta.",
        "pregunta": "There's ___ traffic today. (pesado)",
        "respuestas": [
          "heavy"
        ]
      },
      {
        "instruccion": "Completa con la palabra correcta.",
        "pregunta": "Please ___ attention.",
        "respuestas": [
          "pay"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "tomar una decisión",
        "respuestas": [
          "make a decision",
          "take a decision"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "ganar dinero",
        "respuestas": [
          "make money",
          "earn money"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "La pasamos muy bien.",
        "respuestas": [
          "We had a great time",
          "We had a good time",
          "We had a really good time"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I did a big mistake.",
        "respuestas": [
          "I made a big mistake"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "I need to ___ a phone call.",
        "opciones": [
          "make",
          "do",
          "take",
          "have"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She ___ exercise every day.",
        "opciones": [
          "does",
          "makes",
          "takes",
          "has"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "There was ___ rain last night.",
        "opciones": [
          "heavy",
          "strong",
          "big",
          "hard"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Can I ___ a photo of you?",
        "opciones": [
          "take",
          "make",
          "do",
          "have"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I'm ___ sorry for what happened.",
        "opciones": [
          "deeply",
          "highly",
          "strongly",
          "heavily"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«It was a narrow escape» significa:",
        "opciones": [
          "Se salvaron por poco",
          "Fue un escape estrecho",
          "Escaparon tarde",
          "No escaparon"
        ]
      },
      {
        "tipo": "listening",
        "audio": "My uncle was a heavy smoker, but he quit when he turned fifty.",
        "pregunta": "¿Cuándo dejó de fumar el tío?",
        "opciones": [
          "A los cincuenta",
          "A los cuarenta",
          "A los sesenta",
          "Nunca"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Starting a business means taking a risk, but it can also mean making a lot of money.",
        "pregunta": "¿Qué implica empezar un negocio?",
        "opciones": [
          "Arriesgarse y tal vez ganar mucho dinero",
          "Perder dinero seguro",
          "Trabajar menos",
          "No tener jefe ni riesgos"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: poner atención",
        "respuestas": [
          "pay attention",
          "to pay attention"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: lavar los trastes",
        "respuestas": [
          "do the dishes",
          "wash the dishes",
          "to do the dishes"
        ]
      }
    ]
  },
  {
    "id": "b2-27",
    "num": 27,
    "titulo": "Ensayos de opinión y argumentación",
    "contexto": "Temas actuales y medio ambiente",
    "explicacion": {
      "es": [
        "Un **ensayo de opinión** tiene una estructura clara: **introducción** (presentas el tema y tu postura), **párrafos de desarrollo** (cada uno con un argumento y ejemplos), un párrafo con el **argumento contrario** y una **conclusión** que resume tu opinión.",
        "Para **dar tu opinión**: ***In my opinion / view…, I strongly believe that…, It seems to me that…, I am convinced that…*** Evita *I think* repetido muchas veces.",
        "Para **organizar argumentos**: ***Firstly, Secondly, Furthermore / Moreover*** (además), ***In addition, Finally***. Para **dar ejemplos**: ***For example, For instance, such as***. Para **presentar el otro lado**: ***On the other hand, Some people argue that…, Critics claim that…***",
        "Para **concluir**: ***In conclusion, To sum up, All things considered, Taking everything into account***. En un ensayo formal evita contracciones (*it is*, no *it's*) y lenguaje coloquial."
      ],
      "tabla": {
        "columnas": [
          "Parte del ensayo",
          "Frases útiles"
        ],
        "filas": [
          [
            "Introducción",
            "Nowadays… / It is often said that… / In this essay, I will argue that…"
          ],
          [
            "Opinión",
            "In my view… / I strongly believe that… / I am convinced that…"
          ],
          [
            "Añadir",
            "Furthermore… / Moreover… / In addition…"
          ],
          [
            "Contraargumento",
            "Some people argue that… / However, … / Admittedly, …"
          ],
          [
            "Ejemplos",
            "For instance… / such as… / A clear example of this is…"
          ],
          [
            "Conclusión",
            "In conclusion… / All things considered… / To sum up…"
          ]
        ]
      },
      "ojo": [
        "Un párrafo = **una idea principal**. Empieza con una ***topic sentence*** (oración principal) y luego da razones y ejemplos.",
        "Usa **lenguaje impersonal** para sonar objetivo: ***It is widely believed that… / There is no doubt that… / It could be argued that…***",
        "*Moreover* y *furthermore* van al **principio** de la oración con coma: ***Moreover**, recycling creates jobs.*",
        "Vocabulario ambiental: ***climate change, global warming, greenhouse gases, renewable energy, carbon footprint, deforestation, endangered species, single-use plastic***.",
        "No exageres con *always / never / everybody*: mejor ***most / many / often / tend to***."
      ],
      "en": [
        "An opinion essay has an introduction, body paragraphs with arguments, a counterargument, and a conclusion.",
        "To give your opinion: In my view, I strongly believe that, I am convinced that.",
        "To add arguments: Furthermore, moreover, in addition. To give examples: for instance, such as.",
        "To conclude: In conclusion, all things considered, to sum up."
      ]
    },
    "vocabulario": [
      {
        "en": "In my view",
        "es": "desde mi punto de vista",
        "imagen": "Persona escribiendo un ensayo en su escritorio",
        "ejemplo": [
          "In my view, governments should invest more in public transport.",
          "Desde mi punto de vista, los gobiernos deberían invertir más en transporte público."
        ]
      },
      {
        "en": "I strongly believe that",
        "es": "creo firmemente que",
        "imagen": "Persona hablando con convicción en un debate",
        "ejemplo": [
          "I strongly believe that education should be free.",
          "Creo firmemente que la educación debería ser gratuita."
        ]
      },
      {
        "en": "Furthermore",
        "es": "además",
        "imagen": "Lista de argumentos en un cuaderno",
        "ejemplo": [
          "Furthermore, recycling creates new jobs.",
          "Además, el reciclaje crea nuevos empleos."
        ]
      },
      {
        "en": "Moreover",
        "es": "además / es más",
        "imagen": "Persona añadiendo un punto en una presentación",
        "ejemplo": [
          "Moreover, it is cheaper in the long term.",
          "Además, a largo plazo es más barato."
        ]
      },
      {
        "en": "For instance",
        "es": "por ejemplo",
        "imagen": "Maestro señalando ejemplos en un pizarrón",
        "ejemplo": [
          "Many countries, for instance Costa Rica, use mostly renewable energy.",
          "Muchos países, por ejemplo Costa Rica, usan sobre todo energía renovable."
        ]
      },
      {
        "en": "Some people argue that",
        "es": "algunas personas sostienen que",
        "imagen": "Debate con dos personas en un podio",
        "ejemplo": [
          "Some people argue that technology isolates us.",
          "Algunas personas sostienen que la tecnología nos aísla."
        ]
      },
      {
        "en": "All things considered",
        "es": "considerándolo todo",
        "imagen": "Persona pensativa con una balanza",
        "ejemplo": [
          "All things considered, the advantages are greater.",
          "Considerándolo todo, las ventajas son mayores."
        ]
      },
      {
        "en": "It is widely believed that",
        "es": "se cree ampliamente que",
        "imagen": "Multitud en una conferencia",
        "ejemplo": [
          "It is widely believed that exercise improves mental health.",
          "Se cree ampliamente que el ejercicio mejora la salud mental."
        ]
      },
      {
        "en": "climate change",
        "es": "el cambio climático",
        "imagen": "Glaciar derritiéndose en el mar",
        "ejemplo": [
          "Climate change is one of the biggest challenges of our time.",
          "El cambio climático es uno de los mayores retos de nuestro tiempo."
        ]
      },
      {
        "en": "renewable energy",
        "es": "energía renovable",
        "imagen": "Campo de aerogeneradores al atardecer",
        "ejemplo": [
          "Mexico has great potential for renewable energy.",
          "México tiene gran potencial para la energía renovable."
        ]
      },
      {
        "en": "carbon footprint",
        "es": "huella de carbono",
        "imagen": "Huella de pie dibujada en la tierra con humo",
        "ejemplo": [
          "Flying increases your carbon footprint.",
          "Volar aumenta tu huella de carbono."
        ]
      },
      {
        "en": "deforestation",
        "es": "la deforestación",
        "imagen": "Bosque talado con troncos en el suelo",
        "ejemplo": [
          "Deforestation threatens many species.",
          "La deforestación amenaza a muchas especies."
        ]
      },
      {
        "en": "single-use plastic",
        "es": "plástico de un solo uso",
        "imagen": "Bolsas y popotes de plástico en la playa",
        "ejemplo": [
          "Many cities have banned single-use plastic.",
          "Muchas ciudades han prohibido el plástico de un solo uso."
        ]
      },
      {
        "en": "endangered species",
        "es": "especies en peligro de extinción",
        "imagen": "Vaquita marina nadando en el mar",
        "ejemplo": [
          "The vaquita is one of the most endangered species in the world.",
          "La vaquita marina es una de las especies más amenazadas del mundo."
        ]
      },
      {
        "en": "In conclusion",
        "es": "en conclusión",
        "imagen": "Persona escribiendo el último párrafo de un ensayo",
        "ejemplo": [
          "In conclusion, we must act now.",
          "En conclusión, debemos actuar ya."
        ]
      },
      {
        "en": "There is no doubt that",
        "es": "no cabe duda de que",
        "imagen": "Científico presentando datos con seguridad",
        "ejemplo": [
          "There is no doubt that pollution affects our health.",
          "No cabe duda de que la contaminación afecta nuestra salud."
        ]
      }
    ],
    "grupos": [
      {
        "id": "ambiente",
        "titulo": "Medio ambiente",
        "icono": "🌍",
        "patron": [
          "global warming",
          "greenhouse gases",
          "reduce, reuse, recycle"
        ],
        "palabras": [
          {
            "en": "global warming",
            "es": "el calentamiento global",
            "imagen": "Termómetro sobre un planeta Tierra",
            "ejemplo": [
              "Global warming is causing more extreme weather.",
              "El calentamiento global está causando un clima más extremo."
            ]
          },
          {
            "en": "greenhouse gases",
            "es": "gases de efecto invernadero",
            "imagen": "Chimeneas de fábrica echando humo",
            "ejemplo": [
              "Cars produce greenhouse gases.",
              "Los carros producen gases de efecto invernadero."
            ]
          },
          {
            "en": "air pollution",
            "es": "contaminación del aire",
            "imagen": "Ciudad cubierta de smog",
            "ejemplo": [
              "Air pollution is a serious problem in big cities.",
              "La contaminación del aire es un problema grave en las grandes ciudades."
            ]
          },
          {
            "en": "water shortage",
            "es": "escasez de agua",
            "imagen": "Personas haciendo fila con cubetas junto a una pipa",
            "ejemplo": [
              "Many cities in the north suffer from water shortage.",
              "Muchas ciudades del norte sufren escasez de agua."
            ]
          },
          {
            "en": "solar panels",
            "es": "paneles solares",
            "imagen": "Techo con paneles solares bajo el sol",
            "ejemplo": [
              "More families are installing solar panels.",
              "Cada vez más familias instalan paneles solares."
            ]
          },
          {
            "en": "recycle",
            "es": "reciclar",
            "imagen": "Persona separando basura en botes de colores",
            "ejemplo": [
              "We should all recycle more.",
              "Todos deberíamos reciclar más."
            ]
          }
        ]
      },
      {
        "id": "argumentar",
        "titulo": "Argumentar",
        "icono": "🗣️",
        "patron": [
          "It could be argued that…",
          "Admittedly…",
          "On balance…"
        ],
        "palabras": [
          {
            "en": "It could be argued that",
            "es": "se podría argumentar que",
            "imagen": "Persona debatiendo con calma",
            "ejemplo": [
              "It could be argued that cars are necessary in rural areas.",
              "Se podría argumentar que los carros son necesarios en zonas rurales."
            ]
          },
          {
            "en": "Admittedly",
            "es": "hay que reconocer que",
            "imagen": "Persona levantando la mano para conceder un punto",
            "ejemplo": [
              "Admittedly, electric cars are still expensive.",
              "Hay que reconocer que los carros eléctricos todavía son caros."
            ]
          },
          {
            "en": "On balance",
            "es": "en general / sopesándolo todo",
            "imagen": "Balanza equilibrada sobre un escritorio",
            "ejemplo": [
              "On balance, I think the benefits outweigh the costs.",
              "En general, creo que los beneficios superan los costos."
            ]
          },
          {
            "en": "a counterargument",
            "es": "un contraargumento",
            "imagen": "Dos personas presentando puntos opuestos",
            "ejemplo": [
              "A good essay includes a counterargument.",
              "Un buen ensayo incluye un contraargumento."
            ]
          },
          {
            "en": "evidence suggests",
            "es": "la evidencia sugiere",
            "imagen": "Gráficas y documentos científicos",
            "ejemplo": [
              "Evidence suggests that the temperature is rising.",
              "La evidencia sugiere que la temperatura está aumentando."
            ]
          },
          {
            "en": "to a certain extent",
            "es": "hasta cierto punto",
            "imagen": "Persona dudando con la mano en la barbilla",
            "ejemplo": [
              "I agree with this idea to a certain extent.",
              "Estoy de acuerdo con esta idea hasta cierto punto."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "In my view, governments should invest more in public transport.",
        "es": "Desde mi punto de vista, los gobiernos deberían invertir más en transporte público."
      },
      {
        "en": "I strongly believe that education should be free.",
        "es": "Creo firmemente que la educación debería ser gratuita."
      },
      {
        "en": "Furthermore, recycling creates new jobs.",
        "es": "Además, el reciclaje crea nuevos empleos."
      },
      {
        "en": "Some people argue that technology isolates us.",
        "es": "Algunas personas sostienen que la tecnología nos aísla."
      },
      {
        "en": "All things considered, the advantages are greater.",
        "es": "Considerándolo todo, las ventajas son mayores."
      },
      {
        "en": "Climate change is one of the biggest challenges of our time.",
        "es": "El cambio climático es uno de los mayores retos de nuestro tiempo."
      },
      {
        "en": "Flying increases your carbon footprint.",
        "es": "Volar aumenta tu huella de carbono."
      },
      {
        "en": "Many cities have banned single-use plastic.",
        "es": "Muchas ciudades han prohibido el plástico de un solo uso."
      },
      {
        "en": "Admittedly, electric cars are still expensive.",
        "es": "Hay que reconocer que los carros eléctricos todavía son caros."
      },
      {
        "en": "I agree with this idea to a certain extent.",
        "es": "Estoy de acuerdo con esta idea hasta cierto punto."
      }
    ],
    "frases": [
      {
        "en": "Nowadays, many people believe that individuals cannot stop climate change on their own.",
        "es": "Hoy en día mucha gente cree que las personas no pueden frenar solas el cambio climático.",
        "imagen": "Persona pequeña frente a un planeta enorme"
      },
      {
        "en": "In my view, the government should offer incentives to families who install solar panels.",
        "es": "Desde mi punto de vista, el gobierno debería dar incentivos a las familias que instalen paneles solares.",
        "imagen": "Familia frente a su casa con paneles solares"
      },
      {
        "en": "Firstly, public transport reduces traffic; secondly, it produces far less pollution than private cars.",
        "es": "En primer lugar, el transporte público reduce el tráfico; en segundo lugar, contamina mucho menos que los carros.",
        "imagen": "Tren ligero moderno pasando junto a una avenida"
      },
      {
        "en": "Some people argue that recycling is a waste of time, since most plastic ends up in landfills anyway.",
        "es": "Algunas personas sostienen que reciclar es una pérdida de tiempo, ya que la mayoría del plástico termina en rellenos sanitarios.",
        "imagen": "Relleno sanitario con montañas de plástico"
      },
      {
        "en": "Admittedly, renewable energy is expensive at first; however, it saves money in the long term.",
        "es": "Hay que reconocer que la energía renovable es cara al principio; sin embargo, ahorra dinero a largo plazo.",
        "imagen": "Ingeniero revisando paneles solares en un campo"
      },
      {
        "en": "Moreover, deforestation destroys the homes of thousands of animals, such as jaguars and monkeys.",
        "es": "Además, la deforestación destruye el hogar de miles de animales, como jaguares y monos.",
        "imagen": "Jaguar en la orilla de un bosque talado"
      },
      {
        "en": "It is widely believed that young people are more aware of environmental problems than previous generations.",
        "es": "Se cree ampliamente que los jóvenes son más conscientes de los problemas ambientales que generaciones anteriores.",
        "imagen": "Jóvenes en una marcha por el medio ambiente"
      },
      {
        "en": "There is no doubt that we need to reduce our consumption of single-use plastic.",
        "es": "No cabe duda de que necesitamos reducir nuestro consumo de plástico de un solo uso.",
        "imagen": "Persona usando una bolsa de tela en el mercado"
      },
      {
        "en": "To a certain extent, technology can help us solve environmental problems, but it cannot replace changes in our habits.",
        "es": "Hasta cierto punto, la tecnología puede ayudarnos a resolver problemas ambientales, pero no puede reemplazar los cambios en nuestros hábitos.",
        "imagen": "Persona en bicicleta pasando junto a un carro eléctrico"
      },
      {
        "en": "All things considered, protecting the environment is not only the government's responsibility, but everyone's.",
        "es": "Considerándolo todo, proteger el medio ambiente no es solo responsabilidad del gobierno, sino de todos.",
        "imagen": "Voluntarios limpiando una playa"
      }
    ],
    "listening": [
      {
        "audio": "In my view, schools should teach children about the environment from an early age.",
        "pregunta": "¿Qué opina?",
        "opciones": [
          "Que las escuelas deberían enseñar sobre el medio ambiente desde pequeños",
          "Que los niños no deben estudiar",
          "Que el medio ambiente no importa",
          "Que solo los adultos deben aprender"
        ]
      },
      {
        "audio": "Some people argue that electric cars are not as green as they seem, because of their batteries.",
        "pregunta": "¿Por qué dicen que los carros eléctricos no son tan ecológicos?",
        "opciones": [
          "Por sus baterías",
          "Por su precio",
          "Porque son lentos",
          "Porque usan gasolina"
        ]
      },
      {
        "audio": "Furthermore, planting trees in cities can reduce the temperature by several degrees.",
        "pregunta": "¿Qué puede reducir plantar árboles?",
        "opciones": [
          "La temperatura",
          "El tráfico",
          "El ruido",
          "El costo de vida"
        ]
      },
      {
        "audio": "Admittedly, it is not easy to stop using plastic completely.",
        "pregunta": "¿Qué reconoce?",
        "opciones": [
          "Que no es fácil dejar el plástico por completo",
          "Que el plástico es bueno",
          "Que es fácil reciclar",
          "Que no hay alternativas"
        ]
      },
      {
        "audio": "In conclusion, small changes in our daily habits can make a big difference.",
        "pregunta": "¿Cuál es la conclusión?",
        "opciones": [
          "Pequeños cambios pueden hacer una gran diferencia",
          "Nada se puede hacer",
          "Solo el gobierno puede cambiar",
          "Hay que dejar de viajar"
        ]
      }
    ],
    "lectura": {
      "titulo": "Should single-use plastic be banned?",
      "texto": "Every year, millions of tons of plastic end up in the oceans, and a large part of it comes from single-use products such as bags, straws and bottles. In this essay, I will argue that single-use plastic should be banned. Firstly, plastic takes hundreds of years to decompose. As a result, it accumulates in rivers and seas, where it harms fish, turtles and birds. Furthermore, tiny pieces of plastic have been found in the food we eat and the water we drink. Secondly, there are already many alternatives, for instance cloth bags, metal straws and refillable bottles. Several cities in Mexico, such as Mexico City, have banned plastic bags, and people have adapted quickly. Admittedly, some people argue that a ban could affect small businesses and increase prices. However, governments can help these businesses with incentives. All things considered, I strongly believe that the benefits of a ban far outweigh the disadvantages.",
      "preguntas": [
        {
          "pregunta": "¿Cuál es la postura del autor?",
          "opciones": [
            "Que se debe prohibir el plástico de un solo uso",
            "Que el plástico es necesario",
            "Que hay que reciclar más",
            "No da su opinión"
          ]
        },
        {
          "pregunta": "¿Cuánto tarda el plástico en descomponerse?",
          "opciones": [
            "Cientos de años",
            "Diez años",
            "Un año",
            "Mil millones de años"
          ]
        },
        {
          "pregunta": "¿Qué alternativas menciona?",
          "opciones": [
            "Bolsas de tela, popotes de metal y botellas rellenables",
            "Bolsas de papel solamente",
            "Plástico reciclado",
            "Ninguna"
          ]
        },
        {
          "pregunta": "¿Cuál es el contraargumento?",
          "opciones": [
            "Que podría afectar a pequeños negocios y subir precios",
            "Que no contamina",
            "Que la gente no se adapta",
            "Que es ilegal"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con el conector.",
        "pregunta": "Recycling helps the environment. ___, it creates jobs. (además)",
        "respuestas": [
          "Furthermore",
          "Moreover",
          "In addition",
          "Also",
          "Besides"
        ]
      },
      {
        "instruccion": "Completa con el conector.",
        "pregunta": "Many fruits, ___ instance mangoes, grow in Mexico.",
        "respuestas": [
          "for"
        ]
      },
      {
        "instruccion": "Completa la frase de opinión.",
        "pregunta": "I ___ believe that we must act now. (firmemente)",
        "respuestas": [
          "strongly",
          "firmly"
        ]
      },
      {
        "instruccion": "Completa la frase de conclusión.",
        "pregunta": "All things ___, the plan is a good idea.",
        "respuestas": [
          "considered"
        ]
      },
      {
        "instruccion": "Completa el vocabulario.",
        "pregunta": "Solar and wind power are types of ___ energy.",
        "respuestas": [
          "renewable",
          "clean",
          "green"
        ]
      },
      {
        "instruccion": "Completa la frase impersonal.",
        "pregunta": "It is widely ___ that exercise is good for you.",
        "respuestas": [
          "believed",
          "known",
          "accepted"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "desde mi punto de vista",
        "respuestas": [
          "in my view",
          "from my point of view",
          "in my opinion"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "el cambio climático",
        "respuestas": [
          "climate change"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "hasta cierto punto",
        "respuestas": [
          "to a certain extent",
          "to some extent"
        ]
      },
      {
        "instruccion": "Corrige la oración (estilo formal).",
        "pregunta": "In conclusion, it's super important to recycle.",
        "respuestas": [
          "In conclusion, it is very important to recycle",
          "In conclusion, it is extremely important to recycle",
          "In conclusion, it is essential to recycle"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "Frase para dar tu opinión en un ensayo:",
        "opciones": [
          "In my view…",
          "By the way…",
          "Anyway…",
          "You know…"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___, cars produce a lot of pollution. (además)",
        "opciones": [
          "Moreover",
          "However",
          "Although",
          "Despite"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Para presentar el argumento contrario:",
        "opciones": [
          "Some people argue that…",
          "Firstly…",
          "In conclusion…",
          "For instance…"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Para cerrar un ensayo:",
        "opciones": [
          "All things considered…",
          "Firstly…",
          "For example…",
          "Moreover…"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Carbon footprint» significa:",
        "opciones": [
          "Huella de carbono",
          "Huella digital",
          "Pie de carbón",
          "Contaminación del agua"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es más formal?",
        "opciones": [
          "It is essential to protect the environment.",
          "It's super important to protect the environment.",
          "We gotta protect the environment.",
          "Protecting the environment is, like, important."
        ]
      },
      {
        "tipo": "listening",
        "audio": "There is no doubt that air pollution causes health problems, especially in children.",
        "pregunta": "¿A quién afecta especialmente la contaminación?",
        "opciones": [
          "A los niños",
          "A los ancianos",
          "A los atletas",
          "A los trabajadores"
        ]
      },
      {
        "tipo": "listening",
        "audio": "On balance, I believe that working from home is better for the environment.",
        "pregunta": "¿Qué cree?",
        "opciones": [
          "Que trabajar desde casa es mejor para el medio ambiente",
          "Que es peor",
          "Que no importa",
          "Que hay que volver a la oficina"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: no cabe duda de que",
        "respuestas": [
          "there is no doubt that",
          "there's no doubt that"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: especies en peligro de extinción",
        "respuestas": [
          "endangered species"
        ]
      }
    ]
  },
  {
    "id": "b2-28",
    "num": 28,
    "titulo": "Presentaciones orales: estructura y lenguaje",
    "contexto": "Hablar en público",
    "explicacion": {
      "es": [
        "Una buena **presentación oral** tiene tres partes: **introducción** (saludas, presentas el tema y explicas cómo la vas a organizar), **desarrollo** (tus puntos principales, en orden) y **conclusión** (resumes y abres las preguntas).",
        "Para **empezar**: ***Good morning, everyone. Thank you for coming. Today I'm going to talk about… I've divided my presentation into three parts.*** Para **señalar** el orden: ***First of all…, Moving on to…, Let's now look at…, Finally…***",
        "Para hablar de **imágenes y gráficas**: ***As you can see on this slide…, This chart shows…, If you look at the graph…, The numbers have risen sharply.***",
        "Para **terminar**: ***To sum up…, So, to conclude…, Thank you for your attention. Are there any questions?*** Y para **responder preguntas**: ***That's a good question. / I'm not sure, but I'll find out. / Does that answer your question?***"
      ],
      "tabla": {
        "columnas": [
          "Momento",
          "Frases útiles"
        ],
        "filas": [
          [
            "Saludar",
            "Good morning, everyone. Thank you for being here."
          ],
          [
            "Presentar el tema",
            "Today I'd like to talk about… / The purpose of this talk is…"
          ],
          [
            "Organizar",
            "First…, then…, and finally… / I've divided my talk into three parts."
          ],
          [
            "Cambiar de punto",
            "Moving on to… / Let's now turn to… / That brings me to…"
          ],
          [
            "Gráficas",
            "As you can see… / This chart shows… / Let me draw your attention to…"
          ],
          [
            "Cerrar",
            "To sum up… / Thank you for your attention. / Any questions?"
          ]
        ]
      },
      "ojo": [
        "No **leas** las diapositivas: úsalas como apoyo. Mira al público y habla **despacio**.",
        "Usa **frases cortas** y repite las ideas importantes: ***The key point here is… / Let me repeat that…***",
        "Si no sabes una respuesta, no inventes: ***That's a great question. I don't have the exact figure, but I'll send it to you.***",
        "Para ganar tiempo al pensar: ***Let me think about that for a second. / That's an interesting point.***",
        "Vocabulario: ***slide*** (diapositiva), ***audience*** (público), ***handout*** (material impreso), ***key points*** (puntos clave), ***Q&A*** (ronda de preguntas)."
      ],
      "en": [
        "A good presentation has an introduction, a main part, and a conclusion.",
        "Good morning, everyone. Today I'm going to talk about our new project. I've divided my presentation into three parts.",
        "As you can see on this slide, sales have risen sharply.",
        "To sum up, thank you for your attention. Are there any questions?"
      ]
    },
    "vocabulario": [
      {
        "en": "Good morning, everyone.",
        "es": "buenos días a todos",
        "imagen": "Ponente sonriendo frente a un auditorio",
        "ejemplo": [
          "Good morning, everyone. Thank you for coming.",
          "Buenos días a todos. Gracias por venir."
        ]
      },
      {
        "en": "Today I'm going to talk about",
        "es": "hoy voy a hablar de",
        "imagen": "Persona presentando frente a una pantalla",
        "ejemplo": [
          "Today I'm going to talk about our results this year.",
          "Hoy voy a hablar de nuestros resultados de este año."
        ]
      },
      {
        "en": "I've divided my presentation into three parts.",
        "es": "dividí mi presentación en tres partes",
        "imagen": "Diapositiva con tres secciones de colores",
        "ejemplo": [
          "I've divided my presentation into three parts.",
          "Dividí mi presentación en tres partes."
        ]
      },
      {
        "en": "First of all",
        "es": "en primer lugar",
        "imagen": "Ponente levantando un dedo",
        "ejemplo": [
          "First of all, let me introduce my team.",
          "En primer lugar, déjenme presentar a mi equipo."
        ]
      },
      {
        "en": "Moving on to",
        "es": "pasando a",
        "imagen": "Persona cambiando de diapositiva con un control",
        "ejemplo": [
          "Moving on to the next point, let's look at the costs.",
          "Pasando al siguiente punto, veamos los costos."
        ]
      },
      {
        "en": "As you can see on this slide",
        "es": "como pueden ver en esta diapositiva",
        "imagen": "Diapositiva con una gráfica de barras",
        "ejemplo": [
          "As you can see on this slide, sales have doubled.",
          "Como pueden ver en esta diapositiva, las ventas se duplicaron."
        ]
      },
      {
        "en": "This chart shows",
        "es": "esta gráfica muestra",
        "imagen": "Gráfica de pastel en una pantalla grande",
        "ejemplo": [
          "This chart shows where our customers come from.",
          "Esta gráfica muestra de dónde vienen nuestros clientes."
        ]
      },
      {
        "en": "To sum up",
        "es": "para resumir",
        "imagen": "Ponente con la última diapositiva en pantalla",
        "ejemplo": [
          "To sum up, it has been a very good year.",
          "Para resumir, ha sido un muy buen año."
        ]
      },
      {
        "en": "Thank you for your attention.",
        "es": "gracias por su atención",
        "imagen": "Público aplaudiendo al final de una presentación",
        "ejemplo": [
          "Thank you for your attention.",
          "Gracias por su atención."
        ]
      },
      {
        "en": "Are there any questions?",
        "es": "¿hay alguna pregunta?",
        "imagen": "Persona del público levantando la mano",
        "ejemplo": [
          "Are there any questions?",
          "¿Hay alguna pregunta?"
        ]
      },
      {
        "en": "That's a good question.",
        "es": "buena pregunta",
        "imagen": "Ponente sonriendo y asintiendo",
        "ejemplo": [
          "That's a good question. Let me explain.",
          "Buena pregunta. Déjeme explicar."
        ]
      },
      {
        "en": "a slide",
        "es": "una diapositiva",
        "imagen": "Proyector mostrando una diapositiva en una pantalla",
        "ejemplo": [
          "Let's go back to the previous slide.",
          "Regresemos a la diapositiva anterior."
        ]
      },
      {
        "en": "the audience",
        "es": "el público",
        "imagen": "Auditorio lleno escuchando con atención",
        "ejemplo": [
          "The audience asked many interesting questions.",
          "El público hizo muchas preguntas interesantes."
        ]
      },
      {
        "en": "key points",
        "es": "puntos clave",
        "imagen": "Lista de tres puntos resaltados",
        "ejemplo": [
          "Let me repeat the key points.",
          "Déjenme repetir los puntos clave."
        ]
      },
      {
        "en": "a handout",
        "es": "un material impreso",
        "imagen": "Hojas impresas repartidas en una sala",
        "ejemplo": [
          "You'll find the details in the handout.",
          "Encontrarán los detalles en el material impreso."
        ]
      },
      {
        "en": "I'll find out",
        "es": "lo averiguaré",
        "imagen": "Ponente anotando una pregunta en su libreta",
        "ejemplo": [
          "I don't know the exact number, but I'll find out.",
          "No sé el número exacto, pero lo averiguaré."
        ]
      }
    ],
    "grupos": [
      {
        "id": "nervios",
        "titulo": "Controlar los nervios",
        "icono": "😅",
        "patron": [
          "Take a deep breath.",
          "Practice in front of…",
          "Make eye contact."
        ],
        "palabras": [
          {
            "en": "stage fright",
            "es": "miedo escénico",
            "imagen": "Persona temblando detrás de un telón",
            "ejemplo": [
              "Many people suffer from stage fright.",
              "Mucha gente sufre de miedo escénico."
            ]
          },
          {
            "en": "take a deep breath",
            "es": "respirar hondo",
            "imagen": "Persona respirando con los ojos cerrados antes de hablar",
            "ejemplo": [
              "Take a deep breath before you start.",
              "Respira hondo antes de empezar."
            ]
          },
          {
            "en": "rehearse",
            "es": "ensayar",
            "imagen": "Persona practicando su presentación frente a un espejo",
            "ejemplo": [
              "I rehearsed my presentation five times.",
              "Ensayé mi presentación cinco veces."
            ]
          },
          {
            "en": "make eye contact",
            "es": "mirar a los ojos",
            "imagen": "Ponente mirando al público con confianza",
            "ejemplo": [
              "Make eye contact with the audience.",
              "Mira a los ojos al público."
            ]
          },
          {
            "en": "speak clearly",
            "es": "hablar con claridad",
            "imagen": "Persona hablando con calma frente a un micrófono",
            "ejemplo": [
              "Speak clearly and not too fast.",
              "Habla con claridad y no muy rápido."
            ]
          },
          {
            "en": "body language",
            "es": "lenguaje corporal",
            "imagen": "Ponente con postura abierta y manos expresivas",
            "ejemplo": [
              "Your body language is as important as your words.",
              "Tu lenguaje corporal es tan importante como tus palabras."
            ]
          }
        ]
      },
      {
        "id": "preguntas",
        "titulo": "Ronda de preguntas",
        "icono": "🙋",
        "patron": [
          "Could you repeat the question?",
          "Let me think about that.",
          "Does that answer your question?"
        ],
        "palabras": [
          {
            "en": "Could you repeat the question?",
            "es": "¿podría repetir la pregunta?",
            "imagen": "Ponente acercándose para escuchar una pregunta",
            "ejemplo": [
              "Sorry, could you repeat the question?",
              "Perdón, ¿podría repetir la pregunta?"
            ]
          },
          {
            "en": "Let me think about that.",
            "es": "déjeme pensarlo",
            "imagen": "Ponente pensativo con la mano en la barbilla",
            "ejemplo": [
              "That's interesting. Let me think about that for a second.",
              "Qué interesante. Déjeme pensarlo un segundo."
            ]
          },
          {
            "en": "Does that answer your question?",
            "es": "¿con eso responde su pregunta?",
            "imagen": "Ponente señalando a una persona del público",
            "ejemplo": [
              "Does that answer your question?",
              "¿Con eso responde su pregunta?"
            ]
          },
          {
            "en": "I'm afraid I don't know.",
            "es": "me temo que no sé",
            "imagen": "Ponente encogiéndose de hombros con honestidad",
            "ejemplo": [
              "I'm afraid I don't know, but I'll check.",
              "Me temo que no sé, pero lo voy a revisar."
            ]
          },
          {
            "en": "That's beyond the scope of this talk.",
            "es": "eso va más allá de esta plática",
            "imagen": "Ponente señalando el título de su presentación",
            "ejemplo": [
              "That's beyond the scope of this talk, but we can discuss it later.",
              "Eso va más allá de esta plática, pero lo podemos comentar después."
            ]
          },
          {
            "en": "Thank you for the question.",
            "es": "gracias por la pregunta",
            "imagen": "Ponente agradeciendo con una sonrisa",
            "ejemplo": [
              "Thank you for the question.",
              "Gracias por la pregunta."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Good morning, everyone. Thank you for coming.",
        "es": "Buenos días a todos. Gracias por venir."
      },
      {
        "en": "Today I'm going to talk about our results this year.",
        "es": "Hoy voy a hablar de nuestros resultados de este año."
      },
      {
        "en": "I've divided my presentation into three parts.",
        "es": "Dividí mi presentación en tres partes."
      },
      {
        "en": "Moving on to the next point, let's look at the costs.",
        "es": "Pasando al siguiente punto, veamos los costos."
      },
      {
        "en": "As you can see on this slide, sales have doubled.",
        "es": "Como pueden ver en esta diapositiva, las ventas se duplicaron."
      },
      {
        "en": "To sum up, it has been a very good year.",
        "es": "Para resumir, ha sido un muy buen año."
      },
      {
        "en": "Are there any questions?",
        "es": "¿Hay alguna pregunta?"
      },
      {
        "en": "I don't know the exact number, but I'll find out.",
        "es": "No sé el número exacto, pero lo averiguaré."
      },
      {
        "en": "Take a deep breath before you start.",
        "es": "Respira hondo antes de empezar."
      },
      {
        "en": "Sorry, could you repeat the question?",
        "es": "Perdón, ¿podría repetir la pregunta?"
      }
    ],
    "frases": [
      {
        "en": "Good afternoon, everyone. My name is Laura, and today I'd like to present our plan for the new store in Monterrey.",
        "es": "Buenas tardes a todos. Me llamo Laura y hoy me gustaría presentar nuestro plan para la nueva tienda en Monterrey.",
        "imagen": "Mujer presentando frente a ejecutivos en una sala de juntas"
      },
      {
        "en": "First, I'll explain the background; then, I'll show you the numbers; and finally, I'll talk about the next steps.",
        "es": "Primero explicaré el contexto; luego les mostraré los números; y por último hablaré de los siguientes pasos.",
        "imagen": "Diapositiva con un índice de tres puntos"
      },
      {
        "en": "If you look at this graph, you'll notice that online sales have grown steadily since 2020.",
        "es": "Si miran esta gráfica, notarán que las ventas en línea han crecido de manera constante desde 2020.",
        "imagen": "Gráfica de línea ascendente en una pantalla"
      },
      {
        "en": "That brings me to the most important point of my presentation: the budget.",
        "es": "Eso me lleva al punto más importante de mi presentación: el presupuesto.",
        "imagen": "Ponente señalando una cifra grande en una diapositiva"
      },
      {
        "en": "I'd like to draw your attention to the numbers in red, which show where we are losing money.",
        "es": "Me gustaría llamar su atención sobre los números en rojo, que muestran dónde estamos perdiendo dinero.",
        "imagen": "Tabla con números en rojo en una pantalla"
      },
      {
        "en": "To sum up, I believe this project will help us reach more customers and increase our profits.",
        "es": "Para resumir, creo que este proyecto nos ayudará a llegar a más clientes y aumentar las ganancias.",
        "imagen": "Ponente cerrando su presentación con confianza"
      },
      {
        "en": "Thank you very much for your attention. I'd be happy to answer any questions you may have.",
        "es": "Muchas gracias por su atención. Con gusto respondo cualquier pregunta que tengan.",
        "imagen": "Público levantando la mano después de una presentación"
      },
      {
        "en": "That's a very good question. Unfortunately, I don't have the exact figures with me, but I'll send them to you by email.",
        "es": "Muy buena pregunta. Desafortunadamente no traigo las cifras exactas, pero se las mandaré por correo.",
        "imagen": "Ponente anotando un correo electrónico de alguien del público"
      },
      {
        "en": "Before my first presentation in English, I rehearsed it in front of my family at least ten times.",
        "es": "Antes de mi primera presentación en inglés, la ensayé frente a mi familia por lo menos diez veces.",
        "imagen": "Persona practicando en la sala frente a su familia"
      },
      {
        "en": "Remember: speak slowly, make eye contact, and don't read directly from the slides.",
        "es": "Recuerda: habla despacio, mira a los ojos y no leas directamente de las diapositivas.",
        "imagen": "Ponente mirando al público sin voltear a la pantalla"
      }
    ],
    "listening": [
      {
        "audio": "Good morning, everyone. Today I'm going to talk about how to save energy at home.",
        "pregunta": "¿De qué va a hablar?",
        "opciones": [
          "De cómo ahorrar energía en casa",
          "De un viaje",
          "De ventas",
          "De salud"
        ]
      },
      {
        "audio": "I've divided my talk into three parts: the problem, the solution, and the costs.",
        "pregunta": "¿En cuántas partes dividió su plática?",
        "opciones": [
          "Tres",
          "Dos",
          "Cuatro",
          "Cinco"
        ]
      },
      {
        "audio": "As you can see on this chart, the number of visitors has doubled in two years.",
        "pregunta": "¿Qué pasó con los visitantes?",
        "opciones": [
          "Se duplicaron en dos años",
          "Bajaron",
          "Se mantuvieron",
          "Se triplicaron"
        ]
      },
      {
        "audio": "That's a good question. I'm not sure, but I'll find out and send you the answer.",
        "pregunta": "¿Qué hará el ponente?",
        "opciones": [
          "Averiguar y mandar la respuesta",
          "Inventar una respuesta",
          "Ignorar la pregunta",
          "Terminar la presentación"
        ]
      },
      {
        "audio": "Thank you for your attention. Are there any questions?",
        "pregunta": "¿En qué parte de la presentación están?",
        "opciones": [
          "Al final",
          "Al principio",
          "En medio",
          "En un descanso"
        ]
      }
    ],
    "lectura": {
      "titulo": "My first presentation in English",
      "texto": "When my boss told me that I had to give a presentation in English at an international conference, I panicked. I had never spoken in public in English, and I suffered from terrible stage fright. My colleague Ana, who is an experienced speaker, gave me some advice. First, she told me to prepare a clear structure: an introduction, three key points, and a short conclusion. Then she suggested using simple slides with images instead of long texts, so that I wouldn't be tempted to read them. She also recommended rehearsing in front of friends and recording myself on video. I practiced every evening for two weeks. On the day of the conference, I took a deep breath, smiled, and said: Good morning, everyone. My hands were shaking at first, but after two minutes, I started to relax. At the end, a man asked a difficult question, and I said: That's a great question. I'll check the data and email you. Everybody applauded. It was the proudest moment of my career.",
      "preguntas": [
        {
          "pregunta": "¿Cómo reaccionó cuando su jefe le dio la noticia?",
          "opciones": [
            "Entró en pánico",
            "Se emocionó",
            "Renunció",
            "Se rió"
          ]
        },
        {
          "pregunta": "¿Qué tipo de diapositivas le recomendó Ana?",
          "opciones": [
            "Sencillas, con imágenes en vez de textos largos",
            "Con mucho texto",
            "Sin diapositivas",
            "Con muchas gráficas"
          ]
        },
        {
          "pregunta": "¿Cuánto tiempo practicó?",
          "opciones": [
            "Dos semanas, cada noche",
            "Un día",
            "Un mes",
            "Una hora"
          ]
        },
        {
          "pregunta": "¿Qué contestó a la pregunta difícil?",
          "opciones": [
            "Que revisaría los datos y le mandaría un correo",
            "Inventó una respuesta",
            "No contestó",
            "Le pidió ayuda a Ana"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa la frase de presentación.",
        "pregunta": "Today I'm going to ___ about our new product.",
        "respuestas": [
          "talk",
          "speak"
        ]
      },
      {
        "instruccion": "Completa la frase de presentación.",
        "pregunta": "As you can ___ on this slide, prices have gone up.",
        "respuestas": [
          "see"
        ]
      },
      {
        "instruccion": "Completa la frase de presentación.",
        "pregunta": "___ on to the next point… (Pasando a…)",
        "respuestas": [
          "Moving"
        ]
      },
      {
        "instruccion": "Completa la frase de cierre.",
        "pregunta": "Thank you for your ___.",
        "respuestas": [
          "attention",
          "time"
        ]
      },
      {
        "instruccion": "Completa la frase para preguntas.",
        "pregunta": "Are there any ___?",
        "respuestas": [
          "questions"
        ]
      },
      {
        "instruccion": "Completa el consejo.",
        "pregunta": "Make eye ___ with the audience.",
        "respuestas": [
          "contact"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "una diapositiva",
        "respuestas": [
          "a slide"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Buena pregunta.",
        "respuestas": [
          "That's a good question",
          "Good question",
          "That is a good question",
          "That's a great question"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "miedo escénico",
        "respuestas": [
          "stage fright"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Para resumir, fue un buen año.",
        "respuestas": [
          "To sum up, it was a good year",
          "To sum up it was a good year",
          "In summary, it was a good year"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "Frase para empezar una presentación:",
        "opciones": [
          "Good morning, everyone. Today I'd like to talk about…",
          "Bye, everyone!",
          "Any questions?",
          "To sum up…"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Para cambiar de punto:",
        "opciones": [
          "Moving on to…",
          "Thank you for coming…",
          "Good morning…",
          "Any questions?"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Para hablar de una gráfica:",
        "opciones": [
          "This chart shows…",
          "Let me think…",
          "Thank you…",
          "See you…"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Si no sabes una respuesta:",
        "opciones": [
          "I'm afraid I don't know, but I'll find out.",
          "That's a stupid question.",
          "I don't care.",
          "Next question."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Rehearse» significa:",
        "opciones": [
          "Ensayar",
          "Investigar",
          "Repetir la pregunta",
          "Descansar"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«The audience» significa:",
        "opciones": [
          "El público",
          "El auditorio vacío",
          "El presentador",
          "El micrófono"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Let me draw your attention to this figure: we have reduced costs by fifteen percent.",
        "pregunta": "¿Cuánto redujeron los costos?",
        "opciones": [
          "Quince por ciento",
          "Cincuenta por ciento",
          "Cinco por ciento",
          "Veinticinco por ciento"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Before your presentation, take a deep breath and remember to speak slowly.",
        "pregunta": "¿Qué consejo da?",
        "opciones": [
          "Respirar hondo y hablar despacio",
          "Leer las diapositivas",
          "Hablar rápido",
          "No mirar al público"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: gracias por venir",
        "respuestas": [
          "thank you for coming",
          "thanks for coming"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¿Podría repetir la pregunta?",
        "respuestas": [
          "Could you repeat the question",
          "Can you repeat the question"
        ]
      }
    ]
  }
];
