import React from "react";
import {Typography} from "@mui/material";
import "/src/scss/Footer.scss";
import logo2 from "../images/logo2.png";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const Footer = () => {
  return (
  
      <div className="footer-container">
        <div className="footer-box">
          <div className="logo-container">
          <Typography className="footer-logo">Pieniny Fitness<FitnessCenterIcon/></Typography>
          {/* <img src={logo2} alt="logo" className="logo" /> */}
          <Typography className="footer-address">Nasz adres:<br/>
            ul. Grotowskiego 4 <br/> 34-450<br/> Krościenko nad Dunajcem</Typography>
          </div>
          <div className="footer-lists-box">
          <ul className="footer-list">
          <li><Link to="/about">O nas</Link></li>
          <li><Link to='/pricing'>Oferta dla firm</Link> </li>
            <li><a href='/static/Reg-PF.pdf' target='_blanc'>Regulamin siłowni</a></li>
            <li><a href='/static/PP-PF.pdf' target='_blanc'>Polityka Prywatności</a></li>
          </ul>
          <ul className="footer-list">
            <li> <Link to="/schedule">Sprawdź nasze zajęcia</Link></li>
            <li><Link to="/contact">Skontaktuj się z nami!</Link></li>
            <li>Nasze social media 
             <li className="footer-social-media">
              <a href='https://www.facebook.com' target="_blanc" rel="noopener noreferer"><FacebookIcon/></a>
              <a href="https://www.instagram.com" target="_blanc" rel="noopener noreferer"><InstagramIcon/></a>
              <a href="https://www.tiktok.com" target="_blanc" rel="noopener noreferer"><MusicNoteIcon/></a>
              </li>
            </li>
          </ul>
        </div>
        </div>
      </div>
  
  );
};

export default Footer;
