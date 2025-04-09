
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/lovable-uploads/fb3d45bd-5791-467e-b7e9-67e6de2c0f9c.png')", 
          filter: "brightness(0.7)"
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 md:px-8">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            APEX
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Detaylı Araç Bakım ve Restorasyon Merkezi
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#services" className="button-primary">
              Hizmetlerimiz
            </a>
            <a href="#contact" className="button-outline border-white text-white hover:bg-white/10">
              İletişime Geçin
            </a>
          </div>
          
          <div className="mt-12 animate-bounce">
            <a href="#about" className="inline-block text-white">
              <div className="flex flex-col items-center gap-2">
                <span>Daha Fazla Keşfet</span>
                <ArrowRight className="h-5 w-5" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
