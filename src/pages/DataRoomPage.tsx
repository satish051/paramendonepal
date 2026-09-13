import { motion } from 'framer-motion';
import { FileText, Download, BarChart, Settings, ExternalLink } from 'lucide-react';

const DataRoomPage = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-black pt-32 pb-16 px-6 md:px-12 lg:px-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 border border-white/20 text-white font-body text-sm mb-6 uppercase tracking-widest"
        >
          Open Governance
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl tracking-wider text-white uppercase"
        >
          Institutional Data Room
        </motion.h1>
        <div className="w-12 h-0.5 bg-red mx-auto mt-4 mb-6" />
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/70 font-body text-lg max-w-2xl mx-auto"
        >
          Committed to open governance. Access our Life Cycle Assessments (LCA), financial audits, and operational blueprints.
        </motion.p>
      </section>

      {/* Grid Content */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
        
        {/* LCA Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-black/10 rounded-lg p-8 hover:border-black/40 transition-all duration-300"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-red">
              <BarChart className="w-6 h-6" />
            </div>
            <h2 className="font-heading text-2xl tracking-wider text-black uppercase">Life Cycle Assessment (LCA)</h2>
          </div>
          <p className="text-black/60 font-body text-sm mb-8">
            Paramendo's upcycled PP tiles reduce carbon emissions by approximately <strong>45%</strong> compared to the production of virgin polypropylene, and by <strong>30%</strong> compared to traditional concrete pavers when accounting for transport and cement curing.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-black/10 p-6 rounded-lg text-center">
              <div className="text-sm font-body text-black/60 mb-2 uppercase">Virgin PP CO2/kg</div>
              <div className="font-heading text-3xl tracking-wider text-black">~1.9 kg</div>
            </div>
            <div className="bg-white border border-green p-6 rounded-lg text-center">
              <div className="text-sm font-body text-green mb-2 uppercase">Upcycled PP CO2/kg</div>
              <div className="font-heading text-3xl tracking-wider text-green">~1.05 kg</div>
            </div>
          </div>
        </motion.div>

        {/* Technical Blueprints */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-black/10 rounded-lg p-8 hover:border-black/40 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-red">
                <Settings className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-2xl tracking-wider text-black uppercase">CRC Technical Blueprints</h2>
            </div>
            <p className="text-black/60 font-body text-sm mb-8">
              Our Dhading Community Recycling Center is designed to be a scalable, reproducible model. We open-source our machine layouts, safety protocols, and operational workflows for NGOs looking to replicate our success.
            </p>
          </div>
          <button className="bg-transparent border border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300 font-body text-sm tracking-wide inline-flex items-center justify-center">
            Request Open-Source Blueprints <ExternalLink className="w-4 h-4 ml-2" />
          </button>
        </motion.div>
      </section>

      {/* Reports & Audits List */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pt-0">
        <div className="bg-white border border-black/10 rounded-lg p-8 md:p-12 hover:border-black/40 transition-all duration-300">
          <div className="flex items-center space-x-4 mb-8 border-b border-black/10 pb-6">
            <div className="text-red">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="font-heading text-3xl tracking-wider text-black uppercase">Official Reports & Audits</h2>
          </div>

          <div className="space-y-4">
            {[
              "2023 Annual Impact Report (PDF)",
              "Financial Audit - FY 2022/2023 (PDF)",
              "Material Safety Data Sheet (MSDS) - PP Tiles",
              "ISO 9001 Compliance Roadmap"
            ].map((report, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 md:p-6 bg-white border border-black/10 rounded-lg hover:border-black/40 transition-colors group">
                <span className="font-body text-sm text-black mb-4 sm:mb-0 group-hover:text-red transition-colors">
                  {report}
                </span>
                <button className="inline-flex items-center justify-center px-6 py-2 bg-transparent border border-black/20 rounded-full text-black font-body text-sm hover:border-black hover:bg-black hover:text-white transition-all">
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
