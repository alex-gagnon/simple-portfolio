[![Prod - Simple Portfolio](https://github.com/alex-gagnon/simple-portfolio/actions/workflows/prod.js.yml/badge.svg)](https://github.com/alex-gagnon/simple-portfolio/actions/workflows/prod.js.yml)
[![codecov](https://codecov.io/gh/alex-gagnon/simple-portfolio/branch/main/graph/badge.svg)](https://codecov.io/gh/alex-gagnon/simple-portfolio)

## Simple Portfolio

Personal portfolio site built with React 19, TypeScript, and Vite — deployed to a custom domain via GitHub Pages.

## Tech Stack

- **React 19** + **TypeScript 5** (strict mode)
- **Vite** — build tooling and dev server
- **Material-UI (MUI) 5** + Emotion — component library and theming
- **Vitest** + Testing Library — unit and integration tests
- **gh-pages** — deployment to GitHub Pages

## Project Structure

```
src/
├── components/     # Reusable UI components (Card, Header, Hero, ContactForm, …)
├── hooks/          # Custom React hooks (useScrollReveal, useActiveSection, useScrolled)
├── data/           # Static content (skills, experience, projects, highlights)
├── pages/          # Page-level components
├── Portfolio.tsx   # Root layout (ThemeProvider, Header, Footer, ErrorBoundary)
└── index.tsx       # App entry point
```

## Getting Started

**Prerequisites:** Node >= 26 (see `.nvmrc`)

```bash
npm install          # install dependencies
npm run dev          # start dev server at http://localhost:5173
npm run build        # production build → /build
npm run test         # run tests once
npm run test:watch   # run tests in watch mode
npm run test:coverage  # generate coverage report
npm run typecheck    # TypeScript type check
```

Copy `.env.example` to `.env` and fill in your values before running locally:

```bash
cp .env.example .env
```

## Deployment

On every merge to `main`, GitHub Actions runs tests, builds the project, and deploys to GitHub Pages via `gh-pages`. The custom domain is configured in `public/CNAME`.

- **Dev workflow** (`dev.js.yml`): runs on all non-main branches — installs, tests, uploads coverage to Codecov
- **Prod workflow** (`prod.js.yml`): runs on `main` — same as dev, plus build and deploy

## Code Review Notes

The following issues were identified and fixed as part of a code review:

### Fixed

| Severity | File | Issue |
|----------|------|-------|
| High | `src/components/ContactForm/ContactForm.tsx` | Hardcoded form endpoint moved to `VITE_FORMSPARK_URL` env variable |
| High | `src/components/ContactForm/ContactForm.tsx` | Added client-side input validation (name, email format, message length ≤ 2000 chars) |
| Medium | `src/components/ContactForm/ContactForm.tsx` | Bare `catch {}` replaced with `catch (err)` + `console.error` |
| Medium | `src/MockTheme.tsx` | `children: any` replaced with `children: React.ReactNode` |
| Medium | `src/Portfolio.tsx` | Added `<ErrorBoundary>` wrapper to prevent full-page crashes |

### Remaining / Watch Items

- **Test coverage gaps**: Footer, Logo, SocialLinks, Highlights, and RevealSection components lack tests
- **Inconsistent test patterns**: some test files use `describe`, others use bare `test()` — worth standardizing
- **No accessibility CI check**: consider adding axe-core or Lighthouse CI to the workflow

## Resources

- [Configuring a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
