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
      <div className="bg-black pt-32 pb-16 px-6 md:px-12 lg:px-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-5xl md:text-7xl tracking-wider text-white uppercase"
        >
          Our Initiatives & Services
        </motion.h1>
        <div className="w-12 h-0.5 bg-red mt-4 mb-6 mx-auto" />
        <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
          We provide a range of services and impact-driven initiatives designed to build community-centric circular economies across Nepal.
        </p>
      </div>
      
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
