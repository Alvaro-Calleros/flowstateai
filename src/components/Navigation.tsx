import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/hooks/use-theme';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto container-spacing">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img src={`${import.meta.env.BASE_URL}logo-flowstateai.png`} alt="FlowStateAI Logo" className="h-8 w-auto mr-3" />
            <div  className="text-2xl font-bold text-foreground">
              FlowStateAI
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#caracteristicas" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Características
              </a>
              <a href="#quienes-somos" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Nosotros
              </a>
              <a href="#precios" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Precios
              </a>
              <a href="#testimonios" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Testimonios
              </a>
              <a href="#calculadora" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Calculadora ROI
              </a>
            </div>
            {/* Toggle de tema */}
            <div className="flex items-center ml-6">
              <span className="text-xs text-gray-400 mr-2">🌞</span>
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={checked => setTheme(checked ? 'dark' : 'light')}
                aria-label="Cambiar modo claro/oscuro"
              />
              <span className="text-xs text-gray-400 ml-2">🌚</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="elegant-button"
              onClick={() => {
                document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Solicitar Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#caracteristicas" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">
              Características
            </a>
            <a href="#quienes-somos" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">
              Nosotros
            </a>
            <a href="#precios" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">
              Precios
            </a>
            <a href="#testimonios" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">
              Testimonios
            </a>
            <a href="#calculadora" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">
              Calculadora ROI
            </a>
            {/* Toggle de tema en móvil */}
            <div className="flex items-center mt-2">
              <span className="text-xs text-gray-400 mr-2">🌞</span>
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={checked => setTheme(checked ? 'dark' : 'light')}
                aria-label="Cambiar modo claro/oscuro"
              />
              <span className="text-xs text-gray-400 ml-2">🌚</span>
            </div>
            <div className="pt-2">
              <Button 
                className="w-full elegant-button"
                onClick={() => {
                  document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Solicitar Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
