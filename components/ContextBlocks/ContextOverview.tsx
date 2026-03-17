import React from "react";
import { Container } from "../UI/Container";

interface Props {
  clientName: string;
  heroTitle: string;
  heroSubtitle: string;
  marketsTitle: string;
  markets: string[];
  productTitle: string;
  productItems: string[];
}

export const ContextOverview: React.FC<Props> = ({
  clientName,
  heroTitle,
  heroSubtitle,
  marketsTitle,
  markets,
  productTitle,
  productItems,
}) => {
  return (
    <section className="py-16 md:py-20 bg-slate-950 text-white">
      <Container>
        <p className="text-xs font-semibold tracking-[0.25em] text-emerald-400 uppercase mb-3">
          Контекстная реклама · {clientName}
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-5">{heroTitle}</h1>
        <p className="text-sm md:text-base text-slate-300 max-w-3xl mb-10">{heroSubtitle}</p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-emerald-300 mb-3">{marketsTitle}</h2>
            <ul className="space-y-2 text-sm text-slate-200">
              {markets.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[6px] h-[3px] w-6 rounded-full bg-emerald-400/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-emerald-300 mb-3">{productTitle}</h2>
            <ul className="space-y-2 text-sm text-slate-200">
              {productItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[6px] h-[3px] w-6 rounded-full bg-sky-400/80" />
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

