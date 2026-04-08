import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-border1 py-12 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Lado Esquerdo: Identidade */}
        <div className="font-serif text-[15px] text-muted tracking-wide text-center md:text-left">
          Dr. <span className="text-gold">Antônio Flávio</span> — Urologista
        </div>

        {/* Lado Direito: Contatos e CRM */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-10">
          <div className="flex items-center gap-2.5 text-[11px] text-muted uppercase tracking-widest group hover:text-champ transition-colors cursor-default">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            São Paulo / SP
          </div>

          <div className="flex items-center gap-2.5 text-[11px] text-muted uppercase tracking-widest group hover:text-champ transition-colors cursor-default">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            (11) 99999-9999
          </div>

          <div className="text-[11px] text-muted uppercase tracking-widest border-l border-border2 pl-6 hidden md:block">
            CRM 123.456/SP &middot; RQE 78.901
          </div>
        </div>
      </div>

      {/* Linha Final de Copyright */}
      <div className="mt-12 pt-8 border-t border-border1 text-center">
        <p className="text-[10px] text-muted/40 uppercase tracking-[3px]">
          &copy; 2026 Dr. Antânio Flavio. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}