import React from 'react'
import '/src/scss/Header.scss'
import logo from '../images/logo.jpg';

const Header = () => {
    return(
        <header className="container header-container">
            <nav className="navigation">
                <div className="nav-logo">
                    <img src={logo} alt="logo" className="logo"/>
                    <a href="#">Pieniny Fitness</a>
                </div>
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