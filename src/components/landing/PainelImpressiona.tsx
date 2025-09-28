
import { Card } from "@/components/ui/card";
import { ArrowUp, ArrowDown, PieChart, TrendingUp, Wallet, CreditCard } from "lucide-react";

const PainelImpressiona = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-inter font-bold text-3xl lg:text-4xl text-gray-900">
            Painel inteligente
          </h2>
          <p className="font-inter text-lg text-brand-gray max-w-xl mx-auto">
            Tudo organizado automaticamente ⚡
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Dashboard Card */}
          <Card className="p-8 bg-gradient-to-br from-white to-brand-light-gray shadow-2xl border-0 rounded-2xl mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Available Balance */}
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Wallet className="w-6 h-6 text-brand-green" />
                </div>
                <p className="text-sm text-brand-gray">Saldo Disponível</p>
                <p className="font-inter font-bold text-3xl text-gray-900">R$ 4.267</p>
              </div>

              {/* Income */}
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ArrowUp className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-sm text-brand-gray">Entradas</p>
                <p className="font-inter font-bold text-3xl text-green-600">R$ 5.200</p>
              </div>

              {/* Expenses */}
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ArrowDown className="w-6 h-6 text-red-600" />
                </div>
                <p className="text-sm text-brand-gray">Saídas</p>
                <p className="font-inter font-bold text-3xl text-red-600">R$ 933</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-inter font-semibold text-lg text-gray-900">Controle de Gastos</h3>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-brand-green" />
                  <span className="font-semibold text-brand-green">82%</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-brand-gray">Alimentação</span>
                  <span className="font-medium text-gray-900">R$ 450</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-brand-gray">Transporte</span>
                  <span className="font-medium text-gray-900">R$ 280</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-brand-gray">Lazer</span>
                  <span className="font-medium text-gray-900">R$ 203</span>
                </div>
              </div>
            </div>
          </Card>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-2">
            <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto">
              <PieChart className="w-6 h-6 text-brand-green" />
            </div>
            <p className="font-inter font-bold text-2xl text-gray-900">100%</p>
            <p className="text-sm text-brand-gray">Via WhatsApp</p>
          </div>
          <div className="space-y-2">
            <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto">
              <CreditCard className="w-6 h-6 text-brand-green" />
            </div>
            <p className="font-inter font-bold text-2xl text-gray-900">IA</p>
            <p className="text-sm text-brand-gray">Categorização Automática</p>
          </div>
          <div className="space-y-2">
            <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto">
              <TrendingUp className="w-6 h-6 text-brand-green" />
            </div>
            <p className="font-inter font-bold text-2xl text-gray-900">24/7</p>
            <p className="text-sm text-brand-gray">Sempre Disponível</p>
          </div>
          <div className="space-y-2">
            <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto">
              <Wallet className="w-6 h-6 text-brand-green" />
            </div>
            <p className="font-inter font-bold text-2xl text-gray-900">10.000+</p>
            <p className="text-sm text-brand-gray">Usuários Ativos</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default PainelImpressiona;
