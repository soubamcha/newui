import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    // backgroundColor: '#311b92',
    backgroundColor: 'white',
  },
  toolbar: {
    margin: '0px',
  },
  logo: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  avatar: {
    margin: 10,
    cursor: 'pointer',
  },
  card: {
    display: 'flex',
    width: '394px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class MenuAppBar extends React.Component {
  state = {

  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <IconButton className={classes.menuButton} color="primary" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <img src="/tis.png" alt="logo" className={classes.logo} />
            <div>
              <Avatar alt="avatar" src="/avatar.jpeg" className={classes.avatar} />
            </div>
          </Toolbar>
        </AppBar>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cover}
            image="/avatar.jpeg"
            title="J Soubamcha"
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                J Soubamcha
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Programmer
              </Typography>
            </CardContent>
            <Divider light />
            <div className={classes.controls}>
              <Button variant="outlined" color="primary" className={classes.button}>
                Profile
              </Button>
              <Button variant="contained" color="secondary" className={classes.button}>
                Sign Out
              </Button>
            </div>
          </div>
          
        </Card>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);