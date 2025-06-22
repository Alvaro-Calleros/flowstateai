import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const plans = [
  {
    name: "BÁSICO",
    emoji: "🥉",
    setupPrice: 9700,
    monthlyPrice: 1500,
    description: "Perfecto para pequeños negocios que empiezan con automatización IA",
    features: [
      "1 Agente IA (WhatsApp + programación)",
      "Hasta 300 conversaciones/mes",
      "Soporte en horario comercial básico",
      "Sesión de entrenamiento incluida",
      "2 semanas de soporte de incorporación",
      "Analíticas básicas"
    ],
    highlighted: false,
    cta: "Empezar Ahora"
  },
  {
    name: "PROFESIONAL",
    emoji: "🥈",
    setupPrice: 21499,
    monthlyPrice: 2800,
    description: "Más popular - Automatización IA completa para negocios en crecimiento",
    features: [
      "3 Agentes IA (WhatsApp, voz, chat web)",
      "Hasta 1,000 conversaciones/mes",
      "Integración CRM",
      "Dashboard de analíticas",
      "Soporte prioritario",
      "Entrenamiento de personal incluido",
      "Llamadas de optimización mensuales",
      "Acceso API"
    ],
    highlighted: true,
    cta: "Empezar Ahora",
    badge: "Más Popular"
  },
  {
    name: "EMPRESARIAL",
    emoji: "🥇",
    setupPrice: 67000,
    monthlyPrice: 8200,
    description: "Poder IA ilimitado para negocios establecidos",
    features: [
      "20 agentes IA",
      "Sitio web profesional con IA integrada",
      "Integraciones personalizadas",
      "Solución de marca blanca",
      "Gerente de cuenta dedicado",
      "Soporte premium 24/7",
      "Revisión de negocio trimestral",
      "Estrategia de crecimiento incluida"
    ],
    highlighted: false,
    cta: "Empezar Ahora",
    limited: "Limitado a 20 clientes por trimestre"
  },
  {
    name: "PREMIUM",
    emoji: "💎",
    setupPrice: 200000,
    monthlyPrice: 23000,
    description: "Plataforma completa de automatización con diseño personalizado",
    features: [
      "Plataforma completa de automatización",
      "Clonación de voz IA",
      "Aplicación móvil personalizada",
      "Automatización completa de marketing",
      "Consultor IA personal",
      "Desarrollo personalizado",
      "Soporte ejecutivo 24/7",
      "Garantía SLA"
    ],
    highlighted: false,
    cta: "Empezar Ahora",
    limited: "Solo 5 proyectos por año"
  }
];

const PricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    phone: '',
    businessType: '',
    plan: '',
    message: ''
  });

  const handlePlanClick = (plan: any) => {
    setSelectedPlan(plan);
    setFormData(prev => ({ ...prev, plan: plan.name }));
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
    setFormData({
      name: '',
      email: '',
      business: '',
      phone: '',
      businessType: '',
      plan: '',
      message: ''
    });
  };

  return (
    <section id="precios" className="section-spacing">
      <div className="container mx-auto container-spacing">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Precios Simples y <span className="gradient-text">Transparentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Elige el plan que se adapte a tu negocio. Todos los planes incluyen configuración personalizada y soporte completo.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative ${
                plan.highlighted 
                  ? 'bg-card border-primary shadow-2xl shadow-primary/10 scale-105' 
                  : 'bg-card border-border hover:border-primary/30'
              } transition-all duration-300 backdrop-blur-sm`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <div className="text-4xl mb-3">{plan.emoji}</div>
                <CardTitle className="text-xl font-bold text-foreground mb-4">
                  {plan.name}
                </CardTitle>
                
                {/* Setup Cost */}
                <div className="mb-2">
                  <div className="text-sm text-muted-foreground">Configuración</div>
                  <span className="text-2xl font-bold gradient-text">
                    ${plan.setupPrice.toLocaleString()} MXN
                  </span>
                </div>
                
                {/* Monthly Cost */}
                <div className="mb-4">
                  <div className="text-sm text-muted-foreground">Mensual</div>
                  <span className="text-2xl font-bold text-foreground">
                    ${plan.monthlyPrice.toLocaleString()} MXN
                  </span>
                </div>
                
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
                
                {plan.limited && (
                  <div className="mt-3 text-xs text-elegant-success bg-elegant-success/10 px-3 py-1 rounded-full">
                    {plan.limited}
                  </div>
                )}
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <svg className="w-4 h-4 text-elegant-success mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full font-semibold ${
                    plan.highlighted
                      ? 'elegant-button'
                      : 'bg-card hover:bg-accent/10 text-foreground border border-border hover:border-primary/30'
                  }`}
                  onClick={() => handlePlanClick(plan)}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-card rounded-3xl p-12 border border-border backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="font-semibold text-primary mb-3">¿Qué tan rápido puedo empezar?</h4>
              <p className="text-muted-foreground text-sm">La mayoría de negocios están activos en 24-48 horas. Nosotros manejamos toda la configuración e integración.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary mb-3">¿Puedo cancelar en cualquier momento?</h4>
              <p className="text-muted-foreground text-sm">Sí, sin contratos. Cancela en cualquier momento con aviso de 30 días. El costo de configuración no es reembolsable.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary mb-3">¿Qué pasa si necesito más conversaciones?</h4>
              <p className="text-muted-foreground text-sm">Fácil actualizar planes o agregar paquetes de conversaciones. Nunca cortaremos tu servicio.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary mb-3">¿Se integra con mis herramientas actuales?</h4>
              <p className="text-muted-foreground text-sm">Nos integramos con 50+ herramientas populares incluyendo la mayoría de CRMs, calendarios y sistemas POS.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Plan Selection Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl bg-background border border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Activa tu Plan <span className="gradient-text">{selectedPlan?.name}</span>
            </DialogTitle>
            <p className="text-muted-foreground text-center">
              Completa el formulario y nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
            </p>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Nombre completo *
                </label>
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="bg-background border-border"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Correo electrónico *
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="bg-background border-border"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Nombre del negocio *
              </label>
              <Input
                type="text"
                required
                value={formData.business}
                onChange={(e) => setFormData(prev => ({ ...prev, business: e.target.value }))}
                className="bg-background border-border"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Teléfono
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="bg-background border-border"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Tipo de negocio *
                </label>
                <Select value={formData.businessType} onValueChange={(value) => setFormData(prev => ({ ...prev, businessType: value }))}>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Selecciona tu tipo de negocio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="barberia">Barbería</SelectItem>
                    <SelectItem value="salon">Salón de Belleza</SelectItem>
                    <SelectItem value="clinica">Clínica Médica</SelectItem>
                    <SelectItem value="restaurante">Restaurante</SelectItem>
                    <SelectItem value="gimnasio">Gimnasio</SelectItem>
                    <SelectItem value="consultoria">Consultoría</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Mensaje adicional (opcional)
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Cuéntanos sobre tu negocio y objetivos..."
                className="bg-background border-border resize-none"
                rows={3}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button type="submit" className="flex-1 elegant-button text-lg py-6">
                Activar Plan {selectedPlan?.name}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsModalOpen(false)}
                className="flex-1 border-border text-foreground hover:bg-accent/10"
              >
                Cancelar
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Al enviar, aceptas recibir comunicaciones relacionadas con tu plan. Puedes darte de baja en cualquier momento.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PricingSection;
