import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const OurPartners = () => {
  const [content, setContent] = useState({
    title: "Our Awesome Partners",
    subtitle: "Teaming up with incredible organizations to make Nepal cleaner and greener!",
    logos: [
      { id: 1, name: "Prarambha", url: "https://paramendonepal.com/wp-content/uploads/2024/07/images.jpeg" },
      { id: 2, name: "Partner 2", url: "https://paramendonepal.com/wp-content/uploads/2024/07/2-1.png" },
      { id: 3, name: "Partner 3", url: "https://paramendonepal.com/wp-content/uploads/2024/07/download-2.png" },
      { id: 4, name: "Partner 4", url: "https://paramendonepal.com/wp-content/uploads/2024/07/images-1.png" },
      { id: 5, name: "Partner 5", url: "https://paramendonepal.com/wp-content/uploads/2024/07/images-2.png" }
    ]
  });

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        if (data && data.partners) {
          setContent(prev => ({
            ...prev,
            ...data.partners
          }));
        }
      })
      .catch(console.error);
  }, []);

  // Duplicate partners array to create a seamless infinite loop that is wide enough for any screen
  const marqueePartners = [...content.logos, ...content.logos, ...content.logos, ...content.logos];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-primary-50 overflow-hidden relative transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-600 mb-4 inline-block relative">
          {content.title}
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-secondary-400 to-primary-500 rounded-full"></div>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-6">
          {content.subtitle}
        </p>
      </motion.div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden flex">
        {/* Left/Right Fade Gradients for smooth entering/exiting */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-primary-50 to-transparent z-10 pointer-events-none"></div>

        {/* Sliding Track */}
        <div className="flex animate-marquee w-max py-4">
          {marqueePartners.map((partner, index) => (
            <div 
              key={index}
              className="flex-shrink-0 mx-4 group"
            >
              <div className="flex items-center justify-center w-64 h-32 p-4 bg-white rounded-xl shadow-sm border-2 border-transparent hover:border-secondary-400 hover:shadow-lg hover:-translate-y-1 hover:rotate-1 transition-all duration-300 cursor-pointer">
                <img 
                  src={partner.url} 
                  alt={partner.name} 
                  className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
