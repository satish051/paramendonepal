import { FileText } from 'lucide-react';

const BlogPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
          <FileText className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Our Blog</h1>
        <p className="text-slate-600 text-lg max-w-md mx-auto">
          We are currently working on some amazing content. Check back soon for updates on our latest projects and insights into sustainable waste management!
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
