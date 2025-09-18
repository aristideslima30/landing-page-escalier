import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='0.4'%3E%3Crect width='30' height='30'/%3E%3Crect x='30' y='30' width='30' height='30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-orange-500/20 border border-purple-500/30 rounded-full px-4 py-2">
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-gray-300">Tecnologia Inteligente para PMEs</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Transforme sua empresa com{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                automação inteligente
              </span>{' '}
              e marketing digital de{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                alta performance
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Impulsione resultados, reduza custos e maximize produtividade com soluções inovadoras baseadas em Inteligência Artificial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#consultoria"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white text-lg font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Agende sua Consultoria Gratuita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button className="inline-flex items-center justify-center px-8 py-4 border border-purple-500/50 text-white text-lg font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-300">
                Ver Como Funciona
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">300%</div>
                <div className="text-gray-400">Aumento em Leads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">60 dias</div>
                <div className="text-gray-400">Resultados Médios</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-gray-400">Automação Ativa</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* 3D Chess Board Illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-orange-500/20 rounded-2xl backdrop-blur-sm border border-purple-500/30">
                <div className="absolute inset-8 grid grid-cols-6 gap-2 opacity-60">
                  {Array.from({ length: 36 }, (_, i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-md ${
                        (Math.floor(i / 6) + i) % 2 === 0
                          ? 'bg-gradient-to-br from-purple-500/40 to-pink-500/40'
                          : 'bg-gradient-to-br from-pink-500/40 to-orange-500/40'
                      } animate-pulse`}
                      style={{
                        animationDelay: `${i * 100}ms`,
                        animationDuration: '2s'
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl blur-sm animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/3 -left-8 w-12 h-12 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full blur-sm animate-float" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}