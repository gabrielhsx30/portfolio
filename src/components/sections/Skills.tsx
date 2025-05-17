import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Users, Brain, Database, BarChart, MessageSquare, BookOpen } from 'lucide-react';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const skillCategories = [
    {
      title: 'Comunicação',
      icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
      skills: ['Comunicação interpessoal assertiva', 'Apresentações em público', 'Trabalho em equipe', 'Colaboração efetiva'],
    },
    {
      title: 'Gestão',
      icon: <BarChart className="w-6 h-6 text-blue-600" />,
      skills: ['Gestão administrativa', 'Gestão de pessoas', 'Marketing', 'Organização de tarefas'],
    },
    {
      title: 'Tecnologia',
      icon: <Database className="w-6 h-6 text-blue-600" />,
      skills: ['Tecnologia da Informação', 'Inteligência Artificial', 'Ferramentas digitais', 'Noções de programação'],
    },
    {
      title: 'Soft Skills',
      icon: <Users className="w-6 h-6 text-blue-600" />,
      skills: ['Proatividade', 'Responsabilidade', 'Comprometimento', 'Vontade de aprender'],
    },
    {
      title: 'Conhecimentos',
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      skills: ['Gestão empresarial', 'Simulações empresariais', 'Inglês (em desenvolvimento)', 'Inovação'],
    },
    {
      title: 'Interesses',
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      skills: ['Marketing Digital', 'Redes Sociais', 'Desenvolvimento Pessoal', 'Empreendedorismo'],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="bg-slate-50 dark:bg-slate-900"
    >
      <div className="section-container">
        <h2 className="section-title">Habilidades & Conhecimentos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className={`skill-card transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="ml-2 text-lg font-semibold text-blue-800 dark:text-blue-400">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map(skill => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-teal-600 mr-2"></div>
                    <span className="text-slate-700 dark:text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;