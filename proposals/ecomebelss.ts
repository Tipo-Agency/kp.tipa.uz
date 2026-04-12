import type { ProposalData } from "../types";
import { smmTripleFunnel } from "./smm-triple-funnel";

const V = "/proposals/virtopay";

/** КП: SMM для Ecomebelss — мебель / экологичные решения (@ecomebelss). Референсные кадры — Virtopay. */
export const ecomebelss: ProposalData = {
  clientName: "Ecomebelss — мебель и интерьерные решения (@ecomebelss)",
  hero: {
    title: "Instagram, который продаёт мебель как долгосрочное решение",
    subtitle:
      "Задача — показать материалы, эстетику, сценарии использования и доверие к бренду: кухни, хранение, мягкая мебель, экологичные акценты. Рост охватов, вовлечённости и заявок в Direct без дешёвого хайпа.",
  },
  services: [
    {
      title: "Визуал и узнаваемость",
      description:
        "Единая эстетика ленты: интерьеры, детали фактуры, свет, геометрия. Reels — обзоры комплектов, сборка, до/после.",
    },
    {
      title: "Экспертиза и материалы",
      description:
        "Из чего сделано, как ухаживать, чем отличается от масс-маркета. Снимаем возражения простым языком.",
    },
    {
      title: "Каталог и офферы",
      description:
        "Подборки под задачу: кухня, гостиная, детская, офис. Акции и лимитки — дозированно.",
    },
    {
      title: "Продвижение",
      description:
        "Таргет на интересы «мебель / интерьер / ремонт»; ретаргет на просмотры Reels. Интеграции с дизайн-блогерами — отдельный бюджет.",
    },
  ],
  servicesImageUrl: "/shared/services.png",
  servicesDescription:
    "Ниже — пример матрицы рубрик и референсный визуальный ряд; после съёмок шоурума и объектов заменим кадры на ваш контент.",
  growthTool: {
    title: "От лайка к консультации в Direct",
    description:
      "Скрипты на размеры, сроки, доставку, рассрочку. Быстрые ответы и понятный следующий шаг — замер или визит в шоурум.",
  },
  growthFunnel: smmTripleFunnel,
  audienceImageUrl: "/shared/audience.png",
  audience: {
    primary: [
      "Те, кто делает ремонт или обновляет интерьер",
      "Семьи, которые выбирают мебель на годы",
      "Покупатели, которым важны материалы и экологичный посыл",
    ],
    secondary: [
      "Дизайнеры интерьера и прорабы",
      "Малый бизнес: офисы, студии, гостеприимство",
    ],
  },
  rubricBlockImages: [`${V}/a3_analytics.jpg`, `${V}/a10_card.jpg`, `${V}/a17_phone.jpg`],
  rubrics: [
    {
      title: "Коллекции и хиты",
      description: "Флагманские решения и бестселлеры в понятных подборках.",
      imageUrl: `${V}/a3_analytics.jpg`,
    },
    {
      title: "Материалы и качество",
      description: "Фактуры, фурнитура, сравнения — без перегруза терминами.",
      imageUrl: `${V}/a10_card.jpg`,
    },
    {
      title: "Интерьеры и вдохновение",
      description: "Готовые сценарии: сканди, минимализм, тёплый модерн.",
      imageUrl: `${V}/a17_phone.jpg`,
    },
    {
      title: "Процесс: от заявки до доставки",
      description: "Замер, производство, сроки, монтаж — прозрачно.",
      imageUrl: `${V}/a16_wallet.jpg`,
    },
    {
      title: "Отзывы и объекты",
      description: "Реальные фото клиентов с согласия, истории заказов.",
      imageUrl: `${V}/a19_handshake.jpg`,
    },
    {
      title: "Уход и эксплуатация",
      description: "Короткие гайды: как продлить жизнь мебели.",
      imageUrl: "",
    },
    {
      title: "Reels и обзоры",
      description: "Динамичные ролики под охват и сохранения.",
      imageUrl: "",
    },
    {
      title: "FAQ",
      description: "Оплата, гарантия, доставка по городу и регионам.",
      imageUrl: `${V}/a20_office.jpg`,
    },
    {
      title: "Шоурум и контакты",
      description: "Как найти, часы работы, запись на визит.",
      imageUrl: `${V}/a11_support.jpg`,
    },
  ],
  positioning: {
    title: "Ecomebelss — мебель, в которую хочется вложиться один раз",
    description:
      "Позиционируем бренд как выбор для тех, кто ценит материалы, посадку и честный сервис: не «картинка из каталога», а понятный продукт и сопровождение.",
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
      description: "Интересы ремонт, интерьер, мебель; lookalike на взаимодействия с профилем.",
    },
    {
      title: "Ретаргет на Reels",
      description: "Догрев просмотревших обзоры и подборки.",
    },
    {
      title: "Связка с органикой",
      description: "Реклама усиливает работающие рубрики и офферы.",
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
