import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Coins,
  Utensils,
  Heart,
  BookOpen,
  Users,
  Droplet,
  Zap,
  Briefcase,
  Factory,
  Scale,
  Building2,
  Recycle,
  Globe,
  Fish,
  Leaf,
  Shield,
  Handshake
} from 'lucide-react';

const SDGCommitment = () => {
  const [activeGoal, setActiveGoal] = useState<number | null>(null);
  
  const [content, setContent] = useState({
    title: "Our Commitment To UN Sustainable Development Goals",
    paragraph1: "Paramendo Nepal activities are focused on adding value to the Triple Bottom Line of 'People, Planet and Prosperity', thereby creating an entity that can truly achieve a Net Positive Impact.",
    paragraph2: "With the United Nation's Sustainable Development Goals serving as a guiding light, all our activities have a positive environmental and social impact on individuals and communities across Nepal. Paramendo Nepal is contributing to sixteen of the seventeen United Nations Sustainable Development Goals either directly or indirectly."
  });

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        if (data && data.sdg) setContent(data.sdg);
      })
      .catch(console.error);
  }, []);

  const sdgGoals = [
    { id: 1, name: 'No Poverty', color: '#E5243B', icon: Coins },
    { id: 2, name: 'Zero Hunger', color: '#DDA63A', icon: Utensils },
    { id: 3, name: 'Good Health and Well-being', color: '#4C9F38', icon: Heart },
    { id: 4, name: 'Quality Education', color: '#C5192D', icon: BookOpen },
    { id: 5, name: 'Gender Equality', color: '#FF3A21', icon: Users },
    { id: 6, name: 'Clean Water and Sanitation', color: '#26BDE2', icon: Droplet },
    { id: 7, name: 'Affordable and Clean Energy', color: '#FCC30B', icon: Zap },
    { id: 8, name: 'Decent Work and Economic Growth', color: '#A21942', icon: Briefcase },
    { id: 9, name: 'Industry, Innovation and Infrastructure', color: '#FD6925', icon: Factory },
    { id: 10, name: 'Reduced Inequalities', color: '#DD1367', icon: Scale },
    { id: 11, name: 'Sustainable Cities and Communities', color: '#FD9D24', icon: Building2 },
    { id: 12, name: 'Responsible Consumption and Production', color: '#BF8B2E', icon: Recycle },
    { id: 13, name: 'Climate Action', color: '#3F7E44', icon: Globe },
    { id: 14, name: 'Life Below Water', color: '#0A97D9', icon: Fish },
    { id: 15, name: 'Life on Land', color: '#56C02B', icon: Leaf },
    { id: 16, name: 'Peace, Justice and Strong Institutions', color: '#00689D', icon: Shield },
    { id: 17, name: 'Partnerships for the Goals', color: '#19486A', icon: Handshake },
  ];

  const r = 35;
  const circumference = 2 * Math.PI * r;
  const segmentLength = circumference / 17;

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
      >
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-white space-y-8 flex flex-col items-start text-left">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-400 font-semibold text-sm mb-4">
                Our Impact
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                {content.title}
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full mt-6" />
            </motion.div>
            
            <div className="space-y-5 text-gray-300 text-lg">
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}>
                {content.paragraph1}
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}>
                {content.paragraph2}
              </motion.p>
            </div>
            
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }} className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full">
              <a href="#" className="inline-flex items-center px-6 py-3 rounded-full bg-white text-slate-900 font-bold hover:bg-primary-50 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] shrink-0">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="text-primary-300/80 text-sm md:text-base font-medium flex items-center bg-primary-900/20 px-4 py-2 rounded-full border border-primary-500/20">
                ✨ Hover over the wheel to explore
              </div>
            </motion.div>
          </div>

          {/* Interactive Wheel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, duration: 1.5 }}
            className="flex justify-center items-center relative"
          >
             {/* Glow effect behind wheel */}
             <div className="absolute inset-0 bg-secondary-500/20 blur-[100px] rounded-full" />
             
             <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px]">
                {/* SVG Wheel */}
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 drop-shadow-2xl">
                  {sdgGoals.map((goal, index) => {
                     const dashOffset = -(index * segmentLength);
                     const isActive = activeGoal === goal.id;
                     return (
                       <circle
                         key={goal.id}
                         cx="50" cy="50" r={r}
                         fill="none"
                         stroke={goal.color}
                         strokeWidth={isActive ? "32" : "30"}
                         strokeDasharray={`${segmentLength - 0.5} ${circumference}`}
                         strokeDashoffset={dashOffset}
                         className="cursor-pointer transition-all duration-300 ease-out origin-center"
                         style={{
                           transform: isActive ? 'scale(1.02)' : 'scale(1)',
                           transformOrigin: '50px 50px',
                         }}
                         onMouseEnter={() => setActiveGoal(goal.id)}
                         onMouseLeave={() => setActiveGoal(null)}
                       />
                     )
                  })}
                </svg>

                {/* Center Content */}
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                   <div className="bg-white rounded-full w-[45%] h-[45%] flex flex-col justify-center items-center text-center shadow-[0_0_30px_rgba(0,0,0,0.3)] z-10 p-4 transition-all duration-300">
                      {activeGoal !== null ? (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex flex-col items-center justify-center space-y-2"
                        >
                          <div 
                            className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold shadow-inner transition-colors duration-300"
                            style={{ backgroundColor: sdgGoals[activeGoal-1].color }}
                          >
                            {(() => {
                              const Icon = sdgGoals[activeGoal-1].icon;
                              return <Icon className="w-4 h-4 md:w-6 md:h-6" />;
                            })()}
                          </div>
                          <span className="text-xs md:text-sm lg:text-base font-bold text-slate-800 leading-tight">
                            {sdgGoals[activeGoal-1].name}
                          </span>
                        </motion.div>
                      ) : (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex flex-col items-center justify-center"
                        >
                          <span className="text-[10px] md:text-xs font-bold text-gray-500 tracking-widest uppercase mb-1 leading-tight">
                            Sustainable<br/>Development
                          </span>
                          <span className="text-xl md:text-3xl font-black text-[#00689D] tracking-wider">
                            GOALS
                          </span>
                        </motion.div>
                      )}
                   </div>
                </div>

                {/* Goal Icons overlay */}
                {sdgGoals.map((goal, index) => {
                  const angle = (index * (360 / 17)) + ((360 / 17) / 2) - 90;
                  const rad = angle * (Math.PI / 180);
                  const radius = 35; // same as r
                  const x = 50 + radius * Math.cos(rad);
                  const y = 50 + radius * Math.sin(rad);
                  
                  const Icon = goal.icon;
                  
                  return (
                    <div 
                      key={goal.id}
                      className="absolute pointer-events-none flex justify-center items-center text-white drop-shadow-md transition-all duration-300"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)',
                        width: '20px',
                        height: '20px'
                      }}
                    >
                      <Icon className="w-3 h-3 md:w-4 md:h-4 opacity-95" />
                    </div>
                  );
                })}
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SDGCommitment;
