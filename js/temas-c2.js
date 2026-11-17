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
  {
    "id": "c2-01",
    "num": 1,
    "titulo": "Matices de los tiempos verbales (presente histórico, pasado de cortesía)",
    "contexto": "Narrativa y cortesía",
    "explicacion": {
      "es": [
        "En el nivel de dominio, los tiempos verbales no solo indican **cuándo** pasa algo, sino también **efecto narrativo** y **cortesía**. El **presente histórico** cuenta hechos pasados en **presente** para hacerlos más **vivos** y dramáticos: *So I**'m** walking down the street, and this guy **comes** up to me and **says**…* (Entonces voy caminando y se me acerca un tipo y me dice…)",
        "También se usa en **resúmenes** de libros y películas, **titulares** y **biografías**: *In the novel, the hero **leaves** his village and **travels** to the capital.* *1910: The Mexican Revolution **begins**.*",
        "El **pasado de cortesía** suaviza peticiones y preguntas: ***I wanted** to ask you something. **I was wondering** if you could help me. **Did you want** a coffee?* Suena **más amable y menos directo** que el presente.",
        "Otros matices: el **presente continuo** para **quejas** con *always* (*He**'s always interrupting** me!*), el **futuro continuo** para preguntar **sin presionar** (*Will you be using the car?*) y el **presente perfecto** para noticias (*The president **has resigned**.*)."
      ],
      "tabla": {
        "columnas": [
          "Uso",
          "Ejemplo",
          "Efecto"
        ],
        "filas": [
          [
            "Presente histórico (anécdota)",
            "So I open the door, and there's a dog!",
            "más vivo y dramático"
          ],
          [
            "Presente en resúmenes",
            "In the film, a young girl discovers a secret.",
            "estilo de reseña"
          ],
          [
            "Pasado de cortesía",
            "I was wondering if you could help me.",
            "más amable"
          ],
          [
            "Continuo + always (queja)",
            "She's always losing her keys!",
            "molestia"
          ],
          [
            "Futuro continuo (sin presionar)",
            "Will you be needing anything else?",
            "cortés, neutral"
          ],
          [
            "Presente perfecto (noticias)",
            "Scientists have discovered a new species.",
            "novedad"
          ]
        ]
      },
      "ojo": [
        "En una anécdota con presente histórico, **no mezcles** al azar presente y pasado: mantén la coherencia.",
        "*I **wanted** to ask you…* no significa que ya no quieras; es **cortesía**.",
        "***Did you want…?*** en un restaurante o tienda es una pregunta **amable**, no habla del pasado.",
        "Los **titulares** usan presente para el pasado y *to* + verbo para el futuro: *«President **to visit** Mexico»* = el presidente visitará México.",
        "*He**'s always** helping people* también puede ser **elogio**, según el contexto y el tono."
      ],
      "en": [
        "The historical present tells past events in the present to make them more vivid: So I'm walking down the street, and this guy comes up to me.",
        "It is also used in summaries and headlines: In the novel, the hero leaves his village.",
        "The polite past softens requests: I was wondering if you could help me. Did you want a coffee?",
        "He's always interrupting me! Will you be using the car?"
      ]
    },
    "vocabulario": [
      {
        "en": "So I'm walking down the street",
        "es": "entonces voy caminando por la calle",
        "imagen": "Persona caminando y volteando sorprendida",
        "ejemplo": [
          "So I'm walking down the street, and suddenly I see my ex.",
          "Entonces voy caminando por la calle y de repente veo a mi ex."
        ]
      },
      {
        "en": "and this guy comes up to me",
        "es": "y se me acerca un tipo",
        "imagen": "Desconocido acercándose en la calle",
        "ejemplo": [
          "And this guy comes up to me and asks for directions.",
          "Y se me acerca un tipo a preguntarme cómo llegar."
        ]
      },
      {
        "en": "In the novel, the hero leaves",
        "es": "en la novela, el héroe se va",
        "imagen": "Libro abierto con ilustración de un viajero",
        "ejemplo": [
          "In the novel, the hero leaves his village to find his father.",
          "En la novela, el héroe deja su pueblo para buscar a su padre."
        ]
      },
      {
        "en": "I was wondering if",
        "es": "me preguntaba si",
        "imagen": "Persona pidiendo un favor con cortesía",
        "ejemplo": [
          "I was wondering if you could lend me your notes.",
          "Me preguntaba si me podrías prestar tus apuntes."
        ]
      },
      {
        "en": "I wanted to ask you",
        "es": "quería preguntarte",
        "imagen": "Persona acercándose con amabilidad a su jefa",
        "ejemplo": [
          "I wanted to ask you about the holidays.",
          "Quería preguntarte sobre las vacaciones."
        ]
      },
      {
        "en": "Did you want a coffee?",
        "es": "¿quería un café?",
        "imagen": "Mesera ofreciendo café a un cliente",
        "ejemplo": [
          "Did you want a coffee with your dessert?",
          "¿Quería un café con su postre?"
        ]
      },
      {
        "en": "He's always interrupting me!",
        "es": "¡siempre me está interrumpiendo!",
        "imagen": "Persona molesta mientras otra habla encima",
        "ejemplo": [
          "He's always interrupting me in meetings!",
          "¡Siempre me interrumpe en las juntas!"
        ]
      },
      {
        "en": "Will you be needing anything else?",
        "es": "¿va a necesitar algo más?",
        "imagen": "Mesero amable junto a una mesa",
        "ejemplo": [
          "Will you be needing anything else, sir?",
          "¿Va a necesitar algo más, señor?"
        ]
      },
      {
        "en": "The president has resigned",
        "es": "el presidente ha renunciado",
        "imagen": "Conferencia de prensa con micrófonos",
        "ejemplo": [
          "Breaking news: the president has resigned.",
          "Última hora: el presidente ha renunciado."
        ]
      },
      {
        "en": "the historical present",
        "es": "el presente histórico",
        "imagen": "Libro de historia abierto con fechas",
        "ejemplo": [
          "The historical present makes stories more dramatic.",
          "El presente histórico hace las historias más dramáticas."
        ]
      },
      {
        "en": "1910: the Revolution begins",
        "es": "1910: comienza la Revolución",
        "imagen": "Foto antigua de revolucionarios a caballo",
        "ejemplo": [
          "1910: the Mexican Revolution begins.",
          "1910: comienza la Revolución Mexicana."
        ]
      },
      {
        "en": "I was hoping you could",
        "es": "esperaba que pudieras",
        "imagen": "Persona pidiendo algo con una sonrisa nerviosa",
        "ejemplo": [
          "I was hoping you could help me with my application.",
          "Esperaba que pudieras ayudarme con mi solicitud."
        ]
      },
      {
        "en": "She's always losing her keys",
        "es": "siempre está perdiendo sus llaves",
        "imagen": "Mujer buscando llaves en su bolsa desesperada",
        "ejemplo": [
          "My sister is always losing her keys.",
          "Mi hermana siempre está perdiendo sus llaves."
        ]
      },
      {
        "en": "President to visit Mexico",
        "es": "el presidente visitará México",
        "imagen": "Titular de periódico sin texto legible",
        "ejemplo": [
          "The headline said: President to visit Mexico next week.",
          "El titular decía: el presidente visitará México la próxima semana."
        ]
      },
      {
        "en": "Were you looking for something?",
        "es": "¿buscaba algo?",
        "imagen": "Vendedor ofreciendo ayuda en una tienda",
        "ejemplo": [
          "Were you looking for something in particular?",
          "¿Buscaba algo en particular?"
        ]
      },
      {
        "en": "I thought you might like",
        "es": "pensé que te podría gustar",
        "imagen": "Persona entregando un regalo con cariño",
        "ejemplo": [
          "I thought you might like this book.",
          "Pensé que te podría gustar este libro."
        ]
      }
    ],
    "grupos": [
      {
        "id": "anecdotas",
        "titulo": "Contar anécdotas",
        "icono": "🎙️",
        "patron": [
          "So I'm…",
          "and then he goes…",
          "and I'm like…"
        ],
        "palabras": [
          {
            "en": "and then he goes",
            "es": "y entonces él dice",
            "imagen": "Amigos contándose una historia con gestos",
            "ejemplo": [
              "And then he goes, I've never seen you before!",
              "Y entonces él dice: ¡nunca te había visto!"
            ]
          },
          {
            "en": "and I'm like",
            "es": "y yo así de",
            "imagen": "Persona haciendo cara de sorpresa exagerada",
            "ejemplo": [
              "And I'm like, are you serious?",
              "Y yo así de: ¿hablas en serio?"
            ]
          },
          {
            "en": "out of nowhere",
            "es": "de la nada",
            "imagen": "Gato apareciendo de repente frente a un ciclista",
            "ejemplo": [
              "Out of nowhere, a cat jumps in front of my bike.",
              "De la nada, un gato salta frente a mi bici."
            ]
          },
          {
            "en": "next thing I know",
            "es": "lo siguiente que sé",
            "imagen": "Persona despertando confundida en un sofá",
            "ejemplo": [
              "Next thing I know, it's three in the morning.",
              "Lo siguiente que sé es que son las tres de la mañana."
            ]
          },
          {
            "en": "you won't believe this",
            "es": "no vas a creer esto",
            "imagen": "Amiga emocionada contando un chisme",
            "ejemplo": [
              "You won't believe this, but I won a trip to Japan.",
              "No vas a creer esto, pero gané un viaje a Japón."
            ]
          },
          {
            "en": "long story short",
            "es": "para no hacerla larga",
            "imagen": "Persona resumiendo con un gesto de la mano",
            "ejemplo": [
              "Long story short, we got married.",
              "Para no hacerla larga, nos casamos."
            ]
          }
        ]
      },
      {
        "id": "cortesia",
        "titulo": "Peticiones corteses",
        "icono": "🎩",
        "patron": [
          "I was wondering if…",
          "I wanted to ask…",
          "Did you want…?"
        ],
        "palabras": [
          {
            "en": "I was thinking we could",
            "es": "pensaba que podríamos",
            "imagen": "Persona proponiendo un plan con amabilidad",
            "ejemplo": [
              "I was thinking we could have lunch on Friday.",
              "Pensaba que podríamos comer juntos el viernes."
            ]
          },
          {
            "en": "I just wanted to check",
            "es": "solo quería confirmar",
            "imagen": "Persona revisando una agenda por teléfono",
            "ejemplo": [
              "I just wanted to check if the meeting is still on.",
              "Solo quería confirmar si la junta sigue en pie."
            ]
          },
          {
            "en": "Would you mind if",
            "es": "¿te importaría si…?",
            "imagen": "Persona señalando una ventana con cortesía",
            "ejemplo": [
              "Would you mind if I opened the window?",
              "¿Te importaría si abro la ventana?"
            ]
          },
          {
            "en": "I hoped you might",
            "es": "esperaba que pudieras",
            "imagen": "Persona entregando un documento con timidez",
            "ejemplo": [
              "I hoped you might have a look at my proposal.",
              "Esperaba que pudieras echarle un vistazo a mi propuesta."
            ]
          },
          {
            "en": "How many did you need?",
            "es": "¿cuántos necesitaba?",
            "imagen": "Vendedor atendiendo a un cliente en un mostrador",
            "ejemplo": [
              "How many boxes did you need?",
              "¿Cuántas cajas necesitaba?"
            ]
          },
          {
            "en": "I was going to ask",
            "es": "te iba a preguntar",
            "imagen": "Persona levantando la mano para hablar",
            "ejemplo": [
              "I was going to ask if I could leave early today.",
              "Te iba a preguntar si puedo salir temprano hoy."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "So I'm walking down the street, and suddenly I see my ex.",
        "es": "Entonces voy caminando por la calle y de repente veo a mi ex."
      },
      {
        "en": "In the novel, the hero leaves his village to find his father.",
        "es": "En la novela, el héroe deja su pueblo para buscar a su padre."
      },
      {
        "en": "I was wondering if you could lend me your notes.",
        "es": "Me preguntaba si me podrías prestar tus apuntes."
      },
      {
        "en": "Did you want a coffee with your dessert?",
        "es": "¿Quería un café con su postre?"
      },
      {
        "en": "He's always interrupting me in meetings!",
        "es": "¡Siempre me interrumpe en las juntas!"
      },
      {
        "en": "Will you be needing anything else, sir?",
        "es": "¿Va a necesitar algo más, señor?"
      },
      {
        "en": "Breaking news: the president has resigned.",
        "es": "Última hora: el presidente ha renunciado."
      },
      {
        "en": "1910: the Mexican Revolution begins.",
        "es": "1910: comienza la Revolución Mexicana."
      },
      {
        "en": "Out of nowhere, a cat jumps in front of my bike.",
        "es": "De la nada, un gato salta frente a mi bici."
      },
      {
        "en": "I just wanted to check if the meeting is still on.",
        "es": "Solo quería confirmar si la junta sigue en pie."
      }
    ],
    "frases": [
      {
        "en": "So there I am, standing in the rain without an umbrella, when a car stops and my old teacher offers me a ride.",
        "es": "Así que ahí estoy, parado bajo la lluvia sin paraguas, cuando se detiene un carro y mi antiguo maestro me ofrece un aventón.",
        "imagen": "Persona empapada en la calle y un carro deteniéndose"
      },
      {
        "en": "In the film, a young woman inherits a house in Oaxaca and discovers a family secret.",
        "es": "En la película, una joven hereda una casa en Oaxaca y descubre un secreto familiar.",
        "imagen": "Joven entrando a una casona antigua en Oaxaca"
      },
      {
        "en": "I was wondering whether you might have time to look at my CV before the interview.",
        "es": "Me preguntaba si tendrías tiempo de revisar mi currículum antes de la entrevista.",
        "imagen": "Persona entregando un currículum a un mentor"
      },
      {
        "en": "My neighbor is always complaining about the noise, but his dog barks all night.",
        "es": "Mi vecino siempre se está quejando del ruido, pero su perro ladra toda la noche.",
        "imagen": "Vecino molesto con un perro ladrando detrás"
      },
      {
        "en": "In 1968, Mexico hosts the Olympic Games for the first time.",
        "es": "En 1968, México es sede de los Juegos Olímpicos por primera vez.",
        "imagen": "Estadio olímpico con antorcha encendida"
      },
      {
        "en": "Did you want to pay by card or in cash?",
        "es": "¿Quería pagar con tarjeta o en efectivo?",
        "imagen": "Cajera preguntando a un cliente en una tienda"
      },
      {
        "en": "Next thing I know, the whole office is singing happy birthday to me.",
        "es": "Lo siguiente que sé es que toda la oficina me está cantando las mañanitas.",
        "imagen": "Compañeros cantando con un pastel en una oficina"
      },
      {
        "en": "I wanted to ask you whether you'd consider working with us on the new project.",
        "es": "Quería preguntarte si considerarías trabajar con nosotros en el nuevo proyecto.",
        "imagen": "Dos profesionistas conversando en un café"
      },
      {
        "en": "Will you be joining us for dinner tonight, or do you have other plans?",
        "es": "¿Nos acompañarás a cenar hoy en la noche, o tienes otros planes?",
        "imagen": "Mesa preparada para una cena con lugares vacíos"
      },
      {
        "en": "Scientists have discovered a new species of frog in the cloud forests of Veracruz.",
        "es": "Científicos han descubierto una nueva especie de rana en los bosques de niebla de Veracruz.",
        "imagen": "Rana pequeña de colores en una hoja en un bosque húmedo"
      }
    ],
    "listening": [
      {
        "audio": "So I get to the airport, and guess what? The flight's been canceled.",
        "pregunta": "¿Qué pasó en el aeropuerto?",
        "opciones": [
          "El vuelo se canceló",
          "Perdió su pasaporte",
          "Llegó tarde",
          "Se encontró a un amigo"
        ]
      },
      {
        "audio": "I was wondering if you could cover my shift on Saturday.",
        "pregunta": "¿Qué pide?",
        "opciones": [
          "Que lo cubra el sábado",
          "Que le preste dinero",
          "Que lo lleve al aeropuerto",
          "Que lo ayude a mudarse"
        ]
      },
      {
        "audio": "Did you want the soup or the salad with your meal?",
        "pregunta": "¿Qué le preguntan?",
        "opciones": [
          "Si quiere sopa o ensalada",
          "Si ya pagó",
          "Si quiere postre",
          "Si quiere café"
        ]
      },
      {
        "audio": "She's always forgetting her umbrella, so she's always wet.",
        "pregunta": "¿Qué siempre olvida?",
        "opciones": [
          "Su paraguas",
          "Sus llaves",
          "Su celular",
          "Su cartera"
        ]
      },
      {
        "audio": "In the book, a young boy travels to Mexico City to look for his father.",
        "pregunta": "¿A qué viaja el niño?",
        "opciones": [
          "A buscar a su padre",
          "A estudiar",
          "A trabajar",
          "A visitar a su abuela"
        ]
      }
    ],
    "lectura": {
      "titulo": "The worst first date",
      "texto": "So it's Friday night, and I'm meeting this guy for the first time at a nice restaurant downtown. I arrive on time, which, if you know me, is a miracle. I wait ten minutes, then twenty. Nothing. I'm about to leave when he walks in, completely soaked, carrying a bunch of flowers that look like they've been through a hurricane. He sits down and says: I'm so sorry, the bus broke down and I walked here in the rain. And I'm like, okay, that's actually kind of sweet. The waiter comes over and says: Did you want to see the wine list? And my date, who's still dripping, goes: Just water, please, I've had enough water for one day. I burst out laughing. Long story short, the food is terrible, the service is slow, and the music is way too loud. But we talk for four hours. Next thing I know, it's midnight, and the restaurant is closing. That was five years ago. Next month, we're getting married.",
      "preguntas": [
        {
          "pregunta": "¿Por qué llegó tarde el chico?",
          "opciones": [
            "Se descompuso el camión y caminó bajo la lluvia",
            "Se le olvidó",
            "Se perdió",
            "Tenía trabajo"
          ]
        },
        {
          "pregunta": "¿Qué le contestó al mesero?",
          "opciones": [
            "Que solo agua, que ya había tenido suficiente agua",
            "Que quería vino",
            "Que quería café",
            "Nada"
          ]
        },
        {
          "pregunta": "¿Cómo fue la comida?",
          "opciones": [
            "Terrible",
            "Excelente",
            "Normal",
            "No comieron"
          ]
        },
        {
          "pregunta": "¿Qué va a pasar el próximo mes?",
          "opciones": [
            "Se van a casar",
            "Se van a mudar",
            "Van a regresar al restaurante",
            "Van a terminar"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con el pasado de cortesía.",
        "pregunta": "I was ___ if you could help me. (wonder)",
        "respuestas": [
          "wondering"
        ]
      },
      {
        "instruccion": "Completa con el pasado de cortesía.",
        "pregunta": "___ you want some more coffee? (Did / Do)",
        "respuestas": [
          "Did"
        ]
      },
      {
        "instruccion": "Completa con always + continuo.",
        "pregunta": "My brother is always ___ (borrow) my clothes!",
        "respuestas": [
          "borrowing"
        ]
      },
      {
        "instruccion": "Completa con el futuro continuo cortés.",
        "pregunta": "Will you be ___ (use) the car tonight?",
        "respuestas": [
          "using"
        ]
      },
      {
        "instruccion": "Completa con el presente histórico.",
        "pregunta": "So I open the door, and who ___ (be) there? My boss!",
        "respuestas": [
          "is"
        ]
      },
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "Long story ___, we missed the flight.",
        "respuestas": [
          "short"
        ]
      },
      {
        "instruccion": "Traduce al inglés (cortés).",
        "pregunta": "Quería preguntarte algo.",
        "respuestas": [
          "I wanted to ask you something",
          "I was wanting to ask you something"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "de la nada",
        "respuestas": [
          "out of nowhere"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¡Siempre me está interrumpiendo!",
        "respuestas": [
          "He's always interrupting me",
          "She's always interrupting me",
          "He is always interrupting me",
          "She is always interrupting me"
        ]
      },
      {
        "instruccion": "Interpreta el titular.",
        "pregunta": "«Minister to resign» significa: el ministro ___ (renunciará / renunció)",
        "respuestas": [
          "renunciará"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "Forma más cortés de pedir algo:",
        "opciones": [
          "I was wondering if you could help me.",
          "Help me.",
          "You help me now.",
          "I want help."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "So I'm sitting on the bus, and this woman ___ next to me.",
        "opciones": [
          "sits down",
          "sat down yesterday",
          "has sat",
          "will sit"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "En un resumen de película: In the movie, the detective ___ the killer.",
        "opciones": [
          "finds",
          "found yesterday",
          "had found",
          "will have found"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She's always ___ her phone at home!",
        "opciones": [
          "leaving",
          "leave",
          "left",
          "leaves"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Did you want a dessert?» en un restaurante es:",
        "opciones": [
          "Una pregunta cortés en presente",
          "Una pregunta sobre el pasado",
          "Una queja",
          "Una orden"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Titular «Prices to rise in January» significa:",
        "opciones": [
          "Los precios subirán en enero",
          "Los precios subieron en enero",
          "Los precios bajan",
          "Los precios no cambian"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I just wanted to check whether you'd received my email.",
        "pregunta": "¿Qué quiere confirmar?",
        "opciones": [
          "Si recibió su correo",
          "Si vendrá a la junta",
          "Si pagó",
          "Si está enfermo"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Out of nowhere, the lights go out and everybody starts screaming.",
        "pregunta": "¿Qué pasó de la nada?",
        "opciones": [
          "Se fue la luz",
          "Empezó a llover",
          "Llegó la policía",
          "Sonó una alarma"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Me preguntaba si…",
        "respuestas": [
          "I was wondering if",
          "I was wondering whether"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: lo siguiente que sé",
        "respuestas": [
          "next thing I know",
          "the next thing I know"
        ]
      }
    ]
  },
  {
    "id": "c2-02",
    "num": 2,
    "titulo": "Inversión y anteposición con fines de estilo",
    "contexto": "Literatura y discursos",
    "explicacion": {
      "es": [
        "En **literatura y discursos**, la inversión y la anteposición se usan para **crear ritmo, dramatismo y elegancia**. Ya conoces la inversión tras adverbios negativos (*Never have I…*); en el nivel de dominio se combina con otros recursos retóricos.",
        "Inversión tras **adverbios de lugar** en descripciones literarias: ***Beyond the mountains lay** a forgotten valley.* ***Through the window came** the sound of distant bells.* ***Gone are the days** when…* (Atrás quedaron los días en que…)",
        "Inversión tras ***so / such*** y comparativos para **énfasis**: ***So great was** his influence that…*, ***Such is** the power of words.* ***Equally important is** the role of education.* ***Of greater concern is**…*",
        "En **discursos**, la anteposición y el paralelismo crean impacto: ***Not once, not twice, but three times** did they ignore our requests.* ***This** we will not accept; **this** we will fight.* Úsalo con **moderación**: demasiado suena artificial."
      ],
      "tabla": {
        "columnas": [
          "Recurso",
          "Ejemplo"
        ],
        "filas": [
          [
            "Lugar + verbo + sujeto",
            "Beyond the hills lay an ancient city."
          ],
          [
            "Gone are the days…",
            "Gone are the days when letters took weeks."
          ],
          [
            "So / Such + inversión",
            "Such was her talent that nobody could compete."
          ],
          [
            "Comparativo + inversión",
            "More important than money is time."
          ],
          [
            "Adjetivo + be + sujeto",
            "Equally significant is the cultural impact."
          ],
          [
            "Paralelismo enfático",
            "Not once, not twice, but three times did he fail."
          ]
        ]
      },
      "ojo": [
        "La inversión con lugar funciona con verbos de **posición o movimiento** (*lie, stand, sit, come, go, appear*), no con cualquier verbo.",
        "***Gone are the days when…*** es una expresión fija muy usada para la nostalgia.",
        "***Of particular concern is…*** / ***Of greater importance is…***: el sujeto real va **al final**.",
        "En la conversación normal estos recursos suenan **demasiado formales**; resérvalos para textos escritos y discursos.",
        "Lee en voz alta: la inversión literaria crea un **ritmo** que se nota al escuchar."
      ],
      "en": [
        "In literature and speeches, inversion creates rhythm and drama: Beyond the mountains lay a forgotten valley.",
        "Gone are the days when letters took weeks to arrive.",
        "Such was her talent that nobody could compete. Equally important is the role of education.",
        "Not once, not twice, but three times did they ignore our requests."
      ]
    },
    "vocabulario": [
      {
        "en": "Beyond the mountains lay",
        "es": "más allá de las montañas yacía",
        "imagen": "Valle verde escondido entre montañas",
        "ejemplo": [
          "Beyond the mountains lay a forgotten valley.",
          "Más allá de las montañas yacía un valle olvidado."
        ]
      },
      {
        "en": "Through the window came",
        "es": "por la ventana entraba",
        "imagen": "Luz y sonido entrando por una ventana antigua",
        "ejemplo": [
          "Through the window came the sound of distant bells.",
          "Por la ventana entraba el sonido de campanas lejanas."
        ]
      },
      {
        "en": "Gone are the days",
        "es": "atrás quedaron los días",
        "imagen": "Carta antigua con estampillas viejas",
        "ejemplo": [
          "Gone are the days when letters took weeks to arrive.",
          "Atrás quedaron los días en que las cartas tardaban semanas en llegar."
        ]
      },
      {
        "en": "Such is the power of",
        "es": "tal es el poder de",
        "imagen": "Orador frente a una multitud atenta",
        "ejemplo": [
          "Such is the power of words.",
          "Tal es el poder de las palabras."
        ]
      },
      {
        "en": "Equally important is",
        "es": "igualmente importante es",
        "imagen": "Balanza equilibrada con dos objetos",
        "ejemplo": [
          "Equally important is the role of the family.",
          "Igualmente importante es el papel de la familia."
        ]
      },
      {
        "en": "Of greater concern is",
        "es": "más preocupante es",
        "imagen": "Gráfica con un indicador en rojo",
        "ejemplo": [
          "Of greater concern is the rise in unemployment.",
          "Más preocupante es el aumento del desempleo."
        ]
      },
      {
        "en": "More important than money is",
        "es": "más importante que el dinero es",
        "imagen": "Familia reunida en una mesa sencilla",
        "ejemplo": [
          "More important than money is time with those we love.",
          "Más importante que el dinero es el tiempo con quienes amamos."
        ]
      },
      {
        "en": "Not once, not twice",
        "es": "ni una, ni dos",
        "imagen": "Persona levantando tres dedos con firmeza",
        "ejemplo": [
          "Not once, not twice, but three times did they ignore us.",
          "Ni una, ni dos, sino tres veces nos ignoraron."
        ]
      },
      {
        "en": "In the distance stood",
        "es": "a lo lejos se alzaba",
        "imagen": "Castillo en una colina al atardecer",
        "ejemplo": [
          "In the distance stood an old castle.",
          "A lo lejos se alzaba un viejo castillo."
        ]
      },
      {
        "en": "Here lies",
        "es": "aquí yace",
        "imagen": "Lápida antigua en un cementerio tranquilo",
        "ejemplo": [
          "Here lies a man who loved his country.",
          "Aquí yace un hombre que amó a su patria."
        ]
      },
      {
        "en": "So great was his influence",
        "es": "tan grande fue su influencia",
        "imagen": "Estatua de un líder histórico en una plaza",
        "ejemplo": [
          "So great was his influence that his ideas still inspire us.",
          "Tan grande fue su influencia que sus ideas aún nos inspiran."
        ]
      },
      {
        "en": "Rarely has a nation",
        "es": "pocas veces una nación ha",
        "imagen": "Bandera ondeando sobre una multitud unida",
        "ejemplo": [
          "Rarely has a nation shown such courage.",
          "Pocas veces una nación ha mostrado tanto valor."
        ]
      },
      {
        "en": "Of particular interest is",
        "es": "de particular interés es",
        "imagen": "Persona examinando un documento antiguo con lupa",
        "ejemplo": [
          "Of particular interest is the author's use of humor.",
          "De particular interés es el uso del humor por parte del autor."
        ]
      },
      {
        "en": "Out of the darkness came",
        "es": "de la oscuridad surgió",
        "imagen": "Luz saliendo de una cueva oscura",
        "ejemplo": [
          "Out of the darkness came a small light.",
          "De la oscuridad surgió una pequeña luz."
        ]
      },
      {
        "en": "This we will not accept",
        "es": "esto no lo aceptaremos",
        "imagen": "Líder hablando con firmeza en un podio",
        "ejemplo": [
          "This we will not accept.",
          "Esto no lo aceptaremos."
        ]
      },
      {
        "en": "Long gone are",
        "es": "hace mucho que se fueron",
        "imagen": "Foto antigua de una calle sin carros",
        "ejemplo": [
          "Long gone are the quiet streets of my childhood.",
          "Hace mucho que se fueron las calles tranquilas de mi infancia."
        ]
      }
    ],
    "grupos": [
      {
        "id": "literatura",
        "titulo": "Descripciones literarias",
        "icono": "📜",
        "patron": [
          "Beyond… lay…",
          "At the end of… stood…",
          "Into the room came…"
        ],
        "palabras": [
          {
            "en": "Above the village rose",
            "es": "sobre el pueblo se alzaba",
            "imagen": "Volcán nevado sobre un pueblo",
            "ejemplo": [
              "Above the village rose the snowy volcano.",
              "Sobre el pueblo se alzaba el volcán nevado."
            ]
          },
          {
            "en": "Down the hill ran",
            "es": "colina abajo corría",
            "imagen": "Niños corriendo colina abajo",
            "ejemplo": [
              "Down the hill ran a group of laughing children.",
              "Colina abajo corría un grupo de niños riendo."
            ]
          },
          {
            "en": "Into the room came",
            "es": "a la habitación entró",
            "imagen": "Mujer elegante entrando a un salón",
            "ejemplo": [
              "Into the room came a woman dressed in white.",
              "A la habitación entró una mujer vestida de blanco."
            ]
          },
          {
            "en": "Along the river grew",
            "es": "a lo largo del río crecían",
            "imagen": "Sauces junto a un río tranquilo",
            "ejemplo": [
              "Along the river grew tall willow trees.",
              "A lo largo del río crecían altos sauces."
            ]
          },
          {
            "en": "Across the square walked",
            "es": "por la plaza caminaba",
            "imagen": "Anciano cruzando una plaza colonial",
            "ejemplo": [
              "Across the square walked an old man with a cane.",
              "Por la plaza caminaba un anciano con bastón."
            ]
          },
          {
            "en": "Beneath the surface lay",
            "es": "bajo la superficie yacía",
            "imagen": "Barco hundido bajo el agua turquesa",
            "ejemplo": [
              "Beneath the surface lay the remains of an old ship.",
              "Bajo la superficie yacían los restos de un viejo barco."
            ]
          }
        ]
      },
      {
        "id": "discursos",
        "titulo": "Recursos de discurso",
        "icono": "🎤",
        "patron": [
          "Never before has…",
          "Such is…",
          "Let us…"
        ],
        "palabras": [
          {
            "en": "Never before has",
            "es": "nunca antes ha",
            "imagen": "Multitud celebrando un momento histórico",
            "ejemplo": [
              "Never before has our city faced such a challenge.",
              "Nunca antes nuestra ciudad había enfrentado un reto así."
            ]
          },
          {
            "en": "Let us remember",
            "es": "recordemos",
            "imagen": "Personas con velas en un homenaje",
            "ejemplo": [
              "Let us remember those who came before us.",
              "Recordemos a quienes vinieron antes que nosotros."
            ]
          },
          {
            "en": "Let us not forget",
            "es": "no olvidemos",
            "imagen": "Monumento con flores",
            "ejemplo": [
              "Let us not forget the sacrifices of our grandparents.",
              "No olvidemos los sacrificios de nuestros abuelos."
            ]
          },
          {
            "en": "Together we can",
            "es": "juntos podemos",
            "imagen": "Manos unidas en un círculo",
            "ejemplo": [
              "Together we can build a better future.",
              "Juntos podemos construir un futuro mejor."
            ]
          },
          {
            "en": "It is not… but…",
            "es": "no es… sino…",
            "imagen": "Orador gesticulando con convicción",
            "ejemplo": [
              "It is not the strongest who survive, but the most adaptable.",
              "No sobreviven los más fuertes, sino los que mejor se adaptan."
            ]
          },
          {
            "en": "Only then will we",
            "es": "solo entonces podremos",
            "imagen": "Personas mirando el amanecer con esperanza",
            "ejemplo": [
              "Only then will we understand our history.",
              "Solo entonces entenderemos nuestra historia."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Beyond the mountains lay a forgotten valley.",
        "es": "Más allá de las montañas yacía un valle olvidado."
      },
      {
        "en": "Gone are the days when letters took weeks to arrive.",
        "es": "Atrás quedaron los días en que las cartas tardaban semanas en llegar."
      },
      {
        "en": "Such is the power of words.",
        "es": "Tal es el poder de las palabras."
      },
      {
        "en": "Equally important is the role of the family.",
        "es": "Igualmente importante es el papel de la familia."
      },
      {
        "en": "More important than money is time with those we love.",
        "es": "Más importante que el dinero es el tiempo con quienes amamos."
      },
      {
        "en": "In the distance stood an old castle.",
        "es": "A lo lejos se alzaba un viejo castillo."
      },
      {
        "en": "Rarely has a nation shown such courage.",
        "es": "Pocas veces una nación ha mostrado tanto valor."
      },
      {
        "en": "Above the village rose the snowy volcano.",
        "es": "Sobre el pueblo se alzaba el volcán nevado."
      },
      {
        "en": "Never before has our city faced such a challenge.",
        "es": "Nunca antes nuestra ciudad había enfrentado un reto así."
      },
      {
        "en": "Let us not forget the sacrifices of our grandparents.",
        "es": "No olvidemos los sacrificios de nuestros abuelos."
      }
    ],
    "frases": [
      {
        "en": "At the edge of the village, surrounded by ancient trees, stood the house where the poet had spent his final years.",
        "es": "En la orilla del pueblo, rodeada de árboles antiguos, se alzaba la casa donde el poeta había pasado sus últimos años.",
        "imagen": "Casa antigua rodeada de árboles centenarios"
      },
      {
        "en": "Gone are the days when families gathered every evening to listen to the radio.",
        "es": "Atrás quedaron los días en que las familias se reunían cada noche a escuchar la radio.",
        "imagen": "Familia de los años cincuenta alrededor de un radio antiguo"
      },
      {
        "en": "So deep was the silence in the church that we could hear our own hearts beating.",
        "es": "Tan profundo era el silencio en la iglesia que podíamos oír latir nuestros propios corazones.",
        "imagen": "Interior de una iglesia antigua vacía y silenciosa"
      },
      {
        "en": "Of particular concern to the scientists is the rapid disappearance of the coral reefs.",
        "es": "De particular preocupación para los científicos es la rápida desaparición de los arrecifes de coral.",
        "imagen": "Arrecife de coral blanqueado bajo el agua"
      },
      {
        "en": "Not once in all those years did she complain about her difficult life.",
        "es": "Ni una sola vez en todos esos años se quejó de su vida difícil.",
        "imagen": "Mujer mayor sonriendo serenamente frente a su casa sencilla"
      },
      {
        "en": "Such was the beauty of her voice that the whole audience stood up in silence.",
        "es": "Tal era la belleza de su voz que todo el público se puso de pie en silencio.",
        "imagen": "Cantante en un teatro con el público de pie"
      },
      {
        "en": "Down from the mountains came the cold wind, announcing the arrival of winter.",
        "es": "De las montañas bajó el viento frío, anunciando la llegada del invierno.",
        "imagen": "Montañas con nubes y árboles agitados por el viento"
      },
      {
        "en": "More valuable than any treasure are the memories we share with our families.",
        "es": "Más valiosos que cualquier tesoro son los recuerdos que compartimos con nuestras familias.",
        "imagen": "Abuela mostrando un álbum de fotos a sus nietos"
      },
      {
        "en": "Never in the history of this school have so many students graduated with honors.",
        "es": "Nunca en la historia de esta escuela tantos estudiantes se habían graduado con honores.",
        "imagen": "Graduados lanzando birretes en un patio escolar"
      },
      {
        "en": "Let us remember that it is not wealth but kindness that defines a great society.",
        "es": "Recordemos que no es la riqueza sino la bondad lo que define a una gran sociedad.",
        "imagen": "Voluntarios ayudando en un comedor comunitario"
      }
    ],
    "listening": [
      {
        "audio": "Gone are the days when we could leave our doors open at night.",
        "pregunta": "¿Qué ya no se puede hacer?",
        "opciones": [
          "Dejar las puertas abiertas de noche",
          "Salir de noche",
          "Dormir tranquilo",
          "Visitar a los vecinos"
        ]
      },
      {
        "audio": "Beyond the river lay the small village where my grandmother was born.",
        "pregunta": "¿Qué había más allá del río?",
        "opciones": [
          "El pueblo donde nació su abuela",
          "Una ciudad",
          "Un bosque",
          "Una montaña"
        ]
      },
      {
        "audio": "Such was the crowd at the concert that many fans had to watch from outside.",
        "pregunta": "¿Qué pasó en el concierto?",
        "opciones": [
          "Había tanta gente que muchos lo vieron desde afuera",
          "Se canceló",
          "Hubo poca gente",
          "Fue gratis"
        ]
      },
      {
        "audio": "Equally important is the need to protect the rivers.",
        "pregunta": "¿Qué es igualmente importante?",
        "opciones": [
          "Proteger los ríos",
          "Construir carreteras",
          "Plantar árboles",
          "Limpiar las calles"
        ]
      },
      {
        "audio": "Let us not forget the people who built this city with their own hands.",
        "pregunta": "¿A quiénes no hay que olvidar?",
        "opciones": [
          "A quienes construyeron la ciudad",
          "A los turistas",
          "A los políticos",
          "A los niños"
        ]
      }
    ],
    "lectura": {
      "titulo": "The town that time forgot",
      "texto": "High in the Sierra Gorda, at the end of a road that few travelers ever take, lies the small town of San Pedro. Above its colorful houses rises a white church, and around it stretch fields of corn and beans. Gone are the days when hundreds of miners lived here; today only a few families remain. Yet such is the beauty of the place that visitors who discover it often return year after year. Through its narrow streets walks Doña Remedios, the oldest woman in town, who still remembers the arrival of electricity. Never before, she says, had we seen the night so bright. Of particular interest to historians is the old mine, closed for almost a century, whose tunnels are said to contain forgotten treasures. Rarely does one find a place so untouched by modern life. Let us hope that San Pedro keeps its charm, for once it is gone, no amount of money will bring it back.",
      "preguntas": [
        {
          "pregunta": "¿Dónde está San Pedro?",
          "opciones": [
            "En lo alto de la Sierra Gorda",
            "En la costa",
            "En la ciudad",
            "En el desierto"
          ]
        },
        {
          "pregunta": "¿Qué pasó con los mineros?",
          "opciones": [
            "Ya no viven ahí; quedan pocas familias",
            "Siguen trabajando",
            "Se volvieron agricultores",
            "Abrieron un museo"
          ]
        },
        {
          "pregunta": "¿Qué recuerda Doña Remedios?",
          "opciones": [
            "La llegada de la electricidad",
            "La Revolución",
            "La construcción de la iglesia",
            "Su boda"
          ]
        },
        {
          "pregunta": "¿Qué espera el autor?",
          "opciones": [
            "Que San Pedro conserve su encanto",
            "Que llegue más turismo",
            "Que reabran la mina",
            "Que construyan una carretera nueva"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "Gone ___ the days when we walked to school alone.",
        "respuestas": [
          "are"
        ]
      },
      {
        "instruccion": "Completa con la inversión.",
        "pregunta": "Beyond the hills ___ an old village. (lay / lied)",
        "respuestas": [
          "lay"
        ]
      },
      {
        "instruccion": "Completa con such o so.",
        "pregunta": "___ was her courage that everyone admired her.",
        "respuestas": [
          "Such"
        ]
      },
      {
        "instruccion": "Completa con such o so.",
        "pregunta": "___ beautiful was the view that we stayed for hours.",
        "respuestas": [
          "So"
        ]
      },
      {
        "instruccion": "Completa la estructura.",
        "pregunta": "Equally important ___ the role of teachers.",
        "respuestas": [
          "is"
        ]
      },
      {
        "instruccion": "Completa el recurso de discurso.",
        "pregunta": "Let ___ remember those who came before us.",
        "respuestas": [
          "us"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Atrás quedaron los días en que…",
        "respuestas": [
          "Gone are the days when"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Tal es el poder de las palabras.",
        "respuestas": [
          "Such is the power of words"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "No olvidemos…",
        "respuestas": [
          "Let us not forget",
          "Let's not forget"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "In the distance an old castle stood it.",
        "respuestas": [
          "In the distance stood an old castle",
          "In the distance an old castle stood"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "Gone ___ the days of cheap housing.",
        "opciones": [
          "are",
          "is",
          "were been",
          "have"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "At the top of the hill ___ a small chapel.",
        "opciones": [
          "stood",
          "it stood",
          "standing",
          "was stand"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ was the storm that all flights were canceled.",
        "opciones": [
          "Such",
          "So",
          "Very",
          "Too"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "More important than talent ___ hard work.",
        "opciones": [
          "is",
          "are",
          "be",
          "being"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Let us not forget» es típico de:",
        "opciones": [
          "Un discurso",
          "Un chat informal",
          "Una lista del súper",
          "Un mensaje de texto"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Of particular concern is the price» significa:",
        "opciones": [
          "Lo que más preocupa es el precio",
          "El precio no importa",
          "El precio es bajo",
          "Hay un precio especial"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Never before has the city seen so many tourists in a single weekend.",
        "pregunta": "¿Qué nunca había pasado?",
        "opciones": [
          "Tantos turistas en un fin de semana",
          "Tanta lluvia",
          "Tanto tráfico",
          "Un concierto así"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Down the street came a band of mariachis, playing and singing.",
        "pregunta": "¿Quiénes venían por la calle?",
        "opciones": [
          "Mariachis",
          "Policías",
          "Niños",
          "Turistas"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Más allá de las montañas yacía un valle.",
        "respuestas": [
          "Beyond the mountains lay a valley",
          "Beyond the mountains there was a valley"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: juntos podemos",
        "respuestas": [
          "together we can"
        ]
      }
    ]
  },
  {
    "id": "c2-03",
    "num": 3,
    "titulo": "Estructuras subjuntivas y fijas (Be that as it may, Come what may)",
    "contexto": "Expresiones formales",
    "explicacion": {
      "es": [
        "El inglés conserva varias **expresiones fijas con subjuntivo**, que suenan **formales, literarias o solemnes**. No siguen las reglas normales y hay que aprenderlas **como bloques**.",
        "***Be that as it may*** = **sea como sea / aun así**: *The plan is expensive. **Be that as it may**, it is necessary.* ***Come what may*** = **pase lo que pase**: *I'll support you, **come what may**.*",
        "***Suffice it to say*** = **baste decir**: ***Suffice it to say** that the meeting did not go well.* ***So be it*** = **que así sea / ni modo**. ***Far be it from me to*** = **lejos de mí** (+ crítica suave): ***Far be it from me to** criticize, but…*",
        "Otras fórmulas: ***God bless you***, ***Long live the king*** (¡viva el rey!), ***Heaven forbid*** (Dios no lo quiera), ***If need be*** (si fuera necesario), ***as it were*** (por así decirlo), ***Woe betide*** (¡pobre de…!)."
      ],
      "tabla": {
        "columnas": [
          "Expresión",
          "Significado",
          "Ejemplo"
        ],
        "filas": [
          [
            "Be that as it may",
            "sea como sea",
            "Be that as it may, we must continue."
          ],
          [
            "Come what may",
            "pase lo que pase",
            "I'll be there, come what may."
          ],
          [
            "Suffice it to say",
            "baste decir",
            "Suffice it to say, he was furious."
          ],
          [
            "Far be it from me to…",
            "lejos de mí…",
            "Far be it from me to judge."
          ],
          [
            "If need be",
            "si fuera necesario",
            "I'll work all night if need be."
          ],
          [
            "Heaven forbid",
            "Dios no lo quiera",
            "Heaven forbid anything should happen to him."
          ]
        ]
      },
      "ojo": [
        "Estas expresiones son **fijas**: no cambies el orden ni el verbo (*Be that as it may*, no *It may be that as*).",
        "***So be it*** puede expresar **aceptación resignada**: *If they want to leave, so be it.* (Si se quieren ir, ni modo.)",
        "***As it were*** suaviza una metáfora: *He is, **as it were**, the heart of the team.* (es, por así decirlo, el corazón del equipo)",
        "***Far be it from me*** se usa con **ironía**: normalmente precede una crítica.",
        "Úsalas con **moderación**: una o dos en un texto formal dan elegancia; muchas suenan anticuadas."
      ],
      "en": [
        "English keeps some fixed expressions with the subjunctive. They sound formal or literary.",
        "Be that as it may, it is necessary. I'll support you, come what may.",
        "Suffice it to say that the meeting did not go well. Far be it from me to criticize, but…",
        "If need be, heaven forbid, as it were."
      ]
    },
    "vocabulario": [
      {
        "en": "Be that as it may",
        "es": "sea como sea",
        "imagen": "Persona decidida mirando un camino difícil",
        "ejemplo": [
          "The plan is expensive. Be that as it may, it is necessary.",
          "El plan es caro. Sea como sea, es necesario."
        ]
      },
      {
        "en": "Come what may",
        "es": "pase lo que pase",
        "imagen": "Pareja tomada de la mano frente a una tormenta",
        "ejemplo": [
          "I'll stand by you, come what may.",
          "Estaré contigo, pase lo que pase."
        ]
      },
      {
        "en": "Suffice it to say",
        "es": "baste decir",
        "imagen": "Persona con una sonrisa irónica",
        "ejemplo": [
          "Suffice it to say that the meeting did not go well.",
          "Baste decir que la junta no salió bien."
        ]
      },
      {
        "en": "So be it",
        "es": "que así sea / ni modo",
        "imagen": "Persona aceptando algo con resignación",
        "ejemplo": [
          "If they want to leave, so be it.",
          "Si se quieren ir, ni modo."
        ]
      },
      {
        "en": "Far be it from me",
        "es": "lejos de mí",
        "imagen": "Persona levantando las manos con ironía",
        "ejemplo": [
          "Far be it from me to criticize, but the food was cold.",
          "Lejos de mí criticar, pero la comida estaba fría."
        ]
      },
      {
        "en": "If need be",
        "es": "si fuera necesario",
        "imagen": "Persona trabajando de noche con determinación",
        "ejemplo": [
          "I'll work all weekend if need be.",
          "Trabajaré todo el fin de semana si fuera necesario."
        ]
      },
      {
        "en": "Heaven forbid",
        "es": "Dios no lo quiera",
        "imagen": "Persona con las manos juntas preocupada",
        "ejemplo": [
          "Heaven forbid anything should happen to the children.",
          "Dios no quiera que les pase algo a los niños."
        ]
      },
      {
        "en": "as it were",
        "es": "por así decirlo",
        "imagen": "Persona explicando con un gesto metafórico",
        "ejemplo": [
          "She is, as it were, the heart of the family.",
          "Ella es, por así decirlo, el corazón de la familia."
        ]
      },
      {
        "en": "God bless you",
        "es": "que Dios te bendiga / salud",
        "imagen": "Persona estornudando y otra respondiendo",
        "ejemplo": [
          "God bless you! Do you have a cold?",
          "¡Salud! ¿Tienes gripa?"
        ]
      },
      {
        "en": "Long live",
        "es": "viva",
        "imagen": "Multitud celebrando con banderas",
        "ejemplo": [
          "Long live Mexico!",
          "¡Viva México!"
        ]
      },
      {
        "en": "Woe betide",
        "es": "pobre de",
        "imagen": "Jefe con cara seria mirando un reloj",
        "ejemplo": [
          "Woe betide anyone who arrives late.",
          "Pobre del que llegue tarde."
        ]
      },
      {
        "en": "Be it ever so humble",
        "es": "por humilde que sea",
        "imagen": "Casa pequeña y sencilla con flores",
        "ejemplo": [
          "Be it ever so humble, there's no place like home.",
          "Por humilde que sea, no hay lugar como el hogar."
        ]
      },
      {
        "en": "Perish the thought",
        "es": "ni lo mande Dios",
        "imagen": "Persona negando con horror fingido",
        "ejemplo": [
          "Me, retire? Perish the thought!",
          "¿Yo, jubilarme? ¡Ni lo mande Dios!"
        ]
      },
      {
        "en": "Rest assured",
        "es": "tenga la seguridad",
        "imagen": "Doctor tranquilizando a una familia",
        "ejemplo": [
          "Rest assured that we will do everything possible.",
          "Tenga la seguridad de que haremos todo lo posible."
        ]
      },
      {
        "en": "Truth be told",
        "es": "a decir verdad",
        "imagen": "Persona confesando algo con honestidad",
        "ejemplo": [
          "Truth be told, I never liked that job.",
          "A decir verdad, nunca me gustó ese trabajo."
        ]
      },
      {
        "en": "Needless to say",
        "es": "huelga decir",
        "imagen": "Persona con una expresión obvia",
        "ejemplo": [
          "Needless to say, we were delighted.",
          "Huelga decir que estábamos encantados."
        ]
      }
    ],
    "grupos": [
      {
        "id": "formales",
        "titulo": "Fórmulas formales",
        "icono": "🏛️",
        "patron": [
          "Rest assured…",
          "Suffice it to say…",
          "Be that as it may…"
        ],
        "palabras": [
          {
            "en": "For the sake of",
            "es": "por el bien de",
            "imagen": "Padre protegiendo a su familia",
            "ejemplo": [
              "For the sake of the children, they stayed together.",
              "Por el bien de los niños, siguieron juntos."
            ]
          },
          {
            "en": "Notwithstanding",
            "es": "no obstante / a pesar de",
            "imagen": "Documento legal con un sello",
            "ejemplo": [
              "Notwithstanding the difficulties, the project was a success.",
              "A pesar de las dificultades, el proyecto fue un éxito."
            ]
          },
          {
            "en": "Insofar as",
            "es": "en la medida en que",
            "imagen": "Balanza con un lado más pesado",
            "ejemplo": [
              "Insofar as it is possible, we will help.",
              "En la medida de lo posible, ayudaremos."
            ]
          },
          {
            "en": "Without further ado",
            "es": "sin más preámbulos",
            "imagen": "Presentador abriendo un evento en un escenario",
            "ejemplo": [
              "Without further ado, let's welcome our guest.",
              "Sin más preámbulos, demos la bienvenida a nuestro invitado."
            ]
          },
          {
            "en": "In the event that",
            "es": "en caso de que",
            "imagen": "Señal de salida de emergencia",
            "ejemplo": [
              "In the event that the alarm sounds, leave the building.",
              "En caso de que suene la alarma, salga del edificio."
            ]
          },
          {
            "en": "Hence",
            "es": "de ahí que",
            "imagen": "Flecha de causa a efecto",
            "ejemplo": [
              "The roads were closed; hence the delay.",
              "Las carreteras estaban cerradas; de ahí el retraso."
            ]
          }
        ]
      },
      {
        "id": "solemnes",
        "titulo": "Expresiones solemnes",
        "icono": "🕯️",
        "patron": [
          "God bless…",
          "Long live…",
          "May they rest in peace."
        ],
        "palabras": [
          {
            "en": "May he rest in peace",
            "es": "que en paz descanse",
            "imagen": "Vela encendida junto a un retrato con flores",
            "ejemplo": [
              "My grandfather, may he rest in peace, was a kind man.",
              "Mi abuelo, que en paz descanse, era un hombre bondadoso."
            ]
          },
          {
            "en": "May all your dreams come true",
            "es": "que se cumplan todos tus sueños",
            "imagen": "Persona soplando velas de cumpleaños",
            "ejemplo": [
              "Happy birthday! May all your dreams come true.",
              "¡Feliz cumpleaños! Que se cumplan todos tus sueños."
            ]
          },
          {
            "en": "God willing",
            "es": "si Dios quiere",
            "imagen": "Persona mirando al cielo con esperanza",
            "ejemplo": [
              "God willing, we'll see each other next year.",
              "Si Dios quiere, nos vemos el próximo año."
            ]
          },
          {
            "en": "Thank heavens",
            "es": "gracias al cielo",
            "imagen": "Persona aliviada abrazando a alguien",
            "ejemplo": [
              "Thank heavens you're safe!",
              "¡Gracias al cielo que estás a salvo!"
            ]
          },
          {
            "en": "For better or worse",
            "es": "para bien o para mal",
            "imagen": "Pareja de recién casados tomados de la mano",
            "ejemplo": [
              "For better or worse, we'll face it together.",
              "Para bien o para mal, lo enfrentaremos juntos."
            ]
          },
          {
            "en": "So help me God",
            "es": "con la ayuda de Dios",
            "imagen": "Persona con la mano levantada en un juramento",
            "ejemplo": [
              "I will tell the truth, so help me God.",
              "Diré la verdad, con la ayuda de Dios."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "The plan is expensive. Be that as it may, it is necessary.",
        "es": "El plan es caro. Sea como sea, es necesario."
      },
      {
        "en": "I'll stand by you, come what may.",
        "es": "Estaré contigo, pase lo que pase."
      },
      {
        "en": "Suffice it to say that the meeting did not go well.",
        "es": "Baste decir que la junta no salió bien."
      },
      {
        "en": "If they want to leave, so be it.",
        "es": "Si se quieren ir, ni modo."
      },
      {
        "en": "Far be it from me to criticize, but the food was cold.",
        "es": "Lejos de mí criticar, pero la comida estaba fría."
      },
      {
        "en": "I'll work all weekend if need be.",
        "es": "Trabajaré todo el fin de semana si fuera necesario."
      },
      {
        "en": "She is, as it were, the heart of the family.",
        "es": "Ella es, por así decirlo, el corazón de la familia."
      },
      {
        "en": "Rest assured that we will do everything possible.",
        "es": "Tenga la seguridad de que haremos todo lo posible."
      },
      {
        "en": "Truth be told, I never liked that job.",
        "es": "A decir verdad, nunca me gustó ese trabajo."
      },
      {
        "en": "God willing, we'll see each other next year.",
        "es": "Si Dios quiere, nos vemos el próximo año."
      }
    ],
    "frases": [
      {
        "en": "The journey will be long and difficult. Be that as it may, we have no other choice.",
        "es": "El viaje será largo y difícil. Sea como sea, no tenemos otra opción.",
        "imagen": "Caravana avanzando por un camino de montaña"
      },
      {
        "en": "Suffice it to say that, after the interview, he was never invited back.",
        "es": "Baste decir que, después de la entrevista, nunca lo volvieron a invitar.",
        "imagen": "Puerta de oficina cerrándose detrás de una persona"
      },
      {
        "en": "Far be it from me to tell you how to raise your children, but they need more sleep.",
        "es": "Lejos de mí decirte cómo criar a tus hijos, pero necesitan dormir más.",
        "imagen": "Abuela hablando con su hija sobre los nietos"
      },
      {
        "en": "Come what may, I will finish this degree before I turn forty.",
        "es": "Pase lo que pase, terminaré esta carrera antes de cumplir cuarenta.",
        "imagen": "Adulto estudiando de noche con determinación"
      },
      {
        "en": "Rest assured that your personal data will be treated with complete confidentiality.",
        "es": "Tenga la seguridad de que sus datos personales se tratarán con total confidencialidad.",
        "imagen": "Candado digital sobre una pantalla de computadora"
      },
      {
        "en": "If need be, we will take the case to the Supreme Court.",
        "es": "Si fuera necesario, llevaremos el caso a la Suprema Corte.",
        "imagen": "Abogados subiendo las escaleras de un tribunal"
      },
      {
        "en": "Truth be told, I was more nervous than the bride on her wedding day.",
        "es": "A decir verdad, yo estaba más nervioso que la novia el día de su boda.",
        "imagen": "Padrino nervioso en una boda"
      },
      {
        "en": "Heaven forbid that we should ever see another earthquake like that one.",
        "es": "Dios no quiera que volvamos a ver un sismo como ese.",
        "imagen": "Personas abrazándose en la calle después de un temblor"
      },
      {
        "en": "She was, as it were, a mother to all the children in the neighborhood.",
        "es": "Era, por así decirlo, una madre para todos los niños de la colonia.",
        "imagen": "Señora rodeada de niños en una calle de colonia"
      },
      {
        "en": "Notwithstanding the bad weather, the parade went ahead as planned.",
        "es": "A pesar del mal tiempo, el desfile se realizó como estaba previsto.",
        "imagen": "Desfile bajo la lluvia con gente aplaudiendo"
      }
    ],
    "listening": [
      {
        "audio": "It's going to be expensive. Be that as it may, we need a new roof.",
        "pregunta": "¿Qué necesitan?",
        "opciones": [
          "Un techo nuevo",
          "Un carro",
          "Dinero",
          "Una casa"
        ]
      },
      {
        "audio": "Suffice it to say that my parents were not happy with my grades.",
        "pregunta": "¿Cómo reaccionaron los papás?",
        "opciones": [
          "No estaban contentos",
          "Estaban felices",
          "No dijeron nada",
          "Lo felicitaron"
        ]
      },
      {
        "audio": "Come what may, I'll be at your graduation.",
        "pregunta": "¿Qué promete?",
        "opciones": [
          "Estar en su graduación pase lo que pase",
          "Llegar tarde",
          "Llamar",
          "Enviar un regalo"
        ]
      },
      {
        "audio": "Rest assured that the repairs will be finished by Friday.",
        "pregunta": "¿Cuándo terminarán las reparaciones?",
        "opciones": [
          "Para el viernes",
          "El lunes",
          "En un mes",
          "No se sabe"
        ]
      },
      {
        "audio": "Truth be told, I've never really liked spicy food.",
        "pregunta": "¿Qué confiesa?",
        "opciones": [
          "Que nunca le ha gustado la comida picante",
          "Que ama el picante",
          "Que no sabe cocinar",
          "Que es vegetariano"
        ]
      }
    ],
    "lectura": {
      "titulo": "A wedding speech",
      "texto": "Good evening, everyone. Without further ado, I would like to say a few words about my sister, Lucía, and her husband, Daniel. Truth be told, when Lucía first told us she had met a guy from Monterrey on a bus, we were a little worried. Far be it from me to judge, but a bus is not the most romantic place to fall in love! Be that as it may, it took us about five minutes to realize that Daniel was the kindest man she could ever have found. Suffice it to say that our mother adopted him immediately, and now she calls him more often than she calls me. Lucía has always been, as it were, the compass of our family: when we were lost, she showed us the way. Daniel, rest assured that you are marrying the most generous, stubborn and loving woman in the world. Come what may, for better or worse, I know you will face life together. Long live the bride and groom!",
      "preguntas": [
        {
          "pregunta": "¿Dónde se conocieron Lucía y Daniel?",
          "opciones": [
            "En un camión",
            "En la universidad",
            "En el trabajo",
            "En una boda"
          ]
        },
        {
          "pregunta": "¿Cómo reaccionó la mamá con Daniel?",
          "opciones": [
            "Lo adoptó de inmediato",
            "No le cayó bien",
            "Lo ignoró",
            "Se preocupó"
          ]
        },
        {
          "pregunta": "¿Cómo describe el orador a Lucía?",
          "opciones": [
            "Como la brújula de la familia",
            "Como la más tímida",
            "Como la más divertida",
            "Como la menor"
          ]
        },
        {
          "pregunta": "¿Con qué termina el discurso?",
          "opciones": [
            "¡Vivan los novios!",
            "Un chiste",
            "Una canción",
            "Una despedida triste"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "Be that as it ___, we must continue.",
        "respuestas": [
          "may"
        ]
      },
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "I'll be there, come ___ may.",
        "respuestas": [
          "what"
        ]
      },
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "___ it to say, he was furious.",
        "respuestas": [
          "Suffice"
        ]
      },
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "Far ___ it from me to criticize.",
        "respuestas": [
          "be"
        ]
      },
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "I'll stay all night if ___ be.",
        "respuestas": [
          "need"
        ]
      },
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "She is, as it ___, the soul of the team.",
        "respuestas": [
          "were"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "pase lo que pase",
        "respuestas": [
          "come what may",
          "no matter what",
          "whatever happens"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "a decir verdad",
        "respuestas": [
          "truth be told",
          "to tell the truth"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "sin más preámbulos",
        "respuestas": [
          "without further ado"
        ]
      },
      {
        "instruccion": "Corrige la expresión.",
        "pregunta": "It may be as that be, we will go.",
        "respuestas": [
          "Be that as it may, we will go",
          "Be that as it may we will go"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "«Be that as it may» significa:",
        "opciones": [
          "Sea como sea",
          "Que así sea",
          "Puede ser",
          "Como debe ser"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Come what may» significa:",
        "opciones": [
          "Pase lo que pase",
          "Ven cuando puedas",
          "Lo que venga después",
          "Tal vez venga"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ it from me to give advice, but…",
        "opciones": [
          "Far be",
          "Far is",
          "Be far",
          "So far"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«If they don't like it, so be it» significa:",
        "opciones": [
          "Si no les gusta, ni modo",
          "Si no les gusta, que lo cambien",
          "Si no les gusta, se van",
          "Si les gusta, mejor"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Para empezar un discurso formal:",
        "opciones": [
          "Without further ado…",
          "Hey guys…",
          "So, um…",
          "Whatever…"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Heaven forbid» significa:",
        "opciones": [
          "Dios no lo quiera",
          "Gracias al cielo",
          "El cielo prohíbe",
          "Que llueva"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Far be it from me to complain, but this is the third time the order has been wrong.",
        "pregunta": "¿Cuántas veces ha estado mal el pedido?",
        "opciones": [
          "Tres",
          "Una",
          "Dos",
          "Cinco"
        ]
      },
      {
        "tipo": "listening",
        "audio": "In the event that the flight is canceled, passengers will be offered a free night's accommodation.",
        "pregunta": "¿Qué ofrecerán si se cancela el vuelo?",
        "opciones": [
          "Una noche de alojamiento gratis",
          "Un reembolso",
          "Comida",
          "Otro vuelo inmediato"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: si Dios quiere",
        "respuestas": [
          "God willing"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: tenga la seguridad de que",
        "respuestas": [
          "rest assured that",
          "rest assured"
        ]
      }
    ]
  },
  {
    "id": "c2-04",
    "num": 4,
    "titulo": "Condicionales sin if (But for…, Otherwise, Supposing, Given that)",
    "contexto": "Argumentación avanzada",
    "explicacion": {
      "es": [
        "En el inglés avanzado, las **condiciones** no siempre se expresan con *if*. Hay muchas alternativas que hacen el discurso más **variado y preciso**.",
        "***But for*** + sustantivo = **de no ser por / si no fuera por**: ***But for** your help, I would have failed.* (De no ser por tu ayuda, habría fracasado.) ***Without*** funciona igual, pero es menos formal.",
        "***Otherwise*** = **de lo contrario**: *We must leave now; **otherwise**, we'll miss the flight.* ***Or else*** es más informal o amenazante: *Hurry up, **or else** we'll be late.*",
        "***Supposing / Suppose*** (suponiendo que), ***Given that*** (dado que), ***Provided / Providing that*** (siempre que), ***Assuming that*** (asumiendo que), ***On condition that*** (con la condición de que), ***Even if*** (aun si), ***Whether or not*** (sea o no), ***In case of*** (en caso de)."
      ],
      "tabla": {
        "columnas": [
          "Conector",
          "Significado",
          "Ejemplo"
        ],
        "filas": [
          [
            "But for + sustantivo",
            "de no ser por",
            "But for the rain, we would have won."
          ],
          [
            "Otherwise",
            "de lo contrario",
            "Take a map; otherwise you'll get lost."
          ],
          [
            "Supposing / Suppose",
            "suponiendo que",
            "Supposing it rains, what will we do?"
          ],
          [
            "Given that",
            "dado que",
            "Given that prices are rising, we should save."
          ],
          [
            "Assuming that",
            "asumiendo que",
            "Assuming that he agrees, we'll start on Monday."
          ],
          [
            "Whether or not",
            "sea o no",
            "We'll go, whether or not it rains."
          ]
        ]
      },
      "ojo": [
        "***But for*** va con **sustantivo**, no con oración: *But for **the traffic*** ✅ (no *But for it was traffic* ❌).",
        "***Given that*** es **causa** (algo cierto); ***Assuming that*** es **hipótesis** (algo que suponemos).",
        "***Even if*** ≠ ***even though***: *Even if* = aun si (hipotético); *even though* = aunque (es un hecho).",
        "***In case*** = por si acaso (precaución); ***in case of*** + sustantivo = en caso de: ***In case of** fire, use the stairs.*",
        "Para argumentar, varía tus conectores: *if* repetido muchas veces hace el texto **monótono**."
      ],
      "en": [
        "Conditions can be expressed without if. But for your help, I would have failed.",
        "We must leave now; otherwise, we'll miss the flight.",
        "Supposing it rains, what will we do? Given that prices are rising, we should save.",
        "We'll go whether or not it rains."
      ]
    },
    "vocabulario": [
      {
        "en": "But for your help",
        "es": "de no ser por tu ayuda",
        "imagen": "Persona agradeciendo con un abrazo",
        "ejemplo": [
          "But for your help, I would have failed.",
          "De no ser por tu ayuda, habría fracasado."
        ]
      },
      {
        "en": "Otherwise",
        "es": "de lo contrario",
        "imagen": "Persona corriendo hacia una puerta de abordaje",
        "ejemplo": [
          "We must leave now; otherwise, we'll miss the flight.",
          "Tenemos que irnos ya; de lo contrario, perderemos el vuelo."
        ]
      },
      {
        "en": "Supposing it rains",
        "es": "suponiendo que llueva",
        "imagen": "Nubes grises sobre un jardín preparado para fiesta",
        "ejemplo": [
          "Supposing it rains, what will we do with the party?",
          "Suponiendo que llueva, ¿qué haremos con la fiesta?"
        ]
      },
      {
        "en": "Given that",
        "es": "dado que",
        "imagen": "Persona revisando precios en aumento",
        "ejemplo": [
          "Given that prices are rising, we should save more.",
          "Dado que los precios están subiendo, deberíamos ahorrar más."
        ]
      },
      {
        "en": "Assuming that",
        "es": "asumiendo que",
        "imagen": "Persona planeando en una agenda",
        "ejemplo": [
          "Assuming that he agrees, we'll start on Monday.",
          "Asumiendo que él esté de acuerdo, empezaremos el lunes."
        ]
      },
      {
        "en": "Whether or not",
        "es": "sea o no",
        "imagen": "Persona con mochila lista bajo nubes",
        "ejemplo": [
          "We'll go hiking whether or not it rains.",
          "Iremos de excursión, llueva o no."
        ]
      },
      {
        "en": "Or else",
        "es": "o si no",
        "imagen": "Mamá señalando el reloj con advertencia",
        "ejemplo": [
          "Finish your homework, or else no TV tonight.",
          "Termina tu tarea, o si no, no hay tele hoy."
        ]
      },
      {
        "en": "Without",
        "es": "sin",
        "imagen": "Persona perdida sin mapa",
        "ejemplo": [
          "Without a map, we would have been lost.",
          "Sin un mapa, nos habríamos perdido."
        ]
      },
      {
        "en": "On condition that",
        "es": "con la condición de que",
        "imagen": "Contrato con una cláusula resaltada",
        "ejemplo": [
          "You can borrow the car on condition that you fill the tank.",
          "Puedes llevarte el carro con la condición de que le llenes el tanque."
        ]
      },
      {
        "en": "Even if",
        "es": "aun si",
        "imagen": "Corredor decidido bajo la lluvia",
        "ejemplo": [
          "I'll finish the race even if it takes me all day.",
          "Terminaré la carrera aunque me tome todo el día."
        ]
      },
      {
        "en": "In case of",
        "es": "en caso de",
        "imagen": "Extintor rojo en una pared",
        "ejemplo": [
          "In case of fire, use the stairs.",
          "En caso de incendio, use las escaleras."
        ]
      },
      {
        "en": "Providing that",
        "es": "siempre que",
        "imagen": "Persona firmando un acuerdo con condiciones",
        "ejemplo": [
          "Providing that the weather is good, the boat will leave at nine.",
          "Siempre que el clima sea bueno, la lancha saldrá a las nueve."
        ]
      },
      {
        "en": "Imagine",
        "es": "imagina",
        "imagen": "Persona soñando despierta",
        "ejemplo": [
          "Imagine you had no phone for a week. Could you survive?",
          "Imagina que no tuvieras celular una semana. ¿Sobrevivirías?"
        ]
      },
      {
        "en": "Had it not been for",
        "es": "si no hubiera sido por",
        "imagen": "Rescatista ayudando a una persona",
        "ejemplo": [
          "Had it not been for the doctor, he would have died.",
          "Si no hubiera sido por el doctor, habría muerto."
        ]
      },
      {
        "en": "What if",
        "es": "¿y si…?",
        "imagen": "Amigos imaginando planes",
        "ejemplo": [
          "What if we started our own business?",
          "¿Y si pusiéramos nuestro propio negocio?"
        ]
      },
      {
        "en": "Unless",
        "es": "a menos que",
        "imagen": "Persona negándose con la mano",
        "ejemplo": [
          "I won't go unless you come with me.",
          "No iré a menos que vengas conmigo."
        ]
      }
    ],
    "grupos": [
      {
        "id": "argumentar",
        "titulo": "Para argumentar",
        "icono": "⚖️",
        "patron": [
          "Given that…",
          "Assuming that…",
          "But for…"
        ],
        "palabras": [
          {
            "en": "Given the circumstances",
            "es": "dadas las circunstancias",
            "imagen": "Persona tomando una decisión difícil en una oficina",
            "ejemplo": [
              "Given the circumstances, it was the right decision.",
              "Dadas las circunstancias, fue la decisión correcta."
            ]
          },
          {
            "en": "In the absence of",
            "es": "a falta de",
            "imagen": "Silla vacía en una sala de juntas",
            "ejemplo": [
              "In the absence of evidence, he was released.",
              "A falta de pruebas, lo liberaron."
            ]
          },
          {
            "en": "Were it not for",
            "es": "si no fuera por",
            "imagen": "Abuela sonriendo con su familia",
            "ejemplo": [
              "Were it not for my grandmother, I wouldn't speak Náhuatl.",
              "Si no fuera por mi abuela, no hablaría náhuatl."
            ]
          },
          {
            "en": "On the assumption that",
            "es": "bajo el supuesto de que",
            "imagen": "Gráfica de proyecciones financieras",
            "ejemplo": [
              "The budget was made on the assumption that sales would grow.",
              "El presupuesto se hizo bajo el supuesto de que las ventas crecerían."
            ]
          },
          {
            "en": "Should the need arise",
            "es": "si surgiera la necesidad",
            "imagen": "Botiquín de emergencia en una pared",
            "ejemplo": [
              "Should the need arise, call this number.",
              "Si surgiera la necesidad, llame a este número."
            ]
          },
          {
            "en": "Barring",
            "es": "salvo / a menos que haya",
            "imagen": "Carretera despejada con un letrero de obras",
            "ejemplo": [
              "Barring any delays, we'll arrive at noon.",
              "Salvo retrasos, llegaremos a mediodía."
            ]
          }
        ]
      },
      {
        "id": "consecuencias",
        "titulo": "Consecuencias",
        "icono": "➡️",
        "patron": [
          "…; otherwise…",
          "…, or else…",
          "…, in which case…"
        ],
        "palabras": [
          {
            "en": "in which case",
            "es": "en cuyo caso",
            "imagen": "Persona revisando el pronóstico del clima",
            "ejemplo": [
              "It might rain, in which case we'll stay home.",
              "Puede llover, en cuyo caso nos quedaremos en casa."
            ]
          },
          {
            "en": "if so",
            "es": "de ser así",
            "imagen": "Persona asintiendo al confirmar algo",
            "ejemplo": [
              "Is the store open? If so, I'll go now.",
              "¿Está abierta la tienda? De ser así, voy ahora."
            ]
          },
          {
            "en": "if not",
            "es": "si no",
            "imagen": "Persona negando con la cabeza",
            "ejemplo": [
              "Are you coming? If not, I'll go alone.",
              "¿Vienes? Si no, me voy solo."
            ]
          },
          {
            "en": "failing that",
            "es": "si eso no funciona",
            "imagen": "Persona con un plan B en una libreta",
            "ejemplo": [
              "Call him; failing that, send an email.",
              "Llámale; si eso no funciona, mándale un correo."
            ]
          },
          {
            "en": "or else",
            "es": "o si no",
            "imagen": "Persona señalando una advertencia",
            "ejemplo": [
              "Be careful, or else you'll fall.",
              "Ten cuidado, o si no te vas a caer."
            ]
          },
          {
            "en": "otherwise",
            "es": "de lo contrario",
            "imagen": "Persona apurada saliendo de casa",
            "ejemplo": [
              "Wear a jacket; otherwise you'll catch a cold.",
              "Ponte chamarra; de lo contrario te vas a resfriar."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "But for your help, I would have failed.",
        "es": "De no ser por tu ayuda, habría fracasado."
      },
      {
        "en": "We must leave now; otherwise, we'll miss the flight.",
        "es": "Tenemos que irnos ya; de lo contrario, perderemos el vuelo."
      },
      {
        "en": "Supposing it rains, what will we do with the party?",
        "es": "Suponiendo que llueva, ¿qué haremos con la fiesta?"
      },
      {
        "en": "Given that prices are rising, we should save more.",
        "es": "Dado que los precios están subiendo, deberíamos ahorrar más."
      },
      {
        "en": "We'll go hiking whether or not it rains.",
        "es": "Iremos de excursión, llueva o no."
      },
      {
        "en": "In case of fire, use the stairs.",
        "es": "En caso de incendio, use las escaleras."
      },
      {
        "en": "Had it not been for the doctor, he would have died.",
        "es": "Si no hubiera sido por el doctor, habría muerto."
      },
      {
        "en": "Given the circumstances, it was the right decision.",
        "es": "Dadas las circunstancias, fue la decisión correcta."
      },
      {
        "en": "Barring any delays, we'll arrive at noon.",
        "es": "Salvo retrasos, llegaremos a mediodía."
      },
      {
        "en": "Call him; failing that, send an email.",
        "es": "Llámale; si eso no funciona, mándale un correo."
      }
    ],
    "frases": [
      {
        "en": "But for the generosity of a few neighbors, the small library would have closed years ago.",
        "es": "De no ser por la generosidad de algunos vecinos, la pequeña biblioteca habría cerrado hace años.",
        "imagen": "Biblioteca comunitaria con vecinos donando libros"
      },
      {
        "en": "Given that most of our customers buy online, it makes sense to invest in the website.",
        "es": "Dado que la mayoría de nuestros clientes compra en línea, tiene sentido invertir en el sitio web.",
        "imagen": "Equipo diseñando una página web en una oficina"
      },
      {
        "en": "Assuming that the weather is good, the ceremony will take place in the garden.",
        "es": "Asumiendo que el clima sea bueno, la ceremonia se realizará en el jardín.",
        "imagen": "Jardín decorado para una ceremonia al aire libre"
      },
      {
        "en": "We need to reduce our expenses; otherwise, the company will not survive the year.",
        "es": "Necesitamos reducir gastos; de lo contrario, la empresa no sobrevivirá el año.",
        "imagen": "Gerentes revisando un presupuesto con preocupación"
      },
      {
        "en": "Supposing you lost your job tomorrow, how long could you live on your savings?",
        "es": "Suponiendo que perdieras tu trabajo mañana, ¿cuánto tiempo podrías vivir de tus ahorros?",
        "imagen": "Persona pensativa revisando su cuenta de ahorros"
      },
      {
        "en": "Whether or not you agree with his ideas, you have to admit that he speaks very well.",
        "es": "Estés o no de acuerdo con sus ideas, tienes que admitir que habla muy bien.",
        "imagen": "Orador frente a un público atento"
      },
      {
        "en": "In the absence of clear rules, each employee did things in their own way.",
        "es": "A falta de reglas claras, cada empleado hacía las cosas a su manera.",
        "imagen": "Oficina desorganizada con empleados haciendo cosas distintas"
      },
      {
        "en": "Were it not for the volunteers, the festival could not take place.",
        "es": "Si no fuera por los voluntarios, el festival no podría realizarse.",
        "imagen": "Voluntarios organizando un festival comunitario"
      },
      {
        "en": "Even if they offered me double the salary, I would not move to that city.",
        "es": "Aunque me ofrecieran el doble del sueldo, no me mudaría a esa ciudad.",
        "imagen": "Persona negando una oferta de trabajo con firmeza"
      },
      {
        "en": "Barring any last-minute problems, the new metro line will open in December.",
        "es": "Salvo problemas de último momento, la nueva línea del metro abrirá en diciembre.",
        "imagen": "Estación de metro nueva casi terminada"
      }
    ],
    "listening": [
      {
        "audio": "But for the traffic, we would have arrived on time.",
        "pregunta": "¿Por qué no llegaron a tiempo?",
        "opciones": [
          "Por el tráfico",
          "Por la lluvia",
          "Se perdieron",
          "Salieron tarde"
        ]
      },
      {
        "audio": "Take an umbrella; otherwise, you'll get soaked.",
        "pregunta": "¿Qué pasará sin paraguas?",
        "opciones": [
          "Se empapará",
          "Tendrá calor",
          "Llegará tarde",
          "Nada"
        ]
      },
      {
        "audio": "Given that it's a holiday, the banks will be closed tomorrow.",
        "pregunta": "¿Por qué cerrarán los bancos?",
        "opciones": [
          "Es día festivo",
          "Hay huelga",
          "Por mantenimiento",
          "Por el clima"
        ]
      },
      {
        "audio": "We'll have the barbecue whether or not it rains. We have a big tent.",
        "pregunta": "¿Qué tienen para la lluvia?",
        "opciones": [
          "Una carpa grande",
          "Paraguas",
          "Una casa",
          "Nada"
        ]
      },
      {
        "audio": "Supposing the shop is closed, where else can we buy a cake?",
        "pregunta": "¿Qué quieren comprar?",
        "opciones": [
          "Un pastel",
          "Flores",
          "Pan",
          "Un regalo"
        ]
      }
    ],
    "lectura": {
      "titulo": "The power of a single decision",
      "texto": "Historians often wonder how different the world would be but for a few key decisions. Supposing Christopher Columbus had not received support from the Spanish crown, would Europeans have reached America at that time? Probably, given that Portuguese and other navigators were exploring the Atlantic, but the history of Mexico might have been very different. Similarly, but for the invention of the printing press, ideas would have spread much more slowly, and the Renaissance might not have happened in the same way. Of course, such questions cannot be answered with certainty. Assuming that history is the result of many forces, no single event decides everything. Nevertheless, whether or not we believe in the importance of individual choices, thinking about alternative histories helps us understand the present. Otherwise, we might take for granted that things could only have happened one way.",
      "preguntas": [
        {
          "pregunta": "¿Qué se preguntan los historiadores?",
          "opciones": [
            "Qué tan diferente sería el mundo sin algunas decisiones clave",
            "Cuándo nació Colón",
            "Dónde está América",
            "Quién inventó la imprenta"
          ]
        },
        {
          "pregunta": "¿Por qué probablemente los europeos habrían llegado a América de todos modos?",
          "opciones": [
            "Porque otros navegantes exploraban el Atlántico",
            "Porque los mayas los invitaron",
            "Porque tenían aviones",
            "No lo dice"
          ]
        },
        {
          "pregunta": "¿Qué habría pasado sin la imprenta?",
          "opciones": [
            "Las ideas se habrían difundido más lento",
            "Nada",
            "Habría más libros",
            "La gente no sabría leer"
          ]
        },
        {
          "pregunta": "¿Para qué sirve pensar en historias alternativas?",
          "opciones": [
            "Para entender mejor el presente",
            "Para cambiar el pasado",
            "Para escribir novelas",
            "No sirve"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con but for u otherwise.",
        "pregunta": "___ the rain, the match would have continued.",
        "respuestas": [
          "But for",
          "Without"
        ]
      },
      {
        "instruccion": "Completa con but for u otherwise.",
        "pregunta": "Hurry up; ___, we'll be late.",
        "respuestas": [
          "otherwise",
          "or else"
        ]
      },
      {
        "instruccion": "Completa con given u assuming.",
        "pregunta": "___ that it's very late, we should go home. (dado que)",
        "respuestas": [
          "Given"
        ]
      },
      {
        "instruccion": "Completa con whether.",
        "pregunta": "I'll go ___ or not you come.",
        "respuestas": [
          "whether"
        ]
      },
      {
        "instruccion": "Completa con even if o even though.",
        "pregunta": "I'll help you ___ I have to stay late. (aun si)",
        "respuestas": [
          "even if"
        ]
      },
      {
        "instruccion": "Completa con in case of.",
        "pregunta": "___ emergency, break the glass.",
        "respuestas": [
          "In case of"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "de no ser por ti",
        "respuestas": [
          "but for you",
          "if it weren't for you",
          "if it wasn't for you",
          "were it not for you"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "dadas las circunstancias",
        "respuestas": [
          "given the circumstances",
          "under the circumstances"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "salvo retrasos",
        "respuestas": [
          "barring any delays",
          "barring delays"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "But for it rained, we would have gone.",
        "respuestas": [
          "But for the rain, we would have gone",
          "If it hadn't rained, we would have gone",
          "But for the rain we would have gone"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "___ your advice, I would have made a terrible mistake.",
        "opciones": [
          "But for",
          "Otherwise",
          "Given",
          "Unless"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Write it down; ___ you'll forget.",
        "opciones": [
          "otherwise",
          "but for",
          "given that",
          "whether"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ the bus doesn't come, how will we get there?",
        "opciones": [
          "Supposing",
          "But for",
          "Otherwise",
          "Given"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We'll continue ___ or not they approve.",
        "opciones": [
          "whether",
          "if",
          "unless",
          "even"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Barring any problems» significa:",
        "opciones": [
          "Salvo problemas",
          "Por los problemas",
          "Con muchos problemas",
          "Sin barras"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Given that» expresa:",
        "opciones": [
          "Una causa conocida",
          "Una hipótesis",
          "Un regalo",
          "Una condición negativa"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Assuming that everything goes well, the new hospital will open next spring.",
        "pregunta": "¿Cuándo abrirá el hospital si todo sale bien?",
        "opciones": [
          "La próxima primavera",
          "Este invierno",
          "En dos años",
          "Ya abrió"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Were it not for my teacher, I would never have discovered my love for science.",
        "pregunta": "¿Quién le hizo descubrir su amor por la ciencia?",
        "opciones": [
          "Su maestro",
          "Sus papás",
          "Un libro",
          "Un amigo"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: de lo contrario",
        "respuestas": [
          "otherwise",
          "or else"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: llueva o no",
        "respuestas": [
          "whether or not it rains",
          "whether it rains or not"
        ]
      }
    ]
  },
  {
    "id": "c2-05",
    "num": 5,
    "titulo": "Modalidad compleja (may well, might as well, could hardly)",
    "contexto": "Probabilidad y actitud",
    "explicacion": {
      "es": [
        "Los modales se combinan con adverbios para expresar **matices finos** de probabilidad y actitud. ***May / might / could well*** + verbo = **es muy probable que**: *Prices **may well** rise again next year.* (Es muy posible que los precios vuelvan a subir.)",
        "***Might as well / may as well*** + verbo = **ya que estamos, mejor…** (no hay mejor opción): *The bus isn't coming. We **might as well** walk.* (Mejor caminamos.) *You **may as well** tell her the truth.*",
        "***Could hardly*** + verbo = **casi no pude / difícilmente**: *I **could hardly** breathe.* (Casi no podía respirar.) ***Can't possibly*** = **es imposible que**: *You **can't possibly** finish all that today!*",
        "Más matices: ***can't help*** + *-ing* (no poder evitar): *I **can't help** laughing.* ***Couldn't care less*** (me importa un comino). ***Should have known better*** (debí ser más listo). ***Would sooner*** (preferiría): *I**'d sooner** walk than pay that much.*"
      ],
      "tabla": {
        "columnas": [
          "Expresión",
          "Significado",
          "Ejemplo"
        ],
        "filas": [
          [
            "may / might well",
            "es muy probable",
            "She may well be right."
          ],
          [
            "might as well",
            "mejor (ya que no hay más)",
            "We might as well go home."
          ],
          [
            "could hardly",
            "casi no pude",
            "I could hardly hear him."
          ],
          [
            "can't possibly",
            "es imposible que",
            "He can't possibly know."
          ],
          [
            "can't help + -ing",
            "no poder evitar",
            "I can't help worrying."
          ],
          [
            "couldn't care less",
            "me importa un comino",
            "I couldn't care less about fashion."
          ]
        ]
      },
      "ojo": [
        "*May well* ≠ *may*: ***may well*** indica **más** probabilidad que *may* solo.",
        "***Might as well*** suena **resignado o práctico**: *We missed the train, so we **might as well** have lunch here.*",
        "***Could hardly*** ya es negativo; no agregues *not*: *I could hardly see* ✅ (no *I couldn't hardly* ❌).",
        "***Couldn't care less*** = no me importa nada. En inglés americano informal también se oye *could care less* con el mismo sentido.",
        "***Needn't have*** (no era necesario, pero lo hice) y ***should have known better*** (debí saberlo) son clásicos del arrepentimiento."
      ],
      "en": [
        "May well and might well mean very probably: Prices may well rise again next year.",
        "Might as well means there's no better option: The bus isn't coming. We might as well walk.",
        "Could hardly means almost couldn't: I could hardly breathe.",
        "I can't help laughing. I couldn't care less about fashion."
      ]
    },
    "vocabulario": [
      {
        "en": "may well rise",
        "es": "es muy probable que suban",
        "imagen": "Gráfica con tendencia al alza",
        "ejemplo": [
          "Prices may well rise again next year.",
          "Es muy probable que los precios vuelvan a subir el próximo año."
        ]
      },
      {
        "en": "She may well be right.",
        "es": "puede que tenga toda la razón",
        "imagen": "Persona pensativa asintiendo ante otra",
        "ejemplo": [
          "Don't dismiss her idea. She may well be right.",
          "No descartes su idea. Puede que tenga toda la razón."
        ]
      },
      {
        "en": "We might as well walk.",
        "es": "mejor caminamos",
        "imagen": "Personas en una parada vacía empezando a caminar",
        "ejemplo": [
          "The bus isn't coming. We might as well walk.",
          "El camión no viene. Mejor caminamos."
        ]
      },
      {
        "en": "You may as well tell her.",
        "es": "más vale que le digas",
        "imagen": "Persona animando a otra a hablar",
        "ejemplo": [
          "She'll find out anyway. You may as well tell her.",
          "Se va a enterar de todos modos. Más vale que le digas."
        ]
      },
      {
        "en": "I could hardly breathe.",
        "es": "casi no podía respirar",
        "imagen": "Persona agotada en la cima de una montaña alta",
        "ejemplo": [
          "At the top of the mountain, I could hardly breathe.",
          "En la cima de la montaña casi no podía respirar."
        ]
      },
      {
        "en": "I could hardly hear him.",
        "es": "casi no lo oía",
        "imagen": "Persona en un concierto ruidoso tapándose una oreja",
        "ejemplo": [
          "The music was so loud I could hardly hear him.",
          "La música estaba tan fuerte que casi no lo oía."
        ]
      },
      {
        "en": "You can't possibly",
        "es": "es imposible que",
        "imagen": "Persona con una montaña de trabajo en el escritorio",
        "ejemplo": [
          "You can't possibly finish all that today!",
          "¡Es imposible que termines todo eso hoy!"
        ]
      },
      {
        "en": "I can't help laughing.",
        "es": "no puedo evitar reírme",
        "imagen": "Persona riéndose sin control en una junta seria",
        "ejemplo": [
          "Sorry, I can't help laughing at his jokes.",
          "Perdón, no puedo evitar reírme de sus chistes."
        ]
      },
      {
        "en": "I couldn't care less.",
        "es": "me importa un comino",
        "imagen": "Persona encogiéndose de hombros con indiferencia",
        "ejemplo": [
          "I couldn't care less about celebrity gossip.",
          "Me importa un comino el chisme de famosos."
        ]
      },
      {
        "en": "I should have known better.",
        "es": "debí ser más listo",
        "imagen": "Persona dándose una palmada en la frente",
        "ejemplo": [
          "I trusted him again. I should have known better.",
          "Volví a confiar en él. Debí ser más listo."
        ]
      },
      {
        "en": "I'd sooner walk.",
        "es": "prefiero caminar",
        "imagen": "Persona caminando junto a un taxi caro",
        "ejemplo": [
          "I'd sooner walk than pay that much for a taxi.",
          "Prefiero caminar que pagar tanto por un taxi."
        ]
      },
      {
        "en": "could well be",
        "es": "bien podría ser",
        "imagen": "Persona examinando una pintura antigua con lupa",
        "ejemplo": [
          "This painting could well be an original.",
          "Esta pintura bien podría ser original."
        ]
      },
      {
        "en": "might well have",
        "es": "bien pudo haber",
        "imagen": "Detective analizando una escena",
        "ejemplo": [
          "The thief might well have entered through the roof.",
          "El ladrón bien pudo haber entrado por el techo."
        ]
      },
      {
        "en": "I can hardly wait",
        "es": "casi no puedo esperar",
        "imagen": "Niño emocionado contando los días para Navidad",
        "ejemplo": [
          "I can hardly wait for the holidays!",
          "¡Casi no puedo esperar las vacaciones!"
        ]
      },
      {
        "en": "There's no way",
        "es": "no hay manera",
        "imagen": "Persona negando con firmeza",
        "ejemplo": [
          "There's no way I'm going to eat that.",
          "No hay manera de que me coma eso."
        ]
      },
      {
        "en": "You might want to",
        "es": "tal vez quieras",
        "imagen": "Persona sugiriendo algo con amabilidad",
        "ejemplo": [
          "You might want to check your email.",
          "Tal vez quieras revisar tu correo."
        ]
      }
    ],
    "grupos": [
      {
        "id": "actitud",
        "titulo": "Actitudes",
        "icono": "🤷",
        "patron": [
          "I couldn't care less.",
          "I can't help it.",
          "I might as well…"
        ],
        "palabras": [
          {
            "en": "I can't help it",
            "es": "no lo puedo evitar",
            "imagen": "Persona comiendo chocolate con culpa",
            "ejemplo": [
              "I know chocolate is bad for me, but I can't help it.",
              "Sé que el chocolate me hace daño, pero no lo puedo evitar."
            ]
          },
          {
            "en": "I can't stand",
            "es": "no soporto",
            "imagen": "Persona tapándose los oídos",
            "ejemplo": [
              "I can't stand people who talk during movies.",
              "No soporto a la gente que habla en el cine."
            ]
          },
          {
            "en": "I can't be bothered",
            "es": "me da flojera",
            "imagen": "Persona tirada en el sofá con el control",
            "ejemplo": [
              "I can't be bothered to cook tonight.",
              "Me da flojera cocinar hoy."
            ]
          },
          {
            "en": "I wouldn't dream of it",
            "es": "ni se me ocurriría",
            "imagen": "Persona negando horrorizada",
            "ejemplo": [
              "Lie to my mother? I wouldn't dream of it!",
              "¿Mentirle a mi mamá? ¡Ni se me ocurriría!"
            ]
          },
          {
            "en": "You may as well",
            "es": "más vale que",
            "imagen": "Persona aceptando una situación con resignación",
            "ejemplo": [
              "You may as well sit down. The meeting will be long.",
              "Más vale que te sientes. La junta va a ser larga."
            ]
          },
          {
            "en": "I'd rather not",
            "es": "preferiría no",
            "imagen": "Persona rechazando una invitación con amabilidad",
            "ejemplo": [
              "Thanks, but I'd rather not go out tonight.",
              "Gracias, pero preferiría no salir hoy."
            ]
          }
        ]
      },
      {
        "id": "probabilidad",
        "titulo": "Grados de probabilidad",
        "icono": "🎲",
        "patron": [
          "is bound to",
          "may well",
          "is unlikely to"
        ],
        "palabras": [
          {
            "en": "is bound to",
            "es": "seguro que va a",
            "imagen": "Nubes negras sobre la ciudad",
            "ejemplo": [
              "It's bound to rain this afternoon.",
              "Seguro que llueve esta tarde."
            ]
          },
          {
            "en": "is likely to",
            "es": "es probable que",
            "imagen": "Pronóstico con alta probabilidad",
            "ejemplo": [
              "The team is likely to win the league.",
              "Es probable que el equipo gane la liga."
            ]
          },
          {
            "en": "is unlikely to",
            "es": "es poco probable que",
            "imagen": "Persona dudando de un resultado",
            "ejemplo": [
              "He's unlikely to accept the offer.",
              "Es poco probable que acepte la oferta."
            ]
          },
          {
            "en": "in all likelihood",
            "es": "con toda probabilidad",
            "imagen": "Gráfica con una predicción clara",
            "ejemplo": [
              "In all likelihood, the project will be approved.",
              "Con toda probabilidad, el proyecto será aprobado."
            ]
          },
          {
            "en": "there's a good chance",
            "es": "hay buenas posibilidades",
            "imagen": "Persona cruzando los dedos con optimismo",
            "ejemplo": [
              "There's a good chance we'll finish early.",
              "Hay buenas posibilidades de que terminemos temprano."
            ]
          },
          {
            "en": "it's highly doubtful",
            "es": "es muy dudoso",
            "imagen": "Persona escéptica con los brazos cruzados",
            "ejemplo": [
              "It's highly doubtful that they'll arrive on time.",
              "Es muy dudoso que lleguen a tiempo."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Prices may well rise again next year.",
        "es": "Es muy probable que los precios vuelvan a subir el próximo año."
      },
      {
        "en": "The bus isn't coming. We might as well walk.",
        "es": "El camión no viene. Mejor caminamos."
      },
      {
        "en": "At the top of the mountain, I could hardly breathe.",
        "es": "En la cima de la montaña casi no podía respirar."
      },
      {
        "en": "You can't possibly finish all that today!",
        "es": "¡Es imposible que termines todo eso hoy!"
      },
      {
        "en": "Sorry, I can't help laughing at his jokes.",
        "es": "Perdón, no puedo evitar reírme de sus chistes."
      },
      {
        "en": "I couldn't care less about celebrity gossip.",
        "es": "Me importa un comino el chisme de famosos."
      },
      {
        "en": "I trusted him again. I should have known better.",
        "es": "Volví a confiar en él. Debí ser más listo."
      },
      {
        "en": "I'd sooner walk than pay that much for a taxi.",
        "es": "Prefiero caminar que pagar tanto por un taxi."
      },
      {
        "en": "I can't be bothered to cook tonight.",
        "es": "Me da flojera cocinar hoy."
      },
      {
        "en": "In all likelihood, the project will be approved.",
        "es": "Con toda probabilidad, el proyecto será aprobado."
      }
    ],
    "frases": [
      {
        "en": "Given the current situation, interest rates may well remain high for the rest of the year.",
        "es": "Dada la situación actual, es muy probable que las tasas de interés sigan altas el resto del año.",
        "imagen": "Gráfica financiera en una pantalla de banco"
      },
      {
        "en": "We've already missed the beginning of the film, so we might as well have dinner first.",
        "es": "Ya nos perdimos el inicio de la película, así que mejor cenamos primero.",
        "imagen": "Pareja frente a un cine decidiendo ir a cenar"
      },
      {
        "en": "The noise from the construction site was so loud that I could hardly concentrate on my work.",
        "es": "El ruido de la obra era tan fuerte que casi no me podía concentrar en el trabajo.",
        "imagen": "Persona con audífonos frente a una ventana con una obra"
      },
      {
        "en": "You can't possibly expect me to believe such a ridiculous story.",
        "es": "No puedes esperar que me crea una historia tan ridícula.",
        "imagen": "Persona escéptica escuchando una explicación"
      },
      {
        "en": "I know I should save money, but I can't help buying books whenever I see a bookstore.",
        "es": "Sé que debería ahorrar, pero no puedo evitar comprar libros cada vez que veo una librería.",
        "imagen": "Persona saliendo feliz de una librería con muchos libros"
      },
      {
        "en": "The new manager may well turn out to be the best thing that has happened to the company.",
        "es": "Puede muy bien que el nuevo gerente resulte ser lo mejor que le ha pasado a la empresa.",
        "imagen": "Gerente sonriendo con su nuevo equipo"
      },
      {
        "en": "I'd sooner stay at home with a good book than go to another boring party.",
        "es": "Prefiero quedarme en casa con un buen libro que ir a otra fiesta aburrida.",
        "imagen": "Persona leyendo en un sillón cómodo de noche"
      },
      {
        "en": "You might want to bring a jacket; it can get quite cold in the mountains at night.",
        "es": "Tal vez quieras traer chamarra; en las montañas puede hacer bastante frío de noche.",
        "imagen": "Montañas al atardecer con una cabaña iluminada"
      },
      {
        "en": "She was so excited about the trip that she could hardly sleep the night before.",
        "es": "Estaba tan emocionada por el viaje que casi no pudo dormir la noche anterior.",
        "imagen": "Persona despierta en la cama mirando su maleta lista"
      },
      {
        "en": "There's a good chance that the meeting will be canceled, so you might as well stay home.",
        "es": "Hay buenas posibilidades de que se cancele la junta, así que mejor quédate en casa.",
        "imagen": "Persona trabajando cómodamente desde casa"
      }
    ],
    "listening": [
      {
        "audio": "The shops are all closed. We might as well go home.",
        "pregunta": "¿Qué deciden?",
        "opciones": [
          "Irse a casa",
          "Esperar",
          "Buscar otra tienda",
          "Comprar en línea"
        ]
      },
      {
        "audio": "It was so foggy that I could hardly see the road.",
        "pregunta": "¿Por qué casi no veía?",
        "opciones": [
          "Había mucha neblina",
          "Estaba oscuro",
          "Llovía",
          "Estaba cansado"
        ]
      },
      {
        "audio": "She may well be the best student in the class.",
        "pregunta": "¿Qué dicen de ella?",
        "opciones": [
          "Puede que sea la mejor alumna",
          "Es mala alumna",
          "No estudia",
          "Es nueva"
        ]
      },
      {
        "audio": "I couldn't care less what people think about my clothes.",
        "pregunta": "¿Qué le importa?",
        "opciones": [
          "Nada lo que piensen de su ropa",
          "Mucho la moda",
          "La opinión de su familia",
          "Su imagen"
        ]
      },
      {
        "audio": "You can't possibly drive to Monterrey in three hours. It's too far.",
        "pregunta": "¿Qué dice?",
        "opciones": [
          "Es imposible llegar en tres horas",
          "Es muy cerca",
          "Hay que tomar avión",
          "Hay que salir temprano"
        ]
      }
    ],
    "lectura": {
      "titulo": "Stuck at the airport",
      "texto": "Our flight to Cancun was supposed to leave at seven in the morning, but by ten we were still sitting at the gate. The airline said there was a technical problem, which may well have been true, but nobody told us anything specific. My husband couldn't care less about the delay; he had a book and a coffee. I, on the other hand, could hardly contain my frustration, because we had booked a boat tour for that afternoon. Around noon, the screen changed: Delayed until 4 p.m. Well, I said, we might as well have lunch. In the restaurant, I couldn't help noticing that the prices were outrageous: a sandwich cost almost three hundred pesos! I'd sooner starve than pay that, I told my husband, but in the end, hunger won. We finally arrived in Cancun at eight in the evening, too late for the tour. I should have known better than to book something on the same day as the flight. Next time, we'll leave a whole day free, just in case.",
      "preguntas": [
        {
          "pregunta": "¿A qué hora debía salir el vuelo?",
          "opciones": [
            "A las siete de la mañana",
            "A las diez",
            "A las cuatro",
            "Al mediodía"
          ]
        },
        {
          "pregunta": "¿Cómo reaccionó el esposo al retraso?",
          "opciones": [
            "No le importó nada",
            "Se enojó mucho",
            "Se quejó con la aerolínea",
            "Se fue a casa"
          ]
        },
        {
          "pregunta": "¿Qué le pareció el precio del sándwich?",
          "opciones": [
            "Exagerado",
            "Barato",
            "Normal",
            "No lo vio"
          ]
        },
        {
          "pregunta": "¿Qué hará la próxima vez?",
          "opciones": [
            "Dejar un día libre después del vuelo",
            "Viajar en camión",
            "No viajar",
            "Llevar comida"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con well.",
        "pregunta": "She may ___ be right about that.",
        "respuestas": [
          "well"
        ]
      },
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "There's nothing to do here. We might ___ well leave.",
        "respuestas": [
          "as"
        ]
      },
      {
        "instruccion": "Completa con hardly.",
        "pregunta": "It was so dark I could ___ see anything.",
        "respuestas": [
          "hardly",
          "barely",
          "scarcely"
        ]
      },
      {
        "instruccion": "Completa con -ing.",
        "pregunta": "I can't help ___ (worry) about my son.",
        "respuestas": [
          "worrying"
        ]
      },
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "I couldn't care ___ about football.",
        "respuestas": [
          "less"
        ]
      },
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "I should have known ___.",
        "respuestas": [
          "better"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Mejor nos vamos (no hay nada más que hacer).",
        "respuestas": [
          "We might as well go",
          "We may as well go",
          "We might as well leave",
          "We may as well leave"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Casi no podía respirar.",
        "respuestas": [
          "I could hardly breathe",
          "I could barely breathe"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "No puedo evitar reírme.",
        "respuestas": [
          "I can't help laughing",
          "I cannot help laughing"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I couldn't hardly hear you.",
        "respuestas": [
          "I could hardly hear you",
          "I couldn't hear you"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "The train is canceled. We ___ take a taxi.",
        "opciones": [
          "might as well",
          "may well",
          "can't help",
          "could hardly"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "He ___ be the best player in the country. (muy probable)",
        "opciones": [
          "may well",
          "might as well",
          "can't help",
          "could hardly"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I was so tired I ___ keep my eyes open.",
        "opciones": [
          "could hardly",
          "couldn't hardly",
          "might as well",
          "may well"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I can't help ___ when I see that video.",
        "opciones": [
          "laughing",
          "laugh",
          "to laugh",
          "laughed"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«I couldn't care less» significa:",
        "opciones": [
          "Me importa un comino",
          "Me importa mucho",
          "No me importa un poco",
          "Me preocupa"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«You can't possibly mean that!» expresa:",
        "opciones": [
          "Incredulidad",
          "Acuerdo",
          "Pregunta neutral",
          "Permiso"
        ]
      },
      {
        "tipo": "listening",
        "audio": "In all likelihood, the new law will be approved next week.",
        "pregunta": "¿Qué pasará probablemente?",
        "opciones": [
          "Aprobarán la ley",
          "Rechazarán la ley",
          "Habrá elecciones",
          "Nada"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I can't be bothered to go to the gym today. I'll go tomorrow.",
        "pregunta": "¿Por qué no va al gimnasio?",
        "opciones": [
          "Le da flojera",
          "Está enfermo",
          "Está cerrado",
          "No tiene tiempo"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: debí ser más listo",
        "respuestas": [
          "I should have known better"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: es imposible que termines hoy",
        "respuestas": [
          "You can't possibly finish today",
          "You cannot possibly finish today"
        ]
      }
    ]
  },
  {
    "id": "c2-06",
    "num": 6,
    "titulo": "Construcciones impersonales y pasivas avanzadas",
    "contexto": "Prensa y textos científicos",
    "explicacion": {
      "es": [
        "La prensa y la ciencia usan construcciones **impersonales** para presentar información sin decir quién la afirma. Hay dos formas: ***It is said that…*** (Se dice que…) y ***He is said to…*** (Se dice que él…). *It **is believed that** the painting is fake.* = *The painting **is believed to be** fake.*",
        "Con el sujeto personal, usa ***to + infinitivo*** para el mismo tiempo y ***to have + participio*** para el pasado: *He **is thought to live** in Paris.* (Se cree que vive en París.) *He **is thought to have left** the country.* (Se cree que salió del país.)",
        "Verbos comunes: ***say, believe, think, report, expect, consider, know, claim, estimate, allege***. *The storm **is expected to** reach the coast tonight.* *Thousands **are estimated to have** attended.*",
        "Otras pasivas avanzadas: ***get + participio*** (informal): *He **got fired**.* ***Have / get something done*** (mandar hacer): *I **had my car repaired**.* Pasiva con dos objetos: ***I was given*** *a prize.* Y pasiva de infinitivo: *It **needs to be done** today.*"
      ],
      "tabla": {
        "columnas": [
          "Estructura",
          "Ejemplo",
          "Significado"
        ],
        "filas": [
          [
            "It is said that…",
            "It is said that he's rich.",
            "Se dice que es rico."
          ],
          [
            "is said to + verbo",
            "He is said to be rich.",
            "Se dice que es rico."
          ],
          [
            "is said to have + participio",
            "He is said to have been rich.",
            "Se dice que fue rico."
          ],
          [
            "is expected to",
            "Prices are expected to fall.",
            "Se espera que bajen."
          ],
          [
            "have something done",
            "I had my hair cut.",
            "Me corté el pelo (me lo cortaron)."
          ],
          [
            "be given",
            "She was given an award.",
            "Le dieron un premio."
          ]
        ]
      },
      "ojo": [
        "No mezcles las dos formas: *It is said that he is rich* ✅ o *He is said to be rich* ✅, pero no *He is said that…* ❌.",
        "Pasado: ***to have + participio***. *She is believed **to have written** the letter.* (Se cree que escribió la carta.)",
        "Acción en progreso: ***to be + -ing***. *He is thought **to be hiding** in the mountains.*",
        "***There is said to be…*** = Se dice que hay… *There **is said to be** treasure on the island.*",
        "***Have something done*** indica que **otra persona** hace el trabajo: *I cut my hair* (yo mismo) vs. *I **had** my hair **cut*** (en la estética)."
      ],
      "en": [
        "It is believed that the painting is fake.",
        "The painting is believed to be fake.",
        "He is thought to have left the country.",
        "The storm is expected to reach the coast tonight."
      ]
    },
    "vocabulario": [
      {
        "en": "It is said that",
        "es": "se dice que",
        "imagen": "Personas murmurando en una plaza",
        "ejemplo": [
          "It is said that the old house is haunted.",
          "Se dice que la casa vieja está embrujada."
        ]
      },
      {
        "en": "is believed to be",
        "es": "se cree que es",
        "imagen": "Experto examinando una pintura en un museo",
        "ejemplo": [
          "The painting is believed to be a fake.",
          "Se cree que la pintura es falsa."
        ]
      },
      {
        "en": "is thought to have",
        "es": "se cree que ha",
        "imagen": "Policía revisando un aeropuerto",
        "ejemplo": [
          "The suspect is thought to have left the country.",
          "Se cree que el sospechoso salió del país."
        ]
      },
      {
        "en": "is expected to",
        "es": "se espera que",
        "imagen": "Mapa del clima con una tormenta acercándose",
        "ejemplo": [
          "The storm is expected to reach the coast tonight.",
          "Se espera que la tormenta llegue a la costa esta noche."
        ]
      },
      {
        "en": "is reported to",
        "es": "se informa que",
        "imagen": "Reportero frente a una cámara",
        "ejemplo": [
          "The minister is reported to be considering resignation.",
          "Se informa que el ministro está considerando renunciar."
        ]
      },
      {
        "en": "is estimated to",
        "es": "se calcula que",
        "imagen": "Multitud enorme en un concierto al aire libre",
        "ejemplo": [
          "Thousands are estimated to have attended the concert.",
          "Se calcula que miles asistieron al concierto."
        ]
      },
      {
        "en": "is known to",
        "es": "se sabe que",
        "imagen": "Científica señalando un esquema de una planta",
        "ejemplo": [
          "This plant is known to cure headaches.",
          "Se sabe que esta planta cura dolores de cabeza."
        ]
      },
      {
        "en": "is considered to be",
        "es": "se considera",
        "imagen": "Estatua famosa en un museo",
        "ejemplo": [
          "She is considered to be the best painter of her generation.",
          "Se le considera la mejor pintora de su generación."
        ]
      },
      {
        "en": "is alleged to",
        "es": "presuntamente",
        "imagen": "Juez en un tribunal",
        "ejemplo": [
          "The company is alleged to have hidden the data.",
          "La empresa presuntamente ocultó los datos."
        ]
      },
      {
        "en": "is claimed to",
        "es": "se afirma que",
        "imagen": "Anuncio de un producto milagroso",
        "ejemplo": [
          "The product is claimed to reduce stress.",
          "Se afirma que el producto reduce el estrés."
        ]
      },
      {
        "en": "got fired",
        "es": "lo corrieron",
        "imagen": "Persona saliendo de una oficina con una caja",
        "ejemplo": [
          "He got fired for arriving late every day.",
          "Lo corrieron por llegar tarde todos los días."
        ]
      },
      {
        "en": "had my car repaired",
        "es": "mandé arreglar mi carro",
        "imagen": "Mecánico trabajando en un carro",
        "ejemplo": [
          "I had my car repaired last week.",
          "Mandé arreglar mi carro la semana pasada."
        ]
      },
      {
        "en": "had my hair cut",
        "es": "me cortaron el pelo",
        "imagen": "Persona en una estética",
        "ejemplo": [
          "I had my hair cut yesterday.",
          "Ayer me cortaron el pelo."
        ]
      },
      {
        "en": "was given",
        "es": "le dieron",
        "imagen": "Persona recibiendo un premio en un escenario",
        "ejemplo": [
          "She was given an award for her research.",
          "Le dieron un premio por su investigación."
        ]
      },
      {
        "en": "needs to be done",
        "es": "hay que hacerlo",
        "imagen": "Lista de pendientes en un escritorio",
        "ejemplo": [
          "This report needs to be done by Friday.",
          "Hay que terminar este informe para el viernes."
        ]
      },
      {
        "en": "There is said to be",
        "es": "se dice que hay",
        "imagen": "Isla tropical con un mapa antiguo",
        "ejemplo": [
          "There is said to be treasure on the island.",
          "Se dice que hay un tesoro en la isla."
        ]
      }
    ],
    "grupos": [
      {
        "id": "prensa",
        "titulo": "Lenguaje de la prensa",
        "icono": "📰",
        "patron": [
          "It is reported that…",
          "is said to be",
          "is thought to have"
        ],
        "palabras": [
          {
            "en": "according to sources",
            "es": "según fuentes",
            "imagen": "Periodista hablando por teléfono",
            "ejemplo": [
              "According to sources, the deal is almost done.",
              "Según fuentes, el acuerdo está casi listo."
            ]
          },
          {
            "en": "is understood to",
            "es": "se entiende que",
            "imagen": "Reunión de ejecutivos a puerta cerrada",
            "ejemplo": [
              "The company is understood to be planning layoffs.",
              "Se entiende que la empresa planea despidos."
            ]
          },
          {
            "en": "is feared to",
            "es": "se teme que",
            "imagen": "Rescatistas trabajando tras un derrumbe",
            "ejemplo": [
              "Several people are feared to be trapped.",
              "Se teme que varias personas estén atrapadas."
            ]
          },
          {
            "en": "is rumored to",
            "es": "se rumora que",
            "imagen": "Personas leyendo revistas de chismes",
            "ejemplo": [
              "The singer is rumored to be getting married.",
              "Se rumora que la cantante se va a casar."
            ]
          },
          {
            "en": "was found to",
            "es": "se descubrió que",
            "imagen": "Laboratorio con resultados en la pantalla",
            "ejemplo": [
              "The water was found to contain bacteria.",
              "Se descubrió que el agua tenía bacterias."
            ]
          },
          {
            "en": "is set to",
            "es": "va a",
            "imagen": "Edificio en construcción casi terminado",
            "ejemplo": [
              "The new airport is set to open next year.",
              "El nuevo aeropuerto abrirá el próximo año."
            ]
          }
        ]
      },
      {
        "id": "ciencia",
        "titulo": "Lenguaje científico",
        "icono": "🔬",
        "patron": [
          "It has been shown that…",
          "It was found that…",
          "The samples were analyzed."
        ],
        "palabras": [
          {
            "en": "It has been shown that",
            "es": "se ha demostrado que",
            "imagen": "Científico presentando una gráfica",
            "ejemplo": [
              "It has been shown that exercise improves memory.",
              "Se ha demostrado que el ejercicio mejora la memoria."
            ]
          },
          {
            "en": "It was found that",
            "es": "se encontró que",
            "imagen": "Investigadora leyendo resultados",
            "ejemplo": [
              "It was found that most patients recovered quickly.",
              "Se encontró que la mayoría de los pacientes se recuperó rápido."
            ]
          },
          {
            "en": "were analyzed",
            "es": "fueron analizadas",
            "imagen": "Tubos de ensayo en un laboratorio",
            "ejemplo": [
              "The samples were analyzed in a lab in Mexico City.",
              "Las muestras se analizaron en un laboratorio de la Ciudad de México."
            ]
          },
          {
            "en": "It is assumed that",
            "es": "se supone que",
            "imagen": "Pizarrón con fórmulas",
            "ejemplo": [
              "It is assumed that the results are accurate.",
              "Se supone que los resultados son precisos."
            ]
          },
          {
            "en": "was carried out",
            "es": "se llevó a cabo",
            "imagen": "Equipo de científicos en una selva",
            "ejemplo": [
              "The study was carried out over five years.",
              "El estudio se llevó a cabo durante cinco años."
            ]
          },
          {
            "en": "It should be noted that",
            "es": "cabe señalar que",
            "imagen": "Documento científico con notas al margen",
            "ejemplo": [
              "It should be noted that the sample was small.",
              "Cabe señalar que la muestra era pequeña."
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
        "en": "The painting is believed to be a fake.",
        "es": "Se cree que la pintura es falsa."
      },
      {
        "en": "The suspect is thought to have left the country.",
        "es": "Se cree que el sospechoso salió del país."
      },
      {
        "en": "The storm is expected to reach the coast tonight.",
        "es": "Se espera que la tormenta llegue a la costa esta noche."
      },
      {
        "en": "Thousands are estimated to have attended the concert.",
        "es": "Se calcula que miles asistieron al concierto."
      },
      {
        "en": "The company is alleged to have hidden the data.",
        "es": "La empresa presuntamente ocultó los datos."
      },
      {
        "en": "He got fired for arriving late every day.",
        "es": "Lo corrieron por llegar tarde todos los días."
      },
      {
        "en": "I had my car repaired last week.",
        "es": "Mandé arreglar mi carro la semana pasada."
      },
      {
        "en": "She was given an award for her research.",
        "es": "Le dieron un premio por su investigación."
      },
      {
        "en": "There is said to be treasure on the island.",
        "es": "Se dice que hay un tesoro en la isla."
      }
    ],
    "frases": [
      {
        "en": "The ancient city of Teotihuacan is believed to have had more than one hundred thousand inhabitants.",
        "es": "Se cree que la antigua ciudad de Teotihuacan tuvo más de cien mil habitantes.",
        "imagen": "Pirámides de Teotihuacan al amanecer"
      },
      {
        "en": "The new vaccine is expected to be available to the public by the end of the year.",
        "es": "Se espera que la nueva vacuna esté disponible para el público a finales de año.",
        "imagen": "Laboratorio con frascos de vacunas"
      },
      {
        "en": "The missing hikers are thought to have taken shelter in a cave during the storm.",
        "es": "Se cree que los excursionistas desaparecidos se refugiaron en una cueva durante la tormenta.",
        "imagen": "Montaña con una cueva bajo la lluvia"
      },
      {
        "en": "It has been shown that people who sleep less than six hours a night are more likely to get sick.",
        "es": "Se ha demostrado que quienes duermen menos de seis horas por noche se enferman con más frecuencia.",
        "imagen": "Persona cansada mirando el reloj en la noche"
      },
      {
        "en": "The former mayor is alleged to have accepted money from a construction company.",
        "es": "El exalcalde presuntamente aceptó dinero de una constructora.",
        "imagen": "Edificio de gobierno con reporteros afuera"
      },
      {
        "en": "The famous chef is rumored to be opening a new restaurant in Oaxaca.",
        "es": "Se rumora que el famoso chef abrirá un nuevo restaurante en Oaxaca.",
        "imagen": "Cocina de restaurante con un chef emplatando"
      },
      {
        "en": "We had the whole house painted before we moved in.",
        "es": "Mandamos pintar toda la casa antes de mudarnos.",
        "imagen": "Pintores trabajando en una casa vacía"
      },
      {
        "en": "The study was carried out with more than two thousand volunteers from five countries.",
        "es": "El estudio se llevó a cabo con más de dos mil voluntarios de cinco países.",
        "imagen": "Grupo grande de voluntarios en un centro de investigación"
      },
      {
        "en": "The bridge is said to be the oldest in the region, although nobody knows exactly when it was built.",
        "es": "Se dice que el puente es el más antiguo de la región, aunque nadie sabe exactamente cuándo se construyó.",
        "imagen": "Puente de piedra antiguo sobre un río"
      },
      {
        "en": "Several people are feared to have been injured in the earthquake.",
        "es": "Se teme que varias personas hayan resultado heridas en el sismo.",
        "imagen": "Rescatistas revisando edificios tras un sismo"
      }
    ],
    "listening": [
      {
        "audio": "The new stadium is expected to open in March.",
        "pregunta": "¿Cuándo se espera que abra el estadio?",
        "opciones": [
          "En marzo",
          "En mayo",
          "Ya abrió",
          "No se sabe"
        ]
      },
      {
        "audio": "The thief is thought to have escaped through a window.",
        "pregunta": "¿Por dónde se cree que escapó el ladrón?",
        "opciones": [
          "Por una ventana",
          "Por la puerta",
          "Por el techo",
          "Por el sótano"
        ]
      },
      {
        "audio": "It is said that the lake has no bottom.",
        "pregunta": "¿Qué se dice del lago?",
        "opciones": [
          "Que no tiene fondo",
          "Que está contaminado",
          "Que es muy pequeño",
          "Que tiene peces raros"
        ]
      },
      {
        "audio": "I had my phone screen replaced this morning.",
        "pregunta": "¿Qué hizo esta mañana?",
        "opciones": [
          "Mandó cambiar la pantalla del teléfono",
          "Compró un teléfono",
          "Rompió su teléfono",
          "Cambió la pantalla él mismo"
        ]
      },
      {
        "audio": "Over fifty thousand people are estimated to have joined the march.",
        "pregunta": "¿Cuántas personas se calcula que fueron a la marcha?",
        "opciones": [
          "Más de cincuenta mil",
          "Cinco mil",
          "Quince mil",
          "Quinientas"
        ]
      }
    ],
    "lectura": {
      "titulo": "The mystery of the sunken ship",
      "texto": "A wooden ship discovered last month off the coast of Yucatan is believed to be more than three hundred years old. According to the team of divers who found it, the vessel is thought to have sunk during a hurricane in the early seventeen hundreds. Local legends had long claimed that a Spanish ship carrying silver was lost in the area, and the wreck is now said to match the descriptions in old documents. So far, no silver has been recovered, but several bronze objects and pieces of pottery have been brought to the surface. The objects were analyzed by experts at a university laboratory, and it was found that some of the pottery came from Asia, which suggests that the ship had traveled along the trade route between Manila and Acapulco. The site is expected to be protected by the government, and further excavations are set to begin next spring. Treasure hunters have been warned that anyone caught removing objects will be prosecuted.",
      "preguntas": [
        {
          "pregunta": "¿Qué edad se cree que tiene el barco?",
          "opciones": [
            "Más de trescientos años",
            "Cien años",
            "Cincuenta años",
            "Mil años"
          ]
        },
        {
          "pregunta": "¿Cómo se cree que se hundió?",
          "opciones": [
            "Durante un huracán",
            "Por un ataque pirata",
            "Por un incendio",
            "Chocó con una roca"
          ]
        },
        {
          "pregunta": "¿Qué se descubrió de la cerámica?",
          "opciones": [
            "Parte venía de Asia",
            "Era de oro",
            "Era moderna",
            "Venía de Europa"
          ]
        },
        {
          "pregunta": "¿Cuándo comenzarán nuevas excavaciones?",
          "opciones": [
            "La próxima primavera",
            "Mañana",
            "En diez años",
            "Nunca"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con la forma correcta.",
        "pregunta": "He is said ___ (be) very rich.",
        "respuestas": [
          "to be"
        ]
      },
      {
        "instruccion": "Completa con la forma de pasado.",
        "pregunta": "She is believed ___ (write) the letter herself.",
        "respuestas": [
          "to have written"
        ]
      },
      {
        "instruccion": "Completa con la forma progresiva.",
        "pregunta": "He is thought ___ (hide) in the mountains right now.",
        "respuestas": [
          "to be hiding"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "It ___ said that the castle is haunted.",
        "respuestas": [
          "is"
        ]
      },
      {
        "instruccion": "Completa con had.",
        "pregunta": "I ___ my car washed yesterday.",
        "respuestas": [
          "had",
          "got"
        ]
      },
      {
        "instruccion": "Completa con el participio.",
        "pregunta": "She was ___ (give) a prize for her work.",
        "respuestas": [
          "given"
        ]
      },
      {
        "instruccion": "Transforma: It is believed that he lives in Paris.",
        "pregunta": "He is believed ___ in Paris.",
        "respuestas": [
          "to live"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Se espera que los precios bajen.",
        "respuestas": [
          "Prices are expected to fall",
          "Prices are expected to go down",
          "It is expected that prices will fall",
          "Prices are expected to drop"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Ayer me cortaron el pelo.",
        "respuestas": [
          "I had my hair cut yesterday",
          "Yesterday I had my hair cut",
          "I got my hair cut yesterday"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "He is said that he is a genius.",
        "respuestas": [
          "He is said to be a genius",
          "It is said that he is a genius"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "The minister is reported ___ the country yesterday.",
        "opciones": [
          "to have left",
          "to leave",
          "leaving",
          "that he left"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ is said that the bridge is unsafe.",
        "opciones": [
          "It",
          "He",
          "There",
          "This"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The painting is believed ___ by a famous artist.",
        "opciones": [
          "to have been painted",
          "to have painted",
          "painting",
          "that painted"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I need to ___ my computer repaired.",
        "opciones": [
          "have",
          "make",
          "do",
          "let"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«The company is alleged to have lied» significa:",
        "opciones": [
          "La empresa presuntamente mintió",
          "La empresa mintió, está probado",
          "La empresa nunca miente",
          "La empresa va a mentir"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "There ___ to be gold in those hills.",
        "opciones": [
          "is said",
          "says",
          "is saying",
          "said"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The president is expected to announce the new plan tomorrow.",
        "pregunta": "¿Qué se espera?",
        "opciones": [
          "Que el presidente anuncie el plan mañana",
          "Que renuncie",
          "Que viaje",
          "Que cancele el plan"
        ]
      },
      {
        "tipo": "listening",
        "audio": "It has been shown that drinking water improves concentration.",
        "pregunta": "¿Qué se ha demostrado?",
        "opciones": [
          "Que tomar agua mejora la concentración",
          "Que el café es malo",
          "Que dormir es importante",
          "Que el agua engorda"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: se cree que es falsa",
        "respuestas": [
          "It is believed to be fake",
          "It is believed to be false",
          "It is believed that it is fake",
          "It's believed to be fake"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: le dieron un premio",
        "respuestas": [
          "She was given a prize",
          "He was given a prize",
          "She was given an award",
          "He was given an award"
        ]
      }
    ]
  },
  {
    "id": "c2-07",
    "num": 7,
    "titulo": "Oraciones sustantivas (whoever, whatever, the fact that…)",
    "contexto": "Ideas abstractas",
    "explicacion": {
      "es": [
        "Una **oración sustantiva** funciona como un sustantivo: puede ser sujeto u objeto. *[**What she said**] surprised me.* (Lo que dijo me sorprendió.) *I know [**that you're right**].*",
        "***What*** = lo que: *What I need is a holiday.* ***Whoever*** = quien sea que: *Whoever finishes first wins.* ***Whatever*** = lo que sea: *You can eat whatever you want.* ***Wherever / whenever / however*** = donde / cuando / como sea.",
        "***The fact that*** introduce un hecho como sujeto u objeto: ***The fact that** he lied makes it worse.* (El hecho de que mintiera lo empeora.) Después de preposición se usa siempre: *Despite **the fact that** it rained…*",
        "***Whether*** = si (dudas o alternativas): ***Whether** we go or not depends on the weather.* Al inicio de la oración se usa *whether*, no *if*. Y las preguntas indirectas llevan **orden de afirmación**: *I wonder **where she is**.* (no *where is she*)."
      ],
      "tabla": {
        "columnas": [
          "Palabra",
          "Significado",
          "Ejemplo"
        ],
        "filas": [
          [
            "what",
            "lo que",
            "What matters is your health."
          ],
          [
            "whoever",
            "quien sea que",
            "Whoever called left no message."
          ],
          [
            "whatever",
            "lo que sea",
            "Do whatever you think is best."
          ],
          [
            "the fact that",
            "el hecho de que",
            "The fact that she won surprised us."
          ],
          [
            "whether",
            "si",
            "Whether he comes is up to him."
          ],
          [
            "how / why / where",
            "cómo / por qué / dónde",
            "Why he left is a mystery."
          ]
        ]
      },
      "ojo": [
        "Orden de afirmación en preguntas indirectas: *I don't know **what time it is*** ✅ (no *what time is it* ❌).",
        "Al inicio usa ***whether***, no *if*: ***Whether** it's true is another question.*",
        "Una oración sustantiva como sujeto lleva el verbo en **singular**: *What we need **is** more time.*",
        "***Whatever*** también expresa indiferencia informal: *Whatever!* (¡Lo que sea! / ¡Me da igual!)",
        "Con *-ever* puedes poner énfasis: ***However hard** I try, I can't do it.* (Por más que lo intento, no puedo.)"
      ],
      "en": [
        "What I need is a holiday.",
        "Whoever finishes first wins.",
        "The fact that he lied makes it worse.",
        "Whether we go or not depends on the weather."
      ]
    },
    "vocabulario": [
      {
        "en": "What I need is",
        "es": "lo que necesito es",
        "imagen": "Persona agotada mirando una playa en su computadora",
        "ejemplo": [
          "What I need is a long holiday.",
          "Lo que necesito es unas vacaciones largas."
        ]
      },
      {
        "en": "What matters is",
        "es": "lo que importa es",
        "imagen": "Familia abrazándose en un hospital",
        "ejemplo": [
          "What matters is that everyone is safe.",
          "Lo que importa es que todos estén a salvo."
        ]
      },
      {
        "en": "Whoever",
        "es": "quien sea que",
        "imagen": "Corredores en la línea de salida",
        "ejemplo": [
          "Whoever finishes first wins a medal.",
          "Quien termine primero gana una medalla."
        ]
      },
      {
        "en": "Whatever",
        "es": "lo que sea",
        "imagen": "Mesa llena de comida variada",
        "ejemplo": [
          "You can order whatever you want.",
          "Puedes pedir lo que quieras."
        ]
      },
      {
        "en": "Wherever",
        "es": "donde sea",
        "imagen": "Persona con mochila mirando un mapa del mundo",
        "ejemplo": [
          "I'll follow you wherever you go.",
          "Te seguiré a donde vayas."
        ]
      },
      {
        "en": "Whenever",
        "es": "cuando sea",
        "imagen": "Persona abriendo la puerta a un amigo",
        "ejemplo": [
          "Come and visit whenever you like.",
          "Ven a visitarnos cuando quieras."
        ]
      },
      {
        "en": "However hard",
        "es": "por más que",
        "imagen": "Persona intentando abrir un frasco",
        "ejemplo": [
          "However hard I try, I can't open this jar.",
          "Por más que lo intento, no puedo abrir este frasco."
        ]
      },
      {
        "en": "The fact that",
        "es": "el hecho de que",
        "imagen": "Persona leyendo un mensaje con decepción",
        "ejemplo": [
          "The fact that he lied makes it worse.",
          "El hecho de que mintiera lo empeora."
        ]
      },
      {
        "en": "Whether",
        "es": "si",
        "imagen": "Persona mirando nubes antes de un día de campo",
        "ejemplo": [
          "Whether we go depends on the weather.",
          "Si vamos o no depende del clima."
        ]
      },
      {
        "en": "Why he left",
        "es": "por qué se fue",
        "imagen": "Escritorio vacío en una oficina",
        "ejemplo": [
          "Why he left is still a mystery.",
          "Por qué se fue sigue siendo un misterio."
        ]
      },
      {
        "en": "How she did it",
        "es": "cómo lo hizo",
        "imagen": "Mago haciendo un truco frente a un público",
        "ejemplo": [
          "How she did it, nobody knows.",
          "Cómo lo hizo, nadie lo sabe."
        ]
      },
      {
        "en": "I wonder where",
        "es": "me pregunto dónde",
        "imagen": "Persona buscando sus llaves por toda la casa",
        "ejemplo": [
          "I wonder where I left my keys.",
          "Me pregunto dónde dejé mis llaves."
        ]
      },
      {
        "en": "It depends on what",
        "es": "depende de lo que",
        "imagen": "Persona eligiendo entre dos caminos",
        "ejemplo": [
          "It depends on what you want to achieve.",
          "Depende de lo que quieras lograr."
        ]
      },
      {
        "en": "That he survived",
        "es": "que sobreviviera",
        "imagen": "Rescatista ayudando a un alpinista",
        "ejemplo": [
          "That he survived the fall is a miracle.",
          "Que sobreviviera a la caída es un milagro."
        ]
      },
      {
        "en": "is beside the point",
        "es": "no viene al caso",
        "imagen": "Persona interrumpiendo una discusión",
        "ejemplo": [
          "Who started it is beside the point.",
          "Quién empezó no viene al caso."
        ]
      },
      {
        "en": "remains to be seen",
        "es": "está por verse",
        "imagen": "Persona mirando un horizonte incierto",
        "ejemplo": [
          "Whether the plan will work remains to be seen.",
          "Está por verse si el plan funcionará."
        ]
      }
    ],
    "grupos": [
      {
        "id": "ever",
        "titulo": "Palabras con -ever",
        "icono": "♾️",
        "patron": [
          "Whoever you are",
          "Whatever happens",
          "Wherever you go"
        ],
        "palabras": [
          {
            "en": "whatever happens",
            "es": "pase lo que pase",
            "imagen": "Pareja tomada de la mano bajo la tormenta",
            "ejemplo": [
              "Whatever happens, I'll be there for you.",
              "Pase lo que pase, estaré ahí para ti."
            ]
          },
          {
            "en": "whoever you are",
            "es": "seas quien seas",
            "imagen": "Puerta abierta con un letrero de bienvenida",
            "ejemplo": [
              "Whoever you are, you are welcome here.",
              "Seas quien seas, aquí eres bienvenido."
            ]
          },
          {
            "en": "wherever you go",
            "es": "vayas a donde vayas",
            "imagen": "Viajero con maleta en una estación",
            "ejemplo": [
              "Wherever you go, take this map.",
              "Vayas a donde vayas, lleva este mapa."
            ]
          },
          {
            "en": "whichever you prefer",
            "es": "el que prefieras",
            "imagen": "Dos pasteles distintos en una mesa",
            "ejemplo": [
              "Take whichever you prefer.",
              "Toma el que prefieras."
            ]
          },
          {
            "en": "whenever possible",
            "es": "siempre que sea posible",
            "imagen": "Persona subiendo escaleras en vez de usar el elevador",
            "ejemplo": [
              "I take the stairs whenever possible.",
              "Subo por las escaleras siempre que puedo."
            ]
          },
          {
            "en": "however you like",
            "es": "como quieras",
            "imagen": "Persona decorando un pastel con libertad",
            "ejemplo": [
              "Decorate it however you like.",
              "Decóralo como quieras."
            ]
          }
        ]
      },
      {
        "id": "abstractas",
        "titulo": "Ideas abstractas",
        "icono": "💭",
        "patron": [
          "The fact that…",
          "What surprises me is…",
          "The question is whether…"
        ],
        "palabras": [
          {
            "en": "The question is whether",
            "es": "la pregunta es si",
            "imagen": "Personas debatiendo alrededor de una mesa",
            "ejemplo": [
              "The question is whether we can afford it.",
              "La pregunta es si nos alcanza."
            ]
          },
          {
            "en": "What surprises me is",
            "es": "lo que me sorprende es",
            "imagen": "Persona con cara de asombro leyendo noticias",
            "ejemplo": [
              "What surprises me is how quickly it happened.",
              "Lo que me sorprende es lo rápido que pasó."
            ]
          },
          {
            "en": "It's no wonder that",
            "es": "no es de extrañar que",
            "imagen": "Persona cansada tras una semana de trabajo",
            "ejemplo": [
              "It's no wonder that you're tired.",
              "No es de extrañar que estés cansado."
            ]
          },
          {
            "en": "The truth is that",
            "es": "la verdad es que",
            "imagen": "Persona hablando con sinceridad",
            "ejemplo": [
              "The truth is that I forgot.",
              "La verdad es que se me olvidó."
            ]
          },
          {
            "en": "The problem is that",
            "es": "el problema es que",
            "imagen": "Persona frente a una llanta ponchada",
            "ejemplo": [
              "The problem is that we don't have a spare tire.",
              "El problema es que no tenemos llanta de refacción."
            ]
          },
          {
            "en": "The reason why",
            "es": "la razón por la que",
            "imagen": "Persona señalando un letrero de cerrado",
            "ejemplo": [
              "The reason why I'm late is the traffic.",
              "La razón por la que llego tarde es el tráfico."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "What I need is a long holiday.",
        "es": "Lo que necesito es unas vacaciones largas."
      },
      {
        "en": "Whoever finishes first wins a medal.",
        "es": "Quien termine primero gana una medalla."
      },
      {
        "en": "You can order whatever you want.",
        "es": "Puedes pedir lo que quieras."
      },
      {
        "en": "However hard I try, I can't open this jar.",
        "es": "Por más que lo intento, no puedo abrir este frasco."
      },
      {
        "en": "The fact that he lied makes it worse.",
        "es": "El hecho de que mintiera lo empeora."
      },
      {
        "en": "Whether we go depends on the weather.",
        "es": "Si vamos o no depende del clima."
      },
      {
        "en": "Why he left is still a mystery.",
        "es": "Por qué se fue sigue siendo un misterio."
      },
      {
        "en": "I wonder where I left my keys.",
        "es": "Me pregunto dónde dejé mis llaves."
      },
      {
        "en": "Who started it is beside the point.",
        "es": "Quién empezó no viene al caso."
      },
      {
        "en": "Whether the plan will work remains to be seen.",
        "es": "Está por verse si el plan funcionará."
      }
    ],
    "frases": [
      {
        "en": "What really impressed me about Oaxaca was the warmth of its people.",
        "es": "Lo que más me impresionó de Oaxaca fue la calidez de su gente.",
        "imagen": "Mercado de Oaxaca con gente sonriendo"
      },
      {
        "en": "Whoever designed this building clearly didn't think about the people who would use it.",
        "es": "Quien haya diseñado este edificio claramente no pensó en la gente que lo usaría.",
        "imagen": "Edificio moderno con escaleras confusas"
      },
      {
        "en": "The fact that she learned three languages before the age of twenty is truly remarkable.",
        "es": "El hecho de que aprendiera tres idiomas antes de los veinte años es realmente notable.",
        "imagen": "Joven estudiando con libros en varios idiomas"
      },
      {
        "en": "Whether or not you agree with him, you have to admit that his arguments are strong.",
        "es": "Estés o no de acuerdo con él, tienes que admitir que sus argumentos son sólidos.",
        "imagen": "Persona dando un discurso en un auditorio"
      },
      {
        "en": "Wherever I travel, I always try the local street food first.",
        "es": "Viaje a donde viaje, siempre pruebo primero la comida callejera local.",
        "imagen": "Puesto de tacos en una calle de noche"
      },
      {
        "en": "How the ancient Maya built such precise calendars still fascinates scientists.",
        "es": "Cómo los antiguos mayas construyeron calendarios tan precisos todavía fascina a los científicos.",
        "imagen": "Piedra maya tallada con símbolos"
      },
      {
        "en": "I can't remember whether I locked the front door or not.",
        "es": "No me acuerdo si cerré la puerta de entrada o no.",
        "imagen": "Persona en el carro mirando hacia su casa con duda"
      },
      {
        "en": "Whatever you decide, make sure it's what you really want.",
        "es": "Decidas lo que decidas, asegúrate de que sea lo que realmente quieres.",
        "imagen": "Persona joven frente a dos caminos en un bosque"
      },
      {
        "en": "The reason why so many people move to big cities is the lack of jobs in rural areas.",
        "es": "La razón por la que tanta gente se muda a las grandes ciudades es la falta de empleo en el campo.",
        "imagen": "Autobús llegando a una gran ciudad"
      },
      {
        "en": "What we don't know about the ocean is far greater than what we do know.",
        "es": "Lo que no sabemos del océano es mucho más que lo que sí sabemos.",
        "imagen": "Buzo en el océano profundo con una linterna"
      }
    ],
    "listening": [
      {
        "audio": "Whoever took my umbrella, please bring it back.",
        "pregunta": "¿Qué pide?",
        "opciones": [
          "Que devuelvan su paraguas",
          "Que le presten un paraguas",
          "Que compren un paraguas",
          "Que no llueva"
        ]
      },
      {
        "audio": "What I love about this city is the food.",
        "pregunta": "¿Qué le encanta de la ciudad?",
        "opciones": [
          "La comida",
          "El clima",
          "La gente",
          "Los museos"
        ]
      },
      {
        "audio": "Whether we travel in June depends on my boss.",
        "pregunta": "¿De qué depende el viaje?",
        "opciones": [
          "De su jefe",
          "Del dinero",
          "Del clima",
          "De su familia"
        ]
      },
      {
        "audio": "The fact that nobody called me is very strange.",
        "pregunta": "¿Qué le parece raro?",
        "opciones": [
          "Que nadie le llamó",
          "Que todos le llamaron",
          "Que no tiene teléfono",
          "Que llegó tarde"
        ]
      },
      {
        "audio": "However tired I am, I always read before bed.",
        "pregunta": "¿Qué hace siempre antes de dormir?",
        "opciones": [
          "Lee",
          "Ve la tele",
          "Hace ejercicio",
          "Cena"
        ]
      }
    ],
    "lectura": {
      "titulo": "What makes us happy?",
      "texto": "For centuries, philosophers have asked what makes a person truly happy. Whether happiness can be measured at all is a question that scientists have only recently started to answer. One of the longest studies on the subject followed hundreds of people for more than eighty years. What the researchers discovered surprised many: it was not money, fame, or success that predicted a happy life, but the quality of people's relationships. The fact that someone had close friends and a supportive family was a better predictor of health in old age than their cholesterol level. Whoever felt lonely, by contrast, tended to have shorter and less healthy lives. Of course, why relationships matter so much is still being debated. Some experts believe that good relationships protect us from stress; others think that people who are already healthy simply find it easier to make friends. Whatever the explanation, the lesson seems clear: whenever you can, invest time in the people you love.",
      "preguntas": [
        {
          "pregunta": "¿Cuánto tiempo duró el estudio?",
          "opciones": [
            "Más de ochenta años",
            "Diez años",
            "Un año",
            "Cien años exactos"
          ]
        },
        {
          "pregunta": "Según el estudio, ¿qué predice una vida feliz?",
          "opciones": [
            "La calidad de las relaciones",
            "El dinero",
            "La fama",
            "El éxito profesional"
          ]
        },
        {
          "pregunta": "¿Qué pasaba con las personas que se sentían solas?",
          "opciones": [
            "Tenían vidas más cortas y menos sanas",
            "Eran más ricas",
            "Vivían más",
            "Eran más famosas"
          ]
        },
        {
          "pregunta": "¿Cuál es el consejo final?",
          "opciones": [
            "Dedicar tiempo a las personas que quieres",
            "Ganar más dinero",
            "Hacer ejercicio",
            "Vivir solo"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con what.",
        "pregunta": "___ I need is a cup of coffee.",
        "respuestas": [
          "What"
        ]
      },
      {
        "instruccion": "Completa con whoever.",
        "pregunta": "___ wins the game gets the prize.",
        "respuestas": [
          "Whoever"
        ]
      },
      {
        "instruccion": "Completa con whatever.",
        "pregunta": "Eat ___ you like.",
        "respuestas": [
          "whatever"
        ]
      },
      {
        "instruccion": "Completa con whether.",
        "pregunta": "___ he comes or not is not important.",
        "respuestas": [
          "Whether"
        ]
      },
      {
        "instruccion": "Completa con fact.",
        "pregunta": "The ___ that she left without saying goodbye hurt me.",
        "respuestas": [
          "fact"
        ]
      },
      {
        "instruccion": "Ordena la pregunta indirecta.",
        "pregunta": "I don't know where ___. (she / lives)",
        "respuestas": [
          "she lives"
        ]
      },
      {
        "instruccion": "Completa con However.",
        "pregunta": "___ hard I study, I always forget the dates.",
        "respuestas": [
          "However"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Lo que importa es tu salud.",
        "respuestas": [
          "What matters is your health"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Pase lo que pase, te ayudaré.",
        "respuestas": [
          "Whatever happens, I'll help you",
          "Whatever happens, I will help you"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I wonder where is the station.",
        "respuestas": [
          "I wonder where the station is"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "___ she said made everyone laugh.",
        "opciones": [
          "What",
          "That",
          "Which",
          "Who"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ we win or lose, we'll have fun.",
        "opciones": [
          "Whether",
          "If",
          "What",
          "That"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ broke the window must pay for it.",
        "opciones": [
          "Whoever",
          "Whatever",
          "Wherever",
          "However"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Do you know what time ___?",
        "opciones": [
          "it is",
          "is it",
          "it's is",
          "is"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Despite ___ it was raining, we went out.",
        "opciones": [
          "the fact that",
          "that",
          "what",
          "whether"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Who started it is beside the point» significa:",
        "opciones": [
          "Quién empezó no viene al caso",
          "Quién empezó es lo más importante",
          "Nadie empezó",
          "Él empezó"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Whatever you do, don't tell my mother.",
        "pregunta": "¿Qué pide?",
        "opciones": [
          "Que no le digan a su mamá",
          "Que le digan a su mamá",
          "Que llamen a su mamá",
          "Que visiten a su mamá"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Why she quit her job remains a mystery to everyone.",
        "pregunta": "¿Qué es un misterio?",
        "opciones": [
          "Por qué renunció",
          "Dónde trabaja",
          "Cuánto gana",
          "Quién es su jefe"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: me pregunto dónde está",
        "respuestas": [
          "I wonder where it is",
          "I wonder where she is",
          "I wonder where he is"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ven cuando quieras",
        "respuestas": [
          "Come whenever you want",
          "Come whenever you like"
        ]
      }
    ]
  },
  {
    "id": "c2-08",
    "num": 8,
    "titulo": "Elipsis avanzada",
    "contexto": "Conversación natural",
    "explicacion": {
      "es": [
        "La **elipsis** consiste en **omitir** palabras que ya se entienden por el contexto. Los hablantes nativos la usan todo el tiempo para no repetir. *I wanted to go, but I couldn't [go].* *She can swim and so can I [swim].*",
        "Se repite solo el **auxiliar**: *“Have you finished?” “Yes, I **have**.”* *He said he'd call, and he **did**.* *I don't like it, but my sister **does**.* Con *to* se deja solo ***to***: *“Do you want to come?” “I'd love **to**.”*",
        "En conversación informal se omite el inicio de la oración: ***Sounds good.*** (It sounds good.) ***Want some coffee?*** (Do you want…?) ***Seen my keys?*** (Have you seen…?) ***Told you so.*** (I told you so.)",
        "Para sustituir se usan ***so*** y ***not***: *“Is it going to rain?” “I **think so**. / I **hope not**.”* Y ***one / ones***: *I don't like the red shirt; I prefer the blue **one**.* También ***do so***, más formal: *He promised to help, and he **did so**.*"
      ],
      "tabla": {
        "columnas": [
          "Tipo",
          "Ejemplo",
          "Se omite"
        ],
        "filas": [
          [
            "Auxiliar",
            "I can't, but she can.",
            "el verbo principal"
          ],
          [
            "Solo to",
            "I'd love to.",
            "el resto del infinitivo"
          ],
          [
            "Inicio omitido",
            "Sounds great.",
            "It"
          ],
          [
            "So / not",
            "I hope so. I'm afraid not.",
            "la oración completa"
          ],
          [
            "One / ones",
            "the blue one",
            "el sustantivo"
          ],
          [
            "Do so",
            "He did so.",
            "la acción ya dicha"
          ]
        ]
      },
      "ojo": [
        "***I think so*** ✅, no *I think it* ❌. ***I don't think so*** es más común que *I think not*.",
        "Con *hope* y *afraid* el negativo es ***not***: *I hope **not**.* *I'm afraid **not**.*",
        "Después de *would like / want / try / need* deja ***to***: *“Will you help?” “I'd like **to**, but I can't.”*",
        "Elipsis de inicio = **informal**. En un correo formal escribe la oración completa.",
        "***Neither / nor*** + auxiliar para el negativo: *“I can't swim.” “**Neither can I**.”*"
      ],
      "en": [
        "Have you finished? Yes, I have.",
        "Do you want to come? I'd love to.",
        "Is it going to rain? I hope not.",
        "I don't like the red shirt. I prefer the blue one."
      ]
    },
    "vocabulario": [
      {
        "en": "I'd love to.",
        "es": "me encantaría",
        "imagen": "Persona aceptando una invitación con alegría",
        "ejemplo": [
          "Do you want to come to the beach? I'd love to.",
          "¿Quieres venir a la playa? Me encantaría."
        ]
      },
      {
        "en": "I think so.",
        "es": "creo que sí",
        "imagen": "Persona asintiendo con una sonrisa",
        "ejemplo": [
          "Is the shop still open? I think so.",
          "¿Sigue abierta la tienda? Creo que sí."
        ]
      },
      {
        "en": "I hope not.",
        "es": "espero que no",
        "imagen": "Persona mirando nubes oscuras",
        "ejemplo": [
          "Is it going to rain? I hope not.",
          "¿Va a llover? Espero que no."
        ]
      },
      {
        "en": "I'm afraid not.",
        "es": "me temo que no",
        "imagen": "Persona negando con amabilidad",
        "ejemplo": [
          "Is there any cake left? I'm afraid not.",
          "¿Queda pastel? Me temo que no."
        ]
      },
      {
        "en": "I suppose so.",
        "es": "supongo que sí",
        "imagen": "Persona encogiéndose de hombros",
        "ejemplo": [
          "Can I borrow your car? I suppose so.",
          "¿Me prestas tu carro? Supongo que sí."
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
        "en": "So do I.",
        "es": "yo también",
        "imagen": "Dos amigos con camisetas del mismo equipo",
        "ejemplo": [
          "I love football. So do I.",
          "Me encanta el fútbol. A mí también."
        ]
      },
      {
        "en": "Sounds good.",
        "es": "suena bien",
        "imagen": "Persona leyendo un mensaje y sonriendo",
        "ejemplo": [
          "Dinner at eight? Sounds good.",
          "¿Cena a las ocho? Suena bien."
        ]
      },
      {
        "en": "Want some?",
        "es": "¿quieres?",
        "imagen": "Persona ofreciendo palomitas",
        "ejemplo": [
          "I made popcorn. Want some?",
          "Hice palomitas. ¿Quieres?"
        ]
      },
      {
        "en": "Seen my keys?",
        "es": "¿has visto mis llaves?",
        "imagen": "Persona buscando en los bolsillos",
        "ejemplo": [
          "Seen my keys anywhere?",
          "¿Has visto mis llaves por algún lado?"
        ]
      },
      {
        "en": "Told you so.",
        "es": "te lo dije",
        "imagen": "Persona con sonrisa de satisfacción",
        "ejemplo": [
          "It rained, just like I said. Told you so.",
          "Llovió, tal como dije. Te lo dije."
        ]
      },
      {
        "en": "the blue one",
        "es": "el azul",
        "imagen": "Dos camisas en un perchero",
        "ejemplo": [
          "I prefer the blue one.",
          "Prefiero la azul."
        ]
      },
      {
        "en": "the old ones",
        "es": "los viejos",
        "imagen": "Tenis viejos junto a unos nuevos",
        "ejemplo": [
          "I'll keep the old ones for the garden.",
          "Me quedo con los viejos para el jardín."
        ]
      },
      {
        "en": "and he did",
        "es": "y lo hizo",
        "imagen": "Persona entregando un paquete prometido",
        "ejemplo": [
          "He said he would come, and he did.",
          "Dijo que vendría, y vino."
        ]
      },
      {
        "en": "but she does",
        "es": "pero ella sí",
        "imagen": "Hermanas comiendo, una feliz y otra no",
        "ejemplo": [
          "I don't like olives, but my sister does.",
          "A mí no me gustan las aceitunas, pero a mi hermana sí."
        ]
      },
      {
        "en": "did so",
        "es": "lo hizo",
        "imagen": "Persona firmando un documento oficial",
        "ejemplo": [
          "He promised to sign the contract and did so the next day.",
          "Prometió firmar el contrato y lo hizo al día siguiente."
        ]
      }
    ],
    "grupos": [
      {
        "id": "respuestas",
        "titulo": "Respuestas cortas",
        "icono": "💬",
        "patron": [
          "Yes, I have.",
          "No, she didn't.",
          "I'd like to."
        ],
        "palabras": [
          {
            "en": "Yes, I have.",
            "es": "sí",
            "imagen": "Persona mostrando un examen terminado",
            "ejemplo": [
              "Have you finished the test? Yes, I have.",
              "¿Terminaste el examen? Sí."
            ]
          },
          {
            "en": "No, she didn't.",
            "es": "no",
            "imagen": "Persona señalando un teléfono sin llamadas",
            "ejemplo": [
              "Did she call you? No, she didn't.",
              "¿Te llamó? No."
            ]
          },
          {
            "en": "I'd like to.",
            "es": "me gustaría",
            "imagen": "Persona mirando un folleto de viaje",
            "ejemplo": [
              "Will you visit Japan? I'd like to.",
              "¿Vas a visitar Japón? Me gustaría."
            ]
          },
          {
            "en": "I used to.",
            "es": "antes sí",
            "imagen": "Persona mirando una guitarra vieja",
            "ejemplo": [
              "Do you play the guitar? I used to.",
              "¿Tocas la guitarra? Antes sí."
            ]
          },
          {
            "en": "I'm trying to.",
            "es": "estoy intentando",
            "imagen": "Persona en una caminadora",
            "ejemplo": [
              "Are you losing weight? I'm trying to.",
              "¿Estás bajando de peso? Lo estoy intentando."
            ]
          },
          {
            "en": "I didn't mean to.",
            "es": "no fue mi intención",
            "imagen": "Persona con un vaso roto en el piso",
            "ejemplo": [
              "You broke it! Sorry, I didn't mean to.",
              "¡Lo rompiste! Perdón, no fue mi intención."
            ]
          }
        ]
      },
      {
        "id": "informal",
        "titulo": "Frases cortas informales",
        "icono": "🗨️",
        "patron": [
          "Sounds great.",
          "Got it.",
          "Want to come?"
        ],
        "palabras": [
          {
            "en": "Got it.",
            "es": "entendido",
            "imagen": "Persona haciendo señal de pulgar arriba",
            "ejemplo": [
              "Meet at the station at six. Got it.",
              "Nos vemos en la estación a las seis. Entendido."
            ]
          },
          {
            "en": "Makes sense.",
            "es": "tiene sentido",
            "imagen": "Persona asintiendo pensativa",
            "ejemplo": [
              "We should leave early to avoid traffic. Makes sense.",
              "Deberíamos salir temprano para evitar el tráfico. Tiene sentido."
            ]
          },
          {
            "en": "Never mind.",
            "es": "no importa",
            "imagen": "Persona haciendo un gesto de olvídalo",
            "ejemplo": [
              "Never mind, I'll do it myself.",
              "No importa, lo hago yo."
            ]
          },
          {
            "en": "Anything else?",
            "es": "¿algo más?",
            "imagen": "Vendedor en una tienda",
            "ejemplo": [
              "Two coffees. Anything else?",
              "Dos cafés. ¿Algo más?"
            ]
          },
          {
            "en": "Coming?",
            "es": "¿vienes?",
            "imagen": "Persona en la puerta con las llaves en la mano",
            "ejemplo": [
              "We're leaving now. Coming?",
              "Ya nos vamos. ¿Vienes?"
            ]
          },
          {
            "en": "Good to know.",
            "es": "qué bueno saberlo",
            "imagen": "Persona tomando una nota mental",
            "ejemplo": [
              "The museum is free on Sundays. Good to know.",
              "El museo es gratis los domingos. Qué bueno saberlo."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Do you want to come to the beach? I'd love to.",
        "es": "¿Quieres venir a la playa? Me encantaría."
      },
      {
        "en": "Is it going to rain? I hope not.",
        "es": "¿Va a llover? Espero que no."
      },
      {
        "en": "Is there any cake left? I'm afraid not.",
        "es": "¿Queda pastel? Me temo que no."
      },
      {
        "en": "I can't swim. Neither can I.",
        "es": "No sé nadar. Yo tampoco."
      },
      {
        "en": "Dinner at eight? Sounds good.",
        "es": "¿Cena a las ocho? Suena bien."
      },
      {
        "en": "I made popcorn. Want some?",
        "es": "Hice palomitas. ¿Quieres?"
      },
      {
        "en": "I prefer the blue one.",
        "es": "Prefiero la azul."
      },
      {
        "en": "He said he would come, and he did.",
        "es": "Dijo que vendría, y vino."
      },
      {
        "en": "I don't like olives, but my sister does.",
        "es": "A mí no me gustan las aceitunas, pero a mi hermana sí."
      },
      {
        "en": "Do you play the guitar? I used to.",
        "es": "¿Tocas la guitarra? Antes sí."
      }
    ],
    "frases": [
      {
        "en": "I wanted to go to the concert, but I couldn't because I had to work.",
        "es": "Quería ir al concierto, pero no pude porque tenía que trabajar.",
        "imagen": "Persona trabajando de noche mirando fotos de un concierto"
      },
      {
        "en": "She said she would finish the project on time, and to everyone's surprise, she did.",
        "es": "Dijo que terminaría el proyecto a tiempo y, para sorpresa de todos, lo hizo.",
        "imagen": "Equipo aplaudiendo a una compañera"
      },
      {
        "en": "My brother can speak four languages, and so can his wife.",
        "es": "Mi hermano habla cuatro idiomas, y su esposa también.",
        "imagen": "Pareja hablando con turistas de varios países"
      },
      {
        "en": "Are you coming to the wedding? I'm not sure yet, but I hope to.",
        "es": "¿Vas a venir a la boda? Todavía no sé, pero espero que sí.",
        "imagen": "Invitación de boda sobre una mesa"
      },
      {
        "en": "I've never been to Japan, but I'd love to someday.",
        "es": "Nunca he ido a Japón, pero me encantaría algún día.",
        "imagen": "Templo japonés entre cerezos en flor"
      },
      {
        "en": "Did you lock the car? I think so, but I'll check again.",
        "es": "¿Cerraste el carro? Creo que sí, pero lo voy a revisar otra vez.",
        "imagen": "Persona regresando a revisar su carro en un estacionamiento"
      },
      {
        "en": "These shoes are too small. Do you have any bigger ones?",
        "es": "Estos zapatos me quedan chicos. ¿Tiene unos más grandes?",
        "imagen": "Cliente probándose zapatos en una tienda"
      },
      {
        "en": "He didn't want to apologize, but in the end he had to.",
        "es": "No quería pedir perdón, pero al final tuvo que hacerlo.",
        "imagen": "Persona pidiendo disculpas a un amigo"
      },
      {
        "en": "Most people expected the team to lose, but it didn't.",
        "es": "La mayoría esperaba que el equipo perdiera, pero no fue así.",
        "imagen": "Afición celebrando en un estadio"
      },
      {
        "en": "Anyone want more coffee? I'm making another pot.",
        "es": "¿Alguien quiere más café? Voy a hacer otra jarra.",
        "imagen": "Cafetera en una cocina con amigos alrededor"
      }
    ],
    "listening": [
      {
        "audio": "Do you want to go hiking on Saturday? I'd love to, but I can't.",
        "pregunta": "¿Va a ir de excursión?",
        "opciones": [
          "No puede",
          "Sí va",
          "No quiere",
          "No sabe"
        ]
      },
      {
        "audio": "I don't eat meat, and neither does my husband.",
        "pregunta": "¿Quién no come carne?",
        "opciones": [
          "Ella y su esposo",
          "Solo ella",
          "Solo su esposo",
          "Nadie"
        ]
      },
      {
        "audio": "Will it be expensive? I'm afraid so.",
        "pregunta": "¿Será caro?",
        "opciones": [
          "Sí, probablemente",
          "No",
          "No se sabe",
          "Es gratis"
        ]
      },
      {
        "audio": "I don't like the big ones. I prefer the small ones.",
        "pregunta": "¿Cuáles prefiere?",
        "opciones": [
          "Los pequeños",
          "Los grandes",
          "Ninguno",
          "Todos"
        ]
      },
      {
        "audio": "He promised to call me, and he did.",
        "pregunta": "¿Llamó?",
        "opciones": [
          "Sí, llamó",
          "No llamó",
          "Va a llamar",
          "Mandó mensaje"
        ]
      }
    ],
    "lectura": {
      "titulo": "A text conversation",
      "texto": "Ana: Free tonight? Diego: Think so. Why? Ana: There's a new taco place near the park. Want to try it? Diego: Sounds great. What time? Ana: Eight? Diego: Can't, I'm afraid. Got a meeting until eight thirty. Nine? Ana: Fine. Should I invite Sofia? Diego: If you want to. Does she like spicy food? Ana: She used to, but not anymore. Diego: Ha, neither do I, to be honest. Ana: Don't worry, they have mild salsas too. Diego: Good to know. Will you book a table? Ana: Already have. Diego: Of course you have. See you at nine, then. Ana: See you. And don't be late! Diego: I won't. Promise.",
      "preguntas": [
        {
          "pregunta": "¿Adónde quiere ir Ana?",
          "opciones": [
            "A un lugar nuevo de tacos",
            "Al cine",
            "Al parque",
            "A una fiesta"
          ]
        },
        {
          "pregunta": "¿Por qué Diego no puede a las ocho?",
          "opciones": [
            "Tiene una junta",
            "Está enfermo",
            "No tiene dinero",
            "Tiene otra cena"
          ]
        },
        {
          "pregunta": "¿A Sofía le gusta la comida picante?",
          "opciones": [
            "Antes sí, ahora no",
            "Sí, mucho",
            "Nunca le gustó",
            "No se sabe"
          ]
        },
        {
          "pregunta": "¿Ya reservaron mesa?",
          "opciones": [
            "Sí, Ana ya reservó",
            "No, Diego va a reservar",
            "No hace falta",
            "No hay mesas"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa la respuesta corta.",
        "pregunta": "Have you seen this film? Yes, I ___.",
        "respuestas": [
          "have"
        ]
      },
      {
        "instruccion": "Completa con so o not.",
        "pregunta": "Is she coming? I think ___.",
        "respuestas": [
          "so"
        ]
      },
      {
        "instruccion": "Completa con so o not.",
        "pregunta": "Will it be cold? I hope ___.",
        "respuestas": [
          "not"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "I can't dance. Neither ___ I.",
        "respuestas": [
          "can"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "I love pizza. So ___ I.",
        "respuestas": [
          "do"
        ]
      },
      {
        "instruccion": "Completa con one u ones.",
        "pregunta": "I don't want these shoes. I want the black ___.",
        "respuestas": [
          "ones"
        ]
      },
      {
        "instruccion": "Completa con un auxiliar.",
        "pregunta": "He doesn't drink coffee, but his wife ___.",
        "respuestas": [
          "does"
        ]
      },
      {
        "instruccion": "Completa la respuesta.",
        "pregunta": "Do you want to dance? I'd love ___.",
        "respuestas": [
          "to"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Me temo que no.",
        "respuestas": [
          "I'm afraid not",
          "I am afraid not"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "Is it true? I think it.",
        "respuestas": [
          "I think so",
          "Is it true? I think so"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "Did you enjoy the party? Yes, I ___.",
        "opciones": [
          "did",
          "enjoyed",
          "do",
          "was"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Is it going to snow? I hope ___.",
        "opciones": [
          "not",
          "no",
          "don't",
          "so not"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I'm tired. ___ am I.",
        "opciones": [
          "So",
          "Neither",
          "Too",
          "Also"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I haven't finished. ___ have I.",
        "opciones": [
          "Neither",
          "So",
          "Either",
          "Too"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Would you like to join us? I'd like ___, but I'm busy.",
        "opciones": [
          "to",
          "it",
          "so",
          "that"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Told you so» significa:",
        "opciones": [
          "Te lo dije",
          "Dímelo",
          "No te dije",
          "Me dijiste"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Are you going to the meeting? I suppose so.",
        "pregunta": "¿Va a ir a la junta?",
        "opciones": [
          "Supone que sí",
          "No",
          "Seguro que no",
          "No hay junta"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I wanted to call you, but I forgot to.",
        "pregunta": "¿Por qué no llamó?",
        "opciones": [
          "Se le olvidó",
          "No tenía teléfono",
          "No quería",
          "Estaba ocupado"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: yo tampoco (I can't…)",
        "respuestas": [
          "Neither can I",
          "Nor can I",
          "Me neither"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: creo que sí",
        "respuestas": [
          "I think so"
        ]
      }
    ]
  },
  {
    "id": "c2-09",
    "num": 9,
    "titulo": "Formación de palabras (prefijos, sufijos, compuestos)",
    "contexto": "Ampliar el vocabulario",
    "explicacion": {
      "es": [
        "Conocer las piezas de las palabras multiplica tu vocabulario. Los **prefijos** cambian el significado: ***un-*** (no): *unhappy*; ***dis-***: *disagree*; ***mis-*** (mal): *misunderstand*; ***re-*** (otra vez): *rewrite*; ***over-*** (demasiado): *overcook*; ***under-*** (poco): *underpaid*.",
        "Los **sufijos** cambian la categoría de la palabra. **Sustantivos**: ***-ment*** (*development*), ***-ness*** (*kindness*), ***-tion*** (*decision*), ***-ity*** (*reality*). **Adjetivos**: ***-ful*** (*useful*), ***-less*** (sin: *useless*), ***-able*** (*readable*), ***-ous*** (*famous*). **Verbos**: ***-ize*** (*modernize*), ***-en*** (*shorten*).",
        "Los **compuestos** unen dos palabras: *sun + glasses = **sunglasses***; *well + known = **well-known***; *break + down = **breakdown***. Algunos se escriben juntos, otros con guion y otros separados: *bus stop*.",
        "Las **familias de palabras** te ayudan en exámenes: ***decide*** (verbo), ***decision*** (sustantivo), ***decisive*** (adjetivo), ***decisively*** (adverbio). Ojo con los **negativos**: *im-* antes de p/m (*impossible*), *il-* antes de l (*illegal*), *ir-* antes de r (*irregular*)."
      ],
      "tabla": {
        "columnas": [
          "Pieza",
          "Significado",
          "Ejemplo"
        ],
        "filas": [
          [
            "un- / in- / im-",
            "no",
            "unfair, invisible, impossible"
          ],
          [
            "mis-",
            "mal",
            "misunderstand"
          ],
          [
            "re-",
            "otra vez",
            "rebuild"
          ],
          [
            "over- / under-",
            "demasiado / poco",
            "overpaid, underpaid"
          ],
          [
            "-less",
            "sin",
            "careless, homeless"
          ],
          [
            "-ness / -ment / -ity",
            "sustantivo",
            "kindness, payment, reality"
          ]
        ]
      },
      "ojo": [
        "***-ful*** y ***-less*** son opuestos: *careful* (cuidadoso) y *careless* (descuidado). Pero no siempre existen los dos.",
        "***Il-*** antes de *l*: *illegal, illogical*. ***Ir-*** antes de *r*: *irresponsible*. ***Im-*** antes de *p, m*: *impatient, immature*.",
        "***-able*** = que se puede: *washable* (lavable), *unbelievable* (increíble).",
        "En los compuestos, el acento suele ir en la **primera** palabra: ***SUN**glasses*, ***BOOK**shop*.",
        "***Self-*** forma muchos compuestos: *self-confident, self-employed, self-service*."
      ],
      "en": [
        "Unhappy, disagree, misunderstand, rewrite.",
        "Kindness, development, decision, reality.",
        "Careful and careless. Useful and useless.",
        "Decide, decision, decisive, decisively."
      ]
    },
    "vocabulario": [
      {
        "en": "misunderstand",
        "es": "malentender",
        "imagen": "Dos personas confundidas hablando",
        "ejemplo": [
          "I think you misunderstood what I said.",
          "Creo que malentendiste lo que dije."
        ]
      },
      {
        "en": "rebuild",
        "es": "reconstruir",
        "imagen": "Trabajadores reconstruyendo una casa",
        "ejemplo": [
          "They had to rebuild the school after the earthquake.",
          "Tuvieron que reconstruir la escuela después del sismo."
        ]
      },
      {
        "en": "overcook",
        "es": "cocer de más",
        "imagen": "Pasta pegada y deshecha en una olla",
        "ejemplo": [
          "Don't overcook the pasta.",
          "No cuezas de más la pasta."
        ]
      },
      {
        "en": "underpaid",
        "es": "mal pagado",
        "imagen": "Trabajador cansado revisando su recibo de pago",
        "ejemplo": [
          "Many teachers feel underpaid.",
          "Muchos maestros sienten que les pagan poco."
        ]
      },
      {
        "en": "disagree",
        "es": "no estar de acuerdo",
        "imagen": "Dos personas discutiendo con respeto",
        "ejemplo": [
          "I'm sorry, but I disagree with you.",
          "Lo siento, pero no estoy de acuerdo contigo."
        ]
      },
      {
        "en": "impossible",
        "es": "imposible",
        "imagen": "Persona frente a una pared enorme",
        "ejemplo": [
          "Nothing is impossible if you work hard.",
          "Nada es imposible si trabajas duro."
        ]
      },
      {
        "en": "illegal",
        "es": "ilegal",
        "imagen": "Letrero de prohibido estacionarse",
        "ejemplo": [
          "It's illegal to park here.",
          "Es ilegal estacionarse aquí."
        ]
      },
      {
        "en": "irresponsible",
        "es": "irresponsable",
        "imagen": "Persona manejando mientras usa el celular",
        "ejemplo": [
          "Texting while driving is irresponsible.",
          "Mandar mensajes mientras manejas es irresponsable."
        ]
      },
      {
        "en": "careless",
        "es": "descuidado",
        "imagen": "Papeles tirados y café derramado",
        "ejemplo": [
          "It was a careless mistake.",
          "Fue un error por descuido."
        ]
      },
      {
        "en": "homeless",
        "es": "sin hogar",
        "imagen": "Albergue con camas para personas sin hogar",
        "ejemplo": [
          "The shelter helps homeless families.",
          "El albergue ayuda a familias sin hogar."
        ]
      },
      {
        "en": "kindness",
        "es": "amabilidad",
        "imagen": "Persona ayudando a una anciana a cruzar la calle",
        "ejemplo": [
          "Thank you for your kindness.",
          "Gracias por tu amabilidad."
        ]
      },
      {
        "en": "development",
        "es": "desarrollo",
        "imagen": "Ciudad con nuevos edificios en construcción",
        "ejemplo": [
          "The city's development has been very fast.",
          "El desarrollo de la ciudad ha sido muy rápido."
        ]
      },
      {
        "en": "unbelievable",
        "es": "increíble",
        "imagen": "Persona boquiabierta frente a un paisaje",
        "ejemplo": [
          "The view from the top was unbelievable.",
          "La vista desde la cima era increíble."
        ]
      },
      {
        "en": "shorten",
        "es": "acortar",
        "imagen": "Sastre ajustando un pantalón",
        "ejemplo": [
          "Can you shorten these trousers?",
          "¿Puede acortar estos pantalones?"
        ]
      },
      {
        "en": "self-employed",
        "es": "trabajador independiente",
        "imagen": "Persona trabajando desde casa con su laptop",
        "ejemplo": [
          "She's been self-employed for ten years.",
          "Trabaja por su cuenta desde hace diez años."
        ]
      },
      {
        "en": "well-known",
        "es": "muy conocido",
        "imagen": "Estatua famosa rodeada de turistas",
        "ejemplo": [
          "He's a well-known writer in Mexico.",
          "Es un escritor muy conocido en México."
        ]
      }
    ],
    "grupos": [
      {
        "id": "familias",
        "titulo": "Familias de palabras",
        "icono": "🌳",
        "patron": [
          "decide, decision, decisive",
          "create, creation, creative",
          "succeed, success, successful"
        ],
        "palabras": [
          {
            "en": "decision",
            "es": "decisión",
            "imagen": "Persona firmando un documento importante",
            "ejemplo": [
              "It was a difficult decision.",
              "Fue una decisión difícil."
            ]
          },
          {
            "en": "creative",
            "es": "creativo",
            "imagen": "Niño pintando un mural colorido",
            "ejemplo": [
              "She's a very creative designer.",
              "Es una diseñadora muy creativa."
            ]
          },
          {
            "en": "successful",
            "es": "exitoso",
            "imagen": "Emprendedora sonriendo frente a su tienda",
            "ejemplo": [
              "Her business is very successful.",
              "Su negocio es muy exitoso."
            ]
          },
          {
            "en": "explanation",
            "es": "explicación",
            "imagen": "Maestro explicando en el pizarrón",
            "ejemplo": [
              "Thanks for the clear explanation.",
              "Gracias por la explicación tan clara."
            ]
          },
          {
            "en": "reliable",
            "es": "confiable",
            "imagen": "Carro viejo pero en buen estado",
            "ejemplo": [
              "My old car is very reliable.",
              "Mi carro viejo es muy confiable."
            ]
          },
          {
            "en": "strengthen",
            "es": "fortalecer",
            "imagen": "Persona levantando pesas",
            "ejemplo": [
              "Exercise strengthens your bones.",
              "El ejercicio fortalece los huesos."
            ]
          }
        ]
      },
      {
        "id": "compuestos",
        "titulo": "Palabras compuestas",
        "icono": "🧩",
        "patron": [
          "sunglasses",
          "breakdown",
          "self-confident"
        ],
        "palabras": [
          {
            "en": "sunglasses",
            "es": "lentes de sol",
            "imagen": "Lentes de sol sobre una toalla de playa",
            "ejemplo": [
              "Don't forget your sunglasses.",
              "No olvides tus lentes de sol."
            ]
          },
          {
            "en": "breakdown",
            "es": "descompostura, crisis",
            "imagen": "Carro descompuesto con el cofre abierto",
            "ejemplo": [
              "We had a breakdown on the highway.",
              "Se nos descompuso el carro en la carretera."
            ]
          },
          {
            "en": "outcome",
            "es": "resultado",
            "imagen": "Gráfica final en una presentación",
            "ejemplo": [
              "We're waiting for the outcome of the vote.",
              "Estamos esperando el resultado de la votación."
            ]
          },
          {
            "en": "self-confident",
            "es": "seguro de sí mismo",
            "imagen": "Persona dando una presentación con seguridad",
            "ejemplo": [
              "She's become much more self-confident.",
              "Se ha vuelto mucho más segura de sí misma."
            ]
          },
          {
            "en": "heartbroken",
            "es": "con el corazón roto",
            "imagen": "Persona triste mirando una foto",
            "ejemplo": [
              "He was heartbroken when she left.",
              "Quedó con el corazón roto cuando ella se fue."
            ]
          },
          {
            "en": "downside",
            "es": "desventaja",
            "imagen": "Balanza con más peso de un lado",
            "ejemplo": [
              "The only downside is the price.",
              "La única desventaja es el precio."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I think you misunderstood what I said.",
        "es": "Creo que malentendiste lo que dije."
      },
      {
        "en": "They had to rebuild the school after the earthquake.",
        "es": "Tuvieron que reconstruir la escuela después del sismo."
      },
      {
        "en": "Many teachers feel underpaid.",
        "es": "Muchos maestros sienten que les pagan poco."
      },
      {
        "en": "It's illegal to park here.",
        "es": "Es ilegal estacionarse aquí."
      },
      {
        "en": "It was a careless mistake.",
        "es": "Fue un error por descuido."
      },
      {
        "en": "Thank you for your kindness.",
        "es": "Gracias por tu amabilidad."
      },
      {
        "en": "The view from the top was unbelievable.",
        "es": "La vista desde la cima era increíble."
      },
      {
        "en": "She's been self-employed for ten years.",
        "es": "Trabaja por su cuenta desde hace diez años."
      },
      {
        "en": "It was a difficult decision.",
        "es": "Fue una decisión difícil."
      },
      {
        "en": "The only downside is the price.",
        "es": "La única desventaja es el precio."
      }
    ],
    "frases": [
      {
        "en": "The government has promised to modernize public transport and reduce pollution in the city.",
        "es": "El gobierno prometió modernizar el transporte público y reducir la contaminación en la ciudad.",
        "imagen": "Autobús eléctrico nuevo en una avenida"
      },
      {
        "en": "Her unexpected resignation left the whole team speechless.",
        "es": "Su renuncia inesperada dejó a todo el equipo sin palabras.",
        "imagen": "Equipo sorprendido en una sala de juntas"
      },
      {
        "en": "It's irresponsible to leave children alone near a swimming pool.",
        "es": "Es irresponsable dejar a los niños solos cerca de una alberca.",
        "imagen": "Alberca con un salvavidas vigilando"
      },
      {
        "en": "The instructions were so confusing that I had to reread them three times.",
        "es": "Las instrucciones eran tan confusas que tuve que releerlas tres veces.",
        "imagen": "Persona armando un mueble con un manual"
      },
      {
        "en": "Many young people prefer to be self-employed rather than work for a big company.",
        "es": "Muchos jóvenes prefieren trabajar por su cuenta en lugar de trabajar para una gran empresa.",
        "imagen": "Persona joven trabajando en una cafetería con su laptop"
      },
      {
        "en": "His carelessness cost the company thousands of dollars.",
        "es": "Su descuido le costó miles de dólares a la empresa.",
        "imagen": "Documentos con errores marcados en rojo"
      },
      {
        "en": "The restaurant was overcrowded, so we decided to eat somewhere else.",
        "es": "El restaurante estaba atestado, así que decidimos comer en otro lado.",
        "imagen": "Restaurante lleno con gente esperando afuera"
      },
      {
        "en": "The usefulness of a dictionary depends on how often you open it.",
        "es": "La utilidad de un diccionario depende de qué tan seguido lo abras.",
        "imagen": "Diccionario abierto sobre un escritorio"
      },
      {
        "en": "After the breakdown of the negotiations, both sides refused to talk.",
        "es": "Tras el fracaso de las negociaciones, ambas partes se negaron a hablar.",
        "imagen": "Dos grupos de personas saliendo de una sala de juntas"
      },
      {
        "en": "She's an extraordinarily talented and hard-working musician.",
        "es": "Es una música extraordinariamente talentosa y trabajadora.",
        "imagen": "Violinista practicando en un estudio"
      }
    ],
    "listening": [
      {
        "audio": "I'm sorry, I think I misunderstood the question.",
        "pregunta": "¿Qué pasó?",
        "opciones": [
          "Malentendió la pregunta",
          "No oyó la pregunta",
          "Contestó bien",
          "No había pregunta"
        ]
      },
      {
        "audio": "The steak was overcooked and very dry.",
        "pregunta": "¿Cómo estaba la carne?",
        "opciones": [
          "Demasiado cocida",
          "Cruda",
          "Perfecta",
          "Fría"
        ]
      },
      {
        "audio": "He's very self-confident when he speaks in public.",
        "pregunta": "¿Cómo es al hablar en público?",
        "opciones": [
          "Seguro de sí mismo",
          "Nervioso",
          "Tímido",
          "Aburrido"
        ]
      },
      {
        "audio": "Selling these products without a license is illegal.",
        "pregunta": "¿Qué es ilegal?",
        "opciones": [
          "Vender sin licencia",
          "Comprar productos",
          "Tener licencia",
          "Abrir una tienda"
        ]
      },
      {
        "audio": "They're going to rebuild the old bridge next year.",
        "pregunta": "¿Qué van a hacer?",
        "opciones": [
          "Reconstruir el puente",
          "Cerrar el puente",
          "Pintar el puente",
          "Vender el puente"
        ]
      }
    ],
    "lectura": {
      "titulo": "How English builds new words",
      "texto": "English is constantly creating new words, and most of them are not really new at all: they are built from pieces that already exist. Take the word unfriend, which became popular with social media. It simply adds the prefix un-, meaning not or reverse, to the noun friend, which is used here as a verb. Similarly, the word binge-watch combines two existing words to describe something that millions of people do every weekend. Some suffixes are especially productive. The ending -able can be added to almost any verb: if a video is likely to be shared, people call it shareable. The suffix -ize turns nouns and adjectives into verbs, as in digitize or prioritize. Linguists say that understanding these patterns is one of the most effective ways for learners to expand their vocabulary. If you know that -less means without, you can understand words like wireless, careless, and fearless, even if you have never seen them before. In other words, learning the pieces is often more useful than memorizing endless lists.",
      "preguntas": [
        {
          "pregunta": "¿De dónde vienen casi todas las palabras nuevas?",
          "opciones": [
            "De piezas que ya existen",
            "De otros idiomas",
            "Las inventan los científicos",
            "De los diccionarios"
          ]
        },
        {
          "pregunta": "¿Qué significa el prefijo un- en unfriend?",
          "opciones": [
            "No o revertir",
            "Otra vez",
            "Demasiado",
            "Con"
          ]
        },
        {
          "pregunta": "¿Qué hace el sufijo -ize?",
          "opciones": [
            "Convierte palabras en verbos",
            "Forma adjetivos negativos",
            "Forma plurales",
            "Indica pasado"
          ]
        },
        {
          "pregunta": "Según el texto, ¿qué es más útil?",
          "opciones": [
            "Aprender las piezas de las palabras",
            "Memorizar listas",
            "Leer diccionarios",
            "Ver series"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Escribe el contrario con un prefijo.",
        "pregunta": "possible",
        "respuestas": [
          "impossible"
        ]
      },
      {
        "instruccion": "Escribe el contrario con un prefijo.",
        "pregunta": "legal",
        "respuestas": [
          "illegal"
        ]
      },
      {
        "instruccion": "Escribe el contrario con un prefijo.",
        "pregunta": "responsible",
        "respuestas": [
          "irresponsible"
        ]
      },
      {
        "instruccion": "Escribe el sustantivo.",
        "pregunta": "kind",
        "respuestas": [
          "kindness"
        ]
      },
      {
        "instruccion": "Escribe el sustantivo.",
        "pregunta": "decide",
        "respuestas": [
          "decision"
        ]
      },
      {
        "instruccion": "Escribe el adjetivo con -ful.",
        "pregunta": "success",
        "respuestas": [
          "successful"
        ]
      },
      {
        "instruccion": "Escribe el adjetivo que significa «sin hogar».",
        "pregunta": "home___",
        "respuestas": [
          "homeless"
        ]
      },
      {
        "instruccion": "Escribe el verbo.",
        "pregunta": "short",
        "respuestas": [
          "shorten"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "malentender",
        "respuestas": [
          "misunderstand"
        ]
      },
      {
        "instruccion": "Corrige la palabra.",
        "pregunta": "unlegal",
        "respuestas": [
          "illegal"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "It's ___ to smoke in public buildings.",
        "opciones": [
          "illegal",
          "unlegal",
          "inlegal",
          "dislegal"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Thank you for your ___.",
        "opciones": [
          "kindness",
          "kindly",
          "kindful",
          "kindment"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "He made a ___ mistake.",
        "opciones": [
          "careless",
          "carefulness",
          "uncare",
          "carely"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I ___ with you completely.",
        "opciones": [
          "disagree",
          "unagree",
          "misagree",
          "inagree"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "El prefijo re- significa:",
        "opciones": [
          "Otra vez",
          "No",
          "Mal",
          "Demasiado"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Underpaid» significa:",
        "opciones": [
          "Mal pagado",
          "Pagado de más",
          "No pagado",
          "Pagado a tiempo"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The new law will strengthen the protection of forests.",
        "pregunta": "¿Qué hará la ley?",
        "opciones": [
          "Fortalecerá la protección de bosques",
          "Talará bosques",
          "Venderá bosques",
          "Cerrará parques"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Her latest film was a huge success.",
        "pregunta": "¿Cómo le fue a su película?",
        "opciones": [
          "Fue un gran éxito",
          "Fue un fracaso",
          "No se estrenó",
          "Fue regular"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Escribe el adjetivo de «create»",
        "respuestas": [
          "creative"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: increíble (un…able)",
        "respuestas": [
          "unbelievable"
        ]
      }
    ]
  },
  {
    "id": "c2-10",
    "num": 10,
    "titulo": "Modismos, refranes y lenguaje figurado",
    "contexto": "Cultura y humor",
    "explicacion": {
      "es": [
        "Un **modismo** (*idiom*) es una expresión cuyo significado **no se deduce** de sus palabras: ***It's raining cats and dogs*** = está lloviendo a cántaros. ***Break the ice*** = romper el hielo. Hay que aprenderlos como bloques.",
        "Los **refranes** (*proverbs*) transmiten sabiduría popular. Muchos tienen equivalente en español, pero con otras imágenes: ***The early bird catches the worm.*** (Al que madruga, Dios lo ayuda.) ***Don't count your chickens before they hatch.*** (No vendas la piel del oso antes de cazarlo.)",
        "El **lenguaje figurado** usa metáforas cotidianas: ***I'm drowning in work*** (me ahogo en trabajo), ***a heart of gold*** (un corazón de oro). Muchas expresiones vienen del deporte o de la comida: ***hit the ground running***, ***a piece of cake*** (pan comido).",
        "Úsalos con **moderación**: un modismo bien puesto suena natural, pero demasiados suenan forzados. Y fíjate en el **registro**: *kick the bucket* (estirar la pata) es muy informal, nunca para un pésame."
      ],
      "tabla": {
        "columnas": [
          "Modismo",
          "Significado",
          "En español"
        ],
        "filas": [
          [
            "a piece of cake",
            "muy fácil",
            "pan comido"
          ],
          [
            "break the ice",
            "iniciar la plática",
            "romper el hielo"
          ],
          [
            "costs an arm and a leg",
            "muy caro",
            "cuesta un ojo de la cara"
          ],
          [
            "once in a blue moon",
            "casi nunca",
            "de vez en cuando, muy rara vez"
          ],
          [
            "hit the nail on the head",
            "acertar",
            "dar en el clavo"
          ],
          [
            "let the cat out of the bag",
            "revelar un secreto",
            "irse de la lengua"
          ]
        ]
      },
      "ojo": [
        "No traduzcas palabra por palabra: *costs an eye of the face* ❌; se dice ***costs an arm and a leg*** ✅.",
        "Los modismos tienen forma fija: *a piece of cake* ✅, no *a slice of cake* ❌ con ese sentido.",
        "El verbo sí se conjuga: *She **broke** the ice.* *He's **pulling** my leg.*",
        "Algunos son **muy informales** o vulgares: aprende primero cuándo usarlos.",
        "Los refranes casi siempre se citan **a medias**: *Well, the early bird…* y todos entienden el resto."
      ],
      "en": [
        "It's raining cats and dogs.",
        "The exam was a piece of cake.",
        "The early bird catches the worm.",
        "Don't count your chickens before they hatch."
      ]
    },
    "vocabulario": [
      {
        "en": "a piece of cake",
        "es": "pan comido",
        "imagen": "Estudiante sonriendo con un examen fácil",
        "ejemplo": [
          "The exam was a piece of cake.",
          "El examen fue pan comido."
        ]
      },
      {
        "en": "break the ice",
        "es": "romper el hielo",
        "imagen": "Personas riendo en una reunión",
        "ejemplo": [
          "He told a joke to break the ice.",
          "Contó un chiste para romper el hielo."
        ]
      },
      {
        "en": "costs an arm and a leg",
        "es": "cuesta un ojo de la cara",
        "imagen": "Persona impresionada viendo un precio",
        "ejemplo": [
          "That car costs an arm and a leg.",
          "Ese carro cuesta un ojo de la cara."
        ]
      },
      {
        "en": "once in a blue moon",
        "es": "muy de vez en cuando",
        "imagen": "Luna llena en un cielo nocturno",
        "ejemplo": [
          "I only eat fast food once in a blue moon.",
          "Solo como comida rápida muy de vez en cuando."
        ]
      },
      {
        "en": "hit the nail on the head",
        "es": "dar en el clavo",
        "imagen": "Martillo golpeando un clavo",
        "ejemplo": [
          "You hit the nail on the head.",
          "Diste en el clavo."
        ]
      },
      {
        "en": "let the cat out of the bag",
        "es": "irse de la lengua",
        "imagen": "Gato saliendo de una bolsa",
        "ejemplo": [
          "Who let the cat out of the bag about the party?",
          "¿Quién se fue de la lengua con lo de la fiesta?"
        ]
      },
      {
        "en": "under the weather",
        "es": "indispuesto",
        "imagen": "Persona en cama con un té",
        "ejemplo": [
          "I'm feeling a bit under the weather today.",
          "Hoy me siento un poco mal."
        ]
      },
      {
        "en": "pull someone's leg",
        "es": "tomarle el pelo",
        "imagen": "Amigos riéndose de una broma",
        "ejemplo": [
          "Relax, I'm just pulling your leg.",
          "Tranquilo, solo te estoy tomando el pelo."
        ]
      },
      {
        "en": "on cloud nine",
        "es": "en las nubes de felicidad",
        "imagen": "Persona saltando de alegría",
        "ejemplo": [
          "She's been on cloud nine since she got the job.",
          "Está feliz de la vida desde que consiguió el trabajo."
        ]
      },
      {
        "en": "the last straw",
        "es": "la gota que derramó el vaso",
        "imagen": "Vaso de agua desbordándose",
        "ejemplo": [
          "His rude comment was the last straw.",
          "Su comentario grosero fue la gota que derramó el vaso."
        ]
      },
      {
        "en": "cut corners",
        "es": "hacer las cosas al ahí se va",
        "imagen": "Obra mal hecha con grietas",
        "ejemplo": [
          "Don't cut corners on safety.",
          "No le escatimes a la seguridad."
        ]
      },
      {
        "en": "a blessing in disguise",
        "es": "no hay mal que por bien no venga",
        "imagen": "Persona sonriendo tras perder un camión",
        "ejemplo": [
          "Losing that job was a blessing in disguise.",
          "Perder ese trabajo fue para bien."
        ]
      },
      {
        "en": "spill the beans",
        "es": "soltar la sopa",
        "imagen": "Frijoles derramados en una mesa",
        "ejemplo": [
          "Come on, spill the beans! What happened?",
          "¡Ándale, suelta la sopa! ¿Qué pasó?"
        ]
      },
      {
        "en": "in hot water",
        "es": "en problemas",
        "imagen": "Persona nerviosa frente a su jefe",
        "ejemplo": [
          "He's in hot water for missing the deadline.",
          "Está en problemas por no entregar a tiempo."
        ]
      },
      {
        "en": "call it a day",
        "es": "dar por terminado el día",
        "imagen": "Persona cerrando su laptop al atardecer",
        "ejemplo": [
          "We've done enough. Let's call it a day.",
          "Ya hicimos suficiente. Dejémoslo por hoy."
        ]
      },
      {
        "en": "a heart of gold",
        "es": "un corazón de oro",
        "imagen": "Persona voluntaria repartiendo comida",
        "ejemplo": [
          "My grandmother has a heart of gold.",
          "Mi abuela tiene un corazón de oro."
        ]
      }
    ],
    "grupos": [
      {
        "id": "refranes",
        "titulo": "Refranes",
        "icono": "📜",
        "patron": [
          "The early bird catches the worm.",
          "Better late than never.",
          "Actions speak louder than words."
        ],
        "palabras": [
          {
            "en": "The early bird catches the worm.",
            "es": "al que madruga, Dios lo ayuda",
            "imagen": "Pájaro con un gusano al amanecer",
            "ejemplo": [
              "Get up early. The early bird catches the worm.",
              "Levántate temprano. Al que madruga, Dios lo ayuda."
            ]
          },
          {
            "en": "Better late than never.",
            "es": "más vale tarde que nunca",
            "imagen": "Persona llegando corriendo a una fiesta",
            "ejemplo": [
              "You finally came! Better late than never.",
              "¡Por fin llegaste! Más vale tarde que nunca."
            ]
          },
          {
            "en": "Actions speak louder than words.",
            "es": "obras son amores",
            "imagen": "Persona ayudando a mover muebles",
            "ejemplo": [
              "Don't just promise. Actions speak louder than words.",
              "No solo prometas. Obras son amores, que no buenas razones."
            ]
          },
          {
            "en": "Every cloud has a silver lining.",
            "es": "no hay mal que por bien no venga",
            "imagen": "Nube con sol detrás",
            "ejemplo": [
              "Don't worry. Every cloud has a silver lining.",
              "No te preocupes. No hay mal que por bien no venga."
            ]
          },
          {
            "en": "When in Rome, do as the Romans do.",
            "es": "a donde fueres, haz lo que vieres",
            "imagen": "Turista comiendo con palillos en Japón",
            "ejemplo": [
              "When in Rome, do as the Romans do.",
              "A donde fueres, haz lo que vieres."
            ]
          },
          {
            "en": "Don't count your chickens before they hatch.",
            "es": "no vendas la piel del oso antes de cazarlo",
            "imagen": "Gallina sobre unos huevos",
            "ejemplo": [
              "You haven't got the job yet. Don't count your chickens before they hatch.",
              "Todavía no tienes el trabajo. No vendas la piel del oso antes de cazarlo."
            ]
          }
        ]
      },
      {
        "id": "cuerpo",
        "titulo": "Modismos con el cuerpo",
        "icono": "🦵",
        "patron": [
          "keep an eye on",
          "get cold feet",
          "by heart"
        ],
        "palabras": [
          {
            "en": "keep an eye on",
            "es": "echar un ojo",
            "imagen": "Persona cuidando a un bebé en un parque",
            "ejemplo": [
              "Can you keep an eye on my bag?",
              "¿Puedes echarle un ojo a mi bolsa?"
            ]
          },
          {
            "en": "get cold feet",
            "es": "echarse para atrás",
            "imagen": "Novio nervioso antes de la boda",
            "ejemplo": [
              "He got cold feet the day before the wedding.",
              "Se echó para atrás un día antes de la boda."
            ]
          },
          {
            "en": "learn by heart",
            "es": "aprender de memoria",
            "imagen": "Niño recitando un poema",
            "ejemplo": [
              "I learned the poem by heart.",
              "Me aprendí el poema de memoria."
            ]
          },
          {
            "en": "see eye to eye",
            "es": "estar de acuerdo",
            "imagen": "Dos socios dándose la mano",
            "ejemplo": [
              "We don't always see eye to eye.",
              "No siempre estamos de acuerdo."
            ]
          },
          {
            "en": "give someone a hand",
            "es": "echar la mano",
            "imagen": "Persona ayudando a cargar cajas",
            "ejemplo": [
              "Can you give me a hand with these boxes?",
              "¿Me echas la mano con estas cajas?"
            ]
          },
          {
            "en": "on the tip of my tongue",
            "es": "en la punta de la lengua",
            "imagen": "Persona intentando recordar algo",
            "ejemplo": [
              "His name is on the tip of my tongue.",
              "Tengo su nombre en la punta de la lengua."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "The exam was a piece of cake.",
        "es": "El examen fue pan comido."
      },
      {
        "en": "He told a joke to break the ice.",
        "es": "Contó un chiste para romper el hielo."
      },
      {
        "en": "That car costs an arm and a leg.",
        "es": "Ese carro cuesta un ojo de la cara."
      },
      {
        "en": "I'm feeling a bit under the weather today.",
        "es": "Hoy me siento un poco mal."
      },
      {
        "en": "Relax, I'm just pulling your leg.",
        "es": "Tranquilo, solo te estoy tomando el pelo."
      },
      {
        "en": "His rude comment was the last straw.",
        "es": "Su comentario grosero fue la gota que derramó el vaso."
      },
      {
        "en": "Losing that job was a blessing in disguise.",
        "es": "Perder ese trabajo fue para bien."
      },
      {
        "en": "We've done enough. Let's call it a day.",
        "es": "Ya hicimos suficiente. Dejémoslo por hoy."
      },
      {
        "en": "Can you keep an eye on my bag?",
        "es": "¿Puedes echarle un ojo a mi bolsa?"
      },
      {
        "en": "His name is on the tip of my tongue.",
        "es": "Tengo su nombre en la punta de la lengua."
      }
    ],
    "frases": [
      {
        "en": "I was so nervous at the interview, but the manager told a funny story that really broke the ice.",
        "es": "Estaba muy nervioso en la entrevista, pero el gerente contó una historia chistosa que rompió el hielo.",
        "imagen": "Entrevista de trabajo con dos personas riendo"
      },
      {
        "en": "Renting an apartment in the city center costs an arm and a leg these days.",
        "es": "Rentar un departamento en el centro cuesta un ojo de la cara hoy en día.",
        "imagen": "Edificios de departamentos en el centro de una ciudad"
      },
      {
        "en": "My cousin only visits us once in a blue moon, so we always make a big dinner.",
        "es": "Mi primo nos visita muy de vez en cuando, así que siempre hacemos una gran cena.",
        "imagen": "Familia reunida en una mesa larga"
      },
      {
        "en": "Someone let the cat out of the bag, and now the surprise party is ruined.",
        "es": "Alguien se fue de la lengua y ahora la fiesta sorpresa se arruinó.",
        "imagen": "Decoración de fiesta con una persona sorprendida"
      },
      {
        "en": "The builders cut corners, and now the roof leaks every time it rains.",
        "es": "Los albañiles hicieron todo al ahí se va y ahora el techo gotea cada vez que llueve.",
        "imagen": "Cubeta bajo una gotera en una casa"
      },
      {
        "en": "Missing that flight turned out to be a blessing in disguise, because I met my wife at the airport.",
        "es": "Perder ese vuelo resultó para bien, porque conocí a mi esposa en el aeropuerto.",
        "imagen": "Pareja sonriendo en una sala de espera de aeropuerto"
      },
      {
        "en": "You'll be in hot water if your mother finds out you skipped school.",
        "es": "Te vas a meter en problemas si tu mamá se entera de que te saltaste la escuela.",
        "imagen": "Adolescente nervioso en la puerta de su casa"
      },
      {
        "en": "We had planned to buy a house, but we got cold feet when we saw the mortgage.",
        "es": "Planeábamos comprar una casa, pero nos echamos para atrás al ver la hipoteca.",
        "imagen": "Pareja revisando documentos de una casa con preocupación"
      },
      {
        "en": "My boss and I don't always see eye to eye, but we respect each other.",
        "es": "Mi jefe y yo no siempre estamos de acuerdo, pero nos respetamos.",
        "imagen": "Dos colegas conversando en una oficina"
      },
      {
        "en": "When you travel, try the local food. When in Rome, do as the Romans do!",
        "es": "Cuando viajes, prueba la comida local. ¡A donde fueres, haz lo que vieres!",
        "imagen": "Turistas probando comida en un mercado"
      }
    ],
    "listening": [
      {
        "audio": "The driving test was a piece of cake.",
        "pregunta": "¿Cómo fue el examen de manejo?",
        "opciones": [
          "Muy fácil",
          "Muy difícil",
          "Regular",
          "No lo hizo"
        ]
      },
      {
        "audio": "I'm a bit under the weather, so I'll stay home today.",
        "pregunta": "¿Por qué se queda en casa?",
        "opciones": [
          "Se siente mal",
          "Llueve",
          "Hace calor",
          "No tiene trabajo"
        ]
      },
      {
        "audio": "We only go to the cinema once in a blue moon.",
        "pregunta": "¿Con qué frecuencia van al cine?",
        "opciones": [
          "Casi nunca",
          "Cada semana",
          "Todos los días",
          "Cada mes"
        ]
      },
      {
        "audio": "She's been on cloud nine since the baby was born.",
        "pregunta": "¿Cómo está ella?",
        "opciones": [
          "Muy feliz",
          "Cansada",
          "Triste",
          "Preocupada"
        ]
      },
      {
        "audio": "Come on, spill the beans. Who's your new boyfriend?",
        "pregunta": "¿Qué le piden?",
        "opciones": [
          "Que cuente el secreto",
          "Que cocine frijoles",
          "Que se calle",
          "Que se vaya"
        ]
      }
    ],
    "lectura": {
      "titulo": "Lost in translation",
      "texto": "When Camila moved to Chicago for her master's degree, she thought her English was excellent. After all, she had passed every exam with flying colors. But on her first day at the office where she did her internship, her new colleague said, Don't worry, this job is a piece of cake. Camila looked around, confused, wondering where the cake was. Later that week, her manager told her to break a leg before her first presentation, and she nearly panicked. Why would anyone want her to get hurt? A friendly coworker explained that it simply meant good luck. Little by little, Camila started a notebook of idioms. Some of them made her laugh, like when it rains cats and dogs, and others reminded her of Spanish sayings, like the early bird catches the worm. By the end of the year, she was using them herself, although she admits that she still mixes some up once in a blue moon. Learning idioms, she says, was the key to really understanding the people around her.",
      "preguntas": [
        {
          "pregunta": "¿Por qué se mudó Camila a Chicago?",
          "opciones": [
            "Para estudiar una maestría",
            "Por trabajo de su esposo",
            "De vacaciones",
            "Para vivir con su familia"
          ]
        },
        {
          "pregunta": "¿Qué pensó cuando oyó «a piece of cake»?",
          "opciones": [
            "Buscó el pastel",
            "Que el trabajo era difícil",
            "Que era su cumpleaños",
            "Que tenía hambre"
          ]
        },
        {
          "pregunta": "¿Qué significa «break a leg»?",
          "opciones": [
            "Buena suerte",
            "Ten cuidado",
            "Rómpete una pierna",
            "Corre"
          ]
        },
        {
          "pregunta": "¿Qué hizo Camila para aprender modismos?",
          "opciones": [
            "Un cuaderno de modismos",
            "Un curso en línea",
            "Ver películas",
            "Nada"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa el modismo.",
        "pregunta": "The test was a piece of ___.",
        "respuestas": [
          "cake"
        ]
      },
      {
        "instruccion": "Completa el modismo.",
        "pregunta": "He told a joke to break the ___.",
        "respuestas": [
          "ice"
        ]
      },
      {
        "instruccion": "Completa el modismo.",
        "pregunta": "It costs an arm and a ___.",
        "respuestas": [
          "leg"
        ]
      },
      {
        "instruccion": "Completa el modismo.",
        "pregunta": "I only see him once in a blue ___.",
        "respuestas": [
          "moon"
        ]
      },
      {
        "instruccion": "Completa el refrán.",
        "pregunta": "Better late than ___.",
        "respuestas": [
          "never"
        ]
      },
      {
        "instruccion": "Completa el refrán.",
        "pregunta": "Actions speak louder than ___.",
        "respuestas": [
          "words"
        ]
      },
      {
        "instruccion": "Completa el modismo.",
        "pregunta": "His name is on the tip of my ___.",
        "respuestas": [
          "tongue"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Diste en el clavo.",
        "respuestas": [
          "You hit the nail on the head"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Solo te estoy tomando el pelo.",
        "respuestas": [
          "I'm just pulling your leg",
          "I am just pulling your leg",
          "I'm only pulling your leg"
        ]
      },
      {
        "instruccion": "Corrige el modismo.",
        "pregunta": "It costs an eye of the face.",
        "respuestas": [
          "It costs an arm and a leg"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "«It's raining cats and dogs» significa:",
        "opciones": [
          "Llueve a cántaros",
          "Hay muchos animales",
          "Llueve poco",
          "Hace sol"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Someone ___ the cat out of the bag.",
        "opciones": [
          "let",
          "put",
          "made",
          "took"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I'm tired. Let's call it a ___.",
        "opciones": [
          "day",
          "night",
          "time",
          "work"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«He got cold feet» significa:",
        "opciones": [
          "Se echó para atrás",
          "Le dieron frío los pies",
          "Se enfermó",
          "Se fue corriendo"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Al que madruga, Dios lo ayuda» en inglés:",
        "opciones": [
          "The early bird catches the worm.",
          "Better late than never.",
          "Time is money.",
          "Every cloud has a silver lining."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«A blessing in disguise» es:",
        "opciones": [
          "Algo malo que resulta bueno",
          "Un disfraz",
          "Una bendición religiosa",
          "Un regalo caro"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Losing my phone was the last straw. What a terrible day!",
        "pregunta": "¿Qué fue lo peor del día?",
        "opciones": [
          "Perder el teléfono",
          "Llegar tarde",
          "Perder las llaves",
          "Un examen"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Can you give me a hand with the shopping bags?",
        "pregunta": "¿Qué pide?",
        "opciones": [
          "Ayuda con las bolsas",
          "Dinero",
          "Que vaya de compras",
          "Una mano de pintura"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: pan comido",
        "respuestas": [
          "a piece of cake",
          "piece of cake"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: echarle un ojo a (keep…)",
        "respuestas": [
          "keep an eye on"
        ]
      }
    ]
  },
  {
    "id": "c2-11",
    "num": 11,
    "titulo": "Registro, estilo y tono",
    "contexto": "Adaptar el mensaje al público",
    "explicacion": {
      "es": [
        "El **registro** es el nivel de formalidad. La misma idea cambia según con quién hablas: ***Can you help me?*** (neutro), ***Could you possibly help me?*** (cortés), ***I would be grateful if you could assist me.*** (formal), ***Give us a hand?*** (muy informal).",
        "El inglés **formal** prefiere palabras de origen latino y verbos de una sola palabra: *investigate* en vez de *look into*, *tolerate* en vez de *put up with*, *receive* en vez de *get*, *request* en vez de *ask for*. Evita contracciones: *do not*, *I am*.",
        "El **informal** usa phrasal verbs, contracciones y palabras coloquiales: *kids* (*children*), *guy* (*man*), *stuff* (*things*), *gonna*. En mensajes también: *Thanks!*, *No worries*, *Cheers*.",
        "El **tono** muestra la actitud: **cortés** (*Would you mind…?*), **directo** (*Send it now.*), **diplomático** (*I'm afraid there may be a small problem*). Los nativos **suavizan** las críticas: *That's not quite what we expected* = Eso está mal."
      ],
      "tabla": {
        "columnas": [
          "Informal",
          "Neutro",
          "Formal"
        ],
        "filas": [
          [
            "get",
            "receive",
            "obtain"
          ],
          [
            "look into",
            "check",
            "investigate"
          ],
          [
            "put up with",
            "accept",
            "tolerate"
          ],
          [
            "kids",
            "children",
            "minors"
          ],
          [
            "Thanks a lot!",
            "Thank you.",
            "I am most grateful."
          ],
          [
            "Sorry!",
            "I'm sorry.",
            "Please accept my apologies."
          ]
        ]
      },
      "ojo": [
        "Un error de registro puede sonar **grosero** o **ridículo**: no escribas *Hey guys* a un cliente nuevo ni *Dear Sir* a tu mejor amigo.",
        "En correos formales: ***Dear Ms. López***, ***I am writing to…***, ***Kind regards***. Informales: ***Hi Ana***, ***Just a quick note…***, ***Cheers***.",
        "Para suavizar: ***I'm afraid…***, ***It seems that…***, ***Perhaps we could…***, ***I was wondering if…***",
        "***Would you mind + -ing?*** es muy cortés: *Would you mind **closing** the window?*",
        "Lo **académico** usa la voz pasiva y lo impersonal: *It can be argued that…*, en lugar de *I think…*"
      ],
      "en": [
        "Can you help me? Could you possibly help me?",
        "I would be grateful if you could assist me.",
        "I'm afraid there may be a small problem.",
        "That's not quite what we expected."
      ]
    },
    "vocabulario": [
      {
        "en": "I would be grateful if",
        "es": "le agradecería que",
        "imagen": "Persona escribiendo una carta formal",
        "ejemplo": [
          "I would be grateful if you could send me the details.",
          "Le agradecería que me enviara los detalles."
        ]
      },
      {
        "en": "I am writing to",
        "es": "le escribo para",
        "imagen": "Correo electrónico formal en una pantalla",
        "ejemplo": [
          "I am writing to apply for the position of designer.",
          "Le escribo para solicitar el puesto de diseñador."
        ]
      },
      {
        "en": "Kind regards",
        "es": "saludos cordiales",
        "imagen": "Firma al final de un correo",
        "ejemplo": [
          "Kind regards, Laura Martínez.",
          "Saludos cordiales, Laura Martínez."
        ]
      },
      {
        "en": "Please accept my apologies",
        "es": "le ofrezco una disculpa",
        "imagen": "Gerente pidiendo disculpas a un cliente",
        "ejemplo": [
          "Please accept my apologies for the delay.",
          "Le ofrezco una disculpa por el retraso."
        ]
      },
      {
        "en": "Would you mind",
        "es": "¿le importaría?",
        "imagen": "Persona pidiendo un favor con amabilidad",
        "ejemplo": [
          "Would you mind closing the window?",
          "¿Le importaría cerrar la ventana?"
        ]
      },
      {
        "en": "I was wondering if",
        "es": "me preguntaba si",
        "imagen": "Persona pidiendo algo con timidez",
        "ejemplo": [
          "I was wondering if you could help me.",
          "Me preguntaba si me podrías ayudar."
        ]
      },
      {
        "en": "I'm afraid",
        "es": "me temo que",
        "imagen": "Persona dando una mala noticia con suavidad",
        "ejemplo": [
          "I'm afraid the flight has been canceled.",
          "Me temo que el vuelo fue cancelado."
        ]
      },
      {
        "en": "investigate",
        "es": "investigar",
        "imagen": "Detective revisando documentos",
        "ejemplo": [
          "The police are investigating the case.",
          "La policía está investigando el caso."
        ]
      },
      {
        "en": "tolerate",
        "es": "tolerar",
        "imagen": "Persona aguantando ruido de vecinos",
        "ejemplo": [
          "The company will not tolerate bad behavior.",
          "La empresa no tolerará el mal comportamiento."
        ]
      },
      {
        "en": "request",
        "es": "solicitar",
        "imagen": "Formulario de solicitud en una oficina",
        "ejemplo": [
          "You can request more information by email.",
          "Puede solicitar más información por correo."
        ]
      },
      {
        "en": "No worries.",
        "es": "no hay problema",
        "imagen": "Persona sonriendo relajada",
        "ejemplo": [
          "Sorry I'm late! No worries.",
          "¡Perdón por la tardanza! No hay problema."
        ]
      },
      {
        "en": "Cheers!",
        "es": "¡gracias! ¡salud!",
        "imagen": "Amigos brindando",
        "ejemplo": [
          "Cheers for your help, mate!",
          "¡Gracias por la ayuda, amigo!"
        ]
      },
      {
        "en": "stuff",
        "es": "cosas",
        "imagen": "Caja llena de objetos variados",
        "ejemplo": [
          "I've got a lot of stuff to do today.",
          "Tengo un montón de cosas que hacer hoy."
        ]
      },
      {
        "en": "kids",
        "es": "niños",
        "imagen": "Niños jugando en un parque",
        "ejemplo": [
          "The kids are playing outside.",
          "Los niños están jugando afuera."
        ]
      },
      {
        "en": "It can be argued that",
        "es": "se puede argumentar que",
        "imagen": "Estudiante escribiendo un ensayo",
        "ejemplo": [
          "It can be argued that technology isolates people.",
          "Se puede argumentar que la tecnología aísla a las personas."
        ]
      },
      {
        "en": "not quite what we expected",
        "es": "no es exactamente lo que esperábamos",
        "imagen": "Cliente revisando un trabajo con duda",
        "ejemplo": [
          "The design is not quite what we expected.",
          "El diseño no es exactamente lo que esperábamos."
        ]
      }
    ],
    "grupos": [
      {
        "id": "formal",
        "titulo": "Equivalentes formales",
        "icono": "🎩",
        "patron": [
          "purchase, not buy",
          "assist, not help",
          "inform, not tell"
        ],
        "palabras": [
          {
            "en": "purchase",
            "es": "comprar",
            "imagen": "Persona pagando con tarjeta en una tienda elegante",
            "ejemplo": [
              "Tickets can be purchased online.",
              "Los boletos se pueden comprar en línea."
            ]
          },
          {
            "en": "assist",
            "es": "ayudar",
            "imagen": "Empleado ayudando a un cliente en un mostrador",
            "ejemplo": [
              "Our staff will be happy to assist you.",
              "Nuestro personal con gusto le ayudará."
            ]
          },
          {
            "en": "inform",
            "es": "informar",
            "imagen": "Persona leyendo un aviso oficial",
            "ejemplo": [
              "We regret to inform you that the event is canceled.",
              "Lamentamos informarle que el evento se canceló."
            ]
          },
          {
            "en": "commence",
            "es": "comenzar",
            "imagen": "Juez golpeando el mazo al inicio",
            "ejemplo": [
              "The ceremony will commence at ten.",
              "La ceremonia comenzará a las diez."
            ]
          },
          {
            "en": "sufficient",
            "es": "suficiente",
            "imagen": "Vaso lleno hasta el nivel justo",
            "ejemplo": [
              "There is not sufficient evidence.",
              "No hay pruebas suficientes."
            ]
          },
          {
            "en": "regarding",
            "es": "respecto a",
            "imagen": "Carta con el asunto subrayado",
            "ejemplo": [
              "I am writing regarding your recent order.",
              "Le escribo respecto a su pedido reciente."
            ]
          }
        ]
      },
      {
        "id": "suavizar",
        "titulo": "Frases para suavizar",
        "icono": "🕊️",
        "patron": [
          "I'm afraid…",
          "Perhaps we could…",
          "It seems that…"
        ],
        "palabras": [
          {
            "en": "Perhaps we could",
            "es": "tal vez podríamos",
            "imagen": "Equipo proponiendo ideas en una junta",
            "ejemplo": [
              "Perhaps we could meet next week instead.",
              "Tal vez podríamos vernos la próxima semana."
            ]
          },
          {
            "en": "It seems that",
            "es": "parece que",
            "imagen": "Persona revisando una factura con un error",
            "ejemplo": [
              "It seems that there has been a mistake.",
              "Parece que hubo un error."
            ]
          },
          {
            "en": "I'm not sure that's",
            "es": "no estoy seguro de que sea",
            "imagen": "Persona dudando ante una propuesta",
            "ejemplo": [
              "I'm not sure that's the best idea.",
              "No estoy seguro de que sea la mejor idea."
            ]
          },
          {
            "en": "a bit of a problem",
            "es": "un pequeño problema",
            "imagen": "Persona mirando una llave que gotea",
            "ejemplo": [
              "We have a bit of a problem with the order.",
              "Tenemos un pequeño problema con el pedido."
            ]
          },
          {
            "en": "with all due respect",
            "es": "con todo respeto",
            "imagen": "Persona hablando con calma en una junta",
            "ejemplo": [
              "With all due respect, I disagree.",
              "Con todo respeto, no estoy de acuerdo."
            ]
          },
          {
            "en": "Would it be possible",
            "es": "¿sería posible?",
            "imagen": "Persona hablando por teléfono con cortesía",
            "ejemplo": [
              "Would it be possible to change the date?",
              "¿Sería posible cambiar la fecha?"
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I would be grateful if you could send me the details.",
        "es": "Le agradecería que me enviara los detalles."
      },
      {
        "en": "I am writing to apply for the position of designer.",
        "es": "Le escribo para solicitar el puesto de diseñador."
      },
      {
        "en": "Please accept my apologies for the delay.",
        "es": "Le ofrezco una disculpa por el retraso."
      },
      {
        "en": "Would you mind closing the window?",
        "es": "¿Le importaría cerrar la ventana?"
      },
      {
        "en": "I was wondering if you could help me.",
        "es": "Me preguntaba si me podrías ayudar."
      },
      {
        "en": "I'm afraid the flight has been canceled.",
        "es": "Me temo que el vuelo fue cancelado."
      },
      {
        "en": "Tickets can be purchased online.",
        "es": "Los boletos se pueden comprar en línea."
      },
      {
        "en": "Perhaps we could meet next week instead.",
        "es": "Tal vez podríamos vernos la próxima semana."
      },
      {
        "en": "With all due respect, I disagree.",
        "es": "Con todo respeto, no estoy de acuerdo."
      },
      {
        "en": "The design is not quite what we expected.",
        "es": "El diseño no es exactamente lo que esperábamos."
      }
    ],
    "frases": [
      {
        "en": "I am writing to inform you that your application has been successful.",
        "es": "Le escribo para informarle que su solicitud ha sido aceptada.",
        "imagen": "Persona feliz leyendo un correo en su laptop"
      },
      {
        "en": "We regret to inform you that the concert has been postponed due to bad weather.",
        "es": "Lamentamos informarle que el concierto se pospuso por el mal clima.",
        "imagen": "Escenario vacío bajo la lluvia"
      },
      {
        "en": "Hey, sorry I missed your call! Can we talk later?",
        "es": "¡Oye, perdón que no contesté! ¿Hablamos más tarde?",
        "imagen": "Persona escribiendo un mensaje en el celular"
      },
      {
        "en": "I was wondering if it would be possible to extend the deadline by a few days.",
        "es": "Me preguntaba si sería posible extender la fecha límite unos días.",
        "imagen": "Calendario con una fecha marcada en rojo"
      },
      {
        "en": "With all due respect, I don't think this plan takes our customers into account.",
        "es": "Con todo respeto, no creo que este plan tome en cuenta a nuestros clientes.",
        "imagen": "Junta de trabajo con una persona hablando"
      },
      {
        "en": "Could you possibly lend me your notes from yesterday's class?",
        "es": "¿Podrías prestarme tus apuntes de la clase de ayer?",
        "imagen": "Estudiantes compartiendo apuntes en una biblioteca"
      },
      {
        "en": "Should you require any further information, please do not hesitate to contact us.",
        "es": "Si necesita más información, no dude en contactarnos.",
        "imagen": "Recepcionista contestando el teléfono"
      },
      {
        "en": "It's not quite what I had in mind, but it's a good start.",
        "es": "No es exactamente lo que tenía en mente, pero es un buen comienzo.",
        "imagen": "Diseñador revisando bocetos con un cliente"
      },
      {
        "en": "It can be argued that social media has changed the way we form opinions.",
        "es": "Se puede argumentar que las redes sociales han cambiado la forma en que formamos opiniones.",
        "imagen": "Persona leyendo noticias en su teléfono"
      },
      {
        "en": "Thanks a million for the ride, I owe you one!",
        "es": "¡Mil gracias por el aventón, te debo una!",
        "imagen": "Amigo bajándose de un carro despidiéndose"
      }
    ],
    "listening": [
      {
        "audio": "Would you mind turning the music down a little?",
        "pregunta": "¿Qué pide?",
        "opciones": [
          "Que bajen la música",
          "Que suban la música",
          "Que pongan otra canción",
          "Que apaguen la luz"
        ]
      },
      {
        "audio": "I'm afraid we don't have any rooms available tonight.",
        "pregunta": "¿Qué informa?",
        "opciones": [
          "No hay lugar disponible",
          "Hay muchos lugares",
          "Está cerrado mañana",
          "Es muy caro"
        ]
      },
      {
        "audio": "Please accept my apologies for the inconvenience.",
        "pregunta": "¿Qué hace la persona?",
        "opciones": [
          "Se disculpa",
          "Se queja",
          "Agradece",
          "Invita"
        ]
      },
      {
        "audio": "No worries, mate. See you tomorrow.",
        "pregunta": "¿Qué tono tiene?",
        "opciones": [
          "Informal",
          "Muy formal",
          "Enojado",
          "Triste"
        ]
      },
      {
        "audio": "Perhaps we could discuss this after lunch.",
        "pregunta": "¿Qué propone?",
        "opciones": [
          "Hablarlo después de comer",
          "Comer juntos",
          "No hablarlo nunca",
          "Hablarlo ahora"
        ]
      }
    ],
    "lectura": {
      "titulo": "Two emails, one message",
      "texto": "Read these two emails. Both say the same thing, but the tone could not be more different. The first one is to a friend: Hi Tom, Bad news, I'm afraid. I can't make it on Saturday. Something came up at work. Sorry! Let's catch up next week? Cheers, Paula. The second one is to a client: Dear Mr. Thompson, I regret to inform you that I will be unable to attend the meeting on Saturday, due to an unforeseen work commitment. Please accept my sincere apologies for any inconvenience this may cause. Would it be possible to reschedule for next week? I look forward to hearing from you. Kind regards, Paula Ruiz. Notice how the formal version avoids contractions, uses longer words such as unable, attend and unforeseen, and includes polite fixed phrases. The informal one is short, friendly and full of everyday expressions such as make it and catch up. Neither is better than the other: what matters is choosing the right style for the right person.",
      "preguntas": [
        {
          "pregunta": "¿Qué tienen en común los dos correos?",
          "opciones": [
            "Dicen lo mismo",
            "Son para la misma persona",
            "Tienen el mismo tono",
            "Son muy largos"
          ]
        },
        {
          "pregunta": "¿Qué evita la versión formal?",
          "opciones": [
            "Las contracciones",
            "Los saludos",
            "Las disculpas",
            "Las fechas"
          ]
        },
        {
          "pregunta": "¿Qué significa «I can't make it»?",
          "opciones": [
            "No puedo ir",
            "No lo puedo hacer",
            "No lo entiendo",
            "No lo tengo"
          ]
        },
        {
          "pregunta": "Según el texto, ¿qué es lo importante?",
          "opciones": [
            "Elegir el estilo adecuado para cada persona",
            "Escribir siempre formal",
            "Escribir siempre informal",
            "Escribir correos cortos"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Escribe la versión formal.",
        "pregunta": "buy",
        "respuestas": [
          "purchase"
        ]
      },
      {
        "instruccion": "Escribe la versión formal.",
        "pregunta": "help",
        "respuestas": [
          "assist"
        ]
      },
      {
        "instruccion": "Escribe la versión formal.",
        "pregunta": "start",
        "respuestas": [
          "commence",
          "begin"
        ]
      },
      {
        "instruccion": "Escribe la versión formal.",
        "pregunta": "look into",
        "respuestas": [
          "investigate",
          "examine"
        ]
      },
      {
        "instruccion": "Completa la frase cortés.",
        "pregunta": "Would you ___ opening the door?",
        "respuestas": [
          "mind"
        ]
      },
      {
        "instruccion": "Completa el inicio de un correo formal.",
        "pregunta": "I am ___ to apply for the job.",
        "respuestas": [
          "writing"
        ]
      },
      {
        "instruccion": "Completa el cierre formal.",
        "pregunta": "Kind ___, Laura.",
        "respuestas": [
          "regards"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Le agradecería que me llamara.",
        "respuestas": [
          "I would be grateful if you could call me",
          "I would be grateful if you called me"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Me preguntaba si me podrías ayudar.",
        "respuestas": [
          "I was wondering if you could help me"
        ]
      },
      {
        "instruccion": "Suaviza la crítica.",
        "pregunta": "This is wrong. That's not quite ___.",
        "respuestas": [
          "right",
          "correct"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es más formal?",
        "opciones": [
          "I would be grateful if you could help me.",
          "Can you help me?",
          "Give me a hand?",
          "Help me, please."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es informal?",
        "opciones": [
          "Cheers!",
          "Kind regards",
          "Yours sincerely",
          "Dear Sir"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We regret to ___ you that the event is canceled.",
        "opciones": [
          "inform",
          "tell to",
          "say",
          "speak"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Would you mind ___ me later?",
        "opciones": [
          "calling",
          "to call",
          "call",
          "called"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«That's not quite what we expected» en realidad quiere decir:",
        "opciones": [
          "No nos gustó",
          "Nos encantó",
          "Es exactamente lo que queríamos",
          "No lo hemos visto"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "El equivalente formal de «put up with» es:",
        "opciones": [
          "tolerate",
          "receive",
          "purchase",
          "commence"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I was wondering if you could send me the report today.",
        "pregunta": "¿Qué pide?",
        "opciones": [
          "El informe hoy",
          "Una reunión",
          "Un aumento",
          "Un día libre"
        ]
      },
      {
        "tipo": "listening",
        "audio": "With all due respect, I think we should wait.",
        "pregunta": "¿Qué opina?",
        "opciones": [
          "Que deberían esperar",
          "Que deberían empezar ya",
          "Que está de acuerdo",
          "Que no le importa"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: me temo que no",
        "respuestas": [
          "I'm afraid not",
          "I am afraid not"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: con todo respeto",
        "respuestas": [
          "with all due respect"
        ]
      }
    ]
  },
  {
    "id": "c2-12",
    "num": 12,
    "titulo": "Variedades del inglés (EE. UU., Reino Unido, Australia…)",
    "contexto": "Acentos y diferencias",
    "explicacion": {
      "es": [
        "El inglés se habla como lengua oficial en decenas de países, y cada uno tiene su **acento**, su **vocabulario** y algunas **diferencias gramaticales**. Las dos grandes referencias son el inglés **americano** y el **británico**, pero también son importantes el australiano, el canadiense, el irlandés, el indio y el sudafricano.",
        "**Vocabulario**: EE. UU. *apartment, elevator, truck, cookie, vacation, fall, sidewalk, line* ↔ Reino Unido *flat, lift, lorry, biscuit, holiday, autumn, pavement, queue*. Australia tiene sus propias palabras: *arvo* (tarde), *brekkie* (desayuno), *mate* (amigo).",
        "**Ortografía**: *color / colour, center / centre, organize / organise, traveled / travelled*. **Gramática**: los británicos dicen *Have you got…?* y *in hospital*; los americanos, *Do you have…?* y *in the hospital*. En EE. UU. se usa más el pasado simple: *Did you eat yet?*",
        "**Pronunciación**: en EE. UU. la *r* final suena (*car*), en Inglaterra casi no. La *t* entre vocales americana suena como *d* suave (*water* ≈ *wader*). *Tomato*, *schedule* y *can't* se dicen distinto. Lo importante: **todos son correctos**; elige uno y sé **coherente**."
      ],
      "tabla": {
        "columnas": [
          "EE. UU.",
          "Reino Unido",
          "Español"
        ],
        "filas": [
          [
            "apartment",
            "flat",
            "departamento"
          ],
          [
            "elevator",
            "lift",
            "elevador"
          ],
          [
            "cookie",
            "biscuit",
            "galleta"
          ],
          [
            "vacation",
            "holiday",
            "vacaciones"
          ],
          [
            "line",
            "queue",
            "fila"
          ],
          [
            "fall",
            "autumn",
            "otoño"
          ]
        ]
      },
      "ojo": [
        "***Pants*** en EE. UU. = pantalón; en Reino Unido = **calzones**. ¡Cuidado!",
        "***First floor*** en EE. UU. = planta baja; en Reino Unido = primer piso (la planta baja es *ground floor*).",
        "Fechas: EE. UU. ***11/12*** = 12 de noviembre; Reino Unido ***11/12*** = 11 de diciembre.",
        "Los británicos usan más el ***present perfect***: *I've just eaten* (EE. UU.: *I just ate*).",
        "Ningún acento es «mejor». Lo importante es que **te entiendan** y que tú **entiendas** a todos."
      ],
      "en": [
        "Apartment and flat. Elevator and lift. Cookie and biscuit.",
        "Do you have a car? Have you got a car?",
        "Color is American spelling. Colour is British spelling.",
        "Every variety of English is correct."
      ]
    },
    "vocabulario": [
      {
        "en": "apartment, flat",
        "es": "departamento",
        "imagen": "Edificio de departamentos",
        "ejemplo": [
          "We live in a small apartment downtown.",
          "Vivimos en un departamento pequeño en el centro."
        ]
      },
      {
        "en": "elevator, lift",
        "es": "elevador",
        "imagen": "Puertas de un elevador abriéndose",
        "ejemplo": [
          "Let's take the lift to the fifth floor.",
          "Tomemos el elevador al quinto piso."
        ]
      },
      {
        "en": "cookie, biscuit",
        "es": "galleta",
        "imagen": "Galletas en un plato con leche",
        "ejemplo": [
          "Would you like a biscuit with your tea?",
          "¿Quieres una galleta con tu té?"
        ]
      },
      {
        "en": "vacation, holiday",
        "es": "vacaciones",
        "imagen": "Familia en la playa",
        "ejemplo": [
          "We're going on holiday to Spain.",
          "Nos vamos de vacaciones a España."
        ]
      },
      {
        "en": "line, queue",
        "es": "fila",
        "imagen": "Personas haciendo fila en una taquilla",
        "ejemplo": [
          "There was a long queue at the bank.",
          "Había una fila larga en el banco."
        ]
      },
      {
        "en": "fall, autumn",
        "es": "otoño",
        "imagen": "Hojas anaranjadas en un parque",
        "ejemplo": [
          "The leaves turn red in the fall.",
          "Las hojas se ponen rojas en otoño."
        ]
      },
      {
        "en": "truck, lorry",
        "es": "camión de carga",
        "imagen": "Camión de carga en la carretera",
        "ejemplo": [
          "A lorry blocked the road.",
          "Un camión de carga bloqueó la carretera."
        ]
      },
      {
        "en": "sidewalk, pavement",
        "es": "banqueta",
        "imagen": "Personas caminando por la banqueta",
        "ejemplo": [
          "Don't ride your bike on the sidewalk.",
          "No andes en bici por la banqueta."
        ]
      },
      {
        "en": "cell phone, mobile",
        "es": "celular",
        "imagen": "Persona usando su celular",
        "ejemplo": [
          "I left my mobile at home.",
          "Dejé el celular en casa."
        ]
      },
      {
        "en": "garbage, rubbish",
        "es": "basura",
        "imagen": "Bote de basura lleno",
        "ejemplo": [
          "Can you take out the garbage?",
          "¿Puedes sacar la basura?"
        ]
      },
      {
        "en": "movie, film",
        "es": "película",
        "imagen": "Sala de cine con público",
        "ejemplo": [
          "Have you seen the new film?",
          "¿Ya viste la película nueva?"
        ]
      },
      {
        "en": "gas, petrol",
        "es": "gasolina",
        "imagen": "Gasolinera con un carro cargando",
        "ejemplo": [
          "We need to stop for petrol.",
          "Tenemos que parar por gasolina."
        ]
      },
      {
        "en": "pants, trousers",
        "es": "pantalón",
        "imagen": "Pantalones doblados en una tienda",
        "ejemplo": [
          "These trousers are too long.",
          "Estos pantalones me quedan largos."
        ]
      },
      {
        "en": "ground floor",
        "es": "planta baja",
        "imagen": "Recepción de un edificio",
        "ejemplo": [
          "The café is on the ground floor.",
          "La cafetería está en la planta baja."
        ]
      },
      {
        "en": "mate",
        "es": "amigo",
        "imagen": "Dos amigos australianos en la playa",
        "ejemplo": [
          "Thanks, mate!",
          "¡Gracias, amigo!"
        ]
      },
      {
        "en": "arvo",
        "es": "tarde",
        "imagen": "Atardecer en una playa australiana",
        "ejemplo": [
          "See you this arvo!",
          "¡Nos vemos en la tarde!"
        ]
      }
    ],
    "grupos": [
      {
        "id": "ortografia",
        "titulo": "Ortografía",
        "icono": "✍️",
        "patron": [
          "color, colour",
          "center, centre",
          "organize, organise"
        ],
        "palabras": [
          {
            "en": "color, colour",
            "es": "color",
            "imagen": "Paleta de pintor",
            "ejemplo": [
              "What's your favourite colour?",
              "¿Cuál es tu color favorito?"
            ]
          },
          {
            "en": "center, centre",
            "es": "centro",
            "imagen": "Plaza central de una ciudad",
            "ejemplo": [
              "The shopping centre opens at ten.",
              "El centro comercial abre a las diez."
            ]
          },
          {
            "en": "organize, organise",
            "es": "organizar",
            "imagen": "Persona organizando un clóset",
            "ejemplo": [
              "We need to organise the party.",
              "Tenemos que organizar la fiesta."
            ]
          },
          {
            "en": "traveled, travelled",
            "es": "viajó",
            "imagen": "Pasaporte con muchos sellos",
            "ejemplo": [
              "She travelled all over Asia.",
              "Viajó por toda Asia."
            ]
          },
          {
            "en": "theater, theatre",
            "es": "teatro",
            "imagen": "Escenario de teatro con telón rojo",
            "ejemplo": [
              "We went to the theatre last night.",
              "Fuimos al teatro anoche."
            ]
          },
          {
            "en": "program, programme",
            "es": "programa",
            "imagen": "Persona viendo la tele",
            "ejemplo": [
              "My favourite TV programme starts at nine.",
              "Mi programa favorito empieza a las nueve."
            ]
          }
        ]
      },
      {
        "id": "gramatica",
        "titulo": "Diferencias de gramática",
        "icono": "📚",
        "patron": [
          "Do you have…? Have you got…?",
          "I just ate. I've just eaten.",
          "on the weekend, at the weekend"
        ],
        "palabras": [
          {
            "en": "Have you got",
            "es": "¿tienes?",
            "imagen": "Persona preguntando por un bolígrafo",
            "ejemplo": [
              "Have you got a pen?",
              "¿Tienes una pluma?"
            ]
          },
          {
            "en": "Do you have",
            "es": "¿tienes?",
            "imagen": "Persona preguntando en una tienda",
            "ejemplo": [
              "Do you have this in blue?",
              "¿Lo tiene en azul?"
            ]
          },
          {
            "en": "I just ate",
            "es": "acabo de comer",
            "imagen": "Plato vacío en una mesa",
            "ejemplo": [
              "No thanks, I just ate.",
              "No, gracias, acabo de comer."
            ]
          },
          {
            "en": "I've just eaten",
            "es": "acabo de comer",
            "imagen": "Persona satisfecha después de comer",
            "ejemplo": [
              "No thanks, I've just eaten.",
              "No, gracias, acabo de comer."
            ]
          },
          {
            "en": "on the weekend",
            "es": "el fin de semana",
            "imagen": "Familia en un día de campo",
            "ejemplo": [
              "What are you doing on the weekend?",
              "¿Qué vas a hacer el fin de semana?"
            ]
          },
          {
            "en": "at the weekend",
            "es": "el fin de semana",
            "imagen": "Pareja paseando en un parque inglés",
            "ejemplo": [
              "We usually relax at the weekend.",
              "Normalmente descansamos el fin de semana."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "We live in a small apartment downtown.",
        "es": "Vivimos en un departamento pequeño en el centro."
      },
      {
        "en": "Let's take the lift to the fifth floor.",
        "es": "Tomemos el elevador al quinto piso."
      },
      {
        "en": "Would you like a biscuit with your tea?",
        "es": "¿Quieres una galleta con tu té?"
      },
      {
        "en": "There was a long queue at the bank.",
        "es": "Había una fila larga en el banco."
      },
      {
        "en": "The leaves turn red in the fall.",
        "es": "Las hojas se ponen rojas en otoño."
      },
      {
        "en": "I left my mobile at home.",
        "es": "Dejé el celular en casa."
      },
      {
        "en": "We need to stop for petrol.",
        "es": "Tenemos que parar por gasolina."
      },
      {
        "en": "The café is on the ground floor.",
        "es": "La cafetería está en la planta baja."
      },
      {
        "en": "Have you got a pen?",
        "es": "¿Tienes una pluma?"
      },
      {
        "en": "No thanks, I just ate.",
        "es": "No, gracias, acabo de comer."
      }
    ],
    "frases": [
      {
        "en": "In New York we stayed in an apartment on the tenth floor, but the elevator was always broken.",
        "es": "En Nueva York nos quedamos en un departamento en el piso diez, pero el elevador siempre estaba descompuesto.",
        "imagen": "Edificio alto de Nueva York"
      },
      {
        "en": "In London, people form an orderly queue at the bus stop without being asked.",
        "es": "En Londres, la gente hace fila ordenada en la parada sin que nadie se lo pida.",
        "imagen": "Fila ordenada en una parada de autobús en Londres"
      },
      {
        "en": "When I said I liked his pants, my British friend started laughing.",
        "es": "Cuando le dije que me gustaban sus pants, mi amigo británico se empezó a reír.",
        "imagen": "Amigos riéndose en una calle inglesa"
      },
      {
        "en": "Australians often shorten words, so breakfast becomes brekkie and afternoon becomes arvo.",
        "es": "Los australianos suelen acortar palabras, así que breakfast se vuelve brekkie y afternoon se vuelve arvo.",
        "imagen": "Café al aire libre en Sídney"
      },
      {
        "en": "In the United States, the first floor is the ground floor, which confuses many European visitors.",
        "es": "En Estados Unidos, el primer piso es la planta baja, lo cual confunde a muchos visitantes europeos.",
        "imagen": "Turistas mirando el tablero de un elevador"
      },
      {
        "en": "American spelling was simplified in the nineteenth century by Noah Webster, who wanted a national identity.",
        "es": "La ortografía americana fue simplificada en el siglo diecinueve por Noah Webster, quien quería una identidad nacional.",
        "imagen": "Diccionario antiguo sobre un escritorio"
      },
      {
        "en": "Many Canadians use British spelling but American vocabulary, so they write colour but say truck.",
        "es": "Muchos canadienses usan la ortografía británica pero el vocabulario americano: escriben colour pero dicen truck.",
        "imagen": "Bandera de Canadá en una ciudad nevada"
      },
      {
        "en": "Indian English has given the world words like shampoo, jungle and pajamas.",
        "es": "El inglés de la India le ha dado al mundo palabras como shampoo, jungle y pajamas.",
        "imagen": "Calle colorida de una ciudad de la India"
      },
      {
        "en": "Irish English is famous for its musical intonation and expressions like grand, which means fine.",
        "es": "El inglés irlandés es famoso por su entonación musical y expresiones como grand, que significa bien.",
        "imagen": "Pueblo verde de Irlanda con casas de colores"
      },
      {
        "en": "It doesn't matter which accent you learn, as long as you are consistent and people understand you.",
        "es": "No importa qué acento aprendas, siempre que seas coherente y la gente te entienda.",
        "imagen": "Estudiantes de varios países conversando"
      }
    ],
    "listening": [
      {
        "audio": "Excuse me, where's the lift?",
        "pregunta": "¿Qué busca?",
        "opciones": [
          "El elevador",
          "La escalera",
          "El baño",
          "La salida"
        ]
      },
      {
        "audio": "We're going on holiday in August.",
        "pregunta": "¿Qué harán en agosto?",
        "opciones": [
          "Irse de vacaciones",
          "Trabajar",
          "Mudarse",
          "Estudiar"
        ]
      },
      {
        "audio": "There's a huge queue outside the museum.",
        "pregunta": "¿Qué hay afuera del museo?",
        "opciones": [
          "Una fila enorme",
          "Un camión",
          "Un parque",
          "Una tienda"
        ]
      },
      {
        "audio": "I'll see you this arvo, mate.",
        "pregunta": "¿Cuándo se van a ver?",
        "opciones": [
          "En la tarde",
          "Mañana",
          "En la noche",
          "La próxima semana"
        ]
      },
      {
        "audio": "We've run out of petrol.",
        "pregunta": "¿Qué se acabó?",
        "opciones": [
          "La gasolina",
          "El dinero",
          "La comida",
          "El agua"
        ]
      }
    ],
    "lectura": {
      "titulo": "One language, many voices",
      "texto": "More than one and a half billion people speak English today, but only about four hundred million of them are native speakers. This means that most conversations in English happen between people for whom it is a second language. As English spread around the world, first through the British Empire and later through American films, music and technology, it adapted to each place. In Singapore, people add the word lah at the end of sentences to give them emphasis. In Nigeria, English has borrowed many words from local languages. In Australia, almost every word can be shortened: a barbecue is a barbie, and a mosquito is a mozzie. Linguists now talk about World Englishes, in the plural, to show that there is no single correct version. For learners, this has an important consequence: instead of trying to sound exactly like a native speaker from London or New York, the real goal is to be clear and to understand a wide range of accents. After all, the person you talk to in English might be from Mumbai, Lagos or Seoul.",
      "preguntas": [
        {
          "pregunta": "¿Cuántas personas hablan inglés como lengua materna?",
          "opciones": [
            "Unos cuatrocientos millones",
            "Mil quinientos millones",
            "Cien millones",
            "Dos mil millones"
          ]
        },
        {
          "pregunta": "¿Qué agregan al final de las frases en Singapur?",
          "opciones": [
            "La palabra lah",
            "La palabra mate",
            "La palabra grand",
            "Nada"
          ]
        },
        {
          "pregunta": "¿Qué significa «World Englishes»?",
          "opciones": [
            "Que no hay una sola versión correcta",
            "Un examen internacional",
            "El inglés británico",
            "Un libro famoso"
          ]
        },
        {
          "pregunta": "Según el texto, ¿cuál es la meta real del estudiante?",
          "opciones": [
            "Ser claro y entender muchos acentos",
            "Sonar como alguien de Londres",
            "Sonar como alguien de Nueva York",
            "Aprender todos los acentos"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Escribe la palabra británica.",
        "pregunta": "apartment",
        "respuestas": [
          "flat"
        ]
      },
      {
        "instruccion": "Escribe la palabra británica.",
        "pregunta": "elevator",
        "respuestas": [
          "lift"
        ]
      },
      {
        "instruccion": "Escribe la palabra británica.",
        "pregunta": "line (fila)",
        "respuestas": [
          "queue"
        ]
      },
      {
        "instruccion": "Escribe la palabra americana.",
        "pregunta": "autumn",
        "respuestas": [
          "fall"
        ]
      },
      {
        "instruccion": "Escribe la palabra americana.",
        "pregunta": "biscuit",
        "respuestas": [
          "cookie"
        ]
      },
      {
        "instruccion": "Escribe la ortografía británica.",
        "pregunta": "color",
        "respuestas": [
          "colour"
        ]
      },
      {
        "instruccion": "Escribe la ortografía británica.",
        "pregunta": "center",
        "respuestas": [
          "centre"
        ]
      },
      {
        "instruccion": "Escribe la versión británica.",
        "pregunta": "Do you have a car? (got)",
        "respuestas": [
          "Have you got a car"
        ]
      },
      {
        "instruccion": "Traduce al inglés británico.",
        "pregunta": "planta baja",
        "respuestas": [
          "ground floor"
        ]
      },
      {
        "instruccion": "Traduce al inglés australiano.",
        "pregunta": "amigo",
        "respuestas": [
          "mate"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "En Reino Unido, «pants» significa:",
        "opciones": [
          "Calzones",
          "Pantalón",
          "Zapatos",
          "Camisa"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "La palabra americana para «petrol» es:",
        "opciones": [
          "gas",
          "oil",
          "fuel",
          "diesel"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es ortografía británica?",
        "opciones": [
          "organise",
          "organize",
          "organice",
          "organyse"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "En EE. UU., el «first floor» es:",
        "opciones": [
          "La planta baja",
          "El primer piso arriba",
          "El sótano",
          "La azotea"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Brekkie» en Australia significa:",
        "opciones": [
          "Desayuno",
          "Descanso",
          "Cerveza",
          "Amigo"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál acento es el correcto?",
        "opciones": [
          "Todos son correctos",
          "Solo el británico",
          "Solo el americano",
          "Solo el australiano"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Could you take the rubbish out, please?",
        "pregunta": "¿Qué le piden?",
        "opciones": [
          "Sacar la basura",
          "Lavar los platos",
          "Ir de compras",
          "Abrir la puerta"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I've just been to the cinema to see a film.",
        "pregunta": "¿Dónde estuvo?",
        "opciones": [
          "En el cine",
          "En el teatro",
          "En el parque",
          "En la escuela"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Escribe la palabra americana para «trousers»",
        "respuestas": [
          "pants"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Escribe la palabra británica para «cell phone»",
        "respuestas": [
          "mobile",
          "mobile phone"
        ]
      }
    ]
  },
  {
    "id": "c2-13",
    "num": 13,
    "titulo": "Recursos retóricos y persuasión",
    "contexto": "Debates y discursos",
    "explicacion": {
      "es": [
        "Los grandes oradores usan **recursos retóricos** para convencer y emocionar. La **regla de tres** agrupa ideas en tríos porque se recuerdan mejor: *Government **of** the people, **by** the people, **for** the people.*",
        "La **pregunta retórica** no espera respuesta: ***Who doesn't want a better future?*** La **repetición** (anáfora) refuerza una idea: ***We will** fight… **we will** never surrender.* El **contraste** opone dos ideas: *Ask not what your country can do for you; ask what you can do for your country.*",
        "Los argumentos clásicos son tres: **ethos** (credibilidad: *As a doctor with twenty years of experience…*), **pathos** (emoción: *Imagine a child going to bed hungry…*) y **logos** (lógica y datos: *Studies show that…*).",
        "En un debate son útiles las frases para **conceder y refutar**: ***Admittedly…, but…***, ***While it's true that…***, ***That may be so, but…***, ***On the contrary…***. Y para concluir: ***In short…***, ***The bottom line is…***"
      ],
      "tabla": {
        "columnas": [
          "Recurso",
          "Para qué sirve",
          "Ejemplo"
        ],
        "filas": [
          [
            "regla de tres",
            "ritmo y memoria",
            "Faster, cheaper, better."
          ],
          [
            "pregunta retórica",
            "involucrar al público",
            "Isn't it time we acted?"
          ],
          [
            "repetición",
            "reforzar",
            "We can. We must. We will."
          ],
          [
            "contraste",
            "destacar una idea",
            "Not a cost, but an investment."
          ],
          [
            "concesión",
            "parecer justo",
            "Admittedly, it's expensive, but…"
          ],
          [
            "dato",
            "dar lógica",
            "Statistics show that…"
          ]
        ]
      },
      "ojo": [
        "No abuses: demasiadas preguntas retóricas suenan **manipuladoras**.",
        "***Admittedly*** = hay que reconocer que. *Admittedly, the plan is risky, but the rewards are huge.*",
        "***Not only… but also*** con inversión da fuerza: ***Not only** is it cheaper, **but** it's **also** faster.*",
        "Las **cifras** convencen más con imagen: *That's enough water to fill ten Olympic pools.*",
        "Identifica estos recursos también como **oyente**: te ayudarán a detectar la **manipulación** en anuncios y en política."
      ],
      "en": [
        "Faster, cheaper, better.",
        "Who doesn't want a better future?",
        "It's not a cost, but an investment.",
        "Admittedly, it's expensive, but it will save money in the long run."
      ]
    },
    "vocabulario": [
      {
        "en": "Admittedly",
        "es": "hay que reconocer que",
        "imagen": "Persona concediendo un punto en un debate",
        "ejemplo": [
          "Admittedly, the plan is expensive.",
          "Hay que reconocer que el plan es caro."
        ]
      },
      {
        "en": "While it's true that",
        "es": "si bien es cierto que",
        "imagen": "Debate entre dos personas en un escenario",
        "ejemplo": [
          "While it's true that prices rose, salaries rose too.",
          "Si bien es cierto que subieron los precios, también subieron los sueldos."
        ]
      },
      {
        "en": "That may be so, but",
        "es": "puede ser, pero",
        "imagen": "Persona levantando la mano para objetar",
        "ejemplo": [
          "That may be so, but it doesn't solve the problem.",
          "Puede ser, pero no resuelve el problema."
        ]
      },
      {
        "en": "On the contrary",
        "es": "al contrario",
        "imagen": "Persona negando con firmeza en una mesa redonda",
        "ejemplo": [
          "It's not a waste of money. On the contrary, it's an investment.",
          "No es un desperdicio de dinero. Al contrario, es una inversión."
        ]
      },
      {
        "en": "Imagine a world",
        "es": "imagina un mundo",
        "imagen": "Ciudad verde y limpia del futuro",
        "ejemplo": [
          "Imagine a world without plastic in the oceans.",
          "Imagina un mundo sin plástico en los océanos."
        ]
      },
      {
        "en": "The bottom line is",
        "es": "lo esencial es",
        "imagen": "Presentador señalando la conclusión en una pantalla",
        "ejemplo": [
          "The bottom line is that we need more teachers.",
          "Lo esencial es que necesitamos más maestros."
        ]
      },
      {
        "en": "Let me be clear",
        "es": "quiero ser claro",
        "imagen": "Político hablando en un podio",
        "ejemplo": [
          "Let me be clear: this will not happen again.",
          "Quiero ser claro: esto no volverá a pasar."
        ]
      },
      {
        "en": "Statistics show that",
        "es": "las estadísticas muestran que",
        "imagen": "Gráfica de barras en una presentación",
        "ejemplo": [
          "Statistics show that crime has fallen.",
          "Las estadísticas muestran que el crimen ha disminuido."
        ]
      },
      {
        "en": "Isn't it time",
        "es": "¿no es hora de?",
        "imagen": "Reloj grande en una plaza",
        "ejemplo": [
          "Isn't it time we took action?",
          "¿No es hora de que actuemos?"
        ]
      },
      {
        "en": "not a cost, but an investment",
        "es": "no un gasto, sino una inversión",
        "imagen": "Persona plantando un árbol pequeño",
        "ejemplo": [
          "Education is not a cost, but an investment.",
          "La educación no es un gasto, sino una inversión."
        ]
      },
      {
        "en": "In short",
        "es": "en resumen",
        "imagen": "Persona cerrando una presentación",
        "ejemplo": [
          "In short, the project is a success.",
          "En resumen, el proyecto es un éxito."
        ]
      },
      {
        "en": "compelling",
        "es": "convincente",
        "imagen": "Abogado hablando ante un jurado",
        "ejemplo": [
          "She made a compelling argument.",
          "Presentó un argumento convincente."
        ]
      },
      {
        "en": "persuade",
        "es": "persuadir",
        "imagen": "Vendedor convenciendo a un cliente",
        "ejemplo": [
          "He persuaded me to join the team.",
          "Me convenció de unirme al equipo."
        ]
      },
      {
        "en": "audience",
        "es": "público",
        "imagen": "Auditorio lleno escuchando una charla",
        "ejemplo": [
          "The audience gave him a standing ovation.",
          "El público lo ovacionó de pie."
        ]
      },
      {
        "en": "appeal to",
        "es": "apelar a",
        "imagen": "Persona hablando con emoción a una multitud",
        "ejemplo": [
          "The speech appealed to people's emotions.",
          "El discurso apeló a las emociones de la gente."
        ]
      },
      {
        "en": "counterargument",
        "es": "contraargumento",
        "imagen": "Dos personas debatiendo con tarjetas",
        "ejemplo": [
          "Always prepare for the counterargument.",
          "Siempre prepárate para el contraargumento."
        ]
      }
    ],
    "grupos": [
      {
        "id": "debate",
        "titulo": "Frases para debatir",
        "icono": "🎤",
        "patron": [
          "I'd like to point out that…",
          "With respect, I disagree.",
          "Let me finish."
        ],
        "palabras": [
          {
            "en": "I'd like to point out that",
            "es": "me gustaría señalar que",
            "imagen": "Persona hablando en una mesa de debate",
            "ejemplo": [
              "I'd like to point out that the data is old.",
              "Me gustaría señalar que los datos son viejos."
            ]
          },
          {
            "en": "Let me finish",
            "es": "déjame terminar",
            "imagen": "Persona levantando la mano para seguir hablando",
            "ejemplo": [
              "Please, let me finish my point.",
              "Por favor, déjame terminar mi idea."
            ]
          },
          {
            "en": "That's a fair point",
            "es": "es un punto válido",
            "imagen": "Persona asintiendo en una discusión",
            "ejemplo": [
              "That's a fair point, but consider the cost.",
              "Es un punto válido, pero considera el costo."
            ]
          },
          {
            "en": "I take your point",
            "es": "entiendo lo que dices",
            "imagen": "Persona escuchando con atención",
            "ejemplo": [
              "I take your point, but I still disagree.",
              "Entiendo lo que dices, pero sigo sin estar de acuerdo."
            ]
          },
          {
            "en": "The evidence suggests",
            "es": "la evidencia sugiere",
            "imagen": "Investigadora mostrando documentos",
            "ejemplo": [
              "The evidence suggests a different conclusion.",
              "La evidencia sugiere otra conclusión."
            ]
          },
          {
            "en": "To sum up",
            "es": "para resumir",
            "imagen": "Persona cerrando su discurso",
            "ejemplo": [
              "To sum up, we need to act now.",
              "Para resumir, necesitamos actuar ya."
            ]
          }
        ]
      },
      {
        "id": "recursos",
        "titulo": "Recursos retóricos",
        "icono": "🎭",
        "patron": [
          "rhetorical question",
          "rule of three",
          "repetition"
        ],
        "palabras": [
          {
            "en": "rhetorical question",
            "es": "pregunta retórica",
            "imagen": "Orador con los brazos abiertos frente al público",
            "ejemplo": [
              "Who doesn't love a good story? It's a rhetorical question.",
              "¿A quién no le gusta una buena historia? Es una pregunta retórica."
            ]
          },
          {
            "en": "rule of three",
            "es": "regla de tres",
            "imagen": "Tres medallas en una mesa",
            "ejemplo": [
              "Faster, cheaper, better. That's the rule of three.",
              "Más rápido, más barato, mejor. Esa es la regla de tres."
            ]
          },
          {
            "en": "repetition",
            "es": "repetición",
            "imagen": "Multitud coreando en una marcha",
            "ejemplo": [
              "Repetition makes a message stick.",
              "La repetición hace que un mensaje se quede."
            ]
          },
          {
            "en": "metaphor",
            "es": "metáfora",
            "imagen": "Ilustración de un puente entre dos montañas",
            "ejemplo": [
              "Education is a bridge to the future. That's a metaphor.",
              "La educación es un puente al futuro. Es una metáfora."
            ]
          },
          {
            "en": "exaggeration",
            "es": "exageración",
            "imagen": "Persona con los brazos muy abiertos",
            "ejemplo": [
              "I've told you a million times! That's an exaggeration.",
              "¡Te lo he dicho un millón de veces! Es una exageración."
            ]
          },
          {
            "en": "contrast",
            "es": "contraste",
            "imagen": "Fotos de antes y después",
            "ejemplo": [
              "The speech used contrast between past and future.",
              "El discurso usó el contraste entre el pasado y el futuro."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Admittedly, the plan is expensive.",
        "es": "Hay que reconocer que el plan es caro."
      },
      {
        "en": "While it's true that prices rose, salaries rose too.",
        "es": "Si bien es cierto que subieron los precios, también subieron los sueldos."
      },
      {
        "en": "It's not a waste of money. On the contrary, it's an investment.",
        "es": "No es un desperdicio de dinero. Al contrario, es una inversión."
      },
      {
        "en": "Imagine a world without plastic in the oceans.",
        "es": "Imagina un mundo sin plástico en los océanos."
      },
      {
        "en": "The bottom line is that we need more teachers.",
        "es": "Lo esencial es que necesitamos más maestros."
      },
      {
        "en": "Isn't it time we took action?",
        "es": "¿No es hora de que actuemos?"
      },
      {
        "en": "Education is not a cost, but an investment.",
        "es": "La educación no es un gasto, sino una inversión."
      },
      {
        "en": "She made a compelling argument.",
        "es": "Presentó un argumento convincente."
      },
      {
        "en": "That's a fair point, but consider the cost.",
        "es": "Es un punto válido, pero considera el costo."
      },
      {
        "en": "To sum up, we need to act now.",
        "es": "Para resumir, necesitamos actuar ya."
      }
    ],
    "frases": [
      {
        "en": "We need cleaner air, safer streets and better schools, and we need them now.",
        "es": "Necesitamos aire más limpio, calles más seguras y mejores escuelas, y los necesitamos ya.",
        "imagen": "Política hablando ante una multitud en una plaza"
      },
      {
        "en": "How many more forests must disappear before we finally take action?",
        "es": "¿Cuántos bosques más tienen que desaparecer antes de que por fin actuemos?",
        "imagen": "Bosque talado con tocones"
      },
      {
        "en": "Admittedly, renewable energy is expensive at first, but it pays for itself within a few years.",
        "es": "Hay que reconocer que la energía renovable es cara al principio, pero se paga sola en pocos años.",
        "imagen": "Paneles solares en un techo"
      },
      {
        "en": "As a nurse who has worked in emergency rooms for fifteen years, I have seen the consequences of drunk driving.",
        "es": "Como enfermera que ha trabajado quince años en urgencias, he visto las consecuencias de manejar borracho.",
        "imagen": "Enfermera en un pasillo de hospital"
      },
      {
        "en": "Imagine a child who walks three hours every day just to reach a school with no books.",
        "es": "Imagina a un niño que camina tres horas cada día solo para llegar a una escuela sin libros.",
        "imagen": "Niño caminando por un camino de tierra con mochila"
      },
      {
        "en": "Not only is public transport cheaper, but it is also much better for the environment.",
        "es": "El transporte público no solo es más barato, sino también mucho mejor para el medio ambiente.",
        "imagen": "Metro moderno lleno de pasajeros"
      },
      {
        "en": "While it's true that technology creates new problems, it also gives us the tools to solve them.",
        "es": "Si bien es cierto que la tecnología crea nuevos problemas, también nos da las herramientas para resolverlos.",
        "imagen": "Ingenieros trabajando con computadoras"
      },
      {
        "en": "That may be so, but the evidence clearly shows that the program has reduced poverty.",
        "es": "Puede ser, pero la evidencia muestra claramente que el programa ha reducido la pobreza.",
        "imagen": "Persona mostrando una gráfica en un debate"
      },
      {
        "en": "Every year, we throw away enough food to feed two billion people.",
        "es": "Cada año tiramos suficiente comida para alimentar a dos mil millones de personas.",
        "imagen": "Contenedor lleno de comida desperdiciada"
      },
      {
        "en": "In short, investing in young people is investing in the future of the whole country.",
        "es": "En resumen, invertir en los jóvenes es invertir en el futuro de todo el país.",
        "imagen": "Jóvenes graduándose y lanzando sus birretes"
      }
    ],
    "listening": [
      {
        "audio": "Admittedly, it's a risk, but it's a risk worth taking.",
        "pregunta": "¿Qué opina?",
        "opciones": [
          "Vale la pena el riesgo",
          "No hay riesgo",
          "Es muy peligroso",
          "No sabe"
        ]
      },
      {
        "audio": "Who wouldn't want to live in a cleaner city?",
        "pregunta": "¿Qué tipo de pregunta es?",
        "opciones": [
          "Retórica",
          "Una encuesta",
          "Una duda real",
          "Un examen"
        ]
      },
      {
        "audio": "Let me be clear: we will not raise taxes.",
        "pregunta": "¿Qué promete?",
        "opciones": [
          "No subir impuestos",
          "Subir impuestos",
          "Bajar sueldos",
          "Nada"
        ]
      },
      {
        "audio": "That's a fair point, but you're forgetting about the cost.",
        "pregunta": "¿Qué dice que olvidan?",
        "opciones": [
          "El costo",
          "El tiempo",
          "La calidad",
          "La gente"
        ]
      },
      {
        "audio": "The bottom line is that we need more doctors.",
        "pregunta": "¿Qué es lo esencial?",
        "opciones": [
          "Que se necesitan más médicos",
          "Que hay muchos médicos",
          "Que faltan hospitales",
          "Que sobra dinero"
        ]
      }
    ],
    "lectura": {
      "titulo": "The power of a good speech",
      "texto": "Why do some speeches change history while others are forgotten the next day? Experts in rhetoric point to a few simple techniques. First, great speakers tell stories. Instead of giving abstract numbers, they describe one real person, because audiences connect with faces, not statistics. Second, they use rhythm. The rule of three appears again and again in famous speeches, from ancient Rome to modern politics, because three items feel complete. Third, they repeat key phrases, so that the main idea stays in the audience's memory long after the speech is over. Fourth, they anticipate objections. By saying Admittedly, this will not be easy, the speaker appears honest and reasonable, which makes the rest of the argument more convincing. Finally, they end with a clear call to action, telling the audience exactly what to do next. Of course, these same techniques can also be used to manipulate. That is why learning to recognize them is not only useful for speakers, but also essential for every citizen who wants to think critically.",
      "preguntas": [
        {
          "pregunta": "¿Por qué los oradores cuentan historias?",
          "opciones": [
            "El público conecta con personas, no con cifras",
            "Porque son más cortas",
            "Porque son graciosas",
            "Para perder tiempo"
          ]
        },
        {
          "pregunta": "¿Por qué funciona la regla de tres?",
          "opciones": [
            "Tres elementos se sienten completos",
            "Es más corta",
            "Es una ley",
            "Es más barata"
          ]
        },
        {
          "pregunta": "¿Qué logra el orador al reconocer objeciones?",
          "opciones": [
            "Parece honesto y razonable",
            "Parece débil",
            "Pierde el debate",
            "Aburre al público"
          ]
        },
        {
          "pregunta": "¿Por qué es útil reconocer estas técnicas?",
          "opciones": [
            "Para pensar de forma crítica",
            "Para ganar dinero",
            "Para dormir mejor",
            "Para hablar rápido"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa la concesión.",
        "pregunta": "___, the plan is expensive, but it works. (hay que reconocer)",
        "respuestas": [
          "Admittedly"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "It's not a cost, ___ an investment.",
        "respuestas": [
          "but"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "On the ___, it's a great opportunity.",
        "respuestas": [
          "contrary"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "The bottom ___ is that we need more money.",
        "respuestas": [
          "line"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "That's a fair ___.",
        "respuestas": [
          "point"
        ]
      },
      {
        "instruccion": "Completa con la inversión.",
        "pregunta": "Not only ___ it cheaper, but it's also faster.",
        "respuestas": [
          "is"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "To sum ___, we must act now.",
        "respuestas": [
          "up"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Si bien es cierto que es caro…",
        "respuestas": [
          "While it's true that it's expensive",
          "While it is true that it is expensive"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Déjame terminar.",
        "respuestas": [
          "Let me finish"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "un argumento convincente",
        "respuestas": [
          "a compelling argument",
          "a convincing argument",
          "a persuasive argument"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "«Faster, cheaper, better» es un ejemplo de:",
        "opciones": [
          "Regla de tres",
          "Pregunta retórica",
          "Metáfora",
          "Concesión"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Isn't it time we acted?» es:",
        "opciones": [
          "Una pregunta retórica",
          "Una pregunta sobre la hora",
          "Una orden",
          "Un dato"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Apelar a la emoción se llama:",
        "opciones": [
          "pathos",
          "logos",
          "ethos",
          "metaphor"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ it's true that it's hard, it's possible.",
        "opciones": [
          "While",
          "Despite",
          "However",
          "Because"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«I take your point» significa:",
        "opciones": [
          "Entiendo lo que dices",
          "Tomo tu lugar",
          "No estoy de acuerdo",
          "Me llevo tu idea"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Statistics show that…» apela a:",
        "opciones": [
          "La lógica",
          "La emoción",
          "La credibilidad personal",
          "El humor"
        ]
      },
      {
        "tipo": "listening",
        "audio": "On the contrary, this decision will create thousands of jobs.",
        "pregunta": "¿Qué dice de la decisión?",
        "opciones": [
          "Creará empleos",
          "Quitará empleos",
          "No cambia nada",
          "Es ilegal"
        ]
      },
      {
        "tipo": "listening",
        "audio": "To sum up, education is the key to everything.",
        "pregunta": "¿Qué es la clave de todo?",
        "opciones": [
          "La educación",
          "El dinero",
          "La salud",
          "El trabajo"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: al contrario",
        "respuestas": [
          "on the contrary"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: en resumen",
        "respuestas": [
          "in short",
          "to sum up",
          "in summary",
          "in brief"
        ]
      }
    ]
  },
  {
    "id": "c2-14",
    "num": 14,
    "titulo": "Interpretación de textos literarios y periodísticos",
    "contexto": "Lectura crítica",
    "explicacion": {
      "es": [
        "Leer en nivel C2 significa entender no solo **lo que dice** un texto, sino **lo que insinúa**. Fíjate en el **propósito** del autor (informar, convencer, entretener), su **punto de vista** y el **tono** (irónico, nostálgico, crítico, neutral).",
        "En la **prensa**, distingue **hechos** de **opiniones**. Los hechos se pueden comprobar: *The bridge cost ten million dollars.* Las opiniones usan palabras valorativas: *The bridge was a **shameful** waste of money.* Los titulares omiten artículos y usan el presente: *Mayor Resigns After Scandal.*",
        "En la **literatura**, el autor *muestra* en lugar de *decir*: en vez de *She was sad*, escribe *She stared at the empty chair for hours*. Busca **símbolos** (la lluvia = tristeza), **ironía** (lo contrario de lo esperado) y el **narrador** (primera o tercera persona, ¿es confiable?).",
        "Vocabulario para comentar textos: ***The author implies that…*** (insinúa), ***The tone is…***, ***This suggests that…***, ***The text is biased*** (parcial), ***Reading between the lines…*** (leyendo entre líneas)."
      ],
      "tabla": {
        "columnas": [
          "Concepto",
          "Pregunta clave",
          "Frase útil"
        ],
        "filas": [
          [
            "propósito",
            "¿Para qué escribió esto?",
            "The author aims to…"
          ],
          [
            "tono",
            "¿Qué actitud muestra?",
            "The tone is ironic."
          ],
          [
            "implicación",
            "¿Qué insinúa?",
            "This implies that…"
          ],
          [
            "sesgo",
            "¿Es imparcial?",
            "The article is biased."
          ],
          [
            "símbolo",
            "¿Qué representa?",
            "The storm symbolizes…"
          ],
          [
            "narrador",
            "¿Quién cuenta la historia?",
            "The narrator is unreliable."
          ]
        ]
      },
      "ojo": [
        "***Imply*** (insinuar, lo hace el autor) ≠ ***infer*** (deducir, lo hace el lector).",
        "***Biased*** = parcial, tendencioso. ***Unbiased / impartial*** = imparcial.",
        "La **ironía** dice lo contrario de lo que piensa: *What lovely weather!* (bajo una tormenta).",
        "Los titulares usan el **infinitivo para el futuro**: *President **to visit** Japan* = The president will visit Japan.",
        "Un **narrador no confiable** (*unreliable narrator*) nos engaña o se engaña a sí mismo: lee con sospecha."
      ],
      "en": [
        "The author implies that the city has changed for the worse.",
        "The tone of the article is ironic.",
        "This suggests that the narrator is not telling the whole truth.",
        "Reading between the lines, the writer is clearly critical of the government."
      ]
    },
    "vocabulario": [
      {
        "en": "The author implies that",
        "es": "el autor insinúa que",
        "imagen": "Persona leyendo un libro con expresión pensativa",
        "ejemplo": [
          "The author implies that the town has changed.",
          "El autor insinúa que el pueblo ha cambiado."
        ]
      },
      {
        "en": "infer",
        "es": "deducir",
        "imagen": "Detective leyendo una carta con lupa",
        "ejemplo": [
          "From the first chapter, we can infer that he is lonely.",
          "Por el primer capítulo, podemos deducir que está solo."
        ]
      },
      {
        "en": "tone",
        "es": "tono",
        "imagen": "Persona leyendo una carta con sonrisa irónica",
        "ejemplo": [
          "The tone of the letter is cold.",
          "El tono de la carta es frío."
        ]
      },
      {
        "en": "biased",
        "es": "parcial, tendencioso",
        "imagen": "Periódico con un titular exagerado",
        "ejemplo": [
          "The article is clearly biased.",
          "El artículo es claramente tendencioso."
        ]
      },
      {
        "en": "unbiased",
        "es": "imparcial",
        "imagen": "Balanza en equilibrio",
        "ejemplo": [
          "We need an unbiased report.",
          "Necesitamos un informe imparcial."
        ]
      },
      {
        "en": "irony",
        "es": "ironía",
        "imagen": "Letrero de prohibido fumar junto a un cenicero lleno",
        "ejemplo": [
          "The irony is that the fire station burned down.",
          "La ironía es que la estación de bomberos se quemó."
        ]
      },
      {
        "en": "symbolizes",
        "es": "simboliza",
        "imagen": "Paloma blanca volando",
        "ejemplo": [
          "The white dove symbolizes peace.",
          "La paloma blanca simboliza la paz."
        ]
      },
      {
        "en": "narrator",
        "es": "narrador",
        "imagen": "Persona leyendo un cuento en voz alta",
        "ejemplo": [
          "The narrator is a young girl.",
          "La narradora es una niña."
        ]
      },
      {
        "en": "unreliable",
        "es": "poco confiable",
        "imagen": "Persona con los dedos cruzados detrás de la espalda",
        "ejemplo": [
          "The narrator is unreliable.",
          "El narrador no es confiable."
        ]
      },
      {
        "en": "headline",
        "es": "titular",
        "imagen": "Periódico doblado con un titular grande",
        "ejemplo": [
          "The headline was misleading.",
          "El titular era engañoso."
        ]
      },
      {
        "en": "misleading",
        "es": "engañoso",
        "imagen": "Anuncio con letras chiquitas",
        "ejemplo": [
          "The ad was misleading.",
          "El anuncio era engañoso."
        ]
      },
      {
        "en": "reading between the lines",
        "es": "leyendo entre líneas",
        "imagen": "Persona leyendo una carta con una lupa",
        "ejemplo": [
          "Reading between the lines, he wasn't happy.",
          "Leyendo entre líneas, no estaba contento."
        ]
      },
      {
        "en": "nostalgic",
        "es": "nostálgico",
        "imagen": "Persona mirando fotos antiguas",
        "ejemplo": [
          "The poem has a nostalgic tone.",
          "El poema tiene un tono nostálgico."
        ]
      },
      {
        "en": "plot",
        "es": "trama",
        "imagen": "Libro abierto con un marcador",
        "ejemplo": [
          "The plot is full of surprises.",
          "La trama está llena de sorpresas."
        ]
      },
      {
        "en": "setting",
        "es": "ambientación",
        "imagen": "Pueblo antiguo con niebla",
        "ejemplo": [
          "The setting is a small village in the mountains.",
          "La historia se sitúa en un pueblito en las montañas."
        ]
      },
      {
        "en": "fact or opinion",
        "es": "hecho u opinión",
        "imagen": "Persona separando papeles en dos montones",
        "ejemplo": [
          "Is that a fact or an opinion?",
          "¿Eso es un hecho o una opinión?"
        ]
      }
    ],
    "grupos": [
      {
        "id": "literatura",
        "titulo": "Analizar literatura",
        "icono": "📖",
        "patron": [
          "The main theme is…",
          "The setting is…",
          "The climax comes when…"
        ],
        "palabras": [
          {
            "en": "main theme",
            "es": "tema principal",
            "imagen": "Libro abierto con un corazón dibujado",
            "ejemplo": [
              "The main theme of the novel is loss.",
              "El tema principal de la novela es la pérdida."
            ]
          },
          {
            "en": "character",
            "es": "personaje",
            "imagen": "Ilustración de un personaje de cuento",
            "ejemplo": [
              "The main character is a fisherman.",
              "El personaje principal es un pescador."
            ]
          },
          {
            "en": "climax",
            "es": "clímax",
            "imagen": "Escena de película muy intensa",
            "ejemplo": [
              "The climax comes in the last chapter.",
              "El clímax llega en el último capítulo."
            ]
          },
          {
            "en": "foreshadowing",
            "es": "presagio",
            "imagen": "Nubes negras sobre una casa",
            "ejemplo": [
              "The storm is a kind of foreshadowing.",
              "La tormenta es una especie de presagio."
            ]
          },
          {
            "en": "first person",
            "es": "primera persona",
            "imagen": "Diario abierto con escritura a mano",
            "ejemplo": [
              "The story is told in the first person.",
              "La historia está contada en primera persona."
            ]
          },
          {
            "en": "open ending",
            "es": "final abierto",
            "imagen": "Camino que se pierde en el horizonte",
            "ejemplo": [
              "I love books with an open ending.",
              "Me encantan los libros con final abierto."
            ]
          }
        ]
      },
      {
        "id": "prensa",
        "titulo": "Analizar la prensa",
        "icono": "🗞️",
        "patron": [
          "The article argues that…",
          "According to the report…",
          "The source is reliable."
        ],
        "palabras": [
          {
            "en": "The article argues that",
            "es": "el artículo sostiene que",
            "imagen": "Persona leyendo un periódico en un café",
            "ejemplo": [
              "The article argues that taxes are too high.",
              "El artículo sostiene que los impuestos son muy altos."
            ]
          },
          {
            "en": "reliable source",
            "es": "fuente confiable",
            "imagen": "Biblioteca con libros de consulta",
            "ejemplo": [
              "Always check that it's a reliable source.",
              "Siempre revisa que sea una fuente confiable."
            ]
          },
          {
            "en": "fake news",
            "es": "noticias falsas",
            "imagen": "Celular con una noticia marcada como falsa",
            "ejemplo": [
              "Fake news spreads faster than the truth.",
              "Las noticias falsas se difunden más rápido que la verdad."
            ]
          },
          {
            "en": "editorial",
            "es": "editorial",
            "imagen": "Página de opinión de un periódico",
            "ejemplo": [
              "The editorial criticized the new law.",
              "El editorial criticó la nueva ley."
            ]
          },
          {
            "en": "point of view",
            "es": "punto de vista",
            "imagen": "Persona mirando a través de unos binoculares",
            "ejemplo": [
              "The article only shows one point of view.",
              "El artículo solo muestra un punto de vista."
            ]
          },
          {
            "en": "evidence",
            "es": "evidencia",
            "imagen": "Carpeta con documentos y fotos",
            "ejemplo": [
              "The article doesn't give any evidence.",
              "El artículo no da ninguna evidencia."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "The author implies that the town has changed.",
        "es": "El autor insinúa que el pueblo ha cambiado."
      },
      {
        "en": "From the first chapter, we can infer that he is lonely.",
        "es": "Por el primer capítulo, podemos deducir que está solo."
      },
      {
        "en": "The article is clearly biased.",
        "es": "El artículo es claramente tendencioso."
      },
      {
        "en": "The white dove symbolizes peace.",
        "es": "La paloma blanca simboliza la paz."
      },
      {
        "en": "The narrator is unreliable.",
        "es": "El narrador no es confiable."
      },
      {
        "en": "The headline was misleading.",
        "es": "El titular era engañoso."
      },
      {
        "en": "Reading between the lines, he wasn't happy.",
        "es": "Leyendo entre líneas, no estaba contento."
      },
      {
        "en": "The main theme of the novel is loss.",
        "es": "El tema principal de la novela es la pérdida."
      },
      {
        "en": "Always check that it's a reliable source.",
        "es": "Siempre revisa que sea una fuente confiable."
      },
      {
        "en": "Is that a fact or an opinion?",
        "es": "¿Eso es un hecho o una opinión?"
      }
    ],
    "frases": [
      {
        "en": "The writer never says that the old man is lonely, but the empty chairs around his table tell us everything.",
        "es": "El escritor nunca dice que el anciano está solo, pero las sillas vacías alrededor de su mesa nos lo dicen todo.",
        "imagen": "Anciano comiendo solo en una mesa grande"
      },
      {
        "en": "Although the article claims to be neutral, it only quotes people who support the project.",
        "es": "Aunque el artículo dice ser neutral, solo cita a personas que apoyan el proyecto.",
        "imagen": "Periódico abierto sobre una mesa de café"
      },
      {
        "en": "In Pedro Páramo, the setting itself, a village full of ghosts, becomes one of the main characters.",
        "es": "En Pedro Páramo, la ambientación misma, un pueblo lleno de fantasmas, se convierte en uno de los personajes principales.",
        "imagen": "Pueblo abandonado en el desierto mexicano"
      },
      {
        "en": "The headline says the economy is collapsing, but the data in the article tells a very different story.",
        "es": "El titular dice que la economía se está derrumbando, pero los datos del artículo cuentan una historia muy distinta.",
        "imagen": "Persona comparando un titular con una gráfica"
      },
      {
        "en": "The irony of the story is that the man who spent his life saving money died before he could enjoy it.",
        "es": "La ironía de la historia es que el hombre que pasó su vida ahorrando murió antes de poder disfrutarlo.",
        "imagen": "Alcancía sobre una mesa vacía"
      },
      {
        "en": "Readers should always ask who wrote a text, why they wrote it and who benefits from it.",
        "es": "Los lectores siempre deben preguntarse quién escribió un texto, por qué lo escribió y quién se beneficia.",
        "imagen": "Estudiante leyendo con un lápiz en la mano"
      },
      {
        "en": "The constant rain in the novel seems to reflect the main character's sadness.",
        "es": "La lluvia constante en la novela parece reflejar la tristeza del personaje principal.",
        "imagen": "Ventana con gotas de lluvia y una persona mirando"
      },
      {
        "en": "The editorial uses emotional language to persuade readers rather than presenting evidence.",
        "es": "El editorial usa lenguaje emotivo para persuadir a los lectores en lugar de presentar evidencia.",
        "imagen": "Columnista escribiendo en su computadora"
      },
      {
        "en": "Because the story is told by a child, the reader understands more than the narrator does.",
        "es": "Como la historia la cuenta un niño, el lector entiende más que el propio narrador.",
        "imagen": "Niño contando una historia junto a una fogata"
      },
      {
        "en": "Before you share a news story, check whether it comes from a reliable source.",
        "es": "Antes de compartir una noticia, revisa si viene de una fuente confiable.",
        "imagen": "Persona revisando una noticia en el celular antes de compartirla"
      }
    ],
    "listening": [
      {
        "audio": "The article is clearly biased in favor of the company.",
        "pregunta": "¿Cómo es el artículo?",
        "opciones": [
          "Tendencioso a favor de la empresa",
          "Imparcial",
          "En contra de la empresa",
          "Muy corto"
        ]
      },
      {
        "audio": "The storm in the first chapter symbolizes the war that is coming.",
        "pregunta": "¿Qué simboliza la tormenta?",
        "opciones": [
          "La guerra que viene",
          "La paz",
          "El amor",
          "El verano"
        ]
      },
      {
        "audio": "The story is told in the first person by an old woman.",
        "pregunta": "¿Quién narra la historia?",
        "opciones": [
          "Una anciana",
          "Un niño",
          "Un narrador externo",
          "Un perro"
        ]
      },
      {
        "audio": "Reading between the lines, the minister is going to resign.",
        "pregunta": "¿Qué se deduce?",
        "opciones": [
          "Que el ministro va a renunciar",
          "Que lo van a ascender",
          "Que viajará",
          "Que dará un discurso"
        ]
      },
      {
        "audio": "That's an opinion, not a fact. Where's the evidence?",
        "pregunta": "¿Qué pide?",
        "opciones": [
          "Evidencia",
          "Una opinión",
          "Un artículo",
          "Un libro"
        ]
      }
    ],
    "lectura": {
      "titulo": "The house on Calle Luna",
      "texto": "Every morning, Doña Elena opened the green shutters of the house on Calle Luna, even though nobody had walked down that street in years. She set the table for four: one plate for herself, one for her husband, and two for the sons who had gone north long ago. Neighbors said she was confused, but she was not. She knew perfectly well that the chairs would stay empty. She cooked the same mole every Sunday, the way her mother had taught her, and left the door unlocked in case someone came home. When a young journalist knocked one afternoon to ask about the old town, she told him that the town had not changed at all. Then she laughed, because the bakery, the church bells and the music in the square had all disappeared. The journalist wrote that she was living in the past. But when he read his article again years later, he understood that she had simply chosen to remember, which is not the same thing as forgetting to live.",
      "preguntas": [
        {
          "pregunta": "¿Para cuántas personas ponía la mesa Doña Elena?",
          "opciones": [
            "Para cuatro",
            "Para una",
            "Para dos",
            "Para seis"
          ]
        },
        {
          "pregunta": "¿Qué insinúa el texto sobre sus hijos?",
          "opciones": [
            "Se fueron al norte hace mucho",
            "Viven con ella",
            "Llegan cada domingo",
            "Murieron en la guerra"
          ]
        },
        {
          "pregunta": "¿Por qué se ríe cuando dice que el pueblo no ha cambiado?",
          "opciones": [
            "Porque sabe que sí ha cambiado: es irónico",
            "Porque está confundida",
            "Porque el periodista es chistoso",
            "Porque está feliz"
          ]
        },
        {
          "pregunta": "¿Qué entendió el periodista años después?",
          "opciones": [
            "Que ella había elegido recordar",
            "Que estaba loca",
            "Que el pueblo era nuevo",
            "Que su artículo era perfecto"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con imply o infer.",
        "pregunta": "The author ___ that the hero is afraid.",
        "respuestas": [
          "implies",
          "implied"
        ]
      },
      {
        "instruccion": "Completa con imply o infer.",
        "pregunta": "From the text, we can ___ that she is rich.",
        "respuestas": [
          "infer"
        ]
      },
      {
        "instruccion": "Escribe la palabra.",
        "pregunta": "parcial, tendencioso = b_____",
        "respuestas": [
          "biased"
        ]
      },
      {
        "instruccion": "Escribe la palabra.",
        "pregunta": "El que cuenta la historia: n_______",
        "respuestas": [
          "narrator"
        ]
      },
      {
        "instruccion": "Escribe la palabra.",
        "pregunta": "La historia de un libro: p___",
        "respuestas": [
          "plot"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "Reading between the ___, he was angry.",
        "respuestas": [
          "lines"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "The dove ___ peace.",
        "respuestas": [
          "symbolizes",
          "symbolises",
          "represents"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "una fuente confiable",
        "respuestas": [
          "a reliable source",
          "a trustworthy source"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "El titular era engañoso.",
        "respuestas": [
          "The headline was misleading"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Es un hecho o una opinión?",
        "respuestas": [
          "Is it a fact or an opinion",
          "Is that a fact or an opinion"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "«The bridge was a shameful waste of money» es:",
        "opciones": [
          "Una opinión",
          "Un hecho",
          "Un titular",
          "Un dato"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "El titular «President to visit Japan» significa:",
        "opciones": [
          "El presidente visitará Japón",
          "El presidente visitó Japón",
          "El presidente quiere visitar Japón",
          "El presidente no visitará Japón"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«What lovely weather!» (bajo una tormenta) es:",
        "opciones": [
          "Ironía",
          "Un hecho",
          "Un símbolo",
          "Una metáfora"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Un narrador que nos engaña es:",
        "opciones": [
          "unreliable",
          "unbiased",
          "nostalgic",
          "reliable"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "El lector ___ y el autor ___.",
        "opciones": [
          "infiere / insinúa",
          "insinúa / infiere",
          "escribe / lee",
          "narra / escucha"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Misleading» significa:",
        "opciones": [
          "Engañoso",
          "Líder",
          "Perdido",
          "Confiable"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The novel has a very nostalgic tone.",
        "pregunta": "¿Qué tono tiene la novela?",
        "opciones": [
          "Nostálgico",
          "Alegre",
          "Irónico",
          "Agresivo"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The editorial criticizes the government, but it offers no evidence.",
        "pregunta": "¿Qué le falta al editorial?",
        "opciones": [
          "Evidencia",
          "Opinión",
          "Un titular",
          "Un autor"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: leyendo entre líneas",
        "respuestas": [
          "reading between the lines"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: el tema principal",
        "respuestas": [
          "the main theme"
        ]
      }
    ]
  },
  {
    "id": "c2-15",
    "num": 15,
    "titulo": "Verbos frasales de nivel nativo (chip in, mull over, stave off…)",
    "contexto": "Matices, humor y estilo",
    "explicacion": {
      "es": [
        "En C2 aprendes los verbos frasales que usan los **nativos cultos**: en novelas, columnas de opinión, podcasts y conversaciones con humor. Muchos son **muy expresivos**: ***splash out*** (derrochar en un gusto), ***nod off*** (cabecear de sueño), ***while away*** *the hours* (pasar el rato sin prisa).",
        "Varios tienen un **matiz de actitud**: ***fob off*** (despachar a alguien con una excusa), ***palm off*** (encajar algo malo), ***wriggle out of*** (zafarse de una obligación), ***egg on*** (incitar). Úsalos para mostrar **tu opinión** sobre lo que pasa.",
        "Otros vienen del **mundo profesional y periodístico**: ***hammer out*** *a deal* (negociar con esfuerzo), ***root out*** *corruption* (erradicar), ***rein in*** *spending* (frenar el gasto), ***stave off*** *a crisis* (evitar), ***bear out*** *a theory* (confirmar).",
        "El secreto en este nivel es el **registro**: ***chip in*** y ***rake in*** son coloquiales; ***bear out*** y ***stave off*** suenan cultos. Un hablante C2 elige el que mejor encaja con **su público**."
      ],
      "tabla": {
        "columnas": [
          "Verbo frasal",
          "Significado",
          "Registro"
        ],
        "filas": [
          [
            "chip in",
            "cooperar con dinero",
            "coloquial"
          ],
          [
            "splash out",
            "darse un gusto caro",
            "coloquial"
          ],
          [
            "mull over",
            "darle vueltas a algo",
            "neutro"
          ],
          [
            "hammer out",
            "negociar a fondo",
            "periodístico"
          ],
          [
            "stave off",
            "evitar, contener",
            "culto"
          ],
          [
            "bear out",
            "confirmar",
            "culto"
          ]
        ]
      },
      "ojo": [
        "***Dawn on*** tiene como sujeto **la idea**, no la persona: *It **dawned on** me that I'd left my keys.* (Caí en la cuenta…)",
        "***Tide over*** = sacar de apuros por un tiempo: *Can you lend me 500 pesos to **tide me over** until payday?*",
        "***Rattle off*** = recitar de corrido: *She **rattled off** the names of all the presidents.*",
        "***Toy with*** *an idea* = considerar algo sin decidirse.",
        "***Zero in on*** = concentrarse en algo concreto, como si apuntaras."
      ],
      "en": [
        "We all chipped in to buy her a present.",
        "Let me mull it over for a few days.",
        "It suddenly dawned on me that I had forgotten her birthday.",
        "The results bear out our original theory."
      ]
    },
    "vocabulario": [
      {
        "en": "bear out",
        "es": "confirmar",
        "imagen": "Científico comparando dos gráficas iguales",
        "ejemplo": [
          "The data bear out our theory.",
          "Los datos confirman nuestra teoría."
        ]
      },
      {
        "en": "chip in",
        "es": "cooperar",
        "imagen": "Amigos juntando billetes en una mesa",
        "ejemplo": [
          "We all chipped in to buy her a present.",
          "Todos cooperamos para comprarle un regalo."
        ]
      },
      {
        "en": "churn out",
        "es": "producir en serie",
        "imagen": "Fábrica produciendo muchas cajas",
        "ejemplo": [
          "That studio churns out a new film every month.",
          "Ese estudio saca una película nueva cada mes."
        ]
      },
      {
        "en": "conjure up",
        "es": "evocar",
        "imagen": "Persona oliendo pan recién hecho con nostalgia",
        "ejemplo": [
          "The smell of bread conjures up memories of my childhood.",
          "El olor a pan me trae recuerdos de mi infancia."
        ]
      },
      {
        "en": "dawn on",
        "es": "caer en la cuenta",
        "imagen": "Persona dándose una palmada en la frente",
        "ejemplo": [
          "It dawned on me that I'd left the stove on.",
          "Caí en la cuenta de que había dejado la estufa prendida."
        ]
      },
      {
        "en": "egg on",
        "es": "incitar",
        "imagen": "Amigos animando a otro a saltar al agua",
        "ejemplo": [
          "His friends egged him on to jump into the lake.",
          "Sus amigos lo incitaron a saltar al lago."
        ]
      },
      {
        "en": "fob off",
        "es": "despachar con excusas",
        "imagen": "Empleado dando una excusa a un cliente molesto",
        "ejemplo": [
          "Don't let them fob you off with excuses.",
          "No dejes que te despachen con excusas."
        ]
      },
      {
        "en": "gear up for",
        "es": "prepararse para",
        "imagen": "Equipo preparándose antes de un evento",
        "ejemplo": [
          "The city is gearing up for the festival.",
          "La ciudad se está preparando para el festival."
        ]
      },
      {
        "en": "hammer out",
        "es": "negociar a fondo",
        "imagen": "Negociadores con documentos en una mesa larga",
        "ejemplo": [
          "They hammered out an agreement after ten hours.",
          "Negociaron un acuerdo después de diez horas."
        ]
      },
      {
        "en": "hold out for",
        "es": "aguantar hasta conseguir",
        "imagen": "Persona rechazando una oferta baja",
        "ejemplo": [
          "She's holding out for a better offer.",
          "Está aguantando hasta conseguir una mejor oferta."
        ]
      },
      {
        "en": "lash out",
        "es": "arremeter",
        "imagen": "Persona gritando enojada",
        "ejemplo": [
          "He lashed out at his colleagues.",
          "Arremetió contra sus compañeros."
        ]
      },
      {
        "en": "muddle through",
        "es": "arreglárselas como se pueda",
        "imagen": "Persona cocinando con una receta confusa",
        "ejemplo": [
          "We didn't have a plan, but we muddled through.",
          "No teníamos plan, pero salimos adelante como pudimos."
        ]
      },
      {
        "en": "nod off",
        "es": "cabecear, dormirse",
        "imagen": "Persona dormitando frente a la tele",
        "ejemplo": [
          "I nodded off during the movie.",
          "Me quedé dormido durante la película."
        ]
      },
      {
        "en": "pore over",
        "es": "estudiar a fondo",
        "imagen": "Persona leyendo un mapa antiguo con lupa",
        "ejemplo": [
          "She pored over the old documents for hours.",
          "Estudió los documentos antiguos durante horas."
        ]
      },
      {
        "en": "rake in",
        "es": "ganar a montones",
        "imagen": "Caja registradora llena de billetes",
        "ejemplo": [
          "That restaurant rakes in a fortune.",
          "Ese restaurante gana una fortuna."
        ]
      },
      {
        "en": "rattle off",
        "es": "recitar de corrido",
        "imagen": "Niño recitando una lista rápidamente",
        "ejemplo": [
          "She rattled off the names of all the capitals.",
          "Recitó de corrido los nombres de todas las capitales."
        ]
      },
      {
        "en": "rein in",
        "es": "frenar, controlar",
        "imagen": "Jinete jalando las riendas de un caballo",
        "ejemplo": [
          "The government must rein in spending.",
          "El gobierno debe frenar el gasto."
        ]
      },
      {
        "en": "root out",
        "es": "erradicar",
        "imagen": "Jardinero arrancando hierbas de raíz",
        "ejemplo": [
          "We need to root out corruption.",
          "Tenemos que erradicar la corrupción."
        ]
      },
      {
        "en": "scrape by",
        "es": "sobrevivir con lo justo",
        "imagen": "Persona contando monedas en la cocina",
        "ejemplo": [
          "They scrape by on one salary.",
          "Sobreviven con lo justo con un solo sueldo."
        ]
      },
      {
        "en": "shrug off",
        "es": "no darle importancia",
        "imagen": "Persona encogiéndose de hombros",
        "ejemplo": [
          "He shrugged off the criticism.",
          "No le dio importancia a la crítica."
        ]
      },
      {
        "en": "simmer down",
        "es": "calmarse",
        "imagen": "Olla dejando de hervir",
        "ejemplo": [
          "Simmer down, everyone!",
          "¡Cálmense todos!"
        ]
      },
      {
        "en": "splash out",
        "es": "darse un gusto caro",
        "imagen": "Persona saliendo de una tienda con bolsas de lujo",
        "ejemplo": [
          "We splashed out on a fancy dinner.",
          "Nos dimos el lujo de una cena elegante."
        ]
      },
      {
        "en": "stave off",
        "es": "evitar, contener",
        "imagen": "Persona tomando vitamina C con gripa en el ambiente",
        "ejemplo": [
          "I drink orange juice to stave off colds.",
          "Tomo jugo de naranja para evitar resfriados."
        ]
      },
      {
        "en": "tide over",
        "es": "sacar de apuros",
        "imagen": "Amigo prestando dinero a otro",
        "ejemplo": [
          "This money will tide us over until payday.",
          "Este dinero nos sacará de apuros hasta el día de pago."
        ]
      },
      {
        "en": "toy with",
        "es": "considerar sin decidir",
        "imagen": "Persona mirando folletos de viaje pensativa",
        "ejemplo": [
          "I'm toying with the idea of moving abroad.",
          "Estoy considerando la idea de irme a vivir al extranjero."
        ]
      },
      {
        "en": "while away",
        "es": "pasar el tiempo sin prisa",
        "imagen": "Persona en una hamaca leyendo",
        "ejemplo": [
          "We whiled away the afternoon at the beach.",
          "Pasamos la tarde sin prisa en la playa."
        ]
      },
      {
        "en": "whip up",
        "es": "preparar rápido",
        "imagen": "Persona cocinando rápido en una cocina",
        "ejemplo": [
          "I'll whip up something for dinner.",
          "Voy a preparar algo rápido para cenar."
        ]
      },
      {
        "en": "wriggle out of",
        "es": "zafarse de",
        "imagen": "Persona escabulléndose de una reunión",
        "ejemplo": [
          "He always wriggles out of doing the dishes.",
          "Siempre se zafa de lavar los platos."
        ]
      },
      {
        "en": "zero in on",
        "es": "concentrarse en",
        "imagen": "Lupa sobre un punto de un mapa",
        "ejemplo": [
          "The investigators zeroed in on the main suspect.",
          "Los investigadores se concentraron en el sospechoso principal."
        ]
      },
      {
        "en": "mull over",
        "es": "darle vueltas",
        "imagen": "Persona pensando con una taza de café",
        "ejemplo": [
          "Let me mull it over for a few days.",
          "Déjame pensarlo unos días."
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "We all chipped in to buy her a present.",
        "es": "Todos cooperamos para comprarle un regalo."
      },
      {
        "en": "It dawned on me that I'd left the stove on.",
        "es": "Caí en la cuenta de que había dejado la estufa prendida."
      },
      {
        "en": "They hammered out an agreement after ten hours.",
        "es": "Negociaron un acuerdo después de diez horas."
      },
      {
        "en": "I nodded off during the movie.",
        "es": "Me quedé dormido durante la película."
      },
      {
        "en": "The government must rein in spending.",
        "es": "El gobierno debe frenar el gasto."
      },
      {
        "en": "He shrugged off the criticism.",
        "es": "No le dio importancia a la crítica."
      },
      {
        "en": "We splashed out on a fancy dinner.",
        "es": "Nos dimos el lujo de una cena elegante."
      },
      {
        "en": "This money will tide us over until payday.",
        "es": "Este dinero nos sacará de apuros hasta el día de pago."
      },
      {
        "en": "I'm toying with the idea of moving abroad.",
        "es": "Estoy considerando la idea de irme a vivir al extranjero."
      },
      {
        "en": "Let me mull it over for a few days.",
        "es": "Déjame pensarlo unos días."
      }
    ],
    "frases": [
      {
        "en": "The latest research appears to bear out what traditional healers had claimed for centuries.",
        "es": "La investigación más reciente parece confirmar lo que los curanderos tradicionales afirmaban desde hace siglos.",
        "imagen": "Hierbas medicinales en un mercado tradicional"
      },
      {
        "en": "For our teacher's retirement, everyone chipped in and we bought her a trip to Chiapas.",
        "es": "Para la jubilación de nuestra maestra, todos cooperamos y le compramos un viaje a Chiapas.",
        "imagen": "Cascadas turquesa en la selva de Chiapas"
      },
      {
        "en": "The smell of copal always conjures up images of Day of the Dead altars.",
        "es": "El olor a copal siempre evoca imágenes de altares de Día de Muertos.",
        "imagen": "Altar de Día de Muertos con velas y flores de cempasúchil"
      },
      {
        "en": "It took me a whole week before it finally dawned on me that he had been joking.",
        "es": "Me tomó toda una semana caer en la cuenta de que había estado bromeando.",
        "imagen": "Persona riéndose sola frente a su celular"
      },
      {
        "en": "When I complained about the faulty laptop, the store tried to fob me off with a discount coupon.",
        "es": "Cuando me quejé de la laptop defectuosa, la tienda intentó despacharme con un cupón de descuento.",
        "imagen": "Cliente molesto en el mostrador de una tienda"
      },
      {
        "en": "Under pressure, he lashed out at the journalists instead of answering their questions.",
        "es": "Bajo presión, arremetió contra los periodistas en lugar de responder sus preguntas.",
        "imagen": "Conferencia de prensa tensa"
      },
      {
        "en": "During the pandemic, many small businesses barely scraped by.",
        "es": "Durante la pandemia, muchos negocios pequeños apenas sobrevivieron.",
        "imagen": "Pequeña tienda de barrio con pocos clientes"
      },
      {
        "en": "The central bank raised interest rates in an attempt to stave off inflation.",
        "es": "El banco central subió las tasas de interés para intentar contener la inflación.",
        "imagen": "Edificio de un banco central"
      },
      {
        "en": "We whiled away the rainy afternoon playing board games and drinking hot chocolate.",
        "es": "Pasamos la tarde lluviosa jugando juegos de mesa y tomando chocolate caliente.",
        "imagen": "Familia jugando un juego de mesa junto a la ventana"
      },
      {
        "en": "Don't worry about dinner; I can whip up some quesadillas in ten minutes.",
        "es": "No te preocupes por la cena; puedo preparar unas quesadillas en diez minutos.",
        "imagen": "Quesadillas en un comal"
      }
    ],
    "listening": [
      {
        "audio": "Everyone chipped in fifty pesos for the gift.",
        "pregunta": "¿Qué hicieron todos?",
        "opciones": [
          "Cooperaron para el regalo",
          "Compraron cada uno un regalo",
          "Pidieron dinero prestado",
          "Devolvieron el regalo"
        ]
      },
      {
        "audio": "I nodded off in the middle of the lecture. How embarrassing!",
        "pregunta": "¿Qué le pasó?",
        "opciones": [
          "Se quedó dormido",
          "Llegó tarde",
          "Se le cayó algo",
          "Habló en voz alta"
        ]
      },
      {
        "audio": "We splashed out on a five-star dinner for our anniversary.",
        "pregunta": "¿Qué hicieron en su aniversario?",
        "opciones": [
          "Se dieron una cena de lujo",
          "Se quedaron en casa",
          "Viajaron",
          "Ahorraron"
        ]
      },
      {
        "audio": "It suddenly dawned on me that the shop was closed on Mondays.",
        "pregunta": "¿De qué se dio cuenta?",
        "opciones": [
          "La tienda cierra los lunes",
          "Era su cumpleaños",
          "Había perdido la cartera",
          "Llovía"
        ]
      },
      {
        "audio": "I'm toying with the idea of learning Japanese.",
        "pregunta": "¿Qué está considerando?",
        "opciones": [
          "Aprender japonés",
          "Viajar a Japón",
          "Dejar de estudiar",
          "Cambiar de trabajo"
        ]
      }
    ],
    "lectura": {
      "titulo": "The art of doing nothing",
      "texto": "My grandfather had a rare talent: he could while away an entire afternoon on the porch, watching the clouds and saying almost nothing. As a teenager, I found this infuriating. I was always gearing up for the next exam, the next project, the next goal. When he suggested I slow down, I shrugged it off. Years later, working in a busy office, I was barely scraping by on four hours of sleep. One evening, I nodded off at my desk and woke up at midnight, alone in the building. It finally dawned on me that I was exhausted, and that no amount of coffee could stave off the burnout that was coming. I started to mull over my grandfather's habits. That summer, I toyed with the idea of taking a sabbatical, and eventually I did it. I didn't splash out on an exotic trip; I simply went back to his old house in the mountains. I spent the mornings poring over his books and the afternoons on the porch. The experience bore out what he had always said: sometimes, doing nothing is the most productive thing you can do.",
      "preguntas": [
        {
          "pregunta": "¿Qué talento tenía el abuelo?",
          "opciones": [
            "Pasar la tarde sin prisa sin hacer nada",
            "Trabajar muchas horas",
            "Cocinar",
            "Escribir libros"
          ]
        },
        {
          "pregunta": "¿Qué le pasó al narrador una noche en la oficina?",
          "opciones": [
            "Se quedó dormido en su escritorio",
            "Lo despidieron",
            "Se fue la luz",
            "Ganó un premio"
          ]
        },
        {
          "pregunta": "¿Adónde fue en su año sabático?",
          "opciones": [
            "A la casa de su abuelo en las montañas",
            "A un viaje exótico",
            "A otra ciudad a trabajar",
            "A la playa"
          ]
        },
        {
          "pregunta": "¿Qué confirmó la experiencia?",
          "opciones": [
            "Que a veces no hacer nada es lo más productivo",
            "Que hay que trabajar más",
            "Que el café ayuda",
            "Que las montañas son aburridas"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa.",
        "pregunta": "We all chipped ___ for the party.",
        "respuestas": [
          "in"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "It suddenly dawned ___ me that I was wrong.",
        "respuestas": [
          "on"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "I nodded ___ in front of the TV.",
        "respuestas": [
          "off"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "He always wriggles out ___ his responsibilities.",
        "respuestas": [
          "of"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "They hammered ___ a deal.",
        "respuestas": [
          "out"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "We splashed ___ on a new sofa.",
        "respuestas": [
          "out"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "The police zeroed in ___ the suspect.",
        "respuestas": [
          "on"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Déjame pensarlo.",
        "respuestas": [
          "Let me mull it over",
          "Let me think it over",
          "Let me think about it"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "No le dio importancia.",
        "respuestas": [
          "He shrugged it off",
          "She shrugged it off"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Voy a preparar algo rápido.",
        "respuestas": [
          "I'll whip something up",
          "I'll whip up something",
          "I will whip something up",
          "I will whip up something"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "The results ___ out our hypothesis.",
        "opciones": [
          "bear",
          "rake",
          "chip",
          "fob"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "It ___ on me that I had forgotten my passport.",
        "opciones": [
          "dawned",
          "nodded",
          "toyed",
          "whipped"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "They ___ by on very little money.",
        "opciones": [
          "scrape",
          "splash",
          "rake",
          "churn"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The government needs to ___ in public spending.",
        "opciones": [
          "rein",
          "chip",
          "nod",
          "rake"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Fob someone off» significa:",
        "opciones": [
          "Despachar a alguien con excusas",
          "Despedir a alguien",
          "Invitar a alguien",
          "Ayudar a alguien"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Splash out» significa:",
        "opciones": [
          "Darse un gusto caro",
          "Salpicar",
          "Nadar",
          "Ahorrar"
        ]
      },
      {
        "tipo": "listening",
        "audio": "We whiled away the afternoon in a café by the sea.",
        "pregunta": "¿Cómo pasaron la tarde?",
        "opciones": [
          "Sin prisa en un café",
          "Trabajando",
          "Nadando",
          "Corriendo"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Her friends egged her on to sing at the party.",
        "pregunta": "¿Qué hicieron sus amigos?",
        "opciones": [
          "La animaron a cantar",
          "Cantaron con ella",
          "No la dejaron cantar",
          "Se fueron"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: todos cooperamos",
        "respuestas": [
          "We all chipped in",
          "Everyone chipped in"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: me quedé dormido",
        "respuestas": [
          "I nodded off",
          "I fell asleep"
        ]
      }
    ]
  }
];
