[![Deploy to GitHub Pages](https://github.com/alex-gagnon/simple-portfolio/actions/workflows/prod.js.yml/badge.svg)](https://github.com/alex-gagnon/simple-portfolio/actions/workflows/prod.js.yml)

## Simple Portfolio

Personal portfolio site built with React 19, TypeScript, and Vite — deployed to a custom domain via GitHub Pages.

## Tech Stack

- **React 19** + **TypeScript 5** (strict mode)
- **Vite** — build tooling and dev server
- **Material-UI (MUI) 5** + Emotion — component library and theming
- **Vitest** + Testing Library — unit and integration tests
- **GitHub Actions** — CI and deployment to GitHub Pages

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

**Prerequisites:** Node >= 24 (see `.nvmrc`)

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

On every merge to `main`, GitHub Actions runs tests, builds the project, and deploys to GitHub Pages using the official `actions/deploy-pages` action. The custom domain is configured in `public/CNAME`.

- **CI workflow** (`dev.js.yml`): runs on pushes to non-main branches and PRs targeting `main` — installs and tests
- **Deploy workflow** (`prod.js.yml`): runs on `main` — tests, builds, uploads artifact, and deploys to Pages

## Resources

- [Configuring a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
