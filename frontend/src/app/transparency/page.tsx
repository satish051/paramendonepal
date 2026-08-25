import { FileText, Download, BarChart3, Factory } from "lucide-react";

export const metadata = {
  title: "Transparency & Data Room | Paramendo Nepal",
};

export default function TransparencyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-[var(--color-forest)] mb-4">Institutional Data Room</h1>
          <p className="text-lg text-gray-600">
            Committed to open governance. Access our Life Cycle Assessments (LCA), financial audits, and operational blueprints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* LCA Data */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Life Cycle Assessment (LCA)</h2>
            <p className="text-gray-600 mb-6 text-sm">
              Paramendo's upcycled PP tiles reduce carbon emissions by approximately 45% compared to the production of virgin polypropylene, and by 30% compared to traditional concrete pavers when accounting for transport and cement curing.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Virgin PP CO2/kg</span>
                <span className="text-sm font-bold">~1.9 kg</span>
              </div>
              <div className="flex justify-between items-center text-[var(--color-leaf)]">
                <span className="text-sm font-medium">Upcycled PP CO2/kg</span>
                <span className="text-sm font-bold">~1.05 kg</span>
              </div>
            </div>
          </div>

          {/* CRC Blueprints */}
          <div className="bg-[var(--color-forest)] text-white p-8 rounded-3xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white/10 text-[var(--color-leaf)] rounded-xl flex items-center justify-center mb-6">
                <Factory className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold mb-4">CRC Technical Blueprints</h2>
              <p className="text-white/80 mb-6 text-sm">
                Our Dhading Community Recycling Center is designed to be a scalable, reproducible model. We open-source our machine layouts, safety protocols, and operational workflows for NGOs looking to replicate our success.
              </p>
            </div>
            <button className="bg-white text-[var(--color-forest)] w-full py-3 rounded-xl font-bold flex items-center justify-center hover:bg-gray-100 transition-colors">
              <Download className="w-5 h-5 mr-2" /> Request Open-Source Blueprints
            </button>
          </div>
        </div>

        {/* Document Downloads */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 bg-gray-50/50">
            <h3 className="font-bold text-lg text-gray-900">Official Reports & Audits</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              "2023 Annual Impact Report (PDF)",
              "Financial Audit - FY 2022/2023 (PDF)",
              "Material Safety Data Sheet (MSDS) - PP Tiles",
              "ISO 9001 Compliance Roadmap"
            ].map((doc, i) => (
              <div key={i} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <FileText className="w-5 h-5 text-gray-400 mr-4" />
                  <span className="font-medium text-gray-700">{doc}</span>
                </div>
                <button className="text-[var(--color-leaf)] font-bold text-sm hover:text-[var(--color-forest)]">Download</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
