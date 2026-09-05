import { FileText, Calendar, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        // Only show published blogs to public
        setBlogs(data.filter((b: any) => b.status === 'Published'));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="pt-20 pb-20 min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-slate-900 mb-16 rounded-3xl mx-4 sm:mx-6 lg:mx-8">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Paramendo Blog" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-500/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-primary-500/30">
            <FileText className="w-4 h-4 text-primary-300" />
            <span className="text-sm font-bold text-primary-300 tracking-wide uppercase">Latest Updates</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Journal</span>
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Updates on our latest projects, initiatives, and insights into sustainable waste management across Nepal.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-pulse bg-slate-200 dark:bg-slate-800 rounded-3xl h-[400px] lg:col-span-2"></div>
            <div className="animate-pulse bg-slate-200 dark:bg-slate-800 rounded-3xl h-[400px]"></div>
            <div className="animate-pulse bg-slate-200 dark:bg-slate-800 rounded-3xl h-[400px]"></div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-32 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
              <FileText className="w-8 h-8 text-slate-400" />
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">We are currently working on some amazing content. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => {
              const isFeatured = index === 0;
              return (
                <article 
                  key={blog.id} 
                  className={`bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col ${
                    isFeatured ? 'lg:col-span-2 md:flex-row' : ''
                  }`}
                >
                  {/* Image Section */}
                  <div className={`relative overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0 ${
                    isFeatured ? 'w-full md:w-1/2 h-64 md:h-auto' : 'w-full h-56'
                  }`}>
                    <img 
                      src={blog.image || 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80'} 
                      alt={blog.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    {blog.category && (
                      <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wide">
                        {blog.category}
                      </div>
                    )}
                  </div>
                  
                  {/* Content Section */}
                  <div className={`p-8 flex flex-col flex-grow ${isFeatured ? 'md:w-1/2 justify-center' : ''}`}>
                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1.5" />
                        {blog.date}
                      </div>
                      {blog.author && (
                        <div className="flex items-center before:content-['•'] before:mx-3 before:text-slate-300 dark:before:text-slate-700">
                          {blog.author}
                        </div>
                      )}
                    </div>
                    
                    <h2 className={`${isFeatured ? 'text-3xl lg:text-4xl' : 'text-2xl'} font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-3`}>
                      {blog.title}
                    </h2>
                    
                    <p className={`text-slate-600 dark:text-slate-300 leading-relaxed flex-grow ${isFeatured ? 'line-clamp-4' : 'line-clamp-3'}`}>
                      {blog.excerpt || blog.content?.substring(0, 150) + '...'}
                    </p>
                    
                    <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                      {blog.externalLink ? (
                        <a href={blog.externalLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group-hover:translate-x-1">
                          Read Full Story <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                      ) : (
                        <Link to={`/blog/${blog.id}`} className="inline-flex items-center font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group-hover:translate-x-1">
                          Read Full Story <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
