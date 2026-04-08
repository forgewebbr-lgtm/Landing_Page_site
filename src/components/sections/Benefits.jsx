import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

const benefitsData = [ 
  {
    title: "Diagnóstico Preciso",
    desc: "Equipamentos de ponta e avaliação detalhada para identificar a raiz do problema rapidamente.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>)
  },
  {
    title: "Tratamento Moderno",
    desc: "Técnicas minimamente invasivas que garantem recuperação rápida e menos desconforto.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>)
  },
  {
    title: "Acompanhamento Premium",
    desc: "Suporte contínuo antes, durante e após o tratamento para a sua total tranquilidade.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>)
  }
];

export default function Benefits() {
  return (
    <section className="bg-ink py-16 md:py-24 px-6 border-t border-border1">
      <ScrollReveal className="text-center mb-16">
        <h2 className="font-serif text-[clamp(28px,4vw,42px)] text-champ font-light tracking-wide">
          Por que escolher nosso <em className="text-gold italic font-light">Atendimento?</em>
        </h2>
      </ScrollReveal>

      {/* AQUI: max-w-5xl para alinhar com o Doutor */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 border border-border1">
        {benefitsData.map((item, i) => (
          <ScrollReveal 
            key={i} 
            delay={i * 150} 
            className={`p-12 flex flex-col items-start text-left group hover:bg-white/5 transition-colors duration-500 ${
              i !== benefitsData.length - 1 ? 'md:border-r border-border1' : ''
            } ${i !== 0 ? 'border-t md:border-t-0 border-border1' : ''}`}
          >
            <div className="w-12 h-12 rounded-full border border-border2 flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform duration-500">
              {item.icon}
            </div>
            <h3 className="font-serif text-2xl text-champ mb-4 tracking-wide font-light">
              {item.title}
            </h3>
            <p className="text-muted text-[14.5px] leading-relaxed font-light">
              {item.desc}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}