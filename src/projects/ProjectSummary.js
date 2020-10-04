import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';

export default function Projects({ title, postedBy, date }) {
  return (
    <Box className='project-summary'>
      <Box className='card-content'>
        <Box className='card-title'>
          <Typography variant='h5'>{title}</Typography>
        </Box>
        <Box className='card-title'>
          <Typography>{postedBy}</Typography>
        </Box>
        <Box className='card-title'>
          <Typography color='textSecondary'>{date}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

Projects.propTypes = {
  date: PropTypes.string.isRequired,
  postedBy: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
