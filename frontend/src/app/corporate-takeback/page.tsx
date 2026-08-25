import { Recycle, ArrowRightLeft, Building } from "lucide-react";

export const metadata = { title: "Corporate Takeback | Paramendo Nepal" };

export default function CorporateTakebackPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="inline-flex items-center text-[var(--color-secondary)] font-bold mb-4">
              <Recycle className="w-5 h-5 mr-2" /> B2B Closed-Loop System
            </div>
            <h1 className="text-4xl font-extrabold text-[var(--color-primary)] mb-6">Your Waste. Your Furniture.</h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We partner with hotels, banks, and corporations across Nepal to audit and collect their specific plastic waste streams. We then upcycle that exact waste into branded corporate furniture, coasters, or flooring for their offices.
            </p>
            <button className="bg-[var(--color-accent)] text-white px-8 py-4 rounded-xl font-bold flex items-center hover:bg-opacity-90">
              Initiate Corporate Audit <ArrowRightLeft className="ml-2 w-5 h-5" />
            </button>
          </div>
          
          <div className="md:w-1/2 bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <h3 className="font-bold text-2xl text-gray-900 mb-8">How it Works</h3>
            <div className="space-y-6">
              <div className="flex">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-[var(--color-primary)] shadow-sm shrink-0">1</div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg">Waste Audit & Collection</h4>
                  <p className="text-gray-500 text-sm">We place branded bins in your office and collect sorted PP/HDPE weekly.</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-[var(--color-primary)] shadow-sm shrink-0">2</div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg">Custom Upcycling</h4>
                  <p className="text-gray-500 text-sm">Our artisans shred and mold your corporate waste into custom products.</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-[var(--color-primary)] shadow-sm shrink-0">3</div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg">Return & Report</h4>
                  <p className="text-gray-500 text-sm">You receive the finished products along with a certified ESG impact report.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
