import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

const SingleBlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`/api/blogs/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Blog not found');
        return res.json();
      })
      .then(data => {
        setBlog(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="pt-20 pb-20 min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-slate-500 text-lg">Loading article...</p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="pt-20 pb-20 min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-500 text-lg mb-6">{error === 'Blog not found' ? 'Article not found' : error}</p>
          <Link to="/blog" className="text-primary-600 font-bold hover:underline">
            &larr; Back to all articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pb-20 min-h-screen bg-white">
      {/* Hero Image */}
      {blog.image && (
        <div className="w-full h-[40vh] md:h-[60vh] relative">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
              {blog.category && (
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary-600 text-white text-xs font-bold uppercase tracking-wide">
                  {blog.category}
                </div>
              )}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                {blog.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 font-medium">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary-400" />
                  {blog.date}
                </div>
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2 text-primary-400" />
                  {blog.author || 'Admin'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* If no image, render title here instead */}
        {!blog.image && (
          <div className="mb-12 border-b border-slate-100 pb-8 pt-24">
            {blog.category && (
              <div className="inline-flex items-center text-primary-600 text-sm font-bold uppercase tracking-wide mb-4">
                <Tag className="w-4 h-4 mr-2" />
                {blog.category}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {blog.date}
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                {blog.author || 'Admin'}
              </div>
            </div>
          </div>
        )}

        <div className="prose prose-lg prose-slate max-w-none">
          {blog.content.split('\n').map((paragraph: string, idx: number) => (
            paragraph.trim() ? <p key={idx} className="mb-6 text-slate-700 leading-relaxed">{paragraph}</p> : <br key={idx} />
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-slate-600 font-semibold hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to all articles
          </Link>
        </div>
      </div>
    </article>
  );
};

export default SingleBlogPage;
