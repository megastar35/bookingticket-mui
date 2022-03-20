import { Box } from '@mui/system'
import React from 'react'
import DashBoard from '../../components/DashBoard'
import ListMovie from '../../components/ListMovie'
import MovieCard from '../../components/MovieCard'

export default function HomePage() {
  return (
    <Box>
      <DashBoard></DashBoard>
      <ListMovie></ListMovie>
    </Box>



  )
}
