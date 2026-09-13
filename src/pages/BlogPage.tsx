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
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-16 px-6 md:px-12 lg:px-20 text-center">
        <h1 className="font-heading text-5xl md:text-7xl tracking-wider text-black uppercase">
          OUR JOURNAL
        </h1>
        <div className="w-12 h-0.5 bg-red mt-4 mb-6 mx-auto" />
        <p className="text-black/60 font-body text-lg max-w-2xl mx-auto">
          Updates on our latest projects, initiatives, and insights into sustainable waste management across Nepal.
        </p>
      </section>

      <div className="px-6 md:px-12 lg:px-20">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-pulse bg-black/5 rounded-lg h-[400px] lg:col-span-2"></div>
            <div className="animate-pulse bg-black/5 rounded-lg h-[400px]"></div>
            <div className="animate-pulse bg-black/5 rounded-lg h-[400px]"></div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-32 border border-black/10 rounded-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black/5 mb-4">
              <FileText className="w-8 h-8 text-black/40" />
            </div>
            <p className="text-black/60 font-body text-lg">We are currently working on some amazing content. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => {
              const isFeatured = index === 0;
              return (
                <article 
                  key={blog.id} 
                  className={`bg-white border border-black/10 rounded-lg overflow-hidden hover:border-black/40 hover:-translate-y-1 transition-all duration-300 flex flex-col ${
                    isFeatured ? 'lg:col-span-2 md:flex-row' : ''
                  }`}
                >
                  {/* Image Section */}
                  <div className={`relative overflow-hidden flex-shrink-0 ${
                    isFeatured ? 'w-full md:w-1/2 h-64 md:h-auto' : 'w-full'
                  }`}>
                    <img 
                      src={blog.image || 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80'} 
                      alt={blog.title} 
                      className={`w-full object-cover ${isFeatured ? 'h-full' : 'aspect-video'}`} 
                    />
                    {blog.category && (
                      <div className="absolute top-4 left-4 bg-white px-3 py-1 text-black font-body text-xs uppercase">
                        {blog.category}
                      </div>
                    )}
                  </div>
                  
                  {/* Content Section */}
                  <div className={`p-8 flex flex-col flex-grow ${isFeatured ? 'md:w-1/2 justify-center' : ''}`}>
                    <div className="flex items-center gap-4 text-black/40 font-body text-sm mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1.5" />
                        {blog.date}
                      </div>
                      {blog.author && (
                        <div className="flex items-center before:content-['•'] before:mx-3 before:text-black/20">
                          {blog.author}
                        </div>
                      )}
                    </div>
                    
                    <h2 className={`${isFeatured ? 'text-3xl' : 'text-xl'} font-heading tracking-wider text-black mb-4 uppercase`}>
                      {blog.title}
                    </h2>
                    
                    <p className={`text-black/60 font-body text-sm flex-grow mb-8 ${isFeatured ? 'line-clamp-4' : 'line-clamp-3'}`}>
                      {blog.excerpt || blog.content?.substring(0, 150) + '...'}
                    </p>
                    
                    <div className="mt-auto">
                      {blog.externalLink ? (
                        <a href={blog.externalLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-black hover:text-red transition-colors font-body text-sm uppercase">
                          Read Full Story <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                      ) : (
                        <Link to={`/blog/${blog.id}`} className="inline-flex items-center text-black hover:text-red transition-colors font-body text-sm uppercase">
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
