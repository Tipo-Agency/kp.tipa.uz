import React from "react";
import { Container } from "../UI/Container";

interface Props {
  clientName: string;
  title: string;
  subtitle: string;
  arguments?: string[];
}

export const BrandingHook: React.FC<Props> = ({ clientName, title, subtitle, arguments: args }) => {
  return (
    <section className="bg-white pt-20 pb-16 md:pt-32 md:pb-24">
      <Container>
        <div className="max-w-4xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#EC4899] mb-8">
            {clientName}
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[0.95] mb-8">
            {title}
          </h1>
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            {subtitle}
          </p>
          {args && args.length > 0 && (
            <ul className="flex flex-wrap gap-3">
              {args.map((arg, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 bg-pink-50 text-pink-700 px-4 py-2 rounded-xl text-sm font-semibold"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0" />
                  {arg}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </section>
  );
};
