import type { NavItem } from "@/content/types";

type SectionNavProps = {
  items: readonly NavItem[];
};

export function SectionNav({ items }: SectionNavProps) {
  return (
    <nav aria-label="Sections">
      <ul className="flex flex-col">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className="inline-flex min-h-11 items-center gap-3 font-mono text-sm tracking-wide text-cream uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <span className="text-gold">{item.index}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
