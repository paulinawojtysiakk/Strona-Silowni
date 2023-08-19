import React from 'react';
import '/src/scss/Footer.scss'
import logo from '../images/logo.jpg';

const Footer = () => {
    return (
        <footer>
            <div className='container footer-container'>
                <div className='footer-box'>
                <img src={logo} alt="logo" className="logo"/>
                <ul className='footer-list'>
                    <li>Zapisz się!</li>
                    <li>Znajdź nas</li>
                </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;