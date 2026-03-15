import { cloudflare } from "@cloudflare/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    cloudflare({ viteEnvironment: { name: "ssr" } }),
  ],
  build: {
    rollupOptions: {
      input: "./index.html",
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  ssr: {
    resolve: {
      conditions: ["workerd", "browser"],
    },
  },
});
