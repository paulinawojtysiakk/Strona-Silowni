import React from "react";
import { Card, CardContent, Divider, Typography } from "@mui/material";
import "/src/scss/AboutSection.scss";
import yoga from "../images/yoga.jpeg";
import fbworkout from "../images/fbworkout.jpeg";
import workout2 from "../images/workout2.png";

const AboutSection = () => {
  return (
    <div className="container aboutSection-container">
      <Card variant="" className="classes-cards">
        <CardContent>
          <Divider />
          <Typography variant="h5" className="classes-title">
            Nasze zajęcia grupowe
          </Typography>
          <Divider />
          <div className="single-card-box">
            <Typography variant="h6" className="single-class-title">
              Yoga
            </Typography>
            <Typography variant="body2" className="classes-card-description">
              <p className="classes-card-desc-text">
                Trening mentalny ukierunkowany na poprawę wytrzymałości
                psychicznej oraz redukcję stresu. W czasie zajęć wykonywane są
                ćwiczenia oddechowe, relaksacyjne oraz fizyczne o niskiej
                intensywności. Osoby początkujące mogą sięgnąć w czasie ćwiczeń
                po specjalne kostki do jogi ułatwiające przyjęcie i utrzymanie
                pozycji. Joga pomaga w kontroli emocji i osiąganiu równowagi
                psychofizycznej. Ćwiczenia wspomagają pracę nad sylwetką,
                prowadzą do usprawnienia całego ciała, znacząco poprawiają
                gibkość.
              </p>
              <div>
                <img className="classes-img" src={yoga} alt="yoga" />
              </div>
            </Typography>
          </div>
          <Divider />
          <div className="single-card-box">
            <Typography variant="h6" className="single-class-title">
              Full Body Workout
            </Typography>
            <Typography variant="body2" className="classes-card-description">
              <p className="classes-card-desc-text">
                {" "}
                Są to zajęcia specjalistyczne, których celem jest ogólne
                usprawnienie ciała. Trening polega na wykonywaniu ćwiczeń
                imitujących ruchy wykonywane przy codziennych czynnościach,
                dzięki czemu oddziałujemy na grupy mięśniowe całego ciała – w
                tym centralne, jak i głębokie. W czasie ćwiczeń pracujemy
                głównie z ciężarem własnego ciała, co dodatkowo przyczynia się
                do wzmocnienia zakresu ruchomości stawów.
              </p>
              <div>
                <img className="classes-img" src={workout2} alt="workout" />
              </div>
            </Typography>
          </div>
          <Divider />
          <div className="single-card-box">
            <Typography variant="h6" className="single-class-title">
              Płaski brzuch
            </Typography>
            <Typography variant="body2" className="classes-card-description">
              <p className="classes-card-desc-text">
                {" "}
                Trening wzmacniający i modelujący z wykorzystaniem ćwiczeń
                aerobowych. W trakcie zajęć koncentrujemy się na mięśniach
                brzucha, ale wzmocnieniu ulegają również mięśnie grzbietu i
                całego gorsetu mięśniowego. Trening przyspiesza spalanie tkanki
                tłuszczowej oraz ułatwia modelowanie sylwetki. Jego efekt to
                wyrzeźbiony, umięśniony brzuch oraz dobrze widoczna talia.
                Ćwiczenia dodatkowo wzmacniają pracę układu krążeniowego, budują
                siłę i wytrzymałość. Jeden trening składa się z trzech etapów –
                rozgrzewka, część główna, stretching.
              </p>
              <div>
                <img className="classes-img" src={fbworkout} alt="workout" />
              </div>
            </Typography>
          </div>
          <Divider />
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutSection;
