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
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-slate-900 mb-16 rounded-3xl mx-4 sm:mx-6 lg:mx-8">
        <div className="absolute inset-0 group">
          <img 
            src="https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Paramendo Work" 
            className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent pointer-events-none"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center space-x-2 bg-primary-500/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-primary-500/30">
            <span className="text-sm font-bold text-primary-300 tracking-wide uppercase">What We Do</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-8">
            Turning Waste into <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              Lasting Value.
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-slate-300 mx-auto font-light leading-relaxed">
            From building sustainable waste management models to innovating new upcycled products, discover how we are reshaping the future of rural Nepal.
          </p>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800/60 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">Our Core Focus</h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light">
              The four pillars that guide our daily operations and long-term strategy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreWork.map((work, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-primary-100 dark:border-primary-500/20">
                  <span className="text-primary-600 dark:text-primary-400 font-bold text-xl">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{work.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">{work.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Activities & Products */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">Current Activities & Products</h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light">
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
                    {/* Decorative Background Blob */}
                    <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? '-left-10' : '-right-10'} w-64 h-64 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full blur-3xl opacity-20 dark:opacity-30 group-hover:opacity-40 transition-opacity duration-700 -z-10`}></div>
                    
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
                      <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-[400px] md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-6 left-6 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 dark:border-slate-800/50 group-hover:-translate-y-1 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Text Side */}
                  <div className="w-full lg:w-1/2">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">{product.title}</h3>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-8">
                      {product.description}
                    </p>
                    
                    {product.features && (
                      <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-sm flex items-center">
                          <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                          Key Benefits
                        </h4>
                        <ul className="space-y-4">
                          {product.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-center text-slate-700 dark:text-slate-300 font-medium text-lg">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-50 dark:bg-secondary-500/10 flex items-center justify-center mr-4">
                                <CheckCircle2 className="w-5 h-5 text-secondary-500" />
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
      <section className="py-24 md:py-32 bg-slate-900 dark:bg-slate-950 text-center px-4 relative overflow-hidden border-t border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Ready to make a difference?</h2>
          <p className="text-xl text-slate-300 font-light mb-12 leading-relaxed">
            Partner with us to bring sustainable waste management and innovative upcycled products to your community.
          </p>
          <Link 
            to="/contact" 
            className="group inline-flex items-center px-8 py-4 bg-secondary-500 text-white font-bold text-lg rounded-full hover:bg-secondary-400 transition-all duration-300 shadow-lg shadow-secondary-500/30 hover:shadow-secondary-500/50 hover:-translate-y-1"
          >
            Contact Us Today <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Activities;
