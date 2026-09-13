import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const HomeMedia = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading tracking-wider uppercase text-black mb-4">
              Media & Impact
            </h2>
            <div className="w-12 h-0.5 bg-red mb-8" />
            <p className="text-lg text-black/60 font-body mb-8 leading-relaxed">
              Watch how we are transforming plastic waste into sustainable solutions and building circular economies in remote Himalayan villages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://docs.google.com/document/d/1Cc2TJQ5bW9kBvsW-0IsrJpRBcW5tUIkjP-7sHYviBZY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-black text-black rounded-full hover:bg-black hover:text-white transition-colors duration-300 font-body text-sm tracking-wide">
                View Media Kit
              </a>
              <a href="https://canva.link/xqyuac8lr9t875v" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 bg-red text-white rounded-full hover:bg-black transition-colors duration-300 font-body font-bold text-sm tracking-wide">
                Product Catalogue
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group border border-black/10 rounded-lg overflow-hidden cursor-pointer"
          >
            <div className="aspect-w-16 aspect-h-9 bg-black">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Paramendo Video Preview" 
                className="object-cover w-full h-full opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-red text-white rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 ml-1" />
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
