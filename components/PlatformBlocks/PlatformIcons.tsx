import React from "react";

const ACCENT = "#059669";
const iconClass = "w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0";
const stroke = 1.8;

/** Админка вендера — магазин/прилавок */
export const IconVendor: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`${iconClass} ${className ?? ""}`} style={{ color: ACCENT }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

/** Админка системы — шестерёнки/управление */
export const IconSystem: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`${iconClass} ${className ?? ""}`} style={{ color: ACCENT }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

/** Мобильное приложение */
export const IconMobile: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`${iconClass} ${className ?? ""}`} style={{ color: ACCENT }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

/** Веб */
export const IconWeb: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`${iconClass} ${className ?? ""}`} style={{ color: ACCENT }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

/** Telegram */
export const IconTelegram: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`${iconClass} ${className ?? ""}`} style={{ color: ACCENT }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

/** Личный кабинет — пользователь */
export const IconUser: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`${iconClass} ${className ?? ""}`} style={{ color: ACCENT }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

/** Доставка — грузовик */
export const IconDelivery: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`${iconClass} ${className ?? ""}`} style={{ color: ACCENT }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

/** Каталог — сетка/коробки */
export const IconCatalog: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`${iconClass} ${className ?? ""}`} style={{ color: ACCENT }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
);

/** Ювелирка */
export const IconJewelry: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`${iconClass} ${className ?? ""}`} style={{ color: ACCENT }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12h4l2-8 2 8h4l2-8 2 8h4" />
    <path d="M6 12v8M18 12v8M10 20h4" />
  </svg>
);

/** Еда */
export const IconFood: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`${iconClass} ${className ?? ""}`} style={{ color: ACCENT }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
  </svg>
);

/** Косметика */
export const IconCosmetics: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`${iconClass} ${className ?? ""}`} style={{ color: ACCENT }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4M6 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
    <path d="M6 8h12l-2-4H8L6 8z" />
  </svg>
);

/** Галочка для списка функционала */
export const IconCheck: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`w-4 h-4 flex-shrink-0 ${className ?? ""}`} style={{ color: ACCENT }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l5 5L20 7" />
  </svg>
);

export const MODULE_ICONS = [
  IconVendor,
  IconSystem,
  IconMobile,
  IconWeb,
  IconTelegram,
  IconUser,
  IconDelivery,
  IconCatalog,
] as const;

export const DIRECTION_ICONS: Record<string, React.FC<{ className?: string }>> = {
  ювелирка: IconJewelry,
  еда: IconFood,
  косметика: IconCosmetics,
};
