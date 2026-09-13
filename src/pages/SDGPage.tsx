import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Globe2,
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
  Handshake,
  Sparkles
} from 'lucide-react';

const sdgGoalsData = [
  {
    id: 1,
    number: "01",
    name: 'No Poverty',
    color: '#E5243B',
    icon: Coins,
    role: "Direct Impact",
    summary: "Generating reliable green livelihoods for mountain pickers, waste aggregators, and rural women across Nepal.",
    contribution: "By formalizing low-value plastic collection and offering fair, consistent buyback prices in remote areas like Ree Village and Ruby Valley, Paramendo directly boosts household incomes where economic alternatives are scarce."
  },
  {
    id: 2,
    number: "02",
    name: 'Zero Hunger',
    color: '#DDA63A',
    icon: Utensils,
    role: "Indirect Impact",
    summary: "Protecting alpine agricultural soils and livestock grazing grounds from non-biodegradable degradation.",
    contribution: "Preventing plastic ingestion by cattle and livestock, while safeguarding fertile terraced slopes from toxic microplastic seepage resulting from open-pit burns."
  },
  {
    id: 3,
    number: "03",
    name: 'Good Health and Well-being',
    color: '#4C9F38',
    icon: Heart,
    role: "Direct Impact",
    summary: "Eliminating open toxic plastic burning and airborne dioxin contamination in Himalayan communities.",
    contribution: "Stopping the widespread domestic practice of burning multi-layered plastics (MLP) for disposal, drastically improving respiratory health for rural children and elderly residents."
  },
  {
    id: 4,
    number: "04",
    name: 'Quality Education',
    color: '#C5192D',
    icon: BookOpen,
    role: "Direct Impact",
    summary: "School outreach programs, hands-on circular economy workshops, and environmental literacy kits.",
    contribution: "Partnering with schools to establish community recycling hubs, providing desks and benches engineered from upcycled polymer boards, and training youth in climate stewardship."
  },
  {
    id: 5,
    number: "05",
    name: 'Gender Equality',
    color: '#FF3A21',
    icon: Users,
    role: "Direct Impact",
    summary: "Prioritizing leadership and sustainable employment for rural women and mothers.",
    contribution: "Over 60% of collectors and community sorting supervisors engaged in our rural hubs are women, providing financial autonomy and leadership opportunities within local councils."
  },
  {
    id: 6,
    number: "06",
    name: 'Clean Water and Sanitation',
    color: '#26BDE2',
    icon: Droplet,
    role: "Direct Impact",
    summary: "Diverting hazardous plastics from Himalayan river basins, streams, and sacred watersheds.",
    contribution: "Intercepting packaging before it enters alpine headwaters that supply drinking water to downstream valleys, preserving pristine aquatic purity."
  },
  {
    id: 7,
    number: "07",
    name: 'Affordable and Clean Energy',
    color: '#FCC30B',
    icon: Zap,
    role: "Indirect Impact",
    summary: "Promoting energy-efficient low-carbon processing over virgin polymer production.",
    contribution: "Mechanical upcycling saves significant embodied energy compared to fossil fuel-derived virgin resin production, decreasing grid and fossil-fuel strain."
  },
  {
    id: 8,
    number: "08",
    name: 'Decent Work and Economic Growth',
    color: '#A21942',
    icon: Briefcase,
    role: "Direct Impact",
    summary: "Formalizing decentralized green jobs with dignified wages, safety gear, and social safety nets.",
    contribution: "Transforming informal waste collection into certified green entrepreneurship, opening stable career paths in circular manufacturing and eco-design."
  },
  {
    id: 9,
    number: "09",
    name: 'Industry, Innovation and Infrastructure',
    color: '#FD6925',
    icon: Factory,
    role: "Direct Impact",
    summary: "Engineered high-density composite panels and resilient building solutions.",
    contribution: "Developing proprietary heat-and-pressure composite processes capable of converting mixed, contaminated polymers into high-performance industrial construction panels."
  },
  {
    id: 10,
    number: "10",
    name: 'Reduced Inequalities',
    color: '#DD1367',
    icon: Scale,
    role: "Direct Impact",
    summary: "Bridging the urban-rural infrastructural divide across isolated geography.",
    contribution: "Extending modern circular technologies to indigenous and marginalized mountain clusters, ensuring remote communities are not left behind in global climate financing."
  },
  {
    id: 11,
    number: "11",
    name: 'Sustainable Cities and Communities',
    color: '#FD9D24',
    icon: Building2,
    role: "Direct Impact",
    summary: "Local infrastructure building from upcycled sheets: roofings, shelters, and partitions.",
    contribution: "Furnishing disaster-resilient roofing and lightweight construction sheets to reinforce urban settlements and rural municipal facilities against extreme weather."
  },
  {
    id: 12,
    number: "12",
    name: 'Responsible Consumption and Production',
    color: '#BF8B2E',
    icon: Recycle,
    role: "Direct Impact",
    summary: "Closing the loop on hard-to-recycle multi-layered and low-density packaging.",
    contribution: "Establishing authentic Extended Producer Responsibility (EPR) compliance pipelines for FMCG companies, converting post-consumer waste into durable, circular assets."
  },
  {
    id: 13,
    number: "13",
    name: 'Climate Action',
    color: '#3F7E44',
    icon: Globe,
    role: "Direct Impact",
    summary: "Measurable lifecycle CO2 reduction compared to concrete, wood, and virgin plastics.",
    contribution: "Each ton of upcycled polymer boards diverts substantial greenhouse gases from landfills and open fires, generating verified carbon metrics."
  },
  {
    id: 14,
    number: "14",
    name: 'Life Below Water',
    color: '#0A97D9',
    icon: Fish,
    role: "Direct Impact",
    summary: "Preventing plastic runoff from high glacial lakes and Himalayan tributaries.",
    contribution: "Safeguarding high-altitude aquatic biomes and downstream river ecologies from choking microplastic fragments and toxic plasticizers."
  },
  {
    id: 15,
    number: "15",
    name: 'Life on Land',
    color: '#56C02B',
    icon: Leaf,
    role: "Direct Impact",
    summary: "Conserving fragile alpine national parks, forested habitats, and conservation areas.",
    contribution: "Partnering with trekking routes, local conservation bodies, and parks to remove accumulated waste, protecting native flora and wildlife habitats."
  },
  {
    id: 16,
    number: "16",
    name: 'Peace, Justice and Strong Institutions',
    color: '#00689D',
    icon: Shield,
    role: "Indirect Impact",
    summary: "Transparent governance, open data reporting, and fair stakeholder engagement.",
    contribution: "Operating an open Institutional Data Room with Life Cycle Assessments (LCA) and transparent traceabilities that set honest governance benchmarks."
  },
  {
    id: 17,
    number: "17",
    name: 'Partnerships for the Goals',
    color: '#19486A',
    icon: Handshake,
    role: "Direct Impact",
    summary: "Collaborating with local governments, academic institutions, INGOs, and commercial enterprises.",
    contribution: "Uniting corporate CSR/EPR departments, community youth leaders, and global sustainability networks to scale measurable regenerative impact."
  }
];

const SDGPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black pt-32 pb-20 px-6 md:px-12 lg:px-20 text-center relative overflow-hidden">
        {/* Subtle decorative line-art watermark */}
        <img 
          src="/art-flower.png" 
          alt="" 
          aria-hidden="true"
          className="absolute -bottom-10 -right-10 w-[450px] lg:w-[600px] opacity-[0.08] pointer-events-none select-none invert"
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 border border-white/20 text-white font-body text-xs md:text-sm mb-6 uppercase tracking-widest rounded-full"
          >
            <Globe2 className="w-4 h-4 text-red" />
            <span>United Nations Agenda 2030</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-7xl tracking-wider text-white uppercase leading-tight"
          >
            Our Commitment To UN Sustainable Development Goals
          </motion.h1>
          
          <div className="w-16 h-0.5 bg-red mx-auto mt-6 mb-8" />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 font-body text-base md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Paramendo Nepal activities are focused on adding value to the Triple Bottom Line of <strong>'People, Planet and Prosperity'</strong>, thereby creating an entity that can truly achieve a Net Positive Impact.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/60 font-body text-sm md:text-base leading-relaxed max-w-2xl mx-auto mt-4"
          >
            With the United Nation's Sustainable Development Goals serving as our guiding light, all our activities have a positive environmental and social impact on individuals and communities across Nepal.
          </motion.p>
        </div>
      </section>

      {/* Triple Bottom Line Pillar Cards */}
      <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-b border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-black/10 rounded-xl p-8 hover:border-black/40 hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-red mb-6">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-2xl tracking-wider uppercase text-black mb-3">People</h3>
            <p className="text-black/60 font-body text-sm leading-relaxed">
              Empowering remote Himalayan mountain collectors, waste entrepreneurs, and women-led community groups through verified fair income, training, and workplace dignity.
            </p>
          </div>

          <div className="bg-white border border-black/10 rounded-xl p-8 hover:border-black/40 hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-green mb-6">
              <Leaf className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-2xl tracking-wider uppercase text-black mb-3">Planet</h3>
            <p className="text-black/60 font-body text-sm leading-relaxed">
              Diverting hard-to-recycle plastics from open-air burning pits, alpine rivers, and mountain valleys, drastically reducing carbon emissions and conserving biodiversity.
            </p>
          </div>

          <div className="bg-white border border-black/10 rounded-xl p-8 hover:border-black/40 hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-blue mb-6">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-2xl tracking-wider uppercase text-black mb-3">Prosperity</h3>
            <p className="text-black/60 font-body text-sm leading-relaxed">
              Engineering durable, marketable recycled construction boards and modular architectural products that turn discarded plastics into lasting regional economic value.
            </p>
          </div>
        </div>
      </section>

      {/* 17 Goals Detailed Directory */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-body text-xs uppercase tracking-widest text-black/50 mb-2 block">
            Comprehensive Mapping
          </span>
          <h2 className="font-heading text-4xl md:text-5xl tracking-wider uppercase text-black">
            How Paramendo Nepal Contributes
          </h2>
          <div className="w-12 h-0.5 bg-red mx-auto mt-4 mb-6" />
          <p className="text-black/60 font-body text-base leading-relaxed">
            Paramendo Nepal contributes directly and indirectly to 16 of the 17 United Nations Sustainable Development Goals across our sourcing, manufacturing, and community operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sdgGoalsData.map((goal) => {
            const Icon = goal.icon;
            return (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-black/10 rounded-xl p-6 hover:border-black/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                        style={{ backgroundColor: goal.color }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-heading text-xs tracking-widest uppercase text-black/40 block">
                          Goal {goal.number}
                        </span>
                        <h3 className="font-heading text-lg tracking-wider uppercase text-black leading-snug">
                          {goal.name}
                        </h3>
                      </div>
                    </div>
                    <span className={`text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full font-bold font-body ${
                      goal.role === "Direct Impact" 
                        ? "bg-green/10 text-green border border-green/20" 
                        : "bg-black/5 text-black/60 border border-black/10"
                    }`}>
                      {goal.role}
                    </span>
                  </div>

                  <p className="text-black/80 font-body text-sm mb-3 font-medium leading-relaxed">
                    {goal.summary}
                  </p>

                  <p className="text-black/60 font-body text-xs leading-relaxed">
                    {goal.contribution}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-xs text-black/40 font-body">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green" />
                    Verified Alignment
                  </span>
                  <span className="font-mono text-[11px]">SDG {goal.id}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-20 text-center relative overflow-hidden text-white">
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <h2 className="font-heading text-3xl md:text-5xl tracking-wider uppercase text-white">
            Partner With Us For Sustainable Impact
          </h2>
          <div className="w-12 h-0.5 bg-red mx-auto" />
          <p className="font-body text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Whether your organization is seeking transparent EPR compliance, green building materials, or community impact sponsorship, join us in creating a zero-waste Nepal.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-red text-white px-8 py-3.5 rounded-full hover:bg-white hover:text-black transition-colors duration-300 font-body font-bold text-sm tracking-wide inline-flex items-center group"
            >
              Get In Touch
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/transparency" 
              className="border border-white/40 text-white px-8 py-3.5 rounded-full hover:bg-white hover:text-black transition-colors duration-300 font-body text-sm tracking-wide inline-flex items-center"
            >
              View Data Room
            </Link>
            <Link 
              to="/" 
              className="text-white/60 hover:text-white font-body text-sm inline-flex items-center gap-1 sm:ml-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SDGPage;
