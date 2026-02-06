import React from "react";
import { Container, Section } from "../UI/Container";
import { Heading2, BodyText } from "../UI/Typography";

interface PlatformModulesProps {
  title: string;
  items: { name: string; description: string }[];
}

const ACCENT = "#059669";

export const PlatformModules: React.FC<PlatformModulesProps> = ({ title, items }) => (
  <Section className="bg-white overflow-hidden">
    <Container>
      <div className="mb-8 sm:mb-10 md:mb-12 text-center max-w-3xl mx-auto px-2">
        <p className="font-bold tracking-widest uppercase mb-3 sm:mb-4 text-[10px] sm:text-xs" style={{ color: ACCENT }}>
          Что входит в сервис
        </p>
        <Heading2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{title}</Heading2>
        <BodyText className="!text-base sm:!text-lg">
          Единая экосистема: вендеры, клиенты, доставка и каталог — в одном решении.
        </BodyText>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 w-full max-w-6xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all w-full min-w-0 overflow-hidden"
          >
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 text-white font-black text-sm sm:text-base"
              style={{ backgroundColor: ACCENT }}
            >
              {i + 1}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3 break-words" style={{ color: ACCENT }}>
              {item.name}
            </h3>
            <BodyText className="!text-sm sm:!text-base !mb-0 break-words">{item.description}</BodyText>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);
