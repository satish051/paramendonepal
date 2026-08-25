import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <Link to="/" className="inline-block bg-white/5 p-2 rounded-lg hover:bg-white/10 transition-colors">
              <img src="/logo.webp" alt="Paramendo Logo" className="h-10 w-auto filter brightness-0 invert" style={{ filter: 'brightness(0) invert(1) drop-shadow(0 0 2px rgba(255,255,255,0.3))' }} />
            </Link>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-slate-400 max-w-sm">
              Transforming plastic waste into sustainable solutions for rural communities.
            </p>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-slate-800 text-sm text-center text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} paramendonepal.com. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link to="/work" className="hover:text-white transition-colors">Our Work</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
