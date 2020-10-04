import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid } from '@material-ui/core';

export default function ProjectDetails() {
  const { id } = useParams();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box className='card-content'>
          <Box className='card-title'></Box>
          <Box component='p'>Project title example</Box>
        </Box>
        <Box className='card-action'>
          <Box>Posted by John Medina</Box>
          <Box>5th October, 2pm</Box>
          <Box>Project Id: {id}</Box>
        </Box>
      </Grid>
    </Grid>
  );
}
