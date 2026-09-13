import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Download, ExternalLink, Sparkles, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MediaItem {
  filename: string;
  url: string;
  time?: number;
}

const MediaKitPage = () => {
  const [images, setImages] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/upload')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setImages(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load media gallery:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-16 px-6 md:px-12 lg:px-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 text-black font-body text-xs mb-6 uppercase tracking-widest"
        >
          <Sparkles size={14} />
          <span>Brand Assets & Gallery</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl tracking-wider text-black uppercase"
        >
          Media Kit & Visual Gallery
        </motion.h1>
        <div className="w-12 h-0.5 bg-red mt-4 mb-6 mx-auto" />
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-black/60 font-body text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Explore official brand photographs, factory recycling processes, mountain community collection initiatives, and digital assets of Paramendo Nepal.
        </motion.p>

        {/* Quick Actions / Document Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://docs.google.com/document/d/1Cc2TJQ5bW9kBvsW-0IsrJpRBcW5tUIkjP-7sHYviBZY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red text-white px-8 py-3 rounded-full hover:bg-black transition-colors duration-300 font-body font-bold text-sm tracking-wide"
          >
            <FileText size={16} />
            <span>Open Official Media Kit Doc</span>
            <ExternalLink size={14} />
          </a>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-transparent border border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300 font-body text-sm tracking-wide"
          >
            <span>View Products Catalogue</span>
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/10">
          <div>
            <h2 className="font-heading tracking-wider text-2xl text-black uppercase">Media Assets</h2>
            <p className="font-body text-sm text-black/60 mt-1">
              High-resolution media assets from the Paramendo collection
            </p>
          </div>
          <span className="text-xs font-body uppercase tracking-wider px-3 py-1.5 border border-black/10 text-black rounded-full">
            {images.length} Assets
          </span>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse bg-black/5 rounded-lg h-64 border border-black/10"></div>
            ))}
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-lg border border-black/10 p-8">
            <div className="w-16 h-16 border border-black/10 text-black rounded-full flex items-center justify-center mx-auto mb-4">
              <ImageIcon size={32} />
            </div>
            <h3 className="font-heading tracking-wider text-xl text-black uppercase">No Media Files Found</h3>
            <p className="font-body text-sm text-black/60 max-w-md mx-auto mt-1 mb-6">
              Uploaded images from the admin panel gallery will automatically appear here for media kits and public viewing.
            </p>
            <a
              href="https://docs.google.com/document/d/1Cc2TJQ5bW9kBvsW-0IsrJpRBcW5tUIkjP-7sHYviBZY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-300 font-body text-sm tracking-wide"
            >
              <FileText size={16} />
              <span>Read Media Guidelines Document</span>
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((item, idx) => (
              <motion.div
                key={item.filename || idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 8) * 0.05 }}
                className="group relative bg-white rounded-lg overflow-hidden border border-black/10 hover:border-black/40 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div 
                  className="aspect-w-4 aspect-h-3 w-full bg-black/5 overflow-hidden"
                  onClick={() => setSelectedImage(item.url)}
                >
                  <img
                    src={item.url}
                    alt={item.filename}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e: any) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                <div className="p-4 flex items-center justify-between gap-2 border-t border-black/10 bg-white">
                  <span className="font-body text-xs text-black/60 truncate max-w-[160px]" title={item.filename}>
                    {item.filename}
                  </span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={item.filename}
                      className="p-1.5 text-black hover:text-red transition-colors"
                      title="Download Image"
                    >
                      <Download size={16} />
                    </a>
                    <button
                      type="button"
                      onClick={() => setSelectedImage(item.url)}
                      className="p-1.5 text-black hover:text-red transition-colors"
                      title="Full View"
                    >
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox / Modal for enlarged photo */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] bg-black rounded-lg overflow-hidden border border-white/10 p-2" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Expanded media asset" 
              className="max-w-full max-h-[80vh] object-contain mx-auto rounded-lg"
            />
            <div className="flex items-center justify-between p-4 bg-black border-t border-white/10">
              <a
                href={selectedImage}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 font-body text-sm tracking-wide"
              >
                <Download size={14} />
                <span>Download Asset</span>
              </a>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="border border-white/30 text-white/80 hover:text-white px-6 py-2 rounded-full transition-colors font-body text-sm tracking-wide"
              >
                Close (ESC)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaKitPage;
