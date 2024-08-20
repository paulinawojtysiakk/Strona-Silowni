import React from "react";
import { Link } from "react-router-dom";
import "/src/scss/Header.scss";
import logo2 from "../images/logo2.png";

const Header = () => {
  return (
    <header className="header-container">
      <nav className="navigation">
        <div className="nav-logo">
          <Link to="/">Pieniny Fitness</Link>
         <Link to="/"><img src={logo2} alt="logo" className="logo" /></Link> 
        </div>
        <ul>
          <li>
            <Link to="/about" className="nav-element">
              O nas
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="nav-element">
              Cennik
            </Link>
          </li>
          <li>
            <Link to="/schedule" className="nav-element">
              Kalendarz zajęć
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-element">
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
