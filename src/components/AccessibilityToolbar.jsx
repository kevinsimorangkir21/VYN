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
                 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl
                 border border-gray-200/40 dark:border-gray-700/40
                 shadow-[0_8px_28px_rgba(15,112,149,0.15)]
                 rounded-full px-4 py-2 z-50
                 transition-all duration-300
                 hover:shadow-[0_10px_36px_rgba(15,112,149,0.25)]"
      role="toolbar"
      aria-label="Accessibility tools"
    >
      {/* 🔠 Large Text Toggle */}
      <button
        onClick={toggleLargeText}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f7095]/60 ${
          isLargeText
            ? "bg-[#0f7095] text-white shadow-md"
            : "bg-gray-100/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-200 hover:bg-[#0f7095]/10"
        }`}
      >
        <ZoomIn size={16} />
        <span className="hidden sm:inline">Text</span>
      </button>

      {/* 🌗 High Contrast Toggle */}
      <button
        onClick={toggleContrast}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f7095]/60 ${
          isHighContrast
            ? "bg-[#0f7095] text-white shadow-md"
            : "bg-gray-100/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-200 hover:bg-[#0f7095]/10"
        }`}
      >
        <Contrast size={16} />
        <span className="hidden sm:inline">Contrast</span>
      </button>
    </div>
  );
}
