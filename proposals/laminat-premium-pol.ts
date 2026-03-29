import type { ProposalData } from "../types";

/** КП: SMM для @laminat_premium_pol */
export const laminatPremiumPol: ProposalData = {
  clientName: "Laminat Premium Pol — напольные покрытия",
  hero: {
    title: "Instagram для магазина полов: визуал, экспертиза и заявки",
    subtitle:
      "Продвижение https://www.instagram.com/laminat_premium_pol/ — ламинат, паркет, сопутствующие товары. Контент: интерьеры, сравнения, монтаж, склад и доставка; таргет на ремонт и дизайн.",
  },
  services: [
    {
      title: "Витрина и каталог",
      description:
        "Коллекции, фактуры, цвета в интерьере. Карусели «как выбрать под свет и мебель».",
    },
    {
      title: "Экспертиза",
      description:
        "Влагостойкость, класс износостойкости, укладка, подложка — простым языком без перегруза.",
    },
    {
      title: "Социальное доказательство",
      description:
        "Объекты клиентов, до/после, отзывы. Форматы «объект недели».",
    },
    {
      title: "Лиды",
      description:
        "Таргет на ремонт, новостройки, дизайн. CTA: замер, консультация, расчёт.",
    },
  ],
  servicesImageUrl: "/shared/services.png",
  servicesDescription:
    "Пол — решение на годы: в ленте важно показать и красоту, и параметры, и сервис. Собираем это в рубрики.",
  growthTool: {
    title: "От лайка к замеру",
    description:
      "Чёткие офферы в stories, быстрые ответы в Direct, кнопки на WhatsApp/Telegram — конверсия в заявку.",
  },
  audienceImageUrl: "/shared/audience.png",
  audience: {
    primary: [
      "Делающие ремонт квартир и домов",
      "Дизайнеры и прорабы как рефереры",
      "Семьи, выбирающие покрытие в бюджете",
    ],
    secondary: ["Коммерческие объекты", "Перепродавцы и мастера укладки"],
  },
  rubrics: [
    { title: "Коллекции", description: "Новинки и бестселлеры.", imageUrl: "" },
    { title: "Интерьеры", description: "Фото готовых полов.", imageUrl: "" },
    { title: "Сравнения", description: "Ламинат vs другие покрытия.", imageUrl: "" },
    { title: "Монтаж", description: "Процесс и сроки.", imageUrl: "" },
    { title: "Склад и наличие", description: "Что есть сейчас.", imageUrl: "" },
    { title: "Советы", description: "Уход, подложка, плинтуса.", imageUrl: "" },
    { title: "Акции", description: "Сезонные и праздничные.", imageUrl: "" },
    { title: "Отзывы", description: "Клиенты и объекты.", imageUrl: "" },
    { title: "Контакты", description: "Показать, как приехать к вам.", imageUrl: "" },
  ],
  positioning: {
    title: "Премиум-пол без лишней накрутки",
    description:
      "Позиционируем магазин как место, где помогут выбрать и не ошибиться с покрытием.",
    images: [],
  },
  visuals: [],
  ads: [
    { title: "Ремонт и дизайн", description: "Интересы и гео." },
    { title: "Лиды", description: "Заявки на расчёт и консультацию." },
    { title: "Ретаргет", description: "Догрев взаимодействий." },
  ],
  pricing: {
    amount: "12 000 000",
    currency: "сум",
    period: "месяц",
    team: ["SMM-стратег", "Видеограф", "Дизайнер", "Таргетолог", "Комьюнити"],
    deliverables: [
      { label: "Съёмки", value: "2 выезда (шоурум / объект)" },
      { label: "Reels", value: "6–8" },
      { label: "Посты", value: "4–6" },
      { label: "Stories", value: "ежедневно" },
      { label: "Отчёт", value: "еженедельно" },
    ],
  },
};
