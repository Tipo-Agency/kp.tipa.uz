import type { ProposalData } from "../types";
import { smmTripleFunnel } from "./smm-triple-funnel";

const B = "/proposals/havakand";
const m = (f: string) => `${B}/${f}`;

/** КП: SMM для Havakand — кофейня и десерты (@havakand). */
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
    "Ниже — матрица рубрик и кадры Havakand: напитки, десерты и атмосфера точки.",
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
  rubricBlockImages: [
    m("573d943706216c0960d53ac86eba162f.jpg"),
    m("8f3ca8a38f837c558041e593f2a30c1c.jpg"),
    m("b14b2919a947a7a30bdf2f0304fb77d3.jpg"),
  ],
  rubrics: [
    {
      title: "Кофе и авторские напитки",
      description: "Эспрессо-напитки, альтернативы, сезонные лимитки.",
      imageUrl: m("3fa7d46344d989858c63cc913f4f7f6d.jpg"),
    },
    {
      title: "Десерты и витрина",
      description: "Тарты, чизкейки, подача — кадры, на которые хочется тапнуть.",
      imageUrl: m("7b0f6f7161c46d708a12354500d3b93a.jpg"),
    },
    {
      title: "Атмосфера Havakand",
      description: "Интерьер, свет, детали, настроение утра и вечера.",
      imageUrl: m("e464bf0ad2bf0838739a8ea5637b67ce.jpg"),
    },
    {
      title: "Доставка и самовывоз",
      description: "Как заказать, зоны, время, упаковка.",
      imageUrl: m("0a8e42d99f70136def004e26f488aa1e.jpg"),
    },
    {
      title: "Отзывы и гости",
      description: "UGC, отметки, истории гостей с согласия.",
      imageUrl: m("efc4f463733d9bf37d7f646265a36056.jpg"),
    },
    {
      title: "Закулисье бариста",
      description: "Люди, обжарка/оборудование, стандарты напитка.",
      imageUrl: m("069239dc698eb6c09b70fc372402ca62.jpg"),
    },
    {
      title: "Reels и тренды",
      description: "Короткие ролики под звук и охват.",
      imageUrl: m("42d913c4a5ca640dab1a0662c40c01a0.jpg"),
    },
    {
      title: "FAQ",
      description: "Часы, адрес, парковка, бронь, аллергены.",
      imageUrl: m("404be1164a9aba490211b8d815b7ccd1.jpg"),
    },
    {
      title: "События и коллаборации",
      description: "Каппинги, дегустации, совместные проекты.",
      imageUrl: m("0f20a85f98696400e67f2ad3df933f9c.jpg"),
    },
  ],
  positioning: {
    title: "Havakand — кофе и десерты, ради которых хочется зайти",
    description:
      "Позиционируем заведение как место вкуса и спокойствия: качество чашки, аккуратная подача и тёплый сервис. Instagram — витрина, которая приводит в точку и удерживает повторными визитами.",
    images: [
      m("2a2af31d5befc8772d68eda6fda92711.jpg"),
      m("86f43aaeca34c7f39438e8ce944dda76.jpg"),
      m("758e90b4f89e4d2a4f5e394d5d9a3516.jpg"),
      m("6f3b6d197b537f81aca357cb5a15ea57.jpg"),
    ],
  },
  visuals: [
    m("07a78c3da69a392ed682580c57b1ef1d.jpg"),
    m("45ebd2e9d005064d782fe58c2f8d0714.jpg"),
    m("4fb1fc244eb8cece7c2fc13ef5efdbff.jpg"),
    m("51d13957ab3489879b2324f4df6af3bb.jpg"),
    m("58c60f092634bf069b5f0096ed8beeab.jpg"),
    m("5a555a4045ed08550e46c70159e9b133.jpg"),
    m("7cf4151701847b8d16573ff65a0ce74c.jpg"),
    m("7e9a81ec0d4e4dc43080d14962bb9ff0.jpg"),
    m("bc462749ac56b9bb171d80296e51fa16.jpg"),
    m("dadfe565c306b02cbb21377164ca35cd.jpg"),
    m("efc4f463733d9bf37d7f646265a36056 (1).jpg"),
    m("2a2af31d5befc8772d68eda6fda92711.jpg"),
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
