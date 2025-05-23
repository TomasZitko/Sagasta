import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Mail, Phone, MapPin } from 'lucide-react';

// SVG Path Constants
const FACEBOOK_ICON_PATH = "M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z";
const LINKEDIN_ICON_PATH = "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

// Navigation Items
const NAV_ITEMS = [
  { path: '/realizace', label: 'Realizace' },
  { path: '/sluzby', label: 'Služby' },
  { path: '/o-spolecnosti', label: 'O společnosti' },
  { path: '/informace', label: 'Informace' },
  { path: '#aktuality', label: 'Aktuality', isSection: true },
  { path: '/volna-mista', label: 'Volná místa' },
  { path: '#kontakt', label: 'Kontakt', isSection: true },
];

// Reusable CSS Classes
const LINK_BASE_CLASSES = "nav-link text-sm lg:text-base font-medium relative";
const LINK_AFTER_CLASSES = "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-sagasta-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left";
const SOCIAL_ICON_CLASSES = "text-sagasta-navy hover:text-sagasta-blue transition-colors duration-300";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const renderNavLink = (item, isMobile = false) => {
    const isActive = location.pathname === item.path;
    const baseClasses = isMobile 
      ? `nav-link font-medium py-2 flex items-center ${isActive ? 'text-sagasta-navy' : ''}`
      : `${LINK_BASE_CLASSES} ${LINK_AFTER_CLASSES} ${isActive ? 'text-sagasta-navy after:scale-x-100' : ''}`;

    if (item.isSection) {
      return (
        <button 
          key={item.path}
          onClick={() => scrollToSection(item.path.slice(1))}
          className={baseClasses}
        >
          {item.label}
        </button>
      );
    }

    return (
      <Link 
        key={item.path}
        to={item.path}
        className={baseClasses}
        onClick={isMobile ? toggleMenu : undefined}
      >
        {item.label}
      </Link>
    );
  };

  const SocialIcon = ({ href, path, label }) => (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={SOCIAL_ICON_CLASSES}
      aria-label={label}
    >
      <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d={path} />
      </svg>
    </a>
  );
  
  return (
    <>
      {/* Top info bar - restored to original design */}
      <div className="bg-sagasta-blue text-white py-1">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="mailto:info@sagasta.cz" className="flex items-center hover:text-white/80 transition-colors">
              <Mail size={14} className="mr-1" />
              info@sagasta.cz
            </a>
            <a href="tel:+420261344100" className="flex items-center hover:text-white/80 transition-colors">
              <Phone size={14} className="mr-1" />
              +420 261 344 100
            </a>
          </div>
          <div className="flex items-center">
            <a href="https://goo.gl/maps/youraddress" className="flex items-center hover:text-white/80 transition-colors">
              <MapPin size={14} className="mr-1" />
              Novodvorská 1010/14, Praha 4
            </a>
          </div>
        </div>
      </div>

      {/* Main header with logo and navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md ${
        scrolled ? 'shadow-main py-2' : 'py-4'
      }`} tabIndex={-1} aria-label="Hlavní navigace">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              {/* Circular favicon image */}
              <div className="w-8 h-8 mr-2 rounded-full overflow-hidden flex-shrink-0 border border-sagasta-light-blue">
                <img src="/favicon.ico" alt="Sagasta Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-sagasta-navy text-xl sm:text-2xl font-bold font-montserrat group-hover:text-sagasta-blue transition-colors duration-300">SAGASTA</span>
            </Link>
          </div>
          
          {/* Desktop Navigation - responsive font sizes */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            {NAV_ITEMS.map(item => renderNavLink(item))}
          </nav>
          
          {/* Social Media Icons - responsive spacing and size */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4 ml-4 lg:ml-8">
            <SocialIcon 
              href="https://www.facebook.com/p/SAGASTA-100076194090618"
              path={FACEBOOK_ICON_PATH}
              label="Facebook"
            />
            <SocialIcon 
              href="https://www.linkedin.com/company/sagasta-s-r-o"
              path={LINKEDIN_ICON_PATH}
              label="LinkedIn"
            />
          </div>
          
          {/* Mobile Menu Button - better touch target */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-sagasta-light-blue/10 transition-colors" 
            onClick={toggleMenu}
            aria-label="Přepnout menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation - improved animation and layout */}
        <div 
          className={`md:hidden bg-white shadow-md absolute w-full left-0 transition-all duration-300 origin-top ${
            isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            {NAV_ITEMS.map(item => renderNavLink(item, true))}
            
            {/* Social media icons with better spacing in mobile menu */}
            <div className="flex items-center space-x-6 pt-4 mt-2 border-t border-gray-100">
              <SocialIcon 
                href="https://www.facebook.com/p/SAGASTA-100076194090618"
                path={FACEBOOK_ICON_PATH}
                label="Facebook"
              />
              <SocialIcon 
                href="https://www.linkedin.com/company/sagasta-s-r-o"
                path={LINKEDIN_ICON_PATH}
                label="LinkedIn"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
