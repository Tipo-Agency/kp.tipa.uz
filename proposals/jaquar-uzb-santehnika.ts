import type { ProposalData } from "../types";

export const jaquarUzbSantehnika: ProposalData = {
  clientName: "Jaquar UZB — сантехника",
  hero: {
    title: "Коммерческое предложение",
    subtitle: "Здесь будет индивидуальная презентация под бренд после загрузки материалов.",
  },
  services: [
    { title: "Стратегия", description: "Анализ рынка и позиционирование бренда." },
    { title: "Контент", description: "Сценарии и рубрики, которые объясняют ценность продукта." },
    { title: "Визуал", description: "Единый стиль ленты и продуктовая эстетика." },
    { title: "Продвижение", description: "Таргет и аналитика по воронке." },
  ],
  // Картинку добавишь позже в public/proposals/jaquar-uzb-santehnika/services/
  servicesImageUrl: undefined,
  growthTool: {
    title: "Контент как актив",
    description: "Системный контент превращает спрос в понятную воронку и укрепляет доверие к бренду.",
  },
  audience: {
    primary: ["Конечные покупатели", "Дизайнеры интерьера", "Строительные бригады"],
    secondary: ["Девелоперы", "Дилеры и шоурумы"],
  },
  audienceImageUrl: undefined,
  // 3 картинки для блоков рубрик добавишь позже в public/proposals/jaquar-uzb-santehnika/rubrics/
  rubricBlockImages: [],
  rubrics: [
    { title: "Продукт", description: "Преимущества, материалы, комплектация.", imageUrl: "" },
    { title: "Сравнение", description: "Почему ваш продукт лучше альтернатив.", imageUrl: "" },
    { title: "Установка", description: "Гайды и ответы на частые вопросы.", imageUrl: "" },
    { title: "Кейсы", description: "Реальные объекты и отзывы.", imageUrl: "" },
    { title: "Дизайн", description: "Подборки по стилям, решения для интерьеров.", imageUrl: "" },
    { title: "Сервис", description: "Гарантия, поддержка, условия доставки.", imageUrl: "" },
    { title: "Производство", description: "Качество, контроль, стандарты.", imageUrl: "" },
    { title: "Партнёрам", description: "Условия сотрудничества и выгоды.", imageUrl: "" },
    { title: "Обучение", description: "Как выбрать и использовать правильно.", imageUrl: "" },
  ],
  positioning: {
    title: "Позиционирование",
    description: "Добавим после подбора материалов и съемок.",
    // 4 фото добавишь позже в public/proposals/jaquar-uzb-santehnika/positioning/
    images: [],
  },
  // 12 фото добавишь позже в public/proposals/jaquar-uzb-santehnika/visuals/
  visuals: [],
  ads: [
    { title: "Таргет", description: "Тест аудиторий и креативов." },
    { title: "Аналитика", description: "Отслеживание лидов и окупаемости." },
    { title: "Партнерства", description: "Коллаборации с шоурумами и дизайнерами." },
  ],
  pricing: {
    amount: "10 000 000",
    currency: "сум",
    period: "месяц",
    team: ["Менеджер проекта", "Контент-стратег", "Дизайнер", "Таргетолог", "Продакшн"],
    deliverables: [
      { label: "Съемки в месяц", value: "по плану" },
      { label: "Reels / Видео", value: "по плану" },
      { label: "Посты в ленту", value: "по плану" },
      { label: "Stories", value: "по плану" },
      { label: "Дизайн-сетка", value: "единый стиль" },
    ],
  },
};

