import React from "react";
import { Container } from "../UI/Container";
import { Heading1, Subheading } from "../UI/Typography";

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
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <p className="text-xs font-semibold tracking-[0.25em] text-[#3337AD] uppercase mb-3">
          Контекстная реклама · {clientName}
        </p>
        <Heading1 className="mb-6 text-3xl md:text-5xl">
          {heroTitle}
        </Heading1>
        <Subheading className="max-w-3xl mb-10">{heroSubtitle}</Subheading>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-slate-900 mb-3">{marketsTitle}</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              {markets.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[7px] h-[3px] w-6 rounded-full bg-[#3337AD]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-slate-900 mb-3">{productTitle}</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              {productItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[7px] h-[3px] w-6 rounded-full bg-[#6366F1]" />
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

