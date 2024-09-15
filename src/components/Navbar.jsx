import React from 'react';
import '../css/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Enes Bayar</div>
            <ul className="navbar-menu">
                <a className='navbar-link' href="#home">Giriş</a>
                <a className='navbar-link' href="#about">Hakkımda</a>
                <a className='navbar-link' href="#projects">Çalışmalar</a>
                <a className='navbar-link' href="#services">Hizmetler</a>
                <a className='navbar-link' href="#contact">İletişim</a>
            </ul>
        </nav>
    );
}

export default Navbar;