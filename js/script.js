gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

(function ensureHeroVideoPlays() {
  const vids = document.querySelectorAll("video");
  if (!vids.length) return;

  const tryPlay = () => {
    vids.forEach((v) => {
      v.muted = true;
      v.defaultMuted = true;
      v.playsInline = true;
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    });
  };

  tryPlay();
  window.addEventListener("load", tryPlay, { once: true });

  ["touchstart", "pointerdown", "click", "scroll", "keydown"].forEach((evt) =>
    window.addEventListener(evt, tryPlay, { once: true, passive: true })
  );

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) tryPlay();
  });
})();

const hero = document.querySelector("[data-hero]");
const heroFrame = document.querySelector("[data-hero-frame]");

if (hero && heroFrame && !reduceMotion) {
  const isMobile = window.matchMedia("(max-width: 600px)").matches;
  const grow = isMobile ? 0.55 : 0.68;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: isMobile ? "+=90%" : "+=160%",
      pin: true,
      pinSpacing: true,
      scrub: isMobile ? 1.1 : true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  tl.to(
    heroFrame,
    {
      width: () => window.innerWidth,
      height: () => window.innerHeight,
      borderRadius: 0,
      ease: "power2.inOut",
      duration: grow,
    },
    0
  );

  tl.to(".hero__frame-tint", { opacity: 0, ease: "none", duration: grow }, 0);

  tl.to(
    "[data-hero-left]",
    {
      x: () => -window.innerWidth * 0.7,
      opacity: 0,
      ease: "power2.in",
      duration: 0.5,
    },
    0
  );
  tl.to(
    "[data-hero-right]",
    {
      x: () => window.innerWidth * 0.7,
      opacity: 0,
      ease: "power2.in",
      duration: 0.5,
    },
    0
  );

  tl.to(
    "[data-hero-proof]",
    { opacity: 0, y: 20, ease: "none", duration: 0.3 },
    0
  );

  tl.fromTo(
    "[data-hero-side-left]",
    { autoAlpha: 0, x: "-110%" },
    { autoAlpha: 0.98, x: "0%", ease: "power3.out", duration: 0.22 },
    0.66
  );

  tl.fromTo(
    "[data-hero-side-right]",
    { autoAlpha: 0, x: "110%" },
    { autoAlpha: 0.98, x: "0%", ease: "power3.out", duration: 0.22 },
    0.66
  );

  tl.to(
    ["[data-hero-side-left]", "[data-hero-side-right]"],
    { autoAlpha: 0, ease: "power2.in", duration: 0.08 },
    0.92
  );
}

if (!reduceMotion) {
  const revealVars = {
    y: 48,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  };

  const gridItems = new Set();

  gsap.utils
    .toArray(".rooms__grid")
    .forEach((grid) => {
      const items = gsap.utils.toArray(grid.querySelectorAll("[data-reveal]"));
      items.forEach((item) => gridItems.add(item));

      gsap.from(items, {
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: grid,
          start: "top 80%",
          toggleActions: "restart none restart none",
        },
      });
    });

  gsap.utils.toArray("[data-reveal]").forEach((el) => {
    if (gridItems.has(el)) return;

    gsap.from(el, {
      ...revealVars,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "restart none restart none",
      },
    });
  });
}

if (!reduceMotion) {
  gsap.utils.toArray("[data-gauge]").forEach((fill) => {
    const pct = parseFloat(fill.getAttribute("data-gauge")) || 0;
    gsap.fromTo(
      fill,
      { width: "0%" },
      {
        width: pct + "%",
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: fill.closest(".gauge") || fill,
          start: "top 85%",
          toggleActions: "restart none restart none",
        },
      }
    );
  });
} else {
  document.querySelectorAll("[data-gauge]").forEach((fill) => {
    fill.style.width = (parseFloat(fill.getAttribute("data-gauge")) || 0) + "%";
  });
}

if (!reduceMotion) {
  gsap.utils.toArray("[data-img-reveal]").forEach((wrap) => {
    const img = wrap.querySelector("img");
    const st = {
      trigger: wrap,
      start: "top 82%",
      toggleActions: "restart none restart none",
    };
    gsap.fromTo(
      wrap,
      { clipPath: "inset(0% 100% 0% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power3.inOut", scrollTrigger: st }
    );
    if (img) {
      gsap.fromTo(img, { scale: 1.35 }, { scale: 1, duration: 1.5, ease: "power3.out", scrollTrigger: st });
    }
  });
}

const stackCards = gsap.utils.toArray(".stack__card");

if (stackCards.length && !reduceMotion) {
  stackCards.forEach((card) => {
    gsap.from(card.querySelectorAll("[data-stack-anim]"), {
      y: 60,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: card,
        start: "top 55%",
        toggleActions: "restart none restart none",
      },
    });
  });
}

const marquee = document.querySelector("[data-marquee]");

if (marquee && !reduceMotion) {
  const loop = gsap.to(marquee, { xPercent: -50, duration: 20, ease: "none", repeat: -1 });
  const skewTo = gsap.quickTo(marquee, "skewX", { duration: 0.5, ease: "power3" });
  const clampSkew = gsap.utils.clamp(-12, 12);
  let resetTimer;

  lenis.on("scroll", (e) => {
    const v = e.velocity || 0;
    loop.timeScale(1 + Math.min(Math.abs(v) * 0.25, 6));
    skewTo(clampSkew(v * -0.5));
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      loop.timeScale(1);
      skewTo(0);
    }, 120);
  });
}

gsap.utils.toArray("[data-count]").forEach((el) => {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || "";
  const render = (v) => (el.textContent = Math.round(v).toLocaleString("ru-RU") + suffix);

  const run = () => {
    if (reduceMotion) return render(target);
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 1.6,
      ease: "power2.out",
      onUpdate: () => render(obj.val),
    });
  };

  ScrollTrigger.create({
    trigger: el,
    start: "top 90%",
    onEnter: run,
    onEnterBack: run,
  });
});

const nav = document.querySelector("[data-nav]");
const navMenu = document.querySelector("[data-nav-menu]");
const navToggle = document.querySelector("[data-nav-toggle]");

if (nav) {
  ScrollTrigger.create({
    start: 60,
    end: "max",
    onToggle: (self) => nav.classList.toggle("is-scrolled", self.isActive),
  });
}

function closeMenu() {
  if (!navMenu) return;
  navMenu.classList.remove("is-open");
  nav.classList.remove("is-menu-open");
  navToggle?.setAttribute("aria-expanded", "false");
  lenis.start();
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const willOpen = !navMenu.classList.contains("is-open");
    navMenu.classList.toggle("is-open", willOpen);
    nav.classList.toggle("is-menu-open", willOpen);
    navToggle.setAttribute("aria-expanded", String(willOpen));

    willOpen ? lenis.stop() : lenis.start();
  });
}

document.querySelectorAll("[data-nav-link]").forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    closeMenu();
    lenis.scrollTo(target, { offset: 0, duration: 1.4 });
  });
});

(function roomModal() {
  const modal = document.querySelector("[data-room-modal]");
  if (!modal || !window.TAL_ROOMS_BY_SLUG) return;

  const track = modal.querySelector("[data-room-track]");
  const dotsBox = modal.querySelector("[data-room-dots]");
  const elMeta = modal.querySelector("[data-room-meta]");
  const elTitle = modal.querySelector("[data-room-title]");
  const elPrice = modal.querySelector("[data-room-price]");
  const elDesc = modal.querySelector("[data-room-desc]");
  const elAmen = modal.querySelector("[data-room-amen]");
  const btnPrev = modal.querySelector("[data-room-prev]");
  const btnNext = modal.querySelector("[data-room-next]");

  let index = 0;
  let count = 0;
  let lastFocus = null;

  const currentLang = () =>
    document.documentElement.getAttribute("lang") || "ru";

  function setI18n(el, key) {
    if (el) el.setAttribute("data-i18n", key);
  }

  function goTo(i) {
    if (!count) return;
    index = (i + count) % count;
    track.style.transform = `translateX(-${index * 100}%)`;
    dotsBox.querySelectorAll("button").forEach((d, di) =>
      d.classList.toggle("is-active", di === index)
    );
  }

  function buildGallery(images) {
    track.innerHTML = "";
    dotsBox.innerHTML = "";
    count = images.length;
    images.forEach((src, i) => {
      const slide = document.createElement("div");
      slide.className = "room-modal__slide";
      const img = document.createElement("img");
      img.src = src;
      img.alt = "";
      img.loading = i === 0 ? "eager" : "lazy";
      slide.appendChild(img);
      track.appendChild(slide);

      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", "Кадр " + (i + 1));
      dot.addEventListener("click", () => goTo(i));
      dotsBox.appendChild(dot);
    });
    const single = count <= 1;
    btnPrev.hidden = single;
    btnNext.hidden = single;
    dotsBox.hidden = single;
    goTo(0);
  }

  function open(slug) {
    const room = window.TAL_ROOMS_BY_SLUG[slug];
    if (!room) return;

    setI18n(elMeta, `rooms.${slug}.meta`);
    setI18n(elTitle, `rooms.${slug}.title`);
    setI18n(elPrice, `rooms.${slug}.price`);
    setI18n(elDesc, `rooms.${slug}.full`);
    setI18n(elAmen, `rooms.${slug}.amen`);

    if (window.TalI18n) window.TalI18n.apply(currentLang());

    buildGallery(room.images);

    lastFocus = document.activeElement;
    modal.hidden = false;
    requestAnimationFrame(() => modal.classList.add("is-open"));
    document.body.classList.add("is-modal-open");
    if (typeof lenis !== "undefined" && lenis.stop) lenis.stop();
    const closeBtn = modal.querySelector("[data-room-close].room-modal__close");
    if (closeBtn) closeBtn.focus();
  }

  function close() {
    modal.classList.remove("is-open");
    document.body.classList.remove("is-modal-open");
    if (typeof lenis !== "undefined" && lenis.start) lenis.start();
    const onEnd = () => {
      modal.hidden = true;
      modal.removeEventListener("transitionend", onEnd);
    };
    modal.addEventListener("transitionend", onEnd);

    setTimeout(() => {
      if (!modal.classList.contains("is-open")) modal.hidden = true;
    }, 450);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.querySelectorAll("[data-room-open]").forEach((btn) =>
    btn.addEventListener("click", () => open(btn.getAttribute("data-room-open")))
  );

  modal.querySelectorAll("[data-room-close]").forEach((el) =>
    el.addEventListener("click", close)
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) close();
  });

  btnPrev.addEventListener("click", () => goTo(index - 1));
  btnNext.addEventListener("click", () => goTo(index + 1));

  const gallery = modal.querySelector(".room-modal__gallery");
  if (gallery) {
    let sx = 0,
      sy = 0,
      axis = null,
      active = false;

    gallery.addEventListener(
      "touchstart",
      (e) => {
        const t = e.touches[0];
        sx = t.clientX;
        sy = t.clientY;
        axis = null;
        active = true;
      },
      { passive: true }
    );

    gallery.addEventListener(
      "touchmove",
      (e) => {
        if (!active) return;
        const t = e.touches[0];
        const dx = t.clientX - sx;
        const dy = t.clientY - sy;
        if (axis === null && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
          axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
        }

        if (axis === "x") e.preventDefault();
      },
      { passive: false }
    );

    gallery.addEventListener(
      "touchend",
      (e) => {
        if (!active) return;
        active = false;
        if (axis !== "x") return;
        const dx = e.changedTouches[0].clientX - sx;
        if (Math.abs(dx) > 40) goTo(index + (dx < 0 ? 1 : -1));
      },
      { passive: true }
    );
  }
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("is-open")) return;
    if (e.key === "ArrowLeft") goTo(index - 1);
    if (e.key === "ArrowRight") goTo(index + 1);
  });
})();

window.addEventListener("load", () => ScrollTrigger.refresh());
