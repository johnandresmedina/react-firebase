import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar, Button, TextField, Link, Paper, Box, Grid, Typography, makeStyles } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Copyright from './Copyright';
import { signUp } from './authService';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const history = useHistory();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signUp({ email, password, firstName, lastName });
      history.push('/');
    } catch (error) {
      setError(error?.message);
    }
  };

  return (
    <Grid container component='main' className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='firstname'
              label='First Name'
              name='firstname'
              autoComplete='firstname'
              value={firstName}
              onChange={event => setFirstName(event.target.value)}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='lastname'
              label='Last Name'
              name='lastname'
              autoComplete='lastname'
              value={lastName}
              onChange={event => setLastName(event.target.value)}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
              Sign In
            </Button>
            {error && <Box>{error}</Box>}
            <Grid container>
              <Grid item>
                <Link href='#' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignUp;
