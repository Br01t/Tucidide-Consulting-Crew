import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const Assessment = () => {
  return (
    <section className="relative py-20 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Decorative vertical lines - hidden on mobile for clarity */}
      <div className="hidden md:block absolute top-0 left-1/4 w-[1px] h-full bg-white/5" />
      <div className="hidden md:block absolute top-0 right-1/4 w-[1px] h-full bg-white/5" />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="text-azure text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">Consulenza // Diagnosis</span>
            <h2 className="text-3xl md:text-6xl font-serif font-black uppercase tracking-tight mb-8">
              Non un Preventivo,<br/><span className="italic opacity-40">Ma un'Esegesi</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0">
              Evitiamo la superficialità dei preventivi automatici. Offriamo un <span className="text-white font-medium">Digital Assessment gratuito</span> per analizzare il DNA del tuo progetto, identificare le frizioni logiche e mappare una strategia monumentale.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-azure justify-center lg:justify-start">
                  <Microscope className="w-5 h-5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Analisi Profonda</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed text-center lg:text-left">Analizziamo l'attuale architettura per estrapolare punti di forza e debolezze critiche.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-violet justify-center lg:justify-start">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Visione Strategica</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed text-center lg:text-left">Non ti diciamo "cosa installare", ma come costruire un sistema che duri nel tempo.</p>
              </div>
            </div>
          </motion.div>
          
          {/* Graphical Comparison */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass border border-white/10 rounded-3xl p-8 md:p-12 relative z-10">
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-10 h-10 md:w-12 md:h-12 bg-violet rounded-full flex items-center justify-center text-white animate-pulse">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
              </div>

              <div className="space-y-10">
                <div className="opacity-30">
                  <span className="text-[10px] uppercase tracking-widest mb-4 block">Metodo Standard</span>
                  <div className="h-2 w-full bg-white/10 rounded-full mb-2" />
                  <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                  <p className="text-[9px] mt-4 uppercase tracking-[0.2em]">Preventivo Rapido / Software Generico</p>
                </div>

                <div className="h-[1px] w-full bg-white/5" />

                <div>
                  <span className="text-azure text-[10px] uppercase tracking-widest mb-4 block italic font-bold">Metodo Tucidide</span>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-azure shadow-[0_0_10px_rgba(45,153,255,0.5)]" />
                      <div className="h-2 flex-1 bg-azure/20 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-azure"
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ duration: 1.5, delay: 1 }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-violet shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                      <div className="h-2 flex-1 bg-violet/20 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-violet"
                          initial={{ width: 0 }}
                          whileInView={{ width: '85%' }}
                          transition={{ duration: 1.5, delay: 1.2 }}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-[9px] mt-6 text-white uppercase tracking-[0.2em] font-bold">Consulenza Architetturale / Ottimizzazione Logica</p>
                </div>
              </div>
            </div>
            
            {/* Background architectural element */}
            <div className="absolute inset-0 translate-x-12 translate-y-12 border-2 border-white/5 rounded-3xl -z-0" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Assessment;
