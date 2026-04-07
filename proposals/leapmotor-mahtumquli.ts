import type { ProposalData } from "../types";

/** КП: SMM для дилерского центра Leapmotor */
export const leapmotorMahtumquli: ProposalData = {
  clientName: "Leapmotor — дилерский центр (Mahtumquli)",
  hero: {
    title: "Instagram для автосалона электромобилей Leapmotor",
    subtitle:
      "Тест-драйвы, модельный ряд, комплектации, сервис и кредит/лизинг. Контент на доверие к бренду и запись на визит в салон.",
  },
  services: [
    {
      title: "Модели и преимущества",
      description:
        "Обзоры комплектаций, запас хода, зарядка, инфраструктура. Сравнение с ожиданиями «первого EV».",
    },
    {
      title: "Салон и тест-драйв",
      description:
        "Приглашение в шоурум, съёмки с клиентами (с согласия), эмоции от первой поездки.",
    },
    {
      title: "Финансы и сервис",
      description:
        "Рассрочка, кредит, гарантия, ТО — простые объяснения без перегруза цифрами в каждом посте.",
    },
    {
      title: "Реклама",
      description:
        "Таргет на интересы «электромобили», «авто», гео Ташкент и окрестности. Лиды на запись к менеджеру.",
    },
  ],
  servicesImageUrl: "/shared/services.png",
  servicesDescription:
    "Электромобиль покупают после доверия к бренду и салону. Мы показываем продукт, людей и процесс покупки без «пустого» глянца.",
  growthTool: {
    title: "От просмотра к записи в салон",
    description:
      "CTA на тест-драйв и консультацию, быстрый ответ менеджера в Direct — ключевая воронка.",
  },
  audienceImageUrl: "/shared/audience.png",
  audience: {
    primary: [
      "Покупатели авто 25–50",
      "Те, кто рассматривает первый электромобиль",
      "Семьи и бизнес на авто",
    ],
    secondary: ["Поклонники техники и экологичного трафика", "Корпоративные клиенты"],
  },
  rubrics: [
    { title: "Модели", description: "Характеристики и лучшие фишки.", imageUrl: "" },
    { title: "Тест-драйвы", description: "Отзывы и эмоции.", imageUrl: "" },
    { title: "Зарядка и эксплуатация", description: "Снимаем страхи новичков.", imageUrl: "" },
    { title: "Салон", description: "Локация, часы, команда.", imageUrl: "" },
    { title: "Покупка", description: "Этапы, документы, сроки.", imageUrl: "" },
    { title: "Сервис", description: "ТО и гарантия.", imageUrl: "" },
    { title: "Сравнения", description: "Комплектации и выгода.", imageUrl: "" },
    { title: "Новости бренда", description: "Акции и новинки линейки.", imageUrl: "" },
    { title: "Stories", description: "Охват и оперативные анонсы.", imageUrl: "" },
  ],
  positioning: {
    title: "Официальный опыт Leapmotor в Ташкенте",
    description:
      "Позиционируем дилерский центр как точку входа в бренд с прозрачными условиями и поддержкой после покупки.",
    images: [],
  },
  visuals: [],
  ads: [
    { title: "Лиды в салон", description: "Заявки на тест-драйв и консультацию." },
    { title: "Охват", description: "Узнаваемость моделей." },
    { title: "Ретаргет", description: "Догрев взаимодействовавших с Reels." },
  ],
  pricing: {
    amount: "12 000 000",
    currency: "сум",
    period: "месяц",
    team: ["SMM-стратег", "Видеограф", "Дизайнер", "Таргетолог", "Комьюнити"],
    deliverables: [
      { label: "Съёмки в салоне", value: "2–3 выезда" },
      { label: "Reels", value: "8–10" },
      { label: "Посты", value: "4–6" },
      { label: "Stories", value: "ежедневно" },
      { label: "Отчёт", value: "еженедельно" },
    ],
  },
};
