import { motion } from 'framer-motion';
import About from '../components/About';
import VisionMission from '../components/VisionMission';

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Warm Editorial Hero Section for About Page */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 lg:px-20 text-center border-b border-black/10 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA]/60 to-white">
        {/* Subtle decorative line-art illustration */}
        <img 
          src="/art-flower.png" 
          alt="" 
          aria-hidden="true"
          className="absolute -bottom-6 right-4 sm:right-10 w-[240px] md:w-[320px] lg:w-[400px] opacity-[0.22] pointer-events-none select-none"
        />
        <img 
          src="/art-nepal.png" 
          alt="" 
          aria-hidden="true"
          className="absolute top-20 left-4 sm:left-10 w-[220px] md:w-[280px] lg:w-[360px] opacity-[0.16] pointer-events-none select-none"
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-black/10 bg-white/80 backdrop-blur-sm text-black font-body text-xs uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red"></span>
            <span>Our Mission & Vision</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-7xl tracking-wider text-black uppercase leading-tight"
          >
            About Paramendo Nepal
          </motion.h1>
          <div className="w-12 h-0.5 bg-red mt-4 mb-6 mx-auto" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-black/70 font-body text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Pioneering decentralized circular solutions in high-altitude mountain ecosystems across Nepal.
          </motion.p>
        </div>
      </section>

      <About />
      <VisionMission />
    </div>
  );
};

export default AboutPage;
