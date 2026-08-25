import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Products | Paramendo Nepal",
  description: "Explore our digital catalog of sustainable plastic products, including PP tiles and LDPE sheets.",
};

export default function ProductsPage() {
  return (
    <div className="bg-white py-16 sm:py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-[var(--color-forest)] tracking-tight sm:text-5xl mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-600">
            Durable, eco-friendly construction materials made entirely from upcycled plastic waste collected from our communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard 
            title="Interlocking PP Tiles"
            description="Weather-resistant, highly durable paving tiles ideal for walkways, courtyards, and community spaces."
            imagePlaceholder="[ PP Tiles Image ]"
            href="/products/pp-tiles"
          />
          <ProductCard 
            title="LDPE Roofing Sheets"
            description="Lightweight, waterproof roofing solutions providing excellent insulation and protection from the elements."
            imagePlaceholder="[ LDPE Sheets Image ]"
            href="/products/ldpe-sheets"
          />
          <ProductCard 
            title="Custom Plastic Products"
            description="Tailor-made items for specific community needs, from planters to furniture components."
            imagePlaceholder="[ Custom Products Image ]"
            href="/contact"
          />
        </div>
      </div>
    </div>
  );
}
