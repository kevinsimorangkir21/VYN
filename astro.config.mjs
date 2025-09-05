import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import maintenance from "astro-maintenance";
import netlify from "@astrojs/netlify/functions"; 

// 🚨 Atur waktu maintenance dalam WIB (UTC+7)
const start = new Date("2025-09-05T19:00:00+07:00").getTime();
const end   = new Date("2025-09-07T19:00:00+07:00").getTime();

// Ambil waktu sekarang pakai zona Asia/Jakarta
const now = new Date(
  new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
).getTime();

export default defineConfig({
  output: "server", // 🚨 tetap SSR
  adapter: netlify(), // ✅ Netlify adapter
  integrations: [
    tailwind(),
    robotsTxt(),
    maintenance({
      enabled: now >= start && now <= end, // ✅ aktif otomatis sesuai WIB
      template: "/maintenance", // 🚧 halaman maintenance custom
      allow: ["127.0.0.1"], // ✅ IP yg boleh bypass
    }),
  ],
});
