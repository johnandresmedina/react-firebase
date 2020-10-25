import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { makeStyles, Box, Link, Avatar } from '@material-ui/core';

import { AuthContext } from '../context/authContext';
import { signOut } from '../auth/authService';
import { getUserById } from '../auth/userService';
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

export default function SignedInLinks({ user }) {
  const classes = useStyles();
  const history = useHistory();
  const [userProfile, setUserProfile] = useState(null);
  const { dispatch } = useContext(AuthContext);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const profile = await getUserById(user.uid);
        setUserProfile(profile);
      } catch (error) {
        //ignore for now
      }
    };

    getUserProfile();
  }, [user]);

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
        {userProfile ? `${userProfile.firstName[0]}${userProfile.lastName[0]}` : null}
      </Avatar>
    </>
  );
}

SignedInLinks.propTypes = {
  user: PropTypes.object.isRequired,
};
