import type { ProposalData } from "../types";
import { smmTripleFunnel } from "./smm-triple-funnel";

const V = "/proposals/virtopay";

/** КП: SMM для The Burger (@the_burgeruz). Референсные кадры — Virtopay; в работе заменим на съёмки бренда. */
export const theBurgeruz: ProposalData = {
  clientName: "The Burger — бургерная (@the_burgeruz)",
  hero: {
    title: "Instagram, который продаёт аппетит и визит в точку",
    subtitle:
      "Задача — показать вкус, подачу и характер бренда: сочные кадры бургеров, процесс на кухне, атмосферу заведения и доставку. Рост охватов, вовлечённости и заказов в Direct / доставку без дешёвого хайпа.",
  },
  services: [
    {
      title: "Визуал и узнаваемость",
      description:
        "Единая эстетика ленты: крупные планы, сок, сыр, соусы, упаковка. Reels — сборка, гриль, закулисье, «первый укус».",
    },
    {
      title: "Меню и офферы",
      description:
        "Хиты, комбо, сезонные позиции, лимитки. Понятные CTA: заказ, доставка, гео, часы работы.",
    },
    {
      title: "Доверие и комьюнити",
      description:
        "Отзывы, UGC, ответы на типовые вопросы в сторис. Тон голоса: живой, без перегруза скидками в каждом посте.",
    },
    {
      title: "Продвижение",
      description:
        "Таргет по гео и интересам «фастфуд / бургеры / доставка еды»; ретаргет на просмотры Reels. Интеграции с блогерами — отдельный бюджет.",
    },
  ],
  servicesImageUrl: "/shared/services.png",
  servicesDescription:
    "Ниже — пример матрицы рубрик и референсный визуальный ряд; после съёмок заменим кадры на фото и видео The Burger.",
  growthTool: {
    title: "От просмотра к заказу",
    description:
      "Шаблоны ответов в Direct, скрипты на доставку и самовывоз, быстрые сторис с меню и ссылками. Меньше потерь на «посмотрел и ушёл».",
  },
  growthFunnel: smmTripleFunnel,
  audienceImageUrl: "/shared/audience.png",
  audience: {
    primary: [
      "18–35: любители бургеров, фастфуда и доставки",
      "Компании друзей и коллег: обеды, вечерние посиделки",
      "Те, кто ищет новую точку в городе по рекомендациям из ленты",
    ],
    secondary: [
      "Семьи с детьми (форматы и подача без перегруза)",
      "Туристы и гости города",
    ],
  },
  rubricBlockImages: [`${V}/a3_analytics.jpg`, `${V}/a10_card.jpg`, `${V}/a17_phone.jpg`],
  rubrics: [
    {
      title: "Хиты меню и бургеры",
      description: "Карточки флагманов: состав, соусы, порция, CTA на заказ.",
      imageUrl: `${V}/a3_analytics.jpg`,
    },
    {
      title: "Процесс и кухня",
      description: "Reels: котлеты, сыр, подача, закулисье — без «грязного» хайпа.",
      imageUrl: `${V}/a10_card.jpg`,
    },
    {
      title: "Атмосфера точки",
      description: "Интерьер, команда, вайб вечера и дневного формата.",
      imageUrl: `${V}/a17_phone.jpg`,
    },
    {
      title: "Доставка и самовывоз",
      description: "Зоны, время, как заказать, что входит в упаковку.",
      imageUrl: `${V}/a16_wallet.jpg`,
    },
    {
      title: "Отзывы и UGC",
      description: "Социальное доказательство: гости, сторис, репосты с согласия.",
      imageUrl: `${V}/a19_handshake.jpg`,
    },
    {
      title: "Комбо и акции",
      description: "Сезонные и событийные офферы — дозировано, чтобы не убить маржу.",
      imageUrl: "",
    },
    {
      title: "Reels и тренды",
      description: "Короткие ролики под алгоритм: звук, хук, CTA в профиль.",
      imageUrl: "",
    },
    {
      title: "FAQ",
      description: "Адрес, часы, аллергены, способы оплаты — в сторис и хайлайтах.",
      imageUrl: `${V}/a20_office.jpg`,
    },
    {
      title: "Коллаборации",
      description: "Совместные активности с локальными блогерами и брендами.",
      imageUrl: `${V}/a11_support.jpg`,
    },
  ],
  positioning: {
    title: "The Burger — вкус, который хочется показать в сторис",
    description:
      "Позиционируем бренд как место с характером: честная подача еды, понятный заказ и живое общение в Direct. Не «ещё одна сетка», а своя подача и узнаваемый стиль кадра.",
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
      description:
        "Гео + интересы «бургеры / доставка еды / фастфуд». Креативы с блюдом и понятным CTA.",
    },
    {
      title: "Ретаргет на Reels",
      description: "Догрев тех, кто досмотрел ролики до конца: меню, оффер, отзывы.",
    },
    {
      title: "Связка с органикой",
      description: "Реклама усиливает рабочий контент в профиле, а не подменяет его.",
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
