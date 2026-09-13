import { motion } from 'framer-motion';
import { MapPin, Building2, GraduationCap, Users } from 'lucide-react';

const JoinTheLoopPage = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-16 px-6 md:px-12 lg:px-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 rounded-full border border-black/10 text-black font-body text-sm mb-6 uppercase tracking-wider"
        >
          Join The Loop
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl tracking-wider text-black"
        >
          COMMUNITY COLLECTION MAP
        </motion.h1>
        <div className="w-12 h-0.5 bg-red mt-4 mb-6 mx-auto" />
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-black/60 font-body text-lg max-w-2xl mx-auto"
        >
          Find your nearest collection point in Dhading or register your school/business to host a plastic drive.
        </motion.p>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        
        {/* Left Column: Active Points List */}
        <div className="lg:col-span-1 space-y-6">
          <h2 className="text-2xl font-heading tracking-wider uppercase text-black mb-6 flex items-center">
            <MapPin className="w-6 h-6 mr-3 text-black" />
            Active Points
          </h2>

          {/* Point 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-black/10 rounded-lg p-6 hover:border-black/40 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white border border-black/10 text-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-xl tracking-wider text-black mb-1">REE CENTRAL CRC</h3>
                <p className="text-black/60 font-body text-sm mb-3">Main Processing Facility</p>
                <div className="inline-block px-3 py-1 border border-black/10 text-black font-body text-xs uppercase tracking-wider">
                  Accepting All Plastics
                </div>
              </div>
            </div>
          </motion.div>

          {/* Point 2 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-black/10 rounded-lg p-6 hover:border-black/40 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white border border-black/10 text-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-xl tracking-wider text-black mb-1">SHREE SECONDARY SCHOOL</h3>
                <p className="text-black/60 font-body text-sm mb-3">Partner School Drop-off</p>
                <div className="inline-block px-3 py-1 border border-black/10 text-black font-body text-xs uppercase tracking-wider">
                  PET & PP Only
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-lg border border-black/10 mt-8 text-center"
          >
            <div className="w-14 h-14 mx-auto bg-white border border-black/10 text-black rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl tracking-wider text-black mb-2 uppercase">Want to collect?</h3>
            <p className="text-black/60 font-body text-sm mb-6">
              Register your community group to become an official partner.
            </p>
            <button className="w-full bg-red text-white px-8 py-3 rounded-full hover:bg-black transition-colors duration-300 font-body font-bold text-sm tracking-wide">
              Host a Plastic Drive
            </button>
          </motion.div>
        </div>

        {/* Right Column: Visual Map Area */}
        <div className="lg:col-span-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-full min-h-[500px] border border-black/10 rounded-lg overflow-hidden relative bg-white"
          >
            {/* Map Placeholder Image */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Dhading Map Area" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
            />
            
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white border border-black/10 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-heading tracking-wider text-xl text-black uppercase">Dhading Region Map</h4>
                  <p className="font-body text-sm text-black/60">Interactive map loading...</p>
                </div>
                <div className="flex space-x-2">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red"></span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </section>
    </div>
  );
};

export default JoinTheLoopPage;
