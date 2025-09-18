import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-md flex items-center justify-center">
              <div className="w-5 h-5 bg-white/20 rounded-sm grid grid-cols-2 gap-0.5">
                <div className="bg-white/60 rounded-sm"></div>
                <div className="bg-white/30 rounded-sm"></div>
                <div className="bg-white/30 rounded-sm"></div>
                <div className="bg-white/60 rounded-sm"></div>
              </div>
            </div>
            <span className="text-white font-bold text-xl">Escalier Tech</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicos" className="text-gray-300 hover:text-white transition-colors">Serviços</a>
            <a href="#como-funciona" className="text-gray-300 hover:text-white transition-colors">Como Funciona</a>
            <a href="#depoimentos" className="text-gray-300 hover:text-white transition-colors">Depoimentos</a>
            <a href="#contato" className="text-gray-300 hover:text-white transition-colors">Contato</a>
            <a href="#consultoria" className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              Consultoria Gratuita
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 rounded-lg mt-2">
              <a href="#servicos" className="block px-3 py-2 text-gray-300 hover:text-white">Serviços</a>
              <a href="#como-funciona" className="block px-3 py-2 text-gray-300 hover:text-white">Como Funciona</a>
              <a href="#depoimentos" className="block px-3 py-2 text-gray-300 hover:text-white">Depoimentos</a>
              <a href="#contato" className="block px-3 py-2 text-gray-300 hover:text-white">Contato</a>
              <a href="#consultoria" className="block px-3 py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white rounded-lg font-semibold">
                Consultoria Gratuita
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}