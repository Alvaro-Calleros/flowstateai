import React from 'react';

const features = [
  {
    icon: "📅",
    title: "Programación IA de Citas",
    description: "Reservas automáticas 24/7 que nunca pierden una llamada. Maneja programación, reprogramación y envía recordatorios inteligentes.",
    benefits: ["Reduce faltas en 80%", "Captura reservas 24/7", "Confirmaciones automáticas"]
  },
  {
    icon: "🎯",
    title: "Bots de Generación de Leads",
    description: "Chatbots inteligentes para tu sitio web y redes sociales que convierten visitantes en clientes pagadores.",
    benefits: ["Califica leads al instante", "Responde FAQ automáticamente", "Programa consultas"]
  },
  {
    icon: "📞",
    title: "Agentes IA de Voz",
    description: "Agentes de voz similares a humanos que manejan llamadas, seguimientos y atención al cliente con consistencia perfecta.",
    benefits: ["Suenan completamente naturales", "Manejan múltiples llamadas", "Registro perfecto de llamadas"]
  },
  {
    icon: "💬",
    title: "Automatización de Atención al Cliente",
    description: "Soporte instantáneo que resuelve el 90% de consultas de clientes sin intervención humana.",
    benefits: ["Tiempos de respuesta instantáneos", "Calidad de servicio consistente", "Escala cuando es necesario"]
  },
  {
    icon: "🔗",
    title: "Hub de Integraciones",
    description: "Se conecta perfectamente con tu CRM existente, software de programación y herramientas de negocio.",
    benefits: ["Funciona con herramientas existentes", "Sincronización de datos en tiempo real", "Sin interrupción del flujo de trabajo"]
  },
  {
    icon: "📊",
    title: "Analíticas de Rendimiento",
    description: "Insights detallados sobre el rendimiento de tus agentes IA, interacciones con clientes y seguimiento de ROI.",
    benefits: ["Rastrea cada interacción", "Mide ROI claramente", "Optimiza rendimiento"]
  }
];

const FeaturesSection = () => {
  return (
    <section id="caracteristicas" className="section-spacing">
      <div className="container mx-auto container-spacing">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Tu Equipo de IA que{' '}
            <span className="gradient-text">Nunca Duerme</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Convierte cada consulta en ingresos con agentes IA que trabajan las 24 horas para hacer crecer tu negocio
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group backdrop-blur-sm"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                    <svg className="w-4 h-4 text-elegant-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12 border border-border backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-center mb-12">
            Perfecto para <span className="gradient-text">Cualquier Negocio con atención al cliente</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💇</div>
              <h4 className="font-semibold text-foreground mb-3">Barberías</h4>
              <p className="text-sm text-muted-foreground">Programación automática, reducción de faltas</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💅</div>
              <h4 className="font-semibold text-foreground mb-3">Salones de Belleza</h4>
              <p className="text-sm text-muted-foreground">Venta adicional de tratamientos, gestión de listas de espera</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h4 className="font-semibold text-foreground mb-3">Clínicas Médicas</h4>
              <p className="text-sm text-muted-foreground">Seguimiento de pacientes, recordatorios de citas</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🛒</div>
              <h4 className="font-semibold text-foreground mb-3">Tiendas E-commerce</h4>
              <p className="text-sm text-muted-foreground">Atención instantánea, recuperación de carritos, soporte 24/7</p>
            </div>

            <div className="text-center col-span-1 md:col-span-2 lg:col-span-4">
              <div className="text-4xl mb-4">🌐</div>
              <h4 className="font-semibold text-foreground mb-3">Empresas sin presencia online</h4>
              <p className="text-sm text-muted-foreground">Digitalización de atención al cliente y generación de leads</p>
            </div>

            <div className="text-center col-span-1 md:col-span-2 lg:col-span-4">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="font-semibold text-foreground mb-3">Limpieza de Leads en Redes Sociales</h4>
              <p className="text-sm text-muted-foreground">Agentes IA que filtran y califican leads automáticamente desde tus redes sociales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
