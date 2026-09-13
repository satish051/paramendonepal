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
    <section className="bg-white py-24 px-6 md:px-12 lg:px-20 border-t border-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading tracking-wider uppercase text-black mb-4">
              Latest Insights & News
            </h2>
            <div className="w-12 h-0.5 bg-red mt-4 mb-8" />
            <p className="text-lg text-black/60 font-body">
              Stay up to date with our newest recycling innovations, community stories, and environmental impact.
            </p>
          </div>
          <Link 
            to="/blog" 
            className="hidden md:inline-flex items-center text-black font-body text-sm hover:text-red transition-colors"
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
    </section>
  );
};

export default BlogPreview;
