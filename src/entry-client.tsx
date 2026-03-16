import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { init as initPlausible } from "@plausible-analytics/tracker";
import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./App";

if (import.meta.env.PROD) {
  initPlausible({ domain: "kegbot.org" });
}

const cache = createCache({ key: "css" });

hydrateRoot(
  document.getElementById("root")!,
  <React.StrictMode>
    <CacheProvider value={cache}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CacheProvider>
  </React.StrictMode>,
);
