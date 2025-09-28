
import { Card } from "@/components/ui/card";
import { 
  Smartphone, 
  Layers, 
  Brain, 
  PieChart, 
  AlertTriangle, 
  Shield 
} from "lucide-react";
import React from "react";

const Recursos = () => {
  const recursos = [
    {
      icon: Smartphone,
      title: "Zero esforço",
      description: "Sem planilhas complexas"
    },
    {
      icon: Layers,
      title: "Direto no WhatsApp",
      description: "App que você já usa"
    },
    {
      icon: Brain,
      title: "IA Inteligente",
      description: "Categoriza automaticamente"  
    },
    {
      icon: PieChart,
      title: "Lembretes automáticos",
      description: "Nunca mais pague multa"
    },
    {
      icon: AlertTriangle,
      title: "Relatórios visuais",
      description: "Gráficos simples e claros"
    },
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Dados protegidos"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-brand-light-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-inter font-bold text-3xl lg:text-4xl text-gray-900">
            Por que ZapControlA?
          </h2>
          <p className="font-inter text-lg text-brand-gray max-w-xl mx-auto">
            Benefícios que fazem a diferença ✨
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {recursos.map((recurso, idx) => (
            <Card key={idx} className="flex flex-col items-center p-6 text-center shadow-md">
              {React.createElement(recurso.icon, { className: "h-10 w-10 mb-4 text-brand-primary" })}
              <h3 className="text-lg font-semibold mb-2">{recurso.title}</h3>
              <p className="text-gray-600">{recurso.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recursos;
