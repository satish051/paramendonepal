import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Map, ShieldCheck, Database, Users, Home } from 'lucide-react';

const services = [
  {
    title: 'Sponsor a Roof',
    desc: 'Support vulnerable communities by sponsoring sustainable roofing made from our recycled boards.',
    link: '/sponsor-a-roof',
    icon: Home,
  },
  {
    title: 'ESG Certificates',
    desc: 'Empower your corporate sustainability goals with verified Environmental, Social, and Governance certificates.',
    link: 'https://paramendonepal.vercel.app/certificate',
    icon: ShieldCheck,
  },
  {
    title: 'School Programs',
    desc: 'Educating the next generation on circular economy practices and waste management.',
    link: 'https://paramendonepal.vercel.app/learn',
    icon: BookOpen,
  },
  {
    title: 'CRC Portal',
    desc: 'Access our Community Recycling Center portal to track materials, manage logistics, and monitor impact.',
    link: '/crc-portal',
    icon: Users,
  },
  {
    title: 'Data Room',
    desc: 'Full transparency into our operations, metrics, and community impact data.',
    link: '/transparency',
    icon: Database,
  },
  {
    title: 'Join the Loop Map',
    desc: 'Interactive map showing our active collection sites, partners, and the growing circular ecosystem.',
    link: '/join-the-loop',
    icon: Map,
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Warm, Minimalist Editorial Opening */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 lg:px-20 text-center border-b border-black/10 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA]/60 to-white">
        {/* Decorative line art */}
        <img 
          src="/art-nepal.png" 
          alt="" 
          aria-hidden="true"
          className="absolute -bottom-10 -right-10 w-[420px] lg:w-[520px] opacity-[0.06] pointer-events-none select-none"
        />
        <img 
          src="/art-flower.png" 
          alt="" 
          aria-hidden="true"
          className="absolute -top-12 -left-12 w-[320px] lg:w-[420px] opacity-[0.05] pointer-events-none select-none"
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-black/10 bg-white/80 backdrop-blur-sm text-black font-body text-xs uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red"></span>
            <span>Circular Enterprise</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-7xl tracking-wider text-black uppercase leading-tight"
          >
            Our Initiatives & Services
          </motion.h1>
          <div className="w-12 h-0.5 bg-red mt-4 mb-6 mx-auto" />
          <p className="text-black/70 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            We provide a range of services and impact-driven initiatives designed to build community-centric circular economies across Nepal.
          </p>
        </div>
      </section>
      
      <div className="bg-white py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isExternal = service.link.startsWith('http');
            const MotionLink = isExternal ? motion.a : motion(Link);
            
            return (
              <MotionLink
                href={isExternal ? service.link : undefined}
                to={!isExternal ? service.link : undefined}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-black/10 rounded-lg p-8 hover:border-black/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-red" />
                </div>
                <h3 className="font-heading text-2xl tracking-wider text-black mb-2 uppercase">
                  {service.title}
                </h3>
                <p className="text-black/60 font-body text-sm flex-grow">
                  {service.desc}
                </p>
                <div className="text-black hover:text-red transition-colors font-body text-sm mt-4 inline-flex items-center gap-2">
                  Explore Initiative <ArrowRight className="w-4 h-4" />
                </div>
              </MotionLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
