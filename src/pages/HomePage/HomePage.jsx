import React from 'react';
import '../../css/HomePage.css';
import { BsLinkedin } from "react-icons/bs";

function HomePage() {
  const text = "Web Developer";

  return (
    <section id="home">
      
      <div className="animated-background">
        <div className="home-title-container">
          <div className="home-name">Enes Bayar</div>
          <div className="home-subtitle">
            {text.split("").map((letter, index) => (
              <span key={index} className="fade-in-out">
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
            <BsLinkedin />
          </div>
        </div>
        <div className="circle one"></div>
        <div className="circle two"></div>
        <div className="circle three"></div>
        <div className="square one"></div>
        <div className="square two"></div>
        <div className="circle one"></div>
        <div className="circle two"></div>
        <div className="circle three"></div>
        <div className="square one"></div>
      </div>
    </section>
  );
}

export default HomePage;