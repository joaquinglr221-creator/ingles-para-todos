// Examen de ubicación: 10 preguntas por nivel (8 de gramática y vocabulario, 1 de lectura y 1 de listening).
// Cada pregunta evalúa temas del plan de estudios de ese nivel (docs/plan-de-estudios.md).
// La primera opción es siempre la correcta; la app las revuelve al mostrarlas.
// Después del "=" el contenido debe ser JSON válido: scripts/generar_audios.py lo lee para grabar los listening.
const UBICACION = [
  {
    "nivel": "A1",
    "nombre": "Principiante",
    "preguntas": [
      { "tipo": "gramatica", "pregunta": "My sister ___ a teacher.", "opciones": ["is", "are", "am", "be"] },
      { "tipo": "gramatica", "pregunta": "___ you from Mexico?", "opciones": ["Are", "Is", "Am", "Do"] },
      { "tipo": "gramatica", "pregunta": "I have ___ umbrella in my bag.", "opciones": ["an", "a", "any", "these"] },
      { "tipo": "gramatica", "pregunta": "There ___ two books on the table.", "opciones": ["are", "is", "be", "has"] },
      { "tipo": "gramatica", "pregunta": "She ___ to work by bus every day.", "opciones": ["goes", "go", "going", "is go"] },
      { "tipo": "gramatica", "pregunta": "___ your brother like coffee?", "opciones": ["Does", "Do", "Is", "Has"] },
      { "tipo": "gramatica", "pregunta": "I can't talk now. I ___ dinner.", "opciones": ["'m cooking", "cook", "cooks", "cooking"] },
      { "tipo": "gramatica", "pregunta": "Yesterday we ___ at home all day.", "opciones": ["were", "was", "are", "be"] },
      {
        "tipo": "lectura",
        "texto": "Hi! I'm Laura. I'm 25 years old and I live in Madrid with my brother. I work in a hospital from Monday to Friday. On Saturdays I play tennis with my friends, and on Sundays I visit my parents.",
        "pregunta": "What does Laura do on Saturdays?",
        "opciones": ["She plays tennis.", "She works in a hospital.", "She visits her parents.", "She goes to Madrid."]
      },
      {
        "tipo": "listening",
        "audio": "The meeting is on Tuesday at half past three.",
        "pregunta": "When is the meeting?",
        "opciones": ["Tuesday, 3:30", "Thursday, 3:30", "Tuesday, 3:00", "Thursday, 2:30"]
      }
    ]
  },
  {
    "nivel": "A2",
    "nombre": "Básico",
    "preguntas": [
      { "tipo": "gramatica", "pregunta": "We ___ to the beach last weekend.", "opciones": ["went", "go", "goes", "have gone"] },
      { "tipo": "gramatica", "pregunta": "___ you see the match last night?", "opciones": ["Did", "Do", "Were", "Have"] },
      { "tipo": "gramatica", "pregunta": "I ___ a shower when the phone rang.", "opciones": ["was having", "had", "am having", "have"] },
      { "tipo": "gramatica", "pregunta": "Look at those black clouds! It ___ rain.", "opciones": ["'s going to", "goes to", "will to", "is"] },
      { "tipo": "gramatica", "pregunta": "My brother is ___ than me.", "opciones": ["taller", "more tall", "tallest", "the taller"] },
      { "tipo": "gramatica", "pregunta": "Have you ever ___ sushi?", "opciones": ["eaten", "ate", "eat", "eating"] },
      { "tipo": "gramatica", "pregunta": "You look tired. You ___ go to bed early tonight.", "opciones": ["should", "should to", "must to", "have"] },
      { "tipo": "gramatica", "pregunta": "There isn't ___ milk in the fridge.", "opciones": ["much", "many", "a few", "a lot"] },
      {
        "tipo": "lectura",
        "texto": "Dear Tom, I arrived in Lisbon on Monday. The city is beautiful, but it's more expensive than I expected. Yesterday I visited an old castle and took a lot of photos. Tomorrow I'm going to take a train to Porto. See you soon! Ana",
        "pregunta": "What is Ana going to do tomorrow?",
        "opciones": ["Travel to Porto by train.", "Visit an old castle.", "Arrive in Lisbon.", "Send photos to Tom."]
      },
      {
        "tipo": "listening",
        "audio": "Sorry, I can't come to the party on Saturday because I have to work. But I might come on Sunday.",
        "pregunta": "Why can't the speaker go to the party on Saturday?",
        "opciones": ["They have to work.", "They are sick.", "The party is cancelled.", "They don't like parties."]
      }
    ]
  },
  {
    "nivel": "B1",
    "nombre": "Intermedio",
    "preguntas": [
      { "tipo": "gramatica", "pregunta": "I've lived in this city ___ 2015.", "opciones": ["since", "for", "from", "during"] },
      { "tipo": "gramatica", "pregunta": "When I got to the station, the train ___.", "opciones": ["had already left", "already leaves", "has already left", "was already leave"] },
      { "tipo": "gramatica", "pregunta": "I ___ play football every day when I was a child.", "opciones": ["used to", "use to", "was used to", "am used to"] },
      { "tipo": "gramatica", "pregunta": "If I ___ more money, I would buy a new car.", "opciones": ["had", "have", "would have", "will have"] },
      { "tipo": "gramatica", "pregunta": "This bridge ___ in 1890.", "opciones": ["was built", "built", "is building", "has built"] },
      { "tipo": "gramatica", "pregunta": "That's the woman ___ son plays in the band.", "opciones": ["whose", "who", "which", "who's"] },
      { "tipo": "gramatica", "pregunta": "You've finished your homework, ___?", "opciones": ["haven't you", "didn't you", "don't you", "have you"] },
      { "tipo": "gramatica", "pregunta": "She told me she ___ the film the week before.", "opciones": ["had seen", "has seen", "have seen", "sees"] },
      {
        "tipo": "lectura",
        "texto": "Five years ago, Mark was an accountant. He had a good salary, but he was bored. One day he decided to take a cooking course, and he loved it. Now he runs a small food truck. He earns less money than before, but he says he has never been happier.",
        "pregunta": "How does Mark feel about his new job?",
        "opciones": ["He is happier than ever.", "He regrets leaving his old job.", "He is bored again.", "He wants to be an accountant again."]
      },
      {
        "tipo": "listening",
        "audio": "Excuse me, could you tell me where the nearest pharmacy is? I've been looking for one for twenty minutes.",
        "pregunta": "What does the speaker want to know?",
        "opciones": ["Where a pharmacy is.", "What time the pharmacy opens.", "How long the walk is.", "Where the bus stop is."]
      }
    ]
  },
  {
    "nivel": "B2",
    "nombre": "Intermedio alto",
    "preguntas": [
      { "tipo": "gramatica", "pregunta": "If I had left earlier, I ___ the train.", "opciones": ["would have caught", "would catch", "had caught", "will have caught"] },
      { "tipo": "gramatica", "pregunta": "I failed the exam. I wish I ___ harder.", "opciones": ["had studied", "studied", "would study", "have studied"] },
      { "tipo": "gramatica", "pregunta": "I'm getting my car ___ tomorrow.", "opciones": ["repaired", "repair", "to repair", "repairing"] },
      { "tipo": "gramatica", "pregunta": "He denied ___ the window.", "opciones": ["breaking", "to break", "break", "that break"] },
      { "tipo": "gramatica", "pregunta": "She didn't answer her phone last night. Her lights were off, so she ___ asleep.", "opciones": ["must have been", "can't have been", "must be", "should be"] },
      { "tipo": "gramatica", "pregunta": "___ the heavy rain, the match wasn't cancelled.", "opciones": ["Despite", "Although", "However", "Even"] },
      { "tipo": "gramatica", "pregunta": "After two years in London, I'm finally used to ___ on the left.", "opciones": ["driving", "drive", "drove", "be driving"] },
      { "tipo": "gramatica", "pregunta": "I'll never forget ___ the ocean for the first time.", "opciones": ["seeing", "to see", "see", "to seeing"] },
      {
        "tipo": "lectura",
        "texto": "Many companies now allow employees to work from home two or three days a week. Supporters argue that this saves commuting time and improves concentration. Critics, however, point out that remote work can make it harder for new employees to learn from more experienced colleagues.",
        "pregunta": "What disadvantage of remote work does the text mention?",
        "opciones": ["New employees may learn less from experienced colleagues.", "It increases commuting time.", "It makes concentration worse.", "Companies lose a lot of money."]
      },
      {
        "tipo": "listening",
        "audio": "I should have checked the forecast. If I'd known it was going to snow, I wouldn't have driven to the mountains.",
        "pregunta": "What does the speaker regret?",
        "opciones": ["Not checking the weather forecast.", "Driving too slowly.", "Not going to the mountains.", "Forgetting their snow boots."]
      }
    ]
  },
  {
    "nivel": "C1",
    "nombre": "Avanzado",
    "preguntas": [
      { "tipo": "gramatica", "pregunta": "Never ___ such a beautiful sunset.", "opciones": ["have I seen", "I have seen", "I saw", "did I saw"] },
      { "tipo": "gramatica", "pregunta": "___ I known about the problem, I would have helped.", "opciones": ["Had", "If", "Should", "Were"] },
      { "tipo": "gramatica", "pregunta": "___ the report, she sent it to her manager.", "opciones": ["Having finished", "Finished", "Have finished", "To finishing"] },
      { "tipo": "gramatica", "pregunta": "You ___ brought food. We had plenty.", "opciones": ["needn't have", "didn't need", "mustn't have", "hadn't to"] },
      { "tipo": "gramatica", "pregunta": "It's essential that every student ___ the form by Friday.", "opciones": ["submit", "will submit", "submitted", "is submitting"] },
      { "tipo": "gramatica", "pregunta": "It's high time we ___ a decision.", "opciones": ["made", "make", "will make", "have made"] },
      { "tipo": "gramatica", "pregunta": "___ I need right now is a long holiday.", "opciones": ["What", "That", "Which", "It"] },
      { "tipo": "gramatica", "pregunta": "It ___ that the results are not as reliable as we thought.", "opciones": ["would appear", "is appearing", "has appeared to", "would be appear"] },
      {
        "tipo": "lectura",
        "texto": "Although the benefits of urban green spaces are widely acknowledged, their distribution is far from equal. Wealthier neighbourhoods tend to enjoy an abundance of parks, whereas lower-income areas, where residents arguably need them most, are often left with little more than concrete.",
        "pregunta": "What is the writer's main point?",
        "opciones": ["Green spaces are unfairly distributed.", "Parks are too expensive to maintain.", "Wealthy people rarely use parks.", "Concrete is more practical than grass."]
      },
      {
        "tipo": "listening",
        "audio": "Not only did she finish the marathon, but she also raised over five thousand pounds for charity.",
        "pregunta": "What do we learn about the woman?",
        "opciones": ["She completed the marathon and raised money.", "She didn't finish the marathon.", "She paid five thousand pounds to enter the race.", "She raised money but didn't run."]
      }
    ]
  },
  {
    "nivel": "C2",
    "nombre": "Dominio",
    "preguntas": [
      { "tipo": "gramatica", "pregunta": "___ your help, we would never have finished on time.", "opciones": ["But for", "Except", "Unless", "Without of"] },
      { "tipo": "gramatica", "pregunta": "Be that as it ___, we still need to find a solution.", "opciones": ["may", "might", "can", "will"] },
      { "tipo": "gramatica", "pregunta": "You might as ___ tell him the truth now; he'll find out anyway.", "opciones": ["well", "good", "soon", "much"] },
      { "tipo": "gramatica", "pregunta": "___ wants to join us is welcome.", "opciones": ["Whoever", "Whomever", "Anyone", "Who"] },
      { "tipo": "gramatica", "pregunta": "Her ___ to compromise made the negotiations very difficult.", "opciones": ["unwillingness", "unwilling", "unwillingly", "unwillingful"] },
      { "tipo": "gramatica", "pregunta": "After months of arguing, the two brothers finally decided to bury the ___.", "opciones": ["hatchet", "axe", "sword", "knife"] },
      { "tipo": "gramatica", "pregunta": "Little ___ they know what was about to happen.", "opciones": ["did", "do", "had", "were"] },
      { "tipo": "gramatica", "pregunta": "Come what ___, I'll stand by you.", "opciones": ["may", "might", "will", "comes"] },
      {
        "tipo": "lectura",
        "texto": "The council's new parking scheme, hailed at its launch as a triumph of efficiency, has so far succeeded mainly in moving the traffic jams from one street to the next.",
        "pregunta": "What is the writer's attitude towards the scheme?",
        "opciones": ["Ironic and critical.", "Enthusiastic.", "Completely neutral.", "Confused."]
      },
      {
        "tipo": "listening",
        "audio": "Given that the evidence is, at best, circumstantial, I'd hesitate to draw any firm conclusions.",
        "pregunta": "What does the speaker mean?",
        "opciones": ["The evidence isn't strong enough to be certain.", "The evidence clearly proves the case.", "There is no evidence at all.", "They have already reached a conclusion."]
      }
    ]
  }
];

// Aciertos necesarios (de 10) para pasar al siguiente nivel.
const UBICACION_MINIMO = 7;
