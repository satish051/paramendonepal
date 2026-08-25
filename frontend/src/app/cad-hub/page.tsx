import { Download, Box, Layers } from "lucide-react";

export const metadata = { title: "Architect CAD Hub | Paramendo Nepal" };

export default function CadHubPage() {
  const textures = [
    { name: "Forest Green Terrazzo", format: "Seamless PNG & .MAT" },
    { name: "Charcoal Slate LDPE", format: "PBR Material Set" },
    { name: "Sand White River", format: "Seamless PNG & .MAT" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-[var(--color-primary)] mb-4">Architect CAD Hub</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Incorporate sustainable, upcycled plastic materials into your next architectural render. Download our seamless textures and PBR materials for SketchUp, Blender, and AutoCAD.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {textures.map((tex, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="aspect-square bg-gray-200 rounded-xl mb-6 relative flex items-center justify-center overflow-hidden">
                <Box className="w-12 h-12 text-gray-400 opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/20 pointer-events-none"></div>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">{tex.name}</h3>
              <p className="text-gray-500 text-sm mb-6 flex items-center"><Layers className="w-4 h-4 mr-2"/> {tex.format}</p>
              <button className="w-full bg-[var(--color-surface)] text-[var(--color-primary)] border border-[var(--color-primary)]/20 px-4 py-3 rounded-lg font-bold flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-white transition-colors">
                <Download className="w-5 h-5 mr-2" /> Download Assets
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
