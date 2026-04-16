import React from 'react';
import { motion } from 'motion/react';
import { Code, Zap, Globe, Layers } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Sviluppo Software",
    description: "Creazione di ecosistemi digitali robusti e scalabili, ottimizzati per la performance pura."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Prestazioni & SEO",
    description: "Ottimizzazione estrema per garantire velocità fulminee e un posizionamento d'élite."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "E-Commerce di Lusso",
    description: "Piattaforme di vendita d'alta gamma che fondono estetica superiore e conversioni elevate."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Design Assiomatico",
    description: "Layout basati sulla sezione aurea e sui principi della proporzione classica greca."
  }
];

const Services = () => {
  return (
    <section className="relative py-32 px-12 bg-obsidian/50 border-y border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-violet text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Servizi // Hai Techne</span>
            <h2 className="text-4xl md:text-6xl font-serif font-black uppercase leading-tight">
              Ingeneria Estetica<br/>Per il Domani
            </h2>
          </div>
          <p className="text-slate-400 text-sm tracking-[0.1em] leading-relaxed max-w-sm border-l border-azure/30 pl-8">
            Trasformiamo la complessità in chiarezza assiomatica, costruendo strumenti che resistono al tempo come monumenti di codice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="w-14 h-14 bg-white/[0.03] border border-white/10 rounded-xl flex items-center justify-center text-azure mb-8 group-hover:border-azure transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif uppercase tracking-wider text-white mb-4">
                {service.title}
              </h3>
              <p className="text-slate-500 text-xs leading-loose tracking-wide">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
