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
//  HERO — раскрытие видео-окошка + разлёт заголовка
// ===============================
const hero = document.querySelector("[data-hero]");
const heroFrame = document.querySelector("[data-hero-frame]");

if (hero && heroFrame && !reduceMotion) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "+=160%", // длина прокрутки на раскрытие
      pin: true,
      pinSpacing: true, // после раскрытия страница спокойно листается дальше
      scrub: true,
      anticipatePin: 1,
      invalidateOnRefresh: true, // пересчёт целевых размеров при ресайзе
    },
  });

  // 1) Окошко плавно раскрывается на весь экран (во все стороны от центра)
  tl.to(
    heroFrame,
    {
      width: () => window.innerWidth,
      height: () => window.innerHeight,
      borderRadius: 0,
      ease: "power2.inOut",
      duration: 1,
    },
    0
  );

  // 2) Затемнение поверх видео уходит по мере раскрытия
  tl.to(".hero__frame-tint", { opacity: 0, ease: "none", duration: 1 }, 0);

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
//  Пересчёт координат после полной загрузки
//  (важно из-за pin + поздней загрузки картинок)
// ===============================
window.addEventListener("load", () => ScrollTrigger.refresh());
