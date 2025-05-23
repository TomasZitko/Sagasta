import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, we would send this data to a backend
    console.log('Form submitted:', formData);
    alert('Děkujeme za vaši zprávu! Brzy se vám ozveme.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

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

  return (
    <motion.section
      id="kontakt"
      className="section-padding section-main"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4,0,0.2,1] } } }}
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-large text-sagasta-navy mb-4">Kontaktujte nás</h2>
          <p className="max-w-3xl mx-auto text-sagasta-dark-gray">
            Obraťte se na nás pro konzultaci vašich inženýrských potřeb nebo naplánování schůzky s našimi odborníky
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Google Maps */}
          <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
            <h3 className="heading-medium text-sagasta-navy mb-6">Kde nás najdete</h3>
            <div className="relative w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                title="SAGASTA location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.6454429731213!2d14.44832821531669!3d50.03655672363382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939a91498fcf%3A0xd7ea8dde6c2f72e3!2sNovodvorsk%C3%A1%201010%2F14%2C%20142%2000%20Praha%204!5e0!3m2!1scs!2scz!4v1645541321774!5m2!1scs!2scz" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="mt-4 text-center text-sagasta-dark-gray">
              <p>Pro naplánování osobní schůzky nás kontaktujte telefonicky nebo e-mailem.</p>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="heading-medium text-sagasta-navy mb-6">Kontaktní informace</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-sagasta-navy" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Naše kancelář</h4>
                  <p className="text-sagasta-dark-gray">
                    Novodvorská 1010/14<br />
                    142 00 Praha 4<br />
                    Česká republika
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-sagasta-navy" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Telefon</h4>
                  <p className="text-sagasta-dark-gray">+420 261 344 100</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-sagasta-navy" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">E-mail</h4>
                  <p className="text-sagasta-dark-gray">info@sagasta.cz</p>
                </div>
              </div>
            </div>
            
            {/* Office Hours */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-3 text-sagasta-navy">Otevírací doba</h4>
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Pondělí - Pátek</td>
                    <td className="py-2">9:00 - 18:00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Sobota</td>
                    <td className="py-2">Pouze po domluvě</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Neděle</td>
                    <td className="py-2">Zavřeno</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
