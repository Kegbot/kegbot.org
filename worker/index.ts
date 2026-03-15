import { render } from "../src/entry-server";

interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Fetch the HTML shell and inject server-rendered content.
    // Static assets (JS, CSS, images) are served directly by Cloudflare
    // and never reach this worker — see run_worker_first in wrangler.toml.
    const template = await env.ASSETS.fetch(
      new URL("/index.html", request.url),
    );
    let html = await template.text();

    const rendered = render(url.pathname);

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
