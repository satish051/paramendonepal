import { QrCode, MapPin, Factory, Leaf } from "lucide-react";

export const metadata = { title: "Digital Product Passport | Paramendo Nepal" };

export default function PassportPage() {
  return (
    <div className="min-h-screen bg-[var(--color-offwhite)] py-12">
      <div className="max-w-md mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
        <div className="bg-[var(--color-forest)] text-white text-center py-10 px-6 relative">
          <QrCode className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <h1 className="text-2xl font-bold mb-1">Batch #8492-PP</h1>
          <p className="text-white/80 text-sm">Verified Upcycled Origin</p>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex items-start">
            <MapPin className="w-5 h-5 text-[var(--color-earth)] mr-3 mt-0.5" />
            <div>
              <h3 className="text-xs font-bold uppercase text-gray-400">Collected In</h3>
              <p className="font-medium text-gray-900">Ree Village, Dhading (Ward 4)</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Factory className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
            <div>
              <h3 className="text-xs font-bold uppercase text-gray-400">Manufactured By</h3>
              <p className="font-medium text-gray-900">Rajesh Gurung & Team</p>
              <p className="text-sm text-gray-500">Date: October 14, 2023</p>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-center">
            <Leaf className="w-8 h-8 text-[var(--color-leaf)] mr-4 shrink-0" />
            <div>
              <h3 className="font-bold text-green-900">Impact Verified</h3>
              <p className="text-sm text-green-700">This exact tile diverted 0.85kg of plastic from local rivers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
