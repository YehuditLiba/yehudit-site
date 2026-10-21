import { Section } from "@/components/sections/Section";
import type { AboutContent, NavItem } from "@/content/types";

type AboutSectionProps = {
  content: AboutContent;
  navItem: NavItem;
};

export function AboutSection({ content, navItem }: AboutSectionProps) {
  return (
    <Section id={content.id} index={navItem.index} title={navItem.label}>
      {content.paragraphs.map((paragraph) => (
        <p key={paragraph} className="max-w-prose text-base leading-7 text-text-2">
          {paragraph}
        </p>
      ))}
    </Section>
  );
}
