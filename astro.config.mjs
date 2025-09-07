import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import maintenance from "astro-maintenance";
import netlify from "@astrojs/netlify/functions"; 

const start = new Date("2025-09-05T19:00:00+07:00").getTime();
const end   = new Date("2025-09-07T21:00:00+07:00").getTime();

const now = new Date(
  new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
).getTime();

export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [
    tailwind(),
    robotsTxt(),
    maintenance({
      enabled: now >= start && now <= end,
      template: "/maintenance",
      allow: ["127.0.0.1"],
    }),
  ],
});
