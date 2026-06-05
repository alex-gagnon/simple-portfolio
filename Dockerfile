# ── deps ─────────────────────────────────────────────────────────────────────
FROM node:24-bookworm-slim AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# ── dev ───────────────────────────────────────────────────────────────────────
# docker build --target dev -t portfolio-dev .
# docker run -it --rm -p 5173:5173 -v .:/app -v /app/node_modules portfolio-dev
FROM deps AS dev
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

# ── build ─────────────────────────────────────────────────────────────────────
FROM deps AS build
COPY . .
RUN npm run build

# ── e2e (Linux screenshots) ───────────────────────────────────────────────────
# Matches the pinned playwright image used in test:e2e:update-snapshots.
# docker build --target e2e -t portfolio-e2e .
# docker run --rm -v .:/app -v /app/node_modules --ipc=host portfolio-e2e
#
# The second -v /app/node_modules creates an anonymous volume that shadows the
# bind-mounted host node_modules with the Linux ones built into the image.
FROM mcr.microsoft.com/playwright:v1.60.0-jammy AS e2e
RUN apt-get update -qq && \
    curl -fsSL https://deb.nodesource.com/setup_24.x | bash - && \
    apt-get install -y --no-install-recommends nodejs && \
    rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV CI=true
CMD ["npm", "run", "test:e2e"]

# ── prod ──────────────────────────────────────────────────────────────────────
FROM nginx:alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
