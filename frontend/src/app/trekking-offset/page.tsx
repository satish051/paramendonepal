"use client";

import { useState } from "react";
import { Mountain, Calculator } from "lucide-react";

export default function TrekkingOffsetPage() {
  const [trekkers, setTrekkers] = useState<number>(10);
  const [days, setDays] = useState<number>(14);

  // Approx 0.4kg of plastic waste per trekker per day (bottles, wrappers, supplies)
  const plasticWasteKg = Math.round(trekkers * days * 0.4);
  const offsetCost = plasticWasteKg * 1.5; // $1.50 per kg to sponsor collection/upcycling

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <Mountain className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Trekking Plastic Offset</h1>
          <p className="text-lg text-gray-600">Expedition agencies: Calculate and offset the exact plastic footprint of your mountain expeditions.</p>
        </div>

        <div className="bg-gray-50 p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Number of Trekkers / Staff</label>
              <input type="number" value={trekkers} onChange={(e) => setTrekkers(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-gray-300" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Days on Trek</label>
              <input type="number" value={days} onChange={(e) => setDays(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-gray-300" />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 bg-[var(--color-accent)] text-white p-8 rounded-2xl text-center">
            <Calculator className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-4" />
            <p className="text-gray-300 text-sm uppercase tracking-widest font-bold mb-2">Estimated Expedition Waste</p>
            <p className="text-5xl font-extrabold text-white mb-6">{plasticWasteKg} <span className="text-2xl font-medium text-white/70">kg</span></p>
            
            <div className="border-t border-white/20 pt-6">
              <p className="text-sm mb-4">Sponsor our Dhading CRC to physically extract and upcycle this exact weight of plastic from the environment.</p>
              <button className="w-full bg-[var(--color-accent)] text-white font-bold py-3 rounded-xl hover:bg-opacity-90">
                Offset Expedition for ${offsetCost}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
