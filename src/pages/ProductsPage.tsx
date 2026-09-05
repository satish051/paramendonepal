import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

const catalogueImages = [
  '/catalogue/1.jpg',
  '/catalogue/2.jpg',
  '/catalogue/3.jpg',
  '/catalogue/4.jpg',
  '/catalogue/5.jpg',
  '/catalogue/6.jpg',
];

const ProductsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === catalogueImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? catalogueImages.length - 1 : prev - 1));
  };

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto min-h-screen text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-bold text-sm mb-6 border border-primary-100 dark:border-primary-800 uppercase tracking-widest">
          Catalogue
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Our Products
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12 font-light">
          Premium recycled boards, structural materials, and eco-friendly products made from high-density plastics and multi-layered waste. Flip through our catalogue below.
        </p>
      </motion.div>
      
      {/* Interactive Carousel */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative max-w-4xl mx-auto bg-slate-100 dark:bg-slate-900 rounded-3xl p-4 shadow-2xl border border-slate-200 dark:border-slate-800"
      >
        <div className="relative aspect-w-16 aspect-h-9 md:aspect-[4/3] overflow-hidden rounded-2xl group bg-black">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={catalogueImages[currentIndex]}
              alt={`Catalogue Page ${currentIndex + 1}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </AnimatePresence>

          {/* Controls Overlay */}
          <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={prevSlide}
              className="pointer-events-auto p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="pointer-events-auto p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Fullscreen Button */}
          <button 
            onClick={() => setIsFullscreen(true)}
            className="absolute top-4 right-4 pointer-events-auto p-2 rounded-xl bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors opacity-0 group-hover:opacity-100 shadow-lg"
          >
            <Maximize2 className="w-5 h-5" />
          </button>

          {/* Page Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-white text-sm font-semibold pointer-events-none shadow-lg">
            {currentIndex + 1} / {catalogueImages.length}
          </div>
        </div>
      </motion.div>

      {/* Grid Overview */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Catalogue Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {catalogueImages.map((img, idx) => (
            <div 
              key={idx} 
              onClick={() => setCurrentIndex(idx)}
              className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                currentIndex === idx 
                  ? 'border-primary-500 shadow-lg scale-105' 
                  : 'border-transparent hover:border-primary-300 opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-auto object-cover aspect-[3/4]" />
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setIsFullscreen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>
            
            <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 hidden md:block">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 hidden md:block">
              <ChevronRight className="w-8 h-8" />
            </button>

            <img 
              src={catalogueImages[currentIndex]} 
              alt={`Catalogue Fullscreen ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            />
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white font-medium">
              Page {currentIndex + 1} of {catalogueImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductsPage;
