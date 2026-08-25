import SponsorshipTiers from "@/components/SponsorshipTiers";
import CampaignProgress from "@/components/CampaignProgress";
import { CloudRain, ShieldCheck, MapPin } from "lucide-react";

export const metadata = {
  title: "Sponsor a Rural Roof | Paramendo Nepal",
  description: "Help us insulate and waterproof rural homes and schools in Nepal before the monsoon season using upcycled LDPE sheets.",
};

export default function SponsorRoofPage() {
  return (
    <div className="bg-[var(--color-offwhite)] min-h-screen pb-24">
      {/* Hero Section */}
      <section className="bg-[var(--color-forest)] py-24 text-center relative overflow-hidden">
        {/* Background Rain Pattern Mock */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center bg-[var(--color-leaf)]/20 text-[var(--color-leaf)] font-bold px-4 py-2 rounded-full mb-8 border border-[var(--color-leaf)]/30">
            <CloudRain className="w-5 h-5 mr-2" />
            Monsoon Relief Campaign
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
            Sponsor a Rural Roof
          </h1>
          <p className="text-xl text-[var(--color-offwhite)]/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            In rural Dhading, the monsoon season brings severe roof leaks to homes and schools. Your sponsorship directly provides families with our waterproof, upcycled LDPE roofing sheets.
          </p>
        </div>
      </section>

      {/* Progress Section */}
      <div className="-mt-12 px-4 sm:px-6 lg:px-8 relative z-20">
        <CampaignProgress />
      </div>

      {/* Tiers Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[var(--color-forest)]">Choose Your Impact</h2>
          <p className="text-gray-600 mt-4">100% of your sponsorship goes directly towards materials and local installation.</p>
        </div>
        
        <SponsorshipTiers />
      </section>

      {/* How it Works */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl p-10 sm:p-16 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-[var(--color-forest)] text-center mb-12">What happens after you sponsor?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-8 left-16 right-16 h-0.5 bg-gray-100 -z-10"></div>
            
            <div className="text-center bg-white">
              <div className="w-16 h-16 mx-auto bg-[var(--color-offwhite)] rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm">
                <span className="text-xl font-bold text-[var(--color-forest)]">1</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Materials Prepared</h3>
              <p className="text-sm text-gray-600">Our Dhading CRC manufactures the required LDPE sheets from locally upcycled plastic waste.</p>
            </div>
            
            <div className="text-center bg-white">
              <div className="w-16 h-16 mx-auto bg-[var(--color-offwhite)] rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm">
                <MapPin className="w-6 h-6 text-[var(--color-forest)]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Local Installation</h3>
              <p className="text-sm text-gray-600">Our trained community technicians install the waterproof sheets on the designated home or school.</p>
            </div>
            
            <div className="text-center bg-white">
              <div className="w-16 h-16 mx-auto bg-[var(--color-offwhite)] rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm">
                <ShieldCheck className="w-6 h-6 text-[var(--color-leaf)]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Photo Update</h3>
              <p className="text-sm text-gray-600">You receive a real-time photo of the installed roof, optionally tagged with your name or dedication.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
