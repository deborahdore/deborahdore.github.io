// Homepage motion: reveal on scroll, statement word fade, hero portrait scroll,
// navbar border, experience slider, argument-graph sphere.
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const root = document.documentElement;
  const navbar = document.getElementById("navbar");

  // Reveal on scroll
  const items = document.querySelectorAll(".reveal");
  if (!reduce && "IntersectionObserver" in window && items.length) {
    root.classList.add("js-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    items.forEach((el) => io.observe(el));
  }

  // Statement: words light up as the paragraph scrolls through the viewport
  const statement = document.querySelector("[data-words]");
  let words = [];
  if (statement) {
    words = statement.textContent
      .trim()
      .split(/\s+/)
      .map((w) => {
        const s = document.createElement("span");
        s.className = "w";
        s.textContent = w + " ";
        return s;
      });
    statement.textContent = "";
    words.forEach((w) => statement.appendChild(w));
  }

  const hero = document.querySelector(".hero");
  const track = document.getElementById("exp-track");
  const fill = document.getElementById("exp-line-fill");

  function onScroll() {
    const y = window.scrollY;
    const vh = window.innerHeight;
    if (navbar) navbar.classList.toggle("is-scrolled", y > 8);

    if (hero && !reduce) {
      const p = Math.min(Math.max(y / hero.offsetHeight, 0), 1);
      hero.style.setProperty("--hero-p", p.toFixed(3));
    }

    if (statement && words.length) {
      const r = statement.getBoundingClientRect();
      const p = reduce ? 1 : Math.min(Math.max((vh * 0.85 - r.top) / (r.height + vh * 0.35), 0), 1);
      const lit = Math.round(p * words.length);
      words.forEach((w, i) => (w.style.opacity = i < lit ? 1 : 0.16));
    }
  }

  function onTrack() {
    if (!track || !fill) return;
    const max = track.scrollWidth - track.clientWidth;
    const p = max > 0 ? track.scrollLeft / max : 1;
    fill.style.width = (25 + p * 75).toFixed(1) + "%";
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  if (track) {
    track.addEventListener("scroll", onTrack, { passive: true });
    onTrack();
    document.querySelectorAll(".exp-btn").forEach((b) =>
      b.addEventListener("click", () => {
        const card = track.querySelector(".exp-card");
        const step = card ? card.offsetWidth + 18 : 360;
        track.scrollBy({ left: step * Number(b.dataset.dir), behavior: reduce ? "auto" : "smooth" });
      })
    );
  }

  // Argument graph: a slowly rotating sphere of claims and premises
  const canvas = document.getElementById("arg-graph");
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const size = 360;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const n = 46;
    const pts = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < n; i++) {
      const yy = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - yy * yy);
      const t = golden * i;
      pts.push({ x: Math.cos(t) * r, y: yy, z: Math.sin(t) * r, claim: i % 7 === 0 });
    }
    const edges = [];
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y, pts[i].z - pts[j].z);
        if (d < 0.62) edges.push([i, j, (i * 31 + j * 17) % 9 === 0]);
      }
    }

    const css = getComputedStyle(root);
    let angle = 0.6;
    function draw() {
      const ink = css.getPropertyValue("--global-text-color").trim() || "#15181a";
      const acc = css.getPropertyValue("--global-theme-color").trim() || "#6B48FF";
      ctx.clearRect(0, 0, size, size);
      const R = size * 0.42;
      const c = size / 2;
      const ca = Math.cos(angle);
      const sa = Math.sin(angle);
      const tilt = 0.35;
      const ct = Math.cos(tilt);
      const st = Math.sin(tilt);
      const proj = pts.map((p) => {
        const x = p.x * ca - p.z * sa;
        let z = p.x * sa + p.z * ca;
        const y = p.y * ct - z * st;
        z = p.y * st + z * ct;
        return { x: c + x * R, y: c + y * R, z: z };
      });
      edges.forEach(([i, j, attack]) => {
        const a = proj[i];
        const b = proj[j];
        const depth = (a.z + b.z) / 2;
        ctx.globalAlpha = 0.12 + (depth + 1) * 0.22;
        ctx.strokeStyle = attack ? "#b0533c" : pts[i].claim || pts[j].claim ? acc : ink;
        ctx.lineWidth = attack ? 1.2 : 0.7;
        ctx.setLineDash(attack ? [3, 3] : []);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      });
      ctx.setLineDash([]);
      proj.forEach((p, i) => {
        ctx.globalAlpha = 0.35 + (p.z + 1) * 0.32;
        ctx.fillStyle = pts[i].claim ? acc : ink;
        ctx.beginPath();
        ctx.arc(p.x, p.y, pts[i].claim ? 4.2 : 2 + (p.z + 1) * 0.6, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
    }

    let visible = true;
    if ("IntersectionObserver" in window) {
      new IntersectionObserver((e) => (visible = e[0].isIntersecting)).observe(canvas);
    }
    function loop() {
      if (visible) {
        angle += 0.0035;
        draw();
      }
      requestAnimationFrame(loop);
    }
    draw();
    if (!reduce) requestAnimationFrame(loop);
  }
})();
