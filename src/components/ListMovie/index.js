import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actListMovieAPI } from '../../redux/modules/ListMovieReducer/action'
import MovieCard from '../MovieCard'

function ListMovie(props) {
  useEffect(() => {
    props.getListMovie()
  }, [])

  const renderListMovie = () => {
    const { listMovie } = props
    if (listMovie) {
      return listMovie.map(listItem => {
        return <Grid item key={listItem.maPhim} sm={6} md={3}>
          <MovieCard movieInfo={listItem}></MovieCard>
        </Grid>

      }
      )
    }
  }
  return (
    <Grid container sx={{mt: "100px"}} spacing={2}  >
      {renderListMovie()}
    </Grid>
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
    listMovie: state.listMovieReducer.data
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListMovie)
