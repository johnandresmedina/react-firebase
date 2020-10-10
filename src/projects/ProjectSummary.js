import React from 'react';
import PropTypes from 'prop-types';
import { Box, Paper, Typography } from '@material-ui/core';

export default function Projects({ project }) {
  return (
    <Box className='project-summary' component={Paper} elevation={2} square mb={1}>
      <Box className='card-content' p={2}>
        <Box className='card-title'>
          <Typography variant='h5'>{project.title}</Typography>
        </Box>
        <Box className='card-title'>
          <Typography>Posted by John Medina</Typography>
        </Box>
        <Box className='card-title'>
          <Typography color='textSecondary'>Today October 15 2040</Typography>
        </Box>
      </Box>
    </Box>
  );
}

Projects.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
};
