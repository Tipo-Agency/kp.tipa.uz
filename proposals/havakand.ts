import type { ProposalData } from "../types";
import { smmTripleFunnel } from "./smm-triple-funnel";

const V = "/proposals/virtopay";

/** КП: SMM для Havakand — кофейня и десерты (@havakand). Референсные кадры — Virtopay. */
export const havakand: ProposalData = {
  clientName: "Havakand — кофейня и десерты (@havakand)",
  hero: {
    title: "Instagram, который продаёт уют, вкус и повод зайти снова",
    subtitle:
      "Specialty coffee, десерты и атмосфера заведения. Задача ленты — показать качество напитков и подачи, тепло сервиса и поводы для визита: утро, встречи, доставка. Рост охватов, вовлечённости и заявок в Direct.",
  },
  services: [
    {
      title: "Визуал specialty",
      description:
        "Крупные планы кофе, крема, десертов, текстур. Reels — литьё молока, сборка напитка, нарезка десерта, ASMR-акценты без перегруза.",
    },
    {
      title: "Меню и сезонность",
      description:
        "Новинки, сезонные напитки, десерты дня, пары «кофе + десерт». Понятные подписи и ценовая вилка там, где уместно.",
    },
    {
      title: "Атмосфера и сервис",
      description:
        "Интерьер, свет, команда, детали сервиса. Показываем место, куда хочется вернуться и отметить в сторис.",
    },
    {
      title: "Продвижение",
      description:
        "Таргет по гео и интересам «кофейни / десерты / завтраки»; ретаргет на просмотры Reels. Коллаборации — отдельный бюджет.",
    },
  ],
  servicesImageUrl: "/shared/services.png",
  servicesDescription:
    "Ниже — пример матрицы рубрик и референсный визуальный ряд; после ваших съёмок заменим кадры на фирменный контент Havakand.",
  growthTool: {
    title: "От сохранения к визиту",
    description:
      "Сторис с меню дня, быстрые ответы в Direct, бронь столиков и доставка/самовывоз — в одном понятном сценарии.",
  },
  growthFunnel: smmTripleFunnel,
  audienceImageUrl: "/shared/audience.png",
  audience: {
    primary: [
      "Любители specialty coffee и десертов 20–40",
      "Те, кто выбирает кофейню для работы и встреч",
      "Гости, которые ищут «красивую чашку» и вкусный десерт в ленте",
    ],
    secondary: [
      "Семьи и пары: уикенд-форматы",
      "Доставка и takeaway в радиусе заведения",
    ],
  },
  rubricBlockImages: [`${V}/a3_analytics.jpg`, `${V}/a10_card.jpg`, `${V}/a17_phone.jpg`],
  rubrics: [
    {
      title: "Кофе и авторские напитки",
      description: "Эспрессо-напитки, альтернативы, сезонные лимитки.",
      imageUrl: `${V}/a3_analytics.jpg`,
    },
    {
      title: "Десерты и витрина",
      description: "Тарты, чизкейки, подача — кадры, на которые хочется тапнуть.",
      imageUrl: `${V}/a10_card.jpg`,
    },
    {
      title: "Атмосфера Havakand",
      description: "Интерьер, свет, детали, настроение утра и вечера.",
      imageUrl: `${V}/a17_phone.jpg`,
    },
    {
      title: "Доставка и самовывоз",
      description: "Как заказать, зоны, время, упаковка.",
      imageUrl: `${V}/a16_wallet.jpg`,
    },
    {
      title: "Отзывы и гости",
      description: "UGC, отметки, истории гостей с согласия.",
      imageUrl: `${V}/a19_handshake.jpg`,
    },
    {
      title: "Закулисье бариста",
      description: "Люди, обжарка/оборудование, стандарты напитка.",
      imageUrl: "",
    },
    {
      title: "Reels и тренды",
      description: "Короткие ролики под звук и охват.",
      imageUrl: "",
    },
    {
      title: "FAQ",
      description: "Часы, адрес, парковка, бронь, аллергены.",
      imageUrl: `${V}/a20_office.jpg`,
    },
    {
      title: "События и коллаборации",
      description: "Каппинги, дегустации, совместные проекты.",
      imageUrl: `${V}/a11_support.jpg`,
    },
  ],
  positioning: {
    title: "Havakand — кофе и десерты, ради которых хочется зайти",
    description:
      "Позиционируем заведение как место вкуса и спокойствия: качество чашки, аккуратная подача и тёплый сервис. Instagram — витрина, которая приводит в точку и удерживает повторными визитами.",
    images: [
      `${V}/a1_mobile_payment.jpg`,
      `${V}/a2_online_shopping.jpg`,
      `${V}/a4_phone_hand.jpg`,
      `${V}/a13_crypto.jpg`,
    ],
  },
  visuals: [
    `${V}/a5_smartphones.jpg`,
    `${V}/a6_money.jpg`,
    `${V}/a7_laptop.jpg`,
    `${V}/a8_team.jpg`,
    `${V}/a9_developer_laptop.jpg`,
    `${V}/a12_meeting.jpg`,
    `${V}/a14_chart.jpg`,
    `${V}/a15_contactless.jpg`,
    `${V}/a18_invoice.jpg`,
    `${V}/a3_analytics.jpg`,
    `${V}/a10_card.jpg`,
    `${V}/a17_phone.jpg`,
  ],
  ads: [
    {
      title: "Таргет Meta",
      description: "Гео + интересы «кофе / десерты / завтраки». Креативы с продуктом и CTA.",
    },
    {
      title: "Ретаргет на Reels",
      description: "Догрев просмотревших ролики: меню, новинки, отзывы.",
    },
    {
      title: "Связка с органикой",
      description: "Реклама под усиливает контент, который уже заходит аудитории.",
    },
  ],
  pricing: {
    amount: "15 000 000",
    currency: "сум",
    period: "месяц",
    team: ["SMM-стратег", "Моушн / Reels", "Дизайнер", "Таргетолог", "Комьюнити"],
    deliverables: [
      { label: "Reels", value: "10–12" },
      { label: "Карусели", value: "6–8" },
      { label: "Stories", value: "60–90 / мес по графику" },
      { label: "Аккаунт", value: "1 Instagram" },
      { label: "Отчёт", value: "еженедельно" },
    ],
    notes: [
      "Стоимость — за один аккаунт в месяц. Бюджет таргета и интеграции с блогерами оплачиваются отдельно.",
    ],
  },
};
