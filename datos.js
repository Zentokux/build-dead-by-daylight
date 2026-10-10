// Datos de la guía de Sobreviviente — Dead by Daylight
// Validado el 10-oct-2026 contra el parche 10.2.0 (Mid-Chapter, en vivo desde el 6-oct-2026). No hay parche posterior.
// Nombres y términos: cliente en español de México (es-MX): localización del juego es-MX, tienda de Steam latam y wiki oficial en español.
// Valores: notas oficiales de Behaviour (Steam / foro) + archivos del juego; los de 10.2.0 vienen de las notas en vivo.
// Uso: nightlight.gg, últimos 28 días (11-sep a 9-oct-2026).

window.DBD_META = {
  parche: "10.2.0 Mid-Chapter",
  fechaParche: "6-oct-2026",
  validado: "10-oct-2026",
};

// estado: "ok" = verificado; "duda" = verificado en parte (ver nota). info = aclaración, no es una duda
window.PERKS = {
  lithe: {
    es: "Agilidad", en: "Lithe", icon: "iconPerks_lithe.png", dueno: "Feng Min",
    efecto: "Tras un salto mediano o rápido: <b>+50 % de Celeridad durante 3 s</b>.",
    coste: "Agotado 60/50/40 s", uso: "1º · 25,28 %", cambio: "Sin cambios recientes", estado: "ok",
  },
  resilience: {
    es: "Resiliencia", en: "Resilience", icon: "iconPerks_resilience.png", dueno: "General",
    efecto: "Estando herido: <b>+7/8/9 %</b> de velocidad al reparar, curar, saltar ventanas, descolgar, sabotear, purificar/bendecir y abrir puertas y cofres.",
    coste: "—", uso: "2º · 23,35 %", cambio: "10.2.0 (antes 3/6/9 %)", estado: "ok",
  },
  woo: {
    es: "Oportunidades", en: "Windows of Opportunity", icon: "iconPerks_windowsOfOpportunity.png", dueno: "Kate Denson",
    efecto: "Ves el aura de las <b>ventanas a 24 m</b> y las saltas un <b>10 %</b> más rápido.",
    coste: "Enfriamiento 40/35/30 s tras saltar", uso: "3º · 20,06 %", cambio: "10.2.0 (rediseño: ya no muestra tarimas ni muros)", estado: "ok",
  },
  dejavu: {
    es: "Déjà vu", en: "Deja Vu", icon: "iconPerks_dejaVu.png", dueno: "General",
    efecto: "Ves el aura de los <b>3 generadores más cercanos entre sí</b> y los reparas un <b>4/5/6 %</b> más rápido.",
    coste: "—", uso: "4º · 19,38 %", cambio: "9.1.0", estado: "ok",
  },
  deadhard: {
    es: "Fajador", en: "Dead Hard", icon: "iconPerks_DeadHard.png", dueno: "David King",
    efecto: "Tras ser descolgado, herido y corriendo, pulsa el botón de habilidad: <b>Resistencia durante 0,5 s</b> (aguantas un golpe sin caer).",
    coste: "Agotado 60/50/40 s", uso: "5º · 19,08 %", cambio: "6.7.0", estado: "ok",
  },
  wtl: {
    es: "Ganas de vivir", en: "Will to Live", icon: "iconPerks_decisiveStrike.png", dueno: "General (con el capítulo de Halloween: Golpe decisivo, de Laurie)",
    efecto: "Durante <b>40/50/60 s</b> tras ser descolgado, si el asesino te agarra o te carga, supera una prueba de habilidad para <b>aturdirlo 4 s</b> y escapar. Te conviertes en la Obsesión. Una vez por partida.",
    coste: "Se desactiva con acciones llamativas, al completarse todos los generadores o tras usarla", uso: "6º · 16,8 %", cambio: "9.4.0 (pasa a ser general y cambia de nombre)", estado: "ok",
    info: "Si tienes el capítulo de Halloween, en tu juego aparece como <b>Golpe decisivo</b>, ventaja única de Laurie, con el mismo efecto. Sin el capítulo es la ventaja general <b>Ganas de vivir</b> (Will to Live), nombre comprobado en el cliente en español de México.",
  },
  adrenaline: {
    es: "Adrenalina", en: "Adrenaline", icon: "iconPerks_adrenaline.png", dueno: "Meg Thomas",
    efecto: "Al energizarse las puertas: <b>te cura un estado de salud</b> y te da <b>+50 % de Celeridad durante 4 s</b>. Funciona aunque estés Agotado.",
    coste: "Agotado 60/50/40 s", uso: "10º · 7,57 %", cambio: "10.1.0 (3 → 4 s)", estado: "ok",
  },
  bond: {
    es: "Vínculo", en: "Bond", icon: "iconPerks_bond.png", dueno: "Dwight Fairfield",
    efecto: "Ves el aura de los demás sobrevivientes a <b>20/28/36 m</b>.",
    coste: "—", uso: "11º · 7,10 %", cambio: "Sin cambios recientes", estado: "ok",
  },
  unbreakable: {
    es: "Inquebrantable", en: "Unbreakable", icon: "iconPerks_unbreakable.png", dueno: "Bill Overbeck",
    efecto: "Si <b>el asesino</b> te deja derribado: te recuperas un <b>25/30/35 %</b> más rápido y puedes <b>levantarte solo una vez</b> por partida.",
    coste: "Un uso por partida", uso: "12º · 7,09 %", cambio: "9.5.0 (solo si te derriba el asesino)", estado: "ok",
  },
  sprint: {
    es: "Esprint", en: "Sprint Burst", icon: "iconPerks_sprintBurst.png", dueno: "Meg Thomas",
    efecto: "Al empezar a correr: <b>+50 % de Celeridad durante 2 s</b>.",
    coste: "Agotado 60/50/40 s", uso: "13º · 6,70 %", cambio: "10.1.0 (3 → 2 s)", estado: "ok",
  },
  wellmake: {
    es: "Sobreviviremos", en: "We'll Make It", icon: "iconPerks_wellMakeIt.png", dueno: "General",
    efecto: "Tras descolgar a alguien, curas a los demás un <b>100 % más rápido</b> durante <b>70/80/90 s</b>.",
    coste: "—", uso: "15º · 6,25 %", cambio: "10.2.0 (antes 30/60/90 s)", estado: "ok",
  },
  kindred: {
    es: "Familia", en: "Kindred", icon: "iconPerks_kindred.png", dueno: "General",
    efecto: "Cuando hay alguien colgado, todos ven las <b>auras de los sobrevivientes</b> y la del <b>asesino si está a 14/15/16 m</b> del gancho.",
    coste: "—", uso: "16º · 5,96 %", cambio: "10.2.0 (antes 8/12/16 m)", estado: "ok",
  },
  botany: {
    es: "Conocimientos de botánica", en: "Botany Knowledge", icon: "iconPerks_botanyKnowledge.png", dueno: "Claudette Morel",
    efecto: "Curas un <b>30/40/50 %</b> más rápido.",
    coste: "—", uso: "18º · 5,23 %", cambio: "9.0.0", estado: "ok",
  },
  hyperfocus: {
    es: "Hiperconcentración", en: "Hyperfocus", icon: "iconPerks_Hyperfocus.png", dueno: "Rebecca Chambers",
    efecto: "Cada prueba de habilidad <b>Excelente</b> al reparar o curar da 1 ficha (máx. 6). Por ficha: +4 % de probabilidad y velocidad de la aguja y <b>+10/20/30 %</b> al bonus de la prueba. Pierdes las fichas con una prueba Buena, un fallo o si paras.",
    coste: "—", uso: "19º · 5,01 %", cambio: "Sin cambios recientes", estado: "ok",
  },
  prove: {
    es: "Demuestra lo que vales", en: "Prove Thyself", icon: "iconPerks_proveThyself.png", dueno: "Dwight Fairfield",
    efecto: "<b>+6/8/10 %</b> de reparación por cada sobreviviente a 4 m (máx. 18/24/30 %). También les afecta a ellos.",
    coste: "—", uso: "20º · 4,82 %", cambio: "7.1.0", estado: "ok",
  },
  hope: {
    es: "Esperanza", en: "Hope", icon: "iconPerks_hope.png", dueno: "General",
    efecto: "Con las puertas energizadas: <b>+3/4/5 % de Celeridad</b> hasta el final de la partida.",
    coste: "—", uso: "37º · 2,48 %", cambio: "9.2.0 (antes 5/6/7 %)", estado: "ok",
  },
  flipflop: {
    es: "Nos vemos", en: "Flip-Flop", icon: "iconPerks_flipFlop.png", dueno: "Ash Williams",
    efecto: "El <b>50 %</b> de lo que te recuperas estando derribado pasa a la barra de forcejeo cuando te cargan (máx. <b>40/45/50 %</b>).",
    coste: "—", uso: "71º · 1,25 %", cambio: "Sin cambios recientes", estado: "ok",
  },
  offrecord: {
    es: "Extraoficialmente", en: "Off the Record", icon: "iconPerks_offTheRecord.png", dueno: "Zarina Kassir",
    efecto: "Hasta que se completen todos los generadores, durante <b>30/35/40 s</b> tras ser descolgado: obtienes <b>Resistencia</b>, tus gruñidos de dolor son un <b>100 % más silenciosos</b> y el asesino <b>no ve tu aura</b>.",
    coste: "—", uso: "76º · 1,17 %", cambio: "9.2.2 (vuelve la Resistencia; 30/35/40 s)", estado: "ok",
  },
  tenacity: {
    es: "Tenacidad", en: "Tenacity", icon: "iconPerks_tenacity.png", dueno: "David Tapp",
    efecto: "Derribado: puedes <b>arrastrarte y recuperarte a la vez</b>, te arrastras con <b>+30/40/50 % de Celeridad</b>, tus gruñidos son un 75 % más bajos y no se puede revelar tu aura.",
    coste: "—", uso: "79º · 1,08 %", cambio: "9.3.0", estado: "ok",
  },
  reassurance: {
    es: "Consuelo", en: "Reassurance", icon: "iconPerks_Reassurance.png", dueno: "Rebecca Chambers",
    efecto: "A 6 m de un sobreviviente colgado, pulsa el botón de habilidad para <b>pausar su sacrificio 20/25/30 s</b>.",
    coste: "Una vez por sobreviviente y gancho", uso: "95º · 0,87 %", cambio: "6.2.0", estado: "ok",
  },
  powerstruggle: {
    es: "Lucha de poderes", en: "Power Struggle", icon: "iconPerks_powerStruggle.png", dueno: "Élodie Rakoto",
    efecto: "Derribado ves el aura de las tarimas. Si te cargan y llevas <b>25/20/15 %</b> de forcejeo junto a una tarima, puedes <b>tirarla, aturdir al asesino</b> y soltarte.",
    coste: "Un uso", uso: "97º · 0,86 %", cambio: "5.5.0", estado: "ok",
  },
  borrowed: {
    es: "Tiempo prestado", en: "Borrowed Time", icon: "iconPerks_borrowedTime.png", dueno: "Bill Overbeck",
    efecto: "El sobreviviente que descuelgas recibe <b>+6/8/10 s de Resistencia</b> y <b>+10 s de Celeridad</b> extra.",
    coste: "—", uso: "102º · 0,74 %", cambio: "Sin cambios recientes", estado: "ok",
  },
  wakeup: {
    es: "¡Despierta!", en: "Wake Up!", icon: "iconPerks_wakeUp.png", dueno: "Quentin Smith",
    efecto: "Con todos los generadores hechos: ves los <b>interruptores de las puertas</b>, los demás ven tu aura mientras abres y abres más rápido (<b>8/9/10 % + 20 %</b> por cada otro sobreviviente vivo).",
    coste: "—", uso: "116º · 0,53 %", cambio: "10.2.0", estado: "ok",
  },
};

// modo: "solo" = solitario (sin voz), "coop" = con amigos en llamada, "ambos"
window.BUILDS = [
  {
    nombre: "Meta: persecución y antitúnel", tag: "Meta", modo: "ambos", color: "#e11d48",
    perks: ["lithe", "woo", "resilience", "wtl"],
    para: "Las 4 ventajas de sobreviviente más usadas ahora mismo. Alarga las persecuciones y te protege si te tunelean tras el gancho. Funciona igual en solitario que en coop porque no depende de los compañeros.",
    sinergia: "Oportunidades te lleva a las ventanas y las salta un 10 % más rápido, lo que facilita el salto rápido que activa <b>Agilidad</b>. Herido, <b>Resiliencia</b> acelera aún más esos saltos. Solo lleva una ventaja que deja Agotado (Agilidad).",
    como: [
      "<b>Oportunidades</b> te marca las ventanas cercanas: corre hacia ellas.",
      "Al saltar rápido, <b>Agilidad</b> te da 3 s de Celeridad para ganar distancia.",
      "Herido, <b>Resiliencia</b> acelera tus saltos y reparaciones: no hace falta curarse.",
      "Si el asesino te tunela tras descolgarte, <b>Ganas de vivir</b> lo aturde y te libera. No repares ni cures mientras esté activa o la pierdes.",
    ],
  },
  {
    nombre: "Solitario: información", tag: "Solitario", modo: "solo", color: "#0ea5e9",
    perks: ["kindred", "bond", "dejavu", "sprint"],
    para: "Para jugar sin hablar con tus compañeros. Las auras sustituyen a la llamada: sabes dónde están todos, qué generadores hacer y si el asesino campea el gancho.",
    sinergia: "<b>Familia</b> y <b>Vínculo</b> te enseñan a tus compañeros, así no van dos al mismo rescate ni llevas al asesino hacia ellos. <b>Déjà vu</b> coordina los generadores sin hablar. <b>Esprint</b> es la única que deja Agotado.",
    como: [
      "<b>Familia</b>: cuando alguien está colgado, mira si el asesino está cerca y si otro compañero ya va a rescatar.",
      "<b>Vínculo</b>: no lleves al asesino hacia tus compañeros y busca a alguien que te cure.",
      "<b>Déjà vu</b>: repara los 3 generadores marcados para no dejar un trío pegado al final.",
      "<b>Esprint</b>: camina normalmente y corre solo cuando te vean, para separarte al empezar la persecución.",
    ],
  },
  {
    nombre: "Solitario: antitúnel", tag: "Solitario", modo: "solo", color: "#a855f7",
    perks: ["wtl", "offrecord", "lithe", "unbreakable"],
    para: "En solitario nadie te avisa ni te cubre tras el gancho. Esta build te deja escapar del tuneleo y levantarte si te dejan en el suelo, sin depender de los compañeros.",
    sinergia: "Tras el descuelgue, <b>Extraoficialmente</b> te oculta y te da Resistencia, y <b>Ganas de vivir</b> te suelta si aun así te carga: dos capas que no se pisan. No lleva Fajador porque su Resistencia se solaparía con la de Extraoficialmente. <b>Agilidad</b> (única que deja Agotado) te da distancia, e <b>Inquebrantable</b> cubre el slug, que en solitario es frecuente.",
    como: [
      "Al bajar del gancho, aléjate: <b>Extraoficialmente</b> oculta tu aura y aguanta un golpe.",
      "Corre a una ventana y salta rápido para activar <b>Agilidad</b>.",
      "Si te carga, <b>Ganas de vivir</b> lo aturde. No repares ni cures mientras dure.",
      "Si te deja en el suelo y nadie viene, levántate con <b>Inquebrantable</b>.",
    ],
  },
  {
    nombre: "Solitario sin DLC: solo ventajas generales", tag: "Gratis", modo: "solo", color: "#14b8a6",
    perks: ["wtl", "resilience", "dejavu", "kindred"],
    para: "Las 4 son ventajas generales: cualquier personaje las saca en la Red Sanguínea sin comprar nada. Es la mejor base para empezar en solitario.",
    sinergia: "Información (<b>Déjà vu</b>, <b>Familia</b>), rendimiento herido (<b>Resiliencia</b>) y antitúnel (<b>Ganas de vivir</b>). No hay ninguna que deje Agotado, así que puedes cambiar una por Esprint o Agilidad cuando las tengas.",
    como: [
      "<b>Déjà vu</b> y <b>Familia</b> te dan información.",
      "<b>Resiliencia</b> te acelera estando herido.",
      "<b>Ganas de vivir</b> es la mejor defensa contra el tuneleo, y es gratis.",
    ],
  },
  {
    nombre: "Coop: generadores en equipo", tag: "Coop", modo: "coop", color: "#f59e0b",
    perks: ["prove", "dejavu", "resilience", "hyperfocus"],
    para: "Para el grupo que se reparte los papeles por voz: uno se lleva la persecución y los demás hacen generadores juntos. Va mejor con una caja de herramientas.",
    sinergia: "<b>Demuestra lo que vales</b> necesita compañeros a 4 m y también los acelera a ellos: en coop pueden quedar en el mismo generador. <b>Déjà vu</b> marca los generadores que conviene hacer, <b>Hiperconcentración</b> premia las pruebas Excelentes y <b>Resiliencia</b> te deja reparar herido sin perder tiempo curándote.",
    como: [
      "Avisa por voz en qué generador de los que marca <b>Déjà vu</b> estás.",
      "Reparen de dos en dos para activar <b>Demuestra lo que vales</b>.",
      "Encadena pruebas Excelentes para acumular fichas de <b>Hiperconcentración</b>.",
      "Herido, <b>Resiliencia</b> te da velocidad extra: sigue reparando.",
    ],
  },
  {
    nombre: "Coop: rescate y curación", tag: "Coop", modo: "coop", color: "#22c55e",
    perks: ["borrowed", "wellmake", "botany", "reassurance"],
    para: "Para el apoyo del grupo. Con voz, el compañero colgado te dice dónde está el asesino, así que no necesitas Familia y puedes llevar más ventajas de rescate.",
    sinergia: "<b>Consuelo</b> te da tiempo para esperar el momento seguro, <b>Tiempo prestado</b> protege al rescatado y, tras el descuelgue, <b>Sobreviviremos</b> (+100 %) y <b>Conocimientos de botánica</b> se suman y dejan la curación en segundos.",
    como: [
      "Si el asesino está cerca del gancho, pausa el sacrificio con <b>Consuelo</b> y espera.",
      "Al descolgar, <b>Tiempo prestado</b> da Resistencia y Celeridad al rescatado.",
      "Después cúralo: <b>Sobreviviremos</b> y <b>Conocimientos de botánica</b> se suman.",
    ],
  },
  {
    nombre: "Coop: final de partida", tag: "Coop", modo: "coop", color: "#eab308",
    perks: ["adrenaline", "hope", "wakeup", "borrowed"],
    para: "Para cuando el grupo llega vivo al último generador: curarse, abrir las puertas rápido y sacar a quien esté colgado.",
    sinergia: "<b>¡Despierta!</b> abre un 20 % más rápido por cada compañero vivo y les enseña tu aura mientras abres: rinde mucho más en coop. <b>Adrenalina</b> (única que deja Agotado) te cura y <b>Esperanza</b> te da Celeridad, y <b>Tiempo prestado</b> asegura el último rescate.",
    como: [
      "Al hacerse el último generador, <b>Adrenalina</b> te cura y te da velocidad.",
      "<b>¡Despierta!</b> te enseña los interruptores: abre la puerta mientras los demás rescatan.",
      "<b>Esperanza</b> te da Celeridad hasta salir.",
      "Si hay alguien colgado, rescátalo con <b>Tiempo prestado</b> para que llegue a la salida.",
    ],
  },
  {
    nombre: "Anti-slug (contra dejarte en el suelo)", tag: "Defensa", modo: "ambos", color: "#64748b",
    perks: ["unbreakable", "tenacity", "flipflop", "powerstruggle"],
    para: "Contra asesinos que dejan a todos en el suelo sin colgarlos. Sirve en los dos modos: en solitario te salvas solo y en coop ganas tiempo hasta que llegue un compañero.",
    sinergia: "<b>Tenacidad</b> te deja recuperarte mientras te arrastras, y esa recuperación llena la barra de <b>Nos vemos</b>: al cargarte ya pasas el 15–25 % que pide <b>Lucha de poderes</b>. Si te levantas con <b>Inquebrantable</b> no hay forcejeo, así que elige: levántate o espera a que te cargue junto a una tarima.",
    como: [
      "En el suelo, <b>Tenacidad</b> te deja arrastrarte rápido mientras te recuperas.",
      "Si el asesino está lejos, levántate con <b>Inquebrantable</b>.",
      "Si viene por ti, quédate junto a una tarima: <b>Nos vemos</b> te da forcejeo inicial…",
      "…y <b>Lucha de poderes</b> tira la tarima para soltarte.",
    ],
  },
];
