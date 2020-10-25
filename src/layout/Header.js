import React, { useContext, useState, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, AppBar, Toolbar, Typography, IconButton, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Sidebar from './Sidebar';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { AuthContext } from '../context/authContext';

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
}));

const Header = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const {
    state: { user },
  } = useContext(AuthContext);

  const toggleSidebar = event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpen(isOpen => !isOpen);
  };

  const links = useMemo(() => {
    return user?.uid ? <SignedInLinks user={user} /> : <SignedOutLinks />;
  }, [user]);

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
          {links}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
