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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const authContext = useContext(AuthContext);

  const toggleSidebar = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setIsOpen(isOpen => !isOpen);
  };

  const links = useMemo(() => {
    return authContext?.user?.uid ? <SignedInLinks /> : <SignedOutLinks />;
  }, [authContext?.user]);

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
