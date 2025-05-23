import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DocumentTextIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const Informace = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-sagasta-navy to-sagasta-blue">
          <div className="container-custom">
            <h1 className="heading-xl text-white text-center mb-6">Informace o společnosti</h1>
            <div className="h-1 w-24 bg-white mx-auto mb-8 animate-pulse"></div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Company Information */}
              <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
                <h2 className="text-2xl font-bold text-sagasta-navy mb-6">Společnost SAGASTA s.r.o.</h2>
                <div className="prose prose-sagasta max-w-none">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-sagasta-navy mb-4">Fakturační údaje</h3>
                      <div className="space-y-2 text-sagasta-dark-gray">
                        <p><strong>IČO:</strong> 242 48 123</p>
                        <p><strong>DIČ:</strong> CZ24248123</p>
                        <p><strong>Společnost je zapsána v obchodním rejstříku:</strong></p>
                        <p>Městský soud v Praze, oddíl C, vložka 202 123</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-sagasta-navy mb-4">Kontaktní údaje</h3>
                      <div className="space-y-2 text-sagasta-dark-gray">
                        <p><strong>Adresa:</strong></p>
                        <p>Novodvorská 1010/14</p>
                        <p>142 00 Praha 4 - Lhotka</p>
                        <p><strong>Tel.:</strong> +420 261 344 100</p>
                        <p><strong>E-mail:</strong> info@sagasta.cz</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* EU Project Section */}
              <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
                <h2 className="text-2xl font-bold text-sagasta-navy mb-6">Operační program Zaměstnanost</h2>
                <div className="prose prose-sagasta max-w-none">
                  <p className="text-sagasta-dark-gray mb-6">
                    Na základě žádosti o podporu z Operačního programu Zaměstnanost rozhodlo Ministerstvo práce a sociálních věcí o poskytnutí dotace na realizaci projektu <strong>Vzdělávání pro všechny zaměstnance firmy SAGASTA</strong>, registrační číslo <strong>CZ.03.1.52/0.0/0.0/19_097/0013134</strong>, prioritní osa OPZ: Podpora zaměstnanosti a adaptability pracovní síly.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-sagasta-navy mb-4">Popis projektu:</h3>
                  <p className="text-sagasta-dark-gray mb-6">
                    Projekt se zaměřuje na zvýšení úrovně znalostí a dovedností zaměstnanců. Účastníci se budou vzdělávat v oblasti manažerských, komunikačních, ekonomických, právních, účetních a obecných IT aktivit. Rozvoj kompetencí zaměstnanců přinese zvýšení jejich odborností a následné rozšíření odpovědností za vykonávané činnosti a zlepšení konkurenceschopnosti společnosti na trhu.
                  </p>

                  <h3 className="text-xl font-semibold text-sagasta-navy mb-4">Cíle projektu:</h3>
                  <p className="text-sagasta-dark-gray mb-6">
                    Cílem projektu je zvýšit úroveň znalostí, dovedností a zejména klíčových kompetencí pracovníků.
                  </p>

                  <h3 className="text-xl font-semibold text-sagasta-navy mb-4">Předpokládané výsledky:</h3>
                  <p className="text-sagasta-dark-gray mb-6">
                    Celkem se vzdělávání zúčastní 54 účastníků, kteří budou splňovat bagatelní podporu 40 hodin, z toho 9 zaměstnanců bude ve věkové skupině 55+.
                  </p>

                  <div className="bg-sagasta-blue/10 rounded-lg p-4 mt-8">
                    <p className="text-sagasta-navy font-medium">
                      NA PROJEKT JE POSKYTOVÁNA FINANČNÍ PODPORA EU.
                    </p>
                  </div>
                </div>
              </div>

              {/* Documents Section */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-sagasta-navy mb-6">Dokumenty ke stažení</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <div className="w-12 h-12 bg-sagasta-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DocumentTextIcon className="w-6 h-6 text-sagasta-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-sagasta-navy mb-2">POLITIKA INTEGROVANÉHO SYSTÉMU MANAGEMENTU</h3>
                      <a 
                        href="/documents/politika-ism.pdf" 
                        download
                        className="inline-flex items-center text-sagasta-blue hover:text-sagasta-navy transition-colors duration-300 group"
                      >
                        <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
                        <span>Stáhnout PDF</span>
                      </a>
                    </div>
                  </div>
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

export default Informace; 