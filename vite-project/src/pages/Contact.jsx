import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function MyForm() {
  const [inputs, setInputs] = useState({});
  const [notification, setNotification] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
    setNotification("Twój email został wysłany");
  };

  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <label>
        Podaj swoje imię:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Podaj swój email do kontaktu:
        <input
          type="email"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
      {notification && <p className="notification-email">{notification}</p>}
    </form>
  );
}

const Contact = () => {
  return (
    <div className="container">
      <div className="contact-container">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Card
            variant="outlined"
            className="card-single"
            sx={{ width: "30%", marginBottom: "15px" }}
          >
            <CardContent>
              <Typography variant="h6" component="div">
                Dział obsługi klienta
              </Typography>
              <Typography
                variant="body2"
                className="card-description"
                sx={{ marginTop: "10px" }}
              >
                <ul>
                  <li>Możesz skontaktować się z nami:</li>
                  <li>contact@pieninyfitness.pl</li>
                  <li> Lub też zadzwonić na recepcję:</li>
                </ul>
              </Typography>
              <Typography
                variant="body2"
                className="card-price"
                sx={{ marginTop: "10px" }}
              >
                780 455 288
              </Typography>
            </CardContent>
          </Card>
          <Card
            variant="outlined"
            className="card-single"
            sx={{ width: "30%", marginBottom: "15px" }}
          >
            <CardContent>
              <Typography variant="h6" component="div">
                Kontakt dla firm
              </Typography>
              <Typography
                variant="body2"
                className="card-description"
                sx={{ marginTop: "10px" }}
              >
                <ul>
                  <li>Zapytania ofertowe</li>
                  <li>dlafirm@pieninyfitness.pl</li>
                  <li> Numer telefonu:</li>
                </ul>
              </Typography>
              <Typography
                variant="body2"
                className="card-price"
                sx={{ marginTop: "10px" }}
              >
                720 345 990
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </div>

      <div className="form-box">
        <p className="form-description">
          Jeśli chcesz zostawić nam kontakt do siebie - skorzystaj z formularza,
          a my prześlemy Ci ofertę!
        </p>
        <MyForm />
      </div>
    </div>
  );
};
export default Contact;
