import React, { useState, useEffect } from 'react';
import ScrollReveal from '../ui/ScrollReveal';

import imgCasal from '../../assets/casamento.png'; 
import imgClinica from '../../assets/noivado.png'; 
import imgLembranca from '../../assets/casal_feliz.png'; 

export default function Hero() {
  const [activePhoto, setActivePhoto] = useState(0); 

  useEffect(() => {
    // Diminuímos o ciclo total para 3.5s para manter o dinamismo
    const interval = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-[80vh] md:h-screen min-h-[700px] bg-ink overflow-hidden flex items-center justify-center">
      
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">

        {/* 1. Noivado (Esquerda) */}
        <div className={`absolute left-[-5%] md:left-[8%] top-[10%] md:top-[15%] w-[50%] md:w-[35%] aspect-[4/5] -rotate-6 transform 
          transition-all duration-[2000ms] cubic-bezier(0.4, 0, 0.2, 1)
          ${activePhoto === 1 
            ? 'opacity-90 scale-100 blur-0 z-30 saturate-100' 
            : 'opacity-10 scale-90 blur-[4px] z-0 saturate-0'}`}
        >
          <img 
            src={imgClinica} 
            alt="Noivado" 
            className="w-full h-full object-cover rounded-sm shadow-2xl" 
          />
        </div>

        {/* 2. Casal Feliz (Direita) */}
        <div className={`absolute right-[-5%] md:right-[8%] bottom-[10%] md:bottom-[15%] w-[50%] md:w-[35%] aspect-[4/5] rotate-3 transform 
          transition-all duration-[2000ms] cubic-bezier(0.4, 0, 0.2, 1)
          ${activePhoto === 2 
            ? 'opacity-90 scale-100 blur-0 z-30 saturate-100' 
            : 'opacity-10 scale-90 blur-[4px] z-0 saturate-0'}`}
        >
          <img 
            src={imgLembranca} 
            alt="Casal Feliz" 
            className="w-full h-full object-cover rounded-sm shadow-2xl" 
          />
        </div>

        {/* 3. Casamento (Centro) */}
        <div className={`absolute w-[85%] md:w-[55%] h-[75%] md:h-[85%] shadow-[0_0_60px_rgba(0,0,0,0.8)] border border-border1/10 overflow-hidden rounded-sm 
          transition-all duration-[2000ms] cubic-bezier(0.4, 0, 0.2, 1)
          ${activePhoto === 0 ? 'z-20 scale-100' : 'z-10 scale-95 opacity-30'}`}
        >
          <img 
            src={imgCasal}
            alt="Casamento" 
            className={`w-full h-full object-cover transition-all duration-[2500ms]
              ${activePhoto === 0 ? 'saturate-100 opacity-60' : 'saturate-0 opacity-20'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-ink/50 to-ink/95"></div>
        </div>

      </div>

      <div className="relative z-40 flex flex-col items-center justify-end h-full pb-[12vh] px-6 text-center pointer-events-none w-full max-w-4xl">
        <ScrollReveal delay={400}>
          <p className="text-[10px] tracking-[5px] uppercase text-gold font-medium mb-5 drop-shadow-md">
            Cuidando de Quem Importa
          </p>
        </ScrollReveal>

        <ScrollReveal delay={650}>
          <h1 className="font-serif text-[clamp(38px,6vw,76px)] font-light leading-[1.08] tracking-[-0.5px] text-champ mb-2.5 drop-shadow-lg">
            Tudo começou com<br/>planos e <em className="italic font-light text-gold">uma vida<br/>inteira juntos.</em>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={900}>
          <p className="font-serif italic text-[clamp(16px,2vw,22px)] text-muted mb-9 drop-shadow-md">
            A história de quem decidiu não deixar o amor esperando.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}