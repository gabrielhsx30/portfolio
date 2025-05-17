import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="bg-white dark:bg-slate-800"
    >
      <div className="section-container">
        <h2 className="section-title">Sobre Mim</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className={`transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/gabriel-profile.jpg" 
                  alt="Gabriel de Holanda" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                2025
              </div>
            </div>
          </div>
          
          <div className={`space-y-4 transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-slate-700 dark:text-slate-300">
              Olá! Sou Gabriel de Holanda, de Santos, São Paulo, Brasil. Sou recém-formado no Ensino Médio com uma sólida formação complementar em Tecnologia, Empreendedorismo e Inteligência Artificial.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              Participei do curso de Gestão Empresarial pela Speed Treinamentos, onde desenvolvi habilidades em comunicação e apresentações em público, além de fundamentos em gestão administrativa e marketing.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              Concluí treinamentos em orientação profissional e Tecnologia Livre pela Escola Digital Max, e mais recentemente, finalizei o curso profissionalizante em Inteligência Artificial pela Expert Cursos.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3 text-blue-800 dark:text-blue-400">Educação</h3>
              <div className="space-y-3">
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 dark:text-blue-300">Ensino Médio</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Média geral: 9,2 | Aluno destaque</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 dark:text-blue-300">Cursos Complementares</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc list-inside">
                    <li>Gestão Empresarial - Speed Treinamentos</li>
                    <li>Inteligência Artificial - Expert Cursos</li>
                    <li>Tecnologia Livre - Escola Digital Max</li>
                    <li>Inglês em andamento - Tag Cursos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;