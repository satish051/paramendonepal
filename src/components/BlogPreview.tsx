import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
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

const BlogPreview = () => {
  const [recentBlogs, setRecentBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        // Filter published and get the latest 3
        const published = data.filter((b: BlogPost) => b.status === 'Published');
        // Assuming higher ID is newer, or you could sort by date
        const sorted = published.sort((a: BlogPost, b: BlogPost) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setRecentBlogs(sorted.slice(0, 3));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Latest Insights & News
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Stay up to date with our newest recycling innovations, community stories, and environmental impact.
            </p>
          </div>
          <Link 
            to="/blog" 
            className="hidden md:inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
          >
            See More <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

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
              <div key={blog.id} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 group flex flex-col">
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
    </section>
  );
};

export default BlogPreview;
