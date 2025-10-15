import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bravePink: "#F784C5",
        heroGreen: "#1B602F",

        // 🌾 warna custom untuk tombol Harvesty
        harvesty: "#C4B073",
        harvestyHover: "#A89B64",
      },
    },
  },
  plugins: [typography],
}
