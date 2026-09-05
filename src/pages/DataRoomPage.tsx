import { motion } from 'framer-motion';
import { FileText, Download, BarChart, Settings, ExternalLink } from 'lucide-react';

const DataRoomPage = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="px-4 max-w-5xl mx-auto text-center mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-300 font-bold text-sm mb-6 border border-slate-300 dark:border-slate-700 uppercase tracking-widest"
        >
          Open Governance
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
        >
          Institutional Data Room
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mx-auto font-light leading-relaxed"
        >
          Committed to open governance. Access our Life Cycle Assessments (LCA), financial audits, and operational blueprints.
        </motion.p>
      </section>

      {/* Grid Content */}
      <section className="px-4 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 mb-16">
        
        {/* LCA Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center">
              <BarChart className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Life Cycle Assessment (LCA)</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Paramendo's upcycled PP tiles reduce carbon emissions by approximately <strong>45%</strong> compared to the production of virgin polypropylene, and by <strong>30%</strong> compared to traditional concrete pavers when accounting for transport and cement curing.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
              <div className="text-sm text-slate-500 dark:text-slate-400 mb-2 font-medium">Virgin PP CO2/kg</div>
              <div className="text-3xl font-black text-slate-400 dark:text-slate-500">~1.9 kg</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-100 dark:border-green-900/30 text-center">
              <div className="text-sm text-green-700 dark:text-green-400 mb-2 font-medium">Upcycled PP CO2/kg</div>
              <div className="text-3xl font-black text-green-600 dark:text-green-500">~1.05 kg</div>
            </div>
          </div>
        </motion.div>

        {/* Technical Blueprints */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
                <Settings className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">CRC Technical Blueprints</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Our Dhading Community Recycling Center is designed to be a scalable, reproducible model. We open-source our machine layouts, safety protocols, and operational workflows for NGOs looking to replicate our success.
            </p>
          </div>
          <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 font-bold rounded-xl transition-colors">
            Request Open-Source Blueprints <ExternalLink className="w-4 h-4 ml-2" />
          </button>
        </motion.div>
      </section>

      {/* Reports & Audits List */}
      <section className="px-4 max-w-7xl mx-auto">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex items-center space-x-4 mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
            <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Official Reports & Audits</h2>
          </div>

          <div className="space-y-4">
            {[
              "2023 Annual Impact Report (PDF)",
              "Financial Audit - FY 2022/2023 (PDF)",
              "Material Safety Data Sheet (MSDS) - PP Tiles",
              "ISO 9001 Compliance Roadmap"
            ].map((report, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 md:p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors group">
                <span className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4 sm:mb-0 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {report}
                </span>
                <button className="inline-flex items-center justify-center px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-300 font-medium hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-200 dark:hover:border-primary-900 shadow-sm transition-all group-hover:shadow-md">
                  <Download className="w-4 h-4 mr-2" /> Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default DataRoomPage;
