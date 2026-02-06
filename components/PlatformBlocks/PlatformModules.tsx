import React from "react";
import { Container, Section } from "../UI/Container";
import { Heading2, BodyText } from "../UI/Typography";
import { MODULE_ICONS, IconCheck } from "./PlatformIcons";

interface PlatformModulesProps {
  title: string;
  items: { name: string; description: string; features?: string[] }[];
}

const ACCENT = "#059669";

export const PlatformModules: React.FC<PlatformModulesProps> = ({ title, items }) => (
  <Section className="bg-white overflow-hidden">
    <Container>
      <div className="mb-8 sm:mb-10 md:mb-12 text-center max-w-3xl mx-auto px-2">
        <p className="font-bold tracking-widest uppercase mb-3 sm:mb-4 text-[10px] sm:text-xs" style={{ color: ACCENT }}>
          Инфографика
        </p>
        <Heading2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{title}</Heading2>
        <BodyText className="!text-base sm:!text-lg">
          Функционал каждой единицы экосистемы: от админок до каталога и доставки.
        </BodyText>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 w-full max-w-6xl mx-auto">
        {items.map((item, i) => {
          const Icon = MODULE_ICONS[i % MODULE_ICONS.length];
          return (
            <div
              key={i}
              className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all w-full min-w-0 overflow-hidden"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${ACCENT}18` }}>
                  {Icon && <Icon />}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 break-words" style={{ color: ACCENT }}>
                    {item.name}
                  </h3>
                  <BodyText className="!text-sm !mb-0 break-words mt-1">{item.description}</BodyText>
                </div>
              </div>
              {item.features && item.features.length > 0 && (
                <ul className="space-y-2 mt-3 pt-3 border-t border-slate-200">
                  {item.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-700 text-sm">
                      <IconCheck className="mt-0.5 flex-shrink-0" />
                      <span className="break-words">{f}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </Container>
  </Section>
);
