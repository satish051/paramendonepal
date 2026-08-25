"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhatsAppCTA() {
  const [isVisible, setIsVisible] = useState(false);
  
  const phoneNumber = "+977000000000"; // Placeholder Nepali number
  const message = "Namaste Paramendo Nepal! I am interested in your recycled plastic products and would like to learn more.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // Small delay before showing the button so it pops in
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75 group-hover:animate-none"></div>
      <MessageCircle className="w-7 h-7 relative z-10" />
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-gray-100">
        Chat with us!
      </span>
    </a>
  );
}
