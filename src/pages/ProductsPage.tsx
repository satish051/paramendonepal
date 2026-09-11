import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X, ArrowRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const defaultCatalogueImages = [
  '/catalogue/1.jpg',
  '/catalogue/2.jpg',
  '/catalogue/3.jpg',
  '/catalogue/4.jpg',
  '/catalogue/5.jpg',
  '/catalogue/6.jpg',
];

const defaultProducts = [
  {
    id: 1,
    title: "Recycled HDPE Boards",
    description: "Heavy-duty boards designed to replace traditional timber and plywood.",
    image: ""
  },
  {
    id: 2,
    title: "Eco-Friendly Furniture",
    description: "Sustainable furniture pieces crafted from upcycled multi-layered plastics.",
    image: ""
  },
  {
    id: 3,
    title: "\"Carry Everest\" Souvenirs",
    description: "Premium eco-friendly mountain souvenirs supporting local communities.",
    image: ""
  }
];

const ProductsPage = () => {
  const [content, setContent] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => {
        if (data) setContent(data);
      })
      .catch(console.error);
  }, []);

  const products = content?.homeProducts?.products?.length 
    ? content.homeProducts.products 
    : defaultProducts;

  const catalogueImages: string[] = content?.catalogue?.images?.length 
    ? content.catalogue.images 
    : defaultCatalogueImages;

  const activeIndex = Math.min(currentIndex, Math.max(0, catalogueImages.length - 1));

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= catalogueImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? catalogueImages.length - 1 : prev - 1));
  };

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto min-h-screen text-center">
      {/* Product Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-bold text-sm mb-6 border border-primary-100 dark:border-primary-800 uppercase tracking-widest">
          Sustainable Solutions
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          {content?.homeProducts?.title || "Our Products"}
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-16 font-light">
          {content?.homeProducts?.subtitle || "Premium recycled boards, structural materials, and eco-friendly products made from high-density plastics and multi-layered waste."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {products.map((product: any, idx: number) => (
            <motion.div
              key={product.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col justify-between bg-slate-50 dark:bg-slate-900/60 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300"
            >
              <div>
                {product.image ? (
                  <div className="rounded-2xl overflow-hidden mb-6 h-52 bg-slate-100 dark:bg-slate-800">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-6">
                    <Layers className="w-7 h-7" />
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {product.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors pt-4 border-t border-slate-200 dark:border-slate-800"
              >
                Inquire Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Catalogue Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="pt-12 border-t border-slate-200 dark:border-slate-800"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-bold text-sm mb-6 border border-primary-100 dark:border-primary-800 uppercase tracking-widest">
          Digital Catalogue
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          {content?.catalogue?.title || "Product Catalogue"}
        </h2>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12 font-light">
          {content?.catalogue?.subtitle || "Flip through our catalogue below to view material specifications and dimensions."}
        </p>
        
        {/* Interactive Carousel */}
        {catalogueImages.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-4xl mx-auto bg-slate-100 dark:bg-slate-900 rounded-3xl p-4 shadow-2xl border border-slate-200 dark:border-slate-800"
          >
            <div className="relative aspect-w-16 aspect-h-9 md:aspect-[4/3] overflow-hidden rounded-2xl group bg-black">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={catalogueImages[activeIndex]}
                  alt={`Catalogue Page ${activeIndex + 1}`}
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
                {activeIndex + 1} / {catalogueImages.length}
              </div>
            </div>
          </motion.div>
        )}

        {/* Grid Overview */}
        {catalogueImages.length > 0 && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Catalogue Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {catalogueImages.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setCurrentIndex(idx)}
                  className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    activeIndex === idx 
                      ? 'border-primary-500 shadow-lg scale-105' 
                      : 'border-transparent hover:border-primary-300 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-auto object-cover aspect-[3/4]" />
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && catalogueImages.length > 0 && (
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
              src={catalogueImages[activeIndex]} 
              alt={`Catalogue Fullscreen ${activeIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            />
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white font-medium">
              Page {activeIndex + 1} of {catalogueImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductsPage;
