import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">ZapControla</h3>
            <p className="text-gray-400 mb-4">
              Sua solução completa para controle financeiro pessoal.
              Gerencie suas finanças de forma simples e eficiente.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contato@zapcontrola.com</li>
              <li>(11) 99999-9999</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ZapControla. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;