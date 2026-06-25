/* ============================================================
   i18n — Tal Resort. Три языка: RU (русский), KK (қазақша), EN.
   Значения могут содержать HTML (<br>, <small>, <em>, <b>).
   Применение: элементам ставится data-i18n="ключ"; apply()
   подставляет перевод через innerHTML. Если ключа нет — остаётся
   русский (страница никогда не «ломается»). Выбор хранится в
   localStorage и применяется до отрисовки.
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    // ----------------------------- РУССКИЙ -----------------------------
    ru: {
      "nav.about": "О курорте",
      "nav.aqua": "Аква &amp; SPA",
      "nav.baths": "Бани",
      "nav.stay": "Проживание",
      "nav.restaurant": "Ресторан",
      "nav.contacts": "Контакты",
      "nav.book": "Забронировать",
      "nav.bookFull": "Забронировать отдых",

      "hero.titleLeft": "Искусство",
      "hero.titleRight": "семейного отдыха",
      "hero.proof": "<b>4.9</b> · более 1200 счастливых гостей",
      "hero.sideTitle": "Перезагрузка",
      "hero.sideText": "Оставьте городской шум позади. Наслаждайтесь безупречным сервисом и тишиной.",

      "about.eyebrow": "О курорте",
      "about.title": "Искусство семейного отдыха<br />у подножия Талгарских гор",
      "about.lead": "Tal Resort — аква-курорт всего в часе езды от Алматы. Термальные бассейны 40°, кедровые бани и SPA, авторская кухня и уютные домики — всё, чтобы отдохнуть всей семьёй, не уезжая далеко от города.",
      "about.body": "Мы объединили городской комфорт с горным воздухом Талгарского района: подогреваемые бассейны под открытым небом, банный ритуал и неспешные ужины у камина. Приезжайте на день или оставайтесь с ночёвкой.",
      "about.stat1": "Термальная вода",
      "about.stat2": "Счастливых гостей",
      "about.stat3": "Водных горок",
      "about.stat4label": "Часы аква-зоны",

      "marquee.1": "Термальная вода 40°",
      "marquee.2": "Кедровые бани",
      "marquee.3": "Авторская кухня",
      "marquee.4": "Горный воздух",
      "marquee.5": "1 час от Алматы",

      "stack.aqua.eyebrow": "Аква-зона &amp; SPA",
      "stack.aqua.title": "Вода,<br />которая лечит",
      "stack.aqua.text": "Подогреваемые бассейны под открытым небом, пять водных горок и термальные зоны 40° — для всей семьи и в любой сезон.",
      "stack.aqua.tag1": "40° круглый год",
      "stack.aqua.tag2": "5 горок",
      "stack.aqua.tag3": "SPA &amp; массаж",
      "stack.baths.eyebrow": "Банный ритуал",
      "stack.baths.title": "Три бани,<br />три характера",
      "stack.baths.text": "Алтайская кедровая, русская парная и соляная комната — живой жар, веники и мягкий микроклимат. Настоящий ритуал тепла и пара.",
      "stack.baths.tag1": "Кедровая",
      "stack.baths.tag2": "Русская парная",
      "stack.baths.tag3": "Соляная комната",
      "stack.rest.eyebrow": "Ресторан",
      "stack.rest.title": "Кухня<br />у камина",
      "stack.rest.text": "Сезонное меню от шеф-повара из локальных продуктов, уютный зал с камином и восточная терраса — вкусно в течение всего дня.",
      "stack.rest.tag1": "A la carte",
      "stack.rest.tag2": "Восточная терраса",
      "stack.rest.tag3": "Камин",

      "facts.eyebrow": "Технологии воды",
      "facts.title": "Аква-зона в цифрах",
      "facts.lead": "За идеальным отдыхом стоит инженерия: вода нужной температуры, многоступенчатая очистка и продуманный график работы.",
      "facts.1label": "Температура термальной воды",
      "facts.1value": "40 °C",
      "facts.2label": "Ступеней фильтрации воды",
      "facts.2value": "7 ступеней",
      "facts.3label": "Водных горок для детей",
      "facts.3value": "5 горок",
      "facts.4label": "Часов работы аква-зоны в день",
      "facts.4value": "13 часов",

      "day.eyebrow": "Сценарий",
      "day.title": "Ваш идеальный день",
      "day.lead": "От утреннего SPA до тихого вечера в номере — маршрут, по которому хочется замедлиться.",
      "day.1time": "11:00",
      "day.1title": "Приезд и SPA-ритуал",
      "day.1text": "Заселение, травяной чай и первый расслабляющий массаж после дороги.",
      "day.2time": "14:00",
      "day.2title": "Термальные бассейны",
      "day.2text": "Подогреваемая вода 40° под открытым небом и пять горок для детей.",
      "day.3time": "17:00",
      "day.3title": "Банный ритуал",
      "day.3text": "Алтайская кедровая, русская парная и соляная комната с веником и паром.",
      "day.4time": "19:30",
      "day.4title": "Ужин у камина",
      "day.4text": "Сезонное меню от шефа, живая музыка и восточная терраса.",
      "day.5time": "22:00",
      "day.5title": "Отдых в номере",
      "day.5text": "Тишина, горный воздух и крепкий сон вдали от города.",

      "rooms.eyebrow": "Проживание",
      "rooms.title": "Номера и домики",
      "rooms.r1.badge": "от 75 000 ₸ / ночь",
      "rooms.r1.title": "Стандарт",
      "rooms.r1.desc": "Уютный номер с городским комфортом и всем необходимым для отдыха вдвоём. Тёплый текстиль, мягкий свет, тишина.",
      "rooms.r1.meta": "2 гостя",
      "rooms.r2.badge": "от 105 000 ₸ / ночь",
      "rooms.r2.title": "Люкс",
      "rooms.r2.desc": "Просторный номер с приватной террасой и видом на горы. Больше пространства, света и приватности для семьи.",
      "rooms.r2.meta": "2–4 гостя",
      "rooms.r3.badge": "от 80 000 ₸ / ночь",
      "rooms.r3.title": "Гостевой дом",
      "rooms.r3.desc": "Отдельный дом для большой компании или семьи: собственное пространство, кухня и терраса под открытым небом.",
      "rooms.r3.meta": "4–5 гостей",
      "rooms.r4.badge": "от 190 000 ₸ / ночь",
      "rooms.r4.title": "Дом «Celebrity»",
      "rooms.r4.desc": "Premium-резиденция для большой компании: максимум простора, приватности и сервиса для особенных событий.",
      "rooms.r4.meta": "6+ гостей",
      "rooms.more": "Подробнее →",
      "rooms.note": "Также доступны одноместные, полулюкс и семейные категории — от 45 000 ₸ за ночь.",

      "rest.eyebrow": "Меню ресторана",
      "rest.title": "Вкус Tal Resort",
      "rest.cap": "A la carte · восточная терраса",
      "rest.lead": "Сезонное меню от шеф-повара из локальных продуктов, уютный зал с камином и восточная терраса — вкусно в течение всего дня.",
      "rest.d1": "Бешбармак по-домашнему<em>томлёное мясо, тонкое тесто</em>",
      "rest.d1price": "от 4 500 ₸",
      "rest.d2": "Стейк на углях<em>мраморная говядина, овощи гриль</em>",
      "rest.d2price": "от 7 900 ₸",
      "rest.d3": "Плов в казане<em>по-восточному, на дровах</em>",
      "rest.d3price": "от 3 800 ₸",
      "rest.d4": "Десерты и чайная карта<em>горные травы, восточные сладости</em>",
      "rest.d4price": "от 1 500 ₸",

      "prices.eyebrow": "Билет на день",
      "prices.title": "Доступ к аква-зоне и&nbsp;SPA",
      "prices.p1label": "Взрослый · будни",
      "prices.p1sub": "Понедельник — пятница",
      "prices.p1time": "Аква-зона и SPA · 10:00–23:00",
      "prices.p2badge": "Популярно",
      "prices.p2label": "Взрослый · выходные",
      "prices.p2sub": "Суббота, воскресенье, праздники",
      "prices.p2time": "Аква-зона и SPA · 10:00–23:00",
      "prices.p3label": "Детский",
      "prices.p3sub": "Дети 3–12 лет",
      "prices.p3time": "Включая анимацию",
      "prices.hint": "Дети до 3 лет — бесплатно. Проживание оплачивается отдельно.",

      "gallery.eyebrow": "Атмосфера",
      "gallery.title": "Моменты Tal Resort",

      "rev.eyebrow": "Отзывы гостей",
      "rev.title": "Нам доверяют отдых",
      "rev.q1": "Термальные бассейны — это что-то невероятное. Дети не вылезали из воды, а мы наконец-то выдохнули. Вернёмся ещё не раз.",
      "rev.n1": "Айгерим",
      "rev.m1": "Семейный отдых · Алматы",
      "rev.q2": "Кедровая баня и SPA после рабочей недели — идеальная перезагрузка. Час от города, а ощущение, будто уехал далеко в горы.",
      "rev.n2": "Данияр",
      "rev.m2": "Выходные вдвоём",
      "rev.q3": "Снимали гостевой дом на день рождения. Сервис, кухня, атмосфера — всё на высоте. Гости до сих пор вспоминают.",
      "rev.n3": "Мадина",
      "rev.m3": "Праздник компанией",

      "loc.eyebrow": "Как добраться",
      "loc.title": "Час от Алматы — и вы на месте",
      "loc.addrLabel": "Адрес",
      "loc.addrValue": "Талгарский район, Алматинская область",
      "loc.timeLabel": "Время в пути",
      "loc.timeValue": "≈ 1 час от центра Алматы",
      "loc.phoneLabel": "Телефон",
      "loc.hoursLabel": "Часы аква-зоны",
      "loc.hoursValue": "Ежедневно · 10:00–23:00",
      "loc.gis": "Открыть в 2ГИС",

      "cta.eyebrow": "Готовы замедлиться?",
      "cta.title": "Забронируйте отдых<br />в Tal Resort",
      "cta.text": "Термальные бассейны 40°, бани, SPA и уютные домики всего в часе от Алматы. Напишите нам — подберём даты и категорию под вашу компанию.",
      "cta.wa": "Написать в WhatsApp",

      "footer.tagline": "Аква-курорт у подножия Талгарских гор.",
      "footer.contactsHead": "Контакты",
      "footer.addrHead": "Адрес",
      "footer.address": "Талгарский район,<br />Алматинская область<br />Час от центра Алматы<br />Аква-зона: 10:00–23:00",
      "footer.gis": "Открыть в 2ГИС →",
      "footer.bookHead": "Бронирование",
      "footer.bookNote": "Напишите нам, чтобы забронировать даты или билет на день.",
      "footer.bookBtn": "Забронировать отдых",
      "footer.copy": "© 2026 TAL RESORT — Aqua &amp; SPA. Все права защищены.",
      "footer.region": "Талгар · Алматинская область",

      "float.book": "Забронировать отдых"
    },

    // ----------------------------- ҚАЗАҚША -----------------------------
    kk: {
      "nav.about": "Курорт туралы",
      "nav.aqua": "Аква &amp; SPA",
      "nav.baths": "Моншалар",
      "nav.stay": "Тұру",
      "nav.restaurant": "Мейрамхана",
      "nav.contacts": "Байланыс",
      "nav.book": "Брондау",
      "nav.bookFull": "Демалысты брондау",

      "hero.titleLeft": "Отбасылық",
      "hero.titleRight": "демалыс өнері",
      "hero.proof": "<b>4.9</b> · 1200-ден аса бақытты қонақ",
      "hero.sideTitle": "Қайта зарядтау",
      "hero.sideText": "Қала шуын артта қалдырыңыз. Мінсіз қызмет пен тыныштықтан ләззат алыңыз.",

      "about.eyebrow": "Курорт туралы",
      "about.title": "Талғар тауларының бөктеріндегі<br />отбасылық демалыс өнері",
      "about.lead": "Tal Resort — Алматыдан небәрі бір сағат жерде орналасқан аква-курорт. 40° термалды бассейндер, балқарағай моншалары мен SPA, авторлық ас үй және жайлы үйшіктер — бәрі отбасыңызбен қаладан алыс кетпей демалуыңыз үшін.",
      "about.body": "Біз қала жайлылығын Талғар ауданының таулы ауасымен біріктірдік: ашық аспан астындағы жылытылатын бассейндер, мұнша рәсімі және оттың жанындағы асықпай ұйымдастырылған кештер. Бір күнге келіңіз немесе түнеп қалыңыз.",
      "about.stat1": "Термалды су",
      "about.stat2": "Бақытты қонақ",
      "about.stat3": "Су сырғанағы",
      "about.stat4label": "Аква-аймақ сағаттары",

      "marquee.1": "Термалды су 40°",
      "marquee.2": "Балқарағай моншалары",
      "marquee.3": "Авторлық ас үй",
      "marquee.4": "Таулы ауа",
      "marquee.5": "Алматыдан 1 сағат",

      "stack.aqua.eyebrow": "Аква-аймақ &amp; SPA",
      "stack.aqua.title": "Сауықтыратын<br />су",
      "stack.aqua.text": "Ашық аспан астындағы жылытылатын бассейндер, бес су сырғанағы және 40° термалды аймақтар — бүкіл отбасыға, кез келген маусымда.",
      "stack.aqua.tag1": "Жыл бойы 40°",
      "stack.aqua.tag2": "5 сырғанақ",
      "stack.aqua.tag3": "SPA &amp; массаж",
      "stack.baths.eyebrow": "Мұнша рәсімі",
      "stack.baths.title": "Үш мұнша,<br />үш мінез",
      "stack.baths.text": "Алтай балқарағай моншасы, орыс булы моншасы және тұзды бөлме — тірі ыстық, шыбық сыпырғыш және жұмсақ микроклимат. Шынайы жылу мен бу рәсімі.",
      "stack.baths.tag1": "Балқарағай",
      "stack.baths.tag2": "Орыс булы моншасы",
      "stack.baths.tag3": "Тұзды бөлме",
      "stack.rest.eyebrow": "Мейрамхана",
      "stack.rest.title": "Оттың жанындағы<br />ас үй",
      "stack.rest.text": "Жергілікті өнімдерден жасалған шеф-аспаздың маусымдық мәзірі, оты бар жайлы зал және шығыс террасасы — күні бойы дәмді.",
      "stack.rest.tag1": "A la carte",
      "stack.rest.tag2": "Шығыс террасасы",
      "stack.rest.tag3": "От",

      "facts.eyebrow": "Су технологиялары",
      "facts.title": "Аква-аймақ сандармен",
      "facts.lead": "Мінсіз демалыстың артында инженерия тұр: қажетті температурадағы су, көп сатылы тазалау және ойластырылған жұмыс кестесі.",
      "facts.1label": "Термалды судың температурасы",
      "facts.1value": "40 °C",
      "facts.2label": "Суды сүзу сатылары",
      "facts.2value": "7 саты",
      "facts.3label": "Балаларға арналған су сырғанақтары",
      "facts.3value": "5 сырғанақ",
      "facts.4label": "Аква-аймақтың тәуліктік жұмыс сағаты",
      "facts.4value": "13 сағат",

      "day.eyebrow": "Сценарий",
      "day.title": "Сіздің мінсіз күніңіз",
      "day.lead": "Таңғы SPA-дан бөлмедегі тыныш кешке дейін — асықпай демалғыңыз келетін маршрут.",
      "day.1time": "11:00",
      "day.1title": "Келу және SPA-рәсім",
      "day.1text": "Орналасу, шөп шайы және жолдан кейінгі алғашқы тынықтыратын массаж.",
      "day.2time": "14:00",
      "day.2title": "Термалды бассейндер",
      "day.2text": "Ашық аспан астындағы 40° жылытылған су және балаларға бес сырғанақ.",
      "day.3time": "17:00",
      "day.3title": "Мұнша рәсімі",
      "day.3text": "Алтай балқарағай моншасы, орыс булы моншасы және шыбық пен булы тұзды бөлме.",
      "day.4time": "19:30",
      "day.4title": "Оттың жанындағы кешкі ас",
      "day.4text": "Шефтің маусымдық мәзірі, тірі музыка және шығыс террасасы.",
      "day.5time": "22:00",
      "day.5title": "Бөлмедегі демалыс",
      "day.5text": "Тыныштық, таулы ауа және қаладан алыс тыныш ұйқы.",

      "rooms.eyebrow": "Тұру",
      "rooms.title": "Бөлмелер мен үйшіктер",
      "rooms.r1.badge": "түні 75 000 ₸-ден",
      "rooms.r1.title": "Стандарт",
      "rooms.r1.desc": "Қала жайлылығы бар, екеуге демалуға қажеттінің бәрі қарастырылған жайлы бөлме. Жылы тоқыма, жұмсақ жарық, тыныштық.",
      "rooms.r1.meta": "2 қонақ",
      "rooms.r2.badge": "түні 105 000 ₸-ден",
      "rooms.r2.title": "Люкс",
      "rooms.r2.desc": "Жеке террасасы және тауға көрінісі бар кең бөлме. Отбасыға көбірек кеңістік, жарық және оңашалық.",
      "rooms.r2.meta": "2–4 қонақ",
      "rooms.r3.badge": "түні 80 000 ₸-ден",
      "rooms.r3.title": "Қонақ үйі",
      "rooms.r3.desc": "Үлкен компания немесе отбасы үшін жеке үй: өз кеңістігі, ас үй және ашық аспан астындағы терраса.",
      "rooms.r3.meta": "4–5 қонақ",
      "rooms.r4.badge": "түні 190 000 ₸-ден",
      "rooms.r4.title": "«Celebrity» үйі",
      "rooms.r4.desc": "Үлкен компанияға арналған premium-резиденция: ерекше оқиғаларға барынша кеңістік, оңашалық және қызмет.",
      "rooms.r4.meta": "6+ қонақ",
      "rooms.more": "Толығырақ →",
      "rooms.note": "Сондай-ақ бір орындық, жартылай люкс және отбасылық санаттар қолжетімді — түні 45 000 ₸-ден.",

      "rest.eyebrow": "Мейрамхана мәзірі",
      "rest.title": "Tal Resort дәмі",
      "rest.cap": "A la carte · шығыс террасасы",
      "rest.lead": "Жергілікті өнімдерден жасалған шеф-аспаздың маусымдық мәзірі, оты бар жайлы зал және шығыс террасасы — күні бойы дәмді.",
      "rest.d1": "Үй бешбармағы<em>бұқтырылған ет, жұқа қамыр</em>",
      "rest.d1price": "4 500 ₸-ден",
      "rest.d2": "Көмірдегі стейк<em>мраморлы сиыр еті, грильдегі көкөніс</em>",
      "rest.d2price": "7 900 ₸-ден",
      "rest.d3": "Қазандағы палау<em>шығысша, отында</em>",
      "rest.d3price": "3 800 ₸-ден",
      "rest.d4": "Десерттер мен шай картасы<em>таулы шөптер, шығыс тәттілері</em>",
      "rest.d4price": "1 500 ₸-ден",

      "prices.eyebrow": "Бір күндік билет",
      "prices.title": "Аква-аймақ пен&nbsp;SPA-ға кіру",
      "prices.p1label": "Ересек · жұмыс күндері",
      "prices.p1sub": "Дүйсенбі — жұма",
      "prices.p1time": "Аква-аймақ пен SPA · 10:00–23:00",
      "prices.p2badge": "Танымал",
      "prices.p2label": "Ересек · демалыс күндері",
      "prices.p2sub": "Сенбі, жексенбі, мерекелер",
      "prices.p2time": "Аква-аймақ пен SPA · 10:00–23:00",
      "prices.p3label": "Балалар",
      "prices.p3sub": "3–12 жас балалар",
      "prices.p3time": "Анимацияны қоса",
      "prices.hint": "3 жасқа дейінгі балалар — тегін. Тұру бөлек төленеді.",

      "gallery.eyebrow": "Атмосфера",
      "gallery.title": "Tal Resort сәттері",

      "rev.eyebrow": "Қонақ пікірлері",
      "rev.title": "Демалысын бізге сенеді",
      "rev.q1": "Термалды бассейндер — керемет нәрсе. Балалар судан шықпады, ал біз ақыры тынықтық. Тағы талай рет ораламыз.",
      "rev.n1": "Айгерім",
      "rev.m1": "Отбасылық демалыс · Алматы",
      "rev.q2": "Жұмыс аптасынан кейінгі балқарағай моншасы мен SPA — мінсіз қайта зарядтау. Қаладан бір сағат, ал тауға алыс кеткендей әсер.",
      "rev.n2": "Данияр",
      "rev.m2": "Екеуге демалыс",
      "rev.q3": "Туған күнге қонақ үйін жалдадық. Қызмет, ас үй, атмосфера — бәрі жоғары деңгейде. Қонақтар әлі күнге дейін еске алады.",
      "rev.n3": "Мадина",
      "rev.m3": "Компаниямен мереке",

      "loc.eyebrow": "Қалай жетуге болады",
      "loc.title": "Алматыдан бір сағат — сіз орындасыз",
      "loc.addrLabel": "Мекенжай",
      "loc.addrValue": "Талғар ауданы, Алматы облысы",
      "loc.timeLabel": "Жол уақыты",
      "loc.timeValue": "≈ Алматы орталығынан 1 сағат",
      "loc.phoneLabel": "Телефон",
      "loc.hoursLabel": "Аква-аймақ сағаттары",
      "loc.hoursValue": "Күн сайын · 10:00–23:00",
      "loc.gis": "2ГИС-те ашу",

      "cta.eyebrow": "Баяулауға дайынсыз ба?",
      "cta.title": "Tal Resort-та демалысты<br />брондаңыз",
      "cta.text": "40° термалды бассейндер, моншалар, SPA және жайлы үйшіктер Алматыдан небәрі бір сағат жерде. Бізге жазыңыз — күндер мен санатты компанияңызға қарай таңдаймыз.",
      "cta.wa": "WhatsApp-қа жазу",

      "footer.tagline": "Талғар тауларының бөктеріндегі аква-курорт.",
      "footer.contactsHead": "Байланыс",
      "footer.addrHead": "Мекенжай",
      "footer.address": "Талғар ауданы,<br />Алматы облысы<br />Алматы орталығынан бір сағат<br />Аква-аймақ: 10:00–23:00",
      "footer.gis": "2ГИС-те ашу →",
      "footer.bookHead": "Брондау",
      "footer.bookNote": "Күндерді немесе бір күндік билетті брондау үшін бізге жазыңыз.",
      "footer.bookBtn": "Демалысты брондау",
      "footer.copy": "© 2026 TAL RESORT — Aqua &amp; SPA. Барлық құқықтар қорғалған.",
      "footer.region": "Талғар · Алматы облысы",

      "float.book": "Демалысты брондау"
    },

    // ----------------------------- ENGLISH -----------------------------
    en: {
      "nav.about": "About",
      "nav.aqua": "Aqua &amp; SPA",
      "nav.baths": "Baths",
      "nav.stay": "Stay",
      "nav.restaurant": "Restaurant",
      "nav.contacts": "Contacts",
      "nav.book": "Book",
      "nav.bookFull": "Book your stay",

      "hero.titleLeft": "The art of",
      "hero.titleRight": "family escapes",
      "hero.proof": "<b>4.9</b> · over 1200 happy guests",
      "hero.sideTitle": "Reset",
      "hero.sideText": "Leave the city noise behind. Enjoy flawless service and silence.",

      "about.eyebrow": "About the resort",
      "about.title": "The art of family leisure<br />at the foot of the Talgar mountains",
      "about.lead": "Tal Resort is an aqua resort just an hour from Almaty. Thermal pools at 40°, cedar baths and a SPA, a signature kitchen and cosy cottages — everything for a family getaway without leaving the city far behind.",
      "about.body": "We blended urban comfort with the mountain air of the Talgar district: heated open-air pools, a bathhouse ritual and unhurried dinners by the fireplace. Come for a day or stay overnight.",
      "about.stat1": "Thermal water",
      "about.stat2": "Happy guests",
      "about.stat3": "Water slides",
      "about.stat4label": "Aqua zone hours",

      "marquee.1": "Thermal water 40°",
      "marquee.2": "Cedar baths",
      "marquee.3": "Signature kitchen",
      "marquee.4": "Mountain air",
      "marquee.5": "1 hour from Almaty",

      "stack.aqua.eyebrow": "Aqua zone &amp; SPA",
      "stack.aqua.title": "Water<br />that heals",
      "stack.aqua.text": "Heated open-air pools, five water slides and 40° thermal zones — for the whole family, in any season.",
      "stack.aqua.tag1": "40° year-round",
      "stack.aqua.tag2": "5 slides",
      "stack.aqua.tag3": "SPA &amp; massage",
      "stack.baths.eyebrow": "Bathhouse ritual",
      "stack.baths.title": "Three baths,<br />three characters",
      "stack.baths.text": "Altai cedar, Russian steam room and a salt room — living heat, birch whisks and a gentle microclimate. A true ritual of warmth and steam.",
      "stack.baths.tag1": "Cedar",
      "stack.baths.tag2": "Russian steam",
      "stack.baths.tag3": "Salt room",
      "stack.rest.eyebrow": "Restaurant",
      "stack.rest.title": "Kitchen<br />by the fire",
      "stack.rest.text": "A seasonal menu from the chef using local produce, a cosy hall with a fireplace and an eastern terrace — delicious all day long.",
      "stack.rest.tag1": "A la carte",
      "stack.rest.tag2": "Eastern terrace",
      "stack.rest.tag3": "Fireplace",

      "facts.eyebrow": "Water technology",
      "facts.title": "The aqua zone in numbers",
      "facts.lead": "Behind a perfect rest lies engineering: water at the right temperature, multi-stage purification and a thoughtful schedule.",
      "facts.1label": "Thermal water temperature",
      "facts.1value": "40 °C",
      "facts.2label": "Water filtration stages",
      "facts.2value": "7 stages",
      "facts.3label": "Water slides for kids",
      "facts.3value": "5 slides",
      "facts.4label": "Aqua zone hours per day",
      "facts.4value": "13 hours",

      "day.eyebrow": "The scenario",
      "day.title": "Your perfect day",
      "day.lead": "From a morning SPA to a quiet evening in your room — a route made for slowing down.",
      "day.1time": "11:00",
      "day.1title": "Arrival & SPA ritual",
      "day.1text": "Check-in, herbal tea and a first relaxing massage after the road.",
      "day.2time": "14:00",
      "day.2title": "Thermal pools",
      "day.2text": "Heated 40° water under the open sky and five slides for the kids.",
      "day.3time": "17:00",
      "day.3title": "Bathhouse ritual",
      "day.3text": "Altai cedar, Russian steam and a salt room with whisk and steam.",
      "day.4time": "19:30",
      "day.4title": "Dinner by the fire",
      "day.4text": "The chef's seasonal menu, live music and the eastern terrace.",
      "day.5time": "22:00",
      "day.5title": "Rest in your room",
      "day.5text": "Silence, mountain air and deep sleep far from the city.",

      "rooms.eyebrow": "Stay",
      "rooms.title": "Rooms & cottages",
      "rooms.r1.badge": "from 75 000 ₸ / night",
      "rooms.r1.title": "Standard",
      "rooms.r1.desc": "A cosy room with urban comfort and everything needed for two. Warm textiles, soft light, silence.",
      "rooms.r1.meta": "2 guests",
      "rooms.r2.badge": "from 105 000 ₸ / night",
      "rooms.r2.title": "Suite",
      "rooms.r2.desc": "A spacious room with a private terrace and mountain views. More space, light and privacy for the family.",
      "rooms.r2.meta": "2–4 guests",
      "rooms.r3.badge": "from 80 000 ₸ / night",
      "rooms.r3.title": "Guest house",
      "rooms.r3.desc": "A separate house for a large group or family: your own space, a kitchen and an open-air terrace.",
      "rooms.r3.meta": "4–5 guests",
      "rooms.r4.badge": "from 190 000 ₸ / night",
      "rooms.r4.title": "“Celebrity” house",
      "rooms.r4.desc": "A premium residence for a large group: maximum space, privacy and service for special occasions.",
      "rooms.r4.meta": "6+ guests",
      "rooms.more": "Details →",
      "rooms.note": "Single, junior suite and family categories are also available — from 45 000 ₸ per night.",

      "rest.eyebrow": "Restaurant menu",
      "rest.title": "The taste of Tal Resort",
      "rest.cap": "A la carte · eastern terrace",
      "rest.lead": "A seasonal menu from the chef using local produce, a cosy hall with a fireplace and an eastern terrace — delicious all day long.",
      "rest.d1": "Home-style beshbarmak<em>braised meat, thin dough</em>",
      "rest.d1price": "from 4 500 ₸",
      "rest.d2": "Charcoal steak<em>marbled beef, grilled vegetables</em>",
      "rest.d2price": "from 7 900 ₸",
      "rest.d3": "Plov in a cauldron<em>eastern style, over firewood</em>",
      "rest.d3price": "from 3 800 ₸",
      "rest.d4": "Desserts & tea list<em>mountain herbs, eastern sweets</em>",
      "rest.d4price": "from 1 500 ₸",

      "prices.eyebrow": "Day pass",
      "prices.title": "Access to the aqua zone &amp; SPA",
      "prices.p1label": "Adult · weekdays",
      "prices.p1sub": "Monday — Friday",
      "prices.p1time": "Aqua zone & SPA · 10:00–23:00",
      "prices.p2badge": "Popular",
      "prices.p2label": "Adult · weekends",
      "prices.p2sub": "Saturday, Sunday, holidays",
      "prices.p2time": "Aqua zone & SPA · 10:00–23:00",
      "prices.p3label": "Child",
      "prices.p3sub": "Children 3–12 years",
      "prices.p3time": "Animation included",
      "prices.hint": "Children under 3 — free. Accommodation is paid separately.",

      "gallery.eyebrow": "Atmosphere",
      "gallery.title": "Moments of Tal Resort",

      "rev.eyebrow": "Guest reviews",
      "rev.title": "They trust us with their rest",
      "rev.q1": "The thermal pools are something incredible. The kids wouldn't get out of the water, and we finally exhaled. We'll be back many times.",
      "rev.n1": "Aigerim",
      "rev.m1": "Family trip · Almaty",
      "rev.q2": "The cedar bath and SPA after a work week — the perfect reset. An hour from the city, yet it feels like you've gone far into the mountains.",
      "rev.n2": "Daniyar",
      "rev.m2": "A weekend for two",
      "rev.q3": "We rented the guest house for a birthday. Service, food, atmosphere — all top-notch. The guests still remember it.",
      "rev.n3": "Madina",
      "rev.m3": "A celebration with friends",

      "loc.eyebrow": "Getting here",
      "loc.title": "An hour from Almaty — and you're here",
      "loc.addrLabel": "Address",
      "loc.addrValue": "Talgar district, Almaty region",
      "loc.timeLabel": "Travel time",
      "loc.timeValue": "≈ 1 hour from central Almaty",
      "loc.phoneLabel": "Phone",
      "loc.hoursLabel": "Aqua zone hours",
      "loc.hoursValue": "Daily · 10:00–23:00",
      "loc.gis": "Open in 2GIS",

      "cta.eyebrow": "Ready to slow down?",
      "cta.title": "Book your stay<br />at Tal Resort",
      "cta.text": "Thermal pools at 40°, baths, a SPA and cosy cottages just an hour from Almaty. Message us — we'll pick dates and a category for your group.",
      "cta.wa": "Message on WhatsApp",

      "footer.tagline": "An aqua resort at the foot of the Talgar mountains.",
      "footer.contactsHead": "Contacts",
      "footer.addrHead": "Address",
      "footer.address": "Talgar district,<br />Almaty region<br />An hour from central Almaty<br />Aqua zone: 10:00–23:00",
      "footer.gis": "Open in 2GIS →",
      "footer.bookHead": "Booking",
      "footer.bookNote": "Message us to book dates or a day pass.",
      "footer.bookBtn": "Book your stay",
      "footer.copy": "© 2026 TAL RESORT — Aqua &amp; SPA. All rights reserved.",
      "footer.region": "Talgar · Almaty region",

      "float.book": "Book your stay"
    }
  };

  const STORAGE_KEY = "tal-lang";
  const SUPPORTED = ["ru", "kk", "en"];

  function pickInitial() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    const sys = (navigator.language || "ru").slice(0, 2).toLowerCase();
    if (sys === "kk" || sys === "kz") return "kk";
    if (sys === "en") return "en";
    return "ru";
  }

  function apply(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = "ru";
    const dict = I18N[lang];
    const fallback = I18N.ru;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      const val = dict[key] != null ? dict[key] : fallback[key];
      if (val != null) el.innerHTML = val;
    });

    // переводы атрибутов: data-i18n-attr="aria-label:some.key|title:other.key"
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split("|").forEach(function (pair) {
        const parts = pair.split(":");
        if (parts.length !== 2) return;
        const attr = parts[0].trim();
        const key = parts[1].trim();
        const val = dict[key] != null ? dict[key] : fallback[key];
        if (val != null) el.setAttribute(attr, val.replace(/<[^>]+>/g, ""));
      });
    });

    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });

    localStorage.setItem(STORAGE_KEY, lang);
    // событие — чтобы анимации (шкалы и т.п.) могли отреагировать при желании
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
  }

  function init() {
    apply(pickInitial());
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        apply(btn.getAttribute("data-lang"));
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // на случай внешнего доступа
  window.TalI18n = { apply: apply };
})();
