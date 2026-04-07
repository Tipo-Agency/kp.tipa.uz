import type { ProposalData } from "../types";

const L = "/proposals/laminat-premium-pol";

/** КП: SMM для @laminat_premium_pol */
export const laminatPremiumPol: ProposalData = {
  clientName: "Laminat Premium Pol — напольные покрытия",
  hero: {
    title: "Instagram для магазина полов: визуал, экспертиза и заявки",
    subtitle:
      "Ламинат, паркет, сопутствующие товары. Контент: интерьеры, сравнения, монтаж, склад и доставка; таргет на ремонт и дизайн.",
  },
  services: [
    {
      title: "Витрина и каталог",
      description:
        "Коллекции, фактуры, цвета в интерьере. Карусели «как выбрать под свет и мебель» — чтобы лента читалась как каталог, а не как случайный набор фото.",
    },
    {
      title: "Экспертиза",
      description:
        "Влагостойкость, класс износостойкости, укладка, подложка — простым языком без перегруза. Короткие подсказки в сторис снимают страх «куплю не то».",
    },
    {
      title: "Социальное доказательство",
      description:
        "Объекты клиентов, до/после, отзывы. Форматы «объект недели» и «как выглядит пол в реальной комнате» — не только студийные кадры.",
    },
    {
      title: "Лиды",
      description:
        "Таргет на ремонт, новостройки, дизайн. CTA: замер, консультация, расчёт. Ретаргет на посетителей профиля и смотревших Reels с интерьерами.",
    },
  ],
  servicesImageUrl: "/shared/services.png",
  servicesDescription:
    "Пол — решение на годы: в ленте важно показать и красоту, и параметры, и сервис. Собираем это в рубрики с единой эстетикой кадра.",
  growthTool: {
    title: "От лайка к замеру",
    description:
      "Чёткие офферы в stories, быстрые ответы в Direct, кнопки на WhatsApp/Telegram — конверсия в заявку.",
  },
  audienceImageUrl: "/shared/audience.png",
  audience: {
    primary: [
      "Делающие ремонт квартир и домов",
      "Дизайнеры и прорабы как рефереры",
      "Семьи, выбирающие покрытие в бюджете",
    ],
    secondary: ["Коммерческие объекты", "Перепродавцы и мастера укладки"],
  },
  rubricBlockImages: [
    `${L}/449b406f1da34c30410ae42bb9eecb4e.jpg`,
    `${L}/644224dda073207d73a1ff6b7a58095c.jpg`,
    `${L}/6bf4dcf119440c26d004a9be1182c277.jpg`,
  ],
  rubrics: [
    {
      title: "Коллекции",
      description: "Новинки и бестселлеры.",
      imageUrl: `${L}/449b406f1da34c30410ae42bb9eecb4e.jpg`,
    },
    {
      title: "Интерьеры",
      description: "Фото готовых полов.",
      imageUrl: `${L}/644224dda073207d73a1ff6b7a58095c.jpg`,
    },
    {
      title: "Сравнения",
      description: "Ламинат vs другие покрытия.",
      imageUrl: `${L}/6bf4dcf119440c26d004a9be1182c277.jpg`,
    },
    {
      title: "Монтаж",
      description: "Процесс и сроки.",
      imageUrl: `${L}/f120332eb7f70f6f12a443da7791f874.jpg`,
    },
    {
      title: "Склад и наличие",
      description: "Что есть сейчас.",
      imageUrl: `${L}/f7f950029cbc27586c8a21ecfc2fac23.jpg`,
    },
    {
      title: "Советы",
      description: "Уход, подложка, плинтуса.",
      imageUrl: `${L}/886e04e6c8d87366f0613ba82f773c3f.jpg`,
    },
    {
      title: "Акции",
      description: "Сезонные и праздничные.",
      imageUrl: `${L}/970bc142ac578fc257108e2cc7476bd0.jpg`,
    },
    {
      title: "Отзывы",
      description: "Клиенты и объекты.",
      imageUrl: `${L}/99371e5c8450ca38de6738c8f18e3eb2.jpg`,
    },
    {
      title: "Контакты",
      description: "Показать, как приехать к вам.",
      imageUrl: `${L}/a7243e3524cd63e94470c5764469e8a6.jpg`,
    },
  ],
  positioning: {
    title: "Премиум-пол без лишней накрутки",
    description:
      "Позиционируем магазин как место, где помогут выбрать и не ошибиться с покрытием: и по внешнему виду, и по характеристикам, и по монтажу.",
    images: [
      `${L}/049aae88329750a367ca01b40657ec94.jpg`,
      `${L}/09a6546be17a7e70ff03d4465a6b8bf1.jpg`,
      `${L}/0eab83a12269b70ad955f0a5a407b943.jpg`,
      `${L}/42c944a48fd37cf5935c49a2cda5db2b.jpg`,
    ],
  },
  visuals: [
    `${L}/886e04e6c8d87366f0613ba82f773c3f.jpg`,
    `${L}/970bc142ac578fc257108e2cc7476bd0.jpg`,
    `${L}/99371e5c8450ca38de6738c8f18e3eb2.jpg`,
    `${L}/a7243e3524cd63e94470c5764469e8a6.jpg`,
    `${L}/a98a3c9f73ffb4e1376d990d04ff623b.jpg`,
    `${L}/a9be131c0f363e53aa18bc98d96dc75e.jpg`,
    `${L}/c62e4b7d797647a4bd6c8166ead60385.jpg`,
    `${L}/ca5dbab3175d66ed68b1dab5639dde59.jpg`,
    `${L}/d681789e8c29cf24f42951d20a8fc66d.jpg`,
    `${L}/dd0f778bf9c8092f21f388abb717302b.jpg`,
    `${L}/e28a922067ecb8c437886911a8876d1b.jpg`,
    `${L}/e472535d05095c2c918d58df88d0a6cf.jpg`,
  ],
  ads: [
    {
      title: "Ремонт и дизайн",
      description: "Интересы и гео; креативы с интерьерами и коллекциями из ленты.",
    },
    {
      title: "Лиды",
      description: "Заявки на расчёт и консультацию; отдельные наборы под новостройки.",
    },
    {
      title: "Ретаргет",
      description: "Догрев взаимодействий и смотревших Reels.",
    },
  ],
  pricing: {
    amount: "12 000 000",
    currency: "сум",
    period: "месяц",
    team: ["SMM-стратег", "Видеограф", "Дизайнер", "Таргетолог", "Комьюнити"],
    deliverables: [
      { label: "Съёмки", value: "2 выезда (шоурум / объект)" },
      { label: "Reels", value: "6–8" },
      { label: "Посты", value: "4–6" },
      { label: "Stories", value: "ежедневно" },
      { label: "Отчёт", value: "еженедельно" },
    ],
  },
};
