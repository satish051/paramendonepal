import ProductCard from "@/components/ProductCard";
import { PrismaClient } from "@prisma/client";

export const metadata = {
  title: "Products | Paramendo Nepal",
  description: "Explore our digital catalog of sustainable plastic products, including PP tiles and LDPE sheets.",
};

const prisma = new PrismaClient();

export default async function ProductsPage() {
  const products = await prisma.product.findMany();

  return (
    <div className="bg-white py-16 sm:py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-[var(--color-primary)] tracking-tight sm:text-5xl mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-600">
            Durable, eco-friendly construction materials made entirely from upcycled plastic waste collected from our communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              title={product.name}
              description={product.description}
              imagePlaceholder={`[ ${product.name} Image ]`}
              imageUrl={product.imageUrl || undefined}
              href={`/products/${product.id}`}
            />
          ))}
          {products.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-10">
              No products available at the moment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
