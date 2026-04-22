import type { ProposalData } from "../types";
import { smmTripleFunnel } from "./smm-triple-funnel";

const B = "/proposals/corrado-uz";

const C_POSITIONING = [
  `${B}/positioning/3043fb73a6774ea0ff519834d09954bf.jpg`,
  `${B}/positioning/a2a459fe56a59833c4c759f1c9fa0539.jpg`,
  `${B}/positioning/a66013239f917657a8b264edaac27a93.jpg`,
  `${B}/positioning/c2afee972bb391add24e0fa3814a2fc3.jpg`,
];
const C_RUBRIC_BLOCKS = [
  `${B}/rubrics/374cadffbbb44adae4aa59f83af715ce.jpg`,
  `${B}/rubrics/3a6628921f4ed8e13090a1596083cfb1.jpg`,
  `${B}/rubrics/42acfcc48bd3b59c5b3dbf2316af6e7d.jpg`,
];
const C_VISUALS = [
  `${B}/visuals/13a0ba24486d7c0e1c9ef9941f553991.jpg`,
  `${B}/visuals/26449799482a4391d0a3c89f9359a40f.jpg`,
  `${B}/visuals/3a8667b75c5cbeb7dcf01f8b15919ea5.jpg`,
  `${B}/visuals/3b1db17efaca94b8d558e2574b73c210.jpg`,
  `${B}/visuals/40cb34e8b91c97e50d5736b91fa965db.jpg`,
  `${B}/visuals/5d54ffdb1315874df32fe9a489f5515d.jpg`,
  `${B}/visuals/73e132c80942b60fd0e15edbd322a1e5.jpg`,
  `${B}/visuals/96dda901b2f571f6e93267de2c4ae847.jpg`,
  `${B}/visuals/ae5f7ee89113a2e4bfe9d3b3f7c0660a.jpg`,
  `${B}/visuals/af85f1ec3a3fd6723296cdcd14ea7dd1.jpg`,
  `${B}/visuals/c0ca22851e43ffe818dd2fcdb14c2836.jpg`,
  `${B}/visuals/c205123c9e3ca49b150eb340803ec36a.jpg`,
];

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
  rubricBlockImages: C_RUBRIC_BLOCKS,
  rubrics: [
    { title: "Коллекции и серии", description: "Обзоры линеек, отличия, для каких задач подходит решение.", imageUrl: C_VISUALS[0] },
    { title: "Материалы и детали", description: "Крупный план фактуры, фурнитуры, механизмов — доказательство качества.", imageUrl: C_VISUALS[1] },
    { title: "Интерьеры с Corrado", description: "Готовые интерьеры и фрагменты проектов (с согласованием прав на фото).", imageUrl: C_VISUALS[2] },
    { title: "Шоурум и география", description: "Как найти, график, события на точке.", imageUrl: C_VISUALS[3] },
    { title: "Экспертиза", description: "Короткие разборы: как выбрать, на что смотреть, типичные ошибки при закупке.", imageUrl: C_VISUALS[4] },
    { title: "Закулисье бренда", description: "Поставки, новинки, команда — доверие к компании.", imageUrl: C_VISUALS[5] },
    { title: "Партнёры и объекты", description: "Совместные кейсы без нарушения NDA.", imageUrl: C_VISUALS[6] },
    { title: "Акции и сезонность", description: "Поводы для покупки и консультации.", imageUrl: C_VISUALS[7] },
    { title: "Связь с менеджером", description: "Понятные шаги: Direct, телефон, форма, визит.", imageUrl: C_VISUALS[8] },
  ],
  positioning: {
    title: "Corrado — узнаваемый стандарт в ленте",
    description:
      "Визуальный язык Instagram поддерживает позиционирование бренда: итальянское наследие качества в подаче, понятной для локального рынка. Меньше «шума», больше структуры и доказательств.",
    images: C_POSITIONING,
  },
  visuals: C_VISUALS,
  ads: [
    { title: "Таргет Meta", description: "Сегменты: ремонт, строительство, дизайн, недвижимость, премиум-интересы." },
    { title: "Ретаргет", description: "Возврат тех, кто смотрел каталог и Reels." },
    { title: "Лидогенерация", description: "Лид-формы и сообщения по согласованной воронке." },
  ],
  pricing: {
    amount: "15 000 000",
    currency: "сум",
    period: "месяц",
    team: ["SMM-стратег / менеджер проекта", "Видеограф / мобилограф", "Дизайнер", "Таргетолог", "Комьюнити-менеджер"],
    deliverables: [
      { label: "Reels", value: "8 в месяц" },
      { label: "Посты", value: "4 в месяц" },
      { label: "Stories", value: "60–90 в месяц" },
      { label: "Съёмки", value: "2 выезда в месяц" },
      { label: "Таргет", value: "настройка и ведение" },
      { label: "Отчёт", value: "ежемесячно" },
    ],
    notes: ["Бюджет на рекламу в кабинете Meta — отдельно.", "Объёмы и B2B-акценты уточняем на брифе."],
  },
};
