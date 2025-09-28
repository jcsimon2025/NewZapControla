
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemasFinanceiros from "@/components/landing/ProblemasFinanceiros";
import ComoFunciona from "@/components/landing/ComoFunciona";
import WhatsAppDemo from "@/components/landing/WhatsAppDemo";
import Recursos from "@/components/landing/Recursos";
import PainelImpressiona from "@/components/landing/PainelImpressiona";
import AntesDepois from "@/components/landing/AntesDepois";
import DiferenciaisUnicos from "@/components/landing/DiferenciaisUnicos";
import Depoimentos from "@/components/landing/Depoimentos";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <HeroSection />
      <ProblemasFinanceiros />
      <ComoFunciona />
      <WhatsAppDemo />
      <Recursos />
      <PainelImpressiona />
      <AntesDepois />
      <DiferenciaisUnicos />
      <Depoimentos />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
