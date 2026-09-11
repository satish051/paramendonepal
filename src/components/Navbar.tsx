import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed w-full top-0 z-50 flex justify-center mt-4 px-4 pointer-events-none">
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
        className={`pointer-events-auto transition-all duration-300 w-full max-w-5xl rounded-full relative ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border border-slate-200 shadow-lg py-0.5' 
          : 'bg-white/70 backdrop-blur-md border border-white/40 shadow-md py-1'
      }`}>
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
                        ? 'text-primary-700' 
                        : 'text-slate-800 hover:text-primary-700'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-700 hover:text-primary-600 focus:outline-none p-2"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl absolute w-[95%] left-[2.5%] top-full mt-2 rounded-2xl overflow-hidden z-50">
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
                        ? 'text-primary-600 bg-primary-50' 
                        : 'text-slate-700 hover:text-primary-600 hover:bg-slate-50'
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
