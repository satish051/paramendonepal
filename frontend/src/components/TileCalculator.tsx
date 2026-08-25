"use client";

import { useState } from "react";
import { Calculator, ArrowRight, Leaf } from "lucide-react";
import Link from "next/link";

export default function TileCalculator() {
  const [area, setArea] = useState<number | "">("");
  const [unit, setUnit] = useState<"sqft" | "sqm">("sqft");
  const [application, setApplication] = useState<"Flooring" | "Roofing">("Flooring");

  // Conversion constants
  const SQM_TO_SQFT = 10.7639;
  
  // Get area in sqft for standard calculations
  const areaInSqFt = typeof area === "number" 
    ? (unit === "sqm" ? area * SQM_TO_SQFT : area)
    : 0;

  // Constants for calculation
  const TILE_COVERAGE_SQFT = 1.0; // Assume 1 tile covers 1 sq ft
  const KG_PLASTIC_PER_SQFT = 0.85;
  const ESTIMATED_COST_PER_SQFT = 120; // Estimated Nepali Rupees (NPR) per sq ft

  const tilesNeeded = Math.ceil(areaInSqFt / TILE_COVERAGE_SQFT);
  const plasticRepurposed = (areaInSqFt * KG_PLASTIC_PER_SQFT).toFixed(1);
  const estimatedCost = (areaInSqFt * ESTIMATED_COST_PER_SQFT).toLocaleString();

  const queryParams = new URLSearchParams({
    inquiry: "Request a Quote",
    message: `I would like to request a quote for ${application} materials.\n\nEstimated Area: ${area} ${unit}\nCalculated Needs: ${tilesNeeded} tiles`,
  }).toString();

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-[var(--color-secondary)]/20 overflow-hidden">
      <div className="bg-[var(--color-primary)] text-[var(--color-surface)] p-6 sm:p-8">
        <div className="flex items-center space-x-3 mb-2">
          <Calculator className="w-8 h-8 text-[var(--color-secondary)]" />
          <h2 className="text-2xl font-bold text-white">Impact & Material Estimator</h2>
        </div>
        <p className="text-gray-300">
          Calculate your material needs and see your positive environmental impact.
        </p>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Project Application</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setApplication("Flooring")}
                className={`py-3 px-4 rounded-xl text-sm font-semibold border-2 transition-all ${
                  application === "Flooring"
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                    : "border-gray-200 text-gray-600 hover:border-[var(--color-secondary)]"
                }`}
              >
                Flooring (PP Tiles)
              </button>
              <button
                type="button"
                onClick={() => setApplication("Roofing")}
                className={`py-3 px-4 rounded-xl text-sm font-semibold border-2 transition-all ${
                  application === "Roofing"
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                    : "border-gray-200 text-gray-600 hover:border-[var(--color-secondary)]"
                }`}
              >
                Roofing (LDPE)
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-2">Total Surface Area</label>
            <div className="flex shadow-sm rounded-xl overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-[var(--color-secondary)] focus-within:border-transparent transition-shadow">
              <input
                type="number"
                id="area"
                min="0"
                value={area}
                onChange={(e) => setArea(e.target.value ? Number(e.target.value) : "")}
                className="block w-full px-4 py-3 border-0 outline-none text-gray-900"
                placeholder="e.g., 500"
              />
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value as "sqft" | "sqm")}
                className="bg-gray-50 border-l border-gray-300 px-4 py-3 outline-none text-gray-700 font-medium"
              >
                <option value="sqft">sq. ft</option>
                <option value="sqm">sq. m</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-[var(--color-surface)] rounded-2xl p-6 border border-gray-100 flex flex-col justify-center">
          {area === "" || area <= 0 ? (
            <div className="text-center text-gray-400">
              <Calculator className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Enter your project dimensions to see your estimate.</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b border-gray-200 pb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Materials Needed</p>
                  <p className="text-3xl font-bold text-[var(--color-primary)]">
                    {tilesNeeded.toLocaleString()} <span className="text-lg font-medium text-gray-600">units</span>
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-end border-b border-gray-200 pb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Estimated Cost</p>
                  <p className="text-3xl font-bold text-[var(--color-primary)]">
                    <span className="text-lg font-medium text-gray-600 mr-1">NPR</span>
                    ~{estimatedCost}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-end border-b border-gray-200 pb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Est. Completion Time</p>
                  <p className="text-3xl font-bold text-[var(--color-primary)]">
                    {Math.max(1, Math.ceil(areaInSqFt / 250))} <span className="text-lg font-medium text-gray-600">days</span>
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[var(--color-secondary)]/30 shadow-sm flex items-start space-x-4">
                <div className="bg-[var(--color-secondary)]/20 p-2 rounded-full flex-shrink-0">
                  <Leaf className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--color-primary)] mb-1">Environmental Impact</p>
                  <p className="text-sm text-gray-600">
                    This project will divert approx. <span className="font-bold text-[var(--color-primary)]">{plasticRepurposed} kg</span> of plastic waste from landfills and nature.
                  </p>
                </div>
              </div>

              <Link
                href={`/contact?${queryParams}`}
                className="w-full flex items-center justify-center bg-[var(--color-primary)] text-white px-6 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-md group"
              >
                Request Official Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
