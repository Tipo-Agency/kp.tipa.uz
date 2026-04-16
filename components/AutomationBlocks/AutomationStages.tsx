import React from "react";
import { Container, Section } from "../UI/Container";

interface Step {
  name: string;
  description?: string;
}

interface Props {
  title: string;
  steps: Step[];
}

export const AutomationStages: React.FC<Props> = ({ title, steps }) => {
  return (
    <Section className="bg-white">
      <Container>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#10B981] mb-6">
          Этапы работы
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-16">
          {title}
        </h2>
        <div className="relative">
          {/* Вертикальная линия */}
          <div className="absolute left-5 top-5 bottom-5 w-px bg-emerald-100 hidden md:block" />
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 relative">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 relative z-10 border-4 border-white">
                  <span className="text-emerald-600 font-black text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 flex-1">
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{step.name}</h3>
                  {step.description && (
                    <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
