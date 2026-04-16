import React from "react";
import { Container, Section } from "../UI/Container";

interface PackageItem {
  name: string;
  description: string;
  deliverables: string[];
  icon?: string;
}

interface Props {
  title: string;
  items: PackageItem[];
}

export const ProductionPackages: React.FC<Props> = ({ title, items }) => {
  return (
    <Section className="bg-slate-50">
      <Container>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B5CF6] mb-6">
          Пакеты
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-16">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-[2rem] p-8 border border-slate-100 hover:shadow-xl hover:shadow-violet-100 transition-all"
            >
              {item.icon && (
                <div className="text-4xl mb-5">{item.icon}</div>
              )}
              <h3 className="text-xl font-black text-slate-900 mb-3">{item.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              <ul className="space-y-2">
                {item.deliverables.map((d, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
