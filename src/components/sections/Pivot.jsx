import React, { useState, useEffect } from 'react';

export default function Pivot() {
  // Tenta pegar o tempo salvo ou inicia com 299 (5 minutos)
  const [seconds, setSeconds] = useState(() => {
    const savedTime = sessionStorage.getItem('timer_seconds');
    return savedTime !== null ? parseInt(savedTime, 10) : 299;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => {
        const nextValue = prev > 0 ? prev - 1 : 0;
        sessionStorage.setItem('timer_seconds', nextValue); // Salva o tempo a cada segundo
        return nextValue;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s) => {
    const min = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };

  return (
    <section id="pivot" className="bg-ink3 py-12 md:py-18 px-6 text-center border-y border-border1 relative overflow-hidden">
      {/* Background Glow sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,169,106,0.02)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* A SOLUÇÃO */}
        <p className="text-gold text-[10px] tracking-[5px] uppercase font-medium mb-4 opacity-80">
          A Solução
        </p>

        {/* TÍTULO */}
        <h2 className="font-serif text-[clamp(42px,6.5vw,78px)] font-light leading-none text-champ mb-2 tracking-tight">
          Retome o Controle
        </h2>

        {/* SUBTÍTULO */}
        <p className="font-serif italic text-[clamp(18px,2.2vw,24px)] text-gold mb-8">
          Não deixe para amanhã a saúde que você precisa hoje.
        </p>

        {/* CONTADOR - Reduzi a margem para mb-8 */}
        <div className="flex items-center gap-5 mb-8 px-8 py-3.5 border border-border2 bg-black/40 rounded-sm">
          <span className="text-[11px] tracking-[2px] text-muted uppercase font-medium">
            Vagas se esgotando:
          </span>
          <span className="font-mono text-2xl text-gold tracking-[4px] leading-none">
            {formatTime(seconds)}
          </span>
        </div>

        {/* ÁREA DE AÇÃO - Botão e Texto Lado a Lado (Desktop) */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <a 
            // Não se esqueça de colocar o link final do WhatsApp com mensagem pré-definida
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="animate-pulse-glow bg-gold hover:bg-gold-hi text-ink font-bold text-[11px] tracking-[3px] uppercase px-14 py-5 rounded-sm transition-all duration-300"
          >
            Agendar Minha Consulta
          </a>

          <p className="text-[11px] text-muted tracking-widest uppercase whitespace-nowrap opacity-70">
            Restam apenas <span className="text-gold font-bold">2 horários</span> para esta semana
          </p>
        </div>

      </div>
    </section>
  );
}