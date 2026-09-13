import { Eye, Target, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const VisionMission = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Vision Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative py-24 px-8 md:px-16 flex flex-col justify-center overflow-hidden bg-black group"
        >
          <div 
            className="absolute inset-0 opacity-40 mix-blend-overlay transition-transform duration-1000 group-hover:scale-110"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/2088210/pexels-photo-2088210.jpeg?auto=compress&cs=tinysrgb&w=1200')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></div>
          <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>
          
          <div className="relative z-10 text-white max-w-xl ml-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
              <Eye className="w-5 h-5 text-white" />
              <span className="text-sm font-bold tracking-widest uppercase text-white font-body">Our Vision</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading tracking-wider text-white uppercase mb-6 leading-tight">
              A clean, resilient <br/>Zero-Waste Nepal.
            </h2>
            <div className="w-12 h-0.5 bg-red mt-4 mb-8" />
            
            <p className="text-white/70 font-body text-lg leading-relaxed">
              A clean, resilient Nepal where plastic waste is completely diverted from ecosystems and re-integrated into a self-sustaining circular economy.
            </p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative py-24 px-8 md:px-16 flex flex-col justify-center bg-white overflow-hidden"
        >
          {/* Decorative line art — Nepal scene */}
          <img 
            src="/art-nepal.png" 
            alt="" 
            aria-hidden="true"
            className="absolute bottom-0 right-0 w-[400px] lg:w-[500px] opacity-[0.08] pointer-events-none select-none"
          />
          <div className="relative z-10 max-w-xl mr-auto">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-6 border border-black/10">
              <Target className="w-5 h-5 text-black" />
              <span className="text-sm font-bold tracking-widest uppercase text-black font-body">Our Mission</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading tracking-wider text-black uppercase mb-6 leading-tight">
              Action-driven <br/>Circular Economy.
            </h2>
            <div className="w-12 h-0.5 bg-red mt-4 mb-8" />
            
            <p className="text-black/60 font-body text-lg leading-relaxed mb-6">
              To engineer localized, market-driven circular economy solutions across Nepal by transforming low-value plastic waste into premium, functional materials while creating green employment for local communities.
            </p>

            <motion.ul 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } }
              }}
              className="space-y-6"
            >
              {[
                'Reduce plastic pollution by implementing innovative recycling methods.',
                'Upcycle plastic waste into useful and sustainable products.',
                'Empower local communities through education, employment, and entrepreneurship.',
                'Promote a circular economy where waste is transformed into resources.'
              ].map((item, idx) => (
                <motion.li 
                  key={idx} 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start group"
                >
                  <div className="flex-shrink-0 mt-1 flex items-center justify-center w-8 h-8 rounded-full bg-white border border-black/10 group-hover:border-black/40 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-red" />
                  </div>
                  <span className="text-black/60 font-body text-lg ml-4 leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
