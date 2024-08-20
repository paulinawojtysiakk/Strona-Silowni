import React from "react";
import {Typography} from "@mui/material";
import "/src/scss/Footer.scss";
import logo2 from "../images/logo2.png";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-box">
          <div className="logo-container">
          <Typography className="footer-logo">Pieniny Fitness</Typography>
          {/* <img src={logo2} alt="logo" className="logo" /> */}
          <Typography>Nasz adres:</Typography>
            <Typography>ul. Grotowskiego 4 <br/> 34-450<br/> Krościenko nad Dunajcem</Typography>
          </div>
          <div className="footer-lists-box">
          <ul className="footer-list">
            <li> <Link to="/schedule">Regulamin siłowni</Link></li>
            <li><Link to="/about">O nas</Link></li>
            <li><Link to='/pricing'>Oferta dla firm</Link> </li>
          </ul>
          <ul className="footer-list">
            <li> <Link to="/schedule">Sprawdź nasze zajęcia</Link></li>
            <li><Link to="/contact">Skontaktuj się z nami!</Link></li>
            <li >Nasze social media 
             <li className="footer-social-media">
              <a><FacebookIcon/></a>
              <a><InstagramIcon/></a>
              <a><MusicNoteIcon/></a>
              </li>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
