import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const HamburgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>  
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <nav className={`nav ${menuOpen ? 'active' : ''}`}>
            
                <ul>
                    <li ><Link to="/" className="nav-element">Strona Główna</Link></li>
                    <li ><Link to="/about" className="nav-element">O nas</Link></li>
                    <li ><Link to="/pricing" className="nav-element">Cennik</Link></li>
                    <li ><Link to="/schedule" className="nav-element">Kalendarz zajęć</Link></li>
                    <li ><Link to="/contact" className="nav-element">Kontakt</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default HamburgerMenu;