import ContactForm from '../components/ContactForm';

export default function Contato() {
  return (
    <section id="contato">
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb items={[{ label: 'Início', to: '/' }, { label: 'Contato' }]} />
      </div>
      <ContactForm />
    </section>
  );
}
import Breadcrumb from '../components/Breadcrumb';
