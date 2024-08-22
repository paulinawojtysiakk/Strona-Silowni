import React from "react";
import "/src/scss/Home.scss";
import { Button, Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import emptygym from "../images/emptygym.jpeg";
import equipment from "../images/equipment.jpeg";
import yoga from "../images/yoga.jpeg";
import CardsSection from "./CardsSection.jsx";
import OurClasses from "./OurClasses.jsx";
import DescriptionHome from "./DescriptionHome.jsx";
import HomeCarousel from "./Carousel.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  const images = [emptygym, equipment, yoga];

  return (
    <>
      <Box className="follow-us-box">
        <Typography className="follow-contact">
          Zadzwoń do nas: 780 455 288
        </Typography>
        <Typography className="follow-desc">
          Zaobserwuj nas!
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
        </Typography>
      </Box>
      <div className="container home-container">
        <HomeCarousel images={images} />

        <div className="tryout-session-container">
          <p className="tryout-session-description">
            Jeśli chcesz sprawdzić jak wygląda nasza siłownia oraz zapoznać się
            z trenerami, możesz umówić się telefonicznie na próbną sesję
            treningową bez zobowiązań!
          </p>
          <Button variant="contained" className="btn-cta-home">
            <Link to="/contact">Zapisz się!</Link>
          </Button>
        </div>
        <DescriptionHome />
        <CardsSection />
        <OurClasses />
      </div>
    </>
  );
};

export default Home;
