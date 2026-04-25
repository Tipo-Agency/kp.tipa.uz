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
      imageUrl: "/proposals/maccaldo-uz/3629bd84993c14538eb25dd82a3687cb.jpg",
    },
    {
      title: "Сэндвичи, хот-доги, бургеры в деталях",
      description: "Крупные планы продукта: размер, сочность, сборка и подача.",
      imageUrl: "/proposals/maccaldo-uz/37e8087dda0fc955191ba68c89b13154.jpg",
    },
    {
      title: "Reels с оффером «3 минуты»",
      description: "Динамичные короткие форматы с акцентом на скорость и аппетитность.",
      imageUrl: "/proposals/maccaldo-uz/4b6e91755c0c45a3af0edc37aa982a66.jpg",
    },
    { title: "Комбо и наборы", description: "Варианты на одного, на двоих и на компанию с ясной выгодой.", imageUrl: "" },
    { title: "Гости и реакции", description: "Живые эмоции, UGC и мини-отзывы как социальное доказательство.", imageUrl: "" },
    { title: "Новые точки франшизы", description: "Анонсы запусков, локации и локальные поводы зайти.", imageUrl: "" },
    { title: "Акции и спецпредложения", description: "Сезонные и недельные офферы, которые легко конвертируются в заказ.", imageUrl: "" },
    { title: "FAQ и как заказать", description: "Короткие ответы про время подачи, состав и формат заказа.", imageUrl: "" },
    { title: "Вовлечение и интерактив", description: "Опросы, голосования и мини-механики для роста вовлечения.", imageUrl: "" },
  ],
  rubricBlockImages: [
    "/proposals/maccaldo-uz/3629bd84993c14538eb25dd82a3687cb.jpg",
    "/proposals/maccaldo-uz/37e8087dda0fc955191ba68c89b13154.jpg",
    "/proposals/maccaldo-uz/4b6e91755c0c45a3af0edc37aa982a66.jpg",
  ],
  positioning: {
    title: "Bibigon Box — быстрый фастфуд для молодого города",
    description:
      "Позиционируем сеть как место, где молодежь получает понятный и вкусный продукт практически мгновенно. Главный бренд-месседж в коммуникации: подача за 3 минуты.",
    images: [
      "/proposals/maccaldo-uz/105c30b650a49e34bc18e04d45c4d02a.jpg",
      "/proposals/maccaldo-uz/1b4014d7a923f77aa3f514925b2a7645.jpg",
      "/proposals/maccaldo-uz/213ac0a99eb3d4b4b22cda12c899f960.jpg",
      "/proposals/maccaldo-uz/2b30422f5c7c1c32afeb9b500a36c47e.jpg",
    ],
  },
  visuals: [
    "/proposals/maccaldo-uz/4c121a5350237cacb8c5f780261e0033.jpg",
    "/proposals/maccaldo-uz/4d67b4cc6775d08fb31200c812ed99bd.jpg",
    "/proposals/maccaldo-uz/5523052882ee9fb984745b29b1ad03eb.jpg",
    "/proposals/maccaldo-uz/6b66f4e0defc83b7288e6a8cae354805.jpg",
    "/proposals/maccaldo-uz/7908f8abe52d615c5954ec5ac8a44e48.jpg",
    "/proposals/maccaldo-uz/824a8e485dae498ea58d0b4252b651ae.jpg",
    "/proposals/maccaldo-uz/89ff9e7f53e01b8f06bbba12962440fa.jpg",
    "/proposals/maccaldo-uz/a740aef995c8971cc1651413c5643889.jpg",
    "/proposals/maccaldo-uz/abbd161a0b1008e5d039039bbc0267fd.jpg",
    "/proposals/maccaldo-uz/bb7b6912b40c3959a6458957a6f507de.jpg",
    "/proposals/maccaldo-uz/bb93d96e13be4edc7b137ccd914c80c5.jpg",
    "/proposals/maccaldo-uz/cbaa01eefe7f84a102b9e84115134d4c.jpg",
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
