import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import Story from '../components/sections/Story';
import Pivot from '../components/sections/Pivot'; // A Solução (Imagem)
import Resolution from '../components/sections/Resolution';
import Doctor from '../components/sections/Doctor';
import Benefits from '../components/sections/Benefits';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import FinalCTA from '../components/sections/FinalCTA'; // Fechamento
import Footer from '../components/layout/Footer';
import FloatingElements from '../components/ui/FloatingElements';

export default function Home() {
  return (
    <div className="bg-ink text-champ selection:bg-gold selection:text-ink min-h-screen">
      <FloatingElements />
      <Header />
      <main>
        <Hero />
        <Story />
        <Pivot />
        <Resolution />
        <Doctor />
        <Benefits />
        <Testimonials /> 
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}