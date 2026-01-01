import { Zap, Target, MessageCircle, Database, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Zap,
    title: 'Automação com ChatBots Inteligentes',
    description: 'Chatbots avançados que atendem, qualificam e convertem leads 24/7'
  },
  {
    icon: Target,
    title: 'Marketing Digital Inteligente',
    description: 'Campanhas automatizadas e personalizadas com base em dados e IA'
  },
  {
    icon: MessageCircle,
    title: 'Análise de Dados e Inteligência de Mercado',
    description: 'Insights profundos sobre seu mercado e comportamento dos clientes'
  },
  {
    icon: Database,
    title: 'Consultoria em IA e Inovação',
    description: 'Estratégias personalizadas para implementar IA no seu negócio'
  },
  {
    icon: BarChart3,
    title: 'Consultoria de Marketing',
    description: 'Estratégias de marketing digital focadas em resultados e ROI'
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossas{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Soluções
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tecnologias inteligentes que automatizam, otimizam e escalam seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-b from-purple-900/30 to-black/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
          
          {/* Featured Service - Larger Card */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="group relative p-8 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-orange-500/20 backdrop-blur-sm border border-purple-400/40 rounded-2xl hover:border-purple-300/60 transition-all duration-300 h-full flex flex-col justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Pacote Completo</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Todas as soluções integradas para máxima eficiência e resultados
                </p>
                <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                  Mais Popular
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/contato"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white text-lg font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Descubra Qual Solução É Ideal Para Você
          </Link>
        </div>
      </div>
    </section>
  );
}