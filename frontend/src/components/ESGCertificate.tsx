"use client";

import { useState } from "react";
import { Download, Award, CheckCircle } from "lucide-react";

export default function ESGCertificate() {
  const [companyName, setCompanyName] = useState("");
  const [contribution, setContribution] = useState<number | "">("");

  // 0.85 kg plastic per $1 contributed as a mock metric
  const plasticDiverted = typeof contribution === "number" ? Math.floor(contribution * 0.85) : 0;
  const artisanHours = typeof contribution === "number" ? Math.floor(contribution * 0.2) : 0;

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 max-w-4xl mx-auto my-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">ESG Impact Certificate Generator</h2>
        <p className="text-gray-600">Generate a branded CSR certificate for your corporate sponsorship.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Corporate Sponsor Name</label>
            <input 
              type="text" 
              value={companyName} 
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-secondary)] outline-none"
              placeholder="e.g., Acme Corp" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sponsorship Amount (USD)</label>
            <input 
              type="number" 
              value={contribution} 
              onChange={(e) => setContribution(e.target.value ? Number(e.target.value) : "")}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-secondary)] outline-none"
              placeholder="e.g., 5000" 
            />
          </div>
          <button className="w-full bg-[var(--color-primary)] text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center hover:bg-opacity-90">
            <Download className="w-5 h-5 mr-2" />
            Download PDF Certificate
          </button>
        </div>

        {/* Certificate Preview */}
        <div className="bg-[var(--color-surface)] p-8 rounded-xl border-8 border-[var(--color-primary)]/10 text-center relative">
          <Award className="w-16 h-16 text-[var(--color-accent)] mx-auto mb-4" />
          <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-2">Certificate of Impact</h3>
          <p className="text-sm text-gray-600 uppercase tracking-widest mb-6">Presented to</p>
          <p className="text-2xl font-bold text-gray-900 border-b border-gray-300 inline-block px-8 pb-2 mb-8">
            {companyName || "Your Company Name"}
          </p>
          
          <div className="bg-white rounded-lg p-4 mb-8 shadow-sm">
            <p className="text-sm text-gray-700 mb-2">For your commitment to a sustainable Nepal. Your contribution has directly enabled:</p>
            <div className="flex justify-around text-center mt-4">
              <div>
                <p className="text-2xl font-bold text-[var(--color-secondary)]">{plasticDiverted} kg</p>
                <p className="text-xs text-gray-500 uppercase">Plastic Diverted</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--color-secondary)]">{artisanHours} hrs</p>
                <p className="text-xs text-gray-500 uppercase">Artisan Work</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-xs text-gray-400 mt-4">
            <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-1 text-[var(--color-primary)]"/> Verified by Paramendo Nepal</div>
            <div>Date: {new Date().toLocaleDateString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
