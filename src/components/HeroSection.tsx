import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-32">
      <div className="container mx-auto container-spacing">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-elegant-blue/10 border border-elegant-blue/20 text-elegant-blue text-sm font-medium mb-12 animate-fade-in">
            <span className="w-2 h-2 bg-elegant-success rounded-full mr-3 animate-pulse"></span>
            Automatización IA para Negocios Escalables
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in leading-tight">
            Para de Perder Dinero por{' '}
            <span className="gradient-text">
              Llamadas Perdidas
            </span>{' '}
            y Citas Canceladas
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto animate-fade-in leading-relaxed">
            Mantén el estado de Flow en tu empresa, dándote la libertad de que tú y tus empleados se enfoquen en atender más clientes, mientras la IA te consigue más ventas SIN MOVER UN DEDO.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mb-16 animate-fade-in">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">80%</div>
              <div className="text-gray-400">Reducción de Faltas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">60%</div>
              <div className="text-gray-400">Aumento de Reservas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-400">Disponibilidad IA</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in">
            <Button 
              size="lg" 
              className="elegant-button text-lg px-10 py-6"
            >
              Solicita tu Demo de Agente IA
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-elegant-blue text-elegant-blue hover:bg-elegant-blue/10 text-lg px-10 py-6"
              onClick={() => {
                window.location.hash = 'precios';
              }}
            >
              Ver Precios
            </Button>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto max-w-4xl animate-fade-in">
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <img src="/ai-business.jpeg" alt="AI Business" className="w-full h-[340px] object-cover" />
            </div>
            
            {/* Marketing Message */}
            <div className="text-center mt-8">
              <h4 className="text-2xl font-bold mb-4">
                La IA no es el futuro: es <span className="gradient-text">LA HERRAMIENTA</span> que hoy multiplica tus ventas y libera horas.
              </h4>
              <p className="text-lg text-muted-foreground">
                Automatiza tu negocio con FlowSate AI o mira cómo tu competencia te supera.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
