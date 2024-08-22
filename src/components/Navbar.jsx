import React from 'react'
import '../css/Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Enes Bayar</div>
            <ul className="navbar-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="navbar-search">
                <input type="text" placeholder="Search..." />
            </div>
        </nav>
    )
}

export default Navbar