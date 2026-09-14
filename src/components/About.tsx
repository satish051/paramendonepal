import { Mountain, Shield, Zap, Globe, Cpu, Network, PenTool, Store } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section: Our Story */}
      <section id="about" className="py-24 px-6 md:px-12 lg:px-20 overflow-hidden relative">
        {/* Decorative line art — flower & mountains */}
        <img 
          src="/art-flower.png" 
          alt="" 
          aria-hidden="true"
          className="absolute -bottom-6 left-4 md:left-12 w-[260px] md:w-[340px] lg:w-[400px] opacity-[0.14] pointer-events-none select-none -z-0"
        />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-8 border border-black/10"
              >
                <Mountain className="w-4 h-4 text-black" />
                <span className="text-sm font-bold text-black tracking-wide uppercase font-body">Our Story</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-heading tracking-wider uppercase text-black"
              >
                From Mountain Trails to Circular Innovations
              </motion.h2>
              <div className="w-12 h-0.5 bg-red mt-4 mb-8" />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6 text-black/60 font-body text-base md:text-lg leading-relaxed"
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
              <div className="relative rounded-lg overflow-hidden border border-black/10 bg-white">
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
      <section className="bg-white py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        {/* Decorative line art — Nepal scene placed tastefully behind grid */}
        <img 
          src="/art-nepal.png" 
          alt="" 
          aria-hidden="true"
          className="absolute -bottom-8 right-4 sm:right-16 w-[260px] md:w-[360px] lg:w-[440px] opacity-[0.14] pointer-events-none select-none z-0"
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-4xl md:text-5xl font-heading tracking-wider uppercase text-black">What Sets Us Apart</h3>
            <div className="w-12 h-0.5 bg-red mt-4 mb-8 mx-auto" />
            <p className="text-black/60 font-body text-base md:text-lg leading-relaxed">Resolving Hard-to-Recycle Waste</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-black/60 font-body text-base md:text-lg leading-relaxed text-center mb-12"
            >
              Standard recyclers often focus exclusively on easily processed clear plastics like PET bottles. At Paramendo Nepal, we target the tougher, high-volume challenge:
            </motion.p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-black/10 rounded-lg p-8 hover:border-black/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white border border-black/10 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-black" />
                </div>
                <h4 className="text-xl font-heading tracking-widest text-black uppercase mb-4">High-Density Polyethylene & Polypropylene</h4>
                <p className="text-black/60 font-body text-base leading-relaxed">
                  Sourced from rigid packaging, containers, and household items, processed into heavy-duty boards designed to replace traditional timber and plywood.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-black/10 rounded-lg p-8 hover:border-black/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white border border-black/10 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-black" />
                </div>
                <h4 className="text-xl font-heading tracking-widest text-black uppercase mb-4">Multi-Layered Plastics</h4>
                <p className="text-black/60 font-body text-base leading-relaxed">
                  Sourced from food wrappers and flexible packaging—materials usually considered non-recyclable—which we hot-press into textured, durable composite materials.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Four-Pillar Value Chain */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="text-4xl md:text-5xl font-heading tracking-wider uppercase text-black">Our Four-Pillar Value Chain</h3>
            <div className="w-12 h-0.5 bg-red mt-4 mb-8 mx-auto" />
            <p className="text-black/60 font-body text-base md:text-lg leading-relaxed">A seamless loop from waste to wealth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-24 left-0 w-full h-px bg-black/10 -z-10 mt-6" />
            
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
                className="bg-white border border-black/10 rounded-lg p-8 hover:border-black/40 hover:-translate-y-1 transition-all duration-300 text-center relative group"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-black/10 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-8 h-8 text-black" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red text-white text-xs font-bold font-body rounded-full flex items-center justify-center">
                    {pillar.id}
                  </div>
                </div>
                <h4 className="text-lg font-heading tracking-widest text-black uppercase mb-4">{pillar.title}</h4>
                <p className="text-black/60 font-body text-base leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Visionary Team */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative group order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Rahul Bisunkhe" 
                className="relative rounded-lg w-full h-[400px] md:h-[500px] object-cover border border-black/10"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-4xl md:text-5xl font-heading tracking-wider uppercase text-black">Leadership & Visionary Team</h3>
              <div className="w-12 h-0.5 bg-red mt-4 mb-8" />
              <p className="text-black/60 font-body text-base md:text-lg leading-relaxed mb-12">
                Paramendo Nepal is driven by a passionate team of social entrepreneurs, development professionals, and circular economy practitioners committed to sustainable development across Nepal.
              </p>
              
              <div className="bg-white border border-black/10 rounded-lg p-8 hover:border-black/40 hover:-translate-y-1 transition-all duration-300 relative">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Globe className="w-24 h-24 text-black" />
                </div>
                <h4 className="text-2xl font-heading tracking-widest text-black uppercase mb-2 relative z-10">Rahul Bisunkhe</h4>
                <p className="text-red font-body font-bold text-sm tracking-wide uppercase mb-6 relative z-10">Co-Founder & Chief Executive Officer</p>
                <p className="text-black/60 font-body text-base leading-relaxed relative z-10">
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
