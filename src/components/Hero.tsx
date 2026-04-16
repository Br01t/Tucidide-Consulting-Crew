import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="agora" className="relative h-screen min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden pt-20 md:pt-24">
      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
        
        {/* Hero Content */}
        <div className="relative z-10 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-black leading-tight lg:leading-none mb-6 tracking-wider uppercase text-white">
              Tucidide<br/>Consulting<br/>Crew
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base tracking-[0.3em] md:tracking-[0.4em] font-light text-azure mb-12 uppercase">
              Non deviamo. Computiamo. Creiamo.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 w-full sm:w-auto">
              <Link 
                to="/contatti"
                className="cta-gradient text-obsidian font-bold uppercase tracking-[0.2em] px-8 md:px-10 py-4 md:py-5 rounded-sm text-[10px] md:text-xs hover:scale-105 transition-transform cursor-pointer text-center"
              >
                Inizia la Collaborazione
              </Link>
              <Link 
                to="/vision"
                className="border border-white/20 text-white font-bold uppercase tracking-[0.2em] px-8 md:px-10 py-4 md:py-5 rounded-sm text-[10px] md:text-xs hover:bg-white/10 transition-colors cursor-pointer text-center"
              >
                Scopri la Vision
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Abstract Sculpture Element from Design */}
        <div className="relative hidden lg:block h-[500px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-navy/40 border border-azure/30 clip-path-[polygon(10%_0,100%_0,90%_100%,0_100%,30%_50%)]"
          >
             {/* Detail Layer */}
             <div className="absolute inset-0 border border-violet opacity-20 translate-x-3 translate-y-3" />
             
             {/* Particle Effects */}
             <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-azure h-[1px]"
                    animate={{ 
                      width: [0, 150, 0],
                      x: [Math.random() * 300, Math.random() * 500],
                      opacity: [0, 0.4, 0]
                    }}
                    transition={{ 
                      duration: 4 + Math.random() * 4, 
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                    style={{
                      top: `${Math.random() * 100}%`,
                      boxShadow: "0 0 12px #00D1FF",
                    }}
                  />
                ))}
             </div>
          </motion.div>
          
          {/* Subtle Statue Fragment Background */}
          <img 
            src="https://picsum.photos/seed/statue-ancient-greek/800/1000"
            alt="Thucydides"
            className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale mix-blend-screen pointer-events-none"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      
      {/* Scroll Label */}
      <div className="absolute bottom-10 left-12 text-[9px] opacity-30 tracking-[0.2em] font-medium uppercase">
         Modernismo Assiomatico // COORD_AGORA_IT.10
      </div>
    </section>
  );
};

export default Hero;
