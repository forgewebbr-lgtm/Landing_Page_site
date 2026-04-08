import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

const testimonials = [
  { 
    name: "Carlos M.", 
    role: "Paciente", 
    text: '"Eu adiava a ida ao urologista por pura vergonha. O Dr. Antônio atendeu-me com tanta naturalidade que perdi o medo na hora. Resolveu o meu problema de forma rápida."', 
    stars: "★★★★★" 
  },
  { 
    name: "Mariana T.", 
    role: "Esposa de Paciente", 
    text: '"Tive de insistir muito para o meu marido ir consultar. A equipa foi super discreta e o acompanhamento pós-operatório trouxe a tranquilidade que a nossa família precisava."', 
    stars: "★★★★★" 
  },
  { 
    name: "Roberto F.", 
    role: "Paciente de Cirurgia", 
    text: '"Fiz uma vasectomia com o Dr. Antônio e fiquei impressionado com a precisão e a tecnologia do consultório. Recuperação quase sem dor. Recomendo de olhos fechados."', 
    stars: "★★★★★" 
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-ink py-24 px-6 border-t border-border1">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <ScrollReveal 
            key={i} 
            delay={i * 200} // Cascata suave
            className="group relative p-10 border border-border1 bg-ink2/40 transition-all duration-500 overflow-hidden cursor-default hover:border-border2"
          >
            <div 
              className="absolute left-0 top-0 w-[3px] bg-gold opacity-0 h-0 
                         group-hover:h-full group-hover:opacity-100 
                         transition-all ease-in-out shadow-[0_0_20px_rgba(200,169,106,0.8)]"
              style={{ transitionDuration: '1500ms' }} 
            />
            <div className="relative z-10">
              <div className="text-gold text-[10px] tracking-[3px] mb-8">{t.stars}</div>
              <p className="font-serif text-xl italic text-champ leading-relaxed mb-12 font-light opacity-90">
                {t.text}
              </p>
              <div className="mt-auto">
                <p className="text-sm font-semibold text-champ tracking-wide">{t.name}</p>
                <p className="text-[11px] text-muted uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}