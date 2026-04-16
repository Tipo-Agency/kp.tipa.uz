import React from "react";
import type { MultiServiceProposalData } from "../../types";

type UnifiedPricingData = MultiServiceProposalData["unifiedPricing"];

interface Props {
  data: UnifiedPricingData;
}

const SERVICE_COLORS: Record<string, string> = {
  smm: "#3337AD",
  website: "#0EA5E9",
  production: "#8B5CF6",
  branding: "#EC4899",
  automation: "#10B981",
  "maps-serm": "#F59E0B",
  "telegram-bot": "#3B82F6",
  "context-ads": "#EF4444",
};

export const UnifiedPricing: React.FC<Props> = ({ data }) => {
  const { title, subtitle, services, total, team, conditions } = data;

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Заголовок */}
        <div className="text-center mb-20">
          <p className="text-[#3337AD] font-bold tracking-[0.3em] uppercase mb-6 text-[10px]">
            Commercial Terms
          </p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900">
            {title || "Инвестиции в развитие"}
          </h2>
          {subtitle && (
            <p className="mt-6 text-slate-500 text-lg max-w-xl mx-auto">{subtitle}</p>
          )}
        </div>

        {/* Команда */}
        {team && team.length > 0 && (
          <div className="mb-10 p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
              Команда проекта
            </h3>
            <ul className="grid md:grid-cols-2 gap-x-10 gap-y-5">
              {team.map((member, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3337AD]" />
                  <span className="text-slate-700 font-semibold">{member}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Сервисы-конструктор */}
        <div className="bg-[#0A0C14] rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xs font-bold text-[#3337AD] uppercase tracking-widest mb-10">
              Пакет услуг
            </h3>

            <div className="grid gap-6 mb-10">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                    <h4 className="text-white font-bold text-xl">{service.name}</h4>
                    <div className="flex items-baseline gap-2 shrink-0">
                      <span className="text-3xl md:text-4xl font-black tracking-tighter text-white">
                        {service.amount}
                      </span>
                      <span className="text-white/40 text-sm">
                        {service.currency} / {service.period}
                      </span>
                    </div>
                  </div>

                  {service.deliverables && service.deliverables.length > 0 && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.deliverables.map((d, j) => (
                        <div key={j} className="border-b border-white/5 pb-3">
                          <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">
                            {d.label}
                          </p>
                          <p className="text-white font-semibold text-sm">{d.value}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Условия */}
            {conditions && conditions.length > 0 && (
              <div className="mb-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4">
                  Условия сотрудничества
                </p>
                <ul className="space-y-3">
                  {conditions.map((c, i) => (
                    <li key={i} className="flex gap-3 text-sm text-white/60">
                      <span className="text-[#3337AD] font-bold shrink-0">—</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Итог */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-8 mt-8 border-t border-white/5">
              {total ? (
                <div className="text-center lg:text-left">
                  <p className="text-white/30 text-[10px] uppercase tracking-widest mb-3">
                    {total.label || "Итоговая стоимость пакета"}
                  </p>
                  <div className="flex items-baseline gap-2 flex-wrap justify-center lg:justify-start">
                    <span className="text-5xl md:text-6xl font-black tracking-tighter text-white">
                      {total.amount}
                    </span>
                    <span className="text-white/40 text-lg">
                      {total.currency} / {total.period}
                    </span>
                  </div>
                </div>
              ) : (
                <div />
              )}

              <a
                href="https://t.me/tipa_agency"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto bg-[#3337AD] hover:bg-[#4348CD] text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-[#3337AD]/20 active:scale-95 text-center"
              >
                Принять предложение
              </a>
            </div>
          </div>

          {/* Декор */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3337AD] opacity-10 blur-[120px] pointer-events-none" />
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-300 text-[10px] uppercase tracking-[0.4em]">
            ТИПА АГЕНТСТВО • ПРЕДЛОЖЕНИЕ ДЕЙСТВИТЕЛЬНО В ТЕЧЕНИЕ 14 ДНЕЙ
          </p>
        </div>
      </div>
    </section>
  );
};
