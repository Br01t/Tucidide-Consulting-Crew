import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative pt-32 pb-12 px-12 bg-obsidian border-t border-white/5 overflow-hidden">
       {/* Background Decoration */}
      <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
        <span className="text-[20rem] font-serif font-black select-none leading-none">希</span>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-serif font-black tracking-tighter uppercase mb-8 block">
              Tucidide<br/>Crew
            </Link>
            <p className="text-slate-500 text-xs tracking-widest leading-loose mb-8">
              Digital Archaeology & Axiomatic Modernism.<br/>
              Creato sulle fondamenta della proporzione greca.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-azure hover:text-azure transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-azure hover:text-azure transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-azure hover:text-azure transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white mb-8">Navigazione</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-500 hover:text-azure text-xs tracking-widest uppercase transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="text-slate-500 hover:text-azure text-xs tracking-widest uppercase transition-colors">Portfolio</Link></li>
              <li><Link to="/vision" className="text-slate-500 hover:text-azure text-xs tracking-widest uppercase transition-colors">Vision</Link></li>
              <li><Link to="/contatti" className="text-slate-500 hover:text-azure text-xs tracking-widest uppercase transition-colors">Contatti</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white mb-8">Settori</h4>
            <ul className="space-y-4">
              <li className="text-slate-500 text-xs tracking-widest uppercase font-light">Sport Tech</li>
              <li className="text-slate-500 text-xs tracking-widest uppercase font-light">Luxury Retail</li>
              <li className="text-slate-500 text-xs tracking-widest uppercase font-light">Social Impact</li>
              <li className="text-slate-500 text-xs tracking-widest uppercase font-light">Wellness</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white mb-8">Contatti</h4>
            <p className="text-slate-500 text-xs tracking-widest leading-loose mb-4">
               Basileus_St. 10<br/>
               Agora, Digital Space
            </p>
            <p className="text-azure text-xs tracking-widest font-bold">
               crew@tucidide.io
            </p>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-[10px] tracking-[0.4em] text-slate-600 uppercase">
             © 2024 Tucidide Consulting Crew. Modernismo Assiomatico.
          </span>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="text-[9px] tracking-[0.4em] text-slate-600 uppercase hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-[9px] tracking-[0.4em] text-slate-600 uppercase hover:text-slate-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
