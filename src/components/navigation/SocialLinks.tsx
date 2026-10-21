import type { SocialLink } from "@/content/types";
import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";

const icons = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  whatsapp: WhatsAppIcon,
  email: EmailIcon,
} as const;

type SocialLinksProps = {
  links: readonly SocialLink[];
};

function isExternal(href: string) {
  return href.startsWith("https://") || href.startsWith("http://");
}

export function SocialLinks({ links }: SocialLinksProps) {
  const visible = links.filter((link) => link.href.trim().length > 0);

  if (visible.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Social">
      <ul className="flex flex-wrap gap-2">
        {visible.map((link) => {
          const Icon = icons[link.id];
          const external = isExternal(link.href);

          return (
            <li key={link.id}>
              <a
                href={link.href}
                className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Icon />
                {link.label}
                {external ? (
                  <span className="sr-only"> (opens in a new tab)</span>
                ) : null}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
