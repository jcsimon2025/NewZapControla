import { Card } from "@/components/ui/card";
import { X, Check, TrendingUp, TrendingDown } from "lucide-react";

const AntesDepois = () => {
  const comparisons = [
    {
      antes: "Sem controle dos gastos",
      depois: "Sei onde vai cada centavo",
      icon: "💰"
    },
    {
      antes: "Pagava multas por esquecimento",
      depois: "Lembretes automáticos",
      icon: "📅"
    },
    {
      antes: "Não conseguia guardar",
      depois: "R$ 4.500 para viagem",
      icon: "✈️"
    },
    {
      antes: "Conflitos sobre dinheiro",
      depois: "Planejamento em família",
      icon: "💑"
    }
  ];

  const transformacoes = [
    {
      nome: "Maria Silva",
      profissao: "Professora",
      periodo: "3 meses",
      economia: "R$ 1.200",
      resultado: "Quitou o cartão de crédito e criou reserva de emergência",
      avatar: "👩‍🏫"
    },
    {
      nome: "João Santos",
      profissao: "Vendedor",
      periodo: "6 meses",
      economia: "R$ 2.800",
      resultado: "Comprou a moto zero sem financiamento",
      avatar: "👨‍💼"
    },
    {
      nome: "Ana Costa",
      profissao: "Enfermeira",
      periodo: "4 meses",
      economia: "R$ 1.850",
      resultado: "Conseguiu dar entrada no apartamento próprio",
      avatar: "👩‍⚕️"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-green/5 to-blue-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-inter font-bold text-3xl lg:text-4xl text-gray-900">
            🎯 Transformações reais
          </h2>
          <p className="font-inter text-lg text-brand-gray max-w-xl mx-auto">
            Veja os resultados em poucos meses ✨
          </p>
        </div>

        {/* Before vs After */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-red-50 border-2 border-red-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                <X className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-red-700">ANTES do ZapControlA</h3>
                <p className="text-red-600">Caos financeiro total</p>
              </div>
            </div>
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-2xl">{item.icon}</div>
                  <p className="text-gray-700 font-medium">{item.antes}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-red-100 rounded-lg">
              <div className="flex items-center text-red-700">
                <TrendingDown className="w-5 h-5 mr-2" />
                <span className="font-semibold">Resultado: Estresse e dívidas crescentes</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-green-50 border-2 border-brand-green/30">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center mr-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-brand-green">DEPOIS do ZapControlA</h3>
                <p className="text-green-600">Controle total e tranquilidade</p>
              </div>
            </div>
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-2xl">{item.icon}</div>
                  <p className="text-gray-700 font-medium">{item.depois}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-green-100 rounded-lg">
              <div className="flex items-center text-brand-green">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span className="font-semibold">Resultado: Liberdade financeira e paz de espírito</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Success stories */}
        <div className="text-center mb-8">
          <h3 className="font-inter font-bold text-2xl text-gray-900 mb-4">
            💪 Histórias de sucesso em números
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {transformacoes.map((historia, index) => (
            <Card key={index} className="p-6 bg-white border-2 border-brand-green/20 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{historia.avatar}</div>
                <h4 className="font-semibold text-gray-900">{historia.nome}</h4>
                <p className="text-sm text-brand-gray">{historia.profissao}</p>
              </div>
              
              <div className="space-y-3">
                <div className="bg-brand-green/10 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-brand-green">{historia.economia}</div>
                  <div className="text-sm text-gray-600">economizados em {historia.periodo}</div>
                </div>
                
                <p className="text-sm text-gray-700 text-center leading-relaxed">
                  "{historia.resultado}"
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <Card className="p-8 max-w-2xl mx-auto bg-gradient-to-r from-brand-green to-green-600 text-white border-0">
            <h3 className="font-bold text-2xl mb-4">🚀 Você pode ser o próximo!</h3>
            <p className="text-lg opacity-90 mb-6">
              Junte-se a mais de 15.000 pessoas que já transformaram suas finanças com o ZapControlA
            </p>
            <div className="text-3xl font-bold mb-2">⏰ Sua transformação começa HOJE</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AntesDepois;