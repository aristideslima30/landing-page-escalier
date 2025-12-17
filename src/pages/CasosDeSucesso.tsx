import Testimonials from '../components/Testimonials';

export default function CasosDeSucesso() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb items={[{ label: 'Início', to: '/' }, { label: 'Casos de Sucesso' }]} />
        <h1 className="text-4xl font-bold text-white mt-16 mb-6">Casos de Sucesso</h1>
        <p className="text-gray-300 mb-10">Alguns resultados gerados com automação e marketing inteligente.</p>
      </div>
      <Testimonials />
    </section>
  );
}
import Breadcrumb from '../components/Breadcrumb';
