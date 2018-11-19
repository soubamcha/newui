import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

// import FingerprintIcon from '@material-ui/icons/FingerprintOutlined';

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    width: '100%',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundImage: "-webkit-linear-gradient(135deg, rgba(200,200,200,.1) 50%, white 50%)",
  },
  paper: {
    width: '450px',
  },
  logowrapper: {
    backgroundColor: "#311b92",
  },
  logo: {
    margin: '30px',
  },
  titlewrapper: {
    margin: '30px',
  },
  inputwrapper: {
    margin: '30px',
  },
  input: {
    width: '100%',
  },
  button: {
    margin: theme.spacing.unit,
  },
  butts: {
    textAlign: 'right',
    margin: '40px 30px',
    marginLeft: "10px",
  },
  left: {
    float: 'left',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  right: {
    float: 'right',
  },
  clear: {
    clear: 'both',
  }
});

class Login extends React.Component {
 
  state = {
    
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div>
            <div className={classes.logowrapper}>
              <img src="/tis.png" alt="logo" className={classes.logo} />
            </div>
            <LinearProgress />
            <div className={classes.titlewrapper}>
              <Typography variant="h4" color="textPrimary" align="left">
                {"Sign In"}
              </Typography>
              <Typography variant="body1" color="textSecondary" align="left">
                {"Please Provide Credentials to Sign In"}
              </Typography>
            </div>
            <div className={classes.inputwrapper}>
              <TextField
                className={classes.input}
                id="input-with-icon-textfield"
                label="User Name"
              />
            </div>
            <div className={classes.inputwrapper}>
              <TextField
                className={classes.input}
                id="input-with-icon-textfield"
                label="Password"
                type="password"
              />
            </div>
            <div className={classes.butts}>
              <Button color="primary" size="large" className={classes.left}>
                Quick Calendar
              </Button>
              <Button variant="contained" color="primary" size="large" className={classes.right}>
                Sign In
              </Button>
              <div className={classes.clear}></div>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);