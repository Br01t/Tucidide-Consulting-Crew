import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AssessmentBanner = () => {
  return (
    <section className="px-12 py-12">
      <div className="container mx-auto">
        <Link 
          to="/contatti" 
          className="group relative block w-full glass border border-azure/20 rounded-2xl overflow-hidden p-8 hover:border-azure transition-all duration-500"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-azure/10 rounded-full flex items-center justify-center text-azure group-hover:scale-110 transition-transform duration-500">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="text-white font-serif uppercase tracking-widest text-lg mb-1">Rituale di Consulenza Gratuita</h3>
                <p className="text-slate-500 text-xs tracking-wider uppercase">Analisi architetturale e consulenza strategica senza impegno.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-azure text-[10px] font-bold uppercase tracking-[0.3em] group-hover:gap-6 transition-all">
              Inizia l'Esegesi
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Graphical decorative accent */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-azure/5 to-transparent pointer-events-none" />
        </Link>
      </div>
    </section>
  );
};

export default AssessmentBanner;
