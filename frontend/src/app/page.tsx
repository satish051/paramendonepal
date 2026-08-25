import ImpactCounter from "@/components/ImpactCounter";
import CircularJourney from "@/components/CircularJourney";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getSiteContent, getSiteMetrics, getProducts, getBlogs } from "@/app/actions/admin";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const content = await getSiteContent();
  const metrics = await getSiteMetrics();
  const products = await getProducts();
  const blogs = await getBlogs();

  const heroTitle = content.hero_title || "Building a Sustainable Future for Nepal";
  const heroSubtitle = content.hero_subtitle || "Transforming plastic waste into high-quality PP tiles and LDPE roofing sheets. Empowering communities through the Plastic to Ghar (P2G) Makeathon.";

  // Default fallback stats if DB is empty
  const defaultStats = [
    { id: "total_plastic_recycled", name: "Kg Plastic Recycled", value: 15000, iconName: "Recycle" },
    { id: "rural_homes", name: "Rural Homes Insulated", value: 50, iconName: "Home" },
    { id: "crc_centers", name: "CRC Centers Operational", value: 1, iconName: "Factory" },
    { id: "community_members", name: "Community Members Empowered", value: 120, iconName: "Users" },
  ];

  const formattedStats = metrics.length > 0 
    ? metrics.map(m => ({ id: m.metricKey, name: m.label, value: m.metricValue, iconName: m.icon || 'Recycle' }))
    : defaultStats;

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[var(--color-surface)] py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-secondary)]/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--color-primary)] tracking-tight mb-6" dangerouslySetInnerHTML={{ __html: heroTitle.replace('\n', '<br class="hidden sm:block" />') }}>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10">
            {heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/products" 
              className="bg-[var(--color-accent)] text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all flex items-center"
            >
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/about" 
              className="bg-white text-[var(--color-primary)] border border-[var(--color-primary)]/20 px-8 py-3 rounded-full font-medium hover:bg-[var(--color-accent)]/5 transition-all"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Dashboard */}
      <ImpactCounter stats={formattedStats} />

      {/* Process / Circular Journey */}
      <CircularJourney />

      {/* Before & After Slider */}
      <BeforeAfterSlider />

      {/* Featured Products */}
      <section className="py-16 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] tracking-tight sm:text-4xl mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600">
              Discover our upcycled, eco-friendly materials transforming waste into value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <ProductCard 
                key={product.id}
                title={product.name}
                description={product.description}
                imagePlaceholder={`[ ${product.name} Image ]`}
                imageUrl={product.imageUrl || undefined}
                href={`/products/${product.id}`}
              />
            ))}
          </div>
          
          {products.length > 3 && (
            <div className="mt-12 text-center">
              <Link 
                href="/products" 
                className="inline-flex items-center text-[var(--color-primary)] font-medium hover:text-[var(--color-accent)] transition-colors"
              >
                View all products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Media & Blog Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] tracking-tight sm:text-4xl mb-4">
              Media & Blog
            </h2>
            <p className="text-lg text-gray-600">
              Stay updated with our latest news, project highlights, and community impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((blog) => (
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
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
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
          </div>
          
          {blogs.length > 3 && (
            <div className="mt-12 text-center">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-[var(--color-primary)] font-medium hover:text-[var(--color-accent)] transition-colors"
              >
                View all blogs
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Partners Strip */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">
            In Proud Partnership With
          </p>
          <div className="flex justify-center items-center gap-12 sm:gap-24 opacity-60 grayscale">
            {/* Placeholders for logos */}
            <div className="text-xl font-bold font-serif">MAP</div>
            <div className="text-xl font-bold tracking-tighter">Doko Recyclers</div>
          </div>
        </div>
      </section>
    </>
  );
}
