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

/** КП: SMM Instagram — Zena Bahçe (@zena.bahce), кафе европейско-турецкой кухни. */
export const zenaBahce: ProposalData = {
  clientName: "Zena Bahçe — Instagram",
  createdAt: "2026-04-19",
  hero: {
    title: "Instagram кафе: веранда, кухня и гости в кадре",
    subtitle:
      "Zena Bahçe — это не садовый проект, а кафе европейско-турецкой кухни. В контенте делаем акцент на веранду, блюда и атмосферу за столом: чтобы в ленте читалось «сюда хочется прийти». Аккаунт: https://www.instagram.com/zena.bahce/",
  },
  services: [
    {
      title: "Стратегия и рубрики",
      description:
        "Сетка под кафе: веранда днём и вечером, сигнатурные блюда, гости в кадре (с согласием), поводы прийти в выходные, события. Баланс «аппетитно» и «понятно, куда бронировать».",
    },
    {
      title: "Съёмка и монтаж",
      description:
        "Выезды в точку: интерьер и веранда, food-стилизация, работа кухни, детали сервиса. Reels под охват, посты под сохранения и шеры.",
    },
    {
      title: "Визуал и дизайн",
      description:
        "Единая палитра, шаблоны сторис, меню и акции в одном стиле. Лента читается как витрина заведения, а не случайный альбом.",
    },
    {
      title: "Таргет и комьюнити",
      description:
        "Реклама в Meta на интересы еда, кафе, свидания, деловые ланчи, район точки. Ответы в Direct и комментариях, дожим до брони и маршрута.",
    },
  ],
  servicesImageUrl: "/shared/services.png",
  servicesDescription:
    "Задача — усилить восприятие Zena Bahçe как места с сильной верандой и кухней: больше охватов у голодной к ценностям аудитории, доверие к качеству еды и понятный путь от поста к визиту.",
  growthTool: {
    title: "От «увидел блюдо» к «забронировал стол»",
    description:
      "Reels и сторис ведут к конкретному шагу: меню, акция, часы работы, бронь, как добраться. Меньше абстрактной красоты — больше понятного повода зайти.",
  },
  growthFunnel: smmTripleFunnel,
  audienceImageUrl: "/shared/audience.png",
  audience: {
    primary: [
      "Гости, которые выбирают кафе по атмосфере, веранде и отзывам в соцсетях",
      "Пары и компании на ужин, бранч и праздники",
      "Локальная аудитория в радиусе доезда и туристы, ищущие «куда сходить поесть»",
    ],
    secondary: [
      "Корпоративные и семейные форматы, детские поводы — по согласованию с офферами точки",
      "Подписчики food- и lifestyle-аккаунтов, пересечение с интересом к турецкой и европейской кухне",
    ],
  },
  rubricBlockImages: Z_RUBRIC_BLOCKS,
  rubrics: [
    { title: "Веранда и зал", description: "Свет, посадка гостей, вечерняя атмосфера — главный визуальный якорь.", imageUrl: Z_VISUALS[0] },
    { title: "Блюда и подача", description: "Сигнатура кухни, новинки меню, крупные планы без перегруза.", imageUrl: Z_VISUALS[1] },
    { title: "Гости в кадре", description: "Живые сценки за столом (с согласием), праздники, компании.", imageUrl: Z_VISUALS[2] },
    { title: "Zena Bahçe на карте", description: "Как добраться, парковка, часы — коротко и по делу.", imageUrl: Z_VISUALS[3] },
    { title: "Закулисье кухни", description: "Команда, процесс, свежесть продуктов — доверие к качеству.", imageUrl: Z_VISUALS[4] },
    { title: "Поводы зайти", description: "Бранч, ужин, девичники, дни рождения — офферы под формат.", imageUrl: Z_VISUALS[5] },
    { title: "Акции и события", description: "Сезонные предложения, музыка, тематические вечера.", imageUrl: Z_VISUALS[6] },
    { title: "Stories", description: "Меню дня, опросы, бронь, быстрые ответы на типовые вопросы.", imageUrl: Z_VISUALS[7] },
    { title: "Бронь и контакты", description: "Один понятный путь: написать / позвонить / забронировать стол.", imageUrl: Z_VISUALS[8] },
  ],
  positioning: {
    title: "Zena Bahçe — кафе, где хочется сидеть на веранде",
    description:
      "Европейско-турецкая кухня, акцент на веранду, еду и гостей: не садовая тематика, а ресторанный опыт в Instagram. Визуал и тексты поддерживают ощущение тёплого, ухоженного места с понятным приглашением зайти.",
    images: Z_POSITIONING,
  },
  visuals: Z_VISUALS,
  ads: [
    { title: "Таргет Meta", description: "Интересы: кафе, рестораны, бранч, ужин, еда, район и lookalike по гостям." },
    { title: "Ретаргет", description: "Догрев посетителей профиля и взаимодействий с Reels про меню и веранду." },
    { title: "Связка с визитом", description: "Актуальное, кнопки в сторис, единые офферы на бронь и маршрут." },
  ],
  pricing: {
    amount: "12 500 000",
    currency: "сум",
    period: "месяц",
    team: ["SMM-стратег / менеджер проекта", "Видеограф / мобилограф", "Дизайнер", "Таргетолог", "Комьюнити-менеджер"],
    deliverables: [
      { label: "Reels", value: "8 в месяц" },
      { label: "Посты", value: "4 в месяц" },
      { label: "Stories", value: "60–90 в месяц" },
      { label: "Съёмки", value: "2 выезда в месяц" },
      { label: "Таргет", value: "настройка и ведение" },
      { label: "Отчёт", value: "ежемесячно" },
    ],
    secondary: [{ label: "Первые 2 месяца", value: "10 000 000 сум / месяц — стартовое условие" }],
    notes: [
      "С 3-го месяца — базовая ставка 12 500 000 сум / месяц при тех же объёмах.",
      "Бюджет на рекламу в кабинете Meta — отдельно.",
      "Детали фиксируем в договоре после брифа.",
    ],
  },
};
