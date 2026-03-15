import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";

import App from "./App";

export function render(url: string) {
  const cache = createCache({ key: "css" });
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);

  const html = renderToString(
    <React.StrictMode>
      <CacheProvider value={cache}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </CacheProvider>
    </React.StrictMode>,
  );

  const chunks = extractCriticalToChunks(html);
  const styles = constructStyleTagsFromChunks(chunks);

  return { html, styles };
}
