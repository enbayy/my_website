import React from 'react';
import '../../css/HomePage.css';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function HomePage() {

  return (
    <section id="home">
      <div className="animated-background">
        <div className="home-title-container">
          <div className="home-name">Enes Bayar</div>
          <div className="home-subtitle">
            <span className="fade-in-out">
              Web Developer
            </span>
          </div>
          <div className='icons'>
            <a
              className='linked-icon'
              href="https://www.linkedin.com/in/enesbayarr/"
              target='_blank'>
              <BsLinkedin />
            </a>
            <a
              className='linked-icon'
              href="https://github.com/enbayy"
              target='_blank'>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;