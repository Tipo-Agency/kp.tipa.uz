import React from "react";
import { Container, Section } from "../UI/Container";
import { Heading2, BodyText } from "../UI/Typography";
import { IconDesign, IconCode, IconMegaphone, IconPlug } from "./InfographicIcons";

interface WhatIncludedProps {
  design: string[];
  development: string[];
  marketing: string[];
  integrations: string[];
}

const modules: { key: "design" | "development" | "marketing" | "integrations"; title: string; Icon: React.FC }[] = [
  { key: "design", title: "Дизайн", Icon: IconDesign },
  { key: "development", title: "Разработка", Icon: IconCode },
  { key: "marketing", title: "Маркетинг", Icon: IconMegaphone },
  { key: "integrations", title: "Интеграции", Icon: IconPlug },
];

const Module: React.FC<{ title: string; items: string[]; Icon: React.FC }> = ({ title, items, Icon }) => (
  <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-[#3337AD]/20 transition-all w-full min-w-0 overflow-hidden">
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#3337AD]/10 flex items-center justify-center mb-4">
      <Icon />
    </div>
    <h3 className="text-base sm:text-lg font-bold text-[#3337AD] mb-3 sm:mb-4 break-words">{title}</h3>
    <ul className="space-y-2 sm:space-y-2.5 min-w-0">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-slate-700 text-sm sm:text-base min-w-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3337AD] flex-shrink-0 mt-1.5" />
          <span className="min-w-0 break-words">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const WhatIncluded: React.FC<WhatIncludedProps> = (props) => (
  <Section className="bg-slate-50 overflow-hidden">
    <Container>
      <div className="mb-8 sm:mb-10 md:mb-12 text-center max-w-3xl mx-auto px-2">
        <p className="text-[#3337AD] font-bold tracking-widest uppercase mb-3 sm:mb-4 text-[10px] sm:text-xs">Объём работ</p>
        <Heading2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Что входит в работу</Heading2>
        <BodyText className="!text-base sm:!text-lg">Модульный подход: дизайн, разработка, маркетинг и интеграции под ключ.</BodyText>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 w-full">
        {modules.map(({ key, title, Icon }) => (
          <Module key={key} title={title} items={props[key]} Icon={Icon} />
        ))}
      </div>
    </Container>
  </Section>
);
