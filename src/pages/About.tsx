import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <div className="pt-24 md:pt-32 pb-24 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="text-azure text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Vision // Chi Siamo</span>
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-serif font-black uppercase tracking-tight mb-8 md:mb-12">
              Saggezza Antica,<br/>Logica <span className="italic opacity-30">Digitale</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-center md:text-left"
            >
              <p className="text-lg md:text-xl text-ink font-light leading-relaxed mb-8">
                Tucidide Consulting Crew è un collettivo di creativi e tecnologi che crede che il futuro non debba essere inventato, ma "dissotterrato".
              </p>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
                Ci ispiriamo alla precisione millimetrica della storiografia classica e alla proporzione estetica del mondo antico per costruire sistemi digitali che non siano solo funzionali, ma monumentali. 
                Il nostro approccio, denominato "Archeologia Digitale", estrae logicamente i principi della strategia e dell'arte antica per applicarli alle sfide computazionali moderne.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-azure text-xs font-bold tracking-[0.3em] uppercase mb-4">I Nostri Valori</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span className="text-violet font-serif text-lg">I.</span>
                    <p className="text-sm text-slate-300"><span className="font-bold text-white uppercase tracking-wider block mb-1">Incorruttibilità</span> Design e codice che resistono alla prova del tempo, come il marmo.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-violet font-serif text-lg">II.</span>
                    <p className="text-sm text-slate-300"><span className="font-bold text-white uppercase tracking-wider block mb-1">Rigor Logico</span> Strategie validate dalla storia e perfezionate dall'algoritmo.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-violet font-serif text-lg">III.</span>
                    <p className="text-sm text-slate-300"><span className="font-bold text-white uppercase tracking-wider block mb-1">Estetica Assiomatica</span> L'armonia visiva come unico standard accettabile.</p>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Roadmap Section */}
        <div className="mt-40 mb-32">
          <div className="text-center mb-24">
            <span className="text-azure text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Evoluzione // Chrónos</span>
            <h2 className="text-4xl md:text-6xl font-serif font-black uppercase tracking-tight">Milestones</h2>
          </div>

          <div className="relative max-w-4xl mx-auto px-4">
            {/* Timeline center line */}
            <div className="absolute left-[21px] md:left-1/2 top-0 w-[1px] h-full bg-white/10 -translate-x-1/2" />

            <div className="space-y-24">
              {[
                { year: '2021', title: "L'Idea", desc: 'Nasce il concetto di "Archeologia Digitale": studiare la proporzione classica per costruire interfacce immutabili.' },
                { year: '2022', title: 'Fondazione', desc: 'Apertura del collettivo a Milano. Sviluppo del primo framework basato sulla logica assiomatica.' },
                { year: '2023', title: 'Espansione', desc: 'Primi grandi progetti internazionali. Espansione nei settori Sport-Tech e High-End Retail.' },
                { year: '2024', title: 'Consolidamento', desc: 'Lancio della divisione Assessment Strategico e consolidamento della visione europea.' },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className={`flex flex-col md:flex-row items-center w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 w-full md:w-1/2" />
                  <div className="z-10 bg-black border border-azure/40 w-11 h-11 rounded-full flex items-center justify-center text-[10px] font-bold text-azure font-mono shrink-0">
                    {item.year.slice(-2)}
                  </div>
                  <div className={`flex-1 w-full md:w-1/2 p-4 md:p-8 ${idx % 2 === 0 ? 'text-left md:text-right' : 'text-left'}`}>
                    <span className="text-violet font-serif italic text-sm mb-2 block">{item.year}</span>
                    <h4 className="text-white font-serif uppercase tracking-widest text-xl mb-4">{item.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed max-w-sm ml-auto mr-auto md:ml-0 md:mr-0">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 md:mt-32 p-8 md:p-16 glass border border-azure/20 text-center rounded-3xl"
        >
          <h2 className="text-2xl md:text-5xl font-serif italic mb-6 md:mb-8 text-white">
            "Il segreto della felicità è la libertà, ed il segreto della libertà è il coraggio."
          </h2>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-azure">- Pericle (via Tucidide)</span>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
