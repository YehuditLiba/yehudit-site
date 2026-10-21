import { Section } from "@/components/sections/Section";
import type { ContactContent, NavItem } from "@/content/types";

type ContactSectionProps = {
  content: ContactContent;
  navItem: NavItem;
};

export function ContactSection({ content, navItem }: ContactSectionProps) {
  return (
    <Section id={content.id} index={navItem.index} title={navItem.label}>
      <p className="max-w-prose text-base leading-7 text-text-2">{content.intro}</p>
    </Section>
  );
}
