import React from 'react';
import PropTypes from 'prop-types';
import { Box, Paper, Typography } from '@material-ui/core';

export default function ProjectSummary({ project }) {
  return (
    <Box className='project-summary' component={Paper} elevation={2} square mb={1}>
      <Box className='card-content' p={2}>
        <Box className='card-title'>
          <Typography variant='h5'>{project.title}</Typography>
        </Box>
        <Box className='card-title'>
          <Typography>Posted by {`${project.authorFirstName} ${project.authorLastName}`}</Typography>
        </Box>
        <Box className='card-title'>
          <Typography color='textSecondary'>Today October 15 2040</Typography>
        </Box>
      </Box>
    </Box>
  );
}

ProjectSummary.propTypes = {
  project: PropTypes.shape({
    authorFirstName: PropTypes.string.isRequired,
    authorLastName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
