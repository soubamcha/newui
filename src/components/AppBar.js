import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  root: {
    flexGrow: 1,
  },
  appbar: {
    // backgroundColor: '#311b92',
    backgroundColor: 'white',
    cursor: 'pointer',
  },
  avatar: {
    margin: 10,
  },
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="primary" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <img src="/tis.png" alt="logo" />
            <div>
              <Avatar alt="avatar" src="/avatar.jpeg" className={classes.avatar} />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);