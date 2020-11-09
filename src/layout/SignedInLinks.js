import React, { useContext } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { makeStyles, Box, Link, Avatar } from '@material-ui/core';

import { AuthContext } from '../context/authContext';
import { signOut } from '../auth/authService';
import { UserProfileContext } from '../context/userProfileContext';

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
  const { setUser } = useContext(AuthContext);
  const userProfile = useContext(UserProfileContext);

  const handleLogOut = async () => {
    try {
      await signOut();
      setUser(null);
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
        {userProfile ? `${userProfile.firstName[0]}${userProfile.lastName[0]}` : null}
      </Avatar>
    </>
  );
}
