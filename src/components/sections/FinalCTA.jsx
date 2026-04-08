import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export default function FinalCTA() {
  return (
    <section id="final" className="bg-ink2 py-24 md:py-32 px-6 text-center border-t border-border1 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal delay={100}>
          <p className="text-gold text-[10px] tracking-[4px] uppercase font-semibold mb-6">O próximo passo é seu</p>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <h2 className="font-serif text-[clamp(32px,5vw,64px)] font-light text-champ leading-tight mb-4">
            Agende a consulta para <br/><em className="text-gold italic font-light">quem você ama.</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="font-serif italic text-lg text-muted mb-12">Um gesto seu pode mudar a vida de vocês dois.</p>
        </ScrollReveal>
        
        <ScrollReveal delay={550}>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-gold hover:bg-gold-hi text-ink font-bold text-[11px] tracking-[2.5px] uppercase px-10 py-5 rounded-sm transition-all">
            Agendar pelo WhatsApp
          </a>
        </ScrollReveal>
        
        <ScrollReveal delay={700}>
          <p className="mt-10 text-[10px] text-muted uppercase tracking-[2px]">
            Atendimento Seg–Sex  &middot;  São Paulo/SP
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}