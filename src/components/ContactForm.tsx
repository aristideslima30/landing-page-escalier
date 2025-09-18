import React, { useState } from 'react';
import { Send, Clock, Users, Award } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    company: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('Obrigado! Entraremos em contato em breve.');
        setFormData({ name: '', email: '', whatsapp: '', company: '' });
      } else {
        setSubmitMessage(data.message || 'Erro ao enviar solicitação. Tente novamente.');
      }
    } catch (error) {
      setSubmitMessage('Erro ao enviar solicitação. Verifique sua conexão e tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="consultoria" className="py-20 bg-gradient-to-b from-black to-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Agende sua{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Consultoria Gratuita
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Descubra como automatizar seu marketing e escalar seu negócio em 60 minutos
          </p>
          <div className="inline-flex items-center space-x-2 bg-orange-500/20 border border-orange-500/40 rounded-full px-4 py-2">
            <Clock className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 font-semibold">Vagas limitadas por mês - Garante a sua!</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8">O que você vai receber:</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Análise Personalizada</h4>
                  <p className="text-gray-300">Diagnóstico completo do seu funil de vendas e oportunidades de automação</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Estratégia Customizada</h4>
                  <p className="text-gray-300">Plano de ação específico para o seu negócio e setor de atuação</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">ROI Projetado</h4>
                  <p className="text-gray-300">Projeção de resultados e retorno sobre investimento em automação</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-orange-500/20 border border-purple-500/30 rounded-xl">
              <p className="text-white font-semibold text-lg">
                💰 Valor da Consultoria: R$ 497
              </p>
              <p className="text-green-400 font-bold text-xl mt-2">
                Para você: GRATUITA
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="relative">
            <div className="bg-gradient-to-b from-purple-900/40 to-black/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    E-mail Profissional *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white text-lg font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Agendar Consultoria Gratuita
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Seus dados estão seguros. Não enviamos spam.
                </p>
              </form>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}