import React from "react";
import { Container, Section } from "../UI/Container";
import { Heading2, BodyText } from "../UI/Typography";
import type { GrowthFunnelData } from "../../types";

interface Props {
  data: GrowthFunnelData;
}

const stageColors = [
  "from-[#3337AD] to-[#4B4FD9]",
  "from-[#2A2D8F] to-[#3337AD]",
  "from-[#1e215f] to-[#2A2D8F]",
];

const GrowthFunnelSection: React.FC<Props> = ({ data }) => {
  return (
    <Section className="relative overflow-hidden bg-[#060814] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(51,55,173,0.35),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(51,55,173,0.15),transparent_70%)]" />

      <Container className="relative z-10">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          {data.eyebrow ? (
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#8B8FF0]">{data.eyebrow}</p>
          ) : null}
          <Heading2 className="mb-5 text-white">{data.title}</Heading2>
          <BodyText className="text-slate-300">{data.intro}</BodyText>
        </div>

        <div className="mx-auto max-w-3xl">
          {data.stages.map((stage, idx) => (
            <React.Fragment key={idx}>
              <div className="mx-auto w-full" style={{ maxWidth: `${Math.max(72, 100 - idx * 14)}%` }}>
                <div
                  className={`relative overflow-hidden rounded-sm bg-gradient-to-br px-6 py-8 shadow-xl shadow-black/40 md:px-10 md:py-10 ${stageColors[idx] ?? stageColors[stageColors.length - 1]}`}
                  style={{
                    clipPath:
                      idx === 0
                        ? "polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%)"
                        : idx === data.stages.length - 1
                          ? "polygon(0% 0%, 100% 0%, 92% 100%, 8% 100%)"
                          : "polygon(0% 0%, 100% 0%, 97% 100%, 3% 100%)",
                  }}
                >
                  <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-lg font-black text-white md:right-8 md:top-8 md:h-14 md:w-14 md:text-2xl">
                    {idx + 1}
                  </div>
                  <p className="mb-2 pr-14 text-[10px] font-bold uppercase tracking-[0.25em] text-white/60 md:pr-20">
                    Уровень {idx + 1}
                  </p>
                  <h3 className="mb-3 pr-4 text-xl font-black tracking-tight text-white md:pr-20 md:text-3xl">
                    {stage.title}
                  </h3>
                  <p className="mb-5 text-sm font-medium leading-relaxed text-white/90 md:text-base">{stage.subtitle}</p>
                  <ul className="space-y-2.5 text-sm text-white/85">
                    {stage.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {idx < data.stages.length - 1 ? (
                <div className="flex justify-center py-2 md:py-3" aria-hidden>
                  <div className="h-10 w-px bg-gradient-to-b from-white/35 via-white/15 to-transparent" />
                </div>
              ) : null}
            </React.Fragment>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm md:mt-16 md:p-8">
          <p className="text-sm leading-relaxed text-slate-300 md:text-base">{data.conclusion}</p>
        </div>
      </Container>
    </Section>
  );
};

export default GrowthFunnelSection;
