import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ROICalculator = () => {
  const [appointments, setAppointments] = useState(100);
  const [avgValue, setAvgValue] = useState(800); // Adjusted for MXN
  const [noShowRate, setNoShowRate] = useState(30);

  // Calculations in MXN
  const currentLostRevenue = appointments * (noShowRate / 100) * avgValue;
  const withFlowState = appointments * (5 / 100) * avgValue; // 5% no-show rate with AI
  const monthlySavings = currentLostRevenue - withFlowState;
  const setupCost = 21499; // Professional plan setup cost
  const monthlyCost = 2800; // Professional plan monthly cost
  const yearlyOperationalCost = monthlyCost * 12;
  const yearlyROI = (monthlySavings * 12) - yearlyOperationalCost - setupCost;
  const totalInvestment = setupCost + yearlyOperationalCost;
  const roiPercentage = Math.round(((monthlySavings * 12) / totalInvestment) * 100);

  return (
    <section id="calculadora" className="section-spacing bg-background">
      <div className="container mx-auto container-spacing">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Calcula tu <span className="gradient-text">ROI</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Ve exactamente cuánto dinero estás perdiendo por faltas y llamadas perdidas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator Input */}
            <Card className="bg-card border-border backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Detalles de tu Negocio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Monthly Appointments */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-3">
                    Citas Mensuales
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    value={appointments}
                    onChange={(e) => setAppointments(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-border [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>50</span>
                    <span className="text-primary font-semibold">{appointments}</span>
                    <span>1000</span>
                  </div>
                </div>

                {/* Average Appointment Value */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-3">
                    Valor Promedio por Cita (MXN)
                  </label>
                  <input
                    type="range"
                    min="200"
                    max="3000"
                    value={avgValue}
                    onChange={(e) => setAvgValue(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-border [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>$200</span>
                    <span className="text-primary font-semibold">${avgValue}</span>
                    <span>$3,000</span>
                  </div>
                </div>

                {/* Current No-Show Rate */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-3">
                    Tasa Actual de Faltas (%)
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    value={noShowRate}
                    onChange={(e) => setNoShowRate(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-border [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>10%</span>
                    <span className="text-primary font-semibold">{noShowRate}%</span>
                    <span>50%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl gradient-text">Tus Ahorros Potenciales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Current Lost Revenue */}
                <div className="text-center p-6 bg-red-500/10 rounded-lg border border-red-500/20">
                  <div className="text-sm text-muted-foreground mb-2">Perdiendo Mensualmente</div>
                  <div className="text-3xl font-bold text-red-400">
                    ${currentLostRevenue.toLocaleString()} MXN
                  </div>
                </div>

                {/* With FlowStateAI */}
                <div className="text-center p-6 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="text-sm text-muted-foreground mb-2">Con FlowStateAI</div>
                  <div className="text-3xl font-bold text-primary">
                    ${withFlowState.toLocaleString()} MXN perdidos
                  </div>
                </div>

                {/* Monthly Savings */}
                <div className="text-center p-6 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="text-sm text-muted-foreground mb-2">Ahorros Mensuales</div>
                  <div className="text-4xl font-bold gradient-text">
                    ${monthlySavings.toLocaleString()} MXN
                  </div>
                </div>

                {/* Yearly ROI */}
                <div className="text-center p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                  <div className="text-sm text-muted-foreground mb-2">ROI Anual (después de inversión)</div>
                  <div className="text-2xl font-bold text-foreground">
                    ${yearlyROI.toLocaleString()} MXN
                  </div>
                  <div className="text-lg text-primary">
                    {roiPercentage}% Retorno
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Incluye configuración de ${setupCost.toLocaleString()} MXN
                  </div>
                </div>

                <Button className="w-full elegant-button text-lg py-6">
                  Empezar - Ahorrar ${monthlySavings.toLocaleString()} MXN/mes
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Message */}
          <div className="text-center mt-16 p-8 bg-card rounded-2xl border border-border backdrop-blur-sm">
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">Estimación conservadora:</span> La mayoría de clientes ven 
              aumentos de reservas del 60-80% y reducciones de faltas del 70-90% en los primeros 30 días.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
