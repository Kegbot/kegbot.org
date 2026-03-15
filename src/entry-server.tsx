import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";

import App from "./App";
import { TitleContext } from "./components/Page";

export function render(url: string) {
  const cache = createCache({ key: "css" });
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);

  let title = "Kegbot";
  const setTitle = (t: string) => {
    title = t;
  };

  const html = renderToString(
    <React.StrictMode>
      <CacheProvider value={cache}>
        <TitleContext.Provider value={setTitle}>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </TitleContext.Provider>
      </CacheProvider>
    </React.StrictMode>,
  );

  const chunks = extractCriticalToChunks(html);
  const styles = constructStyleTagsFromChunks(chunks);

  return { html, styles, title };
}
