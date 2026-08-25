export const dynamic = "force-dynamic";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Media & Blog | Paramendo Nepal",
  description: "Read the latest news, blogs, and media updates from Paramendo Nepal.",
};

const prisma = new PrismaClient();

export default async function BlogPage() {
  const blogs = await prisma.blogPost.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="bg-white py-16 sm:py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-[var(--color-primary)] tracking-tight sm:text-5xl mb-4">
            Media & Blog
          </h1>
          <p className="text-lg text-gray-600">
            Stay updated with our latest news, project highlights, and community impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md flex flex-col">
              <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden flex items-center justify-center text-gray-400">
                {blog.imageUrl ? (
                  <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                ) : (
                  <span className="text-sm font-medium">[ {blog.title} Image ]</span>
                )}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[var(--color-primary)] shadow-sm">
                  {blog.type}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs text-gray-500 mb-2">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                  {blog.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${blog.id}`}
                  className="inline-flex items-center text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors mt-auto"
                >
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
          {blogs.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-10">
              No blog posts or media available at the moment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
