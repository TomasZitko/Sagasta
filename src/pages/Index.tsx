import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import NewsSection from '../components/NewsSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <section className="section-main"><HeroSection /></section>
        <section className="section-alt"><AboutSection /></section>
        <section className="section-main"><ServicesSection /></section>
        <section className="section-alt"><ProjectsSection /></section>
        <section className="section-main"><NewsSection /></section>
        <section className="section-alt"><ContactSection /></section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
