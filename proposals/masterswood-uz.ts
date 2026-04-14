import type { ProposalData } from "../types";
import { smmTripleFunnel } from "./smm-triple-funnel";

const B = "/proposals/masterswood-uz";
const m = (p: string) => `${B}/${p}`;

/** КП: SMM для Masters Wood — столярка, мебель и изделия из дерева (Узбекистан). */
export const masterswoodUz: ProposalData = {
  clientName: "Masters Wood — мебель и столярка из дерева",
  hero: {
    title: "Instagram, который продаёт текстуру дерева и доверие к мастерской",
    subtitle:
      "Задача — показать качество материалов, точность работы и человеческий подход: от замера до монтажа. Рост охватов, вовлечённости и заявок в Direct без дешёвого хайпа.",
  },
  services: [
    {
      title: "Визуал и узнаваемость",
      description:
        "Единая эстетика ленты: крупные планы фактуры дерева, свет, геометрия, кухни, шкафы, мебель на заказ. Reels — процесс, детали, до/после.",
    },
    {
      title: "Экспертиза и снятие возражений",
      description:
        "Породы дерева, фурнитура, сроки, этапы производства, доставка и монтаж. Коротко и по делу — чтобы снизить страх «куплю не то».",
    },
    {
      title: "Ассортимент и сезонность",
      description:
        "Кухни, гардеробные, столы, двери, декор — подборки по задаче и бюджету. Понятные офферы без агрессивного дискаунт-хайпа.",
    },
    {
      title: "Продвижение",
      description:
        "Таргет на интересы интерьер, ремонт, мебель, загородный дом; ретаргет на просмотры Reels и каруселей. Интеграции с блогерами — отдельный бюджет.",
    },
  ],
  servicesImageUrl: "/shared/services.png",
  servicesDescription:
    "Ниже — матрица рубрик и кадры с производства и объектов: фактура, готовые решения и процесс работы мастерской.",
  growthTool: {
    title: "От лайка к сообщению в Direct",
    description:
      "Скрипты на типовые вопросы (сроки, материалы, замер, доставка), быстрые ответы в сторис. Меньше потерь на этапе «напишу позже».",
  },
  growthFunnel: smmTripleFunnel,
  audienceImageUrl: "/shared/audience.png",
  audience: {
    primary: [
      "Те, кто делает ремонт или обновляет интерьер",
      "Семьи, которые ищут мебель на заказ под размеры и стиль",
      "Владельцы квартир и домов, которые ценят качество и долговечность",
    ],
    secondary: [
      "Дизайнеры интерьера и прорабы как рефереры",
      "Коммерческие объекты: кафе, офисы, малый бизнес",
    ],
  },
  rubricBlockImages: [
    m("visuals/f16f1bd449899777bf18714eb6cb3df3.webp"),
    m("visuals/de6876610c7d2662e39a29779194ee03.webp"),
    m("positioning/videoframe_20637.png"),
  ],
  rubrics: [
    {
      title: "Кухни и гардеробные",
      description: "Кейсы, фурнитура, сценарии хранения, фото готовых объектов.",
      imageUrl: m("visuals/8031ab67f0118bd0804ff2e9eee3abb5.jpg"),
    },
    {
      title: "Материалы и фактура",
      description: "Массив, шпон, сравнения, уход — без перегруза терминами.",
      imageUrl: m("rubrics/279bad6c3cab530af9142b048234989e.jpg"),
    },
    {
      title: "Производство и цех",
      description: "Честный закулисье: станки, руки мастеров, контроль качества.",
      imageUrl: m("rubrics/videoframe_4059.png"),
    },
    {
      title: "Замер и проект",
      description: "Как проходит от первого контакта до согласования.",
      imageUrl: m("visuals/067f24ca09f575343df9c6baa41f183f.jpg"),
    },
    {
      title: "Сроки и этапы",
      description: "Прозрачный таймлайн без обещаний «за три дня всё».",
      imageUrl: m("visuals/63e993c18a40fcb898efa911320d99fa.jpg"),
    },
    {
      title: "Отзывы и реальные объекты",
      description: "Работы с согласия клиентов, истории заказов.",
      imageUrl: m("visuals/a0bbff10d7867436e6cdb41eb9a6cc06.jpg"),
    },
    {
      title: "Доставка и монтаж",
      description: "Понятные условия по городу и регионам.",
      imageUrl: m("rubrics/b8438155a2edee8d676927185d73d3bd.jpg"),
    },
    {
      title: "Идеи для интерьера",
      description: "Подборки под стиль: сканди, минимализм, классика.",
      imageUrl: m("visuals/6d451241d2322245af11848d09c79e5c.jpg"),
    },
    {
      title: "FAQ",
      description: "Ответы в сторис: оплата, гарантия, габариты, индивидуальный заказ.",
      imageUrl: m("visuals/f3acc52e703c6b5d7cc7a290533ea77a.jpg"),
    },
  ],
  positioning: {
    title: "Masters Wood — мебель и столярка с характером",
    description:
      "Позиционируем мастерскую как место, где слышат задачу клиента и доводят до результата: аккуратно, в срок, с уважением к материалу.",
    images: [
      m("positioning/d694fffc6fed11c3c6334d8e39473eaf.jpg"),
      m("positioning/e8a643ef8e21fa34e1737b31ce1d84d2.jpg"),
      m("positioning/56950c370ba9008b4f08552a51381b9a.jpg"),
      m("visuals/fc3e4550ec85d4a999b3223c6466b492.jpg"),
    ],
  },
  /** Нижняя сетка (VisualGrid): только `visuals/`, без пересечения с рубриками/позиционированием. Минимум 6 кадров. */
  visuals: [
    m("visuals/4cd1edddb4b560bc9cd7b2d0d2be91a1.jpg"),
    m("visuals/85a3a99cb642353554215619f61ed6a0.jpg"),
    m("visuals/f16894b0c134543adcf2e45041092a7f.jpg"),
    m("visuals/249606daa69ea29b045d2fd7319d3fdb.jpg"),
    m("visuals/20b9189d2993870393396989388c466e.jpg"),
    m("visuals/5543e73f1ee66d10f456ea8c75f820b3.jpg"),
    m("visuals/17772d69004e735d4c4d240cd5f41e57.jpg"),
    m("visuals/83a4232e1ba5d00dc10dd098494cf11a.jpg"),
    m("visuals/11a653e63604d2b23e88a38b6deb6844.jpg"),
    m("visuals/3052ada3dd98d22000801df81d95f4b9.webp"),
    m("visuals/78086fa389280788e9d704cac5213e50.jpg"),
    m("visuals/6017e8a01d49be2c6277b45c4a639fc3.webp"),
  ],
  ads: [
    {
      title: "Таргет Meta",
      description:
        "Интересы ремонт, интерьер, мебель на заказ; ретаргет на взаимодействия. Бюджет на рекламу — отдельно.",
    },
    {
      title: "Блогеры и коллаборации",
      description:
        "Подбор микро- и мидл-инфлюенсеров под эстетику бренда; бриф и контроль сообщений. Оплата — отдельной строкой.",
    },
    {
      title: "Связка с органикой",
      description:
        "Реклама усиливает то, что уже работает в ленте: не ведём трафик в «пустой» профиль.",
    },
  ],
  pricing: {
    amount: "12 500 000",
    currency: "сум",
    period: "месяц",
    team: ["SMM-стратег", "Моушн / Reels", "Дизайнер", "Таргетолог", "Комьюнити"],
    deliverables: [
      { label: "Reels", value: "8–10" },
      { label: "Карусели", value: "4–6" },
      { label: "Stories", value: "60–90 / мес по графику" },
      { label: "Аккаунт", value: "1 Instagram" },
      { label: "Отчёт", value: "ежемесячно" },
    ],
    notes: [
      "Стоимость — за один аккаунт в месяц. Бюджет таргета и интеграции с блогерами оплачиваются отдельно.",
    ],
  },
};
