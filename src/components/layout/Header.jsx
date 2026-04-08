import React from 'react';
import { useScroll } from '../../hooks/useScroll';

export default function Header() {
  const { scrolled, scrollProgress } = useScroll();

  return (
    <>
      {/* BARRA DE PROGRESSO */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-gold-lo via-gold to-gold-hi z-[9000] transition-all duration-100 ease-linear"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* NAVEGAÇÃO */}
        <header className={`fixed top-0 left-0 w-full z-[800] flex items-center justify-between px-6 md:px-12 h-[68px] transition-all duration-500 border-b ${
          scrolled ? 'bg-ink/90 backdrop-blur-md border-border1' : 'bg-ink border-border1'
        }`}>
        <a href="#hero" className="font-serif text-[17px] font-normal tracking-[1px] text-champ flex items-center gap-2.5">
          <span className="w-[5px] h-[5px] bg-gold rounded-full inline-block"></span>
          Dr. Antânio Flavio
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex items-center gap-9">
            <li><a href="#tensao" className="text-[11px] font-medium tracking-[2.5px] uppercase text-muted hover:text-gold transition-colors">A História</a></li>
            <li><a href="#doctor" className="text-[11px] font-medium tracking-[2.5px] uppercase text-muted hover:text-gold transition-colors">O Médico</a></li>
            <li><a href="#faq" className="text-[11px] font-medium tracking-[2.5px] uppercase text-muted hover:text-gold transition-colors">Dúvidas</a></li>
          </ul>
        </nav>

        <a 
          href="https://wa.me/5511999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gold hover:bg-gold-hi text-ink text-[11px] font-semibold tracking-[2px] uppercase px-6 py-2.5 rounded-sm transition-colors relative overflow-hidden group"
        >
          <span className="relative z-10">Agendar agora</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[nav-shimmer_1.5s_infinite]"></div>
        </a>
      </header>
    </>
  );
}