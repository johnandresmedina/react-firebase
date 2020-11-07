import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Paper, Divider, makeStyles, Typography } from '@material-ui/core';
import { useQuery, useQueryCache } from 'react-query';
import formatRelative from 'date-fns/formatRelative';

import { getProjectById } from './projectService';

const useStyles = makeStyles({
  root: {
    justifyContent: 'center',
  },
});

export default function ProjectDetails() {
  const classes = useStyles();
  const { id: projectId } = useParams();
  const queryCache = useQueryCache();
  const { isLoading, isError, data: projectDetails, error, isSuccess } = useQuery(
    ['project', projectId],
    getProjectById,
    {
      initialData: () => {
        return queryCache.getQueryData(['projects', 'title'])?.find(project => project.id === projectId);
      },
    },
  );

  const getContent = () => {
    let content = null;

    if (isLoading) {
      content = 'Loading...';
    } else if (isSuccess) {
      const { title, content: projectContent, authorFirstName, authorLastName, createdAt } = projectDetails;

      content = (
        <Grid container className={classes.root}>
          <Grid item xs={6}>
            <Box component={Paper} elevation={2} square p={2}>
              <Box className='card-content' mb={2}>
                <Box className='card-title'>
                  <Typography component='h1' variant='h5'>
                    {title}
                  </Typography>
                  <Typography component='div'>{projectContent}</Typography>
                </Box>
              </Box>
              <Divider />
              <Box className='card-action'>
                <Typography component='p' color='textSecondary'>
                  {`${authorFirstName} ${authorLastName}`}
                </Typography>
                <Typography component='p' color='textSecondary'>
                  {formatRelative(createdAt?.toDate(), new Date())}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      );
    } else if (isError) {
      content = `An error has occurred, please try again: ${error}`;
    }

    return content;
  };

  return getContent();
}
