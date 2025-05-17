import React, { useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Mail, MapPin, Smartphone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setFormStatus({ submitted: true, success: true, message: 'Enviando mensagem...' });
      
      await emailjs.send(
        'service_id', // Substitua pelo seu Service ID do EmailJS
        'template_id', // Substitua pelo seu Template ID do EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'gabrielholandam31@gmail.com',
        },
        'public_key' // Substitua pela sua Public Key do EmailJS
      );

      setFormStatus({ submitted: true, success: true, message: 'Mensagem enviada com sucesso!' });
      
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setFormStatus({ submitted: true, success: false, message: 'Erro ao enviar mensagem. Tente novamente.' });
    }
    
    setTimeout(() => {
      setFormStatus(null);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-teal-600" />,
      title: 'Email',
      value: 'gabrielholandam31@gmail.com',
    },
    {
      icon: <Smartphone className="w-5 h-5 text-teal-600" />,
      title: 'Telefone',
      value: '+55 (13) 99162-5672',
    },
    {
      icon: <MapPin className="w-5 h-5 text-teal-600" />,
      title: 'Localização',
      value: 'Santos, São Paulo, Brasil',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-white dark:bg-slate-800"
    >
      <div className="section-container">
        <h2 className="section-title">Contato</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-semibold mb-6 text-blue-800 dark:text-blue-400">Vamos Conversar</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-8">
              Estou interessado em oportunidades de estágio, projetos freelance ou discussões sobre tecnologia. Se você tem alguma dúvida ou proposta, não hesite em entrar em contato.
            </p>
            
            <div className="space-y-4">
              {contactInfo.map(info => (
                <div key={info.title} className="flex items-start">
                  <div className="bg-blue-50 dark:bg-slate-700 p-3 rounded-full mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800 dark:text-blue-400">{info.title}</h4>
                    <p className="text-slate-700 dark:text-slate-300">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <form onSubmit={handleSubmit} className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn btn-primary flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </button>
              
              {formStatus && (
                <div className={`mt-4 p-3 rounded ${formStatus.success ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;