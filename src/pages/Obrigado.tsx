import { Link } from 'react-router-dom';

export default function Obrigado() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="text-left"><Breadcrumb items={[{ label: 'Início', to: '/' }, { label: 'Obrigado' }]} /></div>
        <h1 className="text-4xl font-bold text-white mb-4">Obrigado!</h1>
        <p className="text-gray-300 mb-8">Recebemos seus dados e entraremos em contato em breve.</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white text-lg font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </section>
  );
}
import Breadcrumb from '../components/Breadcrumb';
