import type { ReactNode } from "react";
import type { SectionId } from "@/content/types";

type SectionProps = {
  id: SectionId;
  index: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, index, title, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-8 py-10"
    >
      <h2
        id={headingId}
        className="font-mono text-sm tracking-wide text-muted uppercase"
      >
        <span aria-hidden="true">{`LVL ${index} / `}</span>
        {title}
      </h2>
      <div className="mt-6 flex flex-col gap-4">{children}</div>
    </section>
  );
}
