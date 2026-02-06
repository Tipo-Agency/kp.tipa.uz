import React from "react";
import { Container, Section } from "../UI/Container";
import { Heading2, BodyText } from "../UI/Typography";

interface PlatformDirectionsProps {
  title: string;
  items: string[];
}

const ACCENT = "#059669";

const icons: Record<string, string> = {
  ювелирка: "💎",
  еда: "🍽️",
  косметика: "✨",
};

export const PlatformDirections: React.FC<PlatformDirectionsProps> = ({ title, items }) => (
  <Section className="bg-slate-50 overflow-hidden">
    <Container>
      <div className="mb-8 sm:mb-10 md:mb-12 text-center max-w-3xl mx-auto px-2">
        <p className="font-bold tracking-widest uppercase mb-3 sm:mb-4 text-[10px] sm:text-xs" style={{ color: ACCENT }}>
          Направления
        </p>
        <Heading2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl">{title}</Heading2>
        <BodyText className="!text-base sm:!text-lg">
          Сервис готов под ключевые ниши: каталог, заказы и доставка работают для каждой из них.
        </BodyText>
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-3xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border-2 border-slate-200 hover:border-emerald-300 shadow-sm transition-all"
          >
            <span className="text-2xl sm:text-3xl">{icons[item.toLowerCase()] ?? "📦"}</span>
            <span className="text-lg sm:text-xl font-bold text-slate-900">{item}</span>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);
