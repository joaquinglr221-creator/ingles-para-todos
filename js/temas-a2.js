// Temas del nivel A2 (docs/plan-de-estudios.md). Los que todavía no tienen contenido solo llevan título.
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
const TEMAS_A2 = [
  {
    "id": "a2-01",
    "num": 1,
    "titulo": "Pasado simple: verbos regulares",
    "contexto": "El fin de semana pasado",
    "explicacion": {
      "es": [
        "El **pasado simple** sirve para acciones **terminadas** en el pasado: *Yesterday I **cleaned** my room.* (Ayer limpié mi cuarto.) *Last weekend we **visited** my grandma.*",
        "Los **verbos regulares** forman el pasado agregando **-ed**: *work, work**ed**, play, play**ed**, watch, watch**ed***. ¡Es igual para todas las personas! *I worked, she worked, they worked.*",
        "Reglas de escritura: si termina en **-e**, solo se agrega **-d** (*dance, danced, live, lived*). Consonante + **-y** cambia a **-ied** (*study, studied, try, tried*). Verbo corto con consonante-vocal-consonante duplica la última letra (*stop, stopped, plan, planned*).",
        "La **-ed** suena de tres formas: **/t/** después de sonidos sordos (*worked, watched, cooked*), **/d/** en la mayoría (*played, cleaned, called*) y **/ɪd/** después de *t* o *d* (*wanted, visited, needed*)."
      ],
      "tabla": {
        "columnas": [
          "Verbo",
          "Pasado",
          "Sonido",
          "Ejemplo"
        ],
        "filas": [
          [
            "work",
            "worked",
            "/t/",
            "I worked on Saturday."
          ],
          [
            "play",
            "played",
            "/d/",
            "We played soccer."
          ],
          [
            "visit",
            "visited",
            "/ɪd/",
            "She visited her aunt."
          ],
          [
            "study",
            "studied",
            "/d/",
            "They studied all night."
          ],
          [
            "stop",
            "stopped",
            "/t/",
            "The bus stopped."
          ]
        ]
      },
      "ojo": [
        "El pasado es **igual para todos**: *he worked* ✅, no *he workeds* ❌.",
        "No pronuncies la **e** de *-ed* casi nunca: *worked* suena «workt», no «work-ed». Solo se oye la sílaba extra en *wanted, visited, needed*.",
        "Palabras de pasado: ***yesterday, last night, last weekend, last month, two days ago, in 2019***.",
        "*Play, played* (vocal + *y* se queda), pero *study, studied* (consonante + *y* cambia a *ied*).",
        "En español decimos *el sábado pasado*; en inglés es ***last Saturday*** (sin *the*): *I cleaned the house **last Saturday***."
      ],
      "en": [
        "We use the past simple for finished actions in the past: Yesterday I cleaned my room.",
        "Regular verbs add e d: work, worked. Play, played. Watch, watched.",
        "The past is the same for everyone: I worked, she worked, they worked.",
        "Time words: yesterday, last night, last weekend, two days ago."
      ]
    },
    "vocabulario": [
      {
        "en": "cleaned the house",
        "es": "limpié la casa",
        "imagen": "Persona limpiando la sala con una aspiradora un sábado por la mañana",
        "ejemplo": [
          "I cleaned the house on Saturday morning.",
          "Limpié la casa el sábado en la mañana."
        ]
      },
      {
        "en": "watched a movie",
        "es": "vi una película",
        "imagen": "Pareja viendo una película en el sofá con palomitas",
        "ejemplo": [
          "We watched a movie at home last night.",
          "Anoche vimos una película en casa."
        ]
      },
      {
        "en": "played soccer",
        "es": "jugué fútbol",
        "imagen": "Amigos jugando fútbol en una cancha de pasto",
        "ejemplo": [
          "My brother played soccer with his friends.",
          "Mi hermano jugó fútbol con sus amigos."
        ]
      },
      {
        "en": "visited my grandparents",
        "es": "visité a mis abuelos",
        "imagen": "Nieta abrazando a sus abuelos en la puerta de su casa",
        "ejemplo": [
          "I visited my grandparents on Sunday.",
          "Visité a mis abuelos el domingo."
        ]
      },
      {
        "en": "cooked dinner",
        "es": "cociné la cena",
        "imagen": "Hombre cocinando la cena en la estufa",
        "ejemplo": [
          "My dad cooked dinner for everyone.",
          "Mi papá cocinó la cena para todos."
        ]
      },
      {
        "en": "listened to music",
        "es": "escuché música",
        "imagen": "Joven acostado en su cama escuchando música con audífonos",
        "ejemplo": [
          "She listened to music all afternoon.",
          "Ella escuchó música toda la tarde."
        ]
      },
      {
        "en": "walked in the park",
        "es": "caminé en el parque",
        "imagen": "Persona caminando con su perro por un parque con árboles",
        "ejemplo": [
          "We walked in the park after lunch.",
          "Caminamos en el parque después de comer."
        ]
      },
      {
        "en": "studied for a test",
        "es": "estudié para un examen",
        "imagen": "Estudiante estudiando en su escritorio con libros y notas",
        "ejemplo": [
          "I studied for my English test.",
          "Estudié para mi examen de inglés."
        ]
      },
      {
        "en": "danced at a party",
        "es": "bailé en una fiesta",
        "imagen": "Amigos bailando en una fiesta con luces de colores",
        "ejemplo": [
          "They danced at the party until midnight.",
          "Bailaron en la fiesta hasta la medianoche."
        ]
      },
      {
        "en": "washed the car",
        "es": "lavé el carro",
        "imagen": "Hombre lavando su carro con una manguera y espuma",
        "ejemplo": [
          "My neighbor washed his car on Sunday.",
          "Mi vecino lavó su carro el domingo."
        ]
      },
      {
        "en": "called my mom",
        "es": "le llamé a mi mamá",
        "imagen": "Mujer hablando por teléfono sonriendo en su sala",
        "ejemplo": [
          "I called my mom last night.",
          "Anoche le llamé a mi mamá."
        ]
      },
      {
        "en": "worked late",
        "es": "trabajé hasta tarde",
        "imagen": "Persona trabajando en su computadora en una oficina de noche",
        "ejemplo": [
          "I worked late on Friday.",
          "El viernes trabajé hasta tarde."
        ]
      },
      {
        "en": "painted the kitchen",
        "es": "pinté la cocina",
        "imagen": "Pareja pintando la pared de la cocina de color amarillo",
        "ejemplo": [
          "We painted the kitchen last weekend.",
          "El fin de semana pasado pintamos la cocina."
        ]
      },
      {
        "en": "stayed at home",
        "es": "me quedé en casa",
        "imagen": "Persona descansando en casa con una cobija y un té",
        "ejemplo": [
          "It rained, so we stayed at home.",
          "Llovió, así que nos quedamos en casa."
        ]
      },
      {
        "en": "traveled to the beach",
        "es": "viajé a la playa",
        "imagen": "Familia llegando en carro a una playa soleada",
        "ejemplo": [
          "They traveled to the beach on Friday night.",
          "Viajaron a la playa el viernes en la noche."
        ]
      },
      {
        "en": "planted some flowers",
        "es": "planté unas flores",
        "imagen": "Abuela plantando flores en su jardín",
        "ejemplo": [
          "My grandma planted some flowers in the garden.",
          "Mi abuela plantó unas flores en el jardín."
        ]
      }
    ],
    "grupos": [
      {
        "id": "sonidos",
        "titulo": "Los tres sonidos de -ed",
        "icono": "🔊",
        "patron": [
          "worked",
          "played",
          "wanted"
        ],
        "palabras": [
          {
            "en": "worked",
            "es": "trabajé",
            "imagen": "Persona trabajando en su laptop en la mesa del comedor",
            "ejemplo": [
              "I worked from home yesterday.",
              "Ayer trabajé desde casa."
            ]
          },
          {
            "en": "cooked",
            "es": "cociné",
            "imagen": "Sartén con huevos y verduras en la estufa",
            "ejemplo": [
              "She cooked pasta for lunch.",
              "Ella cocinó pasta para la comida."
            ]
          },
          {
            "en": "watched",
            "es": "vi",
            "imagen": "Familia viendo un partido de fútbol en la tele",
            "ejemplo": [
              "We watched the game on TV.",
              "Vimos el partido en la tele."
            ]
          },
          {
            "en": "played",
            "es": "jugué",
            "imagen": "Niños jugando con una pelota en el jardín",
            "ejemplo": [
              "The kids played in the garden.",
              "Los niños jugaron en el jardín."
            ]
          },
          {
            "en": "cleaned",
            "es": "limpié",
            "imagen": "Persona limpiando una ventana con un trapo",
            "ejemplo": [
              "I cleaned the windows.",
              "Limpié las ventanas."
            ]
          },
          {
            "en": "called",
            "es": "llamé",
            "imagen": "Persona marcando un número en su celular",
            "ejemplo": [
              "He called me at nine.",
              "Él me llamó a las nueve."
            ]
          },
          {
            "en": "wanted",
            "es": "quise",
            "imagen": "Niño mirando un pastel con ganas en una pastelería",
            "ejemplo": [
              "I wanted a piece of cake.",
              "Quería una rebanada de pastel."
            ]
          },
          {
            "en": "visited",
            "es": "visité",
            "imagen": "Turistas visitando un museo y mirando una pintura",
            "ejemplo": [
              "We visited a museum.",
              "Visitamos un museo."
            ]
          },
          {
            "en": "needed",
            "es": "necesité",
            "imagen": "Persona buscando ayuda con una llanta ponchada",
            "ejemplo": [
              "I needed help with the car.",
              "Necesité ayuda con el carro."
            ]
          },
          {
            "en": "decided",
            "es": "decidí",
            "imagen": "Persona eligiendo entre dos caminos en el bosque",
            "ejemplo": [
              "We decided to stay home.",
              "Decidimos quedarnos en casa."
            ]
          }
        ]
      },
      {
        "id": "cuando",
        "titulo": "¿Cuándo pasó?",
        "icono": "📅",
        "patron": [
          "yesterday",
          "last weekend",
          "two days ago"
        ],
        "palabras": [
          {
            "en": "yesterday morning",
            "es": "ayer en la mañana",
            "imagen": "Persona tomando café al amanecer en su cocina",
            "ejemplo": [
              "I walked to work yesterday morning.",
              "Ayer en la mañana caminé al trabajo."
            ]
          },
          {
            "en": "last Saturday",
            "es": "el sábado pasado",
            "imagen": "Amigos en un día de campo un sábado soleado",
            "ejemplo": [
              "We played tennis last Saturday.",
              "El sábado pasado jugamos tenis."
            ]
          },
          {
            "en": "last night",
            "es": "anoche",
            "imagen": "Ventana de una casa iluminada de noche",
            "ejemplo": [
              "I watched a series last night.",
              "Anoche vi una serie."
            ]
          },
          {
            "en": "on Sunday afternoon",
            "es": "el domingo en la tarde",
            "imagen": "Familia comiendo en el jardín un domingo en la tarde",
            "ejemplo": [
              "We visited my aunt on Sunday afternoon.",
              "El domingo en la tarde visitamos a mi tía."
            ]
          },
          {
            "en": "two days ago",
            "es": "hace dos días",
            "imagen": "Calendario con un día marcado dos días atrás",
            "ejemplo": [
              "I called the doctor two days ago.",
              "Hace dos días le llamé al doctor."
            ]
          },
          {
            "en": "last summer",
            "es": "el verano pasado",
            "imagen": "Niños jugando en la playa en verano",
            "ejemplo": [
              "We traveled to Oaxaca last summer.",
              "El verano pasado viajamos a Oaxaca."
            ]
          },
          {
            "en": "an hour ago",
            "es": "hace una hora",
            "imagen": "Reloj de pared marcando la hora",
            "ejemplo": [
              "She arrived an hour ago.",
              "Ella llegó hace una hora."
            ]
          },
          {
            "en": "the day before yesterday",
            "es": "antier",
            "imagen": "Calendario con el día de antier encerrado en un círculo",
            "ejemplo": [
              "I cleaned the car the day before yesterday.",
              "Antier limpié el carro."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I cleaned the house on Saturday morning.",
        "es": "Limpié la casa el sábado en la mañana."
      },
      {
        "en": "We watched a movie at home last night.",
        "es": "Anoche vimos una película en casa."
      },
      {
        "en": "My sister studied for her exam all weekend.",
        "es": "Mi hermana estudió para su examen todo el fin de semana.",
        "imagen": "Joven estudiando en la mesa con libros abiertos un fin de semana"
      },
      {
        "en": "He played video games with his cousins.",
        "es": "Él jugó videojuegos con sus primos.",
        "imagen": "Primos jugando videojuegos juntos en la sala"
      },
      {
        "en": "We walked to the market and bought some fruit.",
        "es": "Caminamos al mercado y compramos fruta.",
        "imagen": "Pareja caminando hacia un mercado con bolsas de tela"
      },
      {
        "en": "I called my mom last night.",
        "es": "Anoche le llamé a mi mamá."
      },
      {
        "en": "They danced at the party until midnight.",
        "es": "Bailaron en la fiesta hasta la medianoche."
      },
      {
        "en": "It rained, so we stayed at home.",
        "es": "Llovió, así que nos quedamos en casa."
      },
      {
        "en": "She opened the window and listened to the birds.",
        "es": "Ella abrió la ventana y escuchó a los pájaros.",
        "imagen": "Mujer abriendo la ventana en la mañana con pájaros en un árbol"
      },
      {
        "en": "I worked late on Friday.",
        "es": "El viernes trabajé hasta tarde."
      }
    ],
    "frases": [
      {
        "en": "Last weekend I cleaned my apartment, cooked a big lunch, and watched two movies.",
        "es": "El fin de semana pasado limpié mi departamento, cociné una comida grande y vi dos películas.",
        "imagen": "Persona descansando en el sofá después de limpiar, con la casa ordenada"
      },
      {
        "en": "On Saturday we visited my grandparents and helped them in the garden.",
        "es": "El sábado visitamos a mis abuelos y les ayudamos en el jardín.",
        "imagen": "Familia ayudando a los abuelos a trabajar en el jardín"
      },
      {
        "en": "My brother played soccer in the morning and studied in the afternoon.",
        "es": "Mi hermano jugó fútbol en la mañana y estudió en la tarde."
      },
      {
        "en": "We wanted to go to the beach, but it rained all day.",
        "es": "Queríamos ir a la playa, pero llovió todo el día.",
        "imagen": "Familia mirando la lluvia por la ventana con toallas de playa listas"
      },
      {
        "en": "I stayed at home on Sunday and listened to my favorite music.",
        "es": "El domingo me quedé en casa y escuché mi música favorita.",
        "imagen": "Persona relajada en su cuarto escuchando música en un tocadiscos"
      },
      {
        "en": "My parents painted the kitchen, and I helped them.",
        "es": "Mis papás pintaron la cocina y yo les ayudé.",
        "imagen": "Papás e hija pintando juntos la pared de la cocina"
      },
      {
        "en": "She traveled to Puebla by bus and visited her best friend.",
        "es": "Ella viajó a Puebla en autobús y visitó a su mejor amiga.",
        "imagen": "Dos amigas abrazándose en una terminal de autobuses"
      },
      {
        "en": "We decided to cook at home because the restaurant was closed.",
        "es": "Decidimos cocinar en casa porque el restaurante estaba cerrado.",
        "imagen": "Amigos cocinando juntos en casa y riendo"
      },
      {
        "en": "Yesterday I walked to work because my car needed repairs.",
        "es": "Ayer caminé al trabajo porque mi carro necesitaba reparaciones.",
        "imagen": "Persona caminando al trabajo por la banqueta con su mochila"
      },
      {
        "en": "The kids played in the park and then watched cartoons at home.",
        "es": "Los niños jugaron en el parque y luego vieron caricaturas en casa.",
        "imagen": "Niños viendo caricaturas en la sala después de jugar"
      }
    ],
    "listening": [
      {
        "audio": "Last Saturday I cleaned the house and then I watched a movie.",
        "pregunta": "¿Qué hizo después de limpiar?",
        "opciones": [
          "Vio una película",
          "Cocinó",
          "Jugó fútbol",
          "Visitó a su abuela"
        ]
      },
      {
        "audio": "We visited my uncle in Monterrey two weeks ago.",
        "pregunta": "¿Cuándo visitaron al tío?",
        "opciones": [
          "Hace dos semanas",
          "Ayer",
          "Hace dos días",
          "El mes pasado"
        ]
      },
      {
        "audio": "My sister studied all weekend because she had an exam on Monday.",
        "pregunta": "¿Por qué estudió la hermana?",
        "opciones": [
          "Tenía un examen el lunes",
          "Le gusta estudiar",
          "No tenía nada que hacer",
          "Su maestra se lo pidió"
        ]
      },
      {
        "audio": "It rained on Sunday, so we stayed at home and played cards.",
        "pregunta": "¿Qué hicieron el domingo?",
        "opciones": [
          "Jugaron cartas en casa",
          "Fueron al parque",
          "Fueron al cine",
          "Visitaron a amigos"
        ]
      },
      {
        "audio": "I called you last night, but you didn't answer.",
        "pregunta": "¿Cuándo llamó?",
        "opciones": [
          "Anoche",
          "Esta mañana",
          "Ayer en la tarde",
          "El sábado"
        ]
      }
    ],
    "lectura": {
      "titulo": "A busy weekend",
      "texto": "Last weekend was very busy for Marta. On Friday night she worked late, so she was very tired. On Saturday morning she cleaned her apartment and washed her clothes. In the afternoon she walked to the market and bought vegetables. Then she cooked a big dinner for her friends, Paco and Elena. They talked, laughed, and listened to music until midnight. On Sunday Marta wanted to relax, but her sister called her at eight in the morning. Her sister needed help with her new house, so Marta helped her paint the living room. In the evening Marta finally rested and watched a movie on the sofa.",
      "preguntas": [
        {
          "pregunta": "¿Por qué estaba cansada Marta el viernes?",
          "opciones": [
            "Trabajó hasta tarde",
            "Fue a una fiesta",
            "Limpió su casa",
            "Viajó mucho"
          ]
        },
        {
          "pregunta": "¿Qué compró en el mercado?",
          "opciones": [
            "Verduras",
            "Ropa",
            "Pintura",
            "Flores"
          ]
        },
        {
          "pregunta": "¿Qué hizo Marta con su hermana el domingo?",
          "opciones": [
            "Pintó la sala",
            "Fue al cine",
            "Cocinó la cena",
            "Lavó el carro"
          ]
        },
        {
          "pregunta": "¿Qué hizo Marta el domingo en la noche?",
          "opciones": [
            "Vio una película",
            "Salió con amigos",
            "Trabajó",
            "Visitó a su hermana"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Escribe el pasado.",
        "pregunta": "work → ___",
        "respuestas": [
          "worked"
        ]
      },
      {
        "instruccion": "Escribe el pasado.",
        "pregunta": "dance → ___",
        "respuestas": [
          "danced"
        ]
      },
      {
        "instruccion": "Escribe el pasado.",
        "pregunta": "study → ___",
        "respuestas": [
          "studied"
        ]
      },
      {
        "instruccion": "Escribe el pasado.",
        "pregunta": "stop → ___",
        "respuestas": [
          "stopped"
        ]
      },
      {
        "instruccion": "Escribe el pasado.",
        "pregunta": "play → ___",
        "respuestas": [
          "played"
        ]
      },
      {
        "instruccion": "Completa con el verbo en pasado.",
        "pregunta": "Yesterday I ___ (clean) my room.",
        "respuestas": [
          "cleaned"
        ]
      },
      {
        "instruccion": "Completa con el verbo en pasado.",
        "pregunta": "She ___ (visit) her aunt last week.",
        "respuestas": [
          "visited"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Anoche vimos una película.",
        "respuestas": [
          "We watched a movie last night",
          "Last night we watched a movie"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "el sábado pasado",
        "respuestas": [
          "last Saturday"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I play soccer yesterday.",
        "respuestas": [
          "I played soccer yesterday",
          "Yesterday I played soccer"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "Last night we ___ a movie.",
        "opciones": [
          "watched",
          "watch",
          "watches",
          "watching"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "El pasado de «study» es:",
        "opciones": [
          "studied",
          "studyed",
          "studed",
          "studies"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "El pasado de «plan» es:",
        "opciones": [
          "planned",
          "planed",
          "planted",
          "plans"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿En cuál la -ed suena /ɪd/ (sílaba extra)?",
        "opciones": [
          "wanted",
          "worked",
          "played",
          "cleaned"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She ___ her grandma two days ago.",
        "opciones": [
          "visited",
          "visits",
          "visit",
          "is visiting"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es una palabra de pasado?",
        "opciones": [
          "last weekend",
          "next week",
          "tomorrow",
          "every day"
        ]
      },
      {
        "tipo": "listening",
        "audio": "On Sunday I washed my car and then I cooked lunch for my family.",
        "pregunta": "¿Qué lavó?",
        "opciones": [
          "Su carro",
          "La ropa",
          "Los trastes",
          "El perro"
        ]
      },
      {
        "tipo": "listening",
        "audio": "We traveled to the mountains last month and stayed in a small cabin.",
        "pregunta": "¿Dónde se quedaron?",
        "opciones": [
          "En una cabaña",
          "En casa de amigos",
          "En un campamento",
          "En la playa"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Limpié la casa.",
        "respuestas": [
          "I cleaned the house"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Ella le llamó a su mamá.",
        "respuestas": [
          "She called her mom",
          "She called her mother",
          "She called her mum"
        ]
      }
    ]
  },
  {
    "id": "a2-02",
    "num": 2,
    "titulo": "Pasado simple: verbos irregulares",
    "contexto": "Vacaciones y viajes",
    "explicacion": {
      "es": [
        "Muchos verbos muy comunes son **irregulares**: su pasado **no** termina en *-ed* y hay que aprenderlo de memoria: *go, **went**, see, **saw**, eat, **ate**, buy, **bought***.",
        "Igual que los regulares, el pasado es **el mismo para todas las personas**: *I went, she went, we went, they went.*",
        "Los más útiles para contar un viaje: ***went*** (fui), ***took*** (tomé), ***saw*** (vi), ***ate*** (comí), ***had*** (tuve / pasé), ***bought*** (compré), ***swam*** (nadé), ***flew*** (volé), ***slept*** (dormí), ***came back*** (regresé).",
        "Algunos se parecen en grupos y así es más fácil recordarlos: *buy, **bought**, bring, **brought**, think, **thought***; *sleep, **slept**, leave, **left**, feel, **felt***; y otros no cambian: *put, **put**, cut, **cut***."
      ],
      "tabla": {
        "columnas": [
          "Verbo",
          "Pasado",
          "Ejemplo"
        ],
        "filas": [
          [
            "go (ir)",
            "went",
            "We went to Cancun."
          ],
          [
            "take (tomar)",
            "took",
            "I took a lot of photos."
          ],
          [
            "see (ver)",
            "saw",
            "We saw the pyramids."
          ],
          [
            "eat (comer)",
            "ate",
            "They ate tacos."
          ],
          [
            "have (tener / pasar)",
            "had",
            "We had a great time."
          ],
          [
            "buy (comprar)",
            "bought",
            "She bought souvenirs."
          ]
        ]
      },
      "ojo": [
        "*I **went** to the beach* ✅, no *I goed* ❌. Los irregulares nunca llevan *-ed*.",
        "***Had a great time*** = la pasé muy bien. *We **had** a great time in Oaxaca!*",
        "*Go, went* pero ***go*** **back**, ***went back*** y ***come back***, ***came back*** (regresar).",
        "*Read* en pasado se escribe igual pero suena **«red»**: *I **read** a book on the plane.*",
        "Para lugares: ***went to** the beach, **went to** Mexico*, pero ***went home*** (sin *to*) y ***went shopping / swimming*** (actividad)."
      ],
      "en": [
        "Many common verbs are irregular. Go, went. See, saw. Eat, ate. Buy, bought.",
        "The past is the same for everyone: I went, she went, they went.",
        "On vacation: We went to the beach. I took a lot of photos. We had a great time."
      ]
    },
    "vocabulario": [
      {
        "en": "went to the beach",
        "es": "fui a la playa",
        "imagen": "Familia caminando en la arena hacia el mar",
        "ejemplo": [
          "We went to the beach in July.",
          "En julio fuimos a la playa."
        ]
      },
      {
        "en": "took a lot of photos",
        "es": "tomé muchas fotos",
        "imagen": "Turista tomando fotos de una catedral con su celular",
        "ejemplo": [
          "I took a lot of photos of the city.",
          "Tomé muchas fotos de la ciudad."
        ]
      },
      {
        "en": "saw the pyramids",
        "es": "vi las pirámides",
        "imagen": "Turistas frente a una pirámide antigua bajo el cielo azul",
        "ejemplo": [
          "We saw the pyramids of Teotihuacan.",
          "Vimos las pirámides de Teotihuacan."
        ]
      },
      {
        "en": "ate seafood",
        "es": "comí mariscos",
        "imagen": "Plato de camarones y pescado en una mesa frente al mar",
        "ejemplo": [
          "We ate fresh seafood by the sea.",
          "Comimos mariscos frescos junto al mar."
        ]
      },
      {
        "en": "had a great time",
        "es": "la pasé muy bien",
        "imagen": "Amigos riendo juntos en un mirador",
        "ejemplo": [
          "We had a great time in Oaxaca.",
          "La pasamos muy bien en Oaxaca."
        ]
      },
      {
        "en": "bought souvenirs",
        "es": "compré recuerdos",
        "imagen": "Turista comprando artesanías en un mercado",
        "ejemplo": [
          "She bought souvenirs for her family.",
          "Ella compró recuerdos para su familia."
        ]
      },
      {
        "en": "flew to Cancun",
        "es": "volé a Cancún",
        "imagen": "Avión despegando sobre el mar turquesa",
        "ejemplo": [
          "We flew to Cancun on Friday.",
          "Volamos a Cancún el viernes."
        ]
      },
      {
        "en": "swam in the sea",
        "es": "nadé en el mar",
        "imagen": "Personas nadando en un mar turquesa",
        "ejemplo": [
          "The kids swam in the sea every day.",
          "Los niños nadaron en el mar todos los días."
        ]
      },
      {
        "en": "slept in a tent",
        "es": "dormí en una tienda de campaña",
        "imagen": "Tienda de campaña junto a un lago al atardecer",
        "ejemplo": [
          "We slept in a tent by the lake.",
          "Dormimos en una tienda de campaña junto al lago."
        ]
      },
      {
        "en": "rode a horse",
        "es": "monté a caballo",
        "imagen": "Persona montando a caballo por un sendero de montaña",
        "ejemplo": [
          "I rode a horse in the mountains.",
          "Monté a caballo en las montañas."
        ]
      },
      {
        "en": "met new people",
        "es": "conocí gente nueva",
        "imagen": "Viajeros de distintos países platicando en una fogata",
        "ejemplo": [
          "I met new people on the trip.",
          "Conocí gente nueva en el viaje."
        ]
      },
      {
        "en": "drove to the mountains",
        "es": "manejé a las montañas",
        "imagen": "Carro en una carretera rodeada de montañas",
        "ejemplo": [
          "My dad drove to the mountains.",
          "Mi papá manejó a las montañas."
        ]
      },
      {
        "en": "got lost",
        "es": "me perdí",
        "imagen": "Turista confundido mirando un mapa en una calle desconocida",
        "ejemplo": [
          "We got lost in the old town.",
          "Nos perdimos en el centro histórico."
        ]
      },
      {
        "en": "came back home",
        "es": "regresé a casa",
        "imagen": "Familia bajando las maletas del carro frente a su casa",
        "ejemplo": [
          "We came back home on Sunday night.",
          "Regresamos a casa el domingo en la noche."
        ]
      },
      {
        "en": "left early",
        "es": "salí temprano",
        "imagen": "Persona saliendo de casa con su maleta al amanecer",
        "ejemplo": [
          "We left early to avoid traffic.",
          "Salimos temprano para evitar el tráfico."
        ]
      },
      {
        "en": "spent a week",
        "es": "pasé una semana",
        "imagen": "Pareja descansando en hamacas frente al mar",
        "ejemplo": [
          "We spent a week in Puerto Escondido.",
          "Pasamos una semana en Puerto Escondido."
        ]
      }
    ],
    "grupos": [
      {
        "id": "lista",
        "titulo": "Los irregulares más usados",
        "icono": "📋",
        "patron": [
          "go, went",
          "see, saw",
          "buy, bought"
        ],
        "palabras": [
          {
            "en": "go, went",
            "es": "ir → fui",
            "imagen": "Persona caminando con su maleta en una estación de autobuses",
            "ejemplo": [
              "I went to Guadalajara last year.",
              "Fui a Guadalajara el año pasado."
            ]
          },
          {
            "en": "see, saw",
            "es": "ver → vi",
            "imagen": "Pareja mirando una ballena desde un barco",
            "ejemplo": [
              "We saw a whale!",
              "¡Vimos una ballena!"
            ]
          },
          {
            "en": "eat, ate",
            "es": "comer → comí",
            "imagen": "Persona comiendo tacos en un puesto callejero",
            "ejemplo": [
              "I ate tacos for dinner.",
              "Cené tacos."
            ]
          },
          {
            "en": "buy, bought",
            "es": "comprar → compré",
            "imagen": "Persona comprando un sombrero en un puesto",
            "ejemplo": [
              "He bought a hat.",
              "Él compró un sombrero."
            ]
          },
          {
            "en": "take, took",
            "es": "tomar → tomé",
            "imagen": "Viajeros subiendo a un tren",
            "ejemplo": [
              "We took the train to Chihuahua.",
              "Tomamos el tren a Chihuahua."
            ]
          },
          {
            "en": "drink, drank",
            "es": "tomar → tomé (bebida)",
            "imagen": "Persona tomando agua de coco en la playa",
            "ejemplo": [
              "I drank coconut water.",
              "Tomé agua de coco."
            ]
          },
          {
            "en": "write, wrote",
            "es": "escribir → escribí",
            "imagen": "Persona escribiendo en su diario de viaje",
            "ejemplo": [
              "She wrote a postcard to her mom.",
              "Ella le escribió una postal a su mamá."
            ]
          },
          {
            "en": "bring, brought",
            "es": "traer → traje",
            "imagen": "Persona entregando un regalo de viaje a su amiga",
            "ejemplo": [
              "I brought you a present.",
              "Te traje un regalo."
            ]
          },
          {
            "en": "give, gave",
            "es": "dar → di",
            "imagen": "Turista dando una propina a un guía",
            "ejemplo": [
              "We gave the guide a tip.",
              "Le dimos propina al guía."
            ]
          },
          {
            "en": "make, made",
            "es": "hacer → hice",
            "imagen": "Niños haciendo un castillo de arena",
            "ejemplo": [
              "The kids made a sandcastle.",
              "Los niños hicieron un castillo de arena."
            ]
          }
        ]
      },
      {
        "id": "viaje",
        "titulo": "Cosas del viaje",
        "icono": "🧳",
        "patron": [
          "a suitcase",
          "a ticket",
          "a passport"
        ],
        "palabras": [
          {
            "en": "a suitcase",
            "es": "una maleta",
            "imagen": "Maleta azul con ruedas junto a la puerta",
            "ejemplo": [
              "I packed my suitcase the night before.",
              "Hice mi maleta la noche anterior."
            ]
          },
          {
            "en": "a ticket",
            "es": "un boleto",
            "imagen": "Mano sosteniendo un boleto de autobús",
            "ejemplo": [
              "I bought the tickets online.",
              "Compré los boletos en internet."
            ]
          },
          {
            "en": "a passport",
            "es": "un pasaporte",
            "imagen": "Pasaporte sobre un mapa con unos lentes de sol",
            "ejemplo": [
              "Don't forget your passport!",
              "¡No olvides tu pasaporte!"
            ]
          },
          {
            "en": "a map",
            "es": "un mapa",
            "imagen": "Pareja mirando un mapa en la calle de un pueblo",
            "ejemplo": [
              "We used a map to find the museum.",
              "Usamos un mapa para encontrar el museo."
            ]
          },
          {
            "en": "the airport",
            "es": "el aeropuerto",
            "imagen": "Pasajeros caminando con maletas en un aeropuerto",
            "ejemplo": [
              "We arrived at the airport at six.",
              "Llegamos al aeropuerto a las seis."
            ]
          },
          {
            "en": "a guide",
            "es": "un guía",
            "imagen": "Guía de turistas explicando algo a un grupo en unas ruinas",
            "ejemplo": [
              "The guide told us the history.",
              "El guía nos contó la historia."
            ]
          },
          {
            "en": "sunscreen",
            "es": "bloqueador",
            "imagen": "Persona poniéndose bloqueador en la playa",
            "ejemplo": [
              "I forgot my sunscreen and got burned.",
              "Olvidé mi bloqueador y me quemé."
            ]
          },
          {
            "en": "a postcard",
            "es": "una postal",
            "imagen": "Postales de paisajes en un exhibidor",
            "ejemplo": [
              "She sent me a postcard.",
              "Ella me mandó una postal."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "We went to the beach in July.",
        "es": "En julio fuimos a la playa."
      },
      {
        "en": "I took a lot of photos of the city.",
        "es": "Tomé muchas fotos de la ciudad."
      },
      {
        "en": "We saw the pyramids of Teotihuacan.",
        "es": "Vimos las pirámides de Teotihuacan."
      },
      {
        "en": "She bought souvenirs for her family.",
        "es": "Ella compró recuerdos para su familia."
      },
      {
        "en": "We had a great time in Oaxaca.",
        "es": "La pasamos muy bien en Oaxaca."
      },
      {
        "en": "They flew to Madrid and then took a train to Barcelona.",
        "es": "Volaron a Madrid y luego tomaron un tren a Barcelona.",
        "imagen": "Pasajeros subiendo a un tren moderno en una estación"
      },
      {
        "en": "I got lost, but a woman helped me.",
        "es": "Me perdí, pero una señora me ayudó.",
        "imagen": "Señora amable dando direcciones a un turista"
      },
      {
        "en": "We ate fresh seafood by the sea.",
        "es": "Comimos mariscos frescos junto al mar."
      },
      {
        "en": "My cousin brought me a T-shirt from New York.",
        "es": "Mi primo me trajo una playera de Nueva York.",
        "imagen": "Primo dándole una playera de regalo a su prima"
      },
      {
        "en": "We came back home on Sunday night.",
        "es": "Regresamos a casa el domingo en la noche."
      }
    ],
    "frases": [
      {
        "en": "Last summer we went to Puerto Vallarta and stayed there for a week.",
        "es": "El verano pasado fuimos a Puerto Vallarta y nos quedamos una semana.",
        "imagen": "Familia caminando por el malecón de una playa al atardecer"
      },
      {
        "en": "We swam in the sea every morning and ate fish tacos for lunch.",
        "es": "Nadábamos en el mar cada mañana y comíamos tacos de pescado.",
        "imagen": "Amigos comiendo tacos de pescado en una mesa en la playa"
      },
      {
        "en": "I flew to Mexico City, took a bus to Puebla, and visited my aunt.",
        "es": "Volé a la Ciudad de México, tomé un autobús a Puebla y visité a mi tía.",
        "imagen": "Persona bajando de un autobús con su maleta y su tía esperándola"
      },
      {
        "en": "We got lost in the old town, but we found a beautiful little café.",
        "es": "Nos perdimos en el centro histórico, pero encontramos un cafecito precioso.",
        "imagen": "Pareja entrando a un café pequeño en una calle colonial"
      },
      {
        "en": "My parents drove to the mountains and slept in a small cabin.",
        "es": "Mis papás manejaron a las montañas y durmieron en una cabaña pequeña.",
        "imagen": "Cabaña de madera en el bosque con humo en la chimenea"
      },
      {
        "en": "The guide told us the history of the city, and we took hundreds of photos.",
        "es": "El guía nos contó la historia de la ciudad y tomamos cientos de fotos.",
        "imagen": "Grupo de turistas escuchando a un guía en una plaza"
      },
      {
        "en": "I left my sunglasses in the taxi, so I bought new ones at the airport.",
        "es": "Dejé mis lentes de sol en el taxi, así que compré otros en el aeropuerto.",
        "imagen": "Persona probándose lentes de sol en una tienda del aeropuerto"
      },
      {
        "en": "We had a great time, but we spent too much money.",
        "es": "La pasamos muy bien, pero gastamos demasiado dinero.",
        "imagen": "Pareja mirando su cartera vacía y riéndose"
      },
      {
        "en": "She wrote a postcard to her grandma and sent it from Paris.",
        "es": "Ella le escribió una postal a su abuela y la mandó desde París.",
        "imagen": "Mujer escribiendo una postal en un café con la Torre Eiffel al fondo"
      },
      {
        "en": "We came back tired, but very happy.",
        "es": "Regresamos cansados, pero muy felices.",
        "imagen": "Familia cansada y sonriente llegando a casa con maletas"
      }
    ],
    "listening": [
      {
        "audio": "We went to Cancun last December and swam with dolphins.",
        "pregunta": "¿Con qué nadaron?",
        "opciones": [
          "Con delfines",
          "Con tortugas",
          "Con tiburones",
          "Con peces"
        ]
      },
      {
        "audio": "I bought a beautiful hat at the market, but I lost it on the bus.",
        "pregunta": "¿Dónde perdió el sombrero?",
        "opciones": [
          "En el autobús",
          "En el mercado",
          "En la playa",
          "En el avión"
        ]
      },
      {
        "audio": "We flew to Madrid on Monday and came back on Friday.",
        "pregunta": "¿Cuándo regresaron?",
        "opciones": [
          "El viernes",
          "El lunes",
          "El miércoles",
          "El domingo"
        ]
      },
      {
        "audio": "My brother ate too much and felt sick all night.",
        "pregunta": "¿Qué le pasó al hermano?",
        "opciones": [
          "Se sintió mal toda la noche",
          "Se perdió",
          "Perdió su maleta",
          "Se quemó con el sol"
        ]
      },
      {
        "audio": "We had a great time, but our apartment was far from the beach.",
        "pregunta": "¿Cuál fue el problema?",
        "opciones": [
          "Estaba lejos de la playa",
          "Hacía frío",
          "Llovió mucho",
          "La comida era mala"
        ]
      }
    ],
    "lectura": {
      "titulo": "A trip to Oaxaca",
      "texto": "Last year Lucía and her husband Andrés went to Oaxaca for their anniversary. They took a night bus from Mexico City and arrived early in the morning. On the first day they walked around the city center and saw the beautiful church of Santo Domingo. For lunch they ate mole at a small market, and Lucía said it was the best food of her life. On the second day they took a tour to Hierve el Agua, where they swam in natural pools on top of a mountain. Andrés took more than two hundred photos! On the last day they bought black pottery and chocolate for their family. They came back home tired but very happy, and they promised to go back soon.",
      "preguntas": [
        {
          "pregunta": "¿Por qué fueron a Oaxaca?",
          "opciones": [
            "Por su aniversario",
            "Por trabajo",
            "Para visitar a la familia",
            "Por una boda"
          ]
        },
        {
          "pregunta": "¿Cómo viajaron?",
          "opciones": [
            "En autobús de noche",
            "En avión",
            "En carro",
            "En tren"
          ]
        },
        {
          "pregunta": "¿Qué comieron en el mercado?",
          "opciones": [
            "Mole",
            "Tacos",
            "Mariscos",
            "Tamales"
          ]
        },
        {
          "pregunta": "¿Qué compraron para su familia?",
          "opciones": [
            "Barro negro y chocolate",
            "Sombreros y ropa",
            "Mezcal y café",
            "Postales"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Escribe el pasado.",
        "pregunta": "go → ___",
        "respuestas": [
          "went"
        ]
      },
      {
        "instruccion": "Escribe el pasado.",
        "pregunta": "see → ___",
        "respuestas": [
          "saw"
        ]
      },
      {
        "instruccion": "Escribe el pasado.",
        "pregunta": "buy → ___",
        "respuestas": [
          "bought"
        ]
      },
      {
        "instruccion": "Escribe el pasado.",
        "pregunta": "eat → ___",
        "respuestas": [
          "ate"
        ]
      },
      {
        "instruccion": "Escribe el pasado.",
        "pregunta": "take → ___",
        "respuestas": [
          "took"
        ]
      },
      {
        "instruccion": "Completa con el verbo en pasado.",
        "pregunta": "We ___ (have) a great time.",
        "respuestas": [
          "had"
        ]
      },
      {
        "instruccion": "Completa con el verbo en pasado.",
        "pregunta": "I ___ (fly) to Tijuana last week.",
        "respuestas": [
          "flew"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Fuimos a la playa.",
        "respuestas": [
          "We went to the beach"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Me perdí.",
        "respuestas": [
          "I got lost"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "She goed to Paris.",
        "respuestas": [
          "She went to Paris"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "Last year we ___ to Spain.",
        "opciones": [
          "went",
          "goed",
          "go",
          "gone"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I ___ a lot of photos.",
        "opciones": [
          "took",
          "taked",
          "take",
          "tooked"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "El pasado de «bring» es:",
        "opciones": [
          "brought",
          "bringed",
          "brang",
          "brung"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We ___ a great time.",
        "opciones": [
          "had",
          "haved",
          "has",
          "did"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She ___ fish tacos for lunch.",
        "opciones": [
          "ate",
          "eated",
          "eat",
          "eaten"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Qué significa «came back»?",
        "opciones": [
          "Regresó",
          "Salió",
          "Se perdió",
          "Llegó tarde"
        ]
      },
      {
        "tipo": "listening",
        "audio": "We drove to the mountains and slept in a tent for three nights.",
        "pregunta": "¿Cuántas noches durmieron en la tienda?",
        "opciones": [
          "Tres",
          "Dos",
          "Cuatro",
          "Una"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I met a nice couple from Canada on the boat.",
        "pregunta": "¿De dónde era la pareja?",
        "opciones": [
          "De Canadá",
          "De Colombia",
          "De España",
          "De Estados Unidos"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: La pasamos muy bien.",
        "respuestas": [
          "We had a great time",
          "We had a good time"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Ella compró recuerdos.",
        "respuestas": [
          "She bought souvenirs"
        ]
      }
    ]
  },
  {
    "id": "a2-03",
    "num": 3,
    "titulo": "Pasado simple: negativo y preguntas",
    "contexto": "Biografías y personajes famosos",
    "explicacion": {
      "es": [
        "Para el **negativo** del pasado se usa ***didn't*** (*did not*) + **verbo en forma base** (sin *-ed* y sin pasado irregular): *I **didn't** go. She **didn't** like it. They **didn't** win.*",
        "Para las **preguntas** se pone ***Did*** al principio y el verbo también va en forma base: ***Did** you **see** the game? **Did** she **call** you?* Respuestas cortas: *Yes, I did. / No, I didn't.*",
        "Con palabras de pregunta: ***Where did** you go? **When did** he die? **What did** she study? **Why did** they leave?*",
        "Esto sirve para hablar de **biografías**: *Frida Kahlo **was born** in 1907. She **didn't have** an easy life. **When did** she **paint** her first picture?*"
      ],
      "tabla": {
        "columnas": [
          "",
          "Forma",
          "Ejemplo"
        ],
        "filas": [
          [
            "Afirmativo",
            "verbo en pasado",
            "She painted a lot."
          ],
          [
            "Negativo",
            "didn't + verbo base",
            "She didn't paint every day."
          ],
          [
            "Pregunta",
            "Did + sujeto + verbo base",
            "Did she paint every day?"
          ],
          [
            "Con Wh-",
            "Wh- + did + sujeto + verbo base",
            "When did she paint it?"
          ],
          [
            "Respuesta corta",
            "Yes, … did. / No, … didn't.",
            "Yes, she did. / No, she didn't."
          ]
        ]
      },
      "ojo": [
        "Después de *did / didn't* el verbo **no** va en pasado: *I didn't **go*** ✅, no *I didn't went* ❌. *Did you **see**?* ✅, no *Did you saw?* ❌.",
        "El verbo *to be* **no usa did**: *I **wasn't** there. **Were** you happy?* (no *Did you were…* ❌).",
        "***Was born*** = nació: *Pelé **was born** in 1940.* ¡No *borned*!",
        "***Who*** como sujeto no lleva *did*: ***Who painted** this?* (¿Quién pintó esto?) — pero ***Who did** you call?* (¿A quién llamaste?).",
        "*Die, **died*** (murió). *When did he die? He died in 2016.*"
      ],
      "en": [
        "Negative: didn't plus the base verb. I didn't go. She didn't like it.",
        "Questions: Did you see the game? Yes, I did. No, I didn't.",
        "With question words: Where did you go? When did he die?",
        "Biographies: She was born in 1907. She didn't have an easy life."
      ]
    },
    "vocabulario": [
      {
        "en": "was born",
        "es": "nació",
        "imagen": "Bebé recién nacido envuelto en una cobija en el hospital",
        "ejemplo": [
          "Frida Kahlo was born in Coyoacan.",
          "Frida Kahlo nació en Coyoacán."
        ]
      },
      {
        "en": "grew up",
        "es": "creció",
        "imagen": "Niño jugando en las calles de un pueblo",
        "ejemplo": [
          "He grew up in a small town.",
          "Él creció en un pueblo pequeño."
        ]
      },
      {
        "en": "went to school",
        "es": "fue a la escuela",
        "imagen": "Niños con uniforme entrando a una escuela antigua",
        "ejemplo": [
          "She went to school in Mexico City.",
          "Ella fue a la escuela en la Ciudad de México."
        ]
      },
      {
        "en": "studied medicine",
        "es": "estudió medicina",
        "imagen": "Estudiante con bata blanca en un laboratorio de la universidad",
        "ejemplo": [
          "He studied medicine at university.",
          "Él estudió medicina en la universidad."
        ]
      },
      {
        "en": "became famous",
        "es": "se hizo famoso",
        "imagen": "Cantante en un escenario frente a un público enorme",
        "ejemplo": [
          "She became famous at twenty.",
          "Ella se hizo famosa a los veinte."
        ]
      },
      {
        "en": "won a prize",
        "es": "ganó un premio",
        "imagen": "Científica recibiendo una medalla en una ceremonia",
        "ejemplo": [
          "He won an important prize.",
          "Él ganó un premio importante."
        ]
      },
      {
        "en": "wrote a book",
        "es": "escribió un libro",
        "imagen": "Escritor escribiendo en una máquina de escribir antigua",
        "ejemplo": [
          "Gabriel García Márquez wrote many books.",
          "Gabriel García Márquez escribió muchos libros."
        ]
      },
      {
        "en": "painted a picture",
        "es": "pintó un cuadro",
        "imagen": "Pintora pintando un cuadro en su taller",
        "ejemplo": [
          "Frida painted many self-portraits.",
          "Frida pintó muchos autorretratos."
        ]
      },
      {
        "en": "got married",
        "es": "se casó",
        "imagen": "Pareja de novios saliendo de una iglesia",
        "ejemplo": [
          "They got married in 1929.",
          "Se casaron en 1929."
        ]
      },
      {
        "en": "had children",
        "es": "tuvo hijos",
        "imagen": "Familia con tres hijos pequeños en una foto antigua",
        "ejemplo": [
          "They had three children.",
          "Tuvieron tres hijos."
        ]
      },
      {
        "en": "moved to another country",
        "es": "se mudó a otro país",
        "imagen": "Persona con maletas mirando por la ventana de un avión",
        "ejemplo": [
          "She moved to the United States in 1990.",
          "Ella se mudó a Estados Unidos en 1990."
        ]
      },
      {
        "en": "started a company",
        "es": "fundó una empresa",
        "imagen": "Jóvenes trabajando en un garaje con computadoras viejas",
        "ejemplo": [
          "He started a company in his garage.",
          "Él fundó una empresa en su garaje."
        ]
      },
      {
        "en": "invented something",
        "es": "inventó algo",
        "imagen": "Inventor trabajando en su taller con herramientas",
        "ejemplo": [
          "Guillermo González Camarena invented a color TV system.",
          "Guillermo González Camarena inventó un sistema de televisión a color."
        ]
      },
      {
        "en": "traveled the world",
        "es": "viajó por el mundo",
        "imagen": "Mochilero frente a un mapa del mundo con muchos pines",
        "ejemplo": [
          "She traveled the world with her camera.",
          "Ella viajó por el mundo con su cámara."
        ]
      },
      {
        "en": "retired",
        "es": "se jubiló",
        "imagen": "Señor mayor jugando ajedrez en el parque",
        "ejemplo": [
          "He retired at sixty-five.",
          "Él se jubiló a los sesenta y cinco."
        ]
      },
      {
        "en": "died",
        "es": "murió",
        "imagen": "Ramo de flores blancas junto a una vela encendida",
        "ejemplo": [
          "She died in 1954.",
          "Ella murió en 1954."
        ]
      }
    ],
    "grupos": [
      {
        "id": "preguntas",
        "titulo": "Preguntas en pasado",
        "icono": "❓",
        "patron": [
          "Did you…?",
          "Where did you…?",
          "When did she…?"
        ],
        "palabras": [
          {
            "en": "Did you see the game?",
            "es": "¿viste el partido?",
            "imagen": "Amigos platicando emocionados en la oficina",
            "ejemplo": [
              "Did you see the game last night?",
              "¿Viste el partido anoche?"
            ]
          },
          {
            "en": "Where did you go?",
            "es": "¿a dónde fuiste?",
            "imagen": "Amiga preguntándole a otra que llega con bolsas de compras",
            "ejemplo": [
              "Where did you go on vacation?",
              "¿A dónde fuiste de vacaciones?"
            ]
          },
          {
            "en": "When did she arrive?",
            "es": "¿cuándo llegó ella?",
            "imagen": "Mujer llegando con su maleta a la casa de su familia",
            "ejemplo": [
              "When did she arrive? Yesterday.",
              "¿Cuándo llegó? Ayer."
            ]
          },
          {
            "en": "What did you eat?",
            "es": "¿qué comiste?",
            "imagen": "Mamá preguntándole a su hijo en la cocina",
            "ejemplo": [
              "What did you eat for lunch?",
              "¿Qué comiste en la comida?"
            ]
          },
          {
            "en": "Why did he leave?",
            "es": "¿por qué se fue?",
            "imagen": "Silla vacía en una oficina con una taza de café olvidada",
            "ejemplo": [
              "Why did he leave the company?",
              "¿Por qué se fue de la empresa?"
            ]
          },
          {
            "en": "Who did you call?",
            "es": "¿a quién llamaste?",
            "imagen": "Persona colgando su celular en la sala",
            "ejemplo": [
              "Who did you call last night?",
              "¿A quién llamaste anoche?"
            ]
          },
          {
            "en": "How did you meet?",
            "es": "¿cómo se conocieron?",
            "imagen": "Pareja mayor platicando y riendo en una banca",
            "ejemplo": [
              "How did you meet your wife?",
              "¿Cómo conociste a tu esposa?"
            ]
          },
          {
            "en": "Did you like it?",
            "es": "¿te gustó?",
            "imagen": "Amigos saliendo de un museo y comentando",
            "ejemplo": [
              "Did you like the movie? Yes, I did.",
              "¿Te gustó la película? Sí."
            ]
          }
        ]
      },
      {
        "id": "negativo",
        "titulo": "No lo hizo",
        "icono": "🚫",
        "patron": [
          "I didn't go.",
          "She didn't know.",
          "They didn't win."
        ],
        "palabras": [
          {
            "en": "I didn't go.",
            "es": "no fui",
            "imagen": "Persona en pijama en el sofá mientras sus amigos le mandan fotos de la fiesta",
            "ejemplo": [
              "I didn't go to the party.",
              "No fui a la fiesta."
            ]
          },
          {
            "en": "She didn't know.",
            "es": "ella no sabía",
            "imagen": "Mujer sorprendida leyendo una noticia en su celular",
            "ejemplo": [
              "She didn't know the answer.",
              "Ella no sabía la respuesta."
            ]
          },
          {
            "en": "They didn't win.",
            "es": "no ganaron",
            "imagen": "Jugadores de fútbol tristes al final del partido",
            "ejemplo": [
              "They didn't win the final.",
              "No ganaron la final."
            ]
          },
          {
            "en": "He didn't finish school.",
            "es": "no terminó la escuela",
            "imagen": "Joven trabajando en un taller mecánico",
            "ejemplo": [
              "He didn't finish school, but he became rich.",
              "No terminó la escuela, pero se hizo rico."
            ]
          },
          {
            "en": "We didn't have money.",
            "es": "no teníamos dinero",
            "imagen": "Familia sencilla contando monedas en la mesa",
            "ejemplo": [
              "We didn't have much money when I was young.",
              "No teníamos mucho dinero cuando era joven."
            ]
          },
          {
            "en": "I didn't understand.",
            "es": "no entendí",
            "imagen": "Estudiante confundido mirando el pizarrón",
            "ejemplo": [
              "I didn't understand the question.",
              "No entendí la pregunta."
            ]
          },
          {
            "en": "It didn't rain.",
            "es": "no llovió",
            "imagen": "Campo seco con el cielo despejado y soleado",
            "ejemplo": [
              "It didn't rain all summer.",
              "No llovió en todo el verano."
            ]
          },
          {
            "en": "You didn't call me!",
            "es": "¡no me llamaste!",
            "imagen": "Persona mostrando su celular sin llamadas, molesta",
            "ejemplo": [
              "You didn't call me yesterday!",
              "¡Ayer no me llamaste!"
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Frida Kahlo was born in Coyoacan.",
        "es": "Frida Kahlo nació en Coyoacán."
      },
      {
        "en": "Did you see the game last night?",
        "es": "¿Viste el partido anoche?"
      },
      {
        "en": "I didn't go to the party.",
        "es": "No fui a la fiesta."
      },
      {
        "en": "Where did you go on vacation?",
        "es": "¿A dónde fuiste de vacaciones?"
      },
      {
        "en": "He didn't finish school, but he became rich.",
        "es": "No terminó la escuela, pero se hizo rico."
      },
      {
        "en": "When did they get married? In 1990.",
        "es": "¿Cuándo se casaron? En 1990.",
        "imagen": "Foto antigua de una boda en blanco y negro sobre una mesa"
      },
      {
        "en": "Who wrote this song?",
        "es": "¿Quién escribió esta canción?",
        "imagen": "Persona escuchando una canción en la radio con curiosidad"
      },
      {
        "en": "She didn't know the answer.",
        "es": "Ella no sabía la respuesta."
      },
      {
        "en": "Did you like the movie? Yes, I did.",
        "es": "¿Te gustó la película? Sí."
      },
      {
        "en": "How did you meet your wife?",
        "es": "¿Cómo conociste a tu esposa?"
      }
    ],
    "frases": [
      {
        "en": "Frida Kahlo was born in 1907 and she painted many pictures of herself.",
        "es": "Frida Kahlo nació en 1907 y pintó muchos cuadros de sí misma.",
        "imagen": "Caballete con un autorretrato de una mujer con flores en el cabello, en un taller colorido"
      },
      {
        "en": "He didn't go to university, but he started a very successful company.",
        "es": "No fue a la universidad, pero fundó una empresa muy exitosa.",
        "imagen": "Joven emprendedor en una oficina moderna con su equipo"
      },
      {
        "en": "When did you move to this city, and why did you come here?",
        "es": "¿Cuándo te mudaste a esta ciudad y por qué viniste?",
        "imagen": "Persona descargando cajas de mudanza frente a un edificio"
      },
      {
        "en": "Did your grandparents grow up in the city or in the country?",
        "es": "¿Tus abuelos crecieron en la ciudad o en el campo?",
        "imagen": "Abuelos frente a una casita de campo con animales"
      },
      {
        "en": "She didn't speak English when she arrived, but she learned very fast.",
        "es": "No hablaba inglés cuando llegó, pero aprendió muy rápido.",
        "imagen": "Mujer estudiando inglés con libros y audífonos en su cocina"
      },
      {
        "en": "The team didn't win the cup, but the fans were proud of them.",
        "es": "El equipo no ganó la copa, pero los aficionados estaban orgullosos.",
        "imagen": "Aficionados aplaudiendo a su equipo en un estadio"
      },
      {
        "en": "What did Einstein study, and where did he work?",
        "es": "¿Qué estudió Einstein y dónde trabajó?",
        "imagen": "Pizarrón antiguo con fórmulas de física en un salón vacío"
      },
      {
        "en": "My grandfather didn't have a car, so he rode his bike to work.",
        "es": "Mi abuelo no tenía carro, así que iba al trabajo en bicicleta.",
        "imagen": "Señor andando en bicicleta antigua por un camino de pueblo"
      },
      {
        "en": "They got married in Guadalajara and had four children.",
        "es": "Se casaron en Guadalajara y tuvieron cuatro hijos.",
        "imagen": "Familia grande posando en una foto antigua en un jardín"
      },
      {
        "en": "I didn't understand the question, so I asked the teacher again.",
        "es": "No entendí la pregunta, así que le pregunté de nuevo a la maestra.",
        "imagen": "Estudiante levantando la mano en clase con cara de duda"
      }
    ],
    "listening": [
      {
        "audio": "Did you go to the concert on Saturday? No, I didn't. I was sick.",
        "pregunta": "¿Por qué no fue al concierto?",
        "opciones": [
          "Estaba enfermo",
          "No tenía boleto",
          "Trabajó",
          "Se le olvidó"
        ]
      },
      {
        "audio": "My grandmother was born in Veracruz, but she grew up in Puebla.",
        "pregunta": "¿Dónde creció la abuela?",
        "opciones": [
          "En Puebla",
          "En Veracruz",
          "En Oaxaca",
          "En la Ciudad de México"
        ]
      },
      {
        "audio": "Where did you buy that jacket? I bought it in Madrid.",
        "pregunta": "¿Dónde compró la chamarra?",
        "opciones": [
          "En Madrid",
          "En un mercado",
          "En internet",
          "En Nueva York"
        ]
      },
      {
        "audio": "He didn't study music. He learned to play the guitar by himself.",
        "pregunta": "¿Cómo aprendió a tocar la guitarra?",
        "opciones": [
          "Solo, sin maestro",
          "En la escuela",
          "Con su papá",
          "En la universidad"
        ]
      },
      {
        "audio": "When did they start the company? In 2015, in a small office.",
        "pregunta": "¿Cuándo fundaron la empresa?",
        "opciones": [
          "En 2015",
          "En 2005",
          "En 2010",
          "En 2020"
        ]
      }
    ],
    "lectura": {
      "titulo": "The life of a great singer",
      "texto": "Rosa Martínez was born in 1952 in a small village in Michoacán. Her family didn't have much money, and she didn't finish high school because she needed to work. But Rosa loved singing. Every Sunday she sang in the church, and people came from other villages to listen to her. When she was nineteen, a man from a record company heard her and invited her to Mexico City. Her first song wasn't a big success, but her second song was number one on the radio for three months. Rosa became famous in all of Latin America. She got married in 1980 and had two daughters. She retired in 2010, and now she teaches music to children in her village.",
      "preguntas": [
        {
          "pregunta": "¿Por qué Rosa no terminó la prepa?",
          "opciones": [
            "Necesitaba trabajar",
            "No le gustaba estudiar",
            "Se casó",
            "Se fue a la ciudad"
          ]
        },
        {
          "pregunta": "¿Dónde cantaba los domingos?",
          "opciones": [
            "En la iglesia",
            "En la radio",
            "En un restaurante",
            "En la escuela"
          ]
        },
        {
          "pregunta": "¿Qué pasó con su primera canción?",
          "opciones": [
            "No tuvo mucho éxito",
            "Fue número uno",
            "Ganó un premio",
            "Nunca salió en la radio"
          ]
        },
        {
          "pregunta": "¿Qué hace Rosa ahora?",
          "opciones": [
            "Enseña música a niños",
            "Canta en conciertos",
            "Trabaja en la radio",
            "Vive en la ciudad"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Escribe en negativo.",
        "pregunta": "I went to the party. → I ___ to the party.",
        "respuestas": [
          "didn't go",
          "did not go"
        ]
      },
      {
        "instruccion": "Escribe en negativo.",
        "pregunta": "She liked the movie. → She ___ the movie.",
        "respuestas": [
          "didn't like",
          "did not like"
        ]
      },
      {
        "instruccion": "Completa la pregunta.",
        "pregunta": "___ you see the game?",
        "respuestas": [
          "Did"
        ]
      },
      {
        "instruccion": "Completa la pregunta.",
        "pregunta": "Where did you ___ (go)?",
        "respuestas": [
          "go"
        ]
      },
      {
        "instruccion": "Completa la respuesta corta.",
        "pregunta": "Did she call you? Yes, she ___.",
        "respuestas": [
          "did"
        ]
      },
      {
        "instruccion": "Completa la respuesta corta.",
        "pregunta": "Did they win? No, they ___.",
        "respuestas": [
          "didn't",
          "did not"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Dónde naciste?",
        "respuestas": [
          "Where were you born"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "No entendí.",
        "respuestas": [
          "I didn't understand",
          "I did not understand"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I didn't went to school.",
        "respuestas": [
          "I didn't go to school",
          "I did not go to school"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "Did you saw the movie?",
        "respuestas": [
          "Did you see the movie"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "I ___ to the party last night.",
        "opciones": [
          "didn't go",
          "didn't went",
          "don't went",
          "not went"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ you like the concert?",
        "opciones": [
          "Did",
          "Do",
          "Were",
          "Was"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Where did she ___?",
        "opciones": [
          "live",
          "lived",
          "lives",
          "living"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Did they call you? No, they ___.",
        "opciones": [
          "didn't",
          "don't",
          "weren't",
          "wasn't"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Picasso ___ in 1881.",
        "opciones": [
          "was born",
          "born",
          "borned",
          "did born"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál pregunta es correcta?",
        "opciones": [
          "Who painted this picture?",
          "Who did painted this picture?",
          "Who did paint this picture?",
          "Who paints this picture yesterday?"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Did you finish the report? No, I didn't have time.",
        "pregunta": "¿Terminó el reporte?",
        "opciones": [
          "No, no tuvo tiempo",
          "Sí, ayer",
          "Sí, en la mañana",
          "No, lo olvidó"
        ]
      },
      {
        "tipo": "listening",
        "audio": "My father grew up in Chihuahua and moved to Tijuana in 1985.",
        "pregunta": "¿Cuándo se mudó a Tijuana?",
        "opciones": [
          "En 1985",
          "En 1995",
          "En 1958",
          "En 1980"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¿Viste el partido?",
        "respuestas": [
          "Did you see the game",
          "Did you watch the game",
          "Did you see the match",
          "Did you watch the match"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Ella no sabía.",
        "respuestas": [
          "She didn't know",
          "She did not know"
        ]
      }
    ]
  },
  {
    "id": "a2-04",
    "num": 4,
    "titulo": "Pasado continuo",
    "contexto": "¿Qué estabas haciendo cuando…?",
    "explicacion": {
      "es": [
        "El **pasado continuo** describe una acción **en progreso** en un momento del pasado: *At 8 o'clock last night I **was having** dinner.* (A las 8 anoche estaba cenando.)",
        "Se forma con ***was / were*** + verbo con **-ing**: *I **was** read**ing**. She **was** sleep**ing**. They **were** play**ing**.* *Was* con *I, he, she, it*; *were* con *you, we, they*.",
        "**Negativo:** ***wasn't / weren't*** + *-ing*: *I **wasn't** listening.* **Preguntas:** ***Were** you working? **What were** you doing at ten?* — *Yes, I was. / No, I wasn't.*",
        "Sirve mucho para **describir la escena** de una historia: *It **was raining**. People **were walking** fast and a dog **was barking**.*"
      ],
      "tabla": {
        "columnas": [
          "Sujeto",
          "Afirmativo",
          "Negativo",
          "Pregunta"
        ],
        "filas": [
          [
            "I / he / she / it",
            "She was cooking.",
            "She wasn't cooking.",
            "Was she cooking?"
          ],
          [
            "you / we / they",
            "They were sleeping.",
            "They weren't sleeping.",
            "Were they sleeping?"
          ],
          [
            "Con Wh-",
            "",
            "",
            "What were you doing?"
          ]
        ]
      },
      "ojo": [
        "No olvides *was / were*: *I **was** watching TV* ✅, no *I watching TV* ❌.",
        "Pasado simple = acción **terminada** (*I watched a movie*). Pasado continuo = acción **en progreso** en ese momento (*I was watching a movie at 9*).",
        "***What were you doing?*** es la pregunta clásica: ¿Qué estabas haciendo?",
        "Verbos como *know, like, want, need* casi no van en *-ing*: *I **knew** him* ✅, no *I was knowing him* ❌.",
        "Recuerda las reglas del *-ing*: *make, making, run, running, sit, sitting*."
      ],
      "en": [
        "The past continuous is for actions in progress in the past: At eight o'clock I was having dinner.",
        "Form: was or were plus a verb like reading or sleeping. She was cooking. They were playing.",
        "Questions: What were you doing at ten? Were you working? Yes, I was.",
        "It describes the scene of a story: It was raining and people were walking fast."
      ]
    },
    "vocabulario": [
      {
        "en": "I was sleeping.",
        "es": "estaba durmiendo",
        "imagen": "Persona durmiendo en su cama con el despertador marcando las seis",
        "ejemplo": [
          "I was sleeping when you called.",
          "Estaba durmiendo cuando llamaste."
        ]
      },
      {
        "en": "She was cooking dinner.",
        "es": "ella estaba haciendo la cena",
        "imagen": "Mujer revolviendo una olla en la estufa",
        "ejemplo": [
          "She was cooking dinner at seven.",
          "A las siete ella estaba haciendo la cena."
        ]
      },
      {
        "en": "They were watching TV.",
        "es": "estaban viendo la tele",
        "imagen": "Familia viendo la tele en el sofá de noche",
        "ejemplo": [
          "They were watching TV in the living room.",
          "Estaban viendo la tele en la sala."
        ]
      },
      {
        "en": "He was driving to work.",
        "es": "él iba manejando al trabajo",
        "imagen": "Hombre manejando en el tráfico de la mañana",
        "ejemplo": [
          "He was driving to work at eight.",
          "A las ocho iba manejando al trabajo."
        ]
      },
      {
        "en": "We were having lunch.",
        "es": "estábamos comiendo",
        "imagen": "Compañeros comiendo juntos en una mesa",
        "ejemplo": [
          "We were having lunch in the garden.",
          "Estábamos comiendo en el jardín."
        ]
      },
      {
        "en": "I was taking a shower.",
        "es": "me estaba bañando",
        "imagen": "Regadera con agua cayendo y vapor en el baño",
        "ejemplo": [
          "I was taking a shower when the phone rang.",
          "Me estaba bañando cuando sonó el teléfono."
        ]
      },
      {
        "en": "It was raining.",
        "es": "estaba lloviendo",
        "imagen": "Calle mojada con gente con paraguas",
        "ejemplo": [
          "It was raining all morning.",
          "Estuvo lloviendo toda la mañana."
        ]
      },
      {
        "en": "The kids were playing outside.",
        "es": "los niños estaban jugando afuera",
        "imagen": "Niños jugando a la pelota en la calle",
        "ejemplo": [
          "The kids were playing outside after school.",
          "Los niños estaban jugando afuera después de la escuela."
        ]
      },
      {
        "en": "She was reading a book.",
        "es": "ella estaba leyendo un libro",
        "imagen": "Mujer leyendo en un sillón junto a una lámpara",
        "ejemplo": [
          "She was reading a book on the train.",
          "Ella estaba leyendo un libro en el tren."
        ]
      },
      {
        "en": "He was talking on the phone.",
        "es": "él estaba hablando por teléfono",
        "imagen": "Hombre hablando por teléfono mientras camina por la oficina",
        "ejemplo": [
          "He was talking on the phone with a client.",
          "Él estaba hablando por teléfono con un cliente."
        ]
      },
      {
        "en": "I was waiting for the bus.",
        "es": "estaba esperando el camión",
        "imagen": "Persona esperando en una parada de autobús de noche",
        "ejemplo": [
          "I was waiting for the bus in the rain.",
          "Estaba esperando el camión bajo la lluvia."
        ]
      },
      {
        "en": "We were walking home.",
        "es": "íbamos caminando a casa",
        "imagen": "Dos amigos caminando por una calle iluminada de noche",
        "ejemplo": [
          "We were walking home after the movie.",
          "Íbamos caminando a casa después de la película."
        ]
      },
      {
        "en": "The baby was crying.",
        "es": "el bebé estaba llorando",
        "imagen": "Bebé llorando en su cuna",
        "ejemplo": [
          "The baby was crying all night.",
          "El bebé estuvo llorando toda la noche."
        ]
      },
      {
        "en": "My dad was fixing the car.",
        "es": "mi papá estaba arreglando el carro",
        "imagen": "Hombre arreglando el motor de un carro en el garaje",
        "ejemplo": [
          "My dad was fixing the car in the garage.",
          "Mi papá estaba arreglando el carro en el garaje."
        ]
      },
      {
        "en": "I wasn't listening.",
        "es": "no estaba escuchando",
        "imagen": "Estudiante distraído mirando por la ventana en clase",
        "ejemplo": [
          "Sorry, I wasn't listening.",
          "Perdón, no estaba escuchando."
        ]
      },
      {
        "en": "The sun was shining.",
        "es": "el sol estaba brillando",
        "imagen": "Playa con el sol brillando en el cielo azul",
        "ejemplo": [
          "The sun was shining and the birds were singing.",
          "El sol brillaba y los pájaros cantaban."
        ]
      }
    ],
    "grupos": [
      {
        "id": "preguntas",
        "titulo": "¿Qué estabas haciendo?",
        "icono": "❓",
        "patron": [
          "What were you doing?",
          "Were you sleeping?",
          "Was it raining?"
        ],
        "palabras": [
          {
            "en": "What were you doing?",
            "es": "¿qué estabas haciendo?",
            "imagen": "Amiga preguntando a otra mientras toman café",
            "ejemplo": [
              "What were you doing at ten last night?",
              "¿Qué estabas haciendo anoche a las diez?"
            ]
          },
          {
            "en": "Were you sleeping?",
            "es": "¿estabas dormido?",
            "imagen": "Persona contestando el teléfono medio dormida",
            "ejemplo": [
              "Were you sleeping when I called?",
              "¿Estabas dormido cuando te llamé?"
            ]
          },
          {
            "en": "Was it raining?",
            "es": "¿estaba lloviendo?",
            "imagen": "Persona mirando por la ventana con gotas de lluvia",
            "ejemplo": [
              "Was it raining in the morning?",
              "¿Estaba lloviendo en la mañana?"
            ]
          },
          {
            "en": "Where were you going?",
            "es": "¿a dónde ibas?",
            "imagen": "Persona caminando rápido con una mochila en la calle",
            "ejemplo": [
              "Where were you going in such a hurry?",
              "¿A dónde ibas con tanta prisa?"
            ]
          },
          {
            "en": "Who were you talking to?",
            "es": "¿con quién estabas hablando?",
            "imagen": "Joven colgando el teléfono mientras su mamá lo mira con curiosidad",
            "ejemplo": [
              "Who were you talking to on the phone?",
              "¿Con quién estabas hablando por teléfono?"
            ]
          },
          {
            "en": "Were they working?",
            "es": "¿estaban trabajando?",
            "imagen": "Compañeros trabajando concentrados en sus computadoras",
            "ejemplo": [
              "Were they working on Saturday?",
              "¿Estaban trabajando el sábado?"
            ]
          },
          {
            "en": "What was she wearing?",
            "es": "¿qué llevaba puesto ella?",
            "imagen": "Mujer con un vestido elegante en una fiesta",
            "ejemplo": [
              "What was she wearing at the party?",
              "¿Qué llevaba puesto en la fiesta?"
            ]
          },
          {
            "en": "Why were you laughing?",
            "es": "¿por qué te estabas riendo?",
            "imagen": "Amigos riéndose fuerte en una mesa",
            "ejemplo": [
              "Why were you laughing in class?",
              "¿Por qué te estabas riendo en clase?"
            ]
          }
        ]
      },
      {
        "id": "escena",
        "titulo": "Describir la escena",
        "icono": "🎬",
        "patron": [
          "It was raining…",
          "People were…",
          "A dog was…"
        ],
        "palabras": [
          {
            "en": "People were dancing.",
            "es": "la gente estaba bailando",
            "imagen": "Pista de baile llena de gente en una boda",
            "ejemplo": [
              "People were dancing and singing.",
              "La gente estaba bailando y cantando."
            ]
          },
          {
            "en": "A dog was barking.",
            "es": "un perro estaba ladrando",
            "imagen": "Perro ladrando detrás de una reja",
            "ejemplo": [
              "A dog was barking outside.",
              "Afuera un perro estaba ladrando."
            ]
          },
          {
            "en": "The wind was blowing.",
            "es": "el viento estaba soplando",
            "imagen": "Árboles moviéndose con el viento en un parque",
            "ejemplo": [
              "The wind was blowing very hard.",
              "El viento soplaba muy fuerte."
            ]
          },
          {
            "en": "Everybody was talking.",
            "es": "todos estaban hablando",
            "imagen": "Fiesta con grupos de personas platicando",
            "ejemplo": [
              "Everybody was talking at the same time.",
              "Todos estaban hablando al mismo tiempo."
            ]
          },
          {
            "en": "The music was playing.",
            "es": "la música estaba sonando",
            "imagen": "Bocina con luces en una fiesta",
            "ejemplo": [
              "The music was playing very loud.",
              "La música estaba sonando muy fuerte."
            ]
          },
          {
            "en": "Cars were honking.",
            "es": "los carros estaban pitando",
            "imagen": "Embotellamiento en una avenida con carros pitando",
            "ejemplo": [
              "Cars were honking in the traffic.",
              "Los carros pitaban en el tráfico."
            ]
          },
          {
            "en": "The birds were singing.",
            "es": "los pájaros estaban cantando",
            "imagen": "Pájaros en una rama al amanecer",
            "ejemplo": [
              "The birds were singing in the trees.",
              "Los pájaros cantaban en los árboles."
            ]
          },
          {
            "en": "It was getting dark.",
            "es": "estaba oscureciendo",
            "imagen": "Atardecer sobre la ciudad con las luces encendiéndose",
            "ejemplo": [
              "It was getting dark when we arrived.",
              "Estaba oscureciendo cuando llegamos."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I was sleeping when you called.",
        "es": "Estaba durmiendo cuando llamaste."
      },
      {
        "en": "What were you doing at ten last night?",
        "es": "¿Qué estabas haciendo anoche a las diez?"
      },
      {
        "en": "It was raining all morning.",
        "es": "Estuvo lloviendo toda la mañana."
      },
      {
        "en": "They were watching TV in the living room.",
        "es": "Estaban viendo la tele en la sala."
      },
      {
        "en": "At six o'clock I was driving home.",
        "es": "A las seis iba manejando a casa.",
        "imagen": "Persona manejando de regreso a casa al atardecer"
      },
      {
        "en": "Sorry, I wasn't listening.",
        "es": "Perdón, no estaba escuchando."
      },
      {
        "en": "Were you working on Saturday? No, I wasn't.",
        "es": "¿Estabas trabajando el sábado? No.",
        "imagen": "Persona descansando en una hamaca un sábado"
      },
      {
        "en": "My mom was making tamales for Christmas.",
        "es": "Mi mamá estaba haciendo tamales para Navidad.",
        "imagen": "Mamá preparando tamales en la cocina con hojas de maíz"
      },
      {
        "en": "People were dancing and singing.",
        "es": "La gente estaba bailando y cantando."
      },
      {
        "en": "Who were you talking to on the phone?",
        "es": "¿Con quién estabas hablando por teléfono?"
      }
    ],
    "frases": [
      {
        "en": "At nine o'clock last night I was studying and my brother was playing video games.",
        "es": "Anoche a las nueve yo estaba estudiando y mi hermano jugaba videojuegos.",
        "imagen": "Hermanos en un cuarto: uno estudia y otro juega videojuegos"
      },
      {
        "en": "It was a beautiful morning: the sun was shining and the birds were singing.",
        "es": "Era una mañana hermosa: el sol brillaba y los pájaros cantaban.",
        "imagen": "Jardín al amanecer con sol y pájaros en los árboles"
      },
      {
        "en": "We were having dinner in the garden when it started to rain.",
        "es": "Estábamos cenando en el jardín cuando empezó a llover.",
        "imagen": "Familia corriendo a meter los platos de la mesa del jardín bajo la lluvia"
      },
      {
        "en": "What were you doing at the mall? I was looking for a present for my mom.",
        "es": "¿Qué hacías en el centro comercial? Estaba buscando un regalo para mi mamá.",
        "imagen": "Persona mirando bolsas y pañuelos en una tienda de regalos"
      },
      {
        "en": "At the party everybody was talking and the music was playing very loud.",
        "es": "En la fiesta todos estaban hablando y la música sonaba muy fuerte."
      },
      {
        "en": "My grandpa was sitting in the garden and reading the newspaper.",
        "es": "Mi abuelo estaba sentado en el jardín leyendo el periódico.",
        "imagen": "Abuelo leyendo el periódico en una silla del jardín"
      },
      {
        "en": "I wasn't paying attention, so I missed my bus stop.",
        "es": "No estaba poniendo atención, así que me pasé de mi parada.",
        "imagen": "Pasajero mirando por la ventana del camión, distraído con su celular"
      },
      {
        "en": "They weren't sleeping. They were watching a horror movie!",
        "es": "No estaban dormidos. ¡Estaban viendo una película de terror!",
        "imagen": "Niños bajo una cobija viendo una película de miedo de noche"
      },
      {
        "en": "It was getting dark and a cold wind was blowing.",
        "es": "Estaba oscureciendo y soplaba un viento frío.",
        "imagen": "Persona caminando con la chamarra cerrada al anochecer con viento"
      },
      {
        "en": "When I looked out the window, a man was running after the bus.",
        "es": "Cuando miré por la ventana, un hombre corría detrás del camión.",
        "imagen": "Hombre corriendo detrás de un autobús en la calle"
      }
    ],
    "listening": [
      {
        "audio": "At eight o'clock I was having breakfast with my kids.",
        "pregunta": "¿Qué estaba haciendo a las ocho?",
        "opciones": [
          "Desayunando con sus hijos",
          "Manejando",
          "Durmiendo",
          "Bañándose"
        ]
      },
      {
        "audio": "I'm sorry I didn't answer. I was taking a shower.",
        "pregunta": "¿Por qué no contestó?",
        "opciones": [
          "Se estaba bañando",
          "Estaba dormido",
          "Estaba manejando",
          "Estaba en una junta"
        ]
      },
      {
        "audio": "It was raining and the streets were full of water.",
        "pregunta": "¿Cómo estaban las calles?",
        "opciones": [
          "Llenas de agua",
          "Vacías",
          "Llenas de gente",
          "Muy secas"
        ]
      },
      {
        "audio": "Were you working yesterday afternoon? No, I was at the dentist.",
        "pregunta": "¿Dónde estaba en la tarde?",
        "opciones": [
          "En el dentista",
          "En el trabajo",
          "En casa",
          "En el gimnasio"
        ]
      },
      {
        "audio": "The kids were playing in the garden and my wife was reading.",
        "pregunta": "¿Qué hacía la esposa?",
        "opciones": [
          "Leía",
          "Jugaba",
          "Cocinaba",
          "Dormía"
        ]
      }
    ],
    "lectura": {
      "titulo": "The night of the blackout",
      "texto": "Last Friday there was a blackout in our neighborhood at nine o'clock at night. Everybody was doing something different. My mother was cooking soup, so she lit some candles and finished it. My father was watching a soccer game on TV, and he was very angry because his team was winning. My little sister was taking a shower, and she started to scream because it was completely dark. I was doing my homework on the computer, and I didn't save it! Outside, people were talking in the street and some kids were playing with flashlights. The lights came back at eleven, but nobody was watching TV anymore. We were all sitting at the table, eating soup and laughing.",
      "preguntas": [
        {
          "pregunta": "¿A qué hora fue el apagón?",
          "opciones": [
            "A las nueve de la noche",
            "A las once",
            "A las siete",
            "A medianoche"
          ]
        },
        {
          "pregunta": "¿Por qué estaba enojado el papá?",
          "opciones": [
            "Su equipo iba ganando y no pudo ver el partido",
            "Se quemó la sopa",
            "Su hija gritó",
            "Perdió su tarea"
          ]
        },
        {
          "pregunta": "¿Qué le pasó al narrador?",
          "opciones": [
            "No guardó su tarea",
            "Se bañaba",
            "Se perdió en la calle",
            "Se quemó con una vela"
          ]
        },
        {
          "pregunta": "¿Qué hacía la familia cuando regresó la luz?",
          "opciones": [
            "Comía sopa y se reía en la mesa",
            "Veía la tele",
            "Dormía",
            "Jugaba en la calle"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con was o were.",
        "pregunta": "I ___ sleeping.",
        "respuestas": [
          "was"
        ]
      },
      {
        "instruccion": "Completa con was o were.",
        "pregunta": "They ___ playing outside.",
        "respuestas": [
          "were"
        ]
      },
      {
        "instruccion": "Completa con el pasado continuo.",
        "pregunta": "She ___ (cook) dinner at seven.",
        "respuestas": [
          "was cooking"
        ]
      },
      {
        "instruccion": "Completa con el pasado continuo.",
        "pregunta": "We ___ (walk) home.",
        "respuestas": [
          "were walking"
        ]
      },
      {
        "instruccion": "Completa con el pasado continuo.",
        "pregunta": "It ___ (rain) all day.",
        "respuestas": [
          "was raining"
        ]
      },
      {
        "instruccion": "Escribe en negativo.",
        "pregunta": "I was listening. → I ___ listening.",
        "respuestas": [
          "wasn't",
          "was not"
        ]
      },
      {
        "instruccion": "Completa la pregunta.",
        "pregunta": "What ___ you doing?",
        "respuestas": [
          "were"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Estaba esperando el camión.",
        "respuestas": [
          "I was waiting for the bus"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Qué estabas haciendo?",
        "respuestas": [
          "What were you doing"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "They was watching TV.",
        "respuestas": [
          "They were watching TV",
          "They were watching tv"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "At 9 p.m. I ___ TV.",
        "opciones": [
          "was watching",
          "were watching",
          "watching",
          "am watching"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The kids ___ in the park.",
        "opciones": [
          "were playing",
          "was playing",
          "playing",
          "were play"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "What ___ you doing last night?",
        "opciones": [
          "were",
          "was",
          "did",
          "are"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Was it raining? No, it ___.",
        "opciones": [
          "wasn't",
          "weren't",
          "didn't",
          "isn't"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál describe una acción en progreso en el pasado?",
        "opciones": [
          "She was reading.",
          "She read a book.",
          "She reads.",
          "She will read."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es correcta?",
        "opciones": [
          "I knew the answer.",
          "I was knowing the answer.",
          "I were knowing the answer.",
          "I knowing the answer."
        ]
      },
      {
        "tipo": "listening",
        "audio": "What were you doing at the bank? I was waiting in line for an hour.",
        "pregunta": "¿Cuánto tiempo esperó?",
        "opciones": [
          "Una hora",
          "Diez minutos",
          "Media hora",
          "Dos horas"
        ]
      },
      {
        "tipo": "listening",
        "audio": "When I arrived, my friends were dancing and the music was very loud.",
        "pregunta": "¿Qué hacían sus amigos?",
        "opciones": [
          "Bailaban",
          "Comían",
          "Cantaban",
          "Dormían"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Estaba lloviendo.",
        "respuestas": [
          "It was raining"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Estábamos comiendo.",
        "respuestas": [
          "We were eating",
          "We were having lunch",
          "We were having dinner"
        ]
      }
    ]
  },
  {
    "id": "a2-05",
    "num": 5,
    "titulo": "Pasado simple vs. pasado continuo (when / while)",
    "contexto": "Contar una historia o un accidente",
    "explicacion": {
      "es": [
        "En una historia se usan **juntos**: el **pasado continuo** para la acción **larga** (el fondo) y el **pasado simple** para la acción **corta** que la interrumpe: *I **was cooking** when the phone **rang**.* (Estaba cocinando cuando sonó el teléfono.)",
        "***When*** (cuando) suele ir con la acción **corta** en pasado simple: *We were watching TV **when** the lights **went out**.*",
        "***While*** (mientras) suele ir con la acción **larga** en pasado continuo: ***While** I **was walking** home, I **saw** an accident.*",
        "Dos acciones largas al mismo tiempo van las dos en continuo: ***While** I was cooking, my husband **was setting** the table.* Acciones cortas una tras otra van en simple: *He **stopped**, **got** out of the car and **called** the police.*"
      ],
      "tabla": {
        "columnas": [
          "Acción larga (fondo)",
          "Conector",
          "Acción corta (interrupción)"
        ],
        "filas": [
          [
            "I was driving",
            "when",
            "a cat ran across the street."
          ],
          [
            "She was sleeping",
            "when",
            "the alarm went off."
          ],
          [
            "While we were having dinner,",
            "",
            "the doorbell rang."
          ],
          [
            "While he was running,",
            "",
            "he fell and hurt his knee."
          ]
        ]
      },
      "ojo": [
        "La acción **corta** no va en continuo: *I was cooking when the phone **rang*** ✅, no *…when the phone was ringing* ❌.",
        "Si la frase empieza con *When* o *While*, pon **coma**: ***While** I was walking, I saw…*",
        "*When I arrived, they **were having** dinner* (ya estaban cenando) ≠ *When I arrived, they **had** dinner* (cenaron después de que llegué).",
        "Para accidentes: ***fell*** (me caí), ***broke*** (rompí / me rompí), ***hit*** (choqué / golpeé), ***hurt*** (me lastimé), ***cut*** (me corté).",
        "*Suddenly* (de repente) es muy útil para contar historias: *I was reading… **Suddenly**, I heard a noise.*"
      ],
      "en": [
        "In a story, the past continuous is the long action and the past simple is the short action: I was cooking when the phone rang.",
        "When usually goes with the short action: We were watching TV when the lights went out.",
        "While usually goes with the long action: While I was walking home, I saw an accident."
      ]
    },
    "vocabulario": [
      {
        "en": "the phone rang",
        "es": "sonó el teléfono",
        "imagen": "Celular vibrando sobre la mesa de la cocina",
        "ejemplo": [
          "I was cooking when the phone rang.",
          "Estaba cocinando cuando sonó el teléfono."
        ]
      },
      {
        "en": "the lights went out",
        "es": "se fue la luz",
        "imagen": "Sala oscura con una familia usando la linterna del celular",
        "ejemplo": [
          "We were watching TV when the lights went out.",
          "Estábamos viendo la tele cuando se fue la luz."
        ]
      },
      {
        "en": "I fell",
        "es": "me caí",
        "imagen": "Persona en el suelo de un parque junto a su patineta",
        "ejemplo": [
          "I fell while I was skating.",
          "Me caí mientras patinaba."
        ]
      },
      {
        "en": "I broke my arm",
        "es": "me rompí el brazo",
        "imagen": "Niño sonriendo con el brazo enyesado",
        "ejemplo": [
          "He broke his arm while he was playing soccer.",
          "Se rompió el brazo mientras jugaba fútbol."
        ]
      },
      {
        "en": "I cut my finger",
        "es": "me corté el dedo",
        "imagen": "Mano con una curita en el dedo junto a una tabla de picar",
        "ejemplo": [
          "I cut my finger while I was chopping onions.",
          "Me corté el dedo mientras picaba cebolla."
        ]
      },
      {
        "en": "the car hit a tree",
        "es": "el carro chocó contra un árbol",
        "imagen": "Carro con el frente abollado junto a un árbol, sin heridos",
        "ejemplo": [
          "The car hit a tree because the road was wet.",
          "El carro chocó contra un árbol porque el camino estaba mojado."
        ]
      },
      {
        "en": "I burned my hand",
        "es": "me quemé la mano",
        "imagen": "Persona poniendo la mano bajo el agua fría en la cocina",
        "ejemplo": [
          "I burned my hand while I was cooking.",
          "Me quemé la mano mientras cocinaba."
        ]
      },
      {
        "en": "someone knocked on the door",
        "es": "alguien tocó la puerta",
        "imagen": "Mano tocando una puerta de madera",
        "ejemplo": [
          "Someone knocked on the door while I was sleeping.",
          "Alguien tocó la puerta mientras dormía."
        ]
      },
      {
        "en": "it started to rain",
        "es": "empezó a llover",
        "imagen": "Gente corriendo en un parque cuando empieza a llover",
        "ejemplo": [
          "We were having a picnic when it started to rain.",
          "Estábamos de día de campo cuando empezó a llover."
        ]
      },
      {
        "en": "I saw an accident",
        "es": "vi un accidente",
        "imagen": "Dos carros chocados en un cruce con una patrulla",
        "ejemplo": [
          "I saw an accident while I was walking to work.",
          "Vi un accidente mientras caminaba al trabajo."
        ]
      },
      {
        "en": "I dropped my phone",
        "es": "se me cayó el celular",
        "imagen": "Celular cayendo de la mano al suelo de la calle",
        "ejemplo": [
          "I dropped my phone while I was running for the bus.",
          "Se me cayó el celular mientras corría por el camión."
        ]
      },
      {
        "en": "I lost my keys",
        "es": "perdí mis llaves",
        "imagen": "Persona buscando sus llaves en su bolsa frente a la puerta",
        "ejemplo": [
          "I lost my keys while I was shopping.",
          "Perdí mis llaves mientras estaba de compras."
        ]
      },
      {
        "en": "the dog ran away",
        "es": "el perro se escapó",
        "imagen": "Perro corriendo por la calle con la correa suelta",
        "ejemplo": [
          "The dog ran away while we were walking in the park.",
          "El perro se escapó mientras caminábamos en el parque."
        ]
      },
      {
        "en": "I met my wife",
        "es": "conocí a mi esposa",
        "imagen": "Pareja joven conociéndose en una biblioteca",
        "ejemplo": [
          "I met my wife while I was studying in Mexico City.",
          "Conocí a mi esposa mientras estudiaba en la Ciudad de México."
        ]
      },
      {
        "en": "an ambulance arrived",
        "es": "llegó una ambulancia",
        "imagen": "Ambulancia con las luces encendidas en una calle",
        "ejemplo": [
          "An ambulance arrived ten minutes later.",
          "Diez minutos después llegó una ambulancia."
        ]
      },
      {
        "en": "nobody was hurt",
        "es": "nadie salió herido",
        "imagen": "Personas abrazándose aliviadas junto a un carro abollado",
        "ejemplo": [
          "Luckily, nobody was hurt.",
          "Por suerte, nadie salió herido."
        ]
      }
    ],
    "grupos": [
      {
        "id": "historia",
        "titulo": "Palabras para contar historias",
        "icono": "📖",
        "patron": [
          "Suddenly…",
          "Then…",
          "Luckily…"
        ],
        "palabras": [
          {
            "en": "suddenly",
            "es": "de repente",
            "imagen": "Persona sorprendida volteando hacia un ruido",
            "ejemplo": [
              "Suddenly, I heard a strange noise.",
              "De repente, oí un ruido extraño."
            ]
          },
          {
            "en": "then",
            "es": "luego",
            "imagen": "Persona saliendo de casa con su mochila",
            "ejemplo": [
              "I had breakfast and then I left.",
              "Desayuné y luego salí."
            ]
          },
          {
            "en": "luckily",
            "es": "por suerte",
            "imagen": "Persona aliviada encontrando su cartera en el piso",
            "ejemplo": [
              "Luckily, I found my wallet.",
              "Por suerte, encontré mi cartera."
            ]
          },
          {
            "en": "unfortunately",
            "es": "por desgracia",
            "imagen": "Persona mirando una llanta ponchada en la carretera",
            "ejemplo": [
              "Unfortunately, the car broke down.",
              "Por desgracia, el carro se descompuso."
            ]
          },
          {
            "en": "at first",
            "es": "al principio",
            "imagen": "Niño nervioso en su primer día de escuela",
            "ejemplo": [
              "At first, I was nervous.",
              "Al principio, estaba nervioso."
            ]
          },
          {
            "en": "in the end",
            "es": "al final",
            "imagen": "Corredores llegando a la meta con alegría",
            "ejemplo": [
              "In the end, we won the game.",
              "Al final, ganamos el partido."
            ]
          },
          {
            "en": "a few minutes later",
            "es": "unos minutos después",
            "imagen": "Reloj de pared con las manecillas avanzando",
            "ejemplo": [
              "A few minutes later, the police arrived.",
              "Unos minutos después, llegó la policía."
            ]
          },
          {
            "en": "that night",
            "es": "esa noche",
            "imagen": "Casa iluminada bajo un cielo estrellado",
            "ejemplo": [
              "That night, I couldn't sleep.",
              "Esa noche no pude dormir."
            ]
          }
        ]
      },
      {
        "id": "whenwhile",
        "titulo": "When y while",
        "icono": "⏱️",
        "patron": [
          "I was cooking when…",
          "While I was…",
          "When I arrived…"
        ],
        "palabras": [
          {
            "en": "I was sleeping when the alarm went off.",
            "es": "estaba dormido cuando sonó la alarma",
            "imagen": "Persona despertando asustada con el despertador sonando",
            "ejemplo": [
              "I was sleeping when the alarm went off.",
              "Estaba dormido cuando sonó la alarma."
            ]
          },
          {
            "en": "While I was driving, it started to snow.",
            "es": "mientras manejaba, empezó a nevar",
            "imagen": "Carro en una carretera con nieve cayendo",
            "ejemplo": [
              "While I was driving, it started to snow.",
              "Mientras manejaba, empezó a nevar."
            ]
          },
          {
            "en": "When I arrived, they were eating.",
            "es": "cuando llegué, estaban comiendo",
            "imagen": "Persona llegando a una casa donde la familia ya está comiendo",
            "ejemplo": [
              "When I arrived, they were eating.",
              "Cuando llegué, estaban comiendo."
            ]
          },
          {
            "en": "While she was running, she fell.",
            "es": "mientras corría, se cayó",
            "imagen": "Corredora tropezando en una pista",
            "ejemplo": [
              "While she was running, she fell.",
              "Mientras corría, se cayó."
            ]
          },
          {
            "en": "We were talking when the teacher came in.",
            "es": "estábamos hablando cuando entró el maestro",
            "imagen": "Estudiantes platicando y un maestro entrando al salón",
            "ejemplo": [
              "We were talking when the teacher came in.",
              "Estábamos hablando cuando entró el maestro."
            ]
          },
          {
            "en": "While I was cooking, he was setting the table.",
            "es": "mientras yo cocinaba, él ponía la mesa",
            "imagen": "Pareja: ella cocina y él pone la mesa",
            "ejemplo": [
              "While I was cooking, he was setting the table.",
              "Mientras yo cocinaba, él ponía la mesa."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I was cooking when the phone rang.",
        "es": "Estaba cocinando cuando sonó el teléfono."
      },
      {
        "en": "We were watching TV when the lights went out.",
        "es": "Estábamos viendo la tele cuando se fue la luz."
      },
      {
        "en": "He broke his arm while he was playing soccer.",
        "es": "Se rompió el brazo mientras jugaba fútbol."
      },
      {
        "en": "I saw an accident while I was walking to work.",
        "es": "Vi un accidente mientras caminaba al trabajo."
      },
      {
        "en": "While I was cooking, he was setting the table.",
        "es": "Mientras yo cocinaba, él ponía la mesa."
      },
      {
        "en": "Suddenly, I heard a strange noise.",
        "es": "De repente, oí un ruido extraño."
      },
      {
        "en": "When I arrived, they were eating.",
        "es": "Cuando llegué, estaban comiendo."
      },
      {
        "en": "I dropped my phone while I was running for the bus.",
        "es": "Se me cayó el celular mientras corría por el camión."
      },
      {
        "en": "Luckily, nobody was hurt.",
        "es": "Por suerte, nadie salió herido."
      },
      {
        "en": "I met my wife while I was studying in Mexico City.",
        "es": "Conocí a mi esposa mientras estudiaba en la Ciudad de México."
      }
    ],
    "frases": [
      {
        "en": "I was walking to the bus stop when a big dog started to run after me.",
        "es": "Iba caminando a la parada cuando un perro grande empezó a correr detrás de mí.",
        "imagen": "Persona corriendo por la banqueta con un perro grande juguetón detrás"
      },
      {
        "en": "While we were having a picnic, it started to rain, so we ran to the car.",
        "es": "Mientras estábamos de día de campo, empezó a llover, así que corrimos al carro.",
        "imagen": "Familia corriendo al carro con la canasta del picnic bajo la lluvia"
      },
      {
        "en": "My dad was fixing the roof when he fell, but luckily he didn't break anything.",
        "es": "Mi papá estaba arreglando el techo cuando se cayó, pero por suerte no se rompió nada.",
        "imagen": "Hombre sentado en el pasto junto a una escalera, sobándose la pierna y sonriendo"
      },
      {
        "en": "I was taking a shower when somebody knocked on the door.",
        "es": "Me estaba bañando cuando alguien tocó la puerta.",
        "imagen": "Persona en bata con el cabello mojado asomándose a la puerta"
      },
      {
        "en": "While the teacher was explaining the lesson, two students were sleeping.",
        "es": "Mientras el maestro explicaba la clase, dos alumnos estaban dormidos.",
        "imagen": "Salón de clases con dos estudiantes dormidos en sus bancas"
      },
      {
        "en": "It was a cold night and it was snowing when the bus broke down.",
        "es": "Era una noche fría y estaba nevando cuando se descompuso el autobús.",
        "imagen": "Autobús detenido en una carretera con nieve de noche"
      },
      {
        "en": "When I opened the door, my friends were waiting with a birthday cake.",
        "es": "Cuando abrí la puerta, mis amigos me esperaban con un pastel de cumpleaños.",
        "imagen": "Amigos sorprendiendo a alguien en la puerta con un pastel y velas"
      },
      {
        "en": "I cut my finger while I was chopping onions, and it was bleeding a lot.",
        "es": "Me corté el dedo mientras picaba cebolla y estaba sangrando mucho."
      },
      {
        "en": "A man was crossing the street when a car hit him, but he was OK.",
        "es": "Un hombre cruzaba la calle cuando un carro lo golpeó, pero estaba bien.",
        "imagen": "Paramédico revisando a un hombre sentado en la banqueta que sonríe"
      },
      {
        "en": "While I was waiting for the doctor, I read three magazines.",
        "es": "Mientras esperaba al doctor, leí tres revistas.",
        "imagen": "Persona leyendo revistas en una sala de espera de un consultorio"
      }
    ],
    "listening": [
      {
        "audio": "I was driving to work when a cat ran across the street.",
        "pregunta": "¿Qué cruzó la calle?",
        "opciones": [
          "Un gato",
          "Un perro",
          "Un niño",
          "Una bicicleta"
        ]
      },
      {
        "audio": "While I was cleaning the kitchen, I found my old watch.",
        "pregunta": "¿Qué encontró?",
        "opciones": [
          "Su reloj viejo",
          "Sus llaves",
          "Una carta",
          "Dinero"
        ]
      },
      {
        "audio": "She fell while she was riding her bike, but she didn't hurt herself.",
        "pregunta": "¿Qué estaba haciendo cuando se cayó?",
        "opciones": [
          "Andaba en bicicleta",
          "Corría",
          "Patinaba",
          "Bajaba las escaleras"
        ]
      },
      {
        "audio": "We were sleeping when the earthquake started. It was three in the morning.",
        "pregunta": "¿A qué hora fue el temblor?",
        "opciones": [
          "A las tres de la mañana",
          "A las tres de la tarde",
          "A medianoche",
          "A las seis"
        ]
      },
      {
        "audio": "When the police arrived, the thief was running down the street.",
        "pregunta": "¿Qué hacía el ladrón?",
        "opciones": [
          "Corría por la calle",
          "Se escondía",
          "Manejaba",
          "Dormía"
        ]
      }
    ],
    "lectura": {
      "titulo": "A strange afternoon",
      "texto": "Last Sunday afternoon I was reading in the park while my son was playing on the swings. It was a beautiful day: the sun was shining and people were walking their dogs. Suddenly, I heard a loud noise. A young man was riding his bike very fast, and he hit a tree. He fell on the grass, and his bike broke. Everybody ran to help him. While a woman was calling an ambulance, I gave him some water. Luckily, he was OK; he only cut his hand a little. A few minutes later the paramedics arrived and checked him. In the end, he laughed and said: I was looking at my phone while I was riding. Never again!",
      "preguntas": [
        {
          "pregunta": "¿Qué hacía el hijo del narrador?",
          "opciones": [
            "Jugaba en los columpios",
            "Andaba en bicicleta",
            "Paseaba al perro",
            "Leía"
          ]
        },
        {
          "pregunta": "¿Contra qué chocó el joven?",
          "opciones": [
            "Contra un árbol",
            "Contra un carro",
            "Contra una banca",
            "Contra un perro"
          ]
        },
        {
          "pregunta": "¿Qué le dio el narrador?",
          "opciones": [
            "Agua",
            "Una curita",
            "Su celular",
            "Comida"
          ]
        },
        {
          "pregunta": "¿Por qué chocó el joven?",
          "opciones": [
            "Iba mirando su celular",
            "Iba muy cansado",
            "Había lluvia",
            "Un perro se le cruzó"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con el pasado simple o continuo.",
        "pregunta": "I ___ (cook) when the phone rang.",
        "respuestas": [
          "was cooking"
        ]
      },
      {
        "instruccion": "Completa con el pasado simple o continuo.",
        "pregunta": "We were watching TV when the lights ___ (go) out.",
        "respuestas": [
          "went"
        ]
      },
      {
        "instruccion": "Completa con el pasado simple o continuo.",
        "pregunta": "While she ___ (run), she fell.",
        "respuestas": [
          "was running"
        ]
      },
      {
        "instruccion": "Completa con when o while.",
        "pregunta": "___ I was walking home, I saw an accident.",
        "respuestas": [
          "While"
        ]
      },
      {
        "instruccion": "Completa con when o while.",
        "pregunta": "I was sleeping ___ the alarm went off.",
        "respuestas": [
          "when"
        ]
      },
      {
        "instruccion": "Escribe el pasado.",
        "pregunta": "fall → ___",
        "respuestas": [
          "fell"
        ]
      },
      {
        "instruccion": "Escribe el pasado.",
        "pregunta": "break → ___",
        "respuestas": [
          "broke"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "De repente, oí un ruido.",
        "respuestas": [
          "Suddenly, I heard a noise",
          "Suddenly I heard a noise"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Me caí.",
        "respuestas": [
          "I fell",
          "I fell down"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I was cooking when the phone was ringing.",
        "respuestas": [
          "I was cooking when the phone rang"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "I was reading when my friend ___.",
        "opciones": [
          "called",
          "was calling",
          "calls",
          "call"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "While we ___ dinner, the doorbell rang.",
        "opciones": [
          "were having",
          "had",
          "have",
          "was having"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She broke her leg ___ she was skiing.",
        "opciones": [
          "while",
          "when then",
          "after",
          "so"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___, I heard a noise in the kitchen.",
        "opciones": [
          "Suddenly",
          "While",
          "Usually",
          "Tomorrow"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "When I arrived, they ___ dinner (ya estaban cenando).",
        "opciones": [
          "were having",
          "had",
          "have",
          "are having"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Qué significa «Luckily, nobody was hurt»?",
        "opciones": [
          "Por suerte, nadie salió herido",
          "Por desgracia, todos se lastimaron",
          "De repente, nadie llegó",
          "Al final, nadie ganó"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I was taking photos at the beach when a big wave took my bag.",
        "pregunta": "¿Qué se llevó la ola?",
        "opciones": [
          "Su bolsa",
          "Su cámara",
          "Sus zapatos",
          "Su toalla"
        ]
      },
      {
        "tipo": "listening",
        "audio": "While my parents were shopping, my brother and I were waiting in the car.",
        "pregunta": "¿Dónde esperaban los hermanos?",
        "opciones": [
          "En el carro",
          "En la tienda",
          "En casa",
          "En la calle"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Estaba durmiendo cuando sonó el teléfono.",
        "respuestas": [
          "I was sleeping when the phone rang"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Se me cayó el celular.",
        "respuestas": [
          "I dropped my phone",
          "I dropped my cell phone"
        ]
      }
    ]
  },
  {
    "id": "a2-06",
    "num": 6,
    "titulo": "Futuro con going to (planes e intenciones)",
    "contexto": "Planes y metas",
    "explicacion": {
      "es": [
        "***Going to*** sirve para **planes e intenciones** que ya decidiste: *I'**m going to** study English this year.* (Voy a estudiar inglés este año.)",
        "Se forma con ***am / is / are*** + ***going to*** + **verbo base**: *I'm going to travel. She's going to buy a car. They're going to get married.*",
        "**Negativo:** *I'm **not** going to eat sugar. He **isn't** going to come.* **Preguntas:** ***Are** you going to call her? **What are** you going to do this weekend?* — *Yes, I am. / No, I'm not.*",
        "También sirve para **predicciones con evidencia** (lo que ves ahora): *Look at those clouds! It'**s going to rain**.* *Be careful! You'**re going to fall**!*"
      ],
      "tabla": {
        "columnas": [
          "Sujeto",
          "Afirmativo",
          "Negativo",
          "Pregunta"
        ],
        "filas": [
          [
            "I",
            "I'm going to travel.",
            "I'm not going to travel.",
            "Am I going to travel?"
          ],
          [
            "he / she / it",
            "She's going to travel.",
            "She isn't going to travel.",
            "Is she going to travel?"
          ],
          [
            "you / we / they",
            "They're going to travel.",
            "They aren't going to travel.",
            "Are they going to travel?"
          ]
        ]
      },
      "ojo": [
        "No olvides *am / is / are*: *I'**m** going to study* ✅, no *I going to study* ❌.",
        "Después de *going to* va el verbo **base**: *going to **buy*** ✅, no *going to buying* ❌.",
        "Al hablar rápido *going to* suena **«gonna»**: *I'm gonna call you.* Se dice así, pero en exámenes y textos escribe *going to*.",
        "Con *go* se puede decir *I'm going to go to the beach* o simplemente *I'm going to the beach*.",
        "Palabras de futuro: ***tomorrow, tonight, next week, next year, this weekend, soon, in two years***."
      ],
      "en": [
        "We use going to for plans and intentions: I'm going to study English this year.",
        "Form: am, is or are, plus going to, plus a verb. She's going to buy a car.",
        "Questions: What are you going to do this weekend?",
        "Predictions with evidence: Look at those clouds! It's going to rain."
      ]
    },
    "vocabulario": [
      {
        "en": "I'm going to learn English.",
        "es": "voy a aprender inglés",
        "imagen": "Persona estudiando inglés con su celular y un cuaderno",
        "ejemplo": [
          "I'm going to learn English this year.",
          "Este año voy a aprender inglés."
        ]
      },
      {
        "en": "She's going to buy a car.",
        "es": "ella va a comprar un carro",
        "imagen": "Mujer mirando un carro nuevo en una agencia",
        "ejemplo": [
          "She's going to buy a car next month.",
          "Ella va a comprar un carro el próximo mes."
        ]
      },
      {
        "en": "We're going to move.",
        "es": "nos vamos a mudar",
        "imagen": "Pareja empacando cajas de mudanza",
        "ejemplo": [
          "We're going to move to a bigger house.",
          "Nos vamos a mudar a una casa más grande."
        ]
      },
      {
        "en": "They're going to get married.",
        "es": "se van a casar",
        "imagen": "Pareja comprometida mostrando el anillo",
        "ejemplo": [
          "They're going to get married in June.",
          "Se van a casar en junio."
        ]
      },
      {
        "en": "He's going to start a business.",
        "es": "él va a poner un negocio",
        "imagen": "Hombre abriendo la cortina de una tienda nueva",
        "ejemplo": [
          "He's going to start a coffee business.",
          "Él va a poner un negocio de café."
        ]
      },
      {
        "en": "I'm going to save money.",
        "es": "voy a ahorrar dinero",
        "imagen": "Alcancía de cerdito con monedas",
        "ejemplo": [
          "I'm going to save money for a trip.",
          "Voy a ahorrar dinero para un viaje."
        ]
      },
      {
        "en": "I'm going to exercise more.",
        "es": "voy a hacer más ejercicio",
        "imagen": "Persona corriendo en el parque al amanecer",
        "ejemplo": [
          "I'm going to exercise three times a week.",
          "Voy a hacer ejercicio tres veces por semana."
        ]
      },
      {
        "en": "She's going to have a baby.",
        "es": "ella va a tener un bebé",
        "imagen": "Mujer embarazada sonriendo con la mano en el vientre",
        "ejemplo": [
          "My sister is going to have a baby in May.",
          "Mi hermana va a tener un bebé en mayo."
        ]
      },
      {
        "en": "We're going to travel.",
        "es": "vamos a viajar",
        "imagen": "Familia mirando un mapa y planeando un viaje en la mesa",
        "ejemplo": [
          "We're going to travel to Peru next summer.",
          "El próximo verano vamos a viajar a Perú."
        ]
      },
      {
        "en": "I'm going to look for a new job.",
        "es": "voy a buscar otro trabajo",
        "imagen": "Persona revisando ofertas de trabajo en su laptop",
        "ejemplo": [
          "I'm going to look for a new job.",
          "Voy a buscar otro trabajo."
        ]
      },
      {
        "en": "He's going to learn to drive.",
        "es": "él va a aprender a manejar",
        "imagen": "Joven en clase de manejo con un instructor",
        "ejemplo": [
          "My son is going to learn to drive.",
          "Mi hijo va a aprender a manejar."
        ]
      },
      {
        "en": "I'm going to quit smoking.",
        "es": "voy a dejar de fumar",
        "imagen": "Mano rompiendo un cigarro a la mitad",
        "ejemplo": [
          "I'm going to quit smoking this year.",
          "Este año voy a dejar de fumar."
        ]
      },
      {
        "en": "We're going to paint the house.",
        "es": "vamos a pintar la casa",
        "imagen": "Familia con brochas y botes de pintura frente a su casa",
        "ejemplo": [
          "We're going to paint the house blue.",
          "Vamos a pintar la casa de azul."
        ]
      },
      {
        "en": "It's going to rain.",
        "es": "va a llover",
        "imagen": "Nubes negras sobre la ciudad antes de una tormenta",
        "ejemplo": [
          "Look at the sky! It's going to rain.",
          "¡Mira el cielo! Va a llover."
        ]
      },
      {
        "en": "I'm not going to eat junk food.",
        "es": "no voy a comer comida chatarra",
        "imagen": "Persona rechazando una hamburguesa y eligiendo una ensalada",
        "ejemplo": [
          "I'm not going to eat junk food anymore.",
          "Ya no voy a comer comida chatarra."
        ]
      },
      {
        "en": "She's going to graduate.",
        "es": "ella se va a graduar",
        "imagen": "Joven con toga y birrete sonriendo",
        "ejemplo": [
          "She's going to graduate next year.",
          "Ella se va a graduar el próximo año."
        ]
      }
    ],
    "grupos": [
      {
        "id": "metas",
        "titulo": "Mis metas",
        "icono": "🎯",
        "patron": [
          "This year I'm going to…",
          "In five years I'm going to…",
          "My goal is to…"
        ],
        "palabras": [
          {
            "en": "get a promotion",
            "es": "conseguir un ascenso",
            "imagen": "Empleada recibiendo felicitaciones de su jefe",
            "ejemplo": [
              "I'm going to work hard and get a promotion.",
              "Voy a trabajar duro y conseguir un ascenso."
            ]
          },
          {
            "en": "lose weight",
            "es": "bajar de peso",
            "imagen": "Persona midiéndose la cintura con una cinta",
            "ejemplo": [
              "He's going to lose ten kilos.",
              "Él va a bajar diez kilos."
            ]
          },
          {
            "en": "buy a house",
            "es": "comprar una casa",
            "imagen": "Pareja recibiendo las llaves de su casa nueva",
            "ejemplo": [
              "We're going to buy a house in two years.",
              "En dos años vamos a comprar una casa."
            ]
          },
          {
            "en": "run a marathon",
            "es": "correr un maratón",
            "imagen": "Corredores en un maratón por las calles de la ciudad",
            "ejemplo": [
              "I'm going to run a marathon next year.",
              "El próximo año voy a correr un maratón."
            ]
          },
          {
            "en": "read more books",
            "es": "leer más libros",
            "imagen": "Pila de libros junto a una taza de té",
            "ejemplo": [
              "I'm going to read a book every month.",
              "Voy a leer un libro cada mes."
            ]
          },
          {
            "en": "spend more time with my family",
            "es": "pasar más tiempo con mi familia",
            "imagen": "Familia jugando un juego de mesa en la sala",
            "ejemplo": [
              "I'm going to spend more time with my family.",
              "Voy a pasar más tiempo con mi familia."
            ]
          },
          {
            "en": "learn to cook",
            "es": "aprender a cocinar",
            "imagen": "Persona siguiendo una receta en la tablet en su cocina",
            "ejemplo": [
              "I'm going to learn to cook Italian food.",
              "Voy a aprender a cocinar comida italiana."
            ]
          },
          {
            "en": "finish my degree",
            "es": "terminar mi carrera",
            "imagen": "Estudiante adulto estudiando de noche en la mesa",
            "ejemplo": [
              "She's going to finish her degree this year.",
              "Este año ella va a terminar su carrera."
            ]
          }
        ]
      },
      {
        "id": "preguntas",
        "titulo": "¿Qué vas a hacer?",
        "icono": "❓",
        "patron": [
          "What are you going to do?",
          "Are you going to…?",
          "When are you going to…?"
        ],
        "palabras": [
          {
            "en": "What are you going to do this weekend?",
            "es": "¿qué vas a hacer este fin de semana?",
            "imagen": "Amigos platicando en la oficina un viernes",
            "ejemplo": [
              "What are you going to do this weekend?",
              "¿Qué vas a hacer este fin de semana?"
            ]
          },
          {
            "en": "Are you going to come to the party?",
            "es": "¿vas a venir a la fiesta?",
            "imagen": "Persona entregando una invitación a una fiesta",
            "ejemplo": [
              "Are you going to come to the party? Yes, I am.",
              "¿Vas a venir a la fiesta? Sí."
            ]
          },
          {
            "en": "When are you going to call her?",
            "es": "¿cuándo le vas a llamar?",
            "imagen": "Amigo señalando el celular de su amigo",
            "ejemplo": [
              "When are you going to call her?",
              "¿Cuándo le vas a llamar?"
            ]
          },
          {
            "en": "Where are you going to stay?",
            "es": "¿dónde te vas a quedar?",
            "imagen": "Viajero con mochila mirando un pueblo desde una colina",
            "ejemplo": [
              "Where are you going to stay in Cancun?",
              "¿Dónde te vas a quedar en Cancún?"
            ]
          },
          {
            "en": "How are you going to pay?",
            "es": "¿cómo vas a pagar?",
            "imagen": "Cliente en la caja con tarjeta y efectivo en la mano",
            "ejemplo": [
              "How are you going to pay? By card.",
              "¿Cómo va a pagar? Con tarjeta."
            ]
          },
          {
            "en": "Is she going to study medicine?",
            "es": "¿ella va a estudiar medicina?",
            "imagen": "Joven mirando folletos de universidades",
            "ejemplo": [
              "Is she going to study medicine? No, she isn't.",
              "¿Va a estudiar medicina? No."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I'm going to learn English this year.",
        "es": "Este año voy a aprender inglés."
      },
      {
        "en": "They're going to get married in June.",
        "es": "Se van a casar en junio."
      },
      {
        "en": "Look at the sky! It's going to rain.",
        "es": "¡Mira el cielo! Va a llover."
      },
      {
        "en": "What are you going to do this weekend?",
        "es": "¿Qué vas a hacer este fin de semana?"
      },
      {
        "en": "We're going to travel to Peru next summer.",
        "es": "El próximo verano vamos a viajar a Perú."
      },
      {
        "en": "I'm not going to eat junk food anymore.",
        "es": "Ya no voy a comer comida chatarra."
      },
      {
        "en": "Be careful! You're going to fall!",
        "es": "¡Cuidado! ¡Te vas a caer!",
        "imagen": "Niño subiéndose a una silla inestable y su mamá alarmada"
      },
      {
        "en": "My sister is going to have a baby in May.",
        "es": "Mi hermana va a tener un bebé en mayo."
      },
      {
        "en": "Are you going to come to the party? Yes, I am.",
        "es": "¿Vas a venir a la fiesta? Sí."
      },
      {
        "en": "He's going to start a coffee business.",
        "es": "Él va a poner un negocio de café."
      }
    ],
    "frases": [
      {
        "en": "This year I'm going to exercise more, eat better, and sleep eight hours a day.",
        "es": "Este año voy a hacer más ejercicio, comer mejor y dormir ocho horas al día.",
        "imagen": "Persona preparando un licuado verde después de hacer ejercicio"
      },
      {
        "en": "We're going to save money because we're going to buy a house in two years.",
        "es": "Vamos a ahorrar porque en dos años vamos a comprar una casa.",
        "imagen": "Pareja revisando su presupuesto en la mesa con una alcancía"
      },
      {
        "en": "My brother isn't going to study at university. He's going to work with my dad.",
        "es": "Mi hermano no va a estudiar en la universidad. Va a trabajar con mi papá.",
        "imagen": "Padre e hijo trabajando juntos en un taller de carpintería"
      },
      {
        "en": "Are you going to take the bus or are you going to drive?",
        "es": "¿Vas a tomar el camión o vas a manejar?",
        "imagen": "Persona en la parada de autobús junto a un carro estacionado"
      },
      {
        "en": "She's going to finish her degree and then she's going to look for a job in Canada.",
        "es": "Va a terminar su carrera y luego va a buscar trabajo en Canadá.",
        "imagen": "Joven graduada mirando una oferta de trabajo en su laptop"
      },
      {
        "en": "Hurry up! We're going to miss the train!",
        "es": "¡Apúrate! ¡Vamos a perder el tren!",
        "imagen": "Personas corriendo en el andén mientras el tren está por salir"
      },
      {
        "en": "On Saturday we're going to paint the living room and clean the garage.",
        "es": "El sábado vamos a pintar la sala y limpiar la cochera.",
        "imagen": "Familia ordenando cajas en una cochera"
      },
      {
        "en": "In five years I'm going to have my own restaurant.",
        "es": "En cinco años voy a tener mi propio restaurante.",
        "imagen": "Chef joven parada orgullosa en la puerta de su restaurante"
      },
      {
        "en": "What are you going to cook for Christmas dinner?",
        "es": "¿Qué vas a cocinar para la cena de Navidad?",
        "imagen": "Mesa navideña con pavo y velas"
      },
      {
        "en": "I'm going to call my grandma tonight because it's her birthday.",
        "es": "Esta noche le voy a llamar a mi abuela porque es su cumpleaños.",
        "imagen": "Abuela sonriendo al contestar el teléfono con un pastel al lado"
      }
    ],
    "listening": [
      {
        "audio": "Next year I'm going to study in Canada for six months.",
        "pregunta": "¿Cuánto tiempo va a estudiar en Canadá?",
        "opciones": [
          "Seis meses",
          "Un año",
          "Dos meses",
          "Tres años"
        ]
      },
      {
        "audio": "We're not going to buy a new car. We're going to fix the old one.",
        "pregunta": "¿Qué van a hacer?",
        "opciones": [
          "Arreglar el carro viejo",
          "Comprar un carro nuevo",
          "Vender el carro",
          "Rentar un carro"
        ]
      },
      {
        "audio": "Look at those black clouds! It's going to rain.",
        "pregunta": "¿Qué va a pasar?",
        "opciones": [
          "Va a llover",
          "Va a nevar",
          "Va a hacer calor",
          "Va a salir el sol"
        ]
      },
      {
        "audio": "Are you going to come to dinner on Friday? Sorry, I can't. I'm going to work late.",
        "pregunta": "¿Por qué no puede ir?",
        "opciones": [
          "Va a trabajar tarde",
          "Va a viajar",
          "Está enfermo",
          "Tiene otra cena"
        ]
      },
      {
        "audio": "My parents are going to celebrate their anniversary in Acapulco.",
        "pregunta": "¿Qué van a celebrar?",
        "opciones": [
          "Su aniversario",
          "Un cumpleaños",
          "Una graduación",
          "Navidad"
        ]
      }
    ],
    "lectura": {
      "titulo": "New year, new plans",
      "texto": "It's January, and the Ramírez family is talking about their plans for the year. Dad is going to quit smoking and start running. He wants to run a 10K race in October. Mom is going to finish her English course, because she's going to apply for a job in an international company. Their daughter, Valeria, is going to graduate from high school in June, and then she's going to study architecture. Their son, Diego, is fourteen. He isn't going to make any plans. I'm going to play video games, he says. Everybody laughs. But they all have one plan together: in August they're going to visit their cousins in Chicago.",
      "preguntas": [
        {
          "pregunta": "¿Qué va a dejar el papá?",
          "opciones": [
            "De fumar",
            "De trabajar",
            "De comer azúcar",
            "De manejar"
          ]
        },
        {
          "pregunta": "¿Por qué la mamá va a terminar su curso de inglés?",
          "opciones": [
            "Va a solicitar un trabajo en una empresa internacional",
            "Va a viajar a Chicago",
            "Le gusta estudiar",
            "Va a dar clases"
          ]
        },
        {
          "pregunta": "¿Qué va a estudiar Valeria?",
          "opciones": [
            "Arquitectura",
            "Medicina",
            "Inglés",
            "Diseño"
          ]
        },
        {
          "pregunta": "¿Qué van a hacer todos en agosto?",
          "opciones": [
            "Visitar a sus primos en Chicago",
            "Correr una carrera",
            "Ir a la playa",
            "Mudarse"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con am, is o are.",
        "pregunta": "I ___ going to study tonight.",
        "respuestas": [
          "am",
          "'m"
        ]
      },
      {
        "instruccion": "Completa con am, is o are.",
        "pregunta": "They ___ going to travel.",
        "respuestas": [
          "are",
          "'re"
        ]
      },
      {
        "instruccion": "Completa con going to.",
        "pregunta": "She's ___ buy a car.",
        "respuestas": [
          "going to"
        ]
      },
      {
        "instruccion": "Completa con going to + verbo.",
        "pregunta": "We ___ (move) next month.",
        "respuestas": [
          "are going to move",
          "'re going to move"
        ]
      },
      {
        "instruccion": "Escribe en negativo.",
        "pregunta": "He is going to come. → He ___ going to come.",
        "respuestas": [
          "isn't",
          "is not"
        ]
      },
      {
        "instruccion": "Completa la pregunta.",
        "pregunta": "What ___ you going to do?",
        "respuestas": [
          "are"
        ]
      },
      {
        "instruccion": "Completa la respuesta corta.",
        "pregunta": "Are you going to call her? Yes, I ___.",
        "respuestas": [
          "am"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Voy a aprender inglés.",
        "respuestas": [
          "I'm going to learn English",
          "I am going to learn English"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Va a llover.",
        "respuestas": [
          "It's going to rain",
          "It is going to rain"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I going to travel.",
        "respuestas": [
          "I'm going to travel",
          "I am going to travel"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "I ___ going to visit my aunt.",
        "opciones": [
          "am",
          "is",
          "are",
          "be"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She's going ___ a new phone.",
        "opciones": [
          "to buy",
          "buy",
          "buying",
          "to buying"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ they going to come?",
        "opciones": [
          "Are",
          "Is",
          "Do",
          "Will"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Look at that glass! It's going to ___.",
        "opciones": [
          "fall",
          "falls",
          "fell",
          "falling"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We ___ going to stay at home.",
        "opciones": [
          "aren't",
          "isn't",
          "don't",
          "not"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es una palabra de futuro?",
        "opciones": [
          "next year",
          "last year",
          "yesterday",
          "ago"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I'm going to paint my bedroom green this weekend.",
        "pregunta": "¿De qué color va a pintar su cuarto?",
        "opciones": [
          "Verde",
          "Azul",
          "Blanco",
          "Amarillo"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Where are you going to celebrate your birthday? At my grandma's house.",
        "pregunta": "¿Dónde va a celebrar su cumpleaños?",
        "opciones": [
          "En casa de su abuela",
          "En un restaurante",
          "En su casa",
          "En la playa"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¿Qué vas a hacer?",
        "respuestas": [
          "What are you going to do"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Nos vamos a mudar.",
        "respuestas": [
          "We're going to move",
          "We are going to move"
        ]
      }
    ]
  },
  {
    "id": "a2-07",
    "num": 7,
    "titulo": "Futuro con will (predicciones, ofertas, decisiones)",
    "contexto": "El futuro y la tecnología",
    "explicacion": {
      "es": [
        "***Will*** + **verbo base** sirve para el futuro y es **igual para todas las personas**: *I **will** help, she **will** help, they **will** help.* Al hablar se contrae: *I'**ll**, you'**ll**, she'**ll**, we'**ll***.",
        "Se usa para **predicciones** (lo que crees o imaginas): *In 2050 cars **will fly**. I think it **will be** a great year.* Muchas veces con ***I think, I'm sure, probably, maybe***.",
        "También para **decisiones del momento** y **ofertas o promesas**: *The phone is ringing. — **I'll** get it!* (¡Yo contesto!) *Don't worry, **I'll help** you. **I'll call** you tomorrow, I promise.*",
        "**Negativo:** ***won't*** (*will not*): *It **won't** rain. Robots **won't** replace teachers.* **Preguntas:** ***Will** you help me? — Yes, I will. / No, I won't.* Para ofrecer: ***Shall I** open the window?* (¿Abro la ventana?)"
      ],
      "tabla": {
        "columnas": [
          "Uso",
          "Ejemplo"
        ],
        "filas": [
          [
            "Predicción",
            "Robots will do the housework."
          ],
          [
            "Decisión del momento",
            "I'm hungry. I'll make a sandwich."
          ],
          [
            "Oferta",
            "I'll carry your bag."
          ],
          [
            "Promesa",
            "I won't tell anyone."
          ],
          [
            "Pregunta",
            "Will people live on Mars?"
          ]
        ]
      },
      "ojo": [
        "Después de *will* va el verbo **base**, sin *to* ni *-s*: *She will **go*** ✅, no *She will goes* ❌ ni *will to go* ❌.",
        "***Going to*** = plan que **ya** decidiste. ***Will*** = decides **en este momento**: *I'm going to buy a car* (ya lo planeé) / *Oh, the car is cheap! I'll buy it!* (lo decido ahora).",
        "***Won't*** suena «wount», no lo confundas con *want* (querer).",
        "*I think + will*: ***I think** it **will** rain.* Para el negativo se dice ***I don't think** it will rain* (más natural que *I think it won't*).",
        "*Probably* va **después** de *will* y **antes** de *won't*: *It will **probably** rain. / It **probably** won't rain.*"
      ],
      "en": [
        "Will plus a verb is the same for everyone: I will help, she will help.",
        "Predictions: In 2050 cars will fly. I think it will be a great year.",
        "Decisions and offers: The phone is ringing. I'll get it! Don't worry, I'll help you.",
        "Negative: won't. Robots won't replace teachers. Questions: Will you help me?"
      ]
    },
    "vocabulario": [
      {
        "en": "Robots will do the housework.",
        "es": "los robots harán el quehacer",
        "imagen": "Robot aspirando la sala de una casa moderna",
        "ejemplo": [
          "In the future, robots will do the housework.",
          "En el futuro, los robots harán el quehacer."
        ]
      },
      {
        "en": "Cars will drive themselves.",
        "es": "los carros se manejarán solos",
        "imagen": "Carro autónomo sin conductor en una avenida futurista",
        "ejemplo": [
          "Cars will drive themselves in twenty years.",
          "En veinte años los carros se manejarán solos."
        ]
      },
      {
        "en": "People will live on Mars.",
        "es": "la gente vivirá en Marte",
        "imagen": "Base espacial en el paisaje rojo de Marte",
        "ejemplo": [
          "Maybe people will live on Mars one day.",
          "Tal vez algún día la gente vivirá en Marte."
        ]
      },
      {
        "en": "We'll use less paper.",
        "es": "usaremos menos papel",
        "imagen": "Persona firmando un documento en una tablet",
        "ejemplo": [
          "We'll use less paper and more screens.",
          "Usaremos menos papel y más pantallas."
        ]
      },
      {
        "en": "I'll help you.",
        "es": "te ayudo",
        "imagen": "Persona ayudando a su vecina a cargar bolsas",
        "ejemplo": [
          "Don't worry, I'll help you.",
          "No te preocupes, te ayudo."
        ]
      },
      {
        "en": "I'll get it!",
        "es": "¡yo contesto!",
        "imagen": "Persona corriendo a contestar el teléfono de casa",
        "ejemplo": [
          "The phone is ringing. I'll get it!",
          "Está sonando el teléfono. ¡Yo contesto!"
        ]
      },
      {
        "en": "I'll call you later.",
        "es": "te llamo al rato",
        "imagen": "Persona despidiéndose con el celular en la mano",
        "ejemplo": [
          "I'm busy now. I'll call you later.",
          "Ahorita estoy ocupado. Te llamo al rato."
        ]
      },
      {
        "en": "It will be sunny tomorrow.",
        "es": "mañana hará sol",
        "imagen": "Pronóstico del clima con un sol en la pantalla de la tele",
        "ejemplo": [
          "The weather report says it will be sunny tomorrow.",
          "El pronóstico dice que mañana hará sol."
        ]
      },
      {
        "en": "I won't tell anyone.",
        "es": "no le diré a nadie",
        "imagen": "Persona haciendo el gesto de cerrar la boca con un cierre",
        "ejemplo": [
          "It's a secret? I won't tell anyone.",
          "¿Es un secreto? No le diré a nadie."
        ]
      },
      {
        "en": "You'll love it!",
        "es": "¡te va a encantar!",
        "imagen": "Amiga dándole a probar un postre a otra",
        "ejemplo": [
          "Try this cake. You'll love it!",
          "Prueba este pastel. ¡Te va a encantar!"
        ]
      },
      {
        "en": "I think it will rain.",
        "es": "creo que va a llover",
        "imagen": "Persona mirando el cielo nublado con un paraguas en la mano",
        "ejemplo": [
          "Take an umbrella. I think it will rain.",
          "Lleva paraguas. Creo que va a llover."
        ]
      },
      {
        "en": "Will you marry me?",
        "es": "¿te casarías conmigo?",
        "imagen": "Hombre arrodillado ofreciendo un anillo en un parque",
        "ejemplo": [
          "Will you marry me? Yes, I will!",
          "¿Te casarías conmigo? ¡Sí!"
        ]
      },
      {
        "en": "Phones will be smaller.",
        "es": "los celulares serán más pequeños",
        "imagen": "Pulsera inteligente proyectando una pantalla en el brazo",
        "ejemplo": [
          "Phones will be smaller and smarter.",
          "Los celulares serán más pequeños y más inteligentes."
        ]
      },
      {
        "en": "Doctors will use AI.",
        "es": "los doctores usarán inteligencia artificial",
        "imagen": "Doctora revisando una radiografía en una pantalla con datos",
        "ejemplo": [
          "Doctors will use AI to find diseases.",
          "Los doctores usarán inteligencia artificial para encontrar enfermedades."
        ]
      },
      {
        "en": "I'll have the soup.",
        "es": "voy a querer la sopa",
        "imagen": "Cliente pidiendo en un restaurante al mesero",
        "ejemplo": [
          "I'll have the soup, please.",
          "Voy a querer la sopa, por favor."
        ]
      },
      {
        "en": "We'll see.",
        "es": "ya veremos",
        "imagen": "Papá pensativo mientras su hija le pide algo",
        "ejemplo": [
          "Can we go to the zoo? We'll see.",
          "¿Podemos ir al zoológico? Ya veremos."
        ]
      }
    ],
    "grupos": [
      {
        "id": "tecnologia",
        "titulo": "La tecnología",
        "icono": "🤖",
        "patron": [
          "a robot",
          "an app",
          "artificial intelligence"
        ],
        "palabras": [
          {
            "en": "artificial intelligence",
            "es": "inteligencia artificial",
            "imagen": "Persona hablando con un asistente virtual en su laptop",
            "ejemplo": [
              "Artificial intelligence will change many jobs.",
              "La inteligencia artificial cambiará muchos trabajos."
            ]
          },
          {
            "en": "a robot",
            "es": "un robot",
            "imagen": "Robot amigable sirviendo café en una cafetería",
            "ejemplo": [
              "A robot will serve your coffee.",
              "Un robot te servirá el café."
            ]
          },
          {
            "en": "an electric car",
            "es": "un carro eléctrico",
            "imagen": "Carro eléctrico cargándose en una estación",
            "ejemplo": [
              "My next car will be an electric car.",
              "Mi próximo carro será eléctrico."
            ]
          },
          {
            "en": "a drone",
            "es": "un dron",
            "imagen": "Dron volando y entregando un paquete en una casa",
            "ejemplo": [
              "Drones will deliver packages.",
              "Los drones entregarán paquetes."
            ]
          },
          {
            "en": "an app",
            "es": "una aplicación",
            "imagen": "Persona usando una aplicación en su celular",
            "ejemplo": [
              "There will be an app for everything.",
              "Habrá una aplicación para todo."
            ]
          },
          {
            "en": "a smartwatch",
            "es": "un reloj inteligente",
            "imagen": "Reloj inteligente mostrando el ritmo cardiaco",
            "ejemplo": [
              "My smartwatch counts my steps.",
              "Mi reloj inteligente cuenta mis pasos."
            ]
          },
          {
            "en": "virtual reality",
            "es": "realidad virtual",
            "imagen": "Persona con lentes de realidad virtual moviendo las manos",
            "ejemplo": [
              "Students will learn with virtual reality.",
              "Los estudiantes aprenderán con realidad virtual."
            ]
          },
          {
            "en": "solar panels",
            "es": "paneles solares",
            "imagen": "Casa con paneles solares en el techo bajo el sol",
            "ejemplo": [
              "All houses will have solar panels.",
              "Todas las casas tendrán paneles solares."
            ]
          }
        ]
      },
      {
        "id": "ofertas",
        "titulo": "Ofertas y promesas",
        "icono": "🤝",
        "patron": [
          "I'll…",
          "Shall I…?",
          "I promise I'll…"
        ],
        "palabras": [
          {
            "en": "I'll carry your bag.",
            "es": "yo te cargo la bolsa",
            "imagen": "Joven cargando la maleta de una señora mayor en las escaleras",
            "ejemplo": [
              "Let me help. I'll carry your bag.",
              "Déjame ayudarte. Yo te cargo la bolsa."
            ]
          },
          {
            "en": "Shall I open the window?",
            "es": "¿abro la ventana?",
            "imagen": "Persona en una oficina caliente señalando la ventana",
            "ejemplo": [
              "It's hot in here. Shall I open the window?",
              "Hace calor aquí. ¿Abro la ventana?"
            ]
          },
          {
            "en": "I'll pay.",
            "es": "yo pago",
            "imagen": "Amigo sacando su tarjeta para pagar la cuenta en un restaurante",
            "ejemplo": [
              "Put your money away. I'll pay.",
              "Guarda tu dinero. Yo pago."
            ]
          },
          {
            "en": "I promise I'll be on time.",
            "es": "te prometo que llegaré a tiempo",
            "imagen": "Persona mostrando su reloj con una sonrisa",
            "ejemplo": [
              "I promise I'll be on time tomorrow.",
              "Te prometo que mañana llegaré a tiempo."
            ]
          },
          {
            "en": "I'll do it later.",
            "es": "lo hago al rato",
            "imagen": "Adolescente en el sofá con el celular mientras su mamá señala los trastes",
            "ejemplo": [
              "I'll do the dishes later, Mom.",
              "Al rato lavo los trastes, mamá."
            ]
          },
          {
            "en": "I won't forget.",
            "es": "no se me olvidará",
            "imagen": "Persona escribiendo un recordatorio en una nota adhesiva",
            "ejemplo": [
              "It's Mom's birthday on Friday. I won't forget.",
              "El viernes es el cumpleaños de mamá. No se me olvidará."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "In the future, robots will do the housework.",
        "es": "En el futuro, los robots harán el quehacer."
      },
      {
        "en": "Don't worry, I'll help you.",
        "es": "No te preocupes, te ayudo."
      },
      {
        "en": "The phone is ringing. I'll get it!",
        "es": "Está sonando el teléfono. ¡Yo contesto!"
      },
      {
        "en": "Take an umbrella. I think it will rain.",
        "es": "Lleva paraguas. Creo que va a llover."
      },
      {
        "en": "It's a secret? I won't tell anyone.",
        "es": "¿Es un secreto? No le diré a nadie."
      },
      {
        "en": "Will you marry me? Yes, I will!",
        "es": "¿Te casarías conmigo? ¡Sí!"
      },
      {
        "en": "I'm busy now. I'll call you later.",
        "es": "Ahorita estoy ocupado. Te llamo al rato."
      },
      {
        "en": "It's hot in here. Shall I open the window?",
        "es": "Hace calor aquí. ¿Abro la ventana?"
      },
      {
        "en": "I don't think people will use cash in the future.",
        "es": "No creo que la gente use efectivo en el futuro.",
        "imagen": "Persona pagando con el reloj en una terminal"
      },
      {
        "en": "Try this cake. You'll love it!",
        "es": "Prueba este pastel. ¡Te va a encantar!"
      }
    ],
    "frases": [
      {
        "en": "In twenty years, cars will drive themselves and we won't need a driver's license.",
        "es": "En veinte años los carros se manejarán solos y no necesitaremos licencia.",
        "imagen": "Pasajeros leyendo dentro de un carro autónomo sin conductor"
      },
      {
        "en": "I think artificial intelligence will help doctors, but it won't replace them.",
        "es": "Creo que la inteligencia artificial ayudará a los doctores, pero no los reemplazará.",
        "imagen": "Doctor hablando con su paciente con una pantalla de datos al fondo"
      },
      {
        "en": "I'm sure you'll pass the exam. You studied very hard.",
        "es": "Estoy seguro de que pasarás el examen. Estudiaste muchísimo.",
        "imagen": "Estudiante nerviosa recibiendo ánimos de su amiga antes de un examen"
      },
      {
        "en": "Maybe one day people will go on vacation to the moon.",
        "es": "Tal vez un día la gente se irá de vacaciones a la luna.",
        "imagen": "Turistas en trajes espaciales tomándose una foto en la luna con la Tierra al fondo"
      },
      {
        "en": "You look tired. Sit down and I'll make you a cup of tea.",
        "es": "Te ves cansado. Siéntate y te preparo un té.",
        "imagen": "Persona sirviéndole un té a su pareja cansada en el sofá"
      },
      {
        "en": "I promise I'll clean my room after I finish my homework.",
        "es": "Te prometo que limpiaré mi cuarto después de terminar la tarea.",
        "imagen": "Niño haciendo la tarea en un cuarto desordenado"
      },
      {
        "en": "The weather report says it will be cold and windy this weekend.",
        "es": "El pronóstico dice que este fin de semana hará frío y viento.",
        "imagen": "Presentadora del clima frente a un mapa con nubes y viento"
      },
      {
        "en": "Will students still go to school, or will they study at home with computers?",
        "es": "¿Los estudiantes seguirán yendo a la escuela o estudiarán en casa con computadoras?",
        "imagen": "Niño en clase en línea desde su cuarto con una laptop"
      },
      {
        "en": "We'll probably move to a smaller house when the kids leave home.",
        "es": "Probablemente nos mudaremos a una casa más pequeña cuando los hijos se vayan.",
        "imagen": "Pareja mayor mirando una casa pequeña con jardín"
      },
      {
        "en": "I'm hungry. I think I'll order a pizza. Do you want some?",
        "es": "Tengo hambre. Creo que voy a pedir una pizza. ¿Quieres?",
        "imagen": "Persona pidiendo pizza desde una app en el celular"
      }
    ],
    "listening": [
      {
        "audio": "I think in the future everybody will work from home.",
        "pregunta": "¿Qué cree que pasará?",
        "opciones": [
          "Todos trabajarán desde casa",
          "No habrá trabajo",
          "Todos usarán robots",
          "La gente vivirá en Marte"
        ]
      },
      {
        "audio": "Oh no, I forgot my wallet! Don't worry, I'll pay.",
        "pregunta": "¿Qué ofrece la otra persona?",
        "opciones": [
          "Pagar",
          "Ir por la cartera",
          "Llamar a alguien",
          "Esperar"
        ]
      },
      {
        "audio": "It will be very hot tomorrow, about thirty-five degrees.",
        "pregunta": "¿Cuántos grados hará mañana?",
        "opciones": [
          "Treinta y cinco",
          "Veinticinco",
          "Quince",
          "Cuarenta y cinco"
        ]
      },
      {
        "audio": "I won't be at the meeting on Monday because I'll be in Monterrey.",
        "pregunta": "¿Dónde estará el lunes?",
        "opciones": [
          "En Monterrey",
          "En la junta",
          "En casa",
          "En el hospital"
        ]
      },
      {
        "audio": "Will you help me with my homework? Sure, I will.",
        "pregunta": "¿Le va a ayudar?",
        "opciones": [
          "Sí",
          "No",
          "Tal vez",
          "Más tarde"
        ]
      }
    ],
    "lectura": {
      "titulo": "My house in 2050",
      "texto": "My name is Sofía, and I'm twelve years old. This is how I imagine my house in 2050. It will have solar panels on the roof, so it won't need electricity from the city. A small robot will clean the floors and wash the dishes every day. The fridge will be very smart: it will know when we don't have milk, and it will order it from the supermarket. A drone will bring the milk in ten minutes! I won't have a car, because cars will drive themselves and I'll call one with my watch. Will people still read books on paper? I think they will, because books are beautiful. And I'm sure my house will have a big garden with real trees, not virtual ones.",
      "preguntas": [
        {
          "pregunta": "¿De dónde vendrá la electricidad de la casa?",
          "opciones": [
            "De paneles solares",
            "De la ciudad",
            "De un generador",
            "Del viento"
          ]
        },
        {
          "pregunta": "¿Qué hará el refrigerador?",
          "opciones": [
            "Pedirá la leche al supermercado",
            "Cocinará la comida",
            "Limpiará la cocina",
            "Hablará con la familia"
          ]
        },
        {
          "pregunta": "¿Por qué Sofía no tendrá carro?",
          "opciones": [
            "Los carros se manejarán solos",
            "Vivirá en el centro",
            "No le gustan los carros",
            "Será muy caro"
          ]
        },
        {
          "pregunta": "¿Qué cree Sofía sobre los libros de papel?",
          "opciones": [
            "La gente los seguirá leyendo",
            "Van a desaparecer",
            "Serán virtuales",
            "Serán muy caros"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con will o won't.",
        "pregunta": "Don't worry. I ___ tell anyone.",
        "respuestas": [
          "won't",
          "will not"
        ]
      },
      {
        "instruccion": "Completa con will + verbo.",
        "pregunta": "I think it ___ (rain) tomorrow.",
        "respuestas": [
          "will rain",
          "'ll rain"
        ]
      },
      {
        "instruccion": "Completa con will + verbo.",
        "pregunta": "Robots ___ (do) the housework.",
        "respuestas": [
          "will do"
        ]
      },
      {
        "instruccion": "Completa la pregunta.",
        "pregunta": "___ you help me, please?",
        "respuestas": [
          "Will"
        ]
      },
      {
        "instruccion": "Completa la respuesta corta.",
        "pregunta": "Will you come? No, I ___.",
        "respuestas": [
          "won't",
          "will not"
        ]
      },
      {
        "instruccion": "Escribe la contracción.",
        "pregunta": "I will → ___",
        "respuestas": [
          "I'll"
        ]
      },
      {
        "instruccion": "Completa la oferta.",
        "pregunta": "It's cold. ___ I close the window?",
        "respuestas": [
          "Shall"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Te ayudo.",
        "respuestas": [
          "I'll help you",
          "I will help you"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Te llamo al rato.",
        "respuestas": [
          "I'll call you later",
          "I will call you later"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "She will goes to Paris.",
        "respuestas": [
          "She will go to Paris",
          "She'll go to Paris"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "In the future people ___ on Mars.",
        "opciones": [
          "will live",
          "will lives",
          "will to live",
          "living"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The phone is ringing. I ___ get it!",
        "opciones": [
          "'ll",
          "'m going",
          "am",
          "did"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I promise I ___ be late again.",
        "opciones": [
          "won't",
          "don't",
          "wasn't",
          "not"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ I open the door for you?",
        "opciones": [
          "Shall",
          "Do",
          "Am",
          "Did"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Plan ya decidido: «Next year I ___ study in Spain.»",
        "opciones": [
          "'m going to",
          "will to",
          "won't to",
          "'ll going to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es más natural?",
        "opciones": [
          "I don't think it will rain.",
          "I think it don't rain.",
          "I think it willn't rain.",
          "I not think it will rain."
        ]
      },
      {
        "tipo": "listening",
        "audio": "I think phones will be like glasses in ten years.",
        "pregunta": "¿Cómo serán los celulares?",
        "opciones": [
          "Como lentes",
          "Como relojes",
          "Más grandes",
          "Iguales"
        ]
      },
      {
        "tipo": "listening",
        "audio": "These boxes are heavy. Don't worry, I'll carry them.",
        "pregunta": "¿Qué va a hacer?",
        "opciones": [
          "Cargar las cajas",
          "Abrir las cajas",
          "Comprar cajas",
          "Tirar las cajas"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: No le diré a nadie.",
        "respuestas": [
          "I won't tell anyone",
          "I will not tell anyone",
          "I won't tell anybody"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Creo que va a llover.",
        "respuestas": [
          "I think it will rain",
          "I think it'll rain",
          "I think it's going to rain"
        ]
      }
    ]
  },
  {
    "id": "a2-08",
    "num": 8,
    "titulo": "Presente continuo para planes acordados",
    "contexto": "Mi agenda de la semana",
    "explicacion": {
      "es": [
        "El **presente continuo** (*am / is / are* + *-ing*) también sirve para el **futuro**, cuando el plan **ya está acordado** con otras personas o tiene fecha y hora: *I'**m meeting** Ana at six.* (Voy a ver a Ana a las seis.)",
        "Es como hablar de tu **agenda**: ya hay cita, boleto o reservación: *We'**re flying** to Cancun on Friday. She'**s seeing** the doctor tomorrow.*",
        "Casi siempre lleva una **expresión de tiempo** para que se entienda que es futuro: ***tonight, tomorrow, on Monday, next week, at 7 p.m., this weekend***.",
        "Preguntas muy útiles: ***What are you doing** this weekend? **Are you doing** anything tonight? **When are you leaving**?*"
      ],
      "tabla": {
        "columnas": [
          "Forma",
          "Para qué",
          "Ejemplo"
        ],
        "filas": [
          [
            "Presente continuo",
            "Cita o plan acordado",
            "I'm having lunch with my boss on Friday."
          ],
          [
            "Going to",
            "Intención, lo que piensas hacer",
            "I'm going to call him some day."
          ],
          [
            "Will",
            "Decisión del momento",
            "OK, I'll call him now."
          ],
          [
            "Presente simple",
            "Horarios fijos",
            "The train leaves at 8:15."
          ]
        ]
      },
      "ojo": [
        "*What are you doing tomorrow?* = ¿Qué vas a hacer mañana? (no «¿qué estás haciendo mañana?»).",
        "Sin expresión de tiempo puede confundirse con «ahora»: *I'm playing tennis* (ahora) / *I'm playing tennis **on Saturday*** (plan).",
        "Para **horarios** de transporte, cine o clases se usa el **presente simple**: *The movie **starts** at 8. My flight **leaves** at 6 a.m.*",
        "***Are you free on…?*** (¿Estás libre el…?) y ***I'm busy*** (estoy ocupado) son claves para hacer citas.",
        "Días con *on*: ***on** Monday*; horas con *at*: ***at** 5 o'clock*; partes del día con *in*: ***in** the morning*, pero ***at** night*."
      ],
      "en": [
        "We use the present continuous for arranged plans in the future: I'm meeting Ana at six.",
        "It's like your schedule: We're flying to Cancun on Friday. She's seeing the doctor tomorrow.",
        "Useful question: What are you doing this weekend?",
        "For timetables, use the present simple: The movie starts at eight."
      ]
    },
    "vocabulario": [
      {
        "en": "I'm meeting a friend.",
        "es": "voy a ver a un amigo",
        "imagen": "Dos amigos saludándose en la entrada de una cafetería",
        "ejemplo": [
          "I'm meeting a friend for coffee at five.",
          "A las cinco voy a ver a un amigo para tomar café."
        ]
      },
      {
        "en": "I'm seeing the dentist.",
        "es": "tengo cita con el dentista",
        "imagen": "Paciente sentado en la silla del dentista",
        "ejemplo": [
          "I'm seeing the dentist on Tuesday.",
          "El martes tengo cita con el dentista."
        ]
      },
      {
        "en": "We're having dinner with my parents.",
        "es": "vamos a cenar con mis papás",
        "imagen": "Familia cenando junta en casa de los abuelos",
        "ejemplo": [
          "We're having dinner with my parents on Sunday.",
          "El domingo vamos a cenar con mis papás."
        ]
      },
      {
        "en": "She's flying to Monterrey.",
        "es": "ella vuela a Monterrey",
        "imagen": "Mujer de negocios en la sala de espera de un aeropuerto",
        "ejemplo": [
          "She's flying to Monterrey tomorrow morning.",
          "Mañana en la mañana ella vuela a Monterrey."
        ]
      },
      {
        "en": "I'm working late.",
        "es": "voy a trabajar hasta tarde",
        "imagen": "Persona en la oficina de noche con la computadora encendida",
        "ejemplo": [
          "Sorry, I'm working late tonight.",
          "Perdón, hoy voy a trabajar hasta tarde."
        ]
      },
      {
        "en": "We're going to a concert.",
        "es": "vamos a ir a un concierto",
        "imagen": "Amigos con boletos en la entrada de un concierto",
        "ejemplo": [
          "We're going to a concert on Saturday.",
          "El sábado vamos a ir a un concierto."
        ]
      },
      {
        "en": "He's playing tennis.",
        "es": "él va a jugar tenis",
        "imagen": "Hombre con raqueta en una cancha de tenis",
        "ejemplo": [
          "He's playing tennis with his boss on Friday.",
          "El viernes va a jugar tenis con su jefe."
        ]
      },
      {
        "en": "I'm having a meeting.",
        "es": "tengo una junta",
        "imagen": "Compañeros en una sala de juntas",
        "ejemplo": [
          "I'm having a meeting at ten.",
          "A las diez tengo una junta."
        ]
      },
      {
        "en": "They're coming for lunch.",
        "es": "vienen a comer",
        "imagen": "Familia recibiendo invitados en la puerta",
        "ejemplo": [
          "My cousins are coming for lunch on Sunday.",
          "Mis primos vienen a comer el domingo."
        ]
      },
      {
        "en": "I'm taking a yoga class.",
        "es": "voy a tomar una clase de yoga",
        "imagen": "Personas haciendo yoga en un salón luminoso",
        "ejemplo": [
          "I'm taking a yoga class on Wednesday.",
          "El miércoles voy a tomar una clase de yoga."
        ]
      },
      {
        "en": "We're leaving at six.",
        "es": "salimos a las seis",
        "imagen": "Familia cargando el carro de madrugada",
        "ejemplo": [
          "We're leaving at six in the morning.",
          "Salimos a las seis de la mañana."
        ]
      },
      {
        "en": "She's having a party.",
        "es": "ella va a hacer una fiesta",
        "imagen": "Mujer decorando su sala con globos",
        "ejemplo": [
          "She's having a party on Friday night.",
          "El viernes en la noche ella va a hacer una fiesta."
        ]
      },
      {
        "en": "I'm getting my hair cut.",
        "es": "me voy a cortar el pelo",
        "imagen": "Persona en la silla de una estética",
        "ejemplo": [
          "I'm getting my hair cut on Thursday.",
          "El jueves me voy a cortar el pelo."
        ]
      },
      {
        "en": "We're visiting my aunt.",
        "es": "vamos a visitar a mi tía",
        "imagen": "Tía abriendo la puerta a sus sobrinos",
        "ejemplo": [
          "We're visiting my aunt in Puebla this weekend.",
          "Este fin de semana vamos a visitar a mi tía en Puebla."
        ]
      },
      {
        "en": "I'm staying at home.",
        "es": "me voy a quedar en casa",
        "imagen": "Persona con pijama y palomitas en el sofá",
        "ejemplo": [
          "I'm staying at home tonight.",
          "Hoy en la noche me voy a quedar en casa."
        ]
      },
      {
        "en": "The movie starts at eight.",
        "es": "la película empieza a las ocho",
        "imagen": "Pantalla de cine con butacas y luces bajando",
        "ejemplo": [
          "Hurry up! The movie starts at eight.",
          "¡Apúrate! La película empieza a las ocho."
        ]
      }
    ],
    "grupos": [
      {
        "id": "agenda",
        "titulo": "Hacer una cita",
        "icono": "🗓️",
        "patron": [
          "Are you free on…?",
          "I'm busy.",
          "How about…?"
        ],
        "palabras": [
          {
            "en": "Are you free on Friday?",
            "es": "¿estás libre el viernes?",
            "imagen": "Persona revisando su agenda en el celular mientras habla con su amiga",
            "ejemplo": [
              "Are you free on Friday? Let's have lunch.",
              "¿Estás libre el viernes? Vamos a comer."
            ]
          },
          {
            "en": "What are you doing tonight?",
            "es": "¿qué vas a hacer hoy en la noche?",
            "imagen": "Compañeros despidiéndose al salir de la oficina",
            "ejemplo": [
              "What are you doing tonight? Nothing special.",
              "¿Qué vas a hacer hoy en la noche? Nada especial."
            ]
          },
          {
            "en": "I'm busy.",
            "es": "estoy ocupado",
            "imagen": "Persona con agenda llena de citas",
            "ejemplo": [
              "Sorry, I'm busy on Monday.",
              "Perdón, el lunes estoy ocupado."
            ]
          },
          {
            "en": "How about Thursday?",
            "es": "¿qué tal el jueves?",
            "imagen": "Calendario con el jueves marcado en un círculo",
            "ejemplo": [
              "I can't on Wednesday. How about Thursday?",
              "El miércoles no puedo. ¿Qué tal el jueves?"
            ]
          },
          {
            "en": "See you then!",
            "es": "¡nos vemos entonces!",
            "imagen": "Amigos despidiéndose con la mano en la calle",
            "ejemplo": [
              "Thursday at seven? Great. See you then!",
              "¿El jueves a las siete? Perfecto. ¡Nos vemos entonces!"
            ]
          },
          {
            "en": "Let's meet at the café.",
            "es": "veámonos en el café",
            "imagen": "Cafetería con mesas en la banqueta",
            "ejemplo": [
              "Let's meet at the café near the park.",
              "Veámonos en el café cerca del parque."
            ]
          },
          {
            "en": "I have an appointment.",
            "es": "tengo una cita",
            "imagen": "Recepción de un consultorio médico",
            "ejemplo": [
              "I have an appointment with the doctor at four.",
              "Tengo cita con el doctor a las cuatro."
            ]
          },
          {
            "en": "Can we change it to Monday?",
            "es": "¿lo podemos cambiar al lunes?",
            "imagen": "Persona moviendo una cita en la agenda de su computadora",
            "ejemplo": [
              "Can we change the meeting to Monday?",
              "¿Podemos cambiar la junta al lunes?"
            ]
          }
        ]
      },
      {
        "id": "dias",
        "titulo": "Mi semana",
        "icono": "📆",
        "patron": [
          "on Monday",
          "next week",
          "this weekend"
        ],
        "palabras": [
          {
            "en": "on Monday morning",
            "es": "el lunes en la mañana",
            "imagen": "Persona llegando temprano a la oficina con su café",
            "ejemplo": [
              "I'm starting my new job on Monday morning.",
              "El lunes en la mañana empiezo mi nuevo trabajo."
            ]
          },
          {
            "en": "tomorrow afternoon",
            "es": "mañana en la tarde",
            "imagen": "Sol de la tarde entrando por una ventana",
            "ejemplo": [
              "I'm playing soccer tomorrow afternoon.",
              "Mañana en la tarde voy a jugar fútbol."
            ]
          },
          {
            "en": "this weekend",
            "es": "este fin de semana",
            "imagen": "Mochilas y botas de montaña listas junto a la puerta",
            "ejemplo": [
              "We're going camping this weekend.",
              "Este fin de semana vamos a acampar."
            ]
          },
          {
            "en": "next week",
            "es": "la próxima semana",
            "imagen": "Calendario con la semana siguiente resaltada",
            "ejemplo": [
              "My parents are visiting us next week.",
              "Mis papás nos visitan la próxima semana."
            ]
          },
          {
            "en": "tonight",
            "es": "hoy en la noche",
            "imagen": "Ciudad iluminada de noche desde una ventana",
            "ejemplo": [
              "I'm cooking pasta tonight.",
              "Hoy en la noche voy a cocinar pasta."
            ]
          },
          {
            "en": "on the 15th",
            "es": "el día 15",
            "imagen": "Página de calendario con el número 15 marcado",
            "ejemplo": [
              "We're having a party on the 15th.",
              "El día 15 vamos a hacer una fiesta."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I'm meeting a friend for coffee at five.",
        "es": "A las cinco voy a ver a un amigo para tomar café."
      },
      {
        "en": "I'm seeing the dentist on Tuesday.",
        "es": "El martes tengo cita con el dentista."
      },
      {
        "en": "What are you doing tonight? Nothing special.",
        "es": "¿Qué vas a hacer hoy en la noche? Nada especial."
      },
      {
        "en": "We're leaving at six in the morning.",
        "es": "Salimos a las seis de la mañana."
      },
      {
        "en": "Are you free on Friday? Let's have lunch.",
        "es": "¿Estás libre el viernes? Vamos a comer."
      },
      {
        "en": "Sorry, I'm working late tonight.",
        "es": "Perdón, hoy voy a trabajar hasta tarde."
      },
      {
        "en": "My cousins are coming for lunch on Sunday.",
        "es": "Mis primos vienen a comer el domingo."
      },
      {
        "en": "I can't on Wednesday. How about Thursday?",
        "es": "El miércoles no puedo. ¿Qué tal el jueves?"
      },
      {
        "en": "Hurry up! The movie starts at eight.",
        "es": "¡Apúrate! La película empieza a las ocho."
      },
      {
        "en": "She's having a party on Friday night.",
        "es": "El viernes en la noche ella va a hacer una fiesta."
      }
    ],
    "frases": [
      {
        "en": "On Monday I'm having a meeting with my boss, and on Tuesday I'm flying to Guadalajara.",
        "es": "El lunes tengo una junta con mi jefe y el martes vuelo a Guadalajara.",
        "imagen": "Agenda abierta con citas escritas y un boleto de avión encima"
      },
      {
        "en": "What are you doing this weekend? We're going to a wedding in Querétaro.",
        "es": "¿Qué van a hacer este fin de semana? Vamos a una boda en Querétaro.",
        "imagen": "Invitados elegantes llegando a una boda en una hacienda"
      },
      {
        "en": "I'm sorry, I can't come to your party. I'm working on Saturday.",
        "es": "Lo siento, no puedo ir a tu fiesta. El sábado trabajo.",
        "imagen": "Persona disculpándose por teléfono mientras mira su horario de trabajo"
      },
      {
        "en": "My sister is getting married next month, and I'm helping her with everything.",
        "es": "Mi hermana se casa el próximo mes y le estoy ayudando con todo.",
        "imagen": "Hermanas eligiendo flores para una boda"
      },
      {
        "en": "We're meeting at the bus station at seven, and the bus leaves at seven thirty.",
        "es": "Nos vemos en la central a las siete y el camión sale a las siete y media.",
        "imagen": "Amigos con mochilas reuniéndose en una central de autobuses"
      },
      {
        "en": "Are you doing anything tonight? Do you want to watch a movie?",
        "es": "¿Vas a hacer algo hoy en la noche? ¿Quieres ver una película?",
        "imagen": "Amigos con palomitas frente a la tele"
      },
      {
        "en": "I'm not cooking tonight. We're ordering tacos!",
        "es": "Hoy no voy a cocinar. ¡Vamos a pedir tacos!",
        "imagen": "Familia recibiendo una orden de tacos a domicilio"
      },
      {
        "en": "The doctor can see you on Thursday at four. Is that OK?",
        "es": "El doctor lo puede ver el jueves a las cuatro. ¿Está bien?",
        "imagen": "Recepcionista de consultorio agendando una cita por teléfono"
      },
      {
        "en": "This weekend we're staying at home because my son is taking an important exam on Monday.",
        "es": "Este fin de semana nos quedamos en casa porque mi hijo tiene un examen importante el lunes.",
        "imagen": "Joven estudiando en casa mientras sus papás le llevan un sándwich"
      },
      {
        "en": "Our English class starts at six, so let's meet at five thirty.",
        "es": "Nuestra clase de inglés empieza a las seis, así que veámonos a las cinco y media.",
        "imagen": "Estudiantes adultos llegando a un salón de clases de inglés"
      }
    ],
    "listening": [
      {
        "audio": "I'm seeing my doctor on Wednesday at eleven.",
        "pregunta": "¿Cuándo es la cita?",
        "opciones": [
          "El miércoles a las once",
          "El martes a las once",
          "El miércoles a las siete",
          "El jueves a las once"
        ]
      },
      {
        "audio": "What are you doing on Saturday? I'm helping my brother. He's moving to a new apartment.",
        "pregunta": "¿Qué va a hacer el sábado?",
        "opciones": [
          "Ayudar a su hermano con la mudanza",
          "Mudarse",
          "Trabajar",
          "Ir al cine"
        ]
      },
      {
        "audio": "Sorry, I can't have lunch tomorrow. I'm having a meeting with a client.",
        "pregunta": "¿Por qué no puede comer mañana?",
        "opciones": [
          "Tiene una junta con un cliente",
          "Está enfermo",
          "Va a viajar",
          "Va al dentista"
        ]
      },
      {
        "audio": "We're flying to Lima next Tuesday, and we're coming back on Sunday.",
        "pregunta": "¿Cuándo regresan?",
        "opciones": [
          "El domingo",
          "El martes",
          "El lunes",
          "El sábado"
        ]
      },
      {
        "audio": "The concert starts at nine, so let's meet at eight thirty at the door.",
        "pregunta": "¿A qué hora se van a ver?",
        "opciones": [
          "A las ocho y media",
          "A las nueve",
          "A las ocho",
          "A las nueve y media"
        ]
      }
    ],
    "lectura": {
      "titulo": "Carla's busy week",
      "texto": "Carla is a nurse, and next week is going to be very busy. On Monday and Tuesday she's working the night shift at the hospital. On Wednesday morning she's sleeping, of course! In the afternoon she's taking her daughter to the dentist. On Thursday she's meeting her best friend, Lupita, for lunch, because it's Lupita's birthday. On Friday evening Carla and her husband are going to a concert; the tickets were a present from her brother. The concert starts at nine. On Saturday they're driving to Cuernavaca to visit her parents, and they're coming back on Sunday afternoon. Carla's husband asked: When are you resting? Carla laughed: Next month!",
      "preguntas": [
        {
          "pregunta": "¿Qué hace Carla el lunes y el martes?",
          "opciones": [
            "Trabaja en el turno de noche",
            "Va al dentista",
            "Visita a sus papás",
            "Va a un concierto"
          ]
        },
        {
          "pregunta": "¿Por qué come con Lupita el jueves?",
          "opciones": [
            "Es el cumpleaños de Lupita",
            "Lupita está enferma",
            "Trabajan juntas",
            "Lupita se va a mudar"
          ]
        },
        {
          "pregunta": "¿Quién les regaló los boletos del concierto?",
          "opciones": [
            "El hermano de Carla",
            "Lupita",
            "Sus papás",
            "El hospital"
          ]
        },
        {
          "pregunta": "¿A dónde van el sábado?",
          "opciones": [
            "A Cuernavaca",
            "Al hospital",
            "A la playa",
            "Al cine"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con el presente continuo.",
        "pregunta": "I ___ (meet) Ana at six.",
        "respuestas": [
          "am meeting",
          "'m meeting"
        ]
      },
      {
        "instruccion": "Completa con el presente continuo.",
        "pregunta": "We ___ (fly) to Cancun on Friday.",
        "respuestas": [
          "are flying",
          "'re flying"
        ]
      },
      {
        "instruccion": "Completa con el presente continuo.",
        "pregunta": "She ___ (see) the doctor tomorrow.",
        "respuestas": [
          "is seeing",
          "'s seeing"
        ]
      },
      {
        "instruccion": "Completa la pregunta.",
        "pregunta": "What ___ you doing this weekend?",
        "respuestas": [
          "are"
        ]
      },
      {
        "instruccion": "Completa con on, at o in.",
        "pregunta": "I'm playing tennis ___ Saturday.",
        "respuestas": [
          "on"
        ]
      },
      {
        "instruccion": "Completa con on, at o in.",
        "pregunta": "The meeting is ___ ten o'clock.",
        "respuestas": [
          "at"
        ]
      },
      {
        "instruccion": "Horario fijo: completa con el presente simple.",
        "pregunta": "The train ___ (leave) at 8:15.",
        "respuestas": [
          "leaves"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Estás libre el viernes?",
        "respuestas": [
          "Are you free on Friday"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Hoy voy a trabajar hasta tarde.",
        "respuestas": [
          "I'm working late today",
          "I'm working late tonight",
          "I am working late today",
          "I am working late tonight"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "What do you do tomorrow night?",
        "respuestas": [
          "What are you doing tomorrow night"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "I ___ my grandma on Sunday.",
        "opciones": [
          "'m visiting",
          "visiting",
          "visited",
          "'m visit"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "What ___ you doing tonight?",
        "opciones": [
          "are",
          "do",
          "will",
          "did"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The bus ___ at 6:30 every morning.",
        "opciones": [
          "leaves",
          "is leaving",
          "leave",
          "will leaving"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Are you free ___ Thursday?",
        "opciones": [
          "on",
          "in",
          "at",
          "to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«I can't on Monday. ___ Tuesday?»",
        "opciones": [
          "How about",
          "What do",
          "When is",
          "Why not to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Qué significa «I'm seeing the doctor tomorrow»?",
        "opciones": [
          "Mañana tengo cita con el doctor",
          "Estoy viendo al doctor ahora",
          "Vi al doctor ayer",
          "Quiero ver al doctor"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I'm having a party on the 20th. Can you come? Sure! What time? At eight.",
        "pregunta": "¿Qué día es la fiesta?",
        "opciones": [
          "El 20",
          "El 8",
          "El 28",
          "El 12"
        ]
      },
      {
        "tipo": "listening",
        "audio": "We're not driving to the beach. We're taking the bus because it's cheaper.",
        "pregunta": "¿Cómo van a la playa?",
        "opciones": [
          "En autobús",
          "En carro",
          "En avión",
          "En tren"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¿Qué vas a hacer este fin de semana?",
        "respuestas": [
          "What are you doing this weekend",
          "What are you going to do this weekend"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Tengo una junta a las diez.",
        "respuestas": [
          "I have a meeting at ten",
          "I'm having a meeting at ten",
          "I have a meeting at 10",
          "I'm having a meeting at 10"
        ]
      }
    ]
  },
  {
    "id": "a2-09",
    "num": 9,
    "titulo": "Comparativos",
    "contexto": "Comparar ciudades, productos y personas",
    "explicacion": {
      "es": [
        "Los **comparativos** sirven para comparar **dos** cosas o personas, con ***than*** (que): *Monterrey is **bigger than** Puebla.* (Monterrey es más grande que Puebla.)",
        "**Adjetivos cortos** (una sílaba) agregan **-er**: *cheap, cheap**er**, tall, tall**er**, old, old**er***. Si terminan en **-e**, solo **-r** (*nice, nicer*). Consonante-vocal-consonante duplica (*big, bi**gg**er, hot, ho**tt**er*). Si terminan en **-y**, cambian a **-ier** (*easy, eas**ier**, happy, happ**ier***).",
        "**Adjetivos largos** (dos sílabas o más) usan ***more***: ***more** expensive, **more** beautiful, **more** comfortable*. Para lo contrario: ***less** expensive* (menos caro).",
        "**Irregulares:** ***good, better*** (mejor), ***bad, worse*** (peor), ***far, farther*** (más lejos). *This phone is **better than** my old one.*"
      ],
      "tabla": {
        "columnas": [
          "Adjetivo",
          "Comparativo",
          "Ejemplo"
        ],
        "filas": [
          [
            "cheap",
            "cheaper",
            "The bus is cheaper than the taxi."
          ],
          [
            "big",
            "bigger",
            "My house is bigger than yours."
          ],
          [
            "easy",
            "easier",
            "English is easier than Chinese."
          ],
          [
            "expensive",
            "more expensive",
            "This car is more expensive."
          ],
          [
            "good / bad",
            "better / worse",
            "Today is better than yesterday."
          ]
        ]
      },
      "ojo": [
        "**Nunca** juntes *more* y *-er*: *bigger* ✅, no *more bigger* ❌.",
        "*Than* (que, para comparar) ≠ *then* (luego). *She is taller **than** me.*",
        "En español *mejor* y *peor* no llevan *más*; en inglés tampoco: *better* ✅, no *more good* ❌.",
        "Para decir «mucho más»: ***much** bigger, **much** more expensive*. Para «un poco más»: ***a little** cheaper*.",
        "Después de *than*, al hablar se usa *me, him, her*: *She's older **than me**.* (o *than I am*)."
      ],
      "en": [
        "We use comparatives to compare two things, with than: Monterrey is bigger than Puebla.",
        "Short adjectives add e r: cheap, cheaper. Big, bigger. Easy, easier.",
        "Long adjectives use more: more expensive, more beautiful.",
        "Irregular: good, better. Bad, worse."
      ]
    },
    "vocabulario": [
      {
        "en": "bigger",
        "es": "más grande",
        "imagen": "Edificio enorme junto a una casita pequeña",
        "ejemplo": [
          "Mexico City is bigger than Guadalajara.",
          "La Ciudad de México es más grande que Guadalajara."
        ]
      },
      {
        "en": "smaller",
        "es": "más pequeño",
        "imagen": "Celular pequeño junto a una tablet grande",
        "ejemplo": [
          "My new phone is smaller than my old one.",
          "Mi celular nuevo es más pequeño que el viejo."
        ]
      },
      {
        "en": "cheaper",
        "es": "más barato",
        "imagen": "Dos etiquetas de precio en una tienda, una con un precio menor",
        "ejemplo": [
          "The bus is cheaper than the taxi.",
          "El camión es más barato que el taxi."
        ]
      },
      {
        "en": "more expensive",
        "es": "más caro",
        "imagen": "Reloj elegante en un aparador de lujo",
        "ejemplo": [
          "This watch is more expensive than my car!",
          "¡Este reloj es más caro que mi carro!"
        ]
      },
      {
        "en": "taller",
        "es": "más alto",
        "imagen": "Dos hermanos midiéndose espalda con espalda",
        "ejemplo": [
          "My son is taller than me now.",
          "Mi hijo ya es más alto que yo."
        ]
      },
      {
        "en": "older",
        "es": "mayor / más viejo",
        "imagen": "Abuelo y nieto sentados juntos en una banca",
        "ejemplo": [
          "My brother is three years older than me.",
          "Mi hermano es tres años mayor que yo."
        ]
      },
      {
        "en": "younger",
        "es": "menor / más joven",
        "imagen": "Hermana mayor cargando a su hermanita",
        "ejemplo": [
          "My sister is younger than me.",
          "Mi hermana es menor que yo."
        ]
      },
      {
        "en": "faster",
        "es": "más rápido",
        "imagen": "Tren bala pasando junto a un autobús",
        "ejemplo": [
          "The train is faster than the bus.",
          "El tren es más rápido que el camión."
        ]
      },
      {
        "en": "hotter",
        "es": "más caliente / hace más calor",
        "imagen": "Termómetro marcando mucho calor bajo el sol",
        "ejemplo": [
          "Mérida is hotter than Toluca.",
          "En Mérida hace más calor que en Toluca."
        ]
      },
      {
        "en": "colder",
        "es": "más frío",
        "imagen": "Pueblo cubierto de nieve en la montaña",
        "ejemplo": [
          "The mountains are colder than the beach.",
          "En las montañas hace más frío que en la playa."
        ]
      },
      {
        "en": "easier",
        "es": "más fácil",
        "imagen": "Niño sonriendo al resolver un rompecabezas sencillo",
        "ejemplo": [
          "Spanish is easier than German for me.",
          "Para mí el español es más fácil que el alemán."
        ]
      },
      {
        "en": "more comfortable",
        "es": "más cómodo",
        "imagen": "Persona hundiéndose feliz en un sillón suave",
        "ejemplo": [
          "This sofa is more comfortable than the old one.",
          "Este sillón es más cómodo que el viejo."
        ]
      },
      {
        "en": "better",
        "es": "mejor",
        "imagen": "Persona dando un pulgar arriba a un plato de comida",
        "ejemplo": [
          "This restaurant is better than the other one.",
          "Este restaurante es mejor que el otro."
        ]
      },
      {
        "en": "worse",
        "es": "peor",
        "imagen": "Persona con paraguas roto bajo una lluvia fuerte",
        "ejemplo": [
          "The traffic is worse today than yesterday.",
          "Hoy el tráfico está peor que ayer."
        ]
      },
      {
        "en": "more dangerous",
        "es": "más peligroso",
        "imagen": "Carretera de montaña con curvas cerradas y precipicio",
        "ejemplo": [
          "This road is more dangerous at night.",
          "Esta carretera es más peligrosa de noche."
        ]
      },
      {
        "en": "quieter",
        "es": "más tranquilo",
        "imagen": "Pueblito tranquilo con calles vacías al atardecer",
        "ejemplo": [
          "A small town is quieter than a big city.",
          "Un pueblo es más tranquilo que una ciudad grande."
        ]
      }
    ],
    "grupos": [
      {
        "id": "ciudades",
        "titulo": "Comparar ciudades",
        "icono": "🏙️",
        "patron": [
          "busier than…",
          "safer than…",
          "more interesting than…"
        ],
        "palabras": [
          {
            "en": "busier",
            "es": "más transitado",
            "imagen": "Avenida llena de gente y carros en hora pico",
            "ejemplo": [
              "The city center is busier than my neighborhood.",
              "El centro es más transitado que mi colonia."
            ]
          },
          {
            "en": "safer",
            "es": "más seguro",
            "imagen": "Parque de colonia tranquila con familias paseando",
            "ejemplo": [
              "This neighborhood is safer than the old one.",
              "Esta colonia es más segura que la anterior."
            ]
          },
          {
            "en": "more polluted",
            "es": "más contaminado",
            "imagen": "Ciudad con smog sobre los edificios",
            "ejemplo": [
              "Big cities are more polluted than small towns.",
              "Las ciudades grandes están más contaminadas que los pueblos."
            ]
          },
          {
            "en": "noisier",
            "es": "más ruidoso",
            "imagen": "Calle con obras, cláxones y gente",
            "ejemplo": [
              "My street is noisier than yours.",
              "Mi calle es más ruidosa que la tuya."
            ]
          },
          {
            "en": "cleaner",
            "es": "más limpio",
            "imagen": "Calle limpia con árboles y botes de basura",
            "ejemplo": [
              "This beach is cleaner than the other one.",
              "Esta playa está más limpia que la otra."
            ]
          },
          {
            "en": "more beautiful",
            "es": "más bonito",
            "imagen": "Pueblo colonial con calles de colores",
            "ejemplo": [
              "Guanajuato is more beautiful than I thought.",
              "Guanajuato es más bonito de lo que pensaba."
            ]
          },
          {
            "en": "more crowded",
            "es": "más lleno de gente",
            "imagen": "Metro lleno de pasajeros en hora pico",
            "ejemplo": [
              "The subway is more crowded in the morning.",
              "El metro está más lleno en la mañana."
            ]
          },
          {
            "en": "farther",
            "es": "más lejos",
            "imagen": "Señal de carretera con distancias a varias ciudades",
            "ejemplo": [
              "My office is farther than your school.",
              "Mi oficina está más lejos que tu escuela."
            ]
          }
        ]
      },
      {
        "id": "productos",
        "titulo": "Comparar productos",
        "icono": "🛍️",
        "patron": [
          "lighter than…",
          "more modern than…",
          "much better than…"
        ],
        "palabras": [
          {
            "en": "lighter",
            "es": "más ligero",
            "imagen": "Laptop delgada levantada con una mano",
            "ejemplo": [
              "This laptop is lighter than mine.",
              "Esta laptop es más ligera que la mía."
            ]
          },
          {
            "en": "heavier",
            "es": "más pesado",
            "imagen": "Persona cargando una maleta muy pesada",
            "ejemplo": [
              "My suitcase is heavier than yours.",
              "Mi maleta pesa más que la tuya."
            ]
          },
          {
            "en": "more modern",
            "es": "más moderno",
            "imagen": "Cocina moderna con aparatos nuevos",
            "ejemplo": [
              "The new model is more modern.",
              "El modelo nuevo es más moderno."
            ]
          },
          {
            "en": "stronger",
            "es": "más resistente / más fuerte",
            "imagen": "Botas de trabajo resistentes sobre piedras",
            "ejemplo": [
              "These boots are stronger than the cheap ones.",
              "Estas botas son más resistentes que las baratas."
            ]
          },
          {
            "en": "much better",
            "es": "mucho mejor",
            "imagen": "Persona feliz probando unos audífonos nuevos",
            "ejemplo": [
              "The new headphones are much better.",
              "Los audífonos nuevos son mucho mejores."
            ]
          },
          {
            "en": "a little cheaper",
            "es": "un poco más barato",
            "imagen": "Vendedor ofreciendo un descuento en un mercado",
            "ejemplo": [
              "The blue one is a little cheaper.",
              "El azul es un poco más barato."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Mexico City is bigger than Guadalajara.",
        "es": "La Ciudad de México es más grande que Guadalajara."
      },
      {
        "en": "The bus is cheaper than the taxi.",
        "es": "El camión es más barato que el taxi."
      },
      {
        "en": "My son is taller than me now.",
        "es": "Mi hijo ya es más alto que yo."
      },
      {
        "en": "This restaurant is better than the other one.",
        "es": "Este restaurante es mejor que el otro."
      },
      {
        "en": "Mérida is hotter than Toluca.",
        "es": "En Mérida hace más calor que en Toluca."
      },
      {
        "en": "The traffic is worse today than yesterday.",
        "es": "Hoy el tráfico está peor que ayer."
      },
      {
        "en": "My brother is three years older than me.",
        "es": "Mi hermano es tres años mayor que yo."
      },
      {
        "en": "Which is more expensive, the red one or the black one?",
        "es": "¿Cuál es más caro, el rojo o el negro?",
        "imagen": "Dos bolsas, una roja y una negra, en el aparador de una tienda"
      },
      {
        "en": "A small town is quieter than a big city.",
        "es": "Un pueblo es más tranquilo que una ciudad grande."
      },
      {
        "en": "This laptop is lighter than mine.",
        "es": "Esta laptop es más ligera que la mía."
      }
    ],
    "frases": [
      {
        "en": "Life in a small town is quieter and cheaper, but the city is more exciting.",
        "es": "La vida en un pueblo es más tranquila y barata, pero la ciudad es más emocionante.",
        "imagen": "Contraste entre un pueblo tranquilo y una ciudad iluminada de noche"
      },
      {
        "en": "My new apartment is smaller than the old one, but it's much closer to my office.",
        "es": "Mi nuevo departamento es más pequeño que el anterior, pero está mucho más cerca de mi oficina.",
        "imagen": "Persona saliendo de un edificio y caminando a su oficina en la esquina"
      },
      {
        "en": "The black shoes are more comfortable, but the brown ones are cheaper.",
        "es": "Los zapatos negros son más cómodos, pero los cafés son más baratos.",
        "imagen": "Persona probándose zapatos en una zapatería con dos pares enfrente"
      },
      {
        "en": "Is English more difficult than Spanish? I think it's easier to start, but harder later.",
        "es": "¿Es el inglés más difícil que el español? Creo que es más fácil empezar, pero más difícil después.",
        "imagen": "Estudiantes de inglés pensando frente a un pizarrón lleno de palabras"
      },
      {
        "en": "My sister is younger than me, but she's much taller.",
        "es": "Mi hermana es menor que yo, pero es mucho más alta.",
        "imagen": "Dos hermanas, la menor más alta que la mayor, riéndose"
      },
      {
        "en": "The weather in Monterrey is hotter and drier than in Veracruz.",
        "es": "El clima en Monterrey es más caluroso y seco que en Veracruz.",
        "imagen": "Cerro de la Silla bajo un sol intenso"
      },
      {
        "en": "This phone is more expensive, but the camera is much better.",
        "es": "Este celular es más caro, pero la cámara es mucho mejor.",
        "imagen": "Persona tomando una foto profesional con su celular"
      },
      {
        "en": "Today I feel better than yesterday, but I'm still a little tired.",
        "es": "Hoy me siento mejor que ayer, pero todavía estoy un poco cansado.",
        "imagen": "Persona recuperándose en el sofá con una sonrisa y un té"
      },
      {
        "en": "The subway is faster than the bus, but it's more crowded.",
        "es": "El metro es más rápido que el camión, pero va más lleno.",
        "imagen": "Vagón de metro lleno de pasajeros"
      },
      {
        "en": "My grandmother's food is better than any restaurant!",
        "es": "¡La comida de mi abuela es mejor que la de cualquier restaurante!",
        "imagen": "Abuela sirviendo enchiladas a sus nietos en la mesa"
      }
    ],
    "listening": [
      {
        "audio": "The blue jacket is cheaper than the black one, but I like the black one more.",
        "pregunta": "¿Cuál es más barata?",
        "opciones": [
          "La azul",
          "La negra",
          "Las dos cuestan igual",
          "La roja"
        ]
      },
      {
        "audio": "My brother is two years younger than me, but he's taller.",
        "pregunta": "¿Cómo es el hermano?",
        "opciones": [
          "Menor y más alto",
          "Mayor y más alto",
          "Menor y más bajo",
          "Mayor y más bajo"
        ]
      },
      {
        "audio": "Querétaro is smaller than Mexico City, and it's much quieter.",
        "pregunta": "¿Cómo es Querétaro comparado con la Ciudad de México?",
        "opciones": [
          "Más pequeño y más tranquilo",
          "Más grande y más ruidoso",
          "Igual de grande",
          "Más caro"
        ]
      },
      {
        "audio": "The train is faster than the bus, but it's more expensive.",
        "pregunta": "¿Qué es más caro?",
        "opciones": [
          "El tren",
          "El camión",
          "El taxi",
          "El avión"
        ]
      },
      {
        "audio": "The weather today is worse than yesterday. It's raining a lot.",
        "pregunta": "¿Cómo está el clima hoy?",
        "opciones": [
          "Peor que ayer",
          "Mejor que ayer",
          "Igual que ayer",
          "Más caliente"
        ]
      }
    ],
    "lectura": {
      "titulo": "Two cities, one choice",
      "texto": "Andrea has a job offer in two cities: Monterrey and Mérida. She needs to decide this week. Monterrey is bigger and more modern, and the salary there is higher. But the traffic is worse, and the air is more polluted. Mérida is smaller and quieter. It's also safer, and the houses are cheaper. The problem? Mérida is much hotter, and Andrea hates the heat. Monterrey is also hot in summer, but the winter is colder. Andrea's mother lives in Mérida, so her family is closer there. In the end, Andrea makes her decision: a smaller salary, but a better life. She's moving to Mérida next month, and she's buying a lot of fans!",
      "preguntas": [
        {
          "pregunta": "¿En qué ciudad el sueldo es más alto?",
          "opciones": [
            "En Monterrey",
            "En Mérida",
            "Es igual en las dos",
            "No lo dice"
          ]
        },
        {
          "pregunta": "¿Cuál es el problema de Mérida para Andrea?",
          "opciones": [
            "Hace mucho más calor",
            "Es más peligrosa",
            "Las casas son más caras",
            "Hay más tráfico"
          ]
        },
        {
          "pregunta": "¿Quién vive en Mérida?",
          "opciones": [
            "La mamá de Andrea",
            "Su hermano",
            "Su novio",
            "Su jefe"
          ]
        },
        {
          "pregunta": "¿Qué va a comprar Andrea?",
          "opciones": [
            "Muchos ventiladores",
            "Un carro",
            "Una casa grande",
            "Ropa de invierno"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Escribe el comparativo.",
        "pregunta": "cheap → ___",
        "respuestas": [
          "cheaper"
        ]
      },
      {
        "instruccion": "Escribe el comparativo.",
        "pregunta": "big → ___",
        "respuestas": [
          "bigger"
        ]
      },
      {
        "instruccion": "Escribe el comparativo.",
        "pregunta": "easy → ___",
        "respuestas": [
          "easier"
        ]
      },
      {
        "instruccion": "Escribe el comparativo.",
        "pregunta": "expensive → ___",
        "respuestas": [
          "more expensive"
        ]
      },
      {
        "instruccion": "Escribe el comparativo.",
        "pregunta": "good → ___",
        "respuestas": [
          "better"
        ]
      },
      {
        "instruccion": "Escribe el comparativo.",
        "pregunta": "bad → ___",
        "respuestas": [
          "worse"
        ]
      },
      {
        "instruccion": "Completa con than o then.",
        "pregunta": "She is older ___ me.",
        "respuestas": [
          "than"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "El tren es más rápido que el camión.",
        "respuestas": [
          "The train is faster than the bus"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Mi hermano es mayor que yo.",
        "respuestas": [
          "My brother is older than me",
          "My brother is older than I am"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "This car is more bigger than that one.",
        "respuestas": [
          "This car is bigger than that one"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "My house is ___ than yours.",
        "opciones": [
          "bigger",
          "more big",
          "biger",
          "more bigger"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "This sofa is ___ than the old one.",
        "opciones": [
          "more comfortable",
          "comfortabler",
          "most comfortable",
          "comfortable"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Today is ___ than yesterday. I feel great!",
        "opciones": [
          "better",
          "gooder",
          "more good",
          "best"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The test was ___ than I thought.",
        "opciones": [
          "easier",
          "easyer",
          "more easy",
          "easiest"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She is taller ___ her mother.",
        "opciones": [
          "than",
          "then",
          "that",
          "as"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The traffic is ___ in the morning.",
        "opciones": [
          "worse",
          "badder",
          "more bad",
          "worst"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I prefer the small car. It's cheaper and it uses less gas.",
        "pregunta": "¿Por qué prefiere el carro pequeño?",
        "opciones": [
          "Es más barato y gasta menos gasolina",
          "Es más rápido",
          "Es más bonito",
          "Es más grande"
        ]
      },
      {
        "tipo": "listening",
        "audio": "My new job is farther from home, but the people are nicer.",
        "pregunta": "¿Qué es mejor en el trabajo nuevo?",
        "opciones": [
          "La gente es más amable",
          "Está más cerca",
          "Pagan más",
          "El horario"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: más barato",
        "respuestas": [
          "cheaper"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Este es mejor.",
        "respuestas": [
          "This is better",
          "This one is better"
        ]
      }
    ]
  },
  {
    "id": "a2-10",
    "num": 10,
    "titulo": "Superlativos",
    "contexto": "Récords y lo mejor del mundo",
    "explicacion": {
      "es": [
        "El **superlativo** dice que algo es **el más** (o el menos) de un grupo: *Mount Everest is **the highest** mountain in the world.* (El Everest es la montaña más alta del mundo.)",
        "**Adjetivos cortos:** ***the*** + adjetivo + **-est**: *the tall**est**, the cheap**est**, the old**est***. Mismas reglas que el comparativo: *nice, the nic**est**, big, the bi**gg**est, happy, the happ**iest***.",
        "**Adjetivos largos:** ***the most*** + adjetivo: ***the most** expensive, **the most** beautiful, **the most** popular*. Lo contrario: ***the least*** (el menos).",
        "**Irregulares:** ***good, the best*** (el mejor), ***bad, the worst*** (el peor), ***far, the farthest***. Después del superlativo se usa ***in*** para lugares o grupos (*in the world, in my family*) y ***of*** para periodos (*of the year, of my life*)."
      ],
      "tabla": {
        "columnas": [
          "Adjetivo",
          "Comparativo",
          "Superlativo"
        ],
        "filas": [
          [
            "tall",
            "taller",
            "the tallest"
          ],
          [
            "big",
            "bigger",
            "the biggest"
          ],
          [
            "happy",
            "happier",
            "the happiest"
          ],
          [
            "beautiful",
            "more beautiful",
            "the most beautiful"
          ],
          [
            "good",
            "better",
            "the best"
          ],
          [
            "bad",
            "worse",
            "the worst"
          ]
        ]
      },
      "ojo": [
        "No olvides ***the***: *She's **the** best student* ✅, no *She's best student* ❌.",
        "*The most biggest* ❌, ***the biggest*** ✅. Nunca juntes *most* y *-est*.",
        "«El más alto **del** mundo» = *the tallest **in** the world* ✅, no *of the world* ❌.",
        "«El mejor día **de** mi vida» = *the best day **of** my life* ✅.",
        "Con presente perfecto suena muy natural: *It's **the best** movie **I've ever seen**.* (Es la mejor película que he visto.)"
      ],
      "en": [
        "The superlative says something is the most in a group: Mount Everest is the highest mountain in the world.",
        "Short adjectives: the tallest, the cheapest, the biggest.",
        "Long adjectives: the most expensive, the most beautiful.",
        "Irregular: good, the best. Bad, the worst."
      ]
    },
    "vocabulario": [
      {
        "en": "the tallest",
        "es": "el más alto",
        "imagen": "Rascacielos altísimo sobresaliendo entre otros edificios",
        "ejemplo": [
          "The Burj Khalifa is the tallest building in the world.",
          "El Burj Khalifa es el edificio más alto del mundo."
        ]
      },
      {
        "en": "the biggest",
        "es": "el más grande",
        "imagen": "Ballena azul enorme nadando en el océano",
        "ejemplo": [
          "The blue whale is the biggest animal in the world.",
          "La ballena azul es el animal más grande del mundo."
        ]
      },
      {
        "en": "the longest",
        "es": "el más largo",
        "imagen": "Río largo serpenteando por la selva vista desde arriba",
        "ejemplo": [
          "The Nile is one of the longest rivers in the world.",
          "El Nilo es uno de los ríos más largos del mundo."
        ]
      },
      {
        "en": "the fastest",
        "es": "el más rápido",
        "imagen": "Guepardo corriendo a toda velocidad en la sabana",
        "ejemplo": [
          "The cheetah is the fastest animal on land.",
          "El guepardo es el animal terrestre más rápido."
        ]
      },
      {
        "en": "the oldest",
        "es": "el más viejo / el mayor",
        "imagen": "Abuela muy anciana sonriendo con su pastel de cumpleaños",
        "ejemplo": [
          "My grandma is the oldest person in our family.",
          "Mi abuela es la persona mayor de nuestra familia."
        ]
      },
      {
        "en": "the youngest",
        "es": "el más joven / el menor",
        "imagen": "Bebé en brazos rodeado de su familia",
        "ejemplo": [
          "My little brother is the youngest.",
          "Mi hermanito es el menor."
        ]
      },
      {
        "en": "the best",
        "es": "el mejor",
        "imagen": "Trofeo dorado brillando sobre una mesa",
        "ejemplo": [
          "This is the best taco in town!",
          "¡Este es el mejor taco de la ciudad!"
        ]
      },
      {
        "en": "the worst",
        "es": "el peor",
        "imagen": "Persona empapada bajo la lluvia con el paraguas volteado",
        "ejemplo": [
          "That was the worst day of my life.",
          "Ese fue el peor día de mi vida."
        ]
      },
      {
        "en": "the most expensive",
        "es": "el más caro",
        "imagen": "Carro deportivo de lujo en una exhibición",
        "ejemplo": [
          "It's the most expensive car in the store.",
          "Es el carro más caro de la tienda."
        ]
      },
      {
        "en": "the most beautiful",
        "es": "el más hermoso",
        "imagen": "Atardecer sobre una playa con palmeras",
        "ejemplo": [
          "This is the most beautiful beach in Mexico.",
          "Esta es la playa más hermosa de México."
        ]
      },
      {
        "en": "the most popular",
        "es": "el más popular",
        "imagen": "Estadio lleno de aficionados celebrando",
        "ejemplo": [
          "Soccer is the most popular sport in the world.",
          "El fútbol es el deporte más popular del mundo."
        ]
      },
      {
        "en": "the hottest",
        "es": "el más caluroso",
        "imagen": "Desierto con dunas bajo un sol ardiente",
        "ejemplo": [
          "The Sahara is one of the hottest places on Earth.",
          "El Sahara es uno de los lugares más calurosos de la Tierra."
        ]
      },
      {
        "en": "the coldest",
        "es": "el más frío",
        "imagen": "Paisaje helado de la Antártida con pingüinos",
        "ejemplo": [
          "Antarctica is the coldest place on Earth.",
          "La Antártida es el lugar más frío de la Tierra."
        ]
      },
      {
        "en": "the highest",
        "es": "el más alto (montaña)",
        "imagen": "Cumbre nevada del Everest",
        "ejemplo": [
          "Mount Everest is the highest mountain in the world.",
          "El Everest es la montaña más alta del mundo."
        ]
      },
      {
        "en": "the most dangerous",
        "es": "el más peligroso",
        "imagen": "Tiburón nadando cerca de la superficie",
        "ejemplo": [
          "Some people think the shark is the most dangerous animal.",
          "Algunos piensan que el tiburón es el animal más peligroso."
        ]
      },
      {
        "en": "the funniest",
        "es": "el más chistoso",
        "imagen": "Amigo haciendo reír a todos en una reunión",
        "ejemplo": [
          "My uncle is the funniest person in my family.",
          "Mi tío es la persona más chistosa de mi familia."
        ]
      }
    ],
    "grupos": [
      {
        "id": "familia",
        "titulo": "En mi familia y mi grupo",
        "icono": "👨‍👩‍👧",
        "patron": [
          "the tallest in my family",
          "the best in my class",
          "the nicest person I know"
        ],
        "palabras": [
          {
            "en": "the tallest in my family",
            "es": "el más alto de mi familia",
            "imagen": "Foto familiar donde un joven sobresale por su altura",
            "ejemplo": [
              "My cousin is the tallest in my family.",
              "Mi primo es el más alto de mi familia."
            ]
          },
          {
            "en": "the best student in the class",
            "es": "el mejor alumno de la clase",
            "imagen": "Estudiante recibiendo un diploma frente a sus compañeros",
            "ejemplo": [
              "She's the best student in the class.",
              "Ella es la mejor alumna de la clase."
            ]
          },
          {
            "en": "the nicest person I know",
            "es": "la persona más amable que conozco",
            "imagen": "Señora ayudando a un niño a cruzar la calle",
            "ejemplo": [
              "My neighbor is the nicest person I know.",
              "Mi vecina es la persona más amable que conozco."
            ]
          },
          {
            "en": "the best cook",
            "es": "la mejor cocinera",
            "imagen": "Abuela sacando un pastel del horno",
            "ejemplo": [
              "My mom is the best cook in the world.",
              "Mi mamá es la mejor cocinera del mundo."
            ]
          },
          {
            "en": "the most patient",
            "es": "el más paciente",
            "imagen": "Maestro explicando con calma a un niño",
            "ejemplo": [
              "My dad is the most patient person in the house.",
              "Mi papá es la persona más paciente de la casa."
            ]
          },
          {
            "en": "the laziest",
            "es": "el más flojo",
            "imagen": "Gato dormido sobre el sofá todo el día",
            "ejemplo": [
              "Our cat is the laziest member of the family.",
              "Nuestro gato es el miembro más flojo de la familia."
            ]
          }
        ]
      },
      {
        "id": "vida",
        "titulo": "Lo mejor de mi vida",
        "icono": "⭐",
        "patron": [
          "the best day of my life",
          "the worst movie I've ever seen",
          "the most important thing"
        ],
        "palabras": [
          {
            "en": "the best day of my life",
            "es": "el mejor día de mi vida",
            "imagen": "Pareja recién casada lanzando confeti",
            "ejemplo": [
              "My wedding was the best day of my life.",
              "Mi boda fue el mejor día de mi vida."
            ]
          },
          {
            "en": "the worst movie I've ever seen",
            "es": "la peor película que he visto",
            "imagen": "Persona dormida en el cine con palomitas tiradas",
            "ejemplo": [
              "It was the worst movie I've ever seen.",
              "Fue la peor película que he visto."
            ]
          },
          {
            "en": "the most important thing",
            "es": "lo más importante",
            "imagen": "Familia abrazada en la sala",
            "ejemplo": [
              "Family is the most important thing.",
              "La familia es lo más importante."
            ]
          },
          {
            "en": "the happiest moment",
            "es": "el momento más feliz",
            "imagen": "Papá cargando a su bebé recién nacido",
            "ejemplo": [
              "That was the happiest moment of my life.",
              "Ese fue el momento más feliz de mi vida."
            ]
          },
          {
            "en": "the most difficult exam",
            "es": "el examen más difícil",
            "imagen": "Estudiante preocupado frente a un examen muy largo",
            "ejemplo": [
              "It was the most difficult exam of the year.",
              "Fue el examen más difícil del año."
            ]
          },
          {
            "en": "the best trip",
            "es": "el mejor viaje",
            "imagen": "Amigos celebrando en la cima de una montaña",
            "ejemplo": [
              "Our trip to Peru was the best trip ever.",
              "Nuestro viaje a Perú fue el mejor viaje de todos."
            ]
          },
          {
            "en": "the cheapest option",
            "es": "la opción más barata",
            "imagen": "Persona comparando precios en su celular",
            "ejemplo": [
              "The bus is the cheapest option.",
              "El camión es la opción más barata."
            ]
          },
          {
            "en": "the most exciting game",
            "es": "el partido más emocionante",
            "imagen": "Aficionados saltando de emoción en un estadio",
            "ejemplo": [
              "It was the most exciting game of the season.",
              "Fue el partido más emocionante de la temporada."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Mount Everest is the highest mountain in the world.",
        "es": "El Everest es la montaña más alta del mundo."
      },
      {
        "en": "The cheetah is the fastest animal on land.",
        "es": "El guepardo es el animal terrestre más rápido."
      },
      {
        "en": "This is the best taco in town!",
        "es": "¡Este es el mejor taco de la ciudad!"
      },
      {
        "en": "That was the worst day of my life.",
        "es": "Ese fue el peor día de mi vida."
      },
      {
        "en": "My grandma is the oldest person in our family.",
        "es": "Mi abuela es la persona mayor de nuestra familia."
      },
      {
        "en": "Soccer is the most popular sport in the world.",
        "es": "El fútbol es el deporte más popular del mundo."
      },
      {
        "en": "She's the best student in the class.",
        "es": "Ella es la mejor alumna de la clase."
      },
      {
        "en": "Family is the most important thing.",
        "es": "La familia es lo más importante."
      },
      {
        "en": "What's the most beautiful place you know?",
        "es": "¿Cuál es el lugar más hermoso que conoces?",
        "imagen": "Persona contemplando una cascada en la selva"
      },
      {
        "en": "Which is the cheapest phone in the store?",
        "es": "¿Cuál es el celular más barato de la tienda?",
        "imagen": "Cliente mirando una vitrina de celulares con precios"
      }
    ],
    "frases": [
      {
        "en": "The Burj Khalifa in Dubai is the tallest building in the world, with more than 800 meters.",
        "es": "El Burj Khalifa en Dubái es el edificio más alto del mundo, con más de 800 metros.",
        "imagen": "Rascacielos de Dubái visto desde abajo con el cielo azul"
      },
      {
        "en": "For me, December is the best month of the year because the whole family is together.",
        "es": "Para mí, diciembre es el mejor mes del año porque toda la familia está junta.",
        "imagen": "Familia reunida alrededor de un árbol de Navidad"
      },
      {
        "en": "My uncle Pepe is the funniest person in my family. He always makes everybody laugh.",
        "es": "Mi tío Pepe es la persona más chistosa de mi familia. Siempre hace reír a todos.",
        "imagen": "Tío contando chistes en una comida familiar y todos riendo"
      },
      {
        "en": "The Pacific is the biggest and deepest ocean on our planet.",
        "es": "El Pacífico es el océano más grande y profundo de nuestro planeta.",
        "imagen": "Vista aérea del océano Pacífico con olas"
      },
      {
        "en": "That was the most difficult exam of the year, but I passed!",
        "es": "¡Ese fue el examen más difícil del año, pero lo pasé!",
        "imagen": "Estudiante celebrando con su examen aprobado en la mano"
      },
      {
        "en": "What's the most expensive thing you've ever bought?",
        "es": "¿Qué es lo más caro que has comprado?",
        "imagen": "Persona entregando su tarjeta en una tienda de electrónicos"
      },
      {
        "en": "Antarctica is the coldest, windiest, and driest continent on Earth.",
        "es": "La Antártida es el continente más frío, con más viento y más seco de la Tierra.",
        "imagen": "Glaciar enorme en la Antártida con pingüinos"
      },
      {
        "en": "This is the cheapest option, but it isn't the best one.",
        "es": "Esta es la opción más barata, pero no es la mejor.",
        "imagen": "Dos productos en un estante: uno barato y otro de mejor calidad"
      },
      {
        "en": "The day my daughter was born was the happiest day of my life.",
        "es": "El día que nació mi hija fue el día más feliz de mi vida.",
        "imagen": "Mamá abrazando a su bebé recién nacida en el hospital"
      },
      {
        "en": "Mexico City is one of the biggest cities in the world.",
        "es": "La Ciudad de México es una de las ciudades más grandes del mundo.",
        "imagen": "Vista aérea de la Ciudad de México extendiéndose hasta el horizonte"
      }
    ],
    "listening": [
      {
        "audio": "This is the most comfortable chair in the house. It's my dad's favorite.",
        "pregunta": "¿Cómo es la silla?",
        "opciones": [
          "La más cómoda de la casa",
          "La más vieja",
          "La más cara",
          "La más pequeña"
        ]
      },
      {
        "audio": "My sister is the youngest, but she's the tallest in the family.",
        "pregunta": "¿Cómo es la hermana?",
        "opciones": [
          "La menor y la más alta",
          "La mayor y la más alta",
          "La menor y la más baja",
          "La mayor y la más baja"
        ]
      },
      {
        "audio": "The worst part of the trip was the flight. It was twelve hours long.",
        "pregunta": "¿Qué fue lo peor del viaje?",
        "opciones": [
          "El vuelo",
          "La comida",
          "El clima",
          "El lugar donde se quedaron"
        ]
      },
      {
        "audio": "This is the cheapest restaurant in the area, and the food is delicious.",
        "pregunta": "¿Cómo es el restaurante?",
        "opciones": [
          "El más barato y la comida es deliciosa",
          "El más caro",
          "El más grande",
          "El más lejano"
        ]
      },
      {
        "audio": "What's the best season to visit Canada? I think autumn is the most beautiful.",
        "pregunta": "¿Qué estación le parece más bonita?",
        "opciones": [
          "El otoño",
          "El invierno",
          "La primavera",
          "El verano"
        ]
      }
    ],
    "lectura": {
      "titulo": "Amazing world records",
      "texto": "The world is full of amazing records. The tallest man in history was Robert Wadlow from the United States. He was 2.72 meters tall! The oldest person was Jeanne Calment from France. She lived for 122 years. The biggest animal that ever lived is the blue whale; it's bigger than any dinosaur. The fastest man in the world is Usain Bolt from Jamaica. He ran 100 meters in only 9.58 seconds. And what about Mexico? One of the biggest pyramids in the world is in Cholula, Puebla. It's so big that there is a church on top of it, and many people think it's a hill. Which record is the most surprising for you?",
      "preguntas": [
        {
          "pregunta": "¿Cuánto medía Robert Wadlow?",
          "opciones": [
            "2.72 metros",
            "2.27 metros",
            "1.72 metros",
            "3.72 metros"
          ]
        },
        {
          "pregunta": "¿Cuántos años vivió Jeanne Calment?",
          "opciones": [
            "122",
            "112",
            "102",
            "132"
          ]
        },
        {
          "pregunta": "¿De dónde es Usain Bolt?",
          "opciones": [
            "De Jamaica",
            "De Estados Unidos",
            "De Francia",
            "De México"
          ]
        },
        {
          "pregunta": "¿Qué hay encima de la pirámide de Cholula?",
          "opciones": [
            "Una iglesia",
            "Un museo",
            "Un árbol enorme",
            "Una casa"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Escribe el superlativo.",
        "pregunta": "tall → the ___",
        "respuestas": [
          "tallest"
        ]
      },
      {
        "instruccion": "Escribe el superlativo.",
        "pregunta": "big → the ___",
        "respuestas": [
          "biggest"
        ]
      },
      {
        "instruccion": "Escribe el superlativo.",
        "pregunta": "happy → the ___",
        "respuestas": [
          "happiest"
        ]
      },
      {
        "instruccion": "Escribe el superlativo.",
        "pregunta": "good → the ___",
        "respuestas": [
          "best"
        ]
      },
      {
        "instruccion": "Escribe el superlativo.",
        "pregunta": "bad → the ___",
        "respuestas": [
          "worst"
        ]
      },
      {
        "instruccion": "Escribe el superlativo.",
        "pregunta": "expensive → the ___",
        "respuestas": [
          "most expensive"
        ]
      },
      {
        "instruccion": "Completa con in u of.",
        "pregunta": "It's the tallest building ___ the world.",
        "respuestas": [
          "in"
        ]
      },
      {
        "instruccion": "Completa con in u of.",
        "pregunta": "It was the best day ___ my life.",
        "respuestas": [
          "of"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Es la mejor película del año.",
        "respuestas": [
          "It's the best movie of the year",
          "It is the best movie of the year",
          "It's the best film of the year"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "She is the most tallest girl in the class.",
        "respuestas": [
          "She is the tallest girl in the class",
          "She's the tallest girl in the class"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "It's ___ restaurant in the city.",
        "opciones": [
          "the best",
          "the better",
          "the goodest",
          "best"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The blue whale is ___ animal in the world.",
        "opciones": [
          "the biggest",
          "the bigest",
          "the most big",
          "bigger"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "This is ___ beautiful beach in Mexico.",
        "opciones": [
          "the most",
          "the more",
          "most",
          "the much"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "It was ___ day of my life.",
        "opciones": [
          "the worst",
          "the baddest",
          "the worse",
          "the most bad"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "He's the oldest ___ the team.",
        "opciones": [
          "in",
          "of",
          "than",
          "at"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es correcta?",
        "opciones": [
          "She's the funniest person I know.",
          "She's the most funniest person I know.",
          "She's funniest person I know.",
          "She's the funnyest person I know."
        ]
      },
      {
        "tipo": "listening",
        "audio": "The biggest park in my city is near my house, and it has a beautiful lake.",
        "pregunta": "¿Dónde está el parque más grande de su ciudad?",
        "opciones": [
          "Cerca de su casa",
          "En el centro",
          "Cerca de su trabajo",
          "Lejos de la ciudad"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Who is the best player on your team? Marcos. He's the fastest.",
        "pregunta": "¿Por qué Marcos es el mejor?",
        "opciones": [
          "Es el más rápido",
          "Es el más alto",
          "Es el más fuerte",
          "Es el mayor"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: el más barato",
        "respuestas": [
          "the cheapest"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: la persona más importante",
        "respuestas": [
          "the most important person"
        ]
      }
    ]
  },
  {
    "id": "a2-11",
    "num": 11,
    "titulo": "As… as / not as… as",
    "contexto": "Comparaciones de igualdad",
    "explicacion": {
      "es": [
        "***As*** + adjetivo + ***as*** sirve para decir que dos cosas son **iguales**: *My brother is **as tall as** my dad.* (Mi hermano es tan alto como mi papá.)",
        "***Not as*** + adjetivo + ***as*** dice que algo es **menos** que lo otro: *The bus **isn't as fast as** the train.* (El camión no es tan rápido como el tren.) Es una forma amable de comparar.",
        "El adjetivo va en su forma **normal** (sin *-er* ni *more*): ***as big as, as expensive as, as good as***.",
        "Otras formas útiles: ***the same as*** (igual que): *My phone is **the same as** yours.* ***Similar to*** (parecido a) y ***different from*** (diferente de): *Mexican Spanish is **different from** Spanish from Spain.*"
      ],
      "tabla": {
        "columnas": [
          "Estructura",
          "Significado",
          "Ejemplo"
        ],
        "filas": [
          [
            "as … as",
            "igual",
            "Ana is as tall as Luis."
          ],
          [
            "not as … as",
            "menos",
            "My car isn't as fast as yours."
          ],
          [
            "the same as",
            "idéntico",
            "Your shoes are the same as mine."
          ],
          [
            "similar to",
            "parecido",
            "This song is similar to that one."
          ],
          [
            "different from",
            "diferente",
            "Tacos here are different from tacos there."
          ]
        ]
      },
      "ojo": [
        "No uses comparativo dentro de *as…as*: *as tall as* ✅, no *as taller as* ❌.",
        "Usa ***as*** las dos veces: *as big **as*** ✅, no *as big than* ❌ ni *as big like* ❌.",
        "*Not as cold as* = no tan frío como = más caliente. *Toluca isn't as hot as Mérida* = Mérida es más caliente.",
        "Expresiones fijas muy usadas: ***as soon as possible*** (lo antes posible), ***as much as possible*** (lo más posible).",
        "*The same **as*** ✅, no *the same than* ❌ ni *the same that* ❌."
      ],
      "en": [
        "As plus adjective plus as means equal: My brother is as tall as my dad.",
        "Not as plus adjective plus as means less: The bus isn't as fast as the train.",
        "Other useful forms: the same as, similar to, different from."
      ]
    },
    "vocabulario": [
      {
        "en": "as tall as",
        "es": "tan alto como",
        "imagen": "Padre e hijo de la misma estatura espalda con espalda",
        "ejemplo": [
          "My son is as tall as me now.",
          "Mi hijo ya es tan alto como yo."
        ]
      },
      {
        "en": "as big as",
        "es": "tan grande como",
        "imagen": "Perro grande junto a un niño de su mismo tamaño",
        "ejemplo": [
          "This dog is as big as a pony!",
          "¡Este perro es tan grande como un pony!"
        ]
      },
      {
        "en": "as good as",
        "es": "tan bueno como",
        "imagen": "Dos platos de comida que se ven igual de deliciosos",
        "ejemplo": [
          "The new restaurant is as good as the old one.",
          "El restaurante nuevo es tan bueno como el viejo."
        ]
      },
      {
        "en": "as expensive as",
        "es": "tan caro como",
        "imagen": "Dos celulares de alta gama con precios iguales",
        "ejemplo": [
          "This phone is as expensive as a laptop.",
          "Este celular es tan caro como una laptop."
        ]
      },
      {
        "en": "as fast as",
        "es": "tan rápido como",
        "imagen": "Dos corredores llegando juntos a la meta",
        "ejemplo": [
          "She runs as fast as her brother.",
          "Ella corre tan rápido como su hermano."
        ]
      },
      {
        "en": "as old as",
        "es": "tan viejo como",
        "imagen": "Dos árboles enormes y antiguos lado a lado",
        "ejemplo": [
          "This church is as old as the city.",
          "Esta iglesia es tan antigua como la ciudad."
        ]
      },
      {
        "en": "not as cold as",
        "es": "no tan frío como",
        "imagen": "Persona con suéter ligero en un día fresco",
        "ejemplo": [
          "Today isn't as cold as yesterday.",
          "Hoy no hace tanto frío como ayer."
        ]
      },
      {
        "en": "not as easy as",
        "es": "no tan fácil como",
        "imagen": "Persona confundida armando un mueble con las instrucciones",
        "ejemplo": [
          "It isn't as easy as it looks.",
          "No es tan fácil como parece."
        ]
      },
      {
        "en": "not as busy as",
        "es": "no tan transitado como",
        "imagen": "Calle tranquila un domingo por la mañana",
        "ejemplo": [
          "Sunday isn't as busy as Monday.",
          "El domingo no hay tanto movimiento como el lunes."
        ]
      },
      {
        "en": "not as good as",
        "es": "no tan bueno como",
        "imagen": "Persona decepcionada al ver una película",
        "ejemplo": [
          "The second movie isn't as good as the first one.",
          "La segunda película no es tan buena como la primera."
        ]
      },
      {
        "en": "the same as",
        "es": "igual que",
        "imagen": "Dos amigas con la misma blusa riéndose",
        "ejemplo": [
          "Your dress is the same as mine!",
          "¡Tu vestido es igual al mío!"
        ]
      },
      {
        "en": "similar to",
        "es": "parecido a",
        "imagen": "Dos gemelas con peinados parecidos",
        "ejemplo": [
          "Portuguese is similar to Spanish.",
          "El portugués es parecido al español."
        ]
      },
      {
        "en": "different from",
        "es": "diferente de",
        "imagen": "Una manzana roja entre muchas manzanas verdes",
        "ejemplo": [
          "My sister is very different from me.",
          "Mi hermana es muy diferente a mí."
        ]
      },
      {
        "en": "as soon as possible",
        "es": "lo antes posible",
        "imagen": "Persona escribiendo un mensaje urgente en su celular",
        "ejemplo": [
          "Please call me as soon as possible.",
          "Por favor llámame lo antes posible."
        ]
      },
      {
        "en": "as much as possible",
        "es": "lo más posible",
        "imagen": "Persona leyendo muchos libros en una biblioteca",
        "ejemplo": [
          "I try to read as much as possible.",
          "Trato de leer lo más posible."
        ]
      },
      {
        "en": "just as",
        "es": "igual de",
        "imagen": "Dos hermanos sonriendo con la misma cara",
        "ejemplo": [
          "He's just as funny as his dad.",
          "Es igual de chistoso que su papá."
        ]
      }
    ],
    "grupos": [
      {
        "id": "gente",
        "titulo": "Comparar personas",
        "icono": "🧑‍🤝‍🧑",
        "patron": [
          "as friendly as…",
          "not as shy as…",
          "just as smart as…"
        ],
        "palabras": [
          {
            "en": "as friendly as",
            "es": "tan amigable como",
            "imagen": "Dos vecinos saludando con una sonrisa",
            "ejemplo": [
              "Our new neighbor is as friendly as the old one.",
              "El nuevo vecino es tan amigable como el anterior."
            ]
          },
          {
            "en": "not as shy as",
            "es": "no tan tímido como",
            "imagen": "Niña hablando con confianza frente a su clase",
            "ejemplo": [
              "My daughter isn't as shy as she was before.",
              "Mi hija ya no es tan tímida como antes."
            ]
          },
          {
            "en": "as smart as",
            "es": "tan inteligente como",
            "imagen": "Niña y niño resolviendo problemas de matemáticas juntos",
            "ejemplo": [
              "She's as smart as her mother.",
              "Es tan inteligente como su mamá."
            ]
          },
          {
            "en": "not as strong as",
            "es": "no tan fuerte como",
            "imagen": "Persona intentando cargar unas pesas pesadas",
            "ejemplo": [
              "I'm not as strong as my brother.",
              "No soy tan fuerte como mi hermano."
            ]
          },
          {
            "en": "as hardworking as",
            "es": "tan trabajador como",
            "imagen": "Padre e hijo trabajando juntos en el campo",
            "ejemplo": [
              "He's as hardworking as his father.",
              "Es tan trabajador como su padre."
            ]
          },
          {
            "en": "as patient as",
            "es": "tan paciente como",
            "imagen": "Abuela enseñando a tejer a su nieta",
            "ejemplo": [
              "Nobody is as patient as my grandma.",
              "Nadie es tan paciente como mi abuela."
            ]
          }
        ]
      },
      {
        "id": "igualdiferente",
        "titulo": "Igual, parecido, diferente",
        "icono": "⚖️",
        "patron": [
          "the same as…",
          "similar to…",
          "different from…"
        ],
        "palabras": [
          {
            "en": "the same size",
            "es": "del mismo tamaño",
            "imagen": "Dos cajas iguales una junto a la otra",
            "ejemplo": [
              "These two boxes are the same size.",
              "Estas dos cajas son del mismo tamaño."
            ]
          },
          {
            "en": "the same age",
            "es": "de la misma edad",
            "imagen": "Dos amigos con pasteles de cumpleaños iguales",
            "ejemplo": [
              "Ana and I are the same age.",
              "Ana y yo tenemos la misma edad."
            ]
          },
          {
            "en": "the same color",
            "es": "del mismo color",
            "imagen": "Dos carros rojos estacionados juntos",
            "ejemplo": [
              "My car is the same color as yours.",
              "Mi carro es del mismo color que el tuyo."
            ]
          },
          {
            "en": "look alike",
            "es": "se parecen",
            "imagen": "Hermanos gemelos con la misma ropa",
            "ejemplo": [
              "My cousins look alike.",
              "Mis primos se parecen."
            ]
          },
          {
            "en": "completely different",
            "es": "completamente diferente",
            "imagen": "Una casa moderna junto a una casa antigua",
            "ejemplo": [
              "The two houses are completely different.",
              "Las dos casas son completamente diferentes."
            ]
          },
          {
            "en": "very similar",
            "es": "muy parecido",
            "imagen": "Dos perros de la misma raza jugando",
            "ejemplo": [
              "Our dogs are very similar.",
              "Nuestros perros son muy parecidos."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "My son is as tall as me now.",
        "es": "Mi hijo ya es tan alto como yo."
      },
      {
        "en": "Today isn't as cold as yesterday.",
        "es": "Hoy no hace tanto frío como ayer."
      },
      {
        "en": "It isn't as easy as it looks.",
        "es": "No es tan fácil como parece."
      },
      {
        "en": "Your dress is the same as mine!",
        "es": "¡Tu vestido es igual al mío!"
      },
      {
        "en": "Portuguese is similar to Spanish.",
        "es": "El portugués es parecido al español."
      },
      {
        "en": "Please call me as soon as possible.",
        "es": "Por favor llámame lo antes posible."
      },
      {
        "en": "The second movie isn't as good as the first one.",
        "es": "La segunda película no es tan buena como la primera."
      },
      {
        "en": "My sister is very different from me.",
        "es": "Mi hermana es muy diferente a mí."
      },
      {
        "en": "Ana and I are the same age.",
        "es": "Ana y yo tenemos la misma edad."
      },
      {
        "en": "Nobody is as patient as my grandma.",
        "es": "Nadie es tan paciente como mi abuela."
      }
    ],
    "frases": [
      {
        "en": "The new phone isn't as expensive as I thought, and it's just as good as the old model.",
        "es": "El celular nuevo no es tan caro como pensaba, y es igual de bueno que el modelo anterior.",
        "imagen": "Persona sorprendida mirando el precio de un celular en una tienda"
      },
      {
        "en": "Guadalajara isn't as big as Mexico City, but it's just as interesting.",
        "es": "Guadalajara no es tan grande como la Ciudad de México, pero es igual de interesante.",
        "imagen": "Catedral de Guadalajara con gente paseando en la plaza"
      },
      {
        "en": "My brother and I look alike, but we're completely different people.",
        "es": "Mi hermano y yo nos parecemos, pero somos personas completamente diferentes.",
        "imagen": "Dos hermanos parecidos: uno leyendo y otro jugando fútbol"
      },
      {
        "en": "Learning English isn't as difficult as people think, but you need to practice every day.",
        "es": "Aprender inglés no es tan difícil como la gente cree, pero necesitas practicar diario.",
        "imagen": "Persona practicando inglés con audífonos mientras camina"
      },
      {
        "en": "This winter isn't as cold as last year, so we don't need the heater.",
        "es": "Este invierno no es tan frío como el año pasado, así que no necesitamos el calentador.",
        "imagen": "Familia en la sala con suéteres ligeros y el calentador apagado"
      },
      {
        "en": "Homemade tortillas are not the same as tortillas from the supermarket.",
        "es": "Las tortillas hechas a mano no son iguales a las del supermercado.",
        "imagen": "Señora haciendo tortillas a mano en un comal"
      },
      {
        "en": "I try to drink as much water as possible when it's hot.",
        "es": "Trato de tomar toda el agua posible cuando hace calor.",
        "imagen": "Persona tomando agua de una botella en un día soleado"
      },
      {
        "en": "My daughter is as tall as her mom, and she's only twelve!",
        "es": "¡Mi hija es tan alta como su mamá y solo tiene doce años!",
        "imagen": "Mamá e hija de la misma estatura mirándose sorprendidas"
      },
      {
        "en": "The food here is similar to my grandmother's food, but it isn't as good.",
        "es": "La comida aquí es parecida a la de mi abuela, pero no es tan buena.",
        "imagen": "Persona probando un mole en un restaurante con cara pensativa"
      },
      {
        "en": "Please send me the report as soon as possible. The meeting starts in an hour.",
        "es": "Por favor mándame el reporte lo antes posible. La junta empieza en una hora.",
        "imagen": "Jefa revisando el reloj mientras su empleado termina un reporte"
      }
    ],
    "listening": [
      {
        "audio": "My new job isn't as stressful as my old one.",
        "pregunta": "¿Cómo es su trabajo nuevo?",
        "opciones": [
          "Menos estresante",
          "Más estresante",
          "Igual de estresante",
          "Más aburrido"
        ]
      },
      {
        "audio": "Your bag is the same as mine. Where did you buy it?",
        "pregunta": "¿Cómo es la bolsa?",
        "opciones": [
          "Igual a la suya",
          "Más grande",
          "Diferente",
          "Más barata"
        ]
      },
      {
        "audio": "The beach in Tulum isn't as crowded as the beach in Cancun.",
        "pregunta": "¿Qué playa tiene más gente?",
        "opciones": [
          "La de Cancún",
          "La de Tulum",
          "Las dos igual",
          "Ninguna"
        ]
      },
      {
        "audio": "My son is as tall as me, but he isn't as strong.",
        "pregunta": "¿Cómo es el hijo?",
        "opciones": [
          "Igual de alto pero menos fuerte",
          "Más alto y más fuerte",
          "Más bajo y más fuerte",
          "Igual de fuerte"
        ]
      },
      {
        "audio": "Please finish the work as soon as possible.",
        "pregunta": "¿Cuándo debe terminar el trabajo?",
        "opciones": [
          "Lo antes posible",
          "Mañana",
          "La próxima semana",
          "Cuando quiera"
        ]
      }
    ],
    "lectura": {
      "titulo": "Twins, but different",
      "texto": "Pablo and Pedro are twins. They are the same age, of course, and they look alike: they have the same brown eyes and the same black hair. But they are very different people. Pablo is as tall as Pedro, but he isn't as strong, because Pedro goes to the gym every day. Pablo loves books, and he's just as smart as his brother, but he isn't as good at sports. Pedro is very friendly and talks to everybody; Pablo isn't as talkative. Their mother says: They're like two different songs with the same music. Last year they both started university. Pablo is studying history, and Pedro is studying sports science. Their grades are very similar.",
      "preguntas": [
        {
          "pregunta": "¿En qué se parecen Pablo y Pedro?",
          "opciones": [
            "En los ojos y el cabello",
            "En los gustos",
            "En la carrera",
            "En la personalidad"
          ]
        },
        {
          "pregunta": "¿Por qué Pedro es más fuerte?",
          "opciones": [
            "Va al gimnasio todos los días",
            "Es mayor",
            "Come más",
            "Trabaja en el campo"
          ]
        },
        {
          "pregunta": "¿Quién habla más con la gente?",
          "opciones": [
            "Pedro",
            "Pablo",
            "Los dos igual",
            "Su mamá"
          ]
        },
        {
          "pregunta": "¿Qué estudia Pablo?",
          "opciones": [
            "Historia",
            "Ciencias del deporte",
            "Música",
            "Medicina"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con as.",
        "pregunta": "She's as tall ___ her sister.",
        "respuestas": [
          "as"
        ]
      },
      {
        "instruccion": "Completa con el adjetivo.",
        "pregunta": "Today is ___ (hot) as yesterday.",
        "respuestas": [
          "as hot"
        ]
      },
      {
        "instruccion": "El camión es más lento que el tren. Completa con el adjetivo.",
        "pregunta": "The bus isn't as ___ as the train.",
        "respuestas": [
          "fast"
        ]
      },
      {
        "instruccion": "Completa con as, to o from.",
        "pregunta": "My phone is the same ___ yours.",
        "respuestas": [
          "as"
        ]
      },
      {
        "instruccion": "Completa con as, to o from.",
        "pregunta": "Italian is similar ___ Spanish.",
        "respuestas": [
          "to"
        ]
      },
      {
        "instruccion": "Completa con as, to o from.",
        "pregunta": "He is very different ___ his brother.",
        "respuestas": [
          "from"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "lo antes posible",
        "respuestas": [
          "as soon as possible"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Hoy no hace tanto frío como ayer.",
        "respuestas": [
          "Today isn't as cold as yesterday",
          "Today is not as cold as yesterday",
          "It isn't as cold as yesterday",
          "It's not as cold as yesterday"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Tenemos la misma edad.",
        "respuestas": [
          "We are the same age",
          "We're the same age"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "My car is as bigger as yours.",
        "respuestas": [
          "My car is as big as yours"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "My son is as ___ as my husband.",
        "opciones": [
          "tall",
          "taller",
          "tallest",
          "more tall"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The bus isn't as fast ___ the train.",
        "opciones": [
          "as",
          "than",
          "like",
          "that"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Your shoes are the same ___ mine.",
        "opciones": [
          "as",
          "than",
          "that",
          "like"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Toluca isn't as hot as Mérida» significa:",
        "opciones": [
          "Mérida es más caliente",
          "Toluca es más caliente",
          "Son igual de calientes",
          "Las dos son frías"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Spanish is similar ___ Italian.",
        "opciones": [
          "to",
          "as",
          "from",
          "than"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Call me as soon as ___.",
        "opciones": [
          "possible",
          "possibly",
          "you possible",
          "can"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The movie wasn't as long as I thought. Only ninety minutes.",
        "pregunta": "¿Cuánto duró la película?",
        "opciones": [
          "Noventa minutos",
          "Dos horas",
          "Tres horas",
          "Una hora"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Coffee here is just as good as in Chiapas, and it's cheaper.",
        "pregunta": "¿Cómo es el café aquí?",
        "opciones": [
          "Igual de bueno y más barato",
          "Mejor y más caro",
          "Peor y más barato",
          "Igual de caro"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: tan grande como",
        "respuestas": [
          "as big as",
          "as large as"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Es diferente.",
        "respuestas": [
          "It's different",
          "It is different"
        ]
      }
    ]
  },
  {
    "id": "a2-12",
    "num": 12,
    "titulo": "Adverbios de modo (quickly, well…)",
    "contexto": "¿Cómo lo haces?",
    "explicacion": {
      "es": [
        "Los **adverbios de modo** dicen **cómo** se hace algo. Responden a ***How?*** (¿Cómo?): *She sings **beautifully**.* (Ella canta hermoso.) *He drives **carefully**.* (Él maneja con cuidado.)",
        "Casi todos se forman agregando **-ly** al adjetivo: *quick, quick**ly**, slow, slow**ly**, careful, careful**ly**, quiet, quiet**ly***. Es como el **-mente** del español (*rápidamente*).",
        "Si el adjetivo termina en **-y**, cambia a **-ily**: *easy, eas**ily**, happy, happ**ily***. Si termina en **-le**, cambia a **-ly**: *terrible, terrib**ly**, gentle, gent**ly***.",
        "**Irregulares:** ***good, well*** (bien), ***fast, fast***, ***hard, hard*** (duro, con esfuerzo), ***late, late***, ***early, early***. *She speaks English **well**. He works **hard**.*"
      ],
      "tabla": {
        "columnas": [
          "Adjetivo (¿cómo es?)",
          "Adverbio (¿cómo lo hace?)"
        ],
        "filas": [
          [
            "He's a careful driver.",
            "He drives carefully."
          ],
          [
            "She's a quick learner.",
            "She learns quickly."
          ],
          [
            "It's an easy test.",
            "I passed easily."
          ],
          [
            "He's a good cook.",
            "He cooks well."
          ],
          [
            "She's a hard worker.",
            "She works hard."
          ]
        ]
      },
      "ojo": [
        "El adjetivo describe a la **persona o cosa**; el adverbio describe la **acción**: *She's **quiet*** (es callada) / *She speaks **quietly*** (habla en voz baja).",
        "*She speaks English **well*** ✅, no *She speaks English good* ❌.",
        "***Hardly*** **no** significa «duramente», significa **casi no**: *I **hardly** slept* (casi no dormí). Para esfuerzo usa ***hard***.",
        "***Lately*** no es «tarde», significa **últimamente**. «Tarde» es ***late***: *I arrived **late***.",
        "El adverbio va **después** del verbo o del objeto: *She speaks English **fluently*** ✅, no *She speaks fluently English* ❌."
      ],
      "en": [
        "Adverbs of manner say how we do something: She sings beautifully. He drives carefully.",
        "Most add l y: quick, quickly. Slow, slowly. Careful, carefully.",
        "Irregular: good, well. Fast, fast. Hard, hard. She speaks English well."
      ]
    },
    "vocabulario": [
      {
        "en": "quickly",
        "es": "rápidamente",
        "imagen": "Mesero caminando rápido con una charola llena de bebidas",
        "ejemplo": [
          "She finished her homework quickly.",
          "Ella terminó su tarea rápidamente."
        ]
      },
      {
        "en": "slowly",
        "es": "despacio",
        "imagen": "Tortuga caminando despacio en el pasto",
        "ejemplo": [
          "Please speak slowly.",
          "Por favor habla despacio."
        ]
      },
      {
        "en": "carefully",
        "es": "con cuidado",
        "imagen": "Persona cargando con cuidado una pila de platos",
        "ejemplo": [
          "Drive carefully. It's raining.",
          "Maneja con cuidado. Está lloviendo."
        ]
      },
      {
        "en": "quietly",
        "es": "en voz baja / sin hacer ruido",
        "imagen": "Papá cerrando la puerta despacio para no despertar al bebé",
        "ejemplo": [
          "He closed the door quietly.",
          "Cerró la puerta sin hacer ruido."
        ]
      },
      {
        "en": "loudly",
        "es": "fuerte / en voz alta",
        "imagen": "Hombre hablando fuerte por teléfono en la calle",
        "ejemplo": [
          "My neighbor talks loudly on the phone.",
          "Mi vecino habla fuerte por teléfono."
        ]
      },
      {
        "en": "well",
        "es": "bien",
        "imagen": "Niña tocando el violín con habilidad en un escenario",
        "ejemplo": [
          "She plays the violin very well.",
          "Ella toca el violín muy bien."
        ]
      },
      {
        "en": "badly",
        "es": "mal",
        "imagen": "Persona cantando desafinado y sus amigos tapándose los oídos",
        "ejemplo": [
          "I sing very badly.",
          "Canto muy mal."
        ]
      },
      {
        "en": "hard",
        "es": "duro / con esfuerzo",
        "imagen": "Trabajador de construcción sudando bajo el sol",
        "ejemplo": [
          "My father works very hard.",
          "Mi papá trabaja muy duro."
        ]
      },
      {
        "en": "fast",
        "es": "rápido",
        "imagen": "Ciclista pedaleando a toda velocidad",
        "ejemplo": [
          "He runs really fast.",
          "Él corre muy rápido."
        ]
      },
      {
        "en": "easily",
        "es": "fácilmente",
        "imagen": "Persona levantando una caja ligera con una mano",
        "ejemplo": [
          "She won the race easily.",
          "Ella ganó la carrera fácilmente."
        ]
      },
      {
        "en": "happily",
        "es": "felizmente / con alegría",
        "imagen": "Niños jugando felices en la playa",
        "ejemplo": [
          "The kids played happily all afternoon.",
          "Los niños jugaron felices toda la tarde."
        ]
      },
      {
        "en": "beautifully",
        "es": "hermoso",
        "imagen": "Cantante de ópera cantando en un teatro",
        "ejemplo": [
          "She sings beautifully.",
          "Ella canta hermoso."
        ]
      },
      {
        "en": "fluently",
        "es": "con fluidez",
        "imagen": "Persona conversando con confianza en una reunión internacional",
        "ejemplo": [
          "He speaks English fluently.",
          "Él habla inglés con fluidez."
        ]
      },
      {
        "en": "patiently",
        "es": "con paciencia",
        "imagen": "Maestra explicando con calma a un alumno",
        "ejemplo": [
          "The teacher explained it patiently.",
          "La maestra lo explicó con paciencia."
        ]
      },
      {
        "en": "early",
        "es": "temprano",
        "imagen": "Persona corriendo al amanecer en la playa",
        "ejemplo": [
          "I get up early every day.",
          "Me levanto temprano todos los días."
        ]
      },
      {
        "en": "late",
        "es": "tarde",
        "imagen": "Persona llegando corriendo a una junta que ya empezó",
        "ejemplo": [
          "He always arrives late.",
          "Él siempre llega tarde."
        ]
      }
    ],
    "grupos": [
      {
        "id": "como",
        "titulo": "¿Cómo lo haces?",
        "icono": "🤔",
        "patron": [
          "How does she…?",
          "He drives carefully.",
          "I cook well."
        ],
        "palabras": [
          {
            "en": "How does she drive?",
            "es": "¿cómo maneja ella?",
            "imagen": "Mujer manejando tranquila con las dos manos en el volante",
            "ejemplo": [
              "How does she drive? Very carefully.",
              "¿Cómo maneja? Con mucho cuidado."
            ]
          },
          {
            "en": "He drives dangerously.",
            "es": "él maneja peligrosamente",
            "imagen": "Carro rebasando a gran velocidad en la carretera",
            "ejemplo": [
              "He drives too fast and dangerously.",
              "Maneja demasiado rápido y peligrosamente."
            ]
          },
          {
            "en": "She dances gracefully.",
            "es": "ella baila con gracia",
            "imagen": "Bailarina de ballet girando en un escenario",
            "ejemplo": [
              "She dances gracefully.",
              "Ella baila con gracia."
            ]
          },
          {
            "en": "He answered politely.",
            "es": "él contestó con amabilidad",
            "imagen": "Empleado atendiendo con una sonrisa a un cliente",
            "ejemplo": [
              "He answered the question politely.",
              "Contestó la pregunta con amabilidad."
            ]
          },
          {
            "en": "She shouted angrily.",
            "es": "ella gritó enojada",
            "imagen": "Mujer gritando enojada a su perro que rompió un cojín",
            "ejemplo": [
              "She shouted angrily at the dog.",
              "Le gritó enojada al perro."
            ]
          },
          {
            "en": "They worked together perfectly.",
            "es": "trabajaron juntos perfectamente",
            "imagen": "Equipo de cocina trabajando coordinado en un restaurante",
            "ejemplo": [
              "The team worked together perfectly.",
              "El equipo trabajó junto perfectamente."
            ]
          },
          {
            "en": "Eat slowly.",
            "es": "come despacio",
            "imagen": "Persona comiendo tranquila y disfrutando su comida",
            "ejemplo": [
              "Eat slowly. It's better for you.",
              "Come despacio. Es mejor para ti."
            ]
          },
          {
            "en": "Listen carefully.",
            "es": "escucha con atención",
            "imagen": "Estudiantes escuchando atentos al maestro",
            "ejemplo": [
              "Listen carefully to the instructions.",
              "Escucha con atención las instrucciones."
            ]
          }
        ]
      },
      {
        "id": "adjadv",
        "titulo": "Adjetivo o adverbio",
        "icono": "🔁",
        "patron": [
          "a good cook, cooks well",
          "a fast runner, runs fast",
          "a careful driver, drives carefully"
        ],
        "palabras": [
          {
            "en": "a good cook",
            "es": "un buen cocinero",
            "imagen": "Cocinero sirviendo un platillo muy bien presentado",
            "ejemplo": [
              "My aunt is a good cook. She cooks very well.",
              "Mi tía es buena cocinera. Cocina muy bien."
            ]
          },
          {
            "en": "a fast runner",
            "es": "un corredor rápido",
            "imagen": "Niño ganando una carrera en la escuela",
            "ejemplo": [
              "He's a fast runner. He runs fast.",
              "Es un corredor rápido. Corre rápido."
            ]
          },
          {
            "en": "a careful driver",
            "es": "un conductor cuidadoso",
            "imagen": "Conductora revisando el espejo antes de avanzar",
            "ejemplo": [
              "She's a careful driver.",
              "Es una conductora cuidadosa."
            ]
          },
          {
            "en": "a hard worker",
            "es": "un trabajador muy dedicado",
            "imagen": "Campesino trabajando en su milpa al amanecer",
            "ejemplo": [
              "My grandpa was a hard worker.",
              "Mi abuelo era muy trabajador."
            ]
          },
          {
            "en": "a quiet person",
            "es": "una persona callada",
            "imagen": "Joven leyendo sola en una banca del parque",
            "ejemplo": [
              "She's a quiet person. She speaks quietly.",
              "Es una persona callada. Habla en voz baja."
            ]
          },
          {
            "en": "a bad singer",
            "es": "un mal cantante",
            "imagen": "Hombre cantando en karaoke muy desafinado",
            "ejemplo": [
              "I'm a bad singer, but I love karaoke.",
              "Canto mal, pero me encanta el karaoke."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Please speak slowly.",
        "es": "Por favor habla despacio."
      },
      {
        "en": "Drive carefully. It's raining.",
        "es": "Maneja con cuidado. Está lloviendo."
      },
      {
        "en": "She plays the violin very well.",
        "es": "Ella toca el violín muy bien."
      },
      {
        "en": "My father works very hard.",
        "es": "Mi papá trabaja muy duro."
      },
      {
        "en": "He speaks English fluently.",
        "es": "Él habla inglés con fluidez."
      },
      {
        "en": "He always arrives late.",
        "es": "Él siempre llega tarde."
      },
      {
        "en": "He closed the door quietly.",
        "es": "Cerró la puerta sin hacer ruido."
      },
      {
        "en": "My aunt is a good cook. She cooks very well.",
        "es": "Mi tía es buena cocinera. Cocina muy bien."
      },
      {
        "en": "I hardly slept last night.",
        "es": "Anoche casi no dormí.",
        "imagen": "Persona con ojeras tomando café en la mañana"
      },
      {
        "en": "Listen carefully to the instructions.",
        "es": "Escucha con atención las instrucciones."
      }
    ],
    "frases": [
      {
        "en": "My grandmother speaks slowly and quietly, but everybody listens to her carefully.",
        "es": "Mi abuela habla despacio y en voz baja, pero todos la escuchan con atención.",
        "imagen": "Abuela contando una historia a su familia reunida"
      },
      {
        "en": "He studied hard for the exam and passed it easily.",
        "es": "Estudió duro para el examen y lo pasó fácilmente.",
        "imagen": "Estudiante feliz mostrando un examen con buena calificación"
      },
      {
        "en": "Can you speak more slowly, please? I don't understand very well.",
        "es": "¿Puede hablar más despacio, por favor? No entiendo muy bien.",
        "imagen": "Turista pidiendo a una persona local que repita algo"
      },
      {
        "en": "The kids were playing happily in the garden when it started to rain.",
        "es": "Los niños jugaban felices en el jardín cuando empezó a llover.",
        "imagen": "Niños jugando en un jardín con nubes de lluvia acercándose"
      },
      {
        "en": "She sings beautifully, but she gets very nervous in front of people.",
        "es": "Canta hermoso, pero se pone muy nerviosa frente a la gente.",
        "imagen": "Joven cantante nerviosa detrás del telón antes de salir"
      },
      {
        "en": "My brother drives too fast. I always tell him to drive more carefully.",
        "es": "Mi hermano maneja demasiado rápido. Siempre le digo que maneje con más cuidado.",
        "imagen": "Hermana preocupada en el asiento del copiloto mientras su hermano maneja"
      },
      {
        "en": "The waiter answered politely, even when the customer shouted angrily.",
        "es": "El mesero contestó con amabilidad, aunque el cliente gritó enojado.",
        "imagen": "Mesero tranquilo frente a un cliente enojado en un restaurante"
      },
      {
        "en": "I get up early, I work hard, and I go to bed late. I'm always tired!",
        "es": "Me levanto temprano, trabajo duro y me acuesto tarde. ¡Siempre estoy cansado!",
        "imagen": "Persona bostezando en su escritorio con una taza de café"
      },
      {
        "en": "After two years in Canada, she speaks English fluently.",
        "es": "Después de dos años en Canadá, habla inglés con fluidez.",
        "imagen": "Mujer conversando con confianza con compañeros en una oficina"
      },
      {
        "en": "He opened the box carefully because there were glasses inside.",
        "es": "Abrió la caja con cuidado porque adentro había vasos.",
        "imagen": "Persona sacando vasos de cristal de una caja con cuidado"
      }
    ],
    "listening": [
      {
        "audio": "Please drive slowly. There are a lot of children on this street.",
        "pregunta": "¿Por qué debe manejar despacio?",
        "opciones": [
          "Hay muchos niños en la calle",
          "Está lloviendo",
          "Hay mucho tráfico",
          "El carro está descompuesto"
        ]
      },
      {
        "audio": "My daughter learns very quickly. She can already read at four.",
        "pregunta": "¿Cómo aprende la hija?",
        "opciones": [
          "Muy rápido",
          "Despacio",
          "Con dificultad",
          "Sola"
        ]
      },
      {
        "audio": "He speaks English well, but he writes badly.",
        "pregunta": "¿Qué hace mal?",
        "opciones": [
          "Escribir",
          "Hablar",
          "Leer",
          "Escuchar"
        ]
      },
      {
        "audio": "Talk quietly, please. The baby is sleeping.",
        "pregunta": "¿Por qué deben hablar en voz baja?",
        "opciones": [
          "El bebé está dormido",
          "Están en una biblioteca",
          "Hay una junta",
          "Es muy tarde"
        ]
      },
      {
        "audio": "I hardly ate today because I was very busy.",
        "pregunta": "¿Qué pasó hoy?",
        "opciones": [
          "Casi no comió",
          "Comió mucho",
          "Comió tarde",
          "Comió rápido"
        ]
      }
    ],
    "lectura": {
      "titulo": "The new driver",
      "texto": "Mariana is seventeen, and she's learning to drive. Her instructor, Mr. Ruiz, is very patient. He explains everything slowly and clearly. On the first day Mariana drove very slowly and nervously. She held the steering wheel tightly and looked at the mirrors carefully every five seconds. On the second day she drove a little faster, but she stopped suddenly at a green light, and the car behind her honked loudly. Mr. Ruiz laughed quietly and said: Relax. You're doing well. After one month, Mariana drove confidently through the city. Last week she passed her test easily. Now her little brother says: Can you drive me to school? and she answers happily: Of course!",
      "preguntas": [
        {
          "pregunta": "¿Cómo es el instructor?",
          "opciones": [
            "Muy paciente",
            "Muy estricto",
            "Muy rápido",
            "Enojón"
          ]
        },
        {
          "pregunta": "¿Cómo manejó Mariana el primer día?",
          "opciones": [
            "Muy despacio y nerviosa",
            "Muy rápido",
            "Con confianza",
            "Peligrosamente"
          ]
        },
        {
          "pregunta": "¿Qué pasó el segundo día?",
          "opciones": [
            "Se paró de repente en un semáforo verde",
            "Chocó",
            "Se perdió",
            "Pasó su examen"
          ]
        },
        {
          "pregunta": "¿Cómo pasó Mariana su examen?",
          "opciones": [
            "Fácilmente",
            "Con dificultad",
            "No lo pasó",
            "En el segundo intento"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Escribe el adverbio.",
        "pregunta": "quick → ___",
        "respuestas": [
          "quickly"
        ]
      },
      {
        "instruccion": "Escribe el adverbio.",
        "pregunta": "careful → ___",
        "respuestas": [
          "carefully"
        ]
      },
      {
        "instruccion": "Escribe el adverbio.",
        "pregunta": "easy → ___",
        "respuestas": [
          "easily"
        ]
      },
      {
        "instruccion": "Escribe el adverbio.",
        "pregunta": "good → ___",
        "respuestas": [
          "well"
        ]
      },
      {
        "instruccion": "Escribe el adverbio.",
        "pregunta": "fast → ___",
        "respuestas": [
          "fast"
        ]
      },
      {
        "instruccion": "Completa con el adjetivo o el adverbio.",
        "pregunta": "She's a ___ driver. (careful)",
        "respuestas": [
          "careful"
        ]
      },
      {
        "instruccion": "Completa con el adjetivo o el adverbio.",
        "pregunta": "She drives ___. (careful)",
        "respuestas": [
          "carefully"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Habla despacio, por favor.",
        "respuestas": [
          "Speak slowly, please",
          "Please speak slowly",
          "Speak slowly please"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Él trabaja muy duro.",
        "respuestas": [
          "He works very hard"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "She speaks English very good.",
        "respuestas": [
          "She speaks English very well"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "He drives very ___.",
        "opciones": [
          "carefully",
          "careful",
          "carefuly",
          "care"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She speaks French ___.",
        "opciones": [
          "well",
          "good",
          "goodly",
          "better"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I worked ___ all day.",
        "opciones": [
          "hard",
          "hardly",
          "hardy",
          "harder"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«I hardly slept» significa:",
        "opciones": [
          "Casi no dormí",
          "Dormí profundamente",
          "Dormí mucho",
          "Dormí tarde"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "He is a ___ person. He speaks quietly.",
        "opciones": [
          "quiet",
          "quietly",
          "quieter",
          "quietness"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es correcta?",
        "opciones": [
          "She speaks English fluently.",
          "She speaks fluently English.",
          "She fluently speaks English very.",
          "She speaks English fluent."
        ]
      },
      {
        "tipo": "listening",
        "audio": "My son plays the piano beautifully, but he practices very little.",
        "pregunta": "¿Cómo toca el piano?",
        "opciones": [
          "Hermoso",
          "Mal",
          "Despacio",
          "Muy fuerte"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Read the questions carefully before you answer.",
        "pregunta": "¿Qué debe hacer antes de contestar?",
        "opciones": [
          "Leer las preguntas con cuidado",
          "Escribir rápido",
          "Pedir ayuda",
          "Revisar el reloj"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: rápidamente",
        "respuestas": [
          "quickly"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Ella canta muy bien.",
        "respuestas": [
          "She sings very well"
        ]
      }
    ]
  },
  {
    "id": "a2-13",
    "num": 13,
    "titulo": "Presente perfecto: experiencias (ever / never)",
    "contexto": "Experiencias de vida",
    "explicacion": {
      "es": [
        "El **presente perfecto** sirve para hablar de **experiencias de vida**, sin decir cuándo: *I **have been** to Cancun.* (He ido a Cancún.) *She **has eaten** sushi.* (Ella ha comido sushi.)",
        "Se forma con ***have / has*** + **participio**. En verbos regulares el participio es igual al pasado (*visited, tried, worked*). En irregulares hay que aprenderlo: *be, **been**, eat, **eaten**, see, **seen**, go, **gone / been**, do, **done***.",
        "***Ever*** (alguna vez) se usa en **preguntas**: ***Have** you **ever** been to Europe?* — *Yes, I have. / No, I haven't.* ***Never*** (nunca) se usa en **afirmativo** para decir que no: *I'**ve never** seen snow.*",
        "Si dices **cuándo** pasó, cambia al **pasado simple**: *I've been to Oaxaca. I **went** there **last year**.* El presente perfecto abre la conversación; el pasado da los detalles."
      ],
      "tabla": {
        "columnas": [
          "Verbo",
          "Pasado",
          "Participio"
        ],
        "filas": [
          [
            "be",
            "was / were",
            "been"
          ],
          [
            "eat",
            "ate",
            "eaten"
          ],
          [
            "see",
            "saw",
            "seen"
          ],
          [
            "do",
            "did",
            "done"
          ],
          [
            "ride",
            "rode",
            "ridden"
          ],
          [
            "try",
            "tried",
            "tried"
          ]
        ]
      },
      "ojo": [
        "*Have* con *I, you, we, they*; ***has*** con *he, she, it*: *She **has** been to Paris.* Contracciones: *I've, she's, we've*.",
        "No uses fecha con el presente perfecto: *I went to Peru in 2019* ✅, no *I have been to Peru in 2019* ❌.",
        "***Been to*** = he ido y regresé. *She's **been** to Spain* (ya regresó) / *She's **gone** to Spain* (ahorita está allá).",
        "Con *never* no se pone otro negativo: *I've never eaten snails* ✅, no *I haven't never* ❌.",
        "Respuestas cortas: *Have you ever…? — Yes, I **have**. / No, I **haven't**. / No, **never**.*"
      ],
      "en": [
        "We use the present perfect for life experiences: I have been to Cancun. She has eaten sushi.",
        "Form: have or has plus the participle: been, eaten, seen, done.",
        "Questions with ever: Have you ever been to Europe? Yes, I have.",
        "Never: I've never seen snow. If you say when, use the past: I went there last year."
      ]
    },
    "vocabulario": [
      {
        "en": "I've been to Cancun.",
        "es": "he ido a Cancún",
        "imagen": "Playa de arena blanca y mar turquesa con palmeras",
        "ejemplo": [
          "I've been to Cancun three times.",
          "He ido a Cancún tres veces."
        ]
      },
      {
        "en": "Have you ever eaten sushi?",
        "es": "¿alguna vez has comido sushi?",
        "imagen": "Plato de sushi con palillos en un restaurante",
        "ejemplo": [
          "Have you ever eaten sushi? Yes, I love it.",
          "¿Alguna vez has comido sushi? Sí, me encanta."
        ]
      },
      {
        "en": "I've never seen snow.",
        "es": "nunca he visto la nieve",
        "imagen": "Persona sorprendida tocando nieve por primera vez",
        "ejemplo": [
          "I've never seen snow in my life.",
          "Nunca en mi vida he visto la nieve."
        ]
      },
      {
        "en": "She's flown in a plane.",
        "es": "ella se ha subido a un avión",
        "imagen": "Mujer mirando las nubes desde la ventana de un avión",
        "ejemplo": [
          "She's flown in a plane only once.",
          "Ella se ha subido a un avión solo una vez."
        ]
      },
      {
        "en": "I've met a famous person.",
        "es": "he conocido a alguien famoso",
        "imagen": "Fan tomándose una selfie con un futbolista",
        "ejemplo": [
          "I've met a famous soccer player.",
          "He conocido a un futbolista famoso."
        ]
      },
      {
        "en": "Have you ever ridden a horse?",
        "es": "¿alguna vez has montado a caballo?",
        "imagen": "Niña montando un caballo con su papá al lado",
        "ejemplo": [
          "Have you ever ridden a horse?",
          "¿Alguna vez has montado a caballo?"
        ]
      },
      {
        "en": "I've broken my leg.",
        "es": "me he roto la pierna",
        "imagen": "Persona con muletas y la pierna enyesada",
        "ejemplo": [
          "I've broken my leg twice.",
          "Me he roto la pierna dos veces."
        ]
      },
      {
        "en": "We've lived abroad.",
        "es": "hemos vivido en el extranjero",
        "imagen": "Familia frente a su casa en otro país con banderas",
        "ejemplo": [
          "We've lived in Canada and in Spain.",
          "Hemos vivido en Canadá y en España."
        ]
      },
      {
        "en": "I've tried bungee jumping.",
        "es": "he intentado el bungee",
        "imagen": "Persona saltando de un puente con cuerda elástica",
        "ejemplo": [
          "I've tried bungee jumping once. Never again!",
          "Una vez intenté el bungee. ¡Nunca más!"
        ]
      },
      {
        "en": "He's won a prize.",
        "es": "él ha ganado un premio",
        "imagen": "Niño sosteniendo un trofeo con una gran sonrisa",
        "ejemplo": [
          "My son has won two prizes for drawing.",
          "Mi hijo ha ganado dos premios de dibujo."
        ]
      },
      {
        "en": "I've seen the sea.",
        "es": "he visto el mar",
        "imagen": "Persona frente al mar con los brazos abiertos",
        "ejemplo": [
          "My grandma has never seen the sea.",
          "Mi abuela nunca ha visto el mar."
        ]
      },
      {
        "en": "Have you ever been on TV?",
        "es": "¿alguna vez has salido en la tele?",
        "imagen": "Persona siendo entrevistada en la calle por un reportero",
        "ejemplo": [
          "Have you ever been on TV?",
          "¿Alguna vez has salido en la tele?"
        ]
      },
      {
        "en": "I've lost my wallet.",
        "es": "he perdido mi cartera",
        "imagen": "Persona buscando en sus bolsillos con preocupación",
        "ejemplo": [
          "I've lost my wallet many times.",
          "He perdido mi cartera muchas veces."
        ]
      },
      {
        "en": "We've climbed a volcano.",
        "es": "hemos subido un volcán",
        "imagen": "Excursionistas en la cima del Iztaccíhuatl con nieve",
        "ejemplo": [
          "We've climbed the Iztaccíhuatl.",
          "Hemos subido el Iztaccíhuatl."
        ]
      },
      {
        "en": "I've never driven a truck.",
        "es": "nunca he manejado un camión",
        "imagen": "Camión de carga grande estacionado en una carretera",
        "ejemplo": [
          "I've never driven a truck.",
          "Nunca he manejado un camión de carga."
        ]
      },
      {
        "en": "She's done yoga.",
        "es": "ella ha hecho yoga",
        "imagen": "Mujer haciendo una postura de yoga en la playa",
        "ejemplo": [
          "She's done yoga for years.",
          "Ella ha hecho yoga por años."
        ]
      }
    ],
    "grupos": [
      {
        "id": "participios",
        "titulo": "Participios irregulares",
        "icono": "📋",
        "patron": [
          "go, gone, been",
          "eat, eaten",
          "see, seen"
        ],
        "palabras": [
          {
            "en": "been",
            "es": "estado / ido",
            "imagen": "Pasaporte lleno de sellos de distintos países",
            "ejemplo": [
              "I've been to five countries.",
              "He estado en cinco países."
            ]
          },
          {
            "en": "eaten",
            "es": "comido",
            "imagen": "Plato vacío después de una comida",
            "ejemplo": [
              "Have you eaten tamales from Oaxaca?",
              "¿Has comido tamales oaxaqueños?"
            ]
          },
          {
            "en": "seen",
            "es": "visto",
            "imagen": "Persona viendo una película en el cine",
            "ejemplo": [
              "I've seen that movie three times.",
              "He visto esa película tres veces."
            ]
          },
          {
            "en": "done",
            "es": "hecho",
            "imagen": "Lista de tareas con todas las casillas marcadas",
            "ejemplo": [
              "Have you done your homework?",
              "¿Ya hiciste tu tarea?"
            ]
          },
          {
            "en": "written",
            "es": "escrito",
            "imagen": "Cuaderno lleno de poemas escritos a mano",
            "ejemplo": [
              "She's written two books.",
              "Ella ha escrito dos libros."
            ]
          },
          {
            "en": "drunk",
            "es": "tomado",
            "imagen": "Taza de café de olla humeante",
            "ejemplo": [
              "Have you ever drunk café de olla?",
              "¿Alguna vez has tomado café de olla?"
            ]
          },
          {
            "en": "swum",
            "es": "nadado",
            "imagen": "Persona nadando en un cenote de agua cristalina",
            "ejemplo": [
              "I've swum in a cenote.",
              "He nadado en un cenote."
            ]
          },
          {
            "en": "met",
            "es": "conocido",
            "imagen": "Dos personas dándose la mano y sonriendo",
            "ejemplo": [
              "Have you met my wife?",
              "¿Ya conoces a mi esposa?"
            ]
          }
        ]
      },
      {
        "id": "experiencias",
        "titulo": "¿Alguna vez…?",
        "icono": "🌟",
        "patron": [
          "Have you ever…?",
          "Yes, I have.",
          "No, never."
        ],
        "palabras": [
          {
            "en": "Have you ever been abroad?",
            "es": "¿alguna vez has ido al extranjero?",
            "imagen": "Viajero con mochila frente a un aeropuerto internacional",
            "ejemplo": [
              "Have you ever been abroad? Yes, I have.",
              "¿Has ido al extranjero? Sí."
            ]
          },
          {
            "en": "Have you ever cooked for ten people?",
            "es": "¿alguna vez has cocinado para diez personas?",
            "imagen": "Persona cocinando ollas grandes para una fiesta",
            "ejemplo": [
              "Have you ever cooked for ten people?",
              "¿Alguna vez has cocinado para diez personas?"
            ]
          },
          {
            "en": "Have you ever slept in a tent?",
            "es": "¿alguna vez has dormido en una tienda de campaña?",
            "imagen": "Amigos frente a una tienda de campaña en el bosque",
            "ejemplo": [
              "Have you ever slept in a tent? No, never.",
              "¿Has dormido en una tienda de campaña? No, nunca."
            ]
          },
          {
            "en": "Have you ever sung karaoke?",
            "es": "¿alguna vez has cantado karaoke?",
            "imagen": "Amigos cantando karaoke con micrófonos",
            "ejemplo": [
              "Have you ever sung karaoke?",
              "¿Alguna vez has cantado karaoke?"
            ]
          },
          {
            "en": "Have you ever seen a whale?",
            "es": "¿alguna vez has visto una ballena?",
            "imagen": "Ballena saltando fuera del mar cerca de un barco",
            "ejemplo": [
              "Have you ever seen a whale in Baja California?",
              "¿Alguna vez has visto una ballena en Baja California?"
            ]
          },
          {
            "en": "Have you ever forgotten a birthday?",
            "es": "¿alguna vez has olvidado un cumpleaños?",
            "imagen": "Persona apenada mirando un calendario con un pastel dibujado",
            "ejemplo": [
              "Have you ever forgotten your mom's birthday?",
              "¿Alguna vez has olvidado el cumpleaños de tu mamá?"
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I've been to Cancun three times.",
        "es": "He ido a Cancún tres veces."
      },
      {
        "en": "Have you ever eaten sushi? Yes, I love it.",
        "es": "¿Alguna vez has comido sushi? Sí, me encanta."
      },
      {
        "en": "I've never seen snow in my life.",
        "es": "Nunca en mi vida he visto la nieve."
      },
      {
        "en": "My grandma has never seen the sea.",
        "es": "Mi abuela nunca ha visto el mar."
      },
      {
        "en": "Have you ever ridden a horse?",
        "es": "¿Alguna vez has montado a caballo?"
      },
      {
        "en": "I've seen that movie three times.",
        "es": "He visto esa película tres veces."
      },
      {
        "en": "Have you ever slept in a tent? No, never.",
        "es": "¿Has dormido en una tienda de campaña? No, nunca."
      },
      {
        "en": "She's written two books.",
        "es": "Ella ha escrito dos libros."
      },
      {
        "en": "I've been to Oaxaca. I went there last year.",
        "es": "He ido a Oaxaca. Fui el año pasado.",
        "imagen": "Calle colorida de Oaxaca con turistas caminando"
      },
      {
        "en": "Have you met my wife?",
        "es": "¿Ya conoces a mi esposa?"
      }
    ],
    "frases": [
      {
        "en": "I've been to many beaches in Mexico, but I've never been to Baja California.",
        "es": "He ido a muchas playas de México, pero nunca he ido a Baja California.",
        "imagen": "Mapa de México sobre la mesa con fotos de playas"
      },
      {
        "en": "Have you ever tried chapulines? Yes, I have. I ate them in Oaxaca last summer.",
        "es": "¿Has probado los chapulines? Sí. Los comí en Oaxaca el verano pasado.",
        "imagen": "Plato de chapulines con limón en un mercado oaxaqueño"
      },
      {
        "en": "My dad has worked in the same company for twenty years.",
        "es": "Mi papá ha trabajado en la misma empresa por veinte años.",
        "imagen": "Señor recibiendo un reconocimiento por sus años de trabajo"
      },
      {
        "en": "She's never flown in a plane because she's afraid of heights.",
        "es": "Ella nunca se ha subido a un avión porque le dan miedo las alturas.",
        "imagen": "Mujer nerviosa mirando un avión desde la ventana del aeropuerto"
      },
      {
        "en": "I've met a lot of interesting people since I started this job.",
        "es": "He conocido a mucha gente interesante desde que empecé este trabajo.",
        "imagen": "Compañeros de trabajo de distintos países conversando"
      },
      {
        "en": "Have you ever lost your luggage at the airport? It's terrible!",
        "es": "¿Alguna vez has perdido tu equipaje en el aeropuerto? ¡Es terrible!",
        "imagen": "Viajero solo frente a una banda de equipaje vacía"
      },
      {
        "en": "We've never had a pet, but the kids want a dog.",
        "es": "Nunca hemos tenido mascota, pero los niños quieren un perro.",
        "imagen": "Niños mirando cachorros en un refugio de animales"
      },
      {
        "en": "I've read this book twice, and I want to read it again.",
        "es": "He leído este libro dos veces y quiero leerlo otra vez.",
        "imagen": "Libro desgastado de tanto leerlo sobre una mesa"
      },
      {
        "en": "My brother has broken three phones this year!",
        "es": "¡Mi hermano ha roto tres celulares este año!",
        "imagen": "Celular con la pantalla estrellada sobre una mesa"
      },
      {
        "en": "Have you ever done something crazy? Yes! I've jumped from a plane.",
        "es": "¿Alguna vez has hecho algo loco? ¡Sí! He saltado de un avión.",
        "imagen": "Paracaidista en caída libre sobre el campo"
      }
    ],
    "listening": [
      {
        "audio": "Have you ever been to Chiapas? Yes, I have. I went there two years ago.",
        "pregunta": "¿Cuándo fue a Chiapas?",
        "opciones": [
          "Hace dos años",
          "El año pasado",
          "Nunca ha ido",
          "Hace dos meses"
        ]
      },
      {
        "audio": "I've never eaten mole. Is it spicy?",
        "pregunta": "¿Qué nunca ha comido?",
        "opciones": [
          "Mole",
          "Tacos",
          "Sushi",
          "Pozole"
        ]
      },
      {
        "audio": "My sister has lived in three different countries: Spain, Canada, and Japan.",
        "pregunta": "¿En cuántos países ha vivido?",
        "opciones": [
          "Tres",
          "Dos",
          "Cuatro",
          "Uno"
        ]
      },
      {
        "audio": "Have you seen my keys? I've looked everywhere.",
        "pregunta": "¿Qué busca?",
        "opciones": [
          "Sus llaves",
          "Su celular",
          "Su cartera",
          "Sus lentes"
        ]
      },
      {
        "audio": "We've visited the pyramids many times, but my kids have never been there.",
        "pregunta": "¿Quiénes nunca han ido a las pirámides?",
        "opciones": [
          "Sus hijos",
          "Ellos",
          "Sus papás",
          "Sus amigos"
        ]
      }
    ],
    "lectura": {
      "titulo": "A life of adventures",
      "texto": "My grandfather Ernesto is seventy-five years old, and he has had an amazing life. He has worked as a fisherman, a taxi driver, and a cook. He has lived in Veracruz, Tijuana, and even in Los Angeles for five years. He has seen whales in Baja California and he has climbed the Pico de Orizaba, the highest mountain in Mexico. He has never flown in a plane, because he says buses are more interesting. He has met many famous people in his taxi, but he has never asked for a photo. When I asked him: Grandpa, have you ever been afraid? he laughed and said: Many times! But I've never stopped trying new things.",
      "preguntas": [
        {
          "pregunta": "¿En qué ha trabajado el abuelo?",
          "opciones": [
            "Pescador, taxista y cocinero",
            "Maestro y doctor",
            "Piloto y chofer",
            "Músico y cocinero"
          ]
        },
        {
          "pregunta": "¿Cuánto tiempo vivió en Los Ángeles?",
          "opciones": [
            "Cinco años",
            "Quince años",
            "Un año",
            "Diez años"
          ]
        },
        {
          "pregunta": "¿Por qué nunca ha volado?",
          "opciones": [
            "Cree que los autobuses son más interesantes",
            "Le dan miedo los aviones",
            "Es muy caro",
            "Nunca ha tenido tiempo"
          ]
        },
        {
          "pregunta": "¿Qué nunca ha hecho con la gente famosa?",
          "opciones": [
            "Pedirles una foto",
            "Platicar con ellos",
            "Llevarlos en su taxi",
            "Conocerlos"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Escribe el participio.",
        "pregunta": "eat → ___",
        "respuestas": [
          "eaten"
        ]
      },
      {
        "instruccion": "Escribe el participio.",
        "pregunta": "see → ___",
        "respuestas": [
          "seen"
        ]
      },
      {
        "instruccion": "Escribe el participio.",
        "pregunta": "be → ___",
        "respuestas": [
          "been"
        ]
      },
      {
        "instruccion": "Escribe el participio.",
        "pregunta": "visit → ___",
        "respuestas": [
          "visited"
        ]
      },
      {
        "instruccion": "Completa con have o has.",
        "pregunta": "She ___ been to Paris.",
        "respuestas": [
          "has",
          "'s"
        ]
      },
      {
        "instruccion": "Completa con ever o never.",
        "pregunta": "Have you ___ seen a ghost?",
        "respuestas": [
          "ever"
        ]
      },
      {
        "instruccion": "Completa con ever o never.",
        "pregunta": "I've ___ eaten snails.",
        "respuestas": [
          "never"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Alguna vez has ido a Europa?",
        "respuestas": [
          "Have you ever been to Europe"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Nunca he visto la nieve.",
        "respuestas": [
          "I've never seen snow",
          "I have never seen snow",
          "I've never seen the snow"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I have been to Peru in 2019.",
        "respuestas": [
          "I went to Peru in 2019",
          "I was in Peru in 2019"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "Have you ever ___ to Canada?",
        "opciones": [
          "been",
          "be",
          "was",
          "gone to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She ___ never eaten sushi.",
        "opciones": [
          "has",
          "have",
          "is",
          "did"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I've ___ that movie twice.",
        "opciones": [
          "seen",
          "saw",
          "see",
          "seeing"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Have you ever ridden a horse? No, I ___.",
        "opciones": [
          "haven't",
          "didn't",
          "don't",
          "hasn't"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I ___ to Spain last year.",
        "opciones": [
          "went",
          "have been",
          "have gone",
          "has been"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es correcta?",
        "opciones": [
          "I've never been to Japan.",
          "I haven't never been to Japan.",
          "I've ever been to Japan.",
          "I never have went to Japan."
        ]
      },
      {
        "tipo": "listening",
        "audio": "I've been to Guadalajara four times, but I've never visited Tequila.",
        "pregunta": "¿Cuántas veces ha ido a Guadalajara?",
        "opciones": [
          "Cuatro",
          "Ninguna",
          "Dos",
          "Una"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Have you ever swum in a cenote? Yes, last summer in Yucatán.",
        "pregunta": "¿Dónde nadó en un cenote?",
        "opciones": [
          "En Yucatán",
          "En Chiapas",
          "En Oaxaca",
          "En Quintana Roo"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: He estado en Cancún.",
        "respuestas": [
          "I've been to Cancun",
          "I have been to Cancun",
          "I've been in Cancun"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¿Alguna vez has comido mole?",
        "respuestas": [
          "Have you ever eaten mole",
          "Have you ever tried mole"
        ]
      }
    ]
  },
  {
    "id": "a2-14",
    "num": 14,
    "titulo": "Have to / don't have to, must / mustn't",
    "contexto": "Reglas en casa, la escuela y el trabajo",
    "explicacion": {
      "es": [
        "***Have to*** + verbo = **tener que** (obligación): *I **have to** work on Saturday.* Con *he / she / it* es ***has to***: *She **has to** wear a uniform.*",
        "***Don't have to*** = **no es necesario** (puedes hacerlo si quieres): *You **don't have to** come early.* (No tienes que llegar temprano.) *He **doesn't have to** pay.*",
        "***Must*** + verbo = **debes** (obligación fuerte, reglas escritas o algo que tú sientes muy importante): *You **must** wear a seatbelt. I **must** call my mom.* Es igual para todos (no lleva *-s*).",
        "***Mustn't*** (*must not*) = **está prohibido**: *You **mustn't** smoke here.* ¡Ojo! *mustn't* y *don't have to* **no** significan lo mismo."
      ],
      "tabla": {
        "columnas": [
          "Forma",
          "Significado",
          "Ejemplo"
        ],
        "filas": [
          [
            "have to / has to",
            "es obligatorio",
            "I have to get up at six."
          ],
          [
            "don't have to",
            "no es necesario",
            "You don't have to bring food."
          ],
          [
            "must",
            "es obligatorio (regla, muy importante)",
            "You must show your ID."
          ],
          [
            "mustn't",
            "está prohibido",
            "You mustn't use your phone in the exam."
          ],
          [
            "Do you have to…?",
            "pregunta",
            "Do you have to work tomorrow?"
          ]
        ]
      },
      "ojo": [
        "*You **mustn't** go* = ¡No vayas! (prohibido). *You **don't have to** go* = No es necesario que vayas.",
        "Para el **pasado** se usa ***had to***: *Yesterday I **had to** work late.* (*must* no tiene pasado.)",
        "Preguntas con *have to*: ***Do** you **have to** wear a uniform? **Does** she **have to** work?* (no *Have you to…?* ❌).",
        "Después de *must* no va *to*: *You must **wear*** ✅, no *must to wear* ❌.",
        "En la vida diaria, *have to* es más común que *must* al hablar. *Must* se ve mucho en **letreros y reglamentos**."
      ],
      "en": [
        "Have to means it's necessary: I have to work on Saturday. She has to wear a uniform.",
        "Don't have to means it isn't necessary: You don't have to come early.",
        "Must is for rules and strong obligation: You must wear a seatbelt.",
        "Mustn't means it's prohibited: You mustn't smoke here."
      ]
    },
    "vocabulario": [
      {
        "en": "I have to get up early.",
        "es": "tengo que levantarme temprano",
        "imagen": "Persona apagando el despertador a las cinco de la mañana",
        "ejemplo": [
          "I have to get up early for work.",
          "Tengo que levantarme temprano para el trabajo."
        ]
      },
      {
        "en": "She has to wear a uniform.",
        "es": "ella tiene que usar uniforme",
        "imagen": "Enfermera con su uniforme en un hospital",
        "ejemplo": [
          "She has to wear a uniform at the hospital.",
          "Ella tiene que usar uniforme en el hospital."
        ]
      },
      {
        "en": "We have to do our homework.",
        "es": "tenemos que hacer la tarea",
        "imagen": "Niños haciendo la tarea en la mesa del comedor",
        "ejemplo": [
          "We have to do our homework before dinner.",
          "Tenemos que hacer la tarea antes de cenar."
        ]
      },
      {
        "en": "You don't have to pay.",
        "es": "no tienes que pagar",
        "imagen": "Letrero de entrada gratis a un museo con gente entrando",
        "ejemplo": [
          "Children don't have to pay.",
          "Los niños no tienen que pagar."
        ]
      },
      {
        "en": "He doesn't have to work on Sundays.",
        "es": "él no tiene que trabajar los domingos",
        "imagen": "Hombre descansando en una hamaca un domingo",
        "ejemplo": [
          "He doesn't have to work on Sundays.",
          "Él no trabaja los domingos."
        ]
      },
      {
        "en": "You must wear a seatbelt.",
        "es": "debes usar el cinturón de seguridad",
        "imagen": "Conductor abrochándose el cinturón de seguridad",
        "ejemplo": [
          "You must wear a seatbelt in the car.",
          "Debes usar el cinturón en el carro."
        ]
      },
      {
        "en": "You mustn't smoke here.",
        "es": "prohibido fumar aquí",
        "imagen": "Señal de prohibido fumar en una pared",
        "ejemplo": [
          "You mustn't smoke in the hospital.",
          "Está prohibido fumar en el hospital."
        ]
      },
      {
        "en": "You must be quiet.",
        "es": "debes guardar silencio",
        "imagen": "Biblioteca silenciosa con estudiantes leyendo",
        "ejemplo": [
          "You must be quiet in the library.",
          "Debes guardar silencio en la biblioteca."
        ]
      },
      {
        "en": "You mustn't run.",
        "es": "no debes correr",
        "imagen": "Niño corriendo junto a una alberca y un salvavidas señalándole",
        "ejemplo": [
          "You mustn't run near the pool.",
          "No debes correr cerca de la alberca."
        ]
      },
      {
        "en": "I have to clean my room.",
        "es": "tengo que limpiar mi cuarto",
        "imagen": "Adolescente ordenando su cuarto desordenado",
        "ejemplo": [
          "I have to clean my room on Saturday.",
          "El sábado tengo que limpiar mi cuarto."
        ]
      },
      {
        "en": "Do you have to work tomorrow?",
        "es": "¿tienes que trabajar mañana?",
        "imagen": "Amigos platicando a la salida del trabajo",
        "ejemplo": [
          "Do you have to work tomorrow? No, I don't.",
          "¿Tienes que trabajar mañana? No."
        ]
      },
      {
        "en": "I had to wait.",
        "es": "tuve que esperar",
        "imagen": "Persona esperando en una fila larga en el banco",
        "ejemplo": [
          "I had to wait for an hour at the bank.",
          "Tuve que esperar una hora en el banco."
        ]
      },
      {
        "en": "You must show your ID.",
        "es": "debes mostrar tu identificación",
        "imagen": "Persona mostrando su identificación a un guardia",
        "ejemplo": [
          "You must show your ID at the entrance.",
          "Debes mostrar tu identificación en la entrada."
        ]
      },
      {
        "en": "You mustn't use your phone.",
        "es": "no debes usar el celular",
        "imagen": "Salón de examen con un letrero de celular tachado",
        "ejemplo": [
          "You mustn't use your phone during the exam.",
          "No debes usar el celular durante el examen."
        ]
      },
      {
        "en": "We have to take off our shoes.",
        "es": "tenemos que quitarnos los zapatos",
        "imagen": "Zapatos acomodados en la entrada de una casa",
        "ejemplo": [
          "In my house we have to take off our shoes.",
          "En mi casa nos tenemos que quitar los zapatos."
        ]
      },
      {
        "en": "You don't have to bring anything.",
        "es": "no tienes que traer nada",
        "imagen": "Anfitriona recibiendo a una invitada en la puerta",
        "ejemplo": [
          "Come to dinner! You don't have to bring anything.",
          "¡Ven a cenar! No tienes que traer nada."
        ]
      }
    ],
    "grupos": [
      {
        "id": "casa",
        "titulo": "Reglas en casa",
        "icono": "🏠",
        "patron": [
          "I have to…",
          "We don't have to…",
          "You mustn't…"
        ],
        "palabras": [
          {
            "en": "make my bed",
            "es": "tender mi cama",
            "imagen": "Niño tendiendo su cama en la mañana",
            "ejemplo": [
              "I have to make my bed every morning.",
              "Tengo que tender mi cama cada mañana."
            ]
          },
          {
            "en": "take out the trash",
            "es": "sacar la basura",
            "imagen": "Joven sacando las bolsas de basura a la calle",
            "ejemplo": [
              "My brother has to take out the trash.",
              "Mi hermano tiene que sacar la basura."
            ]
          },
          {
            "en": "be home by ten",
            "es": "estar en casa a las diez",
            "imagen": "Reloj marcando las diez y una adolescente entrando a casa",
            "ejemplo": [
              "I have to be home by ten on weekdays.",
              "Entre semana tengo que estar en casa a las diez."
            ]
          },
          {
            "en": "feed the dog",
            "es": "darle de comer al perro",
            "imagen": "Niña sirviendo croquetas a su perro",
            "ejemplo": [
              "We have to feed the dog twice a day.",
              "Tenemos que darle de comer al perro dos veces al día."
            ]
          },
          {
            "en": "set the table",
            "es": "poner la mesa",
            "imagen": "Niño poniendo platos y cubiertos en la mesa",
            "ejemplo": [
              "The kids have to set the table.",
              "Los niños tienen que poner la mesa."
            ]
          },
          {
            "en": "wash the dishes",
            "es": "lavar los trastes",
            "imagen": "Pareja lavando y secando los trastes juntos",
            "ejemplo": [
              "Whoever cooks doesn't have to wash the dishes.",
              "El que cocina no tiene que lavar los trastes."
            ]
          }
        ]
      },
      {
        "id": "trabajo",
        "titulo": "Reglas en la escuela y el trabajo",
        "icono": "🏢",
        "patron": [
          "You must…",
          "Employees have to…",
          "Students mustn't…"
        ],
        "palabras": [
          {
            "en": "arrive on time",
            "es": "llegar puntual",
            "imagen": "Empleada llegando a la oficina con el reloj marcando las ocho",
            "ejemplo": [
              "All employees have to arrive on time.",
              "Todos los empleados tienen que llegar puntuales."
            ]
          },
          {
            "en": "wear safety glasses",
            "es": "usar lentes de seguridad",
            "imagen": "Trabajador de fábrica con lentes y casco de seguridad",
            "ejemplo": [
              "You must wear safety glasses in the factory.",
              "Debes usar lentes de seguridad en la fábrica."
            ]
          },
          {
            "en": "sign in",
            "es": "registrar tu entrada",
            "imagen": "Persona registrando su entrada con la huella digital",
            "ejemplo": [
              "You have to sign in when you arrive.",
              "Tienes que registrar tu entrada al llegar."
            ]
          },
          {
            "en": "hand in the homework",
            "es": "entregar la tarea",
            "imagen": "Alumno entregando su tarea a la maestra",
            "ejemplo": [
              "We have to hand in the homework on Friday.",
              "Tenemos que entregar la tarea el viernes."
            ]
          },
          {
            "en": "eat in class",
            "es": "comer en clase",
            "imagen": "Estudiante escondiendo una torta debajo de su banca",
            "ejemplo": [
              "Students mustn't eat in class.",
              "Los alumnos no deben comer en clase."
            ]
          },
          {
            "en": "work overtime",
            "es": "trabajar horas extra",
            "imagen": "Oficina vacía de noche con una persona trabajando",
            "ejemplo": [
              "Sometimes I have to work overtime.",
              "A veces tengo que trabajar horas extra."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I have to get up early for work.",
        "es": "Tengo que levantarme temprano para el trabajo."
      },
      {
        "en": "Children don't have to pay.",
        "es": "Los niños no tienen que pagar."
      },
      {
        "en": "You must wear a seatbelt in the car.",
        "es": "Debes usar el cinturón en el carro."
      },
      {
        "en": "You mustn't smoke in the hospital.",
        "es": "Está prohibido fumar en el hospital."
      },
      {
        "en": "Do you have to work tomorrow? No, I don't.",
        "es": "¿Tienes que trabajar mañana? No."
      },
      {
        "en": "I had to wait for an hour at the bank.",
        "es": "Tuve que esperar una hora en el banco."
      },
      {
        "en": "You mustn't run near the pool.",
        "es": "No debes correr cerca de la alberca."
      },
      {
        "en": "In my house we have to take off our shoes.",
        "es": "En mi casa nos tenemos que quitar los zapatos."
      },
      {
        "en": "Come to dinner! You don't have to bring anything.",
        "es": "¡Ven a cenar! No tienes que traer nada."
      },
      {
        "en": "Students mustn't eat in class.",
        "es": "Los alumnos no deben comer en clase."
      }
    ],
    "frases": [
      {
        "en": "In my house we have to make our beds, but we don't have to cook. My dad loves cooking!",
        "es": "En mi casa tenemos que tender la cama, pero no tenemos que cocinar. ¡A mi papá le encanta cocinar!",
        "imagen": "Papá cocinando feliz mientras los hijos tienden sus camas"
      },
      {
        "en": "At my new job I have to wear a suit, but I don't have to work on weekends.",
        "es": "En mi nuevo trabajo tengo que usar traje, pero no tengo que trabajar los fines de semana.",
        "imagen": "Hombre de traje saliendo de la oficina un viernes"
      },
      {
        "en": "You mustn't use your phone while you're driving. It's very dangerous.",
        "es": "No debes usar el celular mientras manejas. Es muy peligroso.",
        "imagen": "Conductor con el celular guardado y las manos en el volante"
      },
      {
        "en": "Does your son have to wear a uniform at school? Yes, he does.",
        "es": "¿Tu hijo tiene que usar uniforme en la escuela? Sí.",
        "imagen": "Niño con uniforme escolar y mochila saliendo de casa"
      },
      {
        "en": "Yesterday I had to take my car to the mechanic, so I took the bus.",
        "es": "Ayer tuve que llevar mi carro al mecánico, así que tomé el camión.",
        "imagen": "Persona entregando su carro en un taller mecánico"
      },
      {
        "en": "Visitors must show their ID and sign in at the reception.",
        "es": "Los visitantes deben mostrar su identificación y registrarse en la recepción.",
        "imagen": "Recepción de un edificio de oficinas con un visitante registrándose"
      },
      {
        "en": "You don't have to speak perfect English. You just have to try!",
        "es": "No tienes que hablar un inglés perfecto. ¡Solo tienes que intentarlo!",
        "imagen": "Maestra animando a un alumno adulto a hablar en clase"
      },
      {
        "en": "We mustn't forget Grandma's birthday. It's on Saturday.",
        "es": "No debemos olvidar el cumpleaños de la abuela. Es el sábado.",
        "imagen": "Calendario en el refrigerador con un pastel dibujado en el sábado"
      },
      {
        "en": "My sister has to study a lot because she wants to be a doctor.",
        "es": "Mi hermana tiene que estudiar mucho porque quiere ser doctora.",
        "imagen": "Estudiante de medicina estudiando con un modelo de esqueleto"
      },
      {
        "en": "In the museum you mustn't touch the paintings or take photos with flash.",
        "es": "En el museo no debes tocar las pinturas ni tomar fotos con flash.",
        "imagen": "Visitantes observando pinturas en un museo detrás de una línea"
      }
    ],
    "listening": [
      {
        "audio": "I have to work on Saturday, so I can't go to the party.",
        "pregunta": "¿Por qué no puede ir a la fiesta?",
        "opciones": [
          "Tiene que trabajar el sábado",
          "Está enfermo",
          "No tiene dinero",
          "No lo invitaron"
        ]
      },
      {
        "audio": "You don't have to bring food. We have a lot.",
        "pregunta": "¿Qué significa?",
        "opciones": [
          "No es necesario llevar comida",
          "Está prohibido llevar comida",
          "Tiene que llevar comida",
          "Debe comprar comida"
        ]
      },
      {
        "audio": "Passengers must turn off their phones during takeoff.",
        "pregunta": "¿Qué deben hacer los pasajeros?",
        "opciones": [
          "Apagar el celular al despegar",
          "Abrocharse el cinturón",
          "Mostrar su boleto",
          "Guardar silencio"
        ]
      },
      {
        "audio": "Yesterday I had to walk to work because my car didn't start.",
        "pregunta": "¿Por qué caminó?",
        "opciones": [
          "Su carro no arrancó",
          "Le gusta caminar",
          "No había camiones",
          "Estaba cerca"
        ]
      },
      {
        "audio": "Does Ana have to wear a uniform? No, she doesn't. She can wear jeans.",
        "pregunta": "¿Ana tiene que usar uniforme?",
        "opciones": [
          "No, puede usar jeans",
          "Sí, siempre",
          "Solo los lunes",
          "No dice"
        ]
      }
    ],
    "lectura": {
      "titulo": "Rules at the summer camp",
      "texto": "Welcome to Green Valley Summer Camp! Here are our rules. All campers have to get up at seven and make their beds. Breakfast is at seven thirty, and you mustn't be late. You have to wear a hat and sunscreen in the afternoon, because the sun is very strong. You mustn't swim in the lake without an instructor. Phones are allowed, but you mustn't use them during activities. You don't have to do every activity: you can choose three each day. In the evening, everybody has to help clean the dining room. Lights out is at ten, and you must be quiet after that. Remember: you don't have to be the best, but you have to have fun!",
      "preguntas": [
        {
          "pregunta": "¿A qué hora se tienen que levantar?",
          "opciones": [
            "A las siete",
            "A las siete y media",
            "A las seis",
            "A las ocho"
          ]
        },
        {
          "pregunta": "¿Qué está prohibido?",
          "opciones": [
            "Nadar en el lago sin instructor",
            "Usar el celular",
            "Usar sombrero",
            "Elegir actividades"
          ]
        },
        {
          "pregunta": "¿Cuántas actividades eligen cada día?",
          "opciones": [
            "Tres",
            "Todas",
            "Dos",
            "Cinco"
          ]
        },
        {
          "pregunta": "¿Qué tienen que hacer todos en la noche?",
          "opciones": [
            "Ayudar a limpiar el comedor",
            "Nadar",
            "Llamar a sus papás",
            "Hacer la tarea"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con have to o has to.",
        "pregunta": "She ___ work late.",
        "respuestas": [
          "has to"
        ]
      },
      {
        "instruccion": "Completa con have to o has to.",
        "pregunta": "We ___ clean the house.",
        "respuestas": [
          "have to"
        ]
      },
      {
        "instruccion": "Completa con don't o doesn't.",
        "pregunta": "He ___ have to pay.",
        "respuestas": [
          "doesn't",
          "does not"
        ]
      },
      {
        "instruccion": "Completa con must o mustn't.",
        "pregunta": "You ___ smoke in the hospital.",
        "respuestas": [
          "mustn't",
          "must not"
        ]
      },
      {
        "instruccion": "Completa con must o mustn't.",
        "pregunta": "You ___ wear a seatbelt.",
        "respuestas": [
          "must"
        ]
      },
      {
        "instruccion": "Completa la pregunta.",
        "pregunta": "___ you have to work tomorrow?",
        "respuestas": [
          "Do"
        ]
      },
      {
        "instruccion": "Escribe en pasado.",
        "pregunta": "I have to wait. → Yesterday I ___ wait.",
        "respuestas": [
          "had to"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Tengo que trabajar.",
        "respuestas": [
          "I have to work"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "No tienes que venir.",
        "respuestas": [
          "You don't have to come",
          "You do not have to come"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "You must to show your ID.",
        "respuestas": [
          "You must show your ID"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "My mom ___ get up at five.",
        "opciones": [
          "has to",
          "have to",
          "must to",
          "haves to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "It's free. You ___ pay.",
        "opciones": [
          "don't have to",
          "mustn't",
          "have to",
          "must"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "It's dangerous. You ___ touch it!",
        "opciones": [
          "mustn't",
          "don't have to",
          "have to",
          "has to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ she have to wear a uniform?",
        "opciones": [
          "Does",
          "Do",
          "Has",
          "Must"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Last week I ___ work every day.",
        "opciones": [
          "had to",
          "must",
          "have to",
          "musted"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«You don't have to come» significa:",
        "opciones": [
          "No es necesario que vengas",
          "Está prohibido que vengas",
          "Tienes que venir",
          "Debes venir"
        ]
      },
      {
        "tipo": "listening",
        "audio": "In this office you mustn't eat at your desk. You have to eat in the kitchen.",
        "pregunta": "¿Dónde tienen que comer?",
        "opciones": [
          "En la cocina",
          "En su escritorio",
          "Afuera",
          "En la sala de juntas"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Tomorrow is a holiday, so the kids don't have to go to school.",
        "pregunta": "¿Por qué no van a la escuela?",
        "opciones": [
          "Es día festivo",
          "Están enfermos",
          "Hay huelga",
          "Es sábado"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Ella tiene que estudiar.",
        "respuestas": [
          "She has to study"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Prohibido fumar aquí. (usa mustn't)",
        "respuestas": [
          "You mustn't smoke here",
          "You must not smoke here"
        ]
      }
    ]
  },
  {
    "id": "a2-15",
    "num": 15,
    "titulo": "Should / shouldn't (consejos)",
    "contexto": "La salud y el cuerpo",
    "explicacion": {
      "es": [
        "***Should*** + verbo base sirve para dar **consejos**: *You **should** drink more water.* (Deberías tomar más agua.) Es igual para todos: *I should, she should, they should.*",
        "***Shouldn't*** (*should not*) es el consejo de **no** hacer algo: *You **shouldn't** eat so much sugar.* (No deberías comer tanta azúcar.)",
        "Para **pedir** consejo: ***Should I** go to the doctor? **What should I** do?* — *Yes, you should. / No, you shouldn't.*",
        "Es más suave que *must* o *have to*: *You **must** stop* (obligación) / *You **should** stop* (te lo recomiendo). Para ser todavía más amable: ***I think you should…*** o ***Maybe you should…***"
      ],
      "tabla": {
        "columnas": [
          "Problema",
          "Consejo"
        ],
        "filas": [
          [
            "I have a headache.",
            "You should take a painkiller."
          ],
          [
            "I'm always tired.",
            "You should go to bed earlier."
          ],
          [
            "I have a cough.",
            "You shouldn't smoke."
          ],
          [
            "My back hurts.",
            "You should see a doctor."
          ],
          [
            "I feel sick.",
            "Should I call a doctor?"
          ]
        ]
      },
      "ojo": [
        "Después de *should* no va *to*: *You should **go*** ✅, no *should to go* ❌.",
        "No lleva *-s*: *She should **rest*** ✅, no *She shoulds rest* ❌.",
        "Para decir «no creo que debas» lo natural es ***I don't think you should…***: *I don't think you should go to work today.*",
        "Dolores con ***have a … ache***: *I have a **headache** / **stomachache** / **toothache** / **backache***. O con ***hurt***: *My back **hurts**. My feet **hurt**.*",
        "***I feel sick*** = me siento mal (con náuseas). ***I'm sick*** = estoy enfermo. ***I have a cold*** = tengo gripa."
      ],
      "en": [
        "Should plus a verb gives advice: You should drink more water.",
        "Shouldn't is advice not to do something: You shouldn't eat so much sugar.",
        "To ask for advice: Should I go to the doctor? What should I do?",
        "I have a headache. You should take a painkiller."
      ]
    },
    "vocabulario": [
      {
        "en": "I have a headache.",
        "es": "me duele la cabeza",
        "imagen": "Persona con la mano en la frente y cara de dolor",
        "ejemplo": [
          "I have a terrible headache.",
          "Tengo un dolor de cabeza terrible."
        ]
      },
      {
        "en": "I have a stomachache.",
        "es": "me duele el estómago",
        "imagen": "Persona con las manos en el estómago en el sofá",
        "ejemplo": [
          "I have a stomachache after lunch.",
          "Me duele el estómago después de comer."
        ]
      },
      {
        "en": "I have a toothache.",
        "es": "me duele una muela",
        "imagen": "Persona con la mano en la mejilla por dolor de muela",
        "ejemplo": [
          "I have a toothache. I should see the dentist.",
          "Me duele una muela. Debería ir al dentista."
        ]
      },
      {
        "en": "My back hurts.",
        "es": "me duele la espalda",
        "imagen": "Persona tocándose la espalda baja con dolor",
        "ejemplo": [
          "My back hurts from sitting all day.",
          "Me duele la espalda de estar sentado todo el día."
        ]
      },
      {
        "en": "I have a cold.",
        "es": "tengo gripa",
        "imagen": "Persona con pañuelos y la nariz roja en la cama",
        "ejemplo": [
          "I have a cold and a sore throat.",
          "Tengo gripa y dolor de garganta."
        ]
      },
      {
        "en": "I have a fever.",
        "es": "tengo fiebre",
        "imagen": "Termómetro marcando 38.5 grados en la mano de una mamá",
        "ejemplo": [
          "My son has a fever.",
          "Mi hijo tiene fiebre."
        ]
      },
      {
        "en": "I have a cough.",
        "es": "tengo tos",
        "imagen": "Persona tosiendo en el codo",
        "ejemplo": [
          "I have a bad cough.",
          "Tengo mucha tos."
        ]
      },
      {
        "en": "I have a sore throat.",
        "es": "me duele la garganta",
        "imagen": "Persona tocándose la garganta con un té caliente",
        "ejemplo": [
          "I have a sore throat. I can't talk much.",
          "Me duele la garganta. No puedo hablar mucho."
        ]
      },
      {
        "en": "You should rest.",
        "es": "deberías descansar",
        "imagen": "Persona descansando en la cama con una cobija",
        "ejemplo": [
          "You look tired. You should rest.",
          "Te ves cansado. Deberías descansar."
        ]
      },
      {
        "en": "You should see a doctor.",
        "es": "deberías ir al doctor",
        "imagen": "Doctora recibiendo a un paciente en su consultorio",
        "ejemplo": [
          "You should see a doctor about that cough.",
          "Deberías ir al doctor por esa tos."
        ]
      },
      {
        "en": "You should drink more water.",
        "es": "deberías tomar más agua",
        "imagen": "Persona llenando un vaso con una jarra de agua",
        "ejemplo": [
          "You should drink more water every day.",
          "Deberías tomar más agua todos los días."
        ]
      },
      {
        "en": "You shouldn't smoke.",
        "es": "no deberías fumar",
        "imagen": "Cenicero con un cigarro y una señal de alto",
        "ejemplo": [
          "You shouldn't smoke. It's bad for your lungs.",
          "No deberías fumar. Es malo para tus pulmones."
        ]
      },
      {
        "en": "You should exercise.",
        "es": "deberías hacer ejercicio",
        "imagen": "Grupo de personas haciendo ejercicio en un parque",
        "ejemplo": [
          "You should exercise three times a week.",
          "Deberías hacer ejercicio tres veces a la semana."
        ]
      },
      {
        "en": "You shouldn't eat so much sugar.",
        "es": "no deberías comer tanta azúcar",
        "imagen": "Mesa llena de pan dulce, refrescos y dulces",
        "ejemplo": [
          "You shouldn't eat so much sugar.",
          "No deberías comer tanta azúcar."
        ]
      },
      {
        "en": "Take this medicine.",
        "es": "tómate esta medicina",
        "imagen": "Mano entregando un frasco de medicina y una cuchara",
        "ejemplo": [
          "Take this medicine three times a day.",
          "Tómate esta medicina tres veces al día."
        ]
      },
      {
        "en": "I feel better.",
        "es": "me siento mejor",
        "imagen": "Persona sonriendo y abriendo la ventana en la mañana",
        "ejemplo": [
          "Thank you, I feel much better now.",
          "Gracias, ya me siento mucho mejor."
        ]
      }
    ],
    "grupos": [
      {
        "id": "cuerpo",
        "titulo": "El cuerpo",
        "icono": "🧍",
        "patron": [
          "my head",
          "my back",
          "my knee"
        ],
        "palabras": [
          {
            "en": "head",
            "es": "cabeza",
            "imagen": "Ilustración de una cabeza de perfil, sin texto",
            "ejemplo": [
              "Cover your head. It's very sunny.",
              "Cúbrete la cabeza. Hace mucho sol."
            ]
          },
          {
            "en": "shoulder",
            "es": "hombro",
            "imagen": "Persona tocándose el hombro adolorido",
            "ejemplo": [
              "My shoulder hurts when I lift my arm.",
              "Me duele el hombro cuando levanto el brazo."
            ]
          },
          {
            "en": "arm",
            "es": "brazo",
            "imagen": "Brazo con una venda",
            "ejemplo": [
              "He broke his arm playing basketball.",
              "Se rompió el brazo jugando básquetbol."
            ]
          },
          {
            "en": "hand",
            "es": "mano",
            "imagen": "Manos lavándose con jabón",
            "ejemplo": [
              "Wash your hands before you eat.",
              "Lávate las manos antes de comer."
            ]
          },
          {
            "en": "knee",
            "es": "rodilla",
            "imagen": "Persona con una rodillera en la rodilla",
            "ejemplo": [
              "I hurt my knee when I was running.",
              "Me lastimé la rodilla cuando corría."
            ]
          },
          {
            "en": "foot, feet",
            "es": "pie / pies",
            "imagen": "Pies descalzos en el pasto",
            "ejemplo": [
              "My feet hurt after the walk.",
              "Me duelen los pies después de la caminata."
            ]
          },
          {
            "en": "eye",
            "es": "ojo",
            "imagen": "Ojo de cerca con pestañas",
            "ejemplo": [
              "My eyes are red because I'm tired.",
              "Tengo los ojos rojos porque estoy cansado."
            ]
          },
          {
            "en": "ear",
            "es": "oreja / oído",
            "imagen": "Niño tocándose la oreja con dolor",
            "ejemplo": [
              "My son has an earache.",
              "A mi hijo le duele el oído."
            ]
          },
          {
            "en": "stomach",
            "es": "estómago",
            "imagen": "Persona sosteniendo su abdomen",
            "ejemplo": [
              "My stomach feels strange.",
              "Siento raro el estómago."
            ]
          },
          {
            "en": "neck",
            "es": "cuello",
            "imagen": "Persona estirando el cuello frente a la computadora",
            "ejemplo": [
              "My neck hurts from looking at my phone.",
              "Me duele el cuello de ver el celular."
            ]
          }
        ]
      },
      {
        "id": "consejos",
        "titulo": "Consejos para la salud",
        "icono": "💚",
        "patron": [
          "You should…",
          "You shouldn't…",
          "What should I do?"
        ],
        "palabras": [
          {
            "en": "go to bed earlier",
            "es": "acostarte más temprano",
            "imagen": "Persona apagando la lámpara a las diez de la noche",
            "ejemplo": [
              "You should go to bed earlier.",
              "Deberías acostarte más temprano."
            ]
          },
          {
            "en": "eat more vegetables",
            "es": "comer más verduras",
            "imagen": "Plato colorido lleno de verduras",
            "ejemplo": [
              "You should eat more vegetables.",
              "Deberías comer más verduras."
            ]
          },
          {
            "en": "stay in bed",
            "es": "quedarte en cama",
            "imagen": "Persona enferma en la cama con un té",
            "ejemplo": [
              "You should stay in bed today.",
              "Hoy deberías quedarte en cama."
            ]
          },
          {
            "en": "take a painkiller",
            "es": "tomar un analgésico",
            "imagen": "Pastilla y vaso de agua sobre una mesa de noche",
            "ejemplo": [
              "You should take a painkiller for that headache.",
              "Deberías tomar un analgésico para ese dolor de cabeza."
            ]
          },
          {
            "en": "put some ice on it",
            "es": "ponerle hielo",
            "imagen": "Bolsa de hielo sobre un tobillo hinchado",
            "ejemplo": [
              "Put some ice on your ankle.",
              "Ponle hielo a tu tobillo."
            ]
          },
          {
            "en": "stop working so much",
            "es": "dejar de trabajar tanto",
            "imagen": "Persona cerrando la laptop y estirándose",
            "ejemplo": [
              "You should stop working so much.",
              "Deberías dejar de trabajar tanto."
            ]
          },
          {
            "en": "What should I do?",
            "es": "¿qué debo hacer?",
            "imagen": "Persona preocupada pidiendo consejo a su amiga",
            "ejemplo": [
              "I can't sleep. What should I do?",
              "No puedo dormir. ¿Qué debo hacer?"
            ]
          },
          {
            "en": "Should I call a doctor?",
            "es": "¿debo llamar a un doctor?",
            "imagen": "Mamá con el celular junto a su hijo enfermo",
            "ejemplo": [
              "He has a high fever. Should I call a doctor?",
              "Tiene mucha fiebre. ¿Llamo a un doctor?"
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I have a terrible headache.",
        "es": "Tengo un dolor de cabeza terrible."
      },
      {
        "en": "You should see a doctor about that cough.",
        "es": "Deberías ir al doctor por esa tos."
      },
      {
        "en": "You shouldn't smoke. It's bad for your lungs.",
        "es": "No deberías fumar. Es malo para tus pulmones."
      },
      {
        "en": "I can't sleep. What should I do?",
        "es": "No puedo dormir. ¿Qué debo hacer?"
      },
      {
        "en": "My back hurts from sitting all day.",
        "es": "Me duele la espalda de estar sentado todo el día."
      },
      {
        "en": "Take this medicine three times a day.",
        "es": "Tómate esta medicina tres veces al día."
      },
      {
        "en": "You look tired. You should rest.",
        "es": "Te ves cansado. Deberías descansar."
      },
      {
        "en": "Wash your hands before you eat.",
        "es": "Lávate las manos antes de comer."
      },
      {
        "en": "I don't think you should go to work today.",
        "es": "No creo que debas ir a trabajar hoy.",
        "imagen": "Persona enferma con su pareja convenciéndola de quedarse en casa"
      },
      {
        "en": "Thank you, I feel much better now.",
        "es": "Gracias, ya me siento mucho mejor."
      }
    ],
    "frases": [
      {
        "en": "You have a fever and a bad cough. You should stay in bed and drink a lot of water.",
        "es": "Tienes fiebre y mucha tos. Deberías quedarte en cama y tomar mucha agua.",
        "imagen": "Persona enferma en la cama con un vaso de agua y pañuelos"
      },
      {
        "en": "My neck hurts because I look at my phone all day. I should take more breaks.",
        "es": "Me duele el cuello porque veo el celular todo el día. Debería tomar más descansos.",
        "imagen": "Persona estirando el cuello en su escritorio"
      },
      {
        "en": "You shouldn't drink coffee at night if you want to sleep well.",
        "es": "No deberías tomar café en la noche si quieres dormir bien.",
        "imagen": "Taza de café junto a un reloj marcando las once de la noche"
      },
      {
        "en": "I hurt my knee playing soccer. Should I put some ice on it?",
        "es": "Me lastimé la rodilla jugando fútbol. ¿Le pongo hielo?",
        "imagen": "Jugador sentado en la banca con hielo en la rodilla"
      },
      {
        "en": "The doctor says I should eat less salt and walk thirty minutes every day.",
        "es": "El doctor dice que debería comer menos sal y caminar treinta minutos al día.",
        "imagen": "Doctor explicándole una dieta a su paciente en el consultorio"
      },
      {
        "en": "Children should sleep at least nine hours every night.",
        "es": "Los niños deberían dormir por lo menos nueve horas cada noche.",
        "imagen": "Niño durmiendo tranquilo con su peluche"
      },
      {
        "en": "If you have a toothache, you should see the dentist as soon as possible.",
        "es": "Si te duele una muela, deberías ir al dentista lo antes posible.",
        "imagen": "Dentista revisando la boca de un paciente"
      },
      {
        "en": "You shouldn't carry such a heavy backpack. It's bad for your back.",
        "es": "No deberías cargar una mochila tan pesada. Es mala para tu espalda.",
        "imagen": "Estudiante cargando una mochila enorme y encorvado"
      },
      {
        "en": "I think you should take a day off. You look really stressed.",
        "es": "Creo que deberías tomarte un día libre. Te ves muy estresado.",
        "imagen": "Compañera ofreciendo apoyo a un colega estresado en la oficina"
      },
      {
        "en": "What should I eat when I have a stomachache? Rice and soup.",
        "es": "¿Qué debo comer cuando me duele el estómago? Arroz y sopa.",
        "imagen": "Plato de arroz blanco y un caldo de pollo"
      }
    ],
    "listening": [
      {
        "audio": "I have a terrible toothache. You should see the dentist today.",
        "pregunta": "¿Qué le aconsejan?",
        "opciones": [
          "Ir al dentista hoy",
          "Tomar agua",
          "Descansar",
          "Comer algo"
        ]
      },
      {
        "audio": "You shouldn't run today. Your knee is still swollen.",
        "pregunta": "¿Por qué no debe correr?",
        "opciones": [
          "Tiene la rodilla hinchada",
          "Está lloviendo",
          "Está cansado",
          "Tiene fiebre"
        ]
      },
      {
        "audio": "My son has a fever of thirty-nine degrees. Should I take him to the hospital?",
        "pregunta": "¿Qué tiene el hijo?",
        "opciones": [
          "Fiebre",
          "Tos",
          "Dolor de muela",
          "Un brazo roto"
        ]
      },
      {
        "audio": "The doctor says I should drink two liters of water every day.",
        "pregunta": "¿Cuánta agua debe tomar?",
        "opciones": [
          "Dos litros al día",
          "Un litro al día",
          "Tres vasos al día",
          "Cinco litros a la semana"
        ]
      },
      {
        "audio": "I'm always tired. Maybe you should go to bed earlier and stop using your phone at night.",
        "pregunta": "¿Cuál es uno de los consejos?",
        "opciones": [
          "Dejar de usar el celular en la noche",
          "Tomar café",
          "Hacer ejercicio en la noche",
          "Dormir en la tarde"
        ]
      }
    ],
    "lectura": {
      "titulo": "Ask the doctor",
      "texto": "Dear Doctor Vega, I'm thirty-five years old and I work in an office. I sit in front of a computer for nine hours every day. My back and neck hurt all the time, and I'm always tired. I drink four cups of coffee a day and I don't have time for exercise. What should I do? — Carlos. Dear Carlos, you should stand up and walk for five minutes every hour. You should also check your chair: your feet should be on the floor and the screen should be at the height of your eyes. You shouldn't drink so much coffee, especially in the afternoon. Try to walk to work or take the stairs. And you should sleep at least seven hours. If your back still hurts in two weeks, you should see a physiotherapist. — Dr. Vega.",
      "preguntas": [
        {
          "pregunta": "¿Cuántas horas al día está sentado Carlos?",
          "opciones": [
            "Nueve",
            "Cinco",
            "Siete",
            "Doce"
          ]
        },
        {
          "pregunta": "¿Qué le aconseja hacer cada hora?",
          "opciones": [
            "Pararse y caminar cinco minutos",
            "Tomar café",
            "Dormir",
            "Tomar una pastilla"
          ]
        },
        {
          "pregunta": "¿Dónde debe estar la pantalla?",
          "opciones": [
            "A la altura de sus ojos",
            "Más abajo",
            "Más lejos",
            "A un lado"
          ]
        },
        {
          "pregunta": "¿Qué debe hacer si sigue el dolor en dos semanas?",
          "opciones": [
            "Ver a un fisioterapeuta",
            "Dejar el trabajo",
            "Tomar más café",
            "Comprar otra silla"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con should o shouldn't.",
        "pregunta": "You ___ drink more water.",
        "respuestas": [
          "should"
        ]
      },
      {
        "instruccion": "Completa con should o shouldn't.",
        "pregunta": "You ___ eat so much candy.",
        "respuestas": [
          "shouldn't",
          "should not"
        ]
      },
      {
        "instruccion": "Completa la pregunta.",
        "pregunta": "What ___ I do?",
        "respuestas": [
          "should"
        ]
      },
      {
        "instruccion": "Completa con la palabra del cuerpo.",
        "pregunta": "I have a ___ache. I need a painkiller. (cabeza)",
        "respuestas": [
          "head"
        ]
      },
      {
        "instruccion": "Completa la respuesta corta.",
        "pregunta": "Should I call a doctor? Yes, you ___.",
        "respuestas": [
          "should"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Me duele la espalda.",
        "respuestas": [
          "My back hurts",
          "I have a backache",
          "I have back pain"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Tengo gripa.",
        "respuestas": [
          "I have a cold",
          "I've got a cold"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Deberías descansar.",
        "respuestas": [
          "You should rest"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "No deberías fumar.",
        "respuestas": [
          "You shouldn't smoke",
          "You should not smoke"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "You should to see a doctor.",
        "respuestas": [
          "You should see a doctor"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "You look tired. You ___ go to bed.",
        "opciones": [
          "should",
          "shouldn't",
          "should to",
          "shoulds"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "You ___ eat fast food every day.",
        "opciones": [
          "shouldn't",
          "should",
          "don't should",
          "not should"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ I take this medicine with food?",
        "opciones": [
          "Should",
          "Do",
          "Am",
          "Shall to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I have a sore ___. I can't talk.",
        "opciones": [
          "throat",
          "knee",
          "foot",
          "back"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "My feet ___ after the long walk.",
        "opciones": [
          "hurt",
          "hurts",
          "pain",
          "ache to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es la forma más natural?",
        "opciones": [
          "I don't think you should go.",
          "I think you shouldn't to go.",
          "I not think you should go.",
          "I think you don't should go."
        ]
      },
      {
        "tipo": "listening",
        "audio": "I cut my finger. You should wash it with water and soap.",
        "pregunta": "¿Qué le aconsejan?",
        "opciones": [
          "Lavarlo con agua y jabón",
          "Ir al hospital",
          "Ponerle hielo",
          "Tomar una pastilla"
        ]
      },
      {
        "tipo": "listening",
        "audio": "You shouldn't go to school today. You have a fever.",
        "pregunta": "¿Por qué no debe ir a la escuela?",
        "opciones": [
          "Tiene fiebre",
          "Es día festivo",
          "Llueve",
          "Le duele la muela"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¿Qué debo hacer?",
        "respuestas": [
          "What should I do"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Me duele la cabeza.",
        "respuestas": [
          "I have a headache",
          "My head hurts"
        ]
      }
    ]
  },
  {
    "id": "a2-16",
    "num": 16,
    "titulo": "Could (habilidad en el pasado) y peticiones con can / could",
    "contexto": "Pedir favores y permisos",
    "explicacion": {
      "es": [
        "***Could*** es el **pasado de *can***: habla de lo que **podías o sabías hacer** antes: *When I was five, I **could** swim.* (A los cinco años sabía nadar.) Negativo: ***couldn't***: *I **couldn't** sleep last night.* (Anoche no pude dormir.)",
        "Para **pedir favores** se usa ***Can you…?*** (informal) o ***Could you…?*** (más amable): ***Could you** help me, please? **Can you** pass the salt?*",
        "Para **pedir permiso**: ***Can I…?*** (informal), ***Could I…?*** (más amable) o ***May I…?*** (muy formal): ***Could I** use your phone? **May I** come in?*",
        "Respuestas: ***Sure! / Of course! / No problem.*** para decir que sí; ***Sorry, I can't.*** o ***I'm afraid not.*** para decir que no con cortesía."
      ],
      "tabla": {
        "columnas": [
          "Para…",
          "Informal",
          "Más amable"
        ],
        "filas": [
          [
            "Pedir un favor",
            "Can you open the door?",
            "Could you open the door, please?"
          ],
          [
            "Pedir permiso",
            "Can I sit here?",
            "Could I sit here? / May I sit here?"
          ],
          [
            "Decir que sí",
            "Sure! / OK.",
            "Of course. / No problem."
          ],
          [
            "Decir que no",
            "Sorry, I can't.",
            "I'm afraid not."
          ]
        ]
      },
      "ojo": [
        "Después de *can / could* va el verbo base, sin *to*: *Could you **help** me?* ✅, no *Could you to help me?* ❌.",
        "*Could* **no** cambia con *he / she*: *She **could** read at four* ✅, no *She coulds* ❌.",
        "Si te preguntan *Could you…?*, no contestes *Yes, I could* ❌. Di ***Sure!*** o ***Of course!***",
        "***Do you mind if I…?*** = ¿Te molesta si…? Si **no** te molesta, se contesta ***No, not at all.*** (¡con *no*!).",
        "Con *please* suena todavía mejor: *Could you **please** close the window?*"
      ],
      "en": [
        "Could is the past of can: When I was five, I could swim. I couldn't sleep last night.",
        "To ask for favors: Could you help me, please? Can you pass the salt?",
        "To ask for permission: Could I use your phone? May I come in?",
        "Answers: Sure! Of course! Sorry, I can't."
      ]
    },
    "vocabulario": [
      {
        "en": "I could swim.",
        "es": "sabía nadar",
        "imagen": "Niño pequeño nadando feliz en una alberca",
        "ejemplo": [
          "When I was five, I could swim.",
          "A los cinco años ya sabía nadar."
        ]
      },
      {
        "en": "I couldn't sleep.",
        "es": "no pude dormir",
        "imagen": "Persona despierta en la cama mirando el reloj de madrugada",
        "ejemplo": [
          "I couldn't sleep last night because of the noise.",
          "Anoche no pude dormir por el ruido."
        ]
      },
      {
        "en": "She could read at four.",
        "es": "ella sabía leer a los cuatro",
        "imagen": "Niña pequeña leyendo un cuento sola",
        "ejemplo": [
          "My daughter could read at four.",
          "Mi hija sabía leer a los cuatro años."
        ]
      },
      {
        "en": "We couldn't find a parking space.",
        "es": "no encontramos dónde estacionarnos",
        "imagen": "Carro dando vueltas en un estacionamiento lleno",
        "ejemplo": [
          "We couldn't find a parking space.",
          "No encontramos dónde estacionarnos."
        ]
      },
      {
        "en": "Could you help me?",
        "es": "¿me podrías ayudar?",
        "imagen": "Persona con muchas cajas pidiendo ayuda a su vecino",
        "ejemplo": [
          "Could you help me with these boxes?",
          "¿Me podrías ayudar con estas cajas?"
        ]
      },
      {
        "en": "Can you pass the salt?",
        "es": "¿me pasas la sal?",
        "imagen": "Mano pasando el salero en la mesa familiar",
        "ejemplo": [
          "Can you pass the salt, please?",
          "¿Me pasas la sal, por favor?"
        ]
      },
      {
        "en": "Could you open the window?",
        "es": "¿podrías abrir la ventana?",
        "imagen": "Persona abriendo la ventana de una oficina",
        "ejemplo": [
          "It's hot. Could you open the window?",
          "Hace calor. ¿Podrías abrir la ventana?"
        ]
      },
      {
        "en": "Could you repeat that?",
        "es": "¿podría repetir eso?",
        "imagen": "Estudiante levantando la mano para preguntar",
        "ejemplo": [
          "Sorry, could you repeat that, please?",
          "Perdón, ¿podría repetirlo, por favor?"
        ]
      },
      {
        "en": "Can I use your phone?",
        "es": "¿puedo usar tu teléfono?",
        "imagen": "Persona pidiendo prestado un celular a un amigo",
        "ejemplo": [
          "Can I use your phone? Mine is dead.",
          "¿Puedo usar tu teléfono? El mío no tiene batería."
        ]
      },
      {
        "en": "Could I leave early today?",
        "es": "¿podría salir temprano hoy?",
        "imagen": "Empleada hablando con su jefa en la oficina",
        "ejemplo": [
          "Could I leave early today? I have a doctor's appointment.",
          "¿Podría salir temprano hoy? Tengo cita con el doctor."
        ]
      },
      {
        "en": "May I come in?",
        "es": "¿puedo pasar?",
        "imagen": "Persona tocando la puerta de una oficina",
        "ejemplo": [
          "May I come in? Of course.",
          "¿Puedo pasar? Claro."
        ]
      },
      {
        "en": "Can I sit here?",
        "es": "¿me puedo sentar aquí?",
        "imagen": "Persona señalando un asiento libre en un autobús",
        "ejemplo": [
          "Excuse me, can I sit here?",
          "Disculpe, ¿me puedo sentar aquí?"
        ]
      },
      {
        "en": "Could you lend me some money?",
        "es": "¿me podrías prestar dinero?",
        "imagen": "Amigo dando unos billetes a su amigo",
        "ejemplo": [
          "Could you lend me fifty pesos?",
          "¿Me podrías prestar cincuenta pesos?"
        ]
      },
      {
        "en": "Could I borrow your pen?",
        "es": "¿me prestas tu pluma?",
        "imagen": "Estudiante pidiendo una pluma a su compañera",
        "ejemplo": [
          "Could I borrow your pen for a minute?",
          "¿Me prestas tu pluma un minuto?"
        ]
      },
      {
        "en": "Sure!",
        "es": "¡claro!",
        "imagen": "Persona sonriendo y asintiendo",
        "ejemplo": [
          "Can you help me? Sure!",
          "¿Me ayudas? ¡Claro!"
        ]
      },
      {
        "en": "Sorry, I can't.",
        "es": "lo siento, no puedo",
        "imagen": "Persona disculpándose con las manos juntas",
        "ejemplo": [
          "Can you come tomorrow? Sorry, I can't.",
          "¿Puedes venir mañana? Lo siento, no puedo."
        ]
      }
    ],
    "grupos": [
      {
        "id": "favores",
        "titulo": "Pedir favores",
        "icono": "🙏",
        "patron": [
          "Could you…, please?",
          "Can you…?",
          "Would you mind…?"
        ],
        "palabras": [
          {
            "en": "Could you take a photo of us?",
            "es": "¿nos podrías tomar una foto?",
            "imagen": "Turistas dándole su celular a alguien para una foto",
            "ejemplo": [
              "Excuse me, could you take a photo of us?",
              "Disculpe, ¿nos podría tomar una foto?"
            ]
          },
          {
            "en": "Can you turn down the music?",
            "es": "¿puedes bajarle a la música?",
            "imagen": "Persona tapándose los oídos junto a una bocina",
            "ejemplo": [
              "Can you turn down the music, please?",
              "¿Puedes bajarle a la música, por favor?"
            ]
          },
          {
            "en": "Could you call me back?",
            "es": "¿me podrías regresar la llamada?",
            "imagen": "Persona hablando por teléfono en un lugar ruidoso",
            "ejemplo": [
              "I'm busy now. Could you call me back?",
              "Ahorita estoy ocupado. ¿Me puedes regresar la llamada?"
            ]
          },
          {
            "en": "Can you pick me up?",
            "es": "¿puedes pasar por mí?",
            "imagen": "Persona esperando en la banqueta y un carro llegando",
            "ejemplo": [
              "Can you pick me up at the station?",
              "¿Puedes pasar por mí a la estación?"
            ]
          },
          {
            "en": "Could you carry this for me?",
            "es": "¿me podrías cargar esto?",
            "imagen": "Hijo cargando bolsas del súper de su mamá",
            "ejemplo": [
              "Could you carry this bag for me?",
              "¿Me podrías cargar esta bolsa?"
            ]
          },
          {
            "en": "Can you keep a secret?",
            "es": "¿puedes guardar un secreto?",
            "imagen": "Amiga diciendo un secreto al oído",
            "ejemplo": [
              "Can you keep a secret?",
              "¿Puedes guardar un secreto?"
            ]
          }
        ]
      },
      {
        "id": "permisos",
        "titulo": "Pedir permiso",
        "icono": "✋",
        "patron": [
          "Can I…?",
          "Could I…?",
          "May I…?"
        ],
        "palabras": [
          {
            "en": "Can I go to the bathroom?",
            "es": "¿puedo ir al baño?",
            "imagen": "Alumno levantando la mano en clase",
            "ejemplo": [
              "Can I go to the bathroom, please?",
              "¿Puedo ir al baño, por favor?"
            ]
          },
          {
            "en": "Could I ask you a question?",
            "es": "¿le podría hacer una pregunta?",
            "imagen": "Estudiante acercándose al escritorio del maestro",
            "ejemplo": [
              "Could I ask you a question?",
              "¿Le podría hacer una pregunta?"
            ]
          },
          {
            "en": "May I use the restroom?",
            "es": "¿puedo usar el baño?",
            "imagen": "Cliente preguntando a un empleado en una tienda",
            "ejemplo": [
              "May I use the restroom?",
              "¿Puedo usar el baño?"
            ]
          },
          {
            "en": "Can I try it on?",
            "es": "¿me lo puedo probar?",
            "imagen": "Persona sosteniendo una chamarra en una tienda de ropa",
            "ejemplo": [
              "Can I try this jacket on?",
              "¿Me puedo probar esta chamarra?"
            ]
          },
          {
            "en": "Could I pay by card?",
            "es": "¿podría pagar con tarjeta?",
            "imagen": "Cliente mostrando su tarjeta en la caja",
            "ejemplo": [
              "Could I pay by card?",
              "¿Podría pagar con tarjeta?"
            ]
          },
          {
            "en": "Do you mind if I open the window?",
            "es": "¿te molesta si abro la ventana?",
            "imagen": "Pasajero preguntando antes de abrir la ventana del camión",
            "ejemplo": [
              "Do you mind if I open the window? No, not at all.",
              "¿Te molesta si abro la ventana? No, para nada."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "When I was five, I could swim.",
        "es": "A los cinco años ya sabía nadar."
      },
      {
        "en": "I couldn't sleep last night because of the noise.",
        "es": "Anoche no pude dormir por el ruido."
      },
      {
        "en": "Could you help me with these boxes?",
        "es": "¿Me podrías ayudar con estas cajas?"
      },
      {
        "en": "Can you pass the salt, please?",
        "es": "¿Me pasas la sal, por favor?"
      },
      {
        "en": "Sorry, could you repeat that, please?",
        "es": "Perdón, ¿podría repetirlo, por favor?"
      },
      {
        "en": "Can I use your phone? Mine is dead.",
        "es": "¿Puedo usar tu teléfono? El mío no tiene batería."
      },
      {
        "en": "May I come in? Of course.",
        "es": "¿Puedo pasar? Claro."
      },
      {
        "en": "Excuse me, could you take a photo of us?",
        "es": "Disculpe, ¿nos podría tomar una foto?"
      },
      {
        "en": "Can I try this jacket on?",
        "es": "¿Me puedo probar esta chamarra?"
      },
      {
        "en": "Do you mind if I open the window? No, not at all.",
        "es": "¿Te molesta si abro la ventana? No, para nada."
      }
    ],
    "frases": [
      {
        "en": "When my grandfather was young, he could run very fast, but he couldn't swim.",
        "es": "Cuando mi abuelo era joven, podía correr muy rápido, pero no sabía nadar.",
        "imagen": "Foto antigua de un joven corriendo en una pista"
      },
      {
        "en": "I'm sorry I couldn't come to your party. I had to work.",
        "es": "Perdón que no pude ir a tu fiesta. Tuve que trabajar.",
        "imagen": "Persona disculpándose con su amiga con un regalo en la mano"
      },
      {
        "en": "Could you please speak more slowly? My English isn't very good.",
        "es": "¿Podría hablar más despacio, por favor? Mi inglés no es muy bueno.",
        "imagen": "Turista hablando con un vendedor en otro país"
      },
      {
        "en": "Excuse me, could I sit here, or is this seat taken?",
        "es": "Disculpe, ¿me podría sentar aquí o está ocupado este asiento?",
        "imagen": "Persona preguntando por un asiento en una cafetería llena"
      },
      {
        "en": "Can you pick me up at the airport on Friday? My flight arrives at nine.",
        "es": "¿Puedes pasar por mí al aeropuerto el viernes? Mi vuelo llega a las nueve.",
        "imagen": "Persona saliendo del aeropuerto y su amigo esperándola con el carro"
      },
      {
        "en": "Could I leave early today? My son is sick and I have to take him to the doctor.",
        "es": "¿Podría salir temprano hoy? Mi hijo está enfermo y tengo que llevarlo al doctor.",
        "imagen": "Empleada pidiendo permiso a su jefe con cara preocupada"
      },
      {
        "en": "We couldn't find the restaurant, so we asked a police officer.",
        "es": "No encontramos el restaurante, así que le preguntamos a un policía.",
        "imagen": "Pareja pidiendo direcciones a un policía en la calle"
      },
      {
        "en": "Could you lend me your car this weekend? I promise I'll be careful.",
        "es": "¿Me prestarías tu carro este fin de semana? Te prometo que tendré cuidado.",
        "imagen": "Amigo entregando las llaves de su carro a otro"
      },
      {
        "en": "Can you turn down the TV, please? I'm trying to study.",
        "es": "¿Puedes bajarle a la tele, por favor? Estoy tratando de estudiar.",
        "imagen": "Estudiante pidiendo a su hermano que baje el volumen"
      },
      {
        "en": "I could understand the movie without subtitles. I was so happy!",
        "es": "¡Pude entender la película sin subtítulos! Estaba muy feliz.",
        "imagen": "Persona viendo una película en inglés y sonriendo emocionada"
      }
    ],
    "listening": [
      {
        "audio": "Could you close the door, please? It's very cold.",
        "pregunta": "¿Qué le piden?",
        "opciones": [
          "Cerrar la puerta",
          "Abrir la ventana",
          "Prender la calefacción",
          "Traer un suéter"
        ]
      },
      {
        "audio": "I couldn't go to work yesterday because my car broke down.",
        "pregunta": "¿Por qué no fue a trabajar?",
        "opciones": [
          "Se le descompuso el carro",
          "Estaba enfermo",
          "Era día festivo",
          "Se quedó dormido"
        ]
      },
      {
        "audio": "Excuse me, can I pay by card? Sorry, only cash.",
        "pregunta": "¿Cómo tiene que pagar?",
        "opciones": [
          "En efectivo",
          "Con tarjeta",
          "Con transferencia",
          "Con cheque"
        ]
      },
      {
        "audio": "When I was a child, I could speak French, but now I can't.",
        "pregunta": "¿Qué podía hacer de niño?",
        "opciones": [
          "Hablar francés",
          "Nadar",
          "Tocar el piano",
          "Leer muy rápido"
        ]
      },
      {
        "audio": "Could I borrow your umbrella? Sure, but bring it back tomorrow.",
        "pregunta": "¿Qué pide prestado?",
        "opciones": [
          "Un paraguas",
          "Un libro",
          "Dinero",
          "Una pluma"
        ]
      }
    ],
    "lectura": {
      "titulo": "A day of favors",
      "texto": "Yesterday was a strange day for Tomás. In the morning, his neighbor knocked on the door: Could you help me move my sofa? Tomás said: Sure! But the sofa was very heavy, and they couldn't carry it up the stairs. They had to call two more neighbors. At work, his boss asked: Could you stay late today? We have an important report. Tomás couldn't say no. On the way home, a tourist stopped him: Excuse me, could you tell me where the cathedral is? He walked with her for ten minutes. When he finally arrived home, his wife said: Can you cook dinner tonight? I'm exhausted. Tomás smiled and asked: Could I order pizza instead? She laughed: Of course!",
      "preguntas": [
        {
          "pregunta": "¿Qué le pidió el vecino?",
          "opciones": [
            "Ayuda para mover un sillón",
            "Dinero prestado",
            "Su carro",
            "Cuidar a su perro"
          ]
        },
        {
          "pregunta": "¿Qué le pidió su jefe?",
          "opciones": [
            "Quedarse tarde",
            "Llegar temprano",
            "Viajar",
            "Hacer una presentación"
          ]
        },
        {
          "pregunta": "¿Qué buscaba la turista?",
          "opciones": [
            "La catedral",
            "Un restaurante",
            "El museo",
            "La estación"
          ]
        },
        {
          "pregunta": "¿Qué cenaron?",
          "opciones": [
            "Pizza",
            "Lo que cocinó Tomás",
            "Tacos",
            "Nada"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con could o couldn't.",
        "pregunta": "I ___ sleep last night. It was too hot.",
        "respuestas": [
          "couldn't",
          "could not"
        ]
      },
      {
        "instruccion": "Completa con could o couldn't.",
        "pregunta": "When she was three, she ___ swim.",
        "respuestas": [
          "could"
        ]
      },
      {
        "instruccion": "Completa la petición.",
        "pregunta": "___ you help me, please?",
        "respuestas": [
          "Could",
          "Can"
        ]
      },
      {
        "instruccion": "Completa la petición de permiso.",
        "pregunta": "___ I come in?",
        "respuestas": [
          "May",
          "Can",
          "Could"
        ]
      },
      {
        "instruccion": "Completa la respuesta.",
        "pregunta": "Do you mind if I sit here? No, not at ___.",
        "respuestas": [
          "all"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Me podrías ayudar?",
        "respuestas": [
          "Could you help me",
          "Can you help me"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Puedo usar tu teléfono?",
        "respuestas": [
          "Can I use your phone",
          "Could I use your phone",
          "May I use your phone"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "No pude dormir.",
        "respuestas": [
          "I couldn't sleep",
          "I could not sleep"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Podría repetir eso, por favor?",
        "respuestas": [
          "Could you repeat that, please",
          "Could you repeat that please",
          "Can you repeat that, please",
          "Could you please repeat that"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "Could you to open the door?",
        "respuestas": [
          "Could you open the door"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "When I was ten, I ___ ride a bike.",
        "opciones": [
          "could",
          "can",
          "coulded",
          "could to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We ___ find the house. It was very dark.",
        "opciones": [
          "couldn't",
          "can't",
          "don't could",
          "not could"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "La forma más amable de pedir un favor:",
        "opciones": [
          "Could you help me, please?",
          "Help me.",
          "You help me?",
          "Can help me?"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Could you open the window? — ___",
        "opciones": [
          "Sure!",
          "Yes, I could.",
          "Yes, I open.",
          "No, I couldn't."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ I use the bathroom? (muy formal)",
        "opciones": [
          "May",
          "Do",
          "Am",
          "Will"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Do you mind if I sit here? (no te molesta)",
        "opciones": [
          "No, not at all.",
          "Yes, of course.",
          "Yes, I mind.",
          "No, I can't."
        ]
      },
      {
        "tipo": "listening",
        "audio": "Could you pick up the kids from school today? I have a meeting until six.",
        "pregunta": "¿Hasta qué hora es la junta?",
        "opciones": [
          "Hasta las seis",
          "Hasta las dos",
          "Hasta las cuatro",
          "Hasta las ocho"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I couldn't call you because I lost my phone at the gym.",
        "pregunta": "¿Dónde perdió el celular?",
        "opciones": [
          "En el gimnasio",
          "En el camión",
          "En el trabajo",
          "En la escuela"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¿Me pasas la sal?",
        "respuestas": [
          "Can you pass the salt",
          "Could you pass the salt",
          "Can you pass me the salt",
          "Could you pass me the salt"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Lo siento, no puedo.",
        "respuestas": [
          "Sorry, I can't",
          "I'm sorry, I can't",
          "Sorry I can't",
          "I'm sorry I can't"
        ]
      }
    ]
  },
  {
    "id": "a2-17",
    "num": 17,
    "titulo": "Pronombres posesivos (mine, yours…) y whose",
    "contexto": "¿De quién es?",
    "explicacion": {
      "es": [
        "Los **pronombres posesivos** reemplazan al sustantivo para no repetirlo: *This is **my** bag., This bag is **mine**.* (Esta bolsa es mía.)",
        "Son: ***mine*** (mío), ***yours*** (tuyo / suyo de usted / de ustedes), ***his*** (de él), ***hers*** (de ella), ***ours*** (nuestro), ***theirs*** (de ellos). **No** llevan sustantivo después: *It's **mine*** ✅, no *It's mine bag* ❌.",
        "Para preguntar de quién es algo se usa ***Whose…?***: ***Whose** phone is this? — It's **mine**. / It's **Ana's**.* (¿De quién es este celular?) También: ***Whose is this?***",
        "Con nombres se usa ***'s***: *It's **Carlos's** car. These are **my parents'** keys* (con plural terminado en *-s* solo se agrega el apóstrofo)."
      ],
      "tabla": {
        "columnas": [
          "Adjetivo posesivo (+ sustantivo)",
          "Pronombre posesivo (solo)"
        ],
        "filas": [
          [
            "my car",
            "mine"
          ],
          [
            "your car",
            "yours"
          ],
          [
            "his car",
            "his"
          ],
          [
            "her car",
            "hers"
          ],
          [
            "our car",
            "ours"
          ],
          [
            "their car",
            "theirs"
          ]
        ]
      },
      "ojo": [
        "*Hers, yours, ours, theirs* **no** llevan apóstrofo: *yours* ✅, no *your's* ❌.",
        "***Whose*** (de quién) suena igual que ***who's*** (*who is*, quién es). *Whose bag is this?* / *Who's that man?*",
        "Al final de una carta o correo: ***Yours***, ***Best wishes*** (atentamente / saludos).",
        "*A friend of **mine*** = un amigo mío. *She's a friend of **mine***.",
        "*Its* (de eso, para cosas y animales) casi no se usa como pronombre solo: *The dog wants **its** ball.*"
      ],
      "en": [
        "Possessive pronouns replace the noun: This is my bag. This bag is mine.",
        "Mine, yours, his, hers, ours, theirs.",
        "To ask about the owner, use whose: Whose phone is this? It's mine. It's Ana's."
      ]
    },
    "vocabulario": [
      {
        "en": "It's mine.",
        "es": "es mío",
        "imagen": "Niño abrazando su juguete con fuerza",
        "ejemplo": [
          "Don't touch that! It's mine!",
          "¡No toques eso! ¡Es mío!"
        ]
      },
      {
        "en": "Is this yours?",
        "es": "¿esto es tuyo?",
        "imagen": "Persona ofreciendo una cartera que encontró",
        "ejemplo": [
          "Excuse me, is this yours?",
          "Disculpa, ¿esto es tuyo?"
        ]
      },
      {
        "en": "It's his.",
        "es": "es de él",
        "imagen": "Hombre recibiendo una chamarra que dejó olvidada",
        "ejemplo": [
          "That jacket isn't mine. It's his.",
          "Esa chamarra no es mía. Es de él."
        ]
      },
      {
        "en": "It's hers.",
        "es": "es de ella",
        "imagen": "Mujer recogiendo su bolsa de una silla",
        "ejemplo": [
          "The red bag is hers.",
          "La bolsa roja es de ella."
        ]
      },
      {
        "en": "It's ours.",
        "es": "es nuestro",
        "imagen": "Pareja frente a su casa nueva con las llaves",
        "ejemplo": [
          "This house is ours now!",
          "¡Esta casa ya es nuestra!"
        ]
      },
      {
        "en": "It's theirs.",
        "es": "es de ellos",
        "imagen": "Familia junto a su carro en el estacionamiento",
        "ejemplo": [
          "The white car is theirs.",
          "El carro blanco es de ellos."
        ]
      },
      {
        "en": "Whose phone is this?",
        "es": "¿de quién es este celular?",
        "imagen": "Celular olvidado sobre una mesa de la oficina",
        "ejemplo": [
          "Whose phone is this? It's ringing.",
          "¿De quién es este celular? Está sonando."
        ]
      },
      {
        "en": "Whose keys are these?",
        "es": "¿de quién son estas llaves?",
        "imagen": "Llavero sobre el mostrador de una tienda",
        "ejemplo": [
          "Whose keys are these?",
          "¿De quién son estas llaves?"
        ]
      },
      {
        "en": "It's Ana's.",
        "es": "es de Ana",
        "imagen": "Mujer sonriendo con un paraguas amarillo",
        "ejemplo": [
          "Whose umbrella is this? It's Ana's.",
          "¿De quién es este paraguas? Es de Ana."
        ]
      },
      {
        "en": "my parents' house",
        "es": "la casa de mis papás",
        "imagen": "Casa con jardín donde llegan los hijos a visitar",
        "ejemplo": [
          "We have lunch at my parents' house on Sundays.",
          "Los domingos comemos en casa de mis papás."
        ]
      },
      {
        "en": "a friend of mine",
        "es": "un amigo mío",
        "imagen": "Dos amigos chocando las manos en la calle",
        "ejemplo": [
          "A friend of mine lives in Canada.",
          "Un amigo mío vive en Canadá."
        ]
      },
      {
        "en": "the dog's bed",
        "es": "la cama del perro",
        "imagen": "Perro dormido en su cama redonda",
        "ejemplo": [
          "The cat is sleeping in the dog's bed.",
          "El gato está durmiendo en la cama del perro."
        ]
      },
      {
        "en": "Yours is bigger.",
        "es": "el tuyo es más grande",
        "imagen": "Dos rebanadas de pastel de distinto tamaño",
        "ejemplo": [
          "My piece is small. Yours is bigger!",
          "Mi pedazo es pequeño. ¡El tuyo es más grande!"
        ]
      },
      {
        "en": "Mine is the blue one.",
        "es": "el mío es el azul",
        "imagen": "Varias tazas de colores en la cocina de la oficina",
        "ejemplo": [
          "Which cup is yours? Mine is the blue one.",
          "¿Cuál taza es la tuya? La mía es la azul."
        ]
      },
      {
        "en": "Is it his or hers?",
        "es": "¿es de él o de ella?",
        "imagen": "Dos cepillos de dientes en un vaso del baño",
        "ejemplo": [
          "This toothbrush, is it his or hers?",
          "Este cepillo, ¿es de él o de ella?"
        ]
      },
      {
        "en": "That's not mine.",
        "es": "eso no es mío",
        "imagen": "Persona negando con la mano ante una mochila",
        "ejemplo": [
          "Sorry, that's not mine.",
          "Perdón, eso no es mío."
        ]
      }
    ],
    "grupos": [
      {
        "id": "objetos",
        "titulo": "Objetos perdidos",
        "icono": "🔎",
        "patron": [
          "a wallet",
          "glasses",
          "an umbrella"
        ],
        "palabras": [
          {
            "en": "a wallet",
            "es": "una cartera",
            "imagen": "Cartera de piel café sobre una banca",
            "ejemplo": [
              "I found a wallet on the bus.",
              "Encontré una cartera en el camión."
            ]
          },
          {
            "en": "glasses",
            "es": "lentes",
            "imagen": "Lentes de armazón negro sobre un libro",
            "ejemplo": [
              "Whose glasses are these?",
              "¿De quién son estos lentes?"
            ]
          },
          {
            "en": "an umbrella",
            "es": "un paraguas",
            "imagen": "Paraguas rojo recargado en la pared",
            "ejemplo": [
              "Somebody left an umbrella here.",
              "Alguien dejó un paraguas aquí."
            ]
          },
          {
            "en": "a backpack",
            "es": "una mochila",
            "imagen": "Mochila azul en el piso de un salón",
            "ejemplo": [
              "Is this backpack yours?",
              "¿Esta mochila es tuya?"
            ]
          },
          {
            "en": "a scarf",
            "es": "una bufanda",
            "imagen": "Bufanda de lana gris doblada sobre una silla",
            "ejemplo": [
              "This scarf is hers.",
              "Esta bufanda es de ella."
            ]
          },
          {
            "en": "headphones",
            "es": "audífonos",
            "imagen": "Audífonos blancos sobre un escritorio",
            "ejemplo": [
              "Are these headphones yours or his?",
              "¿Estos audífonos son tuyos o de él?"
            ]
          },
          {
            "en": "a charger",
            "es": "un cargador",
            "imagen": "Cargador de celular conectado a la pared",
            "ejemplo": [
              "Can I borrow your charger? Mine is at home.",
              "¿Me prestas tu cargador? El mío está en casa."
            ]
          },
          {
            "en": "lost and found",
            "es": "objetos perdidos",
            "imagen": "Caja con objetos olvidados en una recepción",
            "ejemplo": [
              "Ask at the lost and found.",
              "Pregunta en objetos perdidos."
            ]
          }
        ]
      },
      {
        "id": "familia",
        "titulo": "Lo de mi familia",
        "icono": "👪",
        "patron": [
          "my sister's room",
          "our neighbors' dog",
          "theirs"
        ],
        "palabras": [
          {
            "en": "my sister's room",
            "es": "el cuarto de mi hermana",
            "imagen": "Cuarto de adolescente decorado con fotos y luces",
            "ejemplo": [
              "My sister's room is always messy.",
              "El cuarto de mi hermana siempre está desordenado."
            ]
          },
          {
            "en": "my brother's bike",
            "es": "la bici de mi hermano",
            "imagen": "Bicicleta roja recargada en la reja de una casa",
            "ejemplo": [
              "I borrowed my brother's bike.",
              "Le pedí prestada la bici a mi hermano."
            ]
          },
          {
            "en": "our neighbors' dog",
            "es": "el perro de nuestros vecinos",
            "imagen": "Perro asomándose por la reja de la casa vecina",
            "ejemplo": [
              "Our neighbors' dog barks all night.",
              "El perro de nuestros vecinos ladra toda la noche."
            ]
          },
          {
            "en": "my grandparents' farm",
            "es": "el rancho de mis abuelos",
            "imagen": "Rancho con vacas y casa de adobe",
            "ejemplo": [
              "We spend summer at my grandparents' farm.",
              "Pasamos el verano en el rancho de mis abuelos."
            ]
          },
          {
            "en": "my husband's car",
            "es": "el carro de mi esposo",
            "imagen": "Carro gris estacionado frente a una casa",
            "ejemplo": [
              "Today I'm driving my husband's car.",
              "Hoy manejo el carro de mi esposo."
            ]
          },
          {
            "en": "the children's toys",
            "es": "los juguetes de los niños",
            "imagen": "Juguetes de colores tirados en la alfombra de la sala",
            "ejemplo": [
              "The children's toys are everywhere!",
              "¡Los juguetes de los niños están por todos lados!"
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Excuse me, is this yours?",
        "es": "Disculpa, ¿esto es tuyo?"
      },
      {
        "en": "Whose phone is this? It's ringing.",
        "es": "¿De quién es este celular? Está sonando."
      },
      {
        "en": "Whose umbrella is this? It's Ana's.",
        "es": "¿De quién es este paraguas? Es de Ana."
      },
      {
        "en": "The red bag is hers.",
        "es": "La bolsa roja es de ella."
      },
      {
        "en": "This house is ours now!",
        "es": "¡Esta casa ya es nuestra!"
      },
      {
        "en": "A friend of mine lives in Canada.",
        "es": "Un amigo mío vive en Canadá."
      },
      {
        "en": "Which cup is yours? Mine is the blue one.",
        "es": "¿Cuál taza es la tuya? La mía es la azul."
      },
      {
        "en": "Can I borrow your charger? Mine is at home.",
        "es": "¿Me prestas tu cargador? El mío está en casa."
      },
      {
        "en": "We have lunch at my parents' house on Sundays.",
        "es": "Los domingos comemos en casa de mis papás."
      },
      {
        "en": "Sorry, that's not mine.",
        "es": "Perdón, eso no es mío."
      }
    ],
    "frases": [
      {
        "en": "This isn't my jacket. Mine is black, and this one is dark blue.",
        "es": "Esta no es mi chamarra. La mía es negra y esta es azul marino.",
        "imagen": "Persona comparando dos chamarras parecidas en un perchero"
      },
      {
        "en": "Whose shoes are these in the living room? They're your brother's.",
        "es": "¿De quién son estos zapatos en la sala? Son de tu hermano.",
        "imagen": "Mamá señalando unos tenis tirados en medio de la sala"
      },
      {
        "en": "Their house is bigger than ours, but ours has a beautiful garden.",
        "es": "Su casa es más grande que la nuestra, pero la nuestra tiene un jardín precioso.",
        "imagen": "Casa pequeña con un jardín lleno de flores"
      },
      {
        "en": "My phone is dead. Can I use yours for a minute?",
        "es": "Mi celular no tiene batería. ¿Puedo usar el tuyo un minuto?",
        "imagen": "Persona pidiendo prestado el celular a su compañero"
      },
      {
        "en": "I found a wallet on the bus and took it to the lost and found.",
        "es": "Encontré una cartera en el camión y la llevé a objetos perdidos.",
        "imagen": "Persona entregando una cartera en un módulo de información"
      },
      {
        "en": "Is this coffee yours or mine? I can't remember.",
        "es": "¿Este café es tuyo o mío? No me acuerdo.",
        "imagen": "Dos tazas de café iguales sobre un escritorio"
      },
      {
        "en": "Our neighbors' dog sleeps in our garden every night!",
        "es": "¡El perro de nuestros vecinos duerme en nuestro jardín todas las noches!",
        "imagen": "Perro dormido en el pasto de un jardín vecino"
      },
      {
        "en": "My sister borrowed my dress, and now she says it's hers!",
        "es": "¡Mi hermana me pidió prestado mi vestido y ahora dice que es suyo!",
        "imagen": "Hermanas discutiendo en broma por un vestido"
      },
      {
        "en": "A friend of mine works at the airport, so he can help us.",
        "es": "Un amigo mío trabaja en el aeropuerto, así que nos puede ayudar.",
        "imagen": "Empleado del aeropuerto saludando a unos amigos"
      },
      {
        "en": "Whose idea was this? It was mine, and it was a great idea!",
        "es": "¿De quién fue esta idea? Fue mía, ¡y fue una gran idea!",
        "imagen": "Amigos celebrando en una fiesta sorpresa"
      }
    ],
    "listening": [
      {
        "audio": "Whose car is that? It's my uncle's. He's visiting us.",
        "pregunta": "¿De quién es el carro?",
        "opciones": [
          "Del tío",
          "Del papá",
          "Del vecino",
          "De su hermano"
        ]
      },
      {
        "audio": "Is this pen yours? No, mine is green. That one is Laura's.",
        "pregunta": "¿De qué color es la pluma de la persona?",
        "opciones": [
          "Verde",
          "Azul",
          "Negra",
          "Roja"
        ]
      },
      {
        "audio": "Our apartment is small, but theirs is even smaller.",
        "pregunta": "¿Cuál departamento es más pequeño?",
        "opciones": [
          "El de ellos",
          "El suyo",
          "Son iguales",
          "No dice"
        ]
      },
      {
        "audio": "I left my glasses at my grandmother's house.",
        "pregunta": "¿Dónde dejó sus lentes?",
        "opciones": [
          "En casa de su abuela",
          "En el trabajo",
          "En el carro",
          "En la escuela"
        ]
      },
      {
        "audio": "Excuse me, is this bag yours? Oh yes, thank you so much!",
        "pregunta": "¿De quién es la bolsa?",
        "opciones": [
          "De la persona que contesta",
          "De nadie",
          "De la primera persona",
          "De un niño"
        ]
      }
    ],
    "lectura": {
      "titulo": "The lost and found box",
      "texto": "Every Friday, Mrs. Ortiz, the school secretary, opens the lost and found box. This week there were a lot of things: a green scarf, two water bottles, a pair of glasses, a math book, and a small teddy bear. Whose scarf is this? she asked. A girl said: It's mine! My grandma made it. The math book was Diego's; his name was inside. Nobody wanted the water bottles, so Mrs. Ortiz kept them for the school garden. The glasses were the hardest. They're not mine, said the English teacher. Not mine, said the principal. Finally, the janitor laughed: They're mine! I looked for them all week. And the teddy bear? It was Mrs. Ortiz's daughter's. She was in kindergarten.",
      "preguntas": [
        {
          "pregunta": "¿Cuándo abre la caja la señora Ortiz?",
          "opciones": [
            "Cada viernes",
            "Cada lunes",
            "Una vez al mes",
            "Todos los días"
          ]
        },
        {
          "pregunta": "¿Quién hizo la bufanda verde?",
          "opciones": [
            "La abuela de la niña",
            "La niña",
            "La secretaria",
            "La maestra"
          ]
        },
        {
          "pregunta": "¿Cómo supieron que el libro era de Diego?",
          "opciones": [
            "Su nombre estaba adentro",
            "Diego lo pidió",
            "Era su materia favorita",
            "Lo dijo la maestra"
          ]
        },
        {
          "pregunta": "¿De quién eran los lentes?",
          "opciones": [
            "Del conserje",
            "De la maestra de inglés",
            "Del director",
            "De la secretaria"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Escribe el pronombre posesivo.",
        "pregunta": "my → ___",
        "respuestas": [
          "mine"
        ]
      },
      {
        "instruccion": "Escribe el pronombre posesivo.",
        "pregunta": "her → ___",
        "respuestas": [
          "hers"
        ]
      },
      {
        "instruccion": "Escribe el pronombre posesivo.",
        "pregunta": "our → ___",
        "respuestas": [
          "ours"
        ]
      },
      {
        "instruccion": "Escribe el pronombre posesivo.",
        "pregunta": "their → ___",
        "respuestas": [
          "theirs"
        ]
      },
      {
        "instruccion": "Completa la pregunta.",
        "pregunta": "___ bag is this?",
        "respuestas": [
          "Whose"
        ]
      },
      {
        "instruccion": "Reescribe con un pronombre posesivo.",
        "pregunta": "This is your coffee. → This coffee is ___.",
        "respuestas": [
          "yours"
        ]
      },
      {
        "instruccion": "Escribe con 's.",
        "pregunta": "el carro de Carlos → Carlos___ car",
        "respuestas": [
          "'s"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿De quién es este celular?",
        "respuestas": [
          "Whose phone is this",
          "Whose cell phone is this",
          "Whose is this phone"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Es mío.",
        "respuestas": [
          "It's mine",
          "It is mine"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "This book is your's.",
        "respuestas": [
          "This book is yours"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "This isn't your pen. It's ___.",
        "opciones": [
          "mine",
          "my",
          "me",
          "I"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ jacket is this?",
        "opciones": [
          "Whose",
          "Who's",
          "Who",
          "Which's"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The blue car is ___. (de ella)",
        "opciones": [
          "hers",
          "her",
          "her's",
          "she's"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Their garden is big, but ___ is bigger. (nuestro)",
        "opciones": [
          "ours",
          "our",
          "ours'",
          "us"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "La casa de mis papás:",
        "opciones": [
          "my parents' house",
          "my parent's houses",
          "my parents house's",
          "the house my parents"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«A friend of mine» significa:",
        "opciones": [
          "Un amigo mío",
          "Mi mejor amigo",
          "Un amigo de él",
          "Mis amigos"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Whose dog is that? It's our neighbors'. Its name is Toby.",
        "pregunta": "¿Cómo se llama el perro?",
        "opciones": [
          "Toby",
          "Tony",
          "Bobby",
          "Rocky"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Can I use your laptop? Mine isn't working.",
        "pregunta": "¿Por qué pide la laptop?",
        "opciones": [
          "La suya no funciona",
          "No tiene laptop",
          "La suya está en casa",
          "Quiere ver una película"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Esto no es mío.",
        "respuestas": [
          "This isn't mine",
          "This is not mine",
          "That's not mine",
          "It's not mine",
          "It isn't mine"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¿Es tuyo?",
        "respuestas": [
          "Is it yours",
          "Is this yours",
          "Is that yours"
        ]
      }
    ]
  },
  {
    "id": "a2-18",
    "num": 18,
    "titulo": "Cantidades: much, many, a lot of, a few, a little",
    "contexto": "Compras y el supermercado",
    "explicacion": {
      "es": [
        "***Many*** va con **contables en plural** (*apples, people, bags*) y ***much*** con **incontables** (*money, time, milk, food*). Se usan sobre todo en **negativo y preguntas**: *We don't have **much** time. Are there **many** people?*",
        "***A lot of*** (o ***lots of***) sirve para **los dos** y es lo normal en **afirmativo**: *There are **a lot of** people. We spent **a lot of** money.*",
        "***A few*** = **unos pocos** (contables): *I need **a few** eggs.* ***A little*** = **un poco** (incontables): *Add **a little** salt.* Los dos tienen sentido **positivo**: hay algo, aunque poco.",
        "Sin *a*, ***few*** y ***little*** suenan **negativos** (casi nada): *There are **few** buses at night.* (Hay pocos camiones en la noche.) Para preguntar: ***How many** bags? **How much** does it cost?*"
      ],
      "tabla": {
        "columnas": [
          "",
          "Contables (eggs, bags)",
          "Incontables (milk, money)"
        ],
        "filas": [
          [
            "Mucho (afirmativo)",
            "a lot of eggs",
            "a lot of milk"
          ],
          [
            "Mucho (negativo / pregunta)",
            "not many eggs / many eggs?",
            "not much milk / much milk?"
          ],
          [
            "Poco (positivo)",
            "a few eggs",
            "a little milk"
          ],
          [
            "¿Cuánto?",
            "How many eggs?",
            "How much milk?"
          ]
        ]
      },
      "ojo": [
        "*Money* es **incontable**: ***How much** money?* ✅, no *How many money?* ❌.",
        "En afirmativo *much* suena muy formal: *I have **a lot of** work* ✅ es más natural que *I have much work*.",
        "***How much is it? / How much are they?*** = ¿Cuánto cuesta / cuestan?",
        "*A lot of* lleva ***of*** antes del sustantivo, pero al final no: *I eat **a lot of** fruit. / I eat **a lot**.*",
        "Algunos incontables comunes en el súper: *bread, rice, meat, cheese, water, sugar, pasta, fruit, food*."
      ],
      "en": [
        "Many is for countable nouns and much is for uncountable nouns: not many people, not much money.",
        "A lot of is for both, in positive sentences: There are a lot of people.",
        "A few eggs, a little salt.",
        "How many bags? How much does it cost?"
      ]
    },
    "vocabulario": [
      {
        "en": "a lot of people",
        "es": "mucha gente",
        "imagen": "Supermercado lleno de gente en quincena",
        "ejemplo": [
          "There are a lot of people at the supermarket today.",
          "Hoy hay mucha gente en el súper."
        ]
      },
      {
        "en": "not much money",
        "es": "no mucho dinero",
        "imagen": "Cartera abierta con pocos billetes",
        "ejemplo": [
          "I don't have much money this week.",
          "Esta semana no tengo mucho dinero."
        ]
      },
      {
        "en": "How many bags?",
        "es": "¿cuántas bolsas?",
        "imagen": "Cajero preguntando mientras empaca el mandado",
        "ejemplo": [
          "How many bags do you need?",
          "¿Cuántas bolsas necesita?"
        ]
      },
      {
        "en": "How much is it?",
        "es": "¿cuánto cuesta?",
        "imagen": "Cliente señalando un producto con etiqueta de precio",
        "ejemplo": [
          "How much is this cheese?",
          "¿Cuánto cuesta este queso?"
        ]
      },
      {
        "en": "a few apples",
        "es": "unas cuantas manzanas",
        "imagen": "Mano tomando unas manzanas de un exhibidor",
        "ejemplo": [
          "I need a few apples for the cake.",
          "Necesito unas cuantas manzanas para el pastel."
        ]
      },
      {
        "en": "a little sugar",
        "es": "un poco de azúcar",
        "imagen": "Cuchara con azúcar sobre una taza de café",
        "ejemplo": [
          "Add a little sugar, please.",
          "Ponle un poco de azúcar, por favor."
        ]
      },
      {
        "en": "not many customers",
        "es": "no muchos clientes",
        "imagen": "Tienda casi vacía con un cajero esperando",
        "ejemplo": [
          "There aren't many customers in the morning.",
          "En la mañana no hay muchos clientes."
        ]
      },
      {
        "en": "a shopping cart",
        "es": "un carrito del súper",
        "imagen": "Carrito del súper lleno de productos",
        "ejemplo": [
          "The shopping cart is full!",
          "¡El carrito está lleno!"
        ]
      },
      {
        "en": "a basket",
        "es": "una canasta",
        "imagen": "Canasta de plástico con algunos productos",
        "ejemplo": [
          "I only need a basket, not a cart.",
          "Solo necesito una canasta, no un carrito."
        ]
      },
      {
        "en": "the checkout",
        "es": "la caja",
        "imagen": "Fila en la caja de un supermercado",
        "ejemplo": [
          "There's a long line at the checkout.",
          "Hay una fila larga en la caja."
        ]
      },
      {
        "en": "a receipt",
        "es": "un ticket",
        "imagen": "Ticket de compra largo saliendo de la caja",
        "ejemplo": [
          "Can I have the receipt, please?",
          "¿Me da el ticket, por favor?"
        ]
      },
      {
        "en": "on sale",
        "es": "en oferta",
        "imagen": "Letrero de oferta en un pasillo del súper, sin texto legible",
        "ejemplo": [
          "Bananas are on sale today.",
          "Hoy los plátanos están en oferta."
        ]
      },
      {
        "en": "the aisle",
        "es": "el pasillo",
        "imagen": "Pasillo del supermercado con estantes llenos",
        "ejemplo": [
          "The rice is in aisle five.",
          "El arroz está en el pasillo cinco."
        ]
      },
      {
        "en": "the frozen food",
        "es": "los congelados",
        "imagen": "Refrigeradores con comida congelada en el súper",
        "ejemplo": [
          "Ice cream is in the frozen food section.",
          "El helado está en la sección de congelados."
        ]
      },
      {
        "en": "a discount",
        "es": "un descuento",
        "imagen": "Cajera aplicando un descuento a un cliente contento",
        "ejemplo": [
          "Students get a discount on Mondays.",
          "Los estudiantes tienen descuento los lunes."
        ]
      },
      {
        "en": "cash or card",
        "es": "efectivo o tarjeta",
        "imagen": "Mano con billetes y otra con una tarjeta",
        "ejemplo": [
          "Cash or card? Card, please.",
          "¿Efectivo o tarjeta? Tarjeta, por favor."
        ]
      }
    ],
    "grupos": [
      {
        "id": "envases",
        "titulo": "Envases y cantidades",
        "icono": "🥫",
        "patron": [
          "a can of…",
          "a pack of…",
          "half a kilo of…"
        ],
        "palabras": [
          {
            "en": "a can of tuna",
            "es": "una lata de atún",
            "imagen": "Lata de atún abierta sobre la mesa",
            "ejemplo": [
              "I bought three cans of tuna.",
              "Compré tres latas de atún."
            ]
          },
          {
            "en": "a pack of tortillas",
            "es": "un paquete de tortillas",
            "imagen": "Paquete de tortillas de harina en el súper",
            "ejemplo": [
              "Get a pack of tortillas, please.",
              "Trae un paquete de tortillas, por favor."
            ]
          },
          {
            "en": "half a kilo of ham",
            "es": "medio kilo de jamón",
            "imagen": "Jamón rebanado en la báscula de la salchichonería",
            "ejemplo": [
              "Half a kilo of ham, please.",
              "Medio kilo de jamón, por favor."
            ]
          },
          {
            "en": "a liter of milk",
            "es": "un litro de leche",
            "imagen": "Envase de leche de un litro",
            "ejemplo": [
              "We drink a liter of milk every day.",
              "Tomamos un litro de leche al día."
            ]
          },
          {
            "en": "a dozen eggs",
            "es": "una docena de huevos",
            "imagen": "Cartón con doce huevos",
            "ejemplo": [
              "I need a dozen eggs.",
              "Necesito una docena de huevos."
            ]
          },
          {
            "en": "a bunch of bananas",
            "es": "un racimo de plátanos",
            "imagen": "Racimo de plátanos amarillos",
            "ejemplo": [
              "A bunch of bananas costs twenty pesos.",
              "Un racimo de plátanos cuesta veinte pesos."
            ]
          },
          {
            "en": "a bar of soap",
            "es": "un jabón",
            "imagen": "Barra de jabón junto al lavabo",
            "ejemplo": [
              "Don't forget a bar of soap.",
              "No olvides un jabón."
            ]
          },
          {
            "en": "a roll of toilet paper",
            "es": "un rollo de papel de baño",
            "imagen": "Paquete de rollos de papel de baño",
            "ejemplo": [
              "We need more toilet paper.",
              "Necesitamos más papel de baño."
            ]
          }
        ]
      },
      {
        "id": "cuanto",
        "titulo": "¿Mucho o poco?",
        "icono": "⚖️",
        "patron": [
          "lots of…",
          "too many…",
          "hardly any…"
        ],
        "palabras": [
          {
            "en": "lots of vegetables",
            "es": "muchas verduras",
            "imagen": "Carrito lleno de verduras frescas",
            "ejemplo": [
              "We buy lots of vegetables at the market.",
              "Compramos muchas verduras en el mercado."
            ]
          },
          {
            "en": "too much food",
            "es": "demasiada comida",
            "imagen": "Mesa con muchísima comida para pocas personas",
            "ejemplo": [
              "We always cook too much food at Christmas.",
              "En Navidad siempre cocinamos demasiada comida."
            ]
          },
          {
            "en": "too many bags",
            "es": "demasiadas bolsas",
            "imagen": "Persona cargando muchísimas bolsas del súper",
            "ejemplo": [
              "I can't carry too many bags.",
              "No puedo cargar tantas bolsas."
            ]
          },
          {
            "en": "hardly any milk",
            "es": "casi nada de leche",
            "imagen": "Botella de leche casi vacía en el refrigerador",
            "ejemplo": [
              "There's hardly any milk left.",
              "Ya casi no queda leche."
            ]
          },
          {
            "en": "a few minutes",
            "es": "unos minutos",
            "imagen": "Reloj de arena con poca arena",
            "ejemplo": [
              "I'll be ready in a few minutes.",
              "Estaré listo en unos minutos."
            ]
          },
          {
            "en": "a little time",
            "es": "un poco de tiempo",
            "imagen": "Persona mirando su reloj con calma",
            "ejemplo": [
              "I have a little time before work.",
              "Tengo un poco de tiempo antes del trabajo."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "There are a lot of people at the supermarket today.",
        "es": "Hoy hay mucha gente en el súper."
      },
      {
        "en": "I don't have much money this week.",
        "es": "Esta semana no tengo mucho dinero."
      },
      {
        "en": "How many bags do you need?",
        "es": "¿Cuántas bolsas necesita?"
      },
      {
        "en": "How much is this cheese?",
        "es": "¿Cuánto cuesta este queso?"
      },
      {
        "en": "I need a few apples for the cake.",
        "es": "Necesito unas cuantas manzanas para el pastel."
      },
      {
        "en": "Add a little sugar, please.",
        "es": "Ponle un poco de azúcar, por favor."
      },
      {
        "en": "The rice is in aisle five.",
        "es": "El arroz está en el pasillo cinco."
      },
      {
        "en": "Cash or card? Card, please.",
        "es": "¿Efectivo o tarjeta? Tarjeta, por favor."
      },
      {
        "en": "There's hardly any milk left.",
        "es": "Ya casi no queda leche."
      },
      {
        "en": "Half a kilo of ham, please.",
        "es": "Medio kilo de jamón, por favor."
      }
    ],
    "frases": [
      {
        "en": "We don't need many things: just a few tomatoes, a little cheese, and some bread.",
        "es": "No necesitamos muchas cosas: solo unos jitomates, un poco de queso y pan.",
        "imagen": "Persona con una canasta pequeña con jitomates, queso y pan"
      },
      {
        "en": "How much did you spend at the supermarket? Too much! Almost two thousand pesos.",
        "es": "¿Cuánto gastaste en el súper? ¡Demasiado! Casi dos mil pesos.",
        "imagen": "Persona sorprendida mirando un ticket muy largo"
      },
      {
        "en": "There weren't many people at the market, so we finished quickly.",
        "es": "No había mucha gente en el mercado, así que terminamos rápido.",
        "imagen": "Mercado tranquilo con pocos clientes en la mañana"
      },
      {
        "en": "My kids eat a lot of cereal, so I buy three boxes every week.",
        "es": "Mis hijos comen mucho cereal, así que compro tres cajas cada semana.",
        "imagen": "Carrito del súper con varias cajas de cereal"
      },
      {
        "en": "Excuse me, how much are the avocados? Forty pesos a kilo.",
        "es": "Disculpe, ¿a cómo están los aguacates? A cuarenta pesos el kilo.",
        "imagen": "Vendedor del mercado pesando aguacates"
      },
      {
        "en": "I only have a little money, so I'm buying the cheapest coffee.",
        "es": "Solo traigo un poco de dinero, así que voy a comprar el café más barato.",
        "imagen": "Persona comparando precios de café en un estante"
      },
      {
        "en": "Don't buy too much bread. Nobody eats it and it gets old.",
        "es": "No compres demasiado pan. Nadie se lo come y se pone duro.",
        "imagen": "Pan duro olvidado en una bolsa en la cocina"
      },
      {
        "en": "On Saturdays there are a lot of discounts on fruit and vegetables.",
        "es": "Los sábados hay muchos descuentos en frutas y verduras.",
        "imagen": "Pasillo de frutas y verduras con clientes llenando sus bolsas"
      },
      {
        "en": "How many people are coming to the party? About twenty, so we need a lot of food.",
        "es": "¿Cuántas personas vienen a la fiesta? Como veinte, así que necesitamos mucha comida.",
        "imagen": "Pareja haciendo una lista de compras grande para una fiesta"
      },
      {
        "en": "There's a long line at the checkout, but I only have a few things.",
        "es": "Hay una fila larga en la caja, pero solo traigo unas cuantas cosas.",
        "imagen": "Persona con tres productos en la mano en una fila larga del súper"
      }
    ],
    "listening": [
      {
        "audio": "We need a dozen eggs, a liter of milk, and a little butter.",
        "pregunta": "¿Cuántos huevos necesitan?",
        "opciones": [
          "Doce",
          "Seis",
          "Diez",
          "Veinte"
        ]
      },
      {
        "audio": "There aren't many tomatoes left. Can you buy a kilo?",
        "pregunta": "¿Qué debe comprar?",
        "opciones": [
          "Un kilo de jitomates",
          "Leche",
          "Huevos",
          "Pan"
        ]
      },
      {
        "audio": "How much is the chicken? It's ninety pesos a kilo.",
        "pregunta": "¿Cuánto cuesta el kilo de pollo?",
        "opciones": [
          "Noventa pesos",
          "Diecinueve pesos",
          "Nueve pesos",
          "Ciento noventa pesos"
        ]
      },
      {
        "audio": "I don't have much time. I'll just buy a few things.",
        "pregunta": "¿Por qué va a comprar pocas cosas?",
        "opciones": [
          "No tiene mucho tiempo",
          "No tiene dinero",
          "La tienda va a cerrar",
          "No necesita nada"
        ]
      },
      {
        "audio": "Bananas are on sale today: two kilos for thirty pesos.",
        "pregunta": "¿Qué está en oferta?",
        "opciones": [
          "Los plátanos",
          "Las manzanas",
          "Los jitomates",
          "El pollo"
        ]
      }
    ],
    "lectura": {
      "titulo": "Shopping on a budget",
      "texto": "Gabriela is a student and she doesn't have much money, so she plans her shopping carefully. Every Saturday she makes a list. She doesn't buy many packaged things, because they are expensive. Instead, she buys a lot of rice, beans, and seasonal vegetables at the market. She only buys a little meat, about half a kilo for the whole week. She always checks the discounts: on Tuesdays fruit is cheaper, and on Thursdays bread is on sale after six. She takes her own bags, so she doesn't have to pay for them. Last month she spent only eight hundred pesos on food. Her roommate spends three times more, but he eats a lot of pizza!",
      "preguntas": [
        {
          "pregunta": "¿Por qué no compra muchas cosas empaquetadas?",
          "opciones": [
            "Son caras",
            "No le gustan",
            "No hay en el mercado",
            "Son malas para la salud"
          ]
        },
        {
          "pregunta": "¿Cuánta carne compra a la semana?",
          "opciones": [
            "Medio kilo",
            "Un kilo",
            "Dos kilos",
            "Nada"
          ]
        },
        {
          "pregunta": "¿Qué día la fruta es más barata?",
          "opciones": [
            "El martes",
            "El jueves",
            "El sábado",
            "El lunes"
          ]
        },
        {
          "pregunta": "¿Por qué su compañero gasta más?",
          "opciones": [
            "Come mucha pizza",
            "Compra en el súper",
            "No hace lista",
            "Tiene más dinero"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con much o many.",
        "pregunta": "How ___ eggs do you need?",
        "respuestas": [
          "many"
        ]
      },
      {
        "instruccion": "Completa con much o many.",
        "pregunta": "We don't have ___ time.",
        "respuestas": [
          "much"
        ]
      },
      {
        "instruccion": "Completa con much o many.",
        "pregunta": "How ___ is this jacket?",
        "respuestas": [
          "much"
        ]
      },
      {
        "instruccion": "Completa con a few o a little.",
        "pregunta": "I need ___ tomatoes.",
        "respuestas": [
          "a few"
        ]
      },
      {
        "instruccion": "Completa con a few o a little.",
        "pregunta": "Add ___ salt.",
        "respuestas": [
          "a little"
        ]
      },
      {
        "instruccion": "Completa con of o nada.",
        "pregunta": "There are a lot ___ people here.",
        "respuestas": [
          "of"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "una docena de huevos",
        "respuestas": [
          "a dozen eggs"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Cuánto cuesta?",
        "respuestas": [
          "How much is it",
          "How much does it cost"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "No tengo mucho dinero.",
        "respuestas": [
          "I don't have much money",
          "I do not have much money",
          "I haven't got much money"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "How many money do you have?",
        "respuestas": [
          "How much money do you have"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "How ___ apples do you want?",
        "opciones": [
          "many",
          "much",
          "a lot",
          "little"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "There isn't ___ milk in the fridge.",
        "opciones": [
          "much",
          "many",
          "a few",
          "lots"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We bought ___ fruit at the market.",
        "opciones": [
          "a lot of",
          "many",
          "a few",
          "much of"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I only need ___ minutes.",
        "opciones": [
          "a few",
          "a little",
          "much",
          "a lot"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Put ___ butter on the bread.",
        "opciones": [
          "a little",
          "a few",
          "many",
          "few of"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Dónde pagas en el súper?",
        "opciones": [
          "at the checkout",
          "in the aisle",
          "in the frozen food",
          "in the basket"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Can I have half a kilo of cheese and a pack of tortillas?",
        "pregunta": "¿Cuánto queso pide?",
        "opciones": [
          "Medio kilo",
          "Un kilo",
          "Un cuarto",
          "Dos kilos"
        ]
      },
      {
        "tipo": "listening",
        "audio": "There were so many people at the checkout that I waited forty minutes.",
        "pregunta": "¿Cuánto esperó?",
        "opciones": [
          "Cuarenta minutos",
          "Catorce minutos",
          "Cuatro minutos",
          "Una hora"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¿Cuántas bolsas?",
        "respuestas": [
          "How many bags"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: un poco de azúcar",
        "respuestas": [
          "a little sugar",
          "some sugar"
        ]
      }
    ]
  },
  {
    "id": "a2-19",
    "num": 19,
    "titulo": "Too y enough",
    "contexto": "Problemas y quejas cotidianas",
    "explicacion": {
      "es": [
        "***Too*** + adjetivo = **demasiado** (más de lo que quieres, es un problema): *This coffee is **too hot**.* (Este café está demasiado caliente.) *The music is **too loud**.*",
        "***Enough*** = **suficiente**. Va **después** del adjetivo: *The room isn't **big enough**.* (El cuarto no es lo bastante grande.) Y **antes** del sustantivo: *We don't have **enough chairs**.* (No tenemos suficientes sillas.)",
        "Con sustantivos, ***too much*** (incontables) y ***too many*** (contables): *There's **too much** traffic. There are **too many** people.*",
        "Se puede agregar ***to*** + verbo o ***for*** + persona: *It's **too cold to** swim. He isn't **old enough to** drive. This shirt is **too small for** me.*"
      ],
      "tabla": {
        "columnas": [
          "Estructura",
          "Ejemplo",
          "Significado"
        ],
        "filas": [
          [
            "too + adjetivo",
            "The soup is too salty.",
            "Tiene demasiada sal."
          ],
          [
            "adjetivo + enough",
            "The bed isn't long enough.",
            "No es lo bastante larga."
          ],
          [
            "enough + sustantivo",
            "I don't have enough time.",
            "No tengo suficiente tiempo."
          ],
          [
            "too much + incontable",
            "too much noise",
            "demasiado ruido"
          ],
          [
            "too many + contable",
            "too many cars",
            "demasiados carros"
          ]
        ]
      },
      "ojo": [
        "*Too* ≠ *very*. *It's **very** expensive* (es muy caro, pero tal vez lo compro). *It's **too** expensive* (es demasiado caro, **no** lo compro).",
        "Posición de *enough*: *big **enough*** ✅ (no *enough big* ❌), pero ***enough** money* ✅.",
        "*Too* también significa **también** al final de la frase: *I'm hungry, **too**.* ¡El contexto lo aclara!",
        "Para quejarse con cortesía: ***I'm sorry, but…*** o ***Excuse me, I think there's a problem…***",
        "*Not … enough* es una forma suave de decir *too*: *It **isn't warm enough*** ≈ *It's **too cold***."
      ],
      "en": [
        "Too plus adjective means more than you want: This coffee is too hot. The music is too loud.",
        "Enough goes after adjectives: The room isn't big enough. And before nouns: We don't have enough chairs.",
        "Too much traffic, too many people.",
        "It's too cold to swim. He isn't old enough to drive."
      ]
    },
    "vocabulario": [
      {
        "en": "too hot",
        "es": "demasiado caliente",
        "imagen": "Persona soplando una taza de café que humea mucho",
        "ejemplo": [
          "This coffee is too hot.",
          "Este café está demasiado caliente."
        ]
      },
      {
        "en": "too expensive",
        "es": "demasiado caro",
        "imagen": "Persona mirando sorprendida la etiqueta de precio de unos tenis",
        "ejemplo": [
          "These shoes are too expensive for me.",
          "Estos zapatos son demasiado caros para mí."
        ]
      },
      {
        "en": "too small",
        "es": "demasiado pequeño",
        "imagen": "Persona intentando ponerse una chamarra que le queda chica",
        "ejemplo": [
          "This shirt is too small.",
          "Esta camisa me queda chica."
        ]
      },
      {
        "en": "too big",
        "es": "demasiado grande",
        "imagen": "Niño con unos zapatos enormes de su papá",
        "ejemplo": [
          "The pants are too big for him.",
          "Los pantalones le quedan demasiado grandes."
        ]
      },
      {
        "en": "too loud",
        "es": "demasiado fuerte",
        "imagen": "Persona tapándose los oídos junto a una bocina",
        "ejemplo": [
          "The music is too loud. I can't hear you.",
          "La música está demasiado fuerte. No te oigo."
        ]
      },
      {
        "en": "too salty",
        "es": "demasiado salado",
        "imagen": "Persona haciendo cara al probar una sopa",
        "ejemplo": [
          "The soup is too salty.",
          "La sopa está demasiado salada."
        ]
      },
      {
        "en": "too tired",
        "es": "demasiado cansado",
        "imagen": "Persona dormida sobre su escritorio",
        "ejemplo": [
          "I'm too tired to go out tonight.",
          "Estoy demasiado cansado para salir hoy."
        ]
      },
      {
        "en": "too much traffic",
        "es": "demasiado tráfico",
        "imagen": "Avenida completamente llena de carros detenidos",
        "ejemplo": [
          "There's too much traffic downtown.",
          "Hay demasiado tráfico en el centro."
        ]
      },
      {
        "en": "too many people",
        "es": "demasiada gente",
        "imagen": "Vagón del metro repleto de pasajeros",
        "ejemplo": [
          "There are too many people on the subway.",
          "Hay demasiada gente en el metro."
        ]
      },
      {
        "en": "not big enough",
        "es": "no lo bastante grande",
        "imagen": "Familia apretada en una sala pequeña",
        "ejemplo": [
          "Our apartment isn't big enough for a dog.",
          "Nuestro departamento no es lo bastante grande para un perro."
        ]
      },
      {
        "en": "not enough time",
        "es": "no hay suficiente tiempo",
        "imagen": "Persona corriendo con el reloj marcando la hora",
        "ejemplo": [
          "I don't have enough time to cook.",
          "No tengo suficiente tiempo para cocinar."
        ]
      },
      {
        "en": "not enough chairs",
        "es": "no hay suficientes sillas",
        "imagen": "Invitados de pie en una fiesta con pocas sillas",
        "ejemplo": [
          "We don't have enough chairs for everyone.",
          "No tenemos suficientes sillas para todos."
        ]
      },
      {
        "en": "old enough",
        "es": "lo bastante grande (de edad)",
        "imagen": "Joven recibiendo su licencia de manejo",
        "ejemplo": [
          "She's old enough to drive now.",
          "Ya tiene edad para manejar."
        ]
      },
      {
        "en": "warm enough",
        "es": "lo bastante abrigado",
        "imagen": "Persona temblando con un suéter delgado en la nieve",
        "ejemplo": [
          "This jacket isn't warm enough.",
          "Esta chamarra no abriga lo suficiente."
        ]
      },
      {
        "en": "too late",
        "es": "demasiado tarde",
        "imagen": "Persona llegando a la parada mientras el camión se va",
        "ejemplo": [
          "We arrived too late. The bus left.",
          "Llegamos demasiado tarde. Ya se fue el camión."
        ]
      },
      {
        "en": "too spicy",
        "es": "demasiado picante",
        "imagen": "Persona con la cara roja tomando agua después de comer chile",
        "ejemplo": [
          "This salsa is too spicy for me!",
          "¡Esta salsa pica demasiado para mí!"
        ]
      }
    ],
    "grupos": [
      {
        "id": "quejas",
        "titulo": "Quejas cotidianas",
        "icono": "😤",
        "patron": [
          "I'm sorry, but…",
          "There's a problem with…",
          "It doesn't work."
        ],
        "palabras": [
          {
            "en": "It doesn't work.",
            "es": "no funciona",
            "imagen": "Persona golpeando un control remoto que no funciona",
            "ejemplo": [
              "The remote control doesn't work.",
              "El control remoto no funciona."
            ]
          },
          {
            "en": "It's broken.",
            "es": "está roto",
            "imagen": "Silla con una pata rota",
            "ejemplo": [
              "This chair is broken.",
              "Esta silla está rota."
            ]
          },
          {
            "en": "It's dirty.",
            "es": "está sucio",
            "imagen": "Vaso con marcas de suciedad en una mesa",
            "ejemplo": [
              "Excuse me, this glass is dirty.",
              "Disculpe, este vaso está sucio."
            ]
          },
          {
            "en": "My food is cold.",
            "es": "mi comida está fría",
            "imagen": "Persona tocando un plato de comida fría en un restaurante",
            "ejemplo": [
              "I'm sorry, but my soup is cold.",
              "Disculpe, pero mi sopa está fría."
            ]
          },
          {
            "en": "The neighbors are too noisy.",
            "es": "los vecinos hacen demasiado ruido",
            "imagen": "Persona despierta en la noche con ruido de fiesta al otro lado de la pared",
            "ejemplo": [
              "The neighbors are too noisy at night.",
              "Los vecinos hacen demasiado ruido en la noche."
            ]
          },
          {
            "en": "This isn't what I ordered.",
            "es": "esto no es lo que pedí",
            "imagen": "Cliente señalando un plato equivocado al mesero",
            "ejemplo": [
              "Excuse me, this isn't what I ordered.",
              "Disculpe, esto no es lo que pedí."
            ]
          },
          {
            "en": "The internet is too slow.",
            "es": "el internet está demasiado lento",
            "imagen": "Persona desesperada frente a una pantalla cargando",
            "ejemplo": [
              "The internet is too slow today.",
              "Hoy el internet está demasiado lento."
            ]
          },
          {
            "en": "I want a refund.",
            "es": "quiero un reembolso",
            "imagen": "Cliente devolviendo un producto en una tienda",
            "ejemplo": [
              "It's broken. I want a refund, please.",
              "Está roto. Quiero un reembolso, por favor."
            ]
          }
        ]
      },
      {
        "id": "suficiente",
        "titulo": "¿Es suficiente?",
        "icono": "✅",
        "patron": [
          "…enough",
          "enough…",
          "That's enough!"
        ],
        "palabras": [
          {
            "en": "enough money",
            "es": "suficiente dinero",
            "imagen": "Persona contando billetes antes de pagar",
            "ejemplo": [
              "Do you have enough money for the bus?",
              "¿Tienes suficiente dinero para el camión?"
            ]
          },
          {
            "en": "enough food",
            "es": "suficiente comida",
            "imagen": "Mesa de fiesta con mucha comida",
            "ejemplo": [
              "Is there enough food for twenty people?",
              "¿Hay suficiente comida para veinte personas?"
            ]
          },
          {
            "en": "fast enough",
            "es": "lo bastante rápido",
            "imagen": "Corredor llegando a la meta en segundo lugar",
            "ejemplo": [
              "He didn't run fast enough to win.",
              "No corrió lo bastante rápido para ganar."
            ]
          },
          {
            "en": "That's enough!",
            "es": "¡ya basta!",
            "imagen": "Mamá levantando la mano para que sus hijos dejen de pelear",
            "ejemplo": [
              "That's enough! Stop fighting!",
              "¡Ya basta! ¡Dejen de pelear!"
            ]
          },
          {
            "en": "good enough",
            "es": "lo bastante bueno",
            "imagen": "Persona revisando su trabajo con satisfacción",
            "ejemplo": [
              "Is my English good enough for the job?",
              "¿Mi inglés es lo bastante bueno para el trabajo?"
            ]
          },
          {
            "en": "enough sleep",
            "es": "suficiente sueño",
            "imagen": "Persona bostezando frente a la computadora en la mañana",
            "ejemplo": [
              "I don't get enough sleep.",
              "No duermo lo suficiente."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "This coffee is too hot.",
        "es": "Este café está demasiado caliente."
      },
      {
        "en": "These shoes are too expensive for me.",
        "es": "Estos zapatos son demasiado caros para mí."
      },
      {
        "en": "The music is too loud. I can't hear you.",
        "es": "La música está demasiado fuerte. No te oigo."
      },
      {
        "en": "I'm too tired to go out tonight.",
        "es": "Estoy demasiado cansado para salir hoy."
      },
      {
        "en": "There's too much traffic downtown.",
        "es": "Hay demasiado tráfico en el centro."
      },
      {
        "en": "We don't have enough chairs for everyone.",
        "es": "No tenemos suficientes sillas para todos."
      },
      {
        "en": "She's old enough to drive now.",
        "es": "Ya tiene edad para manejar."
      },
      {
        "en": "Excuse me, this isn't what I ordered.",
        "es": "Disculpe, esto no es lo que pedí."
      },
      {
        "en": "That's enough! Stop fighting!",
        "es": "¡Ya basta! ¡Dejen de pelear!"
      },
      {
        "en": "I don't get enough sleep.",
        "es": "No duermo lo suficiente."
      }
    ],
    "frases": [
      {
        "en": "I can't buy this sofa. It's too expensive and it isn't big enough for my family.",
        "es": "No puedo comprar este sillón. Es demasiado caro y no es lo bastante grande para mi familia.",
        "imagen": "Familia mirando un sillón pequeño en una mueblería"
      },
      {
        "en": "The water is too cold to swim, so let's walk on the beach.",
        "es": "El agua está demasiado fría para nadar, así que caminemos en la playa.",
        "imagen": "Persona metiendo el pie al mar y retirándolo por el frío"
      },
      {
        "en": "There are too many cars in this city and not enough buses.",
        "es": "Hay demasiados carros en esta ciudad y no hay suficientes camiones.",
        "imagen": "Avenida llena de carros con una parada de camión vacía"
      },
      {
        "en": "Excuse me, I'm sorry, but my steak is too cold. Could you heat it up, please?",
        "es": "Disculpe, perdón, pero mi carne está demasiado fría. ¿La podría calentar, por favor?",
        "imagen": "Cliente hablando amablemente con un mesero sobre su plato"
      },
      {
        "en": "My son is only twelve. He isn't old enough to stay home alone.",
        "es": "Mi hijo solo tiene doce años. No tiene edad para quedarse solo en casa.",
        "imagen": "Niño mirando por la ventana mientras sus papás salen"
      },
      {
        "en": "I studied a lot, but I didn't have enough time to finish the exam.",
        "es": "Estudié mucho, pero no tuve suficiente tiempo para terminar el examen.",
        "imagen": "Estudiante entregando un examen incompleto con el reloj al fondo"
      },
      {
        "en": "This jacket isn't warm enough for the mountains. You need a thicker coat.",
        "es": "Esta chamarra no abriga lo suficiente para las montañas. Necesitas un abrigo más grueso.",
        "imagen": "Excursionista con frío en la montaña con nieve"
      },
      {
        "en": "The neighbors' party was too loud, and we couldn't sleep until three.",
        "es": "La fiesta de los vecinos estaba demasiado fuerte y no pudimos dormir hasta las tres.",
        "imagen": "Pareja despierta en la cama de madrugada con luces de fiesta en la ventana"
      },
      {
        "en": "I bought this phone last week, and it doesn't work. I want a refund.",
        "es": "Compré este celular la semana pasada y no funciona. Quiero un reembolso.",
        "imagen": "Cliente en el mostrador de una tienda devolviendo un celular"
      },
      {
        "en": "There's too much sugar in this cake, and it isn't soft enough.",
        "es": "Este pastel tiene demasiada azúcar y no está lo bastante suave.",
        "imagen": "Persona probando un pastel con cara de duda"
      }
    ],
    "listening": [
      {
        "audio": "I'm sorry, but this soup is too salty. Can I have another one?",
        "pregunta": "¿Cuál es el problema?",
        "opciones": [
          "La sopa está demasiado salada",
          "La sopa está fría",
          "La sopa es muy poca",
          "No es lo que pidió"
        ]
      },
      {
        "audio": "We can't go in the car. There isn't enough space for six people.",
        "pregunta": "¿Por qué no pueden ir en el carro?",
        "opciones": [
          "No hay espacio para seis personas",
          "El carro no funciona",
          "No tienen gasolina",
          "Está demasiado lejos"
        ]
      },
      {
        "audio": "The dress is beautiful, but it's too long. I need a shorter one.",
        "pregunta": "¿Qué problema tiene el vestido?",
        "opciones": [
          "Es demasiado largo",
          "Es demasiado caro",
          "Es demasiado corto",
          "Es feo"
        ]
      },
      {
        "audio": "My daughter is fifteen. She's not old enough to drive.",
        "pregunta": "¿Por qué no puede manejar la hija?",
        "opciones": [
          "No tiene la edad suficiente",
          "No sabe manejar",
          "No tiene carro",
          "Le da miedo"
        ]
      },
      {
        "audio": "There were too many people at the concert, so we left early.",
        "pregunta": "¿Por qué se fueron temprano?",
        "opciones": [
          "Había demasiada gente",
          "La música era mala",
          "Estaban cansados",
          "Empezó a llover"
        ]
      }
    ],
    "lectura": {
      "titulo": "A terrible apartment",
      "texto": "Last month Javier rented a new apartment, but now he has a lot of problems. The rooms are too small: his bed isn't long enough, and his feet touch the wall. The kitchen is too dark, and there aren't enough windows. The walls are too thin, so he can hear his neighbors talking at night. The water is never hot enough for a good shower. And there are too many stairs: the apartment is on the sixth floor, and the building has no elevator! Javier called the owner to complain. The owner said: I'm sorry, but the rent is cheap. Javier answered: It's cheap, but it isn't cheap enough for all these problems. Next month he's moving.",
      "preguntas": [
        {
          "pregunta": "¿Qué problema tiene la cama?",
          "opciones": [
            "No es lo bastante larga",
            "Está rota",
            "Es demasiado grande",
            "Está sucia"
          ]
        },
        {
          "pregunta": "¿Por qué oye a los vecinos?",
          "opciones": [
            "Las paredes son demasiado delgadas",
            "Hacen fiestas",
            "Las ventanas están abiertas",
            "Viven en el mismo cuarto"
          ]
        },
        {
          "pregunta": "¿En qué piso vive Javier?",
          "opciones": [
            "En el sexto",
            "En el primero",
            "En el tercero",
            "En el décimo"
          ]
        },
        {
          "pregunta": "¿Qué va a hacer Javier?",
          "opciones": [
            "Mudarse el próximo mes",
            "Arreglar el departamento",
            "Pagar más renta",
            "Comprar una cama"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con too o enough.",
        "pregunta": "The tea is ___ hot. I can't drink it.",
        "respuestas": [
          "too"
        ]
      },
      {
        "instruccion": "Completa con too o enough.",
        "pregunta": "The room isn't big ___.",
        "respuestas": [
          "enough"
        ]
      },
      {
        "instruccion": "Completa con too o enough.",
        "pregunta": "We don't have ___ money.",
        "respuestas": [
          "enough"
        ]
      },
      {
        "instruccion": "Completa con too much o too many.",
        "pregunta": "There are ___ cars.",
        "respuestas": [
          "too many"
        ]
      },
      {
        "instruccion": "Completa con too much o too many.",
        "pregunta": "There's ___ noise.",
        "respuestas": [
          "too much"
        ]
      },
      {
        "instruccion": "Ordena: enough / old / he / isn't",
        "pregunta": "___ to drive.",
        "respuestas": [
          "He isn't old enough"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Es demasiado caro.",
        "respuestas": [
          "It's too expensive",
          "It is too expensive"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "No tengo suficiente tiempo.",
        "respuestas": [
          "I don't have enough time",
          "I do not have enough time",
          "I haven't got enough time"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¡Ya basta!",
        "respuestas": [
          "That's enough",
          "That is enough",
          "Enough"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "The car isn't enough big.",
        "respuestas": [
          "The car isn't big enough",
          "The car is not big enough"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "I can't sleep. The music is ___ loud.",
        "opciones": [
          "too",
          "enough",
          "too much",
          "very much"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Is the water warm ___ to swim?",
        "opciones": [
          "enough",
          "too",
          "much",
          "many"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "There are ___ people in this room.",
        "opciones": [
          "too many",
          "too much",
          "enough of",
          "too"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I don't have ___ to buy a car.",
        "opciones": [
          "enough money",
          "money enough",
          "too money",
          "too many money"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«It's very expensive» vs. «It's too expensive». La segunda significa:",
        "opciones": [
          "Es tan caro que no lo compro",
          "Es un poco caro",
          "Es barato",
          "Es caro, pero lo compro"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Para quejarte con cortesía en un restaurante:",
        "opciones": [
          "Excuse me, this isn't what I ordered.",
          "This is bad. Give me another.",
          "I don't want this!",
          "Your food is terrible."
        ]
      },
      {
        "tipo": "listening",
        "audio": "The bus was too full, so I took a taxi.",
        "pregunta": "¿Por qué tomó un taxi?",
        "opciones": [
          "El camión iba demasiado lleno",
          "Llegó tarde",
          "No pasó el camión",
          "Llovía"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Is there enough cake for everybody? Yes, I bought two.",
        "pregunta": "¿Cuántos pasteles compró?",
        "opciones": [
          "Dos",
          "Uno",
          "Tres",
          "Ninguno"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: demasiada gente",
        "respuestas": [
          "too many people"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: No es lo bastante grande.",
        "respuestas": [
          "It isn't big enough",
          "It's not big enough",
          "It is not big enough"
        ]
      }
    ]
  },
  {
    "id": "a2-20",
    "num": 20,
    "titulo": "Verbo + infinitivo (want to, need to, decide to…)",
    "contexto": "Deseos y decisiones",
    "explicacion": {
      "es": [
        "Muchos verbos van seguidos de ***to*** + **verbo base** (el infinitivo): *I **want to** travel. She **needs to** rest. We **decided to** move.*",
        "Los más comunes: ***want to*** (querer), ***need to*** (necesitar), ***decide to*** (decidir), ***plan to*** (planear), ***hope to*** (esperar), ***try to*** (intentar), ***learn to*** (aprender a), ***forget to*** (olvidar), ***promise to*** (prometer), ***would like to*** (me gustaría).",
        "El verbo principal cambia de tiempo, pero el infinitivo **no**: *I **want** to go / She **wants** to go / They **wanted** to go / I **didn't want** to go.*",
        "Para decirle a **otra persona** lo que quieres que haga: ***want*** + persona + ***to***: *I **want you to** help me.* (Quiero que me ayudes.) *My mom **wants me to** study medicine.*"
      ],
      "tabla": {
        "columnas": [
          "Verbo",
          "Ejemplo"
        ],
        "filas": [
          [
            "want to",
            "I want to learn English."
          ],
          [
            "need to",
            "We need to buy milk."
          ],
          [
            "decide to",
            "They decided to sell the car."
          ],
          [
            "try to",
            "I'm trying to sleep."
          ],
          [
            "forget to",
            "I forgot to call you."
          ],
          [
            "want + persona + to",
            "I want you to come."
          ]
        ]
      },
      "ojo": [
        "No olvides ***to***: *I want **to** go* ✅, no *I want go* ❌.",
        "«Quiero que vengas» = ***I want you to come*** ✅, no *I want that you come* ❌.",
        "*I **forgot to** buy bread* (no lo compré) / *I **remembered to** buy bread* (sí me acordé de comprarlo).",
        "Algunos verbos van con **-ing** en vez de *to*: *enjoy, finish, mind*: *I **enjoy** cook**ing**. I **finished** work**ing***.",
        "*Learn **to** swim* = aprender **a** nadar. En español decimos «a»; en inglés es ***to***."
      ],
      "en": [
        "Many verbs are followed by to plus a verb: I want to travel. She needs to rest. We decided to move.",
        "The first verb changes, but the second doesn't: She wants to go. They wanted to go.",
        "Want plus a person: I want you to help me. My mom wants me to study medicine."
      ]
    },
    "vocabulario": [
      {
        "en": "I want to travel.",
        "es": "quiero viajar",
        "imagen": "Persona mirando aviones despegar desde la ventana del aeropuerto",
        "ejemplo": [
          "I want to travel around the world.",
          "Quiero viajar por el mundo."
        ]
      },
      {
        "en": "I need to rest.",
        "es": "necesito descansar",
        "imagen": "Persona agotada recostada en el sofá con los ojos cerrados",
        "ejemplo": [
          "I need to rest for a few days.",
          "Necesito descansar unos días."
        ]
      },
      {
        "en": "We decided to move.",
        "es": "decidimos mudarnos",
        "imagen": "Pareja cerrando la última caja de mudanza",
        "ejemplo": [
          "We decided to move to a quieter city.",
          "Decidimos mudarnos a una ciudad más tranquila."
        ]
      },
      {
        "en": "She's planning to study abroad.",
        "es": "ella planea estudiar en el extranjero",
        "imagen": "Joven revisando universidades extranjeras en su laptop",
        "ejemplo": [
          "She's planning to study in France.",
          "Ella planea estudiar en Francia."
        ]
      },
      {
        "en": "I hope to see you soon.",
        "es": "espero verte pronto",
        "imagen": "Amigos despidiéndose en una estación de tren",
        "ejemplo": [
          "I hope to see you soon.",
          "Espero verte pronto."
        ]
      },
      {
        "en": "I'm trying to sleep.",
        "es": "estoy tratando de dormir",
        "imagen": "Persona en la cama tapándose la cabeza con la almohada por el ruido",
        "ejemplo": [
          "Be quiet! I'm trying to sleep.",
          "¡Silencio! Estoy tratando de dormir."
        ]
      },
      {
        "en": "He's learning to swim.",
        "es": "él está aprendiendo a nadar",
        "imagen": "Niño con flotadores en una clase de natación",
        "ejemplo": [
          "My son is learning to swim.",
          "Mi hijo está aprendiendo a nadar."
        ]
      },
      {
        "en": "I forgot to call you.",
        "es": "se me olvidó llamarte",
        "imagen": "Persona apenada mirando su celular de noche",
        "ejemplo": [
          "Sorry, I forgot to call you yesterday.",
          "Perdón, ayer se me olvidó llamarte."
        ]
      },
      {
        "en": "She promised to help.",
        "es": "ella prometió ayudar",
        "imagen": "Amiga levantando la mano en señal de promesa",
        "ejemplo": [
          "She promised to help me with the party.",
          "Prometió ayudarme con la fiesta."
        ]
      },
      {
        "en": "I'd like to visit Japan.",
        "es": "me gustaría visitar Japón",
        "imagen": "Templo japonés con cerezos en flor",
        "ejemplo": [
          "One day I'd like to visit Japan.",
          "Algún día me gustaría visitar Japón."
        ]
      },
      {
        "en": "They agreed to meet.",
        "es": "quedaron en verse",
        "imagen": "Dos personas dándose la mano después de un acuerdo",
        "ejemplo": [
          "They agreed to meet on Monday.",
          "Quedaron en verse el lunes."
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
        "en": "I can't afford to buy it.",
        "es": "no me alcanza para comprarlo",
        "imagen": "Persona mirando un carro nuevo y su cartera vacía",
        "ejemplo": [
          "I can't afford to buy a new car.",
          "No me alcanza para comprar un carro nuevo."
        ]
      },
      {
        "en": "I want you to come.",
        "es": "quiero que vengas",
        "imagen": "Persona invitando a su amigo a una fiesta",
        "ejemplo": [
          "I really want you to come to my wedding.",
          "De verdad quiero que vengas a mi boda."
        ]
      },
      {
        "en": "We need to talk.",
        "es": "tenemos que hablar",
        "imagen": "Pareja sentada frente a frente en la mesa de la cocina",
        "ejemplo": [
          "We need to talk about the money.",
          "Tenemos que hablar del dinero."
        ]
      },
      {
        "en": "I'm going to try to quit.",
        "es": "voy a intentar dejarlo",
        "imagen": "Persona tirando una cajetilla de cigarros a la basura",
        "ejemplo": [
          "I'm going to try to quit smoking.",
          "Voy a intentar dejar de fumar."
        ]
      }
    ],
    "grupos": [
      {
        "id": "decisiones",
        "titulo": "Grandes decisiones",
        "icono": "🧭",
        "patron": [
          "I decided to…",
          "I'm planning to…",
          "I hope to…"
        ],
        "palabras": [
          {
            "en": "decided to change jobs",
            "es": "decidió cambiar de trabajo",
            "imagen": "Persona saliendo de una oficina con una caja de sus cosas y sonriendo",
            "ejemplo": [
              "She decided to change jobs.",
              "Decidió cambiar de trabajo."
            ]
          },
          {
            "en": "decided to go back to school",
            "es": "decidió volver a estudiar",
            "imagen": "Adulto en un salón universitario con jóvenes",
            "ejemplo": [
              "My dad decided to go back to school at fifty.",
              "Mi papá decidió volver a estudiar a los cincuenta."
            ]
          },
          {
            "en": "planning to get married",
            "es": "planean casarse",
            "imagen": "Pareja revisando revistas de bodas",
            "ejemplo": [
              "They're planning to get married next year.",
              "Planean casarse el próximo año."
            ]
          },
          {
            "en": "hoping to buy a house",
            "es": "esperan comprar una casa",
            "imagen": "Pareja mirando una casa con letrero de venta, sin texto",
            "ejemplo": [
              "We're hoping to buy a house soon.",
              "Esperamos comprar una casa pronto."
            ]
          },
          {
            "en": "chose to stay",
            "es": "eligió quedarse",
            "imagen": "Persona en su pueblo abrazando a su familia",
            "ejemplo": [
              "He chose to stay in his hometown.",
              "Eligió quedarse en su pueblo."
            ]
          },
          {
            "en": "learned to drive at forty",
            "es": "aprendió a manejar a los cuarenta",
            "imagen": "Mujer madura sonriendo al volante en clase de manejo",
            "ejemplo": [
              "My mom learned to drive at forty.",
              "Mi mamá aprendió a manejar a los cuarenta."
            ]
          }
        ]
      },
      {
        "id": "quiero",
        "titulo": "Quiero que…",
        "icono": "💬",
        "patron": [
          "I want you to…",
          "She asked me to…",
          "They told us to…"
        ],
        "palabras": [
          {
            "en": "My mom wants me to study.",
            "es": "mi mamá quiere que estudie",
            "imagen": "Mamá señalando los libros a su hijo",
            "ejemplo": [
              "My mom wants me to study medicine.",
              "Mi mamá quiere que estudie medicina."
            ]
          },
          {
            "en": "I want you to be happy.",
            "es": "quiero que seas feliz",
            "imagen": "Papá abrazando a su hija en su graduación",
            "ejemplo": [
              "I just want you to be happy.",
              "Solo quiero que seas feliz."
            ]
          },
          {
            "en": "She asked me to help her.",
            "es": "ella me pidió que la ayudara",
            "imagen": "Vecina pidiendo ayuda con unas bolsas",
            "ejemplo": [
              "She asked me to help her with the bags.",
              "Me pidió que le ayudara con las bolsas."
            ]
          },
          {
            "en": "The doctor told me to rest.",
            "es": "el doctor me dijo que descansara",
            "imagen": "Doctor dando indicaciones a su paciente",
            "ejemplo": [
              "The doctor told me to rest for a week.",
              "El doctor me dijo que descansara una semana."
            ]
          },
          {
            "en": "Do you want me to drive?",
            "es": "¿quieres que maneje yo?",
            "imagen": "Persona ofreciendo manejar a su pareja cansada",
            "ejemplo": [
              "You look tired. Do you want me to drive?",
              "Te ves cansado. ¿Quieres que maneje yo?"
            ]
          },
          {
            "en": "I'd like you to meet my wife.",
            "es": "me gustaría que conocieras a mi esposa",
            "imagen": "Hombre presentando a su esposa a un amigo",
            "ejemplo": [
              "I'd like you to meet my wife, Laura.",
              "Me gustaría que conocieras a mi esposa, Laura."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I want to travel around the world.",
        "es": "Quiero viajar por el mundo."
      },
      {
        "en": "We decided to move to a quieter city.",
        "es": "Decidimos mudarnos a una ciudad más tranquila."
      },
      {
        "en": "Be quiet! I'm trying to sleep.",
        "es": "¡Silencio! Estoy tratando de dormir."
      },
      {
        "en": "Sorry, I forgot to call you yesterday.",
        "es": "Perdón, ayer se me olvidó llamarte."
      },
      {
        "en": "One day I'd like to visit Japan.",
        "es": "Algún día me gustaría visitar Japón."
      },
      {
        "en": "I can't afford to buy a new car.",
        "es": "No me alcanza para comprar un carro nuevo."
      },
      {
        "en": "I really want you to come to my wedding.",
        "es": "De verdad quiero que vengas a mi boda."
      },
      {
        "en": "The doctor told me to rest for a week.",
        "es": "El doctor me dijo que descansara una semana."
      },
      {
        "en": "You look tired. Do you want me to drive?",
        "es": "Te ves cansado. ¿Quieres que maneje yo?"
      },
      {
        "en": "My mom learned to drive at forty.",
        "es": "Mi mamá aprendió a manejar a los cuarenta."
      }
    ],
    "frases": [
      {
        "en": "After ten years in the city, we decided to move to the coast and open a small restaurant.",
        "es": "Después de diez años en la ciudad, decidimos mudarnos a la costa y abrir un restaurantito.",
        "imagen": "Pareja abriendo un pequeño restaurante frente al mar"
      },
      {
        "en": "I need to save money because I'm planning to buy a car next year.",
        "es": "Necesito ahorrar porque planeo comprar un carro el próximo año.",
        "imagen": "Persona poniendo billetes en un sobre de ahorro"
      },
      {
        "en": "My parents want me to study law, but I want to be a musician.",
        "es": "Mis papás quieren que estudie derecho, pero yo quiero ser músico.",
        "imagen": "Joven con una guitarra mientras sus papás le muestran libros de leyes"
      },
      {
        "en": "I tried to call you three times, but your phone was off.",
        "es": "Traté de llamarte tres veces, pero tu celular estaba apagado.",
        "imagen": "Persona preocupada marcando una y otra vez en su celular"
      },
      {
        "en": "Don't forget to buy bread on your way home!",
        "es": "¡No olvides comprar pan de camino a casa!",
        "imagen": "Persona saliendo de una panadería con una bolsa de pan"
      },
      {
        "en": "She promised to call me when she arrives in Madrid.",
        "es": "Prometió llamarme cuando llegue a Madrid.",
        "imagen": "Viajera bajando de un avión con el celular en la mano"
      },
      {
        "en": "We hope to visit our cousins in Chicago this summer.",
        "es": "Esperamos visitar a nuestros primos en Chicago este verano.",
        "imagen": "Familia reunida en un parque frente a los rascacielos de Chicago"
      },
      {
        "en": "He refused to wear a tie to the wedding, and his mother was very angry.",
        "es": "Se negó a usar corbata en la boda y su mamá se enojó mucho.",
        "imagen": "Joven en la boda sin corbata y su mamá molesta"
      },
      {
        "en": "I'm learning to cook because I want to eat healthier food.",
        "es": "Estoy aprendiendo a cocinar porque quiero comer más sano.",
        "imagen": "Persona cocinando verduras siguiendo una receta en la tablet"
      },
      {
        "en": "I'd like you to meet my best friend. You're going to love her!",
        "es": "Me gustaría que conocieras a mi mejor amiga. ¡Te va a caer muy bien!",
        "imagen": "Persona presentando a su mejor amiga a su pareja en un café"
      }
    ],
    "listening": [
      {
        "audio": "I want to learn Italian because I'm planning to live in Rome.",
        "pregunta": "¿Por qué quiere aprender italiano?",
        "opciones": [
          "Planea vivir en Roma",
          "Le gusta la comida",
          "Por su trabajo",
          "Tiene novio italiano"
        ]
      },
      {
        "audio": "Sorry, I forgot to bring the cake. It's still in my fridge!",
        "pregunta": "¿Qué se le olvidó?",
        "opciones": [
          "Llevar el pastel",
          "Comprar el pastel",
          "Hacer el pastel",
          "Comer el pastel"
        ]
      },
      {
        "audio": "My boss wants me to work on Saturday, but I promised to visit my mom.",
        "pregunta": "¿Qué quiere el jefe?",
        "opciones": [
          "Que trabaje el sábado",
          "Que visite a su mamá",
          "Que llegue temprano",
          "Que cambie de trabajo"
        ]
      },
      {
        "audio": "We decided to sell the car because we can't afford to fix it.",
        "pregunta": "¿Por qué venden el carro?",
        "opciones": [
          "No les alcanza para arreglarlo",
          "Quieren uno nuevo",
          "No lo usan",
          "Se van a mudar"
        ]
      },
      {
        "audio": "Do you want me to pick you up? Yes, please. I'm at the station.",
        "pregunta": "¿Dónde está la persona?",
        "opciones": [
          "En la estación",
          "En el aeropuerto",
          "En el trabajo",
          "En casa"
        ]
      }
    ],
    "lectura": {
      "titulo": "A big decision",
      "texto": "For eight years, Rocío worked in a bank in Monterrey. She had a good salary, but she wasn't happy. She always wanted to work with animals. Last year she decided to change her life. First, she needed to save money, so she stopped eating at restaurants and sold her car. Then she started to study to be a veterinary assistant at night. Her parents wanted her to stay at the bank, and they tried to change her mind. But Rocío refused to give up. Six months ago she finished the course, and now she works at an animal hospital. She earns less money, but she says: I don't need to be rich. I need to be happy. Next year she hopes to open her own pet clinic.",
      "preguntas": [
        {
          "pregunta": "¿Dónde trabajaba Rocío?",
          "opciones": [
            "En un banco",
            "En un hospital",
            "En una escuela",
            "En una tienda"
          ]
        },
        {
          "pregunta": "¿Qué hizo para ahorrar?",
          "opciones": [
            "Dejó de comer en restaurantes y vendió su carro",
            "Pidió un préstamo",
            "Trabajó horas extra",
            "Se mudó con sus papás"
          ]
        },
        {
          "pregunta": "¿Qué querían sus papás?",
          "opciones": [
            "Que se quedara en el banco",
            "Que estudiara veterinaria",
            "Que se casara",
            "Que se mudara"
          ]
        },
        {
          "pregunta": "¿Qué espera hacer el próximo año?",
          "opciones": [
            "Abrir su propia clínica",
            "Volver al banco",
            "Comprar un carro",
            "Estudiar medicina"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con to o nada.",
        "pregunta": "I want ___ go home.",
        "respuestas": [
          "to"
        ]
      },
      {
        "instruccion": "Completa con el verbo.",
        "pregunta": "We need ___ (buy) milk.",
        "respuestas": [
          "to buy"
        ]
      },
      {
        "instruccion": "Completa con el verbo.",
        "pregunta": "She decided ___ (study) medicine.",
        "respuestas": [
          "to study"
        ]
      },
      {
        "instruccion": "Completa con el verbo.",
        "pregunta": "I forgot ___ (call) my mom.",
        "respuestas": [
          "to call"
        ]
      },
      {
        "instruccion": "Completa con el pronombre.",
        "pregunta": "I want ___ to help me. (tú)",
        "respuestas": [
          "you"
        ]
      },
      {
        "instruccion": "Completa con -ing o to.",
        "pregunta": "I enjoy ___ (cook).",
        "respuestas": [
          "cooking"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Quiero viajar.",
        "respuestas": [
          "I want to travel"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Quiero que vengas.",
        "respuestas": [
          "I want you to come"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Estoy aprendiendo a nadar.",
        "respuestas": [
          "I'm learning to swim",
          "I am learning to swim",
          "I'm learning how to swim"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I want that you help me.",
        "respuestas": [
          "I want you to help me"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "I need ___ some money.",
        "opciones": [
          "to borrow",
          "borrow",
          "borrowing",
          "borrowed"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She ___ to buy a new phone.",
        "opciones": [
          "wants",
          "want",
          "wanting",
          "is want"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "My parents want ___ to be a doctor.",
        "opciones": [
          "me",
          "I",
          "my",
          "that I"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Yesterday we decided ___ at home.",
        "opciones": [
          "to stay",
          "stay",
          "staying",
          "stayed"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I finished ___ at six.",
        "opciones": [
          "working",
          "to work",
          "work",
          "worked"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«I can't afford to buy it» significa:",
        "opciones": [
          "No me alcanza para comprarlo",
          "No quiero comprarlo",
          "Se me olvidó comprarlo",
          "No puedo encontrarlo"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I'm trying to lose weight, so I decided to walk to work every day.",
        "pregunta": "¿Qué decidió hacer?",
        "opciones": [
          "Caminar al trabajo",
          "Dejar de comer",
          "Ir al gimnasio",
          "Andar en bici"
        ]
      },
      {
        "tipo": "listening",
        "audio": "She promised to bring the music, but she forgot to charge her speaker.",
        "pregunta": "¿Qué olvidó?",
        "opciones": [
          "Cargar su bocina",
          "Llevar la música",
          "Ir a la fiesta",
          "Comprar una bocina"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Necesito descansar.",
        "respuestas": [
          "I need to rest"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Se me olvidó llamarte.",
        "respuestas": [
          "I forgot to call you"
        ]
      }
    ]
  },
  {
    "id": "a2-21",
    "num": 21,
    "titulo": "Pronombres indefinidos (something, anyone, nobody, everywhere…)",
    "contexto": "Buscar cosas y personas",
    "explicacion": {
      "es": [
        "Los **pronombres indefinidos** hablan de cosas, personas o lugares **sin decir cuáles**. Se forman con ***some-, any-, no-, every-*** + ***-thing*** (cosa), ***-one / -body*** (persona) y ***-where*** (lugar).",
        "***Some-*** en **afirmativo**: ***Someone** is at the door. I want to eat **something**. Let's go **somewhere** nice.* (También en ofertas: *Would you like **something** to drink?*)",
        "***Any-*** en **negativo y preguntas**: *I can't find my keys **anywhere**. Is there **anyone** here? I don't know **anything**.*",
        "***No-*** ya es negativo, va con verbo **afirmativo**: ***Nobody** called. There's **nothing** in the fridge.* ***Every-*** es **todo / todos**: ***Everybody** is here. I looked **everywhere**.*"
      ],
      "tabla": {
        "columnas": [
          "",
          "Cosa (-thing)",
          "Persona (-one / -body)",
          "Lugar (-where)"
        ],
        "filas": [
          [
            "some-",
            "something (algo)",
            "someone (alguien)",
            "somewhere (en algún lugar)"
          ],
          [
            "any-",
            "anything (nada / algo)",
            "anyone (nadie / alguien)",
            "anywhere (ningún / algún lugar)"
          ],
          [
            "no-",
            "nothing (nada)",
            "no one / nobody (nadie)",
            "nowhere (ningún lugar)"
          ],
          [
            "every-",
            "everything (todo)",
            "everyone (todos)",
            "everywhere (en todos lados)"
          ]
        ]
      },
      "ojo": [
        "**Nunca dos negativos**: *I don't know **anything*** ✅ o *I know **nothing*** ✅, pero no *I don't know nothing* ❌.",
        "***Everybody / everyone*** va con verbo en **singular**: *Everybody **is** happy* ✅, no *Everybody are* ❌.",
        "*-one* y *-body* significan lo mismo: *someone = somebody, no one = nobody*.",
        "*Anything* en afirmativo significa **cualquier cosa**: *You can eat **anything** you want.*",
        "Con adjetivo, el adjetivo va **después**: ***something nice**, **somewhere quiet**, **nothing new***."
      ],
      "en": [
        "Indefinite pronouns talk about things, people and places without saying which.",
        "Some in positive sentences: Someone is at the door. Let's go somewhere nice.",
        "Any in negatives and questions: I can't find my keys anywhere. Is there anyone here?",
        "No and every: Nobody called. There's nothing in the fridge. I looked everywhere."
      ]
    },
    "vocabulario": [
      {
        "en": "something",
        "es": "algo",
        "imagen": "Caja de regalo misteriosa envuelta sobre la mesa",
        "ejemplo": [
          "I have something for you.",
          "Tengo algo para ti."
        ]
      },
      {
        "en": "someone",
        "es": "alguien",
        "imagen": "Silueta de una persona detrás de una puerta de vidrio",
        "ejemplo": [
          "Someone is at the door.",
          "Alguien está en la puerta."
        ]
      },
      {
        "en": "somewhere",
        "es": "en algún lugar",
        "imagen": "Persona mirando el horizonte desde un mirador",
        "ejemplo": [
          "My keys are somewhere in the house.",
          "Mis llaves están en algún lugar de la casa."
        ]
      },
      {
        "en": "anything",
        "es": "algo / nada",
        "imagen": "Persona revisando un refrigerador casi vacío",
        "ejemplo": [
          "Is there anything to eat?",
          "¿Hay algo de comer?"
        ]
      },
      {
        "en": "anyone",
        "es": "alguien / nadie",
        "imagen": "Persona en una oficina vacía preguntando en voz alta",
        "ejemplo": [
          "Is anyone here?",
          "¿Hay alguien aquí?"
        ]
      },
      {
        "en": "anywhere",
        "es": "en ningún / algún lugar",
        "imagen": "Persona buscando su celular debajo de los cojines",
        "ejemplo": [
          "I can't find my phone anywhere.",
          "No encuentro mi celular por ningún lado."
        ]
      },
      {
        "en": "nothing",
        "es": "nada",
        "imagen": "Cajón vacío abierto",
        "ejemplo": [
          "There's nothing in the box.",
          "No hay nada en la caja."
        ]
      },
      {
        "en": "nobody",
        "es": "nadie",
        "imagen": "Calle completamente vacía en la madrugada",
        "ejemplo": [
          "Nobody was in the street.",
          "No había nadie en la calle."
        ]
      },
      {
        "en": "nowhere",
        "es": "ningún lugar",
        "imagen": "Persona perdida en un desierto sin caminos",
        "ejemplo": [
          "There's nowhere to park.",
          "No hay dónde estacionarse."
        ]
      },
      {
        "en": "everything",
        "es": "todo",
        "imagen": "Mesa con todo listo para una fiesta",
        "ejemplo": [
          "Everything is ready for the party.",
          "Todo está listo para la fiesta."
        ]
      },
      {
        "en": "everybody",
        "es": "todos",
        "imagen": "Grupo de amigos saludando a la cámara",
        "ejemplo": [
          "Everybody is here. Let's start!",
          "Todos están aquí. ¡Empecemos!"
        ]
      },
      {
        "en": "everywhere",
        "es": "en todos lados",
        "imagen": "Juguetes regados por toda la casa",
        "ejemplo": [
          "There are toys everywhere!",
          "¡Hay juguetes por todos lados!"
        ]
      },
      {
        "en": "something to drink",
        "es": "algo de tomar",
        "imagen": "Persona ofreciendo una jarra de agua de jamaica",
        "ejemplo": [
          "Would you like something to drink?",
          "¿Quieres algo de tomar?"
        ]
      },
      {
        "en": "somewhere quiet",
        "es": "algún lugar tranquilo",
        "imagen": "Café tranquilo con pocas personas leyendo",
        "ejemplo": [
          "Let's go somewhere quiet to talk.",
          "Vamos a algún lugar tranquilo para platicar."
        ]
      },
      {
        "en": "nothing new",
        "es": "nada nuevo",
        "imagen": "Persona encogiéndose de hombros con una sonrisa",
        "ejemplo": [
          "What's new? Nothing new.",
          "¿Qué hay de nuevo? Nada nuevo."
        ]
      },
      {
        "en": "someone special",
        "es": "alguien especial",
        "imagen": "Persona preparando una cena romántica con velas",
        "ejemplo": [
          "I'm cooking for someone special.",
          "Estoy cocinando para alguien especial."
        ]
      }
    ],
    "grupos": [
      {
        "id": "buscar",
        "titulo": "Buscar cosas",
        "icono": "🔍",
        "patron": [
          "I'm looking for…",
          "Have you seen…?",
          "I found it!"
        ],
        "palabras": [
          {
            "en": "I'm looking for my keys.",
            "es": "estoy buscando mis llaves",
            "imagen": "Persona revisando sus bolsillos frente a la puerta",
            "ejemplo": [
              "I'm looking for my keys. Have you seen them?",
              "Estoy buscando mis llaves. ¿Las has visto?"
            ]
          },
          {
            "en": "Have you seen my glasses?",
            "es": "¿has visto mis lentes?",
            "imagen": "Persona entrecerrando los ojos buscando sus lentes que lleva en la cabeza",
            "ejemplo": [
              "Have you seen my glasses? They're on your head!",
              "¿Has visto mis lentes? ¡Los traes en la cabeza!"
            ]
          },
          {
            "en": "I found it!",
            "es": "¡lo encontré!",
            "imagen": "Persona levantando su cartera con alegría debajo del sillón",
            "ejemplo": [
              "I found it! It was under the sofa.",
              "¡La encontré! Estaba debajo del sillón."
            ]
          },
          {
            "en": "I lost my wallet.",
            "es": "perdí mi cartera",
            "imagen": "Persona preocupada revisando su mochila",
            "ejemplo": [
              "I think I lost my wallet on the bus.",
              "Creo que perdí mi cartera en el camión."
            ]
          },
          {
            "en": "Where did you put it?",
            "es": "¿dónde lo pusiste?",
            "imagen": "Pareja buscando algo en los cajones de la cocina",
            "ejemplo": [
              "Where did you put the scissors?",
              "¿Dónde pusiste las tijeras?"
            ]
          },
          {
            "en": "It must be somewhere.",
            "es": "debe estar en algún lado",
            "imagen": "Persona buscando entre papeles en su escritorio",
            "ejemplo": [
              "Don't worry, it must be somewhere.",
              "No te preocupes, debe estar en algún lado."
            ]
          }
        ]
      },
      {
        "id": "personas",
        "titulo": "Buscar personas",
        "icono": "🧑",
        "patron": [
          "Does anyone know…?",
          "Nobody answered.",
          "Somebody told me…"
        ],
        "palabras": [
          {
            "en": "Does anyone know her?",
            "es": "¿alguien la conoce?",
            "imagen": "Persona mostrando la foto de una mujer a un grupo",
            "ejemplo": [
              "Does anyone know her name?",
              "¿Alguien sabe cómo se llama?"
            ]
          },
          {
            "en": "Nobody answered.",
            "es": "nadie contestó",
            "imagen": "Persona esperando en una puerta cerrada después de tocar",
            "ejemplo": [
              "I knocked, but nobody answered.",
              "Toqué, pero nadie contestó."
            ]
          },
          {
            "en": "Somebody told me.",
            "es": "alguien me dijo",
            "imagen": "Dos amigas cuchicheando en una oficina",
            "ejemplo": [
              "Somebody told me you're moving.",
              "Alguien me dijo que te vas a mudar."
            ]
          },
          {
            "en": "Is anybody home?",
            "es": "¿hay alguien en casa?",
            "imagen": "Persona entrando a una casa oscura con las llaves",
            "ejemplo": [
              "Hello! Is anybody home?",
              "¡Hola! ¿Hay alguien en casa?"
            ]
          },
          {
            "en": "everyone in my family",
            "es": "todos en mi familia",
            "imagen": "Foto de una familia grande sonriendo",
            "ejemplo": [
              "Everyone in my family loves soccer.",
              "A todos en mi familia les encanta el fútbol."
            ]
          },
          {
            "en": "no one else",
            "es": "nadie más",
            "imagen": "Persona sola en una sala de cine vacía",
            "ejemplo": [
              "There was no one else in the theater.",
              "No había nadie más en el cine."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I have something for you.",
        "es": "Tengo algo para ti."
      },
      {
        "en": "Someone is at the door.",
        "es": "Alguien está en la puerta."
      },
      {
        "en": "I can't find my phone anywhere.",
        "es": "No encuentro mi celular por ningún lado."
      },
      {
        "en": "Is there anything to eat?",
        "es": "¿Hay algo de comer?"
      },
      {
        "en": "Nobody was in the street.",
        "es": "No había nadie en la calle."
      },
      {
        "en": "Everything is ready for the party.",
        "es": "Todo está listo para la fiesta."
      },
      {
        "en": "There are toys everywhere!",
        "es": "¡Hay juguetes por todos lados!"
      },
      {
        "en": "I knocked, but nobody answered.",
        "es": "Toqué, pero nadie contestó."
      },
      {
        "en": "I don't know anything about cars.",
        "es": "No sé nada de carros.",
        "imagen": "Persona confundida mirando el motor de un carro"
      },
      {
        "en": "Let's go somewhere quiet to talk.",
        "es": "Vamos a algún lugar tranquilo para platicar."
      }
    ],
    "frases": [
      {
        "en": "I looked everywhere for my keys, and they were in my pocket all the time!",
        "es": "¡Busqué mis llaves por todos lados y estaban en mi bolsillo todo el tiempo!",
        "imagen": "Persona riéndose al encontrar sus llaves en el bolsillo"
      },
      {
        "en": "Is there anyone here who speaks Spanish? I need some help.",
        "es": "¿Hay alguien aquí que hable español? Necesito ayuda.",
        "imagen": "Turista pidiendo ayuda en una estación de tren"
      },
      {
        "en": "There's nothing in the fridge. Let's order something.",
        "es": "No hay nada en el refrigerador. Pidamos algo.",
        "imagen": "Refrigerador vacío con una persona mirando su celular"
      },
      {
        "en": "Everybody was dancing, but nobody wanted to sing.",
        "es": "Todos estaban bailando, pero nadie quería cantar.",
        "imagen": "Fiesta con gente bailando y un micrófono solo en el escenario"
      },
      {
        "en": "I want to go somewhere warm this winter, maybe somewhere with a beach.",
        "es": "Este invierno quiero ir a algún lugar cálido, tal vez a algún lugar con playa.",
        "imagen": "Hamaca entre palmeras en una playa soleada"
      },
      {
        "en": "Did anyone see a black cat? Our cat is lost.",
        "es": "¿Alguien vio un gato negro? Nuestro gato está perdido.",
        "imagen": "Niña sosteniendo la foto de un gato negro en la calle"
      },
      {
        "en": "Somebody left a bag on the bus, so the driver took it to the office.",
        "es": "Alguien dejó una bolsa en el camión, así que el chofer la llevó a la oficina.",
        "imagen": "Chofer de autobús recogiendo una bolsa olvidada en un asiento"
      },
      {
        "en": "I didn't buy anything at the mall. Everything was too expensive.",
        "es": "No compré nada en el centro comercial. Todo estaba demasiado caro.",
        "imagen": "Persona saliendo de una tienda sin bolsas"
      },
      {
        "en": "No one in my family can cook like my grandmother.",
        "es": "Nadie en mi familia cocina como mi abuela.",
        "imagen": "Abuela cocinando con nietos mirando con admiración"
      },
      {
        "en": "Can I bring anything to the party? Just bring someone fun!",
        "es": "¿Puedo llevar algo a la fiesta? ¡Solo trae a alguien divertido!",
        "imagen": "Amigos riendo al llegar a una fiesta en casa"
      }
    ],
    "listening": [
      {
        "audio": "Is there anything in the mailbox? No, nothing today.",
        "pregunta": "¿Qué hay en el buzón?",
        "opciones": [
          "Nada",
          "Una carta",
          "Un paquete",
          "Una revista"
        ]
      },
      {
        "audio": "Somebody called you this morning, but they didn't leave a message.",
        "pregunta": "¿Qué pasó en la mañana?",
        "opciones": [
          "Alguien llamó sin dejar mensaje",
          "Nadie llamó",
          "Llegó una carta",
          "Alguien tocó la puerta"
        ]
      },
      {
        "audio": "I looked everywhere, but I can't find my passport anywhere.",
        "pregunta": "¿Qué no encuentra?",
        "opciones": [
          "Su pasaporte",
          "Sus llaves",
          "Su celular",
          "Su cartera"
        ]
      },
      {
        "audio": "Everybody in my office drinks coffee, but nobody drinks tea.",
        "pregunta": "¿Qué toma la gente de la oficina?",
        "opciones": [
          "Café",
          "Té",
          "Agua",
          "Refresco"
        ]
      },
      {
        "audio": "Let's go somewhere different for dinner. How about the new Peruvian restaurant?",
        "pregunta": "¿A dónde propone ir?",
        "opciones": [
          "A un restaurante peruano nuevo",
          "A casa",
          "A un restaurante mexicano",
          "Al centro comercial"
        ]
      }
    ],
    "lectura": {
      "titulo": "Where is Max?",
      "texto": "On Sunday morning the Gómez family woke up, and something was wrong: Max, their dog, wasn't anywhere in the house. Everybody looked for him everywhere: in the garden, under the beds, and in the garage. Nothing. Nobody saw him leave. The kids made posters with his photo and put them everywhere in the neighborhood. Mrs. Gómez asked: Has anyone seen a small brown dog? But nobody had. In the afternoon, someone called. It was the baker from the corner. He said: There's a little brown dog here. He's eating something… I think it's my bread! Everybody laughed. Max was safe, and from that day, he got a piece of bread every Sunday.",
      "preguntas": [
        {
          "pregunta": "¿Qué pasó el domingo en la mañana?",
          "opciones": [
            "Max no estaba en la casa",
            "Max estaba enfermo",
            "Max llegó con otro perro",
            "Max rompió algo"
          ]
        },
        {
          "pregunta": "¿Qué hicieron los niños?",
          "opciones": [
            "Carteles con su foto",
            "Llamaron a la policía",
            "Fueron a la panadería",
            "Se pusieron a llorar"
          ]
        },
        {
          "pregunta": "¿Quién llamó en la tarde?",
          "opciones": [
            "El panadero de la esquina",
            "Un vecino",
            "La policía",
            "El veterinario"
          ]
        },
        {
          "pregunta": "¿Qué recibe Max cada domingo ahora?",
          "opciones": [
            "Un pedazo de pan",
            "Un juguete",
            "Un paseo",
            "Un baño"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con something o anything.",
        "pregunta": "I want to eat ___.",
        "respuestas": [
          "something"
        ]
      },
      {
        "instruccion": "Completa con something o anything.",
        "pregunta": "I don't know ___ about it.",
        "respuestas": [
          "anything"
        ]
      },
      {
        "instruccion": "Completa con someone o anyone.",
        "pregunta": "Is ___ here?",
        "respuestas": [
          "anyone",
          "anybody"
        ]
      },
      {
        "instruccion": "Completa con nobody o everybody.",
        "pregunta": "___ called me. I'm sad.",
        "respuestas": [
          "Nobody",
          "No one"
        ]
      },
      {
        "instruccion": "Completa con everywhere o nowhere.",
        "pregunta": "I looked ___ for my keys.",
        "respuestas": [
          "everywhere"
        ]
      },
      {
        "instruccion": "Completa con is o are.",
        "pregunta": "Everybody ___ happy.",
        "respuestas": [
          "is"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Alguien está en la puerta.",
        "respuestas": [
          "Someone is at the door",
          "Somebody is at the door",
          "There's someone at the door",
          "There is someone at the door"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "No hay nada en el refrigerador.",
        "respuestas": [
          "There's nothing in the fridge",
          "There is nothing in the fridge",
          "There isn't anything in the fridge"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Quieres algo de tomar?",
        "respuestas": [
          "Would you like something to drink",
          "Do you want something to drink"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I don't know nothing.",
        "respuestas": [
          "I don't know anything",
          "I know nothing"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "There's ___ at the door.",
        "opciones": [
          "someone",
          "anyone",
          "everyone",
          "no one at"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I can't find my glasses ___.",
        "opciones": [
          "anywhere",
          "somewhere",
          "nowhere",
          "everywhere"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ came to the meeting. The room was empty.",
        "opciones": [
          "Nobody",
          "Anybody",
          "Somebody",
          "Everybody"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Is there ___ to eat?",
        "opciones": [
          "anything",
          "nothing",
          "everything",
          "somethings"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Everyone ___ ready.",
        "opciones": [
          "is",
          "are",
          "be",
          "am"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Let's go somewhere ___.",
        "opciones": [
          "quiet",
          "quietly",
          "quieter than",
          "the quiet"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I didn't buy anything for dinner. Let's eat something at the taco place.",
        "pregunta": "¿Dónde van a cenar?",
        "opciones": [
          "En la taquería",
          "En casa",
          "En un restaurante italiano",
          "No van a cenar"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Has anybody seen my umbrella? I think I left it somewhere in the office.",
        "pregunta": "¿Dónde cree que dejó el paraguas?",
        "opciones": [
          "En algún lugar de la oficina",
          "En el camión",
          "En casa",
          "En el carro"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Todo está listo.",
        "respuestas": [
          "Everything is ready",
          "Everything's ready"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Nadie sabe.",
        "respuestas": [
          "Nobody knows",
          "No one knows"
        ]
      }
    ]
  },
  {
    "id": "a2-22",
    "num": 22,
    "titulo": "Preposiciones de movimiento (across, through, along…) y direcciones",
    "contexto": "Moverse por la ciudad",
    "explicacion": {
      "es": [
        "Las **preposiciones de movimiento** dicen **hacia dónde** se mueve algo: ***across*** (de un lado a otro, cruzando), ***through*** (a través de, por dentro), ***along*** (a lo largo de), ***past*** (pasando junto a), ***into*** (hacia dentro) y ***out of*** (hacia fuera).",
        "Otras muy útiles: ***up*** (subiendo) / ***down*** (bajando), ***over*** (por encima de), ***under*** (por debajo de), ***around*** (alrededor de), ***towards*** (hacia), ***to*** (a) y ***from*** (desde).",
        "Para **dar direcciones**: ***Go straight*** (sigue derecho), ***turn left / right*** (da vuelta a la izquierda / derecha), ***take the second street on the left***, ***it's on the corner*** (está en la esquina), ***it's next to / opposite*** (está junto a / enfrente de).",
        "Para **pedir direcciones** con cortesía: ***Excuse me, how do I get to…? / Is there a pharmacy near here? / Could you tell me where the station is?***"
      ],
      "tabla": {
        "columnas": [
          "Preposición",
          "Ejemplo",
          "Significado"
        ],
        "filas": [
          [
            "across",
            "Walk across the bridge.",
            "Cruza el puente."
          ],
          [
            "through",
            "Go through the park.",
            "Pasa por el parque."
          ],
          [
            "along",
            "Walk along the river.",
            "Camina a lo largo del río."
          ],
          [
            "past",
            "Go past the bank.",
            "Pasa el banco."
          ],
          [
            "into / out of",
            "Get into the taxi. Get out of the car.",
            "Súbete al taxi. Bájate del carro."
          ],
          [
            "up / down",
            "Go up the stairs. Go down the hill.",
            "Sube las escaleras. Baja la colina."
          ]
        ]
      },
      "ojo": [
        "Para **cruzar la calle**: ***cross the street*** o ***go across the street*** (no *cross across* ❌).",
        "*Into* = movimiento hacia dentro (*He walked **into** the room*). *In* = posición (*He's **in** the room*).",
        "Transporte: ***get on / get off*** el camión, el metro o el avión; ***get in / get out of*** el carro o el taxi.",
        "***Opposite*** = enfrente de (del otro lado de la calle). ***In front of*** = delante de.",
        "*Turn left **at** the traffic lights* (en el semáforo); *the second street **on** the right*."
      ],
      "en": [
        "Prepositions of movement: across, through, along, past, into, out of.",
        "Up and down, over and under, around, towards.",
        "Directions: Go straight. Turn left. Take the second street on the right. It's on the corner.",
        "Asking: Excuse me, how do I get to the station?"
      ]
    },
    "vocabulario": [
      {
        "en": "across the street",
        "es": "al otro lado de la calle",
        "imagen": "Personas cruzando la calle en el paso peatonal",
        "ejemplo": [
          "The pharmacy is across the street.",
          "La farmacia está al otro lado de la calle."
        ]
      },
      {
        "en": "through the park",
        "es": "por el parque",
        "imagen": "Persona caminando por un sendero dentro de un parque",
        "ejemplo": [
          "Walk through the park. It's faster.",
          "Camina por el parque. Es más rápido."
        ]
      },
      {
        "en": "along the river",
        "es": "a lo largo del río",
        "imagen": "Ciclistas pedaleando junto a un río",
        "ejemplo": [
          "We walked along the river.",
          "Caminamos a lo largo del río."
        ]
      },
      {
        "en": "past the bank",
        "es": "pasando el banco",
        "imagen": "Persona caminando frente a un banco en la calle",
        "ejemplo": [
          "Go past the bank and turn right.",
          "Pasa el banco y da vuelta a la derecha."
        ]
      },
      {
        "en": "into the building",
        "es": "hacia dentro del edificio",
        "imagen": "Persona entrando por la puerta de un edificio",
        "ejemplo": [
          "She ran into the building.",
          "Entró corriendo al edificio."
        ]
      },
      {
        "en": "out of the car",
        "es": "fuera del carro",
        "imagen": "Persona bajándose de un carro estacionado",
        "ejemplo": [
          "He got out of the car.",
          "Se bajó del carro."
        ]
      },
      {
        "en": "up the stairs",
        "es": "escaleras arriba",
        "imagen": "Persona subiendo unas escaleras largas",
        "ejemplo": [
          "Go up the stairs to the second floor.",
          "Sube las escaleras al segundo piso."
        ]
      },
      {
        "en": "down the hill",
        "es": "colina abajo",
        "imagen": "Ciclista bajando por una calle empinada",
        "ejemplo": [
          "The kids ran down the hill.",
          "Los niños bajaron corriendo la colina."
        ]
      },
      {
        "en": "over the bridge",
        "es": "por encima del puente",
        "imagen": "Carros pasando por un puente sobre un río",
        "ejemplo": [
          "Drive over the bridge.",
          "Pasa por el puente."
        ]
      },
      {
        "en": "under the bridge",
        "es": "debajo del puente",
        "imagen": "Lancha pasando por debajo de un puente",
        "ejemplo": [
          "The boat went under the bridge.",
          "La lancha pasó por debajo del puente."
        ]
      },
      {
        "en": "around the corner",
        "es": "a la vuelta de la esquina",
        "imagen": "Esquina de una calle con una cafetería",
        "ejemplo": [
          "The café is just around the corner.",
          "El café está a la vuelta de la esquina."
        ]
      },
      {
        "en": "towards the station",
        "es": "hacia la estación",
        "imagen": "Gente caminando hacia una estación de tren",
        "ejemplo": [
          "Walk towards the station.",
          "Camina hacia la estación."
        ]
      },
      {
        "en": "Go straight.",
        "es": "sigue derecho",
        "imagen": "Calle larga y recta vista desde el centro",
        "ejemplo": [
          "Go straight for two blocks.",
          "Sigue derecho dos cuadras."
        ]
      },
      {
        "en": "Turn left.",
        "es": "da vuelta a la izquierda",
        "imagen": "Carro con la direccional encendida en un cruce",
        "ejemplo": [
          "Turn left at the traffic lights.",
          "Da vuelta a la izquierda en el semáforo."
        ]
      },
      {
        "en": "Turn right.",
        "es": "da vuelta a la derecha",
        "imagen": "Ciclista haciendo la señal de vuelta a la derecha",
        "ejemplo": [
          "Turn right at the church.",
          "Da vuelta a la derecha en la iglesia."
        ]
      },
      {
        "en": "on the corner",
        "es": "en la esquina",
        "imagen": "Tiendita en la esquina de dos calles",
        "ejemplo": [
          "The bakery is on the corner.",
          "La panadería está en la esquina."
        ]
      }
    ],
    "grupos": [
      {
        "id": "lugares",
        "titulo": "Lugares de la ciudad",
        "icono": "🏙️",
        "patron": [
          "the pharmacy",
          "the bus stop",
          "the traffic lights"
        ],
        "palabras": [
          {
            "en": "the traffic lights",
            "es": "el semáforo",
            "imagen": "Semáforo en rojo en un cruce",
            "ejemplo": [
              "Stop at the traffic lights.",
              "Detente en el semáforo."
            ]
          },
          {
            "en": "the crosswalk",
            "es": "el paso peatonal",
            "imagen": "Paso de cebra con gente cruzando",
            "ejemplo": [
              "Always cross at the crosswalk.",
              "Cruza siempre por el paso peatonal."
            ]
          },
          {
            "en": "the bus stop",
            "es": "la parada del camión",
            "imagen": "Parada con gente esperando el autobús",
            "ejemplo": [
              "The bus stop is in front of the school.",
              "La parada está enfrente de la escuela."
            ]
          },
          {
            "en": "the pharmacy",
            "es": "la farmacia",
            "imagen": "Fachada de una farmacia con cruz verde, sin texto",
            "ejemplo": [
              "Is there a pharmacy near here?",
              "¿Hay una farmacia cerca de aquí?"
            ]
          },
          {
            "en": "the town square",
            "es": "la plaza principal",
            "imagen": "Plaza con kiosco y árboles en un pueblo",
            "ejemplo": [
              "Let's meet in the town square.",
              "Veámonos en la plaza principal."
            ]
          },
          {
            "en": "the block",
            "es": "la cuadra",
            "imagen": "Vista aérea de varias cuadras de una ciudad",
            "ejemplo": [
              "It's three blocks from here.",
              "Está a tres cuadras de aquí."
            ]
          },
          {
            "en": "the roundabout",
            "es": "la glorieta",
            "imagen": "Glorieta con una fuente en el centro y carros alrededor",
            "ejemplo": [
              "Go around the roundabout.",
              "Dale la vuelta a la glorieta."
            ]
          },
          {
            "en": "the subway station",
            "es": "la estación del metro",
            "imagen": "Entrada a una estación de metro con escaleras",
            "ejemplo": [
              "The subway station is opposite the park.",
              "La estación del metro está enfrente del parque."
            ]
          }
        ]
      },
      {
        "id": "pedir",
        "titulo": "Pedir direcciones",
        "icono": "🗺️",
        "patron": [
          "How do I get to…?",
          "Is there a … near here?",
          "Is it far?"
        ],
        "palabras": [
          {
            "en": "How do I get to the museum?",
            "es": "¿cómo llego al museo?",
            "imagen": "Turista con un mapa preguntando a una señora en la calle",
            "ejemplo": [
              "Excuse me, how do I get to the museum?",
              "Disculpe, ¿cómo llego al museo?"
            ]
          },
          {
            "en": "Is there an ATM near here?",
            "es": "¿hay un cajero cerca de aquí?",
            "imagen": "Cajero automático en la pared de un banco",
            "ejemplo": [
              "Is there an ATM near here?",
              "¿Hay un cajero cerca de aquí?"
            ]
          },
          {
            "en": "Is it far?",
            "es": "¿está lejos?",
            "imagen": "Persona señalando a lo lejos a un turista",
            "ejemplo": [
              "Is it far? No, it's a five-minute walk.",
              "¿Está lejos? No, está a cinco minutos caminando."
            ]
          },
          {
            "en": "It's a ten-minute walk.",
            "es": "está a diez minutos caminando",
            "imagen": "Persona caminando con su reloj en la mano",
            "ejemplo": [
              "The beach is a ten-minute walk from here.",
              "La playa está a diez minutos caminando de aquí."
            ]
          },
          {
            "en": "You can't miss it.",
            "es": "no tiene pierde",
            "imagen": "Edificio colorido y llamativo en una esquina",
            "ejemplo": [
              "It's a big red building. You can't miss it.",
              "Es un edificio rojo grande. No tiene pierde."
            ]
          },
          {
            "en": "Sorry, I'm not from here.",
            "es": "perdón, no soy de aquí",
            "imagen": "Persona encogiéndose de hombros frente a un turista",
            "ejemplo": [
              "Sorry, I'm not from here.",
              "Perdón, no soy de aquí."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "The pharmacy is across the street.",
        "es": "La farmacia está al otro lado de la calle."
      },
      {
        "en": "Walk through the park. It's faster.",
        "es": "Camina por el parque. Es más rápido."
      },
      {
        "en": "Go past the bank and turn right.",
        "es": "Pasa el banco y da vuelta a la derecha."
      },
      {
        "en": "Turn left at the traffic lights.",
        "es": "Da vuelta a la izquierda en el semáforo."
      },
      {
        "en": "The café is just around the corner.",
        "es": "El café está a la vuelta de la esquina."
      },
      {
        "en": "Excuse me, how do I get to the museum?",
        "es": "Disculpe, ¿cómo llego al museo?"
      },
      {
        "en": "Is it far? No, it's a five-minute walk.",
        "es": "¿Está lejos? No, está a cinco minutos caminando."
      },
      {
        "en": "Go up the stairs to the second floor.",
        "es": "Sube las escaleras al segundo piso."
      },
      {
        "en": "Get off the bus at the third stop.",
        "es": "Bájate del camión en la tercera parada.",
        "imagen": "Pasajera bajando de un autobús en una parada"
      },
      {
        "en": "It's a big red building. You can't miss it.",
        "es": "Es un edificio rojo grande. No tiene pierde."
      }
    ],
    "frases": [
      {
        "en": "Go straight for two blocks, turn right at the church, and the museum is on your left.",
        "es": "Sigue derecho dos cuadras, da vuelta a la derecha en la iglesia y el museo está a tu izquierda.",
        "imagen": "Turista siguiendo direcciones con una iglesia colonial al fondo"
      },
      {
        "en": "To get to the beach, walk along this street and go through the market.",
        "es": "Para llegar a la playa, camina por esta calle y pasa por el mercado.",
        "imagen": "Calle de un pueblo costero que lleva a un mercado y al mar"
      },
      {
        "en": "The cat jumped over the fence and ran into the neighbor's garden.",
        "es": "El gato brincó la barda y se metió al jardín del vecino.",
        "imagen": "Gato saltando una cerca de madera hacia un jardín"
      },
      {
        "en": "We drove across the bridge and then along the coast for an hour.",
        "es": "Cruzamos el puente en carro y luego manejamos por la costa una hora.",
        "imagen": "Carro manejando por una carretera junto al mar"
      },
      {
        "en": "Excuse me, is there a bus stop near here? Yes, just around the corner.",
        "es": "Disculpe, ¿hay una parada de camión cerca? Sí, a la vuelta de la esquina.",
        "imagen": "Persona señalando la esquina a un señor con maletín"
      },
      {
        "en": "Get on the subway at Hidalgo and get off at Chapultepec.",
        "es": "Súbete al metro en Hidalgo y bájate en Chapultepec.",
        "imagen": "Pasajeros subiendo a un vagón del metro"
      },
      {
        "en": "The children ran out of the classroom and into the playground.",
        "es": "Los niños salieron corriendo del salón hacia el patio.",
        "imagen": "Niños saliendo corriendo de un salón al recreo"
      },
      {
        "en": "Walk past the supermarket, cross the street, and the pharmacy is opposite the park.",
        "es": "Pasa el supermercado, cruza la calle, y la farmacia está enfrente del parque.",
        "imagen": "Calle con un supermercado, un paso peatonal y un parque"
      },
      {
        "en": "My office is a fifteen-minute walk from my house, so I never take the car.",
        "es": "Mi oficina está a quince minutos caminando de mi casa, así que nunca uso el carro.",
        "imagen": "Persona caminando al trabajo con su café por la mañana"
      },
      {
        "en": "Sorry, I'm not from here, but you can ask the police officer over there.",
        "es": "Perdón, no soy de aquí, pero puedes preguntarle al policía de allá.",
        "imagen": "Persona señalando a un policía de tránsito en una esquina"
      }
    ],
    "listening": [
      {
        "audio": "Go straight and turn left at the second traffic lights.",
        "pregunta": "¿Dónde da vuelta?",
        "opciones": [
          "En el segundo semáforo, a la izquierda",
          "En el primer semáforo, a la derecha",
          "En la esquina, a la izquierda",
          "En la glorieta"
        ]
      },
      {
        "audio": "The bank is opposite the church, next to a shoe store.",
        "pregunta": "¿Dónde está el banco?",
        "opciones": [
          "Enfrente de la iglesia",
          "Junto a la iglesia",
          "Detrás de la iglesia",
          "Dentro de una tienda"
        ]
      },
      {
        "audio": "Is the station far? No, it's a five-minute walk. Go through the park.",
        "pregunta": "¿Cómo llega a la estación?",
        "opciones": [
          "Pasando por el parque",
          "En taxi",
          "Cruzando el puente",
          "En camión"
        ]
      },
      {
        "audio": "Get off the bus at the stop after the hospital.",
        "pregunta": "¿Dónde se baja?",
        "opciones": [
          "En la parada después del hospital",
          "En el hospital",
          "En la parada antes del hospital",
          "En la última parada"
        ]
      },
      {
        "audio": "We walked along the beach and then up the hill to see the sunset.",
        "pregunta": "¿Para qué subieron la colina?",
        "opciones": [
          "Para ver el atardecer",
          "Para comer",
          "Para nadar",
          "Para tomar el camión"
        ]
      }
    ],
    "lectura": {
      "titulo": "A walk through the old town",
      "texto": "Welcome to our walking tour! We start in the town square, in front of the cathedral. First, we walk along Juárez Street, past the old market, until we get to the traffic lights. There, we turn right and go up a narrow street with colorful houses. At the top of the street, you'll see a small chapel on the corner. We go into the chapel for a few minutes; it's three hundred years old. Then we walk through a beautiful garden and down some stone stairs to the river. We cross the river over an old bridge, and on the other side there's a little café. You can't miss it: it has a big blue door. That's where we finish, with a hot chocolate!",
      "preguntas": [
        {
          "pregunta": "¿Dónde empieza el recorrido?",
          "opciones": [
            "En la plaza, frente a la catedral",
            "En el mercado",
            "En el río",
            "En el café"
          ]
        },
        {
          "pregunta": "¿Qué hay en la esquina de arriba?",
          "opciones": [
            "Una capillita",
            "Un mercado",
            "Un café",
            "Un puente"
          ]
        },
        {
          "pregunta": "¿Cómo cruzan el río?",
          "opciones": [
            "Por un puente viejo",
            "En lancha",
            "Caminando por el agua",
            "En camión"
          ]
        },
        {
          "pregunta": "¿Cómo es la puerta del café?",
          "opciones": [
            "Grande y azul",
            "Pequeña y roja",
            "De madera",
            "Verde"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con across, through o along.",
        "pregunta": "Walk ___ the park.",
        "respuestas": [
          "through"
        ]
      },
      {
        "instruccion": "Completa con across, through o along.",
        "pregunta": "The bank is ___ the street.",
        "respuestas": [
          "across"
        ]
      },
      {
        "instruccion": "Completa con across, through o along.",
        "pregunta": "We walked ___ the river.",
        "respuestas": [
          "along"
        ]
      },
      {
        "instruccion": "Completa con into u out of.",
        "pregunta": "He got ___ the taxi and paid.",
        "respuestas": [
          "out of"
        ]
      },
      {
        "instruccion": "Completa con on u off.",
        "pregunta": "Get ___ the bus at the next stop.",
        "respuestas": [
          "off"
        ]
      },
      {
        "instruccion": "Completa la dirección.",
        "pregunta": "Turn ___ at the traffic lights. (izquierda)",
        "respuestas": [
          "left"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Sigue derecho.",
        "respuestas": [
          "Go straight",
          "Go straight on",
          "Keep going straight"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Cómo llego a la estación?",
        "respuestas": [
          "How do I get to the station",
          "How can I get to the station"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Está en la esquina.",
        "respuestas": [
          "It's on the corner",
          "It is on the corner"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "She walked in the room. (movimiento hacia dentro)",
        "respuestas": [
          "She walked into the room"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "We drove ___ the bridge.",
        "opciones": [
          "over",
          "into",
          "out of",
          "at"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The train went ___ a long tunnel.",
        "opciones": [
          "through",
          "across",
          "on",
          "over"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Go ___ the bank and turn left.",
        "opciones": [
          "past",
          "into",
          "out",
          "up of"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The café is just ___ the corner.",
        "opciones": [
          "around",
          "through",
          "along",
          "into"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Get ___ the subway at Zócalo.",
        "opciones": [
          "off",
          "out",
          "down of",
          "out of"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Para preguntar con cortesía:",
        "opciones": [
          "Excuse me, how do I get to the museum?",
          "Where the museum?",
          "Museum, where?",
          "Tell me the museum."
        ]
      },
      {
        "tipo": "listening",
        "audio": "Walk along this street for three blocks. The pharmacy is on the right, next to a bakery.",
        "pregunta": "¿Junto a qué está la farmacia?",
        "opciones": [
          "Una panadería",
          "Un banco",
          "Una iglesia",
          "Un parque"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Sorry, I'm not from here. You can ask at the store on the corner.",
        "pregunta": "¿Dónde le dicen que pregunte?",
        "opciones": [
          "En la tienda de la esquina",
          "En la estación",
          "En la iglesia",
          "En el banco"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Da vuelta a la derecha.",
        "respuestas": [
          "Turn right"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: al otro lado de la calle",
        "respuestas": [
          "across the street",
          "on the other side of the street"
        ]
      }
    ]
  },
  {
    "id": "a2-23",
    "num": 23,
    "titulo": "Conectores so, because, then, after that",
    "contexto": "Escribir una historia corta",
    "explicacion": {
      "es": [
        "Los **conectores** unen ideas y hacen que una historia se entienda mejor. ***Because*** (porque) da la **razón**: *I stayed home **because** it was raining.* ***So*** (así que, por eso) da el **resultado**: *It was raining, **so** I stayed home.*",
        "Para el **orden** de los hechos: ***First*** (primero), ***Then*** (luego), ***After that*** (después de eso), ***Next*** (después), ***Finally*** / ***In the end*** (al final): ***First** we had breakfast. **Then** we went to the beach. **After that**, we ate fish. **Finally**, we went home.*",
        "***When*** (cuando), ***before*** (antes de) y ***after*** (después de) unen dos acciones: ***After** dinner, we watched a movie. **Before** I left, I closed the windows.* Con verbo: ***before leaving, after eating*** (con *-ing*).",
        "Para **sorpresas y contrastes**: ***but*** (pero), ***suddenly*** (de repente), ***luckily*** (por suerte), ***unfortunately*** (desafortunadamente)."
      ],
      "tabla": {
        "columnas": [
          "Para…",
          "Conector",
          "Ejemplo"
        ],
        "filas": [
          [
            "la razón",
            "because",
            "I was late because I missed the bus."
          ],
          [
            "el resultado",
            "so",
            "I missed the bus, so I was late."
          ],
          [
            "el orden",
            "first, then, after that, finally",
            "First I cooked, then I ate."
          ],
          [
            "el tiempo",
            "before / after / when",
            "After the movie, we had dinner."
          ],
          [
            "el contraste",
            "but",
            "It was cold, but we swam."
          ]
        ]
      },
      "ojo": [
        "No confundas: ***because*** + razón / ***so*** + resultado. *I was hungry, **so** I ate* ✅ (no *because I ate* ❌).",
        "***After that*** va al **principio** de la oración y con coma: ***After that**, we went home.* *After* solo necesita algo después: ***After lunch**, …*",
        "*Before **leaving*** / *after **eating*** ✅ (con *-ing*), no *before to leave* ❌.",
        "***Because of*** + sustantivo: *We stayed home **because of** the rain.* (por la lluvia)",
        "En una historia, usa el **pasado simple** para los hechos y el **pasado continuo** para el fondo: *It **was raining** when we **arrived**.*"
      ],
      "en": [
        "Because gives the reason: I stayed home because it was raining.",
        "So gives the result: It was raining, so I stayed home.",
        "Order: First, then, after that, finally.",
        "Time: After dinner, we watched a movie. Before I left, I closed the windows."
      ]
    },
    "vocabulario": [
      {
        "en": "first",
        "es": "primero",
        "imagen": "Persona tomando el primer café de la mañana",
        "ejemplo": [
          "First, I make coffee.",
          "Primero, hago café."
        ]
      },
      {
        "en": "then",
        "es": "luego",
        "imagen": "Persona saliendo de la regadera con una toalla",
        "ejemplo": [
          "Then I take a shower.",
          "Luego me baño."
        ]
      },
      {
        "en": "after that",
        "es": "después de eso",
        "imagen": "Persona caminando hacia el trabajo con su mochila",
        "ejemplo": [
          "After that, I walk to work.",
          "Después de eso, camino al trabajo."
        ]
      },
      {
        "en": "finally",
        "es": "por último / al final",
        "imagen": "Persona llegando a casa y dejando las llaves en la mesa",
        "ejemplo": [
          "Finally, I go home and relax.",
          "Por último, regreso a casa y descanso."
        ]
      },
      {
        "en": "because",
        "es": "porque",
        "imagen": "Persona con paraguas explicando algo bajo la lluvia",
        "ejemplo": [
          "I took a taxi because it was raining.",
          "Tomé un taxi porque estaba lloviendo."
        ]
      },
      {
        "en": "so",
        "es": "así que / por eso",
        "imagen": "Persona con hambre abriendo el refrigerador",
        "ejemplo": [
          "I was hungry, so I made a sandwich.",
          "Tenía hambre, así que me hice un sándwich."
        ]
      },
      {
        "en": "before",
        "es": "antes",
        "imagen": "Persona cerrando las ventanas antes de salir",
        "ejemplo": [
          "Before I leave, I close the windows.",
          "Antes de salir, cierro las ventanas."
        ]
      },
      {
        "en": "after",
        "es": "después de",
        "imagen": "Familia viendo una película después de cenar",
        "ejemplo": [
          "After dinner, we watch a movie.",
          "Después de cenar, vemos una película."
        ]
      },
      {
        "en": "when",
        "es": "cuando",
        "imagen": "Persona sorprendida al abrir la puerta",
        "ejemplo": [
          "When I opened the door, everybody shouted Surprise!",
          "Cuando abrí la puerta, todos gritaron ¡Sorpresa!"
        ]
      },
      {
        "en": "suddenly",
        "es": "de repente",
        "imagen": "Persona asustada en la oscuridad cuando se va la luz",
        "ejemplo": [
          "Suddenly, the lights went out.",
          "De repente, se fue la luz."
        ]
      },
      {
        "en": "luckily",
        "es": "por suerte",
        "imagen": "Persona aliviada encontrando su pasaporte en la maleta",
        "ejemplo": [
          "Luckily, I found my passport.",
          "Por suerte, encontré mi pasaporte."
        ]
      },
      {
        "en": "unfortunately",
        "es": "desafortunadamente",
        "imagen": "Persona mirando un letrero de vuelo cancelado en el aeropuerto",
        "ejemplo": [
          "Unfortunately, the flight was canceled.",
          "Desafortunadamente, el vuelo se canceló."
        ]
      },
      {
        "en": "in the end",
        "es": "al final",
        "imagen": "Equipo celebrando con un trofeo",
        "ejemplo": [
          "In the end, we won the game.",
          "Al final, ganamos el partido."
        ]
      },
      {
        "en": "because of the rain",
        "es": "por la lluvia",
        "imagen": "Partido de fútbol suspendido bajo la lluvia",
        "ejemplo": [
          "The game was canceled because of the rain.",
          "El partido se canceló por la lluvia."
        ]
      },
      {
        "en": "one day",
        "es": "un día",
        "imagen": "Libro de cuentos abierto sobre una mesa",
        "ejemplo": [
          "One day, a strange man arrived in the town.",
          "Un día, llegó un hombre extraño al pueblo."
        ]
      },
      {
        "en": "the next morning",
        "es": "a la mañana siguiente",
        "imagen": "Amanecer entrando por la ventana de una recámara",
        "ejemplo": [
          "The next morning, everything was different.",
          "A la mañana siguiente, todo era diferente."
        ]
      }
    ],
    "grupos": [
      {
        "id": "historia",
        "titulo": "Para empezar y terminar",
        "icono": "📖",
        "patron": [
          "Once upon a time…",
          "Last summer…",
          "In the end…"
        ],
        "palabras": [
          {
            "en": "Once upon a time",
            "es": "había una vez",
            "imagen": "Libro de cuentos con un castillo ilustrado, sin texto",
            "ejemplo": [
              "Once upon a time, there was a little girl.",
              "Había una vez una niña."
            ]
          },
          {
            "en": "Last summer",
            "es": "el verano pasado",
            "imagen": "Familia en la playa con sombrillas de colores",
            "ejemplo": [
              "Last summer, something funny happened.",
              "El verano pasado pasó algo chistoso."
            ]
          },
          {
            "en": "A few years ago",
            "es": "hace unos años",
            "imagen": "Fotografía antigua sobre un escritorio",
            "ejemplo": [
              "A few years ago, I lived in Tijuana.",
              "Hace unos años, vivía en Tijuana."
            ]
          },
          {
            "en": "At first",
            "es": "al principio",
            "imagen": "Niño nervioso en su primer día en una escuela nueva",
            "ejemplo": [
              "At first, I didn't like my new school.",
              "Al principio, no me gustaba mi escuela nueva."
            ]
          },
          {
            "en": "A few minutes later",
            "es": "unos minutos después",
            "imagen": "Reloj de pared marcando la hora en una sala de espera",
            "ejemplo": [
              "A few minutes later, the doctor came in.",
              "Unos minutos después, entró el doctor."
            ]
          },
          {
            "en": "That was the best day ever.",
            "es": "fue el mejor día de todos",
            "imagen": "Amigos riendo juntos al atardecer",
            "ejemplo": [
              "We laughed all night. That was the best day ever.",
              "Nos reímos toda la noche. Fue el mejor día de todos."
            ]
          }
        ]
      },
      {
        "id": "razon",
        "titulo": "Razón y resultado",
        "icono": "🔗",
        "patron": [
          "…because…",
          "…so…",
          "That's why…"
        ],
        "palabras": [
          {
            "en": "I missed the bus, so I was late.",
            "es": "perdí el camión, así que llegué tarde",
            "imagen": "Persona corriendo detrás de un autobús que se va",
            "ejemplo": [
              "I missed the bus, so I was late for work.",
              "Perdí el camión, así que llegué tarde al trabajo."
            ]
          },
          {
            "en": "I was late because I missed the bus.",
            "es": "llegué tarde porque perdí el camión",
            "imagen": "Persona disculpándose con su jefe en la oficina",
            "ejemplo": [
              "I was late because I missed the bus.",
              "Llegué tarde porque perdí el camión."
            ]
          },
          {
            "en": "It was cold, so we made a fire.",
            "es": "hacía frío, así que hicimos una fogata",
            "imagen": "Amigos alrededor de una fogata en la noche",
            "ejemplo": [
              "It was cold, so we made a fire.",
              "Hacía frío, así que hicimos una fogata."
            ]
          },
          {
            "en": "She was sad because her dog was sick.",
            "es": "estaba triste porque su perro estaba enfermo",
            "imagen": "Niña abrazando a su perro en el veterinario",
            "ejemplo": [
              "She was sad because her dog was sick.",
              "Estaba triste porque su perro estaba enfermo."
            ]
          },
          {
            "en": "That's why",
            "es": "por eso",
            "imagen": "Persona señalando un letrero de carretera cerrada",
            "ejemplo": [
              "The road was closed. That's why we were late.",
              "La carretera estaba cerrada. Por eso llegamos tarde."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "First, I make coffee.",
        "es": "Primero, hago café."
      },
      {
        "en": "I took a taxi because it was raining.",
        "es": "Tomé un taxi porque estaba lloviendo."
      },
      {
        "en": "I was hungry, so I made a sandwich.",
        "es": "Tenía hambre, así que me hice un sándwich."
      },
      {
        "en": "After dinner, we watch a movie.",
        "es": "Después de cenar, vemos una película."
      },
      {
        "en": "Suddenly, the lights went out.",
        "es": "De repente, se fue la luz."
      },
      {
        "en": "Unfortunately, the flight was canceled.",
        "es": "Desafortunadamente, el vuelo se canceló."
      },
      {
        "en": "The game was canceled because of the rain.",
        "es": "El partido se canceló por la lluvia."
      },
      {
        "en": "I missed the bus, so I was late for work.",
        "es": "Perdí el camión, así que llegué tarde al trabajo."
      },
      {
        "en": "Once upon a time, there was a little girl.",
        "es": "Había una vez una niña."
      },
      {
        "en": "In the end, we won the game.",
        "es": "Al final, ganamos el partido."
      }
    ],
    "frases": [
      {
        "en": "First, we went to the market. Then we cooked lunch, and after that we went to the river.",
        "es": "Primero fuimos al mercado. Luego cocinamos y después de eso fuimos al río.",
        "imagen": "Familia caminando hacia un río con una canasta de comida"
      },
      {
        "en": "I didn't have breakfast, so I was very hungry before lunch.",
        "es": "No desayuné, así que tenía mucha hambre antes de la comida.",
        "imagen": "Persona mirando el reloj de la oficina con hambre"
      },
      {
        "en": "We stayed at home on Saturday because my son was sick.",
        "es": "El sábado nos quedamos en casa porque mi hijo estaba enfermo.",
        "imagen": "Papá cuidando a su hijo enfermo en el sofá con una cobija"
      },
      {
        "en": "Before leaving the house, always check that the stove is off.",
        "es": "Antes de salir de casa, revisa siempre que la estufa esté apagada.",
        "imagen": "Mano apagando la perilla de una estufa"
      },
      {
        "en": "One day, a little dog appeared at our door. At first, we didn't want him, but in the end he became part of the family.",
        "es": "Un día apareció un perrito en nuestra puerta. Al principio no lo queríamos, pero al final se volvió parte de la familia.",
        "imagen": "Perrito callejero sentado en la puerta de una casa con la familia mirándolo"
      },
      {
        "en": "It was very late, and suddenly we heard a strange noise in the kitchen.",
        "es": "Era muy tarde y de repente oímos un ruido extraño en la cocina.",
        "imagen": "Pareja asustada en la cama mirando hacia la puerta en la oscuridad"
      },
      {
        "en": "Luckily, it was only the cat. That's why we always close the window now.",
        "es": "Por suerte, solo era el gato. Por eso ahora siempre cerramos la ventana.",
        "imagen": "Gato en la barra de la cocina junto a una ventana abierta"
      },
      {
        "en": "After finishing university, she traveled around South America for a year.",
        "es": "Después de terminar la universidad, viajó por Sudamérica un año.",
        "imagen": "Mochilera en las montañas de Perú con llamas"
      },
      {
        "en": "The road was closed because of an accident, so we took another way.",
        "es": "La carretera estaba cerrada por un accidente, así que tomamos otro camino.",
        "imagen": "Carros desviándose en una carretera con conos naranjas"
      },
      {
        "en": "When we arrived at the beach, it started to rain, but we swam anyway!",
        "es": "Cuando llegamos a la playa empezó a llover, ¡pero nadamos de todas formas!",
        "imagen": "Amigos nadando en el mar bajo la lluvia, riéndose"
      }
    ],
    "listening": [
      {
        "audio": "I forgot my umbrella, so I got wet.",
        "pregunta": "¿Por qué se mojó?",
        "opciones": [
          "Olvidó su paraguas",
          "Se cayó al agua",
          "Fue a nadar",
          "Se le rompió el paraguas"
        ]
      },
      {
        "audio": "First, I took the subway. Then I walked for ten minutes. After that, I took a taxi.",
        "pregunta": "¿Qué hizo al final?",
        "opciones": [
          "Tomó un taxi",
          "Tomó el metro",
          "Caminó",
          "Tomó un camión"
        ]
      },
      {
        "audio": "We didn't go to the concert because the tickets were too expensive.",
        "pregunta": "¿Por qué no fueron al concierto?",
        "opciones": [
          "Los boletos eran muy caros",
          "Llovía",
          "Estaban enfermos",
          "Se canceló"
        ]
      },
      {
        "audio": "After lunch, my grandfather always takes a nap.",
        "pregunta": "¿Qué hace el abuelo después de comer?",
        "opciones": [
          "Toma una siesta",
          "Sale a caminar",
          "Lee el periódico",
          "Ve la tele"
        ]
      },
      {
        "audio": "Unfortunately, the museum was closed, so we went to the park.",
        "pregunta": "¿A dónde fueron?",
        "opciones": [
          "Al parque",
          "Al museo",
          "A casa",
          "A un restaurante"
        ]
      }
    ],
    "lectura": {
      "titulo": "The day everything went wrong",
      "texto": "Last Monday was a terrible day for Luis. First, his alarm didn't ring, so he woke up very late. He ran out of the house without breakfast, and then he missed the bus. He decided to take a taxi, but there was a lot of traffic because of an accident. When he finally arrived at the office, his boss was waiting for him. Unfortunately, Luis had an important presentation at nine, and it was nine thirty! He was very nervous, but luckily his coworker Marta helped him. In the end, the presentation was a success. After work, Luis went home, ate a big dinner, and went to bed early. Before sleeping, he checked his alarm three times!",
      "preguntas": [
        {
          "pregunta": "¿Por qué despertó tarde Luis?",
          "opciones": [
            "No sonó su alarma",
            "Se durmió tarde",
            "Estaba enfermo",
            "Era día festivo"
          ]
        },
        {
          "pregunta": "¿Por qué había mucho tráfico?",
          "opciones": [
            "Por un accidente",
            "Por la lluvia",
            "Por una marcha",
            "Era hora pico"
          ]
        },
        {
          "pregunta": "¿Quién le ayudó?",
          "opciones": [
            "Su compañera Marta",
            "Su jefe",
            "El taxista",
            "Su esposa"
          ]
        },
        {
          "pregunta": "¿Qué hizo antes de dormir?",
          "opciones": [
            "Revisó su alarma tres veces",
            "Cenó",
            "Llamó a Marta",
            "Preparó otra presentación"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con because o so.",
        "pregunta": "I was tired, ___ I went to bed early.",
        "respuestas": [
          "so"
        ]
      },
      {
        "instruccion": "Completa con because o so.",
        "pregunta": "I went to bed early ___ I was tired.",
        "respuestas": [
          "because"
        ]
      },
      {
        "instruccion": "Completa con before o after.",
        "pregunta": "Wash your hands ___ eating.",
        "respuestas": [
          "before"
        ]
      },
      {
        "instruccion": "Completa con then o after that.",
        "pregunta": "First I cooked. ___ I ate.",
        "respuestas": [
          "Then",
          "After that"
        ]
      },
      {
        "instruccion": "Completa con because o because of.",
        "pregunta": "We stayed home ___ the rain.",
        "respuestas": [
          "because of"
        ]
      },
      {
        "instruccion": "Completa con -ing.",
        "pregunta": "After ___ (finish) work, I go to the gym.",
        "respuestas": [
          "finishing"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "De repente, se fue la luz.",
        "respuestas": [
          "Suddenly, the lights went out",
          "Suddenly the lights went out",
          "Suddenly, the power went out",
          "Suddenly the power went out"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Por suerte, encontré mis llaves.",
        "respuestas": [
          "Luckily, I found my keys",
          "Luckily I found my keys"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "al final",
        "respuestas": [
          "in the end",
          "finally",
          "at the end"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I was hungry, because I ate a sandwich.",
        "respuestas": [
          "I was hungry, so I ate a sandwich",
          "I was hungry so I ate a sandwich"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "It was raining, ___ we took a taxi.",
        "opciones": [
          "so",
          "because",
          "but then",
          "after"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I didn't go to school ___ I was sick.",
        "opciones": [
          "because",
          "so",
          "then",
          "after that"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ dinner, we played cards.",
        "opciones": [
          "After",
          "After that",
          "Then",
          "So"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Brush your teeth before ___ to bed.",
        "opciones": [
          "going",
          "go",
          "to go",
          "went"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The flight was late ___ the snow.",
        "opciones": [
          "because of",
          "because",
          "so",
          "then"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es el orden correcto?",
        "opciones": [
          "First – Then – After that – Finally",
          "Finally – First – Then – After that",
          "Then – First – Finally – After that",
          "After that – Finally – First – Then"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The restaurant was full, so we ordered pizza and ate at home.",
        "pregunta": "¿Dónde comieron?",
        "opciones": [
          "En casa",
          "En el restaurante",
          "En un parque",
          "En otro restaurante"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Before the trip, we checked the car. It was a good idea, because the tires were very old.",
        "pregunta": "¿Qué problema tenía el carro?",
        "opciones": [
          "Las llantas estaban muy viejas",
          "No tenía gasolina",
          "El motor fallaba",
          "Las luces no servían"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: así que",
        "respuestas": [
          "so"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Después de eso, fuimos a casa.",
        "respuestas": [
          "After that, we went home",
          "After that we went home"
        ]
      }
    ]
  },
  {
    "id": "a2-24",
    "num": 24,
    "titulo": "Might / may (posibilidad)",
    "contexto": "El clima y los planes inciertos",
    "explicacion": {
      "es": [
        "***Might*** y ***may*** + verbo base expresan **posibilidad**: algo **puede** pasar, pero no es seguro: *It **might** rain tomorrow.* (Puede que llueva mañana.) *I **may** be late.* (Tal vez llegue tarde.)",
        "Son iguales para todas las personas (sin *-s*) y casi significan lo mismo. ***May*** suena un poco más formal o más probable; ***might*** es muy común al hablar.",
        "**Negativo:** ***might not*** / ***may not***: *She **might not** come.* (Puede que no venga.) *We **may not** have time.*",
        "Para comparar el grado de seguridad: ***will*** (seguro), ***will probably*** (muy probable), ***may / might*** (posible), ***probably won't*** (poco probable), ***won't*** (seguro que no). También ***maybe*** (tal vez) al principio: ***Maybe** I'll go.*"
      ],
      "tabla": {
        "columnas": [
          "Seguridad",
          "Ejemplo"
        ],
        "filas": [
          [
            "100% sí",
            "It will rain."
          ],
          [
            "Muy probable",
            "It will probably rain."
          ],
          [
            "Posible",
            "It might rain. / It may rain."
          ],
          [
            "Posible que no",
            "It might not rain."
          ],
          [
            "100% no",
            "It won't rain."
          ]
        ]
      },
      "ojo": [
        "Después de *might / may* va el verbo **base**, sin *to*: *I might **go*** ✅, no *I might to go* ❌ ni *I might going* ❌.",
        "*Might* no lleva *-s*: *She might **come*** ✅, no *She mights come* ❌.",
        "***Maybe*** (una palabra) = tal vez, va al principio. ***May be*** (dos palabras) = *puede ser*: *He **may be** tired.*",
        "Para preguntar se usa más ***Do you think…?*** o ***Are you going to…?*** que *Might you…?*: ***Do you think** it will rain?*",
        "***May I…?*** también sirve para **pedir permiso** (tema 16): *May I come in?* El contexto dice cuál es."
      ],
      "en": [
        "Might and may express possibility: It might rain tomorrow. I may be late.",
        "They are the same for everyone: she might, they might.",
        "Negative: She might not come. We may not have time.",
        "Will is certain, might is possible, won't is certainly not."
      ]
    },
    "vocabulario": [
      {
        "en": "It might rain.",
        "es": "puede que llueva",
        "imagen": "Cielo nublado gris sobre la ciudad",
        "ejemplo": [
          "Take an umbrella. It might rain.",
          "Lleva paraguas. Puede que llueva."
        ]
      },
      {
        "en": "It may snow.",
        "es": "puede que nieve",
        "imagen": "Montañas con nubes cargadas de nieve",
        "ejemplo": [
          "It may snow in the mountains tonight.",
          "Puede que nieve en las montañas esta noche."
        ]
      },
      {
        "en": "I might be late.",
        "es": "tal vez llegue tarde",
        "imagen": "Persona atrapada en el tráfico mirando el reloj",
        "ejemplo": [
          "There's a lot of traffic. I might be late.",
          "Hay mucho tráfico. Tal vez llegue tarde."
        ]
      },
      {
        "en": "She might not come.",
        "es": "puede que ella no venga",
        "imagen": "Silla vacía con un plato servido en una mesa",
        "ejemplo": [
          "She's sick. She might not come.",
          "Está enferma. Puede que no venga."
        ]
      },
      {
        "en": "We might go to the beach.",
        "es": "puede que vayamos a la playa",
        "imagen": "Familia preparando una hielera y toallas",
        "ejemplo": [
          "If it's sunny, we might go to the beach.",
          "Si hace sol, puede que vayamos a la playa."
        ]
      },
      {
        "en": "He may be at home.",
        "es": "puede que esté en casa",
        "imagen": "Casa con una luz encendida en la ventana",
        "ejemplo": [
          "Call him. He may be at home.",
          "Llámale. Puede que esté en casa."
        ]
      },
      {
        "en": "It might be windy.",
        "es": "puede que haga viento",
        "imagen": "Banderas moviéndose con fuerza en la playa",
        "ejemplo": [
          "It might be windy on the boat.",
          "Puede que haga viento en la lancha."
        ]
      },
      {
        "en": "There might be a storm.",
        "es": "puede que haya tormenta",
        "imagen": "Rayos en el cielo oscuro sobre el mar",
        "ejemplo": [
          "There might be a storm this afternoon.",
          "Puede que haya tormenta esta tarde."
        ]
      },
      {
        "en": "I may change jobs.",
        "es": "tal vez cambie de trabajo",
        "imagen": "Persona pensativa frente a su computadora en la oficina",
        "ejemplo": [
          "I may change jobs next year.",
          "Tal vez cambie de trabajo el próximo año."
        ]
      },
      {
        "en": "They might move.",
        "es": "puede que se muden",
        "imagen": "Pareja mirando departamentos en una app",
        "ejemplo": [
          "They might move to Querétaro.",
          "Puede que se muden a Querétaro."
        ]
      },
      {
        "en": "maybe",
        "es": "tal vez",
        "imagen": "Persona encogiéndose de hombros con una sonrisa",
        "ejemplo": [
          "Maybe I'll call you later.",
          "Tal vez te llame al rato."
        ]
      },
      {
        "en": "probably",
        "es": "probablemente",
        "imagen": "Persona revisando el pronóstico del clima en su celular",
        "ejemplo": [
          "It will probably be hot tomorrow.",
          "Probablemente hará calor mañana."
        ]
      },
      {
        "en": "I'm not sure.",
        "es": "no estoy seguro",
        "imagen": "Persona rascándose la cabeza indecisa",
        "ejemplo": [
          "I'm not sure. I might stay home.",
          "No estoy seguro. Tal vez me quede en casa."
        ]
      },
      {
        "en": "It depends on the weather.",
        "es": "depende del clima",
        "imagen": "Persona mirando por la ventana con la mochila lista",
        "ejemplo": [
          "Are you going hiking? It depends on the weather.",
          "¿Vas a ir de excursión? Depende del clima."
        ]
      },
      {
        "en": "The flight might be delayed.",
        "es": "puede que el vuelo se retrase",
        "imagen": "Pasajeros esperando en una sala de aeropuerto con nubes afuera",
        "ejemplo": [
          "Because of the fog, the flight might be delayed.",
          "Por la neblina, puede que el vuelo se retrase."
        ]
      },
      {
        "en": "We may not have time.",
        "es": "tal vez no tengamos tiempo",
        "imagen": "Persona con la agenda llena y cara de estrés",
        "ejemplo": [
          "We may not have time to visit the museum.",
          "Tal vez no tengamos tiempo de visitar el museo."
        ]
      }
    ],
    "grupos": [
      {
        "id": "clima",
        "titulo": "El clima",
        "icono": "⛅",
        "patron": [
          "cloudy",
          "foggy",
          "a storm"
        ],
        "palabras": [
          {
            "en": "cloudy",
            "es": "nublado",
            "imagen": "Cielo cubierto de nubes grises",
            "ejemplo": [
              "It's cloudy today. It might rain.",
              "Hoy está nublado. Puede que llueva."
            ]
          },
          {
            "en": "foggy",
            "es": "con neblina",
            "imagen": "Carretera con neblina espesa en la mañana",
            "ejemplo": [
              "Drive slowly. It's very foggy.",
              "Maneja despacio. Hay mucha neblina."
            ]
          },
          {
            "en": "a storm",
            "es": "una tormenta",
            "imagen": "Tormenta con rayos sobre una ciudad",
            "ejemplo": [
              "There was a big storm last night.",
              "Anoche hubo una tormenta fuerte."
            ]
          },
          {
            "en": "humid",
            "es": "húmedo",
            "imagen": "Persona sudando en una ciudad tropical",
            "ejemplo": [
              "It's very hot and humid in Veracruz.",
              "En Veracruz hace mucho calor y está húmedo."
            ]
          },
          {
            "en": "freezing",
            "es": "helando",
            "imagen": "Persona temblando con gorro y bufanda en la nieve",
            "ejemplo": [
              "It's freezing outside!",
              "¡Afuera está helando!"
            ]
          },
          {
            "en": "a heat wave",
            "es": "una ola de calor",
            "imagen": "Termómetro de la calle marcando una temperatura muy alta",
            "ejemplo": [
              "There might be a heat wave next week.",
              "Puede que haya una ola de calor la próxima semana."
            ]
          },
          {
            "en": "the weather forecast",
            "es": "el pronóstico del clima",
            "imagen": "Persona viendo el pronóstico en la tele con mapas",
            "ejemplo": [
              "The weather forecast says it might snow.",
              "El pronóstico dice que puede nevar."
            ]
          },
          {
            "en": "a rainbow",
            "es": "un arcoíris",
            "imagen": "Arcoíris sobre un campo verde después de la lluvia",
            "ejemplo": [
              "Look! There's a rainbow.",
              "¡Mira! Hay un arcoíris."
            ]
          }
        ]
      },
      {
        "id": "planes",
        "titulo": "Planes inciertos",
        "icono": "🤷",
        "patron": [
          "I might…",
          "It depends on…",
          "If…, we might…"
        ],
        "palabras": [
          {
            "en": "I might go out.",
            "es": "tal vez salga",
            "imagen": "Persona arreglándose frente al espejo indecisa",
            "ejemplo": [
              "I'm tired, but I might go out later.",
              "Estoy cansado, pero tal vez salga al rato."
            ]
          },
          {
            "en": "We might cancel the trip.",
            "es": "tal vez cancelemos el viaje",
            "imagen": "Pareja mirando un mapa con cara de duda",
            "ejemplo": [
              "If it rains, we might cancel the trip.",
              "Si llueve, tal vez cancelemos el viaje."
            ]
          },
          {
            "en": "I may stay longer.",
            "es": "tal vez me quede más tiempo",
            "imagen": "Viajera feliz en una terraza con vista al mar",
            "ejemplo": [
              "I love this place. I may stay longer.",
              "Me encanta este lugar. Tal vez me quede más tiempo."
            ]
          },
          {
            "en": "It depends on my boss.",
            "es": "depende de mi jefe",
            "imagen": "Empleado esperando la respuesta de su jefa",
            "ejemplo": [
              "Can you come on Friday? It depends on my boss.",
              "¿Puedes venir el viernes? Depende de mi jefe."
            ]
          },
          {
            "en": "Let's wait and see.",
            "es": "esperemos a ver",
            "imagen": "Amigos mirando el cielo nublado antes de salir",
            "ejemplo": [
              "Let's wait and see what the weather is like.",
              "Esperemos a ver cómo está el clima."
            ]
          },
          {
            "en": "just in case",
            "es": "por si acaso",
            "imagen": "Persona metiendo un impermeable en la mochila",
            "ejemplo": [
              "Take a jacket, just in case.",
              "Llévate una chamarra, por si acaso."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Take an umbrella. It might rain.",
        "es": "Lleva paraguas. Puede que llueva."
      },
      {
        "en": "There's a lot of traffic. I might be late.",
        "es": "Hay mucho tráfico. Tal vez llegue tarde."
      },
      {
        "en": "She's sick. She might not come.",
        "es": "Está enferma. Puede que no venga."
      },
      {
        "en": "If it's sunny, we might go to the beach.",
        "es": "Si hace sol, puede que vayamos a la playa."
      },
      {
        "en": "Call him. He may be at home.",
        "es": "Llámale. Puede que esté en casa."
      },
      {
        "en": "Maybe I'll call you later.",
        "es": "Tal vez te llame al rato."
      },
      {
        "en": "It's cloudy today. It might rain.",
        "es": "Hoy está nublado. Puede que llueva."
      },
      {
        "en": "Are you going hiking? It depends on the weather.",
        "es": "¿Vas a ir de excursión? Depende del clima."
      },
      {
        "en": "Take a jacket, just in case.",
        "es": "Llévate una chamarra, por si acaso."
      },
      {
        "en": "The weather forecast says it might snow.",
        "es": "El pronóstico dice que puede nevar."
      }
    ],
    "frases": [
      {
        "en": "The weather forecast says it might rain this afternoon, so let's have the party inside.",
        "es": "El pronóstico dice que puede llover esta tarde, así que hagamos la fiesta adentro.",
        "imagen": "Familia decorando la sala para una fiesta mientras llueve afuera"
      },
      {
        "en": "I'm not sure what to do this weekend. I might visit my parents or I might stay home.",
        "es": "No sé qué hacer este fin de semana. Tal vez visite a mis papás o tal vez me quede en casa.",
        "imagen": "Persona indecisa con el celular en la mano en su sala"
      },
      {
        "en": "Drive carefully. The roads may be dangerous because of the ice.",
        "es": "Maneja con cuidado. Puede que los caminos estén peligrosos por el hielo.",
        "imagen": "Carretera con hielo y un carro manejando despacio"
      },
      {
        "en": "My sister might get a job in Canada, so she may move next year.",
        "es": "Puede que mi hermana consiga trabajo en Canadá, así que tal vez se mude el próximo año.",
        "imagen": "Joven con maletas mirando una foto de Canadá en su celular"
      },
      {
        "en": "Bring a sweater, just in case. It might be cold in the mountains at night.",
        "es": "Trae un suéter, por si acaso. Puede que haga frío en las montañas en la noche.",
        "imagen": "Amigos con suéteres alrededor de una fogata en el bosque"
      },
      {
        "en": "The flight might be delayed because there's a storm in Monterrey.",
        "es": "Puede que el vuelo se retrase porque hay una tormenta en Monterrey.",
        "imagen": "Pantalla de salidas en un aeropuerto con pasajeros esperando"
      },
      {
        "en": "I might not finish the report today. Can I send it tomorrow?",
        "es": "Puede que no termine el reporte hoy. ¿Lo puedo mandar mañana?",
        "imagen": "Empleado con muchos papeles hablando con su jefa"
      },
      {
        "en": "We may go to Oaxaca in December, but it depends on the money.",
        "es": "Tal vez vayamos a Oaxaca en diciembre, pero depende del dinero.",
        "imagen": "Pareja contando sus ahorros junto a un folleto de viaje"
      },
      {
        "en": "It's very hot and humid today. There might be a storm tonight.",
        "es": "Hoy hace mucho calor y está muy húmedo. Puede que haya tormenta en la noche.",
        "imagen": "Ciudad con calor y nubes oscuras acercándose al atardecer"
      },
      {
        "en": "Don't wait for me. I might be at the office until ten.",
        "es": "No me esperes. Tal vez me quede en la oficina hasta las diez.",
        "imagen": "Persona trabajando tarde en la oficina con la ciudad iluminada"
      }
    ],
    "listening": [
      {
        "audio": "It might snow tomorrow, so the school may be closed.",
        "pregunta": "¿Qué puede pasar con la escuela?",
        "opciones": [
          "Puede que esté cerrada",
          "Va a abrir temprano",
          "Seguro estará cerrada",
          "Van a cambiar el horario"
        ]
      },
      {
        "audio": "I'm not sure about Saturday. I might work, or I might go to the lake.",
        "pregunta": "¿Qué piensa hacer el sábado?",
        "opciones": [
          "No está seguro: trabajar o ir al lago",
          "Trabajar seguro",
          "Ir al lago seguro",
          "Quedarse en casa"
        ]
      },
      {
        "audio": "Take a jacket. It might be cold on the boat.",
        "pregunta": "¿Por qué debe llevar chamarra?",
        "opciones": [
          "Puede hacer frío en la lancha",
          "Va a llover",
          "Está nevando",
          "Es de noche"
        ]
      },
      {
        "audio": "My brother might not come to dinner. He has a lot of work.",
        "pregunta": "¿Por qué tal vez no venga el hermano?",
        "opciones": [
          "Tiene mucho trabajo",
          "Está enfermo",
          "Está de viaje",
          "No le gusta la cena"
        ]
      },
      {
        "audio": "The weather forecast says it will be sunny in the morning, but there might be a storm in the evening.",
        "pregunta": "¿Qué puede pasar en la noche?",
        "opciones": [
          "Puede haber tormenta",
          "Va a estar soleado",
          "Va a nevar",
          "Va a hacer mucho calor"
        ]
      }
    ],
    "lectura": {
      "titulo": "A camping trip?",
      "texto": "Andrés and his friends are planning a camping trip to the mountains this weekend, but nothing is certain. The weather forecast says it will be sunny on Saturday, but there might be a storm on Sunday. Andrés's car is at the mechanic, so they might have to take the bus. Sofía may not come, because her grandmother is in the hospital. Rubén is excited, but he says: I might be a little late on Saturday morning, because I have a soccer game. They decide to take extra jackets and a big plastic sheet, just in case. Andrés says: If it rains on Sunday, we might come back early. But maybe it won't rain. Let's wait and see!",
      "preguntas": [
        {
          "pregunta": "¿Qué dice el pronóstico para el domingo?",
          "opciones": [
            "Puede haber tormenta",
            "Va a estar soleado",
            "Va a nevar",
            "Hará mucho calor"
          ]
        },
        {
          "pregunta": "¿Por qué tal vez tomen el camión?",
          "opciones": [
            "El carro de Andrés está en el mecánico",
            "Es más barato",
            "No saben manejar",
            "No hay gasolina"
          ]
        },
        {
          "pregunta": "¿Por qué tal vez no vaya Sofía?",
          "opciones": [
            "Su abuela está en el hospital",
            "Tiene un partido",
            "Está enferma",
            "Tiene que trabajar"
          ]
        },
        {
          "pregunta": "¿Qué llevan por si acaso?",
          "opciones": [
            "Chamarras extra y un plástico grande",
            "Más comida",
            "Un paraguas",
            "Una tienda nueva"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con might o might not.",
        "pregunta": "Take an umbrella. It ___ rain.",
        "respuestas": [
          "might",
          "may"
        ]
      },
      {
        "instruccion": "Completa con might o might not.",
        "pregunta": "She's very busy. She ___ come.",
        "respuestas": [
          "might not",
          "may not"
        ]
      },
      {
        "instruccion": "Completa con el verbo.",
        "pregunta": "I might ___ (go) to the party.",
        "respuestas": [
          "go"
        ]
      },
      {
        "instruccion": "Completa con maybe o may be.",
        "pregunta": "___ I'll call you tonight.",
        "respuestas": [
          "Maybe"
        ]
      },
      {
        "instruccion": "Completa con maybe o may be.",
        "pregunta": "He ___ tired after the trip.",
        "respuestas": [
          "may be"
        ]
      },
      {
        "instruccion": "Completa con la palabra del clima.",
        "pregunta": "I can't see the road. It's very ___. (neblina)",
        "respuestas": [
          "foggy"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Puede que llueva.",
        "respuestas": [
          "It might rain",
          "It may rain"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Tal vez llegue tarde.",
        "respuestas": [
          "I might be late",
          "I may be late",
          "Maybe I'll be late",
          "Maybe I will be late"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "por si acaso",
        "respuestas": [
          "just in case",
          "in case"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "She mights to come tomorrow.",
        "respuestas": [
          "She might come tomorrow",
          "She may come tomorrow"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "It's cloudy. It ___ rain.",
        "opciones": [
          "might",
          "might to",
          "mights",
          "is might"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I'm not sure. I ___ go to the party.",
        "opciones": [
          "may",
          "will",
          "must",
          "have to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "He's sick, so he ___ come to work.",
        "opciones": [
          "might not",
          "might not to",
          "doesn't might",
          "mightn't to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál expresa más seguridad?",
        "opciones": [
          "It will rain.",
          "It might rain.",
          "It may rain.",
          "Maybe it will rain."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ we'll go to the movies tonight.",
        "opciones": [
          "Maybe",
          "May be",
          "Might",
          "May"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Take a jacket, just in case» significa:",
        "opciones": [
          "Llévate una chamarra, por si acaso",
          "Llévate la chamarra en la maleta",
          "Solo lleva una chamarra",
          "No lleves chamarra"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Because of the fog, the airport may close in the morning.",
        "pregunta": "¿Por qué puede cerrar el aeropuerto?",
        "opciones": [
          "Por la neblina",
          "Por la nieve",
          "Por una tormenta",
          "Por el viento"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Are you coming to the barbecue? I might, but it depends on my wife.",
        "pregunta": "¿De qué depende que vaya?",
        "opciones": [
          "De su esposa",
          "Del clima",
          "De su jefe",
          "Del dinero"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Puede que no venga.",
        "respuestas": [
          "She might not come",
          "He might not come",
          "She may not come",
          "He may not come"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Depende del clima.",
        "respuestas": [
          "It depends on the weather"
        ]
      }
    ]
  },
  {
    "id": "a2-25",
    "num": 25,
    "titulo": "Verbos frasales de todos los días (find out, give up, look after…)",
    "contexto": "Viajes, compras y vida diaria",
    "explicacion": {
      "es": [
        "En A2 aprendes verbos frasales que se oyen **en cualquier conversación**: en viajes, en tiendas, con amigos. Recuerda: verbo + partícula = **significado nuevo**. *Give* = dar, pero ***give up*** = rendirse o dejar un hábito.",
        "Algunos tienen **tres palabras**: ***look forward to*** (tener ganas de), ***run out of*** (quedarse sin), ***get along with*** (llevarse bien con). Después de *look forward to* va un sustantivo o **-ing**: *I'm looking forward **to seeing** you.*",
        "Muchos verbos frasales **se pueden separar** con un objeto: *Try **on** the shoes* = *Try the shoes **on***. Con pronombre, **siempre** en medio: *Try **them** on* ✅ (no *Try on them* ❌).",
        "Otros **no se separan nunca**: ***look after*** *the baby*, ***get along with*** *my sister*. Un buen truco: apréndelos siempre con su ejemplo completo."
      ],
      "tabla": {
        "columnas": [
          "Verbo frasal",
          "Significado",
          "Ejemplo"
        ],
        "filas": [
          [
            "find out",
            "averiguar, enterarse",
            "I found out the truth."
          ],
          [
            "give up",
            "rendirse, dejar",
            "He gave up smoking."
          ],
          [
            "look after",
            "cuidar",
            "She looks after her grandma."
          ],
          [
            "run out of",
            "quedarse sin",
            "We ran out of milk."
          ],
          [
            "try on",
            "probarse",
            "Can I try it on?"
          ],
          [
            "look forward to",
            "tener ganas de",
            "I'm looking forward to the trip."
          ]
        ]
      },
      "ojo": [
        "***Check in*** = registrarse (en el aeropuerto). ***Check out*** = salir y pagar, o «echarle un ojo»: *Check out this video!*",
        "***Work out*** = hacer ejercicio. *I work out three times a week.*",
        "***Throw away*** = tirar a la basura. ***Put away*** = guardar en su lugar.",
        "***Hang out*** = pasar el rato con amigos. ***Hang up*** = colgar el teléfono.",
        "***Sleep in*** = quedarse dormido a propósito, levantarse tarde. ***Stay up*** = desvelarse."
      ],
      "en": [
        "I found out that the museum is free on Sundays.",
        "My dad gave up smoking last year.",
        "We ran out of milk, so I went to the store.",
        "I'm looking forward to the holidays."
      ]
    },
    "vocabulario": [
      {
        "en": "find out",
        "es": "averiguar, enterarse",
        "imagen": "Persona leyendo una noticia sorprendida",
        "ejemplo": [
          "I found out the museum is free on Sundays.",
          "Me enteré de que el museo es gratis los domingos."
        ]
      },
      {
        "en": "give back",
        "es": "devolver",
        "imagen": "Niña devolviendo un libro a su amiga",
        "ejemplo": [
          "Can you give back my pen?",
          "¿Me devuelves mi pluma?"
        ]
      },
      {
        "en": "give up",
        "es": "rendirse, dejar",
        "imagen": "Persona rompiendo un cigarro",
        "ejemplo": [
          "My dad gave up smoking last year.",
          "Mi papá dejó de fumar el año pasado."
        ]
      },
      {
        "en": "grow up",
        "es": "crecer",
        "imagen": "Fotos de un niño y del mismo adulto",
        "ejemplo": [
          "I grew up in a small town.",
          "Crecí en un pueblo pequeño."
        ]
      },
      {
        "en": "look after",
        "es": "cuidar",
        "imagen": "Abuela cuidando a un bebé",
        "ejemplo": [
          "She looks after her little brother.",
          "Ella cuida a su hermanito."
        ]
      },
      {
        "en": "look forward to",
        "es": "tener ganas de",
        "imagen": "Persona emocionada mirando un calendario",
        "ejemplo": [
          "I'm looking forward to the holidays.",
          "Tengo muchas ganas de que lleguen las vacaciones."
        ]
      },
      {
        "en": "check in",
        "es": "registrarse",
        "imagen": "Pasajera en el mostrador del aeropuerto",
        "ejemplo": [
          "We checked in two hours before the flight.",
          "Documentamos dos horas antes del vuelo."
        ]
      },
      {
        "en": "check out",
        "es": "echar un ojo",
        "imagen": "Amigos viendo un video en el celular",
        "ejemplo": [
          "Check out this video!",
          "¡Mira este video!"
        ]
      },
      {
        "en": "fill in",
        "es": "llenar un formulario",
        "imagen": "Persona llenando un formulario",
        "ejemplo": [
          "Please fill in this form.",
          "Por favor, llena este formulario."
        ]
      },
      {
        "en": "try on",
        "es": "probarse",
        "imagen": "Persona probándose una camisa en una tienda",
        "ejemplo": [
          "Can I try on these jeans?",
          "¿Me puedo probar estos jeans?"
        ]
      },
      {
        "en": "run out of",
        "es": "quedarse sin",
        "imagen": "Refrigerador vacío sin leche",
        "ejemplo": [
          "We ran out of milk.",
          "Se nos acabó la leche."
        ]
      },
      {
        "en": "get back",
        "es": "regresar, volver",
        "imagen": "Familia regresando de vacaciones con maletas",
        "ejemplo": [
          "We got back from Cancún yesterday.",
          "Regresamos de Cancún ayer."
        ]
      },
      {
        "en": "go on",
        "es": "continuar",
        "imagen": "Maestra animando a una alumna a seguir",
        "ejemplo": [
          "Go on, tell me more!",
          "¡Sigue, cuéntame más!"
        ]
      },
      {
        "en": "carry on",
        "es": "seguir",
        "imagen": "Corredor siguiendo a pesar del cansancio",
        "ejemplo": [
          "Carry on, you're almost there!",
          "¡Sigue, ya casi llegas!"
        ]
      },
      {
        "en": "throw away",
        "es": "tirar a la basura",
        "imagen": "Persona tirando una botella al bote de basura",
        "ejemplo": [
          "Don't throw away the bottles.",
          "No tires las botellas."
        ]
      },
      {
        "en": "put away",
        "es": "guardar",
        "imagen": "Niño guardando sus juguetes en una caja",
        "ejemplo": [
          "Put away your toys, please.",
          "Guarda tus juguetes, por favor."
        ]
      },
      {
        "en": "take out",
        "es": "sacar",
        "imagen": "Persona sacando la basura",
        "ejemplo": [
          "Can you take out the trash?",
          "¿Puedes sacar la basura?"
        ]
      },
      {
        "en": "turn around",
        "es": "voltearse, darse la vuelta",
        "imagen": "Persona volteando hacia atrás en la calle",
        "ejemplo": [
          "Turn around and smile!",
          "¡Voltea y sonríe!"
        ]
      },
      {
        "en": "break down",
        "es": "descomponerse",
        "imagen": "Carro descompuesto en la carretera",
        "ejemplo": [
          "Our car broke down on the highway.",
          "Se nos descompuso el carro en la carretera."
        ]
      },
      {
        "en": "look up",
        "es": "buscar información",
        "imagen": "Persona buscando una palabra en el diccionario",
        "ejemplo": [
          "Look up the word in the dictionary.",
          "Busca la palabra en el diccionario."
        ]
      },
      {
        "en": "get along with",
        "es": "llevarse bien con",
        "imagen": "Dos hermanas riendo juntas",
        "ejemplo": [
          "I get along with my sister.",
          "Me llevo bien con mi hermana."
        ]
      },
      {
        "en": "hang out",
        "es": "pasar el rato",
        "imagen": "Amigos platicando en un parque",
        "ejemplo": [
          "We hang out at the mall on Saturdays.",
          "Pasamos el rato en la plaza los sábados."
        ]
      },
      {
        "en": "hang up",
        "es": "colgar el teléfono",
        "imagen": "Persona colgando el teléfono enojada",
        "ejemplo": [
          "Don't hang up! I want to talk to you.",
          "¡No cuelgues! Quiero hablar contigo."
        ]
      },
      {
        "en": "dress up",
        "es": "arreglarse, disfrazarse",
        "imagen": "Niños disfrazados para una fiesta",
        "ejemplo": [
          "The kids dressed up as pirates.",
          "Los niños se disfrazaron de piratas."
        ]
      },
      {
        "en": "go up",
        "es": "subir",
        "imagen": "Gráfica con una flecha hacia arriba",
        "ejemplo": [
          "Prices went up again.",
          "Los precios subieron otra vez."
        ]
      },
      {
        "en": "go down",
        "es": "bajar",
        "imagen": "Termómetro bajando en invierno",
        "ejemplo": [
          "The temperature goes down at night.",
          "La temperatura baja en la noche."
        ]
      },
      {
        "en": "pay back",
        "es": "pagar lo que debes",
        "imagen": "Persona devolviendo dinero a un amigo",
        "ejemplo": [
          "I'll pay you back tomorrow.",
          "Mañana te pago."
        ]
      },
      {
        "en": "work out",
        "es": "hacer ejercicio",
        "imagen": "Persona haciendo ejercicio en el gimnasio",
        "ejemplo": [
          "I work out three times a week.",
          "Hago ejercicio tres veces por semana."
        ]
      },
      {
        "en": "sleep in",
        "es": "levantarse tarde",
        "imagen": "Persona durmiendo con el sol entrando por la ventana",
        "ejemplo": [
          "I sleep in on Sundays.",
          "Los domingos me levanto tarde."
        ]
      },
      {
        "en": "stay up",
        "es": "desvelarse",
        "imagen": "Persona viendo una película de madrugada",
        "ejemplo": [
          "We stayed up until two in the morning.",
          "Nos desvelamos hasta las dos de la mañana."
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I found out the museum is free on Sundays.",
        "es": "Me enteré de que el museo es gratis los domingos."
      },
      {
        "en": "My dad gave up smoking last year.",
        "es": "Mi papá dejó de fumar el año pasado."
      },
      {
        "en": "She looks after her little brother.",
        "es": "Ella cuida a su hermanito."
      },
      {
        "en": "I'm looking forward to the holidays.",
        "es": "Tengo muchas ganas de que lleguen las vacaciones."
      },
      {
        "en": "Can I try on these jeans?",
        "es": "¿Me puedo probar estos jeans?"
      },
      {
        "en": "We ran out of milk.",
        "es": "Se nos acabó la leche."
      },
      {
        "en": "Our car broke down on the highway.",
        "es": "Se nos descompuso el carro en la carretera."
      },
      {
        "en": "I get along with my sister.",
        "es": "Me llevo bien con mi hermana."
      },
      {
        "en": "I'll pay you back tomorrow.",
        "es": "Mañana te pago."
      },
      {
        "en": "We stayed up until two in the morning.",
        "es": "Nos desvelamos hasta las dos de la mañana."
      }
    ],
    "frases": [
      {
        "en": "I grew up in Puebla, but now I live in Monterrey.",
        "es": "Crecí en Puebla, pero ahora vivo en Monterrey.",
        "imagen": "Calle colorida de Puebla"
      },
      {
        "en": "When we got to the airport, we checked in and had a coffee.",
        "es": "Cuando llegamos al aeropuerto, documentamos y tomamos un café.",
        "imagen": "Pasajeros con maletas en un aeropuerto"
      },
      {
        "en": "I tried on three dresses, but I didn't buy any.",
        "es": "Me probé tres vestidos, pero no compré ninguno.",
        "imagen": "Persona frente al espejo de un probador"
      },
      {
        "en": "We ran out of gas in the middle of the desert.",
        "es": "Se nos acabó la gasolina en medio del desierto.",
        "imagen": "Carro detenido en una carretera del desierto"
      },
      {
        "en": "Could you look after my dog while I'm on vacation?",
        "es": "¿Podrías cuidar a mi perro mientras estoy de vacaciones?",
        "imagen": "Perro sentado junto a una maleta"
      },
      {
        "en": "I'm really looking forward to seeing you next week.",
        "es": "Tengo muchas ganas de verte la próxima semana.",
        "imagen": "Dos amigos abrazándose en una estación"
      },
      {
        "en": "Don't throw away those boxes. We can use them for the move.",
        "es": "No tires esas cajas. Las podemos usar para la mudanza.",
        "imagen": "Cajas de cartón en una sala"
      },
      {
        "en": "If you don't know a word, look it up on your phone.",
        "es": "Si no sabes una palabra, búscala en tu celular.",
        "imagen": "Persona buscando algo en su celular"
      },
      {
        "en": "On Saturdays I sleep in, and then I hang out with my friends.",
        "es": "Los sábados me levanto tarde y luego paso el rato con mis amigos.",
        "imagen": "Amigos tomando café en una terraza"
      },
      {
        "en": "Please fill in your name and address, and give back the pen.",
        "es": "Por favor, escribe tu nombre y dirección y devuelve la pluma.",
        "imagen": "Formulario y pluma sobre un mostrador"
      }
    ],
    "listening": [
      {
        "audio": "I gave up coffee last month.",
        "pregunta": "¿Qué dejó?",
        "opciones": [
          "El café",
          "El azúcar",
          "El cigarro",
          "El refresco"
        ]
      },
      {
        "audio": "My grandmother looks after my kids on Mondays.",
        "pregunta": "¿Qué hace la abuela los lunes?",
        "opciones": [
          "Cuida a los niños",
          "Cocina",
          "Trabaja",
          "Va al doctor"
        ]
      },
      {
        "audio": "We ran out of bread, so I'm going to the bakery.",
        "pregunta": "¿Qué se acabó?",
        "opciones": [
          "El pan",
          "La leche",
          "El café",
          "Los huevos"
        ]
      },
      {
        "audio": "Can I try on these shoes in a size eight?",
        "pregunta": "¿Qué quiere hacer?",
        "opciones": [
          "Probarse zapatos",
          "Comprar una camisa",
          "Devolver zapatos",
          "Pagar"
        ]
      },
      {
        "audio": "I stayed up late, so I'm very tired today.",
        "pregunta": "¿Por qué está cansado?",
        "opciones": [
          "Se desveló",
          "Hizo ejercicio",
          "Trabajó mucho",
          "Está enfermo"
        ]
      }
    ],
    "lectura": {
      "titulo": "A trip to Guanajuato",
      "texto": "Last month, my friend Pablo and I went to Guanajuato for a long weekend. We were really looking forward to the trip. On Friday morning, we checked in at the bus station and left at eight. Halfway there, the bus broke down, and we waited for two hours on the side of the road. Pablo didn't give up; he looked up the history of the city on his phone and told me everything. When we finally arrived, we found out that there was a music festival in the main square. That night we hung out with some students and stayed up until three. On Saturday we slept in, of course. In the afternoon, I tried on a beautiful leather jacket at the market, but it was too expensive. On Sunday, we ran out of money, so we ate tacos for lunch and dinner. We got back home on Sunday night, tired but very happy.",
      "preguntas": [
        {
          "pregunta": "¿Qué pasó en el camino?",
          "opciones": [
            "Se descompuso el camión",
            "Se perdieron",
            "Llovió mucho",
            "Perdieron el camión"
          ]
        },
        {
          "pregunta": "¿Qué descubrieron al llegar?",
          "opciones": [
            "Que había un festival de música",
            "Que el museo estaba cerrado",
            "Que no había lugar",
            "Que llovía"
          ]
        },
        {
          "pregunta": "¿Por qué no compró la chamarra?",
          "opciones": [
            "Era muy cara",
            "Era muy chica",
            "No le gustó",
            "No había"
          ]
        },
        {
          "pregunta": "¿Por qué comieron tacos el domingo?",
          "opciones": [
            "Se quedaron sin dinero",
            "Les encantan",
            "No había restaurantes",
            "Era lo único abierto"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa.",
        "pregunta": "My grandfather gave ___ smoking.",
        "respuestas": [
          "up"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "We ran out ___ sugar.",
        "respuestas": [
          "of"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "I'm looking forward ___ the party.",
        "respuestas": [
          "to"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "Can I try ___ this shirt?",
        "respuestas": [
          "on"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "Who looks ___ your kids when you work?",
        "respuestas": [
          "after"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "I get along ___ my neighbors.",
        "respuestas": [
          "with"
        ]
      },
      {
        "instruccion": "Ordena con pronombre.",
        "pregunta": "These shoes are nice. Can I try ___? (them / on)",
        "respuestas": [
          "them on"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Crecí en Veracruz.",
        "respuestas": [
          "I grew up in Veracruz"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Hago ejercicio todos los días.",
        "respuestas": [
          "I work out every day"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "Please throw away it.",
        "respuestas": [
          "Please throw it away"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "I ___ out that the store was closed.",
        "opciones": [
          "found",
          "looked",
          "gave",
          "took"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We ran out ___ milk.",
        "opciones": [
          "of",
          "from",
          "with",
          "to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I'm looking forward to ___ you.",
        "opciones": [
          "seeing",
          "see",
          "saw",
          "seen"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "These jeans are nice. Can I try ___?",
        "opciones": [
          "them on",
          "on them",
          "on",
          "it on them"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Break down» (un carro) significa:",
        "opciones": [
          "Descomponerse",
          "Acelerar",
          "Estacionarse",
          "Lavarse"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Hang out» significa:",
        "opciones": [
          "Pasar el rato",
          "Colgar el teléfono",
          "Salir corriendo",
          "Tender la ropa"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I work out at the gym every morning.",
        "pregunta": "¿Qué hace cada mañana?",
        "opciones": [
          "Hace ejercicio",
          "Trabaja",
          "Desayuna",
          "Duerme"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Prices went up again this month.",
        "pregunta": "¿Qué pasó con los precios?",
        "opciones": [
          "Subieron",
          "Bajaron",
          "No cambiaron",
          "Desaparecieron"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: me llevo bien con él",
        "respuestas": [
          "I get along with him",
          "I get on with him"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: guarda tus cosas",
        "respuestas": [
          "Put away your things",
          "Put your things away",
          "put your stuff away",
          "put away your stuff"
        ]
      }
    ]
  }
];
