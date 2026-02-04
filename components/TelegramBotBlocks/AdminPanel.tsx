import React from "react";
import { Container, Section } from "../UI/Container";
import { Heading2, BodyText } from "../UI/Typography";
import { IconSettings, IconUsers, IconList } from "./BotIcons";

interface AdminPanelProps {
  title: string;
  description?: string;
  items: string[];
}

const icons = [IconSettings, IconUsers, IconList];

export const AdminPanel: React.FC<AdminPanelProps> = ({ title, description, items }) => (
  <Section className="bg-slate-50 overflow-hidden">
    <Container>
      <div className="mb-8 sm:mb-10 md:mb-12 text-center max-w-3xl mx-auto px-2">
        <p className="text-[#0088CC] font-bold tracking-widest uppercase mb-3 sm:mb-4 text-[10px] sm:text-xs">
          Управление
        </p>
        <Heading2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl">{title}</Heading2>
        {description && (
          <BodyText className="!text-base sm:!text-lg">{description}</BodyText>
        )}
      </div>
      <div className="max-w-3xl mx-auto">
        <ul className="space-y-3 sm:space-y-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <li key={i} className="flex gap-4 sm:gap-5 items-start p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <span className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0088CC]/10 flex items-center justify-center">
                  <Icon />
                </span>
                <BodyText className="!mb-0 break-words">{item}</BodyText>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  </Section>
);
