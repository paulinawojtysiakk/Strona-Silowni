import React from "react";
import {Card, CardContent, Typography} from "@mui/material";
import "/src/scss/DescriptionHome.scss";
import equipment from "../images/equipment.jpeg";
import DescriptionIcon from '@mui/icons-material/Description';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DoneIcon from '@mui/icons-material/Done';

const DescriptionHome = () => {
  return (
    <>
        <Card className="container description-home-container">
          <CardContent className="desc-home-box">
            <Typography variant="h4" className="desc-home-title">Trenowanie na naszej siłowni jest proste!</Typography>
            <div className="desc-home-title-single">
            <DescriptionIcon/> 
            <Typography variant="h6" >      Zarządzanie karnetem   </Typography>
            </div>
            <Typography
              variant="body2"
              className="desc-home-info"
            >
             Niezależnie od powodu, możesz w dowolnym momencie zmienić swój wykupiony karnet na mniejszy lub większy, dodać treningi lub zawiesić swoje
              członkostwo w Pieniny Fitness.
            </Typography>
            <div className="desc-home-title-single">
              <SportsGymnasticsIcon/>
            <Typography variant="h6">
              Trenuj od najmłodszych lat
                 </Typography>
                 </div>
            <Typography
              variant="body2"
              className="desc-home-info"
            >
              Jeśli masz ukończone 16 lat, to na luzie możesz trenować w naszym
              klubie. Wystarczy, że Twój rodzic lub opiekun prawny wypełni
              oświadczenie.
            </Typography>
            <div className="desc-home-title-single">
              <CheckBoxIcon />
            <Typography variant="h6" >Nie martw się o detale  </Typography>
            </div>
            <Typography
              variant="body2"
              className="desc-home-info"
            >  W naszej siłowni zadbaliśmy o małe rzeczy abyś mógł skupić się na swoim planie treningowym:

              <div className="desc-home-list"> <DoneIcon/> Prosta umowa</div>
                <div className="desc-home-list"> <DoneIcon/> Bezpłatne wifi</div>
                <div className="desc-home-list"> <DoneIcon/> Darmowy parking</div>
                <div className="desc-home-list"> <DoneIcon/> Treningi umawiane w kalendarzu online</div>
            </Typography>
          </CardContent>
        </Card>

        {/* <div className="desc-home-img" >
            <img src={equipment} alt="gym-equipment" className="equip-img" />
          </div> */}
    </>
  );
};

export default DescriptionHome;
