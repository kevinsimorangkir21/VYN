import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import maintenance from "astro-maintenance";
import netlify from "@astrojs/netlify/functions"; 

export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [
    tailwind(),
    robotsTxt(),
    maintenance({
      enabled: true, // langsung aktif maintenance
      template: "/maintenance",
      allow: ["127.0.0.1"], // biar bisa akses lokal tanpa kena block
    }),
  ],
});
