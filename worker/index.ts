import { render } from "../src/entry-server";

interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // In dev, Vite dev server assets (/@vite/client, /src/*, etc.) hit the
    // worker because run_worker_first matches all paths. Pass them through.
    // In production this is dead-code-eliminated; static assets never reach
    // the worker thanks to the !/assets/* exclusion in wrangler.toml.
    if (import.meta.env.DEV) {
      const asset = await env.ASSETS.fetch(request);
      if (
        asset.ok &&
        !asset.headers.get("content-type")?.startsWith("text/html")
      ) {
        return asset;
      }
    }

    // Fetch the HTML shell and inject server-rendered content.
    const template = await env.ASSETS.fetch(
      new URL("/index.html", request.url),
    );
    let html = await template.text();

    const rendered = render(url.pathname);

    html = html.replace(
      /<title>.*?<\/title>/,
      `<title>${rendered.title}</title>`,
    );
    html = html.replace("</head>", `${rendered.styles}</head>`);
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${rendered.html}</div>`,
    );

    return new Response(html, {
      headers: { "content-type": "text/html;charset=UTF-8" },
    });
  },
} satisfies ExportedHandler<Env>;
