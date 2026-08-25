export const dynamic = "force-dynamic";
import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import TileCalculator from "@/components/TileCalculator";
import ColorSwatch from "@/components/ColorSwatch";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  const product = await prisma.product.findUnique({
    where: { id: resolvedParams.id }
  });

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-[var(--color-surface)] py-12 sm:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link 
          href="/products" 
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[var(--color-primary)] transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          {/* Image Gallery Stub */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-200 rounded-3xl flex items-center justify-center text-gray-500 shadow-sm border border-gray-100 overflow-hidden">
              {product.imageUrl ? (
                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-lg font-medium">[ {product.name} Image ]</span>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-2">{product.name}</h1>
            <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">{product.category}</div>
            
            <p className="text-xl text-gray-600 mb-8 whitespace-pre-wrap">
              {product.description}
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-6">Product Details</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-secondary)] mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Price: {product.pricePerUnit ? `$${product.pricePerUnit}` : 'Contact for pricing'}</span>
                </li>
                {product.plasticOffset && (
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[var(--color-secondary)] mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Plastic Offset: {product.plasticOffset} kg per unit</span>
                  </li>
                )}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href={`/contact?inquiry=Request a Quote&message=I would like a quote for ${product.name}`} 
                className="bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all text-center"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Keeping old calculators conditionally based on category if needed, or always showing */}
        {product.name.toLowerCase().includes('tile') && (
          <>
            <div className="mt-20">
              <ColorSwatch />
            </div>
            <div className="max-w-4xl mx-auto mt-20">
              <TileCalculator />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
