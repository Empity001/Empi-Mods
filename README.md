# Empi Mods (sitio web)

Static site for all the Minecraft mods. No build step, no dependencies.

- **Ver:** abrir `index.html` en el navegador.
- **Agregar un mod:** copiar `mods\catch-roulette.html` a `mods\<nuevo-mod>.html`, cambiar título y textos, y agregar su bloque `article.feature` en `index.html` (sección Mods). La demo de la ruleta solo va en la página de Catch Roulette: quitar el bloque `data-roulette` y el script en las páginas que no la usen.
- **Estilo:** todo sale de las variables al inicio de `css\site.css` (colores, radio, fuentes). Un solo acento y un solo radio en todo el sitio.
- **Publicado en:** https://empity001.github.io/Empi-Mods/ (GitHub Pages desde `main`, repo público Empity001/Empi-Mods). Cada `git push` a `main` actualiza la web en uno o dos minutos.
- **Pendiente:** capturas reales del juego (hay un TODO en `mods\catch-roulette.html`), enlace a Modrinth cuando salga la primera versión, y revisar el nombre "Empi Mods".
