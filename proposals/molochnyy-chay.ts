import type {
  MultiServiceProposalData,
  ProposalData,
  WebsiteProposalData,
  ContextAdsProposalData,
} from "../types";
import { smmTripleFunnel } from "./smm-triple-funnel";

const SHARED = "/shared/services.png";
const AUD = "/shared/audience.png";

const B_CH = "/proposals/molochnyy-chay";

const CH_POSITIONING = [
  `${B_CH}/positioning/27ca5690e3a7d08801a9546a077e36c8.jpg`,
  `${B_CH}/positioning/7246fedd13764db46aebab5e95882c36.jpg`,
  `${B_CH}/positioning/b562042c49441fbcd8b9d30e24956301.jpg`,
  `${B_CH}/positioning/d58df5347976fb2f05ee97abec051b6d.jpg`,
] as const;

const CH_RUBRIC_BLOCK = [
  `${B_CH}/rubrics/50aaa3ab152126d7a26eabf742c4dd28.jpg`,
  `${B_CH}/rubrics/951d66470ce74a9112214f45c86c1518.jpg`,
  `${B_CH}/rubrics/bf06530d49e8f864dc6c923ffa68e8d8.jpg`,
] as const;

/** Все кадры из `public/.../visuals/` (корень slug не используем для jpg) */
const CH_VISUALS_BASE = [
  `${B_CH}/visuals/0059237be25972b80ac77433a32d3778.jpg`,
  `${B_CH}/visuals/034b32045b74146a81d49c38cf566fa3.jpg`,
  `${B_CH}/visuals/1b223a7428e46bc241e46a7ca75ba1ff.jpg`,
  `${B_CH}/visuals/20ab1b29536dccfe0706954c5aa024bb.jpg`,
  `${B_CH}/visuals/2662f4da7c2dead31c12b3bf6bcdfb17.jpg`,
  `${B_CH}/visuals/2fbb2bb5ce6166e33e6513d180630ac6.jpg`,
  `${B_CH}/visuals/3ad7b85ed16df29d699ad80dbc488bff.jpg`,
  `${B_CH}/visuals/4a121903d4afaa3520832cab17757827.jpg`,
  `${B_CH}/visuals/4eea018e4af54a4a05891c79004bbd0a.jpg`,
  `${B_CH}/visuals/5452785ca066f5962233ba14a8d96857.jpg`,
  `${B_CH}/visuals/57af3ebcc5886bdc3d22b0ee0befd064.jpg`,
  `${B_CH}/visuals/65b0a3c3f6fa4e1911fb8f305d1b5516.jpg`,
  `${B_CH}/visuals/6967b055bda856e9400277589a0eda23.jpg`,
  `${B_CH}/visuals/6d8fdc9d77cfa75d96cfba075cb1ab02.jpg`,
  `${B_CH}/visuals/77657709e3c26716b1ab0d5a359ccdf2.jpg`,
  `${B_CH}/visuals/7a849b3c9953650057d7e2d28a953752.jpg`,
  `${B_CH}/visuals/7eff1f4c3504f1f13b1a53519054472f.jpg`,
  `${B_CH}/visuals/8642b67556aa564b88197dba87eda488.jpg`,
  `${B_CH}/visuals/8cea0934fe478c165fb54c4e1fc88dee.jpg`,
  `${B_CH}/visuals/986f52a10220927e92b5d5e01b6a49c6.jpg`,
  `${B_CH}/visuals/9e96fe6b300c96b0d85b8475b277b4d8.jpg`,
  `${B_CH}/visuals/a6631d295e27566ce718b647c1df177d.jpg`,
  `${B_CH}/visuals/a85a65f62b871a5fff817ad298a95837.jpg`,
  `${B_CH}/visuals/b3370ca218631a4e346895e4189aaad8.jpg`,
  `${B_CH}/visuals/b562042c49441fbcd8b9d30e24956301%20(1).jpg`,
  `${B_CH}/visuals/ba13e4c04043f059552ccfa8e9ea64b9.jpg`,
  `${B_CH}/visuals/bebba41e1291c784c93a831df7daa6cb.jpg`,
  `${B_CH}/visuals/c23b63478ec94ac564ad497a1f67f22a.jpg`,
  `${B_CH}/visuals/c3b56d0fed74d7667292d5aa4486bc23.jpg`,
  `${B_CH}/visuals/ca6cd01995d36ebed25566e7aa807179.jpg`,
  `${B_CH}/visuals/cf2c8d09c1c07d69cf6d687f233f8356.jpg`,
  `${B_CH}/visuals/eacaebc1095b4cb7538ddd7a3fa87644.jpg`,
  `${B_CH}/visuals/f3a4e048db45ebfbde6f862548f5cb54.jpg`,
];

/** Сетка: все visuals + дубли из positioning и rubrics для плотной сетки */
const CH_VISUALS = [...CH_VISUALS_BASE, ...CH_POSITIONING, ...CH_RUBRIC_BLOCK];

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
  servicesImageUrl: SHARED,
  servicesDescription:
    "Пакет по объёму как в премиум-модели агентства. Клиентские визуалы — в позиционировании, рубриках и сетке ниже.",
  growthTool: {
    title: "От лайка к «где купить?»",
    description:
      "Каждый блок контента ведёт к понятному следующему шагу: карта продаж, маркетплейс, промо в сети, вопрос в Direct для опта.",
  },
  growthFunnel: smmTripleFunnel,
  audienceImageUrl: AUD,
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
    { title: "Линейка и новинки", description: "Презентация вкусов, лимитки, limited edition.", imageUrl: CH_VISUALS_BASE[2] },
    { title: "Состав и честность", description: "Простыми словами: что внутри, без перегруза.", imageUrl: CH_VISUALS_BASE[8] },
    { title: "Где купить", description: "Точки, полки, онлайн — актуальные ссылки.", imageUrl: CH_VISUALS_BASE[14] },
    { title: "Рецепты и миксы", description: "С чем пить, лёд, сироп — мягкие идеи без алкогольного контекста.", imageUrl: CH_RUBRIC_BLOCK[0] },
    { title: "Производство", description: "Цех, контроль, гигиена — если есть доступ с площадки.", imageUrl: CH_RUBRIC_BLOCK[1] },
    { title: "Отзывы", description: "UGC, челленджи, вопросы подписчиков.", imageUrl: CH_RUBRIC_BLOCK[2] },
    { title: "Бренд и история", description: "Почему чай, миссия, локальность.", imageUrl: CH_POSITIONING[0] },
    { title: "Партнёры и промо", description: "Совместные активности, витрины в сетях.", imageUrl: CH_POSITIONING[1] },
    { title: "Закулисье", description: "Команда, офис, логистика.", imageUrl: CH_POSITIONING[2] },
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
    amount: "12 500 000",
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
      { label: "Stories", value: "60 в месяц" },
      { label: "Reels", value: "8 в месяц" },
      { label: "Посты в ленту", value: "4 статичных (карусели) в месяц" },
      { label: "Съёмка", value: "на профессиональную камеру (выезды по графику)" },
      { label: "Контент-план", value: "на каждый месяц" },
      { label: "Таргет", value: "настройка и ведение" },
      { label: "Комьюнити", value: "ответы на сообщения и комментарии" },
      { label: "Аналитика", value: "ежемесячный детальный отчёт" },
    ],
    notes: [
      "Первый месяц ведения SMM — 15 000 000 сум.",
      "При предоплате за 3 месяца — пакет и скидка фиксируются в договоре.",
      "Итоговые условия — в едином блоке внизу страницы.",
    ],
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

const marketplaceTab: ContextAdsProposalData = {
  type: "context-ads",
  clientName: "Молочный чай — маркетплейсы",
  createdAt: "2026-04-16",
  hero: {
    title: "Маркетплейсы: чай на полке, который покупают",
    subtitle:
      "Uzum Market и другие площадки по брифу: карточки вкусов и форматов, медиа, акции, внутренняя выдача и отзывы — в связке с сайтом и Instagram.",
  },
  markets: {
    title: "Площадки",
    regions: ["Узбекистан", "Напитки и FMCG", "B2C и опт по модели площадки"],
  },
  productSummary: {
    title: "Продукт",
    items: ["Молочный чай и линейка SKU", "Вкусы и упаковки", "Цели: заказы, рейтинг, повторные покупки"],
  },
  contextStrategy: {
    title: "Стратегия на маркетплейсе",
    search: ["Карточка и ключевые слова внутри площадки", "Медиа и инфографика", "Сравнение с конкурентами"],
    performance: ["Акции и промо", "Реклама внутри маркетплейса", "Сегменты покупателей"],
    remarketing: ["Корзина и избранное", "Подписчики бренда на площадке", "Связка с внешним трафиком"],
  },
  landingWork: {
    title: "Контент и процессы",
    items: ["Гайд по визуалу и составу на карточке", "Ответы на отзывы", "Остатки и поставки — по доступам"],
  },
  analytics: {
    title: "Отчётность",
    items: ["Ежемесячный отчёт по заказам и позициям", "Гипотезы на следующий месяц"],
  },
  pricing: {
    amount: "3 000 000",
    currency: "сум",
    period: "месяц",
    description:
      "Ведение — 3 000 000 сум / месяц. Первый месяц запуска — 6 000 000 сум. Промо и реклама в кабинетах маркетплейса — отдельно.",
    deliverables: [
      { label: "Площадки", value: "Uzum Market и др. по брифу" },
      { label: "1-й месяц", value: "6 000 000 сум — запуск" },
      { label: "Карточки", value: "по графику согласований" },
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
    { id: "marketplace", label: "Маркетплейсы", serviceType: "marketplace", proposal: marketplaceTab },
    { id: "seo", label: "SEO продвижение", serviceType: "context-ads", proposal: seoTab },
  ],
  unifiedPricing: {
    title: "Коммерческие условия",
    subtitle:
      "Сайт — 12 000 000 сум проект. Абонентские направления после запуска: SMM 12,5 млн/мес (1-й месяц SMM — 15 млн), контекст 5 млн/мес (1-й месяц — 7 млн), маркетплейсы 3 млн/мес (1-й месяц — 6 млн), SEO 4 млн/мес. Предоплата SMM за 3 месяца — по договору.",
    services: [
      {
        name: "Instagram SMM",
        amount: "12 500 000",
        currency: "сум",
        period: "месяц",
        deliverables: [
          { label: "Stories", value: "60 / месяц" },
          { label: "Reels", value: "8 / месяц" },
          { label: "Посты", value: "4 карусели / месяц" },
          { label: "Съёмка", value: "проф. камера" },
          { label: "Таргет Meta", value: "ведение" },
          { label: "Meta бюджет", value: "отдельно; 300–400 USD в 1-й месяц" },
          { label: "1-й месяц SMM", value: "15 000 000 сум" },
          { label: "Предоплата 3 мес.", value: "по договору (скидка к помесячной)" },
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
        name: "Маркетплейсы",
        amount: "3 000 000",
        currency: "сум",
        period: "месяц",
        deliverables: [
          { label: "1-й месяц", value: "6 000 000 сум — запуск" },
          { label: "Промо в кабинетах", value: "отдельно по площадке" },
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
      "Специалист по маркетплейсам",
      "Веб-разработчик и UX",
    ],
    conditions: [
      "Предоплата и этапы согласуем при старте.",
      "Медиабюджеты в кабинетах не входят в абонентскую часть.",
      "Промо и реклама на маркетплейсах — отдельно от абонентской части ведения.",
      "SEO: TOP-1/2 по согласованному списку запросов и при внедрении правок.",
    ],
  },
};
