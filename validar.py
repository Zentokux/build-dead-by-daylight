# Validador de la guía DBD Sobreviviente.
# Uso: python validar.py   (desde la carpeta de la guía)
# Sale con código 1 si hay ERRORES; los AVISOS no bloquean.
# Ejecútalo SIEMPRE antes de subir cambios o de añadir una build.
import io, os, re, sys, json

BASE = os.path.dirname(os.path.abspath(__file__))
datos = io.open(os.path.join(BASE, 'datos.js'), encoding='utf-8').read()
index = io.open(os.path.join(BASE, 'index.html'), encoding='utf-8').read()

errores, avisos = [], []
def err(m): errores.append(m)
def avi(m): avisos.append(m)

# --- 1. Ventajas -------------------------------------------------------------
CAMPOS = ['es', 'en', 'icon', 'dueno', 'efecto', 'coste', 'cambio', 'estado']
perks = {}
for m in re.finditer(r'^  (\w+): \{\n(.*?)^  \},', datos, re.M | re.S):
    k, cuerpo = m.group(1), m.group(2)
    campos = dict(re.findall(r'(\w+): "((?:[^"\\]|\\.)*)"', cuerpo))
    if k in perks: err(f'Ventaja duplicada: {k}')
    perks[k] = campos
    for c in CAMPOS:
        if not campos.get(c): err(f'{k}: falta el campo «{c}»')
    if campos.get('estado') not in ('ok', 'duda'): err(f'{k}: estado debe ser "ok" o "duda"')
    if campos.get('estado') == 'duda' and not campos.get('nota'): err(f'{k}: estado "duda" sin nota')
    ico = campos.get('icon', '')
    if ico and not os.path.exists(os.path.join(BASE, 'icons', 'perks', ico)):
        err(f'{k}: no existe el icono icons/perks/{ico}')
    if ico == 'sin-icono.svg': avi(f'{k}: usa icono provisional (sin-icono.svg)')

# Clasificación usada por las reglas de sinergia
def deja_agotado(k): return 'Agotado' in perks[k].get('coste', '') and re.search(r'Agotado \d', perks[k]['coste'])
# Ventajas que te dan Resistencia a TI tras el descuelgue (se solapan entre sí)
RESISTENCIA_PROPIA = {'deadhard', 'offrecord'}
# Ventajas que necesitan PURIFICAR tótems frente a las que necesitan BENDECIRLOS
PURIFICAN = {'innerstrength', 'counterforce'}
def bendice(k): return k.startswith('boon')
# Parejas que se anulan (añade aquí las nuevas que descubras)
ANULAN = [
    ({'secondwind', 'resurgence'}, 'Segundo aliento te deja Quebrantado y anula Resurgimiento'),
    ({'secondwind', 'momentofglory'}, 'las dos usan Quebrantado'),
]

# Ventajas que te salvan a TI (persecución, antitúnel o autocuración): la híbrida debe meter una
PROPIA = {'unbreakable', 'tenacity', 'lithe', 'deadhard', 'wtl', 'fma', 'resurgence', 'selfcare', 'plottwist', 'innerstrength', 'adrenaline', 'boonshadow'}
def reglas(nombre, ks):
    ag = [k for k in ks if deja_agotado(k)]
    if len(ag) > 1: err(f'«{nombre}»: {len(ag)} ventajas que dejan Agotado {ag} (máx. 1)')
    res = [k for k in ks if k in RESISTENCIA_PROPIA]
    if len(res) > 1: err(f'«{nombre}»: Resistencia solapada {res}')
    if any(k in PURIFICAN for k in ks) and any(bendice(k) for k in ks):
        err(f'«{nombre}»: mezcla ventajas que purifican y que bendicen tótems')
    for par, motivo in ANULAN:
        if par <= set(ks): err(f'«{nombre}»: {sorted(par)} se anulan: {motivo}')
    # Ganas de vivir se pierde con acciones destacadas: no en builds cuyo rol es reparar/curar sin parar
    if 'wtl' in ks and ('prove' in ks or 'boonsteadfast' in ks):
        avi(f'«{nombre}»: Ganas de vivir con una ventaja de reparar en grupo: se pierde al reparar tras el gancho')

# --- 2. Builds ---------------------------------------------------------------
MODOS = {'solo', 'coop'}  # desde el 10-oct-2026 cada build es de un modo
# Ventajas que necesitan compañeros coordinados: en una build de solitario son un aviso
NECESITAN_EQUIPO = {'prove': 'necesita compañeros a 4 m', 'boonhealing': 'el grupo debe saber dónde está la bendición'}
nombres = set()
bloques = re.split(r'\n  \{\n    nombre: ', datos.split('window.BUILDS = [', 1)[1])[1:]
if not bloques: err('No se encontró ninguna build')
for b in bloques:
    nombre = re.match(r'"([^"]+)"', b).group(1)
    if nombre in nombres: err(f'Build duplicada: {nombre}')
    nombres.add(nombre)
    modo = re.search(r'modo: "(\w+)"', b)
    if not modo or modo.group(1) not in MODOS: err(f'«{nombre}»: modo inválido (solo/coop)')
    if not re.search(r'color: "#[0-9a-fA-F]{6}"', b): err(f'«{nombre}»: color inválido')
    if not re.search(r'contra: \["[^\]]+\]', b): err(f'«{nombre}»: falta «contra» (qué juego del asesino frena)')
    for c in ('tag', 'para', 'sinergia'):
        if not re.search(c + r': "[^"]+"', b): err(f'«{nombre}»: falta «{c}»')
    ks = re.findall(r'"(\w+)"', re.search(r'perks: \[([^\]]*)\]', b).group(1))
    if len(ks) != 4: err(f'«{nombre}»: tiene {len(ks)} ventajas (deben ser 4)')
    if len(set(ks)) != len(ks): err(f'«{nombre}»: ventaja repetida')
    faltan = [k for k in ks if k not in perks]
    if faltan: err(f'«{nombre}»: ventajas inexistentes {faltan}'); continue
    versiones = [('Enfocada', ks)]
    hib = re.search(r'hibrida: \{ sale: "(\w+)", entra: "(\w+)", porque: "[^"]+" \}', b)
    if 'hibrida:' in b and not hib: err(f'«{nombre}»: híbrida mal formada (sale, entra, porque)')
    if hib:
        sale, entra = hib.groups()
        if sale not in ks: err(f'«{nombre}»: la híbrida quita «{sale}», que no está en la build')
        if entra not in perks: err(f'«{nombre}»: la híbrida mete «{entra}», que no existe'); continue
        if entra in ks: err(f'«{nombre}»: la híbrida mete «{entra}», que ya está en la build')
        if entra not in PROPIA: err(f'«{nombre}»: la híbrida debe meter una ventaja propia de supervivencia ({sorted(PROPIA)})')
        versiones.append(('Híbrida', [entra if k == sale else k for k in ks]))
    elif not any(k in PROPIA for k in ks):
        avi(f'«{nombre}»: no lleva ventaja propia de supervivencia ni versión híbrida')
    for etiqueta, vks in versiones:
        reglas(f'{nombre} ({etiqueta})', vks)
    if modo and modo.group(1) == 'solo':
        for k in ks:
            if k in NECESITAN_EQUIPO: avi(f'«{nombre}»: {perks[k]["es"]} en solitario: {NECESITAN_EQUIPO[k]}')
    como = re.search(r'como: \[(.*?)\n    \]', b, re.S)
    n = len(re.findall(r'^      "', como.group(1), re.M)) if como else 0
    if not 3 <= n <= 4: err(f'«{nombre}»: «como» debe tener 3-4 pasos (tiene {n})')
    # Cada ventaja de la build (y la que mete la híbrida) debe nombrarse en el texto con su nombre es-MX
    for k in set(ks) | ({hib.group(2)} if hib else set()):
        corto = perks[k]['es'].replace('Bendición: ', '')
        if corto not in b: avi(f'«{nombre}»: no menciona «{corto}» en el texto')
usadas = set(re.findall(r'"(\w+)"', ' '.join(re.findall(r'perks: \[([^\]]*)\]', datos)))) | set(re.findall(r'entra: "(\w+)"', datos))
for k in perks:
    if k not in usadas: avi(f'{k}: no está en ninguna build (solo sale en la tabla)')

# --- 3. Idioma (es-MX) y PTB ---------------------------------------------------
PROHIBIDO = {
    r'\bsuperviviente': 'sobreviviente', r'\bpal[ée]s?\b': 'tarima', r'\bAgotamiento\b': 'Agotado',
    r'\btaquilla': 'casillero', r'\b(vais|podéis|tenéis|estáis|vosotros|avisáis|quitáis)\b': 'forma de México (ustedes)',
    r'\bPTB\b': 'no mencionar el PTB en la guía', r'\bLo conseguiremos\b': 'Sobreviviremos',
    r'\bHasta otra\b': 'Nos vemos', r'\bReafirmación\b': 'Consuelo', r'\bLucha intensa\b': 'Lucha de poderes',
    r'\bfichas?\b': 'distintivo', r'\bQuebrantad[oa]': 'Desesperanza (estado Broken)',
    r'\b[Pp]ulsa\b': 'presiona / haz clic', r'\bllamativas?\b': 'acción destacada',
}
for nombre_arch, txt in (('datos.js', datos), ('index.html', index)):
    sin_coment = '\n'.join(l for l in txt.splitlines() if not l.strip().startswith('//'))
    for pat, bien in PROHIBIDO.items():
        for m in re.finditer(pat, sin_coment):
            err(f'{nombre_arch}: «{m.group(0)}» → usa {bien}')

# Rendimientos decrecientes (9.6.0): los bonus iguales NO se suman completos
for nombre_arch, txt in (('datos.js', datos), ('index.html', index)):
    for m in re.finditer(r'(?<!no )se suman', txt):
        err(f'{nombre_arch}: «se suman» → usa «se combinan» (rendimientos decrecientes desde 9.6.0)')

# --- 4. JS sintácticamente cargable (comillas y llaves equilibradas) ------------
if datos.count('{') != datos.count('}'): err('datos.js: llaves { } desequilibradas')
if datos.count('[') != datos.count(']'): err('datos.js: corchetes [ ] desequilibrados')

print(f'Ventajas: {len(perks)} · Builds: {len(bloques)}')
for a in avisos: print('AVISO  ', a)
for e in errores: print('ERROR  ', e)
print('OK: sin errores' if not errores else f'{len(errores)} error(es)')
sys.exit(1 if errores else 0)
