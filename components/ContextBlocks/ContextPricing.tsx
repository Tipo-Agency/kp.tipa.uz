import React from "react";
import { Container } from "../UI/Container";

interface Props {
  amount: string;
  currency: string;
  period: string;
  description: string;
  deliverables: { label: string; value: string }[];
}

export const ContextPricing: React.FC<Props> = ({ amount, currency, period, description, deliverables }) => {
  return (
    <section className="py-16 md:py-20 bg-slate-950">
      <Container>
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 md:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-emerald-400 uppercase mb-3">
                Пакет работ по контексту
              </p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl md:text-4xl font-semibold text-white">{amount}</span>
                <span className="text-sm text-slate-300">
                  {currency} / {period}
                </span>
              </div>
              <p className="text-sm md:text-base text-slate-300 max-w-xl">{description}</p>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:max-w-md w-full">
              {deliverables.map((item) => (
                <div
                  key={item.label}
                  className="bg-slate-900/80 border border-slate-800 rounded-2xl px-4 py-3 flex flex-col gap-1"
                >
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-400">
                    {item.label}
                  </p>
                  <p className="text-sm text-slate-100">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

