import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BuildingOfficeIcon, WrenchIcon, BoltIcon, XMarkIcon } from '@heroicons/react/24/outline';

const VolnaMista = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "PROJEKTANT – POZEMNÍ STAVBY",
      icon: BuildingOfficeIcon,
      category: "Pozemní stavby",
      locations: [
        "Novodvorská 1010/14, Lhotka, 142 00 Praha",
        "Hlinky 505/118, 603 00 Brno",
        "Kafkova 1486/5 702 00 Ostrava"
      ],
      employmentTypes: [
        "Hlavní pracovní poměr",
        "Dohoda o provedení práce",
        "Dohoda o pracovní činnosti"
      ],
      contractType: "Pracovní smlouva",
      responsibilities: [
        "zpracování a posouzení různých stupňů projektové dokumentace",
        "návrh a řešení projektové dokumentace",
        "projednávání dokumentace a provádění autorského dozoru."
      ],
      requirements: [
        "VŠ vzdělání technického směru",
        "zájem o svůj obor a učit se novému, popř. učit a předávat znalosti ostatním v týmu",
        "znalost CADových systémů (AutoCAD nebo Microstation), orientace v projektové dokumentaci",
        "smysl pro zodpovědnost, koordinace při řešení velkých projektů (práce v týmu, komunikativnost, preciznost)"
      ],
      benefits: [
        "příspěvek na stravování",
        "odměna při pracovním jubileu",
        "odměna za doporučení nového zaměstnance",
        "příspěvek při narození dítěte a další výhody pro naše zaměstnance",
        "příspěvek na penzijní připojištění",
        "5 týdnů dovolené",
        "2 dny zdravotního volna"
      ],
      additionalInfo: "Pracoviště je možné ve městech: Praha 4 / Brno / Ostrava."
    },
    {
      id: 2,
      title: "Projektant – mostní a inženýrské konstrukce",
      icon: WrenchIcon,
      category: "Mostní a inženýrské konstrukce",
      locations: [
        "Novodvorská 1010/14, Lhotka, 142 00 Praha",
        "Hlinky 505/118, 603 00 Brno",
        "Kafkova 1486/5 702 00 Ostrava",
        "Vajnorská 100/A, 831 04 Bratislava, Slovensko"
      ],
      employmentTypes: [
        "Hlavní pracovní poměr",
        "Dohoda o provedení práce",
        "Dohoda o pracovní činnosti"
      ],
      contractType: "Pracovní smlouva",
      responsibilities: [
        "zpracování a posouzení různých stupňů projektové dokumentace",
        "návrh a řešení projektové dokumentace",
        "projednávání dokumentace a provádění autorského dozoru."
      ],
      requirements: [
        "VŠ vzdělání technického směru",
        "zájem o svůj obor a učit se novému, popř. učit a předávat znalosti ostatním v týmu",
        "znalost CADových systémů (AutoCAD nebo Microstation), orientace v projektové dokumentaci",
        "smysl pro zodpovědnost, koordinace při řešení velkých projektů (práce v týmu, komunikativnost, preciznost)"
      ],
      benefits: [
        "příspěvek na stravování",
        "odměna při pracovním jubileu",
        "odměna za doporučení nového zaměstnance",
        "příspěvek při narození dítěte a další výhody pro naše zaměstnance",
        "příspěvek na penzijní připojištění",
        "5 týdnů dovolené",
        "2 dny zdravotního volna"
      ],
      additionalInfo: "Pracoviště je možné ve městech: Praha 4 / Brno / Ostrava."
    },
    {
      id: 3,
      title: "Projektant – zabezpečovací zařízení",
      icon: BoltIcon,
      category: "Elektrotechnické profese, Technika a vývoj",
      locations: [
        "Novodvorská 1010/14, Lhotka, 142 00 Praha",
        "Hlinky 505/118, 603 00 Brno",
        "Kafkova 1486/5 702 00 Ostrava"
      ],
      employmentTypes: [
        "Hlavní pracovní poměr"
      ],
      contractType: "Pracovní smlouva",
      responsibilities: [
        "zpracování a posouzení různých stupňů projektové dokumentace",
        "návrh a řešení projektové dokumentace",
        "projednávání dokumentace a provádění autorského dozoru."
      ],
      requirements: [
        "VŠ vzdělání elektrotechnického směru",
        "zájem o svůj obor a učit se novému, popř. učit a předávat znalosti ostatním v týmu",
        "znalost CADových systémů (AutoCAD nebo Microstation), orientace v projektové dokumentaci",
        "smysl pro zodpovědnost, koordinace při řešení velkých projektů (práce v týmu, komunikativnost, preciznost)"
      ],
      benefits: [
        "příspěvek na stravování",
        "odměna při pracovním jubileu",
        "odměna za doporučení nového zaměstnance",
        "příspěvek při narození dítěte a další výhody pro naše zaměstnance",
        "příspěvek na penzijní připojištění",
        "5 týdnů dovolené",
        "2 dny zdravotního volna"
      ],
      additionalInfo: "Pracoviště je možné ve městech: Praha 4 / Brno / Ostrava."
    }
  ];

  const openPopup = (job) => {
    setSelectedJob(job);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setSelectedJob(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-sagasta-navy to-sagasta-blue text-white py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl mb-6">Volná místa</h1>
              <div className="h-1 w-24 bg-white mx-auto mb-8"></div>
              <p className="text-xl text-white/90">
                Připojte se k našemu týmu profesionálů a podílejte se na zajímavých projektech
              </p>
            </div>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="container-custom py-24">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <div 
                key={job.id}
                className="group bg-white border border-gray-100 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-sagasta-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sagasta-blue/20 transition-colors duration-300">
                  <job.icon className="w-8 h-8 text-sagasta-blue" />
                </div>
                <h3 className="text-xl font-semibold text-sagasta-navy mb-4 group-hover:text-sagasta-blue transition-colors duration-300">
                  {job.title}
                </h3>
                <div className="mb-6">
                  <h4 className="font-medium text-sagasta-navy mb-2">Místo:</h4>
                  <ul className="space-y-2">
                    {job.locations.map((location, index) => (
                      <li key={index} className="text-sagasta-dark-gray">
                        {location}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-sagasta-blue">
                    {job.category}
                  </span>
                  <button 
                    onClick={() => openPopup(job)}
                    className="inline-flex items-center text-sagasta-blue hover:text-sagasta-navy transition-colors duration-300 group"
                  >
                    <span>Více info</span>
                    <svg 
                      className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Job Details Modal */}
        {selectedJob && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div 
              className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-sagasta-navy">{selectedJob.title}</h2>
                <button 
                  onClick={closePopup}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              
              <div className="p-6 space-y-8">
                {/* Employment Type */}
                <div>
                  <h3 className="text-lg font-semibold text-sagasta-navy mb-3">Typ pracovního vztahu</h3>
                  <ul className="space-y-2">
                    {selectedJob.employmentTypes.map((type, index) => (
                      <li key={index} className="text-sagasta-dark-gray">{type}</li>
                    ))}
                  </ul>
                </div>

                {/* Locations */}
                <div>
                  <h3 className="text-lg font-semibold text-sagasta-navy mb-3">Místo pracoviště</h3>
                  <ul className="space-y-2">
                    {selectedJob.locations.map((location, index) => (
                      <li key={index} className="text-sagasta-dark-gray">{location}</li>
                    ))}
                  </ul>
                </div>

                {/* Contract Type */}
                <div>
                  <h3 className="text-lg font-semibold text-sagasta-navy mb-3">Typ smluvního vztahu</h3>
                  <p className="text-sagasta-dark-gray">{selectedJob.contractType}</p>
                </div>

                {/* Responsibilities */}
                <div>
                  <h3 className="text-lg font-semibold text-sagasta-navy mb-3">Zodpovědnost budete mít za:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {selectedJob.responsibilities.map((item, index) => (
                      <li key={index} className="text-sagasta-dark-gray">{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Additional Info */}
                {selectedJob.additionalInfo && (
                  <div>
                    <p className="text-sagasta-dark-gray">{selectedJob.additionalInfo}</p>
                  </div>
                )}

                {/* Requirements */}
                <div>
                  <h3 className="text-lg font-semibold text-sagasta-navy mb-3">Pro tuto pozici je potřeba mít:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {selectedJob.requirements.map((item, index) => (
                      <li key={index} className="text-sagasta-dark-gray">{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-lg font-semibold text-sagasta-navy mb-3">Benefity</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {selectedJob.benefits.map((item, index) => (
                      <li key={index} className="text-sagasta-dark-gray">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default VolnaMista; 