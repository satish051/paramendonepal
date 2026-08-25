import CommunityVoices from "@/components/CommunityVoices";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Community Impact | Paramendo Nepal",
  description: "Meet the artisans and technicians in Dhading who are transforming plastic waste into sustainable green jobs.",
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      {/* Community Hero */}
      <section className="bg-[var(--color-forest)] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Human Impact First
          </h1>
          <p className="text-xl text-[var(--color-offwhite)]/90 mb-10">
            Behind every upcycled tile and roofing sheet is a story of community resilience and green job creation in rural Nepal.
          </p>
          <Link 
            href="/about" 
            className="inline-flex items-center text-white border border-white/30 px-6 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Learn about our CRC Facility
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Interactive Story Cards */}
      <CommunityVoices />
    </div>
  );
}
