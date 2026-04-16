import React from "react";
import { Container, Section } from "../UI/Container";

interface SolutionItem {
  name: string;
  description: string;
  useCases?: string[];
}

interface Props {
  title: string;
  items: SolutionItem[];
}

export const AutomationSolutions: React.FC<Props> = ({ title, items }) => {
  return (
    <Section className="bg-slate-50">
      <Container>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#10B981] mb-6">
          Решения
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-16">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-[2rem] p-8 border border-slate-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <span className="text-emerald-600 font-black text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 leading-tight pt-1">
                  {item.name}
                </h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-4 pl-14">
                {item.description}
              </p>
              {item.useCases && item.useCases.length > 0 && (
                <ul className="pl-14 space-y-1.5">
                  {item.useCases.map((uc, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1 h-1 rounded-full bg-emerald-300 shrink-0" />
                      {uc}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
