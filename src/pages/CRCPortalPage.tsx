import { motion } from 'framer-motion';
import { Wallet, Package, ArrowRightLeft, TrendingUp, Clock } from 'lucide-react';

const CRCPortalPage = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Header Section */}
      <section className="bg-black pt-32 pb-16 px-6 md:px-12 lg:px-20 text-center flex flex-col md:flex-row md:items-end justify-between">
        <div className="text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl text-white tracking-wider uppercase mb-2"
          >
            CRC Collector Portal
          </motion.h1>
          <div className="w-12 h-0.5 bg-red mt-4 mb-6" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center text-white/60 font-body"
          >
            <span className="w-2 h-2 bg-red rounded-full mr-2"></span>
            Dhading Branch - Collector ID #8842
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        
        {/* Left Column: Wallet / Main Action */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Dashboard Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-black/10 rounded-lg p-8 hover:border-black/40 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-8 md:mb-0">
                <div className="text-black/40 font-body text-sm uppercase tracking-wide mb-2">Available Credits</div>
                <div className="font-heading text-5xl text-black tracking-wider mb-4">3,450 <span className="text-3xl text-black/60">NPR</span></div>
                <p className="text-black/70 font-body text-sm max-w-sm leading-relaxed">
                  Earned from <strong>240 kg</strong> of total collected plastic this month.
                </p>
              </div>
              
              <div className="flex flex-col space-y-4 min-w-[200px]">
                <button className="flex items-center justify-center py-3 px-6 bg-red text-white hover:bg-black rounded-full font-body font-bold text-sm tracking-wide transition-colors duration-300">
                  <Wallet className="w-4 h-4 mr-2" />
                  Request Payout
                </button>
                <button className="flex items-center justify-center py-3 px-6 bg-transparent border border-black text-black hover:bg-black hover:text-white rounded-full font-body text-sm tracking-wide transition-colors duration-300">
                  <Package className="w-4 h-4 mr-2" />
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
            className="bg-white border border-black/10 rounded-lg p-8"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-heading text-2xl tracking-wider text-black uppercase flex items-center">
                <Clock className="w-6 h-6 mr-3 text-black" />
                Recent Deposits
              </h2>
              <button className="text-sm font-body text-black hover:text-red transition-colors">
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="py-4 px-4 font-body text-sm text-black/40 uppercase tracking-wide">Date</th>
                    <th className="py-4 px-4 font-body text-sm text-black/40 uppercase tracking-wide">Material</th>
                    <th className="py-4 px-4 font-body text-sm text-black/40 uppercase tracking-wide text-right">Weight</th>
                    <th className="py-4 px-4 font-body text-sm text-black/40 uppercase tracking-wide text-right">Credits Earned</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10">
                  <tr className="hover:bg-black/5 transition-colors">
                    <td className="py-5 px-4 font-body text-sm text-black/70">2023-10-12</td>
                    <td className="py-5 px-4 font-body text-sm text-black/70">PP (Clean)</td>
                    <td className="py-5 px-4 font-body text-sm text-black font-bold text-right">45 kg</td>
                    <td className="py-5 px-4 font-body text-sm text-black font-bold text-right">+450 NPR</td>
                  </tr>
                  <tr className="hover:bg-black/5 transition-colors">
                    <td className="py-5 px-4 font-body text-sm text-black/70">2023-10-08</td>
                    <td className="py-5 px-4 font-body text-sm text-black/70">LDPE</td>
                    <td className="py-5 px-4 font-body text-sm text-black font-bold text-right">12 kg</td>
                    <td className="py-5 px-4 font-body text-sm text-black font-bold text-right">+84 NPR</td>
                  </tr>
                  <tr className="hover:bg-black/5 transition-colors">
                    <td className="py-5 px-4 font-body text-sm text-black/70">2023-09-28</td>
                    <td className="py-5 px-4 font-body text-sm text-black/70">Mixed Plastics</td>
                    <td className="py-5 px-4 font-body text-sm text-black font-bold text-right">89 kg</td>
                    <td className="py-5 px-4 font-body text-sm text-black font-bold text-right">+445 NPR</td>
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
            className="bg-white border border-black/10 rounded-lg p-6 h-full"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 border border-black/10 text-black rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h2 className="font-heading text-xl tracking-wider text-black uppercase">Today's Rates</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-black/10 rounded-lg">
                <span className="font-body text-sm text-black/70">PP (Clean, Sorted)</span>
                <div className="font-body text-sm text-black font-bold">
                  10 NPR<span className="text-black/40 ml-1">/kg</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-black/10 rounded-lg">
                <span className="font-body text-sm text-black/70">LDPE (Bags)</span>
                <div className="font-body text-sm text-black font-bold">
                  7 NPR<span className="text-black/40 ml-1">/kg</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-black/10 rounded-lg">
                <span className="font-body text-sm text-black/70">Mixed / Unsorted</span>
                <div className="font-body text-sm text-black font-bold">
                  5 NPR<span className="text-black/40 ml-1">/kg</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-black/10 flex items-center justify-center font-body text-sm text-black/40">
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
