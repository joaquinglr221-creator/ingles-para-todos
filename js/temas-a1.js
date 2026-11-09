// Temas del nivel A1 (docs/plan-de-estudios.md). Los que todavía no tienen contenido solo llevan título.
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
const TEMAS_A1 = [
  {
    "id": "a1-01",
    "num": 1,
    "titulo": "Verbo to be: afirmativo",
    "contexto": "Saludos y presentaciones",
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
      "video": "videos/temas/a1-02-explicacion.mp4",
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
        "imagen": "Persona llenando un formulario en una oficina mientras otra le pregunta amablemente", "ejemplo": ["What's your name? I'm Julia.", "¿Cómo te llamas? Soy Julia."]
      },
      {
        "en": "first name",
        "es": "nombre (de pila)",
        "imagen": "Gafete de identificación con la foto de una persona sonriente", "ejemplo": ["My first name isn't Daniel. It's David.", "Mi nombre no es Daniel. Es David."]
      },
      {
        "en": "last name",
        "es": "apellido",
        "imagen": "Familia de tres generaciones posando junta para una foto", "ejemplo": ["Is your last name Lopez? No, it isn't.", "¿Tu apellido es López? No."]
      },
      {
        "en": "How old are you?",
        "es": "¿Cuántos años tienes?",
        "imagen": "Niño mostrando con los dedos cuántos años tiene", "ejemplo": ["How old are you? I'm not twenty. I'm nineteen.", "¿Cuántos años tienes? No tengo veinte. Tengo diecinueve."]
      },
      {
        "en": "age",
        "es": "edad",
        "imagen": "Tres personas de distintas edades juntas: un niño, un adulto y un anciano", "ejemplo": ["What's your age? Are you eighteen?", "¿Cuál es tu edad? ¿Tienes dieciocho años?"]
      },
      {
        "en": "country",
        "es": "país",
        "imagen": "Globo terráqueo sobre un escritorio", "ejemplo": ["Is Canada a big country? Yes, it is.", "¿Canadá es un país grande? Sí."]
      },
      {
        "en": "nationality",
        "es": "nacionalidad",
        "imagen": "Pasaporte junto a varias banderas pequeñas de distintos países", "ejemplo": ["What's your nationality? Are you Italian?", "¿Cuál es tu nacionalidad? ¿Eres italiano?"]
      },
      {
        "en": "phone number",
        "es": "número de teléfono",
        "imagen": "Persona dictando su número mientras otra lo guarda en su celular", "ejemplo": ["Is this your phone number? No, it isn't.", "¿Este es tu número de teléfono? No."]
      },
      {
        "en": "email address",
        "es": "correo electrónico",
        "imagen": "Persona escribiendo en una laptop con un sobre de correo flotando en la pantalla", "ejemplo": ["Is this your email address? Yes, it is.", "¿Este es tu correo electrónico? Sí."]
      },
      {
        "en": "address",
        "es": "dirección (domicilio)",
        "imagen": "Fachada de una casa con buzón junto a la puerta", "ejemplo": ["This isn't my address.", "Esta no es mi dirección."]
      },
      {
        "en": "married",
        "es": "casado / casada",
        "imagen": "Pareja de recién casados mostrando sus anillos", "ejemplo": ["Are you married? No, I'm not.", "¿Estás casado? No."]
      },
      {
        "en": "single",
        "es": "soltero / soltera",
        "imagen": "Persona joven sola y feliz tomando café en una cafetería", "ejemplo": ["She isn't married. She's single.", "Ella no está casada. Es soltera."]
      },
      {
        "en": "job",
        "es": "trabajo, empleo",
        "imagen": "Varias personas con uniformes de distintos trabajos", "ejemplo": ["My job isn't difficult.", "Mi trabajo no es difícil."]
      },
      {
        "en": "Are you…?",
        "es": "¿Eres…? / ¿Estás…?",
        "imagen": "Persona con cara de duda haciendo una pregunta", "ejemplo": ["Are you a teacher? Yes, I am.", "¿Eres maestro? Sí."]
      },
      {
        "en": "Yes, I am.",
        "es": "Sí (lo soy / lo estoy).",
        "imagen": "Persona asintiendo con la cabeza y sonriendo", "ejemplo": ["Are you from Peru? Yes, I am.", "¿Eres de Perú? Sí."]
      },
      {
        "en": "No, I'm not.",
        "es": "No (no lo soy / no lo estoy).",
        "imagen": "Persona negando con la cabeza y con la mano", "ejemplo": ["Are you tired? No, I'm not.", "¿Estás cansado? No."]
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
        "imagen": "Dos amigas riendo juntas en un parque", "ejemplo": ["Lucy is my friend. She is very funny.", "Lucy es mi amiga. Es muy graciosa."]
      },
      {
        "en": "best friend",
        "es": "mejor amigo / amiga",
        "imagen": "Dos amigos chocando las manos con complicidad", "ejemplo": ["Tom is my best friend. He is from London.", "Tom es mi mejor amigo. Es de Londres."]
      },
      {
        "en": "neighbor",
        "es": "vecino / vecina",
        "imagen": "Vecinos saludándose por encima de la cerca del jardín", "ejemplo": ["Mr. Kim is my neighbor. He is very kind.", "El señor Kim es mi vecino. Es muy amable."]
      },
      {
        "en": "classmate",
        "es": "compañero de clase",
        "imagen": "Estudiantes trabajando juntos en una mesa del salón de clases", "ejemplo": ["Ana is my classmate. She is from Chile.", "Ana es mi compañera de clase. Es de Chile."]
      },
      {
        "en": "coworker",
        "es": "compañero de trabajo",
        "imagen": "Compañeros de oficina tomando café juntos", "ejemplo": ["Paul is my coworker. He is very busy.", "Paul es mi compañero de trabajo. Está muy ocupado."]
      },
      {
        "en": "boss",
        "es": "jefe / jefa",
        "imagen": "Jefa explicando algo a su equipo en una reunión", "ejemplo": ["My boss is in Japan. She is on a trip.", "Mi jefa está en Japón. Está de viaje."]
      },
      {
        "en": "roommate",
        "es": "compañero de cuarto o de departamento",
        "imagen": "Dos jóvenes cocinando juntos en la cocina de su departamento", "ejemplo": ["Sam is my roommate. He is a student.", "Sam es mi compañero de cuarto. Es estudiante."]
      },
      {
        "en": "boyfriend",
        "es": "novio",
        "imagen": "Joven sonriente entregando flores a su novia", "ejemplo": ["Her boyfriend is tall. He is an engineer.", "Su novio es alto. Es ingeniero."]
      },
      {
        "en": "girlfriend",
        "es": "novia",
        "imagen": "Joven sonriente abrazando a su novio", "ejemplo": ["His girlfriend is a nurse. She is very nice.", "Su novia es enfermera. Es muy simpática."]
      },
      {
        "en": "partner",
        "es": "pareja",
        "imagen": "Pareja adulta caminando de la mano", "ejemplo": ["My partner and I are happy. We are at home.", "Mi pareja y yo estamos felices. Estamos en casa."]
      },
      {
        "en": "people",
        "es": "gente, personas",
        "imagen": "Mucha gente caminando por una plaza", "ejemplo": ["These people are friendly. They are my neighbors.", "Estas personas son amigables. Son mis vecinos."]
      },
      {
        "en": "man",
        "es": "hombre",
        "imagen": "Hombre adulto sonriendo", "ejemplo": ["That man is my father. He is a doctor.", "Ese hombre es mi papá. Es doctor."]
      },
      {
        "en": "woman",
        "es": "mujer",
        "imagen": "Mujer adulta sonriendo", "ejemplo": ["That woman is my aunt. She is from Cuba.", "Esa mujer es mi tía. Es de Cuba."]
      },
      {
        "en": "child",
        "es": "niño / niña",
        "imagen": "Niño pequeño jugando con bloques", "ejemplo": ["The child is happy. He is in the park.", "El niño está feliz. Está en el parque."]
      },
      {
        "en": "children",
        "es": "niños / niñas",
        "imagen": "Grupo de niños corriendo en el patio de la escuela", "ejemplo": ["The children are at school. They are in class.", "Los niños están en la escuela. Están en clase."]
      },
      {
        "en": "pet",
        "es": "mascota",
        "imagen": "Familia acariciando a su perro en la sala", "ejemplo": ["My pet is a cat. It is very lazy.", "Mi mascota es un gato. Es muy flojo."]
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
      { "en": "a book", "es": "un libro", "imagen": "Libro abierto sobre una mesa", "ejemplo": ["It's a book. The book is on the table.", "Es un libro. El libro está en la mesa."] },
      { "en": "a pen", "es": "una pluma, un bolígrafo", "imagen": "Bolígrafo azul sobre una hoja", "ejemplo": ["This is a pen. The pen is blue.", "Esta es una pluma. La pluma es azul."] },
      { "en": "a pencil", "es": "un lápiz", "imagen": "Lápiz amarillo con punta", "ejemplo": ["It's a pencil. The pencil is new.", "Es un lápiz. El lápiz es nuevo."] },
      { "en": "an eraser", "es": "una goma, un borrador", "imagen": "Goma de borrar junto a un dibujo a lápiz", "ejemplo": ["This is an eraser. The eraser is small.", "Esta es una goma. La goma es pequeña."] },
      { "en": "a notebook", "es": "un cuaderno", "imagen": "Cuaderno abierto con apuntes", "ejemplo": ["It's a notebook. The notebook is red.", "Es un cuaderno. El cuaderno es rojo."] },
      { "en": "a desk", "es": "un escritorio, un pupitre", "imagen": "Escritorio de estudiante ordenado", "ejemplo": ["It's a desk. The desk is big.", "Es un escritorio. El escritorio es grande."] },
      { "en": "a chair", "es": "una silla", "imagen": "Silla de madera", "ejemplo": ["This is a chair. The chair is comfortable.", "Esta es una silla. La silla es cómoda."] },
      { "en": "a table", "es": "una mesa", "imagen": "Mesa de comedor de madera", "ejemplo": ["It's a table. The table is in the kitchen.", "Es una mesa. La mesa está en la cocina."] },
      { "en": "a computer", "es": "una computadora", "imagen": "Computadora de escritorio encendida", "ejemplo": ["It's a computer. The computer is old.", "Es una computadora. La computadora es vieja."] },
      { "en": "an umbrella", "es": "un paraguas", "imagen": "Paraguas rojo abierto bajo la lluvia", "ejemplo": ["It's an umbrella. The umbrella is black.", "Es un paraguas. El paraguas es negro."] },
      { "en": "a bag", "es": "una bolsa", "imagen": "Bolsa de mano sobre una silla", "ejemplo": ["It's a bag. The bag is on the chair.", "Es una bolsa. La bolsa está en la silla."] },
      { "en": "a key", "es": "una llave", "imagen": "Llave de casa en la mano de una persona", "ejemplo": ["It's a key. The key is in my bag.", "Es una llave. La llave está en mi bolsa."] },
      { "en": "a lamp", "es": "una lámpara", "imagen": "Lámpara de mesa encendida", "ejemplo": ["It's a lamp. The lamp is on the desk.", "Es una lámpara. La lámpara está en el escritorio."] },
      { "en": "a clock", "es": "un reloj (de pared)", "imagen": "Reloj redondo colgado en la pared", "ejemplo": ["It's a clock. The clock is on the wall.", "Es un reloj. El reloj está en la pared."] },
      { "en": "a window", "es": "una ventana", "imagen": "Ventana abierta con vista a un jardín", "ejemplo": ["It's a window. The window is open.", "Es una ventana. La ventana está abierta."] },
      { "en": "a door", "es": "una puerta", "imagen": "Puerta de entrada de una casa", "ejemplo": ["It's a door. The door is closed.", "Es una puerta. La puerta está cerrada."] }
    ],
    "grupos": [
      {
        "id": "salon",
        "titulo": "El salón de clases",
        "icono": "🏫",
        "patron": ["It's a ruler.", "This is an eraser.", "The whiteboard is clean."],
        "palabras": [
          { "en": "a classroom", "es": "un salón de clases", "imagen": "Salón de clases con pupitres y pizarrón", "ejemplo": ["It's a classroom. The classroom is clean.", "Es un salón de clases. El salón está limpio."] },
          { "en": "a whiteboard", "es": "un pizarrón blanco", "imagen": "Pizarrón blanco en un salón de clases", "ejemplo": ["It's a whiteboard. The whiteboard is big.", "Es un pizarrón blanco. El pizarrón es grande."] },
          { "en": "a marker", "es": "un marcador, un plumón", "imagen": "Mano escribiendo con un plumón en el pizarrón", "ejemplo": ["It's a marker. The marker is green.", "Es un plumón. El plumón es verde."] },
          { "en": "a ruler", "es": "una regla", "imagen": "Regla sobre una hoja de cuaderno", "ejemplo": ["It's a ruler. The ruler is on the desk.", "Es una regla. La regla está en el escritorio."] },
          { "en": "a backpack", "es": "una mochila", "imagen": "Mochila escolar de colores", "ejemplo": ["It's a backpack. The backpack is heavy.", "Es una mochila. La mochila está pesada."] },
          { "en": "a pencil case", "es": "un estuche, una lapicera", "imagen": "Estuche abierto con lápices de colores", "ejemplo": ["It's a pencil case. The pencil case is blue.", "Es un estuche. El estuche es azul."] },
          { "en": "a sharpener", "es": "un sacapuntas", "imagen": "Sacapuntas afilando un lápiz", "ejemplo": ["It's a sharpener. The sharpener is small.", "Es un sacapuntas. El sacapuntas es pequeño."] },
          { "en": "a dictionary", "es": "un diccionario", "imagen": "Diccionario grueso abierto", "ejemplo": ["It's a dictionary. The dictionary is very useful.", "Es un diccionario. El diccionario es muy útil."] },
          { "en": "a calculator", "es": "una calculadora", "imagen": "Calculadora sobre un escritorio", "ejemplo": ["It's a calculator. The calculator is new.", "Es una calculadora. La calculadora es nueva."] },
          { "en": "scissors", "es": "tijeras", "imagen": "Tijeras cortando papel de colores", "ejemplo": ["The scissors are on the table.", "Las tijeras están en la mesa."] },
          { "en": "glue", "es": "pegamento", "imagen": "Barra de pegamento junto a papeles recortados", "ejemplo": ["The glue is in the pencil case.", "El pegamento está en el estuche."] },
          { "en": "a map", "es": "un mapa", "imagen": "Mapa del mundo colgado en la pared del salón", "ejemplo": ["It's a map. The map is on the wall.", "Es un mapa. El mapa está en la pared."] },
          { "en": "a projector", "es": "un proyector", "imagen": "Proyector encendido en un salón oscuro", "ejemplo": ["It's a projector. The projector is on.", "Es un proyector. El proyector está encendido."] },
          { "en": "a laptop", "es": "una laptop, una computadora portátil", "imagen": "Laptop abierta sobre un pupitre", "ejemplo": ["It's a laptop. The laptop is very light.", "Es una laptop. La laptop es muy ligera."] },
          { "en": "a folder", "es": "una carpeta", "imagen": "Carpeta con hojas dentro", "ejemplo": ["It's a folder. The folder is yellow.", "Es una carpeta. La carpeta es amarilla."] },
          { "en": "a highlighter", "es": "un marcatextos", "imagen": "Marcatextos amarillo subrayando un libro", "ejemplo": ["It's a highlighter. The highlighter is pink.", "Es un marcatextos. El marcatextos es rosa."] },
          { "en": "a stapler", "es": "una engrapadora", "imagen": "Engrapadora sobre un escritorio", "ejemplo": ["It's a stapler. The stapler is on the desk.", "Es una engrapadora. La engrapadora está en el escritorio."] },
          { "en": "a teacher's desk", "es": "el escritorio del maestro", "imagen": "Escritorio del maestro frente a la clase", "ejemplo": ["It's a teacher's desk. The desk is clean.", "Es el escritorio de un maestro. El escritorio está limpio."] }
        ]
      },
      {
        "id": "sala",
        "titulo": "La sala",
        "icono": "🛋️",
        "patron": ["It's a comfortable sofa.", "The TV is new.", "Is it an armchair?"],
        "palabras": [
          { "en": "a living room", "es": "una sala", "imagen": "Sala acogedora con sofá y plantas", "ejemplo": ["It's a living room. The living room is small.", "Es una sala. La sala es pequeña."] },
          { "en": "a sofa", "es": "un sofá", "imagen": "Sofá gris con cojines", "ejemplo": ["It's a sofa. The sofa is very comfortable.", "Es un sofá. El sofá es muy cómodo."] },
          { "en": "an armchair", "es": "un sillón", "imagen": "Sillón individual junto a una ventana", "ejemplo": ["It's an armchair. The armchair is old.", "Es un sillón. El sillón es viejo."] },
          { "en": "a TV", "es": "una televisión", "imagen": "Televisión en un mueble de la sala", "ejemplo": ["It's a TV. The TV is new.", "Es una televisión. La televisión es nueva."] },
          { "en": "a remote control", "es": "un control remoto", "imagen": "Mano sosteniendo un control remoto", "ejemplo": ["It's a remote control. The remote control is on the sofa.", "Es un control remoto. El control remoto está en el sofá."] },
          { "en": "a rug", "es": "un tapete, una alfombra", "imagen": "Tapete de colores en el piso de la sala", "ejemplo": ["It's a rug. The rug is on the floor.", "Es un tapete. El tapete está en el piso."] },
          { "en": "a coffee table", "es": "una mesa de centro", "imagen": "Mesa de centro con revistas y una taza", "ejemplo": ["It's a coffee table. The coffee table is round.", "Es una mesa de centro. La mesa es redonda."] },
          { "en": "a bookshelf", "es": "un librero", "imagen": "Librero lleno de libros", "ejemplo": ["It's a bookshelf. The bookshelf is full.", "Es un librero. El librero está lleno."] },
          { "en": "a plant", "es": "una planta", "imagen": "Planta verde en una maceta", "ejemplo": ["It's a plant. The plant is green.", "Es una planta. La planta es verde."] },
          { "en": "a picture", "es": "un cuadro", "imagen": "Cuadro colgado en la pared de la sala", "ejemplo": ["It's a picture. The picture is beautiful.", "Es un cuadro. El cuadro es hermoso."] },
          { "en": "a curtain", "es": "una cortina", "imagen": "Cortinas abiertas dejando entrar el sol", "ejemplo": ["It's a curtain. The curtain is white.", "Es una cortina. La cortina es blanca."] },
          { "en": "a cushion", "es": "un cojín", "imagen": "Cojines de colores sobre un sofá", "ejemplo": ["It's a cushion. The cushion is soft.", "Es un cojín. El cojín es suave."] },
          { "en": "a fireplace", "es": "una chimenea", "imagen": "Chimenea encendida en la sala", "ejemplo": ["It's a fireplace. The fireplace is warm.", "Es una chimenea. La chimenea está caliente."] },
          { "en": "a fan", "es": "un ventilador", "imagen": "Ventilador girando en una habitación", "ejemplo": ["It's a fan. The fan is on.", "Es un ventilador. El ventilador está encendido."] },
          { "en": "an air conditioner", "es": "un aire acondicionado", "imagen": "Aire acondicionado en la pared", "ejemplo": ["It's an air conditioner. The air conditioner is new.", "Es un aire acondicionado. El aire acondicionado es nuevo."] }
        ]
      },
      {
        "id": "cocina",
        "titulo": "La cocina",
        "icono": "🍳",
        "patron": ["It's an oven.", "The refrigerator is big.", "Is it a cup or a glass?"],
        "palabras": [
          { "en": "a kitchen", "es": "una cocina", "imagen": "Cocina moderna y luminosa", "ejemplo": ["It's a kitchen. The kitchen is clean.", "Es una cocina. La cocina está limpia."] },
          { "en": "a refrigerator", "es": "un refrigerador", "imagen": "Refrigerador abierto con comida", "ejemplo": ["It's a refrigerator. The refrigerator is full.", "Es un refrigerador. El refrigerador está lleno."] },
          { "en": "a stove", "es": "una estufa", "imagen": "Estufa con una olla cocinando", "ejemplo": ["It's a stove. The stove is hot.", "Es una estufa. La estufa está caliente."] },
          { "en": "an oven", "es": "un horno", "imagen": "Pastel horneándose dentro de un horno", "ejemplo": ["It's an oven. The oven is very hot.", "Es un horno. El horno está muy caliente."] },
          { "en": "a microwave", "es": "un microondas", "imagen": "Persona calentando comida en el microondas", "ejemplo": ["It's a microwave. The microwave is small.", "Es un microondas. El microondas es pequeño."] },
          { "en": "a sink", "es": "un fregadero", "imagen": "Fregadero con agua corriendo", "ejemplo": ["It's a sink. The sink is full of dishes.", "Es un fregadero. El fregadero está lleno de platos."] },
          { "en": "a dishwasher", "es": "un lavavajillas", "imagen": "Lavavajillas abierto con platos", "ejemplo": ["It's a dishwasher. The dishwasher is new.", "Es un lavavajillas. El lavavajillas es nuevo."] },
          { "en": "a toaster", "es": "un tostador", "imagen": "Pan saltando de un tostador", "ejemplo": ["It's a toaster. The toaster is on the table.", "Es un tostador. El tostador está en la mesa."] },
          { "en": "a blender", "es": "una licuadora", "imagen": "Licuadora preparando un jugo de frutas", "ejemplo": ["It's a blender. The blender is very loud.", "Es una licuadora. La licuadora es muy ruidosa."] },
          { "en": "a kettle", "es": "una tetera, un hervidor", "imagen": "Hervidor con vapor saliendo", "ejemplo": ["It's a kettle. The kettle is hot.", "Es un hervidor. El hervidor está caliente."] },
          { "en": "a pan", "es": "un sartén", "imagen": "Huevos friéndose en un sartén", "ejemplo": ["It's a pan. The pan is on the stove.", "Es un sartén. El sartén está en la estufa."] },
          { "en": "a pot", "es": "una olla", "imagen": "Olla con sopa en la estufa", "ejemplo": ["It's a pot. The pot is big.", "Es una olla. La olla es grande."] },
          { "en": "a plate", "es": "un plato", "imagen": "Plato blanco con comida", "ejemplo": ["It's a plate. The plate is clean.", "Es un plato. El plato está limpio."] },
          { "en": "a bowl", "es": "un tazón", "imagen": "Tazón de cereal con leche", "ejemplo": ["It's a bowl. The bowl is empty.", "Es un tazón. El tazón está vacío."] },
          { "en": "a cup", "es": "una taza", "imagen": "Taza de café humeante", "ejemplo": ["It's a cup. The cup is on the table.", "Es una taza. La taza está en la mesa."] },
          { "en": "a glass", "es": "un vaso", "imagen": "Vaso de agua sobre la mesa", "ejemplo": ["It's a glass. The glass is full.", "Es un vaso. El vaso está lleno."] },
          { "en": "a fork", "es": "un tenedor", "imagen": "Tenedor junto a un plato", "ejemplo": ["It's a fork. The fork is dirty.", "Es un tenedor. El tenedor está sucio."] },
          { "en": "a knife", "es": "un cuchillo", "imagen": "Cuchillo cortando verduras", "ejemplo": ["It's a knife. The knife is sharp.", "Es un cuchillo. El cuchillo tiene filo."] },
          { "en": "a spoon", "es": "una cuchara", "imagen": "Cuchara con sopa", "ejemplo": ["It's a spoon. The spoon is small.", "Es una cuchara. La cuchara es pequeña."] }
        ]
      },
      {
        "id": "recamara",
        "titulo": "La recámara",
        "icono": "🛏️",
        "patron": ["It's a big bed.", "The pillow is soft.", "This is an alarm clock."],
        "palabras": [
          { "en": "a bedroom", "es": "una recámara, un dormitorio", "imagen": "Recámara ordenada y luminosa", "ejemplo": ["It's a bedroom. The bedroom is very quiet.", "Es una recámara. La recámara es muy tranquila."] },
          { "en": "a bed", "es": "una cama", "imagen": "Cama bien tendida", "ejemplo": ["It's a bed. The bed is comfortable.", "Es una cama. La cama es cómoda."] },
          { "en": "a pillow", "es": "una almohada", "imagen": "Almohadas blancas sobre la cama", "ejemplo": ["It's a pillow. The pillow is soft.", "Es una almohada. La almohada es suave."] },
          { "en": "a blanket", "es": "una cobija, una manta", "imagen": "Cobija doblada a los pies de la cama", "ejemplo": ["It's a blanket. The blanket is warm.", "Es una cobija. La cobija es calientita."] },
          { "en": "sheets", "es": "sábanas", "imagen": "Sábanas limpias recién tendidas", "ejemplo": ["The sheets are clean.", "Las sábanas están limpias."] },
          { "en": "a closet", "es": "un clóset", "imagen": "Clóset abierto con ropa colgada", "ejemplo": ["It's a closet. The closet is full of clothes.", "Es un clóset. El clóset está lleno de ropa."] },
          { "en": "a hanger", "es": "un gancho (para ropa)", "imagen": "Camisa colgada en un gancho", "ejemplo": ["It's a hanger. The hanger is in the closet.", "Es un gancho. El gancho está en el clóset."] },
          { "en": "a mirror", "es": "un espejo", "imagen": "Persona mirándose en un espejo de cuerpo completo", "ejemplo": ["It's a mirror. The mirror is on the wall.", "Es un espejo. El espejo está en la pared."] },
          { "en": "a dresser", "es": "una cómoda, un tocador", "imagen": "Cómoda de cajones con objetos encima", "ejemplo": ["It's a dresser. The dresser is old.", "Es una cómoda. La cómoda es vieja."] },
          { "en": "a nightstand", "es": "un buró, una mesita de noche", "imagen": "Buró con lámpara junto a la cama", "ejemplo": ["It's a nightstand. The nightstand is next to the bed.", "Es un buró. El buró está junto a la cama."] },
          { "en": "an alarm clock", "es": "un despertador", "imagen": "Despertador sonando en el buró", "ejemplo": ["It's an alarm clock. The alarm clock is loud.", "Es un despertador. El despertador suena muy fuerte."] }
        ]
      },
      {
        "id": "bano",
        "titulo": "El baño",
        "icono": "🛁",
        "patron": ["It's a towel.", "The shower is hot.", "Is it an electric toothbrush?"],
        "palabras": [
          { "en": "a bathroom", "es": "un baño", "imagen": "Baño limpio y moderno", "ejemplo": ["It's a bathroom. The bathroom is clean.", "Es un baño. El baño está limpio."] },
          { "en": "a toilet", "es": "un excusado, un inodoro", "imagen": "Inodoro blanco en un baño limpio", "ejemplo": ["It's a toilet. The toilet is in the bathroom.", "Es un inodoro. El inodoro está en el baño."] },
          { "en": "a shower", "es": "una regadera", "imagen": "Agua cayendo de una regadera", "ejemplo": ["It's a shower. The shower is hot.", "Es una regadera. La regadera está caliente."] },
          { "en": "a bathtub", "es": "una tina", "imagen": "Tina con espuma", "ejemplo": ["It's a bathtub. The bathtub is big.", "Es una tina. La tina es grande."] },
          { "en": "a towel", "es": "una toalla", "imagen": "Toallas dobladas en el baño", "ejemplo": ["It's a towel. The towel is wet.", "Es una toalla. La toalla está mojada."] },
          { "en": "a toothbrush", "es": "un cepillo de dientes", "imagen": "Cepillo de dientes en un vaso", "ejemplo": ["It's a toothbrush. The toothbrush is blue.", "Es un cepillo de dientes. El cepillo es azul."] },
          { "en": "toothpaste", "es": "pasta de dientes", "imagen": "Pasta de dientes sobre un cepillo", "ejemplo": ["The toothpaste is in the bathroom.", "La pasta de dientes está en el baño."] },
          { "en": "soap", "es": "jabón", "imagen": "Manos lavándose con jabón", "ejemplo": ["The soap is on the sink.", "El jabón está en el lavabo."] },
          { "en": "shampoo", "es": "champú", "imagen": "Botella de champú en la regadera", "ejemplo": ["The shampoo is in the shower.", "El champú está en la regadera."] },
          { "en": "a comb", "es": "un peine", "imagen": "Peine sobre el lavabo", "ejemplo": ["It's a comb. The comb is black.", "Es un peine. El peine es negro."] },
          { "en": "a hairbrush", "es": "un cepillo para el cabello", "imagen": "Persona cepillándose el cabello", "ejemplo": ["It's a hairbrush. The hairbrush is on the table.", "Es un cepillo para el cabello. El cepillo está en la mesa."] },
          { "en": "a hair dryer", "es": "una secadora de cabello", "imagen": "Persona secándose el cabello con secadora", "ejemplo": ["It's a hair dryer. The hair dryer is hot.", "Es una secadora de cabello. La secadora está caliente."] },
          { "en": "toilet paper", "es": "papel de baño", "imagen": "Rollo de papel de baño", "ejemplo": ["The toilet paper is in the bathroom.", "El papel de baño está en el baño."] },
          { "en": "a bathroom sink", "es": "un lavabo", "imagen": "Lavabo del baño con espejo", "ejemplo": ["It's a bathroom sink. The sink is white.", "Es un lavabo. El lavabo es blanco."] }
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
      { "en": "The kitchen is small but the living room is big.", "es": "La cocina es pequeña pero la sala es grande.", "imagen": "Casa vista por dentro con una cocina pequeña junto a una sala muy amplia" },
      { "en": "The teacher is in the classroom and the students are happy.", "es": "El maestro está en el salón y los estudiantes están felices.", "imagen": "Maestra en el salón de clases con estudiantes sonriendo" },
      { "en": "This is an old clock and it is very beautiful.", "es": "Este es un reloj viejo y es muy bonito.", "imagen": "Reloj antiguo de madera, elegante, en una pared" },
      { "en": "The pencils are in the pencil case.", "es": "Los lápices están en el estuche.", "imagen": "Lápices de colores dentro de un estuche abierto" },
      { "en": "My father is an architect and my mother is a nurse.", "es": "Mi papá es arquitecto y mi mamá es enfermera.", "imagen": "Pareja: él con planos de arquitecto y ella con uniforme de enfermera" },
      { "en": "The towel is in the bathroom.", "es": "La toalla está en el baño.", "imagen": "Toalla colgada en un baño limpio" },
      { "en": "It is an easy exercise.", "es": "Es un ejercicio fácil.", "imagen": "Estudiante sonriendo mientras resuelve un ejercicio en su cuaderno" },
      { "en": "The book on the desk is a dictionary.", "es": "El libro que está en el escritorio es un diccionario.", "imagen": "Diccionario grueso sobre un escritorio" },
      { "en": "The refrigerator is new and the stove is old.", "es": "El refrigerador es nuevo y la estufa es vieja.", "imagen": "Cocina con un refrigerador moderno junto a una estufa antigua" },
      { "en": "My brother is a student at the university.", "es": "Mi hermano es estudiante en la universidad.", "imagen": "Joven con mochila y libros en el campus de una universidad" },
      { "en": "An hour is sixty minutes.", "es": "Una hora tiene sesenta minutos.", "imagen": "Reloj de pared con la manecilla dando una vuelta completa" },
      { "en": "The moon is beautiful tonight.", "es": "La luna está hermosa esta noche.", "imagen": "Luna llena brillante en un cielo nocturno despejado" },
      { "en": "It is a comfortable sofa.", "es": "Es un sofá cómodo.", "imagen": "Persona relajada y sonriente en un sofá muy cómodo" },
      { "en": "The windows in my bedroom are very big.", "es": "Las ventanas de mi recámara son muy grandes.", "imagen": "Recámara luminosa con ventanales muy grandes" }
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
  {
    "id": "a1-05",
    "num": 5,
    "titulo": "Plurales regulares e irregulares",
    "contexto": "Cosas que tengo",
    "explicacion": {
      "es": [
        "Para hablar de **más de una cosa**, casi siempre se agrega **-s**: *one book, two books*.",
        "Si la palabra termina en **s, ss, sh, ch, x** o a veces **o**, se agrega **-es**: *bus → buses, box → boxes, tomato → tomatoes*.",
        "Si termina en **consonante + y**, la *y* cambia a **-ies**: *city → cities*. Si antes de la *y* hay vocal, solo se agrega *-s*: *key → keys*.",
        "Muchas palabras terminadas en **f** o **fe** cambian a **-ves**: *knife → knives*.",
        "Algunas son **irregulares** y se aprenden de memoria: *man → men, child → children, foot → feet*. Otras no cambian: *sheep, fish*."
      ],
      "tabla": { "columnas": ["Regla", "Singular", "Plural"], "filas": [["La mayoría: -s", "book", "books"], ["s, ss, sh, ch, x: -es", "box", "boxes"], ["Algunas en o: -es", "tomato", "tomatoes"], ["Consonante + y: -ies", "city", "cities"], ["Vocal + y: -s", "key", "keys"], ["f / fe: -ves", "knife", "knives"], ["Irregulares", "man, child, foot, tooth", "men, children, feet, teeth"], ["No cambian", "sheep, fish", "sheep, fish"]] },
      "ojo": [
        "Los adjetivos **no** llevan plural: *red cars* (no *reds cars*).",
        "Con plurales no se usa *a* ni *an*: *books* (no *a books*).",
        "*People* ya es plural: *The people **are** friendly* (no *The people is*).",
        "Algunas palabras **siempre** van en plural: *My pants **are** new* (no *My pant is new*).",
        "Se dice *children, men, feet*, nunca *childs, mans, foots*."
      ],
      "en": [
        "To make most nouns plural, add **-s**: book, books.",
        "Add **-es** after s, ss, sh, ch and x: box, boxes.",
        "Consonant plus y changes to **-ies**: city, cities.",
        "Some nouns are irregular: man, men. Child, children. Foot, feet."
      ]
    },
    "vocabulario": [
      { "en": "keys", "es": "llaves (una: key)", "imagen": "Varias llaves en un llavero sobre una mesa", "ejemplo": ["My keys are in my bag.", "Mis llaves están en mi bolsa."] },
      { "en": "shoes", "es": "zapatos (uno: shoe)", "imagen": "Par de zapatos nuevos", "ejemplo": ["My shoes are black.", "Mis zapatos son negros."] },
      { "en": "socks", "es": "calcetines (uno: sock)", "imagen": "Calcetines de colores doblados", "ejemplo": ["My socks are clean.", "Mis calcetines están limpios."] },
      { "en": "pens", "es": "plumas (una: pen)", "imagen": "Varias plumas de colores en un vaso", "ejemplo": ["The pens are on the desk.", "Las plumas están en el escritorio."] },
      { "en": "books", "es": "libros (uno: book)", "imagen": "Muchos libros en un librero", "ejemplo": ["My books are on the shelf.", "Mis libros están en el estante."] },
      { "en": "phones", "es": "teléfonos (uno: phone)", "imagen": "Varios celulares sobre una mesa", "ejemplo": ["The phones are new.", "Los teléfonos son nuevos."] },
      { "en": "cars", "es": "coches (uno: car)", "imagen": "Fila de coches estacionados", "ejemplo": ["The cars are red.", "Los coches son rojos."] },
      { "en": "bikes", "es": "bicicletas (una: bike)", "imagen": "Varias bicicletas estacionadas", "ejemplo": ["Our bikes are in the garden.", "Nuestras bicicletas están en el jardín."] },
      { "en": "hats", "es": "sombreros (uno: hat)", "imagen": "Varios sombreros colgados en la pared", "ejemplo": ["These hats are big.", "Estos sombreros son grandes."] },
      { "en": "shirts", "es": "camisas (una: shirt)", "imagen": "Camisas de colores colgadas en un clóset", "ejemplo": ["My shirts are in the closet.", "Mis camisas están en el clóset."] },
      { "en": "jackets", "es": "chamarras (una: jacket)", "imagen": "Varias chamarras colgadas en un perchero", "ejemplo": ["Our jackets are warm.", "Nuestras chamarras son calientitas."] },
      { "en": "coins", "es": "monedas (una: coin)", "imagen": "Monedas sobre una mesa", "ejemplo": ["The coins are old.", "Las monedas son antiguas."] },
      { "en": "tickets", "es": "boletos (uno: ticket)", "imagen": "Dos boletos en la mano de una persona", "ejemplo": ["Our tickets are in my bag.", "Nuestros boletos están en mi bolsa."] },
      { "en": "photos", "es": "fotos (una: photo)", "imagen": "Fotos familiares sobre una mesa", "ejemplo": ["The photos are beautiful.", "Las fotos son hermosas."] },
      { "en": "toys", "es": "juguetes (uno: toy)", "imagen": "Juguetes de colores en el piso", "ejemplo": ["The toys are on the floor.", "Los juguetes están en el piso."] },
      { "en": "games", "es": "juegos (uno: game)", "imagen": "Juegos de mesa apilados", "ejemplo": ["These games are fun.", "Estos juegos son divertidos."] }
    ],
    "grupos": [
      {
        "id": "es",
        "titulo": "Plurales con -es",
        "icono": "📦",
        "patron": ["one box, two boxes", "The buses are late.", "My glasses are clean."],
        "palabras": [
          { "en": "watches", "es": "relojes de pulsera (uno: watch)", "imagen": "Varios relojes de pulsera en una vitrina", "ejemplo": ["My watches are old.", "Mis relojes son viejos."] },
          { "en": "boxes", "es": "cajas (una: box)", "imagen": "Cajas de cartón apiladas", "ejemplo": ["The boxes are heavy.", "Las cajas están pesadas."] },
          { "en": "dishes", "es": "platos, trastes (uno: dish)", "imagen": "Pila de platos limpios", "ejemplo": ["The dishes are clean.", "Los platos están limpios."] },
          { "en": "glasses", "es": "vasos (uno: glass)", "imagen": "Varios vasos de agua en una charola", "ejemplo": ["The glasses are on the table.", "Los vasos están en la mesa."] },
          { "en": "buses", "es": "autobuses (uno: bus)", "imagen": "Autobuses en una estación", "ejemplo": ["The buses are full.", "Los autobuses están llenos."] },
          { "en": "dresses", "es": "vestidos (uno: dress)", "imagen": "Vestidos de colores colgados en una tienda", "ejemplo": ["Her dresses are beautiful.", "Sus vestidos son hermosos."] },
          { "en": "brushes", "es": "brochas, cepillos (uno: brush)", "imagen": "Brochas de pintura en un frasco", "ejemplo": ["The brushes are wet.", "Las brochas están mojadas."] },
          { "en": "sandwiches", "es": "sándwiches (uno: sandwich)", "imagen": "Plato con varios sándwiches", "ejemplo": ["The sandwiches are delicious.", "Los sándwiches están deliciosos."] },
          { "en": "tomatoes", "es": "tomates (uno: tomato)", "imagen": "Tomates rojos en una canasta", "ejemplo": ["The tomatoes are red.", "Los tomates son rojos."] },
          { "en": "potatoes", "es": "papas (una: potato)", "imagen": "Papas en un costal", "ejemplo": ["The potatoes are hot.", "Las papas están calientes."] },
          { "en": "beaches", "es": "playas (una: beach)", "imagen": "Vista aérea de una costa con varias playas", "ejemplo": ["The beaches in Mexico are beautiful.", "Las playas de México son hermosas."] },
          { "en": "classes", "es": "clases (una: class)", "imagen": "Salón de clases", "ejemplo": ["My classes are in the morning.", "Mis clases son en la mañana."] }
        ]
      },
      {
        "id": "ies",
        "titulo": "Plurales con -ies",
        "icono": "👶",
        "patron": ["one city, two cities", "The babies are asleep.", "My parties are fun."],
        "palabras": [
          { "en": "babies", "es": "bebés (uno: baby)", "imagen": "Dos bebés sonriendo juntos", "ejemplo": ["The babies are asleep.", "Los bebés están dormidos."] },
          { "en": "cities", "es": "ciudades (una: city)", "imagen": "Collage de dos ciudades con rascacielos", "ejemplo": ["The cities are big.", "Las ciudades son grandes."] },
          { "en": "countries", "es": "países (uno: country)", "imagen": "Mapa con varios países de colores", "ejemplo": ["Canada and Mexico are countries.", "Canadá y México son países."] },
          { "en": "families", "es": "familias (una: family)", "imagen": "Dos familias conviviendo en un parque", "ejemplo": ["Our families are at the park.", "Nuestras familias están en el parque."] },
          { "en": "parties", "es": "fiestas (una: party)", "imagen": "Personas celebrando en una fiesta con globos", "ejemplo": ["Her parties are fun.", "Sus fiestas son divertidas."] },
          { "en": "stories", "es": "cuentos, historias (uno: story)", "imagen": "Abuela leyendo cuentos a sus nietos", "ejemplo": ["These stories are funny.", "Estos cuentos son chistosos."] },
          { "en": "ladies", "es": "señoras, damas (una: lady)", "imagen": "Dos señoras elegantes tomando té", "ejemplo": ["The ladies are very kind.", "Las señoras son muy amables."] },
          { "en": "berries", "es": "moras, frutos rojos (una: berry)", "imagen": "Tazón de frutos rojos", "ejemplo": ["The berries are sweet.", "Los frutos rojos son dulces."] },
          { "en": "butterflies", "es": "mariposas (una: butterfly)", "imagen": "Mariposas de colores en un jardín", "ejemplo": ["The butterflies are beautiful.", "Las mariposas son hermosas."] },
          { "en": "dictionaries", "es": "diccionarios (uno: dictionary)", "imagen": "Varios diccionarios en una mesa", "ejemplo": ["The dictionaries are on the desk.", "Los diccionarios están en el escritorio."] }
        ]
      },
      {
        "id": "ves",
        "titulo": "Plurales con -ves",
        "icono": "🍂",
        "patron": ["one knife, two knives", "The leaves are red.", "Our wives are friends."],
        "palabras": [
          { "en": "knives", "es": "cuchillos (uno: knife)", "imagen": "Juego de cuchillos en la cocina", "ejemplo": ["The knives are sharp.", "Los cuchillos tienen filo."] },
          { "en": "wives", "es": "esposas (una: wife)", "imagen": "Dos parejas; las esposas conversan sonriendo", "ejemplo": ["Their wives are friends.", "Sus esposas son amigas."] },
          { "en": "leaves", "es": "hojas de árbol (una: leaf)", "imagen": "Hojas de otoño cayendo", "ejemplo": ["The leaves are yellow.", "Las hojas son amarillas."] },
          { "en": "wolves", "es": "lobos (uno: wolf)", "imagen": "Lobos en un bosque nevado", "ejemplo": ["The wolves are dangerous.", "Los lobos son peligrosos."] },
          { "en": "loaves", "es": "hogazas de pan (una: loaf)", "imagen": "Varias hogazas de pan recién horneadas", "ejemplo": ["The loaves are hot.", "Los panes están calientes."] },
          { "en": "shelves", "es": "estantes (uno: shelf)", "imagen": "Estantes de madera en la pared", "ejemplo": ["The shelves are full.", "Los estantes están llenos."] },
          { "en": "thieves", "es": "ladrones (uno: thief)", "imagen": "Dos ladrones con antifaz huyendo", "ejemplo": ["The thieves are in the store.", "Los ladrones están en la tienda."] },
          { "en": "scarves", "es": "bufandas (una: scarf)", "imagen": "Bufandas de colores en un perchero", "ejemplo": ["My scarves are warm.", "Mis bufandas son calientitas."] },
          { "en": "halves", "es": "mitades (una: half)", "imagen": "Naranja partida en dos mitades", "ejemplo": ["The two halves are equal.", "Las dos mitades son iguales."] }
        ]
      },
      {
        "id": "irregulares",
        "titulo": "Plurales irregulares",
        "icono": "🦶",
        "patron": ["one man, two men", "one child, two children", "one foot, two feet"],
        "palabras": [
          { "en": "men", "es": "hombres (uno: man)", "imagen": "Grupo de hombres conversando", "ejemplo": ["The men are at work.", "Los hombres están en el trabajo."] },
          { "en": "women", "es": "mujeres (una: woman)", "imagen": "Grupo de mujeres sonriendo", "ejemplo": ["The women are doctors.", "Las mujeres son doctoras."] },
          { "en": "children", "es": "niños (uno: child)", "imagen": "Grupo de niños corriendo", "ejemplo": ["The children are in the park.", "Los niños están en el parque."] },
          { "en": "people", "es": "personas, gente (una: person)", "imagen": "Mucha gente en una plaza", "ejemplo": ["The people are very friendly.", "Las personas son muy amigables."] },
          { "en": "feet", "es": "pies (uno: foot)", "imagen": "Dos pies descalzos sobre la arena", "ejemplo": ["My feet are cold.", "Tengo los pies fríos."] },
          { "en": "teeth", "es": "dientes (uno: tooth)", "imagen": "Sonrisa con dientes blancos", "ejemplo": ["Her teeth are white.", "Sus dientes son blancos."] },
          { "en": "mice", "es": "ratones (uno: mouse)", "imagen": "Dos ratones pequeños comiendo queso", "ejemplo": ["The mice are small.", "Los ratones son pequeños."] },
          { "en": "geese", "es": "gansos (uno: goose)", "imagen": "Gansos caminando junto a un lago", "ejemplo": ["The geese are at the lake.", "Los gansos están en el lago."] },
          { "en": "sheep", "es": "ovejas (igual en singular y plural)", "imagen": "Rebaño de ovejas en el campo", "ejemplo": ["The sheep are in the field.", "Las ovejas están en el campo."] },
          { "en": "fish", "es": "peces, pescados (igual en singular y plural)", "imagen": "Peces de colores en una pecera", "ejemplo": ["The fish are orange.", "Los peces son anaranjados."] },
          { "en": "deer", "es": "venados (igual en singular y plural)", "imagen": "Venados en un bosque", "ejemplo": ["The deer are beautiful.", "Los venados son hermosos."] }
        ]
      },
      {
        "id": "siempre",
        "titulo": "Siempre en plural",
        "icono": "👖",
        "patron": ["My pants are new.", "Where are my sunglasses?", "The scissors are sharp."],
        "palabras": [
          { "en": "pants", "es": "pantalones", "imagen": "Pantalones doblados sobre una cama", "ejemplo": ["My pants are blue.", "Mis pantalones son azules."] },
          { "en": "jeans", "es": "jeans, pantalones de mezclilla", "imagen": "Jeans colgados en una tienda", "ejemplo": ["Her jeans are new.", "Sus jeans son nuevos."] },
          { "en": "shorts", "es": "pantalones cortos, shorts", "imagen": "Shorts de verano sobre una toalla", "ejemplo": ["My shorts are in the bag.", "Mis shorts están en la bolsa."] },
          { "en": "sunglasses", "es": "lentes de sol", "imagen": "Lentes de sol sobre la arena", "ejemplo": ["My sunglasses are on the table.", "Mis lentes de sol están en la mesa."] },
          { "en": "scissors", "es": "tijeras", "imagen": "Tijeras cortando papel de colores", "ejemplo": ["The scissors are sharp.", "Las tijeras tienen filo."] },
          { "en": "pajamas", "es": "pijama", "imagen": "Pijama doblada sobre la cama", "ejemplo": ["My pajamas are soft.", "Mi pijama es suave."] },
          { "en": "headphones", "es": "audífonos", "imagen": "Audífonos sobre un escritorio", "ejemplo": ["My headphones are new.", "Mis audífonos son nuevos."] },
          { "en": "clothes", "es": "ropa", "imagen": "Ropa doblada en un clóset", "ejemplo": ["My clothes are clean.", "Mi ropa está limpia."] }
        ]
      }
    ],
    "ejemplos": [
      { "en": "I have two cats.", "es": "Tengo dos gatos.", "imagen": "Dos gatos sentados juntos en un sofá" },
      { "en": "My shoes are new.", "es": "Mis zapatos son nuevos." },
      { "en": "The books are on the table.", "es": "Los libros están en la mesa." },
      { "en": "The boxes are heavy.", "es": "Las cajas están pesadas." },
      { "en": "The babies are asleep.", "es": "Los bebés están dormidos." },
      { "en": "My feet are cold.", "es": "Tengo los pies fríos." },
      { "en": "The men are at work.", "es": "Los hombres están en el trabajo." },
      { "en": "The women are doctors.", "es": "Las mujeres son doctoras." },
      { "en": "Her teeth are white.", "es": "Sus dientes son blancos." },
      { "en": "The sheep are in the field.", "es": "Las ovejas están en el campo." }
    ],
    "frases": [
      { "en": "The children are happy because the toys are new.", "es": "Los niños están felices porque los juguetes son nuevos." },
      { "en": "My keys are in my bag and the phones are on the desk.", "es": "Mis llaves están en mi bolsa y los teléfonos están en el escritorio." },
      { "en": "The tomatoes and the potatoes are in the kitchen.", "es": "Los tomates y las papas están en la cocina." },
      { "en": "The cities in Mexico are big and beautiful.", "es": "Las ciudades de México son grandes y hermosas." },
      { "en": "My feet are tired and my shoes are old.", "es": "Tengo los pies cansados y mis zapatos son viejos." },
      { "en": "The knives are very sharp.", "es": "Los cuchillos tienen mucho filo." },
      { "en": "The women are teachers and the men are doctors.", "es": "Las mujeres son maestras y los hombres son doctores." },
      { "en": "My teeth are white and healthy.", "es": "Mis dientes son blancos y sanos." },
      { "en": "Our families are from different countries.", "es": "Nuestras familias son de países diferentes." },
      { "en": "The mice are small but the sheep are big.", "es": "Los ratones son pequeños pero las ovejas son grandes." },
      { "en": "My pants and my sunglasses are on the bed.", "es": "Mis pantalones y mis lentes de sol están en la cama." },
      { "en": "The leaves are red and yellow in the fall.", "es": "En otoño las hojas son rojas y amarillas." }
    ],
    "listening": [
      { "audio": "My keys are on the table.", "pregunta": "¿Dónde están las llaves?", "opciones": ["En la mesa", "En la bolsa", "En el coche", "En la cama"] },
      { "audio": "There are three children in the park.", "pregunta": "¿Cuántos niños hay en el parque?", "opciones": ["Tres", "Dos", "Cuatro", "Trece"] },
      { "audio": "The tomatoes are in the kitchen.", "pregunta": "¿Qué está en la cocina?", "opciones": ["Los tomates", "Las papas", "Los platos", "Los cuchillos"] },
      { "audio": "My feet are cold because my socks are wet.", "pregunta": "¿Por qué tiene fríos los pies?", "opciones": ["Sus calcetines están mojados", "Sus zapatos son viejos", "No tiene calcetines", "Está en la nieve"] },
      { "audio": "The two men are doctors and the women are teachers.", "pregunta": "¿Quiénes son maestras?", "opciones": ["Las mujeres", "Los hombres", "Las niñas", "Las doctoras"] }
    ],
    "lectura": {
      "titulo": "My things",
      "texto": "Hi, I'm Marta. These are my things. My clothes are in the closet. My jeans are blue and my shirts are white. My shoes are under the bed. My books are on the shelves, and my two cats are on the books! My keys are in my bag. My photos are on the wall. They are photos of my family. The children in the photos are my brothers.",
      "preguntas": [
        { "pregunta": "¿De qué color son sus jeans?", "opciones": ["Azules", "Blancos", "Negros", "Rojos"] },
        { "pregunta": "¿Dónde están sus zapatos?", "opciones": ["Debajo de la cama", "En el clóset", "En los estantes", "En la bolsa"] },
        { "pregunta": "¿Qué está sobre los libros?", "opciones": ["Dos gatos", "Sus llaves", "Sus fotos", "Su ropa"] },
        { "pregunta": "¿Quiénes son los niños de las fotos?", "opciones": ["Sus hermanos", "Sus hijos", "Sus amigos", "Sus primos"] }
      ]
    },
    "escritura": [
      { "instruccion": "Escribe el plural.", "pregunta": "box", "respuestas": ["boxes"] },
      { "instruccion": "Escribe el plural.", "pregunta": "city", "respuestas": ["cities"] },
      { "instruccion": "Escribe el plural.", "pregunta": "key", "respuestas": ["keys"] },
      { "instruccion": "Escribe el plural.", "pregunta": "knife", "respuestas": ["knives"] },
      { "instruccion": "Escribe el plural.", "pregunta": "man", "respuestas": ["men"] },
      { "instruccion": "Escribe el plural.", "pregunta": "child", "respuestas": ["children"] },
      { "instruccion": "Escribe el plural.", "pregunta": "tooth", "respuestas": ["teeth"] },
      { "instruccion": "Corrige la oración.", "pregunta": "The peoples are friendly.", "respuestas": ["The people are friendly"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "Mis zapatos son nuevos.", "respuestas": ["My shoes are new"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "Los niños están felices.", "respuestas": ["The children are happy", "The kids are happy"] }
    ],
    "examen": [
      { "tipo": "opcion", "pregunta": "one bus, two ___", "opciones": ["buses", "buss", "busies", "bus"] },
      { "tipo": "opcion", "pregunta": "one baby, two ___", "opciones": ["babies", "babys", "babyes", "baby"] },
      { "tipo": "opcion", "pregunta": "one foot, two ___", "opciones": ["feet", "foots", "feets", "footes"] },
      { "tipo": "opcion", "pregunta": "one leaf, two ___", "opciones": ["leaves", "leafs", "leafes", "leaf"] },
      { "tipo": "opcion", "pregunta": "Elige la oración correcta.", "opciones": ["The cars are red.", "The cars are reds.", "The car are red.", "A cars are red."] },
      { "tipo": "opcion", "pregunta": "My pants ___ new.", "opciones": ["are", "is", "am", "be"] },
      { "tipo": "listening", "audio": "My sunglasses are in the car.", "pregunta": "¿Dónde están los lentes de sol?", "opciones": ["En el coche", "En la casa", "En la bolsa", "En la playa"] },
      { "tipo": "listening", "audio": "The women are in the kitchen and the children are in the garden.", "pregunta": "¿Dónde están los niños?", "opciones": ["En el jardín", "En la cocina", "En la escuela", "En la sala"] },
      { "tipo": "escribir", "pregunta": "Escribe el plural de: mouse", "respuestas": ["mice"] },
      { "tipo": "escribir", "pregunta": "Traduce: Las cajas están pesadas.", "respuestas": ["The boxes are heavy"] }
    ]
  },
  {
    "id": "a1-06",
    "num": 6,
    "titulo": "Demostrativos this / that / these / those",
    "contexto": "De compras: ¿qué es esto?",
    "explicacion": {
      "es": [
        "Los **demostrativos** señalan cosas o personas. Dependen de **cuántas son** y de **qué tan cerca están**.",
        "**This** (este, esta, esto) es para una cosa **cerca** de ti, y **these** (estos, estas) para varias cosas cerca.",
        "**That** (ese, esa, aquel) es para una cosa **lejos** de ti, y **those** (esos, esas, aquellos) para varias cosas lejos.",
        "Para preguntar, se usa *What is this?* o *What are those?* Se responde con **It's…** en singular y **They're…** en plural."
      ],
      "tabla": { "columnas": ["", "Cerca", "Lejos"], "filas": [["Una cosa", "this (este, esta)", "that (ese, esa)"], ["Varias cosas", "these (estos, estas)", "those (esos, esas)"], ["Ejemplo singular", "This shirt is new.", "That shirt is old."], ["Ejemplo plural", "These shoes are new.", "Those shoes are old."]] },
      "ojo": [
        "*This* y *that* van con **is**; *these* y *those* van con **are**: *These **are** my keys* (no *These is*).",
        "*This* suena corto y *these* suena largo. Practica la diferencia: *this shirt, these shirts*.",
        "En inglés el adjetivo y el demostrativo no se ponen en plural como en español: *these red shoes* (no *theses reds shoes*).",
        "*Jeans, pants* y *sunglasses* son plurales: *These jeans **are** nice*.",
        "Para no repetir la palabra se dice *this one*: *I'd like this one*."
      ],
      "en": [
        "Use **this** and **these** for things near you.",
        "Use **that** and **those** for things far from you.",
        "This and that are singular: This is my bag.",
        "These and those are plural: Those are my shoes."
      ]
    },
    "vocabulario": [
      { "en": "a store", "es": "una tienda", "imagen": "Fachada de una tienda con aparador", "ejemplo": ["This store is very big.", "Esta tienda es muy grande."] },
      { "en": "a customer", "es": "un cliente", "imagen": "Cliente mirando productos en una tienda", "ejemplo": ["That customer is very happy.", "Ese cliente está muy contento."] },
      { "en": "a cashier", "es": "un cajero", "imagen": "Cajera cobrando en el supermercado", "ejemplo": ["This cashier is very kind.", "Este cajero es muy amable."] },
      { "en": "a price", "es": "un precio", "imagen": "Etiqueta de precio colgando de una prenda", "ejemplo": ["That price is very good.", "Ese precio es muy bueno."] },
      { "en": "money", "es": "dinero", "imagen": "Billetes y monedas sobre una mesa", "ejemplo": ["This money is for my books.", "Este dinero es para mis libros."] },
      { "en": "cash", "es": "efectivo", "imagen": "Mano entregando billetes en una caja", "ejemplo": ["This is my cash.", "Este es mi efectivo."] },
      { "en": "change", "es": "cambio (dinero)", "imagen": "Monedas sobre una mesa", "ejemplo": ["This is your change.", "Este es su cambio."] },
      { "en": "a credit card", "es": "una tarjeta de crédito", "imagen": "Mano pagando con tarjeta en una terminal", "ejemplo": ["This is my credit card.", "Esta es mi tarjeta de crédito."] },
      { "en": "a receipt", "es": "un recibo, un ticket", "imagen": "Recibo de compra en la mano de una persona", "ejemplo": ["Is this your receipt?", "¿Este es tu recibo?"] },
      { "en": "a shopping bag", "es": "una bolsa de compras", "imagen": "Persona cargando bolsas de compras", "ejemplo": ["That shopping bag is heavy.", "Esa bolsa de compras está pesada."] },
      { "en": "a shopping cart", "es": "un carrito de compras", "imagen": "Carrito de supermercado lleno", "ejemplo": ["This shopping cart is full.", "Este carrito de compras está lleno."] },
      { "en": "a sale", "es": "una oferta, rebajas", "imagen": "Aparador de tienda con ambiente de rebajas", "ejemplo": ["This sale is great.", "Esta oferta es excelente."] },
      { "en": "a size", "es": "una talla", "imagen": "Cinta métrica sobre una prenda de ropa", "ejemplo": ["This size is perfect.", "Esta talla es perfecta."] },
      { "en": "a fitting room", "es": "un probador", "imagen": "Persona frente al espejo de un probador", "ejemplo": ["That fitting room is free.", "Ese probador está libre."] },
      { "en": "a mall", "es": "un centro comercial", "imagen": "Interior de un centro comercial con gente", "ejemplo": ["This mall is new.", "Este centro comercial es nuevo."] },
      { "en": "a market", "es": "un mercado", "imagen": "Puestos de un mercado con frutas", "ejemplo": ["That market is very old.", "Ese mercado es muy antiguo."] }
    ],
    "grupos": [
      {
        "id": "ropa",
        "titulo": "La ropa",
        "icono": "👕",
        "patron": ["This shirt is new.", "That coat is warm.", "Those shoes are nice."],
        "palabras": [
          { "en": "a shirt", "es": "una camisa", "imagen": "Camisas colgadas", "ejemplo": ["This shirt is white.", "Esta camisa es blanca."] },
          { "en": "a T-shirt", "es": "una playera", "imagen": "Playera blanca doblada", "ejemplo": ["That T-shirt is cheap.", "Esa playera es barata."] },
          { "en": "a sweater", "es": "un suéter", "imagen": "Suéter de lana doblado", "ejemplo": ["This sweater is warm.", "Este suéter es calientito."] },
          { "en": "a jacket", "es": "una chamarra", "imagen": "Chamarras colgadas", "ejemplo": ["That jacket is black.", "Esa chamarra es negra."] },
          { "en": "a coat", "es": "un abrigo", "imagen": "Abrigo largo en un perchero", "ejemplo": ["This coat is very long.", "Este abrigo es muy largo."] },
          { "en": "a dress", "es": "un vestido", "imagen": "Vestidos colgados", "ejemplo": ["That dress is beautiful.", "Ese vestido es hermoso."] },
          { "en": "a skirt", "es": "una falda", "imagen": "Falda de colores en un gancho", "ejemplo": ["This skirt is blue.", "Esta falda es azul."] },
          { "en": "a suit", "es": "un traje", "imagen": "Traje elegante en un maniquí", "ejemplo": ["That suit is expensive.", "Ese traje es caro."] },
          { "en": "a tie", "es": "una corbata", "imagen": "Corbata de seda enrollada", "ejemplo": ["This tie is red.", "Esta corbata es roja."] },
          { "en": "a belt", "es": "un cinturón", "imagen": "Cinturón de piel enrollado", "ejemplo": ["That belt is brown.", "Ese cinturón es café."] },
          { "en": "a hat", "es": "un sombrero", "imagen": "Sombreros en la pared", "ejemplo": ["This hat is too big.", "Este sombrero es demasiado grande."] },
          { "en": "a pair of shoes", "es": "un par de zapatos", "imagen": "Par de zapatos", "ejemplo": ["These shoes are new.", "Estos zapatos son nuevos."] }
        ]
      },
      {
        "id": "accesorios",
        "titulo": "Los accesorios",
        "icono": "💍",
        "patron": ["This ring is beautiful.", "These earrings are new.", "Is that your wallet?"],
        "palabras": [
          { "en": "a watch", "es": "un reloj de pulsera", "imagen": "Relojes en una vitrina", "ejemplo": ["This watch is very nice.", "Este reloj es muy bonito."] },
          { "en": "a ring", "es": "un anillo", "imagen": "Anillo de oro en su estuche", "ejemplo": ["That ring is expensive.", "Ese anillo es caro."] },
          { "en": "a necklace", "es": "un collar", "imagen": "Collar elegante sobre terciopelo", "ejemplo": ["This necklace is from Italy.", "Este collar es de Italia."] },
          { "en": "earrings", "es": "aretes", "imagen": "Par de aretes brillantes", "ejemplo": ["These earrings are small.", "Estos aretes son pequeños."] },
          { "en": "a bracelet", "es": "una pulsera", "imagen": "Pulsera en la muñeca de una mujer", "ejemplo": ["That bracelet is silver.", "Esa pulsera es de plata."] },
          { "en": "a wallet", "es": "una cartera", "imagen": "Cartera de piel con billetes", "ejemplo": ["Is this your wallet?", "¿Esta es tu cartera?"] },
          { "en": "a purse", "es": "una bolsa de mano", "imagen": "Bolsa de mano elegante", "ejemplo": ["That purse is very pretty.", "Esa bolsa de mano es muy bonita."] },
          { "en": "a scarf", "es": "una bufanda", "imagen": "Bufandas de colores", "ejemplo": ["This scarf is soft.", "Esta bufanda es suave."] },
          { "en": "a backpack", "es": "una mochila", "imagen": "Mochila escolar", "ejemplo": ["That backpack is heavy.", "Esa mochila está pesada."] },
          { "en": "sunglasses", "es": "lentes de sol", "imagen": "Lentes de sol", "ejemplo": ["Those sunglasses are cool.", "Esos lentes de sol están padres."] }
        ]
      },
      {
        "id": "colores",
        "titulo": "Los colores",
        "icono": "🎨",
        "patron": ["This shirt is red.", "Those shoes are black.", "What color is that?"],
        "palabras": [
          { "en": "red", "es": "rojo", "imagen": "Manzana roja brillante", "ejemplo": ["This dress is red.", "Este vestido es rojo."] },
          { "en": "blue", "es": "azul", "imagen": "Cielo azul despejado", "ejemplo": ["These jeans are blue.", "Estos jeans son azules."] },
          { "en": "green", "es": "verde", "imagen": "Hojas verdes en primer plano", "ejemplo": ["That hat is green.", "Ese sombrero es verde."] },
          { "en": "yellow", "es": "amarillo", "imagen": "Girasol amarillo", "ejemplo": ["This T-shirt is yellow.", "Esta playera es amarilla."] },
          { "en": "orange", "es": "anaranjado", "imagen": "Naranjas anaranjadas", "ejemplo": ["That bag is orange.", "Esa bolsa es anaranjada."] },
          { "en": "purple", "es": "morado", "imagen": "Racimo de uvas moradas", "ejemplo": ["This skirt is purple.", "Esta falda es morada."] },
          { "en": "pink", "es": "rosa", "imagen": "Flores rosas", "ejemplo": ["These socks are pink.", "Estos calcetines son rosas."] },
          { "en": "brown", "es": "café", "imagen": "Granos de café", "ejemplo": ["Those shoes are brown.", "Esos zapatos son cafés."] },
          { "en": "black", "es": "negro", "imagen": "Gato negro", "ejemplo": ["This coat is black.", "Este abrigo es negro."] },
          { "en": "white", "es": "blanco", "imagen": "Nieve blanca", "ejemplo": ["That shirt is white.", "Esa camisa es blanca."] },
          { "en": "gray", "es": "gris", "imagen": "Elefante gris", "ejemplo": ["This sweater is gray.", "Este suéter es gris."] }
        ]
      },
      {
        "id": "expresiones",
        "titulo": "Frases para comprar",
        "icono": "🛍️",
        "patron": ["How much is this?", "How much are these?", "I'd like this one."],
        "palabras": [
          { "en": "How much is this?", "es": "¿Cuánto cuesta esto?", "imagen": "Cliente preguntando el precio de una prenda", "ejemplo": ["How much is this? It's ten dollars.", "¿Cuánto cuesta esto? Cuesta diez dólares."] },
          { "en": "How much are these?", "es": "¿Cuánto cuestan estos?", "imagen": "Cliente señalando unos zapatos en la tienda", "ejemplo": ["How much are these? They're twenty dollars.", "¿Cuánto cuestan estos? Cuestan veinte dólares."] },
          { "en": "It's expensive.", "es": "Es caro.", "imagen": "Persona sorprendida al ver una etiqueta de precio", "ejemplo": ["This watch is nice, but it's expensive.", "Este reloj es bonito, pero es caro."] },
          { "en": "It's cheap.", "es": "Es barato.", "imagen": "Persona contenta con una prenda barata", "ejemplo": ["This T-shirt is good and it's cheap.", "Esta playera es buena y es barata."] },
          { "en": "It's on sale.", "es": "Está en oferta.", "imagen": "Prenda con un cartel de oferta", "ejemplo": ["This jacket is new and it's on sale.", "Esta chamarra es nueva y está en oferta."] },
          { "en": "I'd like this one.", "es": "Quisiera este.", "imagen": "Cliente señalando un producto en el aparador", "ejemplo": ["I'd like this one, please.", "Quisiera este, por favor."] },
          { "en": "Can I try this on?", "es": "¿Me lo puedo probar?", "imagen": "Cliente mostrando una prenda a la vendedora", "ejemplo": ["Can I try this on? Yes, you can.", "¿Me lo puedo probar? Sí."] },
          { "en": "What size is this?", "es": "¿De qué talla es esto?", "imagen": "Vendedora revisando la etiqueta de una camisa", "ejemplo": ["What size is this? It's medium.", "¿De qué talla es esto? Es mediana."] },
          { "en": "I'll take these.", "es": "Me llevo estos.", "imagen": "Cliente entregando unos zapatos a la cajera", "ejemplo": ["They're nice. I'll take these.", "Están bonitos. Me llevo estos."] },
          { "en": "That's all, thank you.", "es": "Es todo, gracias.", "imagen": "Cliente sonriendo en la caja al terminar su compra", "ejemplo": ["That's all, thank you. Goodbye.", "Es todo, gracias. Adiós."] }
        ]
      }
    ],
    "ejemplos": [
      { "en": "This is my shirt.", "es": "Esta es mi camisa." },
      { "en": "That is a big store.", "es": "Esa es una tienda grande." },
      { "en": "These are my shoes.", "es": "Estos son mis zapatos." },
      { "en": "Those are expensive watches.", "es": "Esos son relojes caros." },
      { "en": "What is this? It's a wallet.", "es": "¿Qué es esto? Es una cartera." },
      { "en": "What are those? They're earrings.", "es": "¿Qué son esos? Son aretes." },
      { "en": "This T-shirt is cheap.", "es": "Esta playera es barata." },
      { "en": "That dress is beautiful.", "es": "Ese vestido es hermoso." },
      { "en": "These jeans are new.", "es": "Estos jeans son nuevos." },
      { "en": "Those sunglasses are expensive.", "es": "Esos lentes de sol son caros." }
    ],
    "frases": [
      { "en": "This shirt is cheap but that jacket is expensive.", "es": "Esta camisa es barata pero esa chamarra es cara." },
      { "en": "These shoes are nice and they are on sale.", "es": "Estos zapatos son bonitos y están en oferta." },
      { "en": "Those women are customers in this store.", "es": "Esas mujeres son clientas de esta tienda." },
      { "en": "This is my credit card and that is my receipt.", "es": "Esta es mi tarjeta de crédito y ese es mi recibo." },
      { "en": "What size is this skirt? It's small.", "es": "¿De qué talla es esta falda? Es chica." },
      { "en": "How much are those sunglasses? They are thirty dollars.", "es": "¿Cuánto cuestan esos lentes de sol? Cuestan treinta dólares." },
      { "en": "That mall is big and this market is small.", "es": "Ese centro comercial es grande y este mercado es pequeño." },
      { "en": "These earrings are beautiful but that necklace is better.", "es": "Estos aretes son hermosos pero ese collar es mejor." },
      { "en": "This wallet is brown and that purse is black.", "es": "Esta cartera es café y esa bolsa es negra." },
      { "en": "Those are my bags and these are your bags.", "es": "Esas son mis bolsas y estas son tus bolsas." }
    ],
    "listening": [
      { "audio": "This shirt is ten dollars.", "pregunta": "¿Cuánto cuesta la camisa?", "opciones": ["Diez dólares", "Doce dólares", "Veinte dólares", "Dos dólares"] },
      { "audio": "Those shoes are very expensive.", "pregunta": "¿Cómo son esos zapatos?", "opciones": ["Muy caros", "Muy baratos", "Muy viejos", "Muy grandes"] },
      { "audio": "What is that? It's a new store.", "pregunta": "¿Qué es eso?", "opciones": ["Una tienda nueva", "Un mercado viejo", "Una bolsa nueva", "Un centro comercial"] },
      { "audio": "These earrings are from Italy.", "pregunta": "¿De dónde son los aretes?", "opciones": ["De Italia", "De India", "De Francia", "De México"] },
      { "audio": "I'd like this one, please. That's all, thank you.", "pregunta": "¿Qué hace la persona?", "opciones": ["Termina una compra", "Pregunta una talla", "Busca el probador", "Devuelve un producto"] }
    ],
    "lectura": {
      "titulo": "At the mall",
      "texto": "Today Nina and Paula are at the mall. This store is new and the clothes are on sale. \"Look at this dress! It's blue and it's cheap,\" says Nina. \"And those shoes are beautiful,\" says Paula. \"How much are they?\" The shoes are fifty dollars. \"That's expensive,\" says Paula. Nina is happy with her dress, but Paula's bags are empty!",
      "preguntas": [
        { "pregunta": "¿Dónde están Nina y Paula?", "opciones": ["En el centro comercial", "En el mercado", "En la escuela", "En casa"] },
        { "pregunta": "¿De qué color es el vestido?", "opciones": ["Azul", "Rojo", "Negro", "Verde"] },
        { "pregunta": "¿Cuánto cuestan los zapatos?", "opciones": ["Cincuenta dólares", "Quince dólares", "Cinco dólares", "Quinientos dólares"] },
        { "pregunta": "¿Qué compra Paula?", "opciones": ["Nada", "Los zapatos", "El vestido", "Una bolsa"] }
      ]
    },
    "escritura": [
      { "instruccion": "Completa con this o these.", "pregunta": "___ shirt is new.", "respuestas": ["This"] },
      { "instruccion": "Completa con this o these.", "pregunta": "___ shoes are black.", "respuestas": ["These"] },
      { "instruccion": "Completa con that o those.", "pregunta": "___ store is big.", "respuestas": ["That"] },
      { "instruccion": "Completa con that o those.", "pregunta": "___ women are customers.", "respuestas": ["Those"] },
      { "instruccion": "Completa con is o are.", "pregunta": "These jeans ___ cheap.", "respuestas": ["are"] },
      { "instruccion": "Escribe en plural.", "pregunta": "This is my bag.", "respuestas": ["These are my bags"] },
      { "instruccion": "Escribe en singular.", "pregunta": "Those are my keys.", "respuestas": ["That is my key", "That's my key"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "¿Cuánto cuesta esto?", "respuestas": ["How much is this"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "Estos zapatos son caros.", "respuestas": ["These shoes are expensive"] },
      { "instruccion": "Corrige la oración.", "pregunta": "These is my wallet.", "respuestas": ["This is my wallet"] }
    ],
    "examen": [
      { "tipo": "opcion", "pregunta": "___ is my bag, here in my hand.", "opciones": ["This", "These", "Those", "They"] },
      { "tipo": "opcion", "pregunta": "___ are my shoes, over there.", "opciones": ["Those", "That", "This", "It"] },
      { "tipo": "opcion", "pregunta": "That jacket ___ expensive.", "opciones": ["is", "are", "am", "be"] },
      { "tipo": "opcion", "pregunta": "These sunglasses ___ new.", "opciones": ["are", "is", "am", "this"] },
      { "tipo": "opcion", "pregunta": "What are those? ___ earrings.", "opciones": ["They're", "It's", "This is", "That is"] },
      { "tipo": "opcion", "pregunta": "¿Cómo preguntas el precio de una camisa que tienes en la mano?", "opciones": ["How much is this?", "How much are those?", "How many is this?", "What is much this?"] },
      { "tipo": "listening", "audio": "This skirt is on sale. It's fifteen dollars.", "pregunta": "¿Cuánto cuesta la falda?", "opciones": ["Quince dólares", "Cincuenta dólares", "Cinco dólares", "Dieciséis dólares"] },
      { "tipo": "listening", "audio": "Is that your wallet? No, it isn't. My wallet is brown.", "pregunta": "¿De qué color es la cartera de quien responde?", "opciones": ["Café", "Negra", "Roja", "Gris"] },
      { "tipo": "escribir", "pregunta": "Escribe en plural: This is my key.", "respuestas": ["These are my keys"] },
      { "tipo": "escribir", "pregunta": "Traduce: Ese vestido es hermoso.", "respuestas": ["That dress is beautiful"] }
    ]
  },
  {
    "id": "a1-07",
    "num": 7,
    "titulo": "Adjetivos posesivos y posesivo 's",
    "contexto": "La familia",
    "explicacion": {
      "es": [
        "Los **adjetivos posesivos** dicen de quién es algo: **my** (mi), **your** (tu), **his** (su, de él), **her** (su, de ella), **its** (su, de una cosa o animal), **our** (nuestro) y **their** (su, de ellos).",
        "Van **antes** de la palabra y no cambian en plural: *my brother, my brothers*.",
        "El **posesivo 's** se agrega a la persona dueña: *Ana's brother* (el hermano de Ana). En inglés, primero va el dueño.",
        "Si el dueño está en plural y termina en *s*, solo se agrega el apóstrofo: *my parents' house*. Con plurales irregulares se usa *'s*: *the children's toys*."
      ],
      "tabla": { "columnas": ["Pronombre", "Posesivo", "Ejemplo"], "filas": [["I", "my", "My mother is a nurse."], ["you", "your", "Is this your son?"], ["he", "his", "His wife is from Peru."], ["she", "her", "Her husband is tall."], ["it", "its", "The dog is in its house."], ["we", "our", "Our baby is cute."], ["they", "their", "Their children are at school."]] },
      "ojo": [
        "*Su* se traduce según el **dueño**: *his* si es de él y *her* si es de ella. *Ana y **su** hermano* = Ana and **her** brother (no *his*).",
        "No se dice *the house of my mother*, sino *my mother's house*.",
        "*Its* es posesivo; *it's* significa *it is*: *It's a dog. **Its** name is Max.*",
        "*'s* puede significar *is* o posesión: *Ana's happy* (Ana está feliz) y *Ana's son* (el hijo de Ana).",
        "Los posesivos no llevan plural: *my brothers* (no *mys brothers*)."
      ],
      "en": [
        "Possessive adjectives are: my, your, his, her, its, our, their.",
        "They go before a noun: my sister, our house.",
        "Add **'s** to show who has something: Ana's brother.",
        "For plural nouns ending in s, add only an apostrophe: my parents' house."
      ]
    },
    "vocabulario": [
      { "en": "family", "es": "familia", "imagen": "Dos familias conviviendo", "ejemplo": ["My family is very big.", "Mi familia es muy grande."] },
      { "en": "mother", "es": "mamá, madre", "imagen": "Mamá abrazando a su hija con ternura", "ejemplo": ["My mother is a nurse.", "Mi mamá es enfermera."] },
      { "en": "father", "es": "papá, padre", "imagen": "Papá cargando a su hijo en hombros", "ejemplo": ["Her father is very tall.", "Su papá es muy alto."] },
      { "en": "parents", "es": "papás, padres", "imagen": "Pareja con su hijo pequeño en medio, tomados de la mano", "ejemplo": ["Our parents are at home.", "Nuestros papás están en casa."] },
      { "en": "sister", "es": "hermana", "imagen": "Dos hermanas abrazadas", "ejemplo": ["My sister's name is Ana.", "El nombre de mi hermana es Ana."] },
      { "en": "brother", "es": "hermano", "imagen": "Dos hermanos jugando juntos", "ejemplo": ["His brother is a doctor.", "Su hermano es doctor."] },
      { "en": "son", "es": "hijo", "imagen": "Papá enseñando a su hijo a andar en bicicleta", "ejemplo": ["Their son is ten years old.", "Su hijo tiene diez años."] },
      { "en": "daughter", "es": "hija", "imagen": "Mamá peinando a su hija", "ejemplo": ["Paul's daughter is very smart.", "La hija de Paul es muy inteligente."] },
      { "en": "husband", "es": "esposo", "imagen": "Hombre entregando flores a su esposa en casa", "ejemplo": ["Her husband is from Peru.", "Su esposo es de Perú."] },
      { "en": "wife", "es": "esposa", "imagen": "Mujer sonriendo con su esposo en la cocina", "ejemplo": ["My wife is a teacher.", "Mi esposa es maestra."] },
      { "en": "baby", "es": "bebé", "imagen": "Dos bebés sonriendo", "ejemplo": ["Our baby is six months old.", "Nuestro bebé tiene seis meses."] },
      { "en": "twins", "es": "gemelos", "imagen": "Dos niños gemelos idénticos sonriendo", "ejemplo": ["Maria's twins are very cute.", "Los gemelos de María son muy tiernos."] },
      { "en": "children", "es": "hijos, niños", "imagen": "Grupo de niños corriendo", "ejemplo": ["My children are at school.", "Mis hijos están en la escuela."] },
      { "en": "grandmother", "es": "abuela", "imagen": "Abuela horneando galletas con su nieta", "ejemplo": ["My grandmother is seventy.", "Mi abuela tiene setenta años."] },
      { "en": "grandfather", "es": "abuelo", "imagen": "Abuelo leyendo un cuento a su nieto", "ejemplo": ["Your grandfather is very funny.", "Tu abuelo es muy gracioso."] },
      { "en": "grandparents", "es": "abuelos", "imagen": "Pareja de abuelos sonriendo", "ejemplo": ["Our grandparents are from Spain.", "Nuestros abuelos son de España."] }
    ],
    "grupos": [
      {
        "id": "extendida",
        "titulo": "La familia extendida",
        "icono": "👨‍👩‍👧‍👦",
        "patron": ["Sara is my aunt.", "Tom is my cousin.", "Her nephew is six."],
        "palabras": [
          { "en": "aunt", "es": "tía", "imagen": "Tía sonriente abrazando a su sobrina", "ejemplo": ["My aunt is from Cuba.", "Mi tía es de Cuba."] },
          { "en": "uncle", "es": "tío", "imagen": "Tío jugando futbol con su sobrino", "ejemplo": ["Her uncle is a pilot.", "Su tío es piloto."] },
          { "en": "cousin", "es": "primo, prima", "imagen": "Dos primos jóvenes riendo juntos", "ejemplo": ["My cousin's car is red.", "El coche de mi primo es rojo."] },
          { "en": "niece", "es": "sobrina", "imagen": "Niña en brazos de su tía", "ejemplo": ["Our niece is very pretty.", "Nuestra sobrina es muy bonita."] },
          { "en": "nephew", "es": "sobrino", "imagen": "Niño abrazando a su tío", "ejemplo": ["His nephew is seven.", "Su sobrino tiene siete años."] },
          { "en": "grandson", "es": "nieto", "imagen": "Abuelo pescando con su nieto", "ejemplo": ["Their grandson is a student.", "Su nieto es estudiante."] },
          { "en": "granddaughter", "es": "nieta", "imagen": "Abuela tejiendo con su nieta", "ejemplo": ["Her granddaughter is a baby.", "Su nieta es una bebé."] },
          { "en": "grandchildren", "es": "nietos", "imagen": "Abuelos rodeados de sus nietos", "ejemplo": ["My grandchildren are happy.", "Mis nietos están felices."] },
          { "en": "relatives", "es": "parientes", "imagen": "Reunión grande de familiares en un jardín", "ejemplo": ["Our relatives are in Mexico.", "Nuestros parientes están en México."] },
          { "en": "ancestors", "es": "antepasados", "imagen": "Álbum de fotos familiares antiguas", "ejemplo": ["My ancestors are from Italy.", "Mis antepasados son de Italia."] }
        ]
      },
      {
        "id": "politica",
        "titulo": "La familia política",
        "icono": "💍",
        "patron": ["Lisa is my sister-in-law.", "He's my stepfather.", "Her mother-in-law is kind."],
        "palabras": [
          { "en": "mother-in-law", "es": "suegra", "imagen": "Mujer mayor sonriendo con su nuera", "ejemplo": ["My mother-in-law is very kind.", "Mi suegra es muy amable."] },
          { "en": "father-in-law", "es": "suegro", "imagen": "Hombre mayor conversando con su yerno", "ejemplo": ["Her father-in-law is retired.", "Su suegro está jubilado."] },
          { "en": "sister-in-law", "es": "cuñada", "imagen": "Dos mujeres adultas platicando en la cocina", "ejemplo": ["My sister-in-law is a dentist.", "Mi cuñada es dentista."] },
          { "en": "brother-in-law", "es": "cuñado", "imagen": "Dos hombres adultos preparando una parrillada", "ejemplo": ["His brother-in-law is funny.", "Su cuñado es gracioso."] },
          { "en": "son-in-law", "es": "yerno", "imagen": "Novio saludando a sus suegros", "ejemplo": ["Their son-in-law is an engineer.", "Su yerno es ingeniero."] },
          { "en": "daughter-in-law", "es": "nuera", "imagen": "Mujer joven abrazando a su suegra", "ejemplo": ["Our daughter-in-law is from Chile.", "Nuestra nuera es de Chile."] },
          { "en": "stepfather", "es": "padrastro", "imagen": "Hombre ayudando con la tarea a su hijastra", "ejemplo": ["My stepfather is very nice.", "Mi padrastro es muy simpático."] },
          { "en": "stepmother", "es": "madrastra", "imagen": "Mujer cocinando con su hijastro", "ejemplo": ["Her stepmother is young.", "Su madrastra es joven."] },
          { "en": "stepbrother", "es": "hermanastro", "imagen": "Dos adolescentes jugando videojuegos", "ejemplo": ["My stepbrother is sixteen.", "Mi hermanastro tiene dieciséis años."] },
          { "en": "stepsister", "es": "hermanastra", "imagen": "Dos adolescentes estudiando juntas", "ejemplo": ["His stepsister is at school.", "Su hermanastra está en la escuela."] }
        ]
      },
      {
        "id": "posesivos",
        "titulo": "Los posesivos",
        "icono": "👉",
        "patron": ["This is my bag.", "Her name is Ana.", "Our house is small."],
        "palabras": [
          { "en": "my", "es": "mi, mis", "imagen": "Persona señalándose a sí misma con una bolsa en la mano", "ejemplo": ["My name is Laura.", "Me llamo Laura."] },
          { "en": "your", "es": "tu, tus, su (de usted)", "imagen": "Persona entregándole sus llaves a otra", "ejemplo": ["Is this your phone?", "¿Este es tu teléfono?"] },
          { "en": "his", "es": "su (de él)", "imagen": "Hombre mostrando su coche con orgullo", "ejemplo": ["His car is black.", "Su coche es negro."] },
          { "en": "her", "es": "su (de ella)", "imagen": "Mujer mostrando su bicicleta con orgullo", "ejemplo": ["Her bike is new.", "Su bicicleta es nueva."] },
          { "en": "its", "es": "su (de una cosa o animal)", "imagen": "Perro junto a su plato de comida", "ejemplo": ["The dog is in its house.", "El perro está en su casa."] },
          { "en": "our", "es": "nuestro, nuestra", "imagen": "Familia frente a la puerta de su casa nueva", "ejemplo": ["Our house is new.", "Nuestra casa es nueva."] },
          { "en": "their", "es": "su (de ellos)", "imagen": "Pareja mostrando las llaves de su coche", "ejemplo": ["Their car is blue.", "Su coche es azul."] }
        ]
      },
      {
        "id": "vida",
        "titulo": "La vida en familia",
        "icono": "🎂",
        "patron": ["Today is my birthday.", "They are married.", "Her wedding is in May."],
        "palabras": [
          { "en": "a wedding", "es": "una boda", "imagen": "Novios saliendo de la iglesia", "ejemplo": ["My sister's wedding is in June.", "La boda de mi hermana es en junio."] },
          { "en": "a birthday", "es": "un cumpleaños", "imagen": "Niña soplando las velas de su pastel", "ejemplo": ["My son's birthday is in May.", "El cumpleaños de mi hijo es en mayo."] },
          { "en": "an anniversary", "es": "un aniversario", "imagen": "Pareja mayor brindando en una cena", "ejemplo": ["Today is our anniversary.", "Hoy es nuestro aniversario."] },
          { "en": "a family dinner", "es": "una cena familiar", "imagen": "Familia cenando junta en la mesa", "ejemplo": ["Our family dinner is on Sunday.", "Nuestra cena familiar es el domingo."] },
          { "en": "a family photo", "es": "una foto familiar", "imagen": "Familia posando para una foto", "ejemplo": ["This is my family photo.", "Esta es mi foto familiar."] },
          { "en": "a family tree", "es": "un árbol genealógico", "imagen": "Árbol genealógico con fotos en la pared", "ejemplo": ["This is my family tree.", "Este es mi árbol genealógico."] },
          { "en": "married", "es": "casado", "imagen": "Pareja de recién casados", "ejemplo": ["My brother is married.", "Mi hermano está casado."] },
          { "en": "single", "es": "soltero", "imagen": "Persona joven sola y feliz", "ejemplo": ["Her cousin is single.", "Su prima es soltera."] },
          { "en": "engaged", "es": "comprometido", "imagen": "Mujer mostrando su anillo de compromiso", "ejemplo": ["My daughter is engaged.", "Mi hija está comprometida."] },
          { "en": "divorced", "es": "divorciado", "imagen": "Persona quitándose el anillo de bodas", "ejemplo": ["His parents are divorced.", "Sus papás están divorciados."] },
          { "en": "widowed", "es": "viudo", "imagen": "Señora mayor mirando la foto de su esposo", "ejemplo": ["My grandmother is widowed.", "Mi abuela es viuda."] }
        ]
      }
    ],
    "ejemplos": [
      { "en": "This is my mother.", "es": "Esta es mi mamá." },
      { "en": "His sister is a doctor.", "es": "Su hermana es doctora." },
      { "en": "Her brother is very tall.", "es": "Su hermano es muy alto." },
      { "en": "Our parents are at home.", "es": "Nuestros papás están en casa." },
      { "en": "Their children are happy.", "es": "Sus hijos están felices." },
      { "en": "Ana's husband is from Canada.", "es": "El esposo de Ana es de Canadá." },
      { "en": "Tom's daughter is six.", "es": "La hija de Tom tiene seis años." },
      { "en": "My parents' house is big.", "es": "La casa de mis papás es grande." },
      { "en": "Is she your aunt?", "es": "¿Ella es tu tía?" },
      { "en": "What's your father's name?", "es": "¿Cómo se llama tu papá?" }
    ],
    "frases": [
      { "en": "My mother's name is Elena and my father's name is Jorge.", "es": "Mi mamá se llama Elena y mi papá se llama Jorge." },
      { "en": "My brother is married and his wife is a teacher.", "es": "Mi hermano está casado y su esposa es maestra." },
      { "en": "Her parents are from Colombia but she is from Mexico.", "es": "Sus papás son de Colombia pero ella es de México." },
      { "en": "Our grandparents are old but they are very happy.", "es": "Nuestros abuelos son mayores pero están muy felices." },
      { "en": "My sister's husband is a doctor.", "es": "El esposo de mi hermana es doctor." },
      { "en": "Their children are at school and their baby is at home.", "es": "Sus hijos están en la escuela y su bebé está en casa." },
      { "en": "My aunt and my uncle are from Spain.", "es": "Mi tía y mi tío son de España." },
      { "en": "Today is my grandmother's birthday.", "es": "Hoy es el cumpleaños de mi abuela." },
      { "en": "Maria's cousin is single and her sister is engaged.", "es": "El primo de María es soltero y su hermana está comprometida." },
      { "en": "This is our family photo and those are my cousins.", "es": "Esta es nuestra foto familiar y esos son mis primos." }
    ],
    "listening": [
      { "audio": "My sister's name is Julia.", "pregunta": "¿Quién se llama Julia?", "opciones": ["La hermana", "La mamá", "La tía", "La hija"] },
      { "audio": "Her husband is an engineer from Germany.", "pregunta": "¿De dónde es el esposo?", "opciones": ["De Alemania", "De Inglaterra", "De Francia", "De Grecia"] },
      { "audio": "Our grandparents are at home. They are eighty.", "pregunta": "¿Cuántos años tienen los abuelos?", "opciones": ["Ochenta", "Dieciocho", "Ochenta y ocho", "Noventa"] },
      { "audio": "Tom's daughter is a student. His son is a baby.", "pregunta": "¿Quién es el bebé?", "opciones": ["El hijo de Tom", "La hija de Tom", "Tom", "El sobrino de Tom"] },
      { "audio": "Today is my parents' anniversary.", "pregunta": "¿Qué celebran hoy?", "opciones": ["El aniversario de sus papás", "El cumpleaños de su mamá", "Una boda", "La graduación de su hermano"] }
    ],
    "lectura": {
      "titulo": "My family",
      "texto": "Hi, my name is Carla. This is my family photo. These are my parents. My mother's name is Rosa and my father's name is Luis. They are from Mexico. My brother is Diego. His wife is Emma and she is from Canada. Their son is my nephew, Leo. He is two years old. My grandmother is here too. Her birthday is in May. Our family is small, but we are very happy.",
      "preguntas": [
        { "pregunta": "¿Cómo se llama el papá de Carla?", "opciones": ["Luis", "Diego", "Leo", "Jorge"] },
        { "pregunta": "¿De dónde es Emma?", "opciones": ["De Canadá", "De México", "De España", "De Colombia"] },
        { "pregunta": "¿Quién es Leo?", "opciones": ["El sobrino de Carla", "El hermano de Carla", "El hijo de Carla", "El primo de Carla"] },
        { "pregunta": "¿Cuándo es el cumpleaños de la abuela?", "opciones": ["En mayo", "En marzo", "En junio", "En enero"] }
      ]
    },
    "escritura": [
      { "instruccion": "Completa con el posesivo correcto.", "pregunta": "I am Ana. ___ brother is Tom.", "respuestas": ["My"] },
      { "instruccion": "Completa con el posesivo correcto.", "pregunta": "She is Lisa. ___ husband is a doctor.", "respuestas": ["Her"] },
      { "instruccion": "Completa con el posesivo correcto.", "pregunta": "He is Mark. ___ wife is a nurse.", "respuestas": ["His"] },
      { "instruccion": "Completa con el posesivo correcto.", "pregunta": "We are students. ___ teacher is kind.", "respuestas": ["Our"] },
      { "instruccion": "Completa con el posesivo correcto.", "pregunta": "They are my friends. ___ house is big.", "respuestas": ["Their"] },
      { "instruccion": "Escribe con 's.", "pregunta": "la hija de Paul", "respuestas": ["Paul's daughter"] },
      { "instruccion": "Escribe con 's.", "pregunta": "el cumpleaños de mi mamá", "respuestas": ["my mother's birthday", "my mom's birthday"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "Mi hermana es maestra.", "respuestas": ["My sister is a teacher"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "La casa de mis papás es grande.", "respuestas": ["My parents' house is big", "My parents house is big"] },
      { "instruccion": "Corrige la oración.", "pregunta": "The car of my father is red.", "respuestas": ["My father's car is red"] }
    ],
    "examen": [
      { "tipo": "opcion", "pregunta": "This is Tom and this is ___ wife.", "opciones": ["his", "her", "he", "him"] },
      { "tipo": "opcion", "pregunta": "This is Ana and this is ___ brother.", "opciones": ["her", "his", "she", "he"] },
      { "tipo": "opcion", "pregunta": "We are in ___ house.", "opciones": ["our", "we", "us", "their's"] },
      { "tipo": "opcion", "pregunta": "Elige la opción correcta.", "opciones": ["my mother's car", "the car of my mother's", "my mother car's", "car my mother"] },
      { "tipo": "opcion", "pregunta": "La hermana de tu mamá es tu…", "opciones": ["aunt", "uncle", "niece", "cousin"] },
      { "tipo": "opcion", "pregunta": "El hijo de tu hermano es tu…", "opciones": ["nephew", "niece", "cousin", "grandson"] },
      { "tipo": "listening", "audio": "My daughter's name is Sofia. She is four.", "pregunta": "¿Cuántos años tiene la hija?", "opciones": ["Cuatro", "Catorce", "Cinco", "Cuarenta"] },
      { "tipo": "listening", "audio": "Their son is in Canada and their daughter is in Spain.", "pregunta": "¿Dónde está la hija?", "opciones": ["En España", "En Canadá", "En México", "En Italia"] },
      { "tipo": "escribir", "pregunta": "Escribe con 's: el coche de Ana", "respuestas": ["Ana's car"] },
      { "tipo": "escribir", "pregunta": "Traduce: Su esposa es de Perú. (de él)", "respuestas": ["His wife is from Peru"] }
    ]
  },
  {
    "id": "a1-08",
    "num": 8,
    "titulo": "Have / have got",
    "contexto": "Mis pertenencias y mascotas",
    "explicacion": {
      "es": [
        "**Have** significa **tener**. Con *I, you, we, they* se usa **have**, y con *he, she, it* se usa **has**: *I have a dog. She has a cat.*",
        "**Have got** significa lo mismo y es muy común al hablar: *I've got a dog. She's got a cat.* Las contracciones son **I've got** y **she's got**.",
        "En **negativo** se dice *I don't have* o *I haven't got*; con *he, she, it*, *doesn't have* o *hasn't got*.",
        "Para **preguntar** se dice *Do you have…?* o *Have you got…?*; con *he, she, it*, *Does she have…?* o *Has she got…?*"
      ],
      "tabla": { "columnas": ["Sujeto", "Have", "Have got", "Negativo"], "filas": [["I / you / we / they", "have", "have got ('ve got)", "don't have / haven't got"], ["he / she / it", "has", "has got ('s got)", "doesn't have / hasn't got"]] },
      "ojo": [
        "Con *he, she, it* se usa **has**: *She **has** a car* (no *She have*).",
        "Después de *doesn't* regresa a **have**: *He doesn't **have** a car* (no *doesn't has*).",
        "No todo «tener» se traduce con *have*. La edad, el hambre, la sed y el frío van con *to be*: *I'm 20. I'm hungry. I'm cold.*",
        "*She's got* significa *she has got*: *She's got a dog*. Y *She's happy* significa *she is happy*.",
        "Los dolores y enfermedades sí van con *have*: *I have a headache*."
      ],
      "en": [
        "Use **have** with I, you, we and they: I have a dog.",
        "Use **has** with he, she and it: She has a cat.",
        "**Have got** means the same: I've got a dog. She's got a cat.",
        "Questions: Do you have a pet? Have you got a pet?"
      ]
    },
    "vocabulario": [
      { "en": "a phone", "es": "un teléfono", "imagen": "Celulares sobre una mesa", "ejemplo": ["I have a new phone.", "Tengo un teléfono nuevo."] },
      { "en": "a car", "es": "un coche", "imagen": "Coches estacionados", "ejemplo": ["She has a red car.", "Ella tiene un coche rojo."] },
      { "en": "a bike", "es": "una bicicleta", "imagen": "Bicicletas estacionadas", "ejemplo": ["I've got a blue bike.", "Tengo una bicicleta azul."] },
      { "en": "a motorcycle", "es": "una motocicleta", "imagen": "Motocicleta estacionada en la calle", "ejemplo": ["He has a big motorcycle.", "Él tiene una motocicleta grande."] },
      { "en": "a house", "es": "una casa", "imagen": "Casa bonita con jardín al frente", "ejemplo": ["We have a small house.", "Tenemos una casa pequeña."] },
      { "en": "an apartment", "es": "un departamento", "imagen": "Edificio de departamentos con balcones", "ejemplo": ["They have an apartment in the city.", "Ellos tienen un departamento en la ciudad."] },
      { "en": "a garden", "es": "un jardín", "imagen": "Jardín con flores y pasto verde", "ejemplo": ["My parents have a beautiful garden.", "Mis papás tienen un jardín hermoso."] },
      { "en": "a garage", "es": "una cochera, un garaje", "imagen": "Cochera abierta con un coche dentro", "ejemplo": ["Our house has a big garage.", "Nuestra casa tiene una cochera grande."] },
      { "en": "a camera", "es": "una cámara", "imagen": "Cámara fotográfica sobre una mesa", "ejemplo": ["My sister has a good camera.", "Mi hermana tiene una buena cámara."] },
      { "en": "a tablet", "es": "una tableta", "imagen": "Persona usando una tableta en el sofá", "ejemplo": ["I've got a new tablet.", "Tengo una tableta nueva."] },
      { "en": "a computer", "es": "una computadora", "imagen": "Computadora de escritorio", "ejemplo": ["He has a fast computer.", "Él tiene una computadora rápida."] },
      { "en": "a laptop", "es": "una laptop", "imagen": "Laptop abierta sobre un pupitre", "ejemplo": ["She's got a new laptop.", "Ella tiene una laptop nueva."] },
      { "en": "a wallet", "es": "una cartera", "imagen": "Cartera de piel con billetes", "ejemplo": ["I have a wallet in my bag.", "Tengo una cartera en mi bolsa."] },
      { "en": "a key", "es": "una llave", "imagen": "Llave en la mano", "ejemplo": ["Do you have a key?", "¿Tienes una llave?"] },
      { "en": "a watch", "es": "un reloj de pulsera", "imagen": "Relojes en una vitrina", "ejemplo": ["My father has an old watch.", "Mi papá tiene un reloj viejo."] },
      { "en": "money", "es": "dinero", "imagen": "Billetes y monedas", "ejemplo": ["I don't have much money.", "No tengo mucho dinero."] }
    ],
    "grupos": [
      {
        "id": "mascotas",
        "titulo": "Las mascotas",
        "icono": "🐶",
        "patron": ["I have a dog.", "She has two cats.", "Have you got a pet?"],
        "palabras": [
          { "en": "a dog", "es": "un perro", "imagen": "Perro feliz corriendo en un parque", "ejemplo": ["I have a big dog.", "Tengo un perro grande."] },
          { "en": "a cat", "es": "un gato", "imagen": "Gatos sentados en un sofá", "ejemplo": ["She has a black cat.", "Ella tiene un gato negro."] },
          { "en": "a puppy", "es": "un cachorro", "imagen": "Cachorro jugando con una pelota", "ejemplo": ["We've got a new puppy.", "Tenemos un cachorro nuevo."] },
          { "en": "a kitten", "es": "un gatito", "imagen": "Gatito pequeño en una canasta", "ejemplo": ["My daughter has a little kitten.", "Mi hija tiene un gatito."] },
          { "en": "a bird", "es": "un pájaro", "imagen": "Pájaro colorido en una rama", "ejemplo": ["My grandmother has a bird.", "Mi abuela tiene un pájaro."] },
          { "en": "a parrot", "es": "un loro, un perico", "imagen": "Loro verde posado en la mano de una persona", "ejemplo": ["He has a funny parrot.", "Él tiene un loro gracioso."] },
          { "en": "a rabbit", "es": "un conejo", "imagen": "Conejo blanco comiendo una zanahoria", "ejemplo": ["Our son has a white rabbit.", "Nuestro hijo tiene un conejo blanco."] },
          { "en": "a hamster", "es": "un hámster", "imagen": "Hámster comiendo una semilla", "ejemplo": ["I've got a small hamster.", "Tengo un hámster pequeño."] },
          { "en": "a turtle", "es": "una tortuga", "imagen": "Tortuga caminando sobre el pasto", "ejemplo": ["My brother has a turtle.", "Mi hermano tiene una tortuga."] },
          { "en": "a goldfish", "es": "un pez dorado", "imagen": "Peces de colores en una pecera", "ejemplo": ["They have a goldfish.", "Ellos tienen un pez dorado."] },
          { "en": "a horse", "es": "un caballo", "imagen": "Caballo café en un campo", "ejemplo": ["My uncle has a horse.", "Mi tío tiene un caballo."] },
          { "en": "a snake", "es": "una serpiente", "imagen": "Serpiente verde en una rama", "ejemplo": ["Does he have a snake?", "¿Él tiene una serpiente?"] },
          { "en": "a lizard", "es": "una lagartija", "imagen": "Lagartija sobre una roca", "ejemplo": ["Our neighbor has a lizard.", "Nuestro vecino tiene una lagartija."] }
        ]
      },
      {
        "id": "fisico",
        "titulo": "Cómo es una persona",
        "icono": "💇",
        "patron": ["She has long hair.", "He's got a beard.", "I have brown eyes."],
        "palabras": [
          { "en": "long hair", "es": "cabello largo", "imagen": "Mujer con cabello muy largo", "ejemplo": ["My sister has long hair.", "Mi hermana tiene el cabello largo."] },
          { "en": "short hair", "es": "cabello corto", "imagen": "Persona con cabello corto", "ejemplo": ["He has short hair.", "Él tiene el cabello corto."] },
          { "en": "curly hair", "es": "cabello rizado", "imagen": "Mujer con cabello muy rizado", "ejemplo": ["Our teacher has curly hair.", "Nuestra maestra tiene el cabello rizado."] },
          { "en": "straight hair", "es": "cabello lacio", "imagen": "Persona con cabello lacio", "ejemplo": ["She's got straight hair.", "Ella tiene el cabello lacio."] },
          { "en": "blue eyes", "es": "ojos azules", "imagen": "Primer plano de unos ojos azules", "ejemplo": ["Your baby has blue eyes.", "Tu bebé tiene los ojos azules."] },
          { "en": "brown eyes", "es": "ojos cafés", "imagen": "Primer plano de unos ojos cafés", "ejemplo": ["I have brown eyes.", "Tengo los ojos cafés."] },
          { "en": "green eyes", "es": "ojos verdes", "imagen": "Primer plano de unos ojos verdes", "ejemplo": ["She has beautiful green eyes.", "Ella tiene unos ojos verdes hermosos."] },
          { "en": "a beard", "es": "barba", "imagen": "Hombre con barba", "ejemplo": ["My father has a gray beard.", "Mi papá tiene barba gris."] },
          { "en": "a mustache", "es": "bigote", "imagen": "Hombre con bigote", "ejemplo": ["He's got a big mustache.", "Él tiene un bigote grande."] },
          { "en": "freckles", "es": "pecas", "imagen": "Niña sonriendo con pecas", "ejemplo": ["Her son has freckles.", "Su hijo tiene pecas."] },
          { "en": "eyeglasses", "es": "lentes, anteojos", "imagen": "Persona con lentes leyendo", "ejemplo": ["My grandfather has eyeglasses.", "Mi abuelo tiene lentes."] }
        ]
      },
      {
        "id": "salud",
        "titulo": "Padecimientos: have",
        "icono": "🤧",
        "patron": ["I have a headache.", "She has a cold.", "Do you have a fever?"],
        "palabras": [
          { "en": "a cold", "es": "un resfriado", "imagen": "Persona resfriada con pañuelo", "ejemplo": ["I have a bad cold.", "Tengo un resfriado fuerte."] },
          { "en": "the flu", "es": "gripa, influenza", "imagen": "Persona con gripa en la cama", "ejemplo": ["My son has the flu.", "Mi hijo tiene gripa."] },
          { "en": "a fever", "es": "fiebre", "imagen": "Persona con paño en la frente", "ejemplo": ["She has a high fever.", "Ella tiene fiebre alta."] },
          { "en": "a cough", "es": "tos", "imagen": "Persona tosiendo con la mano en la boca", "ejemplo": ["He has a bad cough.", "Él tiene mucha tos."] },
          { "en": "a headache", "es": "dolor de cabeza", "imagen": "Persona con las manos en la cabeza por el dolor", "ejemplo": ["I've got a headache.", "Tengo dolor de cabeza."] },
          { "en": "a sore throat", "es": "dolor de garganta", "imagen": "Persona con dolor de garganta", "ejemplo": ["She has a sore throat.", "Ella tiene dolor de garganta."] },
          { "en": "a stomachache", "es": "dolor de estómago", "imagen": "Persona con malestar de estómago", "ejemplo": ["I have a stomachache.", "Tengo dolor de estómago."] },
          { "en": "a backache", "es": "dolor de espalda", "imagen": "Persona con dolor de espalda", "ejemplo": ["My father has a backache.", "Mi papá tiene dolor de espalda."] },
          { "en": "a toothache", "es": "dolor de muelas", "imagen": "Persona tocándose la mejilla por el dolor", "ejemplo": ["He's got a toothache.", "Él tiene dolor de muelas."] },
          { "en": "an earache", "es": "dolor de oído", "imagen": "Niño tocándose la oreja por el dolor", "ejemplo": ["My daughter has an earache.", "Mi hija tiene dolor de oído."] },
          { "en": "an allergy", "es": "una alergia", "imagen": "Persona estornudando entre flores", "ejemplo": ["I have an allergy to cats.", "Tengo alergia a los gatos."] },
          { "en": "a runny nose", "es": "escurrimiento nasal", "imagen": "Persona sonándose la nariz", "ejemplo": ["The baby has a runny nose.", "El bebé tiene escurrimiento nasal."] }
        ]
      },
      {
        "id": "expresiones",
        "titulo": "Otras cosas que tenemos",
        "icono": "💡",
        "patron": ["I have a question.", "We have an exam.", "Do you have time?"],
        "palabras": [
          { "en": "a question", "es": "una pregunta", "imagen": "Estudiante levantando la mano en clase", "ejemplo": ["I have a question, teacher.", "Tengo una pregunta, maestra."] },
          { "en": "an idea", "es": "una idea", "imagen": "Persona sonriendo con un foco encendido", "ejemplo": ["She has a great idea.", "Ella tiene una gran idea."] },
          { "en": "a problem", "es": "un problema", "imagen": "Persona preocupada mirando su coche descompuesto", "ejemplo": ["We have a problem.", "Tenemos un problema."] },
          { "en": "time", "es": "tiempo", "imagen": "Persona mirando un reloj de arena", "ejemplo": ["Do you have time today?", "¿Tienes tiempo hoy?"] },
          { "en": "homework", "es": "tarea", "imagen": "Niño haciendo su tarea en la mesa", "ejemplo": ["I have a lot of homework.", "Tengo mucha tarea."] },
          { "en": "a meeting", "es": "una reunión", "imagen": "Compañeros en una sala de juntas", "ejemplo": ["My boss has a meeting today.", "Mi jefe tiene una reunión hoy."] },
          { "en": "an appointment", "es": "una cita", "imagen": "Persona en el consultorio con su doctora", "ejemplo": ["I have an appointment at three.", "Tengo una cita a las tres."] },
          { "en": "an exam", "es": "un examen", "imagen": "Estudiantes presentando un examen", "ejemplo": ["We've got an exam on Friday.", "Tenemos un examen el viernes."] }
        ]
      }
    ],
    "ejemplos": [
      { "en": "I have a dog and two cats.", "es": "Tengo un perro y dos gatos." },
      { "en": "She has a new car.", "es": "Ella tiene un coche nuevo." },
      { "en": "We've got a big house.", "es": "Tenemos una casa grande." },
      { "en": "He's got a beard.", "es": "Él tiene barba." },
      { "en": "They don't have a garden.", "es": "Ellos no tienen jardín." },
      { "en": "She doesn't have a pet.", "es": "Ella no tiene mascota." },
      { "en": "Do you have a laptop? Yes, I do.", "es": "¿Tienes una laptop? Sí." },
      { "en": "Have you got a pen? No, I haven't.", "es": "¿Tienes una pluma? No." },
      { "en": "I have a headache.", "es": "Tengo dolor de cabeza." },
      { "en": "My son has the flu.", "es": "Mi hijo tiene gripa." }
    ],
    "frases": [
      { "en": "My daughter has a kitten and my son has a rabbit.", "es": "Mi hija tiene un gatito y mi hijo tiene un conejo." },
      { "en": "We have a small house but we have a big garden.", "es": "Tenemos una casa pequeña pero tenemos un jardín grande." },
      { "en": "My brother has got a motorcycle and I have got a bike.", "es": "Mi hermano tiene una motocicleta y yo tengo una bicicleta." },
      { "en": "She has long hair and beautiful green eyes.", "es": "Ella tiene el cabello largo y unos ojos verdes hermosos." },
      { "en": "I don't have a car, but I have a good bike.", "es": "No tengo coche, pero tengo una buena bicicleta." },
      { "en": "My father has a cough and a sore throat.", "es": "Mi papá tiene tos y dolor de garganta." },
      { "en": "I have a lot of homework and an exam tomorrow.", "es": "Tengo mucha tarea y un examen mañana." },
      { "en": "Does your sister have a pet? Yes, she has a parrot.", "es": "¿Tu hermana tiene una mascota? Sí, tiene un loro." },
      { "en": "He hasn't got much money, but he has a lot of friends.", "es": "Él no tiene mucho dinero, pero tiene muchos amigos." },
      { "en": "Have you got a minute? I have a question.", "es": "¿Tienes un minuto? Tengo una pregunta." }
    ],
    "listening": [
      { "audio": "I have a dog. His name is Max.", "pregunta": "¿Qué mascota tiene?", "opciones": ["Un perro", "Un gato", "Un conejo", "Un pájaro"] },
      { "audio": "My sister has two cats and a bird.", "pregunta": "¿Cuántos gatos tiene la hermana?", "opciones": ["Dos", "Uno", "Tres", "Ninguno"] },
      { "audio": "He doesn't have a car, but he's got a motorcycle.", "pregunta": "¿Qué tiene él?", "opciones": ["Una motocicleta", "Un coche", "Una bicicleta", "Un autobús"] },
      { "audio": "I can't go to work. I have a fever and a bad cough.", "pregunta": "¿Qué le pasa?", "opciones": ["Tiene fiebre y tos", "Tiene dolor de muelas", "Tiene hambre", "Está de vacaciones"] },
      { "audio": "Do you have time today? No, I have a meeting.", "pregunta": "¿Por qué no tiene tiempo?", "opciones": ["Tiene una reunión", "Tiene un examen", "Tiene una cita médica", "Tiene mucha tarea"] }
    ],
    "lectura": {
      "titulo": "My pets",
      "texto": "Hi, I'm Ben. I have a small house with a big garden. I've got three pets. I have a dog, Rocky. He has short hair and brown eyes. My daughter has a white rabbit, and my son has a turtle. We don't have a cat because my wife has an allergy to cats. Rocky has a blue bowl, and he's very happy in the garden.",
      "preguntas": [
        { "pregunta": "¿Cuántas mascotas tiene la familia?", "opciones": ["Tres", "Dos", "Cuatro", "Una"] },
        { "pregunta": "¿Quién tiene un conejo?", "opciones": ["La hija de Ben", "El hijo de Ben", "La esposa de Ben", "Ben"] },
        { "pregunta": "¿Por qué no tienen gato?", "opciones": ["La esposa es alérgica", "No tienen jardín", "Rocky es peligroso", "Su casa es pequeña"] },
        { "pregunta": "¿Cómo es Rocky?", "opciones": ["Tiene el cabello corto y ojos cafés", "Es blanco", "Tiene ojos azules", "Es muy grande"] }
      ]
    },
    "escritura": [
      { "instruccion": "Completa con have o has.", "pregunta": "I ___ a new phone.", "respuestas": ["have"] },
      { "instruccion": "Completa con have o has.", "pregunta": "She ___ a white cat.", "respuestas": ["has"] },
      { "instruccion": "Completa con have o has.", "pregunta": "My parents ___ a garden.", "respuestas": ["have"] },
      { "instruccion": "Completa con have got o has got.", "pregunta": "He ___ a beard.", "respuestas": ["has got", "'s got"] },
      { "instruccion": "Escribe en negativo.", "pregunta": "I have a car.", "respuestas": ["I don't have a car", "I do not have a car", "I haven't got a car", "I have not got a car"] },
      { "instruccion": "Escribe en negativo.", "pregunta": "She has a dog.", "respuestas": ["She doesn't have a dog", "She does not have a dog", "She hasn't got a dog", "She has not got a dog"] },
      { "instruccion": "Convierte en pregunta.", "pregunta": "You have a pet.", "respuestas": ["Do you have a pet", "Have you got a pet"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "Tengo dolor de cabeza.", "respuestas": ["I have a headache", "I've got a headache", "I have got a headache"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "Ella tiene el cabello largo.", "respuestas": ["She has long hair", "She's got long hair", "She has got long hair"] },
      { "instruccion": "Corrige la oración.", "pregunta": "He have two dogs.", "respuestas": ["He has two dogs", "He's got two dogs", "He has got two dogs"] }
    ],
    "examen": [
      { "tipo": "opcion", "pregunta": "My brother ___ a motorcycle.", "opciones": ["has", "have", "is", "are"] },
      { "tipo": "opcion", "pregunta": "We ___ a small house.", "opciones": ["have", "has", "is", "am"] },
      { "tipo": "opcion", "pregunta": "She ___ got a new laptop.", "opciones": ["has", "have", "is got", "does"] },
      { "tipo": "opcion", "pregunta": "He doesn't ___ a pet.", "opciones": ["have", "has", "having", "got"] },
      { "tipo": "opcion", "pregunta": "¿Cómo se dice «Tengo 20 años»?", "opciones": ["I'm 20 years old.", "I have 20 years.", "I've got 20 years.", "I has 20 years."] },
      { "tipo": "opcion", "pregunta": "¿Cómo se dice «Tengo dolor de cabeza»?", "opciones": ["I have a headache.", "I am a headache.", "I has a headache.", "I'm headache."] },
      { "tipo": "listening", "audio": "My daughter has a rabbit. Her friend has a hamster.", "pregunta": "¿Quién tiene un hámster?", "opciones": ["La amiga", "La hija", "La mamá", "Nadie"] },
      { "tipo": "listening", "audio": "Have you got a pen? Sorry, I haven't.", "pregunta": "¿La persona que responde tiene pluma?", "opciones": ["No", "Sí", "Tiene dos", "No lo sabe"] },
      { "tipo": "escribir", "pregunta": "Escribe en negativo: They have a car.", "respuestas": ["They don't have a car", "They do not have a car", "They haven't got a car", "They have not got a car"] },
      { "tipo": "escribir", "pregunta": "Traduce: Tenemos un perro.", "respuestas": ["We have a dog", "We've got a dog", "We have got a dog"] }
    ]
  },
  {
    "id": "a1-09",
    "num": 9,
    "titulo": "Adjetivos (lugar en la oración)",
    "contexto": "Describir personas y cosas",
    "explicacion": {
      "es": [
        "Los **adjetivos** dicen cómo es una persona o una cosa: *big, old, beautiful*.",
        "En inglés el adjetivo va **antes** de la palabra que describe, al revés que en español: *a red car* (un coche rojo).",
        "También puede ir **después del verbo *to be***: *The car is red.*",
        "Los adjetivos **nunca cambian**: son iguales en singular y plural, y en masculino y femenino: *a tall man, a tall woman, tall men*.",
        "Con **very** decimos «muy»: *It's a very big house.*"
      ],
      "tabla": { "columnas": ["Forma", "Español", "Inglés"], "filas": [["Antes de la palabra", "un coche rojo", "a red car"], ["Después de to be", "El coche es rojo.", "The car is red."], ["Con plural", "coches rojos", "red cars"], ["Con very", "una casa muy grande", "a very big house"], ["Dos adjetivos", "una casa grande y vieja", "a big old house"]] },
      "ojo": [
        "El adjetivo va antes: *a **red** car* (no *a car red*).",
        "No lleva plural: *red cars* (no *reds cars*).",
        "No lleva *a* solo: *She's a **tall woman*** o *She's tall* (no *She's a tall*).",
        "*A* cambia a *an* según el sonido del adjetivo: *a car*, pero ***an** old car*.",
        "*Bored* es cómo te sientes y *boring* es lo que te aburre: *I'm bored. The movie is boring.*"
      ],
      "en": [
        "Adjectives go before a noun: a red car.",
        "They can also go after the verb to be: The car is red.",
        "Adjectives don't change: a tall man, tall men.",
        "Use very to make them stronger: a very big house."
      ]
    },
    "vocabulario": [
      { "en": "big", "es": "grande", "imagen": "Hombre grande", "ejemplo": ["It's a big house.", "Es una casa grande."] },
      { "en": "small", "es": "pequeño", "imagen": "Casita muy pequeña en medio de un campo", "ejemplo": ["I have a small car.", "Tengo un coche pequeño."] },
      { "en": "long", "es": "largo", "imagen": "Camino muy largo que se pierde en el horizonte", "ejemplo": ["It's a long road.", "Es un camino largo."] },
      { "en": "short", "es": "corto, bajo", "imagen": "Persona bajita", "ejemplo": ["This is a short book.", "Este es un libro corto."] },
      { "en": "new", "es": "nuevo", "imagen": "Coche nuevo y brillante recién salido de la agencia", "ejemplo": ["She has a new phone.", "Ella tiene un teléfono nuevo."] },
      { "en": "old", "es": "viejo", "imagen": "Señora mayor", "ejemplo": ["This is an old house.", "Esta es una casa vieja."] },
      { "en": "good", "es": "bueno", "imagen": "Estudiante feliz mostrando una calificación de 10", "ejemplo": ["He is a good student.", "Él es un buen estudiante."] },
      { "en": "bad", "es": "malo", "imagen": "Persona disgustada oliendo comida en mal estado", "ejemplo": ["It's a bad movie.", "Es una película mala."] },
      { "en": "fast", "es": "rápido", "imagen": "Coche deportivo a toda velocidad en la carretera", "ejemplo": ["My brother has a fast car.", "Mi hermano tiene un coche rápido."] },
      { "en": "slow", "es": "lento", "imagen": "Caracol avanzando sobre una hoja", "ejemplo": ["The bus is very slow.", "El autobús es muy lento."] },
      { "en": "hot", "es": "caliente", "imagen": "Persona sudando bajo el sol", "ejemplo": ["This is hot coffee.", "Este es un café caliente."] },
      { "en": "cold", "es": "frío", "imagen": "Persona con abrigo temblando", "ejemplo": ["I have a cold drink.", "Tengo una bebida fría."] },
      { "en": "clean", "es": "limpio", "imagen": "Cocina impecable y reluciente", "ejemplo": ["My room is clean.", "Mi cuarto está limpio."] },
      { "en": "dirty", "es": "sucio", "imagen": "Niño con ropa llena de lodo", "ejemplo": ["These shoes are dirty.", "Estos zapatos están sucios."] },
      { "en": "easy", "es": "fácil", "imagen": "Estudiante relajado terminando un ejercicio", "ejemplo": ["It's an easy question.", "Es una pregunta fácil."] },
      { "en": "difficult", "es": "difícil", "imagen": "Estudiante confundido frente a un problema largo en el pizarrón", "ejemplo": ["This is a difficult exam.", "Este es un examen difícil."] }
    ],
    "grupos": [
      {
        "id": "cosas",
        "titulo": "Cómo son las cosas",
        "icono": "📦",
        "patron": ["It's a heavy box.", "This bag is empty.", "The sofa is comfortable."],
        "palabras": [
          { "en": "expensive", "es": "caro", "imagen": "Persona sorprendida por un precio", "ejemplo": ["That is an expensive watch.", "Ese es un reloj caro."] },
          { "en": "cheap", "es": "barato", "imagen": "Persona contenta con una prenda barata", "ejemplo": ["This is a cheap T-shirt.", "Esta es una playera barata."] },
          { "en": "heavy", "es": "pesado", "imagen": "Persona cargando con esfuerzo una caja muy pesada", "ejemplo": ["This box is very heavy.", "Esta caja está muy pesada."] },
          { "en": "light", "es": "ligero", "imagen": "Mano levantando una pluma blanca con dos dedos", "ejemplo": ["My new laptop is light.", "Mi laptop nueva es ligera."] },
          { "en": "soft", "es": "suave", "imagen": "Mano acariciando una cobija muy suave", "ejemplo": ["I have a soft pillow.", "Tengo una almohada suave."] },
          { "en": "hard", "es": "duro", "imagen": "Martillo golpeando una roca", "ejemplo": ["This bed is very hard.", "Esta cama está muy dura."] },
          { "en": "full", "es": "lleno", "imagen": "Vaso de jugo lleno hasta el borde", "ejemplo": ["The bus is full.", "El autobús está lleno."] },
          { "en": "empty", "es": "vacío", "imagen": "Vaso de vidrio vacío sobre una mesa", "ejemplo": ["My glass is empty.", "Mi vaso está vacío."] },
          { "en": "wet", "es": "mojado", "imagen": "Persona empapada por la lluvia", "ejemplo": ["My shoes are wet.", "Mis zapatos están mojados."] },
          { "en": "dry", "es": "seco", "imagen": "Desierto seco", "ejemplo": ["These clothes are dry.", "Esta ropa está seca."] },
          { "en": "round", "es": "redondo", "imagen": "Mesa redonda de madera", "ejemplo": ["We have a round table.", "Tenemos una mesa redonda."] },
          { "en": "square", "es": "cuadrado", "imagen": "Caja cuadrada sobre una mesa", "ejemplo": ["It's a square box.", "Es una caja cuadrada."] },
          { "en": "comfortable", "es": "cómodo", "imagen": "Persona relajada en un sillón muy cómodo", "ejemplo": ["This is a comfortable chair.", "Esta es una silla cómoda."] }
        ]
      },
      {
        "id": "lugares",
        "titulo": "Cómo son los lugares",
        "icono": "🏙️",
        "patron": ["It's a noisy street.", "This city is safe.", "The museum is interesting."],
        "palabras": [
          { "en": "noisy", "es": "ruidoso", "imagen": "Calle llena de coches y bocinas", "ejemplo": ["We live on a noisy street.", "Vivimos en una calle ruidosa."] },
          { "en": "crowded", "es": "lleno de gente", "imagen": "Mucha gente en una plaza", "ejemplo": ["The market is very crowded.", "El mercado está lleno de gente."] },
          { "en": "safe", "es": "seguro", "imagen": "Familia caminando tranquila por un barrio bonito", "ejemplo": ["This is a safe city.", "Esta es una ciudad segura."] },
          { "en": "dangerous", "es": "peligroso", "imagen": "Cartel de peligro junto a un barranco", "ejemplo": ["That is a dangerous road.", "Ese es un camino peligroso."] },
          { "en": "famous", "es": "famoso", "imagen": "Turistas tomando fotos frente a un monumento", "ejemplo": ["It's a famous museum.", "Es un museo famoso."] },
          { "en": "popular", "es": "popular", "imagen": "Fila larga afuera de un restaurante", "ejemplo": ["This is a popular restaurant.", "Este es un restaurante popular."] },
          { "en": "interesting", "es": "interesante", "imagen": "Visitantes admirando una obra en un museo", "ejemplo": ["It's an interesting place.", "Es un lugar interesante."] },
          { "en": "boring", "es": "aburrido (que aburre)", "imagen": "Persona bostezando en una conferencia", "ejemplo": ["This is a boring town.", "Este es un pueblo aburrido."] }
        ]
      },
      {
        "id": "comida",
        "titulo": "Cómo es la comida",
        "icono": "🍋",
        "patron": ["This soup is hot.", "It's a sweet cake.", "The lemon is sour."],
        "palabras": [
          { "en": "delicious", "es": "delicioso", "imagen": "Persona disfrutando un platillo con cara de felicidad", "ejemplo": ["It's a delicious pizza.", "Es una pizza deliciosa."] },
          { "en": "sweet", "es": "dulce", "imagen": "Rebanada de pastel con fresas", "ejemplo": ["This is a sweet cake.", "Este es un pastel dulce."] },
          { "en": "salty", "es": "salado", "imagen": "Papas fritas con sal", "ejemplo": ["These fries are salty.", "Estas papas están saladas."] },
          { "en": "sour", "es": "ácido, agrio", "imagen": "Niño haciendo gesto al morder un limón", "ejemplo": ["This lemon is very sour.", "Este limón está muy agrio."] },
          { "en": "spicy", "es": "picante", "imagen": "Persona con la boca roja comiendo chile", "ejemplo": ["It's a spicy soup.", "Es una sopa picante."] },
          { "en": "bitter", "es": "amargo", "imagen": "Persona haciendo gesto al probar café negro", "ejemplo": ["This coffee is bitter.", "Este café está amargo."] },
          { "en": "fresh", "es": "fresco", "imagen": "Verduras recién cosechadas con gotas de agua", "ejemplo": ["These are fresh vegetables.", "Estas son verduras frescas."] },
          { "en": "healthy food", "es": "comida saludable", "imagen": "Plato con ensalada y frutas", "ejemplo": ["This is healthy food.", "Esta es comida saludable."] }
        ]
      },
      {
        "id": "personas",
        "titulo": "Cómo son las personas",
        "icono": "🧑",
        "patron": ["He's a rich man.", "She's an elegant woman.", "They are careful drivers."],
        "palabras": [
          { "en": "rich", "es": "rico", "imagen": "Hombre elegante junto a una mansión", "ejemplo": ["He is a rich man.", "Él es un hombre rico."] },
          { "en": "poor", "es": "pobre", "imagen": "Persona humilde contando unas pocas monedas", "ejemplo": ["They are a poor family.", "Son una familia pobre."] },
          { "en": "elegant", "es": "elegante", "imagen": "Mujer con vestido de noche en una fiesta", "ejemplo": ["She is an elegant woman.", "Ella es una mujer elegante."] },
          { "en": "tidy", "es": "ordenado", "imagen": "Niño acomodando sus juguetes en su cuarto", "ejemplo": ["My son is a tidy boy.", "Mi hijo es un niño ordenado."] },
          { "en": "messy", "es": "desordenado", "imagen": "Cuarto con ropa tirada por todos lados", "ejemplo": ["My brother has a messy room.", "Mi hermano tiene un cuarto desordenado."] },
          { "en": "careful", "es": "cuidadoso", "imagen": "Persona manejando con atención y ambas manos en el volante", "ejemplo": ["She is a careful driver.", "Ella es una conductora cuidadosa."] },
          { "en": "cheerful", "es": "alegre", "imagen": "Grupo de amigos riendo y bailando", "ejemplo": ["He is a cheerful person.", "Él es una persona alegre."] },
          { "en": "creative", "es": "creativo", "imagen": "Niña pintando un cuadro lleno de colores", "ejemplo": ["My daughter is a creative girl.", "Mi hija es una niña creativa."] }
        ]
      }
    ],
    "ejemplos": [
      { "en": "It's a red car.", "es": "Es un coche rojo." },
      { "en": "The house is very big.", "es": "La casa es muy grande." },
      { "en": "She has a small dog.", "es": "Ella tiene un perro pequeño." },
      { "en": "He is a good doctor.", "es": "Él es un buen doctor." },
      { "en": "They are tall men.", "es": "Ellos son hombres altos." },
      { "en": "This is an old book.", "es": "Este es un libro viejo." },
      { "en": "My room is clean and tidy.", "es": "Mi cuarto está limpio y ordenado." },
      { "en": "It's a very easy exercise.", "es": "Es un ejercicio muy fácil." },
      { "en": "I have a comfortable bed.", "es": "Tengo una cama cómoda." },
      { "en": "That is a dangerous animal.", "es": "Ese es un animal peligroso." }
    ],
    "frases": [
      { "en": "My sister has a small red car and a big black dog.", "es": "Mi hermana tiene un coche rojo pequeño y un perro negro grande." },
      { "en": "This is a very good restaurant and the food is delicious.", "es": "Este es un restaurante muy bueno y la comida es deliciosa." },
      { "en": "It's a beautiful old house with a big garden.", "es": "Es una casa vieja y hermosa con un jardín grande." },
      { "en": "He is a tall young man with short black hair.", "es": "Él es un hombre alto y joven con cabello negro corto." },
      { "en": "The exam is difficult, but my teacher is very patient.", "es": "El examen es difícil, pero mi maestro es muy paciente." },
      { "en": "This city is big and noisy, but it is very interesting.", "es": "Esta ciudad es grande y ruidosa, pero es muy interesante." },
      { "en": "These shoes are cheap but they are very comfortable.", "es": "Estos zapatos son baratos pero son muy cómodos." },
      { "en": "My brother has a messy room and a very old computer.", "es": "Mi hermano tiene un cuarto desordenado y una computadora muy vieja." },
      { "en": "It's a hot day and I have a cold drink.", "es": "Es un día caluroso y tengo una bebida fría." },
      { "en": "She is a rich woman with an expensive car.", "es": "Ella es una mujer rica con un coche caro." }
    ],
    "listening": [
      { "audio": "I have a small black dog.", "pregunta": "¿Cómo es el perro?", "opciones": ["Pequeño y negro", "Grande y negro", "Pequeño y blanco", "Grande y café"] },
      { "audio": "My new car is very fast.", "pregunta": "¿Cómo es el coche?", "opciones": ["Nuevo y rápido", "Viejo y rápido", "Nuevo y lento", "Viejo y lento"] },
      { "audio": "This soup is hot and spicy.", "pregunta": "¿Cómo está la sopa?", "opciones": ["Caliente y picante", "Fría y dulce", "Caliente y salada", "Fría y picante"] },
      { "audio": "It's an interesting city, but it's very noisy.", "pregunta": "¿Qué problema tiene la ciudad?", "opciones": ["Es muy ruidosa", "Es muy cara", "Es muy aburrida", "Es muy peligrosa"] },
      { "audio": "He is a tall man with short hair.", "pregunta": "¿Cómo es el hombre?", "opciones": ["Alto, con cabello corto", "Bajo, con cabello corto", "Alto, con cabello largo", "Bajo, con cabello largo"] }
    ],
    "lectura": {
      "titulo": "My new apartment",
      "texto": "I have a new apartment. It's small but very comfortable. It's on a quiet street in a big city. The living room has a soft gray sofa and a round table. The kitchen is clean and modern. My neighbors are friendly people. The only problem is the old elevator. It's very slow! But the rent is cheap, and I'm happy here.",
      "preguntas": [
        { "pregunta": "¿Cómo es el departamento?", "opciones": ["Pequeño pero cómodo", "Grande y moderno", "Viejo y ruidoso", "Caro y oscuro"] },
        { "pregunta": "¿De qué color es el sofá?", "opciones": ["Gris", "Rojo", "Azul", "Negro"] },
        { "pregunta": "¿Cuál es el único problema?", "opciones": ["El elevador viejo y lento", "Los vecinos", "La renta cara", "La calle ruidosa"] },
        { "pregunta": "¿Cómo es la renta?", "opciones": ["Barata", "Cara", "Muy cara", "El texto no lo dice"] }
      ]
    },
    "escritura": [
      { "instruccion": "Ordena las palabras.", "pregunta": "car / a / red / is / It", "respuestas": ["It is a red car", "It's a red car"] },
      { "instruccion": "Ordena las palabras.", "pregunta": "big / a / have / house / We", "respuestas": ["We have a big house"] },
      { "instruccion": "Ordena las palabras.", "pregunta": "old / She / an / has / bike", "respuestas": ["She has an old bike"] },
      { "instruccion": "Corrige la oración.", "pregunta": "It's a car blue.", "respuestas": ["It's a blue car", "It is a blue car"] },
      { "instruccion": "Corrige la oración.", "pregunta": "They are talls men.", "respuestas": ["They are tall men", "They're tall men"] },
      { "instruccion": "Completa con a o an.", "pregunta": "It's ___ easy question.", "respuestas": ["an"] },
      { "instruccion": "Completa con a o an.", "pregunta": "He is ___ good doctor.", "respuestas": ["a"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "Es una casa grande.", "respuestas": ["It's a big house", "It is a big house"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "Mi coche es nuevo.", "respuestas": ["My car is new"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "Ella es una mujer muy elegante.", "respuestas": ["She's a very elegant woman", "She is a very elegant woman"] }
    ],
    "examen": [
      { "tipo": "opcion", "pregunta": "Elige la oración correcta.", "opciones": ["I have a black dog.", "I have a dog black.", "I have black a dog.", "I have a blacks dog."] },
      { "tipo": "opcion", "pregunta": "Elige la oración correcta.", "opciones": ["They are good students.", "They are goods students.", "They are students goods.", "They are a good students."] },
      { "tipo": "opcion", "pregunta": "It's ___ old house.", "opciones": ["an", "a", "the a", "two"] },
      { "tipo": "opcion", "pregunta": "She is ___ tall.", "opciones": ["very", "a very", "very a", "the very"] },
      { "tipo": "opcion", "pregunta": "El contrario de «heavy» es…", "opciones": ["light", "hard", "soft", "full"] },
      { "tipo": "opcion", "pregunta": "The movie is ___. I'm bored.", "opciones": ["boring", "bored", "bore", "bores"] },
      { "tipo": "listening", "audio": "My grandmother has a big old house.", "pregunta": "¿Cómo es la casa de la abuela?", "opciones": ["Grande y vieja", "Pequeña y vieja", "Grande y nueva", "Pequeña y nueva"] },
      { "tipo": "listening", "audio": "This coffee is cold and bitter.", "pregunta": "¿Cómo está el café?", "opciones": ["Frío y amargo", "Caliente y amargo", "Frío y dulce", "Caliente y dulce"] },
      { "tipo": "escribir", "pregunta": "Ordena: hair / She / long / has", "respuestas": ["She has long hair"] },
      { "tipo": "escribir", "pregunta": "Traduce: Es un libro interesante.", "respuestas": ["It's an interesting book", "It is an interesting book"] }
    ]
  },
  {
    "id": "a1-10",
    "num": 10,
    "titulo": "There is / there are",
    "contexto": "Mi casa y mi barrio",
    "explicacion": {
      "es": [
        "**There is** y **there are** significan **hay**. Sirven para decir qué existe en un lugar.",
        "**There is** va con una sola cosa: *There is a park near my house.* Al hablar se dice **there's**.",
        "**There are** va con varias cosas: *There are two schools in my neighborhood.*",
        "En **negativo** se dice *there isn't* y *there aren't*. Para **preguntar**: *Is there a bank near here?* o *Are there any parks?* Se responde *Yes, there is / No, there isn't*."
      ],
      "tabla": { "columnas": ["", "Una cosa", "Varias cosas"], "filas": [["Afirmativo", "There is a bank.", "There are two banks."], ["Negativo", "There isn't a bank.", "There aren't any banks."], ["Pregunta", "Is there a bank?", "Are there any banks?"], ["Respuesta corta", "Yes, there is. / No, there isn't.", "Yes, there are. / No, there aren't."]] },
      "ojo": [
        "«Hay» no se dice con *have*: *There is a park* (no *It has a park* ni *Have a park*).",
        "Con varias cosas va **are**: *There **are** three cafés* (no *There is three cafés*).",
        "En preguntas y negativos con plural se usa **any**: *Are there **any** parks? There aren't **any** restaurants.*",
        "Para preguntar cuántos: *How many schools are there?*",
        "*There's* se usa solo en singular: *There's a gym* (no *There's two gyms*)."
      ],
      "en": [
        "Use **there is** for one thing: There is a park near my house.",
        "Use **there are** for two or more things: There are two schools.",
        "Negative: there isn't, there aren't.",
        "Questions: Is there a bank near here? Are there any cafés?"
      ]
    },
    "vocabulario": [
      { "en": "a park", "es": "un parque", "imagen": "Niños jugando en un parque", "ejemplo": ["There is a big park near my house.", "Hay un parque grande cerca de mi casa."] },
      { "en": "a school", "es": "una escuela", "imagen": "Niños en el patio de la escuela", "ejemplo": ["There is a school on my street.", "Hay una escuela en mi calle."] },
      { "en": "a hospital", "es": "un hospital", "imagen": "Fachada de un hospital moderno", "ejemplo": ["Is there a hospital near here?", "¿Hay un hospital cerca de aquí?"] },
      { "en": "a supermarket", "es": "un supermercado", "imagen": "Pasillo de un supermercado con productos", "ejemplo": ["There is a supermarket on the corner.", "Hay un supermercado en la esquina."] },
      { "en": "a pharmacy", "es": "una farmacia", "imagen": "Fachada de una farmacia con su cruz verde", "ejemplo": ["There isn't a pharmacy in my neighborhood.", "No hay una farmacia en mi barrio."] },
      { "en": "a bank", "es": "un banco", "imagen": "Fachada de un banco con cajero automático", "ejemplo": ["There is a bank next to the park.", "Hay un banco junto al parque."] },
      { "en": "a restaurant", "es": "un restaurante", "imagen": "Terraza de un restaurante con mesas", "ejemplo": ["There are two restaurants on this street.", "Hay dos restaurantes en esta calle."] },
      { "en": "a church", "es": "una iglesia", "imagen": "Iglesia antigua en una plaza", "ejemplo": ["There is an old church in the center.", "Hay una iglesia antigua en el centro."] },
      { "en": "a library", "es": "una biblioteca", "imagen": "Biblioteca con estantes llenos de libros", "ejemplo": ["Is there a library in your town?", "¿Hay una biblioteca en tu pueblo?"] },
      { "en": "a post office", "es": "una oficina de correos", "imagen": "Persona enviando un paquete en el correo", "ejemplo": ["There is a post office near the bank.", "Hay una oficina de correos cerca del banco."] },
      { "en": "a gas station", "es": "una gasolinera", "imagen": "Coche cargando gasolina en una gasolinera", "ejemplo": ["There's a gas station on the highway.", "Hay una gasolinera en la carretera."] },
      { "en": "a bus stop", "es": "una parada de autobús", "imagen": "Personas esperando en una parada de autobús", "ejemplo": ["There is a bus stop in front of my house.", "Hay una parada de autobús enfrente de mi casa."] },
      { "en": "a gym", "es": "un gimnasio", "imagen": "Personas haciendo ejercicio en un gimnasio", "ejemplo": ["There is a new gym in my neighborhood.", "Hay un gimnasio nuevo en mi barrio."] },
      { "en": "a bakery", "es": "una panadería", "imagen": "Aparador de una panadería con pan fresco", "ejemplo": ["There's a good bakery on the corner.", "Hay una buena panadería en la esquina."] },
      { "en": "a café", "es": "una cafetería", "imagen": "Amigos tomando café en una cafetería", "ejemplo": ["There are three cafés in the square.", "Hay tres cafeterías en la plaza."] },
      { "en": "a movie theater", "es": "un cine", "imagen": "Personas con palomitas en la sala de un cine", "ejemplo": ["Is there a movie theater near here?", "¿Hay un cine cerca de aquí?"] }
    ],
    "grupos": [
      {
        "id": "casa",
        "titulo": "Las partes de la casa",
        "icono": "🏠",
        "patron": ["There is a balcony.", "There are three bedrooms.", "Is there a garage?"],
        "palabras": [
          { "en": "a kitchen", "es": "una cocina", "imagen": "Cocina moderna", "ejemplo": ["There is a big kitchen in my house.", "Hay una cocina grande en mi casa."] },
          { "en": "a dining room", "es": "un comedor", "imagen": "Comedor con una mesa larga y sillas", "ejemplo": ["There is a table in the dining room.", "Hay una mesa en el comedor."] },
          { "en": "a hallway", "es": "un pasillo", "imagen": "Pasillo largo de una casa", "ejemplo": ["There are pictures in the hallway.", "Hay cuadros en el pasillo."] },
          { "en": "stairs", "es": "escaleras", "imagen": "Escaleras de madera dentro de una casa", "ejemplo": ["There are stairs to the second floor.", "Hay escaleras al segundo piso."] },
          { "en": "a balcony", "es": "un balcón", "imagen": "Balcón con plantas y dos sillas", "ejemplo": ["There is a small balcony in my apartment.", "Hay un balcón pequeño en mi departamento."] },
          { "en": "a roof", "es": "un techo (exterior)", "imagen": "Casa con techo de tejas rojas", "ejemplo": ["There is a cat on the roof.", "Hay un gato en el techo."] },
          { "en": "a wall", "es": "una pared", "imagen": "Pared con cuadros colgados", "ejemplo": ["There are photos on the wall.", "Hay fotos en la pared."] },
          { "en": "a floor", "es": "un piso", "imagen": "Piso de madera brillante", "ejemplo": ["There is a rug on the floor.", "Hay un tapete en el piso."] },
          { "en": "a basement", "es": "un sótano", "imagen": "Sótano con cajas guardadas", "ejemplo": ["There is a basement in the house.", "Hay un sótano en la casa."] },
          { "en": "a laundry room", "es": "un cuarto de lavado", "imagen": "Lavadora y secadora en un cuarto de lavado", "ejemplo": ["There's a washing machine in the laundry room.", "Hay una lavadora en el cuarto de lavado."] },
          { "en": "a patio", "es": "un patio", "imagen": "Patio con mesa y sombrilla", "ejemplo": ["There are chairs on the patio.", "Hay sillas en el patio."] },
          { "en": "a garden", "es": "un jardín", "imagen": "Jardín con flores", "ejemplo": ["There are flowers in the garden.", "Hay flores en el jardín."] },
          { "en": "a garage", "es": "una cochera", "imagen": "Cochera con un coche", "ejemplo": ["There are two cars in the garage.", "Hay dos coches en la cochera."] }
        ]
      },
      {
        "id": "calle",
        "titulo": "En la calle",
        "icono": "🚦",
        "patron": ["There is a traffic light.", "There are many trees.", "Is there a bench?"],
        "palabras": [
          { "en": "a street", "es": "una calle", "imagen": "Calle con coches", "ejemplo": ["There are many cars on my street.", "Hay muchos coches en mi calle."] },
          { "en": "a traffic light", "es": "un semáforo", "imagen": "Semáforo en rojo en una esquina", "ejemplo": ["There is a traffic light on the corner.", "Hay un semáforo en la esquina."] },
          { "en": "a crosswalk", "es": "un paso peatonal", "imagen": "Personas cruzando por el paso peatonal", "ejemplo": ["There is a crosswalk in front of the school.", "Hay un paso peatonal enfrente de la escuela."] },
          { "en": "a sidewalk", "es": "una banqueta", "imagen": "Persona caminando por la banqueta", "ejemplo": ["There are trees on the sidewalk.", "Hay árboles en la banqueta."] },
          { "en": "a corner", "es": "una esquina", "imagen": "Esquina de dos calles con un café", "ejemplo": ["There is a café on the corner.", "Hay un café en la esquina."] },
          { "en": "a bridge", "es": "un puente", "imagen": "Puente sobre un río en la ciudad", "ejemplo": ["There is a bridge over the river.", "Hay un puente sobre el río."] },
          { "en": "a square", "es": "una plaza", "imagen": "Plaza con fuente y gente paseando", "ejemplo": ["There is a fountain in the square.", "Hay una fuente en la plaza."] },
          { "en": "a parking lot", "es": "un estacionamiento", "imagen": "Estacionamiento con coches", "ejemplo": ["There is a parking lot behind the mall.", "Hay un estacionamiento detrás del centro comercial."] },
          { "en": "a bench", "es": "una banca", "imagen": "Banca de madera en un parque", "ejemplo": ["There is a bench under the tree.", "Hay una banca debajo del árbol."] },
          { "en": "a streetlight", "es": "un poste de luz", "imagen": "Poste de luz encendido en la calle de noche", "ejemplo": ["There are streetlights on my street.", "Hay postes de luz en mi calle."] },
          { "en": "a tree", "es": "un árbol", "imagen": "Árbol grande y frondoso", "ejemplo": ["There is a big tree in front of my house.", "Hay un árbol grande enfrente de mi casa."] },
          { "en": "a building", "es": "un edificio", "imagen": "Edificio de departamentos", "ejemplo": ["There are tall buildings downtown.", "Hay edificios altos en el centro."] }
        ]
      },
      {
        "id": "naturaleza",
        "titulo": "Cerca de mi casa",
        "icono": "🏞️",
        "patron": ["There is a river.", "There are mountains.", "Is there a beach near here?"],
        "palabras": [
          { "en": "a beach", "es": "una playa", "imagen": "Playas", "ejemplo": ["There is a beautiful beach near my house.", "Hay una playa hermosa cerca de mi casa."] },
          { "en": "a river", "es": "un río", "imagen": "Río entre árboles", "ejemplo": ["There is a river behind the park.", "Hay un río detrás del parque."] },
          { "en": "a lake", "es": "un lago", "imagen": "Gansos junto a un lago", "ejemplo": ["There are ducks on the lake.", "Hay patos en el lago."] },
          { "en": "a mountain", "es": "una montaña", "imagen": "Montaña nevada bajo un cielo azul", "ejemplo": ["There are big mountains near my town.", "Hay montañas grandes cerca de mi pueblo."] },
          { "en": "a forest", "es": "un bosque", "imagen": "Bosque de pinos con luz entre los árboles", "ejemplo": ["There is a forest near the lake.", "Hay un bosque cerca del lago."] },
          { "en": "a hill", "es": "una colina", "imagen": "Colina verde con una casa arriba", "ejemplo": ["There is a house on the hill.", "Hay una casa en la colina."] },
          { "en": "a field", "es": "un campo", "imagen": "Ovejas en el campo", "ejemplo": ["There are sheep in the field.", "Hay ovejas en el campo."] },
          { "en": "a farm", "es": "una granja", "imagen": "Granja con granero rojo y animales", "ejemplo": ["There are cows on the farm.", "Hay vacas en la granja."] }
        ]
      }
    ],
    "ejemplos": [
      { "en": "There is a park near my house.", "es": "Hay un parque cerca de mi casa." },
      { "en": "There are two schools in my neighborhood.", "es": "Hay dos escuelas en mi barrio." },
      { "en": "There's a bakery on the corner.", "es": "Hay una panadería en la esquina." },
      { "en": "There isn't a hospital in my town.", "es": "No hay un hospital en mi pueblo." },
      { "en": "There aren't any restaurants on my street.", "es": "No hay restaurantes en mi calle." },
      { "en": "Is there a bank near here? Yes, there is.", "es": "¿Hay un banco cerca de aquí? Sí." },
      { "en": "Are there any cafés? No, there aren't.", "es": "¿Hay cafeterías? No." },
      { "en": "There are three bedrooms in my house.", "es": "Hay tres recámaras en mi casa." },
      { "en": "How many students are there in your class?", "es": "¿Cuántos estudiantes hay en tu clase?" },
      { "en": "There is a beautiful beach near my town.", "es": "Hay una playa hermosa cerca de mi pueblo." }
    ],
    "frases": [
      { "en": "There is a supermarket and a pharmacy on my street.", "es": "Hay un supermercado y una farmacia en mi calle." },
      { "en": "There are a lot of trees in the park near my house.", "es": "Hay muchos árboles en el parque cerca de mi casa." },
      { "en": "There isn't a movie theater in my neighborhood, but there is a big mall.", "es": "No hay un cine en mi barrio, pero hay un centro comercial grande." },
      { "en": "In my house there are three bedrooms and two bathrooms.", "es": "En mi casa hay tres recámaras y dos baños." },
      { "en": "Is there a bus stop near the school? Yes, there is.", "es": "¿Hay una parada de autobús cerca de la escuela? Sí." },
      { "en": "There is a small balcony with plants in my apartment.", "es": "Hay un balcón pequeño con plantas en mi departamento." },
      { "en": "There are many people in the square on Sundays.", "es": "Hay mucha gente en la plaza los domingos." },
      { "en": "There aren't any cars on the bridge today.", "es": "Hoy no hay coches en el puente." },
      { "en": "There is a river behind my house and there are mountains in the distance.", "es": "Hay un río detrás de mi casa y hay montañas a lo lejos." },
      { "en": "How many cafés are there in your town?", "es": "¿Cuántas cafeterías hay en tu pueblo?" }
    ],
    "listening": [
      { "audio": "There is a big park near my house.", "pregunta": "¿Qué hay cerca de su casa?", "opciones": ["Un parque grande", "Una escuela grande", "Un mercado", "Un hospital"] },
      { "audio": "There are two pharmacies on my street.", "pregunta": "¿Cuántas farmacias hay en su calle?", "opciones": ["Dos", "Una", "Tres", "Ninguna"] },
      { "audio": "There isn't a bank in my neighborhood.", "pregunta": "¿Qué NO hay en su barrio?", "opciones": ["Un banco", "Un parque", "Una iglesia", "Una panadería"] },
      { "audio": "Is there a bus stop near here? Yes, there's one on the corner.", "pregunta": "¿Dónde está la parada de autobús?", "opciones": ["En la esquina", "Enfrente de la casa", "Junto al banco", "No hay parada"] },
      { "audio": "In my house there are three bedrooms and one bathroom.", "pregunta": "¿Cuántas recámaras hay?", "opciones": ["Tres", "Una", "Dos", "Cuatro"] }
    ],
    "lectura": {
      "titulo": "My neighborhood",
      "texto": "I live in a quiet neighborhood. There is a small park in front of my house, and there are a lot of trees on my street. On the corner there is a bakery and a café. There isn't a supermarket near my house, but there is a big market on Saturdays. There are two schools and a library. There isn't a movie theater, so on weekends we go downtown.",
      "preguntas": [
        { "pregunta": "¿Qué hay enfrente de su casa?", "opciones": ["Un parque pequeño", "Una panadería", "Una escuela", "Un mercado"] },
        { "pregunta": "¿Qué hay en la esquina?", "opciones": ["Una panadería y una cafetería", "Un supermercado", "Una biblioteca", "Un cine"] },
        { "pregunta": "¿Cuándo hay un mercado grande?", "opciones": ["Los sábados", "Los domingos", "Todos los días", "Nunca"] },
        { "pregunta": "¿Por qué van al centro los fines de semana?", "opciones": ["No hay cine en su barrio", "No hay parque", "Es más barato", "Viven en el centro"] }
      ]
    },
    "escritura": [
      { "instruccion": "Completa con There is o There are.", "pregunta": "___ a bank on my street.", "respuestas": ["There is", "There's"] },
      { "instruccion": "Completa con There is o There are.", "pregunta": "___ two parks near my house.", "respuestas": ["There are"] },
      { "instruccion": "Completa con There is o There are.", "pregunta": "___ a lot of cars on the street.", "respuestas": ["There are"] },
      { "instruccion": "Escribe en negativo.", "pregunta": "There is a hospital.", "respuestas": ["There isn't a hospital", "There is not a hospital"] },
      { "instruccion": "Escribe en negativo.", "pregunta": "There are cafés.", "respuestas": ["There aren't any cafés", "There are not any cafés", "There aren't cafés", "There are no cafés"] },
      { "instruccion": "Convierte en pregunta.", "pregunta": "There is a gym near here.", "respuestas": ["Is there a gym near here"] },
      { "instruccion": "Convierte en pregunta.", "pregunta": "There are restaurants on this street.", "respuestas": ["Are there any restaurants on this street", "Are there restaurants on this street"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "Hay una farmacia en la esquina.", "respuestas": ["There is a pharmacy on the corner", "There's a pharmacy on the corner"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "Hay tres recámaras en mi casa.", "respuestas": ["There are three bedrooms in my house"] },
      { "instruccion": "Corrige la oración.", "pregunta": "There is two schools in my town.", "respuestas": ["There are two schools in my town"] }
    ],
    "examen": [
      { "tipo": "opcion", "pregunta": "___ a supermarket near my house.", "opciones": ["There is", "There are", "It has", "Have"] },
      { "tipo": "opcion", "pregunta": "___ three parks in my neighborhood.", "opciones": ["There are", "There is", "There's", "It is"] },
      { "tipo": "opcion", "pregunta": "___ there a bank near here?", "opciones": ["Is", "Are", "Has", "Does"] },
      { "tipo": "opcion", "pregunta": "There aren't ___ restaurants on my street.", "opciones": ["any", "a", "some", "one"] },
      { "tipo": "opcion", "pregunta": "How many bedrooms ___ in your house?", "opciones": ["are there", "there are", "is there", "have there"] },
      { "tipo": "opcion", "pregunta": "Are there any cafés? No, there ___.", "opciones": ["aren't", "isn't", "don't", "haven't"] },
      { "tipo": "listening", "audio": "There are a lot of trees, but there isn't a park.", "pregunta": "¿Qué NO hay?", "opciones": ["Un parque", "Árboles", "Calles", "Casas"] },
      { "tipo": "listening", "audio": "Is there a pharmacy near here? Yes, there's one next to the bank.", "pregunta": "¿Dónde está la farmacia?", "opciones": ["Junto al banco", "Enfrente del parque", "En la esquina", "Detrás de la escuela"] },
      { "tipo": "escribir", "pregunta": "Escribe en negativo: There is a gym.", "respuestas": ["There isn't a gym", "There is not a gym"] },
      { "tipo": "escribir", "pregunta": "Traduce: Hay dos escuelas en mi barrio.", "respuestas": ["There are two schools in my neighborhood", "There are two schools in my neighbourhood"] }
    ]
  },
  {
    "id": "a1-11",
    "num": 11,
    "titulo": "Preposiciones de lugar",
    "contexto": "¿Dónde está?",
    "explicacion": {
      "es": [
        "Las **preposiciones de lugar** dicen **dónde está** algo: *in* (dentro de), *on* (sobre), *under* (debajo de), *next to* (junto a), *between* (entre), *behind* (detrás de), *in front of* (delante de).",
        "Se usan con **to be**: *The keys **are on** the table. The cat **is under** the bed.*",
        "Para preguntar se usa **Where**: *Where **is** my phone? Where **are** my keys?* Se responde *It's… / They're…*",
        "Algunas expresiones no llevan *the*: ***at** home, **at** work, **at** school, **in** bed*."
      ],
      "tabla": {
        "columnas": ["Preposición", "Significa", "Ejemplo"],
        "filas": [
          ["in", "dentro de", "The cat is in the box."],
          ["on", "sobre (tocando)", "The book is on the table."],
          ["under", "debajo de", "The dog is under the bed."],
          ["next to", "junto a", "The lamp is next to the sofa."],
          ["between", "entre", "The bank is between the café and the pharmacy."],
          ["behind", "detrás de", "The garden is behind the house."],
          ["in front of", "delante de", "The car is in front of the house."],
          ["across from", "enfrente de (al otro lado)", "The pharmacy is across from the bank."]
        ]
      },
      "ojo": [
        "*In front of* es **delante de**; para «enfrente de, al otro lado de la calle» se dice *across from*.",
        "*On* es sobre algo, tocándolo: *on the table*. *Above* es arriba, sin tocar: *The lamp is above the table.*",
        "Se dice *next **to***, no *next of*; y *near* va sin *of*: *near the park* (no *near of the park*).",
        "*At home*, *at work* y *at school* van sin *the*: *I'm at home* (no *in the home*).",
        "Para «en la calle» o «en la ciudad» se usa *in* con lugares grandes: *in Mexico, in the city*; y *on* con el autobús o el tren: *on the bus*."
      ],
      "en": [
        "Prepositions of place say where something is: in, on, under, next to, between, behind, in front of.",
        "Use them with be: The keys are on the table.",
        "Ask with where: Where is my phone? It's in your bag.",
        "Say at home, at work, at school (no the)."
      ]
    },
    "vocabulario": [
      { "en": "in", "es": "en, dentro de", "imagen": "Gato dentro de una caja de cartón", "ejemplo": ["The cat is in the box.", "El gato está dentro de la caja."] },
      { "en": "on", "es": "en, sobre", "imagen": "Libro sobre una mesa de madera", "ejemplo": ["The book is on the table.", "El libro está sobre la mesa."] },
      { "en": "under", "es": "debajo de", "imagen": "Perro acostado debajo de una mesa", "ejemplo": ["The dog is under the table.", "El perro está debajo de la mesa."] },
      { "en": "next to", "es": "junto a, al lado de", "imagen": "Dos amigos sentados uno al lado del otro en una banca", "ejemplo": ["My house is next to the park.", "Mi casa está junto al parque."] },
      { "en": "between", "es": "entre (dos cosas)", "imagen": "Niño sentado entre su mamá y su papá en un sofá", "ejemplo": ["The bank is between the café and the pharmacy.", "El banco está entre la cafetería y la farmacia."] },
      { "en": "behind", "es": "detrás de", "imagen": "Niña escondida detrás de un árbol", "ejemplo": ["The garden is behind the house.", "El jardín está detrás de la casa."] },
      { "en": "in front of", "es": "delante de, frente a", "imagen": "Persona parada delante de la puerta de una casa", "ejemplo": ["The car is in front of the house.", "El coche está delante de la casa."] },
      { "en": "above", "es": "arriba de, encima de (sin tocar)", "imagen": "Lámpara colgando arriba de una mesa", "ejemplo": ["The clock is above the door.", "El reloj está arriba de la puerta."] },
      { "en": "below", "es": "abajo de, por debajo de", "imagen": "Peces nadando abajo de un bote", "ejemplo": ["The kitchen is below my bedroom.", "La cocina está abajo de mi recámara."] },
      { "en": "near", "es": "cerca de", "imagen": "Casa cerca de la playa", "ejemplo": ["The school is near my house.", "La escuela está cerca de mi casa."] },
      { "en": "far from", "es": "lejos de", "imagen": "Casa sola en el campo, lejos de la ciudad", "ejemplo": ["The airport is far from the city.", "El aeropuerto está lejos de la ciudad."] },
      { "en": "across from", "es": "enfrente de (al otro lado)", "imagen": "Café al otro lado de la calle, enfrente de un banco", "ejemplo": ["The pharmacy is across from the bank.", "La farmacia está enfrente del banco."] },
      { "en": "inside", "es": "adentro", "imagen": "Niños jugando dentro de una tienda de campaña", "ejemplo": ["The children are inside.", "Los niños están adentro."] },
      { "en": "outside", "es": "afuera", "imagen": "Perro esperando afuera de la casa junto a la puerta", "ejemplo": ["The dog is outside.", "El perro está afuera."] },
      { "en": "on top of", "es": "encima de", "imagen": "Gato acostado encima del refrigerador", "ejemplo": ["The box is on top of the closet.", "La caja está encima del clóset."] },
      { "en": "around", "es": "alrededor de", "imagen": "Familia sentada alrededor de una mesa", "ejemplo": ["We sit around the table.", "Nos sentamos alrededor de la mesa."] }
    ],
    "grupos": [
      {
        "id": "expresiones",
        "titulo": "Expresiones de lugar",
        "icono": "📍",
        "patron": ["She's at home.", "It's on the left.", "He's upstairs."],
        "palabras": [
          { "en": "at home", "es": "en casa", "imagen": "En casa", "ejemplo": ["I'm at home today.", "Hoy estoy en casa."] },
          { "en": "at work", "es": "en el trabajo", "imagen": "En el trabajo", "ejemplo": ["My dad is at work.", "Mi papá está en el trabajo."] },
          { "en": "at school", "es": "en la escuela", "imagen": "En la escuela", "ejemplo": ["The children are at school.", "Los niños están en la escuela."] },
          { "en": "in bed", "es": "en la cama", "imagen": "Persona leyendo un libro en la cama", "ejemplo": ["My brother is still in bed.", "Mi hermano todavía está en la cama."] },
          { "en": "in the car", "es": "en el coche", "imagen": "Familia sentada dentro de un coche", "ejemplo": ["The keys are in the car.", "Las llaves están en el coche."] },
          { "en": "on the bus", "es": "en el autobús", "imagen": "Pasajeros sentados dentro de un autobús", "ejemplo": ["I'm on the bus now.", "Ahora estoy en el autobús."] },
          { "en": "on the left", "es": "a la izquierda", "imagen": "Señal con una flecha hacia la izquierda", "ejemplo": ["The bathroom is on the left.", "El baño está a la izquierda."] },
          { "en": "on the right", "es": "a la derecha", "imagen": "Señal con una flecha hacia la derecha", "ejemplo": ["The elevator is on the right.", "El elevador está a la derecha."] },
          { "en": "in the middle", "es": "en medio", "imagen": "Mesa con un florero en medio", "ejemplo": ["The table is in the middle of the room.", "La mesa está en medio del cuarto."] },
          { "en": "in the corner", "es": "en la esquina (de un cuarto)", "imagen": "Planta grande en la esquina de una sala", "ejemplo": ["The TV is in the corner.", "La televisión está en la esquina."] },
          { "en": "upstairs", "es": "arriba (en el piso de arriba)", "imagen": "Persona subiendo las escaleras de su casa", "ejemplo": ["My bedroom is upstairs.", "Mi recámara está arriba."] },
          { "en": "downstairs", "es": "abajo (en el piso de abajo)", "imagen": "Persona bajando las escaleras de su casa", "ejemplo": ["The kitchen is downstairs.", "La cocina está abajo."] },
          { "en": "over there", "es": "allá", "imagen": "Persona señalando algo a lo lejos", "ejemplo": ["The bus stop is over there.", "La parada de autobús está allá."] }
        ]
      },
      {
        "id": "objetos",
        "titulo": "¿Dónde está…?",
        "icono": "🔑",
        "patron": ["Where are my keys?", "It's under the bed.", "They're on the table."],
        "palabras": [
          { "en": "keys", "es": "llaves", "imagen": "Llaves", "ejemplo": ["Where are my keys? They're on the table.", "¿Dónde están mis llaves? Están sobre la mesa."] },
          { "en": "a phone", "es": "un teléfono", "imagen": "Teléfono", "ejemplo": ["Your phone is in your bag.", "Tu teléfono está en tu bolsa."] },
          { "en": "eyeglasses", "es": "lentes", "imagen": "Lentes", "ejemplo": ["My glasses are on my head!", "¡Mis lentes están en mi cabeza!"] },
          { "en": "a wallet", "es": "una cartera", "imagen": "Cartera", "ejemplo": ["The wallet is under the sofa.", "La cartera está debajo del sofá."] },
          { "en": "a bag", "es": "una bolsa", "imagen": "Bolsa", "ejemplo": ["Your bag is behind the door.", "Tu bolsa está detrás de la puerta."] },
          { "en": "a remote control", "es": "un control remoto", "imagen": "Control remoto", "ejemplo": ["The remote control is between the cushions.", "El control remoto está entre los cojines."] },
          { "en": "a backpack", "es": "una mochila", "imagen": "Mochila", "ejemplo": ["My backpack is next to the desk.", "Mi mochila está junto al escritorio."] },
          { "en": "an umbrella", "es": "un paraguas", "imagen": "Paraguas", "ejemplo": ["The umbrella is near the door.", "El paraguas está cerca de la puerta."] },
          { "en": "a jacket", "es": "una chamarra", "imagen": "Chamarra", "ejemplo": ["Your jacket is in the closet.", "Tu chamarra está en el clóset."] },
          { "en": "shoes", "es": "zapatos", "imagen": "Zapatos", "ejemplo": ["My shoes are under the bed.", "Mis zapatos están debajo de la cama."] },
          { "en": "books", "es": "libros", "imagen": "Libros", "ejemplo": ["The books are on the shelf.", "Los libros están en el estante."] },
          { "en": "a cat", "es": "un gato", "imagen": "Gato", "ejemplo": ["Where's the cat? It's on top of the TV.", "¿Dónde está el gato? Está encima de la tele."] }
        ]
      },
      {
        "id": "cuarto",
        "titulo": "En la sala y el cuarto",
        "icono": "🛋️",
        "patron": ["The lamp is next to the sofa.", "The rug is under the table.", "There's a picture above the bed."],
        "palabras": [
          { "en": "a sofa", "es": "un sofá", "imagen": "Sofá", "ejemplo": ["The cat is on the sofa.", "El gato está en el sofá."] },
          { "en": "a table", "es": "una mesa", "imagen": "Mesa", "ejemplo": ["The plant is on the table.", "La planta está sobre la mesa."] },
          { "en": "a chair", "es": "una silla", "imagen": "Silla", "ejemplo": ["My bag is on the chair.", "Mi bolsa está en la silla."] },
          { "en": "a bed", "es": "una cama", "imagen": "Cama", "ejemplo": ["There's a picture above the bed.", "Hay un cuadro arriba de la cama."] },
          { "en": "a lamp", "es": "una lámpara", "imagen": "Lámpara", "ejemplo": ["The lamp is next to the sofa.", "La lámpara está junto al sofá."] },
          { "en": "a bookshelf", "es": "un librero", "imagen": "Librero", "ejemplo": ["The bookshelf is behind the desk.", "El librero está detrás del escritorio."] },
          { "en": "a desk", "es": "un escritorio", "imagen": "Escritorio", "ejemplo": ["The computer is on the desk.", "La computadora está sobre el escritorio."] },
          { "en": "a window", "es": "una ventana", "imagen": "Ventana", "ejemplo": ["The desk is in front of the window.", "El escritorio está delante de la ventana."] },
          { "en": "a door", "es": "una puerta", "imagen": "Puerta", "ejemplo": ["The clock is above the door.", "El reloj está arriba de la puerta."] },
          { "en": "a rug", "es": "un tapete", "imagen": "Tapete", "ejemplo": ["The rug is under the coffee table.", "El tapete está debajo de la mesa de centro."] },
          { "en": "a mirror", "es": "un espejo", "imagen": "Espejo", "ejemplo": ["The mirror is on the wall.", "El espejo está en la pared."] },
          { "en": "a plant", "es": "una planta", "imagen": "Planta", "ejemplo": ["The plant is in the corner.", "La planta está en la esquina."] },
          { "en": "a nightstand", "es": "un buró", "imagen": "Buró", "ejemplo": ["My phone is on the nightstand.", "Mi teléfono está en el buró."] },
          { "en": "an armchair", "es": "un sillón", "imagen": "Sillón", "ejemplo": ["The armchair is between the sofa and the window.", "El sillón está entre el sofá y la ventana."] }
        ]
      }
    ],
    "ejemplos": [
      { "en": "The cat is in the box.", "es": "El gato está dentro de la caja." },
      { "en": "The keys are on the table.", "es": "Las llaves están sobre la mesa.", "imagen": "Llaves sobre una mesa de madera" },
      { "en": "The dog is under the bed.", "es": "El perro está debajo de la cama.", "imagen": "Perro asomándose debajo de una cama" },
      { "en": "My house is next to the park.", "es": "Mi casa está junto al parque.", "imagen": "Casa junto a un parque con árboles y juegos" },
      { "en": "The bank is between the café and the pharmacy.", "es": "El banco está entre la cafetería y la farmacia.", "imagen": "Calle con tres locales seguidos: una cafetería, un banco en medio y una farmacia" },
      { "en": "The garden is behind the house.", "es": "El jardín está detrás de la casa.", "imagen": "Vista trasera de una casa con su jardín detrás" },
      { "en": "The bus stop is in front of the school.", "es": "La parada de autobús está delante de la escuela.", "imagen": "Parada de autobús delante de la entrada de una escuela" },
      { "en": "Where is my phone? It's in your bag.", "es": "¿Dónde está mi teléfono? Está en tu bolsa.", "imagen": "Celular asomándose dentro de una bolsa abierta" },
      { "en": "I'm at home and my parents are at work.", "es": "Estoy en casa y mis papás están en el trabajo.", "imagen": "Joven en el sofá de su casa haciendo videollamada con sus papás que están en su oficina" },
      { "en": "The pharmacy is across from the bank.", "es": "La farmacia está enfrente del banco.", "imagen": "Una farmacia y un banco frente a frente, con la calle en medio" }
    ],
    "frases": [
      { "en": "My glasses are on the table next to the lamp.", "es": "Mis lentes están sobre la mesa junto a la lámpara.", "imagen": "Lentes sobre una mesita junto a una lámpara encendida" },
      { "en": "The cat is sleeping under the bed in my bedroom.", "es": "El gato está durmiendo debajo de la cama en mi recámara.", "imagen": "Gato dormido debajo de una cama en una recámara" },
      { "en": "There is a big tree in front of my house and a garden behind it.", "es": "Hay un árbol grande delante de mi casa y un jardín detrás.", "imagen": "Casa con un árbol grande delante y un jardín que se ve detrás" },
      { "en": "The supermarket is between the bank and the post office.", "es": "El supermercado está entre el banco y la oficina de correos.", "imagen": "Calle con un banco, un supermercado en medio y una oficina de correos" },
      { "en": "Where are my keys? I think they're in the car.", "es": "¿Dónde están mis llaves? Creo que están en el coche.", "imagen": "Llaves olvidadas en el asiento de un coche, vistas por la ventana" },
      { "en": "My bedroom is upstairs and the kitchen is downstairs.", "es": "Mi recámara está arriba y la cocina está abajo.", "imagen": "Casa de dos pisos vista por dentro: recámara arriba y cocina abajo" },
      { "en": "The bathroom is at the end of the hallway, on the left.", "es": "El baño está al final del pasillo, a la izquierda.", "imagen": "Pasillo de una casa con una puerta de baño al final a la izquierda" },
      { "en": "There is a picture above the sofa and a rug under the coffee table.", "es": "Hay un cuadro arriba del sofá y un tapete debajo de la mesa de centro.", "imagen": "Sala con un cuadro arriba del sofá y un tapete debajo de la mesa de centro" },
      { "en": "My school is near my house, but my work is far from here.", "es": "Mi escuela está cerca de mi casa, pero mi trabajo está lejos de aquí.", "imagen": "Niño caminando de su casa a una escuela cercana; al fondo, una ciudad lejana" },
      { "en": "The children are playing outside, around the big tree.", "es": "Los niños están jugando afuera, alrededor del árbol grande.", "imagen": "Niños tomados de la mano jugando alrededor de un árbol grande" }
    ],
    "listening": [
      { "audio": "Where are my keys? They're on the table.", "pregunta": "¿Dónde están las llaves?", "opciones": ["Sobre la mesa", "Debajo de la mesa", "En la bolsa", "En el coche"] },
      { "audio": "The cat is under the bed.", "pregunta": "¿Dónde está el gato?", "opciones": ["Debajo de la cama", "Sobre la cama", "Junto a la cama", "Detrás de la puerta"] },
      { "audio": "The bank is between the café and the pharmacy.", "pregunta": "¿Dónde está el banco?", "opciones": ["Entre la cafetería y la farmacia", "Enfrente de la farmacia", "Detrás de la cafetería", "Lejos de la farmacia"] },
      { "audio": "My bedroom is upstairs, next to the bathroom.", "pregunta": "¿Dónde está su recámara?", "opciones": ["Arriba, junto al baño", "Abajo, junto a la cocina", "Arriba, enfrente del baño", "Abajo, junto al baño"] },
      { "audio": "I'm not at home. I'm on the bus.", "pregunta": "¿Dónde está la persona?", "opciones": ["En el autobús", "En casa", "En el coche", "En el trabajo"] }
    ],
    "lectura": {
      "titulo": "Where is everything?",
      "texto": "This is my living room. The sofa is in front of the window, and there is a small table in front of the sofa. The TV is in the corner, next to a big plant. There is a lamp between the sofa and the armchair. My cat loves this room. Right now she is sleeping on top of the bookshelf! My keys are always on the small table, but today they aren't there. Where are they? Oh, they're under the sofa!",
      "preguntas": [
        { "pregunta": "¿Dónde está el sofá?", "opciones": ["Delante de la ventana", "En la esquina", "Detrás del sillón", "Junto a la puerta"] },
        { "pregunta": "¿Qué hay entre el sofá y el sillón?", "opciones": ["Una lámpara", "Una planta", "La televisión", "Una mesa"] },
        { "pregunta": "¿Dónde está el gato ahora?", "opciones": ["Encima del librero", "Debajo del sofá", "En la ventana", "Sobre la mesa"] },
        { "pregunta": "¿Dónde están las llaves hoy?", "opciones": ["Debajo del sofá", "Sobre la mesa pequeña", "En la bolsa", "Junto a la tele"] }
      ]
    },
    "escritura": [
      { "instruccion": "Completa con la preposición.", "pregunta": "The book is ___ the table. (sobre)", "respuestas": ["on"] },
      { "instruccion": "Completa con la preposición.", "pregunta": "The dog is ___ the bed. (debajo de)", "respuestas": ["under"] },
      { "instruccion": "Completa con la preposición.", "pregunta": "The lamp is ___ the sofa. (junto a)", "respuestas": ["next to"] },
      { "instruccion": "Completa con la preposición.", "pregunta": "The garden is ___ the house. (detrás de)", "respuestas": ["behind"] },
      { "instruccion": "Completa con la preposición.", "pregunta": "The bank is ___ the café and the pharmacy. (entre)", "respuestas": ["between"] },
      { "instruccion": "Haz la pregunta con Where.", "pregunta": "(my phone)", "respuestas": ["Where is my phone", "Where's my phone"] },
      { "instruccion": "Haz la pregunta con Where.", "pregunta": "(my keys)", "respuestas": ["Where are my keys"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "El gato está dentro de la caja.", "respuestas": ["The cat is in the box", "The cat's in the box", "The cat is inside the box"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "Estoy en casa.", "respuestas": ["I am at home", "I'm at home"] },
      { "instruccion": "Corrige la oración.", "pregunta": "The park is next of my house.", "respuestas": ["The park is next to my house"] }
    ],
    "examen": [
      { "tipo": "opcion", "pregunta": "The keys are ___ the table.", "opciones": ["on", "at", "of", "to"] },
      { "tipo": "opcion", "pregunta": "The cat is ___ the bed. (debajo)", "opciones": ["under", "above", "on", "in front of"] },
      { "tipo": "opcion", "pregunta": "My house is next ___ the school.", "opciones": ["to", "of", "from", "at"] },
      { "tipo": "opcion", "pregunta": "I'm ___ home today.", "opciones": ["at", "in", "on", "to"] },
      { "tipo": "opcion", "pregunta": "___ are my glasses? They're in your bag.", "opciones": ["Where", "What", "Who", "When"] },
      { "tipo": "opcion", "pregunta": "The bank is ___ the café and the pharmacy.", "opciones": ["between", "behind", "under", "inside"] },
      { "tipo": "listening", "audio": "The bathroom is downstairs, on the right.", "pregunta": "¿Dónde está el baño?", "opciones": ["Abajo, a la derecha", "Arriba, a la derecha", "Abajo, a la izquierda", "Arriba, a la izquierda"] },
      { "tipo": "listening", "audio": "The pharmacy is across from the park.", "pregunta": "¿Dónde está la farmacia?", "opciones": ["Enfrente del parque", "Dentro del parque", "Lejos del parque", "Detrás del parque"] },
      { "tipo": "escribir", "pregunta": "Traduce: El perro está detrás de la puerta.", "respuestas": ["The dog is behind the door", "The dog's behind the door"] },
      { "tipo": "escribir", "pregunta": "Traduce: ¿Dónde están mis zapatos?", "respuestas": ["Where are my shoes"] }
    ]
  },
  {
    "id": "a1-12",
    "num": 12,
    "titulo": "Números, la hora y las fechas",
    "contexto": "Horarios, cumpleaños y calendario",
    "explicacion": {
      "es": [
        "Para preguntar la hora se dice **What time is it?** Se responde con **It's…**: *It's three o'clock.*",
        "Hay dos formas de decir la hora. La forma fácil son los números: *It's three fifteen* (3:15), *It's three thirty* (3:30). La forma clásica usa **past** (y) y **to** (para): *It's quarter **past** three. It's twenty **to** four.*",
        "Con las horas se usa **at**: *The class is **at** nine.* Para la mañana se dice **a.m.** y para la tarde y la noche **p.m.**",
        "Para las **fechas** se usan los números ordinales: se escribe *May 3* y se dice *May third* o *the third of May*. Los **años** se dicen de dos en dos: *1995* = *nineteen ninety-five*; *2026* = *twenty twenty-six*."
      ],
      "tabla": { "columnas": ["Hora", "Forma clásica", "Forma fácil"], "filas": [["3:00", "It's three o'clock.", "It's three."], ["3:05", "It's five past three.", "It's three oh five."], ["3:15", "It's quarter past three.", "It's three fifteen."], ["3:30", "It's half past three.", "It's three thirty."], ["3:40", "It's twenty to four.", "It's three forty."], ["3:45", "It's quarter to four.", "It's three forty-five."]] },
      "ojo": [
        "La hora siempre empieza con *It's*: *It's five o'clock* (no *Are the five*).",
        "*Quarter to six* es «cuarto para las seis»: se dice **to**, no *for*.",
        "*O'clock* solo va con horas exactas: *It's five o'clock*, pero *It's half past five* (sin *o'clock*).",
        "En las fechas se usan ordinales: *My birthday is on March **third*** (no *March three*).",
        "Al hablar no se usa el reloj de 24 horas: las 18:00 son *six p.m.* o *six in the evening*."
      ],
      "en": [
        "Ask: What time is it? Answer: It's three o'clock.",
        "Use past and to: It's quarter past three. It's twenty to four.",
        "Or just numbers: It's three fifteen.",
        "Dates use ordinal numbers: May third. Years: nineteen ninety-five."
      ]
    },
    "vocabulario": [
      { "en": "What time is it?", "es": "¿Qué hora es?", "imagen": "Persona mirando su reloj de pulsera", "ejemplo": ["What time is it? It's ten o'clock.", "¿Qué hora es? Son las diez."] },
      { "en": "o'clock", "es": "en punto", "imagen": "Reloj marcando las tres en punto", "ejemplo": ["It's three o'clock.", "Son las tres en punto."] },
      { "en": "half past", "es": "y media", "imagen": "Reloj marcando las cuatro y media", "ejemplo": ["It's half past four.", "Son las cuatro y media."] },
      { "en": "quarter past", "es": "y cuarto", "imagen": "Reloj marcando las dos y cuarto", "ejemplo": ["It's quarter past two.", "Son las dos y cuarto."] },
      { "en": "quarter to", "es": "cuarto para", "imagen": "Reloj marcando un cuarto para las seis", "ejemplo": ["It's quarter to six.", "Es cuarto para las seis."] },
      { "en": "five past", "es": "y cinco", "imagen": "Reloj marcando las ocho y cinco", "ejemplo": ["It's five past eight.", "Son las ocho y cinco."] },
      { "en": "twenty to", "es": "veinte para", "imagen": "Reloj marcando veinte para las once", "ejemplo": ["It's twenty to eleven.", "Son veinte para las once."] },
      { "en": "noon", "es": "mediodía", "imagen": "Sol en lo alto sobre una ciudad a mediodía", "ejemplo": ["We have lunch at noon.", "Comemos al mediodía."] },
      { "en": "midnight", "es": "medianoche", "imagen": "Reloj de pared a medianoche con la luna en la ventana", "ejemplo": ["The party ends at midnight.", "La fiesta termina a la medianoche."] },
      { "en": "a.m.", "es": "de la mañana (a. m.)", "imagen": "Despertador marcando las 7:00 con el amanecer en la ventana", "ejemplo": ["I get up at 6 a.m.", "Me levanto a las 6 a. m."] },
      { "en": "p.m.", "es": "de la tarde o de la noche (p. m.)", "imagen": "Reloj digital marcando las 9:00 de la noche", "ejemplo": ["The movie starts at 8 p.m.", "La película empieza a las 8 p. m."] },
      { "en": "in the morning", "es": "en la mañana", "imagen": "Persona tomando café al amanecer", "ejemplo": ["I study in the morning.", "Estudio en la mañana."] },
      { "en": "in the afternoon", "es": "en la tarde", "imagen": "Niños jugando en el parque por la tarde", "ejemplo": ["I work in the afternoon.", "Trabajo en la tarde."] },
      { "en": "in the evening", "es": "en la noche (temprano)", "imagen": "Familia cenando al atardecer", "ejemplo": ["We watch TV in the evening.", "Vemos la tele en la noche."] },
      { "en": "at night", "es": "en la noche", "imagen": "Ciudad iluminada de noche", "ejemplo": ["I sleep eight hours at night.", "Duermo ocho horas en la noche."] },
      { "en": "a clock", "es": "un reloj (de pared)", "imagen": "Reloj", "ejemplo": ["The clock is on the wall.", "El reloj está en la pared."] },
      { "en": "an alarm clock", "es": "un despertador", "imagen": "Despertador", "ejemplo": ["My alarm clock rings at half past six.", "Mi despertador suena a las seis y media."] }
    ],
    "grupos": [
      {
        "id": "calendario",
        "titulo": "El calendario",
        "icono": "📅",
        "patron": ["Today is Monday.", "There are seven days in a week.", "What's the date today?"],
        "palabras": [
          { "en": "a calendar", "es": "un calendario", "imagen": "Calendario de pared con días marcados", "ejemplo": ["There's a calendar on the wall.", "Hay un calendario en la pared."] },
          { "en": "a week", "es": "una semana", "imagen": "Calendario con una semana completa marcada en rojo", "ejemplo": ["There are seven days in a week.", "Hay siete días en una semana."] },
          { "en": "a weekend", "es": "un fin de semana", "imagen": "Familia de picnic un sábado en el parque", "ejemplo": ["I visit my parents on the weekend.", "Visito a mis papás el fin de semana."] },
          { "en": "a month", "es": "un mes", "imagen": "Hoja de calendario de un mes completo", "ejemplo": ["There are twelve months in a year.", "Hay doce meses en un año."] },
          { "en": "a year", "es": "un año", "imagen": "Fuegos artificiales de Año Nuevo con el número del año", "ejemplo": ["There are 365 days in a year.", "Hay 365 días en un año."] },
          { "en": "today", "es": "hoy", "imagen": "Calendario con el día de hoy rodeado en un círculo", "ejemplo": ["Today is Monday.", "Hoy es lunes."] },
          { "en": "tomorrow", "es": "mañana", "imagen": "Hoja de calendario que se voltea al día siguiente", "ejemplo": ["Tomorrow is my birthday.", "Mañana es mi cumpleaños."] },
          { "en": "yesterday", "es": "ayer", "imagen": "Día del calendario tachado con una equis", "ejemplo": ["Yesterday was Sunday.", "Ayer fue domingo."] },
          { "en": "an hour", "es": "una hora", "imagen": "Reloj de arena con la arena cayendo", "ejemplo": ["The class is one hour long.", "La clase dura una hora."] },
          { "en": "a minute", "es": "un minuto", "imagen": "Cronómetro marcando un minuto", "ejemplo": ["Wait a minute, please.", "Espera un minuto, por favor."] },
          { "en": "a schedule", "es": "un horario", "imagen": "Horario escolar en la pared con materias: Matemáticas, Inglés, Ciencias, Historia y Arte", "ejemplo": ["What's your schedule today?", "¿Cuál es tu horario hoy?"] },
          { "en": "a date", "es": "una fecha", "imagen": "Fecha en un calendario rodeada con plumón rojo", "ejemplo": ["What's the date today?", "¿Qué fecha es hoy?"] },
          { "en": "a holiday", "es": "un día festivo", "imagen": "Familia celebrando un día festivo con banderitas", "ejemplo": ["Monday is a holiday.", "El lunes es día festivo."] }
        ]
      },
      {
        "id": "fechas",
        "titulo": "Fechas importantes",
        "icono": "🎉",
        "patron": ["My birthday is on May 3rd.", "Christmas is in December.", "When is your birthday?"],
        "palabras": [
          { "en": "a birthday", "es": "un cumpleaños", "imagen": "Cumpleaños", "ejemplo": ["My birthday is on April 21st.", "Mi cumpleaños es el 21 de abril."] },
          { "en": "an anniversary", "es": "un aniversario", "imagen": "Aniversario", "ejemplo": ["Our anniversary is in July.", "Nuestro aniversario es en julio."] },
          { "en": "a wedding", "es": "una boda", "imagen": "Boda", "ejemplo": ["The wedding is on June 10th.", "La boda es el 10 de junio."] },
          { "en": "New Year's Day", "es": "el Año Nuevo", "imagen": "Brindis con fuegos artificiales de Año Nuevo", "ejemplo": ["New Year's Day is on January 1st.", "El Año Nuevo es el 1 de enero."] },
          { "en": "Valentine's Day", "es": "el Día de San Valentín", "imagen": "Corazones rojos y un ramo de rosas", "ejemplo": ["Valentine's Day is on February 14th.", "El Día de San Valentín es el 14 de febrero."] },
          { "en": "Mother's Day", "es": "el Día de las Madres", "imagen": "Niño dándole flores a su mamá", "ejemplo": ["Mother's Day is in May.", "El Día de las Madres es en mayo."] },
          { "en": "Father's Day", "es": "el Día del Padre", "imagen": "Niña abrazando a su papá con un regalo", "ejemplo": ["Father's Day is in June.", "El Día del Padre es en junio."] },
          { "en": "Easter", "es": "la Pascua", "imagen": "Huevos de Pascua de colores en una canasta", "ejemplo": ["Easter is in March or April.", "La Pascua es en marzo o abril."] },
          { "en": "Independence Day", "es": "el Día de la Independencia", "imagen": "Desfile con banderas y fuegos artificiales", "ejemplo": ["Independence Day in Mexico is on September 16th.", "El Día de la Independencia en México es el 16 de septiembre."] },
          { "en": "Halloween", "es": "Halloween", "imagen": "Calabazas con caras y niños disfrazados", "ejemplo": ["Halloween is on October 31st.", "Halloween es el 31 de octubre."] },
          { "en": "Thanksgiving", "es": "el Día de Acción de Gracias", "imagen": "Familia alrededor de una mesa con un pavo", "ejemplo": ["Thanksgiving is in November.", "El Día de Acción de Gracias es en noviembre."] },
          { "en": "Christmas", "es": "la Navidad", "imagen": "Árbol de Navidad con regalos", "ejemplo": ["Christmas is on December 25th.", "La Navidad es el 25 de diciembre."] }
        ]
      },
      {
        "id": "numeros",
        "titulo": "Números en la vida diaria",
        "icono": "🔢",
        "patron": ["My phone number is 555 0134.", "It's 45 dollars.", "I'm 34 years old."],
        "palabras": [
          { "en": "phone number", "es": "número de teléfono", "imagen": "Número de teléfono", "ejemplo": ["My phone number is 555 0134.", "Mi número de teléfono es 555 0134."] },
          { "en": "address", "es": "dirección", "imagen": "Dirección", "ejemplo": ["My address is 25 Oak Street.", "Mi dirección es calle Oak número 25."] },
          { "en": "age", "es": "edad", "imagen": "Edad", "ejemplo": ["What's your age? I'm 28.", "¿Qué edad tienes? Tengo 28."] },
          { "en": "years old", "es": "años (de edad)", "imagen": "Años de edad", "ejemplo": ["My grandmother is 82 years old.", "Mi abuela tiene 82 años."] },
          { "en": "a price", "es": "un precio", "imagen": "Precio", "ejemplo": ["The price is 45 dollars.", "El precio es de 45 dólares."] },
          { "en": "money", "es": "dinero", "imagen": "Dinero", "ejemplo": ["I have 200 pesos in my wallet.", "Tengo 200 pesos en mi cartera."] },
          { "en": "a receipt", "es": "un recibo", "imagen": "Recibo", "ejemplo": ["The total on the receipt is 18 dollars.", "El total en el recibo es de 18 dólares."] },
          { "en": "time", "es": "tiempo, hora", "imagen": "Tiempo", "ejemplo": ["We have time. The bus is at 3:15.", "Tenemos tiempo. El autobús es a las 3:15."] }
        ]
      }
    ],
    "ejemplos": [
      { "en": "What time is it? It's nine o'clock.", "es": "¿Qué hora es? Son las nueve." },
      { "en": "It's half past seven.", "es": "Son las siete y media." },
      { "en": "The class starts at quarter past eight.", "es": "La clase empieza a las ocho y cuarto." },
      { "en": "The bank closes at 5 p.m.", "es": "El banco cierra a las 5 p. m." },
      { "en": "What's the date today? It's May 3rd.", "es": "¿Qué fecha es hoy? Es 3 de mayo." },
      { "en": "When is your birthday? It's on April 21st.", "es": "¿Cuándo es tu cumpleaños? Es el 21 de abril." },
      { "en": "I was born in 1995.", "es": "Nací en 1995." },
      { "en": "Christmas is on December 25th.", "es": "La Navidad es el 25 de diciembre." },
      { "en": "The movie starts at seven thirty in the evening.", "es": "La película empieza a las siete y media de la noche." },
      { "en": "My phone number is 555 0187.", "es": "Mi número de teléfono es 555 0187." }
    ],
    "frases": [
      { "en": "I get up at six o'clock in the morning and go to work at seven.", "es": "Me levanto a las seis de la mañana y me voy a trabajar a las siete." },
      { "en": "The store opens at nine a.m. and closes at eight p.m.", "es": "La tienda abre a las nueve a. m. y cierra a las ocho p. m." },
      { "en": "My English class is on Mondays and Wednesdays from six to eight.", "es": "Mi clase de inglés es los lunes y miércoles de seis a ocho." },
      { "en": "My mother's birthday is on the fifth of June.", "es": "El cumpleaños de mi mamá es el 5 de junio." },
      { "en": "We have a big family dinner on Christmas Eve.", "es": "Tenemos una gran cena familiar en Nochebuena." },
      { "en": "The train leaves at quarter to ten, so we have twenty minutes.", "es": "El tren sale a las diez menos cuarto, así que tenemos veinte minutos." },
      { "en": "Today is Friday, the thirteenth of October.", "es": "Hoy es viernes 13 de octubre." },
      { "en": "There are thirty days in September, April, June and November.", "es": "Septiembre, abril, junio y noviembre tienen treinta días." },
      { "en": "Halloween is on October 31st and the children love it.", "es": "Halloween es el 31 de octubre y a los niños les encanta." },
      { "en": "It's midnight and my brother is still awake.", "es": "Es medianoche y mi hermano sigue despierto." }
    ],
    "listening": [
      { "audio": "What time is it? It's half past three.", "pregunta": "¿Qué hora es?", "opciones": ["3:30", "3:15", "2:30", "3:45"] },
      { "audio": "It's quarter to nine.", "pregunta": "¿Qué hora es?", "opciones": ["8:45", "9:15", "9:45", "8:15"] },
      { "audio": "My birthday is on July 4th.", "pregunta": "¿Cuándo es su cumpleaños?", "opciones": ["4 de julio", "14 de julio", "4 de junio", "24 de julio"] },
      { "audio": "The bank opens at nine a.m. and closes at four p.m.", "pregunta": "¿A qué hora cierra el banco?", "opciones": ["A las 4 de la tarde", "A las 9 de la mañana", "A las 4 de la mañana", "A las 9 de la noche"] },
      { "audio": "I was born in nineteen ninety-eight.", "pregunta": "¿En qué año nació?", "opciones": ["1998", "1988", "1989", "2008"] }
    ],
    "lectura": {
      "titulo": "My busy Monday",
      "texto": "My name is Laura. On Mondays my alarm clock rings at six a.m. I have breakfast at half past six and I take the bus at quarter past seven. I work from eight to four. I have lunch at noon with my coworkers. In the evening, at seven o'clock, I have an English class. Today is special: it's March 10th, my birthday! My family has a party for me at nine p.m.",
      "preguntas": [
        { "pregunta": "¿A qué hora suena su despertador?", "opciones": ["A las 6 a. m.", "A las 6:30", "A las 7:15", "A las 8 a. m."] },
        { "pregunta": "¿A qué hora come con sus compañeros?", "opciones": ["Al mediodía", "A las 4", "A las 8", "A las 7"] },
        { "pregunta": "¿Cuándo es su cumpleaños?", "opciones": ["El 10 de marzo", "El 10 de mayo", "El 3 de octubre", "El 7 de marzo"] },
        { "pregunta": "¿A qué hora es su clase de inglés?", "opciones": ["A las 7 de la noche", "A las 9 de la noche", "A las 8 de la mañana", "Al mediodía"] }
      ]
    },
    "escritura": [
      { "instruccion": "Escribe la hora en inglés.", "pregunta": "3:00", "respuestas": ["It's three o'clock", "It is three o'clock", "It's three"] },
      { "instruccion": "Escribe la hora en inglés.", "pregunta": "4:30", "respuestas": ["It's half past four", "It is half past four", "It's four thirty", "It is four thirty"] },
      { "instruccion": "Escribe la hora en inglés.", "pregunta": "2:15", "respuestas": ["It's quarter past two", "It is quarter past two", "It's a quarter past two", "It's two fifteen", "It is two fifteen"] },
      { "instruccion": "Escribe la hora en inglés.", "pregunta": "5:45", "respuestas": ["It's quarter to six", "It is quarter to six", "It's a quarter to six", "It's five forty-five", "It is five forty-five"] },
      { "instruccion": "Haz la pregunta.", "pregunta": "¿Qué hora es?", "respuestas": ["What time is it"] },
      { "instruccion": "Haz la pregunta.", "pregunta": "¿Qué fecha es hoy?", "respuestas": ["What's the date today", "What is the date today"] },
      { "instruccion": "Escribe el año en palabras.", "pregunta": "1990", "respuestas": ["nineteen ninety"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "Mi cumpleaños es en mayo.", "respuestas": ["My birthday is in May"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "La clase es a las nueve.", "respuestas": ["The class is at nine", "The class is at nine o'clock", "The class is at 9"] },
      { "instruccion": "Corrige la oración.", "pregunta": "It's quarter for six.", "respuestas": ["It's quarter to six", "It is quarter to six", "It's a quarter to six"] }
    ],
    "examen": [
      { "tipo": "opcion", "pregunta": "What ___ is it? It's ten o'clock.", "opciones": ["time", "hour", "clock", "date"] },
      { "tipo": "opcion", "pregunta": "7:30 = It's half ___ seven.", "opciones": ["past", "to", "for", "and"] },
      { "tipo": "opcion", "pregunta": "8:45 = It's quarter ___ nine.", "opciones": ["to", "past", "for", "at"] },
      { "tipo": "opcion", "pregunta": "The class is ___ nine o'clock.", "opciones": ["at", "in", "on", "for"] },
      { "tipo": "opcion", "pregunta": "My birthday is on May ___.", "opciones": ["third", "three", "the three", "thirdth"] },
      { "tipo": "opcion", "pregunta": "1985 se dice:", "opciones": ["nineteen eighty-five", "one thousand eighty-five", "nineteen eight five", "one nine eight five"] },
      { "tipo": "listening", "audio": "The movie starts at twenty past eight.", "pregunta": "¿A qué hora empieza la película?", "opciones": ["8:20", "7:40", "8:40", "2:08"] },
      { "tipo": "listening", "audio": "Today is Tuesday, the second of November.", "pregunta": "¿Qué fecha es hoy?", "opciones": ["Martes 2 de noviembre", "Jueves 2 de noviembre", "Martes 12 de noviembre", "Martes 2 de diciembre"] },
      { "tipo": "escribir", "pregunta": "Escribe la hora en inglés: 6:30", "respuestas": ["It's half past six", "It is half past six", "It's six thirty", "It is six thirty"] },
      { "tipo": "escribir", "pregunta": "Traduce: Mañana es mi cumpleaños.", "respuestas": ["Tomorrow is my birthday", "Tomorrow's my birthday"] }
    ]
  },
  {
    "id": "a1-13",
    "num": 13,
    "titulo": "Preposiciones de tiempo (in, on, at)",
    "contexto": "Citas y fechas importantes",
    "explicacion": {
      "es": [
        "En español casi siempre decimos «a las», «el» o «en». En inglés hay tres preposiciones de tiempo: **at**, **on** e **in**.",
        "**AT** va con la **hora exacta** y con algunos momentos: *at seven o'clock, at noon, at night, at Christmas*.",
        "**ON** va con los **días y las fechas**: *on Monday, on May 5th, on my birthday, on the weekend*.",
        "**IN** va con periodos más largos: **meses, años, estaciones** y **partes del día**: *in July, in 2027, in summer, in the morning*."
      ],
      "tabla": { "columnas": ["Preposición", "Se usa con", "Ejemplos"], "filas": [["at", "la hora y algunos momentos", "at 7:00, at noon, at night, at Christmas"], ["on", "días y fechas", "on Monday, on May 5th, on my birthday"], ["in", "meses, años, estaciones y partes del día", "in July, in 2027, in summer, in the morning"], ["(nada)", "today, tomorrow, this, next, last, every", "See you next Monday. I study every day."]] },
      "ojo": [
        "Se dice *in the morning*, *in the afternoon* y *in the evening*, pero ***at** night*.",
        "Con un día más una parte del día se usa **on**: *on Monday morning, on Friday night*.",
        "Con *today, tomorrow, yesterday, this, next, last* y *every* no va preposición: *See you next Monday* (no *on next Monday*).",
        "Con fecha completa va **on**: *on May 5th*; con el mes solo va **in**: *in May*.",
        "*In five minutes* es «dentro de cinco minutos»: *The bus arrives in five minutes.*"
      ],
      "en": [
        "Use at with clock times: at seven o'clock, at noon, at night.",
        "Use on with days and dates: on Monday, on May 5th.",
        "Use in with months, years, seasons and parts of the day: in July, in 2027, in summer, in the morning.",
        "No preposition with next, last, this, every: See you next week."
      ]
    },
    "vocabulario": [
      { "en": "an appointment", "es": "una cita", "imagen": "Cita", "ejemplo": ["I have an appointment at four o'clock.", "Tengo una cita a las cuatro."] },
      { "en": "a doctor's appointment", "es": "una cita con el doctor", "imagen": "Paciente con el doctor", "ejemplo": ["My doctor's appointment is on Tuesday.", "Mi cita con el doctor es el martes."] },
      { "en": "a dentist appointment", "es": "una cita con el dentista", "imagen": "Paciente con el dentista", "ejemplo": ["My dentist appointment is at 10 a.m.", "Mi cita con el dentista es a las 10 a. m."] },
      { "en": "a meeting", "es": "una junta, una reunión", "imagen": "Junta", "ejemplo": ["The meeting is on Monday morning.", "La junta es el lunes en la mañana."] },
      { "en": "a job interview", "es": "una entrevista de trabajo", "imagen": "Persona en una entrevista de trabajo frente a dos entrevistadores", "ejemplo": ["My job interview is at nine.", "Mi entrevista de trabajo es a las nueve."] },
      { "en": "a class", "es": "una clase", "imagen": "Clases", "ejemplo": ["My English class is in the evening.", "Mi clase de inglés es en la noche."] },
      { "en": "an exam", "es": "un examen", "imagen": "Examen", "ejemplo": ["The exam is on Friday.", "El examen es el viernes."] },
      { "en": "a party", "es": "una fiesta", "imagen": "Fiesta", "ejemplo": ["The party is on Saturday night.", "La fiesta es el sábado en la noche."] },
      { "en": "a concert", "es": "un concierto", "imagen": "Público con las manos arriba en un concierto con luces", "ejemplo": ["The concert is at 8 p.m.", "El concierto es a las 8 p. m."] },
      { "en": "a flight", "es": "un vuelo", "imagen": "Avión despegando de la pista", "ejemplo": ["Our flight is at 6 a.m.", "Nuestro vuelo es a las 6 a. m."] },
      { "en": "a reservation", "es": "una reservación", "imagen": "Mesero llevando a una pareja a su mesa reservada en un restaurante", "ejemplo": ["We have a reservation at seven.", "Tenemos una reservación a las siete."] },
      { "en": "a soccer game", "es": "un partido de fútbol", "imagen": "Niños jugando un partido de fútbol en una cancha", "ejemplo": ["The soccer game is on Sunday.", "El partido de fútbol es el domingo."] },
      { "en": "a wedding", "es": "una boda", "imagen": "Boda", "ejemplo": ["The wedding is in June.", "La boda es en junio."] },
      { "en": "a deadline", "es": "una fecha límite", "imagen": "Calendario con un día marcado en rojo y un reloj al lado", "ejemplo": ["The deadline is on Friday at noon.", "La fecha límite es el viernes al mediodía."] },
      { "en": "a vacation", "es": "unas vacaciones", "imagen": "Familia con maletas llegando a la playa", "ejemplo": ["Our vacation is in August.", "Nuestras vacaciones son en agosto."] },
      { "en": "a haircut", "es": "un corte de pelo", "imagen": "Corte de pelo", "ejemplo": ["My haircut is at half past three.", "Mi corte de pelo es a las tres y media."] }
    ],
    "grupos": [
      {
        "id": "at",
        "titulo": "AT: la hora y momentos",
        "icono": "⏰",
        "patron": ["at seven o'clock", "at noon", "at night"],
        "palabras": [
          { "en": "at seven o'clock", "es": "a las siete", "imagen": "Reloj a las siete", "ejemplo": ["I get up at seven o'clock.", "Me levanto a las siete."] },
          { "en": "at half past three", "es": "a las tres y media", "imagen": "Reloj a las tres y media", "ejemplo": ["The class starts at half past three.", "La clase empieza a las tres y media."] },
          { "en": "at noon", "es": "al mediodía", "imagen": "Mediodía", "ejemplo": ["We have lunch at noon.", "Comemos al mediodía."] },
          { "en": "at midnight", "es": "a medianoche", "imagen": "Medianoche", "ejemplo": ["The party ends at midnight.", "La fiesta termina a medianoche."] },
          { "en": "at night", "es": "en la noche", "imagen": "Noche", "ejemplo": ["I read at night.", "Leo en la noche."] },
          { "en": "at lunchtime", "es": "a la hora de la comida", "imagen": "Compañeros de trabajo comiendo juntos a la hora de la comida", "ejemplo": ["We meet at lunchtime.", "Nos vemos a la hora de la comida."] },
          { "en": "at the moment", "es": "en este momento", "imagen": "Persona ocupada hablando por teléfono frente a su computadora", "ejemplo": ["I'm busy at the moment.", "Estoy ocupado en este momento."] },
          { "en": "at sunset", "es": "al atardecer", "imagen": "Pareja mirando el atardecer en la playa", "ejemplo": ["We walk on the beach at sunset.", "Caminamos en la playa al atardecer."] },
          { "en": "at Christmas", "es": "en Navidad", "imagen": "Navidad", "ejemplo": ["We visit my grandparents at Christmas.", "Visitamos a mis abuelos en Navidad."] }
        ]
      },
      {
        "id": "on",
        "titulo": "ON: días y fechas",
        "icono": "📅",
        "patron": ["on Monday", "on May 5th", "on my birthday"],
        "palabras": [
          { "en": "on Monday", "es": "el lunes", "imagen": "Lunes", "ejemplo": ["I have English on Monday.", "Tengo inglés el lunes."] },
          { "en": "on Friday night", "es": "el viernes en la noche", "imagen": "Viernes", "ejemplo": ["We go out on Friday night.", "Salimos el viernes en la noche."] },
          { "en": "on Sunday morning", "es": "el domingo en la mañana", "imagen": "Domingo", "ejemplo": ["We have breakfast together on Sunday morning.", "Desayunamos juntos el domingo en la mañana."] },
          { "en": "on the weekend", "es": "el fin de semana", "imagen": "Fin de semana", "ejemplo": ["I see my friends on the weekend.", "Veo a mis amigos el fin de semana."] },
          { "en": "on weekdays", "es": "entre semana", "imagen": "Gente caminando al trabajo un lunes en la mañana", "ejemplo": ["I work on weekdays.", "Trabajo entre semana."] },
          { "en": "on May 5th", "es": "el 5 de mayo", "imagen": "Fecha", "ejemplo": ["My appointment is on May 5th.", "Mi cita es el 5 de mayo."] },
          { "en": "on my birthday", "es": "en mi cumpleaños", "imagen": "Cumpleaños", "ejemplo": ["I eat cake on my birthday.", "Como pastel en mi cumpleaños."] },
          { "en": "on Valentine's Day", "es": "el Día de San Valentín", "imagen": "San Valentín", "ejemplo": ["He gives her flowers on Valentine's Day.", "Él le da flores el Día de San Valentín."] },
          { "en": "on New Year's Day", "es": "el día de Año Nuevo", "imagen": "Año Nuevo", "ejemplo": ["The stores are closed on New Year's Day.", "Las tiendas están cerradas el día de Año Nuevo."] }
        ]
      },
      {
        "id": "in",
        "titulo": "IN: meses, años y estaciones",
        "icono": "🗓️",
        "patron": ["in July", "in summer", "in 2026"],
        "palabras": [
          { "en": "in July", "es": "en julio", "imagen": "Julio", "ejemplo": ["My vacation is in July.", "Mis vacaciones son en julio."] },
          { "en": "in December", "es": "en diciembre", "imagen": "Diciembre", "ejemplo": ["It's cold in December.", "Hace frío en diciembre."] },
          { "en": "in summer", "es": "en verano", "imagen": "Verano", "ejemplo": ["We go to the beach in summer.", "Vamos a la playa en verano."] },
          { "en": "in winter", "es": "en invierno", "imagen": "Invierno", "ejemplo": ["It snows in winter.", "Nieva en invierno."] },
          { "en": "in 2027", "es": "en 2027", "imagen": "Año", "ejemplo": ["My course ends in 2027.", "Mi curso termina en 2027."] },
          { "en": "in the morning", "es": "en la mañana", "imagen": "Mañana", "ejemplo": ["I drink coffee in the morning.", "Tomo café en la mañana."] },
          { "en": "in the afternoon", "es": "en la tarde", "imagen": "Tarde", "ejemplo": ["The children play in the afternoon.", "Los niños juegan en la tarde."] },
          { "en": "in the evening", "es": "en la noche", "imagen": "Noche temprano", "ejemplo": ["We have dinner in the evening.", "Cenamos en la noche."] },
          { "en": "in the 90s", "es": "en los noventa", "imagen": "Casetes, walkman y ropa de colores de los años noventa", "ejemplo": ["My parents met in the 90s.", "Mis papás se conocieron en los noventa."] },
          { "en": "in five minutes", "es": "en cinco minutos", "imagen": "Minuto", "ejemplo": ["The bus arrives in five minutes.", "El autobús llega en cinco minutos."] }
        ]
      }
    ],
    "ejemplos": [
      { "en": "I have a doctor's appointment at 10 a.m.", "es": "Tengo cita con el doctor a las 10 a. m." },
      { "en": "The meeting is on Monday.", "es": "La junta es el lunes." },
      { "en": "My birthday is in March.", "es": "Mi cumpleaños es en marzo." },
      { "en": "We go to the beach in summer.", "es": "Vamos a la playa en verano." },
      { "en": "The movie starts at eight o'clock.", "es": "La película empieza a las ocho." },
      { "en": "I don't work on Sundays.", "es": "No trabajo los domingos." },
      { "en": "The party is on Saturday night.", "es": "La fiesta es el sábado en la noche." },
      { "en": "I study in the evening.", "es": "Estudio en la noche." },
      { "en": "Our flight is at 6 a.m. on Friday.", "es": "Nuestro vuelo es el viernes a las 6 a. m." },
      { "en": "Christmas is in December.", "es": "La Navidad es en diciembre." }
    ],
    "frases": [
      { "en": "My job interview is on Thursday at half past nine in the morning.", "es": "Mi entrevista de trabajo es el jueves a las nueve y media de la mañana." },
      { "en": "We always visit my grandparents at Christmas and in summer.", "es": "Siempre visitamos a mis abuelos en Navidad y en verano." },
      { "en": "The concert is on Saturday, May 20th, at eight p.m.", "es": "El concierto es el sábado 20 de mayo a las ocho p. m." },
      { "en": "I'm busy at the moment. Can I call you in five minutes?", "es": "Estoy ocupado en este momento. ¿Te llamo en cinco minutos?" },
      { "en": "The dentist appointment is at four o'clock on Wednesday.", "es": "La cita con el dentista es el miércoles a las cuatro." },
      { "en": "My parents got married in 1995, on a sunny day in June.", "es": "Mis papás se casaron en 1995, un día soleado de junio." },
      { "en": "We have breakfast together on Sunday mornings.", "es": "Desayunamos juntos los domingos en la mañana." },
      { "en": "The deadline for the project is on Friday at noon.", "es": "La fecha límite del proyecto es el viernes al mediodía." },
      { "en": "Our vacation is in August, and we fly on the 3rd.", "es": "Nuestras vacaciones son en agosto y volamos el día 3." },
      { "en": "The bank is closed on holidays and at night.", "es": "El banco está cerrado los días festivos y en la noche." }
    ],
    "listening": [
      { "audio": "My dentist appointment is on Tuesday at three o'clock.", "pregunta": "¿Cuándo es la cita con el dentista?", "opciones": ["El martes a las 3", "El jueves a las 3", "El martes a las 2", "El martes a las 13"] },
      { "audio": "The concert is in July.", "pregunta": "¿Cuándo es el concierto?", "opciones": ["En julio", "En junio", "El lunes", "A las siete"] },
      { "audio": "We have a meeting at noon.", "pregunta": "¿A qué hora es la junta?", "opciones": ["Al mediodía", "A medianoche", "En la mañana", "En la noche"] },
      { "audio": "My birthday is on October 2nd.", "pregunta": "¿Cuándo es su cumpleaños?", "opciones": ["El 2 de octubre", "El 12 de octubre", "El 2 de diciembre", "El 22 de octubre"] },
      { "audio": "I can't talk now. I'm at work. Call me in the evening.", "pregunta": "¿Cuándo quiere que le llamen?", "opciones": ["En la noche", "Ahora", "En la mañana", "Al mediodía"] }
    ],
    "lectura": {
      "titulo": "My busy week",
      "texto": "This week is very busy for me. On Monday I have a job interview at nine in the morning. On Tuesday I have English class in the evening. My doctor's appointment is on Wednesday at half past four. On Friday night there's a concert in the park, and I have tickets! On Saturday I have a haircut at eleven. And on Sunday? On Sunday I sleep late. My vacation is in August, and I can't wait!",
      "preguntas": [
        { "pregunta": "¿Cuándo es la entrevista de trabajo?", "opciones": ["El lunes a las 9 a. m.", "El martes en la noche", "El miércoles a las 4:30", "El sábado a las 11"] },
        { "pregunta": "¿Cuándo es la cita con el doctor?", "opciones": ["El miércoles a las 4:30", "El lunes a las 9", "El viernes en la noche", "El domingo"] },
        { "pregunta": "¿Qué hace el viernes en la noche?", "opciones": ["Va a un concierto", "Tiene clase de inglés", "Se corta el pelo", "Duerme hasta tarde"] },
        { "pregunta": "¿Cuándo son sus vacaciones?", "opciones": ["En agosto", "En julio", "El domingo", "En diciembre"] }
      ]
    },
    "escritura": [
      { "instruccion": "Completa con in, on o at.", "pregunta": "The class is ___ seven o'clock.", "respuestas": ["at"] },
      { "instruccion": "Completa con in, on o at.", "pregunta": "My birthday is ___ June.", "respuestas": ["in"] },
      { "instruccion": "Completa con in, on o at.", "pregunta": "The meeting is ___ Monday.", "respuestas": ["on"] },
      { "instruccion": "Completa con in, on o at.", "pregunta": "I drink coffee ___ the morning.", "respuestas": ["in"] },
      { "instruccion": "Completa con in, on o at.", "pregunta": "I sleep ___ night.", "respuestas": ["at"] },
      { "instruccion": "Completa con in, on o at.", "pregunta": "The concert is ___ May 20th.", "respuestas": ["on"] },
      { "instruccion": "Completa con in, on o at.", "pregunta": "It snows ___ winter.", "respuestas": ["in"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "Mi cita es el viernes.", "respuestas": ["My appointment is on Friday"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "La fiesta es a las nueve.", "respuestas": ["The party is at nine", "The party is at nine o'clock", "The party is at 9"] },
      { "instruccion": "Corrige la oración.", "pregunta": "See you on next Monday.", "respuestas": ["See you next Monday"] }
    ],
    "examen": [
      { "tipo": "opcion", "pregunta": "The movie starts ___ eight o'clock.", "opciones": ["at", "on", "in", "to"] },
      { "tipo": "opcion", "pregunta": "My birthday is ___ April.", "opciones": ["in", "on", "at", "to"] },
      { "tipo": "opcion", "pregunta": "We don't work ___ Sundays.", "opciones": ["on", "in", "at", "for"] },
      { "tipo": "opcion", "pregunta": "I study ___ night.", "opciones": ["at", "in", "on", "the"] },
      { "tipo": "opcion", "pregunta": "The wedding is ___ June 12th.", "opciones": ["on", "in", "at", "of"] },
      { "tipo": "opcion", "pregunta": "See you ___ week.", "opciones": ["next", "on next", "in next", "at next"] },
      { "tipo": "listening", "audio": "Our flight is on Friday at six in the morning.", "pregunta": "¿Cuándo es el vuelo?", "opciones": ["El viernes a las 6 a. m.", "El viernes a las 6 p. m.", "El sábado a las 6 a. m.", "El lunes a las 6 a. m."] },
      { "tipo": "listening", "audio": "The store is closed on New Year's Day.", "pregunta": "¿Cuándo está cerrada la tienda?", "opciones": ["El día de Año Nuevo", "En Navidad", "Los domingos", "En la noche"] },
      { "tipo": "escribir", "pregunta": "Traduce: Tengo una cita a las cuatro.", "respuestas": ["I have an appointment at four", "I have an appointment at four o'clock", "I have an appointment at 4"] },
      { "tipo": "escribir", "pregunta": "Traduce: Vamos a la playa en verano.", "respuestas": ["We go to the beach in summer", "We go to the beach in the summer"] }
    ]
  },
  {
    "id": "a1-14",
    "num": 14,
    "titulo": "Presente simple: afirmativo",
    "contexto": "La rutina diaria",
    "explicacion": {
      "es": [
        "El **presente simple** sirve para hablar de **rutinas, hábitos y cosas que siempre son verdad**: *I get up at seven. She works in a bank.*",
        "Con **I, you, we, they** el verbo va **igual que en el diccionario**: *I work, you work, we work, they work*.",
        "Con **he, she, it** (una persona o cosa) el verbo lleva **-s** al final: *he works, she lives, it opens*.",
        "Algunos verbos cambian un poco: con **-sh, -ch, -x, -ss, -o** se pone **-es** (*watches, washes, goes, does*); si terminan en consonante + **y**, la **y** cambia a **-ies** (*study → studies*). Y **have** cambia a **has**."
      ],
      "tabla": { "columnas": ["Sujeto", "Verbo", "Ejemplo"], "filas": [["I, you, we, they", "verbo normal", "I work. They live in Lima."], ["he, she, it", "verbo + s", "She works. He lives in Lima."], ["he, she, it (-sh, -ch, -x, -ss, -o)", "verbo + es", "He watches TV. She goes to school."], ["he, she, it (consonante + y)", "-y → -ies", "He studies. She tries."], ["he, she, it + have", "has", "She has breakfast at seven."]] },
      "ojo": [
        "No olvides la **-s** con he, she, it: *He work* ❌ → *He works* ✅.",
        "*Have* con he, she, it es **has**: *She has a car*, no *She haves*.",
        "Si antes de la *y* hay vocal, solo se agrega -s: *play → plays*, *buy → buys*.",
        "*My mother, the teacher, Ana* = **she**; *my dad, Tom* = **he**: también llevan -s: *My mother works.*",
        "La -s se pronuncia de tres formas: /s/ en *works*, /z/ en *plays* y /iz/ en *watches*.",
        "Palabras útiles: *every day, every morning, on Mondays, at night, after work, before breakfast*."
      ],
      "en": [
        "Use the present simple for routines and habits: I get up at seven.",
        "With I, you, we and they, use the base verb: I work, they live.",
        "With he, she and it, add -s: he works, she lives.",
        "Add -es after sh, ch, x, ss and o: watches, goes. Consonant plus y changes to ies: studies. Have changes to has."
      ]
    },
    "vocabulario": [
      { "en": "wake up", "es": "despertarse", "imagen": "Persona despertando en la cama y estirando los brazos con el sol en la ventana", "ejemplo": ["I wake up at six.", "Me despierto a las seis."] },
      { "en": "get up", "es": "levantarse", "imagen": "Persona levantándose de la cama y poniéndose las pantuflas", "ejemplo": ["She gets up at seven.", "Ella se levanta a las siete."] },
      { "en": "take a shower", "es": "bañarse (en regadera)", "imagen": "Persona bañándose en la regadera", "ejemplo": ["He takes a shower every morning.", "Él se baña todas las mañanas."] },
      { "en": "brush your teeth", "es": "lavarse los dientes", "imagen": "Niña lavándose los dientes frente al espejo", "ejemplo": ["I brush my teeth after breakfast.", "Me lavo los dientes después del desayuno."] },
      { "en": "get dressed", "es": "vestirse", "imagen": "Hombre vistiéndose, abotonándose la camisa frente al clóset", "ejemplo": ["He gets dressed for work.", "Él se viste para el trabajo."] },
      { "en": "have breakfast", "es": "desayunar", "imagen": "Familia desayunando en la mesa de la cocina", "ejemplo": ["We have breakfast at half past seven.", "Desayunamos a las siete y media."] },
      { "en": "go to work", "es": "ir al trabajo", "imagen": "Mujer con portafolio caminando hacia una oficina en la mañana", "ejemplo": ["My mother goes to work at eight.", "Mi mamá va al trabajo a las ocho."] },
      { "en": "go to school", "es": "ir a la escuela", "imagen": "Niños con mochila entrando a la escuela", "ejemplo": ["The kids go to school at eight.", "Los niños van a la escuela a las ocho."] },
      { "en": "start work", "es": "empezar a trabajar", "imagen": "Mujer llegando a su escritorio y encendiendo la computadora", "ejemplo": ["She starts work at nine.", "Ella empieza a trabajar a las nueve."] },
      { "en": "have lunch", "es": "comer (al mediodía)", "imagen": "Compañeros comiendo juntos", "ejemplo": ["We have lunch at two.", "Comemos a las dos."] },
      { "en": "finish work", "es": "terminar de trabajar", "imagen": "Hombre apagando su computadora y saliendo de la oficina en la tarde", "ejemplo": ["He finishes work at five.", "Él termina de trabajar a las cinco."] },
      { "en": "go home", "es": "regresar a casa", "imagen": "Persona abriendo la puerta de su casa al regresar en la tarde", "ejemplo": ["I go home at six.", "Regreso a casa a las seis."] },
      { "en": "cook dinner", "es": "preparar la cena", "imagen": "Hombre cocinando la cena en la estufa", "ejemplo": ["My dad cooks dinner every day.", "Mi papá prepara la cena todos los días."] },
      { "en": "have dinner", "es": "cenar", "imagen": "Familia cenando", "ejemplo": ["We have dinner at eight.", "Cenamos a las ocho."] },
      { "en": "watch TV", "es": "ver la tele", "imagen": "Familia viendo la televisión en el sofá", "ejemplo": ["They watch TV after dinner.", "Ellos ven la tele después de cenar."] },
      { "en": "go to bed", "es": "irse a dormir", "imagen": "Persona apagando la lámpara del buró para dormir", "ejemplo": ["I go to bed at eleven.", "Me voy a dormir a las once."] }
    ],
    "grupos": [
      {
        "id": "manana",
        "titulo": "Por la mañana",
        "icono": "☀️",
        "patron": ["I wash my face", "She makes the bed", "He catches the bus"],
        "palabras": [
          { "en": "wash your face", "es": "lavarse la cara", "imagen": "Persona lavándose la cara en el lavabo", "ejemplo": ["I wash my face with cold water.", "Me lavo la cara con agua fría."] },
          { "en": "comb your hair", "es": "peinarse", "imagen": "Niño peinándose frente al espejo", "ejemplo": ["He combs his hair before school.", "Él se peina antes de la escuela."] },
          { "en": "shave", "es": "rasurarse", "imagen": "Hombre rasurándose con espuma frente al espejo", "ejemplo": ["My dad shaves every morning.", "Mi papá se rasura todas las mañanas."] },
          { "en": "put on makeup", "es": "maquillarse", "imagen": "Mujer maquillándose frente al espejo", "ejemplo": ["She puts on makeup in the morning.", "Ella se maquilla en la mañana."] },
          { "en": "make the bed", "es": "tender la cama", "imagen": "Persona tendiendo la cama con una almohada en la mano", "ejemplo": ["I make my bed every day.", "Tiendo mi cama todos los días."] },
          { "en": "drink coffee", "es": "tomar café", "imagen": "Persona tomando una taza de café junto a la ventana en la mañana", "ejemplo": ["My mom drinks coffee at seven.", "Mi mamá toma café a las siete."] },
          { "en": "read the news", "es": "leer las noticias", "imagen": "Hombre leyendo las noticias en su celular con una taza de café", "ejemplo": ["He reads the news on his phone.", "Él lee las noticias en su celular."] },
          { "en": "catch the bus", "es": "tomar el autobús", "imagen": "Gente subiendo a un autobús en la parada", "ejemplo": ["I catch the bus at a quarter past seven.", "Tomo el autobús a las siete y cuarto."] },
          { "en": "take the kids to school", "es": "llevar a los niños a la escuela", "imagen": "Mamá llevando de la mano a sus hijos a la escuela", "ejemplo": ["She takes the kids to school.", "Ella lleva a los niños a la escuela."] },
          { "en": "walk the dog", "es": "pasear al perro", "imagen": "Persona paseando a su perro en el parque en la mañana", "ejemplo": ["My brother walks the dog before breakfast.", "Mi hermano pasea al perro antes del desayuno."] }
        ]
      },
      {
        "id": "tarde",
        "titulo": "Por la tarde y la noche",
        "icono": "🌙",
        "patron": ["I do the dishes", "He goes to the gym", "She reads a book"],
        "palabras": [
          { "en": "do homework", "es": "hacer la tarea", "imagen": "Niño haciendo la tarea en su escritorio", "ejemplo": ["The kids do homework after lunch.", "Los niños hacen la tarea después de comer."] },
          { "en": "do the dishes", "es": "lavar los trastes", "imagen": "Persona lavando los trastes en el fregadero", "ejemplo": ["I do the dishes after dinner.", "Lavo los trastes después de cenar."] },
          { "en": "clean the house", "es": "limpiar la casa", "imagen": "Persona limpiando el piso de la casa con un trapeador", "ejemplo": ["We clean the house on Saturdays.", "Limpiamos la casa los sábados."] },
          { "en": "do the laundry", "es": "lavar la ropa", "imagen": "Persona metiendo ropa a la lavadora", "ejemplo": ["She does the laundry on Sunday.", "Ella lava la ropa el domingo."] },
          { "en": "go shopping", "es": "ir de compras", "imagen": "Amigas con bolsas de compras en un centro comercial", "ejemplo": ["They go shopping on the weekend.", "Ellos van de compras el fin de semana."] },
          { "en": "go to the gym", "es": "ir al gimnasio", "imagen": "Persona corriendo en una caminadora en el gimnasio", "ejemplo": ["He goes to the gym after work.", "Él va al gimnasio después del trabajo."] },
          { "en": "take a nap", "es": "tomar una siesta", "imagen": "Abuelo tomando una siesta en el sofá", "ejemplo": ["My grandpa takes a nap after lunch.", "Mi abuelo toma una siesta después de comer."] },
          { "en": "call a friend", "es": "llamar a un amigo", "imagen": "Persona sonriendo mientras habla por teléfono en la tarde", "ejemplo": ["I call a friend in the evening.", "Llamo a un amigo en la noche."] },
          { "en": "read a book", "es": "leer un libro", "imagen": "Persona leyendo un libro en la cama con la lámpara encendida", "ejemplo": ["She reads a book in bed.", "Ella lee un libro en la cama."] },
          { "en": "check email", "es": "revisar el correo", "imagen": "Mujer revisando su correo electrónico en la laptop", "ejemplo": ["He checks his email at night.", "Él revisa su correo en la noche."] },
          { "en": "relax", "es": "descansar, relajarse", "imagen": "Persona relajándose en el sofá con los pies arriba y audífonos", "ejemplo": ["I relax on Sunday afternoon.", "Descanso el domingo en la tarde."] }
        ]
      },
      {
        "id": "ese",
        "titulo": "He, she, it: el verbo lleva -s",
        "icono": "✍️",
        "patron": ["he works", "she watches", "he studies"],
        "palabras": [
          { "en": "he works", "es": "él trabaja", "imagen": "Hombre trabajando en su computadora en una oficina", "ejemplo": ["He works in an office.", "Él trabaja en una oficina."] },
          { "en": "she lives", "es": "ella vive", "imagen": "Mujer abriendo la puerta de su casa con sus llaves", "ejemplo": ["She lives near the park.", "Ella vive cerca del parque."] },
          { "en": "he plays", "es": "él juega", "imagen": "Niño pateando un balón de fútbol en el parque", "ejemplo": ["He plays soccer on Saturdays.", "Él juega fútbol los sábados."] },
          { "en": "she watches", "es": "ella ve, ella mira", "imagen": "Mujer viendo la tele sola en el sofá en la noche", "ejemplo": ["She watches TV after dinner.", "Ella ve la tele después de cenar."] },
          { "en": "he washes", "es": "él lava", "imagen": "Hombre lavando su coche con una esponja", "ejemplo": ["He washes his car on Sunday.", "Él lava su coche el domingo."] },
          { "en": "she goes", "es": "ella va", "imagen": "Niña caminando a la escuela con su mochila", "ejemplo": ["She goes to school at eight.", "Ella va a la escuela a las ocho."] },
          { "en": "he does", "es": "él hace", "imagen": "Niño haciendo la tarea", "ejemplo": ["He does his homework in his room.", "Él hace su tarea en su cuarto."] },
          { "en": "she studies", "es": "ella estudia", "imagen": "Joven estudiando en su escritorio de noche con una lámpara", "ejemplo": ["She studies English at night.", "Ella estudia inglés en la noche."] },
          { "en": "he has", "es": "él tiene, él toma", "imagen": "Hombre desayunando solo con café y pan tostado", "ejemplo": ["He has breakfast at seven.", "Él desayuna a las siete."] },
          { "en": "she fixes", "es": "ella arregla", "imagen": "Mecánica arreglando un coche en un taller", "ejemplo": ["She fixes cars.", "Ella arregla coches."] }
        ]
      }
    ],
    "ejemplos": [
      { "en": "I get up at seven every day.", "es": "Me levanto a las siete todos los días." },
      { "en": "She takes a shower in the morning.", "es": "Ella se baña en la mañana." },
      { "en": "We have breakfast together.", "es": "Desayunamos juntos." },
      { "en": "My mother goes to work at eight.", "es": "Mi mamá va al trabajo a las ocho." },
      { "en": "The children go to school by bus.", "es": "Los niños van a la escuela en autobús.", "imagen": "Niños subiendo a un autobús escolar amarillo" },
      { "en": "He works in a hospital.", "es": "Él trabaja en un hospital.", "imagen": "Enfermero trabajando en un hospital con su uniforme" },
      { "en": "She watches TV after dinner.", "es": "Ella ve la tele después de cenar." },
      { "en": "My sister studies English at night.", "es": "Mi hermana estudia inglés en la noche." },
      { "en": "The store opens at nine.", "es": "La tienda abre a las nueve.", "imagen": "Empleado abriendo la puerta de una tienda con letrero «Open» a las nueve" },
      { "en": "I go to bed at eleven.", "es": "Me voy a dormir a las once." }
    ],
    "frases": [
      { "en": "Every morning I wake up at six, take a shower and get dressed.", "es": "Todas las mañanas me despierto a las seis, me baño y me visto." },
      { "en": "My sister gets up early because she starts work at eight.", "es": "Mi hermana se levanta temprano porque empieza a trabajar a las ocho." },
      { "en": "My dad makes breakfast and my mom takes the kids to school.", "es": "Mi papá prepara el desayuno y mi mamá lleva a los niños a la escuela.", "imagen": "Papá preparando el desayuno mientras mamá sale con los niños hacia la escuela" },
      { "en": "We have lunch at two, and then I go back to work.", "es": "Comemos a las dos y luego regreso al trabajo." },
      { "en": "He finishes work at five and goes to the gym.", "es": "Él termina de trabajar a las cinco y va al gimnasio." },
      { "en": "After dinner, my kids do their homework and I do the dishes.", "es": "Después de cenar, mis hijos hacen la tarea y yo lavo los trastes.", "imagen": "Niños haciendo la tarea en la mesa mientras su papá lava los trastes" },
      { "en": "On Saturdays we clean the house and do the laundry.", "es": "Los sábados limpiamos la casa y lavamos la ropa." },
      { "en": "My grandmother drinks coffee and reads the newspaper every morning.", "es": "Mi abuela toma café y lee el periódico todas las mañanas.", "imagen": "Abuela tomando café y leyendo el periódico en la mañana" },
      { "en": "She walks the dog in the park before she goes to work.", "es": "Ella pasea al perro en el parque antes de ir al trabajo." },
      { "en": "At night I read a book in bed and go to sleep at eleven.", "es": "En la noche leo un libro en la cama y me duermo a las once." }
    ],
    "listening": [
      { "audio": "I wake up at six thirty.", "pregunta": "¿A qué hora se despierta?", "opciones": ["A las 6:30", "A las 7:30", "A las 6:13", "A las 6:00"] },
      { "audio": "My brother works in a bank.", "pregunta": "¿Dónde trabaja su hermano?", "opciones": ["En un banco", "En un hospital", "En una escuela", "En una tienda"] },
      { "audio": "She has lunch at two o'clock.", "pregunta": "¿A qué hora come ella?", "opciones": ["A las dos", "A las doce", "A las diez", "A las tres"] },
      { "audio": "We go to the gym after work.", "pregunta": "¿Cuándo van al gimnasio?", "opciones": ["Después del trabajo", "Antes del trabajo", "En la mañana", "Los domingos"] },
      { "audio": "My dad cooks dinner and I do the dishes.", "pregunta": "¿Qué hace el que habla?", "opciones": ["Lava los trastes", "Prepara la cena", "Ve la tele", "Hace la tarea"] }
    ],
    "lectura": {
      "titulo": "A day in Laura's life",
      "texto": "Laura is a nurse. She lives in Guadalajara with her husband and her two children. She gets up at half past five every day. She takes a shower, gets dressed and drinks a cup of coffee. Her husband makes breakfast and takes the kids to school. Laura catches the bus at a quarter to seven and starts work at seven thirty. She finishes work at three. In the afternoon she helps the kids with their homework. The family has dinner at eight, and Laura goes to bed at ten. She's always tired, but she loves her job!",
      "preguntas": [
        { "pregunta": "¿En qué trabaja Laura?", "opciones": ["Es enfermera", "Es maestra", "Es doctora", "Es mesera"] },
        { "pregunta": "¿Quién lleva a los niños a la escuela?", "opciones": ["Su esposo", "Laura", "Su mamá", "Nadie, van solos"] },
        { "pregunta": "¿A qué hora termina de trabajar?", "opciones": ["A las tres", "A las siete y media", "A las ocho", "A las diez"] },
        { "pregunta": "¿Qué hace Laura en la tarde?", "opciones": ["Ayuda a sus hijos con la tarea", "Va al gimnasio", "Toma una siesta", "Lava la ropa"] }
      ]
    },
    "escritura": [
      { "instruccion": "Escribe el verbo en presente simple.", "pregunta": "She ___ (work) in a bank.", "respuestas": ["works"] },
      { "instruccion": "Escribe el verbo en presente simple.", "pregunta": "He ___ (watch) TV every night.", "respuestas": ["watches"] },
      { "instruccion": "Escribe el verbo en presente simple.", "pregunta": "My mom ___ (go) to work by bus.", "respuestas": ["goes"] },
      { "instruccion": "Escribe el verbo en presente simple.", "pregunta": "Tom ___ (study) English on Mondays.", "respuestas": ["studies"] },
      { "instruccion": "Escribe el verbo en presente simple.", "pregunta": "She ___ (have) breakfast at seven.", "respuestas": ["has"] },
      { "instruccion": "Escribe el verbo en presente simple.", "pregunta": "They ___ (live) in Lima.", "respuestas": ["live"] },
      { "instruccion": "Escribe el verbo en presente simple.", "pregunta": "He ___ (do) his homework after school.", "respuestas": ["does"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "Me levanto a las siete.", "respuestas": ["I get up at seven", "I get up at 7", "I get up at seven o'clock"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "Ella se baña en la mañana.", "respuestas": ["She takes a shower in the morning", "She showers in the morning"] },
      { "instruccion": "Corrige la oración.", "pregunta": "He go to school by bus.", "respuestas": ["He goes to school by bus"] }
    ],
    "examen": [
      { "tipo": "opcion", "pregunta": "She ___ in a hospital.", "opciones": ["works", "work", "working", "is work"] },
      { "tipo": "opcion", "pregunta": "My brother ___ TV every night.", "opciones": ["watches", "watchs", "watch", "watching"] },
      { "tipo": "opcion", "pregunta": "I ___ breakfast at seven.", "opciones": ["have", "has", "haves", "having"] },
      { "tipo": "opcion", "pregunta": "He ___ English at night.", "opciones": ["studies", "studys", "study", "studyes"] },
      { "tipo": "opcion", "pregunta": "My parents ___ in Mexico City.", "opciones": ["live", "lives", "living", "is live"] },
      { "tipo": "opcion", "pregunta": "Ana ___ to bed at ten.", "opciones": ["goes", "go", "gos", "going"] },
      { "tipo": "listening", "audio": "He gets up at six and takes a shower.", "pregunta": "¿Qué hace después de levantarse?", "opciones": ["Se baña", "Desayuna", "Se viste", "Va al trabajo"] },
      { "tipo": "listening", "audio": "My mom finishes work at five and cooks dinner.", "pregunta": "¿Qué hace la mamá después del trabajo?", "opciones": ["Prepara la cena", "Va al gimnasio", "Ve la tele", "Lava la ropa"] },
      { "tipo": "escribir", "pregunta": "Traduce: Él trabaja en una oficina.", "respuestas": ["He works in an office"] },
      { "tipo": "escribir", "pregunta": "Traduce: Nosotros cenamos a las ocho.", "respuestas": ["We have dinner at eight", "We have dinner at 8", "We have dinner at eight o'clock", "We eat dinner at eight"] }
    ]
  },
  {
    "id": "a1-15",
    "num": 15,
    "titulo": "Presente simple: negativo y preguntas",
    "contexto": "Trabajos y estudios",
    "explicacion": {
      "es": [
        "Para decir que **no** en presente simple usamos **don't** (*do not*) o **doesn't** (*does not*) antes del verbo: *I don't work. She doesn't study.*",
        "**Don't** va con **I, you, we, they**; **doesn't** va con **he, she, it**. Después de *don't* y *doesn't*, el verbo va **sin -s**: *She doesn't work* (no *doesn't works*).",
        "Para **preguntar** se pone **Do** o **Does** al principio: *Do you work? Does he study?* Otra vez, el verbo va sin -s: *Does she live here?*",
        "Las respuestas cortas repiten *do* o *does*: *Yes, I do. / No, I don't. Yes, she does. / No, she doesn't.* Y con palabras de pregunta: *What do you do? Where does she work?*"
      ],
      "tabla": { "columnas": ["Forma", "I, you, we, they", "he, she, it"], "filas": [["Afirmativo", "I work.", "She works."], ["Negativo", "I don't work.", "She doesn't work."], ["Pregunta", "Do you work?", "Does she work?"], ["Respuesta corta", "Yes, I do. / No, I don't.", "Yes, she does. / No, she doesn't."], ["Con palabra de pregunta", "Where do you work?", "Where does she work?"]] },
      "ojo": [
        "Con *doesn't* y *does* el verbo **pierde la -s**: *He doesn't play* ✅, *He doesn't plays* ❌.",
        "No se dice *She don't work*: con he, she, it siempre es **doesn't**.",
        "En las preguntas no basta con la entonación: *You work here?* ❌ → ***Do** you work here?* ✅",
        "*What do you do?* significa «¿A qué te dedicas?»: el primer *do* es de la pregunta y el segundo es el verbo «hacer».",
        "En la respuesta corta no se repite el verbo: *Do you study? Yes, I do* (no *Yes, I study*).",
        "Con *have* también: *She doesn't have a job. Do you have class today?*"
      ],
      "en": [
        "Use don't or doesn't before the verb to make a negative: I don't work. She doesn't study.",
        "Use don't with I, you, we and they, and doesn't with he, she and it.",
        "Start a question with Do or Does: Do you work? Does she study?",
        "After don't, doesn't, do and does, the verb has no s: Does he live here? He doesn't live here."
      ]
    },
    "vocabulario": [
      { "en": "work full-time", "es": "trabajar tiempo completo", "imagen": "Persona trabajando en su escritorio con un reloj que marca de 9 a 6", "ejemplo": ["My sister works full-time.", "Mi hermana trabaja tiempo completo."] },
      { "en": "work part-time", "es": "trabajar medio tiempo", "imagen": "Estudiante joven atendiendo en la caja de una cafetería", "ejemplo": ["I work part-time in a café.", "Trabajo medio tiempo en una cafetería."] },
      { "en": "work from home", "es": "trabajar desde casa", "imagen": "Persona trabajando con su laptop en la mesa de su casa con un gato al lado", "ejemplo": ["My mom works from home.", "Mi mamá trabaja desde casa."] },
      { "en": "work in an office", "es": "trabajar en una oficina", "imagen": "Compañeros trabajando en sus computadoras en una oficina moderna", "ejemplo": ["Do you work in an office?", "¿Trabajas en una oficina?"] },
      { "en": "work outdoors", "es": "trabajar al aire libre", "imagen": "Jardinero trabajando al aire libre en un parque soleado", "ejemplo": ["He doesn't work in an office. He works outdoors.", "Él no trabaja en una oficina. Trabaja al aire libre."] },
      { "en": "work with children", "es": "trabajar con niños", "imagen": "Maestra de kínder jugando con niños pequeños", "ejemplo": ["Does she work with children?", "¿Ella trabaja con niños?"] },
      { "en": "wear a uniform", "es": "usar uniforme", "imagen": "Trabajadora de un supermercado con uniforme y gafete", "ejemplo": ["Do you wear a uniform at work?", "¿Usas uniforme en el trabajo?"] },
      { "en": "earn money", "es": "ganar dinero", "imagen": "Persona contando billetes de su sueldo", "ejemplo": ["He earns good money.", "Él gana buen dinero."] },
      { "en": "help customers", "es": "atender a los clientes", "imagen": "Vendedora amable atendiendo a un cliente en una tienda", "ejemplo": ["She helps customers in a store.", "Ella atiende a los clientes en una tienda."] },
      { "en": "use a computer", "es": "usar una computadora", "imagen": "Persona escribiendo en el teclado de una computadora", "ejemplo": ["I don't use a computer at work.", "No uso computadora en el trabajo."] },
      { "en": "have a day off", "es": "tener un día libre", "imagen": "Persona descansando en una hamaca con un calendario que dice «Day off»", "ejemplo": ["I have a day off on Wednesday.", "Tengo un día libre el miércoles."] },
      { "en": "go to college", "es": "ir a la universidad", "imagen": "Jóvenes con mochilas caminando en el campus de una universidad", "ejemplo": ["My brother goes to college.", "Mi hermano va a la universidad."] },
      { "en": "study medicine", "es": "estudiar medicina", "imagen": "Estudiantes de medicina con bata blanca revisando un esqueleto", "ejemplo": ["Does she study medicine?", "¿Ella estudia medicina?"] },
      { "en": "take classes", "es": "tomar clases", "imagen": "Adultos tomando una clase en un salón con su maestra", "ejemplo": ["I take classes on Saturdays.", "Tomo clases los sábados."] },
      { "en": "take notes", "es": "tomar apuntes", "imagen": "Estudiante tomando apuntes en su cuaderno durante la clase", "ejemplo": ["Do you take notes in class?", "¿Tomas apuntes en clase?"] },
      { "en": "pass an exam", "es": "aprobar un examen", "imagen": "Estudiante feliz mostrando su examen con una A en rojo", "ejemplo": ["I don't always pass my exams.", "No siempre apruebo mis exámenes."] }
    ],
    "grupos": [
      {
        "id": "lugares",
        "titulo": "Lugares de trabajo y estudio",
        "icono": "🏢",
        "patron": ["I work in an office", "She works at a factory", "He studies at a university"],
        "palabras": [
          { "en": "an office", "es": "una oficina", "imagen": "Oficina con escritorios, computadoras y plantas", "ejemplo": ["She works in an office downtown.", "Ella trabaja en una oficina en el centro."] },
          { "en": "a factory", "es": "una fábrica", "imagen": "Trabajadores con casco en la línea de producción de una fábrica", "ejemplo": ["My uncle works at a factory.", "Mi tío trabaja en una fábrica."] },
          { "en": "a university", "es": "una universidad", "imagen": "Edificio principal de una universidad con estudiantes en la entrada", "ejemplo": ["Does your daughter study at a university?", "¿Tu hija estudia en una universidad?"] },
          { "en": "a high school", "es": "una preparatoria", "imagen": "Adolescentes con mochilas frente a una preparatoria", "ejemplo": ["They go to high school near here.", "Ellos van a la prepa cerca de aquí."] },
          { "en": "a lab", "es": "un laboratorio", "imagen": "Científica mirando por un microscopio en un laboratorio", "ejemplo": ["He works in a lab.", "Él trabaja en un laboratorio."] },
          { "en": "a warehouse", "es": "un almacén, una bodega", "imagen": "Almacén con estantes altos llenos de cajas y un montacargas", "ejemplo": ["They work in a warehouse at night.", "Ellos trabajan en un almacén en la noche."] },
          { "en": "a call center", "es": "un centro de llamadas", "imagen": "Personas con diadema hablando por teléfono frente a computadoras", "ejemplo": ["I don't work at a call center.", "No trabajo en un centro de llamadas."] },
          { "en": "a construction site", "es": "una obra", "imagen": "Trabajadores con casco y chaleco en una obra en construcción", "ejemplo": ["He works at a construction site.", "Él trabaja en una obra."] },
          { "en": "a workshop", "es": "un taller", "imagen": "Taller de carpintería con herramientas en la pared", "ejemplo": ["My dad has a workshop at home.", "Mi papá tiene un taller en casa."] },
          { "en": "a beauty salon", "es": "una estética", "imagen": "Estilista cortando el pelo a una clienta en una estética", "ejemplo": ["She works at a beauty salon.", "Ella trabaja en una estética."] }
        ]
      },
      {
        "id": "negativo",
        "titulo": "Negativo: don't / doesn't",
        "icono": "❌",
        "patron": ["I don't work", "She doesn't study", "They don't wear a uniform"],
        "palabras": [
          { "en": "I don't work on weekends", "es": "no trabajo los fines de semana", "imagen": "Calendario con el sábado y el domingo tachados y una persona descansando", "ejemplo": ["I don't work on weekends. I rest.", "No trabajo los fines de semana. Descanso."] },
          { "en": "she doesn't work here", "es": "ella no trabaja aquí", "imagen": "Mujer en una tienda negando con la cabeza ante un cliente que le pregunta", "ejemplo": ["Sorry, she doesn't work here.", "Perdón, ella no trabaja aquí."] },
          { "en": "he doesn't wear a tie", "es": "él no usa corbata", "imagen": "Hombre en la oficina con camisa casual y sin corbata", "ejemplo": ["My boss doesn't wear a tie.", "Mi jefe no usa corbata."] },
          { "en": "we don't have class today", "es": "no tenemos clase hoy", "imagen": "Salón de clases vacío con un letrero «No class today» en el pizarrón", "ejemplo": ["We don't have class today. It's a holiday.", "Hoy no tenemos clase. Es día festivo."] },
          { "en": "they don't work from home", "es": "ellos no trabajan desde casa", "imagen": "Compañeros llegando juntos a la oficina en la mañana", "ejemplo": ["They don't work from home. They go to the office.", "Ellos no trabajan desde casa. Van a la oficina."] },
          { "en": "I don't understand", "es": "no entiendo", "imagen": "Estudiante confundido rascándose la cabeza frente a su libro", "ejemplo": ["I don't understand this word.", "No entiendo esta palabra."] },
          { "en": "he doesn't like his job", "es": "no le gusta su trabajo", "imagen": "Hombre aburrido y cansado frente a una pila de papeles en su escritorio", "ejemplo": ["He doesn't like his job. It's boring.", "No le gusta su trabajo. Es aburrido."] },
          { "en": "she doesn't drive to work", "es": "ella no maneja al trabajo", "imagen": "Mujer yendo en bicicleta al trabajo con su casco", "ejemplo": ["She doesn't drive to work. She rides her bike.", "Ella no maneja al trabajo. Va en bicicleta."] },
          { "en": "the store doesn't open on Sundays", "es": "la tienda no abre los domingos", "imagen": "Tienda con la cortina cerrada y un letrero «Closed on Sundays»", "ejemplo": ["The store doesn't open on Sundays.", "La tienda no abre los domingos."] },
          { "en": "I don't know", "es": "no sé", "imagen": "Persona encogiendo los hombros con las palmas hacia arriba", "ejemplo": ["I don't know his name.", "No sé su nombre."] }
        ]
      },
      {
        "id": "preguntas",
        "titulo": "Preguntas: do / does",
        "icono": "❓",
        "patron": ["Do you work?", "Does she study?", "What do you do?"],
        "palabras": [
          { "en": "What do you do?", "es": "¿A qué te dedicas?", "imagen": "Dos personas conociéndose y dándose la mano en una reunión", "ejemplo": ["What do you do? I'm a teacher.", "¿A qué te dedicas? Soy maestro."] },
          { "en": "Where do you work?", "es": "¿Dónde trabajas?", "imagen": "Persona preguntando a otra mientras señala un edificio de oficinas", "ejemplo": ["Where do you work? I work in a hospital.", "¿Dónde trabajas? Trabajo en un hospital."] },
          { "en": "Do you work or study?", "es": "¿Trabajas o estudias?", "imagen": "Joven pensando entre un portafolio y una mochila con libros", "ejemplo": ["Do you work or study? I study.", "¿Trabajas o estudias? Estudio."] },
          { "en": "What does she do?", "es": "¿A qué se dedica ella?", "imagen": "Dos amigos hablando mientras miran a una mujer piloto", "ejemplo": ["What does she do? She's a pilot.", "¿A qué se dedica ella? Es piloto."] },
          { "en": "Does he work here?", "es": "¿Él trabaja aquí?", "imagen": "Cliente preguntando por un empleado en el mostrador de una tienda", "ejemplo": ["Does he work here? Yes, he does.", "¿Él trabaja aquí? Sí."] },
          { "en": "Do you like your job?", "es": "¿Te gusta tu trabajo?", "imagen": "Chef sonriendo con los brazos cruzados en su cocina", "ejemplo": ["Do you like your job? Yes, I love it!", "¿Te gusta tu trabajo? ¡Sí, me encanta!"] },
          { "en": "What do you study?", "es": "¿Qué estudias?", "imagen": "Estudiante universitaria con libros de arquitectura y una maqueta", "ejemplo": ["What do you study? I study architecture.", "¿Qué estudias? Estudio arquitectura."] },
          { "en": "Where does she study?", "es": "¿Dónde estudia ella?", "imagen": "Estudiante saliendo de la biblioteca de su universidad", "ejemplo": ["Where does she study? At the university.", "¿Dónde estudia ella? En la universidad."] },
          { "en": "What time do you start work?", "es": "¿A qué hora entras a trabajar?", "imagen": "Persona llegando a la oficina y mirando su reloj de pulsera", "ejemplo": ["What time do you start work? At nine.", "¿A qué hora entras a trabajar? A las nueve."] },
          { "en": "Yes, I do.", "es": "Sí (yo sí).", "imagen": "Persona sonriendo y asintiendo con el pulgar arriba", "ejemplo": ["Do you speak English? Yes, I do.", "¿Hablas inglés? Sí."] },
          { "en": "No, she doesn't.", "es": "No (ella no).", "imagen": "Mujer negando amablemente con la cabeza y la mano", "ejemplo": ["Does she have a car? No, she doesn't.", "¿Ella tiene coche? No."] }
        ]
      }
    ],
    "ejemplos": [
      { "en": "I don't work on Saturdays.", "es": "No trabajo los sábados." },
      { "en": "She doesn't study at night.", "es": "Ella no estudia en la noche.", "imagen": "Estudiante cerrando sus libros y apagando la lámpara en la noche" },
      { "en": "Do you work in an office?", "es": "¿Trabajas en una oficina?" },
      { "en": "Does he wear a uniform?", "es": "¿Él usa uniforme?", "imagen": "Guardia de seguridad con su uniforme en la entrada de un edificio" },
      { "en": "What do you do? I'm a nurse.", "es": "¿A qué te dedicas? Soy enfermera." },
      { "en": "Where does your sister work? She works in a bank.", "es": "¿Dónde trabaja tu hermana? Trabaja en un banco." },
      { "en": "My brother doesn't have a job.", "es": "Mi hermano no tiene trabajo." },
      { "en": "Do they study English? Yes, they do.", "es": "¿Ellos estudian inglés? Sí.", "imagen": "Grupo de estudiantes adultos en clase de inglés levantando la mano" },
      { "en": "The doctor doesn't work on Sundays.", "es": "El doctor no trabaja los domingos." },
      { "en": "What time does the class start?", "es": "¿A qué hora empieza la clase?", "imagen": "Estudiantes en su salón mirando el reloj de la pared antes de la clase" }
    ],
    "frases": [
      { "en": "I don't work full-time; I work part-time in a café.", "es": "No trabajo tiempo completo; trabajo medio tiempo en una cafetería." },
      { "en": "My mom doesn't work in an office; she works from home.", "es": "Mi mamá no trabaja en una oficina; trabaja desde casa." },
      { "en": "Do you study at the university, or do you work?", "es": "¿Estudias en la universidad o trabajas?" },
      { "en": "What does your father do? He's an engineer.", "es": "¿A qué se dedica tu papá? Es ingeniero." },
      { "en": "She doesn't wear a uniform at work, but her husband does.", "es": "Ella no usa uniforme en el trabajo, pero su esposo sí.", "imagen": "Mujer con ropa casual de oficina junto a su esposo vestido de policía" },
      { "en": "Does your boss speak English? Yes, he does.", "es": "¿Tu jefe habla inglés? Sí.", "imagen": "Jefe hablando en inglés frente a su equipo en una junta" },
      { "en": "We don't have class on Fridays, so we study at home.", "es": "No tenemos clase los viernes, así que estudiamos en casa.", "imagen": "Amigos estudiando juntos en la sala de una casa con libros" },
      { "en": "Where do you work? I work at a factory near my house.", "es": "¿Dónde trabajas? Trabajo en una fábrica cerca de mi casa." },
      { "en": "My brother doesn't like his job because he works at night.", "es": "A mi hermano no le gusta su trabajo porque trabaja de noche." },
      { "en": "They don't take notes in class; they use their laptops.", "es": "No toman apuntes en clase; usan sus laptops.", "imagen": "Estudiantes en clase escribiendo en sus laptops" }
    ],
    "listening": [
      { "audio": "I don't work on Mondays.", "pregunta": "¿Qué día no trabaja?", "opciones": ["El lunes", "El domingo", "El martes", "El viernes"] },
      { "audio": "Does your sister work in a hospital? No, she doesn't. She works in a school.", "pregunta": "¿Dónde trabaja la hermana?", "opciones": ["En una escuela", "En un hospital", "En una fábrica", "En una oficina"] },
      { "audio": "What do you do? I'm a student. I study engineering.", "pregunta": "¿Qué estudia?", "opciones": ["Ingeniería", "Medicina", "Inglés", "Arquitectura"] },
      { "audio": "He doesn't drive to work. He takes the bus.", "pregunta": "¿Cómo va al trabajo?", "opciones": ["En autobús", "En coche", "En bicicleta", "Caminando"] },
      { "audio": "Do you work from home? Yes, I do.", "pregunta": "¿Dónde trabaja?", "opciones": ["En su casa", "En una oficina", "En una tienda", "No trabaja"] }
    ],
    "lectura": {
      "titulo": "Work and study",
      "texto": "Hi! I'm Diego. I'm 22 and I'm a student. I study architecture at the university. I don't have classes on Fridays, so I work part-time in a coffee shop. I don't earn a lot of money, but I like my job. My girlfriend, Sofía, doesn't study. She works full-time in a bank. She doesn't wear a uniform, but she wears a suit every day. Does she like her job? Yes, she does! She loves numbers. On Sundays we don't work and we don't study. We relax!",
      "preguntas": [
        { "pregunta": "¿Qué estudia Diego?", "opciones": ["Arquitectura", "Medicina", "Ingeniería", "Contabilidad"] },
        { "pregunta": "¿Qué hace Diego los viernes?", "opciones": ["Trabaja en una cafetería", "Va a clases", "Trabaja en un banco", "Descansa"] },
        { "pregunta": "¿Dónde trabaja Sofía?", "opciones": ["En un banco", "En una cafetería", "En la universidad", "En una tienda"] },
        { "pregunta": "¿Qué hacen los domingos?", "opciones": ["Descansan", "Trabajan", "Estudian", "Van a la universidad"] }
      ]
    },
    "escritura": [
      { "instruccion": "Completa con don't o doesn't.", "pregunta": "I ___ work on Sundays.", "respuestas": ["don't"] },
      { "instruccion": "Completa con don't o doesn't.", "pregunta": "She ___ wear a uniform.", "respuestas": ["doesn't"] },
      { "instruccion": "Completa con don't o doesn't.", "pregunta": "They ___ study at night.", "respuestas": ["don't"] },
      { "instruccion": "Completa con do o does.", "pregunta": "___ you work in an office?", "respuestas": ["Do"] },
      { "instruccion": "Completa con do o does.", "pregunta": "___ he like his job?", "respuestas": ["Does"] },
      { "instruccion": "Completa con do o does.", "pregunta": "Where ___ your sister study?", "respuestas": ["does"] },
      { "instruccion": "Escribe la respuesta corta.", "pregunta": "Do you speak English? Yes, ___", "respuestas": ["I do"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "¿A qué te dedicas?", "respuestas": ["What do you do", "What do you do for a living"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "Él no trabaja aquí.", "respuestas": ["He doesn't work here", "He does not work here"] },
      { "instruccion": "Corrige la oración.", "pregunta": "She doesn't works on Mondays.", "respuestas": ["She doesn't work on Mondays", "She does not work on Mondays"] }
    ],
    "examen": [
      { "tipo": "opcion", "pregunta": "He ___ work on weekends.", "opciones": ["doesn't", "don't", "isn't", "not"] },
      { "tipo": "opcion", "pregunta": "We ___ have class today.", "opciones": ["don't", "doesn't", "aren't", "no"] },
      { "tipo": "opcion", "pregunta": "___ she work in a hospital?", "opciones": ["Does", "Do", "Is", "Are"] },
      { "tipo": "opcion", "pregunta": "Does your brother ___ English?", "opciones": ["study", "studies", "studying", "to study"] },
      { "tipo": "opcion", "pregunta": "Do you like your job? Yes, I ___.", "opciones": ["do", "like", "am", "does"] },
      { "tipo": "opcion", "pregunta": "Where ___ you work?", "opciones": ["do", "does", "are", "is"] },
      { "tipo": "listening", "audio": "My father doesn't work in an office. He works outdoors.", "pregunta": "¿Dónde trabaja el papá?", "opciones": ["Al aire libre", "En una oficina", "En su casa", "En una fábrica"] },
      { "tipo": "listening", "audio": "Does she study medicine? No, she doesn't. She studies law.", "pregunta": "¿Qué estudia ella?", "opciones": ["Derecho", "Medicina", "Arquitectura", "Inglés"] },
      { "tipo": "escribir", "pregunta": "Traduce: No entiendo.", "respuestas": ["I don't understand", "I do not understand"] },
      { "tipo": "escribir", "pregunta": "Traduce: ¿Trabajas o estudias?", "respuestas": ["Do you work or study", "Do you work or do you study"] }
    ]
  },
  {
    "id": "a1-16",
    "num": 16,
    "titulo": "Adverbios de frecuencia",
    "contexto": "Hábitos y tiempo libre",
    "explicacion": {
      "es": [
        "Los **adverbios de frecuencia** dicen **qué tan seguido** hacemos algo: *always* (siempre), *usually* (normalmente), *often* (seguido), *sometimes* (a veces), *rarely* / *hardly ever* (rara vez, casi nunca) y *never* (nunca).",
        "Van **antes del verbo**: *I **always** get up early. She **never** eats meat.* El verbo sigue con sus reglas: *She usually **takes** the bus.*",
        "Con el verbo **to be** (*am, is, are*) van **después**: *I'm **always** tired. She's **never** late.*",
        "Las expresiones como *every day, once a week, twice a week, on weekends* van normalmente **al final**: *I go to the gym twice a week.* Para preguntar: ***How often** do you…?*"
      ],
      "tabla": { "columnas": ["Adverbio", "Qué tanto", "Ejemplo"], "filas": [["always", "100 %", "I always drink coffee."], ["usually", "90 %", "I usually walk to work."], ["often", "70 %", "We often go to the movies."], ["sometimes", "50 %", "She sometimes plays tennis."], ["rarely / hardly ever", "10 % / 5 %", "He hardly ever cooks."], ["never", "0 %", "I never eat meat."]] },
      "ojo": [
        "Con *to be* el adverbio va después: *She is always happy* ✅, *She always is happy* ❌.",
        "*Never* ya es negativo: *I never eat meat* ✅, *I don't never eat meat* ❌.",
        "*Sometimes* también puede ir al principio: *Sometimes I walk to work.*",
        "*Usually* se traduce mejor como «normalmente» o «por lo general».",
        "*Once* = una vez, *twice* = dos veces; desde tres se dice *three times, four times*…",
        "En preguntas el adverbio va después del sujeto: *Do you often eat out?*"
      ],
      "en": [
        "Frequency adverbs say how often: always, usually, often, sometimes, rarely, never.",
        "Put them before the main verb: I always get up early.",
        "Put them after the verb to be: She is never late.",
        "Expressions like once a week go at the end. Ask with How often: How often do you exercise?"
      ]
    },
    "vocabulario": [
      { "en": "always", "es": "siempre", "imagen": "Calendario con todos los días marcados con una palomita verde y un letrero 100 %", "ejemplo": ["I always drink coffee in the morning.", "Siempre tomo café en la mañana."] },
      { "en": "usually", "es": "normalmente, por lo general", "imagen": "Calendario con casi todos los días marcados con palomita y un letrero 90 %", "ejemplo": ["I usually walk to work.", "Normalmente camino al trabajo."] },
      { "en": "often", "es": "seguido, a menudo", "imagen": "Calendario con muchos días marcados con palomita y un letrero 70 %", "ejemplo": ["We often go to the movies.", "Seguido vamos al cine."] },
      { "en": "sometimes", "es": "a veces", "imagen": "Calendario con la mitad de los días marcados con palomita y un letrero 50 %", "ejemplo": ["She sometimes plays tennis.", "Ella a veces juega tenis."] },
      { "en": "rarely", "es": "rara vez", "imagen": "Calendario con solo dos días marcados con palomita y un letrero 10 %", "ejemplo": ["He rarely eats fast food.", "Él rara vez come comida rápida."] },
      { "en": "hardly ever", "es": "casi nunca", "imagen": "Calendario con un solo día marcado con palomita y un letrero 5 %", "ejemplo": ["My dad hardly ever cooks.", "Mi papá casi nunca cocina."] },
      { "en": "never", "es": "nunca", "imagen": "Calendario sin ningún día marcado, con una X roja grande y un letrero 0 %", "ejemplo": ["I never eat meat.", "Nunca como carne."] },
      { "en": "every day", "es": "todos los días", "imagen": "Persona tachando cada día del calendario mientras toma su café", "ejemplo": ["I study English every day.", "Estudio inglés todos los días."] },
      { "en": "every weekend", "es": "todos los fines de semana", "imagen": "Familia saliendo de paseo en coche un sábado en la mañana", "ejemplo": ["We visit my grandma every weekend.", "Visitamos a mi abuela todos los fines de semana."] },
      { "en": "once a week", "es": "una vez a la semana", "imagen": "Calendario semanal con un solo día marcado con un círculo", "ejemplo": ["I go to the gym once a week.", "Voy al gimnasio una vez a la semana."] },
      { "en": "twice a week", "es": "dos veces a la semana", "imagen": "Calendario semanal con dos días marcados con un círculo", "ejemplo": ["She takes yoga classes twice a week.", "Ella toma clases de yoga dos veces a la semana."] },
      { "en": "three times a week", "es": "tres veces a la semana", "imagen": "Calendario semanal con tres días marcados y unos tenis para correr", "ejemplo": ["He runs three times a week.", "Él corre tres veces a la semana."] },
      { "en": "once a month", "es": "una vez al mes", "imagen": "Calendario mensual con un solo día marcado con una estrella", "ejemplo": ["We eat out once a month.", "Comemos fuera una vez al mes."] },
      { "en": "on weekends", "es": "los fines de semana", "imagen": "Amigos haciendo un picnic en el parque un fin de semana", "ejemplo": ["I sleep late on weekends.", "Los fines de semana duermo hasta tarde."] },
      { "en": "How often?", "es": "¿Qué tan seguido?", "imagen": "Persona preguntándole a su amiga mientras sostiene un calendario", "ejemplo": ["How often do you exercise?", "¿Qué tan seguido haces ejercicio?"] },
      { "en": "free time", "es": "tiempo libre", "imagen": "Persona descansando en una hamaca en el jardín con un libro", "ejemplo": ["What do you do in your free time?", "¿Qué haces en tu tiempo libre?"] }
    ],
    "grupos": [
      {
        "id": "pasatiempos",
        "titulo": "Pasatiempos",
        "icono": "🎸",
        "patron": ["I play the guitar", "She goes swimming", "We watch movies"],
        "palabras": [
          { "en": "play the guitar", "es": "tocar la guitarra", "imagen": "Joven tocando la guitarra sentado en su cama", "ejemplo": ["I play the guitar every evening.", "Toco la guitarra todas las noches."] },
          { "en": "play video games", "es": "jugar videojuegos", "imagen": "Hermanos jugando videojuegos con controles frente a la tele", "ejemplo": ["My son plays video games on weekends.", "Mi hijo juega videojuegos los fines de semana."] },
          { "en": "play tennis", "es": "jugar tenis", "imagen": "Dos amigas jugando tenis en una cancha", "ejemplo": ["We play tennis twice a week.", "Jugamos tenis dos veces a la semana."] },
          { "en": "go swimming", "es": "ir a nadar", "imagen": "Persona nadando en una alberca", "ejemplo": ["She goes swimming on Saturdays.", "Ella va a nadar los sábados."] },
          { "en": "go running", "es": "salir a correr", "imagen": "Persona corriendo en el parque temprano en la mañana", "ejemplo": ["He goes running every morning.", "Él sale a correr todas las mañanas."] },
          { "en": "go camping", "es": "ir de campamento", "imagen": "Familia junto a una tienda de campaña y una fogata en el bosque", "ejemplo": ["We go camping once a year.", "Vamos de campamento una vez al año."] },
          { "en": "go dancing", "es": "ir a bailar", "imagen": "Parejas bailando salsa en una pista de baile", "ejemplo": ["They often go dancing on Friday night.", "Seguido van a bailar el viernes en la noche."] },
          { "en": "ride a bike", "es": "andar en bici", "imagen": "Persona andando en bicicleta por una ciclovía", "ejemplo": ["I ride my bike to school.", "Voy a la escuela en bici."] },
          { "en": "take photos", "es": "tomar fotos", "imagen": "Persona tomando fotos de un paisaje con su cámara", "ejemplo": ["My sister always takes photos on vacation.", "Mi hermana siempre toma fotos en vacaciones."] },
          { "en": "paint", "es": "pintar", "imagen": "Persona pintando un cuadro en un caballete", "ejemplo": ["My grandpa paints in his free time.", "Mi abuelo pinta en su tiempo libre."] },
          { "en": "listen to music", "es": "escuchar música", "imagen": "Joven escuchando música con audífonos y los ojos cerrados", "ejemplo": ["I listen to music on the bus.", "Escucho música en el autobús."] },
          { "en": "watch movies", "es": "ver películas", "imagen": "Amigos viendo una película en casa con palomitas", "ejemplo": ["We watch movies on Friday night.", "Vemos películas el viernes en la noche."] }
        ]
      },
      {
        "id": "planes",
        "titulo": "Planes para el tiempo libre",
        "icono": "🎡",
        "patron": ["We go to the park", "I eat out", "She stays home"],
        "palabras": [
          { "en": "go to the park", "es": "ir al parque", "imagen": "Familia paseando en un parque con árboles y un lago", "ejemplo": ["We go to the park on Sundays.", "Vamos al parque los domingos."] },
          { "en": "go to the movies", "es": "ir al cine", "imagen": "Cine", "ejemplo": ["I go to the movies once a month.", "Voy al cine una vez al mes."] },
          { "en": "go to a museum", "es": "ir a un museo", "imagen": "Personas mirando cuadros en la sala de un museo", "ejemplo": ["They sometimes go to a museum.", "A veces van a un museo."] },
          { "en": "go to the beach", "es": "ir a la playa", "imagen": "Playa", "ejemplo": ["We go to the beach every summer.", "Vamos a la playa cada verano."] },
          { "en": "go to a concert", "es": "ir a un concierto", "imagen": "Concierto", "ejemplo": ["She rarely goes to concerts.", "Ella rara vez va a conciertos."] },
          { "en": "go to the zoo", "es": "ir al zoológico", "imagen": "Niños mirando a una jirafa en el zoológico", "ejemplo": ["The kids love to go to the zoo.", "A los niños les encanta ir al zoológico."] },
          { "en": "go to an amusement park", "es": "ir a un parque de diversiones", "imagen": "Amigos gritando felices en una montaña rusa", "ejemplo": ["We go to an amusement park once a year.", "Vamos a un parque de diversiones una vez al año."] },
          { "en": "eat out", "es": "comer fuera", "imagen": "Restaurante", "ejemplo": ["We usually eat out on Saturdays.", "Normalmente comemos fuera los sábados."] },
          { "en": "visit friends", "es": "visitar a los amigos", "imagen": "Amigos recibiendo a otros en la puerta de su casa con abrazos", "ejemplo": ["I often visit friends on weekends.", "Seguido visito a mis amigos los fines de semana."] },
          { "en": "stay home", "es": "quedarse en casa", "imagen": "Persona en piyama en el sofá con una cobija y una taza de chocolate", "ejemplo": ["I usually stay home on Sunday.", "Normalmente me quedo en casa el domingo."] },
          { "en": "go for a walk", "es": "salir a caminar", "imagen": "Pareja mayor caminando de la mano por un sendero", "ejemplo": ["My parents go for a walk after dinner.", "Mis papás salen a caminar después de cenar."] }
        ]
      },
      {
        "id": "posicion",
        "titulo": "¿Dónde va el adverbio?",
        "icono": "📍",
        "patron": ["I always get up early", "She is never late", "We often eat out"],
        "palabras": [
          { "en": "I always get up early", "es": "siempre me levanto temprano", "imagen": "Persona levantándose de la cama al amanecer con el despertador a las 6", "ejemplo": ["I always get up early on weekdays.", "Entre semana siempre me levanto temprano."] },
          { "en": "she usually takes the bus", "es": "ella normalmente toma el autobús", "imagen": "Mujer esperando el autobús en la parada con su bolsa", "ejemplo": ["She usually takes the bus to work.", "Normalmente ella toma el autobús al trabajo."] },
          { "en": "we often eat out", "es": "seguido comemos fuera", "imagen": "Familia comiendo en una mesa de restaurante", "ejemplo": ["We often eat out on Fridays.", "Seguido comemos fuera los viernes."] },
          { "en": "he sometimes works late", "es": "a veces trabaja hasta tarde", "imagen": "Hombre trabajando solo en la oficina de noche", "ejemplo": ["He sometimes works late on Thursdays.", "A veces trabaja hasta tarde los jueves."] },
          { "en": "they never watch TV", "es": "ellos nunca ven la tele", "imagen": "Familia jugando un juego de mesa junto a una tele apagada", "ejemplo": ["They never watch TV at dinner.", "Nunca ven la tele en la cena."] },
          { "en": "I'm always tired on Mondays", "es": "siempre estoy cansado los lunes", "imagen": "Persona bostezando frente a su computadora con un calendario que dice Monday", "ejemplo": ["I'm always tired on Mondays.", "Siempre estoy cansado los lunes."] },
          { "en": "she's never late", "es": "ella nunca llega tarde", "imagen": "Mujer llegando puntual a una junta mientras señala su reloj", "ejemplo": ["She's never late for class.", "Ella nunca llega tarde a clase."] },
          { "en": "he's usually happy", "es": "normalmente está contento", "imagen": "Hombre sonriente saludando a sus vecinos en la mañana", "ejemplo": ["My grandpa is usually happy.", "Mi abuelo normalmente está contento."] },
          { "en": "we're often busy", "es": "seguido estamos ocupados", "imagen": "Compañeros de trabajo apurados con papeles y teléfonos en la oficina", "ejemplo": ["We're often busy on Mondays.", "Seguido estamos ocupados los lunes."] },
          { "en": "it's sometimes cold here", "es": "a veces hace frío aquí", "imagen": "Persona con suéter y bufanda frotándose las manos en una calle", "ejemplo": ["It's sometimes cold here in the morning.", "Aquí a veces hace frío en la mañana."] }
        ]
      }
    ],
    "ejemplos": [
      { "en": "I always have breakfast at home.", "es": "Siempre desayuno en casa." },
      { "en": "She usually goes to bed at ten.", "es": "Ella normalmente se duerme a las diez." },
      { "en": "We often play video games.", "es": "Seguido jugamos videojuegos." },
      { "en": "He sometimes goes running in the park.", "es": "A veces él sale a correr en el parque." },
      { "en": "My mom never drinks coffee.", "es": "Mi mamá nunca toma café.", "imagen": "Mamá tomando una taza de té y diciendo que no a una taza de café" },
      { "en": "I'm always happy on Fridays.", "es": "Siempre estoy contento los viernes.", "imagen": "Persona feliz saliendo del trabajo un viernes con un letrero «Friday»" },
      { "en": "How often do you go to the gym?", "es": "¿Qué tan seguido vas al gimnasio?" },
      { "en": "I go swimming twice a week.", "es": "Voy a nadar dos veces a la semana." },
      { "en": "They hardly ever watch TV.", "es": "Casi nunca ven la tele.", "imagen": "Amigos leyendo y platicando en la sala junto a una tele apagada" },
      { "en": "We eat out once a month.", "es": "Comemos fuera una vez al mes." }
    ],
    "frases": [
      { "en": "I always get up at six, but on weekends I sleep late.", "es": "Siempre me levanto a las seis, pero los fines de semana duermo hasta tarde." },
      { "en": "My brother usually plays soccer with his friends on Saturdays.", "es": "Mi hermano normalmente juega fútbol con sus amigos los sábados.", "imagen": "Jóvenes jugando fútbol en una cancha un sábado en la mañana" },
      { "en": "We often go to the beach in summer, and we sometimes go camping.", "es": "Seguido vamos a la playa en verano y a veces vamos de campamento." },
      { "en": "She's never late because she always takes the early bus.", "es": "Ella nunca llega tarde porque siempre toma el autobús temprano." },
      { "en": "How often do you visit your grandparents? Once a month.", "es": "¿Qué tan seguido visitas a tus abuelos? Una vez al mes.", "imagen": "Nietos abrazando a sus abuelos en la puerta de su casa" },
      { "en": "In my free time I usually read or listen to music.", "es": "En mi tiempo libre normalmente leo o escucho música." },
      { "en": "My dad hardly ever cooks, but he always does the dishes.", "es": "Mi papá casi nunca cocina, pero siempre lava los trastes." },
      { "en": "They go dancing every Friday night and they're always tired on Saturday.", "es": "Van a bailar cada viernes en la noche y siempre están cansados el sábado." },
      { "en": "I rarely watch TV; I prefer to go for a walk in the park.", "es": "Rara vez veo la tele; prefiero salir a caminar al parque." },
      { "en": "We play tennis twice a week and go to the movies once a month.", "es": "Jugamos tenis dos veces a la semana y vamos al cine una vez al mes." }
    ],
    "listening": [
      { "audio": "I always walk to work.", "pregunta": "¿Qué tan seguido camina al trabajo?", "opciones": ["Siempre", "Nunca", "A veces", "Casi nunca"] },
      { "audio": "She goes swimming three times a week.", "pregunta": "¿Cuántas veces a la semana va a nadar?", "opciones": ["Tres", "Dos", "Una", "Todos los días"] },
      { "audio": "We never eat out on Mondays.", "pregunta": "¿Qué nunca hacen los lunes?", "opciones": ["Comer fuera", "Ir al cine", "Trabajar", "Ver la tele"] },
      { "audio": "How often do you play the guitar? Every evening.", "pregunta": "¿Cuándo toca la guitarra?", "opciones": ["Todas las noches", "Todas las mañanas", "Los fines de semana", "Una vez al mes"] },
      { "audio": "My dad is usually tired after work.", "pregunta": "¿Cómo está normalmente el papá después del trabajo?", "opciones": ["Cansado", "Contento", "Enojado", "Ocupado"] }
    ],
    "lectura": {
      "titulo": "My free time",
      "texto": "Hi, I'm Mateo. I work from Monday to Friday, so I don't have a lot of free time. But I always go running before work, three times a week. On weekends I usually play soccer with my friends on Saturday morning. In the afternoon we sometimes go to the movies or eat out. On Sundays I hardly ever go out. I usually stay home, read a book and listen to music. I never play video games. I think they're boring! And you? What do you do in your free time?",
      "preguntas": [
        { "pregunta": "¿Qué tan seguido sale a correr Mateo?", "opciones": ["Tres veces a la semana", "Todos los días", "Una vez a la semana", "Nunca"] },
        { "pregunta": "¿Qué hace normalmente el sábado en la mañana?", "opciones": ["Juega fútbol", "Va al cine", "Lee un libro", "Trabaja"] },
        { "pregunta": "¿Qué hace los domingos?", "opciones": ["Se queda en casa", "Juega fútbol", "Come fuera", "Sale a correr"] },
        { "pregunta": "¿Qué nunca hace Mateo?", "opciones": ["Jugar videojuegos", "Escuchar música", "Leer", "Ir al cine"] }
      ]
    },
    "escritura": [
      { "instruccion": "Ordena la oración.", "pregunta": "always / I / early / get up", "respuestas": ["I always get up early"] },
      { "instruccion": "Ordena la oración.", "pregunta": "is / she / late / never", "respuestas": ["She is never late", "She's never late"] },
      { "instruccion": "Ordena la oración.", "pregunta": "usually / we / at home / have lunch", "respuestas": ["We usually have lunch at home"] },
      { "instruccion": "Ordena la oración.", "pregunta": "often / tired / am / I", "respuestas": ["I am often tired", "I'm often tired"] },
      { "instruccion": "Completa con la palabra en inglés.", "pregunta": "I go to the gym ___ a week. (dos veces)", "respuestas": ["twice"] },
      { "instruccion": "Completa con la palabra en inglés.", "pregunta": "How ___ do you play tennis?", "respuestas": ["often"] },
      { "instruccion": "Completa con la palabra en inglés.", "pregunta": "She ___ eats meat. (nunca)", "respuestas": ["never"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "A veces voy al cine.", "respuestas": ["I sometimes go to the movies", "Sometimes I go to the movies", "I sometimes go to the cinema", "Sometimes I go to the cinema"] },
      { "instruccion": "Traduce al inglés.", "pregunta": "Él siempre está contento.", "respuestas": ["He is always happy", "He's always happy"] },
      { "instruccion": "Corrige la oración.", "pregunta": "I don't never watch TV.", "respuestas": ["I never watch TV", "I don't ever watch TV"] }
    ],
    "examen": [
      { "tipo": "opcion", "pregunta": "She ___ late. (nunca)", "opciones": ["is never", "never is", "never", "is not never"] },
      { "tipo": "opcion", "pregunta": "I ___ coffee in the morning. (siempre)", "opciones": ["always drink", "drink always", "always drinks", "am always drink"] },
      { "tipo": "opcion", "pregunta": "How ___ do you go swimming?", "opciones": ["often", "many", "much", "time"] },
      { "tipo": "opcion", "pregunta": "We play tennis ___ a week. (dos veces)", "opciones": ["twice", "two", "second", "two time"] },
      { "tipo": "opcion", "pregunta": "¿Cuál significa «casi nunca»?", "opciones": ["hardly ever", "usually", "often", "sometimes"] },
      { "tipo": "opcion", "pregunta": "My brother ___ plays video games.", "opciones": ["usually", "usual", "use", "usually is"] },
      { "tipo": "listening", "audio": "I go to the movies once a month.", "pregunta": "¿Qué tan seguido va al cine?", "opciones": ["Una vez al mes", "Una vez a la semana", "Dos veces al mes", "Nunca"] },
      { "tipo": "listening", "audio": "My sister is never at home on Saturdays. She always goes dancing.", "pregunta": "¿Qué hace la hermana los sábados?", "opciones": ["Va a bailar", "Se queda en casa", "Va a nadar", "Trabaja"] },
      { "tipo": "escribir", "pregunta": "Traduce: Normalmente me quedo en casa.", "respuestas": ["I usually stay home", "I usually stay at home"] },
      { "tipo": "escribir", "pregunta": "Traduce: ¿Qué haces en tu tiempo libre?", "respuestas": ["What do you do in your free time"] }
    ]
  },
  {
    "id": "a1-17",
    "num": 17,
    "titulo": "Preguntas con Wh-",
    "contexto": "Conocer a alguien",
    "explicacion": {
      "es": [
        "Las **palabras de pregunta** (*Wh- words*) van **al principio** de la pregunta: *what* (qué, cuál), *where* (dónde), *who* (quién), *when* (cuándo), *why* (por qué), *how* (cómo), *which* (cuál, entre opciones).",
        "Con el verbo **to be**: palabra de pregunta + *am / is / are* + sujeto: ***Where are** you from? **What is** your name? **How old is** she?*",
        "Con los **demás verbos**: palabra de pregunta + ***do / does*** + sujeto + verbo: ***Where do** you live? **What does** she do?* Con *does* el verbo va sin *-s*: *Where does he **work**?*",
        "Con *how* se forman más preguntas: ***how old*** (qué edad), ***how many*** (cuántos), ***how much*** (cuánto cuesta), ***how often*** (qué tan seguido). Y ***what time*** es «a qué hora». A *why* se contesta con ***because*** (porque)."
      ],
      "tabla": {
        "columnas": [
          "Palabra",
          "Significa",
          "Ejemplo"
        ],
        "filas": [
          [
            "what",
            "qué / cuál",
            "What's your name?"
          ],
          [
            "where",
            "dónde",
            "Where do you live?"
          ],
          [
            "who",
            "quién",
            "Who is your teacher?"
          ],
          [
            "when",
            "cuándo",
            "When is your birthday?"
          ],
          [
            "why",
            "por qué",
            "Why are you tired?"
          ],
          [
            "how",
            "cómo",
            "How do you go to work?"
          ],
          [
            "how old",
            "qué edad",
            "How old are you?"
          ],
          [
            "what time",
            "a qué hora",
            "What time do you get up?"
          ]
        ]
      },
      "ojo": [
        "*Why* (por qué) se pregunta; *because* (porque) se contesta: *Why are you happy? Because it's Friday.*",
        "«¿Cómo te llamas?» se dice *What's your name?* ✅, no *How do you call?* ❌.",
        "«¿Cuántos años tienes?» se dice *How old are you?* ✅, no *How many years do you have?* ❌.",
        "Con *does* el verbo no lleva *-s*: *Where does she live?* ✅, *Where does she lives?* ❌.",
        "No olvides *do / does*: *Where do you work?* ✅, *Where you work?* ❌.",
        "*What* es para cualquier cosa; *which* es para elegir entre pocas opciones: *Which color do you want, red or blue?*"
      ],
      "en": [
        "Question words go at the start: what, where, who, when, why, how, which.",
        "With to be: question word, then am, is or are, then the subject. Where are you from?",
        "With other verbs, use do or does: Where do you live? What does she do?",
        "How old, how many and what time are useful questions. Answer why with because."
      ]
    },
    "vocabulario": [
      {
        "en": "what",
        "es": "qué, cuál",
        "imagen": "Persona mirando con curiosidad una caja de regalo misteriosa con un gran signo de interrogación",
        "ejemplo": [
          "What is your favorite color?",
          "¿Cuál es tu color favorito?"
        ]
      },
      {
        "en": "where",
        "es": "dónde",
        "imagen": "Turista con un mapa abierto mirando a su alrededor en una calle de la ciudad",
        "ejemplo": [
          "Where is the bathroom?",
          "¿Dónde está el baño?"
        ]
      },
      {
        "en": "who",
        "es": "quién",
        "imagen": "Persona mirando por la mirilla de la puerta para ver quién toca",
        "ejemplo": [
          "Who is that woman?",
          "¿Quién es esa mujer?"
        ]
      },
      {
        "en": "when",
        "es": "cuándo",
        "imagen": "Persona mirando un calendario en la pared con cara de duda",
        "ejemplo": [
          "When is the party?",
          "¿Cuándo es la fiesta?"
        ]
      },
      {
        "en": "why",
        "es": "por qué",
        "imagen": "Niña preguntándole algo a su papá con cara de curiosidad",
        "ejemplo": [
          "Why are you sad?",
          "¿Por qué estás triste?"
        ]
      },
      {
        "en": "how",
        "es": "cómo",
        "imagen": "Persona leyendo las instrucciones para armar un mueble con cara de duda",
        "ejemplo": [
          "How do you say «hola» in English?",
          "¿Cómo se dice «hola» en inglés?"
        ]
      },
      {
        "en": "which",
        "es": "cuál (entre opciones)",
        "imagen": "Persona eligiendo entre dos playeras de colores en una tienda",
        "ejemplo": [
          "Which shirt do you like?",
          "¿Cuál playera te gusta?"
        ]
      },
      {
        "en": "how old",
        "es": "qué edad",
        "imagen": "Pastel de cumpleaños con velas en forma de número 30",
        "ejemplo": [
          "How old is your brother?",
          "¿Cuántos años tiene tu hermano?"
        ]
      },
      {
        "en": "how many",
        "es": "cuántos",
        "imagen": "Persona contando manzanas rojas sobre una mesa",
        "ejemplo": [
          "How many cousins do you have?",
          "¿Cuántos primos tienes?"
        ]
      },
      {
        "en": "how much",
        "es": "cuánto (cuesta)",
        "imagen": "Clienta preguntando el precio de una blusa en una tienda de ropa",
        "ejemplo": [
          "How much is this bag?",
          "¿Cuánto cuesta esta bolsa?"
        ]
      },
      {
        "en": "what time",
        "es": "a qué hora",
        "imagen": "Persona señalando su reloj de pulsera",
        "ejemplo": [
          "What time do you have lunch?",
          "¿A qué hora comes?"
        ]
      },
      {
        "en": "because",
        "es": "porque",
        "imagen": "Persona con paraguas señalando la lluvia mientras explica algo a un amigo",
        "ejemplo": [
          "I'm tired because I work a lot.",
          "Estoy cansado porque trabajo mucho."
        ]
      },
      {
        "en": "a question",
        "es": "una pregunta",
        "imagen": "Alumna levantando la mano para hacer una pregunta en clase",
        "ejemplo": [
          "Can I ask a question?",
          "¿Puedo hacer una pregunta?"
        ]
      },
      {
        "en": "an answer",
        "es": "una respuesta",
        "imagen": "Alumno contestando con seguridad frente al pizarrón mientras la maestra sonríe",
        "ejemplo": [
          "That's the right answer!",
          "¡Esa es la respuesta correcta!"
        ]
      },
      {
        "en": "meet",
        "es": "conocer (a alguien)",
        "imagen": "Dos personas dándose la mano y sonriendo al conocerse en una fiesta",
        "ejemplo": [
          "I want to meet your family.",
          "Quiero conocer a tu familia."
        ]
      },
      {
        "en": "new friend",
        "es": "amigo nuevo",
        "imagen": "Dos jóvenes platicando y riendo en la cafetería de la escuela",
        "ejemplo": [
          "This is my new friend, Ana.",
          "Ella es mi amiga nueva, Ana."
        ]
      }
    ],
    "grupos": [
      {
        "id": "conocer",
        "titulo": "Preguntas para conocer a alguien",
        "icono": "🙋",
        "patron": [
          "What's your name?",
          "Where are you from?",
          "Where do you live?"
        ],
        "palabras": [
          {
            "en": "What's your name?",
            "es": "¿Cómo te llamas?",
            "imagen": "Mujer sonriendo y extendiendo la mano a una compañera nueva en la oficina",
            "ejemplo": [
              "What's your name? My name is Sara.",
              "¿Cómo te llamas? Me llamo Sara."
            ]
          },
          {
            "en": "Where are you from?",
            "es": "¿De dónde eres?",
            "imagen": "Dos viajeros platicando en un aeropuerto junto a un globo terráqueo",
            "ejemplo": [
              "Where are you from? I'm from Peru.",
              "¿De dónde eres? Soy de Perú."
            ]
          },
          {
            "en": "Where do you live?",
            "es": "¿Dónde vives?",
            "imagen": "Persona señalando un edificio de departamentos a su amiga",
            "ejemplo": [
              "Where do you live? I live near the park.",
              "¿Dónde vives? Vivo cerca del parque."
            ]
          },
          {
            "en": "How old are you?",
            "es": "¿Cuántos años tienes?",
            "imagen": "Joven soplando las velas de su pastel de cumpleaños con sus amigos",
            "ejemplo": [
              "How old are you? I'm twenty-eight.",
              "¿Cuántos años tienes? Tengo veintiocho."
            ]
          },
          {
            "en": "What do you do?",
            "es": "¿A qué te dedicas?",
            "imagen": "Dos personas platicando en una fiesta, una con un portafolio y la otra con bata de doctora",
            "ejemplo": [
              "What do you do? I'm a teacher.",
              "¿A qué te dedicas? Soy maestro."
            ]
          },
          {
            "en": "Where do you work?",
            "es": "¿Dónde trabajas?",
            "imagen": "Persona entrando a un edificio de oficinas con su gafete",
            "ejemplo": [
              "Where do you work? I work in a hotel.",
              "¿Dónde trabajas? Trabajo en un hotel."
            ]
          },
          {
            "en": "Who do you live with?",
            "es": "¿Con quién vives?",
            "imagen": "Familia sonriendo en la sala de su casa",
            "ejemplo": [
              "Who do you live with? I live with my parents.",
              "¿Con quién vives? Vivo con mis papás."
            ]
          },
          {
            "en": "What languages do you speak?",
            "es": "¿Qué idiomas hablas?",
            "imagen": "Personas de distintos países platicando alrededor de una mesa",
            "ejemplo": [
              "What languages do you speak? Spanish and English.",
              "¿Qué idiomas hablas? Español e inglés."
            ]
          },
          {
            "en": "What's your phone number?",
            "es": "¿Cuál es tu número de teléfono?",
            "imagen": "Dos amigos intercambiando números en sus celulares",
            "ejemplo": [
              "What's your phone number?",
              "¿Cuál es tu número de teléfono?"
            ]
          },
          {
            "en": "What's your email?",
            "es": "¿Cuál es tu correo?",
            "imagen": "Persona escribiendo en su laptop un correo electrónico",
            "ejemplo": [
              "What's your email?",
              "¿Cuál es tu correo?"
            ]
          },
          {
            "en": "When is your birthday?",
            "es": "¿Cuándo es tu cumpleaños?",
            "imagen": "Calendario con un día marcado con globos y un pastel",
            "ejemplo": [
              "When is your birthday? It's in May.",
              "¿Cuándo es tu cumpleaños? Es en mayo."
            ]
          },
          {
            "en": "What's your favorite food?",
            "es": "¿Cuál es tu comida favorita?",
            "imagen": "Persona feliz frente a un plato de tacos",
            "ejemplo": [
              "What's your favorite food? Tacos!",
              "¿Cuál es tu comida favorita? ¡Los tacos!"
            ]
          }
        ]
      },
      {
        "id": "respuestas",
        "titulo": "Cómo responder",
        "icono": "💬",
        "patron": [
          "I'm from Mexico",
          "I live in an apartment",
          "I'm thirty years old"
        ],
        "palabras": [
          {
            "en": "I'm from Mexico",
            "es": "soy de México",
            "imagen": "Persona sonriendo con una bandera de México en la mano",
            "ejemplo": [
              "I'm from Mexico, from Guadalajara.",
              "Soy de México, de Guadalajara."
            ]
          },
          {
            "en": "I live in an apartment",
            "es": "vivo en un departamento",
            "imagen": "Mujer abriendo la puerta de su departamento con las llaves",
            "ejemplo": [
              "I live in an apartment downtown.",
              "Vivo en un departamento en el centro."
            ]
          },
          {
            "en": "I live in a house",
            "es": "vivo en una casa",
            "imagen": "Familia frente a una casa con jardín",
            "ejemplo": [
              "We live in a big house.",
              "Vivimos en una casa grande."
            ]
          },
          {
            "en": "I'm thirty years old",
            "es": "tengo treinta años",
            "imagen": "Hombre celebrando su cumpleaños con un pastel con el número 30",
            "ejemplo": [
              "I'm thirty years old.",
              "Tengo treinta años."
            ]
          },
          {
            "en": "I work in a hospital",
            "es": "trabajo en un hospital",
            "imagen": "Enfermero caminando por el pasillo de un hospital",
            "ejemplo": [
              "My mom works in a hospital.",
              "Mi mamá trabaja en un hospital."
            ]
          },
          {
            "en": "I speak Spanish and English",
            "es": "hablo español e inglés",
            "imagen": "Persona platicando por videollamada con amigos de otro país",
            "ejemplo": [
              "I speak Spanish and a little English.",
              "Hablo español y un poco de inglés."
            ]
          },
          {
            "en": "I live with my parents",
            "es": "vivo con mis papás",
            "imagen": "Joven cenando en la mesa con su mamá y su papá",
            "ejemplo": [
              "I live with my parents and my sister.",
              "Vivo con mis papás y mi hermana."
            ]
          },
          {
            "en": "I live alone",
            "es": "vivo solo",
            "imagen": "Persona leyendo tranquila en su pequeño departamento con su gato",
            "ejemplo": [
              "My grandma lives alone.",
              "Mi abuela vive sola."
            ]
          },
          {
            "en": "my birthday is in May",
            "es": "mi cumpleaños es en mayo",
            "imagen": "Hoja de calendario de mayo con un día marcado con un globo",
            "ejemplo": [
              "My birthday is in May.",
              "Mi cumpleaños es en mayo."
            ]
          },
          {
            "en": "because I'm hungry",
            "es": "porque tengo hambre",
            "imagen": "Persona sobándose la panza frente al refrigerador abierto",
            "ejemplo": [
              "I'm eating because I'm hungry.",
              "Estoy comiendo porque tengo hambre."
            ]
          }
        ]
      },
      {
        "id": "forma",
        "titulo": "¿Cómo se forma la pregunta?",
        "icono": "❓",
        "patron": [
          "Where is she from?",
          "What does he do?",
          "Where do they live?"
        ],
        "palabras": [
          {
            "en": "Where is she from?",
            "es": "¿De dónde es ella?",
            "imagen": "Dos amigos mirando a una muchacha nueva que llega con su maleta",
            "ejemplo": [
              "Where is she from? She's from Chile.",
              "¿De dónde es ella? Es de Chile."
            ]
          },
          {
            "en": "What does he do?",
            "es": "¿A qué se dedica él?",
            "imagen": "Chef preparando comida en la cocina de un restaurante",
            "ejemplo": [
              "What does he do? He's a chef.",
              "¿A qué se dedica él? Es chef."
            ]
          },
          {
            "en": "Where do they live?",
            "es": "¿Dónde viven ellos?",
            "imagen": "Pareja saludando desde el balcón de su casa",
            "ejemplo": [
              "Where do they live? They live in Lima.",
              "¿Dónde viven? Viven en Lima."
            ]
          },
          {
            "en": "Who is that man?",
            "es": "¿Quién es ese hombre?",
            "imagen": "Dos personas señalando discretamente a un hombre de traje en una reunión",
            "ejemplo": [
              "Who is that man? He's my boss.",
              "¿Quién es ese hombre? Es mi jefe."
            ]
          },
          {
            "en": "When does the class start?",
            "es": "¿Cuándo empieza la clase?",
            "imagen": "Alumnos entrando a un salón mientras el reloj marca las nueve",
            "ejemplo": [
              "When does the class start? At nine.",
              "¿Cuándo empieza la clase? A las nueve."
            ]
          },
          {
            "en": "Why are you sad?",
            "es": "¿Por qué estás triste?",
            "imagen": "Amiga consolando a otra que está triste en una banca",
            "ejemplo": [
              "Why are you sad? Because my cat is sick.",
              "¿Por qué estás triste? Porque mi gato está enfermo."
            ]
          },
          {
            "en": "How do you go to work?",
            "es": "¿Cómo te vas al trabajo?",
            "imagen": "Persona subiendo al metro con su mochila en la mañana",
            "ejemplo": [
              "How do you go to work? By bus.",
              "¿Cómo te vas al trabajo? En autobús."
            ]
          },
          {
            "en": "How many brothers do you have?",
            "es": "¿Cuántos hermanos tienes?",
            "imagen": "Tres hermanos abrazados sonriendo para una foto",
            "ejemplo": [
              "How many brothers do you have? Two.",
              "¿Cuántos hermanos tienes? Dos."
            ]
          },
          {
            "en": "What time do you get up?",
            "es": "¿A qué hora te levantas?",
            "imagen": "Persona apagando el despertador en la mañana",
            "ejemplo": [
              "What time do you get up? At six.",
              "¿A qué hora te levantas? A las seis."
            ]
          },
          {
            "en": "Which bus do you take?",
            "es": "¿Qué autobús tomas?",
            "imagen": "Personas en una parada mirando dos autobuses distintos que llegan",
            "ejemplo": [
              "Which bus do you take? The number 5.",
              "¿Qué autobús tomas? El número 5."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "What's your name? My name is Luis.",
        "es": "¿Cómo te llamas? Me llamo Luis."
      },
      {
        "en": "Where are you from? I'm from Colombia.",
        "es": "¿De dónde eres? Soy de Colombia."
      },
      {
        "en": "How old are you? I'm twenty-five.",
        "es": "¿Cuántos años tienes? Tengo veinticinco."
      },
      {
        "en": "Where do you live? I live in an apartment.",
        "es": "¿Dónde vives? Vivo en un departamento."
      },
      {
        "en": "What does your sister do? She's a nurse.",
        "es": "¿A qué se dedica tu hermana? Es enfermera."
      },
      {
        "en": "Who is your best friend?",
        "es": "¿Quién es tu mejor amigo?",
        "imagen": "Dos mejores amigos riendo juntos y chocando las manos"
      },
      {
        "en": "When is your birthday? It's in July.",
        "es": "¿Cuándo es tu cumpleaños? Es en julio."
      },
      {
        "en": "Why are you tired? Because I work at night.",
        "es": "¿Por qué estás cansado? Porque trabajo de noche.",
        "imagen": "Hombre bostezando en la mañana después de su turno de noche"
      },
      {
        "en": "How many languages do you speak?",
        "es": "¿Cuántos idiomas hablas?"
      },
      {
        "en": "What time does the class start?",
        "es": "¿A qué hora empieza la clase?"
      }
    ],
    "frases": [
      {
        "en": "Hi! I'm Ana. What's your name?",
        "es": "¡Hola! Soy Ana. ¿Cómo te llamas?"
      },
      {
        "en": "Where are you from, and where do you live now?",
        "es": "¿De dónde eres y dónde vives ahora?"
      },
      {
        "en": "What do you do? I'm a student, and I work part-time in a café.",
        "es": "¿A qué te dedicas? Soy estudiante y trabajo medio tiempo en un café."
      },
      {
        "en": "Who do you live with? I live with my brother and our dog.",
        "es": "¿Con quién vives? Vivo con mi hermano y nuestro perro.",
        "imagen": "Dos hermanos en la sala de su casa jugando con su perro"
      },
      {
        "en": "How old is your daughter? She's six, and she goes to school.",
        "es": "¿Cuántos años tiene tu hija? Tiene seis y va a la escuela.",
        "imagen": "Niña de seis años con su mochila llegando a la escuela de la mano de su mamá"
      },
      {
        "en": "When is your birthday? It's on March 15th.",
        "es": "¿Cuándo es tu cumpleaños? Es el 15 de marzo."
      },
      {
        "en": "Why do you study English? Because I want to travel.",
        "es": "¿Por qué estudias inglés? Porque quiero viajar.",
        "imagen": "Persona estudiando inglés con un libro y una maleta lista junto a ella"
      },
      {
        "en": "How do you go to school? I walk because it's near.",
        "es": "¿Cómo te vas a la escuela? Camino porque está cerca.",
        "imagen": "Joven caminando a la escuela con su mochila por la banqueta"
      },
      {
        "en": "What's your favorite food, and what time do you have dinner?",
        "es": "¿Cuál es tu comida favorita y a qué hora cenas?"
      },
      {
        "en": "Nice to meet you! What's your phone number?",
        "es": "¡Mucho gusto! ¿Cuál es tu número de teléfono?"
      }
    ],
    "listening": [
      {
        "audio": "Where are you from? I'm from Argentina.",
        "pregunta": "¿De dónde es?",
        "opciones": [
          "De Argentina",
          "De México",
          "De España",
          "De Chile"
        ]
      },
      {
        "audio": "How old is your son? He's ten.",
        "pregunta": "¿Cuántos años tiene el hijo?",
        "opciones": [
          "Diez",
          "Dos",
          "Doce",
          "Veinte"
        ]
      },
      {
        "audio": "What does your father do? He's a taxi driver.",
        "pregunta": "¿A qué se dedica el papá?",
        "opciones": [
          "Es taxista",
          "Es maestro",
          "Es doctor",
          "Es chef"
        ]
      },
      {
        "audio": "When is your birthday? It's in December.",
        "pregunta": "¿Cuándo es su cumpleaños?",
        "opciones": [
          "En diciembre",
          "En noviembre",
          "En marzo",
          "En mayo"
        ]
      },
      {
        "audio": "Why are you happy? Because it's Friday!",
        "pregunta": "¿Por qué está contento?",
        "opciones": [
          "Porque es viernes",
          "Porque es su cumpleaños",
          "Porque tiene trabajo nuevo",
          "Porque es domingo"
        ]
      }
    ],
    "lectura": {
      "titulo": "A new classmate",
      "texto": "Today there is a new student in my English class. Her name is Yuki. She's from Japan, but now she lives in Mexico City with her husband. She's thirty-two years old and she works in a bank. I ask her: Why do you study English? She says: Because I travel a lot for my job. Yuki speaks Japanese, Spanish and a little English. Her favorite food is enchiladas! After class we drink a coffee together. She's very nice. Now she's my new friend.",
      "preguntas": [
        {
          "pregunta": "¿De dónde es Yuki?",
          "opciones": [
            "De Japón",
            "De México",
            "De China",
            "De Corea"
          ]
        },
        {
          "pregunta": "¿Dónde trabaja?",
          "opciones": [
            "En un banco",
            "En una escuela",
            "En un hotel",
            "En un hospital"
          ]
        },
        {
          "pregunta": "¿Por qué estudia inglés?",
          "opciones": [
            "Porque viaja mucho por su trabajo",
            "Porque vive en Estados Unidos",
            "Porque su esposo habla inglés",
            "Porque es maestra"
          ]
        },
        {
          "pregunta": "¿Cuál es su comida favorita?",
          "opciones": [
            "Las enchiladas",
            "El sushi",
            "Los tacos",
            "La pizza"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Ordena la pregunta.",
        "pregunta": "from / are / where / you",
        "respuestas": [
          "Where are you from"
        ]
      },
      {
        "instruccion": "Ordena la pregunta.",
        "pregunta": "do / live / where / you",
        "respuestas": [
          "Where do you live"
        ]
      },
      {
        "instruccion": "Ordena la pregunta.",
        "pregunta": "does / what / she / do",
        "respuestas": [
          "What does she do"
        ]
      },
      {
        "instruccion": "Ordena la pregunta.",
        "pregunta": "old / you / how / are",
        "respuestas": [
          "How old are you"
        ]
      },
      {
        "instruccion": "Completa con la palabra en inglés.",
        "pregunta": "___ is your birthday? (cuándo)",
        "respuestas": [
          "When"
        ]
      },
      {
        "instruccion": "Completa con la palabra en inglés.",
        "pregunta": "___ is that man? He's my uncle. (quién)",
        "respuestas": [
          "Who"
        ]
      },
      {
        "instruccion": "Completa con la palabra en inglés.",
        "pregunta": "Why are you late? ___ the bus is slow. (porque)",
        "respuestas": [
          "Because"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Cómo te llamas?",
        "respuestas": [
          "What's your name",
          "What is your name"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Dónde trabajas?",
        "respuestas": [
          "Where do you work"
        ]
      },
      {
        "instruccion": "Corrige la pregunta.",
        "pregunta": "Where does she lives?",
        "respuestas": [
          "Where does she live"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "___ are you from?",
        "opciones": [
          "Where",
          "Who",
          "What time",
          "How many"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cómo se dice «¿Cuántos años tienes?»?",
        "opciones": [
          "How old are you?",
          "How many years do you have?",
          "How old do you have?",
          "How years are you?"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Where ___ your brother work?",
        "opciones": [
          "does",
          "do",
          "is",
          "are"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "What ___ your name?",
        "opciones": [
          "is",
          "are",
          "do",
          "does"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Why are you happy? ___ it's my birthday.",
        "opciones": [
          "Because",
          "Why",
          "When",
          "Because of"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ brothers do you have? Three.",
        "opciones": [
          "How many",
          "How much",
          "How old",
          "What time"
        ]
      },
      {
        "tipo": "listening",
        "audio": "What's your name? My name is Daniel.",
        "pregunta": "¿Cómo se llama?",
        "opciones": [
          "Daniel",
          "David",
          "Diana",
          "Dennis"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Where do you live? I live in a small house with my grandmother.",
        "pregunta": "¿Con quién vive?",
        "opciones": [
          "Con su abuela",
          "Con sus papás",
          "Solo",
          "Con su hermano"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¿De dónde eres?",
        "respuestas": [
          "Where are you from"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¿A qué te dedicas?",
        "respuestas": [
          "What do you do"
        ]
      }
    ]
  },
  {
    "id": "a1-18",
    "num": 18,
    "titulo": "Pronombres de objeto (me, him, them…)",
    "contexto": "Amigos y familia",
    "explicacion": {
      "es": [
        "Los **pronombres de sujeto** (*I, you, he, she, it, we, they*) hacen la acción y van **antes** del verbo: ***She** calls…*",
        "Los **pronombres de objeto** (*me, you, him, her, it, us, them*) **reciben** la acción y van **después** del verbo: *She calls **me**.* (Ella **me** llama.)",
        "En español el pronombre va antes del verbo (*te quiero*); en inglés va **después**: *I love **you**.*",
        "También van **después de una preposición** (*with, for, to, at, about*): *Come **with me**. This gift is **for her**. Look **at them**.*"
      ],
      "tabla": {
        "columnas": [
          "Sujeto",
          "Objeto",
          "Ejemplo"
        ],
        "filas": [
          [
            "I",
            "me",
            "Call me."
          ],
          [
            "you",
            "you",
            "I love you."
          ],
          [
            "he",
            "him",
            "I know him."
          ],
          [
            "she",
            "her",
            "I miss her."
          ],
          [
            "it",
            "it",
            "I like it."
          ],
          [
            "we",
            "us",
            "Wait for us."
          ],
          [
            "they",
            "them",
            "I visit them."
          ]
        ]
      },
      "ojo": [
        "Después del verbo va el pronombre de objeto: *She loves **him*** ✅, no *She loves he* ❌.",
        "Después de una preposición también: *Come with **me*** ✅, no *Come with I* ❌.",
        "El orden es al revés que en español: *te quiero* = *I love **you*** ✅, no *I you love* ❌.",
        "*You* e *it* son iguales como sujeto y como objeto: *You know **it**. I know **you**.*",
        "*Her* sirve para dos cosas: *I see **her*** (la veo) y ***her** car* (su coche, de ella).",
        "*Them* es para personas y para cosas: *I visit my parents → I visit **them**. I like the shoes → I like **them**.*"
      ],
      "en": [
        "Subject pronouns come before the verb: I, you, he, she, it, we, they.",
        "Object pronouns come after the verb: me, you, him, her, it, us, them. She calls me.",
        "We also use them after with, for, to and at: Come with me. This is for her.",
        "I love you. I know him. I miss her. I visit them on Sundays."
      ]
    },
    "vocabulario": [
      {
        "en": "Help me!",
        "es": "¡Ayúdame!",
        "imagen": "Persona cargando muchas cajas pidiendo ayuda a su amigo",
        "ejemplo": [
          "Can you help me, please?",
          "¿Me ayudas, por favor?"
        ]
      },
      {
        "en": "I love you.",
        "es": "te quiero, te amo",
        "imagen": "Mamá abrazando a su hijo pequeño con mucho cariño",
        "ejemplo": [
          "I love you, Mom!",
          "¡Te quiero, mamá!"
        ]
      },
      {
        "en": "Call him.",
        "es": "llámalo (a él)",
        "imagen": "Mujer marcando en su celular mientras ve la foto de su hermano",
        "ejemplo": [
          "Call him tonight.",
          "Llámalo esta noche."
        ]
      },
      {
        "en": "Ask her.",
        "es": "pregúntale (a ella)",
        "imagen": "Joven señalando a su compañera para que le pregunten a ella",
        "ejemplo": [
          "I don't know. Ask her!",
          "No sé. ¡Pregúntale a ella!"
        ]
      },
      {
        "en": "I like it.",
        "es": "me gusta (eso)",
        "imagen": "Persona probando un pastel y sonriendo con el pulgar arriba",
        "ejemplo": [
          "This cake is great. I like it!",
          "Este pastel está muy rico. ¡Me gusta!"
        ]
      },
      {
        "en": "Wait for us!",
        "es": "¡Espéranos!",
        "imagen": "Dos amigos corriendo detrás de un amigo que ya va adelante en la calle",
        "ejemplo": [
          "Wait for us! We're coming!",
          "¡Espéranos! ¡Ya vamos!"
        ]
      },
      {
        "en": "Look at them.",
        "es": "míralos",
        "imagen": "Abuela mirando con ternura a sus nietos que juegan en el jardín",
        "ejemplo": [
          "Look at them! They're so cute.",
          "¡Míralos! Son muy lindos."
        ]
      },
      {
        "en": "visit",
        "es": "visitar",
        "imagen": "Familia llegando con flores a la casa de los abuelos",
        "ejemplo": [
          "I visit my grandparents on Sundays.",
          "Visito a mis abuelos los domingos."
        ]
      },
      {
        "en": "call",
        "es": "llamar (por teléfono)",
        "imagen": "Joven hablando por teléfono con su mamá y sonriendo",
        "ejemplo": [
          "My sister calls me every day.",
          "Mi hermana me llama todos los días."
        ]
      },
      {
        "en": "help",
        "es": "ayudar",
        "imagen": "Papá ayudando a su hija con la tarea en la mesa",
        "ejemplo": [
          "I help my brother with his homework.",
          "Ayudo a mi hermano con su tarea."
        ]
      },
      {
        "en": "miss",
        "es": "extrañar",
        "imagen": "Persona mirando con nostalgia una foto de su familia en el celular",
        "ejemplo": [
          "I miss my friends.",
          "Extraño a mis amigos."
        ]
      },
      {
        "en": "hug",
        "es": "abrazar",
        "imagen": "Dos amigas abrazándose felices al verse en el aeropuerto",
        "ejemplo": [
          "My grandma always hugs me.",
          "Mi abuela siempre me abraza."
        ]
      },
      {
        "en": "invite",
        "es": "invitar",
        "imagen": "Persona entregando una invitación de cumpleaños a su amigo",
        "ejemplo": [
          "We invite our friends to dinner.",
          "Invitamos a nuestros amigos a cenar."
        ]
      },
      {
        "en": "text",
        "es": "mandar mensaje",
        "imagen": "Joven escribiendo un mensaje en su celular con una sonrisa",
        "ejemplo": [
          "Text me when you get home.",
          "Mándame un mensaje cuando llegues a casa."
        ]
      },
      {
        "en": "wait for",
        "es": "esperar (a alguien)",
        "imagen": "Persona esperando a su amigo afuera del cine mirando su reloj",
        "ejemplo": [
          "I'm waiting for my friend.",
          "Estoy esperando a mi amigo."
        ]
      },
      {
        "en": "listen to",
        "es": "escuchar",
        "imagen": "Amiga escuchando con atención a otra que le cuenta algo en una banca",
        "ejemplo": [
          "Listen to me, please.",
          "Escúchame, por favor."
        ]
      }
    ],
    "grupos": [
      {
        "id": "preposicion",
        "titulo": "Con quién, para quién",
        "icono": "🤝",
        "patron": [
          "with me",
          "for her",
          "with them"
        ],
        "palabras": [
          {
            "en": "with me",
            "es": "conmigo",
            "imagen": "Amigo invitando a otro a caminar con él por el parque",
            "ejemplo": [
              "Come with me!",
              "¡Ven conmigo!"
            ]
          },
          {
            "en": "with you",
            "es": "contigo",
            "imagen": "Pareja de amigos sentados juntos en una banca platicando",
            "ejemplo": [
              "I want to go with you.",
              "Quiero ir contigo."
            ]
          },
          {
            "en": "with him",
            "es": "con él",
            "imagen": "Niña caminando de la mano con su papá",
            "ejemplo": [
              "I go to school with him.",
              "Voy a la escuela con él."
            ]
          },
          {
            "en": "for her",
            "es": "para ella",
            "imagen": "Hombre dándole un ramo de flores a su esposa",
            "ejemplo": [
              "These flowers are for her.",
              "Estas flores son para ella."
            ]
          },
          {
            "en": "with us",
            "es": "con nosotros",
            "imagen": "Grupo de amigos invitando a otro a sentarse en su mesa",
            "ejemplo": [
              "Have dinner with us!",
              "¡Cena con nosotros!"
            ]
          },
          {
            "en": "for them",
            "es": "para ellos",
            "imagen": "Mamá sirviendo la comida a sus hijos en la mesa",
            "ejemplo": [
              "I cook for them every day.",
              "Cocino para ellos todos los días."
            ]
          },
          {
            "en": "about it",
            "es": "de eso, sobre eso",
            "imagen": "Dos amigos platicando seriamente de una noticia en el celular",
            "ejemplo": [
              "Let's talk about it.",
              "Hablemos de eso."
            ]
          },
          {
            "en": "to me",
            "es": "a mí",
            "imagen": "Amigo explicándole algo a otro que escucha con atención",
            "ejemplo": [
              "Please talk to me.",
              "Por favor, háblame."
            ]
          },
          {
            "en": "next to her",
            "es": "junto a ella",
            "imagen": "Hermano sentado junto a su hermana en el sofá",
            "ejemplo": [
              "I sit next to her.",
              "Me siento junto a ella."
            ]
          },
          {
            "en": "without them",
            "es": "sin ellos",
            "imagen": "Persona sola en una mesa de restaurante mirando su reloj",
            "ejemplo": [
              "I can't start without them.",
              "No puedo empezar sin ellos."
            ]
          }
        ]
      },
      {
        "id": "familia",
        "titulo": "Con la familia y los amigos",
        "icono": "👨‍👩‍👧",
        "patron": [
          "I visit them",
          "She calls me",
          "We help him"
        ],
        "palabras": [
          {
            "en": "I visit them",
            "es": "los visito",
            "imagen": "Persona tocando la puerta de la casa de sus papás con un pastel",
            "ejemplo": [
              "I visit them every Sunday.",
              "Los visito todos los domingos."
            ]
          },
          {
            "en": "She calls me",
            "es": "ella me llama",
            "imagen": "Mujer hablando por teléfono con su mejor amiga desde su casa",
            "ejemplo": [
              "She calls me every night.",
              "Ella me llama todas las noches."
            ]
          },
          {
            "en": "We help him",
            "es": "lo ayudamos",
            "imagen": "Dos amigos ayudando a otro a cargar un sofá en la mudanza",
            "ejemplo": [
              "We help him with the boxes.",
              "Lo ayudamos con las cajas."
            ]
          },
          {
            "en": "I miss her",
            "es": "la extraño",
            "imagen": "Joven mirando la foto de su abuela con cariño",
            "ejemplo": [
              "My grandma lives far away. I miss her.",
              "Mi abuela vive lejos. La extraño."
            ]
          },
          {
            "en": "Grandma hugs us",
            "es": "la abuela nos abraza",
            "imagen": "Abuela abrazando a sus dos nietos en la puerta de su casa",
            "ejemplo": [
              "Grandma hugs us at the door.",
              "La abuela nos abraza en la puerta."
            ]
          },
          {
            "en": "I text him",
            "es": "le mando mensaje",
            "imagen": "Joven escribiéndole un mensaje a su amigo en el autobús",
            "ejemplo": [
              "I text him every morning.",
              "Le mando mensaje todas las mañanas."
            ]
          },
          {
            "en": "They invite us",
            "es": "nos invitan",
            "imagen": "Vecinos invitando a una pareja a pasar a su fiesta",
            "ejemplo": [
              "They invite us to their party.",
              "Nos invitan a su fiesta."
            ]
          },
          {
            "en": "I listen to her",
            "es": "la escucho",
            "imagen": "Hijo escuchando con atención a su mamá en la cocina",
            "ejemplo": [
              "My mom gives good advice. I listen to her.",
              "Mi mamá da buenos consejos. La escucho."
            ]
          },
          {
            "en": "Dad takes me to school",
            "es": "papá me lleva a la escuela",
            "imagen": "Papá dejando a su hija en la puerta de la escuela",
            "ejemplo": [
              "My dad takes me to school.",
              "Mi papá me lleva a la escuela."
            ]
          },
          {
            "en": "I meet them",
            "es": "me veo con ellos",
            "imagen": "Amigos saludándose al encontrarse en una cafetería",
            "ejemplo": [
              "I meet them at the café on Fridays.",
              "Me veo con ellos en el café los viernes."
            ]
          }
        ]
      },
      {
        "id": "orden",
        "titulo": "¿Dónde va el pronombre?",
        "icono": "➡️",
        "patron": [
          "She knows him",
          "He likes her",
          "Can you help me?"
        ],
        "palabras": [
          {
            "en": "She knows him",
            "es": "ella lo conoce",
            "imagen": "Mujer saludando con alegría a un amigo que reconoce en la calle",
            "ejemplo": [
              "She knows him from school.",
              "Ella lo conoce de la escuela."
            ]
          },
          {
            "en": "He likes her",
            "es": "ella le gusta",
            "imagen": "Joven mirando con una sonrisa tímida a una compañera en la biblioteca",
            "ejemplo": [
              "He likes her, but he's shy.",
              "Ella le gusta, pero es tímido."
            ]
          },
          {
            "en": "We understand it",
            "es": "lo entendemos",
            "imagen": "Alumnos sonriendo y asintiendo frente al pizarrón",
            "ejemplo": [
              "The lesson is easy. We understand it.",
              "La lección es fácil. La entendemos."
            ]
          },
          {
            "en": "Can you help me?",
            "es": "¿me ayudas?",
            "imagen": "Turista pidiendo ayuda a una persona en la calle con un mapa",
            "ejemplo": [
              "Excuse me, can you help me?",
              "Disculpe, ¿me puede ayudar?"
            ]
          },
          {
            "en": "Give it to me",
            "es": "dámelo",
            "imagen": "Niño pidiéndole a su hermano el control de la tele",
            "ejemplo": [
              "Give it to me, please.",
              "Dámelo, por favor."
            ]
          },
          {
            "en": "I don't know them",
            "es": "no los conozco",
            "imagen": "Persona mirando confundida a un grupo de desconocidos en una fiesta",
            "ejemplo": [
              "Who are they? I don't know them.",
              "¿Quiénes son? No los conozco."
            ]
          },
          {
            "en": "Do you like it?",
            "es": "¿te gusta?",
            "imagen": "Mujer mostrando su vestido nuevo a su amiga",
            "ejemplo": [
              "I have a new dress. Do you like it?",
              "Tengo un vestido nuevo. ¿Te gusta?"
            ]
          },
          {
            "en": "Tell him",
            "es": "dile (a él)",
            "imagen": "Amiga susurrándole algo a otra mientras señala a un muchacho",
            "ejemplo": [
              "Tell him the news!",
              "¡Dile la noticia!"
            ]
          },
          {
            "en": "I love them",
            "es": "los quiero",
            "imagen": "Persona abrazando a sus dos perros en el sofá",
            "ejemplo": [
              "My dogs? I love them!",
              "¿Mis perros? ¡Los quiero!"
            ]
          },
          {
            "en": "Look at me",
            "es": "mírame",
            "imagen": "Fotógrafo pidiendo a una niña que mire a la cámara",
            "ejemplo": [
              "Look at me and smile!",
              "¡Mírame y sonríe!"
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "My sister calls me every day.",
        "es": "Mi hermana me llama todos los días."
      },
      {
        "en": "I love you, Mom!",
        "es": "¡Te quiero, mamá!"
      },
      {
        "en": "Do you know him? He's my cousin.",
        "es": "¿Lo conoces? Es mi primo.",
        "imagen": "Joven presentando a su primo a una amiga en una fiesta"
      },
      {
        "en": "I miss my grandma. I call her every week.",
        "es": "Extraño a mi abuela. La llamo cada semana."
      },
      {
        "en": "This pizza is great. I like it!",
        "es": "Esta pizza está muy rica. ¡Me gusta!",
        "imagen": "Amigos comiendo pizza y uno levantando el pulgar"
      },
      {
        "en": "Come with us to the park!",
        "es": "¡Ven con nosotros al parque!"
      },
      {
        "en": "My friends are great. I meet them every Friday.",
        "es": "Mis amigos son geniales. Me veo con ellos cada viernes."
      },
      {
        "en": "This present is for you.",
        "es": "Este regalo es para ti.",
        "imagen": "Persona dándole un regalo envuelto a su amiga"
      },
      {
        "en": "Listen to me, please.",
        "es": "Escúchame, por favor."
      },
      {
        "en": "Where are the keys? I can't find them.",
        "es": "¿Dónde están las llaves? No las encuentro.",
        "imagen": "Persona buscando sus llaves en el sofá con cara de preocupación"
      }
    ],
    "frases": [
      {
        "en": "My parents live in another city, so I visit them once a month.",
        "es": "Mis papás viven en otra ciudad, así que los visito una vez al mes."
      },
      {
        "en": "My best friend is Laura. I see her every day at work.",
        "es": "Mi mejor amiga es Laura. La veo todos los días en el trabajo.",
        "imagen": "Dos amigas trabajando juntas en la oficina y riendo"
      },
      {
        "en": "My little brother has a problem with math, so I help him.",
        "es": "Mi hermanito tiene problemas con las matemáticas, así que lo ayudo."
      },
      {
        "en": "We have a new neighbor. Let's invite him to dinner!",
        "es": "Tenemos un vecino nuevo. ¡Invitémoslo a cenar!",
        "imagen": "Pareja tocando la puerta del vecino nuevo con un pastel"
      },
      {
        "en": "My grandparents are very kind. They always give us presents.",
        "es": "Mis abuelos son muy buenos. Siempre nos dan regalos.",
        "imagen": "Abuelos dándoles regalos a sus nietos en Navidad"
      },
      {
        "en": "I don't understand this word. Can you explain it to me?",
        "es": "No entiendo esta palabra. ¿Me la puedes explicar?",
        "imagen": "Alumna señalando una palabra en su libro y preguntándole a su compañero"
      },
      {
        "en": "Where is Tom? I need to talk to him.",
        "es": "¿Dónde está Tom? Necesito hablar con él.",
        "imagen": "Persona buscando a alguien en una oficina con cara de prisa"
      },
      {
        "en": "My cousins live in Canada, and I miss them a lot.",
        "es": "Mis primos viven en Canadá y los extraño mucho.",
        "imagen": "Persona en videollamada con sus primos que viven en otro país"
      },
      {
        "en": "Text me when you get home, OK?",
        "es": "Mándame un mensaje cuando llegues a casa, ¿sí?"
      },
      {
        "en": "We love our dog, and he loves us too.",
        "es": "Queremos a nuestro perro y él también nos quiere.",
        "imagen": "Familia jugando con su perro en el jardín"
      }
    ],
    "listening": [
      {
        "audio": "My sister calls me every night.",
        "pregunta": "¿Quién lo llama todas las noches?",
        "opciones": [
          "Su hermana",
          "Su mamá",
          "Su amiga",
          "Su abuela"
        ]
      },
      {
        "audio": "I visit my grandparents on Sundays. I love them.",
        "pregunta": "¿Cuándo visita a sus abuelos?",
        "opciones": [
          "Los domingos",
          "Los sábados",
          "Los viernes",
          "Todos los días"
        ]
      },
      {
        "audio": "This book is for you. Happy birthday!",
        "pregunta": "¿Qué le regalan?",
        "opciones": [
          "Un libro",
          "Una bolsa",
          "Un pastel",
          "Flores"
        ]
      },
      {
        "audio": "Wait for us! We're at the bus stop.",
        "pregunta": "¿Dónde están?",
        "opciones": [
          "En la parada del autobús",
          "En el parque",
          "En la escuela",
          "En casa"
        ]
      },
      {
        "audio": "I don't know him. Is he your brother? No, he's my cousin.",
        "pregunta": "¿Quién es él?",
        "opciones": [
          "Su primo",
          "Su hermano",
          "Su papá",
          "Su vecino"
        ]
      }
    ],
    "lectura": {
      "titulo": "My big family",
      "texto": "My name is Carla and I have a big family. My parents live in a small town, so I visit them every month. My mom always cooks for us, and my dad tells us funny stories. I have two brothers. Leo lives with me in the city. I help him with his English, and he helps me with my car. My sister Ana lives in Spain. I miss her a lot, but I call her every Sunday. My best friend is Sofía. I see her every day at work, and on Fridays she comes with me to the gym. I love them all!",
      "preguntas": [
        {
          "pregunta": "¿Cada cuándo visita Carla a sus papás?",
          "opciones": [
            "Cada mes",
            "Cada semana",
            "Cada año",
            "Todos los días"
          ]
        },
        {
          "pregunta": "¿Con qué ayuda Carla a Leo?",
          "opciones": [
            "Con su inglés",
            "Con su coche",
            "Con su trabajo",
            "Con la comida"
          ]
        },
        {
          "pregunta": "¿Dónde vive Ana?",
          "opciones": [
            "En España",
            "En la ciudad",
            "En un pueblo",
            "En Canadá"
          ]
        },
        {
          "pregunta": "¿Qué hace Sofía con Carla los viernes?",
          "opciones": [
            "Va al gimnasio",
            "Va al cine",
            "Cocina",
            "Visita a sus papás"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Completa con el pronombre de objeto.",
        "pregunta": "I love my mom. I call ___ every day. (ella)",
        "respuestas": [
          "her"
        ]
      },
      {
        "instruccion": "Completa con el pronombre de objeto.",
        "pregunta": "Where is Tom? I can't see ___. (él)",
        "respuestas": [
          "him"
        ]
      },
      {
        "instruccion": "Completa con el pronombre de objeto.",
        "pregunta": "My friends are here. Come and meet ___! (ellos)",
        "respuestas": [
          "them"
        ]
      },
      {
        "instruccion": "Completa con el pronombre de objeto.",
        "pregunta": "Can you help ___, please? (a mí)",
        "respuestas": [
          "me"
        ]
      },
      {
        "instruccion": "Completa con el pronombre de objeto.",
        "pregunta": "Wait for ___! (nosotros)",
        "respuestas": [
          "us"
        ]
      },
      {
        "instruccion": "Ordena la oración.",
        "pregunta": "you / I / love",
        "respuestas": [
          "I love you"
        ]
      },
      {
        "instruccion": "Ordena la oración.",
        "pregunta": "him / she / knows",
        "respuestas": [
          "She knows him"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Ven conmigo.",
        "respuestas": [
          "Come with me"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "Los visito los domingos.",
        "respuestas": [
          "I visit them on Sundays"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "She loves he.",
        "respuestas": [
          "She loves him"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "My brother is in Japan. I miss ___.",
        "opciones": [
          "him",
          "he",
          "his",
          "them"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "This present is for ___. (ella)",
        "opciones": [
          "her",
          "she",
          "his",
          "they"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Come with ___! (nosotros)",
        "opciones": [
          "us",
          "we",
          "our",
          "them"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cómo se dice «te quiero»?",
        "opciones": [
          "I love you.",
          "I you love.",
          "Me love you.",
          "I love your."
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "I like these shoes. I want ___.",
        "opciones": [
          "them",
          "it",
          "they",
          "him"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Can you help ___? (a mí)",
        "opciones": [
          "me",
          "I",
          "my",
          "mine"
        ]
      },
      {
        "tipo": "listening",
        "audio": "My grandma lives with us. We love her.",
        "pregunta": "¿Con quién vive la abuela?",
        "opciones": [
          "Con ellos",
          "Sola",
          "Con su hermana",
          "Con sus amigos"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Text me after the class, OK?",
        "pregunta": "¿Cuándo debe mandar el mensaje?",
        "opciones": [
          "Después de la clase",
          "Antes de la clase",
          "En la noche",
          "Mañana"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Lo conozco.",
        "respuestas": [
          "I know him"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: Escúchame.",
        "respuestas": [
          "Listen to me"
        ]
      }
    ]
  },
  {
    "id": "a1-19",
    "num": 19,
    "titulo": "Can / can't",
    "contexto": "Habilidades y deportes",
    "explicacion": {
      "es": [
        "**Can** significa *poder* o *saber (hacer algo)*. Es igual para **todas las personas** — nunca cambia ni lleva *-s*: *I can, she can, they can*.",
        "Para decir que **no se puede**, se usa **can't** (o *cannot*): *I can't swim* (no sé nadar). No se necesita *do/does* con *can*.",
        "Para hacer **preguntas**, *can* va al principio, antes del sujeto: *Can you swim? Can she drive?* Se responde corto: *Yes, I can.* / *No, I can't.*",
        "Después de *can* / *can't* siempre va el **verbo en su forma base**, sin *to* y sin *-s*: *She can swim* ✅, *She can to swim* ❌, *She can swims* ❌."
      ],
      "tabla": {
        "columnas": [
          "Forma",
          "Significa",
          "Ejemplo"
        ],
        "filas": [
          [
            "I can",
            "yo puedo / sé",
            "I can swim."
          ],
          [
            "I can't",
            "yo no puedo / no sé",
            "I can't cook."
          ],
          [
            "Can you…?",
            "¿puedes / sabes…?",
            "Can you dance?"
          ],
          [
            "Yes, I can.",
            "sí, puedo / sé",
            "Yes, I can."
          ],
          [
            "No, I can't.",
            "no, no puedo / no sé",
            "No, I can't."
          ]
        ]
      },
      "ojo": [
        "*Can* no cambia con *he/she/it*: *He can swim* ✅, *He cans swim* ❌.",
        "Después de *can* el verbo va sin *to*: *I can swim* ✅, *I can to swim* ❌.",
        "No se usa *do/does* con *can*: *Can you swim?* ✅, *Do you can swim?* ❌.",
        "*Can* también sirve para **pedir permiso**, no solo para habilidad: *Can I use your phone?* (¿Puedo usar tu teléfono?)."
      ],
      "en": [
        "Can means to be able to do something, or to know how to do it. It never changes form: I can, she can, they can.",
        "For the negative, use can't (or cannot): I can't swim.",
        "To ask a question, put can at the start, before the subject: Can you swim? Answer short: Yes, I can. / No, I can't.",
        "After can or can't, always use the base verb, with no to and no -s: She can swim, not she can swims."
      ]
    },
    "vocabulario": [
      {
        "en": "can",
        "es": "poder, saber (hacer algo)",
        "imagen": "Persona nadando con facilidad y una gran sonrisa en una alberca",
        "ejemplo": [
          "I can swim.",
          "Yo sé nadar."
        ]
      },
      {
        "en": "can't",
        "es": "no poder, no saber",
        "imagen": "Persona desafinando frente a un micrófono de karaoke con cara de pena",
        "ejemplo": [
          "I can't sing well.",
          "No sé cantar bien."
        ]
      },
      {
        "en": "swim",
        "es": "nadar",
        "imagen": "Niño nadando estilo libre en una alberca",
        "ejemplo": [
          "Can you swim?",
          "¿Sabes nadar?"
        ]
      },
      {
        "en": "ride a bike",
        "es": "andar en bicicleta",
        "imagen": "Niña andando en bicicleta por un camino del parque",
        "ejemplo": [
          "She can ride a bike.",
          "Ella sabe andar en bicicleta."
        ]
      },
      {
        "en": "play soccer",
        "es": "jugar fútbol",
        "imagen": "Niños jugando fútbol en una cancha",
        "ejemplo": [
          "He can play soccer very well.",
          "Él sabe jugar fútbol muy bien."
        ]
      },
      {
        "en": "play tennis",
        "es": "jugar tenis",
        "imagen": "Persona golpeando una pelota de tenis en la cancha",
        "ejemplo": [
          "I can't play tennis.",
          "No sé jugar tenis."
        ]
      },
      {
        "en": "play basketball",
        "es": "jugar baloncesto",
        "imagen": "Joven encestando una pelota de baloncesto",
        "ejemplo": [
          "Can you play basketball?",
          "¿Sabes jugar baloncesto?"
        ]
      },
      {
        "en": "run fast",
        "es": "correr rápido",
        "imagen": "Corredor en una pista de atletismo a toda velocidad",
        "ejemplo": [
          "My brother can run fast.",
          "Mi hermano puede correr rápido."
        ]
      },
      {
        "en": "dance",
        "es": "bailar",
        "imagen": "Pareja bailando salsa sonriendo en una fiesta",
        "ejemplo": [
          "She can dance very well.",
          "Ella sabe bailar muy bien."
        ]
      },
      {
        "en": "sing",
        "es": "cantar",
        "imagen": "Persona cantando feliz con un micrófono",
        "ejemplo": [
          "I can't sing.",
          "No sé cantar."
        ]
      },
      {
        "en": "cook",
        "es": "cocinar",
        "imagen": "Hombre cocinando pasta en un sartén en la cocina",
        "ejemplo": [
          "My dad can cook pasta.",
          "Mi papá sabe cocinar pasta."
        ]
      },
      {
        "en": "drive",
        "es": "manejar",
        "imagen": "Persona manejando un carro sonriente en la carretera",
        "ejemplo": [
          "She can drive a car.",
          "Ella sabe manejar un carro."
        ]
      },
      {
        "en": "play the guitar",
        "es": "tocar la guitarra",
        "imagen": "Joven tocando la guitarra sentado en su cuarto",
        "ejemplo": [
          "He can play the guitar.",
          "Él sabe tocar la guitarra."
        ]
      },
      {
        "en": "climb",
        "es": "escalar",
        "imagen": "Persona escalando una pared de rocas con arnés",
        "ejemplo": [
          "Can you climb?",
          "¿Sabes escalar?"
        ]
      },
      {
        "en": "ski",
        "es": "esquiar",
        "imagen": "Persona esquiando en una montaña nevada",
        "ejemplo": [
          "I can't ski.",
          "No sé esquiar."
        ]
      },
      {
        "en": "a sport",
        "es": "un deporte",
        "imagen": "Varias pelotas deportivas juntas: fútbol, baloncesto y tenis",
        "ejemplo": [
          "What's your favorite sport?",
          "¿Cuál es tu deporte favorito?"
        ]
      }
    ],
    "grupos": [
      {
        "id": "habilidades",
        "titulo": "Puedo y no puedo",
        "icono": "💪",
        "patron": [
          "I can swim.",
          "He can't cook.",
          "She can play soccer."
        ],
        "palabras": [
          {
            "en": "I can swim.",
            "es": "Yo sé nadar.",
            "imagen": "Persona nadando feliz en una alberca al aire libre",
            "ejemplo": [
              "I can swim, but I can't dive.",
              "Yo sé nadar, pero no sé clavadismo."
            ]
          },
          {
            "en": "I can't cook.",
            "es": "No sé cocinar.",
            "imagen": "Persona viendo una olla quemada con cara de frustración",
            "ejemplo": [
              "I can't cook, so I eat out a lot.",
              "No sé cocinar, así que como afuera mucho."
            ]
          },
          {
            "en": "He can play soccer.",
            "es": "Él sabe jugar fútbol.",
            "imagen": "Niño pateando un balón de fútbol en el jardín",
            "ejemplo": [
              "He can play soccer every weekend.",
              "Él juega fútbol cada fin de semana."
            ]
          },
          {
            "en": "She can't drive.",
            "es": "Ella no sabe manejar.",
            "imagen": "Mujer joven mirando las llaves de un carro con duda",
            "ejemplo": [
              "She can't drive yet; she's learning.",
              "Ella todavía no sabe manejar; está aprendiendo."
            ]
          },
          {
            "en": "We can dance salsa.",
            "es": "Sabemos bailar salsa.",
            "imagen": "Pareja bailando salsa en una fiesta familiar",
            "ejemplo": [
              "We can dance salsa and cumbia.",
              "Sabemos bailar salsa y cumbia."
            ]
          },
          {
            "en": "They can't sing.",
            "es": "Ellos no saben cantar.",
            "imagen": "Grupo de amigos riéndose mientras cantan desafinado en un karaoke",
            "ejemplo": [
              "They can't sing, but they love karaoke.",
              "No saben cantar, pero les encanta el karaoke."
            ]
          },
          {
            "en": "My sister can ride a bike.",
            "es": "Mi hermana sabe andar en bici.",
            "imagen": "Niña sonriente andando en bicicleta con casco",
            "ejemplo": [
              "My sister can ride a bike without help.",
              "Mi hermana sabe andar en bici sin ayuda."
            ]
          },
          {
            "en": "My brother can't swim.",
            "es": "Mi hermano no sabe nadar.",
            "imagen": "Niño con flotadores mirando la alberca con nervios",
            "ejemplo": [
              "My brother can't swim, so he uses floaties.",
              "Mi hermano no sabe nadar, por eso usa flotadores."
            ]
          },
          {
            "en": "I can speak a little English.",
            "es": "Sé hablar un poco de inglés.",
            "imagen": "Persona platicando con un turista extranjero en la calle",
            "ejemplo": [
              "I can speak a little English and some French.",
              "Sé hablar un poco de inglés y algo de francés."
            ]
          },
          {
            "en": "He can't play the guitar.",
            "es": "Él no sabe tocar la guitarra.",
            "imagen": "Joven con una guitarra mirando unos acordes en una hoja con confusión",
            "ejemplo": [
              "He can't play the guitar, but he can play the drums.",
              "No sabe tocar la guitarra, pero sabe tocar la batería."
            ]
          },
          {
            "en": "We can play basketball very well.",
            "es": "Sabemos jugar baloncesto muy bien.",
            "imagen": "Equipo de amigos celebrando una canasta en la cancha",
            "ejemplo": [
              "We can play basketball very well together.",
              "Sabemos jugar baloncesto muy bien juntos."
            ]
          },
          {
            "en": "She can run very fast.",
            "es": "Ella puede correr muy rápido.",
            "imagen": "Mujer corriendo a toda velocidad en una pista",
            "ejemplo": [
              "She can run very fast; she wins every race.",
              "Ella corre muy rápido; gana todas las carreras."
            ]
          }
        ]
      },
      {
        "id": "preguntas",
        "titulo": "Preguntas con can",
        "icono": "❓",
        "patron": [
          "Can you swim?",
          "Can she cook?",
          "Can I help you?"
        ],
        "palabras": [
          {
            "en": "Can you swim?",
            "es": "¿Sabes nadar?",
            "imagen": "Instructor de natación preguntándole a un niño junto a la alberca",
            "ejemplo": [
              "Can you swim? Yes, a little.",
              "¿Sabes nadar? Sí, un poco."
            ]
          },
          {
            "en": "Can you play tennis?",
            "es": "¿Sabes jugar tenis?",
            "imagen": "Dos amigos con raquetas de tenis en una cancha",
            "ejemplo": [
              "Can you play tennis? No, I can't.",
              "¿Sabes jugar tenis? No, no sé."
            ]
          },
          {
            "en": "Can she cook?",
            "es": "¿Ella sabe cocinar?",
            "imagen": "Persona preguntando sobre una mujer que cocina en la cocina",
            "ejemplo": [
              "Can she cook? Yes, she's a great cook.",
              "¿Ella sabe cocinar? Sí, cocina muy bien."
            ]
          },
          {
            "en": "Can he drive?",
            "es": "¿Él sabe manejar?",
            "imagen": "Persona señalando un carro y preguntando a un amigo",
            "ejemplo": [
              "Can he drive? Yes, he has a license.",
              "¿Él sabe manejar? Sí, tiene licencia."
            ]
          },
          {
            "en": "Can they dance?",
            "es": "¿Ellos saben bailar?",
            "imagen": "Pareja observando a otras personas bailar en una fiesta",
            "ejemplo": [
              "Can they dance? Yes, they love dancing.",
              "¿Ellos saben bailar? Sí, les encanta bailar."
            ]
          },
          {
            "en": "Can you speak English?",
            "es": "¿Sabes hablar inglés?",
            "imagen": "Turista extranjero preguntándole algo a una joven en la calle mientras ella sonríe",
            "ejemplo": [
              "Can you speak English? Yes, a little.",
              "¿Sabes hablar inglés? Sí, un poco."
            ]
          },
          {
            "en": "Can your dad swim?",
            "es": "¿Tu papá sabe nadar?",
            "imagen": "Niño preguntando a su amigo junto a una alberca",
            "ejemplo": [
              "Can your dad swim? Yes, he swims every day.",
              "¿Tu papá sabe nadar? Sí, nada todos los días."
            ]
          },
          {
            "en": "Can you play the piano?",
            "es": "¿Sabes tocar el piano?",
            "imagen": "Persona sentada frente a un piano con cara de duda",
            "ejemplo": [
              "Can you play the piano? No, but I can sing.",
              "¿Sabes tocar el piano? No, pero sé cantar."
            ]
          },
          {
            "en": "Can we park here?",
            "es": "¿Podemos estacionarnos aquí?",
            "imagen": "Conductor preguntando a un guardia de seguridad junto a su carro",
            "ejemplo": [
              "Can we park here? No, it's not allowed.",
              "¿Podemos estacionarnos aquí? No, no se permite."
            ]
          },
          {
            "en": "Can I help you?",
            "es": "¿Puedo ayudarte?",
            "imagen": "Empleado de tienda sonriendo y ofreciendo ayuda a un cliente",
            "ejemplo": [
              "Can I help you? Yes, please.",
              "¿Puedo ayudarte? Sí, por favor."
            ]
          }
        ]
      },
      {
        "id": "deportes",
        "titulo": "Deportes y actividades",
        "icono": "⚽",
        "patron": [
          "play volleyball",
          "go swimming",
          "do yoga"
        ],
        "palabras": [
          {
            "en": "play volleyball",
            "es": "jugar voleibol",
            "imagen": "Personas jugando voleibol en la playa",
            "ejemplo": [
              "We can play volleyball on the beach.",
              "Sabemos jugar voleibol en la playa."
            ]
          },
          {
            "en": "play baseball",
            "es": "jugar béisbol",
            "imagen": "Niño bateando una pelota de béisbol en un campo",
            "ejemplo": [
              "He can play baseball very well.",
              "Él sabe jugar béisbol muy bien."
            ]
          },
          {
            "en": "go swimming",
            "es": "ir a nadar",
            "imagen": "Familia entrando a una alberca juntos",
            "ejemplo": [
              "We can go swimming on Sundays.",
              "Podemos ir a nadar los domingos."
            ]
          },
          {
            "en": "go running",
            "es": "salir a correr",
            "imagen": "Persona saliendo a correr temprano en el parque",
            "ejemplo": [
              "I can go running with you tomorrow.",
              "Puedo salir a correr contigo mañana."
            ]
          },
          {
            "en": "go cycling",
            "es": "andar en bici (salir)",
            "imagen": "Grupo de amigos andando en bicicleta por la calle",
            "ejemplo": [
              "They can go cycling on the weekend.",
              "Ellos pueden andar en bici el fin de semana."
            ]
          },
          {
            "en": "lift weights",
            "es": "levantar pesas",
            "imagen": "Persona levantando pesas en un gimnasio",
            "ejemplo": [
              "He can lift heavy weights.",
              "Él puede levantar pesas pesadas."
            ]
          },
          {
            "en": "do yoga",
            "es": "hacer yoga",
            "imagen": "Mujer haciendo una postura de yoga en un parque",
            "ejemplo": [
              "She can do yoga very well.",
              "Ella sabe hacer yoga muy bien."
            ]
          },
          {
            "en": "play golf",
            "es": "jugar golf",
            "imagen": "Hombre golpeando una pelota de golf en el campo",
            "ejemplo": [
              "My grandfather can still play golf.",
              "Mi abuelo todavía puede jugar golf."
            ]
          },
          {
            "en": "box",
            "es": "boxear",
            "imagen": "Persona entrenando boxeo con un saco de boxeo",
            "ejemplo": [
              "He can box really well.",
              "Él sabe boxear muy bien."
            ]
          },
          {
            "en": "skate",
            "es": "patinar",
            "imagen": "Joven patinando en patineta en un parque",
            "ejemplo": [
              "Can you skate? No, I can't.",
              "¿Sabes patinar? No, no sé."
            ]
          }
        ]
      }
    ],
    "ejemplos": [
      {
        "en": "Can you swim? Yes, I can.",
        "es": "¿Sabes nadar? Sí, sé.",
        "imagen": "Persona levantando el pulgar dentro de una alberca"
      },
      {
        "en": "Can you cook? No, I can't.",
        "es": "¿Sabes cocinar? No, no sé.",
          "imagen": "Joven en la cocina encogiéndose de hombros frente a una sartén, sin saber qué hacer"
      },
      {
        "en": "I can play soccer, but I can't play tennis.",
        "es": "Sé jugar fútbol, pero no sé jugar tenis."
      },
      {
        "en": "She can dance very well.",
        "es": "Ella sabe bailar muy bien."
      },
      {
        "en": "My brother can't drive yet.",
        "es": "Mi hermano todavía no sabe manejar."
      },
      {
        "en": "Can your sister speak English?",
        "es": "¿Tu hermana sabe hablar inglés?",
          "imagen": "Muchacha estudiando inglés con audífonos y un libro mientras su hermano la mira"
      },
      {
        "en": "We can play basketball on Saturdays.",
        "es": "Podemos jugar baloncesto los sábados."
      },
      {
        "en": "He can run fast, but he can't swim.",
        "es": "Él puede correr rápido, pero no sabe nadar.",
        "imagen": "Persona corriendo en la playa evitando entrar al agua"
      },
      {
        "en": "Can I use your phone, please?",
        "es": "¿Puedo usar tu teléfono, por favor?"
      },
      {
        "en": "They can't come to the party tonight.",
        "es": "Ellos no pueden venir a la fiesta esta noche."
      }
    ],
    "frases": [
      {
        "en": "My sister can play the piano, but she can't sing.",
        "es": "Mi hermana sabe tocar el piano, pero no sabe cantar."
      },
      {
        "en": "Can you help me? I can't open this jar.",
        "es": "¿Me puedes ayudar? No puedo abrir este frasco.",
        "imagen": "Persona esforzándose por abrir un frasco en la cocina"
      },
      {
        "en": "We can't go to the beach today because it's raining.",
        "es": "No podemos ir a la playa hoy porque está lloviendo."
      },
      {
        "en": "My little brother can already ride a bike without help.",
        "es": "Mi hermanito ya sabe andar en bici sin ayuda.",
        "imagen": "Niño pequeño andando en bicicleta solo mientras sus papás aplauden"
      },
      {
        "en": "Can your dad drive a truck? Yes, he can.",
        "es": "¿Tu papá sabe manejar un camión? Sí, sabe."
      },
      {
        "en": "I can speak Spanish and a little English, but I can't speak French.",
        "es": "Sé hablar español y un poco de inglés, pero no sé hablar francés."
      },
      {
        "en": "She can't play tennis very well, but she can play volleyball.",
        "es": "Ella no sabe jugar tenis muy bien, pero sabe jugar voleibol."
      },
      {
        "en": "Can we park the car here, or can't we?",
        "es": "¿Podemos estacionar el carro aquí, o no podemos?"
      },
      {
        "en": "My grandfather can still swim every morning at eighty years old.",
        "es": "Mi abuelo todavía puede nadar cada mañana a los ochenta años.",
        "imagen": "Señor mayor nadando con energía en una alberca temprano en la mañana"
      },
      {
        "en": "We can meet at six, but we can't stay late because we have work tomorrow.",
        "es": "Podemos vernos a las seis, pero no podemos quedarnos tarde porque tenemos trabajo mañana."
      }
    ],
    "listening": [
      {
        "audio": "Can you swim? Yes, I can. I swim every weekend.",
        "pregunta": "¿Qué sabe hacer?",
        "opciones": [
          "Nadar",
          "Bailar",
          "Cocinar",
          "Manejar"
        ]
      },
      {
        "audio": "Can your brother drive? No, he can't. He's only fifteen.",
        "pregunta": "¿Por qué no puede manejar?",
        "opciones": [
          "Es muy joven",
          "No tiene carro",
          "No le gusta",
          "Está ocupado"
        ]
      },
      {
        "audio": "Can you play the guitar? No, I can't, but I can play the piano.",
        "pregunta": "¿Qué sabe tocar?",
        "opciones": [
          "El piano",
          "La guitarra",
          "El violín",
          "La batería"
        ]
      },
      {
        "audio": "Can she cook Mexican food? Yes, she can. She makes great tacos.",
        "pregunta": "¿Qué sabe cocinar?",
        "opciones": [
          "Comida mexicana",
          "Comida italiana",
          "Comida china",
          "Postres"
        ]
      },
      {
        "audio": "Can we park here? No, we can't. There's a sign.",
        "pregunta": "¿Por qué no pueden estacionarse?",
        "opciones": [
          "Hay un letrero que lo prohíbe",
          "No hay espacio",
          "Está muy lejos",
          "Es muy caro"
        ]
      }
    ],
    "lectura": {
      "titulo": "My cousin Pablo",
      "texto": "My cousin Pablo is very athletic. He can play soccer, basketball and volleyball, and he can run very fast. He wants to be a professional athlete one day. But Pablo can't swim! He's a little afraid of the water. His sister Carla is very different. She can't play sports very well, but she can swim like a fish and she can also play the piano beautifully. On Saturdays, Pablo and Carla go to the park together. He plays soccer with his friends, and she reads a book under a tree. They are very different, but they are great friends.",
      "preguntas": [
        {
          "pregunta": "¿Qué deportes sabe jugar Pablo?",
          "opciones": [
            "Fútbol, baloncesto y voleibol",
            "Tenis y golf",
            "Solo fútbol",
            "Natación y atletismo"
          ]
        },
        {
          "pregunta": "¿Qué no sabe hacer Pablo?",
          "opciones": [
            "Nadar",
            "Correr",
            "Jugar fútbol",
            "Jugar baloncesto"
          ]
        },
        {
          "pregunta": "¿Qué sabe hacer Carla muy bien?",
          "opciones": [
            "Nadar y tocar el piano",
            "Jugar fútbol",
            "Correr rápido",
            "Jugar baloncesto"
          ]
        },
        {
          "pregunta": "¿Qué hacen los sábados en el parque?",
          "opciones": [
            "Él juega fútbol y ella lee un libro",
            "Los dos nadan juntos",
            "Los dos juegan fútbol",
            "Ella juega fútbol y él lee"
          ]
        }
      ]
    },
    "escritura": [
      {
        "instruccion": "Ordena la oración.",
        "pregunta": "swim / I / can",
        "respuestas": [
          "I can swim"
        ]
      },
      {
        "instruccion": "Ordena la oración.",
        "pregunta": "cook / can't / he",
        "respuestas": [
          "He can't cook"
        ]
      },
      {
        "instruccion": "Ordena la pregunta.",
        "pregunta": "you / can / swim",
        "respuestas": [
          "Can you swim"
        ]
      },
      {
        "instruccion": "Ordena la pregunta.",
        "pregunta": "she / play / can / tennis",
        "respuestas": [
          "Can she play tennis"
        ]
      },
      {
        "instruccion": "Completa con can o can't.",
        "pregunta": "I ___ speak French. (no sé)",
        "respuestas": [
          "can't"
        ]
      },
      {
        "instruccion": "Completa con can o can't.",
        "pregunta": "My sister ___ dance very well. (sabe)",
        "respuestas": [
          "can"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "¿Sabes manejar?",
        "respuestas": [
          "Can you drive"
        ]
      },
      {
        "instruccion": "Traduce al inglés.",
        "pregunta": "No sé cocinar.",
        "respuestas": [
          "I can't cook"
        ]
      },
      {
        "instruccion": "Corrige la oración.",
        "pregunta": "She can plays basketball.",
        "respuestas": [
          "She can play basketball"
        ]
      },
      {
        "instruccion": "Corrige la pregunta.",
        "pregunta": "Can you to swim?",
        "respuestas": [
          "Can you swim"
        ]
      }
    ],
    "examen": [
      {
        "tipo": "opcion",
        "pregunta": "I ___ swim very well.",
        "opciones": [
          "can",
          "cans",
          "can's",
          "could"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "¿Cómo se dice «No sé cocinar»?",
        "opciones": [
          "I can't cook",
          "I no can cook",
          "I can cook not",
          "I not can cook"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "___ you play tennis?",
        "opciones": [
          "Can",
          "Do",
          "Are",
          "Is"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "She ___ play the guitar, but she can sing.",
        "opciones": [
          "can't",
          "can",
          "doesn't",
          "isn't"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "Can he drive? ___, he can't.",
        "opciones": [
          "No",
          "Yes",
          "Not",
          "Don't"
        ]
      },
      {
        "tipo": "opcion",
        "pregunta": "My brother ___ ride a bike.",
        "opciones": [
          "can",
          "cans",
          "is can",
          "do can"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Can you swim? Yes, I can swim very well.",
        "pregunta": "¿Sabe nadar?",
        "opciones": [
          "Sí, muy bien",
          "No, nada",
          "Sí, un poco",
          "No sabe"
        ]
      },
      {
        "tipo": "listening",
        "audio": "Can she play soccer? No, she can't, but she can play basketball.",
        "pregunta": "¿Qué sabe jugar?",
        "opciones": [
          "Baloncesto",
          "Fútbol",
          "Tenis",
          "Voleibol"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: ¿Sabes bailar?",
        "respuestas": [
          "Can you dance"
        ]
      },
      {
        "tipo": "escribir",
        "pregunta": "Traduce: No puedo ayudarte hoy.",
        "respuestas": [
          "I can't help you today"
        ]
      }
    ]
  },
  { "id": "a1-20", "num": 20, "titulo": "Imperativo", "contexto": "Instrucciones, recetas y señales" },
  { "id": "a1-21", "num": 21, "titulo": "Presente continuo", "contexto": "¿Qué está pasando ahora? La ropa y el clima" },
  { "id": "a1-22", "num": 22, "titulo": "Contables e incontables; some / any", "contexto": "Comida y bebida" },
  { "id": "a1-23", "num": 23, "titulo": "Like / love / hate + -ing; would like", "contexto": "Gustos, preferencias y pedir en un restaurante" },
  { "id": "a1-24", "num": 24, "titulo": "Was / were y conectores and, but, or, because", "contexto": "Ayer, la semana pasada y mi infancia" }
];
