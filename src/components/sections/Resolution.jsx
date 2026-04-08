import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

// Importando as imagens reais da sua pasta assets
import imgConsulta from '../../assets/Consulta.png';
import imgCasalFeliz from '../../assets/casal_feliz.png';

export default function Resolution() {
  return (
    <section className="bg-ink border-b border-border1">
      {/* Grid de Imagens 50/50 */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Lado Esquerdo - A Consulta */}
        {/* AQUI: Usamos proporção em vez de altura fixa. aspect-video = formato TV/Cinema */}
        <div className="relative aspect-[4/3] md:aspect-video overflow-hidden group bg-ink2">
          <img 
            src={imgConsulta} 
            alt="Homem na consulta médica" 
            /* AQUI: O object-top (ou object-[center_15%]) garante que o navegador foque na parte de cima (rostos) em vez da barriga */
            className="w-full h-full object-cover object-[center_20%] md:object-top opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent pointer-events-none"></div>
          
          <div className="absolute bottom-6 md:bottom-8 left-8 md:left-12 z-10">
            <ScrollReveal type="fade-right">
              <h3 className="font-serif italic text-3xl md:text-4xl font-light text-champ/90">
                A consulta
              </h3>
            </ScrollReveal>
          </div>
        </div>

        {/* Lado Direito - Tranquilidade */}
        <div className="relative aspect-[4/3] md:aspect-video overflow-hidden group bg-ink2">
          <img 
            src={imgCasalFeliz} 
            alt="Casal feliz e tranquilo" 
            /* AQUI: O object-top garante que as cabeças do casal não sejam cortadas */
            className="w-full h-full object-cover object-top opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent pointer-events-none"></div>
          
          <div className="absolute bottom-6 md:bottom-8 left-8 md:left-12 z-10">
            <ScrollReveal type="fade-left" delay={200}>
              <h3 className="font-serif italic text-3xl md:text-4xl font-light text-champ/90 leading-tight">
                Tranquilidade para<br />seguirem juntos
              </h3>
            </ScrollReveal>
          </div>
        </div>

      </div>

      {/* Faixa de Texto Inferior */}
      <div className="bg-ink2 py-10 px-6 text-center border-t border-border1 relative overflow-hidden">
        <ScrollReveal>
          <h2 className="font-serif text-[clamp(24px,3.5vw,36px)] font-light text-champ tracking-wide">
            Uma decisão simples <em className="text-gold italic">pode mudar tudo.</em>
          </h2>
        </ScrollReveal>
      </div>
    </section>
  );
}