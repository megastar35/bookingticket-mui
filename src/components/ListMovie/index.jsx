import { Grid, Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actListMovieAPI } from '../../redux/modules/ListMovieReducer/action'
import { ListMovieSection } from '../../utils/material-ui'
import MovieCard from '../MovieCard'

function ListMovie(props) {
  useEffect(() => {
    props.getListMovie()
    // eslint-disable-next-line react-hooks/exhaustive-deps  
  }, [])

  const classes = ListMovieSection();
  const renderListMovie = () => {
    const { listMovie } = props
    if (listMovie) {
      return listMovie.map(listItem => {
        return <Grid item key={listItem.maPhim} xs={6} md={3} >
          <MovieCard movieInfo={listItem}></MovieCard>
        </Grid>

      }
      )
    }
  }
  return (
    <Box className={classes.MovieList} sx={{  padding: '80px 30px' }} >
      <Typography variant="h4">Phim đang chiếu</Typography>
      <Grid container  spacing={2}  >
        {renderListMovie()}
      </Grid>
    </Box>

  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    getListMovie: () => {
      dispatch(actListMovieAPI())
    }
  }
}
const mapStateToProps = (state) => {
  return {
    listMovie: state.listMovieReducer.data,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListMovie)
