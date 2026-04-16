import React from "react";
import { Container, Section } from "../UI/Container";
import { Heading2, BodyText } from "../UI/Typography";

interface VideoExampleProps {
  title: string;
  youtubeUrl: string;
  description?: string;
}

function toEmbedUrl(url: string): string {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.replace("/", "");
      return `https://www.youtube.com/embed/${id}`;
    }
    if (parsed.hostname.includes("youtube.com")) {
      const id = parsed.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
  } catch {
    // Fall through to raw URL when parsing fails.
  }
  return url;
}

const VideoExample: React.FC<VideoExampleProps> = ({ title, youtubeUrl, description }) => {
  const embedUrl = toEmbedUrl(youtubeUrl);

  return (
    <Section className="bg-white">
      <Container>
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-[#3337AD] font-bold tracking-widest uppercase mb-4 text-xs">Формат контента</p>
          <Heading2 className="mb-4">{title}</Heading2>
          {description ? <BodyText>{description}</BodyText> : null}
        </div>

        <div className="rounded-2xl md:rounded-[2rem] overflow-hidden border border-slate-100 shadow-lg bg-slate-950">
          <div className="relative w-full pt-[56.25%]">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={embedUrl}
              title={title}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default VideoExample;
