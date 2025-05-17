import React from 'react';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-lg font-bold text-blue-800 dark:text-blue-400">
              Gabriel <span className="text-teal-600">de Holanda</span>
            </a>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              &copy; {currentYear} Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/gabrielhsx30" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-icon"
            >
              <GitHub />
            </a>
            <a 
              href="https://www.linkedin.com/in/gabrieldeholanda/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <Linkedin />
            </a>
            <a 
              href="mailto:gabrielholandam31@gmail.com" 
              aria-label="Email"
              className="social-icon"
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;