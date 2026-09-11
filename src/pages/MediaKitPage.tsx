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
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="px-4 max-w-5xl mx-auto text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-300 font-bold text-xs mb-6 border border-primary-200 dark:border-primary-800 uppercase tracking-widest"
        >
          <Sparkles size={14} />
          <span>Brand Assets & Gallery</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
        >
          Media Kit & Visual Gallery
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mx-auto max-w-3xl font-light leading-relaxed mb-8"
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold transition-all shadow-md hover:shadow-lg text-sm"
          >
            <FileText size={16} />
            <span>Open Official Media Kit Doc</span>
            <ExternalLink size={14} />
          </a>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full font-semibold transition-all text-sm"
          >
            <span>View Products Catalogue</span>
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Media Assets</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              High-resolution media assets from the Paramendo collection
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1.5 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full">
            {images.length} Assets
          </span>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse bg-slate-200 dark:bg-slate-800 rounded-2xl h-64"></div>
            ))}
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-24 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ImageIcon size={32} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">No Media Files Found</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-1 mb-6">
              Uploaded images from the admin panel gallery will automatically appear here for media kits and public viewing.
            </p>
            <a
              href="https://docs.google.com/document/d/1Cc2TJQ5bW9kBvsW-0IsrJpRBcW5tUIkjP-7sHYviBZY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-xl text-sm font-semibold"
            >
              <FileText size={16} />
              <span>Read Media Guidelines Document</span>
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((item, idx) => (
              <motion.div
                key={item.filename || idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 8) * 0.05 }}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div 
                  className="aspect-w-4 aspect-h-3 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden cursor-pointer"
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

                <div className="p-4 flex items-center justify-between gap-2 border-t border-slate-100 dark:border-slate-800/80 bg-white/95 dark:bg-slate-900/95">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 truncate max-w-[160px]" title={item.filename}>
                    {item.filename}
                  </span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={item.filename}
                      className="p-1.5 rounded-lg text-slate-500 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-slate-800 transition-colors"
                      title="Download Image"
                    >
                      <Download size={16} />
                    </a>
                    <button
                      type="button"
                      onClick={() => setSelectedImage(item.url)}
                      className="p-1.5 rounded-lg text-slate-500 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-slate-800 transition-colors"
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
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl p-2" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Expanded media asset" 
              className="max-w-full max-h-[80vh] object-contain mx-auto rounded-lg"
            />
            <div className="flex items-center justify-between p-3 text-white text-sm">
              <a
                href={selectedImage}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-xs font-bold"
              >
                <Download size={14} />
                <span>Download Asset</span>
              </a>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-bold"
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
