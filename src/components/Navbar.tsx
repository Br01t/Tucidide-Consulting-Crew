import React from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Chi Siamo', path: '/vision' },
    { name: 'Contatti', path: '/contatti' }
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 h-[100px] flex items-center bg-obsidian/20 backdrop-blur-sm">
      <div className="container mx-auto px-12 flex justify-between items-center">
        {/* Logo - Elegant Dark Style */}
        <Link to="/" className="flex items-center gap-4 group cursor-pointer">
          <div className="relative w-10 h-10 border-l-2 border-azure border-b-2 border-violet">
             <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-serif font-bold text-ink">T</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-serif tracking-[0.2em] uppercase text-white">Tucidide</span>
            <span className="text-[9px] text-azure tracking-[0.2em] font-medium leading-none opacity-60">EST. 2024 / ATHENS-CYBERIA</span>
          </div>
        </Link>

        {/* Links */}
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

        {/* Action - Optional subtle contact indicator or empty spacer for balance */}
        <div className="hidden sm:block">
           <div className="text-[9px] text-azure tracking-[0.4em] font-bold uppercase opacity-40">
              Axiomatic // Modernism
           </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
