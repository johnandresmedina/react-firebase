import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, AppBar, Toolbar, Typography, IconButton, Link, Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Sidebar from './Sidebar';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    '&:hover': { textDecoration: 'none' },
  },
  avatar: {
    marginLeft: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpen(isOpen => !isOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Link className={classes.title} color='inherit' component={RouterLink} to='/'>
            <Typography variant='h6'>Project Management</Typography>
          </Link>
          <SignedInLinks />
          <SignedOutLinks />
          <Avatar className={classes.avatar}>H</Avatar>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
