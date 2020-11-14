import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { MoveToInbox, Mail } from '@material-ui/icons';

type SideBarProps = {
  isOpen: boolean;
  toggleSidebar: (event: React.KeyboardEvent | React.MouseEvent) => void;
};

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const Sidebar = ({ isOpen, toggleSidebar }: SideBarProps) => {
  const classes = useStyles();

  return (
    <Drawer anchor='left' open={isOpen} onClose={toggleSidebar}>
      <div className={classes.list} role='presentation' onClick={toggleSidebar} onKeyDown={toggleSidebar}>
        <List>
          {['Inbox', 'Starred'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <MoveToInbox /> : <Mail />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <MoveToInbox /> : <Mail />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
