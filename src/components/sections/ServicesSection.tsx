import { Section } from "@/components/sections/Section";
import type { NavItem, Service } from "@/content/types";

type ServicesSectionProps = {
  services: readonly Service[];
  navItem: NavItem;
};

export function ServicesSection({ services, navItem }: ServicesSectionProps) {
  return (
    <Section id="services" index={navItem.index} title={navItem.label}>
      <ul className="flex flex-col gap-6">
        {services.map((service) => (
          <li key={service.id} className="flex flex-col gap-2">
            <h3 className="text-xl text-cream">{service.title}</h3>
            <p className="max-w-prose leading-7 text-text-2">{service.summary}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
