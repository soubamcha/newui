import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  // withRouter
} from "react-router-dom";


import Login from './components/Login';
import MenuAppBar from "./components/AppBar";
import Dashboard from "./components/Dashboard";
import Calendar from "./components/Calendar";
import Training from "./components/Training";

import './App.css';

const auth = {
  isAuthenticated: true,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        {
          auth.isAuthenticated && <MenuAppBar />
        }
        <SecureRoute exact path="/dashboard" component={Dashboard} />
        <SecureRoute exact path="/calendar" component={Calendar} />
        <SecureRoute exact path="/calendar/{id}" component={Training} />

        <OpenRoute exact path="/" component={Login} />
        <OpenRoute component={Login} />
      </div>
      </Router>
    );
  }
}

function SecureRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

function OpenRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        !auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/dashboard" />
        )
      }
    />
  );
}

export default App;
