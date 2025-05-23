import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
import { motion, useAnimation } from 'framer-motion';

const ServicesSection = () => {
  const featuredServices = services.filter(service => service.featured);
  
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

  const controls = useAnimation();
  const ref = useRef(null);

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
      id="services"
      className="section-padding section-alt"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4,0,0.2,1] } } }}
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-large text-sagasta-navy mb-4">Naše služby</h2>
          <div className="h-1 w-16 bg-sagasta-navy mb-6 mx-auto"></div>
          <p className="max-w-3xl mx-auto text-sagasta-dark-gray">
            Poskytujeme komplexní inženýrské a konzultační služby v oblasti dopravní infrastruktury a stavebnictví.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
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

        <div className="mt-12 text-center">
          <Link 
            to="/sluzby" 
            className="inline-flex items-center px-8 py-4 bg-sagasta-blue text-white font-medium rounded-lg transition-all duration-300 hover:bg-sagasta-navy hover:shadow-lg group"
          >
            <span>Všechny služby</span>
            <svg 
              className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
