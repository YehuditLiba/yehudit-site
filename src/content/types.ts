export type SectionId =
  | "about"
  | "projects"
  | "experience"
  | "services"
  | "contact";

export type Cta = {
  label: string;
  href: string;
};

export type SocialId = "linkedin" | "github" | "whatsapp" | "email";

export type SocialLink = {
  id: SocialId;
  label: string;
  href: string;
};

export type SiteInfo = {
  name: string;
  role: string;
  tagline: string;
  description: string;
  primaryCta: Cta;
  resume: Cta & { available: boolean };
  socials: readonly SocialLink[];
  footer: string;
};

export type NavItem = {
  id: SectionId;
  index: string;
  label: string;
  href: `#${SectionId}`;
};

export type AboutContent = {
  id: "about";
  levelLabel: string;
  paragraphs: readonly string[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  year: string;
  stack: readonly string[];
  href?: string;
  repo?: string;
  image?: { src: string; alt: string };
};

export type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  location?: string;
  start: string;
  end: string;
  summary: string;
  highlights: readonly string[];
};

export type Service = {
  id: string;
  title: string;
  summary: string;
};

export type ContactContent = {
  id: "contact";
  levelLabel: string;
  intro: string;
};

export type CharacterState = "idle" | "typing";

export type ChatContent = {
  heading: string;
  status: string;
  message: string;
  scrollLabel: string;
  scrollAccessibleName: string;
  scrollHref: "#about";
};
