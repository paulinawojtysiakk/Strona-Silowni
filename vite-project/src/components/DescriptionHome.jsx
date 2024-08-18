import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "/src/scss/DescriptionHome.scss";
import equipment from "../images/equipment.jpeg";

const DescriptionHome = () => {
  return (
    <div className="container description-home-container">
      <Box
        className=""
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Card
          className="desc-home-text-img"
          sx={{ width: "100%", marginBottom: "15px" }}
        >
          <div>
            <img src={equipment} alt="gym-equipment" className="equip-img" />
          </div>
          <CardContent className="desc-home-text">
            <Typography variant="h6" component="div">
              Zamrożenie karnetu
            </Typography>
            <Typography
              variant="body2"
              className="desc-home-info"
              sx={{ marginTop: "10px" }}
            >
              Niezależnie od powodu możesz w dowolnym momencie zawiesić swoje
              członkostwo w Pieniny Fitness.
            </Typography>

            <Typography variant="h6" component="div">
              Nasi najmłodsi
            </Typography>
            <Typography
              variant="body2"
              className="desc-home-info"
              sx={{ marginTop: "10px" }}
            >
              Jeśli masz ukończone 16 lat, to na luzie możesz trenować w naszym
              klubie. Wystarczy, że Twój rodzic lub opiekun prawny wypełni
              oświadczenie.
            </Typography>

            <Typography variant="h6" component="div">
              Nie martw się o detale
            </Typography>
            <Typography
              variant="body2"
              className="desc-home-info"
              sx={{ marginTop: "10px" }}
            >
              <ul className="desc-home-list">
                <li>Darmowy parking</li>
                <li>Bezpłatne wifi</li>
                <li>Treningi bez limitów</li>
                <li>Prosta umowa</li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default DescriptionHome;
