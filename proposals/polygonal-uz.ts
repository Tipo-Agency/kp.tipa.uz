import type { ProposalData } from "../types";

/** КП: SMM для @polygonal.uz */
export const polygonalUz: ProposalData = {
  clientName: "Polygonal — Instagram @polygonal.uz",
  hero: {
    title: "SMM под бренд Polygonal",
    subtitle:
      "Контент под ваш продукт или услугу: стратегия, визуал, Reels, таргет и аналитика. Детали позиционирования уточняем на брифинге под актуальное направление бизнеса.",
  },
  services: [
    {
      title: "Стратегия",
      description: "Аудитория, конкуренты, рубрики, tone of voice, календарь.",
    },
    {
      title: "Визуал и контент",
      description: "Съёмки, дизайн, единый стиль ленты и stories.",
    },
    {
      title: "Видео",
      description: "Reels под охваты и вовлечение, нарезки, тренды.",
    },
    {
      title: "Реклама",
      description: "Meta: охват, трафик, лиды. Тесты креативов и аудиторий.",
    },
  ],
  servicesImageUrl: "/shared/services.png",
  servicesDescription:
    "Собираем контент так, чтобы аккаунт Polygonal выглядел цельно и приводил к целям: узнаваемость, заявки или продажи.",
  growthTool: {
    title: "Система вместо хаоса",
    description: "План + креатив + перформанс — с прозрачной отчётностью.",
  },
  audienceImageUrl: "/shared/audience.png",
  audience: {
    primary: ["Целевая аудитория бренда (уточняется на брифинге)", "Активные пользователи Instagram"],
    secondary: ["Партнёры", "Повторные клиенты"],
  },
  rubrics: [
    { title: "Бренд", description: "Ценности и отличия.", imageUrl: "" },
    { title: "Продукт / услуга", description: "Польза и сценарии.", imageUrl: "" },
    { title: "Кейсы", description: "Результаты и истории.", imageUrl: "" },
    { title: "Команда", description: "Люди за брендом.", imageUrl: "" },
    { title: "Reels", description: "Охваты и узнаваемость.", imageUrl: "" },
    { title: "Экспертиза", description: "Мнения и разборы.", imageUrl: "" },
    { title: "Акции", description: "Промо и события.", imageUrl: "" },
    { title: "Отзывы", description: "Социальное доказательство.", imageUrl: "" },
    { title: "FAQ", description: "Ответы в stories.", imageUrl: "" },
  ],
  positioning: {
    title: "Polygonal в ленте — узнаваемо и по делу",
    description:
      "Позиционируем бренд как современный и понятный выбор для вашей аудитории.",
    images: [],
  },
  visuals: [],
  ads: [
    { title: "Охват", description: "Новая аудитория." },
    { title: "Вовлечение", description: "Взаимодействие с контентом." },
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
