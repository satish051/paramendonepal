import { motion } from 'framer-motion';
import { Home, School, Building2, CheckCircle2 } from 'lucide-react';

const SponsorARoofPage = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="px-4 max-w-7xl mx-auto text-center mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-bold text-sm mb-6 border border-red-200 dark:border-red-800 uppercase tracking-widest"
        >
          Monsoon Relief Campaign
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
        >
          Sponsor a Rural Roof
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-light leading-relaxed"
        >
          In rural Dhading, the monsoon season brings severe roof leaks to homes and schools. Your sponsorship directly provides families with our waterproof, upcycled LDPE roofing sheets.
        </motion.p>
      </section>

      {/* Progress Bar Section */}
      <section className="px-4 max-w-3xl mx-auto mb-32">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 dark:border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Monsoon Relief Progress</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">Help us reach our goal of insulating 500 roofs before the heavy rains begin.</p>
          
          <div className="flex justify-between items-end mb-3">
            <div>
              <span className="text-4xl font-black text-slate-900 dark:text-white">342</span>
              <span className="text-slate-500 font-medium ml-2">Roofs Insulated</span>
            </div>
            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Goal: 500</div>
          </div>
          
          <div className="w-full h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-3">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '68%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-primary-500 rounded-full"
            ></motion.div>
          </div>
          <div className="text-right text-sm font-bold text-primary-600 dark:text-primary-400">
            68% Funded — Thank you!
          </div>
        </div>
      </section>

      {/* Pricing/Impact Section */}
      <section className="px-4 max-w-7xl mx-auto mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">Choose Your Impact</h2>
          <p className="text-slate-600 dark:text-slate-400">100% of your sponsorship goes directly towards materials and local installation.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Option 1 */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
              <Home className="w-8 h-8" />
            </div>
            <div className="mb-6">
              <span className="text-4xl font-black text-slate-900 dark:text-white">$35</span>
              <span className="text-slate-500 font-medium ml-1">USD</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Sponsor a Family Home</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow">Provide enough LDPE roofing sheets to waterproof a standard rural home for the monsoon season.</p>
            <button className="w-full py-4 rounded-xl font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 dark:text-blue-400 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 transition-colors">
              Sponsor Now
            </button>
          </div>

          {/* Option 2 (Popular) */}
          <div className="bg-slate-900 dark:bg-slate-800 rounded-3xl p-8 border border-slate-800 shadow-2xl relative transform md:-translate-y-4 flex flex-col">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg">
              Most Popular
            </div>
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white">
              <School className="w-8 h-8" />
            </div>
            <div className="mb-6">
              <span className="text-4xl font-black text-white">$75</span>
              <span className="text-slate-400 font-medium ml-1">USD</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Sponsor a Classroom</h3>
            <p className="text-slate-300 mb-8 flex-grow">Insulate and waterproof a village classroom, ensuring students can learn comfortably during heavy rains.</p>
            <button className="w-full py-4 rounded-xl font-bold text-white bg-primary-600 hover:bg-primary-500 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              Sponsor Now
            </button>
          </div>

          {/* Option 3 */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
            <div className="w-16 h-16 bg-purple-50 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
              <Building2 className="w-8 h-8" />
            </div>
            <div className="mb-6">
              <span className="text-4xl font-black text-slate-900 dark:text-white">$150</span>
              <span className="text-slate-500 font-medium ml-1">USD</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Sponsor a Village Shelter</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow">Cover a large community gathering space or emergency shelter used by multiple families.</p>
            <button className="w-full py-4 rounded-xl font-bold text-purple-600 bg-purple-50 hover:bg-purple-100 dark:text-purple-400 dark:bg-purple-900/20 dark:hover:bg-purple-900/40 transition-colors">
              Sponsor Now
            </button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 dark:text-white mb-16">What happens after you sponsor?</h2>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-slate-200 dark:bg-slate-800 z-0"></div>
          
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 mx-auto bg-white dark:bg-slate-900 rounded-full border-4 border-primary-500 flex items-center justify-center text-xl font-black text-primary-600 dark:text-primary-400 mb-6 shadow-xl">1</div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Materials Prepared</h3>
            <p className="text-slate-600 dark:text-slate-400">Our Dhading CRC manufactures the required LDPE sheets from locally upcycled plastic waste.</p>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 mx-auto bg-white dark:bg-slate-900 rounded-full border-4 border-primary-500 flex items-center justify-center text-xl font-black text-primary-600 dark:text-primary-400 mb-6 shadow-xl">2</div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Local Installation</h3>
            <p className="text-slate-600 dark:text-slate-400">Our trained community technicians install the waterproof sheets on the designated home or school.</p>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 mx-auto bg-primary-500 rounded-full border-4 border-primary-500 flex items-center justify-center text-white mb-6 shadow-xl shadow-primary-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Photo Update</h3>
            <p className="text-slate-600 dark:text-slate-400">You receive a real-time photo of the installed roof, optionally tagged with your name or dedication.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SponsorARoofPage;
