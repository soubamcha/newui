import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  // withRouter
} from "react-router-dom";


import Login from './components/Login';
import MenuAppBar from "./components/AppBar";
// import MyDrawer from "./components/Drawer";
import Dashboard from "./components/Dashboard";
import Calendar from "./components/Calendar";
import Training from "./components/Training";
// import MiniDrawer from "./components/MiniDrawer";

import './App.css';

const auth = {
  isAuthenticated: true,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
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
        <OpenRoute exact path="/" component={Login} />
        <OpenRoute path="/login" component={Login} />
        <SecureRoute path="/dashboard" component={Dashboard} />
        <SecureRoute path="/calendar" component={Calendar} />
        <SecureRoute path="/calendar/{id}" component={Training} />
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
          <Redirect to="/calendar" />
          // <Redirect
          //   to={{
          //     pathname: "/dashboard",
          //     state: { from: props.location }
          //   }}
          // />
        )
      }
    />
  );
}

export default App;
