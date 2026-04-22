import type { ProposalData } from "../types";
import { smmTripleFunnel } from "./smm-triple-funnel";

const B = "/proposals/corrado-uz";

/** КП: SMM Instagram — Corrado Uzbekistan (@corrado.uz). */
export const corradoUz: ProposalData = {
  clientName: "Corrado Uzbekistan — Instagram",
  createdAt: "2026-04-19",
  hero: {
    title: "Instagram для бренда, который ассоциируется с качеством и стилем",
    subtitle:
      "Аккаунт @corrado.uz — витрина продуктов и ценностей бренда Corrado на рынке Узбекистана: визуальная подача, экспертные акценты и работа с запросами в Direct. Референс профиля: https://www.instagram.com/corrado.uz/",
  },
  services: [
    {
      title: "Стратегия контента",
      description:
        "Рубрики под ассортимент и УТП: коллекции, материалы, решения для дома и проекта. Связка с сезоном, акциями и запросами B2C/B2B по согласованию.",
    },
    {
      title: "Продакшн",
      description:
        "Съёмка продукта в шоуруме/на объекте, предметка, детали фурнитуры, панорамы пространств. Reels для охвата, карусели для внимательного изучения.",
    },
    {
      title: "Дизайн и айдентика в ленте",
      description:
        "Шаблоны под линейки, единая сетка, типографика и motion там, где это усиливает премиальность без перегруза.",
    },
    {
      title: "Таргет и аналитика",
      description:
        "Кампании на заинтересованную аудиторию: ремонт, строительство, дизайн, недвижимость. Отчёт по охватам, кликам и обращениям.",
    },
  ],
  servicesImageUrl: "/shared/services.png",
  servicesDescription:
    "Усиливаем восприятие Corrado как надёжного и современного бренда в digital: больше узнаваемости, структурированная подача каталога через контент и рост качественных обращений.",
  growthTool: {
    title: "От подписи «Corrado» к понятному следующему шагу",
    description:
      "Каждый блок контента заканчивается ясным CTA: где купить, как получить консультацию, какой артикул смотреть, куда написать менеджеру.",
  },
  growthFunnel: smmTripleFunnel,
  audienceImageUrl: "/shared/audience.png",
  audience: {
    primary: [
      "Частные клиенты, делающие ремонт или строительство дома",
      "Покупатели, ориентированные на бренд и долговечность решений",
      "Дизайнеры и прорабы как влиятельная аудитория",
    ],
    secondary: [
      "Девелоперы и подрядчики, выбирающие поставщика отделки и фурнитуры",
      "Аудитория премиального сегмента в Instagram",
    ],
  },
  rubricBlockImages: [`${B}/rubrics/block-01.jpg`, `${B}/rubrics/block-02.jpg`, `${B}/rubrics/block-03.jpg`],
  rubrics: [
    { title: "Коллекции и серии", description: "Обзоры линеек, отличия, для каких задач подходит решение.", imageUrl: `${B}/visuals/01.jpg` },
    { title: "Материалы и детали", description: "Крупный план фактуры, фурнитуры, механизмов — доказательство качества.", imageUrl: `${B}/visuals/02.jpg` },
    { title: "Интерьеры с Corrado", description: "Готовые интерьеры и фрагменты проектов (с согласованием прав на фото).", imageUrl: `${B}/visuals/03.jpg` },
    { title: "Шоурум и география", description: "Как найти, график, события на точке.", imageUrl: `${B}/visuals/04.jpg` },
    { title: "Экспертиза", description: "Короткие разборы: как выбрать, на что смотреть, типичные ошибки при закупке.", imageUrl: `${B}/visuals/05.jpg` },
    { title: "Закулисье бренда", description: "Поставки, новинки, команда — доверие к компании.", imageUrl: `${B}/visuals/06.jpg` },
    { title: "Партнёры и объекты", description: "Совместные кейсы без нарушения NDA.", imageUrl: `${B}/visuals/07.jpg` },
    { title: "Акции и сезонность", description: "Поводы для покупки и консультации.", imageUrl: `${B}/visuals/08.jpg` },
    { title: "Связь с менеджером", description: "Понятные шаги: Direct, телефон, форма, визит.", imageUrl: `${B}/visuals/09.jpg` },
  ],
  positioning: {
    title: "Corrado — узнаваемый стандарт в ленте",
    description:
      "Визуальный язык Instagram поддерживает позиционирование бренда: итальянское наследие качества в подаче, понятной для локального рынка. Меньше «шума», больше структуры и доказательств.",
    images: [`${B}/positioning/01.jpg`, `${B}/positioning/02.jpg`, `${B}/positioning/03.jpg`, `${B}/positioning/04.jpg`],
  },
  visuals: Array.from({ length: 12 }, (_, i) => `${B}/visuals/${String(i + 1).padStart(2, "0")}.jpg`),
  ads: [
    { title: "Таргет Meta", description: "Сегменты: ремонт, строительство, дизайн, недвижимость, премиум-интересы." },
    { title: "Ретаргет", description: "Возврат тех, кто смотрел каталог и Reels." },
    { title: "Лидогенерация", description: "Лид-формы и сообщения по согласованной воронке." },
  ],
  pricing: {
    amount: "12 000 000",
    currency: "сум",
    period: "месяц",
    team: ["SMM-стратег / менеджер проекта", "Видеограф / мобилограф", "Дизайнер", "Таргетолог", "Комьюнити-менеджер"],
    deliverables: [
      { label: "Reels", value: "8 в месяц" },
      { label: "Посты (карусели)", value: "6 в месяц" },
      { label: "Stories", value: "по согласованному графику" },
      { label: "Съёмки", value: "2 выезда в месяц" },
      { label: "Таргет", value: "настройка и ведение" },
      { label: "Отчёт", value: "ежемесячно" },
    ],
    notes: ["Бюджет на рекламу в кабинете Meta — отдельно.", "Объёмы и B2B-акценты уточняем на брифе."],
  },
};
