import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Clock, Award, Users, Check, Shield, Leaf, Calendar, Briefcase, BarChart, User, ChevronDown, ChevronUp } from 'lucide-react';

const About = () => {
  const [showAllOffices, setShowAllOffices] = useState(false);
  
  // Obslužná funkce pro přepínání zobrazení všech poboček
  const toggleOfficesDisplay = () => {
    setShowAllOffices(!showAllOffices);
  };
  
  // Data poboček
  const officeData = [
    {
      city: "Brno",
      contact: "Ing. Vojtěch Zvěřina",
      email: "vojtech.zverina@sagasta.cz",
      phone: "+420 734 898 574",
      address: "Vídeňská 546/55, 639 00 Brno - Štýřice"
    },
    {
      city: "Olomouc",
      contact: "Mgr. Tereza Veselá",
      email: "tereza.vesela@sagasta.cz",
      phone: "+420 702 171 979",
      address: "Jeremenkova 1211/40b, 779 00 Olomouc"
    },
    {
      city: "Plzeň",
      contact: "Ing. Zbyněk Lejsek",
      email: "zbynek.lejsek@sagasta.cz",
      phone: "+420 722 970 919",
      address: "Plzeň"
    },
    {
      city: "Ostrava",
      contact: "Ing. Miroslav Pösel",
      email: "miroslav.posel@sagasta.cz",
      phone: "+420 722 952 250",
      address: "28. října 3346/91, 702 00 Ostrava - Moravská Ostrava"
    },
    {
      city: "Teplice",
      contact: "Ondřej Fabry",
      email: "ondrej.fabry@sagasta.cz",
      phone: "+420 606 677 002",
      address: "Teplice"
    },
    {
      city: "České Budějovice",
      contact: "Mgr. Petr Pelech",
      email: "petr.pelech@sagasta.cz",
      phone: "+420 720 982 968",
      address: "České Budějovice"
    },
    {
      city: "Pardubice",
      contact: "Ing. Leoš Piroutek",
      email: "leos.piroutek@sagasta.cz",
      phone: "+420 720 850 641",
      address: "Pardubice"
    },
    {
      city: "Bratislava (Slovensko)",
      contact: "Ing. Adam Grman",
      email: "adam.grman@sagasta.cz",
      phone: "+421 911 668 945",
      address: "Bratislava, Slovensko"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <section className="py-16 md:py-24 bg-gradient-to-r from-sagasta-navy to-sagasta-blue">
          <div className="container-custom">
            <h1 className="heading-xl text-white text-center mb-6">O společnosti Sagasta</h1>
            <div className="h-1 w-24 bg-white mx-auto mb-8 animate-pulse"></div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-large text-sagasta-navy mb-6">Naše poslání</h2>
                <div className="h-1 w-16 bg-sagasta-blue mb-6 transform transition-all duration-300 group-hover:w-32"></div>
                <p className="mb-6 text-lg">
                  Společnost SAGASTA s.r.o. je nezávislá inženýrská konzultační firma. Profesní aktivita je zaměřena na různé stavební 
                  inženýrské oblasti, zejména dopravní inženýrství. Zabýváme se také územním plánováním, projektováním 
                  pozemních staveb a geodetickými a geologickými pracemi.
                </p>
                <p className="mb-8 text-lg">
                  Projektujeme budoucnost na pevných základech. Náš tým profesionálů má kvalifikaci a autorizaci pro 
                  železniční stavby (svršek, spodek, nástupiště, přejezdy), silniční stavby, mostní konstrukce (silniční, 
                  železniční, lávky), pozemní stavby a vodohospodářské stavby.
                </p>
              </div>
              
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <div className="relative">
                    <img 
                      src="/Sagasta-Main-Office.jpg" 
                      alt="Hlavní sídlo společnosti SAGASTA" 
                      className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Logo Overlay */}
                    <div className="absolute bottom-6 left-6">
                      <h4 className="text-white text-2xl font-bold tracking-wider drop-shadow-lg">SAGASTA</h4>
                      <div className="h-0.5 w-12 bg-white mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Klíčové statistiky */}
            <div className="mt-16 mb-20">
              <div className="bg-gradient-to-r from-sagasta-navy to-sagasta-blue py-12 px-8 rounded-xl shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  
                  <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300">
                    <Calendar className="w-10 h-10 text-white mb-3" />
                    <div className="text-4xl font-bold text-white mb-1">10+</div>
                    <div className="text-white font-medium">let na trhu</div>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300">
                    <Users className="w-10 h-10 text-white mb-3" />
                    <div className="text-4xl font-bold text-white mb-1">200+</div>
                    <div className="text-white font-medium">spokojených zákazníků</div>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300">
                    <Briefcase className="w-10 h-10 text-white mb-3" />
                    <div className="text-4xl font-bold text-white mb-1">1000+</div>
                    <div className="text-white font-medium">úspěšných projektů</div>
                  </div>
                  
                </div>
              </div>
            </div>

            <div className="mt-24">
              <h2 className="heading-large text-sagasta-navy mb-6 text-center">Naše historie</h2>
              <div className="h-1 w-16 bg-sagasta-blue mb-10 mx-auto"></div>
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-start">
                  <div className="md:w-1/6 mb-2 md:mb-0 md:pt-1">
                    <div className="text-2xl font-bold text-sagasta-blue">2015</div>
                    <div className="h-1 w-12 bg-sagasta-light-blue mt-1"></div>
                  </div>
                  <div className="md:w-5/6">
                    <h3 className="text-xl font-semibold text-sagasta-navy mb-2">Založení</h3>
                    <p className="text-lg text-sagasta-dark-gray">
                      Společnost Sagasta byla založena jako nezávislá inženýrská kancelář se sídlem v Praze. 
                      Zaměřuje se především na dopravní inženýrství a další stavební obory.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-start">
                  <div className="md:w-1/6 mb-2 md:mb-0 md:pt-1">
                    <div className="text-2xl font-bold text-sagasta-blue">2020</div>
                    <div className="h-1 w-12 bg-sagasta-light-blue mt-1"></div>
                  </div>
                  <div className="md:w-5/6">
                    <h3 className="text-xl font-semibold text-sagasta-navy mb-2">Významné projekty</h3>
                    <p className="text-lg text-sagasta-dark-gray">
                      Zahájení významných projektů rekonstrukcí, včetně rekonstrukce hlavního nádraží v Českých Budějovicích,
                      která později získala ocenění Památka roku.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-start">
                  <div className="md:w-1/6 mb-2 md:mb-0 md:pt-1">
                    <div className="text-2xl font-bold text-sagasta-blue">2023</div>
                    <div className="h-1 w-12 bg-sagasta-light-blue mt-1"></div>
                  </div>
                  <div className="md:w-5/6">
                    <h3 className="text-xl font-semibold text-sagasta-navy mb-2">Rozšíření portfolia</h3>
                    <p className="text-lg text-sagasta-dark-gray">
                      SAGASTA rozšířila své portfolio a získala většinový podíl ve společnosti VPÚ DECO PRAHA,
                      čímž rozšířila své služby o armádní a strategické projekty.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-start">
                  <div className="md:w-1/6 mb-2 md:mb-0 md:pt-1">
                    <div className="text-2xl font-bold text-sagasta-blue">Dnes</div>
                    <div className="h-1 w-12 bg-sagasta-light-blue mt-1"></div>
                  </div>
                  <div className="md:w-5/6">
                    <h3 className="text-xl font-semibold text-sagasta-navy mb-2">Vedoucí pozice v oboru</h3>
                    <p className="text-lg text-sagasta-dark-gray">
                      Dnes je Sagasta uznávanou firmou v inženýrském poradenství s více než 100 zaměstnanci 
                      a portfoliem přesahujícím 1000 úspěšných projektů v oblasti dopravní infrastruktury.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations Section */}
            <section className="mt-24">
              <div className="container-custom">
                <h2 className="heading-large text-sagasta-navy mb-6 text-center">Naše pobočky</h2>
                <div className="h-1 w-16 bg-sagasta-blue mb-10 mx-auto"></div>
                
                {/* Praha HQ - featured location */}
                <div className="mb-10 bg-white border border-gray-100 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="heading-small mb-4 text-sagasta-navy">Praha - centrála</h3>
                  <div className="flex flex-col md:flex-row md:space-x-12">
                    <div className="space-y-3 mb-4 md:mb-0">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-sagasta-blue mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <p>SAGASTA s.r.o.</p>
                          <p>Novodvorská 1010/14</p>
                          <p>142 00 Praha 4 - Lhotka</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-sagasta-blue mr-3 flex-shrink-0" />
                        <p>+420 261 344 100</p>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-sagasta-blue mr-3 flex-shrink-0" />
                        <p>info@sagasta.cz</p>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-sagasta-blue mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <p>Pondělí - Pátek: 8:00 - 17:00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Mobile view - Display toggle button */}
                <div className="md:hidden mb-6">
                  <button 
                    onClick={toggleOfficesDisplay}
                    className="w-full py-3 px-4 bg-sagasta-light-blue text-sagasta-navy font-medium rounded-lg flex items-center justify-center hover:bg-sagasta-blue hover:text-white transition-colors duration-300"
                  >
                    {showAllOffices ? (
                      <>
                        <span>Skrýt pobočky</span>
                        <ChevronUp className="ml-2 h-5 w-5" />
                      </>
                    ) : (
                      <>
                        <span>Zobrazit všechny pobočky ({officeData.length})</span>
                        <ChevronDown className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
                
                {/* Regional Offices - compact grid, conditionally visible on mobile */}
                <div className={`grid md:grid-cols-3 lg:grid-cols-4 gap-4 ${!showAllOffices ? 'hidden md:grid' : 'grid'}`}>
                  {officeData.map((office, index) => (
                    <div key={index} className="bg-white border border-gray-100 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300">
                      <h3 className="text-lg font-bold text-sagasta-navy mb-2">{office.city}</h3>
                      <div className="text-sm space-y-2">
                        <div className="flex items-center">
                          <User className="w-4 h-4 text-sagasta-blue mr-2 flex-shrink-0" />
                          <p className="overflow-hidden text-ellipsis">{office.contact}</p>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 text-sagasta-blue mr-2 flex-shrink-0" />
                          <p className="text-sm overflow-hidden text-ellipsis">{office.email}</p>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 text-sagasta-blue mr-2 flex-shrink-0" />
                          <p>{office.phone}</p>
                        </div>
                        <div className="flex items-start">
                          <MapPin className="w-4 h-4 text-sagasta-blue mt-1 mr-2 flex-shrink-0" />
                          <p className="text-xs text-gray-600">{office.address}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="mt-24">
              <h2 className="heading-large text-sagasta-navy mb-6 text-center">Náš tým</h2>
              <div className="h-1 w-16 bg-sagasta-blue mb-10 mx-auto"></div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Ing. Jiří Čurda",
                    position: "Generální ředitel",
                    image: "/Jiri Curda.png",
                    description: "Jako generální ředitel vede společnost SAGASTA, stanovuje dlouhodobou vizi a zajišťuje strategický rozvoj firmy."
                  },
                  {
                    name: "Mgr. Petr Pelech",
                    position: "Provozní a obchodní ředitel",
                    image: "/Petr Pelech.png",
                    description: "Odpovídá za plynulý chod interních procesů, optimalizaci provozu a rozvoj obchodních příležitostí s klíčovými partnery."
                  },
                  {
                    name: "Ing. Emil Špaček",
                    position: "Ředitel ateliéru železničních staveb",
                    image: "/Emil spacek.png",
                    description: "Vede tým specializovaný na projektování a inženýring železničních staveb, zajišťuje technickou kvalitu a inovace v projektech."
                  }
                ].map((member, index) => (
                  <div key={index} className="card group hover:-translate-y-2 transition-all duration-300">
                    <div className="relative mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="heading-small mb-1">{member.name}</h3>
                    <div className="text-sagasta-blue font-medium mb-3">{member.position}</div>
                    <p>{member.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifikáty a členství sekce */}
            <div className="mt-24">
              <h2 className="heading-large text-sagasta-navy mb-6 text-center">Certifikáty a členství</h2>
              <div className="h-1 w-16 bg-sagasta-blue mb-10 mx-auto"></div>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Certifikáty */}
                <div className="bg-white border border-gray-100 rounded-lg shadow-md p-8 hover:shadow-xl transition-all duration-300">
                  <h3 className="heading-small mb-6 text-sagasta-navy flex items-center">
                    <Award className="h-6 w-6 mr-3 text-sagasta-blue" />
                    Certifikáty
                  </h3>
                  
                  <p className="mb-6 text-lg font-medium">Společnost SAGASTA je držitelem těchto certifikátů:</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-sagasta-light-blue/20 p-2 rounded-full mr-4 flex-shrink-0">
                        <Check className="w-5 h-5 text-sagasta-blue" />
                      </div>
                      <div>
                        <p className="font-medium">Systém managementu jakosti</p>
                        <p className="text-gray-600">ISO 9001:2015</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-sagasta-light-blue/20 p-2 rounded-full mr-4 flex-shrink-0">
                        <Leaf className="w-5 h-5 text-sagasta-blue" />
                      </div>
                      <div>
                        <p className="font-medium">Managementu životního prostředí</p>
                        <p className="text-gray-600">ISO 14001:2015</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-sagasta-light-blue/20 p-2 rounded-full mr-4 flex-shrink-0">
                        <Shield className="w-5 h-5 text-sagasta-blue" />
                      </div>
                      <div>
                        <p className="font-medium">Bezpečnost a ochrana zdraví</p>
                        <p className="text-gray-600">ISO 45001:2018</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Členství */}
                <div className="bg-white border border-gray-100 rounded-lg shadow-md p-8 hover:shadow-xl transition-all duration-300">
                  <h3 className="heading-small mb-6 text-sagasta-navy flex items-center">
                    <Users className="h-6 w-6 mr-3 text-sagasta-blue" />
                    Členství
                  </h3>
                  
                  <p className="mb-6 text-lg font-medium">Společnost SAGASTA je členem těchto profesních sdružení:</p>
                  
                  <ul className="space-y-4 list-none">
                    <li className="flex items-center">
                      <div className="bg-sagasta-light-blue/20 p-2 rounded-full mr-4">
                        <Check className="w-4 h-4 text-sagasta-blue" />
                      </div>
                      <span>Sdružení pro výstavbu silnic</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-sagasta-light-blue/20 p-2 rounded-full mr-4">
                        <Check className="w-4 h-4 text-sagasta-blue" />
                      </div>
                      <span>Asociace pro rozvoj infrastruktury</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-sagasta-light-blue/20 p-2 rounded-full mr-4">
                        <Check className="w-4 h-4 text-sagasta-blue" />
                      </div>
                      <span>Hospodářská komora hlavního města Prahy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
