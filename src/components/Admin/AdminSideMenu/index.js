import { Box, Typography, Menu, MenuItem, Button } from '@mui/material'
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import GroupIcon from '@mui/icons-material/Group';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react'
import SubMenuItem from '../SideBarSubMenu';


const menu = [
  {
    title: 'Movie',
    icon: <MovieCreationIcon />,
    iconClosed: <ArrowBackIosIcon />,
    iconOpened: <KeyboardArrowDownIcon />,
    subMenu: [{
      title: 'List Movies',
    },
    {
      title: 'Add New Movie',
    }]
  },
  {
    title: 'User',
    icon: <GroupIcon />,
    iconClosed: <ArrowBackIosIcon />,
    iconOpened: <KeyboardArrowDownIcon />,
    subMenu: [{
      title: 'List Users',
    },
    {
      title: 'Add New User',
    }]
  },
  {
    title: 'Box Office',
    icon: <ConfirmationNumberIcon />,
    iconClosed: <ArrowBackIosIcon />,
    iconOpened: <KeyboardArrowDownIcon />,
    subMenu: [{
      title: 'List Box Offices',
    },
    {
      title: 'Add New Box Office',
    }]
  }
];

export default function AdminSideMenu(props) {
  const [curItem, setCurItem] = React.useState('');
  return (
    <Box sx={{ position: 'fixed', top: 0, left: 0, width: "250px", height: "100%", backgroundColor: "#fff", boxShadow: '0 0.3rem 0.8rem rgb(0 0 0 / 12%)' }}>
      <Box sx={{ minHeight: '64px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant='h4' >Logo</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {menu.map((menuItems,index)=>{
          return <SubMenuItem menuItem={menuItems} index={index} key={index}/>
          
        })}
      </Box>

    </Box>
  )
}
