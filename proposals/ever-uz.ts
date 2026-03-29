import type { ProposalData } from "../types";

/** КП: SMM для @ever.uz */
export const everUz: ProposalData = {
  clientName: "Ever — Instagram @ever.uz",
  hero: {
    title: "SMM под бренд Ever",
    subtitle:
      "Продвижение https://www.instagram.com/ever.uz/ — стратегия контента, визуал, Reels и таргет под ваши цели: узнаваемость, доверие и продажи.",
  },
  services: [
    {
      title: "Бренд и контент-стратегия",
      description: "Рубрики, смыслы, календарь публикаций и единый стиль под Ever.",
    },
    {
      title: "Продакшн",
      description: "Съёмки продукта/сервиса, монтаж Reels, дизайн каруселей и сторис.",
    },
    {
      title: "Реклама",
      description: "Meta: охват, трафик в профиль, лиды. Тесты креативов и аудиторий.",
    },
    {
      title: "Аналитика",
      description: "Сводка по охватам, ER, обращениям и выводам на следующий месяц.",
    },
  ],
  servicesImageUrl: "/shared/services.png",
  servicesDescription:
    "Выстраиваем присутствие Ever в Instagram как уверенный, современный бренд с понятным предложением.",
  growthTool: {
    title: "Системность вместо хаоса",
    description: "План + креатив + перформанс — чтобы каждый месяц было лучше предыдущего.",
  },
  audienceImageUrl: "/shared/audience.png",
  audience: {
    primary: ["ЦА бренда Ever (уточняется на брифинге)", "Активные пользователи Instagram"],
    secondary: ["Партнёры", "Повторные клиенты"],
  },
  rubrics: [
    { title: "Бренд-история", description: "Ценности и отличия Ever.", imageUrl: "" },
    { title: "Продукт / услуга", description: "Польза и сценарии использования.", imageUrl: "" },
    { title: "Reels", description: "Охваты и узнаваемость.", imageUrl: "" },
    { title: "Экспертиза", description: "Экспертные посты и доверие.", imageUrl: "" },
    { title: "Социальное доказательство", description: "Отзывы, кейсы.", imageUrl: "" },
    { title: "Акции", description: "Промо и срочность.", imageUrl: "" },
    { title: "Stories", description: "Ежедневный контакт с аудиторией.", imageUrl: "" },
    { title: "Коллаборации", description: "Рост через партнёров.", imageUrl: "" },
    { title: "Итоги месяца", description: "Прозрачность результатов.", imageUrl: "" },
  ],
  positioning: {
    title: "Ever — узнаваемый бренд в ленте",
    description: "Позиционирование и визуал, с которыми аудитория хочет остаться.",
    images: [],
  },
  visuals: [],
  ads: [
    { title: "Узнаваемость", description: "Охватные кампании." },
    { title: "Вовлечение", description: "Реклама на взаимодействие." },
    { title: "Конверсия", description: "Заявки и сообщения." },
  ],
  pricing: {
    amount: "12 000 000",
    currency: "сум",
    period: "месяц",
    team: ["SMM-стратег", "Видеограф", "Дизайнер", "Таргетолог", "Комьюнити"],
    deliverables: [
      { label: "Съёмки", value: "2 выезда" },
      { label: "Reels", value: "6–8" },
      { label: "Посты", value: "4–6" },
      { label: "Stories", value: "ежедневно" },
      { label: "Отчёт", value: "еженедельно" },
    ],
  },
};
