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
//  HERO — pin + scale + fade
// ===============================
const hero = document.querySelector("[data-hero]");
const heroMedia = document.querySelector("[data-hero-media]");

if (hero && heroMedia && !reduceMotion) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "+=150%", // длинная фиксация — зум идёт мягко и неспешно
      pin: true,
      // false: спейсер не добавляется, поэтому следующий блок
      // наезжает ПОВЕРХ зафиксированного hero (см. z-index в SCSS)
      pinSpacing: false,
      scrub: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  // 1) «Влёт вглубь кадра»: видео плавно увеличивается весь скролл (зум с дрона)
  tl.fromTo(
    heroMedia,
    { scale: 1 },
    { scale: 1.2, ease: "none", duration: 1.5 },
    0
  );

  // 2) Заголовок и кнопка улетают вверх, чуть уменьшаются и растворяются в воздухе
  tl.to(
    ".hero__content",
    {
      yPercent: -22,
      scale: 0.86,
      opacity: 0,
      ease: "power1.in",
      duration: 0.7,
    },
    0
  );

  // 3) Тёмное наложение мягко уходит по мере «влёта»
  tl.to(".hero__overlay", { opacity: 0, ease: "none", duration: 0.95 }, 0);

  // 4) Ближе к концу зума видео уходит в прозрачность — пока белый блок
  //    наезжает снизу и перекрывает кадр (стык получается бесшовным)
  tl.to(
    heroMedia,
    { opacity: 0, ease: "power2.in", duration: 0.45 },
    0.6
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
