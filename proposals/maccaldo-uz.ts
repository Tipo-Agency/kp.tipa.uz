import type { ProposalData } from "../types";

/** КП: SMM для @maccaldo.uz */
export const maccaldoUz: ProposalData = {
  clientName: "Maccaldo — Instagram @maccaldo.uz",
  hero: {
    title: "Instagram, который продаёт бренд и заказы",
    subtitle:
      "Продвижение аккаунта https://www.instagram.com/maccaldo.uz/ — контент под ваш продукт и аудиторию: охваты, вовлечение и понятный путь к заказу в Direct.",
  },
  services: [
    {
      title: "Стратегия и позиционирование",
      description:
        "Формулируем tone of voice, рубрики и визуальный код: чтобы лента читалась цельно и запоминалась.",
    },
    {
      title: "Контент и съёмки",
      description:
        "Reels, карусели, stories: продукт, процесс, атмосфера, социальное доказательство.",
    },
    {
      title: "Продвижение",
      description:
        "Таргет и ретаргет под цели: охваты, заявки, подписка. Гипотезы и отчётность.",
    },
    {
      title: "Комьюнити",
      description:
        "Ответы в Direct, работа с отзывами и UGC, акции и коллаборации.",
    },
  ],
  servicesImageUrl: "/shared/services.png",
  servicesDescription:
    "Собираем контент-систему под ваш бренд: не хаотичные посты, а понятная воронка от первого касания до заказа.",
  growthTool: {
    title: "Контент как витрина",
    description:
      "Каждый формат закрывает задачу: узнаваемость, доверие или конверсия — с измеримыми метриками.",
  },
  audienceImageUrl: "/shared/audience.png",
  audience: {
    primary: [
      "Целевая аудитория бренда в Instagram (гео и интересы — уточняем на брифинге)",
      "Люди, которые ищут качество и удобство заказа",
    ],
    secondary: ["Партнёры и B2B-запросы", "Локальное комьюнити"],
  },
  rubrics: [
    { title: "Продукт и подача", description: "Витрина ассортимента и ключевые офферы.", imageUrl: "" },
    { title: "Процесс и атмосфера", description: "Закулисье, стандарты, люди бренда.", imageUrl: "" },
    { title: "Reels и тренды", description: "Охватные форматы под алгоритмы.", imageUrl: "" },
    { title: "Отзывы и UGC", description: "Доверие через реальных клиентов.", imageUrl: "" },
    { title: "Акции и анонсы", description: "Сезонность и поводы к покупке.", imageUrl: "" },
    { title: "FAQ", description: "Закрываем возражения в stories и постах.", imageUrl: "" },
    { title: "Коллаборации", description: "Интеграции с релевантными аккаунтами.", imageUrl: "" },
    { title: "Конкурсы", description: "Рост вовлечения и базы подписчиков.", imageUrl: "" },
    { title: "Аналитика", description: "Что усиливаем в следующем месяце.", imageUrl: "" },
  ],
  positioning: {
    title: "Сильный бренд в ленте",
    description:
      "Позиционируем вас как узнаваемый и понятный выбор: визуал, смыслы и регулярность.",
    images: [],
  },
  visuals: [],
  ads: [
    { title: "Охват", description: "Реклама на новую аудиторию." },
    { title: "Заявки", description: "Таргет на обращения в Direct." },
    { title: "Ретаргет", description: "Догрев взаимодействовавших с контентом." },
  ],
  pricing: {
    amount: "12 000 000",
    currency: "сум",
    period: "месяц",
    team: ["SMM-стратег", "Видеограф / мобилограф", "Дизайнер", "Таргетолог", "Комьюнити-менеджер"],
    deliverables: [
      { label: "Съёмки", value: "2 выезда / мес" },
      { label: "Reels", value: "6–8" },
      { label: "Посты", value: "4–6" },
      { label: "Stories", value: "ежедневно" },
      { label: "Отчёт", value: "еженедельно" },
    ],
  },
};
