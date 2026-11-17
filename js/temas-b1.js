// Temas del nivel B1 (docs/plan-de-estudios.md). Los que todavía no tienen contenido solo llevan título.
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
const TEMAS_B1 = [
  {
    "id": "b1-01",
    "num": 1,
    "titulo": "Presente perfecto: just, already, yet",
    "contexto": "Noticias y novedades",
    "explicacion": {
      "es": [
        "El **presente perfecto** (*have / has* + participio) también sirve para dar **noticias recientes** que importan **ahora**: *I**'ve found** a new job!* (¡Encontré un trabajo nuevo!) *The prices **have gone** up.*",
        "***Just*** = **acabar de**. Va entre *have* y el participio: *She**'s just arrived**.* (Acaba de llegar.) *I**'ve just had** lunch.*",
        "***Already*** = **ya** (antes de lo esperado), en afirmativo y va en el mismo lugar: *I**'ve already paid**.* (Ya pagué.) ***Yet*** = **todavía / ya**, en **negativo y preguntas**, y va **al final**: *I **haven't** finished **yet**.* (Todavía no termino.) ***Have** you eaten **yet**?* (¿Ya comiste?)",
        "En español de México solemos usar el pretérito (*ya comí, acabo de llegar*), pero en inglés estas noticias recientes van en **presente perfecto**, sobre todo en inglés británico. En inglés americano también se oye el pasado (*Did you eat yet?*), pero el presente perfecto siempre es correcto."
      ],
      "tabla": {
        "columnas": [
          "Palabra",
          "Posición",
          "Ejemplo",
          "Significado"
        ],
        "filas": [
          [
            "just",
            "have + just + participio",
            "I've just seen the news.",
            "Acabo de ver las noticias."
          ],
          [
            "already",
            "have + already + participio",
            "They've already left.",
            "Ya se fueron."
          ],
          [
            "yet (negativo)",
            "al final",
            "He hasn't called yet.",
            "Todavía no ha llamado."
          ],
          [
            "yet (pregunta)",
            "al final",
            "Has the package arrived yet?",
            "¿Ya llegó el paquete?"
          ]
        ]
      },
      "ojo": [
        "*Yet* va **al final** de la oración: *I haven't done it **yet*** ✅, no *I haven't yet done it* (suena muy formal).",
        "*Already* en pregunta muestra **sorpresa**: *Have you **already** finished?!* (¿¡Ya terminaste!?)",
        "No uses expresiones de tiempo terminado con el presente perfecto: *I've just arrived* ✅, pero *I arrived **at six*** (no *I've arrived at six* ❌).",
        "***Still*** (todavía) va antes del verbo y con negativo da énfasis: *I **still** haven't received my order.* (Todavía no me llega mi pedido.)",
        "Participios irregulares útiles para noticias: *won, lost, broken, sold, gone, found, chosen, written*."
      ],
      "en": [
        "We use the present perfect for recent news: I've found a new job!",
        "Just means a very short time ago: She's just arrived.",
        "Already means sooner than expected: I've already paid.",
        "Yet is for negatives and questions, at the end: I haven't finished yet. Have you eaten yet?"
      ]
    },
    "vocabulario": [
      {
        "en": "I've just heard the news.",
        "es": "acabo de oír la noticia",
        "imagen": "Persona sorprendida leyendo una noticia en su celular",
        "ejemplo": [
          "I've just heard the news. Congratulations!",
          "Acabo de oír la noticia. ¡Felicidades!"
        ]
      },
      {
        "en": "She's just had a baby.",
        "es": "ella acaba de tener un bebé",
        "imagen": "Mamá sonriente con su bebé recién nacido en el hospital",
        "ejemplo": [
          "My cousin has just had a baby girl.",
          "Mi prima acaba de tener una niña."
        ]
      },
      {
        "en": "They've already left.",
        "es": "ya se fueron",
        "imagen": "Mesa de restaurante vacía con platos usados",
        "ejemplo": [
          "Sorry, they've already left.",
          "Perdón, ya se fueron."
        ]
      },
      {
        "en": "I haven't decided yet.",
        "es": "todavía no decido",
        "imagen": "Persona pensativa frente a dos opciones de trabajo en su laptop",
        "ejemplo": [
          "I haven't decided yet. I need more time.",
          "Todavía no decido. Necesito más tiempo."
        ]
      },
      {
        "en": "Have you finished yet?",
        "es": "¿ya terminaste?",
        "imagen": "Maestra preguntando a un alumno que escribe un examen",
        "ejemplo": [
          "Have you finished yet? Almost.",
          "¿Ya terminaste? Casi."
        ]
      },
      {
        "en": "The prices have gone up.",
        "es": "los precios han subido",
        "imagen": "Persona sorprendida frente a las etiquetas de precios en el súper",
        "ejemplo": [
          "The prices have gone up again.",
          "Los precios subieron otra vez."
        ]
      },
      {
        "en": "He's lost his job.",
        "es": "él perdió su trabajo",
        "imagen": "Hombre saliendo de una oficina con una caja de sus cosas",
        "ejemplo": [
          "My neighbor has lost his job.",
          "Mi vecino perdió su trabajo."
        ]
      },
      {
        "en": "We've won the cup!",
        "es": "¡ganamos la copa!",
        "imagen": "Jugadores levantando un trofeo entre confeti",
        "ejemplo": [
          "We've won the cup for the first time!",
          "¡Ganamos la copa por primera vez!"
        ]
      },
      {
        "en": "They've opened a new store.",
        "es": "abrieron una tienda nueva",
        "imagen": "Gente entrando a una tienda recién inaugurada con globos",
        "ejemplo": [
          "They've opened a new bakery on my street.",
          "Abrieron una panadería nueva en mi calle."
        ]
      },
      {
        "en": "I've already paid.",
        "es": "ya pagué",
        "imagen": "Persona mostrando el ticket de pago en su celular",
        "ejemplo": [
          "Don't worry, I've already paid.",
          "No te preocupes, ya pagué."
        ]
      },
      {
        "en": "It hasn't arrived yet.",
        "es": "todavía no llega",
        "imagen": "Persona esperando junto a la puerta mirando el rastreo de un paquete",
        "ejemplo": [
          "My order hasn't arrived yet.",
          "Mi pedido todavía no llega."
        ]
      },
      {
        "en": "She's changed her hair.",
        "es": "se cambió el peinado",
        "imagen": "Mujer mostrando su nuevo corte de pelo corto",
        "ejemplo": [
          "Look! She's changed her hair.",
          "¡Mira! Se cambió el peinado."
        ]
      },
      {
        "en": "The bus has just left.",
        "es": "el camión acaba de irse",
        "imagen": "Persona corriendo hacia un autobús que se aleja",
        "ejemplo": [
          "Oh no, the bus has just left!",
          "¡Ay no, el camión acaba de irse!"
        ]
      },
      {
        "en": "I've broken my phone.",
        "es": "rompí mi celular",
        "imagen": "Celular con la pantalla estrellada en el piso",
        "ejemplo": [
          "I've broken my phone again.",
          "Volví a romper mi celular."
        ]
      },
      {
        "en": "They've got engaged.",
        "es": "se comprometieron",
        "imagen": "Pareja mostrando un anillo de compromiso feliz",
        "ejemplo": [
          "My best friends have got engaged!",
          "¡Mis mejores amigos se comprometieron!"
        ]
      },
      {
        "en": "I still haven't called her.",
        "es": "todavía no le he llamado",
        "imagen": "Persona mirando el contacto en su celular sin decidirse a llamar",
        "ejemplo": [
          "I still haven't called her. I'm nervous.",
          "Todavía no le he llamado. Estoy nervioso."
        ]
      }
    ],
    "grupos": [
      {
        "id": "noticias",
        "titulo": "Titulares y noticias",
        "icono": "📰",
        "patron": [
          "Scientists have discovered…",
          "The government has announced…",
          "Prices have risen…"
        ],
        "palabras": [
          {
            "en": "Scientists have discovered a new planet.",
            "es": "los científicos descubrieron un nuevo planeta",
            "imagen": "Telescopio grande apuntando al cielo estrellado",
            "ejemplo": [
              "Scientists have discovered a new planet near our solar system.",
              "Los científicos descubrieron un nuevo planeta cerca de nuestro sistema solar."
            ]
          },
          {
            "en": "The government has announced new rules.",
            "es": "el gobierno anunció nuevas reglas",
            "imagen": "Conferencia de prensa con micrófonos frente a un podio, sin texto",
            "ejemplo": [
              "The government has announced new traffic rules.",
              "El gobierno anunció nuevas reglas de tránsito."
            ]
          },
          {
            "en": "Prices have risen.",
            "es": "los precios subieron",
            "imagen": "Gráfica subiendo en una pantalla con monedas al lado",
            "ejemplo": [
              "Gas prices have risen this month.",
              "Los precios de la gasolina subieron este mes."
            ]
          },
          {
            "en": "A storm has hit the coast.",
            "es": "una tormenta azotó la costa",
            "imagen": "Olas enormes y palmeras dobladas por el viento",
            "ejemplo": [
              "A strong storm has hit the coast of Veracruz.",
              "Una tormenta fuerte azotó la costa de Veracruz."
            ]
          },
          {
            "en": "The team has signed a new player.",
            "es": "el equipo fichó a un nuevo jugador",
            "imagen": "Jugador sonriendo con la camiseta nueva de su equipo",
            "ejemplo": [
              "The team has signed a young Mexican player.",
              "El equipo fichó a un joven jugador mexicano."
            ]
          },
          {
            "en": "A famous actor has died.",
            "es": "murió un actor famoso",
            "imagen": "Flores y velas frente a una estrella en el piso",
            "ejemplo": [
              "A famous actor has died at the age of ninety.",
              "Murió un actor famoso a los noventa años."
            ]
          },
          {
            "en": "The company has launched a new phone.",
            "es": "la empresa lanzó un nuevo celular",
            "imagen": "Presentación de un celular nuevo en un escenario",
            "ejemplo": [
              "The company has launched a cheaper phone.",
              "La empresa lanzó un celular más barato."
            ]
          },
          {
            "en": "The museum has reopened.",
            "es": "el museo volvió a abrir",
            "imagen": "Visitantes entrando a un museo renovado",
            "ejemplo": [
              "The anthropology museum has reopened after repairs.",
              "El museo de antropología volvió a abrir tras las reparaciones."
            ]
          }
        ]
      },
      {
        "id": "pendientes",
        "titulo": "Pendientes del día",
        "icono": "✅",
        "patron": [
          "I've already…",
          "I haven't … yet.",
          "Have you … yet?"
        ],
        "palabras": [
          {
            "en": "I've already done the shopping.",
            "es": "ya hice el súper",
            "imagen": "Bolsas del súper sobre la mesa de la cocina",
            "ejemplo": [
              "I've already done the shopping for the week.",
              "Ya hice el súper de la semana."
            ]
          },
          {
            "en": "I haven't paid the rent yet.",
            "es": "todavía no pago la renta",
            "imagen": "Persona revisando su app del banco con preocupación",
            "ejemplo": [
              "I haven't paid the rent yet.",
              "Todavía no pago la renta."
            ]
          },
          {
            "en": "Have you sent the email yet?",
            "es": "¿ya mandaste el correo?",
            "imagen": "Jefa preguntando a un empleado frente a su computadora",
            "ejemplo": [
              "Have you sent the email to the client yet?",
              "¿Ya le mandaste el correo al cliente?"
            ]
          },
          {
            "en": "I've just finished the report.",
            "es": "acabo de terminar el reporte",
            "imagen": "Persona estirándose feliz frente a la computadora",
            "ejemplo": [
              "I've just finished the report. Finally!",
              "Acabo de terminar el reporte. ¡Por fin!"
            ]
          },
          {
            "en": "She hasn't replied yet.",
            "es": "ella todavía no contesta",
            "imagen": "Celular con un mensaje enviado sin respuesta",
            "ejemplo": [
              "I texted her, but she hasn't replied yet.",
              "Le escribí, pero todavía no contesta."
            ]
          },
          {
            "en": "We've already booked the tickets.",
            "es": "ya reservamos los boletos",
            "imagen": "Pareja mostrando boletos de avión en su celular",
            "ejemplo": [
              "We've already booked the tickets for December.",
              "Ya reservamos los boletos para diciembre."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I've just heard the news. Congratulations!",
        "es": "Acabo de oír la noticia. ¡Felicidades!"
      },
      {
        "en": "Sorry, they've already left.",
        "es": "Perdón, ya se fueron."
      },
      {
        "en": "Have you finished yet? Almost.",
        "es": "¿Ya terminaste? Casi."
      },
      {
        "en": "My order hasn't arrived yet.",
        "es": "Mi pedido todavía no llega."
      },
      {
        "en": "Oh no, the bus has just left!",
        "es": "¡Ay no, el camión acaba de irse!"
      },
      {
        "en": "Don't worry, I've already paid.",
        "es": "No te preocupes, ya pagué."
      },
      {
        "en": "The government has announced new traffic rules.",
        "es": "El gobierno anunció nuevas reglas de tránsito."
      },
      {
        "en": "I texted her, but she hasn't replied yet.",
        "es": "Le escribí, pero todavía no contesta."
      },
      {
        "en": "Have you already eaten? It's only eleven!",
        "es": "¿Ya comiste? ¡Apenas son las once!",
        "imagen": "Persona sorprendida viendo a su compañero comer temprano en la oficina"
      },
      {
        "en": "I still haven't called her. I'm nervous.",
        "es": "Todavía no le he llamado. Estoy nervioso."
      }
    ],
    "frases": [
      {
        "en": "Have you heard the news? Ana has just got a job at a big company in Monterrey.",
        "es": "¿Ya supiste? Ana acaba de conseguir trabajo en una empresa grande en Monterrey.",
        "imagen": "Amigas celebrando una buena noticia en una cafetería"
      },
      {
        "en": "I've already cleaned the kitchen, but I haven't done the laundry yet.",
        "es": "Ya limpié la cocina, pero todavía no lavo la ropa.",
        "imagen": "Cocina limpia y una canasta de ropa sucia esperando"
      },
      {
        "en": "The company has launched a new app, and thousands of people have already downloaded it.",
        "es": "La empresa lanzó una app nueva y miles de personas ya la descargaron.",
        "imagen": "Persona descargando una app en su celular en el metro"
      },
      {
        "en": "We haven't decided where to go on vacation yet. Have you got any ideas?",
        "es": "Todavía no decidimos a dónde ir de vacaciones. ¿Tienes alguna idea?",
        "imagen": "Pareja mirando un mapa con folletos de viaje en la mesa"
      },
      {
        "en": "My brother has just bought a house, so we're helping him move this weekend.",
        "es": "Mi hermano acaba de comprar una casa, así que le vamos a ayudar a mudarse este fin de semana.",
        "imagen": "Familia cargando cajas hacia una casa nueva"
      },
      {
        "en": "The package still hasn't arrived, and the company hasn't answered my emails.",
        "es": "El paquete todavía no llega y la empresa no ha contestado mis correos.",
        "imagen": "Persona frustrada revisando su correo junto a la puerta"
      },
      {
        "en": "Prices have gone up so much this year that I've stopped eating out.",
        "es": "Los precios han subido tanto este año que dejé de comer fuera.",
        "imagen": "Persona cocinando en casa con un ticket del súper largo"
      },
      {
        "en": "Have you seen the new series yet? Everybody has been talking about it.",
        "es": "¿Ya viste la serie nueva? Todo el mundo habla de ella.",
        "imagen": "Amigos viendo una serie en la sala con palomitas"
      },
      {
        "en": "I've just realized that I've left my keys at the office!",
        "es": "¡Me acabo de dar cuenta de que dejé las llaves en la oficina!",
        "imagen": "Persona frente a su puerta buscando sus llaves con preocupación"
      },
      {
        "en": "Scientists have found water on a distant planet, and they're very excited about it.",
        "es": "Los científicos encontraron agua en un planeta lejano y están muy emocionados.",
        "imagen": "Científicos celebrando frente a pantallas en un centro espacial"
      }
    ],
    "listening": [
      {
        "audio": "Have you booked the restaurant yet? Yes, I've already called them. We have a table at eight.",
        "pregunta": "¿A qué hora tienen la mesa?",
        "opciones": [
          "A las ocho",
          "A las siete",
          "A las nueve",
          "Todavía no reservan"
        ]
      },
      {
        "audio": "I've just spoken to the doctor. Grandpa is much better and he can go home tomorrow.",
        "pregunta": "¿Qué dijo el doctor?",
        "opciones": [
          "El abuelo puede irse a casa mañana",
          "El abuelo sigue grave",
          "El abuelo ya se fue",
          "Tiene que operarse"
        ]
      },
      {
        "audio": "The new shopping center has just opened, but the parking lot isn't ready yet.",
        "pregunta": "¿Qué todavía no está listo?",
        "opciones": [
          "El estacionamiento",
          "Las tiendas",
          "Los cines",
          "La entrada"
        ]
      },
      {
        "audio": "I still haven't received my salary, and I've already spent all my money.",
        "pregunta": "¿Cuál es el problema?",
        "opciones": [
          "No le han pagado y ya no tiene dinero",
          "Perdió su trabajo",
          "Gastó demasiado en ropa",
          "Le robaron"
        ]
      },
      {
        "audio": "Breaking news: the national team has just qualified for the World Cup.",
        "pregunta": "¿Cuál es la noticia?",
        "opciones": [
          "La selección acaba de calificar al Mundial",
          "La selección perdió",
          "Hay un nuevo entrenador",
          "Se canceló el Mundial"
        ]
      }
    ],
    "lectura": {
      "titulo": "Family news",
      "texto": "Dear Aunt Rosa, I hope you're well. A lot has happened since your last visit! First, Daniela has just finished university, and she's already found a job as an engineer in Querétaro. We're so proud of her. Second, we've finally painted the house. It's blue now, and the neighbors say it looks great. Unfortunately, Dad has broken his leg. He fell off the ladder while he was painting the garage! He's fine, but he hasn't gone back to work yet. Oh, and the cat has had four kittens. We've already found homes for two of them. Have you decided if you're coming for Christmas yet? We haven't bought the turkey yet, so tell us soon! Love, Mariana.",
      "preguntas": [
        {
          "pregunta": "¿Qué acaba de hacer Daniela?",
          "opciones": [
            "Terminar la universidad",
            "Casarse",
            "Mudarse a otro país",
            "Comprar una casa"
          ]
        },
        {
          "pregunta": "¿Cómo se rompió la pierna el papá?",
          "opciones": [
            "Se cayó de la escalera pintando",
            "Jugando fútbol",
            "En un accidente de carro",
            "Bajando del camión"
          ]
        },
        {
          "pregunta": "¿Cuántos gatitos ya tienen casa?",
          "opciones": [
            "Dos",
            "Cuatro",
            "Ninguno",
            "Uno"
          ]
        },
        {
          "pregunta": "¿Qué todavía no compran?",
          "opciones": [
            "El pavo",
            "La pintura",
            "Los regalos",
            "Los boletos"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con just, already o yet.",
        "pregunta": "Have you done your homework ___?",
        "respuestas": [
          "yet"
        ]
      },
      {
        "instruccion": "Completa con just, already o yet.",
        "pregunta": "I can't believe it! She's ___ finished the whole book in one day.",
        "respuestas": [
          "already"
        ]
      },
      {
        "instruccion": "Completa con just, already o yet.",
        "pregunta": "The movie hasn't started ___.",
        "respuestas": [
          "yet"
        ]
      },
      {
        "instruccion": "Completa con just, already o yet.",
        "pregunta": "Shh! The baby has ___ fallen asleep.",
        "respuestas": [
          "just"
        ]
      },
      {
        "instruccion": "Completa con el presente perfecto.",
        "pregunta": "They ___ (sell) their car.",
        "respuestas": [
          "have sold",
          "'ve sold"
        ]
      },
      {
        "instruccion": "Completa con el presente perfecto.",
        "pregunta": "She ___ (not reply) yet.",
        "respuestas": [
          "hasn't replied",
          "has not replied"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Acabo de llegar.",
        "respuestas": [
          "I've just arrived",
          "I have just arrived",
          "I just arrived",
          "I've just got here",
          "I just got here"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Ya comiste?",
        "respuestas": [
          "Have you eaten yet",
          "Did you eat yet",
          "Have you had lunch yet",
          "Have you already eaten"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Todavía no decido.",
        "respuestas": [
          "I haven't decided yet",
          "I have not decided yet",
          "I still haven't decided"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I have already paid yesterday.",
        "respuestas": [
          "I already paid yesterday",
          "I paid yesterday",
          "I've already paid",
          "I have already paid"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "I've ___ seen her. She's in the kitchen.",
        "opciones": [
          "just",
          "yet",
          "still",
          "ever"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Have you called the bank ___?",
        "opciones": [
          "yet",
          "already ago",
          "just",
          "since"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We haven't decided ___.",
        "opciones": [
          "yet",
          "already",
          "just",
          "ago"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál tiene «already» en el lugar correcto?",
        "opciones": [
          "I have already eaten.",
          "I already have eaten already.",
          "I have eaten already yet.",
          "Already I have eaten."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The prices ___ up a lot this year.",
        "opciones": [
          "have gone",
          "has gone",
          "have went",
          "are gone"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es correcta?",
        "opciones": [
          "She arrived at six.",
          "She has arrived at six.",
          "She has just arrived at six o'clock yesterday.",
          "She arrived yet."
        ]
      },
      {
        "tipo": "listening",
        "audio": "Has Pedro arrived yet? No, he's just called. He's stuck in traffic.",
        "pregunta": "¿Dónde está Pedro?",
        "opciones": [
          "Atorado en el tráfico",
          "En casa",
          "Ya llegó",
          "En el trabajo"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I've already watched the first season, but I haven't started the second one yet.",
        "pregunta": "¿Qué todavía no empieza?",
        "opciones": [
          "La segunda temporada",
          "La primera temporada",
          "La película",
          "El libro"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Ya se fueron.",
        "respuestas": [
          "They've already left",
          "They have already left",
          "They already left",
          "They've already gone"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¿Ya llegó el paquete?",
        "respuestas": [
          "Has the package arrived yet",
          "Did the package arrive yet",
          "Has the parcel arrived yet"
        ]
      }
    ]
  },
  {
    "id": "b1-02",
    "num": 2,
    "titulo": "Presente perfecto: for / since",
    "contexto": "Cuánto tiempo llevo… (casa, trabajo, amistades)",
    "explicacion": {
      "es": [
        "Para algo que **empezó en el pasado y sigue ahora** se usa el **presente perfecto**: *I**'ve lived** here for ten years.* (Llevo diez años viviendo aquí / Vivo aquí desde hace diez años.)",
        "***For*** + **duración** (cuánto tiempo): ***for** two years, **for** six months, **for** a long time, **for** ages*.",
        "***Since*** + **punto de inicio** (desde cuándo): ***since** 2018, **since** Monday, **since** I was a child, **since** last summer*.",
        "Para preguntar: ***How long have you** worked here?* (¿Cuánto tiempo llevas trabajando aquí?) Con el verbo *to be*: *How long **have you been** married? — We**'ve been** married **for** twenty years.*"
      ],
      "tabla": {
        "columnas": [
          "Pregunta",
          "Respuesta con for",
          "Respuesta con since"
        ],
        "filas": [
          [
            "How long have you lived here?",
            "for five years",
            "since 2020"
          ],
          [
            "How long have you known Ana?",
            "for a long time",
            "since we were kids"
          ],
          [
            "How long has he had that car?",
            "for three months",
            "since March"
          ],
          [
            "How long have you been a teacher?",
            "for ten years",
            "since I finished university"
          ]
        ]
      },
      "ojo": [
        "En español decimos «**vivo** aquí desde hace 10 años» (presente), pero en inglés es ***I've lived*** (presente perfecto). *I live here for ten years* ❌.",
        "«Desde hace» = ***for***, no *since*: *for ten years* ✅, no *since ten years* ❌.",
        "***Ago*** es para el **pasado simple**: *I moved here ten years **ago*** (me mudé hace diez años). *For* es para lo que **sigue**.",
        "Con *since* + oración, la oración va en **pasado**: *I've known her **since we were** at school.*",
        "***Know*** y ***have*** (tener) no van en continuo: *I've **known** him for years* ✅, no *I've been knowing him* ❌."
      ],
      "en": [
        "We use the present perfect for something that started in the past and continues now: I've lived here for ten years.",
        "For plus a period of time: for two years, for six months.",
        "Since plus a starting point: since 2018, since Monday, since I was a child.",
        "How long have you worked here? How long have you been married?"
      ]
    },
    "vocabulario": [
      {
        "en": "I've lived here for ten years.",
        "es": "vivo aquí desde hace diez años",
        "imagen": "Persona regando las plantas en el balcón de su departamento",
        "ejemplo": [
          "I've lived in this apartment for ten years.",
          "Vivo en este departamento desde hace diez años."
        ]
      },
      {
        "en": "She's worked there since 2019.",
        "es": "ella trabaja ahí desde 2019",
        "imagen": "Empleada en su escritorio con años de fotos alrededor",
        "ejemplo": [
          "She's worked at the bank since 2019.",
          "Ella trabaja en el banco desde 2019."
        ]
      },
      {
        "en": "We've known each other since school.",
        "es": "nos conocemos desde la escuela",
        "imagen": "Dos amigas adultas mirando una foto de cuando eran niñas",
        "ejemplo": [
          "We've known each other since primary school.",
          "Nos conocemos desde la primaria."
        ]
      },
      {
        "en": "How long have you been married?",
        "es": "¿cuánto tiempo llevan casados?",
        "imagen": "Pareja mayor tomada de la mano en un jardín",
        "ejemplo": [
          "How long have you been married? Forty years!",
          "¿Cuánto tiempo llevan casados? ¡Cuarenta años!"
        ]
      },
      {
        "en": "I've had this car for five years.",
        "es": "tengo este carro desde hace cinco años",
        "imagen": "Persona lavando un carro viejo pero bien cuidado",
        "ejemplo": [
          "I've had this car for five years.",
          "Tengo este carro desde hace cinco años."
        ]
      },
      {
        "en": "He's been sick since Monday.",
        "es": "él está enfermo desde el lunes",
        "imagen": "Hombre en cama con pañuelos y un termómetro",
        "ejemplo": [
          "My husband has been sick since Monday.",
          "Mi esposo está enfermo desde el lunes."
        ]
      },
      {
        "en": "I haven't seen her for ages.",
        "es": "hace siglos que no la veo",
        "imagen": "Persona mirando una foto vieja de su amiga con nostalgia",
        "ejemplo": [
          "I haven't seen my best friend for ages.",
          "Hace siglos que no veo a mi mejor amiga."
        ]
      },
      {
        "en": "They've been together for a year.",
        "es": "llevan un año juntos",
        "imagen": "Pareja joven celebrando su aniversario con un pastel",
        "ejemplo": [
          "They've been together for a year.",
          "Llevan un año juntos."
        ]
      },
      {
        "en": "I've studied English since January.",
        "es": "estudio inglés desde enero",
        "imagen": "Persona estudiando inglés con su laptop y un cuaderno",
        "ejemplo": [
          "I've studied English since January.",
          "Estudio inglés desde enero."
        ]
      },
      {
        "en": "It hasn't rained for months.",
        "es": "no ha llovido en meses",
        "imagen": "Campo seco y agrietado bajo el sol",
        "ejemplo": [
          "It hasn't rained for months in the north.",
          "En el norte no ha llovido en meses."
        ]
      },
      {
        "en": "We've been friends since we were kids.",
        "es": "somos amigos desde niños",
        "imagen": "Dos hombres adultos riendo en una banca del parque",
        "ejemplo": [
          "We've been friends since we were kids.",
          "Somos amigos desde niños."
        ]
      },
      {
        "en": "How long have you worked here?",
        "es": "¿cuánto tiempo llevas trabajando aquí?",
        "imagen": "Nueva empleada platicando con un compañero en la oficina",
        "ejemplo": [
          "How long have you worked here? Almost two years.",
          "¿Cuánto tiempo llevas aquí? Casi dos años."
        ]
      },
      {
        "en": "I've wanted a dog since I was little.",
        "es": "quiero un perro desde chiquito",
        "imagen": "Niño mirando cachorros por la ventana de una tienda",
        "ejemplo": [
          "I've wanted a dog since I was little.",
          "Quiero un perro desde que era chiquito."
        ]
      },
      {
        "en": "He's been a doctor for twenty years.",
        "es": "él es doctor desde hace veinte años",
        "imagen": "Doctor con experiencia atendiendo a un paciente",
        "ejemplo": [
          "My uncle has been a doctor for twenty years.",
          "Mi tío es doctor desde hace veinte años."
        ]
      },
      {
        "en": "I've been here since eight.",
        "es": "estoy aquí desde las ocho",
        "imagen": "Persona en una sala de espera mirando el reloj",
        "ejemplo": [
          "I've been here since eight o'clock.",
          "Estoy aquí desde las ocho."
        ]
      },
      {
        "en": "She hasn't called since Christmas.",
        "es": "no ha llamado desde Navidad",
        "imagen": "Celular sin llamadas sobre una mesa con adornos navideños",
        "ejemplo": [
          "My sister hasn't called since Christmas.",
          "Mi hermana no ha llamado desde Navidad."
        ]
      }
    ],
    "grupos": [
      {
        "id": "forsince",
        "titulo": "For o since",
        "icono": "⏳",
        "patron": [
          "for three years",
          "since 2015",
          "since I was a child"
        ],
        "palabras": [
          {
            "en": "for two weeks",
            "es": "desde hace dos semanas",
            "imagen": "Calendario con dos semanas marcadas",
            "ejemplo": [
              "I've been on vacation for two weeks.",
              "Llevo dos semanas de vacaciones."
            ]
          },
          {
            "en": "for a long time",
            "es": "desde hace mucho tiempo",
            "imagen": "Árbol enorme y antiguo en una plaza",
            "ejemplo": [
              "We've lived in this town for a long time.",
              "Vivimos en este pueblo desde hace mucho tiempo."
            ]
          },
          {
            "en": "for ages",
            "es": "desde hace siglos",
            "imagen": "Persona sacudiendo el polvo de una guitarra vieja",
            "ejemplo": [
              "I haven't played the guitar for ages.",
              "Hace siglos que no toco la guitarra."
            ]
          },
          {
            "en": "since last summer",
            "es": "desde el verano pasado",
            "imagen": "Foto de vacaciones en la playa pegada al refrigerador",
            "ejemplo": [
              "I haven't been to the beach since last summer.",
              "No he ido a la playa desde el verano pasado."
            ]
          },
          {
            "en": "since 2015",
            "es": "desde 2015",
            "imagen": "Placa de inauguración de un negocio, sin texto legible",
            "ejemplo": [
              "This restaurant has been open since 2015.",
              "Este restaurante está abierto desde 2015."
            ]
          },
          {
            "en": "since I was a child",
            "es": "desde que era niño",
            "imagen": "Foto de un niño tocando el piano junto a su versión adulta",
            "ejemplo": [
              "I've loved music since I was a child.",
              "Me encanta la música desde que era niño."
            ]
          },
          {
            "en": "since this morning",
            "es": "desde esta mañana",
            "imagen": "Persona con dolor de cabeza en la oficina a mediodía",
            "ejemplo": [
              "I've had a headache since this morning.",
              "Me duele la cabeza desde esta mañana."
            ]
          },
          {
            "en": "for half an hour",
            "es": "desde hace media hora",
            "imagen": "Persona esperando impaciente en una esquina",
            "ejemplo": [
              "I've been waiting for half an hour!",
              "¡Llevo media hora esperando!"
            ]
          }
        ]
      },
      {
        "id": "vida",
        "titulo": "Mi vida ahora",
        "icono": "🏡",
        "patron": [
          "I've lived…",
          "I've worked…",
          "I've known…"
        ],
        "palabras": [
          {
            "en": "I've lived in this neighborhood",
            "es": "vivo en esta colonia",
            "imagen": "Calle de colonia con casas de colores y árboles",
            "ejemplo": [
              "I've lived in this neighborhood since I got married.",
              "Vivo en esta colonia desde que me casé."
            ]
          },
          {
            "en": "I've worked from home",
            "es": "trabajo desde casa",
            "imagen": "Persona trabajando en la laptop en la mesa de la cocina",
            "ejemplo": [
              "I've worked from home for three years.",
              "Trabajo desde casa desde hace tres años."
            ]
          },
          {
            "en": "I've known my neighbor",
            "es": "conozco a mi vecino",
            "imagen": "Dos vecinos saludándose por encima de la barda",
            "ejemplo": [
              "I've known my neighbor for twenty years.",
              "Conozco a mi vecino desde hace veinte años."
            ]
          },
          {
            "en": "I've been a member",
            "es": "soy miembro",
            "imagen": "Persona entrando a un gimnasio con su credencial",
            "ejemplo": [
              "I've been a member of this gym since May.",
              "Soy miembro de este gimnasio desde mayo."
            ]
          },
          {
            "en": "I've had my dog",
            "es": "tengo a mi perro",
            "imagen": "Persona abrazando a su perro en el parque",
            "ejemplo": [
              "I've had my dog since he was a puppy.",
              "Tengo a mi perro desde que era cachorro."
            ]
          },
          {
            "en": "I've played in a band",
            "es": "toco en un grupo",
            "imagen": "Banda de amigos tocando en un garaje",
            "ejemplo": [
              "I've played in a band since high school.",
              "Toco en un grupo desde la prepa."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I've lived in this apartment for ten years.",
        "es": "Vivo en este departamento desde hace diez años."
      },
      {
        "en": "She's worked at the bank since 2019.",
        "es": "Ella trabaja en el banco desde 2019."
      },
      {
        "en": "How long have you been married? Forty years!",
        "es": "¿Cuánto tiempo llevan casados? ¡Cuarenta años!"
      },
      {
        "en": "I haven't seen my best friend for ages.",
        "es": "Hace siglos que no veo a mi mejor amiga."
      },
      {
        "en": "We've been friends since we were kids.",
        "es": "Somos amigos desde niños."
      },
      {
        "en": "I've been waiting for half an hour!",
        "es": "¡Llevo media hora esperando!"
      },
      {
        "en": "I've loved music since I was a child.",
        "es": "Me encanta la música desde que era niño."
      },
      {
        "en": "I moved here five years ago, so I've lived here for five years.",
        "es": "Me mudé aquí hace cinco años, así que vivo aquí desde hace cinco años.",
        "imagen": "Persona frente a su casa con una foto del día de la mudanza"
      },
      {
        "en": "My husband has been sick since Monday.",
        "es": "Mi esposo está enfermo desde el lunes."
      },
      {
        "en": "How long have you worked here? Almost two years.",
        "es": "¿Cuánto tiempo llevas aquí? Casi dos años."
      }
    ],
    "frases": [
      {
        "en": "My parents have lived in the same house since 1985, and they've never wanted to move.",
        "es": "Mis papás viven en la misma casa desde 1985 y nunca han querido mudarse.",
        "imagen": "Pareja mayor sentada en el porche de su casa de toda la vida"
      },
      {
        "en": "I've known Carmen since we were six, and she's still my best friend.",
        "es": "Conozco a Carmen desde que teníamos seis años y sigue siendo mi mejor amiga.",
        "imagen": "Dos amigas adultas abrazándose y riendo"
      },
      {
        "en": "How long have you had that cough? Since last week. You should see a doctor.",
        "es": "¿Desde cuándo tienes esa tos? Desde la semana pasada. Deberías ir al doctor.",
        "imagen": "Persona tosiendo mientras su amiga le ofrece un té"
      },
      {
        "en": "We've been together for eight years, but we've only been married for two.",
        "es": "Llevamos ocho años juntos, pero solo dos de casados.",
        "imagen": "Pareja mirando su álbum de boda en el sofá"
      },
      {
        "en": "He's worked as a taxi driver for fifteen years, so he knows every street in the city.",
        "es": "Trabaja como taxista desde hace quince años, así que conoce cada calle de la ciudad.",
        "imagen": "Taxista sonriendo al volante en la ciudad"
      },
      {
        "en": "I haven't eaten meat since I watched a documentary about animals.",
        "es": "No como carne desde que vi un documental sobre animales.",
        "imagen": "Persona preparando una ensalada colorida en su cocina"
      },
      {
        "en": "It's been raining since this morning, and the streets are full of water.",
        "es": "Está lloviendo desde esta mañana y las calles están llenas de agua.",
        "imagen": "Calle inundada con gente cruzando con cuidado"
      },
      {
        "en": "This bakery has been open since my grandfather was young.",
        "es": "Esta panadería está abierta desde que mi abuelo era joven.",
        "imagen": "Panadería tradicional con pan dulce en charolas"
      },
      {
        "en": "I've wanted to learn to dance salsa for years, and I finally started last month.",
        "es": "Desde hace años quería aprender a bailar salsa y por fin empecé el mes pasado.",
        "imagen": "Pareja aprendiendo salsa en una clase de baile"
      },
      {
        "en": "How long has your brother lived in Canada? For about six years.",
        "es": "¿Cuánto tiempo lleva tu hermano en Canadá? Como seis años.",
        "imagen": "Hombre con abrigo frente a un paisaje nevado de Canadá"
      }
    ],
    "listening": [
      {
        "audio": "I've worked in this company since 2016, but I've only been a manager for a year.",
        "pregunta": "¿Desde cuándo es gerente?",
        "opciones": [
          "Desde hace un año",
          "Desde 2016",
          "Desde hace seis años",
          "Desde hace un mes"
        ]
      },
      {
        "audio": "We've known each other for twenty years. We met at university.",
        "pregunta": "¿Dónde se conocieron?",
        "opciones": [
          "En la universidad",
          "En el trabajo",
          "En la primaria",
          "En un viaje"
        ]
      },
      {
        "audio": "How long have you lived in Guadalajara? Since I was twelve.",
        "pregunta": "¿Desde cuándo vive en Guadalajara?",
        "opciones": [
          "Desde los doce años",
          "Desde hace doce años",
          "Desde 2012",
          "Desde hace dos años"
        ]
      },
      {
        "audio": "I haven't had a vacation for three years, so this trip is very special.",
        "pregunta": "¿Cuánto tiempo lleva sin vacaciones?",
        "opciones": [
          "Tres años",
          "Tres meses",
          "Un año",
          "Trece años"
        ]
      },
      {
        "audio": "My grandmother has been in the hospital since Friday, but she's getting better.",
        "pregunta": "¿Desde cuándo está la abuela en el hospital?",
        "opciones": [
          "Desde el viernes",
          "Desde hace una semana",
          "Desde ayer",
          "Desde el lunes"
        ]
      }
    ],
    "lectura": {
      "titulo": "Forty years in the same market",
      "texto": "Doña Lupe has sold fruit in the San Juan market since 1984. She started when she was only sixteen, helping her mother at the stall. Her mother retired in 1995, and since then Doña Lupe has run the business alone. She has known some of her customers for more than thirty years; now she sells fruit to their grandchildren! The market has changed a lot since she started. There are fewer stalls now, and many young people prefer to shop at supermarkets. But Doña Lupe hasn't lost her customers, because her mangoes are the best in the city. Her son has worked with her for five years, and he has created a page on social media for the stall. Since he did that, they've had many new young customers.",
      "preguntas": [
        {
          "pregunta": "¿Desde cuándo vende fruta Doña Lupe?",
          "opciones": [
            "Desde 1984",
            "Desde 1995",
            "Desde hace cinco años",
            "Desde los treinta años"
          ]
        },
        {
          "pregunta": "¿Qué pasó en 1995?",
          "opciones": [
            "Su mamá se jubiló",
            "Abrió su puesto",
            "Nació su hijo",
            "Cerró el mercado"
          ]
        },
        {
          "pregunta": "¿Por qué no ha perdido a sus clientes?",
          "opciones": [
            "Sus mangos son los mejores",
            "Es la más barata",
            "Vende en internet",
            "No hay otros puestos"
          ]
        },
        {
          "pregunta": "¿Qué hizo su hijo?",
          "opciones": [
            "Creó una página en redes sociales",
            "Abrió otro puesto",
            "Se fue a un supermercado",
            "Cambió los precios"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con for o since.",
        "pregunta": "I've lived here ___ 2010.",
        "respuestas": [
          "since"
        ]
      },
      {
        "instruccion": "Completa con for o since.",
        "pregunta": "She's been my friend ___ twenty years.",
        "respuestas": [
          "for"
        ]
      },
      {
        "instruccion": "Completa con for o since.",
        "pregunta": "I haven't eaten ___ this morning.",
        "respuestas": [
          "since"
        ]
      },
      {
        "instruccion": "Completa con for o since.",
        "pregunta": "We've waited ___ an hour.",
        "respuestas": [
          "for"
        ]
      },
      {
        "instruccion": "Completa con el presente perfecto.",
        "pregunta": "I ___ (know) him since we were kids.",
        "respuestas": [
          "have known",
          "'ve known"
        ]
      },
      {
        "instruccion": "Completa la pregunta.",
        "pregunta": "How long ___ you lived in this city?",
        "respuestas": [
          "have"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Vivo aquí desde hace cinco años.",
        "respuestas": [
          "I've lived here for five years",
          "I have lived here for five years",
          "I've been living here for five years",
          "I have been living here for five years"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Cuánto tiempo llevas trabajando aquí?",
        "respuestas": [
          "How long have you worked here",
          "How long have you been working here"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Hace siglos que no la veo.",
        "respuestas": [
          "I haven't seen her for ages",
          "I have not seen her for ages",
          "I haven't seen her in ages"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I live here since 2015.",
        "respuestas": [
          "I've lived here since 2015",
          "I have lived here since 2015",
          "I've been living here since 2015",
          "I have been living here since 2015"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "I've worked here ___ six years.",
        "opciones": [
          "for",
          "since",
          "ago",
          "during"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "They've been married ___ 1998.",
        "opciones": [
          "since",
          "for",
          "ago",
          "from"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "How long ___ you known Luisa?",
        "opciones": [
          "have",
          "do",
          "did",
          "are"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Vivo aquí desde hace 3 años» =",
        "opciones": [
          "I've lived here for three years.",
          "I live here since three years.",
          "I lived here for three years ago.",
          "I'm living here since three years."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I moved to Mexico City five years ___.",
        "opciones": [
          "ago",
          "for",
          "since",
          "before"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I've known her since we ___ at school.",
        "opciones": [
          "were",
          "are",
          "have been",
          "be"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I've had this phone since 2020, and it still works perfectly.",
        "pregunta": "¿Desde cuándo tiene el celular?",
        "opciones": [
          "Desde 2020",
          "Desde hace 20 años",
          "Desde 2002",
          "Desde el mes pasado"
        ]
      },
      {
        "tipo": "listening",
        "audio": "We haven't visited my grandparents' town for ages. Let's go this summer.",
        "pregunta": "¿Qué proponen hacer?",
        "opciones": [
          "Visitar el pueblo de los abuelos este verano",
          "Mudarse con los abuelos",
          "Ir a la playa",
          "Llamar a los abuelos"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: desde el lunes",
        "respuestas": [
          "since Monday"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Nos conocemos desde hace diez años.",
        "respuestas": [
          "We've known each other for ten years",
          "We have known each other for ten years"
        ]
      }
    ]
  },
  {
    "id": "b1-03",
    "num": 3,
    "titulo": "Presente perfecto vs. pasado simple",
    "contexto": "Logros y experiencias",
    "explicacion": {
      "es": [
        "El **presente perfecto** habla del pasado **sin decir cuándo** o de un periodo que **todavía no termina** (*today, this year, in my life*): *I**'ve run** three marathons.* (Corrí tres maratones en mi vida; puedo correr más.)",
        "El **pasado simple** habla de un momento **terminado y concreto** (*yesterday, in 2015, last year, when I was young*): *I **ran** my first marathon **in 2018**.*",
        "En una conversación es normal **empezar** con el presente perfecto (la experiencia) y **seguir** con el pasado simple (los detalles): *Have you ever **been** to Peru? — Yes, I **have**. I **went** there in 2019. It **was** amazing.*",
        "Compara: *She**'s written** five books* (sigue viva y puede escribir más) / *Gabriel García Márquez **wrote** many books* (ya murió, su vida terminó)."
      ],
      "tabla": {
        "columnas": [
          "Presente perfecto",
          "Pasado simple"
        ],
        "filas": [
          [
            "Sin tiempo exacto: I've lost my keys.",
            "Con tiempo exacto: I lost my keys yesterday."
          ],
          [
            "Periodo abierto: I've worked a lot this week.",
            "Periodo cerrado: I worked a lot last week."
          ],
          [
            "Experiencia: Have you ever won a prize?",
            "Detalles: When did you win it?"
          ],
          [
            "ever, never, just, already, yet, so far",
            "yesterday, ago, last…, in 2010, when…"
          ]
        ]
      },
      "ojo": [
        "Con ***ago, yesterday, last…, in + año*** siempre pasado simple: *I **saw** him two days ago* ✅, no *I've seen him two days ago* ❌.",
        "Las preguntas con ***When…?*** van en pasado simple: ***When did** you **start**?* ✅, no *When have you started?* ❌.",
        "***This morning*** depende: si **todavía es de mañana**, presente perfecto (*I've had two coffees this morning*); si **ya es de tarde**, pasado (*I had two coffees this morning*).",
        "***So far*** (hasta ahora) va con presente perfecto: *We've sold 200 tickets **so far**.*",
        "Logros con presente perfecto: *I**'ve achieved** my goal. She**'s managed to** save money.*"
      ],
      "en": [
        "The present perfect talks about the past without saying when: I've run three marathons.",
        "The past simple talks about a finished time: I ran my first marathon in 2018.",
        "We start with the present perfect and give details in the past: Have you been to Peru? Yes, I went there in 2019."
      ]
    },
    "vocabulario": [
      {
        "en": "I've run a marathon.",
        "es": "he corrido un maratón",
        "imagen": "Corredora cruzando la meta de un maratón con los brazos arriba",
        "ejemplo": [
          "I've run a marathon, and I want to run another one.",
          "He corrido un maratón y quiero correr otro."
        ]
      },
      {
        "en": "She graduated in 2020.",
        "es": "ella se graduó en 2020",
        "imagen": "Graduada lanzando su birrete al aire",
        "ejemplo": [
          "She graduated from university in 2020.",
          "Ella se graduó de la universidad en 2020."
        ]
      },
      {
        "en": "I've learned to play the guitar.",
        "es": "aprendí a tocar la guitarra",
        "imagen": "Persona tocando la guitarra en su sala con orgullo",
        "ejemplo": [
          "This year I've learned to play the guitar.",
          "Este año aprendí a tocar la guitarra."
        ]
      },
      {
        "en": "He's won three medals.",
        "es": "él ha ganado tres medallas",
        "imagen": "Nadador mostrando tres medallas en el cuello",
        "ejemplo": [
          "My son has won three swimming medals.",
          "Mi hijo ha ganado tres medallas de natación."
        ]
      },
      {
        "en": "We bought our first house in 2018.",
        "es": "compramos nuestra primera casa en 2018",
        "imagen": "Pareja abriendo la puerta de su primera casa con llaves",
        "ejemplo": [
          "We bought our first house in 2018.",
          "Compramos nuestra primera casa en 2018."
        ]
      },
      {
        "en": "I've saved enough money.",
        "es": "he ahorrado suficiente dinero",
        "imagen": "Alcancía rebosando de monedas y billetes",
        "ejemplo": [
          "I've finally saved enough money for a car.",
          "Por fin ahorré suficiente dinero para un carro."
        ]
      },
      {
        "en": "She's published a book.",
        "es": "ella ha publicado un libro",
        "imagen": "Escritora firmando ejemplares de su libro en una librería",
        "ejemplo": [
          "My aunt has published a book of poems.",
          "Mi tía ha publicado un libro de poemas."
        ]
      },
      {
        "en": "I've never failed an exam.",
        "es": "nunca he reprobado un examen",
        "imagen": "Estudiante sonriendo con un examen con buena calificación",
        "ejemplo": [
          "I've never failed an exam.",
          "Nunca he reprobado un examen."
        ]
      },
      {
        "en": "He started his business ten years ago.",
        "es": "él empezó su negocio hace diez años",
        "imagen": "Dueño de un taller frente a su negocio con orgullo",
        "ejemplo": [
          "He started his business ten years ago.",
          "Empezó su negocio hace diez años."
        ]
      },
      {
        "en": "I've achieved my goal.",
        "es": "logré mi meta",
        "imagen": "Alpinista celebrando en la cima de una montaña",
        "ejemplo": [
          "After two years, I've achieved my goal.",
          "Después de dos años, logré mi meta."
        ]
      },
      {
        "en": "She's been promoted.",
        "es": "la ascendieron",
        "imagen": "Empleada recibiendo felicitaciones de su equipo",
        "ejemplo": [
          "She's been promoted to manager.",
          "La ascendieron a gerente."
        ]
      },
      {
        "en": "I passed my driving test.",
        "es": "aprobé mi examen de manejo",
        "imagen": "Joven mostrando su licencia de manejo nueva",
        "ejemplo": [
          "I passed my driving test last week.",
          "La semana pasada aprobé mi examen de manejo."
        ]
      },
      {
        "en": "We've visited twelve countries.",
        "es": "hemos visitado doce países",
        "imagen": "Mapa del mundo con pines de colores en varios países",
        "ejemplo": [
          "We've visited twelve countries so far.",
          "Hasta ahora hemos visitado doce países."
        ]
      },
      {
        "en": "I've climbed Pico de Orizaba.",
        "es": "he subido el Pico de Orizaba",
        "imagen": "Alpinistas en la cumbre nevada de un volcán",
        "ejemplo": [
          "I've climbed Pico de Orizaba twice.",
          "He subido el Pico de Orizaba dos veces."
        ]
      },
      {
        "en": "He lost his job last year.",
        "es": "él perdió su trabajo el año pasado",
        "imagen": "Hombre mirando ofertas de trabajo en su laptop",
        "ejemplo": [
          "He lost his job last year, but now he has a better one.",
          "Perdió su trabajo el año pasado, pero ahora tiene uno mejor."
        ]
      },
      {
        "en": "I've made a lot of friends.",
        "es": "he hecho muchos amigos",
        "imagen": "Grupo de amigos riendo en una reunión",
        "ejemplo": [
          "I've made a lot of friends since I moved here.",
          "He hecho muchos amigos desde que me mudé aquí."
        ]
      }
    ],
    "grupos": [
      {
        "id": "logros",
        "titulo": "Logros personales",
        "icono": "🏆",
        "patron": [
          "I've managed to…",
          "I've finally…",
          "So far I've…"
        ],
        "palabras": [
          {
            "en": "I've managed to quit smoking.",
            "es": "logré dejar de fumar",
            "imagen": "Persona sonriendo y rompiendo un cigarro",
            "ejemplo": [
              "After many tries, I've managed to quit smoking.",
              "Después de muchos intentos, logré dejar de fumar."
            ]
          },
          {
            "en": "I've finally finished my degree.",
            "es": "por fin terminé mi carrera",
            "imagen": "Adulto con toga recibiendo su título",
            "ejemplo": [
              "I've finally finished my degree at forty.",
              "Por fin terminé mi carrera a los cuarenta."
            ]
          },
          {
            "en": "So far I've lost five kilos.",
            "es": "hasta ahora he bajado cinco kilos",
            "imagen": "Persona contenta parada en una báscula",
            "ejemplo": [
              "So far I've lost five kilos.",
              "Hasta ahora he bajado cinco kilos."
            ]
          },
          {
            "en": "I've paid off my debts.",
            "es": "ya pagué mis deudas",
            "imagen": "Persona rompiendo una tarjeta de crédito con alivio",
            "ejemplo": [
              "I've paid off all my debts.",
              "Ya pagué todas mis deudas."
            ]
          },
          {
            "en": "I've learned a new language.",
            "es": "aprendí un idioma nuevo",
            "imagen": "Persona conversando con fluidez con un extranjero",
            "ejemplo": [
              "I've learned Portuguese in one year.",
              "Aprendí portugués en un año."
            ]
          },
          {
            "en": "I've overcome my fear.",
            "es": "superé mi miedo",
            "imagen": "Persona sonriendo en un avión mirando por la ventana",
            "ejemplo": [
              "I've overcome my fear of flying.",
              "Superé mi miedo a volar."
            ]
          }
        ]
      },
      {
        "id": "cuando",
        "titulo": "¿Cuándo fue?",
        "icono": "🗓️",
        "patron": [
          "When did you…?",
          "…ago",
          "in 2019"
        ],
        "palabras": [
          {
            "en": "When did you start?",
            "es": "¿cuándo empezaste?",
            "imagen": "Entrevistadora preguntando a un emprendedor",
            "ejemplo": [
              "When did you start your company?",
              "¿Cuándo empezaste tu empresa?"
            ]
          },
          {
            "en": "three years ago",
            "es": "hace tres años",
            "imagen": "Foto de hace tres años junto a la persona actual",
            "ejemplo": [
              "I moved here three years ago.",
              "Me mudé aquí hace tres años."
            ]
          },
          {
            "en": "in 2019",
            "es": "en 2019",
            "imagen": "Calendario antiguo de 2019 colgado en la pared",
            "ejemplo": [
              "We got married in 2019.",
              "Nos casamos en 2019."
            ]
          },
          {
            "en": "when I was a teenager",
            "es": "cuando era adolescente",
            "imagen": "Adolescente con patineta en los años noventa",
            "ejemplo": [
              "I learned to skate when I was a teenager.",
              "Aprendí a patinar cuando era adolescente."
            ]
          },
          {
            "en": "last month",
            "es": "el mes pasado",
            "imagen": "Calendario con la hoja anterior volteada",
            "ejemplo": [
              "I got a new job last month.",
              "El mes pasado conseguí un trabajo nuevo."
            ]
          },
          {
            "en": "the first time",
            "es": "la primera vez",
            "imagen": "Niño nadando solo por primera vez",
            "ejemplo": [
              "The first time I swam in the sea, I was scared.",
              "La primera vez que nadé en el mar tenía miedo."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I've run a marathon, and I want to run another one.",
        "es": "He corrido un maratón y quiero correr otro."
      },
      {
        "en": "She graduated from university in 2020.",
        "es": "Ella se graduó de la universidad en 2020."
      },
      {
        "en": "We've visited twelve countries so far.",
        "es": "Hasta ahora hemos visitado doce países."
      },
      {
        "en": "I passed my driving test last week.",
        "es": "La semana pasada aprobé mi examen de manejo."
      },
      {
        "en": "Have you ever been to Peru? Yes, I went there in 2019.",
        "es": "¿Has ido a Perú? Sí, fui en 2019.",
        "imagen": "Viajero frente a Machu Picchu entre montañas"
      },
      {
        "en": "When did you start your company?",
        "es": "¿Cuándo empezaste tu empresa?"
      },
      {
        "en": "After many tries, I've managed to quit smoking.",
        "es": "Después de muchos intentos, logré dejar de fumar."
      },
      {
        "en": "She's been promoted to manager.",
        "es": "La ascendieron a gerente."
      },
      {
        "en": "He lost his job last year, but now he has a better one.",
        "es": "Perdió su trabajo el año pasado, pero ahora tiene uno mejor."
      },
      {
        "en": "I've made a lot of friends since I moved here.",
        "es": "He hecho muchos amigos desde que me mudé aquí."
      }
    ],
    "frases": [
      {
        "en": "I've worked in three countries, but I started my career in a small office in Puebla.",
        "es": "He trabajado en tres países, pero empecé mi carrera en una pequeña oficina en Puebla.",
        "imagen": "Profesionista mirando por la ventana de una oficina moderna"
      },
      {
        "en": "Have you ever met anyone famous? Yes, I met a famous singer at the airport last year.",
        "es": "¿Alguna vez has conocido a alguien famoso? Sí, conocí a un cantante famoso en el aeropuerto el año pasado.",
        "imagen": "Fan tomándose una selfie con un cantante en un aeropuerto"
      },
      {
        "en": "This year has been amazing: I've changed jobs, I've moved, and I've started a new hobby.",
        "es": "Este año ha sido increíble: cambié de trabajo, me mudé y empecé un nuevo pasatiempo.",
        "imagen": "Persona feliz en su nuevo departamento con una guitarra"
      },
      {
        "en": "Picasso painted more than ten thousand works during his life.",
        "es": "Picasso pintó más de diez mil obras en su vida.",
        "imagen": "Taller de pintura antiguo lleno de lienzos"
      },
      {
        "en": "My daughter has read all the books in the series, and she read the last one in two days.",
        "es": "Mi hija ha leído todos los libros de la serie, y el último lo leyó en dos días.",
        "imagen": "Niña leyendo emocionada rodeada de libros"
      },
      {
        "en": "I've had three cars in my life. I bought the first one when I was twenty.",
        "es": "He tenido tres carros en mi vida. Compré el primero a los veinte años.",
        "imagen": "Joven feliz junto a su primer carro usado"
      },
      {
        "en": "We've raised a lot of money for the school so far, and we started only a month ago.",
        "es": "Hemos juntado mucho dinero para la escuela hasta ahora, y empezamos hace apenas un mes.",
        "imagen": "Voluntarios contando donaciones en una escuela"
      },
      {
        "en": "I haven't seen my cousin since 2015. We last met at my brother's wedding.",
        "es": "No veo a mi primo desde 2015. La última vez fue en la boda de mi hermano.",
        "imagen": "Foto de una boda familiar con dos primos abrazados"
      },
      {
        "en": "She's won many prizes, but she won her first prize when she was only eight.",
        "es": "Ha ganado muchos premios, pero ganó el primero cuando tenía solo ocho años.",
        "imagen": "Niña con un trofeo de ajedrez muy contenta"
      },
      {
        "en": "I've already had three coffees this morning, and it's only ten o'clock!",
        "es": "¡Ya me tomé tres cafés esta mañana y apenas son las diez!",
        "imagen": "Tres tazas de café vacías junto a una laptop"
      }
    ],
    "listening": [
      {
        "audio": "I've been to Japan twice. The first time was in 2015, for work.",
        "pregunta": "¿Cuándo fue a Japón la primera vez?",
        "opciones": [
          "En 2015",
          "En 2005",
          "Nunca ha ido",
          "El año pasado"
        ]
      },
      {
        "audio": "She's written four novels, and her last one won a big prize in Spain.",
        "pregunta": "¿Qué ganó su última novela?",
        "opciones": [
          "Un premio en España",
          "Mucho dinero",
          "Una película",
          "Nada"
        ]
      },
      {
        "audio": "We started the project in January, and so far we've finished half of it.",
        "pregunta": "¿Cuánto del proyecto han terminado?",
        "opciones": [
          "La mitad",
          "Todo",
          "Nada",
          "Una cuarta parte"
        ]
      },
      {
        "audio": "Have you ever broken a bone? Yes, I broke my arm when I was ten.",
        "pregunta": "¿Qué se rompió?",
        "opciones": [
          "El brazo",
          "La pierna",
          "Un dedo",
          "Nada"
        ]
      },
      {
        "audio": "I've lost my wallet! When did you last see it? At the restaurant, I think.",
        "pregunta": "¿Dónde vio la cartera por última vez?",
        "opciones": [
          "En el restaurante",
          "En el carro",
          "En casa",
          "En el camión"
        ]
      }
    ],
    "lectura": {
      "titulo": "From the kitchen to the world",
      "texto": "Elena García has become one of the most famous chefs in Mexico. She was born in a small town in Oaxaca and learned to cook with her grandmother. When she was twenty, she moved to Mexico City and worked as a dishwasher in a restaurant. She didn't have much money, but she studied cooking at night. In 2012 she opened her first restaurant, a small place with only six tables. Since then, she has opened four more restaurants, and she has cooked for presidents and movie stars. She has written two cookbooks and she has appeared on many TV shows. Last year she won an international prize for the best traditional cuisine. When a journalist asked her about her success, she said: I've worked very hard, but I've never forgotten my grandmother's recipes.",
      "preguntas": [
        {
          "pregunta": "¿Quién le enseñó a cocinar?",
          "opciones": [
            "Su abuela",
            "Su mamá",
            "Un chef famoso",
            "La escuela de cocina"
          ]
        },
        {
          "pregunta": "¿Cuál fue su primer trabajo en la ciudad?",
          "opciones": [
            "Lavaplatos",
            "Mesera",
            "Cocinera",
            "Cajera"
          ]
        },
        {
          "pregunta": "¿Cuántos restaurantes tiene en total?",
          "opciones": [
            "Cinco",
            "Cuatro",
            "Seis",
            "Uno"
          ]
        },
        {
          "pregunta": "¿Qué ganó el año pasado?",
          "opciones": [
            "Un premio internacional",
            "Un programa de TV",
            "Un restaurante nuevo",
            "Un libro"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Elige el tiempo correcto.",
        "pregunta": "I ___ (see) that movie last night.",
        "respuestas": [
          "saw"
        ]
      },
      {
        "instruccion": "Elige el tiempo correcto.",
        "pregunta": "I ___ (see) that movie three times.",
        "respuestas": [
          "have seen",
          "'ve seen"
        ]
      },
      {
        "instruccion": "Elige el tiempo correcto.",
        "pregunta": "When ___ you ___ (start) your job? (escribe las dos palabras)",
        "respuestas": [
          "did start"
        ]
      },
      {
        "instruccion": "Elige el tiempo correcto.",
        "pregunta": "She ___ (live) in Paris in 2010.",
        "respuestas": [
          "lived"
        ]
      },
      {
        "instruccion": "Elige el tiempo correcto.",
        "pregunta": "We ___ (sell) 300 tickets so far.",
        "respuestas": [
          "have sold",
          "'ve sold"
        ]
      },
      {
        "instruccion": "Completa con ago o so far.",
        "pregunta": "I met him ten years ___.",
        "respuestas": [
          "ago"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Cuándo te graduaste?",
        "respuestas": [
          "When did you graduate"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Logré mi meta.",
        "respuestas": [
          "I've achieved my goal",
          "I have achieved my goal",
          "I achieved my goal",
          "I reached my goal",
          "I've reached my goal"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Nunca he reprobado un examen.",
        "respuestas": [
          "I've never failed an exam",
          "I have never failed an exam",
          "I've never failed a test",
          "I have never failed a test"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I've visited my aunt two days ago.",
        "respuestas": [
          "I visited my aunt two days ago"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "I ___ my keys. Can you help me look for them?",
        "opciones": [
          "'ve lost",
          "lost yesterday",
          "lose",
          "was lost"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She ___ to Canada in 2017.",
        "opciones": [
          "moved",
          "has moved",
          "have moved",
          "moves"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "When ___ you buy that jacket?",
        "opciones": [
          "did",
          "have",
          "has",
          "do"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Shakespeare ___ many plays.",
        "opciones": [
          "wrote",
          "has written",
          "have written",
          "writes"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We ___ a lot this week, and it's only Wednesday!",
        "opciones": [
          "'ve worked",
          "worked last",
          "work",
          "were working"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es correcta?",
        "opciones": [
          "I met her three years ago.",
          "I've met her three years ago.",
          "I have meet her ago.",
          "I meet her three years ago."
        ]
      },
      {
        "tipo": "listening",
        "audio": "I've worked here for two years, but I started in a different department.",
        "pregunta": "¿Cuánto tiempo lleva trabajando ahí?",
        "opciones": [
          "Dos años",
          "Un año",
          "Doce años",
          "Dos meses"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Have you finished the course? Yes, I finished it last Friday and I got a certificate.",
        "pregunta": "¿Qué recibió?",
        "opciones": [
          "Un certificado",
          "Un premio",
          "Un trabajo",
          "Dinero"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Lo vi ayer.",
        "respuestas": [
          "I saw him yesterday",
          "I saw it yesterday",
          "I saw her yesterday"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: He visitado México muchas veces.",
        "respuestas": [
          "I've visited Mexico many times",
          "I have visited Mexico many times",
          "I've been to Mexico many times",
          "I have been to Mexico many times"
        ]
      }
    ]
  },
  {
    "id": "b1-04",
    "num": 4,
    "titulo": "Presente perfecto continuo (introducción)",
    "contexto": "Actividades recientes",
    "explicacion": {
      "es": [
        "El **presente perfecto continuo** (*have / has been* + verbo con *-ing*) habla de una actividad que **empezó en el pasado y sigue ahora** (o acaba de terminar), poniendo atención en la **duración**: *I**'ve been studying** for three hours.* (Llevo tres horas estudiando.)",
        "Se usa mucho con ***for, since*** y ***How long…?***: ***How long have you been waiting**? — I**'ve been waiting** since ten.*",
        "También explica una **situación de ahora** por una actividad reciente, aunque ya haya terminado: *You're wet! — Yes, I**'ve been running** in the rain.* *Your eyes are red. **Have** you **been crying**?*",
        "**Negativo:** *I **haven't been sleeping** well lately.* (Últimamente no he dormido bien.) Palabras útiles: ***lately / recently*** (últimamente), ***all day*** (todo el día), ***all morning***."
      ],
      "tabla": {
        "columnas": [
          "Sujeto",
          "Forma",
          "Ejemplo"
        ],
        "filas": [
          [
            "I / you / we / they",
            "have been + -ing",
            "We've been waiting for an hour."
          ],
          [
            "he / she / it",
            "has been + -ing",
            "It's been raining all day."
          ],
          [
            "Pregunta",
            "Have / Has … been + -ing?",
            "How long have you been learning English?"
          ],
          [
            "Negativo",
            "haven't / hasn't been + -ing",
            "She hasn't been feeling well."
          ]
        ]
      },
      "ojo": [
        "En español usamos ***llevar*** + gerundio: «Llevo dos horas esperando» = ***I've been waiting for two hours***.",
        "Para **cuántas veces / cuántos** se usa el presente perfecto simple: *I**'ve read** three books this month* (resultado) / *I**'ve been reading** all afternoon* (actividad).",
        "Verbos de estado (*know, like, have* de posesión, *want*) **no** van en continuo: *I've **known** her for years* ✅, no *I've been knowing* ❌.",
        "*It's been raining* = ***It has** been raining* (no *It is*).",
        "Con *live* y *work* los dos sirven casi igual: *I've lived / I've been living here for five years.*"
      ],
      "en": [
        "The present perfect continuous is for activities that started in the past and continue now: I've been studying for three hours.",
        "How long have you been waiting? I've been waiting since ten.",
        "It also explains a present situation: You're wet! Yes, I've been running in the rain.",
        "Negative: I haven't been sleeping well lately."
      ]
    },
    "vocabulario": [
      {
        "en": "I've been waiting for an hour.",
        "es": "llevo una hora esperando",
        "imagen": "Persona impaciente mirando su reloj en una esquina",
        "ejemplo": [
          "I've been waiting for you for an hour!",
          "¡Llevo una hora esperándote!"
        ]
      },
      {
        "en": "It's been raining all day.",
        "es": "ha llovido todo el día",
        "imagen": "Ventana con gotas de lluvia y cielo gris",
        "ejemplo": [
          "It's been raining all day, so we stayed home.",
          "Ha llovido todo el día, así que nos quedamos en casa."
        ]
      },
      {
        "en": "She's been studying since eight.",
        "es": "ella está estudiando desde las ocho",
        "imagen": "Estudiante con libros abiertos y una lámpara encendida",
        "ejemplo": [
          "She's been studying since eight this morning.",
          "Está estudiando desde las ocho de la mañana."
        ]
      },
      {
        "en": "How long have you been learning English?",
        "es": "¿cuánto tiempo llevas aprendiendo inglés?",
        "imagen": "Persona con audífonos estudiando inglés en su celular",
        "ejemplo": [
          "How long have you been learning English?",
          "¿Cuánto tiempo llevas aprendiendo inglés?"
        ]
      },
      {
        "en": "I've been working too much.",
        "es": "he estado trabajando demasiado",
        "imagen": "Persona agotada frente a la computadora de noche",
        "ejemplo": [
          "I've been working too much lately.",
          "Últimamente he estado trabajando demasiado."
        ]
      },
      {
        "en": "We've been looking for a house.",
        "es": "hemos estado buscando casa",
        "imagen": "Pareja recorriendo una casa vacía con un agente",
        "ejemplo": [
          "We've been looking for a house for months.",
          "Llevamos meses buscando casa."
        ]
      },
      {
        "en": "He's been playing video games all afternoon.",
        "es": "se la ha pasado jugando videojuegos toda la tarde",
        "imagen": "Adolescente con control de videojuegos en el sofá",
        "ejemplo": [
          "My son has been playing video games all afternoon.",
          "Mi hijo se ha pasado toda la tarde jugando videojuegos."
        ]
      },
      {
        "en": "I haven't been sleeping well.",
        "es": "no he dormido bien",
        "imagen": "Persona con ojeras despierta en la cama",
        "ejemplo": [
          "I haven't been sleeping well recently.",
          "Últimamente no he dormido bien."
        ]
      },
      {
        "en": "Have you been crying?",
        "es": "¿has estado llorando?",
        "imagen": "Persona con los ojos rojos y un pañuelo",
        "ejemplo": [
          "Your eyes are red. Have you been crying?",
          "Tienes los ojos rojos. ¿Has estado llorando?"
        ]
      },
      {
        "en": "I've been running.",
        "es": "estuve corriendo",
        "imagen": "Persona sudada y respirando fuerte con ropa deportiva",
        "ejemplo": [
          "I'm tired because I've been running.",
          "Estoy cansado porque estuve corriendo."
        ]
      },
      {
        "en": "They've been arguing.",
        "es": "han estado discutiendo",
        "imagen": "Pareja con caras serias sentados lejos en el sofá",
        "ejemplo": [
          "They've been arguing all morning.",
          "Han estado discutiendo toda la mañana."
        ]
      },
      {
        "en": "She's been feeling sick.",
        "es": "ella se ha sentido mal",
        "imagen": "Mujer recostada con una mano en el estómago",
        "ejemplo": [
          "She's been feeling sick since yesterday.",
          "Se siente mal desde ayer."
        ]
      },
      {
        "en": "I've been cooking all day.",
        "es": "me la he pasado cocinando todo el día",
        "imagen": "Cocina llena de ollas y platos preparados para una fiesta",
        "ejemplo": [
          "I've been cooking all day for the party.",
          "Me la he pasado cocinando todo el día para la fiesta."
        ]
      },
      {
        "en": "We've been saving money.",
        "es": "hemos estado ahorrando",
        "imagen": "Frasco de vidrio lleno de monedas con una etiqueta de viaje, sin texto",
        "ejemplo": [
          "We've been saving money for our trip.",
          "Hemos estado ahorrando para nuestro viaje."
        ]
      },
      {
        "en": "He's been training for months.",
        "es": "él lleva meses entrenando",
        "imagen": "Boxeador entrenando en un gimnasio",
        "ejemplo": [
          "He's been training for the fight for months.",
          "Lleva meses entrenando para la pelea."
        ]
      },
      {
        "en": "What have you been doing?",
        "es": "¿qué has estado haciendo?",
        "imagen": "Amigos reencontrándose y abrazándose en la calle",
        "ejemplo": [
          "Hi! What have you been doing lately?",
          "¡Hola! ¿Qué has hecho últimamente?"
        ]
      }
    ],
    "grupos": [
      {
        "id": "evidencia",
        "titulo": "¿Por qué estás así?",
        "icono": "🔍",
        "patron": [
          "You look tired.",
          "Have you been…?",
          "I've been…"
        ],
        "palabras": [
          {
            "en": "You're covered in paint!",
            "es": "¡estás lleno de pintura!",
            "imagen": "Persona con manchas de pintura en la cara y la ropa",
            "ejemplo": [
              "You're covered in paint! Yes, I've been painting the kitchen.",
              "¡Estás lleno de pintura! Sí, estuve pintando la cocina."
            ]
          },
          {
            "en": "Your hands are dirty.",
            "es": "tienes las manos sucias",
            "imagen": "Manos con tierra junto a macetas en un jardín",
            "ejemplo": [
              "Your hands are dirty. I've been working in the garden.",
              "Tienes las manos sucias. Estuve trabajando en el jardín."
            ]
          },
          {
            "en": "You're out of breath.",
            "es": "estás sin aliento",
            "imagen": "Persona apoyada en las rodillas recuperando el aliento",
            "ejemplo": [
              "You're out of breath! I've been running for the bus.",
              "¡Estás sin aliento! Estuve corriendo por el camión."
            ]
          },
          {
            "en": "The ground is wet.",
            "es": "el suelo está mojado",
            "imagen": "Banqueta mojada con charcos después de la lluvia",
            "ejemplo": [
              "The ground is wet. It's been raining.",
              "El suelo está mojado. Ha estado lloviendo."
            ]
          },
          {
            "en": "You smell of smoke.",
            "es": "hueles a humo",
            "imagen": "Persona junto a una parrilla con humo en el jardín",
            "ejemplo": [
              "You smell of smoke. We've been having a barbecue.",
              "Hueles a humo. Hemos estado haciendo carne asada."
            ]
          },
          {
            "en": "You look tired.",
            "es": "te ves cansado",
            "imagen": "Persona bostezando en la oficina",
            "ejemplo": [
              "You look tired. I've been working late all week.",
              "Te ves cansado. He estado trabajando hasta tarde toda la semana."
            ]
          }
        ]
      },
      {
        "id": "ultimamente",
        "titulo": "Últimamente",
        "icono": "📆",
        "patron": [
          "lately",
          "recently",
          "all week"
        ],
        "palabras": [
          {
            "en": "lately",
            "es": "últimamente",
            "imagen": "Persona pensativa mirando por la ventana",
            "ejemplo": [
              "I've been feeling stressed lately.",
              "Últimamente me he sentido estresado."
            ]
          },
          {
            "en": "recently",
            "es": "recientemente",
            "imagen": "Persona usando una caminadora nueva en casa",
            "ejemplo": [
              "I've been exercising more recently.",
              "Recientemente he estado haciendo más ejercicio."
            ]
          },
          {
            "en": "all week",
            "es": "toda la semana",
            "imagen": "Calendario con todos los días tachados",
            "ejemplo": [
              "It's been snowing all week.",
              "Ha estado nevando toda la semana."
            ]
          },
          {
            "en": "all morning",
            "es": "toda la mañana",
            "imagen": "Persona en el teléfono con una pila de papeles",
            "ejemplo": [
              "I've been on the phone all morning.",
              "Me la he pasado en el teléfono toda la mañana."
            ]
          },
          {
            "en": "these days",
            "es": "estos días",
            "imagen": "Persona leyendo un libro en el metro",
            "ejemplo": [
              "What are you reading these days?",
              "¿Qué estás leyendo estos días?"
            ]
          },
          {
            "en": "for a while",
            "es": "desde hace un rato",
            "imagen": "Persona esperando en la sala con una revista",
            "ejemplo": [
              "I've been sitting here for a while.",
              "Llevo un rato sentado aquí."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I've been waiting for you for an hour!",
        "es": "¡Llevo una hora esperándote!"
      },
      {
        "en": "It's been raining all day, so we stayed home.",
        "es": "Ha llovido todo el día, así que nos quedamos en casa."
      },
      {
        "en": "How long have you been learning English?",
        "es": "¿Cuánto tiempo llevas aprendiendo inglés?"
      },
      {
        "en": "I haven't been sleeping well recently.",
        "es": "Últimamente no he dormido bien."
      },
      {
        "en": "Your eyes are red. Have you been crying?",
        "es": "Tienes los ojos rojos. ¿Has estado llorando?"
      },
      {
        "en": "You're out of breath! I've been running for the bus.",
        "es": "¡Estás sin aliento! Estuve corriendo por el camión."
      },
      {
        "en": "We've been looking for a house for months.",
        "es": "Llevamos meses buscando casa."
      },
      {
        "en": "Hi! What have you been doing lately?",
        "es": "¡Hola! ¿Qué has hecho últimamente?"
      },
      {
        "en": "I've read three books this month.",
        "es": "Este mes he leído tres libros.",
        "imagen": "Tres libros apilados junto a una taza de té"
      },
      {
        "en": "I've been feeling stressed lately.",
        "es": "Últimamente me he sentido estresado."
      }
    ],
    "frases": [
      {
        "en": "I've been trying to call you all afternoon, but your phone has been off.",
        "es": "Toda la tarde he estado tratando de llamarte, pero tu celular ha estado apagado.",
        "imagen": "Persona frustrada marcando una y otra vez en su celular"
      },
      {
        "en": "We've been living in this apartment for two years, and we've been very happy here.",
        "es": "Llevamos dos años viviendo en este departamento y hemos sido muy felices aquí.",
        "imagen": "Pareja feliz en la sala de su departamento"
      },
      {
        "en": "My neighbor has been building a wall since May, and the noise is terrible.",
        "es": "Mi vecino está construyendo una barda desde mayo y el ruido es terrible.",
        "imagen": "Albañil construyendo una barda de ladrillos con polvo"
      },
      {
        "en": "Sorry I'm late! Have you been waiting long? Only ten minutes, don't worry.",
        "es": "¡Perdón por la tardanza! ¿Llevas mucho esperando? Solo diez minutos, no te preocupes.",
        "imagen": "Amiga llegando apurada a un café donde la esperan"
      },
      {
        "en": "She's been working at the hospital for twenty years, and she's never missed a day.",
        "es": "Lleva veinte años trabajando en el hospital y nunca ha faltado un día.",
        "imagen": "Enfermera con experiencia sonriendo en un pasillo de hospital"
      },
      {
        "en": "I've been learning to cook Thai food, and I've made three dishes so far.",
        "es": "He estado aprendiendo a cocinar comida tailandesa y hasta ahora he hecho tres platillos.",
        "imagen": "Persona cocinando un curry tailandés con ingredientes coloridos"
      },
      {
        "en": "The kids are dirty because they've been playing in the mud all morning.",
        "es": "Los niños están sucios porque se han pasado toda la mañana jugando en el lodo.",
        "imagen": "Niños llenos de lodo riéndose en el jardín"
      },
      {
        "en": "My back hurts because I've been sitting at the computer all day.",
        "es": "Me duele la espalda porque he estado sentado en la computadora todo el día.",
        "imagen": "Persona estirando la espalda frente a la computadora"
      },
      {
        "en": "They've been planning their wedding for a year, and it's next Saturday!",
        "es": "Llevan un año planeando su boda ¡y es el próximo sábado!",
        "imagen": "Pareja revisando detalles de su boda con muestras de flores"
      },
      {
        "en": "How long has it been snowing? Since last night. The roads are closed.",
        "es": "¿Desde cuándo está nevando? Desde anoche. Los caminos están cerrados.",
        "imagen": "Carretera cubierta de nieve con una barrera"
      }
    ],
    "listening": [
      {
        "audio": "I've been waiting at the bus stop for forty minutes, and no bus has come.",
        "pregunta": "¿Cuánto tiempo lleva esperando?",
        "opciones": [
          "Cuarenta minutos",
          "Catorce minutos",
          "Cuatro minutos",
          "Una hora"
        ]
      },
      {
        "audio": "Why are you so tired? I've been helping my brother move all day.",
        "pregunta": "¿Por qué está cansado?",
        "opciones": [
          "Ayudó a su hermano a mudarse",
          "Trabajó mucho",
          "Corrió un maratón",
          "No durmió"
        ]
      },
      {
        "audio": "We've been learning French for six months, and we can have simple conversations now.",
        "pregunta": "¿Qué pueden hacer ahora?",
        "opciones": [
          "Tener conversaciones sencillas",
          "Hablar con fluidez",
          "Leer libros difíciles",
          "Nada todavía"
        ]
      },
      {
        "audio": "It's been snowing since Monday, so the schools have been closed.",
        "pregunta": "¿Por qué cerraron las escuelas?",
        "opciones": [
          "Nieva desde el lunes",
          "Es día festivo",
          "Hay una huelga",
          "Hace mucho calor"
        ]
      },
      {
        "audio": "Have you been exercising? You look great! Yes, I've been swimming every morning.",
        "pregunta": "¿Qué ejercicio hace?",
        "opciones": [
          "Natación",
          "Correr",
          "Yoga",
          "Bicicleta"
        ]
      }
    ],
    "lectura": {
      "titulo": "Catching up",
      "texto": "Hi Laura! Sorry I haven't written for so long. I've been really busy lately. I've been working on a big project at the office, and I've been staying until nine almost every night. On weekends I've been helping my parents, because my dad has been having problems with his back. He's been going to physical therapy twice a week, and he's been feeling a little better. The good news is that I've been taking guitar lessons since March! I've learned five songs so far. My teacher says I've been improving fast. And you? What have you been doing? Have you been traveling? I've been looking at your photos from Peru, and they're amazing. Let's have coffee soon! Love, Mónica.",
      "preguntas": [
        {
          "pregunta": "¿Por qué ha estado ocupada Mónica?",
          "opciones": [
            "Por un proyecto grande en la oficina",
            "Por un viaje",
            "Por la universidad",
            "Por una mudanza"
          ]
        },
        {
          "pregunta": "¿Qué problema tiene su papá?",
          "opciones": [
            "De la espalda",
            "Del corazón",
            "De la rodilla",
            "De la vista"
          ]
        },
        {
          "pregunta": "¿Desde cuándo toma clases de guitarra?",
          "opciones": [
            "Desde marzo",
            "Desde hace cinco años",
            "Desde enero",
            "Desde ayer"
          ]
        },
        {
          "pregunta": "¿Dónde estuvo Laura?",
          "opciones": [
            "En Perú",
            "En España",
            "En Canadá",
            "En Oaxaca"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con el presente perfecto continuo.",
        "pregunta": "I ___ (wait) for two hours.",
        "respuestas": [
          "have been waiting",
          "'ve been waiting"
        ]
      },
      {
        "instruccion": "Completa con el presente perfecto continuo.",
        "pregunta": "It ___ (rain) since this morning.",
        "respuestas": [
          "has been raining",
          "'s been raining"
        ]
      },
      {
        "instruccion": "Completa con el presente perfecto continuo.",
        "pregunta": "They ___ (work) all day.",
        "respuestas": [
          "have been working",
          "'ve been working"
        ]
      },
      {
        "instruccion": "Completa la pregunta.",
        "pregunta": "How long have you ___ learning English?",
        "respuestas": [
          "been"
        ]
      },
      {
        "instruccion": "Escribe en negativo.",
        "pregunta": "I've been sleeping well. → I ___ sleeping well.",
        "respuestas": [
          "haven't been",
          "have not been"
        ]
      },
      {
        "instruccion": "Elige: simple o continuo.",
        "pregunta": "I ___ (read) four books this month.",
        "respuestas": [
          "have read",
          "'ve read"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Llevo una hora esperando.",
        "respuestas": [
          "I've been waiting for an hour",
          "I have been waiting for an hour"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Qué has estado haciendo?",
        "respuestas": [
          "What have you been doing"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Últimamente he estado trabajando mucho.",
        "respuestas": [
          "I've been working a lot lately",
          "I have been working a lot lately",
          "Lately I've been working a lot",
          "I've been working a lot recently"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I've been knowing her for years.",
        "respuestas": [
          "I've known her for years",
          "I have known her for years"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "I've ___ waiting for you since six!",
        "opciones": [
          "been",
          "being",
          "be",
          "was"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "It ___ raining all morning.",
        "opciones": [
          "has been",
          "have been",
          "is been",
          "was been"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "How long ___ you been living here?",
        "opciones": [
          "have",
          "has",
          "are",
          "did"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "You're wet! What ___?",
        "opciones": [
          "have you been doing",
          "you have done",
          "do you do",
          "have you being done"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I ___ him since 2010.",
        "opciones": [
          "have known",
          "have been knowing",
          "am knowing",
          "know"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Llevo dos años estudiando inglés» =",
        "opciones": [
          "I've been studying English for two years.",
          "I study English since two years.",
          "I'm studying English two years ago.",
          "I studied English for two years ago."
        ]
      },
      {
        "tipo": "listening",
        "audio": "My computer has been making a strange noise since yesterday.",
        "pregunta": "¿Desde cuándo hace ruido la computadora?",
        "opciones": [
          "Desde ayer",
          "Desde hace una semana",
          "Desde esta mañana",
          "Desde hace un mes"
        ]
      },
      {
        "tipo": "listening",
        "audio": "We've been driving for six hours, and we still haven't arrived.",
        "pregunta": "¿Cuánto tiempo llevan manejando?",
        "opciones": [
          "Seis horas",
          "Dos horas",
          "Dieciséis horas",
          "Una hora"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Ha estado lloviendo.",
        "respuestas": [
          "It's been raining",
          "It has been raining"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¿Cuánto tiempo llevas esperando?",
        "respuestas": [
          "How long have you been waiting"
        ]
      }
    ]
  },
  {
    "id": "b1-05",
    "num": 5,
    "titulo": "Pasado perfecto",
    "contexto": "Malentendidos e historias",
    "explicacion": {
      "es": [
        "El **pasado perfecto** (*had* + participio) habla de algo que pasó **antes** de otro momento del pasado. Es el «pasado del pasado»: *When I arrived, the movie **had** already **started**.* (Cuando llegué, la película ya había empezado.)",
        "Es **igual para todas las personas**: *I had gone, she had gone, they had gone.* Se contrae ***I'd, she'd, we'd***. Negativo: ***hadn't***: *I **hadn't eaten** all day.*",
        "Sirve para **explicar** lo que pasó en una historia: *She was angry because I **had forgotten** her birthday.* *I didn't recognize him because he **had changed** a lot.*",
        "Palabras que lo acompañan: ***already, just, never… before, by the time*** (para cuando), ***after, before, because***. *By the time we got there, everybody **had left**.*"
      ],
      "tabla": {
        "columnas": [
          "Primero (pasado perfecto)",
          "Después (pasado simple)"
        ],
        "filas": [
          [
            "The train had left",
            "when we got to the station."
          ],
          [
            "I had never seen snow",
            "before I went to Canada."
          ],
          [
            "She had lost her keys,",
            "so she couldn't open the door."
          ],
          [
            "After they had eaten,",
            "they went for a walk."
          ]
        ]
      },
      "ojo": [
        "Compara: *When I arrived, she **left*** (se fue cuando llegué) / *When I arrived, she **had left*** (ya se había ido antes).",
        "Si el orden ya es claro con ***before*** o ***after***, se puede usar pasado simple: *After I **finished**, I went home* también es correcto.",
        "*I'd* puede ser ***I had*** o ***I would***. Si sigue un participio es *had*: *I'd **seen** it* = *I had seen it*.",
        "***Had had*** existe: *I **had had** a terrible day* (había tenido un día terrible).",
        "Para malentendidos: *I **thought** you **had said** Tuesday!* (¡Pensé que habías dicho martes!)"
      ],
      "en": [
        "The past perfect is for something that happened before another moment in the past: When I arrived, the movie had already started.",
        "It is had plus the participle for everyone: I had gone, she had gone.",
        "It explains a story: She was angry because I had forgotten her birthday.",
        "By the time we got there, everybody had left."
      ]
    },
    "vocabulario": [
      {
        "en": "The movie had already started.",
        "es": "la película ya había empezado",
        "imagen": "Persona entrando a una sala de cine oscura con la película avanzada",
        "ejemplo": [
          "When we arrived, the movie had already started.",
          "Cuando llegamos, la película ya había empezado."
        ]
      },
      {
        "en": "I had forgotten my wallet.",
        "es": "había olvidado mi cartera",
        "imagen": "Persona apenada en la caja revisando sus bolsillos vacíos",
        "ejemplo": [
          "I couldn't pay because I had forgotten my wallet.",
          "No pude pagar porque había olvidado mi cartera."
        ]
      },
      {
        "en": "She had never flown before.",
        "es": "ella nunca había volado",
        "imagen": "Mujer nerviosa en su asiento de avión agarrando el descansabrazos",
        "ejemplo": [
          "She was nervous because she had never flown before.",
          "Estaba nerviosa porque nunca había volado."
        ]
      },
      {
        "en": "They had left.",
        "es": "ya se habían ido",
        "imagen": "Sala de fiestas vacía con globos y confeti en el piso",
        "ejemplo": [
          "By the time I got there, everybody had left.",
          "Para cuando llegué, todos se habían ido."
        ]
      },
      {
        "en": "He had lost his keys.",
        "es": "él había perdido sus llaves",
        "imagen": "Hombre sentado en la escalera de su casa de noche sin poder entrar",
        "ejemplo": [
          "He couldn't get in because he had lost his keys.",
          "No pudo entrar porque había perdido sus llaves."
        ]
      },
      {
        "en": "I hadn't eaten all day.",
        "es": "no había comido en todo el día",
        "imagen": "Persona devorando un plato de comida con mucha hambre",
        "ejemplo": [
          "I was starving because I hadn't eaten all day.",
          "Me moría de hambre porque no había comido en todo el día."
        ]
      },
      {
        "en": "We had just sat down.",
        "es": "nos acabábamos de sentar",
        "imagen": "Familia recién sentada a la mesa cuando suena el timbre",
        "ejemplo": [
          "We had just sat down to eat when the doorbell rang.",
          "Nos acabábamos de sentar a comer cuando sonó el timbre."
        ]
      },
      {
        "en": "He had changed a lot.",
        "es": "él había cambiado mucho",
        "imagen": "Hombre con barba y canas frente a una foto suya de joven",
        "ejemplo": [
          "I didn't recognize him. He had changed a lot.",
          "No lo reconocí. Había cambiado mucho."
        ]
      },
      {
        "en": "I thought you had said Tuesday.",
        "es": "pensé que habías dicho martes",
        "imagen": "Persona confundida mirando un calendario con su amigo",
        "ejemplo": [
          "Sorry! I thought you had said Tuesday.",
          "¡Perdón! Pensé que habías dicho martes."
        ]
      },
      {
        "en": "The shop had closed.",
        "es": "la tienda ya había cerrado",
        "imagen": "Tienda con la cortina abajo y una persona decepcionada",
        "ejemplo": [
          "We arrived at nine, but the shop had closed.",
          "Llegamos a las nueve, pero la tienda ya había cerrado."
        ]
      },
      {
        "en": "She had already eaten.",
        "es": "ella ya había comido",
        "imagen": "Plato vacío y una persona satisfecha en la mesa",
        "ejemplo": [
          "She didn't want pizza because she had already eaten.",
          "No quiso pizza porque ya había comido."
        ]
      },
      {
        "en": "It had stopped raining.",
        "es": "había dejado de llover",
        "imagen": "Calle mojada con el sol saliendo entre las nubes",
        "ejemplo": [
          "When we left, it had stopped raining.",
          "Cuando salimos, ya había dejado de llover."
        ]
      },
      {
        "en": "I had met her before.",
        "es": "ya la conocía de antes",
        "imagen": "Dos personas reconociéndose con sorpresa en una fiesta",
        "ejemplo": [
          "I knew her face. I had met her before.",
          "Conocía su cara. Ya la había visto antes."
        ]
      },
      {
        "en": "They had sold all the tickets.",
        "es": "habían vendido todos los boletos",
        "imagen": "Taquilla cerrada con gente decepcionada en la fila",
        "ejemplo": [
          "They had sold all the tickets, so we went home.",
          "Habían vendido todos los boletos, así que nos fuimos a casa."
        ]
      },
      {
        "en": "He had misunderstood.",
        "es": "él había entendido mal",
        "imagen": "Persona con cara de confusión leyendo un mensaje",
        "ejemplo": [
          "He had misunderstood the message.",
          "Había entendido mal el mensaje."
        ]
      },
      {
        "en": "I'd never seen anything like it.",
        "es": "nunca había visto algo así",
        "imagen": "Persona asombrada frente a una aurora boreal",
        "ejemplo": [
          "It was amazing. I'd never seen anything like it.",
          "Fue increíble. Nunca había visto algo así."
        ]
      }
    ],
    "grupos": [
      {
        "id": "malentendidos",
        "titulo": "Malentendidos",
        "icono": "😅",
        "patron": [
          "I thought you had…",
          "I hadn't realized…",
          "There must be a mistake."
        ],
        "palabras": [
          {
            "en": "I hadn't realized.",
            "es": "no me había dado cuenta",
            "imagen": "Persona llevándose la mano a la frente",
            "ejemplo": [
              "Sorry, I hadn't realized it was so late.",
              "Perdón, no me había dado cuenta de que era tan tarde."
            ]
          },
          {
            "en": "I misunderstood.",
            "es": "entendí mal",
            "imagen": "Persona apenada mostrando un mensaje a su amiga",
            "ejemplo": [
              "I'm sorry, I misunderstood.",
              "Lo siento, entendí mal."
            ]
          },
          {
            "en": "I got the wrong day.",
            "es": "me equivoqué de día",
            "imagen": "Persona sola en un restaurante vacío con un ramo de flores",
            "ejemplo": [
              "I got the wrong day. The dinner was yesterday!",
              "Me equivoqué de día. ¡La cena era ayer!"
            ]
          },
          {
            "en": "It was a misunderstanding.",
            "es": "fue un malentendido",
            "imagen": "Dos amigos riéndose después de aclarar una confusión",
            "ejemplo": [
              "Don't worry, it was just a misunderstanding.",
              "No te preocupes, solo fue un malentendido."
            ]
          },
          {
            "en": "I thought you meant…",
            "es": "pensé que te referías a…",
            "imagen": "Persona señalando un objeto equivocado en la tienda",
            "ejemplo": [
              "I thought you meant the blue one!",
              "¡Pensé que te referías al azul!"
            ]
          },
          {
            "en": "Nobody had told me.",
            "es": "nadie me había dicho",
            "imagen": "Persona sorprendida en una oficina vacía un día festivo",
            "ejemplo": [
              "Nobody had told me that the office was closed.",
              "Nadie me había dicho que la oficina estaba cerrada."
            ]
          }
        ]
      },
      {
        "id": "historia",
        "titulo": "Contar historias",
        "icono": "📚",
        "patron": [
          "By the time…",
          "Before that…",
          "It turned out that…"
        ],
        "palabras": [
          {
            "en": "by the time",
            "es": "para cuando",
            "imagen": "Corredor llegando a la meta cuando ya todos se fueron",
            "ejemplo": [
              "By the time the police arrived, the thief had escaped.",
              "Para cuando llegó la policía, el ladrón ya se había escapado."
            ]
          },
          {
            "en": "it turned out that",
            "es": "resultó que",
            "imagen": "Persona sorprendida al abrir una caja",
            "ejemplo": [
              "It turned out that she had planned a surprise party.",
              "Resultó que ella había planeado una fiesta sorpresa."
            ]
          },
          {
            "en": "earlier that day",
            "es": "más temprano ese día",
            "imagen": "Reloj de pared marcando la mañana",
            "ejemplo": [
              "Earlier that day, I had lost my phone.",
              "Más temprano ese día, había perdido mi celular."
            ]
          },
          {
            "en": "the day before",
            "es": "el día anterior",
            "imagen": "Calendario con el día anterior marcado",
            "ejemplo": [
              "The day before, it had snowed a lot.",
              "El día anterior había nevado mucho."
            ]
          },
          {
            "en": "as soon as",
            "es": "en cuanto",
            "imagen": "Persona saliendo corriendo de la oficina al sonar la hora",
            "ejemplo": [
              "As soon as he had finished, he went home.",
              "En cuanto terminó, se fue a casa."
            ]
          },
          {
            "en": "for the first time",
            "es": "por primera vez",
            "imagen": "Niño viendo el mar por primera vez con asombro",
            "ejemplo": [
              "I saw the sea for the first time. I had never seen it before.",
              "Vi el mar por primera vez. Nunca lo había visto."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "When we arrived, the movie had already started.",
        "es": "Cuando llegamos, la película ya había empezado."
      },
      {
        "en": "She was nervous because she had never flown before.",
        "es": "Estaba nerviosa porque nunca había volado."
      },
      {
        "en": "By the time I got there, everybody had left.",
        "es": "Para cuando llegué, todos se habían ido."
      },
      {
        "en": "I didn't recognize him. He had changed a lot.",
        "es": "No lo reconocí. Había cambiado mucho."
      },
      {
        "en": "Sorry! I thought you had said Tuesday.",
        "es": "¡Perdón! Pensé que habías dicho martes."
      },
      {
        "en": "We had just sat down to eat when the doorbell rang.",
        "es": "Nos acabábamos de sentar a comer cuando sonó el timbre."
      },
      {
        "en": "Don't worry, it was just a misunderstanding.",
        "es": "No te preocupes, solo fue un malentendido."
      },
      {
        "en": "It turned out that she had planned a surprise party.",
        "es": "Resultó que ella había planeado una fiesta sorpresa."
      },
      {
        "en": "I was starving because I hadn't eaten all day.",
        "es": "Me moría de hambre porque no había comido en todo el día."
      },
      {
        "en": "It was amazing. I'd never seen anything like it.",
        "es": "Fue increíble. Nunca había visto algo así."
      }
    ],
    "frases": [
      {
        "en": "When I got to the airport, I realized I had left my passport at home.",
        "es": "Cuando llegué al aeropuerto, me di cuenta de que había dejado mi pasaporte en casa.",
        "imagen": "Viajero desesperado revisando su mochila en el aeropuerto"
      },
      {
        "en": "She was angry with me because I had forgotten our anniversary.",
        "es": "Estaba enojada conmigo porque había olvidado nuestro aniversario.",
        "imagen": "Mujer con los brazos cruzados frente a un calendario con un corazón"
      },
      {
        "en": "By the time the firefighters arrived, the neighbors had already put out the fire.",
        "es": "Para cuando llegaron los bomberos, los vecinos ya habían apagado el fuego.",
        "imagen": "Vecinos con cubetas junto a una casa con humo y bomberos llegando"
      },
      {
        "en": "I had never eaten mole before I moved to Puebla, and now I love it.",
        "es": "Nunca había comido mole antes de mudarme a Puebla y ahora me encanta.",
        "imagen": "Plato de mole poblano con arroz en una mesa"
      },
      {
        "en": "We went to the restaurant, but it had closed for good.",
        "es": "Fuimos al restaurante, pero había cerrado para siempre.",
        "imagen": "Restaurante abandonado con las ventanas cubiertas"
      },
      {
        "en": "He failed the exam because he hadn't studied at all.",
        "es": "Reprobó el examen porque no había estudiado nada.",
        "imagen": "Estudiante preocupado mirando su examen reprobado"
      },
      {
        "en": "It turned out that the package had gone to the wrong address.",
        "es": "Resultó que el paquete había ido a la dirección equivocada.",
        "imagen": "Repartidor entregando un paquete en la casa equivocada"
      },
      {
        "en": "I thought the meeting was at ten, but it had started at nine!",
        "es": "¡Pensé que la junta era a las diez, pero había empezado a las nueve!",
        "imagen": "Persona entrando apurada a una sala de juntas ya llena"
      },
      {
        "en": "After she had finished her degree, she traveled around Asia for a year.",
        "es": "Después de terminar su carrera, viajó por Asia un año.",
        "imagen": "Mochilera frente a un templo en el sudeste asiático"
      },
      {
        "en": "My grandmother told me that she had met my grandfather at a dance in 1960.",
        "es": "Mi abuela me contó que había conocido a mi abuelo en un baile en 1960.",
        "imagen": "Foto antigua de una pareja joven bailando"
      }
    ],
    "listening": [
      {
        "audio": "When I got home, I saw that someone had opened the window.",
        "pregunta": "¿Qué había pasado?",
        "opciones": [
          "Alguien había abierto la ventana",
          "Alguien había cerrado la puerta",
          "Se había ido la luz",
          "Había entrado un gato"
        ]
      },
      {
        "audio": "I didn't go to the party because nobody had invited me.",
        "pregunta": "¿Por qué no fue a la fiesta?",
        "opciones": [
          "Nadie lo había invitado",
          "Estaba enfermo",
          "Tenía que trabajar",
          "Se le olvidó"
        ]
      },
      {
        "audio": "By the time we arrived at the stadium, the game had already finished.",
        "pregunta": "¿Qué pasó cuando llegaron?",
        "opciones": [
          "El partido ya había terminado",
          "El partido estaba empezando",
          "No había boletos",
          "Estaba lloviendo"
        ]
      },
      {
        "audio": "She was so happy. She had waited for that letter for three months.",
        "pregunta": "¿Cuánto tiempo había esperado la carta?",
        "opciones": [
          "Tres meses",
          "Tres semanas",
          "Tres días",
          "Un año"
        ]
      },
      {
        "audio": "I thought you had bought the bread! No, I thought you had bought it!",
        "pregunta": "¿Cuál es el problema?",
        "opciones": [
          "Nadie compró el pan",
          "Compraron dos panes",
          "El pan estaba duro",
          "La panadería cerró"
        ]
      }
    ],
    "lectura": {
      "titulo": "The wrong wedding",
      "texto": "Last Saturday my cousin Andrés had a very strange day. He had received an invitation to his friend Carlos's wedding, and he had bought a new suit for the occasion. He arrived at the church at four o'clock, sat down, and waited. The bride arrived, and everybody stood up. But when Andrés looked at the groom, he got a surprise: it wasn't Carlos! He had gone to the wrong church. There were two churches with the same name in the city, and he hadn't checked the address. He left quietly and took a taxi to the other church, but by the time he arrived, the ceremony had finished. Luckily, Carlos laughed when Andrés told him the story. At the party, Carlos said: You're the only person who has been to two weddings in one afternoon!",
      "preguntas": [
        {
          "pregunta": "¿Qué había comprado Andrés?",
          "opciones": [
            "Un traje nuevo",
            "Un regalo caro",
            "Boletos de avión",
            "Flores"
          ]
        },
        {
          "pregunta": "¿Cuál fue el error de Andrés?",
          "opciones": [
            "Fue a la iglesia equivocada",
            "Se equivocó de día",
            "Llegó muy tarde",
            "Olvidó la invitación"
          ]
        },
        {
          "pregunta": "¿Por qué pasó el error?",
          "opciones": [
            "Había dos iglesias con el mismo nombre",
            "El taxista se perdió",
            "La invitación estaba mal",
            "Carlos cambió la iglesia"
          ]
        },
        {
          "pregunta": "¿Cómo reaccionó Carlos?",
          "opciones": [
            "Se rió",
            "Se enojó",
            "No le habló",
            "Lloró"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con el pasado perfecto.",
        "pregunta": "When I arrived, the bus ___ (leave).",
        "respuestas": [
          "had left",
          "had already left"
        ]
      },
      {
        "instruccion": "Completa con el pasado perfecto.",
        "pregunta": "She was tired because she ___ (not sleep).",
        "respuestas": [
          "hadn't slept",
          "had not slept"
        ]
      },
      {
        "instruccion": "Completa con el pasado perfecto.",
        "pregunta": "I ___ (never see) snow before.",
        "respuestas": [
          "had never seen",
          "'d never seen"
        ]
      },
      {
        "instruccion": "Completa con el pasado perfecto.",
        "pregunta": "By the time we got there, they ___ (eat) everything.",
        "respuestas": [
          "had eaten"
        ]
      },
      {
        "instruccion": "Completa con had o hadn't.",
        "pregunta": "I couldn't pay because I ___ brought any money.",
        "respuestas": [
          "hadn't",
          "had not"
        ]
      },
      {
        "instruccion": "Escribe el participio.",
        "pregunta": "forget → ___",
        "respuestas": [
          "forgotten"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Ya se habían ido.",
        "respuestas": [
          "They had already left",
          "They'd already left",
          "They had already gone",
          "They had left"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Nunca había visto algo así.",
        "respuestas": [
          "I had never seen anything like it",
          "I'd never seen anything like it",
          "I had never seen anything like that",
          "I'd never seen anything like that"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Pensé que habías dicho martes.",
        "respuestas": [
          "I thought you had said Tuesday",
          "I thought you'd said Tuesday",
          "I thought you said Tuesday"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "When I arrived, the class has already started.",
        "respuestas": [
          "When I arrived, the class had already started",
          "When I arrived the class had already started"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "When I got to the station, the train ___.",
        "opciones": [
          "had left",
          "has left",
          "have left",
          "leaves"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I was hungry because I ___ breakfast.",
        "opciones": [
          "hadn't had",
          "haven't had",
          "didn't had",
          "hadn't have"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She ___ never been to Europe before that trip.",
        "opciones": [
          "had",
          "has",
          "was",
          "did"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "By the time the doctor came, the pain ___.",
        "opciones": [
          "had gone",
          "has gone",
          "goes",
          "had went"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«When I arrived, she had left» significa:",
        "opciones": [
          "Ella se fue antes de que yo llegara",
          "Ella se fue cuando llegué",
          "Ella llegó después",
          "Llegamos juntos"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«I'd seen it» es:",
        "opciones": [
          "I had seen it",
          "I would seen it",
          "I did seen it",
          "I have seen it"
        ]
      },
      {
        "tipo": "listening",
        "audio": "When I opened the fridge, I saw that my roommate had eaten my cake.",
        "pregunta": "¿Qué había hecho el compañero?",
        "opciones": [
          "Se había comido su pastel",
          "Había limpiado el refrigerador",
          "Había comprado un pastel",
          "Había cocinado"
        ]
      },
      {
        "tipo": "listening",
        "audio": "We couldn't check in because we hadn't printed the tickets.",
        "pregunta": "¿Por qué no pudieron documentar?",
        "opciones": [
          "No habían impreso los boletos",
          "Llegaron tarde",
          "Perdieron el pasaporte",
          "El vuelo se canceló"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: La tienda ya había cerrado.",
        "respuestas": [
          "The shop had already closed",
          "The store had already closed",
          "The shop had closed",
          "The store had closed"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: No había comido.",
        "respuestas": [
          "I hadn't eaten",
          "I had not eaten"
        ]
      }
    ]
  },
  {
    "id": "b1-06",
    "num": 6,
    "titulo": "Used to (hábitos pasados)",
    "contexto": "Cómo era la vida antes",
    "explicacion": {
      "es": [
        "***Used to*** + verbo base habla de **hábitos o situaciones del pasado que ya no son así**: *I **used to** play soccer every day.* (Antes jugaba fútbol todos los días; ya no.) Equivale al **copretérito** del español: *jugaba, vivía, tenía*.",
        "Es igual para todas las personas: *I used to, she used to, they used to.* Sirve para **acciones repetidas** (*We used to go to the beach every summer*) y para **estados** (*There used to be a cinema here*).",
        "**Negativo:** ***didn't use to*** (sin *-d*): *I **didn't use to** like vegetables.* **Pregunta:** ***Did** you **use to**…?*: ***Did** you **use to** have long hair?*",
        "Para hábitos del **presente** no se usa *used to*: se usa ***usually***: *I **usually** get up at seven.* Y ***be used to*** (estar acostumbrado) es otra cosa: *I'm used to the cold.*"
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
            "used to + verbo",
            "I used to live in Puebla."
          ],
          [
            "Negativo",
            "didn't use to + verbo",
            "She didn't use to drink coffee."
          ],
          [
            "Pregunta",
            "Did … use to + verbo?",
            "Did you use to walk to school?"
          ],
          [
            "Estados",
            "There used to be…",
            "There used to be a park here."
          ]
        ]
      },
      "ojo": [
        "En negativo y pregunta es ***use to*** (sin *d*): *I didn't **use** to* ✅, no *I didn't used to* ❌.",
        "*Used to* **solo existe en pasado**. Para el presente: *I **usually** walk* ✅, no *I use to walk* ❌.",
        "Para una sola vez o fecha exacta usa el pasado simple: *I **went** to Acapulco **in 1999*** (no *used to*).",
        "*Used to* se pronuncia **«iústu»**, con *s* suave, no «iuzd tu».",
        "***Would*** también sirve para acciones repetidas en historias: *Every Sunday my grandma **would** make tamales.* (pero no para estados)."
      ],
      "en": [
        "Used to talks about past habits and situations that are not true now: I used to play soccer every day.",
        "There used to be a cinema here.",
        "Negative: I didn't use to like vegetables. Question: Did you use to have long hair?",
        "For present habits, use usually: I usually get up at seven."
      ]
    },
    "vocabulario": [
      {
        "en": "I used to play soccer.",
        "es": "jugaba fútbol",
        "imagen": "Niño pateando un balón en una calle de tierra",
        "ejemplo": [
          "I used to play soccer every afternoon.",
          "Jugaba fútbol todas las tardes."
        ]
      },
      {
        "en": "We used to live in a small town.",
        "es": "vivíamos en un pueblo",
        "imagen": "Pueblo pequeño con casas de adobe y una iglesia",
        "ejemplo": [
          "We used to live in a small town in Zacatecas.",
          "Vivíamos en un pueblito de Zacatecas."
        ]
      },
      {
        "en": "She used to have long hair.",
        "es": "ella tenía el pelo largo",
        "imagen": "Foto antigua de una joven con el pelo muy largo",
        "ejemplo": [
          "My mom used to have very long hair.",
          "Mi mamá tenía el pelo muy largo."
        ]
      },
      {
        "en": "There used to be a cinema here.",
        "es": "aquí había un cine",
        "imagen": "Edificio viejo de un cine antiguo ahora cerrado",
        "ejemplo": [
          "There used to be a cinema on this corner.",
          "En esta esquina había un cine."
        ]
      },
      {
        "en": "I didn't use to like vegetables.",
        "es": "antes no me gustaban las verduras",
        "imagen": "Niño haciendo cara de asco frente a un plato de brócoli",
        "ejemplo": [
          "I didn't use to like vegetables, but now I love them.",
          "Antes no me gustaban las verduras, pero ahora me encantan."
        ]
      },
      {
        "en": "Did you use to walk to school?",
        "es": "¿caminabas a la escuela?",
        "imagen": "Niños con uniforme caminando por un camino de pueblo",
        "ejemplo": [
          "Did you use to walk to school?",
          "¿Caminabas a la escuela?"
        ]
      },
      {
        "en": "People used to write letters.",
        "es": "la gente escribía cartas",
        "imagen": "Cartas antiguas atadas con un listón y una pluma",
        "ejemplo": [
          "People used to write letters to their families.",
          "La gente escribía cartas a sus familias."
        ]
      },
      {
        "en": "We used to watch TV together.",
        "es": "veíamos la tele juntos",
        "imagen": "Familia de los años ochenta frente a una tele antigua",
        "ejemplo": [
          "We used to watch soap operas together.",
          "Veíamos telenovelas juntos."
        ]
      },
      {
        "en": "He used to smoke.",
        "es": "él fumaba",
        "imagen": "Cenicero antiguo junto a un periódico viejo",
        "ejemplo": [
          "My grandpa used to smoke, but he quit.",
          "Mi abuelo fumaba, pero lo dejó."
        ]
      },
      {
        "en": "Things used to be cheaper.",
        "es": "las cosas eran más baratas",
        "imagen": "Monedas antiguas junto a un ticket viejo",
        "ejemplo": [
          "Things used to be much cheaper.",
          "Las cosas eran mucho más baratas."
        ]
      },
      {
        "en": "I used to be shy.",
        "es": "era tímido",
        "imagen": "Niña escondida detrás de su mamá en una fiesta",
        "ejemplo": [
          "I used to be very shy, but now I love talking.",
          "Era muy tímida, pero ahora me encanta platicar."
        ]
      },
      {
        "en": "We used to play in the street.",
        "es": "jugábamos en la calle",
        "imagen": "Niños jugando a las canicas en la calle",
        "ejemplo": [
          "We used to play in the street until dark.",
          "Jugábamos en la calle hasta que oscurecía."
        ]
      },
      {
        "en": "She used to work in a factory.",
        "es": "ella trabajaba en una fábrica",
        "imagen": "Obreras trabajando en una fábrica textil antigua",
        "ejemplo": [
          "My grandmother used to work in a textile factory.",
          "Mi abuela trabajaba en una fábrica textil."
        ]
      },
      {
        "en": "There didn't use to be so much traffic.",
        "es": "antes no había tanto tráfico",
        "imagen": "Avenida casi vacía en una foto antigua",
        "ejemplo": [
          "There didn't use to be so much traffic.",
          "Antes no había tanto tráfico."
        ]
      },
      {
        "en": "I used to listen to cassettes.",
        "es": "escuchaba casetes",
        "imagen": "Casete y walkman antiguos sobre una mesa",
        "ejemplo": [
          "I used to listen to cassettes on my walkman.",
          "Escuchaba casetes en mi walkman."
        ]
      },
      {
        "en": "We used to go to the beach every summer.",
        "es": "íbamos a la playa cada verano",
        "imagen": "Familia en una playa con sombrilla en una foto antigua",
        "ejemplo": [
          "We used to go to Acapulco every summer.",
          "Íbamos a Acapulco cada verano."
        ]
      }
    ],
    "grupos": [
      {
        "id": "antes",
        "titulo": "Antes y ahora",
        "icono": "⏪",
        "patron": [
          "I used to…, but now I…",
          "…didn't use to…",
          "Now we…"
        ],
        "palabras": [
          {
            "en": "I used to take the bus, but now I drive.",
            "es": "antes tomaba el camión, ahora manejo",
            "imagen": "Persona manejando su carro junto a un camión",
            "ejemplo": [
              "I used to take the bus, but now I drive to work.",
              "Antes tomaba el camión, pero ahora manejo al trabajo."
            ]
          },
          {
            "en": "We used to pay in cash.",
            "es": "pagábamos en efectivo",
            "imagen": "Mano entregando billetes en una tienda antigua",
            "ejemplo": [
              "We used to pay in cash. Now everybody uses cards.",
              "Pagábamos en efectivo. Ahora todos usan tarjeta."
            ]
          },
          {
            "en": "People used to read newspapers.",
            "es": "la gente leía el periódico",
            "imagen": "Señor leyendo un periódico en una banca",
            "ejemplo": [
              "People used to read newspapers. Now they read the news on their phones.",
              "La gente leía el periódico. Ahora lee las noticias en el celular."
            ]
          },
          {
            "en": "Kids used to play outside more.",
            "es": "los niños jugaban más afuera",
            "imagen": "Niños en bicicleta por la calle de una colonia",
            "ejemplo": [
              "Kids used to play outside more.",
              "Los niños jugaban más afuera."
            ]
          },
          {
            "en": "We didn't use to have the internet.",
            "es": "no teníamos internet",
            "imagen": "Familia buscando en una enciclopedia de papel",
            "ejemplo": [
              "We didn't use to have the internet at home.",
              "No teníamos internet en casa."
            ]
          },
          {
            "en": "I used to hate running.",
            "es": "odiaba correr",
            "imagen": "Persona feliz terminando una carrera",
            "ejemplo": [
              "I used to hate running. Now I run every morning.",
              "Odiaba correr. Ahora corro todas las mañanas."
            ]
          }
        ]
      },
      {
        "id": "infancia",
        "titulo": "Recuerdos de infancia",
        "icono": "🧒",
        "patron": [
          "When I was a kid, I used to…",
          "My grandma would…",
          "Every Sunday we…"
        ],
        "palabras": [
          {
            "en": "climb trees",
            "es": "subirme a los árboles",
            "imagen": "Niño subido en la rama de un árbol de mango",
            "ejemplo": [
              "When I was a kid, I used to climb trees.",
              "De niño me subía a los árboles."
            ]
          },
          {
            "en": "collect stickers",
            "es": "coleccionar estampas",
            "imagen": "Álbum de estampas de fútbol abierto",
            "ejemplo": [
              "I used to collect soccer stickers.",
              "Coleccionaba estampas de fútbol."
            ]
          },
          {
            "en": "visit my grandparents",
            "es": "visitar a mis abuelos",
            "imagen": "Niños corriendo a abrazar a sus abuelos en el rancho",
            "ejemplo": [
              "We used to visit my grandparents every Sunday.",
              "Visitábamos a mis abuelos cada domingo."
            ]
          },
          {
            "en": "make tamales",
            "es": "hacer tamales",
            "imagen": "Abuela y nietos preparando tamales en la cocina",
            "ejemplo": [
              "My grandma would make tamales every Christmas.",
              "Mi abuela hacía tamales cada Navidad."
            ]
          },
          {
            "en": "ride my bike",
            "es": "andar en bici",
            "imagen": "Niña en bicicleta con canasta por una calle empedrada",
            "ejemplo": [
              "I used to ride my bike to my friend's house.",
              "Iba en bici a casa de mi amiga."
            ]
          },
          {
            "en": "be afraid of the dark",
            "es": "tener miedo a la oscuridad",
            "imagen": "Niño escondido bajo la cobija con una linterna",
            "ejemplo": [
              "I used to be afraid of the dark.",
              "Me daba miedo la oscuridad."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I used to play soccer every afternoon.",
        "es": "Jugaba fútbol todas las tardes."
      },
      {
        "en": "There used to be a cinema on this corner.",
        "es": "En esta esquina había un cine."
      },
      {
        "en": "I didn't use to like vegetables, but now I love them.",
        "es": "Antes no me gustaban las verduras, pero ahora me encantan."
      },
      {
        "en": "Did you use to walk to school?",
        "es": "¿Caminabas a la escuela?"
      },
      {
        "en": "My grandpa used to smoke, but he quit.",
        "es": "Mi abuelo fumaba, pero lo dejó."
      },
      {
        "en": "We used to go to Acapulco every summer.",
        "es": "Íbamos a Acapulco cada verano."
      },
      {
        "en": "I used to take the bus, but now I drive to work.",
        "es": "Antes tomaba el camión, pero ahora manejo al trabajo."
      },
      {
        "en": "My grandma would make tamales every Christmas.",
        "es": "Mi abuela hacía tamales cada Navidad."
      },
      {
        "en": "I usually get up at seven.",
        "es": "Normalmente me levanto a las siete.",
        "imagen": "Persona apagando el despertador a las siete de la mañana"
      },
      {
        "en": "I used to be afraid of the dark.",
        "es": "Me daba miedo la oscuridad."
      }
    ],
    "frases": [
      {
        "en": "When I was a child, we used to live near the sea, and I used to swim every afternoon.",
        "es": "De niño vivíamos cerca del mar y nadaba todas las tardes.",
        "imagen": "Niño nadando en el mar al atardecer cerca de un pueblo costero"
      },
      {
        "en": "My parents didn't use to have a car, so we used to travel everywhere by bus.",
        "es": "Mis papás no tenían carro, así que viajábamos a todos lados en camión.",
        "imagen": "Familia subiendo a un autobús antiguo con maletas"
      },
      {
        "en": "There used to be a big market in the square, but now there's a parking lot.",
        "es": "En la plaza había un mercado grande, pero ahora hay un estacionamiento.",
        "imagen": "Plaza con un estacionamiento donde antes había un mercado"
      },
      {
        "en": "Did you use to have a nickname at school? Yes, they used to call me Shorty.",
        "es": "¿Tenías un apodo en la escuela? Sí, me decían Chaparro.",
        "imagen": "Niños riendo en el patio de una escuela"
      },
      {
        "en": "People used to spend more time talking and less time looking at their phones.",
        "es": "La gente pasaba más tiempo platicando y menos viendo el celular.",
        "imagen": "Grupo de personas platicando en una banca sin celulares"
      },
      {
        "en": "I used to work twelve hours a day, but I changed jobs because I never saw my kids.",
        "es": "Trabajaba doce horas al día, pero cambié de trabajo porque nunca veía a mis hijos.",
        "imagen": "Papá jugando con sus hijos en el parque en la tarde"
      },
      {
        "en": "Every Sunday my grandfather would take us to the park and buy us ice cream.",
        "es": "Cada domingo mi abuelo nos llevaba al parque y nos compraba helado.",
        "imagen": "Abuelo con sus nietos comiendo helado en un parque"
      },
      {
        "en": "This neighborhood used to be very quiet, but now there are bars everywhere.",
        "es": "Esta colonia era muy tranquila, pero ahora hay bares por todos lados.",
        "imagen": "Calle con bares iluminados y gente de noche"
      },
      {
        "en": "I didn't use to drink coffee, but since I started working, I can't live without it.",
        "es": "Antes no tomaba café, pero desde que empecé a trabajar no puedo vivir sin él.",
        "imagen": "Persona con una taza de café grande en la oficina"
      },
      {
        "en": "We used to send photos by mail, and we had to wait weeks to see them.",
        "es": "Mandábamos fotos por correo y teníamos que esperar semanas para verlas.",
        "imagen": "Sobre con fotos impresas y estampillas antiguas"
      }
    ],
    "listening": [
      {
        "audio": "I used to work in a bank, but now I have my own coffee shop.",
        "pregunta": "¿Dónde trabajaba antes?",
        "opciones": [
          "En un banco",
          "En una cafetería",
          "En una escuela",
          "En una tienda"
        ]
      },
      {
        "audio": "There used to be a big tree in front of my house, but they cut it down last year.",
        "pregunta": "¿Qué pasó con el árbol?",
        "opciones": [
          "Lo cortaron el año pasado",
          "Sigue ahí",
          "Se cayó en una tormenta",
          "Lo movieron"
        ]
      },
      {
        "audio": "My father didn't use to cook, but since he retired he cooks every day.",
        "pregunta": "¿Desde cuándo cocina el papá?",
        "opciones": [
          "Desde que se jubiló",
          "Desde niño",
          "Desde que se casó",
          "Nunca cocina"
        ]
      },
      {
        "audio": "Did you use to wear glasses? Yes, until I had an eye operation.",
        "pregunta": "¿Por qué ya no usa lentes?",
        "opciones": [
          "Se operó los ojos",
          "Usa lentes de contacto",
          "Nunca los usó",
          "Los perdió"
        ]
      },
      {
        "audio": "When we were kids, we used to spend every summer at my uncle's ranch.",
        "pregunta": "¿Dónde pasaban los veranos?",
        "opciones": [
          "En el rancho de su tío",
          "En la playa",
          "En la ciudad",
          "En casa de sus abuelos"
        ]
      }
    ],
    "lectura": {
      "titulo": "My grandmother's town",
      "texto": "My grandmother, Doña Chela, often tells us how life used to be in her town in Michoacán. There didn't use to be electricity in the houses, so people used to go to bed very early and get up with the sun. Her family used to have chickens, two cows, and a small corn field. Every morning, she used to walk to the river to get water, and in the afternoons she would help her mother make tortillas by hand. There was only one school, and the teacher used to come from another town on a horse. On Sundays, the whole town would meet in the square after church. Young men used to walk in one direction and young women in the other, and that's how she met my grandfather. Life was harder, she says, but people used to be more patient.",
      "preguntas": [
        {
          "pregunta": "¿Por qué la gente se dormía temprano?",
          "opciones": [
            "No había electricidad",
            "Trabajaban mucho",
            "Hacía frío",
            "Era la costumbre de la iglesia"
          ]
        },
        {
          "pregunta": "¿Para qué iba al río cada mañana?",
          "opciones": [
            "Por agua",
            "A lavar ropa",
            "A nadar",
            "A pescar"
          ]
        },
        {
          "pregunta": "¿Cómo llegaba el maestro?",
          "opciones": [
            "A caballo",
            "En camión",
            "Caminando",
            "En bicicleta"
          ]
        },
        {
          "pregunta": "¿Dónde conoció a su esposo?",
          "opciones": [
            "En la plaza los domingos",
            "En la escuela",
            "En el río",
            "En una fiesta"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con used to o didn't use to.",
        "pregunta": "I ___ like coffee, but now I drink three cups a day.",
        "respuestas": [
          "didn't use to",
          "did not use to"
        ]
      },
      {
        "instruccion": "Completa con used to.",
        "pregunta": "We ___ live in Tijuana.",
        "respuestas": [
          "used to"
        ]
      },
      {
        "instruccion": "Completa la pregunta.",
        "pregunta": "Did you ___ to play an instrument?",
        "respuestas": [
          "use"
        ]
      },
      {
        "instruccion": "Completa con used to o usually.",
        "pregunta": "Now I ___ go to the gym after work.",
        "respuestas": [
          "usually"
        ]
      },
      {
        "instruccion": "Completa con used to + be.",
        "pregunta": "There ___ a park here.",
        "respuestas": [
          "used to be"
        ]
      },
      {
        "instruccion": "Completa con el verbo.",
        "pregunta": "My dad used to ___ (wear) a hat every day.",
        "respuestas": [
          "wear"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Vivíamos en un pueblo.",
        "respuestas": [
          "We used to live in a town",
          "We used to live in a small town",
          "We used to live in a village"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Antes no me gustaba leer.",
        "respuestas": [
          "I didn't use to like reading",
          "I didn't use to like to read",
          "I did not use to like reading"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Tenías el pelo largo?",
        "respuestas": [
          "Did you use to have long hair"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I use to walk to work every day.",
        "respuestas": [
          "I usually walk to work every day",
          "I used to walk to work every day"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "When I was young, I ___ play the piano.",
        "opciones": [
          "used to",
          "use to",
          "was used to",
          "usually"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She ___ like spicy food, but now she loves it.",
        "opciones": [
          "didn't use to",
          "didn't used to",
          "doesn't use to",
          "not used to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ you use to live near here?",
        "opciones": [
          "Did",
          "Do",
          "Were",
          "Used"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "There ___ a bakery on this street.",
        "opciones": [
          "used to be",
          "used to have",
          "use to be",
          "was used"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Hábito del presente: I ___ have breakfast at eight.",
        "opciones": [
          "usually",
          "used to",
          "use to",
          "am used"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«I used to smoke» significa:",
        "opciones": [
          "Antes fumaba, ya no",
          "Estoy acostumbrado a fumar",
          "Fumo normalmente",
          "Fumé una vez"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I used to hate math at school, but now I'm an accountant!",
        "pregunta": "¿A qué se dedica ahora?",
        "opciones": [
          "Es contador",
          "Es maestro",
          "Es ingeniero",
          "Es estudiante"
        ]
      },
      {
        "tipo": "listening",
        "audio": "My neighborhood used to be full of trees, but now there are only buildings.",
        "pregunta": "¿Qué hay ahora en su colonia?",
        "opciones": [
          "Solo edificios",
          "Muchos árboles",
          "Un parque",
          "Casas antiguas"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Aquí había un cine.",
        "respuestas": [
          "There used to be a cinema here",
          "There used to be a movie theater here",
          "There was a cinema here"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Jugábamos en la calle.",
        "respuestas": [
          "We used to play in the street"
        ]
      }
    ]
  },
  {
    "id": "b1-07",
    "num": 7,
    "titulo": "Formas del futuro: repaso (will, going to, presente continuo)",
    "contexto": "Viajes y eventos",
    "explicacion": {
      "es": [
        "En inglés hay varias formas de hablar del futuro y cada una tiene su uso. ***Going to*** = **plan o intención** ya decidida: *We**'re going to visit** Peru next year.* También predicción con **evidencia**: *Look at the sky. It**'s going to rain**.*",
        "***Presente continuo*** = **plan acordado** con fecha, hora o boleto: *I**'m flying** to Cancun on Friday. We**'re meeting** the guide at nine.*",
        "***Will*** = **decisión del momento**, **predicción** (opinión) y **ofertas o promesas**: *I'm cold. I**'ll close** the window. I think it **will be** a great festival. I**'ll help** you with your bags.*",
        "***Presente simple*** = **horarios** fijos de transporte, eventos y programas: *The flight **leaves** at 6:40. The concert **starts** at nine. The museum **opens** at ten.*"
      ],
      "tabla": {
        "columnas": [
          "Forma",
          "Uso",
          "Ejemplo"
        ],
        "filas": [
          [
            "going to",
            "plan / intención",
            "I'm going to learn to surf."
          ],
          [
            "presente continuo",
            "cita o plan acordado",
            "We're staying with friends in Lima."
          ],
          [
            "will",
            "decisión del momento / predicción / oferta",
            "I'll take the window seat."
          ],
          [
            "presente simple",
            "horario",
            "The train arrives at 4:15."
          ],
          [
            "going to (evidencia)",
            "lo que se ve venir",
            "Hurry! We're going to miss the bus!"
          ]
        ]
      },
      "ojo": [
        "Decisión **en el momento**: *A: We don't have milk. B: Oh, I**'ll buy** some.* Si ya lo **habías decidido**: *I know. I**'m going to buy** some later.*",
        "Horarios con presente simple, no con *will*: *The bus **leaves** at 8* ✅ (más natural que *will leave*).",
        "En muchos casos *going to* y el presente continuo son intercambiables: *I'm going to see / I'm seeing the doctor tomorrow.*",
        "***Will*** con ***probably, definitely, I think, I'm sure***: *It'll **probably** be crowded.*",
        "Para eventos programados se usa también ***be due to*** (está previsto): *The plane **is due to** land at noon.*"
      ],
      "en": [
        "Going to is for plans and intentions: We're going to visit Peru next year.",
        "The present continuous is for arrangements: I'm flying to Cancun on Friday.",
        "Will is for decisions now, predictions and offers: I'll help you with your bags.",
        "The present simple is for timetables: The flight leaves at six forty."
      ]
    },
    "vocabulario": [
      {
        "en": "We're going to visit Peru.",
        "es": "vamos a visitar Perú",
        "imagen": "Pareja planeando un viaje con un mapa de Sudamérica",
        "ejemplo": [
          "We're going to visit Peru next year.",
          "El próximo año vamos a visitar Perú."
        ]
      },
      {
        "en": "I'm flying to Cancun on Friday.",
        "es": "vuelo a Cancún el viernes",
        "imagen": "Pasajera documentando su maleta en el aeropuerto",
        "ejemplo": [
          "I'm flying to Cancun on Friday morning.",
          "El viernes en la mañana vuelo a Cancún."
        ]
      },
      {
        "en": "The flight leaves at six.",
        "es": "el vuelo sale a las seis",
        "imagen": "Pantalla de salidas en el aeropuerto con un avión despegando",
        "ejemplo": [
          "Our flight leaves at six in the morning.",
          "Nuestro vuelo sale a las seis de la mañana."
        ]
      },
      {
        "en": "I'll carry your suitcase.",
        "es": "yo te cargo la maleta",
        "imagen": "Joven cargando la maleta de una señora en la escalera",
        "ejemplo": [
          "Don't worry, I'll carry your suitcase.",
          "No te preocupes, yo te cargo la maleta."
        ]
      },
      {
        "en": "It's going to be crowded.",
        "es": "va a haber mucha gente",
        "imagen": "Fila enorme de personas en la entrada de un festival",
        "ejemplo": [
          "Let's go early. It's going to be crowded.",
          "Vámonos temprano. Va a haber mucha gente."
        ]
      },
      {
        "en": "The festival starts at noon.",
        "es": "el festival empieza al mediodía",
        "imagen": "Escenario al aire libre con público esperando",
        "ejemplo": [
          "The music festival starts at noon.",
          "El festival de música empieza al mediodía."
        ]
      },
      {
        "en": "We're staying with friends.",
        "es": "nos vamos a quedar con amigos",
        "imagen": "Amigos recibiendo a viajeros en la puerta de su casa",
        "ejemplo": [
          "We're staying with friends in Lima.",
          "Nos vamos a quedar con amigos en Lima."
        ]
      },
      {
        "en": "I think you'll love it.",
        "es": "creo que te va a encantar",
        "imagen": "Amiga mostrando fotos de un lugar bonito en su celular",
        "ejemplo": [
          "Go to Oaxaca. I think you'll love it.",
          "Ve a Oaxaca. Creo que te va a encantar."
        ]
      },
      {
        "en": "I'll have the window seat.",
        "es": "me quedo con la ventana",
        "imagen": "Pasajero sentándose junto a la ventana del avión",
        "ejemplo": [
          "Can I choose? I'll have the window seat.",
          "¿Puedo elegir? Me quedo con la ventana."
        ]
      },
      {
        "en": "We're going to miss the train!",
        "es": "¡vamos a perder el tren!",
        "imagen": "Viajeros corriendo por el andén mientras el tren cierra puertas",
        "ejemplo": [
          "Hurry up! We're going to miss the train!",
          "¡Apúrate! ¡Vamos a perder el tren!"
        ]
      },
      {
        "en": "The museum opens at ten.",
        "es": "el museo abre a las diez",
        "imagen": "Visitantes esperando frente a la puerta de un museo",
        "ejemplo": [
          "The museum opens at ten on Sundays.",
          "Los domingos el museo abre a las diez."
        ]
      },
      {
        "en": "I'm meeting the guide at nine.",
        "es": "veo al guía a las nueve",
        "imagen": "Guía de turistas saludando a un grupo en la plaza",
        "ejemplo": [
          "We're meeting the guide at nine in the main square.",
          "Vemos al guía a las nueve en la plaza principal."
        ]
      },
      {
        "en": "It'll probably rain.",
        "es": "probablemente lloverá",
        "imagen": "Nubes grises sobre unas montañas",
        "ejemplo": [
          "Take a raincoat. It'll probably rain in the mountains.",
          "Lleva impermeable. Probablemente llueva en las montañas."
        ]
      },
      {
        "en": "Are you coming to the wedding?",
        "es": "¿vas a venir a la boda?",
        "imagen": "Invitación de boda elegante sobre una mesa, sin texto",
        "ejemplo": [
          "Are you coming to the wedding in June?",
          "¿Vas a venir a la boda en junio?"
        ]
      },
      {
        "en": "I'm going to rent a car.",
        "es": "voy a rentar un carro",
        "imagen": "Persona recibiendo las llaves en un mostrador de renta de autos",
        "ejemplo": [
          "I'm going to rent a car at the airport.",
          "Voy a rentar un carro en el aeropuerto."
        ]
      },
      {
        "en": "The plane is due to land at noon.",
        "es": "está previsto que el avión aterrice a mediodía",
        "imagen": "Avión aterrizando en una pista con cielo despejado",
        "ejemplo": [
          "The plane is due to land at noon.",
          "Está previsto que el avión aterrice a mediodía."
        ]
      }
    ],
    "grupos": [
      {
        "id": "viaje",
        "titulo": "Preparar un viaje",
        "icono": "🧳",
        "patron": [
          "book a flight",
          "pack my suitcase",
          "check in"
        ],
        "palabras": [
          {
            "en": "book a flight",
            "es": "reservar un vuelo",
            "imagen": "Persona reservando un vuelo en su laptop",
            "ejemplo": [
              "I'm going to book a flight tonight.",
              "Hoy en la noche voy a reservar un vuelo."
            ]
          },
          {
            "en": "pack my suitcase",
            "es": "hacer la maleta",
            "imagen": "Maleta abierta sobre la cama con ropa doblada",
            "ejemplo": [
              "I'll pack my suitcase tomorrow.",
              "Mañana hago la maleta."
            ]
          },
          {
            "en": "check in",
            "es": "documentar / registrarse",
            "imagen": "Pasajeros en el mostrador de documentación del aeropuerto",
            "ejemplo": [
              "We have to check in two hours before the flight.",
              "Tenemos que documentar dos horas antes del vuelo."
            ]
          },
          {
            "en": "a boarding pass",
            "es": "un pase de abordar",
            "imagen": "Celular mostrando un pase de abordar con código, sin texto legible",
            "ejemplo": [
              "Have your boarding pass ready.",
              "Ten listo tu pase de abordar."
            ]
          },
          {
            "en": "a delay",
            "es": "un retraso",
            "imagen": "Pasajeros cansados esperando en una sala del aeropuerto",
            "ejemplo": [
              "There's a two-hour delay.",
              "Hay un retraso de dos horas."
            ]
          },
          {
            "en": "travel insurance",
            "es": "seguro de viaje",
            "imagen": "Persona revisando documentos de viaje con un pasaporte",
            "ejemplo": [
              "Don't forget to buy travel insurance.",
              "No olvides comprar seguro de viaje."
            ]
          },
          {
            "en": "an itinerary",
            "es": "un itinerario",
            "imagen": "Libreta con un plan de viaje dibujado y un mapa",
            "ejemplo": [
              "Here's our itinerary for the week.",
              "Aquí está nuestro itinerario de la semana."
            ]
          },
          {
            "en": "a round trip",
            "es": "un viaje redondo",
            "imagen": "Dos boletos de avión cruzados sobre un mapa",
            "ejemplo": [
              "A round trip to Bogotá costs about eight thousand pesos.",
              "Un viaje redondo a Bogotá cuesta como ocho mil pesos."
            ]
          }
        ]
      },
      {
        "id": "eventos",
        "titulo": "Eventos",
        "icono": "🎉",
        "patron": [
          "The concert starts at…",
          "Are you going to…?",
          "I'll see you there!"
        ],
        "palabras": [
          {
            "en": "a concert",
            "es": "un concierto",
            "imagen": "Público con luces de colores frente a un escenario",
            "ejemplo": [
              "The concert starts at nine.",
              "El concierto empieza a las nueve."
            ]
          },
          {
            "en": "a festival",
            "es": "un festival",
            "imagen": "Gente bailando en un festival al aire libre",
            "ejemplo": [
              "We're going to a food festival on Saturday.",
              "El sábado vamos a un festival de comida."
            ]
          },
          {
            "en": "a conference",
            "es": "una conferencia",
            "imagen": "Auditorio lleno escuchando a una ponente",
            "ejemplo": [
              "I'm giving a talk at a conference in May.",
              "En mayo voy a dar una plática en una conferencia."
            ]
          },
          {
            "en": "a trade fair",
            "es": "una feria comercial",
            "imagen": "Pasillos con estands de empresas y visitantes",
            "ejemplo": [
              "The trade fair opens on Monday.",
              "La feria comercial abre el lunes."
            ]
          },
          {
            "en": "the opening ceremony",
            "es": "la ceremonia de inauguración",
            "imagen": "Fuegos artificiales sobre un estadio",
            "ejemplo": [
              "The opening ceremony begins at eight.",
              "La ceremonia de inauguración empieza a las ocho."
            ]
          },
          {
            "en": "I'll see you there!",
            "es": "¡nos vemos ahí!",
            "imagen": "Amigos despidiéndose con la mano emocionados",
            "ejemplo": [
              "Great! I'll see you there!",
              "¡Perfecto! ¡Nos vemos ahí!"
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "We're going to visit Peru next year.",
        "es": "El próximo año vamos a visitar Perú."
      },
      {
        "en": "I'm flying to Cancun on Friday morning.",
        "es": "El viernes en la mañana vuelo a Cancún."
      },
      {
        "en": "Our flight leaves at six in the morning.",
        "es": "Nuestro vuelo sale a las seis de la mañana."
      },
      {
        "en": "Don't worry, I'll carry your suitcase.",
        "es": "No te preocupes, yo te cargo la maleta."
      },
      {
        "en": "Hurry up! We're going to miss the train!",
        "es": "¡Apúrate! ¡Vamos a perder el tren!"
      },
      {
        "en": "Go to Oaxaca. I think you'll love it.",
        "es": "Ve a Oaxaca. Creo que te va a encantar."
      },
      {
        "en": "We're staying with friends in Lima.",
        "es": "Nos vamos a quedar con amigos en Lima."
      },
      {
        "en": "There's a two-hour delay.",
        "es": "Hay un retraso de dos horas."
      },
      {
        "en": "The concert starts at nine.",
        "es": "El concierto empieza a las nueve."
      },
      {
        "en": "We don't have any milk. Oh, I'll buy some.",
        "es": "No hay leche. Ah, yo compro.",
        "imagen": "Persona tomando sus llaves para ir a la tienda"
      }
    ],
    "frases": [
      {
        "en": "We're going to travel around Colombia for two weeks, and we're starting in Cartagena.",
        "es": "Vamos a recorrer Colombia dos semanas y empezamos en Cartagena.",
        "imagen": "Calle colorida de Cartagena con balcones y flores"
      },
      {
        "en": "Our bus leaves at eleven at night, so we'll arrive in Oaxaca early in the morning.",
        "es": "Nuestro camión sale a las once de la noche, así que llegaremos a Oaxaca temprano.",
        "imagen": "Autobús de noche en una carretera con luces"
      },
      {
        "en": "I'm meeting my cousins at the airport, and then we're driving to the coast together.",
        "es": "Voy a ver a mis primos en el aeropuerto y luego manejamos juntos a la costa.",
        "imagen": "Primos abrazándose en la sala de llegadas del aeropuerto"
      },
      {
        "en": "The weather forecast says it'll be sunny, but I'm going to take an umbrella just in case.",
        "es": "El pronóstico dice que hará sol, pero voy a llevar un paraguas por si acaso.",
        "imagen": "Persona metiendo un paraguas en su mochila de viaje"
      },
      {
        "en": "Are you coming to the festival? Yes! I've already bought the tickets.",
        "es": "¿Vas a venir al festival? ¡Sí! Ya compré los boletos.",
        "imagen": "Amigos mostrando boletos para un festival"
      },
      {
        "en": "The conference begins on Monday at nine, and I'm giving my talk on Tuesday afternoon.",
        "es": "La conferencia empieza el lunes a las nueve y yo doy mi plática el martes en la tarde.",
        "imagen": "Ponente preparándose detrás del escenario con su laptop"
      },
      {
        "en": "That suitcase looks heavy. I'll help you put it in the car.",
        "es": "Esa maleta se ve pesada. Te ayudo a meterla al carro.",
        "imagen": "Persona ayudando a subir una maleta a la cajuela"
      },
      {
        "en": "I'm sure you'll have a great time in Spain. Send me lots of photos!",
        "es": "Seguro que te la vas a pasar increíble en España. ¡Mándame muchas fotos!",
        "imagen": "Amigas despidiéndose en el aeropuerto con un abrazo"
      },
      {
        "en": "We're not going to stay in the city. We're renting a small house near the beach.",
        "es": "No nos vamos a quedar en la ciudad. Vamos a rentar una casita cerca de la playa.",
        "imagen": "Casita de playa con hamaca y palmeras"
      },
      {
        "en": "The train to Chihuahua is due to leave at six, but it's going to be late.",
        "es": "Está previsto que el tren a Chihuahua salga a las seis, pero va a llegar tarde.",
        "imagen": "Tren turístico en una estación de montaña"
      }
    ],
    "listening": [
      {
        "audio": "Our flight leaves at seven forty, so we need to be at the airport by five thirty.",
        "pregunta": "¿A qué hora sale el vuelo?",
        "opciones": [
          "A las siete cuarenta",
          "A las cinco y media",
          "A las siete y cuarto",
          "A las cuatro cuarenta"
        ]
      },
      {
        "audio": "We're going to stay in Mexico City for three days, and then we're taking a bus to Puebla.",
        "pregunta": "¿Cómo van a Puebla?",
        "opciones": [
          "En autobús",
          "En avión",
          "En carro",
          "En tren"
        ]
      },
      {
        "audio": "Oh no, I've forgotten my charger! Don't worry, I'll lend you mine.",
        "pregunta": "¿Qué ofrece la otra persona?",
        "opciones": [
          "Prestarle su cargador",
          "Comprar uno",
          "Regresar a casa",
          "Usar su celular"
        ]
      },
      {
        "audio": "Look at all those people! It's going to take hours to get in.",
        "pregunta": "¿Qué cree que va a pasar?",
        "opciones": [
          "Van a tardar horas en entrar",
          "No van a poder entrar",
          "Va a llover",
          "El evento se cancela"
        ]
      },
      {
        "audio": "I'm having dinner with my clients on Thursday, so I can't come to the party.",
        "pregunta": "¿Por qué no puede ir a la fiesta?",
        "opciones": [
          "Cena con clientes el jueves",
          "Está de viaje",
          "Está enfermo",
          "Tiene clase"
        ]
      }
    ],
    "lectura": {
      "titulo": "Plans for the long weekend",
      "texto": "This long weekend, Valeria and her friends are going to visit Guanajuato for the first time. They've already booked a small house in the center for three nights. Their bus leaves Mexico City on Friday at seven in the morning and arrives at about noon. On Friday afternoon they're meeting a local guide, Don Ramiro, who is going to show them the famous tunnels and the Callejón del Beso. On Saturday there's a music festival, and the main concert starts at nine at night. Valeria thinks it'll be crowded, so they're going to arrive early. On Sunday they're going to visit the mummy museum, but her friend Pablo says: I'm not going in there! I'll wait for you at a café. They're coming back on Monday afternoon, tired but happy, they hope.",
      "preguntas": [
        {
          "pregunta": "¿A qué hora sale el camión?",
          "opciones": [
            "A las siete de la mañana",
            "Al mediodía",
            "A las nueve",
            "A las tres"
          ]
        },
        {
          "pregunta": "¿Con quién se van a ver el viernes?",
          "opciones": [
            "Con un guía local",
            "Con unos primos",
            "Con un músico",
            "Con el dueño de la casa"
          ]
        },
        {
          "pregunta": "¿Por qué van a llegar temprano al concierto?",
          "opciones": [
            "Cree que habrá mucha gente",
            "Quieren comprar boletos",
            "El concierto empieza temprano",
            "Tienen que trabajar"
          ]
        },
        {
          "pregunta": "¿Qué va a hacer Pablo el domingo?",
          "opciones": [
            "Esperar en un café",
            "Entrar al museo",
            "Regresar a casa",
            "Ir al festival"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Elige la forma del futuro.",
        "pregunta": "The train ___ (leave) at 8:15 every day.",
        "respuestas": [
          "leaves"
        ]
      },
      {
        "instruccion": "Elige la forma del futuro.",
        "pregunta": "It's hot in here. I ___ (open) the window.",
        "respuestas": [
          "'ll open",
          "will open"
        ]
      },
      {
        "instruccion": "Elige la forma del futuro.",
        "pregunta": "Look out! You ___ (fall)!",
        "respuestas": [
          "'re going to fall",
          "are going to fall"
        ]
      },
      {
        "instruccion": "Elige la forma del futuro.",
        "pregunta": "We ___ (meet) the guide at nine tomorrow. (cita acordada)",
        "respuestas": [
          "'re meeting",
          "are meeting"
        ]
      },
      {
        "instruccion": "Completa con will o going to.",
        "pregunta": "I think it ___ be a great trip.",
        "respuestas": [
          "will",
          "'ll"
        ]
      },
      {
        "instruccion": "Completa con will o going to.",
        "pregunta": "We've decided. We're ___ buy a new car.",
        "respuestas": [
          "going to"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "El vuelo sale a las seis.",
        "respuestas": [
          "The flight leaves at six",
          "The flight leaves at 6"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Yo te ayudo.",
        "respuestas": [
          "I'll help you",
          "I will help you"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Vamos a visitar Perú.",
        "respuestas": [
          "We're going to visit Peru",
          "We are going to visit Peru",
          "We're visiting Peru",
          "We are visiting Peru"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "Wait, I'm going to help you! (decisión del momento)",
        "respuestas": [
          "Wait, I'll help you",
          "Wait, I will help you",
          "Wait I'll help you"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "The concert ___ at nine o'clock.",
        "opciones": [
          "starts",
          "will starting",
          "is going start",
          "start"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "A: The phone is ringing. B: I ___ answer it.",
        "opciones": [
          "'ll",
          "'m going to",
          "am",
          "answer"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Look at those clouds! It ___ rain.",
        "opciones": [
          "'s going to",
          "will to",
          "rains",
          "is raining to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I ___ my grandmother on Sunday. It's all arranged.",
        "opciones": [
          "'m visiting",
          "visit",
          "'ll visiting",
          "visited"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I'm sure you ___ pass the exam.",
        "opciones": [
          "will",
          "are",
          "going to",
          "do"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We ___ to Spain next summer. We've already decided.",
        "opciones": [
          "'re going to travel",
          "will to travel",
          "travel",
          "traveled"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The museum closes at five, so we'll go in the morning.",
        "pregunta": "¿A qué hora cierra el museo?",
        "opciones": [
          "A las cinco",
          "A las nueve",
          "Al mediodía",
          "A las siete"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Are you driving to Querétaro? No, I'm taking the bus. It's cheaper.",
        "pregunta": "¿Cómo va a Querétaro?",
        "opciones": [
          "En camión",
          "En carro",
          "En avión",
          "En tren"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Va a haber mucha gente.",
        "respuestas": [
          "It's going to be crowded",
          "It is going to be crowded",
          "There are going to be a lot of people",
          "It will be crowded"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¡Nos vemos ahí!",
        "respuestas": [
          "I'll see you there",
          "See you there"
        ]
      }
    ]
  },
  {
    "id": "b1-08",
    "num": 8,
    "titulo": "Oraciones de tiempo en futuro (when, as soon as, until, before)",
    "contexto": "Planes para después de estudiar",
    "explicacion": {
      "es": [
        "Cuando hablamos del futuro con ***when, as soon as, until, before, after***, la parte que va con esa palabra va en **presente**, ¡no en *will*!: *I'll call you **when** I **get** home.* (Te llamo cuando llegue a casa.)",
        "En español usamos el **subjuntivo** (*cuando llegue, en cuanto termine, hasta que encuentre*); en inglés se usa el **presente simple**: ***As soon as** I **finish** university, I'm going to travel.*",
        "La otra parte de la oración sí va en **futuro** (*will, going to*) o en **imperativo**: *Wait here **until** I **come** back. **Before** you **leave**, turn off the lights.*",
        "Para algo que ya habrá terminado se puede usar el **presente perfecto**: *I'll look for a job **after** I**'ve finished** my degree.* Y el orden puede cambiar: *When I get a job, I'll buy a car* = *I'll buy a car when I get a job* (con coma solo si *when* va primero)."
      ],
      "tabla": {
        "columnas": [
          "Conector",
          "Ejemplo",
          "Español"
        ],
        "filas": [
          [
            "when",
            "I'll call you when I arrive.",
            "cuando llegue"
          ],
          [
            "as soon as",
            "As soon as I graduate, I'll look for a job.",
            "en cuanto me gradúe"
          ],
          [
            "until",
            "I'll stay until you finish.",
            "hasta que termines"
          ],
          [
            "before",
            "Before I start working, I'm going to travel.",
            "antes de empezar a trabajar"
          ],
          [
            "after",
            "After I've saved enough money, I'll buy a house.",
            "después de ahorrar"
          ]
        ]
      },
      "ojo": [
        "*When I **will** finish* ❌ → ***When I finish*** ✅. Es el error más común.",
        "***Until*** = hasta que. *I won't leave **until** you **tell** me the truth.* (No me voy hasta que me digas la verdad.)",
        "***If*** también funciona así: *If it **rains**, we'll stay home* (tema 9).",
        "***By the time*** (para cuando): *By the time you **arrive**, I'll have dinner ready.*",
        "***Once*** (una vez que) = *as soon as*: ***Once** I **get** my visa, I'll book the flight.*"
      ],
      "en": [
        "After when, as soon as, until, before and after, we use the present for the future: I'll call you when I get home.",
        "As soon as I finish university, I'm going to travel.",
        "Wait here until I come back. Before you leave, turn off the lights."
      ]
    },
    "vocabulario": [
      {
        "en": "when I graduate",
        "es": "cuando me gradúe",
        "imagen": "Estudiantes lanzando sus birretes al aire",
        "ejemplo": [
          "When I graduate, I'm going to work abroad.",
          "Cuando me gradúe, voy a trabajar en el extranjero."
        ]
      },
      {
        "en": "as soon as I finish",
        "es": "en cuanto termine",
        "imagen": "Estudiante entregando su último examen con alivio",
        "ejemplo": [
          "As soon as I finish my exams, I'll go on vacation.",
          "En cuanto termine mis exámenes, me voy de vacaciones."
        ]
      },
      {
        "en": "until I find a job",
        "es": "hasta que encuentre trabajo",
        "imagen": "Joven buscando empleo en su laptop en la casa de sus papás",
        "ejemplo": [
          "I'll live with my parents until I find a job.",
          "Viviré con mis papás hasta que encuentre trabajo."
        ]
      },
      {
        "en": "before I start working",
        "es": "antes de empezar a trabajar",
        "imagen": "Mochilero en una montaña con vista espectacular",
        "ejemplo": [
          "Before I start working, I want to travel.",
          "Antes de empezar a trabajar, quiero viajar."
        ]
      },
      {
        "en": "after I save some money",
        "es": "después de ahorrar algo",
        "imagen": "Persona metiendo dinero en una alcancía",
        "ejemplo": [
          "After I save some money, I'll buy a car.",
          "Después de ahorrar algo, compraré un carro."
        ]
      },
      {
        "en": "I'll call you when I arrive.",
        "es": "te llamo cuando llegue",
        "imagen": "Persona saliendo del aeropuerto con el celular en la mano",
        "ejemplo": [
          "I'll call you when I arrive in Lima.",
          "Te llamo cuando llegue a Lima."
        ]
      },
      {
        "en": "Wait until I come back.",
        "es": "espera hasta que regrese",
        "imagen": "Papá pidiéndole a su hijo que espere en la puerta",
        "ejemplo": [
          "Wait here until I come back.",
          "Espera aquí hasta que regrese."
        ]
      },
      {
        "en": "once I get my visa",
        "es": "una vez que tenga mi visa",
        "imagen": "Persona feliz recibiendo un pasaporte con una visa",
        "ejemplo": [
          "Once I get my visa, I'll book the flight.",
          "Una vez que tenga mi visa, reservaré el vuelo."
        ]
      },
      {
        "en": "by the time you arrive",
        "es": "para cuando llegues",
        "imagen": "Mesa servida esperando a los invitados",
        "ejemplo": [
          "By the time you arrive, dinner will be ready.",
          "Para cuando llegues, la cena estará lista."
        ]
      },
      {
        "en": "I'll apply for a master's",
        "es": "voy a solicitar una maestría",
        "imagen": "Estudiante llenando una solicitud universitaria en línea",
        "ejemplo": [
          "After I graduate, I'll apply for a master's degree.",
          "Después de graduarme, voy a solicitar una maestría."
        ]
      },
      {
        "en": "I'll get an internship",
        "es": "conseguiré unas prácticas",
        "imagen": "Practicante joven trabajando en una oficina moderna",
        "ejemplo": [
          "I hope I'll get an internship before I finish.",
          "Espero conseguir unas prácticas antes de terminar."
        ]
      },
      {
        "en": "I'll move out",
        "es": "me iré de la casa",
        "imagen": "Joven cargando cajas fuera de la casa de sus papás",
        "ejemplo": [
          "When I get a good job, I'll move out.",
          "Cuando tenga un buen trabajo, me iré de la casa."
        ]
      },
      {
        "en": "I won't relax until",
        "es": "no me relajaré hasta que",
        "imagen": "Estudiante tenso esperando resultados frente a la computadora",
        "ejemplo": [
          "I won't relax until I get my results.",
          "No me relajaré hasta que tenga mis resultados."
        ]
      },
      {
        "en": "Let me know when",
        "es": "avísame cuando",
        "imagen": "Persona escribiendo un mensaje en el celular",
        "ejemplo": [
          "Let me know when you get home.",
          "Avísame cuando llegues a casa."
        ]
      },
      {
        "en": "I'll take a gap year",
        "es": "me tomaré un año sabático",
        "imagen": "Joven trabajando como voluntario en una granja",
        "ejemplo": [
          "I'll take a gap year before I go to university.",
          "Me tomaré un año sabático antes de ir a la universidad."
        ]
      },
      {
        "en": "as soon as possible",
        "es": "lo antes posible",
        "imagen": "Persona revisando su agenda con prisa",
        "ejemplo": [
          "I'll answer as soon as possible.",
          "Contestaré lo antes posible."
        ]
      }
    ],
    "grupos": [
      {
        "id": "planes",
        "titulo": "Después de estudiar",
        "icono": "🎓",
        "patron": [
          "When I finish…",
          "As soon as I get…",
          "Until I find…"
        ],
        "palabras": [
          {
            "en": "get my degree",
            "es": "sacar mi título",
            "imagen": "Graduado recibiendo su título en un escenario",
            "ejemplo": [
              "When I get my degree, I'll have a big party.",
              "Cuando saque mi título, haré una gran fiesta."
            ]
          },
          {
            "en": "look for a job",
            "es": "buscar trabajo",
            "imagen": "Persona revisando ofertas de empleo con un currículum impreso",
            "ejemplo": [
              "As soon as I finish, I'll look for a job.",
              "En cuanto termine, buscaré trabajo."
            ]
          },
          {
            "en": "start my own business",
            "es": "poner mi propio negocio",
            "imagen": "Joven abriendo la cortina de su local nuevo",
            "ejemplo": [
              "After I've saved enough, I'll start my own business.",
              "Después de ahorrar lo suficiente, pondré mi propio negocio."
            ]
          },
          {
            "en": "study abroad",
            "es": "estudiar en el extranjero",
            "imagen": "Estudiante con mochila frente a una universidad antigua",
            "ejemplo": [
              "I'd like to study abroad before I start working.",
              "Me gustaría estudiar en el extranjero antes de empezar a trabajar."
            ]
          },
          {
            "en": "do volunteer work",
            "es": "hacer voluntariado",
            "imagen": "Voluntarios plantando árboles en un campo",
            "ejemplo": [
              "When I finish school, I'll do volunteer work for a year.",
              "Cuando termine la escuela, haré voluntariado un año."
            ]
          },
          {
            "en": "pay back my loan",
            "es": "pagar mi préstamo",
            "imagen": "Persona revisando su app del banco con alivio",
            "ejemplo": [
              "I won't buy a car until I pay back my student loan.",
              "No compraré carro hasta pagar mi préstamo estudiantil."
            ]
          }
        ]
      },
      {
        "id": "avisos",
        "titulo": "Instrucciones y avisos",
        "icono": "📢",
        "patron": [
          "Call me when…",
          "Don't leave until…",
          "Before you go…"
        ],
        "palabras": [
          {
            "en": "Text me when you get there.",
            "es": "escríbeme cuando llegues",
            "imagen": "Mamá diciéndole adiós a su hija que sube a un taxi",
            "ejemplo": [
              "Text me when you get there, OK?",
              "Escríbeme cuando llegues, ¿sí?"
            ]
          },
          {
            "en": "Don't leave until I say so.",
            "es": "no te vayas hasta que yo diga",
            "imagen": "Maestra hablando con un grupo antes de salir de excursión",
            "ejemplo": [
              "Don't leave the classroom until I say so.",
              "No salgan del salón hasta que yo diga."
            ]
          },
          {
            "en": "Before you go, close the windows.",
            "es": "antes de irte, cierra las ventanas",
            "imagen": "Persona cerrando ventanas antes de salir de casa",
            "ejemplo": [
              "Before you go, close all the windows.",
              "Antes de irte, cierra todas las ventanas."
            ]
          },
          {
            "en": "Turn off the oven when it beeps.",
            "es": "apaga el horno cuando suene",
            "imagen": "Horno con un pastel dorado y un temporizador",
            "ejemplo": [
              "Turn off the oven when it beeps.",
              "Apaga el horno cuando suene."
            ]
          },
          {
            "en": "Stay here until the rain stops.",
            "es": "quédate aquí hasta que deje de llover",
            "imagen": "Personas resguardándose de la lluvia bajo un techo",
            "ejemplo": [
              "Stay here until the rain stops.",
              "Quédate aquí hasta que deje de llover."
            ]
          },
          {
            "en": "Call me as soon as you know.",
            "es": "llámame en cuanto sepas",
            "imagen": "Persona esperando nerviosa una llamada con el celular en la mano",
            "ejemplo": [
              "Call me as soon as you know the results.",
              "Llámame en cuanto sepas los resultados."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "When I graduate, I'm going to work abroad.",
        "es": "Cuando me gradúe, voy a trabajar en el extranjero."
      },
      {
        "en": "As soon as I finish my exams, I'll go on vacation.",
        "es": "En cuanto termine mis exámenes, me voy de vacaciones."
      },
      {
        "en": "I'll live with my parents until I find a job.",
        "es": "Viviré con mis papás hasta que encuentre trabajo."
      },
      {
        "en": "Before I start working, I want to travel.",
        "es": "Antes de empezar a trabajar, quiero viajar."
      },
      {
        "en": "Once I get my visa, I'll book the flight.",
        "es": "Una vez que tenga mi visa, reservaré el vuelo."
      },
      {
        "en": "By the time you arrive, dinner will be ready.",
        "es": "Para cuando llegues, la cena estará lista."
      },
      {
        "en": "Text me when you get there, OK?",
        "es": "Escríbeme cuando llegues, ¿sí?"
      },
      {
        "en": "I won't relax until I get my results.",
        "es": "No me relajaré hasta que tenga mis resultados."
      },
      {
        "en": "Call me as soon as you know the results.",
        "es": "Llámame en cuanto sepas los resultados."
      },
      {
        "en": "When I get a good job, I'll move out.",
        "es": "Cuando tenga un buen trabajo, me iré de la casa."
      }
    ],
    "frases": [
      {
        "en": "As soon as I finish my degree in June, I'm going to look for a job in Monterrey.",
        "es": "En cuanto termine mi carrera en junio, voy a buscar trabajo en Monterrey.",
        "imagen": "Joven recién graduado con su currículum frente a edificios de oficinas"
      },
      {
        "en": "I won't buy a car until I've paid back all my student loans.",
        "es": "No voy a comprar carro hasta haber pagado todos mis préstamos estudiantiles.",
        "imagen": "Persona en bicicleta pasando frente a una agencia de carros"
      },
      {
        "en": "When my sister finishes medical school, she wants to work in a small town for two years.",
        "es": "Cuando mi hermana termine medicina, quiere trabajar en un pueblo dos años.",
        "imagen": "Doctora joven atendiendo a pacientes en una clínica rural"
      },
      {
        "en": "Before you start the exam, read all the instructions carefully.",
        "es": "Antes de empezar el examen, lean todas las instrucciones con cuidado.",
        "imagen": "Estudiantes leyendo un examen en silencio"
      },
      {
        "en": "I'll stay in this job until I find something better, but I'm not happy here.",
        "es": "Me quedaré en este trabajo hasta que encuentre algo mejor, pero no estoy contento aquí.",
        "imagen": "Persona aburrida en su escritorio mirando ofertas en su celular"
      },
      {
        "en": "After I've saved enough money, I'm going to take a course in London.",
        "es": "Después de ahorrar suficiente dinero, voy a tomar un curso en Londres.",
        "imagen": "Estudiante con abrigo frente al Big Ben"
      },
      {
        "en": "We'll start dinner as soon as everybody arrives.",
        "es": "Empezamos a cenar en cuanto lleguen todos.",
        "imagen": "Familia esperando a los invitados frente a una mesa servida"
      },
      {
        "en": "Once you've finished the online form, you'll receive an email with your interview date.",
        "es": "Una vez que termines el formulario en línea, recibirás un correo con la fecha de tu entrevista.",
        "imagen": "Persona llenando un formulario en la computadora"
      },
      {
        "en": "When I'm older, I'd like to live by the sea and open a small café.",
        "es": "Cuando sea mayor, me gustaría vivir junto al mar y abrir un cafecito.",
        "imagen": "Café pequeño con terraza frente al mar"
      },
      {
        "en": "Don't tell anyone about the surprise until I give you the signal.",
        "es": "No le digas a nadie de la sorpresa hasta que te dé la señal.",
        "imagen": "Amigos escondidos detrás de un sillón con globos"
      }
    ],
    "listening": [
      {
        "audio": "As soon as I get my first salary, I'm going to buy my mom a present.",
        "pregunta": "¿Qué va a hacer con su primer sueldo?",
        "opciones": [
          "Comprarle un regalo a su mamá",
          "Ahorrarlo",
          "Comprar un carro",
          "Viajar"
        ]
      },
      {
        "audio": "I'll stay at my aunt's house until I find an apartment.",
        "pregunta": "¿Hasta cuándo se va a quedar con su tía?",
        "opciones": [
          "Hasta encontrar departamento",
          "Un mes",
          "Hasta graduarse",
          "Para siempre"
        ]
      },
      {
        "audio": "Before you leave the office, please turn off the air conditioning.",
        "pregunta": "¿Qué debe apagar?",
        "opciones": [
          "El aire acondicionado",
          "Las luces",
          "La computadora",
          "La cafetera"
        ]
      },
      {
        "audio": "When I finish my master's, I'd like to teach at a university.",
        "pregunta": "¿Qué quiere hacer después de la maestría?",
        "opciones": [
          "Dar clases en una universidad",
          "Viajar",
          "Poner un negocio",
          "Estudiar otro idioma"
        ]
      },
      {
        "audio": "Let me know as soon as the package arrives, so I can pick it up.",
        "pregunta": "¿Qué le pide?",
        "opciones": [
          "Avisarle cuando llegue el paquete",
          "Recoger el paquete",
          "Mandar un paquete",
          "Pagar el paquete"
        ]
      }
    ],
    "lectura": {
      "titulo": "What's next?",
      "texto": "Ricardo is in his last semester of engineering, and everybody keeps asking him: What are you going to do when you finish? He has a plan. As soon as he graduates in December, he's going to take a short break and visit his grandparents in Sonora. He hasn't seen them for two years. When he comes back in January, he'll start looking for a job in the automotive industry. He won't accept just any job, though; he wants a company where he can learn. Until he finds the right job, he'll keep working part-time at his uncle's workshop. Ricardo also wants to study for a master's degree in Germany, but not before he has saved some money and improved his German. Once he's ready, he'll apply for a scholarship. His mother says: Just call me when you're rich!",
      "preguntas": [
        {
          "pregunta": "¿Qué hará en cuanto se gradúe?",
          "opciones": [
            "Visitar a sus abuelos en Sonora",
            "Buscar trabajo",
            "Irse a Alemania",
            "Estudiar una maestría"
          ]
        },
        {
          "pregunta": "¿En qué industria quiere trabajar?",
          "opciones": [
            "Automotriz",
            "Turística",
            "Médica",
            "Educativa"
          ]
        },
        {
          "pregunta": "¿Qué hará hasta encontrar el trabajo correcto?",
          "opciones": [
            "Trabajar medio tiempo en el taller de su tío",
            "Viajar",
            "Estudiar alemán todo el día",
            "Descansar"
          ]
        },
        {
          "pregunta": "¿Qué necesita antes de ir a Alemania?",
          "opciones": [
            "Ahorrar y mejorar su alemán",
            "Casarse",
            "Comprar un carro",
            "Terminar la prepa"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con el verbo en presente.",
        "pregunta": "I'll call you when I ___ (arrive).",
        "respuestas": [
          "arrive"
        ]
      },
      {
        "instruccion": "Completa con el verbo en presente.",
        "pregunta": "As soon as she ___ (finish), she'll go home.",
        "respuestas": [
          "finishes"
        ]
      },
      {
        "instruccion": "Completa con will o el presente.",
        "pregunta": "When I get a job, I ___ (buy) a car.",
        "respuestas": [
          "'ll buy",
          "will buy"
        ]
      },
      {
        "instruccion": "Completa con until o before.",
        "pregunta": "Wait here ___ I come back.",
        "respuestas": [
          "until"
        ]
      },
      {
        "instruccion": "Completa con until o before.",
        "pregunta": "Wash your hands ___ you eat.",
        "respuestas": [
          "before"
        ]
      },
      {
        "instruccion": "Completa con when o as soon as.",
        "pregunta": "I'll text you ___ I know. (en cuanto)",
        "respuestas": [
          "as soon as"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Te llamo cuando llegue.",
        "respuestas": [
          "I'll call you when I arrive",
          "I'll call you when I get there",
          "I will call you when I arrive",
          "I'll call you when I get home"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Avísame cuando llegues a casa.",
        "respuestas": [
          "Let me know when you get home",
          "Text me when you get home",
          "Tell me when you get home"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "hasta que encuentre trabajo",
        "respuestas": [
          "until I find a job",
          "until I find work"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "When I will finish school, I'll travel.",
        "respuestas": [
          "When I finish school, I'll travel",
          "When I finish school, I will travel",
          "When I finish school I'll travel"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "I'll tell you when he ___.",
        "opciones": [
          "arrives",
          "will arrive",
          "arrive",
          "is going to arrive"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "As soon as I ___ my degree, I'll look for a job.",
        "opciones": [
          "get",
          "will get",
          "got",
          "getting"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We'll wait ___ you're ready.",
        "opciones": [
          "until",
          "before",
          "as soon",
          "by"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ you leave, close the door.",
        "opciones": [
          "Before",
          "Until",
          "As soon",
          "While as"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "When I finish university, I ___ to Canada.",
        "opciones": [
          "'m going to move",
          "move will",
          "moving",
          "moved"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«En cuanto llegue» =",
        "opciones": [
          "As soon as I arrive",
          "As soon as I will arrive",
          "Until I arrive",
          "Before I arrived"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I won't go to bed until I finish this book. Only fifty pages left!",
        "pregunta": "¿Hasta cuándo no se va a dormir?",
        "opciones": [
          "Hasta terminar el libro",
          "Hasta medianoche",
          "Hasta que llegue su mamá",
          "Hasta mañana"
        ]
      },
      {
        "tipo": "listening",
        "audio": "When the baby wakes up, we'll go to the park.",
        "pregunta": "¿Cuándo van al parque?",
        "opciones": [
          "Cuando despierte el bebé",
          "Después de comer",
          "Mañana",
          "Cuando deje de llover"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: antes de irte",
        "respuestas": [
          "before you leave",
          "before you go"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Cuando me gradúe, voy a viajar.",
        "respuestas": [
          "When I graduate, I'm going to travel",
          "When I graduate, I'll travel",
          "When I graduate I'm going to travel",
          "When I graduate, I will travel"
        ]
      }
    ]
  },
  {
    "id": "b1-09",
    "num": 9,
    "titulo": "Condicional cero y primer condicional",
    "contexto": "Causa y efecto; supersticiones",
    "explicacion": {
      "es": [
        "El **condicional cero** (*If* + presente, presente) habla de cosas que **siempre** pasan: verdades, hechos científicos y costumbres: ***If** you **heat** ice, it **melts**.* (Si calientas el hielo, se derrite.) *If I **drink** coffee at night, I **can't** sleep.*",
        "El **primer condicional** (*If* + presente, ***will*** + verbo) habla de una situación **posible o probable en el futuro** y su resultado: ***If** it **rains** tomorrow, we**'ll stay** home.* (Si llueve mañana, nos quedaremos en casa.)",
        "En la parte con *if* va **presente**, aunque hable del futuro: *If I **see** him, I'll tell him* ✅ (no *If I will see* ❌). La otra parte puede llevar ***will, can, may, might*** o un **imperativo**: *If you see Ana, **tell** her to call me.*",
        "***Unless*** = **a menos que / si no**: ***Unless** you hurry, you'll miss the bus* = *If you **don't** hurry, you'll miss the bus.*"
      ],
      "tabla": {
        "columnas": [
          "Tipo",
          "Forma",
          "Ejemplo"
        ],
        "filas": [
          [
            "Cero (siempre)",
            "If + presente, presente",
            "If you mix red and white, you get pink."
          ],
          [
            "Primero (futuro posible)",
            "If + presente, will + verbo",
            "If you study, you'll pass."
          ],
          [
            "Con imperativo",
            "If + presente, imperativo",
            "If you're tired, go to bed."
          ],
          [
            "Unless",
            "unless + presente, will",
            "I won't go unless you come with me."
          ]
        ]
      },
      "ojo": [
        "Nunca *will* después de *if* en estos condicionales: *If it **rains*** ✅, no *If it will rain* ❌.",
        "Si *if* va primero, se pone **coma**: *If it rains, we'll stay home.* Si va en medio, sin coma: *We'll stay home if it rains.*",
        "***When*** vs. ***if***: *When I see him* (seguro lo voy a ver) / *If I see him* (tal vez lo vea).",
        "***Unless*** ya es negativo: *Unless you **study*** ✅ (no *Unless you don't study* ❌).",
        "Las supersticiones suelen ir con condicional cero o primero: *If a black cat **crosses** your path, you**'ll have** bad luck.*"
      ],
      "en": [
        "The zero conditional is for things that are always true: If you heat ice, it melts.",
        "The first conditional is for possible future situations: If it rains tomorrow, we'll stay home.",
        "After if, use the present: If I see him, I'll tell him.",
        "Unless means if not: Unless you hurry, you'll miss the bus."
      ]
    },
    "vocabulario": [
      {
        "en": "If you heat ice, it melts.",
        "es": "si calientas el hielo, se derrite",
        "imagen": "Cubos de hielo derritiéndose en un sartén",
        "ejemplo": [
          "If you heat ice, it melts.",
          "Si calientas el hielo, se derrite."
        ]
      },
      {
        "en": "If it rains, we'll stay home.",
        "es": "si llueve, nos quedamos en casa",
        "imagen": "Familia mirando la lluvia desde la ventana con juegos de mesa",
        "ejemplo": [
          "If it rains tomorrow, we'll stay home.",
          "Si llueve mañana, nos quedamos en casa."
        ]
      },
      {
        "en": "If you study, you'll pass.",
        "es": "si estudias, aprobarás",
        "imagen": "Estudiante estudiando con apuntes de colores",
        "ejemplo": [
          "If you study hard, you'll pass the exam.",
          "Si estudias mucho, aprobarás el examen."
        ]
      },
      {
        "en": "If I drink coffee at night, I can't sleep.",
        "es": "si tomo café en la noche, no puedo dormir",
        "imagen": "Persona despierta en la cama con una taza de café en el buró",
        "ejemplo": [
          "If I drink coffee at night, I can't sleep.",
          "Si tomo café en la noche, no puedo dormir."
        ]
      },
      {
        "en": "Unless you hurry, you'll be late.",
        "es": "si no te apuras, llegarás tarde",
        "imagen": "Persona corriendo con el reloj en la mano",
        "ejemplo": [
          "Unless you hurry, you'll be late for work.",
          "Si no te apuras, llegarás tarde al trabajo."
        ]
      },
      {
        "en": "If you see Ana, tell her to call me.",
        "es": "si ves a Ana, dile que me llame",
        "imagen": "Persona dando un recado a su amigo en la calle",
        "ejemplo": [
          "If you see Ana, tell her to call me.",
          "Si ves a Ana, dile que me llame."
        ]
      },
      {
        "en": "If you don't water plants, they die.",
        "es": "si no riegas las plantas, se mueren",
        "imagen": "Planta seca y marchita en una maceta",
        "ejemplo": [
          "If you don't water plants, they die.",
          "Si no riegas las plantas, se mueren."
        ]
      },
      {
        "en": "If it's sunny, we'll go to the beach.",
        "es": "si hace sol, vamos a la playa",
        "imagen": "Familia con hielera y sombrilla saliendo de casa",
        "ejemplo": [
          "If it's sunny on Sunday, we'll go to the beach.",
          "Si hace sol el domingo, vamos a la playa."
        ]
      },
      {
        "en": "If you press this button, the machine starts.",
        "es": "si aprietas este botón, la máquina arranca",
        "imagen": "Dedo apretando un botón verde en una máquina",
        "ejemplo": [
          "If you press this button, the machine starts.",
          "Si aprietas este botón, la máquina arranca."
        ]
      },
      {
        "en": "If you break a mirror, you'll have bad luck.",
        "es": "si rompes un espejo, tendrás mala suerte",
        "imagen": "Espejo roto en el piso de un baño",
        "ejemplo": [
          "They say if you break a mirror, you'll have seven years of bad luck.",
          "Dicen que si rompes un espejo, tendrás siete años de mala suerte."
        ]
      },
      {
        "en": "If I have time, I'll call you.",
        "es": "si tengo tiempo, te llamo",
        "imagen": "Persona ocupada mirando su agenda",
        "ejemplo": [
          "If I have time, I'll call you tonight.",
          "Si tengo tiempo, te llamo en la noche."
        ]
      },
      {
        "en": "If you're hungry, eat something.",
        "es": "si tienes hambre, come algo",
        "imagen": "Persona tomando una fruta del frutero",
        "ejemplo": [
          "If you're hungry, eat something from the fridge.",
          "Si tienes hambre, come algo del refrigerador."
        ]
      },
      {
        "en": "If we leave now, we'll catch the train.",
        "es": "si salimos ahora, alcanzamos el tren",
        "imagen": "Personas caminando rápido hacia una estación",
        "ejemplo": [
          "If we leave now, we'll catch the train.",
          "Si salimos ahora, alcanzamos el tren."
        ]
      },
      {
        "en": "If you don't sleep, you get tired.",
        "es": "si no duermes, te cansas",
        "imagen": "Persona bostezando en su escritorio",
        "ejemplo": [
          "If you don't sleep enough, you get tired.",
          "Si no duermes suficiente, te cansas."
        ]
      },
      {
        "en": "I won't go unless you come.",
        "es": "no voy a menos que vengas",
        "imagen": "Amiga convenciendo a otra de ir a una fiesta",
        "ejemplo": [
          "I won't go to the party unless you come with me.",
          "No voy a la fiesta a menos que vengas conmigo."
        ]
      },
      {
        "en": "If it doesn't work, call the technician.",
        "es": "si no funciona, llama al técnico",
        "imagen": "Técnico revisando una lavadora",
        "ejemplo": [
          "If it doesn't work, call the technician.",
          "Si no funciona, llama al técnico."
        ]
      }
    ],
    "grupos": [
      {
        "id": "supersticiones",
        "titulo": "Supersticiones",
        "icono": "🍀",
        "patron": [
          "If a black cat…",
          "They say that if…",
          "It's bad luck to…"
        ],
        "palabras": [
          {
            "en": "a black cat",
            "es": "un gato negro",
            "imagen": "Gato negro cruzando una calle empedrada",
            "ejemplo": [
              "If a black cat crosses your path, you'll have bad luck.",
              "Si un gato negro se te cruza, tendrás mala suerte."
            ]
          },
          {
            "en": "open an umbrella inside",
            "es": "abrir un paraguas adentro",
            "imagen": "Paraguas abierto dentro de una sala",
            "ejemplo": [
              "It's bad luck to open an umbrella inside the house.",
              "Es de mala suerte abrir un paraguas dentro de la casa."
            ]
          },
          {
            "en": "walk under a ladder",
            "es": "pasar debajo de una escalera",
            "imagen": "Escalera recargada en una pared y una persona rodeándola",
            "ejemplo": [
              "Some people never walk under a ladder.",
              "Algunas personas nunca pasan debajo de una escalera."
            ]
          },
          {
            "en": "Tuesday the 13th",
            "es": "martes 13",
            "imagen": "Calendario con un martes 13 marcado, sin texto legible",
            "ejemplo": [
              "In Mexico, Tuesday the 13th is an unlucky day.",
              "En México, el martes 13 es un día de mala suerte."
            ]
          },
          {
            "en": "knock on wood",
            "es": "tocar madera",
            "imagen": "Mano tocando una mesa de madera",
            "ejemplo": [
              "I've never had an accident, knock on wood!",
              "Nunca he tenido un accidente, ¡toco madera!"
            ]
          },
          {
            "en": "a horseshoe",
            "es": "una herradura",
            "imagen": "Herradura colgada sobre una puerta",
            "ejemplo": [
              "If you hang a horseshoe on your door, it brings good luck.",
              "Si cuelgas una herradura en tu puerta, trae buena suerte."
            ]
          },
          {
            "en": "spill salt",
            "es": "tirar la sal",
            "imagen": "Salero volteado con sal en la mesa",
            "ejemplo": [
              "If you spill salt, throw some over your shoulder.",
              "Si tiras la sal, échate un poco por encima del hombro."
            ]
          },
          {
            "en": "cross your fingers",
            "es": "cruzar los dedos",
            "imagen": "Mano con los dedos cruzados",
            "ejemplo": [
              "Cross your fingers! I have an interview today.",
              "¡Cruza los dedos! Hoy tengo una entrevista."
            ]
          }
        ]
      },
      {
        "id": "consecuencias",
        "titulo": "Causa y efecto",
        "icono": "⚙️",
        "patron": [
          "If you…, …",
          "…will happen if…",
          "Unless…"
        ],
        "palabras": [
          {
            "en": "water boils at 100 degrees",
            "es": "el agua hierve a 100 grados",
            "imagen": "Olla con agua hirviendo y vapor",
            "ejemplo": [
              "If you heat water to 100 degrees, it boils.",
              "Si calientas el agua a 100 grados, hierve."
            ]
          },
          {
            "en": "the battery dies",
            "es": "la batería se acaba",
            "imagen": "Celular con la batería vacía",
            "ejemplo": [
              "If you use your phone all day, the battery dies.",
              "Si usas el celular todo el día, se acaba la batería."
            ]
          },
          {
            "en": "you get a fine",
            "es": "te ponen una multa",
            "imagen": "Agente de tránsito escribiendo una multa",
            "ejemplo": [
              "If you park here, you'll get a fine.",
              "Si te estacionas aquí, te van a multar."
            ]
          },
          {
            "en": "plants grow",
            "es": "las plantas crecen",
            "imagen": "Brotes verdes saliendo de la tierra al sol",
            "ejemplo": [
              "If plants get sun and water, they grow.",
              "Si las plantas reciben sol y agua, crecen."
            ]
          },
          {
            "en": "prices go up",
            "es": "los precios suben",
            "imagen": "Persona sorprendida frente a un precio alto",
            "ejemplo": [
              "If gas prices go up, everything gets more expensive.",
              "Si sube la gasolina, todo se encarece."
            ]
          },
          {
            "en": "you'll feel better",
            "es": "te sentirás mejor",
            "imagen": "Persona tomando un té en la cama, sonriendo",
            "ejemplo": [
              "If you rest, you'll feel better tomorrow.",
              "Si descansas, te sentirás mejor mañana."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "If you heat ice, it melts.",
        "es": "Si calientas el hielo, se derrite."
      },
      {
        "en": "If it rains tomorrow, we'll stay home.",
        "es": "Si llueve mañana, nos quedamos en casa."
      },
      {
        "en": "If I drink coffee at night, I can't sleep.",
        "es": "Si tomo café en la noche, no puedo dormir."
      },
      {
        "en": "Unless you hurry, you'll be late for work.",
        "es": "Si no te apuras, llegarás tarde al trabajo."
      },
      {
        "en": "If you see Ana, tell her to call me.",
        "es": "Si ves a Ana, dile que me llame."
      },
      {
        "en": "If a black cat crosses your path, you'll have bad luck.",
        "es": "Si un gato negro se te cruza, tendrás mala suerte."
      },
      {
        "en": "I won't go to the party unless you come with me.",
        "es": "No voy a la fiesta a menos que vengas conmigo."
      },
      {
        "en": "If you park here, you'll get a fine.",
        "es": "Si te estacionas aquí, te van a multar."
      },
      {
        "en": "Cross your fingers! I have an interview today.",
        "es": "¡Cruza los dedos! Hoy tengo una entrevista."
      },
      {
        "en": "If you rest, you'll feel better tomorrow.",
        "es": "Si descansas, te sentirás mejor mañana."
      }
    ],
    "frases": [
      {
        "en": "If you don't leave now, you'll get stuck in traffic and miss your flight.",
        "es": "Si no te vas ahora, te vas a quedar atorado en el tráfico y perderás tu vuelo.",
        "imagen": "Carretera al aeropuerto con mucho tráfico"
      },
      {
        "en": "My grandmother says that if you sweep the floor at night, money will leave the house.",
        "es": "Mi abuela dice que si barres de noche, el dinero se va de la casa.",
        "imagen": "Abuela barriendo la entrada de su casa al atardecer"
      },
      {
        "en": "If you mix blue and yellow, you get green. Try it!",
        "es": "Si mezclas azul y amarillo, obtienes verde. ¡Pruébalo!",
        "imagen": "Niño mezclando pinturas azul y amarilla en una paleta"
      },
      {
        "en": "If the company offers me the job, I'll move to Guadalajara next month.",
        "es": "Si la empresa me ofrece el trabajo, me mudaré a Guadalajara el próximo mes.",
        "imagen": "Persona en una entrevista de trabajo estrechando la mano"
      },
      {
        "en": "I won't lend you my car unless you promise to drive carefully.",
        "es": "No te presto mi carro a menos que prometas manejar con cuidado.",
        "imagen": "Persona entregando las llaves del carro con cara seria"
      },
      {
        "en": "If you put your phone in rice, it sometimes dries out.",
        "es": "Si pones tu celular en arroz, a veces se seca.",
        "imagen": "Celular metido en un tazón de arroz"
      },
      {
        "en": "If we don't recycle more, there will be plastic everywhere in the ocean.",
        "es": "Si no reciclamos más, habrá plástico por todos lados en el mar.",
        "imagen": "Botes de reciclaje de colores junto a una playa"
      },
      {
        "en": "If you're feeling stressed, go for a walk or call a friend.",
        "es": "Si te sientes estresado, sal a caminar o llama a un amigo.",
        "imagen": "Persona caminando relajada en un parque con árboles"
      },
      {
        "en": "In my town, people believe that if you eat twelve grapes at midnight, you'll have a lucky year.",
        "es": "En mi pueblo, la gente cree que si comes doce uvas a medianoche, tendrás un año de suerte.",
        "imagen": "Familia comiendo uvas en Año Nuevo con un reloj al fondo"
      },
      {
        "en": "If the baby cries, give him his milk and he'll go back to sleep.",
        "es": "Si el bebé llora, dale su leche y se volverá a dormir.",
        "imagen": "Papá dándole biberón a su bebé de noche"
      }
    ],
    "listening": [
      {
        "audio": "If it's cold tomorrow, we won't go to the lake. We'll go to the museum instead.",
        "pregunta": "¿A dónde irán si hace frío?",
        "opciones": [
          "Al museo",
          "Al lago",
          "A la playa",
          "A casa"
        ]
      },
      {
        "audio": "If you press the red button, the alarm stops.",
        "pregunta": "¿Qué pasa si aprietas el botón rojo?",
        "opciones": [
          "La alarma se apaga",
          "La alarma suena",
          "Se abre la puerta",
          "Se prende la luz"
        ]
      },
      {
        "audio": "Unless you bring your ID, they won't let you in.",
        "pregunta": "¿Qué necesita para entrar?",
        "opciones": [
          "Su identificación",
          "Un boleto",
          "Dinero",
          "Una invitación"
        ]
      },
      {
        "audio": "My mom always says: if you go out with wet hair, you'll get sick.",
        "pregunta": "¿Qué dice la mamá?",
        "opciones": [
          "Que salir con el pelo mojado enferma",
          "Que hay que bañarse en la noche",
          "Que no se debe salir de noche",
          "Que el agua fría es buena"
        ]
      },
      {
        "audio": "If I get the promotion, I'll take you all out for dinner.",
        "pregunta": "¿Qué hará si lo ascienden?",
        "opciones": [
          "Invitarlos a cenar",
          "Comprarse un carro",
          "Irse de viaje",
          "Cambiar de trabajo"
        ]
      }
    ],
    "lectura": {
      "titulo": "Lucky and unlucky",
      "texto": "Every culture has its superstitions, and Mexico has many. My aunt Pilar believes in all of them. If she sees a black cat, she changes direction immediately. If someone puts their bag on the floor, she says: Pick it up! If you leave your bag on the floor, your money will disappear. On Tuesday the 13th, she doesn't get married, travel, or start anything new, because it's an unlucky day. On New Year's Eve, she eats twelve grapes and wears yellow underwear, because she says if you wear yellow, you'll have a year full of money. My cousin Julio laughs at her, but last year he didn't eat the grapes and he lost his job in February. Now, when New Year's Eve comes, he's the first one at the table with his grapes. Just in case, he says.",
      "preguntas": [
        {
          "pregunta": "¿Qué hace Pilar si ve un gato negro?",
          "opciones": [
            "Cambia de dirección",
            "Lo acaricia",
            "Cruza los dedos",
            "Se regresa a casa"
          ]
        },
        {
          "pregunta": "¿Qué pasa, según Pilar, si dejas la bolsa en el piso?",
          "opciones": [
            "Tu dinero desaparecerá",
            "Te la roban",
            "Tendrás un accidente",
            "Lloverá"
          ]
        },
        {
          "pregunta": "¿Por qué usa ropa interior amarilla en Año Nuevo?",
          "opciones": [
            "Para tener un año lleno de dinero",
            "Para encontrar el amor",
            "Para tener salud",
            "Porque le gusta el color"
          ]
        },
        {
          "pregunta": "¿Qué hace Julio ahora en Año Nuevo?",
          "opciones": [
            "Es el primero en comer las uvas",
            "Se ríe de su tía",
            "No celebra",
            "Sale de viaje"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con el primer condicional.",
        "pregunta": "If it ___ (rain), we'll stay home.",
        "respuestas": [
          "rains"
        ]
      },
      {
        "instruccion": "Completa con el primer condicional.",
        "pregunta": "If you study, you ___ (pass).",
        "respuestas": [
          "'ll pass",
          "will pass"
        ]
      },
      {
        "instruccion": "Completa con el condicional cero.",
        "pregunta": "If you heat water, it ___ (boil).",
        "respuestas": [
          "boils"
        ]
      },
      {
        "instruccion": "Completa con if o unless.",
        "pregunta": "You'll be late ___ you hurry.",
        "respuestas": [
          "unless"
        ]
      },
      {
        "instruccion": "Completa con if o unless.",
        "pregunta": "___ you see him, say hello.",
        "respuestas": [
          "If"
        ]
      },
      {
        "instruccion": "Completa con el verbo.",
        "pregunta": "If I ___ (have) time, I'll help you.",
        "respuestas": [
          "have"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Si llueve, no vamos.",
        "respuestas": [
          "If it rains, we won't go",
          "If it rains we won't go",
          "If it rains, we will not go",
          "If it rains, we're not going"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Si tienes hambre, come algo.",
        "respuestas": [
          "If you're hungry, eat something",
          "If you are hungry, eat something",
          "If you're hungry eat something"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "a menos que vengas",
        "respuestas": [
          "unless you come"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "If it will rain, I'll take an umbrella.",
        "respuestas": [
          "If it rains, I'll take an umbrella",
          "If it rains, I will take an umbrella",
          "If it rains I'll take an umbrella"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "If you ___ ice, it melts.",
        "opciones": [
          "heat",
          "will heat",
          "heated",
          "heating"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "If she calls, I ___ you.",
        "opciones": [
          "'ll tell",
          "tell will",
          "told",
          "am telling to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We'll go to the beach if it ___ sunny.",
        "opciones": [
          "is",
          "will be",
          "was",
          "be"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ you leave now, you'll miss the bus.",
        "opciones": [
          "Unless",
          "If not you",
          "When not",
          "Until"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "If you're tired, ___ to bed.",
        "opciones": [
          "go",
          "you'll going",
          "went",
          "going"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es condicional cero (siempre es verdad)?",
        "opciones": [
          "If you mix red and blue, you get purple.",
          "If I see her, I'll tell her.",
          "If it rains, we'll stay.",
          "If you come, I'll cook."
        ]
      },
      {
        "tipo": "listening",
        "audio": "If you finish your homework, you can watch TV for an hour.",
        "pregunta": "¿Qué puede hacer si termina la tarea?",
        "opciones": [
          "Ver la tele una hora",
          "Salir a jugar",
          "Usar el celular",
          "Dormirse tarde"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I won't buy the house unless the price goes down.",
        "pregunta": "¿Qué tiene que pasar para que compre la casa?",
        "opciones": [
          "Que baje el precio",
          "Que suba el precio",
          "Que la arreglen",
          "Que su esposa quiera"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Si tengo tiempo, te llamo.",
        "respuestas": [
          "If I have time, I'll call you",
          "If I have time, I will call you",
          "If I have time I'll call you"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: cruzar los dedos",
        "respuestas": [
          "cross your fingers",
          "to cross your fingers",
          "cross my fingers",
          "keep your fingers crossed"
        ]
      }
    ]
  },
  {
    "id": "b1-10",
    "num": 10,
    "titulo": "Segundo condicional",
    "contexto": "Situaciones imaginarias: ¿qué harías si…?",
    "explicacion": {
      "es": [
        "El **segundo condicional** habla de situaciones **imaginarias, poco probables o irreales** en el presente o el futuro: ***If** I **won** the lottery, I**'d buy** a house by the sea.* (Si me ganara la lotería, compraría una casa junto al mar.)",
        "Forma: ***If*** + **pasado simple**, ***would*** + **verbo base**. *Would* se contrae: ***I'd, you'd, she'd, we'd***. Negativo: ***wouldn't***.",
        "Con el verbo *to be* se usa ***were*** para todas las personas, sobre todo en consejos: ***If I were you**, I'd talk to her.* (Yo que tú, hablaría con ella.) En la conversación también se oye *If I was…*",
        "Para preguntar: ***What would you do if**…?* (¿Qué harías si…?) También se usan ***could*** (podría) y ***might*** (tal vez) en el resultado: *If I had more time, I **could** learn Japanese.*"
      ],
      "tabla": {
        "columnas": [
          "",
          "Primer condicional",
          "Segundo condicional"
        ],
        "filas": [
          [
            "Probabilidad",
            "posible / probable",
            "imaginario / poco probable"
          ],
          [
            "Forma",
            "If + presente, will",
            "If + pasado, would"
          ],
          [
            "Ejemplo",
            "If I have time, I'll call you.",
            "If I had time, I'd call you."
          ],
          [
            "Significado",
            "Tal vez tenga tiempo.",
            "No tengo tiempo (es imaginario)."
          ]
        ]
      },
      "ojo": [
        "El pasado después de *if* **no** habla del pasado, sino de algo **imaginario**: *If I **had** a car* = si tuviera un carro (ahora).",
        "No pongas *would* después de *if*: *If I **had*** ✅, no *If I would have* ❌.",
        "***If I were you, I'd…*** es la forma clásica de **dar consejos**.",
        "*I'd* puede ser *I would* (*I'd **go***) o *I had* (*I'd **gone***). Fíjate en el verbo que sigue.",
        "Compara: *If I **see** a snake, I'll run* (es posible) / *If I **saw** a lion in the street, I'd run* (casi imposible)."
      ],
      "en": [
        "The second conditional is for imaginary situations: If I won the lottery, I'd buy a house by the sea.",
        "Form: if plus past simple, would plus verb.",
        "For advice: If I were you, I'd talk to her.",
        "Question: What would you do if you found a wallet?"
      ]
    },
    "vocabulario": [
      {
        "en": "If I won the lottery",
        "es": "si me ganara la lotería",
        "imagen": "Persona sorprendida mirando un boleto de lotería, sin texto",
        "ejemplo": [
          "If I won the lottery, I'd travel the world.",
          "Si me ganara la lotería, viajaría por el mundo."
        ]
      },
      {
        "en": "I'd buy a house by the sea.",
        "es": "compraría una casa junto al mar",
        "imagen": "Casa blanca con terraza frente al mar",
        "ejemplo": [
          "I'd buy a house by the sea and relax.",
          "Compraría una casa junto al mar y descansaría."
        ]
      },
      {
        "en": "If I were you",
        "es": "yo que tú",
        "imagen": "Amiga dando un consejo a otra en un café",
        "ejemplo": [
          "If I were you, I'd accept the job.",
          "Yo que tú, aceptaría el trabajo."
        ]
      },
      {
        "en": "What would you do?",
        "es": "¿qué harías?",
        "imagen": "Dos amigos pensativos platicando",
        "ejemplo": [
          "What would you do if you lost your job?",
          "¿Qué harías si perdieras tu trabajo?"
        ]
      },
      {
        "en": "If I had more time",
        "es": "si tuviera más tiempo",
        "imagen": "Persona con agenda llena mirando un reloj",
        "ejemplo": [
          "If I had more time, I'd learn to paint.",
          "Si tuviera más tiempo, aprendería a pintar."
        ]
      },
      {
        "en": "If I could fly",
        "es": "si pudiera volar",
        "imagen": "Persona con los brazos abiertos en la cima de una montaña",
        "ejemplo": [
          "If I could fly, I'd never take the bus again.",
          "Si pudiera volar, nunca volvería a tomar el camión."
        ]
      },
      {
        "en": "I wouldn't do that.",
        "es": "yo no haría eso",
        "imagen": "Persona negando con la cabeza ante una mala idea",
        "ejemplo": [
          "I wouldn't do that if I were you.",
          "Yo no haría eso si fuera tú."
        ]
      },
      {
        "en": "If I spoke perfect English",
        "es": "si hablara inglés perfecto",
        "imagen": "Persona dando una presentación con confianza en inglés",
        "ejemplo": [
          "If I spoke perfect English, I'd work abroad.",
          "Si hablara inglés perfecto, trabajaría en el extranjero."
        ]
      },
      {
        "en": "If I lived in the country",
        "es": "si viviera en el campo",
        "imagen": "Casa de campo con huerto y gallinas",
        "ejemplo": [
          "If I lived in the country, I'd have a lot of animals.",
          "Si viviera en el campo, tendría muchos animales."
        ]
      },
      {
        "en": "I'd be very happy.",
        "es": "estaría muy feliz",
        "imagen": "Persona radiante de felicidad en un campo de flores",
        "ejemplo": [
          "If my family lived closer, I'd be very happy.",
          "Si mi familia viviera más cerca, estaría muy feliz."
        ]
      },
      {
        "en": "If I found a wallet",
        "es": "si encontrara una cartera",
        "imagen": "Cartera tirada en la banqueta",
        "ejemplo": [
          "If I found a wallet in the street, I'd take it to the police.",
          "Si encontrara una cartera en la calle, la llevaría a la policía."
        ]
      },
      {
        "en": "If I were a superhero",
        "es": "si fuera un superhéroe",
        "imagen": "Niño con capa roja en pose de superhéroe",
        "ejemplo": [
          "If I were a superhero, I'd help people.",
          "Si fuera un superhéroe, ayudaría a la gente."
        ]
      },
      {
        "en": "If I didn't have to work",
        "es": "si no tuviera que trabajar",
        "imagen": "Persona en una hamaca leyendo un libro",
        "ejemplo": [
          "If I didn't have to work, I'd read all day.",
          "Si no tuviera que trabajar, leería todo el día."
        ]
      },
      {
        "en": "I could help you.",
        "es": "te podría ayudar",
        "imagen": "Persona ofreciéndose a ayudar con unas cajas",
        "ejemplo": [
          "If I had a car, I could help you move.",
          "Si tuviera carro, te podría ayudar a mudarte."
        ]
      },
      {
        "en": "If I could change one thing",
        "es": "si pudiera cambiar una cosa",
        "imagen": "Persona pensativa mirando por la ventana",
        "ejemplo": [
          "If I could change one thing, I'd stop the wars.",
          "Si pudiera cambiar una cosa, acabaría con las guerras."
        ]
      },
      {
        "en": "It would be amazing.",
        "es": "sería increíble",
        "imagen": "Personas mirando una aurora boreal con asombro",
        "ejemplo": [
          "It would be amazing to see the northern lights.",
          "Sería increíble ver la aurora boreal."
        ]
      }
    ],
    "grupos": [
      {
        "id": "dilemas",
        "titulo": "Dilemas",
        "icono": "🤔",
        "patron": [
          "What would you do if…?",
          "I'd probably…",
          "I'd never…"
        ],
        "palabras": [
          {
            "en": "if you saw someone stealing",
            "es": "si vieras a alguien robando",
            "imagen": "Persona viendo a alguien tomar algo en una tienda",
            "ejemplo": [
              "What would you do if you saw someone stealing?",
              "¿Qué harías si vieras a alguien robando?"
            ]
          },
          {
            "en": "if your friend lied to you",
            "es": "si tu amigo te mintiera",
            "imagen": "Amigos discutiendo seriamente en una banca",
            "ejemplo": [
              "What would you do if your best friend lied to you?",
              "¿Qué harías si tu mejor amigo te mintiera?"
            ]
          },
          {
            "en": "if you got a job abroad",
            "es": "si te ofrecieran trabajo en el extranjero",
            "imagen": "Persona leyendo una carta de oferta de trabajo con emoción",
            "ejemplo": [
              "If I got a job abroad, I'd take it.",
              "Si me ofrecieran trabajo en el extranjero, lo tomaría."
            ]
          },
          {
            "en": "I'd probably tell the truth",
            "es": "probablemente diría la verdad",
            "imagen": "Persona hablando con honestidad a su jefe",
            "ejemplo": [
              "I'd probably tell the truth, even if it was difficult.",
              "Probablemente diría la verdad, aunque fuera difícil."
            ]
          },
          {
            "en": "I'd never forgive him",
            "es": "nunca lo perdonaría",
            "imagen": "Persona dándole la espalda a otra con enojo",
            "ejemplo": [
              "If he did that, I'd never forgive him.",
              "Si hiciera eso, nunca lo perdonaría."
            ]
          },
          {
            "en": "if you were invisible",
            "es": "si fueras invisible",
            "imagen": "Silueta transparente en una calle concurrida",
            "ejemplo": [
              "What would you do if you were invisible for a day?",
              "¿Qué harías si fueras invisible por un día?"
            ]
          }
        ]
      },
      {
        "id": "consejos",
        "titulo": "Dar consejos",
        "icono": "💡",
        "patron": [
          "If I were you, I'd…",
          "I wouldn't…",
          "You could…"
        ],
        "palabras": [
          {
            "en": "If I were you, I'd talk to her.",
            "es": "yo que tú, hablaría con ella",
            "imagen": "Amigo aconsejando a otro en una cafetería",
            "ejemplo": [
              "If I were you, I'd talk to her and say sorry.",
              "Yo que tú, hablaría con ella y le pediría perdón."
            ]
          },
          {
            "en": "I wouldn't buy it.",
            "es": "yo no lo compraría",
            "imagen": "Persona dudando frente a un producto caro",
            "ejemplo": [
              "It's too expensive. I wouldn't buy it.",
              "Está demasiado caro. Yo no lo compraría."
            ]
          },
          {
            "en": "I'd see a doctor.",
            "es": "yo iría al doctor",
            "imagen": "Doctor recibiendo a un paciente",
            "ejemplo": [
              "If I were you, I'd see a doctor.",
              "Yo que tú, iría al doctor."
            ]
          },
          {
            "en": "I'd look for another job.",
            "es": "buscaría otro trabajo",
            "imagen": "Persona revisando ofertas de empleo en su celular",
            "ejemplo": [
              "If my boss treated me like that, I'd look for another job.",
              "Si mi jefe me tratara así, buscaría otro trabajo."
            ]
          },
          {
            "en": "I'd save the money.",
            "es": "ahorraría el dinero",
            "imagen": "Persona metiendo dinero en una cuenta de ahorro",
            "ejemplo": [
              "If I were you, I'd save the money for later.",
              "Yo que tú, ahorraría el dinero para después."
            ]
          },
          {
            "en": "You could try again.",
            "es": "podrías intentarlo otra vez",
            "imagen": "Persona animando a su amigo después de un fracaso",
            "ejemplo": [
              "Don't give up. You could try again next year.",
              "No te rindas. Podrías intentarlo otra vez el próximo año."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "If I won the lottery, I'd travel the world.",
        "es": "Si me ganara la lotería, viajaría por el mundo."
      },
      {
        "en": "If I were you, I'd accept the job.",
        "es": "Yo que tú, aceptaría el trabajo."
      },
      {
        "en": "What would you do if you lost your job?",
        "es": "¿Qué harías si perdieras tu trabajo?"
      },
      {
        "en": "If I had more time, I'd learn to paint.",
        "es": "Si tuviera más tiempo, aprendería a pintar."
      },
      {
        "en": "I wouldn't do that if I were you.",
        "es": "Yo no haría eso si fuera tú."
      },
      {
        "en": "If I found a wallet in the street, I'd take it to the police.",
        "es": "Si encontrara una cartera en la calle, la llevaría a la policía."
      },
      {
        "en": "If I had a car, I could help you move.",
        "es": "Si tuviera carro, te podría ayudar a mudarte."
      },
      {
        "en": "It's too expensive. I wouldn't buy it.",
        "es": "Está demasiado caro. Yo no lo compraría."
      },
      {
        "en": "What would you do if you were invisible for a day?",
        "es": "¿Qué harías si fueras invisible por un día?"
      },
      {
        "en": "It would be amazing to see the northern lights.",
        "es": "Sería increíble ver la aurora boreal."
      }
    ],
    "frases": [
      {
        "en": "If I didn't have to work tomorrow, I'd stay up late and watch the whole series.",
        "es": "Si no tuviera que trabajar mañana, me desvelaría viendo toda la serie.",
        "imagen": "Persona viendo una serie de noche con palomitas"
      },
      {
        "en": "If my grandmother were here, she'd tell us one of her funny stories.",
        "es": "Si mi abuela estuviera aquí, nos contaría una de sus historias chistosas.",
        "imagen": "Familia mirando una foto de la abuela con cariño"
      },
      {
        "en": "What would you do if you had a million dollars? I'd help my family and start a business.",
        "es": "¿Qué harías con un millón de dólares? Ayudaría a mi familia y pondría un negocio.",
        "imagen": "Persona imaginando su negocio frente a un local vacío"
      },
      {
        "en": "If I were the president, I'd invest more money in schools and hospitals.",
        "es": "Si yo fuera presidente, invertiría más dinero en escuelas y hospitales.",
        "imagen": "Escuela pública nueva con niños entrando"
      },
      {
        "en": "If we lived closer to the beach, we'd go swimming every weekend.",
        "es": "Si viviéramos más cerca de la playa, iríamos a nadar cada fin de semana.",
        "imagen": "Familia corriendo hacia el mar en un día soleado"
      },
      {
        "en": "If I were you, I wouldn't lend him money. He never pays it back.",
        "es": "Yo que tú, no le prestaría dinero. Nunca lo regresa.",
        "imagen": "Persona negándose a dar dinero a un conocido"
      },
      {
        "en": "If I could speak any language, I'd choose Japanese, because I love anime.",
        "es": "Si pudiera hablar cualquier idioma, elegiría japonés, porque me encanta el anime.",
        "imagen": "Joven viendo anime con un cuaderno de japonés"
      },
      {
        "en": "If people used public transport more, there wouldn't be so much traffic.",
        "es": "Si la gente usara más el transporte público, no habría tanto tráfico.",
        "imagen": "Metro moderno lleno de pasajeros junto a una avenida vacía"
      },
      {
        "en": "If she studied a bit more, she'd get excellent grades. She's very intelligent.",
        "es": "Si estudiara un poco más, sacaría calificaciones excelentes. Es muy inteligente.",
        "imagen": "Estudiante distraída con el celular junto a sus libros"
      },
      {
        "en": "I'd love to visit Japan if the tickets weren't so expensive.",
        "es": "Me encantaría visitar Japón si los boletos no fueran tan caros.",
        "imagen": "Templo japonés con cerezos en flor y turistas"
      }
    ],
    "listening": [
      {
        "audio": "If I had more money, I'd buy a bigger apartment.",
        "pregunta": "¿Qué compraría con más dinero?",
        "opciones": [
          "Un departamento más grande",
          "Un carro",
          "Ropa",
          "Un viaje"
        ]
      },
      {
        "audio": "If I were you, I'd take the job in Monterrey. The salary is much better.",
        "pregunta": "¿Por qué le aconseja el trabajo en Monterrey?",
        "opciones": [
          "El sueldo es mucho mejor",
          "Está cerca de su familia",
          "Es más fácil",
          "Tiene más vacaciones"
        ]
      },
      {
        "audio": "What would you do if you found a lot of money in a taxi? I'd give it to the driver.",
        "pregunta": "¿Qué haría con el dinero?",
        "opciones": [
          "Dárselo al taxista",
          "Quedárselo",
          "Llevarlo a la policía",
          "Donarlo"
        ]
      },
      {
        "audio": "If it weren't raining, we could have the party in the garden.",
        "pregunta": "¿Por qué no hacen la fiesta en el jardín?",
        "opciones": [
          "Está lloviendo",
          "Hace frío",
          "El jardín es pequeño",
          "Hay mucho ruido"
        ]
      },
      {
        "audio": "I wouldn't live in a big city if I could choose. I'd prefer a small town.",
        "pregunta": "¿Dónde preferiría vivir?",
        "opciones": [
          "En un pueblo",
          "En una ciudad grande",
          "En la playa",
          "En otro país"
        ]
      }
    ],
    "lectura": {
      "titulo": "The magic question",
      "texto": "Every Friday, our English teacher, Miss Torres, asks the class a magic question. Last week the question was: What would you do if you could live anywhere in the world? Gaby said she'd live in Paris, because she'd love to study fashion there. Rodrigo said that if he could choose, he'd live on a small island with no internet. Everybody laughed, because Rodrigo is always on his phone! Fernanda said she wouldn't move at all. If I left my town, I'd miss my family too much, she said. Then Miss Torres told us her answer: If I could live anywhere, I'd live in Kyoto, because I love Japanese gardens. But if I lived there, I wouldn't have all of you, so I'll stay here. This week's question is: What would you do if you were invisible for a day? I already know my answer.",
      "preguntas": [
        {
          "pregunta": "¿Por qué viviría Gaby en París?",
          "opciones": [
            "Para estudiar moda",
            "Para aprender francés",
            "Por la comida",
            "Por su novio"
          ]
        },
        {
          "pregunta": "¿Por qué se rieron de Rodrigo?",
          "opciones": [
            "Siempre está con su celular",
            "Dijo algo chistoso en francés",
            "No contestó",
            "Eligió vivir en la Luna"
          ]
        },
        {
          "pregunta": "¿Por qué Fernanda no se mudaría?",
          "opciones": [
            "Extrañaría a su familia",
            "No le gusta viajar",
            "No tiene dinero",
            "Le da miedo volar"
          ]
        },
        {
          "pregunta": "¿Dónde viviría la maestra?",
          "opciones": [
            "En Kioto",
            "En París",
            "En una isla",
            "En Londres"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con el segundo condicional.",
        "pregunta": "If I ___ (have) a car, I'd drive to work.",
        "respuestas": [
          "had"
        ]
      },
      {
        "instruccion": "Completa con el segundo condicional.",
        "pregunta": "If she studied more, she ___ (pass).",
        "respuestas": [
          "would pass",
          "'d pass"
        ]
      },
      {
        "instruccion": "Completa con was o were.",
        "pregunta": "If I ___ you, I'd apologize.",
        "respuestas": [
          "were",
          "was"
        ]
      },
      {
        "instruccion": "Completa la pregunta.",
        "pregunta": "What ___ you do if you won the lottery?",
        "respuestas": [
          "would"
        ]
      },
      {
        "instruccion": "Completa con el segundo condicional.",
        "pregunta": "I ___ (not live) there if I were you.",
        "respuestas": [
          "wouldn't live",
          "would not live"
        ]
      },
      {
        "instruccion": "Completa con could.",
        "pregunta": "If I had wings, I ___ fly.",
        "respuestas": [
          "could",
          "would"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Yo que tú, aceptaría.",
        "respuestas": [
          "If I were you, I'd accept",
          "If I were you, I would accept",
          "If I was you, I'd accept",
          "If I were you I'd accept"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Qué harías?",
        "respuestas": [
          "What would you do"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Si tuviera tiempo, te ayudaría.",
        "respuestas": [
          "If I had time, I'd help you",
          "If I had time, I would help you",
          "If I had time I'd help you"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "If I would have money, I would travel.",
        "respuestas": [
          "If I had money, I would travel",
          "If I had money, I'd travel",
          "If I had money I would travel"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "If I ___ rich, I'd help my community.",
        "opciones": [
          "were",
          "am",
          "will be",
          "would be"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "If she had time, she ___ more.",
        "opciones": [
          "would read",
          "will read",
          "reads",
          "read would"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "What would you do if you ___ a ghost?",
        "opciones": [
          "saw",
          "see",
          "will see",
          "would see"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "If I were you, I ___ that.",
        "opciones": [
          "wouldn't do",
          "won't do",
          "don't do",
          "didn't do"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál habla de algo imaginario?",
        "opciones": [
          "If I lived on the moon, I'd be lonely.",
          "If it rains, I'll stay home.",
          "If you heat ice, it melts.",
          "If I see her, I'll tell her."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«If I had a dog» significa:",
        "opciones": [
          "Si tuviera un perro",
          "Si tuve un perro",
          "Si tengo un perro",
          "Si hubiera tenido un perro"
        ]
      },
      {
        "tipo": "listening",
        "audio": "If I could change jobs, I'd become a photographer.",
        "pregunta": "¿Qué sería si pudiera cambiar de trabajo?",
        "opciones": [
          "Fotógrafo",
          "Piloto",
          "Cocinero",
          "Maestro"
        ]
      },
      {
        "tipo": "listening",
        "audio": "If my brother lived here, he'd help me with the garden.",
        "pregunta": "¿Con qué le ayudaría el hermano?",
        "opciones": [
          "Con el jardín",
          "Con la mudanza",
          "Con la tarea",
          "Con el carro"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Yo no haría eso.",
        "respuestas": [
          "I wouldn't do that",
          "I would not do that"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Sería increíble.",
        "respuestas": [
          "It would be amazing",
          "It'd be amazing",
          "It would be incredible",
          "That would be amazing"
        ]
      }
    ]
  },
  {
    "id": "b1-11",
    "num": 11,
    "titulo": "Voz pasiva: presente simple",
    "contexto": "Cómo se hacen las cosas (procesos)",
    "explicacion": {
      "es": [
        "La **voz pasiva** pone la atención en **lo que se hace** (el objeto), no en **quién** lo hace: *Tequila **is made** from agave.* (El tequila se hace de agave.) En español muchas veces usamos el ***se***: *se hace, se produce, se habla*.",
        "Forma en presente: ***am / is / are*** + **participio**: *Coffee **is grown** in Chiapas. These cars **are made** in Puebla. English **is spoken** all over the world.*",
        "Se usa cuando **no sabemos**, **no importa** o **es obvio** quién hace la acción, y para **describir procesos**: *First, the cacao beans **are collected**. Then they **are dried** in the sun.*",
        "Si queremos decir quién lo hace, usamos ***by***: *This museum **is visited by** thousands of tourists.* Negativo y preguntas con *to be*: *Cash **isn't accepted**. **Is** breakfast **included**?*"
      ],
      "tabla": {
        "columnas": [
          "Voz activa",
          "Voz pasiva"
        ],
        "filas": [
          [
            "Farmers grow coffee in Chiapas.",
            "Coffee is grown in Chiapas."
          ],
          [
            "They make these shoes in León.",
            "These shoes are made in León."
          ],
          [
            "People speak Spanish here.",
            "Spanish is spoken here."
          ],
          [
            "They don't accept cards.",
            "Cards aren't accepted."
          ],
          [
            "Do they include tips?",
            "Are tips included?"
          ]
        ]
      },
      "ojo": [
        "No olvides el verbo ***to be***: *Coffee **is** grown* ✅, no *Coffee grown* ❌.",
        "El verbo *to be* concuerda con el **sujeto pasivo**: *The **bread is** made… / The **tortillas are** made…*",
        "Usa el **participio**, no el pasado: *It is **written*** ✅, no *It is wrote* ❌.",
        "Expresiones muy comunes: ***is made of*** (está hecho de, material): *This table **is made of** wood.* ***is made from*** (se hace de, ingrediente transformado): *Paper **is made from** trees.*",
        "Letreros en pasiva: ***No pets allowed. Breakfast is served from 7 to 10. Credit cards are accepted.***"
      ],
      "en": [
        "The passive voice puts attention on what is done: Tequila is made from agave.",
        "Form: am, is or are plus the participle. Coffee is grown in Chiapas. English is spoken all over the world.",
        "We use it to describe processes: First, the beans are collected. Then they are dried in the sun.",
        "With by: This museum is visited by thousands of tourists."
      ]
    },
    "vocabulario": [
      {
        "en": "Tequila is made from agave.",
        "es": "el tequila se hace de agave",
        "imagen": "Campo de agave azul con un jimador trabajando",
        "ejemplo": [
          "Tequila is made from blue agave.",
          "El tequila se hace de agave azul."
        ]
      },
      {
        "en": "Coffee is grown in Chiapas.",
        "es": "el café se cultiva en Chiapas",
        "imagen": "Cafetal en la montaña con granos rojos en las ramas",
        "ejemplo": [
          "A lot of coffee is grown in Chiapas.",
          "En Chiapas se cultiva mucho café."
        ]
      },
      {
        "en": "Spanish is spoken here.",
        "es": "aquí se habla español",
        "imagen": "Mercado lleno de gente platicando",
        "ejemplo": [
          "Spanish is spoken in more than twenty countries.",
          "El español se habla en más de veinte países."
        ]
      },
      {
        "en": "These cars are made in Puebla.",
        "es": "estos carros se fabrican en Puebla",
        "imagen": "Línea de ensamblaje de carros con robots",
        "ejemplo": [
          "These cars are made in a factory in Puebla.",
          "Estos carros se fabrican en una planta de Puebla."
        ]
      },
      {
        "en": "The table is made of wood.",
        "es": "la mesa es de madera",
        "imagen": "Mesa rústica de madera en un comedor",
        "ejemplo": [
          "This table is made of pine wood.",
          "Esta mesa es de madera de pino."
        ]
      },
      {
        "en": "Breakfast is included.",
        "es": "el desayuno está incluido",
        "imagen": "Desayuno servido en una mesa con jugo y fruta",
        "ejemplo": [
          "Is breakfast included in the price?",
          "¿El desayuno está incluido en el precio?"
        ]
      },
      {
        "en": "Cards aren't accepted.",
        "es": "no se aceptan tarjetas",
        "imagen": "Mano con billetes frente a una caja registradora",
        "ejemplo": [
          "Sorry, cards aren't accepted here. Only cash.",
          "Perdón, aquí no se aceptan tarjetas. Solo efectivo."
        ]
      },
      {
        "en": "The museum is visited by thousands of people.",
        "es": "miles de personas visitan el museo",
        "imagen": "Gente formada para entrar a un museo grande",
        "ejemplo": [
          "The museum is visited by thousands of people every day.",
          "Miles de personas visitan el museo cada día."
        ]
      },
      {
        "en": "The beans are dried in the sun.",
        "es": "los granos se secan al sol",
        "imagen": "Granos de café extendidos al sol en un patio",
        "ejemplo": [
          "After picking, the beans are dried in the sun.",
          "Después de cosecharlos, los granos se secan al sol."
        ]
      },
      {
        "en": "The milk is collected every morning.",
        "es": "la leche se recoge cada mañana",
        "imagen": "Granjero ordeñando una vaca al amanecer",
        "ejemplo": [
          "The milk is collected early every morning.",
          "La leche se recoge muy temprano cada mañana."
        ]
      },
      {
        "en": "The letters are delivered by hand.",
        "es": "las cartas se entregan a mano",
        "imagen": "Cartero entregando cartas en una casa",
        "ejemplo": [
          "In my town, letters are still delivered by hand.",
          "En mi pueblo, las cartas todavía se entregan a mano."
        ]
      },
      {
        "en": "The rooms are cleaned every day.",
        "es": "los cuartos se limpian cada día",
        "imagen": "Persona tendiendo una cama con sábanas limpias",
        "ejemplo": [
          "The classrooms are cleaned every afternoon.",
          "Los salones se limpian cada tarde."
        ]
      },
      {
        "en": "The bread is baked at dawn.",
        "es": "el pan se hornea al amanecer",
        "imagen": "Panadero sacando pan del horno de madrugada",
        "ejemplo": [
          "The bread is baked at five in the morning.",
          "El pan se hornea a las cinco de la mañana."
        ]
      },
      {
        "en": "The tortillas are made by hand.",
        "es": "las tortillas se hacen a mano",
        "imagen": "Señora palmeando tortillas junto a un comal",
        "ejemplo": [
          "These tortillas are made by hand.",
          "Estas tortillas se hacen a mano."
        ]
      },
      {
        "en": "Plastic is recycled here.",
        "es": "aquí se recicla el plástico",
        "imagen": "Botellas de plástico en una planta de reciclaje",
        "ejemplo": [
          "Plastic is recycled at this center.",
          "En este centro se recicla el plástico."
        ]
      },
      {
        "en": "No pets are allowed.",
        "es": "no se permiten mascotas",
        "imagen": "Perro mirando triste una puerta cerrada",
        "ejemplo": [
          "No pets are allowed in the restaurant.",
          "No se permiten mascotas en el restaurante."
        ]
      }
    ],
    "grupos": [
      {
        "id": "procesos",
        "titulo": "Un proceso paso a paso",
        "icono": "🏭",
        "patron": [
          "First, the cacao is harvested.",
          "Then, the beans are roasted.",
          "Finally, the chocolate is packed."
        ],
        "palabras": [
          {
            "en": "The cacao is harvested.",
            "es": "se cosecha el cacao",
            "imagen": "Campesino cortando mazorcas de cacao en la selva",
            "ejemplo": [
              "First, the cacao is harvested by hand.",
              "Primero, el cacao se cosecha a mano."
            ]
          },
          {
            "en": "The beans are fermented.",
            "es": "se fermentan los granos",
            "imagen": "Granos de cacao fermentándose en cajas de madera",
            "ejemplo": [
              "Then, the beans are fermented for a week.",
              "Luego, los granos se fermentan una semana."
            ]
          },
          {
            "en": "The beans are roasted.",
            "es": "se tuestan los granos",
            "imagen": "Granos de cacao tostándose en un comal",
            "ejemplo": [
              "After that, the beans are roasted.",
              "Después, los granos se tuestan."
            ]
          },
          {
            "en": "The mixture is ground.",
            "es": "la mezcla se muele",
            "imagen": "Metate moliendo cacao con azúcar",
            "ejemplo": [
              "The mixture is ground into a paste.",
              "La mezcla se muele hasta hacer una pasta."
            ]
          },
          {
            "en": "The chocolate is packed.",
            "es": "el chocolate se empaca",
            "imagen": "Tablillas de chocolate siendo envueltas en papel",
            "ejemplo": [
              "Finally, the chocolate is packed and sold.",
              "Por último, el chocolate se empaca y se vende."
            ]
          },
          {
            "en": "The products are shipped.",
            "es": "los productos se envían",
            "imagen": "Camión cargando cajas en una bodega",
            "ejemplo": [
              "The products are shipped all over the country.",
              "Los productos se envían a todo el país."
            ]
          },
          {
            "en": "The quality is checked.",
            "es": "se revisa la calidad",
            "imagen": "Trabajadora revisando piezas en una fábrica",
            "ejemplo": [
              "The quality is checked at every stage.",
              "La calidad se revisa en cada etapa."
            ]
          },
          {
            "en": "The juice is bottled.",
            "es": "el jugo se embotella",
            "imagen": "Botellas de jugo pasando por una banda en una fábrica",
            "ejemplo": [
              "The orange juice is bottled in this factory.",
              "El jugo de naranja se embotella en esta fábrica."
            ]
          }
        ]
      },
      {
        "id": "letreros",
        "titulo": "Letreros y avisos",
        "icono": "🪧",
        "patron": [
          "… is not allowed.",
          "… are accepted.",
          "… is served from…"
        ],
        "palabras": [
          {
            "en": "Smoking is not allowed.",
            "es": "prohibido fumar",
            "imagen": "Cigarro tachado en un letrero sin texto",
            "ejemplo": [
              "Smoking is not allowed inside the building.",
              "Está prohibido fumar dentro del edificio."
            ]
          },
          {
            "en": "Lunch is served from one to three.",
            "es": "la comida se sirve de una a tres",
            "imagen": "Comedor con platos servidos y gente",
            "ejemplo": [
              "Lunch is served from one to three.",
              "La comida se sirve de una a tres."
            ]
          },
          {
            "en": "Tips are not included.",
            "es": "la propina no está incluida",
            "imagen": "Ticket de restaurante junto a unas monedas",
            "ejemplo": [
              "Tips are not included in the bill.",
              "La propina no está incluida en la cuenta."
            ]
          },
          {
            "en": "Reservations are required.",
            "es": "se requiere reservación",
            "imagen": "Persona haciendo una reservación por teléfono",
            "ejemplo": [
              "Reservations are required on weekends.",
              "Los fines de semana se requiere reservación."
            ]
          },
          {
            "en": "Photos are not permitted.",
            "es": "no se permiten fotos",
            "imagen": "Cámara tachada en un museo, sin texto",
            "ejemplo": [
              "Photos are not permitted in this room.",
              "En esta sala no se permiten fotos."
            ]
          },
          {
            "en": "English is spoken.",
            "es": "se habla inglés",
            "imagen": "Recepcionista sonriendo a turistas extranjeros",
            "ejemplo": [
              "English is spoken at the tourist office.",
              "En la oficina de turismo se habla inglés."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Tequila is made from blue agave.",
        "es": "El tequila se hace de agave azul."
      },
      {
        "en": "A lot of coffee is grown in Chiapas.",
        "es": "En Chiapas se cultiva mucho café."
      },
      {
        "en": "Spanish is spoken in more than twenty countries.",
        "es": "El español se habla en más de veinte países."
      },
      {
        "en": "Sorry, cards aren't accepted here. Only cash.",
        "es": "Perdón, aquí no se aceptan tarjetas. Solo efectivo."
      },
      {
        "en": "These tortillas are made by hand.",
        "es": "Estas tortillas se hacen a mano."
      },
      {
        "en": "First, the cacao is harvested by hand.",
        "es": "Primero, el cacao se cosecha a mano."
      },
      {
        "en": "Is breakfast included in the price?",
        "es": "¿El desayuno está incluido en el precio?"
      },
      {
        "en": "Smoking is not allowed inside the building.",
        "es": "Está prohibido fumar dentro del edificio."
      },
      {
        "en": "This table is made of pine wood.",
        "es": "Esta mesa es de madera de pino."
      },
      {
        "en": "Where are these shoes made? They're made in León.",
        "es": "¿Dónde se hacen estos zapatos? Se hacen en León.",
        "imagen": "Taller de zapatos con artesanos trabajando el cuero"
      }
    ],
    "frases": [
      {
        "en": "Mezcal is made in Oaxaca, and the agave is cooked underground for several days.",
        "es": "El mezcal se hace en Oaxaca y el agave se cuece bajo tierra varios días.",
        "imagen": "Horno de tierra con piñas de agave cocinándose"
      },
      {
        "en": "Most of the avocados that are eaten in the United States are grown in Michoacán.",
        "es": "La mayoría de los aguacates que se comen en Estados Unidos se cultivan en Michoacán.",
        "imagen": "Huerta de aguacates con trabajadores cosechando"
      },
      {
        "en": "Talavera pottery is painted by hand, and each piece is different.",
        "es": "La talavera se pinta a mano y cada pieza es diferente.",
        "imagen": "Artesana pintando un plato de talavera azul y blanco"
      },
      {
        "en": "In our factory, the bottles are washed, filled, and closed by machines.",
        "es": "En nuestra fábrica, las botellas se lavan, se llenan y se cierran con máquinas.",
        "imagen": "Botellas de vidrio en una línea de producción automatizada"
      },
      {
        "en": "The tickets are sold online, and they aren't sold at the door.",
        "es": "Los boletos se venden en línea y no se venden en la entrada.",
        "imagen": "Persona comprando boletos en su celular"
      },
      {
        "en": "The garbage is collected on Mondays and Thursdays in my neighborhood.",
        "es": "En mi colonia la basura se recoge los lunes y los jueves.",
        "imagen": "Camión de basura recogiendo bolsas en una calle"
      },
      {
        "en": "How is chocolate made? First, the cacao beans are fermented and dried.",
        "es": "¿Cómo se hace el chocolate? Primero, los granos de cacao se fermentan y se secan.",
        "imagen": "Granos de cacao secándose al sol en un patio"
      },
      {
        "en": "This bridge is used by more than fifty thousand cars every day.",
        "es": "Este puente lo usan más de cincuenta mil carros al día.",
        "imagen": "Puente enorme con mucho tráfico al atardecer"
      },
      {
        "en": "The patients are checked by a nurse before they see the doctor.",
        "es": "Una enfermera revisa a los pacientes antes de que vean al doctor.",
        "imagen": "Enfermera tomando la presión a un paciente"
      },
      {
        "en": "Our clothes are made of organic cotton and are produced in Mexico.",
        "es": "Nuestra ropa es de algodón orgánico y se produce en México.",
        "imagen": "Taller de costura con telas de algodón"
      }
    ],
    "listening": [
      {
        "audio": "These blankets are made by hand in a small village in Oaxaca.",
        "pregunta": "¿Cómo se hacen las cobijas?",
        "opciones": [
          "A mano",
          "Con máquinas",
          "En China",
          "En la ciudad"
        ]
      },
      {
        "audio": "Breakfast is served from seven to ten, and lunch is served from one to four.",
        "pregunta": "¿A qué hora termina el desayuno?",
        "opciones": [
          "A las diez",
          "A las siete",
          "A la una",
          "A las cuatro"
        ]
      },
      {
        "audio": "Excuse me, are dogs allowed in the park? Yes, but they must be on a leash.",
        "pregunta": "¿Se permiten perros en el parque?",
        "opciones": [
          "Sí, con correa",
          "No",
          "Solo los pequeños",
          "Solo en la mañana"
        ]
      },
      {
        "audio": "Most of the silver in this market is produced in Taxco.",
        "pregunta": "¿Dónde se produce la plata?",
        "opciones": [
          "En Taxco",
          "En Oaxaca",
          "En el mercado",
          "En Puebla"
        ]
      },
      {
        "audio": "The water is cleaned in three stages before it is sent to the houses.",
        "pregunta": "¿En cuántas etapas se limpia el agua?",
        "opciones": [
          "Tres",
          "Dos",
          "Cuatro",
          "Una"
        ]
      }
    ],
    "lectura": {
      "titulo": "From the field to your cup",
      "texto": "Have you ever wondered how your coffee is made? In the mountains of Chiapas and Veracruz, coffee plants are grown in the shade of taller trees. The coffee cherries are picked by hand when they are red, usually between November and March. Then the skin of the cherries is removed, and the beans are washed with water. After that, they are dried in the sun for about ten days. They are turned several times a day, so that they dry evenly. Next, the beans are sorted, and the best ones are selected for export. Before the coffee is sold, the beans are roasted at a high temperature, which gives them their brown color and their famous smell. Finally, the coffee is ground and packed. So next time you drink a cup, remember: a lot of work is done before it reaches your table!",
      "preguntas": [
        {
          "pregunta": "¿Cómo se cosechan las cerezas del café?",
          "opciones": [
            "A mano",
            "Con máquinas",
            "Con drones",
            "Se caen solas"
          ]
        },
        {
          "pregunta": "¿Cuánto tiempo se secan los granos al sol?",
          "opciones": [
            "Unos diez días",
            "Un día",
            "Un mes",
            "Tres horas"
          ]
        },
        {
          "pregunta": "¿Por qué se voltean los granos varias veces al día?",
          "opciones": [
            "Para que se sequen parejo",
            "Para que no se los coman los pájaros",
            "Para tostarlos",
            "Para limpiarlos"
          ]
        },
        {
          "pregunta": "¿Qué le da al café su color café?",
          "opciones": [
            "El tostado",
            "El secado",
            "El lavado",
            "El molido"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con la voz pasiva.",
        "pregunta": "Coffee ___ (grow) in Veracruz.",
        "respuestas": [
          "is grown"
        ]
      },
      {
        "instruccion": "Completa con la voz pasiva.",
        "pregunta": "These shoes ___ (make) in León.",
        "respuestas": [
          "are made"
        ]
      },
      {
        "instruccion": "Completa con la voz pasiva.",
        "pregunta": "English ___ (speak) all over the world.",
        "respuestas": [
          "is spoken"
        ]
      },
      {
        "instruccion": "Completa con la voz pasiva (negativo).",
        "pregunta": "Credit cards ___ (not accept) here.",
        "respuestas": [
          "aren't accepted",
          "are not accepted"
        ]
      },
      {
        "instruccion": "Completa con of o from.",
        "pregunta": "This chair is made ___ plastic.",
        "respuestas": [
          "of"
        ]
      },
      {
        "instruccion": "Completa con by.",
        "pregunta": "The museum is visited ___ many tourists.",
        "respuestas": [
          "by"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Aquí se habla español.",
        "respuestas": [
          "Spanish is spoken here"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿El desayuno está incluido?",
        "respuestas": [
          "Is breakfast included"
        ]
      },
      {
        "instruccion": "Pasa a voz pasiva.",
        "pregunta": "They make tortillas by hand. → Tortillas ___ by hand.",
        "respuestas": [
          "are made"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "The bread is bake every morning.",
        "respuestas": [
          "The bread is baked every morning"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "Tequila ___ in Jalisco.",
        "opciones": [
          "is produced",
          "produces",
          "is produce",
          "are produced"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "These toys ___ in China.",
        "opciones": [
          "are made",
          "is made",
          "made",
          "are make"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ tips included in the bill?",
        "opciones": [
          "Are",
          "Is",
          "Do",
          "Does"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The ring is made ___ gold.",
        "opciones": [
          "of",
          "by",
          "from in",
          "with of"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Pasiva de «People eat a lot of tacos in Mexico»:",
        "opciones": [
          "A lot of tacos are eaten in Mexico.",
          "A lot of tacos eat in Mexico.",
          "A lot of tacos is eaten in Mexico.",
          "A lot of tacos are ate in Mexico."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«No pets are allowed» significa:",
        "opciones": [
          "No se permiten mascotas",
          "Se venden mascotas",
          "Las mascotas son bienvenidas",
          "Hay muchas mascotas"
        ]
      },
      {
        "tipo": "listening",
        "audio": "In this region, sugar cane is cut by hand and taken to the factory by truck.",
        "pregunta": "¿Cómo se lleva la caña a la fábrica?",
        "opciones": [
          "En camión",
          "En tren",
          "A mano",
          "En barco"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Sorry, photos are not permitted in this part of the museum.",
        "pregunta": "¿Qué no se permite?",
        "opciones": [
          "Tomar fotos",
          "Comer",
          "Hablar",
          "Tocar las obras"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: El café se cultiva en Chiapas.",
        "respuestas": [
          "Coffee is grown in Chiapas"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Está hecho de madera.",
        "respuestas": [
          "It's made of wood",
          "It is made of wood"
        ]
      }
    ]
  },
  {
    "id": "b1-12",
    "num": 12,
    "titulo": "Voz pasiva: pasado simple",
    "contexto": "Inventos y descubrimientos",
    "explicacion": {
      "es": [
        "La **voz pasiva en pasado** se forma con ***was / were*** + **participio**: *The telephone **was invented** in 1876.* (El teléfono fue inventado en 1876.) *The pyramids **were built** about two thousand years ago.*",
        "Es perfecta para hablar de **historia, inventos y descubrimientos**, porque lo importante es **el invento**, no siempre la persona: *Penicillin **was discovered** by accident.*",
        "Para decir quién lo hizo se usa ***by***: *Color television **was invented by** a Mexican engineer, Guillermo González Camarena.* *Was* con singular, *were* con plural.",
        "**Negativo:** ***wasn't / weren't*** + participio: *The city **wasn't founded** by the Spanish.* **Preguntas:** ***When was** it **built**? **Who was** it **painted by**?* (¿Quién lo pintó?)"
      ],
      "tabla": {
        "columnas": [
          "Activa",
          "Pasiva"
        ],
        "filas": [
          [
            "Edison invented the light bulb.",
            "The light bulb was invented by Edison."
          ],
          [
            "The Mayans built Chichén Itzá.",
            "Chichén Itzá was built by the Mayans."
          ],
          [
            "Somebody stole my bike.",
            "My bike was stolen."
          ],
          [
            "They didn't finish the bridge.",
            "The bridge wasn't finished."
          ],
          [
            "When did they discover it?",
            "When was it discovered?"
          ]
        ]
      },
      "ojo": [
        "*Was* para singular, *were* para plural: *The pyramids **were** built* ✅, no *was built* ❌.",
        "***Was born*** es pasiva: *I **was born** in 1990* (nací).",
        "Muchos participios son irregulares: *built, stolen, written, found, made, taken, given, chosen, broken*.",
        "Cuando no importa quién: *My car **was stolen** last night* (no sabemos quién).",
        "En noticias es muy común: *Two people **were injured** in the accident. The thief **was arrested** this morning.*"
      ],
      "en": [
        "The passive in the past: was or were plus the participle. The telephone was invented in 1876.",
        "We use it for history and discoveries: Penicillin was discovered by accident.",
        "With by: Color television was invented by a Mexican engineer.",
        "Questions: When was it built? Who was it painted by?"
      ]
    },
    "vocabulario": [
      {
        "en": "The telephone was invented in 1876.",
        "es": "el teléfono fue inventado en 1876",
        "imagen": "Teléfono antiguo de madera con manivela",
        "ejemplo": [
          "The telephone was invented in 1876.",
          "El teléfono fue inventado en 1876."
        ]
      },
      {
        "en": "Penicillin was discovered by accident.",
        "es": "la penicilina se descubrió por accidente",
        "imagen": "Científico mirando una caja de Petri con moho",
        "ejemplo": [
          "Penicillin was discovered by accident in 1928.",
          "La penicilina se descubrió por accidente en 1928."
        ]
      },
      {
        "en": "The pyramids were built by the Mayans.",
        "es": "las pirámides fueron construidas por los mayas",
        "imagen": "Pirámide maya en medio de la selva",
        "ejemplo": [
          "These pyramids were built by the Mayans.",
          "Estas pirámides fueron construidas por los mayas."
        ]
      },
      {
        "en": "Color TV was invented by a Mexican.",
        "es": "la tele a color la inventó un mexicano",
        "imagen": "Televisión antigua mostrando colores brillantes",
        "ejemplo": [
          "A color TV system was invented by Guillermo González Camarena.",
          "Guillermo González Camarena inventó un sistema de televisión a color."
        ]
      },
      {
        "en": "The city was founded in 1521.",
        "es": "la ciudad fue fundada en 1521",
        "imagen": "Mapa antiguo de una ciudad colonial",
        "ejemplo": [
          "The city was founded by the Spanish in 1531.",
          "La ciudad fue fundada por los españoles en 1531."
        ]
      },
      {
        "en": "My bike was stolen.",
        "es": "me robaron la bici",
        "imagen": "Candado roto junto a un poste sin bicicleta",
        "ejemplo": [
          "My bike was stolen outside the gym.",
          "Me robaron la bici afuera del gimnasio."
        ]
      },
      {
        "en": "The book was written in 1967.",
        "es": "el libro fue escrito en 1967",
        "imagen": "Máquina de escribir antigua con hojas mecanografiadas",
        "ejemplo": [
          "One Hundred Years of Solitude was written in 1967.",
          "Cien años de soledad fue escrito en 1967."
        ]
      },
      {
        "en": "The first car was made in Germany.",
        "es": "el primer carro se fabricó en Alemania",
        "imagen": "Automóvil antiguo de tres ruedas en un museo",
        "ejemplo": [
          "The first car was made in Germany in 1886.",
          "El primer carro se fabricó en Alemania en 1886."
        ]
      },
      {
        "en": "Two people were injured.",
        "es": "dos personas resultaron heridas",
        "imagen": "Ambulancia con paramédicos atendiendo en la calle",
        "ejemplo": [
          "Two people were injured in the accident.",
          "Dos personas resultaron heridas en el accidente."
        ]
      },
      {
        "en": "The thief was arrested.",
        "es": "arrestaron al ladrón",
        "imagen": "Policía llevando a un hombre esposado",
        "ejemplo": [
          "The thief was arrested this morning.",
          "Arrestaron al ladrón esta mañana."
        ]
      },
      {
        "en": "The vaccine was developed in a year.",
        "es": "la vacuna se desarrolló en un año",
        "imagen": "Científica trabajando con tubos de ensayo en un laboratorio",
        "ejemplo": [
          "The vaccine was developed in less than a year.",
          "La vacuna se desarrolló en menos de un año."
        ]
      },
      {
        "en": "Chocolate was first drunk in Mexico.",
        "es": "el chocolate se bebió primero en México",
        "imagen": "Jícara con chocolate espumoso y granos de cacao",
        "ejemplo": [
          "Chocolate was first drunk by the Olmecs and the Mayans.",
          "El chocolate lo bebieron primero los olmecas y los mayas."
        ]
      },
      {
        "en": "The bridge was opened in 2015.",
        "es": "el puente se inauguró en 2015",
        "imagen": "Puente moderno sobre un río con autos",
        "ejemplo": [
          "The bridge was opened in 2015.",
          "El puente se inauguró en 2015."
        ]
      },
      {
        "en": "The painting was sold for millions.",
        "es": "el cuadro se vendió en millones",
        "imagen": "Subasta de arte con un cuadro en el escenario",
        "ejemplo": [
          "The painting was sold for ten million dollars.",
          "El cuadro se vendió en diez millones de dólares."
        ]
      },
      {
        "en": "America was reached in 1492.",
        "es": "a América se llegó en 1492",
        "imagen": "Carabelas antiguas navegando en el mar",
        "ejemplo": [
          "The Caribbean was reached by Columbus in 1492.",
          "Colón llegó al Caribe en 1492."
        ]
      },
      {
        "en": "The game was canceled.",
        "es": "se canceló el partido",
        "imagen": "Estadio vacío bajo la lluvia",
        "ejemplo": [
          "The game was canceled because of the storm.",
          "El partido se canceló por la tormenta."
        ]
      }
    ],
    "grupos": [
      {
        "id": "inventos",
        "titulo": "Inventos",
        "icono": "💡",
        "patron": [
          "… was invented in…",
          "… was designed by…",
          "… were first used…"
        ],
        "palabras": [
          {
            "en": "the light bulb",
            "es": "el foco",
            "imagen": "Foco antiguo encendido con filamento visible",
            "ejemplo": [
              "The light bulb was invented in the 1870s.",
              "El foco fue inventado en la década de 1870."
            ]
          },
          {
            "en": "the airplane",
            "es": "el avión",
            "imagen": "Avión antiguo de dos alas volando sobre la playa",
            "ejemplo": [
              "The first airplane was flown in 1903.",
              "El primer avión voló en 1903."
            ]
          },
          {
            "en": "the internet",
            "es": "internet",
            "imagen": "Cables de red conectados a un servidor con luces",
            "ejemplo": [
              "The internet was created to share information between universities.",
              "Internet se creó para compartir información entre universidades."
            ]
          },
          {
            "en": "the printing press",
            "es": "la imprenta",
            "imagen": "Imprenta antigua de madera con hojas impresas",
            "ejemplo": [
              "The printing press was invented in the fifteenth century.",
              "La imprenta fue inventada en el siglo quince."
            ]
          },
          {
            "en": "the wheel",
            "es": "la rueda",
            "imagen": "Rueda antigua de madera",
            "ejemplo": [
              "The wheel was invented more than five thousand years ago.",
              "La rueda se inventó hace más de cinco mil años."
            ]
          },
          {
            "en": "the contraceptive pill",
            "es": "la píldora anticonceptiva",
            "imagen": "Laboratorio químico de los años cincuenta",
            "ejemplo": [
              "A key part of the pill was developed by a Mexican chemist, Luis Miramontes.",
              "Una parte clave de la píldora la desarrolló un químico mexicano, Luis Miramontes."
            ]
          },
          {
            "en": "the smartphone",
            "es": "el teléfono inteligente",
            "imagen": "Celular moderno con la pantalla encendida",
            "ejemplo": [
              "The first smartphones were sold in the 1990s.",
              "Los primeros teléfonos inteligentes se vendieron en los noventa."
            ]
          },
          {
            "en": "the bicycle",
            "es": "la bicicleta",
            "imagen": "Bicicleta antigua de rueda grande",
            "ejemplo": [
              "The bicycle was invented in Europe in the nineteenth century.",
              "La bicicleta se inventó en Europa en el siglo diecinueve."
            ]
          }
        ]
      },
      {
        "id": "historia",
        "titulo": "Historia y noticias",
        "icono": "📜",
        "patron": [
          "… was built…",
          "… were found…",
          "… was destroyed…"
        ],
        "palabras": [
          {
            "en": "was built",
            "es": "fue construido",
            "imagen": "Catedral colonial de piedra con torres",
            "ejemplo": [
              "The cathedral was built over two hundred years.",
              "La catedral se construyó a lo largo de doscientos años."
            ]
          },
          {
            "en": "were found",
            "es": "fueron encontrados",
            "imagen": "Arqueólogos excavando objetos antiguos",
            "ejemplo": [
              "Ancient objects were found under the city.",
              "Se encontraron objetos antiguos bajo la ciudad."
            ]
          },
          {
            "en": "was destroyed",
            "es": "fue destruido",
            "imagen": "Ruinas de un edificio después de un terremoto",
            "ejemplo": [
              "The old market was destroyed by a fire.",
              "El mercado viejo fue destruido por un incendio."
            ]
          },
          {
            "en": "was elected",
            "es": "fue elegido",
            "imagen": "Personas votando en una casilla",
            "ejemplo": [
              "The new mayor was elected last Sunday.",
              "El nuevo alcalde fue elegido el domingo pasado."
            ]
          },
          {
            "en": "was rescued",
            "es": "fue rescatado",
            "imagen": "Rescatistas sacando a un perro de un río",
            "ejemplo": [
              "The dog was rescued by firefighters.",
              "Los bomberos rescataron al perro."
            ]
          },
          {
            "en": "were evacuated",
            "es": "fueron evacuados",
            "imagen": "Personas saliendo ordenadamente de un edificio",
            "ejemplo": [
              "Hundreds of people were evacuated after the earthquake.",
              "Cientos de personas fueron evacuadas tras el sismo."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "The telephone was invented in 1876.",
        "es": "El teléfono fue inventado en 1876."
      },
      {
        "en": "Penicillin was discovered by accident in 1928.",
        "es": "La penicilina se descubrió por accidente en 1928."
      },
      {
        "en": "These pyramids were built by the Mayans.",
        "es": "Estas pirámides fueron construidas por los mayas."
      },
      {
        "en": "My bike was stolen outside the gym.",
        "es": "Me robaron la bici afuera del gimnasio."
      },
      {
        "en": "Two people were injured in the accident.",
        "es": "Dos personas resultaron heridas en el accidente."
      },
      {
        "en": "The thief was arrested this morning.",
        "es": "Arrestaron al ladrón esta mañana."
      },
      {
        "en": "When was this church built?",
        "es": "¿Cuándo se construyó esta iglesia?",
        "imagen": "Iglesia antigua de piedra en una plaza de pueblo"
      },
      {
        "en": "The dog was rescued by firefighters.",
        "es": "Los bomberos rescataron al perro."
      },
      {
        "en": "The game was canceled because of the storm.",
        "es": "El partido se canceló por la tormenta."
      },
      {
        "en": "The new mayor was elected last Sunday.",
        "es": "El nuevo alcalde fue elegido el domingo pasado."
      }
    ],
    "frases": [
      {
        "en": "Chichén Itzá was built by the Mayans more than a thousand years ago, and it was chosen as one of the new wonders of the world.",
        "es": "Chichén Itzá fue construida por los mayas hace más de mil años y fue elegida una de las nuevas maravillas del mundo.",
        "imagen": "Pirámide de Chichén Itzá con turistas al frente"
      },
      {
        "en": "A color television system was invented by Guillermo González Camarena when he was only twenty-three years old.",
        "es": "Guillermo González Camarena inventó un sistema de televisión a color cuando tenía solo veintitrés años.",
        "imagen": "Joven ingeniero trabajando con aparatos electrónicos antiguos"
      },
      {
        "en": "The old train station was closed in the nineties, but it was turned into a museum in 2010.",
        "es": "La vieja estación de tren se cerró en los noventa, pero se convirtió en museo en 2010.",
        "imagen": "Estación de tren antigua convertida en museo con visitantes"
      },
      {
        "en": "The famous mural was painted by Diego Rivera, and it was finished in 1935.",
        "es": "El famoso mural fue pintado por Diego Rivera y se terminó en 1935.",
        "imagen": "Mural colorido en la pared de un palacio con visitantes"
      },
      {
        "en": "Hundreds of trees were planted in the park after the fire.",
        "es": "Se plantaron cientos de árboles en el parque después del incendio.",
        "imagen": "Voluntarios plantando árboles en un parque"
      },
      {
        "en": "The letter was written in 1910, but it was found only last year inside a wall.",
        "es": "La carta fue escrita en 1910, pero se encontró apenas el año pasado dentro de una pared.",
        "imagen": "Carta antigua amarillenta encontrada entre ladrillos"
      },
      {
        "en": "Nobody was hurt, but three cars were damaged in the storm.",
        "es": "Nadie salió herido, pero tres carros se dañaron en la tormenta.",
        "imagen": "Carro con una rama caída encima después de una tormenta"
      },
      {
        "en": "The first vaccine was developed by Edward Jenner at the end of the eighteenth century.",
        "es": "La primera vacuna fue desarrollada por Edward Jenner a finales del siglo dieciocho.",
        "imagen": "Ilustración de un médico antiguo en su consultorio"
      },
      {
        "en": "Were you invited to the wedding? No, I wasn't, and I was a bit sad about it.",
        "es": "¿Te invitaron a la boda? No, y me puse un poco triste.",
        "imagen": "Persona mirando fotos de una boda en su celular"
      },
      {
        "en": "The National University was founded in 1910, and its main campus was built in the 1950s.",
        "es": "La Universidad Nacional se fundó en 1910 y su campus principal se construyó en los años cincuenta.",
        "imagen": "Biblioteca con un gran mural de mosaicos en un campus universitario"
      }
    ],
    "listening": [
      {
        "audio": "This bridge was built in 1890, and it was repaired last year.",
        "pregunta": "¿Cuándo se construyó el puente?",
        "opciones": [
          "En 1890",
          "En 1980",
          "El año pasado",
          "En 1990"
        ]
      },
      {
        "audio": "My car was stolen last night, but it was found this morning near the stadium.",
        "pregunta": "¿Dónde encontraron el carro?",
        "opciones": [
          "Cerca del estadio",
          "En el centro",
          "En otra ciudad",
          "No lo encontraron"
        ]
      },
      {
        "audio": "The concert was canceled because the singer was sick.",
        "pregunta": "¿Por qué se canceló el concierto?",
        "opciones": [
          "El cantante estaba enfermo",
          "Llovía",
          "No vendieron boletos",
          "Hubo un accidente"
        ]
      },
      {
        "audio": "Who was this house designed by? It was designed by a famous architect, Luis Barragán.",
        "pregunta": "¿Quién diseñó la casa?",
        "opciones": [
          "Luis Barragán",
          "Diego Rivera",
          "Frida Kahlo",
          "Un ingeniero desconocido"
        ]
      },
      {
        "audio": "More than two hundred people were rescued after the flood.",
        "pregunta": "¿Cuántas personas fueron rescatadas?",
        "opciones": [
          "Más de doscientas",
          "Veinte",
          "Dos mil",
          "Doce"
        ]
      }
    ],
    "lectura": {
      "titulo": "A Mexican invention",
      "texto": "Not many people know that an important part of color television was invented in Mexico. Guillermo González Camarena was born in Guadalajara in 1917. As a child, he was fascinated by electricity, and his first radio was built by himself when he was only twelve. In 1940, when he was twenty-three, his color TV system was patented in Mexico, and two years later it was patented in the United States too. His invention was used in many countries, and his later systems were used by Mexican TV for decades. Later, González Camarena was given many prizes, and a TV channel in Mexico was named after him. Sadly, he was killed in a car accident in 1965. Today, he is remembered as one of the most important Mexican inventors of the twentieth century.",
      "preguntas": [
        {
          "pregunta": "¿Dónde nació González Camarena?",
          "opciones": [
            "En Guadalajara",
            "En la Ciudad de México",
            "En Estados Unidos",
            "En Monterrey"
          ]
        },
        {
          "pregunta": "¿Qué construyó a los doce años?",
          "opciones": [
            "Su primer radio",
            "Una televisión",
            "Un carro",
            "Una cámara"
          ]
        },
        {
          "pregunta": "¿Cuándo se patentó su invento en Estados Unidos?",
          "opciones": [
            "Dos años después que en México",
            "Un año antes que en México",
            "El mismo año",
            "Nunca se patentó allá"
          ]
        },
        {
          "pregunta": "¿Cómo murió?",
          "opciones": [
            "En un accidente de carro",
            "De una enfermedad",
            "De viejo",
            "En un accidente de avión"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con was o were.",
        "pregunta": "The pyramids ___ built centuries ago.",
        "respuestas": [
          "were"
        ]
      },
      {
        "instruccion": "Completa con was o were.",
        "pregunta": "The telephone ___ invented in 1876.",
        "respuestas": [
          "was"
        ]
      },
      {
        "instruccion": "Completa con la pasiva en pasado.",
        "pregunta": "My wallet ___ (steal) on the bus.",
        "respuestas": [
          "was stolen"
        ]
      },
      {
        "instruccion": "Completa con la pasiva en pasado.",
        "pregunta": "This book ___ (write) in 1967.",
        "respuestas": [
          "was written"
        ]
      },
      {
        "instruccion": "Completa con la pasiva en pasado (negativo).",
        "pregunta": "The tickets ___ (not sell) online.",
        "respuestas": [
          "weren't sold",
          "were not sold"
        ]
      },
      {
        "instruccion": "Completa la pregunta.",
        "pregunta": "When ___ the bridge built?",
        "respuestas": [
          "was"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Me robaron el celular.",
        "respuestas": [
          "My phone was stolen",
          "My cell phone was stolen",
          "Someone stole my phone"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Fue construido en 1900.",
        "respuestas": [
          "It was built in 1900"
        ]
      },
      {
        "instruccion": "Pasa a voz pasiva.",
        "pregunta": "Diego Rivera painted this mural. → This mural ___ by Diego Rivera.",
        "respuestas": [
          "was painted"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "The church was build in 1750.",
        "respuestas": [
          "The church was built in 1750"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "The light bulb ___ in the nineteenth century.",
        "opciones": [
          "was invented",
          "invented",
          "were invented",
          "is invent"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "These houses ___ in 1950.",
        "opciones": [
          "were built",
          "was built",
          "built",
          "were build"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The thief ___ by the police.",
        "opciones": [
          "was arrested",
          "arrested",
          "were arrested",
          "is arrest"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Who ___ «Don Quixote» written by?",
        "opciones": [
          "was",
          "did",
          "were",
          "is it"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Pasiva de «They canceled the flight»:",
        "opciones": [
          "The flight was canceled.",
          "The flight canceled.",
          "The flight were canceled.",
          "The flight is cancel."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I ___ born in Veracruz.",
        "opciones": [
          "was",
          "were",
          "am",
          "did"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The museum was opened in 1964, and it was designed by Pedro Ramírez Vázquez.",
        "pregunta": "¿Cuándo se abrió el museo?",
        "opciones": [
          "En 1964",
          "En 1946",
          "En 1994",
          "En 1964 y se cerró después"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Nobody was injured, but the building was badly damaged by the earthquake.",
        "pregunta": "¿Qué dañó el edificio?",
        "opciones": [
          "El sismo",
          "Un incendio",
          "Una inundación",
          "Un accidente"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¿Cuándo se construyó?",
        "respuestas": [
          "When was it built"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: fue inventado",
        "respuestas": [
          "was invented",
          "it was invented"
        ]
      }
    ]
  },
  {
    "id": "b1-13",
    "num": 13,
    "titulo": "Oraciones de relativo especificativas (who, which, that, where, whose)",
    "contexto": "Definir personas, objetos y lugares",
    "explicacion": {
      "es": [
        "Las **oraciones de relativo** dan información para **identificar** de qué persona, cosa o lugar hablamos. Equivalen a ***que, quien, donde, cuyo*** del español: *The woman **who** lives next door is a doctor.* (La mujer que vive al lado es doctora.)",
        "***Who*** para **personas**, ***which*** para **cosas y animales**, y ***that*** para **los dos** (muy común al hablar): *A chef is a person **who / that** cooks in a restaurant. This is the phone **which / that** I bought.*",
        "***Where*** para **lugares** (*donde*): *That's the café **where** we met.* ***Whose*** para **posesión** (*cuyo / de quien*): *That's the man **whose** car was stolen.* (Ese es el señor al que le robaron el carro.)",
        "Si el relativo es el **objeto** del verbo, se puede **omitir**: *The movie (**that**) we saw was great.* Pero no si es el sujeto: *The man **who** called you* (no se puede quitar *who*)."
      ],
      "tabla": {
        "columnas": [
          "Relativo",
          "Para",
          "Ejemplo"
        ],
        "filas": [
          [
            "who / that",
            "personas",
            "The teacher who helped me is retiring."
          ],
          [
            "which / that",
            "cosas, animales",
            "The bus that goes downtown is number 5."
          ],
          [
            "where",
            "lugares",
            "This is the house where I grew up."
          ],
          [
            "whose",
            "posesión",
            "I have a friend whose father is a pilot."
          ],
          [
            "(sin relativo)",
            "objeto",
            "The book (that) you lent me is great."
          ]
        ]
      },
      "ojo": [
        "No repitas el pronombre: *The man who **he** lives here* ❌ → *The man who lives here* ✅. *The car that I bought **it*** ❌ → *The car that I bought* ✅.",
        "***Which*** no se usa para personas: *the girl **who*** ✅, no *the girl which* ❌.",
        "***Whose*** no es *who's*: *the woman **whose** son is a singer* (cuyo hijo) / ***who's*** = *who is*.",
        "*Where* necesita un **lugar** y una oración completa: *the town **where** I was born*. Alternativa: *the town (that) I was born **in***.",
        "Para **definir palabras** es muy útil: *A dentist is someone who… / A fridge is a machine that… / A library is a place where…*"
      ],
      "en": [
        "Relative clauses identify people, things and places: The woman who lives next door is a doctor.",
        "Who is for people, which is for things, and that is for both.",
        "Where is for places: That's the café where we met. Whose is for possession: That's the man whose car was stolen.",
        "The movie that we saw was great. We can omit that here."
      ]
    },
    "vocabulario": [
      {
        "en": "a person who cooks",
        "es": "una persona que cocina",
        "imagen": "Chef preparando un platillo en una cocina profesional",
        "ejemplo": [
          "A chef is a person who cooks in a restaurant.",
          "Un chef es una persona que cocina en un restaurante."
        ]
      },
      {
        "en": "the woman who lives next door",
        "es": "la mujer que vive al lado",
        "imagen": "Vecina saludando desde su puerta",
        "ejemplo": [
          "The woman who lives next door is a doctor.",
          "La mujer que vive al lado es doctora."
        ]
      },
      {
        "en": "a machine that washes clothes",
        "es": "una máquina que lava ropa",
        "imagen": "Lavadora con ropa girando",
        "ejemplo": [
          "A washing machine is a machine that washes clothes.",
          "Una lavadora es una máquina que lava ropa."
        ]
      },
      {
        "en": "the place where we met",
        "es": "el lugar donde nos conocimos",
        "imagen": "Pareja tomada de la mano frente a una cafetería",
        "ejemplo": [
          "This is the place where we met.",
          "Este es el lugar donde nos conocimos."
        ]
      },
      {
        "en": "the man whose car was stolen",
        "es": "el señor al que le robaron el carro",
        "imagen": "Hombre preocupado hablando con un policía en la calle",
        "ejemplo": [
          "That's the man whose car was stolen.",
          "Ese es el señor al que le robaron el carro."
        ]
      },
      {
        "en": "the book that you lent me",
        "es": "el libro que me prestaste",
        "imagen": "Persona leyendo un libro prestado en un sillón",
        "ejemplo": [
          "The book you lent me is fantastic.",
          "El libro que me prestaste es fantástico."
        ]
      },
      {
        "en": "the town where I was born",
        "es": "el pueblo donde nací",
        "imagen": "Pueblo pequeño con iglesia y casas de colores",
        "ejemplo": [
          "This is the town where I was born.",
          "Este es el pueblo donde nací."
        ]
      },
      {
        "en": "the people who work here",
        "es": "la gente que trabaja aquí",
        "imagen": "Equipo de trabajo sonriendo en una oficina",
        "ejemplo": [
          "The people who work here are very friendly.",
          "La gente que trabaja aquí es muy amable."
        ]
      },
      {
        "en": "the bus that goes downtown",
        "es": "el camión que va al centro",
        "imagen": "Autobús urbano en una parada",
        "ejemplo": [
          "Take the bus that goes downtown.",
          "Toma el camión que va al centro."
        ]
      },
      {
        "en": "a friend whose dad is a pilot",
        "es": "un amigo cuyo papá es piloto",
        "imagen": "Piloto con uniforme saludando a su hijo",
        "ejemplo": [
          "I have a friend whose dad is a pilot.",
          "Tengo un amigo cuyo papá es piloto."
        ]
      },
      {
        "en": "the restaurant where we had dinner",
        "es": "el restaurante donde cenamos",
        "imagen": "Restaurante acogedor con mesas iluminadas",
        "ejemplo": [
          "The restaurant where we had dinner was excellent.",
          "El restaurante donde cenamos estaba excelente."
        ]
      },
      {
        "en": "the movie we saw",
        "es": "la película que vimos",
        "imagen": "Amigos saliendo del cine comentando",
        "ejemplo": [
          "The movie we saw last night was boring.",
          "La película que vimos anoche estaba aburrida."
        ]
      },
      {
        "en": "an animal that lives in the sea",
        "es": "un animal que vive en el mar",
        "imagen": "Delfín saltando en el mar",
        "ejemplo": [
          "A dolphin is an animal that lives in the sea.",
          "El delfín es un animal que vive en el mar."
        ]
      },
      {
        "en": "someone who helps you",
        "es": "alguien que te ayuda",
        "imagen": "Vecino ayudando a una señora a cargar bolsas",
        "ejemplo": [
          "A good neighbor is someone who helps you.",
          "Un buen vecino es alguien que te ayuda."
        ]
      },
      {
        "en": "the girl whose name I forgot",
        "es": "la chica cuyo nombre olvidé",
        "imagen": "Persona apenada intentando recordar un nombre en una fiesta",
        "ejemplo": [
          "I met a girl whose name I forgot.",
          "Conocí a una chica cuyo nombre olvidé."
        ]
      },
      {
        "en": "the day when we arrived",
        "es": "el día que llegamos",
        "imagen": "Familia llegando con maletas a una casa de playa",
        "ejemplo": [
          "It rained on the day when we arrived.",
          "Llovió el día que llegamos."
        ]
      }
    ],
    "grupos": [
      {
        "id": "definiciones",
        "titulo": "Definir palabras",
        "icono": "📖",
        "patron": [
          "It's someone who…",
          "It's a thing that…",
          "It's a place where…"
        ],
        "palabras": [
          {
            "en": "a plumber",
            "es": "un plomero",
            "imagen": "Plomero arreglando una tubería debajo del fregadero",
            "ejemplo": [
              "A plumber is someone who fixes pipes.",
              "Un plomero es alguien que arregla tuberías."
            ]
          },
          {
            "en": "a vet",
            "es": "un veterinario",
            "imagen": "Veterinaria revisando a un perro",
            "ejemplo": [
              "A vet is a doctor who takes care of animals.",
              "Un veterinario es un doctor que cuida animales."
            ]
          },
          {
            "en": "a charger",
            "es": "un cargador",
            "imagen": "Cargador conectado a un celular",
            "ejemplo": [
              "A charger is a thing that gives power to your phone.",
              "Un cargador es algo que le da energía a tu celular."
            ]
          },
          {
            "en": "a corkscrew",
            "es": "un sacacorchos",
            "imagen": "Sacacorchos abriendo una botella",
            "ejemplo": [
              "A corkscrew is a tool that opens bottles.",
              "Un sacacorchos es una herramienta que abre botellas."
            ]
          },
          {
            "en": "a pharmacy",
            "es": "una farmacia",
            "imagen": "Interior de una farmacia con estantes de medicinas",
            "ejemplo": [
              "A pharmacy is a place where you buy medicine.",
              "Una farmacia es un lugar donde compras medicinas."
            ]
          },
          {
            "en": "a gym",
            "es": "un gimnasio",
            "imagen": "Personas haciendo ejercicio en un gimnasio",
            "ejemplo": [
              "A gym is a place where people exercise.",
              "Un gimnasio es un lugar donde la gente hace ejercicio."
            ]
          },
          {
            "en": "an orphan",
            "es": "un huérfano",
            "imagen": "Niño mirando por la ventana de una casa hogar",
            "ejemplo": [
              "An orphan is a child whose parents have died.",
              "Un huérfano es un niño cuyos padres murieron."
            ]
          },
          {
            "en": "a landlord",
            "es": "un casero",
            "imagen": "Casero entregando llaves a un inquilino",
            "ejemplo": [
              "A landlord is a person who rents a house to you.",
              "Un casero es la persona que te renta una casa."
            ]
          }
        ]
      },
      {
        "id": "identificar",
        "titulo": "¿Cuál? ¿Quién?",
        "icono": "👉",
        "patron": [
          "The one who…",
          "The one that…",
          "The one with…"
        ],
        "palabras": [
          {
            "en": "the one who is wearing a hat",
            "es": "el que lleva sombrero",
            "imagen": "Grupo de personas, una con sombrero vaquero",
            "ejemplo": [
              "My brother is the one who is wearing a hat.",
              "Mi hermano es el que lleva sombrero."
            ]
          },
          {
            "en": "the one that is on sale",
            "es": "el que está en oferta",
            "imagen": "Dos chamarras en una tienda, una con etiqueta roja",
            "ejemplo": [
              "I want the one that is on sale.",
              "Quiero el que está en oferta."
            ]
          },
          {
            "en": "the guy who sits next to me",
            "es": "el chavo que se sienta junto a mí",
            "imagen": "Compañeros sentados lado a lado en una oficina",
            "ejemplo": [
              "The guy who sits next to me is from Colombia.",
              "El chavo que se sienta junto a mí es de Colombia."
            ]
          },
          {
            "en": "the house that has a red door",
            "es": "la casa que tiene la puerta roja",
            "imagen": "Fila de casas con una puerta roja destacada",
            "ejemplo": [
              "We live in the house that has a red door.",
              "Vivimos en la casa que tiene la puerta roja."
            ]
          },
          {
            "en": "the teacher whose class I like",
            "es": "el maestro cuya clase me gusta",
            "imagen": "Maestro dando una clase entretenida",
            "ejemplo": [
              "She's the teacher whose class I like the most.",
              "Es la maestra cuya clase me gusta más."
            ]
          },
          {
            "en": "the shop where I bought it",
            "es": "la tienda donde lo compré",
            "imagen": "Tienda de ropa pequeña con aparador",
            "ejemplo": [
              "I'll take it back to the shop where I bought it.",
              "Lo voy a devolver a la tienda donde lo compré."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "A chef is a person who cooks in a restaurant.",
        "es": "Un chef es una persona que cocina en un restaurante."
      },
      {
        "en": "The woman who lives next door is a doctor.",
        "es": "La mujer que vive al lado es doctora."
      },
      {
        "en": "This is the place where we met.",
        "es": "Este es el lugar donde nos conocimos."
      },
      {
        "en": "That's the man whose car was stolen.",
        "es": "Ese es el señor al que le robaron el carro."
      },
      {
        "en": "The book you lent me is fantastic.",
        "es": "El libro que me prestaste es fantástico."
      },
      {
        "en": "Take the bus that goes downtown.",
        "es": "Toma el camión que va al centro."
      },
      {
        "en": "I have a friend whose dad is a pilot.",
        "es": "Tengo un amigo cuyo papá es piloto."
      },
      {
        "en": "A pharmacy is a place where you buy medicine.",
        "es": "Una farmacia es un lugar donde compras medicinas."
      },
      {
        "en": "My brother is the one who is wearing a hat.",
        "es": "Mi hermano es el que lleva sombrero."
      },
      {
        "en": "The movie we saw last night was boring.",
        "es": "La película que vimos anoche estaba aburrida."
      }
    ],
    "frases": [
      {
        "en": "The town where my grandparents live is famous for its bread and its beautiful church.",
        "es": "El pueblo donde viven mis abuelos es famoso por su pan y su iglesia preciosa.",
        "imagen": "Pueblo con una iglesia antigua y una panadería tradicional"
      },
      {
        "en": "I've lost the keys that you gave me, and I can't find them anywhere.",
        "es": "Perdí las llaves que me diste y no las encuentro por ningún lado.",
        "imagen": "Persona buscando llaves en los cojines del sofá"
      },
      {
        "en": "The doctor who operated on my mother was very kind and patient.",
        "es": "El doctor que operó a mi mamá fue muy amable y paciente.",
        "imagen": "Doctor hablando con calma con una familia en el hospital"
      },
      {
        "en": "Do you remember the café where we used to study? It closed last month.",
        "es": "¿Te acuerdas del café donde estudiábamos? Cerró el mes pasado.",
        "imagen": "Café cerrado con las sillas sobre las mesas"
      },
      {
        "en": "I met a woman whose son plays for the national team.",
        "es": "Conocí a una señora cuyo hijo juega en la selección nacional.",
        "imagen": "Mamá orgullosa con la camiseta de su hijo en un estadio"
      },
      {
        "en": "The app that I downloaded yesterday helps you learn new words every day.",
        "es": "La app que descargué ayer te ayuda a aprender palabras nuevas cada día.",
        "imagen": "Persona usando una app de idiomas en el celular"
      },
      {
        "en": "People who exercise regularly usually sleep better.",
        "es": "La gente que hace ejercicio con regularidad normalmente duerme mejor.",
        "imagen": "Persona durmiendo tranquila con ropa deportiva al lado de la cama"
      },
      {
        "en": "The hospital where I was born was turned into a school.",
        "es": "El hospital donde nací se convirtió en escuela.",
        "imagen": "Edificio antiguo convertido en escuela con niños entrando"
      },
      {
        "en": "The students whose projects win will travel to the national competition.",
        "es": "Los estudiantes cuyos proyectos ganen viajarán al concurso nacional.",
        "imagen": "Estudiantes presentando un proyecto de ciencias"
      },
      {
        "en": "Is this the jacket you were looking for? Yes! Where did you find it?",
        "es": "¿Es esta la chamarra que estabas buscando? ¡Sí! ¿Dónde la encontraste?",
        "imagen": "Persona entregando una chamarra perdida a su amiga"
      }
    ],
    "listening": [
      {
        "audio": "The man who fixed my car charged me only five hundred pesos.",
        "pregunta": "¿Cuánto le cobró el señor?",
        "opciones": [
          "Quinientos pesos",
          "Cincuenta pesos",
          "Cinco mil pesos",
          "Nada"
        ]
      },
      {
        "audio": "This is the restaurant where my parents had their first date.",
        "pregunta": "¿Qué pasó en ese restaurante?",
        "opciones": [
          "Sus papás tuvieron su primera cita",
          "Se casaron sus papás",
          "Trabajó su papá",
          "Celebró su cumpleaños"
        ]
      },
      {
        "audio": "I have a neighbor whose dog barks all night.",
        "pregunta": "¿Qué problema tiene el vecino?",
        "opciones": [
          "Su perro ladra toda la noche",
          "Hace fiestas",
          "Pone música fuerte",
          "Estaciona mal su carro"
        ]
      },
      {
        "audio": "The phone that I bought last week has already stopped working.",
        "pregunta": "¿Qué pasó con el celular?",
        "opciones": [
          "Ya dejó de funcionar",
          "Se lo robaron",
          "Lo perdió",
          "Lo regaló"
        ]
      },
      {
        "audio": "Which one is your sister? The girl who's talking to the waiter.",
        "pregunta": "¿Quién es la hermana?",
        "opciones": [
          "La que habla con el mesero",
          "La que está bailando",
          "La que lleva sombrero",
          "La que está sentada sola"
        ]
      }
    ],
    "lectura": {
      "titulo": "The neighborhood I love",
      "texto": "I live in Coyoacán, a neighborhood in Mexico City that is full of history. The house where I live is more than a hundred years old, and it belongs to an old lady whose grandfather built it. Every morning I buy bread at a small bakery that has been open since 1950. The man who owns it always gives me an extra roll. Near my house there's a market where you can eat the best quesadillas in the city. On weekends I like walking to the main square, which is always full of musicians, families, and people who sell balloons and ice cream. Not far from there is the Blue House, the museum where Frida Kahlo was born and lived. Coyoacán is a place that you have to visit if you come to Mexico City.",
      "preguntas": [
        {
          "pregunta": "¿Quién construyó la casa donde vive?",
          "opciones": [
            "El abuelo de la dueña",
            "La dueña",
            "Frida Kahlo",
            "El panadero"
          ]
        },
        {
          "pregunta": "¿Desde cuándo está abierta la panadería?",
          "opciones": [
            "Desde 1950",
            "Desde hace cien años",
            "Desde 2015",
            "Desde 1900"
          ]
        },
        {
          "pregunta": "¿Qué se puede comer en el mercado?",
          "opciones": [
            "Las mejores quesadillas",
            "Pan dulce",
            "Helado",
            "Mariscos"
          ]
        },
        {
          "pregunta": "¿Qué es la Casa Azul?",
          "opciones": [
            "El museo donde vivió Frida Kahlo",
            "Una panadería",
            "Un mercado",
            "La casa del narrador"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con who, which, where o whose.",
        "pregunta": "A teacher is a person ___ helps students learn.",
        "respuestas": [
          "who",
          "that"
        ]
      },
      {
        "instruccion": "Completa con who, which, where o whose.",
        "pregunta": "This is the park ___ I played as a child.",
        "respuestas": [
          "where"
        ]
      },
      {
        "instruccion": "Completa con who, which, where o whose.",
        "pregunta": "I know a girl ___ mother is a famous singer.",
        "respuestas": [
          "whose"
        ]
      },
      {
        "instruccion": "Completa con who, which, where o whose.",
        "pregunta": "A fridge is a machine ___ keeps food cold.",
        "respuestas": [
          "which",
          "that"
        ]
      },
      {
        "instruccion": "Completa con who, which, where o whose.",
        "pregunta": "The people ___ live upstairs are very noisy.",
        "respuestas": [
          "who",
          "that"
        ]
      },
      {
        "instruccion": "Une las oraciones con that.",
        "pregunta": "I bought a jacket. It was on sale. → I bought a jacket ___ was on sale.",
        "respuestas": [
          "that",
          "which"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "el lugar donde nos conocimos",
        "respuestas": [
          "the place where we met"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "la mujer que vive al lado",
        "respuestas": [
          "the woman who lives next door",
          "the woman that lives next door"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Un plomero es alguien que arregla tuberías.",
        "respuestas": [
          "A plumber is someone who fixes pipes",
          "A plumber is a person who fixes pipes",
          "A plumber is somebody who fixes pipes"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "The car that I bought it is red.",
        "respuestas": [
          "The car that I bought is red",
          "The car I bought is red",
          "The car which I bought is red"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "The boy ___ won the race is my cousin.",
        "opciones": [
          "who",
          "which",
          "where",
          "whose"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "This is the hospital ___ I was born.",
        "opciones": [
          "where",
          "which",
          "who",
          "whose"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "That's the singer ___ songs I love.",
        "opciones": [
          "whose",
          "who's",
          "who",
          "which"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The laptop ___ I bought is very fast.",
        "opciones": [
          "that",
          "who",
          "where",
          "whose"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿En cuál se puede quitar el relativo?",
        "opciones": [
          "The cake that you made is delicious.",
          "The man who called is my boss.",
          "The dog that bit me ran away.",
          "The girl who sings is Ana."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es correcta?",
        "opciones": [
          "The woman who lives here is nice.",
          "The woman which lives here is nice.",
          "The woman who she lives here is nice.",
          "The woman where lives here is nice."
        ]
      },
      {
        "tipo": "listening",
        "audio": "The teacher whose classes I enjoy most is retiring this year.",
        "pregunta": "¿Qué va a pasar con el maestro?",
        "opciones": [
          "Se va a jubilar",
          "Se va a mudar",
          "Lo van a ascender",
          "Va a cambiar de escuela"
        ]
      },
      {
        "tipo": "listening",
        "audio": "A sommelier is a person who knows a lot about wine and works in restaurants.",
        "pregunta": "¿Qué sabe un sommelier?",
        "opciones": [
          "Mucho sobre vinos",
          "Mucho sobre café",
          "Cocinar",
          "Hacer pan"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: la película que vimos",
        "respuestas": [
          "the movie we saw",
          "the movie that we saw",
          "the film we saw",
          "the film that we saw",
          "the movie which we saw"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: el pueblo donde nací",
        "respuestas": [
          "the town where I was born",
          "the village where I was born"
        ]
      }
    ]
  },
  {
    "id": "b1-14",
    "num": 14,
    "titulo": "Gerundio vs. infinitivo",
    "contexto": "Pasatiempos e intereses",
    "explicacion": {
      "es": [
        "Algunos verbos van seguidos de **gerundio** (*-ing*): ***enjoy, finish, mind, avoid, practice, keep, suggest, can't stand, spend time***: *I **enjoy painting**. She **keeps practicing**. I **can't stand waiting**.*",
        "Otros van con **infinitivo** (*to* + verbo): ***want, need, decide, hope, plan, learn, promise, agree, refuse, would like***: *I **want to learn** the guitar. We **decided to join** a club.*",
        "Después de **preposiciones** siempre va **gerundio**: *I'm **interested in learning** photography. She's **good at drawing**. **Thanks for helping** me. **Before going** out, I check the weather.*",
        "El **gerundio** también funciona como **sujeto** (como un sustantivo): ***Swimming** is good for your back. **Reading** relaxes me.* Con ***like, love, hate, prefer, start, begin*** se puede usar **los dos** casi igual: *I like **cooking** / I like **to cook**.*"
      ],
      "tabla": {
        "columnas": [
          "+ -ing",
          "+ to + verbo",
          "Los dos"
        ],
        "filas": [
          [
            "enjoy, finish, mind",
            "want, need, decide",
            "like, love, hate"
          ],
          [
            "avoid, keep, practice",
            "hope, plan, learn",
            "start, begin, prefer"
          ],
          [
            "after a preposition (in, at, of, for)",
            "would like, promise, agree",
            "continue"
          ],
          [
            "I enjoy dancing.",
            "I want to dance.",
            "I love dancing / to dance."
          ]
        ]
      },
      "ojo": [
        "*I enjoy **to dance*** ❌ → *I enjoy **dancing*** ✅. *I want **dancing*** ❌ → *I want **to dance*** ✅.",
        "Después de preposición nunca va *to*: *I'm good **at singing*** ✅, no *good at sing* ❌. ***Look forward to*** también lleva *-ing*: *I look forward **to seeing** you.*",
        "***Stop*** cambia de significado: *I **stopped smoking*** (dejé de fumar) / *I **stopped to smoke*** (me detuve para fumar).",
        "***Remember*** y ***forget*** también: *Remember **to lock** the door* (no olvides cerrar) / *I remember **locking** it* (recuerdo haberla cerrado).",
        "En español el sujeto va en **infinitivo** (*Nadar es bueno*), pero en inglés en **gerundio**: ***Swimming** is good* ✅."
      ],
      "en": [
        "Some verbs are followed by the ing form: I enjoy painting. I can't stand waiting.",
        "Other verbs are followed by to plus a verb: I want to learn the guitar. We decided to join a club.",
        "After prepositions, use the ing form: I'm interested in learning photography.",
        "The ing form can be the subject: Swimming is good for your back."
      ]
    },
    "vocabulario": [
      {
        "en": "I enjoy painting.",
        "es": "disfruto pintar",
        "imagen": "Persona pintando un paisaje en un caballete al aire libre",
        "ejemplo": [
          "I enjoy painting on Sunday mornings.",
          "Disfruto pintar los domingos en la mañana."
        ]
      },
      {
        "en": "I want to learn the guitar.",
        "es": "quiero aprender guitarra",
        "imagen": "Persona sosteniendo una guitarra nueva con entusiasmo",
        "ejemplo": [
          "I want to learn the guitar this year.",
          "Este año quiero aprender guitarra."
        ]
      },
      {
        "en": "She's good at drawing.",
        "es": "ella es buena para dibujar",
        "imagen": "Niña dibujando un retrato con lápiz muy realista",
        "ejemplo": [
          "My daughter is very good at drawing.",
          "Mi hija es muy buena para dibujar."
        ]
      },
      {
        "en": "I'm interested in photography.",
        "es": "me interesa la fotografía",
        "imagen": "Persona tomando fotos de naturaleza con una cámara",
        "ejemplo": [
          "I'm interested in learning photography.",
          "Me interesa aprender fotografía."
        ]
      },
      {
        "en": "I can't stand waiting.",
        "es": "no soporto esperar",
        "imagen": "Persona desesperada en una fila larga",
        "ejemplo": [
          "I can't stand waiting in long lines.",
          "No soporto esperar en filas largas."
        ]
      },
      {
        "en": "We decided to join a club.",
        "es": "decidimos unirnos a un club",
        "imagen": "Grupo de ciclistas con cascos listos para salir",
        "ejemplo": [
          "We decided to join a cycling club.",
          "Decidimos unirnos a un club de ciclismo."
        ]
      },
      {
        "en": "Swimming is good for you.",
        "es": "nadar es bueno para ti",
        "imagen": "Persona nadando en una alberca olímpica",
        "ejemplo": [
          "Swimming is good for your back.",
          "Nadar es bueno para la espalda."
        ]
      },
      {
        "en": "He keeps practicing.",
        "es": "él sigue practicando",
        "imagen": "Joven practicando trucos de patineta una y otra vez",
        "ejemplo": [
          "He keeps practicing until he gets it right.",
          "Sigue practicando hasta que le sale bien."
        ]
      },
      {
        "en": "I'd like to try yoga.",
        "es": "me gustaría probar yoga",
        "imagen": "Persona en un tapete de yoga en un parque",
        "ejemplo": [
          "I'd like to try yoga. Is it difficult?",
          "Me gustaría probar yoga. ¿Es difícil?"
        ]
      },
      {
        "en": "Do you mind waiting?",
        "es": "¿te molesta esperar?",
        "imagen": "Recepcionista hablando amablemente con un cliente",
        "ejemplo": [
          "Do you mind waiting a few minutes?",
          "¿Le molesta esperar unos minutos?"
        ]
      },
      {
        "en": "I spend hours reading.",
        "es": "paso horas leyendo",
        "imagen": "Persona leyendo en un sillón rodeada de libros",
        "ejemplo": [
          "I spend hours reading on weekends.",
          "Los fines de semana paso horas leyendo."
        ]
      },
      {
        "en": "I'm thinking of taking a course.",
        "es": "estoy pensando en tomar un curso",
        "imagen": "Persona revisando cursos en su laptop",
        "ejemplo": [
          "I'm thinking of taking a cooking course.",
          "Estoy pensando en tomar un curso de cocina."
        ]
      },
      {
        "en": "She promised to come.",
        "es": "ella prometió venir",
        "imagen": "Amiga prometiendo llegar con la mano en el corazón",
        "ejemplo": [
          "She promised to come to my exhibition.",
          "Prometió venir a mi exposición."
        ]
      },
      {
        "en": "I gave up playing the piano.",
        "es": "dejé de tocar el piano",
        "imagen": "Piano viejo cubierto con una manta",
        "ejemplo": [
          "I gave up playing the piano when I was twelve.",
          "Dejé de tocar el piano a los doce años."
        ]
      },
      {
        "en": "I look forward to seeing you.",
        "es": "espero con ganas verte",
        "imagen": "Persona escribiendo un correo con una sonrisa",
        "ejemplo": [
          "I look forward to seeing you at the concert.",
          "Tengo muchas ganas de verte en el concierto."
        ]
      },
      {
        "en": "They suggested going hiking.",
        "es": "sugirieron ir de excursión",
        "imagen": "Amigos con mochilas señalando una montaña",
        "ejemplo": [
          "They suggested going hiking on Sunday.",
          "Sugirieron ir de excursión el domingo."
        ]
      }
    ],
    "grupos": [
      {
        "id": "pasatiempos",
        "titulo": "Pasatiempos",
        "icono": "🎨",
        "patron": [
          "I'm into…",
          "I'm keen on…",
          "I've taken up…"
        ],
        "palabras": [
          {
            "en": "gardening",
            "es": "la jardinería",
            "imagen": "Persona plantando flores en su jardín",
            "ejemplo": [
              "Gardening helps me relax.",
              "La jardinería me ayuda a relajarme."
            ]
          },
          {
            "en": "knitting",
            "es": "tejer",
            "imagen": "Manos tejiendo una bufanda de lana con agujas",
            "ejemplo": [
              "My grandma taught me knitting.",
              "Mi abuela me enseñó a tejer."
            ]
          },
          {
            "en": "rock climbing",
            "es": "la escalada",
            "imagen": "Persona escalando una pared de roca con cuerdas",
            "ejemplo": [
              "I've taken up rock climbing.",
              "Empecé a hacer escalada."
            ]
          },
          {
            "en": "board games",
            "es": "los juegos de mesa",
            "imagen": "Amigos jugando un juego de mesa en la sala",
            "ejemplo": [
              "We spend Friday nights playing board games.",
              "Pasamos los viernes en la noche jugando juegos de mesa."
            ]
          },
          {
            "en": "birdwatching",
            "es": "observar aves",
            "imagen": "Persona con binoculares mirando pájaros en un bosque",
            "ejemplo": [
              "My uncle is really into birdwatching.",
              "A mi tío le encanta observar aves."
            ]
          },
          {
            "en": "baking",
            "es": "hornear",
            "imagen": "Persona sacando galletas del horno",
            "ejemplo": [
              "I'm keen on baking bread at home.",
              "Me encanta hornear pan en casa."
            ]
          },
          {
            "en": "pottery",
            "es": "la cerámica",
            "imagen": "Manos moldeando barro en un torno",
            "ejemplo": [
              "I'm thinking of taking a pottery class.",
              "Estoy pensando en tomar una clase de cerámica."
            ]
          },
          {
            "en": "playing chess",
            "es": "jugar ajedrez",
            "imagen": "Dos personas jugando ajedrez en un parque",
            "ejemplo": [
              "Playing chess improves your memory.",
              "Jugar ajedrez mejora tu memoria."
            ]
          }
        ]
      },
      {
        "id": "preposiciones",
        "titulo": "Preposición + -ing",
        "icono": "🔗",
        "patron": [
          "good at…",
          "interested in…",
          "tired of…"
        ],
        "palabras": [
          {
            "en": "good at singing",
            "es": "bueno para cantar",
            "imagen": "Joven cantando en un escenario con confianza",
            "ejemplo": [
              "She's really good at singing.",
              "Ella canta muy bien."
            ]
          },
          {
            "en": "interested in learning",
            "es": "interesado en aprender",
            "imagen": "Adulto mayor aprendiendo a usar una computadora",
            "ejemplo": [
              "I'm interested in learning Italian.",
              "Me interesa aprender italiano."
            ]
          },
          {
            "en": "tired of studying",
            "es": "cansado de estudiar",
            "imagen": "Estudiante recargando la cabeza sobre sus libros",
            "ejemplo": [
              "I'm tired of studying. Let's take a break.",
              "Estoy cansado de estudiar. Tomemos un descanso."
            ]
          },
          {
            "en": "afraid of flying",
            "es": "miedo a volar",
            "imagen": "Pasajero nervioso agarrando el asiento del avión",
            "ejemplo": [
              "My father is afraid of flying.",
              "Mi papá le tiene miedo a volar."
            ]
          },
          {
            "en": "thanks for helping",
            "es": "gracias por ayudar",
            "imagen": "Persona agradeciendo a un vecino con un abrazo",
            "ejemplo": [
              "Thanks for helping me with the move.",
              "Gracias por ayudarme con la mudanza."
            ]
          },
          {
            "en": "instead of watching TV",
            "es": "en vez de ver la tele",
            "imagen": "Familia jugando cartas con la tele apagada",
            "ejemplo": [
              "Let's play cards instead of watching TV.",
              "Juguemos cartas en vez de ver la tele."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I enjoy painting on Sunday mornings.",
        "es": "Disfruto pintar los domingos en la mañana."
      },
      {
        "en": "I want to learn the guitar this year.",
        "es": "Este año quiero aprender guitarra."
      },
      {
        "en": "My daughter is very good at drawing.",
        "es": "Mi hija es muy buena para dibujar."
      },
      {
        "en": "I can't stand waiting in long lines.",
        "es": "No soporto esperar en filas largas."
      },
      {
        "en": "Swimming is good for your back.",
        "es": "Nadar es bueno para la espalda."
      },
      {
        "en": "I'm thinking of taking a cooking course.",
        "es": "Estoy pensando en tomar un curso de cocina."
      },
      {
        "en": "Thanks for helping me with the move.",
        "es": "Gracias por ayudarme con la mudanza."
      },
      {
        "en": "Let's play cards instead of watching TV.",
        "es": "Juguemos cartas en vez de ver la tele."
      },
      {
        "en": "I stopped smoking two years ago.",
        "es": "Dejé de fumar hace dos años.",
        "imagen": "Persona sonriendo y respirando aire fresco en un parque"
      },
      {
        "en": "I look forward to seeing you at the concert.",
        "es": "Tengo muchas ganas de verte en el concierto."
      }
    ],
    "frases": [
      {
        "en": "I've always wanted to learn to dance, so last month I decided to join a salsa class.",
        "es": "Siempre he querido aprender a bailar, así que el mes pasado decidí entrar a una clase de salsa.",
        "imagen": "Pareja bailando salsa en una clase con otros alumnos"
      },
      {
        "en": "My brother spends all his free time playing video games instead of going out.",
        "es": "Mi hermano pasa todo su tiempo libre jugando videojuegos en vez de salir.",
        "imagen": "Joven jugando videojuegos en un cuarto oscuro"
      },
      {
        "en": "Reading before bed helps me relax and sleep better.",
        "es": "Leer antes de dormir me ayuda a relajarme y dormir mejor.",
        "imagen": "Persona leyendo en la cama con una lámpara tenue"
      },
      {
        "en": "She's very interested in learning about plants, so she's started a small garden.",
        "es": "Le interesa mucho aprender sobre plantas, así que empezó un pequeño huerto.",
        "imagen": "Mujer cuidando un huerto en macetas en su azotea"
      },
      {
        "en": "I don't mind cooking, but I hate washing the dishes afterwards.",
        "es": "No me molesta cocinar, pero odio lavar los trastes después.",
        "imagen": "Persona cocinando feliz con una pila de trastes sucios al lado"
      },
      {
        "en": "Remember to bring your camera. We're going to take a lot of photos.",
        "es": "Acuérdate de traer tu cámara. Vamos a tomar muchas fotos.",
        "imagen": "Amigos con cámaras en un mirador"
      },
      {
        "en": "My grandfather gave up running when he was seventy, but he still enjoys walking every day.",
        "es": "Mi abuelo dejó de correr a los setenta, pero todavía disfruta caminar todos los días.",
        "imagen": "Abuelo caminando con energía en un parque al amanecer"
      },
      {
        "en": "We're planning to go camping next weekend. Would you like to come?",
        "es": "Planeamos ir a acampar el próximo fin de semana. ¿Te gustaría venir?",
        "imagen": "Amigos armando una tienda de campaña en el bosque"
      },
      {
        "en": "I'm not very good at drawing, but I really enjoy doing it.",
        "es": "No soy muy bueno para dibujar, pero de verdad lo disfruto.",
        "imagen": "Persona dibujando feliz en un cuaderno en un café"
      },
      {
        "en": "After finishing work, I usually go to the gym or meet friends.",
        "es": "Después de terminar de trabajar, normalmente voy al gimnasio o veo a mis amigos.",
        "imagen": "Persona saliendo de la oficina con su mochila deportiva"
      }
    ],
    "listening": [
      {
        "audio": "I've decided to take up swimming because my doctor recommended it.",
        "pregunta": "¿Por qué empezó a nadar?",
        "opciones": [
          "Se lo recomendó su doctor",
          "Le gusta el agua",
          "Su amigo nada",
          "Quiere competir"
        ]
      },
      {
        "audio": "My sister is really good at taking photos. She wants to be a professional photographer.",
        "pregunta": "¿Qué quiere ser la hermana?",
        "opciones": [
          "Fotógrafa profesional",
          "Pintora",
          "Modelo",
          "Periodista"
        ]
      },
      {
        "audio": "I can't stand listening to loud music when I'm working.",
        "pregunta": "¿Qué no soporta?",
        "opciones": [
          "Música fuerte cuando trabaja",
          "Trabajar en silencio",
          "El tráfico",
          "Los mensajes"
        ]
      },
      {
        "audio": "Do you mind closing the window? It's a bit cold.",
        "pregunta": "¿Qué le pide?",
        "opciones": [
          "Cerrar la ventana",
          "Abrir la ventana",
          "Prender la calefacción",
          "Traer un suéter"
        ]
      },
      {
        "audio": "Thanks for inviting me. I really enjoyed meeting your family.",
        "pregunta": "¿Qué disfrutó?",
        "opciones": [
          "Conocer a su familia",
          "La comida",
          "La música",
          "El viaje"
        ]
      }
    ],
    "lectura": {
      "titulo": "A new hobby at sixty",
      "texto": "When my mother retired at sixty, she didn't know what to do with her free time. At first, she spent hours watching TV, and she started feeling sad. One day, her neighbor suggested joining a pottery class at the community center. My mother had never done anything artistic, and she was afraid of looking silly. But she decided to try it. Now, two years later, she can't stop making things! She goes to class three times a week, and she spends the weekends practicing in a small workshop that my brother built in the garden. She's especially good at making cups and plates, and she has started selling them at a local market. She says that working with clay helps her forget her worries. Her next plan? She wants to learn to paint on the pottery, too.",
      "preguntas": [
        {
          "pregunta": "¿Qué hacía la mamá al principio de jubilarse?",
          "opciones": [
            "Pasaba horas viendo la tele",
            "Viajaba",
            "Cocinaba",
            "Trabajaba medio tiempo"
          ]
        },
        {
          "pregunta": "¿Quién le sugirió la clase de cerámica?",
          "opciones": [
            "Su vecina",
            "Su hijo",
            "Su doctor",
            "Una amiga del trabajo"
          ]
        },
        {
          "pregunta": "¿Qué le da miedo al principio?",
          "opciones": [
            "Verse ridícula",
            "Lastimarse",
            "Gastar dinero",
            "Salir de noche"
          ]
        },
        {
          "pregunta": "¿Qué quiere aprender ahora?",
          "opciones": [
            "A pintar sobre la cerámica",
            "A bailar",
            "A nadar",
            "A vender en internet"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con -ing o to + verbo.",
        "pregunta": "I enjoy ___ (cook).",
        "respuestas": [
          "cooking"
        ]
      },
      {
        "instruccion": "Completa con -ing o to + verbo.",
        "pregunta": "We decided ___ (stay) at home.",
        "respuestas": [
          "to stay"
        ]
      },
      {
        "instruccion": "Completa con -ing o to + verbo.",
        "pregunta": "She's good at ___ (dance).",
        "respuestas": [
          "dancing"
        ]
      },
      {
        "instruccion": "Completa con -ing o to + verbo.",
        "pregunta": "I'd like ___ (visit) Japan.",
        "respuestas": [
          "to visit"
        ]
      },
      {
        "instruccion": "Completa con -ing o to + verbo.",
        "pregunta": "___ (run) is good exercise.",
        "respuestas": [
          "Running"
        ]
      },
      {
        "instruccion": "Completa con -ing o to + verbo.",
        "pregunta": "Do you mind ___ (open) the door?",
        "respuestas": [
          "opening"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Me interesa aprender fotografía.",
        "respuestas": [
          "I'm interested in learning photography",
          "I am interested in learning photography"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Dejé de fumar.",
        "respuestas": [
          "I stopped smoking",
          "I quit smoking",
          "I gave up smoking"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Nadar es bueno para ti.",
        "respuestas": [
          "Swimming is good for you"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I enjoy to read novels.",
        "respuestas": [
          "I enjoy reading novels"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "I can't stand ___ in traffic.",
        "opciones": [
          "sitting",
          "to sitting",
          "sit",
          "sat"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We're planning ___ a car.",
        "opciones": [
          "to buy",
          "buying",
          "buy",
          "bought"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Thanks for ___ me.",
        "opciones": [
          "calling",
          "to call",
          "call",
          "called"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ vegetables is healthy.",
        "opciones": [
          "Eating",
          "Eat",
          "To eating",
          "Eaten"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«I stopped to buy bread» significa:",
        "opciones": [
          "Me detuve para comprar pan",
          "Dejé de comprar pan",
          "Ya no como pan",
          "Olvidé comprar pan"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I look forward to ___ from you.",
        "opciones": [
          "hearing",
          "hear",
          "heard",
          "to hear"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I've given up drinking soda. Now I only drink water and tea.",
        "pregunta": "¿Qué dejó de tomar?",
        "opciones": [
          "Refresco",
          "Agua",
          "Té",
          "Café"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Would you like to come rock climbing with us? I'm afraid of falling, but I'll try.",
        "pregunta": "¿De qué tiene miedo?",
        "opciones": [
          "De caerse",
          "De las alturas del avión",
          "De los insectos",
          "Del agua"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Disfruto leer.",
        "respuestas": [
          "I enjoy reading"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Quiero aprender a nadar.",
        "respuestas": [
          "I want to learn to swim",
          "I want to learn how to swim"
        ]
      }
    ]
  },
  {
    "id": "b1-15",
    "num": 15,
    "titulo": "Modales de deducción en presente (must, might, could, can't)",
    "contexto": "Misterios y suposiciones",
    "explicacion": {
      "es": [
        "Los **modales de deducción** sirven para decir **qué tan seguros** estamos de algo, según la evidencia. ***Must*** = **seguro que sí** (estoy casi seguro): *The lights are on. They **must be** at home.* (Deben de estar en casa.)",
        "***Can't*** = **seguro que no** (es imposible): *She **can't be** hungry. She's just eaten.* (No puede tener hambre.)",
        "***Might, may, could*** = **tal vez, es posible**: *He isn't answering. He **might be** busy.* *That **could be** the delivery man.*",
        "Después del modal va el **verbo base**: ***must be, can't be, might know***. Para algo que **está pasando ahora**: ***must be + -ing***: *She **must be sleeping**.* (Debe de estar durmiendo.)"
      ],
      "tabla": {
        "columnas": [
          "Seguridad",
          "Modal",
          "Ejemplo"
        ],
        "filas": [
          [
            "Casi 100% sí",
            "must",
            "He must be tired. He worked all night."
          ],
          [
            "Posible",
            "might / may / could",
            "It might be the neighbor."
          ],
          [
            "Casi 100% no",
            "can't",
            "That can't be true!"
          ],
          [
            "Algo que pasa ahora",
            "must be + -ing",
            "They must be having dinner."
          ]
        ]
      },
      "ojo": [
        "Lo contrario de *must* (deducción) es ***can't***, **no** *mustn't*: *He **can't be** at home* ✅ (no *He mustn't be at home* ❌, que significa prohibición).",
        "*Must* aquí **no** es obligación, es **suposición**: *You **must be** Ana!* (¡Tú debes de ser Ana!)",
        "No uses *can* para posibilidad afirmativa: *It **might / could** be him* ✅, no *It can be him* ❌.",
        "***Couldn't*** también significa imposible: *It **couldn't be** him. He's in Spain.*",
        "Frases típicas: ***You must be joking!*** (¡No manches! / ¡Estás bromeando!) ***That can't be right.*** (Eso no puede estar bien.)"
      ],
      "en": [
        "Must means I'm almost sure it's true: The lights are on. They must be at home.",
        "Can't means I'm almost sure it's not true: She can't be hungry. She's just eaten.",
        "Might, may and could mean it's possible: He might be busy.",
        "Something happening now: She must be sleeping."
      ]
    },
    "vocabulario": [
      {
        "en": "They must be at home.",
        "es": "deben de estar en casa",
        "imagen": "Casa con las luces encendidas de noche",
        "ejemplo": [
          "The lights are on. They must be at home.",
          "Las luces están prendidas. Deben de estar en casa."
        ]
      },
      {
        "en": "She can't be hungry.",
        "es": "no puede tener hambre",
        "imagen": "Persona satisfecha frente a un plato vacío",
        "ejemplo": [
          "She can't be hungry. She's just had lunch.",
          "No puede tener hambre. Acaba de comer."
        ]
      },
      {
        "en": "He might be busy.",
        "es": "tal vez esté ocupado",
        "imagen": "Hombre en una junta con el celular vibrando",
        "ejemplo": [
          "He isn't answering. He might be busy.",
          "No contesta. Tal vez esté ocupado."
        ]
      },
      {
        "en": "That could be the delivery man.",
        "es": "puede que sea el repartidor",
        "imagen": "Puerta con alguien tocando el timbre",
        "ejemplo": [
          "Someone's at the door. That could be the delivery man.",
          "Alguien está en la puerta. Puede que sea el repartidor."
        ]
      },
      {
        "en": "You must be tired.",
        "es": "debes de estar cansado",
        "imagen": "Persona agotada recostada en el sofá con la maleta al lado",
        "ejemplo": [
          "You've traveled all night. You must be tired.",
          "Viajaste toda la noche. Debes de estar cansado."
        ]
      },
      {
        "en": "That can't be true!",
        "es": "¡eso no puede ser cierto!",
        "imagen": "Persona con la boca abierta leyendo una noticia",
        "ejemplo": [
          "He won the lottery? That can't be true!",
          "¿Se ganó la lotería? ¡Eso no puede ser cierto!"
        ]
      },
      {
        "en": "It must be expensive.",
        "es": "debe de ser caro",
        "imagen": "Reloj de lujo brillando en un aparador",
        "ejemplo": [
          "That watch must be very expensive.",
          "Ese reloj debe de ser carísimo."
        ]
      },
      {
        "en": "She may be right.",
        "es": "puede que tenga razón",
        "imagen": "Dos personas discutiendo ideas en una mesa",
        "ejemplo": [
          "I'm not sure, but she may be right.",
          "No estoy seguro, pero puede que tenga razón."
        ]
      },
      {
        "en": "They must be sleeping.",
        "es": "deben de estar durmiendo",
        "imagen": "Casa oscura en la madrugada con la luna",
        "ejemplo": [
          "It's three in the morning. They must be sleeping.",
          "Son las tres de la mañana. Deben de estar durmiendo."
        ]
      },
      {
        "en": "It can't be him.",
        "es": "no puede ser él",
        "imagen": "Persona confundida mirando a alguien de lejos",
        "ejemplo": [
          "It can't be him. He lives in Canada.",
          "No puede ser él. Vive en Canadá."
        ]
      },
      {
        "en": "You must be joking!",
        "es": "¡no manches! / ¡estás bromeando!",
        "imagen": "Persona riéndose con incredulidad",
        "ejemplo": [
          "You got the job? You must be joking!",
          "¿Te dieron el trabajo? ¡No manches!"
        ]
      },
      {
        "en": "There might be a problem.",
        "es": "puede que haya un problema",
        "imagen": "Mecánico revisando un motor con una lámpara",
        "ejemplo": [
          "There might be a problem with the engine.",
          "Puede que haya un problema con el motor."
        ]
      },
      {
        "en": "He could be lost.",
        "es": "podría estar perdido",
        "imagen": "Turista mirando un mapa confundido en una esquina",
        "ejemplo": [
          "He's late. He could be lost.",
          "Llega tarde. Podría estar perdido."
        ]
      },
      {
        "en": "It must be a mistake.",
        "es": "debe de ser un error",
        "imagen": "Persona sorprendida mirando un recibo de luz muy caro",
        "ejemplo": [
          "This bill is huge. It must be a mistake.",
          "Este recibo es enorme. Debe de ser un error."
        ]
      },
      {
        "en": "She can't be at work.",
        "es": "no puede estar en el trabajo",
        "imagen": "Oficina cerrada un domingo",
        "ejemplo": [
          "She can't be at work. It's Sunday.",
          "No puede estar en el trabajo. Es domingo."
        ]
      },
      {
        "en": "This must be the place.",
        "es": "este debe de ser el lugar",
        "imagen": "Persona comparando una foto en el celular con la fachada de un restaurante",
        "ejemplo": [
          "This must be the place from the photo.",
          "Este debe de ser el lugar de la foto."
        ]
      }
    ],
    "grupos": [
      {
        "id": "misterio",
        "titulo": "Resolver un misterio",
        "icono": "🕵️",
        "patron": [
          "It must be…",
          "The thief must be…",
          "It can't be…"
        ],
        "palabras": [
          {
            "en": "a clue",
            "es": "una pista",
            "imagen": "Lupa sobre una huella en el piso",
            "ejemplo": [
              "The detective found an important clue.",
              "El detective encontró una pista importante."
            ]
          },
          {
            "en": "a suspect",
            "es": "un sospechoso",
            "imagen": "Silueta de una persona con sombrero en un callejón",
            "ejemplo": [
              "The police have three suspects.",
              "La policía tiene tres sospechosos."
            ]
          },
          {
            "en": "footprints",
            "es": "huellas de pisadas",
            "imagen": "Huellas de zapatos en el lodo",
            "ejemplo": [
              "There are footprints in the garden. Someone must be inside.",
              "Hay huellas en el jardín. Alguien debe de estar adentro."
            ]
          },
          {
            "en": "a witness",
            "es": "un testigo",
            "imagen": "Persona hablando con un policía en la calle",
            "ejemplo": [
              "The witness saw a man in a red jacket.",
              "El testigo vio a un hombre con chamarra roja."
            ]
          },
          {
            "en": "an alibi",
            "es": "una coartada",
            "imagen": "Hombre mostrando un boleto de cine a un detective",
            "ejemplo": [
              "He has an alibi. He can't be the thief.",
              "Tiene coartada. No puede ser el ladrón."
            ]
          },
          {
            "en": "evidence",
            "es": "pruebas",
            "imagen": "Bolsas de evidencia sobre una mesa de policía",
            "ejemplo": [
              "There isn't enough evidence.",
              "No hay suficientes pruebas."
            ]
          }
        ]
      },
      {
        "id": "suposiciones",
        "titulo": "Suposiciones diarias",
        "icono": "💭",
        "patron": [
          "You must be…",
          "He might be…",
          "That can't be…"
        ],
        "palabras": [
          {
            "en": "You must be Ana.",
            "es": "tú debes de ser Ana",
            "imagen": "Persona saludando a alguien en un aeropuerto con un letrero sin texto",
            "ejemplo": [
              "Hi! You must be Ana. Welcome!",
              "¡Hola! Tú debes de ser Ana. ¡Bienvenida!"
            ]
          },
          {
            "en": "She must be nervous.",
            "es": "debe de estar nerviosa",
            "imagen": "Joven mordiéndose las uñas antes de una entrevista",
            "ejemplo": [
              "It's her first interview. She must be nervous.",
              "Es su primera entrevista. Debe de estar nerviosa."
            ]
          },
          {
            "en": "He might be stuck in traffic.",
            "es": "tal vez está atorado en el tráfico",
            "imagen": "Carro atrapado en un embotellamiento",
            "ejemplo": [
              "He's late. He might be stuck in traffic.",
              "Llega tarde. Tal vez está atorado en el tráfico."
            ]
          },
          {
            "en": "That can't be right.",
            "es": "eso no puede estar bien",
            "imagen": "Persona revisando una cuenta de restaurante con cara de sorpresa",
            "ejemplo": [
              "Two thousand pesos for two coffees? That can't be right.",
              "¿Dos mil pesos por dos cafés? Eso no puede estar bien."
            ]
          },
          {
            "en": "It could rain later.",
            "es": "podría llover más tarde",
            "imagen": "Nubes grises acercándose a la ciudad",
            "ejemplo": [
              "Take an umbrella. It could rain later.",
              "Lleva paraguas. Podría llover más tarde."
            ]
          },
          {
            "en": "They must have a dog.",
            "es": "deben de tener perro",
            "imagen": "Plato de agua para perro y una pelota en el patio",
            "ejemplo": [
              "There's a dog bowl. They must have a dog.",
              "Hay un plato de perro. Deben de tener perro."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "The lights are on. They must be at home.",
        "es": "Las luces están prendidas. Deben de estar en casa."
      },
      {
        "en": "She can't be hungry. She's just had lunch.",
        "es": "No puede tener hambre. Acaba de comer."
      },
      {
        "en": "He isn't answering. He might be busy.",
        "es": "No contesta. Tal vez esté ocupado."
      },
      {
        "en": "You've traveled all night. You must be tired.",
        "es": "Viajaste toda la noche. Debes de estar cansado."
      },
      {
        "en": "He won the lottery? That can't be true!",
        "es": "¿Se ganó la lotería? ¡Eso no puede ser cierto!"
      },
      {
        "en": "It's three in the morning. They must be sleeping.",
        "es": "Son las tres de la mañana. Deben de estar durmiendo."
      },
      {
        "en": "Hi! You must be Ana. Welcome!",
        "es": "¡Hola! Tú debes de ser Ana. ¡Bienvenida!"
      },
      {
        "en": "This bill is huge. It must be a mistake.",
        "es": "Este recibo es enorme. Debe de ser un error."
      },
      {
        "en": "He has an alibi. He can't be the thief.",
        "es": "Tiene coartada. No puede ser el ladrón."
      },
      {
        "en": "Take an umbrella. It could rain later.",
        "es": "Lleva paraguas. Podría llover más tarde."
      }
    ],
    "frases": [
      {
        "en": "There's a lot of noise next door. They must be having a party.",
        "es": "Hay mucho ruido al lado. Deben de estar haciendo una fiesta.",
        "imagen": "Ventana de un departamento con luces de fiesta y gente bailando"
      },
      {
        "en": "Laura isn't in class today. She might be sick, or she could be at the doctor's.",
        "es": "Laura no vino hoy a clase. Tal vez está enferma o podría estar en el doctor.",
        "imagen": "Banca vacía en un salón de clases"
      },
      {
        "en": "That man can't be a tourist. He knows every street in the old town.",
        "es": "Ese señor no puede ser turista. Conoce cada calle del centro histórico.",
        "imagen": "Señor guiando con seguridad a otros por calles coloniales"
      },
      {
        "en": "Somebody has eaten all the cookies. It must be my brother. He loves chocolate.",
        "es": "Alguien se comió todas las galletas. Debe de ser mi hermano. Le encanta el chocolate.",
        "imagen": "Frasco de galletas vacío con migajas en la mesa"
      },
      {
        "en": "The restaurant is always full. The food must be really good.",
        "es": "El restaurante siempre está lleno. La comida debe de estar muy buena.",
        "imagen": "Restaurante lleno con fila afuera"
      },
      {
        "en": "You can't be serious! You want to quit your job and travel for a year?",
        "es": "¡No puedes estar hablando en serio! ¿Quieres dejar tu trabajo y viajar un año?",
        "imagen": "Amigos conversando sorprendidos en un café"
      },
      {
        "en": "Where are my glasses? They might be in the car, or they could be at the office.",
        "es": "¿Dónde están mis lentes? Tal vez estén en el carro, o podrían estar en la oficina.",
        "imagen": "Persona buscando sus lentes en la mesa"
      },
      {
        "en": "The ground is wet. It must be raining, or someone might be watering the garden.",
        "es": "El suelo está mojado. Debe de estar lloviendo, o alguien podría estar regando el jardín.",
        "imagen": "Banqueta ligeramente mojada en la mañana"
      },
      {
        "en": "She speaks Portuguese perfectly. She must be from Brazil.",
        "es": "Habla portugués perfecto. Debe de ser de Brasil.",
        "imagen": "Mujer conversando con alegría en un café"
      },
      {
        "en": "That can't be the right address. There's no house here, only a parking lot.",
        "es": "Esa no puede ser la dirección correcta. Aquí no hay casa, solo un estacionamiento.",
        "imagen": "Persona confundida frente a un estacionamiento vacío con su celular"
      }
    ],
    "listening": [
      {
        "audio": "The baby has been crying for an hour. She must be hungry.",
        "pregunta": "¿Qué creen que le pasa a la bebé?",
        "opciones": [
          "Tiene hambre",
          "Tiene sueño",
          "Está enferma",
          "Tiene frío"
        ]
      },
      {
        "audio": "That can't be Pedro. Pedro has short hair, and that man has long hair.",
        "pregunta": "¿Por qué no puede ser Pedro?",
        "opciones": [
          "Pedro tiene el pelo corto",
          "Pedro es más alto",
          "Pedro vive lejos",
          "Pedro usa lentes"
        ]
      },
      {
        "audio": "The phone is ringing. It might be my mom. She always calls at this time.",
        "pregunta": "¿Quién podría estar llamando?",
        "opciones": [
          "Su mamá",
          "Su jefe",
          "Un amigo",
          "El banco"
        ]
      },
      {
        "audio": "He's been working twelve hours a day. He must be exhausted.",
        "pregunta": "¿Cómo debe de estar?",
        "opciones": [
          "Agotado",
          "Feliz",
          "Aburrido",
          "Enfermo"
        ]
      },
      {
        "audio": "The store is closed. It could be a holiday today.",
        "pregunta": "¿Por qué podría estar cerrada la tienda?",
        "opciones": [
          "Podría ser día festivo",
          "Quebró",
          "Es de noche",
          "Están de vacaciones"
        ]
      }
    ],
    "lectura": {
      "titulo": "The mystery of the missing cake",
      "texto": "It was my grandmother's birthday, and my aunt had made a beautiful chocolate cake. She left it on the kitchen table at four o'clock and went to buy candles. When she came back at five, the cake was gone! Everybody started to make guesses. It can't be Grandma, said my uncle, she doesn't eat sugar. It might be the kids, said my aunt, but my cousins had been playing outside all afternoon, and their hands were clean. Then my brother noticed something: there were small chocolate footprints on the floor, going from the table to the garden. It must be an animal, he said. We followed the footprints and found Max, our neighbor's dog, sleeping under a tree with chocolate all over his face. He must be very happy, said Grandma, laughing. And then we called the vet, because chocolate is dangerous for dogs.",
      "preguntas": [
        {
          "pregunta": "¿Por qué no podía ser la abuela?",
          "opciones": [
            "No come azúcar",
            "Estaba dormida",
            "No estaba en casa",
            "Le gusta otro pastel"
          ]
        },
        {
          "pregunta": "¿Por qué no fueron los niños?",
          "opciones": [
            "Estuvieron afuera y tenían las manos limpias",
            "Estaban dormidos",
            "Estaban en la escuela",
            "No les gusta el chocolate"
          ]
        },
        {
          "pregunta": "¿Qué pista encontró el hermano?",
          "opciones": [
            "Huellas de chocolate en el piso",
            "Una vela",
            "Un plato roto",
            "Migajas en la mesa"
          ]
        },
        {
          "pregunta": "¿Por qué llamaron al veterinario?",
          "opciones": [
            "El chocolate es peligroso para los perros",
            "El perro se lastimó",
            "El perro estaba triste",
            "Para que se lo llevara"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con must o can't.",
        "pregunta": "He's been running for an hour. He ___ be tired.",
        "respuestas": [
          "must"
        ]
      },
      {
        "instruccion": "Completa con must o can't.",
        "pregunta": "She ___ be at work. It's Sunday.",
        "respuestas": [
          "can't",
          "cannot"
        ]
      },
      {
        "instruccion": "Completa con must o can't.",
        "pregunta": "That ___ be true! It's impossible.",
        "respuestas": [
          "can't",
          "cannot"
        ]
      },
      {
        "instruccion": "Completa con might.",
        "pregunta": "I'm not sure where he is. He ___ be at the gym.",
        "respuestas": [
          "might",
          "may",
          "could"
        ]
      },
      {
        "instruccion": "Completa con must be + -ing.",
        "pregunta": "The lights are off. They ___ (sleep).",
        "respuestas": [
          "must be sleeping"
        ]
      },
      {
        "instruccion": "Completa la expresión.",
        "pregunta": "You must be ___! (¡No manches! / ¡Estás bromeando!)",
        "respuestas": [
          "joking",
          "kidding"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Debes de estar cansado.",
        "respuestas": [
          "You must be tired"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "No puede ser él.",
        "respuestas": [
          "It can't be him",
          "It cannot be him"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Tal vez esté ocupado.",
        "respuestas": [
          "He might be busy",
          "He may be busy",
          "He could be busy",
          "Maybe he's busy"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "He mustn't be at home. His car isn't here.",
        "respuestas": [
          "He can't be at home. His car isn't here",
          "He can't be at home",
          "He cannot be at home"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "She's crying. She ___ be sad.",
        "opciones": [
          "must",
          "can't",
          "mustn't",
          "shouldn't"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "He ___ be the thief. He was with me all night.",
        "opciones": [
          "can't",
          "must",
          "might",
          "may"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I'm not sure. It ___ be in the drawer.",
        "opciones": [
          "might",
          "must",
          "can't",
          "can"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "It's very late. They must ___ dinner.",
        "opciones": [
          "be having",
          "having",
          "to have",
          "had"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Lo contrario de «He must be at home» es:",
        "opciones": [
          "He can't be at home.",
          "He mustn't be at home.",
          "He doesn't must be at home.",
          "He might not home."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«You must be Carlos!» significa:",
        "opciones": [
          "¡Tú debes de ser Carlos!",
          "¡Tienes que ser Carlos!",
          "¡No eres Carlos!",
          "¡Sé Carlos!"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Their car isn't here, and the windows are closed. They must be on vacation.",
        "pregunta": "¿Qué suponen?",
        "opciones": [
          "Que están de vacaciones",
          "Que se mudaron",
          "Que están dormidos",
          "Que vendieron el carro"
        ]
      },
      {
        "tipo": "listening",
        "audio": "That can't be the bus. It's only seven, and the bus comes at seven thirty.",
        "pregunta": "¿A qué hora pasa el camión?",
        "opciones": [
          "A las siete y media",
          "A las siete",
          "A las ocho",
          "A las seis y media"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Debe de ser caro.",
        "respuestas": [
          "It must be expensive"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¡Eso no puede ser cierto!",
        "respuestas": [
          "That can't be true",
          "That cannot be true"
        ]
      }
    ]
  },
  {
    "id": "b1-16",
    "num": 16,
    "titulo": "Must vs. have to, needn't, don't need to",
    "contexto": "Normas y obligaciones",
    "explicacion": {
      "es": [
        "***Must*** y ***have to*** expresan **obligación**, pero con un matiz: ***must*** suele ser una obligación que **siente quien habla** o una **regla escrita** (*I **must** call my mother. Passengers **must** wear seatbelts*). ***Have to*** es una obligación que viene **de fuera** (reglas, trabajo, situación): *I **have to** wear a uniform at work.*",
        "***Mustn't*** = **prohibido**: *You **mustn't** use your phone while driving.* ***Don't have to*** = **no es necesario** (puedes si quieres): *You **don't have to** bring anything.*",
        "***Don't need to*** y ***needn't*** también significan **no es necesario**: *You **don't need to** pay now. You **needn't** worry.* *Needn't* es más formal y más británico; *don't need to* es lo más común.",
        "*Must* **no tiene pasado ni futuro**: se usa ***had to*** (tuve que) y ***will have to*** (tendré que): *Yesterday I **had to** work late. Next year you**'ll have to** pay taxes.*"
      ],
      "tabla": {
        "columnas": [
          "Forma",
          "Significado",
          "Ejemplo"
        ],
        "filas": [
          [
            "must",
            "obligación (personal / regla)",
            "I must study tonight."
          ],
          [
            "have to",
            "obligación (externa)",
            "We have to check in at six."
          ],
          [
            "mustn't",
            "prohibido",
            "You mustn't park here."
          ],
          [
            "don't have to / don't need to / needn't",
            "no es necesario",
            "You don't have to come."
          ],
          [
            "had to / will have to",
            "pasado / futuro",
            "I had to wait. You'll have to wait."
          ]
        ]
      },
      "ojo": [
        "*You **mustn't** go* (¡no vayas, está prohibido!) ≠ *You **don't have to** go* (no es necesario, como quieras).",
        "*Must* no lleva *to*: *I must **go*** ✅, no *I must to go* ❌. Pero ***have to*** sí: *I have **to** go*.",
        "Preguntas: ***Do you have to** work on Saturdays?* es lo normal; *Must you…?* suena formal o molesto.",
        "***Have got to*** = *have to* en conversación británica: *I've got to go!* (¡Me tengo que ir!)",
        "***Be supposed to*** = **se supone que debo**: *I'm supposed to be at work at eight, but I'm always late.*"
      ],
      "en": [
        "Must is for personal obligations and written rules. Have to is for obligations from outside: I have to wear a uniform at work.",
        "Mustn't means it's prohibited: You mustn't use your phone while driving.",
        "Don't have to, don't need to and needn't mean it isn't necessary.",
        "Past: I had to work late. Future: You'll have to pay taxes."
      ]
    },
    "vocabulario": [
      {
        "en": "I must call my mother.",
        "es": "tengo que llamarle a mi mamá",
        "imagen": "Persona recordando algo con el celular en la mano",
        "ejemplo": [
          "It's her birthday. I must call my mother.",
          "Es su cumpleaños. Tengo que llamarle a mi mamá."
        ]
      },
      {
        "en": "I have to wear a uniform.",
        "es": "tengo que usar uniforme",
        "imagen": "Trabajador de una tienda con su uniforme",
        "ejemplo": [
          "I have to wear a uniform at work.",
          "En el trabajo tengo que usar uniforme."
        ]
      },
      {
        "en": "You mustn't park here.",
        "es": "no puedes estacionarte aquí",
        "imagen": "Señal de no estacionarse junto a una banqueta",
        "ejemplo": [
          "You mustn't park here. It's for ambulances.",
          "No puedes estacionarte aquí. Es para ambulancias."
        ]
      },
      {
        "en": "You don't have to come.",
        "es": "no tienes que venir",
        "imagen": "Persona diciendo a su amigo que no se preocupe",
        "ejemplo": [
          "You don't have to come if you're tired.",
          "No tienes que venir si estás cansado."
        ]
      },
      {
        "en": "You don't need to pay now.",
        "es": "no necesitas pagar ahora",
        "imagen": "Vendedor diciendo que no con la mano a un cliente con dinero",
        "ejemplo": [
          "You don't need to pay now. Pay on delivery.",
          "No necesitas pagar ahora. Paga a la entrega."
        ]
      },
      {
        "en": "You needn't worry.",
        "es": "no tienes por qué preocuparte",
        "imagen": "Doctora tranquilizando a un paciente",
        "ejemplo": [
          "You needn't worry. Everything is fine.",
          "No tienes por qué preocuparte. Todo está bien."
        ]
      },
      {
        "en": "I had to work late.",
        "es": "tuve que trabajar hasta tarde",
        "imagen": "Oficina de noche con una persona trabajando",
        "ejemplo": [
          "Yesterday I had to work late.",
          "Ayer tuve que trabajar hasta tarde."
        ]
      },
      {
        "en": "You'll have to wait.",
        "es": "tendrás que esperar",
        "imagen": "Sala de espera llena de gente",
        "ejemplo": [
          "The doctor is busy. You'll have to wait.",
          "El doctor está ocupado. Tendrá que esperar."
        ]
      },
      {
        "en": "Passengers must wear seatbelts.",
        "es": "los pasajeros deben usar cinturón",
        "imagen": "Pasajero abrochándose el cinturón en un autobús",
        "ejemplo": [
          "All passengers must wear seatbelts.",
          "Todos los pasajeros deben usar cinturón."
        ]
      },
      {
        "en": "Do you have to work on Saturdays?",
        "es": "¿tienes que trabajar los sábados?",
        "imagen": "Amigos platicando el viernes por la tarde",
        "ejemplo": [
          "Do you have to work on Saturdays?",
          "¿Tienes que trabajar los sábados?"
        ]
      },
      {
        "en": "I've got to go!",
        "es": "¡me tengo que ir!",
        "imagen": "Persona saliendo apurada con su bolsa",
        "ejemplo": [
          "Sorry, I've got to go!",
          "¡Perdón, me tengo que ir!"
        ]
      },
      {
        "en": "I'm supposed to be at work.",
        "es": "se supone que debo estar en el trabajo",
        "imagen": "Persona en un café mirando el reloj con culpa",
        "ejemplo": [
          "I'm supposed to be at work at eight.",
          "Se supone que debo estar en el trabajo a las ocho."
        ]
      },
      {
        "en": "You mustn't touch it.",
        "es": "no lo debes tocar",
        "imagen": "Niño a punto de tocar una estufa caliente",
        "ejemplo": [
          "It's hot. You mustn't touch it.",
          "Está caliente. No lo debes tocar."
        ]
      },
      {
        "en": "We didn't have to pay.",
        "es": "no tuvimos que pagar",
        "imagen": "Familia entrando gratis a un museo",
        "ejemplo": [
          "It was free. We didn't have to pay.",
          "Era gratis. No tuvimos que pagar."
        ]
      },
      {
        "en": "Students must show their ID.",
        "es": "los estudiantes deben mostrar su credencial",
        "imagen": "Estudiante mostrando su credencial en la entrada",
        "ejemplo": [
          "Students must show their ID to get in.",
          "Los estudiantes deben mostrar su credencial para entrar."
        ]
      },
      {
        "en": "You don't have to tip.",
        "es": "no tienes que dejar propina",
        "imagen": "Cuenta de restaurante con la propina incluida",
        "ejemplo": [
          "You don't have to tip. It's included.",
          "No tienes que dejar propina. Ya está incluida."
        ]
      }
    ],
    "grupos": [
      {
        "id": "normas",
        "titulo": "Normas en lugares públicos",
        "icono": "🚫",
        "patron": [
          "Visitors must…",
          "You mustn't…",
          "You don't need to…"
        ],
        "palabras": [
          {
            "en": "turn off your phone",
            "es": "apagar el celular",
            "imagen": "Persona apagando su celular en un teatro",
            "ejemplo": [
              "You must turn off your phone in the theater.",
              "Debes apagar tu celular en el teatro."
            ]
          },
          {
            "en": "keep off the grass",
            "es": "no pisar el pasto",
            "imagen": "Jardín con un cordón alrededor del pasto",
            "ejemplo": [
              "You mustn't walk on the grass.",
              "No debes pisar el pasto."
            ]
          },
          {
            "en": "wear a helmet",
            "es": "usar casco",
            "imagen": "Motociclista poniéndose el casco",
            "ejemplo": [
              "Motorcyclists must wear a helmet.",
              "Los motociclistas deben usar casco."
            ]
          },
          {
            "en": "feed the animals",
            "es": "darles de comer a los animales",
            "imagen": "Jirafa en un zoológico con visitantes mirando",
            "ejemplo": [
              "You mustn't feed the animals at the zoo.",
              "No debes darles de comer a los animales en el zoológico."
            ]
          },
          {
            "en": "book in advance",
            "es": "reservar con anticipación",
            "imagen": "Persona reservando en su celular",
            "ejemplo": [
              "You don't need to book in advance.",
              "No necesitas reservar con anticipación."
            ]
          },
          {
            "en": "wait in line",
            "es": "hacer fila",
            "imagen": "Personas formadas ordenadamente en una fila",
            "ejemplo": [
              "Everybody has to wait in line.",
              "Todos tienen que hacer fila."
            ]
          }
        ]
      },
      {
        "id": "trabajo",
        "titulo": "Obligaciones del trabajo",
        "icono": "💼",
        "patron": [
          "I have to…",
          "I don't have to…",
          "I'm supposed to…"
        ],
        "palabras": [
          {
            "en": "clock in",
            "es": "checar entrada",
            "imagen": "Empleado checando con su huella al llegar",
            "ejemplo": [
              "I have to clock in before nine.",
              "Tengo que checar antes de las nueve."
            ]
          },
          {
            "en": "attend meetings",
            "es": "asistir a juntas",
            "imagen": "Sala de juntas con empleados en una mesa",
            "ejemplo": [
              "I have to attend a lot of meetings.",
              "Tengo que asistir a muchas juntas."
            ]
          },
          {
            "en": "work weekends",
            "es": "trabajar fines de semana",
            "imagen": "Empleado trabajando un sábado en una tienda",
            "ejemplo": [
              "Luckily, I don't have to work weekends.",
              "Por suerte, no tengo que trabajar los fines de semana."
            ]
          },
          {
            "en": "meet deadlines",
            "es": "cumplir plazos",
            "imagen": "Persona entregando un proyecto justo a tiempo",
            "ejemplo": [
              "We have to meet strict deadlines.",
              "Tenemos que cumplir plazos estrictos."
            ]
          },
          {
            "en": "dress formally",
            "es": "vestir formal",
            "imagen": "Personas con traje en una oficina elegante",
            "ejemplo": [
              "We don't need to dress formally on Fridays.",
              "Los viernes no necesitamos vestir formal."
            ]
          },
          {
            "en": "report to my boss",
            "es": "reportarle a mi jefe",
            "imagen": "Empleado presentando resultados a su jefa",
            "ejemplo": [
              "I have to report to my boss every Monday.",
              "Tengo que reportarle a mi jefe cada lunes."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "It's her birthday. I must call my mother.",
        "es": "Es su cumpleaños. Tengo que llamarle a mi mamá."
      },
      {
        "en": "I have to wear a uniform at work.",
        "es": "En el trabajo tengo que usar uniforme."
      },
      {
        "en": "You mustn't park here. It's for ambulances.",
        "es": "No puedes estacionarte aquí. Es para ambulancias."
      },
      {
        "en": "You don't have to come if you're tired.",
        "es": "No tienes que venir si estás cansado."
      },
      {
        "en": "Yesterday I had to work late.",
        "es": "Ayer tuve que trabajar hasta tarde."
      },
      {
        "en": "The doctor is busy. You'll have to wait.",
        "es": "El doctor está ocupado. Tendrá que esperar."
      },
      {
        "en": "Sorry, I've got to go!",
        "es": "¡Perdón, me tengo que ir!"
      },
      {
        "en": "I'm supposed to be at work at eight.",
        "es": "Se supone que debo estar en el trabajo a las ocho."
      },
      {
        "en": "You mustn't feed the animals at the zoo.",
        "es": "No debes darles de comer a los animales en el zoológico."
      },
      {
        "en": "You don't have to tip. It's included.",
        "es": "No tienes que dejar propina. Ya está incluida."
      }
    ],
    "frases": [
      {
        "en": "At my school we have to wear a uniform, but on Fridays we don't have to.",
        "es": "En mi escuela tenemos que usar uniforme, pero los viernes no.",
        "imagen": "Estudiantes con ropa casual un viernes en la escuela"
      },
      {
        "en": "You mustn't swim here. The current is very strong and it's dangerous.",
        "es": "No debes nadar aquí. La corriente es muy fuerte y es peligroso.",
        "imagen": "Bandera roja en una playa con olas fuertes"
      },
      {
        "en": "I must remember to buy flowers for my grandmother's birthday.",
        "es": "Tengo que acordarme de comprar flores para el cumpleaños de mi abuela.",
        "imagen": "Persona eligiendo flores en un puesto del mercado"
      },
      {
        "en": "When I lived with my parents, I had to be home by eleven every night.",
        "es": "Cuando vivía con mis papás, tenía que estar en casa a las once cada noche.",
        "imagen": "Adolescente entrando a casa de puntitas a las once"
      },
      {
        "en": "You don't need to print the ticket. You can show it on your phone.",
        "es": "No necesitas imprimir el boleto. Lo puedes mostrar en tu celular.",
        "imagen": "Persona mostrando un boleto en su celular en la entrada"
      },
      {
        "en": "If you want to travel to the United States, you'll have to get a visa.",
        "es": "Si quieres viajar a Estados Unidos, tendrás que sacar visa.",
        "imagen": "Persona en la fila de un consulado con documentos"
      },
      {
        "en": "Visitors must sign in at reception and wear a badge at all times.",
        "es": "Los visitantes deben registrarse en recepción y portar gafete en todo momento.",
        "imagen": "Visitante colgándose un gafete en una recepción"
      },
      {
        "en": "We didn't have to cook last night because my sister brought pizza.",
        "es": "Anoche no tuvimos que cocinar porque mi hermana trajo pizza.",
        "imagen": "Hermana llegando con cajas de pizza"
      },
      {
        "en": "I'm supposed to go to the gym three times a week, but I usually go once.",
        "es": "Se supone que debo ir al gimnasio tres veces por semana, pero normalmente voy una.",
        "imagen": "Persona viendo su tenis deportivo junto al sofá con culpa"
      },
      {
        "en": "You needn't bring a towel. The pool gives you one.",
        "es": "No necesitas llevar toalla. La alberca te da una.",
        "imagen": "Toallas dobladas en la entrada de una alberca"
      }
    ],
    "listening": [
      {
        "audio": "You don't have to come to the meeting tomorrow. We'll send you the notes.",
        "pregunta": "¿Tiene que ir a la junta?",
        "opciones": [
          "No, le mandarán las notas",
          "Sí, es obligatorio",
          "Solo un rato",
          "Tiene que presentarla"
        ]
      },
      {
        "audio": "You mustn't take photos in this room. The paintings are very old.",
        "pregunta": "¿Qué está prohibido?",
        "opciones": [
          "Tomar fotos",
          "Hablar",
          "Tocar la puerta",
          "Comer"
        ]
      },
      {
        "audio": "I had to take a taxi because the subway was closed.",
        "pregunta": "¿Por qué tomó un taxi?",
        "opciones": [
          "El metro estaba cerrado",
          "Llegaba tarde",
          "Llovía",
          "Iba cargado"
        ]
      },
      {
        "audio": "All drivers must stop at the checkpoint and show their license.",
        "pregunta": "¿Qué deben mostrar los conductores?",
        "opciones": [
          "Su licencia",
          "Su pasaporte",
          "Su boleto",
          "Su credencial de trabajo"
        ]
      },
      {
        "audio": "Next month you'll have to pay more for the gym because the prices are going up.",
        "pregunta": "¿Qué va a pasar el próximo mes?",
        "opciones": [
          "Tendrá que pagar más",
          "El gimnasio cierra",
          "Le harán descuento",
          "Cambiará el horario"
        ]
      }
    ],
    "lectura": {
      "titulo": "Rules of the apartment building",
      "texto": "Welcome to Jacarandas Building! Please read these rules carefully. Residents must keep the hallways clean and free of bicycles and boxes. You mustn't make loud noise after ten at night or before eight in the morning. Pets are allowed, but dogs must be on a leash in the common areas. You don't have to tell the administration when you have visitors, but they must sign in with the security guard. The garbage has to be separated: organic, recyclable, and other. Residents don't need to pay for the gym, but they must book it online. Parking spaces are assigned, so you mustn't use another resident's space. If you have a problem, you needn't wait for the monthly meeting; you can write to the administrator at any time. Thank you for helping us keep our building a nice place to live.",
      "preguntas": [
        {
          "pregunta": "¿Después de qué hora no se puede hacer ruido?",
          "opciones": [
            "Después de las diez de la noche",
            "Después de las ocho",
            "Después de medianoche",
            "Después de las nueve"
          ]
        },
        {
          "pregunta": "¿Qué deben hacer los visitantes?",
          "opciones": [
            "Registrarse con el guardia",
            "Pagar una cuota",
            "Avisar a la administración",
            "Dejar su identificación"
          ]
        },
        {
          "pregunta": "¿Qué no tienen que hacer los residentes con el gimnasio?",
          "opciones": [
            "Pagarlo",
            "Reservarlo",
            "Limpiarlo",
            "Usarlo"
          ]
        },
        {
          "pregunta": "¿Qué está prohibido en el estacionamiento?",
          "opciones": [
            "Usar el lugar de otro residente",
            "Lavar el carro",
            "Estacionarse de noche",
            "Tener dos carros"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con mustn't o don't have to.",
        "pregunta": "You ___ smoke in the hospital.",
        "respuestas": [
          "mustn't",
          "must not"
        ]
      },
      {
        "instruccion": "Completa con mustn't o don't have to.",
        "pregunta": "It's Sunday. I ___ get up early.",
        "respuestas": [
          "don't have to",
          "do not have to",
          "don't need to"
        ]
      },
      {
        "instruccion": "Completa con had to.",
        "pregunta": "Yesterday I ___ go to the bank.",
        "respuestas": [
          "had to"
        ]
      },
      {
        "instruccion": "Completa con will have to.",
        "pregunta": "Next year you ___ pay more.",
        "respuestas": [
          "will have to",
          "'ll have to"
        ]
      },
      {
        "instruccion": "Completa la pregunta.",
        "pregunta": "___ you have to wear a uniform?",
        "respuestas": [
          "Do"
        ]
      },
      {
        "instruccion": "Completa con supposed.",
        "pregunta": "I'm ___ to be at work now!",
        "respuestas": [
          "supposed"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "No tienes que venir.",
        "respuestas": [
          "You don't have to come",
          "You don't need to come",
          "You needn't come"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Tuve que esperar.",
        "respuestas": [
          "I had to wait"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¡Me tengo que ir!",
        "respuestas": [
          "I've got to go",
          "I have to go",
          "I must go",
          "I gotta go"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "Yesterday I must work late.",
        "respuestas": [
          "Yesterday I had to work late",
          "I had to work late yesterday"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "You ___ drive without a license. It's illegal.",
        "opciones": [
          "mustn't",
          "don't have to",
          "needn't",
          "don't need"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "It's free. You ___ pay.",
        "opciones": [
          "don't have to",
          "mustn't",
          "must",
          "have to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Last week I ___ go to the dentist.",
        "opciones": [
          "had to",
          "must",
          "musted",
          "have to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Does she ___ work on Sundays?",
        "opciones": [
          "have to",
          "has to",
          "must",
          "must to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«You needn't worry» significa:",
        "opciones": [
          "No tienes por qué preocuparte",
          "Debes preocuparte",
          "Está prohibido preocuparse",
          "Tienes que preocuparte"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es correcta?",
        "opciones": [
          "I must go now.",
          "I must to go now.",
          "I musted go yesterday.",
          "I will must go."
        ]
      },
      {
        "tipo": "listening",
        "audio": "You don't need to bring food. Lunch is included in the price of the tour.",
        "pregunta": "¿Por qué no necesita llevar comida?",
        "opciones": [
          "La comida está incluida",
          "No hay tiempo para comer",
          "Venden comida ahí",
          "Está prohibido"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I'm supposed to finish this report today, but I haven't started yet.",
        "pregunta": "¿Qué se supone que debe hacer hoy?",
        "opciones": [
          "Terminar un reporte",
          "Ir a una junta",
          "Viajar",
          "Llamar a un cliente"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Tendrás que esperar.",
        "respuestas": [
          "You'll have to wait",
          "You will have to wait"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: No puedes estacionarte aquí. (prohibido)",
        "respuestas": [
          "You mustn't park here",
          "You must not park here",
          "You can't park here"
        ]
      }
    ]
  },
  {
    "id": "b1-17",
    "num": 17,
    "titulo": "Estilo indirecto: afirmaciones",
    "contexto": "Lo que dijo alguien",
    "explicacion": {
      "es": [
        "El **estilo indirecto** sirve para **contar lo que alguien dijo**. Normalmente el verbo **retrocede un tiempo**: *«I **am** tired.» → She said (that) she **was** tired.* (Dijo que estaba cansada.)",
        "Cambios típicos: **presente → pasado** (*I like → he liked*), **presente continuo → pasado continuo** (*I'm working → she was working*), **pasado / presente perfecto → pasado perfecto** (*I lost / I've lost → he had lost*), ***will → would***, ***can → could***.",
        "También cambian los **pronombres** y algunas **palabras de tiempo y lugar**: *I → he / she, my → his / her, today → that day, tomorrow → the next day, yesterday → the day before, here → there, now → then*.",
        "***Say*** vs. ***tell***: ***tell*** necesita **a quién**: *She **told me** that…* ***Say*** no lleva persona directa: *She **said** that…* (o *said **to** me*). El *that* se puede omitir."
      ],
      "tabla": {
        "columnas": [
          "Lo que dijo (directo)",
          "Lo que contamos (indirecto)"
        ],
        "filas": [
          [
            "«I'm hungry.»",
            "He said he was hungry."
          ],
          [
            "«We're leaving.»",
            "They said they were leaving."
          ],
          [
            "«I saw the movie.»",
            "She said she had seen the movie."
          ],
          [
            "«I'll call you.»",
            "He told me he would call me."
          ],
          [
            "«I can help.»",
            "She said she could help."
          ]
        ]
      },
      "ojo": [
        "*He **said me*** ❌ → *He **told me*** ✅ o *He **said to me*** ✅.",
        "Si lo que se dijo **sigue siendo verdad**, se puede no cambiar el tiempo: *She said she **lives** in Puebla* (todavía vive ahí).",
        "Si el verbo de reporte está en presente, no cambia nada: *He **says** he **is** tired.*",
        "*Must* suele pasar a ***had to***: *«I must go.» → He said he **had to** go.*",
        "Otros verbos útiles para reportar: ***explain, mention, promise, admit, complain***: *She **complained** that the food was cold.*"
      ],
      "en": [
        "Reported speech tells what someone said. The verb usually goes back one tense: I am tired. She said she was tired.",
        "Will becomes would and can becomes could: He told me he would call me.",
        "Tell needs a person: She told me. Say doesn't: She said that she was busy."
      ]
    },
    "vocabulario": [
      {
        "en": "She said she was tired.",
        "es": "dijo que estaba cansada",
        "imagen": "Mujer bostezando mientras habla con una amiga",
        "ejemplo": [
          "She said she was tired and went to bed.",
          "Dijo que estaba cansada y se fue a dormir."
        ]
      },
      {
        "en": "He told me he would call.",
        "es": "me dijo que llamaría",
        "imagen": "Persona mirando su celular esperando una llamada",
        "ejemplo": [
          "He told me he would call, but he didn't.",
          "Me dijo que llamaría, pero no lo hizo."
        ]
      },
      {
        "en": "They said they were leaving.",
        "es": "dijeron que se iban",
        "imagen": "Pareja despidiéndose en la puerta con sus abrigos",
        "ejemplo": [
          "They said they were leaving early.",
          "Dijeron que se iban temprano."
        ]
      },
      {
        "en": "She said she had lost her keys.",
        "es": "dijo que había perdido sus llaves",
        "imagen": "Mujer buscando en su bolsa frente a una puerta",
        "ejemplo": [
          "She said she had lost her keys.",
          "Dijo que había perdido sus llaves."
        ]
      },
      {
        "en": "He said he could help.",
        "es": "dijo que podía ayudar",
        "imagen": "Vecino ofreciéndose a ayudar con una mudanza",
        "ejemplo": [
          "My neighbor said he could help us move.",
          "Mi vecino dijo que nos podía ayudar con la mudanza."
        ]
      },
      {
        "en": "She told me she loved me.",
        "es": "me dijo que me quería",
        "imagen": "Pareja mirándose con cariño en una banca",
        "ejemplo": [
          "She told me she loved me.",
          "Me dijo que me quería."
        ]
      },
      {
        "en": "The doctor said I had to rest.",
        "es": "el doctor dijo que tenía que descansar",
        "imagen": "Doctor dando indicaciones a un paciente",
        "ejemplo": [
          "The doctor said I had to rest for a week.",
          "El doctor dijo que tenía que descansar una semana."
        ]
      },
      {
        "en": "He said he didn't know.",
        "es": "dijo que no sabía",
        "imagen": "Persona encogiéndose de hombros",
        "ejemplo": [
          "I asked him, but he said he didn't know.",
          "Le pregunté, pero dijo que no sabía."
        ]
      },
      {
        "en": "She mentioned that she was moving.",
        "es": "mencionó que se iba a mudar",
        "imagen": "Amiga contando una noticia en un café",
        "ejemplo": [
          "She mentioned that she was moving to Canada.",
          "Mencionó que se iba a mudar a Canadá."
        ]
      },
      {
        "en": "He promised he would be on time.",
        "es": "prometió que llegaría a tiempo",
        "imagen": "Persona mostrando su reloj con seguridad",
        "ejemplo": [
          "He promised he would be on time.",
          "Prometió que llegaría a tiempo."
        ]
      },
      {
        "en": "They told us the store was closed.",
        "es": "nos dijeron que la tienda estaba cerrada",
        "imagen": "Guardia señalando una tienda cerrada a unos clientes",
        "ejemplo": [
          "They told us the store was closed.",
          "Nos dijeron que la tienda estaba cerrada."
        ]
      },
      {
        "en": "She explained that the bus was late.",
        "es": "explicó que el camión se retrasó",
        "imagen": "Persona llegando apurada a la oficina explicando",
        "ejemplo": [
          "She explained that the bus had been late.",
          "Explicó que el camión se había retrasado."
        ]
      },
      {
        "en": "He admitted he had made a mistake.",
        "es": "admitió que se había equivocado",
        "imagen": "Empleado apenado hablando con su jefa",
        "ejemplo": [
          "He admitted he had made a mistake.",
          "Admitió que se había equivocado."
        ]
      },
      {
        "en": "My mom said dinner was ready.",
        "es": "mi mamá dijo que la cena estaba lista",
        "imagen": "Mamá llamando a la familia a la mesa servida",
        "ejemplo": [
          "My mom said dinner was ready.",
          "Mi mamá dijo que la cena estaba lista."
        ]
      },
      {
        "en": "She complained that the food was cold.",
        "es": "se quejó de que la comida estaba fría",
        "imagen": "Clienta hablando con un mesero frente a su plato",
        "ejemplo": [
          "She complained that the food was cold.",
          "Se quejó de que la comida estaba fría."
        ]
      },
      {
        "en": "He says he's coming.",
        "es": "dice que viene",
        "imagen": "Persona leyendo un mensaje en su celular",
        "ejemplo": [
          "He says he's coming in ten minutes.",
          "Dice que viene en diez minutos."
        ]
      }
    ],
    "grupos": [
      {
        "id": "saytell",
        "titulo": "Say o tell",
        "icono": "🗣️",
        "patron": [
          "She said that…",
          "He told me that…",
          "They said to us…"
        ],
        "palabras": [
          {
            "en": "She said that",
            "es": "ella dijo que",
            "imagen": "Mujer hablando en una reunión",
            "ejemplo": [
              "She said that the meeting was canceled.",
              "Dijo que la junta se había cancelado."
            ]
          },
          {
            "en": "He told me that",
            "es": "él me dijo que",
            "imagen": "Amigo contándole algo al oído a otro",
            "ejemplo": [
              "He told me that he was getting married.",
              "Me dijo que se iba a casar."
            ]
          },
          {
            "en": "tell the truth",
            "es": "decir la verdad",
            "imagen": "Persona hablando con honestidad mirando a los ojos",
            "ejemplo": [
              "You should always tell the truth.",
              "Siempre deberías decir la verdad."
            ]
          },
          {
            "en": "tell a lie",
            "es": "decir una mentira",
            "imagen": "Niño con las manos detrás de la espalda y cara nerviosa",
            "ejemplo": [
              "He told a lie to his teacher.",
              "Le dijo una mentira a su maestra."
            ]
          },
          {
            "en": "tell a story",
            "es": "contar una historia",
            "imagen": "Abuelo contando una historia a sus nietos",
            "ejemplo": [
              "My grandpa told us a funny story.",
              "Mi abuelo nos contó una historia chistosa."
            ]
          },
          {
            "en": "say goodbye",
            "es": "despedirse",
            "imagen": "Amigos abrazándose en una estación",
            "ejemplo": [
              "She left without saying goodbye.",
              "Se fue sin despedirse."
            ]
          },
          {
            "en": "say sorry",
            "es": "pedir perdón",
            "imagen": "Persona disculpándose con las manos juntas",
            "ejemplo": [
              "He said sorry for being late.",
              "Pidió perdón por llegar tarde."
            ]
          },
          {
            "en": "tell a joke",
            "es": "contar un chiste",
            "imagen": "Persona contando un chiste y todos riéndose",
            "ejemplo": [
              "My uncle always tells bad jokes.",
              "Mi tío siempre cuenta chistes malos."
            ]
          }
        ]
      },
      {
        "id": "tiempo",
        "titulo": "Cambios de tiempo y lugar",
        "icono": "🔄",
        "patron": [
          "that day",
          "the next day",
          "the day before"
        ],
        "palabras": [
          {
            "en": "that day",
            "es": "ese día",
            "imagen": "Calendario con un día marcado en el pasado",
            "ejemplo": [
              "She said she was busy that day.",
              "Dijo que estaba ocupada ese día."
            ]
          },
          {
            "en": "the next day",
            "es": "al día siguiente",
            "imagen": "Amanecer sobre una ciudad tranquila",
            "ejemplo": [
              "He said he would come the next day.",
              "Dijo que vendría al día siguiente."
            ]
          },
          {
            "en": "the day before",
            "es": "el día anterior",
            "imagen": "Calendario con el día anterior señalado",
            "ejemplo": [
              "She said she had seen him the day before.",
              "Dijo que lo había visto el día anterior."
            ]
          },
          {
            "en": "the following week",
            "es": "la semana siguiente",
            "imagen": "Agenda abierta en la semana siguiente",
            "ejemplo": [
              "They said they would start the following week.",
              "Dijeron que empezarían la semana siguiente."
            ]
          },
          {
            "en": "there",
            "es": "ahí",
            "imagen": "Persona señalando un lugar a lo lejos",
            "ejemplo": [
              "He said he had lived there for years.",
              "Dijo que había vivido ahí por años."
            ]
          },
          {
            "en": "then",
            "es": "en ese momento",
            "imagen": "Reloj antiguo de pared",
            "ejemplo": [
              "She said she was busy then.",
              "Dijo que en ese momento estaba ocupada."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "She said she was tired and went to bed.",
        "es": "Dijo que estaba cansada y se fue a dormir."
      },
      {
        "en": "He told me he would call, but he didn't.",
        "es": "Me dijo que llamaría, pero no lo hizo."
      },
      {
        "en": "My neighbor said he could help us move.",
        "es": "Mi vecino dijo que nos podía ayudar con la mudanza."
      },
      {
        "en": "The doctor said I had to rest for a week.",
        "es": "El doctor dijo que tenía que descansar una semana."
      },
      {
        "en": "She mentioned that she was moving to Canada.",
        "es": "Mencionó que se iba a mudar a Canadá."
      },
      {
        "en": "He told me that he was getting married.",
        "es": "Me dijo que se iba a casar."
      },
      {
        "en": "She left without saying goodbye.",
        "es": "Se fue sin despedirse."
      },
      {
        "en": "He admitted he had made a mistake.",
        "es": "Admitió que se había equivocado."
      },
      {
        "en": "He says he's coming in ten minutes.",
        "es": "Dice que viene en diez minutos."
      },
      {
        "en": "They told us the store was closed.",
        "es": "Nos dijeron que la tienda estaba cerrada."
      }
    ],
    "frases": [
      {
        "en": "My boss told me that I was doing a great job and that I would get a raise next year.",
        "es": "Mi jefe me dijo que estaba haciendo un gran trabajo y que me darían un aumento el próximo año.",
        "imagen": "Jefa felicitando a un empleado en la oficina"
      },
      {
        "en": "Ana said she had already seen the movie, so she didn't want to come with us.",
        "es": "Ana dijo que ya había visto la película, así que no quiso venir con nosotros.",
        "imagen": "Amigos en la entrada del cine y una amiga despidiéndose"
      },
      {
        "en": "The weather forecast said it would rain in the afternoon, but it was sunny all day.",
        "es": "El pronóstico dijo que llovería en la tarde, pero hizo sol todo el día.",
        "imagen": "Persona con paraguas cerrado bajo un sol radiante"
      },
      {
        "en": "My grandmother told me that she had met my grandfather at a dance in 1965.",
        "es": "Mi abuela me contó que había conocido a mi abuelo en un baile en 1965.",
        "imagen": "Abuela mostrando una foto antigua a su nieta"
      },
      {
        "en": "He said he couldn't come to the party because he had to work.",
        "es": "Dijo que no podía venir a la fiesta porque tenía que trabajar.",
        "imagen": "Persona leyendo un mensaje de disculpa en una fiesta"
      },
      {
        "en": "The mechanic told us the car was ready and that it would cost three thousand pesos.",
        "es": "El mecánico nos dijo que el carro estaba listo y que costaría tres mil pesos.",
        "imagen": "Mecánico entregando las llaves de un carro reparado"
      },
      {
        "en": "She said she was sorry and promised she would never do it again.",
        "es": "Dijo que lo sentía y prometió que nunca lo volvería a hacer.",
        "imagen": "Persona disculpándose sinceramente con su amiga"
      },
      {
        "en": "The teacher explained that the exam would be on Friday and that it would be difficult.",
        "es": "La maestra explicó que el examen sería el viernes y que estaría difícil.",
        "imagen": "Maestra explicando algo frente al pizarrón a sus alumnos"
      },
      {
        "en": "They told me they were living in Madrid, but they wanted to come back to Mexico.",
        "es": "Me dijeron que vivían en Madrid, pero que querían regresar a México.",
        "imagen": "Pareja en una videollamada desde un departamento en Madrid"
      },
      {
        "en": "My son says he wants to be an astronaut when he grows up.",
        "es": "Mi hijo dice que quiere ser astronauta cuando sea grande.",
        "imagen": "Niño con un casco de astronauta de juguete mirando las estrellas"
      }
    ],
    "listening": [
      {
        "audio": "Carlos told me he was going to quit his job and open a restaurant.",
        "pregunta": "¿Qué va a hacer Carlos?",
        "opciones": [
          "Dejar su trabajo y abrir un restaurante",
          "Cambiar de ciudad",
          "Casarse",
          "Estudiar cocina"
        ]
      },
      {
        "audio": "The receptionist said that the doctor would see me at four.",
        "pregunta": "¿A qué hora lo verá el doctor?",
        "opciones": [
          "A las cuatro",
          "A las dos",
          "A las cinco",
          "Mañana"
        ]
      },
      {
        "audio": "My sister said she had lost her phone on the subway.",
        "pregunta": "¿Dónde perdió el celular?",
        "opciones": [
          "En el metro",
          "En el camión",
          "En el trabajo",
          "En un taxi"
        ]
      },
      {
        "audio": "He promised he would pay me back next week, but that was two months ago.",
        "pregunta": "¿Cuándo hizo la promesa?",
        "opciones": [
          "Hace dos meses",
          "La semana pasada",
          "Ayer",
          "Hace un año"
        ]
      },
      {
        "audio": "The pilot said we were going to land in twenty minutes.",
        "pregunta": "¿En cuánto tiempo aterrizarán?",
        "opciones": [
          "Veinte minutos",
          "Dos horas",
          "Diez minutos",
          "Media hora"
        ]
      }
    ],
    "lectura": {
      "titulo": "What everybody said",
      "texto": "Last week my friend Sofía had a job interview at a big advertising agency. Before the interview, her mother told her not to be nervous. Her best friend said she would definitely get the job, because she was the most creative person she knew. In the interview, the manager said that they had received more than a hundred applications. Sofía told him that she had worked as a freelance designer for three years and that she could start immediately. The manager said he liked her portfolio, but that he needed to talk to his team. He promised he would call her the following Monday. On Monday, Sofía waited all day. At six o'clock the phone finally rang. The manager said that they had chosen her for the job! Sofía told me later that it was the best phone call of her life.",
      "preguntas": [
        {
          "pregunta": "¿Qué dijo su mejor amiga?",
          "opciones": [
            "Que seguro conseguiría el trabajo",
            "Que no fuera",
            "Que estuviera tranquila",
            "Que buscara otro trabajo"
          ]
        },
        {
          "pregunta": "¿Cuántas solicitudes habían recibido?",
          "opciones": [
            "Más de cien",
            "Diez",
            "Cincuenta",
            "Mil"
          ]
        },
        {
          "pregunta": "¿Cuánto tiempo trabajó Sofía como diseñadora independiente?",
          "opciones": [
            "Tres años",
            "Un año",
            "Cinco años",
            "Seis meses"
          ]
        },
        {
          "pregunta": "¿A qué hora sonó el teléfono el lunes?",
          "opciones": [
            "A las seis",
            "A las nueve",
            "A mediodía",
            "No sonó"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Pasa a estilo indirecto.",
        "pregunta": "«I am hungry.» → He said he ___ hungry.",
        "respuestas": [
          "was"
        ]
      },
      {
        "instruccion": "Pasa a estilo indirecto.",
        "pregunta": "«I will help you.» → She said she ___ help me.",
        "respuestas": [
          "would"
        ]
      },
      {
        "instruccion": "Pasa a estilo indirecto.",
        "pregunta": "«I can swim.» → He said he ___ swim.",
        "respuestas": [
          "could"
        ]
      },
      {
        "instruccion": "Pasa a estilo indirecto.",
        "pregunta": "«We are leaving.» → They said they ___ leaving.",
        "respuestas": [
          "were"
        ]
      },
      {
        "instruccion": "Pasa a estilo indirecto.",
        "pregunta": "«I saw the accident.» → She said she ___ seen the accident.",
        "respuestas": [
          "had"
        ]
      },
      {
        "instruccion": "Completa con said o told.",
        "pregunta": "She ___ me that she was busy.",
        "respuestas": [
          "told"
        ]
      },
      {
        "instruccion": "Completa con said o told.",
        "pregunta": "He ___ that the movie was boring.",
        "respuestas": [
          "said"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Dijo que estaba cansada.",
        "respuestas": [
          "She said she was tired",
          "She said that she was tired"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Me dijo que llamaría.",
        "respuestas": [
          "He told me he would call",
          "She told me she would call",
          "He told me that he would call",
          "She told me that she would call"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "She said me that she was sick.",
        "respuestas": [
          "She told me that she was sick",
          "She told me she was sick",
          "She said that she was sick",
          "She said to me that she was sick"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "«I like pizza.» → He said he ___ pizza.",
        "opciones": [
          "liked",
          "likes will",
          "is liking",
          "like"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«I'm working.» → She said she ___ working.",
        "opciones": [
          "was",
          "is been",
          "were",
          "had"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«I'll be late.» → He told me he ___ be late.",
        "opciones": [
          "would",
          "will",
          "can",
          "was"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She ___ me a secret.",
        "opciones": [
          "told",
          "said",
          "says to",
          "talked"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«I lost my wallet.» → He said he ___ his wallet.",
        "opciones": [
          "had lost",
          "has lost",
          "loses",
          "was lose"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«I'll see you tomorrow.» → She said she would see me ___.",
        "opciones": [
          "the next day",
          "yesterday",
          "tomorrow ago",
          "the day before"
        ]
      },
      {
        "tipo": "listening",
        "audio": "My father told me that he had worked in a factory when he was young.",
        "pregunta": "¿Dónde trabajaba el papá de joven?",
        "opciones": [
          "En una fábrica",
          "En una oficina",
          "En el campo",
          "En una tienda"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The waiter said the kitchen was closed, so we went to another restaurant.",
        "pregunta": "¿Por qué fueron a otro restaurante?",
        "opciones": [
          "La cocina estaba cerrada",
          "Estaba lleno",
          "Era muy caro",
          "No les gustó la comida"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Dijo que no sabía.",
        "respuestas": [
          "He said he didn't know",
          "She said she didn't know",
          "He said that he didn't know",
          "She said that she didn't know"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Se fue sin despedirse.",
        "respuestas": [
          "He left without saying goodbye",
          "She left without saying goodbye"
        ]
      }
    ]
  },
  {
    "id": "b1-18",
    "num": 18,
    "titulo": "Preguntas coletilla (question tags)",
    "contexto": "Conversaciones informales",
    "explicacion": {
      "es": [
        "Las **question tags** son las preguntitas al final de la oración, como el ***¿verdad?*** o ***¿no?*** del español: *It's hot today, **isn't it**?* (Hace calor hoy, ¿verdad?)",
        "Regla básica: si la oración es **afirmativa**, la coletilla es **negativa**; si es **negativa**, la coletilla es **afirmativa**: *You're Mexican, **aren't you**? / You aren't tired, **are you**?*",
        "Se repite el **auxiliar** (*be, do, have, can, will…*) y se usa un **pronombre**: *She **can** swim, **can't she**? They **went** home, **didn't they**? You**'ve** been here before, **haven't you**?* Si no hay auxiliar, se usa ***do / does / did***.",
        "La **entonación** cambia el sentido: **bajando** la voz es solo para **confirmar** algo que crees seguro; **subiendo** la voz es una **pregunta real** porque no estás seguro."
      ],
      "tabla": {
        "columnas": [
          "Oración",
          "Coletilla"
        ],
        "filas": [
          [
            "It's cold,",
            "isn't it?"
          ],
          [
            "You like coffee,",
            "don't you?"
          ],
          [
            "She didn't call,",
            "did she?"
          ],
          [
            "They can come,",
            "can't they?"
          ],
          [
            "He'll be here soon,",
            "won't he?"
          ],
          [
            "I'm late,",
            "aren't I?"
          ]
        ]
      },
      "ojo": [
        "Con ***I am*** la coletilla es ***aren't I?***: *I'm right, **aren't I**?* (no *amn't I* ❌).",
        "Con imperativos y sugerencias: *Close the door, **will you**?* / *Let's go, **shall we**?*",
        "Con ***nobody, nothing, never*** la oración ya es negativa: *Nobody called, **did they**? You never eat meat, **do you**?*",
        "***There is*** → ***isn't there?***: *There's a bank near here, **isn't there**?*",
        "En conversación también se usa solo ***right?***: *You're coming tomorrow, **right**?*"
      ],
      "en": [
        "Question tags are short questions at the end: It's hot today, isn't it?",
        "A positive sentence has a negative tag, and a negative sentence has a positive tag: You aren't tired, are you?",
        "We repeat the auxiliary: She can swim, can't she? They went home, didn't they?",
        "With I am, use aren't I: I'm right, aren't I?"
      ]
    },
    "vocabulario": [
      {
        "en": "It's hot today, isn't it?",
        "es": "hace calor hoy, ¿verdad?",
        "imagen": "Dos personas abanicándose en una banca al sol",
        "ejemplo": [
          "It's really hot today, isn't it?",
          "Hace mucho calor hoy, ¿verdad?"
        ]
      },
      {
        "en": "You're Mexican, aren't you?",
        "es": "eres mexicano, ¿verdad?",
        "imagen": "Turistas platicando en un aeropuerto extranjero",
        "ejemplo": [
          "You're Mexican, aren't you? I love your accent.",
          "Eres mexicano, ¿verdad? Me encanta tu acento."
        ]
      },
      {
        "en": "You don't eat meat, do you?",
        "es": "no comes carne, ¿verdad?",
        "imagen": "Persona sirviendo una ensalada a su invitado",
        "ejemplo": [
          "You don't eat meat, do you?",
          "No comes carne, ¿verdad?"
        ]
      },
      {
        "en": "She can speak French, can't she?",
        "es": "ella habla francés, ¿no?",
        "imagen": "Mujer conversando con un turista francés",
        "ejemplo": [
          "She can speak French, can't she?",
          "Ella habla francés, ¿no?"
        ]
      },
      {
        "en": "They went to the party, didn't they?",
        "es": "fueron a la fiesta, ¿no?",
        "imagen": "Amigos con gorros de fiesta saliendo de una casa",
        "ejemplo": [
          "They went to the party last night, didn't they?",
          "Fueron a la fiesta anoche, ¿no?"
        ]
      },
      {
        "en": "You've been here before, haven't you?",
        "es": "ya habías venido, ¿verdad?",
        "imagen": "Persona entrando con familiaridad a un restaurante",
        "ejemplo": [
          "You've been here before, haven't you?",
          "Ya habías venido aquí, ¿verdad?"
        ]
      },
      {
        "en": "He'll be here soon, won't he?",
        "es": "ya va a llegar, ¿verdad?",
        "imagen": "Persona mirando el reloj en la entrada de una casa",
        "ejemplo": [
          "He'll be here soon, won't he?",
          "Ya va a llegar, ¿verdad?"
        ]
      },
      {
        "en": "I'm late, aren't I?",
        "es": "llegué tarde, ¿verdad?",
        "imagen": "Persona entrando apurada a una reunión",
        "ejemplo": [
          "I'm late again, aren't I? Sorry!",
          "Llegué tarde otra vez, ¿verdad? ¡Perdón!"
        ]
      },
      {
        "en": "There's a pharmacy near here, isn't there?",
        "es": "hay una farmacia cerca, ¿no?",
        "imagen": "Turista preguntando a un local en la calle",
        "ejemplo": [
          "There's a pharmacy near here, isn't there?",
          "Hay una farmacia cerca de aquí, ¿no?"
        ]
      },
      {
        "en": "Let's go, shall we?",
        "es": "vámonos, ¿no?",
        "imagen": "Amigos levantándose de la mesa de un café",
        "ejemplo": [
          "It's getting late. Let's go, shall we?",
          "Ya se hace tarde. Vámonos, ¿no?"
        ]
      },
      {
        "en": "Close the door, will you?",
        "es": "cierra la puerta, ¿sí?",
        "imagen": "Persona señalando la puerta abierta en una oficina",
        "ejemplo": [
          "Close the door, will you? It's cold.",
          "Cierra la puerta, ¿sí? Hace frío."
        ]
      },
      {
        "en": "Nobody called, did they?",
        "es": "nadie llamó, ¿verdad?",
        "imagen": "Persona revisando el teléfono de casa",
        "ejemplo": [
          "Nobody called while I was out, did they?",
          "Nadie llamó mientras no estaba, ¿verdad?"
        ]
      },
      {
        "en": "You won't tell anyone, will you?",
        "es": "no le vas a decir a nadie, ¿verdad?",
        "imagen": "Amiga contando un secreto en voz baja",
        "ejemplo": [
          "You won't tell anyone, will you?",
          "No le vas a decir a nadie, ¿verdad?"
        ]
      },
      {
        "en": "It wasn't expensive, was it?",
        "es": "no fue caro, ¿verdad?",
        "imagen": "Persona mostrando unos tenis nuevos",
        "ejemplo": [
          "It wasn't very expensive, was it?",
          "No fue muy caro, ¿verdad?"
        ]
      },
      {
        "en": "You're coming tomorrow, right?",
        "es": "vienes mañana, ¿verdad?",
        "imagen": "Amigos despidiéndose en la puerta",
        "ejemplo": [
          "You're coming tomorrow, right?",
          "Vienes mañana, ¿verdad?"
        ]
      },
      {
        "en": "She hasn't finished yet, has she?",
        "es": "todavía no termina, ¿verdad?",
        "imagen": "Persona esperando afuera de un salón de examen",
        "ejemplo": [
          "She hasn't finished the exam yet, has she?",
          "Todavía no termina el examen, ¿verdad?"
        ]
      }
    ],
    "grupos": [
      {
        "id": "platica",
        "titulo": "Para hacer plática",
        "icono": "☕",
        "patron": [
          "Nice day, isn't it?",
          "…, aren't you?",
          "…, don't you think?"
        ],
        "palabras": [
          {
            "en": "Nice day, isn't it?",
            "es": "lindo día, ¿verdad?",
            "imagen": "Parque soleado con gente paseando",
            "ejemplo": [
              "Nice day today, isn't it?",
              "Lindo día hoy, ¿verdad?"
            ]
          },
          {
            "en": "Long line, isn't it?",
            "es": "larga la fila, ¿no?",
            "imagen": "Fila larga en un banco con gente aburrida",
            "ejemplo": [
              "Long line today, isn't it?",
              "Larga la fila hoy, ¿no?"
            ]
          },
          {
            "en": "You work here, don't you?",
            "es": "trabajas aquí, ¿verdad?",
            "imagen": "Persona preguntando a alguien en una oficina",
            "ejemplo": [
              "You work on the third floor, don't you?",
              "Trabajas en el tercer piso, ¿verdad?"
            ]
          },
          {
            "en": "The food is great, isn't it?",
            "es": "la comida está buenísima, ¿no?",
            "imagen": "Amigos disfrutando una comida en un restaurante",
            "ejemplo": [
              "The food here is great, isn't it?",
              "La comida aquí está buenísima, ¿no?"
            ]
          },
          {
            "en": "It's been a long week, hasn't it?",
            "es": "ha sido una semana larga, ¿verdad?",
            "imagen": "Compañeros cansados saliendo de la oficina el viernes",
            "ejemplo": [
              "It's been a long week, hasn't it?",
              "Ha sido una semana larga, ¿verdad?"
            ]
          },
          {
            "en": "You're a friend of Ana's, aren't you?",
            "es": "eres amigo de Ana, ¿verdad?",
            "imagen": "Dos personas presentándose en una fiesta",
            "ejemplo": [
              "You're a friend of Ana's, aren't you?",
              "Eres amigo de Ana, ¿verdad?"
            ]
          }
        ]
      },
      {
        "id": "respuestas",
        "titulo": "Responder",
        "icono": "💬",
        "patron": [
          "Yes, it is.",
          "No, I don't.",
          "I think so."
        ],
        "palabras": [
          {
            "en": "Yes, it is.",
            "es": "sí, ¿verdad?",
            "imagen": "Persona asintiendo con una sonrisa",
            "ejemplo": [
              "Hot today, isn't it? Yes, it is!",
              "Hace calor, ¿verdad? ¡Sí!"
            ]
          },
          {
            "en": "No, it isn't.",
            "es": "no, para nada",
            "imagen": "Persona negando con la cabeza amablemente",
            "ejemplo": [
              "It isn't far, is it? No, it isn't. Five minutes.",
              "No está lejos, ¿verdad? No. Cinco minutos."
            ]
          },
          {
            "en": "I think so.",
            "es": "creo que sí",
            "imagen": "Persona pensativa asintiendo",
            "ejemplo": [
              "The store is open today, isn't it? I think so.",
              "La tienda abre hoy, ¿no? Creo que sí."
            ]
          },
          {
            "en": "I don't think so.",
            "es": "creo que no",
            "imagen": "Persona dudando con la mano en la barbilla",
            "ejemplo": [
              "He's coming, isn't he? I don't think so.",
              "Viene, ¿verdad? Creo que no."
            ]
          },
          {
            "en": "I guess so.",
            "es": "supongo que sí",
            "imagen": "Persona encogiéndose de hombros",
            "ejemplo": [
              "We should go, shouldn't we? I guess so.",
              "Deberíamos irnos, ¿no? Supongo que sí."
            ]
          },
          {
            "en": "Of course!",
            "es": "¡claro!",
            "imagen": "Persona sonriendo y aceptando una invitación",
            "ejemplo": [
              "You'll come to my wedding, won't you? Of course!",
              "Vas a venir a mi boda, ¿verdad? ¡Claro!"
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "It's really hot today, isn't it?",
        "es": "Hace mucho calor hoy, ¿verdad?"
      },
      {
        "en": "You don't eat meat, do you?",
        "es": "No comes carne, ¿verdad?"
      },
      {
        "en": "They went to the party last night, didn't they?",
        "es": "Fueron a la fiesta anoche, ¿no?"
      },
      {
        "en": "I'm late again, aren't I? Sorry!",
        "es": "Llegué tarde otra vez, ¿verdad? ¡Perdón!"
      },
      {
        "en": "It's getting late. Let's go, shall we?",
        "es": "Ya se hace tarde. Vámonos, ¿no?"
      },
      {
        "en": "You won't tell anyone, will you?",
        "es": "No le vas a decir a nadie, ¿verdad?"
      },
      {
        "en": "Nobody called while I was out, did they?",
        "es": "Nadie llamó mientras no estaba, ¿verdad?"
      },
      {
        "en": "You're a friend of Ana's, aren't you?",
        "es": "Eres amigo de Ana, ¿verdad?"
      },
      {
        "en": "The store is open today, isn't it? I think so.",
        "es": "La tienda abre hoy, ¿no? Creo que sí."
      },
      {
        "en": "You're coming tomorrow, right?",
        "es": "Vienes mañana, ¿verdad?"
      }
    ],
    "frases": [
      {
        "en": "You've met my husband before, haven't you? We met at Laura's wedding.",
        "es": "Ya conocías a mi esposo, ¿verdad? Nos conocimos en la boda de Laura.",
        "imagen": "Pareja saludando a una amiga en una fiesta"
      },
      {
        "en": "It's a beautiful city, isn't it? I didn't know it had so many museums.",
        "es": "Es una ciudad preciosa, ¿verdad? No sabía que tuviera tantos museos.",
        "imagen": "Turistas admirando una plaza con edificios históricos"
      },
      {
        "en": "You didn't forget to buy the tickets, did you? The concert is tonight!",
        "es": "No se te olvidó comprar los boletos, ¿verdad? ¡El concierto es hoy en la noche!",
        "imagen": "Persona buscando los boletos en su celular con prisa"
      },
      {
        "en": "She's the new manager, isn't she? She seems very nice.",
        "es": "Ella es la nueva gerente, ¿no? Parece muy amable.",
        "imagen": "Nueva gerente saludando a su equipo en la oficina"
      },
      {
        "en": "We don't have to work on Monday, do we? It's a holiday.",
        "es": "No tenemos que trabajar el lunes, ¿verdad? Es día festivo.",
        "imagen": "Calendario con un lunes festivo marcado"
      },
      {
        "en": "You can drive, can't you? I'm too tired to drive home.",
        "es": "Tú puedes manejar, ¿no? Estoy demasiado cansado para manejar a casa.",
        "imagen": "Persona entregando las llaves del carro a su amigo"
      },
      {
        "en": "The traffic was terrible this morning, wasn't it? It took me two hours.",
        "es": "El tráfico estuvo terrible esta mañana, ¿verdad? Me tardé dos horas.",
        "imagen": "Avenida con mucho tráfico en la mañana"
      },
      {
        "en": "You'll call me when you arrive, won't you? I'll be worried.",
        "es": "Me llamas cuando llegues, ¿sí? Voy a estar preocupada.",
        "imagen": "Mamá despidiendo a su hijo en la central de autobuses"
      },
      {
        "en": "There isn't any milk left, is there? I'll go to the store.",
        "es": "Ya no queda leche, ¿verdad? Voy a la tienda.",
        "imagen": "Refrigerador abierto sin leche"
      },
      {
        "en": "Let's order Chinese food tonight, shall we? I don't feel like cooking.",
        "es": "Pidamos comida china hoy, ¿no? No tengo ganas de cocinar.",
        "imagen": "Pareja viendo un menú de comida china en el celular"
      }
    ],
    "listening": [
      {
        "audio": "You're Lucía's brother, aren't you? Yes, I am. Nice to meet you.",
        "pregunta": "¿Quién es la persona?",
        "opciones": [
          "El hermano de Lucía",
          "El novio de Lucía",
          "El papá de Lucía",
          "Un compañero de trabajo"
        ]
      },
      {
        "audio": "The museum is closed on Mondays, isn't it? Yes, so let's go on Tuesday.",
        "pregunta": "¿Qué día irán al museo?",
        "opciones": [
          "El martes",
          "El lunes",
          "El domingo",
          "El miércoles"
        ]
      },
      {
        "audio": "You haven't seen my glasses, have you? I can't find them anywhere.",
        "pregunta": "¿Qué busca?",
        "opciones": [
          "Sus lentes",
          "Sus llaves",
          "Su celular",
          "Su cartera"
        ]
      },
      {
        "audio": "It's going to rain this afternoon, isn't it? I think so. Take an umbrella.",
        "pregunta": "¿Qué le aconseja?",
        "opciones": [
          "Llevar paraguas",
          "Quedarse en casa",
          "Llevar chamarra",
          "Salir temprano"
        ]
      },
      {
        "audio": "You didn't pay for my coffee, did you? Yes, I did. It's my treat.",
        "pregunta": "¿Quién pagó el café?",
        "opciones": [
          "La otra persona",
          "Nadie",
          "La persona que pregunta",
          "Lo pagaron entre los dos"
        ]
      }
    ],
    "lectura": {
      "titulo": "Small talk at the bus stop",
      "texto": "Every morning, Mrs. Ruiz waits for the bus at the same stop, and she always talks to the people around her. Today it was a young man with a guitar. Cold this morning, isn't it? she said. Yes, it is, he answered, smiling. You're a musician, aren't you? she asked, looking at his guitar. Well, I'm a student, he said. I study music at the university. Then you play very well, don't you? she said. He laughed. Not yet, but I practice a lot. The bus was late, as usual. This bus is never on time, is it? said the young man. Never! said Mrs. Ruiz. You know, my grandson plays the guitar, too. You'd like to meet him, wouldn't you? Before he could answer, the bus arrived. He got on, waved goodbye, and thought: she's the friendliest person in the city, isn't she?",
      "preguntas": [
        {
          "pregunta": "¿Qué llevaba el joven?",
          "opciones": [
            "Una guitarra",
            "Un libro",
            "Un paraguas",
            "Una mochila grande"
          ]
        },
        {
          "pregunta": "¿Qué estudia el joven?",
          "opciones": [
            "Música",
            "Medicina",
            "Arquitectura",
            "Idiomas"
          ]
        },
        {
          "pregunta": "¿Cómo es el camión, según ellos?",
          "opciones": [
            "Nunca llega a tiempo",
            "Siempre llega temprano",
            "Es muy caro",
            "Va muy lleno"
          ]
        },
        {
          "pregunta": "¿Quién toca también la guitarra?",
          "opciones": [
            "El nieto de la señora Ruiz",
            "La señora Ruiz",
            "El chofer",
            "La hija de la señora"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Escribe la coletilla.",
        "pregunta": "It's cold, ___?",
        "respuestas": [
          "isn't it"
        ]
      },
      {
        "instruccion": "Escribe la coletilla.",
        "pregunta": "You like tacos, ___?",
        "respuestas": [
          "don't you"
        ]
      },
      {
        "instruccion": "Escribe la coletilla.",
        "pregunta": "She didn't come, ___?",
        "respuestas": [
          "did she"
        ]
      },
      {
        "instruccion": "Escribe la coletilla.",
        "pregunta": "They can swim, ___?",
        "respuestas": [
          "can't they"
        ]
      },
      {
        "instruccion": "Escribe la coletilla.",
        "pregunta": "I'm right, ___?",
        "respuestas": [
          "aren't I"
        ]
      },
      {
        "instruccion": "Escribe la coletilla.",
        "pregunta": "You've been to Cancun, ___?",
        "respuestas": [
          "haven't you"
        ]
      },
      {
        "instruccion": "Escribe la coletilla.",
        "pregunta": "Let's go, ___?",
        "respuestas": [
          "shall we"
        ]
      },
      {
        "instruccion": "Escribe la coletilla.",
        "pregunta": "He won't be late, ___?",
        "respuestas": [
          "will he"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Hace calor, ¿verdad?",
        "respuestas": [
          "It's hot, isn't it",
          "It is hot, isn't it"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "You are tired, are you?",
        "respuestas": [
          "You are tired, aren't you",
          "You're tired, aren't you"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "You speak English, ___?",
        "opciones": [
          "don't you",
          "do you",
          "aren't you",
          "isn't it"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She isn't married, ___?",
        "opciones": [
          "is she",
          "isn't she",
          "does she",
          "doesn't she"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "They bought a new car, ___?",
        "opciones": [
          "didn't they",
          "did they",
          "don't they",
          "weren't they"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I'm in the right place, ___?",
        "opciones": [
          "aren't I",
          "am not I",
          "amn't I",
          "isn't it"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Nobody knows the answer, ___?",
        "opciones": [
          "do they",
          "don't they",
          "does nobody",
          "isn't it"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "There's a bank near here, ___?",
        "opciones": [
          "isn't there",
          "is there",
          "isn't it",
          "aren't there"
        ]
      },
      {
        "tipo": "listening",
        "audio": "You're from Monterrey, aren't you? No, I'm from Saltillo, but I work in Monterrey.",
        "pregunta": "¿De dónde es la persona?",
        "opciones": [
          "De Saltillo",
          "De Monterrey",
          "De Torreón",
          "De Chihuahua"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The class starts at seven, doesn't it? No, it starts at seven thirty today.",
        "pregunta": "¿A qué hora empieza la clase hoy?",
        "opciones": [
          "A las siete y media",
          "A las siete",
          "A las ocho",
          "A las seis y media"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Escribe la coletilla: You don't smoke, ___?",
        "respuestas": [
          "do you"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Escribe la coletilla: It was a great party, ___?",
        "respuestas": [
          "wasn't it"
        ]
      }
    ]
  },
  {
    "id": "b1-19",
    "num": 19,
    "titulo": "Preguntas de sujeto y de objeto",
    "contexto": "Trivia y cultura general",
    "explicacion": {
      "es": [
        "En las **preguntas de objeto** preguntamos por **lo que recibe la acción**, y necesitamos el auxiliar ***do / does / did***: ***Who did** you **call**?* (¿A quién llamaste?) ***What did** she **buy**?* (¿Qué compró ella?)",
        "En las **preguntas de sujeto** preguntamos por **quién o qué hace la acción**, y **no** se usa *do / does / did*. El orden es como una oración normal: ***Who called** you?* (¿Quién te llamó?) ***What happened**?* (¿Qué pasó?)",
        "Compara: *Ana loves **Pedro**.* → ***Who does Ana love**? — Pedro.* (objeto) / ***Ana** loves Pedro.* → ***Who loves Pedro**? — Ana.* (sujeto)",
        "En las preguntas de sujeto el verbo va en **tercera persona** (con *-s* en presente) o en **pasado**: ***Who lives** here? **Which team won** the World Cup in 1986? **How many people came**?*"
      ],
      "tabla": {
        "columnas": [
          "Tipo",
          "Pregunta",
          "Respuesta"
        ],
        "filas": [
          [
            "Sujeto",
            "Who painted the Mona Lisa?",
            "Leonardo da Vinci painted it."
          ],
          [
            "Objeto",
            "What did Leonardo paint?",
            "He painted the Mona Lisa."
          ],
          [
            "Sujeto",
            "What happened?",
            "There was an accident."
          ],
          [
            "Objeto",
            "What did you do?",
            "I called the police."
          ],
          [
            "Sujeto",
            "Which country has the most people?",
            "India has the most people."
          ]
        ]
      },
      "ojo": [
        "*Who **did** discover penicillin?* ❌ → ***Who discovered** penicillin?* ✅ (sujeto, sin *did*).",
        "*What **happened**?* ✅, no *What did happen?* ❌ (salvo para dar mucho énfasis).",
        "En sujeto el verbo va con ***-s***: ***Who wants** coffee?* ✅, no *Who want coffee?* ❌.",
        "***Whose*** y ***Which / What + sustantivo*** también pueden ser sujeto: ***Whose phone is** ringing? **Which singer won** the prize?*",
        "***How many / How much*** como sujeto: ***How many students passed**? **How much water is** left?*"
      ],
      "en": [
        "Object questions use do, does or did: Who did you call? What did she buy?",
        "Subject questions don't use do, does or did: Who called you? What happened?",
        "Who painted the Mona Lisa? Leonardo da Vinci painted it.",
        "Which team won the World Cup in 1986?"
      ]
    },
    "vocabulario": [
      {
        "en": "Who painted the Mona Lisa?",
        "es": "¿quién pintó la Mona Lisa?",
        "imagen": "Retrato clásico de una mujer en un marco dorado en un museo, sin texto",
        "ejemplo": [
          "Who painted the Mona Lisa? Leonardo da Vinci.",
          "¿Quién pintó la Mona Lisa? Leonardo da Vinci."
        ]
      },
      {
        "en": "Who discovered penicillin?",
        "es": "¿quién descubrió la penicilina?",
        "imagen": "Laboratorio antiguo con frascos y un microscopio",
        "ejemplo": [
          "Who discovered penicillin? Alexander Fleming.",
          "¿Quién descubrió la penicilina? Alexander Fleming."
        ]
      },
      {
        "en": "What happened?",
        "es": "¿qué pasó?",
        "imagen": "Personas mirando con preocupación un carro chocado",
        "ejemplo": [
          "What happened? There was an accident.",
          "¿Qué pasó? Hubo un accidente."
        ]
      },
      {
        "en": "Who called you?",
        "es": "¿quién te llamó?",
        "imagen": "Persona colgando el celular con una sonrisa",
        "ejemplo": [
          "Who called you? It was my sister.",
          "¿Quién te llamó? Fue mi hermana."
        ]
      },
      {
        "en": "Who did you call?",
        "es": "¿a quién llamaste?",
        "imagen": "Persona marcando un número en el celular",
        "ejemplo": [
          "Who did you call? I called the doctor.",
          "¿A quién llamaste? Llamé al doctor."
        ]
      },
      {
        "en": "Which team won the World Cup in 1986?",
        "es": "¿qué equipo ganó el Mundial de 1986?",
        "imagen": "Estadio Azteca lleno de aficionados",
        "ejemplo": [
          "Which team won the World Cup in 1986? Argentina.",
          "¿Qué equipo ganó el Mundial de 1986? Argentina."
        ]
      },
      {
        "en": "Who wrote this book?",
        "es": "¿quién escribió este libro?",
        "imagen": "Libro antiguo abierto sobre una mesa de biblioteca",
        "ejemplo": [
          "Who wrote Pedro Páramo? Juan Rulfo.",
          "¿Quién escribió Pedro Páramo? Juan Rulfo."
        ]
      },
      {
        "en": "What did she say?",
        "es": "¿qué dijo ella?",
        "imagen": "Persona escuchando con atención un chisme",
        "ejemplo": [
          "What did she say about me?",
          "¿Qué dijo de mí?"
        ]
      },
      {
        "en": "How many people came?",
        "es": "¿cuántas personas vinieron?",
        "imagen": "Salón de fiesta lleno de invitados",
        "ejemplo": [
          "How many people came to the wedding?",
          "¿Cuántas personas vinieron a la boda?"
        ]
      },
      {
        "en": "Who lives in that house?",
        "es": "¿quién vive en esa casa?",
        "imagen": "Casa antigua y misteriosa al final de la calle",
        "ejemplo": [
          "Who lives in that big house?",
          "¿Quién vive en esa casa grande?"
        ]
      },
      {
        "en": "What makes you happy?",
        "es": "¿qué te hace feliz?",
        "imagen": "Persona sonriendo en un campo de flores",
        "ejemplo": [
          "What makes you happy?",
          "¿Qué te hace feliz?"
        ]
      },
      {
        "en": "Which planet is the biggest?",
        "es": "¿qué planeta es el más grande?",
        "imagen": "Ilustración del sistema solar con planetas de colores",
        "ejemplo": [
          "Which planet is the biggest? Jupiter.",
          "¿Qué planeta es el más grande? Júpiter."
        ]
      },
      {
        "en": "Who invented the telephone?",
        "es": "¿quién inventó el teléfono?",
        "imagen": "Teléfono antiguo de manivela sobre una mesa",
        "ejemplo": [
          "Who invented the telephone?",
          "¿Quién inventó el teléfono?"
        ]
      },
      {
        "en": "What did you buy?",
        "es": "¿qué compraste?",
        "imagen": "Persona mostrando bolsas de compras",
        "ejemplo": [
          "What did you buy at the mall?",
          "¿Qué compraste en el centro comercial?"
        ]
      },
      {
        "en": "Whose phone is ringing?",
        "es": "¿de quién es el celular que suena?",
        "imagen": "Celular sonando sobre una mesa de juntas",
        "ejemplo": [
          "Whose phone is ringing?",
          "¿De quién es el celular que está sonando?"
        ]
      },
      {
        "en": "Who wants more cake?",
        "es": "¿quién quiere más pastel?",
        "imagen": "Mamá ofreciendo pastel a niños con las manos arriba",
        "ejemplo": [
          "Who wants more cake? Me!",
          "¿Quién quiere más pastel? ¡Yo!"
        ]
      }
    ],
    "grupos": [
      {
        "id": "trivia",
        "titulo": "Trivia",
        "icono": "🧠",
        "patron": [
          "Who invented…?",
          "Which country…?",
          "What is the capital of…?"
        ],
        "palabras": [
          {
            "en": "the capital of Canada",
            "es": "la capital de Canadá",
            "imagen": "Edificio del parlamento canadiense con bandera",
            "ejemplo": [
              "What's the capital of Canada? Ottawa.",
              "¿Cuál es la capital de Canadá? Ottawa."
            ]
          },
          {
            "en": "the longest river",
            "es": "el río más largo",
            "imagen": "Río enorme visto desde arriba atravesando la selva",
            "ejemplo": [
              "Which is the longest river in the world?",
              "¿Cuál es el río más largo del mundo?"
            ]
          },
          {
            "en": "the first man on the moon",
            "es": "el primer hombre en la luna",
            "imagen": "Astronauta caminando sobre la superficie lunar",
            "ejemplo": [
              "Who was the first man on the moon? Neil Armstrong.",
              "¿Quién fue el primer hombre en la luna? Neil Armstrong."
            ]
          },
          {
            "en": "the largest ocean",
            "es": "el océano más grande",
            "imagen": "Vista del océano Pacífico al atardecer",
            "ejemplo": [
              "Which ocean is the largest? The Pacific.",
              "¿Cuál es el océano más grande? El Pacífico."
            ]
          },
          {
            "en": "the official language",
            "es": "el idioma oficial",
            "imagen": "Mapa de Brasil con un balón de fútbol",
            "ejemplo": [
              "What's the official language of Brazil? Portuguese.",
              "¿Cuál es el idioma oficial de Brasil? El portugués."
            ]
          },
          {
            "en": "the fastest land animal",
            "es": "el animal terrestre más rápido",
            "imagen": "Guepardo corriendo en la sabana",
            "ejemplo": [
              "Which animal is the fastest on land?",
              "¿Qué animal es el más rápido en tierra?"
            ]
          },
          {
            "en": "the national dish",
            "es": "el platillo nacional",
            "imagen": "Plato de chiles en nogada con colores de la bandera",
            "ejemplo": [
              "Some people say chiles en nogada is the national dish.",
              "Algunos dicen que el chile en nogada es el platillo nacional."
            ]
          },
          {
            "en": "a famous painter",
            "es": "un pintor famoso",
            "imagen": "Mural colorido de Diego Rivera en un palacio",
            "ejemplo": [
              "Who painted the murals in the National Palace? Diego Rivera.",
              "¿Quién pintó los murales del Palacio Nacional? Diego Rivera."
            ]
          }
        ]
      },
      {
        "id": "preguntas",
        "titulo": "Preguntas del día a día",
        "icono": "❓",
        "patron": [
          "Who…?",
          "What happened to…?",
          "Which one…?"
        ],
        "palabras": [
          {
            "en": "Who's coming tonight?",
            "es": "¿quién viene hoy en la noche?",
            "imagen": "Mesa puesta para una cena con varios lugares",
            "ejemplo": [
              "Who's coming to dinner tonight?",
              "¿Quién viene a cenar hoy en la noche?"
            ]
          },
          {
            "en": "What happened to your car?",
            "es": "¿qué le pasó a tu carro?",
            "imagen": "Carro con la defensa abollada en un estacionamiento",
            "ejemplo": [
              "What happened to your car? Someone hit it.",
              "¿Qué le pasó a tu carro? Alguien le pegó."
            ]
          },
          {
            "en": "Who broke the window?",
            "es": "¿quién rompió la ventana?",
            "imagen": "Ventana rota con un balón de fútbol en el piso",
            "ejemplo": [
              "Who broke the window?",
              "¿Quién rompió la ventana?"
            ]
          },
          {
            "en": "Which bus goes downtown?",
            "es": "¿qué camión va al centro?",
            "imagen": "Parada con varios autobuses de distintos colores",
            "ejemplo": [
              "Which bus goes downtown?",
              "¿Qué camión va al centro?"
            ]
          },
          {
            "en": "Who told you that?",
            "es": "¿quién te dijo eso?",
            "imagen": "Persona sorprendida escuchando un rumor",
            "ejemplo": [
              "Who told you that? It isn't true!",
              "¿Quién te dijo eso? ¡No es cierto!"
            ]
          },
          {
            "en": "What did you think of it?",
            "es": "¿qué te pareció?",
            "imagen": "Amigos saliendo de un teatro comentando la obra",
            "ejemplo": [
              "What did you think of the play?",
              "¿Qué te pareció la obra?"
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Who painted the Mona Lisa? Leonardo da Vinci.",
        "es": "¿Quién pintó la Mona Lisa? Leonardo da Vinci."
      },
      {
        "en": "What happened? There was an accident.",
        "es": "¿Qué pasó? Hubo un accidente."
      },
      {
        "en": "Who called you? It was my sister.",
        "es": "¿Quién te llamó? Fue mi hermana."
      },
      {
        "en": "Who did you call? I called the doctor.",
        "es": "¿A quién llamaste? Llamé al doctor."
      },
      {
        "en": "Which team won the World Cup in 1986? Argentina.",
        "es": "¿Qué equipo ganó el Mundial de 1986? Argentina."
      },
      {
        "en": "Who wrote Pedro Páramo? Juan Rulfo.",
        "es": "¿Quién escribió Pedro Páramo? Juan Rulfo."
      },
      {
        "en": "How many people came to the wedding?",
        "es": "¿Cuántas personas vinieron a la boda?"
      },
      {
        "en": "Who wants more cake? Me!",
        "es": "¿Quién quiere más pastel? ¡Yo!"
      },
      {
        "en": "Who broke the window?",
        "es": "¿Quién rompió la ventana?"
      },
      {
        "en": "What did you think of the play?",
        "es": "¿Qué te pareció la obra?"
      }
    ],
    "frases": [
      {
        "en": "Who discovered America in 1492, and which country paid for the trip?",
        "es": "¿Quién llegó a América en 1492 y qué país pagó el viaje?",
        "imagen": "Barcos antiguos navegando en el océano"
      },
      {
        "en": "What did your parents say when you told them about your new job?",
        "es": "¿Qué dijeron tus papás cuando les contaste de tu nuevo trabajo?",
        "imagen": "Papás abrazando a su hijo emocionados"
      },
      {
        "en": "Who invented color television? A Mexican engineer called Guillermo González Camarena.",
        "es": "¿Quién inventó la televisión a color? Un ingeniero mexicano llamado Guillermo González Camarena.",
        "imagen": "Televisión antigua a color en una sala de los años sesenta"
      },
      {
        "en": "Which singer won the most awards last year, and what did she sing at the ceremony?",
        "es": "¿Qué cantante ganó más premios el año pasado y qué cantó en la ceremonia?",
        "imagen": "Cantante en un escenario con luces y un premio"
      },
      {
        "en": "What happened at the meeting? Nobody told me anything!",
        "es": "¿Qué pasó en la junta? ¡Nadie me dijo nada!",
        "imagen": "Persona confundida entrando a una sala de juntas vacía"
      },
      {
        "en": "Who lives on the top floor? A family with three kids and two dogs.",
        "es": "¿Quién vive en el último piso? Una familia con tres niños y dos perros.",
        "imagen": "Edificio de departamentos con un balcón lleno de plantas arriba"
      },
      {
        "en": "How many countries took part in the last Olympic Games?",
        "es": "¿Cuántos países participaron en los últimos Juegos Olímpicos?",
        "imagen": "Desfile de atletas con banderas en un estadio"
      },
      {
        "en": "What did you have for breakfast? Chilaquiles with eggs and beans.",
        "es": "¿Qué desayunaste? Chilaquiles con huevo y frijoles.",
        "imagen": "Plato de chilaquiles verdes con huevo y frijoles"
      },
      {
        "en": "Who taught you to cook like this? My grandmother taught me everything.",
        "es": "¿Quién te enseñó a cocinar así? Mi abuela me enseñó todo.",
        "imagen": "Abuela y nieto cocinando juntos en una cocina tradicional"
      },
      {
        "en": "Which of these photos do you like best? I like the one at the beach.",
        "es": "¿Cuál de estas fotos te gusta más? Me gusta la de la playa.",
        "imagen": "Persona eligiendo entre fotos impresas sobre una mesa"
      }
    ],
    "listening": [
      {
        "audio": "Who won the game last night? The Tigres won three to one.",
        "pregunta": "¿Quién ganó el partido?",
        "opciones": [
          "Los Tigres",
          "El otro equipo",
          "Empataron",
          "No jugaron"
        ]
      },
      {
        "audio": "What did you do on the weekend? I painted my bedroom.",
        "pregunta": "¿Qué hizo el fin de semana?",
        "opciones": [
          "Pintó su recámara",
          "Fue al cine",
          "Visitó a su familia",
          "Trabajó"
        ]
      },
      {
        "audio": "Who told you about this restaurant? My boss recommended it.",
        "pregunta": "¿Quién le recomendó el restaurante?",
        "opciones": [
          "Su jefe",
          "Su hermana",
          "Un amigo",
          "Lo vio en internet"
        ]
      },
      {
        "audio": "Which planet is closest to the sun? Mercury is the closest.",
        "pregunta": "¿Qué planeta está más cerca del sol?",
        "opciones": [
          "Mercurio",
          "Venus",
          "Marte",
          "La Tierra"
        ]
      },
      {
        "audio": "What happened to your hand? I cut it while I was cooking.",
        "pregunta": "¿Cómo se cortó la mano?",
        "opciones": [
          "Cocinando",
          "Jugando fútbol",
          "En el trabajo",
          "Abriendo una lata"
        ]
      }
    ],
    "lectura": {
      "titulo": "Quiz night",
      "texto": "Every Thursday, a café near my house has a quiz night, and last week my friends and I decided to play. There were eight teams and six rounds of questions. The first round was about history. Who was the first president of Mexico? Guadalupe Victoria, answered my friend Marco immediately. The second round was about science. Which gas do plants need to make food? Carbon dioxide. Then came the sports round. Which country has won the most World Cups? Brazil, we all shouted. The hardest round was about music. Who sang the song that won Eurovision in 1974? Nobody on our team knew the answer. It was ABBA, of course! In the end, the team that won was a group of retired teachers, and we finished in third place. What did we win? A free dessert for everyone. Next week, we're going to study more!",
      "preguntas": [
        {
          "pregunta": "¿Cuántos equipos había?",
          "opciones": [
            "Ocho",
            "Seis",
            "Tres",
            "Diez"
          ]
        },
        {
          "pregunta": "¿Quién contestó la pregunta de historia?",
          "opciones": [
            "Marco",
            "El narrador",
            "Una maestra",
            "Nadie"
          ]
        },
        {
          "pregunta": "¿Qué ronda fue la más difícil?",
          "opciones": [
            "La de música",
            "La de historia",
            "La de ciencia",
            "La de deportes"
          ]
        },
        {
          "pregunta": "¿Qué ganaron?",
          "opciones": [
            "Un postre gratis para todos",
            "Dinero",
            "Un trofeo",
            "Una cena"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Escribe la pregunta de sujeto.",
        "pregunta": "Somebody called me. → Who ___ you?",
        "respuestas": [
          "called"
        ]
      },
      {
        "instruccion": "Escribe la pregunta de objeto.",
        "pregunta": "I called somebody. → Who ___ you call?",
        "respuestas": [
          "did"
        ]
      },
      {
        "instruccion": "Completa la pregunta de sujeto.",
        "pregunta": "What ___ (happen) yesterday?",
        "respuestas": [
          "happened"
        ]
      },
      {
        "instruccion": "Completa la pregunta de sujeto.",
        "pregunta": "Who ___ (live) in that house?",
        "respuestas": [
          "lives"
        ]
      },
      {
        "instruccion": "Completa la pregunta.",
        "pregunta": "What ___ she buy? A new dress.",
        "respuestas": [
          "did"
        ]
      },
      {
        "instruccion": "Completa la pregunta.",
        "pregunta": "Which team ___ (win) the final last year?",
        "respuestas": [
          "won"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Qué pasó?",
        "respuestas": [
          "What happened"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Quién te dijo eso?",
        "respuestas": [
          "Who told you that"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿A quién viste?",
        "respuestas": [
          "Who did you see",
          "Whom did you see"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "Who did invent the airplane?",
        "respuestas": [
          "Who invented the airplane",
          "Who invented the plane"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "Who ___ the Mona Lisa?",
        "opciones": [
          "painted",
          "did paint",
          "does painted",
          "painting"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "What ___ you eat for lunch?",
        "opciones": [
          "did",
          "—",
          "does",
          "was"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "What ___ at the party?",
        "opciones": [
          "happened",
          "did happen",
          "did happened",
          "happen"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Who ___ to come to the beach?",
        "opciones": [
          "wants",
          "want",
          "does want",
          "do want"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Ana saw Luis.» Pregunta por Luis:",
        "opciones": [
          "Who did Ana see?",
          "Who saw Ana?",
          "Who did see Ana?",
          "Who Ana saw?"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Ana saw Luis.» Pregunta por Ana:",
        "opciones": [
          "Who saw Luis?",
          "Who did see Luis?",
          "Who did Luis see?",
          "Who Luis saw?"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Who ate my sandwich? I left it in the fridge! Sorry, it was me. I was very hungry.",
        "pregunta": "¿Por qué se comió el sándwich?",
        "opciones": [
          "Tenía mucha hambre",
          "Pensó que era suyo",
          "Estaba aburrido",
          "Se lo regalaron"
        ]
      },
      {
        "tipo": "listening",
        "audio": "How many people work in your company? About three hundred.",
        "pregunta": "¿Cuántas personas trabajan en la empresa?",
        "opciones": [
          "Unas trescientas",
          "Unas treinta",
          "Unas tres mil",
          "Trece"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¿Quién quiere café?",
        "respuestas": [
          "Who wants coffee",
          "Who wants some coffee"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¿Qué compraste?",
        "respuestas": [
          "What did you buy"
        ]
      }
    ]
  },
  {
    "id": "b1-20",
    "num": 20,
    "titulo": "Preguntas indirectas (Could you tell me…?)",
    "contexto": "Pedir información con cortesía",
    "explicacion": {
      "es": [
        "Las **preguntas indirectas** son una forma **más amable y formal** de preguntar, sobre todo con desconocidos, en tiendas, oficinas o por teléfono: ***Could you tell me where** the station **is**?* (¿Me podría decir dónde está la estación?)",
        "Empiezan con frases como ***Could you tell me…? Do you know…? I'd like to know… I was wondering…*** y después la pregunta va con **orden de afirmación** (sujeto + verbo): *Where **is the bank**? → Do you know where **the bank is**?*",
        "Desaparecen ***do / does / did***: *What time **does the store open**? → Could you tell me what time **the store opens**?* *Where **did she go**? → Do you know where **she went**?*",
        "Si la pregunta es de **sí / no**, se usa ***if*** o ***whether***: *Is there a pharmacy near here? → Do you know **if there is** a pharmacy near here?*"
      ],
      "tabla": {
        "columnas": [
          "Pregunta directa",
          "Pregunta indirecta"
        ],
        "filas": [
          [
            "Where is the bathroom?",
            "Could you tell me where the bathroom is?"
          ],
          [
            "What time does the bus leave?",
            "Do you know what time the bus leaves?"
          ],
          [
            "How much does it cost?",
            "Could you tell me how much it costs?"
          ],
          [
            "Did he call?",
            "Do you know if he called?"
          ],
          [
            "Is the museum open?",
            "I'd like to know if the museum is open."
          ]
        ]
      },
      "ojo": [
        "*Do you know where **is the bank**?* ❌ → *Do you know where **the bank is**?* ✅. ¡El verbo va **después** del sujeto!",
        "Sin *do / does / did*: *Could you tell me what time **it starts**?* ✅, no *what time does it start* ❌.",
        "Para preguntas de sí o no: ***if*** (no *that*): *Do you know **if** she's coming?*",
        "Si la frase inicial no es pregunta (*I'd like to know…, I wonder…*), se termina con **punto**, no con signo de interrogación.",
        "***I was wondering if you could…*** es una forma **muy amable** de pedir algo: *I was wondering if you could help me.*"
      ],
      "en": [
        "Indirect questions are more polite: Could you tell me where the station is?",
        "After Do you know or Could you tell me, the word order is like a statement: Do you know where the bank is?",
        "Do, does and did disappear: Could you tell me what time the store opens?",
        "For yes or no questions, use if: Do you know if there's a pharmacy near here?"
      ]
    },
    "vocabulario": [
      {
        "en": "Could you tell me where the station is?",
        "es": "¿me podría decir dónde está la estación?",
        "imagen": "Turista preguntando amablemente a un señor en la calle",
        "ejemplo": [
          "Excuse me, could you tell me where the station is?",
          "Disculpe, ¿me podría decir dónde está la estación?"
        ]
      },
      {
        "en": "Do you know what time it opens?",
        "es": "¿sabe a qué hora abre?",
        "imagen": "Persona frente a una tienda cerrada preguntando a otra",
        "ejemplo": [
          "Do you know what time the bank opens?",
          "¿Sabe a qué hora abre el banco?"
        ]
      },
      {
        "en": "Could you tell me how much it costs?",
        "es": "¿me podría decir cuánto cuesta?",
        "imagen": "Cliente preguntando el precio de una chamarra a una vendedora",
        "ejemplo": [
          "Could you tell me how much this jacket costs?",
          "¿Me podría decir cuánto cuesta esta chamarra?"
        ]
      },
      {
        "en": "Do you know if he's coming?",
        "es": "¿sabes si viene?",
        "imagen": "Amigos esperando en la entrada de un cine",
        "ejemplo": [
          "Do you know if Pedro is coming?",
          "¿Sabes si viene Pedro?"
        ]
      },
      {
        "en": "I'd like to know",
        "es": "me gustaría saber",
        "imagen": "Persona hablando por teléfono con una agenda en la mano",
        "ejemplo": [
          "I'd like to know if you have any rooms for rent.",
          "Me gustaría saber si tienen cuartos en renta."
        ]
      },
      {
        "en": "I was wondering if you could help me.",
        "es": "me preguntaba si me podría ayudar",
        "imagen": "Persona pidiendo ayuda con cortesía en una recepción",
        "ejemplo": [
          "I was wondering if you could help me with this form.",
          "Me preguntaba si me podría ayudar con este formulario."
        ]
      },
      {
        "en": "Do you know where she lives?",
        "es": "¿sabes dónde vive?",
        "imagen": "Persona buscando una dirección en su celular",
        "ejemplo": [
          "Do you know where Ana lives now?",
          "¿Sabes dónde vive Ana ahora?"
        ]
      },
      {
        "en": "Can you tell me what happened?",
        "es": "¿me puede decir qué pasó?",
        "imagen": "Policía tomando nota de lo que dice un testigo",
        "ejemplo": [
          "Can you tell me what happened?",
          "¿Me puede decir qué pasó?"
        ]
      },
      {
        "en": "Do you have any idea",
        "es": "¿tienes idea de…?",
        "imagen": "Persona pensativa con las manos en la cabeza",
        "ejemplo": [
          "Do you have any idea where my keys are?",
          "¿Tienes idea de dónde están mis llaves?"
        ]
      },
      {
        "en": "Could you tell me when the next bus leaves?",
        "es": "¿me podría decir cuándo sale el siguiente camión?",
        "imagen": "Pasajero preguntando en la ventanilla de una central",
        "ejemplo": [
          "Could you tell me when the next bus to Puebla leaves?",
          "¿Me podría decir cuándo sale el siguiente camión a Puebla?"
        ]
      },
      {
        "en": "Do you know whether it's free?",
        "es": "¿sabe si es gratis?",
        "imagen": "Persona leyendo la entrada de un museo",
        "ejemplo": [
          "Do you know whether the museum is free on Sundays?",
          "¿Sabe si el museo es gratis los domingos?"
        ]
      },
      {
        "en": "I don't know where he is.",
        "es": "no sé dónde está",
        "imagen": "Persona encogiéndose de hombros",
        "ejemplo": [
          "Sorry, I don't know where he is.",
          "Perdón, no sé dónde está."
        ]
      },
      {
        "en": "Could you tell me how to get there?",
        "es": "¿me podría decir cómo llegar?",
        "imagen": "Turista mostrando un mapa a una persona local",
        "ejemplo": [
          "Could you tell me how to get to the cathedral?",
          "¿Me podría decir cómo llegar a la catedral?"
        ]
      },
      {
        "en": "Would you mind telling me",
        "es": "¿le importaría decirme…?",
        "imagen": "Persona en una entrevista preguntando con cortesía",
        "ejemplo": [
          "Would you mind telling me your name again?",
          "¿Le importaría decirme su nombre otra vez?"
        ]
      },
      {
        "en": "I wonder what time it is.",
        "es": "me pregunto qué hora es",
        "imagen": "Persona mirando el cielo sin reloj",
        "ejemplo": [
          "I wonder what time it is. My phone is dead.",
          "Me pregunto qué hora es. Mi celular no tiene batería."
        ]
      },
      {
        "en": "Do you remember where we parked?",
        "es": "¿te acuerdas dónde nos estacionamos?",
        "imagen": "Pareja buscando su carro en un estacionamiento enorme",
        "ejemplo": [
          "Do you remember where we parked the car?",
          "¿Te acuerdas dónde nos estacionamos?"
        ]
      }
    ],
    "grupos": [
      {
        "id": "lugares",
        "titulo": "En la oficina y por teléfono",
        "icono": "☎️",
        "patron": [
          "Could you tell me…?",
          "I'd like to know…",
          "Do you know if…?"
        ],
        "palabras": [
          {
            "en": "if the manager is available",
            "es": "si el gerente está disponible",
            "imagen": "Recepcionista contestando el teléfono en una oficina",
            "ejemplo": [
              "Could you tell me if the manager is available?",
              "¿Me podría decir si el gerente está disponible?"
            ]
          },
          {
            "en": "when my order will arrive",
            "es": "cuándo llegará mi pedido",
            "imagen": "Persona revisando el rastreo de un paquete en su laptop",
            "ejemplo": [
              "I'd like to know when my order will arrive.",
              "Me gustaría saber cuándo llegará mi pedido."
            ]
          },
          {
            "en": "how long it will take",
            "es": "cuánto tiempo tardará",
            "imagen": "Técnico revisando una computadora en un taller",
            "ejemplo": [
              "Could you tell me how long the repair will take?",
              "¿Me podría decir cuánto tardará la reparación?"
            ]
          },
          {
            "en": "what documents I need",
            "es": "qué documentos necesito",
            "imagen": "Persona con una carpeta de papeles en una oficina de gobierno",
            "ejemplo": [
              "Could you tell me what documents I need?",
              "¿Me podría decir qué documentos necesito?"
            ]
          },
          {
            "en": "whether breakfast is included",
            "es": "si el desayuno está incluido",
            "imagen": "Desayuno servido en una terraza",
            "ejemplo": [
              "Do you know whether breakfast is included?",
              "¿Sabe si el desayuno está incluido?"
            ]
          },
          {
            "en": "who I should talk to",
            "es": "con quién debo hablar",
            "imagen": "Persona confundida en una recepción grande",
            "ejemplo": [
              "Could you tell me who I should talk to?",
              "¿Me podría decir con quién debo hablar?"
            ]
          }
        ]
      },
      {
        "id": "calle",
        "titulo": "En la calle",
        "icono": "🗺️",
        "patron": [
          "Excuse me, do you know…?",
          "Sorry to bother you, but…",
          "Thanks a lot!"
        ],
        "palabras": [
          {
            "en": "Sorry to bother you",
            "es": "perdón por molestar",
            "imagen": "Persona acercándose con cortesía a un desconocido",
            "ejemplo": [
              "Sorry to bother you, but do you know where the subway is?",
              "Perdón por molestar, pero ¿sabe dónde está el metro?"
            ]
          },
          {
            "en": "if this bus goes downtown",
            "es": "si este camión va al centro",
            "imagen": "Pasajera preguntando al chofer en la puerta del autobús",
            "ejemplo": [
              "Do you know if this bus goes downtown?",
              "¿Sabe si este camión va al centro?"
            ]
          },
          {
            "en": "where I can buy a ticket",
            "es": "dónde puedo comprar un boleto",
            "imagen": "Máquina de boletos en una estación",
            "ejemplo": [
              "Could you tell me where I can buy a ticket?",
              "¿Me podría decir dónde puedo comprar un boleto?"
            ]
          },
          {
            "en": "how far it is",
            "es": "qué tan lejos está",
            "imagen": "Persona señalando hacia el final de la calle",
            "ejemplo": [
              "Do you know how far the beach is?",
              "¿Sabe qué tan lejos está la playa?"
            ]
          },
          {
            "en": "Thanks a lot!",
            "es": "¡muchas gracias!",
            "imagen": "Turista agradeciendo con una sonrisa",
            "ejemplo": [
              "That's very helpful. Thanks a lot!",
              "Me ayudó mucho. ¡Muchas gracias!"
            ]
          },
          {
            "en": "I'm not sure, sorry.",
            "es": "no estoy seguro, perdón",
            "imagen": "Persona disculpándose con un gesto de duda",
            "ejemplo": [
              "I'm not sure, sorry. Ask at the information desk.",
              "No estoy seguro, perdón. Pregunte en información."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Excuse me, could you tell me where the station is?",
        "es": "Disculpe, ¿me podría decir dónde está la estación?"
      },
      {
        "en": "Do you know what time the bank opens?",
        "es": "¿Sabe a qué hora abre el banco?"
      },
      {
        "en": "Could you tell me how much this jacket costs?",
        "es": "¿Me podría decir cuánto cuesta esta chamarra?"
      },
      {
        "en": "Do you know if Pedro is coming?",
        "es": "¿Sabes si viene Pedro?"
      },
      {
        "en": "I was wondering if you could help me with this form.",
        "es": "Me preguntaba si me podría ayudar con este formulario."
      },
      {
        "en": "Do you have any idea where my keys are?",
        "es": "¿Tienes idea de dónde están mis llaves?"
      },
      {
        "en": "Do you remember where we parked the car?",
        "es": "¿Te acuerdas dónde nos estacionamos?"
      },
      {
        "en": "Sorry to bother you, but do you know where the subway is?",
        "es": "Perdón por molestar, pero ¿sabe dónde está el metro?"
      },
      {
        "en": "I'd like to know when my order will arrive.",
        "es": "Me gustaría saber cuándo llegará mi pedido."
      },
      {
        "en": "Sorry, I don't know where he is.",
        "es": "Perdón, no sé dónde está."
      }
    ],
    "frases": [
      {
        "en": "Good morning. I'd like to know if you have any appointments available this week.",
        "es": "Buenos días. Me gustaría saber si tienen citas disponibles esta semana.",
        "imagen": "Persona llamando a un consultorio con su agenda abierta"
      },
      {
        "en": "Excuse me, could you tell me which platform the train to Querétaro leaves from?",
        "es": "Disculpe, ¿me podría decir de qué andén sale el tren a Querétaro?",
        "imagen": "Pasajero preguntando a un empleado en una estación de tren"
      },
      {
        "en": "Do you know how long it takes to get to the airport from here?",
        "es": "¿Sabe cuánto se tarda en llegar al aeropuerto desde aquí?",
        "imagen": "Persona con maleta preguntando en la recepción de un edificio"
      },
      {
        "en": "I was wondering if you could send me the information by email.",
        "es": "Me preguntaba si me podría mandar la información por correo.",
        "imagen": "Persona hablando por teléfono frente a su computadora"
      },
      {
        "en": "Can you tell me what time the last bus leaves? I don't want to miss it.",
        "es": "¿Me puede decir a qué hora sale el último camión? No lo quiero perder.",
        "imagen": "Parada de autobús de noche con pocas personas"
      },
      {
        "en": "Do you know whether the museum is open on Mondays?",
        "es": "¿Sabe si el museo abre los lunes?",
        "imagen": "Turistas frente a la puerta de un museo"
      },
      {
        "en": "Could you tell me who is in charge of the payments? I have a question about my bill.",
        "es": "¿Me podría decir quién se encarga de los pagos? Tengo una pregunta sobre mi factura.",
        "imagen": "Cliente en la ventanilla de atención con un recibo"
      },
      {
        "en": "I have no idea where I left my umbrella. I've looked everywhere.",
        "es": "No tengo idea de dónde dejé mi paraguas. Busqué por todos lados.",
        "imagen": "Persona buscando su paraguas en un perchero lleno"
      },
      {
        "en": "Would you mind telling me how you made this sauce? It's delicious.",
        "es": "¿Le importaría decirme cómo hizo esta salsa? Está deliciosa.",
        "imagen": "Cliente felicitando a la cocinera de una fonda"
      },
      {
        "en": "Do you know if there's a pharmacy that's open twenty-four hours near here?",
        "es": "¿Sabe si hay una farmacia abierta las veinticuatro horas cerca de aquí?",
        "imagen": "Farmacia iluminada de noche en una esquina"
      }
    ],
    "listening": [
      {
        "audio": "Excuse me, do you know where the post office is? Yes, it's next to the church.",
        "pregunta": "¿Dónde está la oficina de correos?",
        "opciones": [
          "Junto a la iglesia",
          "Enfrente del banco",
          "En el centro comercial",
          "Detrás del mercado"
        ]
      },
      {
        "audio": "Could you tell me what time the pharmacy closes? It closes at ten tonight.",
        "pregunta": "¿A qué hora cierra la farmacia?",
        "opciones": [
          "A las diez",
          "A las nueve",
          "A las doce",
          "No cierra"
        ]
      },
      {
        "audio": "I'd like to know if I can change my flight to Friday.",
        "pregunta": "¿Qué quiere hacer?",
        "opciones": [
          "Cambiar su vuelo al viernes",
          "Cancelar su vuelo",
          "Comprar un boleto",
          "Pedir un reembolso"
        ]
      },
      {
        "audio": "Do you have any idea how much a taxi to the airport costs? About three hundred pesos.",
        "pregunta": "¿Cuánto cuesta el taxi?",
        "opciones": [
          "Unos trescientos pesos",
          "Unos treinta pesos",
          "Unos tres mil pesos",
          "Unos cien pesos"
        ]
      },
      {
        "audio": "I was wondering if you could lend me your notes from yesterday's class.",
        "pregunta": "¿Qué le pide?",
        "opciones": [
          "Sus apuntes de la clase de ayer",
          "Dinero",
          "Su libro",
          "Su celular"
        ]
      }
    ],
    "lectura": {
      "titulo": "A call to customer service",
      "texto": "Last week Daniel bought a new washing machine online, but it didn't arrive on the day they promised. So he called customer service. Good morning, said a friendly voice. How can I help you? Daniel explained the problem and said: I'd like to know where my order is. The agent asked him for the order number and checked the system. I'm sorry, she said, there was a problem with the delivery truck. Could you tell me when it will arrive, then? Daniel asked. She said it would arrive on Thursday, between nine and two. Daniel asked if he could choose a different time, because he worked in the mornings. Let me check if that's possible, the agent said. After a minute, she came back: Yes, we can deliver it on Saturday morning. Daniel thanked her and asked whether there would be an extra cost. No, she answered, and we'll give you a discount for the delay.",
      "preguntas": [
        {
          "pregunta": "¿Qué compró Daniel?",
          "opciones": [
            "Una lavadora",
            "Un refrigerador",
            "Una televisión",
            "Una estufa"
          ]
        },
        {
          "pregunta": "¿Por qué se retrasó la entrega?",
          "opciones": [
            "Hubo un problema con el camión",
            "No había lavadoras",
            "Daniel dio mal la dirección",
            "Era día festivo"
          ]
        },
        {
          "pregunta": "¿Por qué Daniel no podía recibirla el jueves?",
          "opciones": [
            "Trabaja en las mañanas",
            "Estaba de viaje",
            "No estaba en casa en la tarde",
            "Tenía cita con el doctor"
          ]
        },
        {
          "pregunta": "¿Qué le dieron por el retraso?",
          "opciones": [
            "Un descuento",
            "Otra lavadora",
            "Una disculpa por escrito",
            "Nada"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa la pregunta indirecta.",
        "pregunta": "Where is the bank? → Do you know where the bank ___?",
        "respuestas": [
          "is"
        ]
      },
      {
        "instruccion": "Completa la pregunta indirecta.",
        "pregunta": "What time does it open? → Could you tell me what time it ___?",
        "respuestas": [
          "opens"
        ]
      },
      {
        "instruccion": "Completa la pregunta indirecta.",
        "pregunta": "Is he at home? → Do you know ___ he's at home?",
        "respuestas": [
          "if",
          "whether"
        ]
      },
      {
        "instruccion": "Completa la pregunta indirecta.",
        "pregunta": "Where did she go? → Do you know where she ___?",
        "respuestas": [
          "went"
        ]
      },
      {
        "instruccion": "Completa la pregunta indirecta.",
        "pregunta": "How much is it? → Could you tell me how much it ___?",
        "respuestas": [
          "is",
          "costs"
        ]
      },
      {
        "instruccion": "Completa con wondering.",
        "pregunta": "I was ___ if you could help me.",
        "respuestas": [
          "wondering"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Me podría decir dónde está el baño?",
        "respuestas": [
          "Could you tell me where the bathroom is",
          "Can you tell me where the bathroom is",
          "Could you tell me where the restroom is"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Sabes si viene?",
        "respuestas": [
          "Do you know if he's coming",
          "Do you know if she's coming",
          "Do you know if he is coming",
          "Do you know if she is coming"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "No sé dónde está.",
        "respuestas": [
          "I don't know where it is",
          "I don't know where he is",
          "I don't know where she is"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "Do you know where is the station?",
        "respuestas": [
          "Do you know where the station is"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "Could you tell me where ___?",
        "opciones": [
          "the museum is",
          "is the museum",
          "does the museum",
          "the museum does"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Do you know what time ___?",
        "opciones": [
          "the movie starts",
          "does the movie start",
          "starts the movie",
          "the movie does start"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I'd like to know ___ you accept credit cards.",
        "opciones": [
          "if",
          "that",
          "do",
          "what"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Do you know where she ___?",
        "opciones": [
          "went",
          "did go",
          "goes did",
          "go"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es la forma más amable?",
        "opciones": [
          "I was wondering if you could help me.",
          "Help me.",
          "You help me?",
          "Can help?"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es correcta?",
        "opciones": [
          "Can you tell me how much it costs?",
          "Can you tell me how much does it cost?",
          "Can you tell me how much costs it?",
          "Can you tell me how much it does cost?"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Excuse me, do you know if this train stops in Celaya? Yes, it does. It's the second stop.",
        "pregunta": "¿En qué parada está Celaya?",
        "opciones": [
          "En la segunda",
          "En la primera",
          "En la última",
          "No para ahí"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Could you tell me how long the wait is? About forty minutes, I'm afraid.",
        "pregunta": "¿Cuánto tiempo tiene que esperar?",
        "opciones": [
          "Unos cuarenta minutos",
          "Unos cuatro minutos",
          "Una hora",
          "Catorce minutos"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¿Sabe a qué hora abre?",
        "respuestas": [
          "Do you know what time it opens",
          "Do you know when it opens"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: perdón por molestar",
        "respuestas": [
          "sorry to bother you"
        ]
      }
    ]
  },
  {
    "id": "b1-21",
    "num": 21,
    "titulo": "So / such; repaso de too / enough",
    "contexto": "Opiniones y reacciones",
    "explicacion": {
      "es": [
        "***So*** y ***such*** dan **énfasis** (*tan, tanto*). ***So*** va con **adjetivos y adverbios** solos: *The movie was **so boring**! She speaks **so fast**.*",
        "***Such*** va con **sustantivos** (con o sin adjetivo): *It was **such a boring movie**! They're **such nice people**.* Con singular contable lleva ***a / an***: ***such a** good idea*.",
        "Para decir el **resultado**: ***so / such … that***: *It was **so hot that** we stayed inside. It was **such a hot day that** we stayed inside.* Con cantidades: ***so much / so many***: *There were **so many** people!*",
        "**Repaso:** ***too*** = **demasiado** (es un problema): *It's **too expensive**. I can't buy it.* ***Enough*** = **suficiente**, después del adjetivo y antes del sustantivo: *It isn't **big enough**. We don't have **enough time**.*"
      ],
      "tabla": {
        "columnas": [
          "Estructura",
          "Ejemplo"
        ],
        "filas": [
          [
            "so + adjetivo",
            "The food was so good!"
          ],
          [
            "such + a/an + adjetivo + sustantivo",
            "It was such a good party!"
          ],
          [
            "such + adjetivo + plural / incontable",
            "They're such kind people. It was such bad weather."
          ],
          [
            "so … that / such … that",
            "I was so tired that I fell asleep."
          ],
          [
            "too + adjetivo / adjetivo + enough",
            "It's too cold. It isn't warm enough."
          ]
        ]
      },
      "ojo": [
        "*It was **so** a good movie* ❌ → *It was **such** a good movie* ✅ o *The movie was **so** good* ✅.",
        "*Such* con incontable no lleva *a*: ***such** bad weather* ✅, no *such a bad weather* ❌.",
        "***So*** vs. ***very***: los dos intensifican, pero *so* es más **emocional** y se usa mucho al reaccionar: *I'm **so** happy for you!*",
        "***Too*** ≠ ***so***: *It's **so** expensive* (¡qué caro!, tal vez lo compro) / *It's **too** expensive* (no lo compro).",
        "Reacciones útiles: ***That's so cool! What a shame! How exciting! You're so lucky!***"
      ],
      "en": [
        "So goes with adjectives: The movie was so boring!",
        "Such goes with nouns: It was such a boring movie! They're such nice people.",
        "For results: It was so hot that we stayed inside.",
        "Too means more than you want: It's too expensive. Enough means sufficient: It isn't big enough."
      ]
    },
    "vocabulario": [
      {
        "en": "It was so boring!",
        "es": "¡estuvo tan aburrido!",
        "imagen": "Persona bostezando en una conferencia",
        "ejemplo": [
          "The movie was so boring! I fell asleep.",
          "¡La película estuvo tan aburrida! Me quedé dormido."
        ]
      },
      {
        "en": "It was such a good party!",
        "es": "¡fue una fiesta tan buena!",
        "imagen": "Amigos bailando felices en una fiesta",
        "ejemplo": [
          "It was such a good party!",
          "¡Fue una fiesta buenísima!"
        ]
      },
      {
        "en": "They're such nice people.",
        "es": "son gente tan amable",
        "imagen": "Vecinos recibiendo con un pastel a una familia nueva",
        "ejemplo": [
          "Our new neighbors are such nice people.",
          "Nuestros nuevos vecinos son gente muy amable."
        ]
      },
      {
        "en": "I'm so happy for you!",
        "es": "¡me da mucho gusto por ti!",
        "imagen": "Amiga abrazando a otra que muestra un anillo de compromiso",
        "ejemplo": [
          "You got the job? I'm so happy for you!",
          "¿Te dieron el trabajo? ¡Me da mucho gusto por ti!"
        ]
      },
      {
        "en": "It was so hot that we stayed inside.",
        "es": "hacía tanto calor que nos quedamos adentro",
        "imagen": "Familia con ventilador en la sala en un día caluroso",
        "ejemplo": [
          "It was so hot that we stayed inside all day.",
          "Hacía tanto calor que nos quedamos adentro todo el día."
        ]
      },
      {
        "en": "There were so many people!",
        "es": "¡había tanta gente!",
        "imagen": "Plaza llena de gente en un festival",
        "ejemplo": [
          "There were so many people at the concert!",
          "¡Había tantísima gente en el concierto!"
        ]
      },
      {
        "en": "It's too expensive.",
        "es": "está demasiado caro",
        "imagen": "Persona dejando un producto en el estante al ver el precio",
        "ejemplo": [
          "It's too expensive. I can't buy it.",
          "Está demasiado caro. No lo puedo comprar."
        ]
      },
      {
        "en": "It isn't big enough.",
        "es": "no es lo bastante grande",
        "imagen": "Familia apretada en un carro pequeño",
        "ejemplo": [
          "Our car isn't big enough for six people.",
          "Nuestro carro no es lo bastante grande para seis personas."
        ]
      },
      {
        "en": "What a shame!",
        "es": "¡qué lástima!",
        "imagen": "Persona decepcionada mirando un partido suspendido por lluvia",
        "ejemplo": [
          "They canceled the trip? What a shame!",
          "¿Cancelaron el viaje? ¡Qué lástima!"
        ]
      },
      {
        "en": "That's so cool!",
        "es": "¡qué padre!",
        "imagen": "Joven emocionado viendo un video en el celular",
        "ejemplo": [
          "You're going to Japan? That's so cool!",
          "¿Te vas a Japón? ¡Qué padre!"
        ]
      },
      {
        "en": "You're so lucky!",
        "es": "¡qué suerte tienes!",
        "imagen": "Persona celebrando con un boleto ganador",
        "ejemplo": [
          "You won a trip? You're so lucky!",
          "¿Te ganaste un viaje? ¡Qué suerte tienes!"
        ]
      },
      {
        "en": "such bad weather",
        "es": "un clima tan malo",
        "imagen": "Tormenta con lluvia y viento en la calle",
        "ejemplo": [
          "We had such bad weather on our vacation.",
          "Tuvimos un clima malísimo en las vacaciones."
        ]
      },
      {
        "en": "I've never seen such a beautiful place.",
        "es": "nunca había visto un lugar tan bonito",
        "imagen": "Cascada en medio de la selva con agua turquesa",
        "ejemplo": [
          "I've never seen such a beautiful place.",
          "Nunca había visto un lugar tan bonito."
        ]
      },
      {
        "en": "I was so tired that I fell asleep.",
        "es": "estaba tan cansado que me quedé dormido",
        "imagen": "Persona dormida en el sofá con la tele prendida",
        "ejemplo": [
          "I was so tired that I fell asleep on the sofa.",
          "Estaba tan cansado que me quedé dormido en el sofá."
        ]
      },
      {
        "en": "How exciting!",
        "es": "¡qué emoción!",
        "imagen": "Niños emocionados abriendo regalos",
        "ejemplo": [
          "You're having a baby? How exciting!",
          "¿Van a tener un bebé? ¡Qué emoción!"
        ]
      },
      {
        "en": "so much traffic",
        "es": "tanto tráfico",
        "imagen": "Avenida completamente llena de carros",
        "ejemplo": [
          "There was so much traffic that I was an hour late.",
          "Había tanto tráfico que llegué una hora tarde."
        ]
      }
    ],
    "grupos": [
      {
        "id": "reacciones",
        "titulo": "Reacciones",
        "icono": "😮",
        "patron": [
          "How amazing!",
          "What a surprise!",
          "That's so cool!"
        ],
        "palabras": [
          {
            "en": "How amazing!",
            "es": "¡qué increíble!",
            "imagen": "Persona con la boca abierta frente a fuegos artificiales",
            "ejemplo": [
              "You met your favorite singer? How amazing!",
              "¿Conociste a tu cantante favorito? ¡Qué increíble!"
            ]
          },
          {
            "en": "What a surprise!",
            "es": "¡qué sorpresa!",
            "imagen": "Persona sorprendida al abrir la puerta y ver a su familia",
            "ejemplo": [
              "What a surprise to see you here!",
              "¡Qué sorpresa verte aquí!"
            ]
          },
          {
            "en": "That's so sad.",
            "es": "qué triste",
            "imagen": "Persona consolando a su amiga",
            "ejemplo": [
              "Your dog died? That's so sad.",
              "¿Se murió tu perro? Qué triste."
            ]
          },
          {
            "en": "What a mess!",
            "es": "¡qué desorden!",
            "imagen": "Cuarto de adolescente muy desordenado",
            "ejemplo": [
              "What a mess! Clean your room!",
              "¡Qué desorden! ¡Limpia tu cuarto!"
            ]
          },
          {
            "en": "How annoying!",
            "es": "¡qué molesto!",
            "imagen": "Persona tapándose los oídos por una alarma de carro",
            "ejemplo": [
              "The alarm again? How annoying!",
              "¿Otra vez la alarma? ¡Qué molesto!"
            ]
          },
          {
            "en": "That's so funny!",
            "es": "¡qué chistoso!",
            "imagen": "Amigos riendo a carcajadas con un celular",
            "ejemplo": [
              "Look at this video. That's so funny!",
              "Mira este video. ¡Qué chistoso!"
            ]
          },
          {
            "en": "What a great idea!",
            "es": "¡qué buena idea!",
            "imagen": "Persona con un foco imaginario sobre la cabeza sonriendo",
            "ejemplo": [
              "Let's go camping? What a great idea!",
              "¿Vamos a acampar? ¡Qué buena idea!"
            ]
          },
          {
            "en": "How kind of you!",
            "es": "¡qué amable!",
            "imagen": "Vecino entregando un pastel de bienvenida",
            "ejemplo": [
              "You brought me flowers? How kind of you!",
              "¿Me trajiste flores? ¡Qué amable!"
            ]
          }
        ]
      },
      {
        "id": "opiniones",
        "titulo": "Dar opiniones",
        "icono": "💬",
        "patron": [
          "In my opinion…",
          "I think it's too…",
          "It's not … enough."
        ],
        "palabras": [
          {
            "en": "In my opinion",
            "es": "en mi opinión",
            "imagen": "Persona hablando con seguridad en una reunión",
            "ejemplo": [
              "In my opinion, the city needs more parks.",
              "En mi opinión, la ciudad necesita más parques."
            ]
          },
          {
            "en": "too crowded",
            "es": "demasiado lleno",
            "imagen": "Playa llena de gente y sombrillas",
            "ejemplo": [
              "The beach was too crowded for me.",
              "La playa estaba demasiado llena para mí."
            ]
          },
          {
            "en": "not cheap enough",
            "es": "no lo bastante barato",
            "imagen": "Persona comparando precios en dos celulares",
            "ejemplo": [
              "The phone is good, but it's not cheap enough.",
              "El celular es bueno, pero no es lo bastante barato."
            ]
          },
          {
            "en": "so overrated",
            "es": "tan sobrevalorado",
            "imagen": "Persona aburrida en un restaurante de moda",
            "ejemplo": [
              "That restaurant is so overrated.",
              "Ese restaurante está tan sobrevalorado."
            ]
          },
          {
            "en": "such a waste of time",
            "es": "una pérdida de tiempo",
            "imagen": "Persona dormida en una junta",
            "ejemplo": [
              "That meeting was such a waste of time.",
              "Esa junta fue una pérdida de tiempo."
            ]
          },
          {
            "en": "worth it",
            "es": "vale la pena",
            "imagen": "Excursionistas en la cima con una vista espectacular",
            "ejemplo": [
              "The hike was hard, but it was worth it.",
              "La caminata fue difícil, pero valió la pena."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "The movie was so boring! I fell asleep.",
        "es": "¡La película estuvo tan aburrida! Me quedé dormido."
      },
      {
        "en": "It was such a good party!",
        "es": "¡Fue una fiesta buenísima!"
      },
      {
        "en": "Our new neighbors are such nice people.",
        "es": "Nuestros nuevos vecinos son gente muy amable."
      },
      {
        "en": "You got the job? I'm so happy for you!",
        "es": "¿Te dieron el trabajo? ¡Me da mucho gusto por ti!"
      },
      {
        "en": "It was so hot that we stayed inside all day.",
        "es": "Hacía tanto calor que nos quedamos adentro todo el día."
      },
      {
        "en": "It's too expensive. I can't buy it.",
        "es": "Está demasiado caro. No lo puedo comprar."
      },
      {
        "en": "Our car isn't big enough for six people.",
        "es": "Nuestro carro no es lo bastante grande para seis personas."
      },
      {
        "en": "They canceled the trip? What a shame!",
        "es": "¿Cancelaron el viaje? ¡Qué lástima!"
      },
      {
        "en": "I've never seen such a beautiful place.",
        "es": "Nunca había visto un lugar tan bonito."
      },
      {
        "en": "The hike was hard, but it was worth it.",
        "es": "La caminata fue difícil, pero valió la pena."
      }
    ],
    "frases": [
      {
        "en": "It was such a beautiful day that we decided to have lunch in the garden.",
        "es": "Era un día tan bonito que decidimos comer en el jardín.",
        "imagen": "Familia comiendo en una mesa en el jardín bajo el sol"
      },
      {
        "en": "The test was so difficult that half of the class failed.",
        "es": "El examen estuvo tan difícil que reprobó la mitad del grupo.",
        "imagen": "Estudiantes preocupados mirando sus exámenes"
      },
      {
        "en": "There were so many people at the market that we couldn't walk.",
        "es": "Había tanta gente en el mercado que no podíamos caminar.",
        "imagen": "Mercado lleno de gente en diciembre"
      },
      {
        "en": "She's such a good cook that everybody wants to eat at her house.",
        "es": "Cocina tan bien que todos quieren comer en su casa.",
        "imagen": "Mujer sirviendo platillos a muchos invitados contentos"
      },
      {
        "en": "The apartment is nice, but it isn't big enough for us and it's too far from work.",
        "es": "El departamento está bonito, pero no es lo bastante grande para nosotros y está demasiado lejos del trabajo.",
        "imagen": "Pareja visitando un departamento pequeño con cara de duda"
      },
      {
        "en": "I was so nervous before the interview that I couldn't eat breakfast.",
        "es": "Estaba tan nervioso antes de la entrevista que no pude desayunar.",
        "imagen": "Persona con traje frente a un desayuno sin tocar"
      },
      {
        "en": "You're so lucky to live by the sea! I'd love to see the sunset every day.",
        "es": "¡Qué suerte tienes de vivir junto al mar! Me encantaría ver el atardecer todos los días.",
        "imagen": "Casa frente al mar al atardecer"
      },
      {
        "en": "It was such a long trip that the kids fell asleep in the car.",
        "es": "Fue un viaje tan largo que los niños se quedaron dormidos en el carro.",
        "imagen": "Niños dormidos en el asiento trasero del carro"
      },
      {
        "en": "That restaurant is so overrated. The food was cold and it was too expensive.",
        "es": "Ese restaurante está tan sobrevalorado. La comida estaba fría y era demasiado cara.",
        "imagen": "Persona decepcionada frente a un plato pequeño y caro"
      },
      {
        "en": "He speaks so fast that I can't understand him.",
        "es": "Habla tan rápido que no le entiendo.",
        "imagen": "Persona confundida escuchando a alguien que habla muy rápido"
      }
    ],
    "listening": [
      {
        "audio": "The concert was so loud that my ears hurt for two days.",
        "pregunta": "¿Qué le pasó?",
        "opciones": [
          "Le dolieron los oídos dos días",
          "Perdió la voz",
          "Se durmió",
          "Se fue temprano"
        ]
      },
      {
        "audio": "It was such a cold night that the water in the garden froze.",
        "pregunta": "¿Qué pasó con el agua del jardín?",
        "opciones": [
          "Se congeló",
          "Se evaporó",
          "Se desbordó",
          "Nada"
        ]
      },
      {
        "audio": "This suitcase is too heavy. I can't carry it alone.",
        "pregunta": "¿Cuál es el problema?",
        "opciones": [
          "La maleta está demasiado pesada",
          "La maleta es pequeña",
          "Perdió la maleta",
          "La maleta está rota"
        ]
      },
      {
        "audio": "You're moving to Barcelona? That's so exciting!",
        "pregunta": "¿Cómo reacciona?",
        "opciones": [
          "Con emoción",
          "Con tristeza",
          "Con enojo",
          "Con miedo"
        ]
      },
      {
        "audio": "We don't have enough chairs for everybody. Can you bring some from your house?",
        "pregunta": "¿Qué le pide?",
        "opciones": [
          "Traer sillas",
          "Traer comida",
          "Llegar temprano",
          "Comprar bebidas"
        ]
      }
    ],
    "lectura": {
      "titulo": "An unforgettable trip",
      "texto": "Last summer my family and I went to Chiapas, and it was such an amazing trip! The first day we visited the Sumidero Canyon. The walls of the canyon were so high that we felt really small in our boat, and we saw crocodiles and monkeys. Then we went to San Cristóbal de las Casas, which is such a beautiful town. The streets were so colorful, and there were so many interesting little shops. The only problem was the weather: it was too cold at night, and our jackets weren't warm enough. On the last day we visited the waterfalls of Agua Azul. The water was such an incredible blue that my little brother thought it was painted! We were so tired at the end of the trip that we slept during the whole flight home, but it was totally worth it.",
      "preguntas": [
        {
          "pregunta": "¿Qué animales vieron en el Cañón del Sumidero?",
          "opciones": [
            "Cocodrilos y monos",
            "Delfines y tortugas",
            "Jaguares y loros",
            "Ballenas"
          ]
        },
        {
          "pregunta": "¿Cómo era San Cristóbal de las Casas?",
          "opciones": [
            "Un pueblo muy bonito con calles coloridas",
            "Una ciudad grande y ruidosa",
            "Un pueblo en la playa",
            "Un pueblo aburrido"
          ]
        },
        {
          "pregunta": "¿Cuál fue el único problema?",
          "opciones": [
            "Hacía demasiado frío en la noche",
            "Llovió todo el tiempo",
            "Se perdieron",
            "La comida era mala"
          ]
        },
        {
          "pregunta": "¿Qué pensó el hermanito del agua de Agua Azul?",
          "opciones": [
            "Que estaba pintada",
            "Que estaba fría",
            "Que era el mar",
            "Que estaba sucia"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con so o such.",
        "pregunta": "The food was ___ delicious!",
        "respuestas": [
          "so"
        ]
      },
      {
        "instruccion": "Completa con so o such.",
        "pregunta": "It was ___ a good movie.",
        "respuestas": [
          "such"
        ]
      },
      {
        "instruccion": "Completa con so o such.",
        "pregunta": "They're ___ friendly people.",
        "respuestas": [
          "such"
        ]
      },
      {
        "instruccion": "Completa con so many o so much.",
        "pregunta": "There were ___ cars on the road.",
        "respuestas": [
          "so many"
        ]
      },
      {
        "instruccion": "Completa con too o enough.",
        "pregunta": "This coffee is ___ hot. I can't drink it.",
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
        "instruccion": "Traduce al inglés.",
        "pregunta": "¡Qué lástima!",
        "respuestas": [
          "What a shame",
          "What a pity"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Fue una fiesta tan buena.",
        "respuestas": [
          "It was such a good party"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Estaba tan cansado que me dormí.",
        "respuestas": [
          "I was so tired that I fell asleep",
          "I was so tired I fell asleep",
          "I was so tired that I slept"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "It was so a beautiful day.",
        "respuestas": [
          "It was such a beautiful day",
          "The day was so beautiful"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "The view was ___ beautiful!",
        "opciones": [
          "so",
          "such",
          "such a",
          "so a"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "It was ___ interesting book.",
        "opciones": [
          "such an",
          "so",
          "such",
          "so an"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We had ___ weather that we stayed home.",
        "opciones": [
          "such bad",
          "such a bad",
          "so bad",
          "so a bad"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "There were ___ people that we couldn't get in.",
        "opciones": [
          "so many",
          "so much",
          "such many",
          "such much"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I can't buy it. It's ___ expensive.",
        "opciones": [
          "too",
          "enough",
          "so much",
          "such"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Is the water warm ___ to swim?",
        "opciones": [
          "enough",
          "too",
          "so",
          "such"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The movie was so funny that I couldn't stop laughing.",
        "pregunta": "¿Cómo era la película?",
        "opciones": [
          "Muy chistosa",
          "Muy triste",
          "Muy larga",
          "Muy aburrida"
        ]
      },
      {
        "tipo": "listening",
        "audio": "She's such a good teacher that all her students love English now.",
        "pregunta": "¿Qué pasa con sus alumnos?",
        "opciones": [
          "Ahora les encanta el inglés",
          "Reprueban",
          "Se aburren",
          "Cambian de escuela"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¡Qué padre!",
        "respuestas": [
          "That's so cool",
          "How cool",
          "That is so cool",
          "So cool"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Valió la pena.",
        "respuestas": [
          "It was worth it"
        ]
      }
    ]
  },
  {
    "id": "b1-22",
    "num": 22,
    "titulo": "Adjetivos terminados en -ed / -ing",
    "contexto": "Emociones y sentimientos",
    "explicacion": {
      "es": [
        "Muchos adjetivos de emociones tienen dos formas. Los que terminan en ***-ed*** describen **cómo se siente una persona**: *I'm **bored**.* (Estoy aburrido.) *She was **surprised**.* (Ella estaba sorprendida.)",
        "Los que terminan en ***-ing*** describen **la cosa, situación o persona que causa** ese sentimiento: *The class is **boring**.* (La clase es aburrida.) *The news was **surprising**.* (La noticia fue sorprendente.)",
        "Truco: *-ed* = **lo que siento**; *-ing* = **lo que me hace sentir así**. *I'm **interested** in history because history is **interesting**.*",
        "¡Cuidado con las personas! *He's **boring*** = es aburrido (aburre a los demás). *He's **bored*** = está aburrido (no tiene nada que hacer)."
      ],
      "tabla": {
        "columnas": [
          "-ed (cómo me siento)",
          "-ing (qué lo causa)"
        ],
        "filas": [
          [
            "I'm bored.",
            "This movie is boring."
          ],
          [
            "She's tired.",
            "Her job is tiring."
          ],
          [
            "We were excited.",
            "The trip was exciting."
          ],
          [
            "I'm confused.",
            "The instructions are confusing."
          ],
          [
            "They were frightened.",
            "The storm was frightening."
          ]
        ]
      },
      "ojo": [
        "*I'm **boring*** ❌ (soy aburrido) si quieres decir *estoy aburrido* → ***I'm bored*** ✅.",
        "*I'm **exciting** for the trip* ❌ → *I'm **excited** about the trip* ✅.",
        "***Embarrassed*** ≠ embarazada. *Embarrassed* = **apenado**. *Embarazada* = ***pregnant***.",
        "Preposiciones típicas: ***interested in, bored with, excited about, worried about, scared of, surprised by, disappointed with***.",
        "Intensificadores: ***really, so, very, a bit, extremely***: *I was **a bit** disappointed. It was **really** exciting.*"
      ],
      "en": [
        "Adjectives ending in e d describe how a person feels: I'm bored. She was surprised.",
        "Adjectives ending in i n g describe the thing that causes the feeling: The class is boring.",
        "I'm interested in history because history is interesting.",
        "He's boring means other people get bored. He's bored means he has nothing to do."
      ]
    },
    "vocabulario": [
      {
        "en": "bored, boring",
        "es": "aburrido",
        "imagen": "Persona bostezando frente a una presentación larga",
        "ejemplo": [
          "I'm bored. This meeting is so boring.",
          "Estoy aburrido. Esta junta es tan aburrida."
        ]
      },
      {
        "en": "interested, interesting",
        "es": "interesado / interesante",
        "imagen": "Visitante mirando con atención una pieza de museo",
        "ejemplo": [
          "I'm interested in art. The museum is very interesting.",
          "Me interesa el arte. El museo es muy interesante."
        ]
      },
      {
        "en": "excited, exciting",
        "es": "emocionado / emocionante",
        "imagen": "Aficionados saltando en un estadio",
        "ejemplo": [
          "We're excited about the final. It'll be exciting!",
          "Estamos emocionados por la final. ¡Va a estar emocionante!"
        ]
      },
      {
        "en": "tired, tiring",
        "es": "cansado / cansado (que cansa)",
        "imagen": "Persona agotada después de una caminata larga",
        "ejemplo": [
          "The hike was tiring. I'm really tired.",
          "La caminata fue cansada. Estoy muy cansado."
        ]
      },
      {
        "en": "surprised, surprising",
        "es": "sorprendido / sorprendente",
        "imagen": "Persona con la boca abierta leyendo una carta",
        "ejemplo": [
          "I was surprised. The news was very surprising.",
          "Me sorprendí. La noticia fue muy sorprendente."
        ]
      },
      {
        "en": "confused, confusing",
        "es": "confundido / confuso",
        "imagen": "Persona mirando un mapa complicado del metro",
        "ejemplo": [
          "I'm confused. These instructions are confusing.",
          "Estoy confundido. Estas instrucciones son confusas."
        ]
      },
      {
        "en": "frightened, frightening",
        "es": "asustado / aterrador",
        "imagen": "Persona escondida detrás de un cojín viendo una película de terror",
        "ejemplo": [
          "The movie was frightening. I was frightened.",
          "La película fue aterradora. Estaba asustado."
        ]
      },
      {
        "en": "disappointed, disappointing",
        "es": "decepcionado / decepcionante",
        "imagen": "Aficionado triste en las gradas después de un partido",
        "ejemplo": [
          "The game was disappointing. We were very disappointed.",
          "El partido fue decepcionante. Estábamos muy decepcionados."
        ]
      },
      {
        "en": "embarrassed, embarrassing",
        "es": "apenado / vergonzoso",
        "imagen": "Persona tapándose la cara roja de vergüenza",
        "ejemplo": [
          "I fell in the street. It was so embarrassing!",
          "Me caí en la calle. ¡Fue tan vergonzoso!"
        ]
      },
      {
        "en": "worried, worrying",
        "es": "preocupado / preocupante",
        "imagen": "Mamá mirando el reloj de noche con preocupación",
        "ejemplo": [
          "I'm worried. The situation is worrying.",
          "Estoy preocupado. La situación es preocupante."
        ]
      },
      {
        "en": "relaxed, relaxing",
        "es": "relajado / relajante",
        "imagen": "Persona en una hamaca frente al mar",
        "ejemplo": [
          "The vacation was relaxing. I feel relaxed.",
          "Las vacaciones fueron relajantes. Me siento relajado."
        ]
      },
      {
        "en": "annoyed, annoying",
        "es": "molesto / molesto (que molesta)",
        "imagen": "Persona irritada por una alarma de carro",
        "ejemplo": [
          "That noise is annoying. I'm so annoyed!",
          "Ese ruido es molesto. ¡Estoy tan molesto!"
        ]
      },
      {
        "en": "amazed, amazing",
        "es": "asombrado / increíble",
        "imagen": "Persona mirando una aurora boreal",
        "ejemplo": [
          "The view was amazing. We were amazed.",
          "La vista era increíble. Estábamos asombrados."
        ]
      },
      {
        "en": "satisfied, satisfying",
        "es": "satisfecho / satisfactorio",
        "imagen": "Persona terminando de armar un mueble con orgullo",
        "ejemplo": [
          "Finishing a puzzle is very satisfying.",
          "Terminar un rompecabezas es muy satisfactorio."
        ]
      },
      {
        "en": "depressed, depressing",
        "es": "deprimido / deprimente",
        "imagen": "Ventana con lluvia gris y una persona triste",
        "ejemplo": [
          "This weather is depressing.",
          "Este clima es deprimente."
        ]
      },
      {
        "en": "shocked, shocking",
        "es": "impactado / impactante",
        "imagen": "Persona viendo noticias con las manos en la cara",
        "ejemplo": [
          "The news was shocking. Everybody was shocked.",
          "La noticia fue impactante. Todos estaban impactados."
        ]
      }
    ],
    "grupos": [
      {
        "id": "sentimientos",
        "titulo": "¿Cómo te sientes?",
        "icono": "😊",
        "patron": [
          "I feel…",
          "I'm a bit…",
          "I'm really…"
        ],
        "palabras": [
          {
            "en": "proud",
            "es": "orgulloso",
            "imagen": "Papá aplaudiendo en la graduación de su hija",
            "ejemplo": [
              "I'm so proud of you!",
              "¡Estoy tan orgulloso de ti!"
            ]
          },
          {
            "en": "nervous",
            "es": "nervioso",
            "imagen": "Persona sudando antes de hablar en público",
            "ejemplo": [
              "I always feel nervous before an exam.",
              "Siempre me pongo nervioso antes de un examen."
            ]
          },
          {
            "en": "lonely",
            "es": "solo / solitario",
            "imagen": "Persona sola en una banca del parque en otoño",
            "ejemplo": [
              "I felt lonely when I moved to a new city.",
              "Me sentí solo cuando me mudé a otra ciudad."
            ]
          },
          {
            "en": "grateful",
            "es": "agradecido",
            "imagen": "Persona dando las gracias con las manos en el pecho",
            "ejemplo": [
              "I'm very grateful for your help.",
              "Estoy muy agradecido por tu ayuda."
            ]
          },
          {
            "en": "jealous",
            "es": "celoso",
            "imagen": "Persona mirando con celos a una pareja",
            "ejemplo": [
              "He gets jealous very easily.",
              "Se pone celoso muy fácilmente."
            ]
          },
          {
            "en": "homesick",
            "es": "con nostalgia por mi casa",
            "imagen": "Estudiante extranjero mirando fotos de su familia",
            "ejemplo": [
              "I felt homesick during my first month abroad.",
              "Extrañé mi casa el primer mes en el extranjero."
            ]
          },
          {
            "en": "upset",
            "es": "molesto / afectado",
            "imagen": "Persona triste y molesta con los brazos cruzados",
            "ejemplo": [
              "She was upset because nobody called her.",
              "Estaba afectada porque nadie la llamó."
            ]
          },
          {
            "en": "stressed",
            "es": "estresado",
            "imagen": "Persona con muchos papeles y el celular sonando",
            "ejemplo": [
              "I'm so stressed about work.",
              "Estoy muy estresado por el trabajo."
            ]
          }
        ]
      },
      {
        "id": "preposiciones",
        "titulo": "Adjetivo + preposición",
        "icono": "🔗",
        "patron": [
          "interested in…",
          "worried about…",
          "scared of…"
        ],
        "palabras": [
          {
            "en": "interested in",
            "es": "interesado en",
            "imagen": "Persona leyendo un libro de astronomía",
            "ejemplo": [
              "Are you interested in politics?",
              "¿Te interesa la política?"
            ]
          },
          {
            "en": "excited about",
            "es": "emocionado por",
            "imagen": "Niños emocionados con sus maletas listas",
            "ejemplo": [
              "The kids are excited about the trip.",
              "Los niños están emocionados por el viaje."
            ]
          },
          {
            "en": "worried about",
            "es": "preocupado por",
            "imagen": "Persona revisando cuentas con preocupación",
            "ejemplo": [
              "She's worried about money.",
              "Está preocupada por el dinero."
            ]
          },
          {
            "en": "scared of",
            "es": "con miedo de",
            "imagen": "Niño asustado de un perro grande",
            "ejemplo": [
              "My son is scared of dogs.",
              "Mi hijo les tiene miedo a los perros."
            ]
          },
          {
            "en": "bored with",
            "es": "aburrido de",
            "imagen": "Persona aburrida de su rutina en la oficina",
            "ejemplo": [
              "I'm bored with my job.",
              "Estoy aburrido de mi trabajo."
            ]
          },
          {
            "en": "disappointed with",
            "es": "decepcionado de",
            "imagen": "Cliente mirando un producto roto que compró",
            "ejemplo": [
              "I was disappointed with the service.",
              "Me decepcionó el servicio."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I'm bored. This meeting is so boring.",
        "es": "Estoy aburrido. Esta junta es tan aburrida."
      },
      {
        "en": "I'm interested in art. The museum is very interesting.",
        "es": "Me interesa el arte. El museo es muy interesante."
      },
      {
        "en": "I'm confused. These instructions are confusing.",
        "es": "Estoy confundido. Estas instrucciones son confusas."
      },
      {
        "en": "I fell in the street. It was so embarrassing!",
        "es": "Me caí en la calle. ¡Fue tan vergonzoso!"
      },
      {
        "en": "The vacation was relaxing. I feel relaxed.",
        "es": "Las vacaciones fueron relajantes. Me siento relajado."
      },
      {
        "en": "I'm so proud of you!",
        "es": "¡Estoy tan orgulloso de ti!"
      },
      {
        "en": "I felt homesick during my first month abroad.",
        "es": "Extrañé mi casa el primer mes en el extranjero."
      },
      {
        "en": "My son is scared of dogs.",
        "es": "Mi hijo les tiene miedo a los perros."
      },
      {
        "en": "The kids are excited about the trip.",
        "es": "Los niños están emocionados por el viaje."
      },
      {
        "en": "This weather is depressing.",
        "es": "Este clima es deprimente."
      }
    ],
    "frases": [
      {
        "en": "The museum tour was so interesting that we stayed there for five hours.",
        "es": "El recorrido del museo estuvo tan interesante que nos quedamos cinco horas.",
        "imagen": "Familia recorriendo un museo de antropología"
      },
      {
        "en": "I was really embarrassed when I called my teacher Mom in front of the whole class.",
        "es": "Me dio muchísima pena cuando le dije mamá a mi maestra frente a todo el grupo.",
        "imagen": "Niño rojo de vergüenza en el salón con compañeros riendo"
      },
      {
        "en": "We were so excited about the concert, but it was a bit disappointing.",
        "es": "Estábamos muy emocionados por el concierto, pero fue un poco decepcionante.",
        "imagen": "Amigos con caras de decepción a la salida de un concierto"
      },
      {
        "en": "Working twelve hours a day is very tiring, and I'm always exhausted.",
        "es": "Trabajar doce horas al día es muy cansado y siempre estoy agotado.",
        "imagen": "Persona dormida en el metro de regreso a casa"
      },
      {
        "en": "I was shocked when I saw the price of the tickets. They were so expensive!",
        "es": "Me impactó ver el precio de los boletos. ¡Eran carísimos!",
        "imagen": "Persona mirando su celular con sorpresa"
      },
      {
        "en": "My grandmother gets confused with new technology, so I help her with her phone.",
        "es": "Mi abuela se confunde con la tecnología nueva, así que le ayudo con su celular.",
        "imagen": "Nieto enseñando a su abuela a usar el celular"
      },
      {
        "en": "It's a relaxing place, and I always feel calm when I'm there.",
        "es": "Es un lugar relajante y siempre me siento tranquilo cuando estoy ahí.",
        "imagen": "Jardín japonés con un estanque y una persona meditando"
      },
      {
        "en": "She was worried about her exam, but in the end the questions weren't difficult.",
        "es": "Estaba preocupada por su examen, pero al final las preguntas no estaban difíciles.",
        "imagen": "Estudiante sonriendo aliviada al salir de un examen"
      },
      {
        "en": "The ending of the series was so surprising that nobody expected it.",
        "es": "El final de la serie fue tan sorprendente que nadie lo esperaba.",
        "imagen": "Amigos con la boca abierta viendo la tele"
      },
      {
        "en": "I'm not bored with my job, but I'd like to try something more challenging.",
        "es": "No estoy aburrido de mi trabajo, pero me gustaría probar algo más desafiante.",
        "imagen": "Persona pensativa en su escritorio mirando por la ventana"
      }
    ],
    "listening": [
      {
        "audio": "I was so bored at the party that I went home at ten.",
        "pregunta": "¿Por qué se fue temprano?",
        "opciones": [
          "Estaba muy aburrido",
          "Estaba cansado",
          "Estaba enfermo",
          "Tenía que trabajar"
        ]
      },
      {
        "audio": "The roller coaster was frightening, but my kids loved it.",
        "pregunta": "¿Qué les pareció a los niños?",
        "opciones": [
          "Les encantó",
          "Les dio miedo",
          "Se aburrieron",
          "No se subieron"
        ]
      },
      {
        "audio": "She was disappointed because she didn't get the job.",
        "pregunta": "¿Por qué estaba decepcionada?",
        "opciones": [
          "No le dieron el trabajo",
          "Reprobó un examen",
          "Perdió su celular",
          "Se canceló su viaje"
        ]
      },
      {
        "audio": "The instructions were so confusing that we built the table wrong.",
        "pregunta": "¿Qué pasó con la mesa?",
        "opciones": [
          "La armaron mal",
          "Se rompió",
          "No la compraron",
          "La regresaron"
        ]
      },
      {
        "audio": "I'm really excited about my trip to Peru. I leave on Friday!",
        "pregunta": "¿Cómo se siente?",
        "opciones": [
          "Emocionado",
          "Preocupado",
          "Aburrido",
          "Cansado"
        ]
      }
    ],
    "lectura": {
      "titulo": "My first day at a new job",
      "texto": "I'll never forget my first day at the advertising agency. I was so excited, but also very nervous. I arrived early, and the receptionist was really friendly, which was relaxing. Then my boss gave me a long list of instructions, and honestly, they were a bit confusing. I was worried that I would make a mistake. At lunch, something embarrassing happened: I spilled coffee on my new white shirt in front of everybody. I wanted to disappear! But my new colleagues weren't annoyed; they laughed and one of them lent me a T-shirt. In the afternoon I worked on my first project, and it was really interesting. At the end of the day I was tired, but I felt satisfied and a little proud of myself. It was an exhausting day, but also one of the most exciting days of my life.",
      "preguntas": [
        {
          "pregunta": "¿Cómo se sentía al llegar?",
          "opciones": [
            "Emocionado y nervioso",
            "Aburrido",
            "Enojado",
            "Muy relajado"
          ]
        },
        {
          "pregunta": "¿Cómo eran las instrucciones de su jefe?",
          "opciones": [
            "Un poco confusas",
            "Muy fáciles",
            "Aburridas",
            "No le dio instrucciones"
          ]
        },
        {
          "pregunta": "¿Qué pasó en la comida?",
          "opciones": [
            "Se le cayó café en la camisa",
            "Se le olvidó su comida",
            "Llegó tarde",
            "Se perdió"
          ]
        },
        {
          "pregunta": "¿Cómo reaccionaron sus compañeros?",
          "opciones": [
            "Se rieron y le prestaron una playera",
            "Se molestaron",
            "No dijeron nada",
            "Le avisaron al jefe"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con -ed o -ing.",
        "pregunta": "This book is very bor___.",
        "respuestas": [
          "ing"
        ]
      },
      {
        "instruccion": "Completa con -ed o -ing.",
        "pregunta": "I'm interest___ in history.",
        "respuestas": [
          "ed"
        ]
      },
      {
        "instruccion": "Elige el adjetivo correcto.",
        "pregunta": "The trip was ___ (exciting / excited).",
        "respuestas": [
          "exciting"
        ]
      },
      {
        "instruccion": "Elige el adjetivo correcto.",
        "pregunta": "We were ___ by the news (surprising / surprised).",
        "respuestas": [
          "surprised"
        ]
      },
      {
        "instruccion": "Elige el adjetivo correcto.",
        "pregunta": "I felt ___ when I fell (embarrassing / embarrassed).",
        "respuestas": [
          "embarrassed"
        ]
      },
      {
        "instruccion": "Completa con la preposición.",
        "pregunta": "She's scared ___ spiders.",
        "respuestas": [
          "of"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Estoy aburrido.",
        "respuestas": [
          "I'm bored",
          "I am bored"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "La película fue aterradora.",
        "respuestas": [
          "The movie was frightening",
          "The movie was terrifying",
          "The movie was scary",
          "The film was frightening"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Estoy orgulloso de ti.",
        "respuestas": [
          "I'm proud of you",
          "I am proud of you"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I'm very exciting about my vacation.",
        "respuestas": [
          "I'm very excited about my vacation",
          "I am very excited about my vacation"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "The class was so ___ that I fell asleep.",
        "opciones": [
          "boring",
          "bored",
          "bore",
          "bores"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I was very ___ when I heard the news.",
        "opciones": [
          "surprised",
          "surprising",
          "surprise",
          "surprises"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "This map is ___. I can't understand it.",
        "opciones": [
          "confusing",
          "confused",
          "confuse",
          "confusion"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She's ___ about the exam tomorrow.",
        "opciones": [
          "worried",
          "worrying",
          "worry",
          "worries"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Embarrassed» significa:",
        "opciones": [
          "Apenado",
          "Embarazada",
          "Enojado",
          "Cansado"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«He's boring» significa:",
        "opciones": [
          "Es aburrido (aburre a los demás)",
          "Está aburrido",
          "Está cansado",
          "Está enojado"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The flight was delayed for six hours. It was so annoying!",
        "pregunta": "¿Cuántas horas se retrasó el vuelo?",
        "opciones": [
          "Seis",
          "Dos",
          "Diez",
          "Una"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I felt homesick in Canada, so I called my mom every day.",
        "pregunta": "¿Qué hacía cuando extrañaba su casa?",
        "opciones": [
          "Le llamaba a su mamá",
          "Cocinaba comida mexicana",
          "Veía fotos",
          "Escribía cartas"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Estoy confundido.",
        "respuestas": [
          "I'm confused",
          "I am confused"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Fue muy emocionante.",
        "respuestas": [
          "It was very exciting",
          "It was really exciting",
          "It was so exciting"
        ]
      }
    ]
  },
  {
    "id": "b1-23",
    "num": 23,
    "titulo": "Pronombres reflexivos y each other",
    "contexto": "Relaciones personales",
    "explicacion": {
      "es": [
        "Los **pronombres reflexivos** se usan cuando quien hace la acción **la recibe también**: *I cut **myself**.* (Me corté.) *She looked at **herself** in the mirror.* Son: ***myself, yourself, himself, herself, itself, ourselves, yourselves, themselves***.",
        "También sirven para dar **énfasis**: *I made the cake **myself**!* (¡Yo mismo hice el pastel!) Y ***by + reflexivo*** = **solo, sin ayuda**: *She lives **by herself**.* (Vive sola.)",
        "***Each other*** (o ***one another***) significa **el uno al otro / mutuamente**: *Ana and Luis love **each other**.* (Se aman.) Compara: *They looked at **themselves*** (cada uno se miró a sí mismo) / *They looked at **each other*** (se miraron entre ellos).",
        "¡Ojo! Muchos verbos que en español son reflexivos **no** lo son en inglés: *me levanto = **I get up**, me baño = **I take a shower**, me siento = **I feel**, me acuerdo = **I remember**, nos conocimos = **we met***."
      ],
      "tabla": {
        "columnas": [
          "Pronombre",
          "Reflexivo",
          "Ejemplo"
        ],
        "filas": [
          [
            "I",
            "myself",
            "I taught myself to play the guitar."
          ],
          [
            "you",
            "yourself / yourselves",
            "Help yourself! Enjoy yourselves!"
          ],
          [
            "he / she / it",
            "himself / herself / itself",
            "He hurt himself playing soccer."
          ],
          [
            "we",
            "ourselves",
            "We built the house ourselves."
          ],
          [
            "they",
            "themselves",
            "They introduced themselves."
          ],
          [
            "recíproco",
            "each other",
            "We call each other every day."
          ]
        ]
      },
      "ojo": [
        "No uses reflexivo con ***relax, feel, meet, get up, shower, remember***: *I relax* ✅ (no *I relax myself* ❌). *We met in 2015* ✅ (no *We met ourselves* ❌).",
        "Expresiones muy útiles: ***Help yourself!*** (¡Sírvete!) ***Enjoy yourselves!*** (¡Diviértanse!) ***Take care of yourself!*** (¡Cuídate!) ***Make yourself at home!*** (¡Estás en tu casa!)",
        "*Themselves* ≠ *each other*: *They blamed **themselves*** (cada uno se culpó) / *They blamed **each other*** (se culparon uno al otro).",
        "***Talk to yourself*** = hablar solo: *My grandpa talks to himself when he's cooking.*",
        "***Get along with*** (llevarse bien), ***fall out with*** (pelearse), ***get to know*** (conocer mejor) son clave para hablar de relaciones."
      ],
      "en": [
        "Reflexive pronouns are used when the subject receives the action: I cut myself. She looked at herself in the mirror.",
        "They also add emphasis: I made the cake myself! By herself means alone.",
        "Each other means one to another: Ana and Luis love each other.",
        "Some verbs aren't reflexive in English: I get up, I feel, we met."
      ]
    },
    "vocabulario": [
      {
        "en": "I cut myself.",
        "es": "me corté",
        "imagen": "Persona poniéndose una curita en el dedo en la cocina",
        "ejemplo": [
          "I cut myself while I was cooking.",
          "Me corté mientras cocinaba."
        ]
      },
      {
        "en": "She looked at herself in the mirror.",
        "es": "se miró en el espejo",
        "imagen": "Mujer arreglándose frente al espejo",
        "ejemplo": [
          "She looked at herself in the mirror before the party.",
          "Se miró en el espejo antes de la fiesta."
        ]
      },
      {
        "en": "He hurt himself.",
        "es": "se lastimó",
        "imagen": "Jugador sentado en el pasto sujetándose el tobillo",
        "ejemplo": [
          "He hurt himself playing soccer.",
          "Se lastimó jugando fútbol."
        ]
      },
      {
        "en": "I taught myself.",
        "es": "aprendí solo",
        "imagen": "Persona aprendiendo a tocar piano con un video en la tablet",
        "ejemplo": [
          "I taught myself to play the piano.",
          "Aprendí a tocar el piano solo."
        ]
      },
      {
        "en": "They love each other.",
        "es": "se aman",
        "imagen": "Pareja mayor tomada de la mano en una banca",
        "ejemplo": [
          "After fifty years, they still love each other.",
          "Después de cincuenta años, todavía se aman."
        ]
      },
      {
        "en": "We call each other every day.",
        "es": "nos hablamos todos los días",
        "imagen": "Dos hermanas en videollamada sonriendo",
        "ejemplo": [
          "My sister and I call each other every day.",
          "Mi hermana y yo nos hablamos todos los días."
        ]
      },
      {
        "en": "She lives by herself.",
        "es": "ella vive sola",
        "imagen": "Mujer leyendo tranquila en su departamento",
        "ejemplo": [
          "My grandmother lives by herself.",
          "Mi abuela vive sola."
        ]
      },
      {
        "en": "Help yourself!",
        "es": "¡sírvete!",
        "imagen": "Anfitriona señalando una mesa con comida a sus invitados",
        "ejemplo": [
          "There's food in the kitchen. Help yourself!",
          "Hay comida en la cocina. ¡Sírvete!"
        ]
      },
      {
        "en": "Enjoy yourselves!",
        "es": "¡diviértanse!",
        "imagen": "Papás despidiendo a sus hijos que van a una fiesta",
        "ejemplo": [
          "Have a great time at the party. Enjoy yourselves!",
          "Pásenla bien en la fiesta. ¡Diviértanse!"
        ]
      },
      {
        "en": "Make yourself at home.",
        "es": "estás en tu casa",
        "imagen": "Anfitrión recibiendo a un amigo en su sala",
        "ejemplo": [
          "Come in! Make yourself at home.",
          "¡Pásale! Estás en tu casa."
        ]
      },
      {
        "en": "Take care of yourself.",
        "es": "cuídate",
        "imagen": "Mamá despidiéndose de su hijo en la estación",
        "ejemplo": [
          "Take care of yourself and call me.",
          "Cuídate y llámame."
        ]
      },
      {
        "en": "We built it ourselves.",
        "es": "lo construimos nosotros mismos",
        "imagen": "Familia orgullosa frente a una casa de madera para el perro",
        "ejemplo": [
          "We built the dog house ourselves.",
          "Construimos la casa del perro nosotros mismos."
        ]
      },
      {
        "en": "They introduced themselves.",
        "es": "se presentaron",
        "imagen": "Personas presentándose en una reunión con apretón de manos",
        "ejemplo": [
          "The new students introduced themselves.",
          "Los alumnos nuevos se presentaron."
        ]
      },
      {
        "en": "They don't talk to each other.",
        "es": "no se hablan",
        "imagen": "Dos personas sentadas de espaldas una a la otra",
        "ejemplo": [
          "My uncles don't talk to each other anymore.",
          "Mis tíos ya no se hablan."
        ]
      },
      {
        "en": "He talks to himself.",
        "es": "habla solo",
        "imagen": "Señor hablando solo mientras arregla su jardín",
        "ejemplo": [
          "My grandpa talks to himself when he works.",
          "Mi abuelo habla solo cuando trabaja."
        ]
      },
      {
        "en": "We get along well.",
        "es": "nos llevamos bien",
        "imagen": "Compañeros de cuarto riendo juntos en la cocina",
        "ejemplo": [
          "My roommate and I get along really well.",
          "Mi compañero de cuarto y yo nos llevamos muy bien."
        ]
      }
    ],
    "grupos": [
      {
        "id": "relaciones",
        "titulo": "Relaciones",
        "icono": "❤️",
        "patron": [
          "get along with…",
          "fall out with…",
          "get to know…"
        ],
        "palabras": [
          {
            "en": "get along with",
            "es": "llevarse bien con",
            "imagen": "Amigos riendo juntos en un parque",
            "ejemplo": [
              "I get along with my coworkers.",
              "Me llevo bien con mis compañeros de trabajo."
            ]
          },
          {
            "en": "fall out with",
            "es": "pelearse con",
            "imagen": "Dos amigos discutiendo con los brazos cruzados",
            "ejemplo": [
              "She fell out with her best friend.",
              "Se peleó con su mejor amiga."
            ]
          },
          {
            "en": "make up",
            "es": "reconciliarse",
            "imagen": "Dos amigos abrazándose después de una pelea",
            "ejemplo": [
              "They had an argument, but they made up.",
              "Discutieron, pero se reconciliaron."
            ]
          },
          {
            "en": "get to know",
            "es": "conocer mejor",
            "imagen": "Dos personas platicando en una cafetería",
            "ejemplo": [
              "I'd like to get to know you better.",
              "Me gustaría conocerte mejor."
            ]
          },
          {
            "en": "trust each other",
            "es": "confiar el uno en el otro",
            "imagen": "Dos amigos chocando las manos",
            "ejemplo": [
              "Good friends trust each other.",
              "Los buenos amigos confían el uno en el otro."
            ]
          },
          {
            "en": "break up",
            "es": "terminar (una relación)",
            "imagen": "Pareja triste sentada lejos en una banca",
            "ejemplo": [
              "They broke up after three years.",
              "Terminaron después de tres años."
            ]
          },
          {
            "en": "get married",
            "es": "casarse",
            "imagen": "Novios saliendo de una boda bajo pétalos",
            "ejemplo": [
              "They're getting married next spring.",
              "Se casan la próxima primavera."
            ]
          },
          {
            "en": "keep in touch",
            "es": "mantenerse en contacto",
            "imagen": "Amigos despidiéndose en un aeropuerto",
            "ejemplo": [
              "Let's keep in touch!",
              "¡Sigamos en contacto!"
            ]
          }
        ]
      },
      {
        "id": "nomereflexivo",
        "titulo": "No son reflexivos en inglés",
        "icono": "⚠️",
        "patron": [
          "I get up…",
          "I feel…",
          "We met…"
        ],
        "palabras": [
          {
            "en": "I get up at six.",
            "es": "me levanto a las seis",
            "imagen": "Persona levantándose de la cama al amanecer",
            "ejemplo": [
              "I get up at six every day.",
              "Me levanto a las seis todos los días."
            ]
          },
          {
            "en": "I feel sick.",
            "es": "me siento mal",
            "imagen": "Persona recostada con una mano en la frente",
            "ejemplo": [
              "I feel sick. I'm going home.",
              "Me siento mal. Me voy a casa."
            ]
          },
          {
            "en": "We met in 2015.",
            "es": "nos conocimos en 2015",
            "imagen": "Foto de una pareja joven en una fiesta",
            "ejemplo": [
              "We met at a friend's party in 2015.",
              "Nos conocimos en una fiesta de un amigo en 2015."
            ]
          },
          {
            "en": "I remember.",
            "es": "me acuerdo",
            "imagen": "Persona sonriendo mirando una foto antigua",
            "ejemplo": [
              "I remember that day very well.",
              "Me acuerdo muy bien de ese día."
            ]
          },
          {
            "en": "Relax!",
            "es": "¡relájate!",
            "imagen": "Persona estirándose en una hamaca",
            "ejemplo": [
              "Relax! Everything will be fine.",
              "¡Relájate! Todo va a salir bien."
            ]
          },
          {
            "en": "I'm getting dressed.",
            "es": "me estoy vistiendo",
            "imagen": "Persona abotonándose la camisa frente al clóset",
            "ejemplo": [
              "Wait a minute, I'm getting dressed.",
              "Espera un minuto, me estoy vistiendo."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I cut myself while I was cooking.",
        "es": "Me corté mientras cocinaba."
      },
      {
        "en": "He hurt himself playing soccer.",
        "es": "Se lastimó jugando fútbol."
      },
      {
        "en": "I taught myself to play the piano.",
        "es": "Aprendí a tocar el piano solo."
      },
      {
        "en": "After fifty years, they still love each other.",
        "es": "Después de cincuenta años, todavía se aman."
      },
      {
        "en": "My grandmother lives by herself.",
        "es": "Mi abuela vive sola."
      },
      {
        "en": "There's food in the kitchen. Help yourself!",
        "es": "Hay comida en la cocina. ¡Sírvete!"
      },
      {
        "en": "Come in! Make yourself at home.",
        "es": "¡Pásale! Estás en tu casa."
      },
      {
        "en": "My uncles don't talk to each other anymore.",
        "es": "Mis tíos ya no se hablan."
      },
      {
        "en": "They had an argument, but they made up.",
        "es": "Discutieron, pero se reconciliaron."
      },
      {
        "en": "We met at a friend's party in 2015.",
        "es": "Nos conocimos en una fiesta de un amigo en 2015."
      }
    ],
    "frases": [
      {
        "en": "My brother and I used to fight a lot, but now we help each other with everything.",
        "es": "Mi hermano y yo nos peleábamos mucho, pero ahora nos ayudamos en todo.",
        "imagen": "Hermanos adultos ayudándose a cargar muebles"
      },
      {
        "en": "She didn't hire a decorator. She painted and decorated the whole house herself.",
        "es": "No contrató decorador. Pintó y decoró toda la casa ella misma.",
        "imagen": "Mujer pintando la pared de su sala con orgullo"
      },
      {
        "en": "Be careful with that knife! You'll hurt yourself.",
        "es": "¡Cuidado con ese cuchillo! Te vas a lastimar.",
        "imagen": "Mamá advirtiendo a su hijo que corta verduras"
      },
      {
        "en": "The kids enjoyed themselves so much at the party that they didn't want to leave.",
        "es": "Los niños se divirtieron tanto en la fiesta que no se querían ir.",
        "imagen": "Niños jugando felices en una fiesta con piñata"
      },
      {
        "en": "We've known each other since kindergarten, and we still see each other every week.",
        "es": "Nos conocemos desde el kínder y todavía nos vemos cada semana.",
        "imagen": "Dos amigas adultas tomando café y riendo"
      },
      {
        "en": "I don't get along with my neighbor because his dog barks all night.",
        "es": "No me llevo bien con mi vecino porque su perro ladra toda la noche.",
        "imagen": "Vecino molesto mirando por la ventana de noche"
      },
      {
        "en": "Don't worry about us. We can take care of ourselves.",
        "es": "No te preocupes por nosotros. Nos sabemos cuidar solos.",
        "imagen": "Adolescentes despidiéndose de sus papás en la puerta"
      },
      {
        "en": "They looked at each other and started laughing.",
        "es": "Se miraron y empezaron a reírse.",
        "imagen": "Dos amigos mirándose y riendo a carcajadas"
      },
      {
        "en": "My grandfather lives by himself, but we visit him every Sunday.",
        "es": "Mi abuelo vive solo, pero lo visitamos cada domingo.",
        "imagen": "Familia llegando a la casa del abuelo con comida"
      },
      {
        "en": "After the argument, they didn't speak to each other for a week.",
        "es": "Después de la discusión, no se hablaron una semana.",
        "imagen": "Pareja seria en lados opuestos del sofá"
      }
    ],
    "listening": [
      {
        "audio": "I fixed the car myself. I watched a video online.",
        "pregunta": "¿Cómo arregló el carro?",
        "opciones": [
          "Él mismo, viendo un video",
          "Con un mecánico",
          "Con su papá",
          "No lo arregló"
        ]
      },
      {
        "audio": "My parents met in Acapulco, and they got married a year later.",
        "pregunta": "¿Dónde se conocieron sus papás?",
        "opciones": [
          "En Acapulco",
          "En la escuela",
          "En el trabajo",
          "En una boda"
        ]
      },
      {
        "audio": "My sister and I don't see each other very often because she lives in Spain.",
        "pregunta": "¿Por qué no se ven seguido?",
        "opciones": [
          "La hermana vive en España",
          "Están peleadas",
          "Trabajan mucho",
          "No se llevan bien"
        ]
      },
      {
        "audio": "Help yourselves to drinks. They're in the fridge.",
        "pregunta": "¿Dónde están las bebidas?",
        "opciones": [
          "En el refrigerador",
          "En la mesa",
          "En la cocina",
          "En el jardín"
        ]
      },
      {
        "audio": "He hurt himself when he fell off his bike, but it's not serious.",
        "pregunta": "¿Cómo se lastimó?",
        "opciones": [
          "Se cayó de la bici",
          "Jugando fútbol",
          "En el trabajo",
          "Cocinando"
        ]
      }
    ],
    "lectura": {
      "titulo": "Two old friends",
      "texto": "Rosa and Carmen met each other on their first day of school, when they were six years old. They became best friends immediately. They sat next to each other, they helped each other with homework, and they told each other all their secrets. When they were twenty, they had a big argument about a boy, and they didn't speak to each other for two years. Both of them were very sad, but they were too proud to call. Finally, Carmen sent Rosa a birthday card, and they made up. Since then, they have never stopped talking. Now they are seventy, and they both live by themselves in the same neighborhood. Every afternoon they meet at the park, and they still laugh at the same jokes. We know each other better than anybody, says Rosa. And we never argue about boys anymore! adds Carmen.",
      "preguntas": [
        {
          "pregunta": "¿Cuándo se conocieron Rosa y Carmen?",
          "opciones": [
            "En su primer día de escuela",
            "En la universidad",
            "En el trabajo",
            "En el parque"
          ]
        },
        {
          "pregunta": "¿Por qué discutieron a los veinte años?",
          "opciones": [
            "Por un muchacho",
            "Por dinero",
            "Por un trabajo",
            "Por un secreto"
          ]
        },
        {
          "pregunta": "¿Cómo se reconciliaron?",
          "opciones": [
            "Carmen le mandó una tarjeta de cumpleaños",
            "Se encontraron en el parque",
            "Rosa le llamó",
            "Una amiga las juntó"
          ]
        },
        {
          "pregunta": "¿Dónde se ven ahora todas las tardes?",
          "opciones": [
            "En el parque",
            "En la casa de Rosa",
            "En un café",
            "En la iglesia"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con el pronombre reflexivo.",
        "pregunta": "I cut ___ with a knife.",
        "respuestas": [
          "myself"
        ]
      },
      {
        "instruccion": "Completa con el pronombre reflexivo.",
        "pregunta": "She made the dress ___.",
        "respuestas": [
          "herself"
        ]
      },
      {
        "instruccion": "Completa con el pronombre reflexivo.",
        "pregunta": "We enjoyed ___ at the party.",
        "respuestas": [
          "ourselves"
        ]
      },
      {
        "instruccion": "Completa con el pronombre reflexivo.",
        "pregunta": "The kids can dress ___.",
        "respuestas": [
          "themselves"
        ]
      },
      {
        "instruccion": "Completa con un reflexivo o each other.",
        "pregunta": "Ana and Luis love ___.",
        "respuestas": [
          "each other",
          "one another"
        ]
      },
      {
        "instruccion": "Completa con el pronombre reflexivo.",
        "pregunta": "He lives by ___.",
        "respuestas": [
          "himself"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¡Sírvete!",
        "respuestas": [
          "Help yourself"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Nos conocimos en 2010.",
        "respuestas": [
          "We met in 2010"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Nos llevamos bien.",
        "respuestas": [
          "We get along well",
          "We get along",
          "We get on well"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "I relax myself on Sundays.",
        "respuestas": [
          "I relax on Sundays"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "Be careful! You'll burn ___.",
        "opciones": [
          "yourself",
          "you",
          "your",
          "yourselves self"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "They taught ___ to speak French.",
        "opciones": [
          "themselves",
          "theirselves",
          "themself",
          "each other self"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We always help ___. We're a team.",
        "opciones": [
          "each other",
          "ourself",
          "us",
          "ourselves each"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Me levanto a las siete» =",
        "opciones": [
          "I get up at seven.",
          "I get myself up at seven.",
          "I raise me at seven.",
          "I up myself at seven."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Make yourself at home» significa:",
        "opciones": [
          "Estás en tu casa",
          "Vete a tu casa",
          "Hazlo tú mismo",
          "Construye tu casa"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«They blamed each other» significa:",
        "opciones": [
          "Se culparon uno al otro",
          "Cada uno se culpó a sí mismo",
          "Culparon a otra persona",
          "Nadie tuvo la culpa"
        ]
      },
      {
        "tipo": "listening",
        "audio": "My neighbors don't talk to each other since they had a problem with the parking space.",
        "pregunta": "¿Por qué no se hablan los vecinos?",
        "opciones": [
          "Por un problema con el estacionamiento",
          "Por ruido",
          "Por dinero",
          "Por sus perros"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Enjoy yourselves, kids, and don't forget to wear sunscreen!",
        "pregunta": "¿Qué no deben olvidar?",
        "opciones": [
          "Ponerse bloqueador",
          "Su gorra",
          "Su comida",
          "Llamar"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Me lastimé.",
        "respuestas": [
          "I hurt myself"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Se aman.",
        "respuestas": [
          "They love each other",
          "They love one another"
        ]
      }
    ]
  },
  {
    "id": "b1-24",
    "num": 24,
    "titulo": "Phrasal verbs comunes (separables e inseparables)",
    "contexto": "La vida diaria",
    "explicacion": {
      "es": [
        "Los **phrasal verbs** son verbos + una partícula (*up, down, on, off, out, in…*) que juntos tienen un **significado nuevo**: *get up* (levantarse), *turn off* (apagar), *look for* (buscar), *give up* (rendirse / dejar).",
        "Los **separables** pueden llevar el objeto **en medio o al final**: *Turn **off the TV** / Turn **the TV** off.* Pero si el objeto es un **pronombre** (*it, them, him…*), **tiene que ir en medio**: *Turn **it** off* ✅ (no *Turn off it* ❌).",
        "Los **inseparables** nunca se separan: el objeto va **siempre al final**: *I'm **looking for** my keys. She **takes after** her mother. Can you **look after** the kids?*",
        "Muchos son **intransitivos** (sin objeto): *I **get up** at six. The plane **took off**. Our car **broke down**.* Lo mejor es aprenderlos con ejemplos, como vocabulario."
      ],
      "tabla": {
        "columnas": [
          "Tipo",
          "Ejemplo con sustantivo",
          "Ejemplo con pronombre"
        ],
        "filas": [
          [
            "Separable",
            "Pick up your clothes. / Pick your clothes up.",
            "Pick them up."
          ],
          [
            "Separable",
            "Turn on the light. / Turn the light on.",
            "Turn it on."
          ],
          [
            "Inseparable",
            "I'm looking for my phone.",
            "I'm looking for it."
          ],
          [
            "Inseparable",
            "She looks after her grandma.",
            "She looks after her."
          ],
          [
            "Sin objeto",
            "The car broke down.",
            "—"
          ]
        ]
      },
      "ojo": [
        "*Turn off **it*** ❌ → *Turn **it** off* ✅. Con pronombre, en medio.",
        "Un mismo phrasal verb puede tener **varios significados**: *take off* = quitarse la ropa / despegar (avión). *Pick up* = recoger / levantar / pasar por alguien.",
        "*Look* cambia mucho: *look **for*** (buscar), *look **after*** (cuidar), *look **up*** (buscar en un diccionario o internet), *look **forward to*** (esperar con ganas).",
        "Muchos son **informales**; en textos formales hay equivalentes: *find out = discover*, *put off = postpone*, *give up = quit*.",
        "Algunos llevan dos partículas: ***run out of*** (quedarse sin), ***get along with*** (llevarse bien con), ***look forward to***."
      ],
      "en": [
        "Phrasal verbs are verbs with a particle that have a new meaning: get up, turn off, look for, give up.",
        "Separable phrasal verbs: Turn off the TV, or turn the TV off. With a pronoun: Turn it off.",
        "Inseparable phrasal verbs: I'm looking for my keys. Can you look after the kids?",
        "Some have no object: The plane took off. Our car broke down."
      ]
    },
    "vocabulario": [
      {
        "en": "get up",
        "es": "levantarse",
        "imagen": "Persona estirándose al levantarse de la cama",
        "ejemplo": [
          "I get up at six thirty every day.",
          "Me levanto a las seis y media todos los días."
        ]
      },
      {
        "en": "turn off",
        "es": "apagar",
        "imagen": "Mano apagando el interruptor de la luz",
        "ejemplo": [
          "Turn off the lights when you leave.",
          "Apaga las luces cuando salgas."
        ]
      },
      {
        "en": "turn on",
        "es": "prender",
        "imagen": "Persona prendiendo la tele con el control",
        "ejemplo": [
          "Can you turn on the air conditioning?",
          "¿Puedes prender el aire acondicionado?"
        ]
      },
      {
        "en": "look for",
        "es": "buscar",
        "imagen": "Persona buscando algo debajo del sofá",
        "ejemplo": [
          "I'm looking for my glasses.",
          "Estoy buscando mis lentes."
        ]
      },
      {
        "en": "look after",
        "es": "cuidar",
        "imagen": "Abuela cuidando a su nieto en el parque",
        "ejemplo": [
          "My mom looks after my kids on Fridays.",
          "Mi mamá cuida a mis hijos los viernes."
        ]
      },
      {
        "en": "pick up",
        "es": "recoger / pasar por",
        "imagen": "Papá recogiendo a su hija en la escuela",
        "ejemplo": [
          "I'll pick you up at eight.",
          "Paso por ti a las ocho."
        ]
      },
      {
        "en": "put on",
        "es": "ponerse",
        "imagen": "Persona poniéndose una chamarra en la puerta",
        "ejemplo": [
          "Put on your jacket. It's cold.",
          "Ponte la chamarra. Hace frío."
        ]
      },
      {
        "en": "take off",
        "es": "quitarse / despegar",
        "imagen": "Avión despegando de la pista",
        "ejemplo": [
          "The plane took off at nine.",
          "El avión despegó a las nueve."
        ]
      },
      {
        "en": "give up",
        "es": "rendirse / dejar",
        "imagen": "Persona tirando cigarros a la basura",
        "ejemplo": [
          "Don't give up! You can do it.",
          "¡No te rindas! Tú puedes."
        ]
      },
      {
        "en": "find out",
        "es": "averiguar / enterarse",
        "imagen": "Persona leyendo una noticia sorprendente en el celular",
        "ejemplo": [
          "I found out the truth yesterday.",
          "Ayer me enteré de la verdad."
        ]
      },
      {
        "en": "run out of",
        "es": "quedarse sin",
        "imagen": "Coche detenido en la carretera sin gasolina",
        "ejemplo": [
          "We ran out of gas on the highway.",
          "Nos quedamos sin gasolina en la carretera."
        ]
      },
      {
        "en": "break down",
        "es": "descomponerse",
        "imagen": "Carro con el cofre abierto echando humo",
        "ejemplo": [
          "Our car broke down on the way to Puebla.",
          "Se nos descompuso el carro camino a Puebla."
        ]
      },
      {
        "en": "fill in",
        "es": "llenar (un formulario)",
        "imagen": "Persona llenando un formulario en una oficina",
        "ejemplo": [
          "Please fill in this form.",
          "Por favor llene este formulario."
        ]
      },
      {
        "en": "put off",
        "es": "posponer",
        "imagen": "Persona moviendo una cita en su agenda",
        "ejemplo": [
          "They put off the meeting until Monday.",
          "Pospusieron la junta para el lunes."
        ]
      },
      {
        "en": "throw away",
        "es": "tirar (a la basura)",
        "imagen": "Persona tirando papeles a un bote de basura",
        "ejemplo": [
          "Don't throw away the plastic bottles.",
          "No tires las botellas de plástico."
        ]
      },
      {
        "en": "come back",
        "es": "regresar",
        "imagen": "Persona regresando a casa con maletas",
        "ejemplo": [
          "When are you coming back from your trip?",
          "¿Cuándo regresas de tu viaje?"
        ]
      }
    ],
    "grupos": [
      {
        "id": "casa",
        "titulo": "En la casa",
        "icono": "🏠",
        "patron": [
          "Turn it off.",
          "Pick them up.",
          "Put it away."
        ],
        "palabras": [
          {
            "en": "put away",
            "es": "guardar",
            "imagen": "Niño guardando sus juguetes en una caja",
            "ejemplo": [
              "Put your toys away, please.",
              "Guarda tus juguetes, por favor."
            ]
          },
          {
            "en": "clean up",
            "es": "limpiar / recoger",
            "imagen": "Familia limpiando la sala después de una fiesta",
            "ejemplo": [
              "Let's clean up after the party.",
              "Recojamos después de la fiesta."
            ]
          },
          {
            "en": "wash up",
            "es": "lavar los trastes",
            "imagen": "Persona lavando trastes en el fregadero",
            "ejemplo": [
              "I'll wash up tonight.",
              "Hoy en la noche yo lavo los trastes."
            ]
          },
          {
            "en": "hang up",
            "es": "colgar",
            "imagen": "Persona colgando ropa en un gancho",
            "ejemplo": [
              "Hang up your coat.",
              "Cuelga tu abrigo."
            ]
          },
          {
            "en": "plug in",
            "es": "conectar",
            "imagen": "Mano conectando un cargador a la pared",
            "ejemplo": [
              "Plug in the charger, please.",
              "Conecta el cargador, por favor."
            ]
          },
          {
            "en": "turn up",
            "es": "subir el volumen",
            "imagen": "Persona subiendo el volumen de una bocina",
            "ejemplo": [
              "Turn up the music! I love this song.",
              "¡Súbele a la música! Me encanta esta canción."
            ]
          },
          {
            "en": "turn down",
            "es": "bajar el volumen / rechazar",
            "imagen": "Persona bajando el volumen de la tele",
            "ejemplo": [
              "Turn down the TV. The baby is sleeping.",
              "Bájale a la tele. El bebé está dormido."
            ]
          },
          {
            "en": "take out",
            "es": "sacar",
            "imagen": "Persona sacando la basura a la calle",
            "ejemplo": [
              "Can you take out the trash?",
              "¿Puedes sacar la basura?"
            ]
          }
        ]
      },
      {
        "id": "personas",
        "titulo": "Con otras personas",
        "icono": "👥",
        "patron": [
          "get along with…",
          "take after…",
          "call back…"
        ],
        "palabras": [
          {
            "en": "get along with",
            "es": "llevarse bien con",
            "imagen": "Compañeros de trabajo riendo juntos",
            "ejemplo": [
              "I get along with my boss.",
              "Me llevo bien con mi jefe."
            ]
          },
          {
            "en": "take after",
            "es": "parecerse a (un familiar)",
            "imagen": "Hija y mamá con la misma sonrisa",
            "ejemplo": [
              "She takes after her father.",
              "Se parece a su papá."
            ]
          },
          {
            "en": "call back",
            "es": "regresar la llamada",
            "imagen": "Persona marcando un número con un recado en la mano",
            "ejemplo": [
              "I'll call you back in five minutes.",
              "Te regreso la llamada en cinco minutos."
            ]
          },
          {
            "en": "grow up",
            "es": "crecer",
            "imagen": "Fotos de un niño creciendo en la pared",
            "ejemplo": [
              "I grew up in a small town.",
              "Crecí en un pueblo pequeño."
            ]
          },
          {
            "en": "let down",
            "es": "decepcionar / fallar",
            "imagen": "Persona decepcionada esperando sola en un restaurante",
            "ejemplo": [
              "Don't let me down!",
              "¡No me falles!"
            ]
          },
          {
            "en": "show up",
            "es": "aparecer / llegar",
            "imagen": "Amigo llegando tarde a una fiesta",
            "ejemplo": [
              "He showed up two hours late.",
              "Llegó dos horas tarde."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "I get up at six thirty every day.",
        "es": "Me levanto a las seis y media todos los días."
      },
      {
        "en": "Turn off the lights when you leave.",
        "es": "Apaga las luces cuando salgas."
      },
      {
        "en": "I'm looking for my glasses.",
        "es": "Estoy buscando mis lentes."
      },
      {
        "en": "My mom looks after my kids on Fridays.",
        "es": "Mi mamá cuida a mis hijos los viernes."
      },
      {
        "en": "I'll pick you up at eight.",
        "es": "Paso por ti a las ocho."
      },
      {
        "en": "Don't give up! You can do it.",
        "es": "¡No te rindas! Tú puedes."
      },
      {
        "en": "We ran out of gas on the highway.",
        "es": "Nos quedamos sin gasolina en la carretera."
      },
      {
        "en": "The TV is too loud. Turn it down, please.",
        "es": "La tele está muy fuerte. Bájale, por favor.",
        "imagen": "Persona tapándose los oídos frente a la tele"
      },
      {
        "en": "She takes after her father.",
        "es": "Se parece a su papá."
      },
      {
        "en": "He showed up two hours late.",
        "es": "Llegó dos horas tarde."
      }
    ],
    "frases": [
      {
        "en": "I usually get up at six, put on my uniform, and pick up a coffee on the way to work.",
        "es": "Normalmente me levanto a las seis, me pongo el uniforme y compro un café camino al trabajo.",
        "imagen": "Persona con uniforme recogiendo un café para llevar"
      },
      {
        "en": "Our car broke down in the middle of nowhere, and we had to call my brother to pick us up.",
        "es": "Se nos descompuso el carro en medio de la nada y tuvimos que llamarle a mi hermano para que pasara por nosotros.",
        "imagen": "Familia junto a un carro descompuesto en una carretera rural"
      },
      {
        "en": "The meeting was put off until next week because the boss was sick.",
        "es": "La junta se pospuso para la próxima semana porque el jefe estaba enfermo.",
        "imagen": "Sala de juntas vacía con una agenda abierta"
      },
      {
        "en": "I'm looking for a new apartment because I don't get along with my roommate.",
        "es": "Estoy buscando departamento nuevo porque no me llevo bien con mi compañero de cuarto.",
        "imagen": "Persona revisando anuncios de departamentos en su laptop"
      },
      {
        "en": "We've run out of milk. Can you buy some when you come back?",
        "es": "Se nos acabó la leche. ¿Puedes comprar cuando regreses?",
        "imagen": "Refrigerador abierto con un envase de leche vacío"
      },
      {
        "en": "I found out that my best friend is moving to Canada. I'm so sad.",
        "es": "Me enteré de que mi mejor amigo se va a vivir a Canadá. Estoy muy triste.",
        "imagen": "Amigos despidiéndose con un abrazo en un aeropuerto"
      },
      {
        "en": "Don't throw away those boxes. We can use them when we move.",
        "es": "No tires esas cajas. Las podemos usar cuando nos mudemos.",
        "imagen": "Cajas de cartón apiladas en un rincón"
      },
      {
        "en": "My grandmother looked after me when my parents were working.",
        "es": "Mi abuela me cuidaba cuando mis papás trabajaban.",
        "imagen": "Abuela leyendo un cuento a su nieto en el sofá"
      },
      {
        "en": "Please fill in the form and give it back to the receptionist.",
        "es": "Por favor llene el formulario y devuélvaselo a la recepcionista.",
        "imagen": "Paciente llenando un formulario en la sala de espera"
      },
      {
        "en": "She tried to quit smoking many times, but she never gave up, and finally she did it.",
        "es": "Intentó dejar de fumar muchas veces, pero nunca se rindió y por fin lo logró.",
        "imagen": "Mujer corriendo feliz en un parque al amanecer"
      }
    ],
    "listening": [
      {
        "audio": "Can you turn the music down? I'm trying to study.",
        "pregunta": "¿Qué le pide?",
        "opciones": [
          "Bajarle a la música",
          "Subirle a la música",
          "Apagar la tele",
          "Cerrar la puerta"
        ]
      },
      {
        "audio": "I'll pick you up at the airport. Text me when you land.",
        "pregunta": "¿Qué va a hacer?",
        "opciones": [
          "Recogerlo en el aeropuerto",
          "Llevarlo al aeropuerto",
          "Comprar el boleto",
          "Esperar en casa"
        ]
      },
      {
        "audio": "We ran out of bread, so I made quesadillas for breakfast.",
        "pregunta": "¿Por qué hizo quesadillas?",
        "opciones": [
          "Se acabó el pan",
          "Son sus favoritas",
          "No había tortillas",
          "Era domingo"
        ]
      },
      {
        "audio": "The flight took off an hour late because of the storm.",
        "pregunta": "¿Por qué se retrasó el despegue?",
        "opciones": [
          "Por la tormenta",
          "Por un problema técnico",
          "Por los pasajeros",
          "Por el tráfico"
        ]
      },
      {
        "audio": "I'm looking for a gift for my mom. Can you help me?",
        "pregunta": "¿Qué busca?",
        "opciones": [
          "Un regalo para su mamá",
          "Ropa para él",
          "Un libro",
          "Un celular"
        ]
      }
    ],
    "lectura": {
      "titulo": "A Monday to forget",
      "texto": "Last Monday everything went wrong for Iván. He didn't hear his alarm, so he got up forty minutes late. He put on his clothes very quickly and ran out of the house, but halfway to the office he found out that he had left his phone at home. He went back to get it. Then his car broke down on the highway, and he had to call a mechanic. While he was waiting, it started to rain, and he ran out of battery because he had forgotten to plug in his phone the night before. When he finally showed up at work, at eleven, his boss told him that the important meeting had been put off until Wednesday. Iván almost laughed. In the evening, he turned off his phone, put on some music, and went to bed early. Tomorrow will be better, he thought. He didn't give up.",
      "preguntas": [
        {
          "pregunta": "¿Por qué se levantó tarde Iván?",
          "opciones": [
            "No oyó su alarma",
            "Estaba enfermo",
            "Se desveló",
            "Se fue la luz"
          ]
        },
        {
          "pregunta": "¿Qué olvidó en casa?",
          "opciones": [
            "Su celular",
            "Sus llaves",
            "Su cartera",
            "Su comida"
          ]
        },
        {
          "pregunta": "¿Por qué se quedó sin batería?",
          "opciones": [
            "No conectó su celular la noche anterior",
            "El cargador estaba roto",
            "Usó mucho el celular",
            "Se mojó"
          ]
        },
        {
          "pregunta": "¿Qué pasó con la junta importante?",
          "opciones": [
            "Se pospuso para el miércoles",
            "Se canceló",
            "Fue sin él",
            "Fue en la tarde"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa el phrasal verb.",
        "pregunta": "I get ___ at seven every day.",
        "respuestas": [
          "up"
        ]
      },
      {
        "instruccion": "Completa el phrasal verb.",
        "pregunta": "I'm looking ___ my keys.",
        "respuestas": [
          "for"
        ]
      },
      {
        "instruccion": "Completa el phrasal verb.",
        "pregunta": "We ran out ___ coffee.",
        "respuestas": [
          "of"
        ]
      },
      {
        "instruccion": "Completa el phrasal verb.",
        "pregunta": "Put ___ your coat. It's cold.",
        "respuestas": [
          "on"
        ]
      },
      {
        "instruccion": "Ordena con el pronombre.",
        "pregunta": "Turn off the TV. → Turn ___ off.",
        "respuestas": [
          "it"
        ]
      },
      {
        "instruccion": "Completa el phrasal verb.",
        "pregunta": "Don't give ___! Keep trying.",
        "respuestas": [
          "up"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Paso por ti a las ocho.",
        "respuestas": [
          "I'll pick you up at eight",
          "I will pick you up at eight",
          "I'll pick you up at 8"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Se nos descompuso el carro.",
        "respuestas": [
          "Our car broke down",
          "The car broke down"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Me enteré de la verdad.",
        "respuestas": [
          "I found out the truth"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "The light is on. Please turn off it.",
        "respuestas": [
          "The light is on. Please turn it off",
          "Please turn it off"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "Can you ___ my cat while I'm on vacation?",
        "opciones": [
          "look after",
          "look for",
          "look up",
          "look at after"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "These are your clothes. Pick ___.",
        "opciones": [
          "them up",
          "up them",
          "up it",
          "it up them"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The plane ___ at six in the morning.",
        "opciones": [
          "took off",
          "took out",
          "put off",
          "turned off"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We ___ sugar. Can you buy some?",
        "opciones": [
          "have run out of",
          "have run out",
          "ran off",
          "are out to"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«She takes after her mother» significa:",
        "opciones": [
          "Se parece a su mamá",
          "Cuida a su mamá",
          "Sigue a su mamá",
          "Llama a su mamá"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "They ___ the party because of the rain.",
        "opciones": [
          "put off",
          "put on",
          "took off",
          "gave out"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I don't get along with my new boss. He's always in a bad mood.",
        "pregunta": "¿Cómo es el nuevo jefe?",
        "opciones": [
          "Siempre está de mal humor",
          "Es muy amable",
          "Es muy joven",
          "Nunca está"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Fill in this form and bring it back tomorrow with a copy of your ID.",
        "pregunta": "¿Qué tiene que traer mañana?",
        "opciones": [
          "El formulario y una copia de su identificación",
          "Dinero",
          "Fotos",
          "Su pasaporte"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Apaga la luz.",
        "respuestas": [
          "Turn off the light",
          "Turn the light off",
          "Switch off the light"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¡No te rindas!",
        "respuestas": [
          "Don't give up",
          "Do not give up"
        ]
      }
    ]
  },
  {
    "id": "b1-25",
    "num": 25,
    "titulo": "Both / either / neither",
    "contexto": "Comparar opciones",
    "explicacion": {
      "es": [
        "Estas palabras sirven para hablar de **dos** cosas o personas. ***Both*** = **los dos / ambos**: ***Both** apartments are nice.* (Los dos departamentos están bonitos.) ***Both of** them are expensive.*",
        "***Either*** = **cualquiera de los dos / uno u otro**: *You can take **either** bus.* (Puedes tomar cualquiera de los dos camiones.) En negativo = **ninguno**: *I don't like **either** of them.*",
        "***Neither*** = **ninguno de los dos**, con verbo **afirmativo**: ***Neither** option is perfect.* (Ninguna opción es perfecta.) ***Neither of** my brothers lives here.*",
        "Para unir dos cosas: ***both … and*** (tanto… como): *She speaks **both** English **and** French.* ***either … or*** (o… o): *We can go **either** today **or** tomorrow.* ***neither … nor*** (ni… ni): ***Neither** Ana **nor** Luis came.*"
      ],
      "tabla": {
        "columnas": [
          "Palabra",
          "Significado",
          "Ejemplo"
        ],
        "filas": [
          [
            "both",
            "los dos",
            "Both houses have a garden."
          ],
          [
            "either",
            "cualquiera de los dos",
            "You can sit in either chair."
          ],
          [
            "neither",
            "ninguno de los dos",
            "Neither restaurant was open."
          ],
          [
            "both … and",
            "tanto… como",
            "It's both cheap and good."
          ],
          [
            "either … or",
            "o… o",
            "Either you call her or I will."
          ],
          [
            "neither … nor",
            "ni… ni",
            "He's neither tall nor short."
          ]
        ]
      },
      "ojo": [
        "*Neither* ya es negativo: *Neither of them **is** coming* ✅, no *Neither of them isn't coming* ❌.",
        "Después de *both of / either of / neither of* va **pronombre o *the / my***: *both **of them**, neither **of my** sisters*.",
        "Para estar de acuerdo con algo negativo: ***Me neither.*** (Yo tampoco.) *I don't like coffee. — **Me neither**.* Con algo positivo: ***Me too.***",
        "***Either*** al final de una oración negativa = **tampoco**: *I can't swim. — I can't **either**.*",
        "*Both* va antes del verbo principal y después de *be*: *We **both** like pizza. They **are both** doctors.*"
      ],
      "en": [
        "Both means the two of them: Both apartments are nice.",
        "Either means one or the other: You can take either bus.",
        "Neither means not one and not the other: Neither option is perfect.",
        "Both and, either or, neither nor: She speaks both English and French."
      ]
    },
    "vocabulario": [
      {
        "en": "Both are nice.",
        "es": "los dos están bonitos",
        "imagen": "Dos departamentos modernos lado a lado",
        "ejemplo": [
          "Both apartments are nice.",
          "Los dos departamentos están bonitos."
        ]
      },
      {
        "en": "both of them",
        "es": "los dos / ambos",
        "imagen": "Dos hermanos sonriendo con el mismo uniforme",
        "ejemplo": [
          "Both of them are doctors.",
          "Los dos son doctores."
        ]
      },
      {
        "en": "either bus",
        "es": "cualquiera de los dos camiones",
        "imagen": "Dos autobuses en una parada",
        "ejemplo": [
          "You can take either bus. Both go downtown.",
          "Puedes tomar cualquiera de los dos camiones. Los dos van al centro."
        ]
      },
      {
        "en": "neither option",
        "es": "ninguna opción",
        "imagen": "Persona dudando entre dos caminos con cara de insatisfacción",
        "ejemplo": [
          "Neither option is perfect.",
          "Ninguna opción es perfecta."
        ]
      },
      {
        "en": "Me neither.",
        "es": "yo tampoco",
        "imagen": "Dos amigos encogiéndose de hombros juntos",
        "ejemplo": [
          "I don't like horror movies. Me neither.",
          "No me gustan las películas de terror. Yo tampoco."
        ]
      },
      {
        "en": "I can't either.",
        "es": "yo tampoco puedo",
        "imagen": "Dos personas mirando una pared de escalada sin subir",
        "ejemplo": [
          "I can't swim. I can't either.",
          "No sé nadar. Yo tampoco."
        ]
      },
      {
        "en": "both … and",
        "es": "tanto… como",
        "imagen": "Mujer hablando con dos personas de distintos países",
        "ejemplo": [
          "She speaks both English and French.",
          "Habla tanto inglés como francés."
        ]
      },
      {
        "en": "either … or",
        "es": "o… o",
        "imagen": "Persona con dos boletos de distintos días",
        "ejemplo": [
          "We can go either today or tomorrow.",
          "Podemos ir o hoy o mañana."
        ]
      },
      {
        "en": "neither … nor",
        "es": "ni… ni",
        "imagen": "Restaurante cerrado y café cerrado en la misma calle",
        "ejemplo": [
          "Neither the restaurant nor the café was open.",
          "Ni el restaurante ni el café estaban abiertos."
        ]
      },
      {
        "en": "neither of my brothers",
        "es": "ninguno de mis hermanos",
        "imagen": "Foto familiar con dos hermanos",
        "ejemplo": [
          "Neither of my brothers lives in Mexico.",
          "Ninguno de mis hermanos vive en México."
        ]
      },
      {
        "en": "We both like pizza.",
        "es": "a los dos nos gusta la pizza",
        "imagen": "Pareja compartiendo una pizza en el sofá",
        "ejemplo": [
          "We both like pizza with mushrooms.",
          "A los dos nos gusta la pizza con champiñones."
        ]
      },
      {
        "en": "either of them",
        "es": "cualquiera de los dos",
        "imagen": "Persona eligiendo entre dos camisas en una tienda",
        "ejemplo": [
          "I don't mind. Either of them is fine.",
          "Me da igual. Cualquiera de las dos está bien."
        ]
      },
      {
        "en": "I don't like either.",
        "es": "no me gusta ninguno",
        "imagen": "Persona haciendo cara de no convencida ante dos platos",
        "ejemplo": [
          "I don't like either of these colors.",
          "No me gusta ninguno de estos colores."
        ]
      },
      {
        "en": "They're both teachers.",
        "es": "los dos son maestros",
        "imagen": "Pareja de maestros en un salón",
        "ejemplo": [
          "My parents are both teachers.",
          "Mis papás son maestros los dos."
        ]
      },
      {
        "en": "neither of us",
        "es": "ninguno de nosotros",
        "imagen": "Dos amigos mirando un mapa confundidos",
        "ejemplo": [
          "Neither of us knew the way.",
          "Ninguno de los dos sabía el camino."
        ]
      },
      {
        "en": "Both sound good.",
        "es": "los dos suenan bien",
        "imagen": "Persona mirando dos menús con entusiasmo",
        "ejemplo": [
          "Pizza or tacos? Both sound good!",
          "¿Pizza o tacos? ¡Los dos suenan bien!"
        ]
      }
    ],
    "grupos": [
      {
        "id": "elegir",
        "titulo": "Elegir entre dos",
        "icono": "⚖️",
        "patron": [
          "Which one do you prefer?",
          "I'd rather…",
          "It doesn't matter."
        ],
        "palabras": [
          {
            "en": "Which one do you prefer?",
            "es": "¿cuál prefieres?",
            "imagen": "Persona mostrando dos opciones de teléfono a su amiga",
            "ejemplo": [
              "Which one do you prefer, the black or the white?",
              "¿Cuál prefieres, el negro o el blanco?"
            ]
          },
          {
            "en": "I'd rather have the blue one.",
            "es": "prefiero el azul",
            "imagen": "Persona señalando un suéter azul en la tienda",
            "ejemplo": [
              "I'd rather have the blue one.",
              "Prefiero el azul."
            ]
          },
          {
            "en": "It doesn't matter.",
            "es": "da igual",
            "imagen": "Persona relajada encogiéndose de hombros",
            "ejemplo": [
              "Coffee or tea? It doesn't matter.",
              "¿Café o té? Da igual."
            ]
          },
          {
            "en": "the pros and cons",
            "es": "los pros y los contras",
            "imagen": "Persona escribiendo una lista con dos columnas",
            "ejemplo": [
              "Let's write the pros and cons of each job.",
              "Escribamos los pros y los contras de cada trabajo."
            ]
          },
          {
            "en": "on the one hand",
            "es": "por un lado",
            "imagen": "Persona señalando una opción con la mano izquierda",
            "ejemplo": [
              "On the one hand, the house is big.",
              "Por un lado, la casa es grande."
            ]
          },
          {
            "en": "on the other hand",
            "es": "por otro lado",
            "imagen": "Persona señalando otra opción con la mano derecha",
            "ejemplo": [
              "On the other hand, it's far from work.",
              "Por otro lado, está lejos del trabajo."
            ]
          }
        ]
      },
      {
        "id": "acuerdo",
        "titulo": "Yo también, yo tampoco",
        "icono": "🤝",
        "patron": [
          "Me too.",
          "Me neither.",
          "So do I."
        ],
        "palabras": [
          {
            "en": "Me too.",
            "es": "yo también",
            "imagen": "Dos amigos levantando la mano al mismo tiempo",
            "ejemplo": [
              "I love tacos. Me too!",
              "Me encantan los tacos. ¡A mí también!"
            ]
          },
          {
            "en": "So do I.",
            "es": "yo también",
            "imagen": "Personas sonriendo de acuerdo",
            "ejemplo": [
              "I work on Saturdays. So do I.",
              "Trabajo los sábados. Yo también."
            ]
          },
          {
            "en": "Neither do I.",
            "es": "yo tampoco",
            "imagen": "Dos personas negando con la cabeza",
            "ejemplo": [
              "I don't eat meat. Neither do I.",
              "No como carne. Yo tampoco."
            ]
          },
          {
            "en": "So am I.",
            "es": "yo también",
            "imagen": "Dos amigos cansados en una banca",
            "ejemplo": [
              "I'm tired. So am I.",
              "Estoy cansado. Yo también."
            ]
          },
          {
            "en": "Neither am I.",
            "es": "yo tampoco",
            "imagen": "Dos personas que no están listas en la puerta",
            "ejemplo": [
              "I'm not ready. Neither am I.",
              "No estoy listo. Yo tampoco."
            ]
          },
          {
            "en": "I do.",
            "es": "yo sí",
            "imagen": "Persona levantando la mano en un grupo",
            "ejemplo": [
              "I don't like spicy food. Oh, I do!",
              "No me gusta la comida picante. ¡Ah, a mí sí!"
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Both apartments are nice.",
        "es": "Los dos departamentos están bonitos."
      },
      {
        "en": "You can take either bus. Both go downtown.",
        "es": "Puedes tomar cualquiera de los dos camiones. Los dos van al centro."
      },
      {
        "en": "Neither option is perfect.",
        "es": "Ninguna opción es perfecta."
      },
      {
        "en": "I don't like horror movies. Me neither.",
        "es": "No me gustan las películas de terror. Yo tampoco."
      },
      {
        "en": "She speaks both English and French.",
        "es": "Habla tanto inglés como francés."
      },
      {
        "en": "We can go either today or tomorrow.",
        "es": "Podemos ir o hoy o mañana."
      },
      {
        "en": "Neither of my brothers lives in Mexico.",
        "es": "Ninguno de mis hermanos vive en México."
      },
      {
        "en": "I don't mind. Either of them is fine.",
        "es": "Me da igual. Cualquiera de las dos está bien."
      },
      {
        "en": "I work on Saturdays. So do I.",
        "es": "Trabajo los sábados. Yo también."
      },
      {
        "en": "Pizza or tacos? Both sound good!",
        "es": "¿Pizza o tacos? ¡Los dos suenan bien!"
      }
    ],
    "frases": [
      {
        "en": "Both jobs are interesting, but neither of them pays very well.",
        "es": "Los dos trabajos son interesantes, pero ninguno paga muy bien.",
        "imagen": "Persona comparando dos ofertas de trabajo en su escritorio"
      },
      {
        "en": "You can pay either in cash or by card. We accept both.",
        "es": "Puede pagar en efectivo o con tarjeta. Aceptamos las dos.",
        "imagen": "Cliente en una caja con efectivo y tarjeta"
      },
      {
        "en": "Neither my sister nor I can cook, so we always order food.",
        "es": "Ni mi hermana ni yo sabemos cocinar, así que siempre pedimos comida.",
        "imagen": "Hermanas recibiendo comida a domicilio en la puerta"
      },
      {
        "en": "On the one hand, the city is exciting. On the other hand, it's very expensive.",
        "es": "Por un lado, la ciudad es emocionante. Por otro lado, es muy cara.",
        "imagen": "Ciudad iluminada de noche con tiendas caras"
      },
      {
        "en": "We both love traveling, so we save money for a trip every year.",
        "es": "A los dos nos encanta viajar, así que ahorramos para un viaje cada año.",
        "imagen": "Pareja con mochilas frente a un paisaje de montaña"
      },
      {
        "en": "I didn't like either of the movies. They were both too long.",
        "es": "No me gustó ninguna de las dos películas. Las dos estaban demasiado largas.",
        "imagen": "Persona bostezando en una sala de cine"
      },
      {
        "en": "Both my parents were born in Oaxaca, but neither of them lives there now.",
        "es": "Mis dos papás nacieron en Oaxaca, pero ninguno vive ahí ahora.",
        "imagen": "Pareja mayor mirando fotos de Oaxaca"
      },
      {
        "en": "You can sit in either chair. They're both comfortable.",
        "es": "Puedes sentarte en cualquiera de las dos sillas. Las dos son cómodas.",
        "imagen": "Sala con dos sillones cómodos"
      },
      {
        "en": "I've never been to Europe. Neither have I, but I'd love to go.",
        "es": "Nunca he ido a Europa. Yo tampoco, pero me encantaría ir.",
        "imagen": "Amigos mirando fotos de Europa en una laptop"
      },
      {
        "en": "The house is both big and cheap, but it's neither close to the city nor safe.",
        "es": "La casa es tanto grande como barata, pero no está cerca de la ciudad ni es segura.",
        "imagen": "Casa grande en una zona solitaria a las afueras"
      }
    ],
    "listening": [
      {
        "audio": "Both restaurants are good, but the Italian one is cheaper.",
        "pregunta": "¿Cuál restaurante es más barato?",
        "opciones": [
          "El italiano",
          "El otro",
          "Los dos cuestan igual",
          "Ninguno"
        ]
      },
      {
        "audio": "Neither of my children likes vegetables. It's a problem!",
        "pregunta": "¿A cuántos de sus hijos les gustan las verduras?",
        "opciones": [
          "A ninguno",
          "A los dos",
          "A uno",
          "No lo dice"
        ]
      },
      {
        "audio": "You can come either on Monday or on Tuesday. I'm free both days.",
        "pregunta": "¿Qué días está libre?",
        "opciones": [
          "Lunes y martes",
          "Solo el lunes",
          "Solo el martes",
          "Ningún día"
        ]
      },
      {
        "audio": "I don't really like coffee. Me neither. I prefer tea.",
        "pregunta": "¿Qué prefiere la segunda persona?",
        "opciones": [
          "Té",
          "Café",
          "Agua",
          "Jugo"
        ]
      },
      {
        "audio": "She plays both the piano and the guitar, and she sings beautifully.",
        "pregunta": "¿Qué instrumentos toca?",
        "opciones": [
          "El piano y la guitarra",
          "Solo el piano",
          "El violín",
          "La batería"
        ]
      }
    ],
    "lectura": {
      "titulo": "Two apartments, one choice",
      "texto": "Fernanda and Jorge are getting married, and they're looking for an apartment. They've found two options, and they can't decide. Both apartments have two bedrooms and a small balcony. The first one is in the city center. It's close to both of their offices, so they wouldn't need a car. On the other hand, it's noisy and quite expensive. The second apartment is in a quiet neighborhood near a big park. It's cheaper and bigger, but neither of them likes the long trip to work: it would take an hour by bus. Jorge says he doesn't mind either option. Fernanda isn't sure. Neither of us wants to spend two hours a day on a bus, she says. In the end, they decide on the first apartment. It's more expensive, but they'll have more time for each other, and that's priceless.",
      "preguntas": [
        {
          "pregunta": "¿Qué tienen los dos departamentos?",
          "opciones": [
            "Dos recámaras y un balcón pequeño",
            "Jardín grande",
            "Estacionamiento",
            "Tres recámaras"
          ]
        },
        {
          "pregunta": "¿Cuál es la desventaja del primer departamento?",
          "opciones": [
            "Es ruidoso y caro",
            "Está lejos",
            "Es muy pequeño",
            "No tiene balcón"
          ]
        },
        {
          "pregunta": "¿Cuánto tardarían en llegar al trabajo desde el segundo?",
          "opciones": [
            "Una hora en camión",
            "Diez minutos",
            "Media hora en carro",
            "Dos horas caminando"
          ]
        },
        {
          "pregunta": "¿Cuál eligen al final?",
          "opciones": [
            "El primero, en el centro",
            "El segundo, cerca del parque",
            "Ninguno",
            "Siguen buscando"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con both, either o neither.",
        "pregunta": "___ my sisters are nurses. (las dos)",
        "respuestas": [
          "Both"
        ]
      },
      {
        "instruccion": "Completa con both, either o neither.",
        "pregunta": "You can take ___ road. They both go to the beach.",
        "respuestas": [
          "either"
        ]
      },
      {
        "instruccion": "Completa con both, either o neither.",
        "pregunta": "___ of them came to the party. (ninguno)",
        "respuestas": [
          "Neither"
        ]
      },
      {
        "instruccion": "Completa con and, or o nor.",
        "pregunta": "She's both smart ___ funny.",
        "respuestas": [
          "and"
        ]
      },
      {
        "instruccion": "Completa con and, or o nor.",
        "pregunta": "Neither Ana ___ Pedro knew the answer.",
        "respuestas": [
          "nor"
        ]
      },
      {
        "instruccion": "Completa la respuesta.",
        "pregunta": "I don't like cold weather. Me ___.",
        "respuestas": [
          "neither",
          "either"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Yo tampoco.",
        "respuestas": [
          "Me neither",
          "Neither do I",
          "Me either",
          "Neither am I"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Los dos son doctores.",
        "respuestas": [
          "Both of them are doctors",
          "They're both doctors",
          "They are both doctors",
          "Both are doctors"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Cualquiera de los dos está bien.",
        "respuestas": [
          "Either is fine",
          "Either of them is fine",
          "Either one is fine"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "Neither of them didn't call me.",
        "respuestas": [
          "Neither of them called me"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "___ my parents are from Puebla.",
        "opciones": [
          "Both",
          "Either",
          "Neither of",
          "Both of the"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I don't want ___ of these shirts.",
        "opciones": [
          "either",
          "neither",
          "both",
          "nor"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ restaurant was open, so we went home.",
        "opciones": [
          "Neither",
          "Either",
          "Both",
          "None"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We can go ___ by bus or by train.",
        "opciones": [
          "either",
          "neither",
          "both",
          "nor"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I don't eat meat. — ___ do I.",
        "opciones": [
          "Neither",
          "So",
          "Either",
          "Both"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I'm hungry. — ___ am I.",
        "opciones": [
          "So",
          "Neither",
          "Either",
          "Too"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Neither the bus nor the subway goes to the airport, so we'll take a taxi.",
        "pregunta": "¿Cómo van a ir al aeropuerto?",
        "opciones": [
          "En taxi",
          "En camión",
          "En metro",
          "Caminando"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Both of my cousins study medicine, and neither of them sleeps much!",
        "pregunta": "¿Qué estudian los primos?",
        "opciones": [
          "Medicina",
          "Derecho",
          "Ingeniería",
          "Música"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ni… ni",
        "respuestas": [
          "neither nor",
          "neither … nor",
          "neither... nor"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: A los dos nos gusta la pizza.",
        "respuestas": [
          "We both like pizza",
          "Both of us like pizza"
        ]
      }
    ]
  },
  {
    "id": "b1-26",
    "num": 26,
    "titulo": "Conectores de contraste y resultado (although, however, so)",
    "contexto": "Escribir opiniones",
    "explicacion": {
      "es": [
        "Para **contrastar** ideas: ***but*** (pero) une dos partes de una oración. ***Although / even though*** (aunque) introduce una idea **dentro** de la oración: ***Although** it was raining, we went out.* ***However*** (sin embargo) empieza una **nueva oración** y lleva coma: *The house was old. **However**, it was very comfortable.*",
        "***Despite / in spite of*** (a pesar de) van seguidos de un **sustantivo o *-ing***, no de una oración: ***Despite the rain**, we went out. **In spite of being** tired, she finished the report.*",
        "Para el **resultado**: ***so*** (así que) une dos partes: *It was late, **so** we took a taxi.* ***Therefore*** y ***as a result*** (por lo tanto, como resultado) son más **formales** y empiezan oración: *Prices went up. **As a result**, people bought less.*",
        "Para **añadir** ideas en una opinión: ***also, in addition, moreover*** (además). Para **concluir**: ***in conclusion, to sum up, overall***."
      ],
      "tabla": {
        "columnas": [
          "Función",
          "Conector",
          "Ejemplo"
        ],
        "filas": [
          [
            "Contraste (misma oración)",
            "although / even though / but",
            "Although it's expensive, it's worth it."
          ],
          [
            "Contraste (nueva oración)",
            "However,",
            "It's expensive. However, it's worth it."
          ],
          [
            "Contraste + sustantivo",
            "despite / in spite of",
            "Despite the price, I bought it."
          ],
          [
            "Resultado",
            "so / therefore / as a result",
            "It was cheap, so I bought two."
          ],
          [
            "Añadir",
            "also / in addition / moreover",
            "In addition, it's very safe."
          ]
        ]
      },
      "ojo": [
        "*Although* **no** lleva *but* en la misma oración: *Although it was cold, **but** we swam* ❌ → *Although it was cold, we swam* ✅.",
        "***Despite*** no lleva *of*: *despite the rain* ✅, no *despite of the rain* ❌. Pero ***in spite of*** sí lleva *of*.",
        "*Despite **it was** raining* ❌ → *Despite **the rain*** ✅ o ***Although** it was raining* ✅.",
        "***However*** casi siempre va al principio y con coma: *However, …*",
        "***Even though*** es más fuerte que *although*: *She went to work **even though** she was very sick.*"
      ],
      "en": [
        "Although introduces a contrast in the same sentence: Although it was raining, we went out.",
        "However starts a new sentence: The house was old. However, it was very comfortable.",
        "Despite goes with a noun: Despite the rain, we went out.",
        "So and as a result introduce a result: It was late, so we took a taxi."
      ]
    },
    "vocabulario": [
      {
        "en": "although",
        "es": "aunque",
        "imagen": "Personas caminando con paraguas bajo la lluvia sonriendo",
        "ejemplo": [
          "Although it was raining, we went for a walk.",
          "Aunque estaba lloviendo, salimos a caminar."
        ]
      },
      {
        "en": "even though",
        "es": "aunque (incluso)",
        "imagen": "Persona enferma trabajando en su escritorio con pañuelos",
        "ejemplo": [
          "She went to work even though she was sick.",
          "Fue a trabajar aunque estaba enferma."
        ]
      },
      {
        "en": "however",
        "es": "sin embargo",
        "imagen": "Persona pensativa comparando dos opciones",
        "ejemplo": [
          "The car is old. However, it works perfectly.",
          "El carro es viejo. Sin embargo, funciona perfecto."
        ]
      },
      {
        "en": "despite",
        "es": "a pesar de",
        "imagen": "Corredor terminando una carrera bajo la lluvia",
        "ejemplo": [
          "Despite the rain, the game continued.",
          "A pesar de la lluvia, el partido siguió."
        ]
      },
      {
        "en": "in spite of",
        "es": "a pesar de",
        "imagen": "Persona sonriendo con una muleta en una fiesta",
        "ejemplo": [
          "In spite of his injury, he came to the party.",
          "A pesar de su lesión, vino a la fiesta."
        ]
      },
      {
        "en": "therefore",
        "es": "por lo tanto",
        "imagen": "Gráfica de ventas subiendo en una presentación",
        "ejemplo": [
          "Sales increased. Therefore, we hired more staff.",
          "Las ventas aumentaron. Por lo tanto, contratamos más personal."
        ]
      },
      {
        "en": "as a result",
        "es": "como resultado",
        "imagen": "Calle inundada después de una tormenta",
        "ejemplo": [
          "It rained for days. As a result, many streets flooded.",
          "Llovió por días. Como resultado, muchas calles se inundaron."
        ]
      },
      {
        "en": "in addition",
        "es": "además",
        "imagen": "Persona enumerando ventajas con los dedos",
        "ejemplo": [
          "The job pays well. In addition, it's close to home.",
          "El trabajo paga bien. Además, está cerca de casa."
        ]
      },
      {
        "en": "on the other hand",
        "es": "por otro lado",
        "imagen": "Persona señalando dos lados de una balanza",
        "ejemplo": [
          "City life is exciting. On the other hand, it's stressful.",
          "La vida en la ciudad es emocionante. Por otro lado, es estresante."
        ]
      },
      {
        "en": "in my opinion",
        "es": "en mi opinión",
        "imagen": "Persona dando su punto de vista en un debate",
        "ejemplo": [
          "In my opinion, public transport should be free.",
          "En mi opinión, el transporte público debería ser gratis."
        ]
      },
      {
        "en": "I strongly believe",
        "es": "creo firmemente",
        "imagen": "Persona hablando con convicción en un auditorio",
        "ejemplo": [
          "I strongly believe that education is the key.",
          "Creo firmemente que la educación es la clave."
        ]
      },
      {
        "en": "to sum up",
        "es": "en resumen",
        "imagen": "Persona cerrando una presentación con una diapositiva final",
        "ejemplo": [
          "To sum up, the plan has more advantages than disadvantages.",
          "En resumen, el plan tiene más ventajas que desventajas."
        ]
      },
      {
        "en": "in conclusion",
        "es": "en conclusión",
        "imagen": "Estudiante escribiendo el final de un ensayo",
        "ejemplo": [
          "In conclusion, we need to protect our forests.",
          "En conclusión, necesitamos proteger nuestros bosques."
        ]
      },
      {
        "en": "on the whole",
        "es": "en general",
        "imagen": "Persona revisando una evaluación con aprobación",
        "ejemplo": [
          "On the whole, it was a good experience.",
          "En general, fue una buena experiencia."
        ]
      },
      {
        "en": "for example",
        "es": "por ejemplo",
        "imagen": "Maestro señalando ejemplos en un pizarrón",
        "ejemplo": [
          "Many fruits, for example mangoes, grow in Mexico.",
          "Muchas frutas, por ejemplo los mangos, se dan en México."
        ]
      },
      {
        "en": "whereas",
        "es": "mientras que",
        "imagen": "Gemelos uno serio y otro riendo",
        "ejemplo": [
          "My brother is quiet, whereas I talk all the time.",
          "Mi hermano es callado, mientras que yo hablo todo el tiempo."
        ]
      }
    ],
    "grupos": [
      {
        "id": "opinion",
        "titulo": "Escribir una opinión",
        "icono": "✍️",
        "patron": [
          "In my opinion…",
          "Firstly…",
          "In conclusion…"
        ],
        "palabras": [
          {
            "en": "firstly",
            "es": "en primer lugar",
            "imagen": "Lista numerada en un cuaderno",
            "ejemplo": [
              "Firstly, homework helps students practice.",
              "En primer lugar, la tarea ayuda a los alumnos a practicar."
            ]
          },
          {
            "en": "secondly",
            "es": "en segundo lugar",
            "imagen": "Persona marcando el segundo punto de una lista",
            "ejemplo": [
              "Secondly, it teaches responsibility.",
              "En segundo lugar, enseña responsabilidad."
            ]
          },
          {
            "en": "finally",
            "es": "por último",
            "imagen": "Persona terminando de escribir un ensayo",
            "ejemplo": [
              "Finally, it helps teachers see who needs help.",
              "Por último, ayuda a los maestros a ver quién necesita ayuda."
            ]
          },
          {
            "en": "some people think",
            "es": "algunas personas piensan",
            "imagen": "Grupo de personas debatiendo en una mesa",
            "ejemplo": [
              "Some people think that social media is dangerous.",
              "Algunas personas piensan que las redes sociales son peligrosas."
            ]
          },
          {
            "en": "I disagree",
            "es": "no estoy de acuerdo",
            "imagen": "Persona negando con la cabeza educadamente",
            "ejemplo": [
              "I disagree with this idea.",
              "No estoy de acuerdo con esta idea."
            ]
          },
          {
            "en": "the main advantage",
            "es": "la principal ventaja",
            "imagen": "Persona señalando un pulgar arriba en una presentación",
            "ejemplo": [
              "The main advantage is the low price.",
              "La principal ventaja es el precio bajo."
            ]
          },
          {
            "en": "the main disadvantage",
            "es": "la principal desventaja",
            "imagen": "Persona señalando un pulgar abajo",
            "ejemplo": [
              "The main disadvantage is the noise.",
              "La principal desventaja es el ruido."
            ]
          },
          {
            "en": "it depends",
            "es": "depende",
            "imagen": "Persona dudando con la mano en la barbilla",
            "ejemplo": [
              "Is it better to rent or to buy? It depends.",
              "¿Es mejor rentar o comprar? Depende."
            ]
          }
        ]
      },
      {
        "id": "temas",
        "titulo": "Temas para opinar",
        "icono": "🌎",
        "patron": [
          "social media",
          "working from home",
          "public transport"
        ],
        "palabras": [
          {
            "en": "social media",
            "es": "las redes sociales",
            "imagen": "Persona revisando redes sociales en el celular",
            "ejemplo": [
              "Social media can be useful, although it can also be addictive.",
              "Las redes sociales pueden ser útiles, aunque también adictivas."
            ]
          },
          {
            "en": "working from home",
            "es": "trabajar desde casa",
            "imagen": "Persona trabajando con la laptop en la mesa del comedor",
            "ejemplo": [
              "Working from home saves time. However, it can be lonely.",
              "Trabajar desde casa ahorra tiempo. Sin embargo, puede ser solitario."
            ]
          },
          {
            "en": "public transport",
            "es": "el transporte público",
            "imagen": "Metrobús lleno de pasajeros en la ciudad",
            "ejemplo": [
              "Public transport is cheap, but it's often crowded.",
              "El transporte público es barato, pero a menudo va lleno."
            ]
          },
          {
            "en": "fast food",
            "es": "la comida rápida",
            "imagen": "Hamburguesa y papas fritas en una charola",
            "ejemplo": [
              "Fast food is convenient. On the other hand, it's unhealthy.",
              "La comida rápida es práctica. Por otro lado, no es saludable."
            ]
          },
          {
            "en": "online classes",
            "es": "las clases en línea",
            "imagen": "Estudiante tomando clase en su computadora",
            "ejemplo": [
              "Online classes are flexible, whereas face-to-face classes are more social.",
              "Las clases en línea son flexibles, mientras que las presenciales son más sociales."
            ]
          },
          {
            "en": "recycling",
            "es": "el reciclaje",
            "imagen": "Botes de reciclaje de colores",
            "ejemplo": [
              "Despite the effort, many people still don't recycle.",
              "A pesar del esfuerzo, mucha gente todavía no recicla."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Although it was raining, we went for a walk.",
        "es": "Aunque estaba lloviendo, salimos a caminar."
      },
      {
        "en": "She went to work even though she was sick.",
        "es": "Fue a trabajar aunque estaba enferma."
      },
      {
        "en": "The car is old. However, it works perfectly.",
        "es": "El carro es viejo. Sin embargo, funciona perfecto."
      },
      {
        "en": "Despite the rain, the game continued.",
        "es": "A pesar de la lluvia, el partido siguió."
      },
      {
        "en": "It rained for days. As a result, many streets flooded.",
        "es": "Llovió por días. Como resultado, muchas calles se inundaron."
      },
      {
        "en": "The job pays well. In addition, it's close to home.",
        "es": "El trabajo paga bien. Además, está cerca de casa."
      },
      {
        "en": "In my opinion, public transport should be free.",
        "es": "En mi opinión, el transporte público debería ser gratis."
      },
      {
        "en": "My brother is quiet, whereas I talk all the time.",
        "es": "Mi hermano es callado, mientras que yo hablo todo el tiempo."
      },
      {
        "en": "It was late, so we took a taxi.",
        "es": "Era tarde, así que tomamos un taxi.",
        "imagen": "Amigos subiendo a un taxi de noche"
      },
      {
        "en": "To sum up, the plan has more advantages than disadvantages.",
        "es": "En resumen, el plan tiene más ventajas que desventajas."
      }
    ],
    "frases": [
      {
        "en": "Although working from home is comfortable, I sometimes miss talking to my colleagues.",
        "es": "Aunque trabajar desde casa es cómodo, a veces extraño platicar con mis compañeros.",
        "imagen": "Persona trabajando sola en casa mirando por la ventana"
      },
      {
        "en": "The city has good museums and restaurants. However, the traffic is terrible.",
        "es": "La ciudad tiene buenos museos y restaurantes. Sin embargo, el tráfico es terrible.",
        "imagen": "Avenida congestionada frente a un museo moderno"
      },
      {
        "en": "Despite the high price, the concert tickets sold out in two hours.",
        "es": "A pesar del precio alto, los boletos del concierto se agotaron en dos horas.",
        "imagen": "Fila larga en una taquilla con un letrero de agotado sin texto"
      },
      {
        "en": "In my opinion, children shouldn't have a phone until they are at least twelve.",
        "es": "En mi opinión, los niños no deberían tener celular hasta los doce años por lo menos.",
        "imagen": "Niños jugando al aire libre sin celulares"
      },
      {
        "en": "Prices have gone up a lot this year. As a result, many families are spending less.",
        "es": "Los precios han subido mucho este año. Como resultado, muchas familias gastan menos.",
        "imagen": "Familia revisando un ticket del súper con preocupación"
      },
      {
        "en": "Even though he studied all night, he didn't pass the exam.",
        "es": "Aunque estudió toda la noche, no pasó el examen.",
        "imagen": "Estudiante desvelado con un examen reprobado"
      },
      {
        "en": "Some people think that tourism is good for the economy, whereas others think it damages the environment.",
        "es": "Algunos piensan que el turismo es bueno para la economía, mientras que otros piensan que daña el medio ambiente.",
        "imagen": "Playa llena de turistas junto a un arrecife"
      },
      {
        "en": "Public transport is cheap and fast. In addition, it's better for the environment.",
        "es": "El transporte público es barato y rápido. Además, es mejor para el medio ambiente.",
        "imagen": "Tren ligero moderno pasando por la ciudad"
      },
      {
        "en": "In spite of being very busy, she always finds time to call her grandmother.",
        "es": "A pesar de estar muy ocupada, siempre encuentra tiempo para llamarle a su abuela.",
        "imagen": "Mujer en la oficina sonriendo mientras habla por teléfono"
      },
      {
        "en": "To sum up, social media has advantages and disadvantages, so we should use it carefully.",
        "es": "En resumen, las redes sociales tienen ventajas y desventajas, así que debemos usarlas con cuidado.",
        "imagen": "Persona dejando su celular en la mesa para leer un libro"
      }
    ],
    "listening": [
      {
        "audio": "Although the apartment was small, it had a beautiful view.",
        "pregunta": "¿Qué tenía de bueno el departamento?",
        "opciones": [
          "Una vista preciosa",
          "Era grande",
          "Era barato",
          "Estaba en el centro"
        ]
      },
      {
        "audio": "The restaurant was expensive. However, the food was excellent.",
        "pregunta": "¿Cómo estaba la comida?",
        "opciones": [
          "Excelente",
          "Fría",
          "Muy cara y mala",
          "Normal"
        ]
      },
      {
        "audio": "Despite the traffic, we arrived on time.",
        "pregunta": "¿Llegaron a tiempo?",
        "opciones": [
          "Sí, a pesar del tráfico",
          "No, llegaron tarde",
          "No llegaron",
          "Llegaron muy temprano"
        ]
      },
      {
        "audio": "There was a strike, so the schools were closed for a week.",
        "pregunta": "¿Por qué cerraron las escuelas?",
        "opciones": [
          "Hubo una huelga",
          "Llovió mucho",
          "Era vacaciones",
          "Hubo un sismo"
        ]
      },
      {
        "audio": "In my opinion, everyone should learn a second language.",
        "pregunta": "¿Qué opina?",
        "opciones": [
          "Que todos deberían aprender otro idioma",
          "Que el inglés es difícil",
          "Que no es necesario",
          "Que solo los niños deben aprender"
        ]
      }
    ],
    "lectura": {
      "titulo": "Should homework be banned?",
      "texto": "Many people think that homework is essential for learning. However, some schools in other countries have decided to stop giving it. In my opinion, homework is useful, although there should be less of it. Firstly, homework helps students practice what they learn in class. For example, it's difficult to improve your math or your English without practice at home. Secondly, it teaches responsibility and organization. On the other hand, too much homework can be stressful. Some children spend three or four hours a day doing exercises, and as a result, they don't have time to play, read for fun, or spend time with their families. In addition, not all students have a quiet place or someone to help them at home. To sum up, I believe homework should not be banned. Instead, teachers should give short and meaningful tasks.",
      "preguntas": [
        {
          "pregunta": "¿Qué opina el autor de la tarea?",
          "opciones": [
            "Es útil, pero debería haber menos",
            "Debería prohibirse",
            "Debería haber más",
            "No sirve para nada"
          ]
        },
        {
          "pregunta": "¿Qué enseña la tarea, además de practicar?",
          "opciones": [
            "Responsabilidad y organización",
            "A cocinar",
            "A usar la computadora",
            "A hacer amigos"
          ]
        },
        {
          "pregunta": "¿Cuál es un problema de mucha tarea?",
          "opciones": [
            "Los niños no tienen tiempo para jugar",
            "Los maestros se cansan",
            "Es muy cara",
            "Los papás se enojan"
          ]
        },
        {
          "pregunta": "¿Qué propone al final?",
          "opciones": [
            "Tareas cortas y significativas",
            "Eliminar la tarea",
            "Más horas de clase",
            "Tarea solo los fines de semana"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con although, however o despite.",
        "pregunta": "___ it was cold, we went swimming.",
        "respuestas": [
          "Although",
          "Even though",
          "Though"
        ]
      },
      {
        "instruccion": "Completa con although, however o despite.",
        "pregunta": "The phone is expensive. ___, it's very good.",
        "respuestas": [
          "However"
        ]
      },
      {
        "instruccion": "Completa con although, however o despite.",
        "pregunta": "___ the traffic, we arrived on time.",
        "respuestas": [
          "Despite",
          "In spite of"
        ]
      },
      {
        "instruccion": "Completa con so o because.",
        "pregunta": "I was tired, ___ I went to bed early.",
        "respuestas": [
          "so"
        ]
      },
      {
        "instruccion": "Completa con un conector de resultado.",
        "pregunta": "It snowed a lot. As a ___, the roads were closed.",
        "respuestas": [
          "result"
        ]
      },
      {
        "instruccion": "Completa con un conector para añadir.",
        "pregunta": "The house is big. In ___, it has a garden.",
        "respuestas": [
          "addition"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "a pesar de la lluvia",
        "respuestas": [
          "despite the rain",
          "in spite of the rain"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "En mi opinión, es una buena idea.",
        "respuestas": [
          "In my opinion, it's a good idea",
          "In my opinion, it is a good idea",
          "In my opinion it's a good idea"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "sin embargo",
        "respuestas": [
          "however",
          "nevertheless"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "Despite of the rain, we played soccer.",
        "respuestas": [
          "Despite the rain, we played soccer",
          "In spite of the rain, we played soccer",
          "Despite the rain we played soccer"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "___ she was tired, she finished the project.",
        "opciones": [
          "Although",
          "However",
          "Despite",
          "So"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The test was hard. ___, everybody passed.",
        "opciones": [
          "However",
          "Although",
          "Despite",
          "Because"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ his age, he runs every morning.",
        "opciones": [
          "Despite",
          "Although",
          "However",
          "Even"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The bus didn't come, ___ I walked.",
        "opciones": [
          "so",
          "although",
          "however",
          "despite"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es correcta?",
        "opciones": [
          "Although it was late, we stayed.",
          "Although it was late, but we stayed.",
          "Despite it was late, we stayed.",
          "However it was late, we stayed."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Para cerrar un ensayo:",
        "opciones": [
          "In conclusion",
          "Firstly",
          "For example",
          "Although"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Even though the tickets were expensive, the stadium was full.",
        "pregunta": "¿Cómo estaba el estadio?",
        "opciones": [
          "Lleno",
          "Vacío",
          "Medio vacío",
          "Cerrado"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The company lost a lot of money. As a result, two stores were closed.",
        "pregunta": "¿Qué pasó como resultado?",
        "opciones": [
          "Cerraron dos tiendas",
          "Abrieron dos tiendas",
          "Contrataron gente",
          "Subieron los sueldos"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: aunque",
        "respuestas": [
          "although",
          "even though",
          "though"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: además",
        "respuestas": [
          "in addition",
          "also",
          "moreover",
          "besides",
          "furthermore"
        ]
      }
    ]
  },
  {
    "id": "b1-27",
    "num": 27,
    "titulo": "Artículos: repaso y artículo cero",
    "contexto": "Lugares, instituciones y generalizaciones",
    "explicacion": {
      "es": [
        "***A / an*** se usa para algo **singular** que se menciona **por primera vez** o que **no es específico**, y para **profesiones**: *I saw **a** dog. She's **an** engineer.* ***The*** se usa cuando **ya sabemos cuál**, porque ya se mencionó o porque es único: *The dog was huge. **The** sun is hot.*",
        "**Artículo cero** (sin artículo) para **generalizar** con plurales e incontables: ***Dogs** are loyal. **Coffee** is expensive. I love **music**.* ¡En español sí lo usamos! (*Los perros son leales*), pero en inglés **no**.",
        "Con **instituciones** usadas para su **fin principal**, no se usa artículo: *go to **school**, be in **hospital** (británico), go to **church**, go to **bed**, go to **work**, be in **prison**, go to **university***. Pero si vas como visitante: *I went to **the** school to talk to the teacher.*",
        "Lugares: **sin artículo** la mayoría de países, ciudades, calles, continentes y lagos (*Mexico, Paris, Reforma Avenue, Lake Chapala*). **Con *the***: ríos, mares, océanos, cordilleras y países con plural o *Republic / United* (*the Amazon, the Pacific, the Andes, the United States*)."
      ],
      "tabla": {
        "columnas": [
          "Uso",
          "Ejemplo"
        ],
        "filas": [
          [
            "Generalizar (sin artículo)",
            "Cats are independent. Life is short."
          ],
          [
            "Algo específico (the)",
            "The cats next door are noisy."
          ],
          [
            "Primera mención (a/an)",
            "I bought a car. The car is red."
          ],
          [
            "Instituciones (sin artículo)",
            "My son goes to school. I go to work by bus."
          ],
          [
            "Ríos, mares, montañas (the)",
            "the Nile, the Caribbean, the Alps"
          ],
          [
            "Países, ciudades (sin artículo)",
            "Mexico, Canada, Lima"
          ]
        ]
      },
      "ojo": [
        "*The life is beautiful* ❌ → ***Life** is beautiful* ✅. *I like the music* (una música específica) / *I like **music*** (en general).",
        "Días, meses, comidas y deportes sin artículo: *on **Monday**, in **July**, have **lunch**, play **soccer***.",
        "***Go home*** sin *to* ni artículo: *I go **home** at six* ✅ (no *go to the home* ❌).",
        "Profesiones con *a / an*: *She's **a** doctor* ✅ (no *She's doctor* ❌).",
        "***The*** con superlativos, números ordinales e instrumentos: ***the** best, **the** first, play **the** guitar*."
      ],
      "en": [
        "Use a or an for one thing mentioned for the first time: I saw a dog. Use the when we know which one: The dog was huge.",
        "Use no article to generalize: Dogs are loyal. I love music.",
        "No article with institutions used for their purpose: go to school, go to work, go to bed.",
        "The with rivers, seas and mountains: the Amazon, the Pacific, the Andes."
      ]
    },
    "vocabulario": [
      {
        "en": "Dogs are loyal.",
        "es": "los perros son leales",
        "imagen": "Perro fiel sentado junto a su dueño",
        "ejemplo": [
          "Dogs are loyal animals.",
          "Los perros son animales leales."
        ]
      },
      {
        "en": "Life is short.",
        "es": "la vida es corta",
        "imagen": "Persona disfrutando un atardecer en la playa",
        "ejemplo": [
          "Life is short. Enjoy it!",
          "La vida es corta. ¡Disfrútala!"
        ]
      },
      {
        "en": "I love music.",
        "es": "me encanta la música",
        "imagen": "Persona con audífonos bailando en su cuarto",
        "ejemplo": [
          "I love music, especially rock.",
          "Me encanta la música, sobre todo el rock."
        ]
      },
      {
        "en": "go to school",
        "es": "ir a la escuela",
        "imagen": "Niños con mochilas entrando a la escuela",
        "ejemplo": [
          "My kids go to school at seven thirty.",
          "Mis hijos van a la escuela a las siete y media."
        ]
      },
      {
        "en": "go to work",
        "es": "ir al trabajo",
        "imagen": "Personas caminando a la oficina en la mañana",
        "ejemplo": [
          "I go to work by subway.",
          "Voy al trabajo en metro."
        ]
      },
      {
        "en": "go to bed",
        "es": "irse a dormir",
        "imagen": "Persona apagando la lámpara del buró",
        "ejemplo": [
          "I usually go to bed at eleven.",
          "Normalmente me voy a dormir a las once."
        ]
      },
      {
        "en": "go home",
        "es": "irse a casa",
        "imagen": "Persona saliendo de la oficina al atardecer",
        "ejemplo": [
          "It's late. Let's go home.",
          "Ya es tarde. Vámonos a casa."
        ]
      },
      {
        "en": "the Pacific Ocean",
        "es": "el océano Pacífico",
        "imagen": "Olas del Pacífico en una playa de Oaxaca",
        "ejemplo": [
          "Puerto Escondido is on the Pacific Ocean.",
          "Puerto Escondido está en el océano Pacífico."
        ]
      },
      {
        "en": "the Andes",
        "es": "los Andes",
        "imagen": "Cordillera nevada de los Andes",
        "ejemplo": [
          "The Andes are the longest mountains in the world.",
          "Los Andes son las montañas más largas del mundo."
        ]
      },
      {
        "en": "the United States",
        "es": "Estados Unidos",
        "imagen": "Rascacielos de una ciudad estadounidense",
        "ejemplo": [
          "My cousin lives in the United States.",
          "Mi primo vive en Estados Unidos."
        ]
      },
      {
        "en": "She's an engineer.",
        "es": "es ingeniera",
        "imagen": "Ingeniera con casco revisando planos en una obra",
        "ejemplo": [
          "My sister is an engineer.",
          "Mi hermana es ingeniera."
        ]
      },
      {
        "en": "the best",
        "es": "el mejor",
        "imagen": "Trofeo dorado en una vitrina",
        "ejemplo": [
          "This is the best coffee in the city.",
          "Este es el mejor café de la ciudad."
        ]
      },
      {
        "en": "play the guitar",
        "es": "tocar la guitarra",
        "imagen": "Joven tocando la guitarra en un parque",
        "ejemplo": [
          "I play the guitar in a band.",
          "Toco la guitarra en un grupo."
        ]
      },
      {
        "en": "have breakfast",
        "es": "desayunar",
        "imagen": "Familia desayunando en la mesa de la cocina",
        "ejemplo": [
          "We have breakfast at eight.",
          "Desayunamos a las ocho."
        ]
      },
      {
        "en": "the sun",
        "es": "el sol",
        "imagen": "Sol brillante en un cielo despejado",
        "ejemplo": [
          "The sun is very strong today.",
          "El sol está muy fuerte hoy."
        ]
      },
      {
        "en": "in hospital",
        "es": "en el hospital",
        "imagen": "Paciente en una cama de hospital con visitas",
        "ejemplo": [
          "My grandfather is in the hospital.",
          "Mi abuelo está en el hospital."
        ]
      }
    ],
    "grupos": [
      {
        "id": "lugares",
        "titulo": "Lugares con y sin the",
        "icono": "🗺️",
        "patron": [
          "the Amazon",
          "Lake Chapala",
          "the Caribbean"
        ],
        "palabras": [
          {
            "en": "the Amazon",
            "es": "el Amazonas",
            "imagen": "Río Amazonas atravesando la selva",
            "ejemplo": [
              "The Amazon is the largest river in South America.",
              "El Amazonas es el río más grande de Sudamérica."
            ]
          },
          {
            "en": "the Caribbean",
            "es": "el Caribe",
            "imagen": "Agua turquesa del Caribe con palmeras",
            "ejemplo": [
              "The Caribbean is beautiful in spring.",
              "El Caribe es precioso en primavera."
            ]
          },
          {
            "en": "Lake Chapala",
            "es": "el lago de Chapala",
            "imagen": "Lago de Chapala al atardecer con lanchas",
            "ejemplo": [
              "We had lunch next to Lake Chapala.",
              "Comimos junto al lago de Chapala."
            ]
          },
          {
            "en": "Mount Everest",
            "es": "el monte Everest",
            "imagen": "Cumbre nevada del Everest",
            "ejemplo": [
              "Mount Everest is in Asia.",
              "El Everest está en Asia."
            ]
          },
          {
            "en": "the Gulf of Mexico",
            "es": "el golfo de México",
            "imagen": "Playa del golfo con barcos pesqueros",
            "ejemplo": [
              "Veracruz is on the Gulf of Mexico.",
              "Veracruz está en el golfo de México."
            ]
          },
          {
            "en": "the Netherlands",
            "es": "los Países Bajos",
            "imagen": "Molinos de viento y campos de tulipanes",
            "ejemplo": [
              "The Netherlands is famous for its tulips.",
              "Los Países Bajos son famosos por sus tulipanes."
            ]
          },
          {
            "en": "Reforma Avenue",
            "es": "avenida Reforma",
            "imagen": "Avenida amplia con el Ángel de la Independencia",
            "ejemplo": [
              "The museum is on Reforma Avenue.",
              "El museo está en avenida Reforma."
            ]
          },
          {
            "en": "the Sahara",
            "es": "el Sahara",
            "imagen": "Dunas del desierto del Sahara",
            "ejemplo": [
              "The Sahara is the largest hot desert in the world.",
              "El Sahara es el desierto cálido más grande del mundo."
            ]
          }
        ]
      },
      {
        "id": "instituciones",
        "titulo": "Instituciones",
        "icono": "🏛️",
        "patron": [
          "go to school",
          "be at work",
          "go to church"
        ],
        "palabras": [
          {
            "en": "go to church",
            "es": "ir a misa",
            "imagen": "Familia entrando a una iglesia un domingo",
            "ejemplo": [
              "My grandma goes to church every Sunday.",
              "Mi abuela va a misa cada domingo."
            ]
          },
          {
            "en": "go to university",
            "es": "ir a la universidad",
            "imagen": "Estudiantes caminando en un campus universitario",
            "ejemplo": [
              "My brother goes to university in Monterrey.",
              "Mi hermano va a la universidad en Monterrey."
            ]
          },
          {
            "en": "be in prison",
            "es": "estar en la cárcel",
            "imagen": "Puerta de una prisión con rejas",
            "ejemplo": [
              "The thief is in prison now.",
              "El ladrón ya está en la cárcel."
            ]
          },
          {
            "en": "be at work",
            "es": "estar en el trabajo",
            "imagen": "Persona trabajando en su escritorio",
            "ejemplo": [
              "I can't talk now. I'm at work.",
              "No puedo hablar ahorita. Estoy en el trabajo."
            ]
          },
          {
            "en": "go to the school",
            "es": "ir a la escuela (como visitante)",
            "imagen": "Papá entrando a la escuela para hablar con la maestra",
            "ejemplo": [
              "I went to the school to talk to the teacher.",
              "Fui a la escuela a hablar con la maestra."
            ]
          },
          {
            "en": "be at home",
            "es": "estar en casa",
            "imagen": "Persona descansando en el sofá de su casa",
            "ejemplo": [
              "Are you at home? I'm coming over.",
              "¿Estás en casa? Voy para allá."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Dogs are loyal animals.",
        "es": "Los perros son animales leales."
      },
      {
        "en": "Life is short. Enjoy it!",
        "es": "La vida es corta. ¡Disfrútala!"
      },
      {
        "en": "I love music, especially rock.",
        "es": "Me encanta la música, sobre todo el rock."
      },
      {
        "en": "My kids go to school at seven thirty.",
        "es": "Mis hijos van a la escuela a las siete y media."
      },
      {
        "en": "It's late. Let's go home.",
        "es": "Ya es tarde. Vámonos a casa."
      },
      {
        "en": "My sister is an engineer.",
        "es": "Mi hermana es ingeniera."
      },
      {
        "en": "The Amazon is the largest river in South America.",
        "es": "El Amazonas es el río más grande de Sudamérica."
      },
      {
        "en": "We had lunch next to Lake Chapala.",
        "es": "Comimos junto al lago de Chapala."
      },
      {
        "en": "I bought a car. The car is red.",
        "es": "Compré un carro. El carro es rojo.",
        "imagen": "Persona feliz junto a su carro rojo nuevo"
      },
      {
        "en": "I went to the school to talk to the teacher.",
        "es": "Fui a la escuela a hablar con la maestra."
      }
    ],
    "frases": [
      {
        "en": "Coffee is one of the most popular drinks in the world, and Mexico produces a lot of it.",
        "es": "El café es una de las bebidas más populares del mundo y México produce mucho.",
        "imagen": "Taza de café junto a granos tostados"
      },
      {
        "en": "I saw a man with a parrot on the bus. The parrot was singing!",
        "es": "Vi a un señor con un perico en el camión. ¡El perico iba cantando!",
        "imagen": "Pasajero con un perico en el hombro en un autobús"
      },
      {
        "en": "My mother is a nurse, and she works at the hospital near our house.",
        "es": "Mi mamá es enfermera y trabaja en el hospital cerca de nuestra casa.",
        "imagen": "Enfermera saliendo de un hospital"
      },
      {
        "en": "Children need love, time, and attention more than toys.",
        "es": "Los niños necesitan amor, tiempo y atención más que juguetes.",
        "imagen": "Papá jugando con su hijo en el parque"
      },
      {
        "en": "Last summer we traveled along the Pacific coast and swam in the ocean every day.",
        "es": "El verano pasado recorrimos la costa del Pacífico y nadamos en el mar todos los días.",
        "imagen": "Familia nadando en el océano Pacífico"
      },
      {
        "en": "I usually have breakfast at home, but on Fridays I have lunch with my colleagues.",
        "es": "Normalmente desayuno en casa, pero los viernes como con mis compañeros.",
        "imagen": "Compañeros de trabajo comiendo juntos en una fonda"
      },
      {
        "en": "Mount Everest is in the Himalayas, between Nepal and China.",
        "es": "El Everest está en el Himalaya, entre Nepal y China.",
        "imagen": "Montañas del Himalaya con banderas de oración"
      },
      {
        "en": "Money doesn't buy happiness, but it helps.",
        "es": "El dinero no compra la felicidad, pero ayuda.",
        "imagen": "Persona sonriendo en una hamaca con un libro"
      },
      {
        "en": "My son goes to university in the morning and works in the afternoon.",
        "es": "Mi hijo va a la universidad en la mañana y trabaja en la tarde.",
        "imagen": "Joven saliendo de la universidad con su mochila hacia el trabajo"
      },
      {
        "en": "The United States and Canada are the countries that buy the most Mexican products.",
        "es": "Estados Unidos y Canadá son los países que más productos mexicanos compran.",
        "imagen": "Contenedores en un puerto con barcos de carga"
      }
    ],
    "listening": [
      {
        "audio": "I go to work by bike, so I don't need a car.",
        "pregunta": "¿Cómo va al trabajo?",
        "opciones": [
          "En bicicleta",
          "En carro",
          "En camión",
          "Caminando"
        ]
      },
      {
        "audio": "Cats are more independent than dogs, but I prefer dogs.",
        "pregunta": "¿Qué prefiere?",
        "opciones": [
          "Los perros",
          "Los gatos",
          "Los dos",
          "Ninguno"
        ]
      },
      {
        "audio": "My uncle is a pilot. He flies to the United States every week.",
        "pregunta": "¿A qué se dedica el tío?",
        "opciones": [
          "Es piloto",
          "Es doctor",
          "Es ingeniero",
          "Es chofer"
        ]
      },
      {
        "audio": "We spent a week in the Caribbean and swam with turtles.",
        "pregunta": "¿Con qué nadaron?",
        "opciones": [
          "Con tortugas",
          "Con delfines",
          "Con tiburones",
          "Con peces de colores"
        ]
      },
      {
        "audio": "My grandfather is in the hospital, but he'll go home tomorrow.",
        "pregunta": "¿Cuándo sale del hospital el abuelo?",
        "opciones": [
          "Mañana",
          "Hoy",
          "La próxima semana",
          "No se sabe"
        ]
      }
    ],
    "lectura": {
      "titulo": "A trip through South America",
      "texto": "Last year, my best friend and I traveled through South America for two months. We started in Colombia, where we visited Bogotá and Cartagena. Cartagena is on the Caribbean, and the old city is full of colorful houses. Then we flew to Peru. We walked in the Andes for four days to get to Machu Picchu. It was the most difficult thing I've ever done, but the view was the best reward. In Lima, we ate ceviche every day; seafood is fresh and cheap there. After that, we took a boat on the Amazon and saw pink dolphins! Finally, we went to Argentina and Chile. In Patagonia, the wind was so strong that I could hardly walk. Traveling teaches you that people are kind everywhere and that life is better when you share it.",
      "preguntas": [
        {
          "pregunta": "¿Dónde empezaron el viaje?",
          "opciones": [
            "En Colombia",
            "En Perú",
            "En Argentina",
            "En Chile"
          ]
        },
        {
          "pregunta": "¿Cuántos días caminaron para llegar a Machu Picchu?",
          "opciones": [
            "Cuatro",
            "Dos",
            "Siete",
            "Uno"
          ]
        },
        {
          "pregunta": "¿Qué vieron en el Amazonas?",
          "opciones": [
            "Delfines rosados",
            "Jaguares",
            "Ballenas",
            "Pingüinos"
          ]
        },
        {
          "pregunta": "¿Qué aprendió el narrador?",
          "opciones": [
            "Que la gente es amable en todos lados",
            "Que viajar es caro",
            "Que prefiere su casa",
            "Que el clima es difícil"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con a, an, the o nada (escribe x si no va artículo).",
        "pregunta": "___ dogs are friendly animals. (en general)",
        "respuestas": [
          "x"
        ]
      },
      {
        "instruccion": "Completa con a, an, the o nada (escribe x si no va artículo).",
        "pregunta": "She's ___ architect.",
        "respuestas": [
          "an"
        ]
      },
      {
        "instruccion": "Completa con a, an, the o nada (escribe x si no va artículo).",
        "pregunta": "___ sun rises in the east.",
        "respuestas": [
          "The"
        ]
      },
      {
        "instruccion": "Completa con a, an, the o nada (escribe x si no va artículo).",
        "pregunta": "I go to ___ bed at eleven.",
        "respuestas": [
          "x"
        ]
      },
      {
        "instruccion": "Completa con a, an, the o nada (escribe x si no va artículo).",
        "pregunta": "We sailed across ___ Pacific Ocean.",
        "respuestas": [
          "the"
        ]
      },
      {
        "instruccion": "Completa con a, an, the o nada (escribe x si no va artículo).",
        "pregunta": "My cousin lives in ___ Canada.",
        "respuestas": [
          "x"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "La vida es bella.",
        "respuestas": [
          "Life is beautiful"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Me voy a casa.",
        "respuestas": [
          "I'm going home",
          "I am going home",
          "I go home"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Mi papá es doctor.",
        "respuestas": [
          "My dad is a doctor",
          "My father is a doctor"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "The coffee is very popular in Mexico. (en general)",
        "respuestas": [
          "Coffee is very popular in Mexico"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "___ is good for your health. (en general)",
        "opciones": [
          "Exercise",
          "The exercise",
          "An exercise",
          "A exercise"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "My brother is ___ teacher.",
        "opciones": [
          "a",
          "the",
          "an",
          "—"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We went to ___ Amazon last year.",
        "opciones": [
          "the",
          "a",
          "—",
          "an"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I usually go to ___ at six.",
        "opciones": [
          "work",
          "the work",
          "a work",
          "works"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cuál es correcta?",
        "opciones": [
          "I live in Mexico.",
          "I live in the Mexico.",
          "I live in a Mexico.",
          "I live at the Mexico."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I saw a cat. ___ cat was black.",
        "opciones": [
          "The",
          "A",
          "An",
          "—"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Children should go to bed early on school days.",
        "pregunta": "¿Qué deberían hacer los niños?",
        "opciones": [
          "Dormirse temprano en días de escuela",
          "Hacer la tarea",
          "Ir a la escuela temprano",
          "Desayunar bien"
        ]
      },
      {
        "tipo": "listening",
        "audio": "The Nile and the Amazon are the two longest rivers in the world.",
        "pregunta": "¿De qué hablan?",
        "opciones": [
          "De los ríos más largos",
          "De los océanos",
          "De las montañas",
          "De los desiertos"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Me encanta la música.",
        "respuestas": [
          "I love music"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Toco la guitarra.",
        "respuestas": [
          "I play the guitar"
        ]
      }
    ]
  },
  {
    "id": "b1-28",
    "num": 28,
    "titulo": "Verbos de los sentidos (look, sound, feel, smell, taste + adjetivo / like)",
    "contexto": "Describir impresiones",
    "explicacion": {
      "es": [
        "Los **verbos de los sentidos** describen la **impresión** que algo nos da: ***look*** (verse), ***sound*** (sonar), ***feel*** (sentirse al tacto / sentirse), ***smell*** (oler), ***taste*** (saber, tener sabor).",
        "Van seguidos de un **adjetivo** (¡no de un adverbio!): *You **look tired**.* (Te ves cansado.) *This soup **smells delicious**.* (Esta sopa huele delicioso.) *That **sounds great**!* (¡Suena genial!)",
        "Para comparar con **un sustantivo**, se usa ***like***: *She **looks like** her mother.* (Se parece a su mamá.) *It **tastes like** chicken.* (Sabe a pollo.) *It **sounds like** a good plan.*",
        "Para algo que **parece una situación**, se usa ***as if / like*** + oración: *It **looks as if** it's going to rain.* (Parece que va a llover.) *You **sound like** you have a cold.*"
      ],
      "tabla": {
        "columnas": [
          "Verbo",
          "+ adjetivo",
          "+ like + sustantivo"
        ],
        "filas": [
          [
            "look",
            "You look happy.",
            "He looks like a movie star."
          ],
          [
            "sound",
            "That sounds interesting.",
            "It sounds like a good idea."
          ],
          [
            "feel",
            "This blanket feels soft.",
            "It feels like silk."
          ],
          [
            "smell",
            "The bread smells fresh.",
            "It smells like vanilla."
          ],
          [
            "taste",
            "This sauce tastes spicy.",
            "It tastes like mango."
          ]
        ]
      },
      "ojo": [
        "Adjetivo, **no** adverbio: *It smells **good*** ✅, no *It smells well* ❌. *You look **nice*** ✅, no *You look nicely* ❌.",
        "Sin *like* ante adjetivo: *You look **tired*** ✅, no *You look like tired* ❌. Con sustantivo sí: *You look **like** your dad.*",
        "***What does it taste like?*** = ¿A qué sabe? ***What does he look like?*** = ¿Cómo es (físicamente)?",
        "Estos verbos casi nunca van en continuo cuando describen impresiones: *It **smells** great* ✅ (no *It's smelling great*).",
        "Con *feel* para emociones: *I **feel** nervous. I **feel like** a pizza* (= se me antoja una pizza)."
      ],
      "en": [
        "Verbs of the senses describe impressions: look, sound, feel, smell, taste.",
        "They are followed by adjectives: You look tired. This soup smells delicious. That sounds great!",
        "With a noun, use like: She looks like her mother. It tastes like chicken.",
        "It looks as if it's going to rain."
      ]
    },
    "vocabulario": [
      {
        "en": "You look tired.",
        "es": "te ves cansado",
        "imagen": "Persona con ojeras bostezando en la mañana",
        "ejemplo": [
          "You look tired. Did you sleep well?",
          "Te ves cansado. ¿Dormiste bien?"
        ]
      },
      {
        "en": "That sounds great!",
        "es": "¡suena genial!",
        "imagen": "Amigos emocionados planeando un viaje",
        "ejemplo": [
          "A trip to the beach? That sounds great!",
          "¿Un viaje a la playa? ¡Suena genial!"
        ]
      },
      {
        "en": "It smells delicious.",
        "es": "huele delicioso",
        "imagen": "Olla de pozole humeante en la estufa",
        "ejemplo": [
          "Something smells delicious in the kitchen!",
          "¡Algo huele delicioso en la cocina!"
        ]
      },
      {
        "en": "It tastes spicy.",
        "es": "sabe picante",
        "imagen": "Persona con la cara roja probando una salsa",
        "ejemplo": [
          "This salsa tastes very spicy.",
          "Esta salsa sabe muy picante."
        ]
      },
      {
        "en": "It feels soft.",
        "es": "se siente suave",
        "imagen": "Mano tocando una cobija esponjosa",
        "ejemplo": [
          "This blanket feels so soft.",
          "Esta cobija se siente tan suave."
        ]
      },
      {
        "en": "She looks like her mother.",
        "es": "se parece a su mamá",
        "imagen": "Mamá e hija con la misma cara y sonrisa",
        "ejemplo": [
          "She looks like her mother.",
          "Se parece a su mamá."
        ]
      },
      {
        "en": "It tastes like chicken.",
        "es": "sabe a pollo",
        "imagen": "Persona probando un taco con curiosidad",
        "ejemplo": [
          "It tastes like chicken, but it's fish.",
          "Sabe a pollo, pero es pescado."
        ]
      },
      {
        "en": "It sounds like a good idea.",
        "es": "suena a buena idea",
        "imagen": "Persona con cara de entusiasmo en una reunión",
        "ejemplo": [
          "It sounds like a good idea to me.",
          "Me suena a buena idea."
        ]
      },
      {
        "en": "It looks as if it's going to rain.",
        "es": "parece que va a llover",
        "imagen": "Nubes negras sobre una plaza",
        "ejemplo": [
          "It looks as if it's going to rain.",
          "Parece que va a llover."
        ]
      },
      {
        "en": "You sound worried.",
        "es": "te oyes preocupado",
        "imagen": "Persona hablando por teléfono con cara de preocupación",
        "ejemplo": [
          "You sound worried. Is everything OK?",
          "Te oyes preocupado. ¿Todo bien?"
        ]
      },
      {
        "en": "This milk smells bad.",
        "es": "esta leche huele mal",
        "imagen": "Persona tapándose la nariz al oler un envase de leche",
        "ejemplo": [
          "This milk smells bad. Throw it away.",
          "Esta leche huele mal. Tírala."
        ]
      },
      {
        "en": "I feel like a pizza.",
        "es": "se me antoja una pizza",
        "imagen": "Persona mirando una pizza en un anuncio con antojo",
        "ejemplo": [
          "I feel like a pizza tonight.",
          "Hoy en la noche se me antoja una pizza."
        ]
      },
      {
        "en": "What does it taste like?",
        "es": "¿a qué sabe?",
        "imagen": "Persona ofreciendo a otra una fruta exótica",
        "ejemplo": [
          "What does pitaya taste like?",
          "¿A qué sabe la pitaya?"
        ]
      },
      {
        "en": "What does he look like?",
        "es": "¿cómo es él (físicamente)?",
        "imagen": "Persona describiendo a alguien con las manos",
        "ejemplo": [
          "What does your new boss look like?",
          "¿Cómo es tu nuevo jefe?"
        ]
      },
      {
        "en": "You look great in that dress.",
        "es": "te ves muy bien con ese vestido",
        "imagen": "Mujer sonriendo frente al espejo de una tienda",
        "ejemplo": [
          "You look great in that dress!",
          "¡Te ves muy bien con ese vestido!"
        ]
      },
      {
        "en": "It feels like home.",
        "es": "se siente como en casa",
        "imagen": "Familia reunida en una sala acogedora",
        "ejemplo": [
          "This place feels like home.",
          "Este lugar se siente como en casa."
        ]
      }
    ],
    "grupos": [
      {
        "id": "sabores",
        "titulo": "Sabores y olores",
        "icono": "👅",
        "patron": [
          "It tastes sweet.",
          "It smells fresh.",
          "It tastes like…"
        ],
        "palabras": [
          {
            "en": "sweet",
            "es": "dulce",
            "imagen": "Pan dulce y conchas en una charola",
            "ejemplo": [
              "This mango tastes really sweet.",
              "Este mango sabe muy dulce."
            ]
          },
          {
            "en": "sour",
            "es": "ácido / agrio",
            "imagen": "Persona haciendo cara al morder un limón",
            "ejemplo": [
              "Lemons taste sour.",
              "Los limones saben ácidos."
            ]
          },
          {
            "en": "salty",
            "es": "salado",
            "imagen": "Papas fritas con mucha sal",
            "ejemplo": [
              "The soup tastes too salty.",
              "La sopa sabe demasiado salada."
            ]
          },
          {
            "en": "bitter",
            "es": "amargo",
            "imagen": "Taza de café negro sin azúcar",
            "ejemplo": [
              "This coffee tastes bitter.",
              "Este café sabe amargo."
            ]
          },
          {
            "en": "fresh",
            "es": "fresco",
            "imagen": "Pan recién horneado saliendo del horno",
            "ejemplo": [
              "The bread smells fresh.",
              "El pan huele a recién hecho."
            ]
          },
          {
            "en": "burnt",
            "es": "quemado",
            "imagen": "Pan tostado negro y quemado",
            "ejemplo": [
              "Something smells burnt! Check the oven!",
              "¡Algo huele a quemado! ¡Revisa el horno!"
            ]
          },
          {
            "en": "stale",
            "es": "rancio / duro",
            "imagen": "Pan duro y viejo en una bolsa",
            "ejemplo": [
              "This bread is stale.",
              "Este pan está duro."
            ]
          },
          {
            "en": "smoky",
            "es": "ahumado",
            "imagen": "Chiles chipotles y carne a la parrilla con humo",
            "ejemplo": [
              "This salsa tastes smoky.",
              "Esta salsa sabe ahumada."
            ]
          }
        ]
      },
      {
        "id": "impresiones",
        "titulo": "Primeras impresiones",
        "icono": "👀",
        "patron": [
          "He seems…",
          "It looks…",
          "She sounds…"
        ],
        "palabras": [
          {
            "en": "He seems nice.",
            "es": "parece amable",
            "imagen": "Hombre sonriendo y saludando con la mano",
            "ejemplo": [
              "Your new neighbor seems nice.",
              "Tu nuevo vecino parece amable."
            ]
          },
          {
            "en": "It looks expensive.",
            "es": "se ve caro",
            "imagen": "Carro de lujo estacionado frente a un edificio",
            "ejemplo": [
              "That restaurant looks expensive.",
              "Ese restaurante se ve caro."
            ]
          },
          {
            "en": "She sounds friendly.",
            "es": "suena amable",
            "imagen": "Persona hablando por teléfono con una sonrisa",
            "ejemplo": [
              "The receptionist sounds very friendly.",
              "La recepcionista suena muy amable."
            ]
          },
          {
            "en": "It feels strange.",
            "es": "se siente raro",
            "imagen": "Persona entrando a su casa vacía después de una mudanza",
            "ejemplo": [
              "It feels strange to live alone.",
              "Se siente raro vivir solo."
            ]
          },
          {
            "en": "It looks easy.",
            "es": "parece fácil",
            "imagen": "Persona mirando a un experto hacer malabares",
            "ejemplo": [
              "It looks easy, but it isn't.",
              "Parece fácil, pero no lo es."
            ]
          },
          {
            "en": "They look happy together.",
            "es": "se ven felices juntos",
            "imagen": "Pareja riendo en un picnic",
            "ejemplo": [
              "They look so happy together.",
              "Se ven tan felices juntos."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "You look tired. Did you sleep well?",
        "es": "Te ves cansado. ¿Dormiste bien?"
      },
      {
        "en": "A trip to the beach? That sounds great!",
        "es": "¿Un viaje a la playa? ¡Suena genial!"
      },
      {
        "en": "Something smells delicious in the kitchen!",
        "es": "¡Algo huele delicioso en la cocina!"
      },
      {
        "en": "She looks like her mother.",
        "es": "Se parece a su mamá."
      },
      {
        "en": "It looks as if it's going to rain.",
        "es": "Parece que va a llover."
      },
      {
        "en": "This milk smells bad. Throw it away.",
        "es": "Esta leche huele mal. Tírala."
      },
      {
        "en": "I feel like a pizza tonight.",
        "es": "Hoy en la noche se me antoja una pizza."
      },
      {
        "en": "What does pitaya taste like?",
        "es": "¿A qué sabe la pitaya?"
      },
      {
        "en": "Something smells burnt! Check the oven!",
        "es": "¡Algo huele a quemado! ¡Revisa el horno!"
      },
      {
        "en": "Your new neighbor seems nice.",
        "es": "Tu nuevo vecino parece amable."
      }
    ],
    "frases": [
      {
        "en": "This mole smells amazing and tastes even better. Did your grandmother make it?",
        "es": "Este mole huele increíble y sabe todavía mejor. ¿Lo hizo tu abuela?",
        "imagen": "Plato de mole con arroz y una abuela sirviendo al fondo"
      },
      {
        "en": "You sound like you have a cold. You should stay in bed today.",
        "es": "Te oyes como si tuvieras gripa. Deberías quedarte en cama hoy.",
        "imagen": "Persona con la nariz roja hablando por teléfono"
      },
      {
        "en": "The new apartment looks small in the photos, but it feels really big inside.",
        "es": "El departamento nuevo se ve pequeño en las fotos, pero se siente muy grande por dentro.",
        "imagen": "Departamento luminoso y amplio con ventanales"
      },
      {
        "en": "He looks like a famous actor, so people always ask him for photos.",
        "es": "Se parece a un actor famoso, así que la gente siempre le pide fotos.",
        "imagen": "Hombre posando para selfies con desconocidos"
      },
      {
        "en": "This fabric feels like silk, but it's actually cotton.",
        "es": "Esta tela se siente como seda, pero en realidad es algodón.",
        "imagen": "Mano tocando una tela suave en una tienda"
      },
      {
        "en": "It sounds like a good plan, but I don't think we have enough money.",
        "es": "Suena a buen plan, pero no creo que tengamos suficiente dinero.",
        "imagen": "Amigos planeando un viaje con una calculadora"
      },
      {
        "en": "The kids look exhausted after the trip. Let's put them to bed.",
        "es": "Los niños se ven agotados después del viaje. Vamos a acostarlos.",
        "imagen": "Niños dormidos en el sofá después de un viaje"
      },
      {
        "en": "When I tasted the tamarind candy, it tasted sweet, sour, and spicy at the same time.",
        "es": "Cuando probé el dulce de tamarindo, sabía dulce, ácido y picante al mismo tiempo.",
        "imagen": "Dulces de tamarindo con chile en un puesto"
      },
      {
        "en": "Your plan sounds interesting. Tell me more about it.",
        "es": "Tu plan suena interesante. Cuéntame más.",
        "imagen": "Persona escuchando con interés en una reunión"
      },
      {
        "en": "What does your brother look like? He's tall, with curly hair and glasses.",
        "es": "¿Cómo es tu hermano? Es alto, de pelo rizado y usa lentes.",
        "imagen": "Joven alto con pelo rizado y lentes sonriendo"
      }
    ],
    "listening": [
      {
        "audio": "This cake tastes like coconut. Did you put coconut in it?",
        "pregunta": "¿A qué sabe el pastel?",
        "opciones": [
          "A coco",
          "A chocolate",
          "A vainilla",
          "A naranja"
        ]
      },
      {
        "audio": "You look different today. Did you cut your hair?",
        "pregunta": "¿Por qué se ve diferente?",
        "opciones": [
          "Se cortó el pelo",
          "Se pintó el pelo",
          "Usa lentes",
          "Bajó de peso"
        ]
      },
      {
        "audio": "A weekend in the mountains? That sounds perfect!",
        "pregunta": "¿Qué le parece el plan?",
        "opciones": [
          "Perfecto",
          "Aburrido",
          "Caro",
          "Peligroso"
        ]
      },
      {
        "audio": "Something smells strange in the fridge. I think the fish is old.",
        "pregunta": "¿Qué cree que huele mal?",
        "opciones": [
          "El pescado",
          "La leche",
          "El queso",
          "La carne"
        ]
      },
      {
        "audio": "It looks as if nobody is at home. All the lights are off.",
        "pregunta": "¿Por qué parece que no hay nadie?",
        "opciones": [
          "Todas las luces están apagadas",
          "La puerta está abierta",
          "No hay carro",
          "Hay mucho silencio"
        ]
      }
    ],
    "lectura": {
      "titulo": "A day at the market",
      "texto": "If you want to experience Mexico with all your senses, visit a traditional market. As soon as you walk in, everything looks colorful: red tomatoes, green chiles, yellow mangoes, and purple onions. The market sounds alive too: vendors shout their prices, music plays from a small radio, and people laugh and bargain. The smells are incredible. The fresh tortillas smell warm and sweet, the coffee stall smells strong, and near the food area, everything smells of grilled meat and spices. Then comes the best part: tasting. A slice of mango with chile and lime tastes sweet, sour, and spicy at the same time. The tamales feel soft and warm in your hands. When you leave the market, you feel tired but happy, and you look like a real local, carrying bags full of fruit and flowers.",
      "preguntas": [
        {
          "pregunta": "¿Cómo se ve todo al entrar al mercado?",
          "opciones": [
            "Muy colorido",
            "Oscuro",
            "Vacío",
            "Sucio"
          ]
        },
        {
          "pregunta": "¿Qué se oye en el mercado?",
          "opciones": [
            "Vendedores gritando precios y música",
            "Silencio",
            "Solo música",
            "Tráfico"
          ]
        },
        {
          "pregunta": "¿A qué sabe el mango con chile y limón?",
          "opciones": [
            "Dulce, ácido y picante",
            "Solo dulce",
            "Amargo",
            "Salado"
          ]
        },
        {
          "pregunta": "¿Cómo te sientes al salir?",
          "opciones": [
            "Cansado pero feliz",
            "Aburrido",
            "Enfermo",
            "Enojado"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con el verbo de los sentidos.",
        "pregunta": "You ___ tired. Are you OK? (te ves)",
        "respuestas": [
          "look"
        ]
      },
      {
        "instruccion": "Completa con el verbo de los sentidos.",
        "pregunta": "That ___ like a great idea! (suena)",
        "respuestas": [
          "sounds"
        ]
      },
      {
        "instruccion": "Completa con el verbo de los sentidos.",
        "pregunta": "The soup ___ delicious. (huele)",
        "respuestas": [
          "smells"
        ]
      },
      {
        "instruccion": "Completa con like o nada (escribe x si no va nada).",
        "pregunta": "She looks ___ her father.",
        "respuestas": [
          "like"
        ]
      },
      {
        "instruccion": "Completa con like o nada (escribe x si no va nada).",
        "pregunta": "You look ___ happy today.",
        "respuestas": [
          "x"
        ]
      },
      {
        "instruccion": "Completa la pregunta.",
        "pregunta": "What does it taste ___?",
        "respuestas": [
          "like"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Huele delicioso.",
        "respuestas": [
          "It smells delicious"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Se parece a su mamá.",
        "respuestas": [
          "She looks like her mother",
          "She looks like her mom",
          "He looks like his mother",
          "He looks like his mom"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Parece que va a llover.",
        "respuestas": [
          "It looks as if it's going to rain",
          "It looks like it's going to rain",
          "It looks as if it is going to rain"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "This food smells very well.",
        "respuestas": [
          "This food smells very good"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "This cake tastes ___.",
        "opciones": [
          "delicious",
          "deliciously",
          "like delicious",
          "delicious like"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "He looks ___ a famous singer.",
        "opciones": [
          "like",
          "as",
          "—",
          "same"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "You sound ___. What happened?",
        "opciones": [
          "upset",
          "upsetly",
          "like upset",
          "as upset"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "This sweater feels ___.",
        "opciones": [
          "soft",
          "softly",
          "like soft",
          "softness"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«What does he look like?» pregunta:",
        "opciones": [
          "Cómo es físicamente",
          "Qué le gusta",
          "Cómo está",
          "Qué está viendo"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«I feel like a coffee» significa:",
        "opciones": [
          "Se me antoja un café",
          "Me siento como un café",
          "Soy como un café",
          "Toqué un café"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Your new car looks fantastic! It must be very comfortable.",
        "pregunta": "¿Cómo se ve el carro?",
        "opciones": [
          "Fantástico",
          "Viejo",
          "Pequeño",
          "Feo"
        ]
      },
      {
        "tipo": "listening",
        "audio": "This tea tastes a bit bitter. Can I have some honey?",
        "pregunta": "¿Qué pide para el té?",
        "opciones": [
          "Miel",
          "Azúcar",
          "Leche",
          "Limón"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¡Suena genial!",
        "respuestas": [
          "That sounds great",
          "Sounds great",
          "It sounds great"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Te ves cansado.",
        "respuestas": [
          "You look tired"
        ]
      }
    ]
  },
  {
    "id": "b1-29",
    "num": 29,
    "titulo": "Verbos frasales para conversar (come up with, put off, turn out…)",
    "contexto": "Planes, problemas y relaciones",
    "explicacion": {
      "es": [
        "En B1 los verbos frasales se vuelven **más idiomáticos**: el significado ya no se adivina por sus partes. ***Put off*** no es «poner fuera», sino **posponer**. ***Turn out*** no es «voltear afuera», sino **resultar**.",
        "Muchos sustituyen a una palabra más formal: ***put off*** = *postpone*, ***find out*** = *discover*, ***call off*** = *cancel*, ***put up with*** = *tolerate*. En una conversación, el verbo frasal suena **mucho más natural**.",
        "Hay verbos frasales **de tres palabras** muy comunes: ***come up with*** (ocurrírsele una idea), ***cut down on*** (reducir), ***keep up with*** (seguir el ritmo), ***put up with*** (aguantar), ***look down on*** (menospreciar).",
        "Algunos tienen **varios significados**: ***make up*** = inventar (*He made up an excuse*) o reconciliarse (*They argued, but they made up*). ***Take up*** = empezar un pasatiempo u ocupar espacio. El contexto te dice cuál es."
      ],
      "tabla": {
        "columnas": [
          "Verbo frasal",
          "Significado",
          "Equivalente formal"
        ],
        "filas": [
          [
            "put off",
            "posponer",
            "postpone"
          ],
          [
            "call off",
            "cancelar",
            "cancel"
          ],
          [
            "come up with",
            "ocurrírsele, idear",
            "think of"
          ],
          [
            "put up with",
            "aguantar, soportar",
            "tolerate"
          ],
          [
            "turn down",
            "rechazar",
            "reject"
          ],
          [
            "figure out",
            "descifrar, entender",
            "understand"
          ]
        ]
      },
      "ojo": [
        "***Turn out*** + adjetivo o *to be*: *The party **turned out** great.* *He **turned out to be** my cousin.*",
        "***End up*** + -ing o lugar: *We **ended up** eating pizza.* (Terminamos comiendo pizza.)",
        "***Run into*** = encontrarte a alguien por casualidad. *I **ran into** my teacher at the supermarket.*",
        "***Take after*** = parecerse a un familiar: *She **takes after** her mother.*",
        "***Pass away*** es la forma **delicada** de decir *die* (fallecer)."
      ],
      "en": [
        "The meeting was put off until next week.",
        "She came up with a great idea.",
        "I can't put up with this noise anymore.",
        "The party turned out to be a lot of fun."
      ]
    },
    "vocabulario": [
      {
        "en": "set up",
        "es": "montar, crear",
        "imagen": "Personas montando un puesto en un mercado",
        "ejemplo": [
          "She set up her own business.",
          "Ella creó su propio negocio."
        ]
      },
      {
        "en": "show up",
        "es": "aparecer, llegar",
        "imagen": "Persona llegando tarde a una reunión",
        "ejemplo": [
          "He didn't show up to the meeting.",
          "No se presentó a la junta."
        ]
      },
      {
        "en": "call off",
        "es": "cancelar",
        "imagen": "Cancha de fútbol vacía bajo la lluvia",
        "ejemplo": [
          "They called off the match because of the rain.",
          "Cancelaron el partido por la lluvia."
        ]
      },
      {
        "en": "put off",
        "es": "posponer",
        "imagen": "Calendario con una fecha tachada",
        "ejemplo": [
          "Don't put off your homework.",
          "No pospongas tu tarea."
        ]
      },
      {
        "en": "bring up",
        "es": "mencionar un tema, criar",
        "imagen": "Persona levantando la mano en una reunión",
        "ejemplo": [
          "Don't bring up politics at dinner.",
          "No saques el tema de la política en la cena."
        ]
      },
      {
        "en": "come up with",
        "es": "ocurrírsele",
        "imagen": "Persona con una idea y un foco encendido",
        "ejemplo": [
          "She came up with a great idea.",
          "Se le ocurrió una gran idea."
        ]
      },
      {
        "en": "cut down on",
        "es": "reducir",
        "imagen": "Persona apartando un plato de pan dulce",
        "ejemplo": [
          "I'm trying to cut down on sugar.",
          "Estoy tratando de comer menos azúcar."
        ]
      },
      {
        "en": "figure out",
        "es": "descifrar, entender",
        "imagen": "Persona armando un rompecabezas",
        "ejemplo": [
          "I can't figure out this problem.",
          "No logro entender este problema."
        ]
      },
      {
        "en": "get over",
        "es": "superar",
        "imagen": "Persona sonriendo después de estar triste",
        "ejemplo": [
          "It took her months to get over the breakup.",
          "Le tomó meses superar la ruptura."
        ]
      },
      {
        "en": "go through",
        "es": "pasar por algo difícil",
        "imagen": "Amigo consolando a otro",
        "ejemplo": [
          "He's going through a hard time.",
          "Está pasando por un momento difícil."
        ]
      },
      {
        "en": "keep up with",
        "es": "seguir el ritmo",
        "imagen": "Ciclista intentando alcanzar al grupo",
        "ejemplo": [
          "I can't keep up with you. You walk too fast!",
          "No puedo seguirte el paso. ¡Caminas muy rápido!"
        ]
      },
      {
        "en": "let down",
        "es": "decepcionar",
        "imagen": "Niño triste esperando en la ventana",
        "ejemplo": [
          "Don't let me down.",
          "No me decepciones."
        ]
      },
      {
        "en": "make up",
        "es": "inventar, reconciliarse",
        "imagen": "Dos amigos dándose la mano tras una pelea",
        "ejemplo": [
          "They argued, but they made up.",
          "Se pelearon, pero se reconciliaron."
        ]
      },
      {
        "en": "point out",
        "es": "señalar",
        "imagen": "Maestra señalando un error en el pizarrón",
        "ejemplo": [
          "She pointed out my mistake.",
          "Me señaló mi error."
        ]
      },
      {
        "en": "put up with",
        "es": "aguantar",
        "imagen": "Persona tapándose los oídos por el ruido",
        "ejemplo": [
          "I can't put up with this noise.",
          "No aguanto este ruido."
        ]
      },
      {
        "en": "run into",
        "es": "toparse con alguien",
        "imagen": "Dos amigos sorprendidos en el súper",
        "ejemplo": [
          "I ran into my teacher at the supermarket.",
          "Me topé con mi maestra en el súper."
        ]
      },
      {
        "en": "take after",
        "es": "parecerse a un familiar",
        "imagen": "Madre e hija muy parecidas",
        "ejemplo": [
          "She takes after her mother.",
          "Se parece a su mamá."
        ]
      },
      {
        "en": "take up",
        "es": "empezar un pasatiempo",
        "imagen": "Persona empezando clases de guitarra",
        "ejemplo": [
          "I took up yoga last year.",
          "Empecé yoga el año pasado."
        ]
      },
      {
        "en": "turn down",
        "es": "rechazar",
        "imagen": "Persona rechazando una oferta con la mano",
        "ejemplo": [
          "She turned down the job offer.",
          "Rechazó la oferta de trabajo."
        ]
      },
      {
        "en": "turn out",
        "es": "resultar",
        "imagen": "Fiesta animada con globos",
        "ejemplo": [
          "The party turned out great.",
          "La fiesta resultó genial."
        ]
      },
      {
        "en": "catch up",
        "es": "ponerse al día",
        "imagen": "Amigas platicando en un café",
        "ejemplo": [
          "Let's meet for coffee and catch up.",
          "Veámonos para tomar un café y ponernos al día."
        ]
      },
      {
        "en": "come across",
        "es": "encontrar por casualidad",
        "imagen": "Persona encontrando una foto vieja en una caja",
        "ejemplo": [
          "I came across an old photo of my parents.",
          "Me encontré una foto vieja de mis papás."
        ]
      },
      {
        "en": "end up",
        "es": "terminar, acabar",
        "imagen": "Amigos comiendo pizza a medianoche",
        "ejemplo": [
          "We ended up eating pizza at midnight.",
          "Terminamos comiendo pizza a medianoche."
        ]
      },
      {
        "en": "get by",
        "es": "arreglárselas",
        "imagen": "Persona contando monedas",
        "ejemplo": [
          "I get by with a little English.",
          "Me las arreglo con un poco de inglés."
        ]
      },
      {
        "en": "give in",
        "es": "ceder",
        "imagen": "Papá cediendo y comprando un helado",
        "ejemplo": [
          "Finally, my dad gave in and bought me a dog.",
          "Al final, mi papá cedió y me compró un perro."
        ]
      },
      {
        "en": "pass away",
        "es": "fallecer",
        "imagen": "Flores blancas junto a una vela",
        "ejemplo": [
          "His grandfather passed away last year.",
          "Su abuelo falleció el año pasado."
        ]
      },
      {
        "en": "put out",
        "es": "apagar fuego",
        "imagen": "Bombero apagando un incendio",
        "ejemplo": [
          "The firefighters put out the fire.",
          "Los bomberos apagaron el incendio."
        ]
      },
      {
        "en": "drop off",
        "es": "dejar a alguien",
        "imagen": "Mamá dejando a su hijo en la escuela",
        "ejemplo": [
          "I drop off my kids at school at eight.",
          "Dejo a mis hijos en la escuela a las ocho."
        ]
      },
      {
        "en": "fall out",
        "es": "pelearse",
        "imagen": "Dos amigos dándose la espalda",
        "ejemplo": [
          "They fell out over money.",
          "Se pelearon por dinero."
        ]
      },
      {
        "en": "look down on",
        "es": "menospreciar",
        "imagen": "Persona mirando con desprecio",
        "ejemplo": [
          "Don't look down on people with less money.",
          "No menosprecies a la gente con menos dinero."
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "They called off the match because of the rain.",
        "es": "Cancelaron el partido por la lluvia."
      },
      {
        "en": "She came up with a great idea.",
        "es": "Se le ocurrió una gran idea."
      },
      {
        "en": "I'm trying to cut down on sugar.",
        "es": "Estoy tratando de comer menos azúcar."
      },
      {
        "en": "It took her months to get over the breakup.",
        "es": "Le tomó meses superar la ruptura."
      },
      {
        "en": "I can't put up with this noise.",
        "es": "No aguanto este ruido."
      },
      {
        "en": "I ran into my teacher at the supermarket.",
        "es": "Me topé con mi maestra en el súper."
      },
      {
        "en": "She takes after her mother.",
        "es": "Se parece a su mamá."
      },
      {
        "en": "She turned down the job offer.",
        "es": "Rechazó la oferta de trabajo."
      },
      {
        "en": "We ended up eating pizza at midnight.",
        "es": "Terminamos comiendo pizza a medianoche."
      },
      {
        "en": "The firefighters put out the fire.",
        "es": "Los bomberos apagaron el incendio."
      }
    ],
    "frases": [
      {
        "en": "We had to put off the wedding because of the storm.",
        "es": "Tuvimos que posponer la boda por la tormenta.",
        "imagen": "Jardín de boda vacío bajo la lluvia"
      },
      {
        "en": "My cousin set up a small coffee shop in Oaxaca, and it's doing really well.",
        "es": "Mi primo puso una cafetería pequeña en Oaxaca y le va muy bien.",
        "imagen": "Cafetería pequeña con clientes"
      },
      {
        "en": "I invited twenty people, but only five showed up.",
        "es": "Invité a veinte personas, pero solo llegaron cinco.",
        "imagen": "Fiesta con pocas personas y muchas sillas vacías"
      },
      {
        "en": "It took me a while to figure out how the new phone works.",
        "es": "Me tardé un rato en entender cómo funciona el teléfono nuevo.",
        "imagen": "Persona confundida con un celular nuevo"
      },
      {
        "en": "Nobody wanted to bring up the problem during the meeting.",
        "es": "Nadie quería sacar el tema del problema durante la junta.",
        "imagen": "Sala de juntas con caras serias"
      },
      {
        "en": "I was going to stay home, but I ended up going to the concert.",
        "es": "Iba a quedarme en casa, pero terminé yendo al concierto.",
        "imagen": "Público en un concierto al aire libre"
      },
      {
        "en": "The movie turned out to be much better than I expected.",
        "es": "La película resultó ser mucho mejor de lo que esperaba.",
        "imagen": "Público sonriendo en un cine"
      },
      {
        "en": "When I moved to Canada, I got by with very basic English.",
        "es": "Cuando me mudé a Canadá, me las arreglé con un inglés muy básico.",
        "imagen": "Persona preguntando direcciones en una calle nevada"
      },
      {
        "en": "My brothers fell out years ago, but they finally made up last Christmas.",
        "es": "Mis hermanos se pelearon hace años, pero por fin se reconciliaron la Navidad pasada.",
        "imagen": "Dos hermanos abrazándose junto a un árbol de Navidad"
      },
      {
        "en": "I came across this recipe in my grandmother's notebook.",
        "es": "Encontré esta receta en el cuaderno de mi abuela.",
        "imagen": "Cuaderno viejo de recetas escrito a mano"
      }
    ],
    "listening": [
      {
        "audio": "The concert was called off because the singer was sick.",
        "pregunta": "¿Por qué cancelaron el concierto?",
        "opciones": [
          "El cantante estaba enfermo",
          "Llovió",
          "No vendieron boletos",
          "Hubo un accidente"
        ]
      },
      {
        "audio": "I ran into my ex at the airport. It was so awkward!",
        "pregunta": "¿A quién se encontró?",
        "opciones": [
          "A su ex",
          "A su jefe",
          "A su maestra",
          "A su mamá"
        ]
      },
      {
        "audio": "He takes after his father. They're both very funny.",
        "pregunta": "¿A quién se parece?",
        "opciones": [
          "A su papá",
          "A su mamá",
          "A su hermano",
          "A su abuelo"
        ]
      },
      {
        "audio": "I'm trying to cut down on coffee. I only have one cup a day now.",
        "pregunta": "¿Qué intenta reducir?",
        "opciones": [
          "El café",
          "El azúcar",
          "El pan",
          "El refresco"
        ]
      },
      {
        "audio": "She turned down the offer because the salary was too low.",
        "pregunta": "¿Por qué rechazó la oferta?",
        "opciones": [
          "El sueldo era bajo",
          "Estaba lejos",
          "No le gustó el jefe",
          "Ya tenía trabajo"
        ]
      }
    ],
    "lectura": {
      "titulo": "Starting a business",
      "texto": "Two years ago, Mariana was working in an office and feeling bored. One day, she came up with an idea: she wanted to set up a small bakery selling traditional Mexican bread with modern flavors. At first, her family wasn't sure. Her father kept bringing up the risks, and she almost gave in and kept her office job. But she didn't. She put off the opening twice because she couldn't figure out how to get a loan. Finally, she found a partner, an old classmate she ran into at a café. The first months were hard. Some days only a few customers showed up, and she went through moments of real doubt. She had to cut down on her own expenses and got by on very little money. But things turned out well. Today, the bakery has three employees, and people line up every morning for her famous chocolate conchas. Mariana says her biggest lesson was simple: don't let fear let you down.",
      "preguntas": [
        {
          "pregunta": "¿Qué idea se le ocurrió a Mariana?",
          "opciones": [
            "Poner una panadería",
            "Abrir un restaurante",
            "Cambiar de oficina",
            "Estudiar cocina"
          ]
        },
        {
          "pregunta": "¿Por qué pospuso la apertura?",
          "opciones": [
            "No sabía cómo conseguir un préstamo",
            "Estaba enferma",
            "No tenía local",
            "Su familia se negó"
          ]
        },
        {
          "pregunta": "¿Dónde conoció a su socio?",
          "opciones": [
            "Se topó con un excompañero en un café",
            "En el banco",
            "En internet",
            "En su oficina"
          ]
        },
        {
          "pregunta": "¿Cómo le va hoy a la panadería?",
          "opciones": [
            "Muy bien, con tres empleados",
            "Cerró",
            "Mal",
            "Está en venta"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa.",
        "pregunta": "They called ___ the party.",
        "respuestas": [
          "off"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "She came up ___ a brilliant plan.",
        "respuestas": [
          "with"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "I can't put up ___ his attitude.",
        "respuestas": [
          "with"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "I ran ___ an old friend yesterday.",
        "respuestas": [
          "into"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "The trip turned ___ to be amazing.",
        "respuestas": [
          "out"
        ]
      },
      {
        "instruccion": "Completa.",
        "pregunta": "We ended ___ staying at home.",
        "respuestas": [
          "up"
        ]
      },
      {
        "instruccion": "Escribe el verbo frasal (posponer).",
        "pregunta": "We had to ___ the meeting. (put…)",
        "respuestas": [
          "put off"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Se parece a su papá.",
        "respuestas": [
          "He takes after his father",
          "She takes after her father",
          "He takes after his dad",
          "She takes after her dad"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "No me decepciones.",
        "respuestas": [
          "Don't let me down",
          "Do not let me down"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Rechazó la oferta.",
        "respuestas": [
          "She turned down the offer",
          "He turned down the offer",
          "She turned the offer down",
          "He turned the offer down"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "The game was ___ off because of the storm.",
        "opciones": [
          "called",
          "put",
          "turned",
          "set"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I'm trying to cut down ___ sugar.",
        "opciones": [
          "on",
          "with",
          "of",
          "for"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "It took him a year to get ___ the accident.",
        "opciones": [
          "over",
          "up",
          "by",
          "off"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "We ended up ___ a taxi.",
        "opciones": [
          "taking",
          "take",
          "to take",
          "took"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Show up» significa:",
        "opciones": [
          "Aparecer, llegar",
          "Presumir",
          "Subir",
          "Mostrar una foto"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "«Pass away» es una forma delicada de decir:",
        "opciones": [
          "Fallecer",
          "Aprobar",
          "Pasar de largo",
          "Desmayarse"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Let's meet on Friday and catch up. I have so much to tell you!",
        "pregunta": "¿Para qué quieren verse?",
        "opciones": [
          "Para ponerse al día",
          "Para trabajar",
          "Para estudiar",
          "Para comprar algo"
        ]
      },
      {
        "tipo": "listening",
        "audio": "I came across your old letters while I was cleaning.",
        "pregunta": "¿Qué encontró?",
        "opciones": [
          "Cartas viejas",
          "Fotos",
          "Dinero",
          "Ropa"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: no aguanto este calor",
        "respuestas": [
          "I can't put up with this heat",
          "I cannot put up with this heat",
          "I can't stand this heat"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: se me ocurrió una idea",
        "respuestas": [
          "I came up with an idea"
        ]
      }
    ]
  }
];
