import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';

export default function MovieCard() {
    const [movieInfo, setmovieInfo] = React.useState({
        maPhim: "",
    })
    
    return (
        <Card sx={{ maxWidth: 380, minWidth: 300 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Movie Name
                    </Typography>
                    <Box sx={{ display: { xs: 'flex' },justifyContent: "space-between", m: '2px' }}>
                        <Typography variant="body2" color="text.secondary">
                            Ngay khoi chieu
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Danh gia
                        </Typography>
                    </Box>
                    
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    More Detail
                </Button>
            </CardActions>
        </Card>
    );
}

