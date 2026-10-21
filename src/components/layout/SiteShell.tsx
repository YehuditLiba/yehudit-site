import type { ReactNode } from "react";

type SiteShellProps = {
  header: ReactNode;
  children: ReactNode;
};

export function SiteShell({ header, children }: SiteShellProps) {
  return (
    <div className="mx-auto w-full max-w-[77.5rem] px-4 lg:px-8">
      <div className="lg:grid lg:grid-cols-[minmax(17.5rem,22.5rem)_minmax(0,1fr)] lg:items-start lg:gap-16">
        {header}
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
