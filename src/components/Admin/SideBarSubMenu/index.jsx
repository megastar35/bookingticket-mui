import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

export default function SubMenuItem(props) {
  const [openMenu, setOpenMenu] = React.useState(false);
  const toggleMenuOpen = () => setOpenMenu(!openMenu);
  const { menuItem } = props;

  const StyledMenuItems = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  }))
  const StyledSubMenu = styled('div')(() => ({
    border: '1px solid #ccc',
    margin: '0 10px'
  }))
  const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    display: 'block',
    padding: '10px 20px 0',
    '&:last-child': {
      paddingBottom: '10px',
    }
  }))
  const renderSubMenu = () => {
    if (openMenu) {
      return <StyledSubMenu>
        {menuItem.subMenu && openMenu && menuItem.subMenu.map((items, index) => {
          return <StyledLink to={items.path} key={index}>{items.title}</StyledLink>
        })}
      </StyledSubMenu>
    } else {
      return <></>
    }
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Button onClick={menuItem.subMenu && toggleMenuOpen} sx={{ width: '100%' }}>
        <StyledMenuItems>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>{menuItem.icon}<Typography variant='span'>{menuItem.title}</Typography></Box>
          {openMenu ? menuItem.iconOpened : menuItem.iconClosed}
        </StyledMenuItems>
      </Button>
      {renderSubMenu()}
    </Box>
  )
}
