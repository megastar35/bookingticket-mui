import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Avatar, Menu, MenuItem, Tooltip } from '@mui/material';


const pages = ['Home', 'Movie', 'User', 'Box Office', 'Logout']

export default function AdminDashBoard() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box >
      <AppBar position="fixed" sx={{ width: "calc(100% - 250px)" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, textAlign: 'right' }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Lieu Dung Tri" src="/static/images/avatar/2.jpg" />
                <Box sx={{ml: '10px'}}>
                  <Typography>Lieu Dung Tri</Typography>
                  <Typography>Quan Tri</Typography>
                </Box>
              </IconButton>
            </Tooltip>
            <Menu sx={{mt: '10px'}} id="menu-appbar" anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
