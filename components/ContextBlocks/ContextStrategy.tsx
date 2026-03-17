import React from "react";
import { Container } from "../UI/Container";

interface ColumnProps {
  title: string;
  items: string[];
  accent?: "emerald" | "sky" | "amber";
}

const Column: React.FC<ColumnProps> = ({ title, items, accent = "emerald" }) => {
  const accentClass =
    accent === "sky" ? "bg-sky-400/90" : accent === "amber" ? "bg-amber-400/90" : "bg-emerald-400/90";

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className={`h-6 w-6 rounded-full ${accentClass}`} />
        <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-200">{title}</h3>
      </div>
      <ul className="space-y-2 text-sm text-slate-200">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-[6px] h-[3px] w-4 rounded-full bg-slate-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface Props {
  title: string;
  search: string[];
  performance: string[];
  remarketing: string[];
  landingTitle: string;
  landingItems: string[];
  analyticsTitle: string;
  analyticsItems: string[];
}

export const ContextStrategy: React.FC<Props> = ({
  title,
  search,
  performance,
  remarketing,
  landingTitle,
  landingItems,
  analyticsTitle,
  analyticsItems,
}) => {
  return (
    <section className="py-16 md:py-20 bg-slate-950">
      <Container>
        <h2 className="text-lg md:text-xl font-semibold text-white mb-6">{title}</h2>
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Column title="Поиск" items={search} accent="emerald" />
          <Column title="Performance / дисплей" items={performance} accent="sky" />
          <Column title="Ремаркетинг" items={remarketing} accent="amber" />
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-emerald-300 mb-3">{landingTitle}</h3>
            <ul className="space-y-2 text-sm text-slate-200">
              {landingItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[6px] h-[3px] w-4 rounded-full bg-emerald-400/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-emerald-300 mb-3">{analyticsTitle}</h3>
            <ul className="space-y-2 text-sm text-slate-200">
              {analyticsItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[6px] h-[3px] w-4 rounded-full bg-sky-400/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

