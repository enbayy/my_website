import React, { useState } from 'react';
import '../css/Navbar.css';

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">Enes Bayar</div>
            <div className="burger-menu" onClick={toggleMenu}>
                &#9776;
            </div>
            <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                <a className="navbar-link" href="#home">Giriş</a>
                <a className="navbar-link" href="#about">Hakkımda</a>
                <li
                    className="navbar-link"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Çalışmalar
                    {showDropdown && (
                        <ul className="dropdown-menu">
                            <li><a href="#projects" className="dropdown-link">Web Projeleri</a></li>
                            <li><a href="#projects" className="dropdown-link">Oyun Projeleri</a></li>
                        </ul>
                    )}
                </li>
                <a className="navbar-link" href="#services">Hizmetler</a>
                <a className="navbar-link" href="#contact">İletişim</a>
                <a className="navbar-link" href="#about">CV</a>
            </ul>
        </nav>
    );
}

export default Navbar;