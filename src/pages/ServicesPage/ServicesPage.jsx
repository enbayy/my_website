import React from 'react';
import '../../css/ServicesPage.css';

function ServicesPage() {
  const services = [
    { title: "Web Geliştirme", description: "Modern ve responsive web siteleri geliştirme." },
    { title: "UI/UX Tasarımı", description: "Kullanıcı dostu ve estetik arayüz tasarımları." },
    { title: "SEO Danışmanlığı", description: "Web sitenizi arama motorlarında üst sıralara çıkarma." },
    { title: "Mobil Uygulama Geliştirme", description: "iOS ve Android için mobil uygulamalar." }
  ];

  return (
    <div className="services-container">
      <h2 className="services-title">Hizmetlerim</h2>
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
