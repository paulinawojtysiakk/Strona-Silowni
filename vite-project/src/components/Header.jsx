import React from 'react'
import '/src/scss/Header.scss'

const Header = () => {
    return(
        <header className="header">
            <nav className="navigation">
                <div className="nav-logo"><a href="#">Pieniny Fitness</a></div>
              <ul>
                  <li className="nav-element"><a href="#">O nas</a></li>
                  <li className="nav-element"><a href="#">Cennik</a></li>
                  <li className="nav-element"><a href="#">Kalendarz zajęć</a></li>
                  <li className="nav-element"><a href="#">Kontakt</a></li>
              </ul>
            </nav>
        </header>
    );
};

export default Header;