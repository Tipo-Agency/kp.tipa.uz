import React from "react";
import { Container, Section } from "../UI/Container";

interface PlatformItem {
  name: string;
  description: string;
}

interface Props {
  title: string;
  items: PlatformItem[];
}

const PLATFORM_ICONS: Record<string, string> = {
  "2GIS": "🗺",
  "Google Maps": "📍",
  "Google": "📍",
  "Yandex Maps": "🧭",
  "Yandex": "🧭",
  "Яндекс Карты": "🧭",
  "Яндекс": "🧭",
  "2ГИС": "🗺",
};

export const MapsPlatforms: React.FC<Props> = ({ title, items }) => {
  return (
    <Section className="bg-slate-50">
      <Container>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F59E0B] mb-6">
          Платформы
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-16">
          {title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const icon = PLATFORM_ICONS[item.name] || "📌";
            return (
              <div
                key={i}
                className="bg-white rounded-[2rem] p-8 border border-slate-100"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{item.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
