import React from 'react';
import { Box, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  list: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

export default function Notifications() {
  const classes = useStyles();

  return (
    <Box className='project-summary' component={Paper} elevation={2} square mb={1} my={2} paddingX={3}>
      <Box className='card-content' p={2}>
        <Box className='card-title'>
          <Typography variant='h5'>Notifications</Typography>
        </Box>
        <List dense={false}>
          <ListItem className={classes.list}>
            <ListItemText primary='Notification 1' />
            <ListItemText primary='Notification 2' />
            <ListItemText primary='Notification 3' />
            <ListItemText primary='Notification 4' />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
