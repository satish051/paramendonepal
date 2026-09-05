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
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
        >
          Our Initiatives & Services
        </motion.h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-light">
          We provide a range of services and impact-driven initiatives designed to build community-centric circular economies across Nepal.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:border-primary-500/30 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-500 transition-all duration-300">
                <Icon className="w-7 h-7 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow">
                {service.desc}
              </p>
              <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold mt-auto">
                Explore Initiative <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </MotionLink>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesPage;
