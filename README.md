# Empi Mods

Mis mods de Minecraft, en una página. Sin dependencias ni paso de compilación: son archivos estáticos y GitHub Pages los sirve tal cual.

Sitio: https://empity001.github.io/Empi-Mods/

## Estilo

Es el mismo sistema que [Empi Emporium](https://github.com/Empity001/Empi-Emporium) ("Empi Proof Bench": negro, papel, puntos de media tinta, un solo acento rosa, Doto y Geist Mono, módulos de 22px, botones en píldora). La referencia completa está en `DESIGN.md` del repo Empity001/EmpiLauncher.

- `css/style.css`, `js/field.js`, `js/motion.js`, `fonts/` y `art/` son copias de Emporium, sin tocar, para poder sincronizarlas. Las licencias de las tipografías viajan con ellas.
- Lo propio de esta página vive aparte: `css/mods.css` (la ruleta y las páginas de mod), `js/roulette.js` y `js/site.js`.
- La voz es la de Emporium: español cercano, "amigowos", ";3".

## Qué hay

```
index.html              portada: la demo de la ruleta, Catch Roulette de un vistazo, cómo funciona, preguntas
mods\catch-roulette.html  la página del mod
```

## Agregar un mod nuevo

1. Copiar `mods\catch-roulette.html` a `mods\<nuevo-mod>.html` y cambiar título, textos y datos. Quitar el bloque `data-roulette` y el script `roulette.js` si el mod no lo usa.
2. En `index.html`, agregar su bloque en la sección Mods (hoy es un módulo "de un vistazo"; con más de un mod conviene una lista).
3. Hacer `git push` a `main`: la web se actualiza sola en uno o dos minutos.

## Probarlo en tu PC

Abrir `index.html`, o con cualquier servidor estático:

```bash
python -m http.server 5190
```

## Pendiente

- Capturas reales del juego (hay un TODO en `mods\catch-roulette.html`).
- Enlace a Modrinth cuando salga la primera versión.
- Decidir si estos mods viven también como una sección dentro de Empi Emporium.
