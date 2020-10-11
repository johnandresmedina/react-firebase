import React, { useContext } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { makeStyles, Box, Link, Avatar } from '@material-ui/core';

import { AuthContext } from '../context/authContext';
import { signOut } from '../auth/authService';
import { cleanLogin } from '../auth/authReducer';

const useStyles = makeStyles(theme => ({
  link: {
    padding: theme.spacing(2),
  },
  avatar: {
    textDecoration: 'none',
    marginLeft: theme.spacing(2),
  },
}));

export default function SignedInLinks() {
  const classes = useStyles();
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);

  const handleLogOut = async () => {
    try {
      await signOut();
      dispatch(cleanLogin());
      history.push('/signIn');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <>
      <Box>
        <Link className={classes.link} color='inherit' component={RouterLink} to='/create'>
          New Project
        </Link>
        <Link className={classes.link} color='inherit' onClick={handleLogOut}>
          Log Out
        </Link>
      </Box>
      <Avatar component={RouterLink} to='/' className={classes.avatar}>
        JM
      </Avatar>
    </>
  );
}