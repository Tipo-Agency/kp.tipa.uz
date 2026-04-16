import React from "react";
import { Container, Section } from "../UI/Container";

interface Step {
  name: string;
  description?: string;
}

interface Props {
  title: string;
  steps: Step[];
  examples?: string[];
}

export const BrandingProcess: React.FC<Props> = ({ title, steps, examples }) => {
  return (
    <Section className="bg-white">
      <Container>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#EC4899] mb-6">
          Как работаем
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-16">
          {title}
        </h2>

        {/* Шаги — горизонтальная дорожка */}
        <div className="relative mb-16">
          <div className="hidden md:block absolute top-5 left-10 right-10 h-px bg-slate-200" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="w-10 h-10 rounded-full bg-pink-100 border-4 border-white shadow flex items-center justify-center mb-4 relative z-10">
                  <span className="text-pink-600 font-black text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1">{step.name}</h3>
                {step.description && (
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {examples && examples.length > 0 && (
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">
              Примеры работ
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {examples.map((img, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl overflow-hidden bg-slate-100"
                >
                  <img
                    src={img}
                    alt={`Пример ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};
