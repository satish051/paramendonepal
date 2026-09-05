import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [content, setContent] = useState({
    aboutText: "Transforming plastic waste into sustainable solutions. We are dedicated to creating a circular economy that empowers rural communities across Nepal.",
    location: "Pulchowk, Lalitpur, Bagmati Province, Nepal",
    email1: "contact@paramendonepal.com",
    email2: "paramendonepal@gmail.com"
  });

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        if (data && data.footer) setContent(data.footer);
      })
      .catch(console.error);
  }, []);

  return (
    <footer className="bg-[#0B0F19] text-slate-300 pt-20 pb-10 border-t border-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-30"></div>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-primary-500 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column (Spans 3) */}
          <div className="md:col-span-12 lg:col-span-4 space-y-8">
            <Link to="/" className="inline-block group">
              <div className="bg-white/5 p-3 rounded-2xl hover:bg-white/10 transition-colors border border-white/5 shadow-sm group-hover:border-primary-500/30">
                <img src="/logo.webp" alt="Paramendo Logo" className="h-14 w-auto object-contain group-hover:scale-105 transition-transform" />
              </div>
            </Link>
            <p className="text-base text-slate-400 leading-relaxed max-w-sm font-light">
              {content.aboutText}
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://www.facebook.com/ParamendoNepal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/25 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/paramendo_nepal/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/paramendo-nepal/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-white font-bold tracking-widest uppercase mb-6 text-sm flex items-center">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
              Explore
            </h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors duration-300 font-light">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors duration-300 font-light">About Us</Link></li>
              <li><Link to="/work" className="text-slate-400 hover:text-white transition-colors duration-300 font-light">Our Work</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-white transition-colors duration-300 font-light">Journal & News</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors duration-300 font-light">Contact Us</Link></li>
            </ul>
          </div>

          {/* Initiatives Column */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-white font-bold tracking-widest uppercase mb-6 text-sm flex items-center">
              <span className="w-2 h-2 bg-[#10b981] rounded-full mr-3 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
              Initiatives
            </h3>
            <ul className="space-y-4">
              <li><Link to="/sponsor-a-roof" className="group text-slate-400 hover:text-white hover:translate-x-2 inline-flex items-center transition-all duration-300 font-light"><ArrowRight className="w-3 h-3 mr-2 text-[#10b981] opacity-0 -ml-5 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" /> Sponsor a Roof</Link></li>
              <li><a href="https://paramendonepal.vercel.app/certificate" target="_blank" rel="noopener noreferrer" className="group text-slate-400 hover:text-white hover:translate-x-2 inline-flex items-center transition-all duration-300 font-light"><ArrowRight className="w-3 h-3 mr-2 text-[#10b981] opacity-0 -ml-5 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" /> ESG Certificates</a></li>
              <li><a href="https://paramendonepal.vercel.app/learn" target="_blank" rel="noopener noreferrer" className="group text-slate-400 hover:text-white hover:translate-x-2 inline-flex items-center transition-all duration-300 font-light"><ArrowRight className="w-3 h-3 mr-2 text-[#10b981] opacity-0 -ml-5 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" /> School Programs</a></li>
              <li><Link to="/crc-portal" className="group text-slate-400 hover:text-white hover:translate-x-2 inline-flex items-center transition-all duration-300 font-light"><ArrowRight className="w-3 h-3 mr-2 text-[#10b981] opacity-0 -ml-5 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" /> CRC Portal</Link></li>
              <li><Link to="/transparency" className="group text-slate-400 hover:text-white hover:translate-x-2 inline-flex items-center transition-all duration-300 font-light"><ArrowRight className="w-3 h-3 mr-2 text-[#10b981] opacity-0 -ml-5 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" /> Data Room</Link></li>
              <li><Link to="/join-the-loop" className="group text-slate-400 hover:text-white hover:translate-x-2 inline-flex items-center transition-all duration-300 font-light"><ArrowRight className="w-3 h-3 mr-2 text-[#10b981] opacity-0 -ml-5 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" /> Join the Loop Map</Link></li>
              <li className="pt-4 mt-4 border-t border-slate-800"><a href="https://canva.link/xqyuac8lr9t875v" target="_blank" rel="noopener noreferrer" className="group text-primary-400 hover:text-primary-300 hover:translate-x-2 inline-flex items-center transition-all duration-300 font-medium"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" /> Product Catalogue</a></li>
              <li><a href="https://docs.google.com/document/d/1Cc2TJQ5bW9kBvsW-0IsrJpRBcW5tUIkjP-7sHYviBZY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="group text-slate-400 hover:text-white hover:translate-x-2 inline-flex items-center transition-all duration-300 font-light"><ArrowRight className="w-3 h-3 mr-2 text-primary-500 opacity-0 -ml-5 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" /> Media Kit</a></li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div className="md:col-span-8 lg:col-span-3">
            <h3 className="text-white font-bold tracking-widest uppercase mb-6 text-sm flex items-center">
              <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3 shadow-[0_0_10px_rgba(236,72,153,0.8)]"></span>
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-slate-900 p-2 rounded-lg text-primary-400 border border-slate-700 shadow-sm flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <div className="text-sm text-slate-400 font-light leading-relaxed">
                    <p className="text-slate-300 mb-1">HQ & Community Center</p>
                    {content.location}
                  </div>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-slate-900 p-2 rounded-lg text-secondary-400 border border-slate-700 shadow-sm flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="w-full overflow-hidden">
                  <h4 className="text-white font-medium mb-1">Email Us</h4>
                  <div className="flex flex-col space-y-2 text-sm">
                    <a href={`mailto:${content.email1}`} className="text-slate-400 hover:text-white transition-colors font-light truncate block" title={content.email1}>{content.email1}</a>
                    <a href={`mailto:${content.email2}`} className="text-slate-400 hover:text-white transition-colors font-light truncate block" title={content.email2}>{content.email2}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500 font-light text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-white font-semibold tracking-wide">Paramendo Nepal</span>. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-8 gap-y-4 text-sm font-light">
            <Link to="/privacy" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/login" className="text-slate-600 hover:text-white transition-colors">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
