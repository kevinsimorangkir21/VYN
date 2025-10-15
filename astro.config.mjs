import { defineConfig } from "astro/config";
import path from "path";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import maintenance from "astro-maintenance";
import netlify from "@astrojs/netlify/functions";
import react from "@astrojs/react";

// Get current time (server time)
const now = new Date();
const hours = now.getHours();

// Define maintenance schedule
// aktif sebelum jam 00:00, mati setelah jam 00:00
const maintenanceEnabled = hours < 0 || hours >= 0 ? false : true; 
// ↑ kamu bisa ubah logikanya, tapi contoh ini otomatis nonaktif setelah 00:00

export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [
    tailwind(),
    robotsTxt(),
    maintenance({
      enabled: maintenanceEnabled,
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
