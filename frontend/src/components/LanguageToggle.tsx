"use client";

import { useEffect, useState, useRef } from "react";
import Script from "next/script";
import { Globe, ChevronDown } from "lucide-react";

const languages = [
  { code: "en", name: "English" },
  { code: "ar", name: "العربية" },
  { code: "zh-CN", name: "中文" },
  { code: "fr", name: "Français" },
  { code: "ru", name: "Русский" },
  { code: "es", name: "Español" },
  { code: "ne", name: "नेपाली" },
];

export default function LanguageToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Click outside to close
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    // Load saved language preference from localStorage or cookie
    const savedCode = localStorage.getItem("paramendo_lang");
    if (savedCode) {
      const found = languages.find(l => l.code === savedCode);
      if (found) {
        setCurrentLang(found);
        document.documentElement.lang = found.code;
        document.documentElement.dir = found.code === 'ar' ? 'rtl' : 'ltr';
      }
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lang: typeof languages[0]) => {
    setCurrentLang(lang);
    setIsOpen(false);
    
    // Update System HTML attributes
    document.documentElement.lang = lang.code;
    document.documentElement.dir = lang.code === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem("paramendo_lang", lang.code);
    
    // Force Google Translate via cookie for extreme reliability across refreshes
    document.cookie = `googtrans=/en/${lang.code}; path=/;`;
    document.cookie = `googtrans=/en/${lang.code}; path=/; domain=${window.location.hostname}`;
    
    // Attempt to trigger the active Google Translate session immediately
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (select) {
      select.value = lang.code;
      select.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }));
    } else {
      // If the select box isn't found (script still loading), a reload forces it to read the cookie we just set
      window.location.reload();
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Custom Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full px-4 py-2 border border-white/20 text-white"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium hidden sm:inline-block">{currentLang.name}</span>
        <span className="text-sm font-medium sm:hidden">{currentLang.code.toUpperCase()}</span>
        <ChevronDown className="w-4 h-4 opacity-70" />
      </button>

      {/* Custom Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl overflow-hidden z-50 border border-gray-100 origin-top-right animate-in fade-in slide-in-from-top-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang)}
              className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] font-medium ${
                currentLang.code === lang.code ? "bg-gray-50 text-[var(--color-primary)] font-bold" : "text-gray-700"
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}

      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" className="invisible absolute opacity-0 -z-50 pointer-events-none"></div>
      
      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement(
              {
                pageLanguage: 'en', 
                includedLanguages: 'en,ar,zh-CN,fr,ru,es,ne',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
              }, 
              'google_translate_element'
            );
          }
        `}
      </Script>
      <Script 
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" 
        strategy="afterInteractive" 
      />
    </div>
  );
}
