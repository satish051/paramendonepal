import { Wrench, Beaker, FileCode2 } from "lucide-react";

export const metadata = { title: "Makeathon Innovation Lab | Paramendo Nepal" };

export default function InnovationLabPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Beaker className="w-12 h-12 text-[var(--color-secondary)] mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold mb-4">Innovation Lab</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Open-source R&D for decentralized recycling. We share our mold designs and machine schematics to empower global builders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-[var(--color-secondary)] transition-colors">
            <Wrench className="w-8 h-8 text-[var(--color-accent)] mb-4" />
            <h3 className="font-bold text-xl mb-2">V3 Extruder Blueprints</h3>
            <p className="text-gray-400 text-sm mb-4">Our latest CAD files for a high-torque, low-power extrusion machine optimized for rural grids.</p>
            <button className="text-[var(--color-secondary)] font-bold text-sm flex items-center"><FileCode2 className="w-4 h-4 mr-2"/> Download .STEP</button>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-[var(--color-secondary)] transition-colors">
            <Wrench className="w-8 h-8 text-[var(--color-accent)] mb-4" />
            <h3 className="font-bold text-xl mb-2">Interlocking Roof Mold</h3>
            <p className="text-gray-400 text-sm mb-4">CNC milling files for our leak-proof LDPE roofing sheet mold.</p>
            <button className="text-[var(--color-secondary)] font-bold text-sm flex items-center"><FileCode2 className="w-4 h-4 mr-2"/> Download CNC Path</button>
          </div>
          
          <div className="bg-[var(--color-accent)] p-6 rounded-2xl border border-[var(--color-secondary)]">
            <h3 className="font-bold text-xl mb-2 text-white">Join the Makeathon</h3>
            <p className="text-gray-300 text-sm mb-6">Are you an engineer? We need help designing a more efficient shredder blade for high-density plastics.</p>
            <button className="w-full bg-white text-[var(--color-primary)] py-2 rounded-lg font-bold text-sm">Join GitHub Repo</button>
          </div>
        </div>
      </div>
    </div>
  );
}
