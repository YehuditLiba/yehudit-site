type SiteFooterProps = {
  text: string;
};

export function SiteFooter({ text }: SiteFooterProps) {
  return (
    <footer className="py-10">
      <p className="text-sm text-muted">{text}</p>
    </footer>
  );
}
