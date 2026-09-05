import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const HomeMedia = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
              Media & Impact
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Watch how we are transforming plastic waste into sustainable solutions and building circular economies in remote Himalayan villages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://docs.google.com/document/d/1Cc2TJQ5bW9kBvsW-0IsrJpRBcW5tUIkjP-7sHYviBZY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                View Media Kit
              </a>
              <a href="https://canva.link/xqyuac8lr9t875v" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-secondary-600 hover:bg-secondary-700 text-white rounded-full transition-colors">
                Product Catalogue
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
          >
            <div className="aspect-w-16 aspect-h-9 bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Paramendo Video Preview" 
                className="object-cover w-full h-full opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeMedia;
