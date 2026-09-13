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
    <section className="bg-white py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-6 border border-black/10"
          >
            <span className="w-2 h-2 rounded-full bg-red animate-pulse"></span>
            <span className="text-sm font-bold text-black font-body tracking-wide uppercase">{content.badge}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading tracking-wider uppercase text-black"
          >
            {content.title}
          </motion.h2>
          <div className="w-12 h-0.5 bg-red mt-4 mb-12" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {content.metrics.map((metric: any, index: number) => (
            <motion.div 
              key={metric.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-black/10 rounded-lg p-8 text-center hover:border-black/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              
              <div className="relative z-10">
                <h3 className="text-black/60 font-body text-base uppercase tracking-wide mb-2">{metric.title}</h3>
                <div className="text-5xl md:text-6xl font-heading tracking-wider text-black mb-4">
                  {metric.value}
                </div>
                <p className="text-black/60 font-body leading-relaxed">
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
