import type { CharacterState } from "@/content/types";

type CharacterProps = {
  state: CharacterState;
};

export function Character({ state }: CharacterProps) {
  return (
    <svg
      viewBox="0 0 300 300"
      aria-hidden="true"
      className="character-float size-30 shrink-0 lg:size-40"
    >
      <defs>
        <radialGradient id="character-body" cx="35%" cy="28%" r="85%">
          <stop offset="0" stopColor="var(--color-char-light)" />
          <stop offset="0.6" stopColor="var(--color-cream)" />
          <stop offset="1" stopColor="var(--color-char-shade)" />
        </radialGradient>
      </defs>
      <path
        d="M200 204 q 10 28 -16 52"
        fill="none"
        stroke="var(--color-char-tail)"
        strokeWidth="26"
        strokeLinecap="round"
      />
      <rect
        x="48"
        y="60"
        width="204"
        height="160"
        rx="74"
        fill="url(#character-body)"
      />
      <ellipse
        cx="102"
        cy="92"
        rx="30"
        ry="13"
        fill="var(--color-char-light)"
        opacity="0.6"
        transform="rotate(-20 102 92)"
      />
      <circle cx="150" cy="52" r="8" fill="var(--color-gold)" />
      {state === "idle" ? (
        <>
          <polyline
            points="122,120 104,138 122,156"
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="178,120 196,138 178,156"
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M134 172 q 16 14 32 0"
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <circle cx="116" cy="142" r="11" fill="var(--color-ink)" />
          <circle cx="150" cy="142" r="11" fill="var(--color-ink)" />
          <circle cx="184" cy="142" r="11" fill="var(--color-ink)" />
        </>
      )}
    </svg>
  );
}
