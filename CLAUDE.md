# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
pnpm dev          # Start dev server (Next.js)
pnpm build        # Production build
pnpm start        # Start production server

# Code quality
pnpm lint         # Run ESLint
pnpm lint:fix     # Run ESLint with auto-fix

# API client generation (requires backend running at NEXT_PUBLIC_API_URL)
pnpm orval        # Regenerate src/http/api-client-generated/index.ts from Swagger
```

> There is no test runner configured in this project.

## Architecture

**Next.js App Router** with React Server Components by default. Client components are marked with `'use client'`.

### HTTP / API Layer

All API calls go through `src/http/api-client.ts`, a thin wrapper around **ky** that:

- Reads the session token from the `better-auth.session_token` cookie via `src/lib/get-session-token.ts`
- Injects it as a `Bearer` token on every request
- Is used as the **orval mutator** — the generated client in `src/http/api-client-generated/index.ts` calls this function for every endpoint

To add or update API endpoints: regenerate by running `pnpm orval` (the backend must be running). Do not hand-edit `src/http/api-client-generated/index.ts`.

### Authentication

Uses **better-auth** (`src/lib/auth-client.ts`) with Google OAuth. The session token is stored in a cookie. Server pages check auth status and redirect unauthenticated users to `/login`. The login page is a client component that calls `authClient.signIn.social({ provider: 'google' })`.

### Environment

Environment variables are validated at startup via Zod in `src/config/env.ts`. Always import env values from there, not directly from `process.env`.

Required vars (see `.env`):

- `NEXT_PUBLIC_API_URL` — backend base URL (default: `http://localhost:8080`)
- `NEXT_PUBLIC_BASE_URL` — frontend base URL (default: `http://localhost:3000`)

### Route / Component Structure

- `src/app/` — pages and layouts (App Router)
- `src/app/_components/` — components scoped to the home page
- `src/app/workout-plans/[workoutPlanId]/day/[dayId]/` — dynamic workout day route; its `actions.ts` contains Next.js Server Actions for starting/completing sessions
- `src/components/` — shared components across pages
- `src/components/ui/` — Shadcn/ui primitives (Avatar, Badge, Button, Card, Input)

### Styling

Tailwind CSS v4 + Shadcn/ui (Radix Nova style). Use the `cn()` helper from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional class merging.

Prettier auto-sorts Tailwind classes. Code style: 2-space indent, no semicolons, single quotes, 80-char print width.

### Path Aliases

| Alias           | Resolves to        |
| --------------- | ------------------ |
| `@/*`           | `src/*`            |
| `@components/*` | `src/components/*` |
| `@config/*`     | `src/config/*`     |
| `@http/*`       | `src/http/*`       |
| `@lib/*`        | `src/lib/*`        |

## Commit Conventions

Follow [Conventional Commits](https://www.conventionalcommits.org/) combined with the emoji pattern from [iuricode/padroes-de-commits](https://github.com/iuricode/padroes-de-commits).

### Format

```
<emoji> <type>(<scope>): <description>
```

### Types and Emojis

| Emoji | Code              | Type       | Description                                                  |
| ----- | ----------------- | ---------- | ------------------------------------------------------------ |
| ✨    | `:sparkles:`      | `feat`     | New feature                                                  |
| 🐛    | `:bug:`           | `fix`      | Bug fix                                                      |
| 📚    | `:books:`         | `docs`     | Documentation only changes                                   |
| 🧪    | `:test_tube:`     | `test`     | Adding or updating tests                                     |
| 📦    | `:package:`       | `build`    | Build system or dependency changes                           |
| ⚡    | `:zap:`           | `perf`     | Performance improvements                                     |
| 👌    | `:ok_hand:`       | `style`    | Code formatting, missing semicolons, lint (no logic change)  |
| ♻️    | `:recycle:`       | `refactor` | Code change that neither fixes a bug nor adds a feature      |
| 🔧    | `:wrench:`        | `chore`    | Build tasks, admin config, package updates                   |
| 🧱    | `:bricks:`        | `ci`       | CI/CD configuration changes                                  |
| 🗃️    | `:card_file_box:` | `raw`      | Config files, data, feature flags, parameters                |
| 🧹    | `:broom:`         | `cleanup`  | Remove commented code, unnecessary snippets, general cleanup |
| 🗑️    | `:wastebasket:`   | `remove`   | Delete obsolete or unused files, directories, or features    |
| 🎉    | `:tada:`          | `init`     | Initial commit                                               |
| 💥    | `:boom:`          | `fix`      | Reverting ineffective changes                                |
| 💄    | `:lipstick:`      | `feat`     | UI/CSS styling                                               |
| 💡    | `:bulb:`          | `docs`     | Comments in source code                                      |
| 🚀    | `:rocket:`        |            | Deploy                                                       |
| 🔒️    | `:lock:`          |            | Security fixes                                               |

### Examples

```bash
git commit -m ":tada: init: initial commit"
git commit -m ":sparkles: feat: add login page"
git commit -m ":bug: fix: infinite loop on line 50"
git commit -m ":recycle: refactor: convert to arrow functions"
git commit -m ":books: docs: update README"
git commit -m ":zap: perf: improve response time"
git commit -m ":bricks: ci: update Dockerfile"
git commit -m ":test_tube: test: add unit tests for auth"
git commit -m ":broom: cleanup: remove commented-out code"
git commit -m ":wastebasket: remove: delete unused files"
```

### Rules

- Use the **imperative mood** in the description (e.g., "add feature" not "added feature")
- Keep the description **short** (max ~72 chars)
- Use `BREAKING CHANGE:` in the commit body/footer for breaking changes
- Scope is optional but recommended (e.g., `feat(auth):`, `fix(home):`)
- Do **not** add `Co-Authored-By:` trailers to commits
