import { defineConfig } from "astro/config";
import path from "path";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import maintenance from "astro-maintenance";
import netlify from "@astrojs/netlify/functions"; 
import react from "@astrojs/react";

export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [
    tailwind(),
    robotsTxt(),
    maintenance({
      enabled: true, 
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
