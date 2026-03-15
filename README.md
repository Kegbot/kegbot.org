# kegbot-org

Website for the [Kegbot Project](https://kegbot.org) — a free, open-source software and hardware system for intelligent beer keg tracking.

Built with React, Material UI, and Vite. Server-side rendered and deployed on Cloudflare Workers.

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

Deploy to Cloudflare Workers:

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

[pre-commit](https://pre-commit.com) is used to run Biome checks and TypeScript type checking automatically before each commit. Install the hooks after cloning:

```bash
pre-commit install
```

### SSR architecture

The site uses server-side rendering via Cloudflare Workers. Vite builds two bundles:

- **Client** (`dist/client/`) — The browser bundle. Hydrates the server-rendered HTML and takes over routing.
- **SSR** (`dist/ssr/`) — The Worker bundle. Runs on Cloudflare's edge to render each page on the server.

Key files:

| File | Role |
|---|---|
| `worker/index.ts` | Worker entry point. Intercepts requests, fetches the HTML shell from static assets, calls `render()` to produce HTML + CSS, and injects both into the template. |
| `src/entry-server.tsx` | Server render function. Uses `renderToString` with `StaticRouter` and Emotion's `extractCriticalToChunks` to produce HTML and critical CSS. |
| `src/entry-client.tsx` | Client entry point. Calls `hydrateRoot` with `BrowserRouter` to hydrate the server-rendered HTML. |
| `src/App.tsx` | Shared app component with routes. Router-agnostic — the server and client entry points each wrap it in their own router. |

Request flow:

1. Static assets (`/assets/*`) are served directly by Cloudflare's edge — they never hit the Worker.
2. All other requests go through the Worker (`run_worker_first` in `wrangler.toml`). It fetches the `index.html` shell, calls `render(pathname)` to get SSR'd HTML and Emotion CSS, injects both into the template, and returns the response.
3. The browser loads the page with fully rendered HTML, then the client bundle hydrates it.

## Stack

- **[React](https://react.dev)** — UI library
- **[React Router](https://reactrouter.com)** — routing (server and client)
- **[Material UI](https://mui.com)** — component library and theming
- **[Vite](https://vite.dev)** — build tool and dev server
- **[Cloudflare Workers](https://workers.cloudflare.com)** — SSR runtime and deployment via `wrangler`
- **[@cloudflare/vite-plugin](https://developers.cloudflare.com/workers/vite-plugin/)** — Vite integration for Workers
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

The site deploys as a Cloudflare Worker with static assets. The Worker handles SSR for all page routes.

To deploy, authenticate with Cloudflare first:

```bash
bunx wrangler login
```

Then run:

```bash
bun run deploy
```
