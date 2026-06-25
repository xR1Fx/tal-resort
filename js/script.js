// ===============================
//  Tal Resort — основной скрипт
// ===============================

// 1. Регистрируем плагин ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 2. Плавный скролл Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

// 3. Связка Lenis <-> GSAP ticker
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // ticker отдаёт секунды, Lenis ждёт миллисекунды
});
gsap.ticker.lagSmoothing(0);

// Уважаем настройку «уменьшить движение»
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// ===============================
//  Автозапуск hero-видео
//  Мобильные браузеры (особенно iOS) часто блокируют autoplay —
//  принудительно стартуем muted-видео и повторяем при первом взаимодействии.
// ===============================
(function ensureHeroVideoPlays() {
  const vids = document.querySelectorAll(".hero video");
  if (!vids.length) return;

  const tryPlay = () => {
    vids.forEach((v) => {
      v.muted = true; // обязательное условие для autoplay на мобильных
      v.defaultMuted = true;
      v.playsInline = true;
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    });
  };

  tryPlay();
  window.addEventListener("load", tryPlay, { once: true });
  // запасной заход: первый жест пользователя гарантированно разблокирует
  ["touchstart", "pointerdown", "click", "scroll", "keydown"].forEach((evt) =>
    window.addEventListener(evt, tryPlay, { once: true, passive: true })
  );
  // вернулись на вкладку — продолжаем играть
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) tryPlay();
  });
})();

// ===============================
//  HERO — раскрытие видео-окошка + разлёт заголовка
// ===============================
const hero = document.querySelector("[data-hero]");
const heroFrame = document.querySelector("[data-hero-frame]");

if (hero && heroFrame && !reduceMotion) {
  // На телефоне раскрытие — быстрее (короче прокрутка) и плавнее (инерц. scrub)
  const isMobile = window.matchMedia("(max-width: 600px)").matches;
  const grow = isMobile ? 0.55 : 0.68; // доля таймлайна на раскрытие окна

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: isMobile ? "+=90%" : "+=160%", // короче прокрутка на телефоне — быстрее
      pin: true,
      pinSpacing: true, // после раскрытия страница спокойно листается дальше
      scrub: isMobile ? 1.1 : true, // больше инерции на телефоне — плавнее
      anticipatePin: 1,
      invalidateOnRefresh: true, // пересчёт целевых размеров при ресайзе
    },
  });

  // 1) Окошко плавно раскрывается на весь экран (во все стороны от центра)
  //    Рост занимает ~68% таймлайна, дальше видео «держится» полноэкранным.
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

  // 2) Затемнение поверх видео уходит по мере раскрытия
  tl.to(".hero__frame-tint", { opacity: 0, ease: "none", duration: grow }, 0);

  // 3) Заголовок разлетается: левая часть — влево, правая — вправо, и тает
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

  // 4) Соц-доказательство быстро растворяется
  tl.to(
    "[data-hero-proof]",
    { opacity: 0, y: 20, ease: "none", duration: 0.3 },
    0
  );

  // 5) Боковой текст (ПК) — проявляется, когда видео уже раскрылось на панели
  // левый — вылетает из-за левого края и мягко доезжает на место
  tl.fromTo(
    "[data-hero-side-left]",
    { autoAlpha: 0, x: "-110%" },
    { autoAlpha: 0.98, x: "0%", ease: "power3.out", duration: 0.22 },
    0.66
  );
  // правый — симметрично из-за правого края
  tl.fromTo(
    "[data-hero-side-right]",
    { autoAlpha: 0, x: "110%" },
    { autoAlpha: 0.98, x: "0%", ease: "power3.out", duration: 0.22 },
    0.66
  );

  // ...держится, затем полностью растворяется в конце, уступая место следующему блоку
  tl.to(
    ["[data-hero-side-left]", "[data-hero-side-right]"],
    { autoAlpha: 0, ease: "power2.in", duration: 0.08 },
    0.92
  );
}

// ===============================
//  Премиальное появление блоков
//  Один раз: проявились и остались (никаких возвратов)
// ===============================
if (!reduceMotion) {
  // Общие настройки реверса: проигрываем при входе и больше не трогаем
  const revealVars = {
    y: 48,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  };

  // 1) Сетки — анимируем дочерние карточки лёгким каскадом.
  //    Эти элементы исключаем из одиночной анимации, чтобы не было
  //    двойного gsap.from на одном элементе (причина «мелькания»).
  const gridItems = new Set();

  gsap.utils
    .toArray(".rooms__grid, .amenities__grid, .gallery__grid")
    .forEach((grid) => {
      const items = gsap.utils.toArray(grid.querySelectorAll("[data-reveal]"));
      items.forEach((item) => gridItems.add(item));

      gsap.from(items, {
        ...revealVars,
        stagger: 0.12,
        scrollTrigger: {
          trigger: grid,
          start: "top 80%",
          once: true, // сработает один раз и самоотключится
          toggleActions: "play none none none",
        },
      });
    });

  // 2) Остальные одиночные [data-reveal] (заголовки, текст, фото и т.п.)
  gsap.utils.toArray("[data-reveal]").forEach((el) => {
    if (gridItems.has(el)) return; // уже анимируется в составе сетки

    gsap.from(el, {
      ...revealVars,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true, // один раз и навсегда остаётся видимым
        toggleActions: "play none none none",
      },
    });
  });
}

// ===============================
//  Параллакс картинок (отель и SPA)
//  Картинка двигается внутри рамки чуть медленнее страницы
// ===============================
if (!reduceMotion) {
  gsap.utils
    .toArray(".room-card__media img, .amenity__media img")
    .forEach((img) => {
      gsap.fromTo(
        img,
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: img.closest(".room-card, .amenity"),
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
}

// ===============================
//  Шкалы-статы (gauges) — заполняются при появлении в зоне видимости
// ===============================
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
          once: true,
          toggleActions: "play none none none",
        },
      }
    );
  });
} else {
  // без анимаций — сразу показываем заполнение
  document.querySelectorAll("[data-gauge]").forEach((fill) => {
    fill.style.width = (parseFloat(fill.getAttribute("data-gauge")) || 0) + "%";
  });
}

// ===============================
//  Раскрытие картинок «шторкой» (clip-path) + зум
// ===============================
if (!reduceMotion) {
  gsap.utils.toArray("[data-img-reveal]").forEach((wrap) => {
    const img = wrap.querySelector("img");
    const st = { trigger: wrap, start: "top 82%", once: true };
    gsap.fromTo(
      wrap,
      { clipPath: "inset(0% 100% 0% 0%)" }, // скрыта справа
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power3.inOut", scrollTrigger: st }
    );
    if (img) {
      gsap.fromTo(img, { scale: 1.35 }, { scale: 1, duration: 1.5, ease: "power3.out", scrollTrigger: st });
    }
  });
}

// ===============================
//  Впечатления — липкие карточки «стопкой»
//  Контент въезжает; уходящую карту «придавливает» и затемняет следующая.
//  Работает одинаково круто на телефоне (sticky + touch-скролл).
// ===============================
const stackCards = gsap.utils.toArray(".stack__card");

if (stackCards.length && !reduceMotion) {
  stackCards.forEach((card) => {
    // контент въезжает при входе карточки
    gsap.from(card.querySelectorAll("[data-stack-anim]"), {
      y: 60,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: { trigger: card, start: "top 55%", once: true },
    });
  });
}

// ===============================
//  Бегущая строка — едет сама + реагирует на скорость скролла
// ===============================
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

// ===============================
//  Галерея — параллакс по глубине (разные скорости)
// ===============================
if (!reduceMotion) {
  gsap.utils.toArray(".gallery__item").forEach((item, i) => {
    const img = item.querySelector("img");
    if (!img) return;
    const depth = 4 + (i % 3) * 2; // 4 / 6 / 8 — ощущение глубины
    gsap.fromTo(
      img,
      { yPercent: -depth },
      {
        yPercent: depth,
        ease: "none",
        scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", scrub: true },
      }
    );
  });
}

// ===============================
//  Пословное появление текста
//  Слова всплывают по очереди с мягким затуханием
// ===============================
function splitIntoWords(el) {
  const words = el.textContent.trim().split(/\s+/);
  el.textContent = "";
  return words.map((word, i) => {
    const span = document.createElement("span");
    span.className = "word";
    span.textContent = word;
    el.appendChild(span);
    // пробел между словами как обычный текстовый узел (перенос строк работает)
    if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
    return span;
  });
}

if (!reduceMotion) {
  gsap.utils.toArray("[data-split]").forEach((el) => {
    const words = splitIntoWords(el);
    gsap.from(words, {
      yPercent: 60,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.025,
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
        toggleActions: "play none none none",
      },
    });
  });
}

// ===============================
//  Счётчики (статы) — счёт от 0 при доскролле
// ===============================
gsap.utils.toArray("[data-count]").forEach((el) => {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || "";
  const render = (v) => (el.textContent = Math.round(v).toLocaleString("ru-RU") + suffix);

  ScrollTrigger.create({
    trigger: el,
    start: "top 90%",
    once: true,
    onEnter: () => {
      if (reduceMotion) return render(target);
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 1.6,
        ease: "power2.out",
        onUpdate: () => render(obj.val),
      });
    },
  });
});

// ===============================
//  Плавающая кнопка: сворачивание при скролле
// ===============================
const floatBook = document.querySelector("[data-float-book]");

if (floatBook) {
  ScrollTrigger.create({
    start: () => window.innerHeight * 0.6,
    end: "max",
    onToggle: (self) => {
      floatBook.classList.toggle("is-collapsed", self.isActive);
    },
  });
}

// ===============================
//  Навигация — стекло при скролле, бургер, плавные якоря
// ===============================
const nav = document.querySelector("[data-nav]");
const navMenu = document.querySelector("[data-nav-menu]");
const navToggle = document.querySelector("[data-nav-toggle]");

// Матовое стекло, когда ушли с самого верха
if (nav) {
  ScrollTrigger.create({
    start: 60,
    end: "max",
    onToggle: (self) => nav.classList.toggle("is-scrolled", self.isActive),
  });
}

// Открытие/закрытие мобильного меню
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
    // блокируем скролл под открытым меню
    willOpen ? lenis.stop() : lenis.start();
  });
}

// Плавный скролл по якорям (через Lenis) + закрытие меню
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

// ===============================
//  Пересчёт координат после полной загрузки
//  (важно из-за pin + поздней загрузки картинок)
// ===============================
window.addEventListener("load", () => ScrollTrigger.refresh());
