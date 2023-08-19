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
            <Button variant="outlined">Zapisz się!</Button>
            <CardsSection/>
            <Footer />

        </div>

    );
};

export default Home;