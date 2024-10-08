import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import services from './pages/ServicesPage/ServicesData';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <section id="home">
          <HomePage />
        </section>
        <section id="about">
          <AboutPage />
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
        <Footer />
      </div>
    </>
  );
}

export default App;