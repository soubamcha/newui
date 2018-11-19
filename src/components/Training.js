import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import IconButton from '@material-ui/core/IconButton';

import CheckIcon from '@material-ui/icons/DoneOutlined';
import CheckAllIcon from '@material-ui/icons/DoneAllOutlined';
import FinanceIcon from '@material-ui/icons/MonetizationOnOutlined';
import NotificationIcon from '@material-ui/icons/NotificationsActiveOutlined';
import BatchSizeIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import NominatedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import ConfirmedIcon from '@material-ui/icons/HowToRegOutlined';
import MoreIcon from '@material-ui/icons/MoreVertOutlined';
// import ClockIcon from '@material-ui/icons/AvTimerOutlined';
// import CertIcon from '@material-ui/icons/CardMembershipOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreOutlined';
import CloseIcon from '@material-ui/icons/ClearOutlined';

const styles = theme => ({
  root: {
    flexGrow: 1,
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
  subtitle: {
    fontSize: '70%',
    color: 'gray',
    fontStyle: 'italic',
  },
  paper: {
    width: '98%',
    marginLeft: "auto",
    marginRight: "auto",
  },
  cell: {
    padding: '0px 5px',
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
function createData(title, venue, from, to, sanction, announce, batch, nominated, confirmed, action, flag) {
  id++;
  return { id, title, venue, from, to , sanction, announce, batch, nominated, confirmed, action, flag};
}

const rows = [
  createData(
    "React for Biginners",
    "React, Noida",
    "12 Oct 2018", "16 Oct 2018",
    "both",true,
    25, 30, "25 [2]", "none", ""),
  createData(
    "Advanced SQL & NoSQL Programming using MySQL & Oracle Database",
    "ABCD, New Delhi",
    "18 Nov 2018", "22 Nov 2018",
    "both",true,
    30, 45, "--", "finalize", ""),
  createData(
    "Basic Computer Application",
    "KCK, Nagpur",
    "12 Oct 2018", "16 Oct 2018",
    "yes",true,
    35, 5, "--", "reminder", "adv"),
  createData(
    "MATLAB",
    "XYZ, Mumbai",
    "21 Nov 2018", "25 Nov 2018",
    "no",false,
    20, 0, "--", "announce", "cer"),
];

class Training extends React.Component {
  state = {
    
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.summarywrapper}>
          <ExpansionPanel className={classes.summary}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color="primary" className={classes.title}>
                {"Advanced SQL & NoSQL Programming using MySQL & Oracle Database"}
                <br /><span className={classes.subtitle}>{"18 Nov 2018 - 22 Nov 2018 at ABCD, New Delhi"}</span>
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
              <TableCell component="th" className={classes.cell}>SN</TableCell>
                <TableCell component="th" className={classes.cell}><strong>Title</strong></TableCell>
                <TableCell component="th" className={classes.cell}><strong>Venue</strong></TableCell>
                <TableCell component="th" className={classNames(classes.cell, classes.center)}><strong>From</strong></TableCell>
                <TableCell component="th" className={classNames(classes.cell, classes.center)}><strong>To</strong></TableCell>
                <TableCell component="th" className={classNames(classes.cell, classes.center)}><FinanceIcon /></TableCell>
                <TableCell component="th" className={classNames(classes.cell, classes.center)}><NotificationIcon /></TableCell>
                <TableCell component="th" className={classNames(classes.cell, classes.center)}><BatchSizeIcon /></TableCell>
                <TableCell component="th" className={classNames(classes.cell, classes.center)}><NominatedIcon /></TableCell>
                <TableCell component="th" className={classNames(classes.cell, classes.center)}><ConfirmedIcon /></TableCell>
                <TableCell component="th" className={classNames(classes.cell, classes.center)}><ConfirmedIcon /></TableCell>
                <TableCell component="th" className={classNames(classes.cell, classes.center)}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => {
                return (
                  <TableRow hover={true} key={row.id}>
                    <TableCell component="td" className={classes.cell}>{row.id}</TableCell>
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
                    <TableCell component="td" className={classNames(classes.cell, classes.center)}>{row.batch}</TableCell>
                    <TableCell component="td" className={classNames(classes.cell, classes.center)}>{row.nominated}</TableCell>
                    <TableCell component="td" className={classNames(classes.cell, classes.center)}>{row.confirmed}</TableCell>
                    <TableCell component="td" className={classNames(classes.cell, classes.center)}>--</TableCell>
                    <TableCell component="td" className={classNames(classes.cell, classes.center)}>
                      <IconButton className={classes.menuButton} aria-label="Institutes">
                        <MoreIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

Training.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Training);