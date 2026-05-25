# Project notes

This project is pinned to **Next.js 12.3.4** (Pages Router) to follow along with *The Complete Developer*. React is pinned to 18.2.0.

- **Node version: 18.x** (LTS contemporary with Next 12). Pinned via `.nvmrc`. Newer Node (20+, 24) causes `next dev` to hang silently. Run `nvm use` in this directory before any `next` command.
- Use **Pages Router** conventions only (`pages/`, `pages/api/`). No `app/` directory.
- Do **not** run `create-next-app` to regenerate — it ignores the `@12` version pin and scaffolds Next 16. Manage versions by editing `package.json` directly and running `npm install`.
