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
          </div>
          <a
            className='linked-icon'
            href="https://www.linkedin.com/in/enesbayarr/"
            target='_blank'>
            <BsLinkedin />
          </a>
        </div>
        <div className="bar one"></div>
        <div className="bar two"></div>
        <div className="bar three"></div>
        <div className="bar four"></div>
        <div className="bar five"></div>
        <div className="bar six"></div>
        <div className="bar seven"></div>
        <div className="bar eight"></div>
        <div className="bar nine"></div>
        <div className="bar ten"></div>
      </div>
    </section>
  );
}

export default HomePage;