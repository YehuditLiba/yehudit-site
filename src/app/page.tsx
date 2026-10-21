import { ChatHero } from "@/components/chat/ChatHero";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import {
  about,
  chat,
  contact,
  experience,
  getNavItem,
  navigation,
  projects,
  services,
  site,
} from "@/content";

export default function Home() {
  return (
    <SiteShell header={<SiteHeader site={site} navigation={navigation} />}>
      <main id="main" tabIndex={-1} className="pb-4">
        <ChatHero chat={chat} />
        <AboutSection content={about} navItem={getNavItem("about")} />
        <ProjectsSection projects={projects} navItem={getNavItem("projects")} />
        <ExperienceSection
          items={experience}
          navItem={getNavItem("experience")}
        />
        <ServicesSection services={services} navItem={getNavItem("services")} />
        <ContactSection content={contact} navItem={getNavItem("contact")} />
      </main>
      <SiteFooter text={site.footer} />
    </SiteShell>
  );
}
