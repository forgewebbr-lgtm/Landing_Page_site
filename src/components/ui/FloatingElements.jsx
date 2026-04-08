import React, { useState, useEffect } from 'react';

export default function FloatingElements() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const moveMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', moveMouse);
    
    const followMouse = () => {
      setRingPos(prev => ({
        // ALTERAÇÃO 1: Mudamos de 0.15 para 0.35 para o círculo ser mais rápido
        x: prev.x + (mousePos.x - prev.x) * 0.35,
        y: prev.y + (mousePos.y - prev.y) * 0.35
      }));
      requestAnimationFrame(followMouse);
    };
    const animId = requestAnimationFrame(followMouse);
    setTimeout(() => setShowBadge(true), 5000);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      cancelAnimationFrame(animId);
    };
  }, [mousePos]);

  return (
    <>
      {/* CURSOR DOURADO (Ponto Central) */}
      <div className="fixed w-2 h-2 bg-gold rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block" 
           style={{ left: mousePos.x, top: mousePos.y, transform: 'translate(-50%, -50%)' }} />
           
      {/* CÍRCULO EXTERNO (O anel que acompanha) */}
      {/* ALTERAÇÃO 2: Removemos as classes 'transition-all duration-300' daqui */}
      <div className="fixed w-9 h-9 border border-gold/50 rounded-full pointer-events-none z-[9998] hidden md:block"
           style={{ left: ringPos.x, top: ringPos.y, transform: 'translate(-50%, -50%)' }} />

      {/* WHATSAPP FLUTUANTE */}
      <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp" className="fixed bottom-[30px] right-[30px] w-14 h-14 bg-gold rounded-full flex items-center justify-center text-ink z-[700] shadow-xl hover:scale-110 transition-transform">
        <div className="absolute inset-[-9px] border border-gold/30 rounded-full animate-pulse"></div>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.549 4.107 1.51 5.831L0 24l6.336-1.488A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.015-1.374l-.36-.214-3.732.878.895-3.63-.234-.373A9.818 9.818 0 012.182 12C2.182 6.574 6.574 2.182 12 2.182S21.818 6.574 21.818 12 17.426 21.818 12 21.818z"/></svg>
      </a>

      {/* BADGE DE AGENDAMENTOS */}
      <div className={`fixed bottom-28 left-6 bg-ink3 border-l-2 border-gold p-4 shadow-2xl z-[650] flex items-center gap-3 transition-transform duration-700 ${showBadge ? 'translate-x-0' : '-translate-x-[150%]'}`}>
        <span className="text-xl">📅</span>
        <div className="text-xs text-bodyTxt">
          <strong className="text-gold block mb-0.5 font-medium">5 agendamentos hoje</strong>
          Vagas limitadas esta semana
        </div>
        <button onClick={() => setShowBadge(false)} className="absolute top-1 right-2 text-muted text-[10px]">✕</button>
      </div>
    </>
  );
}