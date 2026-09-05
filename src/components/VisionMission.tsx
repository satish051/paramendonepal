import { Eye, Target, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const VisionMission = () => {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Vision Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative py-16 lg:py-20 px-8 sm:px-12 lg:px-20 flex flex-col justify-center overflow-hidden bg-slate-900 group"
        >
          <div 
            className="absolute inset-0 opacity-40 mix-blend-overlay transition-transform duration-1000 group-hover:scale-110"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/2088210/pexels-photo-2088210.jpeg?auto=compress&cs=tinysrgb&w=1200')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-slate-950/95 pointer-events-none"></div>
          
          <div className="relative z-10 text-white max-w-xl ml-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
              <Eye className="w-5 h-5 text-primary-300" />
              <span className="text-sm font-bold tracking-widest uppercase text-primary-100">Our Vision</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
              A clean, resilient <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Zero-Waste Nepal.</span>
            </h2>
            
            <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light">
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
          className="relative py-16 lg:py-20 px-8 sm:px-12 lg:px-20 flex flex-col justify-center bg-white dark:bg-slate-950 overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-500/5 dark:bg-secondary-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-xl mr-auto">
            <div className="inline-flex items-center space-x-2 bg-secondary-50 dark:bg-secondary-500/10 px-4 py-2 rounded-full mb-6 border border-secondary-100 dark:border-secondary-500/20">
              <Target className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
              <span className="text-sm font-bold tracking-widest uppercase text-secondary-600 dark:text-secondary-400">Our Mission</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
              Action-driven <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-primary-500">Circular Economy.</span>
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-6">
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
                  <div className="flex-shrink-0 mt-1 flex items-center justify-center w-8 h-8 rounded-full bg-secondary-50 dark:bg-secondary-500/10 group-hover:bg-secondary-100 dark:group-hover:bg-secondary-500/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-secondary-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-base md:text-lg text-slate-600 dark:text-slate-300 ml-4 leading-relaxed font-light">{item}</span>
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
