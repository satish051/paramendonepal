import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed w-full top-0 z-50 px-4 md:px-6 pointer-events-none">
      {/* Spacer to push pill down from very top edge */}
      <div className="flex justify-center pt-4">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
          className={`pointer-events-auto w-full max-w-5xl transition-all duration-500 rounded-full relative ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-xl border border-black/10 shadow-[0_1px_3px_rgba(0,0,0,0.08)]' 
              : 'bg-white/80 backdrop-blur-md border border-black/5'
          }`}
        >
          <div className="px-5 lg:px-8">
            <div className="flex justify-between items-center h-14">
              {/* Logo */}
              <Link to="/" className="flex items-center shrink-0">
                <img 
                  src="/logo.png" 
                  alt="Paramendo Logo" 
                  className="w-auto h-9 md:h-10 object-contain" 
                />
              </Link>
            
              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link 
                      key={link.name} 
                      to={link.path}
                      className={`relative px-3 lg:px-4 py-2 font-body text-sm tracking-wide transition-colors rounded-full ${
                        isActive 
                          ? 'text-black font-bold' 
                          : 'text-black/60 hover:text-black hover:bg-black/5'
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-active-pill"
                          className="absolute inset-0 bg-black/[0.06] rounded-full -z-10"
                          initial={false}
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-black/60 hover:text-black focus:outline-none p-2 rounded-full hover:bg-black/5 transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="md:hidden absolute w-[96%] left-[2%] top-full mt-2 bg-white border border-black/10 rounded-2xl overflow-hidden z-50 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              >
                <div className="px-3 py-3 space-y-0.5">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 font-body text-sm tracking-wide transition-colors rounded-xl ${
                          isActive 
                            ? 'text-black font-bold bg-black/5' 
                            : 'text-black/60 hover:text-black hover:bg-black/[0.03]'
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
