import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Assessment from '../components/Assessment';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-azure text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Contatti // Apertura Canali</span>
            <h1 className="text-5xl md:text-8xl font-serif font-black uppercase tracking-tight mb-8">
              Inizia la<br/><span className="text-gradient-azure">Campagna</span>
            </h1>
            <p className="text-lg text-slate-400 font-light leading-relaxed mb-12 max-w-md">
              Il nostro team è pronto ad analizzare la tua struttura e proporre una strategia di Archeologia Digitale su misura.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 glass border border-azure/20 flex items-center justify-center rounded-xl text-azure">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">Email</span>
                  <p className="text-sm font-medium">strategia@tucidide.crew</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 glass border border-violet/20 flex items-center justify-center rounded-xl text-violet">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">Quartier Generale</span>
                  <p className="text-sm font-medium">Cyberia Square 79, Atene / Digitale</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 glass border border-copper/20 flex items-center justify-center rounded-xl text-copper">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">Comunicazioni</span>
                  <p className="text-sm font-medium">+30 210 0110111</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="glass border border-white/10 p-12 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Nome</label>
                  <input 
                    type="text" 
                    placeholder="Esempio: Solone"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-azure outline-hidden transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email</label>
                  <input 
                    type="email" 
                    placeholder="solone@legal.gr"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-azure outline-hidden transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Oggetto della Consultazione</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-azure outline-hidden transition-colors text-slate-400">
                  <option>Selezione Protocollo...</option>
                  <option>Cronache Cibernetiche</option>
                  <option>Oracolo Logistico</option>
                  <option>Monoliti Web</option>
                  <option>Altro / Specifica</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Messaggio</label>
                <textarea 
                  rows={4}
                  placeholder="Descrivi la tua visione..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-azure outline-hidden transition-colors resize-none"
                ></textarea>
              </div>

              <button className="w-full cta-gradient text-obsidian font-bold uppercase tracking-[0.2em] py-4 rounded-lg text-xs flex items-center justify-center gap-3 active:scale-[0.98] transition-all">
                Invia Messaggio <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-32 pt-24 border-t border-white/5">
          <Assessment />
        </div>
      </div>
    </div>
  );
};

export default Contact;
