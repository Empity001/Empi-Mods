/* Empi Mods: las cosas aparecen una vez, al entrar en pantalla. Sin dependencias.
   El resto del movimiento vive en field.js (el fondo de puntos y el interruptor) y motion.js (la luz bajo el puntero). */
(() => {
  "use strict";
  const items = Array.from(document.querySelectorAll(".reveal"));
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
})();
