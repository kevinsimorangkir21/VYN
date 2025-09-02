import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"
import maintenance from "astro-maintenance"

export default defineConfig({
  output: "server", // 🚨 wajib SSR supaya astro-maintenance bisa jalan
  integrations: [
    tailwind(),
    robotsTxt(),
    maintenance({
      enabled: true,
      page: "/maintenance",   // arahkan ke halaman custom
      allow: ["127.0.0.1"],   // whitelist localhost
    })
  ]
})
