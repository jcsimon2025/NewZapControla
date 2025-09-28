import { Card } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, CreditCard, Calculator } from "lucide-react";

const ProblemasFinanceiros = () => {
  const problemas = [
    {
      icon: AlertTriangle,
      stat: "73%",
      title: "Gastam mais do que ganham",
      description: "Não sabem para onde vai o dinheiro e sempre ficam no vermelho no final do mês",
      emoji: "😰"
    },
    {
      icon: TrendingDown,
      stat: "85%",
      title: "Não têm reserva de emergência",
      description: "Qualquer imprevisto vira uma bola de neve financeira impossível de controlar",
      emoji: "📉"
    },
    {
      icon: CreditCard,
      stat: "67%",
      title: "Pagam juros desnecessários",
      description: "Esquecem contas, pagam multas e acabam no cartão de crédito com juros altos",
      emoji: "💳"
    },
    {
      icon: Calculator,
      stat: "91%",
      title: "Nunca fizeram um orçamento",
      description: "Vivem no 'achismo' financeiro sem saber quanto podem gastar em cada categoria",
      emoji: "🧮"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-red-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-inter font-bold text-3xl lg:text-4xl text-gray-900">
            😱 A realidade dos brasileiros
          </h2>
          <p className="font-inter text-lg text-brand-gray max-w-2xl mx-auto">
            <strong>Você se identifica com algum problema?</strong>
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {problemas.map((problema, index) => (
            <Card key={index} className="p-4 text-center border-2 border-red-100 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl mb-3">{problema.emoji}</div>
              <div className="text-2xl lg:text-3xl font-bold text-red-600 mb-2">{problema.stat}</div>
              <h3 className="font-inter font-semibold text-sm lg:text-base text-gray-900">
                {problema.title}
              </h3>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="p-6 max-w-3xl mx-auto bg-gradient-to-r from-red-500 to-red-600 text-white border-0">
            <h3 className="font-inter font-bold text-xl lg:text-2xl mb-4">
              🚨 Custo de não se organizar
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl lg:text-3xl font-bold mb-1">R$ 3.247</div>
                <div className="text-xs lg:text-sm opacity-90">perdidos/ano</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold mb-1">68%</div>
                <div className="text-xs lg:text-sm opacity-90">sonhos não realizados</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold mb-1">+5 anos</div>
                <div className="text-xs lg:text-sm opacity-90">para quitar dívidas</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemasFinanceiros;