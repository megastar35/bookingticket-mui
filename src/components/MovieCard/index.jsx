import * as React from 'react';
import { withRouter  } from 'react-router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { CardMovie } from '../../utils/material-ui/index'
import StarIcon from '@mui/icons-material/Star';
import Popup from '../Popup';
import { Link,  } from 'react-router-dom';
import {convertDate} from "../../utils/convertDate"
function MovieCard(props) {

    const { movieInfo } = props;
    const [open, setOpen] = React.useState(false);
    const cardMovieStyle = CardMovie();

    const date = convertDate(movieInfo.ngayKhoiChieu);
    const handleOpen = () => {
        setOpen(!open);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Card className={cardMovieStyle.card} sx={{ width: "100%", height: "100%", borderRadius: '10px' }} background="black"  >

            <CardActionArea >
                <Box className={cardMovieStyle.imgBox} >
                    <Box className={cardMovieStyle.rating}>
                        <Typography >{movieInfo.danhGia}  <StarIcon /> </Typography>
                    </Box>
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
                <CardContent className={cardMovieStyle.cardContent}>
                    <Typography gutterBottom variant="h5" component="div">
                        {movieInfo.tenPhim}
                    </Typography>

                    <Typography variant="" sx={{ fontSize: "14px" }}>
                        Ngày khởi chiếu: {date}
                    </Typography>


                </CardContent>

            </CardActionArea>
            <CardActions className={cardMovieStyle.cardAction}>
                <Link to={`/detail/${movieInfo.maPhim}`}>
                    <Button className="detailBtn" size="small" color="primary" >
                        More Detail
                    </Button></Link>

                <Button className="trailerBtn" size="small" color="primary" onClick={() => handleOpen()}>
                    Trailer
                </Button>
                <Popup open={open}
                    onClose={handleClose}
                    movieInfo={movieInfo}
                ></Popup>
            </CardActions>
        </Card>
    );
}

export default MovieCard