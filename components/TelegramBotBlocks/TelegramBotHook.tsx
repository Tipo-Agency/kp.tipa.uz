import React from "react";
import { Container } from "../UI/Container";
import { Heading1, Subheading, BodyText } from "../UI/Typography";

interface TelegramBotHookProps {
  clientName: string;
  title: string;
  subtitle: string;
  arguments?: string[];
}

export const TelegramBotHook: React.FC<TelegramBotHookProps> = ({
  clientName,
  title,
  subtitle,
  arguments: args = [],
}) => (
  <section className="min-h-[85vh] sm:min-h-[90vh] flex items-center pt-16 sm:pt-20 pb-10 sm:pb-12 relative bg-slate-50 overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0088CC]/10 hidden md:block" style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }} />
    <Container className="relative z-10">
      <div className="mb-8 sm:mb-12">
        <img
          src="/лого типа агентства.svg"
          alt="Типа агентство"
          className="h-8 sm:h-10 md:h-12 w-auto mb-8 sm:mb-10"
        />
        <p className="text-[#0088CC] font-bold tracking-widest uppercase mb-3 sm:mb-4 text-xs sm:text-sm">
          Telegram-бот
        </p>
        <Heading1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          {title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0088CC] to-[#229ED9]">
            для {clientName}
          </span>
        </Heading1>
        <Subheading className="max-w-2xl mb-6 sm:mb-8 !text-lg sm:!text-xl md:!text-2xl">
          {subtitle}
        </Subheading>
        {args.length > 0 && (
          <ul className="space-y-2 sm:space-y-3">
            {args.map((arg, i) => (
              <li key={i} className="flex items-start sm:items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0088CC] flex-shrink-0 mt-2 sm:mt-1.5" />
                <BodyText className="!text-base sm:!text-lg !mb-0">{arg}</BodyText>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Container>
  </section>
);
