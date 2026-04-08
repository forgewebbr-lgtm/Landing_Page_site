import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

// Importando as imagens reais da sua pasta assets
import imgNegligencia from '../../assets/negligencia.png';
import imgAgendando from '../../assets/agendando a consulta.png';

export default function Story() {
  return (
    <section id="tensao" className="bg-ink">
      
      {/* Introdução da História */}
      <div className="bg-ink2 py-16 md:py-24 px-6 text-center border-y border-border1 relative overflow-hidden">
        {/* Fundo com Gradiente Radial */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(200,169,106,0.05)_0%,transparent_100%)] pointer-events-none"></div>
        
        <ScrollReveal>
          <div className="flex items-center justify-center gap-4 text-gold text-[10px] tracking-[4px] uppercase font-semibold mb-7">
            <div className="w-8 h-[1px] bg-border3"></div> O Conflito <div className="w-8 h-[1px] bg-border3"></div>
          </div>
          <h2 className="font-serif text-[clamp(28px,4.5vw,56px)] font-light leading-[1.18] text-champ mb-4">
            Mas com o tempo, uma coisa<br/>sempre ficou para depois…
          </h2>
        </ScrollReveal>

        {/* Linha dourada animada (efeito de escrita) */}
        <ScrollReveal type="u-draw" delay={450} className="font-serif italic text-[clamp(30px,5vw,64px)] font-light text-gold inline-block">
          A saúde dele.
        </ScrollReveal>
      </div>

      {/* Painéis da História - Coreografia de Animações */}
      <div className="story-grid overflow-hidden">
        
        {/* =========================================================
           Painel 01 - Imagem: Esquerda | Texto: Baixo
           ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] min-h-[480px] border-b border-border1">
          
          {/* Lado da Imagem: Surge da ESQUERDA */}
          <ScrollReveal type="fade-left" delay={100} className="h-full">
            <div className="relative overflow-hidden group h-full">
              <img 
                src={imgNegligencia}
                alt="Detalhe preocupação" 
                className="w-full h-full object-cover opacity-70 animate-cinematic" 
              />
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="absolute top-7 left-7 text-gold text-[9px] tracking-[3.5px] uppercase font-semibold flex items-center gap-2 z-10">
                <div className="w-5 h-[1px] bg-gold"></div> Capítulo 01
              </div>
            </div>
          </ScrollReveal>

          {/* Lado do Texto: Surge de BAIXO */}
          <div className="bg-ink2 p-12 md:p-20 flex items-center">
            <ScrollReveal delay={300}>
              <div className="max-w-[380px]">
                <div className="font-serif text-8xl text-border2 leading-none -mb-4 tracking-tighter select-none">01</div>
                <h3 className="font-serif text-3xl text-champ leading-tight mb-4 group-hover:text-gold transition-colors duration-500">
                  Ele dizia que<br/><strong className="font-semibold text-gold">estava tudo bem.</strong>
                </h3>
                {/* AQUI ESTÁ O NOVO TEXTO PERSUASIVO DO CAPÍTULO 1 */}
                <p className="text-[14.5px] text-bodyTxt leading-relaxed font-light">
                  Uma desculpa diferente a cada vez — o trabalho, o cansaço constante ou a teimosia em adiar a ida ao médico. Enquanto isso, ela observava os pequenos sinais de desgaste, preocupada e em silêncio.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* =========================================================
           Painel 02 - Imagem: Direita | Texto: Baixo
           ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-[45%_55%] min-h-[480px] border-b border-border1">
          
          {/* Lado do Texto: Surge de BAIXO */}
          <div className="bg-ink3 p-12 md:p-20 flex items-center order-2 md:order-1">
            <ScrollReveal delay={300}>
              <div className="max-w-[380px]">
                <div className="font-serif text-8xl text-border2 leading-none -mb-4 tracking-tighter select-none">02</div>
                <h3 className="font-serif text-3xl text-champ leading-tight mb-4 group-hover:text-gold transition-colors duration-500">
                  Até que ela<br/><strong className="font-semibold text-gold">decidiu agir.</strong>
                </h3>
                {/* AQUI ESTÁ O NOVO TEXTO PERSUASIVO DO CAPÍTULO 2 */}
                <p className="text-[14.5px] text-bodyTxt leading-relaxed font-light">
                  Tomar a iniciativa por quem sempre cuidou da família. Um simples agendamento de consulta, feito de forma rápida e discreta, devolveu a paz de espírito que ambos precisavam.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Lado da Imagem: Surge da DIREITA */}
          <ScrollReveal type="fade-right" delay={100} className="h-full order-1 md:order-2">
            <div className="relative overflow-hidden group h-full">
              <img 
                src={imgAgendando}
                alt="Decisão de agendar" 
                className="w-full h-full object-cover opacity-70 animate-cinematic" 
                style={{ animationDelay: '2s' }} 
              />
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="absolute top-7 left-7 text-gold text-[9px] tracking-[3.5px] uppercase font-semibold flex items-center gap-2 z-10">
                <div className="w-5 h-[1px] bg-gold"></div> Capítulo 02
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}