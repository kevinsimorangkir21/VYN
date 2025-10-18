import { useEffect, useState } from "react";
import { ZoomIn, Contrast } from "lucide-react";

export default function AccessibilityToolbar() {
  const [isLargeText, setIsLargeText] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);

  // 🔁 Restore preferensi dari localStorage
  useEffect(() => {
    const largeText = localStorage.getItem("large-text") === "true";
    const highContrast = localStorage.getItem("high-contrast") === "true";
    setIsLargeText(largeText);
    setIsHighContrast(highContrast);
    if (largeText) document.body.classList.add("large-text");
    if (highContrast) document.body.classList.add("high-contrast");
  }, []);

  // 🔘 Toggle ukuran teks
  const toggleLargeText = () => {
    const newState = !isLargeText;
    setIsLargeText(newState);
    document.body.classList.toggle("large-text", newState);
    localStorage.setItem("large-text", newState);
  };

  // 🎨 Toggle kontras tinggi
  const toggleContrast = () => {
    const newState = !isHighContrast;
    setIsHighContrast(newState);
    document.body.classList.toggle("high-contrast", newState);
    localStorage.setItem("high-contrast", newState);
  };

  return (
    <div
      className="fixed bottom-6 right-6 flex items-center gap-3
                 bg-white/60 dark:bg-gray-900/60
                 border border-gray-200/60 dark:border-gray-700/60
                 shadow-[0_8px_25px_rgba(0,0,0,0.15)]
                 rounded-full px-4 py-2 z-50 backdrop-blur-2xl
                 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(196,176,115,0.25)]"
      role="toolbar"
      aria-label="Accessibility tools"
    >
      <button
        onClick={toggleLargeText}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C4B073]/70 ${
          isLargeText
            ? "bg-[#C4B073] text-white shadow-md"
            : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-[#C4B073]/10"
        }`}
      >
        <ZoomIn size={16} />
        <span className="hidden sm:inline">Text</span>
      </button>

      <button
        onClick={toggleContrast}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C4B073]/70 ${
          isHighContrast
            ? "bg-[#C4B073] text-white shadow-md"
            : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-[#C4B073]/10"
        }`}
      >
        <Contrast size={16} />
        <span className="hidden sm:inline">Contrast</span>
      </button>
    </div>
  );
}
