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
        className={`pointer-events-auto transition-all duration-300 w-full max-w-5xl rounded-full relative bg-white/90 backdrop-blur-md border border-black/10 ${
        isScrolled ? 'py-0.5 shadow-lg' : 'py-1 shadow-md'
      }`}>
        <div className="w-full px-4 lg:px-8">
          <div className="flex justify-between items-center relative min-h-[3rem]">
            <Link to="/" className="flex items-center shrink-0">
              <img 
                src="/logo.png" 
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
                    className={`relative px-2 py-1.5 font-body text-sm tracking-wide transition-colors ${
                      isActive 
                        ? 'text-black font-bold' 
                        : 'text-black/70 hover:text-black'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
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
                className="text-black/70 hover:text-black focus:outline-none p-2"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t border-black/10 absolute w-[95%] left-[2.5%] top-full mt-2 rounded-2xl overflow-hidden z-50 shadow-xl">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 font-body text-base transition-colors ${
                      isActive 
                        ? 'text-black font-bold bg-black/5 rounded-xl' 
                        : 'text-black hover:bg-black/5 rounded-xl'
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
