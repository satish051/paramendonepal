import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import SkeletonCard from './SkeletonCard';

interface BlogPost {
  id: number;
  title: string;
  excerpt?: string;
  content?: string;
  image?: string;
  category?: string;
  date: string;
  author?: string;
  status: string;
  externalLink?: string;
}

const MediaAndInsights = () => {
  const [recentBlogs, setRecentBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [content, setContent] = useState({
    title: "Impact & Insights",
    subtitle: "Watch how we are transforming plastic waste into sustainable solutions and building circular economies in remote Himalayan villages. Stay up to date with our newest recycling innovations, community stories, and environmental milestones."
  });

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        if (data && data.impactInsights) setContent(data.impactInsights);
      })
      .catch(console.error);

    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        const published = data.filter((b: BlogPost) => b.status === 'Published');
        const sorted = published.sort((a: BlogPost, b: BlogPost) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
        // Filter those marked to show on home, or fallback to top 3 newest if none selected
        const featuredOnHome = sorted.filter((b: any) => b.showOnHome);
        const toDisplay = featuredOnHome.length > 0 ? featuredOnHome.slice(0, 3) : sorted.slice(0, 3);
        
        setRecentBlogs(toDisplay);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Media Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading tracking-wider uppercase text-black">
              {content.title}
            </h2>
            <div className="w-12 h-0.5 bg-red mt-4 mb-12" />
            <p className="text-lg text-black/60 font-body mb-8 leading-relaxed">
              {content.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link to="/products" className="inline-flex items-center justify-center px-8 py-3 bg-red text-white rounded-full hover:bg-black transition-colors duration-300 font-body font-bold text-sm tracking-wide">
                View Product Catalogue
              </Link>
              <Link to="/media" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-black text-black rounded-full hover:bg-black hover:text-white transition-colors duration-300 font-body text-sm tracking-wide">
                View Media Kit
              </Link>
              <Link to="/blog" className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-black text-black rounded-full hover:bg-black hover:text-white transition-colors duration-300 font-body text-sm tracking-wide">
                Read Latest News
              </Link>
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
                <div className="w-16 h-16 bg-red rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Insights & News Bottom Section */}
        <div className="pt-12">

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          ) : recentBlogs.length === 0 ? (
            <div className="text-center py-12 text-black/40 font-body text-sm">More updates coming soon!</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentBlogs.map((blog) => (
                <div key={blog.id} className="bg-white border border-black/10 rounded-lg overflow-hidden hover:border-black/40 hover:-translate-y-1 transition-all duration-300 flex flex-col group">
                  <div className="relative h-60 overflow-hidden bg-black/5 flex-shrink-0">
                    <img 
                      src={blog.image || 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80'} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold text-black uppercase tracking-wide">
                      {blog.category || 'Article'}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-black/40 font-body text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span className="truncate max-w-[120px]">{blog.author || 'Admin'}</span>
                      </div>
                    </div>
                    <h3 className="font-heading text-xl tracking-wider text-black mb-3 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-black/60 font-body text-sm mb-6 line-clamp-3">
                      {blog.excerpt || blog.content?.substring(0, 100) + '...'}
                    </p>
                    <div className="mt-auto">
                      {blog.externalLink ? (
                        <a 
                          href={blog.externalLink} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-black font-body text-sm hover:text-red transition-colors"
                        >
                          Read Article <ArrowRight className="ml-1 w-4 h-4" />
                        </a>
                      ) : (
                        <Link 
                          to={`/blog/${blog.id}`} 
                          className="inline-flex items-center text-black font-body text-sm hover:text-red transition-colors"
                        >
                          Read Article <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-10 text-center md:hidden">
            <Link 
              to="/blog" 
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-black text-black rounded-full hover:bg-black hover:text-white transition-colors duration-300 font-body text-sm tracking-wide w-full sm:w-auto"
            >
              See More <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MediaAndInsights;
