import React, { useState, useEffect } from 'react';
import '../css/Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen]);

    return (
        <nav className="navbar">
            <div className="navbar-logo">Enes Bayar</div>
            <div className="burger-menu" onClick={toggleMenu}>
                &#9776;
            </div>
            <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                <a className="navbar-link" href="#home">Giriş</a>
                <a className="navbar-link" href="#about">Hakkımda</a>
                <a className="navbar-link" href="#projects">Çalışmalar</a>
                <a className="navbar-link" href="#services">Hizmetler</a>
                <a className="navbar-link" href="#contact">İletişim</a>
                <a className="navbar-link" href="#about">CV</a>
            </ul>
        </nav>
    );
}

export default Navbar;