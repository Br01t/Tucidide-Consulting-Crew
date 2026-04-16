import React from 'react';
import { motion } from 'motion/react';

const GreekBinaryText = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-elegant opacity-20" />
      
      {/* Fixed Greek Code Texture */}
      <div className="absolute top-10 left-10 font-serif text-[10px] opacity-15 text-azure leading-relaxed pointer-events-none select-none z-1">
        ΔΙ ΨΗΦΙΑΚΗ ΑΡΧΑΙΟΛΟΓΙΑ<br/>
        01001111 01010010 01000001<br/>
        ΚΛΑΣΣΙΚΗ ΣΟΦΙΑ<br/>
        10110010 00011101 11001010<br/>
        ΜΕΛΛΟΝΤΙΚΗ ΤΕΧΝΗ
      </div>

      {/* Moving Text Streams (Modified to match more subtle aesthetic) */}
      <div className="absolute inset-0 flex flex-wrap gap-24 p-12 text-[8px] font-mono tracking-[0.8em] leading-relaxed opacity-5">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: [0.1, 0.4, 0.1], 
              y: [0, -50] 
            }}
            transition={{ 
              duration: 30 + Math.random() * 20, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="w-full flex justify-around"
          >
            <span>ΠΡΩΤΟΚΟΛΛΟ ΘΟΥΚΥΔΙΔΗΣ</span>
            <span>SYSTEM_ORIGIN_VERIFIED_79</span>
          </motion.div>
        ))}
      </div>
      
      {/* Dark Border from Design */}
      <div className="fixed inset-0 border-[8px] border-white/5 pointer-events-none z-50" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_0%,rgba(5,6,8,0.7)_80%,#050608_100%]" />
    </div>
  );
};

export default GreekBinaryText;
