import React, { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    window.location.reload(); // refresh to load GA
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] flex flex-col items-center justify-between gap-3
                 bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-md border-t border-gray-300/30
                 p-4 md:flex-row md:gap-0 shadow-lg animate-fadeIn"
    >
      <p className="text-sm text-gray-700 dark:text-gray-300">
        We use cookies to enhance your browsing experience and analyze site traffic.
        By clicking "Accept", you consent to our use of cookies.{" "}
        <a href="/terms" className="underline text-[#0f7095] hover:text-[#5fb7cc]">Learn more</a>.
      </p>
      <div className="flex gap-3 mt-2 md:mt-0">
        <button
          onClick={handleReject}
          className="px-4 py-2 rounded-md border border-gray-400/40 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Reject
        </button>
        <button
          onClick={handleAccept}
          className="px-4 py-2 rounded-md bg-[#0f7095] text-white text-sm hover:bg-[#1284aa]"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
