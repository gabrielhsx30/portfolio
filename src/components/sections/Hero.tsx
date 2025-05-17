import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-900 dark:to-blue-950 -z-10"></div>
      
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-blue-900 dark:text-blue-100 animate-fade-in">
            Gabriel de Holanda
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Estudante de Tecnologia & Marketing
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <a href="#contact" className="btn btn-primary">
              Entre em Contato
            </a>
            <a href="#about" className="btn btn-outline">
              Sobre Mim
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
          <span className="text-sm mb-2">Ver Mais</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;