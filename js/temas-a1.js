// Temas del nivel A1 (docs/plan-de-estudios.md). Los que todavía no tienen contenido solo llevan título.
// Partes de cada tema: explicación (español e inglés), vocabulario, ejemplos, listening, lectura,
// escritura y examen final. "grupos" (opcional) es vocabulario extra por temas, cada uno con su patrón de uso.
// "imagen" es la idea de qué mostrar en la imagen de Canva
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
    "grupos": [
      {
        "id": "emociones",
        "titulo": "Sentimientos y emociones",
        "icono": "😊",
        "patron": ["I'm happy.", "She's tired.", "Are you OK?"],
        "palabras": [
          { "en": "happy", "es": "feliz, contento", "imagen": "Persona sonriendo ampliamente con los brazos abiertos" },
          { "en": "sad", "es": "triste", "imagen": "Persona triste mirando por una ventana con lluvia" },
          { "en": "angry", "es": "enojado", "imagen": "Persona enojada con el ceño fruncido y los brazos cruzados" },
          { "en": "tired", "es": "cansado", "imagen": "Persona bostezando en su escritorio" },
          { "en": "bored", "es": "aburrido", "imagen": "Joven aburrido con la cabeza apoyada en la mano" },
          { "en": "excited", "es": "emocionado", "imagen": "Niños saltando de emoción" },
          { "en": "nervous", "es": "nervioso", "imagen": "Persona mordiéndose las uñas antes de una entrevista" },
          { "en": "worried", "es": "preocupado", "imagen": "Persona preocupada mirando su celular con la mano en la frente" },
          { "en": "scared", "es": "asustado", "imagen": "Niño asustado escondido bajo una cobija" },
          { "en": "surprised", "es": "sorprendido", "imagen": "Persona sorprendida con la boca abierta al recibir un regalo" },
          { "en": "proud", "es": "orgulloso", "imagen": "Padres orgullosos en la graduación de su hija" },
          { "en": "embarrassed", "es": "avergonzado, apenado", "imagen": "Persona sonrojada tapándose la cara con las manos" },
          { "en": "lonely", "es": "solo, solitario", "imagen": "Persona sentada sola en una banca del parque" },
          { "en": "relaxed", "es": "relajado", "imagen": "Persona descansando en una hamaca" },
          { "en": "stressed", "es": "estresado", "imagen": "Persona agobiada rodeada de papeles en la oficina" },
          { "en": "confused", "es": "confundido", "imagen": "Persona rascándose la cabeza frente a un mapa" },
          { "en": "calm", "es": "tranquilo", "imagen": "Persona meditando junto a un lago" },
          { "en": "jealous", "es": "celoso", "imagen": "Niño mirando con celos el juguete de otro niño" },
          { "en": "upset", "es": "molesto, disgustado", "imagen": "Persona molesta hablando por teléfono" },
          { "en": "hungry", "es": "con hambre (tener hambre)", "imagen": "Persona hambrienta mirando un plato de comida" },
          { "en": "thirsty", "es": "con sed (tener sed)", "imagen": "Persona sedienta bebiendo agua después de correr" },
          { "en": "sleepy", "es": "con sueño (tener sueño)", "imagen": "Niño con sueño frotándose los ojos" },
          { "en": "in love", "es": "enamorado", "imagen": "Pareja mirándose enamorada" },
          { "en": "OK", "es": "bien", "imagen": "Persona haciendo la señal de OK con la mano" }
        ]
      },
      {
        "id": "profesiones",
        "titulo": "Profesiones y oficios",
        "icono": "👩‍⚕️",
        "patron": ["I'm a teacher.", "He's an engineer.", "Is she a nurse?"],
        "palabras": [
          { "en": "a doctor", "es": "un doctor / una doctora", "imagen": "Doctora con bata blanca y estetoscopio" },
          { "en": "a nurse", "es": "un enfermero / una enfermera", "imagen": "Enfermero atendiendo a un paciente" },
          { "en": "a dentist", "es": "un dentista", "imagen": "Dentista revisando los dientes de un paciente" },
          { "en": "a pharmacist", "es": "un farmacéutico", "imagen": "Farmacéutica detrás del mostrador de una farmacia" },
          { "en": "a vet", "es": "un veterinario", "imagen": "Veterinaria revisando a un perro" },
          { "en": "a teacher", "es": "un maestro / una maestra", "imagen": "Maestra frente al pizarrón con sus alumnos" },
          { "en": "a student", "es": "un estudiante", "imagen": "Estudiante con mochila y libros" },
          { "en": "an engineer", "es": "un ingeniero", "imagen": "Ingeniera con casco revisando planos en una obra" },
          { "en": "an architect", "es": "un arquitecto", "imagen": "Arquitecto con una maqueta de edificio" },
          { "en": "a lawyer", "es": "un abogado", "imagen": "Abogada con traje y documentos en un tribunal" },
          { "en": "an accountant", "es": "un contador", "imagen": "Contador con calculadora y facturas" },
          { "en": "a secretary", "es": "un secretario / una secretaria", "imagen": "Secretaria organizando una agenda en la oficina" },
          { "en": "a manager", "es": "un gerente", "imagen": "Gerente dirigiendo una reunión de equipo" },
          { "en": "a businessman", "es": "un hombre de negocios", "imagen": "Hombre de negocios con maletín caminando por la ciudad" },
          { "en": "a businesswoman", "es": "una mujer de negocios", "imagen": "Mujer de negocios hablando por teléfono en una oficina moderna" },
          { "en": "a salesperson", "es": "un vendedor", "imagen": "Vendedor mostrando un producto a un cliente en una tienda" },
          { "en": "a cashier", "es": "un cajero", "imagen": "Cajera cobrando en el supermercado" },
          { "en": "a cook", "es": "un cocinero", "imagen": "Cocinero preparando comida en una cocina" },
          { "en": "a chef", "es": "un chef", "imagen": "Chef con gorro blanco decorando un platillo" },
          { "en": "a waiter", "es": "un mesero", "imagen": "Mesero llevando platos en un restaurante" },
          { "en": "a waitress", "es": "una mesera", "imagen": "Mesera tomando la orden en una cafetería" },
          { "en": "a police officer", "es": "un policía", "imagen": "Policía con uniforme en la calle" },
          { "en": "a firefighter", "es": "un bombero", "imagen": "Bombero con casco junto a un camión de bomberos" },
          { "en": "a soldier", "es": "un soldado", "imagen": "Soldado con uniforme militar" },
          { "en": "a security guard", "es": "un guardia de seguridad", "imagen": "Guardia de seguridad en la entrada de un edificio" },
          { "en": "a mechanic", "es": "un mecánico", "imagen": "Mecánico reparando el motor de un coche" },
          { "en": "an electrician", "es": "un electricista", "imagen": "Electricista revisando cables con herramientas" },
          { "en": "a plumber", "es": "un plomero", "imagen": "Plomero arreglando la tubería de un lavabo" },
          { "en": "a carpenter", "es": "un carpintero", "imagen": "Carpintero trabajando la madera en su taller" },
          { "en": "a construction worker", "es": "un albañil, obrero de construcción", "imagen": "Obrero con casco y chaleco en una construcción" },
          { "en": "a painter", "es": "un pintor", "imagen": "Pintor pintando una pared con rodillo" },
          { "en": "a gardener", "es": "un jardinero", "imagen": "Jardinero podando plantas en un jardín" },
          { "en": "a farmer", "es": "un granjero, agricultor", "imagen": "Agricultor en un campo de cultivo con su tractor" },
          { "en": "a driver", "es": "un chofer, conductor", "imagen": "Conductor al volante de un autobús" },
          { "en": "a taxi driver", "es": "un taxista", "imagen": "Taxista sonriendo dentro de su taxi" },
          { "en": "a pilot", "es": "un piloto", "imagen": "Piloto con uniforme en la cabina de un avión" },
          { "en": "a flight attendant", "es": "un sobrecargo, azafata", "imagen": "Sobrecargo atendiendo a pasajeros en un avión" },
          { "en": "a hairdresser", "es": "un estilista, peluquero", "imagen": "Estilista cortando el cabello a una clienta" },
          { "en": "a barber", "es": "un barbero", "imagen": "Barbero afeitando a un cliente" },
          { "en": "a cleaner", "es": "un trabajador de limpieza", "imagen": "Persona de limpieza trapeando un piso" },
          { "en": "a programmer", "es": "un programador", "imagen": "Programador escribiendo código en dos pantallas" },
          { "en": "a designer", "es": "un diseñador", "imagen": "Diseñadora dibujando en una tableta digital" },
          { "en": "a scientist", "es": "un científico", "imagen": "Científica con bata mirando por un microscopio" },
          { "en": "a journalist", "es": "un periodista", "imagen": "Periodista con micrófono entrevistando a alguien" },
          { "en": "a photographer", "es": "un fotógrafo", "imagen": "Fotógrafo tomando fotos con una cámara profesional" },
          { "en": "a musician", "es": "un músico", "imagen": "Músico tocando la guitarra en un escenario" },
          { "en": "a singer", "es": "un cantante", "imagen": "Cantante con micrófono en un concierto" },
          { "en": "an actor", "es": "un actor", "imagen": "Actor actuando en un escenario de teatro" },
          { "en": "an artist", "es": "un artista", "imagen": "Artista pintando un cuadro con pinceles" },
          { "en": "a writer", "es": "un escritor", "imagen": "Escritora escribiendo en su computadora rodeada de libros" },
          { "en": "a baker", "es": "un panadero", "imagen": "Panadero sacando pan del horno" },
          { "en": "a butcher", "es": "un carnicero", "imagen": "Carnicero cortando carne en su carnicería" },
          { "en": "a tailor", "es": "un sastre", "imagen": "Sastre tomando medidas con una cinta métrica" },
          { "en": "a mail carrier", "es": "un cartero", "imagen": "Cartero entregando cartas en una casa" },
          { "en": "a babysitter", "es": "una niñera", "imagen": "Niñera jugando con un niño pequeño" },
          { "en": "a homemaker", "es": "ama / amo de casa", "imagen": "Persona cocinando en casa con sus hijos" },
          { "en": "retired", "es": "jubilado", "imagen": "Pareja de jubilados descansando en el jardín" },
          { "en": "unemployed", "es": "desempleado", "imagen": "Persona leyendo anuncios de empleo en el periódico" }
        ]
      },
      {
        "id": "salud",
        "titulo": "Enfermedades y padecimientos",
        "icono": "🤒",
        "patron": ["I'm sick.", "He's allergic to cats.", "My leg is broken."],
        "palabras": [
          { "en": "I'm sick.", "es": "Estoy enfermo.", "imagen": "Persona enferma en la cama con un termómetro" },
          { "en": "I'm ill.", "es": "Estoy enfermo (más formal).", "imagen": "Persona pálida envuelta en una cobija en el sofá" },
          { "en": "I'm dizzy.", "es": "Estoy mareado.", "imagen": "Persona mareada tocándose la cabeza" },
          { "en": "I'm nauseous.", "es": "Tengo náuseas.", "imagen": "Persona con náuseas tapándose la boca" },
          { "en": "I'm feverish.", "es": "Tengo fiebre, estoy afiebrado.", "imagen": "Persona con un paño húmedo en la frente" },
          { "en": "I'm congested.", "es": "Estoy congestionado.", "imagen": "Persona con la nariz tapada sonándose con un pañuelo" },
          { "en": "I'm in pain.", "es": "Tengo dolor.", "imagen": "Persona con gesto de dolor sujetándose el estómago" },
          { "en": "I'm hurt.", "es": "Estoy lastimado.", "imagen": "Niño con una curita en la rodilla" },
          { "en": "He's injured.", "es": "Él está herido.", "imagen": "Futbolista lesionado en el campo atendido por un médico" },
          { "en": "I'm allergic to cats.", "es": "Soy alérgico a los gatos.", "imagen": "Persona estornudando junto a un gato" },
          { "en": "She's pregnant.", "es": "Ella está embarazada.", "imagen": "Mujer embarazada sonriendo con la mano en el vientre" },
          { "en": "He's diabetic.", "es": "Él es diabético.", "imagen": "Persona midiéndose el azúcar con un glucómetro" },
          { "en": "I'm asthmatic.", "es": "Soy asmático.", "imagen": "Persona usando un inhalador" },
          { "en": "I'm dehydrated.", "es": "Estoy deshidratado.", "imagen": "Persona acalorada y sedienta bajo el sol" },
          { "en": "I'm sunburned.", "es": "Estoy quemado por el sol.", "imagen": "Persona con la piel roja por el sol en la playa" },
          { "en": "I'm exhausted.", "es": "Estoy agotado.", "imagen": "Persona agotada tirada en el sofá" },
          { "en": "I'm weak.", "es": "Estoy débil.", "imagen": "Persona débil apoyándose en la pared" },
          { "en": "My throat is sore.", "es": "Me duele la garganta.", "imagen": "Persona tocándose la garganta con dolor" },
          { "en": "My leg is broken.", "es": "Tengo la pierna rota.", "imagen": "Persona con la pierna enyesada usando muletas" },
          { "en": "My ankle is swollen.", "es": "Tengo el tobillo hinchado.", "imagen": "Tobillo hinchado con una bolsa de hielo encima" },
          { "en": "My eyes are red.", "es": "Tengo los ojos rojos.", "imagen": "Persona con los ojos rojos e irritados" },
          { "en": "My stomach is upset.", "es": "Tengo el estómago revuelto.", "imagen": "Persona con malestar de estómago sosteniéndose el abdomen" },
          { "en": "My back is stiff.", "es": "Tengo la espalda tiesa.", "imagen": "Persona con dolor de espalda tocándose la parte baja" },
          { "en": "I'm better now.", "es": "Ya estoy mejor.", "imagen": "Persona sonriente levantándose de la cama recuperada" },
          { "en": "I'm healthy.", "es": "Estoy sano.", "imagen": "Persona sana corriendo en el parque" }
        ]
      },
      {
        "id": "clima",
        "titulo": "El clima",
        "icono": "🌤️",
        "patron": ["It's sunny.", "It's cold today.", "Is it hot in Mexico?"],
        "palabras": [
          { "en": "sunny", "es": "soleado", "imagen": "Cielo azul con un sol brillante sobre una playa" },
          { "en": "cloudy", "es": "nublado", "imagen": "Cielo gris cubierto de nubes sobre la ciudad" },
          { "en": "rainy", "es": "lluvioso", "imagen": "Calle mojada con personas con paraguas bajo la lluvia" },
          { "en": "windy", "es": "con viento", "imagen": "Árboles doblándose por el viento y una persona sujetando su sombrero" },
          { "en": "snowy", "es": "con nieve", "imagen": "Paisaje cubierto de nieve con un muñeco de nieve" },
          { "en": "foggy", "es": "con niebla", "imagen": "Carretera cubierta de niebla espesa" },
          { "en": "stormy", "es": "tormentoso", "imagen": "Rayos en un cielo oscuro de tormenta" },
          { "en": "hot", "es": "caluroso (hace calor)", "imagen": "Persona sudando bajo un sol intenso" },
          { "en": "warm", "es": "templado, cálido", "imagen": "Familia de picnic en un día agradable de primavera" },
          { "en": "cool", "es": "fresco", "imagen": "Persona con suéter ligero caminando en otoño" },
          { "en": "cold", "es": "frío (hace frío)", "imagen": "Persona con abrigo, bufanda y gorro temblando de frío" },
          { "en": "freezing", "es": "helado, muy frío", "imagen": "Lago congelado y árboles cubiertos de hielo" },
          { "en": "humid", "es": "húmedo", "imagen": "Selva tropical con vapor en el aire" },
          { "en": "dry", "es": "seco", "imagen": "Desierto con tierra agrietada" },
          { "en": "nice", "es": "agradable, bonito", "imagen": "Parque verde en un día perfecto" },
          { "en": "It's twenty degrees.", "es": "Hace veinte grados.", "imagen": "Termómetro marcando veinte grados" }
        ]
      },
      {
        "id": "fisico",
        "titulo": "Descripción física",
        "icono": "🧍",
        "patron": ["He's tall.", "She's young.", "They're very strong."],
        "palabras": [
          { "en": "tall", "es": "alto", "imagen": "Hombre muy alto junto a una puerta" },
          { "en": "short", "es": "bajo, chaparro", "imagen": "Persona bajita junto a una persona alta" },
          { "en": "thin", "es": "delgado", "imagen": "Persona delgada con ropa deportiva" },
          { "en": "big", "es": "grande, corpulento", "imagen": "Hombre grande y corpulento sonriendo" },
          { "en": "young", "es": "joven", "imagen": "Grupo de jóvenes riendo" },
          { "en": "old", "es": "viejo, mayor", "imagen": "Señora mayor sonriendo con su bastón" },
          { "en": "beautiful", "es": "hermosa, hermoso", "imagen": "Mujer elegante sonriendo" },
          { "en": "handsome", "es": "guapo", "imagen": "Hombre guapo con traje" },
          { "en": "pretty", "es": "bonita, linda", "imagen": "Niña bonita con flores en el cabello" },
          { "en": "cute", "es": "lindo, tierno", "imagen": "Bebé tierno sonriendo" },
          { "en": "strong", "es": "fuerte", "imagen": "Persona levantando pesas en el gimnasio" },
          { "en": "blond", "es": "rubio", "imagen": "Persona con cabello rubio" },
          { "en": "dark-haired", "es": "de cabello oscuro", "imagen": "Persona con cabello negro y largo" },
          { "en": "bald", "es": "calvo", "imagen": "Hombre calvo sonriendo" }
        ]
      },
      {
        "id": "personalidad",
        "titulo": "Personalidad",
        "icono": "🙂",
        "patron": ["She's very kind.", "He's funny.", "Are they shy?"],
        "palabras": [
          { "en": "kind", "es": "amable", "imagen": "Joven ayudando a una anciana a cruzar la calle" },
          { "en": "friendly", "es": "amigable", "imagen": "Persona saludando sonriente a sus vecinos" },
          { "en": "funny", "es": "gracioso, chistoso", "imagen": "Persona haciendo reír a sus amigos" },
          { "en": "shy", "es": "tímido", "imagen": "Niña tímida escondida detrás de su mamá" },
          { "en": "smart", "es": "inteligente, listo", "imagen": "Estudiante resolviendo un problema en el pizarrón" },
          { "en": "lazy", "es": "flojo, perezoso", "imagen": "Persona tirada en el sofá con el control remoto" },
          { "en": "hardworking", "es": "trabajador", "imagen": "Persona trabajando con dedicación en su escritorio" },
          { "en": "polite", "es": "educado, cortés", "imagen": "Joven abriendo la puerta a otra persona" },
          { "en": "rude", "es": "grosero", "imagen": "Persona empujando para pasar en una fila" },
          { "en": "honest", "es": "honesto", "imagen": "Persona devolviendo una cartera perdida" },
          { "en": "patient", "es": "paciente", "imagen": "Maestro explicando con calma a un niño" },
          { "en": "generous", "es": "generoso", "imagen": "Persona compartiendo su comida con otros" },
          { "en": "serious", "es": "serio", "imagen": "Persona seria con los brazos cruzados" },
          { "en": "quiet", "es": "callado, tranquilo", "imagen": "Persona leyendo en silencio en una biblioteca" },
          { "en": "talkative", "es": "platicador", "imagen": "Persona hablando animadamente con sus amigos" },
          { "en": "brave", "es": "valiente", "imagen": "Niño valiente saltando a la alberca" }
        ]
      },
      {
        "id": "nacionalidades",
        "titulo": "Nacionalidades",
        "icono": "🌎",
        "patron": ["I'm Mexican.", "Is she Canadian?", "They're Brazilian."],
        "palabras": [
          { "en": "Mexican", "es": "mexicano", "imagen": "Bandera de México ondeando" },
          { "en": "American", "es": "estadounidense", "imagen": "Bandera de Estados Unidos ondeando" },
          { "en": "Canadian", "es": "canadiense", "imagen": "Bandera de Canadá ondeando" },
          { "en": "Guatemalan", "es": "guatemalteco", "imagen": "Bandera de Guatemala ondeando" },
          { "en": "Cuban", "es": "cubano", "imagen": "Bandera de Cuba ondeando" },
          { "en": "Colombian", "es": "colombiano", "imagen": "Bandera de Colombia ondeando" },
          { "en": "Venezuelan", "es": "venezolano", "imagen": "Bandera de Venezuela ondeando" },
          { "en": "Peruvian", "es": "peruano", "imagen": "Bandera de Perú ondeando" },
          { "en": "Chilean", "es": "chileno", "imagen": "Bandera de Chile ondeando" },
          { "en": "Argentinian", "es": "argentino", "imagen": "Bandera de Argentina ondeando" },
          { "en": "Brazilian", "es": "brasileño", "imagen": "Bandera de Brasil ondeando" },
          { "en": "Spanish", "es": "español", "imagen": "Bandera de España ondeando" },
          { "en": "British", "es": "británico", "imagen": "Bandera del Reino Unido ondeando" },
          { "en": "French", "es": "francés", "imagen": "Bandera de Francia ondeando" },
          { "en": "German", "es": "alemán", "imagen": "Bandera de Alemania ondeando" },
          { "en": "Italian", "es": "italiano", "imagen": "Bandera de Italia ondeando" },
          { "en": "Chinese", "es": "chino", "imagen": "Bandera de China ondeando" },
          { "en": "Japanese", "es": "japonés", "imagen": "Bandera de Japón ondeando" },
          { "en": "Korean", "es": "coreano", "imagen": "Bandera de Corea del Sur ondeando" },
          { "en": "Indian", "es": "indio (de la India)", "imagen": "Bandera de la India ondeando" }
        ]
      },
      {
        "id": "estados",
        "titulo": "Estados y situaciones",
        "icono": "📍",
        "patron": ["I'm busy.", "We're late!", "Is he at home?"],
        "palabras": [
          { "en": "busy", "es": "ocupado", "imagen": "Persona ocupada hablando por teléfono y escribiendo a la vez" },
          { "en": "free", "es": "libre, desocupado", "imagen": "Persona relajada con la agenda vacía" },
          { "en": "late", "es": "tarde, retrasado", "imagen": "Persona corriendo para alcanzar el autobús" },
          { "en": "early", "es": "temprano", "imagen": "Persona llegando a una oficina vacía al amanecer" },
          { "en": "on time", "es": "a tiempo, puntual", "imagen": "Persona llegando justo a tiempo mirando su reloj" },
          { "en": "ready", "es": "listo", "imagen": "Persona con la maleta en la puerta lista para salir" },
          { "en": "at home", "es": "en casa", "imagen": "Familia en la sala de su casa" },
          { "en": "at work", "es": "en el trabajo", "imagen": "Persona trabajando en su oficina" },
          { "en": "at school", "es": "en la escuela", "imagen": "Niños en el patio de la escuela" },
          { "en": "here", "es": "aquí", "imagen": "Persona levantando la mano diciendo presente" },
          { "en": "right", "es": "en lo correcto (tener razón)", "imagen": "Persona señalando una respuesta correcta con una palomita verde" },
          { "en": "wrong", "es": "equivocado", "imagen": "Persona apenada junto a una cruz roja" },
          { "en": "sure", "es": "seguro", "imagen": "Persona segura de sí misma con el pulgar arriba" },
          { "en": "lucky", "es": "afortunado, con suerte", "imagen": "Persona encontrando un trébol de cuatro hojas" },
          { "en": "alone", "es": "solo, sin compañía", "imagen": "Persona caminando sola en una playa" },
          { "en": "awake", "es": "despierto", "imagen": "Persona despierta en la cama de noche mirando el techo" },
          { "en": "asleep", "es": "dormido", "imagen": "Bebé dormido en su cuna" },
          { "en": "open", "es": "abierto", "imagen": "Tienda con la puerta abierta" },
          { "en": "closed", "es": "cerrado", "imagen": "Tienda con la cortina metálica cerrada" }
        ]
      }
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
          "I am not",
          "No, I'm not",
          "No, I am not"
        ]
      },
      {
        "instruccion": "Completa la respuesta corta.",
        "pregunta": "Is she your sister? — Yes, ___.",
        "respuestas": [
          "she is",
          "Yes, she is"
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
  {
    "id": "a1-03",
    "num": 3,
    "titulo": "Pronombres personales (sujeto)",
    "contexto": "Personas a mi alrededor",
    "explicacion": {
      "es": [
        "Los **pronombres personales** reemplazan el nombre de una persona o cosa para no repetirlo: *Maria is my friend. **She** is a doctor.*",
        "En inglés el sujeto **siempre** se dice, aunque en español lo omitamos: *Somos amigos* = **We** are friends.",
        "**It** se usa para cosas, animales y lugares, y también para el clima y la hora: *It's cold. It's three o'clock.*",
        "**They** es para ellos y ellas, para personas y también para cosas en plural. **You** sirve para tú, usted y ustedes."
      ],
      "tabla": {
        "columnas": [
          "Pronombre",
          "Español",
          "Se usa para",
          "Ejemplo"
        ],
        "filas": [
          [
            "I",
            "yo",
            "quien habla",
            "I'm a student."
          ],
          [
            "you",
            "tú / usted",
            "la persona con quien hablas",
            "You're my best friend."
          ],
          [
            "he",
            "él",
            "un hombre o un niño",
            "Carlos is my dad. He's a cook."
          ],
          [
            "she",
            "ella",
            "una mujer o una niña",
            "Ana is my mom. She's a nurse."
          ],
          [
            "it",
            "(eso)",
            "una cosa, un animal, el clima o la hora",
            "My car is old. It's blue."
          ],
          [
            "we",
            "nosotros / nosotras",
            "yo y otras personas",
            "My wife and I are teachers. We're at school."
          ],
          [
            "you",
            "ustedes",
            "las personas con quienes hablas",
            "You're all welcome."
          ],
          [
            "they",
            "ellos / ellas",
            "varias personas o cosas",
            "Tom and Lisa are my neighbors. They're nice."
          ]
        ]
      },
      "ojo": [
        "**I** siempre va con mayúscula, aunque esté a mitad de la oración: *My brother and **I** are tall.*",
        "No repitas el nombre y el pronombre juntos: *My mother is a doctor* (no *My mother she is a doctor*).",
        "Para cosas y animales usa **it**, no *he* ni *she*: *The dog is big. **It** is friendly.*",
        "Para el clima y la hora se usa **it**, aunque en español no haya sujeto: *Hace calor* = **It's** hot."
      ],
      "en": [
        "The subject pronouns are: I, you, he, she, it, we, they.",
        "We use them instead of a name: Maria is my friend. **She** is a doctor.",
        "Use **it** for things, animals, the weather and the time.",
        "Use **they** for two or more people or things."
      ]
    },
    "vocabulario": [
      {
        "en": "friend",
        "es": "amigo / amiga",
        "imagen": "Dos amigas riendo juntas en un parque"
      },
      {
        "en": "best friend",
        "es": "mejor amigo / amiga",
        "imagen": "Dos amigos chocando las manos con complicidad"
      },
      {
        "en": "neighbor",
        "es": "vecino / vecina",
        "imagen": "Vecinos saludándose por encima de la cerca del jardín"
      },
      {
        "en": "classmate",
        "es": "compañero de clase",
        "imagen": "Estudiantes trabajando juntos en una mesa del salón de clases"
      },
      {
        "en": "coworker",
        "es": "compañero de trabajo",
        "imagen": "Compañeros de oficina tomando café juntos"
      },
      {
        "en": "boss",
        "es": "jefe / jefa",
        "imagen": "Jefa explicando algo a su equipo en una reunión"
      },
      {
        "en": "roommate",
        "es": "compañero de cuarto o de departamento",
        "imagen": "Dos jóvenes cocinando juntos en la cocina de su departamento"
      },
      {
        "en": "boyfriend",
        "es": "novio",
        "imagen": "Joven sonriente entregando flores a su novia"
      },
      {
        "en": "girlfriend",
        "es": "novia",
        "imagen": "Joven sonriente abrazando a su novio"
      },
      {
        "en": "partner",
        "es": "pareja",
        "imagen": "Pareja adulta caminando de la mano"
      },
      {
        "en": "people",
        "es": "gente, personas",
        "imagen": "Mucha gente caminando por una plaza"
      },
      {
        "en": "man",
        "es": "hombre",
        "imagen": "Hombre adulto sonriendo"
      },
      {
        "en": "woman",
        "es": "mujer",
        "imagen": "Mujer adulta sonriendo"
      },
      {
        "en": "child",
        "es": "niño / niña",
        "imagen": "Niño pequeño jugando con bloques"
      },
      {
        "en": "children",
        "es": "niños / niñas",
        "imagen": "Grupo de niños corriendo en el patio de la escuela"
      },
      {
        "en": "pet",
        "es": "mascota",
        "imagen": "Familia acariciando a su perro en la sala"
      }
    ],
    "ejemplos": [
      {
        "en": "This is Laura. She's my neighbor.",
        "es": "Ella es Laura. Es mi vecina.",
        "imagen": "Mujer saludando desde la puerta de la casa de al lado"
      },
      {
        "en": "Mark is my boss. He's very nice.",
        "es": "Mark es mi jefe. Es muy amable.",
        "imagen": "Jefe amable sonriendo en su oficina"
      },
      {
        "en": "My classmates are from Korea. They're friendly.",
        "es": "Mis compañeros de clase son de Corea. Son amables.",
        "imagen": "Grupo de estudiantes coreanos sonriendo en un salón de clases"
      },
      {
        "en": "My roommate and I are students. We're twenty.",
        "es": "Mi compañero de cuarto y yo somos estudiantes. Tenemos veinte años.",
        "imagen": "Dos jóvenes estudiando con libros en su departamento"
      },
      {
        "en": "Where's my phone? It's on the table.",
        "es": "¿Dónde está mi teléfono? Está en la mesa.",
        "imagen": "Celular sobre una mesa de madera"
      },
      {
        "en": "Our dog is old. It's twelve.",
        "es": "Nuestro perro es viejo. Tiene doce años.",
        "imagen": "Perro viejo descansando sobre una alfombra"
      },
      {
        "en": "It's hot today.",
        "es": "Hoy hace calor.",
        "imagen": "Persona abanicándose bajo un sol intenso"
      },
      {
        "en": "Are you and Sam coworkers? Yes, we are.",
        "es": "¿Tú y Sam son compañeros de trabajo? Sí.",
        "imagen": "Dos compañeros con computadoras portátiles en una oficina"
      },
      {
        "en": "You're my best friend!",
        "es": "¡Eres mi mejor amigo!",
        "imagen": "Dos amigos abrazándose felices"
      },
      {
        "en": "The children are in the park. They're happy.",
        "es": "Los niños están en el parque. Están felices.",
        "imagen": "Niños jugando felices en un parque"
      }
    ],
    "listening": [
      {
        "audio": "This is my friend Daniel. He's a firefighter.",
        "pregunta": "¿Cuál es el trabajo de Daniel?",
        "opciones": [
          "Es bombero",
          "Es policía",
          "Es doctor",
          "Es cocinero"
        ]
      },
      {
        "audio": "My neighbors are from India. They're very kind.",
        "pregunta": "¿De dónde son los vecinos?",
        "opciones": [
          "De India",
          "De Irlanda",
          "De Indonesia",
          "De Italia"
        ]
      },
      {
        "audio": "Lisa and I are coworkers. We're at the office now.",
        "pregunta": "¿Dónde están Lisa y quien habla?",
        "opciones": [
          "En la oficina",
          "En casa",
          "En la escuela",
          "En el parque"
        ]
      },
      {
        "audio": "Look at my new car! It's red.",
        "pregunta": "¿De qué color es el coche?",
        "opciones": [
          "Rojo",
          "Azul",
          "Verde",
          "Negro"
        ]
      },
      {
        "audio": "My boss is a woman. She's from Canada.",
        "pregunta": "¿Quién es de Canadá?",
        "opciones": [
          "La jefa",
          "El jefe",
          "El vecino",
          "La novia"
        ]
      }
    ],
    "lectura": {
      "titulo": "The people in my life",
      "texto": "Hi, I'm Lucas. I'm a student in Madrid. My roommate is Pedro. He's from Argentina and he's very funny. My classmates are great. They're from many different countries. My best friend is Yuki. She's from Japan. We're in the same class. My teacher is Mrs. Garcia. She's very patient. And this is Max, my cat. It's black and white.",
      "preguntas": [
        {
          "pregunta": "¿De dónde es Pedro?",
          "opciones": [
            "De Argentina",
            "De España",
            "De Japón",
            "De México"
          ]
        },
        {
          "pregunta": "¿Quién es Yuki?",
          "opciones": [
            "Su mejor amiga",
            "Su maestra",
            "Su compañera de cuarto",
            "Su hermana"
          ]
        },
        {
          "pregunta": "¿Cómo es la maestra?",
          "opciones": [
            "Muy paciente",
            "Muy divertida",
            "Muy seria",
            "Muy joven"
          ]
        },
        {
          "pregunta": "¿Qué es Max?",
          "opciones": [
            "Un gato",
            "Un perro",
            "Un compañero de clase",
            "Un maestro"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Escribe el pronombre que reemplaza a estas palabras.",
        "pregunta": "my mother",
        "respuestas": [
          "she"
        ]
      },
      {
        "instruccion": "Escribe el pronombre que reemplaza a estas palabras.",
        "pregunta": "Tom and Lisa",
        "respuestas": [
          "they"
        ]
      },
      {
        "instruccion": "Escribe el pronombre que reemplaza a estas palabras.",
        "pregunta": "the book",
        "respuestas": [
          "it"
        ]
      },
      {
        "instruccion": "Escribe el pronombre que reemplaza a estas palabras.",
        "pregunta": "my brother and I",
        "respuestas": [
          "we"
        ]
      },
      {
        "instruccion": "Escribe el pronombre que reemplaza a estas palabras.",
        "pregunta": "Mr. Lopez",
        "respuestas": [
          "he"
        ]
      },
      {
        "instruccion": "Completa con un pronombre.",
        "pregunta": "Ana and Luis are my cousins. ___ are from Peru.",
        "respuestas": [
          "They"
        ]
      },
      {
        "instruccion": "Completa con un pronombre.",
        "pregunta": "My phone is new. ___ is black.",
        "respuestas": [
          "It"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Somos vecinos.",
        "respuestas": [
          "We're neighbors",
          "We are neighbors",
          "We're neighbours",
          "We are neighbours"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Hace frío.",
        "respuestas": [
          "It's cold",
          "It is cold"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Ella es mi jefa.",
        "respuestas": [
          "She's my boss",
          "She is my boss"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "My sister is a nurse. ___ is thirty.",
        "opciones": [
          "She",
          "He",
          "It",
          "They"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Paul and I are friends. ___ are in the same class.",
        "opciones": [
          "We",
          "They",
          "You",
          "He"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "The books are on the desk. ___ are new.",
        "opciones": [
          "They",
          "It",
          "We",
          "He"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ is very hot today.",
        "opciones": [
          "It",
          "He",
          "She",
          "They"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Elige la oración correcta.",
        "opciones": [
          "My father is a doctor.",
          "My father he is a doctor.",
          "Is doctor my father.",
          "My father are a doctor."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Excuse me, are ___ Mrs. Taylor?",
        "opciones": [
          "you",
          "she",
          "her",
          "it"
        ]
      },
      {
        "tipo": "listening",
        "audio": "This is my roommate, Ben. He's from Scotland.",
        "pregunta": "¿Quién es Ben?",
        "opciones": [
          "Su compañero de cuarto",
          "Su jefe",
          "Su hermano",
          "Su vecino"
        ]
      },
      {
        "tipo": "listening",
        "audio": "My classmates and I are at the library. We're tired!",
        "pregunta": "¿Dónde están?",
        "opciones": [
          "En la biblioteca",
          "En el salón de clases",
          "En la cafetería",
          "En casa"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Escribe el pronombre que reemplaza a: my grandparents",
        "respuestas": [
          "they"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Él es mi vecino.",
        "respuestas": [
          "He's my neighbor",
          "He is my neighbor",
          "He's my neighbour",
          "He is my neighbour"
        ]
      }
    ]
  },
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
