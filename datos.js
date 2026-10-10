// Datos de la guía de Sobreviviente — Dead by Daylight
// Validado el 10-oct-2026 contra el parche 10.2.0 (Mid-Chapter, en vivo desde el 6-oct-2026). No hay parche posterior.
// Nombres y términos: cliente en español de México (es-MX): localización del juego es-MX, tienda de Steam latam y wiki oficial en español.
// Valores: notas oficiales de Behaviour (Steam / foro) + archivos del juego; los de 10.2.0 vienen de las notas en vivo.

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
  hope: {
    es: "Esperanza", en: "Hope", icon: "iconPerks_hope.png", dueno: "General",
    efecto: "Con las puertas energizadas: <b>+3/4/5 % de Celeridad</b> hasta el final de la partida.",
    coste: "—", cambio: "9.2.0 (antes 5/6/7 %)", estado: "ok",
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
  wakeup: {
    es: "¡Despierta!", en: "Wake Up!", icon: "iconPerks_wakeUp.png", dueno: "Quentin Smith",
    efecto: "Con todos los generadores hechos: ves los <b>interruptores de las puertas</b>, los demás ven tu aura mientras abres y abres más rápido (<b>8/9/10 % + 20 %</b> por cada otro sobreviviente vivo).",
    coste: "—", cambio: "10.2.0", estado: "ok",
  },
  innerstrength: {
    es: "Fuerza interior", en: "Inner Strength", icon: "iconPerks_innerStrength.png", dueno: "Nancy Wheeler",
    efecto: "Al purificar un tótem se activa. Cuando estés herido (y sin Desesperanza), escóndete <b>10/9/8 s</b> en un casillero para <b>curarte un estado de salud al instante</b>. Se gasta al usarla.",
    coste: "Se activa al purificar un tótem", cambio: "7.4.0 (recupera el nombre)", estado: "ok",
  },
  counterforce: {
    es: "Contramedida", en: "Counterforce", icon: "iconPerks_Counterforce.png", dueno: "Jill Valentine",
    efecto: "Empiezas con 1 distintivo y ganas 1 por cada tótem purificado: purificas un <b>25 % más rápido por distintivo</b>. Tras purificar, ves el aura del <b>tótem más lejano</b> durante 10/12/14 s.",
    coste: "—", cambio: "9.0.0", estado: "ok",
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
  selfcare: {
    es: "Autocuración", en: "Self-Care", icon: "iconPerks_selfCare.png", dueno: "Claudette Morel",
    efecto: "Puedes <b>curarte a ti mismo sin botiquín</b>, pero un 75/70/65 % más lento.",
    coste: "Sin límite de usos", cambio: "6.1.0", estado: "ok",
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
  overzealous: {
    es: "Demasiado entusiasta", en: "Overzealous", icon: "iconPerks_Overzealous.png", dueno: "Haddie Kaur",
    efecto: "Al bendecir o purificar un tótem, reparas un <b>8/9/10 % más rápido</b> hasta que recibas daño. Si era un tótem de maleficio, el doble (<b>16/18/20 %</b>).",
    coste: "Se pierde al recibir daño", cambio: "6.7.0", estado: "ok",
    info: "Nombre de la wiki oficial en español (es-MX); en los textos de España aparece como «Pasión».",
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
  sprint: {
    es: "Esprint", en: "Sprint Burst", icon: "iconPerks_sprintBurst.png", dueno: "Meg Thomas",
    efecto: "Al empezar a correr: <b>+50 % de Celeridad durante 2 s</b>.",
    coste: "Agotado 60/50/40 s", cambio: "10.1.0 (3 → 2 s)", estado: "ok",
  },
  vigil: {
    es: "Vigilia", en: "Vigil", icon: "iconPerks_vigil.png", dueno: "Quentin Smith",
    efecto: "Tú y los sobrevivientes a <b>16 m</b> pierden Agotado un <b>20/25/30 % más rápido</b>. El efecto sigue 15 s después de salir del alcance.",
    coste: "—", cambio: "10.1.x (antes 30/35/40 % y otros estados; ahora solo Agotado)", estado: "ok",
    info: "Nombre de la wiki oficial en español (es-MX).",
  },
  ghostnotes: {
    es: "Notas fantasma", en: "Ghost Notes", icon: "iconPerks_GhostNotes.png", dueno: "Vee Boonyasak",
    efecto: "Mientras estás Agotado, tus marcas de arañazos desaparecen un <b>50 % más rápido</b> y pierdes Agotado un <b>5/7,5/10 % más rápido</b>.",
    coste: "—", cambio: "Sin cambios recientes", estado: "ok",
    info: "Nombre de la wiki oficial en español (es-MX); en los textos de España aparece como «Notas fantasmales».",
  },
  fixated: {
    es: "Fijación", en: "Fixated", icon: "iconPerks_fixated.png", dueno: "Nancy Wheeler",
    efecto: "Al caminar ganas <b>10/15/20 % de Celeridad</b>. Ves tus propias marcas de arañazos.",
    coste: "—", cambio: "Sin cambios recientes", estado: "ok",
  },
  wideopen: {
    es: "Máxima velocidad", en: "Wide Open Throttle", icon: "iconPerks_WideOpenThrottle.png", dueno: "Shane Wiigwaas",
    efecto: "Al saltar rápido una tarima tirada: ganas <b>10/12,5/15 % de Celeridad durante 3 s</b>, la tarima <b>vuelve a quedar en pie</b> y se bloquea 60 s, y todos los sobrevivientes ven su aura mientras tanto.",
    coste: "Enfriamiento 60 s", cambio: "Ventaja nueva (capítulo 10.1)", estado: "ok",
    info: "Nombre de la wiki oficial en español (es-MX); en los textos de España aparece como «Acelerador a fondo».",
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
};

// modo: "solo" = solitario (sin voz), "coop" = con amigos en llamada.
// Cada build tiene UN rol. "perks" es la versión Enfocada (las 4 al servicio del rol).
// "hibrida" (opcional) cambia UNA ventaja por otra propia para salvarte si la partida se complica contigo.
// Las builds que ya son de supervivencia propia no llevan híbrida.
window.BUILDS = [
  // ---------------------------------------------------------------- SOLITARIO
  {
    nombre: "Solitario: meta antitúnel", tag: "Meta", modo: "solo", color: "#e11d48",
    contra: ["Tuneleo"],
    perks: ["resilience", "wtl", "deadhard", "fma"],
    para: "Todo es para ti: alargar la persecución y no morir tuneleado tras el gancho. En solitario, donde nadie te cubre, no dependes de nadie.",
    sinergia: "<b>Cinco movimientos adelante</b> te marca las 5 tarimas más cercanas en persecución y te deja correr antes tras tirarlas. Herido, <b>Resiliencia</b> acelera saltos y reparaciones. Tras el gancho tienes dos capas: <b>Fajador</b> aguanta un golpe y <b>Ganas de vivir</b> te suelta si te carga. Solo deja Agotado Fajador.",
    como: [
      "En persecución, sigue las tarimas que te marca <b>Cinco movimientos adelante</b> y tíralas a tiempo.",
      "Herido, no busques cura: <b>Resiliencia</b> te acelera.",
      "Tras descolgarte, guarda <b>Fajador</b> para el golpe que te tumbaría.",
      "Si aun así te carga, <b>Ganas de vivir</b> lo aturde. No repares ni cures mientras esté activa.",
    ],
  },
  {
    nombre: "Solitario: generadores", tag: "Reparar", modo: "solo", color: "#f59e0b",
    contra: ["Regresión de generadores"],
    perks: ["dejavu", "hyperfocus", "resilience", "boonsteadfast"],
    hibrida: { sale: "boonsteadfast", entra: "deadhard", porque: "Si el asesino te tunelea o te busca a ti, cambia la Bendición por <b>Fajador</b>: aguanta un golpe tras el gancho y, a diferencia de Ganas de vivir, no se pierde por volver a reparar." },
    para: "Para quien solo quiere hacer generadores. Las 4 ventajas aceleran la reparación o protegen el avance.",
    sinergia: "<b>Déjà vu</b> te marca qué generadores hacer. Bendice un tótem junto a ellos: <b>Determinación</b> hace que no retrocedan tanto y se reparen más rápido. <b>Hiperconcentración</b> premia las pruebas Excelentes y <b>Resiliencia</b> te deja seguir herido. Los bonus de reparación se combinan: el mayor cuenta entero, el segundo a la mitad y el tercero a un cuarto (herido, unos +16 % en total). Ninguna deja Agotado.",
    como: [
      "Bendice un tótem cerca de los generadores que marca <b>Déjà vu</b>.",
      "Repara dentro de la zona de <b>Determinación</b>.",
      "Encadena pruebas Excelentes para sumar distintivos de <b>Hiperconcentración</b>.",
      "Herido, sigue reparando con <b>Resiliencia</b>.",
    ],
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
    nombre: "Solitario: tótems con Estado de flujo", tag: "Tótems", modo: "solo", color: "#d946ef",
    contra: ["Maleficios"],
    perks: ["innerstrength", "counterforce", "flowstate", "overzealous"],
    hibrida: { sale: "overzealous", entra: "lithe", porque: "Si te persiguen mucho, cambia Demasiado entusiasta por <b>Agilidad</b>: sigues limpiando tótems y curándote con Fuerza interior, y además escapas mejor." },
    para: "Limpia el mapa de tótems (y de maleficios del asesino). Cada purificación activa una curación para ti y acelera tus reparaciones.",
    sinergia: "<b>Contramedida</b> te enseña el tótem más lejano y purificas más rápido con cada uno. Cada tótem purificado activa <b>Fuerza interior</b> (curación propia en un casillero) y <b>Demasiado entusiasta</b> (reparas más rápido; el doble si era un maleficio). <b>Estado de flujo</b> crece con cada generador: al final purificas, curas y descuelgas mucho más rápido, ideal para maleficios tardíos. Ninguna deja Agotado. Contra Shattered Hope (asesino) los tótems quedan bloqueados unos segundos tras cada purificación: espera y sigue. Los bonus al purificar de Contramedida y Estado de flujo se combinan: el mayor cuenta entero y el otro a la mitad.",
    como: [
      "Al empezar, purifica el primer tótem y sigue el aura del siguiente que te enseña <b>Contramedida</b>.",
      "Tras cada tótem, ve a reparar: <b>Demasiado entusiasta</b> te acelera hasta que te hieran.",
      "Herido, rompe la línea de visión y métete en un casillero: <b>Fuerza interior</b> te cura (no si sufres Desesperanza).",
      "Con generadores hechos, <b>Estado de flujo</b> te deja borrar en segundos cualquier maleficio tardío.",
    ],
  },
  {
    nombre: "Solitario: Bendición con Estado de flujo", tag: "Bendición", modo: "solo", color: "#8b5cf6",
    contra: ["Regresión de generadores", "Slug"],
    perks: ["boonshadow", "boonexpo", "boonsteadfast", "flowstate"],
    hibrida: { sale: "boonsteadfast", entra: "lithe", porque: "Si el asesino te persigue a ti más que a los demás, cambia Determinación por <b>Agilidad</b>: sigues teniendo tu zona de sigilo y de levantarte solo, y además ganas distancia al saltar rápido." },
    para: "Tu propia zona segura sin depender de nadie: un solo tótem bendecido te esconde, te levanta si caes y protege los generadores de alrededor. Es la versión de bendecir de la build de tótems.",
    sinergia: "Las 3 Bendiciones comparten tótem: bendices una vez y funcionan todas. Dentro de la zona (24 m), <b>Paso de las sombras</b> borra tus marcas de arañazos y oculta tu aura al asesino, <b>Exponencial</b> te deja levantarte solo si te tumban y <b>Determinación</b> frena la regresión de los generadores. <b>Estado de flujo</b> gana un distintivo por cada generador hecho: cada vez que el asesino apaga tu tótem, bendices el siguiente más rápido. Empieza en 0, así que la primera bendición va a velocidad normal. Ninguna deja Agotado. No la combines con Fuerza interior ni Contramedida: purifican los tótems que necesitas para volver a bendecir. Ojo con dos ventajas del asesino: Shattered Hope destruye el tótem bendecido, deja ver los tótems bendecidos y bloquea los demás unos segundos; Dominance bloquea el primer tótem que bendices, te hace gritar y revela tu aura.",
    como: [
      "Al empezar, bendice un tótem escondido entre dos generadores y repara dentro de la zona de <b>Determinación</b>.",
      "Si te persiguen, quédate cerca: con <b>Paso de las sombras</b> el asesino pierde tu rastro al romper la línea de visión.",
      "Si te tumba en la zona y se va, levántate solo con <b>Exponencial</b>.",
      "Si apaga el tótem, bendice otro: con cada generador hecho, <b>Estado de flujo</b> lo hace más rápido.",
    ],
  },
  {
    nombre: "Solitario: Esprint con recarga rápida", tag: "Sigilo y Esprint", modo: "solo", color: "#0ea5e9",
    contra: ["Rastreo por marcas de arañazos"],
    perks: ["sprint", "vigil", "ghostnotes", "fixated"],
    hibrida: { sale: "fixated", entra: "wtl", porque: "Si el asesino te tunelea, cambia Fijación por <b>Ganas de vivir</b>: mantienes el Esprint que se recarga rápido y además tienes escape tras el gancho." },
    para: "Gira en torno a <b>Esprint</b>: tenerlo listo más veces y que, después de usarlo, al asesino le cueste seguirte. Todo es para ti.",
    sinergia: "<b>Esprint</b> (única que deja Agotado) te da 2 s de Celeridad al empezar a correr. Para no gastarlo sin querer, camina: <b>Fijación</b> te hace caminar más rápido y te enseña tus propias marcas. Tras usarlo, <b>Notas fantasma</b> hace que tus marcas de arañazos desaparezcan un 50 % más rápido mientras estás Agotado, para que el asesino pierda tu rastro. <b>Vigilia</b> y <b>Notas fantasma</b> te quitan el Agotado antes; se combinan (la menor cuenta a la mitad): unos 30 s en vez de 40 s a nivel III. Vigilia también ayuda a los compañeros a 16 m.",
    como: [
      "Camina siempre que no te persigan: <b>Fijación</b> te acelera y así guardas <b>Esprint</b>.",
      "Cuando el asesino te vea, empieza a correr: <b>Esprint</b> te separa de él.",
      "Tras el Esprint, rompe la línea de visión: <b>Notas fantasma</b> borra tus marcas y el asesino pierde tu rastro.",
      "Con <b>Vigilia</b> el Esprint vuelve antes; no corras sin necesidad mientras se recarga.",
    ],
  },
  {
    nombre: "Solitario: bucle de tarimas", tag: "Tarimas", modo: "solo", color: "#f97316",
    contra: ["Asesino que te persigue sin soltarte"],
    perks: ["fma", "lithe", "wideopen", "resilience"],
    hibrida: { sale: "resilience", entra: "wtl", porque: "Si el asesino te tunelea tras el gancho, cambia Resiliencia por <b>Ganas de vivir</b>: mantienes el bucle de tarimas y tienes escape tras el gancho." },
    para: "Basada en una build tuya: todo gira en torno a las tarimas para alargar la persecución. Se cambió Fortaleza en las sombras por Resiliencia, porque Fortaleza solo funciona dentro del sótano.",
    sinergia: "<b>Cinco movimientos adelante</b> te marca las 5 tarimas más cercanas y te deja correr antes tras tirarlas. Cuando el asesino rodea la tarima tirada, sáltala rápido: se activan a la vez <b>Agilidad</b> (única que deja Agotado) y <b>Máxima velocidad</b>, que además vuelve a levantar la tarima (bloqueada 60 s: ni tú la puedes tirar ni el asesino romperla, y él puede pasar por ella). Su Celeridad funciona aunque estés Agotado. Las dos Celeridades se combinan (la menor cuenta a la mitad). Herido, <b>Resiliencia</b> acelera tus saltos.",
    como: [
      "En persecución, ve a las tarimas que te marca <b>Cinco movimientos adelante</b> y tírala a tiempo.",
      "Si el asesino rodea la tarima, sáltala rápido: <b>Agilidad</b> y <b>Máxima velocidad</b> te dan distancia.",
      "<b>Máxima velocidad</b> vuelve a levantar la tarima: tras su bloqueo y enfriamiento (60 s), puedes repetir el bucle.",
      "Herido, sigue con el bucle: <b>Resiliencia</b> acelera tus saltos.",
    ],
  },
  {
    nombre: "Solitario: autocuración", tag: "Curación", modo: "solo", color: "#10b981",
    contra: ["Desgaste (te hiere y se va)"],
    perks: ["resurgence", "selfcare", "botany", "plottwist"],
    para: "Para volver a estar sano una y otra vez sin esperar a nadie. Todo es para ti.",
    sinergia: "<b>Resurgimiento</b> te deja al 70 % al bajar del gancho y <b>Autocuración</b> remata el resto, acelerada por <b>Conocimientos de botánica</b>. <b>Giro argumental</b> es tu curación de emergencia en persecución. Ninguna deja Agotado.",
    como: [
      "Si te hieren y el asesino se va, escóndete y cúrate con <b>Autocuración</b>.",
      "Al ser descolgado, <b>Resurgimiento</b> te da el 70 %: termina de curarte en unos segundos.",
      "En persecución herido, rompe la línea de visión, agáchate quieto y activa <b>Giro argumental</b>: te levantas sano y con Celeridad.",
      "Al completarse los generadores recuperas un segundo uso de <b>Giro argumental</b>.",
    ],
  },
  {
    nombre: "Solitario sin DLC", tag: "Gratis", modo: "solo", color: "#14b8a6",
    contra: ["Tuneleo"],
    perks: ["wtl", "resilience", "dejavu", "kindred"],
    para: "Las 4 son ventajas generales: cualquier personaje las saca en la Red Sanguínea sin comprar nada. Mezcla información (para el equipo) con antitúnel (para ti).",
    sinergia: "Información (<b>Déjà vu</b>, <b>Familia</b>), rendimiento herido (<b>Resiliencia</b>) y antitúnel (<b>Ganas de vivir</b>). Ninguna deja Agotado: cuando tengas Agilidad o Fajador, añade una en lugar de Familia. Herido, Resiliencia y Déjà vu se combinan al reparar: la mayor cuenta entera y la otra a la mitad.",
    como: [
      "Repara los generadores que marca <b>Déjà vu</b>.",
      "<b>Familia</b> te dice si conviene ir al gancho.",
      "Herido, <b>Resiliencia</b> te acelera: sigue reparando.",
      "<b>Ganas de vivir</b> es la mejor defensa contra el tuneleo, y es gratis.",
    ],
  },
  {
    nombre: "Solitario: anti-slug", tag: "Anti-slug", modo: "solo", color: "#64748b",
    contra: ["Slug (te deja en el suelo)"],
    perks: ["boonexpo", "tenacity", "lithe", "resilience"],
    para: "Contra el asesino que derriba a todos y no los cuelga. En solitario nadie garantiza que vengan a levantarte: esta build te levanta sola, las veces que haga falta, y de paso levanta a los compañeros que caigan en tu zona.",
    sinergia: "<b>Exponencial</b> convierte la zona del tótem en un sitio donde cualquiera se levanta solo, sin límite de usos. Si te tumban lejos, <b>Tenacidad</b> te deja arrastrarte rápido y sin aura mientras te recuperas, hasta llegar a la zona. <b>Agilidad</b> (única que deja Agotado) es para que no te tumben tan pronto, y al levantarte sigues herido: <b>Resiliencia</b> te deja reparar y saltar más rápido sin pararte a curar. No lleva Inquebrantable: levantarte en la zona de Exponencial también gasta su único uso. Ojo con Shattered Hope (asesino): destruye el tótem bendecido.",
    como: [
      "Bendice un tótem cerca de los generadores donde vas a estar y persigue cerca de su zona.",
      "En persecución, salta rápido para activar <b>Agilidad</b> y gana distancia.",
      "Si te deja en el suelo lejos, arrástrate hacia la zona con <b>Tenacidad</b>: el asesino no ve tu aura.",
      "En la zona te levantas solo con <b>Exponencial</b> y sigues herido con <b>Resiliencia</b>; si apagan el tótem, bendice otro.",
    ],
  },
  // ---------------------------------------------------------------- COOP
  {
    nombre: "Coop: perseguidor", tag: "Persecución", modo: "coop", color: "#f43f5e",
    contra: ["Tuneleo"],
    perks: ["lithe", "resilience", "wtl", "fma"],
    para: "Para quien se lleva al asesino mientras el grupo repara. Todo es para alargar tu persecución y sobrevivir al gancho.",
    sinergia: "<b>Cinco movimientos adelante</b> te marca las tarimas y <b>Agilidad</b> (única que deja Agotado) te da distancia tras saltar: juntas cubren tarimas y ventanas. Herido, <b>Resiliencia</b> acelera los saltos. <b>Ganas de vivir</b> cubre el tuneleo.",
    como: [
      "Avisa por voz cuando vaya por ti y llévalo lejos de los generadores del grupo.",
      "Usa las tarimas que te marca <b>Cinco movimientos adelante</b> y salta rápido para activar <b>Agilidad</b>.",
      "Herido, <b>Resiliencia</b> acelera tus saltos: no hace falta curarse.",
      "Si te tunelean tras descolgarte, <b>Ganas de vivir</b> lo aturde.",
    ],
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
    nombre: "Coop: rescate y curación", tag: "Rescate", modo: "coop", color: "#16a34a",
    contra: ["Campeo del gancho"],
    perks: ["borrowed", "wellmake", "botany", "reassurance"],
    hibrida: { sale: "reassurance", entra: "lithe", porque: "Si el asesino se viene por ti tras el rescate, cambia Consuelo por <b>Agilidad</b> para poder escapar." },
    para: "Para el apoyo del grupo. Con voz no hace falta Familia: el colgado te dice dónde está el asesino.",
    sinergia: "<b>Consuelo</b> te da tiempo para el momento seguro, <b>Tiempo prestado</b> protege al rescatado y <b>Sobreviviremos</b> (+100 %) y <b>Conocimientos de botánica</b> se combinan (Botánica cuenta a la mitad: unos +125 %) y dejan la curación en unos 7 s.",
    como: [
      "Si el asesino está cerca del gancho, pausa el sacrificio con <b>Consuelo</b>.",
      "Al descolgar, <b>Tiempo prestado</b> protege al rescatado.",
      "Después cúralo con <b>Sobreviviremos</b> y <b>Conocimientos de botánica</b>.",
    ],
  },
  {
    nombre: "Coop: Bendiciones con Estado de flujo", tag: "Bendiciones", modo: "coop", color: "#6366f1",
    contra: ["Regresión de generadores", "Desgaste"],
    perks: ["boonhealing", "boonshadow", "boonsteadfast", "flowstate"],
    hibrida: { sale: "boonsteadfast", entra: "lithe", porque: "Si eres el que más persiguen, cambia Determinación por <b>Agilidad</b>: con Paso de las sombras y Agilidad pierdes al asesino en la zona." },
    para: "Un tótem bendecido convierte su zona (24 m) en refugio del grupo: curación rápida, sigilo y generadores que no retroceden. Con voz, todos saben dónde está.",
    sinergia: "Las 3 Bendiciones comparten tótem: bendices una vez y funcionan todas. <b>Estado de flujo</b> crece con cada generador: cuando el asesino apaga el tótem, vuelves a bendecir otro mucho más rápido, y además curas y descuelgas más rápido. <b>Círculo de curación</b> no te cura a ti mismo. No la combines con un compañero que purifique tótems. Ojo con Shattered Hope (asesino): desde 10.2.0 destruye el tótem bendecido. Al curar a otros, Círculo de curación y Estado de flujo se combinan: el mayor cuenta entero y el otro a la mitad.",
    como: [
      "Bendice un tótem escondido entre dos generadores y avisa por voz.",
      "Los heridos vienen a curarse: <b>Círculo de curación</b> acelera la cura sin botiquín.",
      "Persigue cerca: con <b>Paso de las sombras</b> el asesino te pierde, y <b>Determinación</b> protege los generadores de la zona.",
      "Si lo apagan, bendice otro: <b>Estado de flujo</b> lo hace cada vez más rápido.",
    ],
  },
  {
    nombre: "Coop: anti-slug con Bendición", tag: "Anti-slug", modo: "coop", color: "#475569",
    contra: ["Slug (deja a todos en el suelo)"],
    perks: ["boonexpo", "soulguard", "wglf", "boonshadow"],
    para: "Basada en una build tuya: el grupo no se queda tirado en el suelo. Un tótem bendecido te levanta solo, te protege al levantarte y esconde a todos en su zona.",
    sinergia: "Las 2 Bendiciones comparten tótem. En la zona de <b>Exponencial</b> te levantas solo, y al hacerlo <b>Defensa del alma</b> te da Resistencia 8 s para que no te vuelvan a tumbar de un golpe (no hagas acciones destacadas mientras dure). Si cae un compañero, <b>Vamos a vivir para siempre</b> lo levanta el doble de rápido y también le da Resistencia. Con <b>Paso de las sombras</b>, nadie en la zona deja marcas de arañazos y el asesino no ve su aura. Ninguna deja Agotado. Ojo con Shattered Hope (asesino): destruye el tótem bendecido.",
    como: [
      "Bendice un tótem entre generadores y avisa por voz dónde está.",
      "Si te tumban, arrástrate a la zona y levántate solo con <b>Exponencial</b>: <b>Defensa del alma</b> te da Resistencia.",
      "Si cae un compañero, levántalo con <b>Vamos a vivir para siempre</b>: el doble de rápido y con Resistencia.",
      "Persigue cerca de la zona: con <b>Paso de las sombras</b> el asesino pierde tu rastro.",
    ],
  },
  {
    nombre: "Coop: final de partida", tag: "Final", modo: "coop", color: "#eab308",
    contra: ["Presión en las puertas"],
    perks: ["adrenaline", "hope", "wakeup", "borrowed"],
    para: "Para cuando el grupo llega vivo al último generador: curarse, abrir las puertas rápido y sacar a quien esté colgado.",
    sinergia: "<b>¡Despierta!</b> abre un 20 % más rápido por cada compañero vivo. <b>Adrenalina</b> (única que deja Agotado) te cura y <b>Esperanza</b> te da Celeridad (no se suman completas). <b>Tiempo prestado</b> asegura el último rescate.",
    como: [
      "Al hacerse el último generador, <b>Adrenalina</b> te cura y te da velocidad.",
      "<b>¡Despierta!</b> te enseña los interruptores: abre la puerta mientras los demás rescatan.",
      "<b>Esperanza</b> te da Celeridad hasta salir.",
      "Si hay alguien colgado, rescátalo con <b>Tiempo prestado</b>.",
    ],
  },
];
