import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef<any>(null);

  const [heroContent, setHeroContent] = useState({
    title: 'Turning Himalayan Plastic Waste into Sustainable Value',
    subtitle: 'Paramendo Nepal builds community-centric circular economies by upcycling high-density plastics and multi-layered waste into premium recycled boards, structural materials, and eco-friendly products.'
  });

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        if (data && data.hero) setHeroContent(data.hero);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    // Load YouTube API script if not already loaded
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        document.head.appendChild(tag);
      }
    }

    // Define the global callback
    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player('youtube-player', {
        videoId: 'yEVHcUHbKdU',
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: 'yEVHcUHbKdU',
          controls: 0,
          showinfo: 0,
          rel: 0,
          disablekb: 1,
          modestbranding: 1
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
          }
        }
      });
    };

    // If the API is already loaded but component re-mounted
    if ((window as any).YT && (window as any).YT.Player && !playerRef.current) {
      (window as any).onYouTubeIframeAPIReady();
    }

    return () => {
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  const toggleMute = () => {
    if (playerRef.current) {
      if (isMuted) {
        if (typeof playerRef.current.unMute === 'function') playerRef.current.unMute();
      } else {
        if (typeof playerRef.current.mute === 'function') playerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden bg-transparent">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black/60">
        <div className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 opacity-100">
          <div id="youtube-player" className="w-full h-full border-0 pointer-events-none"></div>
        </div>
        {/* Simple dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Sound Toggle Button */}
      <button 
        onClick={toggleMute}
        className="absolute bottom-8 right-4 sm:right-8 z-20 p-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 pointer-events-auto cursor-pointer"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
      </button>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 text-left"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-wider text-white uppercase mb-6"
        >
          {heroContent.title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-body text-lg md:text-xl text-white/80 max-w-2xl"
        >
          {heroContent.subtitle}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row justify-start items-center gap-4"
        >
          <Link
            to="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-red text-white px-10 py-4 rounded-full hover:bg-white hover:text-black transition-colors duration-300 font-body font-bold text-sm tracking-widest uppercase"
          >
            Explore Recycled Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-black transition-colors duration-300 font-body font-bold text-sm tracking-widest uppercase"
          >
            Partner With Us for Impact
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <span className="text-white/80 font-body text-xs mb-2 tracking-widest uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border border-white/50 rounded-full flex justify-center pt-2"
        >
          <motion.div 
            animate={{ height: ["20%", "40%", "20%"], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
