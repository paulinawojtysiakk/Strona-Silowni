import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Button from '@mui/material/Button';



const Home = () => {
    return (
        <div>
            <Header />
            <div></div>
            <Footer />
            <Button variant="outlined">Hello World</Button>
        </div>
    );
};

export default Home;