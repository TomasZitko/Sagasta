import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const projectsList = [
  {
    title: "Železniční most ev. km 2,622 — Lužec nad Vltavou",
    description: "Jedná se o rekonstrukci původního železničního příhradového mostu přes plavební kanál Vraňany – Hořín. Původní most byl zcela odstraněn a nahrazen mostem novým.",
    images: ["/projects/Zl.jpg"],
    category: "Mosty",
    client: "Česká Republika – Ředitelství vodních cest ČR",
    year: 2022,
    projectProcessing: "SAGASTA s. r. o., Firesta, a. s.",
    projectImplementation: "Strabag Rail, a. s.",
    projectStage: "RDS",
    projectManager: "Ing. Jan Hamouz",
    challenge: "Rekonstrukce historického železničního mostu při zachování jeho funkce a zajištění dlouhodobé životnosti konstrukce v náročných podmínkách říčního prostředí.",
    solution: "Ten je tvořen železobetonovými opěrami, založenými na sloupech tryskové injektáže a na mikropilotách, a příhradovou ocelovou nosnou konstrukcí o rozpětí 29 m tvarově vycházející z původního provedení mostu. Nosná konstrukce je nově zdvižná, a to o cca 3,1 m, díky čemuž bude umožněn průjezd vysokých lodí (podjezdná výška 7 m). V krabicových opěrách se nachází technologické místnosti, v nichž jsou umístěna zařízení nutná pro provoz mostu."
  },
  {
    title: "I/29 most přes řeku Smutná, ev.č.29-009",
    description: "SO 201 – rekonstrukce klenbového silničního mostu přes vodoteč o třech polích o světlosti 6,31 m + 6,34 m + 6,31m. Celková dílka přemostění je 22,16 m. Rekonstrukce spočívala v sanaci kamenné spodní stavby a stávající nosné konstrukce, demolici stávající železobetonové rozšiřující desky, která byla nahrazena novou železobetonovou deskou. Na mostní objekt navazují nové gabionové zídky.",
    images: ["/projects/I29.jpg"],
    category: "Mosty",
    client: "Ředitelství silnic a dálnic",
    year: 2021,
    investmentCost: "9 797 110 Kč",
    projectProcessing: "2018",
    projectImplementation: "2020",
    projectStage: "DSP, PDPS",
    projectManager: "Ing. Vít Hoznour",
    challenge: "Návrh rekonstrukce silničního mostu na frekventované komunikaci s minimalizací dopadu na provoz a zajištění dostatečné kapacity pro budoucí nároky silniční dopravy.",
    solution: "Vypracovali jsme projekt, který zahrnoval posílení nosné konstrukce, kompletní výměnu mostního svršku a úpravu opěr. Navrhli jsme etapizaci výstavby umožňující částečný provoz během rekonstrukce a minimalizaci uzavírek."
  },
  {
    title: "I/20 a II/231 v Plzni, Plaská-Na Roudné-Chrástecká, 2. etapa",
    description: "SO 201: železniční most, nosná konstrukce o třech mostních otvorech s délkou přemostění 44,80 m je rámová integrovaná, desková se zabetonovanými svařovanými nosníky (ZBN), s horní mostovkou a s průběžným štěrkovým ložem. Rozpětí polí mostu je 16,5 + 13,0 + 16,5 = 46,0 m. SO 202 – železniční most o jednom mostním otvoru s délkou přemostění 19,80 m s rozpětím 21,0 m.",
    images: ["/projects/I20 Plzen/plzen.jpg", "/projects/I20 Plzen/plzen-2.jpg"],
    category: "Silniční infrastruktura",
    client: "Ředitelství silnic a dálnic",
    year: 2023,
    investmentCost: "SO 201 – 33 313 061 Kč, SO 202-14 745 819 Kč",
    projectProcessing: "PDPS – 10/2017, RDS – 01/2020",
    projectImplementation: "2020",
    projectStage: "PDPS, RDS",
    projectManager: "Ing. Zuzana Biela",
    challenge: "Návrh optimálního řešení dopravního uzlu v hustě zastavěné městské oblasti s vysokou intenzitou dopravy a nutností koordinace s městskou hromadnou dopravou.",
    solution: "Nosná konstrukce je vetknuta do pilířů, které tvoří šikmé rámové stojky se společným základem. Před pilíři je na nosné konstrukci kruhový náběh. Pilíře jsou situovány do středového ostrova kruhové křižovatky. Na opěrách je nosná konstrukce uložena na ozub. Opěry a pilíře jsou železobetonové založené hlubině na velkoprůměrových pilotách."
  },
  {
    title: "Výstavba odbočky Rajhrad",
    description: "Jedná se o stavbu nové odbočky tvořené 4ks výhybkami 1:14-760 na rychlost 80km/h. Úprava GPK kolejí byla upravena v délce cca 800m, traťová rychlost kolejí je 160km/h. Součástí stavby je úprava zabezpečovacího zařízení včetně systému ETCS, sdělovacího zařízení a silnoproudu.",
    images: ["/projects/railway-tracks.jpg", "/projects/Rajhrad/Rajhrad-2.jpeg"],
    category: "Železniční infrastruktura",
    client: "Správa železnic, státní organizace",
    year: 2022,
    investmentCost: "300 000 000 Kč",
    projectProcessing: "2017 - 2019",
    projectImplementation: "2021",
    projectStage: "ZP, DÚR, DUSP, PDPS, AD",
    projectManager: "Ing. Emil Špaček",
    challenge: "Návrh nové železniční odbočky v místě se složitými prostorovými a provozními podmínkami při zachování plynulosti železničního provozu během výstavby.",
    solution: "Dále je součástí úprava trakčního vedení v systému střídavé trakce 25kV 50Hz. V rámci stavby byla rekonstrukce stávající výpravní budova a výstavba nového technologického objektu pro umístění nové technologie pro napájení. Součástí stavby je nadjezd na místní komunikaci a mostní objekt."
  },
  {
    title: "Rekonstrukce výpravní budovy ŽST Plzeň-Jižní Předměstí",
    description: "Jedná se o rekonstrukci objektu stávající výpravní budovy.",
    images: ["/projects/Zst Plzen/zstp.jpg", "/projects/inside.png"],
    category: "Stavební inženýrství",
    client: "Správa železnic, státní organizace",
    year: 2023,
    projectProcessing: "2018, 2020-2021",
    projectImplementation: "2020-2024",
    projectStage: "DSP, PDPS",
    projectManager: "Ing. arch Vítězslav Glomb",
    challenge: "Modernizace historické budovy při zachování jejího charakteru a současném splnění současných standardů pro energetickou účinnost a bezbariérový přístup.",
    solution: "Vytvořili jsme projekt, který citlivě kombinuje obnovu historických prvků s moderními technologiemi. Navrhli jsme kompletní rekonstrukci vnitřních prostor, nové technické zázemí a úpravy exteriéru respektující původní architektonický výraz budovy."
  },
  {
    title: "Rekonstrukce výpravní budovy v ŽST Šternberk",
    description: "Projekt se týkal rekonstrukce stávající výpravní budovy v žst. Šternberk. Stávající objekt se nachází v km 115,785 – km 115,865 na trati 778 Olomouc – Šternberk – Šumperk. Dané nádraží je zařazeno do kategorie C dle interní kategorizace osobních nádraží z hlediska významu cestujícího.",
    images: [
      "/projects/ZSTS/SNE.jpg",
      "/projects/ZSTS/SN.jpg",
      "/projects/ZSTS/SI.jpg",
      "/projects/ZSTS/SO.jpg",
      "/projects/ZSTS/SP.jpg",
      "/projects/ZSTS/SPO.jpg"
    ],
    category: "Stavební inženýrství",
    client: "Správa železnic, státní organizace",
    year: 2021,
    investmentCost: "40 452 000 Kč",
    projectProcessing: "2017-19",
    projectImplementation: "2019-2021",
    projectStage: "DSP, PDPS",
    projectManager: "Ing. arch. Vítězslav Glomb",
    challenge: "Rekonstrukce nádražní budovy při zachování jejího provozu a zajištění modernizace všech systémů při respektování architektonického charakteru stavby.",
    solution: "Budova nadále slouží svému původnímu účelu, avšak byla snížena o patro, ve kterém původně byly byty, patro bylo již nevyužívané a odstraněny byly stávající přízemní části objektu a to křídlo s restaurací a celé severní křídlo. Zachována zůstala střední část sloužící dnes cestujícím a přízemní křídlo – dnes sloužící k řízení dráha a zázemí jejích zaměstnanců."
  },
  {
    title: "Revitalizace a elektrizace trati Oldřichov u Duchova – Litvínov",
    description: "Jedná se o stavbu rekonstrukce železniční trati v úhrnné délce 12km včetně úpravy kolejiště železničních stanic (Osek, Louka u Litvínova a Litvínov). Úprava GPK kolejí byla na traťovou rychlost kolejí do 100km/h. Úprava byla navržena u nástupišť v železničních stanicích a zastávkách.",
    images: ["/projects/railway-bridge.jpg"],
    category: "Železniční infrastruktura",
    client: "Správa železnic, státní organizace",
    year: 2023,
    investmentCost: "1,3 mld. Kč",
    projectProcessing: "2016 - 2018",
    projectImplementation: "2019 - 2021",
    projectStage: "DSP, PDPS, AD, akt. ZP",
    projectManager: "Ing. Emil Špaček",
    challenge: "Modernizace regionální trati při současné elektrizaci a minimalizaci dopadů na okolní zástavbu a životní prostředí.",
    solution: "Součástí stavby je úprava zabezpečovacího zařízení, sdělovacího zařízení a silnoproudu. Dále je součástí úprava trakčního vedení v systému stejnosměrné trakce 3kV s přípravou na střídavou trakční soustavu 25kV 50Hz. Dále bylo součástí stavby sanace náspového tělesa v dl. 2km. V rámci stavby byla novostavba nové budovy v ŽST Louka u Litvínova a rekonstrukce výpravní budovy v ŽST Litvínov. Součástí stavby je nadjezd na silnici I.třídy, 8ks mostních objektů a 10ks propustků."
  },
  {
    title: "D3 SSÚD Kaplice vč. křižovatky Na Vyhlídce",
    description: "Projekt obsahuje návrh areálu Střediska správy a údržby dálnic včetně samostatných areálů Dálničního oddělení Policie České republiky a Integrovaného záchranného systému, zahrnujícího hasičský a zdravotní záchranný systém. Součástí návrhu jsou související komunikace pro napojení na budoucí dálnici D3 a napojení na dopravní a technickou infrastrukturu obce Kaplice.",
    images: ["/projects/D3 SSUD.jpeg"],
    category: "Silniční infrastruktura",
    client: "Ředitelství silnic a dálnic ČR",
    year: 2024,
    investmentCost: "580 877 000 Kč",
    projectProcessing: "2021",
    projectImplementation: "2023",
    projectStage: "DSP, PDPS",
    projectManager: "Ing. Hana Matoušková",
    challenge: "Návrh komplexního zázemí pro správu a údržbu dálnice včetně optimálního napojení na dálniční síť a místní komunikace.",
    solution: "Projekt obsahuje 147 stavebních a inženýrských objektů. Významné jsou administrativní a provozní budovy, které jsou jak standardní zděné, tak ocelové halové. Zajímavostí jsou např. objekty solankového hospodářství se skladem soli a přípravou solných roztoků ve speciálních cisternách. Netradiční je i cvičná věž s lezeckou stěnou pro hasiče včetně rozběhové sportovní dráhy."
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Vše");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [categories, setCategories] = useState(["Vše"]);

  // Generate categories list dynamically from projects
  useEffect(() => {
    const uniqueCategories = ["Vše"];
    
    projectsList.forEach(project => {
      if (project.category && !uniqueCategories.includes(project.category)) {
        uniqueCategories.push(project.category);
      }
    });
    
    setCategories(uniqueCategories);
  }, []);

  const filteredProjects = activeCategory === "Vše" 
    ? projectsList 
    : projectsList.filter(project => project.category === activeCategory);
    
  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Reset to first image when opening modal
  };
    
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <section className="py-16 md:py-24 bg-gradient-to-r from-sagasta-navy to-sagasta-blue">
          <div className="container-custom">
            <h1 className="heading-xl text-white text-center mb-6">Naše realizace</h1>
            <div className="h-1 w-24 bg-white mx-auto mb-8 animate-pulse"></div>
            <p className="text-white/90 text-center max-w-3xl mx-auto text-lg">
              Prozkoumejte naše portfolio úspěšných inženýrských projektů napříč různými odvětvími
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-5 py-2 m-2 rounded-md transition-all duration-300 relative ${
                    activeCategory === category 
                      ? 'text-white bg-sagasta-navy' 
                      : 'text-sagasta-dark-gray hover:text-sagasta-navy'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                  {activeCategory !== category && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sagasta-blue group-hover:w-full transition-all duration-300"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="overflow-hidden rounded-lg shadow-lg group cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
                  onClick={() => selectProject(project)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.images[0]} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                      <span className="text-sm font-medium bg-sagasta-blue/80 py-1 px-2 rounded-sm">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-sagasta-blue font-medium">{project.client}</span>
                      <span className="text-sagasta-dark-gray">{project.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Modal with Image Carousel */}
            {selectedProject && (
              <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setSelectedProject(null)}>
                <div 
                  className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" 
                  onClick={e => e.stopPropagation()}
                >
                  {/* Image Carousel */}
                  <div className="relative h-60 md:h-80">
                    <img 
                      src={selectedProject.images[currentImageIndex]} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Close Button */}
                    <button 
                      className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full p-1"
                      onClick={() => setSelectedProject(null)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sagasta-navy">
                        <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                      </svg>
                    </button>
                    
                    {/* Image Navigation Arrows (only show if multiple images) */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button 
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
                          onClick={handlePrevImage}
                          aria-label="Previous image"
                        >
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="text-sagasta-navy"
                          >
                            <path d="m15 18-6-6 6-6"/>
                          </svg>
                        </button>
                        <button 
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
                          onClick={handleNextImage}
                          aria-label="Next image"
                        >
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="text-sagasta-navy"
                          >
                            <path d="m9 18 6-6-6-6"/>
                          </svg>
                        </button>
                      </>
                    )}
                    
                    {/* Image Indicators (dots) */}
                    {selectedProject.images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {selectedProject.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(idx);
                            }}
                            className={`h-2 w-2 rounded-full transition-all duration-300 ${
                              currentImageIndex === idx ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                            }`}
                            aria-label={`Go to image ${idx + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap justify-between items-start mb-6">
                      <h2 className="heading-medium text-sagasta-navy mb-2 md:mb-0 pr-4">{selectedProject.title}</h2>
                      <span className="inline-block bg-sagasta-blue text-white px-3 py-1 rounded-md text-sm font-medium">
                        {selectedProject.category}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <span className="text-sm text-sagasta-dark-gray">Klient</span>
                        <p className="font-medium">{selectedProject.client}</p>
                      </div>
                      <div>
                        <span className="text-sm text-sagasta-dark-gray">Rok</span>
                        <p className="font-medium">{selectedProject.year}</p>
                      </div>
                      {selectedProject.investmentCost && (
                        <div>
                          <span className="text-sm text-sagasta-dark-gray">Investiční náklady</span>
                          <p className="font-medium">{selectedProject.investmentCost}</p>
                        </div>
                      )}
                      {selectedProject.projectProcessing && (
                        <div>
                          <span className="text-sm text-sagasta-dark-gray">Zpracování projektu</span>
                          <p className="font-medium">{selectedProject.projectProcessing}</p>
                        </div>
                      )}
                      {selectedProject.projectImplementation && (
                        <div>
                          <span className="text-sm text-sagasta-dark-gray">Realizace projektu</span>
                          <p className="font-medium">{selectedProject.projectImplementation}</p>
                        </div>
                      )}
                      {selectedProject.projectStage && (
                        <div>
                          <span className="text-sm text-sagasta-dark-gray">Stupeň projektu</span>
                          <p className="font-medium">{selectedProject.projectStage}</p>
                        </div>
                      )}
                      {selectedProject.projectManager && (
                        <div>
                          <span className="text-sm text-sagasta-dark-gray">Vedoucí projektu</span>
                          <p className="font-medium">{selectedProject.projectManager}</p>
                        </div>
                      )}
                    </div>
                    
                    <p className="mb-6">{selectedProject.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2 text-sagasta-navy">Výzva</h3>
                      <p>{selectedProject.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-sagasta-navy">Řešení</h3>
                      <p>{selectedProject.solution}</p>
                    </div>
                    
                    <div className="mt-8 text-center">
                      <button 
                        className="btn-secondary"
                        onClick={() => setSelectedProject(null)}
                      >
                        Zavřít
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
