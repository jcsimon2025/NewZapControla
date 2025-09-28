
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      pergunta: "📱 Como funciona?",
      resposta: "Envie mensagens no WhatsApp como 'gastei 50 reais no mercado' e nossa IA organiza tudo automaticamente!"
    },
    {
      pergunta: "📲 Preciso instalar app?", 
      resposta: "Não! Funciona 100% dentro do WhatsApp que você já usa."
    },
    {
      pergunta: "🔒 Meus dados ficam seguros?",
      resposta: "Sim! Criptografia de ponta a ponta e máxima segurança."
    },
    {
      pergunta: "💳 Aceita Pix, cartão?",
      resposta: "Sim, o pagamento pode ser realizado por Pix e cartão crédito!."
    },
    {
      pergunta: "❌ Posso cancelar?",
      resposta: "Claro! Cancele quando quiser, sem burocracias."
    }
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-inter font-bold text-3xl lg:text-4xl text-gray-900">
            Dúvidas frequentes
          </h2>
          <p className="font-inter text-lg text-brand-gray max-w-xl mx-auto">
            As 5 principais dúvidas ❓
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 py-2 bg-white shadow-sm"
              >
                <AccordionTrigger className="font-inter font-medium text-gray-900 hover:text-brand-green transition-colors">
                  {faq.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray leading-relaxed">
                  {faq.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
