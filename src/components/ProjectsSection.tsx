import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { motion, useAnimation } from 'framer-motion';

const ProjectsSection = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Výstavba odbočky Rajhrad",
      image: "/Raj.jpeg",
      description: "Výstavba nové železniční odbočky Rajhrad.",
    },
    {
      id: 2,
      title: "Železniční most ev. km 2,622",
      image: "/projects/Zl.jpg",
      description: "Rekonstrukce železničního mostu ev. km 2,622.",
    },
    {
      id: 3,
      title: "Rekonstrukce výpravní budovy ŽST Plzeň - Jižní Předměstí",
      image: "/projects/Zst Plzen/zstp.jpg",
      description: "Rekonstrukce výpravní budovy v Plzni.",
    },
    {
      id: 4,
      title: "Revitalizace a elektrizace trati Oldřichov u Duchova – Litvínov",
      image: "/projects/railway-bridge.jpg",
      description: "Revitalizace a elektrizace železniční trati.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const [direction, setDirection] = useState(0);

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

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return prev === featuredProjects.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? featuredProjects.length - 1 : prev - 1;
      }
    });
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.4,0,0.2,1] },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.5, ease: [0.4,0,0.2,1] },
    }),
  };

  return (
    <motion.section
      id="projects"
      className="section-padding section-main"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4,0,0.2,1] } } }}
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-large text-sagasta-navy mb-4">Naše poslední realizace</h2>
          <div className="h-1 w-16 bg-sagasta-navy mb-6 mx-auto"></div>
          <p className="max-w-3xl mx-auto text-sagasta-dark-gray">
            Během let jsme vytvořili nebo se podíleli na spoustě realizací
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button 
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 group"
            aria-label="Previous project"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-gray-800 group-hover:-translate-x-1 transition-transform"
            >
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button 
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 group"
            aria-label="Next project"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-gray-800 group-hover:translate-x-1 transition-transform"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
          {/* Project Card with Slide Animation */}
          <div className="overflow-hidden h-[400px]">
            <motion.div
              key={featuredProjects[currentIndex].id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween" }}
              className="relative h-full w-full"
            >
              <img 
                src={featuredProjects[currentIndex].image}
                alt={featuredProjects[currentIndex].title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {featuredProjects[currentIndex].title}
                </h3>
                <p className="text-white/90 text-base">
                  {featuredProjects[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </div>
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {featuredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none
                  ${
                    currentIndex === idx
                      ? 'bg-sagasta-navy w-6' 
                      : 'bg-gray-300 hover:bg-gray-400 w-2'
                  }
                `}
                aria-label={`Přejít na projekt ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
