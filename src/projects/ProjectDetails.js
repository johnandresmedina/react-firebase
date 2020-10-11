import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Paper, Divider, makeStyles, Typography } from '@material-ui/core';

import firebase from '../config/firebase';

const useStyles = makeStyles({
  root: {
    justifyContent: 'center',
  },
});

export default function ProjectDetails() {
  const classes = useStyles();
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getProjectDetails = async () => {
      try {
        const project = await firebase.firestore().collection('projects').doc(id).get();
        setProject({ id: project.id, ...project.data() });
      } catch (error) {
        setError(error);
      }
    };

    getProjectDetails();
  }, [id]);

  return project ? (
    <Grid container className={classes.root}>
      <Grid item xs={6}>
        <Box component={Paper} elevation={2} square p={2}>
          <Box className='card-content' mb={2}>
            <Box className='card-title'>
              <Typography component='h1' variant='h5'>
                {project.title}
              </Typography>
              <Typography component='div'>{project.content}</Typography>
            </Box>
          </Box>
          <Divider />
          <Box className='card-action'>
            <Typography component='p' color='textSecondary'>
              {`${project.authorFirstName} ${project.authorLastName}`}
            </Typography>
            <Typography component='p' color='textSecondary'>
              {project.createdAt.seconds}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  ) : error ? (
    'An error has occurred, please try again'
  ) : (
    'Loading...'
  );
}
