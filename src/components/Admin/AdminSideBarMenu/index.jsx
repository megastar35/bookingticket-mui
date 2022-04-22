import { Box, Typography} from '@mui/material'
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import GroupIcon from '@mui/icons-material/Group';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from 'react'
import SubMenuItem from '../SideBarSubMenu';


const menu = [
  {
    title: 'Movie',
    icon: <MovieCreationIcon />,
    iconClosed: <ArrowLeftIcon />,
    iconOpened: <ArrowDropDownIcon />,
    subMenu: [{
      title: 'List Movies',
      path: '/list-movies'
    },
    {
      title: 'Add New Movie',
      path: '/add-movie',
    }]
  },
  {
    title: 'User',
    icon: <GroupIcon />,
    iconClosed: <ArrowLeftIcon />,
    iconOpened: <ArrowDropDownIcon />,
    subMenu: [{
      title: 'List Users',
      path:'/list-users',
    },
    {
      title: 'Add New User',
      path:'/add-user'
    }]
  },
  {
    title: 'Box Office',
    icon: <ConfirmationNumberIcon />,
    iconClosed: <ArrowLeftIcon />,
    iconOpened: <ArrowDropDownIcon />,
    subMenu: [{
      title: 'List Box Offices',
      path: '/list-box-offices',
    },
    {
      title: 'Add New Box Office',
      path: '/add-box-office',
    }]
  }
];

export default function AdminSideBarMenu(props) {
  return (
    <Box sx={{ position: 'fixed', top: 0, left: 0, width: "250px", height: "100%", backgroundColor: "#fff", boxShadow: '0 0.3rem 0.8rem rgb(0 0 0 / 12%)' }}>
      <Box sx={{ minHeight: '64px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant='h4' >Logo</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {menu.map((menuItems,index)=>{
          return <SubMenuItem menuItem={menuItems} key={index}/>
        })}
      </Box>

    </Box>
  )
}
