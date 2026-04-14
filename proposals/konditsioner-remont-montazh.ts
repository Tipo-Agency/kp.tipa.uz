import type { ProposalData } from "../types";

const K = "/proposals/konditsioner-remont-montazh";

/** КП: SMM для сервиса по ремонту и монтажу кондиционеров */
export const konditsionerRemontMontazh: ProposalData = {
  clientName: "Сервис: ремонт, монтаж и обслуживание кондиционеров",
  hero: {
    title: "Instagram, который приносит заявки на выезд",
    subtitle:
      "Продвижение сервиса кондиционеров: монтаж, демонтаж, чистка, заправка, ремонт. Контент строим на доверии: мастера, процесс, гарантии, до/после — и таргет на горячих клиентов в сезон.",
  },
  services: [
    {
      title: "Экспертный контент",
      description:
        "Простые объяснения: когда нужна чистка, как выбрать мощность, типичные поломки. Снижаем страх «развода» и повышаем доверие.",
    },
    {
      title: "Социальное доказательство",
      description:
        "Кейсы, фото работ, отзывы, выезды. Форматы «день мастера», объект за объектом.",
    },
    {
      title: "Сезонность и офферы",
      description:
        "Пик сезона, подготовка к лету, акции на обслуживание — контент и реклама синхронно.",
    },
    {
      title: "Лидогенерация",
      description:
        "Таргет на гео + интересы «ремонт кондиционера», ретаргет на просмотры. CTA: заявка, звонок, Telegram.",
    },
  ],
  servicesImageUrl: "/shared/services.png",
  servicesDescription:
    "В нише сервиса решает прозрачность: кто приедет, сколько стоит, что гарантируем. Показываем это в контенте системно.",
  growthTool: {
    title: "Доверие → заявка",
    description:
      "Мастер в кадре, понятные цены в сторис, быстрый ответ в Direct — конверсия выше, чем у «сухого» каталога.",
  },
  audienceImageUrl: "/shared/audience.png",
  audience: {
    primary: [
      "Владельцы квартир и домов",
      "Офисы и малый бизнес",
      "Те, кому нужен срочный ремонт или монтаж",
    ],
    secondary: ["Управляющие компании", "Ремонтные бригады как партнёры"],
  },
  rubricBlockImages: [
    `${K}/41cc214426dda86b54079e39e209438c.jpg`,
    `${K}/464fee0e50f18b822a4672fb51b7dabb.jpg`,
    `${K}/51d315586449cf0ba1678baf4e308f46.jpg`,
  ],
  rubrics: [
    {
      title: "Услуги и цены",
      description: "Что входит, ориентиры по стоимости.",
      imageUrl: `${K}/41cc214426dda86b54079e39e209438c.jpg`,
    },
    {
      title: "До / после",
      description: "Результат работ на объектах.",
      imageUrl: `${K}/464fee0e50f18b822a4672fb51b7dabb.jpg`,
    },
    {
      title: "Мастера",
      description: "Кто едет к клиенту — лица и экспертиза.",
      imageUrl: `${K}/51d315586449cf0ba1678baf4e308f46.jpg`,
    },
    {
      title: "Советы",
      description: "Уход за сплит-системой, типичные ошибки.",
      imageUrl: `${K}/234c5f2dc5a30be55d1f74204eefcacd.jpg`,
    },
    {
      title: "Сезон",
      description: "Напоминания о профилактике и заправке.",
      imageUrl: `${K}/2896b3960eebfc8bd682b045dcc41e6f.jpg`,
    },
    {
      title: "Отзывы",
      description: "Отзывы и скриншоты переписок.",
      imageUrl: `${K}/2fb31cf5559f0320b7aca0c0f6d6493d.jpg`,
    },
    {
      title: "Срочный выезд",
      description: "Как быстро приезжаем в городе.",
      imageUrl: `${K}/41cc214426dda86b54079e39e209438c.jpg`,
    },
    {
      title: "Гарантия",
      description: "На что даём гарантию и как оформляем.",
      imageUrl: `${K}/464fee0e50f18b822a4672fb51b7dabb.jpg`,
    },
    {
      title: "FAQ",
      description: "Ответы на частые вопросы в stories.",
      imageUrl: `${K}/51d315586449cf0ba1678baf4e308f46.jpg`,
    },
  ],
  positioning: {
    title: "Надёжный сервис кондиционеров",
    description:
      "Позиционируем вас как команду, которой можно доверить монтаж и ремонт без лишних рисков.",
    images: [
      `${K}/234c5f2dc5a30be55d1f74204eefcacd.jpg`,
      `${K}/2896b3960eebfc8bd682b045dcc41e6f.jpg`,
      `${K}/2fb31cf5559f0320b7aca0c0f6d6493d.jpg`,
      `${K}/34f1979002d416697a374b31873e0415.jpg`,
    ],
  },
  visuals: [
    `${K}/8bc3484298ef41ec6e8a104697c83c84.jpg`,
    `${K}/8c6449fbab374077a8f2a55daa6071b5.jpg`,
    `${K}/9b2cc5e3b35029f5fad148dd4742eb42.jpg`,
    `${K}/c1186fb80e11a9b796a6aec2cd4e3038.jpg`,
    `${K}/c7c25e74a4a4abe640090cdcd5e3a377.jpg`,
    `${K}/d812208a282491a541e6e7e5c82c73a5.jpg`,
    `${K}/dd1684aa9e63a1db3ad6ae5590b919f2.jpg`,
    `${K}/dd3828ffe79aaff697547b7b3bafa39c.jpg`,
    `${K}/e2583e7ee545be7d4e2fbae52279f4c3.jpg`,
    `${K}/e592f37e539850a7494f16bf88b68e3e.jpg`,
    `${K}/f0b7c3e863429808d1e570cf8cb78057.jpg`,
    `${K}/bez_nazvaniya_3.png`,
  ],
  ads: [
    { title: "Гео-таргет", description: "Реклама в зоне выезда мастеров." },
    { title: "Ремонт и монтаж", description: "Отдельные креативы под запросы." },
    { title: "Ретаргет", description: "Догрев взаимодействовавших с контентом." },
  ],
  pricing: {
    amount: "12 000 000",
    currency: "сум",
    period: "месяц",
    team: ["SMM-стратег", "Видеограф / мобилограф", "Дизайнер", "Таргетолог", "Комьюнити"],
    deliverables: [
      { label: "Съёмки", value: "2 выезда с мастерами" },
      { label: "Reels", value: "6–8" },
      { label: "Посты", value: "4–6" },
      { label: "Stories", value: "ежедневно" },
      { label: "Отчёт", value: "ежемесячно" },
    ],
  },
};
