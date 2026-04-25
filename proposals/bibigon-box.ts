import type { ProposalData } from "../types";
import { smmTripleFunnel } from "./smm-triple-funnel";

/** КП: SMM для Bibigon Box (сеть франшиз фастфуда). */
export const bibigonBox: ProposalData = {
  clientName: "Bibigon Box — сеть франшиз фастфуда",
  createdAt: "2026-04-25",
  hero: {
    title: "Instagram, который ведёт в заказ за 3 минуты",
    subtitle:
      "Bibigon Box — новая сеть франшиз для молодой аудитории: сэндвичи, хот-доги и бургеры с практически мгновенной подачей. В контенте фиксируем ключевой оффер бренда: «заказал — получил за 3 минуты».",
  },
  services: [
    {
      title: "Позиционирование сети и единый tone of voice",
      description:
        "Упаковываем франшизный бренд в единый digital-код: молодежная подача, скорость сервиса, понятные поводы зайти именно сейчас.",
    },
    {
      title: "Контент «голоден сейчас»",
      description:
        "Снимаем сценарии для ритма города: учёба, офис, прогулки, вечерние встречи. Показываем, что Bibigon Box решает задачу быстрого перекуса без ожидания.",
    },
    {
      title: "Reels и посты под охват и сохранения",
      description:
        "Короткие ролики с крючком «3 минуты» для трафика, посты для выбора позиции и комбо. Делаем акцент на еде, скорости и эмоции гостей.",
    },
    {
      title: "Перформанс и комьюнити",
      description:
        "Таргет и ретаргет на аудитории фастфуда, работа с Direct и комментариями, регулярные офферы для роста повторных заказов.",
    },
  ],
  servicesImageUrl: "/shared/services.png",
  servicesDescription:
    "Bibigon Box получает систему контента, где каждая единица работает на один тезис: вкусный фастфуд для молодежи, который выдают практически мгновенно.",
  growthTool: {
    title: "Охват → аппетит → заказ",
    description:
      "Сначала ловим внимание форматом Reels, дальше усиливаем желание через фуд-визуал и социальное доказательство, затем ведём в Direct и к точке продаж через чёткий CTA.",
  },
  growthFunnel: smmTripleFunnel,
  audienceImageUrl: "/shared/audience.png",
  audience: {
    primary: [
      "Молодёжь 16–30: студенты, начинающие специалисты, активные городские гости",
      "Те, кто выбирает быстрый и понятный перекус между делами",
      "Аудитория, которая принимает решение через Reels и сторис",
    ],
    secondary: [
      "Компании друзей и пары, ищущие недорогой фастфуд в шаговой доступности",
      "Повторные клиенты, чувствительные к комбо, акциям и новинкам меню",
    ],
  },
  rubrics: [
    {
      title: "Сцены из ритма города",
      description: "Учёба, офис, прогулка — и быстрое решение по еде без длинного ожидания.",
      imageUrl: "/proposals/the-burgeruz/509e264b3c423e198716498c3eca03b0.jpg",
    },
    {
      title: "Сэндвичи, хот-доги, бургеры в деталях",
      description: "Крупные планы продукта: размер, сочность, сборка и подача.",
      imageUrl: "/proposals/the-burgeruz/ae2ed5e00d715c8bf35f840e02391695.jpg",
    },
    {
      title: "Reels с оффером «3 минуты»",
      description: "Динамичные короткие форматы с акцентом на скорость и аппетитность.",
      imageUrl: "/proposals/the-burgeruz/125bec489a3b747dc53f8820b67f8323.jpg",
    },
    {
      title: "Комбо и наборы",
      description: "Варианты на одного, на двоих и на компанию с ясной выгодой.",
      imageUrl: "/proposals/the-burgeruz/625f042c8f441301d403f2684fe76c1e.jpg",
    },
    {
      title: "Гости и реакции",
      description: "Живые эмоции, UGC и мини-отзывы как социальное доказательство.",
      imageUrl: "/proposals/the-burgeruz/1d2cf3dbe3fa5c11ef9dd8cf84d263cf.jpg",
    },
    {
      title: "Новые точки франшизы",
      description: "Анонсы запусков, локации и локальные поводы зайти.",
      imageUrl: "/proposals/the-burgeruz/fe69cdb0868776d8ce2c5cc9ad02937e.jpg",
    },
    {
      title: "Акции и спецпредложения",
      description: "Сезонные и недельные офферы, которые легко конвертируются в заказ.",
      imageUrl: "/proposals/the-burgeruz/99559a313f9369843acf70be7ab47112.jpg",
    },
    {
      title: "FAQ и как заказать",
      description: "Короткие ответы про время подачи, состав и формат заказа.",
      imageUrl: "/proposals/the-burgeruz/af3b9df9fcd0a1e8550f1f63f697ed8a.jpg",
    },
    {
      title: "Вовлечение и интерактив",
      description: "Опросы, голосования и мини-механики для роста вовлечения.",
      imageUrl: "/proposals/the-burgeruz/0416aa31fea7e9a1f4f5592f581d055a.jpg",
    },
  ],
  rubricBlockImages: [
    "/proposals/the-burgeruz/628a597e3e409a9a916a4b7bd5960bdc.jpg",
    "/proposals/the-burgeruz/fc8b9e5f9a46ee7d68c8ead899487d39.jpg",
    "/proposals/the-burgeruz/2b52315ae24f2f6acf494ed838e8d445.jpg",
  ],
  positioning: {
    title: "Bibigon Box — быстрый фастфуд для молодого города",
    description:
      "Позиционируем сеть как место, где молодежь получает понятный и вкусный продукт практически мгновенно. Главный бренд-месседж в коммуникации: подача за 3 минуты.",
    images: [
      "/proposals/the-burgeruz/f8e31f4e53469b88d157532ebec5e619.jpg",
      "/proposals/the-burgeruz/76332bb4eea92e269fa8b2450b98ce5b.jpg",
      "/proposals/the-burgeruz/b3b5d5b7b6b87ad3c26a8fa9d56a0b58.jpg",
      "/proposals/the-burgeruz/07aa0f27e41d1b4c78c91e99dde71697.jpg",
    ],
  },
  visuals: [
    "/proposals/the-burgeruz/36c6d42186e1f56e0c8efbabeb86ad65.jpg",
    "/proposals/the-burgeruz/1aadbdca5eb59adabb8f23b6a54eadd5.jpg",
    "/proposals/the-burgeruz/6d96d8ff342cb60010cf546be8d0ac21.jpg",
    "/proposals/the-burgeruz/9a2122922e533c03089b5fea03c3395b.jpg",
    "/proposals/the-burgeruz/b2ca466399d92eb5d622568fa99ec5ed.jpg",
    "/proposals/the-burgeruz/f5ead68e04b046e07bc3a0d83cbdaa47.jpg",
    "/proposals/the-burgeruz/fc061b788572b0264988cc4fca4c3772.jpg",
    "/proposals/the-burgeruz/f8e31f4e53469b88d157532ebec5e619.jpg",
    "/proposals/the-burgeruz/76332bb4eea92e269fa8b2450b98ce5b.jpg",
  ],
  ads: [
    {
      title: "Охват через Reels",
      description: "Кампании на сегменты молодежи и любителей фастфуда с сообщением про скорость подачи.",
    },
    {
      title: "Ретаргет на вовлечённых",
      description: "Догреваем тех, кто посмотрел ролики и взаимодействовал со сторис/постами.",
    },
    {
      title: "Конверсия в заказ",
      description: "Ведём в Direct и к ближайшей точке франшизы через офферы и гео-активации.",
    },
  ],
  pricing: {
    amount: "12 500 000",
    currency: "сум",
    period: "месяц",
    team: ["SMM-стратег", "Видеограф / мобилограф", "Дизайнер", "Таргетолог", "Комьюнити-менеджер"],
    deliverables: [
      { label: "Reels", value: "8 в месяц" },
      { label: "Посты", value: "4 в месяц" },
      { label: "Stories", value: "60–90 в месяц" },
      { label: "Съёмки", value: "2 выезда в месяц" },
      { label: "Таргет", value: "настройка и ведение" },
      { label: "Отчёт", value: "ежемесячно" },
    ],
    notes: [
      "Ключевой KPI контента: закрепить в восприятии аудитории скорость подачи за 3 минуты.",
      "Бюджет на рекламу в кабинете Meta — отдельно.",
    ],
  },
};
