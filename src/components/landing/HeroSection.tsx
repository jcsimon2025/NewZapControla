
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUp, ArrowDown, DollarSign, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQueroMeOrganizar = () => {
    navigate('/plano');
  };

  return (
    <section id="home" className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-white to-brand-light-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 text-sm text-brand-gray">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                  <span>+15.000 usuários</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                  <span>4.8★ avaliação</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                  <span>R$ 50M+ organizados</span>
                </div>
              </div>
              
              <h1 className="font-inter font-bold text-3xl lg:text-5xl text-gray-900 leading-tight">
                <span className="text-red-600">Não sabe pra onde está indo o seu dinheiro?</span><br />
                <span className="text-brand-green">Organize suas finanças direto pelo WhatsApp</span>
              </h1>
              
              <p className="font-inter text-base lg:text-lg text-brand-gray leading-relaxed max-w-lg">
              Seu assistente financeiro 24h por dia, você tem controle real sem planilhas, sem app complicados. 🚀
              </p>
              
              {/* Stats highlight */}
              <div className="bg-brand-green/10 border border-brand-green/20 rounded-lg p-4 max-w-lg">
                <p className="text-brand-green font-semibold text-sm">
                  💡 Usuários economizam em média R$ 847/mês identificando vazamentos financeiros
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-brand-green hover:bg-brand-green/90 text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
                onClick={handleQueroMeOrganizar}
              >
                Quero me organizar agora
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-medium px-8 py-4 rounded-lg transition-all duration-200"
                onClick={() => scrollToSection('como-funciona')}
              >
                Como funciona
              </Button>
            </div>
          </div>

          {/* Right Column - Visual WhatsApp Demo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm animate-fade-in">
              {/* Phone mockup */}
              <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* WhatsApp header */}
                  <div className="bg-brand-green p-4 text-white">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <DollarSign className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold">ZapControlA</h3>
                        <p className="text-sm opacity-90">online</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* WhatsApp messages */}
                  <div className="p-4 h-64 space-y-3 bg-gray-50">
                    <div className="bg-white p-3 rounded-lg max-w-[80%] shadow-sm">
                      <p className="text-sm">gastei 45 reais no mercado</p>
                    </div>
                    <div className="bg-brand-green text-white p-3 rounded-lg max-w-[80%] ml-auto shadow-sm">
                      <p className="text-sm">✅ Registrado! Categoria: Alimentação</p>
                      <p className="text-xs opacity-90 mt-1">Saldo: R$ 2.405</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg max-w-[80%] shadow-sm">
                      <p className="text-sm">paguei conta de luz 120</p>
                    </div>
                    <div className="bg-brand-green text-white p-3 rounded-lg max-w-[80%] ml-auto shadow-sm">
                      <p className="text-sm">💡 Salvo! Próxima conta: 15/Nov</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 bg-brand-green text-white p-3 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold">R$ 847</div>
                  <div className="text-xs opacity-90">economia/mês</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
