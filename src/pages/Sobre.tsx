export default function Sobre() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-5xl mx-auto px-4">
        <Breadcrumb items={[{ label: 'Início', to: '/' }, { label: 'Sobre' }]} />
        <h1 className="text-4xl font-bold text-white mb-6">Sobre a Escalier Tech</h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          A Escalier Tech ajuda PMEs a crescer com automação inteligente e marketing de alta performance. 
          Integramos ferramentas como WhatsApp, e-mail e CRM em fluxos eficientes, reduzindo custos e ampliando resultados.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Combinamos tecnologia moderna e estratégia de negócio para entregar soluções sob medida: chatbots, campanhas orientadas a dados, 
          integrações e análises que aceleram a tomada de decisão e a conversão.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 border border-purple-500/20 rounded-xl bg-black/40">
            <div className="text-white text-xl font-semibold mb-2">Missão</div>
            <p className="text-gray-300">Empoderar PMEs com automação e dados para crescer de forma sustentável.</p>
          </div>
          <div className="p-6 border border-pink-500/20 rounded-xl bg-black/40">
            <div className="text-white text-xl font-semibold mb-2">Visão</div>
            <p className="text-gray-300">Ser referência em soluções acessíveis de automação e marketing inteligente.</p>
          </div>
          <div className="p-6 border border-orange-500/20 rounded-xl bg-black/40">
            <div className="text-white text-xl font-semibold mb-2">Valores</div>
            <p className="text-gray-300">Resultado, transparência, inovação contínua e foco no cliente.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
import Breadcrumb from '../components/Breadcrumb';
