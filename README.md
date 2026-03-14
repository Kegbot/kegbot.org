# kegbot-org

Website for the [Kegbot Project](https://kegbot.org) — a free, open-source software and hardware system for intelligent beer keg tracking.

Built with React, Material UI, and Vite. Deployable to Cloudflare Pages.

## Getting started

Install dependencies:

```bash
bun install
```

Start a development server:

```bash
bun dev
```

Build for production:

```bash
bun run build
```

Preview the production build locally:

```bash
bun run preview
```

Deploy to Cloudflare Pages:

```bash
bun run deploy
```

## Development

### Linting and formatting

This project uses [Biome](https://biomejs.dev) for linting, formatting, and import organization.

To check for issues:

```bash
bunx @biomejs/biome check .
```

To auto-fix issues:

```bash
bun run lint
```

### Pre-commit hooks

[pre-commit](https://pre-commit.com) is used to run Biome checks automatically before each commit. Install the hooks after cloning:

```bash
pre-commit install
```

## Stack

- **[React](https://react.dev)** — UI library
- **[React Router](https://reactrouter.com)** — client-side routing
- **[Material UI](https://mui.com)** — component library and theming
- **[Vite](https://vite.dev)** — build tool and dev server
- **[Cloudflare Pages](https://pages.cloudflare.com)** — hosting and deployment via `wrangler`
- **[Biome](https://biomejs.dev)** — linting, formatting, and import organization
- **[Bun](https://bun.sh)** — package manager and script runner

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, features, components, CTA |
| `/about` | About the project |
| `/getting-started` | Getting started guide (coming soon) |
| `*` | 404 page |

## Deployment

The site deploys as a static SPA to Cloudflare Pages. A `public/_redirects` file ensures all routes fall back to `index.html` for client-side routing.

To deploy, authenticate with Cloudflare first:

```bash
bunx wrangler login
```

Then run:

```bash
bun run deploy
```
