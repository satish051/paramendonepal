"use client";

import { useState } from "react";
import { Palette, Check } from "lucide-react";
import Link from "next/link";

const colors = [
  { id: "forest", name: "Forest Green", hex: "#2F5233" },
  { id: "sky", name: "Sky Blue", hex: "#7CB9E8" },
  { id: "sand", name: "Sand White", hex: "#F5F5DC" },
  { id: "charcoal", name: "Charcoal", hex: "#36454F" },
  { id: "terracotta", name: "Terracotta", hex: "#E2725B" },
];

export default function ColorSwatch() {
  const [primaryColor, setPrimaryColor] = useState(colors[0]);
  const [secondaryColor, setSecondaryColor] = useState(colors[2]);

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 max-w-5xl mx-auto my-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4 flex items-center justify-center">
          <Palette className="w-8 h-8 mr-3 text-[var(--color-secondary)]" />
          Interactive Terrazzo Customizer
        </h2>
        <p className="text-gray-600 text-lg">
          Upcycled plastic creates unique, colorful marble-like swirl patterns. Customize your blend below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Controls */}
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Select Primary Base Color (60%)</h3>
            <div className="flex flex-wrap gap-3">
              {colors.map(color => (
                <button
                  key={`primary-${color.id}`}
                  onClick={() => setPrimaryColor(color)}
                  className="w-12 h-12 rounded-full border-2 focus:outline-none flex items-center justify-center transition-transform hover:scale-110"
                  style={{ backgroundColor: color.hex, borderColor: primaryColor.id === color.id ? '#171717' : 'transparent' }}
                  title={color.name}
                >
                  {primaryColor.id === color.id && <Check className="w-5 h-5 text-white mix-blend-difference" />}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Select Secondary Swirl Color (40%)</h3>
            <div className="flex flex-wrap gap-3">
              {colors.map(color => (
                <button
                  key={`secondary-${color.id}`}
                  onClick={() => setSecondaryColor(color)}
                  className="w-12 h-12 rounded-full border-2 focus:outline-none flex items-center justify-center transition-transform hover:scale-110"
                  style={{ backgroundColor: color.hex, borderColor: secondaryColor.id === color.id ? '#171717' : 'transparent' }}
                  title={color.name}
                >
                  {secondaryColor.id === color.id && <Check className="w-5 h-5 text-white mix-blend-difference" />}
                </button>
              ))}
            </div>
          </div>
          
          <Link 
            href={`/contact?inquiry=Request a Sample&message=I would like a sample in ${primaryColor.name} and ${secondaryColor.name} terrazzo blend.`}
            className="inline-block bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all"
          >
            Request Sample in this Colorway
          </Link>
        </div>

        {/* Visualizer output */}
        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-inner border-4 border-gray-100 flex items-center justify-center bg-gray-100">
          {/* Mock SVG pattern to simulate Terrazzo */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="noiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" stitchTiles="stitch"/>
                <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 5 -2" result="mask"/>
                <feComposite in="SourceGraphic" in2="mask" operator="in" />
              </filter>
            </defs>
            <rect width="100%" height="100%" fill={primaryColor.hex} />
            <rect width="100%" height="100%" fill={secondaryColor.hex} filter="url(#noiseFilter)" opacity="0.8" />
          </svg>
          <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.1)] pointer-events-none"></div>
          <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg text-sm font-bold text-gray-800 shadow-sm">
            Live Preview: {primaryColor.name} + {secondaryColor.name}
          </div>
        </div>
      </div>
    </div>
  );
}
