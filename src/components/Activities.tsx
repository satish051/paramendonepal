import { Package, Grid, Home, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Activities = () => {

  const coreWork = [
    { title: 'Waste Management Models', desc: 'Build and maintain sustainable waste management models in rural areas.' },
    { title: 'Up-cycling Innovation', desc: 'Teach and experiment on the up-cycling of discarded plastic products.' },
    { title: 'Strategic Partnerships', desc: 'Collaborate with organizations and NGOs with sustainability in mind.' },
    { title: 'Local Collaboration', desc: 'Work closely together with communities and local government bodies.' }
  ];

  const products = [
    {
      title: 'Custom Plastic Up-cycled Products',
      description: 'Creating customized up-cycled plastic products tailored to meet different needs of customers. By processing plastic waste into functional items, we prove that plastic can be repurposed.',
      icon: Package,
      image: "https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: 'PP (Polypropylene) Tiles',
      description: 'Transform polypropylene (PP) and high-density polyethylene (HDPE)—commonly found in plastic bottles and chairs—into durable tiles for roofing, flooring, and construction.',
      icon: Grid,
      features: ['Eco-friendly', 'Weather-resistant', 'Affordable'],
      image: "https://paramendonepal.com/wp-content/uploads/2024/07/P1660083-38-1-scaled.jpg"
    },
    {
      title: 'LDPE Sheets for Roofing',
      description: 'Repurpose low-density polyethylene (LDPE) from plastic wraps and bags into leak-proof sheets for roofing and insulation. These sheets prevent roof leaks and provide thermal insulation.',
      icon: Home,
      features: ['Leak prevention', 'Thermal insulation', 'Waste reduction'],
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: 'Community Engagement',
      description: 'Involve local communities in our mission by conducting awareness programs on plastic waste management, encouraging waste segregation at the source, and providing employment opportunities.',
      icon: Users,
      image: "https://images.pexels.com/photos/3182512/pexels-photo-3182512.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-32 px-6 md:px-12 lg:px-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 group">
          <img 
            src="https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Paramendo Work" 
            className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-[2000ms]"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto z-10 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 border border-white/20 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-bold text-white tracking-wide uppercase font-body">What We Do</span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl tracking-wider text-white uppercase mb-8">
            Turning Waste into <br className="hidden md:block"/>
            Lasting Value.
          </h1>
          <div className="w-12 h-0.5 bg-red mt-4 mb-8" />
          <p className="max-w-2xl text-white/70 font-body text-lg mx-auto leading-relaxed">
            From building sustainable waste management models to innovating new upcycled products, discover how we are reshaping the future of rural Nepal.
          </p>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-heading tracking-wider uppercase text-black mb-6">Our Core Focus</h2>
            <div className="w-12 h-0.5 bg-red mb-8" />
            <p className="text-black/60 font-body text-lg">
              The four pillars that guide our daily operations and long-term strategy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreWork.map((work, idx) => (
              <div key={idx} className="bg-white border border-black/10 rounded-lg p-8 hover:border-black/40 hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center mb-6 text-black">
                  <span className="font-heading text-xl">{idx + 1}</span>
                </div>
                <h3 className="font-heading text-2xl tracking-wider text-black mb-4 uppercase">{work.title}</h3>
                <p className="text-black/60 font-body">{work.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Activities & Products */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-20 border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-heading tracking-wider uppercase text-black mb-6">Current Activities & Products</h2>
            <div className="w-12 h-0.5 bg-red mb-8" />
            <p className="text-black/60 font-body text-lg">
              The Community Recycling Center (CRC) is at the heart of our operations. Here is a look at the innovative products and programs we execute daily.
            </p>
          </div>

          <div className="space-y-24 md:space-y-40">
            {products.map((product, index) => {
              const Icon = product.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 group`}>
                  
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2 relative">
                    <div className="relative rounded-lg overflow-hidden border border-black/10 bg-white">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-[400px] md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-6 left-6 z-20 bg-white p-4 rounded-full border border-black/10 group-hover:-translate-y-1 transition-transform duration-300 text-black">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Text Side */}
                  <div className="w-full lg:w-1/2">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading tracking-wider uppercase text-black mb-6">{product.title}</h3>
                    <p className="text-black/60 font-body text-lg leading-relaxed mb-8">
                      {product.description}
                    </p>
                    
                    {product.features && (
                      <div className="bg-white rounded-lg p-8 border border-black/10">
                        <h4 className="font-heading tracking-wider uppercase text-black mb-6 text-xl flex items-center">
                          <span className="w-2 h-2 bg-red rounded-full mr-3"></span>
                          Key Benefits
                        </h4>
                        <ul className="space-y-4">
                          {product.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-center text-black/80 font-body text-lg">
                              <div className="flex-shrink-0 w-6 h-6 rounded-full border border-black/10 flex items-center justify-center mr-4">
                                <CheckCircle2 className="w-4 h-4 text-black" />
                              </div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-20 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-heading tracking-wider uppercase text-white mb-6">Ready to make a difference?</h2>
          <div className="w-12 h-0.5 bg-red mb-8" />
          <p className="text-white/70 font-body text-lg mb-12 leading-relaxed">
            Partner with us to bring sustainable waste management and innovative upcycled products to your community.
          </p>
          <Link 
            to="/contact" 
            className="border border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-black transition-colors duration-300 font-body font-bold text-sm tracking-widest uppercase inline-flex items-center group"
          >
            Contact Us Today <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Activities;
