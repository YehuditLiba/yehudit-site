import { Character } from "@/components/character/Character";
import { ChatPanel } from "@/components/chat/ChatPanel";
import type { ChatContent } from "@/content/types";

type ChatHeroProps = {
  chat: ChatContent;
};

export function ChatHero({ chat }: ChatHeroProps) {
  return (
    <section
      aria-labelledby="assistant-heading"
      className="flex flex-col items-center gap-8 py-10 lg:min-h-dvh lg:gap-0 lg:py-8"
    >
      <div className="flex w-full flex-1 flex-col items-center justify-center gap-6 lg:flex-row lg:gap-8">
        <Character state="idle" />
        <ChatPanel
          heading={chat.heading}
          status={chat.status}
          message={chat.message}
        />
      </div>
      <a
        href={chat.scrollHref}
        className="inline-flex min-h-11 items-center px-3 font-mono text-sm text-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      >
        <span aria-hidden="true">{chat.scrollLabel}</span>
        <span className="sr-only">{chat.scrollAccessibleName}</span>
      </a>
    </section>
  );
}
