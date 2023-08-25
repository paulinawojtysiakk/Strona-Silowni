import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
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
                    <li className="nav-element"><NavLink to="/">Strona Główna</NavLink></li>
                    <li className="nav-element"><NavLink to="/about">O nas</NavLink></li>
                    <li className="nav-element"><NavLink to="/pricing">Cennik</NavLink></li>
                    <li className="nav-element"><NavLink to="/schedule">Kalendarz zajęć</NavLink></li>
                    <li className="nav-element"><NavLink to="/contact">Kontakt</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default HamburgerMenu;
