import HowItWorks from '../components/HowItWorks';

export default function ComoFunciona() {
  return (
    <section id="como-funciona">
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb items={[{ label: 'Início', to: '/' }, { label: 'Como Funciona' }]} />
      </div>
      <HowItWorks />
    </section>
  );
}
import Breadcrumb from '../components/Breadcrumb';
