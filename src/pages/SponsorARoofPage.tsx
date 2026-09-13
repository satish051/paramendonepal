import { motion } from 'framer-motion';
import { Home, School, Building2, CheckCircle2 } from 'lucide-react';

const SponsorARoofPage = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-black pt-32 pb-16 px-6 md:px-12 lg:px-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 border border-white/20 text-white font-body text-sm mb-6 uppercase tracking-widest"
        >
          Monsoon Relief Campaign
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl tracking-wider text-white uppercase"
        >
          Sponsor a Rural Roof
        </motion.h1>
        <div className="w-12 h-0.5 bg-red mx-auto mt-4 mb-6" />
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/70 font-body text-lg max-w-2xl mx-auto"
        >
          In rural Dhading, the monsoon season brings severe roof leaks to homes and schools. Your sponsorship directly provides families with our waterproof, upcycled LDPE roofing sheets.
        </motion.p>
      </section>

      {/* Progress Bar Section */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl tracking-wider text-black uppercase mb-4">Monsoon Relief Progress</h2>
          <div className="w-12 h-0.5 bg-red mb-6" />
          <p className="text-black/60 font-body text-sm mb-8">Help us reach our goal of insulating 500 roofs before the heavy rains begin.</p>
          
          <div className="flex justify-between items-end mb-3">
            <div>
              <span className="font-heading text-4xl tracking-wider text-black">342</span>
              <span className="text-black/60 font-body text-sm ml-2">Roofs Insulated</span>
            </div>
            <div className="font-heading text-xl tracking-wider text-black">Goal: 500</div>
          </div>
          
          <div className="w-full h-3 bg-black/10 rounded-full overflow-hidden mb-3">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '68%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-red rounded-full"
            ></motion.div>
          </div>
          <div className="text-right font-body text-sm font-bold text-red">
            68% Funded — Thank you!
          </div>
        </div>
      </section>

      {/* Pricing/Impact Section */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl tracking-wider text-black uppercase">Choose Your Impact</h2>
          <div className="w-12 h-0.5 bg-red mx-auto mt-4 mb-6" />
          <p className="text-black/60 font-body text-sm">100% of your sponsorship goes directly towards materials and local installation.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Option 1 */}
          <div className="bg-white border border-black/10 rounded-lg p-8 hover:border-black/40 hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="mb-6 text-red">
              <Home className="w-8 h-8" />
            </div>
            <div className="mb-6">
              <span className="font-heading text-4xl tracking-wider text-black">$35</span>
              <span className="text-black/60 font-body text-sm ml-1">USD</span>
            </div>
            <h3 className="font-heading text-2xl tracking-wider text-black mb-3 uppercase">Sponsor a Family Home</h3>
            <p className="text-black/60 font-body text-sm mb-8 flex-grow">Provide enough LDPE roofing sheets to waterproof a standard rural home for the monsoon season.</p>
            <button className="bg-transparent border border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300 font-body text-sm tracking-wide w-full">
              Sponsor Now
            </button>
          </div>

          {/* Option 2 (Popular) */}
          <div className="bg-white border-2 border-red rounded-lg p-8 hover:border-black/40 hover:-translate-y-1 transition-all duration-300 flex flex-col relative md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red text-white px-4 py-1 text-sm font-body font-bold uppercase tracking-widest">
              Most Popular
            </div>
            <div className="mb-6 text-red">
              <School className="w-8 h-8" />
            </div>
            <div className="mb-6">
              <span className="font-heading text-4xl tracking-wider text-black">$75</span>
              <span className="text-black/60 font-body text-sm ml-1">USD</span>
            </div>
            <h3 className="font-heading text-2xl tracking-wider text-black mb-3 uppercase">Sponsor a Classroom</h3>
            <p className="text-black/60 font-body text-sm mb-8 flex-grow">Insulate and waterproof a village classroom, ensuring students can learn comfortably during heavy rains.</p>
            <button className="bg-red text-white px-8 py-3 rounded-full hover:bg-black transition-colors duration-300 font-body font-bold text-sm tracking-wide w-full">
              Sponsor Now
            </button>
          </div>

          {/* Option 3 */}
          <div className="bg-white border border-black/10 rounded-lg p-8 hover:border-black/40 hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="mb-6 text-red">
              <Building2 className="w-8 h-8" />
            </div>
            <div className="mb-6">
              <span className="font-heading text-4xl tracking-wider text-black">$150</span>
              <span className="text-black/60 font-body text-sm ml-1">USD</span>
            </div>
            <h3 className="font-heading text-2xl tracking-wider text-black mb-3 uppercase">Sponsor a Village Shelter</h3>
            <p className="text-black/60 font-body text-sm mb-8 flex-grow">Cover a large community gathering space or emergency shelter used by multiple families.</p>
            <button className="bg-transparent border border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300 font-body text-sm tracking-wide w-full">
              Sponsor Now
            </button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl tracking-wider text-center text-black uppercase mb-16">What happens after you sponsor?</h2>
        
        <div className="flex flex-col space-y-12 max-w-2xl mx-auto">
          <div className="border-l-2 border-red pl-6 relative">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-white border-2 border-red flex items-center justify-center font-heading text-xs text-black">1</div>
            <h3 className="font-heading text-2xl tracking-wider text-black mb-2 uppercase">Materials Prepared</h3>
            <p className="text-black/60 font-body text-sm">Our Dhading CRC manufactures the required LDPE sheets from locally upcycled plastic waste.</p>
          </div>
          
          <div className="border-l-2 border-red pl-6 relative">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-white border-2 border-red flex items-center justify-center font-heading text-xs text-black">2</div>
            <h3 className="font-heading text-2xl tracking-wider text-black mb-2 uppercase">Local Installation</h3>
            <p className="text-black/60 font-body text-sm">Our trained community technicians install the waterproof sheets on the designated home or school.</p>
          </div>
          
          <div className="border-l-2 border-red pl-6 relative">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-red flex items-center justify-center text-white">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h3 className="font-heading text-2xl tracking-wider text-black mb-2 uppercase">Photo Update</h3>
            <p className="text-black/60 font-body text-sm">You receive a real-time photo of the installed roof, optionally tagged with your name or dedication.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SponsorARoofPage;
