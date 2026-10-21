import { SectionNav } from "@/components/navigation/SectionNav";
import { SocialLinks } from "@/components/navigation/SocialLinks";
import { ButtonLink } from "@/components/ui/ButtonLink";
import type { NavItem, SiteInfo } from "@/content/types";

type SiteHeaderProps = {
  site: SiteInfo;
  navigation: readonly NavItem[];
};

export function SiteHeader({ site, navigation }: SiteHeaderProps) {
  return (
    <header className="flex flex-col gap-8 py-10 lg:sticky lg:top-0 lg:max-h-dvh lg:self-start lg:overflow-y-auto lg:py-16">
      <div className="flex max-w-full flex-col gap-3">
        <h1 className="font-script text-5xl leading-none text-cream sm:text-6xl">
          {site.name}
        </h1>
        <p className="text-lg text-gold">{site.role}</p>
        <p className="max-w-sm text-sm leading-6 text-text-2">{site.tagline}</p>
      </div>
      <div className="flex flex-col items-start gap-3">
        <ButtonLink href={site.primaryCta.href}>{site.primaryCta.label}</ButtonLink>
        {site.resume.available ? (
          <ButtonLink href={site.resume.href}>{site.resume.label}</ButtonLink>
        ) : null}
      </div>
      <SectionNav items={navigation} />
      <SocialLinks links={site.socials} />
    </header>
  );
}
