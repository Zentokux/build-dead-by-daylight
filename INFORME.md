# Informe de cierre — Guía DBD Sobreviviente (10-oct-2026)

## Estado

- **Parche:** 10.2.0 Mid-Chapter (6-oct-2026), en vivo. No hay parche ni hotfix posterior a fecha del 10-oct-2026.
- **Contenido:** 11 builds y 34 ventajas.
- **Idioma:** nombres y términos del cliente en español de México.
- **Validación:** independiente, hecha por un agente contra el texto del cliente 10.1.2, las notas oficiales 10.2.0 en vivo (Steam) y la localización es-MX. Se corrigieron todos los errores que encontró.
- **Validador automático:** `python validar.py` da 0 errores.

## Builds (versión 3, 10-oct-2026: 8 de solitario y 5 de coop)

Cada build tiene **un rol** y una etiqueta **Contra** (qué juego del asesino frena). `perks` es la versión **Enfocada**; `hibrida` cambia UNA ventaja por otra propia (lista `PROPIA` en `validar.py`). Pensadas para jugar contra un asesino competente que juega el meta. Sin estadísticas de uso ni escape (decisión del usuario).

| Build | Contra | Enfocada | Híbrida |
|---|---|---|---|
| Solo: meta antitúnel | Tuneleo | Resiliencia, Ganas de vivir, Fajador, Cinco movimientos adelante | — |
| Solo: generadores | Regresión | Déjà vu, Hiperconcentración, Resiliencia, Determinación | Determinación → Fajador |
| Solo: rescate y curación | Campeo | Familia, Consuelo, Tiempo prestado, Sobreviviremos | Consuelo → Agilidad |
| Solo: tótems con Estado de flujo | Maleficios | Fuerza interior, Contramedida, Estado de flujo, Demasiado entusiasta | Demasiado entusiasta → Agilidad |
| Solo: Bendición con Estado de flujo | Regresión, slug | Paso de las sombras, Exponencial, Determinación, Estado de flujo | Determinación → Agilidad |
| Solo: autocuración | Desgaste | Resurgimiento, Autocuración, Botánica, Giro argumental | — |
| Solo sin DLC | Tuneleo | Ganas de vivir, Resiliencia, Déjà vu, Familia | — |
| Solo: anti-slug | Slug | Exponencial, Tenacidad, Agilidad, Resiliencia | — |
| Coop: perseguidor | Tuneleo | Agilidad, Resiliencia, Ganas de vivir, Cinco movimientos adelante | — |
| Coop: generadores en equipo | 3-gen | Demuestra lo que vales, Déjà vu, Hiperconcentración, Resiliencia | Demuestra → Fajador |
| Coop: rescate y curación | Campeo | Tiempo prestado, Sobreviviremos, Botánica, Consuelo | Consuelo → Agilidad |
| Coop: Bendiciones con Estado de flujo | Regresión, desgaste | Círculo de curación, Paso de las sombras, Determinación, Estado de flujo | Determinación → Agilidad |
| Coop: final de partida | Presión en las puertas | Adrenalina, Esperanza, ¡Despierta!, Tiempo prestado | — |

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
