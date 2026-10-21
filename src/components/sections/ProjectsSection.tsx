import Image from "next/image";
import { Section } from "@/components/sections/Section";
import type { NavItem, Project } from "@/content/types";

type ProjectsSectionProps = {
  projects: readonly Project[];
  navItem: NavItem;
};

function isExternal(href: string) {
  return href.startsWith("https://") || href.startsWith("http://");
}

export function ProjectsSection({ projects, navItem }: ProjectsSectionProps) {
  return (
    <Section id="projects" index={navItem.index} title={navItem.label}>
      {projects.length === 0 ? (
        <p className="text-text-2">Projects coming soon.</p>
      ) : (
        <ul className="flex flex-col gap-8">
          {projects.map((project) => (
            <li key={project.slug} className="flex flex-col gap-3">
              {project.image ? (
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={1200}
                  height={675}
                  className="h-auto w-full rounded-lg"
                />
              ) : null}
              <h3 className="text-xl text-cream">{project.title}</h3>
              <p className="font-mono text-sm text-muted">
                {project.year}
                {" · "}
                {project.role}
              </p>
              <p className="max-w-prose leading-7 text-text-2">{project.summary}</p>
              {project.stack.length > 0 ? (
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-surface px-3 py-1 text-sm text-cream"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="flex flex-wrap gap-4">
                {project.href ? (
                  <ProjectAnchor href={project.href}>View project</ProjectAnchor>
                ) : null}
                {project.repo ? (
                  <ProjectAnchor href={project.repo}>Source</ProjectAnchor>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}

function ProjectAnchor({ href, children }: { href: string; children: string }) {
  const external = isExternal(href);

  return (
    <a
      href={href}
      className="inline-flex min-h-11 items-center text-sm text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  );
}
