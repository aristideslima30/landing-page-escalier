import { TrendingUp, Clock, Bot, MessageSquare } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Aumento da produtividade',
    description: 'Otimize processos e maximize a eficiência da sua equipe com automação inteligente'
  },
  {
    icon: Clock,
    title: 'Redução de Tempo Manual',
    description: 'Automatize tarefas repetitivas e foque no que realmente importa para o crescimento'
  },
  {
    icon: Bot,
    title: 'Redução de Custos',
    description: 'Diminua gastos operacionais com soluções automatizadas e eficientes'
  },
  {
    icon: MessageSquare,
    title: 'Integração Total',
    description: 'WhatsApp, e-mail, CRM e todas suas ferramentas conectadas em um só lugar'
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Por que Escolher a{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Escalier Tech
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transformamos pequenas e médias empresas com tecnologia inteligente e estratégias que realmente funcionam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-b from-purple-900/20 to-black/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}