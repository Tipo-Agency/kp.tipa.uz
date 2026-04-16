# Руководство по созданию КП — для AI-ассистента

> Этот документ описывает архитектуру проекта и пошаговый процесс создания нового коммерческого предложения.
> Читай его перед тем, как создавать или редактировать КП.

---

## 1. Что такое этот проект

`kp.tipa.uz` — React-приложение на Vite + TypeScript + Tailwind CSS, развёрнутое на Vercel.
Каждое коммерческое предложение (КП) — это отдельная страница по URL `/{slug}`.

Данные хранятся в TypeScript-файлах (`.ts`), не в базе данных.
Рендер происходит на клиенте через React Router.

---

## 2. Типы КП и когда их использовать

| Тип | Файл типа | Когда использовать |
|-----|-----------|--------------------|
| SMM / Instagram | `ProposalData` | Продвижение в Instagram, ведение соцсетей |
| Сайт | `WebsiteProposalData` | Разработка или редизайн сайта |
| Telegram-бот | `TelegramBotProposalData` | Разработка бота в Telegram |
| Платформа/сервис | `PlatformProposalData` | SaaS, маркетплейс, мобильное приложение |
| Контекстная реклама | `ContextAdsProposalData` | Google/Яндекс реклама |
| Продакшн | `ProductionProposalData` | Фото меню, рилсы, видеосъёмки |
| Брендинг | `BrandingProposalData` | Логотип, фирменный стиль, брендбук |
| Автоматизация | `AutomationProposalData` | CRM, Telegram-боты, интеграции |
| Карты и SERM | `MapsSermProposalData` | 2GIS, Google Maps, управление репутацией |
| Мульти-КП | `MultiServiceProposalData` | Несколько направлений одному клиенту |

---

## 3. Пошаговое создание нового КП

### Шаг 1: Определить тип

Выбери подходящий тип из таблицы выше. Если клиенту нужно несколько направлений — используй `multi`.

### Шаг 2: Создать файл данных

Скопируй нужный шаблон из `proposals/template-*.ts` и переименуй:

```
proposals/template-smm.ts → proposals/client-name-smm.ts
proposals/template-production.ts → proposals/client-name-production.ts
proposals/template-multi.ts → proposals/client-name-multi.ts
```

**Правила именования slug:**
- Только латиница, цифры и дефисы
- Строчные буквы
- Описательный: `kyoto-uz-smm`, `nettare-production`, `ресторан-комплекс` → `restoran-kompleks`

**Обязательно обнови `createdAt`:**
```typescript
createdAt: "2026-04-13", // Дата отправки КП клиенту
```
Через 21 день ссылка автоматически покажет страницу истечения срока.

### Шаг 3: Заполнить данные клиента

Замени все плейсхолдеры `[В СКОБКАХ]` на реальные данные:

**Для SMM КП обязательные поля:**
- `clientName` — название клиента и сфера
- `hero.title` — заголовок (тема/угол КП)
- `hero.subtitle` — суть предложения в 2-3 предложениях
- `services` — 4 ключевых услуги с описаниями
- `audience.primary` — 3 основных сегмента ЦА
- `rubrics` — 4-8 рубрик контент-плана
- `positioning.title` — позиционирование в одной строке
- `pricing` — сумма, команда, состав работ

**Для Production/Branding/Automation/Maps:**
- `hook.title`, `hook.subtitle` — заголовок и подзаголовок
- `hook.arguments` — 3-5 ключевых тезисов (показываются как теги)
- Специфичные поля типа (packages, scope, solutions, platforms)
- `pricing` — стоимость и состав работ

### Шаг 4: Подготовить изображения (только для SMM)

**Блоки «Услуги» и «Аудитория» на странице SMM — всегда с фиксированными картинками агентства.**  
В данных указывай только:

- `servicesImageUrl: "/shared/services.png"`
- `audienceImageUrl: "/shared/audience.png"`

Файлы лежат в `public/shared/` (`services.png`, `audience.png`). Это единый визуальный стандарт: по одному кадру на блок, без подмены на фото клиента.

Клиентские и референсные кадры — в остальных полях: `positioning.images`, `rubricBlockImages`, `rubrics[].imageUrl`, `visuals` и т.д.

Создай папку `/public/proposals/{slug}/` с подпапками (для клиентского контента, не для двух блоков выше):
```
positioning/    — 4 фото блока позиционирования
rubrics/        — обложки рубрик (часто 3 кадра для шапки матрицы)
visuals/        — примеры контента, 6–14+ фото
audience/       — опционально: архив исходников (в макете блок «Аудитория» всё равно тянет /shared/audience.png)
services/       — опционально: архив исходников (блок «Услуги» — /shared/services.png)
```

**Не складывай клиентские jpg/png в корень `public/proposals/{slug}/`:** только в подпапки выше. В данных указывай пути вида `/proposals/{slug}/visuals/...`. Если в `visuals/` мало кадров для сетки, в массиве `visuals` в TS допускаются **повторы тех же URL** или повторное подключение кадров из `positioning/` и `rubrics/` — дублировать файлы на диске не обязательно.

Пути к файлам в `public/` должны совпадать с теми, что указаны в data-файле.

### Шаг 5: Зарегистрировать в index.ts

Добавь в `proposals/index.ts`:

```typescript
// 1. Импорт вверху файла
import { clientNameSmm } from "./client-name-smm";

// 2. Запись в объект PROPOSALS
"client-name-smm": clientNameSmm,
```

**Готово!** КП доступно по адресу `https://kp.tipa.uz/client-name-smm`

---

## 4. Мульти-КП (несколько направлений)

Используй, когда клиенту готовятся предложения по 2+ направлениям.

**Структура:**
```typescript
const multiProposal: MultiServiceProposalData = {
  type: "multi",
  clientName: "Название клиента",
  createdAt: "2026-04-13",

  tabs: [
    {
      id: "smm",            // уникальный ID вкладки
      label: "Instagram SMM",  // текст на кнопке вкладки
      serviceType: "smm",   // тип для иконки
      proposal: smmData,    // полный объект ProposalData
    },
    {
      id: "production",
      label: "Продакшн",
      serviceType: "production",
      proposal: productionData,
    },
  ],

  unifiedPricing: {
    title: "Комплексный пакет",
    services: [
      {
        name: "Instagram SMM",
        amount: "9 000 000",
        currency: "сум",
        period: "месяц",
        deliverables: [...],
      },
    ],
    total: {
      amount: "10 500 000",
      currency: "сум",
      period: "месяц",
      label: "Комплексная стоимость",
    },
    team: [...],
    conditions: [...],
  },
};
```

**Важно:** pricing внутри каждой вкладки скрывается автоматически — показывается только `unifiedPricing`.

---

## 5. Архивирование КП

Механизм работает автоматически:

1. Если в КП указан `createdAt` и прошло **более 21 дня** — ссылка показывает `ExpiredPage`
2. `ExpiredPage` содержит: сообщение об истечении срока + ссылки на Telegram и телефон
3. Старые КП **без** поля `createdAt` — не архивируются (обратная совместимость)

Чтобы продлить срок — обнови `createdAt` в файле данных.

---

## 6. Цветовая система направлений

Каждое направление имеет свой акцентный цвет:

| Направление | Цвет |
|-------------|------|
| SMM / Instagram | `#3337AD` (синий) |
| Сайт | `#0EA5E9` (голубой) |
| Продакшн | `#8B5CF6` (фиолетовый) |
| Брендинг | `#EC4899` (розовый) |
| Автоматизация | `#10B981` (зелёный) |
| Карты/SERM | `#F59E0B` (жёлтый) |
| Telegram-бот | `#3B82F6` (голубой) |
| Контекстная реклама | `#EF4444` (красный) |

---

## 7. Структура папок проекта

```
/
├── components/
│   ├── ProposalBlocks/     # SMM блоки (14 компонентов)
│   ├── WebsiteBlocks/      # Сайт блоки (9 компонентов)
│   ├── TelegramBotBlocks/  # Бот блоки (7 компонентов)
│   ├── PlatformBlocks/     # Платформа блоки (6 компонентов)
│   ├── ContextBlocks/      # Контекст блоки (4 компонента)
│   ├── ProductionBlocks/   # Продакшн блоки (4 компонента)
│   ├── BrandingBlocks/     # Брендинг блоки (4 компонента)
│   ├── AutomationBlocks/   # Автоматизация блоки (4 компонента)
│   ├── MapsBlocks/         # Карты/SERM блоки (4 компонента)
│   ├── UnifiedPricing/     # Единый блок цены для мульти-КП
│   └── UI/                 # ProposalTabs, Container, Typography
├── pages/
│   ├── ProposalPage.tsx    # Главный рендерер (все типы + мульти)
│   ├── ExpiredPage.tsx     # Страница истёкшего КП
│   ├── HomePage.tsx
│   └── NotFoundPage.tsx
├── proposals/
│   ├── index.ts            # Реестр всех КП + type guards + isProposalExpired
│   ├── template-smm.ts     # Шаблон SMM
│   ├── template-production.ts
│   ├── template-branding.ts
│   ├── template-automation.ts
│   ├── template-maps-serm.ts
│   ├── template-multi.ts   # Шаблон мульти-КП
│   └── [client-slug].ts    # Конкретные КП клиентов
├── types.ts                # Все TypeScript интерфейсы
└── public/
    ├── proposals/
    │   └── [slug]/         # Медиа-ассеты для каждого КП
    └── shared/             # Обязательные кадры для блоков «Услуги» и «Аудитория» (services.png, audience.png)
```

---

## 8. Проверочный чеклист перед публикацией

- [ ] Обновлён `createdAt` (сегодняшняя дата)
- [ ] Все `[ПЛЕЙСХОЛДЕРЫ]` заменены реальными данными
- [ ] Slug добавлен в `proposals/index.ts`
- [ ] Папка с медиа создана (для SMM)
- [ ] Для SMM: `servicesImageUrl` и `audienceImageUrl` — только `/shared/services.png` и `/shared/audience.png`
- [ ] Все пути к изображениям совпадают с реальными файлами
- [ ] КП открывается локально (`npm run dev`, `/{slug}`)
- [ ] `npm run build` выполняется без ошибок

---

## 9. Полезные команды

```bash
npm run dev      # Локальный сервер (порт 3000)
npm run build    # Сборка для продакшна
npm run push     # Git commit + push (auto-deploy на Vercel)
```

---

## 10. Телефон и Telegram в шаблонах

В `ExpiredPage.tsx` и ценовых блоках есть контакты агентства.
Телефон для обновления: `+998971234567` (замени на актуальный в `ExpiredPage.tsx`).
Telegram: `https://t.me/tipa_agency` (проверь актуальность).
