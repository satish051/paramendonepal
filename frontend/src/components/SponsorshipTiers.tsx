"use client";

import { Heart, Home, School, Tent } from "lucide-react";
import { useState } from "react";

const tiers = [
  {
    id: "family",
    name: "Sponsor a Family Home",
    amount: 35,
    icon: Home,
    description: "Provide enough LDPE roofing sheets to waterproof a standard rural home for the monsoon season.",
  },
  {
    id: "classroom",
    name: "Sponsor a Classroom",
    amount: 75,
    icon: School,
    description: "Insulate and waterproof a village classroom, ensuring students can learn comfortably during heavy rains.",
    popular: true,
  },
  {
    id: "shelter",
    name: "Sponsor a Village Shelter",
    amount: 150,
    icon: Tent,
    description: "Cover a large community gathering space or emergency shelter used by multiple families.",
  },
];

export default function SponsorshipTiers() {
  const [selectedTier, setSelectedTier] = useState<string | null>("classroom");

  return (
    <div className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {tiers.map((tier) => {
          const Icon = tier.icon;
          const isSelected = selectedTier === tier.id;
          
          return (
            <div 
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={`relative cursor-pointer rounded-3xl p-8 border-2 transition-all duration-200 flex flex-col h-full ${
                isSelected 
                  ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5 shadow-md scale-105" 
                  : "border-gray-200 bg-white hover:border-[var(--color-secondary)] hover:shadow-sm"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-accent)] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl ${isSelected ? "bg-[var(--color-primary)] text-white" : "bg-gray-100 text-gray-500"}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-right">
                  <span className={`text-3xl font-extrabold ${isSelected ? "text-[var(--color-primary)]" : "text-gray-900"}`}>
                    ${tier.amount}
                  </span>
                  <span className="block text-xs text-gray-500 uppercase tracking-wider font-semibold">USD</span>
                </div>
              </div>
              
              <h3 className={`text-xl font-bold mb-3 ${isSelected ? "text-[var(--color-primary)]" : "text-gray-900"}`}>
                {tier.name}
              </h3>
              
              <p className={`text-sm leading-relaxed mb-8 flex-grow ${isSelected ? "text-[var(--color-primary)]/80" : "text-gray-600"}`}>
                {tier.description}
              </p>
              
              <button 
                className={`w-full py-4 rounded-xl font-bold transition-colors flex items-center justify-center ${
                  isSelected 
                    ? "bg-[var(--color-primary)] text-white shadow-md hover:bg-opacity-90" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Heart className={`w-5 h-5 mr-2 ${isSelected ? "fill-white/20" : ""}`} />
                Sponsor Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
