import type { ProposalData } from "../types";
import { smmTripleFunnel } from "./smm-triple-funnel";

const B = "/proposals/the-burgeruz";
const m = (f: string) => `${B}/${f}`;

/** КП: SMM для The Burger (@the_burgeruz). */
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
    "Ниже — матрица рубрик и кадры бренда: меню, кухня, атмосфера и доставка.",
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
  rubricBlockImages: [
    m("628a597e3e409a9a916a4b7bd5960bdc.jpg"),
    m("fc8b9e5f9a46ee7d68c8ead899487d39.jpg"),
    m("2b52315ae24f2f6acf494ed838e8d445.jpg"),
  ],
  rubrics: [
    {
      title: "Хиты меню и бургеры",
      description: "Карточки флагманов: состав, соусы, порция, CTA на заказ.",
      imageUrl: m("509e264b3c423e198716498c3eca03b0.jpg"),
    },
    {
      title: "Процесс и кухня",
      description: "Reels: котлеты, сыр, подача, закулисье — без «грязного» хайпа.",
      imageUrl: m("ae2ed5e00d715c8bf35f840e02391695.jpg"),
    },
    {
      title: "Атмосфера точки",
      description: "Интерьер, команда, вайб вечера и дневного формата.",
      imageUrl: m("125bec489a3b747dc53f8820b67f8323.jpg"),
    },
    {
      title: "Доставка и самовывоз",
      description: "Зоны, время, как заказать, что входит в упаковку.",
      imageUrl: m("625f042c8f441301d403f2684fe76c1e.jpg"),
    },
    {
      title: "Отзывы и UGC",
      description: "Социальное доказательство: гости, сторис, репосты с согласия.",
      imageUrl: m("1d2cf3dbe3fa5c11ef9dd8cf84d263cf.jpg"),
    },
    {
      title: "Комбо и акции",
      description: "Сезонные и событийные офферы — дозировано, чтобы не убить маржу.",
      imageUrl: m("fe69cdb0868776d8ce2c5cc9ad02937e.jpg"),
    },
    {
      title: "Reels и тренды",
      description: "Короткие ролики под алгоритм: звук, хук, CTA в профиль.",
      imageUrl: m("99559a313f9369843acf70be7ab47112.jpg"),
    },
    {
      title: "FAQ",
      description: "Адрес, часы, аллергены, способы оплаты — в сторис и хайлайтах.",
      imageUrl: m("af3b9df9fcd0a1e8550f1f63f697ed8a.jpg"),
    },
    {
      title: "Коллаборации",
      description: "Совместные активности с локальными блогерами и брендами.",
      imageUrl: m("0416aa31fea7e9a1f4f5592f581d055a.jpg"),
    },
  ],
  positioning: {
    title: "The Burger — вкус, который хочется показать в сторис",
    description:
      "Позиционируем бренд как место с характером: честная подача еды, понятный заказ и живое общение в Direct. Не «ещё одна сетка», а своя подача и узнаваемый стиль кадра.",
    images: [
      m("f8e31f4e53469b88d157532ebec5e619.jpg"),
      m("76332bb4eea92e269fa8b2450b98ce5b.jpg"),
      m("b3b5d5b7b6b87ad3c26a8fa9d56a0b58.jpg"),
      m("07aa0f27e41d1b4c78c91e99dde71697.jpg"),
    ],
  },
  visuals: [
    m("36c6d42186e1f56e0c8efbabeb86ad65.jpg"),
    m("1aadbdca5eb59adabb8f23b6a54eadd5.jpg"),
    m("6d96d8ff342cb60010cf546be8d0ac21.jpg"),
    m("9a2122922e533c03089b5fea03c3395b.jpg"),
    m("b2ca466399d92eb5d622568fa99ec5ed.jpg"),
    m("f5ead68e04b046e07bc3a0d83cbdaa47.jpg"),
    m("fc061b788572b0264988cc4fca4c3772.jpg"),
    m("f8e31f4e53469b88d157532ebec5e619.jpg"),
    m("76332bb4eea92e269fa8b2450b98ce5b.jpg"),
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
      { label: "Отчёт", value: "ежемесячно" },
    ],
    notes: [
      "Стоимость — за один аккаунт в месяц. Бюджет таргета и интеграции с блогерами оплачиваются отдельно.",
    ],
  },
};
