import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export default function SubMenuItem(props) {
  const [openMenu, setOpenMenu] = React.useState(false);

    console.log(props);
    const toggleMenuOpen = () => setOpenMenu(!openMenu);
    const {menuItem} = props;
  return (
    <Box>
        <Button onClick={menuItem.subMenu && toggleMenuOpen}>
                {menuItem.icon}<Typography variant='span'>{menuItem.title}</Typography>{menuItem.subMenu && openMenu ? menuItem.iconOpened : menuItem.subMenu ? menuItem.iconClosed : null}
    </Button>
    <Box>
        {menuItem.subMenu && openMenu && menuItem.subMenu.map((items,index)=>{
                return <Button key={index}>{items.title}</Button>
              })}
    </Box>  
    </Box>      
  )
}
