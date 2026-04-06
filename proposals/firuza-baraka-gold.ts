import type { ProposalData } from "../types";

const V = "/proposals/virtopay";

/** КП: SMM для @firuza_baraka_gold — ювелирная тематика / золото. */
export const firuzaBarakaGold: ProposalData = {
  clientName: "Firuza Baraka Gold",
  hero: {
    title: "Instagram, который продаёт доверие к золоту и украшениям",
    subtitle:
      "Аккаунт: https://www.instagram.com/firuza_baraka_gold/ · страница КП: https://kp.tipa.uz/firuza-baraka-gold. Задача — премиальная подача ассортимента, прозрачность по пробе и весу, эмоция покупки и удобный путь в Direct: консультация, подбор, доставка.",
  },
  services: [
    {
      title: "Премиальный визуал и узнаваемость",
      description:
        "Единый стиль ленты: ювелирные изделия в свете, крупные планы, детали застёжек и камней, лаконичные композиции без визуального шума. Сторис и Reels — динамика, примерка, «как носить».",
    },
    {
      title: "Экспертиза и снятие возражений",
      description:
        "Проба, сертификация, уход за изделиями, отличия сплавов, типичные вопросы при покупке золота онлайн. Коротко и по делу — чтобы снизить страх «куплю не то».",
    },
    {
      title: "Ассортимент и сезонность",
      description:
        "Новинки, хиты, подарочные поводы (свадьба, годовщина, праздники), подборки по бюджету. Понятные офферы без агрессивного дискаунт-хайпа.",
    },
    {
      title: "Продвижение и заявки",
      description:
        "Таргет на интересы fashion, jewelry, luxury, gift; ретаргет на взаимодействия с Reels и каруселями. CTA: Direct, консультация, резерв.",
    },
  ],
  servicesImageUrl: "/shared/services.png",
  servicesDescription:
    "Ювелирка в соцсетях выигрывает от сочетания красоты кадра и честных деталей: что за изделие, для кого, как получить. Ниже в КП — референсный визуальный ряд; в работе заменим на ваши съёмки и бренд. Instagram: https://www.instagram.com/firuza_baraka_gold/",
  growthTool: {
    title: "От лайка к сообщению в Direct",
    description:
      "Скрипты ответов, шаблоны на типовые вопросы (размер, проба, доставка), быстрые голосовые при необходимости. Меньше трения на этапе «хочу уточнить» — выше конверсия из охватов.",
  },
  audienceImageUrl: "/shared/audience.png",
  audience: {
    primary: [
      "Покупатели золотых украшений для себя и в подарок",
      "Аудитория, которая ценит качество и готова ждать доставку ради нужной модели",
      "Те, кто выбирает по фото и видео и ожидает честного описания",
    ],
    secondary: [
      "Праздничные и семейные покупки (обручальные, детские подарки)",
      "Повторные клиенты и рекомендации «сарафаном»",
    ],
  },
  rubricBlockImages: [`${V}/a3_analytics.jpg`, `${V}/a10_card.jpg`, `${V}/a17_phone.jpg`],
  rubrics: [
    {
      title: "Коллекции и новинки",
      description: "Презентация линеек, акцент на деталях и стиле носки.",
      imageUrl: `${V}/a3_analytics.jpg`,
    },
    {
      title: "Проба и качество",
      description: "Что гарантируем, как читать клейма, документы при необходимости.",
      imageUrl: `${V}/a10_card.jpg`,
    },
    {
      title: "Подарки и поводы",
      description: "Подборки под бюджет и событие; упаковка и открытка — если есть в сервисе.",
      imageUrl: `${V}/a17_phone.jpg`,
    },
    {
      title: "Примерка и размеры",
      description: "Как подобрать размер кольца, длину цепи — гайды в каруселях и Reels.",
      imageUrl: `${V}/a16_wallet.jpg`,
    },
    {
      title: "Уход",
      description: "Как хранить и чистить изделия, чтобы дольше сохраняли вид.",
      imageUrl: "",
    },
    {
      title: "Отзывы и реальные фото",
      description: "UGC с согласия клиентов, истории покупок.",
      imageUrl: "",
    },
    {
      title: "Доставка и оплата",
      description: "Понятные условия по городу и регионам, безопасная сделка.",
      imageUrl: `${V}/a20_office.jpg`,
    },
    {
      title: "Закулисье",
      description: "Команда, витрина, процесс приёмки — человеческое лицо бренда.",
      imageUrl: "",
    },
    {
      title: "FAQ",
      description: "Ответы в сторис: обмен, сроки, индивидуальный заказ.",
      imageUrl: `${V}/a11_support.jpg`,
    },
  ],
  positioning: {
    title: "Firuza Baraka Gold — честная подача и эстетика",
    description:
      "Позиционируем аккаунт как место, где красиво показывают золото и спокойно отвечают на вопросы: без давления, с уважением к покупателю. Канал: https://www.instagram.com/firuza_baraka_gold/ · КП: https://kp.tipa.uz/firuza-baraka-gold",
    images: [`${V}/a1_mobile_payment.jpg`, `${V}/a2_online_shopping.jpg`, `${V}/a4_phone_hand.jpg`, `${V}/a13_crypto.jpg`],
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
  ],
  ads: [
    {
      title: "Охват и узнаваемость",
      description: "Креативы с сильными кадрами изделий и мягким CTA в профиль.",
    },
    {
      title: "Интересы и lookalike",
      description: "Тест гипотез по сегментам: подарки, свадьба, повседневные украшения.",
    },
    {
      title: "Ретаргет",
      description: "Догрев смотревших Reels и открывавших карусели: отзывы, детали, оффер на консультацию.",
    },
  ],
  pricing: {
    amount: "12 500 000",
    currency: "сум",
    period: "месяц",
    team: ["SMM-стратег", "Моушн / Reels", "Дизайнер", "Таргетолог", "Комьюнити"],
    deliverables: [
      { label: "Reels / видео", value: "8–10" },
      { label: "Посты / карусели", value: "4–6" },
      { label: "Stories", value: "ежедневно (по графику)" },
      { label: "Контент-план и рубрики", value: "1 аккаунт" },
      { label: "Отчёт", value: "еженедельно" },
    ],
    notes: ["Стоимость указана за один аккаунт Instagram в месяц. Рекламный бюджет Meta — отдельно, по согласованию."],
  },
};
