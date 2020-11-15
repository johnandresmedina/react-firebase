import React from 'react';
import { Box, Paper, Typography, List, ListItem, ListItemText, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  list: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

const Notifications = () => {
  const classes = useStyles();

  return (
    <Grid item component={Paper} elevation={2} square>
      <Box className='card-content' p={2} mb={1} my={2} paddingX={3}>
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
    </Grid>
  );
};

export default Notifications;
