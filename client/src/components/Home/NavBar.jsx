import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const options = ['Categories', 'Outfit', 'Cart'];
const settings = ['Profile', 'Account', 'Checkout', 'Logout'];

const navBar = (props) => {
  const [anchorNav, setAnchorNav] = React.useState(null);
  const [anchorUser, setAnchorUser] = React.useState(null);

  const openMenue = (event) => {
    setAnchorNav(event.currentTarget);
  };
  const openUserMenue = (event) => {
    setAnchorUser(event.currentTarget);
  };

  const closeMenue = () => {
    setAnchorNav(null);
  };

  const closeUserMenue = () => {
    setAnchorUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Project Pacific
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={openMenue}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorNav)}
              onClose={closeMenue}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem key='categories' onClick={props.categories}>
                <Typography textAlign="center">CATEGORIES</Typography>
              </MenuItem>
              <MenuItem key='outfit' onClick={closeMenue}>
                <Typography textAlign="center">OUTFIT</Typography>
              </MenuItem>
              <MenuItem key='cart' onClick={closeMenue}>
                <Typography textAlign="center">CART</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              key='categories'
              onClick={props.categories}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              CATEGORIES
            </Button>

            <Button
              key='outfit'
              onClick={closeMenue}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              OUTFIT
            </Button>
            <Button
              key='cart'
              onClick={closeMenue}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              CART
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={openUserMenue} sx={{ p: 0 }}>
                <Avatar alt="Hack Reactor" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorUser)}
              onClose={closeUserMenue}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={closeUserMenue}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default navBar;