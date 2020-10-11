import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Paper, Divider, makeStyles, Typography } from '@material-ui/core';

import { getProjectById } from './projectService';

const useStyles = makeStyles({
  root: {
    justifyContent: 'center',
  },
});

export default function ProjectDetails() {
  const classes = useStyles();
  const [project, setProject] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getProjectDetails = async () => {
      try {
        setStatus('pending');
        const projectById = await getProjectById(id);
        setProject(projectById);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        setError(error);
      }
    };

    getProjectDetails();
  }, [id]);

  const getContent = () => {
    let content = null;

    if (status === 'idle' || status === 'pending') {
      content = 'Loading...';
    } else if (status === 'resolved') {
      content = (
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
      );
    } else if (status === 'rejected') {
      content = `An error has occurred, please try again: ${error}`;
    }

    return content;
  };

  return getContent();
}
