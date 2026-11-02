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
