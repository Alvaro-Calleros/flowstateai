import React from 'react';

const testimonials = [
  {
    name: "Marcus Johnson",
    title: "Barbería Elite Cuts",
    rating: 5,
    review: "FlowStateAI transformó completamente nuestro sistema de citas. Pasamos de perder el 30% de las citas por faltas a solo el 5%. La IA maneja todo perfectamente: programación, recordatorios, incluso venta adicional de nuestros servicios premium. Nuestros ingresos aumentaron 40% en solo 3 meses.",
    image: "/placeholder.svg"
  },
  {
    name: "Sarah Martínez",
    title: "Estudio Glamour",
    rating: 5,
    review: "La mejor inversión que hemos hecho para nuestro salón. El agente IA trabaja 24/7 reservando citas y respondiendo preguntas de clientes. Estamos capturando leads incluso cuando estamos cerrados. Nuestro personal puede enfocarse en los clientes en lugar de responder las mismas preguntas todo el día.",
    image: "/placeholder.svg"
  },
  {
    name: "Dra. Ángela Chen",
    title: "Clínica Familiar WellCare",
    rating: 5,
    review: "La satisfacción del paciente mejoró dramáticamente desde que implementamos FlowStateAI. Los recordatorios automáticos y seguimientos han reducido las citas perdidas en un 70%. Nuestro personal de recepción ahora puede enfocarse en la atención al paciente en lugar de llamadas constantes.",
    image: "/placeholder.svg"
  },
  {
    name: "Laura Gómez",
    title: "Tienda Online TrendyShop",
    rating: 5,
    review: "El chatbot de FlowStateAI responde dudas de mis clientes al instante y resuelve el 90% de las preguntas frecuentes. Desde que lo implementé, las devoluciones bajaron y las ventas subieron 30%. ¡No tengo que estar pegada al chat todo el día!",
    image: "/placeholder.svg"
  },
  {
    name: "Mariana Ruiz",
    title: "Cosmetóloga Independiente",
    rating: 5,
    review: "Ahora mi agenda se llena sola gracias al agente de WhatsApp de FlowStateAI. Atiende consultas, vende tratamientos y agenda citas automáticamente, incluso cuando estoy ocupada con pacientes. He duplicado mis ingresos en 2 meses.",
    image: "/placeholder.svg"
  },
  {
    name: "Carlos Méndez",
    title: "Arquitecto Independiente",
    rating: 5,
    review: "Gracias a mi nuevo sitio web con formulario inteligente, ahora recibo leads calificados y cierro más proyectos en menos tiempo. FlowStateAI automatizó el seguimiento y me permite enfocarme en diseñar, no en perseguir clientes.",
    image: "/placeholder.svg"
  }
];

const SocialProofSection = () => {
  return (
    <section id="testimonios" className="section-spacing bg-background">
      <div className="container mx-auto container-spacing">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            La Confianza de <span className="gradient-text">20+</span> Negocios Locales
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo FlowStateAI ayudó a dueños de negocios a recuperar su tiempo y aumentar sus ingresos
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 backdrop-blur-sm"
            >
              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-elegant-success"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground mb-8 italic leading-relaxed">"{testimonial.review}"</p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-elegant-blue to-elegant-purple rounded-full flex items-center justify-center mr-4">
                  <span className="text-foreground font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground text-sm">
            <div>Integrado con 50+ Herramientas de Negocio</div>
            <div className="w-2 h-2 bg-muted rounded-full"></div>
            <div>99.9% Garantía de Tiempo Activo</div>
            <div className="w-2 h-2 bg-muted rounded-full"></div>
            <div>Cumplimiento GDPR</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
