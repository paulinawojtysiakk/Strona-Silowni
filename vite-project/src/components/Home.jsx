import React from 'react';
import '/src/scss/Home.scss';
import Footer from './Footer.jsx';
import Button from '@mui/material/Button';
import threadmill from '../images/threadmill.jpg';
import CardsSection from "./CardsSection.jsx";
import AboutSection from "./AboutSection.jsx";
import DescriptionHome from "./DescriptionHome.jsx";
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="container home-container">
            <div className='image-container'>
                <img src={threadmill} alt="threadmill"/>
            </div>
            <div className='btn-container'>
                <p className='btn-description'>Jeśli chcesz sprawdzić jak wygląda nasza siłownia oraz zapoznać się z trenerami,
                    możesz umówić się telefonicznie na próbną sesję treningową bez zobowiązań!</p>
                <Button variant="outlined" className='btn-cta-home'><Link to="/contact">Zapisz się!</Link></Button>
                </div>
            <AboutSection/>
            <CardsSection/>
            <DescriptionHome/>
            <Footer />

        </div>

    );
};

export default Home;