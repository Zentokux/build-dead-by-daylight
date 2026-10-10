// Datos de la guía de Superviviente — Dead by Daylight
// Validado el 10-oct-2026 contra el parche 10.2.0 (Mid-Chapter, en vivo desde el 6-oct-2026).
// Nombres en español: archivos del cliente (API dbd.tricky.lol, locale es, 10.1.2).
// Valores: notas oficiales de Behaviour (KB) + archivos del juego; los de 10.2.0 vienen de las notas oficiales.
// Uso: nightlight.gg, últimos 14 días (aprox. 26-sep a 10-oct-2026).

window.DBD_META = {
  parche: "10.2.0 Mid-Chapter",
  fechaParche: "6-oct-2026",
  validado: "10-oct-2026",
};

// estado: "ok" = verificado; "duda" = verificado en parte (ver nota)
window.PERKS = {
  lithe: {
    es: "Agilidad", en: "Lithe", icon: "iconPerks_lithe.png", dueno: "Feng Min",
    efecto: "Tras un salto mediano o rápido: <b>+50 % de Celeridad durante 3 s</b>.",
    coste: "Agotamiento 60/50/40 s", uso: "1º · 24,98 %", cambio: "Sin cambios recientes", estado: "ok",
  },
  resilience: {
    es: "Resiliencia", en: "Resilience", icon: "iconPerks_resilience.png", dueno: "General",
    efecto: "Estando herido: <b>+7/8/9 %</b> de velocidad al reparar, curar, saltar ventanas, descolgar, sabotear, purificar/bendecir y abrir puertas y cofres.",
    coste: "—", uso: "2º · 22,87 %", cambio: "10.2.0 (antes 3/6/9 %)", estado: "ok",
  },
  dejavu: {
    es: "Déjà vu", en: "Deja Vu", icon: "iconPerks_dejaVu.png", dueno: "General",
    efecto: "Ves el aura de los <b>3 generadores más cercanos entre sí</b> y los reparas un <b>4/5/6 %</b> más rápido.",
    coste: "—", uso: "3º · 19,88 %", cambio: "9.1.0", estado: "ok",
  },
  deadhard: {
    es: "Fajador", en: "Dead Hard", icon: "iconPerks_DeadHard.png", dueno: "David King",
    efecto: "Tras ser descolgado, herido y corriendo, pulsa el botón de habilidad: <b>Resistencia durante 0,5 s</b> (aguantas un golpe sin caer).",
    coste: "Agotamiento 60/50/40 s", uso: "4º · 18,89 %", cambio: "6.7.0", estado: "ok",
  },
  woo: {
    es: "Oportunidades", en: "Windows of Opportunity", icon: "iconPerks_windowsOfOpportunity.png", dueno: "Kate Denson",
    efecto: "Ves el aura de las <b>ventanas a 24 m</b> y las saltas un <b>10 %</b> más rápido.",
    coste: "Enfriamiento 40/35/30 s tras saltar", uso: "5º · 18,29 %", cambio: "10.2.0 (rediseño: ya no muestra palés ni muros)", estado: "ok",
  },
  wtl: {
    es: "Ganas de vivir", en: "Will to Live (antes Decisive Strike)", icon: "iconPerks_decisiveStrike.png", dueno: "General (Laurie Strode conserva Golpe decisivo si tienes el capítulo)",
    efecto: "Durante <b>40/50/60 s</b> tras ser descolgado, si el asesino te carga, supera una prueba de habilidad para <b>aturdirlo 4 s</b> y escapar. Te conviertes en la Obsesión. Una vez por partida.",
    coste: "Se desactiva con acciones llamativas o al completarse los generadores", uso: "6º · 16,27 %", cambio: "9.4.0 (cambio de nombre y pasa a ser general)", estado: "duda",
    nota: "Efecto y valores verificados. El nombre «Ganas de vivir» sale de la wiki en español; no está confirmado en el cliente. El icono es el antiguo de Golpe decisivo.",
  },
  adrenaline: {
    es: "Adrenalina", en: "Adrenaline", icon: "iconPerks_adrenaline.png", dueno: "Meg Thomas",
    efecto: "Al energizarse las puertas: <b>te cura un estado de salud</b> y te da <b>+50 % de Celeridad durante 4 s</b>. Funciona aunque estés agotado.",
    coste: "Agotamiento 60/50/40 s", uso: "10º · 7,54 %", cambio: "10.1.0 (3 → 4 s)", estado: "ok",
  },
  bond: {
    es: "Vínculo", en: "Bond", icon: "iconPerks_bond.png", dueno: "Dwight Fairfield",
    efecto: "Ves el aura de los demás supervivientes a <b>20/28/36 m</b>.",
    coste: "—", uso: "11º · 7,39 %", cambio: "Sin cambios recientes", estado: "ok",
  },
  unbreakable: {
    es: "Inquebrantable", en: "Unbreakable", icon: "iconPerks_unbreakable.png", dueno: "Bill Overbeck",
    efecto: "Si <b>el asesino</b> te deja derribado: te recuperas un <b>25/30/35 %</b> más rápido y puedes <b>levantarte solo una vez</b> por partida.",
    coste: "Un uso por partida", uso: "12º · 7,22 %", cambio: "9.5.0 (solo si te derriba el asesino)", estado: "ok",
  },
  sprint: {
    es: "Esprint", en: "Sprint Burst", icon: "iconPerks_sprintBurst.png", dueno: "Meg Thomas",
    efecto: "Al empezar a correr: <b>+50 % de Celeridad durante 2 s</b>.",
    coste: "Agotamiento 60/50/40 s", uso: "14º · 6,62 %", cambio: "10.1.0 (3 → 2 s)", estado: "ok",
  },
  wellmake: {
    es: "Sobreviviremos", en: "We'll Make It", icon: "iconPerks_wellMakeIt.png", dueno: "General",
    efecto: "Tras descolgar a alguien, curas a los demás un <b>100 % más rápido</b> durante <b>70/80/90 s</b>.",
    coste: "—", uso: "15º · 6,21 %", cambio: "10.2.0 (antes 30/60/90 s)", estado: "ok",
  },
  kindred: {
    es: "Familia", en: "Kindred", icon: "iconPerks_kindred.png", dueno: "General",
    efecto: "Cuando hay alguien colgado, todos veis las <b>auras de los supervivientes</b> y la del <b>asesino si está a 14/15/16 m</b> del gancho.",
    coste: "—", uso: "16º · 6,10 %", cambio: "10.2.0 (antes 8/12/16 m)", estado: "ok",
  },
  botany: {
    es: "Conocimientos de botánica", en: "Botany Knowledge", icon: "iconPerks_botanyKnowledge.png", dueno: "Claudette Morel",
    efecto: "Curas un <b>30/40/50 %</b> más rápido, sin penalización al usar botiquín.",
    coste: "—", uso: "17º · 5,47 %", cambio: "9.0.0", estado: "ok",
  },
  hyperfocus: {
    es: "Hiperconcentración", en: "Hyperfocus", icon: "iconPerks_Hyperfocus.png", dueno: "Rebecca Chambers",
    efecto: "Cada prueba de habilidad <b>Excelente</b> al reparar o curar da 1 ficha (máx. 6). Por ficha: +4 % de probabilidad y velocidad de la aguja y <b>+10/20/30 %</b> al bonus de la prueba. Pierdes las fichas con una prueba Buena, un fallo o si paras.",
    coste: "—", uso: "18º · 5,03 %", cambio: "Sin cambios recientes", estado: "ok",
  },
  prove: {
    es: "Demuestra lo que vales", en: "Prove Thyself", icon: "iconPerks_proveThyself.png", dueno: "Dwight Fairfield",
    efecto: "<b>+6/8/10 %</b> de reparación por cada superviviente a 4 m (máx. 18/24/30 %). También les afecta a ellos.",
    coste: "—", uso: "19º · 4,99 %", cambio: "7.1.0", estado: "ok",
  },
  offrecord: {
    es: "Extraoficial", en: "Off the Record", icon: "iconPerks_offTheRecord.png", dueno: "Zarina Kassir",
    efecto: "Durante <b>30/35/40 s</b> tras ser descolgado: obtienes <b>Resistencia</b>, el asesino <b>no ve tu aura</b> y tus gruñidos de dolor no se oyen.",
    coste: "Las acciones llamativas cancelan la Resistencia", uso: "66º · 1,21 %", cambio: "9.2.2", estado: "duda",
    nota: "Valores confirmados en los archivos del juego. Las fuentes no coinciden en si se desactiva al energizarse las puertas ni en si oculta las marcas de arañazos.",
  },
  tenacity: {
    es: "Tenacidad", en: "Tenacity", icon: "iconPerks_tenacity.png", dueno: "David Tapp",
    efecto: "Derribado: puedes <b>arrastrarte y recuperarte a la vez</b>, te arrastras con <b>+30/40/50 % de Celeridad</b>, tus gruñidos son un 75 % más bajos y no se puede revelar tu aura.",
    coste: "—", uso: "70º", cambio: "9.3.0", estado: "ok",
  },
  flipflop: {
    es: "Hasta otra", en: "Flip-Flop", icon: "iconPerks_flipFlop.png", dueno: "Ash Williams",
    efecto: "El <b>50 %</b> de lo que te recuperas estando derribado pasa a la barra de forcejeo cuando te cargan (máx. <b>40/45/50 %</b>).",
    coste: "—", uso: "64º", cambio: "Sin cambios recientes", estado: "ok",
  },
  powerstruggle: {
    es: "Lucha intensa", en: "Power Struggle", icon: "iconPerks_powerStruggle.png", dueno: "Élodie Rakoto",
    efecto: "Derribado ves el aura de los palés. Si te cargan y llevas <b>25/20/15 %</b> de forcejeo junto a un palé, puedes <b>tirarlo, aturdir al asesino</b> y soltarte.",
    coste: "Un uso", uso: "89º", cambio: "5.5.0", estado: "ok",
  },
  hope: {
    es: "Esperanza", en: "Hope", icon: "iconPerks_hope.png", dueno: "General",
    efecto: "Con las puertas energizadas: <b>+3/4/5 % de Celeridad</b> hasta el final de la partida.",
    coste: "—", uso: "46º", cambio: "9.2.0 (antes 5/6/7 %)", estado: "ok",
  },
  wakeup: {
    es: "¡Despierta!", en: "Wake Up!", icon: "iconPerks_wakeUp.png", dueno: "Quentin Smith",
    efecto: "Con todos los generadores hechos: ves los <b>interruptores de las puertas</b>, los demás ven tu aura mientras abres y abres más rápido (<b>8/9/10 % + 20 %</b> por cada otro superviviente vivo).",
    coste: "—", uso: "102º", cambio: "10.2.0", estado: "ok",
  },
  borrowed: {
    es: "Tiempo prestado", en: "Borrowed Time", icon: "iconPerks_borrowedTime.png", dueno: "Bill Overbeck",
    efecto: "El superviviente que descuelgas recibe <b>+6/8/10 s de Resistencia</b> y <b>+10 s de Celeridad</b> extra (se cancela con acciones llamativas).",
    coste: "—", uso: "93º", cambio: "Sin cambios en el juego", estado: "ok",
  },
  reassurance: {
    es: "Reafirmación", en: "Reassurance", icon: "iconPerks_Reassurance.png", dueno: "Rebecca Chambers",
    efecto: "A 6 m de un superviviente colgado, pulsa el botón de habilidad para <b>pausar su sacrificio 20/25/30 s</b>.",
    coste: "Una vez por superviviente y gancho", uso: "82º", cambio: "6.2.0", estado: "ok",
  },
};

window.BUILDS = [
  {
    nombre: "Meta actual: persecución y antitúnel", tag: "Meta", color: "#e11d48",
    perks: ["lithe", "woo", "resilience", "wtl"],
    para: "Es la combinación de las ventajas de supervivientes más usadas ahora mismo. Sirve para alargar las persecuciones y para que no te tunelen tras descolgarte.",
    como: [
      "<b>Oportunidades</b> te marca las ventanas cercanas: corre hacia ellas.",
      "Al saltar rápido, <b>Agilidad</b> te da 3 s de Celeridad para ganar distancia.",
      "Herido, <b>Resiliencia</b> acelera tus saltos y reparaciones.",
      "Si el asesino te tunela tras descolgarte, <b>Ganas de vivir</b> lo aturde y te libera.",
    ],
  },
  {
    nombre: "Solo queue: información", tag: "Solo", color: "#0ea5e9",
    perks: ["dejavu", "kindred", "bond", "sprint"],
    para: "Para jugar sin coordinarte por voz. Te dice dónde están tus compañeros, qué generadores conviene hacer y si el asesino campea el gancho.",
    como: [
      "<b>Déjà vu</b>: repara los 3 generadores marcados para no dejar un trío pegado al final.",
      "<b>Familia</b>: cuando alguien está colgado, mira si el asesino está cerca antes de ir a rescatar.",
      "<b>Vínculo</b>: evita llevar al asesino hacia tus compañeros.",
      "<b>Esprint</b>: camina normalmente y corre solo cuando te vean, para separarte al empezar la persecución.",
    ],
  },
  {
    nombre: "Antitúnel", tag: "Defensa", color: "#a855f7",
    perks: ["wtl", "deadhard", "offrecord", "unbreakable"],
    para: "Contra asesinos que persiguen al recién descolgado o te dejan en el suelo. Te da varias formas de salvarte después del gancho.",
    como: [
      "Tras el descuelgue, <b>Extraoficial</b> te oculta y te da Resistencia.",
      "<b>Fajador</b>: guárdalo para esquivar el golpe que te derribaría.",
      "Si aun así te carga, <b>Ganas de vivir</b> lo aturde.",
      "Si te deja en el suelo, levántate con <b>Inquebrantable</b>.",
    ],
  },
  {
    nombre: "Generadores", tag: "Reparación", color: "#f59e0b",
    perks: ["dejavu", "prove", "resilience", "hyperfocus"],
    para: "Para terminar los generadores lo antes posible mientras otro superviviente se lleva la persecución. Va mejor con una caja de herramientas.",
    como: [
      "<b>Déjà vu</b> marca qué generadores reparar.",
      "Repara junto a otro superviviente para activar <b>Demuestra lo que vales</b>.",
      "Encadena pruebas Excelentes para acumular fichas de <b>Hiperconcentración</b>.",
      "Herido, <b>Resiliencia</b> te da velocidad extra: no hace falta curarse para reparar.",
    ],
  },
  {
    nombre: "Rescate y curación", tag: "Apoyo", color: "#22c55e",
    perks: ["borrowed", "wellmake", "botany", "kindred"],
    para: "Para el superviviente que hace de apoyo del equipo: descuelga de forma segura y cura rápido.",
    como: [
      "<b>Familia</b> te dice si el asesino está cerca del gancho.",
      "Al descolgar, <b>Tiempo prestado</b> protege al rescatado.",
      "Después cúralo: <b>Sobreviviremos</b> y <b>Conocimientos de botánica</b> se suman y dejan la curación en segundos.",
    ],
  },
  {
    nombre: "Final de partida", tag: "Endgame", color: "#eab308",
    perks: ["adrenaline", "hope", "wakeup", "reassurance"],
    para: "Para cuando el equipo llega vivo al último generador: curarse, abrir las puertas rápido y salvar a quien esté colgado.",
    como: [
      "Al hacerse el último generador, <b>Adrenalina</b> te cura y te da velocidad.",
      "<b>Esperanza</b> te da Celeridad hasta salir.",
      "<b>¡Despierta!</b> te enseña los interruptores y abre más rápido con compañeros vivos.",
      "<b>Reafirmación</b> pausa el gancho mientras se abre la puerta.",
    ],
  },
  {
    nombre: "Anti-slug (contra dejarte en el suelo)", tag: "Defensa", color: "#64748b",
    perks: ["unbreakable", "tenacity", "flipflop", "powerstruggle"],
    para: "Contra asesinos que dejan a todos en el suelo sin colgarlos. Te recuperas, te mueves y escapas si te cargan.",
    como: [
      "En el suelo, <b>Tenacidad</b> te deja arrastrarte rápido mientras te recuperas.",
      "Levántate solo con <b>Inquebrantable</b>.",
      "Si te carga, <b>Hasta otra</b> te da forcejeo inicial.",
      "<b>Lucha intensa</b> tira un palé para soltarte.",
    ],
  },
  {
    nombre: "Sin DLC: solo ventajas generales", tag: "Gratis", color: "#14b8a6",
    perks: ["wtl", "resilience", "dejavu", "kindred"],
    para: "Las 4 son ventajas generales: cualquier personaje las saca en la red de sangre sin comprar nada. Es la mejor base para empezar.",
    como: [
      "<b>Déjà vu</b> y <b>Familia</b> te dan información.",
      "<b>Resiliencia</b> te acelera estando herido.",
      "<b>Ganas de vivir</b> es la mejor defensa contra el tuneleo, y es gratis.",
    ],
  },
];
