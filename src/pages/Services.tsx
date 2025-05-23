import React from 'react';
import { services } from '../data/services';
import { 
  LightBulbIcon,
  ChartBarIcon,
  DocumentIcon,
  PuzzlePieceIcon,
  BuildingOfficeIcon,
  WrenchIcon,
  DocumentCheckIcon,
  ClipboardDocumentListIcon,
  UsersIcon,
  MapIcon,
  SparklesIcon,
  CubeIcon
} from '@heroicons/react/24/outline';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Services = () => {
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'LightbulbIcon': LightBulbIcon,
      'ChartBarIcon': ChartBarIcon,
      'DocumentIcon': DocumentIcon,
      'PuzzlePieceIcon': PuzzlePieceIcon,
      'BuildingOfficeIcon': BuildingOfficeIcon,
      'WrenchIcon': WrenchIcon,
      'DocumentCheckIcon': DocumentCheckIcon,
      'ClipboardDocumentListIcon': ClipboardDocumentListIcon,
      'UsersIcon': UsersIcon,
      'MapIcon': MapIcon,
      'TreeIcon': SparklesIcon,
      'CubeIcon': CubeIcon
    };
    
    const Icon = iconMap[iconName];
    return Icon ? <Icon className="w-8 h-8 text-sagasta-blue" /> : null;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-sagasta-navy to-sagasta-blue text-white py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl mb-6">Naše služby</h1>
              <div className="h-1 w-24 bg-white mx-auto mb-8"></div>
              <p className="text-xl text-white/90">
                Poskytujeme komplexní inženýrské a konzultační služby v oblasti dopravní infrastruktury a stavebnictví.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="container-custom py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="group bg-white border border-gray-100 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-sagasta-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sagasta-blue/20 transition-colors duration-300">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-semibold text-sagasta-navy mb-4 group-hover:text-sagasta-blue transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sagasta-dark-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-sagasta-navy/5 to-sagasta-blue/5 py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-large text-sagasta-navy mb-6">
                Potřebujete specifické řešení?
              </h2>
              <div className="h-1 w-16 bg-sagasta-blue mx-auto mb-8"></div>
              <p className="text-lg text-sagasta-dark-gray mb-8">
                Náš tým odborníků je připraven projednat vaše konkrétní inženýrské výzvy a vyvinout řešení na míru vašim potřebám.
              </p>
              <a 
                href="/kontakt" 
                className="inline-flex items-center px-8 py-4 bg-sagasta-blue text-white font-medium rounded-lg transition-all duration-300 hover:bg-sagasta-navy hover:shadow-lg group"
              >
                <span>Kontaktujte nás</span>
                <svg 
                  className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
