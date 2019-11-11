import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { Link } from 'react-router-dom';

const drawerWidth = 250;

const styles = (theme) => ({
  drawerContainer: {
    background: '#373758',
    height: '100vh'
  },
  drawerPaper: {
    background: '#373758',
    color: '#73738b',
    position: 'relative',
    height: 'auto',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    width: 60,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  drawerInner: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    height: 56,
    [theme.breakpoints.up('sm')]: {
      height: 64
    }
  },
  avatar: {
    margin: '10% auto',
    border: '10px #73738b solid'
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
});

const MiniDrawer = (props) => {
  let { navDrawerOpen } = props;
  const classes = props.classes;

  return (
    <Drawer
      className={classes.drawerContainer}
      variant="permanent"
      classes={{
        paper: classNames(classes.drawerPaper, !navDrawerOpen && classes.drawerPaperClose)
      }}
      open={navDrawerOpen}
    >
      <Divider />
      <div className={classes.root}>
        <Avatar alt="User" src="/img/avatar5.jpg" className={classNames(classes.avatar, classes.bigAvatar)} />
      </div>
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/users">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={Link} to="/clients">
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Info Clients" />
        </ListItem>
      </List>
    </Drawer>
  );
};

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  navDrawerOpen: PropTypes.bool
};

export default withStyles(styles)(MiniDrawer);
