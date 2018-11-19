import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Link} from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Grow from '@material-ui/core/Grow';
import Tooltip from '@material-ui/core/Tooltip';
// import Drawer from '@material-ui/core/Drawer';
// import MenuIcon from '@material-ui/icons/Menu';
// import {List, ListItem, ListItemIcon } from '@material-ui/core';

import BuildingIcon from '@material-ui/icons/LocationCityOutlined';
import BusinessIcon from '@material-ui/icons/BusinessOutlined';
import CalendarIcon from '@material-ui/icons/CalendarTodayOutlined';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import FinanceIcon from '@material-ui/icons/MonetizationOnOutlined';
import EmployeeIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import ReportIcon from '@material-ui/icons/InsertChartOutlined';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';

import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import SignOutIcon from '@material-ui/icons/PowerSettingsNewOutlined';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    // backgroundColor: '#311b92',
    backgroundColor: 'white',
    zIndex: '5000',
  },
  toolbar: {
    margin: '0px',
  },
  logo: {
    // marginLeft: 'auto',
    marginRight: 'auto',
  },
  separator:{
    color: 'gray',
    borderRight: '1px solid lightgrey',
    height: '40px',
    margin: '0px 20px 0px 10px',
  },
  avatar: {
    cursor: 'pointer',
  },
   card: {
    display: 'flex',
    width: '390px',
    position: 'absolute',
    right: '20px',
    top: '70px',
    zIndex: '999',
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
    padding: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  drawer: {
    flexShrink: 0,
  },
	listitem: {
		padding: '10px',
	},
	listicon:{
		marginRight: '0px',
	},
});

class MenuAppBar extends React.Component {
  state = {
    showCard: false,
  };

  handleCardOpen = () => {
    var status = !this.state.showCard;
    this.setState({
      showCard: status,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {/* <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <IconButton className={classes.menuButton} color="primary" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <img src="/tis.png" alt="logo" className={classes.logo} />
            <Avatar alt="avatar" src="/avatar.jpeg" className={classes.avatar} onClick={this.handleCardOpen} />
          </Toolbar>
        </AppBar> */}
        <Router>
          <AppBar position="static" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
              <img src="/tis.png" alt="logo" className={classes.logo} />
              <Link to="/dashboard">
                <Tooltip title="Dashboard" placement="bottom">
                  <IconButton className={classes.menuButton} aria-label="Dashboard">
                    <DashboardIcon />
                  </IconButton>
                </Tooltip>
              </Link>
              <Link to="/calendar">
                <Tooltip title="Calendar" placement="bottom">
                  <IconButton className={classes.menuButton} aria-label="Calendar">
                    <CalendarIcon />
                  </IconButton>
                </Tooltip>
              </Link>
              <Tooltip title="Finances" placement="bottom">
                <IconButton className={classes.menuButton} aria-label="Finances">
                  <FinanceIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Labs" placement="bottom">
                <IconButton className={classes.menuButton} aria-label="Labs">
                  <BusinessIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Institutes" placement="bottom">
                <IconButton className={classes.menuButton} aria-label="Institutes">
                  <BuildingIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Employees" placement="bottom">
                <IconButton className={classes.menuButton} aria-label="Employees">
                  <EmployeeIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Reports" placement="bottom">
                <IconButton className={classes.menuButton} aria-label="Reports">
                  <ReportIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Users" placement="bottom">
                <IconButton className={classes.menuButton} aria-label="Users">
                  <PeopleIcon />
                </IconButton>
              </Tooltip>
              <span className={classes.separator}></span>
              <Avatar alt="avatar" src="/avatar.jpeg" className={classes.avatar} onClick={this.handleCardOpen} />
            </Toolbar>
          </AppBar>
        </Router>
        <Router>
          <Grow in={this.state.showCard} mountOnEnter unmountOnExit>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cover}
                image="/avatar.jpeg"
                title="J Soubamcha"
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography variant="subtitle1" color="primary">
                    J Soubamcha
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Programmer
                  </Typography>
                </CardContent>
                <Divider light />
                <div className={classes.controls}>
                  <Link to="/myprofile">
                    <Button variant="outlined" color="primary" className={classes.button} aria-label="Profile">
                      <SettingsIcon />
                    </Button>
                  </Link>
                  <Button variant="contained" color="secondary" className={classes.button} aria-label="Sign Out">
                    <SignOutIcon /> Sign Out
                  </Button>
                </div>
              </div>
            </Card>
          </Grow>
        </Router>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);