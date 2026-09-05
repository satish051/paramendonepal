import { Leaf, Mountain, ArrowRight, Shield, Zap, Globe, Cpu, Network, PenTool, Store } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section: Our Story */}
      <section id="about" className="py-12 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-primary-50 dark:bg-primary-500/10 px-4 py-2 rounded-full mb-8 border border-primary-100 dark:border-primary-500/20"
              >
                <Mountain className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                <span className="text-sm font-bold text-primary-600 dark:text-primary-400 tracking-wide uppercase">Our Story</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-8 tracking-tight"
              >
                From Mountain Trails to <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-primary-500">Circular Innovations</span>
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light"
              >
                <p>
                  In the rugged landscapes of Nepal's high-altitude regions—from the trails of the Himalayas to rural communities like Ree Village and Ruby Valley—plastic waste poses a quiet but catastrophic threat. Remote topographies, lack of traditional waste infrastructure, and the influx of single-use materials have historically meant that non-biodegradable plastics end up burned in open fires or discarded into pristine rivers and alpine trails.
                </p>
                <p>
                  Paramendo Nepal was born out of a determination to rewrite this narrative. We recognized that plastic waste is not simply garbage to be disposed of; it is an underutilized raw material waiting for local, high-value transformation.
                </p>
                <p>
                  Founded as a pioneering social enterprise, Paramendo Nepal bridges the gap between environmental conservation, community empowerment, and commercial innovation. By building decentralized waste management models, we intercept plastic waste before it degrades our ecosystems, upcycling it into durable, high-density structural boards, architectural materials, and sustainable consumer goods.
                </p>
              </motion.div>
            </div>
            
            <div className="relative order-1 lg:order-2 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-400 to-secondary-400 rounded-3xl blur-3xl opacity-20 dark:opacity-30 group-hover:opacity-40 transition-opacity duration-700 -z-10 transform scale-95"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Nepal Mountains and Environment" 
                  className="w-full h-[500px] md:h-[700px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="bg-slate-50 dark:bg-slate-900 py-24 md:py-32 border-y border-slate-100 dark:border-slate-800/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">What Sets Us Apart</h3>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-light">Resolving Hard-to-Recycle Waste</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-slate-600 dark:text-slate-300 text-center mb-12"
            >
              Standard recyclers often focus exclusively on easily processed clear plastics like PET bottles. At Paramendo Nepal, we target the tougher, high-volume challenge:
            </motion.p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-950 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800"
              >
                <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">High-Density Polyethylene (HDPE) & Polypropylene (PP)</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Sourced from rigid packaging, containers, and household items, processed into heavy-duty boards designed to replace traditional timber and plywood.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-950 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800"
              >
                <div className="w-14 h-14 bg-secondary-100 dark:bg-secondary-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-secondary-600 dark:text-secondary-400" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Multi-Layered Plastics (MLP)</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Sourced from food wrappers and flexible packaging—materials usually considered non-recyclable—which we hot-press into textured, durable composite materials.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Four-Pillar Value Chain */}
      <section className="py-24 md:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">Our Four-Pillar Value Chain</h3>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-light">A seamless loop from waste to wealth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Lines (Desktop only) */}
            <div className="hidden lg:block absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-primary-100 via-secondary-200 to-primary-100 dark:from-primary-900/40 dark:via-secondary-900/40 dark:to-primary-900/40 -z-10 mt-6" />
            
            {[
              {
                id: 1,
                title: 'Decentralized Collection & Sorting',
                icon: Network,
                desc: 'We collaborate directly with local governments, community leaders, and schools to set up collection networks in underserved rural regions and urban hubs.'
              },
              {
                id: 2,
                title: 'Local Processing & Upcycling',
                icon: Cpu,
                desc: 'Collected waste is sorted, thoroughly washed, shredded, and processed using specialized heat-press molding to form strong, weather-resistant plastic sheets.'
              },
              {
                id: 3,
                title: 'Product Fabrication',
                icon: PenTool,
                desc: 'We manufacture structural boards for construction and interior design, as well as eco-friendly consumer lines like our "Carry Everest" mountain souvenirs.'
              },
              {
                id: 4,
                title: 'Market & Community Impact',
                icon: Store,
                desc: 'Revenue generated from product sales flows back into local collection networks, creating sustainable livelihoods and self-reliant community waste systems.'
              }
            ].map((pillar, index) => (
              <motion.div 
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 text-center relative group"
              >
                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-200 dark:border-slate-700 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {pillar.id}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{pillar.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Visionary Team */}
      <section className="bg-slate-50 dark:bg-slate-900 py-24 md:py-32 border-y border-slate-100 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute inset-0 bg-primary-500 rounded-3xl blur-2xl opacity-20 transform -rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Rahul Bisunkhe" 
                className="relative rounded-3xl w-full h-[400px] md:h-[500px] object-cover shadow-xl border border-slate-200 dark:border-slate-700"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">Leadership & Visionary Team</h3>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-light mb-12">
                Paramendo Nepal is driven by a passionate team of social entrepreneurs, development professionals, and circular economy practitioners committed to sustainable development across Nepal.
              </p>
              
              <div className="bg-white dark:bg-slate-950 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 relative">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Globe className="w-24 h-24 text-primary-500" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 relative z-10">Rahul Bisunkhe</h4>
                <p className="text-primary-600 dark:text-primary-400 font-semibold mb-6 relative z-10">Co-Founder & Chief Executive Officer</p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed relative z-10">
                  A development professional and social entrepreneur, Rahul leads Paramendo Nepal's strategic vision, circular economy venture design, and community waste management initiatives across Nepal's rural and urban sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
