// astro.config.mjs
import { defineConfig } from "astro/config";
import path from "path";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import maintenance from "astro-maintenance";
import react from "@astrojs/react";

export default defineConfig({
  output: "static", // ✅ ubah dari "server" ke "static"
  integrations: [
    tailwind(),
    robotsTxt(),
    maintenance({
      enabled: false, // pastikan off
      template: "/maintenance",
      allow: ["127.0.0.1"],
    }),
    react(),
  ],
  vite: {
    resolve: {
      alias: {
        "~": path.resolve("./src"),
      },
    },
  },
});
