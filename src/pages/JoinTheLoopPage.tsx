import { motion } from 'framer-motion';
import { MapPin, Building2, GraduationCap, Users } from 'lucide-react';

const JoinTheLoopPage = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="px-4 max-w-5xl mx-auto text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold text-sm mb-6 border border-emerald-200 dark:border-emerald-800 uppercase tracking-widest"
        >
          Join The Loop
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
        >
          Community Collection Map
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Find your nearest collection point in Dhading or register your school/business to host a plastic drive.
        </motion.p>
      </section>

      <section className="px-4 max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        
        {/* Left Column: Active Points List */}
        <div className="lg:col-span-1 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <MapPin className="w-6 h-6 mr-3 text-emerald-500" />
            Active Points
          </h2>

          {/* Point 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-colors"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Ree Central CRC</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-3 font-medium">Main Processing Facility</p>
                <div className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold uppercase tracking-wider">
                  Accepting All Plastics
                </div>
              </div>
            </div>
          </motion.div>

          {/* Point 2 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-colors"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Shree Secondary School</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-3 font-medium">Partner School Drop-off</p>
                <div className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold uppercase tracking-wider">
                  PET & PP Only
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-3xl border border-emerald-200 dark:border-emerald-800/50 mt-8 text-center"
          >
            <div className="w-14 h-14 mx-auto bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mb-4">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">Want to collect?</h3>
            <p className="text-emerald-700 dark:text-emerald-300 mb-6 text-sm">
              Register your community group to become an official partner.
            </p>
            <button className="w-full py-3 px-6 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              Host a Plastic Drive
            </button>
          </motion.div>
        </div>

        {/* Right Column: Visual Map Area */}
        <div className="lg:col-span-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-full min-h-[500px] bg-slate-200 dark:bg-slate-800 rounded-3xl shadow-inner border border-slate-300 dark:border-slate-700 overflow-hidden relative"
          >
            {/* Map Placeholder Image */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Dhading Map Area" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-40"
            />
            
            {/* Map Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Dhading Region Map</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Interactive map loading...</p>
                </div>
                <div className="flex space-x-2">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </section>
    </div>
  );
};

export default JoinTheLoopPage;
