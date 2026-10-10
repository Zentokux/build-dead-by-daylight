# Guía DBD Superviviente — notas

- **Creada:** 10-oct-2026. **Parche:** 10.2.0 Mid-Chapter (6-oct-2026).
- **Archivos:** `index.html` (página), `datos.js` (ventajas y builds), `icons/perks/` (223 iconos del juego hasta jul-2025), `fuentes/` (JSON de la API dbd.tricky.lol en español e inglés, versión 10.1.2, y las notas 9.4.0).
- **Nombres en español:** los del cliente (`fuentes/perks-es-10.1.2.json`), no los de la wiki ES, que difieren (Extraoficial, Hasta otra, Lucha intensa, Reafirmación…).
- **Valores:** los de los archivos del juego 10.1.2, excepto las ventajas que cambiaron en 10.2.0, que salen de las notas oficiales: Oportunidades, Familia, Resiliencia, Sobreviviremos, Bajo vigilancia, ¡Despierta!, Instinto de saqueador y otras.
- **Ganas de vivir (Will to Live):** desde el parche 9.4.0, Golpe decisivo es una ventaja general. La API sigue mostrándola como "DecisiveStrike / Golpe decisivo". El nombre «Ganas de vivir» sale de la wiki ES y no está confirmado. No hay icono nuevo: se usa el antiguo.
- **Extraoficial:** marcada como dudosa (las fuentes no coinciden en si se desactiva con las puertas ni en si oculta las marcas).
- **Uso:** nightlight.gg, últimos 28 días (11-sep a 9-oct-2026). El rango de 14 días solo es para supporters (la API devuelve ERR_NOT_SUPPORTER).
- **Bloqueos:** wiki.gg, Fandom y nightlight bloquean curl (403). La API dbd.tricky.lol sí funciona: `/api/perks?role=survivor&locale=es`, `/api/versions`.
- **PTB:** se ignora; solo cuentan las notas y valores del juego en vivo.
- **Al actualizar:** revisa `/api/versions` y las notas del KB oficial (forums.bhvr.com/dead-by-daylight/kb) en busca de un parche posterior a 10.2.0.
- **Revalidado 10-oct-2026 (agente):** no hay parche posterior al 10.2.0 (notas en Steam y en el foro, discusión 472827). We'll Make It se llama «Lo conseguiremos» en el cliente (no «Sobreviviremos»). Tiempo prestado: el cambio del PTB se revirtió. Extraoficial: las notas 9.2.0 y el texto del cliente se contradicen (puertas y arañazos). Se quitaron dos inferencias que no venían de fuentes oficiales: «sin penalización al usar botiquín» (Botánica) y «se cancela con acciones llamativas» (Tiempo prestado).
- **Builds por modo:** campo `modo` (solo / coop / ambos), con filtro en la página y un campo `sinergia` en cada build. Reglas: una sola ventaja de Agotamiento por build y nada de Resistencias que se solapen (por eso Fajador no va con Extraoficial).
