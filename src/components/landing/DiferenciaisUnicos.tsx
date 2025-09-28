
import { Card } from "@/components/ui/card";
import { Palette, Zap, MessageCircle, ShieldCheck } from "lucide-react";
import React from "react";

const DiferenciaisUnicos = () => {
  const diferenciais = [
    {
      icon: Palette,
      title: "Design Top",
      description: "Interface moderna e intuitiva"
    },
    {
      icon: Zap,
      title: "Tecnologia IA",
      description: "Algoritmos que aprendem com você"
    },
    {
      icon: MessageCircle,
      title: "100% WhatsApp",
      description: "Sem instalar apps adicionais"
    },
    {
      icon: ShieldCheck,
      title: "Super Seguro",
      description: "Criptografia de ponta a ponta"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-brand-light-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-inter font-bold text-3xl lg:text-4xl text-gray-900">
            Nossos diferenciais
          </h2>
          <p className="font-inter text-lg text-brand-gray max-w-xl mx-auto">
            O que nos torna únicos 🌟
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {diferenciais.map((diferencial, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-brand-green/10 rounded-2xl flex items-center justify-center mx-auto">
                  {React.createElement(diferencial.icon, { className: "w-10 h-10 text-brand-green" })}
                </div>
                <div className="space-y-2">
                  <h3 className="font-inter font-semibold text-lg text-gray-900">
                    {diferencial.title}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    {diferencial.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisUnicos;
