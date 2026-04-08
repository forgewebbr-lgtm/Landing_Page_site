import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, className = "", type = "fade-up", delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 1. O elemento ENTROU na tela
        if (entry.isIntersecting) {
          setIsVisible(true);
        } 
        // 2. O elemento SAIU da tela
        else {
          // Se saiu pela parte de BAIXO (top > 0), o usuário rolou para cima.
          // Então nós mudamos para 'false' para "resetar" a animação invisivelmente.
          if (entry.boundingClientRect.top > 0) {
            setIsVisible(false);
          }
          // Se saiu pela parte de CIMA, não fazemos nada. Ele fica visível.
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    
    // Limpeza quando o componente for desmontado
    return () => observer.disconnect();
  }, []); // Dependências vazias = executa só ao montar o componente

  if (type === "u-draw") {
    return (
      <span ref={ref} className={`u-draw inline-block ${isVisible ? 'lit' : ''} ${className}`}>
        {children}
      </span>
    );
  }

  // Definir qual é a transformação inicial baseada no tipo escolhido
  let transformClass = "translate-y-10"; // Padrão: surge de baixo (fade-up)
  if (type === "fade-left") transformClass = "-translate-x-12"; // Surge da esquerda
  if (type === "fade-right") transformClass = "translate-x-12"; // Surge da direita
  if (type === "scale") transformClass = "scale-95"; // Surge aumentando (zoom in)

  return (
    <div 
      ref={ref} 
      style={{ 
        // Dica Pro: Só aplica o delay quando está entrando (isVisible = true). 
        // Na hora de esconder (resetar), esconde na hora (0ms) para evitar bugs visuais se o usuário rolar rápido.
        transitionDelay: isVisible ? `${delay}ms` : '0ms', 
        transitionDuration: '1000ms' // Força a duração da animação para não conflitar com hovers
      }}
      className={`transition-all ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : `opacity-0 ${transformClass}`
      } ${className}`}
    >
      {children}
    </div>
  );
}