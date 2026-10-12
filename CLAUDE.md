# Sitio-Web (Empi Mods)

Web estática de los mods de Minecraft. Guía de carpetas: `C:\Users\srelm\Proyectos\ORDEN.md` (sección 2c). Publicada en https://empity001.github.io/Empi-Mods/ (repo público Empity001/Empi-Mods, Pages desde `main`).

## Reglas de diseño
- El estilo es **Empi Proof Bench**, el mismo de Empi Emporium (`C:\Users\srelm\Proyectos` no lo tiene local: está en github.com/Empity001/Empi-Emporium y su DESIGN.md en Empity001/EmpiLauncher). Respetarlo: fondo casi negro, blanco papel, puntos de media tinta, **un solo acento rosa `#ff3d8b`** para la siguiente acción o el foco, Doto para identidad y números, Geist Mono para datos y botones, módulos de 22px, botones en píldora, solo tema oscuro.
- No tocar `css/style.css`, `js/field.js`, `js/motion.js`, `fonts/` ni `art/`: son copias de Emporium. Lo propio va en `css/mods.css`, `js/roulette.js`, `js/site.js`.
- Texto en español con la voz de Emporium ("amigowos", ";3" con medida). Sin guiones largos ni puntos medios como separador.
- Solo animar `transform` y `opacity` (y colores en cambios de estado). Respetar el interruptor "Movimiento" y `prefers-reduced-motion` (ya lo lee `roulette.js`).
- La ruleta es el elemento memorable. Las capturas del juego deben ser reales, no inventadas.
- Todo lo que se haga `push` a `main` queda visible para cualquiera: no subir secretos ni nada privado, y no enlazar repos privados (como Catch-Roulette).
