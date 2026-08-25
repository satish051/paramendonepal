import { Package, Grid, Home, Users, CheckCircle2 } from 'lucide-react';

const Activities = () => {
  const coreWork = [
    "Build and maintain waste management models",
    "Teach and experiment on up-cycling of products",
    "Collaborate with organizations with sustainability in mind",
    "Work together with communities and local government"
  ];

  const products = [
    {
      title: "Custom Plastic Up-cycled Products",
      description: "Creating customized up-cycled plastic products tailored to meet different needs of customers. By processing plastic waste into functional items, we are proving that plastic can be repurposed instead of discarded.",
      icon: Package,
    },
    {
      title: "PP (Polypropylene) Tiles",
      description: "Transform polypropylene (PP) and high-density polyethylene (HDPE)—commonly found in plastic bottles, containers, and chairs—into durable tiles that can be used for roofing, flooring, and construction.",
      icon: Grid,
      features: ["Eco-friendly", "Weather-resistant", "Affordable"],
    },
    {
      title: "LDPE Sheets for Roofing & Insulation",
      description: "Repurpose low-density polyethylene (LDPE) from plastic wraps and bags into leak-proof sheets for roofing and insulation. These sheets help rural communities by preventing roof leaks and providing thermal insulation.",
      icon: Home,
      features: ["Preventing roof leaks", "Thermal insulation", "Reducing plastic waste"],
    },
    {
      title: "Community Engagement & Awareness",
      description: "Involve local communities in our mission by conducting awareness programs on plastic waste management, encouraging waste segregation at the source, and providing employment opportunities.",
      icon: Users,
    }
  ];

  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">What we do</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our work
          </p>
        </div>

        <div className="mb-20 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {coreWork.map((work, idx) => (
              <div key={idx} className="flex items-start bg-slate-50 p-6 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-0.5" />
                <p className="text-lg text-slate-700 font-medium">{work}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-slate-800">Our Products & Solutions</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div key={index} className="flex flex-col bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-5">
                  <div className="p-3 bg-green-600 rounded-lg text-white mr-4 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800">{product.title}</h4>
                </div>
                <p className="text-slate-600 flex-grow mb-6 leading-relaxed">
                  {product.description}
                </p>
                {product.features && (
                  <ul className="mt-auto space-y-2">
                    {product.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-sm font-medium text-slate-700">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Activities;
