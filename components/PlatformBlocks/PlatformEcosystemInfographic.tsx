import React from "react";
import { Container, Section } from "../UI/Container";
import { Heading2, BodyText } from "../UI/Typography";
import { MODULE_ICONS, IconCheck } from "./PlatformIcons";

interface Item {
  name: string;
  description: string;
  features?: string[];
}

interface PlatformEcosystemInfographicProps {
  title: string;
  items: Item[];
}

const ACCENT = "#059669";

export const PlatformEcosystemInfographic: React.FC<PlatformEcosystemInfographicProps> = ({ title, items }) => (
  <Section className="bg-slate-50 overflow-hidden">
    <Container>
      <div className="mb-8 sm:mb-10 md:mb-12 text-center max-w-3xl mx-auto px-2">
        <p className="font-bold tracking-widest uppercase mb-3 sm:mb-4 text-[10px] sm:text-xs" style={{ color: ACCENT }}>
          Функционал по блокам
        </p>
        <Heading2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl">{title}</Heading2>
        <BodyText className="!text-base sm:!text-lg">
          Каждая единица экосистемы: что входит и как работает.
        </BodyText>
      </div>
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5">
        {items.map((item, i) => {
          const Icon = MODULE_ICONS[i % MODULE_ICONS.length];
          return (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-emerald-200 transition-all"
            >
              <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${ACCENT}18` }}>
                {Icon && <Icon className="w-8 h-8 sm:w-9 sm:h-9" />}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1" style={{ color: ACCENT }}>
                  {item.name}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mb-3">{item.description}</p>
                {item.features && item.features.length > 0 && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-700 text-sm">
                        <IconCheck className="mt-0.5 flex-shrink-0" />
                        <span className="break-words">{f}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  </Section>
);
