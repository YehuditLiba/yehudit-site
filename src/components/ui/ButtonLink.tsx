import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
};

export function ButtonLink({ href, children }: ButtonLinkProps) {
  return (
    <a
      href={href}
      className="inline-flex min-h-11 max-w-full items-center justify-center rounded-full bg-gold px-5 text-center text-sm font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
    >
      {children}
    </a>
  );
}
