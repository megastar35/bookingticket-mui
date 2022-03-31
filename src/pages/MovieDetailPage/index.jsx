import { Box, CardMedia, List, ListItem, ListItemText, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { MovieDetailStyle } from "../../utils/material-ui"
import { useParams } from 'react-router-dom';
import { actMovieInfoAPI } from '../../redux/modules/MovieInfoReducer/action';
import { connect } from 'react-redux';

function MovieDetailPage(props) {
    useEffect(() => {
        props.fetchMovieDetail(movieID)
    }, [])
    const { mvInfo } = props;
    let param = useParams();
    let movieID = param.id;
    const classes = MovieDetailStyle();

    const renderMovieDetail = () => {
        if (mvInfo) {
            return <Box className={classes.MovieDetailSection} sx={{ background: "blue" }}>
                <Box className={classes.DetaiMovielPage}>
                    <Box className={classes.MovieDetailTrailer}>
                        <iframe width="100%" height="100%" src={`${mvInfo.trailer}?autoplay=1&mute=1`} allow='autoplay'></iframe>
                    </Box>
                    <Box className={classes.MovieDetailContent} >
                        <CardMedia
                            id="imgBox"
                            component="img"
                            width="100%"
                            height='100%'
                            image={mvInfo.hinhAnh}
                        />
                        <List id="moTaBox">
                            <ListItem>
                                <Typography variant='span'>Mô tả:</Typography><Typography>{mvInfo.moTa}</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant='span'>Ngày khởi chiếu:</Typography><Typography>{mvInfo.ngayKhoiChieu}</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant='span'>Đánh giá:</Typography><Typography>{mvInfo.danhGia}/10</Typography>
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Box >
        }
    }
    console.log(props.mvInfo);
    return (
        <>
            {renderMovieDetail()}
        </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieDetail: (mvID) => {
            dispatch(actMovieInfoAPI(mvID));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        mvInfo: state.movieInfoReducer.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage)