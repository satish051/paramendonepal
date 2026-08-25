import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  const blog = await prisma.blogPost.findUnique({
    where: { id: resolvedParams.id }
  });

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-white py-12 sm:py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[var(--color-primary)] transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Media & Blog
        </Link>

        {blog.imageUrl && (
          <div className="aspect-[21/9] bg-gray-100 rounded-3xl overflow-hidden mb-12 shadow-sm">
            <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <span className="px-3 py-1 bg-gray-100 text-sm font-bold text-[var(--color-primary)] rounded-full">
              {blog.type}
            </span>
            <span className="text-sm text-gray-500">
              {new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            {blog.title}
          </h1>
          <p className="text-xl text-gray-600 font-medium leading-relaxed">
            {blog.excerpt}
          </p>
        </div>

        <div className="prose prose-lg prose-[var(--color-primary)] max-w-none text-gray-700">
          {/* Simple render of content. For real markdown, you'd use a markdown parser */}
          {blog.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-6 whitespace-pre-wrap leading-relaxed">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
