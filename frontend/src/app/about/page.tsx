import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | Paramendo Nepal",
  description: "Learn about the Plastic to Ghar (P2G) Makeathon and our mission to transform plastic waste into sustainable solutions.",
};

export default function AboutPage() {
  return (
    <div className="bg-[var(--color-surface)] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-6">The Plastic to Ghar (P2G) Makeathon</h1>
            <p className="text-lg text-gray-700 mb-6">
              Our journey began with a simple but powerful idea: what if the plastic waste polluting our beautiful landscapes could be transformed into the very building blocks of our communities?
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The Plastic to Ghar (P2G) Makeathon brought together innovators, engineers, and community leaders to solve two pressing issues simultaneously: plastic pollution and the need for affordable, durable construction materials in rural Nepal.
            </p>
            <p className="text-lg text-gray-700">
              Through collaborative design and rigorous testing, we developed scalable methods to convert discarded plastics into high-quality PP tiles and LDPE roofing sheets.
            </p>
          </div>
          <div className="aspect-square sm:aspect-[4/3] bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 shadow-inner">
            <span className="text-lg font-medium">[ Makeathon Image Placeholder ]</span>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center">
                <span className="w-8 h-1 bg-[var(--color-secondary)] mr-4 rounded-full"></span>
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To transform plastic waste into valuable, sustainable solutions while empowering rural communities through job creation, environmental education, and access to affordable construction materials.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center">
                <span className="w-8 h-1 bg-[var(--color-secondary)] mr-4 rounded-full"></span>
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A Nepal where plastic waste is no longer a pollutant but a recognized resource, driving a circular economy that benefits both the environment and society.
              </p>
            </div>
          </div>
        </div>

        {/* CRC Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Community Recycling Center (CRC)</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Located in Ree, Dhading, our CRC is the heart of our operations and a beacon of sustainability in the region.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">Collection Hub</h3>
              <p className="text-gray-600 text-sm">
                A central point where plastic waste from surrounding villages is gathered, sorted, and prepared for processing, creating local employment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">Processing Facility</h3>
              <p className="text-gray-600 text-sm">
                Equipped with custom-built machinery to safely shred, melt, and mold plastics into durable tiles and roofing sheets without harmful emissions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">Education Center</h3>
              <p className="text-gray-600 text-sm">
                A space dedicated to teaching the community about waste segregation, the circular economy, and sustainable living practices.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-[var(--color-accent)] text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
          >
            Get Involved
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
