import { Section } from "@/components/sections/Section";
import type { ExperienceItem, NavItem } from "@/content/types";

type ExperienceSectionProps = {
  items: readonly ExperienceItem[];
  navItem: NavItem;
};

export function ExperienceSection({ items, navItem }: ExperienceSectionProps) {
  return (
    <Section id="experience" index={navItem.index} title={navItem.label}>
      <ul className="flex flex-col gap-8">
        {items.map((item) => (
          <li key={item.id} className="flex flex-col gap-2">
            <h3 className="text-xl text-cream">{item.role}</h3>
            <p className="text-cream">{item.organization}</p>
            <p className="font-mono text-sm text-muted">
              {item.start}
              {" — "}
              {item.end}
              {item.location ? ` · ${item.location}` : ""}
            </p>
            <p className="max-w-prose leading-7 text-text-2">{item.summary}</p>
            {item.highlights.length > 0 ? (
              <ul className="list-disc ps-5 text-text-2">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="leading-7">
                    {highlight}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}
