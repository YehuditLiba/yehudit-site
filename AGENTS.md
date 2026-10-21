<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project rules

### Architecture
- App Router only. `page.tsx` composes the page. Shared chrome lives in `src/components/layout`.
- Folders: `components/layout`, `navigation`, `sections`, `chat`, `character`, `ui`, plus `src/content`.
- Content types live in `src/content/types.ts`. Component props stay in the component file.
- Add `src/lib` only when a helper is used by more than one feature.
- One component, one job. A file that needs several reasons to change should be split.

### Naming
- Component files and exports are PascalCase (`SiteHeader.tsx`).
- Content modules are camelCase (`site.ts`, `projects.ts`).
- Section ids are `about`, `projects`, `experience`, `services`, `contact`.

### Server-first
- Components are Server Components unless they need state, effects, or browser APIs.
- Put `"use client"` on the leaf that needs it. Keep headers, sections, and copy on the server.
- Pass plain props into client components. Do not import a whole content module into a client file.

### Content
- All copy, links, and lists live in `src/content`. Components render data; they do not own it.
- The page imports content from `src/content/index.ts`.

### Styling
- Use the tokens in `globals.css`: `bg-bg`, `bg-surface`, `text-cream`, `text-text-2`, `text-muted`, `text-gold`, `text-gold-light`, `text-ink`, `border-border`, `font-sans`, `font-mono`, `font-script`.
- No raw hex, rgb, or default palette colors (`zinc`, `slate`, `white`) in components.
- `font-script` is only for the name.
- `border-border` (1.95:1) is decorative only. Never use it as the only boundary of an interactive control or as a focus indicator — use gold for those.

### Accessibility
- Target IS 5568 and WCAG 2.2 AA. Hit targets are at least 44×44px.
- One `h1` (the name). Sections use `h2`. Landmarks: `header`, `main#main`, `footer`, and labelled `nav` elements.
- The skip link is the first focusable control and points at `#main`.
- Keep `:focus-visible` outlines. Do not set `outline: none`.
- Images need useful `alt`. Decorative graphics use `alt=""` or `aria-hidden`.
- External links that open a new tab say so in the accessible name and use `rel="noopener noreferrer"`.
- Motion must respect `prefers-reduced-motion`, including JS animation.

### Dependencies and verification
- Ask before adding a package.
- After UI work, check desktop and a 320px-wide layout in the browser: keyboard through the skip link, nav, and actions; confirm landmarks, contrast, and a quiet console.
