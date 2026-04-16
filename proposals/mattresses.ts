import type {
  MultiServiceProposalData,
  ProposalData,
  WebsiteProposalData,
  ContextAdsProposalData,
} from "../types";
import { smmTripleFunnel } from "./smm-triple-funnel";

/** Только медиа из `public/proposals/mattresses/` — positioning, visuals, rubrics */
const B_MT = "/proposals/mattresses";

const MT_POSITIONING = [
  `${B_MT}/positioning/efa4ed8a13915c7b7d14f901bbf80d90.jpg`,
  `${B_MT}/positioning/a4cfb9d64b7cb05c933940a678ac5e03.jpg`,
  `${B_MT}/positioning/88ea6fac589a737d6205c49fb49738c9.jpg`,
  `${B_MT}/positioning/ec3c1102c5ff1c83525a4990e8626a46.jpg`,
] as const;

const MT_RUBRICS_COVER = [
  `${B_MT}/rubrics/b472f00a1b22e2bd15e60767db19271d.jpg`,
  `${B_MT}/rubrics/ba1255a66b4d5c83ed4cfcdee7a3e189.jpg`,
  `${B_MT}/rubrics/XXXL.webp`,
] as const;

const MT_VISUALS = [
  `${B_MT}/visuals/f499e7257e11132f2708dd5de82b0b7c.jpg`,
  `${B_MT}/visuals/238d2802a7cc74708f1c0c18443ee4d9.jpg`,
  `${B_MT}/visuals/da0ccef8476c2ecb23100bd26df23bea.jpg`,
  `${B_MT}/visuals/bc43d1e20147a36dd86ef03f807fe4c3.jpg`,
  `${B_MT}/visuals/42a8fd964c52d2e532369860d35d2fea.jpg`,
  `${B_MT}/visuals/5223ff876c5194bd5eefd1bb6d5c334b.jpg`,
  `${B_MT}/visuals/f6a4f49e8e5f23ded53795930e1cfc59.jpg`,
  `${B_MT}/visuals/6cc120d28b147fc90b34f25e0e3f1327.jpg`,
  `${B_MT}/visuals/ba1255a66b4d5c83ed4cfcdee7a3e189%20(1).jpg`,
  `${B_MT}/visuals/568c46bb04c01e4da0d0919bf4d3d18d.jpg`,
  `${B_MT}/visuals/bd71a3981f6c30c4474eca53cf5bb99b.jpg`,
  `${B_MT}/visuals/9ea45fd954b95597e517fc8d4d77011c.jpg`,
  `${B_MT}/visuals/ecb263b549289b2306cbd622085b08c2.jpg`,
  `${B_MT}/visuals/85cc57bada82803e5e4e469693ce9c74.jpg`,
];

const smmTab: ProposalData = {
  clientName: "Матрасы — SMM",
  createdAt: "2026-04-16",
  hero: {
    title: "Instagram, который продаёт сон как продукт, а не «просто матрас»",
    subtitle:
      "Производитель матрасов: материалы, жёсткость, гарантия, сервис доставки и сборки, сравнение линеек. Reels и карусели снимают возражения «непонятно, что выбрать» и ведут к консультации и заказу.",
  },
  services: [
    {
      title: "Образовательный контент",
      description:
        "Жёсткость, пружины/беспружинные блоки, чехол, ортопедия без медицинских обещаний. Простые схемы и тесты «как подобрать».",
    },
    {
      title: "Съёмка и демонстрация",
      description:
        "Разрезы слоёв (по согласованию), шоурум, упаковка, доставка, распаковка. Визуальное доказательство качества.",
    },
    {
      title: "Дизайн и премиальность",
      description:
        "Единый стиль ленты: спокойные тона, крупные кадры, типографика. Сторис — быстрые ответы и опросы.",
    },
    {
      title: "Таргет, комьюнити, аналитика",
      description:
        "Meta: интересы мебель, ремонт, переезд, семья, сон. Direct и комментарии, ежемесячный отчёт.",
    },
  ],
  servicesImageUrl: MT_VISUALS[4],
  servicesDescription:
    "Пакет по объёму как в премиум-модели агентства. Кадры — только из ваших папок visuals / positioning / rubrics.",
  growthTool: {
    title: "От сомнений к «запишите на тест в шоуруме»",
    description:
      "Сценарии контента закрывают типовые вопросы: размер, жёсткость, гарантия, доставка, оплата. CTA под вашу модель продаж.",
  },
  growthFunnel: smmTripleFunnel,
  audienceImageUrl: MT_VISUALS[1],
  audience: {
    primary: [
      "Семьи при покупке матраса при переезде или обновлении спальни",
      "Пары 25–45, сравнивающие бренды в Instagram и маркетплейсах",
      "Покупатели, ищущие «безопасный выбор» по отзывам и демонстрации",
    ],
    secondary: [
      "Дизайнеры интерьеров и партнёры по ремонту — B2B-линия по брифу",
      "Региональные дилеры",
    ],
  },
  rubricBlockImages: [...MT_RUBRICS_COVER],
  rubrics: [
    { title: "Линейки и сравнения", description: "Таблицы «модель — задача — жёсткость».", imageUrl: MT_RUBRICS_COVER[0] },
    { title: "Материалы и качество", description: "Наполнители, сертификаты, защита чехла.", imageUrl: MT_RUBRICS_COVER[1] },
    { title: "Сон и здоровье", description: "Без медобещаний: комфорт, поддержка, гигиена.", imageUrl: MT_RUBRICS_COVER[2] },
    { title: "Доставка и сервис", description: "Сроки, подъём, сборка, гарантия.", imageUrl: MT_RUBRICS_COVER[0] },
    { title: "Шоурум и тест", description: "Запись на просмотр, правила теста.", imageUrl: MT_RUBRICS_COVER[1] },
    { title: "Отзывы", description: "UGC, истории покупателей.", imageUrl: MT_RUBRICS_COVER[2] },
    { title: "Производство", description: "Цех, контроль, упаковка.", imageUrl: MT_RUBRICS_COVER[0] },
    { title: "Акции и сезон", description: "Переезд, школьный сезон, праздники.", imageUrl: MT_RUBRICS_COVER[1] },
    { title: "Закулисье", description: "Команда и сервис.", imageUrl: MT_RUBRICS_COVER[2] },
  ],
  positioning: {
    title: "Матрасы вашего производства — понятный выбор в ленте",
    description:
      "Позиционируем бренд как эксперта по сну и сервису: меньше абстракций, больше фактов и визуального доказательства. Instagram — канал доверия перед дорогой покупкой.",
    images: [...MT_POSITIONING],
  },
  visuals: [...MT_VISUALS],
  ads: [
    { title: "Таргет Meta", description: "Интересы мебель, ремонт, переезд, семья. Гео — Узбекистан." },
    { title: "Ретаргет", description: "Посетители сайта, просмотры цен и сравнений моделей." },
    { title: "Связка с продажами", description: "Лиды в Direct, запись в шоурум, звонок. Бюджеты в кабинетах — отдельно." },
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
  clientName: "Матрасы — сайт",
  createdAt: "2026-04-16",
  hook: {
    title: "Сайт производителя матрасов под выбор и лидогенерацию",
    subtitle:
      "Каталог моделей, фильтры по жёсткости и размеру, карточки с характеристиками, доставка и гарантия, формы записи в шоурум и опта. Проект — 12 000 000 сум.",
    arguments: ["Структура под SEO и рекламу", "Мобильная конверсия"],
  },
  painPoints: [
    "Сложно сравнить модели на сайте",
    "Нет доверия: мало визуала и соцдоказательств",
    "Слабая мобильная версия",
    "Нет целей аналитики",
    "Сложно обновлять цены и акции",
  ],
  solution: {
    title: "Сайт как консультант по выбору",
    description: "Понятная ветка выбора + быстрый контакт: звонок, Direct, форма.",
    scheme: ["Трафик", "Сайт", "Заявка", "CRM / почта", "Продажи"],
  },
  concept: {
    title: "Концепция",
    description: "Спокойный премиальный UI, крупные фото, акцент на сервисе и гарантии.",
  },
  whatIncluded: {
    design: ["UX/UI: главная, каталог, карточка, сравнение, доставка, гарантия, шоурум, опт, контакты", "Адаптив", "UI-кит"],
    development: ["CMS", "Формы", "Скорость"],
    marketing: ["SEO-база", "GA4"],
    integrations: ["Почта", "Instagram", "CRM — по оценке"],
  },
  stages: {
    title: "Этапы",
    steps: [
      { name: "Бриф", description: "Модельный ряд и продажи." },
      { name: "Дизайн", description: "Макеты." },
      { name: "Разработка", description: "Сайт." },
      { name: "Наполнение", description: "Контент." },
      { name: "Запуск", description: "Аналитика." },
    ],
  },
  whyUs: {
    title: "Почему Типа",
    items: ["Связка SMM + сайт + реклама + SEO", "Опыт e-commerce и мебели", "Фокус на конверсии"],
  },
  cases: [{ title: "Кейсы", category: "Референсы", summary: "По запросу из портфолио агентства." }],
  websitePricing: {
    main: {
      amount: "12 000 000",
      currency: "сум",
      period: "проект",
      description: "Сайт производителя матрасов — объём как во вкладке, детали в ТЗ.",
    },
  },
};

const contextTab: ContextAdsProposalData = {
  type: "context-ads",
  clientName: "Матрасы — интернет реклама",
  createdAt: "2026-04-16",
  hero: {
    title: "Яндекс и Google: спрос на матрасы и сон — в заявки",
    subtitle: "Поиск и медийка под покупку матраса, бренд производителя, доставку. Посадка на сайт.",
  },
  markets: {
    title: "География",
    regions: ["Узбекистан", "СНГ по плану", "Сегменты: мебель, ремонт, семья"],
  },
  productSummary: {
    title: "Продукт",
    items: ["Матрасы и сопутствующие позиции", "УТП качества и сервиса", "Цели: лид, звонок, визит в шоурум"],
  },
  contextStrategy: {
    title: "Стратегия",
    search: ["Семантика покупки матраса", "Бренд", "Расширения"],
    performance: ["РСЯ / КМС", "Look-alike", "A/B"],
    remarketing: ["Корзина", "Сравнение моделей"],
  },
  landingWork: {
    title: "Посадка",
    items: ["Аудит конверсии", "Посадочные под кластеры", "События аналитики"],
  },
  analytics: {
    title: "Отчётность",
    items: ["Ежемесячный отчёт", "Гипотезы"],
  },
  pricing: {
    amount: "5 000 000",
    currency: "сум",
    period: "месяц",
    description: "Ведение 5 000 000 сум/мес, 1-й месяц 7 000 000 сум. Клики отдельно ≈ 500 USD/мес.",
    deliverables: [
      { label: "Кабинеты", value: "Яндекс + Google" },
      { label: "1-й месяц", value: "7 000 000 сум" },
    ],
  },
};

const seoTab: ContextAdsProposalData = {
  type: "context-ads",
  clientName: "Матрасы — SEO продвижение",
  createdAt: "2026-04-16",
  hero: {
    title: "SEO: органика на запросы матрасов, размеров и бренда",
    subtitle: "Плановый вывод приоритетных запросов в TOP-1/2 за до 6 месяцев по согласованному ядру.",
  },
  markets: {
    title: "Фокус",
    regions: ["Узбекистан", "Google и Яндекс", "Покупка матраса и брендовые запросы"],
  },
  productSummary: {
    title: "Что оптимизируем",
    items: ["Каталог и карточки", "Сравнение и фильтры", "Доставка и гарантия"],
  },
  contextStrategy: {
    title: "SEO 6 месяцев",
    search: ["Семантика", "Tech SEO", "On-page"],
    performance: ["Контент под кластеры", "UX", "E-E-A-T"],
    remarketing: ["Внешние сигналы аккуратно", "Приоритеты", "TOP-1/2"],
  },
  landingWork: {
    title: "Сайт",
    items: ["ТЗ", "Индексация", "Новые страницы"],
  },
  analytics: {
    title: "KPI",
    items: ["Отчёт", "Roadmap", "Бэклог"],
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

export const mattresses: MultiServiceProposalData = {
  type: "multi",
  clientName: "Производитель матрасов — коммерческое предложение",
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
