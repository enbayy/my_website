import React from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Enes Bayar</div>
            <ul className="navbar-menu">
                <div className="navbar-menu">
                    <Link className='link' to="/"> Home </Link>
                    <Link className='link' to="/about"> About </Link>
                    <Link className='link' to="/projects"> Projects </Link>
                    <Link className='link' to="/contact"> Contact </Link>
                </div>
            </ul>
            <div className="navbar-search">
                <input type="text" placeholder="Search..." />
            </div>
        </nav>
    )
}

export default Navbar