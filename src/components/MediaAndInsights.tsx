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
        setRecentBlogs(sorted.slice(0, 3));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Media Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
              {content.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {content.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link to="/products" className="inline-flex items-center justify-center px-6 py-3 bg-secondary-600 hover:bg-secondary-700 text-white rounded-full transition-colors font-medium">
                View Product Catalogue
              </Link>
              <a href="https://docs.google.com/document/d/1Cc2TJQ5bW9kBvsW-0IsrJpRBcW5tUIkjP-7sHYviBZY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors font-medium">
                View Media Kit
              </a>
              <Link to="/blog" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors font-medium">
                Read Latest News
              </Link>
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

        {/* Insights & News Bottom Section */}
        <div className="pt-12">

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          ) : recentBlogs.length === 0 ? (
            <div className="text-center py-12 text-slate-500">More updates coming soon!</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentBlogs.map((blog) => (
                <div key={blog.id} className="bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 group flex flex-col">
                  <div className="relative h-60 overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0">
                    <img 
                      src={blog.image || 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80'} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                      {blog.category || 'Article'}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span className="truncate max-w-[120px]">{blog.author || 'Admin'}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-3">
                      {blog.excerpt || blog.content?.substring(0, 100) + '...'}
                    </p>
                    <div className="mt-auto">
                      {blog.externalLink ? (
                        <a 
                          href={blog.externalLink} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300"
                        >
                          Read Article <ArrowRight className="ml-1 w-4 h-4" />
                        </a>
                      ) : (
                        <Link 
                          to={`/blog/${blog.id}`} 
                          className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300"
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
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-700 shadow-sm text-base font-medium rounded-full text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors w-full sm:w-auto"
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
