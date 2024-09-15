import React from 'react';

import '../../css/ServicesPage.css';

function ServicesPage({services}) {
  return (
    <div className="services-container">
      <h2 className="services-title">Hizmetler</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;