import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { CardMovie } from '../../utils/material-ui/index'

export default function MovieCard(props) {

    const { movieInfo } = props;
    console.log("abc");

    const cardMovieStyle = CardMovie();
    return (
        <Card sx={{ maxWidth: 380, minWidth: 300, height: "100%", }}>
            <CardActionArea >
                <Box className={cardMovieStyle.imgBox} >
                    <CardMedia
                        component="img"
                        width="100%"
                        height='100%'
                        image={movieInfo.hinhAnh}
                        alt="green iguana"
                        
                        sx={{
                            top: '50%',
                            left: '0',
                            position: 'absolute',
                            transform: 'translateY(-50%)',
                            objectFit: "fill",
                        }}
                    />
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {movieInfo.tenPhim}
                    </Typography>
                    <Box sx={{ display: { xs: 'flex' }, justifyContent: "space-between", m: '2px', position: 'absolute', bottom: 0 }}>
                        <Typography variant="body2" color="text.secondary">
                            Ngay khoi chieu
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Danh gia
                        </Typography>
                    </Box>
                </CardContent>

            </CardActionArea>
            <CardActions sx={{}}>
                <Button size="small" color="primary">
                    More Detail
                </Button>
            </CardActions>
        </Card>
    );
}

