import Services from '../components/Services';

export default function Servicos() {
  return (
    <section id="servicos">
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb items={[{ label: 'Início', to: '/' }, { label: 'Serviços' }]} />
      </div>
      <Services />
    </section>
  );
}
import Breadcrumb from '../components/Breadcrumb';
