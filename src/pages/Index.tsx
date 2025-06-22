import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import SocialProofSection from '../components/SocialProofSection';
import PricingSection from '../components/PricingSection';
import ROICalculator from '../components/ROICalculator';
import DemoSection from '../components/DemoSection';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <SocialProofSection />
      <FeaturesSection />
      <ROICalculator />
      <PricingSection />
      <DemoSection />
      <section id="quienes-somos" className="section-spacing bg-background border-t border-border">
        <div className="container mx-auto container-spacing text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Quiénes Somos?</h2>
          <p className="text-lg text-muted-foreground mb-2">
            Somos <span className="font-semibold text-primary">AIMA</span> (Artificial Intelligence and Marketing Agency), una agencia especializada en soluciones de inteligencia artificial y marketing digital para negocios modernos.
          </p>
          <p className="text-lg text-muted-foreground">
            Nuestro equipo combina experiencia tecnológica y visión estratégica para ayudarte a crecer, automatizar procesos y captar más clientes con herramientas de última generación. Confía en nosotros para llevar tu negocio al siguiente nivel.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
