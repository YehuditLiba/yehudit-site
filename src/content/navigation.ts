import type { NavItem, SectionId } from "./types";

const items = {
  about: { id: "about", index: "01", label: "About", href: "#about" },
  projects: {
    id: "projects",
    index: "02",
    label: "Projects",
    href: "#projects",
  },
  experience: {
    id: "experience",
    index: "03",
    label: "Experience",
    href: "#experience",
  },
  services: {
    id: "services",
    index: "04",
    label: "Services",
    href: "#services",
  },
  contact: {
    id: "contact",
    index: "05",
    label: "Contact",
    href: "#contact",
  },
} as const satisfies Record<SectionId, NavItem>;

export const navigation: readonly NavItem[] = [
  items.about,
  items.projects,
  items.experience,
  items.services,
  items.contact,
];

export function getNavItem(id: SectionId): NavItem {
  return items[id];
}
