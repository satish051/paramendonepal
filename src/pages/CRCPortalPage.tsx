import { motion } from 'framer-motion';
import { Wallet, Package, ArrowRightLeft, TrendingUp, Clock } from 'lucide-react';

const CRCPortalPage = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Header Section */}
      <section className="px-4 max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-2"
          >
            CRC Collector Portal
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center text-slate-500 dark:text-slate-400 font-medium"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
            Dhading Branch - Collector ID #8842
          </motion.div>
        </div>
      </section>

      <section className="px-4 max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        
        {/* Left Column: Wallet / Main Action */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Dashboard Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden"
          >
            {/* Background design */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-black/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-8 md:mb-0">
                <div className="text-emerald-100 font-semibold mb-2 uppercase tracking-wider text-sm">Available Credits</div>
                <div className="text-5xl md:text-7xl font-black mb-4 tracking-tight">3,450 <span className="text-3xl md:text-4xl text-emerald-100 font-bold">NPR</span></div>
                <p className="text-emerald-50 max-w-sm leading-relaxed">
                  Earned from <strong>240 kg</strong> of total collected plastic this month.
                </p>
              </div>
              
              <div className="flex flex-col space-y-4 min-w-[200px]">
                <button className="flex items-center justify-center py-4 px-6 bg-white text-emerald-600 hover:bg-emerald-50 rounded-xl font-bold transition-colors shadow-lg">
                  <Wallet className="w-5 h-5 mr-2" />
                  Request Payout
                </button>
                <button className="flex items-center justify-center py-4 px-6 bg-emerald-700/50 hover:bg-emerald-700 text-white border border-emerald-400/30 rounded-xl font-bold transition-colors backdrop-blur-sm">
                  <Package className="w-5 h-5 mr-2" />
                  Trade for Goods
                </button>
              </div>
            </div>
          </motion.div>

          {/* Recent Deposits Table */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-800"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
                <Clock className="w-6 h-6 mr-3 text-emerald-500" />
                Recent Deposits
              </h2>
              <button className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 hover:underline">
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <th className="py-4 px-4 text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Date</th>
                    <th className="py-4 px-4 text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Material</th>
                    <th className="py-4 px-4 text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Weight</th>
                    <th className="py-4 px-4 text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Credits Earned</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                    <td className="py-5 px-4 text-slate-900 dark:text-white font-medium">2023-10-12</td>
                    <td className="py-5 px-4 text-slate-600 dark:text-slate-300">PP (Clean)</td>
                    <td className="py-5 px-4 text-slate-900 dark:text-white font-bold text-right">45 kg</td>
                    <td className="py-5 px-4 text-emerald-600 dark:text-emerald-400 font-bold text-right">+450 NPR</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                    <td className="py-5 px-4 text-slate-900 dark:text-white font-medium">2023-10-08</td>
                    <td className="py-5 px-4 text-slate-600 dark:text-slate-300">LDPE</td>
                    <td className="py-5 px-4 text-slate-900 dark:text-white font-bold text-right">12 kg</td>
                    <td className="py-5 px-4 text-emerald-600 dark:text-emerald-400 font-bold text-right">+84 NPR</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                    <td className="py-5 px-4 text-slate-900 dark:text-white font-medium">2023-09-28</td>
                    <td className="py-5 px-4 text-slate-600 dark:text-slate-300">Mixed Plastics</td>
                    <td className="py-5 px-4 text-slate-900 dark:text-white font-bold text-right">89 kg</td>
                    <td className="py-5 px-4 text-emerald-600 dark:text-emerald-400 font-bold text-right">+445 NPR</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Exchange Rates */}
        <div className="lg:col-span-1">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 h-full"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-orange-50 dark:bg-orange-900/30 text-orange-500 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Today's Exchange Rates</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                <span className="font-semibold text-slate-700 dark:text-slate-300">PP (Clean, Sorted)</span>
                <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-lg">
                  10 NPR<span className="text-sm font-medium text-emerald-600/70 dark:text-emerald-400/70 ml-1">/kg</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                <span className="font-semibold text-slate-700 dark:text-slate-300">LDPE (Bags)</span>
                <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-lg">
                  7 NPR<span className="text-sm font-medium text-emerald-600/70 dark:text-emerald-400/70 ml-1">/kg</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Mixed / Unsorted</span>
                <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-lg">
                  5 NPR<span className="text-sm font-medium text-emerald-600/70 dark:text-emerald-400/70 ml-1">/kg</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center text-sm text-slate-500 dark:text-slate-400">
              <ArrowRightLeft className="w-4 h-4 mr-2" />
              Rates updated daily at 08:00 AM NPT
            </div>
          </motion.div>
        </div>

      </section>
    </div>
  );
};

export default CRCPortalPage;
