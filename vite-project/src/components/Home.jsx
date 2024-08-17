import React from 'react';
import '/src/scss/Home.scss';
import Footer from './Footer.jsx';
import {Button, Box, Typography} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import emptygym from '../images/emptygym.jpeg';
import CardsSection from "./CardsSection.jsx";
import AboutSection from "./AboutSection.jsx";
import DescriptionHome from "./DescriptionHome.jsx";
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <>
        <Box className='follow-us-box'>
            <Typography className='follow-contact'>Zadzwoń do nas: 780 455 288</Typography>
        <Typography className='follow-desc'>Zaobserwuj nas!
             <a href="https://www.facebook.com/" target='_blank' rel="noopener noreferrer"
              ><FacebookIcon/></a>
             <a href='https://www.instagram.com/' target='_blank' rel="noopener noreferrer"> <InstagramIcon/></a>
              </Typography>
    </Box>
        <div className="container home-container">
            
            <div className='image-container'>
                <img src={emptygym} alt="emptygym" className='emptygym-img'/>
            </div>

            <div className='tryout-session-container'>
                <p className='tryout-session-description'>Jeśli chcesz sprawdzić jak wygląda nasza siłownia oraz zapoznać się z trenerami,
                    możesz umówić się telefonicznie na próbną sesję treningową bez zobowiązań!</p>
                <Button variant="contained" className='btn-cta-home'><Link to="/contact">Zapisz się!</Link></Button>
                </div>
            <AboutSection/>
            <CardsSection/>
            <DescriptionHome/>
            <Footer />
        </div>
</>
    );
};

export default Home;