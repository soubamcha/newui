import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Scrollbar from 'react-perfect-scrollbar';
import {BrowserRouter as Router, Link} from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import CheckIcon from '@material-ui/icons/DoneOutlined';
import CheckAllIcon from '@material-ui/icons/DoneAllOutlined';
import FinanceIcon from '@material-ui/icons/MonetizationOnOutlined';
import NotificationIcon from '@material-ui/icons/NotificationsActiveOutlined';
import BatchSizeIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import NominatedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import ConfirmedIcon from '@material-ui/icons/HowToRegOutlined';
import HamIcon from '@material-ui/icons/GavelOutlined';
import ClockIcon from '@material-ui/icons/AvTimerOutlined';
import CertIcon from '@material-ui/icons/CardMembershipOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreOutlined';
import CloseIcon from '@material-ui/icons/ClearOutlined';

import 'react-perfect-scrollbar/dist/css/styles.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    // marginLeft: '45px',
  },
  summarywrapper: {
    marginTop: '10px',
  },
  summary: {
    width: '98%',
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    fontSize: '140%',
    fontWeight: 'bold',
    lineHeight: '20px',
  },
  paper: {
    width: '98%',
    marginLeft: "auto",
    marginRight: "auto",
  },
  cell: {
    padding: '0px 5px!important',
    fontSize: '90%',
  },
  center: {
    textAlign: "center",
  },
  green: {
    color: "green",
  },
});

let id = 0;
function createData(title, venue, from, to, ldate, sanction, announce, batch, nominated, confirmed, action, flag) {
  id++;
  return { id, title, venue, from, to , ldate, sanction, announce, batch, nominated, confirmed, action, flag};
}

const rows = [
  createData(
    "React for Biginners",
    "React, Noida",
    "12/OCT/18", "16/OCT/18", "15/NOV",
    "both",true,
    25, 30, "25 [2]", "none", ""),
  createData(
    "Advanced SQL & NoSQL Programming using MySQL & Oracle Database",
    "ABCD, New Delhi",
    "18/NOV/18", "22/NOV/18", "15/DEC",
    "both",true,
    30, 45, "--", "finalize", ""),
  createData(
    "Basic Computer Application",
    "KCK, Nagpur",
    "12/DEC/18", "16/DEC/18", "15/JAN",
    "yes",true,
    35, 5, "--", "reminder", "adv"),
  createData(
    "MATLAB",
    "XYZ, Mumbai",
    "20/DEC/18", "24/DEC/18", "--",
    "no",false,
    20, 0, "--", "announce", "cer"),
];

class Dashboard extends React.Component {
  state = {
    
  };

  render() {
    const { classes } = this.props;

    return (
      <Router>
        <div className={classes.root}>
        <Scrollbar>
          <div className={classes.summarywrapper}>
            <ExpansionPanel className={classes.summary}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color="primary" className={classes.title}>
                  Dashboard
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Something is comming
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
          <Paper className={classes.paper}>
            <Table>
              <TableHead>
                <TableRow>
                <TableCell component="th" className={classes.cell}></TableCell>
                  <TableCell component="th" className={classes.cell}><strong>Title</strong></TableCell>
                  <TableCell component="th" className={classes.cell}><strong>Venue</strong></TableCell>
                  <TableCell component="th" className={classNames(classes.cell, classes.center)}><strong>From</strong></TableCell>
                  <TableCell component="th" className={classNames(classes.cell, classes.center)}><strong>To</strong></TableCell>
                  <TableCell component="th" className={classNames(classes.cell, classes.center)}><FinanceIcon /></TableCell>
                  <TableCell component="th" className={classNames(classes.cell, classes.center)}><NotificationIcon /></TableCell>
                  <TableCell component="th" className={classNames(classes.cell, classes.center)}><strong>LDate</strong></TableCell>
                  <TableCell component="th" className={classNames(classes.cell, classes.center)}><BatchSizeIcon /></TableCell>
                  <TableCell component="th" className={classNames(classes.cell, classes.center)}><NominatedIcon /></TableCell>
                  <TableCell component="th" className={classNames(classes.cell, classes.center)}><ConfirmedIcon /></TableCell>
                  <TableCell component="th" className={classNames(classes.cell, classes.center)}><HamIcon /></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => {
                  return (
                    <TableRow hover={true} key={row.id}>
                      <TableCell component="td" className={classes.cell}>
                        {
                          row.flag==="cer"?<CertIcon color="secondary" />:row.flag==="adv"?<FinanceIcon color="secondary" />:""
                        }
                      </TableCell>
                      <TableCell component="td" className={classes.cell}><strong>{row.title}</strong></TableCell>
                      <TableCell component="td" className={classes.cell}>{row.venue}</TableCell>
                      <TableCell component="td" className={classNames(classes.cell, classes.center)}>{row.from}</TableCell>
                      <TableCell component="td" className={classNames(classes.cell, classes.center)}>{row.to}</TableCell>
                      <TableCell component="td" className={classNames(classes.cell, classes.center)}>
                        {
                          row.sanction==="both"?
                          <CheckAllIcon className={classes.green} />
                          :row.sanction==="yes"?
                          <CheckIcon className={classes.green} />
                          :<CloseIcon color="secondary" />
                        }
                      </TableCell>
                      <TableCell component="td" className={classNames(classes.cell, classes.center)}>
                        {
                          row.announce?
                          <CheckIcon className={classes.green} />
                          :<CloseIcon color="secondary" />
                        }
                      </TableCell>
                      <TableCell component="td" className={classNames(classes.cell, classes.center)}>{row.ldate}</TableCell>
                      <TableCell component="td" className={classNames(classes.cell, classes.center)}>{row.batch}</TableCell>
                      <TableCell component="td" className={classNames(classes.cell, classes.center)}>{row.nominated}</TableCell>
                      <TableCell component="td" className={classNames(classes.cell, classes.center)}>{row.confirmed}</TableCell>
                      <TableCell component="td" className={classNames(classes.cell, classes.center)}>
                        {
                          row.action==="announce"?
                          <Link to="/calendar/someid">
                            <Button variant="outlined" size="small" color="primary"><NotificationIcon /></Button>
                          </Link>
                          :row.action==="reminder"?
                          <Button variant="outlined" size="small" color="secondary"><ClockIcon /></Button>
                          :row.action==="finalize"?
                          <Button variant="outlined" size="small" className={classes.green}><ConfirmedIcon /></Button>
                          :<CheckAllIcon className={classes.green} />
                        }
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
          </Scrollbar>
        </div>
      </Router>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);