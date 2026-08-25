import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import TileCalculator from "@/components/TileCalculator";
import ColorSwatch from "@/components/ColorSwatch";

export const metadata = {
  title: "PP Tiles | Products | Paramendo Nepal",
  description: "Learn about our eco-friendly, weather-resistant, and affordable interlocking PP tiles.",
};

const benefits = [
  "100% Upcycled Polypropylene (PP)",
  "Highly Weather Resistant",
  "Exceptional Durability and Load Bearing",
  "Easy Interlocking Installation",
  "Affordable Alternative to Concrete",
  "Reduces Local Plastic Pollution",
];

export default function PPTilesPage() {
  return (
    <div className="bg-[var(--color-offwhite)] py-12 sm:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link 
          href="/products" 
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[var(--color-forest)] transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          {/* Image Gallery Stub */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-200 rounded-3xl flex items-center justify-center text-gray-500 shadow-sm border border-gray-100">
              <span className="text-lg font-medium">[ Main PP Tile Image ]</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center text-xs text-gray-500 shadow-sm">
                  [ View {i} ]
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-[var(--color-forest)] mb-4">Interlocking PP Tiles</h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your pathways and community spaces with our highly durable, eco-friendly paving tiles made entirely from upcycled plastic waste.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
              <h2 className="text-xl font-semibold text-[var(--color-forest)] mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[var(--color-leaf)] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-[var(--color-forest)] text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all text-center"
              >
                Request a Quote
              </Link>
              <Link 
                href="/contact" 
                className="bg-white text-[var(--color-forest)] border border-[var(--color-forest)]/20 px-8 py-4 rounded-full font-medium hover:bg-[var(--color-forest)]/5 transition-all text-center"
              >
                Request a Sample
              </Link>
            </div>
          </div>
        </div>

        {/* Terrazzo Customizer Section */}
        <div className="mt-20">
          <ColorSwatch />
        </div>

        {/* Tile Calculator Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <TileCalculator />
        </div>
      </div>
    </div>
  );
}
