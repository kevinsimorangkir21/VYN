/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }

  var dataLayer: any[];
  // ✅ definisi diperluas agar mendukung berbagai argumen
  function gtag(command: string, ...args: any[]): void;
}

export {};
