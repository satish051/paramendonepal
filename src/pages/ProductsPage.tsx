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
    image: "https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    title: "Eco-Friendly Furniture",
    description: "Sustainable furniture pieces crafted from upcycled multi-layered plastics.",
    image: "https://images.pexels.com/photos/2768961/pexels-photo-2768961.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    title: "\"Carry Everest\" Souvenirs",
    description: "Premium eco-friendly mountain souvenirs supporting local communities.",
    image: "https://images.pexels.com/photos/3182512/pexels-photo-3182512.jpeg?auto=compress&cs=tinysrgb&w=800"
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
    <div className="min-h-screen bg-white">
      {/* Hero Section - Warm, Minimalist Editorial Opening */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 lg:px-20 text-center border-b border-black/10 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA]/60 to-white">
        {/* Tasteful editorial landscape illustration along bottom edge */}
        <img 
          src="/art-nepal.png" 
          alt="" 
          aria-hidden="true"
          className="absolute -bottom-6 right-0 md:right-8 w-[320px] md:w-[420px] lg:w-[500px] opacity-[0.14] pointer-events-none select-none z-0"
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-black/10 bg-white/80 backdrop-blur-sm text-black font-body text-xs uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red"></span>
            <span>Sustainable Solutions</span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl tracking-wider text-black uppercase leading-tight">
            {content?.homeProducts?.title || "Our Products"}
          </h1>
          <div className="w-12 h-0.5 bg-red mt-4 mb-6 mx-auto" />
          <p className="text-black/70 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            {content?.homeProducts?.subtitle || "Premium recycled boards, structural materials, and eco-friendly products made from high-density plastics and multi-layered waste."}
          </p>
        </div>
      </section>

      {/* Product Section */}
      <div className="bg-white py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product: any, idx: number) => (
              <motion.div
                key={product.id || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col bg-white border border-black/10 rounded-lg overflow-hidden hover:border-black/40 hover:-translate-y-1 transition-all duration-300"
              >
                {product.image ? (
                  <div className="w-full bg-black/5 aspect-square">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                ) : (
                  <div className="w-full bg-black/5 aspect-square flex items-center justify-center text-black/20">
                    <Layers className="w-12 h-12" />
                  </div>
                )}
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-heading text-xl tracking-wider text-black uppercase mb-3">
                    {product.title}
                  </h3>
                  <p className="text-black/60 font-body text-sm mb-6 flex-grow">
                    {product.description}
                  </p>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-black hover:text-red transition-colors font-body text-sm uppercase mt-auto pt-4 border-t border-black/10"
                  >
                    Inquire Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Catalogue Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-24 mt-24 border-t border-black/10 max-w-7xl mx-auto text-center"
        >
          <div className="inline-block px-3 py-1 border border-black/20 text-black font-body text-xs uppercase mb-6">
            Digital Catalogue
          </div>
          <h2 className="font-heading text-4xl md:text-5xl tracking-wider text-black uppercase mb-6">
            {content?.catalogue?.title || "Product Catalogue"}
          </h2>
          <div className="w-12 h-0.5 bg-red mx-auto mb-6" />
          <p className="text-black/60 font-body text-lg max-w-2xl mx-auto mb-12">
            {content?.catalogue?.subtitle || "Flip through our catalogue below to view material specifications and dimensions."}
          </p>
          
          {/* Interactive Carousel */}
          {catalogueImages.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative max-w-4xl mx-auto bg-white border border-black/10 rounded-lg p-2"
            >
              <div className="relative aspect-video md:aspect-[4/3] overflow-hidden rounded group bg-black/5">
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
                    className="pointer-events-auto p-2 rounded-full bg-white border border-black/10 text-black hover:border-black/40 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="pointer-events-auto p-2 rounded-full bg-white border border-black/10 text-black hover:border-black/40 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Fullscreen Button */}
                <button 
                  onClick={() => setIsFullscreen(true)}
                  className="absolute top-4 right-4 pointer-events-auto p-2 rounded bg-white border border-black/10 text-black hover:border-black/40 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Page Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white border border-black/10 text-black font-body text-xs uppercase pointer-events-none">
                  {activeIndex + 1} / {catalogueImages.length}
                </div>
              </div>
            </motion.div>
          )}

          {/* Grid Overview */}
          {catalogueImages.length > 0 && (
            <div className="mt-20">
              <h3 className="font-heading text-2xl tracking-wider text-black uppercase mb-8">Catalogue Overview</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
                {catalogueImages.map((img, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setCurrentIndex(idx)}
                    className={`cursor-pointer rounded overflow-hidden border transition-all duration-300 ${
                      activeIndex === idx 
                        ? 'border-black opacity-100' 
                        : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-auto object-cover aspect-[3/4]" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && catalogueImages.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setIsFullscreen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>
            
            <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors z-50 hidden md:block">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors z-50 hidden md:block">
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="bg-white rounded-lg p-2 max-w-5xl w-full h-full md:h-auto max-h-full flex items-center justify-center">
              <img 
                src={catalogueImages[activeIndex]} 
                alt={`Catalogue Fullscreen ${activeIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded"
              />
            </div>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white font-body text-sm uppercase">
              Page {activeIndex + 1} of {catalogueImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductsPage;
