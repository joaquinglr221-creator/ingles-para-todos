// Temas del nivel A1 (docs/plan-de-estudios.md). Los que todavía no tienen contenido solo llevan título.
// Partes de cada tema: explicación (español e inglés), vocabulario, ejemplos, listening, lectura,
// escritura y examen final. "grupos" (opcional) es vocabulario extra por temas, cada uno con su patrón de uso
// ("gruposTitulo" es el encabezado de esa sección).
// "frases" (opcional) son oraciones largas para practicar la pronunciación; "acepta" son otras formas
// válidas de decir una palabra al practicar la pronunciación (p. ej. "20" para twenty).
// "explicacion.video" (opcional) es un video con la explicación narrada (scripts/generar_video_explicacion.py).
// "ejemplo" (opcional) es una oración con la palabra: [inglés, español].
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
    "gruposTitulo": "Más vocabulario con *to be*",
    "explicacion": {
      "video": "videos/temas/a1-01-explicacion.mp4",
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
      { "en": "Hello", "es": "Hola", "imagen": "Una persona sonriendo y saludando con la mano", "ejemplo": ["Hello, I'm Carlos.", "Hola, soy Carlos."] },
      { "en": "Hi", "es": "Hola (informal)", "imagen": "Dos amigos jóvenes saludándose con la mano de forma casual", "ejemplo": ["Hi, are you Anna?", "Hola, ¿eres Anna?"] },
      { "en": "Good morning", "es": "Buenos días", "imagen": "Persona estirándose junto a una ventana con el sol saliendo", "ejemplo": ["Good morning, it's a beautiful day.", "Buenos días, es un día hermoso."] },
      { "en": "Good afternoon", "es": "Buenas tardes", "imagen": "Dos vecinos saludándose en la calle a media tarde", "ejemplo": ["Good afternoon, I'm your new neighbor.", "Buenas tardes, soy tu nuevo vecino."] },
      { "en": "Good evening", "es": "Buenas noches (al llegar)", "imagen": "Persona llegando a una cena por la noche y saludando", "ejemplo": ["Good evening, we are the Garcia family.", "Buenas noches, somos la familia García."] },
      { "en": "Good night", "es": "Buenas noches (al despedirse)", "imagen": "Niño en la cama despidiéndose antes de dormir, luna en la ventana", "ejemplo": ["Good night, I'm very tired.", "Buenas noches, estoy muy cansado."] },
      { "en": "Goodbye", "es": "Adiós", "imagen": "Persona en la puerta diciendo adiós con la mano", "ejemplo": ["Goodbye, you are very kind.", "Adiós, eres muy amable."] },
      { "en": "See you later", "es": "Hasta luego", "imagen": "Dos compañeros despidiéndose al salir del trabajo", "ejemplo": ["See you later, I'm late for work.", "Hasta luego, voy tarde al trabajo."] },
      { "en": "How are you?", "es": "¿Cómo estás?", "imagen": "Dos amigos encontrándose en la calle, uno pregunta con gesto amable", "ejemplo": ["How are you? I'm fine, thanks.", "¿Cómo estás? Estoy bien, gracias."] },
      { "en": "I'm fine, thank you", "es": "Estoy bien, gracias", "imagen": "Persona sonriente con el pulgar arriba", "ejemplo": ["I'm fine, thank you. And you?", "Estoy bien, gracias. ¿Y tú?"] },
      { "en": "My name is…", "es": "Me llamo…", "imagen": "Persona con un gafete de nombre, presentándose", "ejemplo": ["My name is Laura and I'm a nurse.", "Me llamo Laura y soy enfermera."] },
      { "en": "Nice to meet you", "es": "Mucho gusto", "imagen": "Dos personas dándose la mano al conocerse", "ejemplo": ["Nice to meet you, I'm Peter.", "Mucho gusto, soy Peter."] },
      { "en": "This is my friend", "es": "Te presento a mi amigo / amiga", "imagen": "Persona presentando a su amigo a otra persona", "ejemplo": ["This is my friend, Daniel. He's from Peru.", "Te presento a mi amigo Daniel. Es de Perú."] },
      { "en": "Where are you from?", "es": "¿De dónde eres?", "imagen": "Personas de distintos países junto a un globo terráqueo o mapa", "ejemplo": ["Where are you from? I'm from Chile.", "¿De dónde eres? Soy de Chile."] },
      { "en": "I'm from Mexico", "es": "Soy de México", "imagen": "Persona sonriendo junto a la bandera de México", "ejemplo": ["I'm from Mexico and my wife is from Spain.", "Soy de México y mi esposa es de España."] },
      { "en": "years old", "es": "años (de edad)", "imagen": "Pastel de cumpleaños con velas de números", "ejemplo": ["My daughter is ten years old.", "Mi hija tiene diez años."] }
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
          { "en": "happy", "es": "feliz, contento", "imagen": "Persona sonriendo ampliamente con los brazos abiertos", "ejemplo": ["I am happy today.", "Hoy estoy feliz."] },
          { "en": "sad", "es": "triste", "imagen": "Persona triste mirando por una ventana con lluvia", "ejemplo": ["She is sad because her dog is sick.", "Ella está triste porque su perro está enfermo."] },
          { "en": "angry", "es": "enojado", "imagen": "Persona enojada con el ceño fruncido y los brazos cruzados", "ejemplo": ["My boss is angry.", "Mi jefe está enojado."] },
          { "en": "tired", "es": "cansado", "imagen": "Persona bostezando en su escritorio", "ejemplo": ["We are tired after work.", "Estamos cansados después del trabajo."] },
          { "en": "bored", "es": "aburrido", "imagen": "Joven aburrido con la cabeza apoyada en la mano", "ejemplo": ["The children are bored.", "Los niños están aburridos."] },
          { "en": "excited", "es": "emocionado", "imagen": "Niños saltando de emoción", "ejemplo": ["I am excited about my trip.", "Estoy emocionado por mi viaje."] },
          { "en": "nervous", "es": "nervioso", "imagen": "Persona mordiéndose las uñas antes de una entrevista", "ejemplo": ["He is nervous before the exam.", "Él está nervioso antes del examen."] },
          { "en": "worried", "es": "preocupado", "imagen": "Persona preocupada mirando su celular con la mano en la frente", "ejemplo": ["My mother is worried about me.", "Mi mamá está preocupada por mí."] },
          { "en": "scared", "es": "asustado", "imagen": "Niño asustado escondido bajo una cobija", "ejemplo": ["The little boy is scared of dogs.", "El niño pequeño tiene miedo a los perros."] },
          { "en": "surprised", "es": "sorprendido", "imagen": "Persona sorprendida con la boca abierta al recibir un regalo", "ejemplo": ["She is surprised by the gift.", "Ella está sorprendida por el regalo."] },
          { "en": "proud", "es": "orgulloso", "imagen": "Padres orgullosos en la graduación de su hija", "ejemplo": ["My parents are proud of me.", "Mis papás están orgullosos de mí."] },
          { "en": "embarrassed", "es": "avergonzado, apenado", "imagen": "Persona sonrojada tapándose la cara con las manos", "ejemplo": ["I am embarrassed about my mistake.", "Estoy apenado por mi error."] },
          { "en": "lonely", "es": "solo, solitario", "imagen": "Persona sentada sola en una banca del parque", "ejemplo": ["My grandfather is lonely at home.", "Mi abuelo se siente solo en casa."] },
          { "en": "relaxed", "es": "relajado", "imagen": "Persona descansando en una hamaca", "ejemplo": ["We are relaxed on vacation.", "Estamos relajados en vacaciones."] },
          { "en": "stressed", "es": "estresado", "imagen": "Persona agobiada rodeada de papeles en la oficina", "ejemplo": ["My sister is stressed at work.", "Mi hermana está estresada en el trabajo."] },
          { "en": "confused", "es": "confundido", "imagen": "Persona rascándose la cabeza frente a un mapa", "ejemplo": ["I am confused by this question.", "Estoy confundido con esta pregunta."] },
          { "en": "calm", "es": "tranquilo", "imagen": "Persona meditando junto a un lago", "ejemplo": ["The teacher is always calm.", "El maestro siempre está tranquilo."] },
          { "en": "jealous", "es": "celoso", "imagen": "Niño mirando con celos el juguete de otro niño", "ejemplo": ["He is jealous of his brother.", "Él tiene celos de su hermano."] },
          { "en": "upset", "es": "molesto, disgustado", "imagen": "Persona molesta hablando por teléfono", "ejemplo": ["She is upset with her friend.", "Ella está molesta con su amiga."] },
          { "en": "hungry", "es": "con hambre (tener hambre)", "imagen": "Persona hambrienta mirando un plato de comida", "ejemplo": ["I am very hungry now.", "Ahora tengo mucha hambre."] },
          { "en": "thirsty", "es": "con sed (tener sed)", "imagen": "Persona sedienta bebiendo agua después de correr", "ejemplo": ["The kids are thirsty after the game.", "Los niños tienen sed después del juego."] },
          { "en": "sleepy", "es": "con sueño (tener sueño)", "imagen": "Niño con sueño frotándose los ojos", "ejemplo": ["The baby is sleepy.", "El bebé tiene sueño."] },
          { "en": "in love", "es": "enamorado", "imagen": "Pareja mirándose enamorada", "ejemplo": ["They are in love.", "Ellos están enamorados."] },
          { "en": "OK", "es": "bien", "imagen": "Persona haciendo la señal de OK con la mano", "ejemplo": ["Don't worry, I'm OK.", "No te preocupes, estoy bien."] }
        ]
      },
      {
        "id": "profesiones",
        "titulo": "Profesiones y oficios",
        "icono": "👩‍⚕️",
        "patron": ["I'm a teacher.", "He's an engineer.", "Is she a nurse?"],
        "palabras": [
          { "en": "a doctor", "es": "un doctor / una doctora", "imagen": "Doctora con bata blanca y estetoscopio", "ejemplo": ["My uncle is a doctor.", "Mi tío es doctor."] },
          { "en": "a nurse", "es": "un enfermero / una enfermera", "imagen": "Enfermero atendiendo a un paciente", "ejemplo": ["She is a nurse at the hospital.", "Ella es enfermera en el hospital."] },
          { "en": "a dentist", "es": "un dentista", "imagen": "Dentista revisando los dientes de un paciente", "ejemplo": ["My neighbor is a dentist.", "Mi vecino es dentista."] },
          { "en": "a pharmacist", "es": "un farmacéutico", "imagen": "Farmacéutica detrás del mostrador de una farmacia", "ejemplo": ["He is a pharmacist in my town.", "Él es farmacéutico en mi pueblo."] },
          { "en": "a vet", "es": "un veterinario", "imagen": "Veterinaria revisando a un perro", "ejemplo": ["My sister is a vet.", "Mi hermana es veterinaria."] },
          { "en": "a teacher", "es": "un maestro / una maestra", "imagen": "Maestra frente al pizarrón con sus alumnos", "ejemplo": ["Mrs. Lopez is a teacher.", "La señora López es maestra."] },
          { "en": "a student", "es": "un estudiante", "imagen": "Estudiante con mochila y libros", "ejemplo": ["I am a student at the university.", "Soy estudiante en la universidad."] },
          { "en": "an engineer", "es": "un ingeniero", "imagen": "Ingeniera con casco revisando planos en una obra", "ejemplo": ["My father is an engineer.", "Mi papá es ingeniero."] },
          { "en": "an architect", "es": "un arquitecto", "imagen": "Arquitecto con una maqueta de edificio", "ejemplo": ["She is an architect in Mexico City.", "Ella es arquitecta en la Ciudad de México."] },
          { "en": "a lawyer", "es": "un abogado", "imagen": "Abogada con traje y documentos en un tribunal", "ejemplo": ["My brother is a lawyer.", "Mi hermano es abogado."] },
          { "en": "an accountant", "es": "un contador", "imagen": "Contador con calculadora y facturas", "ejemplo": ["Mr. Ruiz is an accountant.", "El señor Ruiz es contador."] },
          { "en": "a secretary", "es": "un secretario / una secretaria", "imagen": "Secretaria organizando una agenda en la oficina", "ejemplo": ["She is a secretary at my school.", "Ella es secretaria en mi escuela."] },
          { "en": "a manager", "es": "un gerente", "imagen": "Gerente dirigiendo una reunión de equipo", "ejemplo": ["My friend is a manager at a bank.", "Mi amigo es gerente en un banco."] },
          { "en": "a businessman", "es": "un hombre de negocios", "imagen": "Hombre de negocios con maletín caminando por la ciudad", "ejemplo": ["He is a businessman from Japan.", "Él es un hombre de negocios de Japón."] },
          { "en": "a businesswoman", "es": "una mujer de negocios", "imagen": "Mujer de negocios hablando por teléfono en una oficina moderna", "ejemplo": ["My aunt is a businesswoman.", "Mi tía es una mujer de negocios."] },
          { "en": "a salesperson", "es": "un vendedor", "imagen": "Vendedor mostrando un producto a un cliente en una tienda", "ejemplo": ["He is a salesperson in a car store.", "Él es vendedor en una agencia de autos."] },
          { "en": "a cashier", "es": "un cajero", "imagen": "Cajera cobrando en el supermercado", "ejemplo": ["She is a cashier at the supermarket.", "Ella es cajera en el supermercado."] },
          { "en": "a cook", "es": "un cocinero", "imagen": "Cocinero preparando comida en una cocina", "ejemplo": ["My grandmother is a good cook.", "Mi abuela es buena cocinera."] },
          { "en": "a chef", "es": "un chef", "imagen": "Chef con gorro blanco decorando un platillo", "ejemplo": ["He is a chef in Paris.", "Él es chef en París."] },
          { "en": "a waiter", "es": "un mesero", "imagen": "Mesero llevando platos en un restaurante", "ejemplo": ["The waiter is very friendly.", "El mesero es muy amable."] },
          { "en": "a waitress", "es": "una mesera", "imagen": "Mesera tomando la orden en una cafetería", "ejemplo": ["My cousin is a waitress.", "Mi prima es mesera."] },
          { "en": "a police officer", "es": "un policía", "imagen": "Policía con uniforme en la calle", "ejemplo": ["She is a police officer.", "Ella es policía."] },
          { "en": "a firefighter", "es": "un bombero", "imagen": "Bombero con casco junto a un camión de bomberos", "ejemplo": ["My neighbor is a firefighter.", "Mi vecino es bombero."] },
          { "en": "a soldier", "es": "un soldado", "imagen": "Soldado con uniforme militar", "ejemplo": ["My son is a soldier.", "Mi hijo es soldado."] },
          { "en": "a security guard", "es": "un guardia de seguridad", "imagen": "Guardia de seguridad en la entrada de un edificio", "ejemplo": ["He is a security guard at the mall.", "Él es guardia de seguridad en el centro comercial."] },
          { "en": "a mechanic", "es": "un mecánico", "imagen": "Mecánico reparando el motor de un coche", "ejemplo": ["My brother is a mechanic.", "Mi hermano es mecánico."] },
          { "en": "an electrician", "es": "un electricista", "imagen": "Electricista revisando cables con herramientas", "ejemplo": ["He is an electrician.", "Él es electricista."] },
          { "en": "a plumber", "es": "un plomero", "imagen": "Plomero arreglando la tubería de un lavabo", "ejemplo": ["The plumber is at my house.", "El plomero está en mi casa."] },
          { "en": "a carpenter", "es": "un carpintero", "imagen": "Carpintero trabajando la madera en su taller", "ejemplo": ["My grandfather is a carpenter.", "Mi abuelo es carpintero."] },
          { "en": "a construction worker", "es": "un albañil, obrero de construcción", "imagen": "Obrero con casco y chaleco en una construcción", "ejemplo": ["My uncle is a construction worker.", "Mi tío es obrero de construcción."] },
          { "en": "a painter", "es": "un pintor", "imagen": "Pintor pintando una pared con rodillo", "ejemplo": ["She is a painter from Italy.", "Ella es pintora de Italia."] },
          { "en": "a gardener", "es": "un jardinero", "imagen": "Jardinero podando plantas en un jardín", "ejemplo": ["He is a gardener in the park.", "Él es jardinero en el parque."] },
          { "en": "a farmer", "es": "un granjero, agricultor", "imagen": "Agricultor en un campo de cultivo con su tractor", "ejemplo": ["My cousin is a farmer.", "Mi primo es agricultor."] },
          { "en": "a driver", "es": "un chofer, conductor", "imagen": "Conductor al volante de un autobús", "ejemplo": ["She is a bus driver.", "Ella es conductora de autobús."] },
          { "en": "a taxi driver", "es": "un taxista", "imagen": "Taxista sonriendo dentro de su taxi", "ejemplo": ["My father is a taxi driver.", "Mi papá es taxista."] },
          { "en": "a pilot", "es": "un piloto", "imagen": "Piloto con uniforme en la cabina de un avión", "ejemplo": ["My sister is a pilot.", "Mi hermana es piloto."] },
          { "en": "a flight attendant", "es": "un sobrecargo, azafata", "imagen": "Sobrecargo atendiendo a pasajeros en un avión", "ejemplo": ["She is a flight attendant.", "Ella es sobrecargo."] },
          { "en": "a hairdresser", "es": "un estilista, peluquero", "imagen": "Estilista cortando el cabello a una clienta", "ejemplo": ["My friend is a hairdresser.", "Mi amiga es estilista."] },
          { "en": "a barber", "es": "un barbero", "imagen": "Barbero afeitando a un cliente", "ejemplo": ["He is a barber on my street.", "Él es barbero en mi calle."] },
          { "en": "a cleaner", "es": "un trabajador de limpieza", "imagen": "Persona de limpieza trapeando un piso", "ejemplo": ["She is a cleaner at the school.", "Ella trabaja en la limpieza de la escuela."] },
          { "en": "a programmer", "es": "un programador", "imagen": "Programador escribiendo código en dos pantallas", "ejemplo": ["My brother is a programmer.", "Mi hermano es programador."] },
          { "en": "a designer", "es": "un diseñador", "imagen": "Diseñadora dibujando en una tableta digital", "ejemplo": ["She is a designer in New York.", "Ella es diseñadora en Nueva York."] },
          { "en": "a scientist", "es": "un científico", "imagen": "Científica con bata mirando por un microscopio", "ejemplo": ["He is a scientist from Germany.", "Él es científico de Alemania."] },
          { "en": "a journalist", "es": "un periodista", "imagen": "Periodista con micrófono entrevistando a alguien", "ejemplo": ["My wife is a journalist.", "Mi esposa es periodista."] },
          { "en": "a photographer", "es": "un fotógrafo", "imagen": "Fotógrafo tomando fotos con una cámara profesional", "ejemplo": ["He is a wedding photographer.", "Él es fotógrafo de bodas."] },
          { "en": "a musician", "es": "un músico", "imagen": "Músico tocando la guitarra en un escenario", "ejemplo": ["My son is a musician.", "Mi hijo es músico."] },
          { "en": "a singer", "es": "un cantante", "imagen": "Cantante con micrófono en un concierto", "ejemplo": ["She is a famous singer.", "Ella es una cantante famosa."] },
          { "en": "an actor", "es": "un actor", "imagen": "Actor actuando en un escenario de teatro", "ejemplo": ["He is an actor from Canada.", "Él es un actor de Canadá."] },
          { "en": "an artist", "es": "un artista", "imagen": "Artista pintando un cuadro con pinceles", "ejemplo": ["My daughter is an artist.", "Mi hija es artista."] },
          { "en": "a writer", "es": "un escritor", "imagen": "Escritora escribiendo en su computadora rodeada de libros", "ejemplo": ["She is a writer from Colombia.", "Ella es escritora de Colombia."] },
          { "en": "a baker", "es": "un panadero", "imagen": "Panadero sacando pan del horno", "ejemplo": ["The baker is very busy today.", "El panadero está muy ocupado hoy."] },
          { "en": "a butcher", "es": "un carnicero", "imagen": "Carnicero cortando carne en su carnicería", "ejemplo": ["My neighbor is a butcher.", "Mi vecino es carnicero."] },
          { "en": "a tailor", "es": "un sastre", "imagen": "Sastre tomando medidas con una cinta métrica", "ejemplo": ["My grandfather is a tailor.", "Mi abuelo es sastre."] },
          { "en": "a mail carrier", "es": "un cartero", "imagen": "Cartero entregando cartas en una casa", "ejemplo": ["The mail carrier is at the door.", "El cartero está en la puerta."] },
          { "en": "a babysitter", "es": "una niñera", "imagen": "Niñera jugando con un niño pequeño", "ejemplo": ["She is a babysitter on weekends.", "Ella es niñera los fines de semana."] },
          { "en": "a homemaker", "es": "ama / amo de casa", "imagen": "Persona cocinando en casa con sus hijos", "ejemplo": ["My mother is a homemaker.", "Mi mamá es ama de casa."] },
          { "en": "retired", "es": "jubilado", "imagen": "Pareja de jubilados descansando en el jardín", "ejemplo": ["My parents are retired.", "Mis papás están jubilados."] },
          { "en": "unemployed", "es": "desempleado", "imagen": "Persona leyendo anuncios de empleo en el periódico", "ejemplo": ["My cousin is unemployed now.", "Mi primo está desempleado ahora."] }
        ]
      },
      {
        "id": "salud",
        "titulo": "Enfermedades y padecimientos",
        "icono": "🤒",
        "patron": ["I'm sick.", "He's allergic to cats.", "My leg is broken."],
        "palabras": [
          { "en": "I'm sick.", "es": "Estoy enfermo.", "imagen": "Persona enferma en la cama con un termómetro", "ejemplo": ["I'm sick today.", "Hoy estoy enfermo."] },
          { "en": "I'm ill.", "es": "Estoy enfermo (más formal).", "imagen": "Persona pálida envuelta en una cobija en el sofá", "ejemplo": ["I'm ill and I'm at home.", "Estoy enfermo y estoy en casa."] },
          { "en": "I'm dizzy.", "es": "Estoy mareado.", "imagen": "Persona mareada tocándose la cabeza", "ejemplo": ["I'm dizzy because it's very hot.", "Estoy mareado porque hace mucho calor."] },
          { "en": "I'm nauseous.", "es": "Tengo náuseas.", "imagen": "Persona con náuseas tapándose la boca", "ejemplo": ["I'm nauseous on the bus.", "Tengo náuseas en el autobús."] },
          { "en": "I'm feverish.", "es": "Tengo fiebre, estoy afiebrado.", "imagen": "Persona con un paño húmedo en la frente", "ejemplo": ["I'm feverish and very tired.", "Tengo fiebre y estoy muy cansado."] },
          { "en": "I'm congested.", "es": "Estoy congestionado.", "imagen": "Persona con la nariz tapada sonándose con un pañuelo", "ejemplo": ["I'm congested because of my cold.", "Estoy congestionado por mi resfriado."] },
          { "en": "I'm in pain.", "es": "Tengo dolor.", "imagen": "Persona con gesto de dolor sujetándose el estómago", "ejemplo": ["I'm in pain, doctor.", "Tengo dolor, doctor."] },
          { "en": "I'm hurt.", "es": "Estoy lastimado.", "imagen": "Niño con una curita en la rodilla", "ejemplo": ["I'm hurt, but it's not serious.", "Estoy lastimado, pero no es grave."] },
          { "en": "He's injured.", "es": "Él está herido.", "imagen": "Futbolista lesionado en el campo atendido por un médico", "ejemplo": ["He's injured after the game.", "Él está herido después del partido."] },
          { "en": "I'm allergic to cats.", "es": "Soy alérgico a los gatos.", "imagen": "Persona estornudando junto a un gato", "ejemplo": ["I'm allergic to cats and dogs.", "Soy alérgico a los gatos y a los perros."] },
          { "en": "She's pregnant.", "es": "Ella está embarazada.", "imagen": "Mujer embarazada sonriendo con la mano en el vientre", "ejemplo": ["She's pregnant and very happy.", "Ella está embarazada y muy feliz."] },
          { "en": "He's diabetic.", "es": "Él es diabético.", "imagen": "Persona midiéndose el azúcar con un glucómetro", "ejemplo": ["He's diabetic, so he's careful with sugar.", "Él es diabético, así que tiene cuidado con el azúcar."] },
          { "en": "I'm asthmatic.", "es": "Soy asmático.", "imagen": "Persona usando un inhalador", "ejemplo": ["I'm asthmatic, but I'm fine today.", "Soy asmático, pero hoy estoy bien."] },
          { "en": "I'm dehydrated.", "es": "Estoy deshidratado.", "imagen": "Persona acalorada y sedienta bajo el sol", "ejemplo": ["I'm dehydrated and very thirsty.", "Estoy deshidratado y tengo mucha sed."] },
          { "en": "I'm sunburned.", "es": "Estoy quemado por el sol.", "imagen": "Persona con la piel roja por el sol en la playa", "ejemplo": ["I'm sunburned after the beach.", "Estoy quemado por el sol después de la playa."] },
          { "en": "I'm exhausted.", "es": "Estoy agotado.", "imagen": "Persona agotada tirada en el sofá", "ejemplo": ["I'm exhausted after a long day.", "Estoy agotado después de un día largo."] },
          { "en": "I'm weak.", "es": "Estoy débil.", "imagen": "Persona débil apoyándose en la pared", "ejemplo": ["I'm weak because I'm sick.", "Estoy débil porque estoy enfermo."] },
          { "en": "My throat is sore.", "es": "Me duele la garganta.", "imagen": "Persona tocándose la garganta con dolor", "ejemplo": ["My throat is sore and I'm tired.", "Me duele la garganta y estoy cansado."] },
          { "en": "My leg is broken.", "es": "Tengo la pierna rota.", "imagen": "Persona con la pierna enyesada usando muletas", "ejemplo": ["My leg is broken, so I'm at home.", "Tengo la pierna rota, así que estoy en casa."] },
          { "en": "My ankle is swollen.", "es": "Tengo el tobillo hinchado.", "imagen": "Tobillo hinchado con una bolsa de hielo encima", "ejemplo": ["My ankle is swollen and it's red.", "Tengo el tobillo hinchado y está rojo."] },
          { "en": "My eyes are red.", "es": "Tengo los ojos rojos.", "imagen": "Persona con los ojos rojos e irritados", "ejemplo": ["My eyes are red and I'm tired.", "Tengo los ojos rojos y estoy cansado."] },
          { "en": "My stomach is upset.", "es": "Tengo el estómago revuelto.", "imagen": "Persona con malestar de estómago sosteniéndose el abdomen", "ejemplo": ["My stomach is upset today.", "Hoy tengo el estómago revuelto."] },
          { "en": "My back is stiff.", "es": "Tengo la espalda tiesa.", "imagen": "Persona con dolor de espalda tocándose la parte baja", "ejemplo": ["My back is stiff in the morning.", "Tengo la espalda tiesa por la mañana."] },
          { "en": "I'm better now.", "es": "Ya estoy mejor.", "imagen": "Persona sonriente levantándose de la cama recuperada", "ejemplo": ["I'm better now, thank you.", "Ya estoy mejor, gracias."] },
          { "en": "I'm healthy.", "es": "Estoy sano.", "imagen": "Persona sana corriendo en el parque", "ejemplo": ["I'm healthy and I'm happy.", "Estoy sano y estoy feliz."] }
        ]
      },
      {
        "id": "clima",
        "titulo": "El clima",
        "icono": "🌤️",
        "patron": ["It's sunny.", "It's cold today.", "Is it hot in Mexico?"],
        "palabras": [
          { "en": "sunny", "es": "soleado", "imagen": "Cielo azul con un sol brillante sobre una playa", "ejemplo": ["It's sunny today.", "Hoy está soleado."] },
          { "en": "cloudy", "es": "nublado", "imagen": "Cielo gris cubierto de nubes sobre la ciudad", "ejemplo": ["It's cloudy this morning.", "Esta mañana está nublado."] },
          { "en": "rainy", "es": "lluvioso", "imagen": "Calle mojada con personas con paraguas bajo la lluvia", "ejemplo": ["It's rainy in April.", "En abril está lluvioso."] },
          { "en": "windy", "es": "con viento", "imagen": "Árboles doblándose por el viento y una persona sujetando su sombrero", "ejemplo": ["It's very windy at the beach.", "Hace mucho viento en la playa."] },
          { "en": "snowy", "es": "con nieve", "imagen": "Paisaje cubierto de nieve con un muñeco de nieve", "ejemplo": ["It's snowy in Canada.", "En Canadá está nevado."] },
          { "en": "foggy", "es": "con niebla", "imagen": "Carretera cubierta de niebla espesa", "ejemplo": ["It's foggy on the road.", "Hay niebla en la carretera."] },
          { "en": "stormy", "es": "tormentoso", "imagen": "Rayos en un cielo oscuro de tormenta", "ejemplo": ["It's stormy tonight.", "Esta noche hay tormenta."] },
          { "en": "hot", "es": "caluroso (hace calor)", "imagen": "Persona sudando bajo un sol intenso", "ejemplo": ["It's very hot in summer.", "En verano hace mucho calor."] },
          { "en": "warm", "es": "templado, cálido", "imagen": "Familia de picnic en un día agradable de primavera", "ejemplo": ["It's warm in the afternoon.", "Por la tarde está templado."] },
          { "en": "cool", "es": "fresco", "imagen": "Persona con suéter ligero caminando en otoño", "ejemplo": ["It's cool at night.", "Por la noche está fresco."] },
          { "en": "cold", "es": "frío (hace frío)", "imagen": "Persona con abrigo, bufanda y gorro temblando de frío", "ejemplo": ["It's cold in January.", "En enero hace frío."] },
          { "en": "freezing", "es": "helado, muy frío", "imagen": "Lago congelado y árboles cubiertos de hielo", "ejemplo": ["It's freezing outside.", "Afuera hace muchísimo frío."] },
          { "en": "humid", "es": "húmedo", "imagen": "Selva tropical con vapor en el aire", "ejemplo": ["It's humid in the jungle.", "En la selva está húmedo."] },
          { "en": "dry", "es": "seco", "imagen": "Desierto con tierra agrietada", "ejemplo": ["It's dry in the desert.", "En el desierto está seco."] },
          { "en": "nice", "es": "agradable, bonito", "imagen": "Parque verde en un día perfecto", "ejemplo": ["It's a nice day.", "Es un día agradable."] },
          { "en": "It's twenty degrees.", "es": "Hace veinte grados.", "imagen": "Termómetro marcando veinte grados", "ejemplo": ["It's twenty degrees in the morning.", "Por la mañana hace veinte grados."] }
        ]
      },
      {
        "id": "fisico",
        "titulo": "Descripción física",
        "icono": "🧍",
        "patron": ["He's tall.", "She's young.", "They're very strong."],
        "palabras": [
          { "en": "tall", "es": "alto", "imagen": "Hombre muy alto junto a una puerta", "ejemplo": ["My brother is very tall.", "Mi hermano es muy alto."] },
          { "en": "short", "es": "bajo, chaparro", "imagen": "Persona bajita junto a una persona alta", "ejemplo": ["My grandmother is short.", "Mi abuela es bajita."] },
          { "en": "thin", "es": "delgado", "imagen": "Persona delgada con ropa deportiva", "ejemplo": ["The model is very thin.", "La modelo es muy delgada."] },
          { "en": "big", "es": "grande, corpulento", "imagen": "Hombre grande y corpulento sonriendo", "ejemplo": ["The man at the door is big.", "El hombre de la puerta es corpulento."] },
          { "en": "young", "es": "joven", "imagen": "Grupo de jóvenes riendo", "ejemplo": ["My teacher is young.", "Mi maestro es joven."] },
          { "en": "old", "es": "viejo, mayor", "imagen": "Señora mayor sonriendo con su bastón", "ejemplo": ["My grandfather is old but strong.", "Mi abuelo es mayor pero fuerte."] },
          { "en": "beautiful", "es": "hermosa, hermoso", "imagen": "Mujer elegante sonriendo", "ejemplo": ["Your mother is beautiful.", "Tu mamá es hermosa."] },
          { "en": "handsome", "es": "guapo", "imagen": "Hombre guapo con traje", "ejemplo": ["He is very handsome.", "Él es muy guapo."] },
          { "en": "pretty", "es": "bonita, linda", "imagen": "Niña bonita con flores en el cabello", "ejemplo": ["Your daughter is pretty.", "Tu hija es bonita."] },
          { "en": "cute", "es": "lindo, tierno", "imagen": "Bebé tierno sonriendo", "ejemplo": ["The baby is so cute.", "El bebé es muy tierno."] },
          { "en": "strong", "es": "fuerte", "imagen": "Persona levantando pesas en el gimnasio", "ejemplo": ["My father is very strong.", "Mi papá es muy fuerte."] },
          { "en": "blond", "es": "rubio", "imagen": "Persona con cabello rubio", "ejemplo": ["Her sister is blond.", "Su hermana es rubia."] },
          { "en": "dark-haired", "es": "de cabello oscuro", "imagen": "Persona con cabello negro y largo", "ejemplo": ["My wife is dark-haired.", "Mi esposa es de cabello oscuro."] },
          { "en": "bald", "es": "calvo", "imagen": "Hombre calvo sonriendo", "ejemplo": ["My uncle is bald.", "Mi tío es calvo."] }
        ]
      },
      {
        "id": "personalidad",
        "titulo": "Personalidad",
        "icono": "🙂",
        "patron": ["She's very kind.", "He's funny.", "Are they shy?"],
        "palabras": [
          { "en": "kind", "es": "amable", "imagen": "Joven ayudando a una anciana a cruzar la calle", "ejemplo": ["Your parents are very kind.", "Tus papás son muy amables."] },
          { "en": "friendly", "es": "amigable", "imagen": "Persona saludando sonriente a sus vecinos", "ejemplo": ["Our neighbors are friendly.", "Nuestros vecinos son amigables."] },
          { "en": "funny", "es": "gracioso, chistoso", "imagen": "Persona haciendo reír a sus amigos", "ejemplo": ["My best friend is funny.", "Mi mejor amigo es gracioso."] },
          { "en": "shy", "es": "tímido", "imagen": "Niña tímida escondida detrás de su mamá", "ejemplo": ["The new student is shy.", "El estudiante nuevo es tímido."] },
          { "en": "smart", "es": "inteligente, listo", "imagen": "Estudiante resolviendo un problema en el pizarrón", "ejemplo": ["Your son is very smart.", "Tu hijo es muy inteligente."] },
          { "en": "lazy", "es": "flojo, perezoso", "imagen": "Persona tirada en el sofá con el control remoto", "ejemplo": ["My cat is lazy.", "Mi gato es flojo."] },
          { "en": "hardworking", "es": "trabajador", "imagen": "Persona trabajando con dedicación en su escritorio", "ejemplo": ["My mother is hardworking.", "Mi mamá es muy trabajadora."] },
          { "en": "polite", "es": "educado, cortés", "imagen": "Joven abriendo la puerta a otra persona", "ejemplo": ["The children are very polite.", "Los niños son muy educados."] },
          { "en": "rude", "es": "grosero", "imagen": "Persona empujando para pasar en una fila", "ejemplo": ["That man is rude.", "Ese hombre es grosero."] },
          { "en": "honest", "es": "honesto", "imagen": "Persona devolviendo una cartera perdida", "ejemplo": ["My boss is an honest person.", "Mi jefe es una persona honesta."] },
          { "en": "patient", "es": "paciente", "imagen": "Maestro explicando con calma a un niño", "ejemplo": ["Our teacher is patient.", "Nuestro maestro es paciente."] },
          { "en": "generous", "es": "generoso", "imagen": "Persona compartiendo su comida con otros", "ejemplo": ["My aunt is very generous.", "Mi tía es muy generosa."] },
          { "en": "serious", "es": "serio", "imagen": "Persona seria con los brazos cruzados", "ejemplo": ["My father is a serious man.", "Mi papá es un hombre serio."] },
          { "en": "quiet", "es": "callado, tranquilo", "imagen": "Persona leyendo en silencio en una biblioteca", "ejemplo": ["My sister is quiet.", "Mi hermana es callada."] },
          { "en": "talkative", "es": "platicador", "imagen": "Persona hablando animadamente con sus amigos", "ejemplo": ["My friends are talkative.", "Mis amigos son platicadores."] },
          { "en": "brave", "es": "valiente", "imagen": "Niño valiente saltando a la alberca", "ejemplo": ["Firefighters are brave.", "Los bomberos son valientes."] }
        ]
      },
      {
        "id": "nacionalidades",
        "titulo": "Nacionalidades",
        "icono": "🌎",
        "patron": ["I'm Mexican.", "Is she Canadian?", "They're Brazilian."],
        "palabras": [
          { "en": "Mexican", "es": "mexicano", "imagen": "Bandera de México ondeando", "ejemplo": ["My husband is Mexican.", "Mi esposo es mexicano."] },
          { "en": "American", "es": "estadounidense", "imagen": "Bandera de Estados Unidos ondeando", "ejemplo": ["Our teacher is American.", "Nuestro maestro es estadounidense."] },
          { "en": "Canadian", "es": "canadiense", "imagen": "Bandera de Canadá ondeando", "ejemplo": ["My neighbors are Canadian.", "Mis vecinos son canadienses."] },
          { "en": "Guatemalan", "es": "guatemalteco", "imagen": "Bandera de Guatemala ondeando", "ejemplo": ["My friend Ana is Guatemalan.", "Mi amiga Ana es guatemalteca."] },
          { "en": "Cuban", "es": "cubano", "imagen": "Bandera de Cuba ondeando", "ejemplo": ["The singer is Cuban.", "El cantante es cubano."] },
          { "en": "Colombian", "es": "colombiano", "imagen": "Bandera de Colombia ondeando", "ejemplo": ["My roommate is Colombian.", "Mi compañero de cuarto es colombiano."] },
          { "en": "Venezuelan", "es": "venezolano", "imagen": "Bandera de Venezuela ondeando", "ejemplo": ["Her parents are Venezuelan.", "Sus papás son venezolanos."] },
          { "en": "Peruvian", "es": "peruano", "imagen": "Bandera de Perú ondeando", "ejemplo": ["The chef is Peruvian.", "El chef es peruano."] },
          { "en": "Chilean", "es": "chileno", "imagen": "Bandera de Chile ondeando", "ejemplo": ["My coworker is Chilean.", "Mi compañero de trabajo es chileno."] },
          { "en": "Argentinian", "es": "argentino", "imagen": "Bandera de Argentina ondeando", "ejemplo": ["The soccer player is Argentinian.", "El futbolista es argentino."] },
          { "en": "Brazilian", "es": "brasileño", "imagen": "Bandera de Brasil ondeando", "ejemplo": ["My best friend is Brazilian.", "Mi mejor amigo es brasileño."] },
          { "en": "Spanish", "es": "español", "imagen": "Bandera de España ondeando", "ejemplo": ["Our doctor is Spanish.", "Nuestro doctor es español."] },
          { "en": "British", "es": "británico", "imagen": "Bandera del Reino Unido ondeando", "ejemplo": ["The actor is British.", "El actor es británico."] },
          { "en": "French", "es": "francés", "imagen": "Bandera de Francia ondeando", "ejemplo": ["My teacher is French.", "Mi maestra es francesa."] },
          { "en": "German", "es": "alemán", "imagen": "Bandera de Alemania ondeando", "ejemplo": ["This car is German.", "Este coche es alemán."] },
          { "en": "Italian", "es": "italiano", "imagen": "Bandera de Italia ondeando", "ejemplo": ["The restaurant is Italian.", "El restaurante es italiano."] },
          { "en": "Chinese", "es": "chino", "imagen": "Bandera de China ondeando", "ejemplo": ["My classmate is Chinese.", "Mi compañero de clase es chino."] },
          { "en": "Japanese", "es": "japonés", "imagen": "Bandera de Japón ondeando", "ejemplo": ["The students are Japanese.", "Los estudiantes son japoneses."] },
          { "en": "Korean", "es": "coreano", "imagen": "Bandera de Corea del Sur ondeando", "ejemplo": ["My favorite singer is Korean.", "Mi cantante favorito es coreano."] },
          { "en": "Indian", "es": "indio (de la India)", "imagen": "Bandera de la India ondeando", "ejemplo": ["The engineer is Indian.", "El ingeniero es indio."] }
        ]
      },
      {
        "id": "estados",
        "titulo": "Estados y situaciones",
        "icono": "📍",
        "patron": ["I'm busy.", "We're late!", "Is he at home?"],
        "palabras": [
          { "en": "busy", "es": "ocupado", "imagen": "Persona ocupada hablando por teléfono y escribiendo a la vez", "ejemplo": ["I am very busy today.", "Hoy estoy muy ocupado."] },
          { "en": "free", "es": "libre, desocupado", "imagen": "Persona relajada con la agenda vacía", "ejemplo": ["Are you free on Saturday?", "¿Estás libre el sábado?"] },
          { "en": "late", "es": "tarde, retrasado", "imagen": "Persona corriendo para alcanzar el autobús", "ejemplo": ["Sorry, I am late.", "Perdón, llego tarde."] },
          { "en": "early", "es": "temprano", "imagen": "Persona llegando a una oficina vacía al amanecer", "ejemplo": ["We are early for class.", "Llegamos temprano a clase."] },
          { "en": "on time", "es": "a tiempo, puntual", "imagen": "Persona llegando justo a tiempo mirando su reloj", "ejemplo": ["The bus is on time.", "El autobús llega a tiempo."] },
          { "en": "ready", "es": "listo", "imagen": "Persona con la maleta en la puerta lista para salir", "ejemplo": ["Are you ready? Yes, I am.", "¿Estás listo? Sí."] },
          { "en": "at home", "es": "en casa", "imagen": "Familia en la sala de su casa", "ejemplo": ["My parents are at home.", "Mis papás están en casa."] },
          { "en": "at work", "es": "en el trabajo", "imagen": "Persona trabajando en su oficina", "ejemplo": ["My wife is at work now.", "Mi esposa está en el trabajo ahora."] },
          { "en": "at school", "es": "en la escuela", "imagen": "Niños en el patio de la escuela", "ejemplo": ["The children are at school.", "Los niños están en la escuela."] },
          { "en": "here", "es": "aquí", "imagen": "Persona levantando la mano diciendo presente", "ejemplo": ["I am here with my family.", "Estoy aquí con mi familia."] },
          { "en": "right", "es": "en lo correcto (tener razón)", "imagen": "Persona señalando una respuesta correcta con una palomita verde", "ejemplo": ["You are right.", "Tienes razón."] },
          { "en": "wrong", "es": "equivocado", "imagen": "Persona apenada junto a una cruz roja", "ejemplo": ["Sorry, I am wrong.", "Perdón, estoy equivocado."] },
          { "en": "sure", "es": "seguro", "imagen": "Persona segura de sí misma con el pulgar arriba", "ejemplo": ["Are you sure?", "¿Estás seguro?"] },
          { "en": "lucky", "es": "afortunado, con suerte", "imagen": "Persona encontrando un trébol de cuatro hojas", "ejemplo": ["We are very lucky.", "Tenemos mucha suerte."] },
          { "en": "alone", "es": "solo, sin compañía", "imagen": "Persona caminando sola en una playa", "ejemplo": ["She is alone in the house.", "Ella está sola en la casa."] },
          { "en": "awake", "es": "despierto", "imagen": "Persona despierta en la cama de noche mirando el techo", "ejemplo": ["The baby is awake.", "El bebé está despierto."] },
          { "en": "asleep", "es": "dormido", "imagen": "Bebé dormido en su cuna", "ejemplo": ["My father is asleep on the sofa.", "Mi papá está dormido en el sofá."] },
          { "en": "open", "es": "abierto", "imagen": "Tienda con la puerta abierta", "ejemplo": ["The store is open today.", "La tienda está abierta hoy."] },
          { "en": "closed", "es": "cerrado", "imagen": "Tienda con la cortina metálica cerrada", "ejemplo": ["The bank is closed on Sunday.", "El banco está cerrado el domingo."] }
        ]
      },
      {
        "id": "dias",
        "titulo": "Días de la semana",
        "icono": "📅",
        "patron": ["Today is Monday.", "It's Friday!", "Is it Sunday today?"],
        "palabras": [
          { "en": "Monday", "es": "lunes", "imagen": "Persona con su café caminando a la oficina al empezar la semana", "ejemplo": ["Today is Monday.", "Hoy es lunes."] },
          { "en": "Tuesday", "es": "martes", "imagen": "Persona en clase de yoga una tarde entre semana", "ejemplo": ["My class is on Tuesday.", "Mi clase es el martes."] },
          { "en": "Wednesday", "es": "miércoles", "imagen": "Persona trabajando concentrada en su escritorio a mitad de semana", "ejemplo": ["The exam is on Wednesday.", "El examen es el miércoles."] },
          { "en": "Thursday", "es": "jueves", "imagen": "Amigos en una clase de baile por la tarde", "ejemplo": ["Tomorrow is Thursday.", "Mañana es jueves."] },
          { "en": "Friday", "es": "viernes", "imagen": "Compañeros de trabajo celebrando el fin de la semana laboral", "ejemplo": ["Friday is my favorite day.", "El viernes es mi día favorito."] },
          { "en": "Saturday", "es": "sábado", "imagen": "Familia de paseo en bicicleta en el parque", "ejemplo": ["The party is on Saturday.", "La fiesta es el sábado."] },
          { "en": "Sunday", "es": "domingo", "imagen": "Familia desayunando tranquila en casa", "ejemplo": ["We are at home on Sunday.", "El domingo estamos en casa."] }
        ]
      },
      {
        "id": "meses",
        "titulo": "Meses del año",
        "icono": "🗓️",
        "patron": ["It's January.", "My birthday is in May.", "Is your birthday in June?"],
        "palabras": [
          { "en": "January", "es": "enero", "imagen": "Fuegos artificiales de Año Nuevo en el cielo", "ejemplo": ["January is very cold.", "Enero es muy frío."] },
          { "en": "February", "es": "febrero", "imagen": "Pareja con globos de corazón el Día del Amor", "ejemplo": ["February is a short month.", "Febrero es un mes corto."] },
          { "en": "March", "es": "marzo", "imagen": "Árboles empezando a florecer", "ejemplo": ["My birthday is in March.", "Mi cumpleaños es en marzo."] },
          { "en": "April", "es": "abril", "imagen": "Personas con paraguas bajo una lluvia de primavera", "ejemplo": ["April is rainy here.", "Abril es lluvioso aquí."] },
          { "en": "May", "es": "mayo", "imagen": "Campo lleno de flores de colores", "ejemplo": ["May is a beautiful month.", "Mayo es un mes hermoso."] },
          { "en": "June", "es": "junio", "imagen": "Graduados lanzando sus birretes al aire", "ejemplo": ["School is over in June.", "La escuela termina en junio."] },
          { "en": "July", "es": "julio", "imagen": "Familia jugando en la playa en verano", "ejemplo": ["July is very hot.", "Julio es muy caluroso."] },
          { "en": "August", "es": "agosto", "imagen": "Niños comiendo helado en un día caluroso", "ejemplo": ["We are on vacation in August.", "En agosto estamos de vacaciones."] },
          { "en": "September", "es": "septiembre", "imagen": "Niños regresando a la escuela con sus mochilas", "ejemplo": ["The new class is in September.", "La clase nueva es en septiembre."] },
          { "en": "October", "es": "octubre", "imagen": "Calabazas y hojas de otoño", "ejemplo": ["October is my favorite month.", "Octubre es mi mes favorito."] },
          { "en": "November", "es": "noviembre", "imagen": "Hojas secas cayendo en un parque", "ejemplo": ["It's cool in November.", "En noviembre está fresco."] },
          { "en": "December", "es": "diciembre", "imagen": "Árbol de Navidad decorado con nieve afuera de la ventana", "ejemplo": ["Christmas is in December.", "La Navidad es en diciembre."] }
        ]
      },
      {
        "id": "estaciones",
        "titulo": "Estaciones del año",
        "icono": "🍂",
        "patron": ["It's summer.", "Winter is cold.", "Spring is beautiful."],
        "palabras": [
          { "en": "spring", "es": "primavera", "imagen": "Parque con flores y árboles verdes en primavera", "ejemplo": ["Spring is beautiful.", "La primavera es hermosa."] },
          { "en": "summer", "es": "verano", "imagen": "Playa soleada con sombrillas en verano", "ejemplo": ["Summer is hot.", "El verano es caluroso."] },
          { "en": "fall", "es": "otoño (inglés de EE. UU.)", "imagen": "Árboles con hojas naranjas y rojas en otoño", "ejemplo": ["Fall is my favorite season.", "El otoño es mi estación favorita."] },
          { "en": "autumn", "es": "otoño (inglés británico)", "imagen": "Camino cubierto de hojas secas de otoño", "ejemplo": ["Autumn is very colorful.", "El otoño es muy colorido."] },
          { "en": "winter", "es": "invierno", "imagen": "Paisaje nevado con personas abrigadas en invierno", "ejemplo": ["Winter is cold.", "El invierno es frío."] }
        ]
      },
      {
        "id": "cardinales",
        "titulo": "Números cardinales",
        "icono": "🔢",
        "patron": ["I'm twenty.", "We are five.", "My son is eight years old."],
        "palabras": [
          { "en": "zero", "es": "cero (0)", "imagen": "Número 0 grande y colorido", "acepta": ["0", "oh"], "ejemplo": ["It's zero degrees today.", "Hoy hace cero grados."] },
          { "en": "one", "es": "uno (1)", "imagen": "Número 1 grande y colorido", "acepta": ["1"], "ejemplo": ["My baby is one year old.", "Mi bebé tiene un año."] },
          { "en": "two", "es": "dos (2)", "imagen": "Número 2 grande y colorido", "acepta": ["2"], "ejemplo": ["My son is two.", "Mi hijo tiene dos años."] },
          { "en": "three", "es": "tres (3)", "imagen": "Número 3 grande y colorido", "acepta": ["3"], "ejemplo": ["We are three brothers.", "Somos tres hermanos."] },
          { "en": "four", "es": "cuatro (4)", "imagen": "Número 4 grande y colorido", "acepta": ["4"], "ejemplo": ["We are four in my family.", "En mi familia somos cuatro."] },
          { "en": "five", "es": "cinco (5)", "imagen": "Número 5 grande y colorido", "acepta": ["5"], "ejemplo": ["It's five o'clock.", "Son las cinco."] },
          { "en": "six", "es": "seis (6)", "imagen": "Número 6 grande y colorido", "acepta": ["6"], "ejemplo": ["My daughter is six.", "Mi hija tiene seis años."] },
          { "en": "seven", "es": "siete (7)", "imagen": "Número 7 grande y colorido", "acepta": ["7"], "ejemplo": ["It's seven in the morning.", "Son las siete de la mañana."] },
          { "en": "eight", "es": "ocho (8)", "imagen": "Número 8 grande y colorido", "acepta": ["8"], "ejemplo": ["My son is eight years old.", "Mi hijo tiene ocho años."] },
          { "en": "nine", "es": "nueve (9)", "imagen": "Número 9 grande y colorido", "acepta": ["9"], "ejemplo": ["It's nine o'clock.", "Son las nueve."] },
          { "en": "ten", "es": "diez (10)", "imagen": "Número 10 grande y colorido", "acepta": ["10"], "ejemplo": ["The coffee is ten pesos.", "El café cuesta diez pesos."] },
          { "en": "eleven", "es": "once (11)", "imagen": "Número 11 grande y colorido", "acepta": ["11"], "ejemplo": ["My brother is eleven.", "Mi hermano tiene once años."] },
          { "en": "twelve", "es": "doce (12)", "imagen": "Número 12 grande y colorido", "acepta": ["12"], "ejemplo": ["It's twelve o'clock.", "Son las doce."] },
          { "en": "thirteen", "es": "trece (13)", "imagen": "Número 13 grande y colorido", "acepta": ["13"], "ejemplo": ["My sister is thirteen.", "Mi hermana tiene trece años."] },
          { "en": "fourteen", "es": "catorce (14)", "imagen": "Número 14 grande y colorido", "acepta": ["14"], "ejemplo": ["The boys are fourteen.", "Los niños tienen catorce años."] },
          { "en": "fifteen", "es": "quince (15)", "imagen": "Número 15 grande y colorido", "acepta": ["15"], "ejemplo": ["My cousin is fifteen.", "Mi prima tiene quince años."] },
          { "en": "sixteen", "es": "dieciséis (16)", "imagen": "Número 16 grande y colorido", "acepta": ["16"], "ejemplo": ["The student is sixteen.", "El estudiante tiene dieciséis años."] },
          { "en": "seventeen", "es": "diecisiete (17)", "imagen": "Número 17 grande y colorido", "acepta": ["17"], "ejemplo": ["My son is seventeen.", "Mi hijo tiene diecisiete años."] },
          { "en": "eighteen", "es": "dieciocho (18)", "imagen": "Número 18 grande y colorido", "acepta": ["18"], "ejemplo": ["I am eighteen years old.", "Tengo dieciocho años."] },
          { "en": "nineteen", "es": "diecinueve (19)", "imagen": "Número 19 grande y colorido", "acepta": ["19"], "ejemplo": ["She is nineteen.", "Ella tiene diecinueve años."] },
          { "en": "twenty", "es": "veinte (20)", "imagen": "Número 20 grande y colorido", "acepta": ["20"], "ejemplo": ["We are twenty in the class.", "Somos veinte en la clase."] },
          { "en": "thirty", "es": "treinta (30)", "imagen": "Número 30 grande y colorido", "acepta": ["30"], "ejemplo": ["My sister is thirty.", "Mi hermana tiene treinta años."] },
          { "en": "forty", "es": "cuarenta (40)", "imagen": "Número 40 grande y colorido", "acepta": ["40"], "ejemplo": ["My boss is forty.", "Mi jefe tiene cuarenta años."] },
          { "en": "fifty", "es": "cincuenta (50)", "imagen": "Número 50 grande y colorido", "acepta": ["50"], "ejemplo": ["My mother is fifty.", "Mi mamá tiene cincuenta años."] },
          { "en": "sixty", "es": "sesenta (60)", "imagen": "Número 60 grande y colorido", "acepta": ["60"], "ejemplo": ["My father is sixty.", "Mi papá tiene sesenta años."] },
          { "en": "seventy", "es": "setenta (70)", "imagen": "Número 70 grande y colorido", "acepta": ["70"], "ejemplo": ["My grandmother is seventy.", "Mi abuela tiene setenta años."] },
          { "en": "eighty", "es": "ochenta (80)", "imagen": "Número 80 grande y colorido", "acepta": ["80"], "ejemplo": ["My grandfather is eighty.", "Mi abuelo tiene ochenta años."] },
          { "en": "ninety", "es": "noventa (90)", "imagen": "Número 90 grande y colorido", "acepta": ["90"], "ejemplo": ["Her grandmother is ninety.", "Su abuela tiene noventa años."] },
          { "en": "one hundred", "es": "cien (100)", "imagen": "Número 100 grande y colorido", "acepta": ["100", "a hundred", "hundred"], "ejemplo": ["The book is one hundred pesos.", "El libro cuesta cien pesos."] },
          { "en": "one thousand", "es": "mil (1,000)", "imagen": "Número 1,000 grande y colorido", "acepta": ["1000", "a thousand", "thousand"], "ejemplo": ["The phone is one thousand dollars.", "El teléfono cuesta mil dólares."] },
          { "en": "one million", "es": "un millón (1,000,000)", "imagen": "Número un millón con muchos ceros, grande y colorido", "acepta": ["1000000", "1 million", "a million", "million"], "ejemplo": ["The house is one million pesos.", "La casa cuesta un millón de pesos."] }
        ]
      },
      {
        "id": "ordinales",
        "titulo": "Números ordinales",
        "icono": "🥇",
        "patron": ["I'm the first.", "She is second.", "My birthday is on the third of May."],
        "palabras": [
          { "en": "first", "es": "primero (1st)", "imagen": "Podio o fila con el lugar 1.º resaltado", "acepta": ["1st", "1th", "1"], "ejemplo": ["January is the first month.", "Enero es el primer mes."] },
          { "en": "second", "es": "segundo (2nd)", "imagen": "Podio o fila con el lugar 2.º resaltado", "acepta": ["2nd", "2th", "2"], "ejemplo": ["February is the second month.", "Febrero es el segundo mes."] },
          { "en": "third", "es": "tercero (3rd)", "imagen": "Podio o fila con el lugar 3.º resaltado", "acepta": ["3rd", "3th", "3"], "ejemplo": ["March is the third month.", "Marzo es el tercer mes."] },
          { "en": "fourth", "es": "cuarto (4th)", "imagen": "Número 4th grande y colorido", "acepta": ["4th", "4th", "4"], "ejemplo": ["April is the fourth month.", "Abril es el cuarto mes."] },
          { "en": "fifth", "es": "quinto (5th)", "imagen": "Número 5th grande y colorido", "acepta": ["5th", "5th", "5"], "ejemplo": ["May is the fifth month.", "Mayo es el quinto mes."] },
          { "en": "sixth", "es": "sexto (6th)", "imagen": "Número 6th grande y colorido", "acepta": ["6th", "6th", "6"], "ejemplo": ["June is the sixth month.", "Junio es el sexto mes."] },
          { "en": "seventh", "es": "séptimo (7th)", "imagen": "Número 7th grande y colorido", "acepta": ["7th", "7th", "7"], "ejemplo": ["July is the seventh month.", "Julio es el séptimo mes."] },
          { "en": "eighth", "es": "octavo (8th)", "imagen": "Número 8th grande y colorido", "acepta": ["8th", "8th", "8"], "ejemplo": ["August is the eighth month.", "Agosto es el octavo mes."] },
          { "en": "ninth", "es": "noveno (9th)", "imagen": "Número 9th grande y colorido", "acepta": ["9th", "9th", "9"], "ejemplo": ["September is the ninth month.", "Septiembre es el noveno mes."] },
          { "en": "tenth", "es": "décimo (10th)", "imagen": "Número 10th grande y colorido", "acepta": ["10th", "10th", "10"], "ejemplo": ["October is the tenth month.", "Octubre es el décimo mes."] },
          { "en": "eleventh", "es": "undécimo (11th)", "imagen": "Número 11th grande y colorido", "acepta": ["11th", "11th", "11"], "ejemplo": ["November is the eleventh month.", "Noviembre es el undécimo mes."] },
          { "en": "twelfth", "es": "duodécimo (12th)", "imagen": "Número 12th grande y colorido", "acepta": ["12th", "12th", "12"], "ejemplo": ["December is the twelfth month.", "Diciembre es el duodécimo mes."] },
          { "en": "thirteenth", "es": "decimotercero (13th)", "imagen": "Número 13th grande y colorido", "acepta": ["13th", "13th", "13"], "ejemplo": ["Today is the thirteenth.", "Hoy es trece."] },
          { "en": "twentieth", "es": "vigésimo (20th)", "imagen": "Número 20th grande y colorido", "acepta": ["20th", "20th", "20"], "ejemplo": ["My birthday is on the twentieth.", "Mi cumpleaños es el veinte."] },
          { "en": "twenty-first", "es": "vigésimo primero (21st)", "imagen": "Número 21st grande y colorido", "acepta": ["21st", "21th", "21"], "ejemplo": ["The party is on the twenty-first.", "La fiesta es el veintiuno."] },
          { "en": "twenty-second", "es": "vigésimo segundo (22nd)", "imagen": "Número 22nd grande y colorido", "acepta": ["22nd", "22th", "22"], "ejemplo": ["The exam is on the twenty-second.", "El examen es el veintidós."] },
          { "en": "twenty-third", "es": "vigésimo tercero (23rd)", "imagen": "Número 23rd grande y colorido", "acepta": ["23rd", "23th", "23"], "ejemplo": ["Today is the twenty-third.", "Hoy es veintitrés."] },
          { "en": "thirtieth", "es": "trigésimo (30th)", "imagen": "Número 30th grande y colorido", "acepta": ["30th", "30th", "30"], "ejemplo": ["The meeting is on the thirtieth.", "La reunión es el treinta."] },
          { "en": "thirty-first", "es": "trigésimo primero (31st)", "imagen": "Número 31st grande y colorido", "acepta": ["31st", "31th", "31"], "ejemplo": ["New Year's Eve is on the thirty-first.", "La víspera de Año Nuevo es el treinta y uno."] }
        ]
      },
      {
        "id": "abecedario",
        "titulo": "El abecedario (ABC)",
        "icono": "🔤",
        "patron": ["My name is Ana: A, N, A.", "How do you spell it?", "Is it B or V?"],
        "palabras": [
          { "en": "A", "es": "", "imagen": "Letra A mayúscula y minúscula, grande y colorida", "acepta": ["a", "hey", "eh", "ay"], "ejemplo": ["A is for apple.", "A de apple (manzana)."] },
          { "en": "B", "es": "", "imagen": "Letra B mayúscula y minúscula, grande y colorida", "acepta": ["b", "be", "bee"], "ejemplo": ["B is for book.", "B de book (libro)."] },
          { "en": "C", "es": "", "imagen": "Letra C mayúscula y minúscula, grande y colorida", "acepta": ["c", "see", "sea", "si"], "ejemplo": ["C is for cat.", "C de cat (gato)."] },
          { "en": "D", "es": "", "imagen": "Letra D mayúscula y minúscula, grande y colorida", "acepta": ["d", "dee"], "ejemplo": ["D is for dog.", "D de dog (perro)."] },
          { "en": "E", "es": "", "imagen": "Letra E mayúscula y minúscula, grande y colorida", "acepta": ["e", "ee"], "ejemplo": ["E is for egg.", "E de egg (huevo)."] },
          { "en": "F", "es": "", "imagen": "Letra F mayúscula y minúscula, grande y colorida", "acepta": ["f", "ef", "eff"], "ejemplo": ["F is for family.", "F de family (familia)."] },
          { "en": "G", "es": "", "imagen": "Letra G mayúscula y minúscula, grande y colorida", "acepta": ["g", "gee", "ji"], "ejemplo": ["G is for girl.", "G de girl (niña)."] },
          { "en": "H", "es": "", "imagen": "Letra H mayúscula y minúscula, grande y colorida", "acepta": ["h", "age", "each", "aitch", "eight"], "ejemplo": ["H is for house.", "H de house (casa)."] },
          { "en": "I", "es": "", "imagen": "Letra I mayúscula y minúscula, grande y colorida", "acepta": ["i", "eye", "aye", "hi"], "ejemplo": ["I is for ice.", "I de ice (hielo)."] },
          { "en": "J", "es": "", "imagen": "Letra J mayúscula y minúscula, grande y colorida", "acepta": ["j", "jay"], "ejemplo": ["J is for juice.", "J de juice (jugo)."] },
          { "en": "K", "es": "", "imagen": "Letra K mayúscula y minúscula, grande y colorida", "acepta": ["k", "kay", "okay", "ok", "cay"], "ejemplo": ["K is for key.", "K de key (llave)."] },
          { "en": "L", "es": "", "imagen": "Letra L mayúscula y minúscula, grande y colorida", "acepta": ["l", "el", "elle", "al"], "ejemplo": ["L is for lamp.", "L de lamp (lámpara)."] },
          { "en": "M", "es": "", "imagen": "Letra M mayúscula y minúscula, grande y colorida", "acepta": ["m", "em", "am"], "ejemplo": ["M is for mother.", "M de mother (mamá)."] },
          { "en": "N", "es": "", "imagen": "Letra N mayúscula y minúscula, grande y colorida", "acepta": ["n", "en", "and", "in"], "ejemplo": ["N is for name.", "N de name (nombre)."] },
          { "en": "O", "es": "", "imagen": "Letra O mayúscula y minúscula, grande y colorida", "acepta": ["o", "oh", "owe"], "ejemplo": ["O is for orange.", "O de orange (naranja)."] },
          { "en": "P", "es": "", "imagen": "Letra P mayúscula y minúscula, grande y colorida", "acepta": ["p", "pee", "pea"], "ejemplo": ["P is for pen.", "P de pen (pluma)."] },
          { "en": "Q", "es": "", "imagen": "Letra Q mayúscula y minúscula, grande y colorida", "acepta": ["q", "queue", "cue", "cute"], "ejemplo": ["Q is for queen.", "Q de queen (reina)."] },
          { "en": "R", "es": "", "imagen": "Letra R mayúscula y minúscula, grande y colorida", "acepta": ["r", "are", "our", "or"], "ejemplo": ["R is for red.", "R de red (rojo)."] },
          { "en": "S", "es": "", "imagen": "Letra S mayúscula y minúscula, grande y colorida", "acepta": ["s", "es", "yes", "ass"], "ejemplo": ["S is for sun.", "S de sun (sol)."] },
          { "en": "T", "es": "", "imagen": "Letra T mayúscula y minúscula, grande y colorida", "acepta": ["t", "tea", "tee"], "ejemplo": ["T is for table.", "T de table (mesa)."] },
          { "en": "U", "es": "", "imagen": "Letra U mayúscula y minúscula, grande y colorida", "acepta": ["u", "you", "yu"], "ejemplo": ["U is for umbrella.", "U de umbrella (paraguas)."] },
          { "en": "V", "es": "", "imagen": "Letra V mayúscula y minúscula, grande y colorida", "acepta": ["v", "vee", "we"], "ejemplo": ["V is for van.", "V de van (camioneta)."] },
          { "en": "W", "es": "", "imagen": "Letra W mayúscula y minúscula, grande y colorida", "acepta": ["w", "double you", "double u"], "ejemplo": ["W is for water.", "W de water (agua)."] },
          { "en": "X", "es": "", "imagen": "Letra X mayúscula y minúscula, grande y colorida", "acepta": ["x", "ex", "eggs"], "ejemplo": ["X is for xylophone.", "X de xylophone (xilófono)."] },
          { "en": "Y", "es": "", "imagen": "Letra Y mayúscula y minúscula, grande y colorida", "acepta": ["y", "why"], "ejemplo": ["Y is for yellow.", "Y de yellow (amarillo)."] },
          { "en": "Z", "es": "", "imagen": "Letra Z mayúscula y minúscula, grande y colorida", "acepta": ["z", "zee", "zed", "see"], "ejemplo": ["Z is for zebra.", "Z de zebra (cebra)."] }
        ]
      }
    ],
    "frases": [
      { "en": "My sister is very happy today.", "es": "Mi hermana está muy feliz hoy." },
      { "en": "The weather is cold and rainy.", "es": "El clima está frío y lluvioso." },
      { "en": "My father is a doctor and he is very busy.", "es": "Mi papá es doctor y está muy ocupado." },
      { "en": "I am tired because it is late.", "es": "Estoy cansado porque es tarde." },
      { "en": "Our teacher is kind and patient.", "es": "Nuestro maestro es amable y paciente." },
      { "en": "They are from Brazil and they are very friendly.", "es": "Son de Brasil y son muy amigables." },
      { "en": "It is sunny and hot in the summer.", "es": "En verano está soleado y hace calor." },
      { "en": "My best friend is funny and smart.", "es": "Mi mejor amigo es gracioso e inteligente." },
      { "en": "We are nervous before the exam.", "es": "Estamos nerviosos antes del examen." },
      { "en": "The children are hungry and thirsty.", "es": "Los niños tienen hambre y sed." },
      { "en": "She is a nurse and she is very hardworking.", "es": "Ella es enfermera y es muy trabajadora." },
      { "en": "Today is Monday and I am at work.", "es": "Hoy es lunes y estoy en el trabajo." },
      { "en": "My birthday is in April.", "es": "Mi cumpleaños es en abril." },
      { "en": "He is not sick, he is just tired.", "es": "Él no está enfermo, solo está cansado." },
      { "en": "Are you ready? Yes, I am.", "es": "¿Estás listo? Sí." },
      { "en": "My grandparents are old but they are healthy.", "es": "Mis abuelos son mayores pero están sanos." },
      { "en": "The store is closed on Sundays.", "es": "La tienda está cerrada los domingos." },
      { "en": "Is it cold in December? Yes, it is.", "es": "¿Hace frío en diciembre? Sí." },
      { "en": "My brother is tall and handsome.", "es": "Mi hermano es alto y guapo." },
      { "en": "I am the first in line.", "es": "Soy el primero en la fila." },
      { "en": "My mother is Mexican and my father is Canadian.", "es": "Mi mamá es mexicana y mi papá es canadiense." },
      { "en": "The new students are shy but very polite.", "es": "Los estudiantes nuevos son tímidos pero muy educados." }
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
  {
    "id": "a1-04",
    "num": 4,
    "titulo": "Artículos a / an / the",
    "contexto": "Objetos de la casa y del salón de clases",
    "explicacion": {
      "es": [
        "**A** y **an** significan **un** o **una**. Se usan con una sola cosa (singular) cuando no importa cuál es o la mencionamos por primera vez: *It's a book.*",
        "**A** va antes de un **sonido de consonante** (*a pen, a chair*) y **an** antes de un **sonido de vocal** (*an apple, an eraser*).",
        "**The** significa **el, la, los, las**. Se usa para algo específico, algo que ya mencionamos o algo único: *It's a book. **The** book is new.* / *the sun*.",
        "Con plurales o cosas en general **no** se usa artículo: *Books are expensive.* / *I like coffee.*"
      ],
      "tabla": {
        "columnas": ["Artículo", "Cuándo se usa", "Ejemplo"],
        "filas": [
          ["a", "antes de sonido de consonante", "a pen, a chair, a university"],
          ["an", "antes de sonido de vocal", "an eraser, an apple, an hour"],
          ["the", "algo específico o que ya mencionamos", "the book on the table"],
          ["the", "cosas únicas", "the sun, the moon, the internet"],
          ["(sin artículo)", "plurales o cosas en general", "Books are expensive. I like music."]
        ]
      },
      "ojo": [
        "Lo que cuenta es el **sonido**, no la letra: **an** hour (la *h* no suena), **a** university (suena «yu»).",
        "Con las profesiones siempre va *a* o *an*: *She's **an** engineer* (no *She's engineer*).",
        "*A* y *an* no van con plurales: *They are books* (no *They are a books*).",
        "Para hablar en general no se usa *the*: *I like music* (no *I like the music*)."
      ],
      "en": [
        "Use **a** before a consonant sound: a pen, a table, a university.",
        "Use **an** before a vowel sound: an apple, an umbrella, an hour.",
        "Use **the** for a specific thing or something we already know: The pen on the desk is mine.",
        "Don't use **a** or **an** with plural nouns: books, chairs, windows."
      ]
    },
    "vocabulario": [
      { "en": "a book", "es": "un libro", "imagen": "Libro abierto sobre una mesa" },
      { "en": "a pen", "es": "una pluma, un bolígrafo", "imagen": "Bolígrafo azul sobre una hoja" },
      { "en": "a pencil", "es": "un lápiz", "imagen": "Lápiz amarillo con punta" },
      { "en": "an eraser", "es": "una goma, un borrador", "imagen": "Goma de borrar junto a un dibujo a lápiz" },
      { "en": "a notebook", "es": "un cuaderno", "imagen": "Cuaderno abierto con apuntes" },
      { "en": "a desk", "es": "un escritorio, un pupitre", "imagen": "Escritorio de estudiante ordenado" },
      { "en": "a chair", "es": "una silla", "imagen": "Silla de madera" },
      { "en": "a table", "es": "una mesa", "imagen": "Mesa de comedor de madera" },
      { "en": "a computer", "es": "una computadora", "imagen": "Computadora de escritorio encendida" },
      { "en": "an umbrella", "es": "un paraguas", "imagen": "Paraguas rojo abierto bajo la lluvia" },
      { "en": "a bag", "es": "una bolsa", "imagen": "Bolsa de mano sobre una silla" },
      { "en": "a key", "es": "una llave", "imagen": "Llave de casa en la mano de una persona" },
      { "en": "a lamp", "es": "una lámpara", "imagen": "Lámpara de mesa encendida" },
      { "en": "a clock", "es": "un reloj (de pared)", "imagen": "Reloj redondo colgado en la pared" },
      { "en": "a window", "es": "una ventana", "imagen": "Ventana abierta con vista a un jardín" },
      { "en": "a door", "es": "una puerta", "imagen": "Puerta de entrada de una casa" }
    ],
    "grupos": [
      {
        "id": "salon",
        "titulo": "El salón de clases",
        "icono": "🏫",
        "patron": ["It's a ruler.", "This is an eraser.", "The whiteboard is clean."],
        "palabras": [
          { "en": "a classroom", "es": "un salón de clases", "imagen": "Salón de clases con pupitres y pizarrón" },
          { "en": "a whiteboard", "es": "un pizarrón blanco", "imagen": "Pizarrón blanco en un salón de clases" },
          { "en": "a marker", "es": "un marcador, un plumón", "imagen": "Mano escribiendo con un plumón en el pizarrón" },
          { "en": "a ruler", "es": "una regla", "imagen": "Regla sobre una hoja de cuaderno" },
          { "en": "a backpack", "es": "una mochila", "imagen": "Mochila escolar de colores" },
          { "en": "a pencil case", "es": "un estuche, una lapicera", "imagen": "Estuche abierto con lápices de colores" },
          { "en": "a sharpener", "es": "un sacapuntas", "imagen": "Sacapuntas afilando un lápiz" },
          { "en": "a dictionary", "es": "un diccionario", "imagen": "Diccionario grueso abierto" },
          { "en": "a calculator", "es": "una calculadora", "imagen": "Calculadora sobre un escritorio" },
          { "en": "scissors", "es": "tijeras", "imagen": "Tijeras cortando papel de colores" },
          { "en": "glue", "es": "pegamento", "imagen": "Barra de pegamento junto a papeles recortados" },
          { "en": "a map", "es": "un mapa", "imagen": "Mapa del mundo colgado en la pared del salón" },
          { "en": "a projector", "es": "un proyector", "imagen": "Proyector encendido en un salón oscuro" },
          { "en": "a laptop", "es": "una laptop, una computadora portátil", "imagen": "Laptop abierta sobre un pupitre" },
          { "en": "a folder", "es": "una carpeta", "imagen": "Carpeta con hojas dentro" },
          { "en": "a highlighter", "es": "un marcatextos", "imagen": "Marcatextos amarillo subrayando un libro" },
          { "en": "a stapler", "es": "una engrapadora", "imagen": "Engrapadora sobre un escritorio" },
          { "en": "a teacher's desk", "es": "el escritorio del maestro", "imagen": "Escritorio del maestro frente a la clase" }
        ]
      },
      {
        "id": "sala",
        "titulo": "La sala",
        "icono": "🛋️",
        "patron": ["It's a comfortable sofa.", "The TV is new.", "Is it an armchair?"],
        "palabras": [
          { "en": "a living room", "es": "una sala", "imagen": "Sala acogedora con sofá y plantas" },
          { "en": "a sofa", "es": "un sofá", "imagen": "Sofá gris con cojines" },
          { "en": "an armchair", "es": "un sillón", "imagen": "Sillón individual junto a una ventana" },
          { "en": "a TV", "es": "una televisión", "imagen": "Televisión en un mueble de la sala" },
          { "en": "a remote control", "es": "un control remoto", "imagen": "Mano sosteniendo un control remoto" },
          { "en": "a rug", "es": "un tapete, una alfombra", "imagen": "Tapete de colores en el piso de la sala" },
          { "en": "a coffee table", "es": "una mesa de centro", "imagen": "Mesa de centro con revistas y una taza" },
          { "en": "a bookshelf", "es": "un librero", "imagen": "Librero lleno de libros" },
          { "en": "a plant", "es": "una planta", "imagen": "Planta verde en una maceta" },
          { "en": "a picture", "es": "un cuadro", "imagen": "Cuadro colgado en la pared de la sala" },
          { "en": "a curtain", "es": "una cortina", "imagen": "Cortinas abiertas dejando entrar el sol" },
          { "en": "a cushion", "es": "un cojín", "imagen": "Cojines de colores sobre un sofá" },
          { "en": "a fireplace", "es": "una chimenea", "imagen": "Chimenea encendida en la sala" },
          { "en": "a fan", "es": "un ventilador", "imagen": "Ventilador girando en una habitación" },
          { "en": "an air conditioner", "es": "un aire acondicionado", "imagen": "Aire acondicionado en la pared" }
        ]
      },
      {
        "id": "cocina",
        "titulo": "La cocina",
        "icono": "🍳",
        "patron": ["It's an oven.", "The refrigerator is big.", "Is it a cup or a glass?"],
        "palabras": [
          { "en": "a kitchen", "es": "una cocina", "imagen": "Cocina moderna y luminosa" },
          { "en": "a refrigerator", "es": "un refrigerador", "imagen": "Refrigerador abierto con comida" },
          { "en": "a stove", "es": "una estufa", "imagen": "Estufa con una olla cocinando" },
          { "en": "an oven", "es": "un horno", "imagen": "Pastel horneándose dentro de un horno" },
          { "en": "a microwave", "es": "un microondas", "imagen": "Persona calentando comida en el microondas" },
          { "en": "a sink", "es": "un fregadero", "imagen": "Fregadero con agua corriendo" },
          { "en": "a dishwasher", "es": "un lavavajillas", "imagen": "Lavavajillas abierto con platos" },
          { "en": "a toaster", "es": "un tostador", "imagen": "Pan saltando de un tostador" },
          { "en": "a blender", "es": "una licuadora", "imagen": "Licuadora preparando un jugo de frutas" },
          { "en": "a kettle", "es": "una tetera, un hervidor", "imagen": "Hervidor con vapor saliendo" },
          { "en": "a pan", "es": "un sartén", "imagen": "Huevos friéndose en un sartén" },
          { "en": "a pot", "es": "una olla", "imagen": "Olla con sopa en la estufa" },
          { "en": "a plate", "es": "un plato", "imagen": "Plato blanco con comida" },
          { "en": "a bowl", "es": "un tazón", "imagen": "Tazón de cereal con leche" },
          { "en": "a cup", "es": "una taza", "imagen": "Taza de café humeante" },
          { "en": "a glass", "es": "un vaso", "imagen": "Vaso de agua sobre la mesa" },
          { "en": "a fork", "es": "un tenedor", "imagen": "Tenedor junto a un plato" },
          { "en": "a knife", "es": "un cuchillo", "imagen": "Cuchillo cortando verduras" },
          { "en": "a spoon", "es": "una cuchara", "imagen": "Cuchara con sopa" }
        ]
      },
      {
        "id": "recamara",
        "titulo": "La recámara",
        "icono": "🛏️",
        "patron": ["It's a big bed.", "The pillow is soft.", "This is an alarm clock."],
        "palabras": [
          { "en": "a bedroom", "es": "una recámara, un dormitorio", "imagen": "Recámara ordenada y luminosa" },
          { "en": "a bed", "es": "una cama", "imagen": "Cama bien tendida" },
          { "en": "a pillow", "es": "una almohada", "imagen": "Almohadas blancas sobre la cama" },
          { "en": "a blanket", "es": "una cobija, una manta", "imagen": "Cobija doblada a los pies de la cama" },
          { "en": "sheets", "es": "sábanas", "imagen": "Sábanas limpias recién tendidas" },
          { "en": "a closet", "es": "un clóset", "imagen": "Clóset abierto con ropa colgada" },
          { "en": "a hanger", "es": "un gancho (para ropa)", "imagen": "Camisa colgada en un gancho" },
          { "en": "a mirror", "es": "un espejo", "imagen": "Persona mirándose en un espejo de cuerpo completo" },
          { "en": "a dresser", "es": "una cómoda, un tocador", "imagen": "Cómoda de cajones con objetos encima" },
          { "en": "a nightstand", "es": "un buró, una mesita de noche", "imagen": "Buró con lámpara junto a la cama" },
          { "en": "an alarm clock", "es": "un despertador", "imagen": "Despertador sonando en el buró" }
        ]
      },
      {
        "id": "bano",
        "titulo": "El baño",
        "icono": "🛁",
        "patron": ["It's a towel.", "The shower is hot.", "Is it an electric toothbrush?"],
        "palabras": [
          { "en": "a bathroom", "es": "un baño", "imagen": "Baño limpio y moderno" },
          { "en": "a toilet", "es": "un excusado, un inodoro", "imagen": "Inodoro blanco en un baño limpio" },
          { "en": "a shower", "es": "una regadera", "imagen": "Agua cayendo de una regadera" },
          { "en": "a bathtub", "es": "una tina", "imagen": "Tina con espuma" },
          { "en": "a towel", "es": "una toalla", "imagen": "Toallas dobladas en el baño" },
          { "en": "a toothbrush", "es": "un cepillo de dientes", "imagen": "Cepillo de dientes en un vaso" },
          { "en": "toothpaste", "es": "pasta de dientes", "imagen": "Pasta de dientes sobre un cepillo" },
          { "en": "soap", "es": "jabón", "imagen": "Manos lavándose con jabón" },
          { "en": "shampoo", "es": "champú", "imagen": "Botella de champú en la regadera" },
          { "en": "a comb", "es": "un peine", "imagen": "Peine sobre el lavabo" },
          { "en": "a hairbrush", "es": "un cepillo para el cabello", "imagen": "Persona cepillándose el cabello" },
          { "en": "a hair dryer", "es": "una secadora de cabello", "imagen": "Persona secándose el cabello con secadora" },
          { "en": "toilet paper", "es": "papel de baño", "imagen": "Rollo de papel de baño" },
          { "en": "a bathroom sink", "es": "un lavabo", "imagen": "Lavabo del baño con espejo" }
        ]
      }
    ],
    "ejemplos": [
      { "en": "It's a book. The book is new.", "es": "Es un libro. El libro es nuevo.", "imagen": "Libro nuevo con la envoltura recién abierta" },
      { "en": "This is an umbrella. It's red.", "es": "Este es un paraguas. Es rojo.", "imagen": "Persona con un paraguas rojo" },
      { "en": "I'm an English student.", "es": "Soy estudiante de inglés.", "imagen": "Estudiante con un libro de inglés en clase" },
      { "en": "The computer is on the desk.", "es": "La computadora está en el escritorio.", "imagen": "Computadora sobre un escritorio" },
      { "en": "It's an old house.", "es": "Es una casa vieja.", "imagen": "Casa antigua de piedra" },
      { "en": "The keys are in the bag.", "es": "Las llaves están en la bolsa.", "imagen": "Llaves dentro de una bolsa abierta" },
      { "en": "My mother is an engineer.", "es": "Mi mamá es ingeniera.", "imagen": "Ingeniera con casco en una obra" },
      { "en": "It's a big window.", "es": "Es una ventana grande.", "imagen": "Ventanal enorme con vista a la ciudad" },
      { "en": "The sun is hot today.", "es": "Hoy el sol está muy fuerte.", "imagen": "Sol brillante en un cielo despejado" },
      { "en": "Is it an apple or an orange?", "es": "¿Es una manzana o una naranja?", "imagen": "Mano sosteniendo una manzana y una naranja" }
    ],
    "frases": [
      { "en": "The kitchen is small but the living room is big.", "es": "La cocina es pequeña pero la sala es grande." },
      { "en": "The teacher is in the classroom and the students are happy.", "es": "El maestro está en el salón y los estudiantes están felices." },
      { "en": "This is an old clock and it is very beautiful.", "es": "Este es un reloj viejo y es muy bonito." },
      { "en": "The pencils are in the pencil case.", "es": "Los lápices están en el estuche." },
      { "en": "My father is an architect and my mother is a nurse.", "es": "Mi papá es arquitecto y mi mamá es enfermera." },
      { "en": "The towel is in the bathroom.", "es": "La toalla está en el baño." },
      { "en": "It is an easy exercise.", "es": "Es un ejercicio fácil." },
      { "en": "The book on the desk is a dictionary.", "es": "El libro que está en el escritorio es un diccionario." },
      { "en": "The refrigerator is new and the stove is old.", "es": "El refrigerador es nuevo y la estufa es vieja." },
      { "en": "My brother is a student at the university.", "es": "Mi hermano es estudiante en la universidad." },
      { "en": "An hour is sixty minutes.", "es": "Una hora tiene sesenta minutos." },
      { "en": "The moon is beautiful tonight.", "es": "La luna está hermosa esta noche." },
      { "en": "It is a comfortable sofa.", "es": "Es un sofá cómodo." },
      { "en": "The windows in my bedroom are very big.", "es": "Las ventanas de mi recámara son muy grandes." }
    ],
    "listening": [
      { "audio": "Is this your umbrella? No, it isn't. My umbrella is blue.", "pregunta": "¿De qué color es el paraguas de quien responde?", "opciones": ["Azul", "Rojo", "Negro", "Verde"] },
      { "audio": "The keys are on the kitchen table.", "pregunta": "¿Dónde están las llaves?", "opciones": ["En la mesa de la cocina", "En la recámara", "En la bolsa", "En el coche"] },
      { "audio": "My sister is an architect. Her office is in the city.", "pregunta": "¿Cuál es el trabajo de la hermana?", "opciones": ["Es arquitecta", "Es abogada", "Es maestra", "Es doctora"] },
      { "audio": "I need a pencil and an eraser, please.", "pregunta": "¿Qué necesita la persona?", "opciones": ["Un lápiz y una goma", "Una pluma y un cuaderno", "Un libro y una regla", "Una mochila y un lápiz"] },
      { "audio": "The new computer is in the classroom.", "pregunta": "¿Dónde está la computadora nueva?", "opciones": ["En el salón de clases", "En la oficina", "En la casa", "En la biblioteca"] }
    ],
    "lectura": {
      "titulo": "My bedroom",
      "texto": "This is my bedroom. It's a small room, but it's very nice. The bed is big and the pillows are soft. My desk is near the window. A lamp and a computer are on the desk. The computer is new. On the wall is a clock. It's an old clock from my grandmother. My favorite thing is the bookshelf. It's full of books!",
      "preguntas": [
        { "pregunta": "¿Cómo es la recámara?", "opciones": ["Pequeña pero bonita", "Grande y moderna", "Fea y oscura", "Grande pero vieja"] },
        { "pregunta": "¿Qué hay en el escritorio?", "opciones": ["Una lámpara y una computadora", "Un reloj y un libro", "Una almohada y una cobija", "Un librero"] },
        { "pregunta": "¿De quién era el reloj?", "opciones": ["De su abuela", "De su mamá", "De su maestra", "De su hermana"] },
        { "pregunta": "¿Cuál es su objeto favorito?", "opciones": ["El librero", "La cama", "La computadora", "El reloj"] }
      ]
    },
    "escritura": [
      { "instruccion": "Escribe a o an.", "pregunta": "___ apple", "respuestas": ["an", "an apple"] },
      { "instruccion": "Escribe a o an.", "pregunta": "___ chair", "respuestas": ["a", "a chair"] },
      { "instruccion": "Escribe a o an.", "pregunta": "___ hour", "respuestas": ["an", "an hour"] },
      { "instruccion": "Escribe a o an.", "pregunta": "___ university", "respuestas": ["a", "a university"] },
      { "instruccion": "Escribe a o an.", "pregunta": "___ umbrella", "respuestas": ["an", "an umbrella"] },
      { "instruccion": "Completa con a, an o the.", "pregunta": "This is a cat. ___ cat is black.", "respuestas": ["The"] },
      { "instruccion": "Completa con a, an o the.", "pregunta": "She's ___ engineer.", "respuestas": ["an"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "Es un libro.", "respuestas": ["It's a book", "It is a book"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "La ventana está abierta.", "respuestas": ["The window is open"] },
      { "instruccion": "Corrige la oración.", "pregunta": "They are a students.", "respuestas": ["They are students", "They're students"] }
    ],
    "examen": [
      { "tipo": "opcion", "pregunta": "My father is ___ engineer.", "opciones": ["an", "a", "the", "(nada)"] },
      { "tipo": "opcion", "pregunta": "Elige la opción correcta.", "opciones": ["an hour", "a hour", "an house", "a apple"] },
      { "tipo": "opcion", "pregunta": "This is a pen. ___ pen is blue.", "opciones": ["The", "A", "An", "(nada)"] },
      { "tipo": "opcion", "pregunta": "___ moon is beautiful tonight.", "opciones": ["The", "A", "An", "(nada)"] },
      { "tipo": "opcion", "pregunta": "They are ___.", "opciones": ["students", "a students", "an students", "a student"] },
      { "tipo": "opcion", "pregunta": "Elige la oración correcta.", "opciones": ["She's a teacher.", "She's teacher.", "She's an teacher.", "She's the a teacher."] },
      { "tipo": "listening", "audio": "Look! It's an elephant.", "pregunta": "¿Qué ve la persona?", "opciones": ["Un elefante", "Un león", "Un caballo", "Un perro"] },
      { "tipo": "listening", "audio": "The remote control is on the sofa.", "pregunta": "¿Dónde está el control remoto?", "opciones": ["En el sofá", "En la mesa", "En la cama", "En el piso"] },
      { "tipo": "escribir", "pregunta": "Escribe a o an: ___ orange", "respuestas": ["an", "an orange"] },
      { "tipo": "escribir", "pregunta": "Traduce: Es una silla.", "respuestas": ["It's a chair", "It is a chair"] }
    ]
  },
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
