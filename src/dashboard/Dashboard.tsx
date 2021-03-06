import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Notifications from './Notifications';
import Projects from '../projects/Projects';

const Dashboard = () => {
  return (
    <Grid container className='dashboard'>
      <Grid item xs={6}>
        <Box my={2} paddingX={3}>
          <Projects />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box my={2} paddingX={3}>
          <Notifications />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
