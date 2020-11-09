import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField, Paper, Grid, Typography, makeStyles } from '@material-ui/core';

import { UserProfileContext } from '../context/userProfileContext';
import useCreateProject from './useCreateProject';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CreateProject() {
  const classes = useStyles();
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { firstName, lastName, id: userId } = useContext(UserProfileContext);

  const [mutate, { isError, isLoading }] = useCreateProject();

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await mutate({ title, content, firstName, lastName, userId });
      history.push('/');
      // eslint-disable-next-line no-empty
    } catch (error) {}
  };

  return (
    <Grid container component='main' className={classes.root}>
      <Grid item xs={6} component={Paper} elevation={3} square>
        <div className={classes.paper}>
          <Typography component='h1' variant='h5'>
            Create new project
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='title'
              label='Title'
              name='title'
              autoComplete='title'
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='content'
              label='Content'
              name='content'
              autoComplete='content'
              multiline
              rows={4}
              value={content}
              onChange={event => setContent(event.target.value)}
            />
            <Button type='submit' variant='contained' color='primary' className={classes.submit} disabled={isLoading}>
              Create project
            </Button>
            {isError && (
              <Typography component='p' color='textPrimary'>
                {`There's been an error creating the project, please try again`}
              </Typography>
            )}
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
