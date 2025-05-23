import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="container-custom py-20">
        <h1 className="heading-large text-sagasta-navy">Projekt nenalezen</h1>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="relative h-[40vh] bg-sagasta-navy">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        <div className="absolute bottom-0 left-0 right-0 container-custom pb-8">
          <h1 className="heading-large text-white mb-2">{project.title}</h1>
          <p className="text-white/90 text-xl">{project.location}</p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="heading-medium text-sagasta-navy mb-4">O projektu</h2>
              <p className="text-sagasta-dark-gray">{project.description}</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg h-fit space-y-4">
            <div>
              <h3 className="font-semibold text-sagasta-navy mb-1">Objednatel</h3>
              <p className="text-sagasta-dark-gray">{project.client}</p>
            </div>
            
            {project.investmentCost && (
              <div>
                <h3 className="font-semibold text-sagasta-navy mb-1">Investiční náklady</h3>
                <p className="text-sagasta-dark-gray">{project.investmentCost}</p>
              </div>
            )}

            {project.projectDuration && (
              <div>
                <h3 className="font-semibold text-sagasta-navy mb-1">Zpracování projektu</h3>
                <p className="text-sagasta-dark-gray">{project.projectDuration}</p>
              </div>
            )}

            {project.implementationDate && (
              <div>
                <h3 className="font-semibold text-sagasta-navy mb-1">Realizace projektu</h3>
                <p className="text-sagasta-dark-gray">{project.implementationDate}</p>
              </div>
            )}

            <div>
              <h3 className="font-semibold text-sagasta-navy mb-1">Stupeň projektu</h3>
              <p className="text-sagasta-dark-gray">{project.projectStage}</p>
            </div>

            <div>
              <h3 className="font-semibold text-sagasta-navy mb-1">Vedoucí projektu</h3>
              <p className="text-sagasta-dark-gray">{project.projectManager}</p>
            </div>

            <div>
              <h3 className="font-semibold text-sagasta-navy mb-1">Kategorie</h3>
              <p className="text-sagasta-dark-gray">{project.category}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 