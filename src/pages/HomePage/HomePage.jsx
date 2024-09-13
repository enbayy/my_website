import React from 'react';
import '../../css/HomePage.css'; // İlgili CSS dosyasını import edin

function HomePage() {
  return (
    <section id="home">
      <div className="stars"></div> {/* Yıldızlı arka plan */}
      <div className="home-title">Enes Bayar</div>
    </section>
  );
}

export default HomePage;
