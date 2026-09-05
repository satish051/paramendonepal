import { Menu, X, Globe, ChevronDown, Moon, Sun } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const languages = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ne', label: 'नेपाली', short: 'NE' },
  { code: 'ar', label: 'العربية', short: 'AR' },
  { code: 'zh-CN', label: '中文', short: 'ZH' },
  { code: 'fr', label: 'Français', short: 'FR' },
  { code: 'ru', label: 'Русский', short: 'RU' },
  { code: 'es', label: 'Español', short: 'ES' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const [currentLangCode, setCurrentLangCode] = useState('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const mobileLangDropdownRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  useEffect(() => {
    const match = document.cookie.match(/(?:^|;)\s*googtrans=([^;]*)/);
    if (match && match[1]) {
      const parts = match[1].split('/');
      if (parts.length > 2) {
        setCurrentLangCode(parts[2]);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    setCurrentLangCode(lng);
    setIsLangOpen(false);
    setIsMobileLangOpen(false);
    
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = lng;
      select.dispatchEvent(new Event('change'));
    } else {
      document.cookie = `googtrans=/en/${lng}; path=/;`;
      document.cookie = `googtrans=/en/${lng}; path=/; domain=${window.location.hostname};`;
      window.location.reload();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
      if (mobileLangDropdownRef.current && !mobileLangDropdownRef.current.contains(event.target as Node)) {
        setIsMobileLangOpen(false);
      }

    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = languages.find(l => l.code === currentLangCode) || languages[0];

  return (
    <div className="fixed w-full top-0 z-50 flex justify-center mt-4 px-4 pointer-events-none">
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
        className={`pointer-events-auto transition-all duration-300 w-full max-w-5xl rounded-full relative ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-lg py-0.5' 
          : 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/40 shadow-md py-1'
      }`}>
        <div id="google_translate_element" className="hidden"></div>
        
        <div className="w-full px-4 lg:px-8">
          <div className="flex justify-between items-center relative min-h-[3rem]">
            <Link to="/" className="flex items-center shrink-0">
              <img 
                src="/logo.webp" 
                alt="Paramendo Logo" 
                className="w-auto h-8 md:h-10 object-contain drop-shadow-md" 
              />
            </Link>
          
            <div className="hidden md:flex space-x-3 lg:space-x-6 items-center">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    className={`relative px-2 py-1.5 text-sm lg:text-base font-semibold whitespace-nowrap transition-colors ${
                      isActive 
                        ? 'text-primary-700 dark:text-primary-400' 
                        : 'text-slate-800 dark:text-slate-200 hover:text-primary-700 dark:hover:text-primary-400'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
              
              <div className="flex items-center space-x-2 pl-3 border-l border-slate-300 dark:border-slate-700">
                <button
                  onClick={toggleTheme}
                  className="p-1.5 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                  aria-label="Toggle Dark Mode"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>

                <div className="relative flex items-center" ref={langDropdownRef}>
                  <button 
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className="flex items-center space-x-1.5 text-slate-800 dark:text-slate-200 hover:text-primary-700 dark:hover:text-white transition-colors py-1.5 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap"
                  >
                    <Globe className="h-4 w-4" />
                    <span className="text-sm lg:text-base font-semibold">{currentLang.label}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isLangOpen && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-900 rounded-xl shadow-xl py-2 border border-slate-100 dark:border-slate-800 animate-in fade-in slide-in-from-top-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                            currentLang.code === lang.code 
                              ? 'bg-slate-50 dark:bg-slate-800 text-primary-600 dark:text-primary-400 font-bold' 
                              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                          }`}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <div className="relative" ref={mobileLangDropdownRef}>
                <button 
                  onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                  className="flex items-center space-x-1 text-slate-700 dark:text-slate-300 py-2 px-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-medium">{currentLang.short}</span>
                </button>
                
                {isMobileLangOpen && (
                  <div className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-slate-900 rounded-xl shadow-xl py-2 border border-slate-100 dark:border-slate-800 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-4 py-2 text-sm ${
                          currentLang.code === lang.code 
                            ? 'bg-slate-50 dark:bg-slate-800 text-primary-600 dark:text-primary-400 font-bold' 
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none p-2"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border border-slate-100 dark:border-slate-800 shadow-xl absolute w-[95%] left-[2.5%] top-full mt-2 rounded-2xl overflow-hidden z-50">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive 
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20' 
                        : 'text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </motion.nav>
    </div>
  );
};

export default Navbar;
