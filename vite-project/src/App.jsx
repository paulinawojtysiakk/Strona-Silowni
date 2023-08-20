import React from 'react';
import Home from './components/Home'
import HamburgerMenu from './components/HamburgerMenu.jsx';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Pricing from "./pages/Pricing.jsx";
import Header from "./components/Header.jsx";

const App = () => {
        return (
            <BrowserRouter>
                <HamburgerMenu/>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cennik' element={<Pricing />} />
                </Routes>
            </BrowserRouter>

    );
};


export default App
