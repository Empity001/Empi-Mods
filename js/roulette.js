/* Catch Roulette demo. Visual only: the chance sets how many of the 100 slots are lit,
   a random roll decides the result, and the roulette stops on a slot that matches it. */
(() => {
  const SIZE = 100;
  // "Tranquilo" (the switch in the top bar) and the system's reduced-motion setting both turn the chase into an instant result.
  const systemReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const isCalm = () => document.documentElement.dataset.motion === "calm" || systemReduce.matches;

  // Small seeded generator so the lit slots keep the same positions for a given chance.
  function seeded(seed) {
    let a = seed >>> 0;
    return () => {
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffledSlots(seed) {
    const random = seeded(seed);
    const slots = Array.from({ length: SIZE }, (_, i) => i);
    for (let i = SIZE - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [slots[i], slots[j]] = [slots[j], slots[i]];
    }
    return slots;
  }

  // The first N slots of this order are the "caught" slots, so raising the chance only adds slots.
  const ORDER = shuffledSlots(20261012);

  function init(root) {
    const board = root.querySelector(".roulette__board");
    const slider = root.querySelector('input[type="range"]');
    const output = root.querySelector("output");
    const button = root.querySelector("button");
    const result = root.querySelector(".roulette__result");

    const cells = Array.from({ length: SIZE }, () => {
      const cell = document.createElement("div");
      cell.className = "roulette__cell";
      board.append(cell);
      return cell;
    });

    let chance = Number(slider.value);
    let busy = false;
    let timers = [];

    const caughtSet = () => new Set(ORDER.slice(0, chance));

    function clearTimers() {
      timers.forEach(clearTimeout);
      timers = [];
    }

    function clearMarks() {
      cells.forEach((cell) => cell.classList.remove("is-lit", "is-final"));
    }

    function paint(animateIn) {
      clearTimers();
      clearMarks();
      const caught = ORDER.slice(0, chance);
      cells.forEach((cell) => cell.classList.remove("is-caught"));
      if (animateIn && !isCalm()) {
        // The one orchestrated moment: the lit slots switch on in sequence when the page opens.
        caught.forEach((slot, k) => {
          timers.push(setTimeout(() => cells[slot].classList.add("is-caught"), 300 + k * 32));
        });
      } else {
        caught.forEach((slot) => cells[slot].classList.add("is-caught"));
      }
      output.textContent = chance + "%";
      board.setAttribute("aria-label", "Ruleta de " + SIZE + " casillas, " + chance + " encendidas");
    }

    function throwBall() {
      if (busy) return;
      busy = true;
      button.disabled = true;
      slider.disabled = true;
      result.textContent = "";
      clearMarks();

      const lit = caughtSet();
      const caught = Math.random() * 100 < chance;
      const pool = cells.map((_, i) => i).filter((i) => lit.has(i) === caught);
      const target = pool[Math.floor(Math.random() * pool.length)];

      const finish = () => {
        cells.forEach((cell) => cell.classList.remove("is-lit"));
        cells[target].classList.add("is-final");
        result.textContent = caught
          ? "¡Capturado! La ruleta cayó en una casilla encendida."
          : "Se escapó. La ruleta cayó en una casilla apagada.";
        busy = false;
        button.disabled = false;
        slider.disabled = false;
      };

      if (isCalm()) {
        finish();
        return;
      }

      const steps = 26;
      let step = 0;
      let previous = -1;
      const tick = () => {
        if (previous >= 0) cells[previous].classList.remove("is-lit");
        if (step === steps) {
          finish();
          return;
        }
        let next;
        if (step === steps - 1) {
          next = target;
        } else {
          do {
            next = Math.floor(Math.random() * SIZE);
          } while (next === previous);
        }
        cells[next].classList.add("is-lit");
        previous = next;
        step += 1;
        const progress = step / steps;
        timers.push(setTimeout(tick, 45 + Math.pow(progress, 2.4) * 300));
      };
      tick();
    }

    slider.addEventListener("input", () => {
      chance = Number(slider.value);
      result.textContent = "";
      paint(false);
    });
    button.addEventListener("click", throwBall);

    paint(true);
  }

  document.querySelectorAll("[data-roulette]").forEach(init);
})();
