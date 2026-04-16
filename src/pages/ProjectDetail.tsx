import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Cpu } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="pt-32 px-12 text-center">
        <h1 className="text-4xl font-serif">Progetto non trovato</h1>
        <Link to="/portfolio" className="text-azure underline mt-4 inline-block">Torna al Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-12">
      <div className="container mx-auto">
        <Link 
          to="/portfolio" 
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Torna al Portfolio
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 border border-violet flex items-center justify-center text-xl font-bold text-violet">
                {project.iconText}
              </div>
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-azure">{project.category}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-black uppercase mb-8 leading-[1.1]">
              {project.title}
            </h1>
            
            <p className="text-xl text-ink font-light leading-relaxed mb-12 border-l-2 border-copper/30 pl-8">
              {project.fullDescription}
            </p>

            <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-4 bg-azure hover:bg-violet text-white font-bold py-6 px-10 rounded-full transition-all duration-300 shadow-lg shadow-azure/20 mb-12"
            >
              <span>VISITA IL SITO</span>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <ArrowLeft className="w-4 h-4 rotate-135" />
              </div>
            </motion.a>

            <div className="space-y-12">
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle2 className="text-azure w-5 h-5" />
                  <h2 className="text-lg font-serif uppercase tracking-widest text-white">Casi d'Uso</h2>
                </div>
                <ul className="space-y-4">
                  {project.useCases.map((uc, i) => (
                    <li key={i} className="text-sm text-slate-400 flex items-start gap-3">
                      <span className="text-azure font-mono">0{i+1}.</span>
                      {uc}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Cpu className="text-violet w-5 h-5" />
                  <h2 className="text-lg font-serif uppercase tracking-widest text-white">Implementazioni Future</h2>
                </div>
                <ul className="space-y-4">
                  {project.implementations.map((imp, i) => (
                    <li key={i} className="text-sm text-slate-400 flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-violet/50 rounded-full mt-1.5" />
                      {imp}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale contrast-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-obsidian via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Decorative Cybernetic Frame */}
            <div className="absolute -inset-4 border border-azure/20 pointer-events-none rounded-3xl" />
            <div className="absolute top-0 right-0 p-8">
               <span className="text-8xl font-black opacity-5 uppercase select-none leading-none">
                  {project.title.split(' ')[0]}
               </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
