import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, CheckCheck } from "lucide-react";

const WhatsAppDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const conversationSteps = [
    {
      type: "user",
      message: "Oi! Gastei R$ 45 no almoço hoje",
      time: "14:23"
    },
    {
      type: "bot",
      message: "✅ Registrado! R$ 45,00 em Alimentação.\n\nSeu gasto com alimentação este mês: R$ 892,00\nOrçamento: R$ 1.200,00\n\n📊 Você ainda tem R$ 308,00 disponíveis para alimentação.",
      time: "14:23"
    },
    {
      type: "user",
      message: "Nossa, já gastei quase tudo em alimentação!",
      time: "14:24"
    },
    {
      type: "bot",
      message: "💡 Detectei que você está gastando 25% mais que o normal com delivery!\n\n📈 Sugestão: Que tal cozinhar mais em casa nos próximos dias? Você pode economizar até R$ 200 este mês.\n\nQuer que eu crie um lembrete para te ajudar?",
      time: "14:24"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentStep < conversationSteps.length) {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setCurrentStep(prev => prev + 1);
        }, 1500);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [currentStep]);

  const resetDemo = () => {
    setCurrentStep(0);
    setIsTyping(false);
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-inter font-bold text-3xl lg:text-4xl text-gray-900">
            📱 Veja como é simples na prática
          </h2>
          <p className="font-inter text-lg text-brand-gray max-w-2xl mx-auto">
            Uma conversa natural no WhatsApp que revoluciona sua relação com o dinheiro. A IA entende tudo e te ajuda a tomar decisões inteligentes.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
            {/* WhatsApp Header */}
            <div className="bg-brand-green p-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">ZapControlA</h3>
                  <p className="text-xs opacity-90">online</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-3 min-h-[400px] max-h-[400px] overflow-y-auto bg-gray-100">
              {conversationSteps.slice(0, currentStep).map((step, index) => (
                <div
                  key={index}
                  className={`flex ${step.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      step.type === 'user'
                        ? 'bg-brand-green text-white rounded-br-sm'
                        : 'bg-white border border-gray-200 text-gray-900 rounded-bl-sm'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{step.message}</p>
                    <div className={`flex items-center justify-end mt-1 space-x-1 ${
                      step.type === 'user' ? 'text-white/70' : 'text-gray-500'
                    }`}>
                      <span className="text-xs">{step.time}</span>
                      {step.type === 'user' && <CheckCheck className="w-3 h-3" />}
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 text-gray-900 rounded-lg rounded-bl-sm p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input area */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                  <span className="text-gray-500 text-sm">Digite uma mensagem...</span>
                </div>
                <Button size="sm" className="rounded-full w-10 h-10 p-0 bg-brand-green hover:bg-brand-green/90">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>

          <div className="text-center mt-6">
            <Button 
              onClick={resetDemo}
              variant="outline"
              className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
            >
              🔄 Ver demonstração novamente
            </Button>
          </div>
        </div>

        {/* Features highlight */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Card className="p-6 text-center bg-white border-brand-green/20">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="font-semibold text-gray-900 mb-2">IA Inteligente</h3>
            <p className="text-sm text-brand-gray">Entende contexto e dá sugestões personalizadas</p>
          </Card>
          <Card className="p-6 text-center bg-white border-brand-green/20">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-gray-900 mb-2">Instantâneo</h3>
            <p className="text-sm text-brand-gray">Respostas em segundos, 24 horas por dia</p>
          </Card>
          <Card className="p-6 text-center bg-white border-brand-green/20">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-semibold text-gray-900 mb-2">Relatórios Automáticos</h3>
            <p className="text-sm text-brand-gray">Gráficos e insights sem você pedir</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppDemo;