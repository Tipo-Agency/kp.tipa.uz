import type { ProposalData } from "../types";
import { smmTripleFunnel } from "./smm-triple-funnel";
import { FIRUZA_IMAGES, mediaUrl } from "./proposalUploadedMedia";

const B = "/proposals/firuza-baraka-gold";
const u = (file: string) => mediaUrl(B, file);

const posI = [0, 7, 14, 21] as const;
const blockI = [3, 10, 17] as const;
const rubI = [1, 2, 4, 5, 6, 8, 9, 11, 12] as const;
const used = new Set<number>([...posI, ...blockI, ...rubI]);
const visuals = FIRUZA_IMAGES.filter((_, i) => !used.has(i)).map((f) => u(f));

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
        "Таргет на интересы fashion, jewelry, luxury, gift; ретаргет на взаимодействия. CTA: Direct, консультация, резерв. Интеграции с блогерами — отдельный бюджет и подбор площадок.",
    },
  ],
  servicesImageUrl: "/shared/services.png",
  servicesDescription:
    "Ювелирка в соцсетях выигрывает от сочетания красоты кадра и честных деталей: что за изделие, для кого, как получить. Ниже — ваши загруженные кадры в блоках матрицы, позиционирования и сетке визуала. Instagram: https://www.instagram.com/firuza_baraka_gold/",
  growthTool: {
    title: "От лайка к сообщению в Direct",
    description:
      "Скрипты ответов, шаблоны на типовые вопросы (размер, проба, доставка), быстрые голосовые при необходимости. Меньше трения на этапе «хочу уточнить» — выше конверсия из охватов.",
  },
  growthFunnel: smmTripleFunnel,
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
  rubricBlockImages: blockI.map((i) => u(FIRUZA_IMAGES[i])),
  rubrics: [
    {
      title: "Коллекции и новинки",
      description: "Презентация линеек, акцент на деталях и стиле носки.",
      imageUrl: u(FIRUZA_IMAGES[rubI[0]]),
    },
    {
      title: "Проба и качество",
      description: "Что гарантируем, как читать клейма, документы при необходимости.",
      imageUrl: u(FIRUZA_IMAGES[rubI[1]]),
    },
    {
      title: "Подарки и поводы",
      description: "Подборки под бюджет и событие; упаковка и открытка — если есть в сервисе.",
      imageUrl: u(FIRUZA_IMAGES[rubI[2]]),
    },
    {
      title: "Примерка и размеры",
      description: "Как подобрать размер кольца, длину цепи — гайды в каруселях и Reels.",
      imageUrl: u(FIRUZA_IMAGES[rubI[3]]),
    },
    {
      title: "Уход",
      description: "Как хранить и чистить изделия, чтобы дольше сохраняли вид.",
      imageUrl: u(FIRUZA_IMAGES[rubI[4]]),
    },
    {
      title: "Отзывы и реальные фото",
      description: "UGC с согласия клиентов, истории покупок.",
      imageUrl: u(FIRUZA_IMAGES[rubI[5]]),
    },
    {
      title: "Доставка и оплата",
      description: "Понятные условия по городу и регионам, безопасная сделка.",
      imageUrl: u(FIRUZA_IMAGES[rubI[6]]),
    },
    {
      title: "Закулисье",
      description: "Команда, витрина, процесс приёмки — человеческое лицо бренда.",
      imageUrl: u(FIRUZA_IMAGES[rubI[7]]),
    },
    {
      title: "FAQ",
      description: "Ответы в сторис: обмен, сроки, индивидуальный заказ.",
      imageUrl: u(FIRUZA_IMAGES[rubI[8]]),
    },
  ],
  positioning: {
    title: "Firuza Baraka Gold — честная подача и эстетика",
    description:
      "Позиционируем аккаунт как место, где красиво показывают золото и спокойно отвечают на вопросы: без давления, с уважением к покупателю. Канал: https://www.instagram.com/firuza_baraka_gold/ · КП: https://kp.tipa.uz/firuza-baraka-gold",
    images: posI.map((i) => u(FIRUZA_IMAGES[i])),
  },
  visuals,
  ads: [
    {
      title: "Таргет Meta",
      description:
        "Охват, узнаваемость, интересы и lookalike; ретаргет на Reels и карусели. Бюджет на рекламу — отдельно, планируем и согласуем под цели месяца.",
    },
    {
      title: "Блогеры и лидеры мнений",
      description:
        "Подбор форматов (интеграция, бартер, посевы), бриф под бренд, контроль креатива. Гонорары и закупы — отдельной строкой в бюджете.",
    },
    {
      title: "Связка платного и органики",
      description:
        "Органика кормит доверием, таргет и коллаборации подключают новую аудиторию; воронка ниже — как это стыкуем в одной системе.",
    },
  ],
  pricing: {
    amount: "12 500 000",
    currency: "сум",
    period: "месяц",
    team: ["SMM-стратег", "Моушн / Reels", "Дизайнер", "Таргетолог", "Комьюнити"],
    deliverables: [
      { label: "Посты (статика)", value: "8" },
      { label: "Карусели", value: "4" },
      { label: "Stories", value: "60 / мес по графику" },
      { label: "Аккаунт", value: "1 Instagram" },
      { label: "Отчёт", value: "еженедельно" },
    ],
    notes: [
      "Стоимость — за один аккаунт в месяц. Бюджет таргета Meta и интеграции с блогерами оплачиваются отдельно.",
      "Количество единиц контента может сдвигаться в пределах месяца по согласованию, если приоритет — съёмка, запуск или акция.",
    ],
  },
};
