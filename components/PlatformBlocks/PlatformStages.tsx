import React from "react";
import { Container, Section } from "../UI/Container";
import { Heading2, BodyText } from "../UI/Typography";

interface Step {
  name: string;
  description?: string;
}

interface PlatformStagesProps {
  title: string;
  steps: Step[];
}

const ACCENT = "#059669";

export const PlatformStages: React.FC<PlatformStagesProps> = ({ title, steps }) => (
  <Section className="bg-white overflow-hidden">
    <Container>
      <div className="mb-8 sm:mb-10 md:mb-12 text-center max-w-3xl mx-auto px-2">
        <p className="font-bold tracking-widest uppercase mb-3 sm:mb-4 text-[10px] sm:text-xs" style={{ color: ACCENT }}>
          Этапы разработки
        </p>
        <Heading2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{title}</Heading2>
        <BodyText className="!text-base sm:!text-lg">
          Прозрачные этапы: от ТЗ до запуска — вы видите прогресс и результат на каждом шаге.
        </BodyText>
      </div>
      <div className="max-w-3xl mx-auto relative">
        <div
          className="absolute left-5 sm:left-6 top-6 bottom-6 w-0.5 hidden sm:block opacity-60"
          style={{
            background: `linear-gradient(to bottom, ${ACCENT}, ${ACCENT}80, ${ACCENT}20)`,
          }}
        />
        <div className="space-y-4 sm:space-y-6">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4 sm:gap-6 items-start relative">
              <div
                className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full text-white font-black flex items-center justify-center flex-shrink-0 text-sm sm:text-base shadow-lg"
                style={{ backgroundColor: ACCENT }}
              >
                {i + 1}
              </div>
              <div className="flex-1 min-w-0 pt-0.5 sm:pt-1 overflow-hidden">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 break-words">{step.name}</h3>
                {step.description && (
                  <p className="text-slate-600 mt-1 text-sm sm:text-base break-words">{step.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </Section>
);
