// Datos de la guía de Sobreviviente — Dead by Daylight
// Validado el 16-oct-2026 contra el parche en vivo 10.2.1 (arreglos, 14-oct-2026), que no cambia ventajas de sobreviviente; los valores son los de 10.2.0 Mid-Chapter (6-oct-2026).
// Nombres y términos: cliente en español de México (es-MX): localización del juego es-MX, tienda de Steam latam y wiki oficial en español.
// Valores: notas oficiales de Behaviour (Steam / foro) + archivos del juego; los de 10.2.0 vienen de las notas en vivo.

window.DBD_META = {
  parche: "10.2.1",
  fechaParche: "14-oct-2026",
  validado: "16-oct-2026",
};

// estado: "ok" = verificado; "duda" = verificado en parte (ver nota). info = aclaración, no es una duda
window.PERKS = {
  lithe: {
    es: "Agilidad", en: "Lithe", icon: "iconPerks_lithe.png", dueno: "Feng Min",
    efecto: "Tras un salto mediano o rápido: <b>+50 % de Celeridad durante 3 s</b>.",
    coste: "Agotado 60/50/40 s", cambio: "Sin cambios recientes", estado: "ok",
  },
  resilience: {
    es: "Resiliencia", en: "Resilience", icon: "iconPerks_resilience.png", dueno: "General",
    efecto: "Estando herido: <b>+7/8/9 %</b> de velocidad al reparar, curar, saltar, descolgar, sabotear, purificar/bendecir y abrir puertas y cofres.",
    coste: "—", cambio: "10.2.0 (antes 3/6/9 %)", estado: "ok",
  },
  dejavu: {
    es: "Déjà vu", en: "Deja Vu", icon: "iconPerks_dejaVu.png", dueno: "General",
    efecto: "Ves el aura de los <b>3 generadores más cercanos entre sí</b> y los reparas un <b>4/5/6 %</b> más rápido.",
    coste: "—", cambio: "9.1.0", estado: "ok",
  },
  deadhard: {
    es: "Fajador", en: "Dead Hard", icon: "iconPerks_DeadHard.png", dueno: "David King",
    efecto: "Tras ser descolgado (o descolgarte tú), herido y corriendo, presiona el botón de habilidad activa: <b>Resistencia durante 0,5 s</b> (aguantas un golpe sin caer). Queda lista hasta que la usas y se reactiva en el siguiente descuelgue.",
    coste: "Agotado 60/50/40 s", cambio: "6.7.0", estado: "ok",
  },
  wtl: {
    es: "Ganas de vivir", en: "Will to Live", icon: "iconPerks_decisiveStrike.png", dueno: "General (con el capítulo de Halloween: Golpe decisivo, de Laurie)",
    efecto: "Durante <b>40/50/60 s</b> tras ser descolgado, si el asesino te carga, supera una prueba de habilidad para <b>aturdirlo 4 s</b> y escapar. Te conviertes en la Obsesión. Una vez por partida.",
    coste: "Se desactiva con acciones destacadas, al completarse todos los generadores o tras usarla", cambio: "9.4.0 (pasa a ser general y cambia de nombre)", estado: "ok",
    info: "Si tienes el capítulo de Halloween, en tu juego aparece como <b>Golpe decisivo</b>, ventaja única de Laurie, con el mismo efecto. Sin el capítulo es la ventaja general <b>Ganas de vivir</b> (Will to Live), nombre comprobado en el cliente en español de México.",
  },
  adrenaline: {
    es: "Adrenalina", en: "Adrenaline", icon: "iconPerks_adrenaline.png", dueno: "Meg Thomas",
    efecto: "Al energizarse las puertas: <b>te cura un estado de salud</b> y te da <b>+50 % de Celeridad durante 4 s</b>. Funciona aunque estés Agotado.",
    coste: "Agotado 60/50/40 s", cambio: "10.1.0 (3 → 4 s)", estado: "ok",
  },
  wellmake: {
    es: "Sobreviviremos", en: "We'll Make It", icon: "iconPerks_wellMakeIt.png", dueno: "General",
    efecto: "Tras descolgar a alguien, curas a los demás un <b>100 % más rápido</b> durante <b>70/80/90 s</b>.",
    coste: "—", cambio: "10.2.0 (antes 30/60/90 s)", estado: "ok",
  },
  kindred: {
    es: "Familia", en: "Kindred", icon: "iconPerks_kindred.png", dueno: "General",
    efecto: "Si te cuelgan a ti, todos ven las <b>auras de los sobrevivientes</b> y la del <b>asesino si está a 14/15/16 m</b> del gancho. Si cuelgan a otro, las ves tú.",
    coste: "—", cambio: "10.2.0 (antes 8/12/16 m)", estado: "ok",
  },
  botany: {
    es: "Conocimientos de botánica", en: "Botany Knowledge", icon: "iconPerks_botanyKnowledge.png", dueno: "Claudette Morel",
    efecto: "Curas un <b>30/40/50 %</b> más rápido.",
    coste: "—", cambio: "9.0.0", estado: "ok",
  },
  hyperfocus: {
    es: "Hiperconcentración", en: "Hyperfocus", icon: "iconPerks_Hyperfocus.png", dueno: "Rebecca Chambers",
    efecto: "Cada prueba de habilidad <b>Excelente</b> al reparar o curar da 1 distintivo (máx. 6). Por distintivo: +4 % de probabilidad y velocidad de la aguja y <b>+10/20/30 %</b> al bonus de la prueba. Pierdes los distintivos con una prueba Buena, un fallo o si paras.",
    coste: "—", cambio: "Sin cambios recientes", estado: "ok",
  },
  prove: {
    es: "Demuestra lo que vales", en: "Prove Thyself", icon: "iconPerks_proveThyself.png", dueno: "Dwight Fairfield",
    efecto: "<b>+6/8/10 %</b> de reparación por cada sobreviviente a 4 m (máx. 18/24/30 %). También les afecta a ellos.",
    coste: "—", cambio: "7.1.0", estado: "ok",
  },
  darksense: {
    es: "Percepción oscura", en: "Dark Sense", icon: "iconPerks_darkSense.png", dueno: "General",
    efecto: "Cada vez que se completa un generador, la próxima vez que el asesino se acerque a menos de 20 m, durante <b>13/14/15 s</b> ves su aura, la de los demás sobrevivientes y la de las tarimas y ventanas a menos de 32 m.",
    coste: "Una vez por generador completado", cambio: "10.2.0 (antes 24 m, 5/7/10 s y solo el aura del asesino)", estado: "ok",
  },
  reassurance: {
    es: "Consuelo", en: "Reassurance", icon: "iconPerks_Reassurance.png", dueno: "Rebecca Chambers",
    efecto: "A 6 m de un sobreviviente colgado, presiona el botón de habilidad activa para <b>pausar su sacrificio 20/25/30 s</b>.",
    coste: "Una vez por sobreviviente y gancho", cambio: "6.2.0", estado: "ok",
  },
  borrowed: {
    es: "Tiempo prestado", en: "Borrowed Time", icon: "iconPerks_borrowedTime.png", dueno: "Bill Overbeck",
    efecto: "El sobreviviente que descuelgas recibe <b>+6/8/10 s de Resistencia</b> y <b>+10 s de Celeridad</b> extra.",
    coste: "—", cambio: "Sin cambios recientes", estado: "ok",
  },
  flowstate: {
    es: "Estado de flujo", en: "Flow State", icon: "iconPerks_FlowState.png", dueno: "Kwon Tae-young",
    efecto: "Ganas 1 distintivo por cada generador completado (máx. 5). Por distintivo, <b>bendices y purificas tótems, curas y descuelgas un 13/14/15 % más rápido</b>.",
    coste: "—", cambio: "10.2.0 (antes 8/9/10 % por distintivo)", estado: "ok",
    info: "Kwon Tae-young es surcoreano (capítulo de 9.5.0). Nombre tomado de la wiki oficial en español; no se encontró en los textos del juego.",
  },
  resurgence: {
    es: "Resurgimiento", en: "Resurgence", icon: "iconPerks_Resurgence.png", dueno: "Jill Valentine",
    efecto: "Al ser descolgado, obtienes al instante un <b>50/60/70 % de progreso de curación</b>.",
    coste: "Cada vez que te descuelgan", cambio: "8.1.0", estado: "ok",
  },
  plottwist: {
    es: "Giro argumental", en: "Plot Twist", icon: "iconPerks_PlotTwist.png", dueno: "Nicolas Cage",
    efecto: "Herido, agachado y quieto: presiona el botón de habilidad activa para <b>derribarte en silencio</b>. Te recuperas solo un 25 % más rápido y, al levantarte, quedas <b>sano</b> con <b>+50 % de Celeridad durante 2/3/4 s</b>.",
    coste: "Un uso; se recarga al completarse los generadores", cambio: "9.2.0", estado: "ok",
    info: "Nombre tomado de la wiki oficial en español; no se encontró en los textos del juego.",
  },
  boonhealing: {
    es: "Bendición: Círculo de curación", en: "Boon: Circle of Healing", icon: "iconPerks_BoonCircleOfHealing.png", dueno: "Mikaela Reid",
    efecto: "Bendice un tótem. En su radio de 24 m: curas a otros un <b>50/75/100 % más rápido</b> sin botiquín y los heridos ven su aura entre sí. <b>No te permite curarte a ti mismo.</b>",
    coste: "Necesita un tótem", cambio: "6.7.0", estado: "ok",
  },
  boonshadow: {
    es: "Bendición: Paso de las sombras", en: "Boon: Shadow Step", icon: "iconPerks_BoonShadowStep.png", dueno: "Mikaela Reid",
    efecto: "Bendice un tótem. En su radio de 24 m: <b>no dejas marcas de arañazos</b> y el asesino <b>no ve tu aura</b>. El efecto dura 2/3/4 s al salir.",
    coste: "Necesita un tótem", cambio: "Sin cambios recientes", estado: "ok",
    info: "Nombre de los textos del juego en español de México; la wiki en español la llama «Paso Sombrío».",
  },
  boonsteadfast: {
    es: "Bendición: Determinación", en: "Boon: Steadfast", icon: "iconPerks_BoonSteadfast.png", dueno: "Aurora Stardotter",
    efecto: "Bendice un tótem. En su radio de 24 m, los generadores <b>retroceden un 50 % más lento</b>, se reparan un <b>8/9/10 % más rápido</b> y ves su aura.",
    coste: "Necesita un tótem", cambio: "10.1.0 (ventaja nueva)", estado: "ok",
  },
  fma: {
    es: "Cinco movimientos adelante", en: "Five Moves Ahead", icon: "iconPerks_FiveMovesAhead.png", dueno: "Kwon Tae-young",
    efecto: "En el radio de terror o en persecución: ves el aura de las <b>5 tarimas más cercanas</b>. Tras tirar una tarima, <b>empiezas a moverte un 50 % antes</b>.",
    coste: "Enfriamiento 40/35/30 s tras tirar una tarima", cambio: "10.2.0 (ya no muestra ventanas, solo tarimas)", estado: "ok",
    info: "Nombre de la wiki oficial en español (es-MX); en los textos de España aparece como «Cinco pasos por delante».",
  },
  tenacity: {
    es: "Tenacidad", en: "Tenacity", icon: "iconPerks_tenacity.png", dueno: "David Tapp",
    efecto: "Derribado: puedes <b>arrastrarte y recuperarte a la vez</b>, te arrastras con <b>+30/40/50 % de Celeridad</b>, tus gruñidos son un 75 % más bajos y el asesino no ve tu aura.",
    coste: "—", cambio: "9.3.0", estado: "ok",
  },
  boonexpo: {
    es: "Bendición: Exponencial", en: "Boon: Exponential", icon: "T_iconPerks_BoonExponential.png", dueno: "Jonah Vasquez",
    efecto: "Bendice un tótem. En su radio de 24 m, los sobrevivientes derribados se recuperan un <b>90/95/100 % más rápido</b> y pueden <b>levantarse solos</b>.",
    coste: "Necesita un tótem", cambio: "Sin cambios recientes", estado: "ok",
  },
  soulguard: {
    es: "Defensa del alma", en: "Soul Guard", icon: "iconPerks_soulGuard.png", dueno: "Cheryl Mason",
    efecto: "Si sufres un maleficio, puedes levantarte solo. Cada vez que te levantas solo del todo, ganas <b>Resistencia durante 4/6/8 s</b>.",
    coste: "Enfriamiento 30 s", cambio: "Sin cambios recientes", estado: "ok",
    info: "Nombre de la wiki oficial en español (es-MX); en los textos de España aparece como «Salvaguarda de alma».",
  },
  wglf: {
    es: "Vamos a vivir para siempre", en: "We're Gonna Live Forever", icon: "iconPerks_WereGonnaLiveForever.png", dueno: "David King",
    efecto: "Levantas a los sobrevivientes derribados un <b>100 % más rápido</b>. Al terminar de levantar a uno, gana <b>Resistencia durante 6/8/10 s</b>.",
    coste: "Enfriamiento 30 s (de la Resistencia)", cambio: "Sin cambios recientes", estado: "ok",
  },
  premonition: {
    es: "Premonición", en: "Premonition", icon: "iconPerks_premonition.png", dueno: "General",
    efecto: "Fuera de persecución, cuando miras hacia el asesino a menos de 32 m: oyes un aviso y ves su aura durante <b>3 s</b>.",
    coste: "Enfriamiento 55/50/45 s", cambio: "10.2.0 (rehecha)", estado: "ok",
  },
  poised: {
    es: "Serenidad", en: "Poised", icon: "iconPerks_poised.png", dueno: "Jane Romero",
    efecto: "Al completarse un generador, no dejas marcas de arañazos durante <b>20/25/30 s</b>. La primera vez que empiezas a reparar cada generador, ves el aura del asesino durante <b>8 s</b>.",
    coste: "—", cambio: "9.2.0", estado: "ok",
  },
  builttolast: {
    es: "Diseñado para durar", en: "Built to Last", icon: "iconPerks_builtToLast.png", dueno: "Felix Richter",
    efecto: "Con un objeto gastado, escóndete en un casillero unos segundos y el objeto se recarga: al <b>99 %</b>, luego al 66 % y luego al 33 % (3 usos).",
    coste: "—", cambio: "9.1.0", estado: "duda",
    nota: "Tiempo en el casillero: la wiki dice 12/10/8 s y el texto del juego en la API 14/12/10 s.",
  },
  downtothelast: {
    es: "Hasta terminar con el último", en: "Down to the Last", icon: "iconPerks_soleSurvivor.png", dueno: "General",
    efecto: "Ganas 1 distintivo cada vez que te cuelgan o completas un generador (máx. 6). Por cada distintivo, los demás abren las puertas un <b>10 %</b> más rápido. Si eres el último sobreviviente y tienes 3 o más: puedes abrir la trampilla sin llave y el asesino no ve tu aura <b>6/8/10 s</b> por distintivo.",
    coste: "—", cambio: "10.2.0 (rehecha)", estado: "ok",
    info: "Nombre de la wiki oficial en español. Quien tiene el capítulo de Halloween la conserva como «Solo quedo yo», de Laurie Strode.",
  },
  woo: {
    es: "Oportunidades", en: "Windows of Opportunity", icon: "iconPerks_windowsOfOpportunity.png", dueno: "Kate Denson",
    efecto: "Ves el aura de las ventanas a menos de <b>24 m</b> y saltas ventanas un <b>10 %</b> más rápido. Tras saltar una ventana entra en enfriamiento.",
    coste: "Enfriamiento 40/35/30 s", cambio: "10.2.0 (rehecha: solo ventanas)", estado: "ok",
  },
  finesse: {
    es: "Elegancia", en: "Finesse", icon: "iconPerks_finesse.png", dueno: "Lara Croft",
    efecto: "Estando sano, tus saltos rápidos son un <b>20 %</b> más rápidos.",
    coste: "Enfriamiento 40/35/30 s tras saltar rápido", cambio: "Sin cambios recientes", estado: "ok",
    info: "Nombre de la tienda de Steam latam y la wiki en español.",
  },
  unbreakable: {
    es: "Inquebrantable", en: "Unbreakable", icon: "iconPerks_unbreakable.png", dueno: "Bill Overbeck",
    efecto: "Si te derriba el asesino, te recuperas un <b>25/30/35 %</b> más rápido. <b>Una vez por partida</b> puedes levantarte del todo tú solo.",
    coste: "Una vez por partida", cambio: "9.5.0", estado: "ok",
  },
  roadlife: {
    es: "Vida itinerante", en: "Road Life", icon: "iconPerks_roadLife.png", dueno: "Vee Boonyasak",
    efecto: "Herido y reparando: ganas 1 distintivo por cada prueba Excelente y pierdes 1 por cada fallo. Con <b>6/5/4</b> distintivos los gastas y puedes curarte tú solo, un <b>10 %</b> más rápido; termina 4 s después de dejar de curarte.",
    coste: "—", cambio: "10.2.0 (ya no afecta a curar a otros)", estado: "ok",
    info: "Nombre de la tienda de Steam latam y la wiki en español.",
  },
  offrecord: {
    es: "Extraoficialmente", en: "Off the Record", icon: "iconPerks_offTheRecord.png", dueno: "Zarina Kassir",
    efecto: "Hasta completar los generadores, cada vez que te descuelgan, durante <b>30/35/40 s</b>: tienes <b>Resistencia</b>, tus gruñidos de dolor son un 100 % más silenciosos y el asesino no ve tu aura.",
    coste: "—", cambio: "9.2.2", estado: "duda",
    nota: "La wiki añade que no dejas marcas de arañazos, que la Resistencia se cancela con acciones destacadas y que se desactiva al energizar las puertas; el texto del juego no lo dice.",
  },
  stb: {
    es: "Cargar a cuestas", en: "Shoulder the Burden", icon: "iconPerks_shoulderTheBurden.png", dueno: "Taurie Cain",
    efecto: "Una vez por partida, si no tienes 2 estados de gancho, junto a un sobreviviente colgado presiona el botón de habilidad activa 2 para descolgarlo: <b>él pierde 1 estado de gancho y tú lo ganas</b>, gritas, quedas herido y sufres Desesperanza durante <b>160/140/120 s</b>.",
    coste: "Una vez por partida", cambio: "10.2.0 (antes Expuesto 60/50/40 s; ahora quedas herido y con Desesperanza)", estado: "ok",
    info: "Nombre de la tienda de Steam latam y la wiki en español.",
  },
};

window.BUILDS = [
  // ---------------------------------------------------------------- SOLITARIO
  {
    nombre: "Solitario: antitúnel", tag: "Antitúnel", modo: "solo", color: "#e11d48",
    contra: ["Tuneleo"],
    perks: ["wtl", "lithe", "fma", "resurgence"],
    para: "Para no morir tuneleado tras el gancho y alargar la persecución cuando vuelve por ti.",
    sinergia: "Al descolgarte, <b>Resurgimiento</b> te deja con un 50-70 % de la curación hecha. Si te carga, <b>Ganas de vivir</b> lo aturde; curarte la desactiva, así que termina la curación cuando ya no la necesites. <b>Cinco movimientos adelante</b> te marca las tarimas y <b>Agilidad</b> (única que deja Agotado) te da distancia al saltar.",
    como: [
      "Tras el gancho, aléjate: <b>Resurgimiento</b> ya te dejó medio curado; termina de curarte cuando ya no necesites <b>Ganas de vivir</b>.",
      "Si vuelve por ti, corre a las tarimas que marca <b>Cinco movimientos adelante</b> y salta rápido para activar <b>Agilidad</b>.",
      "Si te carga, <b>Ganas de vivir</b> lo aturde: no repares ni cures mientras esté activa.",
    ],
    fuente: "Otzdarva, «Advanced Solo Build» (otzdarva-builds.com, 15-oct-2026)",
  },
  {
    nombre: "Solitario: información sin DLC", tag: "Gratis", modo: "solo", color: "#14b8a6",
    contra: ["Te sorprende reparando"],
    perks: ["kindred", "premonition", "darksense", "wtl"],
    para: "Las 4 son ventajas generales: no hay que comprar nada. Siempre sabes dónde está el asesino.",
    sinergia: "<b>Premonición</b> te avisa y te muestra al asesino cuando miras hacia él. Tras cada generador, <b>Percepción oscura</b> te enseña al asesino, tarimas y ventanas cuando se acerca. <b>Familia</b> es la información del gancho y <b>Ganas de vivir</b> te salva del tuneleo. Ninguna deja Agotado.",
    como: [
      "Al reparar, gira la cámara de vez en cuando: <b>Premonición</b> te avisa si el asesino viene.",
      "Cuando se acerque, mira por dónde huir con <b>Percepción oscura</b>.",
      "<b>Familia</b> te dice si conviene ir al gancho; si te tunelean, <b>Ganas de vivir</b> lo aturde.",
    ],
    fuente: "Otzdarva, «Beginner Starter Build» y sus opiniones sobre el 10.2.0 (Premonición y Percepción oscura)",
  },
  {
    nombre: "Solitario: persecución", tag: "Persecución", modo: "solo", color: "#f97316",
    contra: ["Asesino que te persigue sin soltarte"],
    perks: ["woo", "fma", "finesse", "lithe"],
    para: "Para quien se lleva al asesino: cada tarima y ventana a la vista, y saltos más rápidos.",
    sinergia: "Desde el 10.2.0 la información está repartida: <b>Cinco movimientos adelante</b> marca las tarimas y <b>Oportunidades</b> las ventanas. Sano, <b>Elegancia</b> acelera los saltos rápidos y <b>Oportunidades</b> los de ventana: se combinan (la mayor cuenta entera y la otra a la mitad). <b>Agilidad</b> es la única que deja Agotado.",
    como: [
      "Antes de que llegue, mira dónde están las ventanas (<b>Oportunidades</b>) y las tarimas (<b>Cinco movimientos adelante</b>).",
      "Sano, haz un salto rápido: <b>Elegancia</b> lo acelera y luego entra en enfriamiento (40/35/30 s).",
      "Cuando te alcance, salta rápido para activar <b>Agilidad</b> y gana distancia.",
    ],
    fuente: "Otzdarva, «Chase Oriented Build»; Otzdarva sobre el 10.2.0: Oportunidades se llevará junto a Cinco movimientos adelante",
  },
  {
    nombre: "Solitario: generadores", tag: "Reparar", modo: "solo", color: "#f59e0b",
    contra: ["3-gen (encerrar 3 generadores)"],
    perks: ["dejavu", "poised", "resurgence", "builttolast"],
    para: "Para hacer generadores sin que el asesino te encierre. Lleva una caja de herramientas.",
    sinergia: "<b>Déjà vu</b> marca los 3 generadores que forman el 3-gen. <b>Serenidad</b> te enseña al asesino al empezar cada generador y borra tus marcas al completarlo. <b>Diseñado para durar</b> recarga la caja en un casillero y <b>Resurgimiento</b> te da un 50-70 % de curación al descolgarte. Ninguna deja Agotado.",
    como: [
      "Repara los generadores que marca <b>Déjà vu</b> con la caja de herramientas.",
      "Al empezar cada uno, mira dónde está el asesino con <b>Serenidad</b>.",
      "Caja gastada: escóndete en un casillero (<b>Diseñado para durar</b>). Tras el gancho, cúrate con <b>Resurgimiento</b>.",
    ],
    fuente: "Otzdarva, «Gen Rush Solo Build»; foro oficial de Behaviour (hilo 472967: Déjà vu, la mejor de generadores en solitario)",
  },
  {
    nombre: "Solitario: rescate y curación", tag: "Rescate", modo: "solo", color: "#22c55e",
    contra: ["Campeo del gancho"],
    perks: ["kindred", "reassurance", "borrowed", "wellmake"],
    hibrida: { sale: "reassurance", entra: "lithe", porque: "Si tras rescatar el asesino se viene por ti, cambia Consuelo por <b>Agilidad</b>: sigues rescatando y curando, pero puedes escapar de la persecución." },
    para: "Para ser quien saca a los compañeros del gancho y los cura, en partidas sin voz. Cubre las tres fases: decidir si es seguro, descolgar y curar.",
    sinergia: "<b>Familia</b> te dice si el asesino campea el gancho (a 14–16 m) y si otro ya va. Si está cerca, <b>Consuelo</b> pausa el sacrificio hasta 30 s. Al descolgar, <b>Tiempo prestado</b> protege al rescatado y <b>Sobreviviremos</b> te deja curarlo el doble de rápido durante 90 s. Ninguna deja Agotado.",
    como: [
      "Cuando cuelguen a alguien, mira con <b>Familia</b> dónde está el asesino y si ya va otro.",
      "Si el asesino está cerca, acércate a 6 m y pausa el sacrificio con <b>Consuelo</b>.",
      "Descuelga cuando se aleje: <b>Tiempo prestado</b> protege al rescatado.",
      "Llévalo a un lugar seguro y cúralo con <b>Sobreviviremos</b>.",
    ],
  },
  {
    nombre: "Solitario: anti-slug", tag: "Anti-slug", modo: "solo", color: "#64748b",
    contra: ["Slug (te deja en el suelo)"],
    perks: ["unbreakable", "soulguard", "tenacity", "lithe"],
    para: "Contra el asesino que te deja en el suelo. No depende de ningún tótem, que ahora el asesino puede romper o bloquear.",
    sinergia: "<b>Inquebrantable</b> te levanta tú solo una vez y siempre te recuperas más rápido. Al levantarte, <b>Defensa del alma</b> te da Resistencia para aguantar el siguiente golpe. Mientras te recuperas, <b>Tenacidad</b> te deja arrastrarte rápido y sin aura. <b>Agilidad</b> (única que deja Agotado) es para que no te tumben tan pronto.",
    como: [
      "En el suelo, arrástrate lejos del asesino con <b>Tenacidad</b>: no ve tu aura.",
      "Levántate tú solo con <b>Inquebrantable</b>: <b>Defensa del alma</b> te protege del siguiente golpe.",
      "En persecución, salta rápido para activar <b>Agilidad</b>.",
    ],
    fuente: "Otzdarva, «Slug-prevention Build» (Inquebrantable + Defensa del alma); Tenacidad y Agilidad añadidas por mecánica",
  },
  {
    nombre: "Solitario: escapista", tag: "Final", modo: "solo", color: "#eab308",
    contra: ["Te quedas último"],
    perks: ["dejavu", "resurgence", "downtothelast", "adrenaline"],
    para: "Para salir aunque caiga el equipo: si te quedas último, la trampilla es tuya.",
    sinergia: "Cada gancho y cada generador que completas suma distintivos a <b>Hasta terminar con el último</b>: con 3 o más, siendo el último, abres la trampilla sin llave y el asesino no ve tu aura. <b>Déjà vu</b> te dice qué generadores hacer, <b>Resurgimiento</b> te cura tras el gancho y <b>Adrenalina</b> (única que deja Agotado) te cura al final.",
    como: [
      "Repara los generadores que marca <b>Déjà vu</b>: cada uno suma a <b>Hasta terminar con el último</b>.",
      "Tras el gancho, cúrate rápido con <b>Resurgimiento</b>.",
      "Si quedas último con 3 distintivos, busca la trampilla; cuando se completen todos los generadores, <b>Adrenalina</b> te cura.",
    ],
    fuente: "Otzdarva, «Solo Escapist Build»; Otzdarva sobre el 10.2.0: el último sobreviviente puede abrir la trampilla",
  },
  {
    nombre: "Solitario: autocuración", tag: "Curación", modo: "solo", color: "#10b981",
    contra: ["Desgaste (te hiere y se va)"],
    perks: ["resurgence", "roadlife", "plottwist", "botany"],
    para: "Para curarte sin depender de nadie, sin la lentitud de Autocuración.",
    sinergia: "Herido y reparando, <b>Vida itinerante</b> suma distintivos con cada prueba Excelente y te deja curarte solo. <b>Conocimientos de botánica</b> acelera esa curación: se combinan (la mayor cuenta entera y la otra a la mitad). <b>Giro argumental</b> es la curación de emergencia y <b>Resurgimiento</b> te da un 50-70 % de curación al descolgarte. Ninguna deja Agotado.",
    como: [
      "Herido, sigue reparando y acierta pruebas Excelentes para cargar <b>Vida itinerante</b>.",
      "Cúrate tú solo cuando la tengas; <b>Conocimientos de botánica</b> lo acelera.",
      "Herido y lejos del asesino, agáchate quieto y usa <b>Giro argumental</b> para quedar sano. Tras el gancho, <b>Resurgimiento</b> te deja medio curado.",
    ],
    fuente: "Otzdarva recomienda Vida itinerante, Giro argumental y Resurgimiento; la combinación con Conocimientos de botánica es por mecánica",
  },
  // ---------------------------------------------------------------- COOP
  {
    nombre: "Coop: corredor", tag: "Persecución", modo: "coop", color: "#f43f5e",
    contra: ["Asesino que te persigue sin soltarte"],
    perks: ["lithe", "woo", "fma", "resilience"],
    hibrida: { sale: "resilience", entra: "wtl", porque: "Si el asesino te tunelea a ti, cambia Resiliencia por <b>Ganas de vivir</b>: lo aturde si te carga tras el gancho." },
    para: "Para quien se lleva al asesino mientras los otros tres reparan.",
    sinergia: "<b>Cinco movimientos adelante</b> marca las tarimas y <b>Oportunidades</b> las ventanas. Herido, <b>Resiliencia</b> acelera los saltos y <b>Oportunidades</b> los de ventana: se combinan (la mayor cuenta entera y la otra a la mitad). <b>Agilidad</b> es la única que deja Agotado.",
    como: [
      "Avisa por voz cuando vaya por ti y llévalo lejos de los generadores del grupo.",
      "Usa las tarimas de <b>Cinco movimientos adelante</b> y las ventanas de <b>Oportunidades</b>; salta rápido para activar <b>Agilidad</b>.",
      "Herido, no te pares a curarte: <b>Resiliencia</b> te acelera.",
    ],
    fuente: "Otzdarva sobre el 10.2.0 (Oportunidades con Cinco movimientos adelante; los bonus de salto se combinan); reglamento del DBD World Cup",
  },
  {
    nombre: "Coop: generadores en equipo", tag: "Reparar", modo: "coop", color: "#f59e0b",
    contra: ["3-gen (encerrar 3 generadores)"],
    perks: ["prove", "dejavu", "hyperfocus", "resilience"],
    hibrida: { sale: "prove", entra: "deadhard", porque: "Si el asesino va por ti, cambia Demuestra lo que vales por <b>Fajador</b>: reparas un poco menos en grupo, pero aguantas un golpe tras el gancho y no se pierde por volver a reparar." },
    para: "Para los que reparan mientras uno se lleva la persecución. Va mejor con caja de herramientas.",
    sinergia: "<b>Demuestra lo que vales</b> acelera a todos los que reparan a 4 m: en coop pueden quedar en el mismo generador. <b>Déjà vu</b> marca cuáles hacer, <b>Hiperconcentración</b> premia las Excelentes y <b>Resiliencia</b> te deja reparar herido. Los tres bonus de reparación se combinan: el mayor cuenta entero, el segundo a la mitad y el tercero a un cuarto; Hiperconcentración no entra en la cuenta porque mejora las pruebas de habilidad, no la velocidad.",
    como: [
      "Avisa por voz en qué generador de <b>Déjà vu</b> estás.",
      "Reparen de dos en dos para activar <b>Demuestra lo que vales</b>.",
      "Encadena Excelentes para los distintivos de <b>Hiperconcentración</b>.",
      "Herido, <b>Resiliencia</b> te da velocidad extra: sigue reparando.",
    ],
  },
  {
    nombre: "Coop: rescate", tag: "Rescate", modo: "coop", color: "#16a34a",
    contra: ["Campeo del gancho", "Tuneleo"],
    perks: ["borrowed", "wellmake", "reassurance", "stb"],
    hibrida: { sale: "stb", entra: "lithe", porque: "Si el asesino se viene por ti tras rescatar, cambia Cargar a cuestas por <b>Agilidad</b> para escapar." },
    para: "Para quien saca a los compañeros del gancho y los cura. Con la voz sabes cuándo ir.",
    sinergia: "<b>Consuelo</b> pausa el sacrificio para descolgar a salvo. <b>Tiempo prestado</b> alarga la protección del rescatado. Si tunelean a alguien en su 2.º gancho, <b>Cargar a cuestas</b> te pasa a ti uno de sus estados de gancho. <b>Sobreviviremos</b> te deja curarlo el doble de rápido. Ninguna deja Agotado.",
    como: [
      "Si el asesino campea, acércate y pausa el sacrificio con <b>Consuelo</b>.",
      "Descuelga: <b>Tiempo prestado</b> protege al rescatado; si está en su 2.º gancho, usa <b>Cargar a cuestas</b>.",
      "Llévalo a un lugar seguro y cúralo con <b>Sobreviviremos</b>.",
    ],
    fuente: "Reglamento del DBD World Cup (prohíbe Tiempo prestado, Consuelo y Cargar a cuestas por fuertes); Otzdarva y notas oficiales: Cargar a cuestas es fuerte en grupos coordinados",
  },
  {
    nombre: "Coop: antitúnel", tag: "Antitúnel", modo: "coop", color: "#be123c",
    contra: ["Tuneleo"],
    perks: ["offrecord", "wtl", "lithe", "resilience"],
    para: "Para quien el asesino elige tunelear: dos capas de protección tras el gancho.",
    sinergia: "Al descolgarte, <b>Extraoficialmente</b> te da Resistencia y esconde tu aura. Si aun así te carga, <b>Ganas de vivir</b> lo aturde. <b>Agilidad</b> (única que deja Agotado) te da distancia y <b>Resiliencia</b> acelera tus saltos herido.",
    como: [
      "Tras descolgarte, aléjate: <b>Extraoficialmente</b> esconde tu aura y aguanta un golpe.",
      "Si te alcanza, salta rápido para activar <b>Agilidad</b>; herido, <b>Resiliencia</b> te acelera.",
      "Si te carga, <b>Ganas de vivir</b> lo aturde: no repares ni cures mientras esté activa.",
    ],
    fuente: "Reglamento del DBD World Cup (prohíbe Extraoficialmente por fuerte); notas oficiales del 10.1.0 y 10.2.0",
  },
  {
    nombre: "Coop: anti-slug con Bendición", tag: "Anti-slug", modo: "coop", color: "#475569",
    contra: ["Slug (deja a todos en el suelo)"],
    perks: ["boonexpo", "soulguard", "wglf", "boonshadow"],
    para: "Basada en una build tuya: el grupo no se queda tirado en el suelo. Un tótem bendecido te levanta solo, te protege al levantarte y esconde a todos en su zona.",
    sinergia: "Las 2 Bendiciones comparten tótem. En la zona de <b>Exponencial</b> te levantas solo, y al hacerlo <b>Defensa del alma</b> te da Resistencia 8 s para que no te vuelvan a tumbar de un golpe (no hagas acciones destacadas mientras dure). Si cae un compañero, <b>Vamos a vivir para siempre</b> lo levanta el doble de rápido y también le da Resistencia. Con <b>Paso de las sombras</b>, nadie en la zona deja marcas de arañazos y el asesino no ve su aura. Ninguna deja Agotado. Ojo con Esperanza rota (asesino): destruye el tótem bendecido y bloquea los tótems unos segundos.",
    como: [
      "Bendice un tótem entre generadores y avisa por voz dónde está.",
      "Si te tumban, arrástrate a la zona y levántate solo con <b>Exponencial</b>: <b>Defensa del alma</b> te da Resistencia.",
      "Si cae un compañero, levántalo con <b>Vamos a vivir para siempre</b>: el doble de rápido y con Resistencia.",
      "Persigue cerca de la zona: con <b>Paso de las sombras</b> el asesino pierde tu rastro.",
    ],
  },
  {
    nombre: "Coop: Bendiciones con Estado de flujo", tag: "Bendiciones", modo: "coop", color: "#6366f1",
    contra: ["Regresión de generadores", "Desgaste"],
    perks: ["boonhealing", "boonshadow", "boonsteadfast", "flowstate"],
    hibrida: { sale: "boonsteadfast", entra: "lithe", porque: "Si eres el que más persiguen, cambia Determinación por <b>Agilidad</b>: con Paso de las sombras y Agilidad pierdes al asesino en la zona." },
    para: "Un tótem bendecido convierte su zona (24 m) en refugio del grupo: curación rápida, sigilo y generadores que no retroceden. Con voz, todos saben dónde está.",
    sinergia: "Las 3 Bendiciones comparten tótem: bendices una vez y funcionan todas. <b>Estado de flujo</b> crece con cada generador: cuando el asesino apaga el tótem, vuelves a bendecir otro más rápido, y además curas y descuelgas más rápido. <b>Círculo de curación</b> no te cura a ti mismo. No la combines con un compañero que purifique tótems. Ojo con Esperanza rota (asesino): destruye el tótem bendecido y, desde 10.2.0, bloquea los tótems 16-20 s, así que no podrás volver a bendecir enseguida. Al curar a otros, Círculo de curación y Estado de flujo se combinan: el mayor cuenta entero y el otro a la mitad.",
    como: [
      "Bendice un tótem escondido entre dos generadores y avisa por voz.",
      "Los heridos vienen a curarse: <b>Círculo de curación</b> acelera la cura sin botiquín.",
      "Persigue cerca: con <b>Paso de las sombras</b> el asesino te pierde, y <b>Determinación</b> protege los generadores de la zona.",
      "Si lo apagan, bendice otro: <b>Estado de flujo</b> lo hace cada vez más rápido.",
    ],
  },
];
