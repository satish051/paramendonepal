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
    <section className="bg-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-heading tracking-wider uppercase text-black text-center">
          {content.title}
        </h2>
        <div className="w-12 h-0.5 bg-red mt-4 mb-6 mx-auto" />
        <p className="text-black/60 font-body text-sm max-w-2xl mx-auto mt-6">
          {content.subtitle}
        </p>
      </motion.div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden flex">
        {/* Left/Right Fade Gradients for smooth entering/exiting */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Sliding Track */}
        <div className="flex animate-marquee w-max py-4">
          {marqueePartners.map((partner, index) => (
            <div 
              key={index}
              className="flex-shrink-0 mx-8 group"
            >
              <div className="flex items-center justify-center w-48 h-24 cursor-pointer">
                <img 
                  src={partner.url} 
                  alt={partner.name} 
                  className="max-w-full max-h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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
