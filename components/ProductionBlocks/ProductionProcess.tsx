import React from "react";
import { Container, Section } from "../UI/Container";

interface Step {
  name: string;
  description?: string;
}

interface Props {
  title: string;
  steps: Step[];
  portfolio?: string[];
}

export const ProductionProcess: React.FC<Props> = ({ title, steps, portfolio }) => {
  return (
    <Section className="bg-white">
      <Container>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B5CF6] mb-6">
          Процесс
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-16">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6">
              <div className="w-10 h-10 rounded-2xl bg-violet-50 flex items-center justify-center shrink-0">
                <span className="text-violet-600 font-black text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{step.name}</h3>
                {step.description && (
                  <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {portfolio && portfolio.length > 0 && (
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">
              Примеры работ
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {portfolio.map((img, i) => (
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
