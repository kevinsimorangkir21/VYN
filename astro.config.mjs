import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import maintenance from "astro-maintenance";
import netlify from "@astrojs/netlify/functions"; 
// kalau mau edge functions, pakai: "@astrojs/netlify/edge"

export default defineConfig({
  output: "server", // 🚨 tetap SSR
  adapter: netlify(), // ✅ Netlify adapter
  integrations: [
    tailwind(),
    robotsTxt(),
    maintenance({
      enabled: false,
      template: "/maintenance", // ✅ gunakan route, bukan path file
      allow: ["127.0.0.1"], // IP yg diizinkan bypass
    }),
  ],
});
