import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Paper, Divider, makeStyles, Typography } from '@material-ui/core';
import formatRelative from 'date-fns/formatRelative';

import useProject from './useProject';

const useStyles = makeStyles({
  root: {
    justifyContent: 'center',
  },
});

const ProjectDetails = () => {
  const classes = useStyles();
  const { projectId } = useParams<{ projectId: string }>();
  const { isLoading, isError, data: projectDetails, error, isSuccess } = useProject(projectId);

  const getContent = () => {
    let content: React.ReactElement | null = null;

    if (isLoading) {
      content = <>{'Loading...'}</>;
    } else if (isSuccess && projectDetails) {
      const { title, content: projectContent, authorFirstName, authorLastName, createdAt } = projectDetails;

      content = (
        <Grid container className={classes.root}>
          <Grid item xs={6} component={Paper} elevation={2} square>
            <Box p={2}>
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
                  {formatRelative(createdAt, new Date())}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      );
    } else if (isError) {
      content = <>{`An error has occurred, please try again: ${error}`}</>;
    }

    return content;
  };

  return getContent();
};

export default ProjectDetails;
