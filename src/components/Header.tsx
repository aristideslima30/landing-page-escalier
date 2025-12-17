import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-md flex items-center justify-center">
              <div className="w-5 h-5 bg-white/20 rounded-sm grid grid-cols-2 gap-0.5">
                <div className="bg-white/60 rounded-sm"></div>
                <div className="bg-white/30 rounded-sm"></div>
                <div className="bg-white/30 rounded-sm"></div>
                <div className="bg-white/60 rounded-sm"></div>
              </div>
            </div>
            <span className="text-white font-bold text-xl">Escalier Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/servicos" className={({isActive}) => isActive ? 'text-white transition-colors' : 'text-gray-300 hover:text-white transition-colors'}>Serviços</NavLink>
            <NavLink to="/como-funciona" className={({isActive}) => isActive ? 'text-white transition-colors' : 'text-gray-300 hover:text-white transition-colors'}>Como Funciona</NavLink>
            <NavLink to="/casos-de-sucesso" className={({isActive}) => isActive ? 'text-white transition-colors' : 'text-gray-300 hover:text-white transition-colors'}>Casos de Sucesso</NavLink>
            <NavLink to="/sobre" className={({isActive}) => isActive ? 'text-white transition-colors' : 'text-gray-300 hover:text-white transition-colors'}>Sobre</NavLink>
            <NavLink to="/contato" className={({isActive}) => isActive ? 'text-white transition-colors' : 'text-gray-300 hover:text-white transition-colors'}>Contato</NavLink>
            <Link to="/contato" className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              Consultoria Gratuita
            </Link>
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
              <NavLink to="/servicos" className={({isActive}) => 'block px-3 py-2 ' + (isActive ? 'text-white' : 'text-gray-300 hover:text-white')}>Serviços</NavLink>
              <NavLink to="/como-funciona" className={({isActive}) => 'block px-3 py-2 ' + (isActive ? 'text-white' : 'text-gray-300 hover:text-white')}>Como Funciona</NavLink>
              <NavLink to="/casos-de-sucesso" className={({isActive}) => 'block px-3 py-2 ' + (isActive ? 'text-white' : 'text-gray-300 hover:text-white')}>Casos de Sucesso</NavLink>
              <NavLink to="/sobre" className={({isActive}) => 'block px-3 py-2 ' + (isActive ? 'text-white' : 'text-gray-300 hover:text-white')}>Sobre</NavLink>
              <NavLink to="/contato" className={({isActive}) => 'block px-3 py-2 ' + (isActive ? 'text-white' : 'text-gray-300 hover:text-white')}>Contato</NavLink>
              <Link to="/contato" className="block px-3 py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white rounded-lg font-semibold">
                Consultoria Gratuita
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
