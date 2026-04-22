import type { ProposalData } from "../types";
import { smmTripleFunnel } from "./smm-triple-funnel";

const B = "/proposals/zena-bahce";

const Z_POSITIONING = [
  `${B}/positioning/b035e20f1105dd916a60180eb44be6bd.jpg`,
  `${B}/positioning/c46b863903e44311f4c315e2d936442f.jpg`,
  `${B}/positioning/e50746217100db5cf59556d2995e3c67.jpg`,
  `${B}/positioning/fe2ee12602ba378a2569b066e06e5216.jpg`,
];
const Z_RUBRIC_BLOCKS = [
  `${B}/rubrics/a8e752976673c98b8ed6caabbdebc776.jpg`,
  `${B}/rubrics/da565df9a01a255788db0d50c6345879.jpg`,
  `${B}/rubrics/e34a0618efead71f12c5abd06eb8f7aa.jpg`,
];
const Z_VISUALS = [
  `${B}/visuals/00bcd26de52916a58791ee5760e22d2a.jpg`,
  `${B}/visuals/05ef67764da411b7fe8c00afbb58a731.jpg`,
  `${B}/visuals/11629f194648d13492bf049288f61cea.jpg`,
  `${B}/visuals/1371a785ffbe58779c6b9886bc260a70.jpg`,
  `${B}/visuals/158ac57f9641eed0a5cc81552a6ad297.jpg`,
  `${B}/visuals/15e4daaa12c438ecd87bd39a10d6983e.jpg`,
  `${B}/visuals/1b990cbd9fa7360ef7fc6da435337b5f.jpg`,
  `${B}/visuals/253e2b5eb82e79e4748953c79fe6b0f9.jpg`,
  `${B}/visuals/259a8cc58f533a9492175cdfdd17c2ac.jpg`,
  `${B}/visuals/2730ab1bd401be022c83ccfb5c30d1d1.jpg`,
  `${B}/visuals/2a3a8950df062da629536fed7f611444.jpg`,
  `${B}/visuals/38252259fb23fe0a370cf6d6b371b331.jpg`,
];

/** КП: SMM Instagram — Zena Bahçe (@zena.bahce). */
export const zenaBahce: ProposalData = {
  clientName: "Zena Bahçe — Instagram",
  createdAt: "2026-04-19",
  hero: {
    title: "Instagram, в котором хочется задержаться: сад, уют и вдохновение",
    subtitle:
      "Аккаунт @zena.bahce — про атмосферу сада, растения, декор и образ жизни на свежем воздухе. Усиливаем узнаваемость бренда, вовлечение и заявки: от эстетичной ленты до понятных офферов в Direct. Референс профиля: https://www.instagram.com/zena.bahce/",
  },
  services: [
    {
      title: "Стратегия и рубрики",
      description:
        "Сетка тем: сезон в саду, уход за растениями, готовые композиции, уют на террасе, подборки под интерьер. Баланс вдохновения и «что купить сегодня».",
    },
    {
      title: "Съёмка и монтаж",
      description:
        "Выезды на точку продаж / питомник / шоурум, макро растений, портреты пространства. Reels под охват, карусели под сохранения.",
    },
    {
      title: "Визуал и дизайн",
      description:
        "Единая палитра, шаблоны сторис, обложки, типографика. Лента читается как каталог настроения, а не хаос из фото.",
    },
    {
      title: "Таргет и комьюнити",
      description:
        "Реклама в Meta на интересы сад, дом, декор, подарки. Ответы в Direct и комментариях, дожим до заказа и маршрута до магазина.",
    },
  ],
  servicesImageUrl: "/shared/services.png",
  servicesDescription:
    "Задача — превратить уже живой Instagram в предсказуемый канал: больше охватов у целевой аудитории, выше доверие к бренду и понятный путь к покупке растений и сопутствующих товаров.",
  growthTool: {
    title: "От «красиво в ленте» к «хочу так же у себя»",
    description:
      "Сценарии Reels и сторис ведут к конкретному действию: подборка, акция, запись на консультацию, адрес, доставка. Меньше случайных просмотров — больше осмысленных контактов.",
  },
  growthFunnel: smmTripleFunnel,
  audienceImageUrl: "/shared/audience.png",
  audience: {
    primary: [
      "Владельцы домов и квартир с террасой, оформляющие зелёный уголок",
      "Люди, которые покупают растения и декор как подарок и для себя",
      "Аудитория Instagram, ведомая эстетикой и сезонными трендами",
    ],
    secondary: [
      "Дизайнеры интерьеров и ландшафта как потенциальные партнёры",
      "Соседние ниши: кофе, lifestyle, локальные мероприятия на площадке",
    ],
  },
  rubricBlockImages: Z_RUBRIC_BLOCKS,
  rubrics: [
    { title: "Сезон в саду", description: "Что сажаем и украшаем сейчас: короткие гайды и визуальные подборки.", imageUrl: Z_VISUALS[0] },
    { title: "Растения и уход", description: "Полив, пересадка, свет — без перегруза, в формате «сделай как мы».", imageUrl: Z_VISUALS[1] },
    { title: "Готовые решения", description: "Композиции в кашпо, уличные группы, подбор под интерьер.", imageUrl: Z_VISUALS[2] },
    { title: "Точка Zena Bahçe", description: "Атмосфера шоурума/точки: как к вам приехать и что увидеть.", imageUrl: Z_VISUALS[3] },
    { title: "Закулисье", description: "Поставки, новинки, подготовка к сезону — человеческое лицо бренда.", imageUrl: Z_VISUALS[4] },
    { title: "Вдохновение", description: "Референсы садов, цветовые сочетания, настроение без копирования чужих работ.", imageUrl: Z_VISUALS[5] },
    { title: "Акции и поводы", description: "Праздники, 8 марта, новоселье — понятные поводы для покупки.", imageUrl: Z_VISUALS[6] },
    { title: "Stories-рубрики", description: "Опросы, вопросы эксперту, быстрые советы дня.", imageUrl: Z_VISUALS[7] },
    { title: "Доставка и контакты", description: "Как заказать, сроки, зона доставки — без лишней воды.", imageUrl: Z_VISUALS[8] },
  ],
  positioning: {
    title: "Zena Bahçe — про сад как часть красивой жизни",
    description:
      "Позиционируем бренд как спокойную экспертизу в мире растений и outdoor-эстетики: не «просто цветочный», а место, куда приходят за идеей и качеством. Визуал поддерживает ощущение премиального, но тёплого сервиса.",
    images: Z_POSITIONING,
  },
  visuals: Z_VISUALS,
  ads: [
    { title: "Таргет Meta", description: "Охват по интересам: сад, дом, декор, подарки, локация вокруг точек продаж." },
    { title: "Ретаргет", description: "Догрев посетителей профиля и взаимодействий с Reels." },
    { title: "Связка с продажами", description: "UTM, актуальные ссылки в шапке, единые офферы в сторис и постах." },
  ],
  pricing: {
    amount: "12 000 000",
    currency: "сум",
    period: "месяц",
    team: ["SMM-стратег / менеджер проекта", "Видеограф / мобилограф", "Дизайнер", "Таргетолог", "Комьюнити-менеджер"],
    deliverables: [
      { label: "Reels", value: "8 в месяц" },
      { label: "Посты (карусели)", value: "6 в месяц" },
      { label: "Stories", value: "по согласованному графику" },
      { label: "Съёмки", value: "2 выезда в месяц" },
      { label: "Таргет", value: "настройка и ведение" },
      { label: "Отчёт", value: "ежемесячно" },
    ],
    notes: ["Бюджет на рекламу в кабинете Meta — отдельно.", "Детали объёмов фиксируем в договоре после брифа."],
  },
};
