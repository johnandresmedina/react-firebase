import React from 'react';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import formatRelative from 'date-fns/formatRelative';
import { ProjectType } from './types';

type ProjectSummaryProps = {
  project: ProjectType;
};

const ProjectSummary = ({ project }: ProjectSummaryProps) => {
  return (
    <Grid className='project-summary' component={Paper} elevation={2} square>
      <Box mb={1}>
        <Box className='card-content' p={2}>
          <Box className='card-title'>
            <Typography variant='h5'>{project.title}</Typography>
          </Box>
          <Box className='card-title'>
            <Typography>Posted by {`${project.authorFirstName} ${project.authorLastName}`}</Typography>
          </Box>
          <Box className='card-title'>
            <Typography color='textSecondary'>
              {project.createdAt && formatRelative(project.createdAt, new Date())}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default ProjectSummary;
