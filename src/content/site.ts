import type { SiteInfo } from "./types";

export const site = {
  name: "Yehudit",
  role: "Full-Stack Developer",
  tagline:
    "I build websites, systems and AI automations for businesses — with a designer's eye for detail.",
  description: "Portfolio of Yehudit, a full-stack developer.",
  primaryCta: {
    label: "Let's work together",
    href: "#contact",
  },
  resume: {
    label: "Resume",
    href: "/resume.pdf",
    available: false,
  },
  socials: [
    { id: "linkedin", label: "LinkedIn", href: "" },
    { id: "github", label: "GitHub", href: "https://github.com/YehuditLiba" },
    { id: "whatsapp", label: "WhatsApp", href: "" },
    { id: "email", label: "Email", href: "" },
    { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/972504144246" },
    { id: "email", label: "Email", href: "mailto:y4144246@gmail.com" },
  ],
  footer: "Designed & built by Yehudit · Next.js · Accessible by design",
} satisfies SiteInfo;
