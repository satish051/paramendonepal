import ImpactCounter from "@/components/ImpactCounter";
import CircularJourney from "@/components/CircularJourney";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[var(--color-offwhite)] py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-leaf)]/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--color-forest)] tracking-tight mb-6">
            Building a Sustainable Future <br className="hidden sm:block" />
            for Nepal
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10">
            Transforming plastic waste into high-quality PP tiles and LDPE roofing sheets. Empowering communities through the Plastic to Ghar (P2G) Makeathon.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/products" 
              className="bg-[var(--color-forest)] text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all flex items-center"
            >
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/about" 
              className="bg-white text-[var(--color-forest)] border border-[var(--color-forest)]/20 px-8 py-3 rounded-full font-medium hover:bg-[var(--color-forest)]/5 transition-all"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Dashboard */}
      <ImpactCounter />

      {/* Process / Circular Journey */}
      <CircularJourney />

      {/* Before & After Slider */}
      <BeforeAfterSlider />

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
