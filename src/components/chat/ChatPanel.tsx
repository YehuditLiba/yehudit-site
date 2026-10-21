type ChatPanelProps = {
  heading: string;
  status: string;
  message: string;
};

export function ChatPanel({ heading, status, message }: ChatPanelProps) {
  return (
    <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-5">
      <h2 id="assistant-heading" className="text-lg text-cream">
        {heading}
      </h2>
      <p className="mt-1 flex items-center gap-2 text-sm text-muted">
        <span aria-hidden="true" className="size-2 rounded-full bg-gold" />
        {status}
      </p>
      <div className="mt-4 rounded-2xl bg-cream px-4 py-3 text-ink">
        <p>{message}</p>
      </div>
    </div>
  );
}
