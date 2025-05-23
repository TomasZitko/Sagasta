import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const news = [
  {
    title: "Nádraží v Českých Budějovicích, jehož rekonstrukci SAGASTA projektovala, obdrželo prestižní cenu Památka roku",
    excerpt: "Historická budova nádraží v Českých Budějovicích získala ocenění v soutěži Památka roku 2024 za citlivou rekonstrukci, na které se naše společnost významně podílela.",
    date: "28. března 2025",
    image: "/News 1.jpeg",
    tags: ["Projekty", "Ocenění"],
    popup: {
      title: "Nádraží v Českých Budějovicích získalo ocenění Památka roku",
      client: "Správa železnic",
      year: "2024",
      description: "Rekonstrukce historické budovy nádraží v Českých Budějovicích, na jejímž projektování se podílela společnost SAGASTA, byla oceněna prestižním titulem Památka roku 2024. Ocenění uděluje Sdružení historických sídel Čech, Moravy a Slezska za nejlepší projekt a realizaci obnovy budovy či souboru staveb. Projekt vynikal citlivým přístupem k historickým prvkům při současné modernizaci prostor pro cestující."
    }
  },
  {
    title: "SAGASTA podporuje rozvoj železniční dopravy jako sponzor konference Železnice Pardubice 2025",
    excerpt: "Naše společnost se stala hlavním sponzorem významné konference o budoucnosti železniční dopravy v České republice.",
    date: "15. května 2025",
    image: "/News 2.jpeg",
    tags: ["Konference", "Železnice"],
    popup: {
      title: "Sponzorství konference Železnice Pardubice 2025",
      year: "2025",
      description: "Společnost SAGASTA se stala hlavním sponzorem odborné konference Železnice Pardubice 2025, která se zabývá budoucností železniční dopravy a infrastruktury v České republice. Konference přináší prostor pro odbornou diskuzi o klíčových projektech včetně vysokorychlostních tratí, digitalizace železnice a modernizace stávající infrastruktury. Jako přední projekční společnost v oblasti železničních staveb jsme hrdí na to, že můžeme podpořit platformu pro výměnu znalostí a zkušeností mezi odborníky z celého sektoru."
    }
  },
  {
    title: "Dnes začala rekonstrukce dopravny Dolní Polubný na historické ozubnicové trati",
    excerpt: "SAGASTA se podílí na významném projektu obnovy unikátní historické ozubnicové železnice, která je technickou památkou.",
    date: "12. dubna 2025",
    image: "/News 3.jpg",
    tags: ["Projekty", "Železnice"],
    popup: {
      title: "Rekonstrukce dopravny Dolní Polubný",
      client: "Správa železnic",
      year: "2025",
      description: "Dnes byla oficiálně zahájena rekonstrukce dopravny Dolní Polubný na unikátní ozubnicové železnici Tanvald-Harrachov. Naše společnost SAGASTA zpracovala kompletní projektovou dokumentaci pro tuto technicky náročnou rekonstrukci, která musí respektovat historický charakter trati. Projekt zahrnuje modernizaci zabezpečovacího zařízení, rekonstrukci kolejiště a obnovu historické výpravní budovy. Ozubnicová trať, která překonává mimořádné stoupání, je technickou památkou a jednou z mála zachovaných ozubnicových železnic ve střední Evropě."
    }
  },
  {
    title: "Praha využije geotermální energii z metra D, za myšlenkou stojí SAGASTA",
    excerpt: "Inovativní projekt využití geotermální energie z nové linky metra D byl schválen městskou radou.",
    date: "28. dubna 2025",
    image: "/projects/Metro-D.jpeg",
    tags: ["Metro", "Energie"]
  },
  {
    title: "SAGASTA s.r.o. se stala novým partnerem projektu VRT CZ",
    excerpt: "Naše inženýrská společnost rozšiřuje své portfolio v oblasti vysokorychlostních železnic jako oficiální partner českého programu VRT.",
    date: "3. února 2025",
    image: "/News 4.jpeg",
    tags: ["Partnerství", "Železnice"],
    popup: {
      title: "Partnerství s projektem VRT CZ",
      year: "2025",
      description: "Společnost SAGASTA s.r.o. se oficálně stala partnerem strategického projektu výstavby vysokorychlostních tratí v České republice. Jako uznávaný odborník v oblasti železničního projektování bude SAGASTA poskytovat konzultační služby a technickou expertizu při přípravě vybraných úseků VRT. Projekt vysokorychlostních tratí představuje největší investici do české dopravní infrastruktury v moderní historii a přinese revoluci v železniční dopravě. Naše společnost je hrdá na to, že může být součástí této významné transformace české železnice."
    }
  },
  {
    title: "SAGASTA prezentovala digitální dvojče železničního uzlu na konferenci BIM ve stavebnictví",
    excerpt: "Naši specialisté představili pokročilé řešení pro modelování komplexních železničních staveb s využitím metodiky BIM.",
    date: "8. prosince 2024",
    image: "/News 5.jpg",
    tags: ["Konference", "Digitalizace"],
    popup: {
      title: "Digitální dvojče železničního uzlu",
      year: "2024",
      description: "Společnost SAGASTA se zúčastnila mezinárodní konference BIM ve stavebnictví, kde představila inovativní přístup k tvorbě digitálního dvojčete rozsáhlého železničního uzlu. Náš tým specialistů vyvinul metodiku pro komplexní 3D modelování zahrnující nejen kolejiště a stavební objekty, ale také technologické systémy včetně zabezpečovacího zařízení. Prezentované řešení umožňuje efektivní koordinaci jednotlivých profesí, detekci kolizí a simulaci provozu ještě před zahájením výstavby. Digitální dvojče dále slouží pro správu a údržbu infrastruktury po celou dobu její životnosti. Projekt vzbudil značný zájem odborné veřejnosti a potvrdil vedoucí postavení společnosti SAGASTA v oblasti digitalizace železničního stavitelství."
    }
  }
];

const NewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedNews, setSelectedNews] = useState(null);
  
  const nextNews = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex >= news.length - 3 ? 0 : prevIndex + 3
    );
  };

  const previousNews = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? news.length - 3 : prevIndex - 3
    );
  };

  const openPopup = (newsItem) => {
    setSelectedNews(newsItem);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setSelectedNews(null);
    document.body.style.overflow = 'auto';
  };

  const visibleNews = news.slice(currentIndex, currentIndex + 3);
  const totalGroups = Math.ceil(news.length / 3);
  const currentGroup = Math.floor(currentIndex / 3);

  const controls = useAnimation();
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start('visible');
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.unobserve(node);
  }, [controls]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.4,0,0.2,1] },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.5, ease: [0.4,0,0.2,1] },
    }),
  };

  return (
    <motion.section
      id="aktuality"
      className="section-padding section-alt"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4,0,0.2,1] } } }}
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-large text-sagasta-navy mb-4">Aktuality</h2>
          <div className="h-1 w-16 bg-sagasta-navy mb-6 mx-auto"></div>
          <p className="max-w-3xl mx-auto text-sagasta-dark-gray">
            Sledujte nejnovější zprávy a události ze světa SAGASTA
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button 
            onClick={previousNews}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 group"
            aria-label="Předchozí novinky"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-sagasta-navy group-hover:-translate-x-1 transition-transform"
            >
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>

          <button 
            onClick={nextNews}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 group"
            aria-label="Další novinky"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-sagasta-navy group-hover:translate-x-1 transition-transform"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>

          {/* News Cards Grid with Slide Animation */}
          <div className="relative min-h-[340px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "tween" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
            {visibleNews.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                            className="text-sm bg-gray-100 text-sagasta-navy px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-sagasta-navy line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sagasta-dark-gray mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                        <span className="text-sm text-sagasta-navy">{item.date}</span>
                        <button 
                          onClick={() => openPopup(item)}
                          className="text-sagasta-navy hover:text-gray-600 transition-colors"
                        >
                      Číst více →
                    </button>
                  </div>
                </div>
              </div>
            ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(totalGroups)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 3)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentGroup === index 
                    ? 'bg-sagasta-navy w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Přejít na skupinu ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* News Popup Modal */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button 
                onClick={closePopup}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-sagasta-navy transition-all z-10"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
              <div className="h-64 overflow-hidden">
                <img 
                  src={selectedNews.image} 
                  alt={selectedNews.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedNews.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-sm bg-gray-100 text-sagasta-navy px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-sagasta-navy">
                {selectedNews.popup?.title || selectedNews.title}
              </h3>
              
              <p className="text-sm text-sagasta-navy mb-6">{selectedNews.date}</p>
              
              {selectedNews.popup?.client && (
                <div className="mb-4">
                  <span className="font-semibold">Klient: </span>
                  <span>{selectedNews.popup.client}</span>
                </div>
              )}
              
              {selectedNews.popup?.year && (
                <div className="mb-6">
                  <span className="font-semibold">Rok: </span>
                  <span>{selectedNews.popup.year}</span>
                </div>
              )}
              
              <div className="prose max-w-none text-sagasta-dark-gray">
                <p>{selectedNews.popup?.description || selectedNews.excerpt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default NewsSection;
