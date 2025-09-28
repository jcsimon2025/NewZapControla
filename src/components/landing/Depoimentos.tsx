
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Depoimentos = () => {
  const depoimentos = [
    {
      nome: "Maria Silva",
      cidade: "Autônoma",
      foto: "/lovable-uploads/9af179ff-e49a-47e8-b495-fbbc46ccb84d.png",
      texto: "Economizei R$ 800 em 2 meses! Agora sei onde vai cada centavo.",
      estrelas: 5,
      economia: "R$ 800"
    },
    {
      nome: "João Santos",
      cidade: "Funcionário Público", 
      foto: "/lovable-uploads/9af179ff-e49a-47e8-b495-fbbc46ccb84d.png",
      texto: "Quitei o cartão em 4 meses. Nunca mais esqueci contas!",
      estrelas: 5,
      economia: "R$ 1.200"
    },
    {
      nome: "Ana Costa",
      cidade: "Professora",
      foto: "/lovable-uploads/9af179ff-e49a-47e8-b495-fbbc46ccb84d.png",
      texto: "Super simples pelo WhatsApp. R$ 1.000 economizados!",
      estrelas: 5,
      economia: "R$ 1.000"
    }
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getGradientClass = (index: number) => {
    const gradients = [
      "bg-gradient-to-br from-blue-500 to-blue-600",
      "bg-gradient-to-br from-green-500 to-green-600", 
      "bg-gradient-to-br from-purple-500 to-purple-600"
    ];
    return gradients[index % gradients.length];
  };

  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-inter font-bold text-3xl lg:text-4xl text-gray-900">
            Usuários satisfeitos
          </h2>
          <p className="font-inter text-lg text-brand-gray max-w-xl mx-auto">
            +10.000 pessoas transformaram suas finanças ⭐
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {depoimentos.map((depoimento, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-brand-light-gray">
              <div className="space-y-4">
                {/* Stars + Economia */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {renderStars(depoimento.estrelas)}
                  </div>
                  <div className="bg-brand-green text-white px-3 py-1 rounded-full text-sm font-bold">
                    {depoimento.economia}
                  </div>
                </div>

                {/* User Info */}
                <div className="flex items-center space-x-3">
                  <Avatar className="w-16 h-16">
                    <AvatarImage 
                      src={depoimento.foto} 
                      alt={depoimento.nome}
                    />
                    <AvatarFallback className={`${getGradientClass(index)} text-white font-bold text-lg`}>
                      {getInitials(depoimento.nome)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-inter font-semibold text-gray-900">
                      {depoimento.nome}
                    </p>
                    <p className="text-sm text-brand-gray">
                      {depoimento.cidade}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-brand-gray leading-relaxed text-sm italic">
                  "{depoimento.texto}"
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
