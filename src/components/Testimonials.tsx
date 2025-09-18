import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Silva',
    role: 'CEO',
    company: 'LojaX',
    content: 'Com a Escalier Tech, dobramos nossos leads em 60 dias. A automação de WhatsApp revolucionou nossa comunicação com clientes.',
    rating: 5
  },
  {
    name: 'Carlos Mendes',
    role: 'Diretor de Marketing',
    company: 'TechSolutions',
    content: 'Economia de 15 horas semanais com a automação de marketing. Nossa equipe agora foca no estratégico, não no operacional.',
    rating: 5
  },
  {
    name: 'Mariana Costa',
    role: 'Fundadora',
    company: 'Beleza Natural',
    content: 'ROI de 400% em 3 meses. A nutrição automatizada de leads transformou nosso processo de vendas completamente.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O que Nossos{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Clientes Dizem
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Resultados reais de empresas que transformaram seus negócios com nossas soluções
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group p-8 bg-gradient-to-b from-purple-900/20 to-black/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl hover:border-purple-400/40 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role} • {testimonial.company}</p>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex items-center justify-center space-x-12 mt-16 opacity-60">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-gray-400 text-sm">Clientes Ativos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">95%</div>
            <div className="text-gray-400 text-sm">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">2M+</div>
            <div className="text-gray-400 text-sm">Leads Gerados</div>
          </div>
        </div>
      </div>
    </section>
  );
}