
export interface Rubric {
  title: string;
  description: string;
  imageUrl: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface SalesTrack {
  title: string;
  description: string;
  items: string[];
}

export interface FunnelBlock {
  title: string;
  audience: string;
  steps: string[];
  hypotheses: string[];
  kpis: string[];
  budget: {
    minimum: string;
    optimal: string;
  };
}

/** Воронка SMM: охваты → вовлечённость → действие (инфографика на странице КП) */
export interface GrowthFunnelStage {
  title: string;
  subtitle: string;
  bullets: string[];
}

export interface GrowthFunnelData {
  eyebrow?: string;
  title: string;
  intro: string;
  stages: GrowthFunnelStage[];
  conclusion: string;
}

/** Схемы стратегии и воронок (опционально, для расширенных КП) */
export interface StrategyGrowthData {
  eyebrow: string;
  title: string;
  marketParagraphs: string[];
  roiTitle: string;
  roiSteps: { label: string; text: string }[];
  smmTitle: string;
  smmLevels: {
    level: number;
    title: string;
    description: string;
    bullets: string[];
  }[];
}

export interface CaseItem {
  title: string;
  category?: string;
  summary?: string;
  metrics?: string[];
  url?: string;
}

/** Один пункт из ТЗ клиента (номер, заголовок, подпункты) */
export interface TZRequirementItem {
  number: string;
  title: string;
  items: string[];
}

/** КП под разработку Telegram-бота */
export interface TelegramBotProposalData {
  type: "telegram-bot";
  clientName: string;
  /** ISO-дата создания КП. Через 21 день ссылка становится архивной */
  createdAt?: string;
  hook: {
    title: string;
    subtitle: string;
    arguments?: string[];
  };
  /** Функции бота для пользователя */
  features: {
    title: string;
    items: string[];
  };
  /** Админ-панель (если есть) или блок интеграции с системами учёта */
  adminPanel?: {
    title: string;
    description?: string;
    items: string[];
  };
  /** Блок «Подготовка интеграции» — показывается вместо админки, если админки нет */
  integration?: {
    title: string;
    description?: string;
    items: string[];
  };
  /** Сценарии использования (пошагово) */
  usageScenarios: {
    title: string;
    scenarios: { name: string; description: string }[];
  };
  /** Этапы разработки (инфографика) */
  stages: {
    title: string;
    steps: { name: string; description?: string }[];
  };
  pricing: {
    amount: string;
    currency: string;
    period: string;
    description: string;
    /** Подпись к блоку цены (например «Бот + подготовка интеграции с 1С») */
    cardSubtitle?: string;
    deliverables?: { label: string; value: string }[];
  };
}

/** КП под разработку сервиса/платформы: админки, приложения, доставка, каталог */
export interface PlatformProposalData {
  type: "platform";
  clientName: string;
  /** ISO-дата создания КП. Через 21 день ссылка становится архивной */
  createdAt?: string;
  hook: {
    title: string;
    subtitle: string;
    /** Выделенная часть заголовка (например «(для вашего проекта)») — показывается зелёным */
    titleHighlight?: string;
    arguments?: string[];
  };
  /** Модули сервиса с функционалом для инфографики */
  modules: {
    title: string;
    items: { name: string; description: string; features?: string[] }[];
  };
  /** Направления (например: ювелирка, еда, косметика) */
  directions: {
    title: string;
    items: string[];
  };
  stages: {
    title: string;
    steps: { name: string; description?: string }[];
  };
  pricing: {
    amount: string;
    currency: string;
    period: string;
    description: string;
    deliverables?: { label: string; value: string }[];
  };
}

/** КП под разработку/редизайн сайта (отдельная структура от SMM-страниц) */
export interface WebsiteProposalData {
  type: "website";
  clientName: string;
  /** ISO-дата создания КП. Через 21 день ссылка становится архивной */
  createdAt?: string;
  hook: {
    title: string;
    subtitle: string;
    arguments: string[];
  };
  painPoints: string[];
  solution: {
    title: string;
    description: string;
    scheme: string[];
  };
  concept: {
    title: string;
    description?: string;
    images?: string[];
  };
  whatIncluded: {
    design: string[];
    development: string[];
    marketing: string[];
    integrations: string[];
  };
  stages: {
    title: string;
    steps: { name: string; description?: string }[];
  };
  whyUs: {
    title: string;
    items: string[];
  };
  /** Учтённые требования по ТЗ клиента (опционально) */
  tzRequirements?: TZRequirementItem[];
  cases: CaseItem[];
  websitePricing: {
    main: {
      amount: string;
      currency: string;
      period: string;
      description: string;
    };
    options?: { label: string; amount: string; period: string }[];
  };
}

/** КП под контекстную рекламу (с доп. блоком по SMM) */
export interface ContextAdsProposalData {
  type: "context-ads";
  clientName: string;
  /** ISO-дата создания КП. Через 21 день ссылка становится архивной */
  createdAt?: string;
  hero: {
    title: string;
    subtitle: string;
  };
  /** География и сегменты, куда ведём трафик */
  markets: {
    title: string;
    regions: string[];
  };
  /** Описание продукта/проекта простыми словами */
  productSummary: {
    title: string;
    items: string[];
  };
  /** Стратегия контекстной рекламы */
  contextStrategy: {
    title: string;
    search: string[];
    performance: string[];
    remarketing: string[];
  };
  /** Работа с посадкой (сайтом) и предложениями */
  landingWork: {
    title: string;
    items: string[];
  };
  /** Аналитика, отчётность, гипотезы */
  analytics: {
    title: string;
    items: string[];
  };
  /** Небольшой блок доп. SMM-услуги с визуалом */
  smmAddon?: {
    title: string;
    description: string;
    visuals: string[];
    deliverables: { label: string; value: string }[];
  };
  pricing: {
    amount: string;
    currency: string;
    period: string;
    description: string;
    deliverables: { label: string; value: string }[];
  };
}

export interface ProposalData {
  clientName: string;
  /** ISO-дата создания КП. Через 21 день ссылка становится архивной */
  createdAt?: string;
  hero: {
    title: string;
    subtitle: string;
  };
  services: ServiceItem[];
  servicesImageUrl?: string;
  servicesDescription?: string;
  growthTool: {
    title: string;
    description: string;
  };
  /** Видео-пример (например, референс обзорного ролика с YouTube) */
  videoExample?: {
    title: string;
    description?: string;
    youtubeUrl: string;
  };
  audience: {
    primary: string[];
    secondary: string[];
  };
  audienceImageUrl?: string;
  rubricBlockImages?: string[];
  rubrics: Rubric[];
  positioning: {
    title: string;
    description: string;
    images: string[];
  };
  visuals: string[];
  ads: {
    title: string;
    description: string;
  }[];
  salesTracks?: SalesTrack[];
  /** Подзаголовок блока «Структура продаж» (если не задан — дефолтный текст) */
  salesStructureIntro?: string;
  funnels?: FunnelBlock[];
  /** Воронка охват → вовлечённость → целевое действие */
  growthFunnel?: GrowthFunnelData;
  /** Стратегия рынков + схемы воронок (каналы/ROI и SMM) */
  strategyGrowth?: StrategyGrowthData;
  cases?: CaseItem[];
  pricing: {
    amount: string;
    currency: string;
    period: string;
    team: string[];
    deliverables: {
      label: string;
      value: string;
    }[];
    notes?: string[];
    secondary?: { label: string; value: string }[];
    divisions?: {
      title: string;
      amount: string;
      deliverables: { label: string; value: string }[];
    }[];
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// НОВЫЕ ТИПЫ КП
// ─────────────────────────────────────────────────────────────────────────────

/** КП под продакшн: фото меню, рилсы, видео под проект */
export interface ProductionProposalData {
  type: "production";
  clientName: string;
  /** ISO-дата создания КП. Через 21 день ссылка становится архивной */
  createdAt?: string;
  hook: {
    title: string;
    subtitle: string;
    arguments?: string[];
  };
  /** Пакеты съёмки */
  packages: {
    title: string;
    items: {
      name: string;
      description: string;
      deliverables: string[];
      /** Иконка или emoji для визуала */
      icon?: string;
    }[];
  };
  /** Процесс работы: бриф → предпродакшн → съёмка → постобработка → сдача */
  process: {
    title: string;
    steps: { name: string; description?: string }[];
  };
  /** Примеры работ */
  portfolio?: string[];
  pricing: {
    amount: string;
    currency: string;
    period: string;
    deliverables: { label: string; value: string }[];
    packages?: {
      title: string;
      amount: string;
      deliverables: { label: string; value: string }[];
    }[];
    notes?: string[];
  };
}

/** КП под брендинг и фирменный стиль */
export interface BrandingProposalData {
  type: "branding";
  clientName: string;
  /** ISO-дата создания КП. Через 21 день ссылка становится архивной */
  createdAt?: string;
  hook: {
    title: string;
    subtitle: string;
    arguments?: string[];
  };
  /** Что входит в пакет брендинга */
  scope: {
    title: string;
    items: {
      name: string;
      description: string;
      subitems?: string[];
    }[];
  };
  /** Процесс работы */
  process: {
    title: string;
    steps: { name: string; description?: string }[];
  };
  /** Примеры работ */
  examples?: string[];
  pricing: {
    amount: string;
    currency: string;
    period: string;
    deliverables: { label: string; value: string }[];
    packages?: {
      title: string;
      amount: string;
      deliverables: { label: string; value: string }[];
    }[];
    notes?: string[];
  };
}

/** КП под автоматизацию бизнеса (CRM, боты, интеграции, воронки) */
export interface AutomationProposalData {
  type: "automation";
  clientName: string;
  /** ISO-дата создания КП. Через 21 день ссылка становится архивной */
  createdAt?: string;
  hook: {
    title: string;
    subtitle: string;
    arguments?: string[];
  };
  /** Решения и инструменты автоматизации */
  solutions: {
    title: string;
    items: {
      name: string;
      description: string;
      useCases?: string[];
    }[];
  };
  /** Этапы работы */
  stages: {
    title: string;
    steps: { name: string; description?: string }[];
  };
  pricing: {
    amount: string;
    currency: string;
    period: string;
    deliverables: { label: string; value: string }[];
    notes?: string[];
  };
}

/** КП под работу с картами (2GIS, Google, Yandex) и управление репутацией / SERM */
export interface MapsSermProposalData {
  type: "maps-serm";
  clientName: string;
  /** ISO-дата создания КП. Через 21 день ссылка становится архивной */
  createdAt?: string;
  hook: {
    title: string;
    subtitle: string;
    arguments?: string[];
  };
  /** Платформы, с которыми работаем */
  platforms: {
    title: string;
    items: { name: string; description: string }[];
  };
  /** Управление репутацией */
  reputation: {
    title: string;
    items: string[];
  };
  /** Аналитика и отчётность */
  analytics: {
    title: string;
    items: string[];
  };
  pricing: {
    amount: string;
    currency: string;
    period: string;
    deliverables: { label: string; value: string }[];
    notes?: string[];
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// МУЛЬТИ-КП (несколько направлений в одном предложении, вкладки)
// ─────────────────────────────────────────────────────────────────────────────

export type SingleProposalType =
  | ProposalData
  | WebsiteProposalData
  | TelegramBotProposalData
  | PlatformProposalData
  | ContextAdsProposalData
  | ProductionProposalData
  | BrandingProposalData
  | AutomationProposalData
  | MapsSermProposalData;

/** Одна вкладка в мульти-КП */
export interface ServiceTab {
  /** Идентификатор вкладки, e.g. "smm", "production" */
  id: string;
  /** Отображаемый заголовок вкладки */
  label: string;
  /** Тип направления для иконки/цвета */
  serviceType:
    | "smm"
    | "website"
    | "production"
    | "branding"
    | "automation"
    | "maps-serm"
    | "telegram-bot"
    | "context-ads";
  /** Данные предложения (полноценный KP без ценового блока — pricing игнорируется) */
  proposal: SingleProposalType;
}

/** Строка стоимости в едином блоке цены */
export interface UnifiedPricingService {
  name: string;
  amount: string;
  currency: string;
  period: string;
  deliverables?: { label: string; value: string }[];
}

/** Мульти-КП: несколько направлений в одном документе */
export interface MultiServiceProposalData {
  type: "multi";
  clientName: string;
  /** ISO-дата создания КП. Через 21 день ссылка становится архивной */
  createdAt?: string;
  tabs: ServiceTab[];
  /** Единый блок цены-конструктора под всеми вкладками */
  unifiedPricing: {
    title?: string;
    subtitle?: string;
    services: UnifiedPricingService[];
    /** Общая сумма за весь пакет (если считается) */
    total?: {
      amount: string;
      currency: string;
      period: string;
      label?: string;
    };
    team?: string[];
    conditions?: string[];
  };
}
