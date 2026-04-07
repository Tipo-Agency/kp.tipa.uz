import type { ProposalData } from "../types";
import { smmTripleFunnel } from "./smm-triple-funnel";
import { ROYAL_CARE_IMAGES, mediaUrl } from "./proposalUploadedMedia";

const B = "/proposals/royal-care-uzb";
const u = (file: string) => mediaUrl(B, file);

const posI = [0, 12, 24, 36] as const;
const blockI = [6, 18, 30] as const;
const rubI = [1, 2, 3, 4, 5, 7, 8, 9, 10] as const;
const used = new Set<number>([...posI, ...blockI, ...rubI]);
const visuals = ROYAL_CARE_IMAGES.filter((_, i) => !used.has(i)).map((f) => u(f));

/** КП: SMM для Royal Care — два Instagram: @royalcare.uzb и @bubchen.uz */
export const royalCareUzb: ProposalData = {
  clientName: "Royal Care — уход и детская косметика (два аккаунта)",
  hero: {
    title: "Два Instagram — одна экосистема доверия родителей",
    subtitle:
      "Аккаунты: https://www.instagram.com/royalcare.uzb и https://www.instagram.com/bubchen.uz · КП: https://kp.tipa.uz/royal-care-uzb. Задача: разделить смыслы бренда и линейки (уход, доверие, экспертиза) и при этом держать узнаваемый визуальный ДНК; охваты, вовлечение и заявки в Direct/магазин.",
  },
  services: [
    {
      title: "Royal Care: бренд и ассортимент",
      description:
        "Стратегия @royalcare.uzb: позиционирование магазина/дистрибьютора, доверие к оригинальной продукции, доставка, консультации для родителей. Форматы: обзоры, подборки по возрасту, сезонные потребности.",
    },
    {
      title: "Bübchen: узнаваемость линейки",
      description:
        "Акцент @bubchen.uz на бренде Bübchen: мягкие средства для детей, привычные родителям SKU, новинки. Обзоры текстур, безопасность составов, сценарии использования (купание, уход за кожей).",
    },
    {
      title: "Визуал и эмоция",
      description:
        "Чистая эстетика «заботы»: дети в кадре по согласованию, руки родителей, текстуры средств, спокойные цвета. Reels — бытовые мини-сценарии без перегруза.",
    },
    {
      title: "Продвижение",
      description:
        "Таргет на родителей, беременных, подарки на малыша; ретаргет на взаимодействия. Раздельные гипотезы по двум аккаунтам, интеграции с блогерами-мамами — отдельный бюджет.",
    },
  ],
  servicesImageUrl: "/shared/services.png",
  servicesDescription:
    "Один бизнес — два входа в аудиторию: общий бренд магазина и фокус на любимой марке. Мы не дублируем контент один в один: у каждого аккаунта своя роль в воронке. Ниже — ваши материалы в матрице, позиционировании и сетке визуала.",
  growthTool: {
    title: "Вопрос в Direct → консультация → заказ",
    description:
      "Скрипты на типовые запросы (возраст, чувствительная кожа, аллергии), быстрые ответы в сторис, FAQ-карусели. Снижаем нагрузку на коммуникацию за счёт прозрачного контента.",
  },
  growthFunnel: smmTripleFunnel,
  audienceImageUrl: "/shared/audience.png",
  audience: {
    primary: [
      "Родители детей 0–6 лет и будущие мамы",
      "Те, кто ищет проверенные средства для купания и ежедневного ухода",
      "Покупатели подарков для новорождённых",
    ],
    secondary: [
      "Бабушки и семья, покупающие косметику «на пробу»",
      "Подписчики маркетплейсов, которых догоняем ретаргетом в Instagram",
    ],
  },
  rubricBlockImages: blockI.map((i) => u(ROYAL_CARE_IMAGES[i])),
  rubrics: [
    {
      title: "Подбор по возрасту",
      description: "Что подходит младенцу, что — старшему ребёнку.",
      imageUrl: u(ROYAL_CARE_IMAGES[rubI[0]]),
    },
    {
      title: "Составы без запугивания",
      description: "Спокойные объяснения: зачем компонент, кому подходит.",
      imageUrl: u(ROYAL_CARE_IMAGES[rubI[1]]),
    },
    {
      title: "Новинки и акции",
      description: "Прозрачные условия, сроки, наличие.",
      imageUrl: u(ROYAL_CARE_IMAGES[rubI[2]]),
    },
    {
      title: "Сравнения и подборки",
      description: "«Что взять в роддом», набор для купания, сезон.",
      imageUrl: u(ROYAL_CARE_IMAGES[rubI[3]]),
    },
    {
      title: "Отзывы родителей",
      description: "UGC, переписки с согласия, реальные истории.",
      imageUrl: u(ROYAL_CARE_IMAGES[rubI[4]]),
    },
    {
      title: "Закулисье бренда",
      description: "Команда, упаковка, приёмка — человеческое лицо.",
      imageUrl: u(ROYAL_CARE_IMAGES[rubI[5]]),
    },
    {
      title: "Доставка и подлинность",
      description: "Откуда товар, как проверить оригинал, сроки.",
      imageUrl: u(ROYAL_CARE_IMAGES[rubI[6]]),
    },
    {
      title: "Reels: 30 секунд пользы",
      description: "Короткие советы и демо средств.",
      imageUrl: u(ROYAL_CARE_IMAGES[rubI[7]]),
    },
    {
      title: "FAQ",
      description: "Аллергии, возврат, консультация перед покупкой.",
      imageUrl: u(ROYAL_CARE_IMAGES[rubI[8]]),
    },
  ],
  positioning: {
    title: "Royal Care — забота, которой можно доверять",
    description:
      "Позиционируем экосистему как честный источник детской косметики: @royalcare.uzb — широкий угол магазина и сервиса; @bubchen.uz — глубина по бренду Bübchen. Ссылки: https://www.instagram.com/royalcare.uzb · https://www.instagram.com/bubchen.uz",
    images: posI.map((i) => u(ROYAL_CARE_IMAGES[i])),
  },
  visuals,
  ads: [
    {
      title: "Таргет Meta (два контура)",
      description:
        "Отдельные гипотезы для @royalcare.uzb и @bubchen.uz: родители, беременность, подарки новорождённым. Бюджет на рекламу — отдельно.",
    },
    {
      title: "Блогеры и мамы-инфлюенсеры",
      description:
        "Обзоры, распаковки, честные тесты средств. Подбор, бриф, контроль УТП. Гонорары — отдельной строкой.",
    },
    {
      title: "Ретаргет и lookalike",
      description:
        "Догрев взаимодействий с обоих профилей; масштабирование похожих аудиторий после первых продаж и лидов.",
    },
  ],
  salesStructureIntro:
    "У двух аккаунтов разные роли: один продаёт доверие к магазину в целом, второй — углубляет любовь к марке Bübchen. Ниже — как делим контент и при этом не рассыпаем бренд.",
  salesTracks: [
    {
      title: "@royalcare.uzb",
      description: "Воронка «узнала магазин → увидела ассортимент → написала/заказала».",
      items: [
        "Рубрики: новинки, бестселлеры, подборки по запросу родителей",
        "Reels: обзоры, распаковки, сравнения линеек",
        "Сторис: вопросы, наличие, быстрые ответы",
        "Доказательства: отзывы, доставки, оригинальность",
      ],
    },
    {
      title: "@bubchen.uz",
      description: "Воронка «люблю Bübchen → хочу конкретный продукт → покупка».",
      items: [
        "Рубрики: состав, текстуры, сценарии «купание/уход»",
        "Reels: демо пены, крема, лосьона; сезонность",
        "Сторис: акции марки, FAQ по линейке",
        "Связка с Royal Care без дублирования всей ленты",
      ],
    },
  ],
  pricing: {
    amount: "25 000 000",
    currency: "сум",
    period: "месяц",
    team: ["SMM-стратег", "Моушн / Reels", "Дизайнер", "Таргетолог", "Комьюнити"],
    deliverables: [
      { label: "Reels", value: "8–10 на каждый аккаунт" },
      { label: "Карусели", value: "4–6 на каждый аккаунт" },
      { label: "Stories", value: "60–90 / мес на профиль по графику" },
      { label: "Аккаунты", value: "2 Instagram" },
      { label: "Отчёт", value: "еженедельно, по профилям" },
    ],
    secondary: [
      {
        label: "Скидка при предоплате за 3 месяца",
        value: "11 000 000 сум / мес за один аккаунт при оплате кварталом вперёд (вместо 12 500 000)",
      },
    ],
    divisions: [
      {
        title: "@royalcare.uzb",
        amount: "12 500 000",
        deliverables: [
          { label: "Фокус", value: "магазин, ассортимент, доверие" },
          { label: "Объём", value: "см. пакет выше — на аккаунт" },
          { label: "Стоимость", value: "за 1 аккаунт / месяц" },
        ],
      },
      {
        title: "@bubchen.uz",
        amount: "12 500 000",
        deliverables: [
          { label: "Фокус", value: "бренд Bübchen, экспертиза" },
          { label: "Объём", value: "см. пакет выше — на аккаунт" },
          { label: "Стоимость", value: "за 1 аккаунт / месяц" },
        ],
      },
      {
        title: "Оба аккаунта (комплекс)",
        amount: "25 000 000",
        deliverables: [
          { label: "Выгода", value: "единая команда и согласованная стратегия" },
          { label: "Объём", value: "полный пакет на два профиля" },
          { label: "Сумма", value: "12,5 + 12,5 млн / мес" },
        ],
      },
    ],
    notes: [
      "12 500 000 сум — стандартная ежемесячная ставка за ведение одного аккаунта. Таргет Meta и блогеры — отдельный бюджет.",
      "Условие 11 000 000 сум / мес действует при предоплате за три месяца по каждому выбранному аккаунту (оформляем в договоре отдельной строкой).",
    ],
  },
};
