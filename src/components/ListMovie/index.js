import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actListMovieAPI } from '../../redux/modules/ListMovieReducer/action'
import MovieCard from '../MovieCard'

function ListMovie(props) {
  useEffect(() => {
    props.getListMovie()
  }, [])

  console.log(props.listMovie);
  const renderListMovie = () => {
    const { listMovie } = props
    if (listMovie) {
      return listMovie.map(listItem => {
        <Grid item sm={6} md={3}>
          <MovieCard></MovieCard>
        </Grid>

      }
      )
    }
  }
  return (
    <Grid container spacing={2}  >
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
