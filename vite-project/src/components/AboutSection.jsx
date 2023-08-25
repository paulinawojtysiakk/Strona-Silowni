import React from 'react';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import '/src/scss/AboutSection.scss'

const AboutSection = () =>{
    return(
        <div className="container aboutSection-container">

            <Box className='' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Card variant="outlined" className='classes-cards' sx={{ width: '100%', marginBottom: '15px' }}>
                    <CardContent>
                        <Typography variant="h5" className='classes-title' component="div">
                                Nasze zajęcia grupowe
                            </Typography>
                        <Typography variant="h6" component="div">
                            Yoga
                        </Typography>
                        <Typography variant="body2" className='classes-card-description' sx={{ marginTop: '10px' }}>
                            Trening mentalny ukierunkowany na poprawę wytrzymałości psychicznej oraz redukcję stresu.
                            W czasie zajęć wykonywane są ćwiczenia oddechowe, relaksacyjne oraz fizyczne o niskiej intensywności. Osoby początkujące mogą sięgnąć w czasie ćwiczeń po specjalne kostki do jogi ułatwiające przyjęcie i utrzymanie pozycji. Joga pomaga w kontroli emocji i osiąganiu równowagi psychofizycznej.
                            Ćwiczenia wspomagają pracę nad sylwetką, prowadzą do usprawnienia całego ciała, znacząco poprawiają gibkość.
                        </Typography>

                        <Typography variant="h6" component="div">
                            Full Body Workout
                        </Typography>
                        <Typography variant="body2" className='classes-card-description' sx={{ marginTop: '10px' }}>
                            Są to zajęcia specjalistyczne, których celem jest ogólne usprawnienie ciała.
                            Trening polega na wykonywaniu ćwiczeń imitujących ruchy wykonywane przy codziennych czynnościach,
                            dzięki czemu oddziałujemy na grupy mięśniowe całego ciała – w tym centralne, jak i głębokie.
                            W czasie ćwiczeń pracujemy głównie z ciężarem własnego ciała, co dodatkowo przyczynia się do wzmocnienia zakresu ruchomości stawów.
                        </Typography>

                        <Typography variant="h6" component="div">
                            Płaski brzuch
                        </Typography>
                        <Typography variant="body2" className='classes-card-description' sx={{ marginTop: '10px' }}>
                            Trening wzmacniający i modelujący z wykorzystaniem ćwiczeń aerobowych. W trakcie zajęć koncentrujemy się na mięśniach brzucha, ale wzmocnieniu ulegają również mięśnie grzbietu i całego gorsetu mięśniowego.
                            Trening przyspiesza spalanie tkanki tłuszczowej oraz ułatwia modelowanie sylwetki. Jego efekt to wyrzeźbiony, umięśniony brzuch oraz dobrze widoczna talia. Ćwiczenia dodatkowo wzmacniają pracę układu krążeniowego, budują siłę i wytrzymałość.
                            Jeden trening składa się z trzech etapów – rozgrzewka, część główna, stretching.
                        </Typography>

                    </CardContent>
                </Card>

            </Box>
        </div>


        )
}

export default AboutSection;