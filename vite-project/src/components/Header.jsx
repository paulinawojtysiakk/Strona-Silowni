import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import '/src/scss/Header.scss'
import logo from '../images/logo.jpg';

const Header = () => {
    return(
        <header className="container header-container">
            <nav className="navigation">
                <div className="nav-logo">
                    <img src={logo} alt="logo" className="logo"/>
                    <NavLink to='/'>Pieniny Fitness</NavLink>
                </div>
                <ul>
                    <li className="nav-element"><NavLink to="/about">O nas</NavLink></li>
                    <li className="nav-element"><NavLink to="/pricing">Cennik</NavLink></li>
                    <li className="nav-element"><NavLink to="/schedule">Kalendarz zajęć</NavLink></li>
                    <li className="nav-element"><NavLink to="/contact">Kontakt</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;