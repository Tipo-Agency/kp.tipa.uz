import type {
  MultiServiceProposalData,
  ProposalData,
  WebsiteProposalData,
  ContextAdsProposalData,
} from "../types";
import { smmTripleFunnel } from "./smm-triple-funnel";

const B_CH = "/proposals/molochnyy-chay";
/** Все кадры из корня папки — равномерно распределены по блокам */
const CH = [
  `${B_CH}/0059237be25972b80ac77433a32d3778.jpg`,
  `${B_CH}/034b32045b74146a81d49c38cf566fa3.jpg`,
  `${B_CH}/1b223a7428e46bc241e46a7ca75ba1ff.jpg`,
  `${B_CH}/20ab1b29536dccfe0706954c5aa024bb.jpg`,
  `${B_CH}/2662f4da7c2dead31c12b3bf6bcdfb17.jpg`,
  `${B_CH}/27ca5690e3a7d08801a9546a077e36c8.jpg`,
  `${B_CH}/2fbb2bb5ce6166e33e6513d180630ac6.jpg`,
  `${B_CH}/3ad7b85ed16df29d699ad80dbc488bff.jpg`,
  `${B_CH}/4a121903d4afaa3520832cab17757827.jpg`,
  `${B_CH}/4eea018e4af54a4a05891c79004bbd0a.jpg`,
  `${B_CH}/50aaa3ab152126d7a26eabf742c4dd28.jpg`,
  `${B_CH}/5452785ca066f5962233ba14a8d96857.jpg`,
  `${B_CH}/57af3ebcc5886bdc3d22b0ee0befd064.jpg`,
  `${B_CH}/65b0a3c3f6fa4e1911fb8f305d1b5516.jpg`,
  `${B_CH}/6967b055bda856e9400277589a0eda23.jpg`,
  `${B_CH}/6d8fdc9d77cfa75d96cfba075cb1ab02.jpg`,
  `${B_CH}/7246fedd13764db46aebab5e95882c36.jpg`,
  `${B_CH}/77657709e3c26716b1ab0d5a359ccdf2.jpg`,
  `${B_CH}/7a849b3c9953650057d7e2d28a953752.jpg`,
  `${B_CH}/7eff1f4c3504f1f13b1a53519054472f.jpg`,
  `${B_CH}/8642b67556aa564b88197dba87eda488.jpg`,
  `${B_CH}/8cea0934fe478c165fb54c4e1fc88dee.jpg`,
  `${B_CH}/951d66470ce74a9112214f45c86c1518.jpg`,
  `${B_CH}/986f52a10220927e92b5d5e01b6a49c6.jpg`,
  `${B_CH}/9e96fe6b300c96b0d85b8475b277b4d8.jpg`,
  `${B_CH}/a6631d295e27566ce718b647c1df177d.jpg`,
  `${B_CH}/a85a65f62b871a5fff817ad298a95837.jpg`,
  `${B_CH}/b3370ca218631a4e346895e4189aaad8.jpg`,
  `${B_CH}/b562042c49441fbcd8b9d30e24956301%20(1).jpg`,
  `${B_CH}/b562042c49441fbcd8b9d30e24956301.jpg`,
  `${B_CH}/ba13e4c04043f059552ccfa8e9ea64b9.jpg`,
  `${B_CH}/bebba41e1291c784c93a831df7daa6cb.jpg`,
  `${B_CH}/bf06530d49e8f864dc6c923ffa68e8d8.jpg`,
  `${B_CH}/c23b63478ec94ac564ad497a1f67f22a.jpg`,
  `${B_CH}/c3b56d0fed74d7667292d5aa4486bc23.jpg`,
  `${B_CH}/ca6cd01995d36ebed25566e7aa807179.jpg`,
  `${B_CH}/cf2c8d09c1c07d69cf6d687f233f8356.jpg`,
  `${B_CH}/d58df5347976fb2f05ee97abec051b6d.jpg`,
  `${B_CH}/eacaebc1095b4cb7538ddd7a3fa87644.jpg`,
  `${B_CH}/f3a4e048db45ebfbde6f862548f5cb54.jpg`,
] as const;

const CH_POSITIONING = [CH[7], CH[16], CH[25], CH[34]] as const;

const CH_RUBRIC_BLOCK = [CH[2], CH[13], CH[23]] as const;

const CH_VISUALS = [
  CH[0],
  CH[3],
  CH[6],
  CH[9],
  CH[12],
  CH[15],
  CH[18],
  CH[21],
  CH[24],
  CH[27],
  CH[30],
  CH[33],
  CH[36],
  CH[39],
];

const smmTab: ProposalData = {
  clientName: "Молочный чай — SMM",
  createdAt: "2026-04-16",
  hero: {
    title: "Instagram, который делает чай «хочется попробовать уже сейчас»",
    subtitle:
      "Производитель молочного чая: вкусы, упаковка, форматы (бутылка/стик/дой-пак — по вашей линейке), точки продаж и эмоция «свежо и мягко». Лента и Reels работают на пробу, повтор и узнаваемость бренда.",
  },
  services: [
    {
      title: "Вкусы и ассортимент",
      description:
        "Понятная подача линеек: что внутри, для кого, чем отличается. Карусели без перегруза «химией» — акцент на натуральности и мягкости вкуса.",
    },
    {
      title: "Съёмка продукта и lifestyle",
      description:
        "Предметка, распаковка, сервировка, холодильник, дорога, офис — сценарии потребления. Reels под охваты и UGC-эффект.",
    },
    {
      title: "Дизайн и сезонность",
      description:
        "Единый визуальный код: цвет, шрифты, шаблоны сторис. Сезонные поводы и коллаборации — по календарю.",
    },
    {
      title: "Таргет, комьюнити, аналитика",
      description:
        "Meta: интересы напитки, кофейни, студенты, семьи. Ответы в Direct, ежемесячный отчёт.",
    },
  ],
  servicesImageUrl: CH[26],
  servicesDescription:
    "Пакет по объёму как в премиум-модели агентства. Ниже — визуалы из вашей папки: линейка, lifestyle и сценарии потребления.",
  growthTool: {
    title: "От лайка к «где купить?»",
    description:
      "Каждый блок контента ведёт к понятному следующему шагу: карта продаж, маркетплейс, промо в сети, вопрос в Direct для опта.",
  },
  growthFunnel: smmTripleFunnel,
  audienceImageUrl: CH[11],
  audience: {
    primary: [
      "Молодёжь и офисные сценарии потребления",
      "Семьи, покупающие напитки в сетях и маркетплейсах",
      "Кофейни и HoReCa — как B2B-направление (по брифу)",
    ],
    secondary: [
      "Дистрибуторы и региональные представители",
      "Food-блогеры — отдельный бюджет на интеграции",
    ],
  },
  rubricBlockImages: [...CH_RUBRIC_BLOCK],
  rubrics: [
    { title: "Линейка и новинки", description: "Презентация вкусов, лимитки, limited edition.", imageUrl: CH[1] },
    { title: "Состав и честность", description: "Простыми словами: что внутри, без перегруза.", imageUrl: CH[4] },
    { title: "Где купить", description: "Точки, полки, онлайн — актуальные ссылки.", imageUrl: CH[6] },
    { title: "Рецепты и миксы", description: "С чем пить, лёд, сироп — мягкие идеи без алкогольного контекста.", imageUrl: CH[9] },
    { title: "Производство", description: "Цех, контроль, гигиена — если есть доступ с площадки.", imageUrl: CH[14] },
    { title: "Отзывы", description: "UGC, челленджи, вопросы подписчиков.", imageUrl: CH[17] },
    { title: "Бренд и история", description: "Почему чай, миссия, локальность.", imageUrl: CH[20] },
    { title: "Партнёры и промо", description: "Совместные активности, витрины в сетях.", imageUrl: CH[22] },
    { title: "Закулисье", description: "Команда, офис, логистика.", imageUrl: CH[29] },
  ],
  positioning: {
    title: "Молочный чай — вкус, который хочется повторить",
    description:
      "Позиционируем бренд как современный и понятный: мягкая эстетика, честные формулировки, быстрый ответ в Direct. Instagram — главная витрина перед покупкой.",
    images: [...CH_POSITIONING],
  },
  visuals: [...CH_VISUALS],
  ads: [
    { title: "Таргет Meta", description: "Интересы напитки, снеки, кофейни, студенты. Гео — Узбекистан." },
    { title: "Ретаргет", description: "Догрев посетителей сайта и взаимодействий с Reels." },
    { title: "Связка с продажами", description: "Ссылки на маркетплейсы и карту точек. Бюджеты в кабинетах — отдельно." },
  ],
  pricing: {
    amount: "20 000 000",
    currency: "сум",
    period: "месяц",
    team: [
      "SMM-стратег / менеджер проекта",
      "Видеограф (съёмка на проф. камеру)",
      "Дизайнер и motion",
      "Таргетолог",
      "Комьюнити-менеджер",
    ],
    deliverables: [
      { label: "Stories", value: "90 в месяц" },
      { label: "Reels", value: "10 в месяц" },
      { label: "Посты в ленту", value: "6 статичных (карусели) в месяц" },
      { label: "Съёмка", value: "на профессиональную камеру (выезды по графику)" },
      { label: "Контент-план", value: "на каждый месяц" },
      { label: "Таргет", value: "настройка и ведение" },
      { label: "Комьюнити", value: "ответы на сообщения и комментарии" },
      { label: "Аналитика", value: "ежемесячный детальный отчёт" },
    ],
    notes: ["При предоплате за 3 месяца — 18 000 000 сум / месяц.", "Итоговые условия — в едином блоке внизу страницы."],
  },
};

const websiteTab: WebsiteProposalData = {
  type: "website",
  clientName: "Молочный чай — сайт",
  createdAt: "2026-04-16",
  hook: {
    title: "Сайт производителя напитков под рост продаж",
    subtitle:
      "Каталог вкусов, карточки SKU, блоки доверия (состав, производство, сертификаты), карта продаж и формы для опта. Проект — 12 000 000 сум.",
    arguments: ["Структура под рекламу и SEO", "Скорость и мобильная конверсия"],
  },
  painPoints: [
    "Нет единого каталога вкусов и форматов",
    "Сайт не тянет трафик из соцсетей",
    "Слабая мобильная версия",
    "Нет целей в аналитике",
    "Сложно обновлять акции и новинки",
  ],
  solution: {
    title: "Сайт как хаб бренда",
    description: "Единая точка входа после Instagram и рекламы: понятный ассортимент и быстрый контакт.",
    scheme: ["Трафик", "Сайт", "Заявка", "CRM / почта", "Продажи"],
  },
  concept: {
    title: "Концепция",
    description: "Светлый «молочный» визуал, крупные фото продукта, акцент на вкусе и доступности.",
  },
  whatIncluded: {
    design: ["UX/UI главная, каталог, карточка, о бренде, где купить, опт, контакты", "Адаптив", "UI-кит"],
    development: ["CMS", "Формы опта и обратной связи", "Скорость"],
    marketing: ["SEO-база", "GA4 и цели"],
    integrations: ["Почта", "Instagram", "CRM — по оценке"],
  },
  stages: {
    title: "Этапы",
    steps: [
      { name: "Бриф", description: "Структура и референсы." },
      { name: "Дизайн", description: "Макеты." },
      { name: "Разработка", description: "Вёрстка, CMS." },
      { name: "Наполнение", description: "Контент от заказчика." },
      { name: "Запуск", description: "Аналитика, инструкция." },
    ],
  },
  whyUs: {
    title: "Почему Типа",
    items: ["Связка SMM + сайт + реклама + SEO", "Опыт FMCG", "Фокус на продажи"],
  },
  cases: [{ title: "Кейсы", category: "Референсы", summary: "По запросу из портфолио агентства." }],
  websitePricing: {
    main: {
      amount: "12 000 000",
      currency: "сум",
      period: "проект",
      description: "Сайт производителя молочного чая — объём как во вкладке, детали в ТЗ.",
    },
  },
};

const contextTab: ContextAdsProposalData = {
  type: "context-ads",
  clientName: "Молочный чай — интернет реклама",
  createdAt: "2026-04-16",
  hero: {
    title: "Яндекс и Google: вкусы и форматы — в клики и заказы",
    subtitle: "Поиск и медийка под напитки, чай молочный, бренд и ритейл. Посадка на сайт и промо-страницы.",
  },
  markets: {
    title: "География",
    regions: ["Узбекистан", "СНГ по плану", "B2C и опт"],
  },
  productSummary: {
    title: "Продукт",
    items: ["Молочный чай и линейка", "УТП вкуса и формата", "Цели: покупка, опт, лид"],
  },
  contextStrategy: {
    title: "Стратегия",
    search: ["Семантика категории и бренда", "Расширения объявлений", "Защита бренда в поиске"],
    performance: ["РСЯ / КМС", "Look-alike", "A/B креативов"],
    remarketing: ["Корзина", "Посетители вкусовых страниц"],
  },
  landingWork: {
    title: "Посадка",
    items: ["Аудит конверсии", "Посадочные под кластеры", "События в аналитике"],
  },
  analytics: {
    title: "Отчётность",
    items: ["Ежемесячный отчёт", "Гипотезы"],
  },
  pricing: {
    amount: "5 000 000",
    currency: "сум",
    period: "месяц",
    description: "Ведение 5 000 000 сум/мес, 1-й месяц 7 000 000 сум. Клики — отдельно ≈ 500 USD/мес.",
    deliverables: [
      { label: "Кабинеты", value: "Яндекс + Google" },
      { label: "1-й месяц", value: "7 000 000 сум" },
    ],
  },
};

const seoTab: ContextAdsProposalData = {
  type: "context-ads",
  clientName: "Молочный чай — SEO продвижение",
  createdAt: "2026-04-16",
  hero: {
    title: "SEO: органика на запросы чая, вкусов и покупки рядом",
    subtitle: "Рост видимости и плановый вывод приоритетных запросов в TOP-1/2 за до 6 месяцев по согласованному ядру.",
  },
  markets: {
    title: "Фокус",
    regions: ["Узбекистан", "Google и Яндекс", "Ритейл и ecom запросы"],
  },
  productSummary: {
    title: "Что оптимизируем",
    items: ["Каталог и вкусы", "Где купить / карта", "Страницы опта"],
  },
  contextStrategy: {
    title: "SEO 6 месяцев",
    search: ["Семантика", "Tech SEO", "On-page"],
    performance: ["Контент-план", "UX сигналы", "E-E-A-T для FMCG"],
    remarketing: ["Ссылки аккуратно", "Приоритеты ежемесячно", "TOP-1/2 по пулу"],
  },
  landingWork: {
    title: "Сайт",
    items: ["ТЗ на правки", "Индексация", "Новые страницы"],
  },
  analytics: {
    title: "KPI",
    items: ["Отчёт ежемесячно", "Roadmap", "Бэклог"],
  },
  pricing: {
    amount: "4 000 000",
    currency: "сум",
    period: "месяц",
    description: "4 000 000 сум/мес — SEO с целью TOP-1/2 за 6 месяцев по ядру.",
    deliverables: [
      { label: "Roadmap", value: "6 месяцев" },
      { label: "Tech+контент", value: "ежемесячно" },
    ],
  },
};

export const molochnyyChay: MultiServiceProposalData = {
  type: "multi",
  clientName: "Производитель молочного чая — коммерческое предложение",
  createdAt: "2026-04-16",
  tabs: [
    { id: "smm", label: "SMM", serviceType: "smm", proposal: smmTab },
    { id: "website", label: "Сайт", serviceType: "website", proposal: websiteTab },
    { id: "context", label: "Интернет реклама", serviceType: "context-ads", proposal: contextTab },
    { id: "seo", label: "SEO продвижение", serviceType: "context-ads", proposal: seoTab },
  ],
  unifiedPricing: {
    title: "Коммерческие условия",
    subtitle: "Направления в одном предложении — единый блок стоимости ниже. Детали — во вкладках.",
    services: [
      {
        name: "Instagram SMM",
        amount: "20 000 000",
        currency: "сум",
        period: "месяц",
        deliverables: [
          { label: "Stories", value: "90 / месяц" },
          { label: "Reels", value: "10 / месяц" },
          { label: "Посты", value: "6 каруселей / месяц" },
          { label: "Съёмка", value: "проф. камера" },
          { label: "Таргет Meta", value: "ведение" },
          { label: "Meta бюджет", value: "отдельно; 300–400 USD в 1-й месяц" },
          { label: "Скидка", value: "18 000 000 сум/мес при предоплате за 3 месяца" },
        ],
      },
      {
        name: "Корпоративный сайт",
        amount: "12 000 000",
        currency: "сум",
        period: "проект",
        deliverables: [
          { label: "Объём", value: "дизайн, разработка, каталог, формы, аналитика, SEO-база" },
          { label: "Срок", value: "в ТЗ после брифа" },
        ],
      },
      {
        name: "Интернет реклама — Яндекс и Google",
        amount: "5 000 000",
        currency: "сум",
        period: "месяц",
        deliverables: [
          { label: "1-й месяц", value: "7 000 000 сум — запуск" },
          { label: "Клики", value: "≈ 500 USD / мес. отдельно" },
        ],
      },
      {
        name: "SEO продвижение",
        amount: "4 000 000",
        currency: "сум",
        period: "месяц",
        deliverables: [
          { label: "Фокус", value: "tech + контент" },
          { label: "Горизонт", value: "TOP-1/2 до 6 месяцев по ядру" },
        ],
      },
    ],
    team: [
      "SMM-стратег / менеджер проекта",
      "Видеограф",
      "Дизайнер и motion",
      "Таргетолог (Meta)",
      "Специалист по контексту (Яндекс + Google)",
      "Веб-разработчик и UX",
    ],
    conditions: [
      "Предоплата и этапы согласуем при старте.",
      "Медиабюджеты в кабинетах не входят в абонентскую часть.",
      "SEO: TOP-1/2 по согласованному списку запросов и при внедрении правок.",
    ],
  },
};
