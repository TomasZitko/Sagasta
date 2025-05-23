import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-[#139EB7] text-white">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('/hero-new.jpg')",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#139EB7]/90 to-[#139EB7]/70 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-xl mb-6 animate-fade-in">
            Projekční, inženýrská a konzultační společnost
          </h1>
          <p className="text-xl mb-8 text-white/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Společnost SAGASTA s.r.o. je nezávislá inženýrská konzultační firma.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a href="#services" className="btn-primary bg-white text-[#139EB7] hover:bg-white/90">Naše služby</a>
            <a href="#projects" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">Naše realizace</a>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#ffffff">
          <path d="M0,96L80,85.3C160,75,320,53,480,48C640,43,800,53,960,58.7C1120,64,1280,64,1360,64L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
