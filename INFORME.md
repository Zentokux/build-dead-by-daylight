# Informe — Guía DBD Sobreviviente (actualizado 16-oct-2026)

## Estado

- **Parche:** 10.2.1 (14-oct-2026, solo arreglos, sin cambios en ventajas de sobreviviente). Valores del 10.2.0 Mid-Chapter (6-oct-2026).
- **Contenido:** 14 builds (8 de solitario y 6 de coop) y 35 ventajas.
- **Idioma:** nombres y términos del cliente en español de México.
- **Validación:** independiente, hecha por un agente contra el texto del cliente 10.1.2, las notas oficiales 10.2.0 en vivo (Steam) y la localización es-MX. Se corrigieron todos los errores que encontró.
- **Validador automático:** `python validar.py` da 0 errores.

## Builds (versión 5, 16-oct-2026: 8 de solitario y 6 de coop)

Rearmadas con lo que recomiendan jugadores de alto nivel, no con estadísticas de uso (decisión del usuario): builds de Otzdarva (otzdarva-builds.com, 15-oct-2026) y sus opiniones del 10.2.0, reglamentos de torneos (DBD World Cup, Mr Moustachio's Hub; prohíben ventajas por fuertes), compdbd.com y el foro oficial. La página solo muestra la tabla; `para`, `sinergia`, `como` y `fuente` quedan en datos.js.

| Build | Contra | Ventajas | Híbrida | Fuente |
|---|---|---|---|---|
| Solitario: antitúnel | Tuneleo | Ganas de vivir, Agilidad, Cinco movimientos adelante, Resurgimiento | — | Otzdarva, «Advanced Solo Build» (otzdarva-builds.com, 15-oct-2026) |
| Solitario: información sin DLC | Te sorprende reparando | Familia, Premonición, Percepción oscura, Ganas de vivir | — | Otzdarva, «Beginner Starter Build» y sus opiniones sobre el 10.2.0 (Premonición y Percepción oscura) |
| Solitario: persecución | Asesino que te persigue sin soltarte | Oportunidades, Cinco movimientos adelante, Elegancia, Agilidad | — | Otzdarva, «Chase Oriented Build»; Otzdarva sobre el 10.2.0: Oportunidades se llevará junto a Cinco movimientos adelante |
| Solitario: generadores | 3-gen (encerrar 3 generadores) | Déjà vu, Serenidad, Resurgimiento, Diseñado para durar | — | Otzdarva, «Gen Rush Solo Build»; foro oficial de Behaviour (hilo 472967: Déjà vu, la mejor de generadores en solitario) |
| Solitario: rescate y curación | Campeo del gancho | Familia, Consuelo, Tiempo prestado, Sobreviviremos | Consuelo → Agilidad | build anterior (10-oct-2026) |
| Solitario: anti-slug | Slug (te deja en el suelo) | Inquebrantable, Defensa del alma, Tenacidad, Agilidad | — | Otzdarva, «Slug-prevention Build» (Inquebrantable + Defensa del alma); Tenacidad y Agilidad añadidas por mecánica |
| Solitario: escapista | Te quedas último | Déjà vu, Resurgimiento, Hasta terminar con el último, Adrenalina | — | Otzdarva, «Solo Escapist Build»; Otzdarva sobre el 10.2.0: el último sobreviviente puede abrir la trampilla |
| Solitario: autocuración | Desgaste (te hiere y se va) | Resurgimiento, Vida itinerante, Giro argumental, Conocimientos de botánica | — | Otzdarva recomienda Vida itinerante, Giro argumental y Resurgimiento; la combinación con Conocimientos de botánica es por mecánica |
| Coop: corredor | Asesino que te persigue sin soltarte | Agilidad, Oportunidades, Cinco movimientos adelante, Resiliencia | Resiliencia → Ganas de vivir | Otzdarva sobre el 10.2.0 (Oportunidades con Cinco movimientos adelante; los bonus de salto se combinan); reglamento del DBD World Cup |
| Coop: generadores en equipo | 3-gen (encerrar 3 generadores) | Demuestra lo que vales, Déjà vu, Hiperconcentración, Resiliencia | Demuestra lo que vales → Fajador | build anterior (10-oct-2026) |
| Coop: rescate | Campeo del gancho, Tuneleo | Tiempo prestado, Sobreviviremos, Consuelo, Cargar a cuestas | Cargar a cuestas → Agilidad | Reglamento del DBD World Cup (prohíbe Tiempo prestado, Consuelo y Cargar a cuestas por fuertes); Otzdarva y notas oficiales: Cargar a cuestas es fuerte en grupos coordinados |
| Coop: antitúnel | Tuneleo | Extraoficialmente, Ganas de vivir, Agilidad, Resiliencia | — | Reglamento del DBD World Cup (prohíbe Extraoficialmente por fuerte); notas oficiales del 10.1.0 y 10.2.0 |
| Coop: anti-slug con Bendición | Slug (deja a todos en el suelo) | Bendición: Exponencial, Defensa del alma, Vamos a vivir para siempre, Bendición: Paso de las sombras | — | build anterior (10-oct-2026) |
| Coop: Bendiciones con Estado de flujo | Regresión de generadores, Desgaste | Bendición: Círculo de curación, Bendición: Paso de las sombras, Bendición: Determinación, Estado de flujo | Bendición: Determinación → Agilidad | build anterior (10-oct-2026) |

**Inquebrantable + Exponencial:** no se combinan; levantarte en la zona de Exponencial gasta el uso de Inquebrantable (comprobado por el usuario en su juego, 10-oct-2026; regla en `ANULAN`). Nombres es-MX de Cinco movimientos adelante y Demasiado entusiasta: solo de la wiki ES (en España: Cinco pasos por delante, Pasión).

## Reglas de las builds (las comprueba `validar.py`)

1. **4 ventajas distintas, todas definidas en `PERKS`.** Cada una tiene que tener un icono en `icons/perks/`.
2. **Como máximo UNA ventaja que deje Agotado.** Se detecta por «Agotado N s» en el campo `coste`.
3. **Sin Resistencias propias que se solapen.** La lista es `RESISTENCIA_PROPIA`: Fajador y Extraoficialmente.
4. **No mezclar ventajas que purifican tótems con ventajas que los bendicen.** Las que purifican están en `PURIFICAN`; las Bendiciones son las claves que empiezan por `boon`.
5. **Sin parejas que se anulan.** La lista es `ANULAN`: Segundo aliento con Resurgimiento o con Momento de gloria.
6. **Campos obligatorios de cada build:** modo `solo`, `coop` o `ambos`; color hexadecimal; `tag`, `para` y `sinergia`; entre 3 y 4 pasos en `como`.
7. **El texto de la build nombra cada una de sus ventajas.** Si falta alguna, sale un aviso.
8. **Términos prohibidos**, sustituidos por los del cliente es-MX:

   | Prohibido | Correcto |
   |---|---|
   | superviviente | sobreviviente |
   | palé | tarima |
   | Agotamiento | Agotado |
   | taquilla | casillero |
   | ficha | distintivo |
   | Quebrantado | Desesperanza |
   | pulsa | presiona |
   | acción llamativa | acción destacada |
   | formas de vosotros | ustedes |
   | nombres de España | nombres es-MX |
   | PTB | (no se menciona) |

**Al añadir una ventaja o build nueva:**
- Si descubres una incompatibilidad nueva, añádela a `ANULAN`, `RESISTENCIA_PROPIA` o `PURIFICAN`.
- Ejecuta `python validar.py` antes de subir. Sale con código 1 si hay errores.

## Correcciones de la verificación final

- **Términos es-MX:**
  - Quebrantado → **Desesperanza**.
  - ficha → **distintivo**.
  - pulsa → **presiona el botón de habilidad activa**.
  - acción llamativa → **acción destacada**.
- **Ganas de vivir:** se activa solo cuando el asesino te carga, no al agarrarte.
- **Tenacidad:** «el asesino no ve tu aura».
- **Resiliencia:** acelera todos los saltos, no solo los de ventanas.
- **Puestos de uso duplicados:** Esprint pasa al 14º y Fuerza interior al 38º.
- **Meta:** ya no dice «las 4 más usadas». Ahora: las 3 más usadas + Ganas de vivir. Además se corrigió la sinergia de Oportunidades con Agilidad (el +10 % tiene enfriamiento).
- **Autocuración:** el segundo uso de Giro argumental se recupera al completarse los generadores; no se guarda.
- **Tótems:** ya no supone que eliges las ventajas de tus compañeros en solitario.
- **Anti-slug:** Nos vemos solo llega al umbral de Lucha de poderes si te recuperaste lo suficiente.
- **Build de tótems:** entra **Estado de flujo** (Kwon Tae-young, surcoreano; 13/14/15 % por distintivo desde 10.2.0) y sale Caza menor, que se solapaba con Contramedida.
- **Iconos:** Giro argumental y Estado de flujo se convirtieron al estilo blanco de los demás.

## Pendiente o no verificable (no bloquea)

- **Nombres solo confirmados en la wiki ES** (no están en el volcado es-MX de 2022):
  - Hiperconcentración
  - Consuelo
  - Fuerza interior
  - Estado de flujo
  - Giro argumental
  - Bendición: Determinación

  El usuario confirmó «Ganas de vivir» y su icono en su juego.
- **Extraoficialmente:** se sigue el texto del cliente. Las notas 9.2.0 decían otra cosa sobre los generadores y las marcas de arañazos.
- **Uso (nightlight.gg):** son 28 días casi todos anteriores al 10.2.0. Las ventajas mejoradas en 10.2.0 pueden estar subiendo.
- **Fajador:** está en la tabla pero en ninguna build, a propósito: se solapa con Extraoficialmente.
