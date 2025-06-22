import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DemoSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    phone: '',
    businessType: '',
    currentChallenges: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo request submitted:', formData);
    // Handle form submission here
  };

  return (
    <>
      <style>
        {`
          input, select, textarea {
            color: #1a365d !important;
            background-color: white !important;
          }
          input::placeholder, textarea::placeholder {
            color: #6b7280 !important;
          }
        `}
      </style>
      <section id="demo-section" className="py-16 lg:py-24 bg-gradient-to-br from-navy-800/50 to-navy-700/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  ¿Listo para <span className="gradient-text">dejar de perder dinero?</span>
                </h2>
                
                <p className="text-xl text-muted-foreground mb-8">
                  Solicita una demo personalizada y descubre cómo FlowStateAI puede transformar tu negocio en los próximos 30 días.
                </p>

                {/* Benefits */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-electric-500 to-neon-500 rounded-full flex items-center justify-center mr-4">
                      {/* ...svg... */}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Demo GRATIS</div>
                      <div className="text-muted-foreground text-sm">Mira tu agente de IA en acción</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-electric-500 to-neon-500 rounded-full flex items-center justify-center mr-4">
                      {/* ...svg... */}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Análisis de ROI personalizado</div>
                      <div className="text-muted-foreground text-sm">Calcula tus ahorros exactos</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-electric-500 to-neon-500 rounded-full flex items-center justify-center mr-4">
                      {/* ...svg... */}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Plan de implementación</div>
                      <div className="text-muted-foreground text-sm">Activa en 24-48 horas</div>
                    </div>
                  </div>
                </div>

                {/* Social Proof */}
                <div className="p-6 bg-navy-800/50 rounded-xl border border-navy-600">
                  <div className="flex items-center mb-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 bg-gradient-to-r from-electric-500 to-neon-500 rounded-full border-2 border-navy-800"></div>
                      ))}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-semibold text-foreground">Más de 10 negocios confían en FlowStateAI</div>
                      <div className="text-xs text-muted-foreground">Incremento promedio del 75% en ingresos en 90 días</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <Card className="bg-navy-800/80 border-electric-500/30 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text text-center">
                    Solicita tu demo gratis
                  </CardTitle>
                  <p className="text-muted-foreground text-center">
                    Sin compromiso. Resultados en menos de 24 horas.
                  </p>
                </CardHeader>
                
                <CardContent>
                  <form 
                    action="https://formspree.io/f/mgvyzawd"
                    method="POST"
                    className="space-y-4"
                    onSubmit={() => alert('¡Gracias! Tu solicitud ha sido enviada.')}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 !bg-white !text-navy-900 border border-navy-600 rounded-lg placeholder-gray-500 focus:border-electric-500 focus:ring-1 focus:ring-electric-500 outline-none transition-colors"
                          placeholder="Tu nombre"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          Correo electrónico *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 !bg-white !text-navy-900 border border-navy-600 rounded-lg placeholder-gray-500 focus:border-electric-500 focus:ring-1 focus:ring-electric-500 outline-none transition-colors"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Nombre del negocio *
                      </label>
                      <input
                        type="text"
                        name="business"
                        required
                        value={formData.business}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 !bg-white !text-navy-900 border border-navy-600 rounded-lg placeholder-gray-500 focus:border-electric-500 focus:ring-1 focus:ring-electric-500 outline-none transition-colors"
                        placeholder="Nombre de tu negocio"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 !bg-white !text-navy-900 border border-navy-600 rounded-lg placeholder-gray-500 focus:border-electric-500 focus:ring-1 focus:ring-electric-500 outline-none transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          Tipo de negocio *
                        </label>
                        <input
                          type="text"
                          name="businessType"
                          required
                          value={formData.businessType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 !bg-white !text-navy-900 border border-navy-600 rounded-lg placeholder-gray-500 focus:border-electric-500 focus:ring-1 focus:ring-electric-500 outline-none transition-colors"
                          placeholder="Ej: clínica, salón, inmobiliaria"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Mayor desafío (opcional)
                      </label>
                      <textarea
                        name="currentChallenges"
                        value={formData.currentChallenges}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 !bg-white !text-navy-900 border border-navy-600 rounded-lg placeholder-gray-500 focus:border-electric-500 focus:ring-1 focus:ring-electric-500 outline-none transition-colors resize-none"
                        placeholder="Ej: altas ausencias, llamadas perdidas, agendamiento manual..."
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full glow-button bg-gradient-to-r from-electric-500 to-neon-500 hover:from-electric-400 hover:to-neon-400 text-navy-900 font-semibold py-4 text-lg"
                    >
                      Solicitar mi demo gratis ahora
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Al enviar, aceptas recibir comunicaciones relacionadas con la demo. Puedes darte de baja en cualquier momento.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DemoSection;
