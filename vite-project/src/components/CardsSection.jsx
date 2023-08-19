import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '/src/scss/CardsSection.scss'

export default function StaticCards() {
    return (
        <div className='container cards-container'>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Card variant="outlined" sx={{ width: '30%', marginBottom: '15px' }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Karnet Basic
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: '10px' }}>
                        Bądź porannym ptaszkiem, dołącz do naszej siłowni i trenuj u nas w godzinach od 7:00 do 16:00!
                    </Typography>
                    <Typography variant="body2"  sx={{ marginTop: '10px' }}>
                        49,99zł
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Wybieram i kupuję!</Button>
                </CardActions>
            </Card>
            <Card variant="outlined" sx={{ width: '30%', marginBottom: '15px' }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Karnet Regular
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: '10px' }}>
                        Nie miej ograniczeń czasowych i trenuj o dowolnej godzinie, aż do 23:00!
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: '10px' }}>
                        99zł
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Wybieram i kupuję!</Button>
                </CardActions>
            </Card>
            <Card variant="outlined" sx={{ width: '30%', marginBottom: '15px' }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Karnet Pro
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: '10px' }}>
                        Trenuj samodzielnie lub z naszymi trenerami kiedy tylko potrzebujesz. Korzystaj z zajęć grupowych w ciągu całego tygodnia!
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: '10px' }}>
                        199zł
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Wybieram i kupuję!</Button>
                </CardActions>
            </Card>
        </Box>
        </div>
    );
}

