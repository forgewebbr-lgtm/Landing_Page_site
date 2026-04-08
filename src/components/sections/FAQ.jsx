import React, { useState } from 'react';
import ScrollReveal from '../ui/ScrollReveal';

const faqData = [
  { 
    q: "A consulta tem total sigilo?", 
    a: "Absolutamente. O nosso consultório foi desenhado para garantir a máxima privacidade. A sua saúde e os seus dados são tratados com o mais estrito rigor médico e confidencialidade." 
  },
  { 
    q: "O Dr. Antônio atende através de convénio (plano de saúde)?", 
    a: "Realizamos atendimentos particulares para garantir o tempo e a qualidade que cada paciente merece. No entanto, emitimos recibo para que possa solicitar o reembolso ao seu convénio de forma simples." 
  },
  { 
    q: "Posso agendar a consulta para o meu marido/parceiro?", 
    a: "Com certeza. É muito comum que as esposas ou parceiras deem o primeiro passo. Basta clicar no botão do WhatsApp e a nossa equipa ajudará a encontrar o melhor horário para ele." 
  },
  { 
    q: "Os exames são feitos no mesmo dia?", 
    a: "O Dr. Antônio realiza a avaliação clínica e alguns exames físicos em consultório. Caso sejam necessários exames de imagem ou laboratoriais complementares, indicamos os melhores centros parceiros." 
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="bg-ink py-24 px-6 border-t border-border1">
      <ScrollReveal className="text-center mb-16">
        <p className="text-gold text-[10px] tracking-[4px] uppercase font-semibold mb-4">Dúvidas Frequentes</p>
        <h2 className="font-serif text-4xl md:text-5xl text-champ font-light leading-tight">
          Tudo o que você <br className="md:hidden" /> precisa <em className="text-gold italic">saber</em>
        </h2>
      </ScrollReveal>

      <div className="max-w-[760px] mx-auto">
        {faqData.map((item, i) => (
          <ScrollReveal key={i} delay={i * 100} className="border-b border-border1 last:border-0">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full py-7 flex justify-between items-center text-left text-champ hover:text-gold transition-colors group"
            >
              <span className="text-base md:text-lg font-light tracking-wide">{item.q}</span>
              <div className={`w-6 h-6 border border-border2 rounded-full flex items-center justify-center text-gold transition-all duration-300 ${openIndex === i ? 'rotate-45 border-gold' : ''}`}>
                <span className="text-xl leading-none">+</span>
              </div>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === i ? 'max-h-[300px] opacity-100 pb-8' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-bodyTxt text-[14.5px] font-light leading-relaxed max-w-[90%]">
                {item.a}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}