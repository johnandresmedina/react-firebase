import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, Box, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  link: {
    padding: theme.spacing(2),
  },
}));

export default function SignedOutLinks() {
  const classes = useStyles();

  return (
    <Box>
      <Link className={classes.link} color='inherit' component={RouterLink} to='/'>
        Signup
      </Link>
      <Link className={classes.link} color='inherit' component={RouterLink} to='/'>
        LogIn
      </Link>
    </Box>
  );
}
