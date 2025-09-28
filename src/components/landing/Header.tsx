
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleEntrarAgora = () => {
    navigate('/auth');
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <img src="/lovable-uploads/9af179ff-e49a-47e8-b495-fbbc46ccb84d.png" alt="ZapControlA - Controle Financeiro" className="h-20 w-auto object-contain" loading="lazy" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Depoimentos
            </button>
            <button 
              onClick={handleEntrarAgora}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Entrar
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block flex items-center space-x-4">
            <Button 
              className="bg-brand-green hover:bg-brand-green/90 text-white font-medium px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105"
              onClick={handleEntrarAgora}
            >
              Entrar Agora
            </Button>
            
            {/* WhatsApp Contact */}
            <a 
              href="https://wa.me/5527992984867" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>55 27 99298-4867</span>
            </a>
            
            {/* Instagram Contact */}
            <a 
              href="https://www.instagram.com/zapcontrola/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105 text-sm"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {/* Logo centralizado para mobile */}
            <div className="flex justify-center mb-4">
              <img src="/lovable-uploads/9af179ff-e49a-47e8-b495-fbbc46ccb84d.png" alt="ZapControlA - Controle Financeiro" className="h-24 w-auto object-contain" loading="lazy" />
            </div>
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('como-funciona')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-left"
              >
                Como Funciona
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-left"
              >
                Depoimentos
              </button>
              <button 
                onClick={handleEntrarAgora}
                className="text-gray-600 hover:text-gray-900 transition-colors text-left"
              >
                Entrar
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-left"
              >
                FAQ
              </button>
              
              {/* Espaçamento extra antes do botão CTA */}
              <div className="pt-2"></div>
              
              <Button 
                className="bg-brand-green hover:bg-brand-green/90 text-white font-medium px-6 py-2 rounded-lg transition-all duration-200 w-full"
                onClick={handleEntrarAgora}
              >
                Entrar Agora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
