import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import services from './pages/ServicesPage/ServicesData';

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <section id="home">
          <HomePage />
        </section>
        <section id="projects">
          <ProjectsPage />
        </section>
        <section id="services">
          <ServicesPage services={services} />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
        <section id="about">
          <AboutPage />
        </section>
      </div>
    </>
  );
}

export default App;