import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import maintenance from "astro-maintenance";
import netlify from "@astrojs/netlify/functions"; 

// 🚨 Atur waktu maintenance
const start = new Date("2025-09-05T19:00:00+07:00").getTime();
const end   = new Date("2025-09-07T19:00:00+07:00").getTime();
const now   = Date.now();

export default defineConfig({
  output: "server", // 🚨 tetap SSR
  adapter: netlify(), // ✅ Netlify adapter
  integrations: [
    tailwind(),
    robotsTxt(),
    maintenance({
      enabled: now >= start && now <= end, // ✅ otomatis aktif hanya di rentang waktu
      template: "/maintenance", // 🚧 halaman maintenance custom
      allow: ["127.0.0.1"], // ✅ IP yg boleh bypass
    }),
  ],
});
