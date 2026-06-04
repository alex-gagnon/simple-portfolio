[![Deploy to GitHub Pages](https://github.com/alex-gagnon/simple-portfolio/actions/workflows/prod.js.yml/badge.svg)](https://github.com/alex-gagnon/simple-portfolio/actions/workflows/prod.js.yml)

## Simple Portfolio

Personal portfolio site built with React 19, TypeScript, and Vite — deployed to a custom domain via GitHub Pages.

## Tech Stack

- **React 19** + **TypeScript 5** (strict mode)
- **Vite** — build tooling and dev server
- **Material-UI (MUI) 5** + Emotion — component library and theming
- **Vitest** + Testing Library — unit and integration tests
- **Playwright** — end-to-end tests with cross-browser and visual snapshot coverage
- **Docker** — containerised dev server, Linux screenshot generation, and production image
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
npm run test:e2e     # run Playwright e2e tests (starts the server automatically)
npm run test:e2e:update-snapshots  # regenerate visual snapshots on Linux via Docker
```

Copy `.env.example` to `.env` and fill in your values before running locally:

```bash
cp .env.example .env
```

## Docker

The `Dockerfile` has four named stages.

**Development** — Vite HMR dev server inside a container, source mounted from the host:

```bash
docker build --target dev -t portfolio-dev .
docker run -it --rm -p 5173:5173 -v .:/app -v /app/node_modules portfolio-dev
# → http://localhost:5173
```

**Linux screenshots** — regenerate Playwright visual snapshots using the same Linux browser environment as CI:

```bash
docker build --target e2e -t portfolio-e2e .
docker run --rm -v .:/app -v /app/node_modules --ipc=host portfolio-e2e \
  npx playwright test --update-snapshots all --workers=1
```

The `-v /app/node_modules` flag creates an anonymous volume that shadows the host's Windows `node_modules` with the Linux-built ones from the image, avoiding the cross-platform rollup binary mismatch.

Snapshots are written back to your working tree via the bind mount. The `test:e2e:update-snapshots` npm script runs both steps automatically.

**Production** — nginx serving the static build:

```bash
docker build -t portfolio .
docker run -p 80:80 portfolio
```

## Deployment

On every merge to `main`, GitHub Actions runs tests, builds the project, and deploys to GitHub Pages using the official `actions/deploy-pages` action. The custom domain is configured in `public/CNAME`.

- **CI workflow** (`dev.js.yml`): runs on pushes to non-main branches and PRs targeting `main` — installs and tests
- **Deploy workflow** (`prod.js.yml`): runs on `main` — tests, builds, uploads artifact, and deploys to Pages

## Resources

- [Configuring a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
