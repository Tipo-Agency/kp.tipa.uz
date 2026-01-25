import React from "react";
import { Container, Section } from "../UI/Container";
import { Heading2, BodyText } from "../UI/Typography";
import type { CaseItem } from "../../types";

interface CasesProps {
  cases: CaseItem[];
}

const Cases: React.FC<CasesProps> = ({ cases }) => {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-[#3337AD] font-bold tracking-widest uppercase mb-4 text-xs">Доказательная база</p>
          <Heading2 className="mb-4">Кейсы</Heading2>
          <BodyText>Подберём 2–5 релевантных кейсов и добавим ссылки/цифры.</BodyText>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-[2rem] p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-2">
                    {c.category ?? `Кейс 0${i + 1}`}
                  </p>
                  <h3 className="text-2xl font-black tracking-tight text-slate-900">{c.title}</h3>
                </div>
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3337AD] font-bold text-sm whitespace-nowrap"
                  >
                    Смотреть →
                  </a>
                ) : null}
              </div>

              {c.summary ? <p className="text-slate-600 mt-4">{c.summary}</p> : null}

              {c.metrics && c.metrics.length > 0 ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {c.metrics.map((m, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm">
                      {m}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-slate-500 mt-6 text-sm">Ссылки и цифры добавим после согласования.</p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Cases;

