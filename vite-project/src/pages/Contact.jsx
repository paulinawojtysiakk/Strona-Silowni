import React from "react";
import {Card, CardContent, Grid, Typography} from "@mui/material";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="container contact-page-container">
      <div className="contact-container">
          <Card
            variant="outlined"
            className="card-contact"          >
            <CardContent>
              <Typography variant="h6">
                Dział obsługi klienta
              </Typography>
              <Typography
                className="card-description"   >
                Możesz skontaktować się z nami pod adresem mailowym:<br/>
                <Typography className="contact-mail"> contact@pieninyfitness.pl</Typography> 
                  Kontakt telefoniczny jest mozliwy pod numerem:
              </Typography>
              <Typography
                className="card-price"   >
               +48 780 455 288
              </Typography>
            </CardContent>
          </Card>
          <Card
            variant="outlined"
            className="card-contact"   >
            <CardContent>
              <Typography variant="h6" >
                Kontakt dla firm
              </Typography>
              <Typography className="card-description">
                <Typography>Zapytania ofertowe dla firm prosimy przesyłać na adres:</Typography>
                <Typography className="contact-mail">dlafirm@pieninyfitness.pl</Typography>
             <Typography>Kontakt telefoniczny dla firm:</Typography>
              </Typography>
              <Typography
                className="card-price">
               +48 720 345 990
              </Typography>
            </CardContent>
          </Card>
      </div>

      <div className="form-box">
        <Typography className="form-description">
          Jeśli chcesz zostawić nam kontakt do siebie - skorzystaj z formularza,
          a my prześlemy Ci ofertę!
        </Typography>
        <ContactForm />
      </div>
    </div>
  );
};
export default Contact;
