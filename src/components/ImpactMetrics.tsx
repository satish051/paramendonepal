import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ImpactMetrics = () => {
  const [content, setContent] = useState({
    badge: 'Verified Impact',
    title: 'Measurable Change, Real-World Value',
    metrics: [
      {
        id: 1,
        title: 'Plastic Waste Diverted',
        value: '10,000+ kg',
        description: 'Low-value plastics collected across remote high-altitude regions including Ree Village & Ruby Valley.',
      },
      {
        id: 2,
        title: 'Recycled Polymer Types',
        value: 'HDPE, PP & MLP',
        description: 'Upcycling multi-layered and rigid plastics that standard recyclers usually reject.',
      },
      {
        id: 3,
        title: 'Community Reach',
        value: 'Mountain Ecosystems',
        description: 'Local collection models providing income and environmental protection to remote Himalayan villages.',
      }
    ]
  });

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        if (data && data.impactMetrics) setContent(data.impactMetrics);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-primary-100 dark:bg-primary-900/20 opacity-50 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full mb-6 shadow-sm border border-slate-100 dark:border-slate-700"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
            <span className="text-sm font-bold text-primary-600 dark:text-primary-400 tracking-wide uppercase">{content.badge}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white"
          >
            {content.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {content.metrics.map((metric: any, index: number) => (
            <motion.div 
              key={metric.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-10 shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 hover:-translate-y-2 transition-transform duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 dark:bg-primary-900/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">{metric.title}</h3>
                <div className="text-4xl lg:text-5xl font-black text-primary-600 dark:text-primary-400 mb-4 tracking-tight">
                  {metric.value}
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
