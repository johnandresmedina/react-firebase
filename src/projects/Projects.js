import React from 'react';
import Box from '@material-ui/core/Box';

import ProjectSummary from './ProjectSummary';

export default function Projects() {
  return (
    <Box className='project-list'>
      <ProjectSummary title='Project Title' postedBy='Posted by John Medina' date='5th October 2020' />
    </Box>
  );
}
