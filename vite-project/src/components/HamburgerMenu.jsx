import React, { useState } from 'react';
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
                    <li><a href="#">O nas</a></li>
                    <li><a href="#">Cennik</a></li>
                    <li><a href="#">Kalendarz zajęć</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default HamburgerMenu;
