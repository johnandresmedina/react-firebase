import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, Box, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  link: {
    padding: theme.spacing(2),
  },
}));

const SignedOutLinks = () => {
  const classes = useStyles();

  return (
    <Box>
      <Link className={classes.link} color='inherit' component={RouterLink} to='/signUp'>
        Signup
      </Link>
      <Link className={classes.link} color='inherit' component={RouterLink} to='/signIn'>
        Login
      </Link>
    </Box>
  );
};

export default SignedOutLinks;
