(function () {
  "use strict";

  const I18N = {
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
      "rooms.groupRooms": "Номера",
      "rooms.groupHouses": "Домики",
      "rooms.more": "Подробнее →",
      "rooms.note": "Цены указаны за сутки (будни / выходные). Бронируя номер, вы получаете доступ в банный комплекс, аква-зону и SPA.",
      "rooms.book": "Забронировать",
      "rooms.amenitiesLabel": "Удобства",
      "rooms.priceLabel": "Стоимость",
      "rooms.close": "Закрыть",

      "rooms.odnomestny.title": "Одноместный",
      "rooms.odnomestny.badge": "от 45 000 ₸ / сутки",
      "rooms.odnomestny.meta": "1 гость",
      "rooms.odnomestny.short": "Уютный номер для одного — тепло, тишина и все удобства комплекса.",
      "rooms.odnomestny.price": "Будни <b>45 000 ₸</b> · Выходные <b>60 000 ₸</b> <small>/ сутки</small>",
      "rooms.odnomestny.full": "<p>Одноместный номер позволит вам сполна насладиться всеми удобствами и развлечениями нашего комплекса. Возвращаясь в номер, вы будете окружены теплом и уютной атмосферой.</p><p>Бутик-отель включает номера от стандартных до люкс-уровня с вместимостью от 1 до 4 человек.</p>",
      "rooms.odnomestny.amen": "<li>Тёплые полы</li><li>Wi-Fi</li><li>Smart TV</li><li>Завтрак</li><li>Банные принадлежности</li><li>Средства гигиены</li><li>Доступ в бани, аква-зону и SPA</li>",

      "rooms.standart.title": "Стандарт",
      "rooms.standart.badge": "от 90 000 ₸ / сутки",
      "rooms.standart.meta": "2 гостя",
      "rooms.standart.short": "Стандартный номер на двоих для уютного загородного отдыха на природе.",
      "rooms.standart.price": "Будни <b>90 000 ₸</b> · Выходные <b>110 000 ₸</b> <small>/ сутки</small>",
      "rooms.standart.full": "<p>Стандартный номер рассчитан на 2 персоны — вы сполна насладитесь совместным загородным отдыхом.</p><p>Отель позволяет окунуться в атмосферу уединённости и расслабления в тандеме с природой, не забывая о комфорте. Бронируя номер, вы также получаете пребывание в банном комплексе, аква-зоне и СПА-центре.</p>",
      "rooms.standart.amen": "<li>Тёплые полы</li><li>Wi-Fi</li><li>Smart TV</li><li>Завтрак на 2</li><li>Банные принадлежности</li><li>Средства гигиены</li><li>Доступ в бани, аква-зону и SPA</li>",

      "rooms.polulyux.title": "Полулюкс",
      "rooms.polulyux.badge": "от 105 000 ₸ / сутки",
      "rooms.polulyux.meta": "2 гостя",
      "rooms.polulyux.short": "Полулюкс с king-size кроватью и зоной отдыха с диваном для двоих.",
      "rooms.polulyux.price": "Будни <b>105 000 ₸</b> · Выходные <b>130 000 ₸</b> <small>/ сутки</small>",
      "rooms.polulyux.full": "<p>Полулюкс (suite) рассчитан на 2 персоны: king-size кровать и диван для просмотра TV.</p><p>Бронируя номер, вы также получаете пребывание в банном комплексе, аква-зоне и СПА-центре.</p>",
      "rooms.polulyux.amen": "<li>Тёплые полы</li><li>Wi-Fi</li><li>Smart TV</li><li>Завтрак на 2</li><li>King-size кровать</li><li>Зона отдыха с диваном</li><li>Доступ в бани, аква-зону и SPA</li>",

      "rooms.lyux.title": "Люкс",
      "rooms.lyux.badge": "от 120 000 ₸ / сутки",
      "rooms.lyux.meta": "2 гостя",
      "rooms.lyux.short": "Люкс на двоих: king-size кровать и гостиная с диваном и рабочей зоной.",
      "rooms.lyux.price": "Будни <b>120 000 ₸</b> · Выходные <b>160 000 ₸</b> <small>/ сутки</small>",
      "rooms.lyux.full": "<p>Люкс рассчитан на 2 персоны: king-size кровать и гостиная с диваном, рабочей зоной и TV.</p><p>Бронируя номер, вы также получаете пребывание в банном комплексе, аква-зоне и СПА-центре.</p>",
      "rooms.lyux.amen": "<li>Тёплые полы</li><li>Wi-Fi</li><li>Smart TV</li><li>Завтрак на 2</li><li>King-size кровать</li><li>Гостиная с диваном и рабочей зоной</li><li>Доступ в бани, аква-зону и SPA</li>",

      "rooms.semeini.title": "Семейный",
      "rooms.semeini.badge": "от 120 000 ₸ / сутки",
      "rooms.semeini.meta": "4 гостя",
      "rooms.semeini.short": "Просторный номер для семьи на 4 человека: две кровати и диван в гостиной.",
      "rooms.semeini.price": "Будни <b>120 000 ₸</b> · Выходные <b>160 000 ₸</b> <small>/ сутки</small>",
      "rooms.semeini.full": "<p>Семейный номер рассчитан на 4 человека: предусмотрены 2 king-size кровати и 1 диван в гостиной.</p><p>Отель позволяет окунуться в атмосферу уединённости и расслабления в тандеме с природой. Бронируя номер, вы также получаете пребывание в банном комплексе, аква-зоне и СПА-центре.</p>",
      "rooms.semeini.amen": "<li>Тёплые полы</li><li>Wi-Fi</li><li>Smart TV</li><li>Завтрак на 4</li><li>2 king-size кровати</li><li>Диван в гостиной</li><li>Доступ в бани, аква-зону и SPA</li>",

      "rooms.guest_house.title": "Guest House",
      "rooms.guest_house.badge": "от 90 000 ₸ / сутки",
      "rooms.guest_house.meta": "2 гостя (+доп.)",
      "rooms.guest_house.short": "Домик из сруба среди гор — природа без потери городского комфорта.",
      "rooms.guest_house.price": "Будни <b>90 000 ₸</b> · Выходные <b>110 000 ₸</b> <small>/ сутки</small>",
      "rooms.guest_house.full": "<p>Гостевые домики из сруба позволят насладиться природой, не лишая себя удобств городского жителя. После активного отдыха в банях и СПА-центре вы расслабитесь в тихой и приятной обстановке среди гор Заилийского Алатау.</p><p>Дом рассчитан на 2 персон с возможностью дополнительного места за отдельную плату. Заезд 14:00, выезд 11:00.</p>",
      "rooms.guest_house.amen": "<li>Wi-Fi</li><li>Завтрак на 2</li><li>Банные принадлежности</li><li>Заказ еды в номер</li><li>Доступ в аква-зону и SPA</li><li>Заезд 14:00 / выезд 11:00</li>",

      "rooms.celebrity.title": "Дом «Celebrity»",
      "rooms.celebrity.badge": "от 200 000 ₸ / сутки",
      "rooms.celebrity.meta": "до 16 гостей",
      "rooms.celebrity.short": "Праздничный дом для торжеств и вечеринок — до 16 гостей, джакузи и караоке.",
      "rooms.celebrity.price": "Будни <b>200 000 ₸</b> · Выходные <b>240 000 ₸</b> <small>/ сутки (до 8 чел.)</small>",
      "rooms.celebrity.full": "<p>Наша цель — подарить незабываемые эмоции и воспоминания с вашего мероприятия в уютных праздничных домах. В Celebrity House можно провести и семейное торжество, и вечеринку в кругу друзей.</p><p>Спальное место предусмотрено на двоих, также можем предоставить дополнительные две кровати. Базовая стоимость — до 8 человек; от 8 до 20 персон — по договорённости. Депозит за банкетное меню — 100 000 ₸.</p>",
      "rooms.celebrity.amen": "<li>Wi-Fi</li><li>Джакузи</li><li>Караоке</li><li>Банкетное меню</li><li>Посуда</li><li>Завтрак на террасе</li><li>Банные принадлежности</li><li>Доступ в аква-зону и SPA</li>",


      "prices.eyebrow": "Билет на день",
      "prices.title": "Доступ к аква-зоне, баням и&nbsp;SPA",
      "prices.adultLabel": "Взрослый",
      "prices.childLabel": "Детский · 3–12 лет",
      "prices.weekday": "Будни",
      "prices.weekend": "Выходные",
      "prices.adultNote": "Аква-зоны, сауны, индивидуальный шкафчик · 10:00–23:00",
      "prices.childNote": "Участие в анимационных активностях · 10:00–23:00",
      "prices.hint": "При бронировании номера бассейны, бани и джакузи уже входят в стоимость.",

      "gallery.eyebrow": "Атмосфера",
      "gallery.title": "Моменты Tal Resort",
      "gallery.cap": "Атмосфера Tal Resort",

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

      "float.call": "Позвонить",
      "float.book": "Забронировать"
    },

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
      "rooms.groupRooms": "Бөлмелер",
      "rooms.groupHouses": "Үйшіктер",
      "rooms.more": "Толығырақ →",
      "rooms.note": "Бағалар тәулігіне көрсетілген (жұмыс күндері / демалыс). Бөлме брондай отырып, монша кешеніне, аква аймаққа және SPA-ға кіру мүмкіндігін аласыз.",
      "rooms.book": "Брондау",
      "rooms.amenitiesLabel": "Ыңғайлылықтар",
      "rooms.priceLabel": "Бағасы",
      "rooms.close": "Жабу",

      "rooms.odnomestny.title": "Бір орындық",
      "rooms.odnomestny.badge": "45 000 ₸-ден / тәулік",
      "rooms.odnomestny.meta": "1 қонақ",
      "rooms.odnomestny.short": "Жалғыз адамға арналған жайлы бөлме — жылулық, тыныштық және кешеннің барлық ыңғайлылықтары.",
      "rooms.odnomestny.price": "Жұмыс күндері <b>45 000 ₸</b> · Демалыс <b>60 000 ₸</b> <small>/ тәулік</small>",
      "rooms.odnomestny.full": "<p>Бір орындық бөлме біздің кешеннің барлық ыңғайлылықтары мен ойын-сауығынан толық ләззат алуға мүмкіндік береді. Бөлмеге оралғанда сізді жылулық пен жайлы атмосфера қоршайды.</p><p>Бутик-қонақ үй стандарттан люкс деңгейіне дейінгі, сыйымдылығы 1-ден 4 адамға дейінгі бөлмелерді қамтиды.</p>",
      "rooms.odnomestny.amen": "<li>Жылы едендер</li><li>Wi-Fi</li><li>Smart TV</li><li>Таңғы ас</li><li>Монша керек-жарақтары</li><li>Гигиена құралдары</li><li>Монша, аква аймақ және SPA-ға кіру</li>",

      "rooms.standart.title": "Стандарт",
      "rooms.standart.badge": "90 000 ₸-ден / тәулік",
      "rooms.standart.meta": "2 қонақ",
      "rooms.standart.short": "Табиғат аясында жайлы демалуға арналған екі орындық стандартты бөлме.",
      "rooms.standart.price": "Жұмыс күндері <b>90 000 ₸</b> · Демалыс <b>110 000 ₸</b> <small>/ тәулік</small>",
      "rooms.standart.full": "<p>Стандартты бөлме 2 адамға арналған — бірлескен қала сыртындағы демалыстан толық ләззат аласыз.</p><p>Қонақ үй табиғатпен үндесіп, оңашалық пен тыныштық атмосферасына енуге мүмкіндік береді. Бөлмені брондай отырып, монша кешеніне, аква аймаққа және СПА-орталыққа кіру мүмкіндігін аласыз.</p>",
      "rooms.standart.amen": "<li>Жылы едендер</li><li>Wi-Fi</li><li>Smart TV</li><li>Таңғы ас 2 адамға</li><li>Монша керек-жарақтары</li><li>Гигиена құралдары</li><li>Монша, аква аймақ және SPA-ға кіру</li>",

      "rooms.polulyux.title": "Жартылай люкс",
      "rooms.polulyux.badge": "105 000 ₸-ден / тәулік",
      "rooms.polulyux.meta": "2 қонақ",
      "rooms.polulyux.short": "King-size төсегі және диванды демалыс аймағы бар екі орындық жартылай люкс.",
      "rooms.polulyux.price": "Жұмыс күндері <b>105 000 ₸</b> · Демалыс <b>130 000 ₸</b> <small>/ тәулік</small>",
      "rooms.polulyux.full": "<p>Жартылай люкс (suite) 2 адамға арналған: king-size төсек және TV көру үшін диван.</p><p>Бөлмені брондай отырып, монша кешеніне, аква аймаққа және СПА-орталыққа кіру мүмкіндігін аласыз.</p>",
      "rooms.polulyux.amen": "<li>Жылы едендер</li><li>Wi-Fi</li><li>Smart TV</li><li>Таңғы ас 2 адамға</li><li>King-size төсек</li><li>Диванды демалыс аймағы</li><li>Монша, аква аймақ және SPA-ға кіру</li>",

      "rooms.lyux.title": "Люкс",
      "rooms.lyux.badge": "120 000 ₸-ден / тәулік",
      "rooms.lyux.meta": "2 қонақ",
      "rooms.lyux.short": "Екі орындық люкс: king-size төсек және диваны мен жұмыс аймағы бар қонақ бөлме.",
      "rooms.lyux.price": "Жұмыс күндері <b>120 000 ₸</b> · Демалыс <b>160 000 ₸</b> <small>/ тәулік</small>",
      "rooms.lyux.full": "<p>Люкс 2 адамға арналған: king-size төсек және диваны, жұмыс аймағы мен TV бар қонақ бөлме.</p><p>Бөлмені брондай отырып, монша кешеніне, аква аймаққа және СПА-орталыққа кіру мүмкіндігін аласыз.</p>",
      "rooms.lyux.amen": "<li>Жылы едендер</li><li>Wi-Fi</li><li>Smart TV</li><li>Таңғы ас 2 адамға</li><li>King-size төсек</li><li>Диваны мен жұмыс аймағы бар қонақ бөлме</li><li>Монша, аква аймақ және SPA-ға кіру</li>",

      "rooms.semeini.title": "Отбасылық",
      "rooms.semeini.badge": "120 000 ₸-ден / тәулік",
      "rooms.semeini.meta": "4 қонақ",
      "rooms.semeini.short": "Отбасына арналған 4 адамдық кең бөлме: екі төсек және қонақ бөлмеде диван.",
      "rooms.semeini.price": "Жұмыс күндері <b>120 000 ₸</b> · Демалыс <b>160 000 ₸</b> <small>/ тәулік</small>",
      "rooms.semeini.full": "<p>Отбасылық бөлме 4 адамға арналған: 2 king-size төсек және қонақ бөлмеде 1 диван қарастырылған.</p><p>Қонақ үй табиғатпен үндесіп, оңашалық пен тыныштық атмосферасына енуге мүмкіндік береді. Бөлмені брондай отырып, монша кешеніне, аква аймаққа және СПА-орталыққа кіру мүмкіндігін аласыз.</p>",
      "rooms.semeini.amen": "<li>Жылы едендер</li><li>Wi-Fi</li><li>Smart TV</li><li>Таңғы ас 4 адамға</li><li>2 king-size төсек</li><li>Қонақ бөлмеде диван</li><li>Монша, аква аймақ және SPA-ға кіру</li>",

      "rooms.guest_house.title": "Guest House",
      "rooms.guest_house.badge": "90 000 ₸-ден / тәулік",
      "rooms.guest_house.meta": "2 қонақ (+қосымша)",
      "rooms.guest_house.short": "Таулар арасындағы бөренеден салынған үйшік — қала жайлылығын жоғалтпай табиғат аясында.",
      "rooms.guest_house.price": "Жұмыс күндері <b>90 000 ₸</b> · Демалыс <b>110 000 ₸</b> <small>/ тәулік</small>",
      "rooms.guest_house.full": "<p>Бөренеден салынған қонақ үйшіктер қала тұрғынының ыңғайлылығынан айырылмай, табиғаттан ләззат алуға мүмкіндік береді. Моншалар мен СПА-орталықтағы белсенді демалыстан кейін Іле Алатауы тауларының арасында тыныш әрі жайлы жағдайда демала аласыз.</p><p>Үй 2 адамға арналған, қосымша орынды бөлек ақыға беруге болады. Кіру 14:00, шығу 11:00.</p>",
      "rooms.guest_house.amen": "<li>Wi-Fi</li><li>Таңғы ас 2 адамға</li><li>Монша керек-жарақтары</li><li>Бөлмеге тамақ тапсырыс</li><li>Аква аймақ пен SPA-ға кіру</li><li>Кіру 14:00 / шығу 11:00</li>",

      "rooms.celebrity.title": "«Celebrity» үйі",
      "rooms.celebrity.badge": "200 000 ₸-ден / тәулік",
      "rooms.celebrity.meta": "16 қонаққа дейін",
      "rooms.celebrity.short": "Той-думан мен кештерге арналған мерекелік үй — 16 қонаққа дейін, джакузи және караоке.",
      "rooms.celebrity.price": "Жұмыс күндері <b>200 000 ₸</b> · Демалыс <b>240 000 ₸</b> <small>/ тәулік (8 адамға дейін)</small>",
      "rooms.celebrity.full": "<p>Біздің мақсатымыз — жайлы мерекелік үйлерде өткізген іс-шараңыздан ұмытылмас әсер мен естелік сыйлау. Celebrity House-та отбасылық тойды да, дос ортасындағы кешті де өткізуге болады.</p><p>Ұйықтайтын орын екі адамға қарастырылған, сондай-ақ қосымша екі төсек ұсына аламыз. Негізгі баға — 8 адамға дейін; 8-ден 20 адамға дейін — келісім бойынша. Банкет мәзірі үшін депозит — 100 000 ₸.</p>",
      "rooms.celebrity.amen": "<li>Wi-Fi</li><li>Джакузи</li><li>Караоке</li><li>Банкет мәзірі</li><li>Ыдыс</li><li>Террасада таңғы ас</li><li>Монша керек-жарақтары</li><li>Аква аймақ пен SPA-ға кіру</li>",


      "prices.eyebrow": "Бір күндік билет",
      "prices.title": "Аква-аймақ, монша және&nbsp;SPA-ға кіру",
      "prices.adultLabel": "Ересек",
      "prices.childLabel": "Балалар · 3–12 жас",
      "prices.weekday": "Жұмыс күндері",
      "prices.weekend": "Демалыс",
      "prices.adultNote": "Аква-аймақтар, сауналар, жеке шкаф · 10:00–23:00",
      "prices.childNote": "Анимациялық белсенділіктерге қатысу · 10:00–23:00",
      "prices.hint": "Нөмір брондағанда бассейндер, моншалар мен джакузи бағаға кіреді.",

      "gallery.eyebrow": "Атмосфера",
      "gallery.title": "Tal Resort сәттері",
      "gallery.cap": "Tal Resort атмосферасы",

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

      "float.call": "Қоңырау шалу",
      "float.book": "Брондау"
    },

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
      "rooms.groupRooms": "Rooms",
      "rooms.groupHouses": "Cottages",
      "rooms.more": "Details →",
      "rooms.note": "Prices are per night (weekday / weekend). Booking a room includes access to the bath complex, aqua zone and SPA.",
      "rooms.book": "Book now",
      "rooms.amenitiesLabel": "Amenities",
      "rooms.priceLabel": "Price",
      "rooms.close": "Close",

      "rooms.odnomestny.title": "Single",
      "rooms.odnomestny.badge": "from 45 000 ₸ / night",
      "rooms.odnomestny.meta": "1 guest",
      "rooms.odnomestny.short": "A cosy room for one — warmth, quiet and all the comforts of the resort.",
      "rooms.odnomestny.price": "Weekday <b>45 000 ₸</b> · Weekend <b>60 000 ₸</b> <small>/ night</small>",
      "rooms.odnomestny.full": "<p>The single room lets you fully enjoy all the comforts and entertainment of our resort. Returning to your room, you'll be surrounded by warmth and a cosy atmosphere.</p><p>The boutique hotel offers rooms from standard to luxury level, with capacity from 1 to 4 guests.</p>",
      "rooms.odnomestny.amen": "<li>Heated floors</li><li>Wi-Fi</li><li>Smart TV</li><li>Breakfast</li><li>Bath amenities</li><li>Toiletries</li><li>Access to baths, aqua zone & SPA</li>",

      "rooms.standart.title": "Standard",
      "rooms.standart.badge": "from 90 000 ₸ / night",
      "rooms.standart.meta": "2 guests",
      "rooms.standart.short": "A standard room for two for a cosy countryside getaway in nature.",
      "rooms.standart.price": "Weekday <b>90 000 ₸</b> · Weekend <b>110 000 ₸</b> <small>/ night</small>",
      "rooms.standart.full": "<p>The standard room is designed for 2 guests — perfect for a shared countryside getaway.</p><p>The hotel lets every guest immerse in seclusion and relaxation in tune with nature, without giving up comfort. Booking a room also includes a stay in the bath complex, aqua zone and SPA centre.</p>",
      "rooms.standart.amen": "<li>Heated floors</li><li>Wi-Fi</li><li>Smart TV</li><li>Breakfast for 2</li><li>Bath amenities</li><li>Toiletries</li><li>Access to baths, aqua zone & SPA</li>",

      "rooms.polulyux.title": "Junior Suite",
      "rooms.polulyux.badge": "from 105 000 ₸ / night",
      "rooms.polulyux.meta": "2 guests",
      "rooms.polulyux.short": "A junior suite with a king-size bed and a sofa lounge area for two.",
      "rooms.polulyux.price": "Weekday <b>105 000 ₸</b> · Weekend <b>130 000 ₸</b> <small>/ night</small>",
      "rooms.polulyux.full": "<p>The junior suite is designed for 2 guests: a king-size bed and a sofa for watching TV.</p><p>Booking a room also includes a stay in the bath complex, aqua zone and SPA centre.</p>",
      "rooms.polulyux.amen": "<li>Heated floors</li><li>Wi-Fi</li><li>Smart TV</li><li>Breakfast for 2</li><li>King-size bed</li><li>Sofa lounge area</li><li>Access to baths, aqua zone & SPA</li>",

      "rooms.lyux.title": "Suite",
      "rooms.lyux.badge": "from 120 000 ₸ / night",
      "rooms.lyux.meta": "2 guests",
      "rooms.lyux.short": "A suite for two: a king-size bed and a living room with sofa and work area.",
      "rooms.lyux.price": "Weekday <b>120 000 ₸</b> · Weekend <b>160 000 ₸</b> <small>/ night</small>",
      "rooms.lyux.full": "<p>The suite is designed for 2 guests: a king-size bed and a living room with a sofa, work area and TV.</p><p>Booking a room also includes a stay in the bath complex, aqua zone and SPA centre.</p>",
      "rooms.lyux.amen": "<li>Heated floors</li><li>Wi-Fi</li><li>Smart TV</li><li>Breakfast for 2</li><li>King-size bed</li><li>Living room with sofa & work area</li><li>Access to baths, aqua zone & SPA</li>",

      "rooms.semeini.title": "Family",
      "rooms.semeini.badge": "from 120 000 ₸ / night",
      "rooms.semeini.meta": "4 guests",
      "rooms.semeini.short": "A spacious family room for 4: two beds and a sofa in the living room.",
      "rooms.semeini.price": "Weekday <b>120 000 ₸</b> · Weekend <b>160 000 ₸</b> <small>/ night</small>",
      "rooms.semeini.full": "<p>The family room is designed for 4 guests: two king-size beds and one sofa in the living room.</p><p>The hotel lets every guest immerse in seclusion and relaxation in tune with nature. Booking a room also includes a stay in the bath complex, aqua zone and SPA centre.</p>",
      "rooms.semeini.amen": "<li>Heated floors</li><li>Wi-Fi</li><li>Smart TV</li><li>Breakfast for 4</li><li>Two king-size beds</li><li>Sofa in the living room</li><li>Access to baths, aqua zone & SPA</li>",

      "rooms.guest_house.title": "Guest House",
      "rooms.guest_house.badge": "from 90 000 ₸ / night",
      "rooms.guest_house.meta": "2 guests (+extra)",
      "rooms.guest_house.short": "A log cottage among the mountains — nature without losing city comfort.",
      "rooms.guest_house.price": "Weekday <b>90 000 ₸</b> · Weekend <b>110 000 ₸</b> <small>/ night</small>",
      "rooms.guest_house.full": "<p>The log guest houses let you enjoy nature without giving up the comforts of a city dweller. After an active rest in the baths and SPA centre, you can relax in a quiet, pleasant setting among the Zailiysky Alatau mountains.</p><p>The house is designed for 2 guests, with an optional extra bed for a fee. Check-in 14:00, check-out 11:00.</p>",
      "rooms.guest_house.amen": "<li>Wi-Fi</li><li>Breakfast for 2</li><li>Bath amenities</li><li>In-room food orders</li><li>Access to aqua zone & SPA</li><li>Check-in 14:00 / out 11:00</li>",

      "rooms.celebrity.title": "“Celebrity” house",
      "rooms.celebrity.badge": "from 200 000 ₸ / night",
      "rooms.celebrity.meta": "up to 16 guests",
      "rooms.celebrity.short": "A celebration house for events and parties — up to 16 guests, jacuzzi and karaoke.",
      "rooms.celebrity.price": "Weekday <b>200 000 ₸</b> · Weekend <b>240 000 ₸</b> <small>/ night (up to 8)</small>",
      "rooms.celebrity.full": "<p>Our goal is to give you unforgettable emotions and memories from your event in our cosy celebration houses. Celebrity House suits both a family celebration and a party with friends.</p><p>Sleeping is arranged for two, and we can provide two extra beds. Base price is for up to 8 guests; from 8 to 20 guests — by arrangement. Banquet-menu deposit — 100 000 ₸.</p>",
      "rooms.celebrity.amen": "<li>Wi-Fi</li><li>Jacuzzi</li><li>Karaoke</li><li>Banquet menu</li><li>Tableware</li><li>Breakfast on the terrace</li><li>Bath amenities</li><li>Access to aqua zone & SPA</li>",


      "prices.eyebrow": "Day pass",
      "prices.title": "Access to the aqua zone, baths &amp; SPA",
      "prices.adultLabel": "Adult",
      "prices.childLabel": "Child · ages 3–12",
      "prices.weekday": "Weekday",
      "prices.weekend": "Weekend",
      "prices.adultNote": "Aqua zones, saunas, personal locker · 10:00–23:00",
      "prices.childNote": "Participation in animation activities · 10:00–23:00",
      "prices.hint": "When you book a room, the pools, baths and jacuzzi are already included.",

      "gallery.eyebrow": "Atmosphere",
      "gallery.title": "Moments of Tal Resort",
      "gallery.cap": "The atmosphere of Tal Resort",

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

      "float.call": "Call",
      "float.book": "Book"
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

  window.TalI18n = { apply: apply };
})();
