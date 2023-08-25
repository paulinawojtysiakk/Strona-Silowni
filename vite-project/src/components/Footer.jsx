import React from 'react';
import '/src/scss/Footer.scss'
import logo from '../images/logo.jpg';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className='container footer-container'>
                <div className='footer-box'>
                <img src={logo} alt="logo" className="logo"/>
                <ul className='footer-list'>
                    <li><Link to="/schedule">Sprawdź nasze zajęcia</Link></li>
                    <li><Link to="/contact">Skontaktuj się z nami!</Link></li>
                </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;