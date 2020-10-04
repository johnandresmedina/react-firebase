import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, Box, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  link: {
    padding: theme.spacing(2),
  },
}));

export default function SignedInLinks() {
  const classes = useStyles();

  return (
    <Box>
      <Link className={classes.link} color='inherit' component={RouterLink} to='/'>
        New Project
      </Link>
      <Link className={classes.link} color='inherit' component={RouterLink} to='/'>
        Log Out
      </Link>
    </Box>
  );
}
