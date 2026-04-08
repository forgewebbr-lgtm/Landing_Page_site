import React from 'react';
import fotoDoutor from '../../assets/foto-dr-antonio.jpg';

export default function Doctor() {
  return (
    <section id="doctor" className="bg-ink2 py-16 md:py-[120px] px-6 md:px-12 border-t border-border1">
      
      {/* AQUI: max-w-5xl para criar a linha invisível perfeita com os Benefícios */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20 items-center">
        
        {/* Lado da Imagem/Moldura */}
        <div className="relative group overflow-hidden">
          <div className="aspect-[3/4] bg-ink3 border border-border2 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-3 border border-border1"></div>
            
            {/* Cantos Dourados Estilizados */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-gold z-10"></div>
            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-gold z-10"></div>
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-gold z-10"></div>
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-gold z-10"></div>
            
            <img src={fotoDoutor} alt="Dr. Antônio Flavio" className="absolute inset-[12px] w-[calc(100%-24px)] h-[calc(100%-24px)] object-cover z-0" />
            
            {/* O Placeholder SVG pode ser mantido ou removido já que a imagem está a carregar */}
            <div className="flex flex-col items-center justify-center relative z-10 pointer-events-none opacity-0">
              <svg width="20" height="80" viewBox="0 0 24 24" fill="#C8A96A" className="opacity-20">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Lado do Texto/Informação */}
        <div className="reveal on">
          <p className="text-[10px] tracking-[3.5px] uppercase text-gold font-semibold mb-4">Especialista em Saúde Masculina</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-champ leading-tight mb-2">Dr. Antônio Flavio</h2>
          
          {/* COLOQUE O CRM E RQE REAIS AQUI ABAIXO */}
          <p className="text-[11px] tracking-[1.5px] text-muted mb-8 pb-8 border-b border-border1">Urologista &nbsp;·&nbsp; CRM SEU_CRM_AQUI/SP &nbsp;·&nbsp; RQE SEU_RQE_AQUI</p>
          
          <p className="text-[15px] text-bodyTxt leading-relaxed font-light mb-8">
            Especialista em urologia e prevenção masculina com mais de 12 anos de experiência. Seu diferencial é o atendimento humanizado — onde o paciente é ouvido de verdade, sem pressa, sem julgamento.
          </p>

          {/* Cards de Estatísticas */}
          <div className="grid grid-cols-3 gap-[1px] bg-border1 border border-border1">
            <div className="bg-ink3 py-5 text-center">
              <div className="font-serif text-3xl text-gold">+2.4k</div>
              <div className="text-[10px] tracking-widest text-muted uppercase mt-1">Pacientes</div>
            </div>
            <div className="bg-ink3 py-5 text-center">
              <div className="font-serif text-3xl text-gold">12+</div>
              <div className="text-[10px] tracking-widest text-muted uppercase mt-1">Anos</div>
            </div>
            <div className="bg-ink3 py-5 text-center">
              <div className="font-serif text-3xl text-gold">98%</div>
              <div className="text-[10px] tracking-widest text-muted uppercase mt-1">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}