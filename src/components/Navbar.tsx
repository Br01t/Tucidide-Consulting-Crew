import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Chi Siamo', path: '/vision' },
    { name: 'Contatti', path: '/contatti' }
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 h-[80px] md:h-[100px] flex items-center bg-obsidian/20 backdrop-blur-sm border-b border-white/5">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo - Elegant Dark Style */}
        <Link 
          to="/" 
          className="flex items-center gap-4 group cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-8 h-8 md:w-10 md:h-10 border-l-2 border-azure border-b-2 border-violet">
             <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl md:text-2xl font-serif font-bold text-ink">T</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm md:text-base font-serif tracking-[0.2em] uppercase text-white">Tucidide</span>
            <span className="text-[8px] md:text-[9px] text-azure tracking-[0.2em] font-medium leading-none opacity-60">EST. 2024</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`group relative text-[11px] font-medium uppercase tracking-[0.2em] transition-colors ${
                location.pathname === link.path ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.name}
              <motion.div 
                className="absolute -bottom-1 left-0 h-[1px] bg-azure"
                initial={{ width: location.pathname === link.path ? '100%' : 0 }}
                animate={{ width: location.pathname === link.path ? '100%' : 0 }}
              />
            </Link>
          ))}
        </div>

        {/* Desktop Action */}
        <div className="hidden lg:block">
           <div className="text-[9px] text-azure tracking-[0.4em] font-bold uppercase opacity-40">
              Axiomatic // Modernism
           </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[80px] bg-black/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center gap-12"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-serif uppercase tracking-[0.3em] transition-colors ${
                  location.pathname === link.path ? 'text-white' : 'text-slate-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-8 text-[9px] text-azure tracking-[0.4em] font-bold uppercase opacity-40">
              Tucidide Consulting Crew
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
