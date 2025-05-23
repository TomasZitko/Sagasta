import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.unobserve(node);
  }, [controls]);

  return (
    <motion.section
      id="about"
      className="section-padding section-main"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4,0,0.2,1] } } }}
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-large text-sagasta-navy mb-4">Společnost SAGASTA s.r.o.</h2>
          <p className="max-w-3xl mx-auto text-sagasta-dark-gray">
            je nezávislá inženýrská konzultační firma. Profesní aktivita je zaměřena na různé stavební inženýrské oblasti.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="heading-medium text-sagasta-navy mb-6">Náš příběh</h3>
            <p className="mb-4">
              Společnost SAGASTA s.r.o. je nezávislá inženýrská konzultační firma založená v roce 2015. 
              Zaměřujeme se především na dopravní inženýrství a další stavební obory, jako je územní 
              plánování či projektování pozemních staveb.
            </p>
            <p className="mb-6">
              Projektujeme budoucnost na pevných základech. Náš tým profesionálů má kvalifikaci a autorizaci pro 
              železniční stavby, silniční stavby, mostní konstrukce, pozemní stavby a vodohospodářské stavby.
            </p>
            
            {/* Updated symmetrical stats bubbles */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-sagasta-light-blue/20 flex items-center justify-center text-sagasta-blue mb-2">
                  <span className="text-xl font-bold">10+</span>
                </div>
                <p className="font-semibold text-sm">let zkušeností</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-sagasta-light-blue/20 flex items-center justify-center text-sagasta-blue mb-2">
                  <span className="text-xl font-bold">1000+</span>
                </div>
                <p className="font-semibold text-sm">projektů</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-sagasta-light-blue/20 flex items-center justify-center text-sagasta-blue mb-2">
                  <span className="text-xl font-bold">100+</span>
                </div>
                <p className="font-semibold text-sm">inženýrů</p>
              </div>
            </div>
            
            {/* Fixed button with correct route */}
            <div className="mt-8">
              <Link to="/o-spolecnosti" className="inline-flex items-center px-6 py-3 bg-sagasta-blue text-white font-medium rounded-lg transition-all duration-300 hover:bg-sagasta-navy hover:shadow-lg group">
                <span>Více o společnosti</span>
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              {/* Placeholder */}
              <div 
                className={`absolute inset-0 bg-gray-100 flex items-center justify-center transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <div className="text-gray-500 animate-pulse">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="48" 
                    height="48" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="M21 15l-5-5L5 21"/>
                  </svg>
                </div>
              </div>
              
              {/* Main Image */}
              <div className="relative">
                <img 
                  src="/Sagasta-Main-Office.jpg" 
                  alt="Hlavní sídlo společnosti SAGASTA v Praze" 
                  className={`w-full h-[400px] object-cover transition-opacity duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
                {/* Logo Overlay - keep only text and underline, remove blue gradient */}
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-white text-2xl font-bold tracking-wider drop-shadow-lg">SAGASTA</h4>
                  <div className="h-0.5 w-12 bg-white mt-2"></div>
                </div>
              </div>

              {/* Error State */}
              {imageError && (
                <div className="absolute inset-0 bg-gray-100" />
              )}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-24">
          <h3 className="heading-medium text-center text-sagasta-navy mb-12">Naše hodnoty</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sagasta-navy"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Kvalita</h4>
              <p>
                Usilujeme o dokonalost ve všem, co děláme, od úvodní konzultace až po dokončení projektu.
              </p>
            </div>
            
            <div className="card text-center p-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sagasta-navy"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Spolehlivost</h4>
              <p>
                Naši klienti nám důvěřují, protože plníme své sliby s konzistentností a odhodláním.
              </p>
            </div>
            
            <div className="card text-center p-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sagasta-navy"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Inovace</h4>
              <p>
                Přijímáme inovativní přístupy k efektivnímu řešení složitých inženýrských výzev.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
