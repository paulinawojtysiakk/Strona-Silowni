import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '/src/scss/CardsSection.scss'
import {Link} from 'react-router-dom';
export default function StaticCards() {
    return (
        <div className='container cards-container'>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Card variant="outlined" className='card-single' sx={{ width: '30%', marginBottom: '15px' }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Karnet Basic
                    </Typography>
                    <Typography variant="body2" className='card-description' sx={{ marginTop: '10px' }}>
                        Bądź porannym ptaszkiem, dołącz do naszej siłowni i trenuj u nas w godzinach od 7:00 do 16:00!
                    </Typography>
                    <Typography variant="body2" className='card-price' sx={{ marginTop: '10px' }}>
                        59 zł
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" className='btn-card'><Link to='/contact'>Wybieram i kupuję!</Link></Button>
                </CardActions>
            </Card>
            <Card variant="outlined" className='card-single' sx={{ width: '30%', marginBottom: '15px' }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Karnet Regular
                    </Typography>
                    <Typography variant="body2" className='card-description' sx={{ marginTop: '10px' }}>
                        Nie miej ograniczeń czasowych, trenuj o dowolnej godzinie, aż do 23:00! Korzystaj z naszych zajęć grupowych!
                    </Typography>
                    <Typography variant="body2" className='card-price' sx={{ marginTop: '10px' }}>
                        99 zł
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" className='btn-card'><Link to='/contact'>Wybieram i kupuję!</Link></Button>
                </CardActions>
            </Card>
            <Card variant="outlined" className='card-single' sx={{ width: '30%', marginBottom: '15px' }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Karnet Pro
                    </Typography>
                    <Typography variant="body2" className='card-description' sx={{ marginTop: '10px' }}>
                        Trenuj samodzielnie lub z naszymi trenerami kiedy tylko potrzebujesz. Korzystaj z zajęć grupowych w ciągu całego tygodnia!
                    </Typography>
                    <Typography variant="body2" className='card-price' sx={{ marginTop: '10px' }}>
                        199 zł
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" className='btn-card'><Link to='/contact'>Wybieram i kupuję!</Link></Button>
                </CardActions>
            </Card>
        </Box>
        </div>
    );
}

