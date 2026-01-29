import React from "react";
import { Container } from "../UI/Container";
import { Heading1, Subheading, BodyText } from "../UI/Typography";

interface WebsiteHookProps {
  clientName: string;
  title: string;
  subtitle: string;
  arguments: string[];
}

export const WebsiteHook: React.FC<WebsiteHookProps> = ({
  clientName,
  title,
  subtitle,
  arguments: args,
}) => (
  <section className="min-h-[85vh] sm:min-h-[90vh] flex items-center pt-16 sm:pt-20 pb-10 sm:pb-12 relative bg-slate-50 overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-[#3337AD]/5 hidden md:block" style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }} />
    <Container className="relative z-10">
      <div className="mb-8 sm:mb-12">
        <img
          src="/лого типа агентства.svg"
          alt="Типа агентство"
          className="h-8 sm:h-10 md:h-12 w-auto mb-8 sm:mb-10"
        />
        <p className="text-[#3337AD] font-bold tracking-widest uppercase mb-3 sm:mb-4 text-xs sm:text-sm">Редизайн и разработка сайта</p>
        <Heading1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          {title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3337AD] to-[#6366F1]">
            для {clientName}
          </span>
        </Heading1>
        <Subheading className="max-w-2xl mb-6 sm:mb-8 !text-lg sm:!text-xl md:!text-2xl">{subtitle}</Subheading>
        <ul className="space-y-2 sm:space-y-3">
          {args.map((arg, i) => (
            <li key={i} className="flex items-start sm:items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#3337AD] flex-shrink-0 mt-2 sm:mt-1.5" />
              <BodyText className="!text-base sm:!text-lg !mb-0">{arg}</BodyText>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </section>
);
