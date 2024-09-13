import React from 'react'
import '../css/Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Enes Bayar</div>
            <ul className="navbar-menu">
                <div className="navbar-menu">
                    <a className='navbar-link' href="#">Home</a>
                    <a className='navbar-link' href="#projects">Projects</a>
                    <a className='navbar-link' href="#contact">Contact</a>
                    <a className='navbar-link' href="#about">About</a>
                </div>
            </ul>
            <div className="navbar-search">
                <input type="text" placeholder="Search..." />
            </div>
        </nav>
    )
}

export default Navbar
