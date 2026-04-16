import React from 'react';
import { motion } from 'motion/react';
import { projects, Project } from '../data';
import { Link } from 'react-router-dom';
import { Ship, BookOpen, Shield } from 'lucide-react';

interface PortfolioProps {
  limit?: number;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: string | number;
}

const CategoryIcon = ({ category }: { category: string }) => {
  const iconProps = {
    className: "w-5 h-5 transition-all duration-500",
  };

  // Logic to return specific icons based on category
  if (category.includes('Tech') || category.includes('Sport') || category.includes('Athletic')) {
    if (category.includes('Tactical') || category.includes('Combat')) {
      return (
        <motion.div
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <Shield {...iconProps} />
        </motion.div>
      );
    }
    return (
      <motion.div
        animate={{ y: [0, -2, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <Ship {...iconProps} />
      </motion.div>
    );
  }

  return (
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
    >
      <BookOpen {...iconProps} />
    </motion.div>
  );
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative bg-white/[0.03] border border-white/10 overflow-hidden hover:border-azure transition-all duration-500 aspect-[4/5]"
    >
      {/* Background Masked Image with Zoom and Smooth Fading */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={project.image}
          alt={project.title}
          onLoad={() => setIsLoaded(true)}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: isLoaded ? 0.1 : 0, 
            scale: isLoaded ? 1 : 1.1 
          }}
          whileHover={{ scale: 1.1, opacity: 0.2 }}
          transition={{ 
            opacity: { duration: 0.8 }, 
            scale: { duration: 1.2, ease: "easeOut" },
            whileHover: { duration: 0.6 }
          }}
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
        {/* Loading Placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-white/5 animate-pulse" />
        )}
      </div>

      {/* Card Content with staggered fade-in elements */}
      <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-12 h-12 border border-violet/30 flex items-center justify-center text-violet mb-6 relative group-hover:border-azure group-hover:text-azure transition-colors duration-500">
             {/* Subtle Glow Effect on Hover */}
             <div className="absolute inset-0 bg-azure/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />
             <CategoryIcon category={project.category} />
          </div>
          <h3 className="text-2xl font-serif uppercase tracking-wider text-ink mb-2">
            {project.title}
          </h3>
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-azure opacity-60">
            {project.category}
          </span>
        </motion.div>
        
        <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75">
          <p className="text-xs text-slate-400 font-light leading-relaxed mb-8">
            {project.description}
          </p>
          <div className="flex gap-4">
            <Link 
              to={`/portfolio/${project.id}`}
              className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-white border-b border-white/30 hover:border-azure transition-colors"
            >
              Vedi Progetto
            </Link>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-azure border-b border-azure/30 hover:border-white transition-colors"
            >
              Apri Sito
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Accent */}
      <motion.div 
        className="absolute left-0 top-0 h-full w-[4px] bg-azure opacity-0 group-hover:opacity-100 transition-opacity" 
        initial={false}
      />
    </motion.div>
  );
};

const Portfolio = ({ limit }: PortfolioProps) => {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="ta-erga" className="relative py-24 px-12">
      <div className="container mx-auto">
        <div className="mb-20">
           <span className="text-azure text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Archivio Progetti // Ta Erga</span>
           <h2 className="text-5xl md:text-7xl font-serif font-black uppercase tracking-tight mb-8">
              Il Nostro Portfolio<br/><span className="opacity-20 italic">The Works</span>
           </h2>
           <div className="h-[1px] w-24 bg-copper/50 mb-8" />
           <p className="text-slate-500 max-w-sm text-xs uppercase tracking-[0.2em] leading-loose">
              Architetture digitali su misura costruite sulle fondamenta immutabili della proporzione estetica antica.
           </p>
        </div>

        {/* Steles Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {limit && projects.length > limit && (
          <div className="mt-20 flex justify-center">
             <Link 
              to="/portfolio"
              className="group flex items-center gap-6 px-12 py-6 border border-white/10 hover:border-azure transition-all relative overflow-hidden"
             >
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-white group-hover:text-azure transition-colors">Vedi Tutti i Progetti</span>
                <div className="w-12 h-[1px] bg-azure group-hover:w-20 transition-all" />
             </Link>
          </div>
        )}
      </div>
      
      <div className="mt-32 opacity-20 text-[9px] tracking-[0.1em] text-center">
         MODERNISMO ASSIOMATICO // TUTTI I DIRITTI RISERVATI // © 2024
      </div>
    </section>
  );
};

export default Portfolio;
