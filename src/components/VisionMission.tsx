import { Eye, Target } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          
          <div className="bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 p-6 opacity-10 transform group-hover:scale-110 transition-transform duration-500">
              <Eye className="w-24 h-24 text-green-600" />
            </div>
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 rounded-lg text-green-600 mr-4">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Our Vision</h2>
            </div>
            <p className="text-slate-600 leading-relaxed relative z-10">
              To create a sustainable and waste-free Nepal by turning plastic waste into valuable products, empowering local communities, and promoting eco-friendly solutions.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 p-6 opacity-10 transform group-hover:scale-110 transition-transform duration-500">
              <Target className="w-24 h-24 text-green-600" />
            </div>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-100 rounded-lg text-green-600 mr-4">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Our Mission</h2>
            </div>
            <ul className="space-y-4 relative z-10">
              {[
                "Reduce plastic pollution by implementing innovative recycling methods.",
                "Upcycle plastic waste into useful and sustainable products.",
                "Empower local communities through education, employment, and entrepreneurship.",
                "Promote a circular economy where waste is transformed into resources."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-sm mr-3 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
