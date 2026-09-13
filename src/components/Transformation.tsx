import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeftRight } from 'lucide-react';

const Transformation = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [content, setContent] = useState({
    title: "The Transformation",
    subtitle: "Drag the slider to see how shredded plastic waste from Dhading becomes high-grade construction material."
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        if (data && data.transformation) setContent(data.transformation);
      })
      .catch(console.error);
  }, []);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleInteractionEnd = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleInteractionEnd);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleInteractionEnd);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleInteractionEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleInteractionEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleInteractionEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleInteractionEnd);
    };
  }, [isDragging]);

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl tracking-wider text-white uppercase"
          >
            {content.title}
          </motion.h2>
          <div className="w-12 h-0.5 bg-red mt-4 mb-8" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 font-body text-lg"
          >
            {content.subtitle}
          </motion.p>
        </div>

        {/* Slider Container */}
        <motion.div 
          ref={containerRef}
          style={{ y: yParallax }}
          className="relative w-full aspect-video md:aspect-[21/9] rounded-lg overflow-hidden border border-white/20 select-none group"
        >
          
          {/* AFTER Image (Background) */}
          <div 
            className="absolute inset-0 flex items-center justify-end px-12 md:px-24 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://images.pexels.com/photos/1250283/pexels-photo-1250283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }}
          >
            <div className="bg-white/90 backdrop-blur px-4 py-2 rounded border border-black/10">
              <span className="font-heading tracking-widest uppercase text-black text-sm">AFTER: Durable PP Tile</span>
            </div>
          </div>

          {/* BEFORE Image (Clipped Overlay) */}
          <div 
            className="absolute inset-0 flex items-center justify-start px-12 md:px-24 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("https://images.pexels.com/photos/2768961/pexels-photo-2768961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` 
            }}
          >
            <div className="bg-black/80 backdrop-blur px-4 py-2 rounded border border-white/20">
              <span className="font-heading tracking-widest uppercase text-white text-sm">BEFORE: Plastic Waste</span>
            </div>
          </div>

          {/* Slider Line & Handle */}
          <div 
            className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize flex items-center justify-center z-10"
            style={{ left: `calc(${sliderPosition}% - 1px)` }}
          >
            <div 
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow border border-black/10 text-black cursor-ew-resize hover:bg-gray-100 transition-colors"
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
            >
              <ArrowLeftRight className="w-4 h-4" />
            </div>
          </div>

          {/* Invisible Range Input for Interaction */}
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Transformation;
