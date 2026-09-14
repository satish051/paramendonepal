import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Trigger floating pill transition after scrolling past 40px
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // When at top of page on dark hero (home page), use crisp white text for transparent state
  const isTransparent = !isScrolled;

  return (
    <header className="fixed w-full top-0 z-50 pointer-events-none transition-all duration-500">
      <div 
        className={`w-full flex justify-center transition-all duration-500 ${
          isScrolled ? 'pt-3 px-4 md:px-6' : 'pt-0 px-0'
        }`}
      >
        <motion.nav 
          layout
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className={`pointer-events-auto transition-all duration-500 relative ${
            isScrolled
              ? 'w-full max-w-5xl rounded-full bg-white/95 backdrop-blur-xl border border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-1.5 px-4 sm:px-6'
              : 'w-full max-w-7xl border-b border-transparent py-5 px-6 md:px-12 lg:px-20'
          }`}
        >
          <div className="flex justify-between items-center h-12">
            {/* Left: Brand Logo & Typography */}
            <Link to="/" className="flex items-center space-x-3 shrink-0 group">
              <img 
                src="/logo.png" 
                alt="Paramendo Logo" 
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? 'h-8 md:h-9' : 'h-8 md:h-9'
                } ${isTransparent && isHome ? 'brightness-0 invert' : ''}`} 
              />
              <span 
                className={`font-heading text-xl tracking-[0.2em] uppercase transition-colors duration-300 hidden sm:inline-block ${
                  isScrolled 
                    ? 'text-black' 
                    : isHome 
                      ? 'text-white' 
                      : 'text-black'
                }`}
              >
                PARAMENDO
              </span>
            </Link>
          
            {/* Center: Desktop Nav Links (Editorial '/' delimiter style at top) */}
            <div className="hidden md:flex items-center">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.path;
                return (
                  <div key={link.name} className="flex items-center">
                    {/* Delimiter slash in full transparent top mode */}
                    {isTransparent && idx > 0 && (
                      <span 
                        className={`text-xs px-2 select-none transition-colors duration-300 ${
                          isHome ? 'text-white/30' : 'text-black/25'
                        }`}
                      >
                        /
                      </span>
                    )}

                    <Link 
                      to={link.path}
                      className={`relative font-body text-sm tracking-wide transition-all duration-300 ${
                        isScrolled
                          ? `px-3.5 py-1.5 rounded-full ${
                              isActive 
                                ? 'text-black font-bold' 
                                : 'text-black/60 hover:text-black hover:bg-black/5'
                            }`
                          : `px-2.5 py-1 ${
                              isHome 
                                ? isActive 
                                  ? 'text-white font-semibold underline underline-offset-8 decoration-white/40' 
                                  : 'text-white/80 hover:text-white'
                                : isActive 
                                  ? 'text-black font-semibold underline underline-offset-8 decoration-black/40' 
                                  : 'text-black/70 hover:text-black'
                            }`
                      }`}
                    >
                      {link.name}
                      {isScrolled && isActive && (
                        <motion.div
                          layoutId="navbar-active-pill"
                          className="absolute inset-0 bg-black/[0.06] rounded-full -z-10"
                          initial={false}
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Right: Quick Action Button / CTA */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                to="/products"
                className={`text-xs font-body uppercase tracking-wider font-semibold px-4 py-2 rounded-full transition-all duration-300 inline-flex items-center gap-1.5 ${
                  isScrolled
                    ? 'bg-black text-white hover:bg-red'
                    : isHome
                      ? 'border border-white/40 text-white hover:bg-white hover:text-black'
                      : 'border border-black/20 text-black hover:bg-black hover:text-white'
                }`}
              >
                <span>Products</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-full transition-colors focus:outline-none ${
                  isScrolled 
                    ? 'text-black hover:bg-black/5' 
                    : isHome 
                      ? 'text-white hover:bg-white/10' 
                      : 'text-black hover:bg-black/5'
                }`}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                className="md:hidden absolute w-[96%] left-[2%] top-full mt-2 bg-white border border-black/10 rounded-2xl overflow-hidden z-50 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              >
                <div className="px-4 py-4 space-y-1">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 font-body text-base transition-colors rounded-xl ${
                          isActive 
                            ? 'text-black font-bold bg-black/5' 
                            : 'text-black/70 hover:text-black hover:bg-black/[0.03]'
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                  <div className="pt-3 mt-2 border-t border-black/10">
                    <Link
                      to="/products"
                      onClick={() => setIsOpen(false)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-red text-white py-3 rounded-xl font-body text-sm font-semibold tracking-wider uppercase"
                    >
                      <span>Explore Products</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar;
