import React from 'react';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


const Contact = () =>{
    return(
        <div className='container contact-container'>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Card variant="outlined" className='card-single' sx={{ width: '30%', marginBottom: '15px' }}>
                    <CardContent>
                        <Typography variant="h6" component="div">
                            Dział obsługi klienta
                        </Typography>
                        <Typography variant="body2" className='card-description' sx={{ marginTop: '10px' }}>
                           <ul>
                               <li>Możesz skontaktować się z nami:</li>
                               <li>contact@pieninyfitness.pl</li>
                               <li> Lub też zadzwonić na recepcję:</li>
                           </ul>
                        </Typography>
                        <Typography variant="body2" className='card-price' sx={{ marginTop: '10px' }}>
                            780 455 288
                        </Typography>
                    </CardContent>

                </Card>
                <Card variant="outlined" className='card-single' sx={{ width: '30%', marginBottom: '15px' }}>
                    <CardContent>
                        <Typography variant="h6" component="div">
                            Kontakt dla firm
                        </Typography>
                        <Typography variant="body2" className='card-description' sx={{ marginTop: '10px' }}>
                            <ul>
                                <li>Zapytania ofertowe</li>
                                <li>dlafirm@pieninyfitness.pl</li>
                                <li> Numer telefonu:</li>
                            </ul>
                        </Typography>
                        <Typography variant="body2" className='card-price' sx={{ marginTop: '10px' }}>
                            720 345 990
                        </Typography>
                    </CardContent>

                </Card>

            </Box>
        </div>
    );
}
export default Contact;