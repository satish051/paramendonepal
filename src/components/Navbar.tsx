import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t('Home'), path: '/' },
    { name: t('About Us'), path: '/about' },
    { name: t('Our Work'), path: '/work' },
    { name: t('Blog'), path: '/blog' },
    { name: t('Contact Us'), path: '/contact' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center shrink-0">
            <img src="/logo.webp" alt="Paramendo Logo" className="h-10 md:h-12 w-auto" />
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-green-600 border-b-2 border-green-600' 
                      : 'text-slate-600 hover:text-green-600'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <div className="flex items-center space-x-1 pl-4 border-l border-slate-200">
              <Globe className="h-4 w-4 text-slate-500" />
              <select 
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.resolvedLanguage || 'en'}
                className="bg-transparent text-slate-600 text-sm focus:outline-none cursor-pointer"
              >
                <option value="en">English</option>
                <option value="ar">العربية</option>
                <option value="zh">中文</option>
                <option value="fr">Français</option>
                <option value="ru">Русский</option>
                <option value="es">Español</option>
              </select>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Globe className="h-4 w-4 text-slate-500" />
              <select 
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.resolvedLanguage || 'en'}
                className="bg-transparent text-slate-600 text-sm focus:outline-none cursor-pointer"
              >
                <option value="en">EN</option>
                <option value="ar">AR</option>
                <option value="zh">ZH</option>
                <option value="fr">FR</option>
                <option value="ru">RU</option>
                <option value="es">ES</option>
              </select>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-green-600 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    isActive 
                      ? 'text-green-700 bg-green-50' 
                      : 'text-slate-600 hover:text-green-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

