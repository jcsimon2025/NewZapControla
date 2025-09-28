
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Settings, Bell, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ComoFunciona = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: MessageCircle,
      title: "1. Envie mensagens simples",
      description: "Digite no WhatsApp: \"gastei 50 reais no mercado\" ou \"paguei conta de luz 120 reais\""
    },
    {
      icon: Settings,
      title: "2. IA organiza automaticamente", 
      description: "Nossa inteligência artificial registra, categoriza e organiza tudo sem você precisar fazer nada"
    },
    {
      icon: BarChart3,
      title: "3. Visualize no painel web",
      description: "Acompanhe gráficos claros, relatórios detalhados e tenha controle total das suas finanças"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="como-funciona" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-inter font-bold text-3xl lg:text-4xl text-gray-900">
            Como funciona
          </h2>
          <p className="font-inter text-lg text-brand-gray max-w-xl mx-auto">
            3 passos simples ⚡
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-gradient-to-br from-white to-brand-light-gray">
              {/* Phone mockup para cada step */}
              <div className="relative mb-6">
                <div className="w-24 h-40 bg-gray-900 rounded-2xl mx-auto p-1">
                  <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                    <div className="bg-brand-green h-8 flex items-center justify-center">
                      <step.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="p-2 flex-1 flex items-center justify-center">
                      <div className="text-xs text-center text-brand-gray">
                        {index === 0 && "💬 \"gastei 50\""}
                        {index === 1 && "🤖 IA organizando"}
                        {index === 2 && "📊 Relatórios"}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="font-inter font-semibold text-base text-gray-900 mb-2">
                {step.title.split('. ')[1]}
              </h3>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-brand-green hover:bg-brand-green/90 text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
            onClick={() => navigate('/plano')}
          >
            Quero me organizar agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
