import React from 'react';
import '/src/scss/Home.scss';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Button from '@mui/material/Button';
import threadmill from '../images/threadmill.jpg';
import CardsSection from "./CardsSection.jsx";

const Home = () => {
    return (
        <div className="container home-container">
            <Header />
            <div className='image-container'>
                <img src={threadmill} alt="threadmill"/>
            </div>
            <div className='btn-container'>
                <Button variant="outlined" className='btn-cta-home'>Zapisz się!</Button> </div>
            <CardsSection/>
            <Footer />

        </div>

    );
};

export default Home;