import { MessageSquare, Settings, TrendingUp, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Diagnóstico',
    description: 'Análise personalizada do seu negócio e identificação de oportunidades de automação'
  },
  {
    icon: Settings,
    step: '02',
    title: 'Implementação',
    description: 'Configuração completa de automação e integração com suas ferramentas existentes'
  },
  {
    icon: TrendingUp,
    step: '03',
    title: 'Escala e Otimização',
    description: 'Resultados em crescimento contínuo com monitoramento e otimização constante'
  }
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-b from-purple-900/10 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Como{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Funciona
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Um processo simples e eficiente em apenas 3 passos para transformar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-px bg-gradient-to-r from-purple-500/50 to-transparent z-0"></div>
              )}
              
              <div className="relative bg-gradient-to-b from-purple-900/30 to-black/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                {/* Step Number */}
                <div className="absolute -top-6 left-8">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                    {step.step}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 border border-purple-500/30 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:border-purple-400/50 transition-all duration-300">
                  <step.icon className="w-10 h-10 text-purple-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 text-center">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed text-center">{step.description}</p>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#consultoria"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white text-lg font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Comece Agora - É Gratuito
          </a>
        </div>
      </div>
    </section>
  );
}