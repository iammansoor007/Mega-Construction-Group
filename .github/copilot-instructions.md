# Copilot Workspace Instructions

## Project summary

This is a Vite + React + TypeScript web app using Tailwind CSS and shadcn/ui primitives. It is a static frontend project with React Router, React Query, and UI components organized under `src/components`.

## Key facts

- Package manager: npm
- Build tool: Vite
- UI: Tailwind CSS + shadcn/ui + Radix primitives
- Routing: `react-router-dom` via `src/App.tsx`
- Data: app content lives in `src/src/data/completeData.json`
- Testing: Vitest with `jsdom`, setup in `src/test/setup.ts`
- Language: TypeScript with ESM imports
- Path alias: `@` resolves to `./src`

## Important files

- `package.json` – scripts, deps, devDeps
- `vite.config.ts` – Vite config and alias setup
- `src/App.tsx` – app routes and core providers
- `src/main.tsx` – app bootstrap
- `src/pages/Index.tsx` – main page
- `src/pages/NotFound.tsx` – fallback route
- `src/components/` – UI sections and shadcn components
- `src/src/data/completeData.json` – site content and copy data
- `src/test/` – Vitest tests and setup

## Recommended commands

- `npm install`
- `npm run dev` – start local development server
- `npm run preview` – preview production build locally
- `npm run build` – build for production
- `npm run lint` – run ESLint
- `npm run test` – run tests once
- `npm run test:watch` – watch tests

## Coding conventions

- Prefer existing shadcn/ui primitives from `src/components/ui/` for buttons, dialogs, forms, tooltips, toasts, etc.
- Keep markup declarative and Tailwind utility-based.
- Use the `@` import alias for `src` paths.
- Add routes in `src/App.tsx` above the catch-all `*` route.
- When changing copy or landing page content, update `src/src/data/completeData.json` and follow component patterns in `src/components/`.
- Keep logic and UI separate: data in JSON, component templates in `src/components/`, page layout in `src/pages/`.

## Best approach for tasks

- For UI changes: update or add a component under `src/components` and use existing shadcn/ui conventions.
- For page changes: edit `src/pages/Index.tsx` or add a new route in `src/App.tsx`.
- For copy/data updates: modify `src/src/data/completeData.json`.
- For styling: use Tailwind utility classes and existing theme styles rather than inline CSS.
- For state/query work: use `@tanstack/react-query` patterns already present in `src/App.tsx`.

## When you need clarification

- Ask which page or section the user wants to change.
- Confirm whether the change is content-only, layout, or behavior.
- If a route or page does not exist, propose adding a new `src/pages/*.tsx` page and route.

## Example prompts

- "Update the hero section on the landing page to use a new CTA and a background gradient."
- "Add a new testimonials section below the services section using the existing card style."
- "Change the team values text and include an icon for each item from `lucide-react`."
- "Create a new route `/contact` with a simple contact card and add it to `src/App.tsx`."
