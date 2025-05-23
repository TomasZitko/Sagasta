import * as React from "react"
import { Mail, Phone, MapPin } from 'lucide-react';
import { cn } from "@/lib/utils"
import { useNavigate, useLocation } from 'react-router-dom';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className, ...props }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className={cn("bg-[#139EB7] text-white", className)} {...props}>
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">SAGASTA</h3>
            <p className="mb-4">
              Projekční, inženýrská a konzultační společnost zaměřená na kvalitu, inovace a spokojenost zákazníků.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="https://www.linkedin.com/company/sagasta-s-r-o" className="hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors rounded-main" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
              </a>
              <a href="https://www.facebook.com/sagasta" className="hover:text-white/80 transition-colors" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Rychlé odkazy</h3>
            <ul className="space-y-2">
              <li><a href="/realizace" className="hover:text-white/80 transition-colors">Realizace</a></li>
              <li><a href="/sluzby" className="hover:text-white/80 transition-colors">Služby</a></li>
              <li><a href="/o-spolecnosti" className="hover:text-white/80 transition-colors">O společnosti</a></li>
              <li><button onClick={() => scrollToSection('aktuality')} className="hover:text-white/80 transition-colors">Aktuality</button></li>
              <li><a href="/volna-mista" className="hover:text-white/80 transition-colors">Volná místa</a></li>
              <li><button onClick={() => scrollToSection('kontakt')} className="hover:text-white/80 transition-colors">Kontakt</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Naše služby</h3>
            <ul className="space-y-2">
              <li><a href="/sluzby#poradenstvi" className="hover:text-white/80 transition-colors">Základní poradenství</a></li>
              <li><a href="/sluzby#studie" className="hover:text-white/80 transition-colors">Technicko-hospodářské studie</a></li>
              <li><a href="/sluzby#dokumentace" className="hover:text-white/80 transition-colors">Projektové dokumentace</a></li>
              <li><a href="/sluzby#planovani" className="hover:text-white/80 transition-colors">Koncepční plánování</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 mt-0.5" />
                <span>Novodvorská 1010/14<br />142 00 Praha 4</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <span>+420 261 344 100</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <span>info@sagasta.cz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SAGASTA s.r.o. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
