import { useEffect } from "react";

export default function AccessibilityToolbar() {
  // restore state dari localStorage saat load
  useEffect(() => {
    if (localStorage.getItem("large-text") === "true") {
      document.body.classList.add("large-text");
    }
    if (localStorage.getItem("high-contrast") === "true") {
      document.body.classList.add("high-contrast");
    }
  }, []);

  const toggleLargeText = () => {
    document.body.classList.toggle("large-text");
    localStorage.setItem("large-text", document.body.classList.contains("large-text"));
  };

  const toggleContrast = () => {
    document.body.classList.toggle("high-contrast");
    localStorage.setItem("high-contrast", document.body.classList.contains("high-contrast"));
  };

  return (
    <div
      className="fixed bottom-6 right-6 flex gap-2 bg-white/80 dark:bg-gray-900/80
                 shadow-lg rounded-xl p-3 z-50 backdrop-blur-md"
      role="toolbar"
      aria-label="Accessibility tools"
    >
      <button
        className="px-3 py-1 rounded bg-pink-500 text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-pink-400"
        onClick={toggleLargeText}
      >
        A+
      </button>

      <button
        className="px-3 py-1 rounded bg-purple-500 text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-400"
        onClick={toggleContrast}
      >
        Contrast
      </button>
    </div>
  );
}
