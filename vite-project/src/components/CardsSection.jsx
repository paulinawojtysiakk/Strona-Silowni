import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import "/src/scss/CardsSection.scss";
import { Link } from "react-router-dom";

export default function StaticCards() {
  return (
    <div className="container cards-container">
      <Card className="card-single">
        <CardContent>
          <Typography variant="h5" className="card-title">
            Karnet Basic
          </Typography>
          <Typography variant="body2" className="card-description">
            Bądź porannym ptaszkiem, dołącz do naszej siłowni i trenuj u nas w
            godzinach od 7:00 do 16:00!
          </Typography>
          <Typography variant="body2" className="card-price">
            59 zł
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className="btn-card">
            <Link to="/contact">Wybieram i kupuję!</Link>
          </Button>
        </CardActions>
      </Card>
      <Card className="card-single">
        <CardContent>
          <Typography variant="h5" className="card-title">
            Karnet Regular
          </Typography>
          <Typography variant="body2" className="card-description">
            Nie miej ograniczeń czasowych, trenuj o dowolnej godzinie, aż do
            23:00! Korzystaj z naszych zajęć grupowych!
          </Typography>
          <Typography variant="body2" className="card-price">
            99 zł
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className="btn-card">
            <Link to="/contact">Wybieram i kupuję!</Link>
          </Button>
        </CardActions>
      </Card>
      <Card className="card-single">
        <CardContent>
          <Typography variant="h5" className="card-title">
            Karnet Pro
          </Typography>
          <Typography variant="body2" className="card-description">
            Trenuj samodzielnie lub z naszymi trenerami kiedy tylko
            potrzebujesz. Korzystaj z zajęć grupowych w ciągu całego tygodnia!
          </Typography>
          <Typography variant="body2" className="card-price">
            199 zł
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small" className="btn-card">
            <Link to="/contact">Wybieram i kupuję!</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
